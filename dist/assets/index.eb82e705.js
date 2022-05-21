var sv=Object.defineProperty,iv=Object.defineProperties;var ov=Object.getOwnPropertyDescriptors;var Kl=Object.getOwnPropertySymbols;var av=Object.prototype.hasOwnProperty,cv=Object.prototype.propertyIsEnumerable;var zl=(t,e,n)=>e in t?sv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Gl=(t,e)=>{for(var n in e||(e={}))av.call(e,n)&&zl(t,n,e[n]);if(Kl)for(var n of Kl(e))cv.call(e,n)&&zl(t,n,e[n]);return t},Wl=(t,e)=>iv(t,ov(e));const uv=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};uv();function Zc(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const lv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hv=Zc(lv);function dd(t){return!!t||t===""}function eu(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?pv(r):eu(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(He(t))return t;if(Pe(t))return t}}const fv=/;(?![^(]*\))/g,dv=/:(.+)/;function pv(t){const e={};return t.split(fv).forEach(n=>{if(n){const r=n.split(dv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function tu(t){let e="";if(He(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const r=tu(t[n]);r&&(e+=r+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const uN=t=>He(t)?t:t==null?"":Y(t)||Pe(t)&&(t.toString===yd||!J(t.toString))?JSON.stringify(t,pd,2):String(t),pd=(t,e)=>e&&e.__v_isRef?pd(t,e.value):Ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:gd(e)?{[`Set(${e.size})`]:[...e.values()]}:Pe(e)&&!Y(e)&&!vd(e)?String(e):e,pe={},Cr=[],At=()=>{},gv=()=>!1,mv=/^on[^a-z]/,Ro=t=>mv.test(t),nu=t=>t.startsWith("onUpdate:"),Je=Object.assign,ru=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yv=Object.prototype.hasOwnProperty,re=(t,e)=>yv.call(t,e),Y=Array.isArray,Ar=t=>No(t)==="[object Map]",gd=t=>No(t)==="[object Set]",J=t=>typeof t=="function",He=t=>typeof t=="string",su=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",md=t=>Pe(t)&&J(t.then)&&J(t.catch),yd=Object.prototype.toString,No=t=>yd.call(t),vv=t=>No(t).slice(8,-1),vd=t=>No(t)==="[object Object]",iu=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bi=Zc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_v=/-(\w)/g,jt=Oo(t=>t.replace(_v,(e,n)=>n?n.toUpperCase():"")),wv=/\B([A-Z])/g,Yr=Oo(t=>t.replace(wv,"-$1").toLowerCase()),Do=Oo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ba=Oo(t=>t?`on${Do(t)}`:""),xs=(t,e)=>!Object.is(t,e),Vi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ji=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Za=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yl;const Ev=()=>Yl||(Yl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let xt;class bv{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&xt&&(this.parent=xt,this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Iv(t,e=xt){e&&e.active&&e.effects.push(t)}const ou=t=>{const e=new Set(t);return e.w=0,e.n=0,e},_d=t=>(t.w&En)>0,wd=t=>(t.n&En)>0,Tv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=En},Sv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];_d(s)&&!wd(s)?s.delete(t):e[n++]=s,s.w&=~En,s.n&=~En}e.length=n}},ec=new WeakMap;let ys=0,En=1;const tc=30;let Ct;const Vn=Symbol(""),nc=Symbol("");class au{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Iv(this,r)}run(){if(!this.active)return this.fn();let e=Ct,n=mn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ct,Ct=this,mn=!0,En=1<<++ys,ys<=tc?Tv(this):Xl(this),this.fn()}finally{ys<=tc&&Sv(this),En=1<<--ys,Ct=this.parent,mn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ct===this?this.deferStop=!0:this.active&&(Xl(this),this.onStop&&this.onStop(),this.active=!1)}}function Xl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let mn=!0;const Ed=[];function Xr(){Ed.push(mn),mn=!1}function Qr(){const t=Ed.pop();mn=t===void 0?!0:t}function mt(t,e,n){if(mn&&Ct){let r=ec.get(t);r||ec.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ou()),bd(s)}}function bd(t,e){let n=!1;ys<=tc?wd(t)||(t.n|=En,n=!_d(t)):n=!t.has(Ct),n&&(t.add(Ct),Ct.deps.push(t))}function Jt(t,e,n,r,s,i){const o=ec.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t))o.forEach((c,u)=>{(u==="length"||u>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?iu(n)&&a.push(o.get("length")):(a.push(o.get(Vn)),Ar(t)&&a.push(o.get(nc)));break;case"delete":Y(t)||(a.push(o.get(Vn)),Ar(t)&&a.push(o.get(nc)));break;case"set":Ar(t)&&a.push(o.get(Vn));break}if(a.length===1)a[0]&&rc(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);rc(ou(c))}}function rc(t,e){for(const n of Y(t)?t:[...t])(n!==Ct||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Cv=Zc("__proto__,__v_isRef,__isVue"),Id=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(su)),Av=cu(),kv=cu(!1,!0),Rv=cu(!0),Ql=Nv();function Nv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ae(this);for(let i=0,o=this.length;i<o;i++)mt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ae)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Xr();const r=ae(this)[e].apply(this,n);return Qr(),r}}),t}function cu(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?zv:kd:e?Ad:Cd).get(r))return r;const o=Y(r);if(!t&&o&&re(Ql,s))return Reflect.get(Ql,s,i);const a=Reflect.get(r,s,i);return(su(s)?Id.has(s):Cv(s))||(t||mt(r,"get",s),e)?a:Be(a)?!o||!iu(s)?a.value:a:Pe(a)?t?Rd(a):Jr(a):a}}const Ov=Td(),Dv=Td(!0);function Td(t=!1){return function(n,r,s,i){let o=n[r];if(Ls(o)&&Be(o)&&!Be(s))return!1;if(!t&&!Ls(s)&&(Nd(s)||(s=ae(s),o=ae(o)),!Y(n)&&Be(o)&&!Be(s)))return o.value=s,!0;const a=Y(n)&&iu(r)?Number(r)<n.length:re(n,r),c=Reflect.set(n,r,s,i);return n===ae(i)&&(a?xs(s,o)&&Jt(n,"set",r,s):Jt(n,"add",r,s)),c}}function Pv(t,e){const n=re(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Jt(t,"delete",e,void 0),r}function xv(t,e){const n=Reflect.has(t,e);return(!su(e)||!Id.has(e))&&mt(t,"has",e),n}function Lv(t){return mt(t,"iterate",Y(t)?"length":Vn),Reflect.ownKeys(t)}const Sd={get:Av,set:Ov,deleteProperty:Pv,has:xv,ownKeys:Lv},Mv={get:Rv,set(t,e){return!0},deleteProperty(t,e){return!0}},Uv=Je({},Sd,{get:kv,set:Dv}),uu=t=>t,Po=t=>Reflect.getPrototypeOf(t);function Si(t,e,n=!1,r=!1){t=t.__v_raw;const s=ae(t),i=ae(e);e!==i&&!n&&mt(s,"get",e),!n&&mt(s,"get",i);const{has:o}=Po(s),a=r?uu:n?fu:Ms;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Ci(t,e=!1){const n=this.__v_raw,r=ae(n),s=ae(t);return t!==s&&!e&&mt(r,"has",t),!e&&mt(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Ai(t,e=!1){return t=t.__v_raw,!e&&mt(ae(t),"iterate",Vn),Reflect.get(t,"size",t)}function Jl(t){t=ae(t);const e=ae(this);return Po(e).has.call(e,t)||(e.add(t),Jt(e,"add",t,t)),this}function Zl(t,e){e=ae(e);const n=ae(this),{has:r,get:s}=Po(n);let i=r.call(n,t);i||(t=ae(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?xs(e,o)&&Jt(n,"set",t,e):Jt(n,"add",t,e),this}function eh(t){const e=ae(this),{has:n,get:r}=Po(e);let s=n.call(e,t);s||(t=ae(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Jt(e,"delete",t,void 0),i}function th(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&Jt(t,"clear",void 0,void 0),n}function ki(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ae(o),c=e?uu:t?fu:Ms;return!t&&mt(a,"iterate",Vn),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function Ri(t,e,n){return function(...r){const s=this.__v_raw,i=ae(s),o=Ar(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?uu:e?fu:Ms;return!e&&mt(i,"iterate",c?nc:Vn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function rn(t){return function(...e){return t==="delete"?!1:this}}function Fv(){const t={get(i){return Si(this,i)},get size(){return Ai(this)},has:Ci,add:Jl,set:Zl,delete:eh,clear:th,forEach:ki(!1,!1)},e={get(i){return Si(this,i,!1,!0)},get size(){return Ai(this)},has:Ci,add:Jl,set:Zl,delete:eh,clear:th,forEach:ki(!1,!0)},n={get(i){return Si(this,i,!0)},get size(){return Ai(this,!0)},has(i){return Ci.call(this,i,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:ki(!0,!1)},r={get(i){return Si(this,i,!0,!0)},get size(){return Ai(this,!0)},has(i){return Ci.call(this,i,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:ki(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ri(i,!1,!1),n[i]=Ri(i,!0,!1),e[i]=Ri(i,!1,!0),r[i]=Ri(i,!0,!0)}),[t,n,e,r]}const[Bv,Vv,$v,jv]=Fv();function lu(t,e){const n=e?t?jv:$v:t?Vv:Bv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(re(n,s)&&s in r?n:r,s,i)}const qv={get:lu(!1,!1)},Hv={get:lu(!1,!0)},Kv={get:lu(!0,!1)},Cd=new WeakMap,Ad=new WeakMap,kd=new WeakMap,zv=new WeakMap;function Gv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wv(t){return t.__v_skip||!Object.isExtensible(t)?0:Gv(vv(t))}function Jr(t){return Ls(t)?t:hu(t,!1,Sd,qv,Cd)}function Yv(t){return hu(t,!1,Uv,Hv,Ad)}function Rd(t){return hu(t,!0,Mv,Kv,kd)}function hu(t,e,n,r,s){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Wv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function kr(t){return Ls(t)?kr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ls(t){return!!(t&&t.__v_isReadonly)}function Nd(t){return!!(t&&t.__v_isShallow)}function Od(t){return kr(t)||Ls(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function Dd(t){return Ji(t,"__v_skip",!0),t}const Ms=t=>Pe(t)?Jr(t):t,fu=t=>Pe(t)?Rd(t):t;function Pd(t){mn&&Ct&&(t=ae(t),bd(t.dep||(t.dep=ou())))}function xd(t,e){t=ae(t),t.dep&&rc(t.dep)}function Be(t){return!!(t&&t.__v_isRef===!0)}function Xv(t){return Ld(t,!1)}function Qv(t){return Ld(t,!0)}function Ld(t,e){return Be(t)?t:new Jv(t,e)}class Jv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:Ms(e)}get value(){return Pd(this),this._value}set value(e){e=this.__v_isShallow?e:ae(e),xs(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Ms(e),xd(this))}}function Is(t){return Be(t)?t.value:t}const Zv={get:(t,e,n)=>Is(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Be(s)&&!Be(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Md(t){return kr(t)?t:new Proxy(t,Zv)}class e_{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new au(e,()=>{this._dirty||(this._dirty=!0,xd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ae(this);return Pd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function t_(t,e,n=!1){let r,s;const i=J(t);return i?(r=t,s=At):(r=t.get,s=t.set),new e_(r,s,i||!s,n)}function yn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){xo(i,e,n)}return s}function Et(t,e,n,r){if(J(t)){const i=yn(t,e,n,r);return i&&md(i)&&i.catch(o=>{xo(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Et(t[i],e,n,r));return s}function xo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){yn(c,null,10,[t,o,a]);return}}n_(t,n,s,r)}function n_(t,e,n,r=!0){console.error(t)}let Zi=!1,sc=!1;const dt=[];let zt=0;const Ts=[];let vs=null,_r=0;const Ss=[];let cn=null,wr=0;const Ud=Promise.resolve();let du=null,ic=null;function Fd(t){const e=du||Ud;return t?e.then(this?t.bind(this):t):e}function r_(t){let e=zt+1,n=dt.length;for(;e<n;){const r=e+n>>>1;Us(dt[r])<t?e=r+1:n=r}return e}function Bd(t){(!dt.length||!dt.includes(t,Zi&&t.allowRecurse?zt+1:zt))&&t!==ic&&(t.id==null?dt.push(t):dt.splice(r_(t.id),0,t),Vd())}function Vd(){!Zi&&!sc&&(sc=!0,du=Ud.then(qd))}function s_(t){const e=dt.indexOf(t);e>zt&&dt.splice(e,1)}function $d(t,e,n,r){Y(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Vd()}function i_(t){$d(t,vs,Ts,_r)}function o_(t){$d(t,cn,Ss,wr)}function pu(t,e=null){if(Ts.length){for(ic=e,vs=[...new Set(Ts)],Ts.length=0,_r=0;_r<vs.length;_r++)vs[_r]();vs=null,_r=0,ic=null,pu(t,e)}}function jd(t){if(Ss.length){const e=[...new Set(Ss)];if(Ss.length=0,cn){cn.push(...e);return}for(cn=e,cn.sort((n,r)=>Us(n)-Us(r)),wr=0;wr<cn.length;wr++)cn[wr]();cn=null,wr=0}}const Us=t=>t.id==null?1/0:t.id;function qd(t){sc=!1,Zi=!0,pu(t),dt.sort((n,r)=>Us(n)-Us(r));const e=At;try{for(zt=0;zt<dt.length;zt++){const n=dt[zt];n&&n.active!==!1&&yn(n,null,14)}}finally{zt=0,dt.length=0,jd(),Zi=!1,du=null,(dt.length||Ts.length||Ss.length)&&qd(t)}}function a_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||pe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[l]||pe;f?s=n.map(p=>p.trim()):h&&(s=n.map(Za))}let a,c=r[a=ba(e)]||r[a=ba(jt(e))];!c&&i&&(c=r[a=ba(Yr(e))]),c&&Et(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Et(u,t,6,s)}}function Hd(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!J(t)){const c=u=>{const l=Hd(u,e,!0);l&&(a=!0,Je(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(Y(i)?i.forEach(c=>o[c]=null):Je(o,i),r.set(t,o),o)}function Lo(t,e){return!t||!Ro(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,Yr(e))||re(t,e))}let wt=null,Mo=null;function eo(t){const e=wt;return wt=t,Mo=t&&t.type.__scopeId||null,e}function lN(t){Mo=t}function hN(){Mo=null}function $i(t,e=wt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&dh(-1);const i=eo(e),o=t(...s);return eo(i),r._d&&dh(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Ia(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:p,ctx:m,inheritAttrs:I}=t;let v,S;const D=eo(t);try{if(n.shapeFlag&4){const U=s||r;v=Mt(l.call(U,U,h,i,p,f,m)),S=c}else{const U=e;v=Mt(U.length>1?U(i,{attrs:c,slots:a,emit:u}):U(i,null)),S=e.props?c:c_(c)}}catch(U){Cs.length=0,xo(U,t,1),v=Ve(kt)}let B=v;if(S&&I!==!1){const U=Object.keys(S),{shapeFlag:ie}=B;U.length&&ie&7&&(o&&U.some(nu)&&(S=u_(S,o)),B=Gn(B,S))}return n.dirs&&(B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),v=B,eo(D),v}const c_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ro(n))&&((e||(e={}))[n]=t[n]);return e},u_=(t,e)=>{const n={};for(const r in t)(!nu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function l_(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?nh(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==r[f]&&!Lo(u,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?nh(r,o,u):!0:!!o;return!1}function nh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Lo(n,i))return!0}return!1}function h_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const f_=t=>t.__isSuspense;function d_(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):o_(t)}function ji(t,e){if(De){let n=De.provides;const r=De.parent&&De.parent.provides;r===n&&(n=De.provides=Object.create(r)),n[t]=e}}function vn(t,e,n=!1){const r=De||wt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&J(e)?e.call(r.proxy):e}}const rh={};function Rr(t,e,n){return Kd(t,e,n)}function Kd(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=pe){const a=De;let c,u=!1,l=!1;if(Be(t)?(c=()=>t.value,u=Nd(t)):kr(t)?(c=()=>t,r=!0):Y(t)?(l=!0,u=t.some(kr),c=()=>t.map(S=>{if(Be(S))return S.value;if(kr(S))return Un(S);if(J(S))return yn(S,a,2)})):J(t)?e?c=()=>yn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Et(t,a,3,[f])}:c=At,e&&r){const S=c;c=()=>Un(S())}let h,f=S=>{h=v.onStop=()=>{yn(S,a,4)}};if(Fs)return f=At,e?n&&Et(e,a,3,[c(),l?[]:void 0,f]):c(),At;let p=l?[]:rh;const m=()=>{if(!!v.active)if(e){const S=v.run();(r||u||(l?S.some((D,B)=>xs(D,p[B])):xs(S,p)))&&(h&&h(),Et(e,a,3,[S,p===rh?void 0:p,f]),p=S)}else v.run()};m.allowRecurse=!!e;let I;s==="sync"?I=m:s==="post"?I=()=>ot(m,a&&a.suspense):I=()=>{!a||a.isMounted?i_(m):m()};const v=new au(c,I);return e?n?m():p=v.run():s==="post"?ot(v.run.bind(v),a&&a.suspense):v.run(),()=>{v.stop(),a&&a.scope&&ru(a.scope.effects,v)}}function p_(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?zd(r,t):()=>r[t]:t.bind(r,r);let i;J(e)?i=e:(i=e.handler,n=e);const o=De;Mr(this);const a=Kd(s,i.bind(r),n);return o?Mr(o):jn(),a}function zd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Un(t,e){if(!Pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Be(t))Un(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)Un(t[n],e);else if(gd(t)||Ar(t))t.forEach(n=>{Un(n,e)});else if(vd(t))for(const n in t)Un(t[n],e);return t}function g_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qd(()=>{t.isMounted=!0}),Jd(()=>{t.isUnmounting=!0}),t}const _t=[Function,Array],m_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_t,onEnter:_t,onAfterEnter:_t,onEnterCancelled:_t,onBeforeLeave:_t,onLeave:_t,onAfterLeave:_t,onLeaveCancelled:_t,onBeforeAppear:_t,onAppear:_t,onAfterAppear:_t,onAppearCancelled:_t},setup(t,{slots:e}){const n=nw(),r=g_();let s;return()=>{const i=e.default&&Wd(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const I of i)if(I.type!==kt){o=I;break}}const a=ae(t),{mode:c}=a;if(r.isLeaving)return Ta(o);const u=sh(o);if(!u)return Ta(o);const l=oc(u,a,r,n);ac(u,l);const h=n.subTree,f=h&&sh(h);let p=!1;const{getTransitionKey:m}=u.type;if(m){const I=m();s===void 0?s=I:I!==s&&(s=I,p=!0)}if(f&&f.type!==kt&&(!Ln(u,f)||p)){const I=oc(f,a,r,n);if(ac(f,I),c==="out-in")return r.isLeaving=!0,I.afterLeave=()=>{r.isLeaving=!1,n.update()},Ta(o);c==="in-out"&&u.type!==kt&&(I.delayLeave=(v,S,D)=>{const B=Gd(r,f);B[String(f.key)]=f,v._leaveCb=()=>{S(),v._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=D})}return o}}},y_=m_;function Gd(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function oc(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:I,onAppear:v,onAfterAppear:S,onAppearCancelled:D}=e,B=String(t.key),U=Gd(n,t),ie=(Q,_e)=>{Q&&Et(Q,r,9,_e)},ue={mode:i,persisted:o,beforeEnter(Q){let _e=a;if(!n.isMounted)if(s)_e=I||a;else return;Q._leaveCb&&Q._leaveCb(!0);const ge=U[B];ge&&Ln(t,ge)&&ge.el._leaveCb&&ge.el._leaveCb(),ie(_e,[Q])},enter(Q){let _e=c,ge=u,Ge=l;if(!n.isMounted)if(s)_e=v||c,ge=S||u,Ge=D||l;else return;let We=!1;const Ue=Q._enterCb=nn=>{We||(We=!0,nn?ie(Ge,[Q]):ie(ge,[Q]),ue.delayedLeave&&ue.delayedLeave(),Q._enterCb=void 0)};_e?(_e(Q,Ue),_e.length<=1&&Ue()):Ue()},leave(Q,_e){const ge=String(t.key);if(Q._enterCb&&Q._enterCb(!0),n.isUnmounting)return _e();ie(h,[Q]);let Ge=!1;const We=Q._leaveCb=Ue=>{Ge||(Ge=!0,_e(),Ue?ie(m,[Q]):ie(p,[Q]),Q._leaveCb=void 0,U[ge]===t&&delete U[ge])};U[ge]=t,f?(f(Q,We),f.length<=1&&We()):We()},clone(Q){return oc(Q,e,n,r)}};return ue}function Ta(t){if(Uo(t))return t=Gn(t),t.children=null,t}function sh(t){return Uo(t)?t.children?t.children[0]:void 0:t}function ac(t,e){t.shapeFlag&6&&t.component?ac(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wd(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ft?(o.patchFlag&128&&s++,r=r.concat(Wd(o.children,e,a))):(e||o.type!==kt)&&r.push(a!=null?Gn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Yd(t){return J(t)?{setup:t,name:t.name}:t}const cc=t=>!!t.type.__asyncLoader,Uo=t=>t.type.__isKeepAlive;function v_(t,e){Xd(t,"a",e)}function __(t,e){Xd(t,"da",e)}function Xd(t,e,n=De){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Fo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Uo(s.parent.vnode)&&w_(r,e,n,s),s=s.parent}}function w_(t,e,n,r){const s=Fo(e,t,r,!0);Zd(()=>{ru(r[e],s)},n)}function Fo(t,e,n=De,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Xr(),Mr(n);const a=Et(e,n,t,o);return jn(),Qr(),a});return r?s.unshift(i):s.push(i),i}}const tn=t=>(e,n=De)=>(!Fs||t==="sp")&&Fo(t,e,n),E_=tn("bm"),Qd=tn("m"),b_=tn("bu"),I_=tn("u"),Jd=tn("bum"),Zd=tn("um"),T_=tn("sp"),S_=tn("rtg"),C_=tn("rtc");function A_(t,e=De){Fo("ec",t,e)}let uc=!0;function k_(t){const e=tp(t),n=t.proxy,r=t.ctx;uc=!1,e.beforeCreate&&ih(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:p,updated:m,activated:I,deactivated:v,beforeDestroy:S,beforeUnmount:D,destroyed:B,unmounted:U,render:ie,renderTracked:ue,renderTriggered:Q,errorCaptured:_e,serverPrefetch:ge,expose:Ge,inheritAttrs:We,components:Ue,directives:nn,filters:hr}=e;if(u&&R_(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const le=o[me];J(le)&&(r[me]=le.bind(n))}if(s){const me=s.call(n,n);Pe(me)&&(t.data=Jr(me))}if(uc=!0,i)for(const me in i){const le=i[me],lt=J(le)?le.bind(n,n):J(le.get)?le.get.bind(n,n):At,dr=!J(le)&&J(le.set)?le.set.bind(n):At,Ht=Ut({get:lt,set:dr});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Ht.value,set:Ot=>Ht.value=Ot})}if(a)for(const me in a)ep(a[me],r,n,me);if(c){const me=J(c)?c.call(n):c;Reflect.ownKeys(me).forEach(le=>{ji(le,me[le])})}l&&ih(l,t,"c");function Ne(me,le){Y(le)?le.forEach(lt=>me(lt.bind(n))):le&&me(le.bind(n))}if(Ne(E_,h),Ne(Qd,f),Ne(b_,p),Ne(I_,m),Ne(v_,I),Ne(__,v),Ne(A_,_e),Ne(C_,ue),Ne(S_,Q),Ne(Jd,D),Ne(Zd,U),Ne(T_,ge),Y(Ge))if(Ge.length){const me=t.exposed||(t.exposed={});Ge.forEach(le=>{Object.defineProperty(me,le,{get:()=>n[le],set:lt=>n[le]=lt})})}else t.exposed||(t.exposed={});ie&&t.render===At&&(t.render=ie),We!=null&&(t.inheritAttrs=We),Ue&&(t.components=Ue),nn&&(t.directives=nn)}function R_(t,e,n=At,r=!1){Y(t)&&(t=lc(t));for(const s in t){const i=t[s];let o;Pe(i)?"default"in i?o=vn(i.from||s,i.default,!0):o=vn(i.from||s):o=vn(i),Be(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function ih(t,e,n){Et(Y(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ep(t,e,n,r){const s=r.includes(".")?zd(n,r):()=>n[r];if(He(t)){const i=e[t];J(i)&&Rr(s,i)}else if(J(t))Rr(s,t.bind(n));else if(Pe(t))if(Y(t))t.forEach(i=>ep(i,e,n,r));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)&&Rr(s,i,t)}}function tp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>to(c,u,o,!0)),to(c,e,o)),i.set(e,c),c}function to(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&to(t,i,n,!0),s&&s.forEach(o=>to(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=N_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const N_={data:oh,props:Dn,emits:Dn,methods:Dn,computed:Dn,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:Dn,directives:Dn,watch:D_,provide:oh,inject:O_};function oh(t,e){return e?t?function(){return Je(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function O_(t,e){return Dn(lc(t),lc(e))}function lc(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function et(t,e){return t?[...new Set([].concat(t,e))]:e}function Dn(t,e){return t?Je(Je(Object.create(null),t),e):e}function D_(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const r in e)n[r]=et(t[r],e[r]);return n}function P_(t,e,n,r=!1){const s={},i={};Ji(i,Bo,1),t.propsDefaults=Object.create(null),np(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Yv(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function x_(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ae(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(Lo(t.emitsOptions,f))continue;const p=e[f];if(c)if(re(i,f))p!==i[f]&&(i[f]=p,u=!0);else{const m=jt(f);s[m]=hc(c,a,m,p,t,!1)}else p!==i[f]&&(i[f]=p,u=!0)}}}else{np(t,e,s,i)&&(u=!0);let l;for(const h in a)(!e||!re(e,h)&&((l=Yr(h))===h||!re(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(s[h]=hc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!re(e,h)&&!0)&&(delete i[h],u=!0)}u&&Jt(t,"set","$attrs")}function np(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Bi(c))continue;const u=e[c];let l;s&&re(s,l=jt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Lo(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=ae(n),u=a||pe;for(let l=0;l<i.length;l++){const h=i[l];n[h]=hc(s,c,h,u[h],t,!re(u,h))}}return o}function hc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&J(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(Mr(s),r=u[n]=c.call(null,e),jn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Yr(n))&&(r=!0))}return r}function rp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!J(t)){const l=h=>{c=!0;const[f,p]=rp(h,e,!0);Je(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return r.set(t,Cr),Cr;if(Y(i))for(let l=0;l<i.length;l++){const h=jt(i[l]);ah(h)&&(o[h]=pe)}else if(i)for(const l in i){const h=jt(l);if(ah(h)){const f=i[l],p=o[h]=Y(f)||J(f)?{type:f}:f;if(p){const m=lh(Boolean,p.type),I=lh(String,p.type);p[0]=m>-1,p[1]=I<0||m<I,(m>-1||re(p,"default"))&&a.push(h)}}}const u=[o,a];return r.set(t,u),u}function ah(t){return t[0]!=="$"}function ch(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function uh(t,e){return ch(t)===ch(e)}function lh(t,e){return Y(e)?e.findIndex(n=>uh(n,t)):J(e)&&uh(e,t)?0:-1}const sp=t=>t[0]==="_"||t==="$stable",gu=t=>Y(t)?t.map(Mt):[Mt(t)],L_=(t,e,n)=>{const r=$i((...s)=>gu(e(...s)),n);return r._c=!1,r},ip=(t,e,n)=>{const r=t._ctx;for(const s in t){if(sp(s))continue;const i=t[s];if(J(i))e[s]=L_(s,i,r);else if(i!=null){const o=gu(i);e[s]=()=>o}}},op=(t,e)=>{const n=gu(e);t.slots.default=()=>n},M_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),Ji(e,"_",n)):ip(e,t.slots={})}else t.slots={},e&&op(t,e);Ji(t.slots,Bo,1)},U_=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=pe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Je(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ip(e,s)),o=e}else e&&(op(t,e),o={default:1});if(i)for(const a in s)!sp(a)&&!(a in o)&&delete s[a]};function It(t,e){const n=wt;if(n===null)return t;const r=Vo(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=pe]=e[i];J(o)&&(o={mounted:o,updated:o}),o.deep&&Un(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function Nn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Xr(),Et(c,n,8,[t.el,a,t,e]),Qr())}}function ap(){return{app:null,config:{isNativeTag:gv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let F_=0;function B_(t,e){return function(r,s=null){J(r)||(r=Object.assign({},r)),s!=null&&!Pe(s)&&(s=null);const i=ap(),o=new Set;let a=!1;const c=i.app={_uid:F_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:uw,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&J(u.install)?(o.add(u),u.install(c,...l)):J(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=Ve(r,s);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,Vo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function fc(t,e,n,r,s=!1){if(Y(t)){t.forEach((f,p)=>fc(f,e&&(Y(e)?e[p]:e),n,r,s));return}if(cc(r)&&!s)return;const i=r.shapeFlag&4?Vo(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===pe?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(He(u)?(l[u]=null,re(h,u)&&(h[u]=null)):Be(u)&&(u.value=null)),J(c))yn(c,a,12,[o,l]);else{const f=He(c),p=Be(c);if(f||p){const m=()=>{if(t.f){const I=f?l[c]:c.value;s?Y(I)&&ru(I,i):Y(I)?I.includes(i)||I.push(i):f?(l[c]=[i],re(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,re(h,c)&&(h[c]=o)):Be(c)&&(c.value=o,t.k&&(l[t.k]=o))};o?(m.id=-1,ot(m,n)):m()}}}const ot=d_;function V_(t){return $_(t)}function $_(t,e){const n=Ev();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:p=At,cloneNode:m,insertStaticContent:I}=t,v=(d,g,y,b=null,E=null,k=null,P=!1,C=null,R=!!g.dynamicChildren)=>{if(d===g)return;d&&!Ln(d,g)&&(b=$(d),vt(d,E,k,!0),d=null),g.patchFlag===-2&&(R=!1,g.dynamicChildren=null);const{type:T,ref:q,shapeFlag:M}=g;switch(T){case mu:S(d,g,y,b);break;case kt:D(d,g,y,b);break;case Sa:d==null&&B(g,y,b,P);break;case ft:nn(d,g,y,b,E,k,P,C,R);break;default:M&1?ue(d,g,y,b,E,k,P,C,R):M&6?hr(d,g,y,b,E,k,P,C,R):(M&64||M&128)&&T.process(d,g,y,b,E,k,P,C,R,ye)}q!=null&&E&&fc(q,d&&d.ref,k,g||d,!g)},S=(d,g,y,b)=>{if(d==null)r(g.el=a(g.children),y,b);else{const E=g.el=d.el;g.children!==d.children&&u(E,g.children)}},D=(d,g,y,b)=>{d==null?r(g.el=c(g.children||""),y,b):g.el=d.el},B=(d,g,y,b)=>{[d.el,d.anchor]=I(d.children,g,y,b,d.el,d.anchor)},U=({el:d,anchor:g},y,b)=>{let E;for(;d&&d!==g;)E=f(d),r(d,y,b),d=E;r(g,y,b)},ie=({el:d,anchor:g})=>{let y;for(;d&&d!==g;)y=f(d),s(d),d=y;s(g)},ue=(d,g,y,b,E,k,P,C,R)=>{P=P||g.type==="svg",d==null?Q(g,y,b,E,k,P,C,R):Ge(d,g,E,k,P,C,R)},Q=(d,g,y,b,E,k,P,C)=>{let R,T;const{type:q,props:M,shapeFlag:H,transition:G,patchFlag:se,dirs:Ie}=d;if(d.el&&m!==void 0&&se===-1)R=d.el=m(d.el);else{if(R=d.el=o(d.type,k,M&&M.is,M),H&8?l(R,d.children):H&16&&ge(d.children,R,null,b,E,k&&q!=="foreignObject",P,C),Ie&&Nn(d,null,b,"created"),M){for(const we in M)we!=="value"&&!Bi(we)&&i(R,we,null,M[we],k,d.children,b,E,N);"value"in M&&i(R,"value",null,M.value),(T=M.onVnodeBeforeMount)&&Pt(T,b,d)}_e(R,d,d.scopeId,P,b)}Ie&&Nn(d,null,b,"beforeMount");const fe=(!E||E&&!E.pendingBranch)&&G&&!G.persisted;fe&&G.beforeEnter(R),r(R,g,y),((T=M&&M.onVnodeMounted)||fe||Ie)&&ot(()=>{T&&Pt(T,b,d),fe&&G.enter(R),Ie&&Nn(d,null,b,"mounted")},E)},_e=(d,g,y,b,E)=>{if(y&&p(d,y),b)for(let k=0;k<b.length;k++)p(d,b[k]);if(E){let k=E.subTree;if(g===k){const P=E.vnode;_e(d,P,P.scopeId,P.slotScopeIds,E.parent)}}},ge=(d,g,y,b,E,k,P,C,R=0)=>{for(let T=R;T<d.length;T++){const q=d[T]=C?un(d[T]):Mt(d[T]);v(null,q,g,y,b,E,k,P,C)}},Ge=(d,g,y,b,E,k,P)=>{const C=g.el=d.el;let{patchFlag:R,dynamicChildren:T,dirs:q}=g;R|=d.patchFlag&16;const M=d.props||pe,H=g.props||pe;let G;y&&On(y,!1),(G=H.onVnodeBeforeUpdate)&&Pt(G,y,g,d),q&&Nn(g,d,y,"beforeUpdate"),y&&On(y,!0);const se=E&&g.type!=="foreignObject";if(T?We(d.dynamicChildren,T,C,y,b,se,k):P||lt(d,g,C,null,y,b,se,k,!1),R>0){if(R&16)Ue(C,g,M,H,y,b,E);else if(R&2&&M.class!==H.class&&i(C,"class",null,H.class,E),R&4&&i(C,"style",M.style,H.style,E),R&8){const Ie=g.dynamicProps;for(let fe=0;fe<Ie.length;fe++){const we=Ie[fe],bt=M[we],pr=H[we];(pr!==bt||we==="value")&&i(C,we,bt,pr,E,d.children,y,b,N)}}R&1&&d.children!==g.children&&l(C,g.children)}else!P&&T==null&&Ue(C,g,M,H,y,b,E);((G=H.onVnodeUpdated)||q)&&ot(()=>{G&&Pt(G,y,g,d),q&&Nn(g,d,y,"updated")},b)},We=(d,g,y,b,E,k,P)=>{for(let C=0;C<g.length;C++){const R=d[C],T=g[C],q=R.el&&(R.type===ft||!Ln(R,T)||R.shapeFlag&70)?h(R.el):y;v(R,T,q,null,b,E,k,P,!0)}},Ue=(d,g,y,b,E,k,P)=>{if(y!==b){for(const C in b){if(Bi(C))continue;const R=b[C],T=y[C];R!==T&&C!=="value"&&i(d,C,T,R,P,g.children,E,k,N)}if(y!==pe)for(const C in y)!Bi(C)&&!(C in b)&&i(d,C,y[C],null,P,g.children,E,k,N);"value"in b&&i(d,"value",y.value,b.value)}},nn=(d,g,y,b,E,k,P,C,R)=>{const T=g.el=d?d.el:a(""),q=g.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:H,slotScopeIds:G}=g;G&&(C=C?C.concat(G):G),d==null?(r(T,y,b),r(q,y,b),ge(g.children,y,q,E,k,P,C,R)):M>0&&M&64&&H&&d.dynamicChildren?(We(d.dynamicChildren,H,y,E,k,P,C),(g.key!=null||E&&g===E.subTree)&&cp(d,g,!0)):lt(d,g,y,q,E,k,P,C,R)},hr=(d,g,y,b,E,k,P,C,R)=>{g.slotScopeIds=C,d==null?g.shapeFlag&512?E.ctx.activate(g,y,b,P,R):fr(g,y,b,E,k,P,R):Ne(d,g,R)},fr=(d,g,y,b,E,k,P)=>{const C=d.component=tw(d,b,E);if(Uo(d)&&(C.ctx.renderer=ye),rw(C),C.asyncDep){if(E&&E.registerDep(C,me),!d.el){const R=C.subTree=Ve(kt);D(null,R,g,y)}return}me(C,d,g,y,E,k,P)},Ne=(d,g,y)=>{const b=g.component=d.component;if(l_(d,g,y))if(b.asyncDep&&!b.asyncResolved){le(b,g,y);return}else b.next=g,s_(b.update),b.update();else g.component=d.component,g.el=d.el,b.vnode=g},me=(d,g,y,b,E,k,P)=>{const C=()=>{if(d.isMounted){let{next:q,bu:M,u:H,parent:G,vnode:se}=d,Ie=q,fe;On(d,!1),q?(q.el=se.el,le(d,q,P)):q=se,M&&Vi(M),(fe=q.props&&q.props.onVnodeBeforeUpdate)&&Pt(fe,G,q,se),On(d,!0);const we=Ia(d),bt=d.subTree;d.subTree=we,v(bt,we,h(bt.el),$(bt),d,E,k),q.el=we.el,Ie===null&&h_(d,we.el),H&&ot(H,E),(fe=q.props&&q.props.onVnodeUpdated)&&ot(()=>Pt(fe,G,q,se),E)}else{let q;const{el:M,props:H}=g,{bm:G,m:se,parent:Ie}=d,fe=cc(g);if(On(d,!1),G&&Vi(G),!fe&&(q=H&&H.onVnodeBeforeMount)&&Pt(q,Ie,g),On(d,!0),M&&Z){const we=()=>{d.subTree=Ia(d),Z(M,d.subTree,d,E,null)};fe?g.type.__asyncLoader().then(()=>!d.isUnmounted&&we()):we()}else{const we=d.subTree=Ia(d);v(null,we,y,b,d,E,k),g.el=we.el}if(se&&ot(se,E),!fe&&(q=H&&H.onVnodeMounted)){const we=g;ot(()=>Pt(q,Ie,we),E)}g.shapeFlag&256&&d.a&&ot(d.a,E),d.isMounted=!0,g=y=b=null}},R=d.effect=new au(C,()=>Bd(d.update),d.scope),T=d.update=R.run.bind(R);T.id=d.uid,On(d,!0),T()},le=(d,g,y)=>{g.component=d;const b=d.vnode.props;d.vnode=g,d.next=null,x_(d,g.props,b,y),U_(d,g.children,y),Xr(),pu(void 0,d.update),Qr()},lt=(d,g,y,b,E,k,P,C,R=!1)=>{const T=d&&d.children,q=d?d.shapeFlag:0,M=g.children,{patchFlag:H,shapeFlag:G}=g;if(H>0){if(H&128){Ht(T,M,y,b,E,k,P,C,R);return}else if(H&256){dr(T,M,y,b,E,k,P,C,R);return}}G&8?(q&16&&N(T,E,k),M!==T&&l(y,M)):q&16?G&16?Ht(T,M,y,b,E,k,P,C,R):N(T,E,k,!0):(q&8&&l(y,""),G&16&&ge(M,y,b,E,k,P,C,R))},dr=(d,g,y,b,E,k,P,C,R)=>{d=d||Cr,g=g||Cr;const T=d.length,q=g.length,M=Math.min(T,q);let H;for(H=0;H<M;H++){const G=g[H]=R?un(g[H]):Mt(g[H]);v(d[H],G,y,null,E,k,P,C,R)}T>q?N(d,E,k,!0,!1,M):ge(g,y,b,E,k,P,C,R,M)},Ht=(d,g,y,b,E,k,P,C,R)=>{let T=0;const q=g.length;let M=d.length-1,H=q-1;for(;T<=M&&T<=H;){const G=d[T],se=g[T]=R?un(g[T]):Mt(g[T]);if(Ln(G,se))v(G,se,y,null,E,k,P,C,R);else break;T++}for(;T<=M&&T<=H;){const G=d[M],se=g[H]=R?un(g[H]):Mt(g[H]);if(Ln(G,se))v(G,se,y,null,E,k,P,C,R);else break;M--,H--}if(T>M){if(T<=H){const G=H+1,se=G<q?g[G].el:b;for(;T<=H;)v(null,g[T]=R?un(g[T]):Mt(g[T]),y,se,E,k,P,C,R),T++}}else if(T>H)for(;T<=M;)vt(d[T],E,k,!0),T++;else{const G=T,se=T,Ie=new Map;for(T=se;T<=H;T++){const ht=g[T]=R?un(g[T]):Mt(g[T]);ht.key!=null&&Ie.set(ht.key,T)}let fe,we=0;const bt=H-se+1;let pr=!1,jl=0;const fs=new Array(bt);for(T=0;T<bt;T++)fs[T]=0;for(T=G;T<=M;T++){const ht=d[T];if(we>=bt){vt(ht,E,k,!0);continue}let Dt;if(ht.key!=null)Dt=Ie.get(ht.key);else for(fe=se;fe<=H;fe++)if(fs[fe-se]===0&&Ln(ht,g[fe])){Dt=fe;break}Dt===void 0?vt(ht,E,k,!0):(fs[Dt-se]=T+1,Dt>=jl?jl=Dt:pr=!0,v(ht,g[Dt],y,null,E,k,P,C,R),we++)}const ql=pr?j_(fs):Cr;for(fe=ql.length-1,T=bt-1;T>=0;T--){const ht=se+T,Dt=g[ht],Hl=ht+1<q?g[ht+1].el:b;fs[T]===0?v(null,Dt,y,Hl,E,k,P,C,R):pr&&(fe<0||T!==ql[fe]?Ot(Dt,y,Hl,2):fe--)}}},Ot=(d,g,y,b,E=null)=>{const{el:k,type:P,transition:C,children:R,shapeFlag:T}=d;if(T&6){Ot(d.component.subTree,g,y,b);return}if(T&128){d.suspense.move(g,y,b);return}if(T&64){P.move(d,g,y,ye);return}if(P===ft){r(k,g,y);for(let M=0;M<R.length;M++)Ot(R[M],g,y,b);r(d.anchor,g,y);return}if(P===Sa){U(d,g,y);return}if(b!==2&&T&1&&C)if(b===0)C.beforeEnter(k),r(k,g,y),ot(()=>C.enter(k),E);else{const{leave:M,delayLeave:H,afterLeave:G}=C,se=()=>r(k,g,y),Ie=()=>{M(k,()=>{se(),G&&G()})};H?H(k,se,Ie):Ie()}else r(k,g,y)},vt=(d,g,y,b=!1,E=!1)=>{const{type:k,props:P,ref:C,children:R,dynamicChildren:T,shapeFlag:q,patchFlag:M,dirs:H}=d;if(C!=null&&fc(C,null,y,d,!0),q&256){g.ctx.deactivate(d);return}const G=q&1&&H,se=!cc(d);let Ie;if(se&&(Ie=P&&P.onVnodeBeforeUnmount)&&Pt(Ie,g,d),q&6)F(d.component,y,b);else{if(q&128){d.suspense.unmount(y,b);return}G&&Nn(d,null,g,"beforeUnmount"),q&64?d.type.remove(d,g,y,E,ye,b):T&&(k!==ft||M>0&&M&64)?N(T,g,y,!1,!0):(k===ft&&M&384||!E&&q&16)&&N(R,g,y),b&&Ea(d)}(se&&(Ie=P&&P.onVnodeUnmounted)||G)&&ot(()=>{Ie&&Pt(Ie,g,d),G&&Nn(d,null,g,"unmounted")},y)},Ea=d=>{const{type:g,el:y,anchor:b,transition:E}=d;if(g===ft){w(y,b);return}if(g===Sa){ie(d);return}const k=()=>{s(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:P,delayLeave:C}=E,R=()=>P(y,k);C?C(d.el,k,R):R()}else k()},w=(d,g)=>{let y;for(;d!==g;)y=f(d),s(d),d=y;s(g)},F=(d,g,y)=>{const{bum:b,scope:E,update:k,subTree:P,um:C}=d;b&&Vi(b),E.stop(),k&&(k.active=!1,vt(P,d,g,y)),C&&ot(C,g),ot(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},N=(d,g,y,b=!1,E=!1,k=0)=>{for(let P=k;P<d.length;P++)vt(d[P],g,y,b,E)},$=d=>d.shapeFlag&6?$(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),he=(d,g,y)=>{d==null?g._vnode&&vt(g._vnode,null,null,!0):v(g._vnode||null,d,g,null,null,null,y),jd(),g._vnode=d},ye={p:v,um:vt,m:Ot,r:Ea,mt:fr,mc:ge,pc:lt,pbc:We,n:$,o:t};let te,Z;return e&&([te,Z]=e(ye)),{render:he,hydrate:te,createApp:B_(he,te)}}function On({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function cp(t,e,n=!1){const r=t.children,s=e.children;if(Y(r)&&Y(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=un(s[i]),a.el=o.el),n||cp(o,a))}}function j_(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const q_=t=>t.__isTeleport,up="components";function hh(t,e){return K_(up,t,!0,e)||t}const H_=Symbol();function K_(t,e,n=!0,r=!1){const s=wt||De;if(s){const i=s.type;if(t===up){const a=aw(i);if(a&&(a===e||a===jt(e)||a===Do(jt(e))))return i}const o=fh(s[t]||i[t],e)||fh(s.appContext[t],e);return!o&&r?i:o}}function fh(t,e){return t&&(t[e]||t[jt(e)]||t[Do(jt(e))])}const ft=Symbol(void 0),mu=Symbol(void 0),kt=Symbol(void 0),Sa=Symbol(void 0),Cs=[];let $n=null;function St(t=!1){Cs.push($n=t?null:[])}function z_(){Cs.pop(),$n=Cs[Cs.length-1]||null}let no=1;function dh(t){no+=t}function lp(t){return t.dynamicChildren=no>0?$n||Cr:null,z_(),no>0&&$n&&$n.push(t),t}function Lt(t,e,n,r,s,i){return lp(O(t,e,n,r,s,i,!0))}function G_(t,e,n,r,s){return lp(Ve(t,e,n,r,s,!0))}function dc(t){return t?t.__v_isVNode===!0:!1}function Ln(t,e){return t.type===e.type&&t.key===e.key}const Bo="__vInternal",hp=({key:t})=>t!=null?t:null,qi=({ref:t,ref_key:e,ref_for:n})=>t!=null?He(t)||Be(t)||J(t)?{i:wt,r:t,k:e,f:!!n}:t:null;function O(t,e=null,n=null,r=0,s=null,i=t===ft?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hp(e),ref:e&&qi(e),scopeId:Mo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(yu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),no>0&&!o&&$n&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&$n.push(c),c}const Ve=W_;function W_(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===H_)&&(t=kt),dc(t)){const a=Gn(t,e,!0);return n&&yu(a,n),a}if(cw(t)&&(t=t.__vccOpts),e){e=Y_(e);let{class:a,style:c}=e;a&&!He(a)&&(e.class=tu(a)),Pe(c)&&(Od(c)&&!Y(c)&&(c=Je({},c)),e.style=eu(c))}const o=He(t)?1:f_(t)?128:q_(t)?64:Pe(t)?4:J(t)?2:0;return O(t,e,n,r,s,o,i,!0)}function Y_(t){return t?Od(t)||Bo in t?Je({},t):t:null}function Gn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Q_(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&hp(a),ref:e&&e.ref?n&&s?Y(s)?s.concat(qi(e)):[s,qi(e)]:qi(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gn(t.ssContent),ssFallback:t.ssFallback&&Gn(t.ssFallback),el:t.el,anchor:t.anchor}}function X_(t=" ",e=0){return Ve(mu,null,t,e)}function Pn(t="",e=!1){return e?(St(),G_(kt,null,t)):Ve(kt,null,t)}function Mt(t){return t==null||typeof t=="boolean"?Ve(kt):Y(t)?Ve(ft,null,t.slice()):typeof t=="object"?un(t):Ve(mu,null,String(t))}function un(t){return t.el===null||t.memo?t:Gn(t)}function yu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),yu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Bo in e)?e._ctx=wt:s===3&&wt&&(wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:wt},n=32):(e=String(e),r&64?(n=16,e=[X_(e)]):n=8);t.children=e,t.shapeFlag|=n}function Q_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=tu([e.class,r.class]));else if(s==="style")e.style=eu([e.style,r.style]);else if(Ro(s)){const i=e[s],o=r[s];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Pt(t,e,n,r=null){Et(t,e,7,[n,r])}const pc=t=>t?fp(t)?Vo(t)||t.proxy:pc(t.parent):null,ro=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pc(t.parent),$root:t=>pc(t.root),$emit:t=>t.emit,$options:t=>tp(t),$forceUpdate:t=>()=>Bd(t.update),$nextTick:t=>Fd.bind(t.proxy),$watch:t=>p_.bind(t)}),J_={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==pe&&re(r,e))return o[e]=1,r[e];if(s!==pe&&re(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&re(u,e))return o[e]=3,i[e];if(n!==pe&&re(n,e))return o[e]=4,n[e];uc&&(o[e]=0)}}const l=ro[e];let h,f;if(l)return e==="$attrs"&&mt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==pe&&re(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,re(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==pe&&re(s,e)?(s[e]=n,!0):r!==pe&&re(r,e)?(r[e]=n,!0):re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==pe&&re(t,o)||e!==pe&&re(e,o)||(a=i[0])&&re(a,o)||re(r,o)||re(ro,o)||re(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Z_=ap();let ew=0;function tw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Z_,i={uid:ew++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new bv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rp(r,s),emitsOptions:Hd(r,s),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:r.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=a_.bind(null,i),t.ce&&t.ce(i),i}let De=null;const nw=()=>De||wt,Mr=t=>{De=t,t.scope.on()},jn=()=>{De&&De.scope.off(),De=null};function fp(t){return t.vnode.shapeFlag&4}let Fs=!1;function rw(t,e=!1){Fs=e;const{props:n,children:r}=t.vnode,s=fp(t);P_(t,n,s,e),M_(t,r);const i=s?sw(t,e):void 0;return Fs=!1,i}function sw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Dd(new Proxy(t.ctx,J_));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?ow(t):null;Mr(t),Xr();const i=yn(r,t,0,[t.props,s]);if(Qr(),jn(),md(i)){if(i.then(jn,jn),e)return i.then(o=>{ph(t,o,e)}).catch(o=>{xo(o,t,0)});t.asyncDep=i}else ph(t,i,e)}else dp(t,e)}function ph(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=Md(e)),dp(t,n)}let gh;function dp(t,e,n){const r=t.type;if(!t.render){if(!e&&gh&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=Je(Je({isCustomElement:i,delimiters:a},o),c);r.render=gh(s,u)}}t.render=r.render||At}Mr(t),Xr(),k_(t),Qr(),jn()}function iw(t){return new Proxy(t.attrs,{get(e,n){return mt(t,"get","$attrs"),e[n]}})}function ow(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=iw(t))},slots:t.slots,emit:t.emit,expose:e}}function Vo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Md(Dd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ro)return ro[n](t)}}))}function aw(t){return J(t)&&t.displayName||t.name}function cw(t){return J(t)&&"__vccOpts"in t}const Ut=(t,e)=>t_(t,e,Fs);function pp(t,e,n){const r=arguments.length;return r===2?Pe(e)&&!Y(e)?dc(e)?Ve(t,null,[e]):Ve(t,e):Ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&dc(n)&&(n=[n]),Ve(t,e,n))}const uw="3.2.33",lw="http://www.w3.org/2000/svg",Mn=typeof document!="undefined"?document:null,mh=Mn&&Mn.createElement("template"),hw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Mn.createElementNS(lw,t):Mn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Mn.createTextNode(t),createComment:t=>Mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mh.innerHTML=r?`<svg>${t}</svg>`:t;const a=mh.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function fw(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function dw(t,e,n){const r=t.style,s=He(n);if(n&&!s){for(const i in n)gc(r,i,n[i]);if(e&&!He(e))for(const i in e)n[i]==null&&gc(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const yh=/\s*!important$/;function gc(t,e,n){if(Y(n))n.forEach(r=>gc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=pw(t,e);yh.test(n)?t.setProperty(Yr(r),n.replace(yh,""),"important"):t[r]=n}}const vh=["Webkit","Moz","ms"],Ca={};function pw(t,e){const n=Ca[e];if(n)return n;let r=jt(e);if(r!=="filter"&&r in t)return Ca[e]=r;r=Do(r);for(let s=0;s<vh.length;s++){const i=vh[s]+r;if(i in t)return Ca[e]=i}return e}const _h="http://www.w3.org/1999/xlink";function gw(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(_h,e.slice(6,e.length)):t.setAttributeNS(_h,e,n);else{const i=hv(e);n==null||i&&!dd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function mw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=dd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[gp,yw]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let mc=0;const vw=Promise.resolve(),_w=()=>{mc=0},ww=()=>mc||(vw.then(_w),mc=gp());function Er(t,e,n,r){t.addEventListener(e,n,r)}function Ew(t,e,n,r){t.removeEventListener(e,n,r)}function bw(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Iw(e);if(r){const u=i[e]=Tw(r,s);Er(t,a,u,c)}else o&&(Ew(t,a,o,c),i[e]=void 0)}}const wh=/(?:Once|Passive|Capture)$/;function Iw(t){let e;if(wh.test(t)){e={};let n;for(;n=t.match(wh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Yr(t.slice(2)),e]}function Tw(t,e){const n=r=>{const s=r.timeStamp||gp();(yw||s>=n.attached-1)&&Et(Sw(r,n.value),e,5,[r])};return n.value=t,n.attached=ww(),n}function Sw(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Eh=/^on[a-z]/,Cw=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?fw(t,r,s):e==="style"?dw(t,n,r):Ro(e)?nu(e)||bw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Aw(t,e,r,s))?mw(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),gw(t,e,r,s))};function Aw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Eh.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Eh.test(e)&&He(n)?!1:e in t}const kw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};y_.props;const bh=t=>{const e=t.props["onUpdate:modelValue"];return Y(e)?n=>Vi(e,n):e};function Rw(t){t.target.composing=!0}function Ih(t){const e=t.target;e.composing&&(e.composing=!1,Nw(e,"input"))}function Nw(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Tt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=bh(s);const i=r||s.props&&s.props.type==="number";Er(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Za(a)),t._assign(a)}),n&&Er(t,"change",()=>{t.value=t.value.trim()}),e||(Er(t,"compositionstart",Rw),Er(t,"compositionend",Ih),Er(t,"change",Ih))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=bh(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Za(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Ow=["ctrl","shift","alt","meta"],Dw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ow.some(n=>t[`${n}Key`]&&!e.includes(n))},ds=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Dw[e[s]];if(i&&i(n,e))return}return t(n,...r)},Pw=Je({patchProp:Cw},hw);let Th;function xw(){return Th||(Th=V_(Pw))}const Lw=(...t)=>{const e=xw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Mw(r);if(!s)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Mw(t){return He(t)?document.querySelector(t):t}const Uw="modulepreload",Sh={},Fw="/if-lost/",Ni=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${Fw}${r}`,r in Sh)return;Sh[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":Uw,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};function Bw(){return mp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function mp(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const Vw=typeof Proxy=="function",$w="devtools-plugin:setup",jw="plugin:settings:set";let gr,yc;function qw(){var t;return gr!==void 0||(typeof window!="undefined"&&window.performance?(gr=!0,yc=window.performance):typeof global!="undefined"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(gr=!0,yc=global.perf_hooks.performance):gr=!1),gr}function Hw(){return qw()?yc.now():Date.now()}class Kw{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return Hw()}},n&&n.on(jw,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function zw(t,e){const n=t,r=mp(),s=Bw(),i=Vw&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit($w,t,e);else{const o=i?new Kw(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const yp=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Zr=t=>yp?Symbol(t):"_vr_"+t,Gw=Zr("rvlm"),Ch=Zr("rvd"),vu=Zr("r"),vp=Zr("rl"),vc=Zr("rvl"),br=typeof window!="undefined";function Ww(t){return t.__esModule||yp&&t[Symbol.toStringTag]==="Module"}const de=Object.assign;function Aa(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const As=()=>{},Yw=/\/$/,Xw=t=>t.replace(Yw,"");function ka(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=eE(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Qw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ah(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Jw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ur(e.matched[r],n.matched[s])&&_p(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ur(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function _p(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Zw(t[n],e[n]))return!1;return!0}function Zw(t,e){return Array.isArray(t)?kh(t,e):Array.isArray(e)?kh(e,t):t===e}function kh(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function eE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Bs;(function(t){t.pop="pop",t.push="push"})(Bs||(Bs={}));var ks;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ks||(ks={}));function tE(t){if(!t)if(br){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Xw(t)}const nE=/^[^#]+#/;function rE(t,e){return t.replace(nE,"#")+e}function sE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const $o=()=>({left:window.pageXOffset,top:window.pageYOffset});function iE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=sE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Rh(t,e){return(history.state?history.state.position-e:-1)+t}const _c=new Map;function oE(t,e){_c.set(t,e)}function aE(t){const e=_c.get(t);return _c.delete(t),e}let cE=()=>location.protocol+"//"+location.host;function wp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ah(c,"")}return Ah(n,t)+r+s}function uE(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const p=wp(t,location),m=n.value,I=e.value;let v=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}v=I?f.position-I.position:0}else r(p);s.forEach(S=>{S(n.value,m,{delta:v,type:Bs.pop,direction:v?v>0?ks.forward:ks.back:ks.unknown})})};function c(){o=n.value}function u(f){s.push(f);const p=()=>{const m=s.indexOf(f);m>-1&&s.splice(m,1)};return i.push(p),p}function l(){const{history:f}=window;!f.state||f.replaceState(de({},f.state,{scroll:$o()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Nh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?$o():null}}function lE(t){const{history:e,location:n}=window,r={value:wp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:cE()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),s.value=u}catch(p){console.error(p),n[l?"replace":"assign"](f)}}function o(c,u){const l=de({},e.state,Nh(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=de({},s.value,e.state,{forward:c,scroll:$o()});i(l.current,l,!0);const h=de({},Nh(r.value,c,null),{position:l.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function hE(t){t=tE(t);const e=lE(t),n=uE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=de({location:"",base:t,go:r,createHref:rE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function fE(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),hE(t)}function dE(t){return typeof t=="string"||t&&typeof t=="object"}function Ep(t){return typeof t=="string"||typeof t=="symbol"}const sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bp=Zr("nf");var Oh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Oh||(Oh={}));function Fr(t,e){return de(new Error,{type:t,[bp]:!0},e)}function on(t,e){return t instanceof Error&&bp in t&&(e==null||!!(t.type&e))}const Dh="[^/]+?",pE={sensitive:!1,strict:!1,start:!0,end:!0},gE=/[.+*?^${}()[\]/\\]/g;function mE(t,e){const n=de({},pE,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const f=u[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(gE,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:I,optional:v,regexp:S}=f;i.push({name:m,repeatable:I,optional:v});const D=S||Dh;if(D!==Dh){p+=10;try{new RegExp(`(${D})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${m}" (${D}): `+U.message)}}let B=I?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(B=v&&u.length<2?`(?:/${B})`:"/"+B),v&&(B+="?"),s+=B,p+=20,v&&(p+=-8),I&&(p+=-20),D===".*"&&(p+=-50)}l.push(p)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const p=l[f]||"",m=i[f-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const p of f)if(p.type===0)l+=p.value;else if(p.type===1){const{value:m,repeatable:I,optional:v}=p,S=m in u?u[m]:"";if(Array.isArray(S)&&!I)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const D=Array.isArray(S)?S.join("/"):S;if(!D)if(v)f.length<2&&t.length>1&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);l+=D}}return l}return{re:o,score:r,keys:i,parse:a,stringify:c}}function yE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function vE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=yE(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const _E={type:0,value:""},wE=/[a-zA-Z0-9_]/;function EE(t){if(!t)return[[]];if(t==="/")return[[_E]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:wE.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function bE(t,e,n){const r=mE(EE(t.path),n),s=de(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function IE(t,e){const n=[],r=new Map;e=xh({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,h,f){const p=!f,m=SE(l);m.aliasOf=f&&f.record;const I=xh(e,l),v=[m];if("alias"in l){const B=typeof l.alias=="string"?[l.alias]:l.alias;for(const U of B)v.push(de({},m,{components:f?f.record.components:m.components,path:U,aliasOf:f?f.record:m}))}let S,D;for(const B of v){const{path:U}=B;if(h&&U[0]!=="/"){const ie=h.record.path,ue=ie[ie.length-1]==="/"?"":"/";B.path=h.record.path+(U&&ue+U)}if(S=bE(B,h,I),f?f.alias.push(S):(D=D||S,D!==S&&D.alias.push(S),p&&l.name&&!Ph(S)&&o(l.name)),"children"in m){const ie=m.children;for(let ue=0;ue<ie.length;ue++)i(ie[ue],S,f&&f.children[ue])}f=f||S,c(S)}return D?()=>{o(D)}:As}function o(l){if(Ep(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&vE(l,n[h])>=0&&(l.record.path!==n[h].record.path||!Ip(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Ph(l)&&r.set(l.record.name,l)}function u(l,h){let f,p={},m,I;if("name"in l&&l.name){if(f=r.get(l.name),!f)throw Fr(1,{location:l});I=f.record.name,p=de(TE(h.params,f.keys.filter(D=>!D.optional).map(D=>D.name)),l.params),m=f.stringify(p)}else if("path"in l)m=l.path,f=n.find(D=>D.re.test(m)),f&&(p=f.parse(m),I=f.record.name);else{if(f=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!f)throw Fr(1,{location:l,currentLocation:h});I=f.record.name,p=de({},h.params,l.params),m=f.stringify(p)}const v=[];let S=f;for(;S;)v.unshift(S.record),S=S.parent;return{name:I,path:m,params:p,matched:v,meta:AE(v)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function TE(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function SE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:CE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function CE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Ph(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function AE(t){return t.reduce((e,n)=>de(e,n.meta),{})}function xh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ip(t,e){return e.children.some(n=>n===t||Ip(t,n))}const Tp=/#/g,kE=/&/g,RE=/\//g,NE=/=/g,OE=/\?/g,Sp=/\+/g,DE=/%5B/g,PE=/%5D/g,Cp=/%5E/g,xE=/%60/g,Ap=/%7B/g,LE=/%7C/g,kp=/%7D/g,ME=/%20/g;function _u(t){return encodeURI(""+t).replace(LE,"|").replace(DE,"[").replace(PE,"]")}function UE(t){return _u(t).replace(Ap,"{").replace(kp,"}").replace(Cp,"^")}function wc(t){return _u(t).replace(Sp,"%2B").replace(ME,"+").replace(Tp,"%23").replace(kE,"%26").replace(xE,"`").replace(Ap,"{").replace(kp,"}").replace(Cp,"^")}function FE(t){return wc(t).replace(NE,"%3D")}function BE(t){return _u(t).replace(Tp,"%23").replace(OE,"%3F")}function VE(t){return t==null?"":BE(t).replace(RE,"%2F")}function so(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function $E(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Sp," "),o=i.indexOf("="),a=so(o<0?i:i.slice(0,o)),c=o<0?null:so(i.slice(o+1));if(a in e){let u=e[a];Array.isArray(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Lh(t){let e="";for(let n in t){const r=t[n];if(n=FE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&wc(i)):[r&&wc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function jE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function ps(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ln(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Fr(4,{from:n,to:e})):h instanceof Error?a(h):dE(h)?a(Fr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Ra(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(qE(a)){const u=(a.__vccOpts||a)[e];u&&s.push(ln(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=Ww(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&ln(f,n,r,i,o)()}))}}return s}function qE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Mh(t){const e=vn(vu),n=vn(vp),r=Ut(()=>e.resolve(Is(t.to))),s=Ut(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(Ur.bind(null,l));if(f>-1)return f;const p=Uh(c[u-2]);return u>1&&Uh(l)===p&&h[h.length-1].path!==p?h.findIndex(Ur.bind(null,c[u-2])):f}),i=Ut(()=>s.value>-1&&GE(n.params,r.value.params)),o=Ut(()=>s.value>-1&&s.value===n.matched.length-1&&_p(n.params,r.value.params));function a(c={}){return zE(c)?e[Is(t.replace)?"replace":"push"](Is(t.to)).catch(As):Promise.resolve()}return{route:r,href:Ut(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const HE=Yd({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Mh,setup(t,{slots:e}){const n=Jr(Mh(t)),{options:r}=vn(vu),s=Ut(()=>({[Fh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Fh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:pp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),KE=HE;function zE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function GE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Uh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Fh=(t,e,n)=>t!=null?t:e!=null?e:n,WE=Yd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=vn(vc),s=Ut(()=>t.route||r.value),i=vn(Ch,0),o=Ut(()=>s.value.matched[i]);ji(Ch,i+1),ji(Gw,o),ji(vc,s);const a=Xv();return Rr(()=>[a.value,o.value,t.name],([c,u,l],[h,f,p])=>{u&&(u.instances[l]=c,f&&f!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Ur(u,f)||!h)&&(u.enterCallbacks[l]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=o.value,l=u&&u.components[t.name],h=t.name;if(!l)return Bh(n.default,{Component:l,route:c});const f=u.props[t.name],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,I=pp(l,de({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(u.instances[h]=null)},ref:a}));return Bh(n.default,{Component:I,route:c})||I}}});function Bh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const YE=WE;function XE(t){const e=IE(t.routes,t),n=t.parseQuery||$E,r=t.stringifyQuery||Lh,s=t.history,i=ps(),o=ps(),a=ps(),c=Qv(sn);let u=sn;br&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Aa.bind(null,w=>""+w),h=Aa.bind(null,VE),f=Aa.bind(null,so);function p(w,F){let N,$;return Ep(w)?(N=e.getRecordMatcher(w),$=F):$=w,e.addRoute($,N)}function m(w){const F=e.getRecordMatcher(w);F&&e.removeRoute(F)}function I(){return e.getRoutes().map(w=>w.record)}function v(w){return!!e.getRecordMatcher(w)}function S(w,F){if(F=de({},F||c.value),typeof w=="string"){const Z=ka(n,w,F.path),d=e.resolve({path:Z.path},F),g=s.createHref(Z.fullPath);return de(Z,d,{params:f(d.params),hash:so(Z.hash),redirectedFrom:void 0,href:g})}let N;if("path"in w)N=de({},w,{path:ka(n,w.path,F.path).path});else{const Z=de({},w.params);for(const d in Z)Z[d]==null&&delete Z[d];N=de({},w,{params:h(w.params)}),F.params=h(F.params)}const $=e.resolve(N,F),he=w.hash||"";$.params=l(f($.params));const ye=Qw(r,de({},w,{hash:UE(he),path:$.path})),te=s.createHref(ye);return de({fullPath:ye,hash:he,query:r===Lh?jE(w.query):w.query||{}},$,{redirectedFrom:void 0,href:te})}function D(w){return typeof w=="string"?ka(n,w,c.value.path):de({},w)}function B(w,F){if(u!==w)return Fr(8,{from:F,to:w})}function U(w){return Q(w)}function ie(w){return U(de(D(w),{replace:!0}))}function ue(w){const F=w.matched[w.matched.length-1];if(F&&F.redirect){const{redirect:N}=F;let $=typeof N=="function"?N(w):N;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=D($):{path:$},$.params={}),de({query:w.query,hash:w.hash,params:w.params},$)}}function Q(w,F){const N=u=S(w),$=c.value,he=w.state,ye=w.force,te=w.replace===!0,Z=ue(N);if(Z)return Q(de(D(Z),{state:he,force:ye,replace:te}),F||N);const d=N;d.redirectedFrom=F;let g;return!ye&&Jw(r,$,N)&&(g=Fr(16,{to:d,from:$}),dr($,$,!0,!1)),(g?Promise.resolve(g):ge(d,$)).catch(y=>on(y)?on(y,2)?y:lt(y):me(y,d,$)).then(y=>{if(y){if(on(y,2))return Q(de(D(y.to),{state:he,force:ye,replace:te}),F||d)}else y=We(d,$,!0,te,he);return Ge(d,$,y),y})}function _e(w,F){const N=B(w,F);return N?Promise.reject(N):Promise.resolve()}function ge(w,F){let N;const[$,he,ye]=QE(w,F);N=Ra($.reverse(),"beforeRouteLeave",w,F);for(const Z of $)Z.leaveGuards.forEach(d=>{N.push(ln(d,w,F))});const te=_e.bind(null,w,F);return N.push(te),mr(N).then(()=>{N=[];for(const Z of i.list())N.push(ln(Z,w,F));return N.push(te),mr(N)}).then(()=>{N=Ra(he,"beforeRouteUpdate",w,F);for(const Z of he)Z.updateGuards.forEach(d=>{N.push(ln(d,w,F))});return N.push(te),mr(N)}).then(()=>{N=[];for(const Z of w.matched)if(Z.beforeEnter&&!F.matched.includes(Z))if(Array.isArray(Z.beforeEnter))for(const d of Z.beforeEnter)N.push(ln(d,w,F));else N.push(ln(Z.beforeEnter,w,F));return N.push(te),mr(N)}).then(()=>(w.matched.forEach(Z=>Z.enterCallbacks={}),N=Ra(ye,"beforeRouteEnter",w,F),N.push(te),mr(N))).then(()=>{N=[];for(const Z of o.list())N.push(ln(Z,w,F));return N.push(te),mr(N)}).catch(Z=>on(Z,8)?Z:Promise.reject(Z))}function Ge(w,F,N){for(const $ of a.list())$(w,F,N)}function We(w,F,N,$,he){const ye=B(w,F);if(ye)return ye;const te=F===sn,Z=br?history.state:{};N&&($||te?s.replace(w.fullPath,de({scroll:te&&Z&&Z.scroll},he)):s.push(w.fullPath,he)),c.value=w,dr(w,F,N,te),lt()}let Ue;function nn(){Ue||(Ue=s.listen((w,F,N)=>{const $=S(w),he=ue($);if(he){Q(de(he,{replace:!0}),$).catch(As);return}u=$;const ye=c.value;br&&oE(Rh(ye.fullPath,N.delta),$o()),ge($,ye).catch(te=>on(te,12)?te:on(te,2)?(Q(te.to,$).then(Z=>{on(Z,20)&&!N.delta&&N.type===Bs.pop&&s.go(-1,!1)}).catch(As),Promise.reject()):(N.delta&&s.go(-N.delta,!1),me(te,$,ye))).then(te=>{te=te||We($,ye,!1),te&&(N.delta?s.go(-N.delta,!1):N.type===Bs.pop&&on(te,20)&&s.go(-1,!1)),Ge($,ye,te)}).catch(As)}))}let hr=ps(),fr=ps(),Ne;function me(w,F,N){lt(w);const $=fr.list();return $.length?$.forEach(he=>he(w,F,N)):console.error(w),Promise.reject(w)}function le(){return Ne&&c.value!==sn?Promise.resolve():new Promise((w,F)=>{hr.add([w,F])})}function lt(w){return Ne||(Ne=!w,nn(),hr.list().forEach(([F,N])=>w?N(w):F()),hr.reset()),w}function dr(w,F,N,$){const{scrollBehavior:he}=t;if(!br||!he)return Promise.resolve();const ye=!N&&aE(Rh(w.fullPath,0))||($||!N)&&history.state&&history.state.scroll||null;return Fd().then(()=>he(w,F,ye)).then(te=>te&&iE(te)).catch(te=>me(te,w,F))}const Ht=w=>s.go(w);let Ot;const vt=new Set;return{currentRoute:c,addRoute:p,removeRoute:m,hasRoute:v,getRoutes:I,resolve:S,options:t,push:U,replace:ie,go:Ht,back:()=>Ht(-1),forward:()=>Ht(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:fr.add,isReady:le,install(w){const F=this;w.component("RouterLink",KE),w.component("RouterView",YE),w.config.globalProperties.$router=F,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Is(c)}),br&&!Ot&&c.value===sn&&(Ot=!0,U(s.location).catch(he=>{}));const N={};for(const he in sn)N[he]=Ut(()=>c.value[he]);w.provide(vu,F),w.provide(vp,Jr(N)),w.provide(vc,c);const $=w.unmount;vt.add(w),w.unmount=function(){vt.delete(w),vt.size<1&&(u=sn,Ue&&Ue(),Ue=null,c.value=sn,Ot=!1,Ne=!1),$()}}}}function mr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function QE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ur(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ur(u,c))||s.push(c))}return[n,r,s]}/**
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
 */const Rp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},JE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Np={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(f=64)),r.push(n[l],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):JE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ZE=function(t){const e=Rp(t);return Np.encodeByteArray(e,!0)},Op=function(t){return ZE(t).replace(/\./g,"")},eb=function(t){try{return Np.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class tb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function xe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dp(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Pp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nb(){return xe().indexOf("Electron/")>=0}function Lp(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rb(){return xe().indexOf("MSAppHost/")>=0}function sb(){return typeof indexedDB=="object"}function ib(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ob="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ob,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ni.prototype.create)}}class ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ab(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new An(s,a,r)}}function ab(t,e){return t.replace(cb,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const cb=/\{\$([^}]+)}/g;function ub(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function io(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Vh(i)&&Vh(o)){if(!io(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Vh(t){return t!==null&&typeof t=="object"}/**
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
 */function ri(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _s(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ws(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lb(t,e){const n=new hb(t,e);return n.subscribe.bind(n)}class hb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Na),s.error===void 0&&(s.error=Na),s.complete===void 0&&(s.complete=Na);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Na(){}/**
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
 */function Se(t){return t&&t._delegate?t._delegate:t}class bn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xn="[DEFAULT]";/**
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
 */class db{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gb(e))try{this.getOrInitializeService({instanceIdentifier:xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xn){return this.instances.has(e)}getOptions(e=xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xn){return this.component?this.component.multipleInstances?e:xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pb(t){return t===xn?void 0:t}function gb(t){return t.instantiationMode==="EAGER"}/**
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
 */class mb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new db(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const yb={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},vb=oe.INFO,_b={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},wb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=_b[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wu{constructor(e){this.name=e,this._logLevel=vb,this._logHandler=wb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const Eb=(t,e)=>e.some(n=>t instanceof n);let $h,jh;function bb(){return $h||($h=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ib(){return jh||(jh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mp=new WeakMap,Ec=new WeakMap,Up=new WeakMap,Oa=new WeakMap,Eu=new WeakMap;function Tb(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_n(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Mp.set(n,t)}).catch(()=>{}),Eu.set(e,t),e}function Sb(t){if(Ec.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ec.set(t,e)}let bc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ec.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Up.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Cb(t){bc=t(bc)}function Ab(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Da(this),e,...n);return Up.set(r,e.sort?e.sort():[e]),_n(r)}:Ib().includes(t)?function(...e){return t.apply(Da(this),e),_n(Mp.get(this))}:function(...e){return _n(t.apply(Da(this),e))}}function kb(t){return typeof t=="function"?Ab(t):(t instanceof IDBTransaction&&Sb(t),Eb(t,bb())?new Proxy(t,bc):t)}function _n(t){if(t instanceof IDBRequest)return Tb(t);if(Oa.has(t))return Oa.get(t);const e=kb(t);return e!==t&&(Oa.set(t,e),Eu.set(e,t)),e}const Da=t=>Eu.get(t);function Rb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=_n(o);return r&&o.addEventListener("upgradeneeded",c=>{r(_n(o.result),c.oldVersion,c.newVersion,_n(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Nb=["get","getKey","getAll","getAllKeys","count"],Ob=["put","add","delete","clear"],Pa=new Map;function qh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pa.get(e))return Pa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ob.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Nb.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Pa.set(e,i),i}Cb(t=>Wl(Gl({},t),{get:(e,n,r)=>qh(e,n)||t.get(e,n,r),has:(e,n)=>!!qh(e,n)||t.has(e,n)}));/**
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
 */class Db{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Pb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ic="@firebase/app",Hh="0.7.24";/**
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
 */const bu=new wu("@firebase/app"),xb="@firebase/app-compat",Lb="@firebase/analytics-compat",Mb="@firebase/analytics",Ub="@firebase/app-check-compat",Fb="@firebase/app-check",Bb="@firebase/auth",Vb="@firebase/auth-compat",$b="@firebase/database",jb="@firebase/database-compat",qb="@firebase/functions",Hb="@firebase/functions-compat",Kb="@firebase/installations",zb="@firebase/installations-compat",Gb="@firebase/messaging",Wb="@firebase/messaging-compat",Yb="@firebase/performance",Xb="@firebase/performance-compat",Qb="@firebase/remote-config",Jb="@firebase/remote-config-compat",Zb="@firebase/storage",e0="@firebase/storage-compat",t0="@firebase/firestore",n0="@firebase/firestore-compat",r0="firebase",s0="9.8.1";/**
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
 */const Fp="[DEFAULT]",i0={[Ic]:"fire-core",[xb]:"fire-core-compat",[Mb]:"fire-analytics",[Lb]:"fire-analytics-compat",[Fb]:"fire-app-check",[Ub]:"fire-app-check-compat",[Bb]:"fire-auth",[Vb]:"fire-auth-compat",[$b]:"fire-rtdb",[jb]:"fire-rtdb-compat",[qb]:"fire-fn",[Hb]:"fire-fn-compat",[Kb]:"fire-iid",[zb]:"fire-iid-compat",[Gb]:"fire-fcm",[Wb]:"fire-fcm-compat",[Yb]:"fire-perf",[Xb]:"fire-perf-compat",[Qb]:"fire-rc",[Jb]:"fire-rc-compat",[Zb]:"fire-gcs",[e0]:"fire-gcs-compat",[t0]:"fire-fst",[n0]:"fire-fst-compat","fire-js":"fire-js",[r0]:"fire-js-all"};/**
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
 */const oo=new Map,Tc=new Map;function o0(t,e){try{t.container.addComponent(e)}catch(n){bu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wn(t){const e=t.name;if(Tc.has(e))return bu.debug(`There were multiple attempts to register component ${e}.`),!1;Tc.set(e,t);for(const n of oo.values())o0(n,t);return!0}function jo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const a0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Yn=new ni("app","Firebase",a0);/**
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
 */class c0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}}/**
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
 */const es=s0;function u0(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Fp,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Yn.create("bad-app-name",{appName:String(r)});const s=oo.get(r);if(s){if(io(t,s.options)&&io(n,s.config))return s;throw Yn.create("duplicate-app",{appName:r})}const i=new mb(r);for(const a of Tc.values())i.addComponent(a);const o=new c0(t,n,i);return oo.set(r,o),o}function Iu(t=Fp){const e=oo.get(t);if(!e)throw Yn.create("no-app",{appName:t});return e}function Bt(t,e,n){var r;let s=(r=i0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bu.warn(a.join(" "));return}Wn(new bn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const l0="firebase-heartbeat-database",h0=1,Vs="firebase-heartbeat-store";let xa=null;function Bp(){return xa||(xa=Rb(l0,h0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vs)}}}).catch(t=>{throw Yn.create("storage-open",{originalErrorMessage:t.message})})),xa}async function f0(t){try{return(await Bp()).transaction(Vs).objectStore(Vs).get(Vp(t))}catch(e){throw Yn.create("storage-get",{originalErrorMessage:e.message})}}async function Kh(t,e){try{const r=(await Bp()).transaction(Vs,"readwrite");return await r.objectStore(Vs).put(e,Vp(t)),r.done}catch(n){throw Yn.create("storage-set",{originalErrorMessage:n.message})}}function Vp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const d0=1024,p0=30*24*60*60*1e3;class g0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new y0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=zh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=p0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zh(),{heartbeatsToSend:n,unsentEntries:r}=m0(this._heartbeatsCache.heartbeats),s=Op(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function zh(){return new Date().toISOString().substring(0,10)}function m0(t,e=d0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Gh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Gh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class y0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sb()?ib().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await f0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Gh(t){return Op(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function v0(t){Wn(new bn("platform-logger",e=>new Db(e),"PRIVATE")),Wn(new bn("heartbeat",e=>new g0(e),"PRIVATE")),Bt(Ic,Hh,t),Bt(Ic,Hh,"esm2017"),Bt("fire-js","")}v0("");var _0="firebase",w0="9.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt(_0,w0,"app");function Tu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function $p(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const E0=$p,jp=new ni("auth","Firebase",$p());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=new wu("@firebase/auth");function Hi(t,...e){Wh.logLevel<=oe.ERROR&&Wh.error(`Auth (${es}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,...e){throw Su(t,...e)}function Vt(t,...e){return Su(t,...e)}function b0(t,e,n){const r=Object.assign(Object.assign({},E0()),{[e]:n});return new ni("auth","Firebase",r).create(e,{appName:t.name})}function Su(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jp.create(t,...e)}function K(t,e,...n){if(!t)throw Su(e,...n)}function Gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hi(e),new Error(e)}function Zt(t,e){t||Gt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=new Map;function Wt(t){Zt(t instanceof Function,"Expected a class definition");let e=Yh.get(t);return e?(Zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(t,e){const n=jo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(io(i,e!=null?e:{}))return s;Rt(s,"already-initialized")}return n.initialize({options:e})}function T0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function S0(){return Xh()==="http:"||Xh()==="https:"}function Xh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(S0()||Pp()||"connection"in navigator)?navigator.onLine:!0}function A0(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zt(n>e,"Short delay should be less than long delay!"),this.isMobile=Dp()||xp()}get(){return C0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t,e){Zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=new si(3e4,6e4);function ii(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ts(t,e,n,r,s={}){return Hp(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ri(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),qp.fetch()(Kp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Hp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},k0),e);try{const s=new N0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw La(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw La(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw La(t,"email-already-in-use",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw b0(t,l,u);Rt(t,l)}}catch(s){if(s instanceof An)throw s;Rt(t,"network-request-failed")}}async function oi(t,e,n,r,s={}){const i=await ts(t,e,n,r,s);return"mfaPendingCredential"in i&&Rt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Kp(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Cu(t.config,s):`${t.config.apiScheme}://${s}`}class N0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vt(this.auth,"network-request-failed")),R0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function La(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Vt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O0(t,e){return ts(t,"POST","/v1/accounts:delete",e)}async function D0(t,e){return ts(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function P0(t,e=!1){const n=Se(t),r=await n.getIdToken(e),s=Au(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Rs(Ma(s.auth_time)),issuedAtTime:Rs(Ma(s.iat)),expirationTime:Rs(Ma(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ma(t){return Number(t)*1e3}function Au(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Hi("JWT malformed, contained fewer than 3 sections"),null;try{const s=eb(n);return s?JSON.parse(s):(Hi("Failed to decode base64 JWT payload"),null)}catch(s){return Hi("Caught error parsing JWT payload as JSON",s),null}}function x0(t){const e=Au(t);return K(e,"internal-error"),K(typeof e.exp!="undefined","internal-error"),K(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&L0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function L0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rs(this.lastLoginAt),this.creationTime=Rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ao(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Br(t,D0(n,{idToken:r}));K(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?B0(i.providerUserInfo):[],a=F0(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new zp(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function U0(t){const e=Se(t);await ao(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function F0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function B0(t){return t.map(e=>{var{providerId:n}=e,r=Tu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V0(t,e){const n=await Hp(t,{},async()=>{const r=ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Kp(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken!="undefined","internal-error"),K(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):x0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await V0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new $s;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $s,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,e){K(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class qn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Tu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new M0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Br(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return P0(this,e)}reload(){return U0(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ao(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Br(this,O0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(u=n.createdAt)!==null&&u!==void 0?u:void 0,D=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:B,emailVerified:U,isAnonymous:ie,providerData:ue,stsTokenManager:Q}=n;K(B&&Q,e,"internal-error");const _e=$s.fromJSON(this.name,Q);K(typeof B=="string",e,"internal-error"),an(h,e.name),an(f,e.name),K(typeof U=="boolean",e,"internal-error"),K(typeof ie=="boolean",e,"internal-error"),an(p,e.name),an(m,e.name),an(I,e.name),an(v,e.name),an(S,e.name),an(D,e.name);const ge=new qn({uid:B,auth:e,email:f,emailVerified:U,displayName:h,isAnonymous:ie,photoURL:m,phoneNumber:p,tenantId:I,stsTokenManager:_e,createdAt:S,lastLoginAt:D});return ue&&Array.isArray(ue)&&(ge.providerData=ue.map(Ge=>Object.assign({},Ge))),v&&(ge._redirectEventId=v),ge}static async _fromIdTokenResponse(e,n,r=!1){const s=new $s;s.updateFromServerResponse(n);const i=new qn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ao(i),i}}/**
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
 */class Gp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gp.type="NONE";const Qh=Gp;/**
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
 */function Ki(t,e,n){return`firebase:${t}:${e}:${n}`}class Nr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ki(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ki("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Nr(Wt(Qh),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Wt(Qh);const o=Ki(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=qn._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Nr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Nr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jp(e))return"Blackberry";if(Zp(e))return"Webos";if(ku(e))return"Safari";if((e.includes("chrome/")||Yp(e))&&!e.includes("edge/"))return"Chrome";if(Qp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wp(t=xe()){return/firefox\//i.test(t)}function ku(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yp(t=xe()){return/crios\//i.test(t)}function Xp(t=xe()){return/iemobile/i.test(t)}function Qp(t=xe()){return/android/i.test(t)}function Jp(t=xe()){return/blackberry/i.test(t)}function Zp(t=xe()){return/webos/i.test(t)}function qo(t=xe()){return/iphone|ipad|ipod/i.test(t)}function $0(t=xe()){var e;return qo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function j0(){return Lp()&&document.documentMode===10}function eg(t=xe()){return qo(t)||Qp(t)||Zp(t)||Jp(t)||/windows phone/i.test(t)||Xp(t)}function q0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t,e=[]){let n;switch(t){case"Browser":n=Jh(xe());break;case"Worker":n=`${Jh(xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${r}`}/**
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
 */class H0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zh(this),this.idTokenSubscription=new Zh(this),this.beforeStateQueue=new H0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Nr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ao(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Se(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wt(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Nr.create(this,[Wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ho(t){return Se(t)}class Zh{constructor(e){this.auth=e,this.observer=null,this.addObserver=lb(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gt("not implemented")}_getIdTokenResponse(e){return Gt("not implemented")}_linkToIdToken(e,n){return Gt("not implemented")}_getReauthenticationResolver(e){return Gt("not implemented")}}async function z0(t,e){return ts(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G0(t,e){return oi(t,"POST","/v1/accounts:signInWithPassword",ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W0(t,e){return oi(t,"POST","/v1/accounts:signInWithEmailLink",ii(t,e))}async function Y0(t,e){return oi(t,"POST","/v1/accounts:signInWithEmailLink",ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends Ru{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new js(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new js(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return G0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return W0(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return z0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Y0(e,{idToken:n,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(t,e){return oi(t,"POST","/v1/accounts:signInWithIdp",ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="http://localhost";class Xn extends Ru{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Tu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Xn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Or(e,n)}buildRequest(){const e={requestUri:X0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ri(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function J0(t){const e=_s(ws(t)).link,n=e?_s(ws(e)).deep_link_id:null,r=_s(ws(t)).deep_link_id;return(r?_s(ws(r)).link:null)||r||n||e||t}class Nu{constructor(e){var n,r,s,i,o,a;const c=_s(ws(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Q0((s=c.mode)!==null&&s!==void 0?s:null);K(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=J0(e);try{return new Nu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.providerId=ns.PROVIDER_ID}static credential(e,n){return js._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Nu.parseLink(n);return K(r,"argument-error"),js._fromEmailAndCode(e,r.code,r.tenantId)}}ns.PROVIDER_ID="password";ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ai extends ng{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends ai{constructor(){super("facebook.com")}static credential(e){return Xn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends ai{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends ai{constructor(){super("github.com")}static credential(e){return Xn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends ai{constructor(){super("twitter.com")}static credential(e,n){return Xn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z0(t,e){return oi(t,"POST","/v1/accounts:signUp",ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await qn._fromIdTokenResponse(e,r,s),o=ef(r);return new Qn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ef(r);return new Qn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ef(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends An{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,co.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new co(e,n,r,s)}}function rg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?co._fromErrorAndOperation(t,i,e,r):i})}async function eI(t,e,n=!1){const r=await Br(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qn._forOperation(t,"link",r)}/**
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
 */async function tI(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Br(t,rg(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=Au(i.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),Qn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Rt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(t,e,n=!1){const r="signIn",s=await rg(t,r,e),i=await Qn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function nI(t,e){return sg(Ho(t),e)}async function rI(t,e,n){const r=Ho(t),s=await Z0(r,{returnSecureToken:!0,email:e,password:n}),i=await Qn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function sI(t,e,n){return nI(Se(t),ns.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(t,e){return ts(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Se(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Br(r,iI(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Dr(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function fN(t){return Se(t).signOut()}const uo="__sak";/**
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
 */class ig{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uo,"1"),this.storage.removeItem(uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(){const t=xe();return ku(t)||qo(t)}const cI=1e3,uI=10;class og extends ig{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aI()&&q0(),this.fallbackToPolling=eg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);j0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,uI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},cI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}og.type="LOCAL";const lI=og;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag extends ig{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ag.type="SESSION";const cg=ag;/**
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
 */function hI(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ko{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ko(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await hI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ko.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class fI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Ou("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return window}function dI(t){$t().location.href=t}/**
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
 */function ug(){return typeof $t().WorkerGlobalScope!="undefined"&&typeof $t().importScripts=="function"}async function pI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mI(){return ug()?self:null}/**
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
 */const lg="firebaseLocalStorageDb",yI=1,lo="firebaseLocalStorage",hg="fbase_key";class ci{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zo(t,e){return t.transaction([lo],e?"readwrite":"readonly").objectStore(lo)}function vI(){const t=indexedDB.deleteDatabase(lg);return new ci(t).toPromise()}function Cc(){const t=indexedDB.open(lg,yI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(lo,{keyPath:hg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(lo)?e(r):(r.close(),await vI(),e(await Cc()))})})}async function tf(t,e,n){const r=zo(t,!0).put({[hg]:e,value:n});return new ci(r).toPromise()}async function _I(t,e){const n=zo(t,!1).get(e),r=await new ci(n).toPromise();return r===void 0?null:r.value}function nf(t,e){const n=zo(t,!0).delete(e);return new ci(n).toPromise()}const wI=800,EI=3;class fg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>EI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ug()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ko._getInstance(mI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pI(),!this.activeServiceWorker)return;this.sender=new fI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cc();return await tf(e,uo,"1"),await nf(e,uo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_I(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=zo(s,!1).getAll();return new ci(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fg.type="LOCAL";const bI=fg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function TI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Vt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",II().appendChild(r)})}function SI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new si(3e4,6e4);/**
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
 */function CI(t,e){return e?Wt(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Du extends Ru{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AI(t){return sg(t.auth,new Du(t),t.bypassAuthState)}function kI(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),tI(n,new Du(t),t.bypassAuthState)}async function RI(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),eI(n,new Du(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AI;case"linkViaPopup":case"linkViaRedirect":return RI;case"reauthViaPopup":case"reauthViaRedirect":return kI;default:Rt(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=new si(2e3,1e4);class Ir extends dg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ir.currentPopupAction&&Ir.currentPopupAction.cancel(),Ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=Ou();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,NI.get())};e()}}Ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="pendingRedirect",zi=new Map;class DI extends dg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zi.get(this.auth._key());if(!e){try{const r=await PI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zi.set(this.auth._key(),e)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PI(t,e){const n=MI(e),r=LI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function xI(t,e){zi.set(t._key(),e)}function LI(t){return Wt(t._redirectPersistence)}function MI(t){return Ki(OI,t.config.apiKey,t.name)}async function UI(t,e,n=!1){const r=Ho(t),s=CI(r,e),o=await new DI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=10*60*1e3;class BI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FI&&this.cachedEventUids.clear(),this.cachedEventUids.has(rf(e))}saveEventToCache(e){this.cachedEventUids.add(rf(e)),this.lastProcessedEventTime=Date.now()}}function rf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(t,e={}){return ts(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qI=/^https?/;async function HI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $I(t);for(const n of e)try{if(KI(n))return}catch{}Rt(t,"unauthorized-domain")}function KI(t){const e=Sc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qI.test(n))return!1;if(jI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const zI=new si(3e4,6e4);function sf(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GI(t){return new Promise((e,n)=>{var r,s,i;function o(){sf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sf(),n(Vt(t,"network-request-failed"))},timeout:zI.get()})}if(!((s=(r=$t().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=$t().gapi)===null||i===void 0)&&i.load)o();else{const a=SI("iframefcb");return $t()[a]=()=>{gapi.load?o():n(Vt(t,"network-request-failed"))},TI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Gi=null,e})}let Gi=null;function WI(t){return Gi=Gi||GI(t),Gi}/**
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
 */const YI=new si(5e3,15e3),XI="__/auth/iframe",QI="emulator/auth/iframe",JI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eT(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cu(e,QI):`https://${t.config.authDomain}/${XI}`,r={apiKey:e.apiKey,appName:t.name,v:es},s=ZI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ri(r).slice(1)}`}async function tT(t){const e=await WI(t),n=$t().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:eT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),a=$t().setTimeout(()=>{i(o)},YI.get());function c(){$t().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const nT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rT=500,sT=600,iT="_blank",oT="http://localhost";class of{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aT(t,e,n,r=rT,s=sT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},nT),{width:r.toString(),height:s.toString(),top:i,left:o}),u=xe().toLowerCase();n&&(a=Yp(u)?iT:n),Wp(u)&&(e=e||oT,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if($0(u)&&a!=="_self")return cT(e||"",a),new of(null);const h=window.open(e||"",a,l);K(h,t,"popup-blocked");try{h.focus()}catch{}return new of(h)}function cT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const uT="__/auth/handler",lT="emulator/auth/handler";function af(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:es,eventId:s};if(e instanceof ng){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ub(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof ai){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${hT(t)}?${ri(a).slice(1)}`}function hT({config:t}){return t.emulator?Cu(t,lT):`https://${t.authDomain}/${uT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="webStorageSupport";class fT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cg,this._completeRedirectFn=UI,this._overrideRedirectResult=xI}async _openPopup(e,n,r,s){var i;Zt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=af(e,n,r,Sc(),s);return aT(e,o,Ou())}async _openRedirect(e,n,r,s){return await this._originValidation(e),dI(af(e,n,r,Sc(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Zt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tT(e),r=new BI(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ua,{type:Ua},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ua];o!==void 0&&n(!!o),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eg()||ku()||qo()}}const dT=fT;var cf="@firebase/auth",uf="0.20.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mT(t){Wn(new bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{K(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),K(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tg(t)},l=new K0(a,c,u);return T0(l,n),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wn(new bn("auth-internal",e=>{const n=Ho(e.getProvider("auth").getImmediate());return(r=>new pT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(cf,uf,gT(t)),Bt(cf,uf,"esm2017")}/**
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
 */function yT(t=Iu()){const e=jo(t,"auth");return e.isInitialized()?e.getImmediate():I0(t,{popupRedirectResolver:dT,persistence:[bI,lI,cg]})}mT("Browser");var vT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},L,Pu=Pu||{},z=vT||self;function ho(){}function Ac(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ui(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function _T(t){return Object.prototype.hasOwnProperty.call(t,Fa)&&t[Fa]||(t[Fa]=++wT)}var Fa="closure_uid_"+(1e9*Math.random()>>>0),wT=0;function ET(t,e,n){return t.call.apply(t.bind,arguments)}function bT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function $e(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$e=ET:$e=bT,$e.apply(null,arguments)}function Oi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function kn(){this.s=this.s,this.o=this.o}var IT=0,TT={};kn.prototype.s=!1;kn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),IT!=0)){var t=_T(this);delete TT[t]}};kn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const gg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},mg=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function ST(t){e:{var e=mS;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function lf(t){return Array.prototype.concat.apply([],arguments)}function xu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function fo(t){return/^[\s\xa0]*$/.test(t)}var hf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function tt(t,e){return t.indexOf(e)!=-1}function Ba(t,e){return t<e?-1:t>e?1:0}var nt;e:{var ff=z.navigator;if(ff){var df=ff.userAgent;if(df){nt=df;break e}}nt=""}function Lu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function yg(t){const e={};for(const n in t)e[n]=t[n];return e}var pf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<pf.length;i++)n=pf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Mu(t){return Mu[" "](t),t}Mu[" "]=ho;function CT(t){var e=RT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var AT=tt(nt,"Opera"),Vr=tt(nt,"Trident")||tt(nt,"MSIE"),_g=tt(nt,"Edge"),kc=_g||Vr,wg=tt(nt,"Gecko")&&!(tt(nt.toLowerCase(),"webkit")&&!tt(nt,"Edge"))&&!(tt(nt,"Trident")||tt(nt,"MSIE"))&&!tt(nt,"Edge"),kT=tt(nt.toLowerCase(),"webkit")&&!tt(nt,"Edge");function Eg(){var t=z.document;return t?t.documentMode:void 0}var po;e:{var Va="",$a=function(){var t=nt;if(wg)return/rv:([^\);]+)(\)|;)/.exec(t);if(_g)return/Edge\/([\d\.]+)/.exec(t);if(Vr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(kT)return/WebKit\/(\S+)/.exec(t);if(AT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($a&&(Va=$a?$a[1]:""),Vr){var ja=Eg();if(ja!=null&&ja>parseFloat(Va)){po=String(ja);break e}}po=Va}var RT={};function NT(){return CT(function(){let t=0;const e=hf(String(po)).split("."),n=hf("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Ba(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Ba(s[2].length==0,i[2].length==0)||Ba(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Rc;if(z.document&&Vr){var gf=Eg();Rc=gf||parseInt(po,10)||void 0}else Rc=void 0;var OT=Rc,DT=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",ho,e),z.removeEventListener("test",ho,e)}catch{}return t}();function Xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};function qs(t,e){if(Xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(wg){e:{try{Mu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:PT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&qs.Z.h.call(this)}}ze(qs,Xe);var PT={2:"touch",3:"pen",4:"mouse"};qs.prototype.h=function(){qs.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var li="closure_listenable_"+(1e6*Math.random()|0),xT=0;function LT(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++xT,this.ca=this.fa=!1}function Go(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Wo(t){this.src=t,this.g={},this.h=0}Wo.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Oc(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new LT(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function Nc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=gg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Go(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Oc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var Uu="closure_lm_"+(1e6*Math.random()|0),qa={};function bg(t,e,n,r,s){if(r&&r.once)return Tg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)bg(t,e[i],n,r,s);return null}return n=Vu(n),t&&t[li]?t.N(e,n,ui(r)?!!r.capture:!!r,s):Ig(t,e,n,!1,r,s)}function Ig(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ui(s)?!!s.capture:!!s,a=Bu(t);if(a||(t[Uu]=a=new Wo(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=MT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)DT||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Cg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function MT(){function t(n){return e.call(t.src,t.listener,n)}var e=UT;return t}function Tg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Tg(t,e[i],n,r,s);return null}return n=Vu(n),t&&t[li]?t.O(e,n,ui(r)?!!r.capture:!!r,s):Ig(t,e,n,!0,r,s)}function Sg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Sg(t,e[i],n,r,s);else r=ui(r)?!!r.capture:!!r,n=Vu(n),t&&t[li]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Oc(i,n,r,s),-1<n&&(Go(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Bu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Oc(e,n,r,s)),(n=-1<t?e[t]:null)&&Fu(n))}function Fu(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[li])Nc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Cg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Bu(e))?(Nc(n,t),n.h==0&&(n.src=null,e[Uu]=null)):Go(t)}}}function Cg(t){return t in qa?qa[t]:qa[t]="on"+t}function UT(t,e){if(t.ca)t=!0;else{e=new qs(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Fu(t),t=n.call(r,e)}return t}function Bu(t){return t=t[Uu],t instanceof Wo?t:null}var Ha="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vu(t){return typeof t=="function"?t:(t[Ha]||(t[Ha]=function(e){return t.handleEvent(e)}),t[Ha])}function Le(){kn.call(this),this.i=new Wo(this),this.P=this,this.I=null}ze(Le,kn);Le.prototype[li]=!0;Le.prototype.removeEventListener=function(t,e,n,r){Sg(this,t,e,n,r)};function je(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Xe(e,t);else if(e instanceof Xe)e.target=e.target||t;else{var s=e;e=new Xe(r,t),vg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Di(o,r,!0,e)&&s}if(o=e.g=t,s=Di(o,r,!0,e)&&s,s=Di(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Di(o,r,!1,e)&&s}Le.prototype.M=function(){if(Le.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Go(n[r]);delete t.g[e],t.h--}}this.I=null};Le.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Le.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Di(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Nc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var $u=z.JSON.stringify;function FT(){var t=kg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class BT{constructor(){this.h=this.g=null}add(e,n){const r=Ag.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ag=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new VT,t=>t.reset());class VT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function $T(t){z.setTimeout(()=>{throw t},0)}function ju(t,e){Dc||jT(),Pc||(Dc(),Pc=!0),kg.add(t,e)}var Dc;function jT(){var t=z.Promise.resolve(void 0);Dc=function(){t.then(qT)}}var Pc=!1,kg=new BT;function qT(){for(var t;t=FT();){try{t.h.call(t.g)}catch(n){$T(n)}var e=Ag;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Pc=!1}function Yo(t,e){Le.call(this),this.h=t||1,this.g=e||z,this.j=$e(this.kb,this),this.l=Date.now()}ze(Yo,Le);L=Yo.prototype;L.da=!1;L.S=null;L.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),je(this,"tick"),this.da&&(qu(this),this.start()))}};L.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qu(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}L.M=function(){Yo.Z.M.call(this),qu(this),delete this.g};function Hu(t,e,n){if(typeof t=="function")n&&(t=$e(t,n));else if(t&&typeof t.handleEvent=="function")t=$e(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function Rg(t){t.g=Hu(()=>{t.g=null,t.i&&(t.i=!1,Rg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class HT extends kn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Rg(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hs(t){kn.call(this),this.h=t,this.g={}}ze(Hs,kn);var mf=[];function Ng(t,e,n,r){Array.isArray(n)||(n&&(mf[0]=n.toString()),n=mf);for(var s=0;s<n.length;s++){var i=bg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Og(t){Lu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Fu(e)},t),t.g={}}Hs.prototype.M=function(){Hs.Z.M.call(this),Og(this)};Hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xo(){this.g=!0}Xo.prototype.Aa=function(){this.g=!1};function KT(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function zT(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Tr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+WT(t,n)+(r?" "+r:"")})}function GT(t,e){t.info(function(){return"TIMEOUT: "+e})}Xo.prototype.info=function(){};function WT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return $u(n)}catch{return e}}var or={},yf=null;function Qo(){return yf=yf||new Le}or.Ma="serverreachability";function Dg(t){Xe.call(this,or.Ma,t)}ze(Dg,Xe);function Ks(t){const e=Qo();je(e,new Dg(e,t))}or.STAT_EVENT="statevent";function Pg(t,e){Xe.call(this,or.STAT_EVENT,t),this.stat=e}ze(Pg,Xe);function rt(t){const e=Qo();je(e,new Pg(e,t))}or.Na="timingevent";function xg(t,e){Xe.call(this,or.Na,t),this.size=e}ze(xg,Xe);function hi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var Jo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Lg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ku(){}Ku.prototype.h=null;function vf(t){return t.h||(t.h=t.i())}function Mg(){}var fi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function zu(){Xe.call(this,"d")}ze(zu,Xe);function Gu(){Xe.call(this,"c")}ze(Gu,Xe);var xc;function Zo(){}ze(Zo,Ku);Zo.prototype.g=function(){return new XMLHttpRequest};Zo.prototype.i=function(){return{}};xc=new Zo;function di(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Hs(this),this.P=YT,t=kc?125:void 0,this.W=new Yo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ug}function Ug(){this.i=null,this.g="",this.h=!1}var YT=45e3,Lc={},go={};L=di.prototype;L.setTimeout=function(t){this.P=t};function Mc(t,e,n){t.K=1,t.v=ta(en(e)),t.s=n,t.U=!0,Fg(t,null)}function Fg(t,e){t.F=Date.now(),pi(t),t.A=en(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Kg(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ug,t.g=hm(t.l,n?e:null,!t.s),0<t.O&&(t.L=new HT($e(t.Ia,t,t.g),t.O)),Ng(t.V,t.g,"readystatechange",t.gb),e=t.H?yg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ks(1),KT(t.j,t.u,t.A,t.m,t.X,t.s)}L.gb=function(t){t=t.target;const e=this.L;e&&Yt(t)==3?e.l():this.Ia(t)};L.Ia=function(t){try{if(t==this.g)e:{const l=Yt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||kc||this.g&&(this.h.h||this.g.ga()||bf(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Ks(3):Ks(2)),ea(this);var n=this.g.ba();this.N=n;t:if(Bg(this)){var r=bf(this.g);t="";var s=r.length,i=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Fn(this),Ns(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,zT(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fo(a)){var u=a;break t}}u=null}if(n=u)Tr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Uc(this,n);else{this.i=!1,this.o=3,rt(12),Fn(this),Ns(this);break e}}this.U?(Vg(this,l,o),kc&&this.i&&l==3&&(Ng(this.V,this.W,"tick",this.fb),this.W.start())):(Tr(this.j,this.m,o,null),Uc(this,o)),l==4&&Fn(this),this.i&&!this.I&&(l==4?am(this.l,this):(this.i=!1,pi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),Fn(this),Ns(this)}}}catch{}finally{}};function Bg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Vg(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=XT(t,n),s==go){e==4&&(t.o=4,rt(14),r=!1),Tr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Lc){t.o=4,rt(15),Tr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Tr(t.j,t.m,s,null),Uc(t,s);Bg(t)&&s!=go&&s!=Lc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,rt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),nl(e),e.L=!0,rt(11))):(Tr(t.j,t.m,n,"[Invalid Chunked Response]"),Fn(t),Ns(t))}L.fb=function(){if(this.g){var t=Yt(this.g),e=this.g.ga();this.C<e.length&&(ea(this),Vg(this,t,e),this.i&&t!=4&&pi(this))}};function XT(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?go:(n=Number(e.substring(n,r)),isNaN(n)?Lc:(r+=1,r+n>e.length?go:(e=e.substr(r,n),t.C=r+n,e)))}L.cancel=function(){this.I=!0,Fn(this)};function pi(t){t.Y=Date.now()+t.P,$g(t,t.P)}function $g(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=hi($e(t.eb,t),e)}function ea(t){t.B&&(z.clearTimeout(t.B),t.B=null)}L.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(GT(this.j,this.A),this.K!=2&&(Ks(3),rt(17)),Fn(this),this.o=2,Ns(this)):$g(this,this.Y-t)};function Ns(t){t.l.G==0||t.I||am(t.l,t)}function Fn(t){ea(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,qu(t.W),Og(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Uc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Fc(n.i,t))){if(n.I=t.N,!t.J&&Fc(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)_o(n),sa(n);else break e;tl(n),rt(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=hi($e(n.ab,n),6e3));if(1>=Wg(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Bn(n,11)}else if((t.J||n.g==t)&&_o(n),!fo(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;!i.g&&(tt(m,"spdy")||tt(m,"quic")||tt(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Xu(i,i.h),i.h=null))}if(r.D){const I=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.sa=I,Te(r.F,r.D,I))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=lm(r,r.H?r.la:null,r.W),o.J){Yg(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(ea(a),pi(a)),r.g=o}else im(r);0<n.l.length&&ia(n)}else u[0]!="stop"&&u[0]!="close"||Bn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Bn(n,7):el(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Ks(4)}catch{}}function QT(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Ac(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Wu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ac(t)||typeof t=="string")mg(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Ac(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=QT(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function rs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof rs)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}L=rs.prototype;L.R=function(){Yu(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};L.T=function(){return Yu(this),this.g.concat()};function Yu(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Jn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Jn(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}L.get=function(t,e){return Jn(this.h,t)?this.h[t]:e};L.set=function(t,e){Jn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};L.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function Jn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var jg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function JT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Zn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Zn){this.g=e!==void 0?e:t.g,mo(this,t.j),this.s=t.s,yo(this,t.i),vo(this,t.m),this.l=t.l,e=t.h;var n=new zs;n.i=e.i,e.g&&(n.g=new rs(e.g),n.h=e.h),_f(this,n),this.o=t.o}else t&&(n=String(t).match(jg))?(this.g=!!e,mo(this,n[1]||"",!0),this.s=Os(n[2]||""),yo(this,n[3]||"",!0),vo(this,n[4]),this.l=Os(n[5]||"",!0),_f(this,n[6]||"",!0),this.o=Os(n[7]||"")):(this.g=!!e,this.h=new zs(null,this.g))}Zn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Es(e,wf,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Es(e,wf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Es(n,n.charAt(0)=="/"?rS:nS,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Es(n,iS)),t.join("")};function en(t){return new Zn(t)}function mo(t,e,n){t.j=n?Os(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function yo(t,e,n){t.i=n?Os(e,!0):e}function vo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function _f(t,e,n){e instanceof zs?(t.h=e,oS(t.h,t.g)):(n||(e=Es(e,sS)),t.h=new zs(e,t.g))}function Te(t,e,n){t.h.set(e,n)}function ta(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ZT(t){return t instanceof Zn?en(t):new Zn(t,void 0)}function eS(t,e,n,r){var s=new Zn(null,void 0);return t&&mo(s,t),e&&yo(s,e),n&&vo(s,n),r&&(s.l=r),s}function Os(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Es(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,tS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function tS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var wf=/[#\/\?@]/g,nS=/[#\?:]/g,rS=/[#\?]/g,sS=/[#\?@]/g,iS=/#/g;function zs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Rn(t){t.g||(t.g=new rs,t.h=0,t.i&&JT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=zs.prototype;L.add=function(t,e){Rn(this),this.i=null,t=ss(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function qg(t,e){Rn(t),e=ss(t,e),Jn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Jn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Yu(t)))}function Hg(t,e){return Rn(t),e=ss(t,e),Jn(t.g.h,e)}L.forEach=function(t,e){Rn(this),this.g.forEach(function(n,r){mg(n,function(s){t.call(e,s,r,this)},this)},this)};L.T=function(){Rn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};L.R=function(t){Rn(this);var e=[];if(typeof t=="string")Hg(this,t)&&(e=lf(e,this.g.get(ss(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=lf(e,t[n])}return e};L.set=function(t,e){return Rn(this),this.i=null,t=ss(this,t),Hg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Kg(t,e,n){qg(t,e),0<n.length&&(t.i=null,t.g.set(ss(t,e),xu(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function ss(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function oS(t,e){e&&!t.j&&(Rn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(qg(this,r),Kg(this,s,n))},t)),t.j=e}var aS=class{constructor(t,e){this.h=t,this.g=e}};function zg(t){this.l=t||cS,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ea&&z.g.Ea()&&z.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cS=10;function Gg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Wg(t){return t.h?1:t.g?t.g.size:0}function Fc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Xu(t,e){t.g?t.g.add(e):t.h=e}function Yg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zg.prototype.cancel=function(){if(this.i=Xg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Xg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return xu(t.i)}function Qu(){}Qu.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};Qu.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function uS(){this.g=new Qu}function lS(t,e,n){const r=n||"";try{Wu(t,function(s,i){let o=s;ui(s)&&(o=$u(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function hS(t,e){const n=new Xo;if(z.Image){const r=new Image;r.onload=Oi(Pi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Oi(Pi,n,r,"TestLoadImage: error",!1,e),r.onabort=Oi(Pi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Oi(Pi,n,r,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Pi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function gi(t){this.l=t.$b||null,this.j=t.ib||!1}ze(gi,Ku);gi.prototype.g=function(){return new na(this.l,this.j)};gi.prototype.i=function(t){return function(){return t}}({});function na(t,e){Le.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ju,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(na,Le);var Ju=0;L=na.prototype;L.open=function(t,e){if(this.readyState!=Ju)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Gs(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mi(this)),this.readyState=Ju};L.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Gs(this)),this.g&&(this.readyState=3,Gs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof z.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Qg(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Qg(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}L.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?mi(this):Gs(this),this.readyState==3&&Qg(this)}};L.Ua=function(t){this.g&&(this.response=this.responseText=t,mi(this))};L.Ta=function(t){this.g&&(this.response=t,mi(this))};L.ha=function(){this.g&&mi(this)};function mi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Gs(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Gs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(na.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var fS=z.JSON.parse;function Re(t){Le.call(this),this.headers=new rs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Jg,this.K=this.L=!1}ze(Re,Le);var Jg="",dS=/^https?$/i,pS=["POST","PUT"];L=Re.prototype;L.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():xc.g(),this.C=this.u?vf(this.u):vf(xc),this.g.onreadystatechange=$e(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ef(this,i);return}t=n||"";const s=new rs(this.headers);r&&Wu(r,function(i,o){s.set(o,i)}),r=ST(s.T()),n=z.FormData&&t instanceof z.FormData,!(0<=gg(pS,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{tm(this),0<this.B&&((this.K=gS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$e(this.pa,this)):this.A=Hu(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ef(this,i)}};function gS(t){return Vr&&NT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function mS(t){return t.toLowerCase()=="content-type"}L.pa=function(){typeof Pu!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,je(this,"timeout"),this.abort(8))};function Ef(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Zg(t),ra(t)}function Zg(t){t.D||(t.D=!0,je(t,"complete"),je(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,je(this,"complete"),je(this,"abort"),ra(this))};L.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ra(this,!0)),Re.Z.M.call(this)};L.Fa=function(){this.s||(this.F||this.v||this.l?em(this):this.cb())};L.cb=function(){em(this)};function em(t){if(t.h&&typeof Pu!="undefined"&&(!t.C[1]||Yt(t)!=4||t.ba()!=2)){if(t.v&&Yt(t)==4)Hu(t.Fa,0,t);else if(je(t,"readystatechange"),Yt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(jg)[1]||null;if(!s&&z.self&&z.self.location){var i=z.self.location.protocol;s=i.substr(0,i.length-1)}r=!dS.test(s?s.toLowerCase():"")}n=r}if(n)je(t,"complete"),je(t,"success");else{t.m=6;try{var o=2<Yt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Zg(t)}}finally{ra(t)}}}}function ra(t,e){if(t.g){tm(t);const n=t.g,r=t.C[0]?ho:null;t.g=null,t.C=null,e||je(t,"ready");try{n.onreadystatechange=r}catch{}}}function tm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function Yt(t){return t.g?t.g.readyState:0}L.ba=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}};L.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),fS(e)}};function bf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Jg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}L.Da=function(){return this.m};L.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function yS(t){let e="";return Lu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Zu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=yS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function gs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function nm(t){this.za=0,this.l=[],this.h=new Xo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=gs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=gs("baseRetryDelayMs",5e3,t),this.$a=gs("retryDelaySeedMs",1e4,t),this.Ya=gs("forwardChannelMaxRetries",2,t),this.ra=gs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new zg(t&&t.concurrentRequestLimit),this.Ca=new uS,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}L=nm.prototype;L.ma=8;L.G=1;function el(t){if(rm(t),t.G==3){var e=t.V++,n=en(t.F);Te(n,"SID",t.J),Te(n,"RID",e),Te(n,"TYPE","terminate"),yi(t,n),e=new di(t,t.h,e,void 0),e.K=2,e.v=ta(en(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=hm(e.l,null),e.g.ea(e.v)),e.F=Date.now(),pi(e)}um(t)}L.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function sa(t){t.g&&(nl(t),t.g.cancel(),t.g=null)}function rm(t){sa(t),t.u&&(z.clearTimeout(t.u),t.u=null),_o(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Ka(t,e){t.l.push(new aS(t.Za++,e)),t.G==3&&ia(t)}function ia(t){Gg(t.i)||t.m||(t.m=!0,ju(t.Ha,t),t.C=0)}function vS(t,e){return Wg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=hi($e(t.Ha,t,e),cm(t,t.C)),t.C++,!0)}L.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new di(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=yg(i),vg(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=sm(this,s,e),n=en(this.F),Te(n,"RID",t),Te(n,"CVER",22),this.D&&Te(n,"X-HTTP-Session-Id",this.D),yi(this,n),this.o&&i&&Zu(n,this.o,i),Xu(this.i,s),this.Ra&&Te(n,"TYPE","init"),this.ja?(Te(n,"$req",e),Te(n,"SID","null"),s.$=!0,Mc(s,n,null)):Mc(s,n,e),this.G=2}}else this.G==3&&(t?If(this,t):this.l.length==0||Gg(this.i)||If(this))};function If(t,e){var n;e?n=e.m:n=t.V++;const r=en(t.F);Te(r,"SID",t.J),Te(r,"RID",n),Te(r,"AID",t.U),yi(t,r),t.o&&t.s&&Zu(r,t.o,t.s),n=new di(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=sm(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Xu(t.i,n),Mc(n,r,e)}function yi(t,e){t.j&&Wu({},function(n,r){Te(e,r,n)})}function sm(t,e,n){n=Math.min(t.l.length,n);var r=t.j?$e(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{lS(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function im(t){t.g||t.u||(t.Y=1,ju(t.Ga,t),t.A=0)}function tl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=hi($e(t.Ga,t),cm(t,t.A)),t.A++,!0)}L.Ga=function(){if(this.u=null,om(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=hi($e(this.bb,this),t)}};L.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,rt(10),sa(this),om(this))};function nl(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function om(t){t.g=new di(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=en(t.oa);Te(e,"RID","rpc"),Te(e,"SID",t.J),Te(e,"CI",t.N?"0":"1"),Te(e,"AID",t.U),yi(t,e),Te(e,"TYPE","xmlhttp"),t.o&&t.s&&Zu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ta(en(e)),n.s=null,n.U=!0,Fg(n,t)}L.ab=function(){this.v!=null&&(this.v=null,sa(this),tl(this),rt(19))};function _o(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function am(t,e){var n=null;if(t.g==e){_o(t),nl(t),t.g=null;var r=2}else if(Fc(t.i,e))n=e.D,Yg(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Qo(),je(r,new xg(r,n,e,s)),ia(t)}else im(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&vS(t,e)||r==2&&tl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Bn(t,5);break;case 4:Bn(t,10);break;case 3:Bn(t,6);break;default:Bn(t,2)}}}function cm(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Bn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=$e(t.jb,t);n||(n=new Zn("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||mo(n,"https"),ta(n)),hS(n.toString(),r)}else rt(2);t.G=0,t.j&&t.j.va(e),um(t),rm(t)}L.jb=function(t){t?(this.h.info("Successfully pinged google.com"),rt(2)):(this.h.info("Failed to ping google.com"),rt(1))};function um(t){t.G=0,t.I=-1,t.j&&((Xg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,xu(t.l),t.l.length=0),t.j.ua())}function lm(t,e,n){let r=ZT(n);if(r.i!="")e&&yo(r,e+"."+r.i),vo(r,r.m);else{const s=z.location;r=eS(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Lu(t.aa,function(s,i){Te(r,i,s)}),e=t.D,n=t.sa,e&&n&&Te(r,e,n),Te(r,"VER",t.ma),yi(t,r),r}function hm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Re(new gi({ib:!0})):new Re(t.qa),e.L=t.H,e}function fm(){}L=fm.prototype;L.xa=function(){};L.wa=function(){};L.va=function(){};L.ua=function(){};L.Oa=function(){};function wo(){if(Vr&&!(10<=Number(OT)))throw Error("Environmental error: no available transport.")}wo.prototype.g=function(t,e){return new yt(t,e)};function yt(t,e){Le.call(this),this.g=new nm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!fo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!fo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new is(this)}ze(yt,Le);yt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),ju($e(t.hb,t,e))),rt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=lm(t,null,t.W),ia(t)};yt.prototype.close=function(){el(this.g)};yt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Ka(this.g,e)}else this.v?(e={},e.__data__=$u(t),Ka(this.g,e)):Ka(this.g,t)};yt.prototype.M=function(){this.g.j=null,delete this.j,el(this.g),delete this.g,yt.Z.M.call(this)};function dm(t){zu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(dm,zu);function pm(){Gu.call(this),this.status=1}ze(pm,Gu);function is(t){this.g=t}ze(is,fm);is.prototype.xa=function(){je(this.g,"a")};is.prototype.wa=function(t){je(this.g,new dm(t))};is.prototype.va=function(t){je(this.g,new pm(t))};is.prototype.ua=function(){je(this.g,"b")};wo.prototype.createWebChannel=wo.prototype.g;yt.prototype.send=yt.prototype.u;yt.prototype.open=yt.prototype.m;yt.prototype.close=yt.prototype.close;Jo.NO_ERROR=0;Jo.TIMEOUT=8;Jo.HTTP_ERROR=6;Lg.COMPLETE="complete";Mg.EventType=fi;fi.OPEN="a";fi.CLOSE="b";fi.ERROR="c";fi.MESSAGE="d";Le.prototype.listen=Le.prototype.N;Re.prototype.listenOnce=Re.prototype.O;Re.prototype.getLastError=Re.prototype.La;Re.prototype.getLastErrorCode=Re.prototype.Da;Re.prototype.getStatus=Re.prototype.ba;Re.prototype.getResponseJson=Re.prototype.Qa;Re.prototype.getResponseText=Re.prototype.ga;Re.prototype.send=Re.prototype.ea;var _S=function(){return new wo},wS=function(){return Qo()},za=Jo,ES=Lg,bS=or,Tf={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},IS=gi,xi=Mg,TS=Re;const Sf="@firebase/firestore";/**
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
 */let os="9.8.0";/**
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
 */const er=new wu("@firebase/firestore");function Cf(){return er.logLevel}function V(t,...e){if(er.logLevel<=oe.DEBUG){const n=e.map(rl);er.debug(`Firestore (${os}): ${t}`,...n)}}function In(t,...e){if(er.logLevel<=oe.ERROR){const n=e.map(rl);er.error(`Firestore (${os}): ${t}`,...n)}}function Af(t,...e){if(er.logLevel<=oe.WARN){const n=e.map(rl);er.warn(`Firestore (${os}): ${t}`,...n)}}function rl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function W(t="Unexpected state"){const e=`FIRESTORE (${os}) INTERNAL ASSERTION FAILED: `+t;throw In(e),new Error(e)}function ve(t,e){t||W()}function X(t,e){return t}/**
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
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class SS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class AS{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Xt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Xt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new SS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new at(e)}}class kS{constructor(e,n,r){this.type="FirstParty",this.user=at.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class RS{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new kS(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class NS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OS{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.p=n.token,new NS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class sl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */sl.A=-1;class gm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=DS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function $r(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Qe(0,0))}static max(){return new ee(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function kf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ar(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ws{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(),r===void 0?r=e.length-n:r>e.length-n&&W(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ws.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ws?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Ws{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const PS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Ws{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return PS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new x(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new x(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new x(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.fields=e,e.sort(ct.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $r(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ke(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const xS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tn(t){if(ve(!!t),typeof t=="string"){let e=0;const n=xS.exec(t);if(ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vm(t){const e=t.mapValue.fields.__previous_value__;return ym(e)?vm(e):e}function Xs(t){const e=Tn(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class LS{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class qr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function oa(t){return t==null}function Eo(t){return t===0&&1/t==-1/0}function MS(t){return typeof t=="number"&&Number.isInteger(t)&&!Eo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Ee.fromString(e))}static fromName(e){return new j(Ee.fromString(e).popFirst(5))}static empty(){return new j(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Ee(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function tr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ym(t)?4:US(t)?9007199254740991:10:W()}function qt(t,e){if(t===e)return!0;const n=tr(t);if(n!==tr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xs(t).isEqual(Xs(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Tn(r.timestampValue),o=Tn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return jr(r.bytesValue).isEqual(jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return ke(r.geoPointValue.latitude)===ke(s.geoPointValue.latitude)&&ke(r.geoPointValue.longitude)===ke(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return ke(r.integerValue)===ke(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=ke(r.doubleValue),o=ke(s.doubleValue);return i===o?Eo(i)===Eo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return $r(t.arrayValue.values||[],e.arrayValue.values||[],qt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(kf(i)!==kf(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!qt(i[a],o[a])))return!1;return!0}(t,e);default:return W()}}function Qs(t,e){return(t.values||[]).find(n=>qt(n,e))!==void 0}function Hr(t,e){if(t===e)return 0;const n=tr(t),r=tr(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=ke(s.integerValue||s.doubleValue),a=ke(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Rf(t.timestampValue,e.timestampValue);case 4:return Rf(Xs(t),Xs(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,i){const o=jr(s),a=jr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ce(o[c],a[c]);if(u!==0)return u}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ce(ke(s.latitude),ke(i.latitude));return o!==0?o:ce(ke(s.longitude),ke(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Hr(o[c],a[c]);if(u)return u}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Li.mapValue&&i===Li.mapValue)return 0;if(s===Li.mapValue)return 1;if(i===Li.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ce(a[l],u[l]);if(h!==0)return h;const f=Hr(o[a[l]],c[u[l]]);if(f!==0)return f}return ce(a.length,u.length)}(t.mapValue,e.mapValue);default:throw W()}}function Rf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Tn(t),r=Tn(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function Pr(t){return Bc(t)}function Bc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Tn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?jr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Bc(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Bc(r.fields[a])}`;return i+"}"}(t.mapValue):W();var e,n}function Nf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vc(t){return!!t&&"integerValue"in t}function il(t){return!!t&&"arrayValue"in t}function Of(t){return!!t&&"nullValue"in t}function Df(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wi(t){return!!t&&"mapValue"in t}function Ds(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ar(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ds(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ds(t.arrayValue.values[n]);return e}return Object.assign({},t)}function US(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ds(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Wi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Wi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ar(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new pt(Ds(this.value))}}function _m(t){const e=[];return ar(t.fields,(n,r)=>{const s=new ct([n]);if(Wi(r)){const i=_m(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ys(e)}/**
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
 */class Ye{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ye(e,0,ee.min(),ee.min(),pt.empty(),0)}static newFoundDocument(e,n,r){return new Ye(e,1,n,ee.min(),r,0)}static newNoDocument(e,n){return new Ye(e,2,n,ee.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new Ye(e,3,n,ee.min(),pt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function FS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new nr(s,j.empty(),e)}function BS(t){return new nr(t.readTime,t.key,-1)}class nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new nr(ee.min(),j.empty(),-1)}static max(){return new nr(ee.max(),j.empty(),-1)}}function VS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */class Me{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mi(this.root,e,this.comparator,!0)}}class Mi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Fe.RED,this.left=s!=null?s:Fe.EMPTY,this.right=i!=null?i:Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Fe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Fe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Fe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Pf(this.data.getIterator())}getIteratorFrom(e){return new Pf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class Pf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $S{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function xf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new $S(t,e,n,r,s,i,o)}function ol(t){const e=X(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+Pr(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),oa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Pr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Pr(r)).join(",")),e.P=n}return e.P}function jS(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Pr(r.value)}`;var r}).join(", ")}]`),oa(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Pr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Pr(n)).join(",")),`Target(${e})`}function al(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!XS(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!qt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mf(t.startAt,e.startAt)&&Mf(t.endAt,e.endAt)}function $c(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class st extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new qS(e,n,r):n==="array-contains"?new zS(e,r):n==="in"?new GS(e,r):n==="not-in"?new WS(e,r):n==="array-contains-any"?new YS(e,r):new st(e,n,r)}static V(e,n,r){return n==="in"?new HS(e,r):new KS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Hr(n,this.value)):n!==null&&tr(this.value)===tr(n)&&this.v(Hr(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class qS extends st{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.v(n)}}class HS extends st{constructor(e,n){super(e,"in",n),this.keys=wm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class KS extends st{constructor(e,n){super(e,"not-in",n),this.keys=wm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function wm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class zS extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return il(n)&&Qs(n.arrayValue,this.value)}}class GS extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qs(this.value.arrayValue,n)}}class WS extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qs(this.value.arrayValue,n)}}class YS extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!il(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qs(this.value.arrayValue,r))}}class bo{constructor(e,n){this.position=e,this.inclusive=n}}class xr{constructor(e,n="asc"){this.field=e,this.dir=n}}function XS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Lf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=Hr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class as{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function QS(t,e,n,r,s,i,o,a){return new as(t,e,n,r,s,i,o,a)}function cl(t){return new as(t)}function JS(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ul(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ll(t){for(const e of t.filters)if(e.S())return e.field;return null}function Em(t){return t.collectionGroup!==null}function Js(t){const e=X(t);if(e.D===null){e.D=[];const n=ll(e),r=ul(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new xr(n)),e.D.push(new xr(ct.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new xr(ct.keyField(),i))}}}return e.D}function rr(t){const e=X(t);if(!e.C)if(e.limitType==="F")e.C=xf(e.path,e.collectionGroup,Js(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Js(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new xr(i.field,o))}const r=e.endAt?new bo(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new bo(e.startAt.position,e.startAt.inclusive):null;e.C=xf(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.C}function bm(t,e,n){return new as(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function aa(t,e){return al(rr(t),rr(e))&&t.limitType===e.limitType}function Im(t){return`${ol(rr(t))}|lt:${t.limitType}`}function jc(t){return`Query(target=${jS(rr(t))}; limitType=${t.limitType})`}function hl(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):j.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=Lf(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Js(n),r)||n.endAt&&!function(s,i,o){const a=Lf(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Js(n),r))}(t,e)}function ZS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Tm(t){return(e,n)=>{let r=!1;for(const s of Js(t)){const i=eC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function eC(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Hr(a,c):W()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Eo(e)?"-0":e}}function Cm(t){return{integerValue:""+t}}function tC(t,e){return MS(e)?Cm(e):Sm(t,e)}/**
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
 */class ca{constructor(){this._=void 0}}function nC(t,e,n){return t instanceof Zs?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof ei?km(t,e):t instanceof ti?Rm(t,e):function(r,s){const i=Am(r,s),o=Uf(i)+Uf(r.k);return Vc(i)&&Vc(r.k)?Cm(o):Sm(r.M,o)}(t,e)}function rC(t,e,n){return t instanceof ei?km(t,e):t instanceof ti?Rm(t,e):n}function Am(t,e){return t instanceof Io?Vc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Zs extends ca{}class ei extends ca{constructor(e){super(),this.elements=e}}function km(t,e){const n=Nm(e);for(const r of t.elements)n.some(s=>qt(s,r))||n.push(r);return{arrayValue:{values:n}}}class ti extends ca{constructor(e){super(),this.elements=e}}function Rm(t,e){let n=Nm(e);for(const r of t.elements)n=n.filter(s=>!qt(s,r));return{arrayValue:{values:n}}}class Io extends ca{constructor(e,n){super(),this.M=e,this.k=n}}function Uf(t){return ke(t.integerValue||t.doubleValue)}function Nm(t){return il(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class sC{constructor(e,n){this.field=e,this.transform=n}}function iC(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ei&&r instanceof ei||n instanceof ti&&r instanceof ti?$r(n.elements,r.elements,qt):n instanceof Io&&r instanceof Io?qt(n.k,r.k):n instanceof Zs&&r instanceof Zs}(t.transform,e.transform)}class oC{constructor(e,n){this.version=e,this.transformResults=n}}class Hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Hn}static exists(e){return new Hn(void 0,e)}static updateTime(e){return new Hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ua{}function aC(t,e,n){t instanceof la?function(r,s,i){const o=r.value.clone(),a=Vf(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof cs?function(r,s,i){if(!Yi(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Vf(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Om(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function qc(t,e,n){t instanceof la?function(r,s,i){if(!Yi(r.precondition,s))return;const o=r.value.clone(),a=$f(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(Bf(s),o).setHasLocalMutations()}(t,e,n):t instanceof cs?function(r,s,i){if(!Yi(r.precondition,s))return;const o=$f(r.fieldTransforms,i,s),a=s.data;a.setAll(Om(r)),a.setAll(o),s.convertToFoundDocument(Bf(s),a).setHasLocalMutations()}(t,e,n):function(r,s){Yi(r.precondition,s)&&s.convertToNoDocument(ee.min())}(t,e)}function cC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Am(r.transform,s||null);i!=null&&(n==null&&(n=pt.empty()),n.set(r.field,i))}return n||null}function Ff(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&$r(n,r,(s,i)=>iC(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Bf(t){return t.isFoundDocument()?t.version:ee.min()}class la extends ua{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class cs extends ua{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function Om(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Vf(t,e,n){const r=new Map;ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,rC(o,a,n[s]))}return r}function $f(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,nC(i,o,e))}return r}class uC extends ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class lC extends ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class hC{constructor(e){this.count=e}}/**
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
 */var Ae,ne;function fC(t){switch(t){default:return W();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function Dm(t){if(t===void 0)return In("GRPC error has no .code"),_.UNKNOWN;switch(t){case Ae.OK:return _.OK;case Ae.CANCELLED:return _.CANCELLED;case Ae.UNKNOWN:return _.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return _.INTERNAL;case Ae.UNAVAILABLE:return _.UNAVAILABLE;case Ae.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Ae.NOT_FOUND:return _.NOT_FOUND;case Ae.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Ae.ABORTED:return _.ABORTED;case Ae.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Ae.DATA_LOSS:return _.DATA_LOSS;default:return W()}}(ne=Ae||(Ae={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ar(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return mm(this.inner)}size(){return this.innerSize}}/**
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
 */const dC=new Me(j.comparator);function sr(){return dC}const pC=new Me(j.comparator);function Hc(...t){let e=pC;for(const n of t)e=e.insert(n.key,n);return e}function Ga(){return new us(t=>t.toString(),(t,e)=>t.isEqual(e))}const gC=new Me(j.comparator),mC=new qe(j.comparator);function be(...t){let e=mC;for(const n of t)e=e.add(n);return e}const yC=new qe(ce);function Pm(){return yC}/**
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
 */class ha{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,vi.createSynthesizedTargetChangeForCurrentChange(e,n)),new ha(ee.min(),r,Pm(),sr(),be())}}class vi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new vi(Ke.EMPTY_BYTE_STRING,n,be(),be(),be())}}/**
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
 */class Xi{constructor(e,n,r,s){this.O=e,this.removedTargetIds=n,this.key=r,this.F=s}}class xm{constructor(e,n){this.targetId=e,this.$=n}}class Lm{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class jf{constructor(){this.B=0,this.L=Hf(),this.U=Ke.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=be(),n=be(),r=be();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:W()}}),new vi(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=Hf()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class vC{constructor(e){this.nt=e,this.st=new Map,this.it=sr(),this.rt=qf(),this.ot=new qe(ce)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,s)=>{this.ft(s)&&n(s)})}_t(e){const n=e.targetId,r=e.$.count,s=this.wt(n);if(s){const i=s.target;if($c(i))if(r===0){const o=new j(i.path);this.ct(n,o,Ye.newNoDocument(o,ee.min()))}else ve(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&$c(a.target)){const c=new j(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,Ye.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let r=be();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const s=new ha(e,n,this.ot,this.it,r);return this.it=sr(),this.rt=qf(),this.ot=new qe(ce),s}at(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const s=this.lt(e);this.It(e,n)?s.Y(n,1):s.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new jf,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new qe(ce),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new jf),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function qf(){return new Me(j.comparator)}function Hf(){return new Me(j.comparator)}/**
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
 */const _C=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),wC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class EC{constructor(e,n){this.databaseId=e,this.N=n}}function To(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mm(t,e){return t.N?e.toBase64():e.toUint8Array()}function bC(t,e){return To(t,e.toTimestamp())}function Qt(t){return ve(!!t),ee.fromTimestamp(function(e){const n=Tn(e);return new Qe(n.seconds,n.nanos)}(t))}function fl(t,e){return function(n){return new Ee(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Um(t){const e=Ee.fromString(t);return ve(Vm(e)),e}function Kc(t,e){return fl(t.databaseId,e.path)}function Wa(t,e){const n=Um(e);if(n.get(1)!==t.databaseId.projectId)throw new x(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(Fm(n))}function zc(t,e){return fl(t.databaseId,e)}function IC(t){const e=Um(t);return e.length===4?Ee.emptyPath():Fm(e)}function Gc(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fm(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Kf(t,e,n){return{name:Kc(t,e),fields:n.value.mapValue.fields}}function TC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.N?(ve(u===void 0||typeof u=="string"),Ke.fromBase64String(u||"")):(ve(u===void 0||u instanceof Uint8Array),Ke.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?_.UNKNOWN:Dm(c.code);return new x(u,c.message||"")}(o);n=new Lm(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Wa(t,r.document.name),i=Qt(r.document.updateTime),o=new pt({mapValue:{fields:r.document.fields}}),a=Ye.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Xi(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Wa(t,r.document),i=r.readTime?Qt(r.readTime):ee.min(),o=Ye.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Xi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Wa(t,r.document),i=r.removedTargetIds||[];n=new Xi([],i,s,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new hC(s),o=r.targetId;n=new xm(o,i)}}return n}function SC(t,e){let n;if(e instanceof la)n={update:Kf(t,e.key,e.value)};else if(e instanceof uC)n={delete:Kc(t,e.key)};else if(e instanceof cs)n={update:Kf(t,e.key,e.data),updateMask:LC(e.fieldMask)};else{if(!(e instanceof lC))return W();n={verify:Kc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Zs)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ei)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ti)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Io)return{fieldPath:i.field.canonicalString(),increment:o.k};throw W()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:bC(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W()}(t,e.precondition)),n}function CC(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Qt(r.updateTime):Qt(s);return i.isEqual(ee.min())&&(i=Qt(s)),new oC(i,r.transformResults||[])}(n,e))):[]}function AC(t,e){return{documents:[zc(t,e.path)]}}function kC(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=zc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=zc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(Df(h.value))return{unaryFilter:{field:yr(h.field),op:"IS_NAN"}};if(Of(h.value))return{unaryFilter:{field:yr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Df(h.value))return{unaryFilter:{field:yr(h.field),op:"IS_NOT_NAN"}};if(Of(h.value))return{unaryFilter:{field:yr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yr(h.field),op:DC(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:yr(l.field),direction:OC(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.N||oa(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function RC(t){let e=IC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=Bm(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new xr(Sr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,oa(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new bo(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new bo(f,h)}(n.endAt)),QS(e,s,o,i,a,"F",c,u)}function NC(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return W()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Bm(t){return t?t.unaryFilter!==void 0?[xC(t)]:t.fieldFilter!==void 0?[PC(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Bm(e)).reduce((e,n)=>e.concat(n)):W():[]}function OC(t){return _C[t]}function DC(t){return wC[t]}function yr(t){return{fieldPath:t.canonicalString()}}function Sr(t){return ct.fromServerFormat(t.fieldPath)}function PC(t){return st.create(Sr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}function xC(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Sr(t.unaryFilter.field);return st.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Sr(t.unaryFilter.field);return st.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Sr(t.unaryFilter.field);return st.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Sr(t.unaryFilter.field);return st.create(s,"!=",{nullValue:"NULL_VALUE"});default:return W()}}function LC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Vm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(s=>s?A.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function _i(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class FC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&aC(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&qc(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&qc(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(ee.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&$r(this.mutations,e.mutations,(n,r)=>Ff(n,r))&&$r(this.baseMutations,e.baseMutations,(n,r)=>Ff(n,r))}}class dl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length);let s=gC;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new dl(e,n,r,s)}}/**
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
 */class BC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Kn{constructor(e,n,r,s,i=ee.min(),o=ee.min(),a=Ke.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class VC{constructor(e){this.Jt=e}}function $C(t){const e=RC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bm(e,e.limit,"L"):e}/**
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
 */class jC{constructor(){this.qe=new qC}addToCollectionParentIndex(e,n){return this.qe.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(nr.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class qC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new qe(Ee.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new qe(Ee.comparator)).toArray()}}/**
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
 */class Kr{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Kr(0)}static yn(){return new Kr(-1)}}/**
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
 */async function wi(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==MC)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class HC{constructor(){this.changes=new us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class KC{constructor(e,n,r){this.ds=e,this.Bs=n,this.indexManager=r}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Us(e,n,r))}Us(e,n,r){return this.ds.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}qs(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Ks(e,n){return this.ds.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Qs(e,n,r){return function(s){return j.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.js(e,n.path):Em(n)?this.Ws(e,n,r):this.zs(e,n,r)}js(e,n){return this.Ls(e,new j(n)).next(r=>{let s=Hc();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Ws(e,n,r){const s=n.collectionGroup;let i=Hc();return this.indexManager.getCollectionParents(e,s).next(o=>A.forEach(o,a=>{const c=function(u,l){return new as(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.zs(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}zs(e,n,r){let s;return this.ds.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let u=s.get(c);u==null&&(u=Ye.newInvalidDocument(c),s=s.insert(c,u)),qc(a,u,o.localWriteTime),u.isFoundDocument()||(s=s.remove(c))}}).next(()=>(s.forEach((i,o)=>{hl(n,o)||(s=s.remove(i))}),s))}}/**
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
 */class pl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hs=r,this.Js=s}static Ys(e,n){let r=be(),s=be();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new pl(e,n.fromCache,r,s)}}/**
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
 */class zC{constructor(){this.Xs=!1}initialize(e,n){this.Zs=e,this.indexManager=n,this.Xs=!0}Qs(e,n,r,s){return this.ti(e,n).next(i=>i||this.ei(e,n,s,r)).next(i=>i||this.ni(e,n))}ti(e,n){return A.resolve(null)}ei(e,n,r,s){return JS(n)||s.isEqual(ee.min())?this.ni(e,n):this.Zs.Ks(e,r).next(i=>{const o=this.si(n,i);return this.ii(n,o,r,s)?this.ni(e,n):(Cf()<=oe.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),jc(n)),this.ri(e,o,n,FS(s,-1)))})}si(e,n){let r=new qe(Tm(e));return n.forEach((s,i)=>{hl(e,i)&&(r=r.add(i))}),r}ii(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ni(e,n){return Cf()<=oe.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",jc(n)),this.Zs.Qs(e,n,nr.min())}ri(e,n,r,s){return this.Zs.Qs(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n,r,s){this.persistence=e,this.oi=n,this.M=s,this.ui=new Me(ce),this.ai=new us(i=>ol(i),al),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(r)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new KC(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ui))}}function WC(t,e,n,r){return new GC(t,e,n,r)}async function $m(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.Bs.getAllMutationBatches(r).next(i=>(s=i,n.li(e),n.Bs.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=be();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.fi.Ks(r,c).next(u=>({di:u,removedBatchIds:o,addedBatchIds:a}))})})}function YC(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=A.resolve();return h.forEach(p=>{f=f.next(()=>u.getEntry(a,p)).next(m=>{const I=c.docVersions.get(p);ve(I!==null),m.version.compareTo(I)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),f.next(()=>o.Bs.removeMutationBatch(a,l))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.Bs.performConsistencyCheck(r)).next(()=>n.fi.Ks(r,s))})}function jm(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function XC(t,e){const n=X(t),r=e.snapshotVersion;let s=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hi.newChangeBuffer({trackRemovals:!0});s=n.ui;const a=[];e.targetChanges.forEach((u,l)=>{const h=s.get(l);if(!h)return;a.push(n.fs.removeMatchingKeys(i,u.removedDocuments,l).next(()=>n.fs.addMatchingKeys(i,u.addedDocuments,l)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(l)?f=f.withResumeToken(Ke.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(l,f),function(p,m,I){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(h,f,u)&&a.push(n.fs.updateTargetData(i,f))});let c=sr();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(QC(i,o,e.documentUpdates).next(u=>{c=u})),!r.isEqual(ee.min())){const u=n.fs.getLastRemoteSnapshotVersion(i).next(l=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.fi.Gs(i,c)).next(()=>c)}).then(i=>(n.ui=s,i))}function QC(t,e,n){let r=be();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let i=sr();return n.forEach((o,a)=>{const c=s.get(o);a.isNoDocument()&&a.version.isEqual(ee.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):V("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function JC(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(r,e)))}function ZC(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.fs.getTargetData(r,e).next(i=>i?(s=i,A.resolve(s)):n.fs.allocateTargetId(r).next(o=>(s=new Kn(e,o,0,r.currentSequenceNumber),n.fs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ui.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ui=n.ui.insert(r.targetId,r),n.ai.set(e,r.targetId)),r})}async function Wc(t,e,n){const r=X(t),s=r.ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!_i(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ui=r.ui.remove(e),r.ai.delete(s.target)}function zf(t,e,n){const r=X(t);let s=ee.min(),i=be();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=X(a),h=l.ai.get(u);return h!==void 0?A.resolve(l.ui.get(h)):l.fs.getTargetData(c,u)}(r,o,rr(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.oi.Qs(o,e,n?s:ee.min(),n?i:be())).next(a=>(eA(r,ZS(e),a),{documents:a,_i:i})))}function eA(t,e,n){let r=ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ci.set(e,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,n){return A.resolve(this.yi.get(n))}saveBundleMetadata(e,n){var r;return this.yi.set(n.id,{id:(r=n).id,version:r.version,createTime:Qt(r.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.pi.get(n))}saveNamedQuery(e,n){return this.pi.set(n.name,function(r){return{name:r.name,query:$C(r.bundledQuery),readTime:Qt(r.readTime)}}(n)),A.resolve()}}/**
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
 */class nA{constructor(){this.overlays=new Me(j.comparator),this.Ii=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Xt(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ii.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ii.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const s=Ga(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return A.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=Ga(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Ga(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return A.resolve(a)}Xt(e,n,r){if(r===null)return;const s=this.overlays.get(r.key);if(s!==null){const o=this.Ii.get(s.largestBatchId).delete(r.key);this.Ii.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new BC(n,r));let i=this.Ii.get(n);i===void 0&&(i=be(),this.Ii.set(n,i)),this.Ii.set(n,i.add(r.key))}}/**
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
 */class gl{constructor(){this.Ti=new qe(Oe.Ei),this.Ai=new qe(Oe.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.Ti=this.Ti.add(r),this.Ai=this.Ai.add(r)}bi(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Pi(new Oe(e,n))}Vi(e,n){e.forEach(r=>this.removeReference(r,n))}vi(e){const n=new j(new Ee([])),r=new Oe(n,e),s=new Oe(n,e+1),i=[];return this.Ai.forEachInRange([r,s],o=>{this.Pi(o),i.push(o.key)}),i}Si(){this.Ti.forEach(e=>this.Pi(e))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const n=new j(new Ee([])),r=new Oe(n,e),s=new Oe(n,e+1);let i=be();return this.Ai.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Oe(e,0),r=this.Ti.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.Ci=n}static Ei(e,n){return j.comparator(e.key,n.key)||ce(e.Ci,n.Ci)}static Ri(e,n){return ce(e.Ci,n.Ci)||j.comparator(e.key,n.key)}}/**
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
 */class rA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.xi=1,this.Ni=new qe(Oe.Ei)}checkEmpty(e){return A.resolve(this.Bs.length===0)}addMutationBatch(e,n,r,s){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new FC(i,n,r,s);this.Bs.push(o);for(const a of s)this.Ni=this.Ni.add(new Oe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.ki(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Mi(r),i=s<0?0:s;return A.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(e){return A.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),s=new Oe(n,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([r,s],o=>{const a=this.ki(o.Ci);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(ce);return n.forEach(s=>{const i=new Oe(s,0),o=new Oe(s,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([i,o],a=>{r=r.add(a.Ci)})}),A.resolve(this.Oi(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const o=new Oe(new j(i),0);let a=new qe(ce);return this.Ni.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.Ci)),!0)},o),A.resolve(this.Oi(a))}Oi(e){const n=[];return e.forEach(r=>{const s=this.ki(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.Fi(n.batchId,"removed")===0),this.Bs.shift();let r=this.Ni;return A.forEach(n.mutations,s=>{const i=new Oe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Ni=r})}_n(e){}containsKey(e,n){const r=new Oe(n,0),s=this.Ni.firstAfterOrEqual(r);return A.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.Bs.length,A.resolve()}Fi(e,n){return this.Mi(e)}Mi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}ki(e){const n=this.Mi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
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
 */class sA{constructor(e){this.$i=e,this.docs=new Me(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.$i(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(e,n){let r=sr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ye.newInvalidDocument(s))}),A.resolve(r)}getAllFromCollection(e,n,r){let s=sr();const i=new j(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||VS(BS(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,n,r,s){W()}Bi(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new iA(this)}getSize(e){return A.resolve(this.size)}}class iA extends HC{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Kn.addEntry(e,s)):this.Kn.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
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
 */class oA{constructor(e){this.persistence=e,this.Li=new us(n=>ol(n),al),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Ui=0,this.qi=new gl,this.targetCount=0,this.Ki=Kr.gn()}forEachTarget(e,n){return this.Li.forEach((r,s)=>n(s)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ui&&(this.Ui=n),A.resolve()}Tn(e){this.Li.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ki=new Kr(n),this.highestTargetId=n),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Tn(n),A.resolve()}removeTargetData(e,n){return this.Li.delete(n.target),this.qi.vi(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Li.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Li.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Li.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.qi.bi(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.qi.Vi(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qi.vi(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qi.Di(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.qi.containsKey(n))}}/**
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
 */class aA{constructor(e,n){this.Gi={},this.overlays={},this.es=new sl(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new oA(this),this.indexManager=new jC,this.ds=function(r){return new sA(r)}(r=>this.referenceDelegate.Qi(r)),this.M=new VC(n),this._s=new tA(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Gi[e.toKey()];return r||(r=new rA(n,this.referenceDelegate),this.Gi[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const s=new cA(this.es.next());return this.referenceDelegate.ji(),r(s).next(i=>this.referenceDelegate.Wi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zi(e,n){return A.or(Object.values(this.Gi).map(r=>()=>r.containsKey(e,n)))}}class cA extends UC{constructor(e){super(),this.currentSequenceNumber=e}}class ml{constructor(e){this.persistence=e,this.Hi=new gl,this.Ji=null}static Yi(e){return new ml(e)}get Xi(){if(this.Ji)return this.Ji;throw W()}addReference(e,n,r){return this.Hi.addReference(r,n),this.Xi.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Hi.removeReference(r,n),this.Xi.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Xi.add(n.toString()),A.resolve()}removeTarget(e,n){this.Hi.vi(n.targetId).forEach(s=>this.Xi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}ji(){this.Ji=new Set}Wi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Xi,r=>{const s=j.fromPath(r);return this.Zi(e,s).next(i=>{i||n.removeEntry(s,ee.min())})}).next(()=>(this.Ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zi(e,n).next(r=>{r?this.Xi.delete(n.toString()):this.Xi.add(n.toString())})}Qi(e){return 0}Zi(e,n){return A.or([()=>A.resolve(this.Hi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zi(e,n)])}}class Gf{constructor(){this.activeTargetIds=Pm()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uA{constructor(){this.Ur=new Gf,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Gf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lA{Kr(e){}shutdown(){}}/**
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
 */class Wf{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class fA{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}/**
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
 */class dA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.uo=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,s,i){const o=this.ho(e,n);V("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(c=>(V("RestConnection","Received: ",c),c),c=>{throw Af("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,s,i){return this.co(e,n,r,s,i)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+os,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,n){const r=hA[e];return`${this.uo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,s){return new Promise((i,o)=>{const a=new TS;a.listenOnce(ES.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case za.NO_ERROR:const u=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(u)),i(u);break;case za.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new x(_.DEADLINE_EXCEEDED,"Request time out"));break;case za.HTTP_ERROR:const l=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(m)>=0?m:_.UNKNOWN}(h.status);o(new x(f,h.message))}else o(new x(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new x(_.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}wo(e,n,r){const s=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=_S(),o=wS(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new IS({})),this.lo(a.initMessageHeaders,n,r),Dp()||xp()||nb()||Lp()||rb()||Pp()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");V("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new fA({Jr:m=>{h?V("Connection","Not sending because WebChannel is closed:",m):(l||(V("Connection","Opening WebChannel transport."),u.open(),l=!0),V("Connection","WebChannel sending:",m),u.send(m))},Yr:()=>u.close()}),p=(m,I,v)=>{m.listen(I,S=>{try{v(S)}catch(D){setTimeout(()=>{throw D},0)}})};return p(u,xi.EventType.OPEN,()=>{h||V("Connection","WebChannel transport opened.")}),p(u,xi.EventType.CLOSE,()=>{h||(h=!0,V("Connection","WebChannel transport closed"),f.ro())}),p(u,xi.EventType.ERROR,m=>{h||(h=!0,Af("Connection","WebChannel transport errored:",m),f.ro(new x(_.UNAVAILABLE,"The operation could not be completed")))}),p(u,xi.EventType.MESSAGE,m=>{var I;if(!h){const v=m.data[0];ve(!!v);const S=v,D=S.error||((I=S[0])===null||I===void 0?void 0:I.error);if(D){V("Connection","WebChannel received error:",D);const B=D.status;let U=function(ue){const Q=Ae[ue];if(Q!==void 0)return Dm(Q)}(B),ie=D.message;U===void 0&&(U=_.INTERNAL,ie="Unknown error status: "+B+" with message "+D.message),h=!0,f.ro(new x(U,ie)),u.close()}else V("Connection","WebChannel received:",v),f.oo(v)}}),p(o,bS.STAT_EVENT,m=>{m.stat===Tf.PROXY?V("Connection","Detected buffering proxy"):m.stat===Tf.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.io()},0),f}}function Ya(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t){return new EC(t,!0)}class qm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Yn=e,this.timerId=n,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Hm{constructor(e,n,r,s,i,o,a,c){this.Yn=e,this.Vo=r,this.vo=s,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new qm(e,n)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(In(n.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Do===n&&this.Qo(r,s)},r=>{e(()=>{const s=new x(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(s)})})}Qo(e,n){const r=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(s=>{r(()=>this.jo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Yn.enqueueAndForget(()=>this.Do===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pA extends Hm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.M=i}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=TC(this.M,e),r=function(s){if(!("targetChange"in s))return ee.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?ee.min():i.readTime?Qt(i.readTime):ee.min()}(e);return this.listener.zo(n,r)}Ho(e){const n={};n.database=Gc(this.M),n.addTarget=function(s,i){let o;const a=i.target;return o=$c(a)?{documents:AC(s,a)}:{query:kC(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Mm(s,i.resumeToken):i.snapshotVersion.compareTo(ee.min())>0&&(o.readTime=To(s,i.snapshotVersion.toTimestamp())),o}(this.M,e);const r=NC(this.M,e);r&&(n.labels=r),this.Lo(n)}Jo(e){const n={};n.database=Gc(this.M),n.removeTarget=e,this.Lo(n)}}class gA extends Hm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.M=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=CC(e.writeResults,e.commitTime),r=Qt(e.commitTime);return this.listener.tu(r,n)}return ve(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Gc(this.M),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>SC(this.M,r))};this.Lo(n)}}/**
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
 */class mA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=r,this.M=s,this.su=!1}iu(){if(this.su)throw new x(_.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.So.co(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(_.UNKNOWN,s.toString())})}_o(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.So._o(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(_.UNKNOWN,s.toString())})}terminate(){this.su=!0}}class yA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(In(n),this.uu=!1):V("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class vA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr(o=>{r.enqueueAndForget(async()=>{cr(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=X(a);c.wu.add(4),await Ei(c),c.yu.set("Unknown"),c.wu.delete(4),await da(c)}(this))})}),this.yu=new yA(r,s)}}async function da(t){if(cr(t))for(const e of t.mu)await e(!0)}async function Ei(t){for(const e of t.mu)await e(!1)}function Km(t,e){const n=X(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),_l(n)?vl(n):ls(n).Mo()&&yl(n,e))}function zm(t,e){const n=X(t),r=ls(n);n._u.delete(e),r.Mo()&&Gm(n,e),n._u.size===0&&(r.Mo()?r.$o():cr(n)&&n.yu.set("Unknown"))}function yl(t,e){t.pu.Z(e.targetId),ls(t).Ho(e)}function Gm(t,e){t.pu.Z(e),ls(t).Jo(e)}function vl(t){t.pu=new vC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t._u.get(e)||null}),ls(t).start(),t.yu.au()}function _l(t){return cr(t)&&!ls(t).ko()&&t._u.size>0}function cr(t){return X(t).wu.size===0}function Wm(t){t.pu=void 0}async function _A(t){t._u.forEach((e,n)=>{yl(t,e)})}async function wA(t,e){Wm(t),_l(t)?(t.yu.lu(e),vl(t)):t.yu.set("Unknown")}async function EA(t,e,n){if(t.yu.set("Online"),e instanceof Lm&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r._u.delete(o),r.pu.removeTarget(o))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await So(t,r)}else if(e instanceof Xi?t.pu.ut(e):e instanceof xm?t.pu._t(e):t.pu.ht(e),!n.isEqual(ee.min()))try{const r=await jm(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.pu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s._u.get(c);u&&s._u.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s._u.get(a);if(!c)return;s._u.set(a,c.withResumeToken(Ke.EMPTY_BYTE_STRING,c.snapshotVersion)),Gm(s,a);const u=new Kn(c.target,a,1,c.sequenceNumber);yl(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await So(t,r)}}async function So(t,e,n){if(!_i(e))throw e;t.wu.add(1),await Ei(t),t.yu.set("Offline"),n||(n=()=>jm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await da(t)})}function Ym(t,e){return e().catch(n=>So(t,n,e))}async function pa(t){const e=X(t),n=Sn(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;bA(e);)try{const s=await JC(e.localStore,r);if(s===null){e.du.length===0&&n.$o();break}r=s.batchId,IA(e,s)}catch(s){await So(e,s)}Xm(e)&&Qm(e)}function bA(t){return cr(t)&&t.du.length<10}function IA(t,e){t.du.push(e);const n=Sn(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function Xm(t){return cr(t)&&!Sn(t).ko()&&t.du.length>0}function Qm(t){Sn(t).start()}async function TA(t){Sn(t).nu()}async function SA(t){const e=Sn(t);for(const n of t.du)e.Zo(n.mutations)}async function CA(t,e,n){const r=t.du.shift(),s=dl.from(r,e,n);await Ym(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await pa(t)}async function AA(t,e){e&&Sn(t).Xo&&await async function(n,r){if(s=r.code,fC(s)&&s!==_.ABORTED){const i=n.du.shift();Sn(n).Fo(),await Ym(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await pa(n)}var s}(t,e),Xm(t)&&Qm(t)}async function Yf(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=cr(n);n.wu.add(3),await Ei(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await da(n)}async function kA(t,e){const n=X(t);e?(n.wu.delete(2),await da(n)):e||(n.wu.add(2),await Ei(n),n.yu.set("Unknown"))}function ls(t){return t.Iu||(t.Iu=function(e,n,r){const s=X(e);return s.iu(),new pA(n,s.So,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Xr:_A.bind(null,t),eo:wA.bind(null,t),zo:EA.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),_l(t)?vl(t):t.yu.set("Unknown")):(await t.Iu.stop(),Wm(t))})),t.Iu}function Sn(t){return t.Tu||(t.Tu=function(e,n,r){const s=X(e);return s.iu(),new gA(n,s.So,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Xr:TA.bind(null,t),eo:AA.bind(null,t),eu:SA.bind(null,t),tu:CA.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await pa(t)):(await t.Tu.stop(),t.du.length>0&&(V("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
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
 */class wl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new wl(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function El(t,e){if(In("AsyncQueue",`${e}: ${t}`),_i(t))return new x(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Lr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=Hc(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new Lr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Lr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Lr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Xf{constructor(){this.Eu=new Me(j.comparator)}track(e){const n=e.doc.key,r=this.Eu.get(n);r?e.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Eu=this.Eu.remove(n):e.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):W():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,r)=>{e.push(r)}),e}}class zr{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new zr(e,n,Lr.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&aa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class RA{constructor(){this.Ru=void 0,this.listeners=[]}}class NA{constructor(){this.queries=new us(e=>Im(e),aa),this.onlineState="Unknown",this.bu=new Set}}async function Jm(t,e){const n=X(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new RA),s)try{i.Ru=await n.onListen(r)}catch(o){const a=El(o,`Initialization of query '${jc(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.Vu(i.Ru)&&bl(n)}async function Zm(t,e){const n=X(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function OA(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(s)&&(r=!0);o.Ru=s}}r&&bl(n)}function DA(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function bl(t){t.bu.forEach(e=>{e.next()})}class ey{constructor(e,n,r){this.query=e,this.vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new zr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!e.docs.isEmpty()||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=zr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}/**
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
 */class ty{constructor(e){this.key=e}}class ny{constructor(e){this.key=e}}class PA{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.current=!1,this.Ku=be(),this.mutatedKeys=be(),this.Gu=Tm(e),this.Qu=new Lr(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new Xf,s=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const f=s.get(l),p=hl(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),I=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;f&&p?f.data.isEqual(p.data)?m!==I&&(r.track({type:3,doc:p}),v=!0):this.Hu(f,p)||(r.track({type:2,doc:p}),v=!0,(c&&this.Gu(p,c)>0||u&&this.Gu(p,u)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),v=!0):f&&!p&&(r.track({type:1,doc:f}),v=!0,(c||u)&&(a=!0)),v&&(p?(o=o.add(p),i=I?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,ii:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((u,l)=>function(h,f){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return p(h)-p(f)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new zr(this.query,e.Qu,s,i,e.mutatedKeys,a===0,c,!1),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Xf,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=be(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new ny(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new ty(r))}),n}ta(e){this.Uu=e._i,this.Ku=be();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ea(){return zr.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class xA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LA{constructor(e){this.key=e,this.na=!1}}class MA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new us(a=>Im(a),aa),this.ra=new Map,this.oa=new Set,this.ua=new Me(j.comparator),this.aa=new Map,this.ca=new gl,this.ha={},this.la=new Map,this.fa=Kr.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function UA(t,e){const n=GA(t);let r,s;const i=n.ia.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ea();else{const o=await ZC(n.localStore,rr(e));n.isPrimaryClient&&Km(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await FA(n,e,r,a==="current")}return s}async function FA(t,e,n,r){t._a=(l,h,f)=>async function(p,m,I,v){let S=m.view.Wu(I);S.ii&&(S=await zf(p.localStore,m.query,!1).then(({documents:U})=>m.view.Wu(U,S)));const D=v&&v.targetChanges.get(m.targetId),B=m.view.applyChanges(S,p.isPrimaryClient,D);return Jf(p,m.targetId,B.Xu),B.snapshot}(t,l,h,f);const s=await zf(t.localStore,e,!0),i=new PA(e,s._i),o=i.Wu(s.documents),a=vi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Jf(t,n,c.Xu);const u=new xA(e,n,i);return t.ia.set(e,u),t.ra.has(n)?t.ra.get(n).push(e):t.ra.set(n,[e]),c.snapshot}async function BA(t,e){const n=X(t),r=n.ia.get(e),s=n.ra.get(r.targetId);if(s.length>1)return n.ra.set(r.targetId,s.filter(i=>!aa(i,e))),void n.ia.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Wc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),zm(n.remoteStore,r.targetId),Yc(n,r.targetId)}).catch(wi)):(Yc(n,r.targetId),await Wc(n.localStore,r.targetId,!0))}async function VA(t,e,n){const r=WA(t);try{const s=await function(i,o){const a=X(i),c=Qe.now(),u=o.reduce((h,f)=>h.add(f.key),be());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.fi.Ks(h,u).next(f=>{l=f;const p=[];for(const m of o){const I=cC(m,l.get(m.key));I!=null&&p.push(new cs(m.key,I,_m(I.value.mapValue),Hn.exists(!0)))}return a.Bs.addMutationBatch(h,c,p,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.ha[i.currentUser.toKey()];c||(c=new Me(ce)),c=c.insert(o,a),i.ha[i.currentUser.toKey()]=c}(r,s.batchId,n),await bi(r,s.changes),await pa(r.remoteStore)}catch(s){const i=El(s,"Failed to persist write");n.reject(i)}}async function ry(t,e){const n=X(t);try{const r=await XC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.aa.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.na=!0:s.modifiedDocuments.size>0?ve(o.na):s.removedDocuments.size>0&&(ve(o.na),o.na=!1))}),await bi(n,r,e)}catch(r){await wi(r)}}function Qf(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ia.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=X(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Pu(o)&&(c=!0)}),c&&bl(a)}(r.eventManager,e),s.length&&r.sa.zo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $A(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.aa.get(e),i=s&&s.key;if(i){let o=new Me(j.comparator);o=o.insert(i,Ye.newNoDocument(i,ee.min()));const a=be().add(i),c=new ha(ee.min(),new Map,new qe(ce),o,a);await ry(r,c),r.ua=r.ua.remove(i),r.aa.delete(e),Il(r)}else await Wc(r.localStore,e,!1).then(()=>Yc(r,e,n)).catch(wi)}async function jA(t,e){const n=X(t),r=e.batch.batchId;try{const s=await YC(n.localStore,e);iy(n,r,null),sy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bi(n,s)}catch(s){await wi(s)}}async function qA(t,e,n){const r=X(t);try{const s=await function(i,o){const a=X(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.Bs.lookupMutationBatch(c,o).next(l=>(ve(l!==null),u=l.keys(),a.Bs.removeMutationBatch(c,l))).next(()=>a.Bs.performConsistencyCheck(c)).next(()=>a.fi.Ks(c,u))})}(r.localStore,e);iy(r,e,n),sy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await bi(r,s)}catch(s){await wi(s)}}function sy(t,e){(t.la.get(e)||[]).forEach(n=>{n.resolve()}),t.la.delete(e)}function iy(t,e,n){const r=X(t);let s=r.ha[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ha[r.currentUser.toKey()]=s}}function Yc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ra.get(e))t.ia.delete(r),n&&t.sa.wa(r,n);t.ra.delete(e),t.isPrimaryClient&&t.ca.vi(e).forEach(r=>{t.ca.containsKey(r)||oy(t,r)})}function oy(t,e){t.oa.delete(e.path.canonicalString());const n=t.ua.get(e);n!==null&&(zm(t.remoteStore,n),t.ua=t.ua.remove(e),t.aa.delete(n),Il(t))}function Jf(t,e,n){for(const r of n)r instanceof ty?(t.ca.addReference(r.key,e),HA(t,r)):r instanceof ny?(V("SyncEngine","Document no longer in limbo: "+r.key),t.ca.removeReference(r.key,e),t.ca.containsKey(r.key)||oy(t,r.key)):W()}function HA(t,e){const n=e.key,r=n.path.canonicalString();t.ua.get(n)||t.oa.has(r)||(V("SyncEngine","New document in limbo: "+n),t.oa.add(r),Il(t))}function Il(t){for(;t.oa.size>0&&t.ua.size<t.maxConcurrentLimboResolutions;){const e=t.oa.values().next().value;t.oa.delete(e);const n=new j(Ee.fromString(e)),r=t.fa.next();t.aa.set(r,new LA(n)),t.ua=t.ua.insert(n,r),Km(t.remoteStore,new Kn(rr(cl(n.path)),r,2,sl.A))}}async function bi(t,e,n){const r=X(t),s=[],i=[],o=[];r.ia.isEmpty()||(r.ia.forEach((a,c)=>{o.push(r._a(c,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),s.push(u);const l=pl.Ys(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.sa.zo(s),await async function(a,c){const u=X(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>A.forEach(c,h=>A.forEach(h.Hs,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>A.forEach(h.Js,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!_i(l))throw l;V("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.ui.get(h),p=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(p);u.ui=u.ui.insert(h,m)}}}(r.localStore,i))}async function KA(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await $m(n.localStore,e);n.currentUser=e,function(s,i){s.la.forEach(o=>{o.forEach(a=>{a.reject(new x(_.CANCELLED,i))})}),s.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bi(n,r.di)}}function zA(t,e){const n=X(t),r=n.aa.get(e);if(r&&r.na)return be().add(r.key);{let s=be();const i=n.ra.get(e);if(!i)return s;for(const o of i){const a=n.ia.get(o);s=s.unionWith(a.view.ju)}return s}}function GA(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ry.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$A.bind(null,e),e.sa.zo=OA.bind(null,e.eventManager),e.sa.wa=DA.bind(null,e.eventManager),e}function WA(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qA.bind(null,e),e}class YA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=fa(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return WC(this.persistence,new zC,e.initialUser,this.M)}ya(e){return new aA(ml.Yi,this.M)}ga(e){return new uA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class XA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KA.bind(null,this.syncEngine),await kA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new NA}createDatastore(e){const n=fa(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new dA(s));var s;return function(i,o,a,c){return new mA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Qf(this.syncEngine,a,0),o=Wf.vt()?new Wf:new lA,new vA(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,u){const l=new MA(r,s,i,o,a,c);return u&&(l.da=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);V("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Ei(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ay{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class QA{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=at.UNAUTHENTICATED,this.clientId=gm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=El(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function JA(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await $m(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ZA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ek(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Yf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Yf(e.remoteStore,i)),t.onlineComponents=e}async function ek(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await JA(t,new YA)),t.offlineComponents}async function cy(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await ZA(t,new XA)),t.onlineComponents}function tk(t){return cy(t).then(e=>e.syncEngine)}async function uy(t){const e=await cy(t),n=e.eventManager;return n.onListen=UA.bind(null,e.syncEngine),n.onUnlisten=BA.bind(null,e.syncEngine),n}function nk(t,e,n={}){const r=new Xt;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new ay({next:h=>{i.enqueueAndForget(()=>Zm(s,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new x(_.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new x(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new ey(cl(o.path),u,{includeMetadataChanges:!0,ku:!0});return Jm(s,l)}(await uy(t),t.asyncQueue,e,n,r)),r.promise}function rk(t,e,n={}){const r=new Xt;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new ay({next:h=>{i.enqueueAndForget(()=>Zm(s,l)),h.fromCache&&a.source==="server"?c.reject(new x(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new ey(o,u,{includeMetadataChanges:!0,ku:!0});return Jm(s,l)}(await uy(t),t.asyncQueue,e,n,r)),r.promise}const Zf=new Map;/**
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
 */function ly(t,e,n){if(!n)throw new x(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sk(t,e,n,r){if(e===!0&&r===!0)throw new x(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ed(t){if(!j.isDocumentKey(t))throw new x(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function td(t){if(j.isDocumentKey(t))throw new x(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ga(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function Cn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ga(t);throw new x(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function ik(t,e){if(e<=0)throw new x(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new x(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,sk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nd({}),this._settingsFrozen=!1,e instanceof qr?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new x(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qr(s.options.projectId)}(e))}get app(){if(!this._app)throw new x(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new CS;switch(n.type){case"gapi":const r=n.client;return ve(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new RS(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new x(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Zf.get(e);n&&(V("ComponentProvider","Removing Datastore"),Zf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}}class ur{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ur(this.firestore,e,this._query)}}class wn extends ur{constructor(e,n,r){super(e,n,cl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new j(e))}withConverter(e){return new wn(this.firestore,e,this._path)}}function hy(t,e,...n){if(t=Se(t),ly("collection","path",e),t instanceof Tl){const r=Ee.fromString(e,...n);return td(r),new wn(t,null,r)}{if(!(t instanceof it||t instanceof wn))throw new x(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return td(r),new wn(t.firestore,null,r)}}function Co(t,e,...n){if(t=Se(t),arguments.length===1&&(e=gm.R()),ly("doc","path",e),t instanceof Tl){const r=Ee.fromString(e,...n);return ed(r),new it(t,null,new j(r))}{if(!(t instanceof it||t instanceof wn))throw new x(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return ed(r),new it(t.firestore,t instanceof wn?t.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new qm(this,"async_queue_retry"),this.Qa=()=>{const n=Ya();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Ya();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const n=Ya();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise(()=>{});const n=new Xt;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$a.push(e),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!_i(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(e){const n=this.Fa.then(()=>(this.qa=!0,e().catch(r=>{this.Ua=r,this.qa=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw In("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.qa=!1,r))));return this.Fa=n,n}enqueueAfterDelay(e,n,r){this.ja(),this.Ga.indexOf(e)>-1&&(n=0);const s=wl.createAndSchedule(this,e,n,r,i=>this.Ha(i));return this.La.push(s),s}ja(){this.Ua&&W()}verifyOperationInProgress(){}async Ja(){let e;do e=this.Fa,await e;while(e!==this.Fa)}Ya(e){for(const n of this.La)if(n.timerId===e)return!0;return!1}Xa(e){return this.Ja().then(()=>{this.La.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.La)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ja()})}Za(e){this.Ga.push(e)}Ha(e){const n=this.La.indexOf(e);this.La.splice(n,1)}}class Ii extends Tl{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new ok,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||fy(this),this._firestoreClient.terminate()}}function ak(t=Iu()){return jo(t,"firestore").getImmediate()}function Sl(t){return t._firestoreClient||fy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function fy(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new LS(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new QA(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ma{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gr(Ke.fromBase64String(e))}catch(n){throw new x(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gr(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e){this._methodName=e}}/**
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
 */class Cl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const ck=/^__.*__$/;class uk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new cs(e,this.data,this.fieldMask,n,this.fieldTransforms):new la(e,this.data,n,this.fieldTransforms)}}class dy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new cs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function py(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class Al{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=s,i===void 0&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new Al(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nc({path:r,ic:!1});return s.rc(e),s}oc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nc({path:r,ic:!1});return s.tc(),s}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return Ao(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(e.length===0)throw this.ac("Document fields must not be empty");if(py(this.ec)&&ck.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class lk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||fa(e)}lc(e,n,r,s=!1){return new Al({ec:e,methodName:n,hc:r,path:ct.emptyPath(),ic:!1,cc:s},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function kl(t){const e=t._freezeSettings(),n=fa(t._databaseId);return new lk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hk(t,e,n,r,s,i={}){const o=t.lc(i.merge||i.mergeFields?2:0,e,n,s);Nl("Data must be an object, but it was:",o,r);const a=gy(r,o);let c,u;if(i.merge)c=new Ys(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=Xc(e,h,n);if(!o.contains(f))throw new x(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);yy(l,f)||l.push(f)}c=new Ys(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new uk(new pt(a),c,u)}class va extends ya{_toFieldTransform(e){if(e.ec!==2)throw e.ec===1?e.ac(`${this._methodName}() can only appear at the top level of your update data`):e.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof va}}class Rl extends ya{_toFieldTransform(e){return new sC(e.path,new Zs)}isEqual(e){return e instanceof Rl}}function fk(t,e,n,r){const s=t.lc(1,e,n);Nl("Data must be an object, but it was:",s,r);const i=[],o=pt.empty();ar(r,(c,u)=>{const l=Ol(e,c,n);u=Se(u);const h=s.oc(l);if(u instanceof va)i.push(l);else{const f=Ti(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new Ys(i);return new dy(o,a,s.fieldTransforms)}function dk(t,e,n,r,s,i){const o=t.lc(1,e,n),a=[Xc(e,r,n)],c=[s];if(i.length%2!=0)throw new x(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Xc(e,i[f])),c.push(i[f+1]);const u=[],l=pt.empty();for(let f=a.length-1;f>=0;--f)if(!yy(u,a[f])){const p=a[f];let m=c[f];m=Se(m);const I=o.oc(p);if(m instanceof va)u.push(p);else{const v=Ti(m,I);v!=null&&(u.push(p),l.set(p,v))}}const h=new Ys(u);return new dy(l,h,o.fieldTransforms)}function pk(t,e,n,r=!1){return Ti(n,t.lc(r?4:3,e))}function Ti(t,e){if(my(t=Se(t)))return Nl("Unsupported field value:",e,t),gy(t,e);if(t instanceof ya)return function(n,r){if(!py(r.ec))throw r.ac(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ac(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&e.ec!==4)throw e.ac("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Ti(o,r.uc(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Se(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return tC(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Qe.fromDate(n);return{timestampValue:To(r.M,s)}}if(n instanceof Qe){const s=new Qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:To(r.M,s)}}if(n instanceof Cl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Gr)return{bytesValue:Mm(r.M,n._byteString)};if(n instanceof it){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ac(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:fl(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ac(`Unsupported field value: ${ga(n)}`)}(t,e)}function gy(t,e){const n={};return mm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ar(t,(r,s)=>{const i=Ti(s,e.sc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function my(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof Cl||t instanceof Gr||t instanceof it||t instanceof ya)}function Nl(t,e,n){if(!my(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ga(n);throw r==="an object"?e.ac(t+" a custom object"):e.ac(t+" "+r)}}function Xc(t,e,n){if((e=Se(e))instanceof ma)return e._internalPath;if(typeof e=="string")return Ol(t,e);throw Ao("Field path arguments must be of type string or ",t,!1,void 0,n)}const gk=new RegExp("[~\\*/\\[\\]]");function Ol(t,e,n){if(e.search(gk)>=0)throw Ao(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ma(...e.split("."))._internalPath}catch{throw Ao(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ao(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new x(_.INVALID_ARGUMENT,a+t+c)}function yy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_a("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mk extends vy{data(){return super.data()}}function _a(t,e){return typeof e=="string"?Ol(t,e):e instanceof ma?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _y extends vy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Qi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_a("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Qi extends _y{data(e={}){return super.data(e)}}class yk{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new bs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Qi(this._firestore,this._userDataWriter,r.key,r,new bs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Qi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new bs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Qi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new bs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:vk(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dl{}function wy(t,...e){for(const n of e)t=n._apply(t);return t}class wk extends Dl{constructor(e,n,r){super(),this._c=e,this.wc=n,this.mc=r,this.type="where"}_apply(e){const n=kl(e.firestore),r=function(s,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new x(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){sd(l,u);const p=[];for(const m of l)p.push(rd(a,s,m));h={arrayValue:{values:p}}}else h=rd(a,s,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||sd(l,u),h=pk(o,i,l,u==="in"||u==="not-in");const f=st.create(c,u,h);return function(p,m){if(m.S()){const v=ll(p);if(v!==null&&!v.isEqual(m.field))throw new x(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${v.toString()}' and '${m.field.toString()}'`);const S=ul(p);S!==null&&Ty(p,m.field,S)}const I=function(v,S){for(const D of v.filters)if(S.indexOf(D.op)>=0)return D.op;return null}(p,function(v){switch(v){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(I!==null)throw I===m.op?new x(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new x(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${I.toString()}' filters.`)}(s,f),f}(e._query,"where",n,e.firestore._databaseId,this._c,this.wc,this.mc);return new ur(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new as(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function Ey(t,e,n){const r=e,s=_a("where",t);return new wk(s,r,n)}class Ek extends Dl{constructor(e,n){super(),this._c=e,this.gc=n,this.type="orderBy"}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new x(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new x(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new xr(s,i);return function(a,c){if(ul(a)===null){const u=ll(a);u!==null&&Ty(a,u,c.field)}}(r,o),o}(e._query,this._c,this.gc);return new ur(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new as(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function by(t,e="asc"){const n=e,r=_a("orderBy",t);return new Ek(r,n)}class bk extends Dl{constructor(e,n,r){super(),this.type=e,this.yc=n,this.Ic=r}_apply(e){return new ur(e.firestore,e.converter,bm(e._query,this.yc,this.Ic))}}function Iy(t){return ik("limit",t),new bk("limit",t,"F")}function rd(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new x(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Em(e)&&n.indexOf("/")!==-1)throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!j.isDocumentKey(r))throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nf(t,new j(r))}if(n instanceof it)return Nf(t,n._key);throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ga(n)}.`)}function sd(t,e){if(!Array.isArray(t)||t.length===0)throw new x(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new x(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ty(t,e,n){if(!n.isEqual(e))throw new x(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{convertValue(e,n="none"){switch(tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){const r={};return ar(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Cl(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=vm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xs(e));default:return null}}convertTimestamp(e){const n=Tn(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);ve(Vm(r));const s=new qr(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(n)||In(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Sk(t){t=Cn(t,it);const e=Cn(t.firestore,Ii);return nk(Sl(e),t._key).then(n=>Ak(e,t,n))}class Sy extends Ik{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,n)}}function Cy(t){t=Cn(t,ur);const e=Cn(t.firestore,Ii),n=Sl(e),r=new Sy(e);return _k(t._query),rk(n,t._query).then(s=>new yk(e,r,t,s))}function Ck(t,e,n){t=Cn(t,it);const r=Cn(t.firestore,Ii),s=Tk(t.converter,e,n);return ky(r,[hk(kl(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Hn.none())])}function Ay(t,e,n,...r){t=Cn(t,it);const s=Cn(t.firestore,Ii),i=kl(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof ma?dk(i,"updateDoc",t._key,e,n,r):fk(i,"updateDoc",t._key,e),ky(s,[o.toMutation(t._key,Hn.exists(!0))])}function ky(t,e){return function(n,r){const s=new Xt;return n.asyncQueue.enqueueAndForget(async()=>VA(await tk(n),r,s)),s.promise}(Sl(t),e)}function Ak(t,e,n){const r=n.docs.get(e._key),s=new Sy(t);return new _y(t,s,e._key,r,new bs(n.hasPendingWrites,n.fromCache),e.converter)}function dN(){return new Rl("serverTimestamp")}(function(t,e=!0){(function(n){os=n})(es),Wn(new bn("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new Ii(s,new AS(n.getProvider("auth-internal")),new OS(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Bt(Sf,"3.4.9",t),Bt(Sf,"3.4.9","esm2017")})();/**
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
 */const Ry="firebasestorage.googleapis.com",Ny="storageBucket",kk=2*60*1e3,Rk=10*60*1e3;/**
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
 */class Ce extends An{constructor(e,n){super(Xa(e),`Firebase Storage: ${n} (${Xa(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}_codeEquals(e){return Xa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Xa(t){return"storage/"+t}function Pl(){const t="An unknown error occurred, please check the error payload for server response.";return new Ce("unknown",t)}function Nk(t){return new Ce("object-not-found","Object '"+t+"' does not exist.")}function Ok(t){return new Ce("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Dk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce("unauthenticated",t)}function Pk(){return new Ce("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function xk(t){return new Ce("unauthorized","User does not have permission to access '"+t+"'.")}function Lk(){return new Ce("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Mk(){return new Ce("canceled","User canceled the upload/download.")}function Uk(t){return new Ce("invalid-url","Invalid URL '"+t+"'.")}function Fk(t){return new Ce("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Bk(){return new Ce("no-default-bucket","No default bucket found. Did you set the '"+Ny+"' property when initializing the app?")}function Vk(){return new Ce("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function $k(){return new Ce("no-download-url","The given file does not have any download URLs.")}function Qc(t){return new Ce("invalid-argument",t)}function Oy(){return new Ce("app-deleted","The Firebase app was deleted.")}function jk(t){return new Ce("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ps(t,e){return new Ce("invalid-format","String does not match format '"+t+"': "+e)}function ms(t){throw new Ce("internal-error","Internal error: "+t)}/**
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
 */class gt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=gt.makeFromUrl(e,n)}catch{return new gt(e,"")}if(r.path==="")return r;throw Fk(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(U){U.path_=decodeURIComponent(U.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${s}/o${f}`,"i"),m={bucket:1,path:3},I=n===Ry?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",S=new RegExp(`^https?://${I}/${s}/${v}`,"i"),B=[{regex:a,indices:c,postModify:i},{regex:p,indices:m,postModify:u},{regex:S,indices:{bucket:1,path:2},postModify:u}];for(let U=0;U<B.length;U++){const ie=B[U],ue=ie.regex.exec(e);if(ue){const Q=ue[ie.indices.bucket];let _e=ue[ie.indices.path];_e||(_e=""),r=new gt(Q,_e),ie.postModify(r);break}}if(r==null)throw Uk(e);return r}}class qk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Hk(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...v){u||(u=!0,e.apply(null,v))}function h(v){s=setTimeout(()=>{s=null,t(p,c())},v)}function f(){i&&clearTimeout(i)}function p(v,...S){if(u){f();return}if(v){f(),l.call(null,v,...S);return}if(c()||o){f(),l.call(null,v,...S);return}r<64&&(r*=2);let B;a===1?(a=2,B=0):B=(r+Math.random())*1e3,h(B)}let m=!1;function I(v){m||(m=!0,f(),!u&&(s!==null?(v||(a=2),clearTimeout(s),h(0)):v||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,I(!0)},n),I}function Kk(t){t(!1)}/**
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
 */function zk(t){return t!==void 0}function Gk(t){return typeof t=="object"&&!Array.isArray(t)}function xl(t){return typeof t=="string"||t instanceof String}function id(t){return Ll()&&t instanceof Blob}function Ll(){return typeof Blob!="undefined"}function od(t,e,n,r){if(r<e)throw Qc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Qc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ml(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Dy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var zn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(zn||(zn={}));/**
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
 */class Wk{constructor(e,n,r,s,i,o,a,c,u,l,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ui(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===zn.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const l=i.getErrorCode()===zn.ABORT;r(!1,new Ui(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Ui(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());zk(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Pl();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Oy():Mk();o(c)}else{const c=Lk();o(c)}};this.canceled_?n(!1,new Ui(!1,null,!0)):this.backoffId_=Hk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Kk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||s||i}}class Ui{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Yk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Xk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Qk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Jk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Zk(t,e,n,r,s,i){const o=Dy(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return Qk(c,e),Yk(c,n),Xk(c,i),Jk(c,r),new Wk(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}/**
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
 */function eR(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function tR(...t){const e=eR();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ll())return new Blob(t);throw new Ce("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function nR(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function rR(t){return atob(t)}/**
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
 */const Ft={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Qa{constructor(e,n){this.data=e,this.contentType=n||null}}function sR(t,e){switch(t){case Ft.RAW:return new Qa(Py(e));case Ft.BASE64:case Ft.BASE64URL:return new Qa(xy(t,e));case Ft.DATA_URL:return new Qa(oR(e),aR(e))}throw Pl()}function Py(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function iR(t){let e;try{e=decodeURIComponent(t)}catch{throw Ps(Ft.DATA_URL,"Malformed data URL.")}return Py(e)}function xy(t,e){switch(t){case Ft.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ps(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Ft.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ps(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=rR(e)}catch{throw Ps(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Ly{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ps(Ft.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=cR(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function oR(t){const e=new Ly(t);return e.base64?xy(Ft.BASE64,e.rest):iR(e.rest)}function aR(t){return new Ly(t).contentType}function cR(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class gn{constructor(e,n){let r=0,s="";id(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(id(this.data_)){const r=this.data_,s=nR(r,e,n);return s===null?null:new gn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new gn(r,!0)}}static getBlob(...e){if(Ll()){const n=e.map(r=>r instanceof gn?r.data_:r);return new gn(tR.apply(null,n))}else{const n=e.map(o=>xl(o)?sR(Ft.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new gn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function My(t){let e;try{e=JSON.parse(t)}catch{return null}return Gk(e)?e:null}/**
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
 */function uR(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function lR(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Uy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function hR(t,e){return e}class Ze{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||hR}}let Fi=null;function fR(t){return!xl(t)||t.length<2?t:Uy(t)}function Fy(){if(Fi)return Fi;const t=[];t.push(new Ze("bucket")),t.push(new Ze("generation")),t.push(new Ze("metageneration")),t.push(new Ze("name","fullPath",!0));function e(i,o){return fR(o)}const n=new Ze("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ze("size");return s.xform=r,t.push(s),t.push(new Ze("timeCreated")),t.push(new Ze("updated")),t.push(new Ze("md5Hash",null,!0)),t.push(new Ze("cacheControl",null,!0)),t.push(new Ze("contentDisposition",null,!0)),t.push(new Ze("contentEncoding",null,!0)),t.push(new Ze("contentLanguage",null,!0)),t.push(new Ze("contentType",null,!0)),t.push(new Ze("metadata","customMetadata",!0)),Fi=t,Fi}function dR(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new gt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function pR(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return dR(r,t),r}function By(t,e,n){const r=My(e);return r===null?null:pR(t,r,n)}function gR(t,e,n,r){const s=My(e);if(s===null||!xl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,f="/b/"+o(l)+"/o/"+o(h),p=Ml(f,n,r),m=Dy({alt:"media",token:u});return p+m})[0]}function mR(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Vy{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function $y(t){if(!t)throw Pl()}function yR(t,e){function n(r,s){const i=By(t,s,e);return $y(i!==null),i}return n}function vR(t,e){function n(r,s){const i=By(t,s,e);return $y(i!==null),gR(i,s,t.host,t._protocol)}return n}function jy(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Pk():s=Dk():n.getStatus()===402?s=Ok(t.bucket):n.getStatus()===403?s=xk(t.path):s=r,s.serverResponse=r.serverResponse,s}return e}function _R(t){const e=jy(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Nk(t.path)),i.serverResponse=s.serverResponse,i}return n}function wR(t,e,n){const r=e.fullServerUrl(),s=Ml(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Vy(s,i,vR(t,n),o);return a.errorHandler=_R(e),a}function ER(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function bR(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=ER(null,e)),r}function IR(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let B="";for(let U=0;U<2;U++)B=B+Math.random().toString().slice(2);return B}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=bR(e,r,s),l=mR(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+c+"--",p=gn.getBlob(h,r,f);if(p===null)throw Vk();const m={name:u.fullPath},I=Ml(i,t.host,t._protocol),v="POST",S=t.maxUploadRetryTime,D=new Vy(I,v,yR(t,n),S);return D.urlParams=m,D.headers=o,D.body=p.uploadData(),D.errorHandler=jy(e),D}class TR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=zn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=zn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=zn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw ms("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ms("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ms("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ms("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ms("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class SR extends TR{initXhr(){this.xhr_.responseType="text"}}function qy(){return new SR}/**
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
 */class ir{constructor(e,n){this._service=e,n instanceof gt?this._location=n:this._location=gt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ir(e,n)}get root(){const e=new gt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Uy(this._location.path)}get storage(){return this._service}get parent(){const e=uR(this._location.path);if(e===null)return null;const n=new gt(this._location.bucket,e);return new ir(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jk(e)}}function CR(t,e,n){t._throwIfRoot("uploadBytes");const r=IR(t.storage,t._location,Fy(),new gn(e,!0),n);return t.storage.makeRequestWithTokens(r,qy).then(s=>({metadata:s,ref:t}))}function AR(t){t._throwIfRoot("getDownloadURL");const e=wR(t.storage,t._location,Fy());return t.storage.makeRequestWithTokens(e,qy).then(n=>{if(n===null)throw $k();return n})}function kR(t,e){const n=lR(t._location.path,e),r=new gt(t._location.bucket,n);return new ir(t.storage,r)}/**
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
 */function RR(t){return/^[A-Za-z]+:\/\//.test(t)}function NR(t,e){return new ir(t,e)}function Hy(t,e){if(t instanceof Ul){const n=t;if(n._bucket==null)throw Bk();const r=new ir(n,n._bucket);return e!=null?Hy(r,e):r}else return e!==void 0?kR(t,e):t}function OR(t,e){if(e&&RR(e)){if(t instanceof Ul)return NR(t,e);throw Qc("To use ref(service, url), the first argument must be a Storage instance.")}else return Hy(t,e)}function ad(t,e){const n=e==null?void 0:e[Ny];return n==null?null:gt.makeFromBucketSpec(n,t)}class Ul{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Ry,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=kk,this._maxUploadRetryTime=Rk,this._requests=new Set,s!=null?this._bucket=gt.makeFromBucketSpec(s,this._host):this._bucket=ad(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gt.makeFromBucketSpec(this._url,e):this._bucket=ad(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){od("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){od("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ir(this,e)}_makeRequest(e,n,r,s){if(this._deleted)return new qk(Oy());{const i=Zk(e,this._appId,r,s,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const cd="@firebase/storage",ud="0.9.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="storage";function DR(t,e,n){return t=Se(t),CR(t,e,n)}function PR(t){return t=Se(t),AR(t)}function zy(t,e){return t=Se(t),OR(t,e)}function xR(t=Iu(),e){return t=Se(t),jo(t,Ky).getImmediate({identifier:e})}function LR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ul(n,r,s,e,es)}function MR(){Wn(new bn(Ky,LR,"PUBLIC").setMultipleInstances(!0)),Bt(cd,ud,""),Bt(cd,ud,"esm2017")}MR();const UR={apiKey:"AIzaSyCO-1zlqihZNJAGUqfbezRKdAbx2xVRurA",authDomain:"if-lost-159f6.firebaseapp.com",projectId:"if-lost-159f6",storageBucket:"if-lost-159f6.appspot.com",messagingSenderId:"55254413607",appId:"1:55254413607:web:2b14450ddb1a97bdccb902"};u0(UR);const Kt=yT(),Wr=ak(),Gy=xR();var Fl=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const FR={methods:{obtenerUsuario(){Dr(Kt,t=>{t||this.$router.push("/login")})},viajar(){}},mounted(){this.obtenerUsuario()}},BR=O("div",null,[O("h2",{class:"ttl-1"},"\xBFQu\xE9 quieres hacer?")],-1),VR={class:"place-items-center grid-cols-1"};function $R(t,e,n,r,s,i){return St(),Lt(ft,null,[BR,O("div",VR,[O("div",null,[O("button",{class:"btn-home",onClick:e[0]||(e[0]=o=>t.$router.push("/viajar"))}," Viajar seguro "),O("button",{class:"btn-home",onClick:e[1]||(e[1]=o=>t.$router.push("/rastrear"))}," Rastrear a alguien "),O("button",{class:"btn-home",onClick:e[2]||(e[2]=o=>t.$router.push("/404"))}," Enviar alerta ahora ")])])],64)}var jR=Fl(FR,[["render",$R]]);const qR={data(){return{correo_is:"",contrase\u00F1a_is:"",correo_cc:"",contrase\u00F1a_cc:"",nombre_cc:"",apellidos_cc:"",numero_cc:"",ciudad_cc:"",numero_contacto:"",correo_contacto:"",nombre_contacto:"",iniciar_sesi\u00F3n:1,paso:0,img:"",uid:""}},methods:{async crearCuenta(){await rI(Kt,this.correo_cc,this.contrase\u00F1a_cc).then(t=>{console.log(t.user)}).catch(t=>{}),oI(Kt.currentUser,{displayName:this.nombre_cc+" "+this.apellidos_cc}).then(()=>{}).catch(t=>{switch(t.code){case"auth/email-already-exists":mensaje="El correo ha sido usado. Si ya tienes una cuenta, incia sesi\xF3n";break;case"auth/invalid-email":mensaje="Correo inv\xE1lido. Ingresa un correo electr\xF3nico v\xE1lido";break;case"auth/invalid-password":mensaje="Contrase\xF1a inv\xE1lida. Las constrase\xF1as deben tener por lo menos 6 caracteres";break;default:mensaje="Ha ocurrido un error desconocido, revisa que hayas ingresado correctamente tus datos";break}Swal.fire({toast:!0,position:"bottom",iconColor:"white",customClass:{popup:"colored-toast"},showConfirmButton:!1,timer:5e3,timerProgressBar:!0,icon:"error",title:mensaje}),this.paso=0}),Dr(Kt,t=>{t&&(this.uid=t.uid,Ck(Co(Wr,"infoUsuarios",t.uid),{numero:this.numero_cc,nombres:this.nombre_cc,apellidos:this.apellidos_cc,ciudad:this.ciudad_cc,descripcion:""}))}),Dr(Kt,t=>{t&&(Ay(Co(Wr,"infoUsuarios",t.uid),{numero_contacto:this.numero_contacto,nombre_contacto:this.nombre_contacto,correo_contacto:this.correo_contacto}),this.paso=3)})},iniciarSesi\u00F3n(){sI(Kt,this.correo_is,this.contrase\u00F1a_is).then(t=>{this.$router.push("/")}).catch(t=>{let e;switch(console.log(t.code),t.code){case"auth/user-not-found":e="El usuario no existe. Si no a\xFAn no tienes cuenta, crea una";break;case"auth/wrong-password":e="Contrase\xF1a incorrecta";break;case"auth/too-many-requests":e="Ya intentaste muchas veces, espera un momento";break;default:e="Ha ocurrido un error desconocido, revisa que hayas ingresado correctamente tus datos";break}Swal.fire({toast:!0,position:"bottom",iconColor:"white",customClass:{popup:"colored-toast"},showConfirmButton:!1,timer:5e3,timerProgressBar:!0,icon:"error",title:e})})},subirPerfil(t){let e=this;this.img=t.target.files[0];const n=new FileReader;n.readAsDataURL(this.img),n.onload=function(r){const s=document.createElement("img");s.src=r.target.result,s.onload=function(i){const o=document.createElement("canvas"),a=500,c=a/i.target.width;o.width=a,o.height=c*i.target.height;const u=o.getContext("2d");u.drawImage(i.target,0,0,o.width,o.height);const l=u.canvas.toDataURL(i.target,"image/png");function h(m,I){for(var v=m.split(","),S=v[0].match(/:(.*?);/)[1],D=atob(v[1]),B=D.length,U=new Uint8Array(B);B--;)U[B]=D.charCodeAt(B);return new File([U],I,{type:S})}e.$refs.perfil.src=l;let f=e.$refs.omitir;f.innerHTML="Descartar cambios y continuar",e.$refs.subir.classList.remove("hidden"),e.$refs.subirperfil.addEventListener("submit",function(m){e.img=h(l,"perfil.png");const I=zy(Gy,"perfiles/"+e.uid);DR(I,e.img).then(v=>{e.paso++})}),f.addEventListener("click",function(m){e.paso++})}}},obtenerUsuario(){Dr(Kt,t=>{t&&this.$router.push("/")})}},mounted(){this.obtenerUsuario}},HR={key:0},KR=O("div",null,[O("h1",{class:"ttl-1"},"Bienvenido"),O("div",null,[O("h3",{class:"subttl"},"Crea una cuenta para comenzar")])],-1),zR=O("button",{type:"submit",class:"btn-blue"},"Crear mi cuenta",-1),GR={class:"mt-4 grid"},WR=O("h3",{class:"subttl"},"\xBFYa tienes una cuenta?",-1),YR={class:"place-self-center"},XR={key:1},QR=O("h1",{class:"ttl-1"},"Ay\xFAdanos a ayudarte",-1),JR=O("h3",{class:"subttl"},"Queremos conocerte mejor",-1),ZR=O("button",{type:"submit",class:"btn-blue"},"Continuar",-1),e1={key:2},t1=O("h1",{class:"ttl-1"},"\xBFA qui\xE9n quieres llegar?",-1),n1=O("h3",{class:"subttl"}," A este contacto enviaremos tu informaci\xF3n en caso de que te pase algo ",-1),r1=O("button",{type:"submit",class:"btn-blue"},"Actualizar informaci\xF3n",-1),s1={key:3},i1=O("h1",{class:"ttl-1"},"Sube una foto de perfil",-1),o1=O("h3",{class:"subttl"},"Intenta que se vea claramente tu rostro",-1),a1={class:"grid mt-8"},c1={class:"place-self-center grid"},u1={src:"https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/perfiles%2Fperfil.png?alt=media",alt:"perfil",ref:"perfil",width:"200",class:"perfil"},l1=O("label",{type:"input",for:"perfil",class:"btn-gray text-center"}," Subir imagen ",-1),h1={type:"submit",class:"btn-blue hidden",ref:"subir"},f1={type:"button",class:"btn-gray",ref:"omitir"},d1={key:4},p1=O("h1",{class:"ttl-1"},"Listo",-1),g1=O("h3",{class:"subttl"},"Configuramos tu cuenta exitosamente",-1),m1={key:5},y1=O("h1",{class:"ttl-1"},"Bienvenido",-1),v1=O("h3",{class:"subttl"},"Nos alegra verte otra vez",-1),_1=O("button",{type:"submit",id:"entrar",class:"btn-blue"}," Entrar a mi cuenta ",-1),w1={class:"mt-4 grid"},E1=O("h3",{class:"subttl"},"\xBFA\xFAn no tienes cuenta?",-1),b1={class:"place-self-center"};function I1(t,e,n,r,s,i){return St(),Lt(ft,null,[s.iniciar_sesi\u00F3n==!1&&s.paso==0?(St(),Lt("div",HR,[KR,O("form",{id:"crearCuenta",onSubmit:e[2]||(e[2]=ds(o=>s.paso=1,["prevent"])),class:"mt-8"},[It(O("input",{class:"inp",type:"email","onUpdate:modelValue":e[0]||(e[0]=o=>s.correo_cc=o),placeholder:"Tu correo electr\xF3nico"},null,512),[[Tt,s.correo_cc]]),It(O("input",{class:"inp mt-4",type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>s.contrase\u00F1a_cc=o),placeholder:"Una buena contrase\xF1a"},null,512),[[Tt,s.contrase\u00F1a_cc]]),zR],32),O("div",GR,[WR,O("div",YR,[O("button",{onClick:e[3]||(e[3]=o=>s.iniciar_sesi\u00F3n=!0),id:"botonInicio",class:"font-semibold underline"}," Inicia sesi\xF3n ")])])])):Pn("",!0),s.paso==1?(St(),Lt("div",XR,[QR,JR,O("form",{id:"informaci\xF3nPersonal",onSubmit:e[8]||(e[8]=ds(o=>s.paso=2,["prevent"])),class:"mt-8"},[It(O("input",{type:"text",placeholder:"Tu nombre(s)","onUpdate:modelValue":e[4]||(e[4]=o=>s.nombre_cc=o),class:"inp"},null,512),[[Tt,s.nombre_cc]]),It(O("input",{type:"text",placeholder:"Tu apellido(s)","onUpdate:modelValue":e[5]||(e[5]=o=>s.apellidos_cc=o),class:"inp mt-4"},null,512),[[Tt,s.apellidos_cc]]),It(O("input",{type:"number",placeholder:"Tu n\xFAmero de tel\xE9fono, a 10 d\xEDgitos","onUpdate:modelValue":e[6]||(e[6]=o=>s.numero_cc=o),class:"inp mt-4"},null,512),[[Tt,s.numero_cc]]),It(O("input",{type:"text",placeholder:"Ciudad donde vives","onUpdate:modelValue":e[7]||(e[7]=o=>s.ciudad_cc=o),class:"inp mt-4"},null,512),[[Tt,s.ciudad_cc]]),ZR],32)])):Pn("",!0),s.paso==2?(St(),Lt("div",e1,[t1,n1,O("form",{onSubmit:e[12]||(e[12]=ds(o=>(s.paso=3,i.crearCuenta()),["prevent"])),class:"mt-8"},[It(O("input",{type:"cel",placeholder:"N\xFAmero telef\xF3nico de 10 d\xEDgitos","onUpdate:modelValue":e[9]||(e[9]=o=>s.numero_contacto=o),class:"inp",required:""},null,512),[[Tt,s.numero_contacto]]),It(O("input",{type:"email",placeholder:"Correo electr\xF3nico","onUpdate:modelValue":e[10]||(e[10]=o=>s.correo_contacto=o),class:"inp mt-4",required:""},null,512),[[Tt,s.correo_contacto]]),It(O("input",{type:"text",placeholder:"Nombre de la persona (opcional)",class:"inp mt-4","onUpdate:modelValue":e[11]||(e[11]=o=>s.nombre_contacto=o)},null,512),[[Tt,s.nombre_contacto]]),r1],32)])):Pn("",!0),s.paso==3?(St(),Lt("div",s1,[i1,o1,O("form",{onSubmit:e[14]||(e[14]=ds(()=>{},["prevent"])),ref:"subirperfil"},[O("div",a1,[O("div",c1,[O("img",u1,null,512),l1,O("input",{id:"perfil",type:"file",accept:".jpg, .jpeg, .png",onChange:e[13]||(e[13]=o=>i.subirPerfil(o)),class:"hidden",required:""},null,32)]),O("button",h1," Actualizar mi perfil ",512),O("button",f1,"Omitir",512)])],544)])):Pn("",!0),s.paso==4?(St(),Lt("div",d1,[p1,g1,O("button",{class:"btn-gray",onClick:e[15]||(e[15]=o=>i.obtenerUsuario())},"Ir a inicio")])):Pn("",!0),s.iniciar_sesi\u00F3n==!0?(St(),Lt("div",m1,[y1,v1,O("form",{onSubmit:e[18]||(e[18]=ds(o=>i.iniciarSesi\u00F3n(),["prevent"])),class:"mt-8"},[It(O("input",{class:"inp",type:"email",placeholder:"Tu correo electr\xF3nico","onUpdate:modelValue":e[16]||(e[16]=o=>s.correo_is=o)},null,512),[[Tt,s.correo_is]]),It(O("input",{class:"inp mt-4",type:"password",placeholder:"Tu contrase\xF1a","onUpdate:modelValue":e[17]||(e[17]=o=>s.contrase\u00F1a_is=o)},null,512),[[Tt,s.contrase\u00F1a_is]]),_1],32),O("div",w1,[E1,O("div",b1,[O("button",{class:"font-semibold underline",onClick:e[19]||(e[19]=o=>s.iniciar_sesi\u00F3n=!1),id:"botonCrearCuenta"}," Crea una ")])])])):Pn("",!0)],64)}var ld=Fl(qR,[["render",I1]]);const T1=[{path:"/",name:"home",component:jR},{path:"/viajar",name:"viajar",component:()=>Ni(()=>import("./crear_viaje.639d43e7.js"),["assets/crear_viaje.639d43e7.js","assets/crear_viaje.6f4cad15.css"])},{path:"/login",name:"login",component:ld},{path:"/rastrear",name:"rastrear",component:()=>Ni(()=>import("./rastrear.cea16686.js"),[])},{path:"/cuenta",name:"cuenta",component:()=>Ni(()=>import("./cuenta.611de4de.js"),[])},{path:"/404",name:"404",component:()=>Ni(()=>import("./404.3573a2ba.js"),[])},{path:"/if-lost/",component:ld}],S1=XE({history:fE(),routes:T1});/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var C1="store";function hs(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function A1(t){return t!==null&&typeof t=="object"}function k1(t){return t&&typeof t.then=="function"}function R1(t,e){return function(){return t(e)}}function Wy(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Yy(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;wa(t,n,[],t._modules.root,!0),Bl(t,n,e)}function Bl(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};hs(s,function(o,a){i[a]=R1(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=Jr({data:e}),t.strict&&x1(t),r&&n&&t._withCommit(function(){r.data=null})}function wa(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=Vl(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var u=r.context=N1(t,o,n);r.forEachMutation(function(l,h){var f=o+h;O1(t,f,l,u)}),r.forEachAction(function(l,h){var f=l.root?h:o+h,p=l.handler||l;D1(t,f,p,u)}),r.forEachGetter(function(l,h){var f=o+h;P1(t,f,l,u)}),r.forEachChild(function(l,h){wa(t,e,n.concat(h),l,s)})}function N1(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=ko(i,o,a),u=c.payload,l=c.options,h=c.type;return(!l||!l.root)&&(h=e+h),t.dispatch(h,u)},commit:r?t.commit:function(i,o,a){var c=ko(i,o,a),u=c.payload,l=c.options,h=c.type;(!l||!l.root)&&(h=e+h),t.commit(h,u,l)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return Xy(t,e)}},state:{get:function(){return Vl(t.state,n)}}}),s}function Xy(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function O1(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function D1(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return k1(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function P1(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function x1(t){Rr(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Vl(t,e){return e.reduce(function(n,r){return n[r]},t)}function ko(t,e,n){return A1(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var L1="vuex bindings",hd="vuex:mutations",Ja="vuex:actions",vr="vuex",M1=0;function U1(t,e){zw({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[L1]},function(n){n.addTimelineLayer({id:hd,label:"Vuex Mutations",color:fd}),n.addTimelineLayer({id:Ja,label:"Vuex Actions",color:fd}),n.addInspector({id:vr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===vr)if(r.filter){var s=[];ev(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[Zy(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===vr){var s=r.nodeId;Xy(e,s),r.state=V1(j1(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===vr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(vr),n.sendInspectorState(vr),n.addTimelineEvent({layerId:hd,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=M1++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:Ja,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:Ja,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var fd=8702998,F1=6710886,B1=16777215,Qy={label:"namespaced",textColor:B1,backgroundColor:F1};function Jy(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Zy(t,e){return{id:e||"root",label:Jy(e),tags:t.namespaced?[Qy]:[],children:Object.keys(t._children).map(function(n){return Zy(t._children[n],e+n+"/")})}}function ev(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Qy]:[]}),Object.keys(e._children).forEach(function(s){ev(t,e._children[s],n,r+s+"/")})}function V1(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=$1(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Jy(o):o,editable:!1,value:Jc(function(){return i[o]})}})}return s}function $1(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Jc(function(){return t[n]})}else e[n]=Jc(function(){return t[n]})}),e}function j1(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Jc(t){try{return t()}catch(e){return e}}var Nt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},tv={namespaced:{configurable:!0}};tv.namespaced.get=function(){return!!this._rawModule.namespaced};Nt.prototype.addChild=function(e,n){this._children[e]=n};Nt.prototype.removeChild=function(e){delete this._children[e]};Nt.prototype.getChild=function(e){return this._children[e]};Nt.prototype.hasChild=function(e){return e in this._children};Nt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Nt.prototype.forEachChild=function(e){hs(this._children,e)};Nt.prototype.forEachGetter=function(e){this._rawModule.getters&&hs(this._rawModule.getters,e)};Nt.prototype.forEachAction=function(e){this._rawModule.actions&&hs(this._rawModule.actions,e)};Nt.prototype.forEachMutation=function(e){this._rawModule.mutations&&hs(this._rawModule.mutations,e)};Object.defineProperties(Nt.prototype,tv);var lr=function(e){this.register([],e,!1)};lr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};lr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};lr.prototype.update=function(e){nv([],this.root,e)};lr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Nt(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&hs(n.modules,function(a,c){s.register(e.concat(c),a,r)})};lr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);!s||!s.runtime||n.removeChild(r)};lr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function nv(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;nv(t.concat(r),e.getChild(r),n.modules[r])}}function q1(t){return new ut(t)}var ut=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new lr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(f,p){return c.call(o,f,p)},this.commit=function(f,p,m){return u.call(o,f,p,m)},this.strict=s;var l=this._modules.root.state;wa(this,l,[],this._modules.root),Bl(this,l),r.forEach(function(h){return h(n)})},$l={state:{configurable:!0}};ut.prototype.install=function(e,n){e.provide(n||C1,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&U1(e,this)};$l.state.get=function(){return this._state.data};$l.state.set=function(t){};ut.prototype.commit=function(e,n,r){var s=this,i=ko(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},u=this._mutations[o];!u||(this._withCommit(function(){u.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(l){return l(c,s.state)}))};ut.prototype.dispatch=function(e,n){var r=this,s=ko(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(l){return l.before}).forEach(function(l){return l.before(a,r.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(l){return l(o)})):c[0](o);return new Promise(function(l,h){u.then(function(f){try{r._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,r.state)})}catch{}l(f)},function(f){try{r._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,r.state,f)})}catch{}h(f)})})}};ut.prototype.subscribe=function(e,n){return Wy(e,this._subscribers,n)};ut.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Wy(r,this._actionSubscribers,n)};ut.prototype.watch=function(e,n,r){var s=this;return Rr(function(){return e(s.state,s.getters)},n,Object.assign({},r))};ut.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};ut.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),wa(this,this.state,e,this._modules.get(e),r.preserveState),Bl(this,this.state)};ut.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Vl(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Yy(this)};ut.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};ut.prototype.hotUpdate=function(e){this._modules.update(e),Yy(this,!0)};ut.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(ut.prototype,$l);const rv=q1({state:{usuario:{id:"",nombre:"",ciudad:"",correo:"",tel:"",perfil:"",descripcion:"",contacto:{nombre:"",correo:"",tel:""},viaje:{destino:"",infodestino:"",salida:"",llegada:"",alerta:0,img:"",infoimg:"",nota:"",mapa:"",clave:""}}},mutations:{obtenerUsuario(t){Dr(Kt,async e=>{if(e){t.usuario.id=e.uid,t.usuario.nombre=e.displayName,t.usuario.correo=e.email;const n=Co(Wr,"infoUsuarios",e.uid),r=await Sk(n);if(r.exists()){let c=r.data();t.usuario.ciudad=c.ciudad,t.usuario.descripcion=c.descripcion,t.usuario.tel=c.numero,t.usuario.contacto.correo=c.correo_contacto,t.usuario.contacto.nombre=c.nombre_contacto,t.usuario.contacto.tel=c.numero_contacto}const s=zy(Gy,"perfiles/"+t.usuario.id);PR(s).then(c=>{t.usuario.perfil=c}).catch(c=>{t.usuario.perfil="https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/perfiles%2Fperfil.png?alt=media&token=5a6ff639-cdc5-4372-a6c7-adc73e14fe47"});const i=wy(hy(Wr,"viajes"),Ey("creador","==",t.usuario.id),by("creado","desc"),Iy(1));let o=await Cy(i),a;o.forEach(c=>{a=c.data()}),t.usuario.viaje.destino=a.destino,t.usuario.viaje.infodestino=a.infodestino,t.usuario.viaje.salida=a.salida,t.usuario.viaje.llegada=a.llegada,t.usuario.viaje.alerta=a.alerta,t.usuario.viaje.img=a.img,t.usuario.viaje.infoimg=a.infoimg,t.usuario.viaje.nota=a.nota,t.usuario.viaje.mapa=a.mapa,t.usuario.viaje.clave=a.clave}})}},actions:{},getters:{}});rv.commit("obtenerUsuario");const H1={data(){return{datos:[],tempo:!1,uid:"",i:0}},computed:{usuario(){return this.$store.state.usuario}},methods:{obtenerTemporizador(){Dr(Kt,async t=>{if(t){const e=wy(hy(Wr,"viajes"),Ey("creador","==",this.usuario.id),by("creado","desc"),Iy(1));let n;(await Cy(e)).forEach(i=>{n=i.data()});let s=new Date().getTime();n.alerta!=null&&n.alerta>s&&(this.temporizador(n.alerta),this.tempo=!0,this.$refs.views.classList.add("mb-12")),this.$refs.accesos.classList.remove("hidden")}else this.$refs.accesos.classList.add("hidden"),this.$refs.tempodiv.classList.add("hidden")})},temporizador(t){let e=this;var n=new Date(t).getTime();e.$refs.tempodiv.classList.remove("hidden"),e.i=setInterval(function(){var r=new Date().getTime(),s=n-r,i=Math.floor(s%(1e3*60*60*24)/(1e3*60*60)),o=Math.floor(s%(1e3*60*60)/(1e3*60)),a=Math.floor(s%(1e3*60)/1e3);i>1?document.getElementById("temporizador").innerHTML="Tu alerta se enviar\xE1 en<br/>"+i+" horas "+o+" minutos ":(o<10&&e.$refs.tempodiv.classList.add("bg-red-400"),o>0?document.getElementById("temporizador").innerHTML="Tu alerta se enviar\xE1 en<br/>"+o+" minutos "+a+" segundos ":document.getElementById("temporizador").innerHTML="Tu alerta se enviar\xE1 en<br/>"+a+" segundos ",s<0&&s>-1e3&&(clearInterval(e.i),e.$refs.btncancelar.classList.add("hidden"),document.getElementById("temporizador").innerHTML="Estamos contactando a tu contacto de confianza",e.enviarCorreo(),e.cancelarAlerta(5e3)))},1e3)},async enviarCorreo(){let t=[],e=this.usuario.nombre.split(" ");t={nombre:e[0],apellido:e[1],destino:this.usuario.viaje.destino,hora_alerta:this.usuario.viaje.llegada,clave:this.usuario.viaje.clave,email:this.usuario.contacto.correo},emailjs.send("default_service","alerta_iflost",t).then(async()=>{document.getElementById("temporizador").innerHTML="Listo, enviamos un correo a tu contacto de confianza"},n=>{})},async cancelarAlerta(t){let e=this;const n=Co(Wr,"viajes",this.usuario.viaje.clave);await Ay(n,{alerta:null}),setTimeout(function(){e.$refs.tempodiv.classList.add("hidden")},t)}},mounted(){this.obtenerTemporizador(),emailjs.init("NDQJF30o6mjc6lt_F"),this.$route.name!="home"&&this.$router.push("/")},watch:{$route:function(t,e){this.obtenerTemporizador()}}},K1={class:"p-5 desktop:max-w-[450px] desktop:m-auto",ref:"views"},z1={class:"grid"},G1={ref:"tempodiv",class:"alerta hidden"},W1={class:"justify-self-end place-content-center"},Y1={id:"temporizador",ref:"temporizador",class:"text-white animate-[pulse_3s_infinite] pl-2 text-sm"},X1={class:"grid grid-cols-1 mt-24"},Q1={class:"menu-hidden",ref:"menu"},J1={class:"grid grid-rows-2"},Z1=O("i",{class:"fa-solid fa-angle-up justify-self-center"},null,-1),eN={class:"grid grid-cols-2"},tN=O("div",{class:"grid"},[O("img",{src:"https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/logo.svg?alt=media",class:"max-h-12 p-3 self-center"})],-1),nN={class:"flex mb-2 justify-self-end",ref:"accesos"},rN=O("span",{class:"material-symbols-rounded"},"home",-1),sN=O("span",{class:"material-symbols-rounded"}," newspaper ",-1),iN=O("span",{class:"material-symbols-rounded"}," person ",-1);function oN(t,e,n,r,s,i){const o=hh("router-view"),a=hh("router-link");return St(),Lt(ft,null,[O("div",K1,[Ve(o)],512),O("div",z1,[O("div",G1,[O("div",W1,[O("p",Y1,null,512)]),s.tempo==!0?(St(),Lt("button",{key:0,class:"btn-red rounded-full mr-5 ml-5 mt-0 w-[33%] text-sm",onClick:e[0]||(e[0]=c=>i.cancelarAlerta(0)),ref:"btncancelar"}," Cancelar alerta ",512)):Pn("",!0)],512)]),O("div",X1,[O("div",Q1,[O("div",J1,[Z1,O("div",eN,[tN,O("div",nN,[Ve(a,{class:"btn-menu",to:"/"},{default:$i(()=>[rN]),_:1}),Ve(a,{class:"btn-menu",to:"/404"},{default:$i(()=>[sN]),_:1}),Ve(a,{class:"btn-menu",to:"/cuenta"},{default:$i(()=>[iN]),_:1})],512)])])],512)])],64)}var aN=Fl(H1,[["render",oN]]);Lw(aN).use(rv).use(S1).mount("#app");export{ft as F,Co as I,Fl as _,Ck as a,Kt as b,St as c,Lt as d,O as e,ds as f,Pn as g,X_ as h,Wr as i,lN as j,hN as k,Sk as l,fN as m,Ay as n,Dr as o,dN as p,zy as r,Gy as s,uN as t,DR as u,Tt as v,It as w};
