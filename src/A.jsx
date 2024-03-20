import React from 'react'
import CustomHooks from './customHooks'

function A() {
  return (
    <div>
        <h2>{CustomHooks() ? "🟢" : "🔴" }</h2>
    </div>
  )
}

export default A