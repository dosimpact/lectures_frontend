
# keyWords  

JS의 비동기 처리 패턴  

    - 콜백함수    
    - Promise 체인  
    - async/await  

Promise 후속 처리 매서드  

    then, catch, finally, 
    Promise 체이닝

Promise 정적 메서드  
    Promise.resolve, Promise.reject,   
    Promise.all, Promise.race, Promise.allSettled

마이크로태스트 큐  
fetch  

# 45-01

JS의 비동기 처리 패턴  

    - 콜백함수    
    - Promise 체인  
    - async/await  

콜백함수로 비동기 처리하는 예제   

    이벤트 드리븐 방식으로, 핸들러함수를 호출하여 처리  
    이러한 방식의 단점은 비동의 함수의 결과값을 외부로 가져올 수 없음  
        1. 리턴값으로 주기 - undefiend가 나옴  
        2. 상위 스코프에 전달, setTimeout은 window 컨텍스트이다.  

예) 비동기함수 + 콜백  

```javascript
// GET 요청을 위한 비동기 함수
const get = url => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      // 서버의 응답을 콘솔에 출력한다.
      console.log(JSON.parse(xhr.response));
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

// id가 1인 post를 취득
get('https://jsonplaceholder.typicode.com/posts/1');
/*
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere ...",
  "body": "quia et suscipit ..."
}
*/
```

# 45-02

예) 비동기+콜백 -> 상위스코프 변수 할당 불가  

```javascript
let g = 0;

// 비동기 함수인 setTimeout 함수는 콜백 함수의 처리 결과를 외부로 반환하거나
// 상위 스코프의 변수에 할당하지 못한다.
setTimeout(() => { g = 100; }, 0);
console.log(g); // 0
```

# 45-03


예) 비동기+콜백 -> 리턴 후 변수 할당 불가   

    비동기 처리 안의 이벤트 핸들러 함수는 큐에서 콜스택으로 옮겨서 작동된다.  
    하지만 이때쯤이면, 비동기함수 이후의 동작이 콜스택에서 먼저 끝나 있어야 하므로  
    우선순위상 비동기함수가 처리한 리턴값을 받을 수 없다. 

```javascript
// GET 요청을 위한 비동기 함수
const get = url => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      // ① 서버의 응답을 반환한다.
      return JSON.parse(xhr.response);
    }
    console.error(`${xhr.status} ${xhr.statusText}`);
  };
};

// ② id가 1인 post를 취득
const response = get('https://jsonplaceholder.typicode.com/posts/1');
console.log(response); // undefined
```

# 45-04


예) 비동기+콜백 -> 리턴 후 변수 할당 불가   

```html
<!DOCTYPE html>
<html>
<body>
  <input type="text">
  <script>
    document.querySelector('input').oninput = function () {
      console.log(this.value);
      // 이벤트 핸들러에서의 반환은 의미가 없다.
      return this.value;
    };
  </script>
</body>
</html>
```

# 45-05


예) 비동기+콜백 -> 상위스코프 변수 할당 불가  

    뒤늦게 확인은 가능하다만..  

```javascript
let todos;

// GET 요청을 위한 비동기 함수
const get = url => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      // ① 서버의 응답을 상위 스코프의 변수에 할당한다.
      todos = JSON.parse(xhr.response);
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

// id가 1인 post를 취득
get('https://jsonplaceholder.typicode.com/posts/1');
console.log(todos); // ② undefined
```

# 45-06


예) 비동기+콜백 -> 콜백함수 안에서 처리하도록 해야한다.  
    *비동기 처리결과는 콜백함수만 가지므로  

    콜백함수 안의 비동기처리 -> 역시 콜백함수 안에서 처리하도록 ...  
    > 콜백헬   

```javascript
// GET 요청을 위한 비동기 함수
const get = (url, successCallback, failureCallback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      // 서버의 응답을 콜백 함수에 인수로 전달하면서 호출하여 응답에 대한 후속 처리를 한다.
      successCallback(JSON.parse(xhr.response));
    } else {
      // 에러 정보를 콜백 함수에 인수로 전달하면서 호출하여 에러 처리를 한다.
      failureCallback(xhr.status);
    }
  };
};

// id가 1인 post를 취득
// 서버의 응답에 대한 후속 처리를 위한 콜백 함수를 비동기 함수인 get에 전달해야 한다.
get('https://jsonplaceholder.typicode.com/posts/1', console.log, console.error);
/*
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere ...",
  "body": "quia et suscipit ..."
}
*/
```

예) 콜백 헬  

# 45-07

