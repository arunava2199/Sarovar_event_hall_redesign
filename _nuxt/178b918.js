(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{290:function(t,e,r){var content=r(331);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("11069032",content,!0,{sourceMap:!1})},307:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{items:[{src:"https://5.imimg.com/data5/SV/DX/GLADMIN-33559172/conference-hall-500x500.jpg"},{src:"https://www.sinclairshotels.com/assets/images/burdwan/Regal-Room-l-and-ll.jpg"},{src:"https://media-cdn.tripadvisor.com/media/photo-s/0b/51/39/62/conference-hall.jpg"},{src:"https://www.thelalit.com/wp-content/uploads/2017/02/glance-kolkata3-760-320.jpeg"}]}}},o=r(31),n=r(38),c=r.n(n),v=r(260),m=r(124),d=r(62),h=r(433),f=r(422),x=r(265),_=r(272),C=r(256),k=r(266),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"col-12 ml-0",attrs:{color:"blue","max-height":"300px",md:"4"}},[r("v-container",{staticClass:"ml-2"},[r("v-row",{attrs:{justify:"space-between"}},[r("v-col",{attrs:{cols:"12",md:"5"}},[r("v-carousel",{attrs:{height:"200"}},t._l(t.items,(function(t,i){return r("v-carousel-item",{key:i,attrs:{src:t.src,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1)],1),t._v(" "),r("v-col",[r("v-card",{attrs:{color:"blue","max-width":"190px","max-height":"300",elevation:"1",md:"4",cols:"12"}},[r("v-container",[r("h3",[t._v("Sarovar Portico")]),r("br"),t._v(" "),r("h4",{staticClass:"black--text"},[t._v("Carol Bagh, New Delhi")])])],1)],1),t._v(" "),r("v-col",[r("v-card",{attrs:{color:"blue","max-width":"190px","max-height":"300",elevation:"1",ml:"10"}},[r("v-container",[r("h3",[t._v("Availability")]),r("br"),t._v(" "),r("v-card",{attrs:{outlined:""}},[r("v-card-text",[t._v("Available for 5 hours")])],1)],1)],1)],1),t._v(" "),r("v-col",[r("v-card",{attrs:{color:"blue","max-width":"190px","max-height":"300",elevation:"1",ml:"10"}},[r("v-container",[r("h3",[t._v("Specifications")]),r("br"),t._v(" "),r("v-card",{attrs:{outlined:""}},[r("v-icon",{staticClass:"mx-2"},[t._v("mdi-account")]),t._v(" "),r("v-card-text",[t._v("40-50")]),t._v(" "),r("v-card-text",[t._v("Air Conditioning available")])],1)],1)],1)],1),t._v(" "),r("v-col",{staticClass:"text-center pl-0",attrs:{cols:"auto"}},[r("v-row",{staticClass:"flex-column ma-0 fill-height",attrs:{justify:"center"}},[r("v-col",{staticClass:"px-0"},[r("v-icon")],1),t._v(" "),r("v-col",{staticClass:"px-0"},[r("v-icon")],1),t._v(" "),r("v-col",{staticClass:"px-0"},[r("div",{staticClass:"my-2"},[r("v-btn",{attrs:{elevated:"",small:"",color:"indigo"}},[t._v("Choose")])],1)])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VCard:m.a,VCardText:d.a,VCarousel:h.a,VCarouselItem:f.a,VCol:x.a,VContainer:_.a,VIcon:C.a,VRow:k.a})},315:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{valid:!1,firstname:"",lastname:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}}},o=r(31),n=r(38),c=r.n(n),v=r(265),m=r(272),d=r(407),h=r(266),f=r(308),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:t.nameRules,counter:10,label:"First name",required:""},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:t.nameRules,counter:10,label:"Last name",required:""},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:v.a,VContainer:m.a,VForm:d.a,VRow:h.a,VTextField:f.a})},330:function(t,e,r){"use strict";var l=r(290);r.n(l).a},331:function(t,e,r){(e=r(13)(!1)).push([t.i,".HallBooking{height:90px;width:1150px;margin:0 auto}",""]),t.exports=e},393:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{column:null,row:null}}},o=r(31),n=r(38),c=r.n(n),v=r(124),m=r(265),d=r(272),h=r(332),f=r(333),x=r(266),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{staticClass:"grey lighten-5 ma-1 pa-lg-2 pa-md-4 pa-sm-2",attrs:{"max-height":"220px",lg:"10",md:"8",sm:"4",xs:"2"}},[e("v-row",{attrs:{justify:"center","no-gutters":""}},[e("v-col",{staticClass:"ma-1 pa-lg-2 pa-md-4 pa-sm-2",attrs:{cols:"12",md:"3",sm:"2",xs:"1"}},[e("v-card",{staticClass:"grey",attrs:{"max-width":"200px"}},[e("v-radio-group",[e("v-radio",{attrs:{label:"Birthdays",value:"radio-1"}})],1)],1)],1),this._v(" "),e("v-col",{staticClass:"ma-1 pa-lg-2 pa-md-4 pa-sm-2",attrs:{cols:"12",md:"3",sm:"2",xs:"1"}},[e("v-card",{staticClass:"grey",attrs:{"max-width":"200px"}},[e("v-radio-group",[e("v-radio",{attrs:{label:"Workshops",value:"radio-2"}})],1)],1)],1),this._v(" "),e("v-col",{staticClass:"ma-1 pa-lg-2 pa-md-4 pa-sm-2",attrs:{cols:"12",md:"3",sm:"2",xs:"1"}},[e("v-card",{staticClass:"grey",attrs:{"max-width":"200px"}},[e("v-radio-group",[e("v-radio",{attrs:{label:"Parties",value:"radio-3"}})],1)],1)],1)],1),this._v(" "),e("v-row",{attrs:{justify:"center","no-gutters":""}},[e("v-col",{staticClass:"ma-1 pa-lg-2 pa-md-4 pa-sm-2",attrs:{cols:"12",md:"3",sm:"2",xs:"1"}},[e("v-card",{staticClass:"grey",attrs:{"max-width":"200px"}},[e("v-radio-group",[e("v-radio",{attrs:{label:"Weddings",value:"radio-4"}})],1)],1)],1),this._v(" "),e("v-col",{staticClass:"ma-1 pa-lg-2 pa-md-4 pa-sm-2",attrs:{cols:"12",md:"3",sm:"2",xs:"1"}},[e("v-card",{staticClass:"grey",attrs:{"max-width":"200px"}},[e("v-radio-group",[e("v-radio",{attrs:{label:"Launch Events",value:"radio-5"}})],1)],1)],1),this._v(" "),e("v-col",{staticClass:"ma-1 pa-lg-2 pa-md-4 pa-sm-2",attrs:{cols:"12",md:"3",sm:"2",xs:"1"}},[e("v-card",{staticClass:"grey",attrs:{"max-width":"200px"}},[e("v-radio-group",[e("v-radio",{attrs:{label:"Ceremonies",value:"radio-6"}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:v.a,VCol:m.a,VContainer:d.a,VRadio:h.a,VRadioGroup:f.a,VRow:x.a})},394:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{dropdown_edit:[{text:"20-30"},{text:"30-40"},{text:"40-50"}]}}},o=r(31),n=r(38),c=r.n(n),v=r(265),m=r(272),d=r(434),h=r(266),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{id:"dropdown-example"}},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"4"}},[e("p",[this._v("Estimated Number of People")]),this._v(" "),e("v-overflow-btn",{staticClass:"my-2",attrs:{items:this.dropdown_edit,label:"Editable Btn",editable:"","item-value":"text"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:v.a,VContainer:m.a,VOverflowBtn:d.a,VRow:h.a})},395:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{checkbox1:!1,checkbox2:!0}}},o=r(31),n=r(38),c=r.n(n),v=r(406),m=r(265),d=r(272),h=r(434),f=r(266),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-checkbox",{attrs:{label:"Number of Tables: "+t.checkbox1.toString()},model:{value:t.checkbox1,callback:function(e){t.checkbox1=e},expression:"checkbox1"}}),t._v(" "),[r("v-container",{attrs:{id:"dropdown-example"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"4"}},[r("p",[t._v("Number of Tables")]),t._v(" "),r("v-overflow-btn",{staticClass:"my-2",attrs:{items:t.dropdown_edit,label:"Editable Btn",editable:"","item-value":"text"}})],1)],1)],1)]],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCheckbox:v.a,VCol:m.a,VContainer:d.a,VOverflowBtn:h.a,VRow:f.a})},396:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{checkbox1:!1,checkbox2:!0}}},o=r(31),n=r(38),c=r.n(n),v=r(406),m=r(265),d=r(272),h=r(434),f=r(266),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-checkbox",{attrs:{label:"Number of Chairs: "+t.checkbox1.toString()},model:{value:t.checkbox1,callback:function(e){t.checkbox1=e},expression:"checkbox1"}}),t._v(" "),[r("v-container",{attrs:{id:"dropdown-example"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"4"}},[r("p",[t._v("Number of Chairs")]),t._v(" "),r("v-overflow-btn",{staticClass:"my-2",attrs:{items:t.dropdown_edit,label:"Editable Btn",editable:"","item-value":"text"}})],1)],1)],1)]],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCheckbox:v.a,VCol:m.a,VContainer:d.a,VOverflowBtn:h.a,VRow:f.a})},397:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{dropdown_edit:[{text:"Vegetarian"},{text:"Non-Vegetarian"}]}}},o=r(31),n=r(38),c=r.n(n),v=r(265),m=r(272),d=r(434),h=r(266),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{id:"dropdown-example"}},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"4"}},[e("p",[this._v("Catering")]),this._v(" "),e("v-overflow-btn",{staticClass:"my-2",attrs:{items:this.dropdown_edit,label:"Editable Btn",editable:"","item-value":"text"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:v.a,VContainer:m.a,VOverflowBtn:d.a,VRow:h.a})},398:function(t,e,r){"use strict";r.r(e);r(29);var l=r(364),o=r(366),n={mixins:[l.validationMixin],validations:{name:{required:o.required,maxLength:Object(o.maxLength)(20)},email:{required:o.required,email:o.email},select:{required:o.required},checkbox:{checked:function(t){return t}}},data:function(){return{name:"",email:"",select:null,items:["Item 1","Item 2","Item 3","Item 4"],checkbox:!1}},computed:{checkboxErrors:function(){var t=[];return this.$v.checkbox.$dirty?(!this.$v.checkbox.checked&&t.push("You must agree to continue!"),t):t},selectErrors:function(){var t=[];return this.$v.select.$dirty?(!this.$v.select.required&&t.push("Item is required"),t):t},nameErrors:function(){var t=[];return this.$v.name.$dirty?(!this.$v.name.maxLength&&t.push("Name must be at most 10 characters long"),!this.$v.name.required&&t.push("Name is required."),t):t},emailErrors:function(){var t=[];return this.$v.email.$dirty?(!this.$v.email.email&&t.push("Must be valid e-mail"),!this.$v.email.required&&t.push("E-mail is required"),t):t}},methods:{submit:function(){this.$v.$touch()},clear:function(){this.$v.$reset(),this.name="",this.email="",this.select=null,this.checkbox=!1}}},c=r(31),v=r(38),m=r.n(v),d=r(260),h=r(406),f=r(308),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",[r("v-text-field",{staticClass:"pa-8",attrs:{"error-messages":t.nameErrors,counter:20,label:"Name",required:""},on:{input:function(e){return t.$v.name.$touch()},blur:function(e){return t.$v.name.$touch()}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),r("v-text-field",{staticClass:"pa-8",attrs:{"error-messages":t.emailErrors,label:"E-mail",required:""},on:{input:function(e){return t.$v.email.$touch()},blur:function(e){return t.$v.email.$touch()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{staticClass:"pa-8",attrs:{"error-messages":t.emailErrors,label:"Phone Number",required:""},on:{input:function(e){return t.$v.email.$touch()},blur:function(e){return t.$v.email.$touch()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("h3",{staticClass:"pl-8"},[t._v("Payment Options")]),t._v(" "),r("v-checkbox",{staticClass:"pl-8",attrs:{"error-messages":t.checkboxErrors,label:"On Site",required:""},on:{change:function(e){return t.$v.checkbox.$touch()},blur:function(e){return t.$v.checkbox.$touch()}},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),t._v(" "),r("v-checkbox",{staticClass:"pl-8",attrs:{"error-messages":t.checkboxErrors,label:"Online",required:""},on:{change:function(e){return t.$v.checkbox.$touch()},blur:function(e){return t.$v.checkbox.$touch()}},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),t._v(" "),r("v-checkbox",{staticClass:"pl-8",attrs:{"error-messages":t.checkboxErrors,label:"After Event",required:""},on:{change:function(e){return t.$v.checkbox.$touch()},blur:function(e){return t.$v.checkbox.$touch()}},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),t._v(" "),r("v-btn",{staticClass:"ml-8",on:{click:t.submit}},[t._v("submit")]),t._v(" "),r("v-btn",{staticClass:"ml-4",on:{click:t.clear}},[t._v("clear")])],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{Form:r(315).default}),m()(component,{VBtn:d.a,VCheckbox:h.a,VTextField:f.a})},399:function(t,e,r){"use strict";r.r(e);r(330);var l=r(31),component=Object(l.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"HallBooking",attrs:{alt:"Home",src:"HallBooking.png",md:"8"}})}),[],!1,null,null,null);e.default=component.exports},417:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{e6:1}}},o=r(31),n=r(38),c=r.n(n),v=r(260),m=r(124),d=r(265),h=r(272),f=r(408),x=r(409),_=r(410),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{md:"12",sm:"8",xs:"12"}},[r("HallBooking"),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-stepper",{staticClass:"outline",attrs:{vertical:""},model:{value:t.e6,callback:function(e){t.e6=e},expression:"e6"}},[r("v-stepper-step",{attrs:{complete:t.e6>1,step:"1"}},[t._v("\n        Type of Event\n        "),r("small")]),t._v(" "),r("v-stepper-content",{attrs:{step:"1"}},[r("v-card",{staticClass:"mb-12",attrs:{color:"grey",height:"250px"}},[r("Radiobuttons")],1),t._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e6=2}}},[t._v("Confirm & Continue")])],1),t._v(" "),r("v-stepper-step",{attrs:{complete:t.e6>2,step:"2"}},[t._v("Specifications")]),t._v(" "),r("v-stepper-content",{attrs:{step:"2"}},[r("v-card",{staticClass:"mb-12",attrs:{color:"grey",height:"640px"}},[r("Dropdowns"),t._v(" "),r("Checkboxe1"),t._v(" "),r("Checkboxe2")],1),t._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e6=3}}},[t._v("Confirm & Continue")])],1),t._v(" "),r("v-stepper-step",{attrs:{complete:t.e6>3,step:"3"}},[t._v("Hall Suggestions")]),t._v(" "),r("v-stepper-content",{attrs:{step:"3"}},[r("v-card",{staticClass:"mb-12",attrs:{color:"grey",height:"650px"}},[r("HorizontalCard")],1),t._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e6=4}}},[t._v("Confirm & Continue")])],1),t._v(" "),r("v-stepper-step",{attrs:{step:"4"}},[t._v("Optional Extras")]),t._v(" "),r("v-stepper-content",{attrs:{step:"4"}},[r("v-card",{staticClass:"mb-12",attrs:{color:"grey",height:"260px"}},[r("Dropdowns2"),t._v(" "),r("form",[r("textarea",[t._v("Type in your Queries.")]),r("br")])],1),t._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e6=5}}},[t._v("Confirm & Continue")])],1),t._v(" "),r("v-stepper-step",{attrs:{step:"5"}},[t._v("Confirmation")]),t._v(" "),r("v-stepper-content",{attrs:{step:"5"}},[r("v-card",{staticClass:"mb-12",attrs:{color:"grey",height:"650px"}},[r("ConfirmForm")],1),t._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e6=1}}},[t._v("Confirm")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{HallBooking:r(399).default,Radiobuttons:r(393).default,Dropdowns:r(394).default,Checkboxe1:r(395).default,Checkboxe2:r(396).default,HorizontalCard:r(307).default,Dropdowns2:r(397).default,Form:r(315).default,ConfirmForm:r(398).default}),c()(component,{VBtn:v.a,VCard:m.a,VCol:d.a,VContainer:h.a,VStepper:f.a,VStepperContent:x.a,VStepperStep:_.a})}}]);