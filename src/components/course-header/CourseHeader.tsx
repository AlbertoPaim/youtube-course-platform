import { MdShare } from "react-icons/md";

export const CourseHeader = () => {
    return (
        <div className="gap-4 flex-col flex">
            <h1 className="font-extrabold text-xl">Title</h1>
            <p>Description</p>

            <div className="flex gap-2 items-center">
                <button className=" rounded-md bg-primary px-4 py-2 flex justify-center items-center gap-1"><MdShare /> Compartilhar</button>
                <span className="">42 aulas</span>
            </div>
        </div>
    );
};