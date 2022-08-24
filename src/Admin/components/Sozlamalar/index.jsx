import React from "react";
import { useRef } from "react";
import { useState } from "react";
import NavDash from "../NavDashboard";
import UsersT from "./UsersT";
import {
  Button,
  Card,
  Cards,
  Container,
  Fonts,
  Box,
  Wrapper,
  Title,
  SubTitle,
  InpBox,
  Foiz,
  ExitIcon,
  AddButton,
} from "./style";
import Table from "./UsersT";

export let obj = [
  {
    ismFamilya: "",
    login: "",
    parol: "",
    role: "",
  },
];
const Sozlamalar = () => {
  const [item, setItem] = useState(false);
  const nameRef = useRef("");
  const loginRef = useRef("");
  const passwordRef = useRef("");
  const roleRef = useRef("");
  const submit = () => {
    if (item === false) {
      setItem(!false);
    } else if (item === true) {
      setItem(!true);
    }
  };
  const add = () => {
    obj = [
      {
        ismFamilya: nameRef.current.value,
        login: loginRef.current.value,
        parol: passwordRef.current.value,
        role: roleRef.current.value,
      },
    ];
    console.log(obj);
    if (item === false) {
      setItem(!false);
    } else if (item === true) {
      setItem(!true);
    }
  };
  const Component = (
    <Container>
      <Wrapper>
        <Box>
          <div className="icon">
            <ExitIcon onClick={submit} />
          </div>
          <Title>Foydalanuvchi qo’shish</Title>
          <SubTitle>Platformaga yangi foydalanuvchi qo’shing!</SubTitle>
          <InpBox>
            <input
              ref={nameRef}
              type="text"
              placeholder="Ism Familiya"
              className="input"
            />
            <input
              ref={loginRef}
              type="text"
              placeholder="Login"
              className="input"
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Parol"
              className="input"
            />
            <select className="input select" ref={roleRef}>
              <option placeholder="Role" className="option">
                User
              </option>
              <option placeholder="Role" className="option">
                O’qituvchi
              </option>
            </select>
          </InpBox>
          <div className="block-center">
            <AddButton onClick={add}>Qo’shish</AddButton>
          </div>
        </Box>
      </Wrapper>
      <Foiz />
    </Container>
  );

  return (
    <Container>
      <NavDash />
      <Cards>
        <Card>
          <Card.Wrap1>
            <Fonts.Title>Yangi foydalanuvhi qo’shing.</Fonts.Title>
            <Fonts.SubTitle>Xozrcha 257 ta</Fonts.SubTitle>
          </Card.Wrap1>
          <Card.Wrap2>
            <Button onClick={submit}>Qoshish</Button>
          </Card.Wrap2>
        </Card>
      </Cards>
      {item && Component}
      <UsersT />
    </Container>
  );
};

export default Sozlamalar;
