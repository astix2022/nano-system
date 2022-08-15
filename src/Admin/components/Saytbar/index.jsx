import React from 'react'
<<<<<<< HEAD
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
=======
import { saytbar } from '../../utils/saytbar'
import { Container, Wrapper, Result, Link } from './style'
import { Outlet } from 'react-router-dom';

const Saytbar = () => {
  return (
    <Container>
      <Wrapper>
        <h1 className='logo'>LOGO</h1>
        {
          saytbar.map(({ id, title, path, icon }) => {
            return (
              <div className='wrap'>
                <img className='icons' src={icon} alt="icon" />
                <Link key={id} to={path}>
                    {title}
                </Link>
              </div>
            )
          })
        }
      </Wrapper>
      <Result>
        <Outlet />
      </Result>
    </Container>
>>>>>>> d7e6484232bf25e95462a529954e694959fdab36
  )
}

export default Saytbar