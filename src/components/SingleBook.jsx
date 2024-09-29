import { Component } from "react";
import { Card, Col, ListGroup } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  render() {
    return (
      <>
        <Col>
          <Card
            border={this.props.isSelected ? "danger" : "border"}
            onClick={this.props.onBookSelect}
            className="mb-4"
            style={{ width: "18rem" }}
          >
            <Card.Img variant="top" src={this.props.element.img} />
            <Card.Body>
              <Card.Title>{this.props.element.title}</Card.Title>
              <Card.Text>
                Categoria:
                {this.props.element.category}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Prezzo: {this.props.element.price}$</ListGroup.Item>
            </ListGroup>
            <ListGroup className="list-group-flush">
              {this.props.isSelected && <CommentArea cardId={this.props.element.asin} />}
            </ListGroup>
          </Card>
        </Col>
      </>
    );
  }
}

export default SingleBook;
