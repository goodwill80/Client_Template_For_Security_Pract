import axios from "axios";
import { getCookie } from "typescript-cookie";

export type ContactModel = {
  contactName: string;
  contactEmail: string;
  subject: string;
  message: string;
};

const getAuthorizationFromLocalStorage = (): string | null => {
  const getFromLocalStorage = sessionStorage.getItem("userdetails");
  if (getFromLocalStorage) {
    const user = JSON.parse(getFromLocalStorage as string);
    return "Basic " + window.btoa(user.email + ":" + user.password);
  } else {
    return null;
  }

  // const storedUser = localStorage.getItem("user");
  // const parsedUser = JSON.parse(storedUser || "{}");
  // return parsedUser.token;
};

// API Instance
const API = axios.create({
  baseURL: "http://localhost:8080",
  // timeout: 70000,
  headers: {
    "content-type": "application/json",
    // Authorization: getAuthorizationFromLocalStorage(),
    // // authorizationToken: getTokenFromLocalStorage(),
    // "X-XSRF-TOKEN": sessionStorage.getItem("XSRF-TOKEN") || "",
  },
});

// To inject into header for all outgoing request
API.interceptors.request.use((config) => {
  if (sessionStorage.getItem("XSRF-TOKEN")) {
    config.headers["X-XSRF-TOKEN"] = sessionStorage.getItem("XSRF-TOKEN");
    config.headers["content-type"] = "application/json";
  }
  if (sessionStorage.getItem("userdetails")) {
    config.headers["Authorization"] = getAuthorizationFromLocalStorage();
    config.headers["content-type"] = "application/json";
  }

  return config;
});

export const LoginAPI = async (user: { email: string; pwd: string }) => {
  // window.sessionStorage.setItem("userdetails", JSON.stringify(user));
  // let xsrf = getCookie("XSRF-TOKEN")!;
  // window.sessionStorage.setItem("XSRF-TOKEN", xsrf);
  window.sessionStorage.setItem("userdetails", JSON.stringify(user));
  try {
    const response = await API.get("/user", { withCredentials: true });
    const xsrf = getCookie("XSRF-TOKEN")!;
    console.log(response);
    console.log(xsrf);
    window.sessionStorage.setItem("XSRF-TOKEN", xsrf);
    return response;
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

export const getNoticesAPI = async () => {
  try {
    const response = await API.get("/notice");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const sendContactAPI = async (contactDetails: ContactModel) => {
  try {
    const response = await API.post("/contact", contactDetails);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
