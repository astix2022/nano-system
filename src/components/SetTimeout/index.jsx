import React from 'react'

const SetTimeout = () => {
  return <div>{
        setTimeout(()=>{
            alert("All ok");
        },3000)
    }</div>;
}

export default SetTimeout