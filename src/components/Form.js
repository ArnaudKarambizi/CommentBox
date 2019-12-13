import React from "react";

export default function Form(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input
                type="text"
                placeholder="add comment"
                onChange={props.onInputOnChange}
            />
            <button onClick={props.onSubmit}>comment</button>
        </form>
    );
}
