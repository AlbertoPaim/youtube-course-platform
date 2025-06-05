import Link from "next/link";
import { MdPlayCircle } from "react-icons/md";

export const KeepWatch = () => {
    return (<Link className="p-4 flex gap-4 items-center justify-between bg-primary rounded-md hover:no-underline hover:opacity-80" href={'/player/{courseId}/{classId}'}>
        <div>
            <h1 className="font-bold line-clamp-1">Titulo</h1>
            <p className="line-clamp-1">Nome do video</p>
        </div>

        <div className="flex items-center gap-2">
            <span className="hidden md:block">Continuar Assistindo</span>
            <MdPlayCircle size={24} />
        </div>

    </Link>);
};