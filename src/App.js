import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BannerImage from './components/BannerImage';
import { createMuiTheme} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Footer from './components/Footer';
import Home from './components/Home';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F4D35E'
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={ theme }>
        <header className="App-header">
          <NavBar title={ "Home" }/>
        </header>
        <BannerImage /> 
        <Home />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
