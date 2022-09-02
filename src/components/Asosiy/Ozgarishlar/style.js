import styled from "styled-components";

const Container = styled.div`
  padding: 0 150px;
  @media (max-width: 1200px) {
    padding: 0 5px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 38px;
  color: #3a3a3a;
  text-transform: uppercase;
  @media (max-width: 1070px) {
    font-size: 20px;
    text-align: center;
  }
`;

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1070px) {
    flex-direction: column;
  }
  @media (max-width: 720px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .div {
    @media (max-width: 1070px) {
      display: flex;
      flex-wrap: wrap;
      .genericcard {
        display: none;
      }
    }
    @media (max-width: 720px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .line {
    width: 100px;
    height: 0px;
    border: 1px solid #1e5dfe;
    transform: rotate(-90deg);
  }
`;

export { Container, Wrapper, Title, Block };
