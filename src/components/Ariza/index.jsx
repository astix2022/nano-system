import {
  Button,
  Container,
  InpBox,
  Input,
  Select,
  TextArea,
  Title,
  Wrapper,
} from "./styled";
import Footer from '../Footer'

import React from 'react';
import Reveal from 'react-reveal/Reveal';






const Taklif = () => {
  return (
    <Reveal>

    <div className="block-center">
      <Container>
        <Wrapper>
          <Title>
            <div className="title">
              Ariza<span className="blue">/</span> Shikoyat{" "}
              <span className="blue">bo’limi</span>
            </div>
          </Title>
          <InpBox>
            <Input placeholder="Arizaga nom bering" type="text" />
            <Select>
              <option value="">Maktab tizimi</option>
            </Select>
            <TextArea placeholder="Yozing..." />
            <div className="block-center">
              <Button>Yuborish</Button>
            </div>
          </InpBox>
        </Wrapper>
      </Container>
      <Footer/>
    </div>
    </Reveal>
  );
};

export default Taklif
