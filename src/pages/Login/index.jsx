import React from "react";
import {
  App,
  Button,
  Container,
  Input,
  Input1,
  Reg,
  Title,
  Wrapper,
} from "./style";
import Dash from "../../assets/imgs/f.png";

const Login = () => {
  return (
    <Container>
      <Reg>
        <Wrapper>
          <Title>Log in</Title>
          <App>
            <App.Inp>
              <Input type={"text"} id="iOne" />
              <label for="iOne" className="text">
                Your Email
              </label>
              <Input1 type={"password"} id="iTwo" name="text" />
              <label for="iTwo" className="text1">
                Password
              </label>
            </App.Inp>
            <Button>Continue</Button>
          </App>
        </Wrapper>
      </Reg>
      <img src={Dash} alt="" />
    </Container>
  );
};

export default Login;
