import styled from "styled-components";
import { ReactComponent as Exit } from "../../../../assets/icons/exit.svg";


const Container = styled.div``;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  left: 0px;
`;

const Box = styled.div`
  width: 400px;
  height: 500px;
  background: #fafafa;
  padding: 40px 35px;
  z-index: 999;
  border-radius: 3px;
  .icon {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -20px;
  }
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 47px;
  text-align: center;
`;

const Foiz = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #00000092;
`;

const SubTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
`;

const ExitIcon = styled(Exit)`
  width: 20px;
`;

const InpBox = styled.div`
  margin-top: 10px;
  .input {
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    background: #ffffff;
    border: 1px solid #9e9e9e;
    border-radius: 15px;
    padding: 20px;
  }
  .select {
    border: 1px solid #1e5dfe;
    border-radius: 15px;
    color: #1e5dfe;
    padding-left: 20px;
    outline: none;
    height: 60px;
  }
`;

const AddButton = styled.button`
  width: 90px;
  height: 40px;
  color: white;
  border: none;
  background: #1e5dfe;
  border-radius: 15px;
`;

export {
  Container,
  Wrapper,
  Box,
  Title,
  Foiz,
  SubTitle,
  ExitIcon,
  InpBox,
  AddButton,
};
