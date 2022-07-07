import React, { useContext } from 'react'
import BlockInfoContext from '../../store/BlockInfoContext'
import InfoItem from './InfoItem'
import BlockInfoNumber from './BlockInfoNumber'

function BlockInfoDisplay () {

  const blockInfo = useContext(BlockInfoContext).blockInfo

  return (
    <div className="container my-3">
      {renderHeaderContent()}
      {renderBlockNumbers()}
    </div>
  )

  function renderBlockNumbers () {
    let content
    console.log(blockInfo);
    const blockInfoKeys = Object.keys(blockInfo)
    if (blockInfoKeys.length > 0) {
      content = blockInfoKeys.map((key) => {
        return <BlockInfoNumber key={key} blockNumber={key} blockNumberInfo={blockInfo[key]}/>
      })
    }
    return content
  }

  function renderHeaderContent () {
    if (Object.keys(blockInfo).length > 0) {
      return <p>{`Showing last ${Object.keys(blockInfo).length} blocks`}</p>
    } else {
      return
    }
  }
}

export default BlockInfoDisplay
