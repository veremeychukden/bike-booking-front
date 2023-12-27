import { useState } from 'react';
import STATUSES from '../../STATUSES';
import './BikeItem.css';
import axios from 'axios';

const BikeItem = ({ name, type, color, ID, price, status, deleteBikeHandler, updateBikeHandler }) => {
  const [statusSelect, setStatusSelect] = useState("↓");
  const options = [
    { value: STATUSES.BUSY, label: 'Busy' },
    { value: STATUSES.AVAILABLE, label: 'Available' },
    { value: STATUSES.UNAVAILABLE, label: 'Unavailable' },
  ];

  const handleSelectChange = (event) => { 
    let status = event.target.value;
    setStatusSelect(status);
    updateBikeHandler(ID, status);
  }

  const deleteClickHandler = (ID) => {
    deleteBikeHandler(ID);
  }

  return(
    <div className='bike-container'>
      <div className="left-content">
        <div className='first-frame'>
          <h2>
            <span className='bike-name'>{name}</span> - {type} ({color})
          </h2>
          <p className='bike-id'>ID:{ID}</p>
        </div>
        <div className='second-frame'>
          <p>STATUS: {status}</p>
          <div className='select select-multiple'>
          <select
            multiple={false}
            value={statusSelect.options}
            onChange={handleSelectChange}
          >
            {options.map((option) => {
              return (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>
        </div>
      </div>
      <div className="right-content">
        <h2><span className="delete-button" onClick={() => deleteClickHandler(ID)}>x</span></h2>
        <p className="bike-price">{price} UAH/hr.</p>
      </div>
    </div>
  )
}

export default BikeItem;