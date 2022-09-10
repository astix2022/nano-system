import React from "react";
import { Container, Wrapper, Title, } from "./style";
import HomeCard from "../HomeCard";

const Ozgarishlar = () => {
  return (
    <Container>
      <Title>maktabdagi o'zgarishlar</Title>
      <Wrapper>
        <HomeCard />
        <HomeCard />
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
      </Wrapper>
    </Container>
  );
};

export default Ozgarishlar;
