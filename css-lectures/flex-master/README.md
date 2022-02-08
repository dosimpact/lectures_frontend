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

```

flex

flex-grow	Item의 증가 너비 비율을 설정	0


flex-shrink	Item의 감소 너비 비율을 설정	1


flex-basis	Item의 (공간 배분 전) 기본 너비 설정	auto
    auto    : Item의 Content-fit 을 기본으로 잡음 (기본값)
    0       : Item의 Block-fit 을 기준
    100px   : Item의 직접 너비를 설정

cf) 블록요소의 크기는 border은 제외되는것이 기본이다.
    box-sizing: content-box | border-box ;

cf) 블록 요소의 크기는 기본으로 content-fit 이다.
    블록 요소의 크기를 결정하면, content에 상관이 없이 결정된다.
        이때, content가 더 많으면 내용이 넘친다
        이는 overflow:hidden으로 가려주는것이 좋다.

    flex item이 가지는 속성은 width 와 연동된다.
    flex가 기변 너비로써 width 속성을 대처할 수 있다.
    하지만 정적인 width를 가지고자 한다면 flex가 width를 책임지지 않도록한다.
        이를 auto 속성으로 표기한다. ( )

```

# TestCase

주요 포인트

    가변 너비와 고정 너비를 섞어 사용하는 경우
    가변 너비의 비율을 사용하는 경우
    가변 너비의 상한선 하안선을 사용하는 경우

    auto와 100% 의 차이

Case.1

    한줄에 요소 1,2,3 이 있다.
    요소 1,3은 고정 너비이고, 요소 2만 늘었다 줄었다 해야하는 상황

    flex 컨테이너는 720px 까지만 늘어나야 한다.

        더 커지는 상황이면 margin을 주도록 한다.
        flex 컨테이너는 500px 이하로는 줄 수 없다.

# 03 - Case.1

# 04 - Case.2
