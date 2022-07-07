import React, { useRef, useReducer, useContext } from 'react'
import Web3 from 'web3'

import SearchButton from './SearchButton'
import AddressInput from './AddressInput'

import Web3Context from '../../store/Web3Context'
import AddressInfoContext from '../../store/AddressInfoContext'

function ScanAddressForm (props) {
  const buttonTitle = 'Scan Address'
  const web3 = useContext(Web3Context).web3
  const addressScanHandler = useContext(AddressInfoContext).addressScanHandler

  const addressInputRef = useRef()

  return (
    <React.Fragment>
      <form onSubmit={submitHandler} className="form-control">
        <AddressInput refVal={addressInputRef}/>
        <SearchButton title={buttonTitle}/>
      </form>
    </React.Fragment>
  )

  async function submitHandler (e) {
    e.preventDefault()
    console.log(web3);
    addressScanHandler(addressInputRef.current.value)

  }

}

export default ScanAddressForm
