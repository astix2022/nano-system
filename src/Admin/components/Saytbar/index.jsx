import React from 'react'
import {saytbar} from '../../utils/saytbar'
import {Container} from './style'
import { Outlet,} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Saytbar = () => {
  return (
    <div>
      <Container>
          {
            saytbar.map(({id, title,path})=>{
              return(
                <NavLink key={id} to={path}>{title}</NavLink>
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