import styled from "styled-components";

const Container = styled.div`
padding: 0px 100px;
margin-top: 95px;
margin-bottom: 50px;

.sub-title::after{
    content: 'ytuqlari';
    color: var(--primaryColor);
}

/* swiper-controls */
.swiper{
    height: 290px;
}

.swiper-button-next{
    display: none;
}

.swiper-button-prev{
    display: none;
}

.swiper-pagination{
    top: 265px;
    justify-content: space-between;
}

.swiper-slide{
    width: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.swiper-pagination-bullet-active{
    background-color: #066AC9;
}

`
const Card = styled.div`
    width: 150px;
    width: 100%;
    height: 250px;
    border-radius: 12px;

    .noImg{
        user-select: none;
        width: 100%;
        border-radius: 12px;
    }

`

const Des = styled.div`
    width: 100%;
    height: 68px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(90deg, #0152AE 30.59%, rgba(102, 138, 183, 0.7) 65.51%, rgba(201, 193, 193, 0) 100%);
    border-radius: 0px 0px 12px 12px;
    position: absolute;
    padding: 32px 15px;
    top: 133px;

    .des-text{
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    color: #ffffff;
    }

    .des-date{
    font-weight: 300;
    font-size: 10px;
    line-height: 15px;
    color: #ffffff;
    }
`

export  {Container,Card,Des}