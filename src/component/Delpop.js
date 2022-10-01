import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Delpop({handleDelpopup,task,setdelall}) {

  const [isClicked,setIsClicked]=useState(false)
//is clicked every time starts false because when i click on dell all it rerenders
  console.log(`isClicked if ${isClicked}`)
  console.log("rendered")
  useEffect(()=>{

    if(!isClicked)return ;
    setTimeout(() => {
      setdelall(false)
    }, 600);
  },[isClicked])

  return (
    <div id="hh"
    className={isClicked==true?"active":"not-active"}
    >
    <div id="delpop"
    className={isClicked==true?"clicked":"not-clicked"}>
<h5>are you sure to delete all tasks?</h5>
<div><button onClick={()=>{handleDelpopup("del")
setIsClicked(true)

}
}
>delete all</button>
<button  onClick={()=>{handleDelpopup(task)
setIsClicked(true)
}
}>cancel</button></div>
    </div></div>
  )
}

export default Delpop