import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
// process.env.REACT_APP_TMDB_KEY;
// /movie/popular?api_key=<<api_key>>&language=en-US&page=1

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // Get Genres
    getGenres: builder.query({
      query: () => `/genre/movie/list?api_key=${tmdbApiKey}`,
    }),

    // Get Movies by [Type]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page }) => {
        // Get Movies by Category - Category names are strings e.g. 'popular, top_rated'
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          console.log('getting a movie by category');
          return `movie/${genreIdOrCategoryName}?api_key=${tmdbApiKey}&page=${page}`;
        }

        console.log(genreIdOrCategoryName);
        // Get Movies by Genre - Genre IDs are numbers
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          console.log('getting a movie by genre');
          //      discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }

        // Get Popular Movies
        return `movie/popular?api_key=${tmdbApiKey}&page=${page}`;
      },
    }),
  }),
});

export const {
  useGetGenresQuery, // A hook created automatically by redux
  useGetMoviesQuery, // A hook created automatically by redux
} = tmdbApi;
