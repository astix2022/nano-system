import React from 'react'
import { Container,Eye } from './style'
import NotImg from '../../../assets/imgs/notImg.png'

const GenericCard = ({data}) => {
  return (
    <Container>
        <div className='img'>
          {data?.img || <img className='notImg' src={NotImg}/>}
        </div>
        <div className='foter'>
            <h1 className='card-title'>{data?.title || '10-sinf  harbiy ko"rik jarayonida, ko"nikma hosil qilishmoqda.'}</h1>
            <p className='card-dec'>{data?.decription || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur adipiscing tristique id cursus dictum blandit malesuada. Fermentum, turpis tortor pulvinar eget proin purus amet augue."}</p>
            <p className='card-date'>{data?.date || "17:58, 20.08.2022"}  | <Eye/> 1</p>
        </div>
    </Container>
  )
}

export default GenericCard