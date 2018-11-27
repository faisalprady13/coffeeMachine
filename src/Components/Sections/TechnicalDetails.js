import React from 'react'
import machinePic from '../../Assets/img/details_machine.png';

const TechnicalDetails = () => {
  return (
    <section className="technical_details-section" id="details">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2>Technical Details</h2>
            <p>Power: <span>max. 1,470 watts</span></p>
            <p>Pump pressure: <span>15 bar</span></p>
            <p>Volume of water tank: <span>1.25 liters(6 cups)</span></p>
            <p>Automatic pressure release</p>
            <p>Removable drip tray with stainless steel grid</p>
            <p>Removable nozzle attachment</p>
            <p>Non-slip rubber pads</p>
            <p>Power supply: <span>220-240 V - | 50/60 Hz</span></p>
          </div>
          <div className="col-6">
            <img src={machinePic} alt="Coffee Machine 3"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnicalDetails;
