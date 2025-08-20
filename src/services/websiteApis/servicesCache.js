import { services as fetchServicesApi } from "./services";

export const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes

let cachedServices = null;
let cacheTimestamp = 0;
let inFlightPromise = null;

export const getServicesCache = () => {
  const now = Date.now();
  if (cachedServices && cacheTimestamp && now - cacheTimestamp < CACHE_DURATION) {
    return cachedServices;
  }
  return null;
};

export const setServicesCache = (servicesArray) => {
  cachedServices = Array.isArray(servicesArray) ? servicesArray : [];
  cacheTimestamp = Date.now();
};

export const clearServicesCache = () => {
  cachedServices = null;
  cacheTimestamp = 0;
};

export const prefetchServices = async () => {
  const now = Date.now();

  if (cachedServices && cacheTimestamp && now - cacheTimestamp < CACHE_DURATION) {
    return cachedServices;
  }

  if (inFlightPromise) {
    return inFlightPromise;
  }

  inFlightPromise = (async () => {
    try {
      const responseData = await fetchServicesApi();
      const fetchedServices = Array.isArray(responseData?.data) ? responseData.data : [];
      setServicesCache(fetchedServices);
      return fetchedServices;
    } finally {
      inFlightPromise = null;
    }
  })();

  return inFlightPromise;
}; 