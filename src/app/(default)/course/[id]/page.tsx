
import { CourseContent } from "@/components/couse-content/CouseContent";
import { CourseHeader } from "@/components/helper/HeaderClientHelper";
import { StartCourse } from "@/components/StartCourse";
import { apiYoutube } from "@/shared/services/api-youtube";
import { Metadata } from "next";


interface Props {
    params: { id: string }
}

export async function generateStaticParams(): Promise<Props['params'][]> {
    const courses = await apiYoutube.course.getAll();
    return courses.map(course => ({ id: course.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const courseDetail = await apiYoutube.course.getById(params.id);

    return {
        title: courseDetail.title,
        description: courseDetail.description,
        openGraph: {
            locale: 'pt_BR',
            type: 'video.other',
            title: courseDetail.title,
            images: courseDetail.image,
            description: courseDetail.description
        }
    };
};

export default async function CourseDetail({ params }: Props) {

    const courseDetail = await apiYoutube.course.getById(params.id);

    const firstClass = courseDetail.classGroups.at(0)?.classes.at(0);


    return (
        <main className="mt-20 flex justify-center">
            <div className="w-full min-[880px]:max-w-[880px] px-2 flex flex-col gap-4 md:flex-row-reverse">

                {firstClass && (
                    <div className="flex-1">
                        <StartCourse
                            idClass={firstClass?.id}
                            idCourse={courseDetail.id}
                            imageUrl={courseDetail.image}
                        />
                    </div>
                )}

                <div className="flex-[2] flex flex-col gap-12">
                    <CourseHeader
                        title={courseDetail.title}
                        description={courseDetail.description}
                        numberOfclasses={courseDetail.numberOfClasses}
                    />
                    <CourseContent
                        classGroups={courseDetail.classGroups}
                    />
                </div>
            </div>
        </main>
    );
}

