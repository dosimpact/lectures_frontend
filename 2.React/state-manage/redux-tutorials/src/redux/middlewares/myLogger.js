const myLogger = (store) => (next) => (action) => {
  console.log("-->myLogger action", action);
  const result = next(action);
  console.log("-->myLogger result", result);
  return result;
};

export default myLogger;
