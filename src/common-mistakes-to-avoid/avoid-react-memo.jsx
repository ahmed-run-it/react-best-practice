
import { useState } from 'react';
import styled from 'styled-components';

const DynamicBackgroundDiv = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${({color})=>color};
`;



function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
function ExpensiveComponent (){
  console.log("rerender expensiveComponent");
  const startTime=Date.now();
  let currentTime=startTime;
  while (currentTime-startTime<1000) currentTime=Date.now();
  return <button onClick={()=>{
      console.log("clicked expensive");
  }}> expensive</button>
}


function Parent ({children}){
const color= getRandomColor();
const [counter,setCounter]=useState(0)
return <DynamicBackgroundDiv color ={color}>
    <h1>{counter}</h1>
     <button onClick={()=>setCounter(prev=>prev+1)}>+</button>
     <button  onClick={()=>setCounter(prev=>prev-1)}>-</button>
     {children}
   </DynamicBackgroundDiv> 

}


function AvoidReactMemo() {
  return (
    <div className="App">
      <Parent >
      <ExpensiveComponent />
      </Parent>  
    </div>
  );
}

export default AvoidReactMemo;
