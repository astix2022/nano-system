import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Dot = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 0px 0px 15.75px 0.63px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  .img {
    width: 50px;
    animation: ${rotate} 1s linear infinite;
    z-index: 999;
  }
`;

export { Container, Dot };
