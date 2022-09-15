import React, {
  useEffect,
  useState,
  useRef,
  useReducer,
  useCallback,
} from "react";
 
  
   
  const handelTime = () => new Date().toLocaleTimeString()
  
  const handelDate =() =>new Date().toLocaleDateString();

export const    int= localStorage.tasks ? JSON.parse(localStorage.tasks) : []
export const    reducer = (state, action) => {
    switch (action.type) {
       
      case "addingToArr":  
          return [ 
            {
              id: Date.now(),
              content:action.payload.value,
              checked: "notChecked",
              t: handelTime(),
              d: handelDate(),
              s: "created in",
              color: `linear-gradient( 210deg,  ${action.payload.clr}
                ,
            rgba(252, 227, 213, 0.801))`,
            },
           ...state,
          ];
   
      case "update":
      return   state.map((ele) =>  {
           return ele.id == action.payload.id? {
                ...ele,
              t: handelTime(),
              d: handelDate(),
                checked: "notChecked",
                s: "updated in",
                content: action.payload.value,
              }
            : ele
        })
      case "delete":
        return state.filter((ele) => ele.id != action.payload);

      case "check":
        return state.map((ele) => {
          return ele.id == action.payload && ele.checked == "notChecked"
            ? {
                ...ele,
                t: handelTime(),
              d: handelDate(),
                checked: "checked",
                s: "checked in in",
              }
            : ele.id == action.payload && ele.checked == "checked"
            ? {
                ...ele,
               t: handelTime(),
              d: handelDate(),
                checked: "notChecked",
                s: "unchecked in in",
              }
            : ele;
        });
      case "deleteAll":
        return state.filter((e) => e.id == "kkk");

// case "up":
 // let  y=state.filter((e,i)=> action.payload==e.id)
// return
 // console.log(`y is `)
 // console.log(y)
 
 // console.log(`state is `)
 // console.log(state)

// let j=action.index
 // state.splice(j,1)

 // console.log(`state after is`)
 // console.log(state)

 // console.log(`i is ${action.index}`)
  // state.splice(j-1,0,y[0]);



      default:

        return state;
    }
  };
 