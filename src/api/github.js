import axios from "axios";

const GithubApi = {
  search: (query) =>axios.get(`https://api.github.com/search/repositories?q=${query}&page=1&per_page=10`),
};

export default GithubApi;