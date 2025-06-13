'use client';

import { PlayerHeader } from "@/components/player/PlayerHeader";
import { PlayerVideo } from "@/components/player/PlayerVideo";
import { Playlist } from "@/components/player/playlist/Playlist";
import { useParams } from "next/navigation";

export default function Player() {

    const params = useParams();
    const courseId = params.courseId as string;
    const classId = params.classId as string;

    return (
        <main className=" flex  flex-col gap-2 h-screen">
            <PlayerHeader title="Titulo"
                subtitle="Subtitulo"
            />
            <div className="flex gap-2  h-[calc(100vh-80px)]">
                <div className="w-96">
                    <Playlist
                        playingClassId={classId}
                        playingCourseId={courseId}

                        groupClasses={[
                            {
                                title: 'introdução1',
                                classes: [{
                                    done: true,
                                    classId: '1',
                                    title: 'O que é next 01',
                                }, {
                                    done: true,
                                    classId: '2',
                                    title: 'O que é next 02',
                                },
                                {
                                    done: true,
                                    classId: '3',
                                    title: 'O que é next 03',
                                }]
                            }
                        ]}
                    />

                </div>
                <div className="flex-1">
                    <PlayerVideo

                        videoId='apXQAnFX3JM'
                    />
                </div>
            </div>
        </main>

    );
};