import React,{useState} from 'react'
import Extraction from './Extraction'
import Logo from '../Images/logo.png'
import { UserEnteredInput } from '../Context/SearchContext'
import LoadingBar from 'react-top-loading-bar'

export default function Search() {
    const [SearchInput , setSearchInput] = UserEnteredInput()
    const [progressbar , setprogressbar]  = useState(0)
    function inputchange(e){
        setSearchInput(e)
    }
    function enterkey(e){
      e.preventDefault()
    }
  return (
    <div>
      <LoadingBar
      color='#000000'
      height={3}
      progress={progressbar}
      onLoaderFinished={()=>{setprogressbar(0)}}
      
      />
        <div className='universal search-box'>
      <form className='universal' action="">
        <img src={Logo} alt="" />
        <input type="text" onSubmit={enterkey} value={SearchInput} onChange={(e)=>inputchange(e.target.value)} placeholder='Search Image' name="" id="" />
      </form>
        </div>
      {/* <Extraction settingtopbar= {setprogressbar} inputwords={SearchInput}/> */}
    </div>
  )
}
