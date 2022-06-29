
import './App.css';
import AllProducts from './components/AllProducts/AllProducts';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  
  return (
    <div style={{"backgroundColor":"#EAECEC"}}>
      <Navbar/>
      <AllProducts/>
      <Footer/>
    </div>
  );
}

export default App;
