import React from 'react'
import Spin from '../Images/loading.gif'

export default function Spinner() {
  return (
    <div className='universal spin-box'>
      <img src={Spin} alt="spinner for spin" />
    </div>
  )
}
