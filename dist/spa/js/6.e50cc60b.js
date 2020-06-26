(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"8b24":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"q-app"}},[o("div",{staticClass:"q-pa-md"},[o("q-stepper",{attrs:{vertical:"",color:"primary",animated:""},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[o("q-step",{attrs:{name:1,title:"Are you experiencing any of the following symptoms?",icon:"add_comment",done:e.step>1}},[o("q-btn-toggle",{attrs:{"toggle-color":"primary",push:"",glossy:"","no-caps":"",options:[{label:"Cough",value:"one"},{label:"Fever",value:"two"},{label:"Difficulty in breathing",value:"three"},{label:"Loss of senses of smell and taste",value:"four"},{label:"None of the above",value:"five"}]},model:{value:e.symptomps,callback:function(t){e.symptomps=t},expression:"symptomps"}}),o("q-stepper-navigation",[o("q-btn",{attrs:{color:"primary",label:"Continue"},on:{click:function(t){e.step=2}}})],1)],1),o("q-step",{attrs:{name:2,title:"Have you ever had any of the following:",icon:"add_comment",done:e.step>2}},[o("q-btn-toggle",{attrs:{push:"",glossy:"","no-caps":"","toggle-color":"primary",options:[{label:"Diabetes",value:"one"},{label:"Hypertension",value:"two"},{label:"Lung disease",value:"three"},{label:"Heart disease",value:"four"},{label:"Kidney disorder",value:"five"},{label:"None of the above",value:"Six"}]},model:{value:e.ailments,callback:function(t){e.ailments=t},expression:"ailments"}}),o("q-stepper-navigation",[o("q-btn",{attrs:{color:"primary",label:"Continue"},on:{click:function(t){e.step=3}}}),o("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(t){e.step=1}}})],1)],1),o("q-step",{attrs:{name:3,title:"Have you travelled internationally in last 28-45 days",icon:"add_comment",done:e.step>3}},[o("q-btn-toggle",{attrs:{push:"",glossy:"","no-caps":"","toggle-color":"primary",options:[{label:"Yes",value:"one"},{label:"No",value:"two"}]},model:{value:e.travel,callback:function(t){e.travel=t},expression:"travel"}}),o("q-stepper-navigation",[o("q-btn",{attrs:{color:"primary",label:"Continue"},on:{click:function(t){e.step=4}}}),o("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(t){e.step=2}}})],1)],1),o("q-step",{attrs:{name:4,title:"Enter the city you belong to",icon:"add_comment",done:e.step>4}},[o("q-input",{attrs:{filled:"",label:"Please enter your location",rules:[function(t){return e.$v.location.required||"Location is required"}]},on:{keypress:e.OnKeyPress,input:function(t){return e.$v.location.$touch()}},model:{value:e.location,callback:function(t){e.location=t},expression:"location"}}),o("q-stepper-navigation",[o("q-btn",{attrs:{color:"primary",label:"Continue"},on:{click:function(t){e.step=5}}}),o("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(t){e.step=3}}})],1)],1),o("q-step",{attrs:{name:5,title:"Which of the following apply to you",icon:"add_comment"}},[o("q-btn-toggle",{attrs:{push:"",glossy:"","no-caps":"","toggle-color":"primary",options:[{label:"I have recently interacted or lived with covid positive individual",value:"one"},{label:"Im healthcare worker and I examined a COVID-19 confirmed case without protective gear",value:"two"},{label:"None of the above",value:"three"}]},model:{value:e.recentActivity,callback:function(t){e.recentActivity=t},expression:"recentActivity"}}),o("q-stepper-navigation",[o("q-btn",{attrs:{color:"primary",label:"Submit",type:"submit"},on:{click:e.onSubmit}}),o("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(t){e.step=4}}})],1)],1)],1)],1)])},n=[],l=o("bc3a"),i=o.n(l),s=o("2a19"),c=o("b5ae"),r={data(){return{step:1,symptomps:"one",ailments:"one",travel:"No",location:"",recentActivity:"one"}},validations:{location:{required:c["required"]}},methods:{accept:null,OnKeyPress(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){console.log(e),this.$http.get("http://maps.googleapis.com/maps/api/geocode/json?latlng="+e.coords.latitude+","+e.coords.longitude+"&sensor=false",(function(e){console.log(e)}))}))},onSubmit(){this.accept=!1;const e={location:this.location};i()({method:"post",url:"/analysestatus",data:e}).then((function(e){this.accept=!0,console.log(e)})).catch((function(e){this.accept=!1,console.log(e)})),!0!==this.accept?s["a"].create({color:"red-5",textColor:"white",icon:"warning",message:"Not Submitted"}):s["a"].create({color:"green-4",textColor:"white",icon:"cloud_done",message:"Submitted"})}}},p=r,u=o("2877"),m=o("9989"),b=o("f531"),d=o("87fe"),v=o("6a67"),g=o("b19c"),f=o("9c40"),y=o("27f9"),h=o("eebe"),q=o.n(h),k=Object(u["a"])(p,a,n,!1,null,null,null);t["default"]=k.exports;q()(k,"components",{QPage:m["a"],QStepper:b["a"],QStep:d["a"],QBtnToggle:v["a"],QStepperNavigation:g["a"],QBtn:f["a"],QInput:y["a"]})}}]);