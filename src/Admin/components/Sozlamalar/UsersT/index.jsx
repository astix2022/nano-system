import React from "react";
import { obj } from "../index";
import {
  Container,
  Header,
  Search,
  SubTitle,
  Tabel,
  TabelCard,
  TabelContainer,
  TableTop,
  Title,
  TitleBox,
  TodayButton,
  Wrapper,
} from "./style";

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
          <Search placeholder="Search" type={"text"} />
        </TitleBox>
        <div className="line"></div>
      </Header>

      {obj.map(({ id, ismFamilya, login, parol, role }) => {
        return (
          <Container key={1}>
            <TabelContainer key={1}>
              <TableTop>
                <div className="tit">ID raqam</div>
                <div className="tit">Ism Familiya</div>
                <div className="tit">Login</div>
                <div className="tit">Parol</div>
                <div className="tit">Role</div>
                <div className="">Edit</div>
              </TableTop>
              <Tabel>
                <TabelCard key={1}>
                  <div className="tit">123</div>
                  <div className="tit">{ismFamilya}</div>
                  <div className="tit blue">{login}</div>
                  <div className="tit">{parol}</div>
                  <div className="tit">{role}</div>
                  <button className="editBtn">Ochirish</button>
                </TabelCard>
              </Tabel>
            </TabelContainer>
          </Container>
        );
      })}
    </Container>
  );
};

export default UsersT;
