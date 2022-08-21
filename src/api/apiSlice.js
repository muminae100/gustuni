//RTK Query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3500";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) =>({
        getSongs: builder.query({
            query: () => "/songs",
        }),
        getGenres: builder.query({
            query: () => "/genres",
        }),
        getSong: builder.query({
            query: songId => `/songs/${songId}`,
        }),
        getGenre: builder.query({
            query: genreId => `/genres/${genreId}`,
        })
    })
})

export const {
    useGetSongsQuery,
    useGetGenresQuery,
    useGetSongQuery,
    useGetGenreQuery
} = apiSlice