var Zy=Object.defineProperty,ev=Object.defineProperties;var tv=Object.getOwnPropertyDescriptors;var $l=Object.getOwnPropertySymbols;var nv=Object.prototype.hasOwnProperty,rv=Object.prototype.propertyIsEnumerable;var Vl=(t,e,n)=>e in t?Zy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,jl=(t,e)=>{for(var n in e||(e={}))nv.call(e,n)&&Vl(t,n,e[n]);if($l)for(var n of $l(e))rv.call(e,n)&&Vl(t,n,e[n]);return t},ql=(t,e)=>ev(t,tv(e));const sv=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};sv();function Wc(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const iv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ov=Wc(iv);function ld(t){return!!t||t===""}function Yc(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?uv(r):Yc(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(He(t))return t;if(Pe(t))return t}}const av=/;(?![^(]*\))/g,cv=/:(.+)/;function uv(t){const e={};return t.split(av).forEach(n=>{if(n){const r=n.split(cv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Xc(t){let e="";if(He(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const r=Xc(t[n]);r&&(e+=r+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const D1=t=>He(t)?t:t==null?"":W(t)||Pe(t)&&(t.toString===pd||!Q(t.toString))?JSON.stringify(t,hd,2):String(t),hd=(t,e)=>e&&e.__v_isRef?hd(t,e.value):Er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:fd(e)?{[`Set(${e.size})`]:[...e.values()]}:Pe(e)&&!W(e)&&!gd(e)?String(e):e,pe={},wr=[],Tt=()=>{},lv=()=>!1,hv=/^on[^a-z]/,Io=t=>hv.test(t),Qc=t=>t.startsWith("onUpdate:"),Je=Object.assign,Jc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fv=Object.prototype.hasOwnProperty,re=(t,e)=>fv.call(t,e),W=Array.isArray,Er=t=>To(t)==="[object Map]",fd=t=>To(t)==="[object Set]",Q=t=>typeof t=="function",He=t=>typeof t=="string",Zc=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",dd=t=>Pe(t)&&Q(t.then)&&Q(t.catch),pd=Object.prototype.toString,To=t=>pd.call(t),dv=t=>To(t).slice(8,-1),gd=t=>To(t)==="[object Object]",eu=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Di=Wc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),So=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},pv=/-(\w)/g,Ft=So(t=>t.replace(pv,(e,n)=>n?n.toUpperCase():"")),gv=/\B([A-Z])/g,Vr=So(t=>t.replace(gv,"-$1").toLowerCase()),Co=So(t=>t.charAt(0).toUpperCase()+t.slice(1)),ya=So(t=>t?`on${Co(t)}`:""),Cs=(t,e)=>!Object.is(t,e),Pi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ki=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Wa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Hl;const mv=()=>Hl||(Hl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ot;class yv{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ot&&(this.parent=Ot,this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){Ot=this}off(){Ot=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function vv(t,e=Ot){e&&e.active&&e.effects.push(t)}const tu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},md=t=>(t.w&mn)>0,yd=t=>(t.n&mn)>0,_v=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=mn},wv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];md(s)&&!yd(s)?s.delete(t):e[n++]=s,s.w&=~mn,s.n&=~mn}e.length=n}},Ya=new WeakMap;let us=0,mn=1;const Xa=30;let It;const xn=Symbol(""),Qa=Symbol("");class nu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,vv(this,r)}run(){if(!this.active)return this.fn();let e=It,n=hn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=It,It=this,hn=!0,mn=1<<++us,us<=Xa?_v(this):Kl(this),this.fn()}finally{us<=Xa&&wv(this),mn=1<<--us,It=this.parent,hn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){It===this?this.deferStop=!0:this.active&&(Kl(this),this.onStop&&this.onStop(),this.active=!1)}}function Kl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let hn=!0;const vd=[];function jr(){vd.push(hn),hn=!1}function qr(){const t=vd.pop();hn=t===void 0?!0:t}function gt(t,e,n){if(hn&&It){let r=Ya.get(t);r||Ya.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=tu()),_d(s)}}function _d(t,e){let n=!1;us<=Xa?yd(t)||(t.n|=mn,n=!md(t)):n=!t.has(It),n&&(t.add(It),It.deps.push(t))}function Gt(t,e,n,r,s,i){const o=Ya.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t))o.forEach((c,u)=>{(u==="length"||u>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?eu(n)&&a.push(o.get("length")):(a.push(o.get(xn)),Er(t)&&a.push(o.get(Qa)));break;case"delete":W(t)||(a.push(o.get(xn)),Er(t)&&a.push(o.get(Qa)));break;case"set":Er(t)&&a.push(o.get(xn));break}if(a.length===1)a[0]&&Ja(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Ja(tu(c))}}function Ja(t,e){for(const n of W(t)?t:[...t])(n!==It||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ev=Wc("__proto__,__v_isRef,__isVue"),wd=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Zc)),bv=ru(),Iv=ru(!1,!0),Tv=ru(!0),zl=Sv();function Sv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ae(this);for(let i=0,o=this.length;i<o;i++)gt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ae)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){jr();const r=ae(this)[e].apply(this,n);return qr(),r}}),t}function ru(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Vv:Sd:e?Td:Id).get(r))return r;const o=W(r);if(!t&&o&&re(zl,s))return Reflect.get(zl,s,i);const a=Reflect.get(r,s,i);return(Zc(s)?wd.has(s):Ev(s))||(t||gt(r,"get",s),e)?a:Be(a)?!o||!eu(s)?a.value:a:Pe(a)?t?Cd(a):Hr(a):a}}const Cv=Ed(),Av=Ed(!0);function Ed(t=!1){return function(n,r,s,i){let o=n[r];if(As(o)&&Be(o)&&!Be(s))return!1;if(!t&&!As(s)&&(Ad(s)||(s=ae(s),o=ae(o)),!W(n)&&Be(o)&&!Be(s)))return o.value=s,!0;const a=W(n)&&eu(r)?Number(r)<n.length:re(n,r),c=Reflect.set(n,r,s,i);return n===ae(i)&&(a?Cs(s,o)&&Gt(n,"set",r,s):Gt(n,"add",r,s)),c}}function Rv(t,e){const n=re(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Gt(t,"delete",e,void 0),r}function kv(t,e){const n=Reflect.has(t,e);return(!Zc(e)||!wd.has(e))&&gt(t,"has",e),n}function Nv(t){return gt(t,"iterate",W(t)?"length":xn),Reflect.ownKeys(t)}const bd={get:bv,set:Cv,deleteProperty:Rv,has:kv,ownKeys:Nv},Ov={get:Tv,set(t,e){return!0},deleteProperty(t,e){return!0}},Dv=Je({},bd,{get:Iv,set:Av}),su=t=>t,Ao=t=>Reflect.getPrototypeOf(t);function _i(t,e,n=!1,r=!1){t=t.__v_raw;const s=ae(t),i=ae(e);e!==i&&!n&&gt(s,"get",e),!n&&gt(s,"get",i);const{has:o}=Ao(s),a=r?su:n?au:Rs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function wi(t,e=!1){const n=this.__v_raw,r=ae(n),s=ae(t);return t!==s&&!e&&gt(r,"has",t),!e&&gt(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Ei(t,e=!1){return t=t.__v_raw,!e&&gt(ae(t),"iterate",xn),Reflect.get(t,"size",t)}function Gl(t){t=ae(t);const e=ae(this);return Ao(e).has.call(e,t)||(e.add(t),Gt(e,"add",t,t)),this}function Wl(t,e){e=ae(e);const n=ae(this),{has:r,get:s}=Ao(n);let i=r.call(n,t);i||(t=ae(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Cs(e,o)&&Gt(n,"set",t,e):Gt(n,"add",t,e),this}function Yl(t){const e=ae(this),{has:n,get:r}=Ao(e);let s=n.call(e,t);s||(t=ae(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Gt(e,"delete",t,void 0),i}function Xl(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&Gt(t,"clear",void 0,void 0),n}function bi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ae(o),c=e?su:t?au:Rs;return!t&&gt(a,"iterate",xn),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function Ii(t,e,n){return function(...r){const s=this.__v_raw,i=ae(s),o=Er(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?su:e?au:Rs;return!e&&gt(i,"iterate",c?Qa:xn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function Jt(t){return function(...e){return t==="delete"?!1:this}}function Pv(){const t={get(i){return _i(this,i)},get size(){return Ei(this)},has:wi,add:Gl,set:Wl,delete:Yl,clear:Xl,forEach:bi(!1,!1)},e={get(i){return _i(this,i,!1,!0)},get size(){return Ei(this)},has:wi,add:Gl,set:Wl,delete:Yl,clear:Xl,forEach:bi(!1,!0)},n={get(i){return _i(this,i,!0)},get size(){return Ei(this,!0)},has(i){return wi.call(this,i,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:bi(!0,!1)},r={get(i){return _i(this,i,!0,!0)},get size(){return Ei(this,!0)},has(i){return wi.call(this,i,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:bi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ii(i,!1,!1),n[i]=Ii(i,!0,!1),e[i]=Ii(i,!1,!0),r[i]=Ii(i,!0,!0)}),[t,n,e,r]}const[xv,Mv,Lv,Uv]=Pv();function iu(t,e){const n=e?t?Uv:Lv:t?Mv:xv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(re(n,s)&&s in r?n:r,s,i)}const Fv={get:iu(!1,!1)},Bv={get:iu(!1,!0)},$v={get:iu(!0,!1)},Id=new WeakMap,Td=new WeakMap,Sd=new WeakMap,Vv=new WeakMap;function jv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qv(t){return t.__v_skip||!Object.isExtensible(t)?0:jv(dv(t))}function Hr(t){return As(t)?t:ou(t,!1,bd,Fv,Id)}function Hv(t){return ou(t,!1,Dv,Bv,Td)}function Cd(t){return ou(t,!0,Ov,$v,Sd)}function ou(t,e,n,r,s){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=qv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function br(t){return As(t)?br(t.__v_raw):!!(t&&t.__v_isReactive)}function As(t){return!!(t&&t.__v_isReadonly)}function Ad(t){return!!(t&&t.__v_isShallow)}function Rd(t){return br(t)||As(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function kd(t){return Ki(t,"__v_skip",!0),t}const Rs=t=>Pe(t)?Hr(t):t,au=t=>Pe(t)?Cd(t):t;function Nd(t){hn&&It&&(t=ae(t),_d(t.dep||(t.dep=tu())))}function Od(t,e){t=ae(t),t.dep&&Ja(t.dep)}function Be(t){return!!(t&&t.__v_isRef===!0)}function Kv(t){return Dd(t,!1)}function zv(t){return Dd(t,!0)}function Dd(t,e){return Be(t)?t:new Gv(t,e)}class Gv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:Rs(e)}get value(){return Nd(this),this._value}set value(e){e=this.__v_isShallow?e:ae(e),Cs(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Rs(e),Od(this))}}function gs(t){return Be(t)?t.value:t}const Wv={get:(t,e,n)=>gs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Be(s)&&!Be(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Pd(t){return br(t)?t:new Proxy(t,Wv)}class Yv{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new nu(e,()=>{this._dirty||(this._dirty=!0,Od(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ae(this);return Nd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Xv(t,e,n=!1){let r,s;const i=Q(t);return i?(r=t,s=Tt):(r=t.get,s=t.set),new Yv(r,s,i||!s,n)}function fn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ro(i,e,n)}return s}function Et(t,e,n,r){if(Q(t)){const i=fn(t,e,n,r);return i&&dd(i)&&i.catch(o=>{Ro(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Et(t[i],e,n,r));return s}function Ro(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){fn(c,null,10,[t,o,a]);return}}Qv(t,n,s,r)}function Qv(t,e,n,r=!0){console.error(t)}let zi=!1,Za=!1;const ft=[];let Vt=0;const ms=[];let ls=null,dr=0;const ys=[];let nn=null,pr=0;const xd=Promise.resolve();let cu=null,ec=null;function Md(t){const e=cu||xd;return t?e.then(this?t.bind(this):t):e}function Jv(t){let e=Vt+1,n=ft.length;for(;e<n;){const r=e+n>>>1;ks(ft[r])<t?e=r+1:n=r}return e}function Ld(t){(!ft.length||!ft.includes(t,zi&&t.allowRecurse?Vt+1:Vt))&&t!==ec&&(t.id==null?ft.push(t):ft.splice(Jv(t.id),0,t),Ud())}function Ud(){!zi&&!Za&&(Za=!0,cu=xd.then($d))}function Zv(t){const e=ft.indexOf(t);e>Vt&&ft.splice(e,1)}function Fd(t,e,n,r){W(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Ud()}function e_(t){Fd(t,ls,ms,dr)}function t_(t){Fd(t,nn,ys,pr)}function uu(t,e=null){if(ms.length){for(ec=e,ls=[...new Set(ms)],ms.length=0,dr=0;dr<ls.length;dr++)ls[dr]();ls=null,dr=0,ec=null,uu(t,e)}}function Bd(t){if(ys.length){const e=[...new Set(ys)];if(ys.length=0,nn){nn.push(...e);return}for(nn=e,nn.sort((n,r)=>ks(n)-ks(r)),pr=0;pr<nn.length;pr++)nn[pr]();nn=null,pr=0}}const ks=t=>t.id==null?1/0:t.id;function $d(t){Za=!1,zi=!0,uu(t),ft.sort((n,r)=>ks(n)-ks(r));const e=Tt;try{for(Vt=0;Vt<ft.length;Vt++){const n=ft[Vt];n&&n.active!==!1&&fn(n,null,14)}}finally{Vt=0,ft.length=0,Bd(),zi=!1,cu=null,(ft.length||ms.length||ys.length)&&$d(t)}}function n_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||pe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[l]||pe;f?s=n.map(p=>p.trim()):h&&(s=n.map(Wa))}let a,c=r[a=ya(e)]||r[a=ya(Ft(e))];!c&&i&&(c=r[a=ya(Vr(e))]),c&&Et(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Et(u,t,6,s)}}function Vd(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Q(t)){const c=u=>{const l=Vd(u,e,!0);l&&(a=!0,Je(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):Je(o,i),r.set(t,o),o)}function ko(t,e){return!t||!Io(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,Vr(e))||re(t,e))}let wt=null,No=null;function Gi(t){const e=wt;return wt=t,No=t&&t.type.__scopeId||null,e}function P1(t){No=t}function x1(){No=null}function xi(t,e=wt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&uh(-1);const i=Gi(e),o=t(...s);return Gi(i),r._d&&uh(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function va(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:p,ctx:m,inheritAttrs:I}=t;let _,S;const D=Gi(t);try{if(n.shapeFlag&4){const U=s||r;_=Dt(l.call(U,U,h,i,p,f,m)),S=c}else{const U=e;_=Dt(U.length>1?U(i,{attrs:c,slots:a,emit:u}):U(i,null)),S=e.props?c:r_(c)}}catch(U){vs.length=0,Ro(U,t,1),_=$e(St)}let V=_;if(S&&I!==!1){const U=Object.keys(S),{shapeFlag:ie}=V;U.length&&ie&7&&(o&&U.some(Qc)&&(S=s_(S,o)),V=Vn(V,S))}return n.dirs&&(V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),_=V,Gi(D),_}const r_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Io(n))&&((e||(e={}))[n]=t[n]);return e},s_=(t,e)=>{const n={};for(const r in t)(!Qc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function i_(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ql(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==r[f]&&!ko(u,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ql(r,o,u):!0:!!o;return!1}function Ql(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ko(n,i))return!0}return!1}function o_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const a_=t=>t.__isSuspense;function c_(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):t_(t)}function Mi(t,e){if(De){let n=De.provides;const r=De.parent&&De.parent.provides;r===n&&(n=De.provides=Object.create(r)),n[t]=e}}function dn(t,e,n=!1){const r=De||wt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Q(e)?e.call(r.proxy):e}}const Jl={};function Ir(t,e,n){return jd(t,e,n)}function jd(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=pe){const a=De;let c,u=!1,l=!1;if(Be(t)?(c=()=>t.value,u=Ad(t)):br(t)?(c=()=>t,r=!0):W(t)?(l=!0,u=t.some(br),c=()=>t.map(S=>{if(Be(S))return S.value;if(br(S))return On(S);if(Q(S))return fn(S,a,2)})):Q(t)?e?c=()=>fn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Et(t,a,3,[f])}:c=Tt,e&&r){const S=c;c=()=>On(S())}let h,f=S=>{h=_.onStop=()=>{fn(S,a,4)}};if(Os)return f=Tt,e?n&&Et(e,a,3,[c(),l?[]:void 0,f]):c(),Tt;let p=l?[]:Jl;const m=()=>{if(!!_.active)if(e){const S=_.run();(r||u||(l?S.some((D,V)=>Cs(D,p[V])):Cs(S,p)))&&(h&&h(),Et(e,a,3,[S,p===Jl?void 0:p,f]),p=S)}else _.run()};m.allowRecurse=!!e;let I;s==="sync"?I=m:s==="post"?I=()=>ot(m,a&&a.suspense):I=()=>{!a||a.isMounted?e_(m):m()};const _=new nu(c,I);return e?n?m():p=_.run():s==="post"?ot(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&Jc(a.scope.effects,_)}}function u_(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?qd(r,t):()=>r[t]:t.bind(r,r);let i;Q(e)?i=e:(i=e.handler,n=e);const o=De;kr(this);const a=jd(s,i.bind(r),n);return o?kr(o):Ln(),a}function qd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function On(t,e){if(!Pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Be(t))On(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)On(t[n],e);else if(fd(t)||Er(t))t.forEach(n=>{On(n,e)});else if(gd(t))for(const n in t)On(t[n],e);return t}function l_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wd(()=>{t.isMounted=!0}),Yd(()=>{t.isUnmounting=!0}),t}const vt=[Function,Array],h_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vt,onEnter:vt,onAfterEnter:vt,onEnterCancelled:vt,onBeforeLeave:vt,onLeave:vt,onAfterLeave:vt,onLeaveCancelled:vt,onBeforeAppear:vt,onAppear:vt,onAfterAppear:vt,onAppearCancelled:vt},setup(t,{slots:e}){const n=J_(),r=l_();let s;return()=>{const i=e.default&&Kd(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const I of i)if(I.type!==St){o=I;break}}const a=ae(t),{mode:c}=a;if(r.isLeaving)return _a(o);const u=Zl(o);if(!u)return _a(o);const l=tc(u,a,r,n);nc(u,l);const h=n.subTree,f=h&&Zl(h);let p=!1;const{getTransitionKey:m}=u.type;if(m){const I=m();s===void 0?s=I:I!==s&&(s=I,p=!0)}if(f&&f.type!==St&&(!kn(u,f)||p)){const I=tc(f,a,r,n);if(nc(f,I),c==="out-in")return r.isLeaving=!0,I.afterLeave=()=>{r.isLeaving=!1,n.update()},_a(o);c==="in-out"&&u.type!==St&&(I.delayLeave=(_,S,D)=>{const V=Hd(r,f);V[String(f.key)]=f,_._leaveCb=()=>{S(),_._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=D})}return o}}},f_=h_;function Hd(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function tc(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:I,onAppear:_,onAfterAppear:S,onAppearCancelled:D}=e,V=String(t.key),U=Hd(n,t),ie=(X,_e)=>{X&&Et(X,r,9,_e)},ue={mode:i,persisted:o,beforeEnter(X){let _e=a;if(!n.isMounted)if(s)_e=I||a;else return;X._leaveCb&&X._leaveCb(!0);const ge=U[V];ge&&kn(t,ge)&&ge.el._leaveCb&&ge.el._leaveCb(),ie(_e,[X])},enter(X){let _e=c,ge=u,Ge=l;if(!n.isMounted)if(s)_e=_||c,ge=S||u,Ge=D||l;else return;let We=!1;const Ue=X._enterCb=Qt=>{We||(We=!0,Qt?ie(Ge,[X]):ie(ge,[X]),ue.delayedLeave&&ue.delayedLeave(),X._enterCb=void 0)};_e?(_e(X,Ue),_e.length<=1&&Ue()):Ue()},leave(X,_e){const ge=String(t.key);if(X._enterCb&&X._enterCb(!0),n.isUnmounting)return _e();ie(h,[X]);let Ge=!1;const We=X._leaveCb=Ue=>{Ge||(Ge=!0,_e(),Ue?ie(m,[X]):ie(p,[X]),X._leaveCb=void 0,U[ge]===t&&delete U[ge])};U[ge]=t,f?(f(X,We),f.length<=1&&We()):We()},clone(X){return tc(X,e,n,r)}};return ue}function _a(t){if(Oo(t))return t=Vn(t),t.children=null,t}function Zl(t){return Oo(t)?t.children?t.children[0]:void 0:t}function nc(t,e){t.shapeFlag&6&&t.component?nc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Kd(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===_t?(o.patchFlag&128&&s++,r=r.concat(Kd(o.children,e,a))):(e||o.type!==St)&&r.push(a!=null?Vn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function zd(t){return Q(t)?{setup:t,name:t.name}:t}const rc=t=>!!t.type.__asyncLoader,Oo=t=>t.type.__isKeepAlive;function d_(t,e){Gd(t,"a",e)}function p_(t,e){Gd(t,"da",e)}function Gd(t,e,n=De){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Do(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Oo(s.parent.vnode)&&g_(r,e,n,s),s=s.parent}}function g_(t,e,n,r){const s=Do(e,t,r,!0);Xd(()=>{Jc(r[e],s)},n)}function Do(t,e,n=De,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;jr(),kr(n);const a=Et(e,n,t,o);return Ln(),qr(),a});return r?s.unshift(i):s.push(i),i}}const Xt=t=>(e,n=De)=>(!Os||t==="sp")&&Do(t,e,n),m_=Xt("bm"),Wd=Xt("m"),y_=Xt("bu"),v_=Xt("u"),Yd=Xt("bum"),Xd=Xt("um"),__=Xt("sp"),w_=Xt("rtg"),E_=Xt("rtc");function b_(t,e=De){Do("ec",t,e)}let sc=!0;function I_(t){const e=Jd(t),n=t.proxy,r=t.ctx;sc=!1,e.beforeCreate&&eh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:p,updated:m,activated:I,deactivated:_,beforeDestroy:S,beforeUnmount:D,destroyed:V,unmounted:U,render:ie,renderTracked:ue,renderTriggered:X,errorCaptured:_e,serverPrefetch:ge,expose:Ge,inheritAttrs:We,components:Ue,directives:Qt,filters:ir}=e;if(u&&T_(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const le=o[me];Q(le)&&(r[me]=le.bind(n))}if(s){const me=s.call(n,n);Pe(me)&&(t.data=Hr(me))}if(sc=!0,i)for(const me in i){const le=i[me],lt=Q(le)?le.bind(n,n):Q(le.get)?le.get.bind(n,n):Tt,ar=!Q(le)&&Q(le.set)?le.set.bind(n):Tt,$t=Pt({get:lt,set:ar});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>$t.value,set:Rt=>$t.value=Rt})}if(a)for(const me in a)Qd(a[me],r,n,me);if(c){const me=Q(c)?c.call(n):c;Reflect.ownKeys(me).forEach(le=>{Mi(le,me[le])})}l&&eh(l,t,"c");function Ne(me,le){W(le)?le.forEach(lt=>me(lt.bind(n))):le&&me(le.bind(n))}if(Ne(m_,h),Ne(Wd,f),Ne(y_,p),Ne(v_,m),Ne(d_,I),Ne(p_,_),Ne(b_,_e),Ne(E_,ue),Ne(w_,X),Ne(Yd,D),Ne(Xd,U),Ne(__,ge),W(Ge))if(Ge.length){const me=t.exposed||(t.exposed={});Ge.forEach(le=>{Object.defineProperty(me,le,{get:()=>n[le],set:lt=>n[le]=lt})})}else t.exposed||(t.exposed={});ie&&t.render===Tt&&(t.render=ie),We!=null&&(t.inheritAttrs=We),Ue&&(t.components=Ue),Qt&&(t.directives=Qt)}function T_(t,e,n=Tt,r=!1){W(t)&&(t=ic(t));for(const s in t){const i=t[s];let o;Pe(i)?"default"in i?o=dn(i.from||s,i.default,!0):o=dn(i.from||s):o=dn(i),Be(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function eh(t,e,n){Et(W(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qd(t,e,n,r){const s=r.includes(".")?qd(n,r):()=>n[r];if(He(t)){const i=e[t];Q(i)&&Ir(s,i)}else if(Q(t))Ir(s,t.bind(n));else if(Pe(t))if(W(t))t.forEach(i=>Qd(i,e,n,r));else{const i=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(i)&&Ir(s,i,t)}}function Jd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Wi(c,u,o,!0)),Wi(c,e,o)),i.set(e,c),c}function Wi(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Wi(t,i,n,!0),s&&s.forEach(o=>Wi(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=S_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const S_={data:th,props:An,emits:An,methods:An,computed:An,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:An,directives:An,watch:A_,provide:th,inject:C_};function th(t,e){return e?t?function(){return Je(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function C_(t,e){return An(ic(t),ic(e))}function ic(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function et(t,e){return t?[...new Set([].concat(t,e))]:e}function An(t,e){return t?Je(Je(Object.create(null),t),e):e}function A_(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const r in e)n[r]=et(t[r],e[r]);return n}function R_(t,e,n,r=!1){const s={},i={};Ki(i,Po,1),t.propsDefaults=Object.create(null),Zd(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Hv(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function k_(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ae(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(ko(t.emitsOptions,f))continue;const p=e[f];if(c)if(re(i,f))p!==i[f]&&(i[f]=p,u=!0);else{const m=Ft(f);s[m]=oc(c,a,m,p,t,!1)}else p!==i[f]&&(i[f]=p,u=!0)}}}else{Zd(t,e,s,i)&&(u=!0);let l;for(const h in a)(!e||!re(e,h)&&((l=Vr(h))===h||!re(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(s[h]=oc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!re(e,h)&&!0)&&(delete i[h],u=!0)}u&&Gt(t,"set","$attrs")}function Zd(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Di(c))continue;const u=e[c];let l;s&&re(s,l=Ft(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:ko(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=ae(n),u=a||pe;for(let l=0;l<i.length;l++){const h=i[l];n[h]=oc(s,c,h,u[h],t,!re(u,h))}}return o}function oc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&Q(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(kr(s),r=u[n]=c.call(null,e),Ln())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Vr(n))&&(r=!0))}return r}function ep(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Q(t)){const l=h=>{c=!0;const[f,p]=ep(h,e,!0);Je(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return r.set(t,wr),wr;if(W(i))for(let l=0;l<i.length;l++){const h=Ft(i[l]);nh(h)&&(o[h]=pe)}else if(i)for(const l in i){const h=Ft(l);if(nh(h)){const f=i[l],p=o[h]=W(f)||Q(f)?{type:f}:f;if(p){const m=ih(Boolean,p.type),I=ih(String,p.type);p[0]=m>-1,p[1]=I<0||m<I,(m>-1||re(p,"default"))&&a.push(h)}}}const u=[o,a];return r.set(t,u),u}function nh(t){return t[0]!=="$"}function rh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function sh(t,e){return rh(t)===rh(e)}function ih(t,e){return W(e)?e.findIndex(n=>sh(n,t)):Q(e)&&sh(e,t)?0:-1}const tp=t=>t[0]==="_"||t==="$stable",lu=t=>W(t)?t.map(Dt):[Dt(t)],N_=(t,e,n)=>{const r=xi((...s)=>lu(e(...s)),n);return r._c=!1,r},np=(t,e,n)=>{const r=t._ctx;for(const s in t){if(tp(s))continue;const i=t[s];if(Q(i))e[s]=N_(s,i,r);else if(i!=null){const o=lu(i);e[s]=()=>o}}},rp=(t,e)=>{const n=lu(e);t.slots.default=()=>n},O_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),Ki(e,"_",n)):np(e,t.slots={})}else t.slots={},e&&rp(t,e);Ki(t.slots,Po,1)},D_=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=pe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Je(s,e),!n&&a===1&&delete s._):(i=!e.$stable,np(e,s)),o=e}else e&&(rp(t,e),o={default:1});if(i)for(const a in s)!tp(a)&&!(a in o)&&delete s[a]};function oh(t,e){const n=wt;if(n===null)return t;const r=xo(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=pe]=e[i];Q(o)&&(o={mounted:o,updated:o}),o.deep&&On(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function Sn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(jr(),Et(c,n,8,[t.el,a,t,e]),qr())}}function sp(){return{app:null,config:{isNativeTag:lv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let P_=0;function x_(t,e){return function(r,s=null){Q(r)||(r=Object.assign({},r)),s!=null&&!Pe(s)&&(s=null);const i=sp(),o=new Set;let a=!1;const c=i.app={_uid:P_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:iw,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&Q(u.install)?(o.add(u),u.install(c,...l)):Q(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=$e(r,s);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,xo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function ac(t,e,n,r,s=!1){if(W(t)){t.forEach((f,p)=>ac(f,e&&(W(e)?e[p]:e),n,r,s));return}if(rc(r)&&!s)return;const i=r.shapeFlag&4?xo(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===pe?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(He(u)?(l[u]=null,re(h,u)&&(h[u]=null)):Be(u)&&(u.value=null)),Q(c))fn(c,a,12,[o,l]);else{const f=He(c),p=Be(c);if(f||p){const m=()=>{if(t.f){const I=f?l[c]:c.value;s?W(I)&&Jc(I,i):W(I)?I.includes(i)||I.push(i):f?(l[c]=[i],re(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,re(h,c)&&(h[c]=o)):Be(c)&&(c.value=o,t.k&&(l[t.k]=o))};o?(m.id=-1,ot(m,n)):m()}}}const ot=c_;function M_(t){return L_(t)}function L_(t,e){const n=mv();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:p=Tt,cloneNode:m,insertStaticContent:I}=t,_=(d,g,y,b=null,E=null,R=null,O=!1,C=null,k=!!g.dynamicChildren)=>{if(d===g)return;d&&!kn(d,g)&&(b=B(d),yt(d,E,R,!0),d=null),g.patchFlag===-2&&(k=!1,g.dynamicChildren=null);const{type:T,ref:j,shapeFlag:M}=g;switch(T){case hu:S(d,g,y,b);break;case St:D(d,g,y,b);break;case wa:d==null&&V(g,y,b,O);break;case _t:Qt(d,g,y,b,E,R,O,C,k);break;default:M&1?ue(d,g,y,b,E,R,O,C,k):M&6?ir(d,g,y,b,E,R,O,C,k):(M&64||M&128)&&T.process(d,g,y,b,E,R,O,C,k,ye)}j!=null&&E&&ac(j,d&&d.ref,R,g||d,!g)},S=(d,g,y,b)=>{if(d==null)r(g.el=a(g.children),y,b);else{const E=g.el=d.el;g.children!==d.children&&u(E,g.children)}},D=(d,g,y,b)=>{d==null?r(g.el=c(g.children||""),y,b):g.el=d.el},V=(d,g,y,b)=>{[d.el,d.anchor]=I(d.children,g,y,b,d.el,d.anchor)},U=({el:d,anchor:g},y,b)=>{let E;for(;d&&d!==g;)E=f(d),r(d,y,b),d=E;r(g,y,b)},ie=({el:d,anchor:g})=>{let y;for(;d&&d!==g;)y=f(d),s(d),d=y;s(g)},ue=(d,g,y,b,E,R,O,C,k)=>{O=O||g.type==="svg",d==null?X(g,y,b,E,R,O,C,k):Ge(d,g,E,R,O,C,k)},X=(d,g,y,b,E,R,O,C)=>{let k,T;const{type:j,props:M,shapeFlag:q,transition:z,patchFlag:se,dirs:Ie}=d;if(d.el&&m!==void 0&&se===-1)k=d.el=m(d.el);else{if(k=d.el=o(d.type,R,M&&M.is,M),q&8?l(k,d.children):q&16&&ge(d.children,k,null,b,E,R&&j!=="foreignObject",O,C),Ie&&Sn(d,null,b,"created"),M){for(const we in M)we!=="value"&&!Di(we)&&i(k,we,null,M[we],R,d.children,b,E,N);"value"in M&&i(k,"value",null,M.value),(T=M.onVnodeBeforeMount)&&Nt(T,b,d)}_e(k,d,d.scopeId,O,b)}Ie&&Sn(d,null,b,"beforeMount");const fe=(!E||E&&!E.pendingBranch)&&z&&!z.persisted;fe&&z.beforeEnter(k),r(k,g,y),((T=M&&M.onVnodeMounted)||fe||Ie)&&ot(()=>{T&&Nt(T,b,d),fe&&z.enter(k),Ie&&Sn(d,null,b,"mounted")},E)},_e=(d,g,y,b,E)=>{if(y&&p(d,y),b)for(let R=0;R<b.length;R++)p(d,b[R]);if(E){let R=E.subTree;if(g===R){const O=E.vnode;_e(d,O,O.scopeId,O.slotScopeIds,E.parent)}}},ge=(d,g,y,b,E,R,O,C,k=0)=>{for(let T=k;T<d.length;T++){const j=d[T]=C?rn(d[T]):Dt(d[T]);_(null,j,g,y,b,E,R,O,C)}},Ge=(d,g,y,b,E,R,O)=>{const C=g.el=d.el;let{patchFlag:k,dynamicChildren:T,dirs:j}=g;k|=d.patchFlag&16;const M=d.props||pe,q=g.props||pe;let z;y&&Cn(y,!1),(z=q.onVnodeBeforeUpdate)&&Nt(z,y,g,d),j&&Sn(g,d,y,"beforeUpdate"),y&&Cn(y,!0);const se=E&&g.type!=="foreignObject";if(T?We(d.dynamicChildren,T,C,y,b,se,R):O||lt(d,g,C,null,y,b,se,R,!1),k>0){if(k&16)Ue(C,g,M,q,y,b,E);else if(k&2&&M.class!==q.class&&i(C,"class",null,q.class,E),k&4&&i(C,"style",M.style,q.style,E),k&8){const Ie=g.dynamicProps;for(let fe=0;fe<Ie.length;fe++){const we=Ie[fe],bt=M[we],cr=q[we];(cr!==bt||we==="value")&&i(C,we,bt,cr,E,d.children,y,b,N)}}k&1&&d.children!==g.children&&l(C,g.children)}else!O&&T==null&&Ue(C,g,M,q,y,b,E);((z=q.onVnodeUpdated)||j)&&ot(()=>{z&&Nt(z,y,g,d),j&&Sn(g,d,y,"updated")},b)},We=(d,g,y,b,E,R,O)=>{for(let C=0;C<g.length;C++){const k=d[C],T=g[C],j=k.el&&(k.type===_t||!kn(k,T)||k.shapeFlag&70)?h(k.el):y;_(k,T,j,null,b,E,R,O,!0)}},Ue=(d,g,y,b,E,R,O)=>{if(y!==b){for(const C in b){if(Di(C))continue;const k=b[C],T=y[C];k!==T&&C!=="value"&&i(d,C,T,k,O,g.children,E,R,N)}if(y!==pe)for(const C in y)!Di(C)&&!(C in b)&&i(d,C,y[C],null,O,g.children,E,R,N);"value"in b&&i(d,"value",y.value,b.value)}},Qt=(d,g,y,b,E,R,O,C,k)=>{const T=g.el=d?d.el:a(""),j=g.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:q,slotScopeIds:z}=g;z&&(C=C?C.concat(z):z),d==null?(r(T,y,b),r(j,y,b),ge(g.children,y,j,E,R,O,C,k)):M>0&&M&64&&q&&d.dynamicChildren?(We(d.dynamicChildren,q,y,E,R,O,C),(g.key!=null||E&&g===E.subTree)&&ip(d,g,!0)):lt(d,g,y,j,E,R,O,C,k)},ir=(d,g,y,b,E,R,O,C,k)=>{g.slotScopeIds=C,d==null?g.shapeFlag&512?E.ctx.activate(g,y,b,O,k):or(g,y,b,E,R,O,k):Ne(d,g,k)},or=(d,g,y,b,E,R,O)=>{const C=d.component=Q_(d,b,E);if(Oo(d)&&(C.ctx.renderer=ye),Z_(C),C.asyncDep){if(E&&E.registerDep(C,me),!d.el){const k=C.subTree=$e(St);D(null,k,g,y)}return}me(C,d,g,y,E,R,O)},Ne=(d,g,y)=>{const b=g.component=d.component;if(i_(d,g,y))if(b.asyncDep&&!b.asyncResolved){le(b,g,y);return}else b.next=g,Zv(b.update),b.update();else g.component=d.component,g.el=d.el,b.vnode=g},me=(d,g,y,b,E,R,O)=>{const C=()=>{if(d.isMounted){let{next:j,bu:M,u:q,parent:z,vnode:se}=d,Ie=j,fe;Cn(d,!1),j?(j.el=se.el,le(d,j,O)):j=se,M&&Pi(M),(fe=j.props&&j.props.onVnodeBeforeUpdate)&&Nt(fe,z,j,se),Cn(d,!0);const we=va(d),bt=d.subTree;d.subTree=we,_(bt,we,h(bt.el),B(bt),d,E,R),j.el=we.el,Ie===null&&o_(d,we.el),q&&ot(q,E),(fe=j.props&&j.props.onVnodeUpdated)&&ot(()=>Nt(fe,z,j,se),E)}else{let j;const{el:M,props:q}=g,{bm:z,m:se,parent:Ie}=d,fe=rc(g);if(Cn(d,!1),z&&Pi(z),!fe&&(j=q&&q.onVnodeBeforeMount)&&Nt(j,Ie,g),Cn(d,!0),M&&J){const we=()=>{d.subTree=va(d),J(M,d.subTree,d,E,null)};fe?g.type.__asyncLoader().then(()=>!d.isUnmounted&&we()):we()}else{const we=d.subTree=va(d);_(null,we,y,b,d,E,R),g.el=we.el}if(se&&ot(se,E),!fe&&(j=q&&q.onVnodeMounted)){const we=g;ot(()=>Nt(j,Ie,we),E)}g.shapeFlag&256&&d.a&&ot(d.a,E),d.isMounted=!0,g=y=b=null}},k=d.effect=new nu(C,()=>Ld(d.update),d.scope),T=d.update=k.run.bind(k);T.id=d.uid,Cn(d,!0),T()},le=(d,g,y)=>{g.component=d;const b=d.vnode.props;d.vnode=g,d.next=null,k_(d,g.props,b,y),D_(d,g.children,y),jr(),uu(void 0,d.update),qr()},lt=(d,g,y,b,E,R,O,C,k=!1)=>{const T=d&&d.children,j=d?d.shapeFlag:0,M=g.children,{patchFlag:q,shapeFlag:z}=g;if(q>0){if(q&128){$t(T,M,y,b,E,R,O,C,k);return}else if(q&256){ar(T,M,y,b,E,R,O,C,k);return}}z&8?(j&16&&N(T,E,R),M!==T&&l(y,M)):j&16?z&16?$t(T,M,y,b,E,R,O,C,k):N(T,E,R,!0):(j&8&&l(y,""),z&16&&ge(M,y,b,E,R,O,C,k))},ar=(d,g,y,b,E,R,O,C,k)=>{d=d||wr,g=g||wr;const T=d.length,j=g.length,M=Math.min(T,j);let q;for(q=0;q<M;q++){const z=g[q]=k?rn(g[q]):Dt(g[q]);_(d[q],z,y,null,E,R,O,C,k)}T>j?N(d,E,R,!0,!1,M):ge(g,y,b,E,R,O,C,k,M)},$t=(d,g,y,b,E,R,O,C,k)=>{let T=0;const j=g.length;let M=d.length-1,q=j-1;for(;T<=M&&T<=q;){const z=d[T],se=g[T]=k?rn(g[T]):Dt(g[T]);if(kn(z,se))_(z,se,y,null,E,R,O,C,k);else break;T++}for(;T<=M&&T<=q;){const z=d[M],se=g[q]=k?rn(g[q]):Dt(g[q]);if(kn(z,se))_(z,se,y,null,E,R,O,C,k);else break;M--,q--}if(T>M){if(T<=q){const z=q+1,se=z<j?g[z].el:b;for(;T<=q;)_(null,g[T]=k?rn(g[T]):Dt(g[T]),y,se,E,R,O,C,k),T++}}else if(T>q)for(;T<=M;)yt(d[T],E,R,!0),T++;else{const z=T,se=T,Ie=new Map;for(T=se;T<=q;T++){const ht=g[T]=k?rn(g[T]):Dt(g[T]);ht.key!=null&&Ie.set(ht.key,T)}let fe,we=0;const bt=q-se+1;let cr=!1,Ul=0;const ss=new Array(bt);for(T=0;T<bt;T++)ss[T]=0;for(T=z;T<=M;T++){const ht=d[T];if(we>=bt){yt(ht,E,R,!0);continue}let kt;if(ht.key!=null)kt=Ie.get(ht.key);else for(fe=se;fe<=q;fe++)if(ss[fe-se]===0&&kn(ht,g[fe])){kt=fe;break}kt===void 0?yt(ht,E,R,!0):(ss[kt-se]=T+1,kt>=Ul?Ul=kt:cr=!0,_(ht,g[kt],y,null,E,R,O,C,k),we++)}const Fl=cr?U_(ss):wr;for(fe=Fl.length-1,T=bt-1;T>=0;T--){const ht=se+T,kt=g[ht],Bl=ht+1<j?g[ht+1].el:b;ss[T]===0?_(null,kt,y,Bl,E,R,O,C,k):cr&&(fe<0||T!==Fl[fe]?Rt(kt,y,Bl,2):fe--)}}},Rt=(d,g,y,b,E=null)=>{const{el:R,type:O,transition:C,children:k,shapeFlag:T}=d;if(T&6){Rt(d.component.subTree,g,y,b);return}if(T&128){d.suspense.move(g,y,b);return}if(T&64){O.move(d,g,y,ye);return}if(O===_t){r(R,g,y);for(let M=0;M<k.length;M++)Rt(k[M],g,y,b);r(d.anchor,g,y);return}if(O===wa){U(d,g,y);return}if(b!==2&&T&1&&C)if(b===0)C.beforeEnter(R),r(R,g,y),ot(()=>C.enter(R),E);else{const{leave:M,delayLeave:q,afterLeave:z}=C,se=()=>r(R,g,y),Ie=()=>{M(R,()=>{se(),z&&z()})};q?q(R,se,Ie):Ie()}else r(R,g,y)},yt=(d,g,y,b=!1,E=!1)=>{const{type:R,props:O,ref:C,children:k,dynamicChildren:T,shapeFlag:j,patchFlag:M,dirs:q}=d;if(C!=null&&ac(C,null,y,d,!0),j&256){g.ctx.deactivate(d);return}const z=j&1&&q,se=!rc(d);let Ie;if(se&&(Ie=O&&O.onVnodeBeforeUnmount)&&Nt(Ie,g,d),j&6)L(d.component,y,b);else{if(j&128){d.suspense.unmount(y,b);return}z&&Sn(d,null,g,"beforeUnmount"),j&64?d.type.remove(d,g,y,E,ye,b):T&&(R!==_t||M>0&&M&64)?N(T,g,y,!1,!0):(R===_t&&M&384||!E&&j&16)&&N(k,g,y),b&&ma(d)}(se&&(Ie=O&&O.onVnodeUnmounted)||z)&&ot(()=>{Ie&&Nt(Ie,g,d),z&&Sn(d,null,g,"unmounted")},y)},ma=d=>{const{type:g,el:y,anchor:b,transition:E}=d;if(g===_t){w(y,b);return}if(g===wa){ie(d);return}const R=()=>{s(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:O,delayLeave:C}=E,k=()=>O(y,R);C?C(d.el,R,k):k()}else R()},w=(d,g)=>{let y;for(;d!==g;)y=f(d),s(d),d=y;s(g)},L=(d,g,y)=>{const{bum:b,scope:E,update:R,subTree:O,um:C}=d;b&&Pi(b),E.stop(),R&&(R.active=!1,yt(O,d,g,y)),C&&ot(C,g),ot(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},N=(d,g,y,b=!1,E=!1,R=0)=>{for(let O=R;O<d.length;O++)yt(d[O],g,y,b,E)},B=d=>d.shapeFlag&6?B(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),he=(d,g,y)=>{d==null?g._vnode&&yt(g._vnode,null,null,!0):_(g._vnode||null,d,g,null,null,null,y),Bd(),g._vnode=d},ye={p:_,um:yt,m:Rt,r:ma,mt:or,mc:ge,pc:lt,pbc:We,n:B,o:t};let ee,J;return e&&([ee,J]=e(ye)),{render:he,hydrate:ee,createApp:x_(he,ee)}}function Cn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ip(t,e,n=!1){const r=t.children,s=e.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=rn(s[i]),a.el=o.el),n||ip(o,a))}}function U_(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const F_=t=>t.__isTeleport,op="components";function ah(t,e){return $_(op,t,!0,e)||t}const B_=Symbol();function $_(t,e,n=!0,r=!1){const s=wt||De;if(s){const i=s.type;if(t===op){const a=rw(i);if(a&&(a===e||a===Ft(e)||a===Co(Ft(e))))return i}const o=ch(s[t]||i[t],e)||ch(s.appContext[t],e);return!o&&r?i:o}}function ch(t,e){return t&&(t[e]||t[Ft(e)]||t[Co(Ft(e))])}const _t=Symbol(void 0),hu=Symbol(void 0),St=Symbol(void 0),wa=Symbol(void 0),vs=[];let Mn=null;function Ns(t=!1){vs.push(Mn=t?null:[])}function V_(){vs.pop(),Mn=vs[vs.length-1]||null}let Yi=1;function uh(t){Yi+=t}function ap(t){return t.dynamicChildren=Yi>0?Mn||wr:null,V_(),Yi>0&&Mn&&Mn.push(t),t}function Xi(t,e,n,r,s,i){return ap(te(t,e,n,r,s,i,!0))}function j_(t,e,n,r,s){return ap($e(t,e,n,r,s,!0))}function cc(t){return t?t.__v_isVNode===!0:!1}function kn(t,e){return t.type===e.type&&t.key===e.key}const Po="__vInternal",cp=({key:t})=>t!=null?t:null,Li=({ref:t,ref_key:e,ref_for:n})=>t!=null?He(t)||Be(t)||Q(t)?{i:wt,r:t,k:e,f:!!n}:t:null;function te(t,e=null,n=null,r=0,s=null,i=t===_t?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cp(e),ref:e&&Li(e),scopeId:No,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(fu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),Yi>0&&!o&&Mn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Mn.push(c),c}const $e=q_;function q_(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===B_)&&(t=St),cc(t)){const a=Vn(t,e,!0);return n&&fu(a,n),a}if(sw(t)&&(t=t.__vccOpts),e){e=H_(e);let{class:a,style:c}=e;a&&!He(a)&&(e.class=Xc(a)),Pe(c)&&(Rd(c)&&!W(c)&&(c=Je({},c)),e.style=Yc(c))}const o=He(t)?1:a_(t)?128:F_(t)?64:Pe(t)?4:Q(t)?2:0;return te(t,e,n,r,s,o,i,!0)}function H_(t){return t?Rd(t)||Po in t?Je({},t):t:null}function Vn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?G_(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&cp(a),ref:e&&e.ref?n&&s?W(s)?s.concat(Li(e)):[s,Li(e)]:Li(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_t?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vn(t.ssContent),ssFallback:t.ssFallback&&Vn(t.ssFallback),el:t.el,anchor:t.anchor}}function K_(t=" ",e=0){return $e(hu,null,t,e)}function z_(t="",e=!1){return e?(Ns(),j_(St,null,t)):$e(St,null,t)}function Dt(t){return t==null||typeof t=="boolean"?$e(St):W(t)?$e(_t,null,t.slice()):typeof t=="object"?rn(t):$e(hu,null,String(t))}function rn(t){return t.el===null||t.memo?t:Vn(t)}function fu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),fu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Po in e)?e._ctx=wt:s===3&&wt&&(wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:wt},n=32):(e=String(e),r&64?(n=16,e=[K_(e)]):n=8);t.children=e,t.shapeFlag|=n}function G_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Xc([e.class,r.class]));else if(s==="style")e.style=Yc([e.style,r.style]);else if(Io(s)){const i=e[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Nt(t,e,n,r=null){Et(t,e,7,[n,r])}const uc=t=>t?up(t)?xo(t)||t.proxy:uc(t.parent):null,Qi=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>uc(t.parent),$root:t=>uc(t.root),$emit:t=>t.emit,$options:t=>Jd(t),$forceUpdate:t=>()=>Ld(t.update),$nextTick:t=>Md.bind(t.proxy),$watch:t=>u_.bind(t)}),W_={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==pe&&re(r,e))return o[e]=1,r[e];if(s!==pe&&re(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&re(u,e))return o[e]=3,i[e];if(n!==pe&&re(n,e))return o[e]=4,n[e];sc&&(o[e]=0)}}const l=Qi[e];let h,f;if(l)return e==="$attrs"&&gt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==pe&&re(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,re(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==pe&&re(s,e)?(s[e]=n,!0):r!==pe&&re(r,e)?(r[e]=n,!0):re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==pe&&re(t,o)||e!==pe&&re(e,o)||(a=i[0])&&re(a,o)||re(r,o)||re(Qi,o)||re(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Y_=sp();let X_=0;function Q_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Y_,i={uid:X_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new yv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ep(r,s),emitsOptions:Vd(r,s),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:r.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=n_.bind(null,i),t.ce&&t.ce(i),i}let De=null;const J_=()=>De||wt,kr=t=>{De=t,t.scope.on()},Ln=()=>{De&&De.scope.off(),De=null};function up(t){return t.vnode.shapeFlag&4}let Os=!1;function Z_(t,e=!1){Os=e;const{props:n,children:r}=t.vnode,s=up(t);R_(t,n,s,e),O_(t,r);const i=s?ew(t,e):void 0;return Os=!1,i}function ew(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=kd(new Proxy(t.ctx,W_));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?nw(t):null;kr(t),jr();const i=fn(r,t,0,[t.props,s]);if(qr(),Ln(),dd(i)){if(i.then(Ln,Ln),e)return i.then(o=>{lh(t,o,e)}).catch(o=>{Ro(o,t,0)});t.asyncDep=i}else lh(t,i,e)}else lp(t,e)}function lh(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=Pd(e)),lp(t,n)}let hh;function lp(t,e,n){const r=t.type;if(!t.render){if(!e&&hh&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=Je(Je({isCustomElement:i,delimiters:a},o),c);r.render=hh(s,u)}}t.render=r.render||Tt}kr(t),jr(),I_(t),qr(),Ln()}function tw(t){return new Proxy(t.attrs,{get(e,n){return gt(t,"get","$attrs"),e[n]}})}function nw(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=tw(t))},slots:t.slots,emit:t.emit,expose:e}}function xo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Pd(kd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qi)return Qi[n](t)}}))}function rw(t){return Q(t)&&t.displayName||t.name}function sw(t){return Q(t)&&"__vccOpts"in t}const Pt=(t,e)=>Xv(t,e,Os);function hp(t,e,n){const r=arguments.length;return r===2?Pe(e)&&!W(e)?cc(e)?$e(t,null,[e]):$e(t,e):$e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&cc(n)&&(n=[n]),$e(t,e,n))}const iw="3.2.33",ow="http://www.w3.org/2000/svg",Nn=typeof document!="undefined"?document:null,fh=Nn&&Nn.createElement("template"),aw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Nn.createElementNS(ow,t):Nn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Nn.createTextNode(t),createComment:t=>Nn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Nn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{fh.innerHTML=r?`<svg>${t}</svg>`:t;const a=fh.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function cw(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function uw(t,e,n){const r=t.style,s=He(n);if(n&&!s){for(const i in n)lc(r,i,n[i]);if(e&&!He(e))for(const i in e)n[i]==null&&lc(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const dh=/\s*!important$/;function lc(t,e,n){if(W(n))n.forEach(r=>lc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=lw(t,e);dh.test(n)?t.setProperty(Vr(r),n.replace(dh,""),"important"):t[r]=n}}const ph=["Webkit","Moz","ms"],Ea={};function lw(t,e){const n=Ea[e];if(n)return n;let r=Ft(e);if(r!=="filter"&&r in t)return Ea[e]=r;r=Co(r);for(let s=0;s<ph.length;s++){const i=ph[s]+r;if(i in t)return Ea[e]=i}return e}const gh="http://www.w3.org/1999/xlink";function hw(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(gh,e.slice(6,e.length)):t.setAttributeNS(gh,e,n);else{const i=ov(e);n==null||i&&!ld(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function fw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ld(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[fp,dw]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let hc=0;const pw=Promise.resolve(),gw=()=>{hc=0},mw=()=>hc||(pw.then(gw),hc=fp());function gr(t,e,n,r){t.addEventListener(e,n,r)}function yw(t,e,n,r){t.removeEventListener(e,n,r)}function vw(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=_w(e);if(r){const u=i[e]=ww(r,s);gr(t,a,u,c)}else o&&(yw(t,a,o,c),i[e]=void 0)}}const mh=/(?:Once|Passive|Capture)$/;function _w(t){let e;if(mh.test(t)){e={};let n;for(;n=t.match(mh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Vr(t.slice(2)),e]}function ww(t,e){const n=r=>{const s=r.timeStamp||fp();(dw||s>=n.attached-1)&&Et(Ew(r,n.value),e,5,[r])};return n.value=t,n.attached=mw(),n}function Ew(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const yh=/^on[a-z]/,bw=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?cw(t,r,s):e==="style"?uw(t,n,r):Io(e)?Qc(e)||vw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Iw(t,e,r,s))?fw(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),hw(t,e,r,s))};function Iw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&yh.test(e)&&Q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||yh.test(e)&&He(n)?!1:e in t}const Tw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};f_.props;const vh=t=>{const e=t.props["onUpdate:modelValue"];return W(e)?n=>Pi(e,n):e};function Sw(t){t.target.composing=!0}function _h(t){const e=t.target;e.composing&&(e.composing=!1,Cw(e,"input"))}function Cw(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const wh={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=vh(s);const i=r||s.props&&s.props.type==="number";gr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Wa(a)),t._assign(a)}),n&&gr(t,"change",()=>{t.value=t.value.trim()}),e||(gr(t,"compositionstart",Sw),gr(t,"compositionend",_h),gr(t,"change",_h))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=vh(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Wa(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Aw=["ctrl","shift","alt","meta"],Rw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Aw.some(n=>t[`${n}Key`]&&!e.includes(n))},kw=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Rw[e[s]];if(i&&i(n,e))return}return t(n,...r)},Nw=Je({patchProp:bw},aw);let Eh;function Ow(){return Eh||(Eh=M_(Nw))}const Dw=(...t)=>{const e=Ow().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Pw(r);if(!s)return;const i=e._component;!Q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Pw(t){return He(t)?document.querySelector(t):t}const xw="modulepreload",bh={},Mw="/if-lost/",is=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${Mw}${r}`,r in bh)return;bh[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":xw,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};function Lw(){return dp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function dp(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const Uw=typeof Proxy=="function",Fw="devtools-plugin:setup",Bw="plugin:settings:set";let ur,fc;function $w(){var t;return ur!==void 0||(typeof window!="undefined"&&window.performance?(ur=!0,fc=window.performance):typeof global!="undefined"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(ur=!0,fc=global.perf_hooks.performance):ur=!1),ur}function Vw(){return $w()?fc.now():Date.now()}class jw{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return Vw()}},n&&n.on(Bw,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function qw(t,e){const n=t,r=dp(),s=Lw(),i=Uw&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(Fw,t,e);else{const o=i?new jw(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const pp=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Kr=t=>pp?Symbol(t):"_vr_"+t,Hw=Kr("rvlm"),Ih=Kr("rvd"),du=Kr("r"),gp=Kr("rl"),dc=Kr("rvl"),mr=typeof window!="undefined";function Kw(t){return t.__esModule||pp&&t[Symbol.toStringTag]==="Module"}const de=Object.assign;function ba(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const _s=()=>{},zw=/\/$/,Gw=t=>t.replace(zw,"");function Ia(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Qw(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Ww(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Th(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Yw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Nr(e.matched[r],n.matched[s])&&mp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Nr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function mp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Xw(t[n],e[n]))return!1;return!0}function Xw(t,e){return Array.isArray(t)?Sh(t,e):Array.isArray(e)?Sh(e,t):t===e}function Sh(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Qw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ds;(function(t){t.pop="pop",t.push="push"})(Ds||(Ds={}));var ws;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ws||(ws={}));function Jw(t){if(!t)if(mr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Gw(t)}const Zw=/^[^#]+#/;function eE(t,e){return t.replace(Zw,"#")+e}function tE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Mo=()=>({left:window.pageXOffset,top:window.pageYOffset});function nE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=tE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ch(t,e){return(history.state?history.state.position-e:-1)+t}const pc=new Map;function rE(t,e){pc.set(t,e)}function sE(t){const e=pc.get(t);return pc.delete(t),e}let iE=()=>location.protocol+"//"+location.host;function yp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Th(c,"")}return Th(n,t)+r+s}function oE(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const p=yp(t,location),m=n.value,I=e.value;let _=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}_=I?f.position-I.position:0}else r(p);s.forEach(S=>{S(n.value,m,{delta:_,type:Ds.pop,direction:_?_>0?ws.forward:ws.back:ws.unknown})})};function c(){o=n.value}function u(f){s.push(f);const p=()=>{const m=s.indexOf(f);m>-1&&s.splice(m,1)};return i.push(p),p}function l(){const{history:f}=window;!f.state||f.replaceState(de({},f.state,{scroll:Mo()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Ah(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Mo():null}}function aE(t){const{history:e,location:n}=window,r={value:yp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:iE()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),s.value=u}catch(p){console.error(p),n[l?"replace":"assign"](f)}}function o(c,u){const l=de({},e.state,Ah(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=de({},s.value,e.state,{forward:c,scroll:Mo()});i(l.current,l,!0);const h=de({},Ah(r.value,c,null),{position:l.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function cE(t){t=Jw(t);const e=aE(t),n=oE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=de({location:"",base:t,go:r,createHref:eE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function uE(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),cE(t)}function lE(t){return typeof t=="string"||t&&typeof t=="object"}function vp(t){return typeof t=="string"||typeof t=="symbol"}const Zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_p=Kr("nf");var Rh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Rh||(Rh={}));function Or(t,e){return de(new Error,{type:t,[_p]:!0},e)}function en(t,e){return t instanceof Error&&_p in t&&(e==null||!!(t.type&e))}const kh="[^/]+?",hE={sensitive:!1,strict:!1,start:!0,end:!0},fE=/[.+*?^${}()[\]/\\]/g;function dE(t,e){const n=de({},hE,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const f=u[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(fE,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:I,optional:_,regexp:S}=f;i.push({name:m,repeatable:I,optional:_});const D=S||kh;if(D!==kh){p+=10;try{new RegExp(`(${D})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${m}" (${D}): `+U.message)}}let V=I?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(V=_&&u.length<2?`(?:/${V})`:"/"+V),_&&(V+="?"),s+=V,p+=20,_&&(p+=-8),I&&(p+=-20),D===".*"&&(p+=-50)}l.push(p)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const p=l[f]||"",m=i[f-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const p of f)if(p.type===0)l+=p.value;else if(p.type===1){const{value:m,repeatable:I,optional:_}=p,S=m in u?u[m]:"";if(Array.isArray(S)&&!I)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const D=Array.isArray(S)?S.join("/"):S;if(!D)if(_)f.length<2&&t.length>1&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);l+=D}}return l}return{re:o,score:r,keys:i,parse:a,stringify:c}}function pE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function gE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=pE(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const mE={type:0,value:""},yE=/[a-zA-Z0-9_]/;function vE(t){if(!t)return[[]];if(t==="/")return[[mE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:yE.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function _E(t,e,n){const r=dE(vE(t.path),n),s=de(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function wE(t,e){const n=[],r=new Map;e=Oh({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,h,f){const p=!f,m=bE(l);m.aliasOf=f&&f.record;const I=Oh(e,l),_=[m];if("alias"in l){const V=typeof l.alias=="string"?[l.alias]:l.alias;for(const U of V)_.push(de({},m,{components:f?f.record.components:m.components,path:U,aliasOf:f?f.record:m}))}let S,D;for(const V of _){const{path:U}=V;if(h&&U[0]!=="/"){const ie=h.record.path,ue=ie[ie.length-1]==="/"?"":"/";V.path=h.record.path+(U&&ue+U)}if(S=_E(V,h,I),f?f.alias.push(S):(D=D||S,D!==S&&D.alias.push(S),p&&l.name&&!Nh(S)&&o(l.name)),"children"in m){const ie=m.children;for(let ue=0;ue<ie.length;ue++)i(ie[ue],S,f&&f.children[ue])}f=f||S,c(S)}return D?()=>{o(D)}:_s}function o(l){if(vp(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&gE(l,n[h])>=0&&(l.record.path!==n[h].record.path||!wp(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Nh(l)&&r.set(l.record.name,l)}function u(l,h){let f,p={},m,I;if("name"in l&&l.name){if(f=r.get(l.name),!f)throw Or(1,{location:l});I=f.record.name,p=de(EE(h.params,f.keys.filter(D=>!D.optional).map(D=>D.name)),l.params),m=f.stringify(p)}else if("path"in l)m=l.path,f=n.find(D=>D.re.test(m)),f&&(p=f.parse(m),I=f.record.name);else{if(f=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!f)throw Or(1,{location:l,currentLocation:h});I=f.record.name,p=de({},h.params,l.params),m=f.stringify(p)}const _=[];let S=f;for(;S;)_.unshift(S.record),S=S.parent;return{name:I,path:m,params:p,matched:_,meta:TE(_)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function EE(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function bE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:IE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function IE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Nh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function TE(t){return t.reduce((e,n)=>de(e,n.meta),{})}function Oh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function wp(t,e){return e.children.some(n=>n===t||wp(t,n))}const Ep=/#/g,SE=/&/g,CE=/\//g,AE=/=/g,RE=/\?/g,bp=/\+/g,kE=/%5B/g,NE=/%5D/g,Ip=/%5E/g,OE=/%60/g,Tp=/%7B/g,DE=/%7C/g,Sp=/%7D/g,PE=/%20/g;function pu(t){return encodeURI(""+t).replace(DE,"|").replace(kE,"[").replace(NE,"]")}function xE(t){return pu(t).replace(Tp,"{").replace(Sp,"}").replace(Ip,"^")}function gc(t){return pu(t).replace(bp,"%2B").replace(PE,"+").replace(Ep,"%23").replace(SE,"%26").replace(OE,"`").replace(Tp,"{").replace(Sp,"}").replace(Ip,"^")}function ME(t){return gc(t).replace(AE,"%3D")}function LE(t){return pu(t).replace(Ep,"%23").replace(RE,"%3F")}function UE(t){return t==null?"":LE(t).replace(CE,"%2F")}function Ji(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function FE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(bp," "),o=i.indexOf("="),a=Ji(o<0?i:i.slice(0,o)),c=o<0?null:Ji(i.slice(o+1));if(a in e){let u=e[a];Array.isArray(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Dh(t){let e="";for(let n in t){const r=t[n];if(n=ME(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&gc(i)):[r&&gc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function BE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function os(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function sn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Or(4,{from:n,to:e})):h instanceof Error?a(h):lE(h)?a(Or(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Ta(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if($E(a)){const u=(a.__vccOpts||a)[e];u&&s.push(sn(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=Kw(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&sn(f,n,r,i,o)()}))}}return s}function $E(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ph(t){const e=dn(du),n=dn(gp),r=Pt(()=>e.resolve(gs(t.to))),s=Pt(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(Nr.bind(null,l));if(f>-1)return f;const p=xh(c[u-2]);return u>1&&xh(l)===p&&h[h.length-1].path!==p?h.findIndex(Nr.bind(null,c[u-2])):f}),i=Pt(()=>s.value>-1&&HE(n.params,r.value.params)),o=Pt(()=>s.value>-1&&s.value===n.matched.length-1&&mp(n.params,r.value.params));function a(c={}){return qE(c)?e[gs(t.replace)?"replace":"push"](gs(t.to)).catch(_s):Promise.resolve()}return{route:r,href:Pt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const VE=zd({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ph,setup(t,{slots:e}){const n=Hr(Ph(t)),{options:r}=dn(du),s=Pt(()=>({[Mh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Mh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:hp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),jE=VE;function qE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function HE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function xh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mh=(t,e,n)=>t!=null?t:e!=null?e:n,KE=zd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=dn(dc),s=Pt(()=>t.route||r.value),i=dn(Ih,0),o=Pt(()=>s.value.matched[i]);Mi(Ih,i+1),Mi(Hw,o),Mi(dc,s);const a=Kv();return Ir(()=>[a.value,o.value,t.name],([c,u,l],[h,f,p])=>{u&&(u.instances[l]=c,f&&f!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Nr(u,f)||!h)&&(u.enterCallbacks[l]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=o.value,l=u&&u.components[t.name],h=t.name;if(!l)return Lh(n.default,{Component:l,route:c});const f=u.props[t.name],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,I=hp(l,de({},p,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(u.instances[h]=null)},ref:a}));return Lh(n.default,{Component:I,route:c})||I}}});function Lh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zE=KE;function GE(t){const e=wE(t.routes,t),n=t.parseQuery||FE,r=t.stringifyQuery||Dh,s=t.history,i=os(),o=os(),a=os(),c=zv(Zt);let u=Zt;mr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=ba.bind(null,w=>""+w),h=ba.bind(null,UE),f=ba.bind(null,Ji);function p(w,L){let N,B;return vp(w)?(N=e.getRecordMatcher(w),B=L):B=w,e.addRoute(B,N)}function m(w){const L=e.getRecordMatcher(w);L&&e.removeRoute(L)}function I(){return e.getRoutes().map(w=>w.record)}function _(w){return!!e.getRecordMatcher(w)}function S(w,L){if(L=de({},L||c.value),typeof w=="string"){const J=Ia(n,w,L.path),d=e.resolve({path:J.path},L),g=s.createHref(J.fullPath);return de(J,d,{params:f(d.params),hash:Ji(J.hash),redirectedFrom:void 0,href:g})}let N;if("path"in w)N=de({},w,{path:Ia(n,w.path,L.path).path});else{const J=de({},w.params);for(const d in J)J[d]==null&&delete J[d];N=de({},w,{params:h(w.params)}),L.params=h(L.params)}const B=e.resolve(N,L),he=w.hash||"";B.params=l(f(B.params));const ye=Ww(r,de({},w,{hash:xE(he),path:B.path})),ee=s.createHref(ye);return de({fullPath:ye,hash:he,query:r===Dh?BE(w.query):w.query||{}},B,{redirectedFrom:void 0,href:ee})}function D(w){return typeof w=="string"?Ia(n,w,c.value.path):de({},w)}function V(w,L){if(u!==w)return Or(8,{from:L,to:w})}function U(w){return X(w)}function ie(w){return U(de(D(w),{replace:!0}))}function ue(w){const L=w.matched[w.matched.length-1];if(L&&L.redirect){const{redirect:N}=L;let B=typeof N=="function"?N(w):N;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=D(B):{path:B},B.params={}),de({query:w.query,hash:w.hash,params:w.params},B)}}function X(w,L){const N=u=S(w),B=c.value,he=w.state,ye=w.force,ee=w.replace===!0,J=ue(N);if(J)return X(de(D(J),{state:he,force:ye,replace:ee}),L||N);const d=N;d.redirectedFrom=L;let g;return!ye&&Yw(r,B,N)&&(g=Or(16,{to:d,from:B}),ar(B,B,!0,!1)),(g?Promise.resolve(g):ge(d,B)).catch(y=>en(y)?en(y,2)?y:lt(y):me(y,d,B)).then(y=>{if(y){if(en(y,2))return X(de(D(y.to),{state:he,force:ye,replace:ee}),L||d)}else y=We(d,B,!0,ee,he);return Ge(d,B,y),y})}function _e(w,L){const N=V(w,L);return N?Promise.reject(N):Promise.resolve()}function ge(w,L){let N;const[B,he,ye]=WE(w,L);N=Ta(B.reverse(),"beforeRouteLeave",w,L);for(const J of B)J.leaveGuards.forEach(d=>{N.push(sn(d,w,L))});const ee=_e.bind(null,w,L);return N.push(ee),lr(N).then(()=>{N=[];for(const J of i.list())N.push(sn(J,w,L));return N.push(ee),lr(N)}).then(()=>{N=Ta(he,"beforeRouteUpdate",w,L);for(const J of he)J.updateGuards.forEach(d=>{N.push(sn(d,w,L))});return N.push(ee),lr(N)}).then(()=>{N=[];for(const J of w.matched)if(J.beforeEnter&&!L.matched.includes(J))if(Array.isArray(J.beforeEnter))for(const d of J.beforeEnter)N.push(sn(d,w,L));else N.push(sn(J.beforeEnter,w,L));return N.push(ee),lr(N)}).then(()=>(w.matched.forEach(J=>J.enterCallbacks={}),N=Ta(ye,"beforeRouteEnter",w,L),N.push(ee),lr(N))).then(()=>{N=[];for(const J of o.list())N.push(sn(J,w,L));return N.push(ee),lr(N)}).catch(J=>en(J,8)?J:Promise.reject(J))}function Ge(w,L,N){for(const B of a.list())B(w,L,N)}function We(w,L,N,B,he){const ye=V(w,L);if(ye)return ye;const ee=L===Zt,J=mr?history.state:{};N&&(B||ee?s.replace(w.fullPath,de({scroll:ee&&J&&J.scroll},he)):s.push(w.fullPath,he)),c.value=w,ar(w,L,N,ee),lt()}let Ue;function Qt(){Ue||(Ue=s.listen((w,L,N)=>{const B=S(w),he=ue(B);if(he){X(de(he,{replace:!0}),B).catch(_s);return}u=B;const ye=c.value;mr&&rE(Ch(ye.fullPath,N.delta),Mo()),ge(B,ye).catch(ee=>en(ee,12)?ee:en(ee,2)?(X(ee.to,B).then(J=>{en(J,20)&&!N.delta&&N.type===Ds.pop&&s.go(-1,!1)}).catch(_s),Promise.reject()):(N.delta&&s.go(-N.delta,!1),me(ee,B,ye))).then(ee=>{ee=ee||We(B,ye,!1),ee&&(N.delta?s.go(-N.delta,!1):N.type===Ds.pop&&en(ee,20)&&s.go(-1,!1)),Ge(B,ye,ee)}).catch(_s)}))}let ir=os(),or=os(),Ne;function me(w,L,N){lt(w);const B=or.list();return B.length?B.forEach(he=>he(w,L,N)):console.error(w),Promise.reject(w)}function le(){return Ne&&c.value!==Zt?Promise.resolve():new Promise((w,L)=>{ir.add([w,L])})}function lt(w){return Ne||(Ne=!w,Qt(),ir.list().forEach(([L,N])=>w?N(w):L()),ir.reset()),w}function ar(w,L,N,B){const{scrollBehavior:he}=t;if(!mr||!he)return Promise.resolve();const ye=!N&&sE(Ch(w.fullPath,0))||(B||!N)&&history.state&&history.state.scroll||null;return Md().then(()=>he(w,L,ye)).then(ee=>ee&&nE(ee)).catch(ee=>me(ee,w,L))}const $t=w=>s.go(w);let Rt;const yt=new Set;return{currentRoute:c,addRoute:p,removeRoute:m,hasRoute:_,getRoutes:I,resolve:S,options:t,push:U,replace:ie,go:$t,back:()=>$t(-1),forward:()=>$t(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:or.add,isReady:le,install(w){const L=this;w.component("RouterLink",jE),w.component("RouterView",zE),w.config.globalProperties.$router=L,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>gs(c)}),mr&&!Rt&&c.value===Zt&&(Rt=!0,U(s.location).catch(he=>{}));const N={};for(const he in Zt)N[he]=Pt(()=>c.value[he]);w.provide(du,L),w.provide(gp,Hr(N)),w.provide(dc,c);const B=w.unmount;yt.add(w),w.unmount=function(){yt.delete(w),yt.size<1&&(u=Zt,Ue&&Ue(),Ue=null,c.value=Zt,Rt=!1,Ne=!1),B()}}}}function lr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function WE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Nr(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Nr(u,c))||s.push(c))}return[n,r,s]}/**
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
 */const Cp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},YE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ap={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(f=64)),r.push(n[l],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},XE=function(t){const e=Cp(t);return Ap.encodeByteArray(e,!0)},Rp=function(t){return XE(t).replace(/\./g,"")},QE=function(t){try{return Ap.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class JE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function xe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kp(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Np(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Op(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZE(){return xe().indexOf("Electron/")>=0}function Dp(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eb(){return xe().indexOf("MSAppHost/")>=0}function tb(){return typeof indexedDB=="object"}function nb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const rb="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rb,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xs.prototype.create)}}class Xs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?sb(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new bn(s,a,r)}}function sb(t,e){return t.replace(ib,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ib=/\{\$([^}]+)}/g;function ob(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Uh(i)&&Uh(o)){if(!Zi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Uh(t){return t!==null&&typeof t=="object"}/**
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
 */function Qs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function fs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ab(t,e){const n=new cb(t,e);return n.subscribe.bind(n)}class cb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ub(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Sa),s.error===void 0&&(s.error=Sa),s.complete===void 0&&(s.complete=Sa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ub(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sa(){}/**
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
 */function Se(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rn="[DEFAULT]";/**
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
 */class lb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new JE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fb(e))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rn){return this.instances.has(e)}getOptions(e=Rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rn){return this.component?this.component.multipleInstances?e:Rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hb(t){return t===Rn?void 0:t}function fb(t){return t.instantiationMode==="EAGER"}/**
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
 */class db{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const pb={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},gb=oe.INFO,mb={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},yb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=mb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gu{constructor(e){this.name=e,this._logLevel=gb,this._logHandler=yb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const vb=(t,e)=>e.some(n=>t instanceof n);let Fh,Bh;function _b(){return Fh||(Fh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wb(){return Bh||(Bh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pp=new WeakMap,mc=new WeakMap,xp=new WeakMap,Ca=new WeakMap,mu=new WeakMap;function Eb(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(pn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pp.set(n,t)}).catch(()=>{}),mu.set(e,t),e}function bb(t){if(mc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});mc.set(t,e)}let yc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ib(t){yc=t(yc)}function Tb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Aa(this),e,...n);return xp.set(r,e.sort?e.sort():[e]),pn(r)}:wb().includes(t)?function(...e){return t.apply(Aa(this),e),pn(Pp.get(this))}:function(...e){return pn(t.apply(Aa(this),e))}}function Sb(t){return typeof t=="function"?Tb(t):(t instanceof IDBTransaction&&bb(t),vb(t,_b())?new Proxy(t,yc):t)}function pn(t){if(t instanceof IDBRequest)return Eb(t);if(Ca.has(t))return Ca.get(t);const e=Sb(t);return e!==t&&(Ca.set(t,e),mu.set(e,t)),e}const Aa=t=>mu.get(t);function Cb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=pn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(pn(o.result),c.oldVersion,c.newVersion,pn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Ab=["get","getKey","getAll","getAllKeys","count"],Rb=["put","add","delete","clear"],Ra=new Map;function $h(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ra.get(e))return Ra.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Rb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ab.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Ra.set(e,i),i}Ib(t=>ql(jl({},t),{get:(e,n,r)=>$h(e,n)||t.get(e,n,r),has:(e,n)=>!!$h(e,n)||t.has(e,n)}));/**
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
 */class kb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vc="@firebase/app",Vh="0.7.24";/**
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
 */const yu=new gu("@firebase/app"),Ob="@firebase/app-compat",Db="@firebase/analytics-compat",Pb="@firebase/analytics",xb="@firebase/app-check-compat",Mb="@firebase/app-check",Lb="@firebase/auth",Ub="@firebase/auth-compat",Fb="@firebase/database",Bb="@firebase/database-compat",$b="@firebase/functions",Vb="@firebase/functions-compat",jb="@firebase/installations",qb="@firebase/installations-compat",Hb="@firebase/messaging",Kb="@firebase/messaging-compat",zb="@firebase/performance",Gb="@firebase/performance-compat",Wb="@firebase/remote-config",Yb="@firebase/remote-config-compat",Xb="@firebase/storage",Qb="@firebase/storage-compat",Jb="@firebase/firestore",Zb="@firebase/firestore-compat",eI="firebase",tI="9.8.1";/**
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
 */const Mp="[DEFAULT]",nI={[vc]:"fire-core",[Ob]:"fire-core-compat",[Pb]:"fire-analytics",[Db]:"fire-analytics-compat",[Mb]:"fire-app-check",[xb]:"fire-app-check-compat",[Lb]:"fire-auth",[Ub]:"fire-auth-compat",[Fb]:"fire-rtdb",[Bb]:"fire-rtdb-compat",[$b]:"fire-fn",[Vb]:"fire-fn-compat",[jb]:"fire-iid",[qb]:"fire-iid-compat",[Hb]:"fire-fcm",[Kb]:"fire-fcm-compat",[zb]:"fire-perf",[Gb]:"fire-perf-compat",[Wb]:"fire-rc",[Yb]:"fire-rc-compat",[Xb]:"fire-gcs",[Qb]:"fire-gcs-compat",[Jb]:"fire-fst",[Zb]:"fire-fst-compat","fire-js":"fire-js",[eI]:"fire-js-all"};/**
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
 */const eo=new Map,_c=new Map;function rI(t,e){try{t.container.addComponent(e)}catch(n){yu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jn(t){const e=t.name;if(_c.has(e))return yu.debug(`There were multiple attempts to register component ${e}.`),!1;_c.set(e,t);for(const n of eo.values())rI(n,t);return!0}function Lo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const sI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},qn=new Xs("app","Firebase",sI);/**
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
 */class iI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
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
 */const zr=tI;function oI(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Mp,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw qn.create("bad-app-name",{appName:String(r)});const s=eo.get(r);if(s){if(Zi(t,s.options)&&Zi(n,s.config))return s;throw qn.create("duplicate-app",{appName:r})}const i=new db(r);for(const a of _c.values())i.addComponent(a);const o=new iI(t,n,i);return eo.set(r,o),o}function vu(t=Mp){const e=eo.get(t);if(!e)throw qn.create("no-app",{appName:t});return e}function Mt(t,e,n){var r;let s=(r=nI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yu.warn(a.join(" "));return}jn(new yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const aI="firebase-heartbeat-database",cI=1,Ps="firebase-heartbeat-store";let ka=null;function Lp(){return ka||(ka=Cb(aI,cI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ps)}}}).catch(t=>{throw qn.create("storage-open",{originalErrorMessage:t.message})})),ka}async function uI(t){try{return(await Lp()).transaction(Ps).objectStore(Ps).get(Up(t))}catch(e){throw qn.create("storage-get",{originalErrorMessage:e.message})}}async function jh(t,e){try{const r=(await Lp()).transaction(Ps,"readwrite");return await r.objectStore(Ps).put(e,Up(t)),r.done}catch(n){throw qn.create("storage-set",{originalErrorMessage:n.message})}}function Up(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lI=1024,hI=30*24*60*60*1e3;class fI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=qh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=hI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qh(),{heartbeatsToSend:n,unsentEntries:r}=dI(this._heartbeatsCache.heartbeats),s=Rp(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function qh(){return new Date().toISOString().substring(0,10)}function dI(t,e=lI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Hh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Hh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tb()?nb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await uI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return jh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return jh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Hh(t){return Rp(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function gI(t){jn(new yn("platform-logger",e=>new kb(e),"PRIVATE")),jn(new yn("heartbeat",e=>new fI(e),"PRIVATE")),Mt(vc,Vh,t),Mt(vc,Vh,"esm2017"),Mt("fire-js","")}gI("");var mI="firebase",yI="9.8.1";/**
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
 */Mt(mI,yI,"app");function _u(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Fp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vI=Fp,Bp=new Xs("auth","Firebase",Fp());/**
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
 */const Kh=new gu("@firebase/auth");function Ui(t,...e){Kh.logLevel<=oe.ERROR&&Kh.error(`Auth (${zr}): ${t}`,...e)}/**
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
 */function Ct(t,...e){throw wu(t,...e)}function Lt(t,...e){return wu(t,...e)}function _I(t,e,n){const r=Object.assign(Object.assign({},vI()),{[e]:n});return new Xs("auth","Firebase",r).create(e,{appName:t.name})}function wu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bp.create(t,...e)}function H(t,e,...n){if(!t)throw wu(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ui(e),new Error(e)}function Wt(t,e){t||jt(e)}/**
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
 */const zh=new Map;function qt(t){Wt(t instanceof Function,"Expected a class definition");let e=zh.get(t);return e?(Wt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zh.set(t,e),e)}/**
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
 */function wI(t,e){const n=Lo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Zi(i,e!=null?e:{}))return s;Ct(s,"already-initialized")}return n.initialize({options:e})}function EI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function wc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bI(){return Gh()==="http:"||Gh()==="https:"}function Gh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function II(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bI()||Np()||"connection"in navigator)?navigator.onLine:!0}function TI(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Js{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wt(n>e,"Short delay should be less than long delay!"),this.isMobile=kp()||Op()}get(){return II()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Eu(t,e){Wt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $p{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const CI=new Js(3e4,6e4);function Zs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gr(t,e,n,r,s={}){return Vp(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Qs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),$p.fetch()(jp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Vp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},SI),e);try{const s=new AI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Na(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Na(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Na(t,"email-already-in-use",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw _I(t,l,u);Ct(t,l)}}catch(s){if(s instanceof bn)throw s;Ct(t,"network-request-failed")}}async function ei(t,e,n,r,s={}){const i=await Gr(t,e,n,r,s);return"mfaPendingCredential"in i&&Ct(t,"multi-factor-auth-required",{_serverResponse:i}),i}function jp(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Eu(t.config,s):`${t.config.apiScheme}://${s}`}class AI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),CI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Na(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Lt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function RI(t,e){return Gr(t,"POST","/v1/accounts:delete",e)}async function kI(t,e){return Gr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Es(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NI(t,e=!1){const n=Se(t),r=await n.getIdToken(e),s=bu(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Es(Oa(s.auth_time)),issuedAtTime:Es(Oa(s.iat)),expirationTime:Es(Oa(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Oa(t){return Number(t)*1e3}function bu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ui("JWT malformed, contained fewer than 3 sections"),null;try{const s=QE(n);return s?JSON.parse(s):(Ui("Failed to decode base64 JWT payload"),null)}catch(s){return Ui("Caught error parsing JWT payload as JSON",s),null}}function OI(t){const e=bu(t);return H(e,"internal-error"),H(typeof e.exp!="undefined","internal-error"),H(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Dr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&DI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class PI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Es(this.lastLoginAt),this.creationTime=Es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function to(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Dr(t,kI(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?LI(i.providerUserInfo):[],a=MI(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new qp(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function xI(t){const e=Se(t);await to(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function LI(t){return t.map(e=>{var{providerId:n}=e,r=_u(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function UI(t,e){const n=await Vp(t,{},async()=>{const r=Qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=jp(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$p.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken!="undefined","internal-error"),H(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):OI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await UI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new xs;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xs,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
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
 */function tn(t,e){H(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Un{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=_u(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Dr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NI(this,e)}reload(){return xI(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await to(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Dr(this,RI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(u=n.createdAt)!==null&&u!==void 0?u:void 0,D=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:V,emailVerified:U,isAnonymous:ie,providerData:ue,stsTokenManager:X}=n;H(V&&X,e,"internal-error");const _e=xs.fromJSON(this.name,X);H(typeof V=="string",e,"internal-error"),tn(h,e.name),tn(f,e.name),H(typeof U=="boolean",e,"internal-error"),H(typeof ie=="boolean",e,"internal-error"),tn(p,e.name),tn(m,e.name),tn(I,e.name),tn(_,e.name),tn(S,e.name),tn(D,e.name);const ge=new Un({uid:V,auth:e,email:f,emailVerified:U,displayName:h,isAnonymous:ie,photoURL:m,phoneNumber:p,tenantId:I,stsTokenManager:_e,createdAt:S,lastLoginAt:D});return ue&&Array.isArray(ue)&&(ge.providerData=ue.map(Ge=>Object.assign({},Ge))),_&&(ge._redirectEventId=_),ge}static async _fromIdTokenResponse(e,n,r=!1){const s=new xs;s.updateFromServerResponse(n);const i=new Un({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await to(i),i}}/**
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
 */class Hp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hp.type="NONE";const Wh=Hp;/**
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
 */function Fi(t,e,n){return`firebase:${t}:${e}:${n}`}class Tr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Fi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Tr(qt(Wh),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||qt(Wh);const o=Fi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Un._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Tr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Tr(i,e,r))}}/**
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
 */function Yh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yp(e))return"Blackberry";if(Xp(e))return"Webos";if(Iu(e))return"Safari";if((e.includes("chrome/")||zp(e))&&!e.includes("edge/"))return"Chrome";if(Wp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Kp(t=xe()){return/firefox\//i.test(t)}function Iu(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zp(t=xe()){return/crios\//i.test(t)}function Gp(t=xe()){return/iemobile/i.test(t)}function Wp(t=xe()){return/android/i.test(t)}function Yp(t=xe()){return/blackberry/i.test(t)}function Xp(t=xe()){return/webos/i.test(t)}function Uo(t=xe()){return/iphone|ipad|ipod/i.test(t)}function FI(t=xe()){var e;return Uo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BI(){return Dp()&&document.documentMode===10}function Qp(t=xe()){return Uo(t)||Wp(t)||Xp(t)||Yp(t)||/windows phone/i.test(t)||Gp(t)}function $I(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Jp(t,e=[]){let n;switch(t){case"Browser":n=Yh(xe());break;case"Worker":n=`${Yh(xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${r}`}/**
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
 */class VI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r.message})}}}/**
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
 */class jI{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xh(this),this.idTokenSubscription=new Xh(this),this.beforeStateQueue=new VI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Tr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await to(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Se(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Tr.create(this,[qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Fo(t){return Se(t)}class Xh{constructor(e){this.auth=e,this.observer=null,this.addObserver=ab(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Tu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function qI(t,e){return Gr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function HI(t,e){return ei(t,"POST","/v1/accounts:signInWithPassword",Zs(t,e))}/**
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
 */async function KI(t,e){return ei(t,"POST","/v1/accounts:signInWithEmailLink",Zs(t,e))}async function zI(t,e){return ei(t,"POST","/v1/accounts:signInWithEmailLink",Zs(t,e))}/**
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
 */class Ms extends Tu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ms(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ms(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return HI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return KI(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return qI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return zI(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Sr(t,e){return ei(t,"POST","/v1/accounts:signInWithIdp",Zs(t,e))}/**
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
 */const GI="http://localhost";class Hn extends Tu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=_u(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Hn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Sr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Sr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Sr(e,n)}buildRequest(){const e={requestUri:GI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qs(n)}return e}}/**
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
 */function WI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YI(t){const e=hs(fs(t)).link,n=e?hs(fs(e)).deep_link_id:null,r=hs(fs(t)).deep_link_id;return(r?hs(fs(r)).link:null)||r||n||e||t}class Su{constructor(e){var n,r,s,i,o,a;const c=hs(fs(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=WI((s=c.mode)!==null&&s!==void 0?s:null);H(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=YI(e);try{return new Su(n)}catch{return null}}}/**
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
 */class Wr{constructor(){this.providerId=Wr.PROVIDER_ID}static credential(e,n){return Ms._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Su.parseLink(n);return H(r,"argument-error"),Ms._fromEmailAndCode(e,r.code,r.tenantId)}}Wr.PROVIDER_ID="password";Wr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Zp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ti extends Zp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class on extends ti{constructor(){super("facebook.com")}static credential(e){return Hn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.FACEBOOK_SIGN_IN_METHOD="facebook.com";on.PROVIDER_ID="facebook.com";/**
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
 */class an extends ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return an.credential(n,r)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
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
 */class cn extends ti{constructor(){super("github.com")}static credential(e){return Hn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.GITHUB_SIGN_IN_METHOD="github.com";cn.PROVIDER_ID="github.com";/**
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
 */class un extends ti{constructor(){super("twitter.com")}static credential(e,n){return Hn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return un.credential(n,r)}catch{return null}}}un.TWITTER_SIGN_IN_METHOD="twitter.com";un.PROVIDER_ID="twitter.com";/**
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
 */async function XI(t,e){return ei(t,"POST","/v1/accounts:signUp",Zs(t,e))}/**
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
 */class Kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Un._fromIdTokenResponse(e,r,s),o=Qh(r);return new Kn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qh(r);return new Kn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class no extends bn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,no.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new no(e,n,r,s)}}function eg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?no._fromErrorAndOperation(t,i,e,r):i})}async function QI(t,e,n=!1){const r=await Dr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kn._forOperation(t,"link",r)}/**
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
 */async function JI(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Dr(t,eg(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=bu(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),Kn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ct(r,"user-mismatch"),i}}/**
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
 */async function tg(t,e,n=!1){const r="signIn",s=await eg(t,r,e),i=await Kn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ZI(t,e){return tg(Fo(t),e)}async function M1(t,e,n){const r=Fo(t),s=await XI(r,{returnSecureToken:!0,email:e,password:n}),i=await Kn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function e0(t,e,n){return ZI(Se(t),Wr.credential(e,n))}/**
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
 */async function t0(t,e){return Gr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function L1(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Se(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Dr(r,t0(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Bo(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function U1(t){return Se(t).signOut()}const ro="__sak";/**
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
 */class ng{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ro,"1"),this.storage.removeItem(ro),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function n0(){const t=xe();return Iu(t)||Uo(t)}const r0=1e3,s0=10;class rg extends ng{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=n0()&&$I(),this.fallbackToPolling=Qp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);BI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,s0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},r0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rg.type="LOCAL";const i0=rg;/**
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
 */class sg extends ng{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sg.type="SESSION";const ig=sg;/**
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
 */function o0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $o{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new $o(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await o0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$o.receivers=[];/**
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
 */function Cu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class a0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Cu("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ut(){return window}function c0(t){Ut().location.href=t}/**
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
 */function og(){return typeof Ut().WorkerGlobalScope!="undefined"&&typeof Ut().importScripts=="function"}async function u0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function l0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function h0(){return og()?self:null}/**
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
 */const ag="firebaseLocalStorageDb",f0=1,so="firebaseLocalStorage",cg="fbase_key";class ni{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vo(t,e){return t.transaction([so],e?"readwrite":"readonly").objectStore(so)}function d0(){const t=indexedDB.deleteDatabase(ag);return new ni(t).toPromise()}function Ec(){const t=indexedDB.open(ag,f0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(so,{keyPath:cg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(so)?e(r):(r.close(),await d0(),e(await Ec()))})})}async function Jh(t,e,n){const r=Vo(t,!0).put({[cg]:e,value:n});return new ni(r).toPromise()}async function p0(t,e){const n=Vo(t,!1).get(e),r=await new ni(n).toPromise();return r===void 0?null:r.value}function Zh(t,e){const n=Vo(t,!0).delete(e);return new ni(n).toPromise()}const g0=800,m0=3;class ug{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ec(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>m0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return og()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$o._getInstance(h0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await u0(),!this.activeServiceWorker)return;this.sender=new a0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||l0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ec();return await Jh(e,ro,"1"),await Zh(e,ro),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>p0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Vo(s,!1).getAll();return new ni(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),g0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ug.type="LOCAL";const y0=ug;/**
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
 */function v0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Lt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",v0().appendChild(r)})}function w0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Js(3e4,6e4);/**
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
 */function E0(t,e){return e?qt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Au extends Tu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Sr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function b0(t){return tg(t.auth,new Au(t),t.bypassAuthState)}function I0(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),JI(n,new Au(t),t.bypassAuthState)}async function T0(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),QI(n,new Au(t),t.bypassAuthState)}/**
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
 */class lg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return b0;case"linkViaPopup":case"linkViaRedirect":return T0;case"reauthViaPopup":case"reauthViaRedirect":return I0;default:Ct(this.auth,"internal-error")}}resolve(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const S0=new Js(2e3,1e4);class yr extends lg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,yr.currentPopupAction&&yr.currentPopupAction.cancel(),yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Wt(this.filter.length===1,"Popup operations only handle one event");const e=Cu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,S0.get())};e()}}yr.currentPopupAction=null;/**
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
 */const C0="pendingRedirect",Bi=new Map;class A0 extends lg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bi.get(this.auth._key());if(!e){try{const r=await R0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bi.set(this.auth._key(),e)}return this.bypassAuthState||Bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function R0(t,e){const n=O0(e),r=N0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function k0(t,e){Bi.set(t._key(),e)}function N0(t){return qt(t._redirectPersistence)}function O0(t){return Fi(C0,t.config.apiKey,t.name)}async function D0(t,e,n=!1){const r=Fo(t),s=E0(r,e),o=await new A0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const P0=10*60*1e3;class x0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!M0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=P0&&this.cachedEventUids.clear(),this.cachedEventUids.has(ef(e))}saveEventToCache(e){this.cachedEventUids.add(ef(e)),this.lastProcessedEventTime=Date.now()}}function ef(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function M0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hg(t);default:return!1}}/**
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
 */async function L0(t,e={}){return Gr(t,"GET","/v1/projects",e)}/**
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
 */const U0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,F0=/^https?/;async function B0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await L0(t);for(const n of e)try{if($0(n))return}catch{}Ct(t,"unauthorized-domain")}function $0(t){const e=wc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!F0.test(n))return!1;if(U0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const V0=new Js(3e4,6e4);function tf(){const t=Ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function j0(t){return new Promise((e,n)=>{var r,s,i;function o(){tf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tf(),n(Lt(t,"network-request-failed"))},timeout:V0.get()})}if(!((s=(r=Ut().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ut().gapi)===null||i===void 0)&&i.load)o();else{const a=w0("iframefcb");return Ut()[a]=()=>{gapi.load?o():n(Lt(t,"network-request-failed"))},_0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw $i=null,e})}let $i=null;function q0(t){return $i=$i||j0(t),$i}/**
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
 */const H0=new Js(5e3,15e3),K0="__/auth/iframe",z0="emulator/auth/iframe",G0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},W0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Y0(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Eu(e,z0):`https://${t.config.authDomain}/${K0}`,r={apiKey:e.apiKey,appName:t.name,v:zr},s=W0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Qs(r).slice(1)}`}async function X0(t){const e=await q0(t),n=Ut().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:Y0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:G0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),a=Ut().setTimeout(()=>{i(o)},H0.get());function c(){Ut().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Q0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},J0=500,Z0=600,eT="_blank",tT="http://localhost";class nf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nT(t,e,n,r=J0,s=Z0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Q0),{width:r.toString(),height:s.toString(),top:i,left:o}),u=xe().toLowerCase();n&&(a=zp(u)?eT:n),Kp(u)&&(e=e||tT,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(FI(u)&&a!=="_self")return rT(e||"",a),new nf(null);const h=window.open(e||"",a,l);H(h,t,"popup-blocked");try{h.focus()}catch{}return new nf(h)}function rT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const sT="__/auth/handler",iT="emulator/auth/handler";function rf(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zr,eventId:s};if(e instanceof Zp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ob(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof ti){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${oT(t)}?${Qs(a).slice(1)}`}function oT({config:t}){return t.emulator?Eu(t,iT):`https://${t.authDomain}/${sT}`}/**
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
 */const Da="webStorageSupport";class aT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ig,this._completeRedirectFn=D0,this._overrideRedirectResult=k0}async _openPopup(e,n,r,s){var i;Wt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=rf(e,n,r,wc(),s);return nT(e,o,Cu())}async _openRedirect(e,n,r,s){return await this._originValidation(e),c0(rf(e,n,r,wc(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Wt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await X0(e),r=new x0(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Da,{type:Da},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Da];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=B0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qp()||Iu()||Uo()}}const cT=aT;var sf="@firebase/auth",of="0.20.1";/**
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
 */class uT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hT(t){jn(new yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{H(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jp(t)},l=new jI(a,c,u);return EI(l,n),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jn(new yn("auth-internal",e=>{const n=Fo(e.getProvider("auth").getImmediate());return(r=>new uT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(sf,of,lT(t)),Mt(sf,of,"esm2017")}/**
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
 */function fT(t=vu()){const e=Lo(t,"auth");return e.isInitialized()?e.getImmediate():wI(t,{popupRedirectResolver:cT,persistence:[y0,i0,ig]})}hT("Browser");var dT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},x,Ru=Ru||{},K=dT||self;function io(){}function bc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ri(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pT(t){return Object.prototype.hasOwnProperty.call(t,Pa)&&t[Pa]||(t[Pa]=++gT)}var Pa="closure_uid_"+(1e9*Math.random()>>>0),gT=0;function mT(t,e,n){return t.call.apply(t.bind,arguments)}function yT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ve(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ve=mT:Ve=yT,Ve.apply(null,arguments)}function Ti(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function In(){this.s=this.s,this.o=this.o}var vT=0,_T={};In.prototype.s=!1;In.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),vT!=0)){var t=pT(this);delete _T[t]}};In.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},dg=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function wT(t){e:{var e=hS;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function af(t){return Array.prototype.concat.apply([],arguments)}function ku(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function oo(t){return/^[\s\xa0]*$/.test(t)}var cf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function tt(t,e){return t.indexOf(e)!=-1}function xa(t,e){return t<e?-1:t>e?1:0}var nt;e:{var uf=K.navigator;if(uf){var lf=uf.userAgent;if(lf){nt=lf;break e}}nt=""}function Nu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function pg(t){const e={};for(const n in t)e[n]=t[n];return e}var hf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<hf.length;i++)n=hf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ou(t){return Ou[" "](t),t}Ou[" "]=io;function ET(t){var e=TT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var bT=tt(nt,"Opera"),Pr=tt(nt,"Trident")||tt(nt,"MSIE"),mg=tt(nt,"Edge"),Ic=mg||Pr,yg=tt(nt,"Gecko")&&!(tt(nt.toLowerCase(),"webkit")&&!tt(nt,"Edge"))&&!(tt(nt,"Trident")||tt(nt,"MSIE"))&&!tt(nt,"Edge"),IT=tt(nt.toLowerCase(),"webkit")&&!tt(nt,"Edge");function vg(){var t=K.document;return t?t.documentMode:void 0}var ao;e:{var Ma="",La=function(){var t=nt;if(yg)return/rv:([^\);]+)(\)|;)/.exec(t);if(mg)return/Edge\/([\d\.]+)/.exec(t);if(Pr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(IT)return/WebKit\/(\S+)/.exec(t);if(bT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(La&&(Ma=La?La[1]:""),Pr){var Ua=vg();if(Ua!=null&&Ua>parseFloat(Ma)){ao=String(Ua);break e}}ao=Ma}var TT={};function ST(){return ET(function(){let t=0;const e=cf(String(ao)).split("."),n=cf("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=xa(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||xa(s[2].length==0,i[2].length==0)||xa(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Tc;if(K.document&&Pr){var ff=vg();Tc=ff||parseInt(ao,10)||void 0}else Tc=void 0;var CT=Tc,AT=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",io,e),K.removeEventListener("test",io,e)}catch{}return t}();function Xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};function Ls(t,e){if(Xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(yg){e:{try{Ou(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:RT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ls.Z.h.call(this)}}ze(Ls,Xe);var RT={2:"touch",3:"pen",4:"mouse"};Ls.prototype.h=function(){Ls.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var si="closure_listenable_"+(1e6*Math.random()|0),kT=0;function NT(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++kT,this.ca=this.fa=!1}function jo(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function qo(t){this.src=t,this.g={},this.h=0}qo.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Cc(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new NT(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function Sc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=fg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(jo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Cc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var Du="closure_lm_"+(1e6*Math.random()|0),Fa={};function _g(t,e,n,r,s){if(r&&r.once)return Eg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)_g(t,e[i],n,r,s);return null}return n=Mu(n),t&&t[si]?t.N(e,n,ri(r)?!!r.capture:!!r,s):wg(t,e,n,!1,r,s)}function wg(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ri(s)?!!s.capture:!!s,a=xu(t);if(a||(t[Du]=a=new qo(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=OT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)AT||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Ig(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function OT(){function t(n){return e.call(t.src,t.listener,n)}var e=DT;return t}function Eg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Eg(t,e[i],n,r,s);return null}return n=Mu(n),t&&t[si]?t.O(e,n,ri(r)?!!r.capture:!!r,s):wg(t,e,n,!0,r,s)}function bg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)bg(t,e[i],n,r,s);else r=ri(r)?!!r.capture:!!r,n=Mu(n),t&&t[si]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Cc(i,n,r,s),-1<n&&(jo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=xu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Cc(e,n,r,s)),(n=-1<t?e[t]:null)&&Pu(n))}function Pu(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[si])Sc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ig(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=xu(e))?(Sc(n,t),n.h==0&&(n.src=null,e[Du]=null)):jo(t)}}}function Ig(t){return t in Fa?Fa[t]:Fa[t]="on"+t}function DT(t,e){if(t.ca)t=!0;else{e=new Ls(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Pu(t),t=n.call(r,e)}return t}function xu(t){return t=t[Du],t instanceof qo?t:null}var Ba="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mu(t){return typeof t=="function"?t:(t[Ba]||(t[Ba]=function(e){return t.handleEvent(e)}),t[Ba])}function Me(){In.call(this),this.i=new qo(this),this.P=this,this.I=null}ze(Me,In);Me.prototype[si]=!0;Me.prototype.removeEventListener=function(t,e,n,r){bg(this,t,e,n,r)};function je(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Xe(e,t);else if(e instanceof Xe)e.target=e.target||t;else{var s=e;e=new Xe(r,t),gg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Si(o,r,!0,e)&&s}if(o=e.g=t,s=Si(o,r,!0,e)&&s,s=Si(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Si(o,r,!1,e)&&s}Me.prototype.M=function(){if(Me.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)jo(n[r]);delete t.g[e],t.h--}}this.I=null};Me.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Me.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Si(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Sc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Lu=K.JSON.stringify;function PT(){var t=Sg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xT{constructor(){this.h=this.g=null}add(e,n){const r=Tg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Tg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new MT,t=>t.reset());class MT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function LT(t){K.setTimeout(()=>{throw t},0)}function Uu(t,e){Ac||UT(),Rc||(Ac(),Rc=!0),Sg.add(t,e)}var Ac;function UT(){var t=K.Promise.resolve(void 0);Ac=function(){t.then(FT)}}var Rc=!1,Sg=new xT;function FT(){for(var t;t=PT();){try{t.h.call(t.g)}catch(n){LT(n)}var e=Tg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Rc=!1}function Ho(t,e){Me.call(this),this.h=t||1,this.g=e||K,this.j=Ve(this.kb,this),this.l=Date.now()}ze(Ho,Me);x=Ho.prototype;x.da=!1;x.S=null;x.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),je(this,"tick"),this.da&&(Fu(this),this.start()))}};x.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Fu(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}x.M=function(){Ho.Z.M.call(this),Fu(this),delete this.g};function Bu(t,e,n){if(typeof t=="function")n&&(t=Ve(t,n));else if(t&&typeof t.handleEvent=="function")t=Ve(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Cg(t){t.g=Bu(()=>{t.g=null,t.i&&(t.i=!1,Cg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class BT extends In{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Cg(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Us(t){In.call(this),this.h=t,this.g={}}ze(Us,In);var df=[];function Ag(t,e,n,r){Array.isArray(n)||(n&&(df[0]=n.toString()),n=df);for(var s=0;s<n.length;s++){var i=_g(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Rg(t){Nu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Pu(e)},t),t.g={}}Us.prototype.M=function(){Us.Z.M.call(this),Rg(this)};Us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ko(){this.g=!0}Ko.prototype.Aa=function(){this.g=!1};function $T(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function VT(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function vr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qT(t,n)+(r?" "+r:"")})}function jT(t,e){t.info(function(){return"TIMEOUT: "+e})}Ko.prototype.info=function(){};function qT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Lu(n)}catch{return e}}var er={},pf=null;function zo(){return pf=pf||new Me}er.Ma="serverreachability";function kg(t){Xe.call(this,er.Ma,t)}ze(kg,Xe);function Fs(t){const e=zo();je(e,new kg(e,t))}er.STAT_EVENT="statevent";function Ng(t,e){Xe.call(this,er.STAT_EVENT,t),this.stat=e}ze(Ng,Xe);function rt(t){const e=zo();je(e,new Ng(e,t))}er.Na="timingevent";function Og(t,e){Xe.call(this,er.Na,t),this.size=e}ze(Og,Xe);function ii(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var Go={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Dg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function $u(){}$u.prototype.h=null;function gf(t){return t.h||(t.h=t.i())}function Pg(){}var oi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Vu(){Xe.call(this,"d")}ze(Vu,Xe);function ju(){Xe.call(this,"c")}ze(ju,Xe);var kc;function Wo(){}ze(Wo,$u);Wo.prototype.g=function(){return new XMLHttpRequest};Wo.prototype.i=function(){return{}};kc=new Wo;function ai(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Us(this),this.P=HT,t=Ic?125:void 0,this.W=new Ho(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new xg}function xg(){this.i=null,this.g="",this.h=!1}var HT=45e3,Nc={},co={};x=ai.prototype;x.setTimeout=function(t){this.P=t};function Oc(t,e,n){t.K=1,t.v=Xo(Yt(e)),t.s=n,t.U=!0,Mg(t,null)}function Mg(t,e){t.F=Date.now(),ci(t),t.A=Yt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),jg(n.h,"t",r),t.C=0,n=t.l.H,t.h=new xg,t.g=cm(t.l,n?e:null,!t.s),0<t.O&&(t.L=new BT(Ve(t.Ia,t,t.g),t.O)),Ag(t.V,t.g,"readystatechange",t.gb),e=t.H?pg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Fs(1),$T(t.j,t.u,t.A,t.m,t.X,t.s)}x.gb=function(t){t=t.target;const e=this.L;e&&Ht(t)==3?e.l():this.Ia(t)};x.Ia=function(t){try{if(t==this.g)e:{const l=Ht(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||Ic||this.g&&(this.h.h||this.g.ga()||_f(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Fs(3):Fs(2)),Yo(this);var n=this.g.ba();this.N=n;t:if(Lg(this)){var r=_f(this.g);t="";var s=r.length,i=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Dn(this),bs(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,VT(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oo(a)){var u=a;break t}}u=null}if(n=u)vr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Dc(this,n);else{this.i=!1,this.o=3,rt(12),Dn(this),bs(this);break e}}this.U?(Ug(this,l,o),Ic&&this.i&&l==3&&(Ag(this.V,this.W,"tick",this.fb),this.W.start())):(vr(this.j,this.m,o,null),Dc(this,o)),l==4&&Dn(this),this.i&&!this.I&&(l==4?sm(this.l,this):(this.i=!1,ci(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),Dn(this),bs(this)}}}catch{}finally{}};function Lg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Ug(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=KT(t,n),s==co){e==4&&(t.o=4,rt(14),r=!1),vr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Nc){t.o=4,rt(15),vr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else vr(t.j,t.m,s,null),Dc(t,s);Lg(t)&&s!=co&&s!=Nc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,rt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qu(e),e.L=!0,rt(11))):(vr(t.j,t.m,n,"[Invalid Chunked Response]"),Dn(t),bs(t))}x.fb=function(){if(this.g){var t=Ht(this.g),e=this.g.ga();this.C<e.length&&(Yo(this),Ug(this,t,e),this.i&&t!=4&&ci(this))}};function KT(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?co:(n=Number(e.substring(n,r)),isNaN(n)?Nc:(r+=1,r+n>e.length?co:(e=e.substr(r,n),t.C=r+n,e)))}x.cancel=function(){this.I=!0,Dn(this)};function ci(t){t.Y=Date.now()+t.P,Fg(t,t.P)}function Fg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ii(Ve(t.eb,t),e)}function Yo(t){t.B&&(K.clearTimeout(t.B),t.B=null)}x.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(jT(this.j,this.A),this.K!=2&&(Fs(3),rt(17)),Dn(this),this.o=2,bs(this)):Fg(this,this.Y-t)};function bs(t){t.l.G==0||t.I||sm(t.l,t)}function Dn(t){Yo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Fu(t.W),Rg(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Dc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Pc(n.i,t))){if(n.I=t.N,!t.J&&Pc(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)fo(n),Zo(n);else break e;Xu(n),rt(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=ii(Ve(n.ab,n),6e3));if(1>=Kg(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Pn(n,11)}else if((t.J||n.g==t)&&fo(n),!oo(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;!i.g&&(tt(m,"spdy")||tt(m,"quic")||tt(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Ku(i,i.h),i.h=null))}if(r.D){const I=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.sa=I,Te(r.F,r.D,I))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=am(r,r.H?r.la:null,r.W),o.J){zg(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Yo(a),ci(a)),r.g=o}else nm(r);0<n.l.length&&ea(n)}else u[0]!="stop"&&u[0]!="close"||Pn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Pn(n,7):Yu(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Fs(4)}catch{}}function zT(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(bc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function qu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(bc(t)||typeof t=="string")dg(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(bc(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=zT(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Yr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Yr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}x=Yr.prototype;x.R=function(){Hu(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};x.T=function(){return Hu(this),this.g.concat()};function Hu(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];zn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],zn(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}x.get=function(t,e){return zn(this.h,t)?this.h[t]:e};x.set=function(t,e){zn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};x.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function zn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Bg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function GT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Gn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Gn){this.g=e!==void 0?e:t.g,uo(this,t.j),this.s=t.s,lo(this,t.i),ho(this,t.m),this.l=t.l,e=t.h;var n=new Bs;n.i=e.i,e.g&&(n.g=new Yr(e.g),n.h=e.h),mf(this,n),this.o=t.o}else t&&(n=String(t).match(Bg))?(this.g=!!e,uo(this,n[1]||"",!0),this.s=Is(n[2]||""),lo(this,n[3]||"",!0),ho(this,n[4]),this.l=Is(n[5]||"",!0),mf(this,n[6]||"",!0),this.o=Is(n[7]||"")):(this.g=!!e,this.h=new Bs(null,this.g))}Gn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ds(e,yf,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ds(e,yf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(ds(n,n.charAt(0)=="/"?JT:QT,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ds(n,eS)),t.join("")};function Yt(t){return new Gn(t)}function uo(t,e,n){t.j=n?Is(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function lo(t,e,n){t.i=n?Is(e,!0):e}function ho(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function mf(t,e,n){e instanceof Bs?(t.h=e,tS(t.h,t.g)):(n||(e=ds(e,ZT)),t.h=new Bs(e,t.g))}function Te(t,e,n){t.h.set(e,n)}function Xo(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function WT(t){return t instanceof Gn?Yt(t):new Gn(t,void 0)}function YT(t,e,n,r){var s=new Gn(null,void 0);return t&&uo(s,t),e&&lo(s,e),n&&ho(s,n),r&&(s.l=r),s}function Is(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ds(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,XT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function XT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var yf=/[#\/\?@]/g,QT=/[#\?:]/g,JT=/[#\?]/g,ZT=/[#\?@]/g,eS=/#/g;function Bs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Tn(t){t.g||(t.g=new Yr,t.h=0,t.i&&GT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Bs.prototype;x.add=function(t,e){Tn(this),this.i=null,t=Xr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $g(t,e){Tn(t),e=Xr(t,e),zn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,zn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Hu(t)))}function Vg(t,e){return Tn(t),e=Xr(t,e),zn(t.g.h,e)}x.forEach=function(t,e){Tn(this),this.g.forEach(function(n,r){dg(n,function(s){t.call(e,s,r,this)},this)},this)};x.T=function(){Tn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};x.R=function(t){Tn(this);var e=[];if(typeof t=="string")Vg(this,t)&&(e=af(e,this.g.get(Xr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=af(e,t[n])}return e};x.set=function(t,e){return Tn(this),this.i=null,t=Xr(this,t),Vg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function jg(t,e,n){$g(t,e),0<n.length&&(t.i=null,t.g.set(Xr(t,e),ku(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function Xr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function tS(t,e){e&&!t.j&&(Tn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&($g(this,r),jg(this,s,n))},t)),t.j=e}var nS=class{constructor(t,e){this.h=t,this.g=e}};function qg(t){this.l=t||rS,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ea&&K.g.Ea()&&K.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var rS=10;function Hg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Kg(t){return t.h?1:t.g?t.g.size:0}function Pc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ku(t,e){t.g?t.g.add(e):t.h=e}function zg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}qg.prototype.cancel=function(){if(this.i=Gg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Gg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ku(t.i)}function zu(){}zu.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};zu.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function sS(){this.g=new zu}function iS(t,e,n){const r=n||"";try{qu(t,function(s,i){let o=s;ri(s)&&(o=Lu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function oS(t,e){const n=new Ko;if(K.Image){const r=new Image;r.onload=Ti(Ci,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ti(Ci,n,r,"TestLoadImage: error",!1,e),r.onabort=Ti(Ci,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ti(Ci,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ci(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function ui(t){this.l=t.$b||null,this.j=t.ib||!1}ze(ui,$u);ui.prototype.g=function(){return new Qo(this.l,this.j)};ui.prototype.i=function(t){return function(){return t}}({});function Qo(t,e){Me.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Gu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Qo,Me);var Gu=0;x=Qo.prototype;x.open=function(t,e){if(this.readyState!=Gu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$s(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,li(this)),this.readyState=Gu};x.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$s(this)),this.g&&(this.readyState=3,$s(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof K.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wg(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Wg(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}x.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?li(this):$s(this),this.readyState==3&&Wg(this)}};x.Ua=function(t){this.g&&(this.response=this.responseText=t,li(this))};x.Ta=function(t){this.g&&(this.response=t,li(this))};x.ha=function(){this.g&&li(this)};function li(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$s(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function $s(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var aS=K.JSON.parse;function ke(t){Me.call(this),this.headers=new Yr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Yg,this.K=this.L=!1}ze(ke,Me);var Yg="",cS=/^https?$/i,uS=["POST","PUT"];x=ke.prototype;x.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():kc.g(),this.C=this.u?gf(this.u):gf(kc),this.g.onreadystatechange=Ve(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){vf(this,i);return}t=n||"";const s=new Yr(this.headers);r&&qu(r,function(i,o){s.set(o,i)}),r=wT(s.T()),n=K.FormData&&t instanceof K.FormData,!(0<=fg(uS,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Jg(this),0<this.B&&((this.K=lS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ve(this.pa,this)):this.A=Bu(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){vf(this,i)}};function lS(t){return Pr&&ST()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function hS(t){return t.toLowerCase()=="content-type"}x.pa=function(){typeof Ru!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,je(this,"timeout"),this.abort(8))};function vf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Xg(t),Jo(t)}function Xg(t){t.D||(t.D=!0,je(t,"complete"),je(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,je(this,"complete"),je(this,"abort"),Jo(this))};x.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jo(this,!0)),ke.Z.M.call(this)};x.Fa=function(){this.s||(this.F||this.v||this.l?Qg(this):this.cb())};x.cb=function(){Qg(this)};function Qg(t){if(t.h&&typeof Ru!="undefined"&&(!t.C[1]||Ht(t)!=4||t.ba()!=2)){if(t.v&&Ht(t)==4)Bu(t.Fa,0,t);else if(je(t,"readystatechange"),Ht(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Bg)[1]||null;if(!s&&K.self&&K.self.location){var i=K.self.location.protocol;s=i.substr(0,i.length-1)}r=!cS.test(s?s.toLowerCase():"")}n=r}if(n)je(t,"complete"),je(t,"success");else{t.m=6;try{var o=2<Ht(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Xg(t)}}finally{Jo(t)}}}}function Jo(t,e){if(t.g){Jg(t);const n=t.g,r=t.C[0]?io:null;t.g=null,t.C=null,e||je(t,"ready");try{n.onreadystatechange=r}catch{}}}function Jg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function Ht(t){return t.g?t.g.readyState:0}x.ba=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}};x.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),aS(e)}};function _f(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Yg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Da=function(){return this.m};x.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function fS(t){let e="";return Nu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Wu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=fS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function as(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zg(t){this.za=0,this.l=[],this.h=new Ko,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=as("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=as("baseRetryDelayMs",5e3,t),this.$a=as("retryDelaySeedMs",1e4,t),this.Ya=as("forwardChannelMaxRetries",2,t),this.ra=as("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new qg(t&&t.concurrentRequestLimit),this.Ca=new sS,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}x=Zg.prototype;x.ma=8;x.G=1;function Yu(t){if(em(t),t.G==3){var e=t.V++,n=Yt(t.F);Te(n,"SID",t.J),Te(n,"RID",e),Te(n,"TYPE","terminate"),hi(t,n),e=new ai(t,t.h,e,void 0),e.K=2,e.v=Xo(Yt(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=cm(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ci(e)}om(t)}x.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Zo(t){t.g&&(Qu(t),t.g.cancel(),t.g=null)}function em(t){Zo(t),t.u&&(K.clearTimeout(t.u),t.u=null),fo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function $a(t,e){t.l.push(new nS(t.Za++,e)),t.G==3&&ea(t)}function ea(t){Hg(t.i)||t.m||(t.m=!0,Uu(t.Ha,t),t.C=0)}function dS(t,e){return Kg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ii(Ve(t.Ha,t,e),im(t,t.C)),t.C++,!0)}x.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new ai(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=pg(i),gg(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=tm(this,s,e),n=Yt(this.F),Te(n,"RID",t),Te(n,"CVER",22),this.D&&Te(n,"X-HTTP-Session-Id",this.D),hi(this,n),this.o&&i&&Wu(n,this.o,i),Ku(this.i,s),this.Ra&&Te(n,"TYPE","init"),this.ja?(Te(n,"$req",e),Te(n,"SID","null"),s.$=!0,Oc(s,n,null)):Oc(s,n,e),this.G=2}}else this.G==3&&(t?wf(this,t):this.l.length==0||Hg(this.i)||wf(this))};function wf(t,e){var n;e?n=e.m:n=t.V++;const r=Yt(t.F);Te(r,"SID",t.J),Te(r,"RID",n),Te(r,"AID",t.U),hi(t,r),t.o&&t.s&&Wu(r,t.o,t.s),n=new ai(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=tm(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ku(t.i,n),Oc(n,r,e)}function hi(t,e){t.j&&qu({},function(n,r){Te(e,r,n)})}function tm(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Ve(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{iS(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function nm(t){t.g||t.u||(t.Y=1,Uu(t.Ga,t),t.A=0)}function Xu(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ii(Ve(t.Ga,t),im(t,t.A)),t.A++,!0)}x.Ga=function(){if(this.u=null,rm(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ii(Ve(this.bb,this),t)}};x.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,rt(10),Zo(this),rm(this))};function Qu(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function rm(t){t.g=new ai(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Yt(t.oa);Te(e,"RID","rpc"),Te(e,"SID",t.J),Te(e,"CI",t.N?"0":"1"),Te(e,"AID",t.U),hi(t,e),Te(e,"TYPE","xmlhttp"),t.o&&t.s&&Wu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Xo(Yt(e)),n.s=null,n.U=!0,Mg(n,t)}x.ab=function(){this.v!=null&&(this.v=null,Zo(this),Xu(this),rt(19))};function fo(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function sm(t,e){var n=null;if(t.g==e){fo(t),Qu(t),t.g=null;var r=2}else if(Pc(t.i,e))n=e.D,zg(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=zo(),je(r,new Og(r,n,e,s)),ea(t)}else nm(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&dS(t,e)||r==2&&Xu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Pn(t,5);break;case 4:Pn(t,10);break;case 3:Pn(t,6);break;default:Pn(t,2)}}}function im(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Pn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Ve(t.jb,t);n||(n=new Gn("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||uo(n,"https"),Xo(n)),oS(n.toString(),r)}else rt(2);t.G=0,t.j&&t.j.va(e),om(t),em(t)}x.jb=function(t){t?(this.h.info("Successfully pinged google.com"),rt(2)):(this.h.info("Failed to ping google.com"),rt(1))};function om(t){t.G=0,t.I=-1,t.j&&((Gg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,ku(t.l),t.l.length=0),t.j.ua())}function am(t,e,n){let r=WT(n);if(r.i!="")e&&lo(r,e+"."+r.i),ho(r,r.m);else{const s=K.location;r=YT(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Nu(t.aa,function(s,i){Te(r,i,s)}),e=t.D,n=t.sa,e&&n&&Te(r,e,n),Te(r,"VER",t.ma),hi(t,r),r}function cm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ke(new ui({ib:!0})):new ke(t.qa),e.L=t.H,e}function um(){}x=um.prototype;x.xa=function(){};x.wa=function(){};x.va=function(){};x.ua=function(){};x.Oa=function(){};function po(){if(Pr&&!(10<=Number(CT)))throw Error("Environmental error: no available transport.")}po.prototype.g=function(t,e){return new mt(t,e)};function mt(t,e){Me.call(this),this.g=new Zg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!oo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!oo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Qr(this)}ze(mt,Me);mt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Uu(Ve(t.hb,t,e))),rt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=am(t,null,t.W),ea(t)};mt.prototype.close=function(){Yu(this.g)};mt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,$a(this.g,e)}else this.v?(e={},e.__data__=Lu(t),$a(this.g,e)):$a(this.g,t)};mt.prototype.M=function(){this.g.j=null,delete this.j,Yu(this.g),delete this.g,mt.Z.M.call(this)};function lm(t){Vu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(lm,Vu);function hm(){ju.call(this),this.status=1}ze(hm,ju);function Qr(t){this.g=t}ze(Qr,um);Qr.prototype.xa=function(){je(this.g,"a")};Qr.prototype.wa=function(t){je(this.g,new lm(t))};Qr.prototype.va=function(t){je(this.g,new hm(t))};Qr.prototype.ua=function(){je(this.g,"b")};po.prototype.createWebChannel=po.prototype.g;mt.prototype.send=mt.prototype.u;mt.prototype.open=mt.prototype.m;mt.prototype.close=mt.prototype.close;Go.NO_ERROR=0;Go.TIMEOUT=8;Go.HTTP_ERROR=6;Dg.COMPLETE="complete";Pg.EventType=oi;oi.OPEN="a";oi.CLOSE="b";oi.ERROR="c";oi.MESSAGE="d";Me.prototype.listen=Me.prototype.N;ke.prototype.listenOnce=ke.prototype.O;ke.prototype.getLastError=ke.prototype.La;ke.prototype.getLastErrorCode=ke.prototype.Da;ke.prototype.getStatus=ke.prototype.ba;ke.prototype.getResponseJson=ke.prototype.Qa;ke.prototype.getResponseText=ke.prototype.ga;ke.prototype.send=ke.prototype.ea;var pS=function(){return new po},gS=function(){return zo()},Va=Go,mS=Dg,yS=er,Ef={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},vS=ui,Ai=Pg,_S=ke;const bf="@firebase/firestore";/**
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
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
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
 */let Jr="9.8.0";/**
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
 */const Wn=new gu("@firebase/firestore");function If(){return Wn.logLevel}function F(t,...e){if(Wn.logLevel<=oe.DEBUG){const n=e.map(Ju);Wn.debug(`Firestore (${Jr}): ${t}`,...n)}}function vn(t,...e){if(Wn.logLevel<=oe.ERROR){const n=e.map(Ju);Wn.error(`Firestore (${Jr}): ${t}`,...n)}}function Tf(t,...e){if(Wn.logLevel<=oe.WARN){const n=e.map(Ju);Wn.warn(`Firestore (${Jr}): ${t}`,...n)}}function Ju(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Jr}) INTERNAL ASSERTION FAILED: `+t;throw vn(e),new Error(e)}function ve(t,e){t||G()}function Y(t,e){return t}/**
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
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class wS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ES{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class bS{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new wS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new at(e)}}class IS{constructor(e,n,r){this.type="FirstParty",this.user=at.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class TS{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new IS(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class SS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CS{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.p=n.token,new SS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class Zu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function AS(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */Zu.A=-1;class fm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=AS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function xr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function Sf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function tr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function dm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Vs{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Vs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Vs{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const RS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Vs{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return RS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new P(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new P(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new P(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new P(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
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
 */class js{constructor(e){this.fields=e,e.sort(ct.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ke(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const kS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _n(t){if(ve(!!t),typeof t=="string"){let e=0;const n=kS.exec(t);if(ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
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
 */function pm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gm(t){const e=t.mapValue.fields.__previous_value__;return pm(e)?gm(e):e}function qs(t){const e=_n(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class NS{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Lr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Lr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function ta(t){return t==null}function go(t){return t===0&&1/t==-1/0}function OS(t){return typeof t=="number"&&Number.isInteger(t)&&!go(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(Ee.fromString(e))}static fromName(e){return new $(Ee.fromString(e).popFirst(5))}static empty(){return new $(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new Ee(e.slice()))}}/**
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
 */const Ri={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pm(t)?4:DS(t)?9007199254740991:10:G()}function Bt(t,e){if(t===e)return!0;const n=Yn(t);if(n!==Yn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qs(t).isEqual(qs(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=_n(r.timestampValue),o=_n(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Mr(r.bytesValue).isEqual(Mr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Re(r.geoPointValue.latitude)===Re(s.geoPointValue.latitude)&&Re(r.geoPointValue.longitude)===Re(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Re(r.integerValue)===Re(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Re(r.doubleValue),o=Re(s.doubleValue);return i===o?go(i)===go(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return xr(t.arrayValue.values||[],e.arrayValue.values||[],Bt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Sf(i)!==Sf(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Bt(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Hs(t,e){return(t.values||[]).find(n=>Bt(n,e))!==void 0}function Ur(t,e){if(t===e)return 0;const n=Yn(t),r=Yn(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Re(s.integerValue||s.doubleValue),a=Re(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Cf(t.timestampValue,e.timestampValue);case 4:return Cf(qs(t),qs(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Mr(s),a=Mr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ce(o[c],a[c]);if(u!==0)return u}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ce(Re(s.latitude),Re(i.latitude));return o!==0?o:ce(Re(s.longitude),Re(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ur(o[c],a[c]);if(u)return u}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Ri.mapValue&&i===Ri.mapValue)return 0;if(s===Ri.mapValue)return 1;if(i===Ri.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ce(a[l],u[l]);if(h!==0)return h;const f=Ur(o[a[l]],c[u[l]]);if(f!==0)return f}return ce(a.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function Cf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=_n(t),r=_n(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function Cr(t){return xc(t)}function xc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=_n(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Mr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=xc(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${xc(r.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function Af(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Mc(t){return!!t&&"integerValue"in t}function el(t){return!!t&&"arrayValue"in t}function Rf(t){return!!t&&"nullValue"in t}function kf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vi(t){return!!t&&"mapValue"in t}function Ts(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return tr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ts(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ts(t.arrayValue.values[n]);return e}return Object.assign({},t)}function DS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Vi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ts(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ts(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Vi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Vi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){tr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new dt(Ts(this.value))}}function mm(t){const e=[];return tr(t.fields,(n,r)=>{const s=new ct([n]);if(Vi(r)){const i=mm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new js(e)}/**
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
 */class Ye{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ye(e,0,Z.min(),Z.min(),dt.empty(),0)}static newFoundDocument(e,n,r){return new Ye(e,1,n,Z.min(),r,0)}static newNoDocument(e,n){return new Ye(e,2,n,Z.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new Ye(e,3,n,Z.min(),dt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function PS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Z.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new Xn(s,$.empty(),e)}function xS(t){return new Xn(t.readTime,t.key,-1)}class Xn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xn(Z.min(),$.empty(),-1)}static max(){return new Xn(Z.max(),$.empty(),-1)}}function MS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */class Le{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ki(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ki(this.root,e,this.comparator,!1)}getReverseIterator(){return new ki(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ki(this.root,e,this.comparator,!0)}}class ki{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Fe.RED,this.left=s!=null?s:Fe.EMPTY,this.right=i!=null?i:Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Fe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Fe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Fe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nf(this.data.getIterator())}getIteratorFrom(e){return new Nf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class Nf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class LS{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function Of(t,e=null,n=[],r=[],s=null,i=null,o=null){return new LS(t,e,n,r,s,i,o)}function tl(t){const e=Y(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+Cr(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ta(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Cr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Cr(r)).join(",")),e.P=n}return e.P}function US(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Cr(r.value)}`;var r}).join(", ")}]`),ta(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Cr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Cr(n)).join(",")),`Target(${e})`}function nl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!KS(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Bt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Pf(t.startAt,e.startAt)&&Pf(t.endAt,e.endAt)}function Lc(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class st extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new FS(e,n,r):n==="array-contains"?new VS(e,r):n==="in"?new jS(e,r):n==="not-in"?new qS(e,r):n==="array-contains-any"?new HS(e,r):new st(e,n,r)}static V(e,n,r){return n==="in"?new BS(e,r):new $S(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Ur(n,this.value)):n!==null&&Yn(this.value)===Yn(n)&&this.v(Ur(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class FS extends st{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.v(n)}}class BS extends st{constructor(e,n){super(e,"in",n),this.keys=ym("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $S extends st{constructor(e,n){super(e,"not-in",n),this.keys=ym("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ym(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class VS extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return el(n)&&Hs(n.arrayValue,this.value)}}class jS extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hs(this.value.arrayValue,n)}}class qS extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Hs(this.value.arrayValue,n)}}class HS extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!el(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Hs(this.value.arrayValue,r))}}class mo{constructor(e,n){this.position=e,this.inclusive=n}}class Ar{constructor(e,n="asc"){this.field=e,this.dir=n}}function KS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Df(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=Ur(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Zr{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function zS(t,e,n,r,s,i,o,a){return new Zr(t,e,n,r,s,i,o,a)}function rl(t){return new Zr(t)}function GS(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function il(t){for(const e of t.filters)if(e.S())return e.field;return null}function vm(t){return t.collectionGroup!==null}function Ks(t){const e=Y(t);if(e.D===null){e.D=[];const n=il(e),r=sl(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new Ar(n)),e.D.push(new Ar(ct.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Ar(ct.keyField(),i))}}}return e.D}function Qn(t){const e=Y(t);if(!e.C)if(e.limitType==="F")e.C=Of(e.path,e.collectionGroup,Ks(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ks(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ar(i.field,o))}const r=e.endAt?new mo(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new mo(e.startAt.position,e.startAt.inclusive):null;e.C=Of(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.C}function _m(t,e,n){return new Zr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function na(t,e){return nl(Qn(t),Qn(e))&&t.limitType===e.limitType}function wm(t){return`${tl(Qn(t))}|lt:${t.limitType}`}function Uc(t){return`Query(target=${US(Qn(t))}; limitType=${t.limitType})`}function ol(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):$.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=Df(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Ks(n),r)||n.endAt&&!function(s,i,o){const a=Df(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Ks(n),r))}(t,e)}function WS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Em(t){return(e,n)=>{let r=!1;for(const s of Ks(t)){const i=YS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function YS(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Ur(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */function bm(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:go(e)?"-0":e}}function Im(t){return{integerValue:""+t}}function XS(t,e){return OS(e)?Im(e):bm(t,e)}/**
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
 */class ra{constructor(){this._=void 0}}function QS(t,e,n){return t instanceof zs?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Gs?Sm(t,e):t instanceof Ws?Cm(t,e):function(r,s){const i=Tm(r,s),o=xf(i)+xf(r.k);return Mc(i)&&Mc(r.k)?Im(o):bm(r.M,o)}(t,e)}function JS(t,e,n){return t instanceof Gs?Sm(t,e):t instanceof Ws?Cm(t,e):n}function Tm(t,e){return t instanceof yo?Mc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class zs extends ra{}class Gs extends ra{constructor(e){super(),this.elements=e}}function Sm(t,e){const n=Am(e);for(const r of t.elements)n.some(s=>Bt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ws extends ra{constructor(e){super(),this.elements=e}}function Cm(t,e){let n=Am(e);for(const r of t.elements)n=n.filter(s=>!Bt(s,r));return{arrayValue:{values:n}}}class yo extends ra{constructor(e,n){super(),this.M=e,this.k=n}}function xf(t){return Re(t.integerValue||t.doubleValue)}function Am(t){return el(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class ZS{constructor(e,n){this.field=e,this.transform=n}}function eC(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Gs&&r instanceof Gs||n instanceof Ws&&r instanceof Ws?xr(n.elements,r.elements,Bt):n instanceof yo&&r instanceof yo?Bt(n.k,r.k):n instanceof zs&&r instanceof zs}(t.transform,e.transform)}class tC{constructor(e,n){this.version=e,this.transformResults=n}}class Fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fn}static exists(e){return new Fn(void 0,e)}static updateTime(e){return new Fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ji(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sa{}function nC(t,e,n){t instanceof ia?function(r,s,i){const o=r.value.clone(),a=Uf(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof es?function(r,s,i){if(!ji(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Uf(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Rm(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Fc(t,e,n){t instanceof ia?function(r,s,i){if(!ji(r.precondition,s))return;const o=r.value.clone(),a=Ff(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(Lf(s),o).setHasLocalMutations()}(t,e,n):t instanceof es?function(r,s,i){if(!ji(r.precondition,s))return;const o=Ff(r.fieldTransforms,i,s),a=s.data;a.setAll(Rm(r)),a.setAll(o),s.convertToFoundDocument(Lf(s),a).setHasLocalMutations()}(t,e,n):function(r,s){ji(r.precondition,s)&&s.convertToNoDocument(Z.min())}(t,e)}function rC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Tm(r.transform,s||null);i!=null&&(n==null&&(n=dt.empty()),n.set(r.field,i))}return n||null}function Mf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&xr(n,r,(s,i)=>eC(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Lf(t){return t.isFoundDocument()?t.version:Z.min()}class ia extends sa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class es extends sa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function Rm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Uf(t,e,n){const r=new Map;ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,JS(o,a,n[s]))}return r}function Ff(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,QS(i,o,e))}return r}class sC extends sa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class iC extends sa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class oC{constructor(e){this.count=e}}/**
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
 */var Ae,ne;function aC(t){switch(t){default:return G();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function km(t){if(t===void 0)return vn("GRPC error has no .code"),v.UNKNOWN;switch(t){case Ae.OK:return v.OK;case Ae.CANCELLED:return v.CANCELLED;case Ae.UNKNOWN:return v.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return v.INTERNAL;case Ae.UNAVAILABLE:return v.UNAVAILABLE;case Ae.UNAUTHENTICATED:return v.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case Ae.NOT_FOUND:return v.NOT_FOUND;case Ae.ALREADY_EXISTS:return v.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return v.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case Ae.ABORTED:return v.ABORTED;case Ae.OUT_OF_RANGE:return v.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return v.UNIMPLEMENTED;case Ae.DATA_LOSS:return v.DATA_LOSS;default:return G()}}(ne=Ae||(Ae={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){tr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return dm(this.inner)}size(){return this.innerSize}}/**
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
 */const cC=new Le($.comparator);function Jn(){return cC}const uC=new Le($.comparator);function Bc(...t){let e=uC;for(const n of t)e=e.insert(n.key,n);return e}function ja(){return new ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const lC=new Le($.comparator),hC=new qe($.comparator);function be(...t){let e=hC;for(const n of t)e=e.add(n);return e}const fC=new qe(ce);function Nm(){return fC}/**
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
 */class oa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,fi.createSynthesizedTargetChangeForCurrentChange(e,n)),new oa(Z.min(),r,Nm(),Jn(),be())}}class fi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new fi(Ke.EMPTY_BYTE_STRING,n,be(),be(),be())}}/**
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
 */class qi{constructor(e,n,r,s){this.O=e,this.removedTargetIds=n,this.key=r,this.F=s}}class Om{constructor(e,n){this.targetId=e,this.$=n}}class Dm{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Bf{constructor(){this.B=0,this.L=Vf(),this.U=Ke.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=be(),n=be(),r=be();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G()}}),new fi(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=Vf()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class dC{constructor(e){this.nt=e,this.st=new Map,this.it=Jn(),this.rt=$f(),this.ot=new qe(ce)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,s)=>{this.ft(s)&&n(s)})}_t(e){const n=e.targetId,r=e.$.count,s=this.wt(n);if(s){const i=s.target;if(Lc(i))if(r===0){const o=new $(i.path);this.ct(n,o,Ye.newNoDocument(o,Z.min()))}else ve(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Lc(a.target)){const c=new $(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,Ye.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let r=be();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const s=new oa(e,n,this.ot,this.it,r);return this.it=Jn(),this.rt=$f(),this.ot=new qe(ce),s}at(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const s=this.lt(e);this.It(e,n)?s.Y(n,1):s.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new Bf,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new qe(ce),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new Bf),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function $f(){return new Le($.comparator)}function Vf(){return new Le($.comparator)}/**
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
 */const pC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),gC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class mC{constructor(e,n){this.databaseId=e,this.N=n}}function vo(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pm(t,e){return t.N?e.toBase64():e.toUint8Array()}function yC(t,e){return vo(t,e.toTimestamp())}function zt(t){return ve(!!t),Z.fromTimestamp(function(e){const n=_n(e);return new Qe(n.seconds,n.nanos)}(t))}function al(t,e){return function(n){return new Ee(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function xm(t){const e=Ee.fromString(t);return ve(Um(e)),e}function $c(t,e){return al(t.databaseId,e.path)}function qa(t,e){const n=xm(e);if(n.get(1)!==t.databaseId.projectId)throw new P(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(Mm(n))}function Vc(t,e){return al(t.databaseId,e)}function vC(t){const e=xm(t);return e.length===4?Ee.emptyPath():Mm(e)}function jc(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Mm(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function jf(t,e,n){return{name:$c(t,e),fields:n.value.mapValue.fields}}function _C(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.N?(ve(u===void 0||typeof u=="string"),Ke.fromBase64String(u||"")):(ve(u===void 0||u instanceof Uint8Array),Ke.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?v.UNKNOWN:km(c.code);return new P(u,c.message||"")}(o);n=new Dm(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=qa(t,r.document.name),i=zt(r.document.updateTime),o=new dt({mapValue:{fields:r.document.fields}}),a=Ye.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new qi(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=qa(t,r.document),i=r.readTime?zt(r.readTime):Z.min(),o=Ye.newNoDocument(s,i),a=r.removedTargetIds||[];n=new qi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=qa(t,r.document),i=r.removedTargetIds||[];n=new qi([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new oC(s),o=r.targetId;n=new Om(o,i)}}return n}function wC(t,e){let n;if(e instanceof ia)n={update:jf(t,e.key,e.value)};else if(e instanceof sC)n={delete:$c(t,e.key)};else if(e instanceof es)n={update:jf(t,e.key,e.data),updateMask:NC(e.fieldMask)};else{if(!(e instanceof iC))return G();n={verify:$c(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof zs)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Gs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ws)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof yo)return{fieldPath:i.field.canonicalString(),increment:o.k};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:yC(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function EC(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?zt(r.updateTime):zt(s);return i.isEqual(Z.min())&&(i=zt(s)),new tC(i,r.transformResults||[])}(n,e))):[]}function bC(t,e){return{documents:[Vc(t,e.path)]}}function IC(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Vc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Vc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(kf(h.value))return{unaryFilter:{field:hr(h.field),op:"IS_NAN"}};if(Rf(h.value))return{unaryFilter:{field:hr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(kf(h.value))return{unaryFilter:{field:hr(h.field),op:"IS_NOT_NAN"}};if(Rf(h.value))return{unaryFilter:{field:hr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hr(h.field),op:AC(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:hr(l.field),direction:CC(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.N||ta(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function TC(t){let e=vC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=Lm(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Ar(_r(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,ta(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new mo(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new mo(f,h)}(n.endAt)),zS(e,s,o,i,a,"F",c,u)}function SC(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Lm(t){return t?t.unaryFilter!==void 0?[kC(t)]:t.fieldFilter!==void 0?[RC(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Lm(e)).reduce((e,n)=>e.concat(n)):G():[]}function CC(t){return pC[t]}function AC(t){return gC[t]}function hr(t){return{fieldPath:t.canonicalString()}}function _r(t){return ct.fromServerFormat(t.fieldPath)}function RC(t){return st.create(_r(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}function kC(t){switch(t.unaryFilter.op){case"IS_NAN":const e=_r(t.unaryFilter.field);return st.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=_r(t.unaryFilter.field);return st.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_r(t.unaryFilter.field);return st.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=_r(t.unaryFilter.field);return st.create(s,"!=",{nullValue:"NULL_VALUE"});default:return G()}}function NC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Um(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */const OC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(s=>s?A.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function di(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class PC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&nC(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Fc(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Fc(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(Z.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&xr(this.mutations,e.mutations,(n,r)=>Mf(n,r))&&xr(this.baseMutations,e.baseMutations,(n,r)=>Mf(n,r))}}class cl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length);let s=lC;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new cl(e,n,r,s)}}/**
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
 */class xC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Bn{constructor(e,n,r,s,i=Z.min(),o=Z.min(),a=Ke.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class MC{constructor(e){this.Jt=e}}function LC(t){const e=TC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_m(e,e.limit,"L"):e}/**
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
 */class UC{constructor(){this.qe=new FC}addToCollectionParentIndex(e,n){return this.qe.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Xn.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class FC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new qe(Ee.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new qe(Ee.comparator)).toArray()}}/**
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
 */class Fr{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Fr(0)}static yn(){return new Fr(-1)}}/**
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
 */async function pi(t){if(t.code!==v.FAILED_PRECONDITION||t.message!==OC)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class BC{constructor(){this.changes=new ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $C{constructor(e,n,r){this.ds=e,this.Bs=n,this.indexManager=r}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Us(e,n,r))}Us(e,n,r){return this.ds.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}qs(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Ks(e,n){return this.ds.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Qs(e,n,r){return function(s){return $.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.js(e,n.path):vm(n)?this.Ws(e,n,r):this.zs(e,n,r)}js(e,n){return this.Ls(e,new $(n)).next(r=>{let s=Bc();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Ws(e,n,r){const s=n.collectionGroup;let i=Bc();return this.indexManager.getCollectionParents(e,s).next(o=>A.forEach(o,a=>{const c=function(u,l){return new Zr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.zs(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}zs(e,n,r){let s;return this.ds.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let u=s.get(c);u==null&&(u=Ye.newInvalidDocument(c),s=s.insert(c,u)),Fc(a,u,o.localWriteTime),u.isFoundDocument()||(s=s.remove(c))}}).next(()=>(s.forEach((i,o)=>{ol(n,o)||(s=s.remove(i))}),s))}}/**
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
 */class ul{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hs=r,this.Js=s}static Ys(e,n){let r=be(),s=be();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ul(e,n.fromCache,r,s)}}/**
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
 */class VC{constructor(){this.Xs=!1}initialize(e,n){this.Zs=e,this.indexManager=n,this.Xs=!0}Qs(e,n,r,s){return this.ti(e,n).next(i=>i||this.ei(e,n,s,r)).next(i=>i||this.ni(e,n))}ti(e,n){return A.resolve(null)}ei(e,n,r,s){return GS(n)||s.isEqual(Z.min())?this.ni(e,n):this.Zs.Ks(e,r).next(i=>{const o=this.si(n,i);return this.ii(n,o,r,s)?this.ni(e,n):(If()<=oe.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Uc(n)),this.ri(e,o,n,PS(s,-1)))})}si(e,n){let r=new qe(Em(e));return n.forEach((s,i)=>{ol(e,i)&&(r=r.add(i))}),r}ii(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ni(e,n){return If()<=oe.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Uc(n)),this.Zs.Qs(e,n,Xn.min())}ri(e,n,r,s){return this.Zs.Qs(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class jC{constructor(e,n,r,s){this.persistence=e,this.oi=n,this.M=s,this.ui=new Le(ce),this.ai=new ts(i=>tl(i),nl),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(r)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new $C(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ui))}}function qC(t,e,n,r){return new jC(t,e,n,r)}async function Fm(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.Bs.getAllMutationBatches(r).next(i=>(s=i,n.li(e),n.Bs.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=be();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.fi.Ks(r,c).next(u=>({di:u,removedBatchIds:o,addedBatchIds:a}))})})}function HC(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=A.resolve();return h.forEach(p=>{f=f.next(()=>u.getEntry(a,p)).next(m=>{const I=c.docVersions.get(p);ve(I!==null),m.version.compareTo(I)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),f.next(()=>o.Bs.removeMutationBatch(a,l))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.Bs.performConsistencyCheck(r)).next(()=>n.fi.Ks(r,s))})}function Bm(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function KC(t,e){const n=Y(t),r=e.snapshotVersion;let s=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hi.newChangeBuffer({trackRemovals:!0});s=n.ui;const a=[];e.targetChanges.forEach((u,l)=>{const h=s.get(l);if(!h)return;a.push(n.fs.removeMatchingKeys(i,u.removedDocuments,l).next(()=>n.fs.addMatchingKeys(i,u.addedDocuments,l)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(l)?f=f.withResumeToken(Ke.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(l,f),function(p,m,I){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(h,f,u)&&a.push(n.fs.updateTargetData(i,f))});let c=Jn();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(zC(i,o,e.documentUpdates).next(u=>{c=u})),!r.isEqual(Z.min())){const u=n.fs.getLastRemoteSnapshotVersion(i).next(l=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.fi.Gs(i,c)).next(()=>c)}).then(i=>(n.ui=s,i))}function zC(t,e,n){let r=be();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let i=Jn();return n.forEach((o,a)=>{const c=s.get(o);a.isNoDocument()&&a.version.isEqual(Z.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):F("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function GC(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(r,e)))}function WC(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.fs.getTargetData(r,e).next(i=>i?(s=i,A.resolve(s)):n.fs.allocateTargetId(r).next(o=>(s=new Bn(e,o,0,r.currentSequenceNumber),n.fs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ui.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ui=n.ui.insert(r.targetId,r),n.ai.set(e,r.targetId)),r})}async function qc(t,e,n){const r=Y(t),s=r.ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!di(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ui=r.ui.remove(e),r.ai.delete(s.target)}function qf(t,e,n){const r=Y(t);let s=Z.min(),i=be();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=Y(a),h=l.ai.get(u);return h!==void 0?A.resolve(l.ui.get(h)):l.fs.getTargetData(c,u)}(r,o,Qn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.oi.Qs(o,e,n?s:Z.min(),n?i:be())).next(a=>(YC(r,WS(e),a),{documents:a,_i:i})))}function YC(t,e,n){let r=Z.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ci.set(e,r)}/**
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
 */class XC{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,n){return A.resolve(this.yi.get(n))}saveBundleMetadata(e,n){var r;return this.yi.set(n.id,{id:(r=n).id,version:r.version,createTime:zt(r.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.pi.get(n))}saveNamedQuery(e,n){return this.pi.set(n.name,function(r){return{name:r.name,query:LC(r.bundledQuery),readTime:zt(r.readTime)}}(n)),A.resolve()}}/**
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
 */class QC{constructor(){this.overlays=new Le($.comparator),this.Ii=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Xt(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ii.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ii.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const s=ja(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return A.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Le((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=ja(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ja(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return A.resolve(a)}Xt(e,n,r){if(r===null)return;const s=this.overlays.get(r.key);if(s!==null){const o=this.Ii.get(s.largestBatchId).delete(r.key);this.Ii.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xC(n,r));let i=this.Ii.get(n);i===void 0&&(i=be(),this.Ii.set(n,i)),this.Ii.set(n,i.add(r.key))}}/**
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
 */class ll{constructor(){this.Ti=new qe(Oe.Ei),this.Ai=new qe(Oe.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.Ti=this.Ti.add(r),this.Ai=this.Ai.add(r)}bi(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Pi(new Oe(e,n))}Vi(e,n){e.forEach(r=>this.removeReference(r,n))}vi(e){const n=new $(new Ee([])),r=new Oe(n,e),s=new Oe(n,e+1),i=[];return this.Ai.forEachInRange([r,s],o=>{this.Pi(o),i.push(o.key)}),i}Si(){this.Ti.forEach(e=>this.Pi(e))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const n=new $(new Ee([])),r=new Oe(n,e),s=new Oe(n,e+1);let i=be();return this.Ai.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Oe(e,0),r=this.Ti.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.Ci=n}static Ei(e,n){return $.comparator(e.key,n.key)||ce(e.Ci,n.Ci)}static Ri(e,n){return ce(e.Ci,n.Ci)||$.comparator(e.key,n.key)}}/**
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
 */class JC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.xi=1,this.Ni=new qe(Oe.Ei)}checkEmpty(e){return A.resolve(this.Bs.length===0)}addMutationBatch(e,n,r,s){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new PC(i,n,r,s);this.Bs.push(o);for(const a of s)this.Ni=this.Ni.add(new Oe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.ki(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Mi(r),i=s<0?0:s;return A.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(e){return A.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),s=new Oe(n,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([r,s],o=>{const a=this.ki(o.Ci);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(ce);return n.forEach(s=>{const i=new Oe(s,0),o=new Oe(s,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([i,o],a=>{r=r.add(a.Ci)})}),A.resolve(this.Oi(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;$.isDocumentKey(i)||(i=i.child(""));const o=new Oe(new $(i),0);let a=new qe(ce);return this.Ni.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.Ci)),!0)},o),A.resolve(this.Oi(a))}Oi(e){const n=[];return e.forEach(r=>{const s=this.ki(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.Fi(n.batchId,"removed")===0),this.Bs.shift();let r=this.Ni;return A.forEach(n.mutations,s=>{const i=new Oe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Ni=r})}_n(e){}containsKey(e,n){const r=new Oe(n,0),s=this.Ni.firstAfterOrEqual(r);return A.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.Bs.length,A.resolve()}Fi(e,n){return this.Mi(e)}Mi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}ki(e){const n=this.Mi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
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
 */class ZC{constructor(e){this.$i=e,this.docs=new Le($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.$i(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(e,n){let r=Jn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ye.newInvalidDocument(s))}),A.resolve(r)}getAllFromCollection(e,n,r){let s=Jn();const i=new $(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||MS(xS(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,n,r,s){G()}Bi(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new eA(this)}getSize(e){return A.resolve(this.size)}}class eA extends BC{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Kn.addEntry(e,s)):this.Kn.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
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
 */class tA{constructor(e){this.persistence=e,this.Li=new ts(n=>tl(n),nl),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Ui=0,this.qi=new ll,this.targetCount=0,this.Ki=Fr.gn()}forEachTarget(e,n){return this.Li.forEach((r,s)=>n(s)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ui&&(this.Ui=n),A.resolve()}Tn(e){this.Li.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ki=new Fr(n),this.highestTargetId=n),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Tn(n),A.resolve()}removeTargetData(e,n){return this.Li.delete(n.target),this.qi.vi(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Li.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Li.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Li.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.qi.bi(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.qi.Vi(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qi.vi(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qi.Di(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.qi.containsKey(n))}}/**
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
 */class nA{constructor(e,n){this.Gi={},this.overlays={},this.es=new Zu(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new tA(this),this.indexManager=new UC,this.ds=function(r){return new ZC(r)}(r=>this.referenceDelegate.Qi(r)),this.M=new MC(n),this._s=new XC(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new QC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Gi[e.toKey()];return r||(r=new JC(n,this.referenceDelegate),this.Gi[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const s=new rA(this.es.next());return this.referenceDelegate.ji(),r(s).next(i=>this.referenceDelegate.Wi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zi(e,n){return A.or(Object.values(this.Gi).map(r=>()=>r.containsKey(e,n)))}}class rA extends DC{constructor(e){super(),this.currentSequenceNumber=e}}class hl{constructor(e){this.persistence=e,this.Hi=new ll,this.Ji=null}static Yi(e){return new hl(e)}get Xi(){if(this.Ji)return this.Ji;throw G()}addReference(e,n,r){return this.Hi.addReference(r,n),this.Xi.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Hi.removeReference(r,n),this.Xi.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Xi.add(n.toString()),A.resolve()}removeTarget(e,n){this.Hi.vi(n.targetId).forEach(s=>this.Xi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}ji(){this.Ji=new Set}Wi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Xi,r=>{const s=$.fromPath(r);return this.Zi(e,s).next(i=>{i||n.removeEntry(s,Z.min())})}).next(()=>(this.Ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zi(e,n).next(r=>{r?this.Xi.delete(n.toString()):this.Xi.add(n.toString())})}Qi(e){return 0}Zi(e,n){return A.or([()=>A.resolve(this.Hi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zi(e,n)])}}class Hf{constructor(){this.activeTargetIds=Nm()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sA{constructor(){this.Ur=new Hf,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Hf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class iA{Kr(e){}shutdown(){}}/**
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
 */class Kf{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const oA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class aA{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}/**
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
 */class cA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.uo=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,s,i){const o=this.ho(e,n);F("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(c=>(F("RestConnection","Received: ",c),c),c=>{throw Tf("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,s,i){return this.co(e,n,r,s,i)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Jr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,n){const r=oA[e];return`${this.uo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,s){return new Promise((i,o)=>{const a=new _S;a.listenOnce(mS.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Va.NO_ERROR:const u=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Va.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new P(v.DEADLINE_EXCEEDED,"Request time out"));break;case Va.HTTP_ERROR:const l=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(m)>=0?m:v.UNKNOWN}(h.status);o(new P(f,h.message))}else o(new P(v.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(v.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}wo(e,n,r){const s=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=pS(),o=gS(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new vS({})),this.lo(a.initMessageHeaders,n,r),kp()||Op()||ZE()||Dp()||eb()||Np()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");F("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new aA({Jr:m=>{h?F("Connection","Not sending because WebChannel is closed:",m):(l||(F("Connection","Opening WebChannel transport."),u.open(),l=!0),F("Connection","WebChannel sending:",m),u.send(m))},Yr:()=>u.close()}),p=(m,I,_)=>{m.listen(I,S=>{try{_(S)}catch(D){setTimeout(()=>{throw D},0)}})};return p(u,Ai.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),p(u,Ai.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),f.ro())}),p(u,Ai.EventType.ERROR,m=>{h||(h=!0,Tf("Connection","WebChannel transport errored:",m),f.ro(new P(v.UNAVAILABLE,"The operation could not be completed")))}),p(u,Ai.EventType.MESSAGE,m=>{var I;if(!h){const _=m.data[0];ve(!!_);const S=_,D=S.error||((I=S[0])===null||I===void 0?void 0:I.error);if(D){F("Connection","WebChannel received error:",D);const V=D.status;let U=function(ue){const X=Ae[ue];if(X!==void 0)return km(X)}(V),ie=D.message;U===void 0&&(U=v.INTERNAL,ie="Unknown error status: "+V+" with message "+D.message),h=!0,f.ro(new P(U,ie)),u.close()}else F("Connection","WebChannel received:",_),f.oo(_)}}),p(o,yS.STAT_EVENT,m=>{m.stat===Ef.PROXY?F("Connection","Detected buffering proxy"):m.stat===Ef.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.io()},0),f}}function Ha(){return typeof document!="undefined"?document:null}/**
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
 */function aa(t){return new mC(t,!0)}class $m{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Yn=e,this.timerId=n,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Vm{constructor(e,n,r,s,i,o,a,c){this.Yn=e,this.Vo=r,this.vo=s,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new $m(e,n)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===v.RESOURCE_EXHAUSTED?(vn(n.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Do===n&&this.Qo(r,s)},r=>{e(()=>{const s=new P(v.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(s)})})}Qo(e,n){const r=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(s=>{r(()=>this.jo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Yn.enqueueAndForget(()=>this.Do===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uA extends Vm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.M=i}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=_C(this.M,e),r=function(s){if(!("targetChange"in s))return Z.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?Z.min():i.readTime?zt(i.readTime):Z.min()}(e);return this.listener.zo(n,r)}Ho(e){const n={};n.database=jc(this.M),n.addTarget=function(s,i){let o;const a=i.target;return o=Lc(a)?{documents:bC(s,a)}:{query:IC(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Pm(s,i.resumeToken):i.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=vo(s,i.snapshotVersion.toTimestamp())),o}(this.M,e);const r=SC(this.M,e);r&&(n.labels=r),this.Lo(n)}Jo(e){const n={};n.database=jc(this.M),n.removeTarget=e,this.Lo(n)}}class lA extends Vm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.M=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=EC(e.writeResults,e.commitTime),r=zt(e.commitTime);return this.listener.tu(r,n)}return ve(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=jc(this.M),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wC(this.M,r))};this.Lo(n)}}/**
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
 */class hA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=r,this.M=s,this.su=!1}iu(){if(this.su)throw new P(v.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.So.co(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(v.UNKNOWN,s.toString())})}_o(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.So._o(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(v.UNKNOWN,s.toString())})}terminate(){this.su=!0}}class fA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(vn(n),this.uu=!1):F("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class dA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr(o=>{r.enqueueAndForget(async()=>{nr(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Y(a);c.wu.add(4),await gi(c),c.yu.set("Unknown"),c.wu.delete(4),await ca(c)}(this))})}),this.yu=new fA(r,s)}}async function ca(t){if(nr(t))for(const e of t.mu)await e(!0)}async function gi(t){for(const e of t.mu)await e(!1)}function jm(t,e){const n=Y(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),pl(n)?dl(n):ns(n).Mo()&&fl(n,e))}function qm(t,e){const n=Y(t),r=ns(n);n._u.delete(e),r.Mo()&&Hm(n,e),n._u.size===0&&(r.Mo()?r.$o():nr(n)&&n.yu.set("Unknown"))}function fl(t,e){t.pu.Z(e.targetId),ns(t).Ho(e)}function Hm(t,e){t.pu.Z(e),ns(t).Jo(e)}function dl(t){t.pu=new dC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t._u.get(e)||null}),ns(t).start(),t.yu.au()}function pl(t){return nr(t)&&!ns(t).ko()&&t._u.size>0}function nr(t){return Y(t).wu.size===0}function Km(t){t.pu=void 0}async function pA(t){t._u.forEach((e,n)=>{fl(t,e)})}async function gA(t,e){Km(t),pl(t)?(t.yu.lu(e),dl(t)):t.yu.set("Unknown")}async function mA(t,e,n){if(t.yu.set("Online"),e instanceof Dm&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r._u.delete(o),r.pu.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _o(t,r)}else if(e instanceof qi?t.pu.ut(e):e instanceof Om?t.pu._t(e):t.pu.ht(e),!n.isEqual(Z.min()))try{const r=await Bm(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.pu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s._u.get(c);u&&s._u.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s._u.get(a);if(!c)return;s._u.set(a,c.withResumeToken(Ke.EMPTY_BYTE_STRING,c.snapshotVersion)),Hm(s,a);const u=new Bn(c.target,a,1,c.sequenceNumber);fl(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await _o(t,r)}}async function _o(t,e,n){if(!di(e))throw e;t.wu.add(1),await gi(t),t.yu.set("Offline"),n||(n=()=>Bm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await ca(t)})}function zm(t,e){return e().catch(n=>_o(t,n,e))}async function ua(t){const e=Y(t),n=wn(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;yA(e);)try{const s=await GC(e.localStore,r);if(s===null){e.du.length===0&&n.$o();break}r=s.batchId,vA(e,s)}catch(s){await _o(e,s)}Gm(e)&&Wm(e)}function yA(t){return nr(t)&&t.du.length<10}function vA(t,e){t.du.push(e);const n=wn(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function Gm(t){return nr(t)&&!wn(t).ko()&&t.du.length>0}function Wm(t){wn(t).start()}async function _A(t){wn(t).nu()}async function wA(t){const e=wn(t);for(const n of t.du)e.Zo(n.mutations)}async function EA(t,e,n){const r=t.du.shift(),s=cl.from(r,e,n);await zm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ua(t)}async function bA(t,e){e&&wn(t).Xo&&await async function(n,r){if(s=r.code,aC(s)&&s!==v.ABORTED){const i=n.du.shift();wn(n).Fo(),await zm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await ua(n)}var s}(t,e),Gm(t)&&Wm(t)}async function zf(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=nr(n);n.wu.add(3),await gi(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await ca(n)}async function IA(t,e){const n=Y(t);e?(n.wu.delete(2),await ca(n)):e||(n.wu.add(2),await gi(n),n.yu.set("Unknown"))}function ns(t){return t.Iu||(t.Iu=function(e,n,r){const s=Y(e);return s.iu(),new uA(n,s.So,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Xr:pA.bind(null,t),eo:gA.bind(null,t),zo:mA.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),pl(t)?dl(t):t.yu.set("Unknown")):(await t.Iu.stop(),Km(t))})),t.Iu}function wn(t){return t.Tu||(t.Tu=function(e,n,r){const s=Y(e);return s.iu(),new lA(n,s.So,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Xr:_A.bind(null,t),eo:bA.bind(null,t),eu:wA.bind(null,t),tu:EA.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await ua(t)):(await t.Tu.stop(),t.du.length>0&&(F("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
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
 */class gl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new gl(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ml(t,e){if(vn("AsyncQueue",`${e}: ${t}`),di(t))return new P(v.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Rr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Bc(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new Rr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Rr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Gf{constructor(){this.Eu=new Le($.comparator)}track(e){const n=e.doc.key,r=this.Eu.get(n);r?e.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Eu=this.Eu.remove(n):e.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):G():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Br{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Br(e,n,Rr.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&na(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class TA{constructor(){this.Ru=void 0,this.listeners=[]}}class SA{constructor(){this.queries=new ts(e=>wm(e),na),this.onlineState="Unknown",this.bu=new Set}}async function Ym(t,e){const n=Y(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new TA),s)try{i.Ru=await n.onListen(r)}catch(o){const a=ml(o,`Initialization of query '${Uc(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.Vu(i.Ru)&&yl(n)}async function Xm(t,e){const n=Y(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function CA(t,e){const n=Y(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(s)&&(r=!0);o.Ru=s}}r&&yl(n)}function AA(t,e,n){const r=Y(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function yl(t){t.bu.forEach(e=>{e.next()})}class Qm{constructor(e,n,r){this.query=e,this.vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Br(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!e.docs.isEmpty()||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=Br.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}/**
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
 */class Jm{constructor(e){this.key=e}}class Zm{constructor(e){this.key=e}}class RA{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.current=!1,this.Ku=be(),this.mutatedKeys=be(),this.Gu=Em(e),this.Qu=new Rr(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new Gf,s=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const f=s.get(l),p=ol(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),I=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;f&&p?f.data.isEqual(p.data)?m!==I&&(r.track({type:3,doc:p}),_=!0):this.Hu(f,p)||(r.track({type:2,doc:p}),_=!0,(c&&this.Gu(p,c)>0||u&&this.Gu(p,u)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),_=!0):f&&!p&&(r.track({type:1,doc:f}),_=!0,(c||u)&&(a=!0)),_&&(p?(o=o.add(p),i=I?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,ii:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((u,l)=>function(h,f){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return p(h)-p(f)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Br(this.query,e.Qu,s,i,e.mutatedKeys,a===0,c,!1),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Gf,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=be(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new Zm(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new Jm(r))}),n}ta(e){this.Uu=e._i,this.Ku=be();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ea(){return Br.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class kA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class NA{constructor(e){this.key=e,this.na=!1}}class OA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new ts(a=>wm(a),na),this.ra=new Map,this.oa=new Set,this.ua=new Le($.comparator),this.aa=new Map,this.ca=new ll,this.ha={},this.la=new Map,this.fa=Fr.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function DA(t,e){const n=jA(t);let r,s;const i=n.ia.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ea();else{const o=await WC(n.localStore,Qn(e));n.isPrimaryClient&&jm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await PA(n,e,r,a==="current")}return s}async function PA(t,e,n,r){t._a=(l,h,f)=>async function(p,m,I,_){let S=m.view.Wu(I);S.ii&&(S=await qf(p.localStore,m.query,!1).then(({documents:U})=>m.view.Wu(U,S)));const D=_&&_.targetChanges.get(m.targetId),V=m.view.applyChanges(S,p.isPrimaryClient,D);return Yf(p,m.targetId,V.Xu),V.snapshot}(t,l,h,f);const s=await qf(t.localStore,e,!0),i=new RA(e,s._i),o=i.Wu(s.documents),a=fi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Yf(t,n,c.Xu);const u=new kA(e,n,i);return t.ia.set(e,u),t.ra.has(n)?t.ra.get(n).push(e):t.ra.set(n,[e]),c.snapshot}async function xA(t,e){const n=Y(t),r=n.ia.get(e),s=n.ra.get(r.targetId);if(s.length>1)return n.ra.set(r.targetId,s.filter(i=>!na(i,e))),void n.ia.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await qc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),qm(n.remoteStore,r.targetId),Hc(n,r.targetId)}).catch(pi)):(Hc(n,r.targetId),await qc(n.localStore,r.targetId,!0))}async function MA(t,e,n){const r=qA(t);try{const s=await function(i,o){const a=Y(i),c=Qe.now(),u=o.reduce((h,f)=>h.add(f.key),be());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.fi.Ks(h,u).next(f=>{l=f;const p=[];for(const m of o){const I=rC(m,l.get(m.key));I!=null&&p.push(new es(m.key,I,mm(I.value.mapValue),Fn.exists(!0)))}return a.Bs.addMutationBatch(h,c,p,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.ha[i.currentUser.toKey()];c||(c=new Le(ce)),c=c.insert(o,a),i.ha[i.currentUser.toKey()]=c}(r,s.batchId,n),await mi(r,s.changes),await ua(r.remoteStore)}catch(s){const i=ml(s,"Failed to persist write");n.reject(i)}}async function ey(t,e){const n=Y(t);try{const r=await KC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.aa.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.na=!0:s.modifiedDocuments.size>0?ve(o.na):s.removedDocuments.size>0&&(ve(o.na),o.na=!1))}),await mi(n,r,e)}catch(r){await pi(r)}}function Wf(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ia.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=Y(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Pu(o)&&(c=!0)}),c&&yl(a)}(r.eventManager,e),s.length&&r.sa.zo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LA(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.aa.get(e),i=s&&s.key;if(i){let o=new Le($.comparator);o=o.insert(i,Ye.newNoDocument(i,Z.min()));const a=be().add(i),c=new oa(Z.min(),new Map,new qe(ce),o,a);await ey(r,c),r.ua=r.ua.remove(i),r.aa.delete(e),vl(r)}else await qc(r.localStore,e,!1).then(()=>Hc(r,e,n)).catch(pi)}async function UA(t,e){const n=Y(t),r=e.batch.batchId;try{const s=await HC(n.localStore,e);ny(n,r,null),ty(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mi(n,s)}catch(s){await pi(s)}}async function FA(t,e,n){const r=Y(t);try{const s=await function(i,o){const a=Y(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.Bs.lookupMutationBatch(c,o).next(l=>(ve(l!==null),u=l.keys(),a.Bs.removeMutationBatch(c,l))).next(()=>a.Bs.performConsistencyCheck(c)).next(()=>a.fi.Ks(c,u))})}(r.localStore,e);ny(r,e,n),ty(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mi(r,s)}catch(s){await pi(s)}}function ty(t,e){(t.la.get(e)||[]).forEach(n=>{n.resolve()}),t.la.delete(e)}function ny(t,e,n){const r=Y(t);let s=r.ha[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ha[r.currentUser.toKey()]=s}}function Hc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ra.get(e))t.ia.delete(r),n&&t.sa.wa(r,n);t.ra.delete(e),t.isPrimaryClient&&t.ca.vi(e).forEach(r=>{t.ca.containsKey(r)||ry(t,r)})}function ry(t,e){t.oa.delete(e.path.canonicalString());const n=t.ua.get(e);n!==null&&(qm(t.remoteStore,n),t.ua=t.ua.remove(e),t.aa.delete(n),vl(t))}function Yf(t,e,n){for(const r of n)r instanceof Jm?(t.ca.addReference(r.key,e),BA(t,r)):r instanceof Zm?(F("SyncEngine","Document no longer in limbo: "+r.key),t.ca.removeReference(r.key,e),t.ca.containsKey(r.key)||ry(t,r.key)):G()}function BA(t,e){const n=e.key,r=n.path.canonicalString();t.ua.get(n)||t.oa.has(r)||(F("SyncEngine","New document in limbo: "+n),t.oa.add(r),vl(t))}function vl(t){for(;t.oa.size>0&&t.ua.size<t.maxConcurrentLimboResolutions;){const e=t.oa.values().next().value;t.oa.delete(e);const n=new $(Ee.fromString(e)),r=t.fa.next();t.aa.set(r,new NA(n)),t.ua=t.ua.insert(n,r),jm(t.remoteStore,new Bn(Qn(rl(n.path)),r,2,Zu.A))}}async function mi(t,e,n){const r=Y(t),s=[],i=[],o=[];r.ia.isEmpty()||(r.ia.forEach((a,c)=>{o.push(r._a(c,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),s.push(u);const l=ul.Ys(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.sa.zo(s),await async function(a,c){const u=Y(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>A.forEach(c,h=>A.forEach(h.Hs,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>A.forEach(h.Js,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!di(l))throw l;F("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.ui.get(h),p=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(p);u.ui=u.ui.insert(h,m)}}}(r.localStore,i))}async function $A(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await Fm(n.localStore,e);n.currentUser=e,function(s,i){s.la.forEach(o=>{o.forEach(a=>{a.reject(new P(v.CANCELLED,i))})}),s.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mi(n,r.di)}}function VA(t,e){const n=Y(t),r=n.aa.get(e);if(r&&r.na)return be().add(r.key);{let s=be();const i=n.ra.get(e);if(!i)return s;for(const o of i){const a=n.ia.get(o);s=s.unionWith(a.view.ju)}return s}}function jA(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ey.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LA.bind(null,e),e.sa.zo=CA.bind(null,e.eventManager),e.sa.wa=AA.bind(null,e.eventManager),e}function qA(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FA.bind(null,e),e}class HA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=aa(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return qC(this.persistence,new VC,e.initialUser,this.M)}ya(e){return new nA(hl.Yi,this.M)}ga(e){return new sA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class KA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$A.bind(null,this.syncEngine),await IA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new SA}createDatastore(e){const n=aa(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new cA(s));var s;return function(i,o,a,c){return new hA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Wf(this.syncEngine,a,0),o=Kf.vt()?new Kf:new iA,new dA(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,u){const l=new OA(r,s,i,o,a,c);return u&&(l.da=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);F("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await gi(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */class sy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class zA{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=at.UNAUTHENTICATED,this.clientId=fm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ml(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function GA(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Fm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function WA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YA(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>zf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>zf(e.remoteStore,i)),t.onlineComponents=e}async function YA(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await GA(t,new HA)),t.offlineComponents}async function iy(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await WA(t,new KA)),t.onlineComponents}function XA(t){return iy(t).then(e=>e.syncEngine)}async function oy(t){const e=await iy(t),n=e.eventManager;return n.onListen=DA.bind(null,e.syncEngine),n.onUnlisten=xA.bind(null,e.syncEngine),n}function QA(t,e,n={}){const r=new Kt;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new sy({next:h=>{i.enqueueAndForget(()=>Xm(s,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new P(v.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new P(v.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Qm(rl(o.path),u,{includeMetadataChanges:!0,ku:!0});return Ym(s,l)}(await oy(t),t.asyncQueue,e,n,r)),r.promise}function JA(t,e,n={}){const r=new Kt;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new sy({next:h=>{i.enqueueAndForget(()=>Xm(s,l)),h.fromCache&&a.source==="server"?c.reject(new P(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Qm(o,u,{includeMetadataChanges:!0,ku:!0});return Ym(s,l)}(await oy(t),t.asyncQueue,e,n,r)),r.promise}const Xf=new Map;/**
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
 */function ay(t,e,n){if(!n)throw new P(v.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ZA(t,e,n,r){if(e===!0&&r===!0)throw new P(v.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qf(t){if(!$.isDocumentKey(t))throw new P(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jf(t){if($.isDocumentKey(t))throw new P(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function la(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function En(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=la(t);throw new P(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function eR(t,e){if(e<=0)throw new P(v.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Zf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ZA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class _l{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zf({}),this._settingsFrozen=!1,e instanceof Lr?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new P(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lr(s.options.projectId)}(e))}get app(){if(!this._app)throw new P(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ES;switch(n.type){case"gapi":const r=n.client;return ve(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new TS(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new P(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Xf.get(e);n&&(F("ComponentProvider","Removing Datastore"),Xf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class it{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}}class rr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rr(this.firestore,e,this._query)}}class gn extends rr{constructor(e,n,r){super(e,n,rl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new $(e))}withConverter(e){return new gn(this.firestore,e,this._path)}}function cy(t,e,...n){if(t=Se(t),ay("collection","path",e),t instanceof _l){const r=Ee.fromString(e,...n);return Jf(r),new gn(t,null,r)}{if(!(t instanceof it||t instanceof gn))throw new P(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Jf(r),new gn(t.firestore,null,r)}}function uy(t,e,...n){if(t=Se(t),arguments.length===1&&(e=fm.R()),ay("doc","path",e),t instanceof _l){const r=Ee.fromString(e,...n);return Qf(r),new it(t,null,new $(r))}{if(!(t instanceof it||t instanceof gn))throw new P(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Qf(r),new it(t.firestore,t instanceof gn?t.converter:null,new $(r))}}/**
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
 */class tR{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new $m(this,"async_queue_retry"),this.Qa=()=>{const n=Ha();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Ha();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const n=Ha();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise(()=>{});const n=new Kt;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$a.push(e),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!di(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(e){const n=this.Fa.then(()=>(this.qa=!0,e().catch(r=>{this.Ua=r,this.qa=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.qa=!1,r))));return this.Fa=n,n}enqueueAfterDelay(e,n,r){this.ja(),this.Ga.indexOf(e)>-1&&(n=0);const s=gl.createAndSchedule(this,e,n,r,i=>this.Ha(i));return this.La.push(s),s}ja(){this.Ua&&G()}verifyOperationInProgress(){}async Ja(){let e;do e=this.Fa,await e;while(e!==this.Fa)}Ya(e){for(const n of this.La)if(n.timerId===e)return!0;return!1}Xa(e){return this.Ja().then(()=>{this.La.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.La)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ja()})}Za(e){this.Ga.push(e)}Ha(e){const n=this.La.indexOf(e);this.La.splice(n,1)}}class yi extends _l{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new tR,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ly(this),this._firestoreClient.terminate()}}function nR(t=vu()){return Lo(t,"firestore").getImmediate()}function wl(t){return t._firestoreClient||ly(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ly(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new NS(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new zA(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class ha{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $r{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $r(Ke.fromBase64String(e))}catch(n){throw new P(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $r(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class fa{constructor(e){this._methodName=e}}/**
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
 */class El{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const rR=/^__.*__$/;class sR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new es(e,this.data,this.fieldMask,n,this.fieldTransforms):new ia(e,this.data,n,this.fieldTransforms)}}class hy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new es(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class bl{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=s,i===void 0&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new bl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nc({path:r,ic:!1});return s.rc(e),s}oc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nc({path:r,ic:!1});return s.tc(),s}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return wo(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(e.length===0)throw this.ac("Document fields must not be empty");if(fy(this.ec)&&rR.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class iR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||aa(e)}lc(e,n,r,s=!1){return new bl({ec:e,methodName:n,hc:r,path:ct.emptyPath(),ic:!1,cc:s},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Il(t){const e=t._freezeSettings(),n=aa(t._databaseId);return new iR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oR(t,e,n,r,s,i={}){const o=t.lc(i.merge||i.mergeFields?2:0,e,n,s);Sl("Data must be an object, but it was:",o,r);const a=dy(r,o);let c,u;if(i.merge)c=new js(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=Kc(e,h,n);if(!o.contains(f))throw new P(v.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);gy(l,f)||l.push(f)}c=new js(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new sR(new dt(a),c,u)}class da extends fa{_toFieldTransform(e){if(e.ec!==2)throw e.ec===1?e.ac(`${this._methodName}() can only appear at the top level of your update data`):e.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof da}}class Tl extends fa{_toFieldTransform(e){return new ZS(e.path,new zs)}isEqual(e){return e instanceof Tl}}function aR(t,e,n,r){const s=t.lc(1,e,n);Sl("Data must be an object, but it was:",s,r);const i=[],o=dt.empty();tr(r,(c,u)=>{const l=Cl(e,c,n);u=Se(u);const h=s.oc(l);if(u instanceof da)i.push(l);else{const f=vi(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new js(i);return new hy(o,a,s.fieldTransforms)}function cR(t,e,n,r,s,i){const o=t.lc(1,e,n),a=[Kc(e,r,n)],c=[s];if(i.length%2!=0)throw new P(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Kc(e,i[f])),c.push(i[f+1]);const u=[],l=dt.empty();for(let f=a.length-1;f>=0;--f)if(!gy(u,a[f])){const p=a[f];let m=c[f];m=Se(m);const I=o.oc(p);if(m instanceof da)u.push(p);else{const _=vi(m,I);_!=null&&(u.push(p),l.set(p,_))}}const h=new js(u);return new hy(l,h,o.fieldTransforms)}function uR(t,e,n,r=!1){return vi(n,t.lc(r?4:3,e))}function vi(t,e){if(py(t=Se(t)))return Sl("Unsupported field value:",e,t),dy(t,e);if(t instanceof fa)return function(n,r){if(!fy(r.ec))throw r.ac(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ac(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&e.ec!==4)throw e.ac("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=vi(o,r.uc(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Se(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return XS(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Qe.fromDate(n);return{timestampValue:vo(r.M,s)}}if(n instanceof Qe){const s=new Qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:vo(r.M,s)}}if(n instanceof El)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof $r)return{bytesValue:Pm(r.M,n._byteString)};if(n instanceof it){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ac(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:al(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ac(`Unsupported field value: ${la(n)}`)}(t,e)}function dy(t,e){const n={};return dm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tr(t,(r,s)=>{const i=vi(s,e.sc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function py(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof El||t instanceof $r||t instanceof it||t instanceof fa)}function Sl(t,e,n){if(!py(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=la(n);throw r==="an object"?e.ac(t+" a custom object"):e.ac(t+" "+r)}}function Kc(t,e,n){if((e=Se(e))instanceof ha)return e._internalPath;if(typeof e=="string")return Cl(t,e);throw wo("Field path arguments must be of type string or ",t,!1,void 0,n)}const lR=new RegExp("[~\\*/\\[\\]]");function Cl(t,e,n){if(e.search(lR)>=0)throw wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ha(...e.split("."))._internalPath}catch{throw wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new P(v.INVALID_ARGUMENT,a+t+c)}function gy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class my{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hR extends my{data(){return super.data()}}function pa(t,e){return typeof e=="string"?Cl(t,e):e instanceof ha?e._internalPath:e._delegate._internalPath}/**
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
 */class ps{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yy extends my{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Hi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(pa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Hi extends yy{data(e={}){return super.data(e)}}class fR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ps(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Hi(this._firestore,this._userDataWriter,r.key,r,new ps(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Hi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ps(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Hi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ps(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:dR(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function pR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Al{}function vy(t,...e){for(const n of e)t=n._apply(t);return t}class gR extends Al{constructor(e,n,r){super(),this._c=e,this.wc=n,this.mc=r,this.type="where"}_apply(e){const n=Il(e.firestore),r=function(s,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new P(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){td(l,u);const p=[];for(const m of l)p.push(ed(a,s,m));h={arrayValue:{values:p}}}else h=ed(a,s,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||td(l,u),h=uR(o,i,l,u==="in"||u==="not-in");const f=st.create(c,u,h);return function(p,m){if(m.S()){const _=il(p);if(_!==null&&!_.isEqual(m.field))throw new P(v.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${_.toString()}' and '${m.field.toString()}'`);const S=sl(p);S!==null&&by(p,m.field,S)}const I=function(_,S){for(const D of _.filters)if(S.indexOf(D.op)>=0)return D.op;return null}(p,function(_){switch(_){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(I!==null)throw I===m.op?new P(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new P(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${I.toString()}' filters.`)}(s,f),f}(e._query,"where",n,e.firestore._databaseId,this._c,this.wc,this.mc);return new rr(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new Zr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function _y(t,e,n){const r=e,s=pa("where",t);return new gR(s,r,n)}class mR extends Al{constructor(e,n){super(),this._c=e,this.gc=n,this.type="orderBy"}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new P(v.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new P(v.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ar(s,i);return function(a,c){if(sl(a)===null){const u=il(a);u!==null&&by(a,u,c.field)}}(r,o),o}(e._query,this._c,this.gc);return new rr(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Zr(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function wy(t,e="asc"){const n=e,r=pa("orderBy",t);return new mR(r,n)}class yR extends Al{constructor(e,n,r){super(),this.type=e,this.yc=n,this.Ic=r}_apply(e){return new rr(e.firestore,e.converter,_m(e._query,this.yc,this.Ic))}}function Ey(t){return eR("limit",t),new yR("limit",t,"F")}function ed(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new P(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vm(e)&&n.indexOf("/")!==-1)throw new P(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!$.isDocumentKey(r))throw new P(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Af(t,new $(r))}if(n instanceof it)return Af(t,n._key);throw new P(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${la(n)}.`)}function td(t,e){if(!Array.isArray(t)||t.length===0)throw new P(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new P(v.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function by(t,e,n){if(!n.isEqual(e))throw new P(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class vR{convertValue(e,n="none"){switch(Yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const r={};return tr(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new El(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qs(e));default:return null}}convertTimestamp(e){const n=_n(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);ve(Um(r));const s=new Lr(r.get(1),r.get(3)),i=new $(r.popFirst(5));return s.isEqual(n)||vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function _R(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */function wR(t){t=En(t,it);const e=En(t.firestore,yi);return QA(wl(e),t._key).then(n=>bR(e,t,n))}class Iy extends vR{constructor(e){super(),this.firestore=e}convertBytes(e){return new $r(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,n)}}function Ty(t){t=En(t,rr);const e=En(t.firestore,yi),n=wl(e),r=new Iy(e);return pR(t._query),JA(n,t._query).then(s=>new fR(e,r,t,s))}function F1(t,e,n){t=En(t,it);const r=En(t.firestore,yi),s=_R(t.converter,e,n);return Sy(r,[oR(Il(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Fn.none())])}function ER(t,e,n,...r){t=En(t,it);const s=En(t.firestore,yi),i=Il(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof ha?cR(i,"updateDoc",t._key,e,n,r):aR(i,"updateDoc",t._key,e),Sy(s,[o.toMutation(t._key,Fn.exists(!0))])}function Sy(t,e){return function(n,r){const s=new Kt;return n.asyncQueue.enqueueAndForget(async()=>MA(await XA(n),r,s)),s.promise}(wl(t),e)}function bR(t,e,n){const r=n.docs.get(e._key),s=new Iy(t);return new yy(t,s,e._key,r,new ps(n.hasPendingWrites,n.fromCache),e.converter)}function B1(){return new Tl("serverTimestamp")}(function(t,e=!0){(function(n){Jr=n})(zr),jn(new yn("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new yi(s,new bS(n.getProvider("auth-internal")),new CS(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Mt(bf,"3.4.9",t),Mt(bf,"3.4.9","esm2017")})();/**
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
 */const Cy="firebasestorage.googleapis.com",Ay="storageBucket",IR=2*60*1e3,TR=10*60*1e3;/**
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
 */class Ce extends bn{constructor(e,n){super(Ka(e),`Firebase Storage: ${n} (${Ka(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}_codeEquals(e){return Ka(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Ka(t){return"storage/"+t}function Rl(){const t="An unknown error occurred, please check the error payload for server response.";return new Ce("unknown",t)}function SR(t){return new Ce("object-not-found","Object '"+t+"' does not exist.")}function CR(t){return new Ce("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function AR(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce("unauthenticated",t)}function RR(){return new Ce("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function kR(t){return new Ce("unauthorized","User does not have permission to access '"+t+"'.")}function NR(){return new Ce("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function OR(){return new Ce("canceled","User canceled the upload/download.")}function DR(t){return new Ce("invalid-url","Invalid URL '"+t+"'.")}function PR(t){return new Ce("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function xR(){return new Ce("no-default-bucket","No default bucket found. Did you set the '"+Ay+"' property when initializing the app?")}function MR(){return new Ce("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function LR(){return new Ce("no-download-url","The given file does not have any download URLs.")}function zc(t){return new Ce("invalid-argument",t)}function Ry(){return new Ce("app-deleted","The Firebase app was deleted.")}function UR(t){return new Ce("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ss(t,e){return new Ce("invalid-format","String does not match format '"+t+"': "+e)}function cs(t){throw new Ce("internal-error","Internal error: "+t)}/**
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
 */class pt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=pt.makeFromUrl(e,n)}catch{return new pt(e,"")}if(r.path==="")return r;throw PR(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(U){U.path_=decodeURIComponent(U.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${s}/o${f}`,"i"),m={bucket:1,path:3},I=n===Cy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",S=new RegExp(`^https?://${I}/${s}/${_}`,"i"),V=[{regex:a,indices:c,postModify:i},{regex:p,indices:m,postModify:u},{regex:S,indices:{bucket:1,path:2},postModify:u}];for(let U=0;U<V.length;U++){const ie=V[U],ue=ie.regex.exec(e);if(ue){const X=ue[ie.indices.bucket];let _e=ue[ie.indices.path];_e||(_e=""),r=new pt(X,_e),ie.postModify(r);break}}if(r==null)throw DR(e);return r}}class FR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function BR(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(..._){u||(u=!0,e.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,t(p,c())},_)}function f(){i&&clearTimeout(i)}function p(_,...S){if(u){f();return}if(_){f(),l.call(null,_,...S);return}if(c()||o){f(),l.call(null,_,...S);return}r<64&&(r*=2);let V;a===1?(a=2,V=0):V=(r+Math.random())*1e3,h(V)}let m=!1;function I(_){m||(m=!0,f(),!u&&(s!==null?(_||(a=2),clearTimeout(s),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,I(!0)},n),I}function $R(t){t(!1)}/**
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
 */function VR(t){return t!==void 0}function jR(t){return typeof t=="object"&&!Array.isArray(t)}function kl(t){return typeof t=="string"||t instanceof String}function nd(t){return Nl()&&t instanceof Blob}function Nl(){return typeof Blob!="undefined"}function rd(t,e,n,r){if(r<e)throw zc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw zc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ol(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ky(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var $n;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})($n||($n={}));/**
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
 */class qR{constructor(e,n,r,s,i,o,a,c,u,l,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ni(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===$n.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const l=i.getErrorCode()===$n.ABORT;r(!1,new Ni(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Ni(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());VR(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Rl();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Ry():OR();o(c)}else{const c=NR();o(c)}};this.canceled_?n(!1,new Ni(!1,null,!0)):this.backoffId_=BR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$R(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||s||i}}class Ni{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function HR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function KR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function zR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function GR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function WR(t,e,n,r,s,i){const o=ky(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return zR(c,e),HR(c,n),KR(c,i),GR(c,r),new qR(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}/**
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
 */function YR(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function XR(...t){const e=YR();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Nl())return new Blob(t);throw new Ce("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function QR(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function JR(t){return atob(t)}/**
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
 */const xt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class za{constructor(e,n){this.data=e,this.contentType=n||null}}function ZR(t,e){switch(t){case xt.RAW:return new za(Ny(e));case xt.BASE64:case xt.BASE64URL:return new za(Oy(t,e));case xt.DATA_URL:return new za(tk(e),nk(e))}throw Rl()}function Ny(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function ek(t){let e;try{e=decodeURIComponent(t)}catch{throw Ss(xt.DATA_URL,"Malformed data URL.")}return Ny(e)}function Oy(t,e){switch(t){case xt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ss(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case xt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ss(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=JR(e)}catch{throw Ss(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Dy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ss(xt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=rk(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function tk(t){const e=new Dy(t);return e.base64?Oy(xt.BASE64,e.rest):ek(e.rest)}function nk(t){return new Dy(t).contentType}function rk(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class ln{constructor(e,n){let r=0,s="";nd(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(nd(this.data_)){const r=this.data_,s=QR(r,e,n);return s===null?null:new ln(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ln(r,!0)}}static getBlob(...e){if(Nl()){const n=e.map(r=>r instanceof ln?r.data_:r);return new ln(XR.apply(null,n))}else{const n=e.map(o=>kl(o)?ZR(xt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new ln(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Py(t){let e;try{e=JSON.parse(t)}catch{return null}return jR(e)?e:null}/**
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
 */function sk(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ik(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function xy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function ok(t,e){return e}class Ze{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||ok}}let Oi=null;function ak(t){return!kl(t)||t.length<2?t:xy(t)}function My(){if(Oi)return Oi;const t=[];t.push(new Ze("bucket")),t.push(new Ze("generation")),t.push(new Ze("metageneration")),t.push(new Ze("name","fullPath",!0));function e(i,o){return ak(o)}const n=new Ze("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ze("size");return s.xform=r,t.push(s),t.push(new Ze("timeCreated")),t.push(new Ze("updated")),t.push(new Ze("md5Hash",null,!0)),t.push(new Ze("cacheControl",null,!0)),t.push(new Ze("contentDisposition",null,!0)),t.push(new Ze("contentEncoding",null,!0)),t.push(new Ze("contentLanguage",null,!0)),t.push(new Ze("contentType",null,!0)),t.push(new Ze("metadata","customMetadata",!0)),Oi=t,Oi}function ck(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new pt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function uk(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return ck(r,t),r}function Ly(t,e,n){const r=Py(e);return r===null?null:uk(t,r,n)}function lk(t,e,n,r){const s=Py(e);if(s===null||!kl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,f="/b/"+o(l)+"/o/"+o(h),p=Ol(f,n,r),m=ky({alt:"media",token:u});return p+m})[0]}function hk(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Uy{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Fy(t){if(!t)throw Rl()}function fk(t,e){function n(r,s){const i=Ly(t,s,e);return Fy(i!==null),i}return n}function dk(t,e){function n(r,s){const i=Ly(t,s,e);return Fy(i!==null),lk(i,s,t.host,t._protocol)}return n}function By(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=RR():s=AR():n.getStatus()===402?s=CR(t.bucket):n.getStatus()===403?s=kR(t.path):s=r,s.serverResponse=r.serverResponse,s}return e}function pk(t){const e=By(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=SR(t.path)),i.serverResponse=s.serverResponse,i}return n}function gk(t,e,n){const r=e.fullServerUrl(),s=Ol(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Uy(s,i,dk(t,n),o);return a.errorHandler=pk(e),a}function mk(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function yk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=mk(null,e)),r}function vk(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let V="";for(let U=0;U<2;U++)V=V+Math.random().toString().slice(2);return V}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=yk(e,r,s),l=hk(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+c+"--",p=ln.getBlob(h,r,f);if(p===null)throw MR();const m={name:u.fullPath},I=Ol(i,t.host,t._protocol),_="POST",S=t.maxUploadRetryTime,D=new Uy(I,_,fk(t,n),S);return D.urlParams=m,D.headers=o,D.body=p.uploadData(),D.errorHandler=By(e),D}class _k{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$n.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=$n.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=$n.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw cs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw cs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw cs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw cs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw cs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class wk extends _k{initXhr(){this.xhr_.responseType="text"}}function $y(){return new wk}/**
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
 */class Zn{constructor(e,n){this._service=e,n instanceof pt?this._location=n:this._location=pt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Zn(e,n)}get root(){const e=new pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xy(this._location.path)}get storage(){return this._service}get parent(){const e=sk(this._location.path);if(e===null)return null;const n=new pt(this._location.bucket,e);return new Zn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw UR(e)}}function Ek(t,e,n){t._throwIfRoot("uploadBytes");const r=vk(t.storage,t._location,My(),new ln(e,!0),n);return t.storage.makeRequestWithTokens(r,$y).then(s=>({metadata:s,ref:t}))}function bk(t){t._throwIfRoot("getDownloadURL");const e=gk(t.storage,t._location,My());return t.storage.makeRequestWithTokens(e,$y).then(n=>{if(n===null)throw LR();return n})}function Ik(t,e){const n=ik(t._location.path,e),r=new pt(t._location.bucket,n);return new Zn(t.storage,r)}/**
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
 */function Tk(t){return/^[A-Za-z]+:\/\//.test(t)}function Sk(t,e){return new Zn(t,e)}function Vy(t,e){if(t instanceof Dl){const n=t;if(n._bucket==null)throw xR();const r=new Zn(n,n._bucket);return e!=null?Vy(r,e):r}else return e!==void 0?Ik(t,e):t}function Ck(t,e){if(e&&Tk(e)){if(t instanceof Dl)return Sk(t,e);throw zc("To use ref(service, url), the first argument must be a Storage instance.")}else return Vy(t,e)}function sd(t,e){const n=e==null?void 0:e[Ay];return n==null?null:pt.makeFromBucketSpec(n,t)}class Dl{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Cy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=IR,this._maxUploadRetryTime=TR,this._requests=new Set,s!=null?this._bucket=pt.makeFromBucketSpec(s,this._host):this._bucket=sd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pt.makeFromBucketSpec(this._url,e):this._bucket=sd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Zn(this,e)}_makeRequest(e,n,r,s){if(this._deleted)return new FR(Ry());{const i=WR(e,this._appId,r,s,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const id="@firebase/storage",od="0.9.6";/**
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
 */const jy="storage";function $1(t,e,n){return t=Se(t),Ek(t,e,n)}function Ak(t){return t=Se(t),bk(t)}function Rk(t,e){return t=Se(t),Ck(t,e)}function kk(t=vu(),e){return t=Se(t),Lo(t,jy).getImmediate({identifier:e})}function Nk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Dl(n,r,s,e,zr)}function Ok(){jn(new yn(jy,Nk,"PUBLIC").setMultipleInstances(!0)),Mt(id,od,""),Mt(id,od,"esm2017")}Ok();const Dk={apiKey:"AIzaSyCO-1zlqihZNJAGUqfbezRKdAbx2xVRurA",authDomain:"if-lost-159f6.firebaseapp.com",projectId:"if-lost-159f6",storageBucket:"if-lost-159f6.appspot.com",messagingSenderId:"55254413607",appId:"1:55254413607:web:2b14450ddb1a97bdccb902"};oI(Dk);const Ys=fT(),Eo=nR(),Pk=kk();var Pl=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const xk={methods:{obtenerUsuario(){Bo(Ys,t=>{t||this.$router.push("/login")})},viajar(){}},mounted(){this.obtenerUsuario()}},Mk=te("div",null,[te("h2",{class:"ttl-1"},"\xBFQu\xE9 quieres hacer?")],-1),Lk={class:"place-items-center grid-cols-1"};function Uk(t,e,n,r,s,i){return Ns(),Xi(_t,null,[Mk,te("div",Lk,[te("div",null,[te("button",{class:"btn-home",onClick:e[0]||(e[0]=o=>t.$router.push("/viajar"))}," Viajar seguro "),te("button",{class:"btn-home",onClick:e[1]||(e[1]=o=>t.$router.push("/rastrear"))}," Rastrear a alguien "),te("button",{class:"btn-home",onClick:e[2]||(e[2]=o=>t.$router.push("/404"))}," Enviar alerta ahora ")])])],64)}var Fk=Pl(xk,[["render",Uk]]);const Bk={data(){return{correo:"",contrase\u00F1a:""}},methods:{iniciarSesi\u00F3n(){e0(Ys,this.correo,this.contrase\u00F1a).then(t=>{this.$router.push("/")}).catch(t=>{let e;switch(t.code){case"auth/user-not-found":e="El usuario no existe. Si no a\xFAn no tienes cuenta, crea una";break;case"auth/wrong-password":e="Contrase\xF1a incorrecta";break;case"auth/too-many-requests":e="Ya intentaste muchas veces, espera un momento";break;default:e="Ha ocurrido un error desconocido, revisa que hayas ingresado correctamente tus datos";break}Swal.fire({toast:!0,position:"bottom",iconColor:"white",customClass:{popup:"colored-toast"},showConfirmButton:!1,timer:5e3,timerProgressBar:!0,icon:"error",title:e})})},obtenerUsuario(){Bo(Ys,t=>{t&&this.$router.push("/")})}},mounted(){this.obtenerUsuario}},$k=te("h1",{class:"ttl-1"},"Bienvenido",-1),Vk=te("h3",{class:"subttl"},"Nos alegra verte otra vez",-1),jk=te("button",{type:"submit",id:"entrar",class:"btn-blue"}," Entrar a mi cuenta ",-1),qk={class:"mt-4 grid"},Hk=te("h3",{class:"subttl"},"\xBFA\xFAn no tienes cuenta?",-1),Kk={class:"place-self-center"};function zk(t,e,n,r,s,i){return Ns(),Xi("div",null,[$k,Vk,te("form",{onSubmit:e[2]||(e[2]=kw(o=>i.iniciarSesi\u00F3n(),["prevent"])),class:"mt-8"},[oh(te("input",{class:"inp",type:"email",placeholder:"Tu correo electr\xF3nico","onUpdate:modelValue":e[0]||(e[0]=o=>s.correo=o)},null,512),[[wh,s.correo]]),oh(te("input",{class:"inp mt-4",type:"password",placeholder:"Tu contrase\xF1a","onUpdate:modelValue":e[1]||(e[1]=o=>s.contrase\u00F1a=o)},null,512),[[wh,s.contrase\u00F1a]]),jk],32),te("div",qk,[Hk,te("div",Kk,[te("button",{class:"font-semibold underline",onClick:e[3]||(e[3]=o=>t.$router.push("/crearcuenta"))}," Crea una ")])])])}var ad=Pl(Bk,[["render",zk]]);const Gk=[{path:"/",name:"home",component:Fk},{path:"/viajar",name:"viajar",component:()=>is(()=>import("./crear_viaje.1021a0b8.js"),["assets/crear_viaje.1021a0b8.js","assets/crear_viaje.6f4cad15.css"])},{path:"/login",name:"login",component:ad},{path:"/crearcuenta",name:"crearcuenta",component:()=>is(()=>import("./crearcuenta.81666980.js"),[])},{path:"/rastrear",name:"rastrear",component:()=>is(()=>import("./rastrear.92501cee.js"),[])},{path:"/cuenta",name:"cuenta",component:()=>is(()=>import("./cuenta.7231953e.js"),[])},{path:"/404",name:"404",component:()=>is(()=>import("./404.01614f25.js"),[])},{path:"/if-lost/",component:ad}],Wk=GE({history:uE(),routes:Gk});/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Yk="store";function rs(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Xk(t){return t!==null&&typeof t=="object"}function Qk(t){return t&&typeof t.then=="function"}function Jk(t,e){return function(){return t(e)}}function qy(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Hy(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;ga(t,n,[],t._modules.root,!0),xl(t,n,e)}function xl(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};rs(s,function(o,a){i[a]=Jk(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=Hr({data:e}),t.strict&&r1(t),r&&n&&t._withCommit(function(){r.data=null})}function ga(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=Ml(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var u=r.context=Zk(t,o,n);r.forEachMutation(function(l,h){var f=o+h;e1(t,f,l,u)}),r.forEachAction(function(l,h){var f=l.root?h:o+h,p=l.handler||l;t1(t,f,p,u)}),r.forEachGetter(function(l,h){var f=o+h;n1(t,f,l,u)}),r.forEachChild(function(l,h){ga(t,e,n.concat(h),l,s)})}function Zk(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=bo(i,o,a),u=c.payload,l=c.options,h=c.type;return(!l||!l.root)&&(h=e+h),t.dispatch(h,u)},commit:r?t.commit:function(i,o,a){var c=bo(i,o,a),u=c.payload,l=c.options,h=c.type;(!l||!l.root)&&(h=e+h),t.commit(h,u,l)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return Ky(t,e)}},state:{get:function(){return Ml(t.state,n)}}}),s}function Ky(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function e1(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function t1(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return Qk(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function n1(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function r1(t){Ir(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Ml(t,e){return e.reduce(function(n,r){return n[r]},t)}function bo(t,e,n){return Xk(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var s1="vuex bindings",cd="vuex:mutations",Ga="vuex:actions",fr="vuex",i1=0;function o1(t,e){qw({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[s1]},function(n){n.addTimelineLayer({id:cd,label:"Vuex Mutations",color:ud}),n.addTimelineLayer({id:Ga,label:"Vuex Actions",color:ud}),n.addInspector({id:fr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===fr)if(r.filter){var s=[];Yy(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[Wy(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===fr){var s=r.nodeId;Ky(e,s),r.state=u1(h1(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===fr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(fr),n.sendInspectorState(fr),n.addTimelineEvent({layerId:cd,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=i1++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:Ga,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:Ga,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var ud=8702998,a1=6710886,c1=16777215,zy={label:"namespaced",textColor:c1,backgroundColor:a1};function Gy(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Wy(t,e){return{id:e||"root",label:Gy(e),tags:t.namespaced?[zy]:[],children:Object.keys(t._children).map(function(n){return Wy(t._children[n],e+n+"/")})}}function Yy(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[zy]:[]}),Object.keys(e._children).forEach(function(s){Yy(t,e._children[s],n,r+s+"/")})}function u1(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=l1(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Gy(o):o,editable:!1,value:Gc(function(){return i[o]})}})}return s}function l1(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Gc(function(){return t[n]})}else e[n]=Gc(function(){return t[n]})}),e}function h1(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Gc(t){try{return t()}catch(e){return e}}var At=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},Xy={namespaced:{configurable:!0}};Xy.namespaced.get=function(){return!!this._rawModule.namespaced};At.prototype.addChild=function(e,n){this._children[e]=n};At.prototype.removeChild=function(e){delete this._children[e]};At.prototype.getChild=function(e){return this._children[e]};At.prototype.hasChild=function(e){return e in this._children};At.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};At.prototype.forEachChild=function(e){rs(this._children,e)};At.prototype.forEachGetter=function(e){this._rawModule.getters&&rs(this._rawModule.getters,e)};At.prototype.forEachAction=function(e){this._rawModule.actions&&rs(this._rawModule.actions,e)};At.prototype.forEachMutation=function(e){this._rawModule.mutations&&rs(this._rawModule.mutations,e)};Object.defineProperties(At.prototype,Xy);var sr=function(e){this.register([],e,!1)};sr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};sr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};sr.prototype.update=function(e){Qy([],this.root,e)};sr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new At(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&rs(n.modules,function(a,c){s.register(e.concat(c),a,r)})};sr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);!s||!s.runtime||n.removeChild(r)};sr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function Qy(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;Qy(t.concat(r),e.getChild(r),n.modules[r])}}function f1(t){return new ut(t)}var ut=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new sr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(f,p){return c.call(o,f,p)},this.commit=function(f,p,m){return u.call(o,f,p,m)},this.strict=s;var l=this._modules.root.state;ga(this,l,[],this._modules.root),xl(this,l),r.forEach(function(h){return h(n)})},Ll={state:{configurable:!0}};ut.prototype.install=function(e,n){e.provide(n||Yk,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&o1(e,this)};Ll.state.get=function(){return this._state.data};Ll.state.set=function(t){};ut.prototype.commit=function(e,n,r){var s=this,i=bo(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},u=this._mutations[o];!u||(this._withCommit(function(){u.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(l){return l(c,s.state)}))};ut.prototype.dispatch=function(e,n){var r=this,s=bo(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(l){return l.before}).forEach(function(l){return l.before(a,r.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(l){return l(o)})):c[0](o);return new Promise(function(l,h){u.then(function(f){try{r._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,r.state)})}catch{}l(f)},function(f){try{r._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,r.state,f)})}catch{}h(f)})})}};ut.prototype.subscribe=function(e,n){return qy(e,this._subscribers,n)};ut.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return qy(r,this._actionSubscribers,n)};ut.prototype.watch=function(e,n,r){var s=this;return Ir(function(){return e(s.state,s.getters)},n,Object.assign({},r))};ut.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};ut.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),ga(this,this.state,e,this._modules.get(e),r.preserveState),xl(this,this.state)};ut.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Ml(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Hy(this)};ut.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};ut.prototype.hotUpdate=function(e){this._modules.update(e),Hy(this,!0)};ut.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(ut.prototype,Ll);const Jy=f1({state:{usuario:{id:"",nombre:"",ciudad:"",correo:"",tel:"",perfil:"",descripcion:"",contacto:{nombre:"",correo:"",tel:""},viaje:{destino:"",infodestino:"",salida:"",llegada:"",alerta:0,img:"",infoimg:"",nota:"",mapa:"",clave:""}}},mutations:{obtenerUsuario(t){Bo(Ys,async e=>{if(e){t.usuario.id=e.uid,t.usuario.nombre=e.displayName,t.usuario.correo=e.email;const n=uy(Eo,"infoUsuarios",e.uid),r=await wR(n);if(r.exists()){let c=r.data();t.usuario.ciudad=c.ciudad,t.usuario.descripcion=c.descripcion,t.usuario.tel=c.numero,t.usuario.contacto.correo=c.correo_contacto,t.usuario.contacto.nombre=c.nombre_contacto,t.usuario.contacto.tel=c.numero_contacto}const s=Rk(Pk,"perfiles/"+t.usuario.id);Ak(s).then(c=>{t.usuario.perfil=c}).catch(c=>{t.usuario.perfil="https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/perfiles%2Fperfil.png?alt=media&token=5a6ff639-cdc5-4372-a6c7-adc73e14fe47"});const i=vy(cy(Eo,"viajes"),_y("creador","==",t.usuario.id),wy("creado","desc"),Ey(1));let o=await Ty(i),a;o.forEach(c=>{a=c.data()}),a!=null&&(t.usuario.viaje.destino=a.destino,t.usuario.viaje.infodestino=a.infodestino,t.usuario.viaje.salida=a.salida,t.usuario.viaje.llegada=a.llegada,t.usuario.viaje.alerta=a.alerta,t.usuario.viaje.img=a.img,t.usuario.viaje.infoimg=a.infoimg,t.usuario.viaje.nota=a.nota,t.usuario.viaje.mapa=a.mapa,t.usuario.viaje.clave=a.clave)}})}},actions:{},getters:{}});Jy.commit("obtenerUsuario");const d1={data(){return{datos:[],tempo:!1,uid:"",i:0}},computed:{usuario(){return this.$store.state.usuario}},methods:{obtenerTemporizador(){Bo(Ys,async t=>{if(t){const e=vy(cy(Eo,"viajes"),_y("creador","==",this.usuario.id),wy("creado","desc"),Ey(1));let n;if((await Ty(e)).forEach(s=>{n=s.data()}),n!=null){let s=new Date().getTime();n.alerta!=null&&n.alerta>s&&(this.temporizador(n.alerta),this.tempo=!0,this.$refs.views.classList.add("mb-12"))}this.$refs.accesos.classList.remove("hidden")}else this.$refs.accesos.classList.add("hidden"),this.$refs.tempodiv.classList.add("hidden")})},temporizador(t){let e=this;var n=new Date(t).getTime();e.$refs.tempodiv.classList.remove("hidden"),e.i=setInterval(function(){var r=new Date().getTime(),s=n-r,i=Math.floor(s%(1e3*60*60*24)/(1e3*60*60)),o=Math.floor(s%(1e3*60*60)/(1e3*60)),a=Math.floor(s%(1e3*60)/1e3);i>1?document.getElementById("temporizador").innerHTML="Tu alerta se enviar\xE1 en<br/>"+i+" horas "+o+" minutos ":(o<10&&e.$refs.tempodiv.classList.add("bg-red-400"),o>0?document.getElementById("temporizador").innerHTML="Tu alerta se enviar\xE1 en<br/>"+o+" minutos "+a+" segundos ":document.getElementById("temporizador").innerHTML="Tu alerta se enviar\xE1 en<br/>"+a+" segundos ",s<0&&s>-1e3&&(clearInterval(e.i),e.$refs.btncancelar.classList.add("hidden"),document.getElementById("temporizador").innerHTML="Estamos contactando a tu contacto de confianza",e.enviarCorreo(),e.cancelarAlerta(5e3)))},1e3)},async enviarCorreo(){let t=[],e=this.usuario.nombre.split(" ");t={nombre:e[0],apellido:e[1],destino:this.usuario.viaje.destino,hora_alerta:this.usuario.viaje.llegada,clave:this.usuario.viaje.clave,email:this.usuario.contacto.correo},emailjs.send("default_service","alerta_iflost",t).then(async()=>{document.getElementById("temporizador").innerHTML="Listo, enviamos un correo a tu contacto de confianza"},n=>{})},async cancelarAlerta(t){let e=this;const n=uy(Eo,"viajes",this.usuario.viaje.clave);await ER(n,{alerta:null}),setTimeout(function(){e.$refs.tempodiv.classList.add("hidden")},t)}},mounted(){this.obtenerTemporizador(),emailjs.init("NDQJF30o6mjc6lt_F"),this.$route.name!="home"&&this.$router.push("/")},watch:{$route:function(t,e){this.obtenerTemporizador()}}},p1={class:"p-5 desktop:max-w-[450px] desktop:m-auto",ref:"views"},g1={class:"grid"},m1={ref:"tempodiv",class:"alerta hidden"},y1={class:"justify-self-end place-content-center"},v1={id:"temporizador",ref:"temporizador",class:"text-white animate-[pulse_3s_infinite] pl-2 text-sm"},_1={class:"grid grid-cols-1 mt-24"},w1={class:"menu-hidden",ref:"menu"},E1={class:"grid grid-rows-2"},b1=te("i",{class:"fa-solid fa-angle-up justify-self-center"},null,-1),I1={class:"grid grid-cols-2"},T1=te("div",{class:"grid"},[te("img",{src:"https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/logo.svg?alt=media",class:"max-h-12 p-3 self-center"})],-1),S1={class:"flex mb-2 justify-self-end",ref:"accesos"},C1=te("span",{class:"material-symbols-rounded"},"home",-1),A1=te("span",{class:"material-symbols-rounded"}," newspaper ",-1),R1=te("span",{class:"material-symbols-rounded"}," person ",-1);function k1(t,e,n,r,s,i){const o=ah("router-view"),a=ah("router-link");return Ns(),Xi(_t,null,[te("div",p1,[$e(o)],512),te("div",g1,[te("div",m1,[te("div",y1,[te("p",v1,null,512)]),s.tempo==!0?(Ns(),Xi("button",{key:0,class:"btn-red rounded-full mr-5 ml-5 mt-0 w-[33%] text-sm",onClick:e[0]||(e[0]=c=>i.cancelarAlerta(0)),ref:"btncancelar"}," Cancelar alerta ",512)):z_("",!0)],512)]),te("div",_1,[te("div",w1,[te("div",E1,[b1,te("div",I1,[T1,te("div",S1,[$e(a,{class:"btn-menu",to:"/"},{default:xi(()=>[C1]),_:1}),$e(a,{class:"btn-menu",to:"/404"},{default:xi(()=>[A1]),_:1}),$e(a,{class:"btn-menu",to:"/cuenta"},{default:xi(()=>[R1]),_:1})],512)])])],512)])],64)}var N1=Pl(d1,[["render",k1]]);Dw(N1).use(Jy).use(Wk).mount("#app");export{_t as F,uy as I,Pl as _,F1 as a,Ys as b,Ns as c,Xi as d,te as e,kw as f,z_ as g,K_ as h,Eo as i,P1 as j,x1 as k,M1 as l,L1 as m,wR as n,Bo as o,B1 as p,U1 as q,Rk as r,Pk as s,D1 as t,$1 as u,wh as v,oh as w,ER as x};
