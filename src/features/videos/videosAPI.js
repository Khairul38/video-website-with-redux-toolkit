import axios from "../../utils/axios";

export const getVideos = async (tags, search, selectedAuthor, page) => {
  let queryString = "";
  if (page !== "") {
    queryString += `_page=${page}&_limit=8`;
  }
  if (tags?.length > 0) {
    queryString += tags.map((tag) => `&tags_like=${tag}`).join("&");
  }
  if (selectedAuthor !== "") {
    queryString += `&author=${selectedAuthor}`;
  }
  if (search !== "") {
    queryString += `&q=${search}`;
  }
  const response = await axios.get(`/videos/?${queryString}`);
  return response.data;
};
