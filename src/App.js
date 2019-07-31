import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BannerImage from './components/BannerImage';
import { createMuiTheme} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Footer from './components/Footer';
import Home from './components/Home';
import banner from './img/banner.jpg'
import banner2 from './img/banner2.jpg'

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
        <BannerImage img={banner} title="chunki boi haven" />
        <div className="App-home" >
          <Home />
        </div>
        <BannerImage img={banner2} title="he observe" />
        <div className="App-home" >
          <Home />
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
