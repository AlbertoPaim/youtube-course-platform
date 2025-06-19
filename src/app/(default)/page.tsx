import { KeepWatch } from "@/components/KeepWatch";
import { Section } from "@/components/section/Section";
import { apiYoutube } from "@/shared/services/api-youtube";

export default async function PageHome() {

  const courses = await apiYoutube.course.getAll();

  return (
    <main className="mt-20 flex justify-center ">

      <div className="sm:max-w-[600px] md:max-w-[700px] lg:md:max-w-[880px] sm:max-h-28 flex flex-col gap-4 px-2">
        <KeepWatch />

        <Section
          variant="h-list"
          title="Veja mais cursos"

          items={courses.map(course => ({
            title: course.title,
            image: course.image,
            href: `/course/${course.id}`,
            description: course.description,
          }))


          }
        />
      </div>

    </main>
  );
}