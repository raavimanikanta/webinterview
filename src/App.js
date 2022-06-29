import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import NavBar from './NavBar'
import Table from "./Table"
import Form from './Form'
import PageNotFound from './PageNotFound'
const App = () => {
  return (
    <div>
    
       <Router>
       <NavBar/>
        <Routes>
          <Route path="*" element={<PageNotFound/>}  />
          <Route path="/" element={ <Table/>}/>
          <Route path="/userdetails" element={ <Table/>}/>
          <Route path="/Form" element={  <Form/>}/>
        </Routes>
       </Router>
      
     
    </div>
  )
}

export default App
