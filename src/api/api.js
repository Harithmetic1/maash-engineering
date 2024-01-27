import axios from "axios";

// let token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNjdmMjFlNS05MGI3LTQ3ZTAtOTg1NC00MjM1NjExNjkzZjciLCJ1c2VybmFtZSI6Imhhcml0aCIsImlhdCI6MTcwNDY1MTk3NywiZXhwIjoxNzA0NjU1NTc3fQ.0W_bG7xK-nR-aBt0LOMq0xIHGP6fD2q26haRFOGXF5A";

const api = axios.create({
  baseURL: "https://maashbackend.up.railway.app/v1",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNjdmMjFlNS05MGI3LTQ3ZTAtOTg1NC00MjM1NjExNjkzZjciLCJ1c2VybmFtZSI6Imhhcml0aCIsImlhdCI6MTcwNDcxNzYwOCwiZXhwIjoxNzA0NzIxMjA4fQ.Nd6X4fsJJlgjr_7GPXZupf-kZVFmIDAiU9EYI4MyNMo`,
    "Content-Type": "application/json",
  },
});

export const login = async (username, password) => {
  try {
    const response = await api.post("/login", { username, password });
    // token = response.data.accessToken;
    console.log(`Login successful. Token: ${response.data.accessToken}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getEquipments = async () => {
  try {
    console.log("Fetching equipments...");
    const response = await api.get("/equipment/");
    console.log(response);
    return response.data.result;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch equipments. ${error}`);
  }
};

export const getEquipmentByID = async (id) => {
  try {
    console.log(`Fetching equipment with id: ${id}`);
    const response = await api.get(`/equipment/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch equipment with id: ${id}. ${error}`);
  }
};
