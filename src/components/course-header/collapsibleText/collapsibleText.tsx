'use client';

import { ReactNode, useState } from "react";

interface ICollapsibleText {
    children: ReactNode
    numberOfLines: number
}

export const CollapsibleText = ({ children, numberOfLines }: ICollapsibleText) => {

    const [openText, setOpenText] = useState(false);

    return (
        <>
            <p data-open={openText} className="data-[open=false]:line-clamp-3">
                {children}
            </p>

            <button
                data-open={openText}
                onClick={() => setOpenText(!openText)}
                className="hover:bg-primary max-w-fit px-2 bg-paper rounded border border-primary">
                {openText ? 'Ver menos' : 'Ver mais'}
            </button>
        </>
    );
};