- [ref](#ref)
- [1.Goal](#1goal)
- [2.Layout](#2layout)
  - [install](#install)
    - [vscode extension](#vscode-extension)
  - [NextJS Basic](#nextjs-basic)
    - [RCS, SSR 이해](#rcs-ssr-이해)
    - [Client, Server Component](#client-server-component)
    - [metadata](#metadata)
    - [revalidate](#revalidate)
    - [middleware](#middleware)
    - [Fixed UI with dynamic URL](#fixed-ui-with-dynamic-url)
    - [Server Actions](#server-actions)
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
- [10.Player functionality](#10player-functionality)
  - [Task](#task-6)
  - [install](#install-3)
- [11. Stripe integration](#11-stripe-integration)
  - [Task](#task-7)
  - [stripe 가입](#stripe-가입)
- [12.Subscribe modal and account page](#12subscribe-modal-and-account-page)
  - [Task](#task-8)
  - [active Customer portal](#active-customer-portal)
- [13. Deployment](#13-deployment)

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

### RCS, SSR 이해

https://yozm.wishket.com/magazine/detail/2271/
https://reactnext-central.xyz/blog/8-things-you-shold-konw-about-nextjs-13#1-react-%EC%84%9C%EB%B2%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-rsc
https://github.com/reactwg/react-18/discussions/37

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

### Fixed UI with dynamic URL

```js
      <PlayerContent
        /* key값으로 완전히 컴포넌트가 리랜더링된다. 내부의 hook이 재생성되어 다시 작동한다. key를 설정하지 않으면 다음 노래 재생에 문제가 발생. (dynamic & modular URL Change)  */
        key={songUrl}
        song={song}
        songUrl={songUrl}
      />
```

### Server Actions 

```
## 클라이언트에서 서버에 있는 함수를 직접 호출한다고? 이게 어떻게 가능한가!?

next 컴파일 단계에서 use server 지시문이 있는 함수에 대한 고유 라우팅 경로를 할당합니다.
길이가 40인 유니크 문자열 (Ex. 984ed20e3a894190cd12e4db981795e43fe8c042)
해당 함수를 클라에서 호출하면 헤더에 Next-Action : 고유 라우팅 경로를 담아 POST 요청을 하게 됩니다.
next 서버는 리퀘스트 헤더에 Next-Action 필드가 있으면 미들웨어를 거쳐 해당 server action으로 라우팅을 시도합니다.
해당 함수를 실행하고 그 리턴값을 response 합니다.
현재 alpha 단계이기 때문에 구현 방식은 바뀔 수 있습니다.

## Pages Router의 pages/api 디렉토리에 있는거랑 뭐가 다른가..?
1. 신기술이라서 간지난다
2. 정의/호출방식이 더 편리함. pages/api 디렉토리 구조에 맞게 경로 작성해서 요청할 필요 없다.
3. 서버 액션, 서버컴포넌트 등의 server only 코드는 클라에 내려주는 JS 번들에 포함되지 않아서, 전체적으로 JS 번들 사이즈가 줄어든다.
4. 사실 확 와닿는 차이는 모르겠다.. 제보 바랍니다.

ref
https://velog.io/@jjunyjjuny/nextjs-Server-Action#%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8%EC%97%90%EC%84%9C-%EC%84%9C%EB%B2%84%EC%97%90-%EC%9E%88%EB%8A%94-%ED%95%A8%EC%88%98%EB%A5%BC-%EC%A7%81%EC%A0%91-%ED%98%B8%EC%B6%9C%ED%95%9C%EB%8B%A4%EA%B3%A0-%EC%9D%B4%EA%B2%8C-%EC%96%B4%EB%96%BB%EA%B2%8C-%EA%B0%80%EB%8A%A5%ED%95%9C%EA%B0%80

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


# 10.Player functionality

## Task
- usePlayer.ts
- PlayerContent.tsx
- Player.tsx
- useGetSongById.ts
- useLoadSongUrl.ts
- useOnPlay.ts
- Slider.tsx


## install
```
yarn add use-sound
yarn add @radix-ui/react-slider
```

# 11. Stripe integration
```
yarn add react-spinners
@stripe/stripe-js
```


## Task
- loading.tsx
- error.tsx
- libs/stripe

## stripe 가입
https://blog.maru.or.kr/2022/02/10/%ED%95%9C%EA%B5%AD%EC%97%90%EC%84%9C-stripe-%EA%B0%80%EC%9E%85%ED%95%98%EA%B8%B0/


```
# 호주 국적으로 가입했다. 

# Create new account

# webhook

## webhook이란?

webhook을 사용하면 타 서버의 이벤트를 받을 수 있다.  
- 내 서버에 특정 URL을 오픈하고, 들어오는 데이터에 따라서 적절한 action, payload 를 처리하면 된다.   
- 결제 시스템을 사용하면, 타 시스템 내부적으로 비동기 처리가 필요할텐데, 그 처리가 끝나는 이벤트를 받아서 처리하는 것이다.  
- 예) 
- 브라우저:결제 요청 -> stripe:invoice 생성
- stripe:invoice 생성 완료 -> nextjs:웹훅 call
- nextjs: superbase 업데이트 -> stripe:invoice 처리
- stripe:invoice 처리 완료 -> 브라우저:결제 완료

webhook STRIPE_WEBHOOK_SECRET 을 발급받기 위해서는 내 서버의 주소가 결정되어야 한다.  
- localhost인 경우에는 stripe cli을 통해서 임시 서버로 발급이 되며,
- (dev,stage,prod) 경우에도 마찬가지로 시크릿 키를 발급 받아야 한다. (?)

## Local listeners, Hosted endpoints

아래 명려어인 stripe listen --forward-to localhost:4242/webhook 을 켜두면 웹훅 리스너를 만들 수 있다.  
- stripe 개발자 도구에서 Listen 상태를 볼 수 있음.  
- 이러한 상태를 유지시켜야지 stripe에서 상품을 추가하거나, 가격을 업데이트 하는 등의 정보를 받아서 superbase와 연동 할 수 있다.  

---
2024-01-05 12:37:54   --> product.deleted [evt_1OV4EIHas57YuQ3yoyvfLk60]
2024-01-05 12:38:02  <--  [404] POST http://localhost:4242/webhook [evt_1OV4EIHas57YuQ3yvd17ADuJ]


## local webhook 발급 과정

brew install stripe/stripe-cli/stripe

stripe login //

### Proxy 리스너
- stripe에서 제공하는 모듈이며, 웹훅 요청을 처리하고 이를 nextjs에 넘긴다.  
- 반드시 api/webhooks 로 경로설정을 잘 해야 한다.  
- 확인 사항 2개의 서버를 잘 거쳐서 DB까지 데이터가 잘 들어오는지 e2e 테스트
stripe listen --forward-to localhost:4242/api/webhooks

### 테스트
stripe trigger payment_intent.succeeded

---

# Product catalog 추가

- 1) stripe proxy에 올바르게 이벤트가 인입되어야 한다.  
- 2) nextjs api/webhooks 에 올바르게 이벤트가 인입되어야 한다.  
- 3) superbase 에 products, prices의 row가 생성되어야 한다.    

*stripe에서 발생한 event에 대해서 nextjs에서 처리하지 못하는 경우는 ?   
*stripe에서 발생한 event에 대해서 의도적으로 결제를 취소해야 하는 경우는 ?  

---

# Customer portal

Launch customer portal with a link
- stripe 결제 내역 및 구독 취소 등의 고객 전용 포털을 제공해준다.  
- 이를 활성화 해야 한다.  

```


# 12.Subscribe modal and account page

## Task 
- api/create-checkout-session
- api/create-portal-link
- SubscribeModal.tsx
- actions/getActiveProductsWithPrices.ts
- app/account
- useOnPlay.ts

## active Customer portal


# 13. Deployment