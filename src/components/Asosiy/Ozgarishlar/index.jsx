import React from "react";
import { Container, Wrapper, Title, Block } from "./style";
import GenericCard from "../GenericCard";
import HomeCard from "../HomeCard";

const Ozgarishlar = () => {
  return (
    <Container>
      <Wrapper>
        <Title>maktabdagi o'zgarishlar</Title>
        <Block>
          <div className="div">
            <HomeCard />
            <HomeCard />
            <div className="genericcard">
              <HomeCard />
            </div>
          </div>
          {/* <div className="line"></div> */}
          <div className="div">
            <HomeCard />
            <HomeCard />
            <div className="genericcard">
              <HomeCard />
            </div>
          </div>
          {/* <div className="line"></div> */}
          <div className="div">
            <HomeCard />
            <HomeCard />
            <div className="genericcard">
              <HomeCard />
            </div>
          </div>
        </Block>
      </Wrapper>
      <Wrapper>
        <Title>maktabimiz yutuqlari</Title>
        <Block>
          <div className="div">
            <GenericCard />
            <GenericCard />
          </div>
          {/* <div className="line"></div> */}
          <div className="div">
            <GenericCard />
            <GenericCard />
          </div>
          {/* <div className="line"></div> */}
          <div className="div">
            <GenericCard />
            <GenericCard />
          </div>
        </Block>
      </Wrapper>
    </Container>
  );
};

export default Ozgarishlar;
