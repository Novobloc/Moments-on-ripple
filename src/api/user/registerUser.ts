import axios from "api/axios";
import { urlConfig } from "api/config";

export const registerUser = (data: any) => {
  let config = {
    method: "post",
    url: urlConfig.user.REGISTER,
    data
  };
  console.log('====================================');
  console.log(config, "registerUser API");
  console.log('====================================');
  return axios.request(config);
};

