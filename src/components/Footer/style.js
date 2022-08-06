import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 414px;
  background: #0152ae;
  color: white;
  padding: 100px 0 0 100px;
`;

const Wrapper = styled.div`
  display: flex;

  width: 1158px;
  height: 239px;
  .mm {
    margin-left: 193px;
  }
  .m {
    margin-right: 192px;
    margin-left: -81px;
  }
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 38px;
  color: #ffffff;
  margin-bottom: 12px;
`;

const Block = styled.div``;

const Texts = styled.div`
  .wd {
    width: 421px;
  }
`;

const Df = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin-bottom: 19px;
`;

const Boxes = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  width: 300px;
  margin-left: 15px;
`;

const Input = styled.input`
  width: 292px;
  height: 50px;
  background: #ffffff;
  box-shadow: inset 0px 0px 24.469px -4.31806px rgba(0, 0, 0, 0.25);
  border-radius: 7.19677px;
  padding: 14px 18px;
  border: none;
`;

const Logo = styled.div`
  width: 111px;
  height: 41.55px;
  background: #d9d9d9;
  color: black;
  font-style: normal;
  font-weight: 500;
  font-size: 23.1497px;
  line-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
`;

const Button = styled.button`
  width: 104.89px;
  height: 37.14px;
  background: #3434ff;
  border-radius: 5px;
  border: none;
  color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 11.5739px;
  line-height: 17px;
  text-align: center;
  position: relative;
  top: -43px;
  left: 310px;
`;

const Links = styled.div`
  width: fit-content;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  .ml{
    margin-left: 12px;
  }
`;

export {
  Container,
  Button,
  Title,
  Block,
  Texts,
  Df,
  Boxes,
  Wrapper,
  Input,
  Logo,
  Links,
};
