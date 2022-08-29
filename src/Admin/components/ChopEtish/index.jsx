import React from "react";
import { Container, Wrapper, Card, Icon } from "./style";
import { useNavigate } from "react-router-dom";
import NavDash from '../NavDashboard'
const ChopEtish = () => {
  const navigate = useNavigate()
  const Submit = ()=>{
    navigate('/chopEtish/yuklash')
  }
  const onsubmit = ()=>{
    navigate('/chopEtish/yuklanganlar')
  }
  return (
    <Container>
      <NavDash info={'Chop etish'}/>
      <Wrapper>
        <Card onClick={Submit}>
          <Icon>
            <Icon.Dowland />
          </Icon>
          <div className="dowland_title_wrap">
            <span className="dowland_title">Yuklash</span>
          </div>
        </Card>
        <Card onClick={onsubmit}>
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
