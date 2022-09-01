import React from 'react'
import { Container, Eye } from './style'

const HomeCard = ({data}) => {
  return (
    <Container>
        <h2 className='card-title'>
            {data?.title || "10-sinf  harbiy ko’rik jarayonida,ko'nikma hosil qilishmoqda."}
        </h2>
        <p className='card-dec'>
            {data?.dec || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur adipiscing tristique id cursus dictum blandit malesuada. Fermentum, turpis tortor pulvinar eget proin purus amet augue."}
        </p>
        <p className='card-date'>{data?.date || "17:58, 20.08.2022"}  | <Eye/> 1</p>
    </Container>
  )
}

export default HomeCard