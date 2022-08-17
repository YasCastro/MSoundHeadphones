import React from 'react'
import "../../App.scss"

type DescriptionTextProps = {
    text: string;
}

function DescriptionText(props : DescriptionTextProps) {
  return (<>
    <h3>{props.text}</h3></>
  )
}

export default DescriptionText