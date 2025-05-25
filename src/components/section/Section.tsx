import { Card } from "../cards/Card";

export const Section = () => {
    return (
        <section className="flex flex-col gap-4 px-4">
            <h2 className="font-bold text-xl">Todos os cursos</h2>

            <ul className="gap-4">
                <li>
                    <Card description="Descrição" title="Titulo" href="/cursos/123" image="https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg" />
                </li>
                <li>
                    <Card description="Descrição" title="Titulo" href="/cursos/123" image="https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg" />
                </li>
                <li>
                    <Card description="Descrição" title="Titulo" href="/cursos/123" image="https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg" />
                </li>
            </ul>
        </section>
    );
};