import PlayerClass from "@/components/player/PlayerClass";
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
            <PlayerHeader title="Titulo aaaaaaaaaaasdas daaaaaaaaaasdasaa aaaaaaadasasdasdaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa" subtitle="Subtitulo" />
            {courseId} {classId}
            <PlayerClass
                title={classId}
                done={false}
                playing={true}

                onCheck={() => console.log('check')}
                onPlay={() => console.log('play')}
            />
        </>
    );
};