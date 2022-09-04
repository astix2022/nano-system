import React,{useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getLogin } from "../../../../store/getLogin";
// import { useNavigate } from "react-router-dom";
import Card from './Card'
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
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector((store) => store.getLogin.data);
  useEffect(()=>{
    dispatch(getLogin());
  },[])
  console.log(data);
  return (
    <Container>
      <Header>
        <Title>Qo'shilgan foydalanuvchilar</Title>
        <TitleBox>
          <Wrapper>
            <SubTitle>{data?.logins?.length} ta</SubTitle>
            <TodayButton>Today</TodayButton>
          </Wrapper>
          <Search placeholder="Search" type={"text"} />
        </TitleBox>
        <div className="line"></div>
        <div className="table_des">
          <p className="table_des_title">T/R</p>
          <p className="table_des_title">Ism familya</p>
          <p className="table_des_title"></p>
          <p className="table_des_title">Parol</p>
          <p className="table_des_title">Status</p>
        </div>
      </Header>
      {
        data?.logins?.map((value)=>{
          return(
            <Card key={value?.id} info={value} />
          )
        })
      }
    </Container>
  );
};

export default UsersT;
