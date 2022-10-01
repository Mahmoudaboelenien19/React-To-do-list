import React, { memo } from 'react'
import { useEffect } from 'react';

const Pop = ({color,msg}) => {



  return (
    <div>


<div key={Math.random()}  id="vald" 

className="visible" style={{ background: 
`        linear-gradient(135deg,rgba(255, 255, 255, 0.753),${color}
`    }}>
           
   {color=="green"? <i className="bi bi-check2"></i>: <i className="bi bi-exclamation-circle-fill"></i> } {msg}
</div> 

    </div>
  )
}

export default memo(Pop)