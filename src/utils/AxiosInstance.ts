import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "fb2398f0003757361045d72497fe13c3",
    language: "ko-KR"
  }
});

export const movieApi = {
  popular: () => AxiosInstance.get("movie/popular"),
  upcoming: () => AxiosInstance.get("movie/upcoming"),
  detail: (id: number) =>
    AxiosInstance.get(`movie/${id}`, {
      params: {
        append_to_response: "videos similar"
      }
    }),
  search: (term: string) =>
    AxiosInstance.get("search/movie", {
      params: {
        query: encodeURI(term)
      }
    })
};
