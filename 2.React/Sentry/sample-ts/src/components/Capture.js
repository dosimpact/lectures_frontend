import React from "react";
import * as Sentry from "@sentry/react";

const Capture = () => {
  const handleClick = () => {
    try {
      Sentry.captureMessage("handleClick");
      throw Error("captureException");
    } catch (err) {
      console.error(err);
      Sentry.captureException(err);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>trigger captureException</button>
    </div>
  );
};

export default Capture;