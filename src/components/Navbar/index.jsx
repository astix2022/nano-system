import { navbar } from '../../utils/navbar';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Container, Header, Wrapper, Link, Nav, NavLogo, Icons, } from './style';
import { Popover } from 'antd';

const Navbar = () => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (newVisible) => {
    setVisible(newVisible);
  };
  function logOut (){
		localStorage.clear()
		navigate('/signin')
	}
  const Content = () =>{
    return (
      <div>
        <p className='popover'>Profil</p>
        <p className='popover'>Arizalar</p>
        <p className='popover'>Takliflar</p>
        <p className='popover'>Sozlamalar</p>
      </div>
    )
  }
  return (
    <Container>
      <Header>
        <Wrapper>
          <NavLogo onClick={() => navigate('/asosiy')}><h2>Logo</h2></NavLogo>
          <Nav>
            {
              navbar.map(({ id, title, path, hidden}) => {
                return !hidden &&(
                    <Link key={id} to={path}>{title}</Link>
                  )
                  
              })
            }
          </Nav>
          <Icons>
            <div className='icon-wrapper'>
              <Icons.Search />
            </div>
            <div className='icon-wrapper'>
              <Icons.Sun />
            </div>
            <div className='icon-wrapper'>
              <Popover
                content={<button onClick={logOut}>Chiqish</button>}
                title={Content()}
                trigger="click"
                visible={visible}
                onVisibleChange={handleVisibleChange}
                >
                <Icons.User />
              </Popover>
            </div>
          </Icons>
        </Wrapper>
      </Header>
      <main>
        <Outlet/>
      </main>
    </Container>
  )
}

export default Navbar