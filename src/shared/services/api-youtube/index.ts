import { youtube, youtube_v3 } from '@googleapis/youtube';


const fetchWithNextConfig = (nextConfig?: NextFetchRequestConfig): typeof fetch => {
    return (input, params = {}) => {
        return fetch(input, { ...params, next: nextConfig });
    };
};

const youTubeApiClient = youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY,
    fetchImplementation: fetchWithNextConfig(),
});


export const apiYoutube = {
    course: {
        getAll: async () => {
            const { data } = await youTubeApiClient.playlists.list({
                maxResults: 50,
                part: ['snippet'],
                channelId: process.env.CHANNEL_ID
            }, { fetchImplementation: fetchWithNextConfig({ revalidate: (60 * 60) * 48 }) });

            const courses = (data.items || [])
                .filter(item => item.snippet?.thumbnails?.default?.url !== "https://i.ytimg.com/img/no_thumbnail.jpg")
                .map(playlistItem => ({
                    id: playlistItem.id || '',
                    title: playlistItem.snippet?.title || '',
                    description: playlistItem.snippet?.description || '',
                    image: playlistItem.snippet?.thumbnails?.medium?.url || '',
                }));

            return courses;
        },
        getById: async (id: string) => {
            const { data: { items: [courseItem] = [] } } = await youTubeApiClient.playlists.list({
                id: [id],
                maxResults: 1,
                part: ['snippet'],
            }, { fetchImplementation: fetchWithNextConfig({ revalidate: (60 * 60) * 48 }) });


            const classes: youtube_v3.Schema$PlaylistItem[] = [];
            let nextPageToken: string | undefined = undefined;
            do {
                await youTubeApiClient.playlistItems
                    .list({
                        maxResults: 50,
                        playlistId: id,
                        part: ['snippet'],
                        pageToken: nextPageToken,
                    }, { fetchImplementation: fetchWithNextConfig({ revalidate: (60 * 60) * 24 }) })
                    .then(({ data }) => {
                        classes.push(...(data.items || []));
                        nextPageToken = data.nextPageToken || undefined;
                    });
            } while (nextPageToken);


            type TGroupWithClass = {
                title: string,
                courseId: string,
                classes: {
                    id: string,
                    title: string,
                }[],
            }

            const classGroups = classes
                .sort((a, b) => (a.snippet?.position || 0) - (b.snippet?.position || 0))
                .map(youTubePlaylistItem => ({
                    id: youTubePlaylistItem.id || '',
                    title: youTubePlaylistItem.snippet?.title || '',
                    description: youTubePlaylistItem.snippet?.description || '',
                }))
                .reduce<TGroupWithClass[]>((previous, current) => {
                    const currentGroupTitle = 'Assistir conteúdo';

                    const previousGroup = previous.at(previous.length - 1);
                    const previousGroupTitle = previousGroup?.title;

                    if (previousGroup && previousGroupTitle === currentGroupTitle) {
                        previousGroup.classes.push({
                            id: current.id,
                            title: current.title,
                        });
                    } else {
                        previous.push({
                            courseId: id,
                            title: currentGroupTitle,
                            classes: [
                                {
                                    id: current.id,
                                    title: current.title,
                                }
                            ]
                        });
                    }

                    return previous;
                }, []);


            return {
                id,
                title: courseItem.snippet?.title || '',
                description: courseItem.snippet?.description || '',
                image: courseItem.snippet?.thumbnails?.medium?.url || '',

                classGroups,
                numberOfClasses: classes.length,
            };
        },
    },
};