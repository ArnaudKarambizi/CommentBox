import React from "react";

export default function Comment(props) {
    const { deleteComment, likeComment, disLikeComment } = props;
    const { like, disLike, text } = props.comment;
    return (
        <div className="comment">
            <p>{text}</p>
            <div className="buttons">
                <button onClick={() => deleteComment(props.commentIndex)}>
                    delete
                </button>
                <button onClick={() => likeComment(props.commentIndex)}>
                    {like === 0 ? `like` : `${like} liked`}
                </button>
                <button onClick={() => disLikeComment(props.commentIndex)}>
                    {disLike === 0 ? "dislike" : `${disLike} disliked `}
                </button>
            </div>
        </div>
    );
}
