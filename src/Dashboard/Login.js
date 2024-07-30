import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from "react";
import * as Common from "../Common";


function Login() {

  const [userCredentials, setUserCredentials] = useState([]);
  
  useEffect(() => {
    Common.callApi("/api/server.php", ["fetch"], (result) => {
      const resp = JSON.parse(result); //Data Goes to server in the form of String
      //so Parsing it in the form of JSON
      setUserCredentials(resp); // setting the state
      console.log(result);
    });
  }, []);

  return (
   
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
 
  )
}

export default Login
