import React from 'react'
import '../../App.scss'


type PresentationTextProps  = {
    regular1: string;
    regular2: string;
    emphasis: string;
    width: string;
    height: string;

  }
function PresentationText(props: PresentationTextProps) {
  return (
    <div style={{width: props.width, height:props.height}}><h1 className='regular'>{props.regular1}</h1>
    <br/><h1 className='regular'>{props.regular2}</h1><h1 className='emphasis'>{props.emphasis}</h1></div>
  )
}

export default PresentationText