import logo from './logo.svg';
import './App.css';
import Content from './page/Home';
import AboutMe from './page/AboutMe';
import Footer from './page/Footer';
import Portfolio from './page/Portfolio';
import Skills from './page/skills';
import paragraph from './Utils/p';
function App() {
  return (
    <div className="App">
      <>
      <Content/>
      </>
    
     <AboutMe/>
     <Skills/>
     <Portfolio/> 
     <Footer/>
     
    </div>
  );
}

export default App;
