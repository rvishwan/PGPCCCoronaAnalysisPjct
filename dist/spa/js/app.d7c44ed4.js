(function(e){function n(n){for(var r,l,i=n[0],u=n[1],c=n[2],p=0,f=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(n);while(f.length)f.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,l=1;l<t.length;l++){var u=t[l];0!==o[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={2:0},a=[];function l(e){return i.p+"js/"+({}[e]||e)+"."+{1:"ee3599dd",3:"a77783d0",4:"390dfbd7",5:"80bbe6db",6:"cc2cc503",7:"cc2252c3",8:"7538ca60"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=l(e);var c=new Error;a=function(n){u.onerror=u.onload=null,clearTimeout(p);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,t[1](c)}o[e]=void 0}};var p=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var p=0;p<u.length;p++)n(u[p]);var s=c;a.push([0,0]),t()})({0:function(e,n,t){e.exports=t("2f39")},"0047":function(e,n,t){},"2f39":function(e,n,t){"use strict";t.r(n);var r=t("c973"),o=t.n(r),a=(t("7d6e"),t("e54f"),t("985d"),t("0047"),t("4062"),t("2b0e")),l=t("1f91"),i=t("42d2"),u=t("b05d"),c=t("2a19");a["a"].use(u["a"],{config:{},lang:l["a"],iconSet:i["a"],plugins:{Notify:c["a"]}});var p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},s=[],f={name:"App"},d=f,h=t("2877"),b=Object(h["a"])(d,p,s,!1,null,null,null),m=b.exports,v=t("8c4f"),y=t("bc3a"),g=t.n(y),P=t("a7fe"),w=t.n(P);t("e6cf");const j=[{path:"/",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"713b")),children:[{path:"",component:()=>t.e(3).then(t.bind(null,"bc13"))}]},{path:"/AssessStatus",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"8b24"))}]},{path:"/CoronaAnalysis",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"5dca"))}]},{path:"/Safe",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"5c68"))}]},{path:"/Unsafe",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"1e5d"))}]},{path:"*",component:()=>Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"e51e"))}];var O=j;a["a"].use(v["a"],w.a,g.a);var x=function(){const e=new v["a"]({scrollBehavior:()=>({x:0,y:0}),routes:O,mode:"hash",base:""});return e},S=function(){return _.apply(this,arguments)};function _(){return _=o()((function*(){const e="function"===typeof x?yield x({Vue:a["a"]}):x,n={router:e,render:e=>e(m),el:"#q-app"};return{app:n,router:e}})),_.apply(this,arguments)}function k(){return A.apply(this,arguments)}function A(){return A=o()((function*(){const{app:e,router:n}=yield S();new a["a"](e)})),A.apply(this,arguments)}k()},4062:function(e,n,t){}});