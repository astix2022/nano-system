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
    </Container>
  );
};

export default UsersT;
