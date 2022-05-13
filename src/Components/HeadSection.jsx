import React from 'react'
import Banner from './Banner'
import HomePic from './HomePic'
import SearchBar from './SearchBar'

export default function HeadSection() {
  return (
    <div className='bg-dark' style={{height: '120vh', marginBottom: "150px"}}>
      <SearchBar/>
      <Banner/>
      <HomePic/>
    </div>
  )
}
