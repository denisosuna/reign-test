import { API_URL } from "./settings";

export async function getNews({
  keyword = "react",
  page = 0,
} = {}) {
  let apiURL = `${API_URL}/search_by_date?query=${keyword}&page=${page}&hitsPerPage=${7 * (page + 1)}`;
  return await fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      localStorage.data = JSON.stringify(response);
      return response;
    });
}
