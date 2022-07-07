import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import './App.css';

import ScanAddressForm from './components/inputs/ScanAddressForm'
import ScanAddressDisplay from './components/display/ScanAddressDisplay'
import BlockInfoForm from './components/inputs/BlockInfoForm'
import BlockInfoDisplay from './components/display/BlockInfoDisplay'

import { AddressInfoContextProvider } from './store/AddressInfoContext'
import { BlockInfoContextProvider } from './store/BlockInfoContext'

function App() {

  return (
    <div className="container my-5">
    <div className="row justify-content-center">
    <div className="col" align="center">

      <AddressInfoContextProvider>
          <ScanAddressForm />
          <ScanAddressDisplay />

        <BlockInfoContextProvider>
          <BlockInfoForm />
          <BlockInfoDisplay />
        </BlockInfoContextProvider>
        
      </AddressInfoContextProvider>


    </div>
    </div>
    </div>
  );

}

export default App;
