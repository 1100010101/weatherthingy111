(this["webpackJsonpweather-appthingy-storm"]=this["webpackJsonpweather-appthingy-storm"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),s=a.n(c),o=(a(12),a(13),a(3)),i=a(4),m=a(6),u=a(5),l=(a(14),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).formatDay=function(e){var t=new Date(1e3*e);return t.getDate()+"."+(t.getMonth()+1)},n.formatTime=function(e){var t=new Date(1e3*e),a=t.getHours(),n=t.getMinutes();return n<10&&(n="0"+n),a+"."+n},n.changeFocusedForecast=function(e){n.setState({focusedForecastDt:e.dt})},n.state={forecasts:null,focusedForecastDt:null},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;new Promise((function(e){fetch("http://api.openweathermap.org/data/2.5/forecast?id=658225&APPID=".concat("08c8375d084a3cee738454300f685ffc","&units=metric&lang=fi")).then((function(e){if(200!==e.status)throw new Error(e.status);return e.json()})).then((function(t){e(t)})).catch((function(e){console.warn(e)}))})).then((function(t){e.setState({forecasts:t,focusedForecastDt:t.list[0].dt})}))}},{key:"renderWeatherItem",value:function(e){var t=this;return r.a.createElement("div",{className:"Weather_box",key:e.dt,onClick:function(){return t.changeFocusedForecast(e)}},r.a.createElement("div",{className:"Weather_day"},this.formatDay(e.dt)),r.a.createElement("div",{className:"Weather_time"},this.formatTime(e.dt)),r.a.createElement("div",{className:"Weather_temp"},Math.round(e.main.temp),"\xb0"),r.a.createElement("img",{src:"http://openweathermap.org/img/wn/"+e.weather[0].icon+".png",alt:"Logo"}))}},{key:"render",value:function(){var e=this,t=this.state.forecasts,a=this.state.focusedForecastDt;if(!t)return null;console.log(t);var n=t.list.find((function(e){return e.dt===a}));return r.a.createElement("div",{className:"Weather"},r.a.createElement("div",{className:"Weather_focused"},r.a.createElement("div",{className:"Weather_day"},this.formatDay(n.dt)),r.a.createElement("div",{className:"Weather_time"},this.formatTime(n.dt)),r.a.createElement("div",{className:"Weather_temp"},Math.round(n.main.temp),"\xb0"),r.a.createElement("div",{className:"Weather_desc"},n.weather[0].description),r.a.createElement("img",{src:"http://openweathermap.org/img/wn/"+n.weather[0].icon+".png",alt:"Logo"})),r.a.createElement("div",{className:"Weather_forecast"},t.list.map((function(t){return e.renderWeatherItem(t)}))))}}]),a}(n.Component));var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"Sademyrsky"),r.a.createElement(l,null),"Moi, mit\xe4 kuuluu?")};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.a15416c0.chunk.js.map