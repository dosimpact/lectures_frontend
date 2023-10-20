##

## ref

- 참고 깃허브
  https://github.com/oksktank/soma-todo

- 넥스트
  https://nextjs.org/learn/basics/navigate-between-pages/pages-in-nextjs
  https://www.tutorialspoint.com/nextjs/index.htm

- cache validation
  https://en.wikipedia.org/wiki/Cache_invalidation

  https://github.com/oksktank/soma-todo
  https://leerob.io/blog/react-state-management
  https://im-developer.tistory.com/222?fbclid=IwAR0GGqnVE5H3xBjBHdlJBUNZ7Wwsla4J4KIEu5fpYQyIJ8tRVJs5EujH-ZE

##

- 에어테이블키 환경 변수 등록하기 process.env
  .zshrc ~ export AIRTABLE_KEY=#######

curl https://api.airtable.com/v0/appgzS2pgsk4gFZ5h/Todo \
-H "Authorization: Bearer keyffN8KqFTmNQ4P5"

##

Server Caching state
=> react-query, SWR [체크 points]
(기본 정책들이 있다 ( 리트라이 3번, 자동 캐슁, 화면 나갔다 오면 revalidation, 5분 지나면 revalidation ) )

- 사일런트 업데이트 ( 시간이 되면 알아서 캐쉬 업데이트 )
- Revaildation on Focus (다른 페이지로 갔다가 다시 돌아오면(focus되면) 업데이트 되게끔)
- Revalidation on Network ( 네트워크 지연 --- 다시 잡혔을때 )
- local mutation ( 최적화된 UI, 상태 먼저 바꾸고 다음 캐쉬처리 , API 처리 )
- smart error retrying ( 서버 애러시, 몇번 리트라이 할 건가 )
- Pagination + scrolling position Recovery

## eg)

- 삭제할때
  삭제 API -> 캐쉬 무효화 -> react query 알아서 가져와서 싱크

## ??

- react-query만 사용해도 state 관리 다 ok?

- add todolist -> 즉각 cache 조작

## checked

defaultChecked -> isChecked
onChange -> onClick

\*혹은 , key 값에 바뀌는 값을 같이 넣어주면 defaultChecked도 업뎃가능

## onchange 마다 API를 호출하는 이슈

- 쓰로틀링, 디바운싱
  https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa

쓰로틀링: 마지막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출되지 않도록 하는 것
디바운싱: 연이어 호출되는 함수들 중 마지막 함수(또는 제일 처음)만 호출하도록 하는 것

## 어떤 데이터는 recoil , react-query, query params

- react-query : API 데이터, 서버 캐쉬관리
- recoil : todo에서 필터링 만들기
  ( useQuery : atom state : 안한일만 보기/한 일만 보기 : 프론트 필터링)

eg)

```
1. react-query ( SWR - https://swr.vercel.app/ ) - 전담 해주면 performance도 넣는다.
데이터 가져오는것 ( 테이블 제목, row 제목, 데이터 상태들)
사용자 정보
? persist https://react-query.tanstack.com/plugins/persistQueryClient#how-does-it-work

(redux 로 흉내내려면, 정말 복잡하다.)

2. recoil
( 현재 상태들 - 새로고침하면 다 날라간다. )
( API에 의해 파생되는 데이터 -> selector )
현재 선택된 뷰,
현재 선택된 메뉴 ,
현재 필터의 상태 ( 필터가 열렸냐, 필터가 어떻게 지정 되었냐? )
현재 소팅 정보

*왠만해서는 내부 state로 쓸 것
*? persist

*useContext
- 하나만 업데이트 되면, 모든 상태가 업데이트 되는것 (default)
- Context를 분리,

4. 쿠키/local storage
- url로 공유하면 같은 사이트를 볼 수 없지만
- 이 사용자만

3. http params
새로고침 했는데, 유지가 되어야 하는 정보들을 params
-> 새로고침 했을때 Reset 되어지는 데이터들
eg) 현재 선택된 View - ROW
https://airtable.com/tbl82dS6012jp1h4C/viwCe7GFw1buqywbR?blocks=hide
에서 tbl82dS6012jp1h4C



4.


```

## 디바운싱, 스로틀링

input 데이터가 들어올때마다 이벤트가 발생
연속으로 이벤트를 들어올때 ,최종이벤트만 실행 -> 디바운싱, 쓰로틀링

- 디바운싱
  기다리는 시간 정하기 2초
  또 이벤트가 들어오면 다시 2초 기달려
  최종 이벤트 이후 2초 뒤 실행
  eg) 입력 이벤트

- 쓰로틀링
  처음 이벤트 들어오고 2초동안 이벤트 무시

  eg) 스크롤 이벤트 -> 1초에 몇백번 이벤트에서, -> 1초에 한번으로 줄임

- 구현방법 : timer 함수로
- 라이브러리에서 지원하면 적극 사용! ( lodash )

```js
const debounceInput = _.debounce((nextValue) => {
  const newTodo = produce(todo, (nextTodo) => {
    nextTodo.fields.Name = nextValue;
    return nextTodo;
  });
  updateTodo(newTodo);
}, 1000);
```

##

캐슁을 하고 싶은 단위로 key를 지정하면 된다.

## delete 시 바로 지우기

- recoil에서 id를 가지고 있다가, 바로 지운다.
- if delete API 실패, 다시 꺼낸다.
- toBeDeletedMap 이라고 구현을 해 두었다.
