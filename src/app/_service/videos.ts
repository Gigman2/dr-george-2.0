import axios from "axios";

export const fetchYoutube = async () => {
    console.log({
        key: process.env.NEXT_PUBLIC_YOUTUBE_API,
        channelId: process.env.NEXT_PUBLIC_CHANNEL_ID,
        part: "snippet,id",
        order: "date",
        maxResults: "50",
        pageToken: ""
    })
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
            key: process.env.NEXT_PUBLIC_YOUTUBE_API,
            channelId: process.env.NEXT_PUBLIC_CHANNEL_ID,
            part: "snippet,id",
            order: "date",
            maxResults: "50",
            pageToken: ""
        }
    });

    const videoData = await res.data;

    return videoData;
}