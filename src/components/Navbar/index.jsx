import { navbar } from "../../utils/navbar";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Header, Wrapper, Link, Nav, NavLogo, Icons } from "./style";
import { Popover } from "antd";
import { useDispatch } from "react-redux";
import { logout } from "../../store/login";

const Navbar = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const handleVisibleChange = (newVisible) => {
    setVisible(newVisible);
  };
  function logOut() {
    localStorage.clear();
    navigate("/signin");
    dispatch(logout());
  }
  const Submit = () => {
    navigate("/profil");
  };
  const Content = () => {
    return (
      <div>
        <div style={{display:'flex',gap:'10px'}}>
          <Icons.Profil />
          <p onClick={Submit} className="popover">
            Profil
          </p>
        </div>
      </div>
    );
  };
  return (
    <Container>
      <Header>
        <Wrapper>
          <NavLogo onClick={() => navigate("/asosiy")}>
            <h2>Logo</h2>
          </NavLogo>
          <Nav>
            {navbar.map(({ id, title, path, hidden }) => {
              return (
                !hidden && (
                  <Link key={id} to={path}>
                    {title}
                  </Link>
                )
              );
            })}
          </Nav>
          <Icons>
            <div className="icon-wrapper">
              <Icons.Search />
            </div>
            <div className="icon-wrapper">
              <Icons.Sun />
            </div>
            <div  className="icon-wrapper">
              <Popover
                content={
                  <div style={{display:'flex',gap:'10px'}}>
                    <Icons.Chiqish />
                    <p style={{color:'#3434FF',cursor: 'pointer'}} onClick={logOut}>Chiqish</p>
                  </div>
                }
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
        <Outlet />
      </main>
    </Container>
  );
};

export default Navbar;
