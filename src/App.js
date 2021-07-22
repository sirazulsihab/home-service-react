import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import services from './data/services.json';

function App() {

  const [cart, setCart] = useState([])

  const addCartHandler = (uniqueId) => {
    console.log("Cart Added!", uniqueId)
  }

  return (
    <div className="App">
      <Header></Header>
      {
        services.map(serv => <Services 
          addToCart={addCartHandler} key={serv.id} 
          service={serv}
        ></Services>)
      }
      
    </div>
  );
}

export default App;
