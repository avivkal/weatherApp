(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[5],{149:function(e,t,a){"use strict";a.d(t,"e",(function(){return h})),a.d(t,"c",(function(){return v})),a.d(t,"b",(function(){return y})),a.d(t,"a",(function(){return T})),a.d(t,"d",(function(){return E}));var n=a(21),r=a.n(n),c=a(217),o=a(34),i=a(10),s=a(13),l=a.n(s),u=a(50),m=a(14),d=a(4),f=a(17),p=a(29),h=function(e){return{type:i.a.SET_FAVORITE_CITY_DETAILS,payload:e}},v=function(){return{type:i.a.FIRST_TIME_FINISHED_FAVORITES}},y=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n,o,i,s,h,y,E;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(Object(f.c)()),a=Object(u.a)(),n=[],!Object(m.a)(a)){e.next=13;break}o=Object(c.a)(a);try{for(o.s();!(i=o.n()).done;)s=i.value,n.push(l.a.all([l.a.get("forecasts/v1/daily/5day/"+s.key+d.a),l.a.get("currentconditions/v1/"+s.key+d.a)]))}catch(r){o.e(r)}finally{o.f()}return h=p.a.getState().home.unit,e.next=9,l.a.all(n);case 9:for(y=e.sent,E=0;E<y.length;E++)a[E].fiveDaysForecast=h===d.b?Object(m.g)(y[E][0].data.DailyForecasts):y[E][0].data.DailyForecasts,a[E].currentStateOfWeather=y[E][1].data[0].WeatherText,a[E].currentTemp=h===d.b?Math.floor(y[E][1].data[0].Temperature.Metric.Value):Math.floor(y[E][1].data[0].Temperature.Imperial.Value),a[E].icon=y[E][1].data[0].WeatherIcon<10?"0"+y[E][1].data[0].WeatherIcon:y[E][1].data[0].WeatherIcon;t(Object(f.d)(a)),t(v());case 13:t(Object(f.b)());case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(e){var t=p.a.getState().favorites.favorites.filter((function(t){return t.key!==e}));return Object(u.b)(t),{type:i.a.REMOVE_FROM_FAVORITES,favorites:t}},T=function(){var e=Object(u.a)(),t=p.a.getState().home.current,a=[];return Object(m.a)(e)?a=e.concat(t):a.push(t),Object(u.b)(a),{type:i.a.ADD_TO_FAVORITES,favorites:a}}},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},174:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(4),o=a(391),i=(a(150),a(14)),s=function(e){var t=e.today,a=e.index,n=e.currentDay,s=e.unit;return r.a.createElement(o.a,{className:"col-xl-2 cards-style"},r.a.createElement(o.a.Body,null,r.a.createElement(o.a.Title,{className:"cards-title"},c.d[(t+a)%7]),r.a.createElement("div",{className:"cards-text card-margin"},n.Temperature.Minimum.Value,"  - ",n.Temperature.Maximum.Value," \xb0",s,r.a.createElement("div",{className:"row icons-day-night justify-content-center"},r.a.createElement("span",{className:"d-flex justify-content-start span-width"},"Day:"),r.a.createElement("img",{className:"icons-images",src:"".concat(c.j).concat(Object(i.f)(n.Day.Icon)).concat(c.k),alt:"weather icon day"})),r.a.createElement("div",{className:"row icons-day-night justify-content-center"},r.a.createElement("span",{className:"d-flex justify-content-start span-width"},"Night:"),r.a.createElement("img",{className:"icons-images",src:"".concat(c.j).concat(Object(i.f)(n.Night.Icon)).concat(c.k),alt:"weather icon night"})))))},l=a(72),u=(a(151),function(e){var t=e.currentFavorite,a=t.currentTemp,n=t.cityName,i=t.currentStateOfWeather,s=t.icon,u=e.click,m=e.unit;return r.a.createElement(o.a,{className:"col-lg-2 favorites-cards",onClick:u,as:l.a},r.a.createElement(o.a.Body,null,r.a.createElement(o.a.Title,{className:"cards-text"},n),r.a.createElement("div",{className:"cards-text"},a," \xb0",m,r.a.createElement("div",{className:"current-state"},i),r.a.createElement("div",{className:"image"},r.a.createElement("img",{className:"icons-images",src:"".concat(c.j).concat(s).concat(c.k),alt:"weather icon day"})))))});a(152),t.a=function(e){var t=e.favorites,a=e.click,n=e.today,c=e.current,o=e.unit;return e.isFav?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},Object(i.a)(t)?t.map((function(e){return r.a.createElement(u,{key:e.key,currentFavorite:e,click:function(){return a(e)},currentTemp:e.currentTemp,unit:o})})):r.a.createElement("h1",{className:"text-".concat(e.darkModeText,"-mode-active no-favorites-h1")},"You don't have any favorites currently"))):r.a.createElement("div",{className:"row justify-content-center"},Object(i.a)(c.fiveDaysForecast)&&c.fiveDaysForecast.map((function(e,t){return r.a.createElement(s,{currentDay:e,today:n,index:t,unit:o,key:e.Date})})))}},230:function(e,t,a){},247:function(e,t,a){},390:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a(23),c=a(25),o=a(24),i=a(0),s=a.n(i),l=a(35),u=(a(230),a(388)),m=(a(231),a(176)),d=a(17),f=a(41),p=a(21),h=a.n(p),v=a(34),y=a(10),E=a(13),T=a.n(E),b=a(4),g=a(36),j=function(e){return{type:y.a.UPDATE_TEXT,val:e}},N=function(e){return{type:y.a.UPDATE_SEARCH,arr:e}},O=a(149),k=a(14),x=a(50),w=a(389),F=a(109),D=function(e){return s.a.createElement(w.a,{show:e.show,onHide:e.closeModal},s.a.createElement(w.a.Header,{closeButton:!0},s.a.createElement(w.a.Title,null,e.modalTitle)),s.a.createElement(w.a.Body,null,e.modalText),s.a.createElement(w.a.Footer,null,s.a.createElement(F.a,{variant:"secondary",onClick:e.closeModal},"Close")))},M=a(378),A=a(384),C=a(385),I=a(386),S=a(174),_=(a(247),function(e){var t=e.darkModeText,a=e.current,n=e.favorites,r=e.click,c=e.unit;return void 0===a.icon?s.a.createElement("div",null):s.a.createElement(A.a,{className:"jumbotron-".concat(t," container fluid")},s.a.createElement(C.a,{className:"show-grid"},s.a.createElement(I.a,{md:{span:6,offset:3},className:"justify-content-center"},s.a.createElement("section",null,s.a.createElement("h2",{className:"city-details"},a.cityName),s.a.createElement("h2",{className:"city-details"},a.currentTemp," \xb0",c),s.a.createElement("img",{className:"icons-images",src:"".concat(b.j).concat(a.icon).concat(b.k),alt:"weather icon"})),"                        "),s.a.createElement(I.a,{md:3,className:"d-flex justify-content-center"},s.a.createElement("section",null,Object(k.h)(a,n)?s.a.createElement(M.b,{className:"icons",onClick:r}):s.a.createElement(M.a,{className:"icons",onClick:r}),s.a.createElement(F.a,{variant:"dark",className:"add-to-favorites",onClick:r},Object(k.h)(a,n)?"Remove from favorites":"Add to favorites")))),s.a.createElement("h1",{className:"dark-text state-of-weather"},a.currentStateOfWeather),s.a.createElement("div",{className:"cards-list-home"},s.a.createElement(S.a,{current:a,today:(new Date).getDay(),unit:c,isFav:!1})))}),H=a(248),R=a(110),V=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).addToFavoritesHandler=function(){Object(k.h)(e.props.current,e.props.favorites)?e.props.removeFromFavorites(e.props.current.key):e.props.addToFavorites()},e.changeHandlerDelay=Object(H.debounce)((function(t){e.props.changeHandler(t)}),500),e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){for(var e=1;e<=44;e++){if(9!==e&&10!==e&&27!==e&&28!==e)(new Image).src="https://www.accuweather.com/images/weathericons/"+Object(k.f)(e)+".svg"}var t=Object(x.a)();this.props.updateFavorites(t),this.props.firstTime&&this.props.firstLoad()}},{key:"render",value:function(){var e=this;return this.props.loading?s.a.createElement(R.a,{animation:"border",className:"spinner"}):s.a.createElement("div",{className:this.props.darkModeText},s.a.createElement("section",{className:"search"},s.a.createElement(u.a,{className:"icon search-dropdown-style",icon:"world",button:!0,floating:!0,labeled:!0,options:this.props.searchArr,search:!0,placeholder:"Enter City",onSearchChange:function(t){t.persist(),e.changeHandlerDelay(t)},onChange:function(t){e.props.submit(Object(k.i)(t.currentTarget.textContent,e.props.searchArr),t.currentTarget.textContent.split(",")[0])}})),s.a.createElement(m.CSSTransitionGroup,{transitionName:"cards",transitionAppear:!0,transitionAppearTimeout:1e3,transitionEnterTimeout:1e3,transitionLeaveTimeout:1e3},s.a.createElement(_,{unit:this.props.unit,current:this.props.current,favorites:this.props.favorites,click:this.addToFavoritesHandler,darkModeText:this.props.darkModeText})),s.a.createElement(D,{modalTitle:this.props.modalTitle,modalText:this.props.modalText,closeModal:this.props.closeModal,show:this.props.show}))}}]),a}(i.Component);t.default=Object(l.b)((function(e){var t=e.home,a=t.current,n=t.firstTime,r=t.unit,c=t.darkModeText,o=e.modal,i=o.modalTitle,s=o.modalText,l=o.show,u=e.search.searchArr;return{favorites:e.favorites.favorites,current:a,firstTime:n,show:l,modalText:s,modalTitle:i,searchArr:u,unit:r,darkModeText:c,loading:e.loading.loading}}),(function(e){return{updateText:function(t){return e(j(t))},updateSearch:function(t){return e(N(t))},setCurrentCityDetails:function(t,a,n){return e(f.c(t,a,n))},addToFavorites:function(){return e(O.a())},firstTimeFinished:function(){return e(f.b())},clearText:function(){return e(d.a())},removeFromFavorites:function(t){return e(O.d(t))},closeModal:function(){return e(g.a())},openModal:function(t,a){return e(g.b(t,a))},updateFavorites:function(t){return e(d.d(t))},submit:function(t,a){return e(f.d(t,a))},changeHandler:function(t){return e(function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a){var n,r,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(j(e.target.value)),t.next=4,T.a.get("locations/v1/cities/autocomplete"+b.a+"&q="+e.target.value);case 4:for(n=t.sent,r=[],c=0;c<n.data.length;c++)r[c]={key:n.data[c].Key,text:n.data[c].LocalizedName+","+n.data[c].AdministrativeArea.LocalizedName+","+n.data[c].Country.ID,value:n.data[c].LocalizedName+","+n.data[c].AdministrativeArea.LocalizedName+","+n.data[c].Country.ID};a(N(r)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a(Object(g.b)("Error",t.t0.toString()));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))},firstLoad:function(){return e(f.a())}}}))(V)}}]);
//# sourceMappingURL=5.c190fced.chunk.js.map