(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"8b24":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"q-app"}},[a("div",{staticClass:"q-pa-md"},[a("q-stepper",{attrs:{vertical:"",color:"primary",animated:""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[a("q-step",{attrs:{name:1,title:"Are you experiencing any of the following symptoms?",icon:"add_comment",done:t.step>1}},[a("q-btn-toggle",{attrs:{"toggle-color":"primary",push:"",glossy:"","no-caps":"",options:[{label:"Cough",value:"one"},{label:"Fever",value:"two"},{label:"Difficulty in breathing",value:"three"},{label:"Loss of senses of smell and taste",value:"four"},{label:"None of the above",value:"five"}]},model:{value:t.symptomps,callback:function(e){t.symptomps=e},expression:"symptomps"}}),a("q-stepper-navigation",[a("q-btn",{attrs:{color:"primary",label:"Continue"},on:{click:function(e){t.step=2}}})],1)],1),a("q-step",{attrs:{name:2,title:"Have you ever had any of the following:",icon:"add_comment",done:t.step>2}},[a("q-btn-toggle",{attrs:{push:"",glossy:"","no-caps":"","toggle-color":"primary",options:[{label:"Diabetes",value:"one"},{label:"Hypertension",value:"two"},{label:"Lung disease",value:"three"},{label:"Heart disease",value:"four"},{label:"Kidney disorder",value:"five"},{label:"None of the above",value:"Six"}]},model:{value:t.ailments,callback:function(e){t.ailments=e},expression:"ailments"}}),a("q-stepper-navigation",[a("q-btn",{attrs:{color:"primary",label:"Continue"},on:{click:function(e){t.step=3}}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(e){t.step=1}}})],1)],1),a("q-step",{attrs:{name:3,title:"Have you travelled internationally in last 28-45 days",icon:"add_comment",done:t.step>3}},[a("q-btn-toggle",{attrs:{push:"",glossy:"","no-caps":"","toggle-color":"primary",options:[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},model:{value:t.travel,callback:function(e){t.travel=e},expression:"travel"}}),a("q-stepper-navigation",[a("q-btn",{attrs:{color:"primary",label:"Continue"},on:{click:function(e){t.step=4}}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(e){t.step=2}}})],1)],1),a("q-step",{attrs:{name:4,title:"Enter the location you belong to",icon:"add_comment",done:t.step>4}},[a("q-input",{attrs:{filled:"",label:"Please enter your city"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}}),a("q-input",{attrs:{filled:"",label:"Please enter your state"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}}),a("q-btn",{attrs:{color:"primary","no-caps":"",label:"Get Location Based On Ip"},on:{click:t.onGetLocation}}),a("q-stepper-navigation",[""===t.city||""===t.state?a("q-btn",{attrs:{disable:"",color:"primary",label:"Continue"},on:{click:function(e){t.step=5}}}):t._e(),""!=t.city&&""!=t.state?a("q-btn",{attrs:{color:"primary",label:"Continue"},on:{click:function(e){t.step=5}}}):t._e(),a("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(e){t.step=3}}})],1)],1),a("q-step",{attrs:{name:5,title:"Which of the following apply to you",icon:"add_comment"}},[a("q-btn-toggle",{attrs:{push:"",glossy:"","no-caps":"","toggle-color":"primary",options:[{label:"I have recently interacted or lived with covid positive individual",value:"one"},{label:"Im healthcare worker and I examined a COVID-19 confirmed case without protective gear",value:"two"},{label:"None of the above",value:"three"}]},model:{value:t.recentActivity,callback:function(e){t.recentActivity=e},expression:"recentActivity"}}),a("q-stepper-navigation",[a("q-btn",{attrs:{color:"primary",label:"Submit",type:"submit"},on:{click:t.onSubmit}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(e){t.step=4}}})],1),a("br")],1)],1)],1)])},l=[],n=a("2b0e"),i=a("1dce"),s=a.n(i),c=a("bc3a"),r=a.n(c),p=a("2a19"),u=a("b5ae"),m=a("1157"),b=a.n(m);n["a"].use(s.a);var v={data(){return{step:1,symptomps:"one",ailments:"one",travel:"Yes",recentActivity:"one",locationEnable:!1,city:"",state:""}},validations:{location:{required:u["required"]}},methods:{onGetLocation(){var t=this;function e(e){t.city=e.city,t.state=e.region}b.a.getJSON("https://ipapi.co/json",e)},onSubmit(){const t={city:this.city,state:this.state};""===this.city||""===this.state||("five"===this.symptomps||"six"===this.ailments||"No"===this.travel||"three"===this.recentActivity?r()({method:"post",url:"/analysestatus",data:t}).then((function(t){console.log(t),p["a"].create({color:"green-4",textColor:"white",icon:"cloud_done",message:"Submitted"})})).catch((function(t){console.log(t),p["a"].create({color:"red-5",textColor:"white",icon:"warning",message:"Not Submitted"})})):location.href="#/Unsafe")}}},d=v,y=a("2877"),f=a("9989"),g=a("f531"),h=a("87fe"),q=a("6a67"),k=a("b19c"),w=a("9c40"),x=a("27f9"),C=a("eebe"),S=a.n(C),_=Object(y["a"])(d,o,l,!1,null,null,null);e["default"]=_.exports;S()(_,"components",{QPage:f["a"],QStepper:g["a"],QStep:h["a"],QBtnToggle:q["a"],QStepperNavigation:k["a"],QBtn:w["a"],QInput:x["a"]})}}]);