
useEffect(() => {setchecked(false);});
const [update, setupdate] = useState();const [Mode, setMode] = useState("create");
const check = useRef(task.map(() => React.createRef()));
useEffect(() => {
if (!disappear) return;
Object.values(check.current[task.indexOf(update)])[0].style.display =
"none";
}, [disappear, update, checked]);
const [goUp, setgoUp] = useState('one');
const[indexUp,setindexUp]=useState()
useEffect(()=>{
if(goUp=='one')return;
const element= task!=[]?shown[indexUp]:''

shown.splice(indexUp,1)

if(goUp){shown.splice((indexUp-1),0,element)}
else if(!goUp){shown.splice((indexUp+1),0,element)}

setshown(shown)
setgoUp('one')
setindexUp("")
localStorage.setItem("tasks", JSON.stringify(shown))
},[indexUp])

const handleCreate = () => {
if (Mode == "create") {{}};const handleUpdate = () => {
if (Mode == "update") {   { }  }  };  
const [delall,setdelall]=useState(false)
// x=task,s
const handleDelpopup=(s=shown,x)=>{  

setTimeout(() => {
setdelall(false)   
if( s!="del")   return  
handlepop(false)   ;
dispatch({ type: "deleteAll" })}, 0);
}
return 
<form
onSubmit={(e) => {
e.preventDefault();
inpp.current.focus();
}}
className=" w-100 mx-auto   rounded-start mt-5  justify-content-center"
>
<input
onBlur={() => {
setMode("create");
setdis(false)
inpp.current.value = "";
}}
{Mode=="create"?(<div>add tasks <i className="bi bi-arrow-bar-right"></i></div>):(<div>update <i className="bi bi-arrow-left-right"></i></div>)}  
ref={delAll}
onClick={() => {
setdelall(true)
// handleDelpopup()

}}
className="col-5 col-md-4 col-lg-3 mt-1"
>
{delall?<Delpop handleDelpopup={handleDelpopup} task={task}/>:""}

<div className="btn btn-danger h-100 d-flex align-items-center justify-content-center  w-100 shadow-none">
<span>Delete All ({task.length})   
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
setMode("update");
setupdate(e);

onMouseDown={(e) => e.preventDefault()}
></i>
<span>update
</span>              </div>
<div ref={check.current[i]} className="process">
<i
className="bi bi-check"
data-check={e.id}
onClick={() => {

setchecked(disappear ? true : false);
}}

></i>

<div id="up">
<i className="bi bi-arrow-up-circle-fill" id="upp"
style={{display:e.id==shown[0].id?"none":"block"}}
onClick={()=>{
setindexUp(i)
setgoUp(true)
}}

