import React, { useRef,useState  } from 'react'

function Input() {
    const inp = useRef();
const btn = useRef();
const x = useRef();
    // setting current time
    const [change, setchange] = useState(false);

const [arr, setArr] = useState(
localStorage.task ? JSON.parse(localStorage.task) : []
);
const [update, setupdate] = useState();

const xx = new Date().toLocaleTimeString()
const [ctime,setx] = useState(xx); 
const handelTime = () =>{    
const xx = new Date().toLocaleTimeString()
setx(xx);
}

// setting current date
let dt = new Date().toLocaleDateString();
const [cdate,setDate] = useState(dt); 
const [Mode, setMode] = useState("create");

const handelDate = () =>{
let dt = new Date().toLocaleDateString();
setDate(dt);
}

const addToArr = () => {
if (Mode == "create") {
if (inp.current.value != "") {
x.current = {
id: Date.now(),
content: inp.current.value,
checked: "notChecked",
t: ctime,
d: cdate,
s: "created in",
};
if (arr != null) {
setArr([x.current, ...arr]);
} else {
setArr([x.current]);
}
}
setchange(true);
inp.current.value = "";
} else {
setArr(
arr.map((ele) => {
return ele.id == update
? {
...ele,
t: ctime,
d: cdate,
checked: "notChecked",
s: "updated in",
content: inp.current.value,
}
: ele;
})
);
}
  return (
    <div>
        
        <form
onSubmit={(e) => {
e.preventDefault();
}}
className="input-group justify-content-center "
>
<input ref={inp} type="text" className="input-group w-75 mt-3 px-2" />
<div
ref={btn}
className="btn btn-outline-dark mt-3"
onClick={() => {
handelTime()
handelDate()
addToArr()
}

}
>add tasks</div>
</form>
<div>hhh</div>
    </div>
  )
}
}
export default Input