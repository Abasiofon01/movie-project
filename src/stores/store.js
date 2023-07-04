import { defineStore } from "pinia";
import { http } from "../services/axiox";

export const useFetchMovies = defineStore("fetch_movies", {
  state: () => ({
    popularMovies: [],
    upcomingMovies: [],
  }),
  getters: {
    getPopularMovies: (state) => state.popularMovies,
    getUpcomingMovies: (state) => state.upcomingMovies,
  },
  actions: {
    async fetchPopularMovies() {
      try {
        const response = await http.get("movie/popular");
        this.popularMovies = response.data;
      } catch (error) {
        return error;
      }
    },
    async fetchUpcomingMovies() {
      try {
        const response = await http.get("movie/upcoming");
        this.upcomingMovies = response.data.results;
        console.log(response.data);
      } catch (error) {
        return error;
      }
    },
    async fetchSingleMovie(id) {
      return http
        .get(`find/${id}`)
        .then((response) => {
          return response.data.data;
        })
        .catch((error) => Promise.reject(error));
    },
  },
});
