import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nytimes.com/svc/",
  }),
  endpoints: (builder) => ({
    getNEWSAPI: builder.query({
      query: (id) => `posts/${id}`,
    } ),
    
  }),
});

export const { useGetNEWSAPIQuery } = newsApi;

// `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${props.apiKey}`;

//`https://api.nytimes.com/svc/topstories/v2/${props.section}.json?api-key=${props.apiKey}`;
