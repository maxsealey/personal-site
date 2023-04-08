import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectAPI = createApi({
    reducerPath: "projectAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8787"}),
    endpoints: (builder) => ({
        getAllprojects: builder.query({
            query: () => "projects",
        }),
    })
});

export const { useGetAllproductsQuery } = projectAPI;