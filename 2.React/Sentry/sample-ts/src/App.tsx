import React from "react";
import ErrorLoggedBtn from "./components/ErrorLoggedBtn";
import SentryErrorBoundary from "./components/SentryErrorBoundary";
import Capture from "./components/Capture"

function App() {
  return (
    <div className="App">
      <header className="App-header">Learn Sentry</header>
      <ul>
        <li>
          <h3>1. ErrorLoggedBtn</h3>
          <ErrorLoggedBtn />
        </li>
        <li>
          <h3>2. performance</h3>
          <div>reportWebVitals CLS FID FCP LCP TTFB </div>
        </li>
        <li>
          <h3>3. SentryErrorBoundary</h3>
          <SentryErrorBoundary />
        </li>
        <li>
          <h3>4. captureMessage, captureException</h3>
          <Capture />
        </li>
        <hr />
      </ul>
    </div>
  );
}

export default App;
