(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,n,t){e.exports=t(65)},42:function(e,n,t){},59:function(e,n,t){},65:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(30),o=t.n(c),l=(t(42),t(14)),u=t(6),i=t(12),s=t.n(i),m=(t(59),t(10)),d=t(13),f=t(8);function E(){var e=Object(d.a)(["\n    padding: 1em;\n    margin: 1.5em;\n    display: flex;\n    flex-direction: column;\n    flex-basis: 20%;\n    background-color: pink;"]);return E=function(){return e},e}var p=f.a.div(E()),b=function(e){var n=e.name;return r.a.createElement(p,null,r.a.createElement("h2",null,n),r.a.createElement("div",null,r.a.createElement("button",null,"edit"),r.a.createElement("button",null,"delete")))},v=function(e){return console.log("production"),e.userArray.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(b,{name:e.name}))}))};function g(){var e=Object(d.a)(["\n    padding: 1em;\n    margin: 1.5em;\n    display: flex;\n    flex-direction: column;\n    flex-basis: 20%;\n    background-color: yellow;"]);return g=function(){return e},e}var h=f.a.div(g()),y=function(e){var n=e.text,t=e.userId,a=e.userArray.find((function(e){return e.id===t}));return r.a.createElement(h,null,r.a.createElement("h3",null,n),r.a.createElement("h5",null,a.name),r.a.createElement("div",null,r.a.createElement("button",null,"edit"),r.a.createElement("button",null,"delete")))},x=function(e){console.log("production");var n=e.userArray,t=Object(a.useState)([]),c=Object(l.a)(t,2),o=c[0],u=c[1];return Object(a.useEffect)((function(){s.a.get("/api/posts").then((function(e){u(e.data)})).catch((function(e){console.log(e.message)}))}),[]),o.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(y,{text:e.text,userId:e.user_id,userArray:n}))}))},j="";var O=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1];return Object(a.useEffect)((function(){s.a.get(j+"/api/users").then((function(e){c(e.data)})).catch((function(e){console.log(e.message)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(m.b,{to:"/"},"Users"),r.a.createElement(m.b,{to:"/posts"},"Posts")),r.a.createElement(u.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(v,Object.assign({},e,{userArray:t}))}}),r.a.createElement(u.a,{path:"/posts",render:function(e){return r.a.createElement(x,Object.assign({},e,{userArray:t}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(m.a,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.1819ac80.chunk.js.map