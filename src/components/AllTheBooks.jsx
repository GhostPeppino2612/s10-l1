import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import list from "../scifi.json";

function AllTheBooks() {
  return (
    <>
      <Container lg className="my-5">
        <Row lg={{ col: 4 }}>
          {list.map((e) => {
            return (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={e.img} />
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>
                      Categoria:
                      {e.category}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Prezzo: {e.price}$</ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default AllTheBooks;
