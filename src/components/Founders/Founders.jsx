import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
export default function Founders() {
  return (
    <div id="founders" style={{height:"800px",padding:"70px 0px",backgroundColor:"#444942"}}>
        <p style={{textAlign:"center",fontSize:"40px",marginBottom:"70px",color:"#db1111"}}>Founders</p>
      <Container>
        <Row>
          <Col xs={6}>
            <Card className="m-auto" style={{ width: "18rem" ,border:"0px"}}>
              <Card.Img variant="top" src="/src/assets/Images/Hussien-Ibrahim.jpg" alt="Hussien Ibrahim Photo"/>
              <Card.Body style={{height:"170px"}}>
                <Card.Title>Hussien Ibrahim</Card.Title>
                <Card.Text>
                Software Engineer 2 at Microsoft with strong background in competitive programming and problem solving
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="https://www.linkedin.com/in/hussienibrahiem/">Linkedin</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <Card className="m-auto" style={{ width: "18rem" ,border:"0px"}}>
              <Card.Img variant="top" src="/src/assets/Images/Ayman-Morsy.jpg" alt="Ayman Morsy Photo"/>
              <Card.Body style={{height:"170px"}}>
                <Card.Title>Ayman Morsy</Card.Title>
                <Card.Text>
                Software Development Engineer II at Amazon with strong background in competitive programming and problem solving
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="https://www.linkedin.com/in/aymmorsy/">Linkedin</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
