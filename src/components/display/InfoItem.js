import React, { useContext } from 'react'

import AddressInfoContext from '../../store/AddressInfoContext'
import '../../Display.css'

function InfoItem (props) {

  const addressScanHandler = useContext(AddressInfoContext).addressScanHandler

  return (
    <React.Fragment>
      <span className="info-title">{renderTitle(props.title)}</span>
      <span className="info-item">
        {props.title === 'miner' ? renderMinerLink(props.info) : renderInfo(props.title, props.info)}
      </span>
      <br/>
    </React.Fragment>
  )

  function renderTitle (title) {
    return `${title.charAt(0).toUpperCase()}${title.slice(1)}`
  }

  function renderInfo (title, info) {
    if (title === 'size') {
      return `${info} bytes`
    } else if (title === 'timestamp') {
      return new Date(info * 1000).toLocaleTimeString('en-US')
    } else if (title === 'balance') {
      return `${info} ETH`
    } else {
      return info
    }
  }

  function renderMinerLink (info) {
    return <a onClick={clickHandler} className="address-link p-1">{info}</a>
  }

  function clickHandler (e) {
    e.preventDefault()
    console.log(e.target.innerHTML);
    addressScanHandler(e.target.innerHTML)
  }

}

export default InfoItem
