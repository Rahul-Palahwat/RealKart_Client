
import './App.css';
import AllProducts from './components/AllProducts/AllProducts';
import BestSelling from './components/BestSelling/BestSelling';
import Footer from './components/Footer/Footer';
import MostWishlisted from './components/MostWishlisted/MostWishlisted';
import Navbar from './components/Navbar/Navbar';

function App() {
  
  return (
    <div style={{"backgroundColor":"#EAECEC"}}>
      <Navbar/>
      <AllProducts/>
      <BestSelling/>
      <MostWishlisted/>
      <Footer/>
    </div>
  );
}

export default App;
