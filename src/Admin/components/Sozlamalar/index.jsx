import React from "react";
import { useState } from "react";
import NavDash from "../NavDashboard";
import UsersT from "./UsersT";
import Madal from './Madal'
import {
  Button,
  Card,
  Cards,
  Container,
  Fonts,
} from "./style";

const Sozlamalar = () => {
  const [item, setItem] = useState(false);
  return (
    <Container>
      <NavDash info={"Sozlamalar"} />
      <Cards>
        <Card>
          <Card.WrapOne>
            <Fonts.Title>Yangi foydalanuvhi qo’shing.</Fonts.Title>
            <Fonts.SubTitle>Xozrcha 257 ta</Fonts.SubTitle>
          </Card.WrapOne>
          <Card.WrapTwo>
            <Button onClick={() => setItem(true)}>Qoshish</Button>
          </Card.WrapTwo>
        </Card>
      </Cards>
      <UsersT />
      {item && <Madal active={setItem} />}
    </Container>
  );
};
export default Sozlamalar;
