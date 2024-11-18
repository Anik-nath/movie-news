import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://practiceserver.vercel.app/api",
    prepareHeaders: (headers) => {
      const toke = localStorage.getItem("Authorization");
      if (toke) {
        headers.set("Authorization", toke);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/user/",
    }),
    getSingleUser: builder.query({
      query: (userId) => `/user/${userId}`,
    }),

    updateUser: builder.mutation({
      query: ({ userId, payload }) => ({
        url: `/user/${userId}`,
        method: "PUT",
        body: payload,
      }),
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useGetSingleUserQuery,
  useDeleteUserMutation,
} = apiSlice;
