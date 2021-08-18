## ref
https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/

DOM은 트리구조로 되어 있고, 하위 요소의 이벤트를 부모 요소로 전파한다. (버블링)  
반대로 이벤트 지점까지 상위 요소에서 내려올 수 있다. (캡쳐링)  
이때, 이벤트 발생을 듣고 싶다면 addEventListener을 붙인다.  
이벤트 리스너가 없어도 이벤트 전파는 일어난다.    

## 이벤트 버블링
- 이벤트 발생이 발생지 -> 상위로 전파되는 것.  

## 이벤트 캡쳐링
- 이벤트 발생이 상위 -> 발생지로 내려오는 것.

## 이벤트 e.stopPropagation
- 누군가가 addEventListener로 이벤트를 들었다면  
- 더 이상 이벤트 전파를 하지 않는다.   

## 👏 이벤트 위임 
- 상위 요소에서 하위 요소의 이벤트들을 제어하는 방식의 코딩 패턴  
- 이벤트 버블링을 이용한다.  
- 이벤트 처리 후 e.stopPropagation 로 더 이상 전파 방지 
- 이점 : 하위 요소가 계속 추가되어도, 이벤트 핸들러 수정이 필요 없다.  

- 예시 ) Todo 요소가 추가되어도, todo text을 누르면 상단에 표시 되도록  