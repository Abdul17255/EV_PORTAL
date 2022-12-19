import React, { Component } from 'react'
import "../../component/dashboard_charger_status/index.scss"
 class DashboardChargerStatus extends Component {
  render() {
    return (
      <div className='charger-status'>
     <p className='charger-status-text'> Charger Status</p>
     <div className='charger-status-div'>

     <div className='charger-status-available'>
     <img src={require("../../assets/images/noun-bus-1260937/bus.png")} alt=""/>
     <h3 className='charger-available-number'>39</h3>
     <p className='charger-available-text'>AVAILABLE CHARGERS</p>
     <div className="charger-available-button">
     <button
       type="button"
       className="charger-available-btn"
       //onClick={this.availableCharger}
     >
       LIST VIEW
       <img
         className="charger-available-button-png"
         src={require("../../assets/images/Icon feather-arrow-up-left/black-up-arrow.png")}
         alt="next"
       />
     </button>
   </div>
     </div>


     <div className='charger-status-occupied'>
     <img src={require("../../assets/images/noun-bus-1260937/bus.png")} alt=""/>
     <h3 className='charger-occupied-number'>06</h3>
     <p className='charger-occupied-text'>OCCUPIED CHARGERS</p>
     <div className="charger-occupied-button">
     <button
       type="button"
       className="charger-occupied-btn"
       //onClick={this.availableCharger}
     >
       LIST VIEW
       <img
         className="charger-occupied-button-png"
         src={require("../../assets/images/Icon feather-arrow-up-left/black-up-arrow.png")}
         alt="next"
       />
     </button>
   </div>
     </div>

     <div className='charger-status-breakdown'>
     <img src={require("../../assets/images/noun-bus-1260937/bus.png")} alt=""/>
     <h3 className='charger-breakdown-number'>39</h3>
     <p className='charger-breakdown-text'>BREAKDOWN CHARGERS</p>
     <div className="charger-breakdown-button">
     <button
       type="button"
       className="charger-breakdown-btn"
       //onClick={this.availableCharger}
     >
       LIST VIEW
       <img
         className="charger-breakdown-button-png"
         src={require("../../assets/images/Icon feather-arrow-up-left/black-up-arrow.png")}
         alt="next"
       />
     </button>
   </div>
     </div>

     <div className='charger-status-efficiency'>
     <img src={require("../../assets/images/noun-bus-1260937/bus.png")} alt=""/>
     <h3 className='charger-efficiency-number'>89.9%</h3>
     <p className='charger-efficiency-text'>CHARGER EFFICIENCY</p>
     <div className="charger-efficiency-button">
     <button
       type="button"
       className="charger-efficiency-btn"
       //onClick={this.availableCharger}
     >
       LIST VIEW
       <img
         className="charger-efficiency-button-png"
         src={require("../../assets/images/Icon feather-arrow-up-left/black-up-arrow.png")}
         alt="next"
       />
     </button>
   </div>
     </div>

     <div className='charger-status-opportunity'>
     <img src={require("../../assets/images/noun-bus-1260937/bus.png")} alt=""/>
     <h3 className='charger-opportunity-number'>90</h3>
     <p className='charger-opportunity-text'>OPPORTUNITY CHARGING</p>
     <div className="charger-opportunity-button">
     <button
       type="button"
       className="charger-opportunity-btn"
       //onClick={this.availableCharger}
     >
       LIST VIEW
       <img
         className="charger-opportunity-button-png"
         src={require("../../assets/images/Icon feather-arrow-up-left/black-up-arrow.png")}
         alt="next"
       />
     </button>
   </div>
     </div>


     </div>
      </div>
    )
  }
}
export default DashboardChargerStatus;