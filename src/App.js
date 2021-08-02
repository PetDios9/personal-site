import './App.css';
import {Header} from './Components/Header'
import {AboutPage} from './Pages/AboutPage'
import LandingPage from './Pages/LandingPage'
import { ContactMePage } from './Pages/ContactMePage'
import {Projects} from './Pages/Projects'
import theme from './theme';
import { ThemeProvider} from '@material-ui/core'


function App() {
  return (
    <div className="App" style={{overflowX: 'hidden'}}>
      <ThemeProvider theme={theme}>
        <Header />
          <LandingPage />
          <AboutPage />
          <Projects />
          <ContactMePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
