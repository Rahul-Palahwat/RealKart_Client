
import './App.css';
import AllProducts from './components/AllProducts/AllProducts';
import Navbar from './components/Navbar/Navbar';

function App() {
  
  return (
    <div style={{"backgroundColor":"#EAECEC"}}>
      <Navbar/>
      <AllProducts/>
    </div>
  );
}

export default App;
