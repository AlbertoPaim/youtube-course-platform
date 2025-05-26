import { Section } from "@/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Your Curse - Cursos",
};

export default function PageCursos() {
    return (
        <main>
            <Section variant='grid' title="Todos os cursos" />
        </main>
    );
}