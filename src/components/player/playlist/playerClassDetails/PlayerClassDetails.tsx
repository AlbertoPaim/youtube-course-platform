"use client";

import { useRouter } from "next/navigation";
import { PlayerVideo } from "./components/PlayerVideo";
import { PlayerGroupClassProps } from "../components/PlayerGroupClass";
import { useMemo } from "react";

interface IPlayerClassDetailsProps {
    playingCourseId: string;
    playingClassId: string;
    classGroups: Pick<PlayerGroupClassProps, 'classes' | 'title'>[];
}

export const PlayerClassDetails = ({ playingCourseId, playingClassId, classGroups }: IPlayerClassDetailsProps) => {

    const router = useRouter();

    const nextClassId = useMemo(() => {
        const classes = classGroups.flatMap(classGroupItem => classGroupItem.classes);
        const currentClassIndex = classes.findIndex(Classitem => Classitem.classId === playingClassId);
        const nextVideo = currentClassIndex + 1;

        return nextVideo === classes.length ? undefined : classes[nextVideo].classId;

    }, [classGroups, playingClassId]);

    return (
        <div className="flex-1">
            <div className="aspect-video">
                <PlayerVideo
                    onNextVideo={() => nextClassId ? router.push(`/player/${playingCourseId}/${nextClassId}`) : {}}
                    videoId='apXQAnFX3JM'
                />
            </div>
            <div>
                descrição
            </div>
        </div>
    );
};

