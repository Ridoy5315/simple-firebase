import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Main = props => {
     return (
          <div>
               <Navbar></Navbar>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

Main.propTypes = {
     
};

export default Main;