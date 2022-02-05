(()=>{"use strict";var e={4001:(e,r,t)=>{t(5363),t(71);var o=t(8880),n=t(9592),a=t(3673);function i(e,r,t,o,n,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}const s=(0,a.aZ)({name:"App"});var c=t(4260);const l=(0,c.Z)(s,[["render",i]]),u=l;var p=t(7083),d=t(8336),f=t(9582);const h=[{path:"/",component:()=>Promise.all([t.e(736),t.e(262)]).then(t.bind(t,2262)),children:[{path:"/",component:()=>Promise.all([t.e(736),t.e(311)]).then(t.bind(t,9311))},{path:"/home",component:()=>Promise.all([t.e(736),t.e(652)]).then(t.bind(t,4652)),meta:{requiresAuth:!0}}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(614)]).then(t.bind(t,5614))}],b=h,v=(0,p.BC)((function(){const e=f.r5,r=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("")});return r.beforeEach((async(e,r,t)=>{const o=e.meta.requiresAuth;o&&!await d.Z.getCurrentUser()?t("/"):t()})),r}));async function m(e,r){const t="function"===typeof v?await v({}):v,o=e(u);return o.use(n.Z,r),{app:o,router:t}}var g=t(6417);const y={config:{},plugins:{Notify:g.Z}},w="";async function k({app:e,router:r},t){let o=!1;const n=e=>{try{return r.resolve(e).href}catch(t){}return Object(e)===e?null:e},a=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const r=n(e);null!==r&&(window.location.href=r,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let c=0;!1===o&&c<t.length;c++)try{await t[c]({app:e,router:r,ssrContext:null,redirect:a,urlPath:i,publicPath:w})}catch(s){return s&&s.url?void a(s.url):void console.error("[Quasar] boot error:",s)}!0!==o&&(e.use(r),e.mount("#q-app"))}m(o.ri,y).then((e=>Promise.all([Promise.resolve().then(t.bind(t,5474)),Promise.resolve().then(t.bind(t,2490))]).then((r=>{const t=r.map((e=>e.default)).filter((e=>"function"===typeof e));k(e,t)}))))},5474:(e,r,t)=>{t.r(r),t.d(r,{default:()=>s,api:()=>i});var o=t(7083),n=t(52),a=t.n(n);const i=a().create({baseURL:"https://api.example.com"}),s=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},2490:(e,r,t)=>{t.r(r),t.d(r,{firebase:()=>o.Z,auth:()=>s,db:()=>i});var o=t(8336);t(1756),t(7452);const n={apiKey:"AIzaSyB4GmlrCVaXQyaIciZbfKfbQPKI1jgU42s",authDomain:"kids-book-acff9.firebaseapp.com",projectId:"kids-book-acff9",storageBucket:"kids-book-acff9.appspot.com",messagingSenderId:"445458300137",appId:"1:445458300137:web:5446069f38f8192c77c478"},a=o.Z.initializeApp(n),i=a.firestore(),s=o.Z.auth();o.Z.getCurrentUser=()=>new Promise(((e,r)=>{const t=o.Z.auth().onAuthStateChanged((r=>{t(),e(r)}),r)}))}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(r,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](o[c])))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=n();void 0!==l&&(r=l)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{262:"7823a2ee",311:"07435929",614:"02a99d9b",652:"06bd1cbb"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"fa48bee4"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="funreads:";t.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==r+a){s=p;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+a),s.src=o),e[o]=[n];var d=(r,t)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(t))),r)return r(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p=""})(),(()=>{var e={143:0};t.f.j=(r,o)=>{var n=t.o(e,r)?e[r]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((t,o)=>n=e[r]=[t,o]));o.push(n[2]=a);var i=t.p+t.u(r),s=new Error,c=o=>{if(t.o(e,r)&&(n=e[r],0!==n&&(e[r]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};t.l(i,c,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,o)=>{var n,a,[i,s,c]=o,l=0;if(i.some((r=>0!==e[r]))){for(n in s)t.o(s,n)&&(t.m[n]=s[n]);if(c)var u=c(t)}for(r&&r(o);l<i.length;l++)a=i[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},o=self["webpackChunkfunreads"]=self["webpackChunkfunreads"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t.O(void 0,[736],(()=>t(4001)));o=t.O(o)})();