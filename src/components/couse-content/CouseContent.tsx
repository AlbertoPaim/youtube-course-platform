import { ClassGroup, IclassGroupProps } from "./ClassGroup";

interface IcourseContentProps {
    classGroups: IclassGroupProps[];
}

export const CourseContent = ({ classGroups }: IcourseContentProps) => {
    return (
        <div className="flex flex-col gap-1">
            <h2 className="font-extrabold text-lg">Introdução do curso</h2>

            <ol className="flex flex-col gap-1">
                {classGroups.map(classGroupItem => (
                    <li key={classGroupItem.title} className="flex flex-col">
                        <ClassGroup  {...classGroupItem} />
                    </li>
                ))}
            </ol>


        </div>
    );
};