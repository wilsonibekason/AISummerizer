import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";
import { MaybePromise } from "@reduxjs/toolkit/dist/query/tsHelpers";
import {
  createApi,
  fetchBaseQuery,
  ApiProvider,
  BaseQueryApi,
} from "@reduxjs/toolkit/query/react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
  params: {
    url: "https://time.com/6266679/musk-ai-open-letter/",
    length: "3",
  },
  headers: {
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
const RapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY as string;

export const articleApi = createApi({
  reducerPath: "articleApi",
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (parmas) =>
        `/summarize?url=${encodeURIComponent(parmas.articleUrl)}&length=${
          parmas.length
        }`,
    }),
  }),
  // baseQuery: function (
  //   args: any,
  //   api: BaseQueryApi,
  //   extraOptions: {}
  // ): MaybePromise<QueryReturnValue<unknown, unknown, {}>> {
  //   throw new Error("Function not implemented.");
  // },
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "3994bcea9dmshc19239942a67f80p1f2d7djsnb91328436a1a"
      );
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
