import "./Bike.css";

const Bike = ({ name, type, color, ID, status, price }) => {
  return (
    <div className='bike-container'>
      <div className="left-content">
        <div className='first-frame'>
          <h2>
            <span className='bike-name'>{name}</span> - {type} ({color})
          </h2>
          <p className='bike-id'>ID:{ID}</p>
        </div>
        <div className='second-frame'>
          <p>STATUS: {status} ↓</p>
        </div>
      </div>
      <div className="right-content">
        <h2><span className="delete-button">x</span></h2>
        <p className="bike-price">{price} UAH/hr.</p>
      </div>
    </div>
  );
};

export default Bike;
