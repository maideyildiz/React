import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import Header from './Header/Index';
import MemeList from '../Pages/MemeList/Index';
import SingleMeme from '../Pages/SingleMeme/Index';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";

function General() {
    return (
        <ChakraProvider>
    <Header/>
    <Router>
        <Routes>
            <Route path="/" element={<MemeList/>}/>
            <Route path="/single/:id" element={<SingleMeme/>}/>
    
        </Routes>
  
    </Router>
    
    </ChakraProvider>
    )
}

export default General
