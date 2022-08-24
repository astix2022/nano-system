import React from 'react'
import {Container,Wrapper,Sending,Icon,Result,List} from './style'
const Photo = () => {
  return (
    <Container>
      <Wrapper>
        <Sending>
          <input className='input_file' id='file' accept='image/*' type="file"  />
          <label className='label_wrap' for = "file">
            <Icon.Sending/>
            <span className='label_title'>Yuborish</span>
          </label>
        </Sending>
        <Result>
          <p className='result_title'>Yuklandi:</p>
          <List>

          </List>
        </Result>
      </Wrapper>
    </Container>
  )
}

export default Photo