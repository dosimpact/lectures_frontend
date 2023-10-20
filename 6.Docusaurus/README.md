- [multi-repo](#multi-repo)
  - [Goal , 멀티 계정으로 푸쉬하기](#goal--멀티-계정으로-푸쉬하기)
  - [계정바꿔가며 깃 커밋하기 요약](#계정바꿔가며-깃-커밋하기-요약)
  - [process](#process)
  - [Personal account-myid-1](#personal-account-myid-1)
  - [Personal account-myid-2](#personal-account-myid-2)
- [래포 생성](#래포-생성)
- [install](#install)
- [github action](#github-action)
  - [개요](#개요)
  - [workflow 추가](#workflow-추가)
  - [github setting](#github-setting)
  - [docusaurus.config.js 변경](#docusaurusconfigjs-변경)
  - [다시 커밋을 만들어서 푸쉬하여 CI를 밟는다.](#다시-커밋을-만들어서-푸쉬하여-ci를-밟는다)
- [SEO](#seo)
  - [trailingSlash](#trailingslash)
  - [서치콘솔등록](#서치콘솔등록)
  - [robots.txt 추가](#robotstxt-추가)
  - [GA 붙이기](#ga-붙이기)
  - [사이트맵 생성 및 등록](#사이트맵-생성-및-등록)



# multi-repo


## Goal , 멀티 계정으로 푸쉬하기

	새로운 깃헙 계정을 팠다, https://github.com/myid-2?tab=repositories 
	하지만 기존의 계정으로, 해당 레포에 컨트리뷰터로 올라간다.
	ssh 를 사용하되 계정을 바꿔서 커밋하자.
		user.email : myid-2@naver.com
		user.name :  myid-2

## 계정바꿔가며 깃 커밋하기 요약

ref) 
https://usingu.co.kr/frontend/git/%ED%95%9C-%EC%BB%B4%ED%93%A8%ED%84%B0%EC%97%90%EC%84%9C-github-%EA%B3%84%EC%A0%95-%EC%97%AC%EB%9F%AC%EA%B0%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0/

방법
	계정 1. (기존) myid-1 , 계정 2. (새로운) myid-2

[1] ssh 인증
- 각 계정의 ssh-key를 만들어서, github에 공개키를 등록하고 로컬에서 비밀키로 인증한다.

[2] ssh 설정
- myid-2 계정으로 인증할때는,  ssh 도메인 주소를 변경해서 , id_rsa_myid-2 키를 타도록한다. 
- 인증에 성공해서 레포에 푸쉬를 할 수 있다. 
- 커미터 정보를 , myid-2 로 하기위해 로컬 레포에 한정해서 user.email , user.name 을 변경한다.
 ( 이 설정을 안하면 , myid-1의 계정으로 커밋터가 된다. ) 


## process

// 0.
cd ~/.ssh

// 1. 각 키 생성 
	ssh-keygen -t rsa -C "myid-1@gmail.com" -f "id_rsa_myid-1"
ssh-keygen -t rsa -C "myid-2@naver.com" -f "id_rsa_myid-2"
ssh-keygen -t rsa -C "myid-2@naver.com" -f "id_rsa"


//  2. ssh-agent에 등록 
	>ssh-add id_rsa_myid-1
>ssh-add id_rsa_myid-2
	
	//확인
	>ssh-add -l

	3072 SHA256:Q6+jD5XCUndXMqG5x8Soqk3WWX5GqNbX3i9j86UDjcc myid-1@gmail.com (RSA)
	3072 SHA256:22dNKg4vehTS60TsgTN4sLgq9mw1P44rVStY9fFg814 myid-2@naver.com (RSA)
	

//   3. ~/.ssh/config 수정 (없으면 만들기.)

## Personal account-myid-1 
Host github.com-myid-1
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa_myid-1

## Personal account-myid-2
Host github.com-myid-2
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa_myid-2


// 4. GitHub에 새 SSH 공개키 추가하기


// 5. 엑세스 확인

		ssh -T github.com-myid-2
		Hi myid-2! You've successfully authenticated, but GitHub does not provide shell access.
		
		ssh -T github.com-myid-1
		Hi myid-2! You've successfully authenticated, but GitHub does not provide shell access.
	
	// 결과, 
	// git remote 를 하면 
	// origin  git@github.com-myid-2:myid-2/multi-user.git (push) 라고 나오는데
	// "-myid-2 " 라는 정보때문에,  서로 다른 비밀키를 타도록 분기 할 수 있는 것.


// 깃 레포 받아오기 
	
	깃 레포에서 ssh 로 클론 주소를 복사하면 아래와 같다.
	git clone git@github.com:myid-2/multi-user.git
	
	아래처럼 호스트를 바꿔서, 받아오자. ( 서로 다른 비밀키를 분기하도록 )
	git clone git@github.com-myid-2:myid-2/multi-user.git


// 각 프로젝트 로컬에, gitconfig 추가하기 ( 커밋터 정보 입력 )

	git config --local user.name "myid-2"
	git config --local user.email "myid-2@naver.com"
	
		//확인
		git config --local --list
	
	
	git config --local user.name "myid-1"
	git config --local user.email "myid-1@gmail.com"

// 의문
? myid-2 계정에 myid-1 인증을 안했는데... ? 
	- 접근 권한은 ssh-key가 있어서 된것이고
	- 커밋터는 , config --local 정보로 기입되는건가 ?


# 래포 생성

repo이름을 내닉네임.github.io 처럼 만들자.

닉네임.github.io
https://github.com/DosImpact/dosimpact.github.io.git

eg) https://github.com/joshua1988/joshua1988.github.io
- 그래야 github pagse를 만들때 서브 도메인이 안붙는다. 
# install

https://docusaurus.io/docs/installation
```
npx create-docusaurus@latest my-website classic
```


# github action

https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions

## 개요

1. 다큐 소스가 있는 github 저장의 main branch push  
2. github action을 이용한 배포과정(워크플로우) 실행 
3. gh-pages 에 자동으로 배포 한다.  

## workflow 추가

그냥 붙여넣기 하면된다. ssh 키 셋팅을 따로해야하는줄 알았는데 아니었다.

.github/workflows/deploy.yml

```
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
    # Review gh actions docs if you want to further define triggers, paths, etc
    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: yarn

      - name: Install dependencies
        run: yarn install --frozen-lockfile
      - name: Build website
        run: yarn build

      # Popular action to deploy to GitHub Pages:
      # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          # Build output to publish to the `gh-pages` branch:
          publish_dir: ./build
          # The following lines assign commit authorship to the official
          # GH-Actions bot for deploys to `gh-pages` branch:
          # https://github.com/actions/checkout/issues/13#issuecomment-724415212
          # The GH actions bot is used by default if you didn't specify the two fields.
          # You can swap them out with your own user credentials.
          user_name: github-actions[bot]
          user_email: 41898282+github-actions[bot]@users.noreply.github.com
```

## github setting 
[1]
GITHUB_TOKEN 은 자동으로 발급되는데, 기본 권한은 readonly 이다.    
repo에 gh-pages branch를 만들고 푸쉬 하도록 쓰기 권한을 부여하자.  

프로젝트 레파지토리 > Settings > Actions 탭의 General > Workflow permissions 항목에서  
- Read and write permissions 으로 변경하자.

[2]
아래 설정을 하지 않으면, README.md가 나온다. CI과정을 거쳐 gh-pages라는 브랜치로 배포가 되니 설정을 변경하자.

project setting > pages > github pages > branch > gh-pages가 나온다.

## docusaurus.config.js 변경


github repo이름이 myname.github.io 이 아닌 커스텀 이름인 경우  

- 다음처럼 내 래포 이름(hello-world-docusaurus)으로 변경한다.  
  baseUrl: "/hello-world-docusaurus/",  

## 다시 커밋을 만들어서 푸쉬하여 CI를 밟는다.  


# SEO

Guide : 
- https://docusaurus.io/docs/seo
- https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt?hl=ko 


구글 서치 콘솔에 맞게 최적화를 진행하자.

```
yarn add @docusaurus/plugin-google-gtag @docusaurus/plugin-sitemap
```

## trailingSlash

https://melonicedlatte.com/2023/02/05/232900.html
-  trailingSlash: false 로 설정하여, 마크 다운 파일을 index.html 이 아닌 myDoc.html 처럼 만들도록 한다. 

## 서치콘솔등록


[1] 사이트맵 수집 오류 해결
docusaurus.config.js
```
  // Set the production url of your site here
  url: "https://nickname.github.io",
```
## robots.txt 추가

- static/robots.txt 하위 경로에 추가한다.

```
User-agent: *
Allow: /

Sitemap: https://nickname.github.io/sitemap.xml
```


## GA 붙이기

https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag 
- yarn add @docusaurus/plugin-google-gtag 패키지 설치 이후 아래 
- docusaurus.config.js 수정

```
  ...
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        + gtag: {
        +   trackingID: "G-GY41PYRR94",
        +   anonymizeIP: true,
        + },
      }),
    ],
  ],
```
## 사이트맵 생성 및 등록

```

...
  theme: {
          customCss: require.resolve("./src/css/custom.css"),
   },
   
   sitemap: {
          changefreq: "daily",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },

```

```

<meta name="google-site-verification" content="Ov_hk6LqaaE5KiwXnqF2gTKwPxBE3qG5Zr3o5UWZXc8" />

    metadata: [
        {
          name: "keywords",
          content:
            "frontend, 취업가이드, 개발자 취업, 포트폴리오, 코테 공부, 개발자 현실, 프론트 개발자",
        },
        {
          name: "google-site-verification",
          content: "Ov_hk6LqaaE5KiwXnqF2gTKwPxBE3qG5Zr3o5UWZXc8",
        },
      ],
```