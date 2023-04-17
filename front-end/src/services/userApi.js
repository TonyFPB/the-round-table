import api from "./api";

export async function getUsers(name) {
  const user = localStorage.getItem("user");
  const { token } = JSON.parse(user);
  const auth = {
    params:{
      name:name
    },
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await api.get("/user/search", auth);

  return response.data
}