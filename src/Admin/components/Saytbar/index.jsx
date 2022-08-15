import React from 'react'
import {saytbar} from '../../utils/saytbar'
import { Outlet,} from 'react-router-dom';
import { Container, Wrapper, Result, Link } from './style'
import { NavLink } from 'react-router-dom';


const Saytbar = () => {
  return (
    <Container>
      <Wrapper>
        <h1 className='logo'>LOGO</h1>
        {
          saytbar.map(({ id, title, path, icon }) => {
            return (
              <div className='wrap' key={id}>
                <img className='icons' src={icon} alt="icon" />
                <NavLink  to={path}>
                    {title}</NavLink>
              </div>
            )
          })
        }
      </Wrapper>
      <Result>
        <Outlet />
      </Result>
    </Container>
  )
}

export default Saytbar