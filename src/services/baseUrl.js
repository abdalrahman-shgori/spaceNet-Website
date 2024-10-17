import axios from "axios";
// import { errorToast } from "../utils/toastMessage";

// DEV

// Testing
export const url = "https://admin.spacenetiq.com/api/";
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

