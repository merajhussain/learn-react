import React from "react";
import  ReactDOM  from "react-dom/client";
import { useState } from "react";
import { useEffect } from "react";


function PizzaApp()
{
   return (
     <div> 
        <Header/>
        <Menu/>
        <Footer/>
     </div>
   );
}

function Header()
{
return <h1>Fast React Pizza Co.</h1>
}

function Menu()
{
   return (
    <div>
        <ul>
            <li>Pizza1</li>
            <li>Pizza2</li>
            <li>Pizza3</li>
        </ul>
    </div>
   );
}

function Footer()
{
    const [currTIme, setCurrTime] = useState(new Date().toLocaleTimeString());
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        setTimeout(() => {
            setCurrTime((currTIme) => new Date().toLocaleTimeString());
        }, 1000);
      });
    
return <footer>{currTIme}. We're currenly open</footer>
}


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<PizzaApp/>);
