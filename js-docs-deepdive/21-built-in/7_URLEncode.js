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
