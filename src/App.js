import React, { createContext, useState } from 'react';

import './index.css';
import Header from "./components/Header/Header"
import Form from "./components/FormSection/FormSec"
import CardSection from "./components/CardSection"
import BoostSection  from './components/BoostSection';
import Footer from './components/Footer';
import StatSection from "./components/Statistics/StaticSection"
import {  Container } from './UI';
export const UrlContext = createContext(null);



function App() {

  const [data, setData] = useState(null);

 
  
  return (
    <>
      <UrlContext.Provider value={{ data, setData }}>
        <Header />
        <Container style={{ top: "-80px" }}>
        <Form />
        <CardSection data={data}/>
        <StatSection/>
        </Container>
       <BoostSection/>
        
        <Footer/>
       
      </UrlContext.Provider>
    </>
  );
}

export default App;
