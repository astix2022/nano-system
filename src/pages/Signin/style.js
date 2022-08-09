import styled from "styled-components";

const Container = styled.div`
  background-color: #003066;
  width: 100%;
  height: 100vh;
  .block-center {
    height: 100%;
  }
  z-index: -99;
`;

const Wrapper = styled.div`
  width: 479px;
  height: 497px;
  color: white;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.25);
  border-radius: 27px;
  padding: 15px 30px;
  .title {
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 39px;
    color: white;
    margin-bottom: 10px;
  }
  .description {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
  }
  .inputs {
    margin-top: 63px;
  }
  .des {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    width: 108px;
    height: 15px;
    margin-top: 20px;
    margin-left: auto;
  }
  span {
    width: 106px;
    height: 18px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #ffffff;
  }
  .center {
    margin-top: 10px;
  }
`;

const Line = styled.div`
  width: 110px;
  height: 1px;
  background-color: white;
  margin-bottom: 10px;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #fff;
  width: 419px;
  height: 50px;
  font-size: 32px;
  color: white;
  :focus {
    box-shadow: none;
  }
`;

const Button = styled.button`
  width: 419px;
  height: 50px;
  background: #a5d9d0;
  border-radius: 7px;
  color: black;
  margin-top: 30px;
  border: none;
`;

export { Container, Wrapper, Line, Input, Button };
