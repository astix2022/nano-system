import React from "react";
import { obj } from "../index";
import { Container, Header, Search, SubTitle, Title, TitleBox, TodayButton, Wrapper } from "./style";

const UsersT = () => {
  return (
    <Container>
      <Header>
        <Title>Qo’shilgan foydalanuvchilar</Title>
        <TitleBox>
          <Wrapper>
            <SubTitle>257 ta</SubTitle>
            <TodayButton>Today</TodayButton>
          </Wrapper>
          <Search placeholder="Search" type={"text"}/>
        </TitleBox>
          <div className="line"></div>
      </Header>

      {obj.map((i) => {
        return <Container>
          
        </Container>;
      })}
    </Container>
  );
};

export default UsersT;
