

1.랜더링 방식에 대한 이해

SSR ( server side rendering )
- SSG 
- ISR
CSR ( client side rendering )


2.Server Component 

ClientComponent + ServerCompoent의 조합
- ServerCompoent는 React LifeCyle 사용 불가.
- Server에서 랜더링 되면 무조건 끝. 더이상 불변한다.  


1+2) ServerCompoent와 SSR

ServerCompoent + SSR : 
ServerCompoent + SSG : 
ServerCompoent + ISR : 

* 사실 랜더링방식에 대한 차이점 안에 서버컴포넌트를 사용한 것  

Server Compoent  
- 

Client Component
- Fullpage loading인 경우 > Server(RCS)
- Subsequent Navigations > Client SR


3.Suspense
문제점 : 전체 페이지 로딩이 되어야만 hydration이 된다.  

2+3) 
Suspense + ServerComponent : 
Suspense + ClientComponent : 

---
ref
- https://www.youtube.com/watch?v=2aeMRB8LL4o&t=5034s