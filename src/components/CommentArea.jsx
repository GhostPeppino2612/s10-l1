import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  addNewComment = (newComment) => {
    this.setState((prevState) => ({
      comments: [...prevState.comments, newComment], // Aggiungi il nuovo commento allo stato
    }));
  };

  handleFetch = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.cardId,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY2YzBhODc5YzQ1ZjAwMTU2OWI3MTQiLCJpYXQiOjE3Mjc0NDcyMDgsImV4cCI6MTcyODY1NjgwOH0.SXPa0NJXnxi6-ioBR0jVPDYo_gw5KDL4WWg2pmPtPkg",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
        console.log(data);
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.handleFetch();
  }

  render() {
    return (
      <>
        <CommentList allComments={this.state.comments} loading={this.state.isLoading} />
        <AddComment id={this.props.cardId} onNewComment={this.addNewComment} />
      </>
    );
  }
}

export default CommentArea;
