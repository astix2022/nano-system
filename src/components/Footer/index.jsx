import React from "react";
import {
  Block,
  Boxes,
  Button,
  Container,
  Df,
  Input,
  Links,
  Logo,
  Texts,
  Title,
  Wrapper,
} from "./style";
import Loc from "../../assets/icons/location.svg";
import Tel from "../../assets/icons/tel.svg";
import Gma from "../../assets/icons/gmail.svg";
import Home from "../../assets/icons/home.svg";
import Check from "../../assets/icons/check.svg";
import Err from "../../assets/icons/error.svg";
import Inst from '../../assets/icons/instagram.svg'
import Tg from '../../assets/icons/telegram.svg'
import Yt from '../../assets/icons/youtube.svg'
import Fb from '../../assets/icons/Facebook.svg'  

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        {/* Contact Us */}
        <Block>
          <Title>Contact Us</Title>
          <Texts>
            <Df>
              <img src={Loc} alt="" />
              <Boxes>
                Palon ko’cha, 25-uy, Qaysidir mahalla, Urganch tuman, Xorazm
                Viloyat
              </Boxes>
            </Df>
            <Df>
              <img src={Tel} alt="" />
              <Boxes>123 456 7890</Boxes>
            </Df>
            <Df>
              <img src={Gma} alt="" />
              <Boxes>45IDUMI@gmail.com</Boxes>
            </Df>
          </Texts>
        </Block>
        {/* Page Map */}
        <Block className="mm">
          <Title>Page Map</Title>
          <Texts>
            <Df>
              <img src={Home} alt="" />
              <Boxes>Asosiy</Boxes>
            </Df>
            <Df>
              <img src={Check} alt="" />
              <Boxes>Taklif</Boxes>
            </Df>
            <Df>
              <img src={Err} alt="" />
              <Boxes>Ariza</Boxes>
            </Df>
          </Texts>
        </Block>
        {/* A’loqa */}
        <Block className="m">
          <Title>A’loqa</Title>
          <Texts>
            <Df>
              <Input type={"text"} placeholder="Ism" />
              <Logo>LOGO</Logo>
            </Df>
            <Texts>
              <Input
                type={"text"}
                placeholder="Telefon raqam yoki email"
                className="wd"
              ></Input>
              <Button>Yuborish</Button>
            </Texts>
          </Texts>
        </Block>
      </Wrapper>
      <Links>
        <img src={Inst} alt=""/>
        <img src={Tg} alt="" className="ml" />
        <img src={Yt} alt="" className="ml" />
        <img src={Fb} alt="" className="ml" />
      </Links>
    </Container>
  );
};

export default Footer;
