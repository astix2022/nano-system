import styled from "styled-components";

const Container = styled.div``;

const TableTop = styled.div`
  display: flex;
  height: 50px;
  .tit {
    width: 180px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }
`;

const Tabel = styled.div``;

const TabelCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  background-color: #f5f8ff;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 0 30px;
  .tit {
    width: 220px;
    display: flex;
    align-items: center;
    height: 30px;
  }
  .pointer {
    cursor: pointer;
  }
  .blue {
    color: #1e5dfe;
  }
`;

export { Container, TableTop, Tabel, TabelCard };
