import React from 'react'
import { useState } from 'react';
function useCounter() {
    const [counter, setCounter] = useState(0);
    function Increment() {
        return setCounter(counter + 1)
    }
    function Decrement() {
        return setCounter(counter - 1)
    }
  return {counter, Increment}
}

export default useCounter;