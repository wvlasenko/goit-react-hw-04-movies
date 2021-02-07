import axios from 'axios';
const apiKey = '27713224a01b808deaee81170cf7a352';
const baseUrl = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = baseUrl;
axios.defaults.params = {};
axios.defaults.params['api_key'] = apiKey;

const fetchPopMovies = async (mediaType = 'movie', timeWindow = 'day') => {
  try {
    return axios
      .get(`/trending/${mediaType}/${timeWindow}`)
      .then(response => response.data.results);
  } catch (err) {
    return [];
  }
};

const fetchMovieByKeyword = async keyword => {
  try {
    return await axios
      .get(`/search/movie`, { params: { query: keyword } })
      .then(response => response.data.results);
  } catch (err) {
    return [];
  }
};

const fetchMovieDetails = async movieId => {
  try {
    return await axios.get(`/movie/${movieId}`).then(response => response.data);
  } catch (err) {
    return [];
  }
};

const fetchMovieCredits = async movieId => {
  try {
    return await axios
      .get(`/movie/${movieId}/credits`)
      .then(response => response.data);
  } catch (err) {
    return [];
  }
};

const fetchMovieReviews = async movieId => {
  try {
    return await axios
      .get(`/movie/${movieId}/reviews`)
      .then(response => response.data);
  } catch (err) {
    return [];
  }
};

const moviesAPI = {
  fetchPopMovies,
  fetchMovieByKeyword,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
};

export default moviesAPI;
