import React from "react";
import { Button, Container, Input, Lop, Play, Search, Title, Wrap1, Wrap2, Wrapper } from "./style";
import Amount from '../../../assets/imgs/Rectangle 13.png'

const NavDash = () => {
  return (
    <Container>
      <Wrapper>
        <Wrap1>
          <Title>Dashboard</Title>
          <p>7:30 PM at 14 July 2022</p>
        </Wrap1>
        <Wrap2>
          <Button><Lop/>Tahrirlash</Button>
          <img src={Amount} className="amou" />
        </Wrap2>
      </Wrapper>
    </Container>
  );
};

export default NavDash;
