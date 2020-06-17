import axios from "axios";

export const apiUrls = {
  randomUserUrl: "https://randomuser.me/api/",
};

const fetchEmployeesAsync = async (limit = 0) => {
  const result = await axios.get(`${apiUrls.randomUserUrl}?results=${limit}`);
  const data = result.data.results || [];
  const users = data.map((user) => ({
    name: user.name,
    picture: user.picture,
  }));
  return users;
};

const apiService = {
  fetchEmployeesAsync,
};

export default apiService;
