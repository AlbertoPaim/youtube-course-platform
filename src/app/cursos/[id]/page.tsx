import { CourseHeader } from "@/components/course-header/CourseHeader";
import { StartCourse } from "@/components/StartCourse";
import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title: params.id
    };
};

interface Props {
    params: { id: string }
}

export default function CourseDetail({ }: Props) {
    return (
        <main className="mt-2 flex justify-center">
            <div className="w-full min-[880px]:max-w-[880px] px-2 flex flex-col gap-4">
                <StartCourse
                    idClass=""
                    idCourse=""
                    imageUrl="https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg"
                />
                <CourseHeader />
            </div>
        </main>
    );
}

