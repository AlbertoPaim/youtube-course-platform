import { format, parseISO } from "date-fns";
import Image from "next/image";
import { useMemo, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { MdArrowDropDown, MdThumbUp } from "react-icons/md";

export interface ICommentProps {
    content: string;
    likesCounts: number;
    publishDate: string;

    author: {
        image: string;
        userName: string;
    }

    replies?: ICommentProps[];
}

export const Comment = ({ author, content, likesCounts, publishDate, replies }: ICommentProps) => {
    const [showreplies, setShowReplies] = useState(false);

    const date = useMemo(() => {
        try {
            const dateAsDate = parseISO(publishDate);
            if (isNaN(dateAsDate.getTime())) throw new Error('Data inválida');
            return format(dateAsDate, "dd/MM/yyyy 'às' HH:mm");
        } catch {
            return 'Data inválida';
        }
    }, [publishDate]);

    return (
        <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-start">
                <Image alt="Imagem de perfil" src={author.image}
                    width={40}
                    height={40}
                    className="rounded-full border border-primary"
                />

                <div className="bg-paper flex flex-1 p-2 gap-4 flex-col rounded">
                    <div className="flex gap-2 items-center">
                        <span className="font-bold">{author.userName}</span>
                        <span className="font-extrabold text-xs opacity-50">{date}</span>

                    </div>
                    <div className="py-2">{content}</div>

                    <div className="flex gap-4">
                        <div className="flex gap-1 items-center">
                            <MdThumbUp />
                            <span>{likesCounts}</span>
                        </div>

                        {(replies && replies.length > 0) && (
                            <button className="flex gap-1 items-center"
                                onClick={() => setShowReplies(!showreplies)}>
                                <span className="text-primary">{showreplies ? 'Ocultar' : 'Ver'}  respostas ({replies?.length})</span>
                                {showreplies ? <MdArrowDropDown size={24} className="text-primary" /> : <IoMdArrowDropright size={24} className="text-primary" />}
                            </button>)}


                    </div>
                </div>
            </div>

            <div className="pl-12 opacity-50">
                {showreplies && replies?.map(itemReply => (
                    <Comment key={itemReply.publishDate} {...itemReply} />
                ))}

            </div>
        </div>
    );
};
