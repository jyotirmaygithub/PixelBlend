import React from 'react'
import Search from '../Components/Search'
import SiteLogo from "../Components/MainLogo"
import ShowingData from "../Components/Extraction"

export default function Home() {
  return (
    <div>
      <SiteLogo/>
      <Search/>
      <ShowingData/>
    </div>
  )
}
