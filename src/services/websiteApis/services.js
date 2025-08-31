import { axiosInstance, axiosInstanceForm } from "../baseUrl";

export const services = async (lang) => {
  try {
    const response = await axiosInstance.get(`/services`, {

    });
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

export const getCourses = async () => {
  try {
    const response = await axiosInstanceForm.get(`/courses`, {

    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postRegistration = async (
  name,
  email,
  phone,
  age,
  gender,
  background,
  type,
  language,
  day,
  time,
  courses,
  password

) => {
  try {
    const response = await axiosInstanceForm.post(`/send_registeration_form`, {
      name,
      email,
      phone,
      age,
      gender,
      background,
      type,
      language,
      day,
      time,
      courses,
      password
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBlogs = async () => {
  try {
    const response = await axiosInstance.get(`/articles`, {

    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPrivacy = async (lang) => {
  try {
    const config = lang ? { headers: { 'Accept-Language': lang } } : undefined;
    const response = await axiosInstance.get(`/privacy`, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTerms = async (lang) => {
  try {
    const config = lang ? { headers: { 'Accept-Language': lang } } : undefined;
    const response = await axiosInstance.get(`/terms`, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

