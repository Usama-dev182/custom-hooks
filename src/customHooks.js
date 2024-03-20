import React, { useEffect, useState } from 'react'

function CustomHooks() {
    const [online , setOnline] = useState(true);
    useEffect(() => {
        window.addEventListener('online', () => setOnline(true));
        window.addEventListener('offline' , () => setOnline(false));
    })
  return online
}
// Start little programs and records
// explain the product
// explain the cv
// explain your vision
// explain what is good life
export default CustomHooks;