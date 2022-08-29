import React, { useState } from "react";
import { Container, TabelCard } from "./style";

const Card = ({ value }) => {
  const [pass, setPass] = useState("********");
  const [role, setRole] = useState("****");
  function changePass(){
    if(pass === '********'){
      setPass(value.password)
    }
    else if (pass === value.password){
      setPass("********");
    }

  }
  // for (let i in value.password.length){
  //   console.log(i);
  // }
    return (
      <Container>
        <TabelCard>
          <div className="tit">{value.id}</div>
          <div className="tit">{value.fullname}</div>
          <div className="tit blue">{value.login}</div>
          <div className="tit pointer" onClick={changePass}>
            {pass}
          </div>
          <div className="pointer" title={value.role}>
            {role}
          </div>
        </TabelCard>
      </Container>
    );
};

export default Card;
