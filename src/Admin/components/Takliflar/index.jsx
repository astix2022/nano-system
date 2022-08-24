import React,{useState} from 'react'
import { Container, Settings, TableSection, Wrapper,Icon,Categories } from './style'
import { useQuery } from 'react-query'
import ListCard from './ListCard'

const Takliflar = () => {
  const [data, setData] = useState([])
  useQuery(['get started', data], () => {
    return fetch(`http://nano-system.5p-agency.uz/api/v1/ceo/suggestions`).then(res => res.json())
  },
    {
      onSuccess: (res) => {
        setData(res?.suggestions || []);
      }
    })
  console.log(data);
  return (
    <Container>
        <Wrapper>
          <Settings>
            <div className='title'>
              <h1 className='sub-title'>Yangi arizalar ro’yxati</h1>
              <div><Icon.Chart/></div>
            </div>
            <div className='parametr'>
              <div className='count'>
                <span>{data?.length} ta</span>
                <span><button className='sort'>Buguni</button></span>
                <span><button className='sort'>Hammasi</button></span>
              </div>
              <div className='search'><input placeholder='search'/></div>
            </div>
            <div  className='hr'/>
          </Settings>
          <Categories>
            <div className='idraqam'>ID raqam</div>
            <div>Ism Familiya</div>
            <div>Taklid nomi</div>
            <div>Sana</div>
            <div className='read'>Taklifni o’qish</div>
          </Categories>
          <TableSection>
            {
              data.map((value) => {
                return(
                  <ListCard key={value?.id} info={value}/> 
                  )
                })
              }
          </TableSection>
        </Wrapper>
    </Container>
  )
}

export default Takliflar
