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
      query: (priority) => {
        const params = new URLSearchParams(); // params is an object, if priority comes,priority property will be appended
        if (priority) {
          params.append("priority", priority);
        }
        return {
          url: "/todos",
          method: "GET",
          //  params: { priority }, // must be given objecthere,  or new way->
          params: params,
        };
      },
      providesTags: ["todo"], // this query is the provider of the 'todo' cached data
    }),
    addTodo: builder.mutation({
      query: (data) => {
        console.log("post data from aapi.ts=>", data);
        return {
          url: "/todos",
          method: "POST",
          body: data, // must be given an object here
        };
      },
      invalidatesTags: ["todo"], // invalidates the cache , so that the it's provider query can refetch
    }),
    toggleTodoStatus: builder.mutation({
      query: (data) => {
        console.log("update data from aapi.ts=>", data);
        return {
          url: `/todo/${data._id}`,
          method: "PUT",
          body: data, // must be given an object here
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});
export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useToggleTodoStatusMutation,
} = baseApi; //  baseApi returns hooks based on endpoints

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
