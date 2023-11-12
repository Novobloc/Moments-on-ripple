export interface initialStateContext {
  appLoading: boolean;
  version: string;
  setAppLoading: React.Dispatch<boolean>;
  count: number;
  setCount: React.Dispatch<number>;
}
