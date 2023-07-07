import { defineStore } from "pinia";
import { http } from "../services/axiox";

export const useFetchMovies = defineStore("fetch_movies", {
  state: () => ({
    popularMovies: [],
    upcomingMovies: [],
    topRatedMovies: [],
  }),
  getters: {
    getPopularMovies: (state) => state.popularMovies,
    getUpcomingMovies: (state) => state.upcomingMovies,
    getTopRatedMovies: (state) => state.topRatedMovies,
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
      } catch (error) {
        return error;
      }
    },
    async fetchTopRatedMovies() {
      try {
        const response = await http.get("movie/top_rated");
        this.topRatedMovies = response.data.results;
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

export const useFetchSeries = defineStore("fetch_series", {
  state: () => ({
    popularSeries: [],
    upcomingMovies: [],
    topRatedSeries: [],
  }),
  getters: {
    getPopularSeries: (state) => state.popularSeries,
    getUpcomingMovies: (state) => state.upcomingMovies,
    getTopRatedSeries: (state) => state.topRatedSeries,
  },
  actions: {
    async fetchPopularSeries() {
      try {
        const response = await http.get("tv/popular");
        this.popularSeries = response.data.results;
      } catch (error) {
        return error;
      }
    },
    async fetchUpcomingMovies() {
      try {
        const response = await http.get("movie/upcoming");
        this.upcomingMovies = response.data.results;
      } catch (error) {
        return error;
      }
    },
    async fetchTopRatedSeries() {
      try {
        const response = await http.get("tv/top_rated");
        this.topRatedSeries = response.data.results;
        console.log(response.data);
      } catch (error) {
        return error;
      }
    },
  },
});
