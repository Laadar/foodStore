import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const backendApi = createApi({
    reducerPath: 'backendAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://backendAPIWhichisNotRealForSure.com' }),
    endpoints: (builder) => ({
        takeOrderRequest: builder.mutation({
            query: (payload) => ({
                url: '/takeOrder',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
        })
    })
})

export const { useTakeOrderRequestMutation } = backendApi
