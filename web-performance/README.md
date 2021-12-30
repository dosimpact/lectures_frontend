# 프론트엔드 개발자를 위한, 실전 웹 성능 최적화(feat. React) - Part. 1

# Intro

## 앞으로 배울 것들

- [ ] 브라우저의 랜더링 원리

- [ ] 분석 툴  
       Performance 패널 분석  
       Lighthouse 패널 분석  
       Network 패널 분석  
       webpack-bundle-analyzer 이용한 분석

- [ ] 리소스 핸들링  
       텍스트 압축  
       이미지 사이즈 압축  
       적절한 사이즈 변환  
       이미지 CDN 최적화  
       리소스 캐싱  
       이미지 preload  
       컴포넌트 preload.  
       Component Lazy load  
       React code Splitting.  
       Image Lazy Load.  
       병목 코드 제거  
       repaint, reflow 줄이기

## 웹성능 결정 요인

\*결국 모든 성능은 2가지로 귀결

1. 로딩 성능

- 리소스 불러오는 성능
- 이를 위해 통신에 대해 알아야함

2. 랜더링 성능

- 불러온 리소스를 얼마나 빠르게 그리는지
- 브라우저의 동작원리를 알아야 한다.

# 1장. 블로그 사이트 최적화

### 실습 내용

1. 로딩성능 최적화

- 이미지 사이즈 최적화
- 코드 스플릿
- 텍스트 압축

2. 랜더링 성능 최적화

- **Bottleneck** 코드 최적화

### 분석 툴 소개

크롬 - 개발자 도구 탭

- 네트워크 탭
- 퍼포먼스 탭
- 라이트하우스 탭

웹팩 번들러 애널라이저

- JS 번들링 결과가 어떤지 보여주는 플러그인

---

# 프론트엔드 개발자를 위한, 실전 웹 성능 최적화(feat. React) - Part. 2

### ref

인프런
프론트엔드 개발자를 위한, 실전 웹 성능 최적화(feat. React) - Part. 1
프론트엔드 개발자를 위한, 실전 웹 성능 최적화(feat. React) - Part. 2
