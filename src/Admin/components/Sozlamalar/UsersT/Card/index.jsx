import React, { useState } from "react";
import { Container, TabelCard } from "./style";

const Card = ({ info }) => {
  const [pass, setPass] = useState("********");
  const [role, setRole] = useState("****");
  function changePass(){
    if(pass === '********'){
      setPass(info.password)
    }
    else if (pass === info.password){
      setPass("********");
    }

  }
  function changeRole() {
    if (role === "****") {
      setRole(info.role);
    } else if (role === info.role) {
      setRole("****");
    }
  }

    return (
      <Container>
        <TabelCard>
          <div className="tit">{info?.id || '111'}</div>
          <div className="tit">{info?.fullname || 'shoxrux maqsudov'}</div>
          <div className="tit blue">{info?.login || 'shoxrux'}</div>
          <div className="tit pointer" onClick={changePass}>
            {pass}
          </div>
          <div className="pointer" onClick={changeRole} title={info?.role}>
            {role}
          </div>
        </TabelCard>
      </Container>
    );
};

export default Card;
