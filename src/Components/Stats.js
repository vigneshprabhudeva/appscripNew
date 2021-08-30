import React from 'react'
import '../Css/stats.css'
import {Container,Navbar,Row,Col} from 'react-bootstrap'
import $ from 'jquery'; 
import { useState,useEffect } from 'react';
import CountUp from 'react-countup';
import Chart from "react-google-charts";
import { GiConfirmed ,GiHypodermicTest,GiStrong} from "react-icons/gi";
import { BiMap } from "react-icons/bi";
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux';
import img from './input.jpg'


export default function Stats({sidebar}) {
  let [anConfiremed,setanconfirmed]=useState(0)
  const dispatch=useDispatch()
  const covidDataStore=useSelector(state=>state.covidData)
  const checkboxStore=useSelector(state=>state.checkbox)
  const barStore=useSelector(state=>state.barDataStore)
  const testStore=useSelector(state=>state.totTest)
  let [covidData,setcovidData]=useState([])
  let totalTested=0
  let totalConfirmed=0
  let totalRecovered=0
  let [tesed,setTested]=useState(82415565)
  let dum1=82415565
  let dum2=65475138
  let dum3=66995193
  let [confirmed,setconfirmed]=useState(65475138)
  let [recoverd,setrecoverd]=useState(66995193)
  let [statee,setstate]=useState(37)
  let statesum=0;
  let barData=[['City', '2010 Population', '2000 Population']]
  let [aaa,setaa]=useState([["nodata",0,0]])
  let checkedDataOb={}

  for(let v in checkedDataOb ){

    
  
  
    barData.push([v,checkedDataOb[v].total.confirmed,checkedDataOb[v].total.recovered])
  
  }



  useEffect(()=>{
   var config = {
    method: 'get',
    url: 'https://cors-anywhere.herokuapp.com/https://api.covid19india.org/v4/min/data.min.json ', 
     
  };
  axios(config)
  .then(function (response) {
    setcovidData(response.data)
    console.log(response.data)
    dispatch({type:"save",covidData:response.data})
  })
  .catch(function (error) {
    console.log(error);
  });


//   axios.post('https://api.covid19india.org/v4/min/data.min.json', {
//     headers: { 
//       'Access-Control-Allow-Origin': '*'
//     }})      
// .then((response) => {
//   setcovidData(response.data)
//     console.log(response.data)
//     dispatch({type:"save",covidData:response.data})
    
// })
// .catch((error) => {
//   console.log(error); s
// })



    setstate(Object.keys(checkboxStore).length)

    for(let i in covidDataStore){
      checkboxStore.forEach(function(val){
        if(i==val.name && val.isChecked==true ){

        
          checkedDataOb.[i]=covidDataStore[i]
        }
        
      })
      
    }

    console.log(checkedDataOb)

   
    
    
    
      setaa(barData)


    

    
    

    dispatch({type:"save-barData",barDataStore:barData})
    for(let p in checkedDataOb){
     
      
      totalConfirmed=totalConfirmed+parseInt(checkedDataOb[p].total.confirmed)
      // totalTested=totalConfirmed+parseInt(checkedDataOb[p].total.tested)
      // totalRecovered=totalConfirmed+parseInt(checkedDataOb[p].total.recovered)
    }
  console.log(aaa.length)
  },[])
  useEffect(()=>{

   
  
    for(let i in covidDataStore){
      checkboxStore.forEach(function(val){
        if(i==val.name && val.isChecked==true ){

        
          checkedDataOb.[i]=covidDataStore[i]
        }
        
      })
      
    }

    for(let p in checkedDataOb){
     
      
      totalConfirmed=totalConfirmed+parseInt(checkedDataOb[p].total.confirmed)
      totalTested=totalConfirmed+parseInt(checkedDataOb[p].total.tested)
      totalRecovered=totalConfirmed+parseInt(checkedDataOb[p].total.recovered)
    }

    
    setTested(totalTested)
    setconfirmed(totalConfirmed)
    setrecoverd(totalRecovered)
   
    

if(checkedDataOb.AN){
  
  setanconfirmed(checkedDataOb.AN.total.confirmed)
}else{
  setanconfirmed(0)
}

console.log(checkedDataOb)


for(let v in checkedDataOb ){

    
  
  
  barData.push([v,checkedDataOb[v].total.confirmed,checkedDataOb[v].total.recovered])

}



  setaa(barData)

 
  

 
  setstate(barData.length)
  },[checkboxStore])

  

  if(aaa.length>1){
    var chart=<Chart className="chart"
          
    width={'80vw'}
    height={'100vh'}
    
    
   
  
    chartType="BarChart"
    loader={<div>Loading Chart</div>}
    data={aaa.length>1?aaa:[
      ["City", 100, 2000 ]
      
    ]}
    options={{
      title: 'Confermed vs recoverd',
      chartArea: { width: '20vw' },
      hAxis: {
        title: 'number of people',
        minValue: 0,
      },
      vAxis: {
        title: 'states',
      },
    }}
    // For tests
   
  />
  }else{
    var chart=<div>
      <h5>Please select states to view graphical daigram</h5>
      <img src={img} className="sticker" />

    </div>
  }

  


   
    return (
        <div className={sidebar? "stat-container" : "stat-container no"}>
          
            
          <div className="count-container">
          
              <div className="box">
                  <div className="icon"><BiMap className="iconn"/></div>
                  <div className="counter"><h3><CountUp end={statee<37?statee:37} duration={6} /></h3></div>
                  <div className="text">STATE</div>

              </div>
              <div className="box">
              <div className="icon"><GiHypodermicTest className="iconn"/></div>
                  <div className="counter"><h3 className="digit"><CountUp end={tesed?tesed:dum1} duration={4} /></h3></div>
                  <div className="text">TESTED</div>

              </div>
              <div className="box">
              <div className="icon"><GiConfirmed className="iconn"/></div>
              <div className="counter"><h3><CountUp end={confirmed?confirmed:dum2} duration={3} /></h3></div>
                  <div className="text">CONFIRMED</div>

              </div>
              <div className="box">
              <div className="icon"><GiStrong className="iconn"/></div>
              <div className="counter"><h3><CountUp end={recoverd?recoverd:dum3} duration={3} /></h3></div>
                  <div className="text">RECOVERED</div>

              </div>
              
          </div> 
          <div className="bar-charts">
              <div className="bar">
                {chart}
                
                
                  </div>
           

          



              
          </div> 
          
        </div>
    )
}
