import React from 'react'
import CustomHooks from './customHooks'
import B from './B'; 
import { createContext } from 'react';
 const BioData =   createContext(); // initializing context

function A() {
  return (
    <div>
      <BioData.Provider value="Usama Ali">
        <h2>{CustomHooks() ? "🟢" : "🔴" }</h2>
        <B/>
        </BioData.Provider>
    </div>
  )
}

export default A;
export  {BioData};