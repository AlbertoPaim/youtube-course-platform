import { Section } from "@/components/section/Section";

export default function PageHome() {
  return (
    <main className="mt-8 flex justify-center ">
      <div className="sm:max-w-[600px] md:max-w-[700px] lg:md:max-w-[880px] sm:max-h-28">
        <Section
          items={[{
            href: '/cursos/123',
            description: "descrição",
            title: "titulo1",
            image: 'https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg'
          },
          {
            href: '/cursos/123',
            description: "descrição",
            title: "titulo2",
            image: 'https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg'
          },
          {
            href: '/cursos/123',
            description: "descrição",
            title: "titulo3",
            image: 'https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg'
          },
          {
            href: '/cursos/123',
            description: "descrição",
            title: "titulo4",
            image: 'https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg'
          }]}
          variant="h-list" title="Veja mais cursos" />
      </div>

    </main>
  );
}