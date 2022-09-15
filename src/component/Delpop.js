import React from 'react'

function Delpop({handleDelpopup,task}) {

  return (
    <div id="delpop">
<h5>are you sure to delete all tasks?</h5>
<div><button onClick={()=>handleDelpopup("del",false)
}
>delete all</button>
<button  onClick={()=>handleDelpopup(task,false)
}>cancel</button></div>
    </div>
  )
}

export default Delpop