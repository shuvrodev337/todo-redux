import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      // for get => query , for post/update/delete => mutation
      query: () => ({
        url: "/todos",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetTodosQuery } = baseApi; //  baseApi returns hooks based on endpoints
