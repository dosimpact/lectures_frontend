### URI - Uniform Resource Identifier

http://www.naver.com:80/news?category=food&ord=com#weekly

- URL : 쿼리 스트링 전까지 http://www.naver.com:80/news
- URN : host부터 www.naver.com:80/news?category=food&ord=com#weekly

- scheme(protocol)://host(domain)|port|path|queryString|Fragment
- http :// www.naver.com | 80 | /news | category = goode, ord = com | weekly

### 인코딩이란 ?

- 문자열을 이스케이프 처리
- 어떤 시스템에서도 읽을 수 있는 아스키 문자셋으로 바꾸는 것
- URL에 한국어,특수문자 등은 들어갈 수 없어서 %EC%AF 등의 문자열로 바꾼다.

```js
// eg) encodeURI, decodeURI
var uri = "http://www.naver.com:80/news?category=음식&ord=댓글순#주간";

var encodedURI = encodeURI(uri);
console.log(encodedURI);
// http://www.naver.com:80/news?category=%EC%9D%8C%EC%8B%9D&ord=%EB%8C%93%EA%B8%80%EC%88%9C#%EC%A3%BC%EA%B0%84

var decodedURI = decodeURI(encodedURI);
console.log(decodedURI);

// eg) encodeURIComponent, decodeURIComponent
// - URI을 구성하는 요소로 간주하여 =,?,&,:,// 까지 인코딩 한다.
var uri = "http://www.naver.com:80/news?category=음식&ord=댓글순#주간";

var encodedURI = encodeURIComponent(uri);
console.log(encodedURI);
//http%3A%2F%2Fwww.naver.com%3A80%2Fnews%3Fcategory%3D%EC%9D%8C%EC%8B%9D%26ord%3D%EB%8C%93%EA%B8%80%EC%88%9C%23%EC%A3%BC%EA%B0%84
var decodedURI = decodeURIComponent(encodedURI);
console.log(decodedURI);
//http://www.naver.com:80/news?category=음식&ord=댓글순#주간
```
