import { MdShare } from "react-icons/md";
import { CollapsibleText } from "./collapsibleText/collapsibleText";

export const CourseHeader = () => {
    return (
        <div className="gap-4 flex-col flex">
            <h1 className="font-extrabold text-xl">Title</h1>

            <CollapsibleText numberOfLines={3}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </CollapsibleText >

            <div className="flex gap-2 items-center">
                <button className=" rounded-md bg-primary px-4 py-2 flex justify-center items-center gap-1"><MdShare /> Compartilhar</button>
                <span className="">42 aulas</span>
            </div>
        </div>
    );
};