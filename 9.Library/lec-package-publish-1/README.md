
# npm package Registry


## 패키지 만들기

- package.json 만들기

    npm init
        package name : @Scope/Name  // 프로젝트명|닉네임 등을 스코프로 잡는다.  
        "main": "main.js",

## 패키지 작성하기

- main.js 작성

## 패키지 베포 하기

npm publish --access public // 패키지 베포하기, (로그인 필요)

npm login // 로그인하기 ( username , password ). 

## 패키지 버전 업데이트

- package.json 수정
  -  "version": "0.0.2",

npm publish --access public // 패키지 재베포

--- 


# npm package download  

## 패키지 버전 확인하기  

npm outdated

npm update
  - 직접 package.json 에서 버전을 명시하고 
  - npm update 명령

  - 혹은 시멘틱 버전을 명시 후 npm update 

eg) 빨간색 글자로 업데이트 필요한 패키지를 명시 

$ npm outdated
  Package        Current  Wanted  Latest  Location                    Depended by
  @dosimpact/hi    0.1.0   0.1.1   0.1.1  node_modules/@dosimpact/hi  consumer

$ npm update
  changed 1 package, and audited 2 packages in 2s
  found 0 vulnerabilities

---


# npm cli

## cli 패키지 만들기  

cli.js 에서 명령형 코드를 작성한다 ( 컨백션 )  

CLI arguments -> process.argv 에 담겨 있다.  

```
eg)
$ node cli.js ko
  [
    '/usr/bin/node',
    '/home/ubuntu/workspace/lectures/lectures_modern_FE/9.Library/lec-package-publish-1/producer/cli.js',
    'ko'
  ]
```

- main.js 수정
  - 파일 권한 수정하기 ( 실행 권한 부여 ) $ chmod 744 cli.js 
  - 첫 줄에 #!/usr/bin/env node (shebang line 추가) - 유닉스계열에서 텍스트 파일 인터프리터 지정  
  
- package.json 수정  

  ```  
  "bin": {
    "say-hi": "./cli.js"
  }
  ```



```
cf)
#!/usr/bin/env node is an instance of a shebang line: 
the very first line in an executable plain-text file on Unix-like platforms
that tells the system what interpreter to pass that file to for execution, 
via the command line following the magic #! prefix (called shebang).

cf) 명령어인자까지 포함된 bin 값은 다음과 같은 오류 발생

npm ERR! enoent ENOENT: no such file or directory, chmod '/home/ubuntu/workspace/lectures/lectures_modern_FE/9.Library/lec-package-publish-1/consumer/node_modules/@dosimpact/hi/cli.js ko'
```

## cli 패키지 사용해보기 

설치 방식  

  - 1. 로컬 설치  
  - 2. 전역 설치  
  - 3. npx 한번만 실행  

1. 로컬 설치
```
로컬 프로젝트 폴더
├── index.js
├── node_modules
│   ├── .bin
│   │   └── say-hi -> ../@dosimpact/hi/cli.js
│   ├── .package-lock.json
│   └── @dosimpact
│       └── hi
│           ├── cli.js 
│           ├── main.js
│           └── package.json
├── package-lock.json
└── package.json

package.json 에 bin 을 셋팅해 두니, cli.js 으로 연결되는 것을 볼 수 있다.  

- ./node_modules/.bin/say-hi 
hi :  안녕~!
```

2. 글로벌 설치  
```
--- 글로벌 설치시 다음 명령어 수행 가능 및 위치  
sudo npm i -g @dosimpact/hi
ubuntu@ubuntu:~/workspace$ say-hi
hi :  안녕~!

ubuntu@ubuntu:~/workspace$ which say-hi
/usr/bin/say-hi

--- 명령어 say-hi 는 , 다음처럼 링킹 되어 있다.
ubuntu@ubuntu:/usr/bin$ ll | grep say-hi
lrwxrwxrwx  1 root   root          40 Mar 25 07:43 say-hi -> ../lib/node_modules/@dosimpact/hi/cli.js*

--- 전역 npm 모듈의 위치 
ubuntu@ubuntu:/usr/lib/node_modules$ ll
total 44
drwxr-xr-x 11 root root 4096 Mar 25 07:43  ./
drwxr-xr-x 91 root root 4096 Mar  2 06:03  ../
drwxr-xr-x  3 root root 4096 Mar 25 07:43 '@dosimpact'/
drwxr-xr-x  3 root root 4096 Oct 28 07:55 '@nestjs'/
drwxr-xr-x  3 root root 4096 Oct 17 02:19 '@vue'/
drwxr-xr-x  3 root root 4096 Dec 18 07:58  create-react-app/
```

3. npx 설치

- 최신 패키지를 다운로드 받아 실행한다.  
- 단점은 매번 다운로드 받는점 
- npx 실행 우선 순위 : 로컬 패키지 > 글로벌 패키지 > 없는패키지( 다운 후 지움 )

```
$ sudo npx @dosimpact/hi say-hi ko
hi :  undefined

--- 인자 p 를 넘겨주면, argv 에 들어간다. 
$ sudo npx -p  @dosimpact/hi say-hi ko
hi :  안녕~!
```


```

```

# ref 

opentutorials : https://www.opentutorials.org/module/4571/27568  


