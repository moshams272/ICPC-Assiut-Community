import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [logoShadow, setLogoShadow] = useState(0);
  const [emailBorderWidth, setemailBorderWidth] = useState("1px");
  const [emailBoxShadowBlur, setemailBoxShadowBlur] = useState("0px");
  const [emailBoxShadowSpread, setemailBoxShadowSpread] = useState("0px");
  const [passwordBorderWidth, setpasswordBorderWidth] = useState("1px");
  const [passwordBoxShadowBlur, setpasswordBoxShadowBlur] = useState("0px");
  const [passwordBoxShadowSpread, setpasswordBoxShadowSpread] = useState("0px");
  const [logoBoxShadowBlur, setLogoBoxShadowBlur] = useState("0px");
  const [logoDescriptiontextShadow, setLogoDescriptiontextShadow] = useState("0px 0px 0px black");
  const [forgetPasswordColor, setForgetPasswordColor] = useState("#dfdfdf");
  const [signUPColor, setSignUPColor] = useState("#dfdfdf");
  useEffect(() => {
    if (logoShadow) {
      setLogoBoxShadowBlur("40px");
      setLogoDescriptiontextShadow("0px 0px 5px red");
    } else {
      setLogoBoxShadowBlur("0px");
      setLogoDescriptiontextShadow("0px 0px 0px black");
    }
  }, [logoShadow]);
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Row>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/src/assets/Images/ICPC-Logo.png"
              alt="ICPC Assiut"
              style={{
                height: "300px",
                width: "300px",
                boxShadow: `0px 0px ${logoBoxShadowBlur} red`,
                borderRadius: "50%",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/");
              }}
              onPointerEnter={() => {
                setLogoShadow(1);
              }}
              onPointerLeave={() => {
                setLogoShadow(0);
              }}
            />
            <Link
              to="/"
              style={{
                fontSize: "40px",
                color: "#dfdfdf",
                textShadow: `2px 4px 5px rgb(255,255,255,0.7), ${logoDescriptiontextShadow}`,
                textDecoration: "none",
              }}
              onPointerEnter={() => {
                setLogoShadow(1);
              }}
              onPointerLeave={() => {
                setLogoShadow(0);
              }}
            >
              ICPC Assiut Community
            </Link>
          </Col>
          <Col
            style={{
              paddingTop: "25px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                marginBottom: "35px",
                marginTop: "10px",
                fontSize: "35px",
                color: "#dfdfdf",
                textShadow: "2px 4px 5px rgb(255,255,255,0.7)",
              }}
            >
              Login
            </p>
            <Form.Floating
              className="mb-3"
              onFocus={() => {
                setemailBorderWidth("0px");
                setemailBoxShadowBlur("25px");
                setemailBoxShadowSpread("8px");
              }}
              onBlur={() => {
                setemailBorderWidth("1px");
                setemailBoxShadowBlur("0px");
                setemailBoxShadowSpread("0px");
              }}
            >
              <Form.Control
                id="floatingInputCustom"
                placeholder="Email or Codeforces' handle"
                style={{
                  boxShadow: `0px 0px ${emailBoxShadowBlur} ${emailBoxShadowSpread} red`,
                  borderWidth: emailBorderWidth,
                  width: "25vw",
                  fontSize:"18px"
                }}
              />
              <label htmlFor="floatingInputCustom">
                Email address / Codeforces' handle
              </label>
            </Form.Floating>
            <Form.Floating
              onFocus={() => {
                setpasswordBorderWidth("0px");
                setpasswordBoxShadowBlur("25px");
                setpasswordBoxShadowSpread("8px");
              }}
              onBlur={() => {
                setpasswordBorderWidth("1px");
                setpasswordBoxShadowBlur("0px");
                setpasswordBoxShadowSpread("0px");
              }}
            >
              <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
                style={{
                  boxShadow: `0px 0px ${passwordBoxShadowBlur} ${passwordBoxShadowSpread} red`,
                  borderWidth: passwordBorderWidth,
                  width: "25vw",
                  fontSize:"18px"
                }}
              />
              <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
            
              <Link
                to="/forgetPassword"
                style={{ color: forgetPasswordColor, margin:"10px 270px 10px 0px"}}
                onPointerEnter={()=>{
                    setForgetPasswordColor("rgb(255,0,0,0.9)");
                }}
                onPointerLeave={()=>{
                    setForgetPasswordColor("#dfdfdf");
                }}
              >
                Forget password
              </Link>
            <Button type="submit" variant="outline-light" style={{height:"40px",width:"80px",fontSize:"15px",marginBottom:"5px"}}>Login</Button>
            <div style={{color:"#dfdfdf"}}>
              Not a member yet?{" "} 
              <Link
                to="/signUp"
                style={{ color: signUPColor}}
                onPointerEnter={()=>{
                    setSignUPColor("rgb(255,0,0,0.9)");
                }}
                onPointerLeave={()=>{
                    setSignUPColor("#dfdfdf");
                }}
              >
                Sign up
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
