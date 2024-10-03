import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AboutUs() {
  return (
    <>
      <Container className="m-5 p-5">
        <Row>
          <Col xs={8} className="m-auto fs-5">
            <p style={{fontSize:"40px"}}>
            The International Collegiate Programming Contest &ldquo;ICPC&rdquo;
            </p> 
            is an algorithmic
            programming contest for college students. Teams of three,
            representing their university, work to solve the most real-world
            problems, fostering collaboration, creativity, innovation, and the
            ability to perform under pressure. Through training and competition,
            teams challenge each other to raise the bar on the possible. Quite
            simply, it is the oldest, largest, and most prestigious programming
            contest in the world.
          </Col>
          <Col xs={4}>
            <img
              src="/src/assets/Images/ICPC-Original-Logo.png"
              style={{ height: "350px"}}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
