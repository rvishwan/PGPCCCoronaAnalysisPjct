(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"3be9":function(t,e,a){"use strict";(function(t){a("ddb0"),a("2b3d");var s=a("1157"),n=a.n(s);t.location=window.location,e["a"]={name:"Safe",confirmed:"",death:"",updateDate:""};const i=(t,e)=>{let a=e,s=new RegExp("[?&]"+t+"=([^&#]*)","i"),n=s.exec(a);return n?n[1]:null};n()(document).ready((function(){const t=location.href;new URLSearchParams(t);this.confirmed=i("confirmed",t),this.death=i("deaths",t),this.updateDate=i("lastupdated",t);var e=new Date(this.updateDate);n()(".confirmedNum").html(this.confirmed),n()(".deathNumbers").html(this.death),n()(".updatedate").html(e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear())}))}).call(this,a("c8ba"))},"5c68":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fullscreen bg-green text-white text-center q-pa-md flex flex-center"},[a("div",{staticClass:"safe"},[a("div",{staticStyle:{"font-size":"30vh",color:"green"}},[t._v("\n      Thank you!\n    ")]),t._m(0),t._m(1),t._m(2),a("q-btn",{staticClass:"q-mt-xl",attrs:{color:"white","text-color":"green",unelevated:"",to:"/",target:"_self",label:"Go Home","no-caps":""}})],1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"low-line-2"},[a("p",[t._v("You are at Safe")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lastUpdate"},[a("div",{staticClass:"updatedtext"},[a("u",[a("b",[t._v("Last updated on ")])]),t._v("*")]),a("div",{staticClass:"updatedate"},[t._v("06/05/2020")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"status",attrs:{"data-covid":"india"}},[a("table",{staticClass:"analysistable"},[a("tr",[a("th",[a("u",[t._v("Confirmed cases")])]),a("th",[a("u",[t._v("Deaths")])])]),a("tr",[a("td",{staticClass:"confirmedNum",attrs:{id:"confirmedcases"}},[t._v("*")]),a("td",{staticClass:"deathNumbers",attrs:{id:"deathnum"}},[t._v("*")])])])])}],i=a("3be9"),c=i["a"],l=a("2877"),r=a("9c40"),d=a("eebe"),o=a.n(d),u=Object(l["a"])(c,s,n,!1,null,null,null);e["default"]=u.exports;o()(u,"components",{QBtn:r["a"]})}}]);