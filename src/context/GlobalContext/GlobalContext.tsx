import React, { useReducer, useContext } from "react";
import { GlobalReducer } from "./GlobalReducer";
import { initialState } from "./initialState";

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }: any): React.ReactNode => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const setAppLoading = (data: any): void => {
    dispatch({
      type: "SET_APP_LOADING",
      payload: data
    });
  };

  const setCount = (data: any): void => {
    console.log("Set count");

    dispatch({
      type: "SET_COUNT",
      payload: data
    });
  };

  const value = {
    ...state,
    setAppLoading,
    setCount
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext: any = () => useContext(GlobalContext);
