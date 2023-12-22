import React from 'react'
import Search from '../Components/Search'
import SiteLogo from "../Components/MainLogo"
import ShowingData from "../Components/Extraction"
import TopBtn from '../Components/topbtn'

export default function Home() {
  return (
    <div>
      <SiteLogo/>
      <Search/>
      <TopBtn/>
      <ShowingData/>
    </div>
  )
}
