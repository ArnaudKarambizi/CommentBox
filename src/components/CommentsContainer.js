import React from "react";
import Comment from "./Comment";

export default function CommentsContainer(props) {
    const { commentsArray, deleteComment, likeComment, disLikeComment } = props;
    return (
        <div>
            {commentsArray.map((comment, index) => {
                return (
                    <Comment
                        comment={comment}
                        commentIndex={index}
                        deleteComment={deleteComment}
                        likeComment={likeComment}
                        disLikeComment={disLikeComment}
                        key={index}
                    />
                );
            })}
        </div>
    );
}
