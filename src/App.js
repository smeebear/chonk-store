import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BannerImage from './components/BannerImage';
import { createMuiTheme} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Footer from './components/Footer';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import About from './components/About';
import banner from './img/banner.jpg';
import banner2 from './img/banner2.jpg';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(255, 187, 197)'
    },
  },
});

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={ theme }>
          <NavBar title="chonky" />
          <Route exact path='/' render={props => (
            <React.Fragment>
              <BannerImage img={banner} title="chunki boi haven" />
              <div className="App-home" >
                <Cats />
              </div>
              <BannerImage img={banner2} title="doggy time" />
              <div className="App-home" >
                <Dogs />
              </div>
            </React.Fragment>
          )} />
          <Route path='/about' component={About}/>
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
