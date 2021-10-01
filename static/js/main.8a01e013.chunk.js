(this["webpackJsonpthe-ultimate-api-challenge-weather-app-react"]=this["webpackJsonpthe-ultimate-api-challenge-weather-app-react"]||[]).push([[0],{11:function(e,t,a){e.exports={card:"CurrentDay_card__2-yzD",cardInner:"CurrentDay_cardInner__2lPAt",gradient:"CurrentDay_gradient__3AXML",img:"CurrentDay_img__333K1",weekday:"CurrentDay_weekday__2xnub"}},15:function(e,t,a){e.exports={heading:"Header_heading__sAf1D",light:"Header_light__1p9Mt"}},16:function(e,t,a){e.exports={input:"Form_input__2ESfd",button:"Form_button__243jh"}},17:function(e,t,a){e.exports={card:"Forecast_card__n_nZv",box:"Forecast_box__1v5YN"}},28:function(e,t,a){e.exports={error:"Error_error__1Ykqe"}},29:function(e,t,a){e.exports={box:"Loader_box__XZ2hR"}},30:function(e,t,a){e.exports={weekday:"UpcomingDaysForecastItem_weekday__quQBM"}},31:function(e,t,a){e.exports={weekList:"UpcomingDaysForecast_weekList__3DYk_"}},32:function(e,t,a){e.exports={box:"Page_box__2nPNz"}},38:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(27),s=a.n(c),i=(a(37),a(38),a(15)),o=a.n(i),u=a(0),l=function(){return Object(u.jsxs)("h1",{className:o.a.heading,children:[Object(u.jsx)("span",{className:o.a.light,children:"Weather"})," Forecast"]})},d=a(9),m=a(16),b=a.n(m),j=function(e){var t=e.submitSearch,a=Object(n.useState)(""),r=Object(d.a)(a,2),c=r[0],s=r[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c&&""!==c&&t(c)},children:[Object(u.jsx)("input",{"aria-label":"location",type:"text",className:"".concat(b.a.input," form-control"),placeholder:"Search for location",required:!0,value:c,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("button",{type:"submit",className:b.a.button,children:"SEARCH"})]})},h=a(28),p=a.n(h),x=function(e){var t=e.message;return Object(u.jsx)("div",{className:"".concat(p.a.error," alert position-absolute"),role:"alert",children:t})};x.defaultProps={message:"An error occurred"};var f=x,w=a(29),O=a.n(w),g=function(){return Object(u.jsx)("div",{className:O.a.box,children:Object(u.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"54px",height:"60px",viewBox:"0 0 24 30",children:[Object(u.jsx)("rect",{x:"0",y:"0",width:"3",height:"10",fill:"#333",children:Object(u.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0",dur:"0.6s",repeatCount:"indefinite"})}),Object(u.jsx)("rect",{x:"10",y:"0",width:"3",height:"10",fill:"#333",children:Object(u.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.2s",dur:"0.6s",repeatCount:"indefinite"})}),Object(u.jsx)("rect",{x:"20",y:"0",width:"3",height:"10",fill:"#333",children:Object(u.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.4s",dur:"0.6s",repeatCount:"indefinite"})})]})})},v=a(4),y=a(64),_=a(65),A=a(66),N=a(11),D=a.n(N),k=function(e){var t=e.weekday,a=e.date,n=e.location,r=e.temperature,c=e.weatherIcon,s=e.weatherDescription;return Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsx)("div",{className:D.a.img}),Object(u.jsx)("div",{className:D.a.gradient}),Object(u.jsxs)("div",{className:"".concat(D.a.cardInner," d-flex flex-column justify-content-between pt-3 pb-2 pl-2"),children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"font-weight-bold mb-1",children:t}),Object(u.jsx)("p",{className:"mb-0",children:a}),Object(u.jsxs)("p",{className:"d-flex align-items-baseline font-weight-lighter mb-1",children:[Object(u.jsx)("img",{width:"10",height:"15",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABHCAAAAABgu0sfAAAAAnRSTlMAAHaTzTgAAAKXSURBVHgBldQDtyNLFMXx/eln4RljW89vbNtzbdtW8p/qpHWq+6ZyfwvtrrNLKnPi3XQVmP9yQU25PUfO8lMF7F+gYP2iGlijVOWkdtFD3crLQ6r55VFS5LRKVYls35JxZY2awyo4QaRyVgU/1T+6I895Iu9U6iaRxzJOEtGutnEeKK+WQg0s4JwIfWHN2jI6cBSwCcybRhSE85fqVoBXyjk8Ss3MJTNC2Z/3AxVlDuyQ+VOZOeBWenZKqTaMSakYwPbWGJFK78N7HVtE1pSaBH6Kh/a6El9x1vfnSmFKid+BDknTgLlJh1JPcG74lQFLSmwB7cq5j2OWR312vVDsALAhYwK4rdgl4D+9BY4o1g/slwWs5i/aNQU0nAZL3gsLqnh3BuR57r1QFd6d1/JcAg6aMvxPXslzEThsPql6n/TI86hQ2Ezhjsd/YVEfgQOKjQLyAFv5i26dA54pdgpYktGb31vOAjfirs7He1G+riJd9Yt5wG5nz5W6av8Rf/8Q+EeJIZxZxQYx0+V7oF+OnYrLRFZfX738ZJ4apUaS+bhiN+kJjLWyhXzWdKP0Pyk7f8aznNvAPeVcW6Fm66lyDuSqPIwjz7598lSAu/ldZUwBj239dlsvh/OTUnfDu/Kov/w2gM9qYD+ODP9OWfaHMtqAlcbZt8vSXW+Y/Vd5zuE0yj6sgmlgSD5/3C2cA7tmf6AST3DKH/jZzbb/RuHs4cEZtSGtbmAxnN3A+TuY3fgDJ5zdmAd6Cw3/ElwVP4eyWy+BnXD2Qtrn5uq+An7L//dhnD2gH5i12YNwLioyHGcP+hfH1hi0DHRK2jHjHi6tnn1HTXoPzNTK+l3NIjaiph2hTnswSuSR9gI/e9iN4noP6uOVyn0DXHepivCQVPgAAAAASUVORK5CYII=",className:"mr-1",alt:"location pin icon"}),Object(u.jsx)("span",{children:n})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{width:"45",src:c,alt:""}),Object(u.jsxs)("h2",{className:"font-weight-bold mb-1",children:[Object(u.jsx)("span",{children:r}),"\xb0C"]}),Object(u.jsx)("h5",{className:"font-weight-lighter",children:s})]})]})]})},S=function(e){var t=e.name,a=e.value,n=e.unit;return Object(u.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(u.jsx)("p",{className:"mb-0 font-weight-bolder text-uppercase",children:t}),Object(u.jsxs)("p",{className:"mb-0",children:[a," ",n]})]})},H=function(e){var t=e.forecast;return Object(u.jsx)("div",{className:"mt-4 mt-md-2",children:Object(u.jsx)("div",{className:"d-flex flex-column mb-2",children:t.map((function(e){return Object(n.createElement)(S,Object(v.a)(Object(v.a)({},e),{},{key:e.name}))}))})})},L=a(30),P=a.n(L),T=function(e){var t=e.weekday,a=e.temperature,n=e.imgUrl;return Object(u.jsxs)("li",{className:"".concat(P.a.weekday," d-flex flex-column justify-content-center align-items-center p-2"),children:[Object(u.jsx)("img",{className:"mb-2",width:"30",src:"".concat("https://www.metaweather.com/static/","img/weather/").concat(n,".svg"),alt:""}),Object(u.jsx)("span",{className:"mb-2",children:t}),Object(u.jsxs)("span",{className:"font-weight-bold",children:[a,"\xb0"]})]})},E=a(31),F=a.n(E),M=function(e){var t=e.days;return Object(u.jsx)("ul",{className:"".concat(F.a.weekList," d-flex justify-content-between p-0"),children:t.map((function(e){return Object(n.createElement)(T,Object(v.a)(Object(v.a)({},e),{},{key:e.weekday}))}))})},C=a(17),R=a.n(C),V=function(e){var t=e.forecast;return Object(u.jsx)(y.a,{className:R.a.box,children:Object(u.jsxs)(_.a,{children:[Object(u.jsx)(A.a,{xs:12,md:4,children:Object(u.jsx)("div",{className:R.a.card,children:Object(u.jsx)(k,Object(v.a)({},t.currentDay))})}),Object(u.jsxs)(A.a,{xs:12,md:8,className:"d-flex flex-column justify-content-between",children:[Object(u.jsx)(H,{forecast:t.currentDayDetails}),Object(u.jsx)(M,{days:t.upcomingDays})]})]})})},I=a(32),K=a.n(I),Y=a(5),B=a.n(Y),Q=a(12),W=a(18),q=a.n(W),U=function(e){return[{name:"predictability",value:e.predictability,unit:"%"},{name:"humidity",value:e.humidity,unit:"%"},{name:"wind",value:Math.round(e.wind_speed),unit:"km/h"},{name:"air pressure",value:e.air_pressure,unit:"mb"},{name:"max temp",value:Math.round(e.max_temp),unit:"\xb0C"},{name:"min temp",value:Math.round(e.min_temp),unit:"\xb0C"}]},Z=a(10),z=a.n(Z),J=function(e,t){return{weekday:z()(e.applicable_date).format("dddd"),date:z()(e.applicable_date).format("MMMM Do"),location:t,temperature:Math.round(e.the_temp),weatherIcon:"'https://www.metaweather.com/static/img/weather/".concat(e.weather_state_abbr,".svg"),weatherDescription:e.weather_state_name}},X=function(e){return e.slice(1).map((function(e){return{imgUrl:e.weather_state_abbr,temperature:Math.round(e.max_temp),weekday:(t=e.applicable_date,z()(t).format("dddd").substring(0,3))};var t}))},G="".concat("https://the-ultimate-api-challenge.herokuapp.com","/").concat("https://www.metaweather.com/api/location"),$=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(d.a)(c,2),i=s[0],o=s[1],u=Object(n.useState)(null),l=Object(d.a)(u,2),m=l[0],b=l[1],j=function(){var e=Object(Q.a)(B.a.mark((function e(t){var a,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q()("".concat(G,"/search"),{params:{query:t}});case 2:if(a=e.sent,(n=a.data)&&0!==n.length){e.next=8;break}return r("There is no such location"),o(!1),e.abrupt("return");case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(Q.a)(B.a.mark((function e(t){var a,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q()("".concat(G,"/").concat(t));case 2:if(a=e.sent,(n=a.data)&&0!==n.length){e.next=8;break}return r("Something went wrong."),o(!1),e.abrupt("return");case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=J(e.consolidated_weather[0],e.title),a=U(e.consolidated_weather[0]),n=X(e.consolidated_weather);b({currentDay:t,currentDayDetails:a,upcomingDays:n}),o(!1)};return{isError:a,isLoading:i,forecast:m,submitRequest:function(){var e=Object(Q.a)(B.a.mark((function e(t){var a,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),r(!1),e.next=4,j(t);case 4:return a=e.sent,e.next=7,h(a[0].woeid);case 7:n=e.sent,p(n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},ee=function(){var e=$(),t=e.isError,a=e.isLoading,r=e.forecast,c=e.submitRequest;return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(l,{}),!r&&Object(u.jsxs)("div",{className:"".concat(K.a.box," position-relative"),children:[!a&&Object(u.jsx)(j,{submitSearch:function(e){c(e)}}),t&&Object(u.jsx)(f,{message:t}),a&&Object(u.jsx)(g,{})]}),r&&Object(u.jsx)(V,{forecast:r})]})};a(61);var te=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(ee,{})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(te,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.8a01e013.chunk.js.map