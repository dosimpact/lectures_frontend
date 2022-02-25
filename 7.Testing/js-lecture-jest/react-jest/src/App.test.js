import { render, screen } from "@testing-library/react";
import App from "./App";

// ✅ render 와 screen 을 통해, 컴포넌트를 그려보고 테스팅
// - screen.getByText
// expect(HTMLElement).toBeInTheDocument
// expect().toMatchSnapshot

test("renders learn react link", () => {
  // render
  const appElement = render(<App />);
  // screen 에서 특정 요소가져오기
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  // 스냅샷처럼 찍어서 랜더링 결과를 보관할 수 있다.
  expect(appElement).toMatchSnapshot();
});
