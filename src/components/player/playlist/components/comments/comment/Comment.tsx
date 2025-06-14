import Image from "next/image";
import { MdArrowDropDown, MdThumbUp } from "react-icons/md";

interface ICommentProps {

}

export const Comment = ({ }: ICommentProps) => {
    return (
        <div className="flex gap-2 items-start">
            <Image alt="Imagem de perfil" src={'https://marketplace.canva.com/EAFvwOp_LqM/1/0/1600w/canva-foto-de-perfil-para-linkedin-redondo-simples-degrad%C3%AA-preto-e-azul-escuro-frpVriKbKbM.jpg'}
                width={40}
                height={40}
                className="rounded-full border border-primary"
            />

            <div className="bg-paper flex flex-1 p-2 gap-4 flex-col rounded">
                <div className="flex gap-2 items-center">
                    <span className="font-bold">User name</span>
                    <span className="font-extrabold text-xs opacity-50">date--</span>

                </div>
                <div className="py-2">comments</div>

                <div className="flex gap-4">
                    <div className="flex gap-1 items-center">
                        <MdThumbUp />
                        <span>5</span>
                    </div>
                    <button className="flex gap-1 items-center">
                        <span>Ver respostas (5)</span>
                        <MdArrowDropDown size={24} className="text-primary" />
                    </button>
                </div>
            </div>
        </div>
    );
};
