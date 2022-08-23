import React,{useState} from 'react'
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
    <div>
      {
        data.map((value) => {
          return(
            <ListCard key={value?.id} info={value}/> 
          )
        })
      }
    </div>
  )
}

export default Takliflar
