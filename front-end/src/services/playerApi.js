import api from "./api";


export async function addPlayer(body) {
  const user = localStorage.getItem("user");
  const { token } = JSON.parse(user);
  const auth = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  
  const response = await api.post("/player/add", body, auth);

  return response.data
}

export async function updatePlayer(body) {
  const user = localStorage.getItem("user");
  const { token } = JSON.parse(user);
  const auth = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  
  const response = await api.put("/player/form", body, auth);

  return response.data
}