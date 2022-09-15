// import React, { memo, useContext,useEffect,useReducer,useRef,useState } from 'react'
// import { ProductContext } from './MainInp'
//  const Task=()=> {
// // localStorage.task ? JSON.parse(localStorage.task) : []
// // );  


// {/* <ProductContext.Provider value={[rr,ctime,cdate,handelDate,handelTime]}></ProductContext.Provider>
//     const hhh=useContext(ProductContext)
//    const [xxx,ctime,cdate,handelDate,handelTime]=hhh 
//   const [arr, setArr] = useState([])


// useEffect(()=>{
// setArr(xxx)
// },[xxx]) */}





// const todoReducer=(state,action)=>{
//   switch(action.type){
//   case "delete":

//   return  setArr((arr.filter((ele) => ele.id != action.payload))) ;
//   default:
//     return state;
// }}// 

// const [tasks, dispatch] = useReducer(todoReducer,arr) 
//  useEffect(()=>{
//   console.log(  arr)
// console.log(tasks)},[xxx])
// return (
//     <div>
// {  
// arr.map((e) => {
//   return(
// <div className="task-added  " key={Math.random()}>
// <div className="content">

// <p className={e.checked}> {e.content}</p>
// <p> {`${e.s} ${e.d} & ${e.t}`}</p>
// </div>

//  <div id="icons">
// {/* <i
// className="bi bi-check"
// onClick={() => {
// handelDate()
// handelTime()

// const id = e.id;
// console.log(e.id)
// setArr( arr.map((ele) => {
// return ele.id == id && ele.checked == "notChecked"? {
// ...ele,
// t: ctime,
// d: cdate,
// checked: "checked",
// s: "checked in in",
// }
// : ele.id == id && ele.checked == "checked"
// ? {
// ...ele,
// t: ctime,
// d: cdate,
// checked: "notChecked",
// s: "unchecked in in",
// }
// : ele;
// }))
// ; */}

// {/* // localStorage.setItem("task", JSON.stringify(arr)); */}
// {/* }}></i> */}

// <i
// // className="bi bi-pencil-square"
// // onClick={() => {
// // handelDate()
// // handelTime()
// // inp.current.value = e.content;
// // inp.current.focus();
// // setMode("update");
// // setupdate(e.id);
// // btn.current.innerHTML = "UPDATE";
// // }}
// ></i>
// <i
// className="bi bi-trash3 "

// onClick={()=>{dispatch({type:"delete",payload:e.id})
// console.log(e.id)

// // localStorage.setItem("task", JSON.stringify(arr))
// }}
// >

// </i>
// </div>
// </div>

// )})}
// </div>

// );
//  }


// export default memo(Task)