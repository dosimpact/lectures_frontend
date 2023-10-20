import { useSelector } from "react-redux";

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

export const logging = async () => {
  await sleep(1500);
  return true;
};

export const LoggerDisplay = () => {
  const log = useSelector((store) => store.serverLog);
  return <div>Log : {JSON.stringify(log)}</div>;
};
