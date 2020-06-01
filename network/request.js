import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://xiong35.cn/data",
    timeout: 5000
  });

  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => { }
  );

  instance.interceptors.response.use(
    response => {
      return response.data;
    },
    err => { }
  );

  // return a Promise
  return instance(config);
}
