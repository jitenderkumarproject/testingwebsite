import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from "react";
import * as Common from "../Common";
import { json } from 'react-router-dom';


function Login() {

  const [userCredentials, setUserCredentials] = useState([]);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState();
  useEffect(() => {
    Common.callApi("/api/server.php", ["fetch"], (result) => {
      const resp = JSON.parse(result); //Data Goes to server in the form of String
      //so Parsing it in the form of JSON
      setUserCredentials(resp); // setting the state
      console.log(result);
    });
  }, []);

  function CheckUserCredentials() {

    // const obj = {
    // jsonName : credname,
    // jsonPassword : credpassword
    // };
    // JSON.stringify(obj);

    // if(userName == setUserCredentials.UserName && userPassword == setUserCredentials.UserPwd)
    // {
    //   console.log('Credentials are correct');
    // }
    // else
    // {
    //   console.log(' False...!!!');
    // }

    console.log(setUserCredentials.UserName);
  }

  return (

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter User Name" onChange={(e) => setUserName(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={CheckUserCredentials}>
        Submit
      </Button>
    </Form>

  )
}

export default Login
