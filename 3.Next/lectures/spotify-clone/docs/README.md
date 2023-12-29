- [1.Goal](#1goal)
- [2.Layout](#2layout)
  - [install](#install)
    - [vscode extension](#vscode-extension)
  - [NextJS Basic](#nextjs-basic)
  - [Typescript TSX](#typescript-tsx)
  - [App Router](#app-router)
    - [metadata](#metadata)
  - [react-icons](#react-icons)
  - [tailwind css](#tailwind-css)
    - [yarn add tailwind-merge](#yarn-add-tailwind-merge)
    - [치트 시트](#치트-시트)
  - [Component 개발](#component-개발)
  - [next/image](#nextimage)
- [3.SuperBase](#3superbase)
- [superbase setting](#superbase-setting)
  - [install cli](#install-cli)

ref
- github : https://github.com/antonioerdeljac/next13-spotify
- yt : https://www.youtube.com/watch?v=2aeMRB8LL4o&t=3509s

# 1.Goal

tech stack : Next 13.4, React, Stripe, Supabase, PostgreSQL, Tailwind
feature
- [ ] 월 구독
- [ ] 음악 썸네일 및 파일 업로드

# 2.Layout

## install

```
yarn create next-app  
✔ What is your project named? … spotify-my
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
```

### vscode extension

Tailwind CSS IntelliSense
ES7+ React/Redux/React-Native snippets

---

## NextJS Basic

클라이언트 컴포넌트 선언  
- 'use client'  
- 클라이언 컴포넌트에서 import하는 하위 컴포넌트는 모두 클라이언트 컴포넌트 이다.   




## Typescript TSX  
- React.FC


## App Router

Router
- routes 설정방법
- next/navigation
  - useRouter  

AppRouter 컨벤션 
- ()로 묶어주는 기능 : app router에서 ()은 페이지 그룹을 의미한다.  
  - url에 영향을 주는 설정은 아니지만, layout과 같은 예약된 컴포넌트에 영향을 준다.    

### metadata

```js
// layout.tsx
export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen to music",
};
```

## react-icons
yarn add react-icons
- https://react-icons.github.io/react-icons/

## tailwind css

- vscode extension : Tailwind CSS IntelliSense
- tailwind.config.ts : theme 확인
- globals.css > @tailwind 선언 확인

### yarn add tailwind-merge

  - 추가적인 클래스 네임을 조건에 따라 넣을 수 있다.  
  - tailwind css를 상속받아야 하는 경우  
  - classnames와 같은 기능  

### 치트 시트 
```
# cheet-sheet 

color
<div className="text-green-500" />;
---
- 반응형 UI만드는 방법  
  - md:hidden : 모바일의 경우에는 숨길수 있는 기능  
---
- group 이라는 classname
  - 부모 선택자 (group), 부모 요소에 hover할 떄 자식요소들이 반응할 수 있다.  
```

---

## Component 개발
- Box
- SideBar
- SideBarItem
- Libray
- Header
- Button

## next/image  

- next/image  
- public/liked.png > import  



# 3.SuperBase



# superbase setting

## install cli

ref: https://supabase.com/docs/guides/api/rest/generating-types

```
npm i supabase@">=1.8.1" --save-dev

# make user access token
npx supabase login 

# Project Settings > General settings
# - sxknzhgfshqsjwocxtnc
npx supabase gen types typescript --project-id sxknzhgfshqsjwocxtnc --schema public > types_db.ts


```