
# Next JS 실습 강좌! React를 더욱 편리하게 SEO
- [Next JS 실습 강좌! React를 더욱 편리하게 SEO](#next-js-실습-강좌-react를-더욱-편리하게-seo)
- [핵심 컨셉](#핵심-컨셉)
  - [공통 :component default props](#공통-component-default-props)
  - [라우팅](#라우팅)
    - [eg) pages 라우팅, dynamic pathname rule](#eg-pages-라우팅-dynamic-pathname-rule)
    - [eg) useRouter](#eg-userouter)
    - [eg) Link](#eg-link)
  - [빌트인 컴포넌트 - Head](#빌트인-컴포넌트---head)
    - [eg) Head 컴포넌트를 이용한 header 태그 수정](#eg-head-컴포넌트를-이용한-header-태그-수정)
    - [eg) Head 컴포넌트화](#eg-head-컴포넌트화)
  - [빌트인 컴포넌트 _app.js](#빌트인-컴포넌트-_appjs)
    - [eg) Layout 컴포넌트 사용.](#eg-layout-컴포넌트-사용)
  - [빌트인 CSS module](#빌트인-css-module)
    - [eg) module.css 적용](#eg-modulecss-적용)
  - [빌트인 컴포넌트 Image](#빌트인-컴포넌트-image)
    - [eg) config.js -> Image Component](#eg-configjs---image-component)
  - [SRR - Server Side Rendering](#srr---server-side-rendering)
    - [eg) getServerSideProps - 1](#eg-getserversideprops---1)
    - [eg) getServerSideProps - 2 dynamicSSR](#eg-getserversideprops---2-dynamicssr)
  - [SSG - Static Site Rendering](#ssg---static-site-rendering)
    - [eg) getStaticProps - 1](#eg-getstaticprops---1)
    - [eg) getStaticPaths - 2 dynamic SSG](#eg-getstaticpaths---2-dynamic-ssg)
  - [Deploy to Vercel](#deploy-to-vercel)

ref : 
tutorial 
https://www.youtube.com/watch?v=pdWQvfQBSGg&list=PLtFBvXtDoP-LeZoZ5RoKTi4Gs9jUaWwpA&index=1

# 핵심 컨셉

## 공통 :component default props 
 
```js
const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword}></meta>
      <meta content={contents}></meta>
    </Head>
  );
};
HeadInfo.defaultProps = {
  title: "My Blog",
  keyword: "blog powered by Next js",
  contents: "practice next js",
};

export default HeadInfo;
```

## 라우팅

1. 폴더 pages/ : 디렉터리 기반의 라우팅 제공   
2. 폴더 public/ : static file 제공  

- static 파일을 제공 : public 폴더를 정적폴더로 사용하므로, URL 요청하면 제공한다.
- eg) localhost:3000/favicon.ico

### eg) pages 라우팅, dynamic pathname rule

```
// pathname rule : [id] 라고  dynamic path 을 설정 가능 
pages
├── _app.js
├── albums
│   ├── [id]
│   │   └── index.js
│   └── index.js
├── api
│   └── hello.js
├── index.js
├── photos
│   ├── [id]
│   │   └── index.js
│   └── index.js
└── pictures
    ├── [id]
    │   └── index.js
    └── index.js

7 directories, 9 files

```

### eg) useRouter 

```js
import { useRouter } from "next/dist/client/router";

const index = ({ photo, renderingType }) => {
  const router = useRouter();
  ...
}
// result 
ServerRouter {
  route: '/photos/[id]',
  pathname: '/photos/[id]',
  query: { id: '1' },
  asPath: '/photos/1',
  isFallback: false,
  basePath: '',
  locale: undefined,
  locales: undefined,
  defaultLocale: undefined,
  isReady: false,
  domainLocales: undefined,
  isPreview: false,
  isLocaleDomain: false
}

```

### eg) Link

✅ Link 태그를 이용한 라우팅

- 목적 : 링크에 들어간 컴포넌트는 CSR 제공
- route url에서 첫 pages는 프리랜더를 제공

```js
import Head from "next/head"; // Head - (react-helmet)
import Link from "next/link"; // Link - (react-router-dom)

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/photos">photos</Link>
        </li>
      </ul>
      <h2>Welcome</h2>
    </div>
  );
}
```


## 빌트인 컴포넌트 - Head 

기존의 리액트 라이브러리중 react-helmet 을 대신함.  

### eg) Head 컴포넌트를 이용한 header 태그 수정  

```js
// - title 태그 변경
// - meta 태그 변경  
<Head>
  <title>{title}</title>
  <meta keyword={keyword}></meta>
  <meta content={contents}></meta>
</Head>
```

### eg) Head 컴포넌트화 
```js
import React from "react";
import Head from "next/head";

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword}></meta>
      <meta content={contents}></meta>
    </Head>
  );
};
HeadInfo.defaultProps = {
  title: "My Blog",
  keyword: "blog powered by Next js",
  contents: "practice next js",
};

export default HeadInfo;

```



## 빌트인 컴포넌트 _app.js

✅ **\_app.js** 에 layout 컴포넌트 사용하기

### eg) Layout 컴포넌트 사용.  

- \_app.js 는 최상의 HOC 라고 볼 수 있다 .?
- 모든 페이지에 공통적으로 적용될 layout가 있다면, 이 컴포넌트에서 합성할 수 있음. 

```js
import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
```



## 빌트인 CSS module

- Next.js supports CSS Modules using the [name].module.css file naming convention.
- CSS를 마치 모듈 export 객체로 바라본다.  닷(.) 을 이용해서 특정 요소의 classname에 대입.
- 이는 코드 스플리팅시, 최소한의 CSS만 로드되도록 보장


### eg) module.css 적용


```jsx
// Nav.module.css
.navigation {
  background-color: cadetblue;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  min-height: 30px;
}
.navigation li {
  color: wheat;
  margin-right: 30px;
}

// Nav.js
import navStyles from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <ul className={navStyles.navigation}>
      <li>
        <Link href="/">home</Link>
      </li>
    </ul>
  );
};

```

## 빌트인 컴포넌트 Image 

- next.config.js 에서 images.domain 으로 허용된 도메인만 가져올 수 있도록 한다.
- 반드시 src,width,height 설정을 해야 한다.

### eg) config.js -> Image Component

```js
// next.config.js
module.exports = {
  images: {
    domains: ["via.placeholder.com"],
  },
};

// index.js
<>
  <Image
    src={photo.thumbnailUrl}
    alt={photo.title}
    width="150"
    height="150"
  />
  ...
</>
```


---


## SRR - Server Side Rendering   

getServerSideProps  
  - context을 통해 dynmaic routing을 처리  


### eg) getServerSideProps - 1

```js
// getServerSideProps 을 export하게 되면 이 페이지는 SSR로 변경된다.
// SSR시 필요한 props을 마련하는 함수
export const getServerSideProps = async (context) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
```
### eg) getServerSideProps - 2 dynamicSSR


```js
// 동적 라우팅 --> SSG 을 위해, 경로에 대한 정보를 context에서 가져온다.
export const getServerSideProps = async (context) => {
  console.log("🚀 getServerSideProps");
  // console.log("context", context);
  // context {
  //   ...
  //   query: { id: '10' },
  //   resolvedUrl: '/pictures/10',
  //   params: { id: '10' },
  //   locales: undefined,
  //   locale: undefined,
  //   defaultLocale: undefined
  // }
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${context.params.id}`
  );
  const photo = await res.json();
  // console.log("photo", photo);
  return {
    props: {
      photo,
      renderingType: "ServerSideRender",
    },
  };
};

```

## SSG - Static Site Rendering  

getStaticProps - for SSG  
getStaticPaths - for dynamic SSG   

### eg) getStaticProps - 1

```js
// getStaticProps 을 export하면, 이 페이지는 SSG 대상이 된다.
// -  *SSR과 같이 사용할 수 없다(애초에 다른 목적이므로)

// increment static regeneration
// -  SSG로 빌드하고, 언제 다시 최신데이터로 리빌딩 할건가 ?
// -  eg) revalidate: 20, // 20sec 마다 SSG 생성

export const getStaticProps = async () => {
   const res = await fetch(
     "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10"
   );
   const posts = await res.json();

   return {
     props: {
       posts,
     },
     revalidate: 20, // 20sec 마다 SSG 생성
   };
 };
```

### eg) getStaticPaths - 2 dynamic SSG

- 현재 동적 라우팅 photos/[id]  
- context 로 id에 대한 변수 range제공 해야함. (paths.id 결정)  


```js

// 동적 라우팅 --> SSG 을 위해, 경로에 대한 정보를 context에서 가져온다.
export const getStaticProps = async (context) => {
  console.log("🚀 getStaticProps");
  //   console.log("context", context);
  //   context {
  //     params: { id: '1' },
  //     locales: undefined,
  //     locale: undefined,
  //     defaultLocale: undefined
  //   }
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${context.params.id}`
  );
  const photo = await res.json();
  // console.log("photo", photo);
  return {
    props: {
      photo,
      renderingType: "StaticSite",
    },
    revalidate: 300,
  };
};

// SSG을 선택했고, route 경로에 [ ] ( query,params) 가 있다면
// 해당 경로들의 Range를 지정해 줘야 한다.
export const getStaticPaths = async () => {
  console.log("🚀 getStaticPaths");
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
  );
  const photos = await res.json();
  const paths = photos.map((photo) => {
    return { params: { id: String(photo.id) } };
  });
  //   console.log("path", paths);

  return {
    paths,
    // fallback: false,  // 없으면 404 애러
    fallback: "blocking", // blocking 경우에는 경로가 없다면 context 동적으로 만들어 랜더링해서 제공
  };
};

```

## Deploy to Vercel  

주의 사항  
- rootDir 경로 확인  
- npm, yarn lock 파일은 하나만 사용할 것  
- 로컬에서 build 이후 베포하기  
  - SSR 사용하게 되면, index 컴포넌트에서는 훅 사용 불가  