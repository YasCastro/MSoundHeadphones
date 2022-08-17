import React from 'react'
import '../../App.scss'


type PrimaryButtonProps  = {
  text: string;
}

function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <div>
        <button className='primaryButton' 
        >{props.text}</button>
    </div>
  )
}

export default PrimaryButton