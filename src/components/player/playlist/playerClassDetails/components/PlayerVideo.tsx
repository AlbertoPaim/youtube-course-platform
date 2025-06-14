'use client';

import { forwardRef, useImperativeHandle, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type TReactPlayer from 'react-player';

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface IplayerVideoProps {
    videoId: string;
    onNextVideo: () => void;
}

export interface IplayerVideoPropsRef {
    setProgress: (seconds: number) => void;
}

// eslint-disable-next-line react/display-name
export const PlayerVideo = forwardRef<IplayerVideoPropsRef, IplayerVideoProps>(({ videoId, onNextVideo }, playerRefToForward) => {

    const playerRef = useRef<TReactPlayer>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [progress, setProgress] = useState<number | undefined>(undefined);
    const [totalDurantion, setTotalduration] = useState<number | undefined>(undefined);



    const secondsLeft = useMemo(() => {

        if (!totalDurantion) return undefined;
        if (!progress) return undefined;

        return totalDurantion - progress;

    }, [progress, totalDurantion]);


    const showNextVideoButton = useMemo(() => {

        return secondsLeft !== undefined && secondsLeft <= 20;

    }, [secondsLeft]);


    useImperativeHandle(playerRefToForward, () => {
        return {
            setProgress(seconds) {
                playerRef.current?.seekTo(seconds, 'seconds');
                wrapperRef.current?.scrollIntoView({ behavior: 'smooth' });
            }
        };
    });


    return (
        <div className="aspect-video flex flex-1 h-full" ref={wrapperRef}>

            {showNextVideoButton && (
                <div>
                    <button className="bg-primary px-3 rounded-lg absolute py-2 right-2 hover:opacity-80" onClick={onNextVideo}>
                        Próxima aula em {secondsLeft?.toFixed(0)}
                    </button>
                </div>
            )}

            <ReactPlayer
                width={"100%"}
                height={"100%"}
                controls={true}
                playing={false}
                url={`https://www.youtube.com/watch?v=${videoId}`}

                onReady={ref => playerRef.current = ref}
                onEnded={() => onNextVideo()}
                onProgress={({ playedSeconds }) => setProgress(playedSeconds)}
                onDuration={(duration) => setTotalduration(duration)}
            />
        </div>
    );
});

