'use client';

import { PlayerGroupClass } from "@/components/player/PlayerGroupClass";
import { PlayerHeader } from "@/components/player/PlayerHeader";
import { useParams } from "next/navigation";

export default function Player() {

    const params = useParams();
    const courseId = params.courseId as string;
    const classId = params.classId as string;

    return (
        <main className=" flex  flex-col gap-2">
            <PlayerHeader title="Titulo"
                subtitle="Subtitulo"
            />

            <PlayerGroupClass
                onToggle={() => { console.log('teste'); }}
                open={true}
                title=""
                position={1}
                classes={[
                    {
                        title: 'api rest etc',
                        done: true,
                        playing: true,
                    },

                ]}
            />

        </main>

    );
};