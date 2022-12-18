import { useEffect, useState } from "react";

function App() {
  const [data, set_data] = useState({
    name: "",
    age: "",
    date: "",
    programming: "",
  });

  useEffect(()=>{
    fetch("/data").then((res)=> res.json().then((data)=>{
      set_data({
        name: data.Name,
        age: data.Age,
        date: data.Date,
        programming: data.Programming,
      })
    }))
  },[])

  return <div className="App">
    <h1>React and flask</h1>
    <ul>
      <li>{data.name}</li>
      <li>{data.age}</li>
      <li>{data.date}</li>
      <li>{data.programming}</li>
    </ul>
  </div>;
}

export default App;
