import axios from "axios";

export const getImages = async (query, perPage, currentPage) => {
  try {
    const key = "22338182-d32033ca73cb03d5e32127cf6";
    const url = `https://pixabay.com/api/?key=${key}&q=${encodeURI(
      query
    )}&per_page=${perPage}&page=${currentPage}`;

    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error("GET_IMAGES_ERROR", error);
  }
};
