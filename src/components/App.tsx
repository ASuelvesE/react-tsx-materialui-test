import React, { useEffect, useState } from 'react';
import './App.css';
import { Outlet } from "react-router-dom";
import { Theme, ThemeProvider } from '@mui/material';
import theme from "./temaConfig";
import NavBar from './nav/NavBar';
import { makeStyles } from '@mui/styles';

interface Sub {
  id: string,
  email: string,
  id_activision: number,
  foto?: string
}


function App() {

  //console.log(theme)

  return (
    <div className="App">
      <NavBar children={<div></div>} />
      <ThemeProvider theme={theme}>
        <Outlet />
      </ThemeProvider>
    </div>
  );
}

export default App;
