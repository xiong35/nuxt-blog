exports.ids=[1],exports.modules={149:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return m}));var r=n(150),o=n(0);const c=Object(o.h)("v-card__actions"),l=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),m=Object(o.h)("v-card__title");r.a},237:function(t,e,n){"use strict";n.r(e);var r=[{category:"I am",items:[{icon:null,name:"a HUSTer"},{icon:"華",name:"a 华一er",color:"red darken-2"},{icon:null,name:"a 566er"},{icon:"mdi-handshake",name:"warm hearted"},{icon:"mdi-head-sync-outline",name:"thinking"},{icon:"mdi-keyboard-variant",name:"a coder",color:"green darken-2"},{icon:"mdi-guy-fawkes-mask",name:"hiding my emotion"},{name:"🤣 interesting"}]},{category:"I like",items:[{name:"🏸 badminton"},{name:"👨‍💻 coding"},{name:"🤸‍♂️ parkour"},{name:"🚴‍♂️ biking"},{name:"👨‍👦 my friends"},{icon:"mdi-box-cutter",name:"hand crafting"},{icon:"mdi-battlenet",name:"hearth stone"},{icon:"mdi-feather",name:"English calligraphy"},{name:"☕ coffee"},{icon:"mdi-cards-playing-outline",name:"card games"},{name:"🐱 cats"},{name:"🎧 music"},{name:"🎬 movies"},{name:"MARVEL",color:"rgb(163, 16, 0)"},{name:"知乎",color:"rgb(0, 132, 255)"},{name:"Bilibili",color:"rgb(251, 114, 153)"}]}],meta=n(36),o={transition:"layout",name:"index",head:()=>({title:"About Me",meta:[{hid:"description",name:"description",content:"展示了我的特长和爱好等的个人简介页面"}]}),components:{},data:()=>({about:r}),computed:{},watch:{},methods:{getElevation:()=>Math.floor(12*Math.random())+1,getPadding(){let t=Math.floor(5*Math.random()+.9),e=6-t,n=Math.floor(7*Math.random()+.9);return`pl-${t} pr-${e} pt-${n} pb-${8-n}`},delAlpha:t=>"#"==t[0]&&t.length>7?t.substring(0,t.length-2):t},created(){},mounted(){},async asyncData(){let{data:data}=await Object(meta.b)();return{asyncAbout:{category:"I can",items:data}}}},c=n(6),l=n(9),d=n.n(l),m=n(51),v=n(150),_=n(149),h=n(25),y=n(165);var component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._ssrNode('<p class="display-3" data-v-0a59f877>',"</p>",[n("v-icon",{staticClass:"display-4 black--text"},[t._v("mdi-alpha-i")]),t._ssrNode("...\n  ")],2),t._ssrNode(" "),t._l(t.about,(function(e,r){return n("v-card",{key:r,staticClass:"my-4",attrs:{flat:""}},[n("v-card-title",{attrs:{"primary-title":""}},[t._v(t._s(e.category))]),t._v(" "),n("v-layout",{staticClass:"px-3",attrs:{row:"",wrap:""}},t._l(e.items,(function(e,r){return n("div",{key:r,class:t.getPadding()},[n("v-btn",{staticClass:"text-capitalize",attrs:{text:"",rounded:"",elevation:t.getElevation(),color:e.color||null}},[e.icon?n("v-icon",{attrs:{left:""!=e.name}},[t._v(t._s(e.icon))]):t._e(),t._v("\n          "+t._s(e.name)+"\n        ")],1)],1)})),0)],1)})),t._ssrNode(" "),n("v-card",{staticClass:"my-4",attrs:{flat:""}},[n("v-card-title",{attrs:{"primary-title":""}},[t._v(t._s(t.asyncAbout.category))]),t._v(" "),n("v-layout",{staticClass:"px-3",attrs:{row:"",wrap:""}},t._l(t.asyncAbout.items,(function(e,r){return n("div",{key:r,class:t.getPadding()},["latex"!=e.name?n("v-btn",{staticClass:"text-capitalize",attrs:{text:"",rounded:"",elevation:t.getElevation(),color:t.delAlpha(e.color)||null}},[e.icon?n("v-icon",{attrs:{left:""!=e.name}},[t._v(t._s(e.icon))]):t._e(),t._v("\n          "+t._s(e.name)+"\n        ")],1):n("v-btn",{staticClass:"font-weight-light",attrs:{text:"",rounded:"",elevation:t.getElevation()}},[t._v("\n          L\n          "),n("sup",[t._v("A")]),t._v("T\n          "),n("sub",[t._v("E")]),t._v("X\n        ")])],1)})),0)],1)],2)}),[],!1,(function(t){}),"0a59f877","6d4f9cb8");e.default=component.exports;d()(component,{VBtn:m.a,VCard:v.a,VCardTitle:_.c,VIcon:h.a,VLayout:y.a})}};