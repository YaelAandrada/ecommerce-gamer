const API_URL = "http://localhost:3000/api"

export const getJuegos = async () => {
  const res = await fetch(`${API_URL}/juegos`)
  return res.json()
}

export const loginUser = async (data) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  return res.json()
}
