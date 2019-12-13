import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import CommentsContainer from "./components/CommentsContainer";

export default class App extends Component {
    state = {
        inputValue: "",
        commentsArray: []
    };

    onInputOnChange = e => {
        this.setState({
            inputValue: e.target.value
        });
    };

    deleteComment = commentIndex => {
        let deletecommentsArray = [...this.state.commentsArray];
        deletecommentsArray.splice(commentIndex, 1);
        this.setState({
            commentsArray: deletecommentsArray
        });
    };

    likeComment = commentIndex => {
        let likedCommentsArray = [...this.state.commentsArray];

        let comment = likedCommentsArray[commentIndex];
        if (comment.like === 0) {
            comment.like = 1;
            comment.disLike = 0;
        } else {
            comment.like = 0;
        }

        this.setState({
            commentsArray: likedCommentsArray
        });
    };

    disLikeComment = commentIndex => {
        let disLikedCommentsArray = [...this.state.commentsArray];
        let comment = disLikedCommentsArray[commentIndex];
        if (comment.disLike === 0) {
            comment.disLike = 1;
            comment.like = 0;
        } else {
            comment.disLike = 0;
        }

        this.setState({
            commentsArray: disLikedCommentsArray
        });
    };

    onSubmit = e => {
        e.preventDefault();
        let newcommentsArray = [...this.state.commentsArray];
        let comment = {
            text: this.state.inputValue,
            like: 0,
            dislike: 0
        };

        if (this.state.inputValue !== "") {
            newcommentsArray.push(comment);
        }

        this.setState({
            commentsArray: newcommentsArray
        });
    };

    render() {
        return (
            <div className="App">
                <Form
                    onSubmit={this.onSubmit}
                    onInputOnChange={this.onInputOnChange}
                    inputValue={this.onInputOnChange}
                />
                <CommentsContainer
                    commentsArray={this.state.commentsArray}
                    deleteComment={this.deleteComment}
                    likeComment={this.likeComment}
                    disLikeComment={this.disLikeComment}
                />
            </div>
        );
    }
}
