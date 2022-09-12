import React,{useEffect} from 'react'
import { Container, Nav, Wrapper, WrapTop, WrapBottom, List, Card, Icon, CardTitle } from './style'
import Table from './Table'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {useNavigate } from 'react-router-dom';
import {useSelector ,useDispatch} from 'react-redux'
import { profilInfo } from '../../store/profil';

const Profil = () => {
    const dispatch = useDispatch
    const navigate = useNavigate()
    const info = JSON.parse(localStorage.getItem('info'))
    const Submit = ()=>{
        navigate('/asosiy')
    }
    console.log(info.suggestions.length);
    return (
        <Container>
            <Nav>
                <div onClick={Submit} className='nav_wrap'>
                    <Icon.Back  />
                    <span className='nav_back'>Chiqish</span>
                </div>
            </Nav>
            <Fade>
                <Wrapper>
                    {/* WrapTop */}
                    <WrapTop>
                            <List>
                                <Zoom>
                                    <Icon.User />
                                    <div className='login'>
                                        <h2 className='login_user'>{info?.fullname || 'user'}</h2>
                                        <p className='login_id'>ID: {info?.id || 'ID: 123456'}</p>
                                    </div>
                                    {/* <p className='edit'>Edit</p> */}
                                </Zoom>
                            </List>
                    </WrapTop>
                    {/* WrapBottom */}
                    <WrapBottom>
                        {/* card1 */}
                        <Card>
                            <CardTitle>
                                    <div className='card_title'>
                                        <span className='card_title_des'>Arizalar</span>
                                        <span className='card_title_num'>0 TA</span>
                                    </div>
                            </CardTitle>
                            <div className='table'>
                                <Table />
                            </div>
                        </Card>
                        {/* card2 */}
                        <Card>
                            <CardTitle>
                                    <div className='card_title'>
                                        <span className='card_title_des'>Takliflar</span>
                                        <span className='card_title_num'>{info?.suggestions?.length} TA</span>
                                    </div>
                            </CardTitle>
                            <div className='table'>
                                <Table />
                            </div>
                        </Card>
                    </WrapBottom>
                </Wrapper>
            </Fade>
        </Container>
    )
}

export default Profil