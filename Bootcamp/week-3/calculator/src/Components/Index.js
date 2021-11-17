import { useState } from 'react';
import React from 'react'
import Inputs from './Inputs/Index'
import Buttons from './Buttons/Index'

function Calculator() {
    const operatorColor="#FF9B6A";
    const equalsColor="#FF5151";
    const[pending,setCal]=useState("");
    const[result,setResult]=useState("");
    const opr=["+","-","X","/","%","1/x","x²","√"];

    const operantControl = val =>{
        if((opr.includes(val) && pending==='') || 
        (opr.includes(val) && opr.includes(pending.slice(-1).toString()))) //why this is happening this is already string no?
        { 
            return;
        }
        setCal((pending) => [...pending, val+""]);
        if(!opr.includes(val)){
            
            switch (pending.slice(-1).toString()){
                case "+":
                    const text=pending.slice(0, -1).join("");
                    setResult("");
                    setResult(Number(text)+Number(val));
                    setCal((pending) => [Number(text)+Number(val)+""]);
                    break;
                case "-":
                    setResult("");
                    const text2=pending.slice(0, -1).join("");
                    setResult(Number(text2)-Number(val));
                    setCal((pending) => [Number(text2)-Number(val)+""]);
                    break;
                case "/":
                    const text3=pending.slice(0, -1).join("");
                    setResult(Number(text3)/Number(val));
                    setCal((pending) => [Number(text3)/Number(val)+""]);
                    break;
                case "X":
                    const text4=pending.slice(0, -1).join("");
                    setResult(Number(text4)*Number(val));
                    setCal((pending) => [Number(text4)*Number(val)+""]);
                    break;
                case "%":
                    setResult(Number(val)/100);
                    setCal((pending) => [Number(val)/100+""]);
                    break;
                case "1/X":
                    setResult(1/Number(val));
                    setCal((pending) => [1/Number(val)+""]);
                    break;
                case "x²":
                    setResult(Math.pow(Number(val),2));
                    setCal((pending) => [Math.pow(Number(val),2)+""]);
                    break;
                case "√":
                    setResult(Math.sqrt(Number(val)));
                    setCal((pending) => [Math.sqrt(Number(val))+""]);
                    break;
                default:
                    break;
            }
            
        }
    }
    const calculateEverything=()=>{
        setCal("");
    }
    const deleteAll=()=>{
        setCal("");
        setResult("");
    }
    const deletePending=()=>{
        setCal("");
    }
    const deleteLast=()=>{
        if(pending===''){
            return;
        }
        const value=pending.slice(0,-1);
        setCal(value);
    }
    return (
        <>
        <div className="structure">
            <Inputs pending={pending} result={result}/>
            <div className="row">
            <Buttons item="%" color={operatorColor} buttonClick={operantControl}/>
            <Buttons item="CE" color={operatorColor} buttonClick={deletePending}/>
            <Buttons item="C" color={operatorColor} buttonClick={deleteAll}/>
            <Buttons item="←" color={operatorColor} buttonClick={deleteLast}/>
            </div>
            <div className="row">
            <Buttons item="1/x" color={operatorColor} buttonClick={operantControl}/>
            <Buttons item="x²" color={operatorColor} buttonClick={operantControl}/>
            <Buttons item="√" color={operatorColor} buttonClick={operantControl}/>
            <Buttons item="/" color={operatorColor} buttonClick={operantControl}/>
            </div>
            <div className="row">
            <Buttons item="7" buttonClick={operantControl}/>
            <Buttons item="8" buttonClick={operantControl}/>
            <Buttons item="9" buttonClick={operantControl}/>
            <Buttons item="X" color={operatorColor} buttonClick={operantControl}/>
            </div>
            <div className="row">
            <Buttons item="4" buttonClick={operantControl}/>
            <Buttons item="5" buttonClick={operantControl}/>
            <Buttons item="6" buttonClick={operantControl}/>
            <Buttons item="-" color={operatorColor} buttonClick={operantControl}/>
            </div>
            <div className="row">
            <Buttons item="1" buttonClick={operantControl}/>
            <Buttons item="2" buttonClick={operantControl}/>
            <Buttons item="3" buttonClick={operantControl}/>
            <Buttons item="+" color={operatorColor} buttonClick={operantControl}/>
            </div>
            <div className="row">
            <Buttons item="+/-"/>
            <Buttons item="0" buttonClick={operantControl}/>
            <Buttons item=","/>
            <Buttons item="=" color={equalsColor} buttonClick={calculateEverything}/>
            </div>
        </div>
       </>
    )
}

export default Calculator
