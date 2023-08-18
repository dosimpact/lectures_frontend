

- [presetting](#presetting)
- [개념](#개념)
- [ref](#ref)


# presetting

tsconfig.json

```
"experimentalDecorators": true /* Enable experimental support for legacy experimental decorators. */,
"emitDecoratorMetadata": true /* Emit design-type metadata for decorated declarations in source files. */,
   
```

# 개념

의존성 문제
- 의존성은 하나를 변경하면 그것에 의존하는 다른 것들도 모두 변경하도록 만듭니다.


의존성 주입
- 객체를 외부에서 주입

의존 관계 역전의 원칙 

- 의존 관계 역전의 원칙이란 SOLID 원칙 중 하나로, 변화하기 쉬운 것 보단 변화하기 어려운 것에 의존하라는 원칙입니다.

제어권의 역전
- 의존성 주입만 사용하게 되면 우리가 직접 의존성을 관리


# ref

TypeScript와 typedi로 의존성 주입 이해하기
https://medium.com/@HoseungJang/typescript%EC%99%80-typedi%EB%A1%9C-%EC%9D%98%EC%A1%B4%EC%84%B1-%EC%A3%BC%EC%9E%85-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-5d83ef1977f9