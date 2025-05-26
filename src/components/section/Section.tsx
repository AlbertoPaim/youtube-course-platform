import { Card } from "../cards/Card";

interface ISectionProps {
    title: string
    variant: 'grid' | 'h-list'
}

export const Section = ({ title, variant = 'grid' }: ISectionProps) => {
    return (
        <section className="flex flex-col gap-4 px-4">
            <h2 className="font-bold text-xl">{title}</h2>

            <ul data-variant={variant} className="gap-2 grid grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto">
                <li data-variant={variant} className="w-full data-[variant=h-list]sm:w-72">
                    <Card description="Descrição" title="Titulo" href="/cursos/123" image="https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg" />
                </li>
                <li data-variant={variant} className="w-full data-[variant=h-list]sm:w-72">
                    <Card description="Descrição" title="Titulo" href="/cursos/123" image="https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg" />
                </li>
                <li data-variant={variant} className="w-full data-[variant=h-list]sm:w-72">
                    <Card description="Descrição" title="Titulo" href="/cursos/123" image="https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg" />
                </li>

                <li data-variant={variant} className="w-full data-[variant=h-list]sm:w-72">
                    <Card description="Descrição" title="Titulo" href="/cursos/123" image="https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg" />
                </li>
                <li data-variant={variant} className="w-full data-[variant=h-list]sm:w-72">
                    <Card description="Descrição" title="Titulo" href="/cursos/123" image="https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg" />
                </li>
            </ul>
        </section>
    );
};