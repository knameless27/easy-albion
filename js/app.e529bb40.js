(function(){"use strict";var n={9863:function(n,e,t){var a=t(5130),i=t(973),o=(t(4114),t(6768)),r=t(144),l=t(4232);const u=[{name:"Saddling",image:"",url:"saddling",description:"Calculator of profit making saddlings with your mounts",available:!0},{name:"Enchantments",image:"",url:"enchantments",description:"Calculator of enchantments",available:!1},{name:"Factions",image:"",url:"factions",description:"Calculator of profit making using your points of faction",available:!1},{name:"Breeding",image:"",url:"breeding",description:"Calculator of profit with breeding animals",available:!1},{name:"Crop",image:"",url:"crop",description:"Calculator of profit with crops",available:!1},{name:"Power level of Fishing",image:"",url:"power_fishing",description:"Calculator of how much levels you need with fishing",available:!1},{name:"Kitchen/Alchemy",image:"",url:"kitchen",description:"Calculator of fame with kitchen/alchemy",available:!1},{name:"Refining fame",image:"",url:"refining",description:"Calculator of fame with refining",available:!1},{name:"Fishing",image:"",url:"fishing",description:"Calculator of profit with fishing",available:!1},{name:"Artifacts",image:"",url:"artifacts",description:"Calculator of profit with artifacts",available:!1},{name:"Refining",image:"",url:"refining",description:"Calculator of profit with refining",available:!1}];var c=u;const s={class:"card"},f={key:0},m=["src"];var p={__name:"KCard",props:{image:{type:String,required:!1,default:""},title:{type:String,required:!1,default:""}},setup(n){const e=n;return(t,a)=>((0,o.uX)(),(0,o.CE)("div",s,[n.title?((0,o.uX)(),(0,o.CE)("h3",f,(0,l.v_)(n.title),1)):(0,o.Q3)("",!0),(0,o.Lk)("img",{src:e.image,alt:""},null,8,m),(0,o.RG)(t.$slots,"default")]))}},d=t(1241);const v=(0,d.A)(p,[["__scopeId","data-v-35b104de"]]);var g=v,h={__name:"KButton",props:{image:{type:String,required:!1,default:""},title:{type:String,required:!1,default:""}},setup(n){return(n,e)=>((0,o.uX)(),(0,o.CE)("button",null,[(0,o.RG)(n.$slots,"default")]))}};const b=h;var C=b;const k={class:"listCards"};var _={__name:"HomeApp",setup(n){const e=(0,i.rd)(),t=n=>{e.push({name:n})};return(n,e)=>((0,o.uX)(),(0,o.CE)("div",k,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)((0,r.R1)(c),(({name:n,image:e,url:a,description:i,available:r},u)=>((0,o.uX)(),(0,o.Wv)(g,{image:e,key:u},{default:(0,o.k6)((()=>[(0,o.Lk)("b",null,(0,l.v_)(n),1),(0,o.Lk)("p",null,(0,l.v_)(i),1),(0,o.bF)(C,{disabled:!r,onClick:n=>t(a)},{default:(0,o.k6)((()=>[(0,o.eW)((0,l.v_)(r?"See more":"Coming soon..."),1)])),_:2},1032,["disabled","onClick"])])),_:2},1032,["image"])))),128))]))}};const y=(0,d.A)(_,[["__scopeId","data-v-296d7f40"]]);var w=y;function E(n,e){return(0,o.uX)(),(0,o.CE)("h1",null,"Saddling")}const L={},X=(0,d.A)(L,[["render",E]]);var F=X;const O=[{path:"/",name:"home",component:w},{path:"/saddling",name:"saddling",component:F},{path:"/enchantments",name:"enchantments",component:F},{path:"/factions",name:"factions",component:F},{path:"/breeding",name:"breeding",component:F},{path:"/crop",name:"crop",component:F},{path:"/power_fishing",name:"power_fishing",component:F},{path:"/kitchen",name:"kitchen",component:F},{path:"/refining_fame",name:"refining_fame",component:F},{path:"/fishing",name:"fishing",component:F},{path:"/artifacts",name:"artifacts",component:F},{path:"/refining",name:"refining",component:F}],R=(0,i.aE)({history:(0,i.LA)("/easy-albion/"),routes:O});var A=R;const K={class:"mainContent"};function S(n,e,t,a,i,r){const l=(0,o.g2)("HeaderComp"),u=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(l),(0,o.Lk)("main",K,[(0,o.bF)(u)])],64)}const j={class:"navHeader"},I={key:0,class:"listItems"},x=["onClick"];var H={__name:"HeaderComp",setup(n){const e=(0,r.KR)(!1),t=(0,r.KR)(null),u=(0,r.KR)(null),s=(0,i.rd)();function f(){if(e.value=!e.value,e.value)return document.addEventListener("click",m);document.removeEventListener("click",m)}function m(n){u.value.contains(n.target)||(e.value=!1,document.removeEventListener("click",m))}return(n,i)=>((0,o.uX)(),(0,o.CE)("nav",j,[(0,o.Lk)("div",null,[(0,o.Lk)("img",{src:"",alt:"logo",onClick:i[0]||(i[0]=n=>(0,r.R1)(s).push({name:"home"}))})]),(0,o.Lk)("div",{ref_key:"dropdown",ref:u},[(0,o.Lk)("button",{ref_key:"buttonList",ref:t,id:"buttonList",onClick:f},"waos",512),(0,o.bF)(a.eB,{name:"slide-fade"},{default:(0,o.k6)((()=>[e.value?((0,o.uX)(),(0,o.CE)("div",I,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)((0,r.R1)(c),(({name:n,available:e,url:t},a)=>((0,o.uX)(),(0,o.CE)("div",{key:a},[e?((0,o.uX)(),(0,o.CE)("p",{key:0,onClick:n=>(0,r.R1)(s).push({name:t})},(0,l.v_)(n),9,x)):(0,o.Q3)("",!0)])))),128))])):(0,o.Q3)("",!0)])),_:1})],512)]))}};const q=(0,d.A)(H,[["__scopeId","data-v-b09a764a"]]);var B=q,P={components:{HeaderComp:B}};const Q=(0,d.A)(P,[["render",S]]);var G=Q;(0,a.Ef)(G).use(A).mount("#app")}},e={};function t(a){var i=e[a];if(void 0!==i)return i.exports;var o=e[a]={exports:{}};return n[a].call(o.exports,o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(e,a,i,o){if(!a){var r=1/0;for(s=0;s<n.length;s++){a=n[s][0],i=n[s][1],o=n[s][2];for(var l=!0,u=0;u<a.length;u++)(!1&o||r>=o)&&Object.keys(t.O).every((function(n){return t.O[n](a[u])}))?a.splice(u--,1):(l=!1,o<r&&(r=o));if(l){n.splice(s--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var s=n.length;s>0&&n[s-1][2]>o;s--)n[s]=n[s-1];n[s]=[a,i,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={524:0};t.O.j=function(e){return 0===n[e]};var e=function(e,a){var i,o,r=a[0],l=a[1],u=a[2],c=0;if(r.some((function(e){return 0!==n[e]}))){for(i in l)t.o(l,i)&&(t.m[i]=l[i]);if(u)var s=u(t)}for(e&&e(a);c<r.length;c++)o=r[c],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(s)},a=self["webpackChunkeasy_albion"]=self["webpackChunkeasy_albion"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(9863)}));a=t.O(a)})();
//# sourceMappingURL=app.e529bb40.js.map