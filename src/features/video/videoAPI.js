import axios from "../../utils/axios";

export const getVideo = async (id) => {
  const response = await axios.get(`/videos/${id}`);
  return response.data;
};
export const patchVideo = async (id, value, condition) => {
  if (condition === "like") {
    const response = await axios.patch(`/videos/${id}`, { likes: value });
    return response.data;
  } else {
    const response = await axios.patch(`/videos/${id}`, { unlikes: value });
    return response.data;
  }
};
