import React from 'react'
import { navbar } from '../../utils/navbar';
import {Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Container, Header, Wrapper, Link, Nav, NavLogo, Icons, } from './style';
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Container>
        <Header>

            <Wrapper>
              <NavLogo onClick={()=> navigate('/asosiy')}><h2>Logo</h2></NavLogo>
              <Nav>
                {
                  navbar.map(({id, title, path,})=>{
                    return <Link key={id} to={path}>{title}</Link>
                  })
                }    
              </Nav>
              <Icons>
                <div className='icon-wrapper'>
                  <Icons.Search/>
                </div>
                <div className='icon-wrapper'>
                  <Icons.Sun/>
                </div>
                <div className='icon-wrapper'>
                  <Icons.User/>
                </div>
              </Icons>
            </Wrapper>
        </Header>
        <main>
			<Outlet />
		</main>
    </Container>
  )
}

export default Navbar