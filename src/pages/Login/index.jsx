import React, { useRef, useEffect, useState} from "react";
import {
  App,
  Button,
  Container,
  Reg,
  Title,
  Wrapper,
} from "./style";
import Dash from "../../assets/imgs/f.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "../../store/login";
import Loading from '../../components/Loading'

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

  const [atribut ,setatribut] =useState(true)
	const change = ()=>{
		if(EmailRef.current.value.length >= 1 && PwRef.current.value.length >=1){
			setatribut(!true) 
		}
		else{
			setatribut(true)
		}
	}
  setInterval(change, 1000);

  return (
    <Container>
        {auth.status === 'pending' && <Loading/>} 
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
              <Button atribut={atribut}  onClick={OnSubmit}>Login</Button>
            </div>
          </App>
        </Wrapper>
      </Reg>
      <img src={Dash} alt="" />
    </Container>
  );
};

export default Login;
