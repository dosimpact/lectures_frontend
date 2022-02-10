

# 따라하며 배우는 리액트 테스트

ref : https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%85%8C%EC%8A%A4%ED%8A%B8/lecture/92045?tab=curriculum&volume=0.39&speed=2

## Goal

- [ ] testing tools 
- [ ] test with class components
- [ ] test with function components
- [ ] test with redux (global state)
- [ ] test with hooks


# 리액트 테스트에 대해서


## Testing Library

React Testing Library : React 구성요소 test api   

    DOM Testing Library 위에 구축  
    Airbnb에서 만든 Enzyme 대처  

        Enzyme > Implementation Driven Test  
        React Testing Library > Behavior Driven Test  
    

DOM Testing Library : DOM(Node) test api 

    https://testing-library.com/docs/


Jest : Javascript Testing Library  

    facebook made
    ```
        {filename}.test.js , {filename}.spec.js , files in "tests" folder
    ```


## documents 

https://testing-library.com/docs/queries/about/  


```
Type of Query	0 Matches	1 Match	    >1 Matches	        Retry (Async/Await)

Single Element				

getBy...	Throw error	Return element	Throw error	No
queryBy...	Return null	Return element	Throw error	No
findBy...	Throw error	Return element	Throw error	Yes

Multiple Elements				

getAllBy...	    Throw error	    Return array	Return array	No
queryAllBy...	Return []	    Return array	Return array	No
findAllBy...	Throw error	    Return array	Return array	Yes

```

# 리액트 테스트를 위한 모듈 설치 및 설정


# 간단한 앱 만들며 테스트
