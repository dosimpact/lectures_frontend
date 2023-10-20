
- [프로젝트 목표  a-common](#프로젝트-목표-a-common)
  - [Directory Structure with React Query](#directory-structure-with-react-query)
  - [Client State vs Server State](#client-state-vs-server-state)
  - [React Query Manages Data](#react-query-manages-data)
- [Frist Project, Blog-em](#frist-project-blog-em)
  - [isLoading vs isFetching](#isloading-vs-isfetching)
  - [staleTime vs cacheTime](#staletime-vs-cachetime)
  - [Query](#query)
    - [Refech:trigger](#refechtrigger)
    - [Prefetch](#prefetch)
  - [Mutations](#mutations)
    - [Mutations 이후 업데이트 전략](#mutations-이후-업데이트-전략)



# 프로젝트 목표  a-common

init 셋팅 - QueryClientProvider, ReactQueryDevtools
Query 

1. fetch.   
   - Query Policy 


2. prefetch
    - 언제 프리패치가 일어나야 하는가?


## Directory Structure with React Query

Common
ㄴapis : end point constant or axios function collection 
ㄴhooks/queries
	/useQueryStoreList 
		<- export default useQueryStores
		<- export useQueryStoresRegisterable
ㄴhooks/mutations
	/useMutationCreateCampaigns

고민 : server-state 를 redux에 올려야 하는가 ? 
- >Client State를 초기화 할때, server state가 필요한 겨웅 
- Eg) Form State를  초기화 할때, server-state가 필요한 경우 
- Eg) UI State를 초기화 할때, server-state 가 필요한 경우 

— 
Section 1: 쿼리 생성 및 로딩/애러 상태


## Client State vs Server State 
Client State 
- 브라우저 세션에 관련된 데이터 
- Eg) 유저가 선택한 언어, 테마(나이트모드 등 )

Server State 
- 서버에 저장된 데이터로, fetch 요청의 대상.
- Eg) 블로그 포스터 

## React Query Manages Data

리액트 쿼리는 서버의 데이터를 관리한다. 
- 데이터 캐시 관리
- 캐시 업데이트 시기 관리
    - 선언형, 명령형으로 제공
    - 리패체 트리거 조정
- 로딩/애러 상태관리
- 프리패치 관리
- 페이지네이션/인피니트 스크롤 관리
- 애러 리트라이 관리
    - 애러 콜백으로, 애러메시지 꾸미기 .
- 다수의 중복 요청 관리 
- DevTools

# Frist Project, Blog-em 

목표 
- 데이터 패칭
- 로딩 / 애러 상태 관리
- 데브 툴즈 
- 페이지 네이션
- 프리패칭
- 뮤테이션


## isLoading vs isFetching 

	isFetching 이 super Set 이다. 
- isFetching 
    - Async query function의 Promise 상태가 pending 이다.
- isLoading
    - Async query function의 Promise 상태가 pending && no cached data 

	isLoading은 캐시된 데이터가 있으면 false로 보여주고, 조용히 뒤에서 최신 데이터를 가져올 것이다.
	isFetching은 , 최신 데이터를 가져오는지 확인할 때 사용할 수 있다. 

	eg) 가정 : 페이지네이션이 필요한 곳
		- 1 Page 에서, 2 Page의 데이터를 프리패치 한다.
		- 1 Page 에서, 2 Page로 넘어간다.
		- 2 Page의 미리 캐시된 데이터를 보여주고   ( isLoading = false, isFetching = true )
		- 2 Page의 최신 데이터를 한번 더 받아온다. ( isLoading = false, isFetching = false ) 
 

## staleTime vs cacheTime
staleTime이 만료되면, re-fetching을 하게 된다.

Cache 는 나중을위해 데이터를 coldStorage에 저장한다. 
- 캐시 데이터는, 기본값:5분 뒤에 삭제된다.
- useQuery가 active 이후의 5분이다. 
- 캐시타임이 끝나면, 가비지 콜렉터가 가져간다. 
- 캐시된 데이터는, Fetching 과정에서 임시로 모여준다. 
- ( 만료된 데이터를 활용해서, 문제가 생기는 경우라면 cacheTime=0 설정 ) 

case1. staleTime < cacheTime 

eg) staleTime = 2 , cacheTime = 7 

status : fresh
- 바로 캐시 데이터를 보여준다. ( isLoading = false, isfetchig = false )
- 그것이 새 데이터 이므로 더이상의 업데이트는 없다.

status : stale
- 우선 캐시데이터를 바로 보여준다. ( isLoading = false, isfetchig = true )
- 그리고 뒤에서 몰래 stale 데이터를 fresh하게 업데이트 한다.  


status : no cached 
- 데이터를 서버로 요청한다. ( isLoading = true, isfetchig = true )


case2. staleTime = cacheTime 

쿼리가 inActive되고 나서부터, cacheTime이 흘러 coldStorage에서 제거된다.    
staleTime은 쿼리가 Active상태에서도 시간은 흘러, stale 될 수 있다.  

(위의 두개의 시간이 같다는 것은, 캐시된 동안은 그 데이터를 더이상 갱신하지 않는다.  
즉, 항상 새 데이터로 간주하는 것 이다. (X))


case3. staleTime > cacheTime 

- case2와 동일하게 처리된다. 


## Query 


### Refech:trigger 
- auth
    - Component remount
    - Window refocus

- manual
    - Running refetch function 
    - Query invalidation after mutation 
 

### Prefetch 

데이터를 미리 캐시에 저장을 해두는 것. 
프리패치는 미리 사용자가 다음 데이터를 필요로하는 곳에, 트리거를 심어두면 된다. 
https://react-query.tanstack.com/reference/QueryClient#queryclientprefetchquery 

Eg) 페이지 1 에서는, 페이지 2를 prefetchQuery 하도록 한다. 

## Mutations 

### Mutations 이후 업데이트 전략 
1. Mutation 이후,  -> 모든 mutation이 성공으로 간주하고 , 데이터를 바로 업데이트 한다.
	하지만 , 실패한 경우 데이터를 롤백하도록 한다.
2. Mutation 이후,  -> 최신정보를 서버에서 받아온다. ->  이 데이터로, React Query cache를 업데이트 
3. Mutation 이후,  -> 관련 쿼리를 무효화 한다. -> 무효화된 데이터는 최신정보를 서버로 받는다. 

