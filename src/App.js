import { GlobalStyle } from './styles/global.styles'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { Navigation } from './routes/main'

function App() {

  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Navigation />
      <Navbar />
    </div>
  );
}

export default App;
