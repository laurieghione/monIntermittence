import axios from "axios";
require("dotenv").config();

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api",
});

export const insertDeclaration = (payload) =>
  api.post(`/declaration`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
export const insertFile = (payload) =>
  api.post(`/file`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
export const insertFolder = (payload) =>
  api.post(`/folder`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
export const getDeclarationsByFolder = (folder) =>
  api.get(`/declarations/${folder}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
export const getActiveFolder = (user) =>
  api.get(`/folder/${user}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
export const getFileByDeclaration = (declaration) =>
  api.get(`/file/${declaration}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
export const insertEmployer = (payload) =>
  api.post(`/employer`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
export const getEmployers = () =>
  api.get(`/employer`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
export const getFolders = (user) =>
  api.get(`/folders/${user}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
export const deleteDeclarationById = (id) =>
  api.delete(`/declaration/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
export const getDeclarationById = (id) =>
  api.get(`/declaration/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
export const updateDeclarationById = (id, payload) =>
  api.put(`/declaration/${id}`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
export const updateFolderById = (id, payload) =>
  api.put(`/folder/${id}`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });

const apis = {
  insertDeclaration,
  insertFolder,
  getDeclarationsByFolder,
  getActiveFolder,
  insertEmployer,
  getEmployers,
  deleteDeclarationById,
  getDeclarationById,
  updateDeclarationById,
  updateFolderById,
  getFolders,
  insertFile,
  getFileByDeclaration,
};

export default apis;
