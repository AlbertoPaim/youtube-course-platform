import Image from "next/image";
import Link from "next/link";

export interface IcardProps {
    href: string;
    image: string;
    title: string;
    description: string;
}

export const Card = ({ href, image, title, description }: IcardProps) => {
    return (
        <Link href={href} className="hover:no-underline ">
            <article className=" mb-4 rounded-md flex gap-4 flex-col p-2 sm:w-72 sm:hover:bg-primary items-center">
                <Image className=" aspect-video object-cover rounded-lg" src={image} alt="" width={1000} height={0} draggable={false} />

                <h4 className=" font-black text-lg">{title}</h4>
                <p className="line-clamp-3">{description}</p>
            </article>
        </Link>

    );
};