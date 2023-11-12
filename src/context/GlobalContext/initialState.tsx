import { type initialStateContext } from "../types";

export const initialState: initialStateContext = {
  appLoading: false,
  version: "1.0.0",
  setAppLoading: () => {},
  count: 1,
  setCount: () => {}
};
