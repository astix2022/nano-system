import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 500px) {
    padding: 0 10px;
  }
  img {
    width: 50%;
    height: 100vh;
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

const Reg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 380px;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 2.59244px 25.9244px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 52px 42px;
  @media (max-width: 500px) {
    width: 350px;
  }
  @media (max-width: 380px) {
    width: 300px;
  }
  @media (max-width: 315px) {
    width: 250px;
  }
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 59px;
  color: #3a3a3a;
  flex: none;
  order: 0;
  flex-grow: 0;
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    margin-bottom: 0;
    font-size: 20px;
  }
`;

const App = styled.div``;

App.Inp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .input {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 13px 24px 12px;
    gap: 10px;
    height: 45px;
    top: 29.42%;
    bottom: 49.19%;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    width: 100%;
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  background: #1e5dfe;
  border-radius: 8px;
  width: 80%;
  border: none;
  color: white;
  height: 45px;
  margin-top: 10px;
`;

export { Container, Reg, Wrapper, Button, Title, App };
