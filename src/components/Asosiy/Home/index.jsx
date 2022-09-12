import React from 'react'
import {Container,Wrapper,WrapLeft,WrapRight,Imgs,Result,Title,Icon} from './style'
import photo from '../../../assets/imgs/photo1.png'
import HomeCard from '../HomeCard'
import Cards from './Cards'
const Asosiy = () => {
  return (
    <Container>
      <Wrapper>
        <WrapLeft>
          <Imgs><img className='des_img' src={photo} alt="img" /></Imgs>
          <Title>
            <h1 className='title_title'>Bu yilgi bitiruvchilarimizning deyarli hammasi oliy o’quv yurtiga qadam qo’yishdi.</h1>
            <p className='title_des'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur adipiscing tristique id cursus dictum blandit malesuada. Fermentum, turpis tortor pulvinar eget proin purus amet augue.
            </p>
            <Result>
              <p className='result_date'>17:58, 20.08.2022</p>
              <div className='border'></div>
              <div className='viewed'>
                <Icon.Eye/>
                <p className='viewed_des'>204</p>
              </div>
            </Result>
          </Title>
        </WrapLeft>
        <WrapRight>
          <div className='wrap'>
            <h1 className='title_des'>SO'NGI YANGILIKLAR</h1>
              <div className='cards'>
                <HomeCard/>
                <HomeCard/>
                <HomeCard/>
              </div>
          </div>
        </WrapRight>
      </Wrapper>
      <div className='card'>
      <Cards/>
      </div>
    </Container>
  )
}

export default Asosiy