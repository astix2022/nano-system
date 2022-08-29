import React,{useRef} from 'react'
import {Container,Wrapper,Box,Title,Foiz,SubTitle,ExitIcon,InpBox,AddButton,} from "./style";
import { useDispatch,useSelector} from 'react-redux';
import {addAcc} from '../../../../store/addAccount'

const Madal = ({ active }) => {
  const nameRef = useRef("");
  const loginRef = useRef("");
  const passwordRef = useRef("");
  const roleRef = useRef("");

  const add = useSelector((state) => state);
  const dispatch = useDispatch()
  const submit = ()=>{
    dispatch(
      addAcc({
        fullname: nameRef.current.value,
        login: loginRef.current.value,
        password: passwordRef.current.value,
        role: roleRef.current.value,
      })
    )
  }
  console.log('====================================');
  console.log(add.add.status);
  console.log('====================================');
  return (
    <Container onClick={() => active(false)}>
      <Wrapper>
        {add.add.status}
        <Box onClick={(e) => e.stopPropagation()}>
          <div className="icon">
            <ExitIcon onClick={() => active(false)} />
          </div>
          <Title>Foydalanuvchi qo’shish</Title>
          <SubTitle>Platformaga yangi foydalanuvchi qo’shing!</SubTitle>
          <InpBox>
            <input
              ref={nameRef}
              type="text"
              placeholder="Ism Familiya"
              className="input"
            />
            <input
              ref={loginRef}
              type="text"
              placeholder="Login"
              className="input"
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Parol"
              className="input"
            />
            <select className="input select" ref={roleRef}>
              <option placeholder="Role" className="option">
                user
              </option>
              <option placeholder="Role" className="option">
                ceo
              </option>
            </select>
          </InpBox>
          <div className="block-center">
            <AddButton onClick={submit}>Qo’shish</AddButton>
          </div>
        </Box>
      </Wrapper>
      <Foiz />
    </Container>
  );
};

export default Madal