import api from "./api"

export async function saveSignUp(body) {
  const response = await api.post("/auth/sign-up", body)

  return response.data
}

export async function saveLogin(body) {
  const response = await api.post("/auth/sign-in", body)

  return response.data
}