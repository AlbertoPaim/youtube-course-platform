import { PlayerHeader } from "@/components/player/PlayerHeader";

interface Props {
    params: {
        courseId: string;
        classId: string;
    }
}

export default function Player({ params: { courseId, classId } }: Props) {
    return (
        <>
            <PlayerHeader title="Titulo aaaaaaaaaaasdasdaaaaaaaaaasdasaaaaaaaaadasasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" subtitle="Subtitulo" />
            {courseId} {classId}</>
    );
};