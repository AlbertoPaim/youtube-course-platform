'use client';

import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";
import { useInView } from "react-intersection-observer";

interface ICouseStartProps {
    idCourse: string;
    idClass: string;
    imageUrl: string;
}

export const StartCourse = ({ idClass, idCourse, imageUrl }: ICouseStartProps) => {

    const [ref, inView] = useInView({ threshold: [0.17] });

    return (
        <>
            <div ref={ref} className="bg-paper p-3 rounded-md flex flex-col gap-4 md:sticky md:top-16">
                <Link href={`/player/${idCourse}/${idClass}`}
                    style={{ backgroundImage: `url(${imageUrl})` }}
                    className="w-full bg-cover bg-no-repeat aspect-video bg-center rounded-3xl md:rounded-sm hover:no-underline">

                    <div className="w-full h-full flex items-center justify-center bg-black opacity-0 hover:opacity-50 transition-opacity  rounded-3xl md:rounded-sm">
                        <MdPlayCircleOutline
                            size={60} />
                    </div>
                </Link>

                <Link href={`/player/${idCourse}/${idClass}`}
                    className="bg-primary px-2 rounded-md text-center hover:no-underline py-1 text-lg font-semibold hover:opacity-80">
                    Começar curso
                </Link>
            </div>

            {
                !inView && (
                    <div className="bg-paper p-3 px-2 rounded-md flex flex-col gap-4 absolute left-0 right-0 top-14 ">
                        <h1 className="font-extrabold text-xl">Title</h1>
                        <Link href={`/player/${idCourse}/${idClass}`}
                            className="bg-primary px-2 rounded-md text-center hover:no-underline py-1 text-lg font-semibold hover:opacity-80">
                            Começar curso
                        </Link>
                    </div>
                )
            }
        </>
    );
};