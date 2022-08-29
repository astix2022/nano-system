import React from 'react'
import { Container } from './style'

const madal = ({active,title}) => {
  return (
    <Container onClick={()=> active(false)}>
      <div className='modal_wrapper' onClick={e=> e.stopPropagation()}>
        <h2 className='title'>Tavsif</h2>
        <p className='tavsif'>{title ? title : 'xozircha xabar yo`q'}</p>
        <hr />
        <div className='click'><button onClick={()=> active(false)}>ko'rib chiqildi</button></div>
      </div>
    </Container>
  )
}

export default madal