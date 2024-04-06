import { apiSlice } from "../../api/apiSlice";

export const profile = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        profile: builder.mutation({
        query: (data) => ({
             url: "/api/mentor/user/mentorProfile",
             method: "GET",
            //  body: data,
        })
       
        })
    })
});

export const {useProfileMutation} = profile;
