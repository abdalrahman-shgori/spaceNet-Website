import axios from "axios";
export const url = "https://admin.spacenetiq.com/api/";
export const url2 = "https://academyadmin.spacenetiq.com/api";

export const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Accept-Language":
      localStorage.getItem("lang") === null
        ? "en"
        : localStorage.getItem("lang"),
  },
});

export const axiosInstanceForm = axios.create({
  baseURL: url2,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Accept-Language":
      localStorage.getItem("lang") === null
        ? "en"
        : localStorage.getItem("lang"),
  },
});


