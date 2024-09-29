import { Component } from "react";
import { Button, Container, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    email: "",
    comment: "",
    voto: "",
  };

  handleState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      author: this.state.email,
      comment: this.state.comment,
      rate: parseInt(this.state.voto),
      elementId: this.props.id,
    };
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY2YzBhODc5YzQ1ZjAwMTU2OWI3MTQiLCJpYXQiOjE3Mjc0NDcyMDgsImV4cCI6MTcyODY1NjgwOH0.SXPa0NJXnxi6-ioBR0jVPDYo_gw5KDL4WWg2pmPtPkg",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.props.onNewComment(data);

        // Resetta il form
        this.setState({
          email: "",
          comment: "",
          voto: "",
        });
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <>
        <Container className="mt-5">
          <p className="text-center fw-bold">Inserisci un commento:</p>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                name="email"
                value={this.state.email}
                onChange={this.handleState}
                type="email"
                placeholder="name@example.com"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Commento:</Form.Label>
              <Form.Control
                name="comment"
                value={this.state.comment}
                onChange={this.handleState}
                as="textarea"
                rows={3}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Voto:</Form.Label>
              <Form.Control
                name="voto"
                value={this.state.voto}
                onChange={this.handleState}
                type="number"
                min="0"
                max="5"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Button className="mx-auto d-block" type="submit">
                Crea
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </>
    );
  }
}

export default AddComment;
