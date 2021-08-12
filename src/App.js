import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [data,setData]=useState([]);

  const getData=()=>{
    fetch('https://jsonplaceholder.typicode.com/users',{ headers : { 'Content-Type': 'application/json', 'Accept': 'application/json'}}
    ).then(function(response){
        console.log(response)
        return response.json();
      }).then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
    console.log("data--->",data)
  },[])
  return (
    <div className="App">
     {
       data && data.length>0 && data.map((item)=><p>{item.about}</p>)
     }
    </div>
  );
}

export default App;