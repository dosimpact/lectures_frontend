import React from "react";

const ErrorLoggedBtn = () => {
  return (
    <div>
      <button
        onClick={() => {
          throw Error("ErrorLoggedBtn Clicked");
        }}
      >
        ErrorLoggedBtn
      </button>
    </div>
  );
};

export default ErrorLoggedBtn;
