import React from 'react'
import { Link } from 'react-router-dom'
import Wallpaper from "./wallpaper_FILL0_wght400_GRAD200_opsz48.png"

export default function Nav() {
  return (
    <div className='universal nav-one'>
      <Link to="*">
      </Link>
      <img src={Wallpaper} alt="" />
      <h1>Wallpaper Studio</h1>
    </div>
  )
}


