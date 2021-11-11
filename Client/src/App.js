import './App.css';
import Home from './components/Home/Home';
import CarData from './components/Cardata/CarData';
import Dbdata from './Utils/request'
import { useState, useEffect } from 'react';
function App() {
  const [places, setPlaces] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const getPlacedata=()=>{
      Dbdata.get("place")
      .then(({data})=>{
          setPlaces(data.place)
          return;
      })
      
  }
  const getdata=()=>{
      Dbdata.get("vehicle")
      .then(({data})=>{
          setVehicles(data.vehicle)
          return;
      })
      
  }
  useEffect(() => {
     getPlacedata()
     getdata()
  }, [])
  return (
    
   <>
   {/* <Home vehicles={vehicles} places={places}></Home> */}
   <CarData vehicles={vehicles}/>
    
   </>
  );
}

export default App;