import './App.css';
// import AllProducts from './components/AllProducts/AllProducts';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import TotalProducts from './components/TotalProducts/TotalProducts';
import AllProducts from './components/AllProducts/AllProducts';

function App() {

  return (
    <Router>
      <div style={{ "backgroundColor": "#EAECEC" }}>
        <div className='whole_body'>
          <Navbar />
          <hr />
        </div>
        <Routes>
          <Route path="/" element={<AllProducts/>}></Route>
          <Route path="/all" element={<TotalProducts/>}></Route>
          {/* <TotalProducts /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
