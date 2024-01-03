const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const queryParams = new URLSearchParams(params);
    const response = await fetch(`${BASE_URL}${url}?${queryParams}`, {
      headers,
    });

    if (!response.ok) {
      // Handle non-successful response
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};
