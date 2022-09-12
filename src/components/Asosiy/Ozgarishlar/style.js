import styled from "styled-components";

const Container = styled.div`
  padding: 0 100px;
  /* @media (max-width: 1366px) {
    padding: 0 50px;
  } */
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 27px;
`;

const Title = styled.div`
  width: 100%;
  margin-top: 96px;
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  color: #3a3a3a;
  text-transform: uppercase;
  @media (max-width: 1335px) {
    text-align: center;
  }
  @media (max-width: 700px) {
    font-size: 12px;
    padding: 0;
  }
`;

export { Container, Wrapper, Title, };
