import styled from "styled-components";

const Container = styled.div`
  padding: 10px 40px;
  background-color: #ffffff;
  border-radius: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
`;
const Header = styled.div`
  padding: 20px 0px;
  .line {
    width: 100%;
    height: 0px;
    border: 1px solid #e6e6e6;
    margin: 10px 0;
  }
`;

const TitleBox = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

const SubTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 42px;
  color: #3a3a3a;
  margin-right: 20px;
`;

const TodayButton = styled.button`
  width: 93px;
  height: 33px;
  background: #f1f4f9;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
`;

const Search = styled.input`
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  width: 400px;
  height: 40px;
  padding: 10px;
`;

const TabelContainer = styled.div`
  padding: 0 30px;
  
`;

const TableTop = styled.div`
  display: flex;
  height: 50px;
  padding: 0 30px;
  .tit {
    width: 220px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }
`;

const Tabel = styled.div``;

const TabelCard = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  background-color: #f5f8ff;
  align-items: center;
  border-radius: 10px;
  height: fit-content;
  .tit {
    width: 180px;
  }
  .editBtn {
    width: 68px;
    height: 22px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      #fe1e1e;
    border: 1px solid #ffffff;
    border-radius: 8px;
    color: white;
  }
  .blue {
    color: #1e5dfe;
  }
`;

export {
  Container,
  Header,
  TitleBox,
  Title,
  SubTitle,
  TodayButton,
  Search,
  Wrapper,
  TabelContainer,
  TableTop,
  Tabel,
  TabelCard,
};
