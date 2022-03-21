import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "a7ee62e170msh9b69eebbf66ca1ap150356jsn0ebcdd3361f3",
};

const baseUrl = `https://coinranking1.p.rapidapi.com/`;

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    // keepUnusedDataFor: 0
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
