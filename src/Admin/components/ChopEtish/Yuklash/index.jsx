import React,{useRef,useState} from "react";
import { Container, Wrapper ,Icon,Sending,Inputs,Button} from "./style";
import {Post} from '../../../../store/chopetish'
import { useDispatch,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";


const Yuklash = () => {
  const [state, setState] = useState(true)
  const imageRef = useRef("");
  const titleRef = useRef("");
  const messageRef = useRef("");
  const dispatch = useDispatch()
  const loading = useSelector((store)=> store.post)

// submit
  const OnSubmit = () => {
		dispatch(
			Post({
				image: imageRef.current.value,
				title: titleRef.current.value,
			  message: messageRef.current.value
			})
		);
    if(state === true) return setState(!true)
    else if(state === false) return setState(!false)
	};
  // const navigate = useNavigate()
  // const onSubmit = ()=>{
  //   navigate('/chopEtish')
  // }
  return (
    <Container>
      <div className="exit">
        <Icon.Back/>
        <span>Chqish</span>
      </div>
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
      </form>
        </Inputs>
      <div className="buttuns">
      <Button onClick={OnSubmit} className={state ? 'active' : 'nonActive'}>Chop etish</Button>
      {loading.status === 'pending' && 'Loading...'}
      {loading.status === 'success' && 'Xabaringiz muvofaqiyatli yuborildi'}
      {loading.status === 'error' && 'Xabaringiz yuborilmadi'}
      </div>
      </Wrapper>
    </Container>
  );
};
export default Yuklash;