```javascript
// GET 요청을 위한 비동기 함수
const get = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      // 서버의 응답을 콜백 함수에 전달하면서 호출하여 응답에 대한 후속 처리를 한다.
      callback(JSON.parse(xhr.response));
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

const url = 'https://jsonplaceholder.typicode.com';

// id가 1인 post의 userId를 취득
get(`${url}/posts/1`, ({ userId }) => {
  console.log(userId); // 1
  // post의 userId를 사용하여 user 정보를 취득
  get(`${url}/users/${userId}`, userInfo => {
    console.log(userInfo); // {id: 1, name: "Leanne Graham", username: "Bret",...}
  });
});
```

# 45-08  

예) 콜백 헬  

```javascript
get('/step1', a => {
  get(`/step2/${a}`, b => {
    get(`/step3/${b}`, c => {
      get(`/step4/${c}`, d => {
        console.log(d);
      });
    });
  });
});
```

# 45-09  

비동기 함수의 애러처리 또한 어렵다.  

    *try,catch 구문안에서 실행된 콜스택만이 애러를 잡을 수 있다.  
    애러는 호출자(caller) 방향으로 전파, 즉 스택의 아래로 전파된다.  

    비동기함수의 콜백함수는 새로운 맥락의 콜스택에서 실행된다.   
    실행순서상 콜스택이 비워지고, 비동기함수의 큐가 빈 콜스택에 들어가기 때문  

    따라서 코드상 try,catch 감싸여 있지만, 저 콜백함수만 분리되어 다른환경에서 실행된다고 생각  

예) 콜백함수의 애러를 못잡음. 

```javascript
try {
  setTimeout(() => { throw new Error('Error!'); }, 1000);
} catch (e) {
  // 에러를 캐치하지 못한다
  console.error('캐치한 에러', e);
}
```

# 45-10

예) 프로미스 객체의 원형  

```javascript
// 프로미스 생성
const promise = new Promise((resolve, reject) => {
  // Promise 함수의 콜백 함수 내부에서 비동기 처리를 수행한다.
  if (/* 비동기 처리 성공 */) {
    resolve('result');
  } else { /* 비동기 처리 실패 */
    reject('failure reason');
  }
});
```

# 45-11

예) Promise + GET요청  

    이벤트 드리븐 + 콜백 구문을 Promise, async/await을 쓰고 싶다면  
    Promise객체로 감싸라.  

```javascript
// GET 요청을 위한 비동기 함수
const promiseGet = url => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        // 성공적으로 응답을 전달받으면 resolve 함수를 호출한다.
        resolve(JSON.parse(xhr.response));
      } else {
        // 에러 처리를 위해 reject 함수를 호출한다.
        reject(new Error(xhr.status));
      }
    };
  });
};

// promiseGet 함수는 프로미스를 반환한다.
promiseGet('https://jsonplaceholder.typicode.com/posts/1');
```

# 45-12

프로미스 객체란 ?
    비동기 처리 상태와 처리결과를 관리하는 객체이다.  

    ```
    [[Prototype]]: Promise
    [[PromiseState]]: "pending" | "fulfilled" | "rejected"
    [[PromiseResult]]: undefiend | any(value) | error
    ```

    pending 상태에서 
        resolve 함수 호출시 >  fulfilled
        reject 함수 호출시 >  rejected

```javascript
// fulfilled된 프로미스
const fulfilled = new Promise(resolve => resolve(1));

// Promise {<fulfilled>: 1}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: 1

```

# 45-13

```javascript
// rejected된 프로미스
const rejected = new Promise((_, reject) => reject(new Error('error occurred')));

// [[Prototype]]: Promise
// [[PromiseState]]: "rejected"
// [[PromiseResult]]: Error: error occurred at <anonymous>:2:52 at new Promise (<anonymous>) at <anonymous>:2:18
```

# 45-14

프로미스의 후속처리 매서드   

    then    : (fulfilled 일때 콜백,rejected 일때 콜백) 매서드  
        첫번째 인자는 Promise의 결과를 인자로 전달 받는 함수  
        두번째 인자는 Promise의 애러를 인자로 전달 받는 함수   

    catch   : rejected 일때 실행되는 매서드  
        then(undefined,onRejected)와 동일   

    finally : 오류 유무에 상관없이 무조건 한번 실행 

에) then

```javascript
// fulfilled
new Promise(resolve => resolve('fulfilled'))
  .then(v => console.log(v), e => console.error(e)); // fulfilled

// rejected
new Promise((_, reject) => reject(new Error('rejected')))
  .then(v => console.log(v), e => console.error(e)); // Error: rejected
```

# 45-15

