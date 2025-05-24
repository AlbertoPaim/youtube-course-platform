'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu, MdOpenInNew } from "react-icons/md";

export const Header = () => {
    const currentPath = usePathname();
    return (
        <nav className="px-6 gap-6 flex items-center justify-start md:justify-center bg-primary py-4">

            <button className="sm:hidden">
                <MdMenu size={24}> </MdMenu>
            </button>

            <ul className="gap-4 flex">


                <li className="">
                    <span className="size-12 border-2 rounded-md px-2 py-2 bg-red font-black">Your Curso</span>
                </li>

                <li>
                    <Link href="/" data-active={currentPath == '/'} className="data-[active=true]:underline hidden sm:block">
                        Página inicial
                    </Link>
                </li>

                <li>
                    <Link href="/cursos" data-active={currentPath == '/cursos'} className="data-[active=true]:underline hidden sm:block">
                        Cursos
                    </Link>
                </li>

                <li className="hidden sm:block">
                    <Link href="https://coinmarketcap.com/pt-br/" target="_blank" className="flex gap-1 items-center">
                        Blog
                        <MdOpenInNew></MdOpenInNew>
                    </Link>
                </li>
            </ul>

            <h1 className="sm:hidden"> Your Curso - Página inicial</h1>
        </nav>
    );
};