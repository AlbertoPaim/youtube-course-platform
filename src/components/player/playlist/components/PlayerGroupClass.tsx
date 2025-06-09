'use client';

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import PlayerClass, { PlayerClassProps } from "./PlayerClass";

export interface PlayerGroupClassProps {
    title: string;
    position: number;
    playingClassId: string;
    classes: (Pick<PlayerClassProps, 'done' | 'title'> & { classId: string })[];
    open: boolean;
    onToggle: () => void;
}

export const PlayerGroupClass = ({ title, position, classes, open, onToggle, playingClassId }: PlayerGroupClassProps) => {
    return (

        <div className="flex flex-col">
            <button className="flex p-4 gap-4 bg-paper items-center active:opacity-80" onClick={onToggle}>
                <div className="bg-primary w-12 h-12 flex items-center justify-center rounded-full">{position}</div>

                <div className="flex flex-col flex-1 items-start">
                    <span>{title}</span>
                    <span className="text-sm font-light">aula {classes.filter(item => item.done).length}/{classes.length}</span>
                </div>

                {open ? <MdKeyboardArrowDown size={28} /> : <MdKeyboardArrowRight size={28} />}

            </button>
            {open &&
                <ol>
                    {classes.map(item =>
                    (<li key={item.title}>
                        <PlayerClass
                            {...item}
                            playing={item.classId === playingClassId}
                            onCheck={() => console.log('check')}
                            onPlay={() => console.log('play')}
                        />
                    </li>
                    ))}

                </ol>
            }


        </div>
    );
};