예) catch
```javascript
// rejected
new Promise((_, reject) => reject(new Error('rejected')))
  .catch(e => console.log(e)); // Error: rejected
```

# 45-16

예) then <- catch

```javascript
// rejected
new Promise((_, reject) => reject(new Error('rejected')))
  .then(undefined, e => console.log(e)); // Error: rejected
```

# 45-17

예) finally  

```javascript
new Promise(() => {})
  .finally(() => console.log('finally')); // finally
```

# 45-18

예) 비동기 GET + Promise.then.catch.finally  

```javascript
const promiseGet = url => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        // 성공적으로 응답을 전달받으면 resolve 함수를 호출한다.
        resolve(JSON.parse(xhr.response));
      } else {
        // 에러 처리를 위해 reject 함수를 호출한다.
        reject(new Error(xhr.status));
      }
    };
  });
};

// promiseGet 함수는 프로미스를 반환한다.
promiseGet('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => console.log(res))
  .catch(err => console.error(err))
  .finally(() => console.log('Bye!'));
```

# 45-19

예) then 애러 처리  

```javascript
const wrongUrl = 'https://jsonplaceholder.typicode.com/XXX/1';

// 부적절한 URL이 지정되었기 때문에 에러가 발생한다.
promiseGet(wrongUrl).then(
  res => console.log(res),
  err => console.error(err)
); // Error: 404
```

# 45-20

예) catch 애러 처리  

```javascript
const wrongUrl = 'https://jsonplaceholder.typicode.com/XXX/1';

// 부적절한 URL이 지정되었기 때문에 에러가 발생한다.
promiseGet(wrongUrl)
  .then(res => console.log(res))
  .catch(err => console.error(err)); // Error: 404
```

# 45-21

예) catch 애러 처리(위 45-20)와 동일, then 으로 내부적으로 변환된다.  

```javascript
const wrongUrl = 'https://jsonplaceholder.typicode.com/XXX/1';

// 부적절한 URL이 지정되었기 때문에 에러가 발생한다.
promiseGet(wrongUrl)
  .then(res => console.log(res))
  .then(undefined, err => console.error(err)); // Error: 404
```

# 45-22

예) then의 두번째 메서드로 애러처리를 하면, 첫번째 매서드에서 발생하는 애러를 잡지 못함  

```javascript
promiseGet('https://jsonplaceholder.typicode.com/todos/1').then(
  res => console.xxx(res),
  err => console.error(err)
); // 두 번째 콜백 함수는 첫 번째 콜백 함수에서 발생한 에러를 캐치하지 못한다.
```

# 45-23

예) catch로 Promise의 reject와 , then의 콜백 함수의 애러까지 잡는다.  

```javascript
promiseGet('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => console.xxx(res))
  .catch(err => console.error(err)); // TypeError: console.xxx is not a function
```

# 45-24

예) Promise 체인을 이용하면, then 으로 결과값을 이어받을 수 있다.   
    즉, 1번째 then , 입력 : Promise의 resolve값 , 출력 then의 콜백함수의 리턴값  
    즉, 2번째 then , 입력 : 1번째 then resolve값 , 출력 then의 콜백함수의 리턴값 

```javascript
const url = 'https://jsonplaceholder.typicode.com';

// id가 1인 post의 userId를 취득
promiseGet(`${url}/posts/1`)
  // 취득한 post의 userId로 user 정보를 취득
  .then(({ userId }) => promiseGet(`${url}/users/${userId}`))
  .then(userInfo => console.log(userInfo))
  .catch(err => console.error(err));
```

# 45-25  

예) async, await 이용한 프로미스 처리  

```javascript
const url = 'https://jsonplaceholder.typicode.com';

(async () => {
  // id가 1인 post의 userId를 취득
  const { userId } = await promiseGet(`${url}/posts/1`);

  // 취득한 post의 userId로 user 정보를 취득
  const userInfo = await promiseGet(`${url}/users/${userId}`);

  console.log(userInfo);
})();
```

# 45-26

Promise 정적 메서드
    Promise.resolve, Promise.reject, Promise.all  
    Promise.race, Promise.allSettled, Promise.


Promise.resolve : 인자로 받은 값을 fulfilled 된 프로미스 객체로 리턴
Promise.reject  : 인자로 받은 값을 rejected 된 프로미스 객체로 리턴


```javascript
// 배열을 resolve하는 프로미스를 생성
const resolvedPromise = Promise.resolve([1, 2, 3]);
resolvedPromise.then(console.log); // [1, 2, 3]
```

# 45-27 

