import React,{useState} from "react";
import { useQuery } from "react-query";
import {
  Container,
  Header,
  Search,
  SubTitle,
  Title,
  TitleBox,
  TodayButton,
  Wrapper,
} from "./style";

const UsersT = () => {
  const [data,setData] =useState([]) 
  useQuery(['started'],()=>{
    fetch('http://nano-system.5p-agency.uz/api/v1/ceo/logins',{
      method:'GET',
      redirect: 'follow'
    })
    .then(response => response.text())
  },
  {
    onSuccess:(response)=>{
      setData(response || [])
    }
  })
 console.log(data)
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
<<<<<<< HEAD
=======

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
                  <div className="tit" title={parol}>********</div>
                  <div className="tit">{role}</div>
                  <button className="editBtn">Ochirish</button>
                </TabelCard>
              </Tabel>
            </TabelContainer>
          </Container>
        );
      })}
>>>>>>> 1234572028f3ee28b1e8f79b5fc3d5a8bca61511
    </Container>
  );
};

export default UsersT;
