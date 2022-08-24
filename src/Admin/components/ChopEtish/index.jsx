import React from "react";
import { Container, Wrapper, Card, Icon } from "./style";
import { useNavigate } from "react-router-dom";

const ChopEtish = () => {
  const navigate = useNavigate()
  const Submit = ()=>{
    navigate('/chopEtish/yuklash')
  }
  return (
    <Container>
      <Wrapper>
        <Card onClick={Submit}>
          <Icon>
            <Icon.Dowland />
          </Icon>
          <div className="dowland_title_wrap">
            <span className="dowland_title">Yuklash</span>
          </div>
        </Card>
        <Card>
          <Icon>
            <Icon.loadedOnes/>
          </Icon>
          <div className="dowland_title_wrap">
            <span className="dowland_title">Yuklanganlar</span>
          </div>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default ChopEtish;
