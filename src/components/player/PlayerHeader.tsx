import Link from "next/link";
import { MdHome } from "react-icons/md";

interface Props {
    title: string;
    subtitle: string;
};

export const PlayerHeader = ({ title, subtitle }: Props) => {
    return (<>
        <div className="flex items-center gap-4 px-4 py-2 bg-paper">

            <Link href={'/'}>
                <MdHome size={28} />
            </Link>

            <div>
                <h1 className="text-lg font-bold line-clamp-1">{title}</h1>
                <h2 className="">{subtitle}</h2>
            </div>
        </div>
    </>);
};