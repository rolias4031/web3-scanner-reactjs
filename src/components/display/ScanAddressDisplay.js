import React, { useContext } from 'react'
import AddressInfoContext from '../../store/AddressInfoContext'
import InfoItem from './InfoItem'

function ScanAddressDisplay (props) {
  // useContext hook
  const addressInfo = useContext(AddressInfoContext).addressInfo

  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col">
          {renderDisplayContent()}
        </div>
      </div>
    </div>
  )

  function renderDisplayContent () {
    let content
    if (addressInfo.address) {
      const items = Object.keys(addressInfo).map((key) => {
        return <InfoItem key={key} info={addressInfo[key]} title={key}/>
      })
      content = <div className="info-card p-2">{items}</div>
      return content
    }
  }
}

export default ScanAddressDisplay
