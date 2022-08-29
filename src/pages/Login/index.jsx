import React, { useRef, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "../../store/login";

const Login = () => {
  const EmailRef = useRef("");
  const PwRef = useRef("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const OnSubmit = () => {
    dispatch(
      getLogin({
        login: EmailRef.current.value,
        password: PwRef.current.value,
      })
    );
  };

  useEffect(() => {
    if (auth.status === "success") {
      // Roleni localStorage ga qoyamis, root olish uchun
      localStorage.setItem("role", JSON.stringify(auth.data.role));

      // Agar ceo bolsa, dashboarda yuvaramiz, bomasa asosiyga
      if (auth.data.role === "ceo") {
        navigate("/dashboard");
      } else {
        navigate("/asosiy");
      }
    }
  }, [auth]);

  return (
    <Container>
      <Reg>
        <Wrapper>
          <Title>Log in</Title>
          <App>
            <App.Inp>
              <input
                placeholder="Username"
                ref={EmailRef}
                type={"text"}
                className="input"
              />
              <input
                placeholder="Password"
                ref={PwRef}
                type={"password"}
                className="input"
              />
            </App.Inp>
            <div className="block-center">
              <Button onClick={OnSubmit}>Login</Button>
            </div>
          </App>
        </Wrapper>
      </Reg>
      <img src={Dash} alt="" />
    </Container>
  );
};

export default Login;
