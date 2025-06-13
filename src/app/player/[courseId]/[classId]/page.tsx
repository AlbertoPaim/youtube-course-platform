'use client';

import { PlayerHeader } from "@/components/player/PlayerHeader";
import { PlayerClassDetails } from "@/components/player/playlist/playerClassDetails/PlayerClassDetails";
import { Playlist } from "@/components/player/playlist/Playlist";
import { useParams } from "next/navigation";

export default function Player() {

    const params = useParams();
    const courseId = params.courseId as string;
    const classId = params.classId as string;

    const classGroupData = [
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
    ];

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

                        groupClasses={classGroupData}
                    />

                </div>


                <PlayerClassDetails
                    classGroups={classGroupData}
                    playingClassId={classId}
                    playingCourseId={courseId}
                />

            </div>
        </main>

    );
};