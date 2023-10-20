import React,{useState} from 'react'
import Extraction from './Extraction'
import Logo from "./logo.png"
import LoadingBar from 'react-top-loading-bar'

export default function Search() {
    const [inputvalue , setinputvalue] = useState('')
    const [progressbar , setprogressbar]  = useState(0)
    function inputchange(e){
        setinputvalue(e)
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
        <input type="text" onSubmit={enterkey} value={inputvalue} onChange={(e)=>inputchange(e.target.value)} placeholder='Search Image' name="" id="" />
      </form>
        </div>
      <Extraction settingtopbar= {setprogressbar} inputwords={inputvalue}/>
    </div>
  )
}
