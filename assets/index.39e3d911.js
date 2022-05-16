var by=Object.defineProperty,Ty=Object.defineProperties;var Iy=Object.getOwnPropertyDescriptors;var Lu=Object.getOwnPropertySymbols;var Sy=Object.prototype.hasOwnProperty,Cy=Object.prototype.propertyIsEnumerable;var Mu=(t,e,n)=>e in t?by(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Uu=(t,e)=>{for(var n in e||(e={}))Sy.call(e,n)&&Mu(t,n,e[n]);if(Lu)for(var n of Lu(e))Cy.call(e,n)&&Mu(t,n,e[n]);return t},Fu=(t,e)=>Ty(t,Iy(e));const Ay=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};Ay();function Xc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ky="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ry=Xc(ky);function Zf(t){return!!t||t===""}function Yc(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=qe(s)?Py(s):Yc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(qe(t))return t;if(Pe(t))return t}}const Ny=/;(?![^(]*\))/g,Oy=/:(.+)/;function Py(t){const e={};return t.split(Ny).forEach(n=>{if(n){const s=n.split(Oy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Qc(t){let e="";if(qe(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const s=Qc(t[n]);s&&(e+=s+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const P1=t=>qe(t)?t:t==null?"":X(t)||Pe(t)&&(t.toString===sd||!J(t.toString))?JSON.stringify(t,ed,2):String(t),ed=(t,e)=>e&&e.__v_isRef?ed(t,e.value):Cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:td(e)?{[`Set(${e.size})`]:[...e.values()]}:Pe(e)&&!X(e)&&!rd(e)?String(e):e,pe={},Ss=[],At=()=>{},Dy=()=>!1,xy=/^on[^a-z]/,To=t=>xy.test(t),Jc=t=>t.startsWith("onUpdate:"),Je=Object.assign,Zc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ly=Object.prototype.hasOwnProperty,se=(t,e)=>Ly.call(t,e),X=Array.isArray,Cs=t=>Io(t)==="[object Map]",td=t=>Io(t)==="[object Set]",J=t=>typeof t=="function",qe=t=>typeof t=="string",el=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",nd=t=>Pe(t)&&J(t.then)&&J(t.catch),sd=Object.prototype.toString,Io=t=>sd.call(t),My=t=>Io(t).slice(8,-1),rd=t=>Io(t)==="[object Object]",tl=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xi=Xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),So=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Uy=/-(\w)/g,jt=So(t=>t.replace(Uy,(e,n)=>n?n.toUpperCase():"")),Fy=/\B([A-Z])/g,Ws=So(t=>t.replace(Fy,"-$1").toLowerCase()),Co=So(t=>t.charAt(0).toUpperCase()+t.slice(1)),ma=So(t=>t?`on${Co(t)}`:""),Or=(t,e)=>!Object.is(t,e),Li=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},zi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Wa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Bu;const By=()=>Bu||(Bu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let xt;class Vy{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&xt&&(this.parent=xt,this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function $y(t,e=xt){e&&e.active&&e.effects.push(t)}const nl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},id=t=>(t.w&wn)>0,od=t=>(t.n&wn)>0,jy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=wn},Hy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];id(r)&&!od(r)?r.delete(t):e[n++]=r,r.w&=~wn,r.n&=~wn}e.length=n}},Ga=new WeakMap;let pr=0,wn=1;const Xa=30;let Ct;const Fn=Symbol(""),Ya=Symbol("");class sl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$y(this,s)}run(){if(!this.active)return this.fn();let e=Ct,n=gn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ct,Ct=this,gn=!0,wn=1<<++pr,pr<=Xa?jy(this):Vu(this),this.fn()}finally{pr<=Xa&&Hy(this),wn=1<<--pr,Ct=this.parent,gn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ct===this?this.deferStop=!0:this.active&&(Vu(this),this.onStop&&this.onStop(),this.active=!1)}}function Vu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let gn=!0;const ad=[];function Gs(){ad.push(gn),gn=!1}function Xs(){const t=ad.pop();gn=t===void 0?!0:t}function mt(t,e,n){if(gn&&Ct){let s=Ga.get(t);s||Ga.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=nl()),cd(r)}}function cd(t,e){let n=!1;pr<=Xa?od(t)||(t.n|=wn,n=!id(t)):n=!t.has(Ct),n&&(t.add(Ct),Ct.deps.push(t))}function Qt(t,e,n,s,r,i){const o=Ga.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&X(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":X(t)?tl(n)&&a.push(o.get("length")):(a.push(o.get(Fn)),Cs(t)&&a.push(o.get(Ya)));break;case"delete":X(t)||(a.push(o.get(Fn)),Cs(t)&&a.push(o.get(Ya)));break;case"set":Cs(t)&&a.push(o.get(Fn));break}if(a.length===1)a[0]&&Qa(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Qa(nl(c))}}function Qa(t,e){for(const n of X(t)?t:[...t])(n!==Ct||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const qy=Xc("__proto__,__v_isRef,__isVue"),ld=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(el)),Ky=rl(),zy=rl(!1,!0),Wy=rl(!0),$u=Gy();function Gy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ae(this);for(let i=0,o=this.length;i<o;i++)mt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ae)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Gs();const s=ae(this)[e].apply(this,n);return Xs(),s}}),t}function rl(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?uv:pd:e?dd:fd).get(s))return s;const o=X(s);if(!t&&o&&se($u,r))return Reflect.get($u,r,i);const a=Reflect.get(s,r,i);return(el(r)?ld.has(r):qy(r))||(t||mt(s,"get",r),e)?a:Be(a)?!o||!tl(r)?a.value:a:Pe(a)?t?gd(a):Ys(a):a}}const Xy=ud(),Yy=ud(!0);function ud(t=!1){return function(n,s,r,i){let o=n[s];if(Pr(o)&&Be(o)&&!Be(r))return!1;if(!t&&!Pr(r)&&(md(r)||(r=ae(r),o=ae(o)),!X(n)&&Be(o)&&!Be(r)))return o.value=r,!0;const a=X(n)&&tl(s)?Number(s)<n.length:se(n,s),c=Reflect.set(n,s,r,i);return n===ae(i)&&(a?Or(r,o)&&Qt(n,"set",s,r):Qt(n,"add",s,r)),c}}function Qy(t,e){const n=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Qt(t,"delete",e,void 0),s}function Jy(t,e){const n=Reflect.has(t,e);return(!el(e)||!ld.has(e))&&mt(t,"has",e),n}function Zy(t){return mt(t,"iterate",X(t)?"length":Fn),Reflect.ownKeys(t)}const hd={get:Ky,set:Xy,deleteProperty:Qy,has:Jy,ownKeys:Zy},ev={get:Wy,set(t,e){return!0},deleteProperty(t,e){return!0}},tv=Je({},hd,{get:zy,set:Yy}),il=t=>t,Ao=t=>Reflect.getPrototypeOf(t);function wi(t,e,n=!1,s=!1){t=t.__v_raw;const r=ae(t),i=ae(e);e!==i&&!n&&mt(r,"get",e),!n&&mt(r,"get",i);const{has:o}=Ao(r),a=s?il:n?cl:Dr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Ei(t,e=!1){const n=this.__v_raw,s=ae(n),r=ae(t);return t!==r&&!e&&mt(s,"has",t),!e&&mt(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function bi(t,e=!1){return t=t.__v_raw,!e&&mt(ae(t),"iterate",Fn),Reflect.get(t,"size",t)}function ju(t){t=ae(t);const e=ae(this);return Ao(e).has.call(e,t)||(e.add(t),Qt(e,"add",t,t)),this}function Hu(t,e){e=ae(e);const n=ae(this),{has:s,get:r}=Ao(n);let i=s.call(n,t);i||(t=ae(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Or(e,o)&&Qt(n,"set",t,e):Qt(n,"add",t,e),this}function qu(t){const e=ae(this),{has:n,get:s}=Ao(e);let r=n.call(e,t);r||(t=ae(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Qt(e,"delete",t,void 0),i}function Ku(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&Qt(t,"clear",void 0,void 0),n}function Ti(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ae(o),c=e?il:t?cl:Dr;return!t&&mt(a,"iterate",Fn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Ii(t,e,n){return function(...s){const r=this.__v_raw,i=ae(r),o=Cs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?il:e?cl:Dr;return!e&&mt(i,"iterate",c?Ya:Fn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function nn(t){return function(...e){return t==="delete"?!1:this}}function nv(){const t={get(i){return wi(this,i)},get size(){return bi(this)},has:Ei,add:ju,set:Hu,delete:qu,clear:Ku,forEach:Ti(!1,!1)},e={get(i){return wi(this,i,!1,!0)},get size(){return bi(this)},has:Ei,add:ju,set:Hu,delete:qu,clear:Ku,forEach:Ti(!1,!0)},n={get(i){return wi(this,i,!0)},get size(){return bi(this,!0)},has(i){return Ei.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:Ti(!0,!1)},s={get(i){return wi(this,i,!0,!0)},get size(){return bi(this,!0)},has(i){return Ei.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:Ti(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ii(i,!1,!1),n[i]=Ii(i,!0,!1),e[i]=Ii(i,!1,!0),s[i]=Ii(i,!0,!0)}),[t,n,e,s]}const[sv,rv,iv,ov]=nv();function ol(t,e){const n=e?t?ov:iv:t?rv:sv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const av={get:ol(!1,!1)},cv={get:ol(!1,!0)},lv={get:ol(!0,!1)},fd=new WeakMap,dd=new WeakMap,pd=new WeakMap,uv=new WeakMap;function hv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fv(t){return t.__v_skip||!Object.isExtensible(t)?0:hv(My(t))}function Ys(t){return Pr(t)?t:al(t,!1,hd,av,fd)}function dv(t){return al(t,!1,tv,cv,dd)}function gd(t){return al(t,!0,ev,lv,pd)}function al(t,e,n,s,r){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=fv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function As(t){return Pr(t)?As(t.__v_raw):!!(t&&t.__v_isReactive)}function Pr(t){return!!(t&&t.__v_isReadonly)}function md(t){return!!(t&&t.__v_isShallow)}function yd(t){return As(t)||Pr(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function vd(t){return zi(t,"__v_skip",!0),t}const Dr=t=>Pe(t)?Ys(t):t,cl=t=>Pe(t)?gd(t):t;function _d(t){gn&&Ct&&(t=ae(t),cd(t.dep||(t.dep=nl())))}function wd(t,e){t=ae(t),t.dep&&Qa(t.dep)}function Be(t){return!!(t&&t.__v_isRef===!0)}function pv(t){return Ed(t,!1)}function gv(t){return Ed(t,!0)}function Ed(t,e){return Be(t)?t:new mv(t,e)}class mv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:Dr(e)}get value(){return _d(this),this._value}set value(e){e=this.__v_isShallow?e:ae(e),Or(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Dr(e),wd(this))}}function _r(t){return Be(t)?t.value:t}const yv={get:(t,e,n)=>_r(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Be(r)&&!Be(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function bd(t){return As(t)?t:new Proxy(t,yv)}class vv{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new sl(e,()=>{this._dirty||(this._dirty=!0,wd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ae(this);return _d(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function _v(t,e,n=!1){let s,r;const i=J(t);return i?(s=t,r=At):(s=t.get,r=t.set),new vv(s,r,i||!r,n)}function mn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ko(i,e,n)}return r}function Et(t,e,n,s){if(J(t)){const i=mn(t,e,n,s);return i&&nd(i)&&i.catch(o=>{ko(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Et(t[i],e,n,s));return r}function ko(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){mn(c,null,10,[t,o,a]);return}}wv(t,n,r,s)}function wv(t,e,n,s=!0){console.error(t)}let Wi=!1,Ja=!1;const ft=[];let zt=0;const wr=[];let gr=null,vs=0;const Er=[];let an=null,_s=0;const Td=Promise.resolve();let ll=null,Za=null;function Id(t){const e=ll||Td;return t?e.then(this?t.bind(this):t):e}function Ev(t){let e=zt+1,n=ft.length;for(;e<n;){const s=e+n>>>1;xr(ft[s])<t?e=s+1:n=s}return e}function Sd(t){(!ft.length||!ft.includes(t,Wi&&t.allowRecurse?zt+1:zt))&&t!==Za&&(t.id==null?ft.push(t):ft.splice(Ev(t.id),0,t),Cd())}function Cd(){!Wi&&!Ja&&(Ja=!0,ll=Td.then(Rd))}function bv(t){const e=ft.indexOf(t);e>zt&&ft.splice(e,1)}function Ad(t,e,n,s){X(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Cd()}function Tv(t){Ad(t,gr,wr,vs)}function Iv(t){Ad(t,an,Er,_s)}function ul(t,e=null){if(wr.length){for(Za=e,gr=[...new Set(wr)],wr.length=0,vs=0;vs<gr.length;vs++)gr[vs]();gr=null,vs=0,Za=null,ul(t,e)}}function kd(t){if(Er.length){const e=[...new Set(Er)];if(Er.length=0,an){an.push(...e);return}for(an=e,an.sort((n,s)=>xr(n)-xr(s)),_s=0;_s<an.length;_s++)an[_s]();an=null,_s=0}}const xr=t=>t.id==null?1/0:t.id;function Rd(t){Ja=!1,Wi=!0,ul(t),ft.sort((n,s)=>xr(n)-xr(s));const e=At;try{for(zt=0;zt<ft.length;zt++){const n=ft[zt];n&&n.active!==!1&&mn(n,null,14)}}finally{zt=0,ft.length=0,kd(),Wi=!1,ll=null,(ft.length||wr.length||Er.length)&&Rd(t)}}function Sv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||pe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||pe;f?r=n.map(g=>g.trim()):h&&(r=n.map(Wa))}let a,c=s[a=ma(e)]||s[a=ma(jt(e))];!c&&i&&(c=s[a=ma(Ws(e))]),c&&Et(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Et(l,t,6,r)}}function Nd(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!J(t)){const c=l=>{const u=Nd(l,e,!0);u&&(a=!0,Je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(X(i)?i.forEach(c=>o[c]=null):Je(o,i),s.set(t,o),o)}function Ro(t,e){return!t||!To(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Ws(e))||se(t,e))}let wt=null,No=null;function Gi(t){const e=wt;return wt=t,No=t&&t.type.__scopeId||null,e}function D1(t){No=t}function x1(){No=null}function Mi(t,e=wt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&sh(-1);const i=Gi(e),o=t(...r);return Gi(i),s._d&&sh(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function ya(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:m,inheritAttrs:b}=t;let _,k;const D=Gi(t);try{if(n.shapeFlag&4){const M=r||s;_=Mt(u.call(M,M,h,i,g,f,m)),k=c}else{const M=e;_=Mt(M.length>1?M(i,{attrs:c,slots:a,emit:l}):M(i,null)),k=e.props?c:Cv(c)}}catch(M){br.length=0,ko(M,t,1),_=Ve(kt)}let F=_;if(k&&b!==!1){const M=Object.keys(k),{shapeFlag:ie}=F;M.length&&ie&7&&(o&&M.some(Jc)&&(k=Av(k,o)),F=Wn(F,k))}return n.dirs&&(F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),_=F,Gi(D),_}const Cv=t=>{let e;for(const n in t)(n==="class"||n==="style"||To(n))&&((e||(e={}))[n]=t[n]);return e},Av=(t,e)=>{const n={};for(const s in t)(!Jc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function kv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?zu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Ro(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?zu(s,o,l):!0:!!o;return!1}function zu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ro(n,i))return!0}return!1}function Rv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Nv=t=>t.__isSuspense;function Ov(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):Iv(t)}function Ui(t,e){if(Oe){let n=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===n&&(n=Oe.provides=Object.create(s)),n[t]=e}}function yn(t,e,n=!1){const s=Oe||wt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&J(e)?e.call(s.proxy):e}}const Wu={};function ks(t,e,n){return Od(t,e,n)}function Od(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=pe){const a=Oe;let c,l=!1,u=!1;if(Be(t)?(c=()=>t.value,l=md(t)):As(t)?(c=()=>t,s=!0):X(t)?(u=!0,l=t.some(As),c=()=>t.map(k=>{if(Be(k))return k.value;if(As(k))return Ln(k);if(J(k))return mn(k,a,2)})):J(t)?e?c=()=>mn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Et(t,a,3,[f])}:c=At,e&&s){const k=c;c=()=>Ln(k())}let h,f=k=>{h=_.onStop=()=>{mn(k,a,4)}};if(Lr)return f=At,e?n&&Et(e,a,3,[c(),u?[]:void 0,f]):c(),At;let g=u?[]:Wu;const m=()=>{if(!!_.active)if(e){const k=_.run();(s||l||(u?k.some((D,F)=>Or(D,g[F])):Or(k,g)))&&(h&&h(),Et(e,a,3,[k,g===Wu?void 0:g,f]),g=k)}else _.run()};m.allowRecurse=!!e;let b;r==="sync"?b=m:r==="post"?b=()=>rt(m,a&&a.suspense):b=()=>{!a||a.isMounted?Tv(m):m()};const _=new sl(c,b);return e?n?m():g=_.run():r==="post"?rt(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&Zc(a.scope.effects,_)}}function Pv(t,e,n){const s=this.proxy,r=qe(t)?t.includes(".")?Pd(s,t):()=>s[t]:t.bind(s,s);let i;J(e)?i=e:(i=e.handler,n=e);const o=Oe;xs(this);const a=Od(r,i.bind(s),n);return o?xs(o):Vn(),a}function Pd(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ln(t,e){if(!Pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Be(t))Ln(t.value,e);else if(X(t))for(let n=0;n<t.length;n++)Ln(t[n],e);else if(td(t)||Cs(t))t.forEach(n=>{Ln(n,e)});else if(rd(t))for(const n in t)Ln(t[n],e);return t}function Dv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ud(()=>{t.isMounted=!0}),Fd(()=>{t.isUnmounting=!0}),t}const _t=[Function,Array],xv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_t,onEnter:_t,onAfterEnter:_t,onEnterCancelled:_t,onBeforeLeave:_t,onLeave:_t,onAfterLeave:_t,onLeaveCancelled:_t,onBeforeAppear:_t,onAppear:_t,onAfterAppear:_t,onAppearCancelled:_t},setup(t,{slots:e}){const n=w_(),s=Dv();let r;return()=>{const i=e.default&&xd(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const b of i)if(b.type!==kt){o=b;break}}const a=ae(t),{mode:c}=a;if(s.isLeaving)return va(o);const l=Gu(o);if(!l)return va(o);const u=ec(l,a,s,n);tc(l,u);const h=n.subTree,f=h&&Gu(h);let g=!1;const{getTransitionKey:m}=l.type;if(m){const b=m();r===void 0?r=b:b!==r&&(r=b,g=!0)}if(f&&f.type!==kt&&(!Dn(l,f)||g)){const b=ec(f,a,s,n);if(tc(f,b),c==="out-in")return s.isLeaving=!0,b.afterLeave=()=>{s.isLeaving=!1,n.update()},va(o);c==="in-out"&&l.type!==kt&&(b.delayLeave=(_,k,D)=>{const F=Dd(s,f);F[String(f.key)]=f,_._leaveCb=()=>{k(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=D})}return o}}},Lv=xv;function Dd(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ec(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:b,onAppear:_,onAfterAppear:k,onAppearCancelled:D}=e,F=String(t.key),M=Dd(n,t),ie=(Q,_e)=>{Q&&Et(Q,s,9,_e)},le={mode:i,persisted:o,beforeEnter(Q){let _e=a;if(!n.isMounted)if(r)_e=b||a;else return;Q._leaveCb&&Q._leaveCb(!0);const ge=M[F];ge&&Dn(t,ge)&&ge.el._leaveCb&&ge.el._leaveCb(),ie(_e,[Q])},enter(Q){let _e=c,ge=l,We=u;if(!n.isMounted)if(r)_e=_||c,ge=k||l,We=D||u;else return;let Ge=!1;const Ue=Q._enterCb=tn=>{Ge||(Ge=!0,tn?ie(We,[Q]):ie(ge,[Q]),le.delayedLeave&&le.delayedLeave(),Q._enterCb=void 0)};_e?(_e(Q,Ue),_e.length<=1&&Ue()):Ue()},leave(Q,_e){const ge=String(t.key);if(Q._enterCb&&Q._enterCb(!0),n.isUnmounting)return _e();ie(h,[Q]);let We=!1;const Ge=Q._leaveCb=Ue=>{We||(We=!0,_e(),Ue?ie(m,[Q]):ie(g,[Q]),Q._leaveCb=void 0,M[ge]===t&&delete M[ge])};M[ge]=t,f?(f(Q,Ge),f.length<=1&&Ge()):Ge()},clone(Q){return ec(Q,e,n,s)}};return le}function va(t){if(Oo(t))return t=Wn(t),t.children=null,t}function Gu(t){return Oo(t)?t.children?t.children[0]:void 0:t}function tc(t,e){t.shapeFlag&6&&t.component?tc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function xd(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ht?(o.patchFlag&128&&r++,s=s.concat(xd(o.children,e,a))):(e||o.type!==kt)&&s.push(a!=null?Wn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Ld(t){return J(t)?{setup:t,name:t.name}:t}const nc=t=>!!t.type.__asyncLoader,Oo=t=>t.type.__isKeepAlive;function Mv(t,e){Md(t,"a",e)}function Uv(t,e){Md(t,"da",e)}function Md(t,e,n=Oe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Po(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Oo(r.parent.vnode)&&Fv(s,e,n,r),r=r.parent}}function Fv(t,e,n,s){const r=Po(e,t,s,!0);Bd(()=>{Zc(s[e],r)},n)}function Po(t,e,n=Oe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Gs(),xs(n);const a=Et(e,n,t,o);return Vn(),Xs(),a});return s?r.unshift(i):r.push(i),i}}const en=t=>(e,n=Oe)=>(!Lr||t==="sp")&&Po(t,e,n),Bv=en("bm"),Ud=en("m"),Vv=en("bu"),$v=en("u"),Fd=en("bum"),Bd=en("um"),jv=en("sp"),Hv=en("rtg"),qv=en("rtc");function Kv(t,e=Oe){Po("ec",t,e)}let sc=!0;function zv(t){const e=$d(t),n=t.proxy,s=t.ctx;sc=!1,e.beforeCreate&&Xu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:m,activated:b,deactivated:_,beforeDestroy:k,beforeUnmount:D,destroyed:F,unmounted:M,render:ie,renderTracked:le,renderTriggered:Q,errorCaptured:_e,serverPrefetch:ge,expose:We,inheritAttrs:Ge,components:Ue,directives:tn,filters:us}=e;if(l&&Wv(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const ue=o[me];J(ue)&&(s[me]=ue.bind(n))}if(r){const me=r.call(n,n);Pe(me)&&(t.data=Ys(me))}if(sc=!0,i)for(const me in i){const ue=i[me],lt=J(ue)?ue.bind(n,n):J(ue.get)?ue.get.bind(n,n):At,fs=!J(ue)&&J(ue.set)?ue.set.bind(n):At,qt=Ut({get:lt,set:fs});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>qt.value,set:Ot=>qt.value=Ot})}if(a)for(const me in a)Vd(a[me],s,n,me);if(c){const me=J(c)?c.call(n):c;Reflect.ownKeys(me).forEach(ue=>{Ui(ue,me[ue])})}u&&Xu(u,t,"c");function ke(me,ue){X(ue)?ue.forEach(lt=>me(lt.bind(n))):ue&&me(ue.bind(n))}if(ke(Bv,h),ke(Ud,f),ke(Vv,g),ke($v,m),ke(Mv,b),ke(Uv,_),ke(Kv,_e),ke(qv,le),ke(Hv,Q),ke(Fd,D),ke(Bd,M),ke(jv,ge),X(We))if(We.length){const me=t.exposed||(t.exposed={});We.forEach(ue=>{Object.defineProperty(me,ue,{get:()=>n[ue],set:lt=>n[ue]=lt})})}else t.exposed||(t.exposed={});ie&&t.render===At&&(t.render=ie),Ge!=null&&(t.inheritAttrs=Ge),Ue&&(t.components=Ue),tn&&(t.directives=tn)}function Wv(t,e,n=At,s=!1){X(t)&&(t=rc(t));for(const r in t){const i=t[r];let o;Pe(i)?"default"in i?o=yn(i.from||r,i.default,!0):o=yn(i.from||r):o=yn(i),Be(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Xu(t,e,n){Et(X(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Vd(t,e,n,s){const r=s.includes(".")?Pd(n,s):()=>n[s];if(qe(t)){const i=e[t];J(i)&&ks(r,i)}else if(J(t))ks(r,t.bind(n));else if(Pe(t))if(X(t))t.forEach(i=>Vd(i,e,n,s));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)&&ks(r,i,t)}}function $d(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Xi(c,l,o,!0)),Xi(c,e,o)),i.set(e,c),c}function Xi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Xi(t,i,n,!0),r&&r.forEach(o=>Xi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Gv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Gv={data:Yu,props:Nn,emits:Nn,methods:Nn,computed:Nn,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:Nn,directives:Nn,watch:Yv,provide:Yu,inject:Xv};function Yu(t,e){return e?t?function(){return Je(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function Xv(t,e){return Nn(rc(t),rc(e))}function rc(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function et(t,e){return t?[...new Set([].concat(t,e))]:e}function Nn(t,e){return t?Je(Je(Object.create(null),t),e):e}function Yv(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const s in e)n[s]=et(t[s],e[s]);return n}function Qv(t,e,n,s=!1){const r={},i={};zi(i,Do,1),t.propsDefaults=Object.create(null),jd(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:dv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Jv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ae(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ro(t.emitsOptions,f))continue;const g=e[f];if(c)if(se(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const m=jt(f);r[m]=ic(c,a,m,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{jd(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!se(e,h)&&((u=Ws(h))===h||!se(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=ic(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!se(e,h)&&!0)&&(delete i[h],l=!0)}l&&Qt(t,"set","$attrs")}function jd(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(xi(c))continue;const l=e[c];let u;r&&se(r,u=jt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ro(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ae(n),l=a||pe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ic(r,c,h,l[h],t,!se(l,h))}}return o}function ic(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&J(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(xs(r),s=l[n]=c.call(null,e),Vn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ws(n))&&(s=!0))}return s}function Hd(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!J(t)){const u=h=>{c=!0;const[f,g]=Hd(h,e,!0);Je(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,Ss),Ss;if(X(i))for(let u=0;u<i.length;u++){const h=jt(i[u]);Qu(h)&&(o[h]=pe)}else if(i)for(const u in i){const h=jt(u);if(Qu(h)){const f=i[u],g=o[h]=X(f)||J(f)?{type:f}:f;if(g){const m=eh(Boolean,g.type),b=eh(String,g.type);g[0]=m>-1,g[1]=b<0||m<b,(m>-1||se(g,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function Qu(t){return t[0]!=="$"}function Ju(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Zu(t,e){return Ju(t)===Ju(e)}function eh(t,e){return X(e)?e.findIndex(n=>Zu(n,t)):J(e)&&Zu(e,t)?0:-1}const qd=t=>t[0]==="_"||t==="$stable",hl=t=>X(t)?t.map(Mt):[Mt(t)],Zv=(t,e,n)=>{const s=Mi((...r)=>hl(e(...r)),n);return s._c=!1,s},Kd=(t,e,n)=>{const s=t._ctx;for(const r in t){if(qd(r))continue;const i=t[r];if(J(i))e[r]=Zv(r,i,s);else if(i!=null){const o=hl(i);e[r]=()=>o}}},zd=(t,e)=>{const n=hl(e);t.slots.default=()=>n},e_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),zi(e,"_",n)):Kd(e,t.slots={})}else t.slots={},e&&zd(t,e);zi(t.slots,Do,1)},t_=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Je(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Kd(e,r)),o=e}else e&&(zd(t,e),o={default:1});if(i)for(const a in r)!qd(a)&&!(a in o)&&delete r[a]};function Tt(t,e){const n=wt;if(n===null)return t;const s=xo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=pe]=e[i];J(o)&&(o={mounted:o,updated:o}),o.deep&&Ln(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function kn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Gs(),Et(c,n,8,[t.el,a,t,e]),Xs())}}function Wd(){return{app:null,config:{isNativeTag:Dy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let n_=0;function s_(t,e){return function(s,r=null){J(s)||(s=Object.assign({},s)),r!=null&&!Pe(r)&&(r=null);const i=Wd(),o=new Set;let a=!1;const c=i.app={_uid:n_++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:A_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(c,...u)):J(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Ve(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,xo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function oc(t,e,n,s,r=!1){if(X(t)){t.forEach((f,g)=>oc(f,e&&(X(e)?e[g]:e),n,s,r));return}if(nc(s)&&!r)return;const i=s.shapeFlag&4?xo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===pe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(qe(l)?(u[l]=null,se(h,l)&&(h[l]=null)):Be(l)&&(l.value=null)),J(c))mn(c,a,12,[o,u]);else{const f=qe(c),g=Be(c);if(f||g){const m=()=>{if(t.f){const b=f?u[c]:c.value;r?X(b)&&Zc(b,i):X(b)?b.includes(i)||b.push(i):f?(u[c]=[i],se(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,se(h,c)&&(h[c]=o)):Be(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,rt(m,n)):m()}}}const rt=Ov;function r_(t){return i_(t)}function i_(t,e){const n=By();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=At,cloneNode:m,insertStaticContent:b}=t,_=(d,p,y,E=null,w=null,A=null,P=!1,S=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!Dn(d,p)&&(E=V(d),vt(d,w,A,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:T,ref:$,shapeFlag:L}=p;switch(T){case fl:k(d,p,y,E);break;case kt:D(d,p,y,E);break;case _a:d==null&&F(p,y,E,P);break;case ht:tn(d,p,y,E,w,A,P,S,R);break;default:L&1?le(d,p,y,E,w,A,P,S,R):L&6?us(d,p,y,E,w,A,P,S,R):(L&64||L&128)&&T.process(d,p,y,E,w,A,P,S,R,ye)}$!=null&&w&&oc($,d&&d.ref,A,p||d,!p)},k=(d,p,y,E)=>{if(d==null)s(p.el=a(p.children),y,E);else{const w=p.el=d.el;p.children!==d.children&&l(w,p.children)}},D=(d,p,y,E)=>{d==null?s(p.el=c(p.children||""),y,E):p.el=d.el},F=(d,p,y,E)=>{[d.el,d.anchor]=b(d.children,p,y,E,d.el,d.anchor)},M=({el:d,anchor:p},y,E)=>{let w;for(;d&&d!==p;)w=f(d),s(d,y,E),d=w;s(p,y,E)},ie=({el:d,anchor:p})=>{let y;for(;d&&d!==p;)y=f(d),r(d),d=y;r(p)},le=(d,p,y,E,w,A,P,S,R)=>{P=P||p.type==="svg",d==null?Q(p,y,E,w,A,P,S,R):We(d,p,w,A,P,S,R)},Q=(d,p,y,E,w,A,P,S)=>{let R,T;const{type:$,props:L,shapeFlag:j,transition:W,patchFlag:re,dirs:be}=d;if(d.el&&m!==void 0&&re===-1)R=d.el=m(d.el);else{if(R=d.el=o(d.type,A,L&&L.is,L),j&8?u(R,d.children):j&16&&ge(d.children,R,null,E,w,A&&$!=="foreignObject",P,S),be&&kn(d,null,E,"created"),L){for(const we in L)we!=="value"&&!xi(we)&&i(R,we,null,L[we],A,d.children,E,w,N);"value"in L&&i(R,"value",null,L.value),(T=L.onVnodeBeforeMount)&&Dt(T,E,d)}_e(R,d,d.scopeId,P,E)}be&&kn(d,null,E,"beforeMount");const fe=(!w||w&&!w.pendingBranch)&&W&&!W.persisted;fe&&W.beforeEnter(R),s(R,p,y),((T=L&&L.onVnodeMounted)||fe||be)&&rt(()=>{T&&Dt(T,E,d),fe&&W.enter(R),be&&kn(d,null,E,"mounted")},w)},_e=(d,p,y,E,w)=>{if(y&&g(d,y),E)for(let A=0;A<E.length;A++)g(d,E[A]);if(w){let A=w.subTree;if(p===A){const P=w.vnode;_e(d,P,P.scopeId,P.slotScopeIds,w.parent)}}},ge=(d,p,y,E,w,A,P,S,R=0)=>{for(let T=R;T<d.length;T++){const $=d[T]=S?cn(d[T]):Mt(d[T]);_(null,$,p,y,E,w,A,P,S)}},We=(d,p,y,E,w,A,P)=>{const S=p.el=d.el;let{patchFlag:R,dynamicChildren:T,dirs:$}=p;R|=d.patchFlag&16;const L=d.props||pe,j=p.props||pe;let W;y&&Rn(y,!1),(W=j.onVnodeBeforeUpdate)&&Dt(W,y,p,d),$&&kn(p,d,y,"beforeUpdate"),y&&Rn(y,!0);const re=w&&p.type!=="foreignObject";if(T?Ge(d.dynamicChildren,T,S,y,E,re,A):P||lt(d,p,S,null,y,E,re,A,!1),R>0){if(R&16)Ue(S,p,L,j,y,E,w);else if(R&2&&L.class!==j.class&&i(S,"class",null,j.class,w),R&4&&i(S,"style",L.style,j.style,w),R&8){const be=p.dynamicProps;for(let fe=0;fe<be.length;fe++){const we=be[fe],bt=L[we],ds=j[we];(ds!==bt||we==="value")&&i(S,we,bt,ds,w,d.children,y,E,N)}}R&1&&d.children!==p.children&&u(S,p.children)}else!P&&T==null&&Ue(S,p,L,j,y,E,w);((W=j.onVnodeUpdated)||$)&&rt(()=>{W&&Dt(W,y,p,d),$&&kn(p,d,y,"updated")},E)},Ge=(d,p,y,E,w,A,P)=>{for(let S=0;S<p.length;S++){const R=d[S],T=p[S],$=R.el&&(R.type===ht||!Dn(R,T)||R.shapeFlag&70)?h(R.el):y;_(R,T,$,null,E,w,A,P,!0)}},Ue=(d,p,y,E,w,A,P)=>{if(y!==E){for(const S in E){if(xi(S))continue;const R=E[S],T=y[S];R!==T&&S!=="value"&&i(d,S,T,R,P,p.children,w,A,N)}if(y!==pe)for(const S in y)!xi(S)&&!(S in E)&&i(d,S,y[S],null,P,p.children,w,A,N);"value"in E&&i(d,"value",y.value,E.value)}},tn=(d,p,y,E,w,A,P,S,R)=>{const T=p.el=d?d.el:a(""),$=p.anchor=d?d.anchor:a("");let{patchFlag:L,dynamicChildren:j,slotScopeIds:W}=p;W&&(S=S?S.concat(W):W),d==null?(s(T,y,E),s($,y,E),ge(p.children,y,$,w,A,P,S,R)):L>0&&L&64&&j&&d.dynamicChildren?(Ge(d.dynamicChildren,j,y,w,A,P,S),(p.key!=null||w&&p===w.subTree)&&Gd(d,p,!0)):lt(d,p,y,$,w,A,P,S,R)},us=(d,p,y,E,w,A,P,S,R)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?w.ctx.activate(p,y,E,P,R):hs(p,y,E,w,A,P,R):ke(d,p,R)},hs=(d,p,y,E,w,A,P)=>{const S=d.component=__(d,E,w);if(Oo(d)&&(S.ctx.renderer=ye),E_(S),S.asyncDep){if(w&&w.registerDep(S,me),!d.el){const R=S.subTree=Ve(kt);D(null,R,p,y)}return}me(S,d,p,y,w,A,P)},ke=(d,p,y)=>{const E=p.component=d.component;if(kv(d,p,y))if(E.asyncDep&&!E.asyncResolved){ue(E,p,y);return}else E.next=p,bv(E.update),E.update();else p.component=d.component,p.el=d.el,E.vnode=p},me=(d,p,y,E,w,A,P)=>{const S=()=>{if(d.isMounted){let{next:$,bu:L,u:j,parent:W,vnode:re}=d,be=$,fe;Rn(d,!1),$?($.el=re.el,ue(d,$,P)):$=re,L&&Li(L),(fe=$.props&&$.props.onVnodeBeforeUpdate)&&Dt(fe,W,$,re),Rn(d,!0);const we=ya(d),bt=d.subTree;d.subTree=we,_(bt,we,h(bt.el),V(bt),d,w,A),$.el=we.el,be===null&&Rv(d,we.el),j&&rt(j,w),(fe=$.props&&$.props.onVnodeUpdated)&&rt(()=>Dt(fe,W,$,re),w)}else{let $;const{el:L,props:j}=p,{bm:W,m:re,parent:be}=d,fe=nc(p);if(Rn(d,!1),W&&Li(W),!fe&&($=j&&j.onVnodeBeforeMount)&&Dt($,be,p),Rn(d,!0),L&&Z){const we=()=>{d.subTree=ya(d),Z(L,d.subTree,d,w,null)};fe?p.type.__asyncLoader().then(()=>!d.isUnmounted&&we()):we()}else{const we=d.subTree=ya(d);_(null,we,y,E,d,w,A),p.el=we.el}if(re&&rt(re,w),!fe&&($=j&&j.onVnodeMounted)){const we=p;rt(()=>Dt($,be,we),w)}p.shapeFlag&256&&d.a&&rt(d.a,w),d.isMounted=!0,p=y=E=null}},R=d.effect=new sl(S,()=>Sd(d.update),d.scope),T=d.update=R.run.bind(R);T.id=d.uid,Rn(d,!0),T()},ue=(d,p,y)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,Jv(d,p.props,E,y),t_(d,p.children,y),Gs(),ul(void 0,d.update),Xs()},lt=(d,p,y,E,w,A,P,S,R=!1)=>{const T=d&&d.children,$=d?d.shapeFlag:0,L=p.children,{patchFlag:j,shapeFlag:W}=p;if(j>0){if(j&128){qt(T,L,y,E,w,A,P,S,R);return}else if(j&256){fs(T,L,y,E,w,A,P,S,R);return}}W&8?($&16&&N(T,w,A),L!==T&&u(y,L)):$&16?W&16?qt(T,L,y,E,w,A,P,S,R):N(T,w,A,!0):($&8&&u(y,""),W&16&&ge(L,y,E,w,A,P,S,R))},fs=(d,p,y,E,w,A,P,S,R)=>{d=d||Ss,p=p||Ss;const T=d.length,$=p.length,L=Math.min(T,$);let j;for(j=0;j<L;j++){const W=p[j]=R?cn(p[j]):Mt(p[j]);_(d[j],W,y,null,w,A,P,S,R)}T>$?N(d,w,A,!0,!1,L):ge(p,y,E,w,A,P,S,R,L)},qt=(d,p,y,E,w,A,P,S,R)=>{let T=0;const $=p.length;let L=d.length-1,j=$-1;for(;T<=L&&T<=j;){const W=d[T],re=p[T]=R?cn(p[T]):Mt(p[T]);if(Dn(W,re))_(W,re,y,null,w,A,P,S,R);else break;T++}for(;T<=L&&T<=j;){const W=d[L],re=p[j]=R?cn(p[j]):Mt(p[j]);if(Dn(W,re))_(W,re,y,null,w,A,P,S,R);else break;L--,j--}if(T>L){if(T<=j){const W=j+1,re=W<$?p[W].el:E;for(;T<=j;)_(null,p[T]=R?cn(p[T]):Mt(p[T]),y,re,w,A,P,S,R),T++}}else if(T>j)for(;T<=L;)vt(d[T],w,A,!0),T++;else{const W=T,re=T,be=new Map;for(T=re;T<=j;T++){const ut=p[T]=R?cn(p[T]):Mt(p[T]);ut.key!=null&&be.set(ut.key,T)}let fe,we=0;const bt=j-re+1;let ds=!1,Pu=0;const lr=new Array(bt);for(T=0;T<bt;T++)lr[T]=0;for(T=W;T<=L;T++){const ut=d[T];if(we>=bt){vt(ut,w,A,!0);continue}let Pt;if(ut.key!=null)Pt=be.get(ut.key);else for(fe=re;fe<=j;fe++)if(lr[fe-re]===0&&Dn(ut,p[fe])){Pt=fe;break}Pt===void 0?vt(ut,w,A,!0):(lr[Pt-re]=T+1,Pt>=Pu?Pu=Pt:ds=!0,_(ut,p[Pt],y,null,w,A,P,S,R),we++)}const Du=ds?o_(lr):Ss;for(fe=Du.length-1,T=bt-1;T>=0;T--){const ut=re+T,Pt=p[ut],xu=ut+1<$?p[ut+1].el:E;lr[T]===0?_(null,Pt,y,xu,w,A,P,S,R):ds&&(fe<0||T!==Du[fe]?Ot(Pt,y,xu,2):fe--)}}},Ot=(d,p,y,E,w=null)=>{const{el:A,type:P,transition:S,children:R,shapeFlag:T}=d;if(T&6){Ot(d.component.subTree,p,y,E);return}if(T&128){d.suspense.move(p,y,E);return}if(T&64){P.move(d,p,y,ye);return}if(P===ht){s(A,p,y);for(let L=0;L<R.length;L++)Ot(R[L],p,y,E);s(d.anchor,p,y);return}if(P===_a){M(d,p,y);return}if(E!==2&&T&1&&S)if(E===0)S.beforeEnter(A),s(A,p,y),rt(()=>S.enter(A),w);else{const{leave:L,delayLeave:j,afterLeave:W}=S,re=()=>s(A,p,y),be=()=>{L(A,()=>{re(),W&&W()})};j?j(A,re,be):be()}else s(A,p,y)},vt=(d,p,y,E=!1,w=!1)=>{const{type:A,props:P,ref:S,children:R,dynamicChildren:T,shapeFlag:$,patchFlag:L,dirs:j}=d;if(S!=null&&oc(S,null,y,d,!0),$&256){p.ctx.deactivate(d);return}const W=$&1&&j,re=!nc(d);let be;if(re&&(be=P&&P.onVnodeBeforeUnmount)&&Dt(be,p,d),$&6)U(d.component,y,E);else{if($&128){d.suspense.unmount(y,E);return}W&&kn(d,null,p,"beforeUnmount"),$&64?d.type.remove(d,p,y,w,ye,E):T&&(A!==ht||L>0&&L&64)?N(T,p,y,!1,!0):(A===ht&&L&384||!w&&$&16)&&N(R,p,y),E&&ga(d)}(re&&(be=P&&P.onVnodeUnmounted)||W)&&rt(()=>{be&&Dt(be,p,d),W&&kn(d,null,p,"unmounted")},y)},ga=d=>{const{type:p,el:y,anchor:E,transition:w}=d;if(p===ht){v(y,E);return}if(p===_a){ie(d);return}const A=()=>{r(y),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:P,delayLeave:S}=w,R=()=>P(y,A);S?S(d.el,A,R):R()}else A()},v=(d,p)=>{let y;for(;d!==p;)y=f(d),r(d),d=y;r(p)},U=(d,p,y)=>{const{bum:E,scope:w,update:A,subTree:P,um:S}=d;E&&Li(E),w.stop(),A&&(A.active=!1,vt(P,d,p,y)),S&&rt(S,p),rt(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(d,p,y,E=!1,w=!1,A=0)=>{for(let P=A;P<d.length;P++)vt(d[P],p,y,E,w)},V=d=>d.shapeFlag&6?V(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),he=(d,p,y)=>{d==null?p._vnode&&vt(p._vnode,null,null,!0):_(p._vnode||null,d,p,null,null,null,y),kd(),p._vnode=d},ye={p:_,um:vt,m:Ot,r:ga,mt:hs,mc:ge,pc:lt,pbc:Ge,n:V,o:t};let te,Z;return e&&([te,Z]=e(ye)),{render:he,hydrate:te,createApp:s_(he,te)}}function Rn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Gd(t,e,n=!1){const s=t.children,r=e.children;if(X(s)&&X(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=cn(r[i]),a.el=o.el),n||Gd(o,a))}}function o_(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const a_=t=>t.__isTeleport,Xd="components";function th(t,e){return l_(Xd,t,!0,e)||t}const c_=Symbol();function l_(t,e,n=!0,s=!1){const r=wt||Oe;if(r){const i=r.type;if(t===Xd){const a=S_(i);if(a&&(a===e||a===jt(e)||a===Co(jt(e))))return i}const o=nh(r[t]||i[t],e)||nh(r.appContext[t],e);return!o&&s?i:o}}function nh(t,e){return t&&(t[e]||t[jt(e)]||t[Co(jt(e))])}const ht=Symbol(void 0),fl=Symbol(void 0),kt=Symbol(void 0),_a=Symbol(void 0),br=[];let Bn=null;function St(t=!1){br.push(Bn=t?null:[])}function u_(){br.pop(),Bn=br[br.length-1]||null}let Yi=1;function sh(t){Yi+=t}function Yd(t){return t.dynamicChildren=Yi>0?Bn||Ss:null,u_(),Yi>0&&Bn&&Bn.push(t),t}function Lt(t,e,n,s,r,i){return Yd(O(t,e,n,s,r,i,!0))}function h_(t,e,n,s,r){return Yd(Ve(t,e,n,s,r,!0))}function ac(t){return t?t.__v_isVNode===!0:!1}function Dn(t,e){return t.type===e.type&&t.key===e.key}const Do="__vInternal",Qd=({key:t})=>t!=null?t:null,Fi=({ref:t,ref_key:e,ref_for:n})=>t!=null?qe(t)||Be(t)||J(t)?{i:wt,r:t,k:e,f:!!n}:t:null;function O(t,e=null,n=null,s=0,r=null,i=t===ht?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qd(e),ref:e&&Fi(e),scopeId:No,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(dl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),Yi>0&&!o&&Bn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Bn.push(c),c}const Ve=f_;function f_(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===c_)&&(t=kt),ac(t)){const a=Wn(t,e,!0);return n&&dl(a,n),a}if(C_(t)&&(t=t.__vccOpts),e){e=d_(e);let{class:a,style:c}=e;a&&!qe(a)&&(e.class=Qc(a)),Pe(c)&&(yd(c)&&!X(c)&&(c=Je({},c)),e.style=Yc(c))}const o=qe(t)?1:Nv(t)?128:a_(t)?64:Pe(t)?4:J(t)?2:0;return O(t,e,n,s,r,o,i,!0)}function d_(t){return t?yd(t)||Do in t?Je({},t):t:null}function Wn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?g_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Qd(a),ref:e&&e.ref?n&&r?X(r)?r.concat(Fi(e)):[r,Fi(e)]:Fi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wn(t.ssContent),ssFallback:t.ssFallback&&Wn(t.ssFallback),el:t.el,anchor:t.anchor}}function p_(t=" ",e=0){return Ve(fl,null,t,e)}function On(t="",e=!1){return e?(St(),h_(kt,null,t)):Ve(kt,null,t)}function Mt(t){return t==null||typeof t=="boolean"?Ve(kt):X(t)?Ve(ht,null,t.slice()):typeof t=="object"?cn(t):Ve(fl,null,String(t))}function cn(t){return t.el===null||t.memo?t:Wn(t)}function dl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),dl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Do in e)?e._ctx=wt:r===3&&wt&&(wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:wt},n=32):(e=String(e),s&64?(n=16,e=[p_(e)]):n=8);t.children=e,t.shapeFlag|=n}function g_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Qc([e.class,s.class]));else if(r==="style")e.style=Yc([e.style,s.style]);else if(To(r)){const i=e[r],o=s[r];o&&i!==o&&!(X(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Dt(t,e,n,s=null){Et(t,e,7,[n,s])}const cc=t=>t?Jd(t)?xo(t)||t.proxy:cc(t.parent):null,Qi=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cc(t.parent),$root:t=>cc(t.root),$emit:t=>t.emit,$options:t=>$d(t),$forceUpdate:t=>()=>Sd(t.update),$nextTick:t=>Id.bind(t.proxy),$watch:t=>Pv.bind(t)}),m_={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==pe&&se(s,e))return o[e]=1,s[e];if(r!==pe&&se(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&se(l,e))return o[e]=3,i[e];if(n!==pe&&se(n,e))return o[e]=4,n[e];sc&&(o[e]=0)}}const u=Qi[e];let h,f;if(u)return e==="$attrs"&&mt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==pe&&se(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,se(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==pe&&se(r,e)?(r[e]=n,!0):s!==pe&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==pe&&se(t,o)||e!==pe&&se(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(Qi,o)||se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},y_=Wd();let v_=0;function __(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||y_,i={uid:v_++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hd(s,r),emitsOptions:Nd(s,r),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:s.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Sv.bind(null,i),t.ce&&t.ce(i),i}let Oe=null;const w_=()=>Oe||wt,xs=t=>{Oe=t,t.scope.on()},Vn=()=>{Oe&&Oe.scope.off(),Oe=null};function Jd(t){return t.vnode.shapeFlag&4}let Lr=!1;function E_(t,e=!1){Lr=e;const{props:n,children:s}=t.vnode,r=Jd(t);Qv(t,n,r,e),e_(t,s);const i=r?b_(t,e):void 0;return Lr=!1,i}function b_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=vd(new Proxy(t.ctx,m_));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?I_(t):null;xs(t),Gs();const i=mn(s,t,0,[t.props,r]);if(Xs(),Vn(),nd(i)){if(i.then(Vn,Vn),e)return i.then(o=>{rh(t,o,e)}).catch(o=>{ko(o,t,0)});t.asyncDep=i}else rh(t,i,e)}else Zd(t,e)}function rh(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=bd(e)),Zd(t,n)}let ih;function Zd(t,e,n){const s=t.type;if(!t.render){if(!e&&ih&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Je(Je({isCustomElement:i,delimiters:a},o),c);s.render=ih(r,l)}}t.render=s.render||At}xs(t),Gs(),zv(t),Xs(),Vn()}function T_(t){return new Proxy(t.attrs,{get(e,n){return mt(t,"get","$attrs"),e[n]}})}function I_(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=T_(t))},slots:t.slots,emit:t.emit,expose:e}}function xo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(bd(vd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qi)return Qi[n](t)}}))}function S_(t){return J(t)&&t.displayName||t.name}function C_(t){return J(t)&&"__vccOpts"in t}const Ut=(t,e)=>_v(t,e,Lr);function ep(t,e,n){const s=arguments.length;return s===2?Pe(e)&&!X(e)?ac(e)?Ve(t,null,[e]):Ve(t,e):Ve(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ac(n)&&(n=[n]),Ve(t,e,n))}const A_="3.2.33",k_="http://www.w3.org/2000/svg",xn=typeof document!="undefined"?document:null,oh=xn&&xn.createElement("template"),R_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?xn.createElementNS(k_,t):xn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>xn.createTextNode(t),createComment:t=>xn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{oh.innerHTML=s?`<svg>${t}</svg>`:t;const a=oh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function N_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function O_(t,e,n){const s=t.style,r=qe(n);if(n&&!r){for(const i in n)lc(s,i,n[i]);if(e&&!qe(e))for(const i in e)n[i]==null&&lc(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const ah=/\s*!important$/;function lc(t,e,n){if(X(n))n.forEach(s=>lc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=P_(t,e);ah.test(n)?t.setProperty(Ws(s),n.replace(ah,""),"important"):t[s]=n}}const ch=["Webkit","Moz","ms"],wa={};function P_(t,e){const n=wa[e];if(n)return n;let s=jt(e);if(s!=="filter"&&s in t)return wa[e]=s;s=Co(s);for(let r=0;r<ch.length;r++){const i=ch[r]+s;if(i in t)return wa[e]=i}return e}const lh="http://www.w3.org/1999/xlink";function D_(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(lh,e.slice(6,e.length)):t.setAttributeNS(lh,e,n);else{const i=Ry(e);n==null||i&&!Zf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function x_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Zf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[tp,L_]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let uc=0;const M_=Promise.resolve(),U_=()=>{uc=0},F_=()=>uc||(M_.then(U_),uc=tp());function ws(t,e,n,s){t.addEventListener(e,n,s)}function B_(t,e,n,s){t.removeEventListener(e,n,s)}function V_(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=$_(e);if(s){const l=i[e]=j_(s,r);ws(t,a,l,c)}else o&&(B_(t,a,o,c),i[e]=void 0)}}const uh=/(?:Once|Passive|Capture)$/;function $_(t){let e;if(uh.test(t)){e={};let n;for(;n=t.match(uh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Ws(t.slice(2)),e]}function j_(t,e){const n=s=>{const r=s.timeStamp||tp();(L_||r>=n.attached-1)&&Et(H_(s,n.value),e,5,[s])};return n.value=t,n.attached=F_(),n}function H_(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const hh=/^on[a-z]/,q_=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?N_(t,s,r):e==="style"?O_(t,n,s):To(e)?Jc(e)||V_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):K_(t,e,s,r))?x_(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),D_(t,e,s,r))};function K_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&hh.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||hh.test(e)&&qe(n)?!1:e in t}const z_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Lv.props;const fh=t=>{const e=t.props["onUpdate:modelValue"];return X(e)?n=>Li(e,n):e};function W_(t){t.target.composing=!0}function dh(t){const e=t.target;e.composing&&(e.composing=!1,G_(e,"input"))}function G_(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const It={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=fh(r);const i=s||r.props&&r.props.type==="number";ws(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Wa(a)),t._assign(a)}),n&&ws(t,"change",()=>{t.value=t.value.trim()}),e||(ws(t,"compositionstart",W_),ws(t,"compositionend",dh),ws(t,"change",dh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=fh(i),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Wa(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},X_=["ctrl","shift","alt","meta"],Y_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>X_.some(n=>t[`${n}Key`]&&!e.includes(n))},ur=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Y_[e[r]];if(i&&i(n,e))return}return t(n,...s)},Q_=Je({patchProp:q_},R_);let ph;function J_(){return ph||(ph=r_(Q_))}const Z_=(...t)=>{const e=J_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=ew(s);if(!r)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function ew(t){return qe(t)?document.querySelector(t):t}const tw="modulepreload",gh={},nw="/if-lost/",Si=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${nw}${s}`,s in gh)return;gh[s]=!0;const r=s.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":tw,r||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),r)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function sw(){return np().__VUE_DEVTOOLS_GLOBAL_HOOK__}function np(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const rw=typeof Proxy=="function",iw="devtools-plugin:setup",ow="plugin:settings:set";let ps,hc;function aw(){var t;return ps!==void 0||(typeof window!="undefined"&&window.performance?(ps=!0,hc=window.performance):typeof global!="undefined"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(ps=!0,hc=global.perf_hooks.performance):ps=!1),ps}function cw(){return aw()?hc.now():Date.now()}class lw{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return cw()}},n&&n.on(ow,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function uw(t,e){const n=t,s=np(),r=sw(),i=rw&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(iw,t,e);else{const o=i?new lw(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const sp=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Qs=t=>sp?Symbol(t):"_vr_"+t,hw=Qs("rvlm"),mh=Qs("rvd"),pl=Qs("r"),rp=Qs("rl"),fc=Qs("rvl"),Es=typeof window!="undefined";function fw(t){return t.__esModule||sp&&t[Symbol.toStringTag]==="Module"}const de=Object.assign;function Ea(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const Tr=()=>{},dw=/\/$/,pw=t=>t.replace(dw,"");function ba(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=vw(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function gw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function yh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mw(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ls(e.matched[s],n.matched[r])&&ip(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ls(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ip(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!yw(t[n],e[n]))return!1;return!0}function yw(t,e){return Array.isArray(t)?vh(t,e):Array.isArray(e)?vh(e,t):t===e}function vh(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function vw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Mr;(function(t){t.pop="pop",t.push="push"})(Mr||(Mr={}));var Ir;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ir||(Ir={}));function _w(t){if(!t)if(Es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pw(t)}const ww=/^[^#]+#/;function Ew(t,e){return t.replace(ww,"#")+e}function bw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Lo=()=>({left:window.pageXOffset,top:window.pageYOffset});function Tw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=bw(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _h(t,e){return(history.state?history.state.position-e:-1)+t}const dc=new Map;function Iw(t,e){dc.set(t,e)}function Sw(t){const e=dc.get(t);return dc.delete(t),e}let Cw=()=>location.protocol+"//"+location.host;function op(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),yh(c,"")}return yh(n,t)+s+r}function Aw(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=op(t,location),m=n.value,b=e.value;let _=0;if(f){if(n.value=g,e.value=f,o&&o===m){o=null;return}_=b?f.position-b.position:0}else s(g);r.forEach(k=>{k(n.value,m,{delta:_,type:Mr.pop,direction:_?_>0?Ir.forward:Ir.back:Ir.unknown})})};function c(){o=n.value}function l(f){r.push(f);const g=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(g),g}function u(){const{history:f}=window;!f.state||f.replaceState(de({},f.state,{scroll:Lo()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function wh(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Lo():null}}function kw(t){const{history:e,location:n}=window,s={value:op(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Cw()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=de({},e.state,wh(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=de({},r.value,e.state,{forward:c,scroll:Lo()});i(u.current,u,!0);const h=de({},wh(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Rw(t){t=_w(t);const e=kw(t),n=Aw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=de({location:"",base:t,go:s,createHref:Ew.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Nw(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Rw(t)}function Ow(t){return typeof t=="string"||t&&typeof t=="object"}function ap(t){return typeof t=="string"||typeof t=="symbol"}const sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},cp=Qs("nf");var Eh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Eh||(Eh={}));function Ms(t,e){return de(new Error,{type:t,[cp]:!0},e)}function rn(t,e){return t instanceof Error&&cp in t&&(e==null||!!(t.type&e))}const bh="[^/]+?",Pw={sensitive:!1,strict:!1,start:!0,end:!0},Dw=/[.+*?^${}()[\]/\\]/g;function xw(t,e){const n=de({},Pw,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(Dw,"\\$&"),g+=40;else if(f.type===1){const{value:m,repeatable:b,optional:_,regexp:k}=f;i.push({name:m,repeatable:b,optional:_});const D=k||bh;if(D!==bh){g+=10;try{new RegExp(`(${D})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${m}" (${D}): `+M.message)}}let F=b?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(F=_&&l.length<2?`(?:/${F})`:"/"+F),_&&(F+="?"),r+=F,g+=20,_&&(g+=-8),b&&(g+=-20),D===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",m=i[f-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:b,optional:_}=g,k=m in l?l[m]:"";if(Array.isArray(k)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const D=Array.isArray(k)?k.join("/"):k;if(!D)if(_)f.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=D}}return u}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Lw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Mw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Lw(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const Uw={type:0,value:""},Fw=/[a-zA-Z0-9_]/;function Bw(t){if(!t)return[[]];if(t==="/")return[[Uw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:Fw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function Vw(t,e,n){const s=xw(Bw(t.path),n),r=de(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function $w(t,e){const n=[],s=new Map;e=Ih({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const g=!f,m=Hw(u);m.aliasOf=f&&f.record;const b=Ih(e,u),_=[m];if("alias"in u){const F=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of F)_.push(de({},m,{components:f?f.record.components:m.components,path:M,aliasOf:f?f.record:m}))}let k,D;for(const F of _){const{path:M}=F;if(h&&M[0]!=="/"){const ie=h.record.path,le=ie[ie.length-1]==="/"?"":"/";F.path=h.record.path+(M&&le+M)}if(k=Vw(F,h,b),f?f.alias.push(k):(D=D||k,D!==k&&D.alias.push(k),g&&u.name&&!Th(k)&&o(u.name)),"children"in m){const ie=m.children;for(let le=0;le<ie.length;le++)i(ie[le],k,f&&f.children[le])}f=f||k,c(k)}return D?()=>{o(D)}:Tr}function o(u){if(ap(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Mw(u,n[h])>=0&&(u.record.path!==n[h].record.path||!lp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Th(u)&&s.set(u.record.name,u)}function l(u,h){let f,g={},m,b;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Ms(1,{location:u});b=f.record.name,g=de(jw(h.params,f.keys.filter(D=>!D.optional).map(D=>D.name)),u.params),m=f.stringify(g)}else if("path"in u)m=u.path,f=n.find(D=>D.re.test(m)),f&&(g=f.parse(m),b=f.record.name);else{if(f=h.name?s.get(h.name):n.find(D=>D.re.test(h.path)),!f)throw Ms(1,{location:u,currentLocation:h});b=f.record.name,g=de({},h.params,u.params),m=f.stringify(g)}const _=[];let k=f;for(;k;)_.unshift(k.record),k=k.parent;return{name:b,path:m,params:g,matched:_,meta:Kw(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function jw(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Hw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:qw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function qw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Th(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Kw(t){return t.reduce((e,n)=>de(e,n.meta),{})}function Ih(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function lp(t,e){return e.children.some(n=>n===t||lp(t,n))}const up=/#/g,zw=/&/g,Ww=/\//g,Gw=/=/g,Xw=/\?/g,hp=/\+/g,Yw=/%5B/g,Qw=/%5D/g,fp=/%5E/g,Jw=/%60/g,dp=/%7B/g,Zw=/%7C/g,pp=/%7D/g,eE=/%20/g;function gl(t){return encodeURI(""+t).replace(Zw,"|").replace(Yw,"[").replace(Qw,"]")}function tE(t){return gl(t).replace(dp,"{").replace(pp,"}").replace(fp,"^")}function pc(t){return gl(t).replace(hp,"%2B").replace(eE,"+").replace(up,"%23").replace(zw,"%26").replace(Jw,"`").replace(dp,"{").replace(pp,"}").replace(fp,"^")}function nE(t){return pc(t).replace(Gw,"%3D")}function sE(t){return gl(t).replace(up,"%23").replace(Xw,"%3F")}function rE(t){return t==null?"":sE(t).replace(Ww,"%2F")}function Ji(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function iE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(hp," "),o=i.indexOf("="),a=Ji(o<0?i:i.slice(0,o)),c=o<0?null:Ji(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Sh(t){let e="";for(let n in t){const s=t[n];if(n=nE(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&pc(i)):[s&&pc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function oE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function hr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ln(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ms(4,{from:n,to:e})):h instanceof Error?a(h):Ow(h)?a(Ms(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ta(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(aE(a)){const l=(a.__vccOpts||a)[e];l&&r.push(ln(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=fw(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ln(f,n,s,i,o)()}))}}return r}function aE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ch(t){const e=yn(pl),n=yn(rp),s=Ut(()=>e.resolve(_r(t.to))),r=Ut(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ls.bind(null,u));if(f>-1)return f;const g=Ah(c[l-2]);return l>1&&Ah(u)===g&&h[h.length-1].path!==g?h.findIndex(Ls.bind(null,c[l-2])):f}),i=Ut(()=>r.value>-1&&hE(n.params,s.value.params)),o=Ut(()=>r.value>-1&&r.value===n.matched.length-1&&ip(n.params,s.value.params));function a(c={}){return uE(c)?e[_r(t.replace)?"replace":"push"](_r(t.to)).catch(Tr):Promise.resolve()}return{route:s,href:Ut(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const cE=Ld({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ch,setup(t,{slots:e}){const n=Ys(Ch(t)),{options:s}=yn(pl),r=Ut(()=>({[kh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[kh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ep("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),lE=cE;function uE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function hE(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Ah(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const kh=(t,e,n)=>t!=null?t:e!=null?e:n,fE=Ld({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=yn(fc),r=Ut(()=>t.route||s.value),i=yn(mh,0),o=Ut(()=>r.value.matched[i]);Ui(mh,i+1),Ui(hw,o),Ui(fc,r);const a=pv();return ks(()=>[a.value,o.value,t.name],([c,l,u],[h,f,g])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!Ls(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return Rh(n.default,{Component:u,route:c});const f=l.props[t.name],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,b=ep(u,de({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Rh(n.default,{Component:b,route:c})||b}}});function Rh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const dE=fE;function pE(t){const e=$w(t.routes,t),n=t.parseQuery||iE,s=t.stringifyQuery||Sh,r=t.history,i=hr(),o=hr(),a=hr(),c=gv(sn);let l=sn;Es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ea.bind(null,v=>""+v),h=Ea.bind(null,rE),f=Ea.bind(null,Ji);function g(v,U){let N,V;return ap(v)?(N=e.getRecordMatcher(v),V=U):V=v,e.addRoute(V,N)}function m(v){const U=e.getRecordMatcher(v);U&&e.removeRoute(U)}function b(){return e.getRoutes().map(v=>v.record)}function _(v){return!!e.getRecordMatcher(v)}function k(v,U){if(U=de({},U||c.value),typeof v=="string"){const Z=ba(n,v,U.path),d=e.resolve({path:Z.path},U),p=r.createHref(Z.fullPath);return de(Z,d,{params:f(d.params),hash:Ji(Z.hash),redirectedFrom:void 0,href:p})}let N;if("path"in v)N=de({},v,{path:ba(n,v.path,U.path).path});else{const Z=de({},v.params);for(const d in Z)Z[d]==null&&delete Z[d];N=de({},v,{params:h(v.params)}),U.params=h(U.params)}const V=e.resolve(N,U),he=v.hash||"";V.params=u(f(V.params));const ye=gw(s,de({},v,{hash:tE(he),path:V.path})),te=r.createHref(ye);return de({fullPath:ye,hash:he,query:s===Sh?oE(v.query):v.query||{}},V,{redirectedFrom:void 0,href:te})}function D(v){return typeof v=="string"?ba(n,v,c.value.path):de({},v)}function F(v,U){if(l!==v)return Ms(8,{from:U,to:v})}function M(v){return Q(v)}function ie(v){return M(de(D(v),{replace:!0}))}function le(v){const U=v.matched[v.matched.length-1];if(U&&U.redirect){const{redirect:N}=U;let V=typeof N=="function"?N(v):N;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=D(V):{path:V},V.params={}),de({query:v.query,hash:v.hash,params:v.params},V)}}function Q(v,U){const N=l=k(v),V=c.value,he=v.state,ye=v.force,te=v.replace===!0,Z=le(N);if(Z)return Q(de(D(Z),{state:he,force:ye,replace:te}),U||N);const d=N;d.redirectedFrom=U;let p;return!ye&&mw(s,V,N)&&(p=Ms(16,{to:d,from:V}),fs(V,V,!0,!1)),(p?Promise.resolve(p):ge(d,V)).catch(y=>rn(y)?rn(y,2)?y:lt(y):me(y,d,V)).then(y=>{if(y){if(rn(y,2))return Q(de(D(y.to),{state:he,force:ye,replace:te}),U||d)}else y=Ge(d,V,!0,te,he);return We(d,V,y),y})}function _e(v,U){const N=F(v,U);return N?Promise.reject(N):Promise.resolve()}function ge(v,U){let N;const[V,he,ye]=gE(v,U);N=Ta(V.reverse(),"beforeRouteLeave",v,U);for(const Z of V)Z.leaveGuards.forEach(d=>{N.push(ln(d,v,U))});const te=_e.bind(null,v,U);return N.push(te),gs(N).then(()=>{N=[];for(const Z of i.list())N.push(ln(Z,v,U));return N.push(te),gs(N)}).then(()=>{N=Ta(he,"beforeRouteUpdate",v,U);for(const Z of he)Z.updateGuards.forEach(d=>{N.push(ln(d,v,U))});return N.push(te),gs(N)}).then(()=>{N=[];for(const Z of v.matched)if(Z.beforeEnter&&!U.matched.includes(Z))if(Array.isArray(Z.beforeEnter))for(const d of Z.beforeEnter)N.push(ln(d,v,U));else N.push(ln(Z.beforeEnter,v,U));return N.push(te),gs(N)}).then(()=>(v.matched.forEach(Z=>Z.enterCallbacks={}),N=Ta(ye,"beforeRouteEnter",v,U),N.push(te),gs(N))).then(()=>{N=[];for(const Z of o.list())N.push(ln(Z,v,U));return N.push(te),gs(N)}).catch(Z=>rn(Z,8)?Z:Promise.reject(Z))}function We(v,U,N){for(const V of a.list())V(v,U,N)}function Ge(v,U,N,V,he){const ye=F(v,U);if(ye)return ye;const te=U===sn,Z=Es?history.state:{};N&&(V||te?r.replace(v.fullPath,de({scroll:te&&Z&&Z.scroll},he)):r.push(v.fullPath,he)),c.value=v,fs(v,U,N,te),lt()}let Ue;function tn(){Ue||(Ue=r.listen((v,U,N)=>{const V=k(v),he=le(V);if(he){Q(de(he,{replace:!0}),V).catch(Tr);return}l=V;const ye=c.value;Es&&Iw(_h(ye.fullPath,N.delta),Lo()),ge(V,ye).catch(te=>rn(te,12)?te:rn(te,2)?(Q(te.to,V).then(Z=>{rn(Z,20)&&!N.delta&&N.type===Mr.pop&&r.go(-1,!1)}).catch(Tr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),me(te,V,ye))).then(te=>{te=te||Ge(V,ye,!1),te&&(N.delta?r.go(-N.delta,!1):N.type===Mr.pop&&rn(te,20)&&r.go(-1,!1)),We(V,ye,te)}).catch(Tr)}))}let us=hr(),hs=hr(),ke;function me(v,U,N){lt(v);const V=hs.list();return V.length?V.forEach(he=>he(v,U,N)):console.error(v),Promise.reject(v)}function ue(){return ke&&c.value!==sn?Promise.resolve():new Promise((v,U)=>{us.add([v,U])})}function lt(v){return ke||(ke=!v,tn(),us.list().forEach(([U,N])=>v?N(v):U()),us.reset()),v}function fs(v,U,N,V){const{scrollBehavior:he}=t;if(!Es||!he)return Promise.resolve();const ye=!N&&Sw(_h(v.fullPath,0))||(V||!N)&&history.state&&history.state.scroll||null;return Id().then(()=>he(v,U,ye)).then(te=>te&&Tw(te)).catch(te=>me(te,v,U))}const qt=v=>r.go(v);let Ot;const vt=new Set;return{currentRoute:c,addRoute:g,removeRoute:m,hasRoute:_,getRoutes:b,resolve:k,options:t,push:M,replace:ie,go:qt,back:()=>qt(-1),forward:()=>qt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:hs.add,isReady:ue,install(v){const U=this;v.component("RouterLink",lE),v.component("RouterView",dE),v.config.globalProperties.$router=U,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>_r(c)}),Es&&!Ot&&c.value===sn&&(Ot=!0,M(r.location).catch(he=>{}));const N={};for(const he in sn)N[he]=Ut(()=>c.value[he]);v.provide(pl,U),v.provide(rp,Ys(N)),v.provide(fc,c);const V=v.unmount;vt.add(v),v.unmount=function(){vt.delete(v),vt.size<1&&(l=sn,Ue&&Ue(),Ue=null,c.value=sn,Ot=!1,ke=!1),V()}}}}function gs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function gE(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Ls(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Ls(l,c))||r.push(c))}return[n,s,r]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const gp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},mE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},mp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},yE=function(t){const e=gp(t);return mp.encodeByteArray(e,!0)},yp=function(t){return yE(t).replace(/\./g,"")},vE=function(t){try{return mp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vp(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function _p(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wE(){return De().indexOf("Electron/")>=0}function Ep(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function EE(){return De().indexOf("MSAppHost/")>=0}function bE(){return typeof indexedDB=="object"}function TE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="FirebaseError";class Sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=IE,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zr.prototype.create)}}class Zr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?SE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Sn(r,a,s)}}function SE(t,e){return t.replace(CE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const CE=/\{\$([^}]+)}/g;function AE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Nh(i)&&Nh(o)){if(!Zi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Nh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function mr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function yr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kE(t,e){const n=new RE(t,e);return n.subscribe.bind(n)}class RE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");NE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ia),r.error===void 0&&(r.error=Ia),r.complete===void 0&&(r.complete=Ia);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ia(){}/**
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
 */function xe(t){return t&&t._delegate?t._delegate:t}class En{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pn="[DEFAULT]";/**
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
 */class OE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new _E;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DE(e))try{this.getOrInitializeService({instanceIdentifier:Pn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pn){return this.instances.has(e)}getOptions(e=Pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:PE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Pn){return this.component?this.component.multipleInstances?e:Pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PE(t){return t===Pn?void 0:t}function DE(t){return t.instantiationMode==="EAGER"}/**
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
 */class xE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new OE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const LE={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},ME=oe.INFO,UE={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},FE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=UE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ml{constructor(e){this.name=e,this._logLevel=ME,this._logHandler=FE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const BE=(t,e)=>e.some(n=>t instanceof n);let Oh,Ph;function VE(){return Oh||(Oh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $E(){return Ph||(Ph=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bp=new WeakMap,gc=new WeakMap,Tp=new WeakMap,Sa=new WeakMap,yl=new WeakMap;function jE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(vn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bp.set(n,t)}).catch(()=>{}),yl.set(e,t),e}function HE(t){if(gc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});gc.set(t,e)}let mc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Tp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qE(t){mc=t(mc)}function KE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ca(this),e,...n);return Tp.set(s,e.sort?e.sort():[e]),vn(s)}:$E().includes(t)?function(...e){return t.apply(Ca(this),e),vn(bp.get(this))}:function(...e){return vn(t.apply(Ca(this),e))}}function zE(t){return typeof t=="function"?KE(t):(t instanceof IDBTransaction&&HE(t),BE(t,VE())?new Proxy(t,mc):t)}function vn(t){if(t instanceof IDBRequest)return jE(t);if(Sa.has(t))return Sa.get(t);const e=zE(t);return e!==t&&(Sa.set(t,e),yl.set(e,t)),e}const Ca=t=>yl.get(t);function WE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=vn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(vn(o.result),c.oldVersion,c.newVersion,vn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const GE=["get","getKey","getAll","getAllKeys","count"],XE=["put","add","delete","clear"],Aa=new Map;function Dh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Aa.get(e))return Aa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=XE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||GE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Aa.set(e,i),i}qE(t=>Fu(Uu({},t),{get:(e,n,s)=>Dh(e,n)||t.get(e,n,s),has:(e,n)=>!!Dh(e,n)||t.has(e,n)}));/**
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
 */class YE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function QE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yc="@firebase/app",xh="0.7.24";/**
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
 */const vl=new ml("@firebase/app"),JE="@firebase/app-compat",ZE="@firebase/analytics-compat",eb="@firebase/analytics",tb="@firebase/app-check-compat",nb="@firebase/app-check",sb="@firebase/auth",rb="@firebase/auth-compat",ib="@firebase/database",ob="@firebase/database-compat",ab="@firebase/functions",cb="@firebase/functions-compat",lb="@firebase/installations",ub="@firebase/installations-compat",hb="@firebase/messaging",fb="@firebase/messaging-compat",db="@firebase/performance",pb="@firebase/performance-compat",gb="@firebase/remote-config",mb="@firebase/remote-config-compat",yb="@firebase/storage",vb="@firebase/storage-compat",_b="@firebase/firestore",wb="@firebase/firestore-compat",Eb="firebase",bb="9.8.1";/**
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
 */const Ip="[DEFAULT]",Tb={[yc]:"fire-core",[JE]:"fire-core-compat",[eb]:"fire-analytics",[ZE]:"fire-analytics-compat",[nb]:"fire-app-check",[tb]:"fire-app-check-compat",[sb]:"fire-auth",[rb]:"fire-auth-compat",[ib]:"fire-rtdb",[ob]:"fire-rtdb-compat",[ab]:"fire-fn",[cb]:"fire-fn-compat",[lb]:"fire-iid",[ub]:"fire-iid-compat",[hb]:"fire-fcm",[fb]:"fire-fcm-compat",[db]:"fire-perf",[pb]:"fire-perf-compat",[gb]:"fire-rc",[mb]:"fire-rc-compat",[yb]:"fire-gcs",[vb]:"fire-gcs-compat",[_b]:"fire-fst",[wb]:"fire-fst-compat","fire-js":"fire-js",[Eb]:"fire-js-all"};/**
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
 */const eo=new Map,vc=new Map;function Ib(t,e){try{t.container.addComponent(e)}catch(n){vl.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gn(t){const e=t.name;if(vc.has(e))return vl.debug(`There were multiple attempts to register component ${e}.`),!1;vc.set(e,t);for(const n of eo.values())Ib(n,t);return!0}function Mo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Sb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Xn=new Zr("app","Firebase",Sb);/**
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
 */class Cb{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
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
 */const Js=bb;function Ab(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ip,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Xn.create("bad-app-name",{appName:String(s)});const r=eo.get(s);if(r){if(Zi(t,r.options)&&Zi(n,r.config))return r;throw Xn.create("duplicate-app",{appName:s})}const i=new xE(s);for(const a of vc.values())i.addComponent(a);const o=new Cb(t,n,i);return eo.set(s,o),o}function _l(t=Ip){const e=eo.get(t);if(!e)throw Xn.create("no-app",{appName:t});return e}function Bt(t,e,n){var s;let r=(s=Tb[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vl.warn(a.join(" "));return}Gn(new En(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const kb="firebase-heartbeat-database",Rb=1,Ur="firebase-heartbeat-store";let ka=null;function Sp(){return ka||(ka=WE(kb,Rb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ur)}}}).catch(t=>{throw Xn.create("storage-open",{originalErrorMessage:t.message})})),ka}async function Nb(t){try{return(await Sp()).transaction(Ur).objectStore(Ur).get(Cp(t))}catch(e){throw Xn.create("storage-get",{originalErrorMessage:e.message})}}async function Lh(t,e){try{const s=(await Sp()).transaction(Ur,"readwrite");return await s.objectStore(Ur).put(e,Cp(t)),s.done}catch(n){throw Xn.create("storage-set",{originalErrorMessage:n.message})}}function Cp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ob=1024,Pb=30*24*60*60*1e3;class Db{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Mh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Pb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Mh(),{heartbeatsToSend:n,unsentEntries:s}=xb(this._heartbeatsCache.heartbeats),r=yp(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Mh(){return new Date().toISOString().substring(0,10)}function xb(t,e=Ob){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Uh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Uh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Lb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bE()?TE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Nb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Lh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Lh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Uh(t){return yp(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Mb(t){Gn(new En("platform-logger",e=>new YE(e),"PRIVATE")),Gn(new En("heartbeat",e=>new Db(e),"PRIVATE")),Bt(yc,xh,t),Bt(yc,xh,"esm2017"),Bt("fire-js","")}Mb("");var Ub="firebase",Fb="9.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt(Ub,Fb,"app");function wl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Ap(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bb=Ap,kp=new Zr("auth","Firebase",Ap());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=new ml("@firebase/auth");function Bi(t,...e){Fh.logLevel<=oe.ERROR&&Fh.error(`Auth (${Js}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,...e){throw El(t,...e)}function Vt(t,...e){return El(t,...e)}function Vb(t,e,n){const s=Object.assign(Object.assign({},Bb()),{[e]:n});return new Zr("auth","Firebase",s).create(e,{appName:t.name})}function El(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return kp.create(t,...e)}function K(t,e,...n){if(!t)throw El(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bi(e),new Error(e)}function Jt(t,e){t||Wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=new Map;function Gt(t){Jt(t instanceof Function,"Expected a class definition");let e=Bh.get(t);return e?(Jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(t,e){const n=Mo(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Zi(i,e!=null?e:{}))return r;Rt(r,"already-initialized")}return n.initialize({options:e})}function jb(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Hb(){return Vh()==="http:"||Vh()==="https:"}function Vh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hb()||_p()||"connection"in navigator)?navigator.onLine:!0}function Kb(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jt(n>e,"Short delay should be less than long delay!"),this.isMobile=vp()||wp()}get(){return qb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t,e){Jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=new ti(3e4,6e4);function ni(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zs(t,e,n,s,r={}){return Np(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ei(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Rp.fetch()(Op(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Np(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},zb),e);try{const r=new Gb(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ra(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ra(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ra(t,"email-already-in-use",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Vb(t,u,l);Rt(t,u)}}catch(r){if(r instanceof Sn)throw r;Rt(t,"network-request-failed")}}async function si(t,e,n,s,r={}){const i=await Zs(t,e,n,s,r);return"mfaPendingCredential"in i&&Rt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Op(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?bl(t.config,r):`${t.config.apiScheme}://${r}`}class Gb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Vt(this.auth,"network-request-failed")),Wb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ra(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Vt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xb(t,e){return Zs(t,"POST","/v1/accounts:delete",e)}async function Yb(t,e){return Zs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qb(t,e=!1){const n=xe(t),s=await n.getIdToken(e),r=Tl(s);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Sr(Na(r.auth_time)),issuedAtTime:Sr(Na(r.iat)),expirationTime:Sr(Na(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Na(t){return Number(t)*1e3}function Tl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Bi("JWT malformed, contained fewer than 3 sections"),null;try{const r=vE(n);return r?JSON.parse(r):(Bi("Failed to decode base64 JWT payload"),null)}catch(r){return Bi("Caught error parsing JWT payload as JSON",r),null}}function Jb(t){const e=Tl(t);return K(e,"internal-error"),K(typeof e.exp!="undefined","internal-error"),K(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Sn&&Zb(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Zb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sr(this.lastLoginAt),this.creationTime=Sr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function to(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Us(t,Yb(n,{idToken:s}));K(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?s0(i.providerUserInfo):[],a=n0(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Pp(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function t0(t){const e=xe(t);await to(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function n0(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function s0(t){return t.map(e=>{var{providerId:n}=e,s=wl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r0(t,e){const n=await Np(t,{},async()=>{const s=ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Op(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Rp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken!="undefined","internal-error"),K(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Jb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await r0(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Fr;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(K(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fr,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t,e){K(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class $n{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=wl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new e0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Us(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qb(this,e)}reload(){return t0(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await to(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Us(this,Xb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:F,emailVerified:M,isAnonymous:ie,providerData:le,stsTokenManager:Q}=n;K(F&&Q,e,"internal-error");const _e=Fr.fromJSON(this.name,Q);K(typeof F=="string",e,"internal-error"),on(h,e.name),on(f,e.name),K(typeof M=="boolean",e,"internal-error"),K(typeof ie=="boolean",e,"internal-error"),on(g,e.name),on(m,e.name),on(b,e.name),on(_,e.name),on(k,e.name),on(D,e.name);const ge=new $n({uid:F,auth:e,email:f,emailVerified:M,displayName:h,isAnonymous:ie,photoURL:m,phoneNumber:g,tenantId:b,stsTokenManager:_e,createdAt:k,lastLoginAt:D});return le&&Array.isArray(le)&&(ge.providerData=le.map(We=>Object.assign({},We))),_&&(ge._redirectEventId=_),ge}static async _fromIdTokenResponse(e,n,s=!1){const r=new Fr;r.updateFromServerResponse(n);const i=new $n({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await to(i),i}}/**
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
 */class Dp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dp.type="NONE";const $h=Dp;/**
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
 */function Vi(t,e,n){return`firebase:${t}:${e}:${n}`}class Rs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Vi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Vi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Rs(Gt($h),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Gt($h);const o=Vi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=$n._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Rs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Rs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fp(e))return"Blackberry";if(Bp(e))return"Webos";if(Il(e))return"Safari";if((e.includes("chrome/")||Lp(e))&&!e.includes("edge/"))return"Chrome";if(Up(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function xp(t=De()){return/firefox\//i.test(t)}function Il(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lp(t=De()){return/crios\//i.test(t)}function Mp(t=De()){return/iemobile/i.test(t)}function Up(t=De()){return/android/i.test(t)}function Fp(t=De()){return/blackberry/i.test(t)}function Bp(t=De()){return/webos/i.test(t)}function Uo(t=De()){return/iphone|ipad|ipod/i.test(t)}function i0(t=De()){var e;return Uo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function o0(){return Ep()&&document.documentMode===10}function Vp(t=De()){return Uo(t)||Up(t)||Bp(t)||Fp(t)||/windows phone/i.test(t)||Mp(t)}function a0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t,e=[]){let n;switch(t){case"Browser":n=jh(De());break;case"Worker":n=`${jh(De())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Js}/${s}`}/**
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
 */class c0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hh(this),this.idTokenSubscription=new Hh(this),this.beforeStateQueue=new c0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Rs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await to(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xe(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Rs.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$p(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Fo(t){return xe(t)}class Hh{constructor(e){this.auth=e,this.observer=null,this.addObserver=kE(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function u0(t,e){return Zs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h0(t,e){return si(t,"POST","/v1/accounts:signInWithPassword",ni(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f0(t,e){return si(t,"POST","/v1/accounts:signInWithEmailLink",ni(t,e))}async function d0(t,e){return si(t,"POST","/v1/accounts:signInWithEmailLink",ni(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends Sl{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Br(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Br(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return h0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return f0(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return u0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return d0(e,{idToken:n,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t,e){return si(t,"POST","/v1/accounts:signInWithIdp",ni(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="http://localhost";class Yn extends Sl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=wl(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Yn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ns(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ns(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ns(e,n)}buildRequest(){const e={requestUri:p0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ei(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function m0(t){const e=mr(yr(t)).link,n=e?mr(yr(e)).deep_link_id:null,s=mr(yr(t)).deep_link_id;return(s?mr(yr(s)).link:null)||s||n||e||t}class Cl{constructor(e){var n,s,r,i,o,a;const c=mr(yr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=g0((r=c.mode)!==null&&r!==void 0?r:null);K(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=m0(e);try{return new Cl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.providerId=er.PROVIDER_ID}static credential(e,n){return Br._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Cl.parseLink(n);return K(s,"argument-error"),Br._fromEmailAndCode(e,s.code,s.tenantId)}}er.PROVIDER_ID="password";er.EMAIL_PASSWORD_SIGN_IN_METHOD="password";er.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ri extends jp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends ri{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends ri{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return hn.credential(n,s)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends ri{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends ri{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return dn.credential(n,s)}catch{return null}}}dn.TWITTER_SIGN_IN_METHOD="twitter.com";dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y0(t,e){return si(t,"POST","/v1/accounts:signUp",ni(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await $n._fromIdTokenResponse(e,s,r),o=qh(s);return new Qn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=qh(s);return new Qn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function qh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends Sn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,no.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new no(e,n,s,r)}}function Hp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?no._fromErrorAndOperation(t,i,e,s):i})}async function v0(t,e,n=!1){const s=await Us(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qn._forOperation(t,"link",s)}/**
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
 */async function _0(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Us(t,Hp(s,r,e,t),n);K(i.idToken,s,"internal-error");const o=Tl(i.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),Qn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Rt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qp(t,e,n=!1){const s="signIn",r=await Hp(t,s,e),i=await Qn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function w0(t,e){return qp(Fo(t),e)}async function E0(t,e,n){const s=Fo(t),r=await y0(s,{returnSecureToken:!0,email:e,password:n}),i=await Qn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function b0(t,e,n){return w0(xe(t),er.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T0(t,e){return Zs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=xe(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Us(s,T0(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Os(t,e,n,s){return xe(t).onAuthStateChanged(e,n,s)}function L1(t){return xe(t).signOut()}const so="__sak";/**
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
 */class Kp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(so,"1"),this.storage.removeItem(so),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(){const t=De();return Il(t)||Uo(t)}const C0=1e3,A0=10;class zp extends Kp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=S0()&&a0(),this.fallbackToPolling=Vp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);o0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,A0):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},C0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zp.type="LOCAL";const k0=zp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp extends Kp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wp.type="SESSION";const Gp=Wp;/**
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
 */function R0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Bo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await R0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class N0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Al("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return window}function O0(t){$t().location.href=t}/**
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
 */function Xp(){return typeof $t().WorkerGlobalScope!="undefined"&&typeof $t().importScripts=="function"}async function P0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function D0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function x0(){return Xp()?self:null}/**
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
 */const Yp="firebaseLocalStorageDb",L0=1,ro="firebaseLocalStorage",Qp="fbase_key";class ii{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vo(t,e){return t.transaction([ro],e?"readwrite":"readonly").objectStore(ro)}function M0(){const t=indexedDB.deleteDatabase(Yp);return new ii(t).toPromise()}function wc(){const t=indexedDB.open(Yp,L0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ro,{keyPath:Qp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ro)?e(s):(s.close(),await M0(),e(await wc()))})})}async function Kh(t,e,n){const s=Vo(t,!0).put({[Qp]:e,value:n});return new ii(s).toPromise()}async function U0(t,e){const n=Vo(t,!1).get(e),s=await new ii(n).toPromise();return s===void 0?null:s.value}function zh(t,e){const n=Vo(t,!0).delete(e);return new ii(n).toPromise()}const F0=800,B0=3;class Jp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>B0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bo._getInstance(x0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await P0(),!this.activeServiceWorker)return;this.sender=new N0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||D0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wc();return await Kh(e,so,"1"),await zh(e,so),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Kh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>U0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Vo(r,!1).getAll();return new ii(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),F0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jp.type="LOCAL";const V0=Jp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function j0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Vt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",$0().appendChild(s)})}function H0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ti(3e4,6e4);/**
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
 */function q0(t,e){return e?Gt(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class kl extends Sl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function K0(t){return qp(t.auth,new kl(t),t.bypassAuthState)}function z0(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),_0(n,new kl(t),t.bypassAuthState)}async function W0(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),v0(n,new kl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return K0;case"linkViaPopup":case"linkViaRedirect":return W0;case"reauthViaPopup":case"reauthViaRedirect":return z0;default:Rt(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=new ti(2e3,1e4);class bs extends Zp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=Al();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,G0.get())};e()}}bs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="pendingRedirect",$i=new Map;class Y0 extends Zp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=$i.get(this.auth._key());if(!e){try{const s=await Q0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}$i.set(this.auth._key(),e)}return this.bypassAuthState||$i.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Q0(t,e){const n=eT(e),s=Z0(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function J0(t,e){$i.set(t._key(),e)}function Z0(t){return Gt(t._redirectPersistence)}function eT(t){return Vi(X0,t.config.apiKey,t.name)}async function tT(t,e,n=!1){const s=Fo(t),r=q0(s,e),o=await new Y0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=10*60*1e3;class sT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!eg(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wh(e))}saveEventToCache(e){this.cachedEventUids.add(Wh(e)),this.lastProcessedEventTime=Date.now()}}function Wh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function eg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iT(t,e={}){return Zs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aT=/^https?/;async function cT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iT(t);for(const n of e)try{if(lT(n))return}catch{}Rt(t,"unauthorized-domain")}function lT(t){const e=_c(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!aT.test(n))return!1;if(oT.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const uT=new ti(3e4,6e4);function Gh(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hT(t){return new Promise((e,n)=>{var s,r,i;function o(){Gh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gh(),n(Vt(t,"network-request-failed"))},timeout:uT.get()})}if(!((r=(s=$t().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=$t().gapi)===null||i===void 0)&&i.load)o();else{const a=H0("iframefcb");return $t()[a]=()=>{gapi.load?o():n(Vt(t,"network-request-failed"))},j0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ji=null,e})}let ji=null;function fT(t){return ji=ji||hT(t),ji}/**
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
 */const dT=new ti(5e3,15e3),pT="__/auth/iframe",gT="emulator/auth/iframe",mT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vT(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bl(e,gT):`https://${t.config.authDomain}/${pT}`,s={apiKey:e.apiKey,appName:t.name,v:Js},r=yT.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ei(s).slice(1)}`}async function _T(t){const e=await fT(t),n=$t().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:vT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mT,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),a=$t().setTimeout(()=>{i(o)},dT.get());function c(){$t().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const wT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ET=500,bT=600,TT="_blank",IT="http://localhost";class Xh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ST(t,e,n,s=ET,r=bT){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},wT),{width:s.toString(),height:r.toString(),top:i,left:o}),l=De().toLowerCase();n&&(a=Lp(l)?TT:n),xp(l)&&(e=e||IT,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,m])=>`${f}${g}=${m},`,"");if(i0(l)&&a!=="_self")return CT(e||"",a),new Xh(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new Xh(h)}function CT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const AT="__/auth/handler",kT="emulator/auth/handler";function Yh(t,e,n,s,r,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Js,eventId:r};if(e instanceof jp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",AE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof ri){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${RT(t)}?${ei(a).slice(1)}`}function RT({config:t}){return t.emulator?bl(t,kT):`https://${t.authDomain}/${AT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="webStorageSupport";class NT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gp,this._completeRedirectFn=tT,this._overrideRedirectResult=J0}async _openPopup(e,n,s,r){var i;Jt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Yh(e,n,s,_c(),r);return ST(e,o,Al())}async _openRedirect(e,n,s,r){return await this._originValidation(e),O0(Yh(e,n,s,_c(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Jt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await _T(e),s=new sT(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oa,{type:Oa},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Oa];o!==void 0&&n(!!o),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vp()||Il()||Uo()}}const OT=NT;var Qh="@firebase/auth",Jh="0.20.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xT(t){Gn(new En("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{K(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),K(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$p(t)},u=new l0(a,c,l);return jb(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Gn(new En("auth-internal",e=>{const n=Fo(e.getProvider("auth").getImmediate());return(s=>new PT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(Qh,Jh,DT(t)),Bt(Qh,Jh,"esm2017")}/**
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
 */function LT(t=_l()){const e=Mo(t,"auth");return e.isInitialized()?e.getImmediate():$b(t,{popupRedirectResolver:OT,persistence:[V0,k0,Gp]})}xT("Browser");var MT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},x,Rl=Rl||{},z=MT||self;function io(){}function Ec(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function oi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function UT(t){return Object.prototype.hasOwnProperty.call(t,Pa)&&t[Pa]||(t[Pa]=++FT)}var Pa="closure_uid_"+(1e9*Math.random()>>>0),FT=0;function BT(t,e,n){return t.call.apply(t.bind,arguments)}function VT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function $e(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$e=BT:$e=VT,$e.apply(null,arguments)}function Ci(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Cn(){this.s=this.s,this.o=this.o}var $T=0,jT={};Cn.prototype.s=!1;Cn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),$T!=0)){var t=UT(this);delete jT[t]}};Cn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const tg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},ng=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function HT(t){e:{var e=xI;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Zh(t){return Array.prototype.concat.apply([],arguments)}function Nl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function oo(t){return/^[\s\xa0]*$/.test(t)}var ef=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function tt(t,e){return t.indexOf(e)!=-1}function Da(t,e){return t<e?-1:t>e?1:0}var nt;e:{var tf=z.navigator;if(tf){var nf=tf.userAgent;if(nf){nt=nf;break e}}nt=""}function Ol(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function sg(t){const e={};for(const n in t)e[n]=t[n];return e}var sf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rg(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<sf.length;i++)n=sf[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Pl(t){return Pl[" "](t),t}Pl[" "]=io;function qT(t){var e=WT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var KT=tt(nt,"Opera"),Fs=tt(nt,"Trident")||tt(nt,"MSIE"),ig=tt(nt,"Edge"),bc=ig||Fs,og=tt(nt,"Gecko")&&!(tt(nt.toLowerCase(),"webkit")&&!tt(nt,"Edge"))&&!(tt(nt,"Trident")||tt(nt,"MSIE"))&&!tt(nt,"Edge"),zT=tt(nt.toLowerCase(),"webkit")&&!tt(nt,"Edge");function ag(){var t=z.document;return t?t.documentMode:void 0}var ao;e:{var xa="",La=function(){var t=nt;if(og)return/rv:([^\);]+)(\)|;)/.exec(t);if(ig)return/Edge\/([\d\.]+)/.exec(t);if(Fs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(zT)return/WebKit\/(\S+)/.exec(t);if(KT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(La&&(xa=La?La[1]:""),Fs){var Ma=ag();if(Ma!=null&&Ma>parseFloat(xa)){ao=String(Ma);break e}}ao=xa}var WT={};function GT(){return qT(function(){let t=0;const e=ef(String(ao)).split("."),n=ef("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Da(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Da(r[2].length==0,i[2].length==0)||Da(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Tc;if(z.document&&Fs){var rf=ag();Tc=rf||parseInt(ao,10)||void 0}else Tc=void 0;var XT=Tc,YT=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",io,e),z.removeEventListener("test",io,e)}catch{}return t}();function Ye(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};function Vr(t,e){if(Ye.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(og){e:{try{Pl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:QT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Vr.Z.h.call(this)}}ze(Vr,Ye);var QT={2:"touch",3:"pen",4:"mouse"};Vr.prototype.h=function(){Vr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ai="closure_listenable_"+(1e6*Math.random()|0),JT=0;function ZT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++JT,this.ca=this.fa=!1}function $o(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function jo(t){this.src=t,this.g={},this.h=0}jo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Sc(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ZT(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function Ic(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=tg(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&($o(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Sc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var Dl="closure_lm_"+(1e6*Math.random()|0),Ua={};function cg(t,e,n,s,r){if(s&&s.once)return ug(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)cg(t,e[i],n,s,r);return null}return n=Ml(n),t&&t[ai]?t.N(e,n,oi(s)?!!s.capture:!!s,r):lg(t,e,n,!1,s,r)}function lg(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=oi(r)?!!r.capture:!!r,a=Ll(t);if(a||(t[Dl]=a=new jo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=eI(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)YT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(fg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eI(){function t(n){return e.call(t.src,t.listener,n)}var e=tI;return t}function ug(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ug(t,e[i],n,s,r);return null}return n=Ml(n),t&&t[ai]?t.O(e,n,oi(s)?!!s.capture:!!s,r):lg(t,e,n,!0,s,r)}function hg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)hg(t,e[i],n,s,r);else s=oi(s)?!!s.capture:!!s,n=Ml(n),t&&t[ai]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Sc(i,n,s,r),-1<n&&($o(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ll(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Sc(e,n,s,r)),(n=-1<t?e[t]:null)&&xl(n))}function xl(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ai])Ic(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(fg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ll(e))?(Ic(n,t),n.h==0&&(n.src=null,e[Dl]=null)):$o(t)}}}function fg(t){return t in Ua?Ua[t]:Ua[t]="on"+t}function tI(t,e){if(t.ca)t=!0;else{e=new Vr(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&xl(t),t=n.call(s,e)}return t}function Ll(t){return t=t[Dl],t instanceof jo?t:null}var Fa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ml(t){return typeof t=="function"?t:(t[Fa]||(t[Fa]=function(e){return t.handleEvent(e)}),t[Fa])}function Le(){Cn.call(this),this.i=new jo(this),this.P=this,this.I=null}ze(Le,Cn);Le.prototype[ai]=!0;Le.prototype.removeEventListener=function(t,e,n,s){hg(this,t,e,n,s)};function je(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ye(e,t);else if(e instanceof Ye)e.target=e.target||t;else{var r=e;e=new Ye(s,t),rg(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ai(o,s,!0,e)&&r}if(o=e.g=t,r=Ai(o,s,!0,e)&&r,r=Ai(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ai(o,s,!1,e)&&r}Le.prototype.M=function(){if(Le.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)$o(n[s]);delete t.g[e],t.h--}}this.I=null};Le.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Le.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ai(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Ic(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Ul=z.JSON.stringify;function nI(){var t=pg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class sI{constructor(){this.h=this.g=null}add(e,n){const s=dg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var dg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new rI,t=>t.reset());class rI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function iI(t){z.setTimeout(()=>{throw t},0)}function Fl(t,e){Cc||oI(),Ac||(Cc(),Ac=!0),pg.add(t,e)}var Cc;function oI(){var t=z.Promise.resolve(void 0);Cc=function(){t.then(aI)}}var Ac=!1,pg=new sI;function aI(){for(var t;t=nI();){try{t.h.call(t.g)}catch(n){iI(n)}var e=dg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ac=!1}function Ho(t,e){Le.call(this),this.h=t||1,this.g=e||z,this.j=$e(this.kb,this),this.l=Date.now()}ze(Ho,Le);x=Ho.prototype;x.da=!1;x.S=null;x.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),je(this,"tick"),this.da&&(Bl(this),this.start()))}};x.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Bl(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}x.M=function(){Ho.Z.M.call(this),Bl(this),delete this.g};function Vl(t,e,n){if(typeof t=="function")n&&(t=$e(t,n));else if(t&&typeof t.handleEvent=="function")t=$e(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function gg(t){t.g=Vl(()=>{t.g=null,t.i&&(t.i=!1,gg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class cI extends Cn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:gg(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $r(t){Cn.call(this),this.h=t,this.g={}}ze($r,Cn);var of=[];function mg(t,e,n,s){Array.isArray(n)||(n&&(of[0]=n.toString()),n=of);for(var r=0;r<n.length;r++){var i=cg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function yg(t){Ol(t.g,function(e,n){this.g.hasOwnProperty(n)&&xl(e)},t),t.g={}}$r.prototype.M=function(){$r.Z.M.call(this),yg(this)};$r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qo(){this.g=!0}qo.prototype.Aa=function(){this.g=!1};function lI(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function uI(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Ts(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+fI(t,n)+(s?" "+s:"")})}function hI(t,e){t.info(function(){return"TIMEOUT: "+e})}qo.prototype.info=function(){};function fI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Ul(n)}catch{return e}}var os={},af=null;function Ko(){return af=af||new Le}os.Ma="serverreachability";function vg(t){Ye.call(this,os.Ma,t)}ze(vg,Ye);function jr(t){const e=Ko();je(e,new vg(e,t))}os.STAT_EVENT="statevent";function _g(t,e){Ye.call(this,os.STAT_EVENT,t),this.stat=e}ze(_g,Ye);function st(t){const e=Ko();je(e,new _g(e,t))}os.Na="timingevent";function wg(t,e){Ye.call(this,os.Na,t),this.size=e}ze(wg,Ye);function ci(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var zo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Eg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function $l(){}$l.prototype.h=null;function cf(t){return t.h||(t.h=t.i())}function bg(){}var li={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function jl(){Ye.call(this,"d")}ze(jl,Ye);function Hl(){Ye.call(this,"c")}ze(Hl,Ye);var kc;function Wo(){}ze(Wo,$l);Wo.prototype.g=function(){return new XMLHttpRequest};Wo.prototype.i=function(){return{}};kc=new Wo;function ui(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new $r(this),this.P=dI,t=bc?125:void 0,this.W=new Ho(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Tg}function Tg(){this.i=null,this.g="",this.h=!1}var dI=45e3,Rc={},co={};x=ui.prototype;x.setTimeout=function(t){this.P=t};function Nc(t,e,n){t.K=1,t.v=Xo(Zt(e)),t.s=n,t.U=!0,Ig(t,null)}function Ig(t,e){t.F=Date.now(),hi(t),t.A=Zt(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Og(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Tg,t.g=Qg(t.l,n?e:null,!t.s),0<t.O&&(t.L=new cI($e(t.Ia,t,t.g),t.O)),mg(t.V,t.g,"readystatechange",t.gb),e=t.H?sg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),jr(1),lI(t.j,t.u,t.A,t.m,t.X,t.s)}x.gb=function(t){t=t.target;const e=this.L;e&&Xt(t)==3?e.l():this.Ia(t)};x.Ia=function(t){try{if(t==this.g)e:{const u=Xt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||bc||this.g&&(this.h.h||this.g.ga()||ff(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?jr(3):jr(2)),Go(this);var n=this.g.ba();this.N=n;t:if(Sg(this)){var s=ff(this.g);t="";var r=s.length,i=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Mn(this),Cr(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,uI(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oo(a)){var l=a;break t}}l=null}if(n=l)Ts(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Oc(this,n);else{this.i=!1,this.o=3,st(12),Mn(this),Cr(this);break e}}this.U?(Cg(this,u,o),bc&&this.i&&u==3&&(mg(this.V,this.W,"tick",this.fb),this.W.start())):(Ts(this.j,this.m,o,null),Oc(this,o)),u==4&&Mn(this),this.i&&!this.I&&(u==4?Wg(this.l,this):(this.i=!1,hi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,st(12)):(this.o=0,st(13)),Mn(this),Cr(this)}}}catch{}finally{}};function Sg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Cg(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=pI(t,n),r==co){e==4&&(t.o=4,st(14),s=!1),Ts(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Rc){t.o=4,st(15),Ts(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ts(t.j,t.m,r,null),Oc(t,r);Sg(t)&&r!=co&&r!=Rc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,st(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Jl(e),e.L=!0,st(11))):(Ts(t.j,t.m,n,"[Invalid Chunked Response]"),Mn(t),Cr(t))}x.fb=function(){if(this.g){var t=Xt(this.g),e=this.g.ga();this.C<e.length&&(Go(this),Cg(this,t,e),this.i&&t!=4&&hi(this))}};function pI(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?co:(n=Number(e.substring(n,s)),isNaN(n)?Rc:(s+=1,s+n>e.length?co:(e=e.substr(s,n),t.C=s+n,e)))}x.cancel=function(){this.I=!0,Mn(this)};function hi(t){t.Y=Date.now()+t.P,Ag(t,t.P)}function Ag(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ci($e(t.eb,t),e)}function Go(t){t.B&&(z.clearTimeout(t.B),t.B=null)}x.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(hI(this.j,this.A),this.K!=2&&(jr(3),st(17)),Mn(this),this.o=2,Cr(this)):Ag(this,this.Y-t)};function Cr(t){t.l.G==0||t.I||Wg(t.l,t)}function Mn(t){Go(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Bl(t.W),yg(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Oc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Pc(n.i,t))){if(n.I=t.N,!t.J&&Pc(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)fo(n),Jo(n);else break e;Ql(n),st(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=ci($e(n.ab,n),6e3));if(1>=xg(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Un(n,11)}else if((t.J||n.g==t)&&fo(n),!oo(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;!i.g&&(tt(m,"spdy")||tt(m,"quic")||tt(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(zl(i,i.h),i.h=null))}if(s.D){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.sa=b,Te(s.F,s.D,b))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Yg(s,s.H?s.la:null,s.W),o.J){Lg(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Go(a),hi(a)),s.g=o}else Kg(s);0<n.l.length&&Zo(n)}else l[0]!="stop"&&l[0]!="close"||Un(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Un(n,7):Yl(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}jr(4)}catch{}}function gI(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Ec(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function ql(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ec(t)||typeof t=="string")ng(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Ec(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=gI(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function tr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof tr)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}x=tr.prototype;x.R=function(){Kl(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};x.T=function(){return Kl(this),this.g.concat()};function Kl(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Jn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Jn(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}x.get=function(t,e){return Jn(this.h,t)?this.h[t]:e};x.set=function(t,e){Jn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};x.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Jn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var kg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function mI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Zn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Zn){this.g=e!==void 0?e:t.g,lo(this,t.j),this.s=t.s,uo(this,t.i),ho(this,t.m),this.l=t.l,e=t.h;var n=new Hr;n.i=e.i,e.g&&(n.g=new tr(e.g),n.h=e.h),lf(this,n),this.o=t.o}else t&&(n=String(t).match(kg))?(this.g=!!e,lo(this,n[1]||"",!0),this.s=Ar(n[2]||""),uo(this,n[3]||"",!0),ho(this,n[4]),this.l=Ar(n[5]||"",!0),lf(this,n[6]||"",!0),this.o=Ar(n[7]||"")):(this.g=!!e,this.h=new Hr(null,this.g))}Zn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(vr(e,uf,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(vr(e,uf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(vr(n,n.charAt(0)=="/"?EI:wI,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",vr(n,TI)),t.join("")};function Zt(t){return new Zn(t)}function lo(t,e,n){t.j=n?Ar(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function uo(t,e,n){t.i=n?Ar(e,!0):e}function ho(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function lf(t,e,n){e instanceof Hr?(t.h=e,II(t.h,t.g)):(n||(e=vr(e,bI)),t.h=new Hr(e,t.g))}function Te(t,e,n){t.h.set(e,n)}function Xo(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function yI(t){return t instanceof Zn?Zt(t):new Zn(t,void 0)}function vI(t,e,n,s){var r=new Zn(null,void 0);return t&&lo(r,t),e&&uo(r,e),n&&ho(r,n),s&&(r.l=s),r}function Ar(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function vr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,_I),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function _I(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var uf=/[#\/\?@]/g,wI=/[#\?:]/g,EI=/[#\?]/g,bI=/[#\?@]/g,TI=/#/g;function Hr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function An(t){t.g||(t.g=new tr,t.h=0,t.i&&mI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Hr.prototype;x.add=function(t,e){An(this),this.i=null,t=nr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Rg(t,e){An(t),e=nr(t,e),Jn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Jn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Kl(t)))}function Ng(t,e){return An(t),e=nr(t,e),Jn(t.g.h,e)}x.forEach=function(t,e){An(this),this.g.forEach(function(n,s){ng(n,function(r){t.call(e,r,s,this)},this)},this)};x.T=function(){An(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};x.R=function(t){An(this);var e=[];if(typeof t=="string")Ng(this,t)&&(e=Zh(e,this.g.get(nr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Zh(e,t[n])}return e};x.set=function(t,e){return An(this),this.i=null,t=nr(this,t),Ng(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Og(t,e,n){Rg(t,e),0<n.length&&(t.i=null,t.g.set(nr(t,e),Nl(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function nr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function II(t,e){e&&!t.j&&(An(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Rg(this,s),Og(this,r,n))},t)),t.j=e}var SI=class{constructor(t,e){this.h=t,this.g=e}};function Pg(t){this.l=t||CI,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ea&&z.g.Ea()&&z.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var CI=10;function Dg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function xg(t){return t.h?1:t.g?t.g.size:0}function Pc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function zl(t,e){t.g?t.g.add(e):t.h=e}function Lg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Pg.prototype.cancel=function(){if(this.i=Mg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Mg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Nl(t.i)}function Wl(){}Wl.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};Wl.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function AI(){this.g=new Wl}function kI(t,e,n){const s=n||"";try{ql(t,function(r,i){let o=r;oi(r)&&(o=Ul(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function RI(t,e){const n=new qo;if(z.Image){const s=new Image;s.onload=Ci(ki,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ci(ki,n,s,"TestLoadImage: error",!1,e),s.onabort=Ci(ki,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ci(ki,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ki(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function fi(t){this.l=t.$b||null,this.j=t.ib||!1}ze(fi,$l);fi.prototype.g=function(){return new Yo(this.l,this.j)};fi.prototype.i=function(t){return function(){return t}}({});function Yo(t,e){Le.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Gl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Yo,Le);var Gl=0;x=Yo.prototype;x.open=function(t,e){if(this.readyState!=Gl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qr(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,di(this)),this.readyState=Gl};x.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qr(this)),this.g&&(this.readyState=3,qr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof z.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ug(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ug(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}x.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?di(this):qr(this),this.readyState==3&&Ug(this)}};x.Ua=function(t){this.g&&(this.response=this.responseText=t,di(this))};x.Ta=function(t){this.g&&(this.response=t,di(this))};x.ha=function(){this.g&&di(this)};function di(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qr(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function qr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Yo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var NI=z.JSON.parse;function Ae(t){Le.call(this),this.headers=new tr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fg,this.K=this.L=!1}ze(Ae,Le);var Fg="",OI=/^https?$/i,PI=["POST","PUT"];x=Ae.prototype;x.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():kc.g(),this.C=this.u?cf(this.u):cf(kc),this.g.onreadystatechange=$e(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){hf(this,i);return}t=n||"";const r=new tr(this.headers);s&&ql(s,function(i,o){r.set(o,i)}),s=HT(r.T()),n=z.FormData&&t instanceof z.FormData,!(0<=tg(PI,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$g(this),0<this.B&&((this.K=DI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$e(this.pa,this)):this.A=Vl(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){hf(this,i)}};function DI(t){return Fs&&GT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function xI(t){return t.toLowerCase()=="content-type"}x.pa=function(){typeof Rl!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,je(this,"timeout"),this.abort(8))};function hf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Bg(t),Qo(t)}function Bg(t){t.D||(t.D=!0,je(t,"complete"),je(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,je(this,"complete"),je(this,"abort"),Qo(this))};x.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qo(this,!0)),Ae.Z.M.call(this)};x.Fa=function(){this.s||(this.F||this.v||this.l?Vg(this):this.cb())};x.cb=function(){Vg(this)};function Vg(t){if(t.h&&typeof Rl!="undefined"&&(!t.C[1]||Xt(t)!=4||t.ba()!=2)){if(t.v&&Xt(t)==4)Vl(t.Fa,0,t);else if(je(t,"readystatechange"),Xt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(kg)[1]||null;if(!r&&z.self&&z.self.location){var i=z.self.location.protocol;r=i.substr(0,i.length-1)}s=!OI.test(r?r.toLowerCase():"")}n=s}if(n)je(t,"complete"),je(t,"success");else{t.m=6;try{var o=2<Xt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Bg(t)}}finally{Qo(t)}}}}function Qo(t,e){if(t.g){$g(t);const n=t.g,s=t.C[0]?io:null;t.g=null,t.C=null,e||je(t,"ready");try{n.onreadystatechange=s}catch{}}}function $g(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function Xt(t){return t.g?t.g.readyState:0}x.ba=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};x.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),NI(e)}};function ff(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Fg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Da=function(){return this.m};x.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function LI(t){let e="";return Ol(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Xl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=LI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function fr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function jg(t){this.za=0,this.l=[],this.h=new qo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=fr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=fr("baseRetryDelayMs",5e3,t),this.$a=fr("retryDelaySeedMs",1e4,t),this.Ya=fr("forwardChannelMaxRetries",2,t),this.ra=fr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Pg(t&&t.concurrentRequestLimit),this.Ca=new AI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}x=jg.prototype;x.ma=8;x.G=1;function Yl(t){if(Hg(t),t.G==3){var e=t.V++,n=Zt(t.F);Te(n,"SID",t.J),Te(n,"RID",e),Te(n,"TYPE","terminate"),pi(t,n),e=new ui(t,t.h,e,void 0),e.K=2,e.v=Xo(Zt(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=Qg(e.l,null),e.g.ea(e.v)),e.F=Date.now(),hi(e)}Xg(t)}x.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Jo(t){t.g&&(Jl(t),t.g.cancel(),t.g=null)}function Hg(t){Jo(t),t.u&&(z.clearTimeout(t.u),t.u=null),fo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Ba(t,e){t.l.push(new SI(t.Za++,e)),t.G==3&&Zo(t)}function Zo(t){Dg(t.i)||t.m||(t.m=!0,Fl(t.Ha,t),t.C=0)}function MI(t,e){return xg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ci($e(t.Ha,t,e),Gg(t,t.C)),t.C++,!0)}x.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new ui(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=sg(i),rg(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=qg(this,r,e),n=Zt(this.F),Te(n,"RID",t),Te(n,"CVER",22),this.D&&Te(n,"X-HTTP-Session-Id",this.D),pi(this,n),this.o&&i&&Xl(n,this.o,i),zl(this.i,r),this.Ra&&Te(n,"TYPE","init"),this.ja?(Te(n,"$req",e),Te(n,"SID","null"),r.$=!0,Nc(r,n,null)):Nc(r,n,e),this.G=2}}else this.G==3&&(t?df(this,t):this.l.length==0||Dg(this.i)||df(this))};function df(t,e){var n;e?n=e.m:n=t.V++;const s=Zt(t.F);Te(s,"SID",t.J),Te(s,"RID",n),Te(s,"AID",t.U),pi(t,s),t.o&&t.s&&Xl(s,t.o,t.s),n=new ui(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=qg(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),zl(t.i,n),Nc(n,s,e)}function pi(t,e){t.j&&ql({},function(n,s){Te(e,s,n)})}function qg(t,e,n){n=Math.min(t.l.length,n);var s=t.j?$e(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{kI(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Kg(t){t.g||t.u||(t.Y=1,Fl(t.Ga,t),t.A=0)}function Ql(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ci($e(t.Ga,t),Gg(t,t.A)),t.A++,!0)}x.Ga=function(){if(this.u=null,zg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ci($e(this.bb,this),t)}};x.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,st(10),Jo(this),zg(this))};function Jl(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function zg(t){t.g=new ui(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Zt(t.oa);Te(e,"RID","rpc"),Te(e,"SID",t.J),Te(e,"CI",t.N?"0":"1"),Te(e,"AID",t.U),pi(t,e),Te(e,"TYPE","xmlhttp"),t.o&&t.s&&Xl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Xo(Zt(e)),n.s=null,n.U=!0,Ig(n,t)}x.ab=function(){this.v!=null&&(this.v=null,Jo(this),Ql(this),st(19))};function fo(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function Wg(t,e){var n=null;if(t.g==e){fo(t),Jl(t),t.g=null;var s=2}else if(Pc(t.i,e))n=e.D,Lg(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Ko(),je(s,new wg(s,n,e,r)),Zo(t)}else Kg(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&MI(t,e)||s==2&&Ql(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Un(t,5);break;case 4:Un(t,10);break;case 3:Un(t,6);break;default:Un(t,2)}}}function Gg(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Un(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=$e(t.jb,t);n||(n=new Zn("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||lo(n,"https"),Xo(n)),RI(n.toString(),s)}else st(2);t.G=0,t.j&&t.j.va(e),Xg(t),Hg(t)}x.jb=function(t){t?(this.h.info("Successfully pinged google.com"),st(2)):(this.h.info("Failed to ping google.com"),st(1))};function Xg(t){t.G=0,t.I=-1,t.j&&((Mg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Nl(t.l),t.l.length=0),t.j.ua())}function Yg(t,e,n){let s=yI(n);if(s.i!="")e&&uo(s,e+"."+s.i),ho(s,s.m);else{const r=z.location;s=vI(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Ol(t.aa,function(r,i){Te(s,i,r)}),e=t.D,n=t.sa,e&&n&&Te(s,e,n),Te(s,"VER",t.ma),pi(t,s),s}function Qg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ae(new fi({ib:!0})):new Ae(t.qa),e.L=t.H,e}function Jg(){}x=Jg.prototype;x.xa=function(){};x.wa=function(){};x.va=function(){};x.ua=function(){};x.Oa=function(){};function po(){if(Fs&&!(10<=Number(XT)))throw Error("Environmental error: no available transport.")}po.prototype.g=function(t,e){return new yt(t,e)};function yt(t,e){Le.call(this),this.g=new jg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!oo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!oo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new sr(this)}ze(yt,Le);yt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Fl($e(t.hb,t,e))),st(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Yg(t,null,t.W),Zo(t)};yt.prototype.close=function(){Yl(this.g)};yt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Ba(this.g,e)}else this.v?(e={},e.__data__=Ul(t),Ba(this.g,e)):Ba(this.g,t)};yt.prototype.M=function(){this.g.j=null,delete this.j,Yl(this.g),delete this.g,yt.Z.M.call(this)};function Zg(t){jl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(Zg,jl);function em(){Hl.call(this),this.status=1}ze(em,Hl);function sr(t){this.g=t}ze(sr,Jg);sr.prototype.xa=function(){je(this.g,"a")};sr.prototype.wa=function(t){je(this.g,new Zg(t))};sr.prototype.va=function(t){je(this.g,new em(t))};sr.prototype.ua=function(){je(this.g,"b")};po.prototype.createWebChannel=po.prototype.g;yt.prototype.send=yt.prototype.u;yt.prototype.open=yt.prototype.m;yt.prototype.close=yt.prototype.close;zo.NO_ERROR=0;zo.TIMEOUT=8;zo.HTTP_ERROR=6;Eg.COMPLETE="complete";bg.EventType=li;li.OPEN="a";li.CLOSE="b";li.ERROR="c";li.MESSAGE="d";Le.prototype.listen=Le.prototype.N;Ae.prototype.listenOnce=Ae.prototype.O;Ae.prototype.getLastError=Ae.prototype.La;Ae.prototype.getLastErrorCode=Ae.prototype.Da;Ae.prototype.getStatus=Ae.prototype.ba;Ae.prototype.getResponseJson=Ae.prototype.Qa;Ae.prototype.getResponseText=Ae.prototype.ga;Ae.prototype.send=Ae.prototype.ea;var UI=function(){return new po},FI=function(){return Ko()},Va=zo,BI=Eg,VI=os,pf={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},$I=fi,Ri=bg,jI=Ae;const gf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let rr="9.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new ml("@firebase/firestore");function mf(){return es.logLevel}function B(t,...e){if(es.logLevel<=oe.DEBUG){const n=e.map(Zl);es.debug(`Firestore (${rr}): ${t}`,...n)}}function bn(t,...e){if(es.logLevel<=oe.ERROR){const n=e.map(Zl);es.error(`Firestore (${rr}): ${t}`,...n)}}function yf(t,...e){if(es.logLevel<=oe.WARN){const n=e.map(Zl);es.warn(`Firestore (${rr}): ${t}`,...n)}}function Zl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${rr}) INTERNAL ASSERTION FAILED: `+t;throw bn(e),new Error(e)}function ve(t,e){t||G()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class KI{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _n,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ve(typeof s.accessToken=="string"),new HI(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new it(e)}}class zI{constructor(e,n,s){this.type="FirstParty",this.user=it.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class WI{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new zI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XI{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.p=n.token,new GI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class eu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */eu.A=-1;class tm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=YI(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ce(t,e){return t<e?-1:t>e?1:0}function Bs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Qe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function vf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function as(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,s){n===void 0?n=0:n>e.length&&G(),s===void 0?s=e.length-n:s>e.length-n&&G(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Kr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Kr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Kr{construct(e,n,s){return new Ie(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const QI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Kr{construct(e,n,s){return new ot(e,n,s)}static isValidIdentifier(e){return QI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new q(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new q(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new q(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.fields=e,e.sort(ot.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ke(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const JI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tn(t){if(ve(!!t),typeof t=="string"){let e=0;const n=JI.exec(t);if(ve(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vs(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rm(t){const e=t.mapValue.fields.__previous_value__;return sm(e)?rm(e):e}function Wr(t){const e=Tn(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class $s{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $s("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $s&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t){return t==null}function go(t){return t===0&&1/t==-1/0}function eS(t){return typeof t=="number"&&Number.isInteger(t)&&!go(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Ie.fromString(e))}static fromName(e){return new H(Ie.fromString(e).popFirst(5))}static empty(){return new H(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Ie(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sm(t)?4:tS(t)?9007199254740991:10:G()}function Ht(t,e){if(t===e)return!0;const n=ts(t);if(n!==ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wr(t).isEqual(Wr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Tn(s.timestampValue),o=Tn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Vs(s.bytesValue).isEqual(Vs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ce(s.geoPointValue.latitude)===Ce(r.geoPointValue.latitude)&&Ce(s.geoPointValue.longitude)===Ce(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ce(s.integerValue)===Ce(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ce(s.doubleValue),o=Ce(r.doubleValue);return i===o?go(i)===go(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Bs(t.arrayValue.values||[],e.arrayValue.values||[],Ht);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(vf(i)!==vf(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ht(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Gr(t,e){return(t.values||[]).find(n=>Ht(n,e))!==void 0}function js(t,e){if(t===e)return 0;const n=ts(t),s=ts(e);if(n!==s)return ce(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ce(r.integerValue||r.doubleValue),a=Ce(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return _f(t.timestampValue,e.timestampValue);case 4:return _f(Wr(t),Wr(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Vs(r),a=Vs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ce(o[c],a[c]);if(l!==0)return l}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ce(Ce(r.latitude),Ce(i.latitude));return o!==0?o:ce(Ce(r.longitude),Ce(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=js(o[c],a[c]);if(l)return l}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ni.mapValue&&i===Ni.mapValue)return 0;if(r===Ni.mapValue)return 1;if(i===Ni.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ce(a[u],l[u]);if(h!==0)return h;const f=js(o[a[u]],c[l[u]]);if(f!==0)return f}return ce(a.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function _f(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Tn(t),s=Tn(e),r=ce(n.seconds,s.seconds);return r!==0?r:ce(n.nanos,s.nanos)}function Ps(t){return Dc(t)}function Dc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Tn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Vs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Dc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Dc(s.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function xc(t){return!!t&&"integerValue"in t}function tu(t){return!!t&&"arrayValue"in t}function wf(t){return!!t&&"nullValue"in t}function Ef(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hi(t){return!!t&&"mapValue"in t}function kr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return as(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=kr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=kr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Hi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=kr(n)}setAll(e){let n=ot.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=kr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Hi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ht(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Hi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){as(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new dt(kr(this.value))}}function im(t){const e=[];return as(t.fields,(n,s)=>{const r=new ot([n]);if(Hi(s)){const i=im(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new zr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Xe(e,0,ee.min(),ee.min(),dt.empty(),0)}static newFoundDocument(e,n,s){return new Xe(e,1,n,ee.min(),s,0)}static newNoDocument(e,n){return new Xe(e,2,n,ee.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new Xe(e,3,n,ee.min(),dt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function nS(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ee.fromTimestamp(s===1e9?new Qe(n+1,0):new Qe(n,s));return new ns(r,H.empty(),e)}function sS(t){return new ns(t.readTime,t.key,-1)}class ns{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ns(ee.min(),H.empty(),-1)}static max(){return new ns(ee.max(),H.empty(),-1)}}function rS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oi(this.root,e,this.comparator,!0)}}class Oi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Fe.RED,this.left=r!=null?r:Fe.EMPTY,this.right=i!=null?i:Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Fe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Fe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Fe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bf(this.data.getIterator())}getIteratorFrom(e){return new bf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class bf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class iS{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function Tf(t,e=null,n=[],s=[],r=null,i=null,o=null){return new iS(t,e,n,s,r,i,o)}function nu(t){const e=Y(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Ps(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ea(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ps(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ps(s)).join(",")),e.P=n}return e.P}function oS(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Ps(s.value)}`;var s}).join(", ")}]`),ea(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ps(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ps(n)).join(",")),`Target(${e})`}function su(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!pS(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Ht(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sf(t.startAt,e.startAt)&&Sf(t.endAt,e.endAt)}function Lc(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class at extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,s):new aS(e,n,s):n==="array-contains"?new uS(e,s):n==="in"?new hS(e,s):n==="not-in"?new fS(e,s):n==="array-contains-any"?new dS(e,s):new at(e,n,s)}static V(e,n,s){return n==="in"?new cS(e,s):new lS(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(js(n,this.value)):n!==null&&ts(this.value)===ts(n)&&this.v(js(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class aS extends at{constructor(e,n,s){super(e,n,s),this.key=H.fromName(s.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.v(n)}}class cS extends at{constructor(e,n){super(e,"in",n),this.keys=om("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lS extends at{constructor(e,n){super(e,"not-in",n),this.keys=om("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function om(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>H.fromName(s.referenceValue))}class uS extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tu(n)&&Gr(n.arrayValue,this.value)}}class hS extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Gr(this.value.arrayValue,n)}}class fS extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(Gr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Gr(this.value.arrayValue,n)}}class dS extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Gr(this.value.arrayValue,s))}}class mo{constructor(e,n){this.position=e,this.inclusive=n}}class Rr{constructor(e,n="asc"){this.field=e,this.dir=n}}function pS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function If(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=H.comparator(H.fromName(o.referenceValue),n.key):s=js(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Sf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ht(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function gS(t,e,n,s,r,i,o,a){return new ta(t,e,n,s,r,i,o,a)}function ru(t){return new ta(t)}function mS(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yS(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function vS(t){for(const e of t.filters)if(e.S())return e.field;return null}function _S(t){return t.collectionGroup!==null}function Xr(t){const e=Y(t);if(e.D===null){e.D=[];const n=vS(e),s=yS(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new Rr(n)),e.D.push(new Rr(ot.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Rr(ot.keyField(),i))}}}return e.D}function ss(t){const e=Y(t);if(!e.C)if(e.limitType==="F")e.C=Tf(e.path,e.collectionGroup,Xr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Xr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Rr(i.field,o))}const s=e.endAt?new mo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new mo(e.startAt.position,e.startAt.inclusive):null;e.C=Tf(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.C}function wS(t,e,n){return new ta(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function na(t,e){return su(ss(t),ss(e))&&t.limitType===e.limitType}function am(t){return`${nu(ss(t))}|lt:${t.limitType}`}function Mc(t){return`Query(target=${oS(ss(t))}; limitType=${t.limitType})`}function iu(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):H.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=If(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Xr(n),s)||n.endAt&&!function(r,i,o){const a=If(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Xr(n),s))}(t,e)}function ES(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function cm(t){return(e,n)=>{let s=!1;for(const r of Xr(t)){const i=bS(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function bS(t,e,n){const s=t.field.isKeyField()?H.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?js(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:go(e)?"-0":e}}function um(t){return{integerValue:""+t}}function TS(t,e){return eS(e)?um(e):lm(t,e)}/**
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
 */class sa{constructor(){this._=void 0}}function IS(t,e,n){return t instanceof yo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Yr?fm(t,e):t instanceof Qr?dm(t,e):function(s,r){const i=hm(s,r),o=Cf(i)+Cf(s.k);return xc(i)&&xc(s.k)?um(o):lm(s.M,o)}(t,e)}function SS(t,e,n){return t instanceof Yr?fm(t,e):t instanceof Qr?dm(t,e):n}function hm(t,e){return t instanceof vo?xc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class yo extends sa{}class Yr extends sa{constructor(e){super(),this.elements=e}}function fm(t,e){const n=pm(e);for(const s of t.elements)n.some(r=>Ht(r,s))||n.push(s);return{arrayValue:{values:n}}}class Qr extends sa{constructor(e){super(),this.elements=e}}function dm(t,e){let n=pm(e);for(const s of t.elements)n=n.filter(r=>!Ht(r,s));return{arrayValue:{values:n}}}class vo extends sa{constructor(e,n){super(),this.M=e,this.k=n}}function Cf(t){return Ce(t.integerValue||t.doubleValue)}function pm(t){return tu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function CS(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Yr&&s instanceof Yr||n instanceof Qr&&s instanceof Qr?Bs(n.elements,s.elements,Ht):n instanceof vo&&s instanceof vo?Ht(n.k,s.k):n instanceof yo&&s instanceof yo}(t.transform,e.transform)}class AS{constructor(e,n){this.version=e,this.transformResults=n}}class jn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jn}static exists(e){return new jn(void 0,e)}static updateTime(e){return new jn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ra{}function kS(t,e,n){t instanceof ia?function(s,r,i){const o=s.value.clone(),a=Rf(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ir?function(s,r,i){if(!qi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Rf(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(gm(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Uc(t,e,n){t instanceof ia?function(s,r,i){if(!qi(s.precondition,r))return;const o=s.value.clone(),a=Nf(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(kf(r),o).setHasLocalMutations()}(t,e,n):t instanceof ir?function(s,r,i){if(!qi(s.precondition,r))return;const o=Nf(s.fieldTransforms,i,r),a=r.data;a.setAll(gm(s)),a.setAll(o),r.convertToFoundDocument(kf(r),a).setHasLocalMutations()}(t,e,n):function(s,r){qi(s.precondition,r)&&r.convertToNoDocument(ee.min())}(t,e)}function RS(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=hm(s.transform,r||null);i!=null&&(n==null&&(n=dt.empty()),n.set(s.field,i))}return n||null}function Af(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Bs(n,s,(r,i)=>CS(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function kf(t){return t.isFoundDocument()?t.version:ee.min()}class ia extends ra{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class ir extends ra{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function gm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Rf(t,e,n){const s=new Map;ve(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,SS(o,a,n[r]))}return s}function Nf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,IS(i,o,e))}return s}class NS extends ra{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class OS extends ra{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,ne;function DS(t){switch(t){default:return G();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function mm(t){if(t===void 0)return bn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Se.OK:return I.OK;case Se.CANCELLED:return I.CANCELLED;case Se.UNKNOWN:return I.UNKNOWN;case Se.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Se.INTERNAL:return I.INTERNAL;case Se.UNAVAILABLE:return I.UNAVAILABLE;case Se.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Se.NOT_FOUND:return I.NOT_FOUND;case Se.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Se.ABORTED:return I.ABORTED;case Se.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Se.DATA_LOSS:return I.DATA_LOSS;default:return G()}}(ne=Se||(Se={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){as(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return nm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=new Me(H.comparator);function rs(){return xS}const LS=new Me(H.comparator);function Fc(...t){let e=LS;for(const n of t)e=e.insert(n.key,n);return e}function $a(){return new or(t=>t.toString(),(t,e)=>t.isEqual(e))}const MS=new Me(H.comparator),US=new He(H.comparator);function Ee(...t){let e=US;for(const n of t)e=e.add(n);return e}const FS=new He(ce);function ym(){return FS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,gi.createSynthesizedTargetChangeForCurrentChange(e,n)),new oa(ee.min(),s,ym(),rs(),Ee())}}class gi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new gi(Ke.EMPTY_BYTE_STRING,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n,s,r){this.O=e,this.removedTargetIds=n,this.key=s,this.F=r}}class vm{constructor(e,n){this.targetId=e,this.$=n}}class _m{constructor(e,n,s=Ke.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Of{constructor(){this.B=0,this.L=Df(),this.U=Ke.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=Ee(),n=Ee(),s=Ee();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:G()}}),new gi(this.U,this.q,e,n,s)}J(){this.K=!1,this.L=Df()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class BS{constructor(e){this.nt=e,this.st=new Map,this.it=rs(),this.rt=Pf(),this.ot=new He(ce)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const s=this.lt(n);switch(e.state){case 0:this.ft(n)&&s.W(e.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((s,r)=>{this.ft(r)&&n(r)})}_t(e){const n=e.targetId,s=e.$.count,r=this.wt(n);if(r){const i=r.target;if(Lc(i))if(s===0){const o=new H(i.path);this.ct(n,o,Xe.newNoDocument(o,ee.min()))}else ve(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Lc(a.target)){const c=new H(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,Xe.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let s=Ee();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const r=new oa(e,n,this.ot,this.it,s);return this.it=rs(),this.rt=Pf(),this.ot=new He(ce),r}at(e,n){if(!this.ft(e))return;const s=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,s){if(!this.ft(e))return;const r=this.lt(e);this.It(e,n)?r.Y(n,1):r.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),s&&(this.it=this.it.insert(n,s))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new Of,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new He(ce),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new Of),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Pf(){return new Me(H.comparator)}function Df(){return new Me(H.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$S=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class jS{constructor(e,n){this.databaseId=e,this.N=n}}function _o(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wm(t,e){return t.N?e.toBase64():e.toUint8Array()}function HS(t,e){return _o(t,e.toTimestamp())}function Yt(t){return ve(!!t),ee.fromTimestamp(function(e){const n=Tn(e);return new Qe(n.seconds,n.nanos)}(t))}function ou(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Em(t){const e=Ie.fromString(t);return ve(Im(e)),e}function Bc(t,e){return ou(t.databaseId,e.path)}function ja(t,e){const n=Em(e);if(n.get(1)!==t.databaseId.projectId)throw new q(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(bm(n))}function Vc(t,e){return ou(t.databaseId,e)}function qS(t){const e=Em(t);return e.length===4?Ie.emptyPath():bm(e)}function $c(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bm(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xf(t,e,n){return{name:Bc(t,e),fields:n.value.mapValue.fields}}function KS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.N?(ve(l===void 0||typeof l=="string"),Ke.fromBase64String(l||"")):(ve(l===void 0||l instanceof Uint8Array),Ke.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:mm(c.code);return new q(l,c.message||"")}(o);n=new _m(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ja(t,s.document.name),i=Yt(s.document.updateTime),o=new dt({mapValue:{fields:s.document.fields}}),a=Xe.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new Ki(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ja(t,s.document),i=s.readTime?Yt(s.readTime):ee.min(),o=Xe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ki([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ja(t,s.document),i=s.removedTargetIds||[];n=new Ki([],i,r,null)}else{if(!("filter"in e))return G();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new PS(r),o=s.targetId;n=new vm(o,i)}}return n}function zS(t,e){let n;if(e instanceof ia)n={update:xf(t,e.key,e.value)};else if(e instanceof NS)n={delete:Bc(t,e.key)};else if(e instanceof ir)n={update:xf(t,e.key,e.data),updateMask:nC(e.fieldMask)};else{if(!(e instanceof OS))return G();n={verify:Bc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof yo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Yr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Qr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof vo)return{fieldPath:i.field.canonicalString(),increment:o.k};throw G()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:HS(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:G()}(t,e.precondition)),n}function WS(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Yt(s.updateTime):Yt(r);return i.isEqual(ee.min())&&(i=Yt(r)),new AS(i,s.transformResults||[])}(n,e))):[]}function GS(t,e){return{documents:[Vc(t,e.path)]}}function XS(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Vc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Vc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Ef(h.value))return{unaryFilter:{field:ms(h.field),op:"IS_NAN"}};if(wf(h.value))return{unaryFilter:{field:ms(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Ef(h.value))return{unaryFilter:{field:ms(h.field),op:"IS_NOT_NAN"}};if(wf(h.value))return{unaryFilter:{field:ms(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ms(h.field),op:ZS(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ms(u.field),direction:JS(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.N||ea(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function YS(t){let e=qS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ve(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Tm(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Rr(Is(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ea(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new mo(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new mo(f,h)}(n.endAt)),gS(e,r,o,i,a,"F",c,l)}function QS(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Tm(t){return t?t.unaryFilter!==void 0?[tC(t)]:t.fieldFilter!==void 0?[eC(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Tm(e)).reduce((e,n)=>e.concat(n)):G():[]}function JS(t){return VS[t]}function ZS(t){return $S[t]}function ms(t){return{fieldPath:t.canonicalString()}}function Is(t){return ot.fromServerFormat(t.fieldPath)}function eC(t){return at.create(Is(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}function tC(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Is(t.unaryFilter.field);return at.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Is(t.unaryFilter.field);return at.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Is(t.unaryFilter.field);return at.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Is(t.unaryFilter.field);return at.create(r,"!=",{nullValue:"NULL_VALUE"});default:return G()}}function nC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Im(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,s)=>{n(e)})}static reject(e){return new C((n,s)=>{s(e)})}static waitFor(e){return new C((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=C.resolve(!1);for(const s of e)n=n.next(r=>r?C.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function mi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&kS(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Uc(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Uc(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(ee.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&Bs(this.mutations,e.mutations,(n,s)=>Af(n,s))&&Bs(this.baseMutations,e.baseMutations,(n,s)=>Af(n,s))}}class au{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ve(e.mutations.length===s.length);let r=MS;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new au(e,n,s,r)}}/**
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
 */class oC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Hn{constructor(e,n,s,r,i=ee.min(),o=ee.min(),a=Ke.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.Jt=e}}function cC(t){const e=YS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wS(e,e.limit,"L"):e}/**
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
 */class lC{constructor(){this.qe=new uC}addToCollectionParentIndex(e,n){return this.qe.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(ns.min())}updateCollectionGroup(e,n,s){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class uC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new He(Ie.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new He(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Hs(0)}static yn(){return new Hs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==sC)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(){this.changes=new or(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?C.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,n,s){this.ds=e,this.Bs=n,this.indexManager=s}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.Us(e,n,s))}Us(e,n,s){return this.ds.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}qs(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}Ks(e,n){return this.ds.getEntries(e,n).next(s=>this.Gs(e,s).next(()=>s))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.qs(n,s))}Qs(e,n,s){return function(r){return H.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.js(e,n.path):_S(n)?this.Ws(e,n,s):this.zs(e,n,s)}js(e,n){return this.Ls(e,new H(n)).next(s=>{let r=Fc();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Ws(e,n,s){const r=n.collectionGroup;let i=Fc();return this.indexManager.getCollectionParents(e,r).next(o=>C.forEach(o,a=>{const c=function(l,u){return new ta(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.zs(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}zs(e,n,s){let r;return this.ds.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let l=r.get(c);l==null&&(l=Xe.newInvalidDocument(c),r=r.insert(c,l)),Uc(a,l,o.localWriteTime),l.isFoundDocument()||(r=r.remove(c))}}).next(()=>(r.forEach((i,o)=>{iu(n,o)||(r=r.remove(i))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Hs=s,this.Js=r}static Ys(e,n){let s=Ee(),r=Ee();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new cu(e,n.fromCache,s,r)}}/**
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
 */class dC{constructor(){this.Xs=!1}initialize(e,n){this.Zs=e,this.indexManager=n,this.Xs=!0}Qs(e,n,s,r){return this.ti(e,n).next(i=>i||this.ei(e,n,r,s)).next(i=>i||this.ni(e,n))}ti(e,n){return C.resolve(null)}ei(e,n,s,r){return mS(n)||r.isEqual(ee.min())?this.ni(e,n):this.Zs.Ks(e,s).next(i=>{const o=this.si(n,i);return this.ii(n,o,s,r)?this.ni(e,n):(mf()<=oe.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Mc(n)),this.ri(e,o,n,nS(r,-1)))})}si(e,n){let s=new He(cm(e));return n.forEach((r,i)=>{iu(e,i)&&(s=s.add(i))}),s}ii(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ni(e,n){return mf()<=oe.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Mc(n)),this.Zs.Qs(e,n,ns.min())}ri(e,n,s,r){return this.Zs.Qs(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n,s,r){this.persistence=e,this.oi=n,this.M=r,this.ui=new Me(ce),this.ai=new or(i=>nu(i),su),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(s)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new fC(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ui))}}function gC(t,e,n,s){return new pC(t,e,n,s)}async function Sm(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.Bs.getAllMutationBatches(s).next(i=>(r=i,n.li(e),n.Bs.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Ee();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.fi.Ks(s,c).next(l=>({di:l,removedBatchIds:o,addedBatchIds:a}))})})}function mC(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.hi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=C.resolve();return h.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(m=>{const b=c.docVersions.get(g);ve(b!==null),m.version.compareTo(b)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),f.next(()=>o.Bs.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.Bs.performConsistencyCheck(s)).next(()=>n.fi.Ks(s,r))})}function Cm(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function yC(t,e){const n=Y(t),s=e.snapshotVersion;let r=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hi.newChangeBuffer({trackRemovals:!0});r=n.ui;const a=[];e.targetChanges.forEach((l,u)=>{const h=r.get(u);if(!h)return;a.push(n.fs.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.fs.addMatchingKeys(i,l.addedDocuments,u)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?f=f.withResumeToken(Ke.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,s)),r=r.insert(u,f),function(g,m,b){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(h,f,l)&&a.push(n.fs.updateTargetData(i,f))});let c=rs();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(vC(i,o,e.documentUpdates).next(l=>{c=l})),!s.isEqual(ee.min())){const l=n.fs.getLastRemoteSnapshotVersion(i).next(u=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.fi.Gs(i,c)).next(()=>c)}).then(i=>(n.ui=r,i))}function vC(t,e,n){let s=Ee();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let i=rs();return n.forEach((o,a)=>{const c=r.get(o);a.isNoDocument()&&a.version.isEqual(ee.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):B("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function _C(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(s,e)))}function wC(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.fs.getTargetData(s,e).next(i=>i?(r=i,C.resolve(r)):n.fs.allocateTargetId(s).next(o=>(r=new Hn(e,o,0,s.currentSequenceNumber),n.fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ui=n.ui.insert(s.targetId,s),n.ai.set(e,s.targetId)),s})}async function jc(t,e,n){const s=Y(t),r=s.ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!mi(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ui=s.ui.remove(e),s.ai.delete(r.target)}function Lf(t,e,n){const s=Y(t);let r=ee.min(),i=Ee();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Y(a),h=u.ai.get(l);return h!==void 0?C.resolve(u.ui.get(h)):u.fs.getTargetData(c,l)}(s,o,ss(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.oi.Qs(o,e,n?r:ee.min(),n?i:Ee())).next(a=>(EC(s,ES(e),a),{documents:a,_i:i})))}function EC(t,e,n){let s=ee.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.ci.set(e,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,n){return C.resolve(this.yi.get(n))}saveBundleMetadata(e,n){var s;return this.yi.set(n.id,{id:(s=n).id,version:s.version,createTime:Yt(s.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.pi.get(n))}saveNamedQuery(e,n){return this.pi.set(n.name,function(s){return{name:s.name,query:cC(s.bundledQuery),readTime:Yt(s.readTime)}}(n)),C.resolve()}}/**
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
 */class TC{constructor(){this.overlays=new Me(H.comparator),this.Ii=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.Xt(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Ii.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ii.delete(s)),C.resolve()}getOverlaysForCollection(e,n,s){const r=$a(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return C.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Me((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=$a(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=$a(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return C.resolve(a)}Xt(e,n,s){if(s===null)return;const r=this.overlays.get(s.key);if(r!==null){const o=this.Ii.get(r.largestBatchId).delete(s.key);this.Ii.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new oC(n,s));let i=this.Ii.get(n);i===void 0&&(i=Ee(),this.Ii.set(n,i)),this.Ii.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.Ti=new He(Ne.Ei),this.Ai=new He(Ne.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,n){const s=new Ne(e,n);this.Ti=this.Ti.add(s),this.Ai=this.Ai.add(s)}bi(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Pi(new Ne(e,n))}Vi(e,n){e.forEach(s=>this.removeReference(s,n))}vi(e){const n=new H(new Ie([])),s=new Ne(n,e),r=new Ne(n,e+1),i=[];return this.Ai.forEachInRange([s,r],o=>{this.Pi(o),i.push(o.key)}),i}Si(){this.Ti.forEach(e=>this.Pi(e))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const n=new H(new Ie([])),s=new Ne(n,e),r=new Ne(n,e+1);let i=Ee();return this.Ai.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ne(e,0),s=this.Ti.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ne{constructor(e,n){this.key=e,this.Ci=n}static Ei(e,n){return H.comparator(e.key,n.key)||ce(e.Ci,n.Ci)}static Ri(e,n){return ce(e.Ci,n.Ci)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.xi=1,this.Ni=new He(Ne.Ei)}checkEmpty(e){return C.resolve(this.Bs.length===0)}addMutationBatch(e,n,s,r){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new iC(i,n,s,r);this.Bs.push(o);for(const a of r)this.Ni=this.Ni.add(new Ne(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.ki(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Mi(s),i=r<0?0:r;return C.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(e){return C.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ne(n,0),r=new Ne(n,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([s,r],o=>{const a=this.ki(o.Ci);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new He(ce);return n.forEach(r=>{const i=new Ne(r,0),o=new Ne(r,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([i,o],a=>{s=s.add(a.Ci)})}),C.resolve(this.Oi(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;H.isDocumentKey(i)||(i=i.child(""));const o=new Ne(new H(i),0);let a=new He(ce);return this.Ni.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Ci)),!0)},o),C.resolve(this.Oi(a))}Oi(e){const n=[];return e.forEach(s=>{const r=this.ki(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ve(this.Fi(n.batchId,"removed")===0),this.Bs.shift();let s=this.Ni;return C.forEach(n.mutations,r=>{const i=new Ne(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Ni=s})}_n(e){}containsKey(e,n){const s=new Ne(n,0),r=this.Ni.firstAfterOrEqual(s);return C.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,C.resolve()}Fi(e,n){return this.Mi(e)}Mi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}ki(e){const n=this.Mi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.$i=e,this.docs=new Me(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.$i(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return C.resolve(s?s.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(e,n){let s=rs();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Xe.newInvalidDocument(r))}),C.resolve(s)}getAllFromCollection(e,n,s){let r=rs();const i=new H(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||rS(sS(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return C.resolve(r)}getAllFromCollectionGroup(e,n,s,r){G()}Bi(e,n){return C.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new CC(this)}getSize(e){return C.resolve(this.size)}}class CC extends hC{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(s)}),C.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.persistence=e,this.Li=new or(n=>nu(n),su),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Ui=0,this.qi=new lu,this.targetCount=0,this.Ki=Hs.gn()}forEachTarget(e,n){return this.Li.forEach((s,r)=>n(r)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ui&&(this.Ui=n),C.resolve()}Tn(e){this.Li.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ki=new Hs(n),this.highestTargetId=n),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Tn(n),C.resolve()}removeTargetData(e,n){return this.Li.delete(n.target),this.qi.vi(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Li.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Li.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),C.waitFor(i).next(()=>r)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const s=this.Li.get(n)||null;return C.resolve(s)}addMatchingKeys(e,n,s){return this.qi.bi(n,s),C.resolve()}removeMatchingKeys(e,n,s){this.qi.Vi(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qi.vi(n),C.resolve()}getMatchingKeysForTargetId(e,n){const s=this.qi.Di(n);return C.resolve(s)}containsKey(e,n){return C.resolve(this.qi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n){this.Gi={},this.overlays={},this.es=new eu(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new AC(this),this.indexManager=new lC,this.ds=function(s){return new SC(s)}(s=>this.referenceDelegate.Qi(s)),this.M=new aC(n),this._s=new bC(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new TC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Gi[e.toKey()];return s||(s=new IC(n,this.referenceDelegate),this.Gi[e.toKey()]=s),s}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,s){B("MemoryPersistence","Starting transaction:",e);const r=new RC(this.es.next());return this.referenceDelegate.ji(),s(r).next(i=>this.referenceDelegate.Wi(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}zi(e,n){return C.or(Object.values(this.Gi).map(s=>()=>s.containsKey(e,n)))}}class RC extends rC{constructor(e){super(),this.currentSequenceNumber=e}}class uu{constructor(e){this.persistence=e,this.Hi=new lu,this.Ji=null}static Yi(e){return new uu(e)}get Xi(){if(this.Ji)return this.Ji;throw G()}addReference(e,n,s){return this.Hi.addReference(s,n),this.Xi.delete(s.toString()),C.resolve()}removeReference(e,n,s){return this.Hi.removeReference(s,n),this.Xi.add(s.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Xi.add(n.toString()),C.resolve()}removeTarget(e,n){this.Hi.vi(n.targetId).forEach(r=>this.Xi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Xi.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ji(){this.Ji=new Set}Wi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Xi,s=>{const r=H.fromPath(s);return this.Zi(e,r).next(i=>{i||n.removeEntry(r,ee.min())})}).next(()=>(this.Ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zi(e,n).next(s=>{s?this.Xi.delete(n.toString()):this.Xi.add(n.toString())})}Qi(e){return 0}Zi(e,n){return C.or([()=>C.resolve(this.Hi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zi(e,n)])}}class Mf{constructor(){this.activeTargetIds=ym()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NC{constructor(){this.Ur=new Mf,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Mf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class OC{Kr(e){}shutdown(){}}/**
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
 */class Uf{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.uo=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,r,i){const o=this.ho(e,n);B("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(B("RestConnection","Received: ",c),c),c=>{throw yf("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i){return this.co(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+rr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=PC[e];return`${this.uo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new jI;a.listenOnce(BI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Va.NO_ERROR:const l=a.getResponseJson();B("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Va.TIMEOUT:B("Connection",'RPC "'+e+'" timed out'),o(new q(I.DEADLINE_EXCEEDED,"Request time out"));break;case Va.HTTP_ERROR:const u=a.getStatus();if(B("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(m)>=0?m:I.UNKNOWN}(h.status);o(new q(f,h.message))}else o(new q(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new q(I.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{B("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=UI(),o=FI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new $I({})),this.lo(a.initMessageHeaders,n,s),vp()||wp()||wE()||Ep()||EE()||_p()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");B("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new DC({Jr:m=>{h?B("Connection","Not sending because WebChannel is closed:",m):(u||(B("Connection","Opening WebChannel transport."),l.open(),u=!0),B("Connection","WebChannel sending:",m),l.send(m))},Yr:()=>l.close()}),g=(m,b,_)=>{m.listen(b,k=>{try{_(k)}catch(D){setTimeout(()=>{throw D},0)}})};return g(l,Ri.EventType.OPEN,()=>{h||B("Connection","WebChannel transport opened.")}),g(l,Ri.EventType.CLOSE,()=>{h||(h=!0,B("Connection","WebChannel transport closed"),f.ro())}),g(l,Ri.EventType.ERROR,m=>{h||(h=!0,yf("Connection","WebChannel transport errored:",m),f.ro(new q(I.UNAVAILABLE,"The operation could not be completed")))}),g(l,Ri.EventType.MESSAGE,m=>{var b;if(!h){const _=m.data[0];ve(!!_);const k=_,D=k.error||((b=k[0])===null||b===void 0?void 0:b.error);if(D){B("Connection","WebChannel received error:",D);const F=D.status;let M=function(le){const Q=Se[le];if(Q!==void 0)return mm(Q)}(F),ie=D.message;M===void 0&&(M=I.INTERNAL,ie="Unknown error status: "+F+" with message "+D.message),h=!0,f.ro(new q(M,ie)),l.close()}else B("Connection","WebChannel received:",_),f.oo(_)}}),g(o,VI.STAT_EVENT,m=>{m.stat===pf.PROXY?B("Connection","Detected buffering proxy"):m.stat===pf.NOPROXY&&B("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.io()},0),f}}function Ha(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t){return new jS(t,!0)}class Am{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Yn=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&B("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n,s,r,i,o,a,c){this.Yn=e,this.Vo=s,this.vo=r,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Am(e,n)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(bn(n.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Do===n&&this.Qo(s,r)},s=>{e(()=>{const r=new q(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(r)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(r=>{s(()=>this.jo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Yn.enqueueAndForget(()=>this.Do===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LC extends km{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.M=i}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=KS(this.M,e),s=function(r){if(!("targetChange"in r))return ee.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?ee.min():i.readTime?Yt(i.readTime):ee.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=$c(this.M),n.addTarget=function(r,i){let o;const a=i.target;return o=Lc(a)?{documents:GS(r,a)}:{query:XS(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=wm(r,i.resumeToken):i.snapshotVersion.compareTo(ee.min())>0&&(o.readTime=_o(r,i.snapshotVersion.toTimestamp())),o}(this.M,e);const s=QS(this.M,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=$c(this.M),n.removeTarget=e,this.Lo(n)}}class MC extends km{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.M=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=WS(e.writeResults,e.commitTime),s=Yt(e.commitTime);return this.listener.tu(s,n)}return ve(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=$c(this.M),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>zS(this.M,s))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.M=r,this.su=!1}iu(){if(this.su)throw new q(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(I.UNKNOWN,r.toString())})}_o(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So._o(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(I.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class FC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(bn(n),this.uu=!1):B("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr(o=>{s.enqueueAndForget(async()=>{cs(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Y(a);c.wu.add(4),await vi(c),c.yu.set("Unknown"),c.wu.delete(4),await ca(c)}(this))})}),this.yu=new FC(s,r)}}async function ca(t){if(cs(t))for(const e of t.mu)await e(!0)}async function vi(t){for(const e of t.mu)await e(!1)}function Rm(t,e){const n=Y(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),du(n)?fu(n):ar(n).Mo()&&hu(n,e))}function Nm(t,e){const n=Y(t),s=ar(n);n._u.delete(e),s.Mo()&&Om(n,e),n._u.size===0&&(s.Mo()?s.$o():cs(n)&&n.yu.set("Unknown"))}function hu(t,e){t.pu.Z(e.targetId),ar(t).Ho(e)}function Om(t,e){t.pu.Z(e),ar(t).Jo(e)}function fu(t){t.pu=new BS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t._u.get(e)||null}),ar(t).start(),t.yu.au()}function du(t){return cs(t)&&!ar(t).ko()&&t._u.size>0}function cs(t){return Y(t).wu.size===0}function Pm(t){t.pu=void 0}async function VC(t){t._u.forEach((e,n)=>{hu(t,e)})}async function $C(t,e){Pm(t),du(t)?(t.yu.lu(e),fu(t)):t.yu.set("Unknown")}async function jC(t,e,n){if(t.yu.set("Online"),e instanceof _m&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await wo(t,s)}else if(e instanceof Ki?t.pu.ut(e):e instanceof vm?t.pu._t(e):t.pu.ht(e),!n.isEqual(ee.min()))try{const s=await Cm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.pu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r._u.get(c);l&&r._u.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r._u.get(a);if(!c)return;r._u.set(a,c.withResumeToken(Ke.EMPTY_BYTE_STRING,c.snapshotVersion)),Om(r,a);const l=new Hn(c.target,a,1,c.sequenceNumber);hu(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){B("RemoteStore","Failed to raise snapshot:",s),await wo(t,s)}}async function wo(t,e,n){if(!mi(e))throw e;t.wu.add(1),await vi(t),t.yu.set("Offline"),n||(n=()=>Cm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await ca(t)})}function Dm(t,e){return e().catch(n=>wo(t,n,e))}async function la(t){const e=Y(t),n=In(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;HC(e);)try{const r=await _C(e.localStore,s);if(r===null){e.du.length===0&&n.$o();break}s=r.batchId,qC(e,r)}catch(r){await wo(e,r)}xm(e)&&Lm(e)}function HC(t){return cs(t)&&t.du.length<10}function qC(t,e){t.du.push(e);const n=In(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function xm(t){return cs(t)&&!In(t).ko()&&t.du.length>0}function Lm(t){In(t).start()}async function KC(t){In(t).nu()}async function zC(t){const e=In(t);for(const n of t.du)e.Zo(n.mutations)}async function WC(t,e,n){const s=t.du.shift(),r=au.from(s,e,n);await Dm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await la(t)}async function GC(t,e){e&&In(t).Xo&&await async function(n,s){if(r=s.code,DS(r)&&r!==I.ABORTED){const i=n.du.shift();In(n).Fo(),await Dm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await la(n)}var r}(t,e),xm(t)&&Lm(t)}async function Ff(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const s=cs(n);n.wu.add(3),await vi(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await ca(n)}async function XC(t,e){const n=Y(t);e?(n.wu.delete(2),await ca(n)):e||(n.wu.add(2),await vi(n),n.yu.set("Unknown"))}function ar(t){return t.Iu||(t.Iu=function(e,n,s){const r=Y(e);return r.iu(),new LC(n,r.So,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{Xr:VC.bind(null,t),eo:$C.bind(null,t),zo:jC.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),du(t)?fu(t):t.yu.set("Unknown")):(await t.Iu.stop(),Pm(t))})),t.Iu}function In(t){return t.Tu||(t.Tu=function(e,n,s){const r=Y(e);return r.iu(),new MC(n,r.So,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{Xr:KC.bind(null,t),eo:GC.bind(null,t),eu:zC.bind(null,t),tu:WC.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await la(t)):(await t.Tu.stop(),t.du.length>0&&(B("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new pu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gu(t,e){if(bn("AsyncQueue",`${e}: ${t}`),mi(t))return new q(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.comparator=e?(n,s)=>e(n,s)||H.comparator(n.key,s.key):(n,s)=>H.comparator(n.key,s.key),this.keyedMap=Fc(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new Ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ds;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(){this.Eu=new Me(H.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):G():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class qs{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new qs(e,n,Ds.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&na(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(){this.Ru=void 0,this.listeners=[]}}class QC{constructor(){this.queries=new or(e=>am(e),na),this.onlineState="Unknown",this.bu=new Set}}async function JC(t,e){const n=Y(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new YC),r)try{i.Ru=await n.onListen(s)}catch(o){const a=gu(o,`Initialization of query '${Mc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.Vu(i.Ru)&&mu(n)}async function ZC(t,e){const n=Y(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function eA(t,e){const n=Y(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.Ru=r}}s&&mu(n)}function tA(t,e,n){const s=Y(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function mu(t){t.bu.forEach(e=>{e.next()})}class nA{constructor(e,n,s){this.query=e,this.vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new qs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e){this.key=e}}class Um{constructor(e){this.key=e}}class sA{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.current=!1,this.Ku=Ee(),this.mutatedKeys=Ee(),this.Gu=cm(e),this.Qu=new Ds(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new Bf,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),g=iu(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let _=!1;f&&g?f.data.isEqual(g.data)?m!==b&&(s.track({type:3,doc:g}),_=!0):this.Hu(f,g)||(s.track({type:2,doc:g}),_=!0,(c&&this.Gu(g,c)>0||l&&this.Gu(g,l)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),_=!0):f&&!g&&(s.track({type:1,doc:f}),_=!0,(c||l)&&(a=!0)),_&&(g?(o=o.add(g),i=b?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,ii:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((l,u)=>function(h,f){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return g(h)-g(f)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new qs(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Bf,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Ee(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Um(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Mm(s))}),n}ta(e){this.Uu=e._i,this.Ku=Ee();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ea(){return qs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class rA{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class iA{constructor(e){this.key=e,this.na=!1}}class oA{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new or(a=>am(a),na),this.ra=new Map,this.oa=new Set,this.ua=new Me(H.comparator),this.aa=new Map,this.ca=new lu,this.ha={},this.la=new Map,this.fa=Hs.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function aA(t,e){const n=yA(t);let s,r;const i=n.ia.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ea();else{const o=await wC(n.localStore,ss(e));n.isPrimaryClient&&Rm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await cA(n,e,s,a==="current")}return r}async function cA(t,e,n,s){t._a=(u,h,f)=>async function(g,m,b,_){let k=m.view.Wu(b);k.ii&&(k=await Lf(g.localStore,m.query,!1).then(({documents:M})=>m.view.Wu(M,k)));const D=_&&_.targetChanges.get(m.targetId),F=m.view.applyChanges(k,g.isPrimaryClient,D);return $f(g,m.targetId,F.Xu),F.snapshot}(t,u,h,f);const r=await Lf(t.localStore,e,!0),i=new sA(e,r._i),o=i.Wu(r.documents),a=gi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);$f(t,n,c.Xu);const l=new rA(e,n,i);return t.ia.set(e,l),t.ra.has(n)?t.ra.get(n).push(e):t.ra.set(n,[e]),c.snapshot}async function lA(t,e){const n=Y(t),s=n.ia.get(e),r=n.ra.get(s.targetId);if(r.length>1)return n.ra.set(s.targetId,r.filter(i=>!na(i,e))),void n.ia.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await jc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Nm(n.remoteStore,s.targetId),Hc(n,s.targetId)}).catch(yi)):(Hc(n,s.targetId),await jc(n.localStore,s.targetId,!0))}async function uA(t,e,n){const s=vA(t);try{const r=await function(i,o){const a=Y(i),c=Qe.now(),l=o.reduce((h,f)=>h.add(f.key),Ee());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.fi.Ks(h,l).next(f=>{u=f;const g=[];for(const m of o){const b=RS(m,u.get(m.key));b!=null&&g.push(new ir(m.key,b,im(b.value.mapValue),jn.exists(!0)))}return a.Bs.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ha[i.currentUser.toKey()];c||(c=new Me(ce)),c=c.insert(o,a),i.ha[i.currentUser.toKey()]=c}(s,r.batchId,n),await _i(s,r.changes),await la(s.remoteStore)}catch(r){const i=gu(r,"Failed to persist write");n.reject(i)}}async function Fm(t,e){const n=Y(t);try{const s=await yC(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.aa.get(i);o&&(ve(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.na=!0:r.modifiedDocuments.size>0?ve(o.na):r.removedDocuments.size>0&&(ve(o.na),o.na=!1))}),await _i(n,s,e)}catch(s){await yi(s)}}function Vf(t,e,n){const s=Y(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ia.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Y(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&mu(a)}(s.eventManager,e),r.length&&s.sa.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function hA(t,e,n){const s=Y(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.aa.get(e),i=r&&r.key;if(i){let o=new Me(H.comparator);o=o.insert(i,Xe.newNoDocument(i,ee.min()));const a=Ee().add(i),c=new oa(ee.min(),new Map,new He(ce),o,a);await Fm(s,c),s.ua=s.ua.remove(i),s.aa.delete(e),yu(s)}else await jc(s.localStore,e,!1).then(()=>Hc(s,e,n)).catch(yi)}async function fA(t,e){const n=Y(t),s=e.batch.batchId;try{const r=await mC(n.localStore,e);Vm(n,s,null),Bm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await _i(n,r)}catch(r){await yi(r)}}async function dA(t,e,n){const s=Y(t);try{const r=await function(i,o){const a=Y(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.Bs.lookupMutationBatch(c,o).next(u=>(ve(u!==null),l=u.keys(),a.Bs.removeMutationBatch(c,u))).next(()=>a.Bs.performConsistencyCheck(c)).next(()=>a.fi.Ks(c,l))})}(s.localStore,e);Vm(s,e,n),Bm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await _i(s,r)}catch(r){await yi(r)}}function Bm(t,e){(t.la.get(e)||[]).forEach(n=>{n.resolve()}),t.la.delete(e)}function Vm(t,e,n){const s=Y(t);let r=s.ha[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ha[s.currentUser.toKey()]=r}}function Hc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ra.get(e))t.ia.delete(s),n&&t.sa.wa(s,n);t.ra.delete(e),t.isPrimaryClient&&t.ca.vi(e).forEach(s=>{t.ca.containsKey(s)||$m(t,s)})}function $m(t,e){t.oa.delete(e.path.canonicalString());const n=t.ua.get(e);n!==null&&(Nm(t.remoteStore,n),t.ua=t.ua.remove(e),t.aa.delete(n),yu(t))}function $f(t,e,n){for(const s of n)s instanceof Mm?(t.ca.addReference(s.key,e),pA(t,s)):s instanceof Um?(B("SyncEngine","Document no longer in limbo: "+s.key),t.ca.removeReference(s.key,e),t.ca.containsKey(s.key)||$m(t,s.key)):G()}function pA(t,e){const n=e.key,s=n.path.canonicalString();t.ua.get(n)||t.oa.has(s)||(B("SyncEngine","New document in limbo: "+n),t.oa.add(s),yu(t))}function yu(t){for(;t.oa.size>0&&t.ua.size<t.maxConcurrentLimboResolutions;){const e=t.oa.values().next().value;t.oa.delete(e);const n=new H(Ie.fromString(e)),s=t.fa.next();t.aa.set(s,new iA(n)),t.ua=t.ua.insert(n,s),Rm(t.remoteStore,new Hn(ss(ru(n.path)),s,2,eu.A))}}async function _i(t,e,n){const s=Y(t),r=[],i=[],o=[];s.ia.isEmpty()||(s.ia.forEach((a,c)=>{o.push(s._a(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=cu.Ys(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sa.zo(r),await async function(a,c){const l=Y(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>C.forEach(c,h=>C.forEach(h.Hs,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>C.forEach(h.Js,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!mi(u))throw u;B("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.ui.get(h),g=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(g);l.ui=l.ui.insert(h,m)}}}(s.localStore,i))}async function gA(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const s=await Sm(n.localStore,e);n.currentUser=e,function(r,i){r.la.forEach(o=>{o.forEach(a=>{a.reject(new q(I.CANCELLED,i))})}),r.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await _i(n,s.di)}}function mA(t,e){const n=Y(t),s=n.aa.get(e);if(s&&s.na)return Ee().add(s.key);{let r=Ee();const i=n.ra.get(e);if(!i)return r;for(const o of i){const a=n.ia.get(o);r=r.unionWith(a.view.ju)}return r}}function yA(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hA.bind(null,e),e.sa.zo=eA.bind(null,e.eventManager),e.sa.wa=tA.bind(null,e.eventManager),e}function vA(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dA.bind(null,e),e}class _A{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=aa(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return gC(this.persistence,new dC,e.initialUser,this.M)}ya(e){return new kC(uu.Yi,this.M)}ga(e){return new NC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Vf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=gA.bind(null,this.syncEngine),await XC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new QC}createDatastore(e){const n=aa(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new xC(r));var r;return function(i,o,a,c){return new UC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Vf(this.syncEngine,a,0),o=Uf.vt()?new Uf:new OC,new BC(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new oA(s,r,i,o,a,c);return l&&(u.da=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);B("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await vi(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class EA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=it.UNAUTHENTICATED,this.clientId=tm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{B("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(B("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=gu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function TA(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Sm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function IA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await SA(t);B("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Ff(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ff(e.remoteStore,i)),t.onlineComponents=e}async function SA(t){return t.offlineComponents||(B("FirestoreClient","Using default OfflineComponentProvider"),await TA(t,new _A)),t.offlineComponents}async function jm(t){return t.onlineComponents||(B("FirestoreClient","Using default OnlineComponentProvider"),await IA(t,new wA)),t.onlineComponents}function CA(t){return jm(t).then(e=>e.syncEngine)}async function AA(t){const e=await jm(t),n=e.eventManager;return n.onListen=aA.bind(null,e.syncEngine),n.onUnlisten=lA.bind(null,e.syncEngine),n}function kA(t,e,n={}){const s=new _n;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new EA({next:h=>{i.enqueueAndForget(()=>ZC(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new q(I.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new q(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new nA(ru(o.path),l,{includeMetadataChanges:!0,ku:!0});return JC(r,u)}(await AA(t),t.asyncQueue,e,n,s)),s.promise}const jf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(t,e,n){if(!n)throw new q(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function NA(t,e,n,s){if(e===!0&&s===!0)throw new q(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hf(t){if(!H.isDocumentKey(t))throw new q(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Ks(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vu(t);throw new q(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,NA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qf({}),this._settingsFrozen=!1,e instanceof $s?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new q(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $s(r.options.projectId)}(e))}get app(){if(!this._app)throw new q(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new qI;switch(n.type){case"gapi":const s=n.client;return ve(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new WI(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new q(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=jf.get(e);n&&(B("ComponentProvider","Removing Datastore"),jf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}}class _u{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new _u(this.firestore,e,this._query)}}class Jr extends _u{constructor(e,n,s){super(e,n,ru(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new H(e))}withConverter(e){return new Jr(this.firestore,e,this._path)}}function qn(t,e,...n){if(t=xe(t),arguments.length===1&&(e=tm.R()),RA("doc","path",e),t instanceof Hm){const s=Ie.fromString(e,...n);return Hf(s),new gt(t,null,new H(s))}{if(!(t instanceof gt||t instanceof Jr))throw new q(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return Hf(s),new gt(t.firestore,t instanceof Jr?t.converter:null,new H(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new Am(this,"async_queue_retry"),this.Qa=()=>{const n=Ha();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Ha();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const n=Ha();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise(()=>{});const n=new _n;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$a.push(e),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!mi(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(e){const n=this.Fa.then(()=>(this.qa=!0,e().catch(s=>{this.Ua=s,this.qa=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw bn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.qa=!1,s))));return this.Fa=n,n}enqueueAfterDelay(e,n,s){this.ja(),this.Ga.indexOf(e)>-1&&(n=0);const r=pu.createAndSchedule(this,e,n,s,i=>this.Ha(i));return this.La.push(r),r}ja(){this.Ua&&G()}verifyOperationInProgress(){}async Ja(){let e;do e=this.Fa,await e;while(e!==this.Fa)}Ya(e){for(const n of this.La)if(n.timerId===e)return!0;return!1}Xa(e){return this.Ja().then(()=>{this.La.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.La)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ja()})}Za(e){this.Ga.push(e)}Ha(e){const n=this.La.indexOf(e);this.La.splice(n,1)}}class ua extends Hm{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new OA,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Km(this),this._firestoreClient.terminate()}}function PA(t=_l()){return Mo(t,"firestore").getImmediate()}function qm(t){return t._firestoreClient||Km(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Km(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new ZI(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new bA(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ha{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zs(Ke.fromBase64String(e))}catch(n){throw new q(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zs(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=/^__.*__$/;class xA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new ia(e,this.data,n,this.fieldTransforms)}}class zm{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Wm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class bu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=r,i===void 0&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new bu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.nc({path:s,ic:!1});return r.rc(e),r}oc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.nc({path:s,ic:!1});return r.tc(),r}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return Eo(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(e.length===0)throw this.ac("Document fields must not be empty");if(Wm(this.ec)&&DA.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class LA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=s||aa(e)}lc(e,n,s,r=!1){return new bu({ec:e,methodName:n,hc:s,path:ot.emptyPath(),ic:!1,cc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Gm(t){const e=t._freezeSettings(),n=aa(t._databaseId);return new LA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function MA(t,e,n,s,r,i={}){const o=t.lc(i.merge||i.mergeFields?2:0,e,n,r);Tu("Data must be an object, but it was:",o,s);const a=Xm(s,o);let c,l;if(i.merge)c=new zr(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=qc(e,h,n);if(!o.contains(f))throw new q(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Qm(u,f)||u.push(f)}c=new zr(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new xA(new dt(a),c,l)}class fa extends wu{_toFieldTransform(e){if(e.ec!==2)throw e.ec===1?e.ac(`${this._methodName}() can only appear at the top level of your update data`):e.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fa}}function UA(t,e,n,s){const r=t.lc(1,e,n);Tu("Data must be an object, but it was:",r,s);const i=[],o=dt.empty();as(s,(c,l)=>{const u=Iu(e,c,n);l=xe(l);const h=r.oc(u);if(l instanceof fa)i.push(u);else{const f=da(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new zr(i);return new zm(o,a,r.fieldTransforms)}function FA(t,e,n,s,r,i){const o=t.lc(1,e,n),a=[qc(e,s,n)],c=[r];if(i.length%2!=0)throw new q(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(qc(e,i[f])),c.push(i[f+1]);const l=[],u=dt.empty();for(let f=a.length-1;f>=0;--f)if(!Qm(l,a[f])){const g=a[f];let m=c[f];m=xe(m);const b=o.oc(g);if(m instanceof fa)l.push(g);else{const _=da(m,b);_!=null&&(l.push(g),u.set(g,_))}}const h=new zr(l);return new zm(u,h,o.fieldTransforms)}function da(t,e){if(Ym(t=xe(t)))return Tu("Unsupported field value:",e,t),Xm(t,e);if(t instanceof wu)return function(n,s){if(!Wm(s.ec))throw s.ac(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ac(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&e.ec!==4)throw e.ac("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=da(o,s.uc(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=xe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return TS(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Qe.fromDate(n);return{timestampValue:_o(s.M,r)}}if(n instanceof Qe){const r=new Qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:_o(s.M,r)}}if(n instanceof Eu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof zs)return{bytesValue:wm(s.M,n._byteString)};if(n instanceof gt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ac(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ou(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ac(`Unsupported field value: ${vu(n)}`)}(t,e)}function Xm(t,e){const n={};return nm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):as(t,(s,r)=>{const i=da(r,e.sc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Ym(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof Eu||t instanceof zs||t instanceof gt||t instanceof wu)}function Tu(t,e,n){if(!Ym(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=vu(n);throw s==="an object"?e.ac(t+" a custom object"):e.ac(t+" "+s)}}function qc(t,e,n){if((e=xe(e))instanceof ha)return e._internalPath;if(typeof e=="string")return Iu(t,e);throw Eo("Field path arguments must be of type string or ",t,!1,void 0,n)}const BA=new RegExp("[~\\*/\\[\\]]");function Iu(t,e,n){if(e.search(BA)>=0)throw Eo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ha(...e.split("."))._internalPath}catch{throw Eo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Eo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new q(I.INVALID_ARGUMENT,a+t+c)}function Qm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Zm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class VA extends Jm{data(){return super.data()}}function Zm(t,e){return typeof e=="string"?Iu(t,e):e instanceof ha?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ey extends Jm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new jA(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Zm("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class jA extends ey{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{convertValue(e,n="none"){switch(ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const s={};return as(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Eu(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=rm(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Wr(e));default:return null}}convertTimestamp(e){const n=Tn(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ie.fromString(e);ve(Im(s));const r=new $s(s.get(1),s.get(3)),i=new H(s.popFirst(5));return r.isEqual(n)||bn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Kc(t){t=Ks(t,gt);const e=Ks(t.firestore,ua);return kA(qm(e),t._key).then(n=>WA(e,t,n))}class KA extends HA{constructor(e){super(),this.firestore=e}convertBytes(e){return new zs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function zA(t,e,n){t=Ks(t,gt);const s=Ks(t.firestore,ua),r=qA(t.converter,e,n);return ty(s,[MA(Gm(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,jn.none())])}function zc(t,e,n,...s){t=Ks(t,gt);const r=Ks(t.firestore,ua),i=Gm(r);let o;return o=typeof(e=xe(e))=="string"||e instanceof ha?FA(i,"updateDoc",t._key,e,n,s):UA(i,"updateDoc",t._key,e),ty(r,[o.toMutation(t._key,jn.exists(!0))])}function ty(t,e){return function(n,s){const r=new _n;return n.asyncQueue.enqueueAndForget(async()=>uA(await CA(n),s,r)),r.promise}(qm(t),e)}function WA(t,e,n){const s=n.docs.get(e._key),r=new KA(t);return new ey(t,r,e._key,s,new $A(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){rr=n})(Js),Gn(new En("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new ua(r,new KI(n.getProvider("auth-internal")),new XI(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),Bt(gf,"3.4.9",t),Bt(gf,"3.4.9","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="firebasestorage.googleapis.com",sy="storageBucket",GA=2*60*1e3,XA=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends Sn{constructor(e,n){super(qa(e),`Firebase Storage: ${n} (${qa(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Re.prototype)}_codeEquals(e){return qa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function qa(t){return"storage/"+t}function Su(){const t="An unknown error occurred, please check the error payload for server response.";return new Re("unknown",t)}function YA(t){return new Re("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function QA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Re("unauthenticated",t)}function JA(){return new Re("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function ZA(t){return new Re("unauthorized","User does not have permission to access '"+t+"'.")}function ek(){return new Re("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function tk(){return new Re("canceled","User canceled the upload/download.")}function nk(t){return new Re("invalid-url","Invalid URL '"+t+"'.")}function sk(t){return new Re("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function rk(){return new Re("no-default-bucket","No default bucket found. Did you set the '"+sy+"' property when initializing the app?")}function ik(){return new Re("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Wc(t){return new Re("invalid-argument",t)}function ry(){return new Re("app-deleted","The Firebase app was deleted.")}function ok(t){return new Re("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Nr(t,e){return new Re("invalid-format","String does not match format '"+t+"': "+e)}function dr(t){throw new Re("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=pt.makeFromUrl(e,n)}catch{return new pt(e,"")}if(s.path==="")return s;throw sk(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(M){M.path_=decodeURIComponent(M.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},b=n===ny?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",k=new RegExp(`^https?://${b}/${r}/${_}`,"i"),F=[{regex:a,indices:c,postModify:i},{regex:g,indices:m,postModify:l},{regex:k,indices:{bucket:1,path:2},postModify:l}];for(let M=0;M<F.length;M++){const ie=F[M],le=ie.regex.exec(e);if(le){const Q=le[ie.indices.bucket];let _e=le[ie.indices.path];_e||(_e=""),s=new pt(Q,_e),ie.postModify(s);break}}if(s==null)throw nk(e);return s}}class ak{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(..._){l||(l=!0,e.apply(null,_))}function h(_){r=setTimeout(()=>{r=null,t(g,c())},_)}function f(){i&&clearTimeout(i)}function g(_,...k){if(l){f();return}if(_){f(),u.call(null,_,...k);return}if(c()||o){f(),u.call(null,_,...k);return}s<64&&(s*=2);let F;a===1?(a=2,F=0):F=(s+Math.random())*1e3,h(F)}let m=!1;function b(_){m||(m=!0,f(),!l&&(r!==null?(_||(a=2),clearTimeout(r),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function lk(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(t){return t!==void 0}function hk(t){return typeof t=="object"&&!Array.isArray(t)}function iy(t){return typeof t=="string"||t instanceof String}function Kf(t){return Cu()&&t instanceof Blob}function Cu(){return typeof Blob!="undefined"}function zf(t,e,n,s){if(s<e)throw Wc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Wc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function dk(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Kn||(Kn={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,n,s,r,i,o,a,c,l,u,h){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Pi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Kn.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const u=i.getErrorCode()===Kn.ABORT;s(!1,new Pi(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Pi(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());uk(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Su();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?ry():tk();o(c)}else{const c=ek();o(c)}};this.canceled_?n(!1,new Pi(!1,null,!0)):this.backoffId_=ck(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||r||i}}class Pi{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function gk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function mk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function yk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function vk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _k(t,e,n,s,r,i){const o=dk(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return yk(c,e),gk(c,n),mk(c,i),vk(c,s),new pk(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function Ek(...t){const e=wk();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Cu())return new Blob(t);throw new Re("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function bk(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Tk(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ka{constructor(e,n){this.data=e,this.contentType=n||null}}function Ik(t,e){switch(t){case Ft.RAW:return new Ka(oy(e));case Ft.BASE64:case Ft.BASE64URL:return new Ka(ay(t,e));case Ft.DATA_URL:return new Ka(Ck(e),Ak(e))}throw Su()}function oy(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Sk(t){let e;try{e=decodeURIComponent(t)}catch{throw Nr(Ft.DATA_URL,"Malformed data URL.")}return oy(e)}function ay(t,e){switch(t){case Ft.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Nr(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Ft.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Nr(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Tk(e)}catch{throw Nr(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class cy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Nr(Ft.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=kk(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Ck(t){const e=new cy(t);return e.base64?ay(Ft.BASE64,e.rest):Sk(e.rest)}function Ak(t){return new cy(t).contentType}function kk(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n){let s=0,r="";Kf(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Kf(this.data_)){const s=this.data_,r=bk(s,e,n);return r===null?null:new pn(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new pn(s,!0)}}static getBlob(...e){if(Cu()){const n=e.map(s=>s instanceof pn?s.data_:s);return new pn(Ek.apply(null,n))}else{const n=e.map(o=>iy(o)?Ik(Ft.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new pn(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(t){let e;try{e=JSON.parse(t)}catch{return null}return hk(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ok(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function ly(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(t,e){return e}class Ze{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||Pk}}let Di=null;function Dk(t){return!iy(t)||t.length<2?t:ly(t)}function xk(){if(Di)return Di;const t=[];t.push(new Ze("bucket")),t.push(new Ze("generation")),t.push(new Ze("metageneration")),t.push(new Ze("name","fullPath",!0));function e(i,o){return Dk(o)}const n=new Ze("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new Ze("size");return r.xform=s,t.push(r),t.push(new Ze("timeCreated")),t.push(new Ze("updated")),t.push(new Ze("md5Hash",null,!0)),t.push(new Ze("cacheControl",null,!0)),t.push(new Ze("contentDisposition",null,!0)),t.push(new Ze("contentEncoding",null,!0)),t.push(new Ze("contentLanguage",null,!0)),t.push(new Ze("contentType",null,!0)),t.push(new Ze("metadata","customMetadata",!0)),Di=t,Di}function Lk(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new pt(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Mk(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return Lk(s,t),s}function Uk(t,e,n){const s=Rk(e);return s===null?null:Mk(t,s,n)}function Fk(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Bk{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(t){if(!t)throw Su()}function $k(t,e){function n(s,r){const i=Uk(t,r,e);return Vk(i!==null),i}return n}function jk(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=JA():r=QA():n.getStatus()===402?r=YA(t.bucket):n.getStatus()===403?r=ZA(t.path):r=s,r.serverResponse=s.serverResponse,r}return e}function Hk(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function qk(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=Hk(null,e)),s}function Kk(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let F="";for(let M=0;M<2;M++)F=F+Math.random().toString().slice(2);return F}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=qk(e,s,r),u=Fk(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",g=pn.getBlob(h,s,f);if(g===null)throw ik();const m={name:l.fullPath},b=fk(i,t.host,t._protocol),_="POST",k=t.maxUploadRetryTime,D=new Bk(b,_,$k(t,n),k);return D.urlParams=m,D.headers=o,D.body=g.uploadData(),D.errorHandler=jk(e),D}class zk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Kn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Kn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Kn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw dr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw dr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw dr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw dr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw dr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Wk extends zk{initXhr(){this.xhr_.responseType="text"}}function Gk(){return new Wk}/**
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
 */class is{constructor(e,n){this._service=e,n instanceof pt?this._location=n:this._location=pt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new is(e,n)}get root(){const e=new pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ly(this._location.path)}get storage(){return this._service}get parent(){const e=Nk(this._location.path);if(e===null)return null;const n=new pt(this._location.bucket,e);return new is(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ok(e)}}function Xk(t,e,n){t._throwIfRoot("uploadBytes");const s=Kk(t.storage,t._location,xk(),new pn(e,!0),n);return t.storage.makeRequestWithTokens(s,Gk).then(r=>({metadata:r,ref:t}))}function Yk(t,e){const n=Ok(t._location.path,e),s=new pt(t._location.bucket,n);return new is(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t){return/^[A-Za-z]+:\/\//.test(t)}function Jk(t,e){return new is(t,e)}function uy(t,e){if(t instanceof Au){const n=t;if(n._bucket==null)throw rk();const s=new is(n,n._bucket);return e!=null?uy(s,e):s}else return e!==void 0?Yk(t,e):t}function Zk(t,e){if(e&&Qk(e)){if(t instanceof Au)return Jk(t,e);throw Wc("To use ref(service, url), the first argument must be a Storage instance.")}else return uy(t,e)}function Wf(t,e){const n=e==null?void 0:e[sy];return n==null?null:pt.makeFromBucketSpec(n,t)}class Au{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=ny,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=GA,this._maxUploadRetryTime=XA,this._requests=new Set,r!=null?this._bucket=pt.makeFromBucketSpec(r,this._host):this._bucket=Wf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pt.makeFromBucketSpec(this._url,e):this._bucket=Wf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new is(this,e)}_makeRequest(e,n,s,r){if(this._deleted)return new ak(ry());{const i=_k(e,this._appId,s,r,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Gf="@firebase/storage",Xf="0.9.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="storage";function eR(t,e,n){return t=xe(t),Xk(t,e,n)}function tR(t,e){return t=xe(t),Zk(t,e)}function nR(t=_l(),e){return t=xe(t),Mo(t,hy).getImmediate({identifier:e})}function sR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Au(n,s,r,e,Js)}function rR(){Gn(new En(hy,sR,"PUBLIC").setMultipleInstances(!0)),Bt(Gf,Xf,""),Bt(Gf,Xf,"esm2017")}rR();const iR={apiKey:"AIzaSyCO-1zlqihZNJAGUqfbezRKdAbx2xVRurA",authDomain:"if-lost-159f6.firebaseapp.com",projectId:"if-lost-159f6",storageBucket:"if-lost-159f6.appspot.com",messagingSenderId:"55254413607",appId:"1:55254413607:web:2b14450ddb1a97bdccb902"};Ab(iR);const Kt=LT(),zn=PA(),oR=nR();var ku=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n};const aR={methods:{obtenerUsuario(){Os(Kt,t=>{t||this.$router.push("/login")})}},mounted(){this.obtenerUsuario()}},cR=O("div",null,[O("h2",{class:"ttl-1 mb-16"},"\xBFQu\xE9 quieres hacer?")],-1),lR={class:"place-items-center grid-cols-1"};function uR(t,e,n,s,r,i){return St(),Lt(ht,null,[cR,O("div",lR,[O("div",null,[O("button",{class:"btn-home",onClick:e[0]||(e[0]=o=>t.$router.push("/viajar"))}," Viajar seguro "),O("button",{class:"btn-home",onClick:e[1]||(e[1]=o=>t.$router.push("/rastrear"))}," Rastrear a alguien "),O("button",{class:"btn-home",onClick:e[2]||(e[2]=o=>t.$router.push("/404"))}," Enviar alerta ahora ")])])],64)}var hR=ku(aR,[["render",uR]]);const fR={data(){return{correo_is:"",contrase\u00F1a_is:"",correo_cc:"",contrase\u00F1a_cc:"",nombre_cc:"",apellidos_cc:"",numero_cc:"",ciudad_cc:"",numero_contacto:"",correo_contacto:"",nombre_contacto:"",iniciar_sesi\u00F3n:1,paso:0,img:"",uid:""}},methods:{async crearCuenta(){await E0(Kt,this.correo_cc,this.contrase\u00F1a_cc).then(t=>{console.log(t.user)}).catch(t=>{}),I0(Kt.currentUser,{displayName:this.nombre_cc+" "+this.apellidos_cc}).then(()=>{}).catch(t=>{}),Os(Kt,t=>{t&&(this.uid=t.uid,zA(qn(zn,"infoUsuarios",t.uid),{numero:this.numero_cc,nombres:this.nombre_cc,apellidos:this.apellidos_cc,ciudad:this.ciudad_cc,descripcion:""}))}),Os(Kt,t=>{t&&(zc(qn(zn,"infoUsuarios",t.uid),{numero_contacto:this.numero_contacto,nombre_contacto:this.nombre_contacto,correo_contacto:this.correo_contacto}),this.paso=3)})},iniciarSesi\u00F3n(){b0(Kt,this.correo_is,this.contrase\u00F1a_is).then(t=>{this.$router.push("/")}).catch(t=>{})},subirPerfil(t){let e=this;this.img=t.target.files[0];const n=new FileReader;n.readAsDataURL(this.img),n.onload=function(s){const r=document.createElement("img");r.src=s.target.result,r.onload=function(i){const o=document.createElement("canvas"),a=500,c=a/i.target.width;o.width=a,o.height=c*i.target.height;const l=o.getContext("2d");l.drawImage(i.target,0,0,o.width,o.height);const u=l.canvas.toDataURL(i.target,"image/png");function h(m,b){for(var _=m.split(","),k=_[0].match(/:(.*?);/)[1],D=atob(_[1]),F=D.length,M=new Uint8Array(F);F--;)M[F]=D.charCodeAt(F);return new File([M],b,{type:k})}e.$refs.perfil.src=u;let f=e.$refs.omitir;f.innerHTML="Descartar cambios y continuar",e.$refs.subir.classList.remove("hidden"),e.$refs.subirperfil.addEventListener("submit",function(m){e.img=h(u,"perfil.png");const b=tR(oR,"perfiles/"+e.uid);eR(b,e.img).then(_=>{e.paso++})}),f.addEventListener("click",function(m){e.paso++})}}},obtenerUsuario(){Os(Kt,t=>{t&&this.$router.push("/")})}},mounted(){this.obtenerUsuario}},dR={key:0},pR=O("div",null,[O("h1",{class:"ttl-1"},"Bienvenido"),O("div",null,[O("h3",{class:"subttl"},"Crea una cuenta para comenzar")])],-1),gR=O("button",{type:"submit",class:"btn-blue"},"Crear mi cuenta",-1),mR={class:"mt-4 grid"},yR=O("h3",{class:"subttl"},"\xBFYa tienes una cuenta?",-1),vR={class:"place-self-center"},_R={key:1},wR=O("h1",{class:"ttl-1"},"Ay\xFAdanos a ayudarte",-1),ER=O("h3",{class:"subttl"},"Queremos conocerte mejor",-1),bR=O("button",{type:"submit",class:"btn-blue"},"Continuar",-1),TR={key:2},IR=O("h1",{class:"ttl-1"},"\xBFA qui\xE9n quieres llegar?",-1),SR=O("h3",{class:"subttl"}," A este contacto enviaremos tu informaci\xF3n en caso de que te pase algo ",-1),CR=O("button",{type:"submit",class:"btn-blue"},"Actualizar informaci\xF3n",-1),AR={key:3},kR=O("h1",{class:"ttl-1"},"Sube una foto de perfil",-1),RR=O("h3",{class:"subttl"},"Intenta que se vea claramente tu rostro",-1),NR={class:"grid mt-8"},OR={class:"place-self-center grid"},PR={src:"https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/perfiles%2Fperfil.png?alt=media",alt:"perfil",ref:"perfil",width:"200",class:"perfil"},DR=O("label",{type:"input",for:"perfil",class:"btn-gray text-center"}," Subir imagen ",-1),xR={type:"submit",class:"btn-blue hidden",ref:"subir"},LR={type:"button",class:"btn-gray",ref:"omitir"},MR={key:4},UR=O("h1",{class:"ttl-1"},"Listo",-1),FR=O("h3",{class:"subttl"},"Configuramos tu cuenta exitosamente",-1),BR={key:5},VR=O("h1",{class:"ttl-1"},"Bienvenido",-1),$R=O("h3",{class:"subttl"},"Nos alegra verte otra vez",-1),jR=O("button",{type:"submit",id:"entrar",class:"btn-blue"}," Entrar a mi cuenta ",-1),HR={class:"mt-4 grid"},qR=O("h3",{class:"subttl"},"\xBFA\xFAn no tienes cuenta?",-1),KR={class:"place-self-center"};function zR(t,e,n,s,r,i){return St(),Lt(ht,null,[r.iniciar_sesi\u00F3n==!1&&r.paso==0?(St(),Lt("div",dR,[pR,O("form",{id:"crearCuenta",onSubmit:e[2]||(e[2]=ur(o=>r.paso=1,["prevent"])),class:"mt-8"},[Tt(O("input",{class:"inp",type:"email","onUpdate:modelValue":e[0]||(e[0]=o=>r.correo_cc=o),placeholder:"Tu correo electr\xF3nico"},null,512),[[It,r.correo_cc]]),Tt(O("input",{class:"inp mt-4",type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>r.contrase\u00F1a_cc=o),placeholder:"Una buena contrase\xF1a"},null,512),[[It,r.contrase\u00F1a_cc]]),gR],32),O("div",mR,[yR,O("div",vR,[O("button",{onClick:e[3]||(e[3]=o=>r.iniciar_sesi\u00F3n=!0),id:"botonInicio",class:"font-semibold underline"}," Inicia sesi\xF3n ")])])])):On("",!0),r.paso==1?(St(),Lt("div",_R,[wR,ER,O("form",{id:"informaci\xF3nPersonal",onSubmit:e[8]||(e[8]=ur(o=>r.paso=2,["prevent"])),class:"mt-8"},[Tt(O("input",{type:"text",placeholder:"Tu nombre(s)","onUpdate:modelValue":e[4]||(e[4]=o=>r.nombre_cc=o),class:"inp"},null,512),[[It,r.nombre_cc]]),Tt(O("input",{type:"text",placeholder:"Tu apellido(s)","onUpdate:modelValue":e[5]||(e[5]=o=>r.apellidos_cc=o),class:"inp mt-4"},null,512),[[It,r.apellidos_cc]]),Tt(O("input",{type:"number",placeholder:"Tu n\xFAmero de tel\xE9fono, a 10 d\xEDgitos","onUpdate:modelValue":e[6]||(e[6]=o=>r.numero_cc=o),class:"inp mt-4"},null,512),[[It,r.numero_cc]]),Tt(O("input",{type:"text",placeholder:"Ciudad donde vives","onUpdate:modelValue":e[7]||(e[7]=o=>r.ciudad_cc=o),class:"inp mt-4"},null,512),[[It,r.ciudad_cc]]),bR],32)])):On("",!0),r.paso==2?(St(),Lt("div",TR,[IR,SR,O("form",{onSubmit:e[12]||(e[12]=ur(o=>(r.paso=3,i.crearCuenta()),["prevent"])),class:"mt-8"},[Tt(O("input",{type:"cel",placeholder:"N\xFAmero telef\xF3nico de 10 d\xEDgitos","onUpdate:modelValue":e[9]||(e[9]=o=>r.numero_contacto=o),class:"inp",required:""},null,512),[[It,r.numero_contacto]]),Tt(O("input",{type:"email",placeholder:"Correo electr\xF3nico","onUpdate:modelValue":e[10]||(e[10]=o=>r.correo_contacto=o),class:"inp mt-4",required:""},null,512),[[It,r.correo_contacto]]),Tt(O("input",{type:"text",placeholder:"Nombre de la persona (opcional)",class:"inp mt-4","onUpdate:modelValue":e[11]||(e[11]=o=>r.nombre_contacto=o)},null,512),[[It,r.nombre_contacto]]),CR],32)])):On("",!0),r.paso==3?(St(),Lt("div",AR,[kR,RR,O("form",{onSubmit:e[14]||(e[14]=ur(()=>{},["prevent"])),ref:"subirperfil"},[O("div",NR,[O("div",OR,[O("img",PR,null,512),DR,O("input",{id:"perfil",type:"file",accept:".jpg, .jpeg, .png",onChange:e[13]||(e[13]=o=>i.subirPerfil(o)),class:"hidden",required:""},null,32)]),O("button",xR," Actualizar mi perfil ",512),O("button",LR,"Omitir",512)])],544)])):On("",!0),r.paso==4?(St(),Lt("div",MR,[UR,FR,O("button",{class:"btn-gray",onClick:e[15]||(e[15]=o=>i.obtenerUsuario())},"Ir a inicio")])):On("",!0),r.iniciar_sesi\u00F3n==!0?(St(),Lt("div",BR,[VR,$R,O("form",{onSubmit:e[18]||(e[18]=ur(o=>i.iniciarSesi\u00F3n(),["prevent"])),class:"mt-8"},[Tt(O("input",{class:"inp",type:"email",placeholder:"Tu correo electr\xF3nico","onUpdate:modelValue":e[16]||(e[16]=o=>r.correo_is=o)},null,512),[[It,r.correo_is]]),Tt(O("input",{class:"inp mt-4",type:"password",placeholder:"Tu contrase\xF1a","onUpdate:modelValue":e[17]||(e[17]=o=>r.contrase\u00F1a_is=o)},null,512),[[It,r.contrase\u00F1a_is]]),jR],32),O("div",HR,[qR,O("div",KR,[O("button",{class:"font-semibold underline",onClick:e[19]||(e[19]=o=>r.iniciar_sesi\u00F3n=!1),id:"botonCrearCuenta"}," Crea una ")])])])):On("",!0)],64)}var Yf=ku(fR,[["render",zR]]);const WR=[{path:"/",name:"home",component:hR},{path:"/viajar",name:"viajar",component:()=>Si(()=>import("./crear_viaje.c02573ea.js"),["assets/crear_viaje.c02573ea.js","assets/crear_viaje.9c8b5470.css"])},{path:"/login",name:"login",component:Yf},{path:"/rastrear",name:"rastrear",component:()=>Si(()=>import("./rastrear.6a8c7f8f.js"),[])},{path:"/cuenta",name:"cuenta",component:()=>Si(()=>import("./cuenta.e02e9eba.js"),[])},{path:"/404",name:"404",component:()=>Si(()=>import("./404.39e09b70.js"),[])},{path:"/if-lost/",component:Yf}],GR=pE({history:Nw(),routes:WR});/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var XR="store";function cr(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function YR(t){return t!==null&&typeof t=="object"}function QR(t){return t&&typeof t.then=="function"}function JR(t,e){return function(){return t(e)}}function fy(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function dy(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;pa(t,n,[],t._modules.root,!0),Ru(t,n,e)}function Ru(t,e,n){var s=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,i={};cr(r,function(o,a){i[a]=JR(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=Ys({data:e}),t.strict&&s1(t),s&&n&&t._withCommit(function(){s.data=null})}function pa(t,e,n,s,r){var i=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!i&&!r){var a=Nu(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=s.state})}var l=s.context=ZR(t,o,n);s.forEachMutation(function(u,h){var f=o+h;e1(t,f,u,l)}),s.forEachAction(function(u,h){var f=u.root?h:o+h,g=u.handler||u;t1(t,f,g,l)}),s.forEachGetter(function(u,h){var f=o+h;n1(t,f,u,l)}),s.forEachChild(function(u,h){pa(t,e,n.concat(h),u,r)})}function ZR(t,e,n){var s=e==="",r={dispatch:s?t.dispatch:function(i,o,a){var c=bo(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:s?t.commit:function(i,o,a){var c=bo(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(r,{getters:{get:s?function(){return t.getters}:function(){return py(t,e)}},state:{get:function(){return Nu(t.state,n)}}}),r}function py(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,s)===e){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function e1(t,e,n,s){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,s.state,o)})}function t1(t,e,n,s){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return QR(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function n1(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(s.state,s.getters,i.state,i.getters)})}function s1(t){ks(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Nu(t,e){return e.reduce(function(n,s){return n[s]},t)}function bo(t,e,n){return YR(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var r1="vuex bindings",Qf="vuex:mutations",za="vuex:actions",ys="vuex",i1=0;function o1(t,e){uw({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[r1]},function(n){n.addTimelineLayer({id:Qf,label:"Vuex Mutations",color:Jf}),n.addTimelineLayer({id:za,label:"Vuex Actions",color:Jf}),n.addInspector({id:ys,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===ys)if(s.filter){var r=[];vy(r,e._modules.root,s.filter,""),s.rootNodes=r}else s.rootNodes=[yy(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===ys){var r=s.nodeId;py(e,r),s.state=l1(h1(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===ys){var r=s.nodeId,i=s.path;r!=="root"&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit(function(){s.set(e._state.data,i,s.state.value)})}}),e.subscribe(function(s,r){var i={};s.payload&&(i.payload=s.payload),i.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(ys),n.sendInspectorState(ys),n.addTimelineEvent({layerId:Qf,event:{time:Date.now(),title:s.type,data:i}})}),e.subscribeAction({before:function(s,r){var i={};s.payload&&(i.payload=s.payload),s._id=i1++,s._time=Date.now(),i.state=r,n.addTimelineEvent({layerId:za,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:i}})},after:function(s,r){var i={},o=Date.now()-s._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(i.payload=s.payload),i.state=r,n.addTimelineEvent({layerId:za,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:i}})}})})}var Jf=8702998,a1=6710886,c1=16777215,gy={label:"namespaced",textColor:c1,backgroundColor:a1};function my(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function yy(t,e){return{id:e||"root",label:my(e),tags:t.namespaced?[gy]:[],children:Object.keys(t._children).map(function(n){return yy(t._children[n],e+n+"/")})}}function vy(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[gy]:[]}),Object.keys(e._children).forEach(function(r){vy(t,e._children[r],n,s+r+"/")})}function l1(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var i=u1(e);r.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?my(o):o,editable:!1,value:Gc(function(){return i[o]})}})}return r}function u1(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var r=e,i=s.pop();s.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[i]=Gc(function(){return t[n]})}else e[n]=Gc(function(){return t[n]})}),e}function h1(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,r,i){var o=s[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Gc(t){try{return t()}catch(e){return e}}var Nt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},_y={namespaced:{configurable:!0}};_y.namespaced.get=function(){return!!this._rawModule.namespaced};Nt.prototype.addChild=function(e,n){this._children[e]=n};Nt.prototype.removeChild=function(e){delete this._children[e]};Nt.prototype.getChild=function(e){return this._children[e]};Nt.prototype.hasChild=function(e){return e in this._children};Nt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Nt.prototype.forEachChild=function(e){cr(this._children,e)};Nt.prototype.forEachGetter=function(e){this._rawModule.getters&&cr(this._rawModule.getters,e)};Nt.prototype.forEachAction=function(e){this._rawModule.actions&&cr(this._rawModule.actions,e)};Nt.prototype.forEachMutation=function(e){this._rawModule.mutations&&cr(this._rawModule.mutations,e)};Object.defineProperties(Nt.prototype,_y);var ls=function(e){this.register([],e,!1)};ls.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};ls.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,r){return n=n.getChild(r),s+(n.namespaced?r+"/":"")},"")};ls.prototype.update=function(e){wy([],this.root,e)};ls.prototype.register=function(e,n,s){var r=this;s===void 0&&(s=!0);var i=new Nt(n,s);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&cr(n.modules,function(a,c){r.register(e.concat(c),a,s)})};ls.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],r=n.getChild(s);!r||!r.runtime||n.removeChild(s)};ls.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function wy(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;wy(t.concat(s),e.getChild(s),n.modules[s])}}function f1(t){return new ct(t)}var ct=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var r=e.strict;r===void 0&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new ls(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(f,g){return c.call(o,f,g)},this.commit=function(f,g,m){return l.call(o,f,g,m)},this.strict=r;var u=this._modules.root.state;pa(this,u,[],this._modules.root),Ru(this,u),s.forEach(function(h){return h(n)})},Ou={state:{configurable:!0}};ct.prototype.install=function(e,n){e.provide(n||XR,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&o1(e,this)};Ou.state.get=function(){return this._state.data};Ou.state.set=function(t){};ct.prototype.commit=function(e,n,s){var r=this,i=bo(e,n,s),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];!l||(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,r.state)}))};ct.prototype.dispatch=function(e,n){var s=this,r=bo(e,n),i=r.type,o=r.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(f){try{s._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,s.state)})}catch{}u(f)},function(f){try{s._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,s.state,f)})}catch{}h(f)})})}};ct.prototype.subscribe=function(e,n){return fy(e,this._subscribers,n)};ct.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return fy(s,this._actionSubscribers,n)};ct.prototype.watch=function(e,n,s){var r=this;return ks(function(){return e(r.state,r.getters)},n,Object.assign({},s))};ct.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};ct.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),pa(this,this.state,e,this._modules.get(e),s.preserveState),Ru(this,this.state)};ct.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=Nu(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),dy(this)};ct.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};ct.prototype.hotUpdate=function(e){this._modules.update(e),dy(this,!0)};ct.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(ct.prototype,Ou);const Ey=f1({state:{usuario:{id:"",nombre:"",ciudad:"",correo:"",tel:"",perfil:"",descripcion:"",contacto:{nombre:"",correo:"",tel:""},viaje:{destino:"",infodestino:"",salida:"",llegada:"",alerta:10,img:"",infoimg:"",nota:"",mapa:""}}},mutations:{obtenerUsuario(t){Os(Kt,async e=>{if(e){t.usuario.id=e.uid,t.usuario.nombre=e.displayName,t.usuario.correo=e.email;const n=qn(zn,"infoUsuarios",e.uid),s=await Kc(n);if(s.exists()){let o=s.data();t.usuario.ciudad=o.ciudad,t.usuario.descripcion=o.descripcion,t.usuario.tel=o.numero,t.usuario.contacto.correo=o.correo_contacto,t.usuario.contacto.nombre=o.nombre_contacto,t.usuario.contacto.tel=o.numero_contacto,t.usuario.contacto.perfil=o.perfil}const r=qn(zn,"viajes",e.uid),i=await Kc(r);if(i.exists()){let o=i.data();t.usuario.viaje.destino=o.destino,t.usuario.viaje.infodestino=o.infoextra_destino,t.usuario.viaje.salida=o.hora_salida,t.usuario.viaje.llegada=o.hora_llegada,t.usuario.viaje.alerta=o.fecha_alerta,t.usuario.viaje.img=o.img,t.usuario.viaje.infoimg=o.infoimg,t.usuario.viaje.nota=o.infoextra,t.usuario.viaje.mapa=o.mapa}}})}},actions:{},getters:{}});Ey.commit("obtenerUsuario");const d1={data(){return{datos:[],tempo:!1,uid:""}},computed:{usuario(){return this.$store.state.usuario}},methods:{temporizador(t){let e=this;var n=new Date(t).getTime();this.$refs.tempodiv.classList.remove("hidden");var s=setInterval(function(){var r=new Date().getTime(),i=n-r,o=Math.floor(i%(1e3*60*60*24)/(1e3*60*60)),a=Math.floor(i%(1e3*60*60)/(1e3*60)),c=Math.floor(i%(1e3*60)/1e3);o>1?document.getElementById("temporizador").innerHTML="Tu alerta se enviar\xE1 en<br/>"+o+" horas "+a+" minutos ":(a<10&&e.$refs.tempodiv.classList.add("bg-red-400"),document.getElementById("temporizador").innerHTML="Tu alerta se enviar\xE1 en<br/>"+a+" minutos "+c+" segundos "),i<0&&(clearInterval(s),document.getElementById("temporizador").innerHTML="Nos est\xE1mos poniendo en contancto con tu contacto de confianza",e.enviarCorreo())},1e3)},async enviarCorreo(){let t=[],e=this.usuario.nombre.split(" ");t={nombre:e[0],apellido:e[1],destino:this.destino,hora_alerta:this.datos.hora_llegada,clave:this.uid,email:this.datos.correo_contacto},emailjs.send("default_service","alerta_iflost",t).then(async()=>{document.getElementById("temporizador").innerHTML="Listo, enviamos un correo a tu contacto de confianza";const n=qn(zn,"viajes",clave);await zc(n,{fecha_alerta:0})},n=>{})},obtenerTemporizador(){Os(Kt,async t=>{if(t){this.uid=t.uid,this.$refs.accesos.classList.remove("hidden");const e=qn(zn,"viajes",t.uid),n=await Kc(e);n.exists()&&(this.datos=n.data(),this.datos.fecha_alerta>1&&(this.temporizador(this.datos.fecha_alerta),this.tempo=!0,this.$refs.views.classList.add("mb-12")))}else this.$refs.accesos.classList.add("hidden"),this.$refs.tempodiv.classList.add("hidden")})},async cancelarAlerta(){const t=qn(zn,"viajes",this.usuario.id);await zc(t,{fecha_alerta:0}),this.$refs.tempodiv.classList.add("hidden")}},mounted(){this.obtenerTemporizador(),emailjs.init("NDQJF30o6mjc6lt_F")},watch:{$route:function(t,e){this.obtenerTemporizador()}}},p1={class:"p-5",ref:"views"},g1={class:"grid"},m1={ref:"tempodiv",class:"alerta hidden"},y1={class:"justify-self-end place-content-center"},v1={id:"temporizador",ref:"temporizador",class:"text-white animate-pulse pl-2 text-sm font-medium"},_1={class:"grid grid-cols-1 mt-24"},w1={class:"menu-hidden",ref:"menu"},E1={class:"grid grid-rows-2"},b1=O("i",{class:"fa-solid fa-angle-up justify-self-center"},null,-1),T1={class:"grid grid-cols-2"},I1=O("div",{class:"grid"},[O("img",{src:"https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/logo.png?alt=media",alt:"logo",class:"max-h-12 p-3 self-center"})],-1),S1={class:"flex mb-2 justify-self-end",ref:"accesos"},C1=O("i",{class:"fa-solid fa-house justify-self-center self-center"},null,-1),A1=O("i",{class:"fa-solid fa-newspaper justify-self-center self-center"},null,-1),k1=O("i",{class:"fa-solid fa-user justify-self-center self-center"},null,-1);function R1(t,e,n,s,r,i){const o=th("router-view"),a=th("router-link");return St(),Lt(ht,null,[O("div",p1,[Ve(o)],512),O("div",g1,[O("div",m1,[O("div",y1,[O("p",v1,null,512)]),r.tempo==!0?(St(),Lt("button",{key:0,class:"btn-red rounded-full mr-5 ml-5 mt-0 w-[33%] text-sm",onClick:e[0]||(e[0]=c=>i.cancelarAlerta())}," Cancelar alerta ")):On("",!0)],512)]),O("div",_1,[O("div",w1,[O("div",E1,[b1,O("div",T1,[I1,O("div",S1,[Ve(a,{class:"btn-menu",to:"/"},{default:Mi(()=>[C1]),_:1}),Ve(a,{class:"btn-menu",to:"/404"},{default:Mi(()=>[A1]),_:1}),Ve(a,{class:"btn-menu",to:"/cuenta"},{default:Mi(()=>[k1]),_:1})],512)])])],512)])],64)}var N1=ku(d1,[["render",R1]]);Z_(N1).use(Ey).use(GR).mount("#app");export{ht as F,qn as I,ku as _,Kt as a,zA as b,St as c,zn as d,Kc as e,Lt as f,O as g,ur as h,On as i,p_ as j,x1 as k,L1 as l,zc as m,Os as o,D1 as p,tR as r,oR as s,P1 as t,eR as u,It as v,Tt as w};
