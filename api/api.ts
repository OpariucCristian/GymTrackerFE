import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/api",
  // proxy: {
  //   host: "example.com",
  //   port: 443,
  //   protocol: "https",
  // },
});
