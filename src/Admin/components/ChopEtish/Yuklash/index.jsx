import React,{useRef} from "react";
import { Container, Wrapper ,Icon,Sending,Inputs} from "./style";
import {useMutation} from 'react-query'


const Yuklash = () => {
  const imageRef = useRef("");
  const titleRef = useRef("");
  const messageRef = useRef("");
  const { mutate } = useMutation(
    () => {
      return fetch("http://nano-system.5p-agency.uz/api/v1/ceo/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({
          image: imageRef.current.value,
          title: titleRef.current.value,
          message: messageRef.current.value,
        }),
      }).then((res) => res.json());
    },
    {
      onSucces: (res) => {
       console.log(res);
      },
    }
  );
  const onSubmit = () => {
    mutate();
  };
  return (
    <Container>
      <Wrapper>
        <Sending>
          <input className="input_file" id="file" type="file" ref={imageRef}/>
          <label className="label_wrap" htmlFor="file">
            <Icon.Sending />
            <span className="label_title">Yuborish</span>
          </label>
        </Sending>
        <Inputs>
        <form>
        <input className='input_name' placeholder='Nomi(Majburiy)' type="text" ref={titleRef}/>
        <textarea className='tex_name' placeholder='Tavsifi' cols="30" rows="10" ref={messageRef}></textarea>
        <button onClick={onSubmit}>chop etish</button>
      </form>
        </Inputs>
      </Wrapper>
    </Container>
  );
};

export default Yuklash;


