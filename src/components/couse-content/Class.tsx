import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";

interface IclassProps {
    title: string;
    videoUrl: string;
}

export const Class = ({ title, videoUrl }: IclassProps) => {
    return (
        <main>

            <Link href={videoUrl} className="flex gap-4 p-4 items-center hover:no-underline">
                <MdPlayCircleOutline size={24} />
                {title}
            </Link>
        </main>
    );
};