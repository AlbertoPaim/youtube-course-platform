import { CourseHeader } from "@/components/course-header/CourseHeader";
import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title: params.id
    };
};

interface Props {
    params: { id: string }
}

export default function CourseDetail({ params }: Props) {
    return (
        <main className="mt-8 flex justify-center">
            <div className="w-full min-[880px]:max-w-[880px]">
                <CourseHeader />
            </div>
        </main>
    );
}

