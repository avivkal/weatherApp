(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{127:function(e,t,r){},203:function(e,t,r){e.exports=r(358)},208:function(e,t,r){},230:function(e,t,r){},242:function(e,t,r){},353:function(e,t,r){},354:function(e,t,r){},358:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(14),i=r.n(o),c=(r(208),r(30)),s=r(31),u=r(37),l=r(36),p=(r(127),r(365)),m=r(366),d=r(367),f=r(368),v=r(370),h=r(35),T=r(42),E=r.n(T),y=r(124),O=(r(230),r(369)),b=(r(231),r(56),r(82)),g="?apikey=eubH33xl3udPrlkaN4qNXhTGkbkYhpWD",F=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],k="UPDATE_TEXT",x="UPDATE_SEARCH",A="SET_CURRENT_CITY_DETAILS",D="TOGGLE",j="UPDATE_FORECAST",S="ADD_TO_FAVORITES",M="SET_FAVORITE_CITY_DETAILS",C="FIRST_TIME_FINISHED",N="CLEAR",I="REMOVE_FROM_FAVORITES",_="TOGGLE_DARK_MODE",R="CLOSE_MODAL",L="OPEN_MODAL",w="UPDATE_FAVORITES",V="FIRST_TIME_FINISHED_FAVORITES",H=r(8),P={favorites:[],current:{},searchText:"",searchArr:[],unit:"C",firstTime:!0,firstTimeFavorites:!0,darkmode:!1,show:!1,modalTitle:"",modalText:""},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_TEXT":return Object(H.a)(Object(H.a)({},e),{},{searchText:t.val});case"UPDATE_SEARCH":return Object(H.a)(Object(H.a)({},e),{},{searchArr:t.arr});case"SET_CURRENT_CITY_DETAILS":return Object(H.a)(Object(H.a)({},e),{},{current:{key:t.cityKey,cityName:t.cityName,currentTemp:t.currentTemp,currentStateOfWeather:t.currentStateOfWeather,fiveDaysForecast:t.fiveDaysForecast,icon:t.icon}});case"TOGGLE":return Object(H.a)(Object(H.a)({},e),{},{unit:t.unit,current:Object(H.a)(Object(H.a)({},e.current),{},{currentTemp:t.currentTemp,fiveDaysForecast:t.fiveDaysForecast})});case"UPDATE_FORECAST":return Object(H.a)(Object(H.a)({},e),{},{fiveDaysForecast:t.arr});case"ADD_TO_FAVORITES":return Object(H.a)(Object(H.a)({},e),{},{favorites:t.favorites});case"SET_FAVORITE_CITY_DETAILS":return Object(H.a)(Object(H.a)({},e),{},{current:Object(H.a)({},t.payload)});case"FIRST_TIME_FINISHED":return Object(H.a)(Object(H.a)({},e),{},{firstTime:!1});case"CLEAR":return Object(H.a)(Object(H.a)({},e),{},{searchArr:[],searchText:""});case"REMOVE_FROM_FAVORITES":return Object(H.a)(Object(H.a)({},e),{},{favorites:t.favorites});case"TOGGLE_DARK_MODE":return Object.assign({},e,{darkmode:!e.darkmode});case"CLOSE_MODAL":return Object(H.a)(Object(H.a)({},e),{},{show:!1});case"OPEN_MODAL":return Object(H.a)(Object(H.a)({},e),{},{show:!0,modalTitle:t.title,modalText:t.text});case"UPDATE_FAVORITES":return Object(H.a)(Object(H.a)({},e),{},{favorites:t.favorites});case"FIRST_TIME_FINISHED_FAVORITES":return Object(H.a)(Object(H.a)({},e),{},{firstTimeFavorites:!1});default:return e}},U=r(81),G=Object(U.b)(W),J=(r(191),function(e){return(1.8*e+32).toFixed(1)}),B=function(e){return((e-32)/1.8).toFixed(1)},K=function(e,t){return void 0!==t.find((function(t){return e.key===t.key}))},Y=function(e){return e.map((function(e){return e.Temperature.Minimum.Value=B(e.Temperature.Minimum.Value),e.Temperature.Maximum.Value=B(e.Temperature.Maximum.Value),e.Temperature.Minimum.Unit="C",e.Temperature.Maximum.Unit="C",e})),e},z=function(e){return e.map((function(e){return e.Temperature.Minimum.Value=J(e.Temperature.Minimum.Value),e.Temperature.Maximum.Value=J(e.Temperature.Maximum.Value),e.Temperature.Minimum.Unit="F",e.Temperature.Maximum.Unit="F",e})),e},q=function(){return{type:C}},X=function(){return{type:N}},Q=function(e){return localStorage.setItem("favorites",JSON.stringify(e)),{type:w,favorites:e}},Z=E.a.create({baseURL:"https://dataservice.accuweather.com/"}),$=r(373),ee=(r(242),function(e){return n.a.createElement($.a,{className:"col-xl-2 cards-style"},n.a.createElement($.a.Body,null,n.a.createElement($.a.Title,{className:"cards-title"},F[(e.today+e.index)%7]),n.a.createElement("br",null),n.a.createElement($.a.Text,{className:"cards-text"},e.currentDay.Temperature.Minimum.Value,"  - ",e.currentDay.Temperature.Maximum.Value," \xb0",e.unit)))}),te=function(e){return n.a.createElement("div",{className:"row justify-content-center"},Array.isArray(e.current.fiveDaysForecast)&&e.current.fiveDaysForecast.length?e.current.fiveDaysForecast.map((function(t,r){return n.a.createElement(ee,{currentDay:t,today:e.today,index:r,unit:e.unit,key:t.Date})})):null)},re=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(c.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).errorLog=function(){e.props.openModal("Note","Access denied to your location! No worries, we will use Tel Aviv as default.")},e.success=function(t){var r=t.coords;Z.get("locations/v1/cities/geoposition/search"+g+"&q="+r.latitude+"%2C"+r.longitude).then((function(t){e.submit(t.data.Key,t.data.EnglishName),e.props.firstTimeFinished()})).catch((function(t){return e.props.openModal("Error",t.toString())}))},e.changeHandler=function(t){e.props.updateText(t.target.value),Z.get("locations/v1/cities/autocomplete"+g+"&q="+t.target.value).then((function(t){for(var r=[],a=0;a<t.data.length;a++)r[a]={key:t.data[a].Key,text:t.data[a].LocalizedName+","+t.data[a].AdministrativeArea.LocalizedName+","+t.data[a].Country.ID,value:t.data[a].LocalizedName+","+t.data[a].AdministrativeArea.LocalizedName+","+t.data[a].Country.ID};e.props.updateSearch(r)})).catch((function(t){return e.props.openModal("Error",t.toString())}))},e.submit=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props.searchText[0].key,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.props.searchText[0].text.split(",")[0];E.a.all([Z.get("forecasts/v1/daily/5day/"+t+g),Z.get("currentconditions/v1/"+t+g)]).then((function(a){e.props.setCurrentCityDetails(a,t,r),e.props.clearText()})).catch((function(t){return e.props.openModal("Error",t.toString())}))},e.addToFavoritesHandler=function(){K(e.props.current,e.props.favorites)?e.props.removeFromFavorites(e.props.current.key):e.props.addToFavorites()},e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("favorites"));this.props.updateFavorites(t),this.props.first&&E.a.all([Z.get("forecasts/v1/daily/5day/215854"+g),Z.get("currentconditions/v1/215854"+g)]).then((function(t){e.props.setCurrentCityDetails(t,"215854","Tel Aviv"),e.props.firstTimeFinished()})).then((function(){navigator.geolocation.getCurrentPosition(e.success,e.errorLog,{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})})).catch((function(t){return e.props.openModal("Error",t.toString())}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:this.props.darkMode?"dark":"light"},n.a.createElement("section",{className:"search"},n.a.createElement(O.a,{className:"icon search-dropdown-style",icon:"world",button:!0,floating:!0,labeled:!0,options:this.props.searchText,search:!0,placeholder:"Enter City",onSearchChange:function(t){return e.changeHandler(t)},onChange:function(t){e.submit(function(e,t){var r=t.find((function(t){return t.text===e}));return void 0===r?t[0].key:r.key}(t.currentTarget.textContent,e.props.searchText),t.currentTarget.textContent.split(",")[0])}})),n.a.createElement(b.CSSTransitionGroup,{transitionName:"cards",transitionAppear:!0,transitionAppearTimeout:1e3,transitionEnterTimeout:1e3,transitionLeaveTimeout:1e3},n.a.createElement(p.a,{className:this.props.darkMode?"jumbotron-dark container":"jumbotron-light container"},n.a.createElement(m.a,{className:"show-grid"},n.a.createElement(d.a,{xs:6,className:"d-flex justify-content-start"},n.a.createElement("section",null,n.a.createElement("h3",{className:"DarkText"},this.props.current.cityName),n.a.createElement("h3",{className:"DarkText"},this.props.current.currentTemp," \xb0",this.props.unit),n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/"+this.props.current.icon+"-s.png",alt:"weather icon"})),"                        "),n.a.createElement(d.a,{xs:6,className:"d-flex justify-content-end"},n.a.createElement("section",null,K(this.props.current,this.props.favorites)?n.a.createElement(y.b,{className:"icons"}):n.a.createElement(y.a,{className:"icons"}),n.a.createElement(f.a,{variant:"dark",className:"add-to-favorites",onClick:this.addToFavoritesHandler},K(this.props.current,this.props.favorites)?"Remove from favorites":"Add to favorites")))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h1",{className:"dark-text state-of-weather"},this.props.current.currentStateOfWeather),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null)," ",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(te,{current:this.props.current,today:(new Date).getDay(),unit:this.props.unit}))),n.a.createElement(v.a,{show:this.props.show,onHide:this.props.closeModal},n.a.createElement(v.a.Header,{closeButton:!0},n.a.createElement(v.a.Title,null,this.props.modalTitle)),n.a.createElement(v.a.Body,null,this.props.modalText),n.a.createElement(v.a.Footer,null,n.a.createElement(f.a,{variant:"secondary",onClick:this.props.closeModal},"Close"))))}}]),r}(a.Component),ae=Object(h.b)((function(e){return{favorites:e.favorites,current:e.current,text:e.searchText,searchText:e.searchArr,unit:e.unit,first:e.firstTime,darkMode:e.darkmode,show:e.show,modalText:e.modalText,modalTitle:e.modalTitle}}),(function(e){return{updateText:function(t){return e(function(e){return{type:k,val:e}}(t))},updateSearch:function(t){return e(function(e){return{type:x,arr:e}}(t))},setCurrentCityDetails:function(t,r,a){return e(function(e,t,r){var a=e[1].data[0].WeatherIcon<10?"0"+e[1].data[0].WeatherIcon:e[1].data[0].WeatherIcon,n=Math.floor(e[1].data[0].Temperature.Metric.Value),o=e[1].data[0].WeatherText,i=Y(e[0].data.DailyForecasts);return{type:A,data:e,cityKey:t,cityName:r,icon:a,currentTemp:n,currentStateOfWeather:o,fiveDaysForecast:i}}(t,r,a))},updateForecast:function(t){return e(function(e){return{type:j,arr:e}}(t))},addToFavorites:function(){return e(function(){var e=G.getState().favorites,t=G.getState().current,r=e.concat(t);return localStorage.setItem("favorites",JSON.stringify(r)),{type:S,favorites:r}}())},firstTimeFinished:function(){return e(q())},clearText:function(){return e(X())},removeFromFavorites:function(t){return e(function(e){var t=G.getState().favorites.filter((function(t){return t.key!==e}));return localStorage.setItem("favorites",JSON.stringify(t)),{type:I,favorites:t}}(t))},closeModal:function(){return e({type:R})},openModal:function(t,r){return e(function(e,t){return{type:L,title:e,text:t}}(t,r))},updateFavorites:function(t){return e(Q(t))}}}))(re),ne=r(188),oe=(r(353),function(e){return n.a.createElement($.a,{className:"col-xl-2 favorites-cards",onClick:e.click},n.a.createElement($.a.Body,null,n.a.createElement($.a.Title,{className:"cards-text"},e.currentFavorite.cityName),n.a.createElement($.a.Text,{className:"cards-text"},e.currentTemp," \xb0",e.unit,n.a.createElement("br",null),n.a.createElement("br",null),e.currentFavorite.currentStateOfWeather,n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null))))}),ie=(r(354),function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},Array.isArray(e.favorites)&&e.favorites.length?e.favorites.map((function(t){return n.a.createElement(oe,{key:t.key,currentFavorite:t,click:function(){return e.click(t)},currentTemp:"F"===e.unit?J(t.currentTemp):t.currentTemp,unit:e.unit})})):n.a.createElement("h1",{className:e.darkMode?"light-text no-favorites-h1":"dark-text no-favorites-h1"},"You don't have any favorites currently")))}),ce=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(c.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleClickOnCard=function(t){e.props.history.push("/myFinalProject"),e.props.clearText(),e.props.setFavoriteCityDetails(t)},e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("favorites")),r=[];if(this.props.firstTimeFavorites){var a,n=Object(ne.a)(t);try{for(n.s();!(a=n.n()).done;){var o=a.value;r.push(E.a.all([Z.get("forecasts/v1/daily/5day/"+o.key+g),Z.get("currentconditions/v1/"+o.key+g)]))}}catch(i){n.e(i)}finally{n.f()}Promise.all(r).then((function(r){for(var a=0;a<r.length;a++)t[a].fiveDaysForecast="C"===e.props.unit?Y(r[a][0].data.DailyForecasts):r[a][0].data.DailyForecasts,t[a].currentStateOfWeather=r[a][1].data[0].WeatherText,t[a].currentTemp=Math.floor(r[a][1].data[0].Temperature.Metric.Value),t[a].icon=r[a][1].data[0].WeatherIcon<10?"0"+r[a][1].data[0].WeatherIcon:r[a][1].data[0].WeatherIcon;e.props.updateFavorites(t),e.props.firstTimeFinishedFavorites()}))}}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:this.props.darkMode?"dark":"light"},n.a.createElement(b.CSSTransitionGroup,{transitionName:"cards",transitionAppear:!0,transitionAppearTimeout:1e3,transitionEnterTimeout:1e3,transitionLeaveTimeout:1e3},n.a.createElement(ie,{click:function(t){return e.handleClickOnCard(t)},unit:this.props.unit,favorites:this.props.favorites,darkMode:this.props.darkMode})))}}]),r}(a.Component),se=Object(h.b)((function(e){return{favorites:e.favorites,current:e.current,darkMode:e.darkmode,unit:e.unit,firstTimeFavorites:e.firstTimeFavorites}}),(function(e){return{setFavoriteCityDetails:function(t){return e({type:M,payload:t})},firstTimeFinished:function(){return e(q())},clearText:function(){return e(X())},firstTimeFinishedFavorites:function(){return e({type:V})},updateFavorites:function(t){return e(Q(t))}}}))(ce),ue=r(55),le=r(10),pe=r(372),me=r(371),de=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(c.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).toggleHandle=function(){"C"===e.props.unit?e.props.toggle(J(e.props.current.currentTemp),"F",z(e.props.current.fiveDaysForecast)):e.props.toggle(B(e.props.current.currentTemp),"C",Y(e.props.current.fiveDaysForecast))},e}return Object(s.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement(pe.a,{collapseOnSelect:!0,expand:"lg",bg:this.props.darkMode?"light":"dark",variant:this.props.darkMode?"light":"dark"},n.a.createElement(pe.a.Brand,{as:ue.b,to:"/myFinalProject"},"Herolo Weather Task"),n.a.createElement(f.a,{style:{backgroundColor:"#343A40",border:"1px solid #343A40"},onClick:function(){e.toggleHandle()},variant:"secondary"},"\xb0C / \xb0F"),n.a.createElement(f.a,{style:{backgroundColor:"#343A40",border:"1px solid #343A40",marginLeft:"10px"},onClick:function(){e.props.toggleDarkMode()},variant:"secondary"},"Dark Mode"),n.a.createElement(pe.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.a.createElement(pe.a.Collapse,{id:"responsive-navbar-nav"},n.a.createElement(me.a,{className:"ml-auto"},n.a.createElement(me.a.Link,{as:ue.b,to:"/myFinalProject"},"Home"),n.a.createElement(me.a.Link,{as:ue.b,to:"/favorites"},"Favorites "))))}}]),r}(a.Component),fe=Object(h.b)((function(e){return{darkMode:e.darkmode,unit:e.unit,current:e.current}}),(function(e){return{toggle:function(t,r,a){return e(function(e,t,r){return{type:D,unit:t,currentTemp:e,fiveDaysForecast:r}}(t,r,a))},toggleDarkMode:function(){return e({type:_})}}}))(de),ve=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(ue.a,null,n.a.createElement(fe,null),n.a.createElement(le.a,{path:"/myFinalProject",exact:!0,component:ae}),n.a.createElement(le.a,{path:"/favorites",exact:!0,component:se})))}}]),r}(a.Component);i.a.render(n.a.createElement(h.a,{store:G},n.a.createElement(ve,null)),document.getElementById("root"))}},[[203,1,2]]]);
//# sourceMappingURL=main.bd2f560c.chunk.js.map