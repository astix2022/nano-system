import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 100px 100px 0px 100px;

    .steps{
        width: 100%;
    }

    .steps-content {
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    background-color: #fafafa;
    /* border: 1px dashed #e9e9e9; */
    border-radius: 2px;
    }

    .steps-action {
    margin-top: 24px;
    }
`

export {Container}