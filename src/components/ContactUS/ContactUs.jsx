import Form from 'react-bootstrap/Form';
export default function ContactUs() {
  return (
    <div id="contactus" style={{height:"590px",padding:"70px 500px",backgroundColor:"#168116"}}>
        <p style={{textAlign:"center",fontSize:"40px",marginBottom:"60px",color:"#dfdfdf"}}>Contact Us</p>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label style={{color:"#dfdfdf"}}>Email address</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{color:"#dfdfdf"}}>Message</Form.Label>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>
      </Form>
    </div>
  );
}
