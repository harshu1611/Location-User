import logo from './logo.svg';
import './App.css';
import{useState} from 'react';
import axios from 'axios'
function App() {
  const [location,setLocation]=useState([]);
const getLocation=()=>{
  axios.get("https://location-api2.onrender.com/")
  .then((res)=>setLocation(res.data))
  .catch((err)=>console.log(err));
}
getLocation();
  return (
    <div>
      <p>Your latitude is: {location.latitude}</p>
      <p>Your longitude is: {location.longitude}</p>

    </div>
  );
}

export default App;
