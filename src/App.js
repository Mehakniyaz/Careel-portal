import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/header";
import Home from "./Pages/HomePage/homepage";
import axios from "axios";
import { useEffect } from "react";


import { useDispatch } from "react-redux";
import { setData } from "./store/store-slice";
import CardGrid from "./Card/cardgrid";
import  JobApplicationForm from "./Form/form"
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Components/Footer/footer";
import Cardescription from "./Card/carddescription";
import {data} from "./data/data";

// const data1=data.jobs
function App() {

  const dispatch = useDispatch();

  dispatch(setData(data))
 
  return (
    <>
      <Header></Header>
<Routes>

<Route path="/" element={<Home />}></Route>
<Route path="/openings" element={<CardGrid/>}></Route>
<Route path="/openings/form/:role" element={<JobApplicationForm/>}></Route>

<Route path="/openings/:jobId" element={<Cardescription/>}></Route>

<Route path="*" element={<Navigate to="/"></Navigate>}></Route>
</Routes>

  <Footer></Footer>  
 
     
    </>
  );
}

export default App;
