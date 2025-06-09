'use client';

import { PlayerHeader } from "@/components/player/PlayerHeader";
import { Playlist } from "@/components/player/playlist/Playlist";
import { useParams } from "next/navigation";

export default function Player() {

    const params = useParams();
    // const courseId = params.courseId as string;
    const classId = params.classId as string;

    return (
        <main className=" flex  flex-col gap-2">
            <PlayerHeader title="Titulo"
                subtitle="Subtitulo"
            />
            <div className="flex gap-2 ">
                <div className="w-96">
                    <Playlist
                        playingClassId={classId}
                        groupClasses={[
                            {
                                title: 'introdução',
                                classes: [{
                                    done: true,
                                    classId: '1',
                                    title: 'O que é next',
                                }]
                            },
                            {
                                title: 'introdução2',
                                classes: [{
                                    done: true,
                                    classId: '2',
                                    title: 'O que é next',
                                }]
                            }
                        ]}
                    />

                </div>
                <div className="flex-1">
                    player video
                </div>
            </div>
        </main>

    );
};