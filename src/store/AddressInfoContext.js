import React, { useState, useEffect, useReducer, useContext } from 'react'

import Web3Context from './Web3Context'

const AddressInfoContext = React.createContext({
  addressScanHandler: () => {},
  addressInfo: {
    address: '',
    balance: ''
  }
})

function addInfoReducer (prevState, action) {
  switch (action.type) {
    case 'address':
      return {...prevState, address: action.payload}
    case 'balance':
      return {...prevState, balance: action.payload}
    default:
      throw new Error()
  }
}
const initAddInfo = {
  address: '',
  balance: ''
}

export function AddressInfoContextProvider (props) {

  const web3 = useContext(Web3Context).web3

  const [addInfo, dispatchAddInfo] = useReducer(addInfoReducer, initAddInfo)

  return (
    <AddressInfoContext.Provider value={{
      addressScanHandler: addressScanHandler,
      addressInfo: {
        address: addInfo.address,
        balance: addInfo.balance
      }
    }}>
      {props.children}
    </AddressInfoContext.Provider>
  )

  function validateInputs (inputs) {
    if (inputs.trim().length === 0 || inputs.trim().length != 42) {
      return {valid: false, message: 'Address is either blank, too short, or too long'}
    } else {
      return {valid: true}
    }
  }

  async function addressScanHandler (addressInput) {
    // validate inputs
    const check = validateInputs(addressInput)
    if (!check.valid) {
      alert(check.message)
      return
    }
    // get balance, return formatted balance in ETH
    const balance = await (async (address) => {
      try {
        const rawBal = await web3.eth.getBalance(address, (err, wei) => {
          return web3.utils.fromWei(wei, 'ether')
        })
        const formattedBalance = `${rawBal.slice(0, rawBal.length-18)}.${rawBal.slice(rawBal.length-18)}`
        return formattedBalance
      } catch (err) {
        return err
      }
    })(addressInput)

    if (balance instanceof Error) {
      alert(balance)
      return
    }

    dispatchAddInfo({type: 'address', payload: addressInput})
    dispatchAddInfo({type: 'balance', payload: balance})
  }

}

export default AddressInfoContext
