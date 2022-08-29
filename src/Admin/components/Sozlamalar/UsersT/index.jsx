import React,{useEffect} from "react";
import Card from './Card'
import {useDispatch, useSelector} from 'react-redux'
import { getLogin } from "../../../../store/getLogin";
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
  const dispatch = useDispatch()
  const data = useSelector((store) => store?.getLogin?.data);
  console.log(data);
  useEffect(()=>{
    dispatch(getLogin());
  },[])
  return (
    <Container>
      <Header>
        <Title>Qo'shilgan foydalanuvchilar</Title>
        <TitleBox>
          <Wrapper>
            <SubTitle>0 ta</SubTitle>
            <TodayButton>Today</TodayButton>
          </Wrapper>
          <Search placeholder="Search" type={"text"} />
        </TitleBox>
        <div className="line"></div>
      </Header>
      {
        data?.map(()=>{
          return(
            <div></div>
          )
        })
      }
      {/* <Card/> */}
    </Container>
  );
};

export default UsersT;
