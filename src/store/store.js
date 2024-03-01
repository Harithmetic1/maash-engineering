import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";
import { toast } from "react-toastify";
import { useDisclosure } from "@chakra-ui/react";

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
          // console.log(error);
          throw new Error(`Failed to login: ${error.response.data.message}`);
        }
      },
      logout: () => {
        set({ token: null, user: null });
      },
      getEquipments: async () => {
        try {
          const api = useStore.getState().api;
          // console.log("Fetching equipments...");
          const response = await api.get("/equipment/");
          return response?.data?.result;
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
          // console.log(useStore.getState().token);
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
          const header = {
            headers: {
              Authorization: `Bearer ${get()?.token}`,
              "Content-Type": "multipart/form-data",
            },
          };
          const response = await api.delete(`/equipment/${id}`, header);
          toast.success("Equipment deleted successfully");
          return response.data;
        } catch (error) {
          toast.error(
            `Failed to delete equipment with id: ${id}. ${error.response.data.message} Please log in and try again.`
          );
          throw new Error(
            `Failed to delete equipment with id: ${id}. ${error.response.data.message}`
          );
        }
      },
      addEquipment: async (data) => {
        try {
          const api = get().api;
          // Send formdata to the server
          const header = {
            headers: {
              Authorization: `Bearer ${get()?.token}`,
              "Content-Type": "multipart/form-data",
            },
          };
          const response = await api.post("/equipment/", data, header);
          toast.success("Equipment added successfully");
          return response.data;
        } catch (error) {
          toast.error(
            `Failed to add equipment: ${error.response.data.message}`
          );
          throw new Error(
            `Failed to add equipment. ${error.response.data.message}`
          );
        }
      },
      editEquipment: async (equipmentId, data) => {
        try {
          const api = get().api;
          // Send formdata to the server
          const header = {
            headers: {
              Authorization: `Bearer ${get()?.token}`,
              "Content-Type": "multipart/form-data",
            },
          };
          const response = await api.put(
            `/equipment/${equipmentId}`,
            data,
            header
          );
          toast.success("Equipment edited successfully");
          return response.data;
        } catch (error) {
          toast.error(
            `Failed to edit equipment: ${error.response.data.message}`
          );
          throw new Error(
            `Failed to edit equipment. ${error.response.data.message}`
          );
        }
      },
      deleteManager: async (id) => {
        try {
          const api = get().api;
          const header = {
            headers: {
              Authorization: `Bearer ${get()?.token}`,
              "Content-Type": "multipart/form-data",
            },
          };
          const response = await api.delete(`/managers/${id}`, header);
          toast.success("Manager deleted successfully");
          return response.data;
        } catch (error) {
          toast.error(
            `Failed to delete manager with id: ${id}. ${error.response.data.message} Please log in and try again.`
          );
          throw new Error(
            `Failed to delete manager with id: ${id}. ${error.response.data.message}`
          );
        }
      },
      addManager: async (data) => {
        try {
          const api = get().api;
          // Send formdata to the server
          const header = {
            headers: {
              Authorization: `Bearer ${get()?.token}`,
              "Content-Type": "multipart/form-data",
            },
          };
          const response = await api.post("/managers/", data, header);
          toast.success("Manager added successfully");
          return response.data;
        } catch (error) {
          toast.error(`Failed to add manager: ${error.response.data.message}`);
          throw new Error(
            `Failed to add manager. ${error.response.data.message}`
          );
        }
      },
      getManagers: async () => {
        try {
          const api = get().api;
          const header = {
            headers: {
              Authorization: `Bearer ${get()?.token}`,
            },
          };
          // console.log("Fetching managers...");
          const response = await api.get("/managers/", header);
          return response?.data;
        } catch (error) {
          toast.error(
            `Failed to fetch managers. ${error.response.data.message} Please log in and try again.`
          );
          throw new Error(
            `Failed to fetch managers. ${error.response.data.message}`
          );
        }
      },
      getManagerByID: async (id) => {
        try {
          const api = get().api;
          const header = {
            headers: {
              Authorization: `Bearer ${get()?.token}`,
            },
          };
          // console.log("Fetching manager...");
          const response = await api.get(`/managers/${id}`, header);
          return response?.data;
        } catch (error) {
          toast.error(
            `Failed to fetch manager. ${error.response.data.message} Please log in and try again.`
          );
          throw new Error(
            `Failed to fetch manager. ${error.response.data.message}`
          );
        }
      },
      editManagers: async (managerId, data) => {
        try {
          const api = get().api;
          // Send formdata to the server
          const header = {
            headers: {
              Authorization: `Bearer ${get()?.token}`,
              "Content-Type": "multipart/form-data",
            },
          };
          const response = await api.put(
            `/managers/${managerId}`,
            data,
            header
          );
          toast.success("Manager edited successfully");
          return response.data;
        } catch (error) {
          toast.error(`Failed to edit manager: ${error.response.data.message}`);
          throw new Error(
            `Failed to edit manager. ${error.response.data.message}`
          );
        }
      },
      getUsers: async () => {
        try {
          const api = get().api;
          const header = {
            headers: {
              Authorization: `Bearer ${get()?.token}`,
            },
          };
          // console.log("Fetching users...");
          const response = await api.get("/user/", header);
          return response?.data;
        } catch (error) {
          toast.error(
            `Failed to fetch users. ${error.response.data.message} Please log in and try again.`
          );
          throw new Error(
            `Failed to fetch users. ${error.response.data.message}`
          );
        }
      },
      deleteModal: {
        isOpen: false,
      },
      openDeleteModal: () => {
        set((state) => ({
          deleteModal: { ...state.deleteModal, isOpen: true },
        }));
      },
      closeDeleteModal: () => {
        set((state) => ({
          deleteModal: { ...state.deleteModal, isOpen: false },
        }));
      },
      managerModal: {
        isOpen: false,
      },
      openManagerModal: () => {
        set((state) => ({
          managerModal: { ...state.managerModal, isOpen: true },
        }));
      },
      closeManagerModal: () => {
        set((state) => ({
          managerModal: { ...state.managerModal, isOpen: false },
        }));
      },
      editManagerModal: {
        isOpen: false,
      },
      openEditManagerModal: () => {
        set((state) => ({
          editManagerModal: { ...state.editManagerModal, isOpen: true },
        }));
      },
      closeEditManagerModal: () => {
        set((state) => ({
          editManagerModal: { ...state.editManagerModal, isOpen: false },
        }));
      },
    }),
    {
      name: "maashStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