예) 위와 동일 
```javascript
const resolvedPromise = new Promise(resolve => resolve([1, 2, 3]));
resolvedPromise.then(console.log); // [1, 2, 3]
```

# 45-28

```javascript
// 에러 객체를 reject하는 프로미스를 생성
const rejectedPromise = Promise.reject(new Error('Error!'));
rejectedPromise.catch(console.log); // Error: Error!
```

# 45-29

예) 위와 동일 
```javascript
const rejectedPromise = new Promise((_, reject) => reject(new Error('Error!')));
rejectedPromise.catch(console.log); // Error: Error!
```

# 45-30

예) 비동기처리를 순차적으로 실행  

```javascript
const requestData1 = () => new Promise(resolve => setTimeout(() => resolve(1), 3000));
const requestData2 = () => new Promise(resolve => setTimeout(() => resolve(2), 2000));
const requestData3 = () => new Promise(resolve => setTimeout(() => resolve(3), 1000));

// 세 개의 비동기 처리를 순차적으로 처리
const res = [];
requestData1()
  .then(data => {
    res.push(data);
    return requestData2();
  })
  .then(data => {
    res.push(data);
    return requestData3();
  })
  .then(data => {
    res.push(data);
    console.log(res); // [1, 2, 3] ⇒ 약 6초 소요
  })
  .catch(console.error);
```

# 45-31


예) Promise.all을 이용해 비동기처리를 병렬적으로 실행  

```javascript
const requestData1 = () => new Promise(resolve => setTimeout(() => resolve(1), 3000));
const requestData2 = () => new Promise(resolve => setTimeout(() => resolve(2), 2000));
const requestData3 = () => new Promise(resolve => setTimeout(() => resolve(3), 1000));

Promise.all([requestData1(), requestData2(), requestData3()])
  .then(console.log) // [ 1, 2, 3 ] ⇒ 약 3초 소요
  .catch(console.error);
```

# 45-32


예) Promise.all을 이용해 비동기처리를 병렬적으로 실행  
    *하나라도 reject되면 catch 실행  
        그 중 가장 먼저 발생한 애러를 catch  

```javascript
Promise.all([
  new Promise((_, reject) => setTimeout(() => reject(new Error('Error 1')), 3000)),
  new Promise((_, reject) => setTimeout(() => reject(new Error('Error 2')), 2000)),
  new Promise((_, reject) => setTimeout(() => reject(new Error('Error 3')), 1000))
])
  .then(console.log)
  .catch(console.log); // Error: Error 3
```

# 45-33

예) Promise.all([ Promise.resolve(), Promise,reject(), 프로미스가 아닌경우 -> resolve처리  ]) 

```javascript
Promise.all([
  1, // => Promise.resolve(1)
  2, // => Promise.resolve(2)
  3  // => Promise.resolve(3)
])
  .then(console.log) // [1, 2, 3]
  .catch(console.log);
```

# 45-34

예) 깃허브 id -> name  병렬처리  

```javascript
// GET 요청을 위한 비동기 함수
const promiseGet = url => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        // 성공적으로 응답을 전달받으면 resolve 함수를 호출한다.
        resolve(JSON.parse(xhr.response));
      } else {
        // 에러 처리를 위해 reject 함수를 호출한다.
        reject(new Error(xhr.status));
      }
    };
  });
};

const githubIds = ['jeresig', 'ahejlsberg', 'ungmo2'];

Promise.all(githubIds.map(id => promiseGet(`https://api.github.com/users/${id}`)))
  // [Promise, Promise, Promise] => Promise [userInfo, userInfo, userInfo]
  .then(users => users.map(user => user.name))
  // [userInfo, userInfo, userInfo] => Promise ['John Resig', 'Anders Hejlsberg', 'Ungmo Lee']
  .then(console.log)
  .catch(console.error);
```

# 45-35

Promise.race : 가장 먼저 fulfilled 상태가 된 결과를 then으로 처리  


```javascript
Promise.race([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000)) // 3
])
  .then(console.log) // 3
  .catch(console.log);
```

# 45-36

Promise.race : 가장 먼저 fulfilled 상태가 된 결과를 then으로 처리   
    *모두 애러라면 , catch로 처리 (X)
    *처리 도중 하나라도 애러가 나면, catch로 처리  
    *처리 도중 하나라도 resolve되면 then 처리  
    ( 우선 resolve되면 그뒤에 Promise가 reject되던간에 작업이 종료된다.)   


```javascript
Promise.race([
  new Promise((_, reject) => setTimeout(() => reject(new Error('Error 1')), 3000)),
  new Promise((_, reject) => setTimeout(() => reject(new Error('Error 2')), 2000)),
  new Promise((_, reject) => setTimeout(() => reject(new Error('Error 3')), 1000))
])
  .then(console.log)
  .catch(console.log); // Error: Error 3
