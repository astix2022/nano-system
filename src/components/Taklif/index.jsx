import React from "react";
import {
  Button,
  Container,
  InpBox,
  Input,
  TextArea,
  Title,
  Wrapper,
} from "./styled";
import Navbar from "../../components/Navbar";
import Footer from "../Footer";

const Taklif = () => {
  return (
    <div className="block-center">
      <Container>
        <Wrapper>
          <Title>
            <div className="title">
              <span className="blue">Taklif</span> bildirish
            </div>
          </Title>
          <InpBox>
            <Input placeholder="Familiya Ism Sharif" type="text" />
            <Input placeholder="Taklif nomi" type="text" />
            <TextArea placeholder="Yozing..." />
            <div className="block-center">
              <Button>Yuborish</Button>
            </div>
          </InpBox>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Taklif;
