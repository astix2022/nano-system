import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 350px;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    .input_name{
        width: 100%;
        height: 50px;
        padding: 2px 20px;
        border: 1px solid #9E9E9E;
        border-radius: 5px;
        outline: none;
        margin-bottom: 20px;
    }

    .tex_name{
        width: 100%;
        border: 1px solid #9E9E9E;
        border-radius: 5px;
        outline: none;
        padding: 10px 20px 0px 20px;
    }
`

export {Container,Wrapper}