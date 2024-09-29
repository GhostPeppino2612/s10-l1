import { Placeholder } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = (props) => {
  return (
    <>
      {props.loading && (
        <>
          <div className="m-2">
            <Placeholder xs={6} />
            <Placeholder className="w-75" /> <Placeholder style={{ width: "25%" }} />
            <Placeholder xs={6} />
            <Placeholder className="w-75" /> <Placeholder style={{ width: "25%" }} />
            <Placeholder xs={6} />
            <Placeholder className="w-75" /> <Placeholder style={{ width: "25%" }} />
          </div>
        </>
      )}
      {!props.loading && props.allComments.length === 0 && (
        <p className="text-center p-2 fst-italic">Nessun commento disponibile.</p>
      )}
      {!props.loading && props.allComments.length > 0 && (
        <p className="text-center p-2 fw-bold">Commenti:</p>
      )}
      {!props.loading &&
        props.allComments.map((comment) => {
          return (
            <SingleComment
              key={comment._id}
              comment={comment}
              allComments={props.allComments}
            />
          );
        })}
    </>
  );
};

export default CommentList;
