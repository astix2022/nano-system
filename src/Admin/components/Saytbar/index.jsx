import React from 'react'
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
  )
}

export default Saytbar