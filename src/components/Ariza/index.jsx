<<<<<<< HEAD
import React from "react";
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
import Navbar from "../../components/Navbar";
import Footer from "../Footer";
=======
import React from 'react'
import Footer from '../Footer'
>>>>>>> b9467242907dcc0aef091f999f2942edb93dc0a5

const Taklif = () => {
  return (
<<<<<<< HEAD
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
    </div>
  );
};
=======
    <div>
      Ariza
      <Footer/>
    </div>
  )
}
>>>>>>> b9467242907dcc0aef091f999f2942edb93dc0a5

export default Taklif;
