import React from 'react'
import {saytbar} from '../../utils/saytbar'
import {Container} from './style'
import { Outlet,} from 'react-router-dom';


const Saytbar = () => {
  return (
    <div>
      <Container>
          {
            saytbar.map(({id, title})=>{
              return(
                <h2 key={id}>{title}</h2>
              )
            })
          }
      </Container>
      <main>
          <Outlet/>
      </main>
    </div>
  )
}

export default Saytbar