import './App.css';
import {Header} from './Components/Header'
import theme from './theme';
import { ThemeProvider} from '@material-ui/core'


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
