# ContextAPI Tutorials

@index  
- [ContextAPI Tutorials](#contextapi-tutorials)
- [ContextAPI](#contextapi)
    - [언제 사용 ?](#언제-사용-)
    - [Context 의 장단점](#context-의-장단점)
    - [제어의 역전 (inversion of control)](#제어의-역전-inversion-of-control)
- [예제 TodoList](#예제-todolist)
  - [요구사항분석 및 로직](#요구사항분석-및-로직)



# ContextAPI

### 언제 사용 ? 

선호 로케일 설정  
테마 설정  
데이터 캐시 관리  

### Context 의 장단점  

장점 : 

  props drilling 을 피할 수 있다.  


단점 : 

  Context를 사용하면 하위 컴포넌트를 재사용하기 어려워 진다.  

### 제어의 역전 (inversion of control)

  ContextAPI를 피하면서 props drilling 줄이는 방법으로는  
  전달할 props들을 자식컴포넌트까지 전파하지 말고  
  자식컴포넌트를 부모 컴포넌트에서 props를 장착 후 컴포넌트 자체를 넘겨주는 방법  

# 예제 TodoList 

## 요구사항분석 및 로직  

useContext를 이용하여, 재사용 가능한 todoList를 만들어라.  

  역할과 책임을 분리하면서 생각을 해보자.  

  Context  

    todoList 관련된 데이터를 보관 및 조작
    -> Context의 조작 로직을 재활용(훅)  

  Context.Provider 

    해당 컨텍스트에서 사용할 getter,setter 제공  
      -> FoodTodo,StudyTodo 확장  

  TodoController  

    View가 전달하는 이벤트를 관리  

  TodoList(View)

    받은 데이터를 Present 한다.

  Points  

    Context.Provider 를 확장해도, View,Controller는 재사용함