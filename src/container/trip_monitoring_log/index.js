import React, { Component } from 'react';
import TripMonitoringDelayed from '../../component/trip_monitoring_log_delayed';
import TripMonitoringInprogrss from '../../component/trip_monitoring_log_inprogress';
import TripMonitoringOntime from '../../component/trip_monitoring_log_ontime';

class TripMonitoringLog extends Component {

    constructor(props) {
        super(props);
        this.messageTimeOut = null;
        //let loginId = User.getLoginId();
        this.state = {
           
                selTab: 0,
                message: "",
                messageType: 0,
                tabs: [
                  {
                    tabIndex: 0,
                    tabName: "In Progress",
                  },
                  {
                    tabIndex: 1,
                    tabName: "On Time",
                  },
                  {
                    tabIndex: 2,
                    tabName: "Delayed",
                  },
                
                ],
        };
    
         this.tabClick = this.tabClick.bind(this);
      }
    
        tabClick = (evt, tabItem) => {
        const { selectedTab } = this.props;
        this.onClickCloseMessage();
    
        if (evt.target.parentElement) {
          let tabs = evt.target.parentElement.getElementsByClassName(
            "trip-creation__layout__col-1__block__wrapper__header__left__tab"
          );
          Array.prototype.forEach.call(tabs, function (tab) {
            tab.classList.remove("active");
          });
        }
        evt.currentTarget.classList.add("active");
    
        this.setState({ selTab: tabItem.tabIndex });
        selectedTab && selectedTab(evt, tabItem);
      };
    
      onClickCloseMessage() {
        this.messageTimeOut = null;
        this.setState({
          message: "",
          messageType: 0,
        });
      }
        render() {
    
            const { tabs, selTab } = this.state;
    
        let tabDom = [];
        if (tabs && tabs.length > 0) {
            tabs.map(function (tabItem, index) {
              let className =
                selTab === tabItem.tabIndex
                  ? "active trip-creation__layout__col-1__block__wrapper__header__left__tab ripple-effect"
                  : "trip-creation__layout__col-1__block__wrapper__header__left__tab ripple-effect";
              tabDom.push(
                <li
                  className={className}
                  key={tabItem.tabIndex}
                  onClick={(e) => this.tabClick(e, tabItem)}
                >
                  <a>{tabItem.tabName}</a>
                  <span className="trip-creation__layout__col-1__block__wrapper__header__left__tab-strip"></span>
                </li>
              );
            }, this);
          }
            return (
                <div className="trip-creation">
                <div className="trip-creation__layout">
                  <div className="trip-creation__layout__col-1">
                    <div className="trip-creation__layout__col-1__block">
                      <div className="trip-creation__layout__col-1__block__wrapper">
                        <div className="trip-creation__layout__col-1__block__wrapper__header">
                          <div className="trip-creation__layout__col-1__block__wrapper__header__left">
                            {tabDom}
                            {this.state.message && (
                              <div
                                className={`alert ${
                                  this.state.messageType == 1
                                    ? "success"
                                    : this.state.messageType == -1
                                    ? "error"
                                    : ""
                                }`}
                              >
                                <span
                                  className="closebtn"
                                  onClick={() => this.onClickCloseMessage()}
                                >
                                  &times;
                                </span>
                                <strong>{this.state.message}</strong>
                              </div>
                            )}
                          </div>
                        </div>
                        <hr className="trip-creation__layout__col-1__block__wrapper__horizontal-line" />
                        <div className="trip-creation__layout__col-1__block__wrapper__content">
                        {(() => {
                        if (selTab === 0) {
                          return <TripMonitoringInprogrss/>;
                      
                        } 
                        else if(selTab === 1)  {
                          return <TripMonitoringOntime/>;
                        }
                        else {
                            return <TripMonitoringDelayed/>;
                        }
                      })()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
        }
    }
export default TripMonitoringLog;