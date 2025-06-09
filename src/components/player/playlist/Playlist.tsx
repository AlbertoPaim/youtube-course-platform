'use client';

import { useState } from "react";
import { PlayerGroupClass, PlayerGroupClassProps } from "./components/PlayerGroupClass";

interface PlaylistProps {
    playingClassId: string;
    groupClasses: Pick<PlayerGroupClassProps, 'classes' | 'title'>[];
};

export const Playlist = ({ groupClasses, playingClassId }: PlaylistProps) => {
    const [openIndex, setOpenIndex] = useState<undefined | number>(undefined);

    return (
        <div className="flex  flex-col gap-1">
            <div className="bg-paper p-4 flex flex-col">
                <h3 className="font-bold text-lg">Conteúdo do curso</h3>
            </div>

            <ol>
                {groupClasses.map((item, index) => (
                    <li key={item.title}>
                        <PlayerGroupClass
                            {...item}
                            playingClassId={playingClassId}
                            open={openIndex === index}
                            onToggle={() => { setOpenIndex(openIndex === index ? undefined : index); }}
                            position={index + 1}
                        />
                    </li>
                ))}

            </ol>




        </div>);
};