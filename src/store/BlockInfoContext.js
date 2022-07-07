import React, { useState, useEffect, useReducer, useContext } from 'react'
import Web3Context from './Web3Context'

const BlockInfoContext = React.createContext({
  blockInfo: {}
})

function blockInfoReducer (prevState, action) {
  if (action.reset) {
    return {}
  } else {
    const obj = {
      ...prevState,
      [action.block]: {
        ...prevState[action.block],
        [action.key]: action.payload
      }
    }
    return obj
  }
}

export function BlockInfoContextProvider (props) {

  const [blockInfo, dispatchBlockInfo] = useReducer(blockInfoReducer, {})
  const web3 = useContext(Web3Context).web3

  return (
    <BlockInfoContext.Provider value={{
      blockInfo: blockInfo,
      fetchBlocksHandler: fetchBlocksHandler
    }}>
      {props.children}
    </BlockInfoContext.Provider>
  )

  function validateInputs (inputs) {
    if (inputs.trim().length === 0) {
      return {valid: false, message: 'Enter a number greater than 1'}
    } else {
      return {valid: true}
    }
  }

  async function fetchBlocksHandler (numInput) {
    // validate inputs
    const check = validateInputs(numInput)
    if (!check.valid) {
      alert(check.message)
      return
    }

    // clear previous blockInfo
    dispatchBlockInfo({reset: true})
    // end result of this function = adding all data to blockInfo reducer = object of objects
    console.log('BIC', web3, numInput);

    // get number of latest block
    const latestBlock = await web3.eth.getBlockNumber()
    console.log(latestBlock);

    // starting from latest block and counting down from numInput, store that block info in blockArray
    const blockArray = []
    for (let i = 0; i < numInput; i++) {
      const n = parseInt(latestBlock) - i
      const block = await web3.eth.getBlock(n, false, (err, obj) => {
        return obj
      })
      blockArray.push(block)
    }
    console.log(blockArray);

    // loop through each block obj and update reducer with keys in keyArray
    // blockInfo = {block.number: [array keys]: [block values]}
    const keyArray = ['miner', 'nonce', 'size', 'timestamp', 'transactions']
    for (const block of blockArray) {
      for (const key of keyArray) {
        dispatchBlockInfo({
          block: block.number,
          key: key,
          payload: key !== 'transactions' ? block[key] : block[key].length
        })
      }
    }
  }
}

export default BlockInfoContext
