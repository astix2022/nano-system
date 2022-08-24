import React,{useState} from 'react'
import { Container, Item, ClickComponent } from './style'

const ListCard = ({info}) => {
  const [state, setState] = useState(false)
  const onSubmit =  () =>{
    if(state === false){
      setState(!false)
    }
    else if(state === true){
      setState(!true)
    }
  }
  const Component = (
    <ClickComponent>
      <div className='card'>
        <h3 className='sub-title'>Tavsif</h3>
        <p className='dec'>{info.message || "hozircha xabar yo'q"}</p>
        <div className='button'>
          <button onClick={onSubmit}>Ko'rib chiqildi</button>
        </div>
      </div>
    </ClickComponent>
  )
  return (
    <Container>
      <Item className='idraqam'>{info?.id || 'ID 1235781'}</Item>
      <Item className='ismFamilya'>{info?.Name || 'Mavluda Sultonova'}</Item>
      <Item className='taklifNomi'>{info?.suggestName || 'Taklif nomi '}</Item>
      <Item className='sana'>13.07.2022</Item>
      <Item className='button'><button className='btn' onClick={onSubmit}>Click</button></Item>
      {state === true ?  Component : null}
    </Container>
  )
}

export default ListCard