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
      main: 'rgb(255, 187, 197)'
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={ theme }>
        <NavBar title="chonky" />
        <BannerImage />
        <div className="App-home" >
          <Home />
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
