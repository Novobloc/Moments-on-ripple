import { urlConfig } from "api/config";
import axios from "api/axios";

export const loginUser = (data: any) => {
  const path = urlConfig.user.LOGIN;
  let config = {
    method: "post",
    url: path,
    data
  };
  console.log('====================================');
  console.log(config, "loginUser API");
  console.log('====================================');

  return axios.request(config);
};
