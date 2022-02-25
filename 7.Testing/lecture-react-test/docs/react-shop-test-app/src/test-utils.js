import { render } from "@testing-library/react";
import { OrderContextProvider } from "./contexts/OrderContext";

const customRender = (ui, options) =>
  render(ui, { wrapper: OrderContextProvider, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
