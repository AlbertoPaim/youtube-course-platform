import { Section } from "@/components/section/Section";
import { apiYoutube } from "@/shared/services/api-youtube";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Your Curse - Cursos"
};



export default async function PageCursos() {

    const courses = await apiYoutube.course.getAll();

    return (
        <main className="mt-8 flex justify-center ">
            <div className="min-[880px]:max-w-[880px]">
                <Section variant='grid' title="Todos os cursos"

                    items={courses.map(course => ({
                        title: course.title,
                        image: course.image,
                        href: `/course.${course.id}`,
                        description: course.description,
                    }))}
                />

            </div>
        </main>
    );
}
