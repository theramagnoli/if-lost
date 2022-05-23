var Vy=Object.defineProperty,$y=Object.defineProperties;var jy=Object.getOwnPropertyDescriptors;var Ll=Object.getOwnPropertySymbols;var Hy=Object.prototype.hasOwnProperty,qy=Object.prototype.propertyIsEnumerable;var Ul=(t,e,n)=>e in t?Vy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Fl=(t,e)=>{for(var n in e||(e={}))Hy.call(e,n)&&Ul(t,n,e[n]);if(Ll)for(var n of Ll(e))qy.call(e,n)&&Ul(t,n,e[n]);return t},Bl=(t,e)=>$y(t,jy(e));const Ky=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Ky();function Xc(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const zy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wy=Xc(zy);function rd(t){return!!t||t===""}function Yc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?Yy(r):Yc(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(qe(t))return t;if(xe(t))return t}}const Gy=/;(?![^(]*\))/g,Xy=/:(.+)/;function Yy(t){const e={};return t.split(Gy).forEach(n=>{if(n){const r=n.split(Xy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Qc(t){let e="";if(qe(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const r=Qc(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const g1=t=>qe(t)?t:t==null?"":G(t)||xe(t)&&(t.toString===ad||!Q(t.toString))?JSON.stringify(t,sd,2):String(t),sd=(t,e)=>e&&e.__v_isRef?sd(t,e.value):_r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:id(e)?{[`Set(${e.size})`]:[...e.values()]}:xe(e)&&!G(e)&&!cd(e)?String(e):e,pe={},vr=[],It=()=>{},Qy=()=>!1,Jy=/^on[^a-z]/,bo=t=>Jy.test(t),Jc=t=>t.startsWith("onUpdate:"),Je=Object.assign,Zc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Zy=Object.prototype.hasOwnProperty,ne=(t,e)=>Zy.call(t,e),G=Array.isArray,_r=t=>To(t)==="[object Map]",id=t=>To(t)==="[object Set]",Q=t=>typeof t=="function",qe=t=>typeof t=="string",eu=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",od=t=>xe(t)&&Q(t.then)&&Q(t.catch),ad=Object.prototype.toString,To=t=>ad.call(t),ev=t=>To(t).slice(8,-1),cd=t=>To(t)==="[object Object]",tu=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Oi=Xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Io=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},tv=/-(\w)/g,Ft=Io(t=>t.replace(tv,(e,n)=>n?n.toUpperCase():"")),nv=/\B([A-Z])/g,Br=Io(t=>t.replace(nv,"-$1").toLowerCase()),So=Io(t=>t.charAt(0).toUpperCase()+t.slice(1)),va=Io(t=>t?`on${So(t)}`:""),Cs=(t,e)=>!Object.is(t,e),Pi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ki=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ga=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vl;const rv=()=>Vl||(Vl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ot;class sv{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ot&&(this.parent=Ot,this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){Ot=this}off(){Ot=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function iv(t,e=Ot){e&&e.active&&e.effects.push(t)}const nu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ud=t=>(t.w&mn)>0,ld=t=>(t.n&mn)>0,ov=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=mn},av=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ud(s)&&!ld(s)?s.delete(t):e[n++]=s,s.w&=~mn,s.n&=~mn}e.length=n}},Xa=new WeakMap;let os=0,mn=1;const Ya=30;let Tt;const Dn=Symbol(""),Qa=Symbol("");class ru{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,iv(this,r)}run(){if(!this.active)return this.fn();let e=Tt,n=hn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Tt,Tt=this,hn=!0,mn=1<<++os,os<=Ya?ov(this):$l(this),this.fn()}finally{os<=Ya&&av(this),mn=1<<--os,Tt=this.parent,hn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Tt===this?this.deferStop=!0:this.active&&($l(this),this.onStop&&this.onStop(),this.active=!1)}}function $l(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let hn=!0;const hd=[];function Vr(){hd.push(hn),hn=!1}function $r(){const t=hd.pop();hn=t===void 0?!0:t}function gt(t,e,n){if(hn&&Tt){let r=Xa.get(t);r||Xa.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=nu()),fd(s)}}function fd(t,e){let n=!1;os<=Ya?ld(t)||(t.n|=mn,n=!ud(t)):n=!t.has(Tt),n&&(t.add(Tt),Tt.deps.push(t))}function Wt(t,e,n,r,s,i){const o=Xa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t))o.forEach((c,u)=>{(u==="length"||u>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?tu(n)&&a.push(o.get("length")):(a.push(o.get(Dn)),_r(t)&&a.push(o.get(Qa)));break;case"delete":G(t)||(a.push(o.get(Dn)),_r(t)&&a.push(o.get(Qa)));break;case"set":_r(t)&&a.push(o.get(Dn));break}if(a.length===1)a[0]&&Ja(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Ja(nu(c))}}function Ja(t,e){for(const n of G(t)?t:[...t])(n!==Tt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const cv=Xc("__proto__,__v_isRef,__isVue"),dd=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(eu)),uv=su(),lv=su(!1,!0),hv=su(!0),jl=fv();function fv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ae(this);for(let i=0,o=this.length;i<o;i++)gt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ae)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Vr();const r=ae(this)[e].apply(this,n);return $r(),r}}),t}function su(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?kv:vd:e?yd:md).get(r))return r;const o=G(r);if(!t&&o&&ne(jl,s))return Reflect.get(jl,s,i);const a=Reflect.get(r,s,i);return(eu(s)?dd.has(s):cv(s))||(t||gt(r,"get",s),e)?a:Ve(a)?!o||!tu(s)?a.value:a:xe(a)?t?_d(a):jr(a):a}}const dv=pd(),pv=pd(!0);function pd(t=!1){return function(n,r,s,i){let o=n[r];if(As(o)&&Ve(o)&&!Ve(s))return!1;if(!t&&!As(s)&&(wd(s)||(s=ae(s),o=ae(o)),!G(n)&&Ve(o)&&!Ve(s)))return o.value=s,!0;const a=G(n)&&tu(r)?Number(r)<n.length:ne(n,r),c=Reflect.set(n,r,s,i);return n===ae(i)&&(a?Cs(s,o)&&Wt(n,"set",r,s):Wt(n,"add",r,s)),c}}function gv(t,e){const n=ne(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Wt(t,"delete",e,void 0),r}function mv(t,e){const n=Reflect.has(t,e);return(!eu(e)||!dd.has(e))&&gt(t,"has",e),n}function yv(t){return gt(t,"iterate",G(t)?"length":Dn),Reflect.ownKeys(t)}const gd={get:uv,set:dv,deleteProperty:gv,has:mv,ownKeys:yv},vv={get:hv,set(t,e){return!0},deleteProperty(t,e){return!0}},_v=Je({},gd,{get:lv,set:pv}),iu=t=>t,Co=t=>Reflect.getPrototypeOf(t);function vi(t,e,n=!1,r=!1){t=t.__v_raw;const s=ae(t),i=ae(e);e!==i&&!n&&gt(s,"get",e),!n&&gt(s,"get",i);const{has:o}=Co(s),a=r?iu:n?cu:ks;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function _i(t,e=!1){const n=this.__v_raw,r=ae(n),s=ae(t);return t!==s&&!e&&gt(r,"has",t),!e&&gt(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function wi(t,e=!1){return t=t.__v_raw,!e&&gt(ae(t),"iterate",Dn),Reflect.get(t,"size",t)}function Hl(t){t=ae(t);const e=ae(this);return Co(e).has.call(e,t)||(e.add(t),Wt(e,"add",t,t)),this}function ql(t,e){e=ae(e);const n=ae(this),{has:r,get:s}=Co(n);let i=r.call(n,t);i||(t=ae(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Cs(e,o)&&Wt(n,"set",t,e):Wt(n,"add",t,e),this}function Kl(t){const e=ae(this),{has:n,get:r}=Co(e);let s=n.call(e,t);s||(t=ae(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Wt(e,"delete",t,void 0),i}function zl(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&Wt(t,"clear",void 0,void 0),n}function Ei(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ae(o),c=e?iu:t?cu:ks;return!t&&gt(a,"iterate",Dn),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function bi(t,e,n){return function(...r){const s=this.__v_raw,i=ae(s),o=_r(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?iu:e?cu:ks;return!e&&gt(i,"iterate",c?Qa:Dn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function Jt(t){return function(...e){return t==="delete"?!1:this}}function wv(){const t={get(i){return vi(this,i)},get size(){return wi(this)},has:_i,add:Hl,set:ql,delete:Kl,clear:zl,forEach:Ei(!1,!1)},e={get(i){return vi(this,i,!1,!0)},get size(){return wi(this)},has:_i,add:Hl,set:ql,delete:Kl,clear:zl,forEach:Ei(!1,!0)},n={get(i){return vi(this,i,!0)},get size(){return wi(this,!0)},has(i){return _i.call(this,i,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:Ei(!0,!1)},r={get(i){return vi(this,i,!0,!0)},get size(){return wi(this,!0)},has(i){return _i.call(this,i,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:Ei(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=bi(i,!1,!1),n[i]=bi(i,!0,!1),e[i]=bi(i,!1,!0),r[i]=bi(i,!0,!0)}),[t,n,e,r]}const[Ev,bv,Tv,Iv]=wv();function ou(t,e){const n=e?t?Iv:Tv:t?bv:Ev;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ne(n,s)&&s in r?n:r,s,i)}const Sv={get:ou(!1,!1)},Cv={get:ou(!1,!0)},Av={get:ou(!0,!1)},md=new WeakMap,yd=new WeakMap,vd=new WeakMap,kv=new WeakMap;function Rv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nv(t){return t.__v_skip||!Object.isExtensible(t)?0:Rv(ev(t))}function jr(t){return As(t)?t:au(t,!1,gd,Sv,md)}function Ov(t){return au(t,!1,_v,Cv,yd)}function _d(t){return au(t,!0,vv,Av,vd)}function au(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Nv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function wr(t){return As(t)?wr(t.__v_raw):!!(t&&t.__v_isReactive)}function As(t){return!!(t&&t.__v_isReadonly)}function wd(t){return!!(t&&t.__v_isShallow)}function Ed(t){return wr(t)||As(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function bd(t){return Ki(t,"__v_skip",!0),t}const ks=t=>xe(t)?jr(t):t,cu=t=>xe(t)?_d(t):t;function Td(t){hn&&Tt&&(t=ae(t),fd(t.dep||(t.dep=nu())))}function Id(t,e){t=ae(t),t.dep&&Ja(t.dep)}function Ve(t){return!!(t&&t.__v_isRef===!0)}function Pv(t){return Sd(t,!1)}function Dv(t){return Sd(t,!0)}function Sd(t,e){return Ve(t)?t:new xv(t,e)}class xv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:ks(e)}get value(){return Td(this),this._value}set value(e){e=this.__v_isShallow?e:ae(e),Cs(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ks(e),Id(this))}}function fs(t){return Ve(t)?t.value:t}const Mv={get:(t,e,n)=>fs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ve(s)&&!Ve(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Cd(t){return wr(t)?t:new Proxy(t,Mv)}class Lv{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ru(e,()=>{this._dirty||(this._dirty=!0,Id(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ae(this);return Td(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Uv(t,e,n=!1){let r,s;const i=Q(t);return i?(r=t,s=It):(r=t.get,s=t.set),new Lv(r,s,i||!s,n)}function fn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ao(i,e,n)}return s}function Et(t,e,n,r){if(Q(t)){const i=fn(t,e,n,r);return i&&od(i)&&i.catch(o=>{Ao(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Et(t[i],e,n,r));return s}function Ao(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){fn(c,null,10,[t,o,a]);return}}Fv(t,n,s,r)}function Fv(t,e,n,r=!0){console.error(t)}let zi=!1,Za=!1;const ft=[];let $t=0;const ds=[];let as=null,hr=0;const ps=[];let nn=null,fr=0;const Ad=Promise.resolve();let uu=null,ec=null;function kd(t){const e=uu||Ad;return t?e.then(this?t.bind(this):t):e}function Bv(t){let e=$t+1,n=ft.length;for(;e<n;){const r=e+n>>>1;Rs(ft[r])<t?e=r+1:n=r}return e}function Rd(t){(!ft.length||!ft.includes(t,zi&&t.allowRecurse?$t+1:$t))&&t!==ec&&(t.id==null?ft.push(t):ft.splice(Bv(t.id),0,t),Nd())}function Nd(){!zi&&!Za&&(Za=!0,uu=Ad.then(Dd))}function Vv(t){const e=ft.indexOf(t);e>$t&&ft.splice(e,1)}function Od(t,e,n,r){G(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Nd()}function $v(t){Od(t,as,ds,hr)}function jv(t){Od(t,nn,ps,fr)}function lu(t,e=null){if(ds.length){for(ec=e,as=[...new Set(ds)],ds.length=0,hr=0;hr<as.length;hr++)as[hr]();as=null,hr=0,ec=null,lu(t,e)}}function Pd(t){if(ps.length){const e=[...new Set(ps)];if(ps.length=0,nn){nn.push(...e);return}for(nn=e,nn.sort((n,r)=>Rs(n)-Rs(r)),fr=0;fr<nn.length;fr++)nn[fr]();nn=null,fr=0}}const Rs=t=>t.id==null?1/0:t.id;function Dd(t){Za=!1,zi=!0,lu(t),ft.sort((n,r)=>Rs(n)-Rs(r));const e=It;try{for($t=0;$t<ft.length;$t++){const n=ft[$t];n&&n.active!==!1&&fn(n,null,14)}}finally{$t=0,ft.length=0,Pd(),zi=!1,uu=null,(ft.length||ds.length||ps.length)&&Dd(t)}}function Hv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||pe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[l]||pe;f?s=n.map(g=>g.trim()):h&&(s=n.map(Ga))}let a,c=r[a=va(e)]||r[a=va(Ft(e))];!c&&i&&(c=r[a=va(Br(e))]),c&&Et(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Et(u,t,6,s)}}function xd(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Q(t)){const c=u=>{const l=xd(u,e,!0);l&&(a=!0,Je(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):Je(o,i),r.set(t,o),o)}function ko(t,e){return!t||!bo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Br(e))||ne(t,e))}let wt=null,Ro=null;function Wi(t){const e=wt;return wt=t,Ro=t&&t.type.__scopeId||null,e}function m1(t){Ro=t}function y1(){Ro=null}function Di(t,e=wt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ih(-1);const i=Wi(e),o=t(...s);return Wi(i),r._d&&ih(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function _a(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:g,ctx:m,inheritAttrs:b}=t;let _,k;const D=Wi(t);try{if(n.shapeFlag&4){const L=s||r;_=Pt(l.call(L,L,h,i,g,f,m)),k=c}else{const L=e;_=Pt(L.length>1?L(i,{attrs:c,slots:a,emit:u}):L(i,null)),k=e.props?c:qv(c)}}catch(L){gs.length=0,Ao(L,t,1),_=De(St)}let B=_;if(k&&b!==!1){const L=Object.keys(k),{shapeFlag:se}=B;L.length&&se&7&&(o&&L.some(Jc)&&(k=Kv(k,o)),B=Vn(B,k))}return n.dirs&&(B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),_=B,Wi(D),_}const qv=t=>{let e;for(const n in t)(n==="class"||n==="style"||bo(n))&&((e||(e={}))[n]=t[n]);return e},Kv=(t,e)=>{const n={};for(const r in t)(!Jc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function zv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Wl(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==r[f]&&!ko(u,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Wl(r,o,u):!0:!!o;return!1}function Wl(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ko(n,i))return!0}return!1}function Wv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Gv=t=>t.__isSuspense;function Xv(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):jv(t)}function xi(t,e){if(Pe){let n=Pe.provides;const r=Pe.parent&&Pe.parent.provides;r===n&&(n=Pe.provides=Object.create(r)),n[t]=e}}function dn(t,e,n=!1){const r=Pe||wt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Q(e)?e.call(r.proxy):e}}const Gl={};function Er(t,e,n){return Md(t,e,n)}function Md(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=pe){const a=Pe;let c,u=!1,l=!1;if(Ve(t)?(c=()=>t.value,u=wd(t)):wr(t)?(c=()=>t,r=!0):G(t)?(l=!0,u=t.some(wr),c=()=>t.map(k=>{if(Ve(k))return k.value;if(wr(k))return Nn(k);if(Q(k))return fn(k,a,2)})):Q(t)?e?c=()=>fn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Et(t,a,3,[f])}:c=It,e&&r){const k=c;c=()=>Nn(k())}let h,f=k=>{h=_.onStop=()=>{fn(k,a,4)}};if(Os)return f=It,e?n&&Et(e,a,3,[c(),l?[]:void 0,f]):c(),It;let g=l?[]:Gl;const m=()=>{if(!!_.active)if(e){const k=_.run();(r||u||(l?k.some((D,B)=>Cs(D,g[B])):Cs(k,g)))&&(h&&h(),Et(e,a,3,[k,g===Gl?void 0:g,f]),g=k)}else _.run()};m.allowRecurse=!!e;let b;s==="sync"?b=m:s==="post"?b=()=>st(m,a&&a.suspense):b=()=>{!a||a.isMounted?$v(m):m()};const _=new ru(c,b);return e?n?m():g=_.run():s==="post"?st(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&Zc(a.scope.effects,_)}}function Yv(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?Ld(r,t):()=>r[t]:t.bind(r,r);let i;Q(e)?i=e:(i=e.handler,n=e);const o=Pe;Cr(this);const a=Md(s,i.bind(r),n);return o?Cr(o):Mn(),a}function Ld(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Nn(t,e){if(!xe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ve(t))Nn(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Nn(t[n],e);else if(id(t)||_r(t))t.forEach(n=>{Nn(n,e)});else if(cd(t))for(const n in t)Nn(t[n],e);return t}function Qv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $d(()=>{t.isMounted=!0}),jd(()=>{t.isUnmounting=!0}),t}const vt=[Function,Array],Jv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vt,onEnter:vt,onAfterEnter:vt,onEnterCancelled:vt,onBeforeLeave:vt,onLeave:vt,onAfterLeave:vt,onLeaveCancelled:vt,onBeforeAppear:vt,onAppear:vt,onAfterAppear:vt,onAppearCancelled:vt},setup(t,{slots:e}){const n=V_(),r=Qv();let s;return()=>{const i=e.default&&Fd(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const b of i)if(b.type!==St){o=b;break}}const a=ae(t),{mode:c}=a;if(r.isLeaving)return wa(o);const u=Xl(o);if(!u)return wa(o);const l=tc(u,a,r,n);nc(u,l);const h=n.subTree,f=h&&Xl(h);let g=!1;const{getTransitionKey:m}=u.type;if(m){const b=m();s===void 0?s=b:b!==s&&(s=b,g=!0)}if(f&&f.type!==St&&(!kn(u,f)||g)){const b=tc(f,a,r,n);if(nc(f,b),c==="out-in")return r.isLeaving=!0,b.afterLeave=()=>{r.isLeaving=!1,n.update()},wa(o);c==="in-out"&&u.type!==St&&(b.delayLeave=(_,k,D)=>{const B=Ud(r,f);B[String(f.key)]=f,_._leaveCb=()=>{k(),_._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=D})}return o}}},Zv=Jv;function Ud(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function tc(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:b,onAppear:_,onAfterAppear:k,onAppearCancelled:D}=e,B=String(t.key),L=Ud(n,t),se=(Y,_e)=>{Y&&Et(Y,r,9,_e)},ue={mode:i,persisted:o,beforeEnter(Y){let _e=a;if(!n.isMounted)if(s)_e=b||a;else return;Y._leaveCb&&Y._leaveCb(!0);const ge=L[B];ge&&kn(t,ge)&&ge.el._leaveCb&&ge.el._leaveCb(),se(_e,[Y])},enter(Y){let _e=c,ge=u,We=l;if(!n.isMounted)if(s)_e=_||c,ge=k||u,We=D||l;else return;let Ge=!1;const Fe=Y._enterCb=Qt=>{Ge||(Ge=!0,Qt?se(We,[Y]):se(ge,[Y]),ue.delayedLeave&&ue.delayedLeave(),Y._enterCb=void 0)};_e?(_e(Y,Fe),_e.length<=1&&Fe()):Fe()},leave(Y,_e){const ge=String(t.key);if(Y._enterCb&&Y._enterCb(!0),n.isUnmounting)return _e();se(h,[Y]);let We=!1;const Ge=Y._leaveCb=Fe=>{We||(We=!0,_e(),Fe?se(m,[Y]):se(g,[Y]),Y._leaveCb=void 0,L[ge]===t&&delete L[ge])};L[ge]=t,f?(f(Y,Ge),f.length<=1&&Ge()):Ge()},clone(Y){return tc(Y,e,n,r)}};return ue}function wa(t){if(No(t))return t=Vn(t),t.children=null,t}function Xl(t){return No(t)?t.children?t.children[0]:void 0:t}function nc(t,e){t.shapeFlag&6&&t.component?nc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Fd(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===_t?(o.patchFlag&128&&s++,r=r.concat(Fd(o.children,e,a))):(e||o.type!==St)&&r.push(a!=null?Vn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Bd(t){return Q(t)?{setup:t,name:t.name}:t}const rc=t=>!!t.type.__asyncLoader,No=t=>t.type.__isKeepAlive;function e_(t,e){Vd(t,"a",e)}function t_(t,e){Vd(t,"da",e)}function Vd(t,e,n=Pe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Oo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)No(s.parent.vnode)&&n_(r,e,n,s),s=s.parent}}function n_(t,e,n,r){const s=Oo(e,t,r,!0);Hd(()=>{Zc(r[e],s)},n)}function Oo(t,e,n=Pe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Vr(),Cr(n);const a=Et(e,n,t,o);return Mn(),$r(),a});return r?s.unshift(i):s.push(i),i}}const Yt=t=>(e,n=Pe)=>(!Os||t==="sp")&&Oo(t,e,n),r_=Yt("bm"),$d=Yt("m"),s_=Yt("bu"),i_=Yt("u"),jd=Yt("bum"),Hd=Yt("um"),o_=Yt("sp"),a_=Yt("rtg"),c_=Yt("rtc");function u_(t,e=Pe){Oo("ec",t,e)}let sc=!0;function l_(t){const e=Kd(t),n=t.proxy,r=t.ctx;sc=!1,e.beforeCreate&&Yl(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:g,updated:m,activated:b,deactivated:_,beforeDestroy:k,beforeUnmount:D,destroyed:B,unmounted:L,render:se,renderTracked:ue,renderTriggered:Y,errorCaptured:_e,serverPrefetch:ge,expose:We,inheritAttrs:Ge,components:Fe,directives:Qt,filters:rr}=e;if(u&&h_(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const le=o[me];Q(le)&&(r[me]=le.bind(n))}if(s){const me=s.call(n,n);xe(me)&&(t.data=jr(me))}if(sc=!0,i)for(const me in i){const le=i[me],lt=Q(le)?le.bind(n,n):Q(le.get)?le.get.bind(n,n):It,ir=!Q(le)&&Q(le.set)?le.set.bind(n):It,Vt=Dt({get:lt,set:ir});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:kt=>Vt.value=kt})}if(a)for(const me in a)qd(a[me],r,n,me);if(c){const me=Q(c)?c.call(n):c;Reflect.ownKeys(me).forEach(le=>{xi(le,me[le])})}l&&Yl(l,t,"c");function Ne(me,le){G(le)?le.forEach(lt=>me(lt.bind(n))):le&&me(le.bind(n))}if(Ne(r_,h),Ne($d,f),Ne(s_,g),Ne(i_,m),Ne(e_,b),Ne(t_,_),Ne(u_,_e),Ne(c_,ue),Ne(a_,Y),Ne(jd,D),Ne(Hd,L),Ne(o_,ge),G(We))if(We.length){const me=t.exposed||(t.exposed={});We.forEach(le=>{Object.defineProperty(me,le,{get:()=>n[le],set:lt=>n[le]=lt})})}else t.exposed||(t.exposed={});se&&t.render===It&&(t.render=se),Ge!=null&&(t.inheritAttrs=Ge),Fe&&(t.components=Fe),Qt&&(t.directives=Qt)}function h_(t,e,n=It,r=!1){G(t)&&(t=ic(t));for(const s in t){const i=t[s];let o;xe(i)?"default"in i?o=dn(i.from||s,i.default,!0):o=dn(i.from||s):o=dn(i),Ve(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Yl(t,e,n){Et(G(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function qd(t,e,n,r){const s=r.includes(".")?Ld(n,r):()=>n[r];if(qe(t)){const i=e[t];Q(i)&&Er(s,i)}else if(Q(t))Er(s,t.bind(n));else if(xe(t))if(G(t))t.forEach(i=>qd(i,e,n,r));else{const i=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(i)&&Er(s,i,t)}}function Kd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Gi(c,u,o,!0)),Gi(c,e,o)),i.set(e,c),c}function Gi(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Gi(t,i,n,!0),s&&s.forEach(o=>Gi(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=f_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const f_={data:Ql,props:Cn,emits:Cn,methods:Cn,computed:Cn,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:Cn,directives:Cn,watch:p_,provide:Ql,inject:d_};function Ql(t,e){return e?t?function(){return Je(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function d_(t,e){return Cn(ic(t),ic(e))}function ic(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function et(t,e){return t?[...new Set([].concat(t,e))]:e}function Cn(t,e){return t?Je(Je(Object.create(null),t),e):e}function p_(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const r in e)n[r]=et(t[r],e[r]);return n}function g_(t,e,n,r=!1){const s={},i={};Ki(i,Po,1),t.propsDefaults=Object.create(null),zd(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ov(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function m_(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ae(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(ko(t.emitsOptions,f))continue;const g=e[f];if(c)if(ne(i,f))g!==i[f]&&(i[f]=g,u=!0);else{const m=Ft(f);s[m]=oc(c,a,m,g,t,!1)}else g!==i[f]&&(i[f]=g,u=!0)}}}else{zd(t,e,s,i)&&(u=!0);let l;for(const h in a)(!e||!ne(e,h)&&((l=Br(h))===h||!ne(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(s[h]=oc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ne(e,h)&&!0)&&(delete i[h],u=!0)}u&&Wt(t,"set","$attrs")}function zd(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Oi(c))continue;const u=e[c];let l;s&&ne(s,l=Ft(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:ko(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=ae(n),u=a||pe;for(let l=0;l<i.length;l++){const h=i[l];n[h]=oc(s,c,h,u[h],t,!ne(u,h))}}return o}function oc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&Q(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(Cr(s),r=u[n]=c.call(null,e),Mn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Br(n))&&(r=!0))}return r}function Wd(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Q(t)){const l=h=>{c=!0;const[f,g]=Wd(h,e,!0);Je(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return r.set(t,vr),vr;if(G(i))for(let l=0;l<i.length;l++){const h=Ft(i[l]);Jl(h)&&(o[h]=pe)}else if(i)for(const l in i){const h=Ft(l);if(Jl(h)){const f=i[l],g=o[h]=G(f)||Q(f)?{type:f}:f;if(g){const m=th(Boolean,g.type),b=th(String,g.type);g[0]=m>-1,g[1]=b<0||m<b,(m>-1||ne(g,"default"))&&a.push(h)}}}const u=[o,a];return r.set(t,u),u}function Jl(t){return t[0]!=="$"}function Zl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function eh(t,e){return Zl(t)===Zl(e)}function th(t,e){return G(e)?e.findIndex(n=>eh(n,t)):Q(e)&&eh(e,t)?0:-1}const Gd=t=>t[0]==="_"||t==="$stable",hu=t=>G(t)?t.map(Pt):[Pt(t)],y_=(t,e,n)=>{const r=Di((...s)=>hu(e(...s)),n);return r._c=!1,r},Xd=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Gd(s))continue;const i=t[s];if(Q(i))e[s]=y_(s,i,r);else if(i!=null){const o=hu(i);e[s]=()=>o}}},Yd=(t,e)=>{const n=hu(e);t.slots.default=()=>n},v_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),Ki(e,"_",n)):Xd(e,t.slots={})}else t.slots={},e&&Yd(t,e);Ki(t.slots,Po,1)},__=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=pe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Je(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Xd(e,s)),o=e}else e&&(Yd(t,e),o={default:1});if(i)for(const a in s)!Gd(a)&&!(a in o)&&delete s[a]};function nh(t,e){const n=wt;if(n===null)return t;const r=Do(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=pe]=e[i];Q(o)&&(o={mounted:o,updated:o}),o.deep&&Nn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function In(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Vr(),Et(c,n,8,[t.el,a,t,e]),$r())}}function Qd(){return{app:null,config:{isNativeTag:Qy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let w_=0;function E_(t,e){return function(r,s=null){Q(r)||(r=Object.assign({},r)),s!=null&&!xe(s)&&(s=null);const i=Qd(),o=new Set;let a=!1;const c=i.app={_uid:w_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:W_,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&Q(u.install)?(o.add(u),u.install(c,...l)):Q(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=De(r,s);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,Do(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function ac(t,e,n,r,s=!1){if(G(t)){t.forEach((f,g)=>ac(f,e&&(G(e)?e[g]:e),n,r,s));return}if(rc(r)&&!s)return;const i=r.shapeFlag&4?Do(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===pe?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(qe(u)?(l[u]=null,ne(h,u)&&(h[u]=null)):Ve(u)&&(u.value=null)),Q(c))fn(c,a,12,[o,l]);else{const f=qe(c),g=Ve(c);if(f||g){const m=()=>{if(t.f){const b=f?l[c]:c.value;s?G(b)&&Zc(b,i):G(b)?b.includes(i)||b.push(i):f?(l[c]=[i],ne(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,ne(h,c)&&(h[c]=o)):Ve(c)&&(c.value=o,t.k&&(l[t.k]=o))};o?(m.id=-1,st(m,n)):m()}}}const st=Xv;function b_(t){return T_(t)}function T_(t,e){const n=rv();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:g=It,cloneNode:m,insertStaticContent:b}=t,_=(d,p,y,E=null,w=null,A=null,O=!1,S=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!kn(d,p)&&(E=F(d),yt(d,w,A,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:T,ref:V,shapeFlag:x}=p;switch(T){case fu:k(d,p,y,E);break;case St:D(d,p,y,E);break;case Mi:d==null&&B(p,y,E,O);break;case _t:Qt(d,p,y,E,w,A,O,S,R);break;default:x&1?ue(d,p,y,E,w,A,O,S,R):x&6?rr(d,p,y,E,w,A,O,S,R):(x&64||x&128)&&T.process(d,p,y,E,w,A,O,S,R,ye)}V!=null&&w&&ac(V,d&&d.ref,A,p||d,!p)},k=(d,p,y,E)=>{if(d==null)r(p.el=a(p.children),y,E);else{const w=p.el=d.el;p.children!==d.children&&u(w,p.children)}},D=(d,p,y,E)=>{d==null?r(p.el=c(p.children||""),y,E):p.el=d.el},B=(d,p,y,E)=>{[d.el,d.anchor]=b(d.children,p,y,E,d.el,d.anchor)},L=({el:d,anchor:p},y,E)=>{let w;for(;d&&d!==p;)w=f(d),r(d,y,E),d=w;r(p,y,E)},se=({el:d,anchor:p})=>{let y;for(;d&&d!==p;)y=f(d),s(d),d=y;s(p)},ue=(d,p,y,E,w,A,O,S,R)=>{O=O||p.type==="svg",d==null?Y(p,y,E,w,A,O,S,R):We(d,p,w,A,O,S,R)},Y=(d,p,y,E,w,A,O,S)=>{let R,T;const{type:V,props:x,shapeFlag:$,transition:z,patchFlag:re,dirs:be}=d;if(d.el&&m!==void 0&&re===-1)R=d.el=m(d.el);else{if(R=d.el=o(d.type,A,x&&x.is,x),$&8?l(R,d.children):$&16&&ge(d.children,R,null,E,w,A&&V!=="foreignObject",O,S),be&&In(d,null,E,"created"),x){for(const we in x)we!=="value"&&!Oi(we)&&i(R,we,null,x[we],A,d.children,E,w,N);"value"in x&&i(R,"value",null,x.value),(T=x.onVnodeBeforeMount)&&Nt(T,E,d)}_e(R,d,d.scopeId,O,E)}be&&In(d,null,E,"beforeMount");const fe=(!w||w&&!w.pendingBranch)&&z&&!z.persisted;fe&&z.beforeEnter(R),r(R,p,y),((T=x&&x.onVnodeMounted)||fe||be)&&st(()=>{T&&Nt(T,E,d),fe&&z.enter(R),be&&In(d,null,E,"mounted")},w)},_e=(d,p,y,E,w)=>{if(y&&g(d,y),E)for(let A=0;A<E.length;A++)g(d,E[A]);if(w){let A=w.subTree;if(p===A){const O=w.vnode;_e(d,O,O.scopeId,O.slotScopeIds,w.parent)}}},ge=(d,p,y,E,w,A,O,S,R=0)=>{for(let T=R;T<d.length;T++){const V=d[T]=S?rn(d[T]):Pt(d[T]);_(null,V,p,y,E,w,A,O,S)}},We=(d,p,y,E,w,A,O)=>{const S=p.el=d.el;let{patchFlag:R,dynamicChildren:T,dirs:V}=p;R|=d.patchFlag&16;const x=d.props||pe,$=p.props||pe;let z;y&&Sn(y,!1),(z=$.onVnodeBeforeUpdate)&&Nt(z,y,p,d),V&&In(p,d,y,"beforeUpdate"),y&&Sn(y,!0);const re=w&&p.type!=="foreignObject";if(T?Ge(d.dynamicChildren,T,S,y,E,re,A):O||lt(d,p,S,null,y,E,re,A,!1),R>0){if(R&16)Fe(S,p,x,$,y,E,w);else if(R&2&&x.class!==$.class&&i(S,"class",null,$.class,w),R&4&&i(S,"style",x.style,$.style,w),R&8){const be=p.dynamicProps;for(let fe=0;fe<be.length;fe++){const we=be[fe],bt=x[we],or=$[we];(or!==bt||we==="value")&&i(S,we,bt,or,w,d.children,y,E,N)}}R&1&&d.children!==p.children&&l(S,p.children)}else!O&&T==null&&Fe(S,p,x,$,y,E,w);((z=$.onVnodeUpdated)||V)&&st(()=>{z&&Nt(z,y,p,d),V&&In(p,d,y,"updated")},E)},Ge=(d,p,y,E,w,A,O)=>{for(let S=0;S<p.length;S++){const R=d[S],T=p[S],V=R.el&&(R.type===_t||!kn(R,T)||R.shapeFlag&70)?h(R.el):y;_(R,T,V,null,E,w,A,O,!0)}},Fe=(d,p,y,E,w,A,O)=>{if(y!==E){for(const S in E){if(Oi(S))continue;const R=E[S],T=y[S];R!==T&&S!=="value"&&i(d,S,T,R,O,p.children,w,A,N)}if(y!==pe)for(const S in y)!Oi(S)&&!(S in E)&&i(d,S,y[S],null,O,p.children,w,A,N);"value"in E&&i(d,"value",y.value,E.value)}},Qt=(d,p,y,E,w,A,O,S,R)=>{const T=p.el=d?d.el:a(""),V=p.anchor=d?d.anchor:a("");let{patchFlag:x,dynamicChildren:$,slotScopeIds:z}=p;z&&(S=S?S.concat(z):z),d==null?(r(T,y,E),r(V,y,E),ge(p.children,y,V,w,A,O,S,R)):x>0&&x&64&&$&&d.dynamicChildren?(Ge(d.dynamicChildren,$,y,w,A,O,S),(p.key!=null||w&&p===w.subTree)&&Jd(d,p,!0)):lt(d,p,y,V,w,A,O,S,R)},rr=(d,p,y,E,w,A,O,S,R)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?w.ctx.activate(p,y,E,O,R):sr(p,y,E,w,A,O,R):Ne(d,p,R)},sr=(d,p,y,E,w,A,O)=>{const S=d.component=B_(d,E,w);if(No(d)&&(S.ctx.renderer=ye),$_(S),S.asyncDep){if(w&&w.registerDep(S,me),!d.el){const R=S.subTree=De(St);D(null,R,p,y)}return}me(S,d,p,y,w,A,O)},Ne=(d,p,y)=>{const E=p.component=d.component;if(zv(d,p,y))if(E.asyncDep&&!E.asyncResolved){le(E,p,y);return}else E.next=p,Vv(E.update),E.update();else p.component=d.component,p.el=d.el,E.vnode=p},me=(d,p,y,E,w,A,O)=>{const S=()=>{if(d.isMounted){let{next:V,bu:x,u:$,parent:z,vnode:re}=d,be=V,fe;Sn(d,!1),V?(V.el=re.el,le(d,V,O)):V=re,x&&Pi(x),(fe=V.props&&V.props.onVnodeBeforeUpdate)&&Nt(fe,z,V,re),Sn(d,!0);const we=_a(d),bt=d.subTree;d.subTree=we,_(bt,we,h(bt.el),F(bt),d,w,A),V.el=we.el,be===null&&Wv(d,we.el),$&&st($,w),(fe=V.props&&V.props.onVnodeUpdated)&&st(()=>Nt(fe,z,V,re),w)}else{let V;const{el:x,props:$}=p,{bm:z,m:re,parent:be}=d,fe=rc(p);if(Sn(d,!1),z&&Pi(z),!fe&&(V=$&&$.onVnodeBeforeMount)&&Nt(V,be,p),Sn(d,!0),x&&J){const we=()=>{d.subTree=_a(d),J(x,d.subTree,d,w,null)};fe?p.type.__asyncLoader().then(()=>!d.isUnmounted&&we()):we()}else{const we=d.subTree=_a(d);_(null,we,y,E,d,w,A),p.el=we.el}if(re&&st(re,w),!fe&&(V=$&&$.onVnodeMounted)){const we=p;st(()=>Nt(V,be,we),w)}p.shapeFlag&256&&d.a&&st(d.a,w),d.isMounted=!0,p=y=E=null}},R=d.effect=new ru(S,()=>Rd(d.update),d.scope),T=d.update=R.run.bind(R);T.id=d.uid,Sn(d,!0),T()},le=(d,p,y)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,m_(d,p.props,E,y),__(d,p.children,y),Vr(),lu(void 0,d.update),$r()},lt=(d,p,y,E,w,A,O,S,R=!1)=>{const T=d&&d.children,V=d?d.shapeFlag:0,x=p.children,{patchFlag:$,shapeFlag:z}=p;if($>0){if($&128){Vt(T,x,y,E,w,A,O,S,R);return}else if($&256){ir(T,x,y,E,w,A,O,S,R);return}}z&8?(V&16&&N(T,w,A),x!==T&&l(y,x)):V&16?z&16?Vt(T,x,y,E,w,A,O,S,R):N(T,w,A,!0):(V&8&&l(y,""),z&16&&ge(x,y,E,w,A,O,S,R))},ir=(d,p,y,E,w,A,O,S,R)=>{d=d||vr,p=p||vr;const T=d.length,V=p.length,x=Math.min(T,V);let $;for($=0;$<x;$++){const z=p[$]=R?rn(p[$]):Pt(p[$]);_(d[$],z,y,null,w,A,O,S,R)}T>V?N(d,w,A,!0,!1,x):ge(p,y,E,w,A,O,S,R,x)},Vt=(d,p,y,E,w,A,O,S,R)=>{let T=0;const V=p.length;let x=d.length-1,$=V-1;for(;T<=x&&T<=$;){const z=d[T],re=p[T]=R?rn(p[T]):Pt(p[T]);if(kn(z,re))_(z,re,y,null,w,A,O,S,R);else break;T++}for(;T<=x&&T<=$;){const z=d[x],re=p[$]=R?rn(p[$]):Pt(p[$]);if(kn(z,re))_(z,re,y,null,w,A,O,S,R);else break;x--,$--}if(T>x){if(T<=$){const z=$+1,re=z<V?p[z].el:E;for(;T<=$;)_(null,p[T]=R?rn(p[T]):Pt(p[T]),y,re,w,A,O,S,R),T++}}else if(T>$)for(;T<=x;)yt(d[T],w,A,!0),T++;else{const z=T,re=T,be=new Map;for(T=re;T<=$;T++){const ht=p[T]=R?rn(p[T]):Pt(p[T]);ht.key!=null&&be.set(ht.key,T)}let fe,we=0;const bt=$-re+1;let or=!1,Dl=0;const ts=new Array(bt);for(T=0;T<bt;T++)ts[T]=0;for(T=z;T<=x;T++){const ht=d[T];if(we>=bt){yt(ht,w,A,!0);continue}let Rt;if(ht.key!=null)Rt=be.get(ht.key);else for(fe=re;fe<=$;fe++)if(ts[fe-re]===0&&kn(ht,p[fe])){Rt=fe;break}Rt===void 0?yt(ht,w,A,!0):(ts[Rt-re]=T+1,Rt>=Dl?Dl=Rt:or=!0,_(ht,p[Rt],y,null,w,A,O,S,R),we++)}const xl=or?I_(ts):vr;for(fe=xl.length-1,T=bt-1;T>=0;T--){const ht=re+T,Rt=p[ht],Ml=ht+1<V?p[ht+1].el:E;ts[T]===0?_(null,Rt,y,Ml,w,A,O,S,R):or&&(fe<0||T!==xl[fe]?kt(Rt,y,Ml,2):fe--)}}},kt=(d,p,y,E,w=null)=>{const{el:A,type:O,transition:S,children:R,shapeFlag:T}=d;if(T&6){kt(d.component.subTree,p,y,E);return}if(T&128){d.suspense.move(p,y,E);return}if(T&64){O.move(d,p,y,ye);return}if(O===_t){r(A,p,y);for(let x=0;x<R.length;x++)kt(R[x],p,y,E);r(d.anchor,p,y);return}if(O===Mi){L(d,p,y);return}if(E!==2&&T&1&&S)if(E===0)S.beforeEnter(A),r(A,p,y),st(()=>S.enter(A),w);else{const{leave:x,delayLeave:$,afterLeave:z}=S,re=()=>r(A,p,y),be=()=>{x(A,()=>{re(),z&&z()})};$?$(A,re,be):be()}else r(A,p,y)},yt=(d,p,y,E=!1,w=!1)=>{const{type:A,props:O,ref:S,children:R,dynamicChildren:T,shapeFlag:V,patchFlag:x,dirs:$}=d;if(S!=null&&ac(S,null,y,d,!0),V&256){p.ctx.deactivate(d);return}const z=V&1&&$,re=!rc(d);let be;if(re&&(be=O&&O.onVnodeBeforeUnmount)&&Nt(be,p,d),V&6)M(d.component,y,E);else{if(V&128){d.suspense.unmount(y,E);return}z&&In(d,null,p,"beforeUnmount"),V&64?d.type.remove(d,p,y,w,ye,E):T&&(A!==_t||x>0&&x&64)?N(T,p,y,!1,!0):(A===_t&&x&384||!w&&V&16)&&N(R,p,y),E&&ya(d)}(re&&(be=O&&O.onVnodeUnmounted)||z)&&st(()=>{be&&Nt(be,p,d),z&&In(d,null,p,"unmounted")},y)},ya=d=>{const{type:p,el:y,anchor:E,transition:w}=d;if(p===_t){v(y,E);return}if(p===Mi){se(d);return}const A=()=>{s(y),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:O,delayLeave:S}=w,R=()=>O(y,A);S?S(d.el,A,R):R()}else A()},v=(d,p)=>{let y;for(;d!==p;)y=f(d),s(d),d=y;s(p)},M=(d,p,y)=>{const{bum:E,scope:w,update:A,subTree:O,um:S}=d;E&&Pi(E),w.stop(),A&&(A.active=!1,yt(O,d,p,y)),S&&st(S,p),st(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(d,p,y,E=!1,w=!1,A=0)=>{for(let O=A;O<d.length;O++)yt(d[O],p,y,E,w)},F=d=>d.shapeFlag&6?F(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),he=(d,p,y)=>{d==null?p._vnode&&yt(p._vnode,null,null,!0):_(p._vnode||null,d,p,null,null,null,y),Pd(),p._vnode=d},ye={p:_,um:yt,m:kt,r:ya,mt:sr,mc:ge,pc:lt,pbc:Ge,n:F,o:t};let ee,J;return e&&([ee,J]=e(ye)),{render:he,hydrate:ee,createApp:E_(he,ee)}}function Sn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Jd(t,e,n=!1){const r=t.children,s=e.children;if(G(r)&&G(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=rn(s[i]),a.el=o.el),n||Jd(o,a))}}function I_(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const S_=t=>t.__isTeleport,Zd="components";function rh(t,e){return A_(Zd,t,!0,e)||t}const C_=Symbol();function A_(t,e,n=!0,r=!1){const s=wt||Pe;if(s){const i=s.type;if(t===Zd){const a=K_(i);if(a&&(a===e||a===Ft(e)||a===So(Ft(e))))return i}const o=sh(s[t]||i[t],e)||sh(s.appContext[t],e);return!o&&r?i:o}}function sh(t,e){return t&&(t[e]||t[Ft(e)]||t[So(Ft(e))])}const _t=Symbol(void 0),fu=Symbol(void 0),St=Symbol(void 0),Mi=Symbol(void 0),gs=[];let xn=null;function Ns(t=!1){gs.push(xn=t?null:[])}function k_(){gs.pop(),xn=gs[gs.length-1]||null}let Xi=1;function ih(t){Xi+=t}function ep(t){return t.dynamicChildren=Xi>0?xn||vr:null,k_(),Xi>0&&xn&&xn.push(t),t}function Yi(t,e,n,r,s,i){return ep(oe(t,e,n,r,s,i,!0))}function R_(t,e,n,r,s){return ep(De(t,e,n,r,s,!0))}function cc(t){return t?t.__v_isVNode===!0:!1}function kn(t,e){return t.type===e.type&&t.key===e.key}const Po="__vInternal",tp=({key:t})=>t!=null?t:null,Li=({ref:t,ref_key:e,ref_for:n})=>t!=null?qe(t)||Ve(t)||Q(t)?{i:wt,r:t,k:e,f:!!n}:t:null;function oe(t,e=null,n=null,r=0,s=null,i=t===_t?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&tp(e),ref:e&&Li(e),scopeId:Ro,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(du(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),Xi>0&&!o&&xn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xn.push(c),c}const De=N_;function N_(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===C_)&&(t=St),cc(t)){const a=Vn(t,e,!0);return n&&du(a,n),a}if(z_(t)&&(t=t.__vccOpts),e){e=O_(e);let{class:a,style:c}=e;a&&!qe(a)&&(e.class=Qc(a)),xe(c)&&(Ed(c)&&!G(c)&&(c=Je({},c)),e.style=Yc(c))}const o=qe(t)?1:Gv(t)?128:S_(t)?64:xe(t)?4:Q(t)?2:0;return oe(t,e,n,r,s,o,i,!0)}function O_(t){return t?Ed(t)||Po in t?Je({},t):t:null}function Vn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?M_(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&tp(a),ref:e&&e.ref?n&&s?G(s)?s.concat(Li(e)):[s,Li(e)]:Li(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_t?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vn(t.ssContent),ssFallback:t.ssFallback&&Vn(t.ssFallback),el:t.el,anchor:t.anchor}}function P_(t=" ",e=0){return De(fu,null,t,e)}function D_(t,e){const n=De(Mi,null,t);return n.staticCount=e,n}function x_(t="",e=!1){return e?(Ns(),R_(St,null,t)):De(St,null,t)}function Pt(t){return t==null||typeof t=="boolean"?De(St):G(t)?De(_t,null,t.slice()):typeof t=="object"?rn(t):De(fu,null,String(t))}function rn(t){return t.el===null||t.memo?t:Vn(t)}function du(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),du(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Po in e)?e._ctx=wt:s===3&&wt&&(wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:wt},n=32):(e=String(e),r&64?(n=16,e=[P_(e)]):n=8);t.children=e,t.shapeFlag|=n}function M_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Qc([e.class,r.class]));else if(s==="style")e.style=Yc([e.style,r.style]);else if(bo(s)){const i=e[s],o=r[s];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Nt(t,e,n,r=null){Et(t,e,7,[n,r])}const uc=t=>t?np(t)?Do(t)||t.proxy:uc(t.parent):null,Qi=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>uc(t.parent),$root:t=>uc(t.root),$emit:t=>t.emit,$options:t=>Kd(t),$forceUpdate:t=>()=>Rd(t.update),$nextTick:t=>kd.bind(t.proxy),$watch:t=>Yv.bind(t)}),L_={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==pe&&ne(r,e))return o[e]=1,r[e];if(s!==pe&&ne(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ne(u,e))return o[e]=3,i[e];if(n!==pe&&ne(n,e))return o[e]=4,n[e];sc&&(o[e]=0)}}const l=Qi[e];let h,f;if(l)return e==="$attrs"&&gt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==pe&&ne(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ne(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==pe&&ne(s,e)?(s[e]=n,!0):r!==pe&&ne(r,e)?(r[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==pe&&ne(t,o)||e!==pe&&ne(e,o)||(a=i[0])&&ne(a,o)||ne(r,o)||ne(Qi,o)||ne(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},U_=Qd();let F_=0;function B_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||U_,i={uid:F_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new sv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wd(r,s),emitsOptions:xd(r,s),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:r.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Hv.bind(null,i),t.ce&&t.ce(i),i}let Pe=null;const V_=()=>Pe||wt,Cr=t=>{Pe=t,t.scope.on()},Mn=()=>{Pe&&Pe.scope.off(),Pe=null};function np(t){return t.vnode.shapeFlag&4}let Os=!1;function $_(t,e=!1){Os=e;const{props:n,children:r}=t.vnode,s=np(t);g_(t,n,s,e),v_(t,r);const i=s?j_(t,e):void 0;return Os=!1,i}function j_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=bd(new Proxy(t.ctx,L_));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?q_(t):null;Cr(t),Vr();const i=fn(r,t,0,[t.props,s]);if($r(),Mn(),od(i)){if(i.then(Mn,Mn),e)return i.then(o=>{oh(t,o,e)}).catch(o=>{Ao(o,t,0)});t.asyncDep=i}else oh(t,i,e)}else rp(t,e)}function oh(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=Cd(e)),rp(t,n)}let ah;function rp(t,e,n){const r=t.type;if(!t.render){if(!e&&ah&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=Je(Je({isCustomElement:i,delimiters:a},o),c);r.render=ah(s,u)}}t.render=r.render||It}Cr(t),Vr(),l_(t),$r(),Mn()}function H_(t){return new Proxy(t.attrs,{get(e,n){return gt(t,"get","$attrs"),e[n]}})}function q_(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=H_(t))},slots:t.slots,emit:t.emit,expose:e}}function Do(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Cd(bd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qi)return Qi[n](t)}}))}function K_(t){return Q(t)&&t.displayName||t.name}function z_(t){return Q(t)&&"__vccOpts"in t}const Dt=(t,e)=>Uv(t,e,Os);function sp(t,e,n){const r=arguments.length;return r===2?xe(e)&&!G(e)?cc(e)?De(t,null,[e]):De(t,e):De(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&cc(n)&&(n=[n]),De(t,e,n))}const W_="3.2.33",G_="http://www.w3.org/2000/svg",Rn=typeof document!="undefined"?document:null,ch=Rn&&Rn.createElement("template"),X_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Rn.createElementNS(G_,t):Rn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ch.innerHTML=r?`<svg>${t}</svg>`:t;const a=ch.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Y_(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Q_(t,e,n){const r=t.style,s=qe(n);if(n&&!s){for(const i in n)lc(r,i,n[i]);if(e&&!qe(e))for(const i in e)n[i]==null&&lc(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const uh=/\s*!important$/;function lc(t,e,n){if(G(n))n.forEach(r=>lc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=J_(t,e);uh.test(n)?t.setProperty(Br(r),n.replace(uh,""),"important"):t[r]=n}}const lh=["Webkit","Moz","ms"],Ea={};function J_(t,e){const n=Ea[e];if(n)return n;let r=Ft(e);if(r!=="filter"&&r in t)return Ea[e]=r;r=So(r);for(let s=0;s<lh.length;s++){const i=lh[s]+r;if(i in t)return Ea[e]=i}return e}const hh="http://www.w3.org/1999/xlink";function Z_(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(hh,e.slice(6,e.length)):t.setAttributeNS(hh,e,n);else{const i=Wy(e);n==null||i&&!rd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ew(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=rd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[ip,tw]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let hc=0;const nw=Promise.resolve(),rw=()=>{hc=0},sw=()=>hc||(nw.then(rw),hc=ip());function dr(t,e,n,r){t.addEventListener(e,n,r)}function iw(t,e,n,r){t.removeEventListener(e,n,r)}function ow(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=aw(e);if(r){const u=i[e]=cw(r,s);dr(t,a,u,c)}else o&&(iw(t,a,o,c),i[e]=void 0)}}const fh=/(?:Once|Passive|Capture)$/;function aw(t){let e;if(fh.test(t)){e={};let n;for(;n=t.match(fh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Br(t.slice(2)),e]}function cw(t,e){const n=r=>{const s=r.timeStamp||ip();(tw||s>=n.attached-1)&&Et(uw(r,n.value),e,5,[r])};return n.value=t,n.attached=sw(),n}function uw(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const dh=/^on[a-z]/,lw=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Y_(t,r,s):e==="style"?Q_(t,n,r):bo(e)?Jc(e)||ow(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hw(t,e,r,s))?ew(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Z_(t,e,r,s))};function hw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&dh.test(e)&&Q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||dh.test(e)&&qe(n)?!1:e in t}const fw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Zv.props;const ph=t=>{const e=t.props["onUpdate:modelValue"];return G(e)?n=>Pi(e,n):e};function dw(t){t.target.composing=!0}function gh(t){const e=t.target;e.composing&&(e.composing=!1,pw(e,"input"))}function pw(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const mh={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=ph(s);const i=r||s.props&&s.props.type==="number";dr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Ga(a)),t._assign(a)}),n&&dr(t,"change",()=>{t.value=t.value.trim()}),e||(dr(t,"compositionstart",dw),dr(t,"compositionend",gh),dr(t,"change",gh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=ph(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ga(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},gw=["ctrl","shift","alt","meta"],mw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>gw.some(n=>t[`${n}Key`]&&!e.includes(n))},yw=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=mw[e[s]];if(i&&i(n,e))return}return t(n,...r)},vw=Je({patchProp:lw},X_);let yh;function _w(){return yh||(yh=b_(vw))}const ww=(...t)=>{const e=_w().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ew(r);if(!s)return;const i=e._component;!Q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ew(t){return qe(t)?document.querySelector(t):t}const bw="modulepreload",vh={},Tw="/if-lost/",ns=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${Tw}${r}`,r in vh)return;vh[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":bw,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};function Iw(){return op().__VUE_DEVTOOLS_GLOBAL_HOOK__}function op(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const Sw=typeof Proxy=="function",Cw="devtools-plugin:setup",Aw="plugin:settings:set";let ar,fc;function kw(){var t;return ar!==void 0||(typeof window!="undefined"&&window.performance?(ar=!0,fc=window.performance):typeof global!="undefined"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(ar=!0,fc=global.perf_hooks.performance):ar=!1),ar}function Rw(){return kw()?fc.now():Date.now()}class Nw{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return Rw()}},n&&n.on(Aw,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Ow(t,e){const n=t,r=op(),s=Iw(),i=Sw&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(Cw,t,e);else{const o=i?new Nw(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ap=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Hr=t=>ap?Symbol(t):"_vr_"+t,Pw=Hr("rvlm"),_h=Hr("rvd"),pu=Hr("r"),cp=Hr("rl"),dc=Hr("rvl"),pr=typeof window!="undefined";function Dw(t){return t.__esModule||ap&&t[Symbol.toStringTag]==="Module"}const de=Object.assign;function ba(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const ms=()=>{},xw=/\/$/,Mw=t=>t.replace(xw,"");function Ta(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Bw(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Lw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function wh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Uw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ar(e.matched[r],n.matched[s])&&up(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ar(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function up(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Fw(t[n],e[n]))return!1;return!0}function Fw(t,e){return Array.isArray(t)?Eh(t,e):Array.isArray(e)?Eh(e,t):t===e}function Eh(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Bw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ps;(function(t){t.pop="pop",t.push="push"})(Ps||(Ps={}));var ys;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ys||(ys={}));function Vw(t){if(!t)if(pr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Mw(t)}const $w=/^[^#]+#/;function jw(t,e){return t.replace($w,"#")+e}function Hw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const xo=()=>({left:window.pageXOffset,top:window.pageYOffset});function qw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Hw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function bh(t,e){return(history.state?history.state.position-e:-1)+t}const pc=new Map;function Kw(t,e){pc.set(t,e)}function zw(t){const e=pc.get(t);return pc.delete(t),e}let Ww=()=>location.protocol+"//"+location.host;function lp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),wh(c,"")}return wh(n,t)+r+s}function Gw(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const g=lp(t,location),m=n.value,b=e.value;let _=0;if(f){if(n.value=g,e.value=f,o&&o===m){o=null;return}_=b?f.position-b.position:0}else r(g);s.forEach(k=>{k(n.value,m,{delta:_,type:Ps.pop,direction:_?_>0?ys.forward:ys.back:ys.unknown})})};function c(){o=n.value}function u(f){s.push(f);const g=()=>{const m=s.indexOf(f);m>-1&&s.splice(m,1)};return i.push(g),g}function l(){const{history:f}=window;!f.state||f.replaceState(de({},f.state,{scroll:xo()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Th(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?xo():null}}function Xw(t){const{history:e,location:n}=window,r={value:lp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Ww()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),s.value=u}catch(g){console.error(g),n[l?"replace":"assign"](f)}}function o(c,u){const l=de({},e.state,Th(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=de({},s.value,e.state,{forward:c,scroll:xo()});i(l.current,l,!0);const h=de({},Th(r.value,c,null),{position:l.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Yw(t){t=Vw(t);const e=Xw(t),n=Gw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=de({location:"",base:t,go:r,createHref:jw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Qw(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Yw(t)}function Jw(t){return typeof t=="string"||t&&typeof t=="object"}function hp(t){return typeof t=="string"||typeof t=="symbol"}const Zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},fp=Hr("nf");var Ih;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ih||(Ih={}));function kr(t,e){return de(new Error,{type:t,[fp]:!0},e)}function en(t,e){return t instanceof Error&&fp in t&&(e==null||!!(t.type&e))}const Sh="[^/]+?",Zw={sensitive:!1,strict:!1,start:!0,end:!0},eE=/[.+*?^${}()[\]/\\]/g;function tE(t,e){const n=de({},Zw,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const f=u[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(eE,"\\$&"),g+=40;else if(f.type===1){const{value:m,repeatable:b,optional:_,regexp:k}=f;i.push({name:m,repeatable:b,optional:_});const D=k||Sh;if(D!==Sh){g+=10;try{new RegExp(`(${D})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${m}" (${D}): `+L.message)}}let B=b?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(B=_&&u.length<2?`(?:/${B})`:"/"+B),_&&(B+="?"),s+=B,g+=20,_&&(g+=-8),b&&(g+=-20),D===".*"&&(g+=-50)}l.push(g)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const g=l[f]||"",m=i[f-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of f)if(g.type===0)l+=g.value;else if(g.type===1){const{value:m,repeatable:b,optional:_}=g,k=m in u?u[m]:"";if(Array.isArray(k)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const D=Array.isArray(k)?k.join("/"):k;if(!D)if(_)f.length<2&&t.length>1&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);l+=D}}return l}return{re:o,score:r,keys:i,parse:a,stringify:c}}function nE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function rE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=nE(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const sE={type:0,value:""},iE=/[a-zA-Z0-9_]/;function oE(t){if(!t)return[[]];if(t==="/")return[[sE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:iE.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function aE(t,e,n){const r=tE(oE(t.path),n),s=de(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function cE(t,e){const n=[],r=new Map;e=Ah({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,h,f){const g=!f,m=lE(l);m.aliasOf=f&&f.record;const b=Ah(e,l),_=[m];if("alias"in l){const B=typeof l.alias=="string"?[l.alias]:l.alias;for(const L of B)_.push(de({},m,{components:f?f.record.components:m.components,path:L,aliasOf:f?f.record:m}))}let k,D;for(const B of _){const{path:L}=B;if(h&&L[0]!=="/"){const se=h.record.path,ue=se[se.length-1]==="/"?"":"/";B.path=h.record.path+(L&&ue+L)}if(k=aE(B,h,b),f?f.alias.push(k):(D=D||k,D!==k&&D.alias.push(k),g&&l.name&&!Ch(k)&&o(l.name)),"children"in m){const se=m.children;for(let ue=0;ue<se.length;ue++)i(se[ue],k,f&&f.children[ue])}f=f||k,c(k)}return D?()=>{o(D)}:ms}function o(l){if(hp(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&rE(l,n[h])>=0&&(l.record.path!==n[h].record.path||!dp(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Ch(l)&&r.set(l.record.name,l)}function u(l,h){let f,g={},m,b;if("name"in l&&l.name){if(f=r.get(l.name),!f)throw kr(1,{location:l});b=f.record.name,g=de(uE(h.params,f.keys.filter(D=>!D.optional).map(D=>D.name)),l.params),m=f.stringify(g)}else if("path"in l)m=l.path,f=n.find(D=>D.re.test(m)),f&&(g=f.parse(m),b=f.record.name);else{if(f=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!f)throw kr(1,{location:l,currentLocation:h});b=f.record.name,g=de({},h.params,l.params),m=f.stringify(g)}const _=[];let k=f;for(;k;)_.unshift(k.record),k=k.parent;return{name:b,path:m,params:g,matched:_,meta:fE(_)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function uE(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:hE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function hE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Ch(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fE(t){return t.reduce((e,n)=>de(e,n.meta),{})}function Ah(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function dp(t,e){return e.children.some(n=>n===t||dp(t,n))}const pp=/#/g,dE=/&/g,pE=/\//g,gE=/=/g,mE=/\?/g,gp=/\+/g,yE=/%5B/g,vE=/%5D/g,mp=/%5E/g,_E=/%60/g,yp=/%7B/g,wE=/%7C/g,vp=/%7D/g,EE=/%20/g;function gu(t){return encodeURI(""+t).replace(wE,"|").replace(yE,"[").replace(vE,"]")}function bE(t){return gu(t).replace(yp,"{").replace(vp,"}").replace(mp,"^")}function gc(t){return gu(t).replace(gp,"%2B").replace(EE,"+").replace(pp,"%23").replace(dE,"%26").replace(_E,"`").replace(yp,"{").replace(vp,"}").replace(mp,"^")}function TE(t){return gc(t).replace(gE,"%3D")}function IE(t){return gu(t).replace(pp,"%23").replace(mE,"%3F")}function SE(t){return t==null?"":IE(t).replace(pE,"%2F")}function Ji(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function CE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(gp," "),o=i.indexOf("="),a=Ji(o<0?i:i.slice(0,o)),c=o<0?null:Ji(i.slice(o+1));if(a in e){let u=e[a];Array.isArray(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function kh(t){let e="";for(let n in t){const r=t[n];if(n=TE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&gc(i)):[r&&gc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function AE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function rs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function sn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(kr(4,{from:n,to:e})):h instanceof Error?a(h):Jw(h)?a(kr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Ia(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(kE(a)){const u=(a.__vccOpts||a)[e];u&&s.push(sn(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=Dw(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&sn(f,n,r,i,o)()}))}}return s}function kE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Rh(t){const e=dn(pu),n=dn(cp),r=Dt(()=>e.resolve(fs(t.to))),s=Dt(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(Ar.bind(null,l));if(f>-1)return f;const g=Nh(c[u-2]);return u>1&&Nh(l)===g&&h[h.length-1].path!==g?h.findIndex(Ar.bind(null,c[u-2])):f}),i=Dt(()=>s.value>-1&&PE(n.params,r.value.params)),o=Dt(()=>s.value>-1&&s.value===n.matched.length-1&&up(n.params,r.value.params));function a(c={}){return OE(c)?e[fs(t.replace)?"replace":"push"](fs(t.to)).catch(ms):Promise.resolve()}return{route:r,href:Dt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const RE=Bd({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rh,setup(t,{slots:e}){const n=jr(Rh(t)),{options:r}=dn(pu),s=Dt(()=>({[Oh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Oh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:sp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),NE=RE;function OE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function PE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Nh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Oh=(t,e,n)=>t!=null?t:e!=null?e:n,DE=Bd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=dn(dc),s=Dt(()=>t.route||r.value),i=dn(_h,0),o=Dt(()=>s.value.matched[i]);xi(_h,i+1),xi(Pw,o),xi(dc,s);const a=Pv();return Er(()=>[a.value,o.value,t.name],([c,u,l],[h,f,g])=>{u&&(u.instances[l]=c,f&&f!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Ar(u,f)||!h)&&(u.enterCallbacks[l]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=o.value,l=u&&u.components[t.name],h=t.name;if(!l)return Ph(n.default,{Component:l,route:c});const f=u.props[t.name],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,b=sp(l,de({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(u.instances[h]=null)},ref:a}));return Ph(n.default,{Component:b,route:c})||b}}});function Ph(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const xE=DE;function ME(t){const e=cE(t.routes,t),n=t.parseQuery||CE,r=t.stringifyQuery||kh,s=t.history,i=rs(),o=rs(),a=rs(),c=Dv(Zt);let u=Zt;pr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=ba.bind(null,v=>""+v),h=ba.bind(null,SE),f=ba.bind(null,Ji);function g(v,M){let N,F;return hp(v)?(N=e.getRecordMatcher(v),F=M):F=v,e.addRoute(F,N)}function m(v){const M=e.getRecordMatcher(v);M&&e.removeRoute(M)}function b(){return e.getRoutes().map(v=>v.record)}function _(v){return!!e.getRecordMatcher(v)}function k(v,M){if(M=de({},M||c.value),typeof v=="string"){const J=Ta(n,v,M.path),d=e.resolve({path:J.path},M),p=s.createHref(J.fullPath);return de(J,d,{params:f(d.params),hash:Ji(J.hash),redirectedFrom:void 0,href:p})}let N;if("path"in v)N=de({},v,{path:Ta(n,v.path,M.path).path});else{const J=de({},v.params);for(const d in J)J[d]==null&&delete J[d];N=de({},v,{params:h(v.params)}),M.params=h(M.params)}const F=e.resolve(N,M),he=v.hash||"";F.params=l(f(F.params));const ye=Lw(r,de({},v,{hash:bE(he),path:F.path})),ee=s.createHref(ye);return de({fullPath:ye,hash:he,query:r===kh?AE(v.query):v.query||{}},F,{redirectedFrom:void 0,href:ee})}function D(v){return typeof v=="string"?Ta(n,v,c.value.path):de({},v)}function B(v,M){if(u!==v)return kr(8,{from:M,to:v})}function L(v){return Y(v)}function se(v){return L(de(D(v),{replace:!0}))}function ue(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:N}=M;let F=typeof N=="function"?N(v):N;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=D(F):{path:F},F.params={}),de({query:v.query,hash:v.hash,params:v.params},F)}}function Y(v,M){const N=u=k(v),F=c.value,he=v.state,ye=v.force,ee=v.replace===!0,J=ue(N);if(J)return Y(de(D(J),{state:he,force:ye,replace:ee}),M||N);const d=N;d.redirectedFrom=M;let p;return!ye&&Uw(r,F,N)&&(p=kr(16,{to:d,from:F}),ir(F,F,!0,!1)),(p?Promise.resolve(p):ge(d,F)).catch(y=>en(y)?en(y,2)?y:lt(y):me(y,d,F)).then(y=>{if(y){if(en(y,2))return Y(de(D(y.to),{state:he,force:ye,replace:ee}),M||d)}else y=Ge(d,F,!0,ee,he);return We(d,F,y),y})}function _e(v,M){const N=B(v,M);return N?Promise.reject(N):Promise.resolve()}function ge(v,M){let N;const[F,he,ye]=LE(v,M);N=Ia(F.reverse(),"beforeRouteLeave",v,M);for(const J of F)J.leaveGuards.forEach(d=>{N.push(sn(d,v,M))});const ee=_e.bind(null,v,M);return N.push(ee),cr(N).then(()=>{N=[];for(const J of i.list())N.push(sn(J,v,M));return N.push(ee),cr(N)}).then(()=>{N=Ia(he,"beforeRouteUpdate",v,M);for(const J of he)J.updateGuards.forEach(d=>{N.push(sn(d,v,M))});return N.push(ee),cr(N)}).then(()=>{N=[];for(const J of v.matched)if(J.beforeEnter&&!M.matched.includes(J))if(Array.isArray(J.beforeEnter))for(const d of J.beforeEnter)N.push(sn(d,v,M));else N.push(sn(J.beforeEnter,v,M));return N.push(ee),cr(N)}).then(()=>(v.matched.forEach(J=>J.enterCallbacks={}),N=Ia(ye,"beforeRouteEnter",v,M),N.push(ee),cr(N))).then(()=>{N=[];for(const J of o.list())N.push(sn(J,v,M));return N.push(ee),cr(N)}).catch(J=>en(J,8)?J:Promise.reject(J))}function We(v,M,N){for(const F of a.list())F(v,M,N)}function Ge(v,M,N,F,he){const ye=B(v,M);if(ye)return ye;const ee=M===Zt,J=pr?history.state:{};N&&(F||ee?s.replace(v.fullPath,de({scroll:ee&&J&&J.scroll},he)):s.push(v.fullPath,he)),c.value=v,ir(v,M,N,ee),lt()}let Fe;function Qt(){Fe||(Fe=s.listen((v,M,N)=>{const F=k(v),he=ue(F);if(he){Y(de(he,{replace:!0}),F).catch(ms);return}u=F;const ye=c.value;pr&&Kw(bh(ye.fullPath,N.delta),xo()),ge(F,ye).catch(ee=>en(ee,12)?ee:en(ee,2)?(Y(ee.to,F).then(J=>{en(J,20)&&!N.delta&&N.type===Ps.pop&&s.go(-1,!1)}).catch(ms),Promise.reject()):(N.delta&&s.go(-N.delta,!1),me(ee,F,ye))).then(ee=>{ee=ee||Ge(F,ye,!1),ee&&(N.delta?s.go(-N.delta,!1):N.type===Ps.pop&&en(ee,20)&&s.go(-1,!1)),We(F,ye,ee)}).catch(ms)}))}let rr=rs(),sr=rs(),Ne;function me(v,M,N){lt(v);const F=sr.list();return F.length?F.forEach(he=>he(v,M,N)):console.error(v),Promise.reject(v)}function le(){return Ne&&c.value!==Zt?Promise.resolve():new Promise((v,M)=>{rr.add([v,M])})}function lt(v){return Ne||(Ne=!v,Qt(),rr.list().forEach(([M,N])=>v?N(v):M()),rr.reset()),v}function ir(v,M,N,F){const{scrollBehavior:he}=t;if(!pr||!he)return Promise.resolve();const ye=!N&&zw(bh(v.fullPath,0))||(F||!N)&&history.state&&history.state.scroll||null;return kd().then(()=>he(v,M,ye)).then(ee=>ee&&qw(ee)).catch(ee=>me(ee,v,M))}const Vt=v=>s.go(v);let kt;const yt=new Set;return{currentRoute:c,addRoute:g,removeRoute:m,hasRoute:_,getRoutes:b,resolve:k,options:t,push:L,replace:se,go:Vt,back:()=>Vt(-1),forward:()=>Vt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:sr.add,isReady:le,install(v){const M=this;v.component("RouterLink",NE),v.component("RouterView",xE),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>fs(c)}),pr&&!kt&&c.value===Zt&&(kt=!0,L(s.location).catch(he=>{}));const N={};for(const he in Zt)N[he]=Dt(()=>c.value[he]);v.provide(pu,M),v.provide(cp,jr(N)),v.provide(dc,c);const F=v.unmount;yt.add(v),v.unmount=function(){yt.delete(v),yt.size<1&&(u=Zt,Fe&&Fe(),Fe=null,c.value=Zt,kt=!1,Ne=!1),F()}}}}function cr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function LE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ar(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ar(u,c))||s.push(c))}return[n,r,s]}/**
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
 *//**
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
 */const _p=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},UE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},wp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(f=64)),r.push(n[l],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_p(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},FE=function(t){const e=_p(t);return wp.encodeByteArray(e,!0)},Ep=function(t){return FE(t).replace(/\./g,"")},BE=function(t){try{return wp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class VE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Me(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bp(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function Tp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ip(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $E(){return Me().indexOf("Electron/")>=0}function Sp(){const t=Me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jE(){return Me().indexOf("MSAppHost/")>=0}function HE(){return typeof indexedDB=="object"}function qE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const KE="FirebaseError";class En extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KE,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qs.prototype.create)}}class Qs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?zE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new En(s,a,r)}}function zE(t,e){return t.replace(WE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const WE=/\{\$([^}]+)}/g;function GE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Dh(i)&&Dh(o)){if(!Zi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Dh(t){return t!==null&&typeof t=="object"}/**
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
 */function Js(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function us(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function XE(t,e){const n=new YE(t,e);return n.subscribe.bind(n)}class YE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");QE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Sa),s.error===void 0&&(s.error=Sa),s.complete===void 0&&(s.complete=Sa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sa(){}/**
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
 */function ke(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const An="[DEFAULT]";/**
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
 */class JE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new VE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eb(e))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=An){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=An){return this.instances.has(e)}getOptions(e=An){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ZE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=An){return this.component?this.component.multipleInstances?e:An:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ZE(t){return t===An?void 0:t}function eb(t){return t.instantiationMode==="EAGER"}/**
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
 */class tb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const nb={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},rb=ie.INFO,sb={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},ib=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=sb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mu{constructor(e){this.name=e,this._logLevel=rb,this._logHandler=ib,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const ob=(t,e)=>e.some(n=>t instanceof n);let xh,Mh;function ab(){return xh||(xh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cb(){return Mh||(Mh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cp=new WeakMap,mc=new WeakMap,Ap=new WeakMap,Ca=new WeakMap,yu=new WeakMap;function ub(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(pn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cp.set(n,t)}).catch(()=>{}),yu.set(e,t),e}function lb(t){if(mc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});mc.set(t,e)}let yc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ap.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hb(t){yc=t(yc)}function fb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Aa(this),e,...n);return Ap.set(r,e.sort?e.sort():[e]),pn(r)}:cb().includes(t)?function(...e){return t.apply(Aa(this),e),pn(Cp.get(this))}:function(...e){return pn(t.apply(Aa(this),e))}}function db(t){return typeof t=="function"?fb(t):(t instanceof IDBTransaction&&lb(t),ob(t,ab())?new Proxy(t,yc):t)}function pn(t){if(t instanceof IDBRequest)return ub(t);if(Ca.has(t))return Ca.get(t);const e=db(t);return e!==t&&(Ca.set(t,e),yu.set(e,t)),e}const Aa=t=>yu.get(t);function pb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=pn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(pn(o.result),c.oldVersion,c.newVersion,pn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const gb=["get","getKey","getAll","getAllKeys","count"],mb=["put","add","delete","clear"],ka=new Map;function Lh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ka.get(e))return ka.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=mb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||gb.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return ka.set(e,i),i}hb(t=>Bl(Fl({},t),{get:(e,n,r)=>Lh(e,n)||t.get(e,n,r),has:(e,n)=>!!Lh(e,n)||t.has(e,n)}));/**
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
 */class yb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vc="@firebase/app",Uh="0.7.24";/**
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
 */const vu=new mu("@firebase/app"),_b="@firebase/app-compat",wb="@firebase/analytics-compat",Eb="@firebase/analytics",bb="@firebase/app-check-compat",Tb="@firebase/app-check",Ib="@firebase/auth",Sb="@firebase/auth-compat",Cb="@firebase/database",Ab="@firebase/database-compat",kb="@firebase/functions",Rb="@firebase/functions-compat",Nb="@firebase/installations",Ob="@firebase/installations-compat",Pb="@firebase/messaging",Db="@firebase/messaging-compat",xb="@firebase/performance",Mb="@firebase/performance-compat",Lb="@firebase/remote-config",Ub="@firebase/remote-config-compat",Fb="@firebase/storage",Bb="@firebase/storage-compat",Vb="@firebase/firestore",$b="@firebase/firestore-compat",jb="firebase",Hb="9.8.1";/**
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
 */const kp="[DEFAULT]",qb={[vc]:"fire-core",[_b]:"fire-core-compat",[Eb]:"fire-analytics",[wb]:"fire-analytics-compat",[Tb]:"fire-app-check",[bb]:"fire-app-check-compat",[Ib]:"fire-auth",[Sb]:"fire-auth-compat",[Cb]:"fire-rtdb",[Ab]:"fire-rtdb-compat",[kb]:"fire-fn",[Rb]:"fire-fn-compat",[Nb]:"fire-iid",[Ob]:"fire-iid-compat",[Pb]:"fire-fcm",[Db]:"fire-fcm-compat",[xb]:"fire-perf",[Mb]:"fire-perf-compat",[Lb]:"fire-rc",[Ub]:"fire-rc-compat",[Fb]:"fire-gcs",[Bb]:"fire-gcs-compat",[Vb]:"fire-fst",[$b]:"fire-fst-compat","fire-js":"fire-js",[jb]:"fire-js-all"};/**
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
 */const eo=new Map,_c=new Map;function Kb(t,e){try{t.container.addComponent(e)}catch(n){vu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if(_c.has(e))return vu.debug(`There were multiple attempts to register component ${e}.`),!1;_c.set(e,t);for(const n of eo.values())Kb(n,t);return!0}function Mo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const zb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},jn=new Qs("app","Firebase",zb);/**
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
 */class Wb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
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
 */const qr=Hb;function Gb(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:kp,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw jn.create("bad-app-name",{appName:String(r)});const s=eo.get(r);if(s){if(Zi(t,s.options)&&Zi(n,s.config))return s;throw jn.create("duplicate-app",{appName:r})}const i=new tb(r);for(const a of _c.values())i.addComponent(a);const o=new Wb(t,n,i);return eo.set(r,o),o}function _u(t=kp){const e=eo.get(t);if(!e)throw jn.create("no-app",{appName:t});return e}function Mt(t,e,n){var r;let s=(r=qb[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vu.warn(a.join(" "));return}$n(new yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Xb="firebase-heartbeat-database",Yb=1,Ds="firebase-heartbeat-store";let Ra=null;function Rp(){return Ra||(Ra=pb(Xb,Yb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ds)}}}).catch(t=>{throw jn.create("storage-open",{originalErrorMessage:t.message})})),Ra}async function Qb(t){try{return(await Rp()).transaction(Ds).objectStore(Ds).get(Np(t))}catch(e){throw jn.create("storage-get",{originalErrorMessage:e.message})}}async function Fh(t,e){try{const r=(await Rp()).transaction(Ds,"readwrite");return await r.objectStore(Ds).put(e,Np(t)),r.done}catch(n){throw jn.create("storage-set",{originalErrorMessage:n.message})}}function Np(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Jb=1024,Zb=30*24*60*60*1e3;class e0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new n0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Zb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bh(),{heartbeatsToSend:n,unsentEntries:r}=t0(this._heartbeatsCache.heartbeats),s=Ep(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Bh(){return new Date().toISOString().substring(0,10)}function t0(t,e=Jb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Vh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Vh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class n0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return HE()?qE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Qb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vh(t){return Ep(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function r0(t){$n(new yn("platform-logger",e=>new yb(e),"PRIVATE")),$n(new yn("heartbeat",e=>new e0(e),"PRIVATE")),Mt(vc,Uh,t),Mt(vc,Uh,"esm2017"),Mt("fire-js","")}r0("");var s0="firebase",i0="9.8.1";/**
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
 */Mt(s0,i0,"app");function wu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Op(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const o0=Op,Pp=new Qs("auth","Firebase",Op());/**
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
 */const $h=new mu("@firebase/auth");function Ui(t,...e){$h.logLevel<=ie.ERROR&&$h.error(`Auth (${qr}): ${t}`,...e)}/**
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
 */function Ct(t,...e){throw Eu(t,...e)}function Lt(t,...e){return Eu(t,...e)}function a0(t,e,n){const r=Object.assign(Object.assign({},o0()),{[e]:n});return new Qs("auth","Firebase",r).create(e,{appName:t.name})}function Eu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Pp.create(t,...e)}function q(t,e,...n){if(!t)throw Eu(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ui(e),new Error(e)}function Gt(t,e){t||jt(e)}/**
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
 */const jh=new Map;function Ht(t){Gt(t instanceof Function,"Expected a class definition");let e=jh.get(t);return e?(Gt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jh.set(t,e),e)}/**
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
 */function c0(t,e){const n=Mo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Zi(i,e!=null?e:{}))return s;Ct(s,"already-initialized")}return n.initialize({options:e})}function u0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function wc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function l0(){return Hh()==="http:"||Hh()==="https:"}function Hh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function h0(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(l0()||Tp()||"connection"in navigator)?navigator.onLine:!0}function f0(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Zs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gt(n>e,"Short delay should be less than long delay!"),this.isMobile=bp()||Ip()}get(){return h0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bu(t,e){Gt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Dp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const d0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const p0=new Zs(3e4,6e4);function ei(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kr(t,e,n,r,s={}){return xp(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Js(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Dp.fetch()(Mp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function xp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},d0),e);try{const s=new g0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Na(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Na(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Na(t,"email-already-in-use",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw a0(t,l,u);Ct(t,l)}}catch(s){if(s instanceof En)throw s;Ct(t,"network-request-failed")}}async function ti(t,e,n,r,s={}){const i=await Kr(t,e,n,r,s);return"mfaPendingCredential"in i&&Ct(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Mp(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?bu(t.config,s):`${t.config.apiScheme}://${s}`}class g0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),p0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Na(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Lt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function m0(t,e){return Kr(t,"POST","/v1/accounts:delete",e)}async function y0(t,e){return Kr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function vs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function v0(t,e=!1){const n=ke(t),r=await n.getIdToken(e),s=Tu(r);q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:vs(Oa(s.auth_time)),issuedAtTime:vs(Oa(s.iat)),expirationTime:vs(Oa(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Oa(t){return Number(t)*1e3}function Tu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ui("JWT malformed, contained fewer than 3 sections"),null;try{const s=BE(n);return s?JSON.parse(s):(Ui("Failed to decode base64 JWT payload"),null)}catch(s){return Ui("Caught error parsing JWT payload as JSON",s),null}}function _0(t){const e=Tu(t);return q(e,"internal-error"),q(typeof e.exp!="undefined","internal-error"),q(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof En&&w0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function w0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class E0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vs(this.lastLoginAt),this.creationTime=vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function to(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Rr(t,y0(n,{idToken:r}));q(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?I0(i.providerUserInfo):[],a=T0(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Lp(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function b0(t){const e=ke(t);await to(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function T0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function I0(t){return t.map(e=>{var{providerId:n}=e,r=wu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function S0(t,e){const n=await xp(t,{},async()=>{const r=Js({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Mp(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Dp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken!="undefined","internal-error"),q(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):_0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await S0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new xs;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xs,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
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
 */function tn(t,e){q(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Ln{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=wu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new E0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Lp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Rr(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return v0(this,e)}reload(){return b0(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await to(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Rr(this,m0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(u=n.createdAt)!==null&&u!==void 0?u:void 0,D=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:B,emailVerified:L,isAnonymous:se,providerData:ue,stsTokenManager:Y}=n;q(B&&Y,e,"internal-error");const _e=xs.fromJSON(this.name,Y);q(typeof B=="string",e,"internal-error"),tn(h,e.name),tn(f,e.name),q(typeof L=="boolean",e,"internal-error"),q(typeof se=="boolean",e,"internal-error"),tn(g,e.name),tn(m,e.name),tn(b,e.name),tn(_,e.name),tn(k,e.name),tn(D,e.name);const ge=new Ln({uid:B,auth:e,email:f,emailVerified:L,displayName:h,isAnonymous:se,photoURL:m,phoneNumber:g,tenantId:b,stsTokenManager:_e,createdAt:k,lastLoginAt:D});return ue&&Array.isArray(ue)&&(ge.providerData=ue.map(We=>Object.assign({},We))),_&&(ge._redirectEventId=_),ge}static async _fromIdTokenResponse(e,n,r=!1){const s=new xs;s.updateFromServerResponse(n);const i=new Ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await to(i),i}}/**
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
 */class Up{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Up.type="NONE";const qh=Up;/**
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
 */function Fi(t,e,n){return`firebase:${t}:${e}:${n}`}class br{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Fi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new br(Ht(qh),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ht(qh);const o=Fi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Ln._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new br(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new br(i,e,r))}}/**
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
 */function Kh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jp(e))return"Blackberry";if(Hp(e))return"Webos";if(Iu(e))return"Safari";if((e.includes("chrome/")||Bp(e))&&!e.includes("edge/"))return"Chrome";if($p(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fp(t=Me()){return/firefox\//i.test(t)}function Iu(t=Me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bp(t=Me()){return/crios\//i.test(t)}function Vp(t=Me()){return/iemobile/i.test(t)}function $p(t=Me()){return/android/i.test(t)}function jp(t=Me()){return/blackberry/i.test(t)}function Hp(t=Me()){return/webos/i.test(t)}function Lo(t=Me()){return/iphone|ipad|ipod/i.test(t)}function C0(t=Me()){var e;return Lo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function A0(){return Sp()&&document.documentMode===10}function qp(t=Me()){return Lo(t)||$p(t)||Hp(t)||jp(t)||/windows phone/i.test(t)||Vp(t)}function k0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Kp(t,e=[]){let n;switch(t){case"Browser":n=Kh(Me());break;case"Worker":n=`${Kh(Me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r.message})}}}/**
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
 */class N0{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zh(this),this.idTokenSubscription=new zh(this),this.beforeStateQueue=new R0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await br.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await to(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=f0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ke(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await br.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Uo(t){return ke(t)}class zh{constructor(e){this.auth=e,this.observer=null,this.addObserver=XE(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Su{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function O0(t,e){return Kr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function P0(t,e){return ti(t,"POST","/v1/accounts:signInWithPassword",ei(t,e))}/**
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
 */async function D0(t,e){return ti(t,"POST","/v1/accounts:signInWithEmailLink",ei(t,e))}async function x0(t,e){return ti(t,"POST","/v1/accounts:signInWithEmailLink",ei(t,e))}/**
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
 */class Ms extends Su{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ms(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ms(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return P0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return D0(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return O0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return x0(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Tr(t,e){return ti(t,"POST","/v1/accounts:signInWithIdp",ei(t,e))}/**
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
 */const M0="http://localhost";class Hn extends Su{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=wu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Hn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Tr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Tr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Tr(e,n)}buildRequest(){const e={requestUri:M0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Js(n)}return e}}/**
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
 */function L0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function U0(t){const e=cs(us(t)).link,n=e?cs(us(e)).deep_link_id:null,r=cs(us(t)).deep_link_id;return(r?cs(us(r)).link:null)||r||n||e||t}class Cu{constructor(e){var n,r,s,i,o,a;const c=cs(us(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=L0((s=c.mode)!==null&&s!==void 0?s:null);q(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=U0(e);try{return new Cu(n)}catch{return null}}}/**
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
 */class zr{constructor(){this.providerId=zr.PROVIDER_ID}static credential(e,n){return Ms._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cu.parseLink(n);return q(r,"argument-error"),Ms._fromEmailAndCode(e,r.code,r.tenantId)}}zr.PROVIDER_ID="password";zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class zp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ni extends zp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class on extends ni{constructor(){super("facebook.com")}static credential(e){return Hn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.FACEBOOK_SIGN_IN_METHOD="facebook.com";on.PROVIDER_ID="facebook.com";/**
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
 */class an extends ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return an.credential(n,r)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
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
 */class cn extends ni{constructor(){super("github.com")}static credential(e){return Hn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.GITHUB_SIGN_IN_METHOD="github.com";cn.PROVIDER_ID="github.com";/**
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
 */class un extends ni{constructor(){super("twitter.com")}static credential(e,n){return Hn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return un.credential(n,r)}catch{return null}}}un.TWITTER_SIGN_IN_METHOD="twitter.com";un.PROVIDER_ID="twitter.com";/**
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
 */async function F0(t,e){return ti(t,"POST","/v1/accounts:signUp",ei(t,e))}/**
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
 */class qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ln._fromIdTokenResponse(e,r,s),o=Wh(r);return new qn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Wh(r);return new qn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Wh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class no extends En{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,no.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new no(e,n,r,s)}}function Wp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?no._fromErrorAndOperation(t,i,e,r):i})}async function B0(t,e,n=!1){const r=await Rr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qn._forOperation(t,"link",r)}/**
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
 */async function V0(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Rr(t,Wp(r,s,e,t),n);q(i.idToken,r,"internal-error");const o=Tu(i.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(t.uid===a,r,"user-mismatch"),qn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ct(r,"user-mismatch"),i}}/**
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
 */async function Gp(t,e,n=!1){const r="signIn",s=await Wp(t,r,e),i=await qn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function $0(t,e){return Gp(Uo(t),e)}async function v1(t,e,n){const r=Uo(t),s=await F0(r,{returnSecureToken:!0,email:e,password:n}),i=await qn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function j0(t,e,n){return $0(ke(t),zr.credential(e,n))}/**
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
 */async function H0(t,e){return Kr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function _1(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ke(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Rr(r,H0(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Fo(t,e,n,r){return ke(t).onAuthStateChanged(e,n,r)}function w1(t){return ke(t).signOut()}const ro="__sak";/**
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
 */class Xp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ro,"1"),this.storage.removeItem(ro),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function q0(){const t=Me();return Iu(t)||Lo(t)}const K0=1e3,z0=10;class Yp extends Xp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=q0()&&k0(),this.fallbackToPolling=qp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);A0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,z0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},K0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yp.type="LOCAL";const W0=Yp;/**
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
 */class Qp extends Xp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qp.type="SESSION";const Jp=Qp;/**
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
 */function G0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Bo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await G0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bo.receivers=[];/**
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
 */function Au(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class X0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Au("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ut(){return window}function Y0(t){Ut().location.href=t}/**
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
 */function Zp(){return typeof Ut().WorkerGlobalScope!="undefined"&&typeof Ut().importScripts=="function"}async function Q0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function J0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Z0(){return Zp()?self:null}/**
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
 */const eg="firebaseLocalStorageDb",eT=1,so="firebaseLocalStorage",tg="fbase_key";class ri{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vo(t,e){return t.transaction([so],e?"readwrite":"readonly").objectStore(so)}function tT(){const t=indexedDB.deleteDatabase(eg);return new ri(t).toPromise()}function Ec(){const t=indexedDB.open(eg,eT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(so,{keyPath:tg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(so)?e(r):(r.close(),await tT(),e(await Ec()))})})}async function Gh(t,e,n){const r=Vo(t,!0).put({[tg]:e,value:n});return new ri(r).toPromise()}async function nT(t,e){const n=Vo(t,!1).get(e),r=await new ri(n).toPromise();return r===void 0?null:r.value}function Xh(t,e){const n=Vo(t,!0).delete(e);return new ri(n).toPromise()}const rT=800,sT=3;class ng{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ec(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bo._getInstance(Z0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Q0(),!this.activeServiceWorker)return;this.sender=new X0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||J0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ec();return await Gh(e,ro,"1"),await Xh(e,ro),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Vo(s,!1).getAll();return new ri(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ng.type="LOCAL";const iT=ng;/**
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
 */function oT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function aT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Lt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",oT().appendChild(r)})}function cT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Zs(3e4,6e4);/**
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
 */function uT(t,e){return e?Ht(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ku extends Su{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Tr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lT(t){return Gp(t.auth,new ku(t),t.bypassAuthState)}function hT(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),V0(n,new ku(t),t.bypassAuthState)}async function fT(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),B0(n,new ku(t),t.bypassAuthState)}/**
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
 */class rg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lT;case"linkViaPopup":case"linkViaRedirect":return fT;case"reauthViaPopup":case"reauthViaRedirect":return hT;default:Ct(this.auth,"internal-error")}}resolve(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dT=new Zs(2e3,1e4);class gr extends rg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gr.currentPopupAction&&gr.currentPopupAction.cancel(),gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Gt(this.filter.length===1,"Popup operations only handle one event");const e=Au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,dT.get())};e()}}gr.currentPopupAction=null;/**
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
 */const pT="pendingRedirect",Bi=new Map;class gT extends rg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bi.get(this.auth._key());if(!e){try{const r=await mT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bi.set(this.auth._key(),e)}return this.bypassAuthState||Bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mT(t,e){const n=_T(e),r=vT(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function yT(t,e){Bi.set(t._key(),e)}function vT(t){return Ht(t._redirectPersistence)}function _T(t){return Fi(pT,t.config.apiKey,t.name)}async function wT(t,e,n=!1){const r=Uo(t),s=uT(r,e),o=await new gT(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ET=10*60*1e3;class bT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ET&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yh(e))}saveEventToCache(e){this.cachedEventUids.add(Yh(e)),this.lastProcessedEventTime=Date.now()}}function Yh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sg(t);default:return!1}}/**
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
 */async function IT(t,e={}){return Kr(t,"GET","/v1/projects",e)}/**
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
 */const ST=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CT=/^https?/;async function AT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await IT(t);for(const n of e)try{if(kT(n))return}catch{}Ct(t,"unauthorized-domain")}function kT(t){const e=wc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!CT.test(n))return!1;if(ST.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const RT=new Zs(3e4,6e4);function Qh(){const t=Ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NT(t){return new Promise((e,n)=>{var r,s,i;function o(){Qh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qh(),n(Lt(t,"network-request-failed"))},timeout:RT.get()})}if(!((s=(r=Ut().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ut().gapi)===null||i===void 0)&&i.load)o();else{const a=cT("iframefcb");return Ut()[a]=()=>{gapi.load?o():n(Lt(t,"network-request-failed"))},aT(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Vi=null,e})}let Vi=null;function OT(t){return Vi=Vi||NT(t),Vi}/**
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
 */const PT=new Zs(5e3,15e3),DT="__/auth/iframe",xT="emulator/auth/iframe",MT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UT(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bu(e,xT):`https://${t.config.authDomain}/${DT}`,r={apiKey:e.apiKey,appName:t.name,v:qr},s=LT.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Js(r).slice(1)}`}async function FT(t){const e=await OT(t),n=Ut().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:UT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),a=Ut().setTimeout(()=>{i(o)},PT.get());function c(){Ut().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const BT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VT=500,$T=600,jT="_blank",HT="http://localhost";class Jh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qT(t,e,n,r=VT,s=$T){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},BT),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Me().toLowerCase();n&&(a=Bp(u)?jT:n),Fp(u)&&(e=e||HT,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[g,m])=>`${f}${g}=${m},`,"");if(C0(u)&&a!=="_self")return KT(e||"",a),new Jh(null);const h=window.open(e||"",a,l);q(h,t,"popup-blocked");try{h.focus()}catch{}return new Jh(h)}function KT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const zT="__/auth/handler",WT="emulator/auth/handler";function Zh(t,e,n,r,s,i){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qr,eventId:s};if(e instanceof zp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",GE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof ni){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${GT(t)}?${Js(a).slice(1)}`}function GT({config:t}){return t.emulator?bu(t,WT):`https://${t.authDomain}/${zT}`}/**
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
 */const Pa="webStorageSupport";class XT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jp,this._completeRedirectFn=wT,this._overrideRedirectResult=yT}async _openPopup(e,n,r,s){var i;Gt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Zh(e,n,r,wc(),s);return qT(e,o,Au())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Y0(Zh(e,n,r,wc(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Gt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await FT(e),r=new bT(e);return n.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pa,{type:Pa},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Pa];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qp()||Iu()||Lo()}}const YT=XT;var ef="@firebase/auth",tf="0.20.1";/**
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
 */class QT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function JT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ZT(t){$n(new yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{q(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kp(t)},l=new N0(a,c,u);return u0(l,n),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$n(new yn("auth-internal",e=>{const n=Uo(e.getProvider("auth").getImmediate());return(r=>new QT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(ef,tf,JT(t)),Mt(ef,tf,"esm2017")}/**
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
 */function eI(t=_u()){const e=Mo(t,"auth");return e.isInitialized()?e.getImmediate():c0(t,{popupRedirectResolver:YT,persistence:[iT,W0,Jp]})}ZT("Browser");var tI=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},P,Ru=Ru||{},K=tI||self;function io(){}function bc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function si(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function nI(t){return Object.prototype.hasOwnProperty.call(t,Da)&&t[Da]||(t[Da]=++rI)}var Da="closure_uid_"+(1e9*Math.random()>>>0),rI=0;function sI(t,e,n){return t.call.apply(t.bind,arguments)}function iI(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function $e(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$e=sI:$e=iI,$e.apply(null,arguments)}function Ti(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function bn(){this.s=this.s,this.o=this.o}var oI=0,aI={};bn.prototype.s=!1;bn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),oI!=0)){var t=nI(this);delete aI[t]}};bn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ig=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},og=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function cI(t){e:{var e=ZI;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function nf(t){return Array.prototype.concat.apply([],arguments)}function Nu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function oo(t){return/^[\s\xa0]*$/.test(t)}var rf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function tt(t,e){return t.indexOf(e)!=-1}function xa(t,e){return t<e?-1:t>e?1:0}var nt;e:{var sf=K.navigator;if(sf){var of=sf.userAgent;if(of){nt=of;break e}}nt=""}function Ou(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function ag(t){const e={};for(const n in t)e[n]=t[n];return e}var af="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<af.length;i++)n=af[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Pu(t){return Pu[" "](t),t}Pu[" "]=io;function uI(t){var e=fI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var lI=tt(nt,"Opera"),Nr=tt(nt,"Trident")||tt(nt,"MSIE"),ug=tt(nt,"Edge"),Tc=ug||Nr,lg=tt(nt,"Gecko")&&!(tt(nt.toLowerCase(),"webkit")&&!tt(nt,"Edge"))&&!(tt(nt,"Trident")||tt(nt,"MSIE"))&&!tt(nt,"Edge"),hI=tt(nt.toLowerCase(),"webkit")&&!tt(nt,"Edge");function hg(){var t=K.document;return t?t.documentMode:void 0}var ao;e:{var Ma="",La=function(){var t=nt;if(lg)return/rv:([^\);]+)(\)|;)/.exec(t);if(ug)return/Edge\/([\d\.]+)/.exec(t);if(Nr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hI)return/WebKit\/(\S+)/.exec(t);if(lI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(La&&(Ma=La?La[1]:""),Nr){var Ua=hg();if(Ua!=null&&Ua>parseFloat(Ma)){ao=String(Ua);break e}}ao=Ma}var fI={};function dI(){return uI(function(){let t=0;const e=rf(String(ao)).split("."),n=rf("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=xa(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||xa(s[2].length==0,i[2].length==0)||xa(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Ic;if(K.document&&Nr){var cf=hg();Ic=cf||parseInt(ao,10)||void 0}else Ic=void 0;var pI=Ic,gI=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",io,e),K.removeEventListener("test",io,e)}catch{}return t}();function Ye(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};function Ls(t,e){if(Ye.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(lg){e:{try{Pu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:mI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ls.Z.h.call(this)}}ze(Ls,Ye);var mI={2:"touch",3:"pen",4:"mouse"};Ls.prototype.h=function(){Ls.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ii="closure_listenable_"+(1e6*Math.random()|0),yI=0;function vI(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++yI,this.ca=this.fa=!1}function $o(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function jo(t){this.src=t,this.g={},this.h=0}jo.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Cc(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new vI(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function Sc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=ig(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&($o(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Cc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var Du="closure_lm_"+(1e6*Math.random()|0),Fa={};function fg(t,e,n,r,s){if(r&&r.once)return pg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)fg(t,e[i],n,r,s);return null}return n=Lu(n),t&&t[ii]?t.N(e,n,si(r)?!!r.capture:!!r,s):dg(t,e,n,!1,r,s)}function dg(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=si(s)?!!s.capture:!!s,a=Mu(t);if(a||(t[Du]=a=new jo(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=_I(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)gI||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(mg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _I(){function t(n){return e.call(t.src,t.listener,n)}var e=wI;return t}function pg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)pg(t,e[i],n,r,s);return null}return n=Lu(n),t&&t[ii]?t.O(e,n,si(r)?!!r.capture:!!r,s):dg(t,e,n,!0,r,s)}function gg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)gg(t,e[i],n,r,s);else r=si(r)?!!r.capture:!!r,n=Lu(n),t&&t[ii]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Cc(i,n,r,s),-1<n&&($o(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Mu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Cc(e,n,r,s)),(n=-1<t?e[t]:null)&&xu(n))}function xu(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ii])Sc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Mu(e))?(Sc(n,t),n.h==0&&(n.src=null,e[Du]=null)):$o(t)}}}function mg(t){return t in Fa?Fa[t]:Fa[t]="on"+t}function wI(t,e){if(t.ca)t=!0;else{e=new Ls(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&xu(t),t=n.call(r,e)}return t}function Mu(t){return t=t[Du],t instanceof jo?t:null}var Ba="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lu(t){return typeof t=="function"?t:(t[Ba]||(t[Ba]=function(e){return t.handleEvent(e)}),t[Ba])}function Le(){bn.call(this),this.i=new jo(this),this.P=this,this.I=null}ze(Le,bn);Le.prototype[ii]=!0;Le.prototype.removeEventListener=function(t,e,n,r){gg(this,t,e,n,r)};function je(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ye(e,t);else if(e instanceof Ye)e.target=e.target||t;else{var s=e;e=new Ye(r,t),cg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ii(o,r,!0,e)&&s}if(o=e.g=t,s=Ii(o,r,!0,e)&&s,s=Ii(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ii(o,r,!1,e)&&s}Le.prototype.M=function(){if(Le.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)$o(n[r]);delete t.g[e],t.h--}}this.I=null};Le.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Le.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ii(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Sc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Uu=K.JSON.stringify;function EI(){var t=vg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class bI{constructor(){this.h=this.g=null}add(e,n){const r=yg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var yg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new TI,t=>t.reset());class TI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function II(t){K.setTimeout(()=>{throw t},0)}function Fu(t,e){Ac||SI(),kc||(Ac(),kc=!0),vg.add(t,e)}var Ac;function SI(){var t=K.Promise.resolve(void 0);Ac=function(){t.then(CI)}}var kc=!1,vg=new bI;function CI(){for(var t;t=EI();){try{t.h.call(t.g)}catch(n){II(n)}var e=yg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}kc=!1}function Ho(t,e){Le.call(this),this.h=t||1,this.g=e||K,this.j=$e(this.kb,this),this.l=Date.now()}ze(Ho,Le);P=Ho.prototype;P.da=!1;P.S=null;P.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),je(this,"tick"),this.da&&(Bu(this),this.start()))}};P.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Bu(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}P.M=function(){Ho.Z.M.call(this),Bu(this),delete this.g};function Vu(t,e,n){if(typeof t=="function")n&&(t=$e(t,n));else if(t&&typeof t.handleEvent=="function")t=$e(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function _g(t){t.g=Vu(()=>{t.g=null,t.i&&(t.i=!1,_g(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class AI extends bn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:_g(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Us(t){bn.call(this),this.h=t,this.g={}}ze(Us,bn);var uf=[];function wg(t,e,n,r){Array.isArray(n)||(n&&(uf[0]=n.toString()),n=uf);for(var s=0;s<n.length;s++){var i=fg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Eg(t){Ou(t.g,function(e,n){this.g.hasOwnProperty(n)&&xu(e)},t),t.g={}}Us.prototype.M=function(){Us.Z.M.call(this),Eg(this)};Us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qo(){this.g=!0}qo.prototype.Aa=function(){this.g=!1};function kI(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function RI(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function mr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+OI(t,n)+(r?" "+r:"")})}function NI(t,e){t.info(function(){return"TIMEOUT: "+e})}qo.prototype.info=function(){};function OI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Uu(n)}catch{return e}}var Zn={},lf=null;function Ko(){return lf=lf||new Le}Zn.Ma="serverreachability";function bg(t){Ye.call(this,Zn.Ma,t)}ze(bg,Ye);function Fs(t){const e=Ko();je(e,new bg(e,t))}Zn.STAT_EVENT="statevent";function Tg(t,e){Ye.call(this,Zn.STAT_EVENT,t),this.stat=e}ze(Tg,Ye);function rt(t){const e=Ko();je(e,new Tg(e,t))}Zn.Na="timingevent";function Ig(t,e){Ye.call(this,Zn.Na,t),this.size=e}ze(Ig,Ye);function oi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var zo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Sg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function $u(){}$u.prototype.h=null;function hf(t){return t.h||(t.h=t.i())}function Cg(){}var ai={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ju(){Ye.call(this,"d")}ze(ju,Ye);function Hu(){Ye.call(this,"c")}ze(Hu,Ye);var Rc;function Wo(){}ze(Wo,$u);Wo.prototype.g=function(){return new XMLHttpRequest};Wo.prototype.i=function(){return{}};Rc=new Wo;function ci(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Us(this),this.P=PI,t=Tc?125:void 0,this.W=new Ho(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ag}function Ag(){this.i=null,this.g="",this.h=!1}var PI=45e3,Nc={},co={};P=ci.prototype;P.setTimeout=function(t){this.P=t};function Oc(t,e,n){t.K=1,t.v=Xo(Xt(e)),t.s=n,t.U=!0,kg(t,null)}function kg(t,e){t.F=Date.now(),ui(t),t.A=Xt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Mg(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ag,t.g=tm(t.l,n?e:null,!t.s),0<t.O&&(t.L=new AI($e(t.Ia,t,t.g),t.O)),wg(t.V,t.g,"readystatechange",t.gb),e=t.H?ag(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Fs(1),kI(t.j,t.u,t.A,t.m,t.X,t.s)}P.gb=function(t){t=t.target;const e=this.L;e&&qt(t)==3?e.l():this.Ia(t)};P.Ia=function(t){try{if(t==this.g)e:{const l=qt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||Tc||this.g&&(this.h.h||this.g.ga()||gf(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Fs(3):Fs(2)),Go(this);var n=this.g.ba();this.N=n;t:if(Rg(this)){var r=gf(this.g);t="";var s=r.length,i=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){On(this),_s(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,RI(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oo(a)){var u=a;break t}}u=null}if(n=u)mr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pc(this,n);else{this.i=!1,this.o=3,rt(12),On(this),_s(this);break e}}this.U?(Ng(this,l,o),Tc&&this.i&&l==3&&(wg(this.V,this.W,"tick",this.fb),this.W.start())):(mr(this.j,this.m,o,null),Pc(this,o)),l==4&&On(this),this.i&&!this.I&&(l==4?Qg(this.l,this):(this.i=!1,ui(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),On(this),_s(this)}}}catch{}finally{}};function Rg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Ng(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=DI(t,n),s==co){e==4&&(t.o=4,rt(14),r=!1),mr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Nc){t.o=4,rt(15),mr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else mr(t.j,t.m,s,null),Pc(t,s);Rg(t)&&s!=co&&s!=Nc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,rt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ju(e),e.L=!0,rt(11))):(mr(t.j,t.m,n,"[Invalid Chunked Response]"),On(t),_s(t))}P.fb=function(){if(this.g){var t=qt(this.g),e=this.g.ga();this.C<e.length&&(Go(this),Ng(this,t,e),this.i&&t!=4&&ui(this))}};function DI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?co:(n=Number(e.substring(n,r)),isNaN(n)?Nc:(r+=1,r+n>e.length?co:(e=e.substr(r,n),t.C=r+n,e)))}P.cancel=function(){this.I=!0,On(this)};function ui(t){t.Y=Date.now()+t.P,Og(t,t.P)}function Og(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=oi($e(t.eb,t),e)}function Go(t){t.B&&(K.clearTimeout(t.B),t.B=null)}P.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(NI(this.j,this.A),this.K!=2&&(Fs(3),rt(17)),On(this),this.o=2,_s(this)):Og(this,this.Y-t)};function _s(t){t.l.G==0||t.I||Qg(t.l,t)}function On(t){Go(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Bu(t.W),Eg(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Pc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Dc(n.i,t))){if(n.I=t.N,!t.J&&Dc(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)fo(n),Jo(n);else break e;Qu(n),rt(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=oi($e(n.ab,n),6e3));if(1>=Fg(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Pn(n,11)}else if((t.J||n.g==t)&&fo(n),!oo(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;!i.g&&(tt(m,"spdy")||tt(m,"quic")||tt(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(zu(i,i.h),i.h=null))}if(r.D){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(r.sa=b,Te(r.F,r.D,b))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=em(r,r.H?r.la:null,r.W),o.J){Bg(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Go(a),ui(a)),r.g=o}else Xg(r);0<n.l.length&&Zo(n)}else u[0]!="stop"&&u[0]!="close"||Pn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Pn(n,7):Yu(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Fs(4)}catch{}}function xI(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(bc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function qu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(bc(t)||typeof t=="string")og(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(bc(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=xI(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Wr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Wr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}P=Wr.prototype;P.R=function(){Ku(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};P.T=function(){return Ku(this),this.g.concat()};function Ku(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Kn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Kn(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}P.get=function(t,e){return Kn(this.h,t)?this.h[t]:e};P.set=function(t,e){Kn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};P.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function Kn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Pg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function MI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function zn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof zn){this.g=e!==void 0?e:t.g,uo(this,t.j),this.s=t.s,lo(this,t.i),ho(this,t.m),this.l=t.l,e=t.h;var n=new Bs;n.i=e.i,e.g&&(n.g=new Wr(e.g),n.h=e.h),ff(this,n),this.o=t.o}else t&&(n=String(t).match(Pg))?(this.g=!!e,uo(this,n[1]||"",!0),this.s=ws(n[2]||""),lo(this,n[3]||"",!0),ho(this,n[4]),this.l=ws(n[5]||"",!0),ff(this,n[6]||"",!0),this.o=ws(n[7]||"")):(this.g=!!e,this.h=new Bs(null,this.g))}zn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ls(e,df,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ls(e,df,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(ls(n,n.charAt(0)=="/"?VI:BI,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ls(n,jI)),t.join("")};function Xt(t){return new zn(t)}function uo(t,e,n){t.j=n?ws(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function lo(t,e,n){t.i=n?ws(e,!0):e}function ho(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ff(t,e,n){e instanceof Bs?(t.h=e,HI(t.h,t.g)):(n||(e=ls(e,$I)),t.h=new Bs(e,t.g))}function Te(t,e,n){t.h.set(e,n)}function Xo(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function LI(t){return t instanceof zn?Xt(t):new zn(t,void 0)}function UI(t,e,n,r){var s=new zn(null,void 0);return t&&uo(s,t),e&&lo(s,e),n&&ho(s,n),r&&(s.l=r),s}function ws(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ls(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,FI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function FI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var df=/[#\/\?@]/g,BI=/[#\?:]/g,VI=/[#\?]/g,$I=/[#\?@]/g,jI=/#/g;function Bs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Tn(t){t.g||(t.g=new Wr,t.h=0,t.i&&MI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=Bs.prototype;P.add=function(t,e){Tn(this),this.i=null,t=Gr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Dg(t,e){Tn(t),e=Gr(t,e),Kn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Kn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ku(t)))}function xg(t,e){return Tn(t),e=Gr(t,e),Kn(t.g.h,e)}P.forEach=function(t,e){Tn(this),this.g.forEach(function(n,r){og(n,function(s){t.call(e,s,r,this)},this)},this)};P.T=function(){Tn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};P.R=function(t){Tn(this);var e=[];if(typeof t=="string")xg(this,t)&&(e=nf(e,this.g.get(Gr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=nf(e,t[n])}return e};P.set=function(t,e){return Tn(this),this.i=null,t=Gr(this,t),xg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Mg(t,e,n){Dg(t,e),0<n.length&&(t.i=null,t.g.set(Gr(t,e),Nu(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function Gr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function HI(t,e){e&&!t.j&&(Tn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Dg(this,r),Mg(this,s,n))},t)),t.j=e}var qI=class{constructor(t,e){this.h=t,this.g=e}};function Lg(t){this.l=t||KI,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ea&&K.g.Ea()&&K.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var KI=10;function Ug(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Fg(t){return t.h?1:t.g?t.g.size:0}function Dc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function zu(t,e){t.g?t.g.add(e):t.h=e}function Bg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Lg.prototype.cancel=function(){if(this.i=Vg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Vg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Nu(t.i)}function Wu(){}Wu.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};Wu.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function zI(){this.g=new Wu}function WI(t,e,n){const r=n||"";try{qu(t,function(s,i){let o=s;si(s)&&(o=Uu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function GI(t,e){const n=new qo;if(K.Image){const r=new Image;r.onload=Ti(Si,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ti(Si,n,r,"TestLoadImage: error",!1,e),r.onabort=Ti(Si,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ti(Si,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Si(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function li(t){this.l=t.$b||null,this.j=t.ib||!1}ze(li,$u);li.prototype.g=function(){return new Yo(this.l,this.j)};li.prototype.i=function(t){return function(){return t}}({});function Yo(t,e){Le.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Gu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Yo,Le);var Gu=0;P=Yo.prototype;P.open=function(t,e){if(this.readyState!=Gu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Vs(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hi(this)),this.readyState=Gu};P.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Vs(this)),this.g&&(this.readyState=3,Vs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof K.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$g(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function $g(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}P.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?hi(this):Vs(this),this.readyState==3&&$g(this)}};P.Ua=function(t){this.g&&(this.response=this.responseText=t,hi(this))};P.Ta=function(t){this.g&&(this.response=t,hi(this))};P.ha=function(){this.g&&hi(this)};function hi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Vs(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Vs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Yo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var XI=K.JSON.parse;function Re(t){Le.call(this),this.headers=new Wr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jg,this.K=this.L=!1}ze(Re,Le);var jg="",YI=/^https?$/i,QI=["POST","PUT"];P=Re.prototype;P.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Rc.g(),this.C=this.u?hf(this.u):hf(Rc),this.g.onreadystatechange=$e(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){pf(this,i);return}t=n||"";const s=new Wr(this.headers);r&&qu(r,function(i,o){s.set(o,i)}),r=cI(s.T()),n=K.FormData&&t instanceof K.FormData,!(0<=ig(QI,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Kg(this),0<this.B&&((this.K=JI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$e(this.pa,this)):this.A=Vu(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){pf(this,i)}};function JI(t){return Nr&&dI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function ZI(t){return t.toLowerCase()=="content-type"}P.pa=function(){typeof Ru!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,je(this,"timeout"),this.abort(8))};function pf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Hg(t),Qo(t)}function Hg(t){t.D||(t.D=!0,je(t,"complete"),je(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,je(this,"complete"),je(this,"abort"),Qo(this))};P.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qo(this,!0)),Re.Z.M.call(this)};P.Fa=function(){this.s||(this.F||this.v||this.l?qg(this):this.cb())};P.cb=function(){qg(this)};function qg(t){if(t.h&&typeof Ru!="undefined"&&(!t.C[1]||qt(t)!=4||t.ba()!=2)){if(t.v&&qt(t)==4)Vu(t.Fa,0,t);else if(je(t,"readystatechange"),qt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Pg)[1]||null;if(!s&&K.self&&K.self.location){var i=K.self.location.protocol;s=i.substr(0,i.length-1)}r=!YI.test(s?s.toLowerCase():"")}n=r}if(n)je(t,"complete"),je(t,"success");else{t.m=6;try{var o=2<qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Hg(t)}}finally{Qo(t)}}}}function Qo(t,e){if(t.g){Kg(t);const n=t.g,r=t.C[0]?io:null;t.g=null,t.C=null,e||je(t,"ready");try{n.onreadystatechange=r}catch{}}}function Kg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function qt(t){return t.g?t.g.readyState:0}P.ba=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}};P.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),XI(e)}};function gf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case jg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Da=function(){return this.m};P.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function eS(t){let e="";return Ou(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Xu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=eS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function ss(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zg(t){this.za=0,this.l=[],this.h=new qo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ss("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ss("baseRetryDelayMs",5e3,t),this.$a=ss("retryDelaySeedMs",1e4,t),this.Ya=ss("forwardChannelMaxRetries",2,t),this.ra=ss("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Lg(t&&t.concurrentRequestLimit),this.Ca=new zI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}P=zg.prototype;P.ma=8;P.G=1;function Yu(t){if(Wg(t),t.G==3){var e=t.V++,n=Xt(t.F);Te(n,"SID",t.J),Te(n,"RID",e),Te(n,"TYPE","terminate"),fi(t,n),e=new ci(t,t.h,e,void 0),e.K=2,e.v=Xo(Xt(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=tm(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ui(e)}Zg(t)}P.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Jo(t){t.g&&(Ju(t),t.g.cancel(),t.g=null)}function Wg(t){Jo(t),t.u&&(K.clearTimeout(t.u),t.u=null),fo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Va(t,e){t.l.push(new qI(t.Za++,e)),t.G==3&&Zo(t)}function Zo(t){Ug(t.i)||t.m||(t.m=!0,Fu(t.Ha,t),t.C=0)}function tS(t,e){return Fg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=oi($e(t.Ha,t,e),Jg(t,t.C)),t.C++,!0)}P.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new ci(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=ag(i),cg(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Gg(this,s,e),n=Xt(this.F),Te(n,"RID",t),Te(n,"CVER",22),this.D&&Te(n,"X-HTTP-Session-Id",this.D),fi(this,n),this.o&&i&&Xu(n,this.o,i),zu(this.i,s),this.Ra&&Te(n,"TYPE","init"),this.ja?(Te(n,"$req",e),Te(n,"SID","null"),s.$=!0,Oc(s,n,null)):Oc(s,n,e),this.G=2}}else this.G==3&&(t?mf(this,t):this.l.length==0||Ug(this.i)||mf(this))};function mf(t,e){var n;e?n=e.m:n=t.V++;const r=Xt(t.F);Te(r,"SID",t.J),Te(r,"RID",n),Te(r,"AID",t.U),fi(t,r),t.o&&t.s&&Xu(r,t.o,t.s),n=new ci(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Gg(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),zu(t.i,n),Oc(n,r,e)}function fi(t,e){t.j&&qu({},function(n,r){Te(e,r,n)})}function Gg(t,e,n){n=Math.min(t.l.length,n);var r=t.j?$e(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{WI(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Xg(t){t.g||t.u||(t.Y=1,Fu(t.Ga,t),t.A=0)}function Qu(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=oi($e(t.Ga,t),Jg(t,t.A)),t.A++,!0)}P.Ga=function(){if(this.u=null,Yg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=oi($e(this.bb,this),t)}};P.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,rt(10),Jo(this),Yg(this))};function Ju(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function Yg(t){t.g=new ci(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Xt(t.oa);Te(e,"RID","rpc"),Te(e,"SID",t.J),Te(e,"CI",t.N?"0":"1"),Te(e,"AID",t.U),fi(t,e),Te(e,"TYPE","xmlhttp"),t.o&&t.s&&Xu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Xo(Xt(e)),n.s=null,n.U=!0,kg(n,t)}P.ab=function(){this.v!=null&&(this.v=null,Jo(this),Qu(this),rt(19))};function fo(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function Qg(t,e){var n=null;if(t.g==e){fo(t),Ju(t),t.g=null;var r=2}else if(Dc(t.i,e))n=e.D,Bg(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Ko(),je(r,new Ig(r,n,e,s)),Zo(t)}else Xg(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&tS(t,e)||r==2&&Qu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Pn(t,5);break;case 4:Pn(t,10);break;case 3:Pn(t,6);break;default:Pn(t,2)}}}function Jg(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Pn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=$e(t.jb,t);n||(n=new zn("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||uo(n,"https"),Xo(n)),GI(n.toString(),r)}else rt(2);t.G=0,t.j&&t.j.va(e),Zg(t),Wg(t)}P.jb=function(t){t?(this.h.info("Successfully pinged google.com"),rt(2)):(this.h.info("Failed to ping google.com"),rt(1))};function Zg(t){t.G=0,t.I=-1,t.j&&((Vg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Nu(t.l),t.l.length=0),t.j.ua())}function em(t,e,n){let r=LI(n);if(r.i!="")e&&lo(r,e+"."+r.i),ho(r,r.m);else{const s=K.location;r=UI(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Ou(t.aa,function(s,i){Te(r,i,s)}),e=t.D,n=t.sa,e&&n&&Te(r,e,n),Te(r,"VER",t.ma),fi(t,r),r}function tm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Re(new li({ib:!0})):new Re(t.qa),e.L=t.H,e}function nm(){}P=nm.prototype;P.xa=function(){};P.wa=function(){};P.va=function(){};P.ua=function(){};P.Oa=function(){};function po(){if(Nr&&!(10<=Number(pI)))throw Error("Environmental error: no available transport.")}po.prototype.g=function(t,e){return new mt(t,e)};function mt(t,e){Le.call(this),this.g=new zg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!oo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!oo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Xr(this)}ze(mt,Le);mt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Fu($e(t.hb,t,e))),rt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=em(t,null,t.W),Zo(t)};mt.prototype.close=function(){Yu(this.g)};mt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Va(this.g,e)}else this.v?(e={},e.__data__=Uu(t),Va(this.g,e)):Va(this.g,t)};mt.prototype.M=function(){this.g.j=null,delete this.j,Yu(this.g),delete this.g,mt.Z.M.call(this)};function rm(t){ju.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(rm,ju);function sm(){Hu.call(this),this.status=1}ze(sm,Hu);function Xr(t){this.g=t}ze(Xr,nm);Xr.prototype.xa=function(){je(this.g,"a")};Xr.prototype.wa=function(t){je(this.g,new rm(t))};Xr.prototype.va=function(t){je(this.g,new sm(t))};Xr.prototype.ua=function(){je(this.g,"b")};po.prototype.createWebChannel=po.prototype.g;mt.prototype.send=mt.prototype.u;mt.prototype.open=mt.prototype.m;mt.prototype.close=mt.prototype.close;zo.NO_ERROR=0;zo.TIMEOUT=8;zo.HTTP_ERROR=6;Sg.COMPLETE="complete";Cg.EventType=ai;ai.OPEN="a";ai.CLOSE="b";ai.ERROR="c";ai.MESSAGE="d";Le.prototype.listen=Le.prototype.N;Re.prototype.listenOnce=Re.prototype.O;Re.prototype.getLastError=Re.prototype.La;Re.prototype.getLastErrorCode=Re.prototype.Da;Re.prototype.getStatus=Re.prototype.ba;Re.prototype.getResponseJson=Re.prototype.Qa;Re.prototype.getResponseText=Re.prototype.ga;Re.prototype.send=Re.prototype.ea;var nS=function(){return new po},rS=function(){return Ko()},$a=zo,sS=Sg,iS=Zn,yf={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},oS=li,Ci=Cg,aS=Re;const vf="@firebase/firestore";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let Yr="9.8.0";/**
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
 */const Wn=new mu("@firebase/firestore");function _f(){return Wn.logLevel}function U(t,...e){if(Wn.logLevel<=ie.DEBUG){const n=e.map(Zu);Wn.debug(`Firestore (${Yr}): ${t}`,...n)}}function vn(t,...e){if(Wn.logLevel<=ie.ERROR){const n=e.map(Zu);Wn.error(`Firestore (${Yr}): ${t}`,...n)}}function wf(t,...e){if(Wn.logLevel<=ie.WARN){const n=e.map(Zu);Wn.warn(`Firestore (${Yr}): ${t}`,...n)}}function Zu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function W(t="Unexpected state"){const e=`FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: `+t;throw vn(e),new Error(e)}function ve(t,e){t||W()}function X(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends En{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class cS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class lS{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new cS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new it(e)}}class hS{constructor(e,n,r){this.type="FirstParty",this.user=it.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class fS{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new hS(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pS{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.p=n.token,new dS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class el{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function gS(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */el.A=-1;class im{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=gS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Or(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Qe(0,0))}static max(){return new Z(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Ef(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function er(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function om(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class $s{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(),r===void 0?r=e.length-n:r>e.length-n&&W(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $s.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $s?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends $s{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const mS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends $s{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return mS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new H(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new H(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
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
 */class js{constructor(e){this.fields=e,e.sort(ot.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Or(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ke(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const yS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _n(t){if(ve(!!t),typeof t=="string"){let e=0;const n=yS.exec(t);if(ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
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
 */function am(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cm(t){const e=t.mapValue.fields.__previous_value__;return am(e)?cm(e):e}function Hs(t){const e=_n(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class vS{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Dr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Dr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Dr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function ea(t){return t==null}function go(t){return t===0&&1/t==-1/0}function _S(t){return typeof t=="number"&&Number.isInteger(t)&&!go(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Ie.fromString(e))}static fromName(e){return new j(Ie.fromString(e).popFirst(5))}static empty(){return new j(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Ie(e.slice()))}}/**
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
 */const Ai={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?am(t)?4:wS(t)?9007199254740991:10:W()}function Bt(t,e){if(t===e)return!0;const n=Gn(t);if(n!==Gn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hs(t).isEqual(Hs(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=_n(r.timestampValue),o=_n(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Pr(r.bytesValue).isEqual(Pr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ae(r.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(r.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ae(r.integerValue)===Ae(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ae(r.doubleValue),o=Ae(s.doubleValue);return i===o?go(i)===go(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Or(t.arrayValue.values||[],e.arrayValue.values||[],Bt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Ef(i)!==Ef(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Bt(i[a],o[a])))return!1;return!0}(t,e);default:return W()}}function qs(t,e){return(t.values||[]).find(n=>Bt(n,e))!==void 0}function xr(t,e){if(t===e)return 0;const n=Gn(t),r=Gn(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ae(s.integerValue||s.doubleValue),a=Ae(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return bf(t.timestampValue,e.timestampValue);case 4:return bf(Hs(t),Hs(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Pr(s),a=Pr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ce(o[c],a[c]);if(u!==0)return u}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ce(Ae(s.latitude),Ae(i.latitude));return o!==0?o:ce(Ae(s.longitude),Ae(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=xr(o[c],a[c]);if(u)return u}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Ai.mapValue&&i===Ai.mapValue)return 0;if(s===Ai.mapValue)return 1;if(i===Ai.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ce(a[l],u[l]);if(h!==0)return h;const f=xr(o[a[l]],c[u[l]]);if(f!==0)return f}return ce(a.length,u.length)}(t.mapValue,e.mapValue);default:throw W()}}function bf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=_n(t),r=_n(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function Ir(t){return xc(t)}function xc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=_n(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Pr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=xc(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${xc(r.fields[a])}`;return i+"}"}(t.mapValue):W();var e,n}function Mc(t){return!!t&&"integerValue"in t}function tl(t){return!!t&&"arrayValue"in t}function Tf(t){return!!t&&"nullValue"in t}function If(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $i(t){return!!t&&"mapValue"in t}function Es(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return er(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Es(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Es(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$i(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Es(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Es(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());$i(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];$i(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){er(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new dt(Es(this.value))}}function um(t){const e=[];return er(t.fields,(n,r)=>{const s=new ot([n]);if($i(r)){const i=um(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new js(e)}/**
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
 */class Xe{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Xe(e,0,Z.min(),Z.min(),dt.empty(),0)}static newFoundDocument(e,n,r){return new Xe(e,1,n,Z.min(),r,0)}static newNoDocument(e,n){return new Xe(e,2,n,Z.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new Xe(e,3,n,Z.min(),dt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function ES(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Z.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new Xn(s,j.empty(),e)}function bS(t){return new Xn(t.readTime,t.key,-1)}class Xn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xn(Z.min(),j.empty(),-1)}static max(){return new Xn(Z.max(),j.empty(),-1)}}function TS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ki(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ki(this.root,e,this.comparator,!1)}getReverseIterator(){return new ki(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ki(this.root,e,this.comparator,!0)}}class ki{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Be.RED,this.left=s!=null?s:Be.EMPTY,this.right=i!=null?i:Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Be(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Be(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sf(this.data.getIterator())}getIteratorFrom(e){return new Sf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Sf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class IS{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function Cf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new IS(t,e,n,r,s,i,o)}function nl(t){const e=X(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+Ir(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ea(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ir(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ir(r)).join(",")),e.P=n}return e.P}function SS(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Ir(r.value)}`;var r}).join(", ")}]`),ea(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ir(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ir(n)).join(",")),`Target(${e})`}function rl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!DS(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Bt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kf(t.startAt,e.startAt)&&kf(t.endAt,e.endAt)}function Lc(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class at extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new CS(e,n,r):n==="array-contains"?new RS(e,r):n==="in"?new NS(e,r):n==="not-in"?new OS(e,r):n==="array-contains-any"?new PS(e,r):new at(e,n,r)}static V(e,n,r){return n==="in"?new AS(e,r):new kS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(xr(n,this.value)):n!==null&&Gn(this.value)===Gn(n)&&this.v(xr(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class CS extends at{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.v(n)}}class AS extends at{constructor(e,n){super(e,"in",n),this.keys=lm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kS extends at{constructor(e,n){super(e,"not-in",n),this.keys=lm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class RS extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tl(n)&&qs(n.arrayValue,this.value)}}class NS extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qs(this.value.arrayValue,n)}}class OS extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!qs(this.value.arrayValue,n)}}class PS extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>qs(this.value.arrayValue,r))}}class mo{constructor(e,n){this.position=e,this.inclusive=n}}class bs{constructor(e,n="asc"){this.field=e,this.dir=n}}function DS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Af(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=xr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function kf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ta{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function xS(t,e,n,r,s,i,o,a){return new ta(t,e,n,r,s,i,o,a)}function na(t){return new ta(t)}function MS(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function LS(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function US(t){for(const e of t.filters)if(e.S())return e.field;return null}function FS(t){return t.collectionGroup!==null}function Ks(t){const e=X(t);if(e.D===null){e.D=[];const n=US(e),r=LS(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new bs(n)),e.D.push(new bs(ot.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new bs(ot.keyField(),i))}}}return e.D}function Yn(t){const e=X(t);if(!e.C)if(e.limitType==="F")e.C=Cf(e.path,e.collectionGroup,Ks(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ks(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new bs(i.field,o))}const r=e.endAt?new mo(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new mo(e.startAt.position,e.startAt.inclusive):null;e.C=Cf(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.C}function BS(t,e,n){return new ta(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ra(t,e){return rl(Yn(t),Yn(e))&&t.limitType===e.limitType}function hm(t){return`${nl(Yn(t))}|lt:${t.limitType}`}function Uc(t){return`Query(target=${SS(Yn(t))}; limitType=${t.limitType})`}function sl(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):j.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=Af(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Ks(n),r)||n.endAt&&!function(s,i,o){const a=Af(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Ks(n),r))}(t,e)}function VS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fm(t){return(e,n)=>{let r=!1;for(const s of Ks(t)){const i=$S(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function $S(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?xr(a,c):W()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
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
 */function dm(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:go(e)?"-0":e}}function pm(t){return{integerValue:""+t}}function jS(t,e){return _S(e)?pm(e):dm(t,e)}/**
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
 */class sa{constructor(){this._=void 0}}function HS(t,e,n){return t instanceof zs?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Ws?mm(t,e):t instanceof Gs?ym(t,e):function(r,s){const i=gm(r,s),o=Rf(i)+Rf(r.k);return Mc(i)&&Mc(r.k)?pm(o):dm(r.M,o)}(t,e)}function qS(t,e,n){return t instanceof Ws?mm(t,e):t instanceof Gs?ym(t,e):n}function gm(t,e){return t instanceof yo?Mc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class zs extends sa{}class Ws extends sa{constructor(e){super(),this.elements=e}}function mm(t,e){const n=vm(e);for(const r of t.elements)n.some(s=>Bt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Gs extends sa{constructor(e){super(),this.elements=e}}function ym(t,e){let n=vm(e);for(const r of t.elements)n=n.filter(s=>!Bt(s,r));return{arrayValue:{values:n}}}class yo extends sa{constructor(e,n){super(),this.M=e,this.k=n}}function Rf(t){return Ae(t.integerValue||t.doubleValue)}function vm(t){return tl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class KS{constructor(e,n){this.field=e,this.transform=n}}function zS(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ws&&r instanceof Ws||n instanceof Gs&&r instanceof Gs?Or(n.elements,r.elements,Bt):n instanceof yo&&r instanceof yo?Bt(n.k,r.k):n instanceof zs&&r instanceof zs}(t.transform,e.transform)}class WS{constructor(e,n){this.version=e,this.transformResults=n}}class Un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Un}static exists(e){return new Un(void 0,e)}static updateTime(e){return new Un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ji(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ia{}function GS(t,e,n){t instanceof oa?function(r,s,i){const o=r.value.clone(),a=Pf(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Qr?function(r,s,i){if(!ji(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Pf(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(_m(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Fc(t,e,n){t instanceof oa?function(r,s,i){if(!ji(r.precondition,s))return;const o=r.value.clone(),a=Df(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(Of(s),o).setHasLocalMutations()}(t,e,n):t instanceof Qr?function(r,s,i){if(!ji(r.precondition,s))return;const o=Df(r.fieldTransforms,i,s),a=s.data;a.setAll(_m(r)),a.setAll(o),s.convertToFoundDocument(Of(s),a).setHasLocalMutations()}(t,e,n):function(r,s){ji(r.precondition,s)&&s.convertToNoDocument(Z.min())}(t,e)}function XS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=gm(r.transform,s||null);i!=null&&(n==null&&(n=dt.empty()),n.set(r.field,i))}return n||null}function Nf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Or(n,r,(s,i)=>zS(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Of(t){return t.isFoundDocument()?t.version:Z.min()}class oa extends ia{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class Qr extends ia{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function _m(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Pf(t,e,n){const r=new Map;ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,qS(o,a,n[s]))}return r}function Df(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,HS(i,o,e))}return r}class YS extends ia{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class QS extends ia{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class JS{constructor(e){this.count=e}}/**
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
 */var Ce,te;function ZS(t){switch(t){default:return W();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function wm(t){if(t===void 0)return vn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ce.OK:return I.OK;case Ce.CANCELLED:return I.CANCELLED;case Ce.UNKNOWN:return I.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return I.INTERNAL;case Ce.UNAVAILABLE:return I.UNAVAILABLE;case Ce.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ce.NOT_FOUND:return I.NOT_FOUND;case Ce.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ce.ABORTED:return I.ABORTED;case Ce.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ce.DATA_LOSS:return I.DATA_LOSS;default:return W()}}(te=Ce||(Ce={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){er(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return om(this.inner)}size(){return this.innerSize}}/**
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
 */const eC=new Ue(j.comparator);function Qn(){return eC}const tC=new Ue(j.comparator);function Bc(...t){let e=tC;for(const n of t)e=e.insert(n.key,n);return e}function ja(){return new Jr(t=>t.toString(),(t,e)=>t.isEqual(e))}const nC=new Ue(j.comparator),rC=new He(j.comparator);function Ee(...t){let e=rC;for(const n of t)e=e.add(n);return e}const sC=new He(ce);function Em(){return sC}/**
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
 */class aa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,di.createSynthesizedTargetChangeForCurrentChange(e,n)),new aa(Z.min(),r,Em(),Qn(),Ee())}}class di{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new di(Ke.EMPTY_BYTE_STRING,n,Ee(),Ee(),Ee())}}/**
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
 */class Hi{constructor(e,n,r,s){this.O=e,this.removedTargetIds=n,this.key=r,this.F=s}}class bm{constructor(e,n){this.targetId=e,this.$=n}}class Tm{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class xf{constructor(){this.B=0,this.L=Lf(),this.U=Ke.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=Ee(),n=Ee(),r=Ee();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:W()}}),new di(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=Lf()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class iC{constructor(e){this.nt=e,this.st=new Map,this.it=Qn(),this.rt=Mf(),this.ot=new He(ce)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,s)=>{this.ft(s)&&n(s)})}_t(e){const n=e.targetId,r=e.$.count,s=this.wt(n);if(s){const i=s.target;if(Lc(i))if(r===0){const o=new j(i.path);this.ct(n,o,Xe.newNoDocument(o,Z.min()))}else ve(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Lc(a.target)){const c=new j(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,Xe.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let r=Ee();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const s=new aa(e,n,this.ot,this.it,r);return this.it=Qn(),this.rt=Mf(),this.ot=new He(ce),s}at(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const s=this.lt(e);this.It(e,n)?s.Y(n,1):s.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new xf,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new He(ce),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new xf),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Mf(){return new Ue(j.comparator)}function Lf(){return new Ue(j.comparator)}/**
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
 */const oC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),aC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class cC{constructor(e,n){this.databaseId=e,this.N=n}}function vo(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Im(t,e){return t.N?e.toBase64():e.toUint8Array()}function uC(t,e){return vo(t,e.toTimestamp())}function Kt(t){return ve(!!t),Z.fromTimestamp(function(e){const n=_n(e);return new Qe(n.seconds,n.nanos)}(t))}function il(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Sm(t){const e=Ie.fromString(t);return ve(km(e)),e}function Vc(t,e){return il(t.databaseId,e.path)}function Ha(t,e){const n=Sm(e);if(n.get(1)!==t.databaseId.projectId)throw new H(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(Cm(n))}function $c(t,e){return il(t.databaseId,e)}function lC(t){const e=Sm(t);return e.length===4?Ie.emptyPath():Cm(e)}function jc(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Cm(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Uf(t,e,n){return{name:Vc(t,e),fields:n.value.mapValue.fields}}function hC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.N?(ve(u===void 0||typeof u=="string"),Ke.fromBase64String(u||"")):(ve(u===void 0||u instanceof Uint8Array),Ke.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?I.UNKNOWN:wm(c.code);return new H(u,c.message||"")}(o);n=new Tm(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ha(t,r.document.name),i=Kt(r.document.updateTime),o=new dt({mapValue:{fields:r.document.fields}}),a=Xe.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Hi(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ha(t,r.document),i=r.readTime?Kt(r.readTime):Z.min(),o=Xe.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Hi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ha(t,r.document),i=r.removedTargetIds||[];n=new Hi([],i,s,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new JS(s),o=r.targetId;n=new bm(o,i)}}return n}function fC(t,e){let n;if(e instanceof oa)n={update:Uf(t,e.key,e.value)};else if(e instanceof YS)n={delete:Vc(t,e.key)};else if(e instanceof Qr)n={update:Uf(t,e.key,e.data),updateMask:bC(e.fieldMask)};else{if(!(e instanceof QS))return W();n={verify:Vc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof zs)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ws)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Gs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof yo)return{fieldPath:i.field.canonicalString(),increment:o.k};throw W()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:uC(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W()}(t,e.precondition)),n}function dC(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Kt(r.updateTime):Kt(s);return i.isEqual(Z.min())&&(i=Kt(s)),new WS(i,r.transformResults||[])}(n,e))):[]}function pC(t,e){return{documents:[$c(t,e.path)]}}function gC(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=$c(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=$c(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(If(h.value))return{unaryFilter:{field:ur(h.field),op:"IS_NAN"}};if(Tf(h.value))return{unaryFilter:{field:ur(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(If(h.value))return{unaryFilter:{field:ur(h.field),op:"IS_NOT_NAN"}};if(Tf(h.value))return{unaryFilter:{field:ur(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ur(h.field),op:_C(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:ur(l.field),direction:vC(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.N||ea(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function mC(t){let e=lC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=Am(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new bs(yr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,ea(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new mo(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new mo(f,h)}(n.endAt)),xS(e,s,o,i,a,"F",c,u)}function yC(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return W()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Am(t){return t?t.unaryFilter!==void 0?[EC(t)]:t.fieldFilter!==void 0?[wC(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Am(e)).reduce((e,n)=>e.concat(n)):W():[]}function vC(t){return oC[t]}function _C(t){return aC[t]}function ur(t){return{fieldPath:t.canonicalString()}}function yr(t){return ot.fromServerFormat(t.fieldPath)}function wC(t){return at.create(yr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}function EC(t){switch(t.unaryFilter.op){case"IS_NAN":const e=yr(t.unaryFilter.field);return at.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=yr(t.unaryFilter.field);return at.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=yr(t.unaryFilter.field);return at.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=yr(t.unaryFilter.field);return at.create(s,"!=",{nullValue:"NULL_VALUE"});default:return W()}}function bC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function km(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */const TC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(s=>s?C.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function pi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class SC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&GS(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Fc(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Fc(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(Z.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&Or(this.mutations,e.mutations,(n,r)=>Nf(n,r))&&Or(this.baseMutations,e.baseMutations,(n,r)=>Nf(n,r))}}class ol{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length);let s=nC;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ol(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Fn{constructor(e,n,r,s,i=Z.min(),o=Z.min(),a=Ke.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class AC{constructor(e){this.Jt=e}}function kC(t){const e=mC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?BS(e,e.limit,"L"):e}/**
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
 */class RC{constructor(){this.qe=new NC}addToCollectionParentIndex(e,n){return this.qe.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Xn.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class NC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new He(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new He(Ie.comparator)).toArray()}}/**
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
 */class Mr{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Mr(0)}static yn(){return new Mr(-1)}}/**
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
 */async function gi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==TC)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class OC{constructor(){this.changes=new Jr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class PC{constructor(e,n,r){this.ds=e,this.Bs=n,this.indexManager=r}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Us(e,n,r))}Us(e,n,r){return this.ds.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}qs(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Ks(e,n){return this.ds.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Qs(e,n,r){return function(s){return j.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.js(e,n.path):FS(n)?this.Ws(e,n,r):this.zs(e,n,r)}js(e,n){return this.Ls(e,new j(n)).next(r=>{let s=Bc();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Ws(e,n,r){const s=n.collectionGroup;let i=Bc();return this.indexManager.getCollectionParents(e,s).next(o=>C.forEach(o,a=>{const c=function(u,l){return new ta(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.zs(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}zs(e,n,r){let s;return this.ds.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let u=s.get(c);u==null&&(u=Xe.newInvalidDocument(c),s=s.insert(c,u)),Fc(a,u,o.localWriteTime),u.isFoundDocument()||(s=s.remove(c))}}).next(()=>(s.forEach((i,o)=>{sl(n,o)||(s=s.remove(i))}),s))}}/**
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
 */class al{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hs=r,this.Js=s}static Ys(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new al(e,n.fromCache,r,s)}}/**
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
 */class DC{constructor(){this.Xs=!1}initialize(e,n){this.Zs=e,this.indexManager=n,this.Xs=!0}Qs(e,n,r,s){return this.ti(e,n).next(i=>i||this.ei(e,n,s,r)).next(i=>i||this.ni(e,n))}ti(e,n){return C.resolve(null)}ei(e,n,r,s){return MS(n)||s.isEqual(Z.min())?this.ni(e,n):this.Zs.Ks(e,r).next(i=>{const o=this.si(n,i);return this.ii(n,o,r,s)?this.ni(e,n):(_f()<=ie.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Uc(n)),this.ri(e,o,n,ES(s,-1)))})}si(e,n){let r=new He(fm(e));return n.forEach((s,i)=>{sl(e,i)&&(r=r.add(i))}),r}ii(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ni(e,n){return _f()<=ie.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Uc(n)),this.Zs.Qs(e,n,Xn.min())}ri(e,n,r,s){return this.Zs.Qs(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class xC{constructor(e,n,r,s){this.persistence=e,this.oi=n,this.M=s,this.ui=new Ue(ce),this.ai=new Jr(i=>nl(i),rl),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(r)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new PC(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ui))}}function MC(t,e,n,r){return new xC(t,e,n,r)}async function Rm(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.Bs.getAllMutationBatches(r).next(i=>(s=i,n.li(e),n.Bs.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Ee();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.fi.Ks(r,c).next(u=>({di:u,removedBatchIds:o,addedBatchIds:a}))})})}function LC(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=C.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(m=>{const b=c.docVersions.get(g);ve(b!==null),m.version.compareTo(b)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),f.next(()=>o.Bs.removeMutationBatch(a,l))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.Bs.performConsistencyCheck(r)).next(()=>n.fi.Ks(r,s))})}function Nm(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function UC(t,e){const n=X(t),r=e.snapshotVersion;let s=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hi.newChangeBuffer({trackRemovals:!0});s=n.ui;const a=[];e.targetChanges.forEach((u,l)=>{const h=s.get(l);if(!h)return;a.push(n.fs.removeMatchingKeys(i,u.removedDocuments,l).next(()=>n.fs.addMatchingKeys(i,u.addedDocuments,l)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(l)?f=f.withResumeToken(Ke.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(l,f),function(g,m,b){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(h,f,u)&&a.push(n.fs.updateTargetData(i,f))});let c=Qn();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(FC(i,o,e.documentUpdates).next(u=>{c=u})),!r.isEqual(Z.min())){const u=n.fs.getLastRemoteSnapshotVersion(i).next(l=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.fi.Gs(i,c)).next(()=>c)}).then(i=>(n.ui=s,i))}function FC(t,e,n){let r=Ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let i=Qn();return n.forEach((o,a)=>{const c=s.get(o);a.isNoDocument()&&a.version.isEqual(Z.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):U("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function BC(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(r,e)))}function VC(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.fs.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):n.fs.allocateTargetId(r).next(o=>(s=new Fn(e,o,0,r.currentSequenceNumber),n.fs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ui.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ui=n.ui.insert(r.targetId,r),n.ai.set(e,r.targetId)),r})}async function Hc(t,e,n){const r=X(t),s=r.ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!pi(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ui=r.ui.remove(e),r.ai.delete(s.target)}function Ff(t,e,n){const r=X(t);let s=Z.min(),i=Ee();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=X(a),h=l.ai.get(u);return h!==void 0?C.resolve(l.ui.get(h)):l.fs.getTargetData(c,u)}(r,o,Yn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.oi.Qs(o,e,n?s:Z.min(),n?i:Ee())).next(a=>($C(r,VS(e),a),{documents:a,_i:i})))}function $C(t,e,n){let r=Z.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ci.set(e,r)}/**
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
 */class jC{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,n){return C.resolve(this.yi.get(n))}saveBundleMetadata(e,n){var r;return this.yi.set(n.id,{id:(r=n).id,version:r.version,createTime:Kt(r.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.pi.get(n))}saveNamedQuery(e,n){return this.pi.set(n.name,function(r){return{name:r.name,query:kC(r.bundledQuery),readTime:Kt(r.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(){this.overlays=new Ue(j.comparator),this.Ii=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Xt(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ii.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ii.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const s=ja(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return C.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ue((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=ja(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ja(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return C.resolve(a)}Xt(e,n,r){if(r===null)return;const s=this.overlays.get(r.key);if(s!==null){const o=this.Ii.get(s.largestBatchId).delete(r.key);this.Ii.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new CC(n,r));let i=this.Ii.get(n);i===void 0&&(i=Ee(),this.Ii.set(n,i)),this.Ii.set(n,i.add(r.key))}}/**
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
 */class cl{constructor(){this.Ti=new He(Oe.Ei),this.Ai=new He(Oe.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.Ti=this.Ti.add(r),this.Ai=this.Ai.add(r)}bi(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Pi(new Oe(e,n))}Vi(e,n){e.forEach(r=>this.removeReference(r,n))}vi(e){const n=new j(new Ie([])),r=new Oe(n,e),s=new Oe(n,e+1),i=[];return this.Ai.forEachInRange([r,s],o=>{this.Pi(o),i.push(o.key)}),i}Si(){this.Ti.forEach(e=>this.Pi(e))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const n=new j(new Ie([])),r=new Oe(n,e),s=new Oe(n,e+1);let i=Ee();return this.Ai.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Oe(e,0),r=this.Ti.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.Ci=n}static Ei(e,n){return j.comparator(e.key,n.key)||ce(e.Ci,n.Ci)}static Ri(e,n){return ce(e.Ci,n.Ci)||j.comparator(e.key,n.key)}}/**
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
 */class qC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.xi=1,this.Ni=new He(Oe.Ei)}checkEmpty(e){return C.resolve(this.Bs.length===0)}addMutationBatch(e,n,r,s){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new SC(i,n,r,s);this.Bs.push(o);for(const a of s)this.Ni=this.Ni.add(new Oe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.ki(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Mi(r),i=s<0?0:s;return C.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(e){return C.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),s=new Oe(n,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([r,s],o=>{const a=this.ki(o.Ci);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(ce);return n.forEach(s=>{const i=new Oe(s,0),o=new Oe(s,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([i,o],a=>{r=r.add(a.Ci)})}),C.resolve(this.Oi(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const o=new Oe(new j(i),0);let a=new He(ce);return this.Ni.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.Ci)),!0)},o),C.resolve(this.Oi(a))}Oi(e){const n=[];return e.forEach(r=>{const s=this.ki(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.Fi(n.batchId,"removed")===0),this.Bs.shift();let r=this.Ni;return C.forEach(n.mutations,s=>{const i=new Oe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Ni=r})}_n(e){}containsKey(e,n){const r=new Oe(n,0),s=this.Ni.firstAfterOrEqual(r);return C.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.Bs.length,C.resolve()}Fi(e,n){return this.Mi(e)}Mi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}ki(e){const n=this.Mi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
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
 */class KC{constructor(e){this.$i=e,this.docs=new Ue(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.$i(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(e,n){let r=Qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Xe.newInvalidDocument(s))}),C.resolve(r)}getAllFromCollection(e,n,r){let s=Qn();const i=new j(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||TS(bS(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,n,r,s){W()}Bi(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zC(this)}getSize(e){return C.resolve(this.size)}}class zC extends OC{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Kn.addEntry(e,s)):this.Kn.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
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
 */class WC{constructor(e){this.persistence=e,this.Li=new Jr(n=>nl(n),rl),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Ui=0,this.qi=new cl,this.targetCount=0,this.Ki=Mr.gn()}forEachTarget(e,n){return this.Li.forEach((r,s)=>n(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ui&&(this.Ui=n),C.resolve()}Tn(e){this.Li.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ki=new Mr(n),this.highestTargetId=n),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Tn(n),C.resolve()}removeTargetData(e,n){return this.Li.delete(n.target),this.qi.vi(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Li.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Li.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Li.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.qi.bi(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.qi.Vi(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qi.vi(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qi.Di(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.qi.containsKey(n))}}/**
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
 */class GC{constructor(e,n){this.Gi={},this.overlays={},this.es=new el(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new WC(this),this.indexManager=new RC,this.ds=function(r){return new KC(r)}(r=>this.referenceDelegate.Qi(r)),this.M=new AC(n),this._s=new jC(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Gi[e.toKey()];return r||(r=new qC(n,this.referenceDelegate),this.Gi[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const s=new XC(this.es.next());return this.referenceDelegate.ji(),r(s).next(i=>this.referenceDelegate.Wi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zi(e,n){return C.or(Object.values(this.Gi).map(r=>()=>r.containsKey(e,n)))}}class XC extends IC{constructor(e){super(),this.currentSequenceNumber=e}}class ul{constructor(e){this.persistence=e,this.Hi=new cl,this.Ji=null}static Yi(e){return new ul(e)}get Xi(){if(this.Ji)return this.Ji;throw W()}addReference(e,n,r){return this.Hi.addReference(r,n),this.Xi.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Hi.removeReference(r,n),this.Xi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Xi.add(n.toString()),C.resolve()}removeTarget(e,n){this.Hi.vi(n.targetId).forEach(s=>this.Xi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}ji(){this.Ji=new Set}Wi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Xi,r=>{const s=j.fromPath(r);return this.Zi(e,s).next(i=>{i||n.removeEntry(s,Z.min())})}).next(()=>(this.Ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zi(e,n).next(r=>{r?this.Xi.delete(n.toString()):this.Xi.add(n.toString())})}Qi(e){return 0}Zi(e,n){return C.or([()=>C.resolve(this.Hi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zi(e,n)])}}class Bf{constructor(){this.activeTargetIds=Em()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YC{constructor(){this.Ur=new Bf,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Bf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class QC{Kr(e){}shutdown(){}}/**
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
 */class Vf{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const JC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class ZC{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}/**
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
 */class eA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.uo=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,s,i){const o=this.ho(e,n);U("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(c=>(U("RestConnection","Received: ",c),c),c=>{throw wf("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,s,i){return this.co(e,n,r,s,i)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Yr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,n){const r=JC[e];return`${this.uo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,s){return new Promise((i,o)=>{const a=new aS;a.listenOnce(sS.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case $a.NO_ERROR:const u=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(u)),i(u);break;case $a.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new H(I.DEADLINE_EXCEEDED,"Request time out"));break;case $a.HTTP_ERROR:const l=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(m)>=0?m:I.UNKNOWN}(h.status);o(new H(f,h.message))}else o(new H(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new H(I.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}wo(e,n,r){const s=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=nS(),o=rS(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new oS({})),this.lo(a.initMessageHeaders,n,r),bp()||Ip()||$E()||Sp()||jE()||Tp()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");U("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new ZC({Jr:m=>{h?U("Connection","Not sending because WebChannel is closed:",m):(l||(U("Connection","Opening WebChannel transport."),u.open(),l=!0),U("Connection","WebChannel sending:",m),u.send(m))},Yr:()=>u.close()}),g=(m,b,_)=>{m.listen(b,k=>{try{_(k)}catch(D){setTimeout(()=>{throw D},0)}})};return g(u,Ci.EventType.OPEN,()=>{h||U("Connection","WebChannel transport opened.")}),g(u,Ci.EventType.CLOSE,()=>{h||(h=!0,U("Connection","WebChannel transport closed"),f.ro())}),g(u,Ci.EventType.ERROR,m=>{h||(h=!0,wf("Connection","WebChannel transport errored:",m),f.ro(new H(I.UNAVAILABLE,"The operation could not be completed")))}),g(u,Ci.EventType.MESSAGE,m=>{var b;if(!h){const _=m.data[0];ve(!!_);const k=_,D=k.error||((b=k[0])===null||b===void 0?void 0:b.error);if(D){U("Connection","WebChannel received error:",D);const B=D.status;let L=function(ue){const Y=Ce[ue];if(Y!==void 0)return wm(Y)}(B),se=D.message;L===void 0&&(L=I.INTERNAL,se="Unknown error status: "+B+" with message "+D.message),h=!0,f.ro(new H(L,se)),u.close()}else U("Connection","WebChannel received:",_),f.oo(_)}}),g(o,iS.STAT_EVENT,m=>{m.stat===yf.PROXY?U("Connection","Detected buffering proxy"):m.stat===yf.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.io()},0),f}}function qa(){return typeof document!="undefined"?document:null}/**
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
 */function ca(t){return new cC(t,!0)}class Om{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Yn=e,this.timerId=n,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Pm{constructor(e,n,r,s,i,o,a,c){this.Yn=e,this.Vo=r,this.vo=s,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Om(e,n)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(vn(n.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Do===n&&this.Qo(r,s)},r=>{e(()=>{const s=new H(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(s)})})}Qo(e,n){const r=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(s=>{r(()=>this.jo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Yn.enqueueAndForget(()=>this.Do===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tA extends Pm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.M=i}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=hC(this.M,e),r=function(s){if(!("targetChange"in s))return Z.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?Z.min():i.readTime?Kt(i.readTime):Z.min()}(e);return this.listener.zo(n,r)}Ho(e){const n={};n.database=jc(this.M),n.addTarget=function(s,i){let o;const a=i.target;return o=Lc(a)?{documents:pC(s,a)}:{query:gC(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Im(s,i.resumeToken):i.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=vo(s,i.snapshotVersion.toTimestamp())),o}(this.M,e);const r=yC(this.M,e);r&&(n.labels=r),this.Lo(n)}Jo(e){const n={};n.database=jc(this.M),n.removeTarget=e,this.Lo(n)}}class nA extends Pm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.M=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=dC(e.writeResults,e.commitTime),r=Kt(e.commitTime);return this.listener.tu(r,n)}return ve(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=jc(this.M),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>fC(this.M,r))};this.Lo(n)}}/**
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
 */class rA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=r,this.M=s,this.su=!1}iu(){if(this.su)throw new H(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.So.co(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(I.UNKNOWN,s.toString())})}_o(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.So._o(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(I.UNKNOWN,s.toString())})}terminate(){this.su=!0}}class sA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(vn(n),this.uu=!1):U("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class iA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr(o=>{r.enqueueAndForget(async()=>{tr(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=X(a);c.wu.add(4),await mi(c),c.yu.set("Unknown"),c.wu.delete(4),await ua(c)}(this))})}),this.yu=new sA(r,s)}}async function ua(t){if(tr(t))for(const e of t.mu)await e(!0)}async function mi(t){for(const e of t.mu)await e(!1)}function Dm(t,e){const n=X(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),fl(n)?hl(n):Zr(n).Mo()&&ll(n,e))}function xm(t,e){const n=X(t),r=Zr(n);n._u.delete(e),r.Mo()&&Mm(n,e),n._u.size===0&&(r.Mo()?r.$o():tr(n)&&n.yu.set("Unknown"))}function ll(t,e){t.pu.Z(e.targetId),Zr(t).Ho(e)}function Mm(t,e){t.pu.Z(e),Zr(t).Jo(e)}function hl(t){t.pu=new iC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t._u.get(e)||null}),Zr(t).start(),t.yu.au()}function fl(t){return tr(t)&&!Zr(t).ko()&&t._u.size>0}function tr(t){return X(t).wu.size===0}function Lm(t){t.pu=void 0}async function oA(t){t._u.forEach((e,n)=>{ll(t,e)})}async function aA(t,e){Lm(t),fl(t)?(t.yu.lu(e),hl(t)):t.yu.set("Unknown")}async function cA(t,e,n){if(t.yu.set("Online"),e instanceof Tm&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r._u.delete(o),r.pu.removeTarget(o))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _o(t,r)}else if(e instanceof Hi?t.pu.ut(e):e instanceof bm?t.pu._t(e):t.pu.ht(e),!n.isEqual(Z.min()))try{const r=await Nm(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.pu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s._u.get(c);u&&s._u.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s._u.get(a);if(!c)return;s._u.set(a,c.withResumeToken(Ke.EMPTY_BYTE_STRING,c.snapshotVersion)),Mm(s,a);const u=new Fn(c.target,a,1,c.sequenceNumber);ll(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await _o(t,r)}}async function _o(t,e,n){if(!pi(e))throw e;t.wu.add(1),await mi(t),t.yu.set("Offline"),n||(n=()=>Nm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await ua(t)})}function Um(t,e){return e().catch(n=>_o(t,n,e))}async function la(t){const e=X(t),n=wn(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;uA(e);)try{const s=await BC(e.localStore,r);if(s===null){e.du.length===0&&n.$o();break}r=s.batchId,lA(e,s)}catch(s){await _o(e,s)}Fm(e)&&Bm(e)}function uA(t){return tr(t)&&t.du.length<10}function lA(t,e){t.du.push(e);const n=wn(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function Fm(t){return tr(t)&&!wn(t).ko()&&t.du.length>0}function Bm(t){wn(t).start()}async function hA(t){wn(t).nu()}async function fA(t){const e=wn(t);for(const n of t.du)e.Zo(n.mutations)}async function dA(t,e,n){const r=t.du.shift(),s=ol.from(r,e,n);await Um(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await la(t)}async function pA(t,e){e&&wn(t).Xo&&await async function(n,r){if(s=r.code,ZS(s)&&s!==I.ABORTED){const i=n.du.shift();wn(n).Fo(),await Um(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await la(n)}var s}(t,e),Fm(t)&&Bm(t)}async function $f(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=tr(n);n.wu.add(3),await mi(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await ua(n)}async function gA(t,e){const n=X(t);e?(n.wu.delete(2),await ua(n)):e||(n.wu.add(2),await mi(n),n.yu.set("Unknown"))}function Zr(t){return t.Iu||(t.Iu=function(e,n,r){const s=X(e);return s.iu(),new tA(n,s.So,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Xr:oA.bind(null,t),eo:aA.bind(null,t),zo:cA.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),fl(t)?hl(t):t.yu.set("Unknown")):(await t.Iu.stop(),Lm(t))})),t.Iu}function wn(t){return t.Tu||(t.Tu=function(e,n,r){const s=X(e);return s.iu(),new nA(n,s.So,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Xr:hA.bind(null,t),eo:pA.bind(null,t),eu:fA.bind(null,t),tu:dA.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await la(t)):(await t.Tu.stop(),t.du.length>0&&(U("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
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
 */class dl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new dl(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pl(t,e){if(vn("AsyncQueue",`${e}: ${t}`),pi(t))return new H(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Sr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=Bc(),this.sortedSet=new Ue(this.comparator)}static emptySet(e){return new Sr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Sr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Sr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class jf{constructor(){this.Eu=new Ue(j.comparator)}track(e){const n=e.doc.key,r=this.Eu.get(n);r?e.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Eu=this.Eu.remove(n):e.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):W():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Lr{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Lr(e,n,Sr.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ra(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class mA{constructor(){this.Ru=void 0,this.listeners=[]}}class yA{constructor(){this.queries=new Jr(e=>hm(e),ra),this.onlineState="Unknown",this.bu=new Set}}async function Vm(t,e){const n=X(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new mA),s)try{i.Ru=await n.onListen(r)}catch(o){const a=pl(o,`Initialization of query '${Uc(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.Vu(i.Ru)&&gl(n)}async function $m(t,e){const n=X(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function vA(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(s)&&(r=!0);o.Ru=s}}r&&gl(n)}function _A(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function gl(t){t.bu.forEach(e=>{e.next()})}class jm{constructor(e,n,r){this.query=e,this.vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Lr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!e.docs.isEmpty()||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=Lr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}/**
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
 */class Hm{constructor(e){this.key=e}}class qm{constructor(e){this.key=e}}class wA{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.current=!1,this.Ku=Ee(),this.mutatedKeys=Ee(),this.Gu=fm(e),this.Qu=new Sr(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new jf,s=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const f=s.get(l),g=sl(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let _=!1;f&&g?f.data.isEqual(g.data)?m!==b&&(r.track({type:3,doc:g}),_=!0):this.Hu(f,g)||(r.track({type:2,doc:g}),_=!0,(c&&this.Gu(g,c)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),_=!0):f&&!g&&(r.track({type:1,doc:f}),_=!0,(c||u)&&(a=!0)),_&&(g?(o=o.add(g),i=b?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,ii:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((u,l)=>function(h,f){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return g(h)-g(f)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Lr(this.query,e.Qu,s,i,e.mutatedKeys,a===0,c,!1),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new jf,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Ee(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new qm(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new Hm(r))}),n}ta(e){this.Uu=e._i,this.Ku=Ee();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ea(){return Lr.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class EA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bA{constructor(e){this.key=e,this.na=!1}}class TA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new Jr(a=>hm(a),ra),this.ra=new Map,this.oa=new Set,this.ua=new Ue(j.comparator),this.aa=new Map,this.ca=new cl,this.ha={},this.la=new Map,this.fa=Mr.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function IA(t,e){const n=xA(t);let r,s;const i=n.ia.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ea();else{const o=await VC(n.localStore,Yn(e));n.isPrimaryClient&&Dm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await SA(n,e,r,a==="current")}return s}async function SA(t,e,n,r){t._a=(l,h,f)=>async function(g,m,b,_){let k=m.view.Wu(b);k.ii&&(k=await Ff(g.localStore,m.query,!1).then(({documents:L})=>m.view.Wu(L,k)));const D=_&&_.targetChanges.get(m.targetId),B=m.view.applyChanges(k,g.isPrimaryClient,D);return qf(g,m.targetId,B.Xu),B.snapshot}(t,l,h,f);const s=await Ff(t.localStore,e,!0),i=new wA(e,s._i),o=i.Wu(s.documents),a=di.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);qf(t,n,c.Xu);const u=new EA(e,n,i);return t.ia.set(e,u),t.ra.has(n)?t.ra.get(n).push(e):t.ra.set(n,[e]),c.snapshot}async function CA(t,e){const n=X(t),r=n.ia.get(e),s=n.ra.get(r.targetId);if(s.length>1)return n.ra.set(r.targetId,s.filter(i=>!ra(i,e))),void n.ia.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Hc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),xm(n.remoteStore,r.targetId),qc(n,r.targetId)}).catch(gi)):(qc(n,r.targetId),await Hc(n.localStore,r.targetId,!0))}async function AA(t,e,n){const r=MA(t);try{const s=await function(i,o){const a=X(i),c=Qe.now(),u=o.reduce((h,f)=>h.add(f.key),Ee());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.fi.Ks(h,u).next(f=>{l=f;const g=[];for(const m of o){const b=XS(m,l.get(m.key));b!=null&&g.push(new Qr(m.key,b,um(b.value.mapValue),Un.exists(!0)))}return a.Bs.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.ha[i.currentUser.toKey()];c||(c=new Ue(ce)),c=c.insert(o,a),i.ha[i.currentUser.toKey()]=c}(r,s.batchId,n),await yi(r,s.changes),await la(r.remoteStore)}catch(s){const i=pl(s,"Failed to persist write");n.reject(i)}}async function Km(t,e){const n=X(t);try{const r=await UC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.aa.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.na=!0:s.modifiedDocuments.size>0?ve(o.na):s.removedDocuments.size>0&&(ve(o.na),o.na=!1))}),await yi(n,r,e)}catch(r){await gi(r)}}function Hf(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ia.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=X(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Pu(o)&&(c=!0)}),c&&gl(a)}(r.eventManager,e),s.length&&r.sa.zo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kA(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.aa.get(e),i=s&&s.key;if(i){let o=new Ue(j.comparator);o=o.insert(i,Xe.newNoDocument(i,Z.min()));const a=Ee().add(i),c=new aa(Z.min(),new Map,new He(ce),o,a);await Km(r,c),r.ua=r.ua.remove(i),r.aa.delete(e),ml(r)}else await Hc(r.localStore,e,!1).then(()=>qc(r,e,n)).catch(gi)}async function RA(t,e){const n=X(t),r=e.batch.batchId;try{const s=await LC(n.localStore,e);Wm(n,r,null),zm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yi(n,s)}catch(s){await gi(s)}}async function NA(t,e,n){const r=X(t);try{const s=await function(i,o){const a=X(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.Bs.lookupMutationBatch(c,o).next(l=>(ve(l!==null),u=l.keys(),a.Bs.removeMutationBatch(c,l))).next(()=>a.Bs.performConsistencyCheck(c)).next(()=>a.fi.Ks(c,u))})}(r.localStore,e);Wm(r,e,n),zm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yi(r,s)}catch(s){await gi(s)}}function zm(t,e){(t.la.get(e)||[]).forEach(n=>{n.resolve()}),t.la.delete(e)}function Wm(t,e,n){const r=X(t);let s=r.ha[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ha[r.currentUser.toKey()]=s}}function qc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ra.get(e))t.ia.delete(r),n&&t.sa.wa(r,n);t.ra.delete(e),t.isPrimaryClient&&t.ca.vi(e).forEach(r=>{t.ca.containsKey(r)||Gm(t,r)})}function Gm(t,e){t.oa.delete(e.path.canonicalString());const n=t.ua.get(e);n!==null&&(xm(t.remoteStore,n),t.ua=t.ua.remove(e),t.aa.delete(n),ml(t))}function qf(t,e,n){for(const r of n)r instanceof Hm?(t.ca.addReference(r.key,e),OA(t,r)):r instanceof qm?(U("SyncEngine","Document no longer in limbo: "+r.key),t.ca.removeReference(r.key,e),t.ca.containsKey(r.key)||Gm(t,r.key)):W()}function OA(t,e){const n=e.key,r=n.path.canonicalString();t.ua.get(n)||t.oa.has(r)||(U("SyncEngine","New document in limbo: "+n),t.oa.add(r),ml(t))}function ml(t){for(;t.oa.size>0&&t.ua.size<t.maxConcurrentLimboResolutions;){const e=t.oa.values().next().value;t.oa.delete(e);const n=new j(Ie.fromString(e)),r=t.fa.next();t.aa.set(r,new bA(n)),t.ua=t.ua.insert(n,r),Dm(t.remoteStore,new Fn(Yn(na(n.path)),r,2,el.A))}}async function yi(t,e,n){const r=X(t),s=[],i=[],o=[];r.ia.isEmpty()||(r.ia.forEach((a,c)=>{o.push(r._a(c,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),s.push(u);const l=al.Ys(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.sa.zo(s),await async function(a,c){const u=X(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>C.forEach(c,h=>C.forEach(h.Hs,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>C.forEach(h.Js,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!pi(l))throw l;U("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.ui.get(h),g=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(g);u.ui=u.ui.insert(h,m)}}}(r.localStore,i))}async function PA(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await Rm(n.localStore,e);n.currentUser=e,function(s,i){s.la.forEach(o=>{o.forEach(a=>{a.reject(new H(I.CANCELLED,i))})}),s.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yi(n,r.di)}}function DA(t,e){const n=X(t),r=n.aa.get(e);if(r&&r.na)return Ee().add(r.key);{let s=Ee();const i=n.ra.get(e);if(!i)return s;for(const o of i){const a=n.ia.get(o);s=s.unionWith(a.view.ju)}return s}}function xA(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Km.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kA.bind(null,e),e.sa.zo=vA.bind(null,e.eventManager),e.sa.wa=_A.bind(null,e.eventManager),e}function MA(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NA.bind(null,e),e}class LA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=ca(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return MC(this.persistence,new DC,e.initialUser,this.M)}ya(e){return new GC(ul.Yi,this.M)}ga(e){return new YC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class UA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=PA.bind(null,this.syncEngine),await gA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yA}createDatastore(e){const n=ca(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new eA(s));var s;return function(i,o,a,c){return new rA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Hf(this.syncEngine,a,0),o=Vf.vt()?new Vf:new QC,new iA(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,u){const l=new TA(r,s,i,o,a,c);return u&&(l.da=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);U("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await mi(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class Xm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class FA{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=im.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function BA(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Rm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function VA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $A(t);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>$f(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>$f(e.remoteStore,i)),t.onlineComponents=e}async function $A(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await BA(t,new LA)),t.offlineComponents}async function Ym(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await VA(t,new UA)),t.onlineComponents}function jA(t){return Ym(t).then(e=>e.syncEngine)}async function Kc(t){const e=await Ym(t),n=e.eventManager;return n.onListen=IA.bind(null,e.syncEngine),n.onUnlisten=CA.bind(null,e.syncEngine),n}function HA(t,e,n={}){const r=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new Xm({next:h=>{i.enqueueAndForget(()=>$m(s,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new H(I.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new H(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new jm(na(o.path),u,{includeMetadataChanges:!0,ku:!0});return Vm(s,l)}(await Kc(t),t.asyncQueue,e,n,r)),r.promise}const Kf=new Map;/**
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
 */function qA(t,e,n){if(!n)throw new H(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KA(t,e,n,r){if(e===!0&&r===!0)throw new H(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zf(t){if(!j.isDocumentKey(t))throw new H(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function zt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yl(t);throw new H(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Wf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new H(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,KA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Qm{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wf({}),this._settingsFrozen=!1,e instanceof Dr?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new H(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dr(s.options.projectId)}(e))}get app(){if(!this._app)throw new H(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new uS;switch(n.type){case"gapi":const r=n.client;return ve(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new fS(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new H(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Kf.get(e);n&&(U("ComponentProvider","Removing Datastore"),Kf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class ha{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ha(this.firestore,e,this._query)}}class Xs extends ha{constructor(e,n,r){super(e,n,na(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new j(e))}withConverter(e){return new Xs(this.firestore,e,this._path)}}function Ts(t,e,...n){if(t=ke(t),arguments.length===1&&(e=im.R()),qA("doc","path",e),t instanceof Qm){const r=Ie.fromString(e,...n);return zf(r),new ct(t,null,new j(r))}{if(!(t instanceof ct||t instanceof Xs))throw new H(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return zf(r),new ct(t.firestore,t instanceof Xs?t.converter:null,new j(r))}}/**
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
 */class zA{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new Om(this,"async_queue_retry"),this.Qa=()=>{const n=qa();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=qa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const n=qa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise(()=>{});const n=new gn;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$a.push(e),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!pi(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(e){const n=this.Fa.then(()=>(this.qa=!0,e().catch(r=>{this.Ua=r,this.qa=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.qa=!1,r))));return this.Fa=n,n}enqueueAfterDelay(e,n,r){this.ja(),this.Ga.indexOf(e)>-1&&(n=0);const s=dl.createAndSchedule(this,e,n,r,i=>this.Ha(i));return this.La.push(s),s}ja(){this.Ua&&W()}verifyOperationInProgress(){}async Ja(){let e;do e=this.Fa,await e;while(e!==this.Fa)}Ya(e){for(const n of this.La)if(n.timerId===e)return!0;return!1}Xa(e){return this.Ja().then(()=>{this.La.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.La)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ja()})}Za(e){this.Ga.push(e)}Ha(e){const n=this.La.indexOf(e);this.La.splice(n,1)}}function Gf(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ur extends Qm{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new zA,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Jm(this),this._firestoreClient.terminate()}}function WA(t=_u()){return Mo(t,"firestore").getImmediate()}function vl(t){return t._firestoreClient||Jm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Jm(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new vS(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new FA(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 *//**
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
 */class fa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Fr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fr(Ke.fromBase64String(e))}catch(n){throw new H(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fr(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class da{constructor(e){this._methodName=e}}/**
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
 */class _l{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const GA=/^__.*__$/;class XA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qr(e,this.data,this.fieldMask,n,this.fieldTransforms):new oa(e,this.data,n,this.fieldTransforms)}}class Zm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Qr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ey(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class wl{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=s,i===void 0&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new wl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nc({path:r,ic:!1});return s.rc(e),s}oc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nc({path:r,ic:!1});return s.tc(),s}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return wo(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(e.length===0)throw this.ac("Document fields must not be empty");if(ey(this.ec)&&GA.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class YA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||ca(e)}lc(e,n,r,s=!1){return new wl({ec:e,methodName:n,hc:r,path:ot.emptyPath(),ic:!1,cc:s},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function ty(t){const e=t._freezeSettings(),n=ca(t._databaseId);return new YA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function QA(t,e,n,r,s,i={}){const o=t.lc(i.merge||i.mergeFields?2:0,e,n,s);bl("Data must be an object, but it was:",o,r);const a=ny(r,o);let c,u;if(i.merge)c=new js(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=zc(e,h,n);if(!o.contains(f))throw new H(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);sy(l,f)||l.push(f)}c=new js(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new XA(new dt(a),c,u)}class pa extends da{_toFieldTransform(e){if(e.ec!==2)throw e.ec===1?e.ac(`${this._methodName}() can only appear at the top level of your update data`):e.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pa}}class El extends da{_toFieldTransform(e){return new KS(e.path,new zs)}isEqual(e){return e instanceof El}}function JA(t,e,n,r){const s=t.lc(1,e,n);bl("Data must be an object, but it was:",s,r);const i=[],o=dt.empty();er(r,(c,u)=>{const l=Tl(e,c,n);u=ke(u);const h=s.oc(l);if(u instanceof pa)i.push(l);else{const f=ga(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new js(i);return new Zm(o,a,s.fieldTransforms)}function ZA(t,e,n,r,s,i){const o=t.lc(1,e,n),a=[zc(e,r,n)],c=[s];if(i.length%2!=0)throw new H(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(zc(e,i[f])),c.push(i[f+1]);const u=[],l=dt.empty();for(let f=a.length-1;f>=0;--f)if(!sy(u,a[f])){const g=a[f];let m=c[f];m=ke(m);const b=o.oc(g);if(m instanceof pa)u.push(g);else{const _=ga(m,b);_!=null&&(u.push(g),l.set(g,_))}}const h=new js(u);return new Zm(l,h,o.fieldTransforms)}function ga(t,e){if(ry(t=ke(t)))return bl("Unsupported field value:",e,t),ny(t,e);if(t instanceof da)return function(n,r){if(!ey(r.ec))throw r.ac(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ac(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&e.ec!==4)throw e.ac("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=ga(o,r.uc(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=ke(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return jS(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Qe.fromDate(n);return{timestampValue:vo(r.M,s)}}if(n instanceof Qe){const s=new Qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:vo(r.M,s)}}if(n instanceof _l)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Fr)return{bytesValue:Im(r.M,n._byteString)};if(n instanceof ct){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ac(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:il(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ac(`Unsupported field value: ${yl(n)}`)}(t,e)}function ny(t,e){const n={};return om(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):er(t,(r,s)=>{const i=ga(s,e.sc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ry(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof _l||t instanceof Fr||t instanceof ct||t instanceof da)}function bl(t,e,n){if(!ry(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=yl(n);throw r==="an object"?e.ac(t+" a custom object"):e.ac(t+" "+r)}}function zc(t,e,n){if((e=ke(e))instanceof fa)return e._internalPath;if(typeof e=="string")return Tl(t,e);throw wo("Field path arguments must be of type string or ",t,!1,void 0,n)}const ek=new RegExp("[~\\*/\\[\\]]");function Tl(t,e,n){if(e.search(ek)>=0)throw wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fa(...e.split("."))._internalPath}catch{throw wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new H(I.INVALID_ARGUMENT,a+t+c)}function sy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class iy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(oy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tk extends iy{data(){return super.data()}}function oy(t,e){return typeof e=="string"?Tl(t,e):e instanceof fa?e._internalPath:e._delegate._internalPath}/**
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
 */class hs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ay extends iy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(oy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qi extends ay{data(e={}){return super.data(e)}}class nk{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new hs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qi(this._firestore,this._userDataWriter,r.key,r,new hs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new qi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new hs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new qi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new hs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:rk(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function rk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
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
 */function sk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class ik{convertValue(e,n="none"){switch(Gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){const r={};return er(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new _l(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hs(e));default:return null}}convertTimestamp(e){const n=_n(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);ve(km(r));const s=new Dr(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(n)||vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function ok(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 *//**
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
 */function cy(t){t=zt(t,ct);const e=zt(t.firestore,Ur);return HA(vl(e),t._key).then(n=>fy(e,t,n))}class uy extends ik{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function E1(t,e,n){t=zt(t,ct);const r=zt(t.firestore,Ur),s=ok(t.converter,e,n);return hy(r,[QA(ty(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Un.none())])}function ak(t,e,n,...r){t=zt(t,ct);const s=zt(t.firestore,Ur),i=ty(s);let o;return o=typeof(e=ke(e))=="string"||e instanceof fa?ZA(i,"updateDoc",t._key,e,n,r):JA(i,"updateDoc",t._key,e),hy(s,[o.toMutation(t._key,Un.exists(!0))])}function ly(t,...e){var n,r,s;t=ke(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Gf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Gf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(t instanceof ct)u=zt(t.firestore,Ur),l=na(t._key.path),c={next:h=>{e[o]&&e[o](fy(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=zt(t,ha);u=zt(h.firestore,Ur),l=h._query;const f=new uy(u);c={next:g=>{e[o]&&e[o](new nk(u,f,h,g))},error:e[o+1],complete:e[o+2]},sk(t._query)}return function(h,f,g,m){const b=new Xm(m),_=new jm(f,b,g);return h.asyncQueue.enqueueAndForget(async()=>Vm(await Kc(h),_)),()=>{b.Aa(),h.asyncQueue.enqueueAndForget(async()=>$m(await Kc(h),_))}}(vl(u),l,a,c)}function hy(t,e){return function(n,r){const s=new gn;return n.asyncQueue.enqueueAndForget(async()=>AA(await jA(n),r,s)),s.promise}(vl(t),e)}function fy(t,e,n){const r=n.docs.get(e._key),s=new uy(t);return new ay(t,s,e._key,r,new hs(n.hasPendingWrites,n.fromCache),e.converter)}function b1(){return new El("serverTimestamp")}(function(t,e=!0){(function(n){Yr=n})(qr),$n(new yn("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new Ur(s,new lS(n.getProvider("auth-internal")),new pS(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Mt(vf,"3.4.9",t),Mt(vf,"3.4.9","esm2017")})();/**
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
 */const dy="firebasestorage.googleapis.com",py="storageBucket",ck=2*60*1e3,uk=10*60*1e3;/**
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
 */class Se extends En{constructor(e,n){super(Ka(e),`Firebase Storage: ${n} (${Ka(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Se.prototype)}_codeEquals(e){return Ka(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Ka(t){return"storage/"+t}function Il(){const t="An unknown error occurred, please check the error payload for server response.";return new Se("unknown",t)}function lk(t){return new Se("object-not-found","Object '"+t+"' does not exist.")}function hk(t){return new Se("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function fk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Se("unauthenticated",t)}function dk(){return new Se("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function pk(t){return new Se("unauthorized","User does not have permission to access '"+t+"'.")}function gk(){return new Se("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function mk(){return new Se("canceled","User canceled the upload/download.")}function yk(t){return new Se("invalid-url","Invalid URL '"+t+"'.")}function vk(t){return new Se("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function _k(){return new Se("no-default-bucket","No default bucket found. Did you set the '"+py+"' property when initializing the app?")}function wk(){return new Se("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Ek(){return new Se("no-download-url","The given file does not have any download URLs.")}function Wc(t){return new Se("invalid-argument",t)}function gy(){return new Se("app-deleted","The Firebase app was deleted.")}function bk(t){return new Se("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Is(t,e){return new Se("invalid-format","String does not match format '"+t+"': "+e)}function is(t){throw new Se("internal-error","Internal error: "+t)}/**
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
 */class pt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=pt.makeFromUrl(e,n)}catch{return new pt(e,"")}if(r.path==="")return r;throw vk(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${l}/b/${s}/o${f}`,"i"),m={bucket:1,path:3},b=n===dy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",k=new RegExp(`^https?://${b}/${s}/${_}`,"i"),B=[{regex:a,indices:c,postModify:i},{regex:g,indices:m,postModify:u},{regex:k,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<B.length;L++){const se=B[L],ue=se.regex.exec(e);if(ue){const Y=ue[se.indices.bucket];let _e=ue[se.indices.path];_e||(_e=""),r=new pt(Y,_e),se.postModify(r);break}}if(r==null)throw yk(e);return r}}class Tk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Ik(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(..._){u||(u=!0,e.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,t(g,c())},_)}function f(){i&&clearTimeout(i)}function g(_,...k){if(u){f();return}if(_){f(),l.call(null,_,...k);return}if(c()||o){f(),l.call(null,_,...k);return}r<64&&(r*=2);let B;a===1?(a=2,B=0):B=(r+Math.random())*1e3,h(B)}let m=!1;function b(_){m||(m=!0,f(),!u&&(s!==null?(_||(a=2),clearTimeout(s),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function Sk(t){t(!1)}/**
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
 */function Ck(t){return t!==void 0}function Ak(t){return typeof t=="object"&&!Array.isArray(t)}function Sl(t){return typeof t=="string"||t instanceof String}function Xf(t){return Cl()&&t instanceof Blob}function Cl(){return typeof Blob!="undefined"}function Yf(t,e,n,r){if(r<e)throw Wc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Wc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Al(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function my(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var Bn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Bn||(Bn={}));/**
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
 */class kk{constructor(e,n,r,s,i,o,a,c,u,l,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ri(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Bn.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const l=i.getErrorCode()===Bn.ABORT;r(!1,new Ri(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Ri(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Ck(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Il();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?gy():mk();o(c)}else{const c=gk();o(c)}};this.canceled_?n(!1,new Ri(!1,null,!0)):this.backoffId_=Ik(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Sk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||s||i}}class Ri{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Rk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Nk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Ok(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Pk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Dk(t,e,n,r,s,i){const o=my(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return Ok(c,e),Rk(c,n),Nk(c,i),Pk(c,r),new kk(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}/**
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
 */function xk(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function Mk(...t){const e=xk();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Cl())return new Blob(t);throw new Se("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function Lk(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Uk(t){return atob(t)}/**
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
 */const xt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class za{constructor(e,n){this.data=e,this.contentType=n||null}}function Fk(t,e){switch(t){case xt.RAW:return new za(yy(e));case xt.BASE64:case xt.BASE64URL:return new za(vy(t,e));case xt.DATA_URL:return new za(Vk(e),$k(e))}throw Il()}function yy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Bk(t){let e;try{e=decodeURIComponent(t)}catch{throw Is(xt.DATA_URL,"Malformed data URL.")}return yy(e)}function vy(t,e){switch(t){case xt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Is(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case xt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Is(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Uk(e)}catch{throw Is(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class _y{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Is(xt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=jk(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Vk(t){const e=new _y(t);return e.base64?vy(xt.BASE64,e.rest):Bk(e.rest)}function $k(t){return new _y(t).contentType}function jk(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class ln{constructor(e,n){let r=0,s="";Xf(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Xf(this.data_)){const r=this.data_,s=Lk(r,e,n);return s===null?null:new ln(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ln(r,!0)}}static getBlob(...e){if(Cl()){const n=e.map(r=>r instanceof ln?r.data_:r);return new ln(Mk.apply(null,n))}else{const n=e.map(o=>Sl(o)?Fk(xt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new ln(s,!0)}}uploadData(){return this.data_}}/**
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
 */function wy(t){let e;try{e=JSON.parse(t)}catch{return null}return Ak(e)?e:null}/**
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
 */function Hk(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function qk(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Ey(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Kk(t,e){return e}class Ze{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Kk}}let Ni=null;function zk(t){return!Sl(t)||t.length<2?t:Ey(t)}function by(){if(Ni)return Ni;const t=[];t.push(new Ze("bucket")),t.push(new Ze("generation")),t.push(new Ze("metageneration")),t.push(new Ze("name","fullPath",!0));function e(i,o){return zk(o)}const n=new Ze("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ze("size");return s.xform=r,t.push(s),t.push(new Ze("timeCreated")),t.push(new Ze("updated")),t.push(new Ze("md5Hash",null,!0)),t.push(new Ze("cacheControl",null,!0)),t.push(new Ze("contentDisposition",null,!0)),t.push(new Ze("contentEncoding",null,!0)),t.push(new Ze("contentLanguage",null,!0)),t.push(new Ze("contentType",null,!0)),t.push(new Ze("metadata","customMetadata",!0)),Ni=t,Ni}function Wk(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new pt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Gk(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return Wk(r,t),r}function Ty(t,e,n){const r=wy(e);return r===null?null:Gk(t,r,n)}function Xk(t,e,n,r){const s=wy(e);if(s===null||!Sl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,f="/b/"+o(l)+"/o/"+o(h),g=Al(f,n,r),m=my({alt:"media",token:u});return g+m})[0]}function Yk(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Iy{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Sy(t){if(!t)throw Il()}function Qk(t,e){function n(r,s){const i=Ty(t,s,e);return Sy(i!==null),i}return n}function Jk(t,e){function n(r,s){const i=Ty(t,s,e);return Sy(i!==null),Xk(i,s,t.host,t._protocol)}return n}function Cy(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=dk():s=fk():n.getStatus()===402?s=hk(t.bucket):n.getStatus()===403?s=pk(t.path):s=r,s.serverResponse=r.serverResponse,s}return e}function Zk(t){const e=Cy(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=lk(t.path)),i.serverResponse=s.serverResponse,i}return n}function eR(t,e,n){const r=e.fullServerUrl(),s=Al(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Iy(s,i,Jk(t,n),o);return a.errorHandler=Zk(e),a}function tR(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function nR(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=tR(null,e)),r}function rR(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let B="";for(let L=0;L<2;L++)B=B+Math.random().toString().slice(2);return B}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=nR(e,r,s),l=Yk(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+c+"--",g=ln.getBlob(h,r,f);if(g===null)throw wk();const m={name:u.fullPath},b=Al(i,t.host,t._protocol),_="POST",k=t.maxUploadRetryTime,D=new Iy(b,_,Qk(t,n),k);return D.urlParams=m,D.headers=o,D.body=g.uploadData(),D.errorHandler=Cy(e),D}class sR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Bn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Bn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Bn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw is("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw is("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw is("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw is("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw is("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class iR extends sR{initXhr(){this.xhr_.responseType="text"}}function Ay(){return new iR}/**
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
 */class Jn{constructor(e,n){this._service=e,n instanceof pt?this._location=n:this._location=pt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Jn(e,n)}get root(){const e=new pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ey(this._location.path)}get storage(){return this._service}get parent(){const e=Hk(this._location.path);if(e===null)return null;const n=new pt(this._location.bucket,e);return new Jn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw bk(e)}}function oR(t,e,n){t._throwIfRoot("uploadBytes");const r=rR(t.storage,t._location,by(),new ln(e,!0),n);return t.storage.makeRequestWithTokens(r,Ay).then(s=>({metadata:s,ref:t}))}function aR(t){t._throwIfRoot("getDownloadURL");const e=eR(t.storage,t._location,by());return t.storage.makeRequestWithTokens(e,Ay).then(n=>{if(n===null)throw Ek();return n})}function cR(t,e){const n=qk(t._location.path,e),r=new pt(t._location.bucket,n);return new Jn(t.storage,r)}/**
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
 */function uR(t){return/^[A-Za-z]+:\/\//.test(t)}function lR(t,e){return new Jn(t,e)}function ky(t,e){if(t instanceof kl){const n=t;if(n._bucket==null)throw _k();const r=new Jn(n,n._bucket);return e!=null?ky(r,e):r}else return e!==void 0?cR(t,e):t}function hR(t,e){if(e&&uR(e)){if(t instanceof kl)return lR(t,e);throw Wc("To use ref(service, url), the first argument must be a Storage instance.")}else return ky(t,e)}function Qf(t,e){const n=e==null?void 0:e[py];return n==null?null:pt.makeFromBucketSpec(n,t)}class kl{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=dy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ck,this._maxUploadRetryTime=uk,this._requests=new Set,s!=null?this._bucket=pt.makeFromBucketSpec(s,this._host):this._bucket=Qf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pt.makeFromBucketSpec(this._url,e):this._bucket=Qf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Jn(this,e)}_makeRequest(e,n,r,s){if(this._deleted)return new Tk(gy());{const i=Dk(e,this._appId,r,s,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Jf="@firebase/storage",Zf="0.9.6";/**
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
 */const Ry="storage";function T1(t,e,n){return t=ke(t),oR(t,e,n)}function fR(t){return t=ke(t),aR(t)}function dR(t,e){return t=ke(t),hR(t,e)}function pR(t=_u(),e){return t=ke(t),Mo(t,Ry).getImmediate({identifier:e})}function gR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new kl(n,r,s,e,qr)}function mR(){$n(new yn(Ry,gR,"PUBLIC").setMultipleInstances(!0)),Mt(Jf,Zf,""),Mt(Jf,Zf,"esm2017")}mR();const yR={apiKey:"AIzaSyCO-1zlqihZNJAGUqfbezRKdAbx2xVRurA",authDomain:"if-lost-159f6.firebaseapp.com",projectId:"if-lost-159f6",storageBucket:"if-lost-159f6.appspot.com",messagingSenderId:"55254413607",appId:"1:55254413607:web:2b14450ddb1a97bdccb902"};Gb(yR);const Ys=eI(),Ss=WA(),vR=pR();var Rl=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const _R={methods:{obtenerUsuario(){Fo(Ys,t=>{t||this.$router.push("/login")})},viajar(){}},mounted(){this.obtenerUsuario()}},wR=oe("div",null,[oe("h2",{class:"ttl-1"},"\xBFQu\xE9 quieres hacer?")],-1),ER={class:"place-items-center grid-cols-1"};function bR(t,e,n,r,s,i){return Ns(),Yi(_t,null,[wR,oe("div",ER,[oe("div",null,[oe("button",{class:"btn-home",onClick:e[0]||(e[0]=o=>t.$router.push("/viajar"))}," Viajar seguro "),oe("button",{class:"btn-home",onClick:e[1]||(e[1]=o=>t.$router.push("/rastrear"))}," Rastrear a alguien "),oe("button",{class:"btn-home",onClick:e[2]||(e[2]=o=>t.$router.push("/404"))}," Enviar alerta ahora ")])])],64)}var TR=Rl(_R,[["render",bR]]);const IR={data(){return{correo:"",contrase\u00F1a:""}},methods:{iniciarSesi\u00F3n(){j0(Ys,this.correo,this.contrase\u00F1a).then(t=>{this.$router.push("/")}).catch(t=>{let e;switch(t.code){case"auth/user-not-found":e="El usuario no existe. Si no a\xFAn no tienes cuenta, crea una";break;case"auth/wrong-password":e="Contrase\xF1a incorrecta";break;case"auth/too-many-requests":e="Ya intentaste muchas veces, espera un momento";break;default:e="Ha ocurrido un error desconocido, revisa que hayas ingresado correctamente tus datos";break}Swal.fire({toast:!0,position:"bottom",iconColor:"white",customClass:{popup:"colored-toast"},showConfirmButton:!1,timer:5e3,timerProgressBar:!0,icon:"error",title:e})})},obtenerUsuario(){Fo(Ys,t=>{t&&this.$router.push("/")})}},mounted(){this.obtenerUsuario}},SR=oe("h1",{class:"ttl-1"},"Bienvenido",-1),CR=oe("h3",{class:"subttl"},"Nos alegra verte otra vez",-1),AR=oe("button",{type:"submit",id:"entrar",class:"btn-blue"}," Entrar a mi cuenta ",-1),kR={class:"mt-4 grid"},RR=oe("h3",{class:"subttl"},"\xBFA\xFAn no tienes cuenta?",-1),NR={class:"place-self-center"};function OR(t,e,n,r,s,i){return Ns(),Yi("div",null,[SR,CR,oe("form",{onSubmit:e[2]||(e[2]=yw(o=>i.iniciarSesi\u00F3n(),["prevent"])),class:"mt-8"},[nh(oe("input",{class:"inp",type:"email",placeholder:"Tu correo electr\xF3nico","onUpdate:modelValue":e[0]||(e[0]=o=>s.correo=o)},null,512),[[mh,s.correo]]),nh(oe("input",{class:"inp mt-4",type:"password",placeholder:"Tu contrase\xF1a","onUpdate:modelValue":e[1]||(e[1]=o=>s.contrase\u00F1a=o)},null,512),[[mh,s.contrase\u00F1a]]),AR],32),oe("div",kR,[RR,oe("div",NR,[oe("button",{class:"font-semibold underline",onClick:e[3]||(e[3]=o=>t.$router.push("/crearcuenta"))}," Crea una ")])])])}var ed=Rl(IR,[["render",OR]]);const PR=[{path:"/",name:"home",component:TR},{path:"/viajar",name:"viajar",component:()=>ns(()=>import("./crear_viaje.a27843d3.js"),["assets/crear_viaje.a27843d3.js","assets/crear_viaje.48d84894.css"])},{path:"/login",name:"login",component:ed},{path:"/crearcuenta",name:"crearcuenta",component:()=>ns(()=>import("./crearcuenta.ca178c81.js"),[])},{path:"/rastrear",name:"rastrear",component:()=>ns(()=>import("./rastrear.12588633.js"),[])},{path:"/cuenta",name:"cuenta",component:()=>ns(()=>import("./cuenta.138a1072.js"),[])},{path:"/404",name:"404",component:()=>ns(()=>import("./404.c7b90eb1.js"),[])},{path:"/if-lost/",component:ed}],DR=ME({history:Qw(),routes:PR});/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var xR="store";function es(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function MR(t){return t!==null&&typeof t=="object"}function LR(t){return t&&typeof t.then=="function"}function UR(t,e){return function(){return t(e)}}function Ny(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Oy(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;ma(t,n,[],t._modules.root,!0),Nl(t,n,e)}function Nl(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};es(s,function(o,a){i[a]=UR(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=jr({data:e}),t.strict&&jR(t),r&&n&&t._withCommit(function(){r.data=null})}function ma(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=Ol(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var u=r.context=FR(t,o,n);r.forEachMutation(function(l,h){var f=o+h;BR(t,f,l,u)}),r.forEachAction(function(l,h){var f=l.root?h:o+h,g=l.handler||l;VR(t,f,g,u)}),r.forEachGetter(function(l,h){var f=o+h;$R(t,f,l,u)}),r.forEachChild(function(l,h){ma(t,e,n.concat(h),l,s)})}function FR(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=Eo(i,o,a),u=c.payload,l=c.options,h=c.type;return(!l||!l.root)&&(h=e+h),t.dispatch(h,u)},commit:r?t.commit:function(i,o,a){var c=Eo(i,o,a),u=c.payload,l=c.options,h=c.type;(!l||!l.root)&&(h=e+h),t.commit(h,u,l)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return Py(t,e)}},state:{get:function(){return Ol(t.state,n)}}}),s}function Py(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function BR(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function VR(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return LR(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function $R(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function jR(t){Er(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Ol(t,e){return e.reduce(function(n,r){return n[r]},t)}function Eo(t,e,n){return MR(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var HR="vuex bindings",td="vuex:mutations",Wa="vuex:actions",lr="vuex",qR=0;function KR(t,e){Ow({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[HR]},function(n){n.addTimelineLayer({id:td,label:"Vuex Mutations",color:nd}),n.addTimelineLayer({id:Wa,label:"Vuex Actions",color:nd}),n.addInspector({id:lr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===lr)if(r.filter){var s=[];Ly(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[My(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===lr){var s=r.nodeId;Py(e,s),r.state=GR(YR(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===lr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(lr),n.sendInspectorState(lr),n.addTimelineEvent({layerId:td,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=qR++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:Wa,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:Wa,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var nd=8702998,zR=6710886,WR=16777215,Dy={label:"namespaced",textColor:WR,backgroundColor:zR};function xy(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function My(t,e){return{id:e||"root",label:xy(e),tags:t.namespaced?[Dy]:[],children:Object.keys(t._children).map(function(n){return My(t._children[n],e+n+"/")})}}function Ly(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Dy]:[]}),Object.keys(e._children).forEach(function(s){Ly(t,e._children[s],n,r+s+"/")})}function GR(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=XR(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?xy(o):o,editable:!1,value:Gc(function(){return i[o]})}})}return s}function XR(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Gc(function(){return t[n]})}else e[n]=Gc(function(){return t[n]})}),e}function YR(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Gc(t){try{return t()}catch(e){return e}}var At=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},Uy={namespaced:{configurable:!0}};Uy.namespaced.get=function(){return!!this._rawModule.namespaced};At.prototype.addChild=function(e,n){this._children[e]=n};At.prototype.removeChild=function(e){delete this._children[e]};At.prototype.getChild=function(e){return this._children[e]};At.prototype.hasChild=function(e){return e in this._children};At.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};At.prototype.forEachChild=function(e){es(this._children,e)};At.prototype.forEachGetter=function(e){this._rawModule.getters&&es(this._rawModule.getters,e)};At.prototype.forEachAction=function(e){this._rawModule.actions&&es(this._rawModule.actions,e)};At.prototype.forEachMutation=function(e){this._rawModule.mutations&&es(this._rawModule.mutations,e)};Object.defineProperties(At.prototype,Uy);var nr=function(e){this.register([],e,!1)};nr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};nr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};nr.prototype.update=function(e){Fy([],this.root,e)};nr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new At(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&es(n.modules,function(a,c){s.register(e.concat(c),a,r)})};nr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);!s||!s.runtime||n.removeChild(r)};nr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function Fy(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;Fy(t.concat(r),e.getChild(r),n.modules[r])}}function QR(t){return new ut(t)}var ut=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new nr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(f,g){return c.call(o,f,g)},this.commit=function(f,g,m){return u.call(o,f,g,m)},this.strict=s;var l=this._modules.root.state;ma(this,l,[],this._modules.root),Nl(this,l),r.forEach(function(h){return h(n)})},Pl={state:{configurable:!0}};ut.prototype.install=function(e,n){e.provide(n||xR,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&KR(e,this)};Pl.state.get=function(){return this._state.data};Pl.state.set=function(t){};ut.prototype.commit=function(e,n,r){var s=this,i=Eo(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},u=this._mutations[o];!u||(this._withCommit(function(){u.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(l){return l(c,s.state)}))};ut.prototype.dispatch=function(e,n){var r=this,s=Eo(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(l){return l.before}).forEach(function(l){return l.before(a,r.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(l){return l(o)})):c[0](o);return new Promise(function(l,h){u.then(function(f){try{r._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,r.state)})}catch{}l(f)},function(f){try{r._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,r.state,f)})}catch{}h(f)})})}};ut.prototype.subscribe=function(e,n){return Ny(e,this._subscribers,n)};ut.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Ny(r,this._actionSubscribers,n)};ut.prototype.watch=function(e,n,r){var s=this;return Er(function(){return e(s.state,s.getters)},n,Object.assign({},r))};ut.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};ut.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),ma(this,this.state,e,this._modules.get(e),r.preserveState),Nl(this,this.state)};ut.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Ol(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Oy(this)};ut.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};ut.prototype.hotUpdate=function(e){this._modules.update(e),Oy(this,!0)};ut.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(ut.prototype,Pl);const By=QR({state:{usuario:{id:"",nombre:"",ciudad:"",correo:"",tel:"",perfil:"",descripcion:"",clave:"",contacto:{nombre:"",correo:"",tel:""},viaje:{destino:"",infodestino:"",salida:"",llegada:"",alerta:0,img:"",infoimg:"",nota:"",mapa:"",clave:""}}},mutations:{async obtenerUsuario(t){await Fo(Ys,async e=>{if(e){t.usuario.id=e.uid,t.usuario.nombre=e.displayName,t.usuario.correo=e.email;const n=Ts(Ss,"infoUsuarios",e.uid),r=await cy(n);if(r.exists()){let i=r.data();t.usuario.ciudad=i.ciudad,t.usuario.descripcion=i.descripcion,t.usuario.tel=i.numero,t.usuario.clave=i.viaje,t.usuario.contacto.correo=i.correo_contacto,t.usuario.contacto.nombre=i.nombre_contacto,t.usuario.contacto.tel=i.numero_contacto}const s=dR(vR,"perfiles/"+t.usuario.id);fR(s).then(i=>{t.usuario.perfil=i}).catch(i=>{t.usuario.perfil="https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/perfiles%2Fperfil.png?alt=media&token=5a6ff639-cdc5-4372-a6c7-adc73e14fe47"}),t.usuario.clave&&ly(Ts(Ss,"viajes",t.usuario.clave),i=>{let o=i.data();o!=null&&(t.usuario.viaje.destino=o.destino,t.usuario.viaje.infodestino=o.infodestino,t.usuario.viaje.salida=o.salida,t.usuario.viaje.llegada=o.llegada,t.usuario.viaje.alerta=o.alerta,t.usuario.viaje.img=o.img,t.usuario.viaje.infoimg=o.infoimg,t.usuario.viaje.nota=o.nota,t.usuario.viaje.mapa=o.mapa,t.usuario.viaje.clave=o.clave)})}})}},actions:{},getters:{usuario(t){return t.usuario}}});By.commit("obtenerUsuario");const JR={data(){return{datos:[],tempo:!1,uid:"",i:0}},computed:{usuario(){return this.$store.getters.usuario}},methods:{obtenerAlerta(){Fo(Ys,async t=>{if(t){const e=Ts(Ss,"infoUsuarios",t.uid);let r=(await cy(e)).data();r.viaje&&ly(Ts(Ss,"viajes",r.viaje),s=>{let i=s.data();i!=null&&i.alerta!=null&&(this.temporizador(i.alerta),this.tempo=!0,this.$refs.views.classList.add("pb-12"),this.$refs.accesos.classList.remove("hidden"))})}else this.$refs.accesos.classList.add("hidden"),this.$refs.tempodiv.classList.add("hidden")})},temporizador(t){let e=this;var n=new Date(t).getTime();e.$refs.tempodiv.classList.remove("hidden"),e.i=setInterval(function(){var r=new Date().getTime(),s=n-r,i=Math.floor(s%(1e3*60*60*24)/(1e3*60*60)),o=Math.floor(s%(1e3*60*60)/(1e3*60)),a=Math.floor(s%(1e3*60)/1e3);i>1?document.getElementById("temporizador").innerHTML="Tu alerta se enviar\xE1 en<br/>"+i+" horas "+o+" minutos ":(o<10&&e.$refs.tempodiv.classList.add("bg-red-400"),o>0?document.getElementById("temporizador").innerHTML="Tu alerta se enviar\xE1 en<br/>"+o+" minutos "+a+" segundos ":document.getElementById("temporizador").innerHTML="Tu alerta se enviar\xE1 en<br/>"+a+" segundos ",s<0&&s>-1e3&&(clearInterval(e.i),e.$refs.btncancelar.classList.add("hidden"),document.getElementById("temporizador").innerHTML="Estamos contactando a tu contacto de confianza",e.enviarCorreo(),e.cancelarAlerta(5e3)))},1e3)},async enviarCorreo(){let t=[],e=this.usuario.nombre.split(" ");t={nombre:e[0],apellido:e[1],destino:this.usuario.viaje.destino,hora_alerta:this.usuario.viaje.llegada,clave:this.usuario.viaje.clave,email:this.usuario.contacto.correo},emailjs.send("default_service","alerta_iflost",t).then(async()=>{document.getElementById("temporizador").innerHTML="Listo, enviamos un correo a tu contacto de confianza"},n=>{})},async cancelarAlerta(t){let e=this;const n=Ts(Ss,"viajes",this.usuario.viaje.clave);await ak(n,{alerta:null}),setTimeout(function(){e.$refs.tempodiv.classList.add("hidden")},t)}},async mounted(){this.obtenerAlerta(),emailjs.init("NDQJF30o6mjc6lt_F"),this.$route.name!="home"&&this.$router.push("/")},watch:{$route(t,e){(e.name=="viajar"||e.name=="login"||e.name=="crearcuenta")&&t.name=="home"&&this.$router.go()}}},ZR={class:"p-5 desktop:max-w-[450px] desktop:m-auto",ref:"views"},e1={class:"grid"},t1={ref:"tempodiv",class:"alerta hidden"},n1={class:"justify-self-end place-content-center"},r1={id:"temporizador",ref:"temporizador",class:"text-white animate-[pulse_3s_infinite] pl-2 text-sm"},s1={class:"grid mt-24"},i1={class:"menu-hidden",ref:"menu"},o1={class:"grid grid-rows-3"},a1=D_('<div class="grid grid-cols-3"><div class="flex col-span-2"><img src="https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/logo.svg?alt=media" class="max-h-6"><p class="text-xs ml-3">pre-alpha</p></div><i class="fa-solid fa-angle-up justify-self-end"></i></div>',1),c1={class:"flex mb-2 justify-self-center row-span-2 pt-3",ref:"accesos"},u1=oe("span",{class:"material-symbols-rounded"},"home",-1),l1=oe("span",{class:"material-symbols-rounded"}," newspaper ",-1),h1=oe("span",{class:"material-symbols-rounded"}," person ",-1);function f1(t,e,n,r,s,i){const o=rh("router-view"),a=rh("router-link");return Ns(),Yi(_t,null,[oe("div",ZR,[De(o)],512),oe("div",e1,[oe("div",t1,[oe("div",n1,[oe("p",r1,null,512)]),s.tempo==!0?(Ns(),Yi("button",{key:0,class:"btn-red rounded-full mr-5 ml-5 mt-0 w-[33%] text-sm",onClick:e[0]||(e[0]=c=>i.cancelarAlerta(0)),ref:"btncancelar"}," Cancelar alerta ",512)):x_("",!0)],512)]),oe("div",s1,[oe("div",i1,[oe("div",o1,[a1,oe("div",c1,[De(a,{class:"btn-menu",to:"/"},{default:Di(()=>[u1]),_:1}),De(a,{class:"btn-menu",to:"/404"},{default:Di(()=>[l1]),_:1}),De(a,{class:"btn-menu",to:"/cuenta"},{default:Di(()=>[h1]),_:1})],512)])],512)])],64)}var d1=Rl(JR,[["render",f1]]);ww(d1).use(By).use(DR).mount("#app");export{_t as F,Ts as I,Rl as _,E1 as a,Ys as b,ak as c,Ss as d,Ns as e,Yi as f,oe as g,yw as h,x_ as i,P_ as j,m1 as k,y1 as l,v1 as m,_1 as n,Fo as o,b1 as p,cy as q,dR as r,vR as s,g1 as t,T1 as u,mh as v,nh as w,w1 as x};
