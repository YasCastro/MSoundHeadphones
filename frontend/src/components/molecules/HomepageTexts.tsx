import React from 'react'
import '../../App.scss'
import PresentationText from '../atoms/PresentationText'
import DescriptionText from '../atoms/DescriptionText'


function HomepageTexts() {
  return (
    <div className='homepageTxt'>
      <div className='presentation'>         
        <PresentationText height="150" width="400" emphasis="people." regular1="The music of" 
        regular2="our "/>
      </div>
      <div className='description'>
        <DescriptionText text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."/> 
      </div>
      <div className='description'>
        <DescriptionText text="Exercitation veniam consequat sunt nostrud amet."/> 
      </div>
    </div>
  )
}

export default HomepageTexts