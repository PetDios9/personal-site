import './App.css';
import {Header} from './Components/Header'
import {AboutPage} from './Pages/AboutPage'
import LandingPage from './Pages/LandingPage'
import theme from './theme';
import { ThemeProvider} from '@material-ui/core'


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
          <LandingPage />
          <AboutPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
