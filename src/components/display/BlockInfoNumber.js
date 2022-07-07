import React from 'react'

import InfoItem from './InfoItem'

function BlockInfoNumber (props) {
  return (
    <div className="row">
      <div className="col" align="left">
        <div className="mt-3">
          <h5>{props.blockNumber}</h5>
        </div>
        <div className="info-card p-2">
          {renderBlockInfo()}
        </div>
      </div>
    </div>


  )

  function renderBlockInfo () {
    const infoKeys = Object.keys(props.blockNumberInfo)
    let content = infoKeys.map((key) => {
      return <InfoItem key={key} title={key} info={props.blockNumberInfo[key]} />
    })
    return content
  }
}

export default BlockInfoNumber
