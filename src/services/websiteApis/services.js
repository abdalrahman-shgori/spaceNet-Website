import { axiosInstance } from "../baseUrl";


export const services = async () => {
  try {
    const response = await axiosInstance.get(`/services`);
    return response.data;
  } catch (error) {
    throw error;
  }
};