(self["webpackChunkfunreads"]=self["webpackChunkfunreads"]||[]).push([[736],{5479:(e,t,n)=>{"use strict";n.d(t,{BH:()=>h,LL:()=>S,ZR:()=>k,tV:()=>c,r3:()=>A,Sg:()=>d,ne:()=>F,vZ:()=>N,ZB:()=>l,pd:()=>D,m9:()=>V,z$:()=>f,jU:()=>g,ru:()=>v,d:()=>w,xb:()=>R,w1:()=>b,hl:()=>T,uI:()=>p,UG:()=>m,b$:()=>y,G6:()=>I,Mn:()=>_,xO:()=>P,zd:()=>L});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const l=i<e.length,u=l?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==u)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==u){const e=c<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&u(n)&&(e[n]=l(e[n],t[n]));return e}function u(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function m(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function g(){return"object"===typeof self&&self.self===self}function v(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function w(){return f().indexOf("Electron/")>=0}function b(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _(){return f().indexOf("MSAppHost/")>=0}function I(){return!m()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="FirebaseError";class k extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=E,Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?x(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new k(r,o,n);return a}}function x(e,t){return e.replace(C,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function R(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function N(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(O(n)&&O(s)){if(!N(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function O(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function L(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function D(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){const n=new M(e,t);return n.subscribe.bind(n)}class M{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=q(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=U),void 0===r.error&&(r.error=U),void 0===r.complete&&(r.complete=U);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function q(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function U(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e){return e&&e._delegate?e._delegate:e}},7518:e=>{e.exports=function(e,t,n){const r=void 0!==e.__vccOpts?e.__vccOpts:e,i=r[t];if(void 0===i)r[t]=n;else for(const s in n)void 0===i[s]&&(i[s]=n[s])}},1959:(e,t,n)=>{"use strict";n.d(t,{Bj:()=>o,qq:()=>_,Fl:()=>Ke,X3:()=>Re,PG:()=>xe,dq:()=>Me,yT:()=>Ae,Xl:()=>Oe,Jd:()=>k,WL:()=>ze,qj:()=>Te,iH:()=>qe,lk:()=>x,Um:()=>Ee,XI:()=>Ue,IU:()=>Ne,j:()=>C,X$:()=>N,SU:()=>Be});var r=n(2323);let i;const s=[];class o{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(s.push(this),i=this)}off(){this.active&&(s.pop(),i=s[s.length-1])}stop(e){if(this.active){if(this.effects.forEach((e=>e.stop())),this.cleanups.forEach((e=>e())),this.scopes&&this.scopes.forEach((e=>e.stop(!0))),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t){t=t||i,t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&m)>0,u=e=>(e.n&m)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];l(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~m,i.n&=~m}t.length=n}},f=new WeakMap;let p=0,m=1;const g=30,v=[];let y;const w=Symbol(""),b=Symbol("");class _{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!v.length||!v.includes(this))try{return v.push(y=this),S(),m=1<<++p,p<=g?h(this):I(this),this.fn()}finally{p<=g&&d(this),m=1<<--p,x(),v.pop();const e=v.length;y=e>0?v[e-1]:void 0}}stop(){this.active&&(I(this),this.onStop&&this.onStop(),this.active=!1)}}function I(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let T=!0;const E=[];function k(){E.push(T),T=!1}function S(){E.push(T),T=!0}function x(){const e=E.pop();T=void 0===e||e}function C(e,t,n){if(!A())return;let r=f.get(e);r||f.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=c());const s=void 0;R(i,s)}function A(){return T&&void 0!==y}function R(e,t){let n=!1;p<=g?u(e)||(e.n|=m,n=!l(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function N(e,t,n,i,s,o){const a=f.get(e);if(!a)return;let l=[];if("clear"===t)l=[...a.values()];else if("length"===n&&(0,r.kJ)(e))a.forEach(((e,t)=>{("length"===t||t>=i)&&l.push(e)}));else switch(void 0!==n&&l.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&l.push(a.get("length")):(l.push(a.get(w)),(0,r._N)(e)&&l.push(a.get(b)));break;case"delete":(0,r.kJ)(e)||(l.push(a.get(w)),(0,r._N)(e)&&l.push(a.get(b)));break;case"set":(0,r._N)(e)&&l.push(a.get(w));break}if(1===l.length)l[0]&&O(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);O(c(e))}}function O(e,t){for(const n of(0,r.kJ)(e)?e:[...e])(n!==y||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const P=(0,r.fY)("__proto__,__v_isRef,__isVue"),L=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(r.yk)),D=V(),F=V(!1,!0),M=V(!0),q=U();function U(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ne(this);for(let t=0,i=this.length;t<i;t++)C(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ne)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){k();const n=Ne(this)[t].apply(this,e);return x(),n}})),e}function V(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?be:we:t?ye:ve).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(q,i))return Reflect.get(q,i,s);const a=Reflect.get(n,i,s);if((0,r.yk)(i)?L.has(i):P(i))return a;if(e||C(n,"get",i),t)return a;if(Me(a)){const e=!o||!(0,r.S0)(i);return e?a.value:a}return(0,r.Kn)(a)?e?ke(a):Te(a):a}}const j=$(),B=$(!0);function $(e=!1){return function(t,n,i,s){let o=t[n];if(Ce(o)&&Me(o)&&!Me(i))return!1;if(!e&&!Ce(i)&&(Ae(i)||(i=Ne(i),o=Ne(o)),!(0,r.kJ)(t)&&Me(o)&&!Me(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,s);return t===Ne(s)&&(a?(0,r.aU)(i,o)&&N(t,"set",n,i,o):N(t,"add",n,i)),c}}function z(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&N(e,"delete",t,void 0,i),s}function H(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&L.has(t)||C(e,"has",t),n}function K(e){return C(e,"iterate",(0,r.kJ)(e)?"length":w),Reflect.ownKeys(e)}const W={get:D,set:j,deleteProperty:z,has:H,ownKeys:K},G={get:M,set(e,t){return!0},deleteProperty(e,t){return!0}},Y=(0,r.l7)({},W,{get:F,set:B}),J=e=>e,Q=e=>Reflect.getPrototypeOf(e);function Z(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ne(e),s=Ne(t);t!==s&&!n&&C(i,"get",t),!n&&C(i,"get",s);const{has:o}=Q(i),a=r?J:n?Le:Pe;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function X(e,t=!1){const n=this["__v_raw"],r=Ne(n),i=Ne(e);return e!==i&&!t&&C(r,"has",e),!t&&C(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function ee(e,t=!1){return e=e["__v_raw"],!t&&C(Ne(e),"iterate",w),Reflect.get(e,"size",e)}function te(e){e=Ne(e);const t=Ne(this),n=Q(t),r=n.has.call(t,e);return r||(t.add(e),N(t,"add",e,e)),this}function ne(e,t){t=Ne(t);const n=Ne(this),{has:i,get:s}=Q(n);let o=i.call(n,e);o||(e=Ne(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&N(n,"set",e,t,a):N(n,"add",e,t),this}function re(e){const t=Ne(this),{has:n,get:r}=Q(t);let i=n.call(t,e);i||(e=Ne(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&N(t,"delete",e,void 0,s),o}function ie(){const e=Ne(this),t=0!==e.size,n=void 0,r=e.clear();return t&&N(e,"clear",void 0,void 0,n),r}function se(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ne(s),a=t?J:e?Le:Pe;return!e&&C(o,"iterate",w),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function oe(e,t,n){return function(...i){const s=this["__v_raw"],o=Ne(s),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=s[e](...i),h=n?J:t?Le:Pe;return!t&&C(o,"iterate",l?b:w),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function ce(){const e={get(e){return Z(this,e)},get size(){return ee(this)},has:X,add:te,set:ne,delete:re,clear:ie,forEach:se(!1,!1)},t={get(e){return Z(this,e,!1,!0)},get size(){return ee(this)},has:X,add:te,set:ne,delete:re,clear:ie,forEach:se(!1,!0)},n={get(e){return Z(this,e,!0)},get size(){return ee(this,!0)},has(e){return X.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!1)},r={get(e){return Z(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return X.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=oe(i,!1,!1),n[i]=oe(i,!0,!1),t[i]=oe(i,!1,!0),r[i]=oe(i,!0,!0)})),[e,n,t,r]}const[le,ue,he,de]=ce();function fe(e,t){const n=t?e?de:he:e?ue:le;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const pe={get:fe(!1,!1)},me={get:fe(!1,!0)},ge={get:fe(!0,!1)};const ve=new WeakMap,ye=new WeakMap,we=new WeakMap,be=new WeakMap;function _e(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ie(e){return e["__v_skip"]||!Object.isExtensible(e)?0:_e((0,r.W7)(e))}function Te(e){return Ce(e)?e:Se(e,!1,W,pe,ve)}function Ee(e){return Se(e,!1,Y,me,ye)}function ke(e){return Se(e,!0,G,ge,we)}function Se(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=Ie(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function xe(e){return Ce(e)?xe(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ce(e){return!(!e||!e["__v_isReadonly"])}function Ae(e){return!(!e||!e["__v_isShallow"])}function Re(e){return xe(e)||Ce(e)}function Ne(e){const t=e&&e["__v_raw"];return t?Ne(t):e}function Oe(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Pe=e=>(0,r.Kn)(e)?Te(e):e,Le=e=>(0,r.Kn)(e)?ke(e):e;function De(e){A()&&(e=Ne(e),e.dep||(e.dep=c()),R(e.dep))}function Fe(e,t){e=Ne(e),e.dep&&O(e.dep)}function Me(e){return Boolean(e&&!0===e.__v_isRef)}function qe(e){return Ve(e,!1)}function Ue(e){return Ve(e,!0)}function Ve(e,t){return Me(e)?e:new je(e,t)}class je{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ne(e),this._value=t?e:Pe(e)}get value(){return De(this),this._value}set value(e){e=this.__v_isShallow?e:Ne(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Pe(e),Fe(this,e))}}function Be(e){return Me(e)?e.value:e}const $e={get:(e,t,n)=>Be(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Me(i)&&!Me(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function ze(e){return xe(e)?e:new Proxy(e,$e)}class He{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new _(e,(()=>{this._dirty||(this._dirty=!0,Fe(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ne(this);return De(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ke(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new He(i,s,o||!s,n);return a}Promise.resolve()},3673:(e,t,n)=>{"use strict";n.d(t,{P$:()=>oe,HY:()=>jt,Ob:()=>ve,lR:()=>Pt,$d:()=>o,Fl:()=>Bn,j4:()=>Xt,kq:()=>dn,iD:()=>Zt,_:()=>on,Us:()=>_t,Uk:()=>hn,Wm:()=>an,aZ:()=>fe,FN:()=>Sn,Q6:()=>de,h:()=>$n,f3:()=>J,dG:()=>gn,Y3:()=>I,dl:()=>we,Jd:()=>Ne,Xn:()=>Ae,se:()=>be,bv:()=>Ce,Ah:()=>Oe,ic:()=>Re,wg:()=>Wt,JJ:()=>Y,Ko:()=>yn,up:()=>Ft,Q2:()=>qt,U2:()=>ce,nK:()=>he,Y8:()=>re,YP:()=>Z,w5:()=>V,wy:()=>ft});var r=n(1959),i=n(2323);function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){a(s,t,n)}return i}function o(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let i=0;i<e.length;i++)c.push(o(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let l=!1,u=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=[];let v=null,y=0;const w=Promise.resolve();let b=null,_=null;function I(e){const t=b||w;return e?t.then(this?e.bind(this):e):t}function T(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=O(h[r]);i<e?t=r+1:n=r}return t}function E(e){h.length&&h.includes(e,l&&e.allowRecurse?d+1:d)||e===_||(null==e.id?h.push(e):h.splice(T(e.id),0,e),k())}function k(){l||u||(u=!0,b=w.then(P))}function S(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function x(e,t,n,r){(0,i.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),k()}function C(e){x(e,p,f,m)}function A(e){x(e,v,g,y)}function R(e,t=null){if(f.length){for(_=t,p=[...new Set(f)],f.length=0,m=0;m<p.length;m++)p[m]();p=null,m=0,_=null,R(e,t)}}function N(e){if(g.length){const e=[...new Set(g)];if(g.length=0,v)return void v.push(...e);for(v=e,v.sort(((e,t)=>O(e)-O(t))),y=0;y<v.length;y++)v[y]();v=null,y=0}}const O=e=>null==e.id?1/0:e.id;function P(e){u=!1,l=!0,R(e),h.sort(((e,t)=>O(e)-O(t)));i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,N(e),l=!1,b=null,(h.length||f.length||g.length)&&P(e)}}new Set;new Map;function L(e,t,...n){const r=e.vnode.props||i.kT;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o?s=n.map((e=>e.trim())):t&&(s=n.map(i.He))}let l;let u=r[l=(0,i.hR)(t)]||r[l=(0,i.hR)((0,i._A)(t))];!u&&a&&(u=r[l=(0,i.hR)((0,i.rs)(t))]),u&&o(u,e,6,s);const h=r[l+"Once"];if(h){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,o(h,e,6,s)}}function D(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=D(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),r.set(e,a),a):(r.set(e,null),null)}function F(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let M=null,q=null;function U(e){const t=M;return M=e,q=e&&e.type.__scopeId||null,t}function V(e,t=M,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Jt(-1);const i=U(t),s=e(...n);return U(i),r._d&&Jt(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function j(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:l,attrs:u,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:v}=e;let y,w;const b=U(e);try{if(4&n.shapeFlag){const e=s||r;y=fn(d.call(e,e,f,o,m,p,g)),w=u}else{const e=t;0,y=fn(e.length>1?e(o,{attrs:u,slots:l,emit:h}):e(o,null)),w=t.props?u:B(u)}}catch(I){Ht.length=0,a(I,e,1),y=an($t)}let _=y;if(w&&!1!==v){const e=Object.keys(w),{shapeFlag:t}=_;e.length&&7&t&&(c&&e.some(i.tR)&&(w=$(w,c)),_=un(_,w))}return n.dirs&&(_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),y=_,U(b),y}const B=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},$=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function z(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||H(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?H(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!F(l,n))return!0}}return!1}function H(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!F(n,s))return!0}return!1}function K({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const W=e=>e.__isSuspense;function G(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):A(e)}function Y(e,t){if(kn){let n=kn.provides;const r=kn.parent&&kn.parent.provides;r===n&&(n=kn.provides=Object.create(r)),n[e]=t}else 0}function J(e,t,n=!1){const r=kn||M;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const Q={};function Z(e,t,n){return X(e,t,n)}function X(e,t,{immediate:n,deep:a,flush:c,onTrack:l,onTrigger:u}=i.kT){const h=kn;let d,f,p=!1,m=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,i.kJ)(e)?(m=!0,p=e.some(r.PG),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?ne(e):(0,i.mf)(e)?s(e,h,2):void 0))):d=(0,i.mf)(e)?t?()=>s(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(e,h,3,[g])}:i.dG,t&&a){const e=d;d=()=>ne(e())}let g=e=>{f=b.onStop=()=>{s(e,h,4)}};if(On)return g=i.dG,t?n&&o(t,h,3,[d(),m?[]:void 0,g]):d(),i.dG;let v=m?[]:Q;const y=()=>{if(b.active)if(t){const e=b.run();(a||p||(m?e.some(((e,t)=>(0,i.aU)(e,v[t]))):(0,i.aU)(e,v)))&&(f&&f(),o(t,h,3,[e,v===Q?void 0:v,g]),v=e)}else b.run()};let w;y.allowRecurse=!!t,w="sync"===c?y:"post"===c?()=>bt(y,h&&h.suspense):()=>{!h||h.isMounted?C(y):y()};const b=new r.qq(d,w);return t?n?y():v=b.run():"post"===c?bt(b.run.bind(b),h&&h.suspense):b.run(),()=>{b.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,b)}}function ee(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?te(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=kn;xn(this);const c=X(s,o.bind(r),n);return a?xn(a):Cn(),c}function te(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ne(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))ne(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)ne(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{ne(e,t)}));else if((0,i.PO)(e))for(const n in e)ne(e[n],t);return e}function re(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ce((()=>{e.isMounted=!0})),Ne((()=>{e.isUnmounting=!0})),e}const ie=[Function,Array],se={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ie,onEnter:ie,onAfterEnter:ie,onEnterCancelled:ie,onBeforeLeave:ie,onLeave:ie,onAfterLeave:ie,onLeaveCancelled:ie,onBeforeAppear:ie,onAppear:ie,onAfterAppear:ie,onAppearCancelled:ie},setup(e,{slots:t}){const n=Sn(),i=re();let s;return()=>{const o=t.default&&de(t.default(),!0);if(!o||!o.length)return;const a=(0,r.IU)(e),{mode:c}=a;const l=o[0];if(i.isLeaving)return le(l);const u=ue(l);if(!u)return le(l);const h=ce(u,a,i,n);he(u,h);const d=n.subTree,f=d&&ue(d);let p=!1;const{getTransitionKey:m}=u.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==$t&&(!tn(u,f)||p)){const e=ce(f,a,i,n);if(he(f,e),"out-in"===c)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},le(l);"in-out"===c&&u.type!==$t&&(e.delayLeave=(e,t,n)=>{const r=ae(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return l}}},oe=se;function ae(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ce(e,t,n,r){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:g,onAppear:v,onAfterAppear:y,onAppearCancelled:w}=t,b=String(e.key),_=ae(n,e),I=(e,t)=>{e&&o(e,r,9,t)},T={mode:s,persisted:a,beforeEnter(t){let r=c;if(!n.isMounted){if(!i)return;r=g||c}t._leaveCb&&t._leaveCb(!0);const s=_[b];s&&tn(e,s)&&s.el._leaveCb&&s.el._leaveCb(),I(r,[t])},enter(e){let t=l,r=u,s=h;if(!n.isMounted){if(!i)return;t=v||l,r=y||u,s=w||h}let o=!1;const a=e._enterCb=t=>{o||(o=!0,I(t?s:r,[e]),T.delayedLeave&&T.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();I(d,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),I(n?m:p,[t]),t._leaveCb=void 0,_[i]===e&&delete _[i])};_[i]=e,f?(f(t,o),f.length<=1&&o()):o()},clone(e){return ce(e,t,n,r)}};return T}function le(e){if(me(e))return e=un(e),e.children=null,e}function ue(e){return me(e)?e.children?e.children[0]:void 0:e}function he(e,t){6&e.shapeFlag&&e.component?he(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function de(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const s=e[i];s.type===jt?(128&s.patchFlag&&r++,n=n.concat(de(s.children,t))):(t||s.type!==$t)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function fe(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const pe=e=>!!e.type.__asyncLoader;const me=e=>e.type.__isKeepAlive,ge={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Sn(),r=n.ctx;if(!r.renderer)return t.default;const s=new Map,o=new Set;let a=null;const c=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:d}}}=r,f=d("div");function p(e){Te(e),h(e,n,c,!0)}function m(e){s.forEach(((t,n)=>{const r=Vn(t.type);!r||e&&e(r)||g(n)}))}function g(e){const t=s.get(e);a&&t.type===a.type?a&&Te(a):p(t),s.delete(e),o.delete(e)}r.activate=(e,t,n,r,s)=>{const o=e.component;u(e,t,n,0,c),l(o.vnode,e,t,n,o,c,r,e.slotScopeIds,s),bt((()=>{o.isDeactivated=!1,o.a&&(0,i.ir)(o.a);const t=e.props&&e.props.onVnodeMounted;t&&vn(t,o.parent,e)}),c)},r.deactivate=e=>{const t=e.component;u(e,f,null,1,c),bt((()=>{t.da&&(0,i.ir)(t.da);const n=e.props&&e.props.onVnodeUnmounted;n&&vn(n,t.parent,e),t.isDeactivated=!0}),c)},Z((()=>[e.include,e.exclude]),(([e,t])=>{e&&m((t=>ye(e,t))),t&&m((e=>!ye(t,e)))}),{flush:"post",deep:!0});let v=null;const y=()=>{null!=v&&s.set(v,Ee(n.subTree))};return Ce(y),Re(y),Ne((()=>{s.forEach((e=>{const{subTree:t,suspense:r}=n,i=Ee(t);if(e.type!==i.type)p(e);else{Te(i);const e=i.component.da;e&&bt(e,r)}}))})),()=>{if(v=null,!t.default)return null;const n=t.default(),r=n[0];if(n.length>1)return a=null,n;if(!en(r)||!(4&r.shapeFlag)&&!(128&r.shapeFlag))return a=null,r;let i=Ee(r);const c=i.type,l=Vn(pe(i)?i.type.__asyncResolved||{}:c),{include:u,exclude:h,max:d}=e;if(u&&(!l||!ye(u,l))||h&&l&&ye(h,l))return a=i,r;const f=null==i.key?c:i.key,p=s.get(f);return i.el&&(i=un(i),128&r.shapeFlag&&(r.ssContent=i)),v=f,p?(i.el=p.el,i.component=p.component,i.transition&&he(i,i.transition),i.shapeFlag|=512,o.delete(f),o.add(f)):(o.add(f),d&&o.size>parseInt(d,10)&&g(o.values().next().value)),i.shapeFlag|=256,a=i,r}}},ve=ge;function ye(e,t){return(0,i.kJ)(e)?e.some((e=>ye(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function we(e,t){_e(e,"a",t)}function be(e,t){_e(e,"da",t)}function _e(e,t,n=kn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ke(t,r,n),n){let e=n.parent;while(e&&e.parent)me(e.parent.vnode)&&Ie(r,t,n,e),e=e.parent}}function Ie(e,t,n,r){const s=ke(t,e,r,!0);Oe((()=>{(0,i.Od)(r[t],s)}),n)}function Te(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Ee(e){return 128&e.shapeFlag?e.ssContent:e}function ke(e,t,n=kn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),xn(n);const s=o(t,n,e,i);return Cn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Se=e=>(t,n=kn)=>(!On||"sp"===e)&&ke(e,t,n),xe=Se("bm"),Ce=Se("m"),Ae=Se("bu"),Re=Se("u"),Ne=Se("bum"),Oe=Se("um"),Pe=Se("sp"),Le=Se("rtg"),De=Se("rtc");function Fe(e,t=kn){ke("ec",e,t)}let Me=!0;function qe(e){const t=Be(e),n=e.proxy,s=e.ctx;Me=!1,t.beforeCreate&&Ve(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:I,render:T,renderTracked:E,renderTriggered:k,errorCaptured:S,serverPrefetch:x,expose:C,inheritAttrs:A,components:R,directives:N,filters:O}=t,P=null;if(h&&Ue(h,s,P,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Me=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=Bn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const r in l)je(l[r],s,n,r);if(u){const e=(0,i.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{Y(t,e[t])}))}function L(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Ve(d,e,"c"),L(xe,f),L(Ce,p),L(Ae,m),L(Re,g),L(we,v),L(be,y),L(Fe,S),L(De,E),L(Le,k),L(Ne,b),L(Oe,I),L(Pe,x),(0,i.kJ)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===i.dG&&(e.render=T),null!=A&&(e.inheritAttrs=A),R&&(e.components=R),N&&(e.directives=N)}function Ue(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=We(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?J(n.from||o,n.default,!0):J(n.from||o):J(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function Ve(e,t,n){o((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function je(e,t,n,r){const s=r.includes(".")?te(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&Z(s,n)}else if((0,i.mf)(e))Z(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>je(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&Z(s,r,e)}else 0}function Be(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((e=>$e(c,e,o,!0))),$e(c,t,o)):c=t,s.set(t,c),c}function $e(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&$e(e,s,n,!0),i&&i.forEach((t=>$e(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=ze[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const ze={data:He,props:Ye,emits:Ye,methods:Ye,computed:Ye,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:Ye,directives:Ye,watch:Je,provide:He,inject:Ke};function He(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Ke(e,t){return Ye(We(e),We(t))}function We(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ge(e,t){return e?[...new Set([].concat(e,t))]:t}function Ye(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function Je(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=Ge(e[r],t[r]);return n}function Qe(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,nn,1),e.propsDefaults=Object.create(null),Xe(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function Ze(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,l=(0,r.IU)(o),[u]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;Xe(e,t,o,a)&&(h=!0);for(const s in l)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(u?!n||void 0===n[s]&&void 0===n[r]||(o[s]=et(u,l,s,void 0,e,!0)):delete o[s]);if(a!==l)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];const c=t[s];if(u)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i._A)(s);o[t]=et(u,l,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function Xe(e,t,n,s){const[o,a]=e.propsOptions;let c,l=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const u=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:F(e.emitsOptions,r)||r in s&&u===s[r]||(s[r]=u,l=!0)}if(a){const t=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=et(o,t,c,s[c],e,!(0,i.RI)(s,c))}}return l}function et(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(xn(s),r=i[n]=e.call(null,t),Cn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function tt(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let l=!1;if(!(0,i.mf)(e)){const r=e=>{l=!0;const[n,r]=tt(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!l)return r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);nt(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(nt(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const e=st(Boolean,r.type),n=st(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const u=[a,c];return r.set(e,u),u}function nt(e){return"$"!==e[0]}function rt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function it(e,t){return rt(e)===rt(t)}function st(e,t){return(0,i.kJ)(t)?t.findIndex((t=>it(t,e))):(0,i.mf)(t)&&it(t,e)?0:-1}const ot=e=>"_"===e[0]||"$stable"===e,at=e=>(0,i.kJ)(e)?e.map(fn):[fn(e)],ct=(e,t,n)=>{const r=V(((...e)=>at(t(...e))),n);return r._c=!1,r},lt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(ot(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=ct(s,n,r);else if(null!=n){0;const e=at(n);t[s]=()=>e}}},ut=(e,t)=>{const n=at(t);e.slots.default=()=>n},ht=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):lt(t,e.slots={})}else e.slots={},t&&ut(e,t);(0,i.Nj)(e.slots,nn,1)},dt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,lt(t,s)),a=t}else t&&(ut(e,t),a={default:1});if(o)for(const i in s)ot(i)||i in a||delete s[i]};function ft(e,t){const n=M;if(null===n)return e;const r=n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i.kT]=t[o];(0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&ne(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function pt(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const l=s[c];a&&(l.oldValue=a[c].value);let u=l.dir[i];u&&((0,r.Jd)(),o(u,n,8,[e.el,l,e,t]),(0,r.lk)())}}function mt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gt=0;function vt(e,t){return function(n,r=null){null==r||(0,i.Kn)(r)||(r=null);const s=mt(),o=new Set;let a=!1;const c=s.app={_uid:gt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:zn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,i.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,l){if(!a){const u=an(n,r);return u.appContext=s,o&&t?t(u,i):e(u,i,l),a=!0,c._container=i,i.__vue_app__=c,Un(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function yt(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>yt(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(pe(o)&&!a)return;const c=4&o.shapeFlag?Un(o.component)||o.component.proxy:o.el,l=a?null:c,{i:u,r:h}=e;const d=t&&t.r,f=u.refs===i.kT?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,u,12,[l,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const s=()=>{if(e.f){const n=t?f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?f[h]=[c]:(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=l,(0,i.RI)(p,h)&&(p[h]=l)):(0,r.dq)(h)&&(h.value=l,e.k&&(f[e.k]=l))};l?(s.id=-1,bt(s,n)):s()}else 0}}function wt(){}const bt=G;function _t(e){return It(e)}function It(e,t){wt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,cloneNode:g,insertStaticContent:v}=e,y=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!tn(e,t)&&(r=X(e),G(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Bt:w(e,t,n,r);break;case $t:b(e,t,n,r);break;case zt:null==e&&_(t,n,r,o);break;case jt:D(e,t,n,r,i,s,o,a,c);break;default:1&h?k(e,t,n,r,i,s,o,a,c):6&h?F(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,s,o,a,c,te)}null!=u&&i&&yt(u,e&&e.ref,s,t||e,!t)},w=(e,t,n,r)=>{if(null==e)s(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?s(t.el=u(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=v(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},T=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},k=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?x(t,n,r,i,s,o,a,c):O(e,t,i,s,o,a,c)},x=(e,t,n,r,o,l,u,h)=>{let f,p;const{type:m,props:v,shapeFlag:y,transition:w,patchFlag:b,dirs:_}=e;if(e.el&&void 0!==g&&-1===b)f=e.el=g(e.el);else{if(f=e.el=c(e.type,l,v&&v.is,v),8&y?d(f,e.children):16&y&&A(e.children,f,null,r,o,l&&"foreignObject"!==m,u,h),_&&pt(e,null,r,"created"),v){for(const t in v)"value"===t||(0,i.Gg)(t)||a(f,t,null,v[t],l,e.children,r,o,Z);"value"in v&&a(f,"value",null,v.value),(p=v.onVnodeBeforeMount)&&vn(p,r,e)}C(f,e,e.scopeId,u,r)}_&&pt(e,null,r,"beforeMount");const I=(!o||o&&!o.pendingBranch)&&w&&!w.persisted;I&&w.beforeEnter(f),s(f,t,n),((p=v&&v.onVnodeMounted)||I||_)&&bt((()=>{p&&vn(p,r,e),I&&w.enter(f),_&&pt(e,null,r,"mounted")}),o)},C=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;C(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},A=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?pn(e[l]):fn(e[l]);y(null,c,t,n,r,i,s,o,a)}},O=(e,t,n,r,s,o,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&Tt(n,!1),(g=m.onVnodeBeforeUpdate)&&vn(g,n,t,e),f&&pt(t,e,n,"beforeUpdate"),n&&Tt(n,!0);const v=s&&"foreignObject"!==t.type;if(h?P(e.dynamicChildren,h,l,n,r,v,o):c||B(e,t,l,null,n,r,v,o,!1),u>0){if(16&u)L(l,t,p,m,n,r,s);else if(2&u&&p.class!==m.class&&a(l,"class",null,m.class,s),4&u&&a(l,"style",p.style,m.style,s),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],u=m[o];u===c&&"value"!==o||a(l,o,c,u,s,e.children,n,r,Z)}}1&u&&e.children!==t.children&&d(l,t.children)}else c||null!=h||L(l,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&bt((()=>{g&&vn(g,n,t,e),f&&pt(t,e,n,"updated")}),r)},P=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===jt||!tn(c,l)||70&c.shapeFlag)?f(c.el):n;y(c,l,u,null,r,i,s,o,!0)}},L=(e,t,n,r,s,o,c)=>{if(n!==r){for(const l in r){if((0,i.Gg)(l))continue;const u=r[l],h=n[l];u!==h&&"value"!==l&&a(e,l,h,u,c,t.children,s,o,Z)}if(n!==i.kT)for(const l in n)(0,i.Gg)(l)||l in r||a(e,l,n[l],null,c,t.children,s,o,Z);"value"in r&&a(e,"value",n.value,r.value)}},D=(e,t,n,r,i,o,a,c,u)=>{const h=t.el=e?e.el:l(""),d=t.anchor=e?e.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(s(h,n,r),s(d,n,r),A(t.children,n,d,i,o,a,c,u)):f>0&&64&f&&p&&e.dynamicChildren?(P(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Et(e,t,!0)):B(e,t,n,d,i,o,a,c,u)},F=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):M(t,n,r,i,s,o,c):q(e,t,c)},M=(e,t,n,r,i,s,o)=>{const a=e.component=En(e,r,i);if(me(e)&&(a.ctx.renderer=te),Pn(a),a.asyncDep){if(i&&i.registerDep(a,U),!e.el){const e=a.subTree=an($t);b(null,e,t,n)}}else U(a,e,t,n,i,s,o)},q=(e,t,n)=>{const r=t.component=e.component;if(z(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,S(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},U=(e,t,n,s,o,a,c)=>{const l=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:l,vnode:u}=e,h=n;0,Tt(e,!1),n?(n.el=u.el,V(e,n,c)):n=u,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&vn(t,l,n,u),Tt(e,!0);const d=j(e);0;const p=e.subTree;e.subTree=d,y(p,d,f(p.el),X(p),e,o,a),n.el=d.el,null===h&&K(e,d.el),s&&bt(s,o),(t=n.props&&n.props.onVnodeUpdated)&&bt((()=>vn(t,l,n,u)),o)}else{let r;const{el:c,props:l}=t,{bm:u,m:h,parent:d}=e,f=pe(t);if(Tt(e,!1),u&&(0,i.ir)(u),!f&&(r=l&&l.onVnodeBeforeMount)&&vn(r,d,t),Tt(e,!0),c&&re){const n=()=>{e.subTree=j(e),re(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=j(e);0,y(null,r,n,s,e,o,a),t.el=r.el}if(h&&bt(h,o),!f&&(r=l&&l.onVnodeMounted)){const e=t;bt((()=>vn(r,d,e)),o)}256&t.shapeFlag&&e.a&&bt(e.a,o),e.isMounted=!0,t=n=s=null}},u=e.effect=new r.qq(l,(()=>E(e.update)),e.scope),h=e.update=u.run.bind(u);h.id=e.uid,Tt(e,!0),h()},V=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,Ze(e,t.props,i,n),dt(e,t.children,n),(0,r.Jd)(),R(void 0,e.update),(0,r.lk)()},B=(e,t,n,r,i,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void H(l,h,n,r,i,s,o,a,c);if(256&f)return void $(l,h,n,r,i,s,o,a,c)}8&p?(16&u&&Z(l,i,s),h!==l&&d(n,h)):16&u?16&p?H(l,h,n,r,i,s,o,a,c):Z(l,i,s,!0):(8&u&&d(n,""),16&p&&A(h,n,r,i,s,o,a,c))},$=(e,t,n,r,s,o,a,c,l)=>{e=e||i.Z6,t=t||i.Z6;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=l?pn(t[f]):fn(t[f]);y(e[f],r,n,null,s,o,a,c,l)}u>h?Z(e,s,o,!0,!1,d):A(t,n,r,s,o,a,c,l,d)},H=(e,t,n,r,s,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],i=t[u]=l?pn(t[u]):fn(t[u]);if(!tn(r,i))break;y(r,i,n,null,s,o,a,c,l),u++}while(u<=d&&u<=f){const r=e[d],i=t[f]=l?pn(t[f]):fn(t[f]);if(!tn(r,i))break;y(r,i,n,null,s,o,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,i=e<h?t[e].el:r;while(u<=f)y(null,t[u]=l?pn(t[u]):fn(t[u]),n,i,s,o,a,c,l),u++}}else if(u>f)while(u<=d)G(e[u],s,o,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=f;u++){const e=t[u]=l?pn(t[u]):fn(t[u]);null!=e.key&&g.set(e.key,u)}let v,w=0;const b=f-m+1;let _=!1,I=0;const T=new Array(b);for(u=0;u<b;u++)T[u]=0;for(u=p;u<=d;u++){const r=e[u];if(w>=b){G(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=m;v<=f;v++)if(0===T[v-m]&&tn(r,t[v])){i=v;break}void 0===i?G(r,s,o,!0):(T[i-m]=u+1,i>=I?I=i:_=!0,y(r,t[i],n,null,s,o,a,c,l),w++)}const E=_?kt(T):i.Z6;for(v=E.length-1,u=b-1;u>=0;u--){const e=m+u,i=t[e],d=e+1<h?t[e+1].el:r;0===T[u]?y(null,i,n,d,s,o,a,c,l):_&&(v<0||u!==E[v]?W(i,n,d,2):v--)}}},W=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void W(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,te);if(a===jt){s(o,t,n);for(let e=0;e<l.length;e++)W(l[e],t,n,r);return void s(e.anchor,t,n)}if(a===zt)return void I(e,t,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),bt((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),l=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,l):l()}else s(o,t,n)},G=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&yt(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!pe(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&vn(m,t,e),6&u)Q(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&pt(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,te,r):l&&(s!==jt||h>0&&64&h)?Z(l,t,n,!1,!0):(s===jt&&384&h||!i&&16&u)&&Z(c,t,n),r&&Y(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&bt((()=>{m&&vn(m,t,e),f&&pt(e,null,t,"unmounted")}),n)},Y=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===jt)return void J(n,r);if(t===zt)return void T(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},J=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Q=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,G(a,e,t,n)),c&&bt(c,t),bt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Z=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)G(e[o],t,n,r,i)},X=e=>6&e.shapeFlag?X(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),N(),t._vnode=e},te={p:y,um:G,m:W,r:Y,mt:M,mc:A,pc:B,pbc:P,n:X,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:vt(ee,ne)}}function Tt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Et(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=pn(s[i]),t.el=e.el),n||Et(e,t))}}function kt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const St=e=>e.__isTeleport,xt=e=>e&&(e.disabled||""===e.disabled),Ct=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,At=(e,t)=>{const n=e&&e.to;if((0,i.HD)(n)){if(t){const e=t(n);return e}return null}return n},Rt={__isTeleport:!0,process(e,t,n,r,i,s,o,a,c,l){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:g}}=l,v=xt(t.props);let{shapeFlag:y,children:w,dynamicChildren:b}=t;if(null==e){const e=t.el=m(""),l=t.anchor=m("");f(e,n,r),f(l,n,r);const h=t.target=At(t.props,p),d=t.targetAnchor=m("");h&&(f(d,h),o=o||Ct(h));const g=(e,t)=>{16&y&&u(w,e,t,i,s,o,a,c)};v?g(n,l):h&&g(h,d)}else{t.el=e.el;const r=t.anchor=e.anchor,u=t.target=e.target,f=t.targetAnchor=e.targetAnchor,m=xt(e.props),g=m?n:u,y=m?r:f;if(o=o||Ct(u),b?(d(e.dynamicChildren,b,g,i,s,o,a),Et(e,t,!0)):c||h(e,t,g,y,i,s,o,a,!1),v)m||Nt(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=At(t.props,p);e&&Nt(t,e,null,l,0)}else m&&Nt(t,u,f,l,1)}},remove(e,t,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:h,props:d}=e;if(h&&s(u),(o||!xt(d))&&(s(l),16&a))for(let f=0;f<c.length;f++){const e=c[f];i(e,t,n,!0,!!e.dynamicChildren)}},move:Nt,hydrate:Ot};function Nt(e,t,n,{o:{insert:r},m:i},s=2){0===s&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=e,h=2===s;if(h&&r(o,t,n),(!h||xt(u))&&16&c)for(let d=0;d<l.length;d++)i(l[d],t,n,2);h&&r(a,t,n)}function Ot(e,t,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=t.target=At(t.props,c);if(u){const c=u._lpa||u.firstChild;16&t.shapeFlag&&(xt(t.props)?(t.anchor=l(o(e),t,a(e),n,r,i,s),t.targetAnchor=c):(t.anchor=o(e),t.targetAnchor=l(c,t,u,n,r,i,s)),u._lpa=t.targetAnchor&&o(t.targetAnchor))}return t.anchor&&o(t.anchor)}const Pt=Rt,Lt="components",Dt="directives";function Ft(e,t){return Ut(Lt,e,!0,t)||e}const Mt=Symbol();function qt(e){return Ut(Dt,e)}function Ut(e,t,n=!0,r=!1){const s=M||kn;if(s){const n=s.type;if(e===Lt){const e=Vn(n);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=Vt(s[e]||n[e],t)||Vt(s.appContext[e],t);return!o&&r?n:o}}function Vt(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}const jt=Symbol(void 0),Bt=Symbol(void 0),$t=Symbol(void 0),zt=Symbol(void 0),Ht=[];let Kt=null;function Wt(e=!1){Ht.push(Kt=e?null:[])}function Gt(){Ht.pop(),Kt=Ht[Ht.length-1]||null}let Yt=1;function Jt(e){Yt+=e}function Qt(e){return e.dynamicChildren=Yt>0?Kt||i.Z6:null,Gt(),Yt>0&&Kt&&Kt.push(e),e}function Zt(e,t,n,r,i,s){return Qt(on(e,t,n,r,i,s,!0))}function Xt(e,t,n,r,i){return Qt(an(e,t,n,r,i,!0))}function en(e){return!!e&&!0===e.__v_isVNode}function tn(e,t){return e.type===t.type&&e.key===t.key}const nn="__vInternal",rn=({key:e})=>null!=e?e:null,sn=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:M,r:e,k:t,f:!!n}:e:null;function on(e,t=null,n=null,r=0,s=null,o=(e===jt?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&rn(t),ref:t&&sn(t),scopeId:q,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(mn(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=(0,i.HD)(n)?8:16),Yt>0&&!a&&Kt&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&Kt.push(l),l}const an=cn;function cn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Mt||(e=$t),en(e)){const r=un(e,t,!0);return n&&mn(r,n),r}if(jn(e)&&(e=e.__vccOpts),t){t=ln(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:W(e)?128:St(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return on(e,t,n,s,o,c,a,!0)}function ln(e){return e?(0,r.X3)(e)||nn in e?(0,i.l7)({},e):e:null}function un(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?gn(r||{},t):r,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&rn(c),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(sn(t)):[s,sn(t)]:sn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==jt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&un(e.ssContent),ssFallback:e.ssFallback&&un(e.ssFallback),el:e.el,anchor:e.anchor};return l}function hn(e=" ",t=0){return an(Bt,null,e,t)}function dn(e="",t=!1){return t?(Wt(),Xt($t,null,e)):an($t,null,e)}function fn(e){return null==e||"boolean"===typeof e?an($t):(0,i.kJ)(e)?an(jt,null,e.slice()):"object"===typeof e?pn(e):an(Bt,null,String(e))}function pn(e){return null===e.el||e.memo?e:un(e)}function mn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),mn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||nn in t?3===r&&M&&(1===M.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=M}}else(0,i.mf)(t)?(t={default:t,_ctx:M},n=32):(t=String(t),64&r?(n=16,t=[hn(t)]):n=8);e.children=t,e.shapeFlag|=n}function gn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function vn(e,t,n,r=null){o(e,t,7,[n,r])}function yn(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const wn=e=>e?An(e)?Un(e)||e.proxy:wn(e.parent):null,bn=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>wn(e.parent),$root:e=>wn(e.root),$emit:e=>e.emit,$options:e=>Be(e),$forceUpdate:e=>()=>E(e.update),$nextTick:e=>I.bind(e.proxy),$watch:e=>ee.bind(e)}),_n={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:l,appContext:u}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(s!==i.kT&&(0,i.RI)(s,t))return c[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];Me&&(c[t]=0)}}const d=bn[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=l.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=u.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;if(s!==i.kT&&(0,i.RI)(s,t))s[t]=n;else if(r!==i.kT&&(0,i.RI)(r,t))r[t]=n;else if((0,i.RI)(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||t!==i.kT&&(0,i.RI)(t,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(bn,a)||(0,i.RI)(s.config.globalProperties,a)}};const In=mt();let Tn=0;function En(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||In,a={uid:Tn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tt(s,o),emitsOptions:D(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=L.bind(null,a),e.ce&&e.ce(a),a}let kn=null;const Sn=()=>kn||M,xn=e=>{kn=e,e.scope.on()},Cn=()=>{kn&&kn.scope.off(),kn=null};function An(e){return 4&e.vnode.shapeFlag}let Rn,Nn,On=!1;function Pn(e,t=!1){On=t;const{props:n,children:r}=e.vnode,i=An(e);Qe(e,n,i,t),ht(e,r);const s=i?Ln(e,t):void 0;return On=!1,s}function Ln(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,_n));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?qn(e):null;xn(e),(0,r.Jd)();const c=s(o,e,0,[e.props,n]);if((0,r.lk)(),Cn(),(0,i.tI)(c)){if(c.then(Cn,Cn),t)return c.then((n=>{Dn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else Dn(e,c,t)}else Fn(e,t)}function Dn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Fn(e,n)}function Fn(e,t,n){const s=e.type;if(!e.render){if(!t&&Rn&&!s.render){const t=s.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=Rn(t,c)}}e.render=s.render||i.dG,Nn&&Nn(e)}xn(e),(0,r.Jd)(),qe(e),(0,r.lk)(),Cn()}function Mn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function qn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Mn(e))},slots:e.slots,emit:e.emit,expose:t}}function Un(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in bn?bn[n](e):void 0}}))}function Vn(e){return(0,i.mf)(e)&&e.displayName||e.name}function jn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Bn=(e,t)=>(0,r.Fl)(e,t,On);function $n(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?en(t)?an(e,null,[t]):an(e,t):an(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&en(n)&&(n=[n]),an(e,t,n))}Symbol("");const zn="3.2.29"},8880:(e,t,n)=>{"use strict";n.d(t,{uT:()=>q,W3:()=>ie,ri:()=>de});var r=n(2323),i=n(3673),s=n(1959);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${e}</svg>`:e;const i=c.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){for(const e in n)f(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&f(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const d=/\s*!important$/;function f(e,t,n){if((0,r.kJ)(n))n.forEach((n=>f(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=g(e,t);d.test(n)?e.setProperty((0,r.rs)(i),n.replace(d,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],m={};function g(e,t){const n=m[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return m[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return m[t]=n}return t}const v="http://www.w3.org/1999/xlink";function y(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(v,t.slice(6,t.length)):e.setAttributeNS(v,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function w(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const i=typeof e[t];if("boolean"===i)return void(e[t]=(0,r.yA)(n));if(null==n&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(l){0}}let b=Date.now,_=!1;if("undefined"!==typeof window){b()>document.createEvent("Event").timeStamp&&(b=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);_=!!(e&&Number(e[1])<=53)}let I=0;const T=Promise.resolve(),E=()=>{I=0},k=()=>I||(T.then(E),I=b());function S(e,t,n,r){e.addEventListener(t,n,r)}function x(e,t,n,r){e.removeEventListener(t,n,r)}function C(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=R(t);if(r){const o=s[t]=N(r,i);S(e,n,o,a)}else o&&(x(e,n,o,a),s[t]=void 0)}}const A=/(?:Once|Passive|Capture)$/;function R(e){let t;if(A.test(e)){let n;t={};while(n=e.match(A))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,r.rs)(e.slice(2)),t]}function N(e,t){const n=e=>{const r=e.timeStamp||b();(_||r>=n.attached-1)&&(0,i.$d)(O(e,n.value),t,5,[e])};return n.value=e,n.attached=k(),n}function O(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const P=/^on[a-z]/,L=(e,t,n,i,s=!1,o,a,c,l)=>{"class"===t?u(e,i,s):"style"===t?h(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||C(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):D(e,t,i,s))?w(e,t,i,o,a,c,l):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),y(e,t,i,s))};function D(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&P.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!P.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const F="transition",M="animation",q=(e,{slots:t})=>(0,i.h)(i.P$,$(e),t);q.displayName="Transition";const U={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},V=q.props=(0,r.l7)({},i.P$.props,U),j=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},B=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function $(e){const t={};for(const r in e)r in U||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=z(s),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:w,onEnterCancelled:b,onLeave:_,onLeaveCancelled:I,onBeforeAppear:T=y,onAppear:E=w,onAppearCancelled:k=b}=t,S=(e,t,n)=>{W(e,t?h:c),W(e,t?u:a),n&&n()},x=(e,t)=>{W(e,p),W(e,f),t&&t()},C=e=>(t,n)=>{const r=e?E:w,s=()=>S(t,e,n);j(r,[t,s]),G((()=>{W(t,e?l:o),K(t,e?h:c),B(r)||J(t,i,g,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){j(y,[e]),K(e,o),K(e,a)},onBeforeAppear(e){j(T,[e]),K(e,l),K(e,u)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){const n=()=>x(e,t);K(e,d),ee(),K(e,f),G((()=>{W(e,d),K(e,p),B(_)||J(e,i,v,n)})),j(_,[e,n])},onEnterCancelled(e){S(e,!1),j(b,[e])},onAppearCancelled(e){S(e,!0),j(k,[e])},onLeaveCancelled(e){x(e),j(I,[e])}})}function z(e){if(null==e)return null;if((0,r.Kn)(e))return[H(e.enter),H(e.leave)];{const t=H(e);return[t,t]}}function H(e){const t=(0,r.He)(e);return t}function K(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function W(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function G(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let Y=0;function J(e,t,n,r){const i=e._endId=++Y,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Q(e,t);if(!o)return r();const l=o+"end";let u=0;const h=()=>{e.removeEventListener(l,d),s()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),e.addEventListener(l,d)}function Q(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(F+"Delay"),s=r(F+"Duration"),o=Z(i,s),a=r(M+"Delay"),c=r(M+"Duration"),l=Z(a,c);let u=null,h=0,d=0;t===F?o>0&&(u=F,h=o,d=s.length):t===M?l>0&&(u=M,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?F:M:null,d=u?u===F?s.length:c.length:0);const f=u===F&&/\b(transform|all)(,|$)/.test(n[F+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function Z(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>X(t)+X(e[n]))))}function X(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ee(){return document.body.offsetHeight}const te=new WeakMap,ne=new WeakMap,re={name:"TransitionGroup",props:(0,r.l7)({},V,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!ce(o[0].el,n.vnode.el,t))return;o.forEach(se),o.forEach(oe);const r=o.filter(ae);ee(),r.forEach((e=>{const n=e.el,r=n.style;K(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,W(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.IU)(e),l=$(c);let u=c.tag||i.HY;o=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,l,r,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,i.nK)(t,(0,i.U2)(t,l,r,n)),te.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(u,null,a)}}},ie=re;function se(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function oe(e){ne.set(e,e.el.getBoundingClientRect())}function ae(e){const t=te.get(e),n=ne.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function ce(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=Q(r);return i.removeChild(r),s}const le=(0,r.l7)({patchProp:L},l);let ue;function he(){return ue||(ue=(0,i.Us)(le))}const de=(...e)=>{const t=he().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=fe(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function fe(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},2323:(e,t,n)=>{"use strict";function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{Z6:()=>b,kT:()=>w,NO:()=>I,dG:()=>_,_A:()=>W,kC:()=>J,Nj:()=>ee,l7:()=>S,E9:()=>re,aU:()=>Z,RI:()=>A,rs:()=>Y,yA:()=>c,ir:()=>X,kJ:()=>R,mf:()=>L,e1:()=>s,S0:()=>$,_N:()=>N,tR:()=>k,Kn:()=>M,F7:()=>E,PO:()=>B,tI:()=>q,Gg:()=>z,DM:()=>O,Pq:()=>a,HD:()=>D,yk:()=>F,WV:()=>m,hq:()=>g,fY:()=>r,C_:()=>f,j5:()=>l,Od:()=>x,zw:()=>v,hR:()=>Q,He:()=>te,W7:()=>j});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function l(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=D(r)?d(r):l(r);if(i)for(const e in i)t[e]=i[e]}return t}return D(e)||M(e)?e:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(u).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function f(e){let t="";if(D(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(M(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=P(e),r=P(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=R(e),r=R(t),n||r)return!(!n||!r)&&p(e,t);if(n=M(e),r=M(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function g(e,t){return e.findIndex((e=>m(e,t)))}const v=e=>null==e?"":R(e)||M(e)&&(e.toString===U||!L(e.toString))?JSON.stringify(e,y,2):String(e),y=(e,t)=>t&&t.__v_isRef?y(e,t.value):N(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:O(t)?{[`Set(${t.size})`]:[...t.values()]}:!M(t)||R(t)||B(t)?t:String(t),w={},b=[],_=()=>{},I=()=>!1,T=/^on[^a-z]/,E=e=>T.test(e),k=e=>e.startsWith("onUpdate:"),S=Object.assign,x=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},C=Object.prototype.hasOwnProperty,A=(e,t)=>C.call(e,t),R=Array.isArray,N=e=>"[object Map]"===V(e),O=e=>"[object Set]"===V(e),P=e=>e instanceof Date,L=e=>"function"===typeof e,D=e=>"string"===typeof e,F=e=>"symbol"===typeof e,M=e=>null!==e&&"object"===typeof e,q=e=>M(e)&&L(e.then)&&L(e.catch),U=Object.prototype.toString,V=e=>U.call(e),j=e=>V(e).slice(8,-1),B=e=>"[object Object]"===V(e),$=e=>D(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,z=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),H=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},K=/-(\w)/g,W=H((e=>e.replace(K,((e,t)=>t?t.toUpperCase():"")))),G=/\B([A-Z])/g,Y=H((e=>e.replace(G,"-$1").toLowerCase())),J=H((e=>e.charAt(0).toUpperCase()+e.slice(1))),Q=H((e=>e?`on${J(e)}`:"")),Z=(e,t)=>!Object.is(e,t),X=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},52:(e,t,n)=>{e.exports=n(7974)},8699:(e,t,n)=>{"use strict";var r=n(7210),i=n(4923),s=n(3634),o=n(7696),a=n(9835),c=n(3423),l=n(8365),u=n(701);e.exports=function(e){return new Promise((function(t,n){var h=e.data,d=e.headers,f=e.responseType;r.isFormData(h)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(m+":"+g)}var v=a(e.baseURL,e.url);function y(){if(p){var r="getAllResponseHeaders"in p?c(p.getAllResponseHeaders()):null,s=f&&"text"!==f&&"json"!==f?p.response:p.responseText,o={data:s,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};i(t,n,o),p=null}}if(p.open(e.method.toUpperCase(),o(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,"onloadend"in p?p.onloadend=y:p.onreadystatechange=function(){p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))&&setTimeout(y)},p.onabort=function(){p&&(n(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(u(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var w=(e.withCredentials||l(v))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;w&&(d[e.xsrfHeaderName]=w)}"setRequestHeader"in p&&r.forEach(d,(function(e,t){"undefined"===typeof h&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),f&&"json"!==f&&(p.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),n(e),p=null)})),h||(h=null),p.send(h)}))}},7974:(e,t,n)=>{"use strict";var r=n(7210),i=n(2938),s=n(8799),o=n(4495),a=n(7079);function c(e){var t=new s(e),n=i(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n}var l=c(a);l.Axios=s,l.create=function(e){return c(o(l.defaults,e))},l.Cancel=n(6678),l.CancelToken=n(8858),l.isCancel=n(6029),l.all=function(e){return Promise.all(e)},l.spread=n(5178),l.isAxiosError=n(5615),e.exports=l,e.exports["default"]=l},6678:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},8858:(e,t,n)=>{"use strict";var r=n(6678);function i(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e,t=new i((function(t){e=t}));return{token:t,cancel:e}},e.exports=i},6029:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},8799:(e,t,n)=>{"use strict";var r=n(7210),i=n(7696),s=n(2591),o=n(516),a=n(4495),c=n(3170),l=c.validators;function u(e){this.defaults=e,this.interceptors={request:new s,response:new s}}u.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=a(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&c.assertOptions(t,{silentJSONParsing:l.transitional(l.boolean,"1.0.0"),forcedJSONParsing:l.transitional(l.boolean,"1.0.0"),clarifyTimeoutError:l.transitional(l.boolean,"1.0.0")},!1);var n=[],r=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var i,s=[];if(this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)})),!r){var u=[o,void 0];Array.prototype.unshift.apply(u,n),u=u.concat(s),i=Promise.resolve(e);while(u.length)i=i.then(u.shift(),u.shift());return i}var h=e;while(n.length){var d=n.shift(),f=n.shift();try{h=d(h)}catch(p){f(p);break}}try{i=o(h)}catch(p){return Promise.reject(p)}while(s.length)i=i.then(s.shift(),s.shift());return i},u.prototype.getUri=function(e){return e=a(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=u},2591:(e,t,n)=>{"use strict";var r=n(7210);function i(){this.handlers=[]}i.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},9835:(e,t,n)=>{"use strict";var r=n(8380),i=n(6092);e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},701:(e,t,n)=>{"use strict";var r=n(654);e.exports=function(e,t,n,i,s){var o=new Error(e);return r(o,t,n,i,s)}},516:(e,t,n)=>{"use strict";var r=n(7210),i=n(4330),s=n(6029),o=n(7079);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){a(e),e.headers=e.headers||{},e.data=i.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||o.adapter;return t(e).then((function(t){return a(e),t.data=i.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(a(e),t&&t.response&&(t.response.data=i.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},654:e=>{"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},4495:(e,t,n)=>{"use strict";var r=n(7210);e.exports=function(e,t){t=t||{};var n={},i=["url","method","data"],s=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function l(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=c(void 0,e[i])):n[i]=c(e[i],t[i])}r.forEach(i,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(s,l),r.forEach(o,(function(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=c(void 0,e[i])):n[i]=c(void 0,t[i])})),r.forEach(a,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var u=i.concat(s).concat(o).concat(a),h=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return r.forEach(h,l),n}},4923:(e,t,n)=>{"use strict";var r=n(701);e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},4330:(e,t,n)=>{"use strict";var r=n(7210),i=n(7079);e.exports=function(e,t,n){var s=this||i;return r.forEach(n,(function(n){e=n.call(s,e,t)})),e}},7079:(e,t,n)=>{"use strict";var r=n(7210),i=n(4733),s=n(654),o={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function c(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(e=n(8699)),e}function l(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(i){if("SyntaxError"!==i.name)throw i}return(n||JSON.stringify)(e)}var u={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:c(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(a(t,"application/json"),l(e)):e}],transformResponse:[function(e){var t=this.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(o){if("SyntaxError"===a.name)throw s(a,this,"E_JSON_PARSE");throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){u.headers[e]=r.merge(o)})),e.exports=u},2938:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},7696:(e,t,n)=>{"use strict";var r=n(7210);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var o=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(i(t)+"="+i(e))})))})),s=o.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},6092:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},3634:(e,t,n)=>{"use strict";var r=n(7210);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,i,s,o){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},8380:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},5615:e=>{"use strict";e.exports=function(e){return"object"===typeof e&&!0===e.isAxiosError}},8365:(e,t,n)=>{"use strict";var r=n(7210);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},4733:(e,t,n)=>{"use strict";var r=n(7210);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},3423:(e,t,n)=>{"use strict";var r=n(7210),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,o={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(o[t]&&i.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o}},5178:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},3170:(e,t,n)=>{"use strict";var r=n(8593),i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var s={},o=r.version.split(".");function a(e,t){for(var n=t?t.split("."):o,r=e.split("."),i=0;i<3;i++){if(n[i]>r[i])return!0;if(n[i]<r[i])return!1}return!1}function c(e,t,n){if("object"!==typeof e)throw new TypeError("options must be an object");var r=Object.keys(e),i=r.length;while(i-- >0){var s=r[i],o=t[s];if(o){var a=e[s],c=void 0===a||o(a,s,e);if(!0!==c)throw new TypeError("option "+s+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+s)}}i.transitional=function(e,t,n){var i=t&&a(t);function o(e,t){return"[Axios v"+r.version+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,a){if(!1===e)throw new Error(o(r," has been removed in "+t));return i&&!s[r]&&(s[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,a)}},e.exports={isOlderVersion:a,assertOptions:c,validators:i}},7210:(e,t,n)=>{"use strict";var r=n(2938),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function o(e){return"undefined"===typeof e}function a(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===i.call(e)}function l(e){return"undefined"!==typeof FormData&&e instanceof FormData}function u(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function h(e){return"string"===typeof e}function d(e){return"number"===typeof e}function f(e){return null!==e&&"object"===typeof e}function p(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function m(e){return"[object Date]"===i.call(e)}function g(e){return"[object File]"===i.call(e)}function v(e){return"[object Blob]"===i.call(e)}function y(e){return"[object Function]"===i.call(e)}function w(e){return f(e)&&y(e.pipe)}function b(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function _(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function I(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function T(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function E(){var e={};function t(t,n){p(e[n])&&p(t)?e[n]=E(e[n],t):p(t)?e[n]=E({},t):s(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)T(arguments[n],t);return e}function k(e,t,n){return T(t,(function(t,i){e[i]=n&&"function"===typeof t?r(t,n):t})),e}function S(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:s,isArrayBuffer:c,isBuffer:a,isFormData:l,isArrayBufferView:u,isString:h,isNumber:d,isObject:f,isPlainObject:p,isUndefined:o,isDate:m,isFile:g,isBlob:v,isFunction:y,isStream:w,isURLSearchParams:b,isStandardBrowserEnv:I,forEach:T,merge:E,extend:k,trim:_,stripBOM:S}},8240:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(3673),i=n(1959),s=n(8880),o=n(4554),a=n(9754),c=n(6489),l=(n(6245),n(9992)),u=n(2417),h=n(7277);const d={none:0,xs:4,sm:8,md:16,lg:24,xl:32},f={xs:8,sm:10,md:14,lg:20,xl:24},p=["button","submit","reset"],m=/[^\s]\/[^\s]/,g={...u.LU,...h.$,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...l.jO.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function v(e){const t=(0,u.ZP)(e,f),n=(0,l.ZP)(e),{hasRouterLink:i,hasLink:s,linkTag:o,linkProps:a,navigateToRouterLink:c}=(0,h.Z)("button"),g=(0,r.Fl)((()=>{const n=!1===e.fab&&!1===e.fabMini?t.value:{};return void 0!==e.padding?Object.assign({},n,{padding:e.padding.split(/\s+/).map((e=>e in d?d[e]+"px":e)).join(" "),minWidth:"0",minHeight:"0"}):n})),v=(0,r.Fl)((()=>!0===e.rounded||!0===e.fab||!0===e.fabMini)),y=(0,r.Fl)((()=>!0!==e.disable&&!0!==e.loading)),w=(0,r.Fl)((()=>!0===y.value?e.tabindex||0:-1)),b=(0,r.Fl)((()=>!0===e.flat?"flat":!0===e.outline?"outline":!0===e.push?"push":!0===e.unelevated?"unelevated":"standard")),_=(0,r.Fl)((()=>{const t={tabindex:w.value};return!0===s.value?Object.assign(t,a.value):!0===p.includes(e.type)&&(t.type=e.type),"a"===o.value?(!0===e.disable?t["aria-disabled"]="true":void 0===t.href&&(t.role="button"),!0!==i.value&&!0===m.test(e.type)&&(t.type=e.type)):!0===e.disable&&(t.disabled="",t["aria-disabled"]="true"),!0===e.loading&&void 0!==e.percentage&&Object.assign(t,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),t})),I=(0,r.Fl)((()=>{let t;return void 0!==e.color?t=!0===e.flat||!0===e.outline?`text-${e.textColor||e.color}`:`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(t=`text-${e.textColor}`),`q-btn--${b.value} q-btn--`+(!0===e.round?"round":"rectangle"+(!0===v.value?" q-btn--rounded":""))+(void 0!==t?" "+t:"")+(!0===y.value?" q-btn--actionable q-focusable q-hoverable":!0===e.disable?" disabled":"")+(!0===e.fab?" q-btn--fab":!0===e.fabMini?" q-btn--fab-mini":"")+(!0===e.noCaps?" q-btn--no-uppercase":"")+(!0===e.dense?" q-btn--dense":"")+(!0===e.stretch?" no-border-radius self-stretch":"")+(!0===e.glossy?" glossy":"")})),T=(0,r.Fl)((()=>n.value+(!0===e.stack?" column":" row")+(!0===e.noWrap?" no-wrap text-no-wrap":"")+(!0===e.loading?" q-btn__content--hidden":"")));return{classes:I,style:g,innerClasses:T,attributes:_,hasRouterLink:i,hasLink:s,linkTag:o,navigateToRouterLink:c,isActionable:y}}var y=n(908),w=n(7657),b=n(4716),_=n(1436);const{passiveCapture:I}=b.rU;let T=null,E=null,k=null;const S=(0,y.L)({name:"QBtn",props:{...g,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:l}=(0,r.FN)(),{classes:u,style:h,innerClasses:d,attributes:f,hasRouterLink:p,hasLink:m,linkTag:g,navigateToRouterLink:y,isActionable:S}=v(e),x=(0,i.iH)(null),C=(0,i.iH)(null);let A,R,N=null;const O=(0,r.Fl)((()=>void 0!==e.label&&null!==e.label&&""!==e.label)),P=(0,r.Fl)((()=>!0!==e.disable&&!1!==e.ripple&&{keyCodes:!0===m.value?[13,32]:[13],...!0===e.ripple?{}:e.ripple})),L=(0,r.Fl)((()=>({center:e.round}))),D=(0,r.Fl)((()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}})),F=(0,r.Fl)((()=>!0===e.loading?{onMousedown:z,onTouchstartPassive:z,onClick:z,onKeydown:z,onKeyup:z}:!0===S.value?{onClick:q,onKeydown:U,onMousedown:j,onTouchstartPassive:V}:{onClick:b.NS})),M=(0,r.Fl)((()=>({ref:x,class:"q-btn q-btn-item non-selectable no-outline "+u.value,style:h.value,...f.value,...F.value})));function q(t){if(null!==x.value){if(void 0!==t){if(!0===t.defaultPrevented)return;const n=document.activeElement;if("submit"===e.type&&n!==document.body&&!1===x.value.contains(n)&&!1===n.contains(x.value)){x.value.focus();const e=()=>{document.removeEventListener("keydown",b.NS,!0),document.removeEventListener("keyup",e,I),null!==x.value&&x.value.removeEventListener("blur",e,I)};document.addEventListener("keydown",b.NS,!0),document.addEventListener("keyup",e,I),x.value.addEventListener("blur",e,I)}}if(!0===p.value){const e=()=>{t.__qNavigate=!0,y(t)};n("click",t,e),!0!==t.defaultPrevented&&e()}else n("click",t)}}function U(e){null!==x.value&&(!0===(0,_.So)(e,[13,32])&&((0,b.NS)(e),E!==x.value&&(null!==E&&$(),x.value.focus(),E=x.value,x.value.classList.add("q-btn--active"),document.addEventListener("keyup",B,!0),x.value.addEventListener("blur",B,I))),n("keydown",e))}function V(e){null!==x.value&&(T!==x.value&&(null!==T&&$(),T=x.value,N=e.target,N.addEventListener("touchcancel",B,I),N.addEventListener("touchend",B,I)),A=!0,clearTimeout(R),R=setTimeout((()=>{A=!1}),200),n("touchstart",e))}function j(e){null!==x.value&&(k!==x.value&&(null!==k&&$(),k=x.value,x.value.classList.add("q-btn--active"),document.addEventListener("mouseup",B,I)),e.qSkipRipple=!0===A,n("mousedown",e))}function B(e){if(null!==x.value&&(void 0===e||"blur"!==e.type||document.activeElement!==x.value)){if(void 0!==e&&"keyup"===e.type){if(E===x.value&&!0===(0,_.So)(e,[13,32])){const t=new MouseEvent("click",e);t.qKeyEvent=!0,!0===e.defaultPrevented&&(0,b.X$)(t),!0===e.cancelBubble&&(0,b.sT)(t),x.value.dispatchEvent(t),(0,b.NS)(e),e.qKeyEvent=!0}n("keyup",e)}$()}}function $(e){const t=C.value;!0===e||T!==x.value&&k!==x.value||null===t||t===document.activeElement||(t.setAttribute("tabindex",-1),t.focus()),T===x.value&&(null!==N&&(N.removeEventListener("touchcancel",B,I),N.removeEventListener("touchend",B,I)),T=N=null),k===x.value&&(document.removeEventListener("mouseup",B,I),k=null),E===x.value&&(document.removeEventListener("keyup",B,!0),null!==x.value&&x.value.removeEventListener("blur",B,I),E=null),null!==x.value&&x.value.classList.remove("q-btn--active")}function z(e){(0,b.NS)(e),e.qSkipRipple=!0}return(0,r.Jd)((()=>{$(!0)})),Object.assign(l,{click:q}),()=>{let n=[];void 0!==e.icon&&n.push((0,r.h)(o.Z,{name:e.icon,left:!1===e.stack&&!0===O.value,role:"img","aria-hidden":"true"})),!0===O.value&&n.push((0,r.h)("span",{class:"block"},[e.label])),n=(0,w.vs)(t.default,n),void 0!==e.iconRight&&!1===e.round&&n.push((0,r.h)(o.Z,{name:e.iconRight,right:!1===e.stack&&!0===O.value,role:"img","aria-hidden":"true"}));const i=[(0,r.h)("span",{class:"q-focus-helper",ref:C})];return!0===e.loading&&void 0!==e.percentage&&i.push((0,r.h)("span",{class:"q-btn__progress absolute-full overflow-hidden"},[(0,r.h)("span",{class:"q-btn__progress-indicator fit block"+(!0===e.darkPercentage?" q-btn__progress--dark":""),style:D.value})])),i.push((0,r.h)("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+d.value},n)),null!==e.loading&&i.push((0,r.h)(s.uT,{name:"q-transition--fade"},(()=>!0===e.loading?[(0,r.h)("span",{key:"loading",class:"absolute-full flex flex-center"},void 0!==t.loading?t.loading():[(0,r.h)(a.Z)])]:null))),(0,r.wy)((0,r.h)(g.value,M.value,i),[[c.Z,P.value,void 0,L.value]])}}})},151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});n(6245);var r=n(3673),i=n(2236),s=n(908),o=n(7657);const a=(0,s.L)({name:"QCard",props:{...i.S,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const n=(0,r.FN)(),s=(0,i.Z)(e,n.proxy.$q),a=(0,r.Fl)((()=>"q-card"+(!0===s.value?" q-card--dark q-dark":"")+(!0===e.bordered?" q-card--bordered":"")+(!0===e.square?" q-card--square no-border-radius":"")+(!0===e.flat?" q-card--flat no-shadow":"")));return()=>(0,r.h)(e.tag,{class:a.value},(0,o.KR)(t.default))}})},9367:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3673),i=n(9992),s=n(908),o=n(7657);const a=(0,s.L)({name:"QCardActions",props:{...i.jO,vertical:Boolean},setup(e,{slots:t}){const n=(0,i.ZP)(e),s=(0,r.Fl)((()=>`q-card__actions ${n.value} q-card__actions--`+(!0===e.vertical?"vert column":"horiz row")));return()=>(0,r.h)("div",{class:s.value},(0,o.KR)(t.default))}})},5589:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673),i=n(908),s=n(7657);const o=(0,i.L)({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-card__section q-card__section--"+(!0===e.horizontal?"horiz row no-wrap":"vert")));return()=>(0,r.h)(e.tag,{class:n.value},(0,s.KR)(t.default))}})},5877:(e,t,n)=>{"use strict";n.d(t,{Z:()=>M});n(71);var r=n(3673),i=n(1959),s=n(8880),o=n(69),a=n(4955),c=n(416),l=n(3628);const u={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};n(4716);var h=n(230),d=n(8144),f=n(4312);function p(e){e=e.parent;while(void 0!==e&&null!==e){if("QGlobalDialog"===e.type.name)return!0;if("QDialog"===e.type.name||"QMenu"===e.type.name)return!1;e=e.parent}return!1}function m(e,t,n,s){const o=(0,i.iH)(!1);let a=null;const c={},l=!0===s&&p(e);function u(t){!0!==t?!1===o.value&&(!1===l&&null===a&&(a=(0,d.q_)()),o.value=!0,f.wN.push(e.proxy),(0,h.YX)(c)):(0,h.xF)(c)}function m(){(0,h.xF)(c),o.value=!1;const t=f.wN.indexOf(e.proxy);t>-1&&f.wN.splice(t,1),null!==a&&((0,d.pB)(a),a=null)}return(0,r.Ah)(m),Object.assign(e.proxy,{__qPortalInnerRef:t}),{showPortal:u,hidePortal:m,portalIsActive:o,renderPortal:()=>!0===l?n():!0===o.value?[(0,r.h)(r.lR,{to:a},n())]:void 0}}var g=n(405),v=n(908),y=n(2012),w=n(7657),b=n(4688),_=n(1436);const I=[];let T;function E(e){T=27===e.keyCode}function k(){!0===T&&(T=!1)}function S(e){!0===T&&(T=!1,!0===(0,_.So)(e,27)&&I[I.length-1](e))}function x(e){window[e]("keydown",E),window[e]("blur",k),window[e]("keyup",S),T=!1}function C(e){!0===b.Lp.is.desktop&&(I.push(e),1===I.length&&x("addEventListener"))}function A(e){const t=I.indexOf(e);t>-1&&(I.splice(t,1),0===I.length&&x("removeEventListener"))}const R=[];function N(e){R[R.length-1](e)}function O(e){!0===b.Lp.is.desktop&&(R.push(e),1===R.length&&document.body.addEventListener("focusin",N))}function P(e){const t=R.indexOf(e);t>-1&&(R.splice(t,1),0===R.length&&document.body.removeEventListener("focusin",N))}let L=0;const D={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},F={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},M=(0,v.L)({name:"QDialog",inheritAttrs:!1,props:{...l.vr,...u,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>"standard"===e||["top","bottom","left","right"].includes(e)}},emits:[...l.gH,"shake","click","escape-key"],setup(e,{slots:t,emit:n,attrs:u}){const d=(0,r.FN)(),f=(0,i.iH)(null),p=(0,i.iH)(!1),v=(0,i.iH)(!1),b=(0,i.iH)(!1);let _,I,T,E=null;const k=(0,r.Fl)((()=>!0!==e.persistent&&!0!==e.noRouteDismiss&&!0!==e.seamless)),{preventBodyScroll:S}=(0,g.Z)(),{registerTimeout:x,removeTimeout:R}=(0,a.Z)(),{registerTick:N,removeTick:M}=(0,c.Z)(),{showPortal:q,hidePortal:U,portalIsActive:V,renderPortal:j}=m(d,f,le,!0),{hide:B}=(0,l.ZP)({showing:p,hideOnRouteChange:k,handleShow:X,handleHide:ee,processOnMount:!0}),{addToHistory:$,removeFromHistory:z}=(0,o.Z)(p,B,k),H=(0,r.Fl)((()=>"q-dialog__inner flex no-pointer-events q-dialog__inner--"+(!0===e.maximized?"maximized":"minimized")+` q-dialog__inner--${e.position} ${D[e.position]}`+(!0===b.value?" q-dialog__inner--animating":"")+(!0===e.fullWidth?" q-dialog__inner--fullwidth":"")+(!0===e.fullHeight?" q-dialog__inner--fullheight":"")+(!0===e.square?" q-dialog__inner--square":""))),K=(0,r.Fl)((()=>"q-transition--"+(void 0===e.transitionShow?F[e.position][0]:e.transitionShow))),W=(0,r.Fl)((()=>"q-transition--"+(void 0===e.transitionHide?F[e.position][1]:e.transitionHide))),G=(0,r.Fl)((()=>!0===v.value?W.value:K.value)),Y=(0,r.Fl)((()=>`--q-transition-duration: ${e.transitionDuration}ms`)),J=(0,r.Fl)((()=>!0===p.value&&!0!==e.seamless)),Q=(0,r.Fl)((()=>!0===e.autoClose?{onClick:oe}:{})),Z=(0,r.Fl)((()=>["q-dialog fullscreen no-pointer-events q-dialog--"+(!0===J.value?"modal":"seamless"),u.class]));function X(t){R(),M(),$(),E=!1===e.noRefocus&&null!==document.activeElement?document.activeElement:null,se(e.maximized),q(),b.value=!0,!0!==e.noFocus&&(null!==document.activeElement&&document.activeElement.blur(),N(te)),x((()=>{if(!0===d.proxy.$q.platform.is.ios){if(!0!==e.seamless&&document.activeElement){const{top:e,bottom:t}=document.activeElement.getBoundingClientRect(),{innerHeight:n}=window,r=void 0!==window.visualViewport?window.visualViewport.height:n;e>0&&t>r/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-r,t>=n?1/0:Math.ceil(document.scrollingElement.scrollTop+t-r/2))),document.activeElement.scrollIntoView()}T=!0,f.value.click(),T=!1}q(!0),b.value=!1,n("show",t)}),e.transitionDuration)}function ee(t){R(),M(),z(),ie(!0),b.value=!0,null!==E&&(E.focus(),E=null),x((()=>{U(),b.value=!1,n("hide",t)}),e.transitionDuration)}function te(){(0,h.jd)((()=>{let e=f.value;null!==e&&!0!==e.contains(document.activeElement)&&(e=e.querySelector("[autofocus], [data-autofocus]")||e,e.focus({preventScroll:!0}))}))}function ne(){te(),n("shake");const e=f.value;null!==e&&(e.classList.remove("q-animate--scale"),e.classList.add("q-animate--scale"),clearTimeout(_),_=setTimeout((()=>{null!==f.value&&(e.classList.remove("q-animate--scale"),te())}),170))}function re(){!0!==e.seamless&&(!0===e.persistent||!0===e.noEscDismiss?!0!==e.maximized&&!0!==e.noShake&&ne():(n("escape-key"),B()))}function ie(t){clearTimeout(_),!0!==t&&!0!==p.value||(se(!1),!0!==e.seamless&&(S(!1),P(ce),A(re))),!0!==t&&(E=null)}function se(e){!0===e?!0!==I&&(L<1&&document.body.classList.add("q-body--dialog"),L++,I=!0):!0===I&&(L<2&&document.body.classList.remove("q-body--dialog"),L--,I=!1)}function oe(e){!0!==T&&(B(e),n("click",e))}function ae(t){!0!==e.persistent&&!0!==e.noBackdropDismiss?B(t):!0!==e.noShake&&ne()}function ce(e){!0===p.value&&!0===V.value&&!0!==(0,y.mY)(f.value,e.target)&&te()}function le(){return(0,r.h)("div",{...u,class:Z.value},[(0,r.h)(s.uT,{name:"q-transition--fade",appear:!0},(()=>!0===J.value?(0,r.h)("div",{class:"q-dialog__backdrop fixed-full",style:Y.value,"aria-hidden":"true",onMousedown:ae}):null)),(0,r.h)(s.uT,{name:G.value,appear:!0},(()=>!0===p.value?(0,r.h)("div",{ref:f,class:H.value,style:Y.value,tabindex:-1,...Q.value},(0,w.KR)(t.default)):null))])}return(0,r.YP)(p,(e=>{(0,r.Y3)((()=>{v.value=e}))})),(0,r.YP)((()=>e.maximized),(e=>{!0===p.value&&se(e)})),(0,r.YP)(J,(e=>{S(e),!0===e?(O(ce),C(re)):(P(ce),A(re))})),Object.assign(d.proxy,{focus:te,shake:ne,__updateRefocusTarget(e){E=e||null}}),(0,r.Jd)(ie),j}})},6873:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});n(71);var r=n(3673),i=n(1959),s=n(69),o=n(3628),a=n(405),c=n(4955),l=n(2236),u=n(4688),h=n(908),d=n(6104),f=n(4716),p=n(9725);function m(e,t,n){const r=(0,f.FK)(e);let i,s=r.left-t.event.x,o=r.top-t.event.y,a=Math.abs(s),c=Math.abs(o);const l=t.direction;!0===l.horizontal&&!0!==l.vertical?i=s<0?"left":"right":!0!==l.horizontal&&!0===l.vertical?i=o<0?"up":"down":!0===l.up&&o<0?(i="up",a>c&&(!0===l.left&&s<0?i="left":!0===l.right&&s>0&&(i="right"))):!0===l.down&&o>0?(i="down",a>c&&(!0===l.left&&s<0?i="left":!0===l.right&&s>0&&(i="right"))):!0===l.left&&s<0?(i="left",a<c&&(!0===l.up&&o<0?i="up":!0===l.down&&o>0&&(i="down"))):!0===l.right&&s>0&&(i="right",a<c&&(!0===l.up&&o<0?i="up":!0===l.down&&o>0&&(i="down")));let u=!1;if(void 0===i&&!1===n){if(!0===t.event.isFirst||void 0===t.event.lastDir)return{};i=t.event.lastDir,u=!0,"left"===i||"right"===i?(r.left-=s,a=0,s=0):(r.top-=o,c=0,o=0)}return{synthetic:u,payload:{evt:e,touch:!0!==t.event.mouse,mouse:!0===t.event.mouse,position:r,direction:i,isFirst:t.event.isFirst,isFinal:!0===n,duration:Date.now()-t.event.time,distance:{x:a,y:c},offset:{x:s,y:o},delta:{x:r.left-t.event.lastX,y:r.top-t.event.lastY}}}}let g=0;const v=(0,h.f)({name:"touch-pan",beforeMount(e,{value:t,modifiers:n}){if(!0!==n.mouse&&!0!==u.Lp.has.touch)return;function r(e,t){!0===n.mouse&&!0===t?(0,f.NS)(e):(!0===n.stop&&(0,f.sT)(e),!0===n.prevent&&(0,f.X$)(e))}const i={uid:"qvtp_"+g++,handler:t,modifiers:n,direction:(0,d.R)(n),noop:f.ZT,mouseStart(e){(0,d.n)(e,i)&&(0,f.du)(e)&&((0,f.M0)(i,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),i.start(e,!0))},touchStart(e){if((0,d.n)(e,i)){const t=e.target;(0,f.M0)(i,"temp",[[t,"touchmove","move","notPassiveCapture"],[t,"touchcancel","end","passiveCapture"],[t,"touchend","end","passiveCapture"]]),i.start(e)}},start(t,r){if(!0===u.Lp.is.firefox&&(0,f.Jf)(e,!0),i.lastEvt=t,!0===r||!0===n.stop){if(!0!==i.direction.all&&(!0!==r||!0!==i.modifiers.mouseAllDir)){const e=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);!0===t.defaultPrevented&&(0,f.X$)(e),!0===t.cancelBubble&&(0,f.sT)(e),Object.assign(e,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:void 0===t.qClonedBy?[i.uid]:t.qClonedBy.concat(i.uid)}),i.initialEvent={target:t.target,event:e}}(0,f.sT)(t)}const{left:s,top:o}=(0,f.FK)(t);i.event={x:s,y:o,time:Date.now(),mouse:!0===r,detected:!1,isFirst:!0,isFinal:!1,lastX:s,lastY:o}},move(e){if(void 0===i.event)return;const t=(0,f.FK)(e),s=t.left-i.event.x,o=t.top-i.event.y;if(0===s&&0===o)return;i.lastEvt=e;const a=!0===i.event.mouse,c=()=>{r(e,a),!0!==n.preserveCursor&&(document.documentElement.style.cursor="grabbing"),!0===a&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),(0,p.M)(),i.styleCleanup=e=>{if(i.styleCleanup=void 0,!0!==n.preserveCursor&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),!0===a){const t=()=>{document.body.classList.remove("no-pointer-events--children")};void 0!==e?setTimeout((()=>{t(),e()}),50):t()}else void 0!==e&&e()}};if(!0===i.event.detected){!0!==i.event.isFirst&&r(e,i.event.mouse);const{payload:t,synthetic:n}=m(e,i,!1);return void(void 0!==t&&(!1===i.handler(t)?i.end(e):(void 0===i.styleCleanup&&!0===i.event.isFirst&&c(),i.event.lastX=t.position.left,i.event.lastY=t.position.top,i.event.lastDir=!0===n?void 0:t.direction,i.event.isFirst=!1)))}if(!0===i.direction.all||!0===a&&!0===i.modifiers.mouseAllDir)return c(),i.event.detected=!0,void i.move(e);const l=Math.abs(s),u=Math.abs(o);l!==u&&(!0===i.direction.horizontal&&l>u||!0===i.direction.vertical&&l<u||!0===i.direction.up&&l<u&&o<0||!0===i.direction.down&&l<u&&o>0||!0===i.direction.left&&l>u&&s<0||!0===i.direction.right&&l>u&&s>0?(i.event.detected=!0,i.move(e)):i.end(e,!0))},end(t,n){if(void 0!==i.event){if((0,f.ul)(i,"temp"),!0===u.Lp.is.firefox&&(0,f.Jf)(e,!1),!0===n)void 0!==i.styleCleanup&&i.styleCleanup(),!0!==i.event.detected&&void 0!==i.initialEvent&&i.initialEvent.target.dispatchEvent(i.initialEvent.event);else if(!0===i.event.detected){!0===i.event.isFirst&&i.handler(m(void 0===t?i.lastEvt:t,i).payload);const{payload:e}=m(void 0===t?i.lastEvt:t,i,!0),n=()=>{i.handler(e)};void 0!==i.styleCleanup?i.styleCleanup(n):n()}i.event=void 0,i.initialEvent=void 0,i.lastEvt=void 0}}};e.__qtouchpan=i,!0===n.mouse&&(0,f.M0)(i,"main",[[e,"mousedown","mouseStart","passive"+(!0===n.mouseCapture?"Capture":"")]]),!0===u.Lp.has.touch&&(0,f.M0)(i,"main",[[e,"touchstart","touchStart","passive"+(!0===n.capture?"Capture":"")],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchpan;void 0!==n&&(t.oldValue!==t.value&&("function"!==typeof value&&n.end(),n.handler=t.value),n.direction=(0,d.R)(t.modifiers))},beforeUnmount(e){const t=e.__qtouchpan;void 0!==t&&(void 0!==t.event&&t.end(),(0,f.ul)(t,"main"),(0,f.ul)(t,"temp"),!0===u.Lp.is.firefox&&(0,f.Jf)(e,!1),void 0!==t.styleCleanup&&t.styleCleanup(),delete e.__qtouchpan)}});var y=n(2130),w=n(7657),b=n(2547);const _=150,I=(0,h.L)({name:"QDrawer",inheritAttrs:!1,props:{...o.vr,...l.S,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...o.gH,"on-layout","mini-state"],setup(e,{slots:t,emit:n,attrs:u}){const h=(0,r.FN)(),{proxy:{$q:d}}=h,f=(0,l.Z)(e,d),{preventBodyScroll:p}=(0,a.Z)(),{registerTimeout:m}=(0,c.Z)(),g=(0,r.f3)(b.YE,(()=>{console.error("QDrawer needs to be child of QLayout")}));let I,T,E;const k=(0,i.iH)("mobile"===e.behavior||"desktop"!==e.behavior&&g.totalWidth.value<=e.breakpoint),S=(0,r.Fl)((()=>!0===e.mini&&!0!==k.value)),x=(0,r.Fl)((()=>!0===S.value?e.miniWidth:e.width)),C=(0,i.iH)(!0===e.showIfAbove&&!1===k.value||!0===e.modelValue),A=(0,r.Fl)((()=>!0!==e.persistent&&(!0===k.value||!0===W.value)));function R(e,t){if(L(),!1!==e&&g.animate(),oe(0),!0===k.value){const e=g.instances[$.value];void 0!==e&&!0===e.belowBreakpoint&&e.hide(!1),ae(1),!0!==g.isContainer.value&&p(!0)}else ae(0),!1!==e&&ce(!1);m((()=>{!1!==e&&ce(!0),!0!==t&&n("show",e)}),_)}function N(e,t){D(),!1!==e&&g.animate(),ae(0),oe(q.value*x.value),de(),!0!==t&&m((()=>{n("hide",e)}),_)}const{show:O,hide:P}=(0,o.ZP)({showing:C,hideOnRouteChange:A,handleShow:R,handleHide:N}),{addToHistory:L,removeFromHistory:D}=(0,s.Z)(C,P,A),F={belowBreakpoint:k,hide:P},M=(0,r.Fl)((()=>"right"===e.side)),q=(0,r.Fl)((()=>(!0===d.lang.rtl?-1:1)*(!0===M.value?1:-1))),U=(0,i.iH)(0),V=(0,i.iH)(!1),j=(0,i.iH)(!1),B=(0,i.iH)(x.value*q.value),$=(0,r.Fl)((()=>!0===M.value?"left":"right")),z=(0,r.Fl)((()=>!0===C.value&&!1===k.value&&!1===e.overlay?!0===e.miniToOverlay?e.miniWidth:x.value:0)),H=(0,r.Fl)((()=>!0===e.overlay||!0===e.miniToOverlay||g.view.value.indexOf(M.value?"R":"L")>-1||!0===d.platform.is.ios&&!0===g.isContainer.value)),K=(0,r.Fl)((()=>!1===e.overlay&&!0===C.value&&!1===k.value)),W=(0,r.Fl)((()=>!0===e.overlay&&!0===C.value&&!1===k.value)),G=(0,r.Fl)((()=>"fullscreen q-drawer__backdrop"+(!1===C.value&&!1===V.value?" hidden":""))),Y=(0,r.Fl)((()=>({backgroundColor:`rgba(0,0,0,${.4*U.value})`}))),J=(0,r.Fl)((()=>!0===M.value?"r"===g.rows.value.top[2]:"l"===g.rows.value.top[0])),Q=(0,r.Fl)((()=>!0===M.value?"r"===g.rows.value.bottom[2]:"l"===g.rows.value.bottom[0])),Z=(0,r.Fl)((()=>{const e={};return!0===g.header.space&&!1===J.value&&(!0===H.value?e.top=`${g.header.offset}px`:!0===g.header.space&&(e.top=`${g.header.size}px`)),!0===g.footer.space&&!1===Q.value&&(!0===H.value?e.bottom=`${g.footer.offset}px`:!0===g.footer.space&&(e.bottom=`${g.footer.size}px`)),e})),X=(0,r.Fl)((()=>{const e={width:`${x.value}px`,transform:`translateX(${B.value}px)`};return!0===k.value?e:Object.assign(e,Z.value)})),ee=(0,r.Fl)((()=>"q-drawer__content fit "+(!0!==g.isContainer.value?"scroll":"overflow-auto"))),te=(0,r.Fl)((()=>`q-drawer q-drawer--${e.side}`+(!0===j.value?" q-drawer--mini-animate":"")+(!0===e.bordered?" q-drawer--bordered":"")+(!0===f.value?" q-drawer--dark q-dark":"")+(!0===V.value?" no-transition":!0===C.value?"":" q-layout--prevent-focus")+(!0===k.value?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":" q-drawer--"+(!0===S.value?"mini":"standard")+(!0===H.value||!0!==K.value?" fixed":"")+(!0===e.overlay||!0===e.miniToOverlay?" q-drawer--on-top":"")+(!0===J.value?" q-drawer--top-padding":"")))),ne=(0,r.Fl)((()=>{const t=!0===d.lang.rtl?e.side:$.value;return[[v,ue,void 0,{[t]:!0,mouse:!0}]]})),re=(0,r.Fl)((()=>{const t=!0===d.lang.rtl?$.value:e.side;return[[v,he,void 0,{[t]:!0,mouse:!0}]]})),ie=(0,r.Fl)((()=>{const t=!0===d.lang.rtl?$.value:e.side;return[[v,he,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]}));function se(){pe(k,"mobile"===e.behavior||"desktop"!==e.behavior&&g.totalWidth.value<=e.breakpoint)}function oe(e){void 0===e?(0,r.Y3)((()=>{e=!0===C.value?0:x.value,oe(q.value*e)})):(!0!==g.isContainer.value||!0!==M.value||!0!==k.value&&Math.abs(e)!==x.value||(e+=q.value*g.scrollbarWidth.value),B.value=e)}function ae(e){U.value=e}function ce(e){const t=!0===e?"remove":!0!==g.isContainer.value?"add":"";""!==t&&document.body.classList[t]("q-body--drawer-toggle")}function le(){clearTimeout(T),h.proxy&&h.proxy.$el&&h.proxy.$el.classList.add("q-drawer--mini-animate"),j.value=!0,T=setTimeout((()=>{j.value=!1,h&&h.proxy&&h.proxy.$el&&h.proxy.$el.classList.remove("q-drawer--mini-animate")}),150)}function ue(e){if(!1!==C.value)return;const t=x.value,n=(0,y.vX)(e.distance.x,0,t);if(!0===e.isFinal){const e=n>=Math.min(75,t);return!0===e?O():(g.animate(),ae(0),oe(q.value*t)),void(V.value=!1)}oe((!0===d.lang.rtl?!0!==M.value:M.value)?Math.max(t-n,0):Math.min(0,n-t)),ae((0,y.vX)(n/t,0,1)),!0===e.isFirst&&(V.value=!0)}function he(t){if(!0!==C.value)return;const n=x.value,r=t.direction===e.side,i=(!0===d.lang.rtl?!0!==r:r)?(0,y.vX)(t.distance.x,0,n):0;if(!0===t.isFinal){const e=Math.abs(i)<Math.min(75,n);return!0===e?(g.animate(),ae(1),oe(0)):P(),void(V.value=!1)}oe(q.value*i),ae((0,y.vX)(1-i/n,0,1)),!0===t.isFirst&&(V.value=!0)}function de(){p(!1),ce(!0)}function fe(t,n){g.update(e.side,t,n)}function pe(e,t){e.value!==t&&(e.value=t)}function me(t,n){fe("size",!0===t?e.miniWidth:n)}return(0,r.YP)(k,(t=>{!0===t?(I=C.value,!0===C.value&&P(!1)):!1===e.overlay&&"mobile"!==e.behavior&&!1!==I&&(!0===C.value?(oe(0),ae(0),de()):O(!1))})),(0,r.YP)((()=>e.side),((e,t)=>{g.instances[t]===F&&(g.instances[t]=void 0,g[t].space=!1,g[t].offset=0),g.instances[e]=F,g[e].size=x.value,g[e].space=K.value,g[e].offset=z.value})),(0,r.YP)(g.totalWidth,(()=>{!0!==g.isContainer.value&&!0===document.qScrollPrevented||se()})),(0,r.YP)((()=>e.behavior+e.breakpoint),se),(0,r.YP)(g.isContainer,(e=>{!0===C.value&&p(!0!==e),!0===e&&se()})),(0,r.YP)(g.scrollbarWidth,(()=>{oe(!0===C.value?0:void 0)})),(0,r.YP)(z,(e=>{fe("offset",e)})),(0,r.YP)(K,(e=>{n("on-layout",e),fe("space",e)})),(0,r.YP)(M,(()=>{oe()})),(0,r.YP)(x,(t=>{oe(),me(e.miniToOverlay,t)})),(0,r.YP)((()=>e.miniToOverlay),(e=>{me(e,x.value)})),(0,r.YP)((()=>d.lang.rtl),(()=>{oe()})),(0,r.YP)((()=>e.mini),(()=>{!0===e.modelValue&&(le(),g.animate())})),(0,r.YP)(S,(e=>{n("mini-state",e)})),g.instances[e.side]=F,me(e.miniToOverlay,x.value),fe("space",K.value),fe("offset",z.value),!0===e.showIfAbove&&!0!==e.modelValue&&!0===C.value&&void 0!==e["onUpdate:modelValue"]&&n("update:modelValue",!0),(0,r.bv)((()=>{n("on-layout",K.value),n("mini-state",S.value),I=!0===e.showIfAbove;const t=()=>{const e=!0===C.value?R:N;e(!1,!0)};0===g.totalWidth.value?E=(0,r.YP)(g.totalWidth,(()=>{E(),E=void 0,!1===C.value&&!0===e.showIfAbove&&!1===k.value?O(!1):t()})):(0,r.Y3)(t)})),(0,r.Jd)((()=>{void 0!==E&&E(),clearTimeout(T),!0===C.value&&de(),g.instances[e.side]===F&&(g.instances[e.side]=void 0,fe("size",0),fe("offset",0),fe("space",!1))})),()=>{const n=[];!0===k.value&&(!1===e.noSwipeOpen&&n.push((0,r.wy)((0,r.h)("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ne.value)),n.push((0,w.Jl)("div",{ref:"backdrop",class:G.value,style:Y.value,"aria-hidden":"true",onClick:P},void 0,"backdrop",!0!==e.noSwipeBackdrop&&!0===C.value,(()=>ie.value))));const i=!0===S.value&&void 0!==t.mini,s=[(0,r.h)("div",{...u,key:""+i,class:[ee.value,u.class]},!0===i?t.mini():(0,w.KR)(t.default))];return!0===e.elevated&&!0===C.value&&s.push((0,r.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push((0,w.Jl)("aside",{ref:"content",class:te.value,style:X.value},s,"contentclose",!0!==e.noSwipeClose&&!0===k.value,(()=>re.value))),(0,r.h)("div",{class:"q-drawer-container"},n)}}})},8689:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});n(71);var r=n(3673),i=n(1959),s=n(908),o=n(4716),a=n(230),c=n(7657),l=n(2547);const u=(0,s.L)({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(e,{slots:t,emit:n}){const s=(0,r.FN)(),u=(0,i.iH)(null);let h=0;const d=[];function f(t){const r=[],i="boolean"===typeof t?t:!0!==e.noErrorFocus,s=++h,o=(e,t)=>{n("validation-"+(!0===e?"success":"error"),t)};for(let n=0;n<d.length;n++){const t=d[n],s=t.validate();if("function"===typeof s.then)r.push(s.then((e=>({valid:e,comp:t})),(e=>({valid:!1,comp:t,err:e}))));else if(!0!==s){if(!1===e.greedy)return o(!1,t),!0===i&&"function"===typeof t.focus&&t.focus(),Promise.resolve(!1);r.push({valid:!1,comp:t})}}return 0===r.length?(o(!0),Promise.resolve(!0)):Promise.all(r).then((e=>{const t=e.filter((e=>!0!==e.valid));if(0===t.length)return s===h&&o(!0),!0;const{valid:n,comp:r,err:a}=t[0];return s===h&&(void 0!==a&&console.error(a),o(!1,r),!0===i&&!0!==n&&"function"===typeof r.focus&&r.focus()),!1}))}function p(){h++,d.forEach((e=>{"function"===typeof e.resetValidation&&e.resetValidation()}))}function m(t){void 0!==t&&(0,o.NS)(t);const r=h+1;f().then((i=>{r===h&&!0===i&&(void 0!==e.onSubmit?n("submit",t):void 0!==t&&void 0!==t.target&&"function"===typeof t.target.submit&&t.target.submit())}))}function g(t){void 0!==t&&(0,o.NS)(t),n("reset"),(0,r.Y3)((()=>{p(),!0===e.autofocus&&!0!==e.noResetFocus&&v()}))}function v(){(0,a.jd)((()=>{if(null===u.value)return;const e=u.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(u.value.querySelectorAll("[tabindex]"),(e=>e.tabIndex>-1));null!==e&&void 0!==e&&e.focus({preventScroll:!0})}))}(0,r.JJ)(l.vh,{bindComponent(e){d.push(e)},unbindComponent(e){const t=d.indexOf(e);t>-1&&d.splice(t,1)}});let y=!1;return(0,r.se)((()=>{y=!0})),(0,r.dl)((()=>{!0===y&&!0===e.autofocus&&v()})),(0,r.bv)((()=>{!0===e.autofocus&&v()})),Object.assign(s.proxy,{validate:f,resetValidation:p,submit:m,reset:g,focus:v,getValidationComponents:()=>d}),()=>(0,r.h)("form",{class:"q-form",ref:u,onSubmit:m,onReset:g},(0,c.KR)(t.default))}})},3812:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(3673),i=n(1959),s=n(5151),o=n(908),a=n(7657),c=n(2547);const l=(0,o.L)({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:n}){const{proxy:{$q:o}}=(0,r.FN)(),l=(0,r.f3)(c.YE,(()=>{console.error("QHeader needs to be child of QLayout")})),u=(0,i.iH)(parseInt(e.heightHint,10)),h=(0,i.iH)(!0),d=(0,r.Fl)((()=>!0===e.reveal||l.view.value.indexOf("H")>-1||o.platform.is.ios&&!0===l.isContainer.value)),f=(0,r.Fl)((()=>{if(!0!==e.modelValue)return 0;if(!0===d.value)return!0===h.value?u.value:0;const t=u.value-l.scroll.value.position;return t>0?t:0})),p=(0,r.Fl)((()=>!0!==e.modelValue||!0===d.value&&!0!==h.value)),m=(0,r.Fl)((()=>!0===e.modelValue&&!0===p.value&&!0===e.reveal)),g=(0,r.Fl)((()=>"q-header q-layout__section--marginal "+(!0===d.value?"fixed":"absolute")+"-top"+(!0===e.bordered?" q-header--bordered":"")+(!0===p.value?" q-header--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus":""))),v=(0,r.Fl)((()=>{const e=l.rows.value.top,t={};return"l"===e[0]&&!0===l.left.space&&(t[!0===o.lang.rtl?"right":"left"]=`${l.left.size}px`),"r"===e[2]&&!0===l.right.space&&(t[!0===o.lang.rtl?"left":"right"]=`${l.right.size}px`),t}));function y(e,t){l.update("header",e,t)}function w(e,t){e.value!==t&&(e.value=t)}function b({height:e}){w(u,e),y("size",e)}function _(e){!0===m.value&&w(h,!0),n("focusin",e)}(0,r.YP)((()=>e.modelValue),(e=>{y("space",e),w(h,!0),l.animate()})),(0,r.YP)(f,(e=>{y("offset",e)})),(0,r.YP)((()=>e.reveal),(t=>{!1===t&&w(h,e.modelValue)})),(0,r.YP)(h,(e=>{l.animate(),n("reveal",e)})),(0,r.YP)(l.scroll,(t=>{!0===e.reveal&&w(h,"up"===t.direction||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)}));const I={};return l.instances.header=I,!0===e.modelValue&&y("size",u.value),y("space",e.modelValue),y("offset",f.value),(0,r.Jd)((()=>{l.instances.header===I&&(l.instances.header=void 0,y("size",0),y("offset",0),y("space",!1))})),()=>{const n=(0,a.Bl)(t.default,[]);return!0===e.elevated&&n.push((0,r.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push((0,r.h)(s.Z,{debounce:0,onResize:b})),(0,r.h)("header",{class:g.value,style:v.value,onFocusin:_},n)}}})},4554:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});n(71);var r=n(3673),i=n(2417),s=n(908),o=n(7657);const a="0 0 24 24",c=e=>e,l=e=>`ionicons ${e}`,u={"icon-":c,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":l,"ion-ios":l,"ion-logo":l,"mdi-":e=>`mdi ${e}`,"iconfont ":c,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},h={o_:"-outlined",r_:"-round",s_:"-sharp"},d=new RegExp("^("+Object.keys(u).join("|")+")"),f=new RegExp("^("+Object.keys(h).join("|")+")"),p=/^[Mm]\s?[-+]?\.?\d/,m=/^img:/,g=/^svguse:/,v=/^ion-/,y=/^[lf]a[srlbdk]? /,w=(0,s.L)({name:"QIcon",props:{...i.LU,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),s=(0,i.ZP)(e),c=(0,r.Fl)((()=>"q-icon"+(!0===e.left?" on-left":"")+(!0===e.right?" on-right":"")+(void 0!==e.color?` text-${e.color}`:""))),l=(0,r.Fl)((()=>{let t,i=e.name;if(!i)return{none:!0};if(null!==n.iconMapFn){const e=n.iconMapFn(i);if(void 0!==e){if(void 0===e.icon)return{cls:e.cls,content:void 0!==e.content?e.content:" "};i=e.icon}}if(!0===p.test(i)){const[e,t=a]=i.split("|");return{svg:!0,viewBox:t,nodes:e.split("&&").map((e=>{const[t,n,i]=e.split("@@");return(0,r.h)("path",{style:n,d:t,transform:i})}))}}if(!0===m.test(i))return{img:!0,src:i.substring(4)};if(!0===g.test(i)){const[e,t=a]=i.split("|");return{svguse:!0,src:e.substring(7),viewBox:t}}let s=" ";const o=i.match(d);if(null!==o)t=u[o[1]](i);else if(!0===y.test(i))t=i;else if(!0===v.test(i))t=`ionicons ion-${!0===n.platform.is.ios?"ios":"md"}${i.substr(3)}`;else{t="notranslate material-icons";const e=i.match(f);null!==e&&(i=i.substring(2),t+=h[e[1]]),s=i}return{cls:t,content:s}}));return()=>{const n={class:c.value,style:s.value,"aria-hidden":"true",role:"presentation"};return!0===l.value.none?(0,r.h)(e.tag,n,(0,o.KR)(t.default)):!0===l.value.img?(0,r.h)("span",n,(0,o.vs)(t.default,[(0,r.h)("img",{src:l.value.src})])):!0===l.value.svg?(0,r.h)("span",n,(0,o.vs)(t.default,[(0,r.h)("svg",{viewBox:l.value.viewBox},l.value.nodes)])):!0===l.value.svguse?(0,r.h)("span",n,(0,o.vs)(t.default,[(0,r.h)("svg",{viewBox:l.value.viewBox},[(0,r.h)("use",{"xlink:href":l.value.src})])])):(void 0!==l.value.cls&&(n.class+=" "+l.value.cls),(0,r.h)(e.tag,n,(0,o.vs)(t.default,[l.value.content])))}}})},7216:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ge});n(71);var r=n(1959),i=n(3673),s=n(8880),o=n(4688),a=n(4554),c=n(9754),l=n(2236),u=n(2547);function h({validate:e,resetValidation:t,requiresQForm:n}){const r=(0,i.f3)(u.vh,!1);if(!1!==r){const{props:n,proxy:s}=(0,i.FN)();Object.assign(s,{validate:e,resetValidation:t}),(0,i.YP)((()=>n.disable),(e=>{!0===e?("function"===typeof t&&t(),r.unbindComponent(s)):r.bindComponent(s)})),!0!==n.disable&&r.bindComponent(s),(0,i.Jd)((()=>{!0!==n.disable&&r.unbindComponent(s)}))}else!0===n&&console.error("Parent QForm not found on useFormChild()!")}const d=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,f=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,p=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,m=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,g=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,v={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),hexColor:e=>d.test(e),hexaColor:e=>f.test(e),hexOrHexaColor:e=>p.test(e),rgbColor:e=>m.test(e),rgbaColor:e=>g.test(e),rgbOrRgbaColor:e=>m.test(e)||g.test(e),hexOrRgbColor:e=>d.test(e)||m.test(e),hexaOrRgbaColor:e=>f.test(e)||g.test(e),anyColor:e=>p.test(e)||m.test(e)||g.test(e)};n(6701),n(5363);n(2100);Object.prototype.toString,Object.prototype.hasOwnProperty;const y={};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach((e=>{y["[object "+e+"]"]=e.toLowerCase()}));n(6245),n(7965),n(6016),n(8240),n(7070);var w=n(2417);const b={...w.LU,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean};var _=n(908),I=n(7657),T=n(2130);const E=50,k=2*E,S=k*Math.PI,x=Math.round(1e3*S)/1e3;(0,_.L)({name:"QCircularProgress",props:{...b,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=(0,i.FN)(),r=(0,w.ZP)(e),s=(0,i.Fl)((()=>{const t=(!0===n.lang.rtl?-1:1)*e.angle;return{transform:e.reverse!==(!0===n.lang.rtl)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-t}deg)`:`rotate3d(0, 0, 1, ${t-90}deg)`}})),o=(0,i.Fl)((()=>!0!==e.instantFeedback&&!0!==e.indeterminate?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:"")),a=(0,i.Fl)((()=>k/(1-e.thickness/2))),c=(0,i.Fl)((()=>`${a.value/2} ${a.value/2} ${a.value} ${a.value}`)),l=(0,i.Fl)((()=>(0,T.vX)(e.value,e.min,e.max))),u=(0,i.Fl)((()=>S*(1-(l.value-e.min)/(e.max-e.min)))),h=(0,i.Fl)((()=>e.thickness/2*a.value));function d({thickness:e,offset:t,color:n,cls:r}){return(0,i.h)("circle",{class:"q-circular-progress__"+r+(void 0!==n?` text-${n}`:""),style:o.value,fill:"transparent",stroke:"currentColor","stroke-width":e,"stroke-dasharray":x,"stroke-dashoffset":t,cx:a.value,cy:a.value,r:E})}return()=>{const n=[];void 0!==e.centerColor&&"transparent"!==e.centerColor&&n.push((0,i.h)("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:E-h.value/2,cx:a.value,cy:a.value})),void 0!==e.trackColor&&"transparent"!==e.trackColor&&n.push(d({cls:"track",thickness:h.value,offset:0,color:e.trackColor})),n.push(d({cls:"circle",thickness:h.value,offset:u.value,color:e.color}));const o=[(0,i.h)("svg",{class:"q-circular-progress__svg",style:s.value,viewBox:c.value,"aria-hidden":"true"},n)];return!0===e.showValue&&o.push((0,i.h)("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},void 0!==t.default?t.default():[(0,i.h)("div",l.value)])),(0,i.h)("div",{class:`q-circular-progress q-circular-progress--${!0===e.indeterminate?"in":""}determinate`,style:r.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":!0===e.indeterminate?void 0:l.value},(0,I.pf)(t.internal,o))}}});n(6801);var C=n(4716);const A={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},R=["rejected"];l.S,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean;const N=[...R,"start","finish","added","removed"];const O=()=>!0;function P(e){const t={};return e.forEach((e=>{t[e]=O})),t}P(N);n(979);n(1845);var L=n(9405);n(2012);n(8400),n(4398),n(6105),n(5123),n(8685),n(2396);let D,F=0;const M=new Array(256);for(let ve=0;ve<256;ve++)M[ve]=(ve+256).toString(16).substr(1);const q=(()=>{const e="undefined"!==typeof crypto?crypto:"undefined"!==typeof window?window.crypto||window.msCrypto:void 0;if(void 0!==e){if(void 0!==e.randomBytes)return e.randomBytes;if(void 0!==e.getRandomValues)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return e=>{const t=[];for(let n=e;n>0;n--)t.push(Math.floor(256*Math.random()));return t}})(),U=4096;function V(){(void 0===D||F+16>U)&&(F=0,D=q(U));const e=Array.prototype.slice.call(D,F,F+=16);return e[6]=15&e[6]|64,e[8]=63&e[8]|128,M[e[0]]+M[e[1]]+M[e[2]]+M[e[3]]+"-"+M[e[4]]+M[e[5]]+"-"+M[e[6]]+M[e[7]]+"-"+M[e[8]]+M[e[9]]+"-"+M[e[10]]+M[e[11]]+M[e[12]]+M[e[13]]+M[e[14]]+M[e[15]]}var j=n(9085);const B=[!0,!1,"ondemand"],$={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>B.includes(e)}};function z(e,t){const{props:n,proxy:s}=(0,i.FN)(),o=(0,r.iH)(!1),a=(0,r.iH)(null),c=(0,r.iH)(null);h({validate:y,resetValidation:g});let l,u=0;const d=(0,i.Fl)((()=>void 0!==n.rules&&null!==n.rules&&n.rules.length>0)),f=(0,i.Fl)((()=>!0!==n.disable&&!0===d.value)),p=(0,i.Fl)((()=>!0===n.error||!0===o.value)),m=(0,i.Fl)((()=>"string"===typeof n.errorMessage&&n.errorMessage.length>0?n.errorMessage:a.value));function g(){u++,t.value=!1,c.value=null,o.value=!1,a.value=null,b.cancel()}function y(e=n.modelValue){if(!0!==f.value)return!0;const r=++u;!0!==t.value&&!0!==n.lazyRules&&(c.value=!0);const i=(e,n)=>{o.value!==e&&(o.value=e);const r=n||void 0;a.value!==r&&(a.value=r),t.value=!1},s=[];for(let t=0;t<n.rules.length;t++){const r=n.rules[t];let o;if("function"===typeof r?o=r(e):"string"===typeof r&&void 0!==v[r]&&(o=v[r](e)),!1===o||"string"===typeof o)return i(!0,o),!1;!0!==o&&void 0!==o&&s.push(o)}return 0===s.length?(i(!1),!0):(t.value=!0,Promise.all(s).then((e=>{if(void 0===e||!1===Array.isArray(e)||0===e.length)return r===u&&i(!1),!0;const t=e.find((e=>!1===e||"string"===typeof e));return r===u&&i(void 0!==t,t),void 0===t}),(e=>(r===u&&(console.error(e),i(!0)),!1))))}function w(e){!0===f.value&&"ondemand"!==n.lazyRules&&(!0===c.value||!0!==n.lazyRules&&!0!==e)&&b()}(0,i.YP)((()=>n.modelValue),(()=>{w()})),(0,i.YP)((()=>n.reactiveRules),(e=>{!0===e?void 0===l&&(l=(0,i.YP)((()=>n.rules),(()=>{w(!0)}))):void 0!==l&&(l(),l=void 0)}),{immediate:!0}),(0,i.YP)(e,(e=>{!0===e?null===c.value&&(c.value=!1):!1===c.value&&(c.value=!0,!0===f.value&&"ondemand"!==n.lazyRules&&!1===t.value&&b())}));const b=(0,L.Z)(y,0);return(0,i.Jd)((()=>{void 0!==l&&l(),b.cancel()})),Object.assign(s,{resetValidation:g,validate:y}),(0,j.g)(s,"hasError",(()=>p.value)),{isDirtyModel:c,hasRules:d,hasError:p,errorMessage:m,validate:y,resetValidation:g}}const H=/^on[A-Z]/;function K(e,t){const n={listeners:(0,r.iH)({}),attributes:(0,r.iH)({})};function s(){const r={},i={};for(const t in e)"class"!==t&&"style"!==t&&!1===H.test(t)&&(r[t]=e[t]);for(const e in t.props)!0===H.test(e)&&(i[e]=t.props[e]);n.attributes.value=r,n.listeners.value=i}return(0,i.Xn)(s),s(),n}var W=n(230);function G(e){return void 0===e?`f_${V()}`:e}function Y(e){return void 0!==e&&null!==e&&(""+e).length>0}const J={...l.S,...$,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Q=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function Z(){const{props:e,attrs:t,proxy:n,vnode:s}=(0,i.FN)(),o=(0,l.Z)(e,n.$q);return{isDark:o,editable:(0,i.Fl)((()=>!0!==e.disable&&!0!==e.readonly)),innerLoading:(0,r.iH)(!1),focused:(0,r.iH)(!1),hasPopupOpen:!1,splitAttrs:K(t,s),targetUid:(0,r.iH)(G(e.for)),rootRef:(0,r.iH)(null),targetRef:(0,r.iH)(null),controlRef:(0,r.iH)(null)}}function X(e){const{props:t,emit:n,slots:r,attrs:l,proxy:u}=(0,i.FN)(),{$q:h}=u;let d;void 0===e.hasValue&&(e.hasValue=(0,i.Fl)((()=>Y(t.modelValue)))),void 0===e.emitValue&&(e.emitValue=e=>{n("update:modelValue",e)}),void 0===e.controlEvents&&(e.controlEvents={onFocusin:O,onFocusout:P}),Object.assign(e,{clearValue:L,onControlFocusin:O,onControlFocusout:P,focus:R}),void 0===e.computedCounter&&(e.computedCounter=(0,i.Fl)((()=>{if(!1!==t.counter){const e="string"===typeof t.modelValue||"number"===typeof t.modelValue?(""+t.modelValue).length:!0===Array.isArray(t.modelValue)?t.modelValue.length:0,n=void 0!==t.maxlength?t.maxlength:t.maxValues;return e+(void 0!==n?" / "+n:"")}})));const{isDirtyModel:f,hasRules:p,hasError:m,errorMessage:g,resetValidation:v}=z(e.focused,e.innerLoading),y=void 0!==e.floatingLabel?(0,i.Fl)((()=>!0===t.stackLabel||!0===e.focused.value||!0===e.floatingLabel.value)):(0,i.Fl)((()=>!0===t.stackLabel||!0===e.focused.value||!0===e.hasValue.value)),w=(0,i.Fl)((()=>!0===t.bottomSlots||void 0!==t.hint||!0===p.value||!0===t.counter||null!==t.error)),b=(0,i.Fl)((()=>!0===t.filled?"filled":!0===t.outlined?"outlined":!0===t.borderless?"borderless":t.standout?"standout":"standard")),_=(0,i.Fl)((()=>`q-field row no-wrap items-start q-field--${b.value}`+(void 0!==e.fieldClass?` ${e.fieldClass.value}`:"")+(!0===t.rounded?" q-field--rounded":"")+(!0===t.square?" q-field--square":"")+(!0===y.value?" q-field--float":"")+(!0===E.value?" q-field--labeled":"")+(!0===t.dense?" q-field--dense":"")+(!0===t.itemAligned?" q-field--item-aligned q-item-type":"")+(!0===e.isDark.value?" q-field--dark":"")+(void 0===e.getControl?" q-field--auto-height":"")+(!0===e.focused.value?" q-field--focused":"")+(!0===m.value?" q-field--error":"")+(!0===m.value||!0===e.focused.value?" q-field--highlighted":"")+(!0!==t.hideBottomSpace&&!0===w.value?" q-field--with-bottom":"")+(!0===t.disable?" q-field--disabled":!0===t.readonly?" q-field--readonly":""))),T=(0,i.Fl)((()=>"q-field__control relative-position row no-wrap"+(void 0!==t.bgColor?` bg-${t.bgColor}`:"")+(!0===m.value?" text-negative":"string"===typeof t.standout&&t.standout.length>0&&!0===e.focused.value?` ${t.standout}`:void 0!==t.color?` text-${t.color}`:""))),E=(0,i.Fl)((()=>!0===t.labelSlot||void 0!==t.label)),k=(0,i.Fl)((()=>"q-field__label no-pointer-events absolute ellipsis"+(void 0!==t.labelColor&&!0!==m.value?` text-${t.labelColor}`:""))),S=(0,i.Fl)((()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:y.value,modelValue:t.modelValue,emitValue:e.emitValue}))),x=(0,i.Fl)((()=>{const n={for:e.targetUid.value};return!0===t.disable?n["aria-disabled"]="true":!0===t.readonly&&(n["aria-readonly"]="true"),n}));function A(){const t=document.activeElement;let n=void 0!==e.targetRef&&e.targetRef.value;!n||null!==t&&t.id===e.targetUid.value||(!0===n.hasAttribute("tabindex")||(n=n.querySelector("[tabindex]")),n&&n!==t&&n.focus({preventScroll:!0}))}function R(){(0,W.jd)(A)}function N(){(0,W.fP)(A);const t=document.activeElement;null!==t&&e.rootRef.value.contains(t)&&t.blur()}function O(t){clearTimeout(d),!0===e.editable.value&&!1===e.focused.value&&(e.focused.value=!0,n("focus",t))}function P(t,r){clearTimeout(d),d=setTimeout((()=>{(!0!==document.hasFocus()||!0!==e.hasPopupOpen&&void 0!==e.controlRef&&null!==e.controlRef.value&&!1===e.controlRef.value.contains(document.activeElement))&&(!0===e.focused.value&&(e.focused.value=!1,n("blur",t)),void 0!==r&&r())}))}function L(r){if((0,C.NS)(r),!0!==h.platform.is.mobile){const t=void 0!==e.targetRef&&e.targetRef.value||e.rootRef.value;t.focus()}else!0===e.rootRef.value.contains(document.activeElement)&&document.activeElement.blur();"file"===t.type&&(e.inputRef.value.value=null),n("update:modelValue",null),n("clear",t.modelValue),(0,i.Y3)((()=>{v(),!0!==h.platform.is.mobile&&(f.value=!1)}))}function D(){const n=[];return void 0!==r.prepend&&n.push((0,i.h)("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:C.X$},r.prepend())),n.push((0,i.h)("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},F())),void 0!==r.append&&n.push((0,i.h)("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:C.X$},r.append())),!0===m.value&&!1===t.noErrorIcon&&n.push(q("error",[(0,i.h)(a.Z,{name:h.iconSet.field.error,color:"negative"})])),!0===t.loading||!0===e.innerLoading.value?n.push(q("inner-loading-append",void 0!==r.loading?r.loading():[(0,i.h)(c.Z,{color:t.color})])):!0===t.clearable&&!0===e.hasValue.value&&!0===e.editable.value&&n.push(q("inner-clearable-append",[(0,i.h)(a.Z,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||h.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:L})])),void 0!==e.getInnerAppend&&n.push(q("inner-append",e.getInnerAppend())),void 0!==e.getControlChild&&n.push(e.getControlChild()),n}function F(){const n=[];return void 0!==t.prefix&&null!==t.prefix&&n.push((0,i.h)("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),void 0!==e.getShadowControl&&!0===e.hasShadow.value&&n.push(e.getShadowControl()),void 0!==e.getControl?n.push(e.getControl()):void 0!==r.rawControl?n.push(r.rawControl()):void 0!==r.control&&n.push((0,i.h)("div",{ref:e.targetRef,class:"q-field__native row",...e.splitAttrs.attributes.value,"data-autofocus":!0===t.autofocus||void 0},r.control(S.value))),!0===E.value&&n.push((0,i.h)("div",{class:k.value},(0,I.KR)(r.label,t.label))),void 0!==t.suffix&&null!==t.suffix&&n.push((0,i.h)("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat((0,I.KR)(r.default))}function M(){let n,o;!0===m.value?null!==g.value?(n=[(0,i.h)("div",{role:"alert"},g.value)],o=`q--slot-error-${g.value}`):(n=(0,I.KR)(r.error),o="q--slot-error"):!0===t.hideHint&&!0!==e.focused.value||(void 0!==t.hint?(n=[(0,i.h)("div",t.hint)],o=`q--slot-hint-${t.hint}`):(n=(0,I.KR)(r.hint),o="q--slot-hint"));const a=!0===t.counter||void 0!==r.counter;if(!0===t.hideBottomSpace&&!1===a&&void 0===n)return;const c=(0,i.h)("div",{key:o,class:"q-field__messages col"},n);return(0,i.h)("div",{class:"q-field__bottom row items-start q-field__bottom--"+(!0!==t.hideBottomSpace?"animated":"stale")},[!0===t.hideBottomSpace?c:(0,i.h)(s.uT,{name:"q-transition--field-message"},(()=>c)),!0===a?(0,i.h)("div",{class:"q-field__counter"},void 0!==r.counter?r.counter():e.computedCounter.value):null])}function q(e,t){return null===t?null:(0,i.h)("div",{key:e,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},t)}(0,i.YP)((()=>t.for),(t=>{e.targetUid.value=G(t)})),Object.assign(u,{focus:R,blur:N});let U=!1;return(0,i.se)((()=>{U=!0})),(0,i.dl)((()=>{!0===U&&!0===t.autofocus&&u.focus()})),(0,i.bv)((()=>{!0===o.uX.value&&void 0===t.for&&(e.targetUid.value=G()),!0===t.autofocus&&u.focus()})),(0,i.Jd)((()=>{clearTimeout(d)})),function(){return(0,i.h)("label",{ref:e.rootRef,class:[_.value,l.class],style:l.style,...x.value},[void 0!==r.before?(0,i.h)("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:C.X$},r.before()):null,(0,i.h)("div",{class:"q-field__inner relative-position col self-stretch"},[(0,i.h)("div",{ref:e.controlRef,class:T.value,tabindex:-1,...e.controlEvents},D()),!0===w.value?M():null]),void 0!==r.after?(0,i.h)("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:C.X$},r.after()):null])}}var ee=n(1436);const te={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ne={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},re=Object.keys(ne);re.forEach((e=>{ne[e].regex=new RegExp(ne[e].pattern)}));const ie=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+re.join("")+"])|(.)","g"),se=/[.*+?^${}()|[\]\\]/g,oe=String.fromCharCode(1),ae={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function ce(e,t,n,s){let o,a,c,l;const u=(0,r.iH)(null),h=(0,r.iH)(f());function d(){return!0===e.autogrow||["textarea","text","search","url","tel","password"].includes(e.type)}function f(){if(m(),!0===u.value){const t=b(I(e.modelValue));return!1!==e.fillMask?T(t):t}return e.modelValue}function p(e){if(e<o.length)return o.slice(-e);let t="",n=o;const r=n.indexOf(oe);if(r>-1){for(let r=e-n.length;r>0;r--)t+=oe;n=n.slice(0,r)+t+n.slice(r)}return n}function m(){if(u.value=void 0!==e.mask&&e.mask.length>0&&d(),!1===u.value)return l=void 0,o="",void(a="");const t=void 0===te[e.mask]?e.mask:te[e.mask],n="string"===typeof e.fillMask&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",r=n.replace(se,"\\$&"),i=[],s=[],h=[];let f=!0===e.reverseFillMask,p="",m="";t.replace(ie,((e,t,n,r,o)=>{if(void 0!==r){const e=ne[r];h.push(e),m=e.negate,!0===f&&(s.push("(?:"+m+"+)?("+e.pattern+"+)?(?:"+m+"+)?("+e.pattern+"+)?"),f=!1),s.push("(?:"+m+"+)?("+e.pattern+")?")}else if(void 0!==n)p="\\"+("\\"===n?"":n),h.push(n),i.push("([^"+p+"]+)?"+p+"?");else{const e=void 0!==t?t:o;p="\\"===e?"\\\\\\\\":e.replace(se,"\\\\$&"),h.push(e),i.push("([^"+p+"]+)?"+p+"?")}}));const g=new RegExp("^"+i.join("")+"("+(""===p?".":"[^"+p+"]")+"+)?$"),v=s.length-1,y=s.map(((t,n)=>0===n&&!0===e.reverseFillMask?new RegExp("^"+r+"*"+t):n===v?new RegExp("^"+t+"("+(""===m?".":m)+"+)?"+(!0===e.reverseFillMask?"$":r+"*")):new RegExp("^"+t)));c=h,l=e=>{const t=g.exec(e);null!==t&&(e=t.slice(1).join(""));const n=[],r=y.length;for(let i=0,s=e;i<r;i++){const e=y[i].exec(s);if(null===e)break;s=s.slice(e.shift().length),n.push(...e)}return n.length>0?n.join(""):e},o=h.map((e=>"string"===typeof e?e:oe)).join(""),a=o.split(oe).join(n)}function g(t,r,c){const l=s.value,u=l.selectionEnd,d=l.value.length-u,f=I(t);!0===r&&m();const p=b(f),g=!1!==e.fillMask?T(p):p,v=h.value!==g;l.value!==g&&(l.value=g),!0===v&&(h.value=g),document.activeElement===l&&(0,i.Y3)((()=>{if(g!==a)if("insertFromPaste"!==c||!0===e.reverseFillMask)if(["deleteContentBackward","deleteContentForward"].indexOf(c)>-1){const t=!0===e.reverseFillMask?0===u?g.length>p.length?1:0:Math.max(0,g.length-(g===a?0:Math.min(p.length,d)+1))+1:u;l.setSelectionRange(t,t,"forward")}else if(!0===e.reverseFillMask)if(!0===v){const e=Math.max(0,g.length-(g===a?0:Math.min(p.length,d+1)));1===e&&1===u?l.setSelectionRange(e,e,"forward"):y.rightReverse(l,e,e)}else{const e=g.length-d;l.setSelectionRange(e,e,"backward")}else if(!0===v){const e=Math.max(0,o.indexOf(oe),Math.min(p.length,u)-1);y.right(l,e,e)}else{const e=u-1;y.right(l,e,e)}else{const e=u-1;y.right(l,e,e)}else{const t=!0===e.reverseFillMask?a.length:0;l.setSelectionRange(t,t,"forward")}}));const w=!0===e.unmaskedValue?I(g):g;e.modelValue!==w&&n(w,!0)}function v(e,t,n){const r=b(I(e.value));t=Math.max(0,o.indexOf(oe),Math.min(r.length,t)),e.setSelectionRange(t,n,"forward")}(0,i.YP)((()=>e.type+e.autogrow),m),(0,i.YP)((()=>e.mask),(n=>{if(void 0!==n)g(h.value,!0);else{const n=I(h.value);m(),e.modelValue!==n&&t("update:modelValue",n)}})),(0,i.YP)((()=>e.fillMask+e.reverseFillMask),(()=>{!0===u.value&&g(h.value,!0)})),(0,i.YP)((()=>e.unmaskedValue),(()=>{!0===u.value&&g(h.value)}));const y={left(e,t,n,r){const i=-1===o.slice(t-1).indexOf(oe);let s=Math.max(0,t-1);for(;s>=0;s--)if(o[s]===oe){t=s,!0===i&&t++;break}if(s<0&&void 0!==o[t]&&o[t]!==oe)return y.right(e,0,0);t>=0&&e.setSelectionRange(t,!0===r?n:t,"backward")},right(e,t,n,r){const i=e.value.length;let s=Math.min(i,n+1);for(;s<=i;s++){if(o[s]===oe){n=s;break}o[s-1]===oe&&(n=s)}if(s>i&&void 0!==o[n-1]&&o[n-1]!==oe)return y.left(e,i,i);e.setSelectionRange(r?t:n,n,"forward")},leftReverse(e,t,n,r){const i=p(e.value.length);let s=Math.max(0,t-1);for(;s>=0;s--){if(i[s-1]===oe){t=s;break}if(i[s]===oe&&(t=s,0===s))break}if(s<0&&void 0!==i[t]&&i[t]!==oe)return y.rightReverse(e,0,0);t>=0&&e.setSelectionRange(t,!0===r?n:t,"backward")},rightReverse(e,t,n,r){const i=e.value.length,s=p(i),o=-1===s.slice(0,n+1).indexOf(oe);let a=Math.min(i,n+1);for(;a<=i;a++)if(s[a-1]===oe){n=a,n>0&&!0===o&&n--;break}if(a>i&&void 0!==s[n-1]&&s[n-1]!==oe)return y.leftReverse(e,i,i);e.setSelectionRange(!0===r?t:n,n,"forward")}};function w(t){if(!0===(0,ee.Wm)(t))return;const n=s.value,r=n.selectionStart,i=n.selectionEnd;if(37===t.keyCode||39===t.keyCode){const s=y[(39===t.keyCode?"right":"left")+(!0===e.reverseFillMask?"Reverse":"")];t.preventDefault(),s(n,r,i,t.shiftKey)}else 8===t.keyCode&&!0!==e.reverseFillMask&&r===i?y.left(n,r,i,!0):46===t.keyCode&&!0===e.reverseFillMask&&r===i&&y.rightReverse(n,r,i,!0)}function b(t){if(void 0===t||null===t||""===t)return"";if(!0===e.reverseFillMask)return _(t);const n=c;let r=0,i="";for(let e=0;e<n.length;e++){const s=t[r],o=n[e];if("string"===typeof o)i+=o,s===o&&r++;else{if(void 0===s||!o.regex.test(s))return i;i+=void 0!==o.transform?o.transform(s):s,r++}}return i}function _(e){const t=c,n=o.indexOf(oe);let r=e.length-1,i="";for(let s=t.length-1;s>=0&&r>-1;s--){const o=t[s];let a=e[r];if("string"===typeof o)i=o+i,a===o&&r--;else{if(void 0===a||!o.regex.test(a))return i;do{i=(void 0!==o.transform?o.transform(a):a)+i,r--,a=e[r]}while(n===s&&void 0!==a&&o.regex.test(a))}}return i}function I(e){return"string"!==typeof e||void 0===l?"number"===typeof e?l(""+e):e:l(e)}function T(t){return a.length-t.length<=0?t:!0===e.reverseFillMask&&t.length>0?a.slice(0,-t.length)+t:t+a.slice(t.length)}return{innerValue:h,hasMask:u,moveCursorForPaste:v,updateMaskValue:g,onMaskedKeydown:w}}const le={name:String};function ue(e){return(0,i.Fl)((()=>e.name||e.for))}function he(e,t){function n(){const t=e.modelValue;try{const e="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(t)===t&&("length"in t?Array.from(t):[t]).forEach((t=>{e.items.add(t)})),{files:e.files}}catch(n){return{files:void 0}}}return!0===t?(0,i.Fl)((()=>{if("file"===e.type)return n()})):(0,i.Fl)(n)}const de=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,fe=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,pe=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;function me(e){return function(t){if("compositionend"===t.type||"change"===t.type){if(!0!==t.target.composing)return;t.target.composing=!1,e(t)}else"compositionupdate"===t.type?"string"===typeof t.data&&!1===de.test(t.data)&&!1===fe.test(t.data)&&!1===pe.test(t.data)&&(t.target.composing=!1):t.target.composing=!0}}const ge=(0,_.L)({name:"QInput",inheritAttrs:!1,props:{...J,...ae,...le,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Q,"paste","change"],setup(e,{emit:t,attrs:n}){const s={};let o,a,c,l,u=NaN;const h=(0,r.iH)(null),d=ue(e),{innerValue:f,hasMask:p,moveCursorForPaste:m,updateMaskValue:g,onMaskedKeydown:v}=ce(e,t,N,h),y=he(e,!0),w=(0,i.Fl)((()=>Y(f.value))),b=me(R),_=Z(),I=(0,i.Fl)((()=>"textarea"===e.type||!0===e.autogrow)),T=(0,i.Fl)((()=>!0===I.value||["text","search","url","tel","password"].includes(e.type))),E=(0,i.Fl)((()=>{const t={..._.splitAttrs.listeners.value,onInput:R,onPaste:A,onChange:P,onBlur:L,onFocus:C.sT};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=b,!0===p.value&&(t.onKeydown=v),!0===e.autogrow&&(t.onAnimationend=O),t})),k=(0,i.Fl)((()=>{const t={tabindex:0,"data-autofocus":!0===e.autofocus||void 0,rows:"textarea"===e.type?6:void 0,"aria-label":e.label,name:d.value,..._.splitAttrs.attributes.value,id:_.targetUid.value,maxlength:e.maxlength,disabled:!0===e.disable,readonly:!0===e.readonly};return!1===I.value&&(t.type=e.type),!0===e.autogrow&&(t.rows=1),t}));function S(){(0,W.jd)((()=>{const e=document.activeElement;null===h.value||h.value===e||null!==e&&e.id===_.targetUid.value||h.value.focus({preventScroll:!0})}))}function x(){null!==h.value&&h.value.select()}function A(n){if(!0===p.value&&!0!==e.reverseFillMask){const e=n.target;m(e,e.selectionStart,e.selectionEnd)}t("paste",n)}function R(n){if(!n||!n.target||!0===n.target.composing)return;if("file"===e.type)return void t("update:modelValue",n.target.files);const r=n.target.value;if(!0===p.value)g(r,!1,n.inputType);else if(N(r),!0===T.value&&n.target===document.activeElement){const{selectionStart:e,selectionEnd:t}=n.target;void 0!==e&&void 0!==t&&(0,i.Y3)((()=>{n.target===document.activeElement&&0===r.indexOf(n.target.value)&&n.target.setSelectionRange(e,t)}))}!0===e.autogrow&&O()}function N(n,r){l=()=>{"number"!==e.type&&!0===s.hasOwnProperty("value")&&delete s.value,e.modelValue!==n&&u!==n&&(!0===r&&(a=!0),t("update:modelValue",n),(0,i.Y3)((()=>{u===n&&(u=NaN)}))),l=void 0},"number"===e.type&&(o=!0,s.value=n),void 0!==e.debounce?(clearTimeout(c),s.value=n,c=setTimeout(l,e.debounce)):l()}function O(){const e=h.value;if(null!==e){const t=e.parentNode.style;t.marginBottom=e.scrollHeight-1+"px",e.style.height="1px",e.style.height=e.scrollHeight+"px",t.marginBottom=""}}function P(e){b(e),clearTimeout(c),void 0!==l&&l(),t("change",e.target.value)}function L(t){void 0!==t&&(0,C.sT)(t),clearTimeout(c),void 0!==l&&l(),o=!1,a=!1,delete s.value,"file"!==e.type&&setTimeout((()=>{null!==h.value&&(h.value.value=void 0!==f.value?f.value:"")}))}function D(){return!0===s.hasOwnProperty("value")?s.value:void 0!==f.value?f.value:""}(0,i.YP)((()=>e.type),(()=>{h.value&&(h.value.value=e.modelValue)})),(0,i.YP)((()=>e.modelValue),(t=>{if(!0===p.value){if(!0===a)return void(a=!1);g(t)}else f.value!==t&&(f.value=t,"number"===e.type&&!0===s.hasOwnProperty("value")&&(!0===o?o=!1:delete s.value));!0===e.autogrow&&(0,i.Y3)(O)})),(0,i.YP)((()=>e.autogrow),(e=>{!0===e?(0,i.Y3)(O):null!==h.value&&n.rows>0&&(h.value.style.height="auto")})),(0,i.YP)((()=>e.dense),(()=>{!0===e.autogrow&&(0,i.Y3)(O)})),(0,i.Jd)((()=>{L()})),(0,i.bv)((()=>{!0===e.autogrow&&O()})),Object.assign(_,{innerValue:f,fieldClass:(0,i.Fl)((()=>"q-"+(!0===I.value?"textarea":"input")+(!0===e.autogrow?" q-textarea--autogrow":""))),hasShadow:(0,i.Fl)((()=>"file"!==e.type&&"string"===typeof e.shadowText&&e.shadowText.length>0)),inputRef:h,emitValue:N,hasValue:w,floatingLabel:(0,i.Fl)((()=>!0===w.value||Y(e.displayValue))),getControl:()=>(0,i.h)(!0===I.value?"textarea":"input",{ref:h,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...k.value,...E.value,..."file"!==e.type?{value:D()}:y.value}),getShadowControl:()=>(0,i.h)("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(!0===I.value?"":" text-no-wrap")},[(0,i.h)("span",{class:"invisible"},D()),(0,i.h)("span",e.shadowText)])});const F=X(_),M=(0,i.FN)();return Object.assign(M.proxy,{focus:S,select:x,getNativeElement:()=>h.value}),F}})},3414:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(3673),i=n(1959),s=n(2236),o=n(7277),a=n(908),c=n(7657),l=n(4716),u=n(1436);const h=(0,a.L)({name:"QItem",props:{...s.S,...o.$,tag:{type:String,default:"div"},active:Boolean,clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:a}}=(0,r.FN)(),h=(0,s.Z)(e,a),{hasRouterLink:d,hasLink:f,linkProps:p,linkClass:m,linkTag:g,navigateToRouterLink:v}=(0,o.Z)(),y=(0,i.iH)(null),w=(0,i.iH)(null),b=(0,r.Fl)((()=>!0===e.clickable||!0===f.value||"label"===e.tag)),_=(0,r.Fl)((()=>!0!==e.disable&&!0===b.value)),I=(0,r.Fl)((()=>"q-item q-item-type row no-wrap"+(!0===e.dense?" q-item--dense":"")+(!0===h.value?" q-item--dark":"")+(!0===f.value?m.value:!0===e.active?(void 0!==e.activeClass?` ${e.activeClass}`:"")+" q-item--active":"")+(!0===e.disable?" disabled":"")+(!0===_.value?" q-item--clickable q-link cursor-pointer "+(!0===e.manualFocus?"q-manual-focusable":"q-focusable q-hoverable")+(!0===e.focused?" q-manual-focusable--focused":""):""))),T=(0,r.Fl)((()=>{if(void 0===e.insetLevel)return null;const t=!0===a.lang.rtl?"Right":"Left";return{["padding"+t]:16+56*e.insetLevel+"px"}}));function E(e){!0===_.value&&(null!==w.value&&(!0!==e.qKeyEvent&&document.activeElement===y.value?w.value.focus():document.activeElement===w.value&&y.value.focus()),!0===d.value&&v(e),n("click",e))}function k(e){if(!0===_.value&&!0===(0,u.So)(e,13)){(0,l.NS)(e),e.qKeyEvent=!0;const t=new MouseEvent("click",e);t.qKeyEvent=!0,y.value.dispatchEvent(t)}n("keyup",e)}function S(){const e=(0,c.Bl)(t.default,[]);return!0===_.value&&e.unshift((0,r.h)("div",{class:"q-focus-helper",tabindex:-1,ref:w})),e}return()=>{const t={ref:y,class:I.value,style:T.value,onClick:E,onKeyup:k};return!0===_.value?(t.tabindex=e.tabindex||"0",Object.assign(t,p.value)):!0===b.value&&(t["aria-disabled"]="true"),(0,r.h)(g.value,t,S())}}})},2350:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673),i=n(908),s=n(7657);const o=(0,i.L)({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=(0,r.Fl)((()=>parseInt(e.lines,10))),i=(0,r.Fl)((()=>"q-item__label"+(!0===e.overline?" q-item__label--overline text-overline":"")+(!0===e.caption?" q-item__label--caption text-caption":"")+(!0===e.header?" q-item__label--header":"")+(1===n.value?" ellipsis":""))),o=(0,r.Fl)((()=>void 0!==e.lines&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null));return()=>(0,r.h)("div",{style:o.value,class:i.value},(0,s.KR)(t.default))}})},2035:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673),i=n(908),s=n(7657);const o=(0,i.L)({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-item__section column q-item__section--"+(!0===e.avatar||!0===e.side||!0===e.thumbnail?"side":"main")+(!0===e.top?" q-item__section--top justify-start":" justify-center")+(!0===e.avatar?" q-item__section--avatar":"")+(!0===e.thumbnail?" q-item__section--thumbnail":"")+(!0===e.noWrap?" q-item__section--nowrap":"")));return()=>(0,r.h)("div",{class:n.value},(0,s.KR)(t.default))}})},7011:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3673),i=n(908),s=n(2236),o=n(7657);const a=(0,i.L)({name:"QList",props:{...s.S,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:t}){const n=(0,r.FN)(),i=(0,s.Z)(e,n.proxy.$q),a=(0,r.Fl)((()=>"q-list"+(!0===e.bordered?" q-list--bordered":"")+(!0===e.dense?" q-list--dense":"")+(!0===e.separator?" q-list--separator":"")+(!0===i.value?" q-list--dark":"")+(!0===e.padding?" q-list--padding":"")));return()=>(0,r.h)("div",{class:a.value},(0,o.KR)(t.default))}})},3066:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(3673),i=n(1959),s=n(4688),o=(n(71),n(908)),a=n(8400),c=n(4716);const{passive:l}=c.rU,u=["both","horizontal","vertical"],h=(0,o.L)({name:"QScrollObserver",props:{axis:{type:String,validator:e=>u.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:t}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i,s,o=null;function u(){null!==o&&o();const r=Math.max(0,(0,a.u3)(i)),s=(0,a.OI)(i),c={top:r-n.position.top,left:s-n.position.left};if("vertical"===e.axis&&0===c.top||"horizontal"===e.axis&&0===c.left)return;const l=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";n.position={top:r,left:s},n.directionChanged=n.direction!==l,n.delta=c,!0===n.directionChanged&&(n.direction=l,n.inflectionPoint=n.position),t("scroll",{...n})}function h(){i=(0,a.b0)(s,e.scrollTarget),i.addEventListener("scroll",f,l),f(!0)}function d(){void 0!==i&&(i.removeEventListener("scroll",f,l),i=void 0)}function f(t){if(!0===t||0===e.debounce||"0"===e.debounce)u();else if(null===o){const[t,n]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];o=()=>{n(t),o=null}}}(0,r.YP)((()=>e.scrollTarget),(()=>{d(),h()}));const p=(0,r.FN)();return(0,r.bv)((()=>{s=p.proxy.$el.parentNode,h()})),(0,r.Jd)((()=>{null!==o&&o(),d()})),Object.assign(p.proxy,{trigger:f,getPosition:()=>n}),c.ZT}});var d=n(5151),f=n(7657),p=n(2547);const m=(0,o.L)({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:n}){const{proxy:{$q:o}}=(0,r.FN)(),c=(0,i.iH)(null),l=(0,i.iH)(o.screen.height),u=(0,i.iH)(!0===e.container?0:o.screen.width),m=(0,i.iH)({position:0,direction:"down",inflectionPoint:0}),g=(0,i.iH)(0),v=(0,i.iH)(!0===s.uX.value?0:(0,a.np)()),y=(0,r.Fl)((()=>"q-layout q-layout--"+(!0===e.container?"containerized":"standard"))),w=(0,r.Fl)((()=>!1===e.container?{minHeight:o.screen.height+"px"}:null)),b=(0,r.Fl)((()=>0!==v.value?{[!0===o.lang.rtl?"left":"right"]:`${v.value}px`}:null)),_=(0,r.Fl)((()=>0!==v.value?{[!0===o.lang.rtl?"right":"left"]:0,[!0===o.lang.rtl?"left":"right"]:`-${v.value}px`,width:`calc(100% + ${v.value}px)`}:null));function I(t){if(!0===e.container||!0!==document.qScrollPrevented){const r={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};m.value=r,void 0!==e.onScroll&&n("scroll",r)}}function T(t){const{height:r,width:i}=t;let s=!1;l.value!==r&&(s=!0,l.value=r,void 0!==e.onScrollHeight&&n("scroll-height",r),k()),u.value!==i&&(s=!0,u.value=i),!0===s&&void 0!==e.onResize&&n("resize",t)}function E({height:e}){g.value!==e&&(g.value=e,k())}function k(){if(!0===e.container){const e=l.value>g.value?(0,a.np)():0;v.value!==e&&(v.value=e)}}let S;const x={instances:{},view:(0,r.Fl)((()=>e.view)),isContainer:(0,r.Fl)((()=>e.container)),rootRef:c,height:l,containerHeight:g,scrollbarWidth:v,totalWidth:(0,r.Fl)((()=>u.value+v.value)),rows:(0,r.Fl)((()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}})),header:(0,i.qj)({size:0,offset:0,space:!1}),right:(0,i.qj)({size:300,offset:0,space:!1}),footer:(0,i.qj)({size:0,offset:0,space:!1}),left:(0,i.qj)({size:300,offset:0,space:!1}),scroll:m,animate(){void 0!==S?clearTimeout(S):document.body.classList.add("q-body--layout-animate"),S=setTimeout((()=>{document.body.classList.remove("q-body--layout-animate"),S=void 0}),155)},update(e,t,n){x[e][t]=n}};if((0,r.JJ)(p.YE,x),(0,a.np)()>0){let t=null;const n=document.body;function i(){t=null,n.classList.remove("hide-scrollbar")}function s(){if(null===t){if(n.scrollHeight>o.screen.height)return;n.classList.add("hide-scrollbar")}else clearTimeout(t);t=setTimeout(i,300)}function a(e){null!==t&&"remove"===e&&(clearTimeout(t),i()),window[`${e}EventListener`]("resize",s)}(0,r.YP)((()=>!0!==e.container?"add":"remove"),a),!0!==e.container&&a("add"),(0,r.Ah)((()=>{a("remove")}))}return()=>{const n=(0,f.vs)(t.default,[(0,r.h)(h,{onScroll:I}),(0,r.h)(d.Z,{onResize:T})]),i=(0,r.h)("div",{class:y.value,style:w.value,ref:!0===e.container?void 0:c},n);return!0===e.container?(0,r.h)("div",{class:"q-layout-container overflow-hidden",ref:c},[(0,r.h)(d.Z,{onResize:E}),(0,r.h)("div",{class:"absolute-full",style:b.value},[(0,r.h)("div",{class:"scroll",style:_.value},[i])])]):i}}})},4379:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3673),i=n(908),s=n(7657),o=n(2547);const a=(0,i.L)({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),i=(0,r.f3)(o.YE);(0,r.f3)(o.Mw,(()=>{console.error("QPage needs to be child of QPageContainer")}));const a=(0,r.Fl)((()=>{const t=(!0===i.header.space?i.header.size:0)+(!0===i.footer.space?i.footer.size:0);if("function"===typeof e.styleFn){const r=!0===i.isContainer.value?i.containerHeight.value:n.screen.height;return e.styleFn(t,r)}return{minHeight:!0===i.isContainer.value?i.containerHeight.value-t+"px":0===n.screen.height?0!==t?`calc(100vh - ${t}px)`:"100vh":n.screen.height-t+"px"}})),c=(0,r.Fl)((()=>"q-page "+(!0===e.padding?" q-layout-padding":"")));return()=>(0,r.h)("main",{class:c.value,style:a.value},(0,s.KR)(t.default))}})},2652:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3673),i=n(908),s=n(7657),o=n(2547);const a=(0,i.L)({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),i=(0,r.f3)(o.YE,(()=>{console.error("QPageContainer needs to be child of QLayout")}));(0,r.JJ)(o.Mw,!0);const a=(0,r.Fl)((()=>{const e={};return!0===i.header.space&&(e.paddingTop=`${i.header.size}px`),!0===i.right.space&&(e["padding"+(!0===n.lang.rtl?"Left":"Right")]=`${i.right.size}px`),!0===i.footer.space&&(e.paddingBottom=`${i.footer.size}px`),!0===i.left.space&&(e["padding"+(!0===n.lang.rtl?"Right":"Left")]=`${i.left.size}px`),e}));return()=>(0,r.h)("div",{class:"q-page-container",style:a.value},(0,s.KR)(t.default))}})},5151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(3673),i=n(1959),s=n(4688);function o(){const e=(0,i.iH)(!s.uX.value);return!1===e.value&&(0,r.bv)((()=>{e.value=!0})),e}var a=n(908),c=n(4716);const l="undefined"!==typeof ResizeObserver,u=!0===l?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},h=(0,a.L)({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let n,i=null,s={width:-1,height:-1};function a(t){!0===t||0===e.debounce||"0"===e.debounce?h():null===i&&(i=setTimeout(h,e.debounce))}function h(){if(clearTimeout(i),i=null,n){const{offsetWidth:e,offsetHeight:r}=n;e===s.width&&r===s.height||(s={width:e,height:r},t("resize",s))}}const d=(0,r.FN)();if(Object.assign(d.proxy,{trigger:a}),!0===l){let e;return(0,r.bv)((()=>{(0,r.Y3)((()=>{n=d.proxy.$el.parentNode,n&&(e=new ResizeObserver(a),e.observe(n),h())}))})),(0,r.Jd)((()=>{clearTimeout(i),void 0!==e&&(void 0!==e.disconnect?e.disconnect():n&&e.unobserve(n))})),c.ZT}{const e=o();let t;function s(){clearTimeout(i),void 0!==t&&(void 0!==t.removeEventListener&&t.removeEventListener("resize",a,c.rU.passive),t=void 0)}function l(){s(),n&&n.contentDocument&&(t=n.contentDocument.defaultView,t.addEventListener("resize",a,c.rU.passive),h())}return(0,r.bv)((()=>{(0,r.Y3)((()=>{n=d.proxy.$el,n&&l()}))})),(0,r.Jd)(s),()=>{if(!0===e.value)return(0,r.h)("object",{style:u.style,tabindex:-1,type:"text/html",data:u.url,"aria-hidden":"true",onLoad:l})}}}})},2025:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673),i=n(908);const s=(0,r.h)("div",{class:"q-space"}),o=(0,i.L)({name:"QSpace",setup(){return()=>s}})},9754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(3673),i=n(2417);const s={size:{type:[Number,String],default:"1em"},color:String};function o(e){return{cSize:(0,r.Fl)((()=>e.size in i.Ok?`${i.Ok[e.size]}px`:e.size)),classes:(0,r.Fl)((()=>"q-spinner"+(e.color?` text-${e.color}`:"")))}}var a=n(908);const c=(0,a.L)({name:"QSpinner",props:{...s,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=o(e);return()=>(0,r.h)("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[(0,r.h)("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}})},6602:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3673),i=n(6027),s=n(908),o=n(7657);const a=(0,s.L)({name:"QTabPanel",props:i.vZ,setup(e,{slots:t}){return()=>(0,r.h)("div",{class:"q-tab-panel"},(0,o.KR)(t.default))}})},5906:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(3673),i=n(2236),s=n(6027),o=n(908),a=n(7657);const c=(0,o.L)({name:"QTabPanels",props:{...s.t6,...i.S},emits:s.K6,setup(e,{slots:t}){const n=(0,r.FN)(),o=(0,i.Z)(e,n.proxy.$q),{updatePanelsList:c,getPanelContent:l,panelDirectives:u}=(0,s.ZP)(),h=(0,r.Fl)((()=>"q-tab-panels q-panel-parent"+(!0===o.value?" q-tab-panels--dark q-dark":"")));return()=>(c(t),(0,a.Jl)("div",{class:h.value},l(),"pan",e.swipeable,(()=>u.value)))}})},3269:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(3673),i=n(1959),s=n(4554),o=n(6489),a=n(7657),c=n(1436),l=n(2547),u=n(4716);let h=0;const d=["click","keydown"],f={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>"t_"+h++},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function p(e,t,n,h){const d=(0,r.f3)(l.Nd,(()=>{console.error("QTab/QRouteTab component needs to be child of QTabs")})),{proxy:f}=(0,r.FN)(),p=(0,i.iH)(null),m=(0,i.iH)(null),g=(0,i.iH)(null),v=(0,r.Fl)((()=>!0!==e.disable&&!1!==e.ripple&&Object.assign({keyCodes:[13,32],early:!0},!0===e.ripple?{}:e.ripple))),y=(0,r.Fl)((()=>d.currentModel.value===e.name)),w=(0,r.Fl)((()=>"q-tab relative-position self-stretch flex flex-center text-center"+(!0===y.value?" q-tab--active"+(d.tabProps.value.activeClass?" "+d.tabProps.value.activeClass:"")+(d.tabProps.value.activeColor?` text-${d.tabProps.value.activeColor}`:"")+(d.tabProps.value.activeBgColor?` bg-${d.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&!1===d.tabProps.value.inlineLabel?" q-tab--full":"")+(!0===e.noCaps||!0===d.tabProps.value.noCaps?" q-tab--no-caps":"")+(!0===e.disable?" disabled":" q-focusable q-hoverable cursor-pointer")+(void 0!==h&&""!==h.linkClass.value?` ${h.linkClass.value}`:""))),b=(0,r.Fl)((()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(!0===d.tabProps.value.inlineLabel?"row no-wrap q-tab__content--inline":"column")+(void 0!==e.contentClass?` ${e.contentClass}`:""))),_=(0,r.Fl)((()=>!0===e.disable||!0===d.hasFocus.value?-1:e.tabindex||0));function I(t,r){if(!0!==r&&null!==p.value&&p.value.focus(),!0!==e.disable){let r;if(void 0!==h){if(!0!==h.hasRouterLink.value)return void n("click",t);r=()=>{t.__qNavigate=!0,d.avoidRouteWatcher=!0;const n=h.navigateToRouterLink(t);!1===n?d.avoidRouteWatcher=!1:n.then((()=>{d.avoidRouteWatcher=!1,d.updateModel({name:e.name,fromRoute:!0})}))}}else r=()=>{d.updateModel({name:e.name,fromRoute:!1})};n("click",t,r),!0!==t.defaultPrevented&&r()}}function T(e){(0,c.So)(e,[13,32])?I(e,!0):!0!==(0,c.Wm)(e)&&e.keyCode>=35&&e.keyCode<=40&&!0===d.onKbdNavigate(e.keyCode,f.$el)&&(0,u.NS)(e),n("keydown",e)}function E(){const n=d.tabProps.value.narrowIndicator,i=[],o=(0,r.h)("div",{ref:g,class:["q-tab__indicator",d.tabProps.value.indicatorClass]});void 0!==e.icon&&i.push((0,r.h)(s.Z,{class:"q-tab__icon",name:e.icon})),void 0!==e.label&&i.push((0,r.h)("div",{class:"q-tab__label"},e.label)),!1!==e.alert&&i.push(void 0!==e.alertIcon?(0,r.h)(s.Z,{class:"q-tab__alert-icon",color:!0!==e.alert?e.alert:void 0,name:e.alertIcon}):(0,r.h)("div",{class:"q-tab__alert"+(!0!==e.alert?` text-${e.alert}`:"")})),!0===n&&i.push(o);const c=[(0,r.h)("div",{class:"q-focus-helper",tabindex:-1,ref:p}),(0,r.h)("div",{class:b.value},(0,a.vs)(t.default,i))];return!1===n&&c.push(o),c}const k={name:(0,r.Fl)((()=>e.name)),rootRef:m,tabIndicatorRef:g,routerProps:h};function S(t,n){const i={ref:m,class:w.value,tabindex:_.value,role:"tab","aria-selected":!0===y.value?"true":"false","aria-disabled":!0===e.disable?"true":void 0,onClick:I,onKeydown:T,...n};return(0,r.wy)((0,r.h)(t,i,E()),[[o.Z,v.value]])}return(0,r.Jd)((()=>{d.unregisterTab(k),d.recalculateScroll()})),(0,r.bv)((()=>{d.registerTab(k),d.recalculateScroll()})),{renderTab:S,$tabs:d}}var m=n(908);const g=(0,m.L)({name:"QTab",props:f,emits:d,setup(e,{slots:t,emit:n}){const{renderTab:r}=p(e,t,n);return()=>r("div")}})},2496:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});n(71);var r=n(3673),i=n(1959),s=n(4554),o=n(5151),a=n(416),c=n(4955),l=n(908),u=n(4716),h=n(7657),d=n(2547);let f=!1;{const e=document.createElement("div"),t=document.createElement("div");e.setAttribute("dir","rtl"),e.style.width="1px",e.style.height="1px",e.style.overflow="auto",t.style.width="1000px",t.style.height="1px",document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,f=e.scrollLeft>=0,e.remove()}function p(e,t,n){const r=!0===n?["left","right"]:["top","bottom"];return`absolute-${!0===t?r[0]:r[1]}${e?` text-${e}`:""}`}const m=["left","center","right","justify"],g=()=>{},v=(0,l.L)({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>m.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:t,emit:n}){const l=(0,r.FN)(),{proxy:{$q:m}}=l,{registerTick:v}=(0,a.Z)(),{registerTimeout:y,removeTimeout:w}=(0,c.Z)(),{registerTimeout:b}=(0,c.Z)(),_=(0,i.iH)(null),I=(0,i.iH)(null),T=(0,i.iH)(e.modelValue),E=(0,i.iH)(!1),k=(0,i.iH)(!0),S=(0,i.iH)(!1),x=(0,i.iH)(!1),C=(0,r.Fl)((()=>!0===m.platform.is.desktop||!0===e.mobileArrows)),A=[],R=(0,i.iH)(!1);let N,O,P,L=!1,D=!0===C.value?G:u.ZT;const F=(0,r.Fl)((()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:p(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps}))),M=(0,r.Fl)((()=>{const t=!0===E.value?"left":!0===x.value?"justify":e.align;return`q-tabs__content--align-${t}`})),q=(0,r.Fl)((()=>`q-tabs row no-wrap items-center q-tabs--${!0===E.value?"":"not-"}scrollable q-tabs--`+(!0===e.vertical?"vertical":"horizontal")+" q-tabs__arrows--"+(!0===C.value&&!0===e.outsideArrows?"outside":"inside")+(!0===e.dense?" q-tabs--dense":"")+(!0===e.shrink?" col-shrink":"")+(!0===e.stretch?" self-stretch":""))),U=(0,r.Fl)((()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+M.value+(void 0!==e.contentClass?` ${e.contentClass}`:"")+(!0===m.platform.is.mobile?" scroll":""))),V=(0,r.Fl)((()=>!0===e.vertical?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"})),j=(0,r.Fl)((()=>!0!==e.vertical&&!0===m.lang.rtl)),B=(0,r.Fl)((()=>!1===f&&!0===j.value));function $({name:t,setCurrent:r,skipEmit:i,fromRoute:s}){T.value!==t&&(!0!==i&&n("update:modelValue",t),!0!==r&&void 0!==e["onUpdate:modelValue"]||(K(T.value,t),T.value=t)),void 0!==s&&(L=s)}function z(){v((()=>{!0!==l.isDeactivated&&!0!==l.isUnmounted&&H({width:_.value.offsetWidth,height:_.value.offsetHeight})}))}function H(t){if(void 0===V.value||null===I.value)return;const n=t[V.value.container],i=Math.min(I.value[V.value.scroll],Array.prototype.reduce.call(I.value.children,((e,t)=>e+(t[V.value.content]||0)),0)),s=n>0&&i>n;E.value!==s&&(E.value=s),!0===s&&(0,r.Y3)(D);const o=n<parseInt(e.breakpoint,10);x.value!==o&&(x.value=o)}function K(t,n){const i=void 0!==t&&null!==t&&""!==t?A.find((e=>e.name.value===t)):null,s=void 0!==n&&null!==n&&""!==n?A.find((e=>e.name.value===n)):null;if(i&&s){const t=i.tabIndicatorRef.value,n=s.tabIndicatorRef.value;clearTimeout(N),t.style.transition="none",t.style.transform="none",n.style.transition="none",n.style.transform="none";const o=t.getBoundingClientRect(),a=n.getBoundingClientRect();n.style.transform=!0===e.vertical?`translate3d(0,${o.top-a.top}px,0) scale3d(1,${a.height?o.height/a.height:1},1)`:`translate3d(${o.left-a.left}px,0,0) scale3d(${a.width?o.width/a.width:1},1,1)`,(0,r.Y3)((()=>{N=setTimeout((()=>{n.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",n.style.transform="none"}),70)}))}s&&!0===E.value&&W(s.rootRef.value)}function W(t){const{left:n,width:r,top:i,height:s}=I.value.getBoundingClientRect(),o=t.getBoundingClientRect();let a=!0===e.vertical?o.top-i:o.left-n;if(a<0)return I.value[!0===e.vertical?"scrollTop":"scrollLeft"]+=Math.floor(a),void D();a+=!0===e.vertical?o.height-s:o.width-r,a>0&&(I.value[!0===e.vertical?"scrollTop":"scrollLeft"]+=Math.ceil(a),D())}function G(){const t=I.value;if(null!==t){const n=t.getBoundingClientRect(),r=!0===e.vertical?t.scrollTop:Math.abs(t.scrollLeft);!0===j.value?(k.value=Math.ceil(r+n.width)<t.scrollWidth-1,S.value=r>0):(k.value=r>0,S.value=!0===e.vertical?Math.ceil(r+n.height)<t.scrollHeight:Math.ceil(r+n.width)<t.scrollWidth)}}function Y(e){Z(),te(e),O=setInterval((()=>{!0===te(e)&&Z()}),5)}function J(){Y(!0===B.value?Number.MAX_SAFE_INTEGER:0)}function Q(){Y(!0===B.value?0:Number.MAX_SAFE_INTEGER)}function Z(){clearInterval(O)}function X(t,n){const r=Array.prototype.filter.call(I.value.children,(e=>e===n||e.matches&&!0===e.matches(".q-tab.q-focusable"))),i=r.length;if(0===i)return;if(36===t)return W(r[0]),!0;if(35===t)return W(r[i-1]),!0;const s=t===(!0===e.vertical?38:37),o=t===(!0===e.vertical?40:39),a=!0===s?-1:!0===o?1:void 0;if(void 0!==a){const e=!0===j.value?-1:1,t=r.indexOf(n)+a*e;return t>=0&&t<i&&(W(r[t]),r[t].focus({preventScroll:!0})),!0}}(0,r.YP)(j,D),(0,r.YP)((()=>e.modelValue),(e=>{$({name:e,setCurrent:!0,skipEmit:!0})})),(0,r.YP)((()=>e.outsideArrows),(()=>{(0,r.Y3)(z())})),(0,r.YP)(C,(e=>{D=!0===e?G:u.ZT,(0,r.Y3)(z())}));const ee=(0,r.Fl)((()=>!0===B.value?{get:e=>Math.abs(e.scrollLeft),set:(e,t)=>{e.scrollLeft=-t}}:!0===e.vertical?{get:e=>e.scrollTop,set:(e,t)=>{e.scrollTop=t}}:{get:e=>e.scrollLeft,set:(e,t)=>{e.scrollLeft=t}}));function te(e){const t=I.value,{get:n,set:r}=ee.value;let i=!1,s=n(t);const o=e<s?-1:1;return s+=5*o,s<0?(i=!0,s=0):(-1===o&&s<=e||1===o&&s>=e)&&(i=!0,s=e),r(t,s),D(),i}function ne(){return A.filter((e=>void 0!==e.routerProps&&!0===e.routerProps.hasRouterLink.value))}function re(){let e=null,t=L;const n={matchedLen:0,hrefLen:0,exact:!1,found:!1},{hash:r}=l.proxy.$route,i=T.value;let s=!0===t?g:e=>{i===e.name.value&&(t=!0,s=g)};const o=ne();for(const a of o){const t=!0===a.routerProps.exact.value;if(!0!==a.routerProps[!0===t?"linkIsExactActive":"linkIsActive"].value||!0===n.exact&&!0!==t){s(a);continue}const i=a.routerProps.linkRoute.value,o=i.hash;if(!0===t){if(r===o){e=a.name.value;break}if(""!==r&&""!==o){s(a);continue}}const c=i.matched.length,l=i.href.length-o.length;(c===n.matchedLen?l>n.hrefLen:c>n.matchedLen)?(e=a.name.value,Object.assign(n,{matchedLen:c,hrefLen:l,exact:t})):s(a)}!0!==t&&null===e||$({name:e,setCurrent:!0,fromRoute:!0})}function ie(e){if(w(),!0!==R.value&&null!==_.value&&e.target&&"function"===typeof e.target.closest){const t=e.target.closest(".q-tab");t&&!0===_.value.contains(t)&&(R.value=!0)}}function se(){y((()=>{R.value=!1}),30)}function oe(){!0!==le.avoidRouteWatcher&&b(re)}function ae(e){A.push(e);const t=ne();t.length>0&&(void 0===P&&(P=(0,r.YP)((()=>l.proxy.$route),oe)),oe())}function ce(e){if(A.splice(A.indexOf(e),1),void 0!==P){const e=ne();0===e.length&&(P(),P=void 0),oe()}}const le={currentModel:T,tabProps:F,hasFocus:R,registerTab:ae,unregisterTab:ce,verifyRouteModel:oe,updateModel:$,recalculateScroll:z,onKbdNavigate:X,avoidRouteWatcher:!1};(0,r.JJ)(d.Nd,le),(0,r.Jd)((()=>{clearTimeout(N),void 0!==P&&P()}));let ue=!1;return(0,r.se)((()=>{ue=!0})),(0,r.dl)((()=>{!0===ue&&z()})),()=>{const n=[(0,r.h)(o.Z,{onResize:H}),(0,r.h)("div",{ref:I,class:U.value,onScroll:D},(0,h.KR)(t.default))];return!0===C.value&&n.push((0,r.h)(s.Z,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(!0===k.value?"":" q-tabs__arrow--faded"),name:e.leftIcon||m.iconSet.tabs[!0===e.vertical?"up":"left"],onMousedown:J,onTouchstartPassive:J,onMouseup:Z,onMouseleave:Z,onTouchend:Z}),(0,r.h)(s.Z,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(!0===S.value?"":" q-tabs__arrow--faded"),name:e.rightIcon||m.iconSet.tabs[!0===e.vertical?"down":"right"],onMousedown:Q,onTouchstartPassive:Q,onMouseup:Z,onMouseleave:Z,onTouchend:Z})),(0,r.h)("div",{ref:_,class:q.value,role:"tablist",onFocusin:ie,onFocusout:se},n)}}})},9570:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673),i=n(908),s=n(7657);const o=(0,i.L)({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-toolbar row no-wrap items-center"+(!0===e.inset?" q-toolbar--inset":"")));return()=>(0,r.h)("div",{class:n.value},(0,s.KR)(t.default))}})},3747:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673),i=n(908),s=n(7657);const o=(0,i.L)({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-toolbar__title ellipsis"+(!0===e.shrink?" col-shrink":"")));return()=>(0,r.h)("div",{class:n.value},(0,s.KR)(t.default))}})},9992:(e,t,n)=>{"use strict";n.d(t,{jO:()=>o,ZP:()=>a});var r=n(3673);const i={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},s=Object.keys(i),o={align:{type:String,validator:e=>s.includes(e)}};function a(e){return(0,r.Fl)((()=>{const t=void 0===e.align?!0===e.vertical?"stretch":"left":e.align;return`${!0===e.vertical?"items":"justify"}-${i[t]}`}))}},2236:(e,t,n)=>{"use strict";n.d(t,{S:()=>i,Z:()=>s});var r=n(3673);const i={dark:{type:Boolean,default:null}};function s(e,t){return(0,r.Fl)((()=>null===e.dark?t.dark.isActive:e.dark))}},69:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(3673),i=n(6583);function s(e,t,n){let s;function o(){void 0!==s&&(i.Z.remove(s),s=void 0)}return(0,r.Jd)((()=>{!0===e.value&&o()})),{removeFromHistory:o,addToHistory(){s={condition:()=>!0===n.value,handler:t},i.Z.add(s)}}}},3628:(e,t,n)=>{"use strict";n.d(t,{vr:()=>s,gH:()=>o,ZP:()=>a});var r=n(3673),i=n(7445);const s={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},o=["before-show","show","before-hide","hide"];function a({showing:e,canShow:t,hideOnRouteChange:n,handleShow:s,handleHide:o,processOnMount:a}){const c=(0,r.FN)(),{props:l,emit:u,proxy:h}=c;let d;function f(t){!0===e.value?g(t):p(t)}function p(e){if(!0===l.disable||void 0!==e&&!0===e.qAnchorHandled||void 0!==t&&!0!==t(e))return;const n=void 0!==l["onUpdate:modelValue"];!0===n&&(u("update:modelValue",!0),d=e,(0,r.Y3)((()=>{d===e&&(d=void 0)}))),null!==l.modelValue&&!1!==n||m(e)}function m(t){!0!==e.value&&(e.value=!0,u("before-show",t),void 0!==s?s(t):u("show",t))}function g(e){if(!0===l.disable)return;const t=void 0!==l["onUpdate:modelValue"];!0===t&&(u("update:modelValue",!1),d=e,(0,r.Y3)((()=>{d===e&&(d=void 0)}))),null!==l.modelValue&&!1!==t||v(e)}function v(t){!1!==e.value&&(e.value=!1,u("before-hide",t),void 0!==o?o(t):u("hide",t))}function y(t){if(!0===l.disable&&!0===t)void 0!==l["onUpdate:modelValue"]&&u("update:modelValue",!1);else if(!0===t!==e.value){const e=!0===t?m:v;e(d)}}(0,r.YP)((()=>l.modelValue),y),void 0!==n&&!0===(0,i.Rb)(c)&&(0,r.YP)((()=>h.$route.fullPath),(()=>{!0===n.value&&!0===e.value&&g()})),!0===a&&(0,r.bv)((()=>{y(l.modelValue)}));const w={show:p,hide:g,toggle:f};return Object.assign(h,w),w}},6027:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>b,vZ:()=>g,K6:()=>w,t6:()=>y});var r=n(3673),i=n(1959),s=n(8880),o=n(4688),a=n(908),c=n(6104),l=n(4716),u=n(9725);function h(e){const t=[.06,6,50];return"string"===typeof e&&e.length&&e.split(":").forEach(((e,n)=>{const r=parseFloat(e);r&&(t[n]=r)})),t}const d=(0,a.f)({name:"touch-swipe",beforeMount(e,{value:t,arg:n,modifiers:r}){if(!0!==r.mouse&&!0!==o.Lp.has.touch)return;const i=!0===r.mouseCapture?"Capture":"",s={handler:t,sensitivity:h(n),direction:(0,c.R)(r),noop:l.ZT,mouseStart(e){(0,c.n)(e,s)&&(0,l.du)(e)&&((0,l.M0)(s,"temp",[[document,"mousemove","move",`notPassive${i}`],[document,"mouseup","end","notPassiveCapture"]]),s.start(e,!0))},touchStart(e){if((0,c.n)(e,s)){const t=e.target;(0,l.M0)(s,"temp",[[t,"touchmove","move","notPassiveCapture"],[t,"touchcancel","end","notPassiveCapture"],[t,"touchend","end","notPassiveCapture"]]),s.start(e)}},start(t,n){!0===o.Lp.is.firefox&&(0,l.Jf)(e,!0);const r=(0,l.FK)(t);s.event={x:r.left,y:r.top,time:Date.now(),mouse:!0===n,dir:!1}},move(e){if(void 0===s.event)return;if(!1!==s.event.dir)return void(0,l.NS)(e);const t=Date.now()-s.event.time;if(0===t)return;const n=(0,l.FK)(e),r=n.left-s.event.x,i=Math.abs(r),o=n.top-s.event.y,a=Math.abs(o);if(!0!==s.event.mouse){if(i<s.sensitivity[1]&&a<s.sensitivity[1])return void s.end(e)}else if(i<s.sensitivity[2]&&a<s.sensitivity[2])return;const c=i/t,h=a/t;!0===s.direction.vertical&&i<a&&i<100&&h>s.sensitivity[0]&&(s.event.dir=o<0?"up":"down"),!0===s.direction.horizontal&&i>a&&a<100&&c>s.sensitivity[0]&&(s.event.dir=r<0?"left":"right"),!0===s.direction.up&&i<a&&o<0&&i<100&&h>s.sensitivity[0]&&(s.event.dir="up"),!0===s.direction.down&&i<a&&o>0&&i<100&&h>s.sensitivity[0]&&(s.event.dir="down"),!0===s.direction.left&&i>a&&r<0&&a<100&&c>s.sensitivity[0]&&(s.event.dir="left"),!0===s.direction.right&&i>a&&r>0&&a<100&&c>s.sensitivity[0]&&(s.event.dir="right"),!1!==s.event.dir?((0,l.NS)(e),!0===s.event.mouse&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),(0,u.M)(),s.styleCleanup=e=>{s.styleCleanup=void 0,document.body.classList.remove("non-selectable");const t=()=>{document.body.classList.remove("no-pointer-events--children")};!0===e?setTimeout(t,50):t()}),s.handler({evt:e,touch:!0!==s.event.mouse,mouse:s.event.mouse,direction:s.event.dir,duration:t,distance:{x:i,y:a}})):s.end(e)},end(t){void 0!==s.event&&((0,l.ul)(s,"temp"),!0===o.Lp.is.firefox&&(0,l.Jf)(e,!1),void 0!==s.styleCleanup&&s.styleCleanup(!0),void 0!==t&&!1!==s.event.dir&&(0,l.NS)(t),s.event=void 0)}};e.__qtouchswipe=s,!0===r.mouse&&(0,l.M0)(s,"main",[[e,"mousedown","mouseStart",`passive${i}`]]),!0===o.Lp.has.touch&&(0,l.M0)(s,"main",[[e,"touchstart","touchStart","passive"+(!0===r.capture?"Capture":"")],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchswipe;void 0!==n&&(t.oldValue!==t.value&&("function"!==typeof t.value&&n.end(),n.handler=t.value),n.direction=(0,c.R)(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;void 0!==t&&((0,l.ul)(t,"main"),(0,l.ul)(t,"temp"),!0===o.Lp.is.firefox&&(0,l.Jf)(e,!1),void 0!==t.styleCleanup&&t.styleCleanup(),delete e.__qtouchswipe)}});n(71);function f(){const e=new Map;return{getCache:function(t,n){return void 0===e[t]?e[t]=n:e[t]},getCacheWithFn:function(t,n){return void 0===e[t]?e[t]=n():e[t]}}}var p=n(7657),m=n(7445);const g={name:{required:!0},disable:Boolean},v={setup(e,{slots:t}){return()=>(0,r.h)("div",{class:"q-panel scroll",role:"tabpanel"},(0,p.KR)(t.default))}},y={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},w=["update:modelValue","before-transition","transition"];function b(){const{props:e,emit:t,proxy:n}=(0,r.FN)(),{getCacheWithFn:o}=f();let a,c;const l=(0,i.iH)(null),u=(0,i.iH)(null);function h(t){const r=!0===e.vertical?"up":"left";N((!0===n.$q.lang.rtl?-1:1)*(t.direction===r?1:-1))}const g=(0,r.Fl)((()=>[[d,h,void 0,{horizontal:!0!==e.vertical,vertical:e.vertical,mouse:!0}]])),y=(0,r.Fl)((()=>e.transitionPrev||"slide-"+(!0===e.vertical?"down":"right"))),w=(0,r.Fl)((()=>e.transitionNext||"slide-"+(!0===e.vertical?"up":"left"))),b=(0,r.Fl)((()=>`--q-transition-duration: ${e.transitionDuration}ms`)),_=(0,r.Fl)((()=>"string"===typeof e.modelValue||"number"===typeof e.modelValue?e.modelValue:String(e.modelValue))),I=(0,r.Fl)((()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax}))),T=(0,r.Fl)((()=>void 0!==e.keepAliveInclude||void 0!==e.keepAliveExclude));function E(){N(1)}function k(){N(-1)}function S(e){t("update:modelValue",e)}function x(e){return void 0!==e&&null!==e&&""!==e}function C(e){return a.findIndex((t=>t.props.name===e&&""!==t.props.disable&&!0!==t.props.disable))}function A(){return a.filter((e=>""!==e.props.disable&&!0!==e.props.disable))}function R(t){const n=0!==t&&!0===e.animated&&-1!==l.value?"q-transition--"+(-1===t?y.value:w.value):null;u.value!==n&&(u.value=n)}function N(n,r=l.value){let i=r+n;while(i>-1&&i<a.length){const e=a[i];if(void 0!==e&&""!==e.props.disable&&!0!==e.props.disable)return R(n),c=!0,t("update:modelValue",e.props.name),void setTimeout((()=>{c=!1}));i+=n}!0===e.infinite&&a.length>0&&-1!==r&&r!==a.length&&N(n,-1===n?a.length:-1)}function O(){const t=C(e.modelValue);return l.value!==t&&(l.value=t),!0}function P(){const t=!0===x(e.modelValue)&&O()&&a[l.value];return!0===e.keepAlive?[(0,r.h)(r.Ob,I.value,[(0,r.h)(!0===T.value?o(_.value,(()=>({...v,name:_.value}))):v,{key:_.value,style:b.value},(()=>t))])]:[(0,r.h)("div",{class:"q-panel scroll",style:b.value,key:_.value,role:"tabpanel"},[t])]}function L(){if(0!==a.length)return!0===e.animated?[(0,r.h)(s.uT,{name:u.value},P)]:P()}function D(e){return a=(0,m.Pf)((0,p.KR)(e.default,[])).filter((e=>null!==e.props&&void 0===e.props.slot&&!0===x(e.props.name))),a.length}function F(){return a}return(0,r.YP)((()=>e.modelValue),((e,n)=>{const i=!0===x(e)?C(e):-1;!0!==c&&R(-1===i?0:i<C(n)?-1:1),l.value!==i&&(l.value=i,t("before-transition",e,n),(0,r.Y3)((()=>{t("transition",e,n)})))})),Object.assign(n,{next:E,previous:k,goTo:S}),{panelIndex:l,panelDirectives:g,updatePanelsList:D,updatePanelIndex:O,getPanelContent:L,getEnabledPanels:A,getPanels:F,isValidPanelName:x,keepAliveProps:I,needsUniqueKeepAliveWrapper:T,goToPanelByOffset:N,goToPanel:S,nextPanel:E,previousPanel:k}}},405:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(4716),i=n(8400),s=n(4688);let o,a,c,l,u,h,d=0,f=!1;function p(e){m(e)&&(0,r.NS)(e)}function m(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=(0,r.AZ)(e),n=e.shiftKey&&!e.deltaX,s=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),o=n||s?e.deltaY:e.deltaX;for(let r=0;r<t.length;r++){const e=t[r];if((0,i.QA)(e,s))return s?o<0&&0===e.scrollTop||o>0&&e.scrollTop+e.clientHeight===e.scrollHeight:o<0&&0===e.scrollLeft||o>0&&e.scrollLeft+e.clientWidth===e.scrollWidth}return!0}function g(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function v(e){!0!==f&&(f=!0,requestAnimationFrame((()=>{f=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:r}=document.scrollingElement;void 0!==c&&t===window.innerHeight||(c=n-t,document.scrollingElement.scrollTop=r),r>c&&(document.scrollingElement.scrollTop-=Math.ceil((r-c)/8))})))}function y(e){const t=document.body,n=void 0!==window.visualViewport;if("add"===e){const{overflowY:e,overflowX:c}=window.getComputedStyle(t);o=(0,i.OI)(window),a=(0,i.u3)(window),l=t.style.left,u=t.style.top,t.style.left=`-${o}px`,t.style.top=`-${a}px`,"hidden"!==c&&("scroll"===c||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),"hidden"!==e&&("scroll"===e||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,!0===s.Lp.is.ios&&(!0===n?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",v,r.rU.passiveCapture),window.visualViewport.addEventListener("scroll",v,r.rU.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",g,r.rU.passiveCapture))}!0===s.Lp.is.desktop&&!0===s.Lp.is.mac&&window[`${e}EventListener`]("wheel",p,r.rU.notPassive),"remove"===e&&(!0===s.Lp.is.ios&&(!0===n?(window.visualViewport.removeEventListener("resize",v,r.rU.passiveCapture),window.visualViewport.removeEventListener("scroll",v,r.rU.passiveCapture)):window.removeEventListener("scroll",g,r.rU.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=l,t.style.top=u,window.scrollTo(o,a),c=void 0)}function w(e){let t="add";if(!0===e){if(d++,void 0!==h)return clearTimeout(h),void(h=void 0);if(d>1)return}else{if(0===d)return;if(d--,d>0)return;if(t="remove",!0===s.Lp.is.ios&&!0===s.Lp.is.nativeMobile)return clearTimeout(h),void(h=setTimeout((()=>{y(t),h=void 0}),100))}y(t)}function b(){let e;return{preventBodyScroll(t){t===e||void 0===e&&!0!==t||(e=t,w(t))}}}},7277:(e,t,n)=>{"use strict";n.d(t,{$:()=>d,Z:()=>f});n(5363);var r=n(3673),i=n(4716),s=n(7445);function o(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function a(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function c(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!1===Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function l(e,t){return!0===Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function u(e,t){return!0===Array.isArray(e)?l(e,t):!0===Array.isArray(t)?l(t,e):e===t}function h(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!1===u(e[n],t[n]))return!1;return!0}const d={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function f(e){const t=(0,r.FN)(),{props:n,proxy:l}=t,u=(0,s.Rb)(t),d=(0,r.Fl)((()=>!0!==n.disable&&void 0!==n.href)),f=(0,r.Fl)((()=>!0===u&&!0!==n.disable&&!0!==d.value&&void 0!==n.to&&null!==n.to&&""!==n.to)),p=(0,r.Fl)((()=>{if(!0===f.value)try{return l.$router.resolve(n.to)}catch(e){}return null})),m=(0,r.Fl)((()=>null!==p.value)),g=(0,r.Fl)((()=>!0===d.value||!0===m.value)),v=(0,r.Fl)((()=>"a"===n.type||!0===g.value?"a":n.tag||e||"div")),y=(0,r.Fl)((()=>!0===d.value?{href:n.href,target:n.target}:!0===m.value?{href:p.value.href,target:n.target}:{})),w=(0,r.Fl)((()=>{if(!1===m.value)return null;const{matched:e}=p.value,{length:t}=e,n=e[t-1];if(void 0===n)return-1;const r=l.$route.matched;if(0===r.length)return-1;const i=r.findIndex(a.bind(null,n));if(i>-1)return i;const s=o(e[t-2]);return t>1&&o(n)===s&&r[r.length-1].path!==s?r.findIndex(a.bind(null,e[t-2])):i})),b=(0,r.Fl)((()=>!0===m.value&&w.value>-1&&c(l.$route.params,p.value.params))),_=(0,r.Fl)((()=>!0===b.value&&w.value===l.$route.matched.length-1&&h(l.$route.params,p.value.params))),I=(0,r.Fl)((()=>!0===m.value?!0===_.value?` ${n.exactActiveClass} ${n.activeClass}`:!0===n.exact?"":!0===b.value?` ${n.activeClass}`:"":""));function T(e){return!(!0===n.disable||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||!0!==e.__qNavigate&&!0===e.defaultPrevented||void 0!==e.button&&0!==e.button||"_blank"===n.target)&&((0,i.X$)(e),l.$router[!0===n.replace?"replace":"push"](n.to).catch((()=>{})))}return{hasRouterLink:m,hasHrefLink:d,hasLink:g,linkTag:v,linkRoute:p,linkIsActive:b,linkIsExactActive:_,linkClass:I,linkProps:y,navigateToRouterLink:T}}},2417:(e,t,n)=>{"use strict";n.d(t,{Ok:()=>i,LU:()=>s,ZP:()=>o});var r=n(3673);const i={xs:18,sm:24,md:32,lg:38,xl:46},s={size:String};function o(e,t=i){return(0,r.Fl)((()=>void 0!==e.size?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null))}},416:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(3673);function i(){let e;return(0,r.Jd)((()=>{e=void 0})),{registerTick(t){e=t,(0,r.Y3)((()=>{e===t&&(e(),e=void 0)}))},removeTick(){e=void 0}}}},4955:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(3673);function i(){let e;return(0,r.Jd)((()=>{clearTimeout(e)})),{registerTimeout(t,n){clearTimeout(e),e=setTimeout(t,n)},removeTimeout(){clearTimeout(e)}}}},677:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(908),i=n(4312),s=n(1436);function o(e){if(!1===e)return 0;if(!0===e||void 0===e)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}const a=(0,r.f)({name:"close-popup",beforeMount(e,{value:t}){const n={depth:o(t),handler(t){0!==n.depth&&setTimeout((()=>{const r=(0,i.HW)(e);void 0!==r&&(0,i.S7)(r,t,n.depth)}))},handlerKey(e){!0===(0,s.So)(e,13)&&n.handler(e)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=o(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}})},6489:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(908),i=n(2012),s=n(4716),o=n(1436);function a(e,t=250){let n,r=!1;return function(){return!1===r&&(r=!0,setTimeout((()=>{r=!1}),t),n=e.apply(this,arguments)),n}}function c(e,t,n,r){!0===n.modifiers.stop&&(0,s.sT)(e);const o=n.modifiers.color;let a=n.modifiers.center;a=!0===a||!0===r;const c=document.createElement("span"),l=document.createElement("span"),u=(0,s.FK)(e),{left:h,top:d,width:f,height:p}=t.getBoundingClientRect(),m=Math.sqrt(f*f+p*p),g=m/2,v=(f-m)/2+"px",y=a?v:u.left-h-g+"px",w=(p-m)/2+"px",b=a?w:u.top-d-g+"px";l.className="q-ripple__inner",(0,i.iv)(l,{height:`${m}px`,width:`${m}px`,transform:`translate3d(${y},${b},0) scale3d(.2,.2,1)`,opacity:0}),c.className="q-ripple"+(o?" text-"+o:""),c.setAttribute("dir","ltr"),c.appendChild(l),t.appendChild(c);const _=()=>{c.remove(),clearTimeout(I)};n.abort.push(_);let I=setTimeout((()=>{l.classList.add("q-ripple__inner--enter"),l.style.transform=`translate3d(${v},${w},0) scale3d(1,1,1)`,l.style.opacity=.2,I=setTimeout((()=>{l.classList.remove("q-ripple__inner--enter"),l.classList.add("q-ripple__inner--leave"),l.style.opacity=0,I=setTimeout((()=>{c.remove(),n.abort.splice(n.abort.indexOf(_),1)}),275)}),250)}),50)}function l(e,{modifiers:t,value:n,arg:r,instance:i}){const s=Object.assign({},i.$q.config.ripple,t,n);e.modifiers={early:!0===s.early,stop:!0===s.stop,center:!0===s.center,color:s.color||r,keyCodes:[].concat(s.keyCodes||13)}}const u=(0,r.f)({name:"ripple",beforeMount(e,t){const n={enabled:!1!==t.value,modifiers:{},abort:[],start(t){!0===n.enabled&&!0!==t.qSkipRipple&&(!0===n.modifiers.early?!0===["mousedown","touchstart"].includes(t.type):"click"===t.type)&&c(t,e,n,!0===t.qKeyEvent)},keystart:a((t=>{!0===n.enabled&&!0!==t.qSkipRipple&&!0===(0,o.So)(t,n.modifiers.keyCodes)&&t.type==="key"+(!0===n.modifiers.early?"down":"up")&&c(t,e,n,!0)}),300)};l(n,t),e.__qripple=n,(0,s.M0)(n,"main",[[e,"mousedown","start","passive"],[e,"touchstart","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n.enabled=!1!==t.value,!0===n.enabled&&Object(t.value)===t.value&&l(n,t)}},beforeUnmount(e){const t=e.__qripple;t.abort.forEach((e=>{e()})),(0,s.ul)(t,"main"),delete e._qripple}})},6583:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});n(71);var r=n(4688),i=n(4716);const s=()=>!0;function o(e){return"string"===typeof e&&""!==e&&"/"!==e&&"#/"!==e}function a(e){return!0===e.startsWith("#")&&(e=e.substr(1)),!1===e.startsWith("/")&&(e="/"+e),!0===e.endsWith("/")&&(e=e.substr(0,e.length-1)),"#"+e}function c(e){if(!1===e.backButtonExit)return()=>!1;if("*"===e.backButtonExit)return s;const t=["#/"];return!0===Array.isArray(e.backButtonExit)&&t.push(...e.backButtonExit.filter(o).map(a)),()=>t.includes(window.location.hash)}const l={__history:[],add:i.ZT,remove:i.ZT,install({$q:e}){if(!0===this.__installed)return;const{cordova:t,capacitor:n}=r.Lp.is;if(!0!==t&&!0!==n)return;const i=e.config[!0===t?"cordova":"capacitor"];if(void 0!==i&&!1===i.backButton)return;if(!0===n&&(void 0===window.Capacitor||void 0===window.Capacitor.Plugins.App))return;this.add=e=>{void 0===e.condition&&(e.condition=s),this.__history.push(e)},this.remove=e=>{const t=this.__history.indexOf(e);t>=0&&this.__history.splice(t,1)};const o=c(Object.assign({backButtonExit:!0},i)),a=()=>{if(this.__history.length){const e=this.__history[this.__history.length-1];!0===e.condition()&&(this.__history.pop(),e.handler())}else!0===o()?navigator.app.exitApp():window.history.back()};!0===t?document.addEventListener("deviceready",(()=>{document.addEventListener("backbutton",a,!1)})):window.Capacitor.Plugins.App.addListener("backButton",a)}}},4705:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(2002);const i={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};var s=n(9085);const o=(0,r.Z)({iconMapFn:null,__icons:{}},{set(e,t){const n={...e,rtl:!0===e.rtl};n.set=o.set,Object.assign(o.__icons,n)},install({$q:e,iconSet:t,ssrContext:n}){void 0!==e.config.iconMapFn&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__icons,(0,s.g)(e,"iconMapFn",(()=>this.iconMapFn),(e=>{this.iconMapFn=e})),!0===this.__installed?void 0!==t&&this.set(t):this.set(t||i)}}),a=o},7351:(e,t,n)=>{"use strict";n.d(t,{$:()=>S,Z:()=>A});var r=n(8880),i=n(4688),s=(n(71),n(2002)),o=n(4716),a=n(9405);const c=["sm","md","lg","xl"],{passive:l}=o.rU,u=(0,s.Z)({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:o.ZT,setDebounce:o.ZT,install({$q:e,onSSRHydrated:t}){if(e.screen=this,!0===this.__installed)return void(void 0!==e.config.screen&&(!1===e.config.screen.bodyClasses?document.body.classList.remove(`screen--${this.name}`):this.__update(!0)));const{visualViewport:n}=window,r=n||window,s=document.scrollingElement||document.documentElement,o=void 0===n||!0===i.Lp.is.mobile?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-s.clientWidth,n.height*n.scale+window.innerHeight-s.clientHeight],u=void 0!==e.config.screen&&!0===e.config.screen.bodyClasses;this.__update=e=>{const[t,n]=o();if(n!==this.height&&(this.height=n),t!==this.width)this.width=t;else if(!0!==e)return;let r=this.sizes;this.gt.xs=t>=r.sm,this.gt.sm=t>=r.md,this.gt.md=t>=r.lg,this.gt.lg=t>=r.xl,this.lt.sm=t<r.sm,this.lt.md=t<r.md,this.lt.lg=t<r.lg,this.lt.xl=t<r.xl,this.xs=this.lt.sm,this.sm=!0===this.gt.xs&&!0===this.lt.md,this.md=!0===this.gt.sm&&!0===this.lt.lg,this.lg=!0===this.gt.md&&!0===this.lt.xl,this.xl=this.gt.lg,r=(!0===this.xs?"xs":!0===this.sm&&"sm")||!0===this.md&&"md"||!0===this.lg&&"lg"||"xl",r!==this.name&&(!0===u&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${r}`)),this.name=r)};let h,d={},f=16;this.setSizes=e=>{c.forEach((t=>{void 0!==e[t]&&(d[t]=e[t])}))},this.setDebounce=e=>{f=e};const p=()=>{const e=getComputedStyle(document.body);e.getPropertyValue("--q-size-sm")&&c.forEach((t=>{this.sizes[t]=parseInt(e.getPropertyValue(`--q-size-${t}`),10)})),this.setSizes=e=>{c.forEach((t=>{e[t]&&(this.sizes[t]=e[t])})),this.__update(!0)},this.setDebounce=e=>{void 0!==h&&r.removeEventListener("resize",h,l),h=e>0?(0,a.Z)(this.__update,e):this.__update,r.addEventListener("resize",h,l)},this.setDebounce(f),Object.keys(d).length>0?(this.setSizes(d),d=void 0):this.__update(),!0===u&&"xs"===this.name&&document.body.classList.add("screen--xs")};!0===i.uX.value?t.push(p):p()}});n(5363);const h=(0,s.Z)({isActive:!1,mode:!1},{__media:void 0,set(e){h.mode=e,"auto"===e?(void 0===h.__media&&(h.__media=window.matchMedia("(prefers-color-scheme: dark)"),h.__updateMedia=()=>{h.set("auto")},h.__media.addListener(h.__updateMedia)),e=h.__media.matches):void 0!==h.__media&&(h.__media.removeListener(h.__updateMedia),h.__media=void 0),h.isActive=!0===e,document.body.classList.remove("body--"+(!0===e?"light":"dark")),document.body.classList.add("body--"+(!0===e?"dark":"light"))},toggle(){h.set(!1===h.isActive)},install({$q:e,onSSRHydrated:t,ssrContext:n}){const{dark:r}=e.config;if(e.dark=this,!0===this.__installed&&void 0===r)return;this.isActive=!0===r;const s=void 0!==r&&r;if(!0===i.uX.value){const e=e=>{this.__fromSSR=e},n=this.set;this.set=e,e(s),t.push((()=>{this.set=n,this.set(this.__fromSSR)}))}else this.set(s)}}),d=h;var f=n(6583),p=n(1845),m=n(4398),g=n(1436);function v(e){return!0===e.ios?"ios":!0===e.android?"android":void 0}function y({is:e,has:t,within:n},r){const i=[!0===e.desktop?"desktop":"mobile",(!1===t.touch?"no-":"")+"touch"];if(!0===e.mobile){const t=v(e);void 0!==t&&i.push("platform-"+t)}if(!0===e.nativeMobile){const t=e.nativeMobileWrapper;i.push(t),i.push("native-mobile"),!0!==e.ios||void 0!==r[t]&&!1===r[t].iosStatusBarPadding||i.push("q-ios-padding")}else!0===e.electron?i.push("electron"):!0===e.bex&&i.push("bex");return!0===n.iframe&&i.push("within-iframe"),i}function w(){const e=document.body.className;let t=e;void 0!==i.aG&&(t=t.replace("desktop","platform-ios mobile")),!0===i.Lp.has.touch&&(t=t.replace("no-touch","touch")),!0===i.Lp.within.iframe&&(t+=" within-iframe"),e!==t&&(document.body.className=t)}function b(e){for(const t in e)(0,m.Z)(t,e[t])}const _={install(e){if(!0!==this.__installed){if(!0===i.uX.value)w();else{const{$q:t}=e;void 0!==t.config.brand&&b(t.config.brand);const n=y(i.Lp,t.config);document.body.classList.add.apply(document.body.classList,n)}!0===i.Lp.is.ios&&document.body.addEventListener("touchstart",o.ZT),window.addEventListener("keydown",g.ZK,!0)}}};var I=n(4705),T=n(2547),E=n(5578);const k=[i.ZP,_,d,u,f.Z,p.Z,I.Z];function S(e,t){const n=(0,r.ri)(e);n.config.globalProperties=t.config.globalProperties;const{reload:i,...s}=t._context;return Object.assign(n._context,s),n}function x(e,t){t.forEach((t=>{t.install(e),t.__installed=!0}))}function C(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(T.Ng,n.$q),x(n,k),void 0!==t.components&&Object.values(t.components).forEach((t=>{Object(t)===t&&void 0!==t.name&&e.component(t.name,t)})),void 0!==t.directives&&Object.values(t.directives).forEach((t=>{Object(t)===t&&void 0!==t.name&&e.directive(t.name,t)})),void 0!==t.plugins&&x(n,Object.values(t.plugins).filter((e=>"function"===typeof e.install&&!1===k.includes(e)))),!0===i.uX.value&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach((e=>{e()})),n.$q.onSSRHydrated=()=>{}})}const A=function(e,t={}){const n={version:"2.5.3"};!1===E.Uf?(void 0!==t.config&&Object.assign(E.w6,t.config),n.config={...E.w6},(0,E.tP)()):n.config=t.config||{},C(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})}},1845:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a,F:()=>i});n(5363);var r=n(2002);const i={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>1===e?"1 record selected.":(0===e?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function s(){const e=!0===Array.isArray(navigator.languages)&&navigator.languages.length>0?navigator.languages[0]:navigator.language;if("string"===typeof e)return e.split(/[-_]/).map(((e,t)=>0===t?e.toLowerCase():t>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase())).join("-")}const o=(0,r.Z)({__langPack:{}},{getLocale:s,set(e=i,t){const n={...e,rtl:!0===e.rtl,getLocale:s};{const e=document.documentElement;e.setAttribute("dir",!0===n.rtl?"rtl":"ltr"),e.setAttribute("lang",n.isoName),n.set=o.set,Object.assign(o.__langPack,n),o.props=n,o.isoName=n.isoName,o.nativeName=n.nativeName}},install({$q:e,lang:t,ssrContext:n}){e.lang=o.__langPack,!0===this.__installed?void 0!==t&&this.set(t):this.set(t||i)}}),a=o},6417:(e,t,n)=>{"use strict";n.d(t,{Z:()=>R});var r=n(1959),i=n(3673),s=n(8880),o=n(4554),a=n(2417),c=n(908),l=n(7657);const u=(0,c.L)({name:"QAvatar",props:{...a.LU,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:t}){const n=(0,a.ZP)(e),r=(0,i.Fl)((()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(!0===e.square?" q-avatar--square":!0===e.rounded?" rounded-borders":""))),s=(0,i.Fl)((()=>e.fontSize?{fontSize:e.fontSize}:null));return()=>{const a=void 0!==e.icon?[(0,i.h)(o.Z,{name:e.icon})]:void 0;return(0,i.h)("div",{class:r.value,style:n.value},[(0,i.h)("div",{class:"q-avatar__content row flex-center overflow-hidden",style:s.value},(0,l.pf)(t.default,a))])}}});var h=n(8240),d=n(9754),f=(n(4716),n(8144)),p=n(7351);let m=0;const g={},v={},y={},w={},b=/^\s*$/,_=[],I=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],T=["top-left","top-right","bottom-left","bottom-right"],E={positive:{icon:e=>e.iconSet.type.positive,color:"positive"},negative:{icon:e=>e.iconSet.type.negative,color:"negative"},warning:{icon:e=>e.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:e=>e.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function k(e,t,n){if(!e)return C("parameter required");let i;const s={textColor:"white"};if(!0!==e.ignoreDefaults&&Object.assign(s,g),Object(e)!==e&&(s.type&&Object.assign(s,E[s.type]),e={message:e}),Object.assign(s,E[e.type||s.type],e),"function"===typeof s.icon&&(s.icon=s.icon(t)),s.spinner?(!0===s.spinner&&(s.spinner=d.Z),s.spinner=(0,r.Xl)(s.spinner)):s.spinner=!1,s.meta={hasMedia:Boolean(!1!==s.spinner||s.icon||s.avatar),hasText:x(s.message)||x(s.caption)},s.position){if(!1===I.includes(s.position))return C("wrong position",e)}else s.position="bottom";if(void 0===s.timeout)s.timeout=5e3;else{const t=parseInt(s.timeout,10);if(isNaN(t)||t<0)return C("wrong timeout",e);s.timeout=t}0===s.timeout?s.progress=!1:!0===s.progress&&(s.meta.progressClass="q-notification__progress"+(s.progressClass?` ${s.progressClass}`:""),s.meta.progressStyle={animationDuration:`${s.timeout+1e3}ms`});const o=(!0===Array.isArray(e.actions)?e.actions:[]).concat(!0!==e.ignoreDefaults&&!0===Array.isArray(g.actions)?g.actions:[]).concat(void 0!==E[e.type]&&!0===Array.isArray(E[e.type].actions)?E[e.type].actions:[]),{closeBtn:a}=s;if(a&&o.push({label:"string"===typeof a?a:t.lang.label.close}),s.actions=o.map((({handler:e,noDismiss:t,...n})=>({flat:!0,...n,onClick:"function"===typeof e?()=>{e(),!0!==t&&c()}:()=>{c()}}))),void 0===s.multiLine&&(s.multiLine=s.actions.length>1),Object.assign(s.meta,{class:"q-notification row items-stretch q-notification--"+(!0===s.multiLine?"multi-line":"standard")+(void 0!==s.color?` bg-${s.color}`:"")+(void 0!==s.textColor?` text-${s.textColor}`:"")+(void 0!==s.classes?` ${s.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(!0===s.multiLine?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(!0===s.multiLine?"":" col"),leftClass:!0===s.meta.hasText?"additional":"single",attrs:{role:"alert",...s.attrs}}),!1===s.group?(s.group=void 0,s.meta.group=void 0):(void 0!==s.group&&!0!==s.group||(s.group=[s.message,s.caption,s.multiline].concat(s.actions.map((e=>`${e.label}*${e.icon}`))).join("|")),s.meta.group=s.group+"|"+s.position),0===s.actions.length?s.actions=void 0:s.meta.actionsClass="q-notification__actions row items-center "+(!0===s.multiLine?"justify-end":"col-auto")+(!0===s.meta.hasMedia?" q-notification__actions--with-media":""),void 0!==n){clearTimeout(n.notif.meta.timer),s.meta.uid=n.notif.meta.uid;const e=y[s.position].value.indexOf(n.notif);y[s.position].value[e]=s}else{const t=v[s.meta.group];if(void 0===t){if(s.meta.uid=m++,s.meta.badge=1,-1!==["left","right","center"].indexOf(s.position))y[s.position].value.splice(Math.floor(y[s.position].value.length/2),0,s);else{const e=s.position.indexOf("top")>-1?"unshift":"push";y[s.position].value[e](s)}void 0!==s.group&&(v[s.meta.group]=s)}else{if(clearTimeout(t.meta.timer),void 0!==s.badgePosition){if(!1===T.includes(s.badgePosition))return C("wrong badgePosition",e)}else s.badgePosition="top-"+(s.position.indexOf("left")>-1?"right":"left");s.meta.uid=t.meta.uid,s.meta.badge=t.meta.badge+1,s.meta.badgeClass=`q-notification__badge q-notification__badge--${s.badgePosition}`+(void 0!==s.badgeColor?` bg-${s.badgeColor}`:"")+(void 0!==s.badgeTextColor?` text-${s.badgeTextColor}`:"")+(s.badgeClass?` ${s.badgeClass}`:"");const n=y[s.position].value.indexOf(t);y[s.position].value[n]=v[s.meta.group]=s}}const c=()=>{S(s),i=void 0};return s.timeout>0&&(s.meta.timer=setTimeout((()=>{c()}),s.timeout+1e3)),void 0!==s.group?t=>{void 0!==t?C("trying to update a grouped one which is forbidden",e):c()}:(i={dismiss:c,config:e,notif:s},void 0===n?e=>{if(void 0!==i)if(void 0===e)i.dismiss();else{const n=Object.assign({},i.config,e,{group:!1,position:s.position});k(n,t,i)}}:void Object.assign(n,i))}function S(e){clearTimeout(e.meta.timer);const t=y[e.position].value.indexOf(e);if(-1!==t){void 0!==e.group&&delete v[e.meta.group];const n=_[""+e.meta.uid];if(n){const{width:e,height:t}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=e,n.style.height=t}y[e.position].value.splice(t,1),"function"===typeof e.onDismiss&&e.onDismiss()}}function x(e){return void 0!==e&&null!==e&&!0!==b.test(e)}function C(e,t){return console.error(`Notify: ${e}`,t),!1}function A(){return(0,c.L)({name:"QNotifications",devtools:{hide:!0},setup(){return()=>(0,i.h)("div",{class:"q-notifications"},I.map((e=>(0,i.h)(s.W3,{key:e,class:w[e],tag:"div",name:`q-notification--${e}`},(()=>y[e].value.map((e=>{const t=e.meta,n=[];if(!0===t.hasMedia&&(!1!==e.spinner?n.push((0,i.h)(e.spinner,{class:"q-notification__spinner q-notification__spinner--"+t.leftClass})):e.icon?n.push((0,i.h)(o.Z,{class:"q-notification__icon q-notification__icon--"+t.leftClass,name:e.icon,role:"img"})):e.avatar&&n.push((0,i.h)(u,{class:"q-notification__avatar q-notification__avatar--"+t.leftClass},(()=>(0,i.h)("img",{src:e.avatar,"aria-hidden":"true"}))))),!0===t.hasText){let t;const r={class:"q-notification__message col"};if(!0===e.html)r.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const n=[e.message];t=e.caption?[(0,i.h)("div",n),(0,i.h)("div",{class:"q-notification__caption"},[e.caption])]:n}n.push((0,i.h)("div",r,t))}const r=[(0,i.h)("div",{class:t.contentClass},n)];return!0===e.progress&&r.push((0,i.h)("div",{key:`${t.uid}|p|${t.badge}`,class:t.progressClass,style:t.progressStyle})),void 0!==e.actions&&r.push((0,i.h)("div",{class:t.actionsClass},e.actions.map((e=>(0,i.h)(h.Z,e))))),t.badge>1&&r.push((0,i.h)("div",{key:`${t.uid}|${t.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[t.badge])),(0,i.h)("div",{ref:e=>{_[""+t.uid]=e},key:t.uid,class:t.class,...t.attrs},[(0,i.h)("div",{class:t.wrapperClass},r)])})))))))}})}const R={setDefaults(e){e===Object(e)&&Object.assign(g,e)},registerType(e,t){t===Object(t)&&(E[e]=t)},install({$q:e,parentApp:t}){if(e.notify=this.create=t=>k(t,e),e.notify.setDefaults=this.setDefaults,e.notify.registerType=this.registerType,void 0!==e.config.notify&&this.setDefaults(e.config.notify),!0!==this.__installed){I.forEach((e=>{y[e]=(0,r.iH)([]);const t=!0===["left","center","right"].includes(e)?"center":e.indexOf("top")>-1?"top":"bottom",n=e.indexOf("left")>-1?"start":e.indexOf("right")>-1?"end":"center",i=["left","right"].includes(e)?`items-${"left"===e?"start":"end"} justify-center`:"center"===e?"flex-center":`items-${n}`;w[e]=`q-notifications__list q-notifications__list--${t} fixed column no-wrap ${i}`}));const e=(0,f.q_)("q-notify");(0,p.$)(A(),t).mount(e)}}}},4688:(e,t,n)=>{"use strict";n.d(t,{uX:()=>s,aG:()=>o,Lp:()=>m,ZP:()=>v});var r=n(1959),i=n(9085);const s=(0,r.iH)(!1);let o,a=!1;function c(e,t){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:t[0]||""}}function l(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const u="ontouchstart"in window||window.navigator.maxTouchPoints>0;function h(e){o={is:{...e}},delete e.mac,delete e.desktop;const t=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(e,{mobile:!0,ios:!0,platform:t,[t]:!0})}function d(e){const t=e.toLowerCase(),n=l(t),r=c(t,n),i={};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.versionNumber,10)),r.platform&&(i[r.platform]=!0);const s=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];return!0===s||t.indexOf("mobile")>-1?(i.mobile=!0,i.edga||i.edgios?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios&&(i.firefox=!0,r.browser="firefox")):i.desktop=!0,(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),(i.chrome||i.opr||i.safari||i.vivaldi||!0===i.mobile&&!0!==i.ios&&!0!==s)&&(i.webkit=!0),i.edg&&(r.browser="edgechromium",i.edgeChromium=!0),(i.safari&&i.blackberry||i.bb)&&(r.browser="blackberry",i.blackberry=!0),i.safari&&i.playbook&&(r.browser="playbook",i.playbook=!0),i.opr&&(r.browser="opera",i.opera=!0),i.safari&&i.android&&(r.browser="android",i.android=!0),i.safari&&i.kindle&&(r.browser="kindle",i.kindle=!0),i.safari&&i.silk&&(r.browser="silk",i.silk=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),i.name=r.browser,i.platform=r.platform,t.indexOf("electron")>-1?i.electron=!0:document.location.href.indexOf("-extension://")>-1?i.bex=!0:(void 0!==window.Capacitor?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):void 0===window._cordovaNative&&void 0===window.cordova||(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),!0===u&&!0===i.mac&&(!0===i.desktop&&!0===i.safari||!0===i.nativeMobile&&!0!==i.android&&!0!==i.ios&&!0!==i.ipad)&&h(i)),i}const f=navigator.userAgent||navigator.vendor||window.opera,p={has:{touch:!1,webStorage:!1},within:{iframe:!1}},m={userAgent:f,is:d(f),has:{touch:u},within:{iframe:window.self!==window.top}},g={install(e){const{$q:t}=e;!0===s.value?(e.onSSRHydrated.push((()=>{s.value=!1,Object.assign(t.platform,m),o=void 0})),t.platform=(0,r.qj)(this)):t.platform=this}};{let e;(0,i.g)(m.has,"webStorage",(()=>{if(void 0!==e)return e;try{if(window.localStorage)return e=!0,!0}catch(t){}return e=!1,!1})),a=!0===m.is.ios&&-1===window.navigator.vendor.toLowerCase().indexOf("apple"),!0===s.value?Object.assign(g,m,o,p):Object.assign(g,m)}const v=g},9405:(e,t,n)=>{"use strict";function r(e,t=250,n){let r;function i(){const i=arguments,s=()=>{r=void 0,!0!==n&&e.apply(this,i)};clearTimeout(r),!0===n&&void 0===r&&e.apply(this,i),r=setTimeout(s,t)}return i.cancel=()=>{clearTimeout(r)},i}n.d(t,{Z:()=>r})},2012:(e,t,n)=>{"use strict";n.d(t,{iv:()=>i,sb:()=>s,mY:()=>o});var r=n(1959);function i(e,t){const n=e.style;for(const r in t)n[r]=t[r]}function s(e){if(void 0===e||null===e)return;if("string"===typeof e)try{return document.querySelector(e)||void 0}catch(n){return}const t=!0===(0,r.dq)(e)?e.value:e;return t?t.$el||t:void 0}function o(e,t){if(void 0===e||null===e||!0===e.contains(t))return!0;for(let n=e.nextElementSibling;null!==n;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}},4716:(e,t,n)=>{"use strict";n.d(t,{rU:()=>r,ZT:()=>i,du:()=>s,FK:()=>o,AZ:()=>a,sT:()=>c,X$:()=>l,NS:()=>u,Jf:()=>h,M0:()=>d,ul:()=>f});n(71);const r={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(r,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch(p){}function i(){}function s(e){return 0===e.button}function o(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function a(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const t=[];let n=e.target;while(n){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t;n=n.parentElement}}function c(e){e.stopPropagation()}function l(e){!1!==e.cancelable&&e.preventDefault()}function u(e){!1!==e.cancelable&&e.preventDefault(),e.stopPropagation()}function h(e,t){if(void 0===e||!0===t&&!0===e.__dragPrevented)return;const n=!0===t?e=>{e.__dragPrevented=!0,e.addEventListener("dragstart",l,r.notPassiveCapture)}:e=>{delete e.__dragPrevented,e.removeEventListener("dragstart",l,r.notPassiveCapture)};e.querySelectorAll("a, img").forEach(n)}function d(e,t,n){const i=`__q_${t}_evt`;e[i]=void 0!==e[i]?e[i].concat(n):n,n.forEach((t=>{t[0].addEventListener(t[1],e[t[2]],r[t[3]])}))}function f(e,t){const n=`__q_${t}_evt`;void 0!==e[n]&&(e[n].forEach((t=>{t[0].removeEventListener(t[1],e[t[2]],r[t[3]])})),e[n]=void 0)}},2130:(e,t,n)=>{"use strict";n.d(t,{kC:()=>r,vX:()=>i,vk:()=>s});function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}function i(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function s(e,t=2,n="0"){if(void 0===e||null===e)return e;const r=""+e;return r.length>=t?r:new Array(t-r.length+1).join(n)+r}},908:(e,t,n)=>{"use strict";n.d(t,{L:()=>s,f:()=>o});var r=n(1959),i=n(3673);const s=e=>(0,r.Xl)((0,i.aZ)(e)),o=e=>(0,r.Xl)(e)},2002:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(1959),i=n(9085);const s=(e,t)=>{const n=(0,r.qj)(e);for(const r in e)(0,i.g)(t,r,(()=>n[r]),(e=>{n[r]=e}));return t}},230:(e,t,n)=>{"use strict";n.d(t,{YX:()=>o,xF:()=>a,jd:()=>c,fP:()=>l});let r=[],i=[];function s(e){i=i.filter((t=>t!==e))}function o(e){s(e),i.push(e)}function a(e){s(e),0===i.length&&r.length>0&&(r[r.length-1](),r=[])}function c(e){0===i.length?e():r.push(e)}function l(e){r=r.filter((t=>t!==e))}},5578:(e,t,n)=>{"use strict";n.d(t,{w6:()=>r,Uf:()=>i,tP:()=>s});const r={};let i=!1;function s(){i=!0}},8144:(e,t,n)=>{"use strict";n.d(t,{q_:()=>o,pB:()=>a});var r=n(5578);const i=[];let s=document.body;function o(e){const t=document.createElement("div");if(void 0!==e&&(t.id=e),void 0!==r.w6.globalNodes){const e=r.w6.globalNodes["class"];void 0!==e&&(t.className=e)}return s.appendChild(t),i.push(t),t}function a(e){i.splice(i.indexOf(e),1),e.remove()}},9085:(e,t,n)=>{"use strict";function r(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0})}n.d(t,{g:()=>r})},1436:(e,t,n)=>{"use strict";n.d(t,{ZK:()=>i,Wm:()=>s,So:()=>o});let r=!1;function i(e){r=!0===e.isComposing}function s(e){return!0===r||e!==Object(e)||!0===e.isComposing||!0===e.qKeyEvent}function o(e,t){return!0!==s(e)&&[].concat(t).includes(e.keyCode)}},4312:(e,t,n)=>{"use strict";n.d(t,{wN:()=>i,HW:()=>s,S7:()=>a});var r=n(7445);const i=[];function s(e){return i.find((t=>null!==t.__qPortalInnerRef.value&&t.__qPortalInnerRef.value.contains(e)))}function o(e,t){do{if("QMenu"===e.$options.name){if(e.hide(t),!0===e.$props.separateClosePopup)return(0,r.Kq)(e)}else if(void 0!==e.__qPortalInnerRef){const n=(0,r.Kq)(e);return void 0!==n&&"QPopupProxy"===n.$options.name?(e.hide(t),n):e}e=(0,r.Kq)(e)}while(void 0!==e&&null!==e)}function a(e,t,n){while(0!==n&&void 0!==e&&null!==e){if(void 0!==e.__qPortalInnerRef){if(n--,"QMenu"===e.$options.name){e=o(e,t);continue}e.hide(t)}e=(0,r.Kq)(e)}}},7657:(e,t,n)=>{"use strict";n.d(t,{KR:()=>i,Bl:()=>s,vs:()=>o,pf:()=>a,Jl:()=>c});var r=n(3673);function i(e,t){return void 0!==e&&e()||t}function s(e,t){if(void 0!==e){const t=e();if(void 0!==t&&null!==t)return t.slice()}return t}function o(e,t){return void 0!==e?t.concat(e()):t}function a(e,t){return void 0===e?t:void 0!==t?t.concat(e()):e()}function c(e,t,n,i,s,o){t.key=i+s;const a=(0,r.h)(e,t,n);return!0===s?(0,r.wy)(a,o()):a}},9725:(e,t,n)=>{"use strict";n.d(t,{M:()=>i});var r=n(4688);function i(){if(void 0!==window.getSelection){const e=window.getSelection();void 0!==e.empty?e.empty():void 0!==e.removeAllRanges&&(e.removeAllRanges(),!0!==r.ZP.is.mobile&&e.addRange(document.createRange()))}else void 0!==document.selection&&document.selection.empty()}},2547:(e,t,n)=>{"use strict";n.d(t,{Ng:()=>r,YE:()=>i,Mw:()=>s,vh:()=>o,Nd:()=>a});const r="_q_",i="_q_l_",s="_q_pc_",o="_q_fo_",a="_q_tabs_"},6104:(e,t,n)=>{"use strict";n.d(t,{R:()=>s,n:()=>o});n(71);const r={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},i=Object.keys(r);function s(e){const t={};for(const n of i)!0===e[n]&&(t[n]=!0);return 0===Object.keys(t).length?r:(!0===t.horizontal?t.left=t.right=!0:!0===t.left&&!0===t.right&&(t.horizontal=!0),!0===t.vertical?t.up=t.down=!0:!0===t.up&&!0===t.down&&(t.vertical=!0),!0===t.horizontal&&!0===t.vertical&&(t.all=!0),t)}function o(e,t){return void 0===t.event&&void 0!==e.target&&!0!==e.target.draggable&&"function"===typeof t.handler&&"INPUT"!==e.target.nodeName.toUpperCase()&&(void 0===e.qClonedBy||-1===e.qClonedBy.indexOf(t.uid))}r.all=!0},7445:(e,t,n)=>{"use strict";n.d(t,{Kq:()=>r,Pf:()=>s,Rb:()=>o});n(71);function r(e){if(Object(e.$parent)===e.$parent)return e.$parent;e=e.$.parent;while(Object(e)===e){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function i(e,t){"symbol"===typeof t.type?!0===Array.isArray(t.children)&&t.children.forEach((t=>{i(e,t)})):e.add(t)}function s(e){const t=new Set;return e.forEach((e=>{i(t,e)})),Array.from(t)}function o(e){return void 0!==e.appContext.config.globalProperties.$router}},8400:(e,t,n)=>{"use strict";n.d(t,{b0:()=>s,u3:()=>o,OI:()=>a,np:()=>l,QA:()=>u});var r=n(2012);const i=[null,document,document.body,document.scrollingElement,document.documentElement];function s(e,t){let n=(0,r.sb)(t);if(void 0===n){if(void 0===e||null===e)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return i.includes(n)?window:n}function o(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function a(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let c;function l(){if(void 0!==c)return c;const e=document.createElement("p"),t=document.createElement("div");(0,r.iv)(e,{width:"100%",height:"200px"}),(0,r.iv)(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let i=e.offsetWidth;return n===i&&(i=t.clientWidth),t.remove(),c=n-i,c}function u(e,t=!0){return!(!e||e.nodeType!==Node.ELEMENT_NODE)&&(t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"])))}},4398:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});n(6701);function r(e,t,n=document.body){if("string"!==typeof e)throw new TypeError("Expected a string as propName");if("string"!==typeof t)throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}},9592:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7351),i=n(1845),s=n(4705);const o={version:"2.5.3",install:r.Z,lang:i.Z,iconSet:s.Z}},7083:e=>{e.exports.xr=function(e){return e},e.exports.BC=function(e){return e}},392:(e,t,n)=>{var r=n(7358),i=n(419),s=n(3353),o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not a function")}},2722:(e,t,n)=>{var r=n(7358),i=n(7593),s=n(3353),o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not a constructor")}},8248:(e,t,n)=>{var r=n(7358),i=n(419),s=r.String,o=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw o("Can't set "+s(e)+" as a prototype")}},2852:(e,t,n)=>{var r=n(854),i=n(1074),s=n(928),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},6412:(e,t,n)=>{"use strict";var r=n(1021).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},2827:(e,t,n)=>{var r=n(7358),i=n(7673),s=r.TypeError;e.exports=function(e,t){if(i(t,e))return e;throw s("Incorrect invocation")}},7950:(e,t,n)=>{var r=n(7358),i=n(776),s=r.String,o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not an object")}},6257:e=>{e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},683:(e,t,n)=>{"use strict";var r,i,s,o=n(6257),a=n(9631),c=n(7358),l=n(419),u=n(776),h=n(7322),d=n(5976),f=n(3353),p=n(1904),m=n(298),g=n(928).f,v=n(7673),y=n(4945),w=n(6184),b=n(854),_=n(6862),I=c.Int8Array,T=I&&I.prototype,E=c.Uint8ClampedArray,k=E&&E.prototype,S=I&&y(I),x=T&&y(T),C=Object.prototype,A=c.TypeError,R=b("toStringTag"),N=_("TYPED_ARRAY_TAG"),O=_("TYPED_ARRAY_CONSTRUCTOR"),P=o&&!!w&&"Opera"!==d(c.opera),L=!1,D={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},M=function(e){if(!u(e))return!1;var t=d(e);return"DataView"===t||h(D,t)||h(F,t)},q=function(e){if(!u(e))return!1;var t=d(e);return h(D,t)||h(F,t)},U=function(e){if(q(e))return e;throw A("Target is not a typed array")},V=function(e){if(l(e)&&(!w||v(S,e)))return e;throw A(f(e)+" is not a typed array constructor")},j=function(e,t,n,r){if(a){if(n)for(var i in D){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(l){}}}x[e]&&!n||m(x,e,n?t:P&&T[e]||t,r)}},B=function(e,t,n){var r,i;if(a){if(w){if(n)for(r in D)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(S[e]&&!n)return;try{return m(S,e,n?t:P&&S[e]||t)}catch(s){}}for(r in D)i=c[r],!i||i[e]&&!n||m(i,e,t)}};for(r in D)i=c[r],s=i&&i.prototype,s?p(s,O,i):P=!1;for(r in F)i=c[r],s=i&&i.prototype,s&&p(s,O,i);if((!P||!l(S)||S===Function.prototype)&&(S=function(){throw A("Incorrect invocation")},P))for(r in D)c[r]&&w(c[r],S);if((!P||!x||x===C)&&(x=S.prototype,P))for(r in D)c[r]&&w(c[r].prototype,x);if(P&&y(k)!==x&&w(k,x),a&&!h(x,R))for(r in L=!0,g(x,R,{get:function(){return u(this)?this[N]:void 0}}),D)c[r]&&p(c[r],N,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:P,TYPED_ARRAY_CONSTRUCTOR:O,TYPED_ARRAY_TAG:L&&N,aTypedArray:U,aTypedArrayConstructor:V,exportTypedArrayMethod:j,exportTypedArrayStaticMethod:B,isView:M,isTypedArray:q,TypedArray:S,TypedArrayPrototype:x}},62:(e,t,n)=>{"use strict";var r=n(7358),i=n(1890),s=n(9631),o=n(6257),a=n(7961),c=n(1904),l=n(9833),u=n(6400),h=n(2827),d=n(1860),f=n(4068),p=n(833),m=n(8830),g=n(4945),v=n(6184),y=n(1454).f,w=n(928).f,b=n(5786),_=n(5771),I=n(1061),T=n(7624),E=a.PROPER,k=a.CONFIGURABLE,S=T.get,x=T.set,C="ArrayBuffer",A="DataView",R="prototype",N="Wrong length",O="Wrong index",P=r[C],L=P,D=L&&L[R],F=r[A],M=F&&F[R],q=Object.prototype,U=r.Array,V=r.RangeError,j=i(b),B=i([].reverse),$=m.pack,z=m.unpack,H=function(e){return[255&e]},K=function(e){return[255&e,e>>8&255]},W=function(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]},G=function(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]},Y=function(e){return $(e,23,4)},J=function(e){return $(e,52,8)},Q=function(e,t){w(e[R],t,{get:function(){return S(this)[t]}})},Z=function(e,t,n,r){var i=p(n),s=S(e);if(i+t>s.byteLength)throw V(O);var o=S(s.buffer).bytes,a=i+s.byteOffset,c=_(o,a,a+t);return r?c:B(c)},X=function(e,t,n,r,i,s){var o=p(n),a=S(e);if(o+t>a.byteLength)throw V(O);for(var c=S(a.buffer).bytes,l=o+a.byteOffset,u=r(+i),h=0;h<t;h++)c[l+h]=u[s?h:t-h-1]};if(o){var ee=E&&P.name!==C;if(u((function(){P(1)}))&&u((function(){new P(-1)}))&&!u((function(){return new P,new P(1.5),new P(NaN),ee&&!k})))ee&&k&&c(P,"name",C);else{L=function(e){return h(this,D),new P(p(e))},L[R]=D;for(var te,ne=y(P),re=0;ne.length>re;)(te=ne[re++])in L||c(L,te,P[te]);D.constructor=L}v&&g(M)!==q&&v(M,q);var ie=new F(new L(2)),se=i(M.setInt8);ie.setInt8(0,2147483648),ie.setInt8(1,2147483649),!ie.getInt8(0)&&ie.getInt8(1)||l(M,{setInt8:function(e,t){se(this,e,t<<24>>24)},setUint8:function(e,t){se(this,e,t<<24>>24)}},{unsafe:!0})}else L=function(e){h(this,D);var t=p(e);x(this,{bytes:j(U(t),0),byteLength:t}),s||(this.byteLength=t)},D=L[R],F=function(e,t,n){h(this,M),h(e,D);var r=S(e).byteLength,i=d(t);if(i<0||i>r)throw V("Wrong offset");if(n=void 0===n?r-i:f(n),i+n>r)throw V(N);x(this,{buffer:e,byteLength:n,byteOffset:i}),s||(this.buffer=e,this.byteLength=n,this.byteOffset=i)},M=F[R],s&&(Q(L,"byteLength"),Q(F,"buffer"),Q(F,"byteLength"),Q(F,"byteOffset")),l(M,{getInt8:function(e){return Z(this,1,e)[0]<<24>>24},getUint8:function(e){return Z(this,1,e)[0]},getInt16:function(e){var t=Z(this,2,e,arguments.length>1?arguments[1]:void 0);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=Z(this,2,e,arguments.length>1?arguments[1]:void 0);return t[1]<<8|t[0]},getInt32:function(e){return G(Z(this,4,e,arguments.length>1?arguments[1]:void 0))},getUint32:function(e){return G(Z(this,4,e,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(e){return z(Z(this,4,e,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(e){return z(Z(this,8,e,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(e,t){X(this,1,e,H,t)},setUint8:function(e,t){X(this,1,e,H,t)},setInt16:function(e,t){X(this,2,e,K,t,arguments.length>2?arguments[2]:void 0)},setUint16:function(e,t){X(this,2,e,K,t,arguments.length>2?arguments[2]:void 0)},setInt32:function(e,t){X(this,4,e,W,t,arguments.length>2?arguments[2]:void 0)},setUint32:function(e,t){X(this,4,e,W,t,arguments.length>2?arguments[2]:void 0)},setFloat32:function(e,t){X(this,4,e,Y,t,arguments.length>2?arguments[2]:void 0)},setFloat64:function(e,t){X(this,8,e,J,t,arguments.length>2?arguments[2]:void 0)}});I(L,C),I(F,A),e.exports={ArrayBuffer:L,DataView:F}},5786:(e,t,n)=>{"use strict";var r=n(7475),i=n(1801),s=n(6042);e.exports=function(e){var t=r(this),n=s(t),o=arguments.length,a=i(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,l=void 0===c?n:i(c,n);while(l>a)t[a++]=e;return t}},2029:(e,t,n)=>{"use strict";var r=n(7358),i=n(422),s=n(3577),o=n(7475),a=n(9234),c=n(1558),l=n(7593),u=n(6042),h=n(6496),d=n(2151),f=n(7143),p=r.Array;e.exports=function(e){var t=o(e),n=l(this),r=arguments.length,m=r>1?arguments[1]:void 0,g=void 0!==m;g&&(m=i(m,r>2?arguments[2]:void 0));var v,y,w,b,_,I,T=f(t),E=0;if(!T||this==p&&c(T))for(v=u(t),y=n?new this(v):p(v);v>E;E++)I=g?m(t[E],E):t[E],h(y,E,I);else for(b=d(t,T),_=b.next,y=n?new this:[];!(w=s(_,b)).done;E++)I=g?a(b,m,[w.value,E],!0):w.value,h(y,E,I);return y.length=E,y}},6963:(e,t,n)=>{var r=n(7120),i=n(1801),s=n(6042),o=function(e){return function(t,n,o){var a,c=r(t),l=s(c),u=i(o,l);if(e&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},2099:(e,t,n)=>{var r=n(422),i=n(1890),s=n(2985),o=n(7475),a=n(6042),c=n(6340),l=i([].push),u=function(e){var t=1==e,n=2==e,i=3==e,u=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,m,g,v){for(var y,w,b=o(p),_=s(b),I=r(m,g),T=a(_),E=0,k=v||c,S=t?k(p,T):n||d?k(p,0):void 0;T>E;E++)if((f||E in _)&&(y=_[E],w=I(y,E,b),e))if(t)S[E]=w;else if(w)switch(e){case 3:return!0;case 5:return y;case 6:return E;case 2:l(S,y)}else switch(e){case 4:return!1;case 7:l(S,y)}return h?-1:i||u?u:S}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},5771:(e,t,n)=>{var r=n(7358),i=n(1801),s=n(6042),o=n(6496),a=r.Array,c=Math.max;e.exports=function(e,t,n){for(var r=s(e),l=i(t,r),u=i(void 0===n?r:n,r),h=a(c(u-l,0)),d=0;l<u;l++,d++)o(h,d,e[l]);return h.length=d,h}},6534:(e,t,n)=>{var r=n(5771),i=Math.floor,s=function(e,t){var n=e.length,c=i(n/2);return n<8?o(e,t):a(e,s(r(e,0,c),t),s(r(e,c),t),t)},o=function(e,t){var n,r,i=e.length,s=1;while(s<i){r=s,n=e[s];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==s++&&(e[r]=n)}return e},a=function(e,t,n,r){var i=t.length,s=n.length,o=0,a=0;while(o<i||a<s)e[o+a]=o<i&&a<s?r(t[o],n[a])<=0?t[o++]:n[a++]:o<i?t[o++]:n[a++];return e};e.exports=s},330:(e,t,n)=>{var r=n(7358),i=n(6894),s=n(7593),o=n(776),a=n(854),c=a("species"),l=r.Array;e.exports=function(e){var t;return i(e)&&(t=e.constructor,s(t)&&(t===l||i(t.prototype))?t=void 0:o(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?l:t}},6340:(e,t,n)=>{var r=n(330);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},9234:(e,t,n)=>{var r=n(7950),i=n(8105);e.exports=function(e,t,n,s){try{return s?t(r(n)[0],n[1]):t(n)}catch(o){i(e,"throw",o)}}},8047:(e,t,n)=>{var r=n(854),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},5173:(e,t,n)=>{var r=n(1890),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},5976:(e,t,n)=>{var r=n(7358),i=n(5705),s=n(419),o=n(5173),a=n(854),c=a("toStringTag"),l=r.Object,u="Arguments"==o(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=i?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=l(e),c))?n:u?o(t):"Object"==(r=o(t))&&s(t.callee)?"Arguments":r}},767:(e,t,n)=>{var r=n(1890),i=r("".replace),s=function(e){return String(Error(e).stack)}("zxcasd"),o=/\n\s*at [^:]*:[^\n]*/,a=o.test(s);e.exports=function(e,t){if(a&&"string"==typeof e)while(t--)e=i(e,o,"");return e}},8438:(e,t,n)=>{var r=n(7322),i=n(7764),s=n(2404),o=n(928);e.exports=function(e,t,n){for(var a=i(t),c=o.f,l=s.f,u=0;u<a.length;u++){var h=a[u];r(e,h)||n&&r(n,h)||c(e,h,l(t,h))}}},123:(e,t,n)=>{var r=n(6400);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},5912:(e,t,n)=>{"use strict";var r=n(4848).IteratorPrototype,i=n(1074),s=n(5442),o=n(1061),a=n(2184),c=function(){return this};e.exports=function(e,t,n,l){var u=t+" Iterator";return e.prototype=i(r,{next:s(+!l,n)}),o(e,u,!1,!0),a[u]=c,e}},1904:(e,t,n)=>{var r=n(9631),i=n(928),s=n(5442);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},5442:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},6496:(e,t,n)=>{"use strict";var r=n(8618),i=n(928),s=n(5442);e.exports=function(e,t,n){var o=r(t);o in e?i.f(e,o,s(0,n)):e[o]=n}},8810:(e,t,n)=>{"use strict";var r=n(8934),i=n(3577),s=n(6692),o=n(7961),a=n(419),c=n(5912),l=n(4945),u=n(6184),h=n(1061),d=n(1904),f=n(298),p=n(854),m=n(2184),g=n(4848),v=o.PROPER,y=o.CONFIGURABLE,w=g.IteratorPrototype,b=g.BUGGY_SAFARI_ITERATORS,_=p("iterator"),I="keys",T="values",E="entries",k=function(){return this};e.exports=function(e,t,n,o,p,g,S){c(n,t,o);var x,C,A,R=function(e){if(e===p&&D)return D;if(!b&&e in P)return P[e];switch(e){case I:return function(){return new n(this,e)};case T:return function(){return new n(this,e)};case E:return function(){return new n(this,e)}}return function(){return new n(this)}},N=t+" Iterator",O=!1,P=e.prototype,L=P[_]||P["@@iterator"]||p&&P[p],D=!b&&L||R(p),F="Array"==t&&P.entries||L;if(F&&(x=l(F.call(new e)),x!==Object.prototype&&x.next&&(s||l(x)===w||(u?u(x,w):a(x[_])||f(x,_,k)),h(x,N,!0,!0),s&&(m[N]=k))),v&&p==T&&L&&L.name!==T&&(!s&&y?d(P,"name",T):(O=!0,D=function(){return i(L,this)})),p)if(C={values:R(T),keys:g?D:R(I),entries:R(E)},S)for(A in C)(b||O||!(A in P))&&f(P,A,C[A]);else r({target:t,proto:!0,forced:b||O},C);return s&&!S||P[_]===D||f(P,_,D,{name:p}),m[t]=D,C}},9631:(e,t,n)=>{var r=n(6400);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},5354:(e,t,n)=>{var r=n(7358),i=n(776),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},4296:e=>{e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8753:(e,t,n)=>{var r=n(5354),i=r("span").classList,s=i&&i.constructor&&i.constructor.prototype;e.exports=s===Object.prototype?void 0:s},1544:(e,t,n)=>{var r=n(9173),i=r.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},8979:(e,t,n)=>{var r=n(9173);e.exports=/MSIE|Trident/.test(r)},9173:(e,t,n)=>{var r=n(9694);e.exports=r("navigator","userAgent")||""},5068:(e,t,n)=>{var r,i,s=n(7358),o=n(9173),a=s.process,c=s.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},1513:(e,t,n)=>{var r=n(9173),i=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},2875:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6429:(e,t,n)=>{var r=n(6400),i=n(5442);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},8934:(e,t,n)=>{var r=n(7358),i=n(2404).f,s=n(1904),o=n(298),a=n(3534),c=n(8438),l=n(4389);e.exports=function(e,t){var n,u,h,d,f,p,m=e.target,g=e.global,v=e.stat;if(u=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,u)for(h in t){if(f=t[h],e.noTargetGet?(p=i(u,h),d=p&&p.value):d=u[h],n=l(g?h:m+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,e)}}},6400:e=>{e.exports=function(e){try{return!!e()}catch(t){return!0}}},9529:(e,t,n)=>{"use strict";n(7280);var r=n(1890),i=n(298),s=n(4348),o=n(6400),a=n(854),c=n(1904),l=a("species"),u=RegExp.prototype;e.exports=function(e,t,n,h){var d=a(e),f=!o((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=f&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!p||n){var m=r(/./[d]),g=t(d,""[e],(function(e,t,n,i,o){var a=r(e),c=t.exec;return c===s||c===u.exec?f&&!o?{done:!0,value:m(t,n,i)}:{done:!0,value:a(n,t,i)}:{done:!1}}));i(String.prototype,e,g[0]),i(u,d,g[1])}h&&c(u[d],"sham",!0)}},4157:(e,t,n)=>{var r=n(8427),i=Function.prototype,s=i.apply,o=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},422:(e,t,n)=>{var r=n(1890),i=n(392),s=n(8427),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?o(e,t):function(){return e.apply(t,arguments)}}},8427:(e,t,n)=>{var r=n(6400);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},3577:(e,t,n)=>{var r=n(8427),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},7961:(e,t,n)=>{var r=n(9631),i=n(7322),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},1890:(e,t,n)=>{var r=n(8427),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},9694:(e,t,n)=>{var r=n(7358),i=n(419),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},7143:(e,t,n)=>{var r=n(5976),i=n(2344),s=n(2184),o=n(854),a=o("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||s[r(e)]}},2151:(e,t,n)=>{var r=n(7358),i=n(3577),s=n(392),o=n(7950),a=n(3353),c=n(7143),l=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(s(n))return o(i(n,e));throw l(a(e)+" is not iterable")}},2344:(e,t,n)=>{var r=n(392);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},8716:(e,t,n)=>{var r=n(1890),i=n(7475),s=Math.floor,o=r("".charAt),a=r("".replace),c=r("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,h,d){var f=n+e.length,p=r.length,m=u;return void 0!==h&&(h=i(h),m=l),a(d,m,(function(i,a){var l;switch(o(a,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,n);case"'":return c(t,f);case"<":l=h[c(a,1,-1)];break;default:var u=+a;if(0===u)return i;if(u>p){var d=s(u/10);return 0===d?i:d<=p?void 0===r[d-1]?o(a,1):r[d-1]+o(a,1):i}l=r[u-1]}return void 0===l?"":l}))}},7358:(e,t,n)=>{var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},7322:(e,t,n)=>{var r=n(1890),i=n(7475),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},600:e=>{e.exports={}},9970:(e,t,n)=>{var r=n(9694);e.exports=r("document","documentElement")},7021:(e,t,n)=>{var r=n(9631),i=n(6400),s=n(5354);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8830:(e,t,n)=>{var r=n(7358),i=r.Array,s=Math.abs,o=Math.pow,a=Math.floor,c=Math.log,l=Math.LN2,u=function(e,t,n){var r,u,h,d=i(n),f=8*n-t-1,p=(1<<f)-1,m=p>>1,g=23===t?o(2,-24)-o(2,-77):0,v=e<0||0===e&&1/e<0?1:0,y=0;e=s(e),e!=e||e===1/0?(u=e!=e?1:0,r=p):(r=a(c(e)/l),h=o(2,-r),e*h<1&&(r--,h*=2),e+=r+m>=1?g/h:g*o(2,1-m),e*h>=2&&(r++,h/=2),r+m>=p?(u=0,r=p):r+m>=1?(u=(e*h-1)*o(2,t),r+=m):(u=e*o(2,m-1)*o(2,t),r=0));while(t>=8)d[y++]=255&u,u/=256,t-=8;r=r<<t|u,f+=t;while(f>0)d[y++]=255&r,r/=256,f-=8;return d[--y]|=128*v,d},h=function(e,t){var n,r=e.length,i=8*r-t-1,s=(1<<i)-1,a=s>>1,c=i-7,l=r-1,u=e[l--],h=127&u;u>>=7;while(c>0)h=256*h+e[l--],c-=8;n=h&(1<<-c)-1,h>>=-c,c+=t;while(c>0)n=256*n+e[l--],c-=8;if(0===h)h=1-a;else{if(h===s)return n?NaN:u?-1/0:1/0;n+=o(2,t),h-=a}return(u?-1:1)*n*o(2,h-t)};e.exports={pack:u,unpack:h}},2985:(e,t,n)=>{var r=n(7358),i=n(1890),s=n(6400),o=n(5173),a=r.Object,c=i("".split);e.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?c(e,""):a(e)}:a},9941:(e,t,n)=>{var r=n(419),i=n(776),s=n(6184);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},3725:(e,t,n)=>{var r=n(1890),i=n(419),s=n(1089),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},5684:(e,t,n)=>{var r=n(776),i=n(1904);e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},7624:(e,t,n)=>{var r,i,s,o=n(9262),a=n(7358),c=n(1890),l=n(776),u=n(1904),h=n(7322),d=n(1089),f=n(203),p=n(600),m="Object already initialized",g=a.TypeError,v=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},w=function(e){return function(t){var n;if(!l(t)||(n=i(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var b=d.state||(d.state=new v),_=c(b.get),I=c(b.has),T=c(b.set);r=function(e,t){if(I(b,e))throw new g(m);return t.facade=e,T(b,e,t),t},i=function(e){return _(b,e)||{}},s=function(e){return I(b,e)}}else{var E=f("state");p[E]=!0,r=function(e,t){if(h(e,E))throw new g(m);return t.facade=e,u(e,E,t),t},i=function(e){return h(e,E)?e[E]:{}},s=function(e){return h(e,E)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:w}},1558:(e,t,n)=>{var r=n(854),i=n(2184),s=r("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||o[s]===e)}},6894:(e,t,n)=>{var r=n(5173);e.exports=Array.isArray||function(e){return"Array"==r(e)}},419:e=>{e.exports=function(e){return"function"==typeof e}},7593:(e,t,n)=>{var r=n(1890),i=n(6400),s=n(419),o=n(5976),a=n(9694),c=n(3725),l=function(){},u=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(l),m=function(e){if(!s(e))return!1;try{return h(l,u,e),!0}catch(t){return!1}},g=function(e){if(!s(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(e))}catch(t){return!0}};g.sham=!0,e.exports=!h||i((function(){var e;return m(m.call)||!m(Object)||!m((function(){e=!0}))||e}))?g:m},4389:(e,t,n)=>{var r=n(6400),i=n(419),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==u||n!=l&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},2818:(e,t,n)=>{var r=n(776),i=Math.floor;e.exports=Number.isInteger||function(e){return!r(e)&&isFinite(e)&&i(e)===e}},776:(e,t,n)=>{var r=n(419);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},6692:e=>{e.exports=!1},410:(e,t,n)=>{var r=n(7358),i=n(9694),s=n(419),o=n(7673),a=n(8476),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return s(t)&&o(t.prototype,c(e))}},8105:(e,t,n)=>{var r=n(3577),i=n(7950),s=n(2344);e.exports=function(e,t,n){var o,a;i(e);try{if(o=s(e,"return"),!o){if("throw"===t)throw n;return n}o=r(o,e)}catch(c){a=!0,o=c}if("throw"===t)throw n;if(a)throw o;return i(o),n}},4848:(e,t,n)=>{"use strict";var r,i,s,o=n(6400),a=n(419),c=n(1074),l=n(4945),u=n(298),h=n(854),d=n(6692),f=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(i=l(l(s)),i!==Object.prototype&&(r=i)):p=!0);var m=void 0==r||o((function(){var e={};return r[f].call(e)!==e}));m?r={}:d&&(r=c(r)),a(r[f])||u(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},2184:e=>{e.exports={}},6042:(e,t,n)=>{var r=n(4068);e.exports=function(e){return r(e.length)}},7529:(e,t,n)=>{var r=n(5068),i=n(6400);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},6595:(e,t,n)=>{var r=n(6400),i=n(854),s=n(6692),o=i("iterator");e.exports=!r((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,n="";return e.pathname="c%20d",t.forEach((function(e,r){t["delete"]("b"),n+=r+e})),s&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[o]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},9262:(e,t,n)=>{var r=n(7358),i=n(419),s=n(3725),o=r.WeakMap;e.exports=i(o)&&/native code/.test(s(o))},7598:(e,t,n)=>{var r=n(4481);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},8439:(e,t,n)=>{"use strict";var r=n(9631),i=n(1890),s=n(3577),o=n(6400),a=n(9158),c=n(4199),l=n(5604),u=n(7475),h=n(2985),d=Object.assign,f=Object.defineProperty,p=i([].concat);e.exports=!d||o((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||a(d({},t)).join("")!=i}))?function(e,t){var n=u(e),i=arguments.length,o=1,d=c.f,f=l.f;while(i>o){var m,g=h(arguments[o++]),v=d?p(a(g),d(g)):a(g),y=v.length,w=0;while(y>w)m=v[w++],r&&!s(f,g,m)||(n[m]=g[m])}return n}:d},1074:(e,t,n)=>{var r,i=n(7950),s=n(3605),o=n(2875),a=n(600),c=n(9970),l=n(5354),u=n(203),h=">",d="<",f="prototype",p="script",m=u("IE_PROTO"),g=function(){},v=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},w=function(){var e,t=l("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}b="undefined"!=typeof document?document.domain&&r?y(r):w():y(r);var e=o.length;while(e--)delete b[f][o[e]];return b()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=i(e),n=new g,g[f]=null,n[m]=e):n=b(),void 0===t?n:s.f(n,t)}},3605:(e,t,n)=>{var r=n(9631),i=n(5953),s=n(928),o=n(7950),a=n(7120),c=n(9158);t.f=r&&!i?Object.defineProperties:function(e,t){o(e);var n,r=a(t),i=c(t),l=i.length,u=0;while(l>u)s.f(e,n=i[u++],r[n]);return e}},928:(e,t,n)=>{var r=n(7358),i=n(9631),s=n(7021),o=n(5953),a=n(7950),c=n(8618),l=r.TypeError,u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";t.f=i?o?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=h(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(a(e),t=c(t),a(n),s)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},2404:(e,t,n)=>{var r=n(9631),i=n(3577),s=n(5604),o=n(5442),a=n(7120),c=n(8618),l=n(7322),u=n(7021),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),u)try{return h(e,t)}catch(n){}if(l(e,t))return o(!i(s.f,e,t),e[t])}},1454:(e,t,n)=>{var r=n(1587),i=n(2875),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},4199:(e,t)=>{t.f=Object.getOwnPropertySymbols},4945:(e,t,n)=>{var r=n(7358),i=n(7322),s=n(419),o=n(7475),a=n(203),c=n(123),l=a("IE_PROTO"),u=r.Object,h=u.prototype;e.exports=c?u.getPrototypeOf:function(e){var t=o(e);if(i(t,l))return t[l];var n=t.constructor;return s(n)&&t instanceof n?n.prototype:t instanceof u?h:null}},7673:(e,t,n)=>{var r=n(1890);e.exports=r({}.isPrototypeOf)},1587:(e,t,n)=>{var r=n(1890),i=n(7322),s=n(7120),o=n(6963).indexOf,a=n(600),c=r([].push);e.exports=function(e,t){var n,r=s(e),l=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&c(u,n);while(t.length>l)i(r,n=t[l++])&&(~o(u,n)||c(u,n));return u}},9158:(e,t,n)=>{var r=n(1587),i=n(2875);e.exports=Object.keys||function(e){return r(e,i)}},5604:(e,t)=>{"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},6184:(e,t,n)=>{var r=n(1890),i=n(7950),s=n(8248);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},9308:(e,t,n)=>{var r=n(7358),i=n(3577),s=n(419),o=n(776),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&s(n=e.toString)&&!o(r=i(n,e)))return r;if(s(n=e.valueOf)&&!o(r=i(n,e)))return r;if("string"!==t&&s(n=e.toString)&&!o(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},7764:(e,t,n)=>{var r=n(9694),i=n(1890),s=n(1454),o=n(4199),a=n(7950),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},9833:(e,t,n)=>{var r=n(298);e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},298:(e,t,n)=>{var r=n(7358),i=n(419),s=n(7322),o=n(1904),a=n(3534),c=n(3725),l=n(7624),u=n(7961).CONFIGURABLE,h=l.get,d=l.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var l,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||u&&n.name!==g)&&o(n,"name",g),l=d(n),l.source||(l.source=f.join("string"==typeof g?g:""))),e!==r?(h?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=n:o(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},9395:(e,t,n)=>{var r=n(7358),i=n(3577),s=n(7950),o=n(419),a=n(5173),c=n(4348),l=r.TypeError;e.exports=function(e,t){var n=e.exec;if(o(n)){var r=i(n,e,t);return null!==r&&s(r),r}if("RegExp"===a(e))return i(c,e,t);throw l("RegExp#exec called on incompatible receiver")}},4348:(e,t,n)=>{"use strict";var r=n(3577),i=n(1890),s=n(4481),o=n(136),a=n(2351),c=n(1586),l=n(1074),u=n(7624).get,h=n(5337),d=n(1442),f=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,m=p,g=i("".charAt),v=i("".indexOf),y=i("".replace),w=i("".slice),b=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),_=a.BROKEN_CARET,I=void 0!==/()??/.exec("")[1],T=b||I||_||h||d;T&&(m=function(e){var t,n,i,a,c,h,d,T=this,E=u(T),k=s(e),S=E.raw;if(S)return S.lastIndex=T.lastIndex,t=r(m,S,k),T.lastIndex=S.lastIndex,t;var x=E.groups,C=_&&T.sticky,A=r(o,T),R=T.source,N=0,O=k;if(C&&(A=y(A,"y",""),-1===v(A,"g")&&(A+="g"),O=w(k,T.lastIndex),T.lastIndex>0&&(!T.multiline||T.multiline&&"\n"!==g(k,T.lastIndex-1))&&(R="(?: "+R+")",O=" "+O,N++),n=new RegExp("^(?:"+R+")",A)),I&&(n=new RegExp("^"+R+"$(?!\\s)",A)),b&&(i=T.lastIndex),a=r(p,C?n:T,O),C?a?(a.input=w(a.input,N),a[0]=w(a[0],N),a.index=T.lastIndex,T.lastIndex+=a[0].length):T.lastIndex=0:b&&a&&(T.lastIndex=T.global?a.index+a[0].length:i),I&&a&&a.length>1&&r(f,a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a&&x)for(a.groups=h=l(null),c=0;c<x.length;c++)d=x[c],h[d[0]]=a[d[1]];return a}),e.exports=m},136:(e,t,n)=>{"use strict";var r=n(7950);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},2351:(e,t,n)=>{var r=n(6400),i=n(7358),s=i.RegExp,o=r((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),a=o||r((function(){return!s("a","y").sticky})),c=o||r((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:a,UNSUPPORTED_Y:o}},5337:(e,t,n)=>{var r=n(6400),i=n(7358),s=i.RegExp;e.exports=r((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},1442:(e,t,n)=>{var r=n(6400),i=n(7358),s=i.RegExp;e.exports=r((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},7933:(e,t,n)=>{var r=n(7358),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},3534:(e,t,n)=>{var r=n(7358),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},4114:(e,t,n)=>{"use strict";var r=n(9694),i=n(928),s=n(854),o=n(9631),a=s("species");e.exports=function(e){var t=r(e),n=i.f;o&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},1061:(e,t,n)=>{var r=n(928).f,i=n(7322),s=n(854),o=s("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,o)&&r(e,o,{configurable:!0,value:t})}},203:(e,t,n)=>{var r=n(1586),i=n(6862),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},1089:(e,t,n)=>{var r=n(7358),i=n(3534),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},1586:(e,t,n)=>{var r=n(6692),i=n(1089);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.0",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE",source:"https://github.com/zloirock/core-js"})},7440:(e,t,n)=>{var r=n(7950),i=n(2722),s=n(854),o=s("species");e.exports=function(e,t){var n,s=r(e).constructor;return void 0===s||void 0==(n=r(s)[o])?t:i(n)}},1021:(e,t,n)=>{var r=n(1890),i=n(1860),s=n(4481),o=n(7933),a=r("".charAt),c=r("".charCodeAt),l=r("".slice),u=function(e){return function(t,n){var r,u,h=s(o(t)),d=i(n),f=h.length;return d<0||d>=f?e?"":void 0:(r=c(h,d),r<55296||r>56319||d+1===f||(u=c(h,d+1))<56320||u>57343?e?a(h,d):r:e?l(h,d,d+2):u-56320+(r-55296<<10)+65536)}};e.exports={codeAt:u(!1),charAt:u(!0)}},5253:(e,t,n)=>{"use strict";var r=n(7358),i=n(1890),s=2147483647,o=36,a=1,c=26,l=38,u=700,h=72,d=128,f="-",p=/[^\0-\u007E]/,m=/[.\u3002\uFF0E\uFF61]/g,g="Overflow: input needs wider integers to process",v=o-a,y=r.RangeError,w=i(m.exec),b=Math.floor,_=String.fromCharCode,I=i("".charCodeAt),T=i([].join),E=i([].push),k=i("".replace),S=i("".split),x=i("".toLowerCase),C=function(e){var t=[],n=0,r=e.length;while(n<r){var i=I(e,n++);if(i>=55296&&i<=56319&&n<r){var s=I(e,n++);56320==(64512&s)?E(t,((1023&i)<<10)+(1023&s)+65536):(E(t,i),n--)}else E(t,i)}return t},A=function(e){return e+22+75*(e<26)},R=function(e,t,n){var r=0;e=n?b(e/u):e>>1,e+=b(e/t);while(e>v*c>>1)e=b(e/v),r+=o;return b(r+(v+1)*e/(e+l))},N=function(e){var t=[];e=C(e);var n,r,i=e.length,l=d,u=0,p=h;for(n=0;n<e.length;n++)r=e[n],r<128&&E(t,_(r));var m=t.length,v=m;m&&E(t,f);while(v<i){var w=s;for(n=0;n<e.length;n++)r=e[n],r>=l&&r<w&&(w=r);var I=v+1;if(w-l>b((s-u)/I))throw y(g);for(u+=(w-l)*I,l=w,n=0;n<e.length;n++){if(r=e[n],r<l&&++u>s)throw y(g);if(r==l){var k=u,S=o;while(1){var x=S<=p?a:S>=p+c?c:S-p;if(k<x)break;var N=k-x,O=o-x;E(t,_(A(x+N%O))),k=b(N/O),S+=o}E(t,_(A(k))),p=R(u,I,v==m),u=0,v++}}u++,l++}return T(t,"")};e.exports=function(e){var t,n,r=[],i=S(k(x(e),m,"."),".");for(t=0;t<i.length;t++)n=i[t],E(r,w(p,n)?"xn--"+N(n):n);return T(r,".")}},7894:(e,t,n)=>{var r=n(7961).PROPER,i=n(6400),s=n(4454),o="​᠎";e.exports=function(e){return i((function(){return!!s[e]()||o[e]()!==o||r&&s[e].name!==e}))}},6304:(e,t,n)=>{var r=n(1890),i=n(7933),s=n(4481),o=n(4454),a=r("".replace),c="["+o+"]",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),h=function(e){return function(t){var n=s(i(t));return 1&e&&(n=a(n,l,"")),2&e&&(n=a(n,u,"")),n}};e.exports={start:h(1),end:h(2),trim:h(3)}},1801:(e,t,n)=>{var r=n(1860),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},833:(e,t,n)=>{var r=n(7358),i=n(1860),s=n(4068),o=r.RangeError;e.exports=function(e){if(void 0===e)return 0;var t=i(e),n=s(t);if(t!==n)throw o("Wrong length or index");return n}},7120:(e,t,n)=>{var r=n(2985),i=n(7933);e.exports=function(e){return r(i(e))}},1860:e=>{var t=Math.ceil,n=Math.floor;e.exports=function(e){var r=+e;return r!==r||0===r?0:(r>0?n:t)(r)}},4068:(e,t,n)=>{var r=n(1860),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7475:(e,t,n)=>{var r=n(7358),i=n(7933),s=r.Object;e.exports=function(e){return s(i(e))}},1355:(e,t,n)=>{var r=n(7358),i=n(1443),s=r.RangeError;e.exports=function(e,t){var n=i(e);if(n%t)throw s("Wrong offset");return n}},1443:(e,t,n)=>{var r=n(7358),i=n(1860),s=r.RangeError;e.exports=function(e){var t=i(e);if(t<0)throw s("The argument can't be less than 0");return t}},2181:(e,t,n)=>{var r=n(7358),i=n(3577),s=n(776),o=n(410),a=n(2344),c=n(9308),l=n(854),u=r.TypeError,h=l("toPrimitive");e.exports=function(e,t){if(!s(e)||o(e))return e;var n,r=a(e,h);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!s(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},8618:(e,t,n)=>{var r=n(2181),i=n(410);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},5705:(e,t,n)=>{var r=n(854),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},4481:(e,t,n)=>{var r=n(7358),i=n(5976),s=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},3353:(e,t,n)=>{var r=n(7358),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},6968:(e,t,n)=>{"use strict";var r=n(8934),i=n(7358),s=n(3577),o=n(9631),a=n(3105),c=n(683),l=n(62),u=n(2827),h=n(5442),d=n(1904),f=n(2818),p=n(4068),m=n(833),g=n(1355),v=n(8618),y=n(7322),w=n(5976),b=n(776),_=n(410),I=n(1074),T=n(7673),E=n(6184),k=n(1454).f,S=n(9401),x=n(2099).forEach,C=n(4114),A=n(928),R=n(2404),N=n(7624),O=n(9941),P=N.get,L=N.set,D=A.f,F=R.f,M=Math.round,q=i.RangeError,U=l.ArrayBuffer,V=U.prototype,j=l.DataView,B=c.NATIVE_ARRAY_BUFFER_VIEWS,$=c.TYPED_ARRAY_CONSTRUCTOR,z=c.TYPED_ARRAY_TAG,H=c.TypedArray,K=c.TypedArrayPrototype,W=c.aTypedArrayConstructor,G=c.isTypedArray,Y="BYTES_PER_ELEMENT",J="Wrong length",Q=function(e,t){W(e);var n=0,r=t.length,i=new e(r);while(r>n)i[n]=t[n++];return i},Z=function(e,t){D(e,t,{get:function(){return P(this)[t]}})},X=function(e){var t;return T(V,e)||"ArrayBuffer"==(t=w(e))||"SharedArrayBuffer"==t},ee=function(e,t){return G(e)&&!_(t)&&t in e&&f(+t)&&t>=0},te=function(e,t){return t=v(t),ee(e,t)?h(2,e[t]):F(e,t)},ne=function(e,t,n){return t=v(t),!(ee(e,t)&&b(n)&&y(n,"value"))||y(n,"get")||y(n,"set")||n.configurable||y(n,"writable")&&!n.writable||y(n,"enumerable")&&!n.enumerable?D(e,t,n):(e[t]=n.value,e)};o?(B||(R.f=te,A.f=ne,Z(K,"buffer"),Z(K,"byteOffset"),Z(K,"byteLength"),Z(K,"length")),r({target:"Object",stat:!0,forced:!B},{getOwnPropertyDescriptor:te,defineProperty:ne}),e.exports=function(e,t,n){var o=e.match(/\d+$/)[0]/8,c=e+(n?"Clamped":"")+"Array",l="get"+e,h="set"+e,f=i[c],v=f,y=v&&v.prototype,w={},_=function(e,t){var n=P(e);return n.view[l](t*o+n.byteOffset,!0)},T=function(e,t,r){var i=P(e);n&&(r=(r=M(r))<0?0:r>255?255:255&r),i.view[h](t*o+i.byteOffset,r,!0)},A=function(e,t){D(e,t,{get:function(){return _(this,t)},set:function(e){return T(this,t,e)},enumerable:!0})};B?a&&(v=t((function(e,t,n,r){return u(e,y),O(function(){return b(t)?X(t)?void 0!==r?new f(t,g(n,o),r):void 0!==n?new f(t,g(n,o)):new f(t):G(t)?Q(v,t):s(S,v,t):new f(m(t))}(),e,v)})),E&&E(v,H),x(k(f),(function(e){e in v||d(v,e,f[e])})),v.prototype=y):(v=t((function(e,t,n,r){u(e,y);var i,a,c,l=0,h=0;if(b(t)){if(!X(t))return G(t)?Q(v,t):s(S,v,t);i=t,h=g(n,o);var d=t.byteLength;if(void 0===r){if(d%o)throw q(J);if(a=d-h,a<0)throw q(J)}else if(a=p(r)*o,a+h>d)throw q(J);c=a/o}else c=m(t),a=c*o,i=new U(a);L(e,{buffer:i,byteOffset:h,byteLength:a,length:c,view:new j(i)});while(l<c)A(e,l++)})),E&&E(v,H),y=v.prototype=I(K)),y.constructor!==v&&d(y,"constructor",v),d(y,$,v),z&&d(y,z,c),w[c]=v,r({global:!0,forced:v!=f,sham:!B},w),Y in v||d(v,Y,o),Y in y||d(y,Y,o),C(c)}):e.exports=function(){}},3105:(e,t,n)=>{var r=n(7358),i=n(6400),s=n(8047),o=n(683).NATIVE_ARRAY_BUFFER_VIEWS,a=r.ArrayBuffer,c=r.Int8Array;e.exports=!o||!i((function(){c(1)}))||!i((function(){new c(-1)}))||!s((function(e){new c,new c(null),new c(1.5),new c(e)}),!0)||i((function(){return 1!==new c(new a(2),1,void 0).length}))},9401:(e,t,n)=>{var r=n(422),i=n(3577),s=n(2722),o=n(7475),a=n(6042),c=n(2151),l=n(7143),u=n(1558),h=n(683).aTypedArrayConstructor;e.exports=function(e){var t,n,d,f,p,m,g=s(this),v=o(e),y=arguments.length,w=y>1?arguments[1]:void 0,b=void 0!==w,_=l(v);if(_&&!u(_)){p=c(v,_),m=p.next,v=[];while(!(f=i(m,p)).done)v.push(f.value)}for(b&&y>2&&(w=r(w,arguments[2])),n=a(v),d=new(h(g))(n),t=0;n>t;t++)d[t]=b?w(v[t],t):v[t];return d}},6862:(e,t,n)=>{var r=n(1890),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},8476:(e,t,n)=>{var r=n(7529);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5953:(e,t,n)=>{var r=n(9631),i=n(6400);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},6596:(e,t,n)=>{var r=n(7358),i=r.TypeError;e.exports=function(e,t){if(e<t)throw i("Not enough arguments");return e}},854:(e,t,n)=>{var r=n(7358),i=n(1586),s=n(7322),o=n(6862),a=n(7529),c=n(8476),l=i("wks"),u=r.Symbol,h=u&&u["for"],d=c?u:u&&u.withoutSetter||o;e.exports=function(e){if(!s(l,e)||!a&&"string"!=typeof l[e]){var t="Symbol."+e;a&&s(u,e)?l[e]=u[e]:l[e]=c&&h?h(t):d(t)}return l[e]}},4454:e=>{e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},7971:(e,t,n)=>{"use strict";var r=n(9694),i=n(7322),s=n(1904),o=n(7673),a=n(6184),c=n(8438),l=n(9941),u=n(7598),h=n(5684),d=n(767),f=n(6429),p=n(6692);e.exports=function(e,t,n,m){var g=m?2:1,v=e.split("."),y=v[v.length-1],w=r.apply(null,v);if(w){var b=w.prototype;if(!p&&i(b,"cause")&&delete b.cause,!n)return w;var _=r("Error"),I=t((function(e,t){var n=u(m?t:e,void 0),r=m?new w(e):new w;return void 0!==n&&s(r,"message",n),f&&s(r,"stack",d(r.stack,2)),this&&o(b,this)&&l(r,this,I),arguments.length>g&&h(r,arguments[g]),r}));if(I.prototype=b,"Error"!==y&&(a?a(I,_):c(I,_,{name:!0})),c(I,w),!p)try{b.name!==y&&s(b,"name",y),b.constructor=I}catch(T){}return I}}},979:(e,t,n)=>{"use strict";var r=n(8934),i=n(1890),s=n(6400),o=n(62),a=n(7950),c=n(1801),l=n(4068),u=n(7440),h=o.ArrayBuffer,d=o.DataView,f=d.prototype,p=i(h.prototype.slice),m=i(f.getUint8),g=i(f.setUint8),v=s((function(){return!new h(2).slice(1,void 0).byteLength}));r({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:v},{slice:function(e,t){if(p&&void 0===t)return p(a(this),e);var n=a(this).byteLength,r=c(e,n),i=c(void 0===t?n:t,n),s=new(u(this,h))(l(i-r)),o=new d(this),f=new d(s),v=0;while(r<i)g(f,v++,m(o,r++));return s}})},6843:(e,t,n)=>{"use strict";var r=n(7120),i=n(2852),s=n(2184),o=n(7624),a=n(928).f,c=n(8810),l=n(6692),u=n(9631),h="Array Iterator",d=o.set,f=o.getterFor(h);e.exports=c(Array,"Array",(function(e,t){d(this,{type:h,target:r(e),index:0,kind:t})}),(function(){var e=f(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var p=s.Arguments=s.Array;if(i("keys"),i("values"),i("entries"),!l&&u&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(m){}},7070:(e,t,n)=>{"use strict";var r=n(8934),i=n(1890),s=n(6894),o=i([].reverse),a=[1,2];r({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),o(this)}})},6245:(e,t,n)=>{var r=n(2852);r("flat")},6701:(e,t,n)=>{var r=n(8934),i=n(7358),s=n(4157),o=n(7971),a="WebAssembly",c=i[a],l=7!==Error("e",{cause:7}).cause,u=function(e,t){var n={};n[e]=o(e,t,l),r({global:!0,forced:l},n)},h=function(e,t){if(c&&c[e]){var n={};n[e]=o(a+"."+e,t,l),r({target:a,stat:!0,forced:l},n)}};u("Error",(function(e){return function(t){return s(e,this,arguments)}})),u("EvalError",(function(e){return function(t){return s(e,this,arguments)}})),u("RangeError",(function(e){return function(t){return s(e,this,arguments)}})),u("ReferenceError",(function(e){return function(t){return s(e,this,arguments)}})),u("SyntaxError",(function(e){return function(t){return s(e,this,arguments)}})),u("TypeError",(function(e){return function(t){return s(e,this,arguments)}})),u("URIError",(function(e){return function(t){return s(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return s(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return s(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return s(e,this,arguments)}}))},2100:(e,t,n)=>{var r=n(8934),i=n(7358),s=n(9694),o=n(4157),a=n(1890),c=n(6400),l=i.Array,u=s("JSON","stringify"),h=a(/./.exec),d=a("".charAt),f=a("".charCodeAt),p=a("".replace),m=a(1..toString),g=/[\uD800-\uDFFF]/g,v=/^[\uD800-\uDBFF]$/,y=/^[\uDC00-\uDFFF]$/,w=function(e,t,n){var r=d(n,t-1),i=d(n,t+1);return h(v,e)&&!h(y,i)||h(y,e)&&!h(v,r)?"\\u"+m(f(e,0),16):e},b=c((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&r({target:"JSON",stat:!0,forced:b},{stringify:function(e,t,n){for(var r=0,i=arguments.length,s=l(i);r<i;r++)s[r]=arguments[r];var a=o(u,null,s);return"string"==typeof a?p(a,g,w):a}})},7280:(e,t,n)=>{"use strict";var r=n(8934),i=n(4348);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},839:(e,t,n)=>{"use strict";var r=n(1021).charAt,i=n(4481),s=n(7624),o=n(8810),a="String Iterator",c=s.set,l=s.getterFor(a);o(String,"String",(function(e){c(this,{type:a,string:i(e),index:0})}),(function(){var e,t=l(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},5363:(e,t,n)=>{"use strict";var r=n(4157),i=n(3577),s=n(1890),o=n(9529),a=n(6400),c=n(7950),l=n(419),u=n(1860),h=n(4068),d=n(4481),f=n(7933),p=n(6412),m=n(2344),g=n(8716),v=n(9395),y=n(854),w=y("replace"),b=Math.max,_=Math.min,I=s([].concat),T=s([].push),E=s("".indexOf),k=s("".slice),S=function(e){return void 0===e?e:String(e)},x=function(){return"$0"==="a".replace(/./,"$0")}(),C=function(){return!!/./[w]&&""===/./[w]("a","$0")}(),A=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,t,n){var s=C?"$":"$0";return[function(e,n){var r=f(this),s=void 0==e?void 0:m(e,w);return s?i(s,e,r,n):i(t,d(r),e,n)},function(e,i){var o=c(this),a=d(e);if("string"==typeof i&&-1===E(i,s)&&-1===E(i,"$<")){var f=n(t,o,a,i);if(f.done)return f.value}var m=l(i);m||(i=d(i));var y=o.global;if(y){var w=o.unicode;o.lastIndex=0}var x=[];while(1){var C=v(o,a);if(null===C)break;if(T(x,C),!y)break;var A=d(C[0]);""===A&&(o.lastIndex=p(a,h(o.lastIndex),w))}for(var R="",N=0,O=0;O<x.length;O++){C=x[O];for(var P=d(C[0]),L=b(_(u(C.index),a.length),0),D=[],F=1;F<C.length;F++)T(D,S(C[F]));var M=C.groups;if(m){var q=I([P],D,L,a);void 0!==M&&T(q,M);var U=d(r(i,void 0,q))}else U=g(P,a,L,D,M,i);L>=N&&(R+=k(a,N,L)+U,N=L+P.length)}return R+k(a,N)}]}),!A||!x||C)},6801:(e,t,n)=>{"use strict";var r=n(8934),i=n(6304).trim,s=n(7894);r({target:"String",proto:!0,forced:s("trim")},{trim:function(){return i(this)}})},5123:(e,t,n)=>{"use strict";var r=n(683),i=n(6042),s=n(1860),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(e){var t=o(this),n=i(t),r=s(e),a=r>=0?r:n+r;return a<0||a>=n?void 0:t[a]}))},8685:(e,t,n)=>{"use strict";var r=n(7358),i=n(3577),s=n(683),o=n(6042),a=n(1355),c=n(7475),l=n(6400),u=r.RangeError,h=r.Int8Array,d=h&&h.prototype,f=d&&d.set,p=s.aTypedArray,m=s.exportTypedArrayMethod,g=!l((function(){var e=new Uint8ClampedArray(2);return i(f,e,{length:1,0:3},1),3!==e[1]})),v=g&&s.NATIVE_ARRAY_BUFFER_VIEWS&&l((function(){var e=new h(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));m("set",(function(e){p(this);var t=a(arguments.length>1?arguments[1]:void 0,1),n=c(e);if(g)return i(f,this,n,t);var r=this.length,s=o(n),l=0;if(s+t>r)throw u("Wrong length");while(l<s)this[t+l]=n[l++]}),!g||v)},2396:(e,t,n)=>{"use strict";var r=n(7358),i=n(1890),s=n(6400),o=n(392),a=n(6534),c=n(683),l=n(1544),u=n(8979),h=n(5068),d=n(1513),f=r.Array,p=c.aTypedArray,m=c.exportTypedArrayMethod,g=r.Uint16Array,v=g&&i(g.prototype.sort),y=!!v&&!(s((function(){v(new g(2),null)}))&&s((function(){v(new g(2),{})}))),w=!!v&&!s((function(){if(h)return h<74;if(l)return l<67;if(u)return!0;if(d)return d<602;var e,t,n=new g(516),r=f(516);for(e=0;e<516;e++)t=e%4,n[e]=515-e,r[e]=e-2*t+3;for(v(n,(function(e,t){return(e/4|0)-(t/4|0)})),e=0;e<516;e++)if(n[e]!==r[e])return!0})),b=function(e){return function(t,n){return void 0!==e?+e(t,n)||0:n!==n?-1:t!==t?1:0===t&&0===n?1/t>0&&1/n<0?1:-1:t>n}};m("sort",(function(e){return void 0!==e&&o(e),w?v(this,e):a(p(this),b(e))}),!w||y)},6105:(e,t,n)=>{var r=n(6968);r("Uint8",(function(e){return function(t,n,r){return e(this,t,n,r)}}))},71:(e,t,n)=>{var r=n(7358),i=n(4296),s=n(8753),o=n(6843),a=n(1904),c=n(854),l=c("iterator"),u=c("toStringTag"),h=o.values,d=function(e,t){if(e){if(e[l]!==h)try{a(e,l,h)}catch(r){e[l]=h}if(e[u]||a(e,u,t),i[t])for(var n in o)if(e[n]!==o[n])try{a(e,n,o[n])}catch(r){e[n]=o[n]}}};for(var f in i)d(r[f]&&r[f].prototype,f);d(s,"DOMTokenList")},6016:(e,t,n)=>{"use strict";n(6843);var r=n(8934),i=n(7358),s=n(9694),o=n(3577),a=n(1890),c=n(6595),l=n(298),u=n(9833),h=n(1061),d=n(5912),f=n(7624),p=n(2827),m=n(419),g=n(7322),v=n(422),y=n(5976),w=n(7950),b=n(776),_=n(4481),I=n(1074),T=n(5442),E=n(2151),k=n(7143),S=n(6596),x=n(854),C=n(6534),A=x("iterator"),R="URLSearchParams",N=R+"Iterator",O=f.set,P=f.getterFor(R),L=f.getterFor(N),D=s("fetch"),F=s("Request"),M=s("Headers"),q=F&&F.prototype,U=M&&M.prototype,V=i.RegExp,j=i.TypeError,B=i.decodeURIComponent,$=i.encodeURIComponent,z=a("".charAt),H=a([].join),K=a([].push),W=a("".replace),G=a([].shift),Y=a([].splice),J=a("".split),Q=a("".slice),Z=/\+/g,X=Array(4),ee=function(e){return X[e-1]||(X[e-1]=V("((?:%[\\da-f]{2}){"+e+"})","gi"))},te=function(e){try{return B(e)}catch(t){return e}},ne=function(e){var t=W(e,Z," "),n=4;try{return B(t)}catch(r){while(n)t=W(t,ee(n--),te);return t}},re=/[!'()~]|%20/g,ie={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},se=function(e){return ie[e]},oe=function(e){return W($(e),re,se)},ae=d((function(e,t){O(this,{type:N,iterator:E(P(e).entries),kind:t})}),"Iterator",(function(){var e=L(this),t=e.kind,n=e.iterator.next(),r=n.value;return n.done||(n.value="keys"===t?r.key:"values"===t?r.value:[r.key,r.value]),n}),!0),ce=function(e){this.entries=[],this.url=null,void 0!==e&&(b(e)?this.parseObject(e):this.parseQuery("string"==typeof e?"?"===z(e,0)?Q(e,1):e:_(e)))};ce.prototype={type:R,bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,n,r,i,s,a,c,l=k(e);if(l){t=E(e,l),n=t.next;while(!(r=o(n,t)).done){if(i=E(w(r.value)),s=i.next,(a=o(s,i)).done||(c=o(s,i)).done||!o(s,i).done)throw j("Expected sequence with length 2");K(this.entries,{key:_(a.value),value:_(c.value)})}}else for(var u in e)g(e,u)&&K(this.entries,{key:u,value:_(e[u])})},parseQuery:function(e){if(e){var t,n,r=J(e,"&"),i=0;while(i<r.length)t=r[i++],t.length&&(n=J(t,"="),K(this.entries,{key:ne(G(n)),value:ne(H(n,"="))}))}},serialize:function(){var e,t=this.entries,n=[],r=0;while(r<t.length)e=t[r++],K(n,oe(e.key)+"="+oe(e.value));return H(n,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var le=function(){p(this,ue);var e=arguments.length>0?arguments[0]:void 0;O(this,new ce(e))},ue=le.prototype;if(u(ue,{append:function(e,t){S(arguments.length,2);var n=P(this);K(n.entries,{key:_(e),value:_(t)}),n.updateURL()},delete:function(e){S(arguments.length,1);var t=P(this),n=t.entries,r=_(e),i=0;while(i<n.length)n[i].key===r?Y(n,i,1):i++;t.updateURL()},get:function(e){S(arguments.length,1);for(var t=P(this).entries,n=_(e),r=0;r<t.length;r++)if(t[r].key===n)return t[r].value;return null},getAll:function(e){S(arguments.length,1);for(var t=P(this).entries,n=_(e),r=[],i=0;i<t.length;i++)t[i].key===n&&K(r,t[i].value);return r},has:function(e){S(arguments.length,1);var t=P(this).entries,n=_(e),r=0;while(r<t.length)if(t[r++].key===n)return!0;return!1},set:function(e,t){S(arguments.length,1);for(var n,r=P(this),i=r.entries,s=!1,o=_(e),a=_(t),c=0;c<i.length;c++)n=i[c],n.key===o&&(s?Y(i,c--,1):(s=!0,n.value=a));s||K(i,{key:o,value:a}),r.updateURL()},sort:function(){var e=P(this);C(e.entries,(function(e,t){return e.key>t.key?1:-1})),e.updateURL()},forEach:function(e){var t,n=P(this).entries,r=v(e,arguments.length>1?arguments[1]:void 0),i=0;while(i<n.length)t=n[i++],r(t.value,t.key,this)},keys:function(){return new ae(this,"keys")},values:function(){return new ae(this,"values")},entries:function(){return new ae(this,"entries")}},{enumerable:!0}),l(ue,A,ue.entries,{name:"entries"}),l(ue,"toString",(function(){return P(this).serialize()}),{enumerable:!0}),h(le,R),r({global:!0,forced:!c},{URLSearchParams:le}),!c&&m(M)){var he=a(U.has),de=a(U.set),fe=function(e){if(b(e)){var t,n=e.body;if(y(n)===R)return t=e.headers?new M(e.headers):new M,he(t,"content-type")||de(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),I(e,{body:T(0,_(n)),headers:T(0,t)})}return e};if(m(D)&&r({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return D(e,arguments.length>1?fe(arguments[1]):{})}}),m(F)){var pe=function(e){return p(this,q),new F(e,arguments.length>1?fe(arguments[1]):{})};q.constructor=pe,pe.prototype=q,r({global:!0,forced:!0},{Request:pe})}}e.exports={URLSearchParams:le,getState:P}},7965:(e,t,n)=>{"use strict";n(839);var r,i=n(8934),s=n(9631),o=n(6595),a=n(7358),c=n(422),l=n(1890),u=n(3605).f,h=n(298),d=n(2827),f=n(7322),p=n(8439),m=n(2029),g=n(5771),v=n(1021).codeAt,y=n(5253),w=n(4481),b=n(1061),_=n(6596),I=n(6016),T=n(7624),E=T.set,k=T.getterFor("URL"),S=I.URLSearchParams,x=I.getState,C=a.URL,A=a.TypeError,R=a.parseInt,N=Math.floor,O=Math.pow,P=l("".charAt),L=l(/./.exec),D=l([].join),F=l(1..toString),M=l([].pop),q=l([].push),U=l("".replace),V=l([].shift),j=l("".split),B=l("".slice),$=l("".toLowerCase),z=l([].unshift),H="Invalid authority",K="Invalid scheme",W="Invalid host",G="Invalid port",Y=/[a-z]/i,J=/[\d+-.a-z]/i,Q=/\d/,Z=/^0x/i,X=/^[0-7]+$/,ee=/^\d+$/,te=/^[\da-f]+$/i,ne=/[\0\t\n\r #%/:<>?@[\\\]^|]/,re=/[\0\t\n\r #/:<>?@[\\\]^|]/,ie=/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,se=/[\t\n\r]/g,oe=function(e){var t,n,r,i,s,o,a,c=j(e,".");if(c.length&&""==c[c.length-1]&&c.length--,t=c.length,t>4)return e;for(n=[],r=0;r<t;r++){if(i=c[r],""==i)return e;if(s=10,i.length>1&&"0"==P(i,0)&&(s=L(Z,i)?16:8,i=B(i,8==s?1:2)),""===i)o=0;else{if(!L(10==s?ee:8==s?X:te,i))return e;o=R(i,s)}q(n,o)}for(r=0;r<t;r++)if(o=n[r],r==t-1){if(o>=O(256,5-t))return null}else if(o>255)return null;for(a=M(n),r=0;r<n.length;r++)a+=n[r]*O(256,3-r);return a},ae=function(e){var t,n,r,i,s,o,a,c=[0,0,0,0,0,0,0,0],l=0,u=null,h=0,d=function(){return P(e,h)};if(":"==d()){if(":"!=P(e,1))return;h+=2,l++,u=l}while(d()){if(8==l)return;if(":"!=d()){t=n=0;while(n<4&&L(te,d()))t=16*t+R(d(),16),h++,n++;if("."==d()){if(0==n)return;if(h-=n,l>6)return;r=0;while(d()){if(i=null,r>0){if(!("."==d()&&r<4))return;h++}if(!L(Q,d()))return;while(L(Q,d())){if(s=R(d(),10),null===i)i=s;else{if(0==i)return;i=10*i+s}if(i>255)return;h++}c[l]=256*c[l]+i,r++,2!=r&&4!=r||l++}if(4!=r)return;break}if(":"==d()){if(h++,!d())return}else if(d())return;c[l++]=t}else{if(null!==u)return;h++,l++,u=l}}if(null!==u){o=l-u,l=7;while(0!=l&&o>0)a=c[l],c[l--]=c[u+o-1],c[u+--o]=a}else if(8!=l)return;return c},ce=function(e){for(var t=null,n=1,r=null,i=0,s=0;s<8;s++)0!==e[s]?(i>n&&(t=r,n=i),r=null,i=0):(null===r&&(r=s),++i);return i>n&&(t=r,n=i),t},le=function(e){var t,n,r,i;if("number"==typeof e){for(t=[],n=0;n<4;n++)z(t,e%256),e=N(e/256);return D(t,".")}if("object"==typeof e){for(t="",r=ce(e),n=0;n<8;n++)i&&0===e[n]||(i&&(i=!1),r===n?(t+=n?":":"::",i=!0):(t+=F(e[n],16),n<7&&(t+=":")));return"["+t+"]"}return e},ue={},he=p({},ue,{" ":1,'"':1,"<":1,">":1,"`":1}),de=p({},he,{"#":1,"?":1,"{":1,"}":1}),fe=p({},de,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),pe=function(e,t){var n=v(e,0);return n>32&&n<127&&!f(t,e)?e:encodeURIComponent(e)},me={ftp:21,file:null,http:80,https:443,ws:80,wss:443},ge=function(e,t){var n;return 2==e.length&&L(Y,P(e,0))&&(":"==(n=P(e,1))||!t&&"|"==n)},ve=function(e){var t;return e.length>1&&ge(B(e,0,2))&&(2==e.length||"/"===(t=P(e,2))||"\\"===t||"?"===t||"#"===t)},ye=function(e){return"."===e||"%2e"===$(e)},we=function(e){return e=$(e),".."===e||"%2e."===e||".%2e"===e||"%2e%2e"===e},be={},_e={},Ie={},Te={},Ee={},ke={},Se={},xe={},Ce={},Ae={},Re={},Ne={},Oe={},Pe={},Le={},De={},Fe={},Me={},qe={},Ue={},Ve={},je=function(e,t,n){var r,i,s,o=w(e);if(t){if(i=this.parse(o),i)throw A(i);this.searchParams=null}else{if(void 0!==n&&(r=new je(n,!0)),i=this.parse(o,null,r),i)throw A(i);s=x(new S),s.bindURL(this),this.searchParams=s}};je.prototype={type:"URL",parse:function(e,t,n){var i,s,o,a,c=this,l=t||be,u=0,h="",d=!1,p=!1,v=!1;e=w(e),t||(c.scheme="",c.username="",c.password="",c.host=null,c.port=null,c.path=[],c.query=null,c.fragment=null,c.cannotBeABaseURL=!1,e=U(e,ie,"")),e=U(e,se,""),i=m(e);while(u<=i.length){switch(s=i[u],l){case be:if(!s||!L(Y,s)){if(t)return K;l=Ie;continue}h+=$(s),l=_e;break;case _e:if(s&&(L(J,s)||"+"==s||"-"==s||"."==s))h+=$(s);else{if(":"!=s){if(t)return K;h="",l=Ie,u=0;continue}if(t&&(c.isSpecial()!=f(me,h)||"file"==h&&(c.includesCredentials()||null!==c.port)||"file"==c.scheme&&!c.host))return;if(c.scheme=h,t)return void(c.isSpecial()&&me[c.scheme]==c.port&&(c.port=null));h="","file"==c.scheme?l=Pe:c.isSpecial()&&n&&n.scheme==c.scheme?l=Te:c.isSpecial()?l=xe:"/"==i[u+1]?(l=Ee,u++):(c.cannotBeABaseURL=!0,q(c.path,""),l=qe)}break;case Ie:if(!n||n.cannotBeABaseURL&&"#"!=s)return K;if(n.cannotBeABaseURL&&"#"==s){c.scheme=n.scheme,c.path=g(n.path),c.query=n.query,c.fragment="",c.cannotBeABaseURL=!0,l=Ve;break}l="file"==n.scheme?Pe:ke;continue;case Te:if("/"!=s||"/"!=i[u+1]){l=ke;continue}l=Ce,u++;break;case Ee:if("/"==s){l=Ae;break}l=Me;continue;case ke:if(c.scheme=n.scheme,s==r)c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,c.path=g(n.path),c.query=n.query;else if("/"==s||"\\"==s&&c.isSpecial())l=Se;else if("?"==s)c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,c.path=g(n.path),c.query="",l=Ue;else{if("#"!=s){c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,c.path=g(n.path),c.path.length--,l=Me;continue}c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,c.path=g(n.path),c.query=n.query,c.fragment="",l=Ve}break;case Se:if(!c.isSpecial()||"/"!=s&&"\\"!=s){if("/"!=s){c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,l=Me;continue}l=Ae}else l=Ce;break;case xe:if(l=Ce,"/"!=s||"/"!=P(h,u+1))continue;u++;break;case Ce:if("/"!=s&&"\\"!=s){l=Ae;continue}break;case Ae:if("@"==s){d&&(h="%40"+h),d=!0,o=m(h);for(var y=0;y<o.length;y++){var b=o[y];if(":"!=b||v){var _=pe(b,fe);v?c.password+=_:c.username+=_}else v=!0}h=""}else if(s==r||"/"==s||"?"==s||"#"==s||"\\"==s&&c.isSpecial()){if(d&&""==h)return H;u-=m(h).length+1,h="",l=Re}else h+=s;break;case Re:case Ne:if(t&&"file"==c.scheme){l=De;continue}if(":"!=s||p){if(s==r||"/"==s||"?"==s||"#"==s||"\\"==s&&c.isSpecial()){if(c.isSpecial()&&""==h)return W;if(t&&""==h&&(c.includesCredentials()||null!==c.port))return;if(a=c.parseHost(h),a)return a;if(h="",l=Fe,t)return;continue}"["==s?p=!0:"]"==s&&(p=!1),h+=s}else{if(""==h)return W;if(a=c.parseHost(h),a)return a;if(h="",l=Oe,t==Ne)return}break;case Oe:if(!L(Q,s)){if(s==r||"/"==s||"?"==s||"#"==s||"\\"==s&&c.isSpecial()||t){if(""!=h){var I=R(h,10);if(I>65535)return G;c.port=c.isSpecial()&&I===me[c.scheme]?null:I,h=""}if(t)return;l=Fe;continue}return G}h+=s;break;case Pe:if(c.scheme="file","/"==s||"\\"==s)l=Le;else{if(!n||"file"!=n.scheme){l=Me;continue}if(s==r)c.host=n.host,c.path=g(n.path),c.query=n.query;else if("?"==s)c.host=n.host,c.path=g(n.path),c.query="",l=Ue;else{if("#"!=s){ve(D(g(i,u),""))||(c.host=n.host,c.path=g(n.path),c.shortenPath()),l=Me;continue}c.host=n.host,c.path=g(n.path),c.query=n.query,c.fragment="",l=Ve}}break;case Le:if("/"==s||"\\"==s){l=De;break}n&&"file"==n.scheme&&!ve(D(g(i,u),""))&&(ge(n.path[0],!0)?q(c.path,n.path[0]):c.host=n.host),l=Me;continue;case De:if(s==r||"/"==s||"\\"==s||"?"==s||"#"==s){if(!t&&ge(h))l=Me;else if(""==h){if(c.host="",t)return;l=Fe}else{if(a=c.parseHost(h),a)return a;if("localhost"==c.host&&(c.host=""),t)return;h="",l=Fe}continue}h+=s;break;case Fe:if(c.isSpecial()){if(l=Me,"/"!=s&&"\\"!=s)continue}else if(t||"?"!=s)if(t||"#"!=s){if(s!=r&&(l=Me,"/"!=s))continue}else c.fragment="",l=Ve;else c.query="",l=Ue;break;case Me:if(s==r||"/"==s||"\\"==s&&c.isSpecial()||!t&&("?"==s||"#"==s)){if(we(h)?(c.shortenPath(),"/"==s||"\\"==s&&c.isSpecial()||q(c.path,"")):ye(h)?"/"==s||"\\"==s&&c.isSpecial()||q(c.path,""):("file"==c.scheme&&!c.path.length&&ge(h)&&(c.host&&(c.host=""),h=P(h,0)+":"),q(c.path,h)),h="","file"==c.scheme&&(s==r||"?"==s||"#"==s))while(c.path.length>1&&""===c.path[0])V(c.path);"?"==s?(c.query="",l=Ue):"#"==s&&(c.fragment="",l=Ve)}else h+=pe(s,de);break;case qe:"?"==s?(c.query="",l=Ue):"#"==s?(c.fragment="",l=Ve):s!=r&&(c.path[0]+=pe(s,ue));break;case Ue:t||"#"!=s?s!=r&&("'"==s&&c.isSpecial()?c.query+="%27":c.query+="#"==s?"%23":pe(s,ue)):(c.fragment="",l=Ve);break;case Ve:s!=r&&(c.fragment+=pe(s,he));break}u++}},parseHost:function(e){var t,n,r;if("["==P(e,0)){if("]"!=P(e,e.length-1))return W;if(t=ae(B(e,1,-1)),!t)return W;this.host=t}else if(this.isSpecial()){if(e=y(e),L(ne,e))return W;if(t=oe(e),null===t)return W;this.host=t}else{if(L(re,e))return W;for(t="",n=m(e),r=0;r<n.length;r++)t+=pe(n[r],ue);this.host=t}},cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||"file"==this.scheme},includesCredentials:function(){return""!=this.username||""!=this.password},isSpecial:function(){return f(me,this.scheme)},shortenPath:function(){var e=this.path,t=e.length;!t||"file"==this.scheme&&1==t&&ge(e[0],!0)||e.length--},serialize:function(){var e=this,t=e.scheme,n=e.username,r=e.password,i=e.host,s=e.port,o=e.path,a=e.query,c=e.fragment,l=t+":";return null!==i?(l+="//",e.includesCredentials()&&(l+=n+(r?":"+r:"")+"@"),l+=le(i),null!==s&&(l+=":"+s)):"file"==t&&(l+="//"),l+=e.cannotBeABaseURL?o[0]:o.length?"/"+D(o,"/"):"",null!==a&&(l+="?"+a),null!==c&&(l+="#"+c),l},setHref:function(e){var t=this.parse(e);if(t)throw A(t);this.searchParams.update()},getOrigin:function(){var e=this.scheme,t=this.port;if("blob"==e)try{return new Be(e.path[0]).origin}catch(n){return"null"}return"file"!=e&&this.isSpecial()?e+"://"+le(this.host)+(null!==t?":"+t:""):"null"},getProtocol:function(){return this.scheme+":"},setProtocol:function(e){this.parse(w(e)+":",be)},getUsername:function(){return this.username},setUsername:function(e){var t=m(w(e));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var n=0;n<t.length;n++)this.username+=pe(t[n],fe)}},getPassword:function(){return this.password},setPassword:function(e){var t=m(w(e));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var n=0;n<t.length;n++)this.password+=pe(t[n],fe)}},getHost:function(){var e=this.host,t=this.port;return null===e?"":null===t?le(e):le(e)+":"+t},setHost:function(e){this.cannotBeABaseURL||this.parse(e,Re)},getHostname:function(){var e=this.host;return null===e?"":le(e)},setHostname:function(e){this.cannotBeABaseURL||this.parse(e,Ne)},getPort:function(){var e=this.port;return null===e?"":w(e)},setPort:function(e){this.cannotHaveUsernamePasswordPort()||(e=w(e),""==e?this.port=null:this.parse(e,Oe))},getPathname:function(){var e=this.path;return this.cannotBeABaseURL?e[0]:e.length?"/"+D(e,"/"):""},setPathname:function(e){this.cannotBeABaseURL||(this.path=[],this.parse(e,Fe))},getSearch:function(){var e=this.query;return e?"?"+e:""},setSearch:function(e){e=w(e),""==e?this.query=null:("?"==P(e,0)&&(e=B(e,1)),this.query="",this.parse(e,Ue)),this.searchParams.update()},getSearchParams:function(){return this.searchParams.facade},getHash:function(){var e=this.fragment;return e?"#"+e:""},setHash:function(e){e=w(e),""!=e?("#"==P(e,0)&&(e=B(e,1)),this.fragment="",this.parse(e,Ve)):this.fragment=null},update:function(){this.query=this.searchParams.serialize()||null}};var Be=function(e){var t=d(this,$e),n=_(arguments.length,1)>1?arguments[1]:void 0,r=E(t,new je(e,!1,n));s||(t.href=r.serialize(),t.origin=r.getOrigin(),t.protocol=r.getProtocol(),t.username=r.getUsername(),t.password=r.getPassword(),t.host=r.getHost(),t.hostname=r.getHostname(),t.port=r.getPort(),t.pathname=r.getPathname(),t.search=r.getSearch(),t.searchParams=r.getSearchParams(),t.hash=r.getHash())},$e=Be.prototype,ze=function(e,t){return{get:function(){return k(this)[e]()},set:t&&function(e){return k(this)[t](e)},configurable:!0,enumerable:!0}};if(s&&u($e,{href:ze("serialize","setHref"),origin:ze("getOrigin"),protocol:ze("getProtocol","setProtocol"),username:ze("getUsername","setUsername"),password:ze("getPassword","setPassword"),host:ze("getHost","setHost"),hostname:ze("getHostname","setHostname"),port:ze("getPort","setPort"),pathname:ze("getPathname","setPathname"),search:ze("getSearch","setSearch"),searchParams:ze("getSearchParams"),hash:ze("getHash","setHash")}),h($e,"toJSON",(function(){return k(this).serialize()}),{enumerable:!0}),h($e,"toString",(function(){return k(this).serialize()}),{enumerable:!0}),C){var He=C.createObjectURL,Ke=C.revokeObjectURL;He&&h(Be,"createObjectURL",c(He,C)),Ke&&h(Be,"revokeObjectURL",c(Ke,C))}b(Be,"URL"),i({global:!0,forced:!o,sham:!s},{URL:Be})},8336:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r.Z});var r=n(9457),i="firebase",s="9.6.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.Z.registerVersion(i,s,"app-compat")},1756:(e,t,n)=>{"use strict";var r=n(9457),i=n(5479),s=n(9036);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(1492),c=n(4676);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const l={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f=h,p=d,m=new i.LL("auth","Firebase",d()),g=new a.Yd("@firebase/auth");function v(e,...t){g.logLevel<=a["in"].ERROR&&g.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e,...t){throw I(e,...t)}function w(e,...t){return I(e,...t)}function b(e,t,n){const r=Object.assign(Object.assign({},p()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}function _(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&y(e,"argument-error"),b(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return m.create(e,...t)}function T(e,t,...n){if(!e)throw I(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw v(t),new Error(t)}function k(e,t){e||E(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new Map;function x(e){k(e instanceof Function,"Expected a class definition");let t=S.get(e);return t?(k(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,S.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(x);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function R(){return"http:"===N()||"https:"===N()}function N(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(R()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function P(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,t){this.shortDelay=e,this.longDelay=t,k(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return O()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){k(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},q=new L(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function V(e,t,n,r,s={}){return j(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),F.fetch()($(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function j(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},M),t);try{const t=new z(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw H(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw H(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw H(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(e,a,o);y(e,a)}}catch(s){if(s instanceof i.ZR)throw s;y(e,"network-request-failed")}}async function B(e,t,n,r,i={}){const s=await V(e,t,n,r,i);return"mfaPendingCredential"in s&&y(e,"multi-factor-auth-required",{_serverResponse:s}),s}function $(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?D(e.config,i):`${e.config.apiScheme}://${i}`}class z{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(w(this.auth,"network-request-failed"))),q.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function H(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=w(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t){return V(e,"POST","/v1/accounts:delete",t)}async function W(e,t){return V(e,"POST","/v1/accounts:update",t)}async function G(e,t){return V(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t=!1){const n=(0,i.m9)(e),r=await n.getIdToken(t),s=Z(r);T(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:Y(Q(s.auth_time)),issuedAtTime:Y(Q(s.iat)),expirationTime:Y(Q(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Q(e){return 1e3*Number(e)}function Z(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return v("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(n);return e?JSON.parse(e):(v("Failed to decode base64 JWT payload"),null)}catch(s){return v("Caught error parsing JWT payload as JSON",s),null}}function X(e){const t=Z(e);return T(t,"internal-error"),T("undefined"!==typeof t.exp,"internal-error"),T("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&te(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function te({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Y(this.lastLoginAt),this.creationTime=Y(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ee(e,G(n,{idToken:r}));T(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ae(s.providerUserInfo):[],a=oe(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new re(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function se(e){const t=(0,i.m9)(e);await ie(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function oe(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ae(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e,t){const n=await j(e,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=$(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",F.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T("undefined"!==typeof e.idToken,"internal-error"),T("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ce(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new le;return n&&(T("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(T("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(T("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new le,this.toJSON())}_performRefresh(){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e,t){T("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class he{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new ne(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new re(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ee(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return J(this,e)}reload(){return se(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new he(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ie(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ee(this,K(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:I}=t;T(y&&I,e,"internal-error");const E=le.fromJSON(this.name,I);T("string"===typeof y,e,"internal-error"),ue(u,e.name),ue(h,e.name),T("boolean"===typeof w,e,"internal-error"),T("boolean"===typeof b,e,"internal-error"),ue(d,e.name),ue(f,e.name),ue(p,e.name),ue(m,e.name),ue(g,e.name),ue(v,e.name);const k=new he({uid:y,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(k.providerData=_.map((e=>Object.assign({},e)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new le;r.updateFromServerResponse(t);const i=new he({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ie(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class me{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,i),this.fullPersistenceKey=pe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?he._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new me(x(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||x(fe);const s=pe(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=he._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new me(i,e,n)):new me(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ve(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ie(t))return"Blackberry";if(Te(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||we(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ve(e=(0,i.z$)()){return/firefox\//i.test(e)}function ye(e=(0,i.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function we(e=(0,i.z$)()){return/crios\//i.test(e)}function be(e=(0,i.z$)()){return/iemobile/i.test(e)}function _e(e=(0,i.z$)()){return/android/i.test(e)}function Ie(e=(0,i.z$)()){return/blackberry/i.test(e)}function Te(e=(0,i.z$)()){return/webos/i.test(e)}function Ee(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)}function ke(e=(0,i.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Se(e=(0,i.z$)()){var t;return Ee(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function xe(){return(0,i.w1)()&&10===document.documentMode}function Ce(e=(0,i.z$)()){return Ee(e)||_e(e)||Te(e)||Ie(e)||/windows phone/i.test(e)||be(e)}function Ae(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e,t=[]){let n;switch(e){case"Browser":n=ge((0,i.z$)());break;case"Worker":n=`${ge((0,i.z$)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pe(this),this.idTokenSubscription=new Pe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=x(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ie(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=P()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.m9)(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(x(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&x(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[x(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return T(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Re(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Oe(e){return(0,i.m9)(e)}class Pe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Le(e,t,n){const r=Oe(e);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=De(t),{host:o,port:a}=Fe(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qe()}function De(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Fe(e){const t=De(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Me(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Me(t)}}}function Me(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function qe(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(e,t){return V(e,"POST","/v1/accounts:resetPassword",U(e,t))}async function je(e,t){return V(e,"POST","/v1/accounts:update",t)}async function Be(e,t){return V(e,"POST","/v1/accounts:update",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t){return B(e,"POST","/v1/accounts:signInWithPassword",U(e,t))}async function ze(e,t){return V(e,"POST","/v1/accounts:sendOobCode",U(e,t))}async function He(e,t){return ze(e,t)}async function Ke(e,t){return ze(e,t)}async function We(e,t){return ze(e,t)}async function Ge(e,t){return ze(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(e,t){return B(e,"POST","/v1/accounts:signInWithEmailLink",U(e,t))}async function Je(e,t){return B(e,"POST","/v1/accounts:signInWithEmailLink",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends Ue{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Qe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Qe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return $e(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ye(e,{email:this._email,oobCode:this._password});default:y(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return je(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Je(e,{idToken:t,email:this._email,oobCode:this._password});default:y(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(e,t){return B(e,"POST","/v1/accounts:signInWithIdp",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="http://localhost";class et extends Ue{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):y("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new et(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}buildRequest(){const e={requestUri:Xe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t){return V(e,"POST","/v1/accounts:sendVerificationCode",U(e,t))}async function nt(e,t){return B(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,t))}async function rt(e,t){const n=await B(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,t));if(n.temporaryProof)throw H(e,"account-exists-with-different-credential",n);return n}const it={["USER_NOT_FOUND"]:"user-not-found"};async function st(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return B(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,n),it)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Ue{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ot({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ot({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return nt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return rt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return st(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ot({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ct(e){const t=(0,i.zd)((0,i.pd)(e))["link"],n=t?(0,i.zd)((0,i.pd)(t))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||t||e}class lt{constructor(e){var t,n,r,s,o,a;const c=(0,i.zd)((0,i.pd)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=at(null!==(r=c["mode"])&&void 0!==r?r:null);T(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=ct(e);try{return new lt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(){this.providerId=ut.PROVIDER_ID}static credential(e,t){return Qe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=lt.parseLink(t);return T(n,"argument-error"),Qe._fromEmailAndCode(e,n.code,n.tenantId)}}ut.PROVIDER_ID="password",ut.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ut.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends ht{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ft extends dt{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return T("providerId"in t&&"signInMethod"in t,"argument-error"),et._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return T(e.idToken||e.accessToken,"argument-error"),et._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ft.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ft.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new ft(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends dt{constructor(){super("facebook.com")}static credential(e){return et._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch(t){return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com",pt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends dt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return et._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return mt.credential(t,n)}catch(r){return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com",mt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends dt{constructor(){super("github.com")}static credential(e){return et._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch(t){return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com",gt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vt="http://localhost";class yt extends Ue{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new yt(n,i):null}static _create(e,t){return new yt(e,t)}buildRequest(){return{requestUri:vt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="saml.";class bt extends ht{constructor(e){T(e.startsWith(wt),"argument-error"),super(e)}static credentialFromResult(e){return bt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return bt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=yt.fromJSON(e);return T(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return yt._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends dt{constructor(){super("twitter.com")}static credential(e,t){return et._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return _t.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function It(e,t){return B(e,"POST","/v1/accounts:signUp",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.TWITTER_SIGN_IN_METHOD="twitter.com",_t.PROVIDER_ID="twitter.com";class Tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await he._fromIdTokenResponse(e,n,r),s=Et(n),o=new Tt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Et(n);return new Tt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(e){var t;const n=Oe(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Tt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await It(n,{returnSecureToken:!0}),i=await Tt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,St.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new St(e,t,n,r)}}function xt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw St._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(e,t){const n=(0,i.m9)(e);await Nt(!0,n,t);const{providerUserInfo:r}=await W(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=Ct(r||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Rt(e,t,n=!1){const r=await ee(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Tt._forOperation(e,"link",r)}async function Nt(e,t,n){await ie(t);const r=Ct(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";T(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ee(e,xt(r,i,t,e),n);T(s.idToken,r,"internal-error");const o=Z(s.idToken);T(o,r,"internal-error");const{sub:a}=o;return T(e.uid===a,r,"user-mismatch"),Tt._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&y(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(e,t,n=!1){const r="signIn",i=await xt(e,r,t),s=await Tt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Lt(e,t){return Pt(Oe(e),t)}async function Dt(e,t){const n=(0,i.m9)(e);return await Nt(!1,n,t.providerId),Rt(n,t)}async function Ft(e,t){return Ot((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(e,t){return B(e,"POST","/v1/accounts:signInWithCustomToken",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(e,t){const n=Oe(e),r=await Mt(n,{token:t,returnSecureToken:!0}),i=await Tt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Vt._fromServerResponse(e,t):y(e,"internal-error")}}class Vt extends Ut{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Vt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e,t,n){var r;T((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),T("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(T(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(T(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(e,t,n){const r=(0,i.m9)(e),s={requestType:"PASSWORD_RESET",email:t};n&&jt(r,s,n),await Ke(r,s)}async function $t(e,t,n){await Ve((0,i.m9)(e),{oobCode:t,newPassword:n})}async function zt(e,t){await Be((0,i.m9)(e),{oobCode:t})}async function Ht(e,t){const n=(0,i.m9)(e),r=await Ve(n,{oobCode:t}),s=r.requestType;switch(T(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":T(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":T(r.mfaInfo,n,"internal-error");default:T(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=Ut._fromServerResponse(Oe(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function Kt(e,t){const{data:n}=await Ht((0,i.m9)(e),t);return n.email}async function Wt(e,t,n){const r=Oe(e),i=await It(r,{returnSecureToken:!0,email:t,password:n}),s=await Tt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Gt(e,t,n){return Lt((0,i.m9)(e),ut.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(e,t,n){const r=(0,i.m9)(e),s={requestType:"EMAIL_SIGNIN",email:t};T(n.handleCodeInApp,r,"argument-error"),n&&jt(r,s,n),await We(r,s)}function Jt(e,t){const n=lt.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Qt(e,t,n){const r=(0,i.m9)(e),s=ut.credentialWithLink(t,n||A());return T(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Lt(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(e,t){return V(e,"POST","/v1/accounts:createAuthUri",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e,t){const n=R()?A():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:s}=await Zt((0,i.m9)(e),r);return s||[]}async function en(e,t){const n=(0,i.m9)(e),r=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};t&&jt(n.auth,s,t);const{email:o}=await He(n.auth,s);o!==e.email&&await e.reload()}async function tn(e,t,n){const r=(0,i.m9)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&jt(r.auth,o,n);const{email:a}=await Ge(r.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(e,t){return V(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.m9)(e),s=await r.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await ee(r,nn(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function sn(e,t){return an((0,i.m9)(e),t,null)}function on(e,t){return an((0,i.m9)(e),null,t)}async function an(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await ee(e,je(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=Z(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new ln(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new hn(s,i);case"github.com":return new dn(s,i);case"google.com":return new fn(s,i);case"twitter.com":return new pn(s,i,e.screenName||null);case"custom":case"anonymous":return new ln(s,null);default:return new ln(s,r,i)}}class ln{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class un extends ln{constructor(e,t,n,r){super(e,t,n),this.username=r}}class hn extends ln{constructor(e,t){super(e,"facebook.com",t)}}class dn extends un{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class fn extends ln{constructor(e,t){super(e,"google.com",t)}}class pn extends un{constructor(e,t,n){super(e,"twitter.com",t,n)}}function mn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:cn(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new gn("enroll",e)}static _fromMfaPendingCredential(e){return new gn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return gn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return gn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Oe(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>Ut._fromServerResponse(n,e)));T(r.mfaPendingCredential,n,"internal-error");const s=gn._fromMfaPendingCredential(r.mfaPendingCredential);return new vn(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Tt._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return T(t.user,n,"internal-error"),Tt._forOperation(t.user,t.operationType,o);default:y(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function yn(e,t){var n;const r=(0,i.m9)(e),s=t;return T(t.customData.operationType,r,"argument-error"),T(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),vn._fromError(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:start",U(e,t))}function bn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",U(e,t))}function _n(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:withdraw",U(e,t))}class In{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Ut._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new In(e)}async getSession(){return gn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await ee(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),r=await ee(this.user,_n(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==i.code)throw i}}}const Tn=new WeakMap;function En(e){const t=(0,i.m9)(e);return Tn.has(t)||Tn.set(t,In._fromUser(t)),Tn.get(t)}const kn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(kn,"1"),this.storage.removeItem(kn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){const e=(0,i.z$)();return ye(e)||Ee(e)}const Cn=1e3,An=10;class Rn extends Sn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xn()&&Ae(),this.fallbackToPolling=Ce(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);xe()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,An):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Cn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rn.type="LOCAL";const Nn=Rn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Sn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}On.type="SESSION";const Pn=On;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Dn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Ln(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn.receivers=[];class Mn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Fn("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(){return window}function Un(e){qn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return"undefined"!==typeof qn()["WorkerGlobalScope"]&&"function"===typeof qn()["importScripts"]}async function jn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Bn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function $n(){return Vn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="firebaseLocalStorageDb",Hn=1,Kn="firebaseLocalStorage",Wn="fbase_key";class Gn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Yn(e,t){return e.transaction([Kn],t?"readwrite":"readonly").objectStore(Kn)}function Jn(){const e=indexedDB.deleteDatabase(zn);return new Gn(e).toPromise()}function Qn(){const e=indexedDB.open(zn,Hn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Kn,{keyPath:Wn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Kn)?t(n):(n.close(),await Jn(),t(await Qn()))}))}))}async function Zn(e,t,n){const r=Yn(e,!0).put({[Wn]:t,value:n});return new Gn(r).toPromise()}async function Xn(e,t){const n=Yn(e,!1).get(t),r=await new Gn(n).toPromise();return void 0===r?null:r.value}function er(e,t){const n=Yn(e,!0).delete(t);return new Gn(n).toPromise()}const tr=800,nr=3;class rr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Qn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>nr)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dn._getInstance($n()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await jn(),!this.activeServiceWorker)return;this.sender=new Mn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Bn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qn();return await Zn(e,kn,"1"),await er(e,kn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Zn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Xn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>er(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Yn(e,!1).getAll();return new Gn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),tr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}rr.type="LOCAL";const ir=rr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:start",U(e,t))}function or(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(e){return(await V(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function lr(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=w("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",cr().appendChild(r)}))}function ur(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=500,dr=6e4,fr=1e12;class pr{constructor(e){this.auth=e,this.counter=fr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new mr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||fr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||fr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||fr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class mr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;T(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=gr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),dr)}),hr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function gr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=ur("rcb"),yr=new L(3e4,6e4),wr="https://www.google.com/recaptcha/api.js?";class br{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!qn().grecaptcha}load(e,t=""){return T(_r(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(qn().grecaptcha):new Promise(((n,r)=>{const s=qn().setTimeout((()=>{r(w(e,"network-request-failed"))}),yr.get());qn()[vr]=()=>{qn().clearTimeout(s),delete qn()[vr];const i=qn().grecaptcha;if(!i)return void r(w(e,"internal-error"));const o=i.render;i.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const o=`${wr}?${(0,i.xO)({onload:vr,render:"explicit",hl:t})}`;lr(o).catch((()=>{clearTimeout(s),r(w(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!qn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function _r(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Ir{async load(e){return new pr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="recaptcha",Er={theme:"light",type:"image"};class kr{constructor(e,t=Object.assign({},Er),n){this.parameters=t,this.type=Tr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Oe(n),this.isInvisible="invisible"===this.parameters.size,T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;T(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Ir:new br,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){T(!this.parameters.sitekey,this.auth,"argument-error"),T(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=qn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){T(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){T(R()&&!Vn(),this.auth,"internal-error"),await Sr(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ar(this.auth);T(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return T(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Sr(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ot._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Cr(e,t,n){const r=Oe(e),s=await Nr(r,t,(0,i.m9)(n));return new xr(s,(e=>Lt(r,e)))}async function Ar(e,t,n){const r=(0,i.m9)(e);await Nt(!1,r,"phone");const s=await Nr(r.auth,t,(0,i.m9)(n));return new xr(s,(e=>Dt(r,e)))}async function Rr(e,t,n){const r=(0,i.m9)(e),s=await Nr(r.auth,t,(0,i.m9)(n));return new xr(s,(e=>Ft(r,e)))}async function Nr(e,t,n){var r;const i=await n.verify();try{let s;if(T("string"===typeof i,e,"argument-error"),T(n.type===Tr,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){T("enroll"===t.type,e,"internal-error");const n=await wn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{T("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;T(n,e,"missing-multi-factor-info");const o=await sr(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await tt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Or(e,t){await Rt((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.providerId=Pr.PROVIDER_ID,this.auth=Oe(e)}verifyPhoneNumber(e,t){return Nr(this.auth,e,(0,i.m9)(t))}static credential(e,t){return ot._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Pr.credentialFromTaggedObject(t)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ot._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lr(e,t){return t?x(t):(T(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pr.PROVIDER_ID="phone",Pr.PHONE_SIGN_IN_METHOD="phone";class Dr extends Ue{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ze(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ze(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ze(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Fr(e){return Pt(e.auth,new Dr(e),e.bypassAuthState)}function Mr(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),Ot(n,new Dr(e),e.bypassAuthState)}async function qr(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),Rt(n,new Dr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fr;case"linkViaPopup":case"linkViaRedirect":return qr;case"reauthViaPopup":case"reauthViaRedirect":return Mr;default:y(this.auth,"internal-error")}}resolve(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new L(2e3,1e4);async function jr(e,t,n){const r=Oe(e);_(e,t,ht);const i=Lr(r,n),s=new zr(r,"signInViaPopup",t,i);return s.executeNotNull()}async function Br(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,ht);const s=Lr(r.auth,n),o=new zr(r.auth,"reauthViaPopup",t,s,r);return o.executeNotNull()}async function $r(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,ht);const s=Lr(r.auth,n),o=new zr(r.auth,"linkViaPopup",t,s,r);return o.executeNotNull()}class zr extends Ur{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){k(1===this.filter.length,"Popup operations only handle one event");const e=Fn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(w(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(w(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(w(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Vr.get())};e()}}zr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hr="pendingRedirect",Kr=new Map;class Wr extends Ur{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Kr.get(this.auth._key());if(!e){try{const t=await Gr(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Kr.set(this.auth._key(),e)}return this.bypassAuthState||Kr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Gr(e,t){const n=Zr(t),r=Qr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function Yr(e,t){return Qr(e)._set(Zr(t),"true")}function Jr(){Kr.clear()}function Qr(e){return x(e._redirectPersistence)}function Zr(e){return pe(Hr,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(e,t,n){return ei(e,t,n)}async function ei(e,t,n){const r=Oe(e);_(e,t,ht);const i=Lr(r,n);return await Yr(i,r),i._openRedirect(r,t,"signInViaRedirect")}function ti(e,t,n){return ni(e,t,n)}async function ni(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,ht);const s=Lr(r.auth,n);await Yr(s,r.auth);const o=await ai(r);return s._openRedirect(r.auth,t,"reauthViaRedirect",o)}function ri(e,t,n){return ii(e,t,n)}async function ii(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,ht);const s=Lr(r.auth,n);await Nt(!1,r,t.providerId),await Yr(s,r.auth);const o=await ai(r);return s._openRedirect(r.auth,t,"linkViaRedirect",o)}async function si(e,t){return await Oe(e)._initializationPromise,oi(e,t,!1)}async function oi(e,t,n=!1){const r=Oe(e),i=Lr(r,t),s=new Wr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function ai(e){const t=Fn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=6e5;class li{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!di(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!hi(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(w(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ci&&this.cachedEventUids.clear(),this.cachedEventUids.has(ui(e))}saveEventToCache(e){this.cachedEventUids.add(ui(e)),this.lastProcessedEventTime=Date.now()}}function ui(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function hi({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function di(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hi(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(e,t={}){return V(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mi=/^https?/;async function gi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await fi(e);for(const r of t)try{if(vi(r))return}catch(n){}y(e,"unauthorized-domain")}function vi(e){const t=A(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!mi.test(n))return!1;if(pi.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new L(3e4,6e4);function wi(){const e=qn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function bi(e){return new Promise(((t,n)=>{var r,i,s;function o(){wi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{wi(),n(w(e,"network-request-failed"))},timeout:yi.get()})}if(null===(i=null===(r=qn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=qn().gapi)||void 0===s?void 0:s.load)){const t=ur("iframefcb");return qn()[t]=()=>{gapi.load?o():n(w(e,"network-request-failed"))},lr(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw _i=null,e}))}let _i=null;function Ii(e){return _i=_i||bi(e),_i}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new L(5e3,15e3),Ei="__/auth/iframe",ki="emulator/auth/iframe",Si={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ci(e){const t=e.config;T(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?D(t,ki):`https://${e.config.authDomain}/${Ei}`,r={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=xi.get(e.config.apiHost);o&&(r.eid=o);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}async function Ai(e){const t=await Ii(e),n=qn().gapi;return T(n,e,"internal-error"),t.open({where:document.body,url:Ci(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Si,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=w(e,"network-request-failed"),s=qn().setTimeout((()=>{r(i)}),Ti.get());function o(){qn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ni=500,Oi=600,Pi="_blank",Li="http://localhost";class Di{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Fi(e,t,n,r=Ni,s=Oi){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Ri),{width:r.toString(),height:s.toString(),top:o,left:a}),u=(0,i.z$)().toLowerCase();n&&(c=we(u)?Pi:n),ve(u)&&(t=t||Li,l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Se(u)&&"_self"!==c)return Mi(t||"",c),new Di(null);const d=window.open(t||"",c,h);T(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Di(d)}function Mi(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="__/auth/handler",Ui="emulator/auth/handler";function Vi(e,t,n,r,o,a){T(e.config.authDomain,e,"auth-domain-config-required"),T(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.SDK_VERSION,eventId:o};if(t instanceof ht){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof dt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const i of Object.keys(l))void 0===l[i]&&delete l[i];return`${ji(e)}?${(0,i.xO)(l).slice(1)}`}function ji({config:e}){return e.emulator?D(e,Ui):`https://${e.authDomain}/${qi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="webStorageSupport";class $i{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pn,this._completeRedirectFn=oi}async _openPopup(e,t,n,r){var i;k(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Vi(e,t,n,A(),r);return Fi(e,s,Fn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Un(Vi(e,t,n,A(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(k(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Ai(e),n=new li(e);return t.register("authEvent",(t=>{T(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Bi,{type:Bi},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Bi];void 0!==i&&t(!!i),y(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ce()||ye()||Ee()}}const zi=$i;class Hi{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}}class Ki extends Hi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ki(e)}_finalizeEnroll(e,t,n){return bn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return or(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Wi{constructor(){}static assertion(e){return Ki._fromCredential(e)}}Wi.FACTOR_ID="phone";var Gi="@firebase/auth",Yi="0.19.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Zi(e){(0,s._registerComponent)(new c.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(t=>{T(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),T(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Re(e)},o=new Ne(t,r);return C(o,n),o})(r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,s._registerComponent)(new c.wA("auth-internal",(e=>{const t=Oe(e.getProvider("auth").getImmediate());return(e=>new Ji(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(Gi,Yi,Qi(e)),(0,s.registerVersion)(Gi,Yi,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xi(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zi("Browser");const es=2e3;async function ts(e,t,n){var r;const{BuildInfo:i}=Xi();k(t.sessionId,"AuthEvent did not contain a session ID");const s=await os(t.sessionId),o={};return Ee()?o["ibi"]=i.packageName:_e()?o["apn"]=i.packageName:y(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,Vi(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function ns(e){const{BuildInfo:t}=Xi(),n={};Ee()?n.iosBundleId=t.packageName:_e()?n.androidPackageName=t.packageName:y(e,"operation-not-supported-in-this-environment"),await fi(e,n)}function rs(e){const{cordova:t}=Xi();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,ke()?"_blank":"_system","location=yes"),n(i)}))}))}async function is(e,t,n){const{cordova:r}=Xi();let i=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function l(){a||(a=window.setTimeout((()=>{o(w(e,"redirect-cancelled-by-user"))}),es))}function u(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&l()}t.addPassiveListener(c),document.addEventListener("resume",l,!1),_e()&&document.addEventListener("visibilitychange",u,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}}))}finally{i()}}function ss(e){var t,n,r,i,s,o,a,c,l,u;const h=Xi();T("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),T("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),T("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T("function"===typeof(null===(u=null===(l=null===h||void 0===h?void 0:h.cordova)||void 0===l?void 0:l.InAppBrowser)||void 0===u?void 0:u.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function os(e){const t=as(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function as(e){if(k(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=20;class ls extends li{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function us(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:ps(),postBody:null,tenantId:e.tenantId,error:w(e,"no-auth-event")}}function hs(e,t){return ms()._set(gs(e),t)}async function ds(e){const t=await ms()._get(gs(e));return t&&await ms()._remove(gs(e)),t}function fs(e,t){var n,r;const i=ys(t);if(i.includes("/__/auth/callback")){const t=ws(i),s=t["firebaseError"]?vs(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?w(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function ps(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<cs;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function ms(){return x(Nn)}function gs(e){return pe("authEvent",e.config.apiKey,e.name)}function vs(e){try{return JSON.parse(e)}catch(t){return null}}function ys(e){const t=ws(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=ws(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=ws(i)["link"];return s||i||r||n||e}function ws(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,i.zd)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=500;class _s{constructor(){this._redirectPersistence=Pn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=oi}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new ls(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){y(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){ss(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),Jr(),await this._originValidation(e);const s=us(e,n,r);await hs(e,s);const o=await ts(e,s,t),a=await rs(o);return is(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ns(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=Xi(),s=setTimeout((async()=>{await ds(e),t.onEvent(Ts())}),bs),o=async n=>{clearTimeout(s);const r=await ds(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=fs(r,n["url"])),t.onEvent(i||Ts())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=`${i.packageName.toLowerCase()}://`;Xi().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const Is=_s;function Ts(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:w("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(e,t){Oe(e)._logFramework(t)}var ks="@firebase/auth-compat",Ss="0.2.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xs=1e3;function Cs(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function As(){return"http:"===Cs()||"https:"===Cs()}function Rs(e=(0,i.z$)()){return!("file:"!==Cs()&&"ionic:"!==Cs()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Ns(){return(0,i.b$)()||(0,i.UG)()}function Os(){return(0,i.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function Ps(e=(0,i.z$)()){return/Edge\/\d+/.test(e)}function Ls(e=(0,i.z$)()){return Os()||Ps(e)}function Ds(){try{const e=self.localStorage,t=Fn();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!Ls()||(0,i.hl)()}catch(e){return Fs()&&(0,i.hl)()}return!1}function Fs(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function Ms(){return(As()||(0,i.ru)()||Rs())&&!Ns()&&Ds()&&!Fs()}function qs(){return Rs()&&"undefined"!==typeof document}async function Us(){return!!qs()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),xs);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function Vs(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js={LOCAL:"local",NONE:"none",SESSION:"session"},Bs=T,$s="persistence";function zs(e,t){Bs(Object.values(js).includes(t),e,"invalid-persistence-type"),(0,i.b$)()?Bs(t!==js.SESSION,e,"unsupported-persistence-type"):(0,i.UG)()?Bs(t===js.NONE,e,"unsupported-persistence-type"):Fs()?Bs(t===js.NONE||t===js.LOCAL&&(0,i.hl)(),e,"unsupported-persistence-type"):Bs(t===js.NONE||Ds(),e,"unsupported-persistence-type")}async function Hs(e){await e._initializationPromise;const t=Ws(),n=pe($s,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function Ks(e,t){const n=Ws();if(!n)return[];const r=pe($s,e,t),i=n.getItem(r);switch(i){case js.NONE:return[fe];case js.LOCAL:return[ir,Pn];case js.SESSION:return[Pn];default:return[]}}function Ws(){var e;try{return(null===(e=Vs())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=T;class Ys{constructor(){this.browserResolver=x(zi),this.cordovaResolver=x(Is),this.underlyingResolver=null,this._redirectPersistence=Pn,this._completeRedirectFn=oi}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return qs()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Gs(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Us();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(e){return e.unwrap()}function Qs(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(e){return eo(e)}function Xs(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new ro(e,yn(e,t))}else if(r){const e=eo(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function eo(e){const{_tokenResponse:t}=e instanceof i.ZR?e.customData:e;if(!t)return null;if(!(e instanceof i.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return Pr.credentialFromResult(e);const n=t.providerId;if(!n||n===l.PASSWORD)return null;let r;switch(n){case l.GOOGLE:r=mt;break;case l.FACEBOOK:r=pt;break;case l.GITHUB:r=gt;break;case l.TWITTER:r=_t;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return i||s||e||o?o?n.startsWith("saml.")?yt._create(n,o):et._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new ft(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof i.ZR?r.credentialFromError(e):r.credentialFromResult(e)}function to(e,t){return t.catch((t=>{throw t instanceof i.ZR&&Xs(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:Zs(e),additionalUserInfo:mn(e),user:io.getOrCreate(n)}}))}async function no(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>to(e,n.confirm(t))}}class ro{constructor(e,t){this.resolver=t,this.auth=Qs(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return to(Js(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this._delegate=e,this.multiFactor=En(e)}static getOrCreate(e){return io.USER_MAP.has(e)||io.USER_MAP.set(e,new io(e)),io.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return to(this.auth,Dt(this._delegate,e))}async linkWithPhoneNumber(e,t){return no(this.auth,Ar(this._delegate,e,t))}async linkWithPopup(e){return to(this.auth,$r(this._delegate,e,Ys))}async linkWithRedirect(e){return await Hs(Oe(this.auth)),ri(this._delegate,e,Ys)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return to(this.auth,Ft(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return no(this.auth,Rr(this._delegate,e,t))}reauthenticateWithPopup(e){return to(this.auth,Br(this._delegate,e,Ys))}async reauthenticateWithRedirect(e){return await Hs(Oe(this.auth)),ti(this._delegate,e,Ys)}sendEmailVerification(e){return en(this._delegate,e)}async unlink(e){return await At(this._delegate,e),this}updateEmail(e){return sn(this._delegate,e)}updatePassword(e){return on(this._delegate,e)}updatePhoneNumber(e){return Or(this._delegate,e)}updateProfile(e){return rn(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return tn(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}io.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const so=T;class oo{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;so(n,"invalid-api-key",{appName:e.name}),so(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?Ys:void 0;this._delegate=t.initialize({options:{persistence:co(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(f),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?io.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Le(this._delegate,e,t)}applyActionCode(e){return zt(this._delegate,e)}checkActionCode(e){return Ht(this._delegate,e)}confirmPasswordReset(e,t){return $t(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return to(this._delegate,Wt(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Xt(this._delegate,e)}isSignInWithEmailLink(e){return Jt(this._delegate,e)}async getRedirectResult(){so(Ms(),this._delegate,"operation-not-supported-in-this-environment");const e=await si(this._delegate,Ys);return e?to(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Es(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=ao(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=ao(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return Yt(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Bt(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(zs(this._delegate,e),e){case js.SESSION:t=Pn;break;case js.LOCAL:const e=await x(ir)._isAvailable();t=e?ir:Nn;break;case js.NONE:t=fe;break;default:return y("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return to(this._delegate,kt(this._delegate))}signInWithCredential(e){return to(this._delegate,Lt(this._delegate,e))}signInWithCustomToken(e){return to(this._delegate,qt(this._delegate,e))}signInWithEmailAndPassword(e,t){return to(this._delegate,Gt(this._delegate,e,t))}signInWithEmailLink(e,t){return to(this._delegate,Qt(this._delegate,e,t))}signInWithPhoneNumber(e,t){return no(this._delegate,Cr(this._delegate,e,t))}async signInWithPopup(e){return so(Ms(),this._delegate,"operation-not-supported-in-this-environment"),to(this._delegate,jr(this._delegate,e,Ys))}async signInWithRedirect(e){return so(Ms(),this._delegate,"operation-not-supported-in-this-environment"),await Hs(this._delegate),Xr(this._delegate,e,Ys)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Kt(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function ao(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&io.getOrCreate(e));return{next:s,error:t,complete:n}}function co(e,t){const n=Ks(e,t);if("undefined"===typeof self||n.includes(ir)||n.push(ir),"undefined"!==typeof window)for(const r of[Nn,Pn])n.includes(r)||n.push(r);return n.includes(fe)||n.push(fe),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oo.Persistence=js;class lo{constructor(){this.providerId="phone",this._delegate=new Pr(Js(r.Z.auth()))}static credential(e,t){return Pr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}lo.PHONE_SIGN_IN_METHOD=Pr.PHONE_SIGN_IN_METHOD,lo.PROVIDER_ID=Pr.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const uo=T;class ho{constructor(e,t,n=r.Z.app()){var i;uo(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new kr(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="auth-compat";function po(e){e.INTERNAL.registerComponent(new c.wA(fo,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new oo(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:u.EMAIL_SIGNIN,PASSWORD_RESET:u.PASSWORD_RESET,RECOVER_EMAIL:u.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:u.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:u.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:u.VERIFY_EMAIL}},EmailAuthProvider:ut,FacebookAuthProvider:pt,GithubAuthProvider:gt,GoogleAuthProvider:mt,OAuthProvider:ft,SAMLAuthProvider:bt,PhoneAuthProvider:lo,PhoneMultiFactorGenerator:Wi,RecaptchaVerifier:ho,TwitterAuthProvider:_t,Auth:oo,AuthCredential:Ue,Error:i.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(ks,Ss)}po(r.Z)},7452:(e,t,n)=>{"use strict";var r,i=n(9457),s=n(9036),o=n(4676),a=n(1492),c=n(5479),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},h=h||{},d=l||self;function f(){}function p(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function m(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function g(e){return Object.prototype.hasOwnProperty.call(e,v)&&e[v]||(e[v]=++y)}var v="closure_uid_"+(1e9*Math.random()>>>0),y=0;function w(e,t,n){return e.call.apply(e.bind,arguments)}function b(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _(e,t,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:b,_.apply(null,arguments)}function I(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function T(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}var k=0,S={};E.prototype.s=!1,E.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=k)){var e=g(this);delete S[e]}},E.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const x=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},C=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function A(e){e:{var t=Wn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function R(e){return Array.prototype.concat.apply([],arguments)}function N(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function O(e){return/^[\s\xa0]*$/.test(e)}var P,L=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function D(e,t){return-1!=e.indexOf(t)}function F(e,t){return e<t?-1:e>t?1:0}e:{var M=d.navigator;if(M){var q=M.userAgent;if(q){P=q;break e}}P=""}function U(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function V(e){const t={};for(const n in e)t[n]=e[n];return t}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function B(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<j.length;t++)n=j[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function $(e){return $[" "](e),e}function z(e){var t=re;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}$[" "]=f;var H,K=D(P,"Opera"),W=D(P,"Trident")||D(P,"MSIE"),G=D(P,"Edge"),Y=G||W,J=D(P,"Gecko")&&!(D(P.toLowerCase(),"webkit")&&!D(P,"Edge"))&&!(D(P,"Trident")||D(P,"MSIE"))&&!D(P,"Edge"),Q=D(P.toLowerCase(),"webkit")&&!D(P,"Edge");function Z(){var e=d.document;return e?e.documentMode:void 0}e:{var X="",ee=function(){var e=P;return J?/rv:([^\);]+)(\)|;)/.exec(e):G?/Edge\/([\d\.]+)/.exec(e):W?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):Q?/WebKit\/(\S+)/.exec(e):K?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(ee&&(X=ee?ee[1]:""),W){var te=Z();if(null!=te&&te>parseFloat(X)){H=String(te);break e}}H=X}var ne,re={};function ie(){return z((function(){let e=0;const t=L(String(H)).split("."),n=L("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=F(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||F(0==i[2].length,0==s[2].length)||F(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(d.document&&W){var se=Z();ne=se||(parseInt(H,10)||void 0)}else ne=void 0;var oe=ne,ae=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",f,t),d.removeEventListener("test",f,t)}catch(n){}return e}();function ce(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function le(e,t){if(ce.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(J){e:{try{$(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ue[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&le.Z.h.call(this)}}ce.prototype.h=function(){this.defaultPrevented=!0},T(le,ce);var ue={2:"touch",3:"pen",4:"mouse"};le.prototype.h=function(){le.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var he="closure_listenable_"+(1e6*Math.random()|0),de=0;function fe(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++de,this.ca=this.fa=!1}function pe(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function me(e){this.src=e,this.g={},this.h=0}function ge(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=x(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(pe(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ve(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}me.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ve(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new fe(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var ye="closure_lm_"+(1e6*Math.random()|0),we={};function be(e,t,n,r,i){if(r&&r.once)return Te(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)be(e,t[s],n,r,i);return null}return n=Re(n),e&&e[he]?e.N(t,n,m(r)?!!r.capture:!!r,i):_e(e,t,n,!1,r,i)}function _e(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=m(i)?!!i.capture:!!i,a=Ce(e);if(a||(e[ye]=a=new me(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Ie(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ae||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Se(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Ie(){function e(n){return t.call(e.src,e.listener,n)}var t=xe;return e}function Te(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Te(e,t[s],n,r,i);return null}return n=Re(n),e&&e[he]?e.O(t,n,m(r)?!!r.capture:!!r,i):_e(e,t,n,!0,r,i)}function Ee(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Ee(e,t[s],n,r,i);else r=m(r)?!!r.capture:!!r,n=Re(n),e&&e[he]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ve(s,n,r,i),-1<n&&(pe(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ce(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ve(t,n,r,i)),(n=-1<e?t[e]:null)&&ke(n))}function ke(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[he])ge(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Se(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ce(t))?(ge(n,e),0==n.h&&(n.src=null,t[ye]=null)):pe(e)}}}function Se(e){return e in we?we[e]:we[e]="on"+e}function xe(e,t){if(e.ca)e=!0;else{t=new le(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&ke(e),e=n.call(r,t)}return e}function Ce(e){return e=e[ye],e instanceof me?e:null}var Ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function Re(e){return"function"===typeof e?e:(e[Ae]||(e[Ae]=function(t){return e.handleEvent(t)}),e[Ae])}function Ne(){E.call(this),this.i=new me(this),this.P=this,this.I=null}function Oe(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new ce(t,e);else if(t instanceof ce)t.target=t.target||e;else{var i=t;t=new ce(r,e),B(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Pe(o,r,!0,t)&&i}if(o=t.g=e,i=Pe(o,r,!0,t)&&i,i=Pe(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Pe(o,r,!1,t)&&i}function Pe(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ge(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}T(Ne,E),Ne.prototype[he]=!0,Ne.prototype.removeEventListener=function(e,t,n,r){Ee(this,e,t,n,r)},Ne.prototype.M=function(){if(Ne.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)pe(n[r]);delete t.g[e],t.h--}}this.I=null},Ne.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ne.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Le=d.JSON.stringify;function De(){var e=ze;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Fe{constructor(){this.h=this.g=null}add(e,t){const n=qe.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Me,qe=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Ue),(e=>e.reset()));class Ue{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ve(e){d.setTimeout((()=>{throw e}),0)}function je(e,t){Me||Be(),$e||(Me(),$e=!0),ze.add(e,t)}function Be(){var e=d.Promise.resolve(void 0);Me=function(){e.then(He)}}var $e=!1,ze=new Fe;function He(){for(var e;e=De();){try{e.h.call(e.g)}catch(n){Ve(n)}var t=qe;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}$e=!1}function Ke(e,t){Ne.call(this),this.h=e||1,this.g=t||d,this.j=_(this.kb,this),this.l=Date.now()}function We(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Ge(e,t,n){if("function"===typeof e)n&&(e=_(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=_(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function Ye(e){e.g=Ge((()=>{e.g=null,e.i&&(e.i=!1,Ye(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}T(Ke,Ne),r=Ke.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Oe(this,"tick"),this.da&&(We(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Ke.Z.M.call(this),We(this),delete this.g};class Je extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ye(this)}M(){super.M(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qe(e){E.call(this),this.h=e,this.g={}}T(Qe,E);var Ze=[];function Xe(e,t,n,r){Array.isArray(n)||(n&&(Ze[0]=n.toString()),n=Ze);for(var i=0;i<n.length;i++){var s=be(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function et(e){U(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ke(e)}),e),e.g={}}function tt(){this.g=!0}function nt(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function rt(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function it(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+ot(e,n)+(r?" "+r:"")}))}function st(e,t){e.info((function(){return"TIMEOUT: "+t}))}function ot(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Le(n)}catch(a){return t}}Qe.prototype.M=function(){Qe.Z.M.call(this),et(this)},Qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},tt.prototype.Aa=function(){this.g=!1},tt.prototype.info=function(){};var at={},ct=null;function lt(){return ct=ct||new Ne}function ut(e){ce.call(this,at.Ma,e)}function ht(e){const t=lt();Oe(t,new ut(t,e))}function dt(e,t){ce.call(this,at.STAT_EVENT,e),this.stat=t}function ft(e){const t=lt();Oe(t,new dt(t,e))}function pt(e,t){ce.call(this,at.Na,e),this.size=t}function mt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}at.Ma="serverreachability",T(ut,ce),at.STAT_EVENT="statevent",T(dt,ce),at.Na="timingevent",T(pt,ce);var gt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},vt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function yt(){}function wt(e){return e.h||(e.h=e.i())}function bt(){}yt.prototype.h=null;var _t,It={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Tt(){ce.call(this,"d")}function Et(){ce.call(this,"c")}function kt(){}function St(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Qe(this),this.P=Ct,e=Y?125:void 0,this.W=new Ke(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new xt}function xt(){this.i=null,this.g="",this.h=!1}T(Tt,ce),T(Et,ce),T(kt,yt),kt.prototype.g=function(){return new XMLHttpRequest},kt.prototype.i=function(){return{}},_t=new kt;var Ct=45e3,At={},Rt={};function Nt(e,t,n){e.K=1,e.v=nn(Jt(t)),e.s=n,e.U=!0,Ot(e,null)}function Ot(e,t){e.F=Date.now(),Ft(e),e.A=Jt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),yn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new xt,e.g=Er(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Je(_(e.Ia,e,e.g),e.O)),Xe(e.V,e.g,"readystatechange",e.gb),t=e.H?V(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ht(1),nt(e.j,e.u,e.A,e.m,e.X,e.s)}function Pt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Lt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Dt(e,n),r==Rt){4==t&&(e.o=4,ft(14),i=!1),it(e.j,e.m,null,"[Incomplete Response]");break}if(r==At){e.o=4,ft(15),it(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}it(e.j,e.m,r,null),jt(e,r)}Pt(e)&&r!=Rt&&r!=At&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ft(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gr(t),t.L=!0,ft(11))):(it(e.j,e.m,n,"[Invalid Chunked Response]"),Vt(e),Ut(e))}function Dt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Rt:(n=Number(t.substring(n,r)),isNaN(n)?At:(r+=1,r+n>t.length?Rt:(t=t.substr(r,n),e.C=r+n,t)))}function Ft(e){e.Y=Date.now()+e.P,Mt(e,e.P)}function Mt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=mt(_(e.eb,e),t)}function qt(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Ut(e){0==e.l.G||e.I||wr(e.l,e)}function Vt(e){qt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,We(e.W),et(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function jt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Sn(n.i,e)))if(n.I=e.N,!e.J&&Sn(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;yr(n),or(n)}mr(n),ft(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=mt(_(n.ab,n),6e3));if(1>=kn(n.i)&&n.ka){try{n.ka()}catch(l){}n.ka=void 0}}else _r(n,11)}else if((e.J||n.g==e)&&yr(n),!O(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=l[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(D(e,"spdy")||D(e,"quic")||D(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(xn(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,tn(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=Tr(r,r.H?r.la:null,r.W),o.J){Cn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(qt(a),Ft(a)),r.g=o}else pr(r);0<n.l.length&&lr(n)}else"stop"!=l[0]&&"close"!=l[0]||_r(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?_r(n,7):sr(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}ht(4)}catch(l){}}function Bt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(p(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function $t(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(p(e)||"string"===typeof e)C(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(p(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=Bt(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function zt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof zt)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Ht(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Kt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],Kt(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Kt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=St.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Xn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const u=Xn(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(3!=u||Y||this.g&&(this.h.h||this.g.ga()||er(this.g)))){this.I||4!=u||7==t||ht(8==t||0>=h?3:2),qt(this);var n=this.g.ba();this.N=n;t:if(Pt(this)){var r=er(this.g);e="";var i=r.length,s=4==Xn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Vt(this),Ut(this);var o="";break t}this.h.i=new d.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,rt(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,ft(12),Vt(this),Ut(this);break e}it(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jt(this,n)}this.U?(Lt(this,u,o),Y&&this.i&&3==u&&(Xe(this.V,this.W,"tick",this.fb),this.W.start())):(it(this.j,this.m,o,null),jt(this,o)),4==u&&Vt(this),this.i&&!this.I&&(4==u?wr(this.l,this):(this.i=!1,Ft(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ft(12)):(this.o=0,ft(13)),Vt(this),Ut(this)}}}catch(u){}},r.fb=function(){if(this.g){var e=Xn(this.g),t=this.g.ga();this.C<t.length&&(qt(this),Lt(this,e,t),this.i&&4!=e&&Ft(this))}},r.cancel=function(){this.I=!0,Vt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(st(this.j,this.A),2!=this.K&&(ht(3),ft(17)),Vt(this),this.o=2,Ut(this)):Mt(this,this.Y-e)},r=zt.prototype,r.R=function(){Ht(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return Ht(this),this.g.concat()},r.get=function(e,t){return Kt(this.h,e)?this.h[e]:t},r.set=function(e,t){Kt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var Wt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Gt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Yt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Yt){this.g=void 0!==t?t:e.g,Qt(this,e.j),this.s=e.s,Zt(this,e.i),Xt(this,e.m),this.l=e.l,t=e.h;var n=new pn;n.i=t.i,t.g&&(n.g=new zt(t.g),n.h=t.h),en(this,n),this.o=e.o}else e&&(n=String(e).match(Wt))?(this.g=!!t,Qt(this,n[1]||"",!0),this.s=on(n[2]||""),Zt(this,n[3]||"",!0),Xt(this,n[4]),this.l=on(n[5]||"",!0),en(this,n[6]||"",!0),this.o=on(n[7]||"")):(this.g=!!t,this.h=new pn(null,this.g))}function Jt(e){return new Yt(e)}function Qt(e,t,n){e.j=n?on(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Zt(e,t,n){e.i=n?on(t,!0):t}function Xt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function en(e,t,n){t instanceof pn?(e.h=t,bn(e.h,e.g)):(n||(t=an(t,dn)),e.h=new pn(t,e.g))}function tn(e,t,n){e.h.set(t,n)}function nn(e){return tn(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function rn(e){return e instanceof Yt?Jt(e):new Yt(e,void 0)}function sn(e,t,n,r){var i=new Yt(null,void 0);return e&&Qt(i,e),t&&Zt(i,t),n&&Xt(i,n),r&&(i.l=r),i}function on(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function an(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,cn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function cn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Yt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(an(t,ln,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(an(t,ln,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(an(n,"/"==n.charAt(0)?hn:un,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",an(n,fn)),e.join("")};var ln=/[#\/\?@]/g,un=/[#\?:]/g,hn=/[#\?]/g,dn=/[#\?@]/g,fn=/#/g;function pn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function mn(e){e.g||(e.g=new zt,e.h=0,e.i&&Gt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function gn(e,t){mn(e),t=wn(e,t),Kt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Kt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Ht(e)))}function vn(e,t){return mn(e),t=wn(e,t),Kt(e.g.h,t)}function yn(e,t,n){gn(e,t),0<n.length&&(e.i=null,e.g.set(wn(e,t),N(n)),e.h+=n.length)}function wn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function bn(e,t){t&&!e.j&&(mn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(gn(this,t),yn(this,n,e))}),e)),e.j=t}r=pn.prototype,r.add=function(e,t){mn(this),this.i=null,e=wn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){mn(this),this.g.forEach((function(n,r){C(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){mn(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},r.R=function(e){mn(this);var t=[];if("string"===typeof e)vn(this,e)&&(t=R(t,this.g.get(wn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=R(t,e[n])}return t},r.set=function(e,t){return mn(this),this.i=null,e=wn(this,e),vn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var _n=class{constructor(e,t){this.h=e,this.g=t}};function In(e){this.l=e||Tn,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ea&&d.g.Ea()&&d.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Tn=10;function En(e){return!!e.h||!!e.g&&e.g.size>=e.j}function kn(e){return e.h?1:e.g?e.g.size:0}function Sn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function xn(e,t){e.g?e.g.add(t):e.h=t}function Cn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function An(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return N(e.i)}function Rn(){}function Nn(){this.g=new Rn}function On(e,t,n){const r=n||"";try{$t(e,(function(e,n){let i=e;m(e)&&(i=Le(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Pn(e,t){const n=new tt;if(d.Image){const r=new Image;r.onload=I(Ln,n,r,"TestLoadImage: loaded",!0,t),r.onerror=I(Ln,n,r,"TestLoadImage: error",!1,t),r.onabort=I(Ln,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=I(Ln,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Ln(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Dn(e){this.l=e.$b||null,this.j=e.ib||!1}function Fn(e,t){Ne.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}In.prototype.cancel=function(){if(this.i=An(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Rn.prototype.stringify=function(e){return d.JSON.stringify(e,void 0)},Rn.prototype.parse=function(e){return d.JSON.parse(e,void 0)},T(Dn,yt),Dn.prototype.g=function(){return new Fn(this.l,this.j)},Dn.prototype.i=function(e){return function(){return e}}({}),T(Fn,Ne);var Mn=0;function qn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Un(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Vn(e)}function Vn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Fn.prototype,r.open=function(e,t){if(this.readyState!=Mn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Vn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||d).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Un(this)),this.readyState=Mn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Un(this):Vn(this),3==this.readyState&&qn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,Un(this))},r.Ta=function(e){this.g&&(this.response=e,Un(this))},r.ha=function(){this.g&&Un(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Fn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var jn=d.JSON.parse;function Bn(e){Ne.call(this),this.headers=new zt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$n,this.K=this.L=!1}T(Bn,Ne);var $n="",zn=/^https?$/i,Hn=["POST","PUT"];function Kn(e){return W&&ie()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Wn(e){return"content-type"==e.toLowerCase()}function Gn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Yn(e),Qn(e)}function Yn(e){e.D||(e.D=!0,Oe(e,"complete"),Oe(e,"error"))}function Jn(e){if(e.h&&"undefined"!=typeof h&&(!e.C[1]||4!=Xn(e)||2!=e.ba()))if(e.v&&4==Xn(e))Ge(e.Fa,0,e);else if(Oe(e,"readystatechange"),4==Xn(e)){e.h=!1;try{const c=e.ba();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var i=String(e.H).match(Wt)[1]||null;if(!i&&d.self&&d.self.location){var s=d.self.location.protocol;i=s.substr(0,s.length-1)}r=!zn.test(i?i.toLowerCase():"")}n=r}if(n)Oe(e,"complete"),Oe(e,"success");else{e.m=6;try{var o=2<Xn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.ba()+"]",Yn(e)}}finally{Qn(e)}}}function Qn(e,t){if(e.g){Zn(e);const r=e.g,i=e.C[0]?f:null;e.g=null,e.C=null,t||Oe(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Zn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function Xn(e){return e.g?e.g.readyState:0}function er(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case $n:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function tr(e){let t="";return U(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function nr(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tr(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):tn(e,t,n))}function rr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ir(e){this.za=0,this.l=[],this.h=new tt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=rr("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=rr("baseRetryDelayMs",5e3,e),this.$a=rr("retryDelaySeedMs",1e4,e),this.Ya=rr("forwardChannelMaxRetries",2,e),this.ra=rr("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new In(e&&e.concurrentRequestLimit),this.Ca=new Nn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function sr(e){if(ar(e),3==e.G){var t=e.V++,n=Jt(e.F);tn(n,"SID",e.J),tn(n,"RID",t),tn(n,"TYPE","terminate"),dr(e,n),t=new St(e,e.h,t,void 0),t.K=2,t.v=nn(Jt(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(t.v.toString(),"")),!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=Er(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Ft(t)}Ir(e)}function or(e){e.g&&(gr(e),e.g.cancel(),e.g=null)}function ar(e){or(e),e.u&&(d.clearTimeout(e.u),e.u=null),yr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function cr(e,t){e.l.push(new _n(e.Za++,t)),3==e.G&&lr(e)}function lr(e){En(e.i)||e.m||(e.m=!0,je(e.Ha,e),e.C=0)}function ur(e,t){return!(kn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=mt(_(e.Ha,e,t),br(e,e.C)),e.C++,!0))}function hr(e,t){var n;n=t?t.m:e.V++;const r=Jt(e.F);tn(r,"SID",e.J),tn(r,"RID",n),tn(r,"AID",e.U),dr(e,r),e.o&&e.s&&nr(r,e.o,e.s),n=new St(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=fr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),xn(e.i,n),Nt(n,r,t)}function dr(e,t){e.j&&$t({},(function(e,n){tn(t,n,e)}))}function fr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?_(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{On(a,e,"req"+n+"_")}catch(ri){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function pr(e){e.g||e.u||(e.Y=1,je(e.Ga,e),e.A=0)}function mr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=mt(_(e.Ga,e),br(e,e.A)),e.A++,!0)}function gr(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function vr(e){e.g=new St(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Jt(e.oa);tn(t,"RID","rpc"),tn(t,"SID",e.J),tn(t,"CI",e.N?"0":"1"),tn(t,"AID",e.U),dr(e,t),tn(t,"TYPE","xmlhttp"),e.o&&e.s&&nr(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=nn(Jt(t)),n.s=null,n.U=!0,Ot(n,e)}function yr(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function wr(e,t){var n=null;if(e.g==t){yr(e),gr(e),e.g=null;var r=2}else{if(!Sn(e.i,t))return;n=t.D,Cn(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=lt(),Oe(r,new pt(r,n,t,i)),lr(e)}else pr(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&ur(e,t)||2==r&&mr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:_r(e,5);break;case 4:_r(e,10);break;case 3:_r(e,6);break;default:_r(e,2)}}function br(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function _r(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=_(e.jb,e);n||(n=new Yt("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Qt(n,"https"),nn(n)),Pn(n.toString(),r)}else ft(2);e.G=0,e.j&&e.j.va(t),Ir(e),ar(e)}function Ir(e){e.G=0,e.I=-1,e.j&&(0==An(e.i).length&&0==e.l.length||(e.i.i.length=0,N(e.l),e.l.length=0),e.j.ua())}function Tr(e,t,n){let r=rn(n);if(""!=r.i)t&&Zt(r,t+"."+r.i),Xt(r,r.m);else{const e=d.location;r=sn(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&U(e.aa,(function(e,t){tn(r,t,e)})),t=e.D,n=e.sa,t&&n&&tn(r,t,n),tn(r,"VER",e.ma),dr(e,r),r}function Er(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new Bn(new Dn({ib:!0})):new Bn(e.qa),t.L=e.H,t}function kr(){}function Sr(){if(W&&!(10<=Number(oe)))throw Error("Environmental error: no available transport.")}function xr(e,t){Ne.call(this),this.g=new ir(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Rr(this)}function Cr(e){Tt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Ar(){Et.call(this),this.status=1}function Rr(e){this.g=e}r=Bn.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_t.g(),this.C=this.u?wt(this.u):wt(_t),this.g.onreadystatechange=_(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Gn(this,s)}e=n||"";const i=new zt(this.headers);r&&$t(r,(function(e,t){i.set(t,e)})),r=A(i.T()),n=d.FormData&&e instanceof d.FormData,!(0<=x(Hn,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Zn(this),0<this.B&&((this.K=Kn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.pa,this)):this.A=Ge(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Gn(this,s)}},r.pa=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Oe(this,"complete"),Oe(this,"abort"),Qn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qn(this,!0)),Bn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Jn(this):this.cb())},r.cb=function(){Jn(this)},r.ba=function(){try{return 2<Xn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),jn(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=ir.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new St(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=V(s),B(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=fr(this,i,t),n=Jt(this.F),tn(n,"RID",e),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),dr(this,n),this.o&&s&&nr(n,this.o,s),xn(this.i,i),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",t),tn(n,"SID","null"),i.$=!0,Nt(i,n,null)):Nt(i,n,t),this.G=2}}else 3==this.G&&(e?hr(this,e):0==this.l.length||En(this.i)||hr(this))},r.Ga=function(){if(this.u=null,vr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=mt(_(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ft(10),or(this),vr(this))},r.ab=function(){null!=this.v&&(this.v=null,or(this),mr(this),ft(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ft(2)):(this.h.info("Failed to ping google.com"),ft(1))},r=kr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Sr.prototype.g=function(e,t){return new xr(e,t)},T(xr,Ne),xr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),je(_(e.hb,e,t))),ft(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Tr(e,null,e.W),lr(e)},xr.prototype.close=function(){sr(this.g)},xr.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,cr(this.g,t)}else this.v?(t={},t.__data__=Le(e),cr(this.g,t)):cr(this.g,e)},xr.prototype.M=function(){this.g.j=null,delete this.j,sr(this.g),delete this.g,xr.Z.M.call(this)},T(Cr,Tt),T(Ar,Et),T(Rr,kr),Rr.prototype.xa=function(){Oe(this.g,"a")},Rr.prototype.wa=function(e){Oe(this.g,new Cr(e))},Rr.prototype.va=function(e){Oe(this.g,new Ar(e))},Rr.prototype.ua=function(){Oe(this.g,"b")},Sr.prototype.createWebChannel=Sr.prototype.g,xr.prototype.send=xr.prototype.u,xr.prototype.open=xr.prototype.m,xr.prototype.close=xr.prototype.close,gt.NO_ERROR=0,gt.TIMEOUT=8,gt.HTTP_ERROR=6,vt.COMPLETE="complete",bt.EventType=It,It.OPEN="a",It.CLOSE="b",It.ERROR="c",It.MESSAGE="d",Ne.prototype.listen=Ne.prototype.N,Bn.prototype.listenOnce=Bn.prototype.O,Bn.prototype.getLastError=Bn.prototype.La,Bn.prototype.getLastErrorCode=Bn.prototype.Da,Bn.prototype.getStatus=Bn.prototype.ba,Bn.prototype.getResponseJson=Bn.prototype.Qa,Bn.prototype.getResponseText=Bn.prototype.ga,Bn.prototype.send=Bn.prototype.ea;var Nr=u.createWebChannelTransport=function(){return new Sr},Or=u.getStatEventTarget=function(){return lt()},Pr=u.ErrorCode=gt,Lr=u.EventType=vt,Dr=u.Event=at,Fr=u.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Mr=u.FetchXmlHttpFactory=Dn,qr=u.WebChannel=bt,Ur=u.XhrIo=Bn;const Vr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jr.UNAUTHENTICATED=new jr(null),jr.GOOGLE_CREDENTIALS=new jr("google-credentials-uid"),jr.FIRST_PARTY=new jr("first-party-uid"),jr.MOCK_USER=new jr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Br="9.6.5";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new a.Yd("@firebase/firestore");function zr(){return $r.logLevel}function Hr(e){$r.setLogLevel(e)}function Kr(e,...t){if($r.logLevel<=a["in"].DEBUG){const n=t.map(Yr);$r.debug(`Firestore (${Br}): ${e}`,...n)}}function Wr(e,...t){if($r.logLevel<=a["in"].ERROR){const n=t.map(Yr);$r.error(`Firestore (${Br}): ${e}`,...n)}}function Gr(e,...t){if($r.logLevel<=a["in"].WARN){const n=t.map(Yr);$r.warn(`Firestore (${Br}): ${e}`,...n)}}function Yr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(e="Unexpected state"){const t=`FIRESTORE (${Br}) INTERNAL ASSERTION FAILED: `+e;throw Wr(t),new Error(t)}function Qr(e,t){e||Jr()}function Zr(e,t){e||Jr()}function Xr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ti extends c.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ii{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jr.UNAUTHENTICATED)))}shutdown(){}}class si{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class oi{constructor(e){this.t=e,this.currentUser=jr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ni;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ni,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Kr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Kr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ni)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Kr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Qr("string"==typeof t.accessToken),new ri(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Qr(null===e||"string"==typeof e),new jr(e)}}class ai{constructor(e,t,n){this.type="FirstParty",this.user=jr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ci{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new ai(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(jr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class li{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ui{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=n=>{e.enqueueRetryable((()=>(e=>(null!=e.error&&Kr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`),t(e.token)))(n)))};const n=e=>{Kr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):Kr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Qr("string"==typeof e.token),new li(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.p(e),this.T=e=>t.writeSequenceNumber(e))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi.I=-1;class fi{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=di(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function pi(e,t){return e<t?-1:e>t?1:0}function mi(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function gi(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ti(ei.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ti(ei.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ti(ei.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ti(ei.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return vi.fromMillis(Date.now())}static fromDate(e){return vi.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new vi(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pi(this.nanoseconds,e.nanoseconds):pi(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.timestamp=e}static fromTimestamp(e){return new yi(e)}static min(){return new yi(new vi(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function bi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function _i(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t,n){void 0===t?t=0:t>e.length&&Jr(),void 0===n?n=e.length-t:n>e.length-t&&Jr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ii.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ii?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ti extends Ii{construct(e,t,n){return new Ti(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ti(ei.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ti(t)}static emptyPath(){return new Ti([])}}const Ei=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ki extends Ii{construct(e,t,n){return new ki(e,t,n)}static isValidIdentifier(e){return Ei.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ki.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ki(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ti(ei.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ti(ei.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ti(ei.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new ti(ei.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ki(t)}static emptyPath(){return new ki([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.fields=e,e.sort(ki.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Ci(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ci(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pi(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ci.EMPTY_BYTE_STRING=new Ci("");const Ai=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(e){if(Qr(!!e),"string"==typeof e){let t=0;const n=Ai.exec(e);if(Qr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ni(e.seconds),nanos:Ni(e.nanos)}}function Ni(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Oi(e){return"string"==typeof e?Ci.fromBase64String(e):Ci.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Li(e){const t=e.mapValue.fields.__previous_value__;return Pi(t)?Li(t):t}function Di(e){const t=Ri(e.mapValue.fields.__local_write_time__.timestampValue);return new vi(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e){return null==e}function Mi(e){return 0===e&&1/e==-1/0}function qi(e){return"number"==typeof e&&Number.isInteger(e)&&!Mi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.path=e}static fromPath(e){return new Ui(Ti.fromString(e))}static fromName(e){return new Ui(Ti.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===Ti.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ti.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ui(new Ti(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Pi(e)?4:10:Jr()}function ji(e,t){if(e===t)return!0;const n=Vi(e);if(n!==Vi(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Di(e).isEqual(Di(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ri(e.timestampValue),r=Ri(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Oi(e.bytesValue).isEqual(Oi(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ni(e.geoPointValue.latitude)===Ni(t.geoPointValue.latitude)&&Ni(e.geoPointValue.longitude)===Ni(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ni(e.integerValue)===Ni(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ni(e.doubleValue),r=Ni(t.doubleValue);return n===r?Mi(n)===Mi(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return mi(e.arrayValue.values||[],t.arrayValue.values||[],ji);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(wi(n)!==wi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ji(n[i],r[i])))return!1;return!0}(e,t);default:return Jr()}}function Bi(e,t){return void 0!==(e.values||[]).find((e=>ji(e,t)))}function $i(e,t){if(e===t)return 0;const n=Vi(e),r=Vi(t);if(n!==r)return pi(n,r);switch(n){case 0:return 0;case 1:return pi(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ni(e.integerValue||e.doubleValue),r=Ni(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return zi(e.timestampValue,t.timestampValue);case 4:return zi(Di(e),Di(t));case 5:return pi(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Oi(e),r=Oi(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=pi(n[i],r[i]);if(0!==e)return e}return pi(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=pi(Ni(e.latitude),Ni(t.latitude));return 0!==n?n:pi(Ni(e.longitude),Ni(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=$i(n[i],r[i]);if(e)return e}return pi(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=pi(r[o],s[o]);if(0!==e)return e;const t=$i(n[r[o]],i[s[o]]);if(0!==t)return t}return pi(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Jr()}}function zi(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return pi(e,t);const n=Ri(e),r=Ri(t),i=pi(n.seconds,r.seconds);return 0!==i?i:pi(n.nanos,r.nanos)}function Hi(e){return Ki(e)}function Ki(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ri(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Oi(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Ui.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Ki(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Ki(e.fields[i])}`;return n+"}"}(e.mapValue):Jr();var t,n}function Wi(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Gi(e){return!!e&&"integerValue"in e}function Yi(e){return!!e&&"arrayValue"in e}function Ji(e){return!!e&&"nullValue"in e}function Qi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Zi(e){return!!e&&"mapValue"in e}function Xi(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return bi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Xi(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Xi(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.value=e}static empty(){return new es({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Zi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xi(t)}setAll(e){let t=ki.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Xi(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Zi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ji(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Zi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){bi(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new es(Xi(this.value))}}function ts(e){const t=[];return bi(e.fields,((e,n)=>{const r=new ki([e]);if(Zi(n)){const e=ts(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Si(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ns{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new ns(e,0,yi.min(),es.empty(),0)}static newFoundDocument(e,t,n){return new ns(e,1,t,n,0)}static newNoDocument(e,t){return new ns(e,2,t,es.empty(),0)}static newUnknownDocument(e,t){return new ns(e,3,t,es.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=es.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=es.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ns&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ns(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.R=null}}function is(e,t=null,n=[],r=[],i=null,s=null,o=null){return new rs(e,t,n,r,i,s,o)}function ss(e){const t=Xr(e);if(null===t.R){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>us(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Fi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=bs(t.startAt)),t.endAt&&(e+="|ub:",e+=bs(t.endAt)),t.R=e}return t.R}function os(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Hi(t.value)}`;var t})).join(", ")}]`),Fi(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: "+bs(e.startAt)),e.endAt&&(t+=", endAt: "+bs(e.endAt)),`Target(${t})`}function as(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Is(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!ji(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Es(e.startAt,t.startAt)&&Es(e.endAt,t.endAt)}function cs(e){return Ui.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class ls extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.P(e,t,n):new hs(e,t,n):"array-contains"===t?new ms(e,n):"in"===t?new gs(e,n):"not-in"===t?new vs(e,n):"array-contains-any"===t?new ys(e,n):new ls(e,t,n)}static P(e,t,n){return"in"===t?new ds(e,n):new fs(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v($i(t,this.value)):null!==t&&Vi(this.value)===Vi(t)&&this.v($i(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Jr()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function us(e){return e.field.canonicalString()+e.op.toString()+Hi(e.value)}class hs extends ls{constructor(e,t,n){super(e,t,n),this.key=Ui.fromName(n.referenceValue)}matches(e){const t=Ui.comparator(e.key,this.key);return this.v(t)}}class ds extends ls{constructor(e,t){super(e,"in",t),this.keys=ps("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class fs extends ls{constructor(e,t){super(e,"not-in",t),this.keys=ps("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ps(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ui.fromName(e.referenceValue)))}class ms extends ls{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Yi(t)&&Bi(t.arrayValue,this.value)}}class gs extends ls{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Bi(this.value.arrayValue,t)}}class vs extends ls{constructor(e,t){super(e,"not-in",t)}matches(e){if(Bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Bi(this.value.arrayValue,t)}}class ys extends ls{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Yi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Bi(this.value.arrayValue,e)))}}class ws{constructor(e,t){this.position=e,this.before=t}}function bs(e){return`${e.before?"b":"a"}:${e.position.map((e=>Hi(e))).join(",")}`}class _s{constructor(e,t="asc"){this.field=e,this.dir=t}}function Is(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Ts(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Ui.comparator(Ui.fromName(o.referenceValue),n.key):$i(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function Es(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ji(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Ss(e,t,n,r,i,s,o,a){return new ks(e,t,n,r,i,s,o,a)}function xs(e){return new ks(e)}function Cs(e){return!Fi(e.limit)&&"F"===e.limitType}function As(e){return!Fi(e.limit)&&"L"===e.limitType}function Rs(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ns(e){for(const t of e.filters)if(t.V())return t.field;return null}function Os(e){return null!==e.collectionGroup}function Ps(e){const t=Xr(e);if(null===t.S){t.S=[];const e=Ns(t),n=Rs(t);if(null!==e&&null===n)e.isKeyField()||t.S.push(new _s(e)),t.S.push(new _s(ki.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.S.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new _s(ki.keyField(),e))}}}return t.S}function Ls(e){const t=Xr(e);if(!t.D)if("F"===t.limitType)t.D=is(t.path,t.collectionGroup,Ps(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Ps(t)){const t="desc"===i.dir?"asc":"desc";e.push(new _s(i.field,t))}const n=t.endAt?new ws(t.endAt.position,!t.endAt.before):null,r=t.startAt?new ws(t.startAt.position,!t.startAt.before):null;t.D=is(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.D}function Ds(e,t,n){return new ks(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Fs(e,t){return as(Ls(e),Ls(t))&&e.limitType===t.limitType}function Ms(e){return`${ss(Ls(e))}|lt:${e.limitType}`}function qs(e){return`Query(target=${os(Ls(e))}; limitType=${e.limitType})`}function Us(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ui.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!Ts(e.startAt,Ps(e),t))&&(!e.endAt||!Ts(e.endAt,Ps(e),t))}(e,t)}function Vs(e){return(t,n)=>{let r=!1;for(const i of Ps(e)){const e=js(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function js(e,t,n){const r=e.field.isKeyField()?Ui.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?$i(r,i):Jr()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Jr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mi(t)?"-0":t}}function $s(e){return{integerValue:""+e}}function zs(e,t){return qi(t)?$s(t):Bs(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this._=void 0}}function Ks(e,t,n){return e instanceof Ys?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Js?Qs(e,t):e instanceof Zs?Xs(e,t):function(e,t){const n=Gs(e,t),r=to(n)+to(e.N);return Gi(n)&&Gi(e.N)?$s(r):Bs(e.k,r)}(e,t)}function Ws(e,t,n){return e instanceof Js?Qs(e,t):e instanceof Zs?Xs(e,t):n}function Gs(e,t){return e instanceof eo?Gi(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Ys extends Hs{}class Js extends Hs{constructor(e){super(),this.elements=e}}function Qs(e,t){const n=no(t);for(const r of e.elements)n.some((e=>ji(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Zs extends Hs{constructor(e){super(),this.elements=e}}function Xs(e,t){let n=no(t);for(const r of e.elements)n=n.filter((e=>!ji(e,r)));return{arrayValue:{values:n}}}class eo extends Hs{constructor(e,t){super(),this.k=e,this.N=t}}function to(e){return Ni(e.integerValue||e.doubleValue)}function no(e){return Yi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t){this.field=e,this.transform=t}}function io(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Js&&t instanceof Js||e instanceof Zs&&t instanceof Zs?mi(e.elements,t.elements,ji):e instanceof eo&&t instanceof eo?ji(e.N,t.N):e instanceof Ys&&t instanceof Ys}(e.transform,t.transform)}class so{constructor(e,t){this.version=e,this.transformResults=t}}class oo{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new oo}static exists(e){return new oo(void 0,e)}static updateTime(e){return new oo(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ao(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class co{}function lo(e,t,n){e instanceof mo?function(e,t,n){const r=e.value.clone(),i=yo(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof go?function(e,t,n){if(!ao(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=yo(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(vo(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function uo(e,t,n){e instanceof mo?function(e,t,n){if(!ao(e.precondition,t))return;const r=e.value.clone(),i=wo(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(po(t),r).setHasLocalMutations()}(e,t,n):e instanceof go?function(e,t,n){if(!ao(e.precondition,t))return;const r=wo(e.fieldTransforms,n,t),i=t.data;i.setAll(vo(e)),i.setAll(r),t.convertToFoundDocument(po(t),i).setHasLocalMutations()}(e,t,n):function(e,t){ao(e.precondition,t)&&t.convertToNoDocument(yi.min())}(e,t)}function ho(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Gs(r.transform,e||null);null!=i&&(null==n&&(n=es.empty()),n.set(r.field,i))}return n||null}function fo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&mi(e,t,((e,t)=>io(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function po(e){return e.isFoundDocument()?e.version:yi.min()}class mo extends co{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class go extends co{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function vo(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function yo(e,t,n){const r=new Map;Qr(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Ws(o,a,n[i]))}return r}function wo(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Ks(e,s,t))}return r}class bo extends co{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class _o extends co{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var To,Eo;function ko(e){switch(e){default:return Jr();case ei.CANCELLED:case ei.UNKNOWN:case ei.DEADLINE_EXCEEDED:case ei.RESOURCE_EXHAUSTED:case ei.INTERNAL:case ei.UNAVAILABLE:case ei.UNAUTHENTICATED:return!1;case ei.INVALID_ARGUMENT:case ei.NOT_FOUND:case ei.ALREADY_EXISTS:case ei.PERMISSION_DENIED:case ei.FAILED_PRECONDITION:case ei.ABORTED:case ei.OUT_OF_RANGE:case ei.UNIMPLEMENTED:case ei.DATA_LOSS:return!0}}function So(e){if(void 0===e)return Wr("GRPC error has no .code"),ei.UNKNOWN;switch(e){case To.OK:return ei.OK;case To.CANCELLED:return ei.CANCELLED;case To.UNKNOWN:return ei.UNKNOWN;case To.DEADLINE_EXCEEDED:return ei.DEADLINE_EXCEEDED;case To.RESOURCE_EXHAUSTED:return ei.RESOURCE_EXHAUSTED;case To.INTERNAL:return ei.INTERNAL;case To.UNAVAILABLE:return ei.UNAVAILABLE;case To.UNAUTHENTICATED:return ei.UNAUTHENTICATED;case To.INVALID_ARGUMENT:return ei.INVALID_ARGUMENT;case To.NOT_FOUND:return ei.NOT_FOUND;case To.ALREADY_EXISTS:return ei.ALREADY_EXISTS;case To.PERMISSION_DENIED:return ei.PERMISSION_DENIED;case To.FAILED_PRECONDITION:return ei.FAILED_PRECONDITION;case To.ABORTED:return ei.ABORTED;case To.OUT_OF_RANGE:return ei.OUT_OF_RANGE;case To.UNIMPLEMENTED:return ei.UNIMPLEMENTED;case To.DATA_LOSS:return ei.DATA_LOSS;default:return Jr()}}(Eo=To||(To={}))[Eo.OK=0]="OK",Eo[Eo.CANCELLED=1]="CANCELLED",Eo[Eo.UNKNOWN=2]="UNKNOWN",Eo[Eo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Eo[Eo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Eo[Eo.NOT_FOUND=5]="NOT_FOUND",Eo[Eo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Eo[Eo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Eo[Eo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Eo[Eo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Eo[Eo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Eo[Eo.ABORTED=10]="ABORTED",Eo[Eo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Eo[Eo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Eo[Eo.INTERNAL=13]="INTERNAL",Eo[Eo.UNAVAILABLE=14]="UNAVAILABLE",Eo[Eo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xo{constructor(e,t){this.comparator=e,this.root=t||Ao.EMPTY}insert(e,t){return new xo(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ao.BLACK,null,null))}remove(e){return new xo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ao.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Co(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Co(this.root,e,this.comparator,!1)}getReverseIterator(){return new Co(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Co(this.root,e,this.comparator,!0)}}class Co{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ao{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ao.RED,this.left=null!=r?r:Ao.EMPTY,this.right=null!=i?i:Ao.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ao(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ao.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ao.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ao.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ao.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Jr();if(this.right.isRed())throw Jr();const e=this.left.check();if(e!==this.right.check())throw Jr();return e+(this.isRed()?0:1)}}Ao.EMPTY=null,Ao.RED=!0,Ao.BLACK=!1,Ao.EMPTY=new class{constructor(){this.size=0}get key(){throw Jr()}get value(){throw Jr()}get color(){throw Jr()}get left(){throw Jr()}get right(){throw Jr()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ao(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ro{constructor(e){this.comparator=e,this.data=new xo(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new No(this.data.getIterator())}getIteratorFrom(e){return new No(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Ro))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ro(this.comparator);return t.data=e,t}}class No{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new xo(Ui.comparator);function Po(){return Oo}const Lo=new xo(Ui.comparator);function Do(){return Lo}const Fo=new xo(Ui.comparator);function Mo(){return Fo}const qo=new Ro(Ui.comparator);function Uo(...e){let t=qo;for(const n of e)t=t.add(n);return t}const Vo=new Ro(pi);function jo(){return Vo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,$o.createSynthesizedTargetChangeForCurrentChange(e,t)),new Bo(yi.min(),n,jo(),Po(),Uo())}}class $o{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new $o(Ci.EMPTY_BYTE_STRING,t,Uo(),Uo(),Uo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t,n,r){this.$=e,this.removedTargetIds=t,this.key=n,this.O=r}}class Ho{constructor(e,t){this.targetId=e,this.M=t}}class Ko{constructor(e,t,n=Ci.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Wo{constructor(){this.F=0,this.L=Jo(),this.B=Ci.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.F}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=Uo(),t=Uo(),n=Uo();return this.L.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Jr()}})),new $o(this.B,this.U,e,t,n)}H(){this.q=!1,this.L=Jo()}J(e,t){this.q=!0,this.L=this.L.insert(e,t)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class Go{constructor(e){this.et=e,this.nt=new Map,this.st=Po(),this.it=Yo(),this.rt=new Ro(pi)}ot(e){for(const t of e.$)e.O&&e.O.isFoundDocument()?this.ct(t,e.O):this.at(t,e.key,e.O);for(const t of e.removedTargetIds)this.at(t,e.key,e.O)}ut(e){this.forEachTarget(e,(t=>{const n=this.ht(t);switch(e.state){case 0:this.lt(t)&&n.W(e.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(e.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(t);break;case 3:this.lt(t)&&(n.tt(),n.W(e.resumeToken));break;case 4:this.lt(t)&&(this.ft(t),n.W(e.resumeToken));break;default:Jr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.nt.forEach(((e,n)=>{this.lt(n)&&t(n)}))}dt(e){const t=e.targetId,n=e.M.count,r=this.wt(t);if(r){const e=r.target;if(cs(e))if(0===n){const n=new Ui(e.path);this.at(t,n,ns.newNoDocument(n,yi.min()))}else Qr(1===n);else this._t(t)!==n&&(this.ft(t),this.rt=this.rt.add(t))}}gt(e){const t=new Map;this.nt.forEach(((n,r)=>{const i=this.wt(r);if(i){if(n.current&&cs(i.target)){const t=new Ui(i.target.path);null!==this.st.get(t)||this.yt(r,t)||this.at(r,t,ns.newNoDocument(t,e))}n.j&&(t.set(r,n.G()),n.H())}}));let n=Uo();this.it.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))}));const r=new Bo(e,t,this.rt,this.st,n);return this.st=Po(),this.it=Yo(),this.rt=new Ro(pi),r}ct(e,t){if(!this.lt(e))return;const n=this.yt(e,t.key)?2:0;this.ht(e).J(t.key,n),this.st=this.st.insert(t.key,t),this.it=this.it.insert(t.key,this.Tt(t.key).add(e))}at(e,t,n){if(!this.lt(e))return;const r=this.ht(e);this.yt(e,t)?r.J(t,1):r.Y(t),this.it=this.it.insert(t,this.Tt(t).delete(e)),n&&(this.st=this.st.insert(t,n))}removeTarget(e){this.nt.delete(e)}_t(e){const t=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let t=this.nt.get(e);return t||(t=new Wo,this.nt.set(e,t)),t}Tt(e){let t=this.it.get(e);return t||(t=new Ro(pi),this.it=this.it.insert(e,t)),t}lt(e){const t=null!==this.wt(e);return t||Kr("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.nt.get(e);return t&&t.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new Wo),this.et.getRemoteKeysForTarget(e).forEach((t=>{this.at(e,t,null)}))}yt(e,t){return this.et.getRemoteKeysForTarget(e).has(t)}}function Yo(){return new xo(Ui.comparator)}function Jo(){return new xo(Ui.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Zo=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class Xo{constructor(e,t){this.databaseId=e,this.C=t}}function ea(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ta(e,t){return e.C?t.toBase64():t.toUint8Array()}function na(e,t){return ea(e,t.toTimestamp())}function ra(e){return Qr(!!e),yi.fromTimestamp(function(e){const t=Ri(e);return new vi(t.seconds,t.nanos)}(e))}function ia(e,t){return function(e){return new Ti(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function sa(e){const t=Ti.fromString(e);return Qr(Pa(t)),t}function oa(e,t){return ia(e.databaseId,t.path)}function aa(e,t){const n=sa(t);if(n.get(1)!==e.databaseId.projectId)throw new ti(ei.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ti(ei.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ui(ha(n))}function ca(e,t){return ia(e.databaseId,t)}function la(e){const t=sa(e);return 4===t.length?Ti.emptyPath():ha(t)}function ua(e){return new Ti(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ha(e){return Qr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function da(e,t,n){return{name:oa(e,t),fields:n.value.mapValue.fields}}function fa(e,t,n){const r=aa(e,t.name),i=ra(t.updateTime),s=new es({mapValue:{fields:t.fields}}),o=ns.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function pa(e,t){return"found"in t?function(e,t){Qr(!!t.found),t.found.name,t.found.updateTime;const n=aa(e,t.found.name),r=ra(t.found.updateTime),i=new es({mapValue:{fields:t.found.fields}});return ns.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){Qr(!!t.missing),Qr(!!t.readTime);const n=aa(e,t.missing),r=ra(t.readTime);return ns.newNoDocument(n,r)}(e,t):Jr()}function ma(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Jr()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.C?(Qr(void 0===t||"string"==typeof t),Ci.fromBase64String(t||"")):(Qr(void 0===t||t instanceof Uint8Array),Ci.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?ei.UNKNOWN:So(e.code);return new ti(t,e.message||"")}(o);n=new Ko(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=aa(e,r.document.name),s=ra(r.document.updateTime),o=new es({mapValue:{fields:r.document.fields}}),a=ns.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new zo(c,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=aa(e,r.document),s=r.readTime?ra(r.readTime):yi.min(),o=ns.newNoDocument(i,s),a=r.removedTargetIds||[];n=new zo([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=aa(e,r.document),s=r.removedTargetIds||[];n=new zo([],s,i,null)}else{if(!("filter"in t))return Jr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Io(r),s=e.targetId;n=new Ho(s,i)}}return n}function ga(e,t){let n;if(t instanceof mo)n={update:da(e,t.key,t.value)};else if(t instanceof bo)n={delete:oa(e,t.key)};else if(t instanceof go)n={update:da(e,t.key,t.data),updateMask:Oa(t.fieldMask)};else{if(!(t instanceof _o))return Jr();n={verify:oa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Ys)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Js)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Zs)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof eo)return{fieldPath:t.field.canonicalString(),increment:n.N};throw Jr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:na(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Jr()}(e,t.precondition)),n}function va(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?oo.updateTime(ra(e.updateTime)):void 0!==e.exists?oo.exists(e.exists):oo.none()}(t.currentDocument):oo.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)Qr("REQUEST_TIME"===t.setToServerValue),n=new Ys;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Js(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Zs(e)}else"increment"in t?n=new eo(e,t.increment):Jr();const r=ki.fromServerFormat(t.fieldPath);return new ro(r,n)}(e,t))):[];if(t.update){t.update.name;const i=aa(e,t.update.name),s=new es({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Si(t.map((e=>ki.fromServerFormat(e))))}(t.updateMask);return new go(i,s,e,n,r)}return new mo(i,s,n,r)}if(t.delete){const r=aa(e,t.delete);return new bo(r,n)}if(t.verify){const r=aa(e,t.verify);return new _o(r,n)}return Jr()}function ya(e,t){return e&&e.length>0?(Qr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ra(e.updateTime):ra(t);return n.isEqual(yi.min())&&(n=ra(t)),new so(n,e.transformResults||[])}(e,t)))):[]}function wa(e,t){return{documents:[ca(e,t.path)]}}function ba(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=ca(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ca(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Qi(e.value))return{unaryFilter:{field:Ca(e.field),op:"IS_NAN"}};if(Ji(e.value))return{unaryFilter:{field:Ca(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Qi(e.value))return{unaryFilter:{field:Ca(e.field),op:"IS_NOT_NAN"}};if(Ji(e.value))return{unaryFilter:{field:Ca(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ca(e.field),op:xa(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Ca(e.field),direction:Sa(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.C||Fi(t)?t:{value:t}}(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=Ea(t.startAt)),t.endAt&&(n.structuredQuery.endAt=Ea(t.endAt)),n}function _a(e){let t=la(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Qr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=Ta(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new _s(Aa(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Fi(t)?null:t}(n.limit));let c=null;n.startAt&&(c=ka(n.startAt));let l=null;return n.endAt&&(l=ka(n.endAt)),Ss(t,i,o,s,a,"F",c,l)}function Ia(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Jr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Ta(e){return e?void 0!==e.unaryFilter?[Na(e)]:void 0!==e.fieldFilter?[Ra(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Ta(e))).reduce(((e,t)=>e.concat(t))):Jr():[]}function Ea(e){return{before:e.before,values:e.position}}function ka(e){const t=!!e.before,n=e.values||[];return new ws(n,t)}function Sa(e){return Qo[e]}function xa(e){return Zo[e]}function Ca(e){return{fieldPath:e.canonicalString()}}function Aa(e){return ki.fromServerFormat(e.fieldPath)}function Ra(e){return ls.create(Aa(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Jr()}}(e.fieldFilter.op),e.fieldFilter.value)}function Na(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Aa(e.unaryFilter.field);return ls.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Aa(e.unaryFilter.field);return ls.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Aa(e.unaryFilter.field);return ls.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Aa(e.unaryFilter.field);return ls.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Jr()}}function Oa(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Pa(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Fa(t)),t=Da(e.get(n),t);return Fa(t)}function Da(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Fa(e){return e+""}function Ma(e){const t=e.length;if(Qr(t>=2),2===t)return Qr(""===e.charAt(0)&&""===e.charAt(1)),Ti.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&Jr(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:Jr()}s=t+2}return new Ti(r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class Ua{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}Ua.store="owner",Ua.key="owner";class Va{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}Va.store="mutationQueues",Va.keyPath="userId";class ja{constructor(e,t,n,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}ja.store="mutations",ja.keyPath="batchId",ja.userMutationsIndex="userMutationsIndex",ja.userMutationsKeyPath=["userId","batchId"];class Ba{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,La(t)]}static key(e,t,n){return[e,La(t),n]}}Ba.store="documentMutations",Ba.PLACEHOLDER=new Ba;class $a{constructor(e,t){this.path=e,this.readTime=t}}class za{constructor(e,t){this.path=e,this.version=t}}class Ha{constructor(e,t,n,r,i,s){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}Ha.store="remoteDocuments",Ha.readTimeIndex="readTimeIndex",Ha.readTimeIndexPath="readTime",Ha.collectionReadTimeIndex="collectionReadTimeIndex",Ha.collectionReadTimeIndexPath=["parentPath","readTime"];class Ka{constructor(e){this.byteSize=e}}Ka.store="remoteDocumentGlobal",Ka.key="remoteDocumentGlobalKey";class Wa{constructor(e,t,n,r,i,s,o){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}Wa.store="targets",Wa.keyPath="targetId",Wa.queryTargetsIndexName="queryTargetsIndex",Wa.queryTargetsKeyPath=["canonicalId","targetId"];class Ga{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}Ga.store="targetDocuments",Ga.keyPath=["targetId","path"],Ga.documentTargetsIndex="documentTargetsIndex",Ga.documentTargetsKeyPath=["path","targetId"];class Ya{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}Ya.key="targetGlobalKey",Ya.store="targetGlobal";class Ja{constructor(e,t){this.collectionId=e,this.parent=t}}Ja.store="collectionParents",Ja.keyPath=["collectionId","parent"];class Qa{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}Qa.store="clientMetadata",Qa.keyPath="clientId";class Za{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}Za.store="bundles",Za.keyPath="bundleId";class Xa{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}Xa.store="namedQueries",Xa.keyPath="name";const ec=[Va.store,ja.store,Ba.store,Ha.store,Wa.store,Ua.store,Ya.store,Ga.store,Qa.store,Ka.store,Ja.store,Za.store,Xa.store],tc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Jr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new rc(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof rc?t:rc.resolve(t)}catch(e){return rc.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):rc.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):rc.reject(t)}static resolve(e){return new rc(((t,n)=>{t(e)}))}static reject(e){return new rc(((t,n)=>{n(e)}))}static waitFor(e){return new rc(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=rc.resolve(!1);for(const n of e)t=t.next((e=>e?rc.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.It=new ni,this.transaction.oncomplete=()=>{this.It.resolve()},this.transaction.onabort=()=>{t.error?this.It.reject(new ac(e,t.error)):this.It.resolve()},this.transaction.onerror=t=>{const n=dc(t.target.error);this.It.reject(new ac(e,n))}}static open(e,t,n,r){try{return new ic(t,e.transaction(r,n))}catch(e){throw new ac(t,e)}}get At(){return this.It.promise}abort(e){e&&this.It.reject(e),this.aborted||(Kr("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const t=this.transaction.objectStore(e);return new lc(t)}}class sc{constructor(e,t,n){this.name=e,this.version=t,this.Rt=n,12.2===sc.bt((0,c.z$)())&&Wr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Kr("SimpleDb","Removing database:",e),uc(window.indexedDB.deleteDatabase(e)).toPromise()}static Pt(){if(!(0,c.hl)())return!1;if(sc.vt())return!0;const e=(0,c.z$)(),t=sc.bt(e),n=0<t&&t<10,r=sc.Vt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static vt(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.env)||void 0===e?void 0:e.St)}static Dt(e,t){return e.store(t)}static bt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Vt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Ct(e){return this.db||(Kr("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new ac(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new ti(ei.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new ti(ei.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new ac(e,r))},r.onupgradeneeded=e=>{Kr("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.Rt.Nt(t,r.transaction,e.oldVersion,this.version).next((()=>{Kr("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.kt&&(this.db.onversionchange=e=>this.kt(e)),this.db}xt(e){this.kt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.Ct(e);const t=ic.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).catch((e=>(t.abort(e),rc.reject(e)))).toPromise();return s.catch((()=>{})),await t.At,s}catch(e){const t="FirebaseError"!==e.name&&s<3;if(Kr("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class oc{constructor(e){this.$t=e,this.Ot=!1,this.Mt=null}get isDone(){return this.Ot}get Ft(){return this.Mt}set cursor(e){this.$t=e}done(){this.Ot=!0}Lt(e){this.Mt=e}delete(){return uc(this.$t.delete())}}class ac extends ti{constructor(e,t){super(ei.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function cc(e){return"IndexedDbTransactionError"===e.name}class lc{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Kr("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Kr("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),uc(n)}add(e){return Kr("SimpleDb","ADD",this.store.name,e,e),uc(this.store.add(e))}get(e){return uc(this.store.get(e)).next((t=>(void 0===t&&(t=null),Kr("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Kr("SimpleDb","DELETE",this.store.name,e),uc(this.store.delete(e))}count(){return Kr("SimpleDb","COUNT",this.store.name),uc(this.store.count())}Bt(e,t){const n=this.cursor(this.options(e,t)),r=[];return this.Ut(n,((e,t)=>{r.push(t)})).next((()=>r))}qt(e,t){Kr("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Kt=!1;const r=this.cursor(n);return this.Ut(r,((e,t,n)=>n.delete()))}jt(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Ut(r,t)}Qt(e){const t=this.cursor({});return new rc(((n,r)=>{t.onerror=e=>{const t=dc(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}Ut(e,t){const n=[];return new rc(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new oc(i),o=t(i.primaryKey,i.value,s);if(o instanceof rc){const e=o.catch((e=>(s.done(),rc.reject(e))));n.push(e)}s.isDone?r():null===s.Ft?i.continue():i.continue(s.Ft)}})).next((()=>rc.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Kt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function uc(e){return new rc(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=dc(e.target.error);n(t)}}))}let hc=!1;function dc(e){const t=sc.bt((0,c.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new ti("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return hc||(hc=!0,setTimeout((()=>{throw e}),0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc extends nc{constructor(e,t){super(),this.Wt=e,this.currentSequenceNumber=t}}function pc(e,t){const n=Xr(e);return sc.Dt(n.Wt,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&lo(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&uo(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&uo(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(yi.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Uo())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,((e,t)=>fo(e,t)))&&mi(this.baseMutations,e.baseMutations,((e,t)=>fo(e,t)))}}class gc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Qr(e.mutations.length===n.length);let r=Mo();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new gc(e,t,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,n,r,i=yi.min(),s=yi.min(),o=Ci.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new vc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new vc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new vc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this.Gt=e}}function wc(e,t){if(t.document)return fa(e.Gt,t.document,!!t.hasCommittedMutations);if(t.noDocument){const e=Ui.fromSegments(t.noDocument.path),n=Ec(t.noDocument.readTime),r=ns.newNoDocument(e,n);return t.hasCommittedMutations?r.setHasCommittedMutations():r}if(t.unknownDocument){const e=Ui.fromSegments(t.unknownDocument.path),n=Ec(t.unknownDocument.version);return ns.newUnknownDocument(e,n)}return Jr()}function bc(e,t,n){const r=_c(n),i=t.key.path.popLast().toArray();if(t.isFoundDocument()){const n=function(e,t){return{name:oa(e,t.key),fields:t.data.value.mapValue.fields,updateTime:ea(e,t.version.toTimestamp())}}(e.Gt,t),s=t.hasCommittedMutations;return new Ha(null,null,n,s,r,i)}if(t.isNoDocument()){const e=t.key.path.toArray(),n=Tc(t.version),s=t.hasCommittedMutations;return new Ha(null,new $a(e,n),null,s,r,i)}if(t.isUnknownDocument()){const e=t.key.path.toArray(),n=Tc(t.version);return new Ha(new za(e,n),null,null,!0,r,i)}return Jr()}function _c(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Ic(e){const t=new vi(e[0],e[1]);return yi.fromTimestamp(t)}function Tc(e){const t=e.toTimestamp();return new qa(t.seconds,t.nanoseconds)}function Ec(e){const t=new vi(e.seconds,e.nanoseconds);return yi.fromTimestamp(t)}function kc(e,t){const n=(t.baseMutations||[]).map((t=>va(e.Gt,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>va(e.Gt,t))),i=vi.fromMillis(t.localWriteTimeMs);return new mc(t.batchId,i,n,r)}function Sc(e){const t=Ec(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Ec(e.lastLimboFreeSnapshotVersion):yi.min();let r;var i;return void 0!==e.query.documents?(Qr(1===(i=e.query).documents.length),r=Ls(xs(la(i.documents[0])))):r=function(e){return Ls(_a(e))}(e.query),new vc(r,e.targetId,0,e.lastListenSequenceNumber,t,n,Ci.fromBase64String(e.resumeToken))}function xc(e,t){const n=Tc(t.snapshotVersion),r=Tc(t.lastLimboFreeSnapshotVersion);let i;i=cs(t.target)?wa(e.Gt,t.target):ba(e.Gt,t.target);const s=t.resumeToken.toBase64();return new Wa(t.targetId,ss(t.target),n,s,t.sequenceNumber,r,i)}function Cc(e){const t=_a({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Ds(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{getBundleMetadata(e,t){return Rc(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:Ec(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return Rc(e).put({bundleId:(n=t).id,createTime:Tc(ra(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Nc(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Cc(t.bundledQuery),readTime:Ec(t.readTime)};var t}))}saveNamedQuery(e,t){return Nc(e).put(function(e){return{name:e.name,readTime:Tc(ra(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Rc(e){return pc(e,Za.store)}function Nc(e){return pc(e,Xa.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.zt=new Pc}addToCollectionParentIndex(e,t){return this.zt.add(t),rc.resolve()}getCollectionParents(e,t){return rc.resolve(this.zt.getEntries(t))}}class Pc{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Ro(Ti.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Ro(Ti.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(){this.Ht=new Pc}addToCollectionParentIndex(e,t){if(!this.Ht.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.Ht.add(t)}));const i={collectionId:n,parent:La(r)};return Dc(e).put(i)}return rc.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[gi(t),""],!1,!0);return Dc(e).Bt(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(Ma(r.parent))}return n}))}}function Dc(e){return pc(e,Ja.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Mc{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Mc(e,Mc.DEFAULT_COLLECTION_PERCENTILE,Mc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(e,t,n){const r=e.store(ja.store),i=e.store(Ba.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.jt({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{Qr(1===a)})));const l=[];for(const u of n.mutations){const e=Ba.key(t,u.key.path,n.batchId);s.push(i.delete(e)),l.push(u.key)}return rc.waitFor(s).next((()=>l))}function Uc(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Jr();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mc.DEFAULT_COLLECTION_PERCENTILE=10,Mc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mc.DEFAULT=new Mc(41943040,Mc.DEFAULT_COLLECTION_PERCENTILE,Mc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mc.DISABLED=new Mc(-1,0,0);class Vc{constructor(e,t,n,r){this.userId=e,this.k=t,this.Jt=n,this.referenceDelegate=r,this.Yt={}}static Xt(e,t,n,r){Qr(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Vc(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Bc(e).jt({index:ja.userMutationsIndex,range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=$c(e),s=Bc(e);return s.add({}).next((o=>{Qr("number"==typeof o);const a=new mc(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>ga(e.Gt,t))),i=n.mutations.map((t=>ga(e.Gt,t)));return new ja(t,n.batchId,n.localWriteTime.toMillis(),r,i)}(this.k,this.userId,a),l=[];let u=new Ro(((e,t)=>pi(e.canonicalString(),t.canonicalString())));for(const e of r){const t=Ba.key(this.userId,e.key.path,o);u=u.add(e.key.path.popLast()),l.push(s.put(c)),l.push(i.put(t,Ba.PLACEHOLDER))}return u.forEach((t=>{l.push(this.Jt.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.Yt[o]=a.keys()})),rc.waitFor(l).next((()=>a))}))}lookupMutationBatch(e,t){return Bc(e).get(t).next((e=>e?(Qr(e.userId===this.userId),kc(this.k,e)):null))}Zt(e,t){return this.Yt[t]?rc.resolve(this.Yt[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.Yt[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Bc(e).jt({index:ja.userMutationsIndex,range:r},((e,t,r)=>{t.userId===this.userId&&(Qr(t.batchId>=n),i=kc(this.k,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Bc(e).jt({index:ja.userMutationsIndex,range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Bc(e).Bt(ja.userMutationsIndex,t).next((e=>e.map((e=>kc(this.k,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Ba.prefixForPath(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return $c(e).jt({range:r},((n,r,s)=>{const[o,a,c]=n,l=Ma(a);if(o===this.userId&&t.path.isEqual(l))return Bc(e).get(c).next((e=>{if(!e)throw Jr();Qr(e.userId===this.userId),i.push(kc(this.k,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ro(pi);const r=[];return t.forEach((t=>{const i=Ba.prefixForPath(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=$c(e).jt({range:s},((e,r,i)=>{const[s,o,a]=e,c=Ma(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),rc.waitFor(r).next((()=>this.te(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=Ba.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Ro(pi);return $c(e).jt({range:s},((e,t,i)=>{const[s,a,c]=e,l=Ma(a);s===this.userId&&n.isPrefixOf(l)?l.length===r&&(o=o.add(c)):i.done()})).next((()=>this.te(e,o)))}te(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Bc(e).get(t).next((e=>{if(null===e)throw Jr();Qr(e.userId===this.userId),n.push(kc(this.k,e))})))})),rc.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return qc(e.Wt,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.ee(t.batchId)})),rc.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}ee(e){delete this.Yt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return rc.resolve();const n=IDBKeyRange.lowerBound(Ba.prefixForUser(this.userId)),r=[];return $c(e).jt({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=Ma(e[1]);r.push(t)}else n.done()})).next((()=>{Qr(0===r.length)}))}))}containsKey(e,t){return jc(e,this.userId,t)}ne(e){return zc(e).get(this.userId).next((e=>e||new Va(this.userId,-1,"")))}}function jc(e,t,n){const r=Ba.prefixForPath(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return $c(e).jt({range:s,Kt:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function Bc(e){return pc(e,ja.store)}function $c(e){return pc(e,Ba.store)}function zc(e){return pc(e,Va.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new Hc(0)}static re(){return new Hc(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,t){this.referenceDelegate=e,this.k=t}allocateTargetId(e){return this.oe(e).next((t=>{const n=new Hc(t.highestTargetId);return t.highestTargetId=n.next(),this.ce(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.oe(e).next((e=>yi.fromTimestamp(new vi(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.oe(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.oe(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.ce(e,r))))}addTargetData(e,t){return this.ae(e,t).next((()=>this.oe(e).next((n=>(n.targetCount+=1,this.ue(t,n),this.ce(e,n))))))}updateTargetData(e,t){return this.ae(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Wc(e).delete(t.targetId))).next((()=>this.oe(e))).next((t=>(Qr(t.targetCount>0),t.targetCount-=1,this.ce(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return Wc(e).jt(((s,o)=>{const a=Sc(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>rc.waitFor(i))).next((()=>r))}forEachTarget(e,t){return Wc(e).jt(((e,n)=>{const r=Sc(n);t(r)}))}oe(e){return Gc(e).get(Ya.key).next((e=>(Qr(null!==e),e)))}ce(e,t){return Gc(e).put(Ya.key,t)}ae(e,t){return Wc(e).put(xc(this.k,t))}ue(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.oe(e).next((e=>e.targetCount))}getTargetData(e,t){const n=ss(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Wc(e).jt({range:r,index:Wa.queryTargetsIndexName},((e,n,r)=>{const s=Sc(n);as(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=Yc(e);return t.forEach((t=>{const s=La(t.path);r.push(i.put(new Ga(n,s))),r.push(this.referenceDelegate.addReference(e,n,t))})),rc.waitFor(r)}removeMatchingKeys(e,t,n){const r=Yc(e);return rc.forEach(t,(t=>{const i=La(t.path);return rc.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Yc(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Yc(e);let i=Uo();return r.jt({range:n,Kt:!0},((e,t,n)=>{const r=Ma(e[1]),s=new Ui(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=La(t.path),r=IDBKeyRange.bound([n],[gi(n)],!1,!0);let i=0;return Yc(e).jt({index:Ga.documentTargetsIndex,Kt:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}Et(e,t){return Wc(e).get(t).next((e=>e?Sc(e):null))}}function Wc(e){return pc(e,Wa.store)}function Gc(e){return pc(e,Ya.store)}function Yc(e){return pc(e,Ga.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jc(e){if(e.code!==ei.FAILED_PRECONDITION||e.message!==tc)throw e;Kr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc([e,t],[n,r]){const i=pi(e,n);return 0===i?pi(t,r):i}class Zc{constructor(e){this.he=e,this.buffer=new Ro(Qc),this.le=0}fe(){return++this.le}de(e){const t=[e,this.fe()];if(this.buffer.size<this.he)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Qc(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Xc{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.we=!1,this._e=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.me(e)}stop(){this._e&&(this._e.cancel(),this._e=null)}get started(){return null!==this._e}me(e){const t=this.we?3e5:6e4;Kr("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this._e=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this._e=null,this.we=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){cc(e)?Kr("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Jc(e)}await this.me(e)}))}}class el{constructor(e,t){this.ge=e,this.params=t}calculateTargetCount(e,t){return this.ge.ye(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return rc.resolve(hi.I);const n=new Zc(t);return this.ge.forEachTarget(e,(e=>n.de(e.sequenceNumber))).next((()=>this.ge.pe(e,(e=>n.de(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.ge.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.ge.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Kr("LruGarbageCollector","Garbage collection skipped; disabled"),rc.resolve(Fc)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Kr("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fc):this.Te(e,t)))}getCacheSize(e){return this.ge.getCacheSize(e)}Te(e,t){let n,r,i,s,o,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Kr("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(l=Date.now(),zr()<=a["in"].DEBUG&&Kr("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-o)+"ms\n"+`\tRemoved ${e} documents in `+(l-c)+"ms\n"+`Total Duration: ${l-u}ms`),rc.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new el(e,t)}(this,t)}ye(e){const t=this.Ee(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Ee(e){let t=0;return this.pe(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pe(e,t){return this.Ie(e,((e,n)=>t(n)))}addReference(e,t,n){return nl(e,n)}removeReference(e,t,n){return nl(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return nl(e,t)}Ae(e,t){return function(e,t){let n=!1;return zc(e).Qt((r=>jc(e,r,t).next((e=>(e&&(n=!0),rc.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Ie(e,((s,o)=>{if(o<=t){const t=this.Ae(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s),Yc(e).delete([0,La(s.path)]))))}));r.push(t)}})).next((()=>rc.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return nl(e,t)}Ie(e,t){const n=Yc(e);let r,i=hi.I;return n.jt({index:Ga.documentTargetsIndex},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==hi.I&&t(new Ui(Ma(r)),i),i=o,r=s):i=hi.I})).next((()=>{i!==hi.I&&t(new Ui(Ma(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function nl(e,t){return Yc(e).put(function(e,t){return new Ga(0,La(e.path),t)}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){bi(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return _i(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.changes=new rl((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:yi.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:ns.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?rc.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t){this.k=e,this.Jt=t}addEntry(e,t,n){return cl(e).put(ll(t),n)}removeEntry(e,t){const n=cl(e),r=ll(t);return n.delete(r)}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Re(e,n))))}getEntry(e,t){return cl(e).get(ll(t)).next((e=>this.be(t,e)))}Pe(e,t){return cl(e).get(ll(t)).next((e=>({document:this.be(t,e),size:Uc(e)})))}getEntries(e,t){let n=Po();return this.ve(e,t,((e,t)=>{const r=this.be(e,t);n=n.insert(e,r)})).next((()=>n))}Ve(e,t){let n=Po(),r=new xo(Ui.comparator);return this.ve(e,t,((e,t)=>{const i=this.be(e,t);n=n.insert(e,i),r=r.insert(e,Uc(t))})).next((()=>({documents:n,Se:r})))}ve(e,t,n){if(t.isEmpty())return rc.resolve();const r=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),i=t.getIterator();let s=i.getNext();return cl(e).jt({range:r},((e,t,r)=>{const o=Ui.fromSegments(e);for(;s&&Ui.comparator(s,o)<0;)n(s,null),s=i.getNext();s&&s.isEqual(o)&&(n(s,t),s=i.hasNext()?i.getNext():null),s?r.Lt(s.path.toArray()):r.done()})).next((()=>{for(;s;)n(s,null),s=i.hasNext()?i.getNext():null}))}getDocumentsMatchingQuery(e,t,n){let r=Po();const i=t.path.length+1,s={};if(n.isEqual(yi.min())){const e=t.path.toArray();s.range=IDBKeyRange.lowerBound(e)}else{const e=t.path.toArray(),r=_c(n);s.range=IDBKeyRange.lowerBound([e,r],!0),s.index=Ha.collectionReadTimeIndex}return cl(e).jt(s,((e,n,s)=>{if(e.length!==i)return;const o=wc(this.k,n);t.path.isPrefixOf(o.key.path)?Us(t,o)&&(r=r.insert(o.key,o)):s.done()})).next((()=>r))}newChangeBuffer(e){return new ol(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return al(e).get(Ka.key).next((e=>(Qr(!!e),e)))}Re(e,t){return al(e).put(Ka.key,t)}be(e,t){if(t){const e=wc(this.k,t);if(!e.isNoDocument()||!e.version.isEqual(yi.min()))return e}return ns.newInvalidDocument(e)}}class ol extends il{constructor(e,t){super(),this.De=e,this.trackRemovals=t,this.Ce=new rl((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new Ro(((e,t)=>pi(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.Ce.get(i);if(s.document.isValidDocument()){const a=bc(this.De.k,s.document,this.getReadTime(i));r=r.add(i.path.popLast());const c=Uc(a);n+=c-o,t.push(this.De.addEntry(e,i,a))}else if(n-=o,this.trackRemovals){const n=bc(this.De.k,ns.newNoDocument(i,yi.min()),this.getReadTime(i));t.push(this.De.addEntry(e,i,n))}else t.push(this.De.removeEntry(e,i))})),r.forEach((n=>{t.push(this.De.Jt.addToCollectionParentIndex(e,n))})),t.push(this.De.updateMetadata(e,n)),rc.waitFor(t)}getFromCache(e,t){return this.De.Pe(e,t).next((e=>(this.Ce.set(t,e.size),e.document)))}getAllFromCache(e,t){return this.De.Ve(e,t).next((({documents:e,Se:t})=>(t.forEach(((e,t)=>{this.Ce.set(e,t)})),e)))}}function al(e){return pc(e,Ka.store)}function cl(e){return pc(e,Ha.store)}function ll(e){return e.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e){this.k=e}Nt(e,t,n,r){Qr(n<r&&n>=0&&r<=11);const i=new ic("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore(Ua.store)}(e),function(e){e.createObjectStore(Va.store,{keyPath:Va.keyPath}),e.createObjectStore(ja.store,{keyPath:ja.keyPath,autoIncrement:!0}).createIndex(ja.userMutationsIndex,ja.userMutationsKeyPath,{unique:!0}),e.createObjectStore(Ba.store)}(e),hl(e),function(e){e.createObjectStore(Ha.store)}(e));let s=rc.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore(Ga.store),e.deleteObjectStore(Wa.store),e.deleteObjectStore(Ya.store)}(e),hl(e)),s=s.next((()=>function(e){const t=e.store(Ya.store),n=new Ya(0,0,yi.min().toTimestamp(),0);return t.put(Ya.key,n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store(ja.store).Bt().next((n=>{e.deleteObjectStore(ja.store),e.createObjectStore(ja.store,{keyPath:ja.keyPath,autoIncrement:!0}).createIndex(ja.userMutationsIndex,ja.userMutationsKeyPath,{unique:!0});const r=t.store(ja.store),i=n.map((e=>r.put(e)));return rc.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore(Qa.store,{keyPath:Qa.keyPath})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Ne(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore(Ka.store)}(e),this.ke(i))))),n<7&&r>=7&&(s=s.next((()=>this.xe(i)))),n<8&&r>=8&&(s=s.next((()=>this.$e(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e),function(e){const t=e.objectStore(Ha.store);t.createIndex(Ha.readTimeIndex,Ha.readTimeIndexPath,{unique:!1}),t.createIndex(Ha.collectionReadTimeIndex,Ha.collectionReadTimeIndexPath,{unique:!1})}(t)}))),n<10&&r>=10&&(s=s.next((()=>this.Oe(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore(Za.store,{keyPath:Za.keyPath})}(e),function(e){e.createObjectStore(Xa.store,{keyPath:Xa.keyPath})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}))),s}ke(e){let t=0;return e.store(Ha.store).jt(((e,n)=>{t+=Uc(n)})).next((()=>{const n=new Ka(t);return e.store(Ka.store).put(Ka.key,n)}))}Ne(e){const t=e.store(Va.store),n=e.store(ja.store);return t.Bt().next((t=>rc.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.Bt(ja.userMutationsIndex,r).next((n=>rc.forEach(n,(n=>{Qr(n.userId===t.userId);const r=kc(this.k,n);return qc(e,t.userId,r).next((()=>{}))}))))}))))}xe(e){const t=e.store(Ga.store),n=e.store(Ha.store);return e.store(Ya.store).get(Ya.key).next((e=>{const r=[];return n.jt(((n,i)=>{const s=new Ti(n),o=function(e){return[0,La(e)]}(s);r.push(t.get(o).next((n=>n?rc.resolve():(n=>t.put(new Ga(0,La(n),e.highestListenSequenceNumber)))(s))))})).next((()=>rc.waitFor(r)))}))}$e(e,t){e.createObjectStore(Ja.store,{keyPath:Ja.keyPath});const n=t.store(Ja.store),r=new Pc,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:La(r)})}};return t.store(Ha.store).jt({Kt:!0},((e,t)=>{const n=new Ti(e);return i(n.popLast())})).next((()=>t.store(Ba.store).jt({Kt:!0},(([e,t,n],r)=>{const s=Ma(t);return i(s.popLast())}))))}Oe(e){const t=e.store(Wa.store);return t.jt(((e,n)=>{const r=Sc(n),i=xc(this.k,r);return t.put(i)}))}}function hl(e){e.createObjectStore(Ga.store,{keyPath:Ga.keyPath}).createIndex(Ga.documentTargetsIndex,Ga.documentTargetsKeyPath,{unique:!0}),e.createObjectStore(Wa.store,{keyPath:Wa.keyPath}).createIndex(Wa.queryTargetsIndexName,Wa.queryTargetsKeyPath,{unique:!0}),e.createObjectStore(Ya.store)}const dl="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class fl{constructor(e,t,n,r,i,s,o,a,c,l){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Me=i,this.window=s,this.document=o,this.Fe=c,this.Le=l,this.Be=null,this.Ue=!1,this.isPrimary=!1,this.networkEnabled=!0,this.qe=null,this.inForeground=!1,this.Ke=null,this.je=null,this.Qe=Number.NEGATIVE_INFINITY,this.We=e=>Promise.resolve(),!fl.Pt())throw new ti(ei.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new tl(this,r),this.Ge=t+"main",this.k=new yc(a),this.ze=new sc(this.Ge,11,new ul(this.k)),this.He=new Kc(this.referenceDelegate,this.k),this.Jt=new Lc,this.Je=function(e,t){return new sl(e,t)}(this.k,this.Jt),this.Ye=new Ac,this.window&&this.window.localStorage?this.Xe=this.window.localStorage:(this.Xe=null,!1===l&&Wr("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ze().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ti(ei.FAILED_PRECONDITION,dl);return this.tn(),this.en(),this.nn(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.He.getHighestSequenceNumber(e)))})).then((e=>{this.Be=new hi(e,this.Fe)})).then((()=>{this.Ue=!0})).catch((e=>(this.ze&&this.ze.close(),Promise.reject(e))))}sn(e){return this.We=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ze.xt((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Me.enqueueAndForget((async()=>{this.started&&await this.Ze()})))}Ze(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>ml(e).put(new Qa(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next((()=>{if(this.isPrimary)return this.rn(e).next((e=>{e||(this.isPrimary=!1,this.Me.enqueueRetryable((()=>this.We(!1))))}))})).next((()=>this.on(e))).next((t=>this.isPrimary&&!t?this.cn(e).next((()=>!1)):!!t&&this.an(e).next((()=>!0)))))).catch((e=>{if(cc(e))return Kr("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Kr("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Me.enqueueRetryable((()=>this.We(e))),this.isPrimary=e}))}rn(e){return pl(e).get(Ua.key).next((e=>rc.resolve(this.un(e))))}hn(e){return ml(e).delete(this.clientId)}async ln(){if(this.isPrimary&&!this.fn(this.Qe,18e5)){this.Qe=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=pc(e,Qa.store);return t.Bt().next((e=>{const n=this.dn(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return rc.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.Xe)for(const t of e)this.Xe.removeItem(this.wn(t.clientId))}}nn(){this.je=this.Me.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ze().then((()=>this.ln())).then((()=>this.nn()))))}un(e){return!!e&&e.ownerId===this.clientId}on(e){return this.Le?rc.resolve(!0):pl(e).get(Ua.key).next((t=>{if(null!==t&&this.fn(t.leaseTimestampMs,5e3)&&!this._n(t.ownerId)){if(this.un(t)&&this.networkEnabled)return!0;if(!this.un(t)){if(!t.allowTabSynchronization)throw new ti(ei.FAILED_PRECONDITION,dl);return!1}}return!(!this.networkEnabled||!this.inForeground)||ml(e).Bt().next((e=>void 0===this.dn(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&Kr("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Ue=!1,this.mn(),this.je&&(this.je.cancel(),this.je=null),this.gn(),this.yn(),await this.ze.runTransaction("shutdown","readwrite",[Ua.store,Qa.store],(e=>{const t=new fc(e,hi.I);return this.cn(t).next((()=>this.hn(t)))})),this.ze.close(),this.pn()}dn(e,t){return e.filter((e=>this.fn(e.updateTimeMs,t)&&!this._n(e.clientId)))}Tn(){return this.runTransaction("getActiveClients","readonly",(e=>ml(e).Bt().next((e=>this.dn(e,18e5).map((e=>e.clientId))))))}get started(){return this.Ue}getMutationQueue(e){return Vc.Xt(e,this.k,this.Jt,this.referenceDelegate)}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getIndexManager(){return this.Jt}getBundleCache(){return this.Ye}runTransaction(e,t,n){Kr("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite";let i;return this.ze.runTransaction(e,r,ec,(r=>(i=new fc(r,this.Be?this.Be.next():hi.I),"readwrite-primary"===t?this.rn(i).next((e=>!!e||this.on(i))).next((t=>{if(!t)throw Wr(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Me.enqueueRetryable((()=>this.We(!1))),new ti(ei.FAILED_PRECONDITION,tc);return n(i)})).next((e=>this.an(i).next((()=>e)))):this.En(i).next((()=>n(i)))))).then((e=>(i.raiseOnCommittedEvent(),e)))}En(e){return pl(e).get(Ua.key).next((e=>{if(null!==e&&this.fn(e.leaseTimestampMs,5e3)&&!this._n(e.ownerId)&&!this.un(e)&&!(this.Le||this.allowTabSynchronization&&e.allowTabSynchronization))throw new ti(ei.FAILED_PRECONDITION,dl)}))}an(e){const t=new Ua(this.clientId,this.allowTabSynchronization,Date.now());return pl(e).put(Ua.key,t)}static Pt(){return sc.Pt()}cn(e){const t=pl(e);return t.get(Ua.key).next((e=>this.un(e)?(Kr("IndexedDbPersistence","Releasing primary lease."),t.delete(Ua.key)):rc.resolve()))}fn(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Wr(`Detected an update time that is in the future: ${e} > ${n}`),!1))}tn(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ke=()=>{this.Me.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.Ze())))},this.document.addEventListener("visibilitychange",this.Ke),this.inForeground="visible"===this.document.visibilityState)}gn(){this.Ke&&(this.document.removeEventListener("visibilitychange",this.Ke),this.Ke=null)}en(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.qe=()=>{this.mn(),(0,c.G6)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Me.enterRestrictedMode(!0),this.Me.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.qe))}yn(){this.qe&&(this.window.removeEventListener("pagehide",this.qe),this.qe=null)}_n(e){var t;try{const n=null!==(null===(t=this.Xe)||void 0===t?void 0:t.getItem(this.wn(e)));return Kr("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return Wr("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}mn(){if(this.Xe)try{this.Xe.setItem(this.wn(this.clientId),String(Date.now()))}catch(T){Wr("Failed to set zombie client id.",T)}}pn(){if(this.Xe)try{this.Xe.removeItem(this.wn(this.clientId))}catch(T){}}wn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function pl(e){return pc(e,Ua.store)}function ml(e){return pc(e,Qa.store)}function gl(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class vl{constructor(e,t){this.progress=e,this.In=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,t,n){this.Je=e,this.An=t,this.Jt=n}Rn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.bn(e,t,n)))}bn(e,t,n){return this.Je.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}Pn(e,t){e.forEach(((e,n)=>{for(const r of t)r.applyToLocalView(n)}))}vn(e,t){return this.Je.getEntries(e,t).next((t=>this.Vn(e,t).next((()=>t))))}Vn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.Pn(t,e)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Ui.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Sn(e,t.path):Os(t)?this.Dn(e,t,n):this.Cn(e,t,n)}Sn(e,t){return this.Rn(e,new Ui(t)).next((e=>{let t=Do();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Dn(e,t,n){const r=t.collectionGroup;let i=Do();return this.Jt.getCollectionParents(e,r).next((s=>rc.forEach(s,(s=>{const o=function(e,t){return new ks(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.Cn(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}Cn(e,t,n){let r,i;return this.Je.getDocumentsMatchingQuery(e,t,n).next((n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(i=t,this.Nn(e,i,r).next((e=>{r=e;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=ns.newInvalidDocument(n),r=r.insert(n,i)),uo(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((e,n)=>{Us(t,n)||(r=r.remove(e))})),r)))}Nn(e,t,n){let r=Uo();for(const s of t)for(const e of s.mutations)e instanceof go&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.Je.getEntries(e,r).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.kn=n,this.xn=r}static $n(e,t){let n=Uo(),r=Uo();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new wl(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{On(e){this.Mn=e}getDocumentsMatchingQuery(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(yi.min())?this.Fn(e,t):this.Mn.vn(e,r).next((i=>{const s=this.Ln(t,i);return(Cs(t)||As(t))&&this.Bn(t.limitType,s,r,n)?this.Fn(e,t):(zr()<=a["in"].DEBUG&&Kr("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),qs(t)),this.Mn.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}Ln(e,t){let n=new Ro(Vs(e));return t.forEach(((t,r)=>{Us(e,r)&&(n=n.add(r))})),n}Bn(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(e,t){return zr()<=a["in"].DEBUG&&Kr("QueryEngine","Using full collection scan to execute query:",qs(t)),this.Mn.getDocumentsMatchingQuery(e,t,yi.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t,n,r){this.persistence=e,this.Un=t,this.k=r,this.qn=new xo(pi),this.Kn=new rl((e=>ss(e)),as),this.jn=yi.min(),this.An=e.getMutationQueue(n),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new yl(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qn)))}}function Il(e,t,n,r){return new _l(e,t,n,r)}async function Tl(e,t){const n=Xr(e);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.An.getAllMutationBatches(e).next((o=>(s=o,r=n.persistence.getMutationQueue(t),i=new yl(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let o=Uo();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.vn(e,o).next((e=>({Gn:e,removedBatchIds:n,addedBatchIds:r})))}))}));return n.An=r,n.Wn=i,n.Un.On(n.Wn),s}function El(e,t){const n=Xr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=rc.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Qr(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))}))})),o.next((()=>e.An.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,r)))}))}function kl(e){const t=Xr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.He.getLastRemoteSnapshotVersion(e)))}function Sl(e,t){const n=Xr(e),r=t.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.He.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.He.addMatchingKeys(e,s.addedDocuments,a))));let l=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?l=l.withResumeToken(Ci.EMPTY_BYTE_STRING,yi.min()).withLastLimboFreeSnapshotVersion(yi.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,r)),i=i.insert(a,l),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,l,s)&&o.push(n.He.updateTargetData(e,l))}));let a=Po();if(t.documentUpdates.forEach(((r,i)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(xl(e,s,t.documentUpdates,r,void 0).next((e=>{a=e}))),!r.isEqual(yi.min())){const t=n.He.getLastRemoteSnapshotVersion(e).next((t=>n.He.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return rc.waitFor(o).next((()=>s.apply(e))).next((()=>n.Wn.Vn(e,a))).next((()=>a))})).then((e=>(n.qn=i,e)))}function xl(e,t,n,r,i){let s=Uo();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=Po();return n.forEach(((n,o)=>{const a=e.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(yi.min())?(t.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),s=s.insert(n,o)):Kr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}function Cl(e,t){const n=Xr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.An.getNextMutationBatchAfterBatchId(e,t))))}function Al(e,t){const n=Xr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.He.getTargetData(e,t).next((i=>i?(r=i,rc.resolve(r)):n.He.allocateTargetId(e).next((i=>(r=new vc(t,i,0,e.currentSequenceNumber),n.He.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.qn.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(e.targetId,e),n.Kn.set(t,e.targetId)),e}))}async function Rl(e,t,n){const r=Xr(e),i=r.qn.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!cc(e))throw e;Kr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qn=r.qn.remove(t),r.Kn.delete(i.target)}function Nl(e,t,n){const r=Xr(e);let i=yi.min(),s=Uo();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Xr(e),i=r.Kn.get(n);return void 0!==i?rc.resolve(r.qn.get(i)):r.He.getTargetData(t,n)}(r,e,Ls(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Un.getDocumentsMatchingQuery(e,t,n?i:yi.min(),n?s:Uo()))).next((e=>({documents:e,zn:s})))))}function Ol(e,t){const n=Xr(e),r=Xr(n.He),i=n.qn.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.Et(e,t).next((e=>e?e.target:null))))}function Pl(e){const t=Xr(e);return t.persistence.runTransaction("Get new document changes","readonly",(e=>function(e,t,n){const r=Xr(e);let i=Po(),s=_c(n);const o=cl(t),a=IDBKeyRange.lowerBound(s,!0);return o.jt({index:Ha.readTimeIndex,range:a},((e,t)=>{const n=wc(r.k,t);i=i.insert(n.key,n),s=t.readTime})).next((()=>({In:i,readTime:Ic(s)})))}(t.Qn,e,t.jn))).then((({In:e,readTime:n})=>(t.jn=n,e)))}async function Ll(e){const t=Xr(e);return t.persistence.runTransaction("Synchronize last document change read time","readonly",(e=>function(e){const t=cl(e);let n=yi.min();return t.jt({index:Ha.readTimeIndex,reverse:!0},((e,t,r)=>{t.readTime&&(n=Ic(t.readTime)),r.done()})).next((()=>n))}(e))).then((e=>{t.jn=e}))}async function Dl(e,t,n,r){const i=Xr(e);let s=Uo(),o=Po(),a=Mo();for(const u of n){const e=t.Hn(u.metadata.name);u.document&&(s=s.add(e)),o=o.insert(e,t.Jn(u)),a=a.insert(e,t.Yn(u.metadata.readTime))}const c=i.Qn.newChangeBuffer({trackRemovals:!0}),l=await Al(i,function(e){return Ls(xs(Ti.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>xl(e,c,o,yi.min(),a).next((t=>(c.apply(e),t))).next((t=>i.He.removeMatchingKeysForTargetId(e,l.targetId).next((()=>i.He.addMatchingKeys(e,s,l.targetId))).next((()=>i.Wn.Vn(e,t))).next((()=>t))))))}async function Fl(e,t,n=Uo()){const r=await Al(e,Ls(Cc(t.bundledQuery))),i=Xr(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=ra(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ye.saveNamedQuery(e,t);const o=r.withResumeToken(Ci.EMPTY_BYTE_STRING,s);return i.qn=i.qn.insert(o.targetId,o),i.He.updateTargetData(e,o).next((()=>i.He.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.He.addMatchingKeys(e,n,r.targetId))).next((()=>i.Ye.saveNamedQuery(e,t)))}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,t){return rc.resolve(this.Xn.get(t))}saveBundleMetadata(e,t){var n;return this.Xn.set(t.id,{id:(n=t).id,version:n.version,createTime:ra(n.createTime)}),rc.resolve()}getNamedQuery(e,t){return rc.resolve(this.Zn.get(t))}saveNamedQuery(e,t){return this.Zn.set(t.name,function(e){return{name:e.name,query:Cc(e.bundledQuery),readTime:ra(e.readTime)}}(t)),rc.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.ts=new Ro(Ul.es),this.ns=new Ro(Ul.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,t){const n=new Ul(e,t);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.os(new Ul(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new Ui(new Ti([])),n=new Ul(t,e),r=new Ul(t,e+1),i=[];return this.ns.forEachInRange([n,r],(e=>{this.os(e),i.push(e.key)})),i}hs(){this.ts.forEach((e=>this.os(e)))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const t=new Ui(new Ti([])),n=new Ul(t,e),r=new Ul(t,e+1);let i=Uo();return this.ns.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Ul(e,0),n=this.ts.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Ul{constructor(e,t){this.key=e,this.fs=t}static es(e,t){return Ui.comparator(e.key,t.key)||pi(e.fs,t.fs)}static ss(e,t){return pi(e.fs,t.fs)||Ui.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t){this.Jt=e,this.referenceDelegate=t,this.An=[],this.ds=1,this.ws=new Ro(Ul.es)}checkEmpty(e){return rc.resolve(0===this.An.length)}addMutationBatch(e,t,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new mc(i,t,n,r);this.An.push(s);for(const o of r)this.ws=this.ws.add(new Ul(o.key,i)),this.Jt.addToCollectionParentIndex(e,o.key.path.popLast());return rc.resolve(s)}lookupMutationBatch(e,t){return rc.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.gs(n),i=r<0?0:r;return rc.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return rc.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(e){return rc.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ul(t,0),r=new Ul(t,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],(e=>{const t=this._s(e.fs);i.push(t)})),rc.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ro(pi);return t.forEach((e=>{const t=new Ul(e,0),r=new Ul(e,Number.POSITIVE_INFINITY);this.ws.forEachInRange([t,r],(e=>{n=n.add(e.fs)}))})),rc.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Ui.isDocumentKey(i)||(i=i.child(""));const s=new Ul(new Ui(i),0);let o=new Ro(pi);return this.ws.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.fs)),!0)}),s),rc.resolve(this.ys(o))}ys(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Qr(0===this.ps(t.batchId,"removed")),this.An.shift();let n=this.ws;return rc.forEach(t.mutations,(r=>{const i=new Ul(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ws=n}))}ee(e){}containsKey(e,t){const n=new Ul(t,0),r=this.ws.firstAfterOrEqual(n);return rc.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.An.length,rc.resolve()}ps(e,t){return this.gs(e)}gs(e){return 0===this.An.length?0:e-this.An[0].batchId}_s(e){const t=this.gs(e);return t<0||t>=this.An.length?null:this.An[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,t){this.Jt=e,this.Ts=t,this.docs=new xo(Ui.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return rc.resolve(n?n.document.mutableCopy():ns.newInvalidDocument(t))}getEntries(e,t){let n=Po();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ns.newInvalidDocument(e))})),rc.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=Po();const i=new Ui(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||Us(t,i)&&(r=r.insert(i.key,i.mutableCopy()))}return rc.resolve(r)}Es(e,t){return rc.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Bl(this)}getSize(e){return rc.resolve(this.size)}}class Bl extends il{constructor(e){super(),this.De=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?t.push(this.De.addEntry(e,r.document,this.getReadTime(n))):this.De.removeEntry(n)})),rc.waitFor(t)}getFromCache(e,t){return this.De.getEntry(e,t)}getAllFromCache(e,t){return this.De.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.persistence=e,this.Is=new rl((e=>ss(e)),as),this.lastRemoteSnapshotVersion=yi.min(),this.highestTargetId=0,this.As=0,this.Rs=new ql,this.targetCount=0,this.bs=Hc.ie()}forEachTarget(e,t){return this.Is.forEach(((e,n)=>t(n))),rc.resolve()}getLastRemoteSnapshotVersion(e){return rc.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return rc.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),rc.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.As&&(this.As=t),rc.resolve()}ae(e){this.Is.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new Hc(t),this.highestTargetId=t),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,t){return this.ae(t),this.targetCount+=1,rc.resolve()}updateTargetData(e,t){return this.ae(t),rc.resolve()}removeTargetData(e,t){return this.Is.delete(t.target),this.Rs.us(t.targetId),this.targetCount-=1,rc.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Is.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Is.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),rc.waitFor(i).next((()=>r))}getTargetCount(e){return rc.resolve(this.targetCount)}getTargetData(e,t){const n=this.Is.get(t)||null;return rc.resolve(n)}addMatchingKeys(e,t,n){return this.Rs.rs(t,n),rc.resolve()}removeMatchingKeys(e,t,n){this.Rs.cs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),rc.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Rs.us(t),rc.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Rs.ls(t);return rc.resolve(n)}containsKey(e,t){return rc.resolve(this.Rs.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,t){this.Ps={},this.Be=new hi(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new $l(this),this.Jt=new Oc,this.Je=function(e,t){return new jl(e,t)}(this.Jt,(e=>this.referenceDelegate.vs(e))),this.k=new yc(t),this.Ye=new Ml(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let t=this.Ps[e.toKey()];return t||(t=new Vl(this.Jt,this.referenceDelegate),this.Ps[e.toKey()]=t),t}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,t,n){Kr("MemoryPersistence","Starting transaction:",e);const r=new Hl(this.Be.next());return this.referenceDelegate.Vs(),n(r).next((e=>this.referenceDelegate.Ss(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ds(e,t){return rc.or(Object.values(this.Ps).map((n=>()=>n.containsKey(e,t))))}}class Hl extends nc{constructor(e){super(),this.currentSequenceNumber=e}}class Kl{constructor(e){this.persistence=e,this.Cs=new ql,this.Ns=null}static ks(e){return new Kl(e)}get xs(){if(this.Ns)return this.Ns;throw Jr()}addReference(e,t,n){return this.Cs.addReference(n,t),this.xs.delete(n.toString()),rc.resolve()}removeReference(e,t,n){return this.Cs.removeReference(n,t),this.xs.add(n.toString()),rc.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),rc.resolve()}removeTarget(e,t){this.Cs.us(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Vs(){this.Ns=new Set}Ss(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rc.forEach(this.xs,(n=>{const r=Ui.fromPath(n);return this.$s(e,r).next((e=>{e||t.removeEntry(r)}))})).next((()=>(this.Ns=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}vs(e){return 0}$s(e,t){return rc.or([()=>rc.resolve(this.Cs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ds(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(e,t){return`firestore_clients_${e}_${t}`}function Gl(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Yl(e,t){return`firestore_targets_${e}_${t}`}class Jl{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Os(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new ti(r.error.code,r.error.message))),s?new Jl(e,t,r.state,i):(Wr("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Ms(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ql{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Os(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new ti(n.error.code,n.error.message))),i?new Ql(e,n.state,r):(Wr("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Ms(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Zl{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Os(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=jo();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=qi(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new Zl(e,i):(Wr("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Xl{constructor(e,t){this.clientId=e,this.onlineState=t}static Os(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Xl(t.clientId,t.onlineState):(Wr("SharedClientState",`Failed to parse online state: ${e}`),null)}}class eu{constructor(){this.activeTargetIds=jo()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ms(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tu{constructor(e,t,n,r,i){this.window=e,this.Me=t,this.persistenceKey=n,this.Bs=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Us=this.qs.bind(this),this.Ks=new xo(pi),this.started=!1,this.js=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Qs=Wl(this.persistenceKey,this.Bs),this.Ws=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.Ks=this.Ks.insert(this.Bs,new eu),this.Gs=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.zs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Hs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Js=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Ys=function(e){return`firestore_bundle_loaded_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.Us)}static Pt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Tn();for(const n of e){if(n===this.Bs)continue;const e=this.getItem(Wl(this.persistenceKey,n));if(e){const t=Zl.Os(n,e);t&&(this.Ks=this.Ks.insert(t.clientId,t))}}this.Xs();const t=this.storage.getItem(this.Js);if(t){const e=this.Zs(t);e&&this.ti(e)}for(const n of this.js)this.qs(n);this.js=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ei(this.Ks)}isActiveQueryTarget(e){let t=!1;return this.Ks.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.ni(e,"pending")}updateMutationState(e,t,n){this.ni(e,t,n),this.si(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Yl(this.persistenceKey,e));if(n){const r=Ql.Os(e,n);r&&(t=r.state)}}return this.ii.Fs(e),this.Xs(),t}removeLocalQueryTarget(e){this.ii.Ls(e),this.Xs()}isLocalQueryTarget(e){return this.ii.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Yl(this.persistenceKey,e))}updateQueryState(e,t,n){this.ri(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.si(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.oi(e)}notifyBundleLoaded(){this.ci()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Us),this.removeItem(this.Qs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Kr("SharedClientState","READ",e,t),t}setItem(e,t){Kr("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Kr("SharedClientState","REMOVE",e),this.storage.removeItem(e)}qs(e){const t=e;if(t.storageArea===this.storage){if(Kr("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Qs)return void Wr("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Me.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.Gs.test(t.key)){if(null==t.newValue){const e=this.ai(t.key);return this.ui(e,null)}{const e=this.hi(t.key,t.newValue);if(e)return this.ui(e.clientId,e)}}else if(this.zs.test(t.key)){if(null!==t.newValue){const e=this.li(t.key,t.newValue);if(e)return this.fi(e)}}else if(this.Hs.test(t.key)){if(null!==t.newValue){const e=this.di(t.key,t.newValue);if(e)return this.wi(e)}}else if(t.key===this.Js){if(null!==t.newValue){const e=this.Zs(t.newValue);if(e)return this.ti(e)}}else if(t.key===this.Ws){const e=function(e){let t=hi.I;if(null!=e)try{const n=JSON.parse(e);Qr("number"==typeof n),t=n}catch(e){Wr("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==hi.I&&this.sequenceNumberHandler(e)}else if(t.key===this.Ys)return this.syncEngine._i()}else this.js.push(t)}))}}get ii(){return this.Ks.get(this.Bs)}Xs(){this.setItem(this.Qs,this.ii.Ms())}ni(e,t,n){const r=new Jl(this.currentUser,e,t,n),i=Gl(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Ms())}si(e){const t=Gl(this.persistenceKey,this.currentUser,e);this.removeItem(t)}oi(e){const t={clientId:this.Bs,onlineState:e};this.storage.setItem(this.Js,JSON.stringify(t))}ri(e,t,n){const r=Yl(this.persistenceKey,e),i=new Ql(e,t,n);this.setItem(r,i.Ms())}ci(){this.setItem(this.Ys,"value-not-used")}ai(e){const t=this.Gs.exec(e);return t?t[1]:null}hi(e,t){const n=this.ai(e);return Zl.Os(n,t)}li(e,t){const n=this.zs.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Jl.Os(new jr(i),r,t)}di(e,t){const n=this.Hs.exec(e),r=Number(n[1]);return Ql.Os(r,t)}Zs(e){return Xl.Os(e)}async fi(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.mi(e.batchId,e.state,e.error);Kr("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}wi(e){return this.syncEngine.gi(e.targetId,e.state,e.error)}ui(e,t){const n=t?this.Ks.insert(e,t):this.Ks.remove(e),r=this.ei(this.Ks),i=this.ei(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.yi(s,o).then((()=>{this.Ks=n}))}ti(e){this.Ks.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ei(e){let t=jo();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class nu{constructor(){this.pi=new eu,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.pi.Fs(e),this.Ti[e]||"not-current"}updateQueryState(e,t,n){this.Ti[e]=t}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new eu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{Ei(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){Kr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}bi(){Kr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Oi(e){this.ki(e)}Mi(e){this.xi(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,t,n,r,i){const s=this.Ui(e,t);Kr("RestConnection","Sending: ",s,n);const o={};return this.qi(o,r,i),this.Ki(e,s,o,n).then((e=>(Kr("RestConnection","Received: ",e),e)),(t=>{throw Gr("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}ji(e,t,n,r,i){return this.Bi(e,t,n,r,i)}qi(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Br,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Ui(e,t){const n=su[e];return`${this.Fi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,t,n,r){return new Promise(((i,s)=>{const o=new Ur;o.listenOnce(Lr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Pr.NO_ERROR:const t=o.getResponseJson();Kr("Connection","XHR received:",JSON.stringify(t)),i(t);break;case Pr.TIMEOUT:Kr("Connection",'RPC "'+e+'" timed out'),s(new ti(ei.DEADLINE_EXCEEDED,"Request time out"));break;case Pr.HTTP_ERROR:const n=o.getStatus();if(Kr("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ei).indexOf(t)>=0?t:ei.UNKNOWN}(e.status);s(new ti(t,e.message))}else s(new ti(ei.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new ti(ei.UNAVAILABLE,"Connection failed."));break;default:Jr()}}finally{Kr("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}Qi(e,t,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Nr(),s=Or(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Mr({})),this.qi(o.initMessageHeaders,t,n),(0,c.uI)()||(0,c.b$)()||(0,c.d)()||(0,c.w1)()||(0,c.Mn)()||(0,c.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");Kr("Connection","Creating WebChannel: "+a,o);const l=i.createWebChannel(a,o);let u=!1,h=!1;const d=new ou({Vi:e=>{h?Kr("Connection","Not sending because WebChannel is closed:",e):(u||(Kr("Connection","Opening WebChannel transport."),l.open(),u=!0),Kr("Connection","WebChannel sending:",e),l.send(e))},Si:()=>l.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(l,qr.EventType.OPEN,(()=>{h||Kr("Connection","WebChannel transport opened.")})),f(l,qr.EventType.CLOSE,(()=>{h||(h=!0,Kr("Connection","WebChannel transport closed"),d.Oi())})),f(l,qr.EventType.ERROR,(e=>{h||(h=!0,Gr("Connection","WebChannel transport errored:",e),d.Oi(new ti(ei.UNAVAILABLE,"The operation could not be completed")))})),f(l,qr.EventType.MESSAGE,(e=>{var t;if(!h){const n=e.data[0];Qr(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Kr("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=To[e];if(void 0!==t)return So(t)}(e),n=i.message;void 0===t&&(t=ei.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),h=!0,d.Oi(new ti(t,n)),l.close()}else Kr("Connection","WebChannel received:",n),d.Mi(n)}})),f(s,Dr.STAT_EVENT,(e=>{e.stat===Fr.PROXY?Kr("Connection","Detected buffering proxy"):e.stat===Fr.NOPROXY&&Kr("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.$i()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(){return"undefined"!=typeof window?window:null}function lu(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(e){return new Xo(e,!0)}class hu{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Me=e,this.timerId=t,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,t-n);r>0&&Kr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,r,(()=>(this.Yi=Date.now(),e()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,t,n,r,i,s,o,a){this.Me=e,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new hu(e,t)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.cr&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(e,t){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==e?this.ur.reset():t&&t.code===ei.RESOURCE_EXHAUSTED?(Wr(t.toString()),Wr("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):t&&t.code===ei.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(t)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),t=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.rr===t&&this.Ir(e,n)}),(t=>{e((()=>{const e=new ti(ei.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ar(e)}))}))}Ir(e,t){const n=this.Er(this.rr);this.stream=this.Rr(e,t),this.stream.Di((()=>{n((()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((e=>{n((()=>this.Ar(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(e){return Kr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return t=>{this.Me.enqueueAndForget((()=>this.rr===e?t():(Kr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class fu extends du{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.k=i}Rr(e,t){return this.ir.Qi("Listen",e,t)}onMessage(e){this.ur.reset();const t=ma(this.k,e),n=function(e){if(!("targetChange"in e))return yi.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?yi.min():t.readTime?ra(t.readTime):yi.min()}(e);return this.listener.br(t,n)}Pr(e){const t={};t.database=ua(this.k),t.addTarget=function(e,t){let n;const r=t.target;return n=cs(r)?{documents:wa(e,r)}:{query:ba(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=ta(e,t.resumeToken):t.snapshotVersion.compareTo(yi.min())>0&&(n.readTime=ea(e,t.snapshotVersion.toTimestamp())),n}(this.k,e);const n=Ia(this.k,e);n&&(t.labels=n),this.gr(t)}vr(e){const t={};t.database=ua(this.k),t.removeTarget=e,this.gr(t)}}class pu extends du{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,t){return this.ir.Qi("Write",e,t)}onMessage(e){if(Qr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const t=ya(e.writeResults,e.commitTime),n=ra(e.commitTime);return this.listener.Cr(n,t)}return Qr(!e.writeResults||0===e.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=ua(this.k),this.gr(e)}Dr(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>ga(this.k,e)))};this.gr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.ir=n,this.k=r,this.$r=!1}Or(){if(this.$r)throw new ti(ei.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,t,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.Bi(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ei.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ti(ei.UNKNOWN,e.toString())}))}ji(e,t,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.ji(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ei.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ti(ei.UNKNOWN,e.toString())}))}terminate(){this.$r=!0}}class gu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){0===this.Mr&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(e){"Online"===this.state?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Mr=0,"Online"===e&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(Wr(t),this.Lr=!1):Kr("OnlineStateTracker",t)}jr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei((e=>{n.enqueueAndForget((async()=>{Su(this)&&(Kr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Xr(e);t.Gr.add(4),await wu(t),t.Jr.set("Unknown"),t.Gr.delete(4),await yu(t)}(this))}))})),this.Jr=new gu(n,r)}}async function yu(e){if(Su(e))for(const t of e.zr)await t(!0)}async function wu(e){for(const t of e.zr)await t(!1)}function bu(e,t){const n=Xr(e);n.Wr.has(t.targetId)||(n.Wr.set(t.targetId,t),ku(n)?Eu(n):zu(n).lr()&&Iu(n,t))}function _u(e,t){const n=Xr(e),r=zu(n);n.Wr.delete(t),r.lr()&&Tu(n,t),0===n.Wr.size&&(r.lr()?r._r():Su(n)&&n.Jr.set("Unknown"))}function Iu(e,t){e.Yr.X(t.targetId),zu(e).Pr(t)}function Tu(e,t){e.Yr.X(t),zu(e).vr(t)}function Eu(e){e.Yr=new Go({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Wr.get(t)||null}),zu(e).start(),e.Jr.Br()}function ku(e){return Su(e)&&!zu(e).hr()&&e.Wr.size>0}function Su(e){return 0===Xr(e).Gr.size}function xu(e){e.Yr=void 0}async function Cu(e){e.Wr.forEach(((t,n)=>{Iu(e,t)}))}async function Au(e,t){xu(e),ku(e)?(e.Jr.Kr(t),Eu(e)):e.Jr.set("Unknown")}async function Ru(e,t,n){if(e.Jr.set("Online"),t instanceof Ko&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Wr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Wr.delete(r),e.Yr.removeTarget(r))}(e,t)}catch(n){Kr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Nu(e,n)}else if(t instanceof zo?e.Yr.ot(t):t instanceof Ho?e.Yr.dt(t):e.Yr.ut(t),!n.isEqual(yi.min()))try{const t=await kl(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Yr.gt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Wr.get(r);i&&e.Wr.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.Wr.get(t);if(!n)return;e.Wr.set(t,n.withResumeToken(Ci.EMPTY_BYTE_STRING,n.snapshotVersion)),Tu(e,t);const r=new vc(n.target,t,1,n.sequenceNumber);Iu(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Kr("RemoteStore","Failed to raise snapshot:",t),await Nu(e,t)}}async function Nu(e,t,n){if(!cc(t))throw t;e.Gr.add(1),await wu(e),e.Jr.set("Offline"),n||(n=()=>kl(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Kr("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await yu(e)}))}function Ou(e,t){return t().catch((n=>Nu(e,n,t)))}async function Pu(e){const t=Xr(e),n=Hu(t);let r=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;Lu(t);)try{const e=await Cl(t.localStore,r);if(null===e){0===t.Qr.length&&n._r();break}r=e.batchId,Du(t,e)}catch(e){await Nu(t,e)}Fu(t)&&Mu(t)}function Lu(e){return Su(e)&&e.Qr.length<10}function Du(e,t){e.Qr.push(t);const n=Hu(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function Fu(e){return Su(e)&&!Hu(e).hr()&&e.Qr.length>0}function Mu(e){Hu(e).start()}async function qu(e){Hu(e).kr()}async function Uu(e){const t=Hu(e);for(const n of e.Qr)t.Dr(n.mutations)}async function Vu(e,t,n){const r=e.Qr.shift(),i=gc.from(r,t,n);await Ou(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Pu(e)}async function ju(e,t){t&&Hu(e).Sr&&await async function(e,t){if(n=t.code,ko(n)&&n!==ei.ABORTED){const n=e.Qr.shift();Hu(e).wr(),await Ou(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Pu(e)}var n}(e,t),Fu(e)&&Mu(e)}async function Bu(e,t){const n=Xr(e);n.asyncQueue.verifyOperationInProgress(),Kr("RemoteStore","RemoteStore received new credentials");const r=Su(n);n.Gr.add(3),await wu(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Gr.delete(3),await yu(n)}async function $u(e,t){const n=Xr(e);t?(n.Gr.delete(2),await yu(n)):t||(n.Gr.add(2),await wu(n),n.Jr.set("Unknown"))}function zu(e){return e.Xr||(e.Xr=function(e,t,n){const r=Xr(e);return r.Or(),new fu(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Di:Cu.bind(null,e),Ni:Au.bind(null,e),br:Ru.bind(null,e)}),e.zr.push((async t=>{t?(e.Xr.wr(),ku(e)?Eu(e):e.Jr.set("Unknown")):(await e.Xr.stop(),xu(e))}))),e.Xr}function Hu(e){return e.Zr||(e.Zr=function(e,t,n){const r=Xr(e);return r.Or(),new pu(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)}(e.datastore,e.asyncQueue,{Di:qu.bind(null,e),Ni:ju.bind(null,e),Nr:Uu.bind(null,e),Cr:Vu.bind(null,e)}),e.zr.push((async t=>{t?(e.Zr.wr(),await Pu(e)):(await e.Zr.stop(),e.Qr.length>0&&(Kr("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))}))),e.Zr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ku{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ni,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Ku(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ti(ei.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wu(e,t){if(Wr("AsyncQueue",`${t}: ${e}`),cc(e))return new ti(ei.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ui.comparator(t.key,n.key):(e,t)=>Ui.comparator(e.key,t.key),this.keyedMap=Do(),this.sortedSet=new xo(this.comparator)}static emptySet(e){return new Gu(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gu))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Gu;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this.eo=new xo(Ui.comparator)}track(e){const t=e.doc.key,n=this.eo.get(t);n?0!==e.type&&3===n.type?this.eo=this.eo.insert(t,e):3===e.type&&1!==n.type?this.eo=this.eo.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.eo=this.eo.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.eo=this.eo.remove(t):1===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):Jr():this.eo=this.eo.insert(t,e)}no(){const e=[];return this.eo.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Ju{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Ju(e,t,Gu.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(){this.so=void 0,this.listeners=[]}}class Zu{constructor(){this.queries=new rl((e=>Ms(e)),Fs),this.onlineState="Unknown",this.io=new Set}}async function Xu(e,t){const n=Xr(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Qu),i)try{s.so=await n.onListen(r)}catch(e){const n=Wu(e,`Initialization of query '${qs(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.ro(n.onlineState),s.so&&t.oo(s.so)&&rh(n)}async function eh(e,t){const n=Xr(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function th(e,t){const n=Xr(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.oo(i)&&(r=!0);t.so=i}}r&&rh(n)}function nh(e,t,n){const r=Xr(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function rh(e){e.io.forEach((e=>{e.next()}))}class ih{constructor(e,t,n){this.query=e,this.co=t,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Ju(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.ao?this.ho(e)&&(this.co.next(e),t=!0):this.lo(e,this.onlineState)&&(this.fo(e),t=!0),this.uo=e,t}onError(e){this.co.error(e)}ro(e){this.onlineState=e;let t=!1;return this.uo&&!this.ao&&this.lo(this.uo,e)&&(this.fo(this.uo),t=!0),t}lo(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.wo||!n)&&(!e.docs.isEmpty()||"Offline"===t)}ho(e){if(e.docChanges.length>0)return!0;const t=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}fo(e){e=Ju.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.ao=!0,this.co.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t){this.payload=e,this.byteLength=t}_o(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e){this.k=e}Hn(e){return aa(this.k,e)}Jn(e){return e.metadata.exists?fa(this.k,e.document,!1):ns.newNoDocument(this.Hn(e.metadata.name),this.Yn(e.metadata.readTime))}Yn(e){return ra(e)}}class ah{constructor(e,t,n){this.mo=e,this.localStore=t,this.k=n,this.queries=[],this.documents=[],this.progress=ch(e)}yo(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t),t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}po(e){const t=new Map,n=new oh(this.k);for(const r of e)if(r.metadata.queries){const e=n.Hn(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Uo()).add(e);t.set(n,r)}}return t}async complete(){const e=await Dl(this.localStore,new oh(this.k),this.documents,this.mo.id),t=this.po(this.documents);for(const n of this.queries)await Fl(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",new vl(Object.assign({},this.progress),e)}}function ch(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.key=e}}class uh{constructor(e){this.key=e}}class hh{constructor(e,t){this.query=e,this.To=t,this.Eo=null,this.current=!1,this.Io=Uo(),this.mutatedKeys=Uo(),this.Ao=Vs(e),this.Ro=new Gu(this.Ao)}get bo(){return this.To}Po(e,t){const n=t?t.vo:new Yu,r=t?t.Ro:this.Ro;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Cs(this.query)&&r.size===this.query.limit?r.last():null,c=As(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),u=Us(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Vo(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ao(u,a)>0||c&&this.Ao(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),Cs(this.query)||As(this.query))for(;s.size>this.query.limit;){const e=Cs(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ro:s,vo:n,Bn:o,mutatedKeys:i}}Vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const i=e.vo.no();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Jr()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Ao(e.doc,t.doc))),this.So(n);const s=t?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new Ju(this.query,e.Ro,r,i,e.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Yu,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach((e=>this.To=this.To.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.To=this.To.delete(e))),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=Uo(),this.Ro.forEach((e=>{this.No(e.key)&&(this.Io=this.Io.add(e.key))}));const t=[];return e.forEach((e=>{this.Io.has(e)||t.push(new uh(e))})),this.Io.forEach((n=>{e.has(n)||t.push(new lh(n))})),t}ko(e){this.To=e.zn,this.Io=Uo();const t=this.Po(e.documents);return this.applyChanges(t,!0)}xo(){return Ju.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class dh{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class fh{constructor(e){this.key=e,this.$o=!1}}class ph{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Oo={},this.Mo=new rl((e=>Ms(e)),Fs),this.Fo=new Map,this.Lo=new Set,this.Bo=new xo(Ui.comparator),this.Uo=new Map,this.qo=new ql,this.Ko={},this.jo=new Map,this.Qo=Hc.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function mh(e,t){const n=zh(e);let r,i;const s=n.Mo.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const e=await Al(n.localStore,Ls(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await gh(n,t,r,"current"===s),n.isPrimaryClient&&bu(n.remoteStore,e)}return i}async function gh(e,t,n,r){e.Go=(t,n,r)=>async function(e,t,n,r){let i=t.view.Po(n);i.Bn&&(i=await Nl(e.localStore,t.query,!1).then((({documents:e})=>t.view.Po(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Ah(e,t.targetId,o.Co),o.snapshot}(e,t,n,r);const i=await Nl(e.localStore,t,!0),s=new hh(t,i.zn),o=s.Po(i.documents),a=$o.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);Ah(e,n,c.Co);const l=new dh(t,n,s);return e.Mo.set(t,l),e.Fo.has(n)?e.Fo.get(n).push(t):e.Fo.set(n,[t]),c.snapshot}async function vh(e,t){const n=Xr(e),r=n.Mo.get(t),i=n.Fo.get(r.targetId);if(i.length>1)return n.Fo.set(r.targetId,i.filter((e=>!Fs(e,t)))),void n.Mo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Rl(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),_u(n.remoteStore,r.targetId),xh(n,r.targetId)})).catch(Jc)):(xh(n,r.targetId),await Rl(n.localStore,r.targetId,!0))}async function yh(e,t,n){const r=Hh(e);try{const e=await function(e,t){const n=Xr(e),r=vi.now(),i=t.reduce(((e,t)=>e.add(t.key)),Uo());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Wn.vn(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=ho(e,s.get(e.key));null!=t&&o.push(new go(e.key,t,ts(t.value.mapValue),oo.exists(!0)))}return n.An.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ko[e.currentUser.toKey()];r||(r=new xo(pi)),r=r.insert(t,n),e.Ko[e.currentUser.toKey()]=r}(r,e.batchId,n),await Oh(r,e.changes),await Pu(r.remoteStore)}catch(e){const t=Wu(e,"Failed to persist write");n.reject(t)}}async function wh(e,t){const n=Xr(e);try{const e=await Sl(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Uo.get(t);r&&(Qr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.$o=!0:e.modifiedDocuments.size>0?Qr(r.$o):e.removedDocuments.size>0&&(Qr(r.$o),r.$o=!1))})),await Oh(n,e,t)}catch(e){await Jc(e)}}function bh(e,t,n){const r=Xr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Mo.forEach(((n,r)=>{const i=r.view.ro(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Xr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.ro(t)&&(r=!0)})),r&&rh(n)}(r.eventManager,t),e.length&&r.Oo.br(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function _h(e,t,n){const r=Xr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Uo.get(t),s=i&&i.key;if(s){let e=new xo(Ui.comparator);e=e.insert(s,ns.newNoDocument(s,yi.min()));const n=Uo().add(s),i=new Bo(yi.min(),new Map,new Ro(pi),e,n);await wh(r,i),r.Bo=r.Bo.remove(s),r.Uo.delete(t),Nh(r)}else await Rl(r.localStore,t,!1).then((()=>xh(r,t,n))).catch(Jc)}async function Ih(e,t){const n=Xr(e),r=t.batch.batchId;try{const e=await El(n.localStore,t);Sh(n,r,null),kh(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Oh(n,e)}catch(e){await Jc(e)}}async function Th(e,t,n){const r=Xr(e);try{const e=await function(e,t){const n=Xr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.An.lookupMutationBatch(e,t).next((t=>(Qr(null!==t),r=t.keys(),n.An.removeMutationBatch(e,t)))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,r)))}))}(r.localStore,t);Sh(r,t,n),kh(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Oh(r,e)}catch(n){await Jc(n)}}async function Eh(e,t){const n=Xr(e);Su(n.remoteStore)||Kr("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=Xr(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.An.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.jo.get(e)||[];r.push(t),n.jo.set(e,r)}catch(e){const n=Wu(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function kh(e,t){(e.jo.get(t)||[]).forEach((e=>{e.resolve()})),e.jo.delete(t)}function Sh(e,t,n){const r=Xr(e);let i=r.Ko[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ko[r.currentUser.toKey()]=i}}function xh(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Fo.get(t))e.Mo.delete(r),n&&e.Oo.zo(r,n);e.Fo.delete(t),e.isPrimaryClient&&e.qo.us(t).forEach((t=>{e.qo.containsKey(t)||Ch(e,t)}))}function Ch(e,t){e.Lo.delete(t.path.canonicalString());const n=e.Bo.get(t);null!==n&&(_u(e.remoteStore,n),e.Bo=e.Bo.remove(t),e.Uo.delete(n),Nh(e))}function Ah(e,t,n){for(const r of n)r instanceof lh?(e.qo.addReference(r.key,t),Rh(e,r)):r instanceof uh?(Kr("SyncEngine","Document no longer in limbo: "+r.key),e.qo.removeReference(r.key,t),e.qo.containsKey(r.key)||Ch(e,r.key)):Jr()}function Rh(e,t){const n=t.key,r=n.path.canonicalString();e.Bo.get(n)||e.Lo.has(r)||(Kr("SyncEngine","New document in limbo: "+n),e.Lo.add(r),Nh(e))}function Nh(e){for(;e.Lo.size>0&&e.Bo.size<e.maxConcurrentLimboResolutions;){const t=e.Lo.values().next().value;e.Lo.delete(t);const n=new Ui(Ti.fromString(t)),r=e.Qo.next();e.Uo.set(r,new fh(n)),e.Bo=e.Bo.insert(n,r),bu(e.remoteStore,new vc(Ls(xs(n.path)),r,2,hi.I))}}async function Oh(e,t,n){const r=Xr(e),i=[],s=[],o=[];r.Mo.isEmpty()||(r.Mo.forEach(((e,a)=>{o.push(r.Go(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=wl.$n(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Oo.br(i),await async function(e,t){const n=Xr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>rc.forEach(t,(t=>rc.forEach(t.kn,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>rc.forEach(t.xn,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!cc(e))throw e;Kr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.qn.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(e,i)}}}(r.localStore,s))}async function Ph(e,t){const n=Xr(e);if(!n.currentUser.isEqual(t)){Kr("SyncEngine","User change. New user:",t.toKey());const e=await Tl(n.localStore,t);n.currentUser=t,function(e,t){e.jo.forEach((e=>{e.forEach((e=>{e.reject(new ti(ei.CANCELLED,t))}))})),e.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Oh(n,e.Gn)}}function Lh(e,t){const n=Xr(e),r=n.Uo.get(t);if(r&&r.$o)return Uo().add(r.key);{let e=Uo();const r=n.Fo.get(t);if(!r)return e;for(const t of r){const r=n.Mo.get(t);e=e.unionWith(r.view.bo)}return e}}async function Dh(e,t){const n=Xr(e),r=await Nl(n.localStore,t.query,!0),i=t.view.ko(r);return n.isPrimaryClient&&Ah(n,t.targetId,i.Co),i}async function Fh(e){const t=Xr(e);return Pl(t.localStore).then((e=>Oh(t,e)))}async function Mh(e,t,n,r){const i=Xr(e),s=await function(e,t){const n=Xr(e),r=Xr(n.An);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Zt(e,t).next((t=>t?n.Wn.vn(e,t):rc.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await Pu(i.remoteStore):"acknowledged"===n||"rejected"===n?(Sh(i,t,r||null),kh(i,t),function(e,t){Xr(Xr(e).An).ee(t)}(i.localStore,t)):Jr(),await Oh(i,s)):Kr("SyncEngine","Cannot apply mutation batch with id: "+t)}async function qh(e,t){const n=Xr(e);if(zh(n),Hh(n),!0===t&&!0!==n.Wo){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Uh(n,e.toArray());n.Wo=!0,await $u(n.remoteStore,!0);for(const r of t)bu(n.remoteStore,r)}else if(!1===t&&!1!==n.Wo){const e=[];let t=Promise.resolve();n.Fo.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(xh(n,i),Rl(n.localStore,i,!0)))),_u(n.remoteStore,i)})),await t,await Uh(n,e),function(e){const t=Xr(e);t.Uo.forEach(((e,n)=>{_u(t.remoteStore,n)})),t.qo.hs(),t.Uo=new Map,t.Bo=new xo(Ui.comparator)}(n),n.Wo=!1,await $u(n.remoteStore,!1)}}async function Uh(e,t,n){const r=Xr(e),i=[],s=[];for(const o of t){let e;const t=r.Fo.get(o);if(t&&0!==t.length){e=await Al(r.localStore,Ls(t[0]));for(const e of t){const t=r.Mo.get(e),n=await Dh(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Ol(r.localStore,o);e=await Al(r.localStore,t),await gh(r,Vh(t),o,!1)}i.push(e)}return r.Oo.br(s),i}function Vh(e){return Ss(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function jh(e){const t=Xr(e);return Xr(Xr(t.localStore).persistence).Tn()}async function Bh(e,t,n,r){const i=Xr(e);if(i.Wo)Kr("SyncEngine","Ignoring unexpected query state notification.");else if(i.Fo.has(t))switch(n){case"current":case"not-current":{const e=await Pl(i.localStore),r=Bo.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await Oh(i,e,r);break}case"rejected":await Rl(i.localStore,t,!0),xh(i,t,r);break;default:Jr()}}async function $h(e,t,n){const r=zh(e);if(r.Wo){for(const e of t){if(r.Fo.has(e)){Kr("SyncEngine","Adding an already active target "+e);continue}const t=await Ol(r.localStore,e),n=await Al(r.localStore,t);await gh(r,Vh(t),n.targetId,!1),bu(r.remoteStore,n)}for(const e of n)r.Fo.has(e)&&await Rl(r.localStore,e,!1).then((()=>{_u(r.remoteStore,e),xh(r,e)})).catch(Jc)}}function zh(e){const t=Xr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=wh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lh.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=_h.bind(null,t),t.Oo.br=th.bind(null,t.eventManager),t.Oo.zo=nh.bind(null,t.eventManager),t}function Hh(e){const t=Xr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ih.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Th.bind(null,t),t}function Kh(e,t,n){const r=Xr(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=Xr(e),r=ra(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Ye.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),void n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r));n._updateProgress(ch(r));const i=new ah(r,e.localStore,t.k);let s=await t.Ho();for(;s;){const e=await i.yo(s);e&&n._updateProgress(e),s=await t.Ho()}const o=await i.complete();await Oh(e,o.In,void 0),await function(e,t){const n=Xr(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Ye.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress)}catch(e){Gr("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((()=>{r.sharedClientState.notifyBundleLoaded()}))}class Wh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=uu(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return Il(this.persistence,new bl,e.initialUser,this.k)}Yo(e){return new zl(Kl.ks,this.k)}Jo(e){return new nu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Gh extends Wh{constructor(e,t,n){super(),this.tc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await Ll(this.localStore),await this.tc.initialize(this,e),await Hh(this.tc.syncEngine),await Pu(this.tc.remoteStore),await this.persistence.sn((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve())))}Zo(e){return Il(this.persistence,new bl,e.initialUser,this.k)}Xo(e){const t=this.persistence.referenceDelegate.garbageCollector;return new Xc(t,e.asyncQueue)}Yo(e){const t=gl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Mc.withCacheSize(this.cacheSizeBytes):Mc.DEFAULT;return new fl(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,cu(),lu(),this.k,this.sharedClientState,!!this.forceOwnership)}Jo(e){return new nu}}class Yh extends Gh{constructor(e,t){super(e,t,!1),this.tc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.tc.syncEngine;this.sharedClientState instanceof tu&&(this.sharedClientState.syncEngine={mi:Mh.bind(null,t),gi:Bh.bind(null,t),yi:$h.bind(null,t),Tn:jh.bind(null,t),_i:Fh.bind(null,t)},await this.sharedClientState.start()),await this.persistence.sn((async e=>{await qh(this.tc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())}))}Jo(e){const t=cu();if(!tu.Pt(t))throw new ti(ei.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=gl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new tu(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Jh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>bh(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ph.bind(null,this.syncEngine),await $u(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Zu}createDatastore(e){const t=uu(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new au(r));var r;return function(e,t,n,r){return new mu(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>bh(this.syncEngine,e,0),s=iu.Pt()?new iu:new ru,new vu(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new ph(e,t,n,r,i,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Xr(e);Kr("RemoteStore","RemoteStore shutting down."),t.Gr.add(5),await wu(t),t.Hr.shutdown(),t.Jr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ec(this.observer.next,e)}error(e){this.observer.error?this.ec(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}nc(){this.muted=!0}ec(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,t){this.sc=e,this.k=t,this.metadata=new ni,this.buffer=new Uint8Array,this.ic=new TextDecoder("utf-8"),this.rc().then((e=>{e&&e._o()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.sc.cancel()}async getMetadata(){return this.metadata.promise}async Ho(){return await this.getMetadata(),this.rc()}async rc(){const e=await this.oc();if(null===e)return null;const t=this.ic.decode(e),n=Number(t);isNaN(n)&&this.cc(`length string (${t}) is not valid number`);const r=await this.ac(n);return new sh(JSON.parse(r),e.length+n)}uc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async oc(){for(;this.uc()<0;)if(await this.hc())break;if(0===this.buffer.length)return null;const e=this.uc();e<0&&this.cc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ac(e){for(;this.buffer.length<e;)await this.hc()&&this.cc("Reached the end of bundle when more is expected.");const t=this.ic.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}cc(e){throw this.sc.cancel(),new Error(`Invalid bundle format: ${e}`)}async hc(){const e=await this.sc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new ti(ei.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=Xr(e),r=ua(n.k)+"/documents",i={documents:t.map((e=>oa(n.k,e)))},s=await n.ji("BatchGetDocuments",r,i),o=new Map;s.forEach((e=>{const t=pa(n.k,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());Qr(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new bo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=Ui.fromPath(t);this.mutations.push(new _o(n,this.precondition(n)))})),await async function(e,t){const n=Xr(e),r=ua(n.k)+"/documents",i={writes:t.map((e=>ga(n.k,e)))};await n.Bi("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Jr();t=yi.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new ti(ei.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?oo.updateTime(t):oo.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(yi.min()))throw new ti(ei.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return oo.updateTime(t)}return oo.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t,n,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=r,this.lc=5,this.ur=new hu(this.asyncQueue,"transaction_retry")}run(){this.lc-=1,this.fc()}fc(){this.ur.Zi((async()=>{const e=new ed(this.datastore),t=this.dc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.wc(e)}))))})).catch((e=>{this.wc(e)}))}))}dc(e){try{const t=this.updateFunction(e);return!Fi(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}wc(e){this.lc>0&&this._c(e)?(this.lc-=1,this.asyncQueue.enqueueAndForget((()=>(this.fc(),Promise.resolve())))):this.deferred.reject(e)}_c(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!ko(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=jr.UNAUTHENTICATED,this.clientId=fi.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Kr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Kr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ti(ei.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ni;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Wu(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function rd(e,t){e.asyncQueue.verifyOperationInProgress(),Kr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Tl(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function id(e,t){e.asyncQueue.verifyOperationInProgress();const n=await sd(e);Kr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Bu(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Bu(t.remoteStore,n))),e.onlineComponents=t}async function sd(e){return e.offlineComponents||(Kr("FirestoreClient","Using default OfflineComponentProvider"),await rd(e,new Wh)),e.offlineComponents}async function od(e){return e.onlineComponents||(Kr("FirestoreClient","Using default OnlineComponentProvider"),await id(e,new Jh)),e.onlineComponents}function ad(e){return sd(e).then((e=>e.persistence))}function cd(e){return sd(e).then((e=>e.localStore))}function ld(e){return od(e).then((e=>e.remoteStore))}function ud(e){return od(e).then((e=>e.syncEngine))}async function hd(e){const t=await od(e),n=t.eventManager;return n.onListen=mh.bind(null,t.syncEngine),n.onUnlisten=vh.bind(null,t.syncEngine),n}function dd(e){return e.asyncQueue.enqueue((async()=>{const t=await ad(e),n=await ld(e);return t.setNetworkEnabled(!0),function(e){const t=Xr(e);return t.Gr.delete(0),yu(t)}(n)}))}function fd(e){return e.asyncQueue.enqueue((async()=>{const t=await ad(e),n=await ld(e);return t.setNetworkEnabled(!1),async function(e){const t=Xr(e);t.Gr.add(0),await wu(t),t.Jr.set("Offline")}(n)}))}function pd(e,t){const n=new ni;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=Xr(e);return n.persistence.runTransaction("read document","readonly",(e=>n.Wn.Rn(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new ti(ei.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Wu(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await cd(e),t,n))),n.promise}function md(e,t,n={}){const r=new ni;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Zh({next:s=>{t.enqueueAndForget((()=>eh(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new ti(ei.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new ti(ei.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new ih(xs(n.path),s,{includeMetadataChanges:!0,wo:!0});return Xu(e,o)}(await hd(e),e.asyncQueue,t,n,r))),r.promise}function gd(e,t){const n=new ni;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await Nl(e,t,!0),i=new hh(t,r.zn),s=i.Po(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=Wu(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await cd(e),t,n))),n.promise}function vd(e,t,n={}){const r=new ni;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Zh({next:n=>{t.enqueueAndForget((()=>eh(e,o))),n.fromCache&&"server"===r.source?i.reject(new ti(ei.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new ih(n,s,{includeMetadataChanges:!0,wo:!0});return Xu(e,o)}(await hd(e),e.asyncQueue,t,n,r))),r.promise}function yd(e,t){const n=new Zh(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){Xr(e).io.add(t),t.next()}(await hd(e),n))),()=>{n.nc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){Xr(e).io.delete(t)}(await hd(e),n)))}}function wd(e,t){const n=new ni;return e.asyncQueue.enqueueAndForget((async()=>{const r=await function(e){return od(e).then((e=>e.datastore))}(e);new td(e.asyncQueue,r,t,n).run()})),n.promise}function bd(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new Xh(e,t)}(function(e,t){if(e instanceof Uint8Array)return Qh(e,t);if(e instanceof ArrayBuffer)return Qh(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,uu(t));e.asyncQueue.enqueueAndForget((async()=>{Kh(await ud(e),i,r)}))}function _d(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=Xr(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Ye.getNamedQuery(e,t)))}(await cd(e),t)))}class Id{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Td{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Td&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(e,t,n){if(!n)throw new ti(ei.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Sd(e,t,n,r){if(!0===t&&!0===r)throw new ti(ei.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function xd(e){if(!Ui.isDocumentKey(e))throw new ti(ei.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Cd(e){if(Ui.isDocumentKey(e))throw new ti(ei.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ad(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Jr()}function Rd(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ti(ei.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ad(e);throw new ti(ei.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Nd(e,t){if(t<=0)throw new ti(ei.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new ti(ei.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ti(ei.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Sd("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Od({}),this._settingsFrozen=!1,e instanceof Td?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ti(ei.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Td(e.options.projectId)}(e))}get app(){if(!this._app)throw new ti(ei.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ti(ei.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Od(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ii;switch(e.type){case"gapi":const t=e.client;return Qr(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new ci(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new ti(ei.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ed.get(e);t&&(Kr("ComponentProvider","Removing Datastore"),Ed.delete(e),t.terminate())}(this),Promise.resolve()}}function Ld(e,t,n,r={}){var i;const s=(e=Rd(e,Pd))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Gr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=jr.MOCK_USER;else{t=(0,c.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ti(ei.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new jr(s)}e._authCredentials=new si(new ri(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Md(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dd(this.firestore,e,this._key)}}class Fd{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Fd(this.firestore,e,this._query)}}class Md extends Fd{constructor(e,t,n){super(e,t,xs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dd(this.firestore,null,new Ui(e))}withConverter(e){return new Md(this.firestore,e,this._path)}}function qd(e,t,...n){if(e=(0,c.m9)(e),kd("collection","path",t),e instanceof Pd){const r=Ti.fromString(t,...n);return Cd(r),new Md(e,null,r)}{if(!(e instanceof Dd||e instanceof Md))throw new ti(ei.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ti.fromString(t,...n));return Cd(r),new Md(e.firestore,null,r)}}function Ud(e,t){if(e=Rd(e,Pd),kd("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new ti(ei.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Fd(e,null,function(e){return new ks(Ti.emptyPath(),e)}(t))}function Vd(e,t,...n){if(e=(0,c.m9)(e),1===arguments.length&&(t=fi.A()),kd("doc","path",t),e instanceof Pd){const r=Ti.fromString(t,...n);return xd(r),new Dd(e,null,new Ui(r))}{if(!(e instanceof Dd||e instanceof Md))throw new ti(ei.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ti.fromString(t,...n));return xd(r),new Dd(e.firestore,e instanceof Md?e.converter:null,new Ui(r))}}function jd(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),(e instanceof Dd||e instanceof Md)&&(t instanceof Dd||t instanceof Md)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Bd(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),e instanceof Fd&&t instanceof Fd&&e.firestore===t.firestore&&Fs(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class $d{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new hu(this,"async_queue_retry"),this.bc=()=>{const e=lu();e&&Kr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ur.er()};const e=lu();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.vc(e)}enterRestrictedMode(e){if(!this.yc){this.yc=!0,this.Ac=e||!1;const t=lu();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.bc)}}enqueue(e){if(this.Pc(),this.yc)return new Promise((()=>{}));const t=new ni;return this.vc((()=>this.yc&&this.Ac?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.gc.push(e),this.Vc())))}async Vc(){if(0!==this.gc.length){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(T){if(!cc(T))throw T;Kr("AsyncQueue","Operation failed with retryable error: "+T)}this.gc.length>0&&this.ur.Zi((()=>this.Vc()))}}vc(e){const t=this.mc.then((()=>(this.Ic=!0,e().catch((e=>{this.Ec=e,this.Ic=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Wr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ic=!1,e))))));return this.mc=t,t}enqueueAfterDelay(e,t,n){this.Pc(),this.Rc.indexOf(e)>-1&&(t=0);const r=Ku.createAndSchedule(this,e,t,n,(e=>this.Sc(e)));return this.Tc.push(r),r}Pc(){this.Ec&&Jr()}verifyOperationInProgress(){}async Dc(){let e;do{e=this.mc,await e}while(e!==this.mc)}Cc(e){for(const t of this.Tc)if(t.timerId===e)return!0;return!1}Nc(e){return this.Dc().then((()=>{this.Tc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Tc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Dc()}))}kc(e){this.Rc.push(e)}Sc(e){const t=this.Tc.indexOf(e);this.Tc.splice(t,1)}}function zd(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Hd{constructor(){this._progressObserver={},this._taskCompletionResolver=new ni,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=-1;class Wd extends Pd{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new $d,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Yd(this),this._firestoreClient.terminate()}}function Gd(e){return e._firestoreClient||Yd(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Yd(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Id(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new nd(e._authCredentials,e._appCheckCredentials,e._queue,r)}function Jd(e,t){of(e=Rd(e,Wd));const n=Gd(e),r=e._freezeSettings(),i=new Jh;return Zd(n,i,new Gh(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Qd(e){of(e=Rd(e,Wd));const t=Gd(e),n=e._freezeSettings(),r=new Jh;return Zd(t,r,new Yh(r,n.cacheSizeBytes))}function Zd(e,t,n){const r=new ni;return e.asyncQueue.enqueue((async()=>{try{await rd(e,n),await id(e,t),r.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===ei.FAILED_PRECONDITION||e.code===ei.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),r.reject(e)}})).then((()=>r.promise))}function Xd(e){if(e._initialized&&!e._terminated)throw new ti(ei.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new ni;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!sc.Pt())return Promise.resolve();const t=e+"main";await sc.delete(t)}(gl(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function ef(e){return function(e){const t=new ni;return e.asyncQueue.enqueueAndForget((async()=>Eh(await ud(e),t))),t.promise}(Gd(e=Rd(e,Wd)))}function tf(e){return dd(Gd(e=Rd(e,Wd)))}function nf(e){return fd(Gd(e=Rd(e,Wd)))}function rf(e,t){const n=Gd(e=Rd(e,Wd)),r=new Hd;return bd(n,e._databaseId,t,r),r}function sf(e,t){return _d(Gd(e=Rd(e,Wd)),t).then((t=>t?new Fd(e,null,t.query):null))}function of(e){if(e._initialized||e._terminated)throw new ti(ei.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ti(ei.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ki(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cf(Ci.fromBase64String(e))}catch(e){throw new ti(ei.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new cf(Ci.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ti(ei.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ti(ei.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pi(this._lat,e._lat)||pi(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=/^__.*__$/;class df{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new go(e,this.data,this.fieldMask,t,this.fieldTransforms):new mo(e,this.data,t,this.fieldTransforms)}}class ff{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new go(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function pf(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Jr()}}class mf{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.k=n,this.ignoreUndefinedProperties=r,void 0===i&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(e){return new mf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Oc({path:n,Fc:!1});return r.Lc(e),r}Bc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Oc({path:n,Fc:!1});return r.xc(),r}Uc(e){return this.Oc({path:void 0,Fc:!0})}qc(e){return Df(e,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lc(this.path.get(e))}Lc(e){if(0===e.length)throw this.qc("Document fields must not be empty");if(pf(this.$c)&&hf.test(e))throw this.qc('Document fields cannot begin and end with "__"')}}class gf{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.k=n||uu(e)}Qc(e,t,n,r=!1){return new mf({$c:e,methodName:t,jc:n,path:ki.emptyPath(),Fc:!1,Kc:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function vf(e){const t=e._freezeSettings(),n=uu(e._databaseId);return new gf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function yf(e,t,n,r,i,s={}){const o=e.Qc(s.merge||s.mergeFields?2:0,t,n,i);Nf("Data must be an object, but it was:",o,r);const a=Af(r,o);let c,l;if(s.merge)c=new Si(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Of(t,r,n);if(!o.contains(i))throw new ti(ei.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ff(e,i)||e.push(i)}c=new Si(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new df(new es(a),c,l)}class wf extends lf{_toFieldTransform(e){if(2!==e.$c)throw 1===e.$c?e.qc(`${this._methodName}() can only appear at the top level of your update data`):e.qc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wf}}function bf(e,t,n){return new mf({$c:3,jc:t.settings.jc,methodName:e._methodName,Fc:n},t.databaseId,t.k,t.ignoreUndefinedProperties)}class _f extends lf{_toFieldTransform(e){return new ro(e.path,new Ys)}isEqual(e){return e instanceof _f}}class If extends lf{constructor(e,t){super(e),this.Wc=t}_toFieldTransform(e){const t=bf(this,e,!0),n=this.Wc.map((e=>Cf(e,t))),r=new Js(n);return new ro(e.path,r)}isEqual(e){return this===e}}class Tf extends lf{constructor(e,t){super(e),this.Wc=t}_toFieldTransform(e){const t=bf(this,e,!0),n=this.Wc.map((e=>Cf(e,t))),r=new Zs(n);return new ro(e.path,r)}isEqual(e){return this===e}}class Ef extends lf{constructor(e,t){super(e),this.Gc=t}_toFieldTransform(e){const t=new eo(e.k,zs(e.k,this.Gc));return new ro(e.path,t)}isEqual(e){return this===e}}function kf(e,t,n,r){const i=e.Qc(1,t,n);Nf("Data must be an object, but it was:",i,r);const s=[],o=es.empty();bi(r,((e,r)=>{const a=Lf(t,e,n);r=(0,c.m9)(r);const l=i.Bc(a);if(r instanceof wf)s.push(a);else{const e=Cf(r,l);null!=e&&(s.push(a),o.set(a,e))}}));const a=new Si(s);return new ff(o,a,i.fieldTransforms)}function Sf(e,t,n,r,i,s){const o=e.Qc(1,t,n),a=[Of(t,r,n)],l=[i];if(s.length%2!=0)throw new ti(ei.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(Of(t,s[c])),l.push(s[c+1]);const u=[],h=es.empty();for(let f=a.length-1;f>=0;--f)if(!Ff(u,a[f])){const e=a[f];let t=l[f];t=(0,c.m9)(t);const n=o.Bc(e);if(t instanceof wf)u.push(e);else{const r=Cf(t,n);null!=r&&(u.push(e),h.set(e,r))}}const d=new Si(u);return new ff(h,d,o.fieldTransforms)}function xf(e,t,n,r=!1){return Cf(n,e.Qc(r?4:3,t))}function Cf(e,t){if(Rf(e=(0,c.m9)(e)))return Nf("Unsupported field value:",t,e),Af(e,t);if(e instanceof lf)return function(e,t){if(!pf(t.$c))throw t.qc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.qc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Fc&&4!==t.$c)throw t.qc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Cf(i,t.Uc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return zs(t.k,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=vi.fromDate(e);return{timestampValue:ea(t.k,n)}}if(e instanceof vi){const n=new vi(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ea(t.k,n)}}if(e instanceof uf)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof cf)return{bytesValue:ta(t.k,e._byteString)};if(e instanceof Dd){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.qc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ia(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.qc(`Unsupported field value: ${Ad(e)}`)}(e,t)}function Af(e,t){const n={};return _i(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):bi(e,((e,r)=>{const i=Cf(r,t.Mc(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Rf(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof vi||e instanceof uf||e instanceof cf||e instanceof Dd||e instanceof lf)}function Nf(e,t,n){if(!Rf(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Ad(n);throw"an object"===r?t.qc(e+" a custom object"):t.qc(e+" "+r)}}function Of(e,t,n){if((t=(0,c.m9)(t))instanceof af)return t._internalPath;if("string"==typeof t)return Lf(e,t);throw Df("Field path arguments must be of type string or ",e,!1,void 0,n)}const Pf=new RegExp("[~\\*/\\[\\]]");function Lf(e,t,n){if(t.search(Pf)>=0)throw Df(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new af(...t.split("."))._internalPath}catch(r){throw Df(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Df(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ti(ei.INVALID_ARGUMENT,a+e+c)}function Ff(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Dd(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new qf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Uf("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class qf extends Mf{data(){return super.data()}}function Uf(e,t){return"string"==typeof t?Lf(e,t):t instanceof af?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jf extends Mf{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Uf("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Bf extends jf{data(e={}){return super.data(e)}}class $f{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Vf(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Bf(this._firestore,this._userDataWriter,n.key,n,new Vf(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ti(ei.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new Bf(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Vf(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Bf(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Vf(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:zf(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function zf(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Jr()}}function Hf(e,t){return e instanceof jf&&t instanceof jf?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof $f&&t instanceof $f&&e._firestore===t._firestore&&Bd(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(e){if(As(e)&&0===e.explicitOrderBy.length)throw new ti(ei.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wf{}function Gf(e,...t){for(const n of t)e=n._apply(e);return e}class Yf extends Wf{constructor(e,t,n){super(),this.zc=e,this.Hc=t,this.Jc=n,this.type="where"}_apply(e){const t=vf(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ti(ei.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){up(o,s);const t=[];for(const n of o)t.push(lp(r,e,n));a={arrayValue:{values:t}}}else a=lp(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||up(o,s),a=xf(n,t,o,"in"===s||"not-in"===s);const c=ls.create(i,s,a);return function(e,t){if(t.V()){const n=Ns(e);if(null!==n&&!n.isEqual(t.field))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Rs(e);null!==r&&hp(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new ti(ei.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ti(ei.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.zc,this.Hc,this.Jc);return new Fd(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new ks(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function Jf(e,t,n){const r=t,i=Uf("where",e);return new Yf(i,r,n)}class Qf extends Wf{constructor(e,t){super(),this.zc=e,this.Yc=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new ti(ei.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new ti(ei.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new _s(t,n);return function(e,t){if(null===Rs(e)){const n=Ns(e);null!==n&&hp(e,n,t.field)}}(e,r),r}(e._query,this.zc,this.Yc);return new Fd(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new ks(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Zf(e,t="asc"){const n=t,r=Uf("orderBy",e);return new Qf(r,n)}class Xf extends Wf{constructor(e,t,n){super(),this.type=e,this.Xc=t,this.Zc=n}_apply(e){return new Fd(e.firestore,e.converter,Ds(e._query,this.Xc,this.Zc))}}function ep(e){return Nd("limit",e),new Xf("limit",e,"F")}function tp(e){return Nd("limitToLast",e),new Xf("limitToLast",e,"L")}class np extends Wf{constructor(e,t,n){super(),this.type=e,this.ta=t,this.ea=n}_apply(e){const t=cp(e,this.type,this.ta,this.ea);return new Fd(e.firestore,e.converter,function(e,t){return new ks(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function rp(...e){return new np("startAt",e,!0)}function ip(...e){return new np("startAfter",e,!1)}class sp extends Wf{constructor(e,t,n){super(),this.type=e,this.ta=t,this.ea=n}_apply(e){const t=cp(e,this.type,this.ta,this.ea);return new Fd(e.firestore,e.converter,function(e,t){return new ks(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function op(...e){return new sp("endBefore",e,!0)}function ap(...e){return new sp("endAt",e,!1)}function cp(e,t,n,r){if(n[0]=(0,c.m9)(n[0]),n[0]instanceof Mf)return function(e,t,n,r,i){if(!r)throw new ti(ei.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of Ps(e))if(o.field.isKeyField())s.push(Wi(t,r.key));else{const e=r.data.field(o.field);if(Pi(e))throw new ti(ei.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new ti(ei.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new ws(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=vf(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new ti(ei.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new ti(ei.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!Os(e)&&-1!==s.indexOf("/"))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(Ti.fromString(s));if(!Ui.isDocumentKey(n))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new Ui(n);a.push(Wi(t,i))}else{const e=xf(n,r,s);a.push(e)}}return new ws(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function lp(e,t,n){if("string"==typeof(n=(0,c.m9)(n))){if(""===n)throw new ti(ei.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Os(t)&&-1!==n.indexOf("/"))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ti.fromString(n));if(!Ui.isDocumentKey(r))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Wi(e,new Ui(r))}if(n instanceof Dd)return Wi(e,n._key);throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ad(n)}.`)}function up(e,t){if(!Array.isArray(e)||0===e.length)throw new ti(ei.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new ti(ei.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function hp(e,t,n){if(!n.isEqual(t))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{convertValue(e,t="none"){switch(Vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ni(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Jr()}}convertObject(e,t){const n={};return bi(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new uf(Ni(e.latitude),Ni(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Li(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Di(e));default:return null}}convertTimestamp(e){const t=Ri(e);return new vi(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ti.fromString(e);Qr(Pa(n));const r=new Td(n.get(1),n.get(3)),i=new Ui(n.popFirst(5));return r.isEqual(t)||Wr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class pp extends dp{constructor(e){super(),this.firestore=e}convertBytes(e){return new cf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Dd(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=vf(e)}set(e,t,n){this._verifyNotCommitted();const r=gp(e,this._firestore),i=fp(r.converter,t,n),s=yf(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,oo.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=gp(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof af?Sf(this._dataReader,"WriteBatch.update",i._key,t,n,r):kf(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,oo.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=gp(e,this._firestore);return this._mutations=this._mutations.concat(new bo(t._key,oo.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ti(ei.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function gp(e,t){if((e=(0,c.m9)(e)).firestore!==t)throw new ti(ei.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(e){e=Rd(e,Dd);const t=Rd(e.firestore,Wd);return md(Gd(t),e._key).then((n=>Np(t,e,n)))}class yp extends dp{constructor(e){super(),this.firestore=e}convertBytes(e){return new cf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Dd(this.firestore,null,t)}}function wp(e){e=Rd(e,Dd);const t=Rd(e.firestore,Wd),n=Gd(t),r=new yp(t);return pd(n,e._key).then((n=>new jf(t,r,e._key,n,new Vf(null!==n&&n.hasLocalMutations,!0),e.converter)))}function bp(e){e=Rd(e,Dd);const t=Rd(e.firestore,Wd);return md(Gd(t),e._key,{source:"server"}).then((n=>Np(t,e,n)))}function _p(e){e=Rd(e,Fd);const t=Rd(e.firestore,Wd),n=Gd(t),r=new yp(t);return Kf(e._query),vd(n,e._query).then((n=>new $f(t,r,e,n)))}function Ip(e){e=Rd(e,Fd);const t=Rd(e.firestore,Wd),n=Gd(t),r=new yp(t);return gd(n,e._query).then((n=>new $f(t,r,e,n)))}function Tp(e){e=Rd(e,Fd);const t=Rd(e.firestore,Wd),n=Gd(t),r=new yp(t);return vd(n,e._query,{source:"server"}).then((n=>new $f(t,r,e,n)))}function Ep(e,t,n){e=Rd(e,Dd);const r=Rd(e.firestore,Wd),i=fp(e.converter,t,n);return Rp(r,[yf(vf(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,oo.none())])}function kp(e,t,n,...r){e=Rd(e,Dd);const i=Rd(e.firestore,Wd),s=vf(i);let o;return o="string"==typeof(t=(0,c.m9)(t))||t instanceof af?Sf(s,"updateDoc",e._key,t,n,r):kf(s,"updateDoc",e._key,t),Rp(i,[o.toMutation(e._key,oo.exists(!0))])}function Sp(e){return Rp(Rd(e.firestore,Wd),[new bo(e._key,oo.none())])}function xp(e,t){const n=Rd(e.firestore,Wd),r=Vd(e),i=fp(e.converter,t);return Rp(n,[yf(vf(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,oo.exists(!1))]).then((()=>r))}function Cp(e,...t){var n,r,i;e=(0,c.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||zd(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(zd(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let l,u,h;if(e instanceof Dd)u=Rd(e.firestore,Wd),h=xs(e._key.path),l={next:n=>{t[o]&&t[o](Np(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Rd(e,Fd);u=Rd(n.firestore,Wd),h=n._query;const r=new yp(u);l={next:e=>{t[o]&&t[o](new $f(u,r,n,e))},error:t[o+1],complete:t[o+2]},Kf(e._query)}return function(e,t,n,r){const i=new Zh(r),s=new ih(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Xu(await hd(e),s))),()=>{i.nc(),e.asyncQueue.enqueueAndForget((async()=>eh(await hd(e),s)))}}(Gd(u),h,a,l)}function Ap(e,t){return yd(Gd(e=Rd(e,Wd)),zd(t)?t:{next:t})}function Rp(e,t){return function(e,t){const n=new ni;return e.asyncQueue.enqueueAndForget((async()=>yh(await ud(e),t,n))),n.promise}(Gd(e),t)}function Np(e,t,n){const r=n.docs.get(t._key),i=new yp(e);return new jf(e,i,t._key,r,new Vf(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=vf(e)}get(e){const t=gp(e,this._firestore),n=new pp(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Jr();const r=e[0];if(r.isFoundDocument())return new Mf(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Mf(this._firestore,n,t._key,null,t.converter);throw Jr()}))}set(e,t,n){const r=gp(e,this._firestore),i=fp(r.converter,t,n),s=yf(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=gp(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof af?Sf(this._dataReader,"Transaction.update",i._key,t,n,r):kf(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=gp(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=gp(e,this._firestore),n=new yp(this._firestore);return super.get(e).then((e=>new jf(this._firestore,n,t._key,e._document,new Vf(!1,!1),t.converter)))}}function Pp(e,t){return wd(Gd(e=Rd(e,Wd)),(n=>t(new Op(e,n))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(){return new wf("deleteField")}function Dp(){return new _f("serverTimestamp")}function Fp(...e){return new If("arrayUnion",e)}function Mp(...e){return new Tf("arrayRemove",e)}function qp(e){return new Ef("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Br=e}(s.SDK_VERSION),(0,s._registerComponent)(new o.wA("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new Wd(r,new oi(e.getProvider("auth-internal")),new ui(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC")),(0,s.registerVersion)(Vr,"3.4.4",e),(0,s.registerVersion)(Vr,"3.4.4","esm2017")}();const Up="@firebase/firestore-compat",Vp="0.1.13";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jp(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new ti("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(){if("undefined"===typeof Uint8Array)throw new ti("unimplemented","Uint8Arrays are not available in this environment.")}function $p(){if(!xi())throw new ti("unimplemented","Blobs are unavailable in Firestore in this environment.")}class zp{constructor(e){this._delegate=e}static fromBase64String(e){return $p(),new zp(cf.fromBase64String(e))}static fromUint8Array(e){return Bp(),new zp(cf.fromUint8Array(e))}toBase64(){return $p(),this._delegate.toBase64()}toUint8Array(){return Bp(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(e){return Kp(e,["next","error","complete"])}function Kp(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{enableIndexedDbPersistence(e,t){return Jd(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Qd(e._delegate)}clearIndexedDbPersistence(e){return Xd(e._delegate)}}class Gp{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Td||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Gr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Ld(this._delegate,e,t,n)}enableNetwork(){return tf(this._delegate)}disableNetwork(){return nf(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Sd("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return ef(this._delegate)}onSnapshotsInSync(e){return Ap(this._delegate,e)}get app(){if(!this._appCompat)throw new ti("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new lm(this,qd(this._delegate,e))}catch(t){throw tm(t,"collection()","Firestore.collection()")}}doc(e){try{return new em(this,Vd(this._delegate,e))}catch(t){throw tm(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new om(this,Ud(this._delegate,e))}catch(t){throw tm(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Pp(this._delegate,(t=>e(new Qp(this,t))))}batch(){return Gd(this._delegate),new Zp(new mp(this._delegate,(e=>Rp(this._delegate,e))))}loadBundle(e){return rf(this._delegate,e)}namedQuery(e){return sf(this._delegate,e).then((e=>e?new om(this,e):null))}}class Yp extends dp{constructor(e){super(),this.firestore=e}convertBytes(e){return new zp(new cf(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return em.forKey(t,this.firestore,null)}}function Jp(e){Hr(e)}class Qp{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Yp(e)}get(e){const t=um(e);return this._delegate.get(t).then((e=>new im(this._firestore,new jf(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=um(e);return n?(jp("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=um(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=um(e);return this._delegate.delete(t),this}}class Zp{constructor(e){this._delegate=e}set(e,t,n){const r=um(e);return n?(jp("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=um(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=um(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Xp{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Bf(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new sm(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Xp.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new Xp(e,new Yp(e),t),r.set(t,i)),i}}Xp.INSTANCES=new WeakMap;class em{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Yp(e)}static forPath(e,t,n){if(e.length%2!==0)throw new ti("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new em(t,new Dd(t._delegate,n,new Ui(e)))}static forKey(e,t,n){return new em(t,new Dd(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new lm(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new lm(this.firestore,qd(this._delegate,e))}catch(t){throw tm(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,c.m9)(e),e instanceof Dd&&jd(this._delegate,e)}set(e,t){t=jp("DocumentReference.set",t);try{return t?Ep(this._delegate,e,t):Ep(this._delegate,e)}catch(n){throw tm(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?kp(this._delegate,e):kp(this._delegate,e,t,...n)}catch(r){throw tm(r,"updateDoc()","DocumentReference.update()")}}delete(){return Sp(this._delegate)}onSnapshot(...e){const t=nm(e),n=rm(e,(e=>new im(this.firestore,new jf(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return Cp(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?wp(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?bp(this._delegate):vp(this._delegate),t.then((e=>new im(this.firestore,new jf(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new em(this.firestore,e?this._delegate.withConverter(Xp.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function tm(e,t,n){return e.message=e.message.replace(t,n),e}function nm(e){for(const t of e)if("object"===typeof t&&!Hp(t))return t;return{}}function rm(e,t){var n,r;let i;return i=Hp(e[0])?e[0]:Hp(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class im{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new em(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Hf(this._delegate,e._delegate)}}class sm extends im{data(e){const t=this._delegate.data(e);return Zr(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class om{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Yp(e)}where(e,t,n){try{return new om(this.firestore,Gf(this._delegate,Jf(e,t,n)))}catch(r){throw tm(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new om(this.firestore,Gf(this._delegate,Zf(e,t)))}catch(n){throw tm(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new om(this.firestore,Gf(this._delegate,ep(e)))}catch(t){throw tm(t,"limit()","Query.limit()")}}limitToLast(e){try{return new om(this.firestore,Gf(this._delegate,tp(e)))}catch(t){throw tm(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new om(this.firestore,Gf(this._delegate,rp(...e)))}catch(t){throw tm(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new om(this.firestore,Gf(this._delegate,ip(...e)))}catch(t){throw tm(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new om(this.firestore,Gf(this._delegate,op(...e)))}catch(t){throw tm(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new om(this.firestore,Gf(this._delegate,ap(...e)))}catch(t){throw tm(t,"endAt()","Query.endAt()")}}isEqual(e){return Bd(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Ip(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Tp(this._delegate):_p(this._delegate),t.then((e=>new cm(this.firestore,new $f(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=nm(e),n=rm(e,(e=>new cm(this.firestore,new $f(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return Cp(this._delegate,t,n)}withConverter(e){return new om(this.firestore,e?this._delegate.withConverter(Xp.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class am{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new sm(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class cm{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new om(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new sm(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new am(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new sm(this._firestore,n))}))}isEqual(e){return Hf(this._delegate,e._delegate)}}class lm extends om{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new em(this.firestore,e):null}doc(e){try{return new em(this.firestore,void 0===e?Vd(this._delegate):Vd(this._delegate,e))}catch(t){throw tm(t,"doc()","CollectionReference.doc()")}}add(e){return xp(this._delegate,e).then((e=>new em(this.firestore,e)))}isEqual(e){return jd(this._delegate,e._delegate)}withConverter(e){return new lm(this.firestore,e?this._delegate.withConverter(Xp.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function um(e){return Rd(e,Dd)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(...e){this._delegate=new af(...e)}static documentId(){return new hm(ki.keyField().canonicalString())}isEqual(e){return e=(0,c.m9)(e),e instanceof af&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){this._delegate=e}static serverTimestamp(){const e=Dp();return e._methodName="FieldValue.serverTimestamp",new dm(e)}static delete(){const e=Lp();return e._methodName="FieldValue.delete",new dm(e)}static arrayUnion(...e){const t=Fp(...e);return t._methodName="FieldValue.arrayUnion",new dm(t)}static arrayRemove(...e){const t=Mp(...e);return t._methodName="FieldValue.arrayRemove",new dm(t)}static increment(e){const t=qp(e);return t._methodName="FieldValue.increment",new dm(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm={Firestore:Gp,GeoPoint:uf,Timestamp:vi,Blob:zp,Transaction:Qp,WriteBatch:Zp,DocumentReference:em,DocumentSnapshot:im,Query:om,QueryDocumentSnapshot:sm,QuerySnapshot:cm,CollectionReference:lm,FieldPath:hm,FieldValue:dm,setLogLevel:Jp,CACHE_SIZE_UNLIMITED:Kd};function pm(e,t){e.INTERNAL.registerComponent(new o.wA("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},fm)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(e){pm(e,((e,t)=>new Gp(e,t,new Wp))),e.registerVersion(Up,Vp)}mm(i.Z)},4260:(e,t)=>{"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},9582:(e,t,n)=>{"use strict";n.d(t,{p7:()=>tt,r5:()=>K});var r=n(3673),i=n(1959);
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const s="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>s?Symbol(e):"_vr_"+e,a=o("rvlm"),c=o("rvd"),l=o("r"),u=o("rl"),h=o("rvl"),d="undefined"!==typeof window;function f(e){return e.__esModule||s&&"Module"===e[Symbol.toStringTag]}const p=Object.assign;function m(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const g=()=>{};const v=/\/$/,y=e=>e.replace(v,"");function w(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),i=e(s)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=x(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function I(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&T(t.matched[r],n.matched[i])&&E(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function T(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function E(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!k(e[n],t[n]))return!1;return!0}function k(e,t){return Array.isArray(e)?S(e,t):Array.isArray(t)?S(t,e):e===t}function S(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function x(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var C,A;(function(e){e["pop"]="pop",e["push"]="push"})(C||(C={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(A||(A={}));function R(e){if(!e)if(d){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),y(e)}const N=/^[^#]+#/;function O(e,t){return e.replace(N,"#")+t}function P(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const L=()=>({left:window.pageXOffset,top:window.pageYOffset});function D(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=P(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function F(e,t){const n=history.state?history.state.position-t:-1;return n+e}const M=new Map;function q(e,t){M.set(e,t)}function U(e){const t=M.get(e);return M.delete(e),t}let V=()=>location.protocol+"//"+location.host;function j(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),_(n,"")}const o=_(n,e);return o+r+i}function B(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=j(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:C.pop,direction:u?u>0?A.forward:A.back:A.unknown})}))};function c(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:L()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function $(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?L():null}}function z(e){const{history:t,location:n}=window,r={value:j(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:V()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(e,n){const o=p({},t.state,$(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function a(e,n){const o=p({},i.value,t.state,{forward:e,scroll:L()});s(o.current,o,!0);const a=p({},$(r.value,e,null),{position:o.position+1},n);s(e,a,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function H(e){e=R(e);const t=z(e),n=B(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=p({location:"",base:e,go:r,createHref:O.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function K(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),H(e)}function W(e){return"string"===typeof e||e&&"object"===typeof e}function G(e){return"string"===typeof e||"symbol"===typeof e}const Y={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},J=o("nf");var Q;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Q||(Q={}));function Z(e,t){return p(new Error,{type:e,[J]:!0},t)}function X(e,t){return e instanceof Error&&J in e&&(null==t||!!(e.type&t))}const ee="[^/]+?",te={sensitive:!1,strict:!1,start:!0,end:!0},ne=/[.+*?^${}()[\]/\\]/g;function re(e,t){const n=p({},te,t),r=[];let i=n.start?"^":"";const s=[];for(const u of e){const e=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let t=0;t<u.length;t++){const r=u[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ne,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;s.push({name:e,repeatable:n,optional:a});const h=c||ee;if(h!==ee){o+=10;try{new RegExp(`(${h})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+l.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&u.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function ie(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function se(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ie(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const oe={type:0,value:""},ae=/[a-zA-Z0-9_]/;function ce(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ae.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function le(e,t,n){const r=re(ce(e.path),n);const i=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ue(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,a=de(e);a.aliasOf=r&&r.record;const l=ge(t,e),u=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(p({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=le(t,n,l),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!pe(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{o(d)}:g}function o(e){if(G(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function c(e){let t=0;while(t<n.length&&se(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!pe(e)&&r.set(e.record.name,e)}function l(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw Z(1,{location:e});o=i.record.name,a=p(he(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw Z(1,{location:e,currentLocation:t});o=i.record.name,a=p({},t.params,e.params),s=i.stringify(a)}const c=[];let l=i;while(l)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:c,meta:me(c)}}return t=ge({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function he(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function de(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:fe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function fe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function pe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function me(e){return e.reduce(((e,t)=>p(e,t.meta)),{})}function ge(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ve=/#/g,ye=/&/g,we=/\//g,be=/=/g,_e=/\?/g,Ie=/\+/g,Te=/%5B/g,Ee=/%5D/g,ke=/%5E/g,Se=/%60/g,xe=/%7B/g,Ce=/%7C/g,Ae=/%7D/g,Re=/%20/g;function Ne(e){return encodeURI(""+e).replace(Ce,"|").replace(Te,"[").replace(Ee,"]")}function Oe(e){return Ne(e).replace(xe,"{").replace(Ae,"}").replace(ke,"^")}function Pe(e){return Ne(e).replace(Ie,"%2B").replace(Re,"+").replace(ve,"%23").replace(ye,"%26").replace(Se,"`").replace(xe,"{").replace(Ae,"}").replace(ke,"^")}function Le(e){return Pe(e).replace(be,"%3D")}function De(e){return Ne(e).replace(ve,"%23").replace(_e,"%3F")}function Fe(e){return null==e?"":De(e).replace(we,"%2F")}function Me(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function qe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(Ie," "),n=e.indexOf("="),s=Me(n<0?e:e.slice(0,n)),o=n<0?null:Me(e.slice(n+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Ue(e){let t="";for(let n in e){const r=e[n];if(n=Le(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map((e=>e&&Pe(e))):[r&&Pe(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Ve(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function je(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(Z(4,{from:n,to:t})):e instanceof Error?a(e):W(e)?a(Z(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function $e(e,t,n,r){const i=[];for(const s of e)for(const e in s.components){let o=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(ze(o)){const a=o.__vccOpts||o,c=a[t];c&&i.push(Be(c,n,r,s,e))}else{let a=o();0,i.push((()=>a.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const o=f(i)?i.default:i;s.components[e]=o;const a=o.__vccOpts||o,c=a[t];return c&&Be(c,n,r,s,e)()}))))}}return i}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=(0,r.f3)(l),n=(0,r.f3)(u),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(T.bind(null,r));if(o>-1)return o;const a=Je(e[t-2]);return t>1&&Je(r)===a&&i[i.length-1].path!==a?i.findIndex(T.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Ye(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&E(n.params,s.value.params)));function h(n={}){return Ge(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(g):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:h}}const Ke=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=(0,i.qj)(He(e)),{options:s}=(0,r.f3)(l),o=(0,r.Fl)((()=>({[Qe(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Qe(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),We=Ke;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ye(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qe=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(h),o=(0,r.Fl)((()=>e.route||s.value)),l=(0,r.f3)(c,0),u=(0,r.Fl)((()=>o.value.matched[l]));(0,r.JJ)(c,l+1),(0,r.JJ)(a,u),(0,r.JJ)(h,o);const d=(0,i.iH)();return(0,r.YP)((()=>[d.value,u.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&T(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return Xe(n.default,{Component:a,route:i});const l=s.props[e.name],h=l?!0===l?i.params:"function"===typeof l?l(i):l:null,f=e=>{e.component.isUnmounted&&(s.instances[c]=null)},m=(0,r.h)(a,p({},h,t,{onVnodeUnmounted:f,ref:d}));return Xe(n.default,{Component:m,route:i})||m}}});function Xe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Ze;function tt(e){const t=ue(e.routes,e),n=e.parseQuery||qe,s=e.stringifyQuery||Ue,o=e.history;const a=je(),c=je(),f=je(),v=(0,i.XI)(Y);let y=Y;d&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=m.bind(null,(e=>""+e)),T=m.bind(null,Fe),E=m.bind(null,Me);function k(e,n){let r,i;return G(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function S(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function x(){return t.getRoutes().map((e=>e.record))}function A(e){return!!t.getRecordMatcher(e)}function R(e,r){if(r=p({},r||v.value),"string"===typeof e){const i=w(n,e,r.path),s=t.resolve({path:i.path},r),a=o.createHref(i.fullPath);return p(i,s,{params:E(s.params),hash:Me(i.hash),redirectedFrom:void 0,href:a})}let i;if("path"in e)i=p({},e,{path:w(n,e.path,r.path).path});else{const t=p({},e.params);for(const e in t)null==t[e]&&delete t[e];i=p({},e,{params:T(e.params)}),r.params=T(r.params)}const a=t.resolve(i,r),c=e.hash||"";a.params=_(E(a.params));const l=b(s,p({},e,{hash:Oe(c),path:a.path})),u=o.createHref(l);return p({fullPath:l,hash:c,query:s===Ue?Ve(e.query):e.query||{}},a,{redirectedFrom:void 0,href:u})}function N(e){return"string"===typeof e?w(n,e,v.value.path):p({},e)}function O(e,t){if(y!==e)return Z(8,{from:t,to:e})}function P(e){return j(e)}function M(e){return P(p(N(e),{replace:!0}))}function V(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=N(r):{path:r},r.params={}),p({query:e.query,hash:e.hash,params:e.params},r)}}function j(e,t){const n=y=R(e),r=v.value,i=e.state,o=e.force,a=!0===e.replace,c=V(n);if(c)return j(p(N(c),{state:i,force:o,replace:a}),t||n);const l=n;let u;return l.redirectedFrom=t,!o&&I(s,r,n)&&(u=Z(16,{to:l,from:r}),ie(r,r,!0,!1)),(u?Promise.resolve(u):$(l,r)).catch((e=>X(e)?e:te(e,l,r))).then((e=>{if(e){if(X(e,2))return j(p(N(e.to),{state:i,force:o,replace:a}),t||l)}else e=H(l,r,!0,a,i);return z(l,r,e),e}))}function B(e,t){const n=O(e,t);return n?Promise.reject(n):Promise.resolve()}function $(e,t){let n;const[r,i,s]=rt(e,t);n=$e(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Be(r,e,t))}));const o=B.bind(null,e,t);return n.push(o),nt(n).then((()=>{n=[];for(const r of a.list())n.push(Be(r,e,t));return n.push(o),nt(n)})).then((()=>{n=$e(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Be(r,e,t))}));return n.push(o),nt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Be(i,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(o),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=$e(s,"beforeRouteEnter",e,t),n.push(o),nt(n)))).then((()=>{n=[];for(const r of c.list())n.push(Be(r,e,t));return n.push(o),nt(n)})).catch((e=>X(e,8)?e:Promise.reject(e)))}function z(e,t,n){for(const r of f.list())r(e,t,n)}function H(e,t,n,r,i){const s=O(e,t);if(s)return s;const a=t===Y,c=d?history.state:{};n&&(r||a?o.replace(e.fullPath,p({scroll:a&&c&&c.scroll},i)):o.push(e.fullPath,i)),v.value=e,ie(e,t,n,a),re()}let K;function W(){K=o.listen(((e,t,n)=>{const r=R(e),i=V(r);if(i)return void j(p(i,{replace:!0}),r).catch(g);y=r;const s=v.value;d&&q(F(s.fullPath,n.delta),L()),$(r,s).catch((e=>X(e,12)?e:X(e,2)?(j(e.to,r).then((e=>{X(e,20)&&!n.delta&&n.type===C.pop&&o.go(-1,!1)})).catch(g),Promise.reject()):(n.delta&&o.go(-n.delta,!1),te(e,r,s)))).then((e=>{e=e||H(r,s,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===C.pop&&X(e,20)&&o.go(-1,!1)),z(r,s,e)})).catch(g)}))}let J,Q=je(),ee=je();function te(e,t,n){re(e);const r=ee.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ne(){return J&&v.value!==Y?Promise.resolve():new Promise(((e,t)=>{Q.add([e,t])}))}function re(e){J||(J=!0,W(),Q.list().forEach((([t,n])=>e?n(e):t())),Q.reset())}function ie(t,n,i,s){const{scrollBehavior:o}=e;if(!d||!o)return Promise.resolve();const a=!i&&U(F(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>o(t,n,a))).then((e=>e&&D(e))).catch((e=>te(e,t,n)))}const se=e=>o.go(e);let oe;const ae=new Set,ce={currentRoute:v,addRoute:k,removeRoute:S,hasRoute:A,getRoutes:x,resolve:R,options:e,push:P,replace:M,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:a.add,beforeResolve:c.add,afterEach:f.add,onError:ee.add,isReady:ne,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),d&&!oe&&v.value===Y&&(oe=!0,P(o.location).catch((e=>{0})));const n={};for(const i in Y)n[i]=(0,r.Fl)((()=>v.value[i]));e.provide(l,t),e.provide(u,(0,i.qj)(n)),e.provide(h,v);const s=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(y=Y,K&&K(),v.value=Y,oe=!1,J=!1),s()}}};return ce}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>T(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>T(e,a)))||i.push(a))}return[n,r,i]}},9457:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(5479),i=n(4676),s=n(9036),o=n(1492);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},l=new r.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:u,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw l.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s.initializeApp(i,o);if((0,r.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function u(t){const i=t.name,a=i.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw l.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=u(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.16";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){(0,s.registerVersion)(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},9036:(e,t,n)=>{"use strict";n.r(t),n.d(t,{FirebaseError:()=>s.ZR,SDK_VERSION:()=>Y,_DEFAULT_ENTRY_NAME:()=>F,_addComponent:()=>V,_addOrOverwriteComponent:()=>j,_apps:()=>q,_clearComponents:()=>H,_components:()=>U,_getProvider:()=>$,_registerComponent:()=>B,_removeServiceInstance:()=>z,deleteApp:()=>X,getApp:()=>Q,getApps:()=>Z,initializeApp:()=>J,onLog:()=>te,registerVersion:()=>ee,setLogLevel:()=>ne});var r=n(4676),i=n(1492),s=n(5479);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",l="0.7.15",u=new i.Yd("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",w="@firebase/database-compat",b="@firebase/functions",_="@firebase/functions-compat",I="@firebase/installations",T="@firebase/installations-compat",E="@firebase/messaging",k="@firebase/messaging-compat",S="@firebase/performance",x="@firebase/performance-compat",C="@firebase/remote-config",A="@firebase/remote-config-compat",R="@firebase/storage",N="@firebase/storage-compat",O="@firebase/firestore",P="@firebase/firestore-compat",L="firebase",D="9.6.5",F="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[w]:"fire-rtdb-compat",[b]:"fire-fn",[_]:"fire-fn-compat",[I]:"fire-iid",[T]:"fire-iid-compat",[E]:"fire-fcm",[k]:"fire-fcm-compat",[S]:"fire-perf",[x]:"fire-perf-compat",[C]:"fire-rc",[A]:"fire-rc-compat",[R]:"fire-gcs",[N]:"fire-gcs-compat",[O]:"fire-fst",[P]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},q=new Map,U=new Map;function V(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function j(e,t){e.container.addOrOverwriteComponent(t)}function B(e){const t=e.name;if(U.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;U.set(t,e);for(const n of q.values())V(n,e);return!0}function $(e,t){return e.container.getProvider(t)}function z(e,t,n=F){$(e,t).clearInstance(n)}function H(){U.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},W=new s.LL("app","Firebase",K);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw W.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y=D;function J(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:F,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw W.create("bad-app-name",{appName:String(i)});const o=q.get(i);if(o){if((0,s.vZ)(e,o.options)&&(0,s.vZ)(n,o.config))return o;throw W.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of U.values())a.addComponent(r);const c=new G(e,n,a);return q.set(i,c),c}function Q(e=F){const t=q.get(e);if(!t)throw W.create("no-app",{appName:e});return t}function Z(){return Array.from(q.values())}async function X(e){const t=e.name;q.has(t)&&(q.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function ee(e,t,n){var i;let s=null!==(i=M[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}B(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw W.create("invalid-log-argument");(0,i.Am)(e,t)}function ne(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){B(new r.wA("platform-logger",(e=>new o(e)),"PRIVATE")),ee(c,l,e),ee(c,l,"esm2017"),ee("fire-js","")}re("")},4676:(e,t,n)=>{"use strict";n.d(t,{wA:()=>i,H0:()=>l});var r=n(5479);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1492:(e,t,n)=>{"use strict";n.d(t,{in:()=>i,Yd:()=>l,Ub:()=>u,Am:()=>h});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function u(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},8593:e=>{"use strict";e.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')}}]);