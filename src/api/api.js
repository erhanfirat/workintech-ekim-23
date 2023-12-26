import axios from "axios";

export const createInstance = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/",
    headers: token
      ? {
          Authorization: token,
        }
      : {},
  });
};

export let API = createInstance();

export const renewAPI = () => {
  API = createInstance();
};
