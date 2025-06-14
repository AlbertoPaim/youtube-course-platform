import dynamic from "next/dynamic";
import { UrlMatcher } from 'interweave-autolink';
import { useMemo } from "react";


const Interweave = dynamic(() => import('interweave').then(result => result.Interweave), { ssr: false });

interface PlayerClassHeaderProps {
    title: string;
    description: string;
}

export const PlayerClassHeader = ({ title, description }: PlayerClassHeaderProps) => {

    const urlMatcher = useMemo(() => {
        return new UrlMatcher(
            'urlMatcher',
            { validateTLD: false },
            ({ url }) => (
                <a href={url} target="_blank" className="text-primary" >
                    {url}
                </a>
            )
        );

    }, []);





    return (
        <div>
            <h3 className="font-extrabold text-xl mb-2">
                {title}
            </h3>

            <Interweave
                content={description}
                matchers={[urlMatcher]} />
        </div>
    );
};

