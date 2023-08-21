import { Button, Card, Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
        <h1>Home</h1>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="bottom" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Home;
