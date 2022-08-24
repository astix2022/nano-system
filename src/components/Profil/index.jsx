import React from 'react'
import { Container, Nav, Wrapper, WrapTop, WrapBottom, List, Card, Icon, CardTitle } from './style'
import Table from './Table'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {useNavigate } from 'react-router-dom';

const Profil = () => {
  const navigate = useNavigate()


    const Submit = ()=>{
        navigate('/asosiy')
      }
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
                                        <h2 className='login_user'>Nodirbek</h2>
                                        <p className='login_id'>ID: 123456</p>
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
                                        <span className='card_title_num'>270 TA</span>
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
                                        <span className='card_title_num'>128 TA</span>
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