import axios from "axios";

axios.defaults.withCredentials = false;
export const http = axios.create({
  baseURL: process.env.VUE_APP_TMDB_APP_API_BASE_URL,
  params: {
    api_key: process.env.VUE_APP_API_KEY,
  },
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.message);

    return Promise.reject(error);
  }
);
