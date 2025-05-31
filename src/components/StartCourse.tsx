import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";

interface ICouseStartProps {
    idCourse: string;
    idClass: string;
    imageUrl: string;
}

export const StartCourse = ({ idClass, idCourse, imageUrl }: ICouseStartProps) => {
    return (
        <div className="bg-paper p-3 rounded-md flex flex-col gap-4">
            <Link href={`/player/${idCourse}/${idClass}`}
                style={{ backgroundImage: `url(${imageUrl})` }}
                className="w-full bg-cover bg-no-repeat aspect-video bg-center rounded-3xl hover:no-underline">

                <div className="w-full h-full flex items-center justify-center bg-black opacity-0 hover:opacity-50 rounded transition-opacity  rounded-3xl ">
                    <MdPlayCircleOutline
                        size={60} />
                </div>
            </Link>

            <Link href={`/player/${idCourse}/${idClass}`}
                className="bg-primary px-2 rounded-md text-center hover:no-underline py-1 text-lg font-semibold">
                Começar curso
            </Link>
        </div>
    );
};