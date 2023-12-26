import Header from './components/header/Header';
import './App.css';
import Bike from './components/bike/Bike';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    const getBikes = async () => {
      await axios.get("http://localhost:8000/bikes/")
      .then(bikes => setBikes(bikes.data))
      .catch(err => console.log(err))
    };
    
    getBikes();
  }, []);

  return (
    <div>
      <Header />
      {
        bikes ?
        bikes.map((bike) => {
          console.log(bike)
          return(
            <Bike {...bike} key={bike.ID} />
          )
        })
        :
        null
      }
    </div>
  );
}

export default App;
