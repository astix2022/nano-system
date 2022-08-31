import React,{useState,memo} from 'react'
import { Container, Item, } from './style'
import Madal from './modal'

const ListCard = ({info,onClick}) => {
  const [state, setState] = useState(false)
  console.log(info);
  return (
    <Container>
      <Item className="idraqam">{info?.id || "ID 1235781"}</Item>
      <Item className="ismFamilya">{info?.Name || "Jurat Xudayberganov"}</Item>
      <Item className="taklifNomi">{info?.suggestName || "Taklif nomi "}</Item>
      <Item className="sana">{info?.sent_date || "13.07.2022"}</Item>
      <Item className="button">
        <button className="btn" onClick={()=> setState(true)}>
          Click
        </button>
      </Item>
      <div className="button">
        <button className="btn_delate" onClick={onClick}>
          delate
        </button>
      </div>
      {state && <Madal  active={setState} title={info?.message}/> }
      <div className='active'></div>
    </Container>
  );
}

export default memo(ListCard)