import React, { useState } from 'react';

import './app.css'

const app = () =>{
  const [set, setMessage] = useState('hello word');
  
  return(
  <>
    <div className="container">{message}</div>
    <button onClick = {() => setMessage("heloooooooooooooooooooooo")} >mudar mensagen</button>
  </>
  )
};

export default app;