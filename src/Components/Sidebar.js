import React from 'react'
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { useState, useRef,useEffect} from 'react';
import "../Css/Sidebar.css"
import { useDispatch,useSelector } from 'react-redux';
import { event } from 'jquery';

export default function Sidebar({sidebar}) {
    var states=[]
    const dispatch=useDispatch()
    let [selectedState,setselectedState]=useState([])
    const inputEl = useRef(null);
    const covidDataStore=useSelector(state=>state.covidData)
    let newOb={}
    const userData = [
        {name: "AN", isChecked: true},
        { name: "AP" ,isChecked: true},
        {name: "AR", isChecked: true},
        { name: "AS" ,isChecked: true},
        {name: "BR", isChecked: true},
        { name: "CH" ,isChecked: true},
        {name: "CT", isChecked: true},
        { name: "DL" ,isChecked: true},
        {name: "DN", isChecked: true},
        { name: "GA" ,isChecked: true},
        {name: "GJ", isChecked: true},
        { name: "HP" ,isChecked: true},
        {name: "HR", isChecked: true},
        { name: "JH" ,isChecked: true},
        {name: "JK", isChecked: true},
        { name: "KA" ,isChecked: true},
        {name: "KL", isChecked: true},
        { name: "LA" ,isChecked: true},
        {name: "LD", isChecked: true},
        { name: "MH" ,isChecked: true},
        {name: "ML", isChecked: true},
        { name: "MN" ,isChecked: true},
        {name: "MP", isChecked: true},
        { name: "MZ" ,isChecked: true},
        {name: "NL", isChecked: true},
        { name: "OR" ,isChecked: true},
        {name: "PB", isChecked: true},
        { name: "PY" ,isChecked: true},
        {name: "RJ", isChecked: true},
        { name: "SK" ,isChecked: true},
        { name: "TG" ,isChecked: true},
        {name: "TN", isChecked: true},
        { name: "TR" ,isChecked: true},
        { name: "TT" ,isChecked: true},
        {name: "UP", isChecked: true},
        { name: "UT" ,isChecked: true},
        { name: "WB" ,isChecked: true},
      
      ];

    
    useEffect(() => {
     
        
        setselectedState(userData);
      }, []);
     
    
      const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === "allSelect") {
          var tempUser = selectedState.map((user) => {
            return { ...user, isChecked: checked };
          });
          setselectedState(tempUser);
        } else {
          let tempUser = selectedState.map((user) =>
            user.name === name ? { ...user, isChecked: checked } : user
          );
          setselectedState(tempUser);
          
        }
        

        
        
      };
      dispatch({type:"save-checkbox",checkbox:selectedState})

      






   
   
  
    

    
    return (
        <div>
            
        <nav className={sidebar? 'nav-menu active' : 'nav-menu'}>
        <form className="form">
        <h3>Select States</h3>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            // checked={
            //   users.filter((user) => user?.isChecked !== true).length < 1
            // }
            checked={!selectedState.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label className="form-check-label ms-2">All Select</label>
        </div>
        {selectedState.map((user) => (
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name={user.name}
              checked={user?.isChecked || false}
              onChange={handleChange}
            />
            <label className="form-check-label ms-2">{user.name}</label>
          </div>
        ))}
      </form>
        </nav>
           
        </div>
    )
}
