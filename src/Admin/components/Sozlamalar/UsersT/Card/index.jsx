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
  function changeRole() {
    if (role === "****") {
      setRole(value.role);
    } else if (role === value.role) {
      setRole("****");
    }
  }

    return (
      <Container>
        <TabelCard>
          <div className="tit">{value?.id || '111'}</div>
          <div className="tit">{value?.fullname || 'shoxrux maqsudov'}</div>
          <div className="tit blue">{value?.login || 'shoxrux'}</div>
          <div className="tit pointer" onClick={changePass}>
            {pass}
          </div>
          <div className="pointer" onClick={changeRole} title={value?.role}>
            {role}
          </div>
        </TabelCard>
      </Container>
    );
};

export default Card;
