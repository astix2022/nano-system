import React from "react";
import { Button, Container, Input, Line, Wrapper } from "./style";

const Signin = () => {
  return (
    <Container>
      <div className="block-center">
        <Wrapper>
          <div className="title">Login</div>
          <Line></Line>
          <div className="description">Xush kelibsiz!</div>
          <div className="inputs">
            <div className="description">Password</div>
            <Input type={"password"}/>
            <br /><br />
            <div className="description">Username</div>
            <Input />
            <div className="des">Forgot Password?</div>
          </div>
          <Button>
            <div className="block-center">LOGIN</div>
          </Button>
          <div className="center">
            <span>Register </span>Here
          </div>
        </Wrapper>
      </div>
    </Container>
  );
};

export default Signin;
