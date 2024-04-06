import { getAuthorizationString } from "../../../utils/getAuthorizationString";
import { apiSlice } from "../../api/apiSlice";

export const mentorUserApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    checkZoomAuthStatus: builder.mutation({
      query: () => ({
        url: "/api/mentor/user/getZoomAuthStatus",
        method: "GET",
        headers: getAuthorizationString
      }),
    }),
    getZoomAuthUri: builder.mutation({
      query: () => ({
        url: "/api/zoom/oauth/authorize",
        method: "GET",
        headers: getAuthorizationString
      }),
    }),
  }),
});

export const { useZoomAuthStatusMutation, useZoomAuthMutation } = mentorUserApi;
