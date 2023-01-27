import './App.css';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import BasicTabs from './BasicTabs';
import { purple, green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  }
});

function App() {
  const value = 'test'
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BasicTabs />
      </div>
    </ThemeProvider>
  );
}

export default App;
