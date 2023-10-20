

# migration to 13 version

## pages > app 

- 기존의 Next.js에서는 Automatic Routing을 사용할 때, pages 디렉토리 안에 파일을 생성하여 별도의 라우터 없이도 애플리케이션 내부에서 즉시 경로를 생성  
- 하지만, Next.js 13버전부터는 app/이라는 새로운 디렉토리가 등장하여 라우팅 및 레이아웃 기능을 개선.   

app 디렉터리의 기능 
- app/ 디렉토리는 레이아웃 기능을 제공하는 데, 여러 페이지 간에 네비게이션 바와 같은 공통적인 UI를 공유하여 불필요한 리렌더링을 방지하고, 컴포넌트간의 상호 작용을 구현할 수 있다.
- layout.js + page.js 가 한 세트로 작동한다.



# ref
https://velog.io/@hang_kem_0531/Next.js-13%EC%9D%B4-%EB%82%98%EC%99%80%EB%B2%84%EB%A0%B8%EB%8B%A4
