import{BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Home from './page/Home';
import Folowing from './page/Folowing';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/folowing'element={<Folowing />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
