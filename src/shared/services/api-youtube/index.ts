import { youtube } from "@googleapis/youtube";

const youTubeApiClient = youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY
});

export const apiYoutube = {
    course: {
        getAll: async () => {
            const { data } = await youTubeApiClient.playlists.list({
                maxResults: 50,
                part: ['snippet', 'status'],
                channelId: process.env.CHANNEL_ID
            });

            const courses = (data.items || [])
                .filter(item => item.snippet?.thumbnails?.default?.url !== "https://i.ytimg.com/img/no_thumbnail.jpg")
                .map(item => ({
                    id: item.id || '',
                    title: item.snippet?.title || '',
                    description: item.snippet?.description || '',
                    image: item.snippet?.thumbnails?.medium?.url || '',

                }));

            return courses.reverse();
        }


    },
    classes: {

    }
};