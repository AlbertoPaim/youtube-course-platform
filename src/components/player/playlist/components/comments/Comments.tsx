import { Comment } from "./comment/Comment";

// interface ICommentsProps {
//     //
// }

export const Comments = ({ }) => {
    return (
        <div className="flex flex-col gap-2">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    );
};
