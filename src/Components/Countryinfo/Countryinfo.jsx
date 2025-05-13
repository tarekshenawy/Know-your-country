import React, { useEffect } from 'react'
import axios from 'axios';
import searchicon from "../images/search.png";
import { useState,useRef } from 'react';

export default function Countryinfo(){
     let inputref = useRef();

    const [state,setState]=useState({
        name:"Egypt",
        countyflag:"EG",
        capital:"Cairo",
        population:"1422222555",
        timezone:"utc",
        currency:'Eg pound'
    })

    function getcountryData(country){
    
         axios.get(`https://restcountries.com/v3.1/name/${country}`)
        .then((res)=>{
            if(res.data){
                  setState({
            name:country,
            countyflag:res.data[0].flags.png,
            capital:res.data[0].capital,
            population:res.data[0].population,
            timezone:res.data[0].timezones,
            currency:res.data[0].currencies,

                })
            }
        }) 
        .catch(() => {
            alert(`you should enter valid value`);
        });
    
        
       
    }
    useEffect(()=>{
        getcountryData("egypt")
    },[])


  return (
  
     <div class="bg-cyan-500 w-[80%] mx-auto mt-16 p-5 ">
        {/* country search */}
        <div class="w-[90%] flex bg-white 
         justify-between p-2 rounded-full mb-3"
         >
        <input type='text' placeholder='enter your country'
             class="border-none outline-none font-bold"
             ref={inputref}
            >

        </input>
        <img src={searchicon} class="bg-amber-700 p-1 rounded-full"
            onClick={()=>getcountryData(inputref.current.value)}>
        </img>

    </div>

        {/* country name */}
        <div class="border-1  p-1 mb-3 font-bold ">
            <p> Country Name : <span class="text-amber-900">{state.name}</span></p>
        </div>

        {/* country flag */}
        <div class="border-1  p-1 mb-3 font-bold ">    
        {state.countyflag && <img src={state.countyflag} alt={`${state.name} flag`} width="200" />}
        </div> 

        {/* country capital */}
        <div class="border-1  p-1 mb-3 font-bold ">
             <p> Country Capital : <span class="text-amber-900">{state.capital}</span></p>
        </div>

        {/* country population */}
         <div class="border-1  p-1 mb-3 font-bold ">
            <p> Country Population : <span class="text-amber-900">{state.population}</span></p>
        </div>

        {/* country timezone */}
         <div class="border-1  p-1 mb-3 font-bold flex-wrap break-words ">
            <p> Country TimeZone : <span class="text-amber-900">{state.timezone}</span></p> 
        </div> 

        {/* country currency */}
         <div class="border-1  p-1 mb-3 font-bold ">
            <p> Currency: <span  class="text-amber-900">{ state.currency[Object.keys(state.currency)[0]].name}</span></p>        
        </div> 

     </div>
 
  )
    }

