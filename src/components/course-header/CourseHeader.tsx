'use client';

import { MdShare } from "react-icons/md";
import { CollapsibleText } from "./collapsibleText/collapsibleText";
import { CopyContent } from "./copyContent";

interface CourseHeaderProps {
    title: string;
    description: string;
    numberOfclasses: number;
}

export const CourseHeader = ({ title, description, numberOfclasses }: CourseHeaderProps) => {
    return (
        <div className="gap-4 flex-col flex">
            <h1 className="font-extrabold text-xl">{title}</h1>
            <CollapsibleText numberOfLines={3}>
                {description}
            </CollapsibleText >

            <div className="flex gap-2 items-center">

                <CopyContent title="Copie o conteúdo abaixo" content={window.location.href}>
                    <button className=" rounded-md bg-primary px-4 py-2 flex justify-center items-center gap-1"><MdShare /> Compartilhar</button>
                </CopyContent>

                <span className="">{numberOfclasses} aulas</span>

            </div>
        </div>
    );
};