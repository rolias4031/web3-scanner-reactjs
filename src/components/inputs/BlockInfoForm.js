import React, { useContext, useRef } from 'react'

import SearchButton from './SearchButton'
import NumberInput from './NumberInput'
import BlockInfoContext from '../../store/BlockInfoContext'

function BlockInfoForm () {
  const buttonTitle = 'Fetch Blocks'
  const fetchBlocksHandler = useContext(BlockInfoContext).fetchBlocksHandler
  const numberInputRef = useRef()

  return (
    <React.Fragment>
      <form onSubmit={submitHandler} className="form-control">
        <NumberInput refVal={numberInputRef} />
        <SearchButton title={buttonTitle} />
      </form>
    </React.Fragment>
  )

  async function submitHandler (e) {
    e.preventDefault()
    console.log(numberInputRef.current.value);
    fetchBlocksHandler(numberInputRef.current.value)
  }
}

export default BlockInfoForm
