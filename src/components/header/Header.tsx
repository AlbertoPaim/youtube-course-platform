'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOpenInNew } from "react-icons/md";

export const Header = () => {
    const currentPath = usePathname();
    return (
        <nav className="flex items-center justify-center bg-primary py-4">
            <ul className="gap-4 flex">

                <li>
                    <Link href="/" data-active={currentPath == '/'} className="data-[active=true]:underline">
                        Página inicial
                    </Link>
                </li>

                <li>
                    <Link href="/cursos" data-active={currentPath == '/cursos'} className="data-[active=true]:underline">
                        Cursos
                    </Link>
                </li>

                <li>
                    <Link href="https://coinmarketcap.com/pt-br/" target="_blank" className="flex gap-1 items-center">
                        Blog
                        <MdOpenInNew></MdOpenInNew>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};