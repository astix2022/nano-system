import React from 'react'
import { Container, Wrapper, Title, Icon, Bottom } from './style'
import Reveal from 'react-reveal/Reveal';
const Home = () => {
    return (
        <Reveal>

        <Container>
            <h1 className='sub-title'>Biz bilan </h1>
            <Wrapper>
                <Title>
                    <div className='adress'>
                        <h1 className='adress-title'>Bizning manzil:</h1>
                        <p className='adress-des'>Xorazm viloyati, Urganch tumani, Paxtakor qishloqi</p>
                    </div>
                    <div className='adress'>
                        <h1 className='adress-title'>Email:</h1>
                        <a href="#">
                            <p className='link'>example@gmail.com</p>
                        </a>
                    </div>
                    <div className='adress'>
                        <h1 className='adress-title'>Telefon raqamlar:</h1>
                        <div>
                            <a href="#">
                                <p className='link'>+998(93)123-45-56</p>
                            </a>
                            <a href="#">
                                <p className='link'>+998(93)123-45-56</p>
                            </a>
                        </div>
                    </div>
                    <div className='adress'>
                        <h1 className='adress-title'>Mobil ilavalar:</h1>
                        <div className='app'>
                            <a href="#">
                                <Icon.Play />
                            </a>
                            <a href="#">
                                <Icon.App />
                            </a>
                        </div>
                    </div>
                </Title>
                <hr />
                {/* Bottom */}
                <Bottom>
                    <h1 className='bottom-title'>Bizni ijtimoiy tarmoqlarda kuzatib boring!</h1>
                    <Icon>
                        <a href="#">
                            <Icon.Facebook />
                        </a>
                        <a href="#">
                            <Icon.Instagram />
                        </a>
                        <a href="#">
                            <Icon.Telegram />
                        </a>
                        <a href="#">
                            <Icon.Youtube />
                        </a>
                    </Icon>
                </Bottom>
            </Wrapper>
        </Container>
        </Reveal>
    )
}

export default Home