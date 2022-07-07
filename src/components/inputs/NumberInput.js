import { useState } from 'react'

function NumberInput (props) {

  return (
    <input
      type="number"
      className="form-control my-2"
      ref={props.refVal}
      min={1} max={50} />
  )

}

export default NumberInput
