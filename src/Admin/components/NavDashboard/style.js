import styled from "styled-components";
import { ReactComponent as earch } from "../../../assets/icons/blSe.svg";
import { ReactComponent as lop } from "../../../assets/icons/Group.svg";
import { ReactComponent as wa } from "../../../assets/icons/Wallet.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 30px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wrap1 = styled.div`
  p {
    color: black;
  }
`;
const Wrap2 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p{
    /* margin-top: 13px; */
    /* margin-left: 68px; */
    /* margin-right: 10px; */
    color: var(--primaryColor);
    cursor: pointer;
  }
  .amou{
    /* margin-right: 49px; */
    /* margin-left: 10px; */
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  gap: 122px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
`;

const Title = styled.div`
  width: 135px;
  height: 36px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 110px;
  height: 34px;
  background: #1e5dfe;
  border: 1px solid #1e5dfe;
  border-radius: 8px;
  color: white;
`;

const Play = styled(wa)`
  position: absolute;
  left: 930px;
  z-index: 100;
  cursor: pointer;
`

const Search = styled(earch)`
  position: relative;
  left: -380px;
  cursor: pointer;
`

const Lop = styled(lop)``

export { Container,Search,Play ,Lop ,  Button, Input, Wrapper, Title, Wrap1, Wrap2 };
 