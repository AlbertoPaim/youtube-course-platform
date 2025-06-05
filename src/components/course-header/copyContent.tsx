'use client';

import React, { useEffect, useState } from "react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { MdContentCopy, MdContentPaste } from "react-icons/md";

interface IcontentProps {
    title: string;
    content: string;
    children: React.ReactNode;
}

export const CopyContent = ({ title, content, children }: IcontentProps) => {

    const [clipboard, setClipboard] = useState(false);

    useEffect(() => {
        if (clipboard) {
            setTimeout(() => { setClipboard(false); }, 2000);
        }
    }, [clipboard]);

    const handleCopy = () => {
        window.navigator.clipboard.writeText(content);
        setClipboard(true);
    };

    return (
        <DropdownMenu.Root >
            <DropdownMenu.Trigger>
                {children}
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="mt-1 flex flex-col items-center gap-2 bg-paper p-2 rounded border border-primary">
                    <span>{title}</span>
                    <div className="flex gap-2">
                        <input autoFocus onFocus={e => e.target.select()} readOnly className="text-black font-medium px-2 rounded outline-primary" type="text" defaultValue={content} />
                        <button onClick={handleCopy}> {clipboard ? <MdContentPaste color="green" size={24} /> : <MdContentCopy size={24} color="white" />}</button>
                    </div>

                </DropdownMenu.Content>
            </DropdownMenu.Portal>


        </DropdownMenu.Root >
    );
};