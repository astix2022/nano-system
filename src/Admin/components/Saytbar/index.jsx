import React from 'react'
import {saytbar} from '../../utils/saytbar'
import { Outlet, useNavigate} from 'react-router-dom';
import { Container, Wrapper, Result, Link} from './style'
import {useDispatch} from 'react-redux'
import { logout } from '../../../store/login';


const Saytbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  function logOut (){
		localStorage.clear()
		navigate('/signin')
    dispatch(logout())
	}
  return (
    <Container>
      <Wrapper>
        <h1 className='logo'>LOGO</h1>
        {
          saytbar.map(({ id, title, path, icon,}) => {
            return (
              <div className='wrap' key={id}>
                <img className='icons' src={icon}/>
                <Link  to={path}>{title}</Link>
              </div>
            )
          })
        }
        <button onClick={logOut}>logout</button>
      </Wrapper>
      <Result>
        <Outlet />
      </Result>
    </Container>
  )
}

export default Saytbar