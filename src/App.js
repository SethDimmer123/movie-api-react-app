import Footer from './components/Footer.jsx';
import Nav from './components/Nav.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import Browse from './pages/Browse';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path= "/browse" component={Browse} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
