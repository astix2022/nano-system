// import React,{useRef} from 'react'
// import {Container,Wrapper} from './style'
// import {useMutation} from 'react-query'



// const Sarlavha = ({info}) => {
//   const titleRef = useRef("");
//   const messageRef = useRef("");
//   const { mutate } = useMutation(
//     () => {
//       return fetch("http://nano-system.5p-agency.uz/api/v1/ceo/news", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           title: titleRef.current.value,
//           message: messageRef.current.value,
//         }),
//       }).then((res) => res.json());
//     },
//     {
//       onSucces: (res) => {
//         console.log(res ? "xabaringiz yuborildi" : "xato");
//       },
//     }
//   );
//   const onSubmit = () => {
//     mutate();
//   };
//   return (
//     <Container>
//       <Wrapper>
//       <form>
//         <input className='input_name' placeholder='Nomi(Majburiy)' type="text" ref={titleRef}/>
//         <textarea className='tex_name' placeholder='Tavsifi' cols="30" rows="10" ref={messageRef}></textarea>
//         <button onClick={onSubmit}>chop etish</button>
//       </form>
//       </Wrapper>
//     </Container>
//   )
// }

// export default Sarlavha