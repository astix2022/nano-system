import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  margin-top: 21px;
  margin-bottom: 27px;
`;

const Title = styled.div`
  text-align: left;
  .title {
    font-size: 35px;
    color: black;
  }
  .blue {
    color: blue;
  }
`;

const InpBox = styled.div`
  width: 818px;
  height: 540px;
  background: rgba(253, 253, 253, 0.9);
  border: 0.2px solid #000000;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 24px 27px;
`;

const Input = styled.input`
  padding: 22px;
  width: 764px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const TextArea = styled.textarea`
  padding: 15px 22px;
  width: 764px;
  height: 258px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
  margin-bottom: 24px;
  resize: none;
  outline: none;
`;

const Button = styled.button`
  width: 322.89px;
  height: 60px;
  background: #3434ff;
  border-radius: 5px;
  border: none;
  color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`;

export { Container, Wrapper, Title, InpBox, Input, TextArea, Button };
