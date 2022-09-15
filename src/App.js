import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './component/Header';
import Loading from './component/Loading';
import MainInp from './component/MainInp';




function App() {

    

const [loading, setloading] = useState(true);
useEffect(()=>{
  setTimeout(() => {
    setloading(false)

  }, 2000);
},[])





if(loading){
  return(<div>
<Loading/>
</div>) ;}
else{
  return (
  
    <div className="App">
      <div className="container w-100">
        <Header />
        <MainInp />
      </div>
    </div>
  );} 
}

export default App;
