import { CourseHeader } from "@/components/course-header/CourseHeader";
import { CourseContent } from "@/components/couse-content/CouseContent";
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
        <main className="mt-20 flex justify-center">
            <div className="w-full min-[880px]:max-w-[880px] px-2 flex flex-col gap-4 md:flex-row-reverse">

                <div className="flex-1">
                    <StartCourse
                        idClass=""
                        idCourse=""
                        imageUrl="https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg"
                    />
                </div>

                <div className="flex-[2] flex flex-col gap-12">
                    <CourseHeader
                        numberOfclasses={45}
                        title="Titulo"
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
                    />
                    <CourseContent
                        classGroups={[{
                            courseID: '1',
                            title: 'Introdução',
                            classes:
                                [
                                    { id: '1', title: 'next.js, tailwindCSS ..... 01' },
                                    { id: '2', title: 'next.js, tailwindCSS ..... 02' }
                                ]
                        },
                        {
                            courseID: '2',
                            title: 'Desenvolvimento',
                            classes:
                                [
                                    { id: '1', title: 'next.js, tailwindCSS ..... 01' },
                                    { id: '2', title: 'next.js, tailwindCSS ..... 02' }
                                ]
                        }]}
                    />


                </div>
            </div>
        </main>
    );
}

