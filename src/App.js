import './App.css';
import {Header} from './Components/Header'
import {AboutPage} from './Pages/AboutPage'
import LandingPage from './Pages/LandingPage'
import { ContactMePage } from './Pages/ContactMePage'
import {Projects} from './Pages/Projects'
import theme from './theme';
import { CssBaseline, ThemeProvider} from '@material-ui/core'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    Aos.init({duration: 1500})
  },[])
  return (
    <div className="App" style={{overflow: 'hidden'}}>
      <ThemeProvider theme={theme}>
        <Header />
          <CssBaseline />
          <LandingPage />
          <div data-aos="fade-down">
            <AboutPage />
          </div>
          <div data-aos="fade-down">
            <Projects />
          </div>
          <div data-aos="fade-down">
            <ContactMePage />
          </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
