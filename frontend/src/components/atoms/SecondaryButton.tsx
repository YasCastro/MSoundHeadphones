import React from 'react'
import '../../App.scss'


type SecondaryButtonProps  = {
  text: string;
}

function SecondaryButton(props: SecondaryButtonProps) {
  return (
    <div>
        <button className='secondaryButton'>{props.text}</button>
    </div>
  )
}


export default SecondaryButton