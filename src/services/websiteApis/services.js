import { axiosInstance } from "../baseUrl";


export const services = async () => {
  try {
    const response = await axiosInstance.get(`/services`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const subServices = async (id) => {
  try {
    const response = await axiosInstance.get(`/subservices?id=${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const ContactUsApi = async (name, email, message) => {
  try {
    const response = await axiosInstance.post('/send_message', {
      name,
      email,
      message
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
