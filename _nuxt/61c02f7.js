(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{270:function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));r(61),r(5),r(4),r(9);var e=r(0);function o(t){return e.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(n,r){var e=r.props,data=r.data,o=r.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var n=c[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),n(e.tag,data,o)}})}},272:function(t,n,r){"use strict";r(61),r(5),r(4),r(9),r(172),r(129);var e=r(270),o=r(54);n.a=Object(e.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var r,e=n.props,data=n.data,c=n.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var n=l[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}))),e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),c)}})},421:function(t,n,r){"use strict";r.r(n);var e={data:function(){return{alignments:["start","center","end"]}}},o=r(31),c=r(38),l=r.n(c),d=r(124),f=r(265),v=r(272),m=r(266),component=Object(o.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[t._l(t.alignments,(function(n){return r("v-container",{key:n,staticClass:"grey lighten-5 mb-6"},[r("v-row",{staticStyle:{height:"100px"},attrs:{align:n,"no-gutters":""}},t._l(3,(function(n){return r("v-col",{key:n,attrs:{sm:"2",md:"4",xs:""}},[r("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[t._v("\n          One of three columns\n        ")])],1)})),1)],1)})),t._v(" "),r("v-container",{staticClass:"grey lighten-5"},[r("v-row",{staticStyle:{height:"130px"},attrs:{"no-gutters":""}},t._l(t.alignments,(function(n){return r("v-col",{key:n,attrs:{"align-self":n}},[r("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[t._v("\n          One of three columns\n        ")])],1)})),1)],1)],2)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VCard:d.a,VCol:f.a,VContainer:v.a,VRow:m.a})}}]);