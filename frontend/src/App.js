import { useEffect } from "react";

import logo from './logo.svg';
import './App.css';

import axios from "axios";

function App() {

  useEffect(() => {
    axios.get("http://localhost:4000").then((response) => {
      console.log("GET", response);
    }).catch((e) => {
      console.log("GET", e.response)
    });

    axios.post("http://localhost:4000", {
      name: "vivek"
    }).then((response) => {
      console.log("POST", response);
    }).catch((e) => {
      console.log("POST", e.response)
    });;

  })
  return (
    <div className="App">
      <h1>Hello World - MERN Stack Session</h1>
    </div>
  );
}

export default App;
