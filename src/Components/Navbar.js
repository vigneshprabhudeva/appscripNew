import React from 'react'
import {Container,Navbar,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Navbar.css'
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import virusIcon from './virus.png'


export default function Navbar1(props) {
  var date=new Date()
  
  var month=date.getMonth()
  var day=date.getUTCDate()
  var year=date.getUTCFullYear()
  
  var inputdate=year+"-0"+month+"-"+day
  console.log(inputdate)
  
    
      
    return (
        
 
 <div class="navbar">
     
     
  <a > <Link to="#" className="menu-bar" onClick={()=>{props.handleclick()}}>
            <FiAlignJustify className="icon"/>
        </Link></a>
        <h1>Covid-19<img className="virusIcon" src={virusIcon} /></h1>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="date" value={inputdate}  placeholder="Search" aria-label="Search"/>
    
  </form>
</div>

  

   
    )
}
