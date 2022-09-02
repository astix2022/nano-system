import React from "react";
import { Container, Dot } from "./style";
import Pencill from "../../assets/imgs/pencil.png";

const Loading = () => {
  return (
    <Container>
      <Dot>
        <img className="img" src={Pencill} />
      </Dot>
    </Container>
  );
};

export default Loading;
