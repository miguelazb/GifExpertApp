(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),u=(a(15),a(7),a(2)),l=a(9),o=function(e){var t=e.setCategorias,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Agregar"}))},m=a(4),s=a.n(m),p=a(8),d=function(){var e=Object(p.a)(s.a.mark((function e(t){var a,n,r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat("https://api.giphy.com/v1/gifs/search","?api_key=").concat("zIHXbrmUQ5phEWLtK7rdFHDSdwUHThZD","&q=").concat(encodeURI(t),"&limit=").concat(5),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{alt:t,src:a}),r.a.createElement("p",null," ",t," "))},g=function(e){var t=e.categoria,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){d(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__fadeInDown"}," ",t," "),i&&r.a.createElement("p",{className:"animate__animated animate__flash"}," Cargando... "),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(f,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(n.useState)(["One Punch Man"]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," GifExpertApp "),r.a.createElement(o,{setCategorias:c}),r.a.createElement("hr",null),r.a.createElement("ul",null,a.map((function(e){return r.a.createElement(g,{key:e,categoria:e})}))))};i.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.2162ca65.chunk.js.map