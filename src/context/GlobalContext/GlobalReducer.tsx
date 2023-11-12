export const GlobalReducer = (state: any, action: { type: any; payload: any }): any => {
  console.log("====================================");
  console.log(action.type, "=action");
  console.log("====================================");
  switch (action.type) {
    case "SET_APP_LOADING":
      return {
        ...state,
        appLoading: action.payload
      };
    case "SET_COUNT":
      return {
        ...state,
        count: action.payload
      };
    default:
      return state;
  }
};
