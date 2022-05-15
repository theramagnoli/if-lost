var ey=Object.defineProperty,ty=Object.defineProperties;var ny=Object.getOwnPropertyDescriptors;var Cu=Object.getOwnPropertySymbols;var sy=Object.prototype.hasOwnProperty,ry=Object.prototype.propertyIsEnumerable;var Au=(t,e,n)=>e in t?ey(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ku=(t,e)=>{for(var n in e||(e={}))sy.call(e,n)&&Au(t,n,e[n]);if(Cu)for(var n of Cu(e))ry.call(e,n)&&Au(t,n,e[n]);return t},Ru=(t,e)=>ty(t,ny(e));const iy=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};iy();function $c(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const oy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ay=$c(oy);function Vd(t){return!!t||t===""}function jc(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ze(s)?uy(s):jc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ze(t))return t;if(Fe(t))return t}}const cy=/;(?![^(]*\))/g,ly=/:(.+)/;function uy(t){const e={};return t.split(cy).forEach(n=>{if(n){const s=n.split(ly);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Hc(t){let e="";if(Ze(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const s=Hc(t[n]);s&&(e+=s+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Oe=t=>Ze(t)?t:t==null?"":X(t)||Fe(t)&&(t.toString===qd||!J(t.toString))?JSON.stringify(t,$d,2):String(t),$d=(t,e)=>e&&e.__v_isRef?$d(t,e.value):As(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:jd(e)?{[`Set(${e.size})`]:[...e.values()]}:Fe(e)&&!X(e)&&!Kd(e)?String(e):e,ye={},Cs=[],Ot=()=>{},hy=()=>!1,dy=/^on[^a-z]/,wo=t=>dy.test(t),qc=t=>t.startsWith("onUpdate:"),ct=Object.assign,Kc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fy=Object.prototype.hasOwnProperty,ie=(t,e)=>fy.call(t,e),X=Array.isArray,As=t=>bo(t)==="[object Map]",jd=t=>bo(t)==="[object Set]",J=t=>typeof t=="function",Ze=t=>typeof t=="string",zc=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",Hd=t=>Fe(t)&&J(t.then)&&J(t.catch),qd=Object.prototype.toString,bo=t=>qd.call(t),py=t=>bo(t).slice(8,-1),Kd=t=>bo(t)==="[object Object]",Wc=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ni=$c(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Eo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gy=/-(\w)/g,Xt=Eo(t=>t.replace(gy,(e,n)=>n?n.toUpperCase():"")),my=/\B([A-Z])/g,zs=Eo(t=>t.replace(my,"-$1").toLowerCase()),To=Eo(t=>t.charAt(0).toUpperCase()+t.slice(1)),fa=Eo(t=>t?`on${To(t)}`:""),Ar=(t,e)=>!Object.is(t,e),xi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Hi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ha=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Nu;const yy=()=>Nu||(Nu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Vt;class vy{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Vt&&(this.parent=Vt,this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Vt;try{return Vt=this,e()}finally{Vt=n}}}on(){Vt=this}off(){Vt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function _y(t,e=Vt){e&&e.active&&e.effects.push(t)}const Gc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},zd=t=>(t.w&Cn)>0,Wd=t=>(t.n&Cn)>0,wy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Cn},by=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];zd(r)&&!Wd(r)?r.delete(t):e[n++]=r,r.w&=~Cn,r.n&=~Cn}e.length=n}},qa=new WeakMap;let ur=0,Cn=1;const Ka=30;let Dt;const Hn=Symbol(""),za=Symbol("");class Xc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,_y(this,s)}run(){if(!this.active)return this.fn();let e=Dt,n=bn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Dt,Dt=this,bn=!0,Cn=1<<++ur,ur<=Ka?wy(this):xu(this),this.fn()}finally{ur<=Ka&&by(this),Cn=1<<--ur,Dt=this.parent,bn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(xu(this),this.onStop&&this.onStop(),this.active=!1)}}function xu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let bn=!0;const Gd=[];function Ws(){Gd.push(bn),bn=!1}function Gs(){const t=Gd.pop();bn=t===void 0?!0:t}function St(t,e,n){if(bn&&Dt){let s=qa.get(t);s||qa.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Gc()),Xd(r)}}function Xd(t,e){let n=!1;ur<=Ka?Wd(t)||(t.n|=Cn,n=!zd(t)):n=!t.has(Dt),n&&(t.add(Dt),Dt.deps.push(t))}function sn(t,e,n,s,r,i){const o=qa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&X(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":X(t)?Wc(n)&&a.push(o.get("length")):(a.push(o.get(Hn)),As(t)&&a.push(o.get(za)));break;case"delete":X(t)||(a.push(o.get(Hn)),As(t)&&a.push(o.get(za)));break;case"set":As(t)&&a.push(o.get(Hn));break}if(a.length===1)a[0]&&Wa(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Wa(Gc(c))}}function Wa(t,e){for(const n of X(t)?t:[...t])(n!==Dt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ey=$c("__proto__,__v_isRef,__isVue"),Yd=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(zc)),Ty=Yc(),Iy=Yc(!1,!0),Sy=Yc(!0),Du=Cy();function Cy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let i=0,o=this.length;i<o;i++)St(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ue)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ws();const s=ue(this)[e].apply(this,n);return Gs(),s}}),t}function Yc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?jy:tf:e?ef:Zd).get(s))return s;const o=X(s);if(!t&&o&&ie(Du,r))return Reflect.get(Du,r,i);const a=Reflect.get(s,r,i);return(zc(r)?Yd.has(r):Ey(r))||(t||St(s,"get",r),e)?a:Ge(a)?!o||!Wc(r)?a.value:a:Fe(a)?t?nf(a):Xr(a):a}}const Ay=Qd(),ky=Qd(!0);function Qd(t=!1){return function(n,s,r,i){let o=n[s];if(kr(o)&&Ge(o)&&!Ge(r))return!1;if(!t&&!kr(r)&&(sf(r)||(r=ue(r),o=ue(o)),!X(n)&&Ge(o)&&!Ge(r)))return o.value=r,!0;const a=X(n)&&Wc(s)?Number(s)<n.length:ie(n,s),c=Reflect.set(n,s,r,i);return n===ue(i)&&(a?Ar(r,o)&&sn(n,"set",s,r):sn(n,"add",s,r)),c}}function Ry(t,e){const n=ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&sn(t,"delete",e,void 0),s}function Ny(t,e){const n=Reflect.has(t,e);return(!zc(e)||!Yd.has(e))&&St(t,"has",e),n}function xy(t){return St(t,"iterate",X(t)?"length":Hn),Reflect.ownKeys(t)}const Jd={get:Ty,set:Ay,deleteProperty:Ry,has:Ny,ownKeys:xy},Dy={get:Sy,set(t,e){return!0},deleteProperty(t,e){return!0}},Py=ct({},Jd,{get:Iy,set:ky}),Qc=t=>t,Io=t=>Reflect.getPrototypeOf(t);function yi(t,e,n=!1,s=!1){t=t.__v_raw;const r=ue(t),i=ue(e);e!==i&&!n&&St(r,"get",e),!n&&St(r,"get",i);const{has:o}=Io(r),a=s?Qc:n?el:Rr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function vi(t,e=!1){const n=this.__v_raw,s=ue(n),r=ue(t);return t!==r&&!e&&St(s,"has",t),!e&&St(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function _i(t,e=!1){return t=t.__v_raw,!e&&St(ue(t),"iterate",Hn),Reflect.get(t,"size",t)}function Pu(t){t=ue(t);const e=ue(this);return Io(e).has.call(e,t)||(e.add(t),sn(e,"add",t,t)),this}function Ou(t,e){e=ue(e);const n=ue(this),{has:s,get:r}=Io(n);let i=s.call(n,t);i||(t=ue(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Ar(e,o)&&sn(n,"set",t,e):sn(n,"add",t,e),this}function Mu(t){const e=ue(this),{has:n,get:s}=Io(e);let r=n.call(e,t);r||(t=ue(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&sn(e,"delete",t,void 0),i}function Lu(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&sn(t,"clear",void 0,void 0),n}function wi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ue(o),c=e?Qc:t?el:Rr;return!t&&St(a,"iterate",Hn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function bi(t,e,n){return function(...s){const r=this.__v_raw,i=ue(r),o=As(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Qc:e?el:Rr;return!e&&St(i,"iterate",c?za:Hn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ln(t){return function(...e){return t==="delete"?!1:this}}function Oy(){const t={get(i){return yi(this,i)},get size(){return _i(this)},has:vi,add:Pu,set:Ou,delete:Mu,clear:Lu,forEach:wi(!1,!1)},e={get(i){return yi(this,i,!1,!0)},get size(){return _i(this)},has:vi,add:Pu,set:Ou,delete:Mu,clear:Lu,forEach:wi(!1,!0)},n={get(i){return yi(this,i,!0)},get size(){return _i(this,!0)},has(i){return vi.call(this,i,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:wi(!0,!1)},s={get(i){return yi(this,i,!0,!0)},get size(){return _i(this,!0)},has(i){return vi.call(this,i,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:wi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=bi(i,!1,!1),n[i]=bi(i,!0,!1),e[i]=bi(i,!1,!0),s[i]=bi(i,!0,!0)}),[t,n,e,s]}const[My,Ly,Uy,Fy]=Oy();function Jc(t,e){const n=e?t?Fy:Uy:t?Ly:My;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ie(n,r)&&r in s?n:s,r,i)}const By={get:Jc(!1,!1)},Vy={get:Jc(!1,!0)},$y={get:Jc(!0,!1)},Zd=new WeakMap,ef=new WeakMap,tf=new WeakMap,jy=new WeakMap;function Hy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qy(t){return t.__v_skip||!Object.isExtensible(t)?0:Hy(py(t))}function Xr(t){return kr(t)?t:Zc(t,!1,Jd,By,Zd)}function Ky(t){return Zc(t,!1,Py,Vy,ef)}function nf(t){return Zc(t,!0,Dy,$y,tf)}function Zc(t,e,n,s,r){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=qy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ks(t){return kr(t)?ks(t.__v_raw):!!(t&&t.__v_isReactive)}function kr(t){return!!(t&&t.__v_isReadonly)}function sf(t){return!!(t&&t.__v_isShallow)}function rf(t){return ks(t)||kr(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function of(t){return Hi(t,"__v_skip",!0),t}const Rr=t=>Fe(t)?Xr(t):t,el=t=>Fe(t)?nf(t):t;function af(t){bn&&Dt&&(t=ue(t),Xd(t.dep||(t.dep=Gc())))}function cf(t,e){t=ue(t),t.dep&&Wa(t.dep)}function Ge(t){return!!(t&&t.__v_isRef===!0)}function zy(t){return lf(t,!1)}function Wy(t){return lf(t,!0)}function lf(t,e){return Ge(t)?t:new Gy(t,e)}class Gy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:Rr(e)}get value(){return af(this),this._value}set value(e){e=this.__v_isShallow?e:ue(e),Ar(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Rr(e),cf(this))}}function gr(t){return Ge(t)?t.value:t}const Xy={get:(t,e,n)=>gr(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ge(r)&&!Ge(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function uf(t){return ks(t)?t:new Proxy(t,Xy)}class Yy{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Xc(e,()=>{this._dirty||(this._dirty=!0,cf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ue(this);return af(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Qy(t,e,n=!1){let s,r;const i=J(t);return i?(s=t,r=Ot):(s=t.get,r=t.set),new Yy(s,r,i||!r,n)}function En(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){So(i,e,n)}return r}function Nt(t,e,n,s){if(J(t)){const i=En(t,e,n,s);return i&&Hd(i)&&i.catch(o=>{So(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Nt(t[i],e,n,s));return r}function So(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){En(c,null,10,[t,o,a]);return}}Jy(t,n,r,s)}function Jy(t,e,n,s=!0){console.error(t)}let qi=!1,Ga=!1;const wt=[];let Jt=0;const mr=[];let hr=null,_s=0;const yr=[];let fn=null,ws=0;const hf=Promise.resolve();let tl=null,Xa=null;function df(t){const e=tl||hf;return t?e.then(this?t.bind(this):t):e}function Zy(t){let e=Jt+1,n=wt.length;for(;e<n;){const s=e+n>>>1;Nr(wt[s])<t?e=s+1:n=s}return e}function ff(t){(!wt.length||!wt.includes(t,qi&&t.allowRecurse?Jt+1:Jt))&&t!==Xa&&(t.id==null?wt.push(t):wt.splice(Zy(t.id),0,t),pf())}function pf(){!qi&&!Ga&&(Ga=!0,tl=hf.then(yf))}function ev(t){const e=wt.indexOf(t);e>Jt&&wt.splice(e,1)}function gf(t,e,n,s){X(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),pf()}function tv(t){gf(t,hr,mr,_s)}function nv(t){gf(t,fn,yr,ws)}function nl(t,e=null){if(mr.length){for(Xa=e,hr=[...new Set(mr)],mr.length=0,_s=0;_s<hr.length;_s++)hr[_s]();hr=null,_s=0,Xa=null,nl(t,e)}}function mf(t){if(yr.length){const e=[...new Set(yr)];if(yr.length=0,fn){fn.push(...e);return}for(fn=e,fn.sort((n,s)=>Nr(n)-Nr(s)),ws=0;ws<fn.length;ws++)fn[ws]();fn=null,ws=0}}const Nr=t=>t.id==null?1/0:t.id;function yf(t){Ga=!1,qi=!0,nl(t),wt.sort((n,s)=>Nr(n)-Nr(s));const e=Ot;try{for(Jt=0;Jt<wt.length;Jt++){const n=wt[Jt];n&&n.active!==!1&&En(n,null,14)}}finally{Jt=0,wt.length=0,mf(),qi=!1,tl=null,(wt.length||mr.length||yr.length)&&yf(t)}}function sv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ye;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ye;d?r=n.map(m=>m.trim()):h&&(r=n.map(Ha))}let a,c=s[a=fa(e)]||s[a=fa(Xt(e))];!c&&i&&(c=s[a=fa(zs(e))]),c&&Nt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Nt(l,t,6,r)}}function vf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!J(t)){const c=l=>{const u=vf(l,e,!0);u&&(a=!0,ct(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(X(i)?i.forEach(c=>o[c]=null):ct(o,i),s.set(t,o),o)}function Co(t,e){return!t||!wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,zs(e))||ie(t,e))}let Rt=null,Ao=null;function Ki(t){const e=Rt;return Rt=t,Ao=t&&t.type.__scopeId||null,e}function rv(t){Ao=t}function iv(){Ao=null}function Di(t,e=Rt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Gu(-1);const i=Ki(e),o=t(...r);return Ki(i),s._d&&Gu(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function pa(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:m,ctx:y,inheritAttrs:T}=t;let _,C;const D=Ki(t);try{if(n.shapeFlag&4){const L=r||s;_=$t(u.call(L,L,h,i,m,d,y)),C=c}else{const L=e;_=$t(L.length>1?L(i,{attrs:c,slots:a,emit:l}):L(i,null)),C=e.props?c:ov(c)}}catch(L){vr.length=0,So(L,t,1),_=Xe(Mt)}let F=_;if(C&&T!==!1){const L=Object.keys(C),{shapeFlag:ce}=F;L.length&&ce&7&&(o&&L.some(qc)&&(C=av(C,o)),F=Yn(F,C))}return n.dirs&&(F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),_=F,Ki(D),_}const ov=t=>{let e;for(const n in t)(n==="class"||n==="style"||wo(n))&&((e||(e={}))[n]=t[n]);return e},av=(t,e)=>{const n={};for(const s in t)(!qc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function cv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Uu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Co(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Uu(s,o,l):!0:!!o;return!1}function Uu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Co(n,i))return!0}return!1}function lv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const uv=t=>t.__isSuspense;function hv(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):nv(t)}function Pi(t,e){if(Ue){let n=Ue.provides;const s=Ue.parent&&Ue.parent.provides;s===n&&(n=Ue.provides=Object.create(s)),n[t]=e}}function Tn(t,e,n=!1){const s=Ue||Rt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&J(e)?e.call(s.proxy):e}}const Fu={};function Oi(t,e,n){return _f(t,e,n)}function _f(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ye){const a=Ue;let c,l=!1,u=!1;if(Ge(t)?(c=()=>t.value,l=sf(t)):ks(t)?(c=()=>t,s=!0):X(t)?(u=!0,l=t.some(ks),c=()=>t.map(C=>{if(Ge(C))return C.value;if(ks(C))return Vn(C);if(J(C))return En(C,a,2)})):J(t)?e?c=()=>En(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Nt(t,a,3,[d])}:c=Ot,e&&s){const C=c;c=()=>Vn(C())}let h,d=C=>{h=_.onStop=()=>{En(C,a,4)}};if(xr)return d=Ot,e?n&&Nt(e,a,3,[c(),u?[]:void 0,d]):c(),Ot;let m=u?[]:Fu;const y=()=>{if(!!_.active)if(e){const C=_.run();(s||l||(u?C.some((D,F)=>Ar(D,m[F])):Ar(C,m)))&&(h&&h(),Nt(e,a,3,[C,m===Fu?void 0:m,d]),m=C)}else _.run()};y.allowRecurse=!!e;let T;r==="sync"?T=y:r==="post"?T=()=>pt(y,a&&a.suspense):T=()=>{!a||a.isMounted?tv(y):y()};const _=new Xc(c,T);return e?n?y():m=_.run():r==="post"?pt(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&Kc(a.scope.effects,_)}}function dv(t,e,n){const s=this.proxy,r=Ze(t)?t.includes(".")?wf(s,t):()=>s[t]:t.bind(s,s);let i;J(e)?i=e:(i=e.handler,n=e);const o=Ue;Ps(this);const a=_f(r,i.bind(s),n);return o?Ps(o):Kn(),a}function wf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Vn(t,e){if(!Fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ge(t))Vn(t.value,e);else if(X(t))for(let n=0;n<t.length;n++)Vn(t[n],e);else if(jd(t)||As(t))t.forEach(n=>{Vn(n,e)});else if(Kd(t))for(const n in t)Vn(t[n],e);return t}function fv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Sf(()=>{t.isMounted=!0}),Cf(()=>{t.isUnmounting=!0}),t}const kt=[Function,Array],pv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kt,onEnter:kt,onAfterEnter:kt,onEnterCancelled:kt,onBeforeLeave:kt,onLeave:kt,onAfterLeave:kt,onLeaveCancelled:kt,onBeforeAppear:kt,onAppear:kt,onAfterAppear:kt,onAppearCancelled:kt},setup(t,{slots:e}){const n=Zv(),s=fv();let r;return()=>{const i=e.default&&Ef(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const T of i)if(T.type!==Mt){o=T;break}}const a=ue(t),{mode:c}=a;if(s.isLeaving)return ga(o);const l=Bu(o);if(!l)return ga(o);const u=Ya(l,a,s,n);Qa(l,u);const h=n.subTree,d=h&&Bu(h);let m=!1;const{getTransitionKey:y}=l.type;if(y){const T=y();r===void 0?r=T:T!==r&&(r=T,m=!0)}if(d&&d.type!==Mt&&(!Fn(l,d)||m)){const T=Ya(d,a,s,n);if(Qa(d,T),c==="out-in")return s.isLeaving=!0,T.afterLeave=()=>{s.isLeaving=!1,n.update()},ga(o);c==="in-out"&&l.type!==Mt&&(T.delayLeave=(_,C,D)=>{const F=bf(s,d);F[String(d.key)]=d,_._leaveCb=()=>{C(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=D})}return o}}},gv=pv;function bf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ya(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:T,onAppear:_,onAfterAppear:C,onAppearCancelled:D}=e,F=String(t.key),L=bf(n,t),ce=(Q,Ee)=>{Q&&Nt(Q,s,9,Ee)},de={mode:i,persisted:o,beforeEnter(Q){let Ee=a;if(!n.isMounted)if(r)Ee=T||a;else return;Q._leaveCb&&Q._leaveCb(!0);const ve=L[F];ve&&Fn(t,ve)&&ve.el._leaveCb&&ve.el._leaveCb(),ce(Ee,[Q])},enter(Q){let Ee=c,ve=l,nt=u;if(!n.isMounted)if(r)Ee=_||c,ve=C||l,nt=D||u;else return;let st=!1;const He=Q._enterCb=cn=>{st||(st=!0,cn?ce(nt,[Q]):ce(ve,[Q]),de.delayedLeave&&de.delayedLeave(),Q._enterCb=void 0)};Ee?(Ee(Q,He),Ee.length<=1&&He()):He()},leave(Q,Ee){const ve=String(t.key);if(Q._enterCb&&Q._enterCb(!0),n.isUnmounting)return Ee();ce(h,[Q]);let nt=!1;const st=Q._leaveCb=He=>{nt||(nt=!0,Ee(),He?ce(y,[Q]):ce(m,[Q]),Q._leaveCb=void 0,L[ve]===t&&delete L[ve])};L[ve]=t,d?(d(Q,st),d.length<=1&&st()):st()},clone(Q){return Ya(Q,e,n,s)}};return de}function ga(t){if(ko(t))return t=Yn(t),t.children=null,t}function Bu(t){return ko(t)?t.children?t.children[0]:void 0:t}function Qa(t,e){t.shapeFlag&6&&t.component?Qa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ef(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ke?(o.patchFlag&128&&r++,s=s.concat(Ef(o.children,e,a))):(e||o.type!==Mt)&&s.push(a!=null?Yn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Tf(t){return J(t)?{setup:t,name:t.name}:t}const Ja=t=>!!t.type.__asyncLoader,ko=t=>t.type.__isKeepAlive;function mv(t,e){If(t,"a",e)}function yv(t,e){If(t,"da",e)}function If(t,e,n=Ue){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ro(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ko(r.parent.vnode)&&vv(s,e,n,r),r=r.parent}}function vv(t,e,n,s){const r=Ro(e,t,s,!0);Af(()=>{Kc(s[e],r)},n)}function Ro(t,e,n=Ue,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ws(),Ps(n);const a=Nt(e,n,t,o);return Kn(),Gs(),a});return s?r.unshift(i):r.push(i),i}}const an=t=>(e,n=Ue)=>(!xr||t==="sp")&&Ro(t,e,n),_v=an("bm"),Sf=an("m"),wv=an("bu"),bv=an("u"),Cf=an("bum"),Af=an("um"),Ev=an("sp"),Tv=an("rtg"),Iv=an("rtc");function Sv(t,e=Ue){Ro("ec",t,e)}let Za=!0;function Cv(t){const e=Rf(t),n=t.proxy,s=t.ctx;Za=!1,e.beforeCreate&&Vu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:y,activated:T,deactivated:_,beforeDestroy:C,beforeUnmount:D,destroyed:F,unmounted:L,render:ce,renderTracked:de,renderTriggered:Q,errorCaptured:Ee,serverPrefetch:ve,expose:nt,inheritAttrs:st,components:He,directives:cn,filters:fs}=e;if(l&&Av(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const _e in o){const fe=o[_e];J(fe)&&(s[_e]=fe.bind(n))}if(r){const _e=r.call(n,n);Fe(_e)&&(t.data=Xr(_e))}if(Za=!0,i)for(const _e in i){const fe=i[_e],vt=J(fe)?fe.bind(n,n):J(fe.get)?fe.get.bind(n,n):Ot,gs=!J(fe)&&J(fe.set)?fe.set.bind(n):Ot,Qt=jt({get:vt,set:gs});Object.defineProperty(s,_e,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:Ut=>Qt.value=Ut})}if(a)for(const _e in a)kf(a[_e],s,n,_e);if(c){const _e=J(c)?c.call(n):c;Reflect.ownKeys(_e).forEach(fe=>{Pi(fe,_e[fe])})}u&&Vu(u,t,"c");function Pe(_e,fe){X(fe)?fe.forEach(vt=>_e(vt.bind(n))):fe&&_e(fe.bind(n))}if(Pe(_v,h),Pe(Sf,d),Pe(wv,m),Pe(bv,y),Pe(mv,T),Pe(yv,_),Pe(Sv,Ee),Pe(Iv,de),Pe(Tv,Q),Pe(Cf,D),Pe(Af,L),Pe(Ev,ve),X(nt))if(nt.length){const _e=t.exposed||(t.exposed={});nt.forEach(fe=>{Object.defineProperty(_e,fe,{get:()=>n[fe],set:vt=>n[fe]=vt})})}else t.exposed||(t.exposed={});ce&&t.render===Ot&&(t.render=ce),st!=null&&(t.inheritAttrs=st),He&&(t.components=He),cn&&(t.directives=cn)}function Av(t,e,n=Ot,s=!1){X(t)&&(t=ec(t));for(const r in t){const i=t[r];let o;Fe(i)?"default"in i?o=Tn(i.from||r,i.default,!0):o=Tn(i.from||r):o=Tn(i),Ge(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Vu(t,e,n){Nt(X(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function kf(t,e,n,s){const r=s.includes(".")?wf(n,s):()=>n[s];if(Ze(t)){const i=e[t];J(i)&&Oi(r,i)}else if(J(t))Oi(r,t.bind(n));else if(Fe(t))if(X(t))t.forEach(i=>kf(i,e,n,s));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)&&Oi(r,i,t)}}function Rf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>zi(c,l,o,!0)),zi(c,e,o)),i.set(e,c),c}function zi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&zi(t,i,n,!0),r&&r.forEach(o=>zi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=kv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const kv={data:$u,props:Ln,emits:Ln,methods:Ln,computed:Ln,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:Ln,directives:Ln,watch:Nv,provide:$u,inject:Rv};function $u(t,e){return e?t?function(){return ct(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function Rv(t,e){return Ln(ec(t),ec(e))}function ec(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ut(t,e){return t?[...new Set([].concat(t,e))]:e}function Ln(t,e){return t?ct(ct(Object.create(null),t),e):e}function Nv(t,e){if(!t)return e;if(!e)return t;const n=ct(Object.create(null),t);for(const s in e)n[s]=ut(t[s],e[s]);return n}function xv(t,e,n,s=!1){const r={},i={};Hi(i,No,1),t.propsDefaults=Object.create(null),Nf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Ky(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Dv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ue(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Co(t.emitsOptions,d))continue;const m=e[d];if(c)if(ie(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const y=Xt(d);r[y]=tc(c,a,y,m,t,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{Nf(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=zs(h))===h||!ie(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=tc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ie(e,h)&&!0)&&(delete i[h],l=!0)}l&&sn(t,"set","$attrs")}function Nf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ni(c))continue;const l=e[c];let u;r&&ie(r,u=Xt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Co(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ue(n),l=a||ye;for(let u=0;u<i.length;u++){const h=i[u];n[h]=tc(r,c,h,l[h],t,!ie(l,h))}}return o}function tc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&J(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Ps(r),s=l[n]=c.call(null,e),Kn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===zs(n))&&(s=!0))}return s}function xf(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!J(t)){const u=h=>{c=!0;const[d,m]=xf(h,e,!0);ct(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,Cs),Cs;if(X(i))for(let u=0;u<i.length;u++){const h=Xt(i[u]);ju(h)&&(o[h]=ye)}else if(i)for(const u in i){const h=Xt(u);if(ju(h)){const d=i[u],m=o[h]=X(d)||J(d)?{type:d}:d;if(m){const y=Ku(Boolean,m.type),T=Ku(String,m.type);m[0]=y>-1,m[1]=T<0||y<T,(y>-1||ie(m,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function ju(t){return t[0]!=="$"}function Hu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function qu(t,e){return Hu(t)===Hu(e)}function Ku(t,e){return X(e)?e.findIndex(n=>qu(n,t)):J(e)&&qu(e,t)?0:-1}const Df=t=>t[0]==="_"||t==="$stable",sl=t=>X(t)?t.map($t):[$t(t)],Pv=(t,e,n)=>{const s=Di((...r)=>sl(e(...r)),n);return s._c=!1,s},Pf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Df(r))continue;const i=t[r];if(J(i))e[r]=Pv(r,i,s);else if(i!=null){const o=sl(i);e[r]=()=>o}}},Of=(t,e)=>{const n=sl(e);t.slots.default=()=>n},Ov=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),Hi(e,"_",n)):Pf(e,t.slots={})}else t.slots={},e&&Of(t,e);Hi(t.slots,No,1)},Mv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ye;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ct(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Pf(e,r)),o=e}else e&&(Of(t,e),o={default:1});if(i)for(const a in r)!Df(a)&&!(a in o)&&delete r[a]};function ke(t,e){const n=Rt;if(n===null)return t;const s=xo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ye]=e[i];J(o)&&(o={mounted:o,updated:o}),o.deep&&Vn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function On(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Ws(),Nt(c,n,8,[t.el,a,t,e]),Gs())}}function Mf(){return{app:null,config:{isNativeTag:hy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lv=0;function Uv(t,e){return function(s,r=null){J(s)||(s=Object.assign({},s)),r!=null&&!Fe(r)&&(r=null);const i=Mf(),o=new Set;let a=!1;const c=i.app={_uid:Lv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:o_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(c,...u)):J(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Xe(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,xo(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function nc(t,e,n,s,r=!1){if(X(t)){t.forEach((d,m)=>nc(d,e&&(X(e)?e[m]:e),n,s,r));return}if(Ja(s)&&!r)return;const i=s.shapeFlag&4?xo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ye?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ze(l)?(u[l]=null,ie(h,l)&&(h[l]=null)):Ge(l)&&(l.value=null)),J(c))En(c,a,12,[o,u]);else{const d=Ze(c),m=Ge(c);if(d||m){const y=()=>{if(t.f){const T=d?u[c]:c.value;r?X(T)&&Kc(T,i):X(T)?T.includes(i)||T.push(i):d?(u[c]=[i],ie(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ie(h,c)&&(h[c]=o)):Ge(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,pt(y,n)):y()}}}const pt=hv;function Fv(t){return Bv(t)}function Bv(t,e){const n=yy();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=Ot,cloneNode:y,insertStaticContent:T}=t,_=(f,g,v,E=null,b=null,R=null,P=!1,A=null,N=!!g.dynamicChildren)=>{if(f===g)return;f&&!Fn(f,g)&&(E=V(f),At(f,b,R,!0),f=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:I,ref:$,shapeFlag:M}=g;switch(I){case rl:C(f,g,v,E);break;case Mt:D(f,g,v,E);break;case ma:f==null&&F(g,v,E,P);break;case Ke:cn(f,g,v,E,b,R,P,A,N);break;default:M&1?de(f,g,v,E,b,R,P,A,N):M&6?fs(f,g,v,E,b,R,P,A,N):(M&64||M&128)&&I.process(f,g,v,E,b,R,P,A,N,we)}$!=null&&b&&nc($,f&&f.ref,R,g||f,!g)},C=(f,g,v,E)=>{if(f==null)s(g.el=a(g.children),v,E);else{const b=g.el=f.el;g.children!==f.children&&l(b,g.children)}},D=(f,g,v,E)=>{f==null?s(g.el=c(g.children||""),v,E):g.el=f.el},F=(f,g,v,E)=>{[f.el,f.anchor]=T(f.children,g,v,E,f.el,f.anchor)},L=({el:f,anchor:g},v,E)=>{let b;for(;f&&f!==g;)b=d(f),s(f,v,E),f=b;s(g,v,E)},ce=({el:f,anchor:g})=>{let v;for(;f&&f!==g;)v=d(f),r(f),f=v;r(g)},de=(f,g,v,E,b,R,P,A,N)=>{P=P||g.type==="svg",f==null?Q(g,v,E,b,R,P,A,N):nt(f,g,b,R,P,A,N)},Q=(f,g,v,E,b,R,P,A)=>{let N,I;const{type:$,props:M,shapeFlag:j,transition:W,patchFlag:oe,dirs:Se}=f;if(f.el&&y!==void 0&&oe===-1)N=f.el=y(f.el);else{if(N=f.el=o(f.type,R,M&&M.is,M),j&8?u(N,f.children):j&16&&ve(f.children,N,null,E,b,R&&$!=="foreignObject",P,A),Se&&On(f,null,E,"created"),M){for(const Te in M)Te!=="value"&&!Ni(Te)&&i(N,Te,null,M[Te],R,f.children,E,b,x);"value"in M&&i(N,"value",null,M.value),(I=M.onVnodeBeforeMount)&&Bt(I,E,f)}Ee(N,f,f.scopeId,P,E)}Se&&On(f,null,E,"beforeMount");const ge=(!b||b&&!b.pendingBranch)&&W&&!W.persisted;ge&&W.beforeEnter(N),s(N,g,v),((I=M&&M.onVnodeMounted)||ge||Se)&&pt(()=>{I&&Bt(I,E,f),ge&&W.enter(N),Se&&On(f,null,E,"mounted")},b)},Ee=(f,g,v,E,b)=>{if(v&&m(f,v),E)for(let R=0;R<E.length;R++)m(f,E[R]);if(b){let R=b.subTree;if(g===R){const P=b.vnode;Ee(f,P,P.scopeId,P.slotScopeIds,b.parent)}}},ve=(f,g,v,E,b,R,P,A,N=0)=>{for(let I=N;I<f.length;I++){const $=f[I]=A?pn(f[I]):$t(f[I]);_(null,$,g,v,E,b,R,P,A)}},nt=(f,g,v,E,b,R,P)=>{const A=g.el=f.el;let{patchFlag:N,dynamicChildren:I,dirs:$}=g;N|=f.patchFlag&16;const M=f.props||ye,j=g.props||ye;let W;v&&Mn(v,!1),(W=j.onVnodeBeforeUpdate)&&Bt(W,v,g,f),$&&On(g,f,v,"beforeUpdate"),v&&Mn(v,!0);const oe=b&&g.type!=="foreignObject";if(I?st(f.dynamicChildren,I,A,v,E,oe,R):P||vt(f,g,A,null,v,E,oe,R,!1),N>0){if(N&16)He(A,g,M,j,v,E,b);else if(N&2&&M.class!==j.class&&i(A,"class",null,j.class,b),N&4&&i(A,"style",M.style,j.style,b),N&8){const Se=g.dynamicProps;for(let ge=0;ge<Se.length;ge++){const Te=Se[ge],xt=M[Te],ms=j[Te];(ms!==xt||Te==="value")&&i(A,Te,xt,ms,b,f.children,v,E,x)}}N&1&&f.children!==g.children&&u(A,g.children)}else!P&&I==null&&He(A,g,M,j,v,E,b);((W=j.onVnodeUpdated)||$)&&pt(()=>{W&&Bt(W,v,g,f),$&&On(g,f,v,"updated")},E)},st=(f,g,v,E,b,R,P)=>{for(let A=0;A<g.length;A++){const N=f[A],I=g[A],$=N.el&&(N.type===Ke||!Fn(N,I)||N.shapeFlag&70)?h(N.el):v;_(N,I,$,null,E,b,R,P,!0)}},He=(f,g,v,E,b,R,P)=>{if(v!==E){for(const A in E){if(Ni(A))continue;const N=E[A],I=v[A];N!==I&&A!=="value"&&i(f,A,I,N,P,g.children,b,R,x)}if(v!==ye)for(const A in v)!Ni(A)&&!(A in E)&&i(f,A,v[A],null,P,g.children,b,R,x);"value"in E&&i(f,"value",v.value,E.value)}},cn=(f,g,v,E,b,R,P,A,N)=>{const I=g.el=f?f.el:a(""),$=g.anchor=f?f.anchor:a("");let{patchFlag:M,dynamicChildren:j,slotScopeIds:W}=g;W&&(A=A?A.concat(W):W),f==null?(s(I,v,E),s($,v,E),ve(g.children,v,$,b,R,P,A,N)):M>0&&M&64&&j&&f.dynamicChildren?(st(f.dynamicChildren,j,v,b,R,P,A),(g.key!=null||b&&g===b.subTree)&&Lf(f,g,!0)):vt(f,g,v,$,b,R,P,A,N)},fs=(f,g,v,E,b,R,P,A,N)=>{g.slotScopeIds=A,f==null?g.shapeFlag&512?b.ctx.activate(g,v,E,P,N):ps(g,v,E,b,R,P,N):Pe(f,g,N)},ps=(f,g,v,E,b,R,P)=>{const A=f.component=Jv(f,E,b);if(ko(f)&&(A.ctx.renderer=we),e_(A),A.asyncDep){if(b&&b.registerDep(A,_e),!f.el){const N=A.subTree=Xe(Mt);D(null,N,g,v)}return}_e(A,f,g,v,b,R,P)},Pe=(f,g,v)=>{const E=g.component=f.component;if(cv(f,g,v))if(E.asyncDep&&!E.asyncResolved){fe(E,g,v);return}else E.next=g,ev(E.update),E.update();else g.component=f.component,g.el=f.el,E.vnode=g},_e=(f,g,v,E,b,R,P)=>{const A=()=>{if(f.isMounted){let{next:$,bu:M,u:j,parent:W,vnode:oe}=f,Se=$,ge;Mn(f,!1),$?($.el=oe.el,fe(f,$,P)):$=oe,M&&xi(M),(ge=$.props&&$.props.onVnodeBeforeUpdate)&&Bt(ge,W,$,oe),Mn(f,!0);const Te=pa(f),xt=f.subTree;f.subTree=Te,_(xt,Te,h(xt.el),V(xt),f,b,R),$.el=Te.el,Se===null&&lv(f,Te.el),j&&pt(j,b),(ge=$.props&&$.props.onVnodeUpdated)&&pt(()=>Bt(ge,W,$,oe),b)}else{let $;const{el:M,props:j}=g,{bm:W,m:oe,parent:Se}=f,ge=Ja(g);if(Mn(f,!1),W&&xi(W),!ge&&($=j&&j.onVnodeBeforeMount)&&Bt($,Se,g),Mn(f,!0),M&&Z){const Te=()=>{f.subTree=pa(f),Z(M,f.subTree,f,b,null)};ge?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Te()):Te()}else{const Te=f.subTree=pa(f);_(null,Te,v,E,f,b,R),g.el=Te.el}if(oe&&pt(oe,b),!ge&&($=j&&j.onVnodeMounted)){const Te=g;pt(()=>Bt($,Se,Te),b)}g.shapeFlag&256&&f.a&&pt(f.a,b),f.isMounted=!0,g=v=E=null}},N=f.effect=new Xc(A,()=>ff(f.update),f.scope),I=f.update=N.run.bind(N);I.id=f.uid,Mn(f,!0),I()},fe=(f,g,v)=>{g.component=f;const E=f.vnode.props;f.vnode=g,f.next=null,Dv(f,g.props,E,v),Mv(f,g.children,v),Ws(),nl(void 0,f.update),Gs()},vt=(f,g,v,E,b,R,P,A,N=!1)=>{const I=f&&f.children,$=f?f.shapeFlag:0,M=g.children,{patchFlag:j,shapeFlag:W}=g;if(j>0){if(j&128){Qt(I,M,v,E,b,R,P,A,N);return}else if(j&256){gs(I,M,v,E,b,R,P,A,N);return}}W&8?($&16&&x(I,b,R),M!==I&&u(v,M)):$&16?W&16?Qt(I,M,v,E,b,R,P,A,N):x(I,b,R,!0):($&8&&u(v,""),W&16&&ve(M,v,E,b,R,P,A,N))},gs=(f,g,v,E,b,R,P,A,N)=>{f=f||Cs,g=g||Cs;const I=f.length,$=g.length,M=Math.min(I,$);let j;for(j=0;j<M;j++){const W=g[j]=N?pn(g[j]):$t(g[j]);_(f[j],W,v,null,b,R,P,A,N)}I>$?x(f,b,R,!0,!1,M):ve(g,v,E,b,R,P,A,N,M)},Qt=(f,g,v,E,b,R,P,A,N)=>{let I=0;const $=g.length;let M=f.length-1,j=$-1;for(;I<=M&&I<=j;){const W=f[I],oe=g[I]=N?pn(g[I]):$t(g[I]);if(Fn(W,oe))_(W,oe,v,null,b,R,P,A,N);else break;I++}for(;I<=M&&I<=j;){const W=f[M],oe=g[j]=N?pn(g[j]):$t(g[j]);if(Fn(W,oe))_(W,oe,v,null,b,R,P,A,N);else break;M--,j--}if(I>M){if(I<=j){const W=j+1,oe=W<$?g[W].el:E;for(;I<=j;)_(null,g[I]=N?pn(g[I]):$t(g[I]),v,oe,b,R,P,A,N),I++}}else if(I>j)for(;I<=M;)At(f[I],b,R,!0),I++;else{const W=I,oe=I,Se=new Map;for(I=oe;I<=j;I++){const _t=g[I]=N?pn(g[I]):$t(g[I]);_t.key!=null&&Se.set(_t.key,I)}let ge,Te=0;const xt=j-oe+1;let ms=!1,Tu=0;const or=new Array(xt);for(I=0;I<xt;I++)or[I]=0;for(I=W;I<=M;I++){const _t=f[I];if(Te>=xt){At(_t,b,R,!0);continue}let Ft;if(_t.key!=null)Ft=Se.get(_t.key);else for(ge=oe;ge<=j;ge++)if(or[ge-oe]===0&&Fn(_t,g[ge])){Ft=ge;break}Ft===void 0?At(_t,b,R,!0):(or[Ft-oe]=I+1,Ft>=Tu?Tu=Ft:ms=!0,_(_t,g[Ft],v,null,b,R,P,A,N),Te++)}const Iu=ms?Vv(or):Cs;for(ge=Iu.length-1,I=xt-1;I>=0;I--){const _t=oe+I,Ft=g[_t],Su=_t+1<$?g[_t+1].el:E;or[I]===0?_(null,Ft,v,Su,b,R,P,A,N):ms&&(ge<0||I!==Iu[ge]?Ut(Ft,v,Su,2):ge--)}}},Ut=(f,g,v,E,b=null)=>{const{el:R,type:P,transition:A,children:N,shapeFlag:I}=f;if(I&6){Ut(f.component.subTree,g,v,E);return}if(I&128){f.suspense.move(g,v,E);return}if(I&64){P.move(f,g,v,we);return}if(P===Ke){s(R,g,v);for(let M=0;M<N.length;M++)Ut(N[M],g,v,E);s(f.anchor,g,v);return}if(P===ma){L(f,g,v);return}if(E!==2&&I&1&&A)if(E===0)A.beforeEnter(R),s(R,g,v),pt(()=>A.enter(R),b);else{const{leave:M,delayLeave:j,afterLeave:W}=A,oe=()=>s(R,g,v),Se=()=>{M(R,()=>{oe(),W&&W()})};j?j(R,oe,Se):Se()}else s(R,g,v)},At=(f,g,v,E=!1,b=!1)=>{const{type:R,props:P,ref:A,children:N,dynamicChildren:I,shapeFlag:$,patchFlag:M,dirs:j}=f;if(A!=null&&nc(A,null,v,f,!0),$&256){g.ctx.deactivate(f);return}const W=$&1&&j,oe=!Ja(f);let Se;if(oe&&(Se=P&&P.onVnodeBeforeUnmount)&&Bt(Se,g,f),$&6)U(f.component,v,E);else{if($&128){f.suspense.unmount(v,E);return}W&&On(f,null,g,"beforeUnmount"),$&64?f.type.remove(f,g,v,b,we,E):I&&(R!==Ke||M>0&&M&64)?x(I,g,v,!1,!0):(R===Ke&&M&384||!b&&$&16)&&x(N,g,v),E&&da(f)}(oe&&(Se=P&&P.onVnodeUnmounted)||W)&&pt(()=>{Se&&Bt(Se,g,f),W&&On(f,null,g,"unmounted")},v)},da=f=>{const{type:g,el:v,anchor:E,transition:b}=f;if(g===Ke){w(v,E);return}if(g===ma){ce(f);return}const R=()=>{r(v),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:P,delayLeave:A}=b,N=()=>P(v,R);A?A(f.el,R,N):N()}else R()},w=(f,g)=>{let v;for(;f!==g;)v=d(f),r(f),f=v;r(g)},U=(f,g,v)=>{const{bum:E,scope:b,update:R,subTree:P,um:A}=f;E&&xi(E),b.stop(),R&&(R.active=!1,At(P,f,g,v)),A&&pt(A,g),pt(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},x=(f,g,v,E=!1,b=!1,R=0)=>{for(let P=R;P<f.length;P++)At(f[P],g,v,E,b)},V=f=>f.shapeFlag&6?V(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),pe=(f,g,v)=>{f==null?g._vnode&&At(g._vnode,null,null,!0):_(g._vnode||null,f,g,null,null,null,v),mf(),g._vnode=f},we={p:_,um:At,m:Ut,r:da,mt:ps,mc:ve,pc:vt,pbc:st,n:V,o:t};let se,Z;return e&&([se,Z]=e(we)),{render:pe,hydrate:se,createApp:Uv(pe,se)}}function Mn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Lf(t,e,n=!1){const s=t.children,r=e.children;if(X(s)&&X(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=pn(r[i]),a.el=o.el),n||Lf(o,a))}}function Vv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const $v=t=>t.__isTeleport,Uf="components";function zu(t,e){return Hv(Uf,t,!0,e)||t}const jv=Symbol();function Hv(t,e,n=!0,s=!1){const r=Rt||Ue;if(r){const i=r.type;if(t===Uf){const a=r_(i);if(a&&(a===e||a===Xt(e)||a===To(Xt(e))))return i}const o=Wu(r[t]||i[t],e)||Wu(r.appContext[t],e);return!o&&s?i:o}}function Wu(t,e){return t&&(t[e]||t[Xt(e)]||t[To(Xt(e))])}const Ke=Symbol(void 0),rl=Symbol(void 0),Mt=Symbol(void 0),ma=Symbol(void 0),vr=[];let qn=null;function ee(t=!1){vr.push(qn=t?null:[])}function qv(){vr.pop(),qn=vr[vr.length-1]||null}let Wi=1;function Gu(t){Wi+=t}function Ff(t){return t.dynamicChildren=Wi>0?qn||Cs:null,qv(),Wi>0&&qn&&qn.push(t),t}function ne(t,e,n,s,r,i){return Ff(p(t,e,n,s,r,i,!0))}function Kv(t,e,n,s,r){return Ff(Xe(t,e,n,s,r,!0))}function sc(t){return t?t.__v_isVNode===!0:!1}function Fn(t,e){return t.type===e.type&&t.key===e.key}const No="__vInternal",Bf=({key:t})=>t!=null?t:null,Mi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ze(t)||Ge(t)||J(t)?{i:Rt,r:t,k:e,f:!!n}:t:null;function p(t,e=null,n=null,s=0,r=null,i=t===Ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bf(e),ref:e&&Mi(e),scopeId:Ao,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(il(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ze(n)?8:16),Wi>0&&!o&&qn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&qn.push(c),c}const Xe=zv;function zv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===jv)&&(t=Mt),sc(t)){const a=Yn(t,e,!0);return n&&il(a,n),a}if(i_(t)&&(t=t.__vccOpts),e){e=Wv(e);let{class:a,style:c}=e;a&&!Ze(a)&&(e.class=Hc(a)),Fe(c)&&(rf(c)&&!X(c)&&(c=ct({},c)),e.style=jc(c))}const o=Ze(t)?1:uv(t)?128:$v(t)?64:Fe(t)?4:J(t)?2:0;return p(t,e,n,s,r,o,i,!0)}function Wv(t){return t?rf(t)||No in t?ct({},t):t:null}function Yn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Gv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Bf(a),ref:e&&e.ref?n&&r?X(r)?r.concat(Mi(e)):[r,Mi(e)]:Mi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yn(t.ssContent),ssFallback:t.ssFallback&&Yn(t.ssFallback),el:t.el,anchor:t.anchor}}function Pt(t=" ",e=0){return Xe(rl,null,t,e)}function ze(t="",e=!1){return e?(ee(),Kv(Mt,null,t)):Xe(Mt,null,t)}function $t(t){return t==null||typeof t=="boolean"?Xe(Mt):X(t)?Xe(Ke,null,t.slice()):typeof t=="object"?pn(t):Xe(rl,null,String(t))}function pn(t){return t.el===null||t.memo?t:Yn(t)}function il(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),il(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(No in e)?e._ctx=Rt:r===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:Rt},n=32):(e=String(e),s&64?(n=16,e=[Pt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Hc([e.class,s.class]));else if(r==="style")e.style=jc([e.style,s.style]);else if(wo(r)){const i=e[r],o=s[r];o&&i!==o&&!(X(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Bt(t,e,n,s=null){Nt(t,e,7,[n,s])}const rc=t=>t?Vf(t)?xo(t)||t.proxy:rc(t.parent):null,Gi=ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>rc(t.parent),$root:t=>rc(t.root),$emit:t=>t.emit,$options:t=>Rf(t),$forceUpdate:t=>()=>ff(t.update),$nextTick:t=>df.bind(t.proxy),$watch:t=>dv.bind(t)}),Xv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==ye&&ie(s,e))return o[e]=1,s[e];if(r!==ye&&ie(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ie(l,e))return o[e]=3,i[e];if(n!==ye&&ie(n,e))return o[e]=4,n[e];Za&&(o[e]=0)}}const u=Gi[e];let h,d;if(u)return e==="$attrs"&&St(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ye&&ie(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ie(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==ye&&ie(r,e)?(r[e]=n,!0):s!==ye&&ie(s,e)?(s[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ye&&ie(t,o)||e!==ye&&ie(e,o)||(a=i[0])&&ie(a,o)||ie(s,o)||ie(Gi,o)||ie(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Yv=Mf();let Qv=0;function Jv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Yv,i={uid:Qv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new vy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xf(s,r),emitsOptions:vf(s,r),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:s.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sv.bind(null,i),t.ce&&t.ce(i),i}let Ue=null;const Zv=()=>Ue||Rt,Ps=t=>{Ue=t,t.scope.on()},Kn=()=>{Ue&&Ue.scope.off(),Ue=null};function Vf(t){return t.vnode.shapeFlag&4}let xr=!1;function e_(t,e=!1){xr=e;const{props:n,children:s}=t.vnode,r=Vf(t);xv(t,n,r,e),Ov(t,s);const i=r?t_(t,e):void 0;return xr=!1,i}function t_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=of(new Proxy(t.ctx,Xv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?s_(t):null;Ps(t),Ws();const i=En(s,t,0,[t.props,r]);if(Gs(),Kn(),Hd(i)){if(i.then(Kn,Kn),e)return i.then(o=>{Xu(t,o,e)}).catch(o=>{So(o,t,0)});t.asyncDep=i}else Xu(t,i,e)}else $f(t,e)}function Xu(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=uf(e)),$f(t,n)}let Yu;function $f(t,e,n){const s=t.type;if(!t.render){if(!e&&Yu&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=ct(ct({isCustomElement:i,delimiters:a},o),c);s.render=Yu(r,l)}}t.render=s.render||Ot}Ps(t),Ws(),Cv(t),Gs(),Kn()}function n_(t){return new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}})}function s_(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=n_(t))},slots:t.slots,emit:t.emit,expose:e}}function xo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(uf(of(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gi)return Gi[n](t)}}))}function r_(t){return J(t)&&t.displayName||t.name}function i_(t){return J(t)&&"__vccOpts"in t}const jt=(t,e)=>Qy(t,e,xr);function jf(t,e,n){const s=arguments.length;return s===2?Fe(e)&&!X(e)?sc(e)?Xe(t,null,[e]):Xe(t,e):Xe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&sc(n)&&(n=[n]),Xe(t,e,n))}const o_="3.2.33",a_="http://www.w3.org/2000/svg",Bn=typeof document!="undefined"?document:null,Qu=Bn&&Bn.createElement("template"),c_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Bn.createElementNS(a_,t):Bn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Bn.createTextNode(t),createComment:t=>Bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Qu.innerHTML=s?`<svg>${t}</svg>`:t;const a=Qu.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function l_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function u_(t,e,n){const s=t.style,r=Ze(n);if(n&&!r){for(const i in n)ic(s,i,n[i]);if(e&&!Ze(e))for(const i in e)n[i]==null&&ic(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Ju=/\s*!important$/;function ic(t,e,n){if(X(n))n.forEach(s=>ic(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=h_(t,e);Ju.test(n)?t.setProperty(zs(s),n.replace(Ju,""),"important"):t[s]=n}}const Zu=["Webkit","Moz","ms"],ya={};function h_(t,e){const n=ya[e];if(n)return n;let s=Xt(e);if(s!=="filter"&&s in t)return ya[e]=s;s=To(s);for(let r=0;r<Zu.length;r++){const i=Zu[r]+s;if(i in t)return ya[e]=i}return e}const eh="http://www.w3.org/1999/xlink";function d_(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(eh,e.slice(6,e.length)):t.setAttributeNS(eh,e,n);else{const i=ay(e);n==null||i&&!Vd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function f_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Vd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Hf,p_]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let oc=0;const g_=Promise.resolve(),m_=()=>{oc=0},y_=()=>oc||(g_.then(m_),oc=Hf());function bs(t,e,n,s){t.addEventListener(e,n,s)}function v_(t,e,n,s){t.removeEventListener(e,n,s)}function __(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=w_(e);if(s){const l=i[e]=b_(s,r);bs(t,a,l,c)}else o&&(v_(t,a,o,c),i[e]=void 0)}}const th=/(?:Once|Passive|Capture)$/;function w_(t){let e;if(th.test(t)){e={};let n;for(;n=t.match(th);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[zs(t.slice(2)),e]}function b_(t,e){const n=s=>{const r=s.timeStamp||Hf();(p_||r>=n.attached-1)&&Nt(E_(s,n.value),e,5,[s])};return n.value=t,n.attached=y_(),n}function E_(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const nh=/^on[a-z]/,T_=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?l_(t,s,r):e==="style"?u_(t,n,s):wo(e)?qc(e)||__(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):I_(t,e,s,r))?f_(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),d_(t,e,s,r))};function I_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&nh.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||nh.test(e)&&Ze(n)?!1:e in t}const S_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};gv.props;const sh=t=>{const e=t.props["onUpdate:modelValue"];return X(e)?n=>xi(e,n):e};function C_(t){t.target.composing=!0}function rh(t){const e=t.target;e.composing&&(e.composing=!1,A_(e,"input"))}function A_(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Re={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=sh(r);const i=s||r.props&&r.props.type==="number";bs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Ha(a)),t._assign(a)}),n&&bs(t,"change",()=>{t.value=t.value.trim()}),e||(bs(t,"compositionstart",C_),bs(t,"compositionend",rh),bs(t,"change",rh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=sh(i),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Ha(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},k_=["ctrl","shift","alt","meta"],R_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>k_.some(n=>t[`${n}Key`]&&!e.includes(n))},rt=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=R_[e[r]];if(i&&i(n,e))return}return t(n,...s)},N_=ct({patchProp:T_},c_);let ih;function x_(){return ih||(ih=Fv(N_))}const D_=(...t)=>{const e=x_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=P_(s);if(!r)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function P_(t){return Ze(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const qf=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Xs=t=>qf?Symbol(t):"_vr_"+t,O_=Xs("rvlm"),oh=Xs("rvd"),ol=Xs("r"),Kf=Xs("rl"),ac=Xs("rvl"),Es=typeof window!="undefined";function M_(t){return t.__esModule||qf&&t[Symbol.toStringTag]==="Module"}const me=Object.assign;function va(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const _r=()=>{},L_=/\/$/,U_=t=>t.replace(L_,"");function _a(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=$_(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function F_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ah(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function B_(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Os(e.matched[s],n.matched[r])&&zf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Os(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!V_(t[n],e[n]))return!1;return!0}function V_(t,e){return Array.isArray(t)?ch(t,e):Array.isArray(e)?ch(e,t):t===e}function ch(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function $_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Dr;(function(t){t.pop="pop",t.push="push"})(Dr||(Dr={}));var wr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(wr||(wr={}));function j_(t){if(!t)if(Es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),U_(t)}const H_=/^[^#]+#/;function q_(t,e){return t.replace(H_,"#")+e}function K_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Do=()=>({left:window.pageXOffset,top:window.pageYOffset});function z_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=K_(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function lh(t,e){return(history.state?history.state.position-e:-1)+t}const cc=new Map;function W_(t,e){cc.set(t,e)}function G_(t){const e=cc.get(t);return cc.delete(t),e}let X_=()=>location.protocol+"//"+location.host;function Wf(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),ah(c,"")}return ah(n,t)+s+r}function Y_(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const m=Wf(t,location),y=n.value,T=e.value;let _=0;if(d){if(n.value=m,e.value=d,o&&o===y){o=null;return}_=T?d.position-T.position:0}else s(m);r.forEach(C=>{C(n.value,y,{delta:_,type:Dr.pop,direction:_?_>0?wr.forward:wr.back:wr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const m=()=>{const y=r.indexOf(d);y>-1&&r.splice(y,1)};return i.push(m),m}function u(){const{history:d}=window;!d.state||d.replaceState(me({},d.state,{scroll:Do()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function uh(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Do():null}}function Q_(t){const{history:e,location:n}=window,s={value:Wf(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:X_()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=me({},e.state,uh(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=me({},r.value,e.state,{forward:c,scroll:Do()});i(u.current,u,!0);const h=me({},uh(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function J_(t){t=j_(t);const e=Q_(t),n=Y_(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=me({location:"",base:t,go:s,createHref:q_.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Z_(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),J_(t)}function ew(t){return typeof t=="string"||t&&typeof t=="object"}function Gf(t){return typeof t=="string"||typeof t=="symbol"}const un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xf=Xs("nf");var hh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(hh||(hh={}));function Ms(t,e){return me(new Error,{type:t,[Xf]:!0},e)}function hn(t,e){return t instanceof Error&&Xf in t&&(e==null||!!(t.type&e))}const dh="[^/]+?",tw={sensitive:!1,strict:!1,start:!0,end:!0},nw=/[.+*?^${}()[\]/\\]/g;function sw(t,e){const n=me({},tw,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(nw,"\\$&"),m+=40;else if(d.type===1){const{value:y,repeatable:T,optional:_,regexp:C}=d;i.push({name:y,repeatable:T,optional:_});const D=C||dh;if(D!==dh){m+=10;try{new RegExp(`(${D})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${y}" (${D}): `+L.message)}}let F=T?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(F=_&&l.length<2?`(?:/${F})`:"/"+F),_&&(F+="?"),r+=F,m+=20,_&&(m+=-8),T&&(m+=-20),D===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",y=i[d-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:T,optional:_}=m,C=y in l?l[y]:"";if(Array.isArray(C)&&!T)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const D=Array.isArray(C)?C.join("/"):C;if(!D)if(_)d.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=D}}return u}return{re:o,score:s,keys:i,parse:a,stringify:c}}function rw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function iw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=rw(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const ow={type:0,value:""},aw=/[a-zA-Z0-9_]/;function cw(t){if(!t)return[[]];if(t==="/")return[[ow]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:aw.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function lw(t,e,n){const s=sw(cw(t.path),n),r=me(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function uw(t,e){const n=[],s=new Map;e=ph({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const m=!d,y=dw(u);y.aliasOf=d&&d.record;const T=ph(e,u),_=[y];if("alias"in u){const F=typeof u.alias=="string"?[u.alias]:u.alias;for(const L of F)_.push(me({},y,{components:d?d.record.components:y.components,path:L,aliasOf:d?d.record:y}))}let C,D;for(const F of _){const{path:L}=F;if(h&&L[0]!=="/"){const ce=h.record.path,de=ce[ce.length-1]==="/"?"":"/";F.path=h.record.path+(L&&de+L)}if(C=lw(F,h,T),d?d.alias.push(C):(D=D||C,D!==C&&D.alias.push(C),m&&u.name&&!fh(C)&&o(u.name)),"children"in y){const ce=y.children;for(let de=0;de<ce.length;de++)i(ce[de],C,d&&d.children[de])}d=d||C,c(C)}return D?()=>{o(D)}:_r}function o(u){if(Gf(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&iw(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Yf(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!fh(u)&&s.set(u.record.name,u)}function l(u,h){let d,m={},y,T;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Ms(1,{location:u});T=d.record.name,m=me(hw(h.params,d.keys.filter(D=>!D.optional).map(D=>D.name)),u.params),y=d.stringify(m)}else if("path"in u)y=u.path,d=n.find(D=>D.re.test(y)),d&&(m=d.parse(y),T=d.record.name);else{if(d=h.name?s.get(h.name):n.find(D=>D.re.test(h.path)),!d)throw Ms(1,{location:u,currentLocation:h});T=d.record.name,m=me({},h.params,u.params),y=d.stringify(m)}const _=[];let C=d;for(;C;)_.unshift(C.record),C=C.parent;return{name:T,path:y,params:m,matched:_,meta:pw(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function hw(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function dw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:fw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function fw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function fh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pw(t){return t.reduce((e,n)=>me(e,n.meta),{})}function ph(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Yf(t,e){return e.children.some(n=>n===t||Yf(t,n))}const Qf=/#/g,gw=/&/g,mw=/\//g,yw=/=/g,vw=/\?/g,Jf=/\+/g,_w=/%5B/g,ww=/%5D/g,Zf=/%5E/g,bw=/%60/g,ep=/%7B/g,Ew=/%7C/g,tp=/%7D/g,Tw=/%20/g;function al(t){return encodeURI(""+t).replace(Ew,"|").replace(_w,"[").replace(ww,"]")}function Iw(t){return al(t).replace(ep,"{").replace(tp,"}").replace(Zf,"^")}function lc(t){return al(t).replace(Jf,"%2B").replace(Tw,"+").replace(Qf,"%23").replace(gw,"%26").replace(bw,"`").replace(ep,"{").replace(tp,"}").replace(Zf,"^")}function Sw(t){return lc(t).replace(yw,"%3D")}function Cw(t){return al(t).replace(Qf,"%23").replace(vw,"%3F")}function Aw(t){return t==null?"":Cw(t).replace(mw,"%2F")}function Xi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function kw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Jf," "),o=i.indexOf("="),a=Xi(o<0?i:i.slice(0,o)),c=o<0?null:Xi(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function gh(t){let e="";for(let n in t){const s=t[n];if(n=Sw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&lc(i)):[s&&lc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Rw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function ar(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function gn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ms(4,{from:n,to:e})):h instanceof Error?a(h):ew(h)?a(Ms(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function wa(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Nw(a)){const l=(a.__vccOpts||a)[e];l&&r.push(gn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=M_(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&gn(d,n,s,i,o)()}))}}return r}function Nw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function mh(t){const e=Tn(ol),n=Tn(Kf),s=jt(()=>e.resolve(gr(t.to))),r=jt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Os.bind(null,u));if(d>-1)return d;const m=yh(c[l-2]);return l>1&&yh(u)===m&&h[h.length-1].path!==m?h.findIndex(Os.bind(null,c[l-2])):d}),i=jt(()=>r.value>-1&&Ow(n.params,s.value.params)),o=jt(()=>r.value>-1&&r.value===n.matched.length-1&&zf(n.params,s.value.params));function a(c={}){return Pw(c)?e[gr(t.replace)?"replace":"push"](gr(t.to)).catch(_r):Promise.resolve()}return{route:s,href:jt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const xw=Tf({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mh,setup(t,{slots:e}){const n=Xr(mh(t)),{options:s}=Tn(ol),r=jt(()=>({[vh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[vh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:jf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Dw=xw;function Pw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ow(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function yh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vh=(t,e,n)=>t!=null?t:e!=null?e:n,Mw=Tf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Tn(ac),r=jt(()=>t.route||s.value),i=Tn(oh,0),o=jt(()=>r.value.matched[i]);Pi(oh,i+1),Pi(O_,o),Pi(ac,r);const a=zy();return Oi(()=>[a.value,o.value,t.name],([c,l,u],[h,d,m])=>{l&&(l.instances[u]=c,d&&d!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=d.leaveGuards),l.updateGuards.size||(l.updateGuards=d.updateGuards))),c&&l&&(!d||!Os(l,d)||!h)&&(l.enterCallbacks[u]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return _h(n.default,{Component:u,route:c});const d=l.props[t.name],m=d?d===!0?c.params:typeof d=="function"?d(c):d:null,T=jf(u,me({},m,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return _h(n.default,{Component:T,route:c})||T}}});function _h(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Lw=Mw;function Uw(t){const e=uw(t.routes,t),n=t.parseQuery||kw,s=t.stringifyQuery||gh,r=t.history,i=ar(),o=ar(),a=ar(),c=Wy(un);let l=un;Es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=va.bind(null,w=>""+w),h=va.bind(null,Aw),d=va.bind(null,Xi);function m(w,U){let x,V;return Gf(w)?(x=e.getRecordMatcher(w),V=U):V=w,e.addRoute(V,x)}function y(w){const U=e.getRecordMatcher(w);U&&e.removeRoute(U)}function T(){return e.getRoutes().map(w=>w.record)}function _(w){return!!e.getRecordMatcher(w)}function C(w,U){if(U=me({},U||c.value),typeof w=="string"){const Z=_a(n,w,U.path),f=e.resolve({path:Z.path},U),g=r.createHref(Z.fullPath);return me(Z,f,{params:d(f.params),hash:Xi(Z.hash),redirectedFrom:void 0,href:g})}let x;if("path"in w)x=me({},w,{path:_a(n,w.path,U.path).path});else{const Z=me({},w.params);for(const f in Z)Z[f]==null&&delete Z[f];x=me({},w,{params:h(w.params)}),U.params=h(U.params)}const V=e.resolve(x,U),pe=w.hash||"";V.params=u(d(V.params));const we=F_(s,me({},w,{hash:Iw(pe),path:V.path})),se=r.createHref(we);return me({fullPath:we,hash:pe,query:s===gh?Rw(w.query):w.query||{}},V,{redirectedFrom:void 0,href:se})}function D(w){return typeof w=="string"?_a(n,w,c.value.path):me({},w)}function F(w,U){if(l!==w)return Ms(8,{from:U,to:w})}function L(w){return Q(w)}function ce(w){return L(me(D(w),{replace:!0}))}function de(w){const U=w.matched[w.matched.length-1];if(U&&U.redirect){const{redirect:x}=U;let V=typeof x=="function"?x(w):x;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=D(V):{path:V},V.params={}),me({query:w.query,hash:w.hash,params:w.params},V)}}function Q(w,U){const x=l=C(w),V=c.value,pe=w.state,we=w.force,se=w.replace===!0,Z=de(x);if(Z)return Q(me(D(Z),{state:pe,force:we,replace:se}),U||x);const f=x;f.redirectedFrom=U;let g;return!we&&B_(s,V,x)&&(g=Ms(16,{to:f,from:V}),gs(V,V,!0,!1)),(g?Promise.resolve(g):ve(f,V)).catch(v=>hn(v)?hn(v,2)?v:vt(v):_e(v,f,V)).then(v=>{if(v){if(hn(v,2))return Q(me(D(v.to),{state:pe,force:we,replace:se}),U||f)}else v=st(f,V,!0,se,pe);return nt(f,V,v),v})}function Ee(w,U){const x=F(w,U);return x?Promise.reject(x):Promise.resolve()}function ve(w,U){let x;const[V,pe,we]=Fw(w,U);x=wa(V.reverse(),"beforeRouteLeave",w,U);for(const Z of V)Z.leaveGuards.forEach(f=>{x.push(gn(f,w,U))});const se=Ee.bind(null,w,U);return x.push(se),ys(x).then(()=>{x=[];for(const Z of i.list())x.push(gn(Z,w,U));return x.push(se),ys(x)}).then(()=>{x=wa(pe,"beforeRouteUpdate",w,U);for(const Z of pe)Z.updateGuards.forEach(f=>{x.push(gn(f,w,U))});return x.push(se),ys(x)}).then(()=>{x=[];for(const Z of w.matched)if(Z.beforeEnter&&!U.matched.includes(Z))if(Array.isArray(Z.beforeEnter))for(const f of Z.beforeEnter)x.push(gn(f,w,U));else x.push(gn(Z.beforeEnter,w,U));return x.push(se),ys(x)}).then(()=>(w.matched.forEach(Z=>Z.enterCallbacks={}),x=wa(we,"beforeRouteEnter",w,U),x.push(se),ys(x))).then(()=>{x=[];for(const Z of o.list())x.push(gn(Z,w,U));return x.push(se),ys(x)}).catch(Z=>hn(Z,8)?Z:Promise.reject(Z))}function nt(w,U,x){for(const V of a.list())V(w,U,x)}function st(w,U,x,V,pe){const we=F(w,U);if(we)return we;const se=U===un,Z=Es?history.state:{};x&&(V||se?r.replace(w.fullPath,me({scroll:se&&Z&&Z.scroll},pe)):r.push(w.fullPath,pe)),c.value=w,gs(w,U,x,se),vt()}let He;function cn(){He||(He=r.listen((w,U,x)=>{const V=C(w),pe=de(V);if(pe){Q(me(pe,{replace:!0}),V).catch(_r);return}l=V;const we=c.value;Es&&W_(lh(we.fullPath,x.delta),Do()),ve(V,we).catch(se=>hn(se,12)?se:hn(se,2)?(Q(se.to,V).then(Z=>{hn(Z,20)&&!x.delta&&x.type===Dr.pop&&r.go(-1,!1)}).catch(_r),Promise.reject()):(x.delta&&r.go(-x.delta,!1),_e(se,V,we))).then(se=>{se=se||st(V,we,!1),se&&(x.delta?r.go(-x.delta,!1):x.type===Dr.pop&&hn(se,20)&&r.go(-1,!1)),nt(V,we,se)}).catch(_r)}))}let fs=ar(),ps=ar(),Pe;function _e(w,U,x){vt(w);const V=ps.list();return V.length?V.forEach(pe=>pe(w,U,x)):console.error(w),Promise.reject(w)}function fe(){return Pe&&c.value!==un?Promise.resolve():new Promise((w,U)=>{fs.add([w,U])})}function vt(w){return Pe||(Pe=!w,cn(),fs.list().forEach(([U,x])=>w?x(w):U()),fs.reset()),w}function gs(w,U,x,V){const{scrollBehavior:pe}=t;if(!Es||!pe)return Promise.resolve();const we=!x&&G_(lh(w.fullPath,0))||(V||!x)&&history.state&&history.state.scroll||null;return df().then(()=>pe(w,U,we)).then(se=>se&&z_(se)).catch(se=>_e(se,w,U))}const Qt=w=>r.go(w);let Ut;const At=new Set;return{currentRoute:c,addRoute:m,removeRoute:y,hasRoute:_,getRoutes:T,resolve:C,options:t,push:L,replace:ce,go:Qt,back:()=>Qt(-1),forward:()=>Qt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ps.add,isReady:fe,install(w){const U=this;w.component("RouterLink",Dw),w.component("RouterView",Lw),w.config.globalProperties.$router=U,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>gr(c)}),Es&&!Ut&&c.value===un&&(Ut=!0,L(r.location).catch(pe=>{}));const x={};for(const pe in un)x[pe]=jt(()=>c.value[pe]);w.provide(ol,U),w.provide(Kf,Xr(x)),w.provide(ac,c);const V=w.unmount;At.add(w),w.unmount=function(){At.delete(w),At.size<1&&(l=un,He&&He(),He=null,c.value=un,Ut=!1,Pe=!1),V()}}}}function ys(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Fw(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Os(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Os(l,c))||r.push(c))}return[n,s,r]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const np=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Bw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),s.push(n[u],n[h],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(np(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Vw=function(t){const e=np(t);return sp.encodeByteArray(e,!0)},rp=function(t){return Vw(t).replace(/\./g,"")},$w=function(t){try{return sp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ip(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function op(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ap(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hw(){return Be().indexOf("Electron/")>=0}function cp(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qw(){return Be().indexOf("MSAppHost/")>=0}function Kw(){return typeof indexedDB=="object"}function zw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="FirebaseError";class xn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ww,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yr.prototype.create)}}class Yr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Gw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new xn(r,a,s)}}function Gw(t,e){return t.replace(Xw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Xw=/\{\$([^}]+)}/g;function Yw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(wh(i)&&wh(o)){if(!Yi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function wh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function dr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function fr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Qw(t,e){const n=new Jw(t,e);return n.subscribe.bind(n)}class Jw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Zw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ba),r.error===void 0&&(r.error=ba),r.complete===void 0&&(r.complete=ba);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ba(){}/**
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
 */function Ve(t){return t&&t._delegate?t._delegate:t}class An{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Un="[DEFAULT]";/**
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
 */class eb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new jw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nb(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tb(t){return t===Un?void 0:t}function nb(t){return t.instantiationMode==="EAGER"}/**
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
 */class sb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const rb={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},ib=le.INFO,ob={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},ab=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=ob[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cl{constructor(e){this.name=e,this._logLevel=ib,this._logHandler=ab,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const cb=(t,e)=>e.some(n=>t instanceof n);let bh,Eh;function lb(){return bh||(bh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ub(){return Eh||(Eh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lp=new WeakMap,uc=new WeakMap,up=new WeakMap,Ea=new WeakMap,ll=new WeakMap;function hb(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(In(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lp.set(n,t)}).catch(()=>{}),ll.set(e,t),e}function db(t){if(uc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});uc.set(t,e)}let hc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return uc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||up.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return In(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fb(t){hc=t(hc)}function pb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ta(this),e,...n);return up.set(s,e.sort?e.sort():[e]),In(s)}:ub().includes(t)?function(...e){return t.apply(Ta(this),e),In(lp.get(this))}:function(...e){return In(t.apply(Ta(this),e))}}function gb(t){return typeof t=="function"?pb(t):(t instanceof IDBTransaction&&db(t),cb(t,lb())?new Proxy(t,hc):t)}function In(t){if(t instanceof IDBRequest)return hb(t);if(Ea.has(t))return Ea.get(t);const e=gb(t);return e!==t&&(Ea.set(t,e),ll.set(e,t)),e}const Ta=t=>ll.get(t);function mb(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=In(o);return s&&o.addEventListener("upgradeneeded",c=>{s(In(o.result),c.oldVersion,c.newVersion,In(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const yb=["get","getKey","getAll","getAllKeys","count"],vb=["put","add","delete","clear"],Ia=new Map;function Th(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ia.get(e))return Ia.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=vb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||yb.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Ia.set(e,i),i}fb(t=>Ru(ku({},t),{get:(e,n,s)=>Th(e,n)||t.get(e,n,s),has:(e,n)=>!!Th(e,n)||t.has(e,n)}));/**
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
 */class _b{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function wb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dc="@firebase/app",Ih="0.7.24";/**
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
 */const ul=new cl("@firebase/app"),bb="@firebase/app-compat",Eb="@firebase/analytics-compat",Tb="@firebase/analytics",Ib="@firebase/app-check-compat",Sb="@firebase/app-check",Cb="@firebase/auth",Ab="@firebase/auth-compat",kb="@firebase/database",Rb="@firebase/database-compat",Nb="@firebase/functions",xb="@firebase/functions-compat",Db="@firebase/installations",Pb="@firebase/installations-compat",Ob="@firebase/messaging",Mb="@firebase/messaging-compat",Lb="@firebase/performance",Ub="@firebase/performance-compat",Fb="@firebase/remote-config",Bb="@firebase/remote-config-compat",Vb="@firebase/storage",$b="@firebase/storage-compat",jb="@firebase/firestore",Hb="@firebase/firestore-compat",qb="firebase",Kb="9.8.1";/**
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
 */const hp="[DEFAULT]",zb={[dc]:"fire-core",[bb]:"fire-core-compat",[Tb]:"fire-analytics",[Eb]:"fire-analytics-compat",[Sb]:"fire-app-check",[Ib]:"fire-app-check-compat",[Cb]:"fire-auth",[Ab]:"fire-auth-compat",[kb]:"fire-rtdb",[Rb]:"fire-rtdb-compat",[Nb]:"fire-fn",[xb]:"fire-fn-compat",[Db]:"fire-iid",[Pb]:"fire-iid-compat",[Ob]:"fire-fcm",[Mb]:"fire-fcm-compat",[Lb]:"fire-perf",[Ub]:"fire-perf-compat",[Fb]:"fire-rc",[Bb]:"fire-rc-compat",[Vb]:"fire-gcs",[$b]:"fire-gcs-compat",[jb]:"fire-fst",[Hb]:"fire-fst-compat","fire-js":"fire-js",[qb]:"fire-js-all"};/**
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
 */const Qi=new Map,fc=new Map;function Wb(t,e){try{t.container.addComponent(e)}catch(n){ul.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qn(t){const e=t.name;if(fc.has(e))return ul.debug(`There were multiple attempts to register component ${e}.`),!1;fc.set(e,t);for(const n of Qi.values())Wb(n,t);return!0}function Po(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Gb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Jn=new Yr("app","Firebase",Gb);/**
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
 */class Xb{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ys=Kb;function Yb(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:hp,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Jn.create("bad-app-name",{appName:String(s)});const r=Qi.get(s);if(r){if(Yi(t,r.options)&&Yi(n,r.config))return r;throw Jn.create("duplicate-app",{appName:s})}const i=new sb(s);for(const a of fc.values())i.addComponent(a);const o=new Xb(t,n,i);return Qi.set(s,o),o}function hl(t=hp){const e=Qi.get(t);if(!e)throw Jn.create("no-app",{appName:t});return e}function qt(t,e,n){var s;let r=(s=zb[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ul.warn(a.join(" "));return}Qn(new An(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Qb="firebase-heartbeat-database",Jb=1,Pr="firebase-heartbeat-store";let Sa=null;function dp(){return Sa||(Sa=mb(Qb,Jb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pr)}}}).catch(t=>{throw Jn.create("storage-open",{originalErrorMessage:t.message})})),Sa}async function Zb(t){try{return(await dp()).transaction(Pr).objectStore(Pr).get(fp(t))}catch(e){throw Jn.create("storage-get",{originalErrorMessage:e.message})}}async function Sh(t,e){try{const s=(await dp()).transaction(Pr,"readwrite");return await s.objectStore(Pr).put(e,fp(t)),s.done}catch(n){throw Jn.create("storage-set",{originalErrorMessage:n.message})}}function fp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const e0=1024,t0=30*24*60*60*1e3;class n0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new r0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ch();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=t0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ch(),{heartbeatsToSend:n,unsentEntries:s}=s0(this._heartbeatsCache.heartbeats),r=rp(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ch(){return new Date().toISOString().substring(0,10)}function s0(t,e=e0){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ah(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ah(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class r0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kw()?zw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Zb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Sh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Sh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ah(t){return rp(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function i0(t){Qn(new An("platform-logger",e=>new _b(e),"PRIVATE")),Qn(new An("heartbeat",e=>new n0(e),"PRIVATE")),qt(dc,Ih,t),qt(dc,Ih,"esm2017"),qt("fire-js","")}i0("");var o0="firebase",a0="9.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(o0,a0,"app");function dl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function pp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c0=pp,gp=new Yr("auth","Firebase",pp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=new cl("@firebase/auth");function Li(t,...e){kh.logLevel<=le.ERROR&&kh.error(`Auth (${Ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,...e){throw fl(t,...e)}function Kt(t,...e){return fl(t,...e)}function l0(t,e,n){const s=Object.assign(Object.assign({},c0()),{[e]:n});return new Yr("auth","Firebase",s).create(e,{appName:t.name})}function fl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return gp.create(t,...e)}function K(t,e,...n){if(!t)throw fl(e,...n)}function Zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Li(e),new Error(e)}function rn(t,e){t||Zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=new Map;function en(t){rn(t instanceof Function,"Expected a class definition");let e=Rh.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t,e){const n=Po(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Yi(i,e!=null?e:{}))return r;Lt(r,"already-initialized")}return n.initialize({options:e})}function h0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function d0(){return Nh()==="http:"||Nh()==="https:"}function Nh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(d0()||op()||"connection"in navigator)?navigator.onLine:!0}function p0(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=ip()||ap()}get(){return f0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=new Jr(3e4,6e4);function Zr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qs(t,e,n,s,r={}){return yp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Qr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),mp.fetch()(vp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function yp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},g0),e);try{const r=new y0(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ca(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ca(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ca(t,"email-already-in-use",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw l0(t,u,l);Lt(t,u)}}catch(r){if(r instanceof xn)throw r;Lt(t,"network-request-failed")}}async function ei(t,e,n,s,r={}){const i=await Qs(t,e,n,s,r);return"mfaPendingCredential"in i&&Lt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?pl(t.config,r):`${t.config.apiScheme}://${r}`}class y0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Kt(this.auth,"network-request-failed")),m0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ca(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Kt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v0(t,e){return Qs(t,"POST","/v1/accounts:delete",e)}async function _0(t,e){return Qs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function w0(t,e=!1){const n=Ve(t),s=await n.getIdToken(e),r=gl(s);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:br(Aa(r.auth_time)),issuedAtTime:br(Aa(r.iat)),expirationTime:br(Aa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Aa(t){return Number(t)*1e3}function gl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Li("JWT malformed, contained fewer than 3 sections"),null;try{const r=$w(n);return r?JSON.parse(r):(Li("Failed to decode base64 JWT payload"),null)}catch(r){return Li("Caught error parsing JWT payload as JSON",r),null}}function b0(t){const e=gl(t);return K(e,"internal-error"),K(typeof e.exp!="undefined","internal-error"),K(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof xn&&E0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function E0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=br(this.lastLoginAt),this.creationTime=br(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ji(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Ls(t,_0(n,{idToken:s}));K(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?C0(i.providerUserInfo):[],a=S0(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new _p(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function I0(t){const e=Ve(t);await Ji(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function S0(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function C0(t){return t.map(e=>{var{providerId:n}=e,s=dl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A0(t,e){const n=await yp(t,{},async()=>{const s=Qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=vp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken!="undefined","internal-error"),K(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):b0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await A0(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Or;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(K(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Or,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,e){K(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class zn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=dl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new T0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _p(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ls(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return w0(this,e)}reload(){return I0(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ji(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ls(this,v0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:F,emailVerified:L,isAnonymous:ce,providerData:de,stsTokenManager:Q}=n;K(F&&Q,e,"internal-error");const Ee=Or.fromJSON(this.name,Q);K(typeof F=="string",e,"internal-error"),dn(h,e.name),dn(d,e.name),K(typeof L=="boolean",e,"internal-error"),K(typeof ce=="boolean",e,"internal-error"),dn(m,e.name),dn(y,e.name),dn(T,e.name),dn(_,e.name),dn(C,e.name),dn(D,e.name);const ve=new zn({uid:F,auth:e,email:d,emailVerified:L,displayName:h,isAnonymous:ce,photoURL:y,phoneNumber:m,tenantId:T,stsTokenManager:Ee,createdAt:C,lastLoginAt:D});return de&&Array.isArray(de)&&(ve.providerData=de.map(nt=>Object.assign({},nt))),_&&(ve._redirectEventId=_),ve}static async _fromIdTokenResponse(e,n,s=!1){const r=new Or;r.updateFromServerResponse(n);const i=new zn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ji(i),i}}/**
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
 */class wp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wp.type="NONE";const xh=wp;/**
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
 */function Ui(t,e,n){return`firebase:${t}:${e}:${n}`}class Rs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ui(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ui("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Rs(en(xh),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||en(xh);const o=Ui(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=zn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Rs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Rs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sp(e))return"Blackberry";if(Cp(e))return"Webos";if(ml(e))return"Safari";if((e.includes("chrome/")||Ep(e))&&!e.includes("edge/"))return"Chrome";if(Ip(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function bp(t=Be()){return/firefox\//i.test(t)}function ml(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ep(t=Be()){return/crios\//i.test(t)}function Tp(t=Be()){return/iemobile/i.test(t)}function Ip(t=Be()){return/android/i.test(t)}function Sp(t=Be()){return/blackberry/i.test(t)}function Cp(t=Be()){return/webos/i.test(t)}function Oo(t=Be()){return/iphone|ipad|ipod/i.test(t)}function k0(t=Be()){var e;return Oo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function R0(){return cp()&&document.documentMode===10}function Ap(t=Be()){return Oo(t)||Ip(t)||Cp(t)||Sp(t)||/windows phone/i.test(t)||Tp(t)}function N0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(t,e=[]){let n;switch(t){case"Browser":n=Dh(Be());break;case"Worker":n=`${Dh(Be())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ys}/${s}`}/**
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
 */class x0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ph(this),this.idTokenSubscription=new Ph(this),this.beforeStateQueue=new x0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Rs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ji(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=p0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ve(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Rs.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Mo(t){return Ve(t)}class Ph{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qw(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,n){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}async function P0(t,e){return Qs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O0(t,e){return ei(t,"POST","/v1/accounts:signInWithPassword",Zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M0(t,e){return ei(t,"POST","/v1/accounts:signInWithEmailLink",Zr(t,e))}async function L0(t,e){return ei(t,"POST","/v1/accounts:signInWithEmailLink",Zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends yl{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Mr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Mr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return O0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return M0(e,{email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return P0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return L0(e,{idToken:n,email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t,e){return ei(t,"POST","/v1/accounts:signInWithIdp",Zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0="http://localhost";class Zn extends yl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=dl(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Zn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ns(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ns(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ns(e,n)}buildRequest(){const e={requestUri:U0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function B0(t){const e=dr(fr(t)).link,n=e?dr(fr(e)).deep_link_id:null,s=dr(fr(t)).deep_link_id;return(s?dr(fr(s)).link:null)||s||n||e||t}class vl{constructor(e){var n,s,r,i,o,a;const c=dr(fr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=F0((r=c.mode)!==null&&r!==void 0?r:null);K(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=B0(e);try{return new vl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.providerId=Js.PROVIDER_ID}static credential(e,n){return Mr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=vl.parseLink(n);return K(s,"argument-error"),Mr._fromEmailAndCode(e,s.code,s.tenantId)}}Js.PROVIDER_ID="password";Js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ti extends Rp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends ti{constructor(){super("facebook.com")}static credential(e){return Zn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return yn.credential(n,s)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends ti{constructor(){super("github.com")}static credential(e){return Zn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.GITHUB_SIGN_IN_METHOD="github.com";vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends ti{constructor(){super("twitter.com")}static credential(e,n){return Zn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return _n.credential(n,s)}catch{return null}}}_n.TWITTER_SIGN_IN_METHOD="twitter.com";_n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V0(t,e){return ei(t,"POST","/v1/accounts:signUp",Zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await zn._fromIdTokenResponse(e,s,r),o=Oh(s);return new es({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Oh(s);return new es({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Oh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends xn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Zi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Zi(e,n,s,r)}}function Np(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Zi._fromErrorAndOperation(t,i,e,s):i})}async function $0(t,e,n=!1){const s=await Ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return es._forOperation(t,"link",s)}/**
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
 */async function j0(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Ls(t,Np(s,r,e,t),n);K(i.idToken,s,"internal-error");const o=gl(i.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),es._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Lt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xp(t,e,n=!1){const s="signIn",r=await Np(t,s,e),i=await es._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function H0(t,e){return xp(Mo(t),e)}async function q0(t,e,n){const s=Mo(t),r=await V0(s,{returnSecureToken:!0,email:e,password:n}),i=await es._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function K0(t,e,n){return H0(Ve(t),Js.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z0(t,e){return Qs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Ve(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ls(s,z0(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Tt(t,e,n,s){return Ve(t).onAuthStateChanged(e,n,s)}function G0(t){return Ve(t).signOut()}const eo="__sak";/**
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
 */class Dp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(eo,"1"),this.storage.removeItem(eo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(){const t=Be();return ml(t)||Oo(t)}const Y0=1e3,Q0=10;class Pp extends Dp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=X0()&&N0(),this.fallbackToPolling=Ap(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);R0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Q0):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Y0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pp.type="LOCAL";const J0=Pp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op extends Dp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Op.type="SESSION";const Mp=Op;/**
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
 */function Z0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Lo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Z0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class eE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=_l("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return window}function tE(t){zt().location.href=t}/**
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
 */function Lp(){return typeof zt().WorkerGlobalScope!="undefined"&&typeof zt().importScripts=="function"}async function nE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rE(){return Lp()?self:null}/**
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
 */const Up="firebaseLocalStorageDb",iE=1,to="firebaseLocalStorage",Fp="fbase_key";class ni{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uo(t,e){return t.transaction([to],e?"readwrite":"readonly").objectStore(to)}function oE(){const t=indexedDB.deleteDatabase(Up);return new ni(t).toPromise()}function gc(){const t=indexedDB.open(Up,iE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(to,{keyPath:Fp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(to)?e(s):(s.close(),await oE(),e(await gc()))})})}async function Mh(t,e,n){const s=Uo(t,!0).put({[Fp]:e,value:n});return new ni(s).toPromise()}async function aE(t,e){const n=Uo(t,!1).get(e),s=await new ni(n).toPromise();return s===void 0?null:s.value}function Lh(t,e){const n=Uo(t,!0).delete(e);return new ni(n).toPromise()}const cE=800,lE=3;class Bp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>lE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lo._getInstance(rE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nE(),!this.activeServiceWorker)return;this.sender=new eE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gc();return await Mh(e,eo,"1"),await Lh(e,eo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Mh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>aE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Uo(r,!1).getAll();return new ni(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bp.type="LOCAL";const uE=Bp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function dE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Kt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",hE().appendChild(s)})}function fE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Jr(3e4,6e4);/**
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
 */function pE(t,e){return e?en(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wl extends yl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gE(t){return xp(t.auth,new wl(t),t.bypassAuthState)}function mE(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),j0(n,new wl(t),t.bypassAuthState)}async function yE(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),$0(n,new wl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gE;case"linkViaPopup":case"linkViaRedirect":return yE;case"reauthViaPopup":case"reauthViaRedirect":return mE;default:Lt(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=new Jr(2e3,1e4);class Ts extends Vp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ts.currentPopupAction&&Ts.currentPopupAction.cancel(),Ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=_l();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,vE.get())};e()}}Ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="pendingRedirect",Fi=new Map;class wE extends Vp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Fi.get(this.auth._key());if(!e){try{const s=await bE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Fi.set(this.auth._key(),e)}return this.bypassAuthState||Fi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bE(t,e){const n=IE(e),s=TE(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function EE(t,e){Fi.set(t._key(),e)}function TE(t){return en(t._redirectPersistence)}function IE(t){return Ui(_E,t.config.apiKey,t.name)}async function SE(t,e,n=!1){const s=Mo(t),r=pE(s,e),o=await new wE(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=10*60*1e3;class AE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!$p(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Kt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uh(e))}saveEventToCache(e){this.cachedEventUids.add(Uh(e)),this.lastProcessedEventTime=Date.now()}}function Uh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $p({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $p(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RE(t,e={}){return Qs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xE=/^https?/;async function DE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RE(t);for(const n of e)try{if(PE(n))return}catch{}Lt(t,"unauthorized-domain")}function PE(t){const e=pc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!xE.test(n))return!1;if(NE.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const OE=new Jr(3e4,6e4);function Fh(){const t=zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ME(t){return new Promise((e,n)=>{var s,r,i;function o(){Fh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fh(),n(Kt(t,"network-request-failed"))},timeout:OE.get()})}if(!((r=(s=zt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=zt().gapi)===null||i===void 0)&&i.load)o();else{const a=fE("iframefcb");return zt()[a]=()=>{gapi.load?o():n(Kt(t,"network-request-failed"))},dE(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Bi=null,e})}let Bi=null;function LE(t){return Bi=Bi||ME(t),Bi}/**
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
 */const UE=new Jr(5e3,15e3),FE="__/auth/iframe",BE="emulator/auth/iframe",VE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$E=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jE(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pl(e,BE):`https://${t.config.authDomain}/${FE}`,s={apiKey:e.apiKey,appName:t.name,v:Ys},r=$E.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Qr(s).slice(1)}`}async function HE(t){const e=await LE(t),n=zt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:jE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VE,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Kt(t,"network-request-failed"),a=zt().setTimeout(()=>{i(o)},UE.get());function c(){zt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const qE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KE=500,zE=600,WE="_blank",GE="http://localhost";class Bh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XE(t,e,n,s=KE,r=zE){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},qE),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Be().toLowerCase();n&&(a=Ep(l)?WE:n),bp(l)&&(e=e||GE,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(k0(l)&&a!=="_self")return YE(e||"",a),new Bh(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new Bh(h)}function YE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const QE="__/auth/handler",JE="emulator/auth/handler";function Vh(t,e,n,s,r,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ys,eventId:r};if(e instanceof Rp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof ti){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${ZE(t)}?${Qr(a).slice(1)}`}function ZE({config:t}){return t.emulator?pl(t,JE):`https://${t.authDomain}/${QE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="webStorageSupport";class eT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mp,this._completeRedirectFn=SE,this._overrideRedirectResult=EE}async _openPopup(e,n,s,r){var i;rn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Vh(e,n,s,pc(),r);return XE(e,o,_l())}async _openRedirect(e,n,s,r){return await this._originValidation(e),tE(Vh(e,n,s,pc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(rn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await HE(e),s=new AE(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ka,{type:ka},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[ka];o!==void 0&&n(!!o),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ap()||ml()||Oo()}}const tT=eT;var $h="@firebase/auth",jh="0.20.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rT(t){Qn(new An("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{K(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),K(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kp(t)},u=new D0(a,c,l);return h0(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Qn(new An("auth-internal",e=>{const n=Mo(e.getProvider("auth").getImmediate());return(s=>new nT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt($h,jh,sT(t)),qt($h,jh,"esm2017")}/**
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
 */function iT(t=hl()){const e=Po(t,"auth");return e.isInitialized()?e.getImmediate():u0(t,{popupRedirectResolver:tT,persistence:[uE,J0,Mp]})}rT("Browser");var oT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},O,bl=bl||{},z=oT||self;function no(){}function mc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function si(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function aT(t){return Object.prototype.hasOwnProperty.call(t,Ra)&&t[Ra]||(t[Ra]=++cT)}var Ra="closure_uid_"+(1e9*Math.random()>>>0),cT=0;function lT(t,e,n){return t.call.apply(t.bind,arguments)}function uT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ye(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ye=lT:Ye=uT,Ye.apply(null,arguments)}function Ei(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function tt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Dn(){this.s=this.s,this.o=this.o}var hT=0,dT={};Dn.prototype.s=!1;Dn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),hT!=0)){var t=aT(this);delete dT[t]}};Dn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Hp=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function fT(t){e:{var e=rI;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Hh(t){return Array.prototype.concat.apply([],arguments)}function El(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function so(t){return/^[\s\xa0]*$/.test(t)}var qh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ht(t,e){return t.indexOf(e)!=-1}function Na(t,e){return t<e?-1:t>e?1:0}var dt;e:{var Kh=z.navigator;if(Kh){var zh=Kh.userAgent;if(zh){dt=zh;break e}}dt=""}function Tl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function qp(t){const e={};for(const n in t)e[n]=t[n];return e}var Wh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Kp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Wh.length;i++)n=Wh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Il(t){return Il[" "](t),t}Il[" "]=no;function pT(t){var e=yT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var gT=ht(dt,"Opera"),Us=ht(dt,"Trident")||ht(dt,"MSIE"),zp=ht(dt,"Edge"),yc=zp||Us,Wp=ht(dt,"Gecko")&&!(ht(dt.toLowerCase(),"webkit")&&!ht(dt,"Edge"))&&!(ht(dt,"Trident")||ht(dt,"MSIE"))&&!ht(dt,"Edge"),mT=ht(dt.toLowerCase(),"webkit")&&!ht(dt,"Edge");function Gp(){var t=z.document;return t?t.documentMode:void 0}var ro;e:{var xa="",Da=function(){var t=dt;if(Wp)return/rv:([^\);]+)(\)|;)/.exec(t);if(zp)return/Edge\/([\d\.]+)/.exec(t);if(Us)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(mT)return/WebKit\/(\S+)/.exec(t);if(gT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Da&&(xa=Da?Da[1]:""),Us){var Pa=Gp();if(Pa!=null&&Pa>parseFloat(xa)){ro=String(Pa);break e}}ro=xa}var yT={};function vT(){return pT(function(){let t=0;const e=qh(String(ro)).split("."),n=qh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Na(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Na(r[2].length==0,i[2].length==0)||Na(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var vc;if(z.document&&Us){var Gh=Gp();vc=Gh||parseInt(ro,10)||void 0}else vc=void 0;var _T=vc,wT=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",no,e),z.removeEventListener("test",no,e)}catch{}return t}();function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};function Lr(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Wp){e:{try{Il(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:bT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Lr.Z.h.call(this)}}tt(Lr,ot);var bT={2:"touch",3:"pen",4:"mouse"};Lr.prototype.h=function(){Lr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ri="closure_listenable_"+(1e6*Math.random()|0),ET=0;function TT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++ET,this.ca=this.fa=!1}function Fo(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Bo(t){this.src=t,this.g={},this.h=0}Bo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=wc(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new TT(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function _c(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=jp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Fo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function wc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var Sl="closure_lm_"+(1e6*Math.random()|0),Oa={};function Xp(t,e,n,s,r){if(s&&s.once)return Qp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Xp(t,e[i],n,s,r);return null}return n=kl(n),t&&t[ri]?t.N(e,n,si(s)?!!s.capture:!!s,r):Yp(t,e,n,!1,s,r)}function Yp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=si(r)?!!r.capture:!!r,a=Al(t);if(a||(t[Sl]=a=new Bo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=IT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)wT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Zp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function IT(){function t(n){return e.call(t.src,t.listener,n)}var e=ST;return t}function Qp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Qp(t,e[i],n,s,r);return null}return n=kl(n),t&&t[ri]?t.O(e,n,si(s)?!!s.capture:!!s,r):Yp(t,e,n,!0,s,r)}function Jp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Jp(t,e[i],n,s,r);else s=si(s)?!!s.capture:!!s,n=kl(n),t&&t[ri]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=wc(i,n,s,r),-1<n&&(Fo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Al(t))&&(e=t.g[e.toString()],t=-1,e&&(t=wc(e,n,s,r)),(n=-1<t?e[t]:null)&&Cl(n))}function Cl(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ri])_c(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Zp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Al(e))?(_c(n,t),n.h==0&&(n.src=null,e[Sl]=null)):Fo(t)}}}function Zp(t){return t in Oa?Oa[t]:Oa[t]="on"+t}function ST(t,e){if(t.ca)t=!0;else{e=new Lr(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Cl(t),t=n.call(s,e)}return t}function Al(t){return t=t[Sl],t instanceof Bo?t:null}var Ma="__closure_events_fn_"+(1e9*Math.random()>>>0);function kl(t){return typeof t=="function"?t:(t[Ma]||(t[Ma]=function(e){return t.handleEvent(e)}),t[Ma])}function $e(){Dn.call(this),this.i=new Bo(this),this.P=this,this.I=null}tt($e,Dn);$e.prototype[ri]=!0;$e.prototype.removeEventListener=function(t,e,n,s){Jp(this,t,e,n,s)};function Qe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var r=e;e=new ot(s,t),Kp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ti(o,s,!0,e)&&r}if(o=e.g=t,r=Ti(o,s,!0,e)&&r,r=Ti(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ti(o,s,!1,e)&&r}$e.prototype.M=function(){if($e.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Fo(n[s]);delete t.g[e],t.h--}}this.I=null};$e.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};$e.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ti(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&_c(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Rl=z.JSON.stringify;function CT(){var t=tg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class AT{constructor(){this.h=this.g=null}add(e,n){const s=eg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var eg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new kT,t=>t.reset());class kT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function RT(t){z.setTimeout(()=>{throw t},0)}function Nl(t,e){bc||NT(),Ec||(bc(),Ec=!0),tg.add(t,e)}var bc;function NT(){var t=z.Promise.resolve(void 0);bc=function(){t.then(xT)}}var Ec=!1,tg=new AT;function xT(){for(var t;t=CT();){try{t.h.call(t.g)}catch(n){RT(n)}var e=eg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ec=!1}function Vo(t,e){$e.call(this),this.h=t||1,this.g=e||z,this.j=Ye(this.kb,this),this.l=Date.now()}tt(Vo,$e);O=Vo.prototype;O.da=!1;O.S=null;O.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Qe(this,"tick"),this.da&&(xl(this),this.start()))}};O.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function xl(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}O.M=function(){Vo.Z.M.call(this),xl(this),delete this.g};function Dl(t,e,n){if(typeof t=="function")n&&(t=Ye(t,n));else if(t&&typeof t.handleEvent=="function")t=Ye(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function ng(t){t.g=Dl(()=>{t.g=null,t.i&&(t.i=!1,ng(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class DT extends Dn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ng(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ur(t){Dn.call(this),this.h=t,this.g={}}tt(Ur,Dn);var Xh=[];function sg(t,e,n,s){Array.isArray(n)||(n&&(Xh[0]=n.toString()),n=Xh);for(var r=0;r<n.length;r++){var i=Xp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function rg(t){Tl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Cl(e)},t),t.g={}}Ur.prototype.M=function(){Ur.Z.M.call(this),rg(this)};Ur.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $o(){this.g=!0}$o.prototype.Aa=function(){this.g=!1};function PT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function OT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Is(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+LT(t,n)+(s?" "+s:"")})}function MT(t,e){t.info(function(){return"TIMEOUT: "+e})}$o.prototype.info=function(){};function LT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Rl(n)}catch{return e}}var ls={},Yh=null;function jo(){return Yh=Yh||new $e}ls.Ma="serverreachability";function ig(t){ot.call(this,ls.Ma,t)}tt(ig,ot);function Fr(t){const e=jo();Qe(e,new ig(e,t))}ls.STAT_EVENT="statevent";function og(t,e){ot.call(this,ls.STAT_EVENT,t),this.stat=e}tt(og,ot);function ft(t){const e=jo();Qe(e,new og(e,t))}ls.Na="timingevent";function ag(t,e){ot.call(this,ls.Na,t),this.size=e}tt(ag,ot);function ii(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var Ho={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},cg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Pl(){}Pl.prototype.h=null;function Qh(t){return t.h||(t.h=t.i())}function lg(){}var oi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ol(){ot.call(this,"d")}tt(Ol,ot);function Ml(){ot.call(this,"c")}tt(Ml,ot);var Tc;function qo(){}tt(qo,Pl);qo.prototype.g=function(){return new XMLHttpRequest};qo.prototype.i=function(){return{}};Tc=new qo;function ai(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Ur(this),this.P=UT,t=yc?125:void 0,this.W=new Vo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ug}function ug(){this.i=null,this.g="",this.h=!1}var UT=45e3,Ic={},io={};O=ai.prototype;O.setTimeout=function(t){this.P=t};function Sc(t,e,n){t.K=1,t.v=zo(on(e)),t.s=n,t.U=!0,hg(t,null)}function hg(t,e){t.F=Date.now(),ci(t),t.A=on(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),vg(n.h,"t",s),t.C=0,n=t.l.H,t.h=new ug,t.g=Fg(t.l,n?e:null,!t.s),0<t.O&&(t.L=new DT(Ye(t.Ia,t,t.g),t.O)),sg(t.V,t.g,"readystatechange",t.gb),e=t.H?qp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Fr(1),PT(t.j,t.u,t.A,t.m,t.X,t.s)}O.gb=function(t){t=t.target;const e=this.L;e&&tn(t)==3?e.l():this.Ia(t)};O.Ia=function(t){try{if(t==this.g)e:{const u=tn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||yc||this.g&&(this.h.h||this.g.ga()||td(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Fr(3):Fr(2)),Ko(this);var n=this.g.ba();this.N=n;t:if(dg(this)){var s=td(this.g);t="";var r=s.length,i=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){$n(this),Er(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,OT(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!so(a)){var l=a;break t}}l=null}if(n=l)Is(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Cc(this,n);else{this.i=!1,this.o=3,ft(12),$n(this),Er(this);break e}}this.U?(fg(this,u,o),yc&&this.i&&u==3&&(sg(this.V,this.W,"tick",this.fb),this.W.start())):(Is(this.j,this.m,o,null),Cc(this,o)),u==4&&$n(this),this.i&&!this.I&&(u==4?Og(this.l,this):(this.i=!1,ci(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ft(12)):(this.o=0,ft(13)),$n(this),Er(this)}}}catch{}finally{}};function dg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function fg(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=FT(t,n),r==io){e==4&&(t.o=4,ft(14),s=!1),Is(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Ic){t.o=4,ft(15),Is(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Is(t.j,t.m,r,null),Cc(t,r);dg(t)&&r!=io&&r!=Ic&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ft(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ql(e),e.L=!0,ft(11))):(Is(t.j,t.m,n,"[Invalid Chunked Response]"),$n(t),Er(t))}O.fb=function(){if(this.g){var t=tn(this.g),e=this.g.ga();this.C<e.length&&(Ko(this),fg(this,t,e),this.i&&t!=4&&ci(this))}};function FT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?io:(n=Number(e.substring(n,s)),isNaN(n)?Ic:(s+=1,s+n>e.length?io:(e=e.substr(s,n),t.C=s+n,e)))}O.cancel=function(){this.I=!0,$n(this)};function ci(t){t.Y=Date.now()+t.P,pg(t,t.P)}function pg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ii(Ye(t.eb,t),e)}function Ko(t){t.B&&(z.clearTimeout(t.B),t.B=null)}O.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(MT(this.j,this.A),this.K!=2&&(Fr(3),ft(17)),$n(this),this.o=2,Er(this)):pg(this,this.Y-t)};function Er(t){t.l.G==0||t.I||Og(t.l,t)}function $n(t){Ko(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,xl(t.W),rg(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Cc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ac(n.i,t))){if(n.I=t.N,!t.J&&Ac(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)lo(n),Xo(n);else break e;Hl(n),ft(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=ii(Ye(n.ab,n),6e3));if(1>=bg(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else jn(n,11)}else if((t.J||n.g==t)&&lo(n),!so(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;!i.g&&(ht(y,"spdy")||ht(y,"quic")||ht(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Fl(i,i.h),i.h=null))}if(s.D){const T=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.sa=T,Ce(s.F,s.D,T))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Ug(s,s.H?s.la:null,s.W),o.J){Eg(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Ko(a),ci(a)),s.g=o}else Dg(s);0<n.l.length&&Yo(n)}else l[0]!="stop"&&l[0]!="close"||jn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?jn(n,7):jl(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Fr(4)}catch{}}function BT(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(mc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Ll(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(mc(t)||typeof t=="string")Hp(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(mc(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=BT(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function Zs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Zs)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}O=Zs.prototype;O.R=function(){Ul(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};O.T=function(){return Ul(this),this.g.concat()};function Ul(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];ts(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],ts(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}O.get=function(t,e){return ts(this.h,t)?this.h[t]:e};O.set=function(t,e){ts(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};O.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function ts(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var gg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function VT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ns(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ns){this.g=e!==void 0?e:t.g,oo(this,t.j),this.s=t.s,ao(this,t.i),co(this,t.m),this.l=t.l,e=t.h;var n=new Br;n.i=e.i,e.g&&(n.g=new Zs(e.g),n.h=e.h),Jh(this,n),this.o=t.o}else t&&(n=String(t).match(gg))?(this.g=!!e,oo(this,n[1]||"",!0),this.s=Tr(n[2]||""),ao(this,n[3]||"",!0),co(this,n[4]),this.l=Tr(n[5]||"",!0),Jh(this,n[6]||"",!0),this.o=Tr(n[7]||"")):(this.g=!!e,this.h=new Br(null,this.g))}ns.prototype.toString=function(){var t=[],e=this.j;e&&t.push(pr(e,Zh,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(pr(e,Zh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(pr(n,n.charAt(0)=="/"?KT:qT,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",pr(n,WT)),t.join("")};function on(t){return new ns(t)}function oo(t,e,n){t.j=n?Tr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ao(t,e,n){t.i=n?Tr(e,!0):e}function co(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Jh(t,e,n){e instanceof Br?(t.h=e,GT(t.h,t.g)):(n||(e=pr(e,zT)),t.h=new Br(e,t.g))}function Ce(t,e,n){t.h.set(e,n)}function zo(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $T(t){return t instanceof ns?on(t):new ns(t,void 0)}function jT(t,e,n,s){var r=new ns(null,void 0);return t&&oo(r,t),e&&ao(r,e),n&&co(r,n),s&&(r.l=s),r}function Tr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function pr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,HT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function HT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Zh=/[#\/\?@]/g,qT=/[#\?:]/g,KT=/[#\?]/g,zT=/[#\?@]/g,WT=/#/g;function Br(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Pn(t){t.g||(t.g=new Zs,t.h=0,t.i&&VT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=Br.prototype;O.add=function(t,e){Pn(this),this.i=null,t=er(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function mg(t,e){Pn(t),e=er(t,e),ts(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ts(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ul(t)))}function yg(t,e){return Pn(t),e=er(t,e),ts(t.g.h,e)}O.forEach=function(t,e){Pn(this),this.g.forEach(function(n,s){Hp(n,function(r){t.call(e,r,s,this)},this)},this)};O.T=function(){Pn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};O.R=function(t){Pn(this);var e=[];if(typeof t=="string")yg(this,t)&&(e=Hh(e,this.g.get(er(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Hh(e,t[n])}return e};O.set=function(t,e){return Pn(this),this.i=null,t=er(this,t),yg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function vg(t,e,n){mg(t,e),0<n.length&&(t.i=null,t.g.set(er(t,e),El(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function er(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function GT(t,e){e&&!t.j&&(Pn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(mg(this,s),vg(this,r,n))},t)),t.j=e}var XT=class{constructor(t,e){this.h=t,this.g=e}};function _g(t){this.l=t||YT,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ea&&z.g.Ea()&&z.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var YT=10;function wg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function bg(t){return t.h?1:t.g?t.g.size:0}function Ac(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Fl(t,e){t.g?t.g.add(e):t.h=e}function Eg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}_g.prototype.cancel=function(){if(this.i=Tg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Tg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return El(t.i)}function Bl(){}Bl.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};Bl.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function QT(){this.g=new Bl}function JT(t,e,n){const s=n||"";try{Ll(t,function(r,i){let o=r;si(r)&&(o=Rl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function ZT(t,e){const n=new $o;if(z.Image){const s=new Image;s.onload=Ei(Ii,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ei(Ii,n,s,"TestLoadImage: error",!1,e),s.onabort=Ei(Ii,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ei(Ii,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ii(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function li(t){this.l=t.$b||null,this.j=t.ib||!1}tt(li,Pl);li.prototype.g=function(){return new Wo(this.l,this.j)};li.prototype.i=function(t){return function(){return t}}({});function Wo(t,e){$e.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Vl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tt(Wo,$e);var Vl=0;O=Wo.prototype;O.open=function(t,e){if(this.readyState!=Vl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Vr(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ui(this)),this.readyState=Vl};O.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Vr(this)),this.g&&(this.readyState=3,Vr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof z.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ig(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ig(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}O.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ui(this):Vr(this),this.readyState==3&&Ig(this)}};O.Ua=function(t){this.g&&(this.response=this.responseText=t,ui(this))};O.Ta=function(t){this.g&&(this.response=t,ui(this))};O.ha=function(){this.g&&ui(this)};function ui(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Vr(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Vr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var eI=z.JSON.parse;function De(t){$e.call(this),this.headers=new Zs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Sg,this.K=this.L=!1}tt(De,$e);var Sg="",tI=/^https?$/i,nI=["POST","PUT"];O=De.prototype;O.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Tc.g(),this.C=this.u?Qh(this.u):Qh(Tc),this.g.onreadystatechange=Ye(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){ed(this,i);return}t=n||"";const r=new Zs(this.headers);s&&Ll(s,function(i,o){r.set(o,i)}),s=fT(r.T()),n=z.FormData&&t instanceof z.FormData,!(0<=jp(nI,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{kg(this),0<this.B&&((this.K=sI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ye(this.pa,this)):this.A=Dl(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ed(this,i)}};function sI(t){return Us&&vT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function rI(t){return t.toLowerCase()=="content-type"}O.pa=function(){typeof bl!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function ed(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Cg(t),Go(t)}function Cg(t){t.D||(t.D=!0,Qe(t,"complete"),Qe(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),Go(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Go(this,!0)),De.Z.M.call(this)};O.Fa=function(){this.s||(this.F||this.v||this.l?Ag(this):this.cb())};O.cb=function(){Ag(this)};function Ag(t){if(t.h&&typeof bl!="undefined"&&(!t.C[1]||tn(t)!=4||t.ba()!=2)){if(t.v&&tn(t)==4)Dl(t.Fa,0,t);else if(Qe(t,"readystatechange"),tn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(gg)[1]||null;if(!r&&z.self&&z.self.location){var i=z.self.location.protocol;r=i.substr(0,i.length-1)}s=!tI.test(r?r.toLowerCase():"")}n=s}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var o=2<tn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Cg(t)}}finally{Go(t)}}}}function Go(t,e){if(t.g){kg(t);const n=t.g,s=t.C[0]?no:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=s}catch{}}}function kg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function tn(t){return t.g?t.g.readyState:0}O.ba=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}};O.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),eI(e)}};function td(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Sg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Da=function(){return this.m};O.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function iI(t){let e="";return Tl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function $l(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=iI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function cr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Rg(t){this.za=0,this.l=[],this.h=new $o,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=cr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=cr("baseRetryDelayMs",5e3,t),this.$a=cr("retryDelaySeedMs",1e4,t),this.Ya=cr("forwardChannelMaxRetries",2,t),this.ra=cr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new _g(t&&t.concurrentRequestLimit),this.Ca=new QT,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}O=Rg.prototype;O.ma=8;O.G=1;function jl(t){if(Ng(t),t.G==3){var e=t.V++,n=on(t.F);Ce(n,"SID",t.J),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),hi(t,n),e=new ai(t,t.h,e,void 0),e.K=2,e.v=zo(on(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=Fg(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ci(e)}Lg(t)}O.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Xo(t){t.g&&(ql(t),t.g.cancel(),t.g=null)}function Ng(t){Xo(t),t.u&&(z.clearTimeout(t.u),t.u=null),lo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function La(t,e){t.l.push(new XT(t.Za++,e)),t.G==3&&Yo(t)}function Yo(t){wg(t.i)||t.m||(t.m=!0,Nl(t.Ha,t),t.C=0)}function oI(t,e){return bg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ii(Ye(t.Ha,t,e),Mg(t,t.C)),t.C++,!0)}O.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new ai(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=qp(i),Kp(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xg(this,r,e),n=on(this.F),Ce(n,"RID",t),Ce(n,"CVER",22),this.D&&Ce(n,"X-HTTP-Session-Id",this.D),hi(this,n),this.o&&i&&$l(n,this.o,i),Fl(this.i,r),this.Ra&&Ce(n,"TYPE","init"),this.ja?(Ce(n,"$req",e),Ce(n,"SID","null"),r.$=!0,Sc(r,n,null)):Sc(r,n,e),this.G=2}}else this.G==3&&(t?nd(this,t):this.l.length==0||wg(this.i)||nd(this))};function nd(t,e){var n;e?n=e.m:n=t.V++;const s=on(t.F);Ce(s,"SID",t.J),Ce(s,"RID",n),Ce(s,"AID",t.U),hi(t,s),t.o&&t.s&&$l(s,t.o,t.s),n=new ai(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=xg(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Fl(t.i,n),Sc(n,s,e)}function hi(t,e){t.j&&Ll({},function(n,s){Ce(e,s,n)})}function xg(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Ye(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{JT(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Dg(t){t.g||t.u||(t.Y=1,Nl(t.Ga,t),t.A=0)}function Hl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ii(Ye(t.Ga,t),Mg(t,t.A)),t.A++,!0)}O.Ga=function(){if(this.u=null,Pg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ii(Ye(this.bb,this),t)}};O.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ft(10),Xo(this),Pg(this))};function ql(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function Pg(t){t.g=new ai(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=on(t.oa);Ce(e,"RID","rpc"),Ce(e,"SID",t.J),Ce(e,"CI",t.N?"0":"1"),Ce(e,"AID",t.U),hi(t,e),Ce(e,"TYPE","xmlhttp"),t.o&&t.s&&$l(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=zo(on(e)),n.s=null,n.U=!0,hg(n,t)}O.ab=function(){this.v!=null&&(this.v=null,Xo(this),Hl(this),ft(19))};function lo(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function Og(t,e){var n=null;if(t.g==e){lo(t),ql(t),t.g=null;var s=2}else if(Ac(t.i,e))n=e.D,Eg(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=jo(),Qe(s,new ag(s,n,e,r)),Yo(t)}else Dg(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&oI(t,e)||s==2&&Hl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:jn(t,5);break;case 4:jn(t,10);break;case 3:jn(t,6);break;default:jn(t,2)}}}function Mg(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function jn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Ye(t.jb,t);n||(n=new ns("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||oo(n,"https"),zo(n)),ZT(n.toString(),s)}else ft(2);t.G=0,t.j&&t.j.va(e),Lg(t),Ng(t)}O.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ft(2)):(this.h.info("Failed to ping google.com"),ft(1))};function Lg(t){t.G=0,t.I=-1,t.j&&((Tg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,El(t.l),t.l.length=0),t.j.ua())}function Ug(t,e,n){let s=$T(n);if(s.i!="")e&&ao(s,e+"."+s.i),co(s,s.m);else{const r=z.location;s=jT(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Tl(t.aa,function(r,i){Ce(s,i,r)}),e=t.D,n=t.sa,e&&n&&Ce(s,e,n),Ce(s,"VER",t.ma),hi(t,s),s}function Fg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new De(new li({ib:!0})):new De(t.qa),e.L=t.H,e}function Bg(){}O=Bg.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Oa=function(){};function uo(){if(Us&&!(10<=Number(_T)))throw Error("Environmental error: no available transport.")}uo.prototype.g=function(t,e){return new Ct(t,e)};function Ct(t,e){$e.call(this),this.g=new Rg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!so(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!so(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new tr(this)}tt(Ct,$e);Ct.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Nl(Ye(t.hb,t,e))),ft(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ug(t,null,t.W),Yo(t)};Ct.prototype.close=function(){jl(this.g)};Ct.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,La(this.g,e)}else this.v?(e={},e.__data__=Rl(t),La(this.g,e)):La(this.g,t)};Ct.prototype.M=function(){this.g.j=null,delete this.j,jl(this.g),delete this.g,Ct.Z.M.call(this)};function Vg(t){Ol.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}tt(Vg,Ol);function $g(){Ml.call(this),this.status=1}tt($g,Ml);function tr(t){this.g=t}tt(tr,Bg);tr.prototype.xa=function(){Qe(this.g,"a")};tr.prototype.wa=function(t){Qe(this.g,new Vg(t))};tr.prototype.va=function(t){Qe(this.g,new $g(t))};tr.prototype.ua=function(){Qe(this.g,"b")};uo.prototype.createWebChannel=uo.prototype.g;Ct.prototype.send=Ct.prototype.u;Ct.prototype.open=Ct.prototype.m;Ct.prototype.close=Ct.prototype.close;Ho.NO_ERROR=0;Ho.TIMEOUT=8;Ho.HTTP_ERROR=6;cg.COMPLETE="complete";lg.EventType=oi;oi.OPEN="a";oi.CLOSE="b";oi.ERROR="c";oi.MESSAGE="d";$e.prototype.listen=$e.prototype.N;De.prototype.listenOnce=De.prototype.O;De.prototype.getLastError=De.prototype.La;De.prototype.getLastErrorCode=De.prototype.Da;De.prototype.getStatus=De.prototype.ba;De.prototype.getResponseJson=De.prototype.Qa;De.prototype.getResponseText=De.prototype.ga;De.prototype.send=De.prototype.ea;var aI=function(){return new uo},cI=function(){return jo()},Ua=Ho,lI=cg,uI=ls,sd={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},hI=li,Si=lg,dI=De;const rd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr="9.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new cl("@firebase/firestore");function id(){return ss.logLevel}function B(t,...e){if(ss.logLevel<=le.DEBUG){const n=e.map(Kl);ss.debug(`Firestore (${nr}): ${t}`,...n)}}function kn(t,...e){if(ss.logLevel<=le.ERROR){const n=e.map(Kl);ss.error(`Firestore (${nr}): ${t}`,...n)}}function od(t,...e){if(ss.logLevel<=le.WARN){const n=e.map(Kl);ss.warn(`Firestore (${nr}): ${t}`,...n)}}function Kl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${nr}) INTERNAL ASSERTION FAILED: `+t;throw kn(e),new Error(e)}function be(t,e){t||G()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class gI{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Sn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string"),new fI(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new gt(e)}}class mI{constructor(e,n,s){this.type="FirstParty",this.user=gt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class yI{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new mI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _I{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.p=n.token,new vI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class zl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zl.A=-1;class jg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=wI(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function he(t,e){return t<e?-1:t>e?1:0}function Fs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new at(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new at(0,0))}static max(){return new te(new at(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function us(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Hg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,s){n===void 0?n=0:n>e.length&&G(),s===void 0?s=e.length-n:s>e.length-n&&G(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return $r.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $r?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends $r{construct(e,n,s){return new Ae(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const bI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends $r{construct(e,n,s){return new mt(e,n,s)}static isValidIdentifier(e){return bI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new mt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new q(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new q(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new q(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.fields=e,e.sort(mt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new et(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const EI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(t){if(be(!!t),typeof t=="string"){let e=0;const n=EI.exec(t);if(be(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bs(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Kg(t){const e=t.mapValue.fields.__previous_value__;return qg(e)?Kg(e):e}function Hr(t){const e=Rn(t.mapValue.fields.__local_write_time__.timestampValue);return new at(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Vs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Vs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){return t==null}function ho(t){return t===0&&1/t==-1/0}function II(t){return typeof t=="number"&&Number.isInteger(t)&&!ho(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Ae.fromString(e))}static fromName(e){return new H(Ae.fromString(e).popFirst(5))}static empty(){return new H(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Ae(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qg(t)?4:SI(t)?9007199254740991:10:G()}function Yt(t,e){if(t===e)return!0;const n=rs(t);if(n!==rs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hr(t).isEqual(Hr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Rn(s.timestampValue),o=Rn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Bs(s.bytesValue).isEqual(Bs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return xe(s.geoPointValue.latitude)===xe(r.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return xe(s.integerValue)===xe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=xe(s.doubleValue),o=xe(r.doubleValue);return i===o?ho(i)===ho(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Fs(t.arrayValue.values||[],e.arrayValue.values||[],Yt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(ad(i)!==ad(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Yt(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function qr(t,e){return(t.values||[]).find(n=>Yt(n,e))!==void 0}function $s(t,e){if(t===e)return 0;const n=rs(t),s=rs(e);if(n!==s)return he(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=xe(r.integerValue||r.doubleValue),a=xe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return cd(t.timestampValue,e.timestampValue);case 4:return cd(Hr(t),Hr(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Bs(r),a=Bs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=he(o[c],a[c]);if(l!==0)return l}return he(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=he(xe(r.latitude),xe(i.latitude));return o!==0?o:he(xe(r.longitude),xe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=$s(o[c],a[c]);if(l)return l}return he(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ci.mapValue&&i===Ci.mapValue)return 0;if(r===Ci.mapValue)return 1;if(i===Ci.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=he(a[u],l[u]);if(h!==0)return h;const d=$s(o[a[u]],c[l[u]]);if(d!==0)return d}return he(a.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function cd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Rn(t),s=Rn(e),r=he(n.seconds,s.seconds);return r!==0?r:he(n.nanos,s.nanos)}function xs(t){return kc(t)}function kc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Rn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Bs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=kc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${kc(s.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function Rc(t){return!!t&&"integerValue"in t}function Wl(t){return!!t&&"arrayValue"in t}function ld(t){return!!t&&"nullValue"in t}function ud(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vi(t){return!!t&&"mapValue"in t}function Ir(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return us(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ir(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ir(t.arrayValue.values[n]);return e}return Object.assign({},t)}function SI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Vi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ir(n)}setAll(e){let n=mt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ir(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Vi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Vi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){us(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new bt(Ir(this.value))}}function zg(t){const e=[];return us(t.fields,(n,s)=>{const r=new mt([n]);if(Vi(s)){const i=zg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new jr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new it(e,0,te.min(),te.min(),bt.empty(),0)}static newFoundDocument(e,n,s){return new it(e,1,n,te.min(),s,0)}static newNoDocument(e,n){return new it(e,2,n,te.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,te.min(),bt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function CI(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=te.fromTimestamp(s===1e9?new at(n+1,0):new at(n,s));return new is(r,H.empty(),e)}function AI(t){return new is(t.readTime,t.key,-1)}class is{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new is(te.min(),H.empty(),-1)}static max(){return new is(te.max(),H.empty(),-1)}}function kI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ai(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ai(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ai(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ai(this.root,e,this.comparator,!0)}}class Ai{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:qe.RED,this.left=r!=null?r:qe.EMPTY,this.right=i!=null?i:qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new qe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return qe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,s,r){return this}insert(t,e,n){return new qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hd(this.data.getIterator())}getIteratorFrom(e){return new hd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class hd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class RI{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function dd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new RI(t,e,n,s,r,i,o)}function Gl(t){const e=Y(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+xs(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Qo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>xs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>xs(s)).join(",")),e.P=n}return e.P}function NI(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${xs(s.value)}`;var s}).join(", ")}]`),Qo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>xs(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>xs(n)).join(",")),`Target(${e})`}function Xl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!FI(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Yt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pd(t.startAt,e.startAt)&&pd(t.endAt,e.endAt)}function Nc(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class yt extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,s):new xI(e,n,s):n==="array-contains"?new OI(e,s):n==="in"?new MI(e,s):n==="not-in"?new LI(e,s):n==="array-contains-any"?new UI(e,s):new yt(e,n,s)}static V(e,n,s){return n==="in"?new DI(e,s):new PI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v($s(n,this.value)):n!==null&&rs(this.value)===rs(n)&&this.v($s(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class xI extends yt{constructor(e,n,s){super(e,n,s),this.key=H.fromName(s.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.v(n)}}class DI extends yt{constructor(e,n){super(e,"in",n),this.keys=Wg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class PI extends yt{constructor(e,n){super(e,"not-in",n),this.keys=Wg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Wg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>H.fromName(s.referenceValue))}class OI extends yt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Wl(n)&&qr(n.arrayValue,this.value)}}class MI extends yt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qr(this.value.arrayValue,n)}}class LI extends yt{constructor(e,n){super(e,"not-in",n)}matches(e){if(qr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!qr(this.value.arrayValue,n)}}class UI extends yt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Wl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>qr(this.value.arrayValue,s))}}class fo{constructor(e,n){this.position=e,this.inclusive=n}}class Sr{constructor(e,n="asc"){this.field=e,this.dir=n}}function FI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function fd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=H.comparator(H.fromName(o.referenceValue),n.key):s=$s(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function pd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function BI(t,e,n,s,r,i,o,a){return new Jo(t,e,n,s,r,i,o,a)}function Yl(t){return new Jo(t)}function VI(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $I(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function jI(t){for(const e of t.filters)if(e.S())return e.field;return null}function HI(t){return t.collectionGroup!==null}function Kr(t){const e=Y(t);if(e.D===null){e.D=[];const n=jI(e),s=$I(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new Sr(n)),e.D.push(new Sr(mt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Sr(mt.keyField(),i))}}}return e.D}function os(t){const e=Y(t);if(!e.C)if(e.limitType==="F")e.C=dd(e.path,e.collectionGroup,Kr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Kr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Sr(i.field,o))}const s=e.endAt?new fo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new fo(e.startAt.position,e.startAt.inclusive):null;e.C=dd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.C}function qI(t,e,n){return new Jo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zo(t,e){return Xl(os(t),os(e))&&t.limitType===e.limitType}function Gg(t){return`${Gl(os(t))}|lt:${t.limitType}`}function xc(t){return`Query(target=${NI(os(t))}; limitType=${t.limitType})`}function Ql(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):H.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=fd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Kr(n),s)||n.endAt&&!function(r,i,o){const a=fd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Kr(n),s))}(t,e)}function KI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xg(t){return(e,n)=>{let s=!1;for(const r of Kr(t)){const i=zI(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function zI(t,e,n){const s=t.field.isKeyField()?H.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?$s(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ho(e)?"-0":e}}function Qg(t){return{integerValue:""+t}}function WI(t,e){return II(e)?Qg(e):Yg(t,e)}/**
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
 */class ea{constructor(){this._=void 0}}function GI(t,e,n){return t instanceof po?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof zr?Zg(t,e):t instanceof Wr?em(t,e):function(s,r){const i=Jg(s,r),o=gd(i)+gd(s.k);return Rc(i)&&Rc(s.k)?Qg(o):Yg(s.M,o)}(t,e)}function XI(t,e,n){return t instanceof zr?Zg(t,e):t instanceof Wr?em(t,e):n}function Jg(t,e){return t instanceof go?Rc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class po extends ea{}class zr extends ea{constructor(e){super(),this.elements=e}}function Zg(t,e){const n=tm(e);for(const s of t.elements)n.some(r=>Yt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Wr extends ea{constructor(e){super(),this.elements=e}}function em(t,e){let n=tm(e);for(const s of t.elements)n=n.filter(r=>!Yt(r,s));return{arrayValue:{values:n}}}class go extends ea{constructor(e,n){super(),this.M=e,this.k=n}}function gd(t){return xe(t.integerValue||t.doubleValue)}function tm(t){return Wl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function YI(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof zr&&s instanceof zr||n instanceof Wr&&s instanceof Wr?Fs(n.elements,s.elements,Yt):n instanceof go&&s instanceof go?Yt(n.k,s.k):n instanceof po&&s instanceof po}(t.transform,e.transform)}class QI{constructor(e,n){this.version=e,this.transformResults=n}}class Wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wn}static exists(e){return new Wn(void 0,e)}static updateTime(e){return new Wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $i(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ta{}function JI(t,e,n){t instanceof na?function(s,r,i){const o=s.value.clone(),a=vd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof sr?function(s,r,i){if(!$i(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=vd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(nm(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Dc(t,e,n){t instanceof na?function(s,r,i){if(!$i(s.precondition,r))return;const o=s.value.clone(),a=_d(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(yd(r),o).setHasLocalMutations()}(t,e,n):t instanceof sr?function(s,r,i){if(!$i(s.precondition,r))return;const o=_d(s.fieldTransforms,i,r),a=r.data;a.setAll(nm(s)),a.setAll(o),r.convertToFoundDocument(yd(r),a).setHasLocalMutations()}(t,e,n):function(s,r){$i(s.precondition,r)&&r.convertToNoDocument(te.min())}(t,e)}function ZI(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Jg(s.transform,r||null);i!=null&&(n==null&&(n=bt.empty()),n.set(s.field,i))}return n||null}function md(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Fs(n,s,(r,i)=>YI(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function yd(t){return t.isFoundDocument()?t.version:te.min()}class na extends ta{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class sr extends ta{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function nm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function vd(t,e,n){const s=new Map;be(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,XI(o,a,n[r]))}return s}function _d(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,GI(i,o,e))}return s}class e1 extends ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class t1 extends ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,re;function s1(t){switch(t){default:return G();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function sm(t){if(t===void 0)return kn("GRPC error has no .code"),S.UNKNOWN;switch(t){case Ne.OK:return S.OK;case Ne.CANCELLED:return S.CANCELLED;case Ne.UNKNOWN:return S.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return S.INTERNAL;case Ne.UNAVAILABLE:return S.UNAVAILABLE;case Ne.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ne.NOT_FOUND:return S.NOT_FOUND;case Ne.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ne.ABORTED:return S.ABORTED;case Ne.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ne.DATA_LOSS:return S.DATA_LOSS;default:return G()}}(re=Ne||(Ne={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){us(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Hg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=new je(H.comparator);function as(){return r1}const i1=new je(H.comparator);function Pc(...t){let e=i1;for(const n of t)e=e.insert(n.key,n);return e}function Fa(){return new rr(t=>t.toString(),(t,e)=>t.isEqual(e))}const o1=new je(H.comparator),a1=new Je(H.comparator);function Ie(...t){let e=a1;for(const n of t)e=e.add(n);return e}const c1=new Je(he);function rm(){return c1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,di.createSynthesizedTargetChangeForCurrentChange(e,n)),new sa(te.min(),s,rm(),as(),Ie())}}class di{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new di(et.EMPTY_BYTE_STRING,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n,s,r){this.O=e,this.removedTargetIds=n,this.key=s,this.F=r}}class im{constructor(e,n){this.targetId=e,this.$=n}}class om{constructor(e,n,s=et.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class wd{constructor(){this.B=0,this.L=Ed(),this.U=et.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=Ie(),n=Ie(),s=Ie();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:G()}}),new di(this.U,this.q,e,n,s)}J(){this.K=!1,this.L=Ed()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class l1{constructor(e){this.nt=e,this.st=new Map,this.it=as(),this.rt=bd(),this.ot=new Je(he)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const s=this.lt(n);switch(e.state){case 0:this.ft(n)&&s.W(e.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((s,r)=>{this.ft(r)&&n(r)})}_t(e){const n=e.targetId,s=e.$.count,r=this.wt(n);if(r){const i=r.target;if(Nc(i))if(s===0){const o=new H(i.path);this.ct(n,o,it.newNoDocument(o,te.min()))}else be(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Nc(a.target)){const c=new H(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,it.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let s=Ie();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const r=new sa(e,n,this.ot,this.it,s);return this.it=as(),this.rt=bd(),this.ot=new Je(he),r}at(e,n){if(!this.ft(e))return;const s=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,s){if(!this.ft(e))return;const r=this.lt(e);this.It(e,n)?r.Y(n,1):r.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),s&&(this.it=this.it.insert(n,s))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new wd,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new Je(he),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new wd),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function bd(){return new je(H.comparator)}function Ed(){return new je(H.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),h1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class d1{constructor(e,n){this.databaseId=e,this.N=n}}function mo(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function am(t,e){return t.N?e.toBase64():e.toUint8Array()}function f1(t,e){return mo(t,e.toTimestamp())}function nn(t){return be(!!t),te.fromTimestamp(function(e){const n=Rn(e);return new at(n.seconds,n.nanos)}(t))}function Jl(t,e){return function(n){return new Ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function cm(t){const e=Ae.fromString(t);return be(hm(e)),e}function Oc(t,e){return Jl(t.databaseId,e.path)}function Ba(t,e){const n=cm(e);if(n.get(1)!==t.databaseId.projectId)throw new q(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(lm(n))}function Mc(t,e){return Jl(t.databaseId,e)}function p1(t){const e=cm(t);return e.length===4?Ae.emptyPath():lm(e)}function Lc(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function lm(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Td(t,e,n){return{name:Oc(t,e),fields:n.value.mapValue.fields}}function g1(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.N?(be(l===void 0||typeof l=="string"),et.fromBase64String(l||"")):(be(l===void 0||l instanceof Uint8Array),et.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?S.UNKNOWN:sm(c.code);return new q(l,c.message||"")}(o);n=new om(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ba(t,s.document.name),i=nn(s.document.updateTime),o=new bt({mapValue:{fields:s.document.fields}}),a=it.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new ji(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ba(t,s.document),i=s.readTime?nn(s.readTime):te.min(),o=it.newNoDocument(r,i),a=s.removedTargetIds||[];n=new ji([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ba(t,s.document),i=s.removedTargetIds||[];n=new ji([],i,r,null)}else{if(!("filter"in e))return G();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new n1(r),o=s.targetId;n=new im(o,i)}}return n}function m1(t,e){let n;if(e instanceof na)n={update:Td(t,e.key,e.value)};else if(e instanceof e1)n={delete:Oc(t,e.key)};else if(e instanceof sr)n={update:Td(t,e.key,e.data),updateMask:C1(e.fieldMask)};else{if(!(e instanceof t1))return G();n={verify:Oc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof po)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof zr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Wr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof go)return{fieldPath:i.field.canonicalString(),increment:o.k};throw G()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:f1(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:G()}(t,e.precondition)),n}function y1(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?nn(s.updateTime):nn(r);return i.isEqual(te.min())&&(i=nn(r)),new QI(i,s.transformResults||[])}(n,e))):[]}function v1(t,e){return{documents:[Mc(t,e.path)]}}function _1(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Mc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Mc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(ud(h.value))return{unaryFilter:{field:vs(h.field),op:"IS_NAN"}};if(ld(h.value))return{unaryFilter:{field:vs(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(ud(h.value))return{unaryFilter:{field:vs(h.field),op:"IS_NOT_NAN"}};if(ld(h.value))return{unaryFilter:{field:vs(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vs(h.field),op:T1(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:vs(u.field),direction:E1(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.N||Qo(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function w1(t){let e=p1(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){be(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=um(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Sr(Ss(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Qo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new fo(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new fo(d,h)}(n.endAt)),BI(e,r,o,i,a,"F",c,l)}function b1(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function um(t){return t?t.unaryFilter!==void 0?[S1(t)]:t.fieldFilter!==void 0?[I1(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>um(e)).reduce((e,n)=>e.concat(n)):G():[]}function E1(t){return u1[t]}function T1(t){return h1[t]}function vs(t){return{fieldPath:t.canonicalString()}}function Ss(t){return mt.fromServerFormat(t.fieldPath)}function I1(t){return yt.create(Ss(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}function S1(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ss(t.unaryFilter.field);return yt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ss(t.unaryFilter.field);return yt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ss(t.unaryFilter.field);return yt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ss(t.unaryFilter.field);return yt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return G()}}function C1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function hm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class k1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,s)=>{n(e)})}static reject(e){return new k((n,s)=>{s(e)})}static waitFor(e){return new k((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=k.resolve(!1);for(const s of e)n=n.next(r=>r?k.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function fi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&JI(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Dc(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Dc(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(te.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&Fs(this.mutations,e.mutations,(n,s)=>md(n,s))&&Fs(this.baseMutations,e.baseMutations,(n,s)=>md(n,s))}}class Zl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){be(e.mutations.length===s.length);let r=o1;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Zl(e,n,s,r)}}/**
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
 */class N1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Gn{constructor(e,n,s,r,i=te.min(),o=te.min(),a=et.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.Jt=e}}function D1(t){const e=w1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qI(e,e.limit,"L"):e}/**
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
 */class P1{constructor(){this.qe=new O1}addToCollectionParentIndex(e,n){return this.qe.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(is.min())}updateCollectionGroup(e,n,s){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class O1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Je(Ae.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Je(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new js(0)}static yn(){return new js(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==A1)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(){this.changes=new rr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?k.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,s){this.ds=e,this.Bs=n,this.indexManager=s}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.Us(e,n,s))}Us(e,n,s){return this.ds.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}qs(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}Ks(e,n){return this.ds.getEntries(e,n).next(s=>this.Gs(e,s).next(()=>s))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.qs(n,s))}Qs(e,n,s){return function(r){return H.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.js(e,n.path):HI(n)?this.Ws(e,n,s):this.zs(e,n,s)}js(e,n){return this.Ls(e,new H(n)).next(s=>{let r=Pc();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Ws(e,n,s){const r=n.collectionGroup;let i=Pc();return this.indexManager.getCollectionParents(e,r).next(o=>k.forEach(o,a=>{const c=function(l,u){return new Jo(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.zs(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}zs(e,n,s){let r;return this.ds.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let l=r.get(c);l==null&&(l=it.newInvalidDocument(c),r=r.insert(c,l)),Dc(a,l,o.localWriteTime),l.isFoundDocument()||(r=r.remove(c))}}).next(()=>(r.forEach((i,o)=>{Ql(n,o)||(r=r.remove(i))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Hs=s,this.Js=r}static Ys(e,n){let s=Ie(),r=Ie();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new eu(e,n.fromCache,s,r)}}/**
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
 */class U1{constructor(){this.Xs=!1}initialize(e,n){this.Zs=e,this.indexManager=n,this.Xs=!0}Qs(e,n,s,r){return this.ti(e,n).next(i=>i||this.ei(e,n,r,s)).next(i=>i||this.ni(e,n))}ti(e,n){return k.resolve(null)}ei(e,n,s,r){return VI(n)||r.isEqual(te.min())?this.ni(e,n):this.Zs.Ks(e,s).next(i=>{const o=this.si(n,i);return this.ii(n,o,s,r)?this.ni(e,n):(id()<=le.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),xc(n)),this.ri(e,o,n,CI(r,-1)))})}si(e,n){let s=new Je(Xg(e));return n.forEach((r,i)=>{Ql(e,i)&&(s=s.add(i))}),s}ii(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ni(e,n){return id()<=le.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",xc(n)),this.Zs.Qs(e,n,is.min())}ri(e,n,s,r){return this.Zs.Qs(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n,s,r){this.persistence=e,this.oi=n,this.M=r,this.ui=new je(he),this.ai=new rr(i=>Gl(i),Xl),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(s)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new L1(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ui))}}function B1(t,e,n,s){return new F1(t,e,n,s)}async function dm(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.Bs.getAllMutationBatches(s).next(i=>(r=i,n.li(e),n.Bs.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Ie();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.fi.Ks(s,c).next(l=>({di:l,removedBatchIds:o,addedBatchIds:a}))})})}function V1(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.hi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=k.resolve();return h.forEach(m=>{d=d.next(()=>l.getEntry(a,m)).next(y=>{const T=c.docVersions.get(m);be(T!==null),y.version.compareTo(T)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),d.next(()=>o.Bs.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.Bs.performConsistencyCheck(s)).next(()=>n.fi.Ks(s,r))})}function fm(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function $1(t,e){const n=Y(t),s=e.snapshotVersion;let r=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hi.newChangeBuffer({trackRemovals:!0});r=n.ui;const a=[];e.targetChanges.forEach((l,u)=>{const h=r.get(u);if(!h)return;a.push(n.fs.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.fs.addMatchingKeys(i,l.addedDocuments,u)));let d=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?d=d.withResumeToken(et.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,s)),r=r.insert(u,d),function(m,y,T){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(h,d,l)&&a.push(n.fs.updateTargetData(i,d))});let c=as();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(j1(i,o,e.documentUpdates).next(l=>{c=l})),!s.isEqual(te.min())){const l=n.fs.getLastRemoteSnapshotVersion(i).next(u=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return k.waitFor(a).next(()=>o.apply(i)).next(()=>n.fi.Gs(i,c)).next(()=>c)}).then(i=>(n.ui=r,i))}function j1(t,e,n){let s=Ie();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let i=as();return n.forEach((o,a)=>{const c=r.get(o);a.isNoDocument()&&a.version.isEqual(te.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):B("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function H1(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(s,e)))}function q1(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.fs.getTargetData(s,e).next(i=>i?(r=i,k.resolve(r)):n.fs.allocateTargetId(s).next(o=>(r=new Gn(e,o,0,s.currentSequenceNumber),n.fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ui=n.ui.insert(s.targetId,s),n.ai.set(e,s.targetId)),s})}async function Uc(t,e,n){const s=Y(t),r=s.ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!fi(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ui=s.ui.remove(e),s.ai.delete(r.target)}function Id(t,e,n){const s=Y(t);let r=te.min(),i=Ie();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Y(a),h=u.ai.get(l);return h!==void 0?k.resolve(u.ui.get(h)):u.fs.getTargetData(c,l)}(s,o,os(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.oi.Qs(o,e,n?r:te.min(),n?i:Ie())).next(a=>(K1(s,KI(e),a),{documents:a,_i:i})))}function K1(t,e,n){let s=te.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.ci.set(e,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,n){return k.resolve(this.yi.get(n))}saveBundleMetadata(e,n){var s;return this.yi.set(n.id,{id:(s=n).id,version:s.version,createTime:nn(s.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.pi.get(n))}saveNamedQuery(e,n){return this.pi.set(n.name,function(s){return{name:s.name,query:D1(s.bundledQuery),readTime:nn(s.readTime)}}(n)),k.resolve()}}/**
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
 */class W1{constructor(){this.overlays=new je(H.comparator),this.Ii=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.Xt(e,n,i)}),k.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Ii.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ii.delete(s)),k.resolve()}getOverlaysForCollection(e,n,s){const r=Fa(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return k.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new je((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Fa(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Fa(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return k.resolve(a)}Xt(e,n,s){if(s===null)return;const r=this.overlays.get(s.key);if(r!==null){const o=this.Ii.get(r.largestBatchId).delete(s.key);this.Ii.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new N1(n,s));let i=this.Ii.get(n);i===void 0&&(i=Ie(),this.Ii.set(n,i)),this.Ii.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(){this.Ti=new Je(Le.Ei),this.Ai=new Je(Le.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,n){const s=new Le(e,n);this.Ti=this.Ti.add(s),this.Ai=this.Ai.add(s)}bi(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Pi(new Le(e,n))}Vi(e,n){e.forEach(s=>this.removeReference(s,n))}vi(e){const n=new H(new Ae([])),s=new Le(n,e),r=new Le(n,e+1),i=[];return this.Ai.forEachInRange([s,r],o=>{this.Pi(o),i.push(o.key)}),i}Si(){this.Ti.forEach(e=>this.Pi(e))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const n=new H(new Ae([])),s=new Le(n,e),r=new Le(n,e+1);let i=Ie();return this.Ai.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Le(e,0),s=this.Ti.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Le{constructor(e,n){this.key=e,this.Ci=n}static Ei(e,n){return H.comparator(e.key,n.key)||he(e.Ci,n.Ci)}static Ri(e,n){return he(e.Ci,n.Ci)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.xi=1,this.Ni=new Je(Le.Ei)}checkEmpty(e){return k.resolve(this.Bs.length===0)}addMutationBatch(e,n,s,r){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new R1(i,n,s,r);this.Bs.push(o);for(const a of r)this.Ni=this.Ni.add(new Le(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.ki(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Mi(s),i=r<0?0:r;return k.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(e){return k.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Le(n,0),r=new Le(n,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([s,r],o=>{const a=this.ki(o.Ci);i.push(a)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Je(he);return n.forEach(r=>{const i=new Le(r,0),o=new Le(r,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([i,o],a=>{s=s.add(a.Ci)})}),k.resolve(this.Oi(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;H.isDocumentKey(i)||(i=i.child(""));const o=new Le(new H(i),0);let a=new Je(he);return this.Ni.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Ci)),!0)},o),k.resolve(this.Oi(a))}Oi(e){const n=[];return e.forEach(s=>{const r=this.ki(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){be(this.Fi(n.batchId,"removed")===0),this.Bs.shift();let s=this.Ni;return k.forEach(n.mutations,r=>{const i=new Le(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Ni=s})}_n(e){}containsKey(e,n){const s=new Le(n,0),r=this.Ni.firstAfterOrEqual(s);return k.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,k.resolve()}Fi(e,n){return this.Mi(e)}Mi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}ki(e){const n=this.Mi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e){this.$i=e,this.docs=new je(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.$i(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return k.resolve(s?s.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let s=as();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():it.newInvalidDocument(r))}),k.resolve(s)}getAllFromCollection(e,n,s){let r=as();const i=new H(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||kI(AI(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return k.resolve(r)}getAllFromCollectionGroup(e,n,s,r){G()}Bi(e,n){return k.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Y1(this)}getSize(e){return k.resolve(this.size)}}class Y1 extends M1{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(s)}),k.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e){this.persistence=e,this.Li=new rr(n=>Gl(n),Xl),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Ui=0,this.qi=new tu,this.targetCount=0,this.Ki=js.gn()}forEachTarget(e,n){return this.Li.forEach((s,r)=>n(r)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ui&&(this.Ui=n),k.resolve()}Tn(e){this.Li.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ki=new js(n),this.highestTargetId=n),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Tn(n),k.resolve()}removeTargetData(e,n){return this.Li.delete(n.target),this.qi.vi(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Li.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Li.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),k.waitFor(i).next(()=>r)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const s=this.Li.get(n)||null;return k.resolve(s)}addMatchingKeys(e,n,s){return this.qi.bi(n,s),k.resolve()}removeMatchingKeys(e,n,s){this.qi.Vi(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qi.vi(n),k.resolve()}getMatchingKeysForTargetId(e,n){const s=this.qi.Di(n);return k.resolve(s)}containsKey(e,n){return k.resolve(this.qi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n){this.Gi={},this.overlays={},this.es=new zl(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new Q1(this),this.indexManager=new P1,this.ds=function(s){return new X1(s)}(s=>this.referenceDelegate.Qi(s)),this.M=new x1(n),this._s=new z1(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new W1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Gi[e.toKey()];return s||(s=new G1(n,this.referenceDelegate),this.Gi[e.toKey()]=s),s}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,s){B("MemoryPersistence","Starting transaction:",e);const r=new Z1(this.es.next());return this.referenceDelegate.ji(),s(r).next(i=>this.referenceDelegate.Wi(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}zi(e,n){return k.or(Object.values(this.Gi).map(s=>()=>s.containsKey(e,n)))}}class Z1 extends k1{constructor(e){super(),this.currentSequenceNumber=e}}class nu{constructor(e){this.persistence=e,this.Hi=new tu,this.Ji=null}static Yi(e){return new nu(e)}get Xi(){if(this.Ji)return this.Ji;throw G()}addReference(e,n,s){return this.Hi.addReference(s,n),this.Xi.delete(s.toString()),k.resolve()}removeReference(e,n,s){return this.Hi.removeReference(s,n),this.Xi.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Xi.add(n.toString()),k.resolve()}removeTarget(e,n){this.Hi.vi(n.targetId).forEach(r=>this.Xi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Xi.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ji(){this.Ji=new Set}Wi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Xi,s=>{const r=H.fromPath(s);return this.Zi(e,r).next(i=>{i||n.removeEntry(r,te.min())})}).next(()=>(this.Ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zi(e,n).next(s=>{s?this.Xi.delete(n.toString()):this.Xi.add(n.toString())})}Qi(e){return 0}Zi(e,n){return k.or([()=>k.resolve(this.Hi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zi(e,n)])}}class Sd{constructor(){this.activeTargetIds=rm()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eS{constructor(){this.Ur=new Sd,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Sd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class tS{Kr(e){}shutdown(){}}/**
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
 */class Cd{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.uo=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,r,i){const o=this.ho(e,n);B("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(B("RestConnection","Received: ",c),c),c=>{throw od("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i){return this.co(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+nr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=nS[e];return`${this.uo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new dI;a.listenOnce(lI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ua.NO_ERROR:const l=a.getResponseJson();B("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Ua.TIMEOUT:B("Connection",'RPC "'+e+'" timed out'),o(new q(S.DEADLINE_EXCEEDED,"Request time out"));break;case Ua.HTTP_ERROR:const u=a.getStatus();if(B("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(y)>=0?y:S.UNKNOWN}(h.status);o(new q(d,h.message))}else o(new q(S.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new q(S.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{B("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=aI(),o=cI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new hI({})),this.lo(a.initMessageHeaders,n,s),ip()||ap()||Hw()||cp()||qw()||op()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");B("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new sS({Jr:y=>{h?B("Connection","Not sending because WebChannel is closed:",y):(u||(B("Connection","Opening WebChannel transport."),l.open(),u=!0),B("Connection","WebChannel sending:",y),l.send(y))},Yr:()=>l.close()}),m=(y,T,_)=>{y.listen(T,C=>{try{_(C)}catch(D){setTimeout(()=>{throw D},0)}})};return m(l,Si.EventType.OPEN,()=>{h||B("Connection","WebChannel transport opened.")}),m(l,Si.EventType.CLOSE,()=>{h||(h=!0,B("Connection","WebChannel transport closed"),d.ro())}),m(l,Si.EventType.ERROR,y=>{h||(h=!0,od("Connection","WebChannel transport errored:",y),d.ro(new q(S.UNAVAILABLE,"The operation could not be completed")))}),m(l,Si.EventType.MESSAGE,y=>{var T;if(!h){const _=y.data[0];be(!!_);const C=_,D=C.error||((T=C[0])===null||T===void 0?void 0:T.error);if(D){B("Connection","WebChannel received error:",D);const F=D.status;let L=function(de){const Q=Ne[de];if(Q!==void 0)return sm(Q)}(F),ce=D.message;L===void 0&&(L=S.INTERNAL,ce="Unknown error status: "+F+" with message "+D.message),h=!0,d.ro(new q(L,ce)),l.close()}else B("Connection","WebChannel received:",_),d.oo(_)}}),m(o,uI.STAT_EVENT,y=>{y.stat===sd.PROXY?B("Connection","Detected buffering proxy"):y.stat===sd.NOPROXY&&B("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.io()},0),d}}function Va(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t){return new d1(t,!0)}class pm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Yn=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&B("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n,s,r,i,o,a,c){this.Yn=e,this.Vo=s,this.vo=r,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new pm(e,n)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Do===n&&this.Qo(s,r)},s=>{e(()=>{const r=new q(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(r)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(r=>{s(()=>this.jo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Yn.enqueueAndForget(()=>this.Do===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iS extends gm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.M=i}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=g1(this.M,e),s=function(r){if(!("targetChange"in r))return te.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?te.min():i.readTime?nn(i.readTime):te.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=Lc(this.M),n.addTarget=function(r,i){let o;const a=i.target;return o=Nc(a)?{documents:v1(r,a)}:{query:_1(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=am(r,i.resumeToken):i.snapshotVersion.compareTo(te.min())>0&&(o.readTime=mo(r,i.snapshotVersion.toTimestamp())),o}(this.M,e);const s=b1(this.M,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=Lc(this.M),n.removeTarget=e,this.Lo(n)}}class oS extends gm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.M=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=y1(e.writeResults,e.commitTime),s=nn(e.commitTime);return this.listener.tu(s,n)}return be(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Lc(this.M),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>m1(this.M,s))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.M=r,this.su=!1}iu(){if(this.su)throw new q(S.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(S.UNKNOWN,r.toString())})}_o(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So._o(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(S.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class cS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(kn(n),this.uu=!1):B("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr(o=>{s.enqueueAndForget(async()=>{hs(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Y(a);c.wu.add(4),await gi(c),c.yu.set("Unknown"),c.wu.delete(4),await ia(c)}(this))})}),this.yu=new cS(s,r)}}async function ia(t){if(hs(t))for(const e of t.mu)await e(!0)}async function gi(t){for(const e of t.mu)await e(!1)}function mm(t,e){const n=Y(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),iu(n)?ru(n):ir(n).Mo()&&su(n,e))}function ym(t,e){const n=Y(t),s=ir(n);n._u.delete(e),s.Mo()&&vm(n,e),n._u.size===0&&(s.Mo()?s.$o():hs(n)&&n.yu.set("Unknown"))}function su(t,e){t.pu.Z(e.targetId),ir(t).Ho(e)}function vm(t,e){t.pu.Z(e),ir(t).Jo(e)}function ru(t){t.pu=new l1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t._u.get(e)||null}),ir(t).start(),t.yu.au()}function iu(t){return hs(t)&&!ir(t).ko()&&t._u.size>0}function hs(t){return Y(t).wu.size===0}function _m(t){t.pu=void 0}async function uS(t){t._u.forEach((e,n)=>{su(t,e)})}async function hS(t,e){_m(t),iu(t)?(t.yu.lu(e),ru(t)):t.yu.set("Unknown")}async function dS(t,e,n){if(t.yu.set("Online"),e instanceof om&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await yo(t,s)}else if(e instanceof ji?t.pu.ut(e):e instanceof im?t.pu._t(e):t.pu.ht(e),!n.isEqual(te.min()))try{const s=await fm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.pu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r._u.get(c);l&&r._u.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r._u.get(a);if(!c)return;r._u.set(a,c.withResumeToken(et.EMPTY_BYTE_STRING,c.snapshotVersion)),vm(r,a);const l=new Gn(c.target,a,1,c.sequenceNumber);su(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){B("RemoteStore","Failed to raise snapshot:",s),await yo(t,s)}}async function yo(t,e,n){if(!fi(e))throw e;t.wu.add(1),await gi(t),t.yu.set("Offline"),n||(n=()=>fm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await ia(t)})}function wm(t,e){return e().catch(n=>yo(t,n,e))}async function oa(t){const e=Y(t),n=Nn(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;fS(e);)try{const r=await H1(e.localStore,s);if(r===null){e.du.length===0&&n.$o();break}s=r.batchId,pS(e,r)}catch(r){await yo(e,r)}bm(e)&&Em(e)}function fS(t){return hs(t)&&t.du.length<10}function pS(t,e){t.du.push(e);const n=Nn(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function bm(t){return hs(t)&&!Nn(t).ko()&&t.du.length>0}function Em(t){Nn(t).start()}async function gS(t){Nn(t).nu()}async function mS(t){const e=Nn(t);for(const n of t.du)e.Zo(n.mutations)}async function yS(t,e,n){const s=t.du.shift(),r=Zl.from(s,e,n);await wm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await oa(t)}async function vS(t,e){e&&Nn(t).Xo&&await async function(n,s){if(r=s.code,s1(r)&&r!==S.ABORTED){const i=n.du.shift();Nn(n).Fo(),await wm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await oa(n)}var r}(t,e),bm(t)&&Em(t)}async function Ad(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const s=hs(n);n.wu.add(3),await gi(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await ia(n)}async function _S(t,e){const n=Y(t);e?(n.wu.delete(2),await ia(n)):e||(n.wu.add(2),await gi(n),n.yu.set("Unknown"))}function ir(t){return t.Iu||(t.Iu=function(e,n,s){const r=Y(e);return r.iu(),new iS(n,r.So,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{Xr:uS.bind(null,t),eo:hS.bind(null,t),zo:dS.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),iu(t)?ru(t):t.yu.set("Unknown")):(await t.Iu.stop(),_m(t))})),t.Iu}function Nn(t){return t.Tu||(t.Tu=function(e,n,s){const r=Y(e);return r.iu(),new oS(n,r.So,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{Xr:gS.bind(null,t),eo:vS.bind(null,t),eu:mS.bind(null,t),tu:yS.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await oa(t)):(await t.Tu.stop(),t.du.length>0&&(B("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new ou(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function au(t,e){if(kn("AsyncQueue",`${e}: ${t}`),fi(t))return new q(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.comparator=e?(n,s)=>e(n,s)||H.comparator(n.key,s.key):(n,s)=>H.comparator(n.key,s.key),this.keyedMap=Pc(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new Ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class kd{constructor(){this.Eu=new je(H.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):G():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Hs{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Hs(e,n,Ds.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(){this.Ru=void 0,this.listeners=[]}}class bS{constructor(){this.queries=new rr(e=>Gg(e),Zo),this.onlineState="Unknown",this.bu=new Set}}async function ES(t,e){const n=Y(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new wS),r)try{i.Ru=await n.onListen(s)}catch(o){const a=au(o,`Initialization of query '${xc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.Vu(i.Ru)&&cu(n)}async function TS(t,e){const n=Y(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function IS(t,e){const n=Y(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.Ru=r}}s&&cu(n)}function SS(t,e,n){const s=Y(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function cu(t){t.bu.forEach(e=>{e.next()})}class CS{constructor(e,n,s){this.query=e,this.vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Hs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=Hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.key=e}}class Im{constructor(e){this.key=e}}class AS{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.current=!1,this.Ku=Ie(),this.mutatedKeys=Ie(),this.Gu=Xg(e),this.Qu=new Ds(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new kd,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),m=Ql(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),T=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let _=!1;d&&m?d.data.isEqual(m.data)?y!==T&&(s.track({type:3,doc:m}),_=!0):this.Hu(d,m)||(s.track({type:2,doc:m}),_=!0,(c&&this.Gu(m,c)>0||l&&this.Gu(m,l)<0)&&(a=!0)):!d&&m?(s.track({type:0,doc:m}),_=!0):d&&!m&&(s.track({type:1,doc:d}),_=!0,(c||l)&&(a=!0)),_&&(m?(o=o.add(m),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,ii:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((l,u)=>function(h,d){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return m(h)-m(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Hs(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new kd,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Ie(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Im(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Tm(s))}),n}ta(e){this.Uu=e._i,this.Ku=Ie();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ea(){return Hs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class kS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class RS{constructor(e){this.key=e,this.na=!1}}class NS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new rr(a=>Gg(a),Zo),this.ra=new Map,this.oa=new Set,this.ua=new je(H.comparator),this.aa=new Map,this.ca=new tu,this.ha={},this.la=new Map,this.fa=js.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function xS(t,e){const n=$S(t);let s,r;const i=n.ia.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ea();else{const o=await q1(n.localStore,os(e));n.isPrimaryClient&&mm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await DS(n,e,s,a==="current")}return r}async function DS(t,e,n,s){t._a=(u,h,d)=>async function(m,y,T,_){let C=y.view.Wu(T);C.ii&&(C=await Id(m.localStore,y.query,!1).then(({documents:L})=>y.view.Wu(L,C)));const D=_&&_.targetChanges.get(y.targetId),F=y.view.applyChanges(C,m.isPrimaryClient,D);return Nd(m,y.targetId,F.Xu),F.snapshot}(t,u,h,d);const r=await Id(t.localStore,e,!0),i=new AS(e,r._i),o=i.Wu(r.documents),a=di.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Nd(t,n,c.Xu);const l=new kS(e,n,i);return t.ia.set(e,l),t.ra.has(n)?t.ra.get(n).push(e):t.ra.set(n,[e]),c.snapshot}async function PS(t,e){const n=Y(t),s=n.ia.get(e),r=n.ra.get(s.targetId);if(r.length>1)return n.ra.set(s.targetId,r.filter(i=>!Zo(i,e))),void n.ia.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Uc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),ym(n.remoteStore,s.targetId),Fc(n,s.targetId)}).catch(pi)):(Fc(n,s.targetId),await Uc(n.localStore,s.targetId,!0))}async function OS(t,e,n){const s=jS(t);try{const r=await function(i,o){const a=Y(i),c=at.now(),l=o.reduce((h,d)=>h.add(d.key),Ie());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.fi.Ks(h,l).next(d=>{u=d;const m=[];for(const y of o){const T=ZI(y,u.get(y.key));T!=null&&m.push(new sr(y.key,T,zg(T.value.mapValue),Wn.exists(!0)))}return a.Bs.addMutationBatch(h,c,m,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ha[i.currentUser.toKey()];c||(c=new je(he)),c=c.insert(o,a),i.ha[i.currentUser.toKey()]=c}(s,r.batchId,n),await mi(s,r.changes),await oa(s.remoteStore)}catch(r){const i=au(r,"Failed to persist write");n.reject(i)}}async function Sm(t,e){const n=Y(t);try{const s=await $1(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.aa.get(i);o&&(be(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.na=!0:r.modifiedDocuments.size>0?be(o.na):r.removedDocuments.size>0&&(be(o.na),o.na=!1))}),await mi(n,s,e)}catch(s){await pi(s)}}function Rd(t,e,n){const s=Y(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ia.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Y(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&cu(a)}(s.eventManager,e),r.length&&s.sa.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function MS(t,e,n){const s=Y(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.aa.get(e),i=r&&r.key;if(i){let o=new je(H.comparator);o=o.insert(i,it.newNoDocument(i,te.min()));const a=Ie().add(i),c=new sa(te.min(),new Map,new Je(he),o,a);await Sm(s,c),s.ua=s.ua.remove(i),s.aa.delete(e),lu(s)}else await Uc(s.localStore,e,!1).then(()=>Fc(s,e,n)).catch(pi)}async function LS(t,e){const n=Y(t),s=e.batch.batchId;try{const r=await V1(n.localStore,e);Am(n,s,null),Cm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await mi(n,r)}catch(r){await pi(r)}}async function US(t,e,n){const s=Y(t);try{const r=await function(i,o){const a=Y(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.Bs.lookupMutationBatch(c,o).next(u=>(be(u!==null),l=u.keys(),a.Bs.removeMutationBatch(c,u))).next(()=>a.Bs.performConsistencyCheck(c)).next(()=>a.fi.Ks(c,l))})}(s.localStore,e);Am(s,e,n),Cm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await mi(s,r)}catch(r){await pi(r)}}function Cm(t,e){(t.la.get(e)||[]).forEach(n=>{n.resolve()}),t.la.delete(e)}function Am(t,e,n){const s=Y(t);let r=s.ha[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ha[s.currentUser.toKey()]=r}}function Fc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ra.get(e))t.ia.delete(s),n&&t.sa.wa(s,n);t.ra.delete(e),t.isPrimaryClient&&t.ca.vi(e).forEach(s=>{t.ca.containsKey(s)||km(t,s)})}function km(t,e){t.oa.delete(e.path.canonicalString());const n=t.ua.get(e);n!==null&&(ym(t.remoteStore,n),t.ua=t.ua.remove(e),t.aa.delete(n),lu(t))}function Nd(t,e,n){for(const s of n)s instanceof Tm?(t.ca.addReference(s.key,e),FS(t,s)):s instanceof Im?(B("SyncEngine","Document no longer in limbo: "+s.key),t.ca.removeReference(s.key,e),t.ca.containsKey(s.key)||km(t,s.key)):G()}function FS(t,e){const n=e.key,s=n.path.canonicalString();t.ua.get(n)||t.oa.has(s)||(B("SyncEngine","New document in limbo: "+n),t.oa.add(s),lu(t))}function lu(t){for(;t.oa.size>0&&t.ua.size<t.maxConcurrentLimboResolutions;){const e=t.oa.values().next().value;t.oa.delete(e);const n=new H(Ae.fromString(e)),s=t.fa.next();t.aa.set(s,new RS(n)),t.ua=t.ua.insert(n,s),mm(t.remoteStore,new Gn(os(Yl(n.path)),s,2,zl.A))}}async function mi(t,e,n){const s=Y(t),r=[],i=[],o=[];s.ia.isEmpty()||(s.ia.forEach((a,c)=>{o.push(s._a(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=eu.Ys(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sa.zo(r),await async function(a,c){const l=Y(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>k.forEach(c,h=>k.forEach(h.Hs,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>k.forEach(h.Js,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!fi(u))throw u;B("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.ui.get(h),m=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(m);l.ui=l.ui.insert(h,y)}}}(s.localStore,i))}async function BS(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const s=await dm(n.localStore,e);n.currentUser=e,function(r,i){r.la.forEach(o=>{o.forEach(a=>{a.reject(new q(S.CANCELLED,i))})}),r.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await mi(n,s.di)}}function VS(t,e){const n=Y(t),s=n.aa.get(e);if(s&&s.na)return Ie().add(s.key);{let r=Ie();const i=n.ra.get(e);if(!i)return r;for(const o of i){const a=n.ia.get(o);r=r.unionWith(a.view.ju)}return r}}function $S(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MS.bind(null,e),e.sa.zo=IS.bind(null,e.eventManager),e.sa.wa=SS.bind(null,e.eventManager),e}function jS(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=US.bind(null,e),e}class HS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=ra(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return B1(this.persistence,new U1,e.initialUser,this.M)}ya(e){return new J1(nu.Yi,this.M)}ga(e){return new eS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Rd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=BS.bind(null,this.syncEngine),await _S(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new bS}createDatastore(e){const n=ra(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new rS(r));var r;return function(i,o,a,c){return new aS(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Rd(this.syncEngine,a,0),o=Cd.vt()?new Cd:new tS,new lS(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new NS(s,r,i,o,a,c);return l&&(u.da=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);B("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await gi(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class KS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=gt.UNAUTHENTICATED,this.clientId=jg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{B("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(B("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=au(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function WS(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await dm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function GS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await XS(t);B("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Ad(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ad(e.remoteStore,i)),t.onlineComponents=e}async function XS(t){return t.offlineComponents||(B("FirestoreClient","Using default OfflineComponentProvider"),await WS(t,new HS)),t.offlineComponents}async function Rm(t){return t.onlineComponents||(B("FirestoreClient","Using default OnlineComponentProvider"),await GS(t,new qS)),t.onlineComponents}function YS(t){return Rm(t).then(e=>e.syncEngine)}async function QS(t){const e=await Rm(t),n=e.eventManager;return n.onListen=xS.bind(null,e.syncEngine),n.onUnlisten=PS.bind(null,e.syncEngine),n}function JS(t,e,n={}){const s=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new KS({next:h=>{i.enqueueAndForget(()=>TS(r,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new q(S.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new q(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new CS(Yl(o.path),l,{includeMetadataChanges:!0,ku:!0});return ES(r,u)}(await QS(t),t.asyncQueue,e,n,s)),s.promise}const xd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t,e,n){if(!n)throw new q(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function eC(t,e,n,s){if(e===!0&&s===!0)throw new q(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dd(t){if(!H.isDocumentKey(t))throw new q(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function qs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uu(t);throw new q(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,eC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pd({}),this._settingsFrozen=!1,e instanceof Vs?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new q(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vs(r.options.projectId)}(e))}get app(){if(!this._app)throw new q(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new pI;switch(n.type){case"gapi":const s=n.client;return be(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new yI(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new q(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=xd.get(e);n&&(B("ComponentProvider","Removing Datastore"),xd.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class hu{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new hu(this.firestore,e,this._query)}}class Gr extends hu{constructor(e,n,s){super(e,n,Yl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new H(e))}withConverter(e){return new Gr(this.firestore,e,this._path)}}function Wt(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=jg.R()),ZS("doc","path",e),t instanceof Nm){const s=Ae.fromString(e,...n);return Dd(s),new It(t,null,new H(s))}{if(!(t instanceof It||t instanceof Gr))throw new q(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ae.fromString(e,...n));return Dd(s),new It(t.firestore,t instanceof Gr?t.converter:null,new H(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new pm(this,"async_queue_retry"),this.Qa=()=>{const n=Va();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Va();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const n=Va();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise(()=>{});const n=new Sn;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$a.push(e),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!fi(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(e){const n=this.Fa.then(()=>(this.qa=!0,e().catch(s=>{this.Ua=s,this.qa=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw kn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.qa=!1,s))));return this.Fa=n,n}enqueueAfterDelay(e,n,s){this.ja(),this.Ga.indexOf(e)>-1&&(n=0);const r=ou.createAndSchedule(this,e,n,s,i=>this.Ha(i));return this.La.push(r),r}ja(){this.Ua&&G()}verifyOperationInProgress(){}async Ja(){let e;do e=this.Fa,await e;while(e!==this.Fa)}Ya(e){for(const n of this.La)if(n.timerId===e)return!0;return!1}Xa(e){return this.Ja().then(()=>{this.La.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.La)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ja()})}Za(e){this.Ga.push(e)}Ha(e){const n=this.La.indexOf(e);this.La.splice(n,1)}}class aa extends Nm{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new tC,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Dm(this),this._firestoreClient.terminate()}}function nC(t=hl()){return Po(t,"firestore").getImmediate()}function xm(t){return t._firestoreClient||Dm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Dm(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new TI(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new zS(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ca{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ks(et.fromBase64String(e))}catch(n){throw new q(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ks(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=/^__.*__$/;class rC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new na(e,this.data,n,this.fieldTransforms)}}class Pm{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Om(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class pu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=r,i===void 0&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new pu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.nc({path:s,ic:!1});return r.rc(e),r}oc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.nc({path:s,ic:!1});return r.tc(),r}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return vo(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(e.length===0)throw this.ac("Document fields must not be empty");if(Om(this.ec)&&sC.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class iC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=s||ra(e)}lc(e,n,s,r=!1){return new pu({ec:e,methodName:n,hc:s,path:mt.emptyPath(),ic:!1,cc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Mm(t){const e=t._freezeSettings(),n=ra(t._databaseId);return new iC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oC(t,e,n,s,r,i={}){const o=t.lc(i.merge||i.mergeFields?2:0,e,n,r);gu("Data must be an object, but it was:",o,s);const a=Lm(s,o);let c,l;if(i.merge)c=new jr(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Bc(e,h,n);if(!o.contains(d))throw new q(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Fm(u,d)||u.push(d)}c=new jr(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new rC(new bt(a),c,l)}class la extends du{_toFieldTransform(e){if(e.ec!==2)throw e.ec===1?e.ac(`${this._methodName}() can only appear at the top level of your update data`):e.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof la}}function aC(t,e,n,s){const r=t.lc(1,e,n);gu("Data must be an object, but it was:",r,s);const i=[],o=bt.empty();us(s,(c,l)=>{const u=mu(e,c,n);l=Ve(l);const h=r.oc(u);if(l instanceof la)i.push(u);else{const d=ua(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new jr(i);return new Pm(o,a,r.fieldTransforms)}function cC(t,e,n,s,r,i){const o=t.lc(1,e,n),a=[Bc(e,s,n)],c=[r];if(i.length%2!=0)throw new q(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Bc(e,i[d])),c.push(i[d+1]);const l=[],u=bt.empty();for(let d=a.length-1;d>=0;--d)if(!Fm(l,a[d])){const m=a[d];let y=c[d];y=Ve(y);const T=o.oc(m);if(y instanceof la)l.push(m);else{const _=ua(y,T);_!=null&&(l.push(m),u.set(m,_))}}const h=new jr(l);return new Pm(u,h,o.fieldTransforms)}function ua(t,e){if(Um(t=Ve(t)))return gu("Unsupported field value:",e,t),Lm(t,e);if(t instanceof du)return function(n,s){if(!Om(s.ec))throw s.ac(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ac(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&e.ec!==4)throw e.ac("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=ua(o,s.uc(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ve(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return WI(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=at.fromDate(n);return{timestampValue:mo(s.M,r)}}if(n instanceof at){const r=new at(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:mo(s.M,r)}}if(n instanceof fu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ks)return{bytesValue:am(s.M,n._byteString)};if(n instanceof It){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ac(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Jl(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ac(`Unsupported field value: ${uu(n)}`)}(t,e)}function Lm(t,e){const n={};return Hg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):us(t,(s,r)=>{const i=ua(r,e.sc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Um(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof at||t instanceof fu||t instanceof Ks||t instanceof It||t instanceof du)}function gu(t,e,n){if(!Um(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=uu(n);throw s==="an object"?e.ac(t+" a custom object"):e.ac(t+" "+s)}}function Bc(t,e,n){if((e=Ve(e))instanceof ca)return e._internalPath;if(typeof e=="string")return mu(t,e);throw vo("Field path arguments must be of type string or ",t,!1,void 0,n)}const lC=new RegExp("[~\\*/\\[\\]]");function mu(t,e,n){if(e.search(lC)>=0)throw vo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ca(...e.split("."))._internalPath}catch{throw vo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new q(S.INVALID_ARGUMENT,a+t+c)}function Fm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Vm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uC extends Bm{data(){return super.data()}}function Vm(t,e){return typeof e=="string"?mu(t,e):e instanceof ca?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $m extends Bm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new dC(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Vm("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class dC extends $m{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{convertValue(e,n="none"){switch(rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const s={};return us(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new fu(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Kg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Hr(e));default:return null}}convertTimestamp(e){const n=Rn(e);return new at(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ae.fromString(e);be(hm(s));const r=new Vs(s.get(1),s.get(3)),i=new H(s.popFirst(5));return r.isEqual(n)||kn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function ha(t){t=qs(t,It);const e=qs(t.firestore,aa);return JS(xm(e),t._key).then(n=>mC(e,t,n))}class gC extends fC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function jm(t,e,n){t=qs(t,It);const s=qs(t.firestore,aa),r=pC(t.converter,e,n);return Hm(s,[oC(Mm(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Wn.none())])}function _o(t,e,n,...s){t=qs(t,It);const r=qs(t.firestore,aa),i=Mm(r);let o;return o=typeof(e=Ve(e))=="string"||e instanceof ca?cC(i,"updateDoc",t._key,e,n,s):aC(i,"updateDoc",t._key,e),Hm(r,[o.toMutation(t._key,Wn.exists(!0))])}function Hm(t,e){return function(n,s){const r=new Sn;return n.asyncQueue.enqueueAndForget(async()=>OS(await YS(n),s,r)),r.promise}(xm(t),e)}function mC(t,e,n){const s=n.docs.get(e._key),r=new gC(t);return new $m(t,r,e._key,s,new hC(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){nr=n})(Ys),Qn(new An("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new aa(r,new gI(n.getProvider("auth-internal")),new _I(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),qt(rd,"3.4.9",t),qt(rd,"3.4.9","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="firebasestorage.googleapis.com",Km="storageBucket",yC=2*60*1e3,vC=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends xn{constructor(e,n){super($a(e),`Firebase Storage: ${n} (${$a(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Me.prototype)}_codeEquals(e){return $a(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function $a(t){return"storage/"+t}function yu(){const t="An unknown error occurred, please check the error payload for server response.";return new Me("unknown",t)}function _C(t){return new Me("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function wC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Me("unauthenticated",t)}function bC(){return new Me("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function EC(t){return new Me("unauthorized","User does not have permission to access '"+t+"'.")}function TC(){return new Me("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function IC(){return new Me("canceled","User canceled the upload/download.")}function SC(t){return new Me("invalid-url","Invalid URL '"+t+"'.")}function CC(t){return new Me("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function AC(){return new Me("no-default-bucket","No default bucket found. Did you set the '"+Km+"' property when initializing the app?")}function kC(){return new Me("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Vc(t){return new Me("invalid-argument",t)}function zm(){return new Me("app-deleted","The Firebase app was deleted.")}function RC(t){return new Me("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Cr(t,e){return new Me("invalid-format","String does not match format '"+t+"': "+e)}function lr(t){throw new Me("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Et.makeFromUrl(e,n)}catch{return new Et(e,"")}if(s.path==="")return s;throw CC(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(L){L.path_=decodeURIComponent(L.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),y={bucket:1,path:3},T=n===qm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",C=new RegExp(`^https?://${T}/${r}/${_}`,"i"),F=[{regex:a,indices:c,postModify:i},{regex:m,indices:y,postModify:l},{regex:C,indices:{bucket:1,path:2},postModify:l}];for(let L=0;L<F.length;L++){const ce=F[L],de=ce.regex.exec(e);if(de){const Q=de[ce.indices.bucket];let Ee=de[ce.indices.path];Ee||(Ee=""),s=new Et(Q,Ee),ce.postModify(s);break}}if(s==null)throw SC(e);return s}}class NC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(..._){l||(l=!0,e.apply(null,_))}function h(_){r=setTimeout(()=>{r=null,t(m,c())},_)}function d(){i&&clearTimeout(i)}function m(_,...C){if(l){d();return}if(_){d(),u.call(null,_,...C);return}if(c()||o){d(),u.call(null,_,...C);return}s<64&&(s*=2);let F;a===1?(a=2,F=0):F=(s+Math.random())*1e3,h(F)}let y=!1;function T(_){y||(y=!0,d(),!l&&(r!==null?(_||(a=2),clearTimeout(r),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,T(!0)},n),T}function DC(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(t){return t!==void 0}function OC(t){return typeof t=="object"&&!Array.isArray(t)}function Wm(t){return typeof t=="string"||t instanceof String}function Od(t){return vu()&&t instanceof Blob}function vu(){return typeof Blob!="undefined"}function Md(t,e,n,s){if(s<e)throw Vc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Vc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function LC(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Xn||(Xn={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n,s,r,i,o,a,c,l,u,h){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,m)=>{this.resolve_=d,this.reject_=m,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new ki(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Xn.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const u=i.getErrorCode()===Xn.ABORT;s(!1,new ki(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new ki(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());PC(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=yu();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?zm():IC();o(c)}else{const c=TC();o(c)}};this.canceled_?n(!1,new ki(!1,null,!0)):this.backoffId_=xC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&DC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||r||i}}class ki{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function FC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function BC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function VC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function $C(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function jC(t,e,n,s,r,i){const o=LC(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return VC(c,e),FC(c,n),BC(c,i),$C(c,s),new UC(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function qC(...t){const e=HC();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(vu())return new Blob(t);throw new Me("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function KC(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function zC(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ja{constructor(e,n){this.data=e,this.contentType=n||null}}function WC(t,e){switch(t){case Ht.RAW:return new ja(Gm(e));case Ht.BASE64:case Ht.BASE64URL:return new ja(Xm(t,e));case Ht.DATA_URL:return new ja(XC(e),YC(e))}throw yu()}function Gm(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function GC(t){let e;try{e=decodeURIComponent(t)}catch{throw Cr(Ht.DATA_URL,"Malformed data URL.")}return Gm(e)}function Xm(t,e){switch(t){case Ht.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Cr(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Ht.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Cr(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=zC(e)}catch{throw Cr(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Ym{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Cr(Ht.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=QC(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function XC(t){const e=new Ym(t);return e.base64?Xm(Ht.BASE64,e.rest):GC(e.rest)}function YC(t){return new Ym(t).contentType}function QC(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n){let s=0,r="";Od(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Od(this.data_)){const s=this.data_,r=KC(s,e,n);return r===null?null:new wn(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new wn(s,!0)}}static getBlob(...e){if(vu()){const n=e.map(s=>s instanceof wn?s.data_:s);return new wn(qC.apply(null,n))}else{const n=e.map(o=>Wm(o)?WC(Ht.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new wn(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t){let e;try{e=JSON.parse(t)}catch{return null}return OC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function eA(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Qm(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(t,e){return e}class lt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||tA}}let Ri=null;function nA(t){return!Wm(t)||t.length<2?t:Qm(t)}function sA(){if(Ri)return Ri;const t=[];t.push(new lt("bucket")),t.push(new lt("generation")),t.push(new lt("metageneration")),t.push(new lt("name","fullPath",!0));function e(i,o){return nA(o)}const n=new lt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new lt("size");return r.xform=s,t.push(r),t.push(new lt("timeCreated")),t.push(new lt("updated")),t.push(new lt("md5Hash",null,!0)),t.push(new lt("cacheControl",null,!0)),t.push(new lt("contentDisposition",null,!0)),t.push(new lt("contentEncoding",null,!0)),t.push(new lt("contentLanguage",null,!0)),t.push(new lt("contentType",null,!0)),t.push(new lt("metadata","customMetadata",!0)),Ri=t,Ri}function rA(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new Et(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function iA(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return rA(s,t),s}function oA(t,e,n){const s=JC(e);return s===null?null:iA(t,s,n)}function aA(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class cA{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t){if(!t)throw yu()}function uA(t,e){function n(s,r){const i=oA(t,r,e);return lA(i!==null),i}return n}function hA(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=bC():r=wC():n.getStatus()===402?r=_C(t.bucket):n.getStatus()===403?r=EC(t.path):r=s,r.serverResponse=s.serverResponse,r}return e}function dA(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function fA(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=dA(null,e)),s}function pA(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let F="";for(let L=0;L<2;L++)F=F+Math.random().toString().slice(2);return F}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=fA(e,s,r),u=aA(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",m=wn.getBlob(h,s,d);if(m===null)throw kC();const y={name:l.fullPath},T=MC(i,t.host,t._protocol),_="POST",C=t.maxUploadRetryTime,D=new cA(T,_,uA(t,n),C);return D.urlParams=y,D.headers=o,D.body=m.uploadData(),D.errorHandler=hA(e),D}class gA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Xn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Xn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Xn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw lr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw lr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw lr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw lr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw lr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class mA extends gA{initXhr(){this.xhr_.responseType="text"}}function yA(){return new mA}/**
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
 */class cs{constructor(e,n){this._service=e,n instanceof Et?this._location=n:this._location=Et.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new cs(e,n)}get root(){const e=new Et(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Qm(this._location.path)}get storage(){return this._service}get parent(){const e=ZC(this._location.path);if(e===null)return null;const n=new Et(this._location.bucket,e);return new cs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw RC(e)}}function vA(t,e,n){t._throwIfRoot("uploadBytes");const s=pA(t.storage,t._location,sA(),new wn(e,!0),n);return t.storage.makeRequestWithTokens(s,yA).then(r=>({metadata:r,ref:t}))}function _A(t,e){const n=eA(t._location.path,e),s=new Et(t._location.bucket,n);return new cs(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t){return/^[A-Za-z]+:\/\//.test(t)}function bA(t,e){return new cs(t,e)}function Jm(t,e){if(t instanceof _u){const n=t;if(n._bucket==null)throw AC();const s=new cs(n,n._bucket);return e!=null?Jm(s,e):s}else return e!==void 0?_A(t,e):t}function EA(t,e){if(e&&wA(e)){if(t instanceof _u)return bA(t,e);throw Vc("To use ref(service, url), the first argument must be a Storage instance.")}else return Jm(t,e)}function Ld(t,e){const n=e==null?void 0:e[Km];return n==null?null:Et.makeFromBucketSpec(n,t)}class _u{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=qm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yC,this._maxUploadRetryTime=vC,this._requests=new Set,r!=null?this._bucket=Et.makeFromBucketSpec(r,this._host):this._bucket=Ld(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Et.makeFromBucketSpec(this._url,e):this._bucket=Ld(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Md("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Md("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new cs(this,e)}_makeRequest(e,n,s,r){if(this._deleted)return new NC(zm());{const i=jC(e,this._appId,s,r,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Ud="@firebase/storage",Fd="0.9.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="storage";function wu(t,e,n){return t=Ve(t),vA(t,e,n)}function bu(t,e){return t=Ve(t),EA(t,e)}function TA(t=hl(),e){return t=Ve(t),Po(t,Zm).getImmediate({identifier:e})}function IA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new _u(n,s,r,e,Ys)}function SA(){Qn(new An(Zm,IA,"PUBLIC").setMultipleInstances(!0)),qt(Ud,Fd,""),qt(Ud,Fd,"esm2017")}SA();const CA={apiKey:"AIzaSyCO-1zlqihZNJAGUqfbezRKdAbx2xVRurA",authDomain:"if-lost-159f6.firebaseapp.com",projectId:"if-lost-159f6",storageBucket:"if-lost-159f6.appspot.com",messagingSenderId:"55254413607",appId:"1:55254413607:web:2b14450ddb1a97bdccb902"};Yb(CA);const We=iT(),Gt=nC(),Eu=TA();var ds=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n};const AA={methods:{obtenerUsuario(){Tt(We,t=>{t||this.$router.push("/login")})}},mounted(){this.obtenerUsuario()}},kA=p("div",null,[p("h2",{class:"ttl-1 mb-16"},"\xBFQu\xE9 quieres hacer?")],-1),RA={class:"place-items-center grid-cols-1"};function NA(t,e,n,s,r,i){return ee(),ne(Ke,null,[kA,p("div",RA,[p("div",null,[p("button",{class:"btn-home",onClick:e[0]||(e[0]=o=>t.$router.push("/viajar"))}," Viajar seguro "),p("button",{class:"btn-home",onClick:e[1]||(e[1]=o=>t.$router.push("/rastrear"))}," Rastrear a alguien "),p("button",{class:"btn-home",onClick:e[2]||(e[2]=o=>t.$router.push("/404"))}," Enviar alerta ahora ")])])],64)}var xA=ds(AA,[["render",NA]]);const DA={data(){return{destino:"",info_destino:"",hora_salida:"12",minutos_salida:"00",hora_alerta:"17",minutos_alerta:"00",infoextra:"",img:"",imgurl:"",infofoto:"",mapa:"",mapa_google:"",paso:0,datos:[],uid:"",srcimg:"https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/assets%2Fcamera.png?alt=media"}},mounted(){this.obtenerUsuario(),Tt(We,async t=>{if(t){const e=Wt(Gt,"infoUsuarios",t.uid),n=await ha(e);n.exists()&&(this.datos=n.data())}})},methods:{buscarEnMapa(){let t="https://maps.google.com/maps?q="+this.destino+"&t=&z=13&ie=UTF8&iwloc=&output=embed";document.querySelector("#gmap_canvas").setAttribute("src",t),this.mapa=t},obtenerHoraComoFecha(t,e,n){let s;if(n==!1)s=new Date().setHours(parseInt(t),parseInt(e),0);else{const r=new Date,i=new Date(r);i.setDate(i.getDate()+1),s=i.setHours(parseInt(t),parseInt(e),0)}return s},async crearViaje(){let t,n=new Date().getHours();this.hora_alerta<this.hora_salida||this.hora_alerta<n?t=!0:t=!1,await Tt(We,async s=>{s&&await jm(Wt(Gt,"viajes",s.uid),{correo_contacto:this.datos.correo_contacto,destino:this.destino,mapa:this.mapa_google,infoextra_destino:this.info_destino,hora_salida:this.hora_salida+":"+this.minutos_salida,hora_llegada:this.hora_alerta+":"+this.minutos_alerta,infoextra:this.infoextra,fecha_alerta:this.obtenerHoraComoFecha(this.hora_alerta,this.minutos_alerta,t),img:this.imgurl,infoimg:this.infofoto}),this.$router.push("/")})},async previsualizar(){await this.paso++;let t=document.querySelector("#img_prev"),e=this.destino.split(" ");for(var n=0;n<e.length;n++)e[n]=e[n].charAt(0).toUpperCase()+e[n].slice(1);this.destino=e.join(" "),this.mapa_google="https://maps.google.com/maps?q="+this.destino+"&t=&z=13&ie=UTF8&iwloc=&",this.imgurl.length>1?t.src="https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/viajes%2F"+this.uid+"?alt=media":t.src="/images/viajedef.jpg"},obtenerUsuario(){Tt(We,t=>{t?this.uid=t.uid:this.$router.push("/login")})},async tomarFoto(){this.srcimg="https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/assets%2Floading.gif?alt=media";let t=this,e=document.querySelector("#camera"),n=document.querySelector("#canvas"),s=document.querySelector("#capturar"),r=document.querySelector("#tomafoto"),i=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});this.$refs.imgviaje.setAttribute("hidden","true"),this.$refs.divfoto.removeAttribute("hidden"),n.setAttribute("hidden","true"),e.removeAttribute("hidden"),s.removeAttribute("hidden"),e.srcObject=i,s.addEventListener("click",function(){e.setAttribute("hidden","true"),n.getContext("2d").drawImage(e,0,0,n.width,n.height),this.img=n.toDataURL("image/jpeg"),t.subirImg(this.img),i.getTracks().forEach(function(o){o.stop()}),s.setAttribute("hidden","true"),r.innerHTML="\xBFNo te gust\xF3? Intenta de nuevo"})},subirImg(t){this.$refs.imgviaje.removeAttribute("hidden");let e=this;const n=document.createElement("img");n.src=t,n.onload=function(s){const r=document.createElement("canvas"),i=800,o=i/s.target.width;r.width=i,r.height=o*s.target.height;const a=r.getContext("2d");a.drawImage(s.target,0,0,r.width,r.height);const c=a.canvas.toDataURL(s.target,"image/png");function l(d,m){for(var y=d.split(","),T=y[0].match(/:(.*?);/)[1],_=atob(y[1]),C=_.length,D=new Uint8Array(C);C--;)D[C]=_.charCodeAt(C);return new File([D],m,{type:T})}var u=l(c,"perfil.png");const h=bu(Eu,"viajes/"+e.uid);wu(h,u).then(d=>{e.imgurl="https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/viajes%2F"+e.uid+"?alt=media",e.srcimg=c})}}},watch:{}},ae=t=>(rv("data-v-405a4170"),t=t(),iv(),t),PA=ae(()=>p("h1",{class:"ttl-1"},"Crear viaje",-1)),OA={class:"grid mb-8"},MA={class:"justify-self-center flex text-xs"},LA={class:"font-semibold text-center mt-4 bg-gray-50 text-gray-900 pt-2 pb-2 w-8 rounded-full shadow-inner"},UA=ae(()=>p("h2",{class:"text-center mt-4 pt-2 pb-2 w-10"},"de",-1)),FA=ae(()=>p("h2",{class:"font-semibold text-center mt-4 bg-gray-50 text-gray-900 pt-2 pb-2 w-8 rounded-full shadow-inner"}," 5 ",-1)),BA={key:0},VA=ae(()=>p("p",{class:"lbl"},"Dinos a d\xF3nde vas",-1)),$A={class:"flex"},jA=ae(()=>p("i",{class:"fa-solid fa-magnifying-glass"},null,-1)),HA=[jA],qA=ae(()=>p("div",{class:"mapouter"},[p("div",{class:"gmap_canvas shadow-xl"},[p("iframe",{width:"100%",height:"100%",id:"gmap_canvas",src:"https://maps.google.com/maps?q=monterrey&t=&z=13&ie=UTF8&iwloc=&output=embed",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0"})])],-1)),KA=ae(()=>p("p",{class:"lbl mt-4"}," Aqu\xED puedes agregar detalles del lugar, si gustas ",-1)),zA=ae(()=>p("button",{type:"submit",class:"btn-gray"},"Continuar",-1)),WA={key:1},GA={class:"grid"},XA=ae(()=>p("p",{class:"lbl text-center"},"Dinos a qu\xE9 ahora planeas ir",-1)),YA={class:"flex place-content-center"},QA=ae(()=>p("p",{class:"mx-2 place-self-center"},":",-1)),JA=ae(()=>p("p",{class:"lbl text-center mt-4"},"Y la hora a la que planeas regresar",-1)),ZA={class:"flex place-content-center"},ek=ae(()=>p("p",{class:"mx-2 place-self-center"},":",-1)),tk=ae(()=>p("button",{type:"submit",class:"btn-gray mt-12"},"Continuar",-1)),nk={key:2},sk={class:"flex mt-2"},rk=ae(()=>p("p",{class:"lbl w-[88%] align-self-end flex-initial",id:"tomafoto"}," Toma una foto, si quieres ",-1)),ik=ae(()=>p("i",{class:"fa-solid fa-camera"},null,-1)),ok=[ik],ak={class:"mt-2 shadow-xl",ref:"divfoto"},ck=ae(()=>p("video",{width:"400",height:"300",autoplay:"",id:"camera",class:"mt-2 rounded-t-lg w-full",hidden:""},null,-1)),lk=ae(()=>p("canvas",{id:"canvas",class:"mt-2 rounded-t-lg w-full",width:"400",height:"300",hidden:""},null,-1)),uk=["src"],hk=ae(()=>p("button",{type:"button",id:"capturar",class:"rounded-b-lg w-full bg-sky-600 py-2 text-white hover:bg-sky-800 flex-intial",hidden:""}," Tomar foto ",-1)),dk={ref:"notafoto"},fk=ae(()=>p("p",{class:"lbl mt-4"},"Agrega una nota a la foto",-1)),pk=ae(()=>p("button",{type:"submit",class:"btn-gray"},"Continuar",-1)),gk={key:3},mk=ae(()=>p("p",{class:"lbl mt-2"}," En este espacio puedes agregar una nota para tu contacto de confianza ",-1)),yk=ae(()=>p("button",{type:"submit",class:"btn-gray"},"Continuar",-1)),vk={key:4},_k=ae(()=>p("div",{class:"note grid"},[p("p",{class:"font-semibold"},[Pt(" Aseg\xFArate que todos los detalles de tu viaje sean correctos; "),p("span",{class:"font-normal"},"en caso de no avisar antes de la hora prevista, se enviar\xE1n a tu contacto de confianza")]),p("button",{class:"btn-gray w-[60%] justify-self-end"}," Ver mi contacto de confianza ")],-1)),wk={class:"mt-4 grid grid-cols-2 gap-2"},bk=ae(()=>p("p",{class:"lbl"},"Destino",-1)),Ek={class:"note"},Tk=["href"],Ik={key:0,class:"note"},Sk=ae(()=>p("span",{class:"notettl"},"Detalles",-1)),Ck={key:1,class:"note"},Ak=ae(()=>p("span",{class:"notettl"},"No se agregaron m\xE1s detalles",-1)),kk=[Ak],Rk={class:"grid grid-cols-2 gap-2"},Nk=ae(()=>p("p",{class:"lbl"},"Hora de salida",-1)),xk={class:"note"},Dk=ae(()=>p("p",{class:"lbl"},"Hora de regreso",-1)),Pk={class:"note"},Ok={class:"grid grid-cols-2 gap-2"},Mk=ae(()=>p("img",{src:"",alt:"Imagen de viaje",id:"img_prev",class:"rounded-lg w-full mb-2 shadow-md"},null,-1)),Lk={key:0,class:"note"},Uk=ae(()=>p("span",{class:"notettl"},"Nota de foto",-1)),Fk={key:1,class:"note"},Bk=ae(()=>p("span",{class:"notettl"},"No se agreg\xF3 nota de foto",-1)),Vk=[Bk],$k={key:0,class:"note"},jk=ae(()=>p("span",{class:"notettl"},"Nota",-1)),Hk={key:1,class:"note"},qk=ae(()=>p("span",{class:"notettl"},"No se agreg\xF3 una nota",-1)),Kk=[qk];function zk(t,e,n,s,r,i){return ee(),ne(Ke,null,[PA,p("div",OA,[p("div",MA,[p("h2",LA,Oe(r.paso+1),1),UA,FA])]),r.paso==0?(ee(),ne("div",BA,[p("form",{onSubmit:e[3]||(e[3]=rt(o=>r.paso++,["prevent"]))},[VA,p("div",$A,[ke(p("input",{type:"text",id:"destino","onUpdate:modelValue":e[0]||(e[0]=o=>r.destino=o),placeholder:"Un lugar",class:"inp flex-initial w-[88%]",required:""},null,512),[[Re,r.destino]]),p("button",{onClick:e[1]||(e[1]=rt(o=>i.buscarEnMapa(),["prevent"])),class:"btn-blue w-[10%] ml-[2%] flex-1 mt-0"},HA)]),qA,p("div",null,[KA,ke(p("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.info_destino=o),placeholder:"ej. La casa de Jorge",class:"inp",rows:"3"},null,512),[[Re,r.info_destino]])]),zA],32)])):ze("",!0),r.paso==1?(ee(),ne("div",WA,[p("form",{onSubmit:e[9]||(e[9]=rt(o=>r.paso++,["prevent"]))},[p("div",GA,[XA,p("div",YA,[ke(p("input",{type:"number","onUpdate:modelValue":e[4]||(e[4]=o=>r.hora_salida=o),required:"",max:"24",class:"inp w-[30%] text-center"},null,512),[[Re,r.hora_salida]]),QA,ke(p("input",{type:"number","onUpdate:modelValue":e[5]||(e[5]=o=>r.minutos_salida=o),required:"",max:"60",class:"inp w-[30%] text-center"},null,512),[[Re,r.minutos_salida]])]),JA,p("div",ZA,[ke(p("input",{type:"number","onUpdate:modelValue":e[6]||(e[6]=o=>r.hora_alerta=o),required:"",max:"24",class:"inp w-[30%] text-center"},null,512),[[Re,r.hora_alerta]]),ek,ke(p("input",{type:"number","onUpdate:modelValue":e[7]||(e[7]=o=>r.minutos_alerta=o),required:"",max:"60",class:"inp w-[30%] text-center"},null,512),[[Re,r.minutos_alerta]])])]),tk,p("button",{onClick:e[8]||(e[8]=rt(o=>r.paso--,["prevent"])),class:"btn-gray"},"Volver")],32)])):ze("",!0),r.paso==2?(ee(),ne("div",nk,[p("form",{onSubmit:e[13]||(e[13]=rt(o=>r.paso++,["prevent"]))},[p("div",sk,[rk,p("button",{type:"button",onClick:e[10]||(e[10]=o=>i.tomarFoto()),class:"btn-blue w-[10%] ml-[2%] mt-0 py-0"},ok)]),p("div",ak,[ck,lk,p("img",{src:r.srcimg,width:"400",height:"300",ref:"imgviaje",class:"rounded-lg mt-2 w-full"},null,8,uk),hk],512),p("div",dk,[fk,ke(p("textarea",{"onUpdate:modelValue":e[11]||(e[11]=o=>r.infofoto=o),class:"inp",rows:"3",placeholder:"ej. As\xED voy vestido"},null,512),[[Re,r.infofoto]])],512),pk,p("button",{onClick:e[12]||(e[12]=rt(o=>r.paso--,["prevent"])),class:"btn-gray"},"Volver")],32)])):ze("",!0),r.paso==3?(ee(),ne("div",gk,[p("form",{onSubmit:e[16]||(e[16]=rt(o=>i.previsualizar(),["prevent"]))},[mk,ke(p("textarea",{"onUpdate:modelValue":e[14]||(e[14]=o=>r.infoextra=o),class:"inp",rows:"5",placeholder:"ej. Llevo un camisa blanca"},null,512),[[Re,r.infoextra]]),yk,p("button",{onClick:e[15]||(e[15]=rt(o=>r.paso--,["prevent"])),class:"btn-gray"},"Volver")],32)])):ze("",!0),r.paso==4?(ee(),ne("div",vk,[_k,p("div",wk,[p("div",null,[bk,p("p",Ek,[Pt(Oe(r.destino)+" ",1),p("a",{href:r.mapa_google,target:"_blank",class:"font-semibold"},"(ver en Google Maps)",8,Tk)])]),r.info_destino.length>0?(ee(),ne("p",Ik,[Sk,Pt(Oe(r.info_destino),1)])):(ee(),ne("p",Ck,kk))]),p("div",Rk,[p("div",null,[Nk,p("p",xk,Oe(r.hora_salida)+":"+Oe(r.minutos_salida),1)]),p("div",null,[Dk,p("p",Pk,Oe(r.hora_alerta)+":"+Oe(r.minutos_alerta),1)])]),p("div",Ok,[Mk,r.infofoto.length>0?(ee(),ne("p",Lk,[Uk,Pt(" "+Oe(r.infofoto),1)])):(ee(),ne("p",Fk,Vk))]),p("div",null,[r.infoextra.length>0?(ee(),ne("p",$k,[jk,Pt(Oe(r.infoextra),1)])):(ee(),ne("p",Hk,Kk))]),r.paso==4?(ee(),ne("button",{key:0,onClick:e[17]||(e[17]=rt(o=>i.crearViaje(),["prevent"])),class:"btn-blue"}," Confirmar viaje ")):ze("",!0),p("button",{onClick:e[18]||(e[18]=rt(o=>r.paso--,["prevent"])),class:"btn-gray"},"Volver")])):ze("",!0)],64)}var Wk=ds(DA,[["render",zk],["__scopeId","data-v-405a4170"]]);const Gk={data(){return{correo_is:"",contrase\u00F1a_is:"",correo_cc:"",contrase\u00F1a_cc:"",nombre_cc:"",apellidos_cc:"",numero_cc:"",ciudad_cc:"",numero_contacto:"",correo_contacto:"",nombre_contacto:"",iniciar_sesi\u00F3n:1,paso:0,img:"",uid:""}},methods:{async crearCuenta(){await q0(We,this.correo_cc,this.contrase\u00F1a_cc).then(t=>{console.log(t.user)}).catch(t=>{}),W0(We.currentUser,{displayName:this.nombre_cc+" "+this.apellidos_cc}).then(()=>{}).catch(t=>{}),Tt(We,t=>{t&&(this.uid=t.uid,jm(Wt(Gt,"infoUsuarios",t.uid),{numero:this.numero_cc,nombres:this.nombre_cc,apellidos:this.apellidos_cc,ciudad:this.ciudad_cc,descripcion:""}))}),Tt(We,t=>{t&&(_o(Wt(Gt,"infoUsuarios",t.uid),{numero_contacto:this.numero_contacto,nombre_contacto:this.nombre_contacto,correo_contacto:this.correo_contacto}),this.paso=3)})},iniciarSesi\u00F3n(){K0(We,this.correo_is,this.contrase\u00F1a_is).then(t=>{this.$router.push("/")}).catch(t=>{})},subirPerfil(t){let e=this;this.img=t.target.files[0];const n=new FileReader;n.readAsDataURL(this.img),n.onload=function(s){const r=document.createElement("img");r.src=s.target.result,r.onload=function(i){const o=document.createElement("canvas"),a=500,c=a/i.target.width;o.width=a,o.height=c*i.target.height;const l=o.getContext("2d");l.drawImage(i.target,0,0,o.width,o.height);const u=l.canvas.toDataURL(i.target,"image/png");function h(y,T){for(var _=y.split(","),C=_[0].match(/:(.*?);/)[1],D=atob(_[1]),F=D.length,L=new Uint8Array(F);F--;)L[F]=D.charCodeAt(F);return new File([L],T,{type:C})}e.$refs.perfil.src=u;let d=e.$refs.omitir;d.innerHTML="Descartar cambios y continuar",e.$refs.subir.classList.remove("hidden"),e.$refs.subirperfil.addEventListener("submit",function(y){e.img=h(u,"perfil.png");const T=bu(Eu,"perfiles/"+e.uid);wu(T,e.img).then(_=>{e.paso++})}),d.addEventListener("click",function(y){e.paso++})}}},obtenerUsuario(){Tt(We,t=>{t&&this.$router.push("/")})}},mounted(){this.obtenerUsuario}},Xk={key:0},Yk=p("div",null,[p("h1",{class:"ttl-1"},"Bienvenido"),p("div",null,[p("h3",{class:"subttl"},"Crea una cuenta para comenzar")])],-1),Qk=p("button",{type:"submit",class:"btn-blue"},"Crear mi cuenta",-1),Jk={class:"mt-4 grid"},Zk=p("h3",{class:"subttl"},"\xBFYa tienes una cuenta?",-1),eR={class:"place-self-center"},tR={key:1},nR=p("h1",{class:"ttl-1"},"Ay\xFAdanos a ayudarte",-1),sR=p("h3",{class:"subttl"},"Queremos conocerte mejor",-1),rR=p("button",{type:"submit",class:"btn-blue"},"Continuar",-1),iR={key:2},oR=p("h1",{class:"ttl-1"},"\xBFA qui\xE9n quieres llegar?",-1),aR=p("h3",{class:"subttl"}," A este contacto enviaremos tu informaci\xF3n en caso de que te pase algo ",-1),cR=p("button",{type:"submit",class:"btn-blue"},"Actualizar informaci\xF3n",-1),lR={key:3},uR=p("h1",{class:"ttl-1"},"Sube una foto de perfil",-1),hR=p("h3",{class:"subttl"},"Intenta que se vea claramente tu rostro",-1),dR={class:"grid mt-8"},fR={class:"place-self-center grid"},pR={src:"https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/perfiles%2Fperfil.png?alt=media",alt:"perfil",ref:"perfil",width:"200",class:"perfil"},gR=p("label",{type:"input",for:"perfil",class:"btn-gray text-center"}," Subir imagen ",-1),mR={type:"submit",class:"btn-blue hidden",ref:"subir"},yR={type:"button",class:"btn-gray",ref:"omitir"},vR={key:4},_R=p("h1",{class:"ttl-1"},"Listo",-1),wR=p("h3",{class:"subttl"},"Configuramos tu cuenta exitosamente",-1),bR={key:5},ER=p("h1",{class:"ttl-1"},"Bienvenido",-1),TR=p("h3",{class:"subttl"},"Nos alegra verte otra vez",-1),IR=p("button",{type:"submit",id:"entrar",class:"btn-blue"}," Entrar a mi cuenta ",-1),SR={class:"mt-4 grid"},CR=p("h3",{class:"subttl"},"\xBFA\xFAn no tienes cuenta?",-1),AR={class:"place-self-center"};function kR(t,e,n,s,r,i){return ee(),ne(Ke,null,[r.iniciar_sesi\u00F3n==!1&&r.paso==0?(ee(),ne("div",Xk,[Yk,p("form",{id:"crearCuenta",onSubmit:e[2]||(e[2]=rt(o=>r.paso=1,["prevent"])),class:"mt-8"},[ke(p("input",{class:"inp",type:"email","onUpdate:modelValue":e[0]||(e[0]=o=>r.correo_cc=o),placeholder:"Tu correo electr\xF3nico"},null,512),[[Re,r.correo_cc]]),ke(p("input",{class:"inp mt-4",type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>r.contrase\u00F1a_cc=o),placeholder:"Una buena contrase\xF1a"},null,512),[[Re,r.contrase\u00F1a_cc]]),Qk],32),p("div",Jk,[Zk,p("div",eR,[p("button",{onClick:e[3]||(e[3]=o=>r.iniciar_sesi\u00F3n=!0),id:"botonInicio",class:"font-semibold underline"}," Inicia sesi\xF3n ")])])])):ze("",!0),r.paso==1?(ee(),ne("div",tR,[nR,sR,p("form",{id:"informaci\xF3nPersonal",onSubmit:e[8]||(e[8]=rt(o=>r.paso=2,["prevent"])),class:"mt-8"},[ke(p("input",{type:"text",placeholder:"Tu nombre(s)","onUpdate:modelValue":e[4]||(e[4]=o=>r.nombre_cc=o),class:"inp"},null,512),[[Re,r.nombre_cc]]),ke(p("input",{type:"text",placeholder:"Tu apellido(s)","onUpdate:modelValue":e[5]||(e[5]=o=>r.apellidos_cc=o),class:"inp mt-4"},null,512),[[Re,r.apellidos_cc]]),ke(p("input",{type:"number",placeholder:"Tu n\xFAmero de tel\xE9fono, a 10 d\xEDgitos","onUpdate:modelValue":e[6]||(e[6]=o=>r.numero_cc=o),class:"inp mt-4"},null,512),[[Re,r.numero_cc]]),ke(p("input",{type:"text",placeholder:"Ciudad donde vives","onUpdate:modelValue":e[7]||(e[7]=o=>r.ciudad_cc=o),class:"inp mt-4"},null,512),[[Re,r.ciudad_cc]]),rR],32)])):ze("",!0),r.paso==2?(ee(),ne("div",iR,[oR,aR,p("form",{onSubmit:e[12]||(e[12]=rt(o=>(r.paso=3,i.crearCuenta()),["prevent"])),class:"mt-8"},[ke(p("input",{type:"cel",placeholder:"N\xFAmero telef\xF3nico de 10 d\xEDgitos","onUpdate:modelValue":e[9]||(e[9]=o=>r.numero_contacto=o),class:"inp",required:""},null,512),[[Re,r.numero_contacto]]),ke(p("input",{type:"email",placeholder:"Correo electr\xF3nico","onUpdate:modelValue":e[10]||(e[10]=o=>r.correo_contacto=o),class:"inp mt-4",required:""},null,512),[[Re,r.correo_contacto]]),ke(p("input",{type:"text",placeholder:"Nombre de la persona (opcional)",class:"inp mt-4","onUpdate:modelValue":e[11]||(e[11]=o=>r.nombre_contacto=o)},null,512),[[Re,r.nombre_contacto]]),cR],32)])):ze("",!0),r.paso==3?(ee(),ne("div",lR,[uR,hR,p("form",{onSubmit:e[14]||(e[14]=rt(()=>{},["prevent"])),ref:"subirperfil"},[p("div",dR,[p("div",fR,[p("img",pR,null,512),gR,p("input",{id:"perfil",type:"file",accept:".jpg, .jpeg, .png",onChange:e[13]||(e[13]=o=>i.subirPerfil(o)),class:"hidden",required:""},null,32)]),p("button",mR," Actualizar mi perfil ",512),p("button",yR,"Omitir",512)])],544)])):ze("",!0),r.paso==4?(ee(),ne("div",vR,[_R,wR,p("button",{class:"btn-gray",onClick:e[15]||(e[15]=o=>i.obtenerUsuario())},"Ir a inicio")])):ze("",!0),r.iniciar_sesi\u00F3n==!0?(ee(),ne("div",bR,[ER,TR,p("form",{onSubmit:e[18]||(e[18]=rt(o=>i.iniciarSesi\u00F3n(),["prevent"])),class:"mt-8"},[ke(p("input",{class:"inp",type:"email",placeholder:"Tu correo electr\xF3nico","onUpdate:modelValue":e[16]||(e[16]=o=>r.correo_is=o)},null,512),[[Re,r.correo_is]]),ke(p("input",{class:"inp mt-4",type:"password",placeholder:"Tu contrase\xF1a","onUpdate:modelValue":e[17]||(e[17]=o=>r.contrase\u00F1a_is=o)},null,512),[[Re,r.contrase\u00F1a_is]]),IR],32),p("div",SR,[CR,p("div",AR,[p("button",{class:"font-semibold underline",onClick:e[19]||(e[19]=o=>r.iniciar_sesi\u00F3n=!1),id:"botonCrearCuenta"}," Crea una ")])])])):ze("",!0)],64)}var Bd=ds(Gk,[["render",kR]]);const RR={data(){return{datos:[],clave:"",paso:0}},methods:{async rastrear(){this.obtenerUsuario();const t=Wt(Gt,"viajes",this.clave.trim()),e=await ha(t);e.exists()&&(this.datos=e.data(),this.paso=1)},obtenerUsuario(){Tt(We,t=>{t||this.$router.push("/login")})}},mounted(){}},NR=p("h1",{class:"ttl-1"},"Rastrear",-1),xR=p("button",{type:"submit",class:"btn-gray"},"Buscar",-1),DR=p("p",{class:"note mt-4 text-gray-400"}," Recuerda que solamente podr\xE1s rastrear a una persona si te tiene entre sus contactos de confianza ",-1),PR={key:0},OR={class:"mt-4 grid grid-cols-2 gap-2"},MR=p("p",{class:"lbl"},"Destino",-1),LR={class:"note"},UR=["href"],FR={key:0,class:"note"},BR=p("span",{class:"notettl"},"Detalles",-1),VR={key:1,class:"note"},$R=p("span",{class:"notettl"},"No se agregaron m\xE1s detalles",-1),jR=[$R],HR={class:"grid grid-cols-2 gap-2"},qR=p("p",{class:"lbl"},"Hora de salida",-1),KR={class:"note"},zR=p("p",{class:"lbl"},"Hora de regreso",-1),WR={class:"note"},GR={class:"grid grid-cols-2 gap-2"},XR=["src"],YR={key:0,class:"note"},QR=p("span",{class:"notettl"},"Nota de foto",-1),JR={key:1,class:"note"},ZR=p("span",{class:"notettl"},"No se agreg\xF3 nota de foto",-1),eN=[ZR],tN={key:0,class:"note"},nN=p("span",{class:"notettl"},"Nota",-1),sN={key:1,class:"note"},rN=p("span",{class:"notettl"},"No se agreg\xF3 una nota",-1),iN=[rN];function oN(t,e,n,s,r,i){return ee(),ne(Ke,null,[NR,p("div",null,[r.paso==0?(ee(),ne("form",{key:0,onSubmit:e[1]||(e[1]=rt(o=>i.rastrear(),["prevent"])),class:"mt-4"},[ke(p("input",{type:"text",placeholder:"Clave de viaje","onUpdate:modelValue":e[0]||(e[0]=o=>r.clave=o),class:"inp"},null,512),[[Re,r.clave]]),xR,DR],32)):ze("",!0)]),r.paso==1?(ee(),ne("div",PR,[p("div",OR,[p("div",null,[MR,p("p",LR,[Pt(Oe(r.datos.destino)+" ",1),p("a",{href:r.datos.mapa,target:"_blank",class:"font-semibold"},"(ver en Google Maps)",8,UR)])]),r.datos.infoextra_destino.length>0?(ee(),ne("p",FR,[BR,Pt(Oe(r.datos.info_destino),1)])):(ee(),ne("p",VR,jR))]),p("div",HR,[p("div",null,[qR,p("p",KR,Oe(r.datos.hora_salida),1)]),p("div",null,[zR,p("p",WR,Oe(r.datos.hora_llegada),1)])]),p("div",GR,[p("img",{src:r.datos.img,alt:"Imagen de viaje",class:"rounded-lg w-full mb-2 shadow-md"},null,8,XR),r.datos.infoimg.length>0?(ee(),ne("p",YR,[QR,Pt(" "+Oe(r.datos.infoimg),1)])):(ee(),ne("p",JR,eN))]),p("div",null,[r.datos.infoextra.length>0?(ee(),ne("p",tN,[nN,Pt(Oe(r.datos.infoextra),1)])):(ee(),ne("p",sN,iN))])])):ze("",!0)],64)}var aN=ds(RR,[["render",oN]]);const cN={data(){return{datos:[],img:null,uid:"",paso:0,nombres:"",nueva_descripcion:""}},computed:{currentRouteName(){return this.$route.name}},methods:{cerrarSesi\u00F3n(){G0(We).then(()=>{this.$router.push("/login")}).catch(t=>{})},obtenerUsuario(){let t=this;Tt(We,e=>{e?(this.uid=e.uid,this.nombres=e.displayName,this.$route.name=="cuenta"&&fetch("https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/perfiles%2F"+this.uid).then(function(n){return n.json()}).then(function(n){n.name&&(t.$refs.perfil.src="https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/perfiles%2F"+t.uid+"?alt=media")})):this.$router.push("/login")})},subirImg(t){let e=this;this.img=t.target.files[0];const n=new FileReader;n.readAsDataURL(this.img),n.onload=function(s){const r=document.createElement("img");r.src=s.target.result,r.onload=function(i){const o=document.createElement("canvas"),a=500,c=a/i.target.width;o.width=a,o.height=c*i.target.height;const l=o.getContext("2d");l.drawImage(i.target,0,0,o.width,o.height);const u=l.canvas.toDataURL(i.target,"image/png");e.$refs.perfil.src=u,e.img=1}}},async guardar(){let t=this;function e(s,r){for(var i=s.split(","),o=i[0].match(/:(.*?);/)[1],a=atob(i[1]),c=a.length,l=new Uint8Array(c);c--;)l[c]=a.charCodeAt(c);return new File([l],r,{type:o})}if(t.img==1){var n=e(t.$refs.perfil.src,"perfil.png");const s=bu(Eu,"perfiles/"+t.uid);await wu(s,n).then(r=>{})}await Tt(We,s=>{s&&_o(Wt(Gt,"infoUsuarios",s.uid),{descripcion:t.nueva_descripcion}),this.reload()})},reload(){this.$router.go()}},async mounted(){this.obtenerUsuario(),Tt(We,async t=>{if(t){const e=Wt(Gt,"infoUsuarios",t.uid),n=await ha(e);n.exists()&&(this.datos=n.data()),this.nueva_descripcion=this.datos.descripcion}})}},lN={class:"grid"},uN=p("h1",{class:"text-3xl font-bold text-center tracking-wide"},"Mi cuenta",-1),hN={class:"place-self-center pt-4 grid mt-6"},dN={src:"https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/perfiles%2Fperfil.png?alt=media",alt:"perfil",ref:"perfil",width:"200",class:"perfil"},fN={class:"text-3xl font-semibold tracking-wide text-center mt-5"},pN={class:"mt-2 text-center text-sm"},gN=p("i",{class:"fa-solid fa-location-pin"},null,-1),mN={key:0,class:"grid"},yN=p("p",{class:"mt-8 px-4 font-semibold"},"Acerca de ti",-1),vN={key:0,class:"px-4"},_N={key:1,class:"px-4"},wN={key:0,class:"grid"},bN=p("label",{type:"input",for:"perfil",class:"btn-gray my-4 border-0 text-center justify-self-center"}," Actualizar foto de perfil ",-1);function EN(t,e,n,s,r,i){return ee(),ne(Ke,null,[p("div",lN,[uN,p("div",hN,[p("img",dN,null,512)]),p("h4",fN,Oe(r.nombres),1),p("p",pN,[gN,Pt("\xA0\xA0"+Oe(r.datos.ciudad),1)]),r.paso==0?(ee(),ne("div",mN,[yN,r.datos.descripcion?(ee(),ne("p",vN,Oe(r.datos.descripcion),1)):(ee(),ne("p",_N," \xBFQu\xE9 te gustar\xEDa que el mundo supiera de "+Oe(r.datos.nombres)+"? Edita tu perfil para actualizar tu descripci\xF3n ",1)),p("button",{onClick:e[0]||(e[0]=o=>r.paso=1),class:"btn-blue mt-12"}," Editar perfil "),p("button",{onClick:e[1]||(e[1]=o=>i.cerrarSesi\u00F3n()),class:"btn-red"},"Cerrar sesi\xF3n")])):ze("",!0)]),r.paso==1?(ee(),ne("div",wN,[bN,p("input",{id:"perfil",type:"file",accept:".jpg, .jpeg, .png",onChange:e[2]||(e[2]=o=>i.subirImg(o)),class:"hidden",required:""},null,32),ke(p("textarea",{class:"inp",placeholder:"A\xF1ade una descripci\xF3n. Dile al mundo sobre ti...","onUpdate:modelValue":e[3]||(e[3]=o=>r.nueva_descripcion=o)},null,512),[[Re,r.nueva_descripcion]]),p("button",{onClick:e[4]||(e[4]=o=>i.guardar()),ref:"guardar",class:"btn-blue"}," Guardar cambios ",512),p("button",{onClick:e[5]||(e[5]=o=>i.reload()),class:"btn-gray"},"Volver y descartar")])):ze("",!0)],64)}var TN=ds(cN,[["render",EN]]);const IN={},SN=p("h1",{class:"ttl-1"},"Lo sentimos",-1),CN=p("p",{class:"note mt-4"}," Esta funcionalidad sigue en construcci\xF3n, pero estamos trabajando d\xEDa a d\xEDa para mejorar tu experiencia ",-1);function AN(t,e){return ee(),ne(Ke,null,[SN,CN,p("button",{class:"btn-blue",onClick:e[0]||(e[0]=n=>t.$router.push("/"))}," Volver a inicio ")],64)}var kN=ds(IN,[["render",AN]]);const RN=[{path:"/",name:"home",component:xA},{path:"/viajar",name:"viajar",component:Wk},{path:"/login",name:"login",component:Bd},{path:"/rastrear",name:"rastrear",component:aN},{path:"/cuenta",name:"cuenta",component:TN},{path:"/404",name:"404",component:kN},{path:"/if-lost/",component:Bd}],NN=Uw({history:Z_(),routes:RN}),xN={data(){return{datos:[],tempo:!1,uid:""}},methods:{Temporizador(t){let e=this;var n=new Date(t).getTime();this.$refs.tempodiv.classList.remove("hidden");var s=setInterval(function(){var r=new Date().getTime(),i=n-r,o=Math.floor(i%(1e3*60*60*24)/(1e3*60*60)),a=Math.floor(i%(1e3*60*60)/(1e3*60)),c=Math.floor(i%(1e3*60)/1e3);o>1?document.getElementById("temporizador").innerHTML="Tu alerta se enviar\xE1 en<br/>"+o+" horas "+a+" minutos ":(a<10&&e.$refs.tempodiv.classList.add("bg-red-400"),document.getElementById("temporizador").innerHTML="Tu alerta se enviar\xE1 en<br/>"+a+" minutos "+c+" segundos "),i<0&&(clearInterval(s),document.getElementById("temporizador").innerHTML="Nos est\xE1mos poniendo en contancto con tu contacto de confianza",e.enviarCorreo())},1e3)},async enviarCorreo(){let t,e=[];await Tt(We,s=>{s&&(t=s.displayName)});let n=t.split(" ");e={nombre:n[0],apellido:n[1],destino:this.destino,hora_alerta:this.datos.hora_llegada,clave:this.uid,email:this.datos.correo_contacto},emailjs.send("default_service","alerta_iflost",e).then(async()=>{document.getElementById("temporizador").innerHTML="Listo, enviamos un correo a tu contacto de confianza";const s=Wt(Gt,"viajes",clave);await _o(s,{fecha_alerta:0})},s=>{})},obtenerTemporizador(){Tt(We,async t=>{if(t){this.uid=t.uid,this.$refs.accesos.classList.remove("hidden");const e=Wt(Gt,"viajes",t.uid),n=await ha(e);n.exists()&&(this.datos=n.data(),this.datos.fecha_alerta>1&&(this.Temporizador(this.datos.fecha_alerta),this.tempo=!0,this.$refs.views.classList.add("mb-12")))}else this.$refs.accesos.classList.add("hidden"),this.$refs.tempodiv.classList.add("hidden")})},async cancelarAlerta(){const t=Wt(Gt,"viajes",this.uid);await _o(t,{fecha_alerta:0}),location.reload()}},mounted(){this.obtenerTemporizador(),emailjs.init("NDQJF30o6mjc6lt_F")},watch:{$route:function(t,e){this.obtenerTemporizador()}}},DN={class:"p-5",ref:"views"},PN={class:"grid"},ON={ref:"tempodiv",class:"alerta hidden"},MN={class:"justify-self-end place-content-center"},LN={id:"temporizador",ref:"temporizador",class:"text-white animate-pulse pl-2 text-sm font-medium"},UN={class:"grid grid-cols-1 mt-24"},FN={class:"menu-hidden",ref:"menu"},BN={class:"grid grid-rows-2"},VN=p("i",{class:"fa-solid fa-angle-up justify-self-center hover:animate-pulse"},null,-1),$N={class:"grid grid-cols-2"},jN=p("div",{class:"grid"},[p("img",{src:"https://firebasestorage.googleapis.com/v0/b/if-lost-159f6.appspot.com/o/logo.png?alt=media",alt:"logo",class:"max-h-12 p-3 self-center"})],-1),HN={class:"flex mb-2",ref:"accesos"},qN=p("i",{class:"fa-solid fa-house justify-self-center self-center"},null,-1),KN=p("i",{class:"fa-solid fa-newspaper justify-self-center self-center"},null,-1),zN=p("i",{class:"fa-solid fa-user justify-self-center self-center"},null,-1);function WN(t,e,n,s,r,i){const o=zu("router-view"),a=zu("router-link");return ee(),ne(Ke,null,[p("div",DN,[Xe(o)],512),p("div",PN,[p("div",ON,[p("div",MN,[p("p",LN,null,512)]),r.tempo==!0?(ee(),ne("button",{key:0,class:"btn-red rounded-full mr-5 ml-5 mt-0 w-[33%] text-sm",onClick:e[0]||(e[0]=c=>i.cancelarAlerta())}," Cancelar alerta ")):ze("",!0)],512)]),p("div",UN,[p("div",FN,[p("div",BN,[VN,p("div",$N,[jN,p("div",HN,[Xe(a,{class:"btn-menu",to:"/"},{default:Di(()=>[qN]),_:1}),Xe(a,{class:"btn-menu",to:"/404"},{default:Di(()=>[KN]),_:1}),Xe(a,{class:"btn-menu",to:"/cuenta"},{default:Di(()=>[zN]),_:1})],512)])])],512)])],64)}var GN=ds(xN,[["render",WN]]);D_(GN).use(NN).mount("#app");
