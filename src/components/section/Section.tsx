'use client';

import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { Card, IcardProps } from "../cards/Card";
import { UIEvent, useRef, useState } from "react";

interface ISectionProps {
    title: string;
    variant: 'grid' | 'h-list';
    items: IcardProps[];
}

export const Section = ({ items, title, variant = 'grid' }: ISectionProps) => {

    const scrollRef = useRef<HTMLUListElement>(null);

    const handleScroll = (scroll: number) => {
        const currentScrollLeft = scrollRef.current?.scrollLeft || 0;
        scrollRef.current?.scrollTo({ behavior: 'smooth', left: currentScrollLeft + scroll });
    };

    const [scrollAt, setScrollAt] = useState<'start' | 'middle' | 'end'>('start');

    const scrollListerner = (event: UIEvent<HTMLUListElement>) => {
        const scroll = event.currentTarget;

        if (event.currentTarget.scrollLeft === 0) {
            setScrollAt('start');
        } else if (scroll.scrollLeft + scroll.clientWidth === scroll.scrollWidth) {
            setScrollAt('end');
        } else {
            setScrollAt('middle');
        }
    };


    return (
        <section className="flex flex-col gap-4">
            <h2 className="font-bold text-xl">{title}</h2>


            <ul onScroll={scrollListerner} ref={scrollRef} data-variant={variant} className="gap-2 grid grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto">

                {variant === 'h-list' && (
                    <button
                        data-variant={variant}
                        disabled={scrollAt === 'start'}
                        onClick={() => { handleScroll(-350); }}
                        className="h-14 w-14 bg-primary rounded-full flex items-center justify-center sticky left-0 my-auto -ml-14 disabled:opacity-0 transition-opacity data-[variant=grid]:hidden active:opacity-80 ">
                        <MdArrowLeft size={30}></MdArrowLeft>
                    </button>
                )}

                {
                    items.map(item => (
                        <li key={item.title} data-variant={variant} className="w-full data-[variant=h-list]sm:w-72">
                            <Card description={item.description} title={item.title} href={item.href} image={item.image} />
                        </li>
                    ))
                }

                {variant === 'h-list' && (

                    <button
                        disabled={scrollAt === 'end'}
                        onClick={() => { handleScroll(350); }}
                        className="h-14 w-14 bg-primary rounded-full flex items-center justify-center  sticky right-0 my-auto -ml-14 disabled:opacity-0 transition-opacity active:opacity-80">
                        <MdArrowRight size={30}></MdArrowRight>
                    </button>
                )}

            </ul>
        </section>


    );
};