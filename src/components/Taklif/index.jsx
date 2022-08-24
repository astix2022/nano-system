import React,{useRef,useState} from "react";
import { Button, Container, InpBox, Input, TextArea, Title, Wrapper} from "./styled";
import Footer from "../Footer";
import Reveal from 'react-reveal/Reveal';
import { useMutation } from "react-query";

const Taklif = () => {
  const nameRef = useRef('')
  const suggestNameRef = useRef('')
  const messageRef = useRef('')
  const [result,setResult] = useState(null)
  const { mutate } = useMutation(
		() => {
			return fetch(`http://nano-system.5p-agency.uz/api/v1/users/suggestion`, {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify
          ({ Name: nameRef.current.value, 
            suggestName: suggestNameRef.current.value, 
            message:messageRef.current.value 
          }),
			})
		},
    {
      onSuccess: (res) => {
        // console.log(res);   
      console.log( res.ok === true ? 'xabaringiz yuborildi' : 'getmadi krc')
      },
      onError: (err) => {}
    }
	);
  const onSubmit = () =>{
    mutate()
    setResult('xabaring getti karochchi')
  }
  return (
    <Reveal>
    <div className="block-center">
      <Container>
        <Wrapper>
          <Title>
            <div className="title">
              <span className="blue">Taklif</span> bildirish
            </div>
          </Title>
          <InpBox>
            <Input ref={nameRef} placeholder="Familiya Ism Sharif" type="text" />
            <Input ref={suggestNameRef} placeholder="Taklif nomi" type="text" />
            <TextArea ref={messageRef} placeholder="Yozing..." />
            <div className="block-center">
              <Button onClick={onSubmit}>Yuborish</Button>
            </div>
          </InpBox>
        </Wrapper>
      </Container>
      <Footer/>
    </div>
    </Reveal>
  );
};

export default Taklif;
