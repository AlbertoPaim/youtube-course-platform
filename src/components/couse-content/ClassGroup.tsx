'use client';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Class } from "./Class";
import { useState } from "react";

export interface IclassGroupProps {
  title: string;
  courseID: string;
  classes: {
    id: string;
    title: string;
  }[];
}

export const ClassGroup = ({ title, classes, courseID }: IclassGroupProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)} className="bg-paper flex gap-2 p-2 rounded-sm items-center">

        {open ? <MdKeyboardArrowUp size={24} /> : <MdKeyboardArrowDown size={24} />}
        {title}
      </button>

      <ol data-open={open} className=" data-[open=false]:hidden">
        <li></li>
        {classes.map(({ id, title }) => (
          <li key={id}>
            <Class
              title={title}
              videoUrl={`/player/${courseID}/${id}`}
            />
          </li>
        ))}
      </ol>


    </>
  );
};