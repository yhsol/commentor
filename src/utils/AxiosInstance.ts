import Axios from "axios";

// params not work! need instance, use config object
// const api = Axios.create({
// baseURL: "https://api.themoviedb.org/3"
// params: {
//   api_key: "fb2398f0003757361045d72497fe13c3",
//   language: "ko-KR"
// }
// });

export const movieApi = {
  popular: () =>
    Axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=fb2398f0003757361045d72497fe13c3"
    ),
  upcoming: () =>
    Axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=fb2398f0003757361045d72497fe13c3"
    ),
  detail: (id: number) =>
    Axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fb2398f0003757361045d72497fe13c3`,
      {
        params: {
          append_to_response: "videos similar"
        }
      }
    ),
  search: (term: string) =>
    Axios.get(
      "https://api.themoviedb.org/3/search/movie?api_key=fb2398f0003757361045d72497fe13c3",
      {
        params: {
          query: encodeURI(term)
        }
      }
    )
};
