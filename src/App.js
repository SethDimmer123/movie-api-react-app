import Footer from './components/Footer.jsx';
import Nav from './components/Nav.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <Route />
        <Nav />
        {/* <Landing /> */}
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
