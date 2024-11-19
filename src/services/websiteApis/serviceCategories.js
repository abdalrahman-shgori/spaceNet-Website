import { axiosInstance } from "../baseUrl";




export const ServiceCategories = async (id) => {
  try {
    const response = await axiosInstance.get(`/service_categories?id=${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};