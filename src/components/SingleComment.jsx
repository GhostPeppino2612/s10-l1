const SingleComment = (props) => {
  return (
    <>
      <div className="p-1 text-center">
        <div>
          <strong>Autore:</strong> {props.comment.author}
        </div>
        <div>
          <strong>Commento:</strong> {props.comment.comment}
        </div>
        <div>
          <strong>Voto:</strong> {props.comment.rate}/5
        </div>
      </div>
      {props.allComments.length !== 1 && <hr />}
    </>
  );
};
export default SingleComment;
