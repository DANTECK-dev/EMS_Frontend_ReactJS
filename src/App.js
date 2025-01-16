import React from 'react'
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ErrorComponent from './components/ErrorComponent';

function App() {
  return (
    <div>
      
      <Router>
        <div>
          <HeaderComponent />


          <div className="container">
            <Routes>
              <Route path='/' element ={<ListEmployeeComponent />}></Route>
              <Route path='/employees' element ={<ListEmployeeComponent />}></Route>
              <Route path='/add-employee' element ={<CreateEmployeeComponent />}></Route>
              <Route path='/update-employee/:id' element ={<UpdateEmployeeComponent />}></Route>
              <Route path='/error/:code' element ={<ErrorComponent />}></Route>
            </Routes>
          </div>

          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
