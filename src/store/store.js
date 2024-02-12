import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";

export const useStore = create(
  persist(
    (set, get) => ({
      token: null,
      setToken: (token) => set({ token }),
      user: null,
      setUser: (user) => set({ user }),
      //   headers: (state) => ({
      //     Authorization: state.token ? `Bearer ${state.token}` : undefined,
      //     "Content-Type": "application/json",
      //   }),
      api: axios.create({
        baseURL: "https://maashbackend.up.railway.app/v1",
        headers: {
          Authorization: `Bearer ${get()?.token}`,
          "Content-Type": "application/json",
        },
      }),
      login: async (username, password) => {
        try {
          const api = useStore.getState().api;
          const response = await api.post("user/login", { username, password });
          // token = response.data.accessToken;
          // console.log(`Login successful. Token: ${response.data.accessToken}`);
          set((state) => ({
            token: response.data.accessToken,
            user: response.data,
            api: axios.create({
              baseURL: "https://maashbackend.up.railway.app/v1",
              headers: {
                Authorization: `Bearer ${response.data.accessToken}`,
                "Content-Type": "application/json",
              },
            }),
          }));
          return response.data;
        } catch (error) {
          console.log(error);
          throw new Error(`Failed to login: ${error.response.data.message}`);
        }
      },
      getEquipments: async () => {
        try {
          const api = useStore.getState().api;
          console.log("Fetching equipments...", get());
          const response = await api.get("/equipment/");
          console.log(response);
          return response.data.result;
        } catch (error) {
          throw new Error(
            `Failed to fetch equipments. ${error.response.data.message}`
          );
        }
      },
      getEquipmentByID: async (id) => {
        try {
          // console.log(`Fetching equipment with id: ${id}`);
          const api = useStore.getState().api;
          const response = await api.get(`/equipment/${id}`);
          console.log(useStore.getState().token);
          return response.data;
        } catch (error) {
          // console.log(error);
          throw new Error(
            `Failed to fetch equipment with id: ${id}. ${error.response.data.message}`
          );
        }
      },
      getEquipmentByParam: async (param, value) => {
        try {
          // console.log(`Fetching equipment with id: ${id}`);
          const api = useStore.getState().api;
          const response = await api.get(`/equipment/?${param}=${value}`);
          // console.log(response.data);
          return response.data.result;
        } catch (error) {
          // console.log(error);
          throw new Error(
            `Failed to fetch equipment with id: ${id}. ${error.response.data.message}`
          );
        }
      },
      searchEquipments: async (name) => {
        try {
          name = name.charAt(0).toUpperCase() + name.slice(1);
          // console.log(`Fetching equipment with id: ${id}`);
          const api = useStore.getState().api;
          const response = await api.get(`/equipment/?name=${name}`);
          // console.log(response.data);
          return response.data;
        } catch (error) {
          // console.log(error);
          throw new Error(
            `Failed to fetch equipment with id: ${id}. ${error.response.data.message}`
          );
        }
      },
      deleteEquipment: async (id) => {
        try {
          const api = get().api;
          const response = await api.delete(`/equipment/${id}`);
          return response.data;
        } catch (error) {
          throw new Error(
            `Failed to delete equipment with id: ${id}. ${error.response.data.message}`
          );
        }
      },
    }),
    {
      name: "maashStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
