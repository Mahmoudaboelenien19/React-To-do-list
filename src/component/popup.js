import React, {  memo, useEffect, useRef } from 'react'
import Pop from './pop';

function Popup({pop,setpop}) {

const vald=useRef()

 
// useEffect(()=>{
    
//   const timer = setInterval(()=>{
//       setpop(pop=>pop.filter(i=>i.timeRemaining>0).map((item)=>{
//       return {
//         ...item, timeRemaining: item.timeRemaining - 2
//       }
//     }))
//   },2000)
//   return () => clearInterval(timer);
// },[])

    // useEffect(()=>{setTimeout(() => {
    //   setpop(pop => pop.filter((e) =>e)).map((item)=>{
    //           return {
    //             ...item, timeRemaining: item.timeRemaining - 2
    //           }
    //         })
    // }, 2000);}
    // ,[])
  return (
 
  )
}

export default Popup