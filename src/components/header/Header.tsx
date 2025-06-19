'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu, MdOpenInNew } from "react-icons/md";

export const Header = () => {

    const currentPath = usePathname();
    const [tittle, setTittle] = useState('Your Curse');
    const [drawer, setDrawer] = useState(false);

    useEffect(() => {
        setTittle(document.title);
        setDrawer(false);
    }, [currentPath]);

    useEffect(() => {

        const handle = (e: KeyboardEvent) => {
            if (e.key == "Escape") {
                setDrawer(false);
            }
        };

        window.addEventListener('keydown', handle);
        return () => window.removeEventListener('keydown', handle);

    }, []);

    return (
        <>
            <nav className="fixed top-0 right-0 left-0 px-6 gap-6 flex items-center  justify-start md:justify-center bg-primary py-4 h-14">

                <button className="sm:hidden" onClick={() => { setDrawer(true); }}>
                    <MdMenu size={24}> </MdMenu>
                </button>

                <ul className="gap-4 flex items-center">


                    <li className="">
                        <span className="hidden sm:block sm:border sm:rounded-md px-2 py-2 bg-red font-black">Your Curso</span>
                    </li>

                    <li>
                        <Link href="/" data-active={currentPath == '/'} className="data-[active=true]:underline hidden sm:block">
                            Página inicial
                        </Link>
                    </li>

                    <li>
                        <Link href="/course" data-active={currentPath == '/course'} className="data-[active=true]:underline hidden sm:block">
                            Cursos
                        </Link>
                    </li>

                    <li className="hidden sm:block">
                        <Link href="/" target="_blank" className="flex gap-1 items-center">
                            Blog
                            <MdOpenInNew></MdOpenInNew>
                        </Link>
                    </li>
                </ul>

                <div onClick={() => { setDrawer(false); }} data-active={drawer} className="sm:hidden transition-transform data-[active=false]:-translate-x-full  fixed top-0 left-0 bottom-0 display-none right-0 bg-gradient-to-r from-black" data->
                    <ul onClick={e => { e.stopPropagation(); }} className="flex-col p-4 bg-background border-l-gray-800 w-60 border-r fixed h-full">

                        <li className="pb-4">
                            <Link href="/" data-active={currentPath == '/'} className="data-[active=true]:underline ">
                                Página inicial
                            </Link>
                        </li>

                        <li className="pb-4">
                            <Link href="/course" data-active={currentPath == '/course'} className="data-[active=true]:underline ">
                                Cursos
                            </Link>
                        </li>

                        <li className="pb-2">
                            <Link href="/" target="_blank" className="flex gap-1 items-center">
                                Blog
                                <MdOpenInNew></MdOpenInNew>
                            </Link>
                        </li>
                    </ul>
                </div>


                <h1 className="sm:hidden">{tittle}</h1>
            </nav >
            <div className="h-16"></div>
        </>

    );
};