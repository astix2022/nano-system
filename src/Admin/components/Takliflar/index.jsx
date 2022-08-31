import React, {useEffect,useState,useMemo,useCallback} from 'react'
import { Container, Settings, TableSection, Wrapper, Icon, Categories } from './style'
import ListCard from './ListCard'
import NavDashboard from '../NavDashboard'
import { getData, delateIdData } from '../../../store/data'
import { useSelector, useDispatch} from 'react-redux'

const Takliflar = () => {
  const [boolean, setBoolean] = useState(false)

// delate id
  function delateId(id) {
    fetch(`http://nano-system.5p-agency.uz/api/v1/ceo/suggestion/${id}`, {
      method: 'DELETE',
      redirect: 'follow'
    }).then((res) => {
      res.json().then((resp) => {
      })
    })
  }

// delate all
  function delateAll() {
    fetch(`http://nano-system.5p-agency.uz/api/v1/ceo/suggestions`, {
      method: 'DELETE',
      redirect: 'follow'
    }).then((res) => {
      res.json().then((resp) => {
      })
    })
    alert('ochirildi')
  }
  // boolean Settings
  const booleanSettings =()=>{
    if(boolean === false)return setBoolean(!false)
    else if(boolean === true)return setBoolean(!true)
  } 

  // dispatch
  const dispatch = useDispatch()
  const data = useSelector((store)=> store.data.data.suggestions)
  useEffect(()=>{
    dispatch(getData())
  },[])
    // const mem = useMemo(()=>{
    // return 
    // },[])
  // const calback = useCallback(()=>{
    
  // },[])
  return (  
    <Container>
      <NavDashboard info={'Takliflar'} />
      <Wrapper>
        <Settings>
          <div className='title'>
            <h1 className='sub-title'>Yangi arizalar ro’yxati</h1>
            <div><Icon.Chart /></div>
          </div>
          <div className='parametr'>
            <div className='count'>
              <span>{data?.length} ta</span>
              <span><button className={boolean ? 'btn_bugungi_true' : 'btn_bugungi_false'} onClick={booleanSettings}>Buguni</button></span>
              <span><button className={boolean ? 'btn_hammasi_true' : 'btn_hammasi_false'} onClick={booleanSettings}>Hammasi</button></span>
            </div>
            <div className='search'><input placeholder='search' /></div>
          </div>
          <div className='hr'/>
        </Settings>
        <Categories>
          <div className='idraqam'>ID raqam</div>
          <div className='ismFamilya'>Ism Familiya</div>
          <div className='taklifNomi'>Taklid nomi</div>
          <div className='sana'>Sana</div>
          <div className='read'>Taklifni o’qish</div>
          <div className='ochirish'>O'chrish</div>
        </Categories>
        <TableSection>
          {
            data?.map((value) => {
              return (
                <ListCard key={value?.id} info={value}  onClick={()=> dispatch(delateIdData({id:value.id}))}/>
              )
            })
          }
          <button className='btn_alldelate' onClick={() => delateAll()}>all delate</button>
        </TableSection>
      </Wrapper>
    </Container>
  )
}
export default (Takliflar)
