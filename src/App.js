import Footer from './components/Footer.jsx';
import Nav from './components/Nav.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Browse from './pages/Browse';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path= "/browse" exact element={<Browse/>}></Route>
        {/* <Route path= "/browse/:id" element={<MovieInfo/>}></Route> */}
        {/* make a dynamic route for movie info page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
