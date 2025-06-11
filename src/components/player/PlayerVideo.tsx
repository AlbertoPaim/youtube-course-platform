'use client';

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface Props {
    videoId: string;
}

export const PlayerVideo = ({ videoId }: Props) => {

    return (
        <div className="aspect-video flex flex-1">
            <ReactPlayer
                width={"100%"}
                height={"100%"}
                controls={true}
                playing={true}
                url={`https://www.youtube.com/watch?v=${videoId}`}
            />
        </div>
    );
};

