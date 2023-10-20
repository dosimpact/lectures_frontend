import React from "react";
import * as Sentry from "@sentry/react";

Sentry.Scope

const Example = () => {
  const [e, setE] = React.useState(null);
  return (
    <div>
      Example
      <button
        onClick={() => {
          setE({ name: "tricked!" });
        }}
      >
        trigger jsx error - {e}
      </button>
    </div>
  );
};

const SentryErrorBoundary = () => {
  return (
    <Sentry.ErrorBoundary
      fallback={<p>에러가 발생하였습니다. 잠시 후 다시 시도해주세요.</p>}
    >
      <Example />
    </Sentry.ErrorBoundary>
  );
};

export default SentryErrorBoundary;
