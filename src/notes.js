// import React, { useState, useEffect, useRef, createContext } from "react";
// // import Tasks from './Tasks'
// export const TaskContext = createContext();

// //
// const Main = () => {
// const [change, setchange] = useState(false);

// const [arr, setArr] = useState(
// localStorage.task ? JSON.parse(localStorage.task) : []
// );

// // // setting current time
// // const xx = new Date().toLocaleTimeString()
// // const [ctime,setx] = useState(xx); 
// // const handelTime = () =>{    
// // const xx = new Date().toLocaleTimeString()
// // setx(xx);
// // }

// // // setting current date
// // let dt = new Date().toLocaleDateString();
// // const [cdate,setDate] = useState(dt); 
// // const handelDate = () =>{
// // let dt = new Date().toLocaleDateString();
// // setDate(dt);
// // }

// const [Mode, setMode] = useState("create");
// const [update, setupdate] = useState();
// // const inp = useRef();
// // const btn = useRef();
// // const x = useRef();

// const addToArr = () => {
// if (Mode == "create") {
// if (inp.current.value != "") {
// x.current = {
// id: Date.now(),
// content: inp.current.value,
// checked: "notChecked",
// t: ctime,
// d: cdate,
// s: "created in",
// };
// if (arr != null) {
// setArr([x.current, ...arr]);
// } else {
// setArr([x.current]);
// }
// }
// setchange(true);
// inp.current.value = "";
// } else {
// setArr(
// arr.map((ele) => {
// return ele.id == update
// ? {
// ...ele,
// t: ctime,
// d: cdate,
// checked: "notChecked",
// s: "updated in",
// content: inp.current.value,
// }
// : ele;
// })
// );

// localStorage.setItem("task", JSON.stringify(arr));
// setMode("create");
// btn.current.innerHTML = "Add Tasks";
// inp.current.value = "";
// }
// };
// if (arr != []) {
// localStorage.setItem("task", JSON.stringify(arr));
// }

// return (
// <TaskContext.Provider value={arr}>
// <div id="main">
// {/* <form
// onSubmit={(e) => {
// handelTime()
// e.preventDefault();
// addToArr();
// }}
// className="input-group justify-content-center "
// >
// <input ref={inp} type="text" className="input-group w-75 mt-3 px-2" />
// <div
// ref={btn}
// className="btn btn-outline-dark mt-3"
// onClick={() => {
// handelTime()
// addToArr()
// }

// }
// >add tasks</div>
// </form> */}
// <div>
// {arr.map((e) => {
// return (
// <div className="task-added  " key={Math.random()}>
// <div className="content">
// {" "}
// <p className={e.checked}> {e.content}</p>
// <p> {`${e.s} ${e.d} & ${e.t}`}</p>
// </div>
// <div id="icons">
// <i
// className="bi bi-check"
// onClick={() => {
// handelDate()
// handelTime()
// const id = e.id;
// setArr(
// arr.map((ele) => {
// return ele.id == id && ele.checked == "notChecked"
// ? {
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
// })
// );

// localStorage.setItem("task", JSON.stringify(arr));
// }}
// ></i>
// <i
// className="bi bi-pencil-square"
// onClick={() => {
// handelDate()
// handelTime()
// inp.current.value = e.content;
// inp.current.focus();
// setMode("update");
// setupdate(e.id);
// btn.current.innerHTML = "UPDATE";
// }}
// ></i>
// <i
// className="bi bi-trash3 "
// id={e.id}
// onClick={() => {
// const id = e.id;
// setArr(arr.filter((ele) => ele.id !== id));

// localStorage.setItem("task", JSON.stringify(arr));
// }}
// ></i>
// </div>{" "}
// </div>
// );
// })}
// </div>
// </div>
// </TaskContext.Provider>
// );
// };

// // export default Main;
