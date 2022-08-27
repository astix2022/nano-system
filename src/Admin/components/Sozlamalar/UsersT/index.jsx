import React,{useState} from "react";
import { useQuery } from "react-query";
import Card from './Card'
import {
  Container,
  Header,
  Search,
  SubTitle,
  TabelContainer,
  TableTop,
  Title,
  TitleBox,
  TodayButton,
  Wrapper,
} from "./style";

const UsersT = () => {
  const [data,setData] =useState([]) 
  useQuery(['get started', data],()=>{
   return fetch('http://nano-system.5p-agency.uz/api/v1/ceo/logins').then(response => response.json())
  },
  {
    onSuccess:(response)=>{
      setData(response?.logins || []);
    }
  })
  
 console.log(data)
  return (
    <Container>
      <Header>
        <Title>Qo’shilgan foydalanuvchilar</Title>
        <TitleBox>
          <Wrapper>
            <SubTitle>{data.length} ta</SubTitle>
            <TodayButton>Today</TodayButton>
          </Wrapper>
          <Search placeholder="Search" type={"text"} />
        </TitleBox>
        <div className="line"> </div>
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
