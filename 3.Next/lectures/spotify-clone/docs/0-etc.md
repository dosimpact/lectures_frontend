
- [styles](#styles)
- [font](#font)
  - [next/font/google](#nextfontgoogle)


## NextJS의 랜더링 전략  

https://nextjs.org/docs/app/building-your-application/rendering/server-components  

### 랜더링 종류  

1.Client Component  
- 클라이언트의 브라우저에서 작동하는 랜더링들, 리액트만 사용하면 모두 클라이언트 컴포넌트를 사용한 것이다. 

2.Server Component  
- 서버측에서 동작하는 랜더링  
- React Server Component를 정의해서 사용한다.  
- 3가지 전략이 있다.  
  - Static Rendering : 정적파일을 미리 생성, CDN푸쉬 등 콘텐츠를 딜리버리하기 좋다.  
  - Dynamic Rendering : 요청이 발생하면 랜더링을 시작한다.  
  - Streaming : 점진적으로 랜더링을 하며, 초기 로딩속도를 개선할 수 있다.  



## Custom Webpack Config

ref : https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config

example) bundle-analyzer 설치를 통해 웹팩을 커스터 마이징 해보자  

패키지 설치  
- 자주 사용하는 모듈이므로 next에서 제공해준다.   

```js
//eg - 1
yarn add @next/bundle-analyzer

//eg - 2
yarn add @next/mdx @mdx-js/loader
```

next.config.js
- withBundleAnalyzer 로 객체를 래핑 하도록 한다.  
- 기존의 웹팩 설정은 다음처럼 확장 가능하다.
```js
/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    // isServer : 웹팩 함수는 server,client 각각 한번씩 실행된다.
    return config
  },
})

```

---



## structure 
app 이라는 폴더 하위에 디렉터리 구조가 라우터 트리구조가 된다.  
- app/about/pages.jsx 

동적 라우팅은 아래처럼 대괄호를 사용  
- app/portfolio/[category]/pages

페이지 그룹핑, 아래처럼 소괄호를 사용
- app/dashboard/(auth)/login/pages

## layout  

layout으로 page단위 적용할 상위 컴포넌트를 만들 수 있다.
- app/blog/layout.jsx + app/blog/pages.jsx
- layout 컴포넌트의 children이 pages가 된다.  

root layout이 있다.
- app/layout의 RootLayout 이다. 이는 페이지 전체에 반영된다.


## Link

```js
import Link from "next/link";
...
      <Link href="/" className={styles.logo}>
        lamamia
      </Link>
```

## loading, error

loading 및 error 페이지도 공통적으로 사용할 수 있다.
- app/blog/loading.jsx + app/blog/error.jsx + app/blog/pages.jsx

# styles

글로벌 스타일은 아래 파일에서 설정
- app/globals.css  

각 컴포넌트별 css 모듈은 아래 파일처럼 만들면 된다.
- app/blog/module/css

```js
import styles from "./page.module.css";


const Blog = async () => {
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;

```

---
# font

## next/font/google

eg) google font를 body에 적용시키기. rootLayout에 적용 시킨다.

```js
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

```