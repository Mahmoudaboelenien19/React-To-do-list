import React, { useEffect, useRef } from 'react'

function Popup({color,msg}) {
const vald=useRef()

 
    
    
  return (
    <div   id="vald" ref={vald}
    className="visible" style={{ background: 
`        linear-gradient(135deg,rgba(255, 255, 255, 0.753),${color}
`    }}>
               
       {color=="green"? <i className="bi bi-check2"></i>: <i className="bi bi-exclamation-circle-fill"></i> } {msg}
    </div>
  )
}

export default Popup