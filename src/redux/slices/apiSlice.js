import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const API_URI = import.meta.env.VITE_APP_BASE_URL;
const API_URI = "https://gestiondesprojects-f1710f0d8ad9.herokuapp.com";

const baseQuery = fetchBaseQuery({ baseUrl: API_URI + "/api" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
