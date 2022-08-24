import React, { useState } from 'react';
import { Container } from './style'
import { Button, message, Steps } from 'antd';
import Photo from './Photo/index'
import Sarlavha from './Sarlavha/index'
import Bolim from './Bolim/index'
const { Step } = Steps;
const steps = [
  {
    title: 'First',
    content: <Photo/>,
  },
  {
    title: 'Second',
    content: <Sarlavha/>,
  },
  {
    title: 'Last',
    content: <Bolim/>,
  },
];

const Yuklash = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <Container>
      <div className='steps'>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">

      {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Oldingi
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Yuklash muofaqiyatli amalga oshrildi!')}>
            Yuklash
          </Button>
        )}
          {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Keyingi
          </Button>
        )}
      </div>
    </div>
    </Container>
  )
}

export default Yuklash