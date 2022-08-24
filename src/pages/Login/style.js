import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 50%;
    height: 100vh;
    /* margin-right: -150px; */
  }
`;

const Reg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 50%;
`;

const Wrapper = styled.div`
  width: 500px;
  height: 535.48px;
  background: #ffffff;
  box-shadow: 0px 2.59244px 25.9244px rgba(0, 0, 0, 0.1);
  border-radius: 32.4055px;
  padding: 52px 42px;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 49px;
  line-height: 59px;
  color: #3a3a3a;
  flex: none;
  order: 0;
  flex-grow: 0;
  text-align: center;
  margin-bottom: 60px;
`;

const App = styled.div`

`;

App.Inp = styled.div`
  .input{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 13px 24px 12px;
    gap: 10px;
    top: 29.42%;
    bottom: 49.19%;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    width: 100%;
    margin-bottom: 23px;
    font-size: 20px;
  }
`;


const Button = styled.button`
  background: #1e5dfe;
  border-radius: 8px;
  width: 100%;
  border: none;
  color: white;
  height: 47px;
  margin-top: 30px;
`;

export { Container, Reg, Wrapper, Button, Title, App};
