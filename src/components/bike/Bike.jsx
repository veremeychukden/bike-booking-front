import { useEffect, useState } from "react";
import "./Bike.css";
import axios from "axios";
import BikeItem from "../bike-item/BikeItem";

const Bike = () => {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    const getBikes = async () => {
      await axios.get("http://localhost:8000/bikes/")
      .then(bikes => setBikes(bikes.data))
      .catch(err => console.log(err))
    };
    
    getBikes();
  }, []);

  const deleteBikeHandler = async (ID) => {
    await axios.delete(`http://localhost:8000/bikes/${ID}`)
    .then(bikes => setBikes(bikes.data))
    .catch(err => console.log(err))
  }

  const updateBikeHandler = async (ID, status) => {
    await axios.patch(`http://localhost:8000/bikes/${ID}`, {
      status: status
    })
    .then(bikes => setBikes(bikes.data))
    .catch(err => console.log(err))
  }

  return (
    <div>
       {
        bikes ?
        bikes.map((bike) => {
          return(
            <BikeItem {...bike} key={bike.ID} deleteBikeHandler={deleteBikeHandler} updateBikeHandler={updateBikeHandler} />
          )
        })
        :
        null
      }
    </div>
  );
};

export default Bike;
