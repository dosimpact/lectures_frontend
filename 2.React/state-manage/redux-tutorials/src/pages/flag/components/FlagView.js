import React from "react";

const FlagView = ({
  flagUpCount,
  handleFlagUp,
  handleFlagDown,
  handleFlagUpDownTakeEvery,
  handleFlagUpDownTakeFirst,
  handleFlagUpDownTakeLast,
  handleGoToHome,
  handleGoToPost,
}) => {
  return (
    <div>
      <h3>FlagView</h3>
      <div>flagUpCount : {JSON.stringify(flagUpCount)}</div>
      <button onClick={handleFlagUp}>handleFlagUp</button>
      <button onClick={handleFlagDown}>handleFlagDown</button>
      <h4>TESTING</h4>
      <div>flagUpCount : {JSON.stringify(flagUpCount)}</div>

      <div>
        <button
          onClick={() => {
            handleFlagUpDownTakeEvery(true);
          }}
        >
          FlagUpDownTakeEvery - UP{" "}
        </button>
        <button
          onClick={() => {
            handleFlagUpDownTakeEvery(false);
          }}
        >
          FlagUpDownTakeEvery-DOWN
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            handleFlagUpDownTakeFirst(true);
          }}
        >
          FlagUpDownTakeFirst - UP{" "}
        </button>
        <button
          onClick={() => {
            handleFlagUpDownTakeFirst(false);
          }}
        >
          FlagUpDownTakeFirst-DOWN
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            handleFlagUpDownTakeLast(true);
          }}
        >
          FlagUpDownTakeLast - UP{" "}
        </button>
        <button
          onClick={() => {
            handleFlagUpDownTakeLast(false);
          }}
        >
          FlagUpDownTakeLast-DOWN
        </button>
      </div>
      <div>
        <button onClick={handleGoToHome}>handleGoToHome</button>
        <button onClick={handleGoToPost}>handleGoToPost</button>
      </div>
    </div>
  );
};

export default FlagView;
