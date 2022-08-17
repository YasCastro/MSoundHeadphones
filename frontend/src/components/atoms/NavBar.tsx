import React from 'react'
import Logo from '../atoms/Logo'

type NavBarProps={

}

function openMenu(){

}

function NavBar() {

    
  return (
    <div className='navBar'>
        <Logo/>
    <button onClick={openMenu} className='navButton'><svg width="40" height="40" viewBox="0 0 59 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M58.2394 21.4999C58.2394 19.9639 56.9942 18.7187 55.4582 18.7187H3.5415C2.00546 18.7187 0.760254 19.9639 0.760254 21.4999C0.760254 23.036 2.00546 24.2812 3.5415 24.2812H55.4582C56.9942 24.2812 58.2394 23.036 58.2394 21.4999Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M58.2394 2.95825C58.2394 1.42221 56.9942 0.177002 55.4582 0.177002H3.5415C2.00546 0.177002 0.760254 1.42221 0.760254 2.95825C0.760254 4.49429 2.00546 5.7395 3.5415 5.7395H55.4582C56.9942 5.7395 58.2394 4.49429 58.2394 2.95825Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M58.2394 40.0416C58.2394 38.5055 56.9942 37.2603 55.4582 37.2603H3.5415C2.00546 37.2603 0.760254 38.5055 0.760254 40.0416C0.760254 41.5776 2.00546 42.8228 3.5415 42.8228H55.4582C56.9942 42.8228 58.2394 41.5776 58.2394 40.0416Z" fill="white"/>
    </svg></button>
    </div>
  )
}

export default NavBar