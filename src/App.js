import React from "react";
//import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import ResponseSection from "./components/ResponseSection";
import Loader from "./components/Loader";


function App() {

  return (
    <Loader duration={3000}>
    <div>
      <div>
        <Title />

      </div>
     
      
      
    <div className="app-wrapper">
      
      <div>
        <ResponseSection />
        </div>
    
    </div>
    </div>
    </Loader>

    );} 
    export default App;