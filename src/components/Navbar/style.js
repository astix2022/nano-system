import styled from "styled-components";
import  {NavLink}  from 'react-router-dom'
import {ReactComponent as Search} from '../../assets/icons/search.svg'
import {ReactComponent as Sun} from '../../assets/icons/sun.svg'
import {ReactComponent as User} from '../../assets/icons/user-avatar.svg'
import  {ReactComponent as user_profil} from '../../assets/icons/user_profil_icon.svg'
import  {ReactComponent as user_qoshish} from '../../assets/icons/user_qoshish_icon.svg'
import  {ReactComponent as user_chiqish} from '../../assets/icons/user_chiqish_icon.svg'
import { Icon } from "../Profil/style";
const Container = styled.div`
    width: 100%;

	.active_back{
		color: #3434FF;
		cursor: pointer;
	}
`
const Header = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--primaryColor);
	-webkit-touch-callout: none; //IOS safari
	-webkit-user-select: none; //safari
	-khtml-user-select: none; //Konqueror HTML
	-moz-user-select: none; //firefox old version
	-ms-user-select: none; // internet explorer/ Edge
	user-select: none; //Non-prefixed version, supported by chrome,firefox and opera
`
const Wrapper = styled.div`
    display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 100px;
	width: 100%;
	height: 130px;
	background-color: #ffffff;
	background-color: white;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
	.active{
		color: #0152AE;
	}
`
const Nav = styled.nav`
	display: flex;
	gap: 24px;
`
const Link = styled(NavLink)`
  	font-family: 'Poppins', sans-serif;
	font-style: normal;
	font-weight: 560;
	font-size: 20px;
	line-height: 30px;
	color: #000000;
`
const NavLogo = styled.div`
	cursor: pointer;
`

const Icons = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	.icon-wrapper{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px;
		left: 1166px;
		top: 50px;
		background: rgba(162, 162, 162, 0.1);
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
		border-radius: 12px;
		cursor: pointer;
	}
`

Icons.Search = styled(Search)``
Icons.Sun = styled(Sun)``
Icons.User = styled(User)``
Icons.Profil = styled(user_profil)`
	cursor: pointer;
`
Icons.Qoshish = styled(user_qoshish)`
	cursor: pointer;
`
Icons.Chiqish = styled(user_chiqish)`
	cursor: pointer;
`
export
{
    Container,
    Header,
    Wrapper,
	Link,
	Nav,
	NavLogo,
	Icons,
}