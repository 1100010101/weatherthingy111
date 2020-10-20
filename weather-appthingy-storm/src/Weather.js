import React, {Component} from 'react'

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        <div className="Weather_focused">
        <div className="Weather_day">ma</div>
        <div className="Weather_time">12:00</div>
        <div className="Weather_temp">14C°</div>
        <img src='http://openweathermap.org/img/wn/09d.png'/>
        </div>

        <div className="Weather_forecast">

          <div className="Weather_box">
            <div className="Weather_day">ti</div>
            <div className="Weather_time">12:00</div>
            <div className="Weather_temp">16C°</div>
            <img src='http://openweathermap.org/img/wn/09d.png' alt="Logo"/>
          </div>
          <div className="Weather_box">
            <div className="Weather_day">ke</div>
            <div className="Weather_time">12:00</div>
            <div className="Weather_temp">15C°</div>
            <img src='http://openweathermap.org/img/wn/09d.png' alt="Logo"/>
          </div>
          <div className="Weather_box">
            <div className="Weather_day">to</div>
            <div className="Weather_time">12:00</div>
            <div className="Weather_temp">13C°</div>
            <img src='http://openweathermap.org/img/wn/09d.png' alt="Logo"/>
          </div>

        </div>

      </div>
    )
  }
}

export default Weather
