import { Section } from "@/components/section/Section";

export default function PageHome() {
  return (
    <main className="mt-8 flex justify-center">
      <div className="min-[880px]:max-w-[880px] sm:flex-none">
        <Section variant="h-list" title="Veja mais cursos" />
      </div>

    </main>
  );
}