'use client';

import { useState } from "react";
import { PlayerGroupClass, PlayerGroupClassProps } from "./components/PlayerGroupClass";
import { useRouter } from "next/navigation";

interface PlaylistProps {
    playingClassId: string;
    playingCourseId: string;
    groupClasses: Pick<PlayerGroupClassProps, 'classes' | 'title'>[];
};

export const Playlist = ({ groupClasses, playingClassId, playingCourseId }: PlaylistProps) => {
    const [openIndex, setOpenIndex] = useState<undefined | number>(groupClasses.findIndex(item => item.classes.some(item => item.classId === playingClassId)));
    const router = useRouter();

    return (
        <div className="flex  flex-col gap-1 h-full">
            <div className="bg-paper p-4 flex flex-col">
                <h3 className="font-bold text-lg">Conteúdo do curso</h3>
            </div>

            <ol className="overflow-auto overflow-primary">
                {groupClasses.map((item, index) => (
                    <li key={item.title}>
                        <PlayerGroupClass
                            {...item}
                            playingClassId={playingClassId}
                            open={openIndex === index}
                            onToggle={() => { setOpenIndex(openIndex === index ? undefined : index); }}
                            position={index + 1}
                            onPlay={(classId) => router.push(`/player/${playingCourseId}/${classId}`)}
                        />
                    </li>
                ))}

            </ol>

        </div>);
};