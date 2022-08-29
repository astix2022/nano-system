import React,{useState} from 'react'
import { Container, Item, } from './style'
import Madal from './modal'

const ListCard = ({info,onClick}) => {
  const [state, setState] = useState(false)
  return (
    <Container>
<<<<<<< HEAD
      <Item className='idraqam'>{info?.id || 'ID 1235781'}</Item>
      <Item className='ismFamilya'>{info?.Name || 'Mavluda Sultonova'}</Item>
      <Item className='taklifNomi'>{info?.suggestName || 'Taklif nomi '}</Item>
      <Item className='sana'>{info.sent_date || '13.07.2022'}</Item>
      <Item className='button'><button className='btn' onClick={()=> setState(true)}>Click</button></Item>
      <div className='button' ><button className='btn_delate' onClick={onClick}>delate</button></div>
      { state && <Madal active={setState} title={info?.message || 'hozircha xabar yoq'}/> }
      <div className='active'></div>
=======
      <Item className="idraqam">{info?.id || "ID 1235781"}</Item>
      <Item className="ismFamilya">{info?.Name || "Jurat Xudayberganov"}</Item>
      <Item className="taklifNomi">{info?.suggestName || "Taklif nomi "}</Item>
      <Item className="sana">{info?.sent_date.slice(0,9) || "13.07.2022"}</Item>
      <Item className="button">
        <button className="btn" onClick={onSubmit}>
          Click
        </button>
      </Item>
      <div className="button">
        <button className="btn_delate" onClick={onClick}>
          delate
        </button>
      </div>
      {state === true ? Component : null}
>>>>>>> 7c452bc5b076d7042c87ffb94e67917e9a53f068
    </Container>
  );
}

export default ListCard