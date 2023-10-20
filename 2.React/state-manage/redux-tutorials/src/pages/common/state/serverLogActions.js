import { logging } from "../../../components/ServerLogger";

export const WRITE_LOG = "WRITE_LOG";

const writeServerLog = ({ log }) => {
  return {
    type: WRITE_LOG,
    payload: { log },
  };
};

export const writeServerLogAsync =
  ({ log }) =>
  async (dispatch) => {
    await logging();
    dispatch(writeServerLog({ log }));
  };
