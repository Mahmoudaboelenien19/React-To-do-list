import React, {
  useEffect,
  useState,
  useRef,
  useReducer,
  useCallback,
} from "react";
import Delpop from "./Delpop";
import Popup from "./popup";

import {reducer,int} from "./actionReducer"
function MainInp() {
 
  const btn = useRef();
  const inpp = useRef();
  const delAll = useRef();
  const placeholderRef = useRef();

  const [checked, setchecked] = useState(false);
  const [disappear, setdis] = useState(false);
  const [style, setStyle] = useState("block");
  
  
  
  
  const [pop, setpop] = useState({
    shown:false,
    color:"",
    msg:""
  });

  const handlepop=(shown=false,color='',msg='')=>{
    setpop({shown,color,msg})   
 
  }

useEffect(()=>{

 
const timeout=setTimeout(() =>{
     handlepop(false)  },4000);
   
 
  return ()=>clearTimeout(timeout)
},[pop.shown])



  useEffect(() => {
    // console.log("main rendered");
    setchecked(false);
  });
  
  
 

  const [update, setupdate] = useState();

  const [Mode, setMode] = useState(true);
  useEffect(() => {
    if (Mode ) {
      placeholderRef.current.innerHTML = "insert a task ...";
    } else {
      placeholderRef.current.innerHTML = "update the task ...";
    }
  }, [Mode]);
  
  useEffect(() => {
    if (style=="none") {
      inpp.current.blur();
    } else {
      inpp.current.focus();
    }
  }, [style]);


const [placeholder,setPlaceholder]=useState("")

  const [task, dispatch] = useReducer(reducer, int);

  // remove checked icon when updating
  const check = useRef(task.map(() => React.createRef()));

  useEffect(() => {
    if (!disappear) return;
    Object.values(check.current[task.indexOf(update)])[0].style.display =
      "none";
  }, [disappear, update, checked]);

  // save array in local
  

  const opOneRef = useRef();
  const opTwoRef = useRef();

  const [filtered, setFiltered] = useState( "three");

  const [shown, setshown] = useState(task);



  useEffect(() => { 
 
    opTwoRef.current.innerHTML=`Done :  ${task.filter((e) => e.checked == "checked").length}`
   opOneRef.current.innerHTML=`Undone :  ${task.filter((e) => e.checked == "notChecked").length}`
   if(filtered == "one"){ setshown(task.filter((e) => e.checked == "notChecked"))

  }
      else if(   filtered == "two") { setshown( task.filter((e) => e.checked == "checked")) 
     

    }
     else if(filtered == "three"){setshown(task)} ;
     
  
  }, [filtered,task]);


  const[indexUp,setindexUp]=useState()
 
 
   const [goUp, setgoUp] = useState('one');

useEffect(()=>{
    
    // because i dont want this code works at start because  indexUp is undefined
  if(goUp=='one')return;
  const element= task!=[]?shown[indexUp]:''

  shown.splice(indexUp,1)

if(goUp){shown.splice((indexUp-1),0,element)}
else if(!goUp){shown.splice((indexUp+1),0,element)}
   // console.log(shown)
   setshown(shown)
   setgoUp('one')
   setindexUp("")
   localStorage.setItem("tasks", JSON.stringify(shown))
},[indexUp])



// start with color Options

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
 const arrClrs = ["red", "green", "darkblue", "blueviolet", "yellow"]; 
 
const colors={
    one:"darkblue",
	two: arrClrs[Math.floor(Math.random() * arrClrs.length)],
	three:`#${randomColor()}`}
    
      // getting selected color option from local if avaiable or make one as default value
 const [clrOption, setClrOption] = useState(
    localStorage.color ? localStorage.getItem("color") : "one");
    

  // save selected color option in local
  useEffect(() => {
    localStorage.setItem("color", clrOption);
  }, [clrOption]);


 const clrSelected=(id)=>{
setClrOption(id)
		  }         
                    // end with clr options
                   
                   
                    
  const handleCreate = () => {
    if (Mode ) {
      {
        dispatch({ type: "addingToArr",
        payload:{value: inpp.current.value,clr:colors[clrOption]} });
      }
     setFiltered("three")
      handlepop(true,"green",`added`)

    }
  };

  const handleUpdate = () => {
    if (!Mode ) {
      {
        dispatch({ type: "update", payload:{value:inpp.current.value ,id:update.id }});
       setMode(true);
      }
      handlepop(true,"green",`updated`)
    }        
  };
  
  
useEffect(() => {  
   localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const [delall,setdelall]=useState(false)
// x=task,s
  const handleDelpopup=(s=shown,x)=>{  
    
    setTimeout(() => {
      setdelall(false)   
      if( s!="del")   return   handlepop(false)   ;
      dispatch({ type: "deleteAll" })}, 0);
      handlepop(true,"green",`all deleted`)
}




          
  return (
    <div>
    {delall&&<div id="hh"></div>}
      <div className="row  g-0 mx-auto" id="main">  
      {pop.shown&& <Popup {...pop}/>} 
        <div className="col-8 w-100">
        
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="input-group  w-100 mx-auto   mt-5  justify-content-center"
            >
      
      <div className={`input  ${style}`}
     >
            <input  className="rounded-start" 
              onChange={(e) => {
                e.target.value.length > 0 ? setPlaceholder("top") : setPlaceholder("none") 
              }}
              onFocus={() => {
 setTimeout(()=>   {placeholderRef.current.style.display = "block"},500)
             
              }}
              onBlur={() => {
                setStyle("none");
                setMode(true);
                placeholderRef.current.style.display = "none";
setPlaceholder("")  
  setdis(false)
                inpp.current.value = "";
              }}
              // style={{ display: style }}
              ref={inpp}
              type="text"

            />
              <div className={placeholder}
              id="placeholder"
           
              style={{ display: "none" }}
              ref={placeholderRef}
            >
            
            </div>
            </div>
          
            <button
              ref={btn}
              className="btn btn-danger rounded-0  shadow-none"
              onClick={() => {
                if (inpp.current.value.length == 0) {              
                handlepop(true,"red",`add a task plz`)

                  return;
                }
                if (inpp.current.value.length > 25) {
                  handlepop(true,"red",`you can't exceed 25 letters`)
                  return;
                }
                if (inpp.current.value.length < 25) {
              
                  handleCreate();
                  handleUpdate();
                  inpp.current.value = "";
                  setPlaceholder("") 
                }
              }}
              onMouseDown={(e) => e.preventDefault()}
              onMouseEnter={() => {
                setStyle("block");
              }}
            >
{Mode?(<div>add tasks <i className="bi bi-arrow-bar-right"></i></div>):(<div>update <i className="bi bi-arrow-left-right"></i></div>)}            </button>
          </form>
        </div>
      </div>
      <div className="container w-75">
        <div className="row g-0 mx-auto mt-3 mb-1  justify-content-between">
          <div className="col-4 col-md-3 col-lg-3 " id="arrow">
             <span></span>
             <select
            id="filtered"
              onChange={(e) => setFiltered(e.target.value)}
              value={filtered}
              className="form-select w-75 h-100 form-select-lg w-100 shadow-none"
              aria-label=".form-select-lg example"
            >
            
              <option value="two" ref={opTwoRef}>  </option>
              <option value="one" ref={opOneRef}> </option>
              <option value="three"> Filter</option>
            </select>
          </div>
          
        </div>

        <div className="row w-100 mx-auto" id="task-container">
          <div className="task-top">
        <div className="clr"> 
          <div   className={clrOption=="one"&&"active"}  id="one" onClick={(e)=>clrSelected(e.target.id)}></div>
          <div   className={clrOption=="two"&&"active"}  id="two" onClick={(e)=>clrSelected(e.target.id)}></div>
          <div  className={clrOption=="three"&&"active"}  id="three" onClick={(e)=>clrSelected(e.target.id)}></div>  </div>
         
         {task.length>1&&        <div
            ref={delAll}
            onClick={() => {

              setdelall(true)
              // handleDelpopup()
             

            }}
            className="col-5 col-md-4 col-lg-3 mt-1"
          >
           {delall?<Delpop handleDelpopup={handleDelpopup} task={task}/>:""}

            <div className="btn btn-danger h-100 d-flex align-items-center justify-content-center  w-100 shadow-none">
              <span>Delete All ({task.length})   </span>   
              </div>
          </div>} </div>
        
       
          {task.length == 0 ? (
            <div id="no-data" className="w-100 my-auto  text-dark text-center ">
              There is no data to show
            </div>
          ) : (
            shown.map((e, i) => {
              return (
                <div
                  style={{ background: e.color }}
                  className="  col-10 col-md-9 task-added mx-auto"
                  key={Math.random()}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <div className="content">
                    <p className={e.checked}> {e.content}</p>
                    <p> {`${e.s} ${e.d} & ${e.t}`}</p>
                  </div>

                  <div id="icons">
                    <div className="process">
                      <i
                        className="bi bi-pencil-square"
                        onClick={() => {
                          setdis(true);
                          inpp.current.value = e.content;
                          setMode(false);
                          setupdate(e);
                             setStyle("block");

setPlaceholder("top") 
                       
                        }}
                        onMouseDown={(e) => e.preventDefault()}
                      ></i>
                      <span>update
      </span>              </div>
                    <div ref={check.current[i]} className="process">
                      <i
                        className="bi bi-check"
                        data-check={e.id}
                        onClick={() => {
                          dispatch({ type: "check", payload: e.id });
                      
                          setchecked(disappear ? true : false);
                        }}
                        onMouseDown={(e) => e.preventDefault()}
                      ></i>
                      <span>checked
      </span>              </div>

                    {Mode? (
                      <div className="process">
                       
                        <i
                          className="bi bi-trash2-fill"
                          onClick={() => {
                            dispatch({ type: "delete", payload: e.id });
                handlepop(true,"green",`deleted`)

                          }}
                          onMouseDown={(e) => {
                            e.preventDefault();
                          }}
                        ></i>
                        <span>delete{" "}
 </span>                     </div>
                    ) : null}
               <div id="up">
               <i className="bi bi-arrow-up-circle-fill" id="upp"
                              style={{display:e.id==shown[0].id?"none":"block"}}
                onClick={()=>{
              dispatch({type:"up",payload:e.id,index:i})
                  setindexUp(i)
                setgoUp(true)
                }}
             ></i>
              <i className="bi bi-arrow-down-circle-fill"
                style={{display:e.id==shown[shown.length-1].id?"none":"block"}}
               
                onClick={()=>{
                    dispatch({type:"down",payload:{value:e.id,index:i}})
                                setindexUp(i)
                setgoUp(false)
                }}></i>
               </div>
               </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default MainInp;
