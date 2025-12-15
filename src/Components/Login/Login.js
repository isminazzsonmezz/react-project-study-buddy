import React, { useState } from "react";
import alertify from "alertifyjs";
import {
  Form,
  FormGroup,
  Button,
  Label,
  Input,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

import { login } from "./auth";
import { useNavigate } from "react-router-dom";

function LoginPage({onLogin}){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(username, password);
    if (success) {
      navigate("/home");
    } else {
      setError("Username or password is incorrect!");
      alertify.set('notifier','position', 'top-center');
      alertify.error("Username or password is incorrect!!!");
    }
  };

    return(
        <div>
        {/*
            - style={{ margin: "0 auto" }} ile klasik CSS ortalama da kullanabilir.
            - vh-100, 100vh, h-100 gibi sınıflar sayfa yüksekliğini ayarlamak için.
            - Mobil uyum için Bootstrap grid tercih edebilir.
        
        */}
        {/* 

            - d-flex: div'i flex container yapar.
            - justify-content-center: yatay ortalama
            - align-items-center: dikey ortalama
            - vh-100: div yüksekliğini ekranın tamamı (100% height) yapar.
        */}
        <Container className="d-flex justify-content-center align-items-center vh-100">
          <Row className="w-100 justify-content-center">
            <Col md="6" lg="4">
              <Card>
                <CardBody>
                    {/* 
                        - fw-bold = kalın yazı
                        - text-primary = mavi renk
                        - text-center = ortala 
                    */}
                    <CardTitle tag="h5"  className="text-center fw-bold text-primary">
                        User Login
                    </CardTitle>
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="e-mail"
                        type="email"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password"
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                    </FormGroup>
                    {/*
                        - color="primary"	Reactstrap’in kısa yolu; btn btn-primary sınıflarını ekler.
                        - d-block	Butonu block‑level yapar (tüm satırı kaplar).
                        - mx-auto	Sağ‑sol margin’i auto yaparak yatayda ortalar.
                    */}
                    {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
                    <Button type="submit" color="primary" className="d-block mx-auto">
                      Submit
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>  
    )
}
export default LoginPage;