```

# 45-37

Promise.allSettled  : setted 상태(fulfilled | reject) 를 배열로 리턴  
    즉, 잘 처리되든 애러든 그 결과들을 배열로 리턴  

```javascript
Promise.allSettled([
  new Promise(resolve => setTimeout(() => resolve(1), 2000)),
  new Promise((_, reject) => setTimeout(() => reject(new Error('Error!')), 1000))
]).then(console.log);
/*
[
  {status: "fulfilled", value: 1},
  {status: "rejected", reason: Error: Error! at <anonymous>:3:54}
]
*/
```

# 45-38

예) allSettled 처리 결과 상태 객체   

```javascript
[
  // 프로미스가 fulfilled 상태인 경우
  {status: "fulfilled", value: 1},
  // 프로미스가 rejected 상태인 경우
  {status: "rejected", reason: Error: Error! at <anonymous>:3:60}
]
```

# 45-39

마이크로 태스크 큐  
    우선순위 : microTask Q > Task Q  
        setTimeout -> Task Q 
        Promise -> microTask Q  


예) 아래 결과는, 1->2->3 이 아닌, 2->3->1 의 순서이다.  
```javascript
setTimeout(() => console.log(1), 0);

Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
```

# 45-40

fetch  

    XMLHttpReqeust 와 달리 Promise 지원  
    IE 제외 모든 브라우저 제공  

예) HTTP Response 객체를 resolve 결과값으로 받는다.  

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log(response));
```

# 45-41

예) HTTP Response 객체에서, body부분을 json으로 가져오기  

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  // response는 HTTP 응답을 나타내는 Response 객체이다.
  // json 메서드를 사용하여 Response 객체에서 HTTP 응답 몸체를 취득하여 역직렬화한다.
  .then(response => response.json())
  // json은 역직렬화된 HTTP 응답 몸체이다.
  .then(json => console.log(json));
  // {userId: 1, id: 1, title: "delectus aut autem", completed: false}
```

# 45-42

HTTP 애러를 catch 하지 않는다.  
    fetch : 오프라인등의 네트워크 장애, CORS 애러 의 경우 ->  reject   
            404 Not Found, 500 internal server error -> resolve  

예) 404 애러를 resolve 하는 fetch  
```javascript
const wrongUrl = 'https://jsonplaceholder.typicode.com/XXX/1';

// 부적절한 URL이 지정되었기 때문에 404 Not Found 에러가 발생한다.
fetch(wrongUrl)
  .then(() => console.log('ok'))
  .catch(() => console.log('error'));
```

# 45-43

예) response.ok 로 4xx, 5xx 애러인지 확인  

```javascript
const wrongUrl = 'https://jsonplaceholder.typicode.com/XXX/1';

// 부적절한 URL이 지정되었기 때문에 404 Not Found 에러가 발생한다.
fetch(wrongUrl)
  // response는 HTTP 응답을 나타내는 Response 객체다.
  .then(response => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  })
  .then(todo => console.log(todo))
  .catch(err => console.error(err));
```

# 45-44

예) GET, POST, PATCH, DELETE 처리 request 객체  

```javascript
const request = {
  get(url) {
    return fetch(url);
  },
  post(url, payload) {
    return fetch(url, {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  },
  patch(url, payload) {
    return fetch(url, {
      method: 'PATCH',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  },
  delete(url) {
    return fetch(url, { method: 'DELETE' });
  }
};
```

예) request 객체 사용하기 - GET, POST, PATCH, DELETE  

    Axios 사용하기  

# 45-45

```javascript
request.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  })
  .then(todos => console.log(todos))
  .catch(err => console.error(err));
// {userId: 1, id: 1, title: "delectus aut autem", completed: false}
```

# 45-46

```javascript
request.post('https://jsonplaceholder.typicode.com/todos', {
  userId: 1,
  title: 'JavaScript',
  completed: false
}).then(response => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  })
  .then(todos => console.log(todos))
  .catch(err => console.error(err));
// {userId: 1, title: "JavaScript", completed: false, id: 201}
```

# 45-47

```javascript
request.patch('https://jsonplaceholder.typicode.com/todos/1', {
  completed: true
}).then(response => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  })
  .then(todos => console.log(todos))
  .catch(err => console.error(err));
// {userId: 1, id: 1, title: "delectus aut autem", completed: true}
```

# 45-48

```javascript
request.delete('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  })
  .then(todos => console.log(todos))
  .catch(err => console.error(err));
// {}
```
