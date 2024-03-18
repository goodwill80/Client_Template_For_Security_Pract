import axios from "axios";

const getTokenFromLocalStorage = () => {
  const storedUser = localStorage.getItem("user");
  const parsedUser = JSON.parse(storedUser || "{}");
  return parsedUser.token;
};

const API = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 70000,
  //   headers: {
  //     authorizationToken: getTokenFromLocalStorage(),
  //     "x-api-key": Constant.getWebApiKey(),
  //   },
});

export const LoginAPI = async (user: { email: string; pwd: string }) => {
  try {
    const response = await API.post("/login", user);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const RegisterAPI = async (user: { email: string; pwd: string }) => {
  try {
    const response = await API.post("/register", user);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};