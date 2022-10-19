// console.log("process.env", process.env);

let { NODE_ENV } = process.env;
let BASE_URL: string;

if (NODE_ENV === "development") {
  BASE_URL = "http://192.168.2.9"; // 开发环境接口地址
} else {
  BASE_URL = "http://192.168.2.9"; // 发布环境接口地址
}

export { BASE_URL };
