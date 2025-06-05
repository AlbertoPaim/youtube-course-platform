interface Props {
    params: {
        courseId: string;
        classId: string;
    }
}

export default function Player({ params: { courseId, classId } }: Props) {
    return (
        <> teste {courseId} {classId}</>
    );
};