import { ThemeProvider } from "@material-ui/core/styles";
import {theme} from './styles/theme';
import Routes from './routes'
import GlobalStyle from './styles/global'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;