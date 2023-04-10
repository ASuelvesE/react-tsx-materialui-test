
import './App.css';
import { Outlet } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import theme from "./temaConfig";
import NavBar from './nav/NavBar';



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
