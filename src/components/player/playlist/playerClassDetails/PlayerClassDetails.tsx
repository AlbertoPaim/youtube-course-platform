"use client";

import { useRouter } from "next/navigation";
import { IplayerVideoPropsRef, PlayerVideo } from "./components/PlayerVideo";
import { PlayerGroupClassProps } from "../components/PlayerGroupClass";
import { useMemo, useRef } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { CourseHeader } from "@/components/course-header/CourseHeader";
import { PlayerClassHeader } from "./components/PlayerClassHeader";
import { Comments } from "../components/comments/Comments";
import { Playlist } from "../Playlist";
import { MdComment, MdThumbUp, MdVisibility } from "react-icons/md";

interface IPlayerClassDetailsProps {
    course: {
        title: string;
        description: string;
        numberOfClasses: number;
        classGroups: Pick<PlayerGroupClassProps, 'classes' | 'title'>[];
        id: string;

    }

    classItem: {
        title: string;
        description: string;
        viewsCount: number;
        likesCount: number;
        commentsCount: number;
        id: string;
        videoId: string;
    }

}

export const PlayerClassDetails = ({ course, classItem }: IPlayerClassDetailsProps) => {

    const router = useRouter();

    const playerVideoref = useRef<IplayerVideoPropsRef>(null);

    const nextClassId = useMemo(() => {
        const classes = course.classGroups.flatMap(classGroupItem => classGroupItem.classes);
        const currentClassIndex = classes.findIndex(Classitem => Classitem.classId === classItem.id);
        const nextVideo = currentClassIndex + 1;

        return nextVideo === classes.length ? undefined : classes[nextVideo].classId;

    }, [course.classGroups, classItem.id]);

    return (
        <div className="flex-1 overflow-auto pb-10">

            <div className="aspect-video">
                <PlayerVideo
                    ref={playerVideoref}
                    onNextVideo={() => nextClassId ? router.push(`/player/${course.id}/${nextClassId}`) : {}}
                    videoId={classItem.videoId}
                />
            </div>

            <div className="flex gap-2 p-2">
                <div className="flex gap-1 items-center">
                    <MdVisibility />
                    <span>{classItem.viewsCount}</span>
                    <span>Visualização</span>
                </div >
                <div className="flex gap-1 items-center">
                    <MdThumbUp />
                    <span>{classItem.likesCount}</span>
                    <span>Curtidas</span>
                </div>
                <div className="flex gap-1 items-center">
                    <MdComment />
                    <span>{classItem.commentsCount}</span>
                    <span>Comentários</span>
                </div>
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

                    <Tabs.Trigger value="class-playlist" className="flex justify-center p-2 items-center border-transparent border-b-4 data-[state=active]:border-primary pb-1 md:hidden">
                        Playlist
                    </Tabs.Trigger>
                </Tabs.List>


                <hr className="border-paper mb-2" />

                <Tabs.Content value="class-details" className="px-2">
                    <PlayerClassHeader
                        title={classItem.title}
                        description={classItem.description}
                        onTimeClick={seconds => playerVideoref.current?.setProgress(seconds)}
                    />
                </Tabs.Content>

                <Tabs.Content value="class-playlist" className="px-2">
                    <Playlist
                        playingClassId={classItem.id}
                        playingCourseId={course.id}

                        groupClasses={course.classGroups}
                    />

                </Tabs.Content>

                <Tabs.Content value="class-comments" className="px-2">
                    <Comments
                        comments={[
                            {
                                likesCounts: 15,
                                replies: undefined,
                                content: 'my reply',
                                publishDate: '2025-05-23T20:16:23Z',
                                author: {
                                    userName: 'Alberto',
                                    image: 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'
                                }
                            }
                        ]}
                    />
                </Tabs.Content>
                <Tabs.Content value="couser-details" className="px-2">
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

