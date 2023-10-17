import React from 'react'
import Animation from '../core/Animation'

const Lodding = () => {
  return (
    <div className='container--responsve'>
    <h2>Lodding...</h2>
    <Animation height="80" width="80" animationData={"/assets/lotties/animation_7.json"} />

    </div>
  )
}

export default Lodding