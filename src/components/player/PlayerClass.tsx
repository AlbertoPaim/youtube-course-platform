import { MdCheckCircle, MdCircle, MdPlayCircleOutline } from "react-icons/md";

export interface PlayerClassProps {
    done: boolean;
    playing: boolean;
    title: string;
    onPlay: () => void;
    onCheck: () => void;
}

const PlayerClass = ({ done, playing, title, onCheck, onPlay }: PlayerClassProps) => {
    return (

        <button className="gap-4 p-4 flex items-center" onClick={() => onPlay()}>

            {!done && (
                <div className="group" onClick={e => { e.stopPropagation(); onCheck(); }}>
                    <MdPlayCircleOutline size={24} className="min-w-6 group-hover:hidden" />
                    <MdCircle size={24} className="hidden min-w-6 group-hover:block cursor-pointer" />
                </div>
            )}
            {done && (
                <MdCheckCircle size={24} color="green" className="min-w-6" />
            )}

            <div className="flex flex-col gap-2">
                <h1 data-done={done} className="line-clamp-1 data-[done=true]:text-green-700 text-start">{title}</h1>

                {playing && (
                    <h2 className="bg-primary px-2 rounded-full">reproduzindo</h2>
                )}

            </div>
        </button>
    );
};

export default PlayerClass;