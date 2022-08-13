import React from 'react'
import {saytbar} from '../../utils/saytbar'
import {Container,Wrapper,Result,Link} from './style'
import { Outlet} from 'react-router-dom';

const Saytbar = () => {
  return (
  <Container>
        <Wrapper>
          {
            saytbar.map(({id, title,path})=>{
              return(
                <Link key={id} to={path}>{title}</Link>
              )
            })
          }
        </Wrapper>
      <Result>
          <Outlet/>
      </Result>
  </Container>
  )
}

export default Saytbar