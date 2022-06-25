import './styles/App.css';
import Footer from './Footer';
import Home from './Home/Home';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
