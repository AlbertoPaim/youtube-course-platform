"use client";

import { useRouter } from "next/navigation";
import { PlayerVideo } from "./components/PlayerVideo";
import { PlayerGroupClassProps } from "../components/PlayerGroupClass";
import { useMemo } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { CourseHeader } from "@/components/course-header/CourseHeader";
import { PlayerClassHeader } from "./components/PlayerClassHeader";

interface IPlayerClassDetailsProps {
    course: {
        title: string;
        description: string;
        numberOfClasses: number;
    }

    classItem: {
        title: string;
        description: string;
    }


    playingCourseId: string;
    playingClassId: string;
    classGroups: Pick<PlayerGroupClassProps, 'classes' | 'title'>[];
}

export const PlayerClassDetails = ({ playingCourseId, playingClassId, classGroups, course, classItem }: IPlayerClassDetailsProps) => {

    const router = useRouter();

    const nextClassId = useMemo(() => {
        const classes = classGroups.flatMap(classGroupItem => classGroupItem.classes);
        const currentClassIndex = classes.findIndex(Classitem => Classitem.classId === playingClassId);
        const nextVideo = currentClassIndex + 1;

        return nextVideo === classes.length ? undefined : classes[nextVideo].classId;

    }, [classGroups, playingClassId]);

    return (
        <div className="flex-1 overflow-auto pb-10">
            <div className="aspect-video">
                <PlayerVideo
                    onNextVideo={() => nextClassId ? router.push(`/player/${playingCourseId}/${nextClassId}`) : {}}
                    videoId='apXQAnFX3JM'
                />
            </div>

            <Tabs.Root defaultValue="class-details">
                <Tabs.List className="flex gap-4">
                    <Tabs.Trigger value="class-details" className="flex justify-center p-2 items-center border-transparent border-b-4 data-[state=active]:border-primary pb-1">
                        Detalhes
                    </Tabs.Trigger>
                    <Tabs.Trigger value="class-comments" className="flex justify-center p-2 items-center border-transparent border-b-4 data-[state=active]:border-primary pb-1">
                        Comentários
                    </Tabs.Trigger>
                    <Tabs.Trigger value="couser-details" className="flex justify-center p-2 items-center border-transparent border-b-4 data-[state=active]:border-primary pb-1">
                        Sobre o Curso
                    </Tabs.Trigger>
                </Tabs.List>


                <hr className="border-paper mb-2" />

                <Tabs.Content value="class-details">
                    <PlayerClassHeader
                        title={classItem.title}
                        description={classItem.description}
                    />
                </Tabs.Content>
                <Tabs.Content value="class-comments">
                    Comentários
                </Tabs.Content>
                <Tabs.Content value="couser-details">
                    <CourseHeader
                        title={course.title}
                        description={course.description}
                        numberOfclasses={course.numberOfClasses}
                    />
                </Tabs.Content>
            </Tabs.Root>

        </div>
    );
};

