import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: fit-content;
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
    height: fit-content;

    /* @media screen and (max-width:1006px) {
        display: flex;
        align-items: center;
        justify-content: center;
    } */
`

export {Container,Wrapper}
