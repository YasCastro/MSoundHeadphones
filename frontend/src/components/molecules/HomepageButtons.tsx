import React from 'react'
import '../../App.scss'
import PrimaryButton from '../atoms/PrimaryButton'
import SecondaryButton from '../atoms/SecondaryButton'


function HomepageButtons() {
  return (
    <div className='homepageAlign'>
      
      
    <PrimaryButton text="BUY NOW"/>
    <SecondaryButton text="LEARN MORE" color="#FCFCFC"/>
    </div>
  )
}

export default HomepageButtons