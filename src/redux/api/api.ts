import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["todo"], // caches
  endpoints: (builder) => ({
    // for get => query , for post/update/delete => mutation
    getTodos: builder.query({
      query: () => ({
        url: "/todos",
        method: "GET",
      }),
      providesTags: ["todo"], // this query is the provider of the 'todo' cached data
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: "/todos",
        method: "POST",
        body: data, // must be given an object here
      }),
      invalidatesTags: ["todo"], // invalidates the cache , so that the it's provider query can refetch
    }),
  }),
});
export const { useGetTodosQuery, useAddTodoMutation } = baseApi; //  baseApi returns hooks based on endpoints

/*

1. **RTK Query Setup**:  
   This code uses `@reduxjs/toolkit/query/react` to set up **RTK Query**, a powerful data-fetching and caching tool built into Redux Toolkit.

2. **`createApi` Definition**:  
   The `createApi` function defines a **service** named `baseApi` with a `reducerPath` of `"baseApi"` and a `baseUrl` of `"http://localhost:3000"`.

3. **Endpoints Configuration**:  
   Inside the `endpoints` function, a `getTodos` **query** endpoint is created. This fetches data from the `/todos` endpoint using the `GET` method.

4. **Hook Generation**:  
   RTK Query auto-generates hooks for each endpoint. In this case, `useGetTodosQuery` is generated for the `getTodos` endpoint, which you can use in components to fetch todos.

5. **Query vs Mutation**:  
   A comment in the code explains that **queries** are used for `GET` requests (fetching data), while **mutations** are used for `POST`, `PUT`, `PATCH`, or `DELETE` requests (modifying data).


*/
