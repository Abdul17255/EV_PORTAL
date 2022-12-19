import React, { Component } from 'react'
import "../../component/dashboard_vehicle_perday/index.scss"
 class DashboardVehicleperDay extends Component {
  render() {
    return (
      
      <div className='vehicle-perday'>
    
   
   

  <div>  <img className='perday-image' src={require("../../assets/images/vehicleperday/perday.png")} alt=""/>
  </div>
  
  <div className='perday-content'>
    <div className='perday-texts'>
  <h3 className='perday-number'>35</h3>
  <p className='perday-text'>AVERAGE VEHICLE<br/> RUNNING  KM PER DAY</p>
  </div>
  <div className='perday-texts'>
  <h3 className='perday-number-one'>45</h3>
  <p className='perday-text-one'>ABOVE VEHICLE RUNNING<br/> BELOW 200 KMS/DAY</p>
  </div>
<div className='perday-texts'>
  <h3 className='perday-number-one'>67</h3>
<p className='perday-text-one'>BELOW VEHICLE RUNNING<br/> BELOW 200 KMS/DAY</p>
  </div>

    </div>
   
   
  
  
 
 


</div>




    
    
  
      
    )
  }
}
export default  DashboardVehicleperDay ;