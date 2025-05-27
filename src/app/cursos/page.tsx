import { Section } from "@/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Your Curse - Cursos",
};

export default function PageCursos() {
    return (
        <main className="mt-8 flex justify-center ">
            <div className="min-[880px]:max-w-[880px]">
                <Section variant='grid' title="Todos os cursos"
                    items={[{
                        href: '/cursos/123',
                        description: "descrição",
                        title: "titulo",
                        image: 'https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg'
                    },
                    {
                        href: '/cursos/123',
                        description: "descrição",
                        title: "titulo",
                        image: 'https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg'
                    },
                    {
                        href: '/cursos/123',
                        description: "descrição",
                        title: "titulo",
                        image: 'https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg'
                    }]}
                />

            </div>
        </main>
    );
}
