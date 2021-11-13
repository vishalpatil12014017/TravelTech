import { Switch, Route, useParams } from 'react-router-dom';
import Home from './components/Home/Home';
import CarData from './components/Cardata/CarData';
import Dbdata from './Utils/request'
import { useState, useEffect } from 'react';
import SingleCar from './components/SingleCar/SingleCar';
import Payment from './components/Payment/Payment'
import Navbar from './components/Home/Navbar';

function App() {
  const [places, setPlaces] = useState([]);
  const [vehicles, setVehicles] = useState([]); 
  const getPlacedata = () => {
    Dbdata.get("place")
      .then(({ data }) => {
        setPlaces(data.place)
        return;
      })

  }
  const getdata = () => {
    Dbdata.get("vehicle")
      .then(({ data }) => {
        setVehicles(data.vehicle)
        return;
      })

  }
  useEffect(() => {
    getPlacedata()
    getdata()
  }, [])
  console.log(FormData)
  return (
    <div className="App">
      <Switch>
        <Route path="/Home" exact>
          <Navbar />
          <Home vehicles={vehicles} places={places} ></Home>
        </Route>
        <Route path="/cardata" exact>
          <Navbar />
          <CarData vehicles={vehicles} />
        </Route>
        
        <Route path="/singlecar/:_id" exact>
        <Navbar />
          <SingleCar vehicles={vehicles}  />
        </Route>
        <Route path="/payment" exact>
          <Navbar />
          <Payment  />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
