import React, { useState, useEffect } from 'react'
import Web3 from 'web3'

const url = 'https://mainnet.infura.io/v3/25d9ebfebc264defaf34b9fa1d6e217b'

const options = {
  "method": "GET",
  "hostname": "rest.coinapi.io",
  "path": "/v1/exchangerate/BTC/USD",
  "headers": {'X-CoinAPI-Key': '73034021-THIS-IS-SAMPLE-KEY'}
};

const Web3Context = React.createContext({
  web3: ''
})

export function Web3ContextProvider (props) {

  const [web3, setWeb3] = useState('')
  const [coinAPI, setCoinAPI] = useState('')

  useEffect(() => {
    setWeb3(new Web3(url))
  }, [url])

  return (
    <Web3Context.Provider value={{
        web3: web3
      }}>
      {props.children}
    </Web3Context.Provider>
  )

}

export default Web3Context
