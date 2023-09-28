import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import RestaurentCreate from './Components/RestaurentCreate';
import RestaurentList from './Components/RestaurentList';
import RestaurentSearch from './Components/RestaurentSearch';
import RestaurentUpdate from './Components/RestaurentUpdate';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Navbarmenu from './Components/Navbarmenu';
import './App.css'
import Protected from './Components/Protected';
import PageNofound from './Components/PageNofound';

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Navbarmenu />
        <Routes>

          {/* <Route path='/' element={< Home />} />
          <Route path='/RestaurentList' element={< RestaurentList />} />
          <Route path='/RestaurentCreate' element={< RestaurentCreate />} />
          <Route path='/RestaurentSearch' element={< RestaurentSearch />} />
          <Route path='/RestaurentUpdate/:id' element={< RestaurentUpdate />} />
          <Route path='/RestaurentUpdate' element={< RestaurentUpdate />} />
          <Route path='/Login' element={< Login />} />
          <Route path='/Logout' element={< Logout />} /> */}
          
          <Route path='/' element={< Protected Component={Home} />} />
          <Route path='/RestaurentList' element={< Protected Component={RestaurentList} />} />
          <Route path='/RestaurentCreate' element={< Protected Component={RestaurentCreate} />} />
          <Route path='/RestaurentSearch' element={< Protected Component={RestaurentSearch} />} />
          <Route path='/RestaurentUpdate/:id' element={< Protected Component={RestaurentUpdate} />} />
          <Route path='/RestaurentUpdate' element={< Protected Component={RestaurentUpdate} />} />
          <Route path='/Login' element={< Login />} />
          <Route path='/logout' element={< Protected Component={Logout} />} />
          <Route path='/*' element= {<PageNofound />} />


          {/* render={props => (<Login {...props} />)} */}
        </Routes>

      </BrowserRouter>



    </div>
  );
}

export default App;
