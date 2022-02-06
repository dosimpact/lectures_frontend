# 01

```css
/* 요소를  형제요소 왼쪽에 배치, row 로 정렬된다. */
float: left;
/* 위 속성을 제거  */
clear: both;
```

두 속성을 이용해서  
요소를 left 속성으로 일렬로 배치하다가  
이 속성을 해제하는 clear 속성을 가진 요소로 넣는다.

# 02

01 번의 로직을, 부모요소는 한줄을 담당하는 컨테이너로  
자식요소는 일렬로 배치되도록 float 속성을 준다.

# 03

```
display : flex | inline-flex;
    Flex Container를 정의

flex-flow : row nowrap;
    flex-direction와 flex-wrap의 단축 속성

flex-direction
    Flex Items의 주 축(main-axis)을 설정

flex-wrap
    Flex Items의 여러 줄 묶음(줄 바꿈) 설정

    nowrap(기본값) 은 한줄에 어떻게든 요소를 꾸역꾸역 넣어둠
        > align-content


    wrap 은 여러줄에 걸쳐서 요소를 배치 하도록 함
        > align-content, align-items

---

justify-content
    주 축(main-axis)의 정렬 방법을 설정

align-content
    교차 축(cross-axis)의 정렬 방법을 설정(2줄 이상)
    기본값 : stretch
    여러줄 요소들을 **한 덩어리**로 보고 정렬을 하고 싶을 때

align-items
    교차 축(cross-axis)에서 Items의 정렬 방법을 설정(1줄)
    align-content 값이 기본값(stretch) 일때, 적용이 된다.
    여러줄 요소들을 **한 덩어리**로 보고 정렬을 하고 싶을 때

```

##

flex-direction : row 는 축의 방향이 row(왼쪽->오른쪽)이다

    그래서 main-axis 역시 row의 방향을 따라간다.

# TestCase

주요 포인트

    가변 너비와 고정 너비를 섞어 사용하는 경우
    가변 너비의 비율을 사용하는 경우
    가변 너비의 상한선 하안선을 사용하는 경우

Case.1

    한줄에 요소1,2,3 이 있다.
    요소 1,3은 고정 너비이고, 요소 2만 늘었다 줄었다 해야하는 상황

# 03
