import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

console.log("process.env.NODE_ENV : ", process.env.NODE_ENV);

Sentry.init({
  dsn: "https://d404381e2726499fa763b5071c59e2d7@o1393830.ingest.sentry.io/6715538",
  release: "0.0.1",
  environment: process.env.NODE_ENV === "production" ? "production" : "dev",
  normalizeDepth: 6,
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.2 : 1.0,
  integrations: [
    new Sentry.Integrations.Breadcrumbs({ console: true }),
    new BrowserTracing(),
  ],
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
