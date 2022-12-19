import React, { Component } from 'react';
import "../driver_monitoring_calanderview/index.scss"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

var now = new Date();
now.setDate(now.getDate());
class CalanderView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date:now,
        };
      }
    render() {
        return (
            <div className='calendar-container'>
        <Calendar  value={this.state.date} tileContent="     | Present" 
        
      
        />
      </div>
        );
    }
}

export default CalanderView;