import { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UserInterface from './components/UserInterface/UserInterface';
import Services from './components/UserInterface/Services';
import Portfolio from './components/UserInterface/Portfolio';
import Contact from './components/UserInterface/Contact';

function App() {
  useEffect(()=>{
    Aos.init();
  },[] );

  return (
    <div className="App">
      <Header/>
      <main>
       <UserInterface/>
       <Services/>
       <Portfolio/>
       <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
