import './App.css'
import Container from './Components/Container'
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import Main from './Components/Main'
import Subcontents from './Components/Subcontents'
import Advertisement from './Components/Advertisement'


function App() {
  return (
    <div className="App">
      <Container>
        <Header/>
      </Container>
      <Container>
      <Navigation/>
      <Main>
        <Container>
          <Subcontents/>
          <Subcontents/>
          <Subcontents/>
        </Container>
        <Advertisement/>
      </Main>
      </Container>
    </div>
  );
}

export default App
