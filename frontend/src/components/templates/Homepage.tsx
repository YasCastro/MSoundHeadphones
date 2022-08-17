import React from 'react'
import HomepageButtons from '../molecules/HomepageButtons'
import HomepageTexts from '../molecules/HomepageTexts'
import NavBar from '../atoms/NavBar'

function Homepage() {
  return (
    <div><NavBar/>
      <HomepageTexts/>
        <HomepageButtons/></div>
  )
}

export default Homepage