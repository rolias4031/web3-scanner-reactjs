import React from 'react'

function AddressInput (props) {

  return (
    <React.Fragment>
      <input className="form-control my-2" type="text" name="" ref={props.refVal} />
    </React.Fragment>
  )
}

export default AddressInput
