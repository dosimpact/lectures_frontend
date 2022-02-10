
# storybook tutorials


# intro to Storybook

ref https://storybook.js.org/tutorials/intro-to-storybook/react/ko/get-started/  


Storybook  
    개발모드에서 함께 실행된다.  
    비즈니스 로직, 컨텍스트로부터 UI 컴포넌트를 독립적으로 만들도록 함  


### 설치 및 실행

```
# Create our application:
npx create-react-app taskbox

cd taskbox

# install latest package(-p) & init 
npx -p @storybook/cli sb init

--- 

# Run the test runner (Jest) in a terminal:
yarn test --watchAll

# Start the component explorer on port 6006:
yarn storybook

# Run the frontend app proper on port 3000:
yarn start

---
# CSS 복붙 index.css < https://github.com/chromaui/learnstorybook-code/blob/master/src/index.css

# git에 리소스 일부분 복사해오기 

npx degit chromaui/learnstorybook-code/src/assets/font src/assets/font
npx degit chromaui/learnstorybook-code/src/assets/icon src/assets/icon

```

