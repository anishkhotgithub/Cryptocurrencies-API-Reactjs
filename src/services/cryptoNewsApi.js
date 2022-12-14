import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsApiHeaders=
{
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': 'cf63f40a49mshdc0a5a0b02472e0p18de0ejsn128864451c49'
}

const baseUrl='https://bing-news-search1.p.rapidapi.com'

const createRequest =(url)=>({url,headers:cryptoNewsApiHeaders});

export const cryptoNewsApi= createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>(
        {
            getCryptosNews:builder.query({
                query:({newsCategory,count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
            })
        }
    )
});

export const{
    useGetCryptosNewsQuery,
}=cryptoNewsApi;