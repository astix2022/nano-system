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
    </Container>
  );
};

export default UsersT;
