import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 10px 40px;
`;

const Cards = styled.div`
  margin: 40px 0;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 104px;
  padding: 14px 40px;
  border-radius: 15px;
  background: #ffffff;
`;
Card.WrapOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
Card.WrapTwo= styled.div``;

const Fonts = styled.div``;
Fonts.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 38px;
`;
Fonts.SubTitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 42px;
  color: #3a3a3a;
`;

const Button = styled.button`
  width: 90px;
  height: 30px;
  background: #1e5dfe;
  border-radius: 15px;
  color: white;
  border: none;
  z-index: 999;
`;

export {
  Container,
  Cards,
  Card,
  Fonts,
  Button,

};
