import { MdArrowLeft } from "react-icons/md";
import { Card, IcardProps } from "../cards/Card";

interface ISectionProps {
    title: string;
    variant: 'grid' | 'h-list';
    items: IcardProps[];
}

export const Section = ({ items, title, variant = 'grid' }: ISectionProps) => {
    return (
        <section className="flex flex-col gap-4 px-4">
            <h2 className="font-bold text-xl">{title}</h2>

            <button className="h-14 w-14 bg-primary rounded-full flex items-center justify-center"><MdArrowLeft size={30}></MdArrowLeft> </button>

            <ul data-variant={variant} className="gap-2 grid grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto">
                {
                    items.map(item => (
                        <li key={item.title} data-variant={variant} className="w-full data-[variant=h-list]sm:w-72">
                            <Card description={item.description} title={item.title} href={item.href} image={item.image} />
                        </li>
                    ))
                }



            </ul>
        </section>
    );
};