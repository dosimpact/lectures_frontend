- [ref](#ref)
- [1.Goal](#1goal)
- [2.Layout](#2layout)
  - [install](#install)
    - [vscode extension](#vscode-extension)
  - [NextJS Basic](#nextjs-basic)
    - [Client, Server Component](#client-server-component)
    - [metadata](#metadata)
    - [revalidate](#revalidate)
    - [middleware](#middleware)
  - [Typescript TSX](#typescript-tsx)
  - [App Router](#app-router)
    - [AppRouter 컨벤션](#approuter-컨벤션)
    - [useRouter](#userouter)
  - [react-icons](#react-icons)
  - [tailwind css](#tailwind-css)
    - [yarn add tailwind-merge](#yarn-add-tailwind-merge)
  - [next/image](#nextimage)
    - [public 폴더 이미지 넣기](#public-폴더-이미지-넣기)
    - [image domains allow](#image-domains-allow)
    - [Image 속성](#image-속성)
  - [Task](#task)
  - [Button + forwardRef](#button--forwardref)
- [3.SuperBase](#3superbase)
  - [superbase를 쓰면 좋은 점](#superbase를-쓰면-좋은-점)
  - [superbase setting](#superbase-setting)
  - [connection with DBeaver](#connection-with-dbeaver)
  - [nextjs .env setup](#nextjs-env-setup)
  - [create a new tables with Quickstarts](#create-a-new-tables-with-quickstarts)
  - [create a new tables with editor](#create-a-new-tables-with-editor)
    - [songs](#songs)
    - [liked\_songs](#liked_songs)
  - [RLS Poilicy 설정](#rls-poilicy-설정)
    - [what is RLS](#what-is-rls)
  - [storage](#storage)
    - [storage policy](#storage-policy)
- [4.suberbase types](#4suberbase-types)
  - [install cli, generate code](#install-cli-generate-code)
- [5.Providers for auth and superbase](#5providers-for-auth-and-superbase)
  - [install](#install-1)
  - [superbase-js usage](#superbase-js-usage)
  - [Task](#task-1)
- [6.Authentication modal and functionality](#6authentication-modal-and-functionality)
  - [Task](#task-2)
  - [OAuth github added](#oauth-github-added)
    - [New OAuth Apps](#new-oauth-apps)
    - [Superbase Provider add](#superbase-provider-add)
- [7.Upload modal and functionality](#7upload-modal-and-functionality)
  - [Task](#task-3)
- [8.Songs fetching and list display](#8songs-fetching-and-list-display)
  - [Task](#task-4)
  - [install](#install-2)
  - [query-string](#query-string)
- [9.Favorites functionality](#9favorites-functionality)
  - [Task](#task-5)
- [10.](#10)
  - [Task](#task-6)
- [11.](#11)
- [12.](#12)
- [13.](#13)

# ref

- github : https://github.com/antonioerdeljac/next13-spotify
- yt : https://www.youtube.com/watch?v=2aeMRB8LL4o&t=3509s

# 1.Goal

Tech stack 
- Next 14, zustand
- Supabase, PostgreSQL, Stripe
- Tailwind, @radix-ui, react-hot-toast, react-icons

Tech Feature
- [ ] Superbase OAuth, SQL, Stoage
- [ ] stripe 결제

Feature
- [ ] 음악 썸네일 및 파일 업로드
- [ ] 음악 검색
- [ ] 좋아요 한 음악  
- [ ] 내 라이브러리  

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
- rafac. 

---

## NextJS Basic

### Client, Server Component 
1.NextJS에서 컴포넌트는 기본적으로 서버컴포넌트이다.  
- Client Component 선언을 위해서 'use client'을 파일위에 적어준다.    
- Client Component에서 import하는 하위 컴포넌트는 모두 Client Component 이다.   
- Client Component에서 useState 등의 리액트 라이프싸이클 훅을 사용할 수 있다.  

### metadata

```js
// layout.tsx
export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen to music",
};
```

### revalidate

ref : https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
```js
// 0 은 요청이 들어오면 페이지가 다시 생성된다는 의미이다.  
// 60 이라면, 60초마다 페이지를 다시 생성 한다, 정적페이지의 내용을 주기적으로 업데이트하고 최신데이터를 유지한다.  
export const revalidate = 0;
```

### middleware

```js
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  /* 사용자 세션을 가져와야 서버컴포넌트에서 object에 접근할 수 있다. */
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();
  return res;
}

```


## Typescript TSX  
- React.FC 로 props 정의하는 법  
- forwardRef로 props 정의하는 법  

## App Router

### AppRouter 컨벤션 
- ()로 묶어주는 기능 : app router에서 ()은 페이지 그룹을 의미한다.  
  - url에 영향을 주는 설정은 아니지만, layout과 같은 예약된 컴포넌트에 영향을 준다.    

### useRouter

```js
import { useRouter } from "next/navigation";

  const router = useRouter();
  router.refresh();
  router.back()
  router.forward()
  router.push("/")
```

---

## react-icons
yarn add react-icons
- https://react-icons.github.io/react-icons/

## tailwind css

- vscode extension : Tailwind CSS IntelliSense
- tailwind.config.ts : theme 확인
- globals.css > @tailwind 선언 확인

### yarn add tailwind-merge

추가적인 클래스 네임을 조건에 따라 넣을 수 있다.  
  - classnames와 같은 기능  
  - 1.props로 className을 받는 경우
  - 2.상태에 따라 조건부로 className을 거는 경우

---

## next/image  

### public 폴더 이미지 넣기 

```js
import Image from "next/image";

src : public 폴더 하위의 경로
<Image className="object-cover" src={"/images/liked.png"} fill alt="Image" />
```

### image domains allow

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "misc.scdn.co",
      "i.scdn.co",
      "geo-media.beatsource.com",
      "i1.sndcdn.com",
      "media.pitchfork.com",
      "seed-mix-image.spotifycdn.com",
      "sxknzhgfshqsjwocxtnc.supabase.co",
    ],
  },
};

module.exports = nextConfig;

---
        <Image
          className="object-cover"
          src={imagePath || "/images/music-placeholder.png"}
          fill
          alt="Image"
        />
```

### Image 속성

https://mycodings.fly.dev/blog/2022-09-08-all-about-nextjs-image-component

```js
-> fill : 이미지를 상위 엘리먼트의 width, height에 맞추기 위해 자동으로 width, height를 조절합니다. 꼭 상위 엘리먼트에 position: relative 옵션을 적용해야 합니다. 
            <div className="relative h-32 w-32 lg:h-44 lg:w-44">
              <Image
                className="object-cover"
                fill
                src="/images/liked.png"
                alt="Playlist"
              />
            </div>
```

## Task 

global.css
```
html,
body,
:root {
  height: 100%;
  background-color: black;
  color-scheme: dark;
}
```

SideBar
- routes 정의(아이콘,라벨,활성화여부)

Component 개발
- Box
- SideBarItem
- Libray
- Header
- Button


## Button + forwardRef

```js
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, type = "button", className, disabled }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={twMerge(
          `w-full px-3 py-3 
          bg-green-500 text-black font-bold 
          rounded-full border border-transparent
          hover:opacity-75 transition 
          disabled:cursor-not-allowed disabled:opacity-50
          `,
          className
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button"; // 개발자 도구에서 표시할 이름

export default Button;

```

# 3.SuperBase

## superbase를 쓰면 좋은 점

보통필요한 백앤드 비즈니스 로직이 다 포함되어 있다.  
- 이메일 로그인, 구글 로그인 등등  
- storage도 같이 포함되어 있다.  
- 회원가입시 이메일, 패스워드 리셋 기능 등 있다. 
- DDL Editor 제공
- DML Editor 제공

firebase의 SQL버전이라고 보면 된다.!  
그래서 백앤드 서버 개발없이 superbase를 사용하면, DB + REST API 서버까지 생긴다고 본다.  


## superbase setting

회원가입 및 조직 만들기  
- 프리티어는 2개의 조직을 만들 수 있다.  
- 프리티어에서 일정시간 이후 활동이 없으면 프리즈 된다. 

## connection with DBeaver 
superbase > Settings   
- Host, Database name, Port, User  
- Password : 조직생성시 한번만 만들어지는 비밀번호 입력  

## nextjs .env setup

```
# Update these with your Supabase details from your project settings > API
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Update these with your Stripe credentials from https://dashboard.stripe.com/apikeys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```



## create a new tables with Quickstarts

SQL Editor > Quickstarts > Stripe Subsciptions

> 참고 superbase.sql.md

결과 : 다음의 테이블이 생성된다.  
- users  
- products  
- prices  
- customers  
- subscriptions

## create a new tables with editor

### songs

```
id int8
created_at timestamptz now()
title text null
song_path text null
image_path text null
author text null
user_id uuid # user.id 외래키 등록 
```


### liked_songs

- user_id, song_id 두개를 하나의 복합 키로 만든다.  
- user.id, song.id 모두 외래키이다. 
```
user_id uuid primary # user.id 외래키
song_id int8 primary # song.id 외래키  
created_at timestamptz now()
```

결과 : 다음의 테이블이 생성된다.  
- songs  
- liked_songs  

## RLS Poilicy 설정 

### what is RLS

Row Level Security  
- Using Row Level Security with Supabase Auth.  
- Supabase Auth is designed to work perfectly with Postgres Row Level Security (RLS).  
- You can use RLS to create Policies that are incredibly powerful and flexible, allowing you to write complex SQL rules which fit your unique business needs.

- Supabase 인증과 함께 행 수준 보안 사용
- Supabase Auth는 Postgres RLS(Row Level Security)와 완벽하게 작동하도록 설계되었습니다.
- RLS를 사용하면 매우 강력하고 유연한 정책을 생성할 수 있으므로 고유한 비즈니스 요구 사항에 맞는 복잡한 SQL 규칙을 작성할 수 있습니다.

```
# songs

# SELECT - Enable read access for all users

CREATE POLICY "Enable read access for all users" ON "public"."songs"
AS PERMISSIVE FOR SELECT
TO public
USING (true)

# INSERT - Enable insert for authenticated users only

CREATE POLICY "Enable insert for authenticated users only" ON "public"."songs"
AS PERMISSIVE FOR INSERT
TO authenticated

WITH CHECK (true)
---

# liked_songs

# SELECT - Enable read access for all users
CREATE POLICY "Enable insert for authenticated users only" ON "public"."liked_songs"
AS PERMISSIVE FOR INSERT
TO authenticated
WITH CHECK (true)

# INSERT - Enable insert for authenticated users only
CREATE POLICY "Enable read access for all users" ON "public"."liked_songs"
AS PERMISSIVE FOR SELECT
TO public
USING (true)

# DELETE - Enable delete for users based on user_id
CREATE POLICY "Enable delete for users based on user_id" ON "public"."liked_songs"
AS PERMISSIVE FOR DELETE
TO public
USING (auth.uid() = user_id)
```

## storage 

2개의 버킷을 만든다. 
- Public 버킷으로 설정하여, 정적파일에 누구나 접근할 수 있도록 한다.  
- MIME types을 설정해서 정적파일에 대한 유효성 검사를 할 수 있다.  

Name of bucket : songs
MIME TYPE : audio/mpeg

Name of bucket : songs
audio/mpeg : audio/mpeg

### storage policy 

스토리지 역시 권한을 설정할 수 있다.   
- 2개 버킷에 대해서 모든 권한을 부여해주자.  

```
allow all 
- apply insert, update, create, delete
```

# 4.suberbase types

## install cli, generate code 

ref: https://supabase.com/docs/guides/api/rest/generating-types

```
npm i supabase@">=1.8.1" --save-dev

# make user access token
npx supabase login 
npx supabase login --no-browser --token # 토큰을 이용해서 로그인도 가능 


# Project Settings > General settings > Reference ID > sxknzhgfshqsjwocxtnc
npx supabase gen types typescript --project-id sxknzhgfshqsjwocxtnc --schema public > types_db.ts
# types_db.ts 라는 TS타입 파일이 만들어 진다.  

```

# 5.Providers for auth and superbase

## install

```
yarn add @supabase/supabase-js
yarn add @supabase/auth-helpers-nextjs
yarn add @supabase/auth-helpers-react
yarn add stripe
```


## superbase-js usage

```js
const getUserDetails = () => supabase.from("users").select("*").single();

---
// join 2번
// subscriptions left join prices left join products
  const getSubscription = () =>
    supabase
      .from("subscriptions")
      .select("*, prices(*, products(*))")
      .in("status", ["trialing", "active"])
      .single();
```

## Task

- SuperbaseProvider.tsx
- useUsers.tsx
- UserProvider.tsx

# 6.Authentication modal and functionality


## Task

- ModalProvider.tsx
- Modal
- useAuthModal.ts
- AuthModal.tsx
- Header.tsx    
  - 로그인 모달 연결  
- ToasterProvider.tsx

```
yarn add @radix-ui/themes
yarn add @radix-ui/react-dialog
yarn add zustand
yarn add @supabase/auth-ui-react
yarn add @supabase/auth-ui-shared
yarn add react-hot-toast
```

## OAuth github added

### New OAuth Apps

Setting > Developer Settings > OAuth > create new 
- https://github.com/settings/applications/new

Application name : spotify-clone
Homepage URL : http://locahost:3000/
Authorization callback URL : http://locahost:3000/

### Superbase Provider add

github의 Client ID, Client secrets 을 superbase 에 입력해준다.  
- Client ID > 입력 
- Client secrets 생성 후 입력

# 7.Upload modal and functionality


```
yarn add react-hook-form
yarn add @types/uniqid -D
yarn add uniqid
```

## Task
- useUploadModal
- /components/Input.tsx
- UploadModal.tsx

# 8.Songs fetching and list display


## Task

- actions/getSongs.ts
- PageContent.tsx
- SongItem.tsx
- useLoadImage.ts
- PlayButton.tsx
- middleware.ts
- getSongById.ts
- MediaItem.tsx
- getSongsByTitle.ts
- SearchInput.tsx
- useDebounce.ts

## install
```
yarn add query-string
```

## query-string

```js
import qs from "query-string";
    
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query,
    });

```

# 9.Favorites functionality

## Task
- getLikedSongs.ts
- LikedContent.tsx


# 10.

## Task
- usePlayer.ts

# 11.

# 12.

# 13.