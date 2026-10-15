/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Dr(n){const e=Object.create(null);for(const a of n.split(","))e[a]=1;return a=>a in e}const Mn={},ka=[],Le=()=>{},Zo=()=>!1,Pt=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ai=n=>n.startsWith("onUpdate:"),Yn=Object.assign,Lr=(n,e)=>{const a=n.indexOf(e);a>-1&&n.splice(a,1)},_u=Object.prototype.hasOwnProperty,Bn=(n,e)=>_u.call(n,e),dn=Array.isArray,oa=n=>Ot(n)==="[object Map]",ui=n=>Ot(n)==="[object Set]",ks=n=>Ot(n)==="[object Date]",fn=n=>typeof n=="function",Nn=n=>typeof n=="string",ve=n=>typeof n=="symbol",kn=n=>n!==null&&typeof n=="object",qo=n=>(kn(n)||fn(n))&&fn(n.then)&&fn(n.catch),Qo=Object.prototype.toString,Ot=n=>Qo.call(n),Su=n=>Ot(n).slice(8,-1),nl=n=>Ot(n)==="[object Object]",Ei=n=>Nn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ba=Dr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ti=n=>{const e=Object.create(null);return(a=>e[a]||(e[a]=n(a)))},ku=/-\w/g,ne=Ti(n=>n.replace(ku,e=>e.slice(1).toUpperCase())),xu=/\B([A-Z])/g,ha=Ti(n=>n.replace(xu,"-$1").toLowerCase()),Rt=Ti(n=>n.charAt(0).toUpperCase()+n.slice(1)),Wi=Ti(n=>n?`on${Rt(n)}`:""),De=(n,e)=>!Object.is(n,e),$i=(n,...e)=>{for(let a=0;a<n.length;a++)n[a](...e)},el=(n,e,a,t=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:t,value:a})},Bu=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Au=n=>{const e=Nn(n)?Number(n):NaN;return isNaN(e)?n:e};let xs;const Ii=()=>xs||(xs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function En(n){if(dn(n)){const e={};for(let a=0;a<n.length;a++){const t=n[a],i=Nn(t)?Mu(t):En(t);if(i)for(const r in i)e[r]=i[r]}return e}else if(Nn(n)||kn(n))return n}const Eu=/;(?![^(]*\))/g,Tu=/:([^]+)/,Iu=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Mu(n){const e={};return n.replace(Iu,a=>a.startsWith("/*")?"":a).split(Eu).forEach(a=>{if(a){const t=a.split(Tu);t.length>1&&(e[t[0].trim()]=t[1].trim())}}),e}function Kn(n){let e="";if(Nn(n))e=n;else if(dn(n))for(let a=0;a<n.length;a++){const t=Kn(n[a]);t&&(e+=t+" ")}else if(kn(n))for(const a in n)n[a]&&(e+=a+" ");return e.trim()}function Ji(n){if(!n)return null;let{class:e,style:a}=n;return e&&!Nn(e)&&(n.class=Kn(e)),a&&(n.style=En(a)),n}const Cu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pu=Dr(Cu);function al(n){return!!n||n===""}function Ou(n,e,a){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Mi(n[i],e[i],a);return t}function Bs(n,e,a){if(n.size!==e.size)return!1;const t=Array.from(e),i=new Uint8Array(t.length);for(const r of n){let s=-1;for(let o=0;o<t.length;o++)if(!i[o]&&Mi(r,t[o],a)){s=o;break}if(s<0)return!1;i[s]=1}return!0}function Ru(n,e,a){let t=oa(n),i=oa(e);if(t||i||(t=ui(n),i=ui(e),t||i))return t&&i?Bs(n,e,a):!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const l=n.hasOwnProperty(o),u=e.hasOwnProperty(o);if(l&&!u||!l&&u||!Mi(n[o],e[o],a))return!1}return String(n)===String(e)}function As(n,e,a,t){a||(a=[new Map,new Map]);const[i,r]=a;if(i.has(n)||r.has(e))return i.get(n)===e&&r.get(e)===n;i.set(n,e),r.set(e,n);const s=t(n,e,a);return i.delete(n),r.delete(e),s}function Mi(n,e,a){if(n===e)return!0;let t=ks(n),i=ks(e);return t||i?t&&i?n.getTime()===e.getTime():!1:(t=ve(n),i=ve(e),t||i?n===e:(t=dn(n),i=dn(e),t||i?t&&i?As(n,e,a,Ou):!1:(t=kn(n),i=kn(e),t||i?!t||!i?!1:As(n,e,a,Ru):String(n)===String(e))))}const tl=n=>!!(n&&n.__v_isRef===!0),en=n=>Nn(n)?n:n==null?"":dn(n)||kn(n)&&(n.toString===Qo||!fn(n.toString))?tl(n)?en(n.value):JSON.stringify(n,il,2):String(n),il=(n,e)=>tl(e)?il(n,e.value):oa(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((a,[t,i],r)=>(a[Xi(t,r)+" =>"]=i,a),{})}:ui(e)?{[`Set(${e.size})`]:[...e.values()].map(a=>Xi(a))}:ve(e)?Xi(e):kn(e)&&!dn(e)&&!nl(e)?String(e):e,Xi=(n,e="")=>{var a;return ve(n)?`Symbol(${(a=n.description)!=null?a:e})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wn;class Nu{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Wn&&(Wn.active?(this.parent=Wn,this.index=(Wn.scopes||(Wn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,a;if(this.scopes){const t=this.scopes.slice();for(e=0,a=t.length;e<a;e++)t[e].pause()}for(e=0,a=this.effects.length;e<a;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,a;if(this.scopes){const i=this.scopes.slice();for(e=0,a=i.length;e<a;e++)i[e].resume()}const t=this.effects.slice();for(e=0,a=t.length;e<a;e++)t[e].resume()}}run(e){if(this._active){const a=Wn;try{return Wn=this,e()}finally{Wn=a}}}on(){++this._on===1&&(this.prevScope=Wn,Wn=this)}off(){if(this._on>0&&--this._on===0){if(Wn===this)Wn=this.prevScope;else{let e=Wn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let a,t;for(a=0,t=this.effects.length;a<t;a++)this.effects[a].stop();for(this.effects.length=0,a=0,t=this.cleanups.length;a<t;a++)this.cleanups[a]();if(this.cleanups.length=0,this.scopes){const i=this.scopes.slice();for(a=0,t=i.length;a<t;a++)i[a].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ci(){return Wn}function Du(n,e=!1){Wn&&Wn.cleanups.push(n)}let Rn;const Zi=new WeakSet;class rl{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Wn&&(Wn.active?Wn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Zi.has(this)&&(Zi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ol(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Es(this),ll(this);const e=Rn,a=Te;Rn=this,Te=!0;try{return this.fn()}finally{cl(this),Rn=e,Te=a,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vr(e);this.deps=this.depsTail=void 0,Es(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Zi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gr(this)&&this.run()}get dirty(){return gr(this)}}let sl=0,ht,vt;function ol(n,e=!1){if(n.flags|=8,e){n.next=vt,vt=n;return}n.next=ht,ht=n}function Hr(){sl++}function Fr(){if(--sl>0)return;if(vt){let e=vt;for(vt=void 0;e;){const a=e.next;e.next=void 0,e.flags&=-9,e=a}}let n;for(;ht;){let e=ht;for(ht=void 0;e;){const a=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(t){n||(n=t)}e=a}}if(n)throw n}function ll(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cl(n){let e,a=n.depsTail,t=a;for(;t;){const i=t.prevDep;t.version===-1?(t===a&&(a=i),Vr(t),Lu(t)):e=t,t.dep.activeLink=t.prevActiveLink,t.prevActiveLink=void 0,t=i}n.deps=e,n.depsTail=a}function gr(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ul(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ul(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===_t)||(n.globalVersion=_t,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!gr(n))))return;n.flags|=2;const e=n.dep,a=Rn,t=Te;Rn=n,Te=!0;try{ll(n);const i=n.fn(n._value);(e.version===0||De(i,n._value))&&(n.flags|=128,n._value=i,e.version++)}catch(i){throw e.version++,i}finally{Rn=a,Te=t,cl(n),n.flags&=-3}}function Vr(n,e=!1){const{dep:a,prevSub:t,nextSub:i}=n;if(t&&(t.nextSub=i,n.prevSub=void 0),i&&(i.prevSub=t,n.nextSub=void 0),a.subs===n&&(a.subs=t,!t&&a.computed)){a.computed.flags&=-5;for(let r=a.computed.deps;r;r=r.nextDep)Vr(r,!0)}!e&&!--a.sc&&a.map&&a.map.delete(a.key)}function Lu(n){const{prevDep:e,nextDep:a}=n;e&&(e.nextDep=a,n.prevDep=void 0),a&&(a.prevDep=e,n.nextDep=void 0)}let Te=!0;const dl=[];function qe(){dl.push(Te),Te=!1}function Qe(){const n=dl.pop();Te=n===void 0?!0:n}function Es(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const a=Rn;Rn=void 0;try{e()}finally{Rn=a}}}let _t=0;class Hu{constructor(e,a){this.sub=e,this.dep=a,this.version=a.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pi{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Rn||!Te||Rn===this.computed)return;let a=this.activeLink;if(a===void 0||a.sub!==Rn)a=this.activeLink=new Hu(Rn,this),Rn.deps?(a.prevDep=Rn.depsTail,Rn.depsTail.nextDep=a,Rn.depsTail=a):Rn.deps=Rn.depsTail=a,ml(a);else if(a.version===-1&&(a.version=this.version,a.nextDep)){const t=a.nextDep;t.prevDep=a.prevDep,a.prevDep&&(a.prevDep.nextDep=t),a.prevDep=Rn.depsTail,a.nextDep=void 0,Rn.depsTail.nextDep=a,Rn.depsTail=a,Rn.deps===a&&(Rn.deps=t)}return a}trigger(e){this.version++,_t++,this.notify(e)}notify(e){Hr();try{for(let a=this.subs;a;a=a.prevSub)a.sub.notify()&&a.sub.dep.notify()}finally{Fr()}}}function ml(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let t=e.deps;t;t=t.nextDep)ml(t)}const a=n.dep.subs;a!==n&&(n.prevSub=a,a&&(a.nextSub=n)),n.dep.subs=n}}const di=new WeakMap,Aa=Symbol(""),yr=Symbol(""),St=Symbol("");function te(n,e,a){if(Te&&Rn){let t=di.get(n);t||di.set(n,t=new Map);let i=t.get(a);i||(t.set(a,i=new Pi),i.map=t,i.key=a),i.track()}}function Ge(n,e,a,t,i,r){const s=di.get(n);if(!s){_t++;return}const o=l=>{l&&l.trigger()};if(Hr(),e==="clear")s.forEach(o);else{const l=dn(n),u=l&&Ei(a);if(l&&a==="length"){const c=Number(t);s.forEach((d,m)=>{(m==="length"||m===St||!ve(m)&&m>=c)&&o(d)})}else switch((a!==void 0||s.has(void 0))&&o(s.get(a)),u&&o(s.get(St)),e){case"add":l?u&&o(s.get("length")):(o(s.get(Aa)),oa(n)&&o(s.get(yr)));break;case"delete":l||(o(s.get(Aa)),oa(n)&&o(s.get(yr)));break;case"set":oa(n)&&o(s.get(Aa));break}}Fr()}function Fu(n,e){const a=di.get(n);return a&&a.get(e)}function Na(n){const e=wn(n);return e===n||(te(e,"iterate",St),fe(n))?e:He(n)?Je(n)?e.map(a=>ma(ke(a))):e.map(ma):e.map(ke)}function Oi(n){return te(n=wn(n),"iterate",St),n}function Ne(n,e){return He(n)?ma(Je(n)?ke(e):e):ke(e)}const Vu={__proto__:null,[Symbol.iterator](){return qi(this,Symbol.iterator,n=>Ne(this,n))},concat(...n){return Na(this).concat(...n.map(e=>dn(e)?Na(e):e))},entries(){return qi(this,"entries",n=>(n[1]=Ne(this,n[1]),n))},every(n,e){return Ve(this,"every",n,e,void 0,arguments)},filter(n,e){return Ve(this,"filter",n,e,a=>a.map(t=>Ne(this,t)),arguments)},find(n,e){return Ve(this,"find",n,e,a=>Ne(this,a),arguments)},findIndex(n,e){return Ve(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ve(this,"findLast",n,e,a=>Ne(this,a),arguments)},findLastIndex(n,e){return Ve(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ve(this,"forEach",n,e,void 0,arguments)},includes(...n){return Qi(this,"includes",n)},indexOf(...n){return Qi(this,"indexOf",n)},join(n){return Na(this).join(n)},lastIndexOf(...n){return Qi(this,"lastIndexOf",n)},map(n,e){return Ve(this,"map",n,e,void 0,arguments)},pop(){return ot(this,"pop")},push(...n){return ot(this,"push",n)},reduce(n,...e){return Ts(this,"reduce",n,e)},reduceRight(n,...e){return Ts(this,"reduceRight",n,e)},shift(){return ot(this,"shift")},some(n,e){return Ve(this,"some",n,e,void 0,arguments)},splice(...n){return ot(this,"splice",n)},toReversed(){return Na(this).toReversed()},toSorted(n){return Na(this).toSorted(n)},toSpliced(...n){return Na(this).toSpliced(...n)},unshift(...n){return ot(this,"unshift",n)},values(){return qi(this,"values",n=>Ne(this,n))}};function qi(n,e,a){const t=Oi(n),i=t[e]();return t!==n&&!fe(n)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=a(r.value)),r}),i}const Ku=Array.prototype;function Ve(n,e,a,t,i,r){const s=Oi(n),o=s!==n&&!fe(n),l=s[e];if(l!==Ku[e]){const d=l.apply(n,r);return o?ke(d):d}let u=a;s!==n&&(o?u=function(d,m){return a.call(this,Ne(n,d),m,n)}:a.length>2&&(u=function(d,m){return a.call(this,d,m,n)}));const c=l.call(s,u,t);return o&&i?i(c):c}function Ts(n,e,a,t){const i=Oi(n),r=i!==n&&!fe(n);let s=a,o=!1;i!==n&&(r?(o=t.length===0,s=function(u,c,d){return o&&(o=!1,u=Ne(n,u)),a.call(this,u,Ne(n,c),d,n)}):a.length>3&&(s=function(u,c,d){return a.call(this,u,c,d,n)}));const l=i[e](s,...t);return o?Ne(n,l):l}function Qi(n,e,a){const t=wn(n);te(t,"iterate",St);const i=t[e](...a);return(i===-1||i===!1)&&Di(a[0])?(a[0]=wn(a[0]),t[e](...a)):i}function ot(n,e,a=[]){qe(),Hr();const t=wn(n)[e].apply(n,a);return Fr(),Qe(),t}const zu=Dr("__proto__,__v_isRef,__isVue"),pl=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ve));function ju(n){ve(n)||(n=String(n));const e=wn(this);return te(e,"has",n),e.hasOwnProperty(n)}class fl{constructor(e=!1,a=!1){this._isReadonly=e,this._isShallow=a}get(e,a,t){if(a==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(a==="__v_isReactive")return!i;if(a==="__v_isReadonly")return i;if(a==="__v_isShallow")return r;if(a==="__v_raw")return t===(i?r?wl:yl:r?gl:bl).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(t)?e:void 0;const s=dn(e);if(!i){let l;if(s&&(l=Vu[a]))return l;if(a==="hasOwnProperty")return ju}const o=Reflect.get(e,a,zn(e)?e:t);if((ve(a)?pl.has(a):zu(a))||(i||te(e,"get",a),r))return o;if(zn(o)){const l=s&&Ei(a)?o:o.value;return i&&kn(l)?da(l):l}return kn(o)?i?da(o):ua(o):o}}class hl extends fl{constructor(e=!1){super(!1,e)}set(e,a,t,i){let r=e[a];const s=dn(e)&&Ei(a);if(!this._isShallow){const u=He(r);if(!fe(t)&&!He(t)&&(r=wn(r),t=wn(t)),!s&&zn(r)&&!zn(t))return u||(r.value=t),!0}const o=s?Number(a)<e.length:Bn(e,a),l=Reflect.set(e,a,t,zn(e)?e:i);return e===wn(i)&&l&&(o?De(t,r)&&Ge(e,"set",a,t):Ge(e,"add",a,t)),l}deleteProperty(e,a){const t=Bn(e,a);e[a];const i=Reflect.deleteProperty(e,a);return i&&t&&Ge(e,"delete",a,void 0),i}has(e,a){const t=Reflect.has(e,a);return(!ve(a)||!pl.has(a))&&te(e,"has",a),t}ownKeys(e){return te(e,"iterate",dn(e)?"length":Aa),Reflect.ownKeys(e)}}class vl extends fl{constructor(e=!1){super(!0,e)}set(e,a){return!0}deleteProperty(e,a){return!0}}const Yu=new hl,Uu=new vl,Gu=new hl(!0),Wu=new vl(!0),wr=n=>n,Ut=n=>Reflect.getPrototypeOf(n);function $u(n,e,a){return function(...t){const i=this.__v_raw,r=wn(i),s=oa(r),o=n==="entries"||n===Symbol.iterator&&s,l=n==="keys"&&s,u=i[n](...t),c=a?wr:e?ma:ke;return!e&&te(r,"iterate",l?yr:Aa),Yn(Object.create(u),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:o?[c(d[0]),c(d[1])]:c(d),done:m}}})}}function Gt(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Ju(n,e){const a={get(i){const r=this.__v_raw,s=wn(r),o=wn(i);n||(De(i,o)&&te(s,"get",i),te(s,"get",o));const{has:l}=Ut(s),u=e?wr:n?ma:ke;if(l.call(s,i))return u(r.get(i));if(l.call(s,o))return u(r.get(o));r!==s&&r.get(i)},get size(){const i=this.__v_raw;return!n&&te(wn(i),"iterate",Aa),i.size},has(i){const r=this.__v_raw,s=wn(r),o=wn(i);return n||(De(i,o)&&te(s,"has",i),te(s,"has",o)),i===o?r.has(i):r.has(i)||r.has(o)},forEach(i,r){const s=this,o=s.__v_raw,l=wn(o),u=e?wr:n?ma:ke;return!n&&te(l,"iterate",Aa),o.forEach((c,d)=>i.call(r,u(c),u(d),s))}};return Yn(a,n?{add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear")}:{add(i){const r=wn(this),s=Ut(r),o=wn(i),l=!e&&!fe(i)&&!He(i)?o:i;return s.has.call(r,l)||De(i,l)&&s.has.call(r,i)||De(o,l)&&s.has.call(r,o)||(r.add(l),Ge(r,"add",l,l)),this},set(i,r){!e&&!fe(r)&&!He(r)&&(r=wn(r));const s=wn(this),{has:o,get:l}=Ut(s);let u=o.call(s,i);u||(i=wn(i),u=o.call(s,i));const c=l.call(s,i);return s.set(i,r),u?De(r,c)&&Ge(s,"set",i,r):Ge(s,"add",i,r),this},delete(i){const r=wn(this),{has:s,get:o}=Ut(r);let l=s.call(r,i);l||(i=wn(i),l=s.call(r,i)),o&&o.call(r,i);const u=r.delete(i);return l&&Ge(r,"delete",i,void 0),u},clear(){const i=wn(this),r=i.size!==0,s=i.clear();return r&&Ge(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{a[i]=$u(i,n,e)}),a}function Ri(n,e){const a=Ju(n,e);return(t,i,r)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?t:Reflect.get(Bn(a,i)&&i in t?a:t,i,r)}const Xu={get:Ri(!1,!1)},Zu={get:Ri(!1,!0)},qu={get:Ri(!0,!1)},Qu={get:Ri(!0,!0)},bl=new WeakMap,gl=new WeakMap,yl=new WeakMap,wl=new WeakMap;function nd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ua(n){return He(n)?n:Ni(n,!1,Yu,Xu,bl)}function _l(n){return Ni(n,!1,Gu,Zu,gl)}function da(n){return Ni(n,!0,Uu,qu,yl)}function ed(n){return Ni(n,!0,Wu,Qu,wl)}function Ni(n,e,a,t,i){if(!kn(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=i.get(n);if(r)return r;const s=nd(Su(n));if(s===0)return n;const o=new Proxy(n,s===2?t:a);return i.set(n,o),o}function Je(n){return He(n)?Je(n.__v_raw):!!(n&&n.__v_isReactive)}function He(n){return!!(n&&n.__v_isReadonly)}function fe(n){return!!(n&&n.__v_isShallow)}function Di(n){return n?!!n.__v_raw:!1}function wn(n){const e=n&&n.__v_raw;return e?wn(e):n}function ad(n){return!Bn(n,"__v_skip")&&Object.isExtensible(n)&&el(n,"__v_skip",!0),n}const ke=n=>kn(n)?ua(n):n,ma=n=>kn(n)?da(n):n;function zn(n){return n?n.__v_isRef===!0:!1}function vn(n){return Sl(n,!1)}function Dn(n){return Sl(n,!0)}function Sl(n,e){return zn(n)?n:new td(n,e)}class td{constructor(e,a){this.dep=new Pi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=a?e:wn(e),this._value=a?e:ke(e),this.__v_isShallow=a}get value(){return this.dep.track(),this._value}set value(e){const a=this._rawValue,t=this.__v_isShallow||fe(e)||He(e);e=t?e:wn(e),De(e,a)&&(this._rawValue=e,this._value=t?e:ke(e),this.dep.trigger())}}function sn(n){return zn(n)?n.value:n}function Cn(n){return fn(n)?n():sn(n)}const id={get:(n,e,a)=>e==="__v_raw"?n:sn(Reflect.get(n,e,a)),set:(n,e,a,t)=>{const i=n[e];return zn(i)&&!zn(a)?(i.value=a,!0):Reflect.set(n,e,a,t)}};function kl(n){return Je(n)?n:new Proxy(n,id)}class rd{constructor(e){this.__v_isRef=!0,this._value=void 0;const a=this.dep=new Pi,{get:t,set:i}=e(a.track.bind(a),a.trigger.bind(a));this._get=t,this._set=i}get value(){return this._value=this._get()}set value(e){this._set(e)}}function xl(n){return new rd(n)}class sd{constructor(e,a,t){this._object=e,this._defaultValue=t,this.__v_isRef=!0,this._value=void 0,this._key=ve(a)?a:String(a),this._raw=wn(e);let i=!0,r=e;if(!dn(e)||ve(this._key)||!Ei(this._key))do i=!Di(r)||fe(r);while(i&&(r=r.__v_raw));this._shallow=i}get value(){let e=this._object[this._key];return this._shallow&&(e=sn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&zn(this._raw[this._key])){const a=this._object[this._key];if(zn(a)){a.value=e;return}}this._object[this._key]=e}get dep(){return Fu(this._raw,this._key)}}class od{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Bl(n,e,a){return zn(n)?n:fn(n)?new od(n):kn(n)&&arguments.length>1?ld(n,e,a):vn(n)}function ld(n,e,a){return new sd(n,e,a)}class cd{constructor(e,a,t){this.fn=e,this.setter=a,this._value=void 0,this.dep=new Pi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_t-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!a,this.isSSR=t}notify(){if(this.flags|=16,!(this.flags&8)&&Rn!==this)return ol(this,!0),!0}get value(){const e=this.dep.track();return ul(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ud(n,e,a=!1){let t,i;return fn(n)?t=n:(t=n.get,i=n.set),new cd(t,i,a)}const Wt={},mi=new WeakMap;let ya;function dd(n,e=!1,a=ya){if(a){let t=mi.get(a);t||mi.set(a,t=[]),t.push(n)}}function md(n,e,a=Mn){const{immediate:t,deep:i,once:r,scheduler:s,augmentJob:o,call:l}=a,u=k=>i?k:fe(k)||i===!1||i===0?We(k,1):We(k);let c,d,m,p,w=!1,h=!1;if(zn(n)?(d=()=>n.value,w=fe(n)):Je(n)?(d=()=>u(n),w=!0):dn(n)?(h=!0,w=n.some(k=>Je(k)||fe(k)),d=()=>n.map(k=>{if(zn(k))return k.value;if(Je(k))return u(k);if(fn(k))return l?l(k,2):k()})):fn(n)?e?d=l?()=>l(n,2):n:d=()=>{if(m){qe();try{m()}finally{Qe()}}const k=ya;ya=c;try{return l?l(n,3,[p]):n(p)}finally{ya=k}}:d=Le,e&&i){const k=d,I=i===!0?1/0:i;d=()=>We(k(),I)}const g=Ci(),_=()=>{c.stop(),g&&g.active&&Lr(g.effects,c)};if(r&&e){const k=e;e=(...I)=>{const z=k(...I);return _(),z}}let S=h?new Array(n.length).fill(Wt):Wt;const v=k=>{if(!(!(c.flags&1)||!c.dirty&&!k))if(e){const I=c.run();if(k||i||w||(h?I.some((z,C)=>De(z,S[C])):De(I,S))){m&&m();const z=ya;ya=c;try{const C=[I,S===Wt?void 0:h&&S[0]===Wt?[]:S,p];S=I,l?l(e,3,C):e(...C)}finally{ya=z}}}else c.run()};return o&&o(v),c=new rl(d),c.scheduler=s?()=>s(v,!1):v,p=k=>dd(k,!1,c),m=c.onStop=()=>{const k=mi.get(c);if(k){if(l)l(k,4);else for(const I of k)I();mi.delete(c)}},e?t?v(!0):S=c.run():s?s(v.bind(null,!0),!0):c.run(),_.pause=c.pause.bind(c),_.resume=c.resume.bind(c),_.stop=_,_}function We(n,e=1/0,a){if(e<=0||!kn(n)||n.__v_skip||(a=a||new Map,(a.get(n)||0)>=e))return n;if(a.set(n,e),e--,zn(n))We(n.value,e,a);else if(dn(n))for(let t=0;t<n.length;t++)We(n[t],e,a);else if(ui(n)||oa(n))n.forEach(t=>{We(t,e,a)});else if(nl(n)){for(const t in n)We(n[t],e,a);for(const t of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,t)&&We(n[t],e,a)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nt(n,e,a,t){try{return t?n(...t):n()}catch(i){Dt(i,e,a)}}function xe(n,e,a,t){if(fn(n)){const i=Nt(n,e,a,t);return i&&qo(i)&&i.catch(r=>{Dt(r,e,a)}),i}if(dn(n)){const i=[];for(let r=0;r<n.length;r++)i.push(xe(n[r],e,a,t));return i}}function Dt(n,e,a,t=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||Mn;if(e){let o=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${a}`;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](n,l,u)===!1)return}o=o.parent}if(r){qe(),Nt(r,null,10,[n,l,u]),Qe();return}}pd(n,a,i,t,s)}function pd(n,e,a,t=!0,i=!1){if(i)throw n;console.error(n)}const le=[];let Oe=-1;const Ua=[];let ra=null,Va=0;const Al=Promise.resolve();let pi=null;function pa(n){const e=pi||Al;return n?e.then(this?n.bind(this):n):e}function fd(n){let e=Oe+1,a=le.length;for(;e<a;){const t=e+a>>>1,i=le[t],r=kt(i);r<n||r===n&&i.flags&2?e=t+1:a=t}return e}function Kr(n){if(!(n.flags&1)){const e=kt(n),a=le[le.length-1];!a||!(n.flags&2)&&e>=kt(a)?le.push(n):le.splice(fd(e),0,n),n.flags|=1,El()}}function El(){pi||(pi=Al.then(Tl))}function hd(n){if(!dn(n))ra&&n.id===-1?ra.splice(Va+1,0,n):n.flags&1||(Ua.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)Ua.push(n[e]);El()}function Is(n,e,a=Oe+1){for(;a<le.length;a++){const t=le[a];if(t&&t.flags&2){if(n&&t.id!==n.uid)continue;le.splice(a,1),a--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function fi(n){if(Ua.length){const e=[...new Set(Ua)].sort((a,t)=>kt(a)-kt(t));if(Ua.length=0,ra){for(let a=0;a<e.length;a++)ra.push(e[a]);return}for(ra=e,Va=0;Va<ra.length;Va++){const a=ra[Va];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}ra=null,Va=0}}const kt=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Tl(n){try{for(Oe=0;Oe<le.length;Oe++){const e=le[Oe];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Nt(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Oe<le.length;Oe++){const e=le[Oe];e&&(e.flags&=-2)}Oe=-1,le.length=0,fi(),pi=null,(le.length||Ua.length)&&Tl()}}let Qn=null,Il=null;function hi(n){const e=Qn;return Qn=n,Il=n&&n.type.__scopeId||null,e}function Sn(n,e=Qn,a){if(!e||n._n)return n;const t=(...i)=>{t._d&&wi(-1);const r=hi(e),s=Xe.length;let o;try{o=n(...i)}finally{for(let l=Xe.length;l>s;l--)Jr();hi(r),t._d&&wi(1)}return o};return t._n=!0,t._c=!0,t._d=!0,t}function Ca(n,e){if(Qn===null)return n;const a=Ki(Qn),t=n.dirs||(n.dirs=[]);for(let i=0;i<e.length;i++){let[r,s,o,l=Mn]=e[i];r&&(fn(r)&&(r={mounted:r,updated:r}),r.deep&&We(s),t.push({dir:r,instance:a,value:s,oldValue:void 0,arg:o,modifiers:l}))}return n}function Re(n,e,a,t){const i=n.dirs,r=e&&e.dirs;for(let s=0;s<i.length;s++){const o=i[s];r&&(o.oldValue=r[s].value);let l=o.dir[t];l&&(qe(),xe(l,a,8,[n.el,o,n,e]),Qe())}}function la(n,e){if(qn){let a=qn.provides;const t=qn.parent&&qn.parent.provides;t===a&&(a=qn.provides=Object.create(t)),a[n]=e}}function ee(n,e,a=!1){const t=Be();if(t||Ta){let i=Ta?Ta._context.provides:t?t.parent==null||t.ce?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides:void 0;if(i&&n in i)return i[n];if(arguments.length>1)return a&&fn(e)?e.call(t&&t.proxy):e}}function Ml(){return!!(Be()||Ta)}const vd=Symbol.for("v-scx"),bd=()=>ee(vd);function Cl(n,e){return zr(n,null,e)}function Vn(n,e,a){return zr(n,e,a)}function zr(n,e,a=Mn){const{immediate:t,deep:i,flush:r,once:s}=a,o=Yn({},a),l=e&&t||!e&&r!=="post";let u;if(qa){if(r==="sync"){const p=bd();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Le,p.resume=Le,p.pause=Le,p}}const c=qn;o.call=(p,w,h)=>xe(p,c,w,h);let d=!1;r==="post"?o.scheduler=p=>{se(p,c&&c.suspense)}:r!=="sync"&&(d=!0,o.scheduler=(p,w)=>{w?p():Kr(p)}),o.augmentJob=p=>{e&&(p.flags|=4),d&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const m=md(n,e,o);return qa&&(u?u.push(m):l&&m()),m}function gd(n,e,a){const t=this.proxy,i=Nn(n)?n.includes(".")?Pl(t,n):()=>t[n]:n.bind(t,t);let r;fn(e)?r=e:(r=e.handler,a=e);const s=Ft(this),o=zr(i,r.bind(t),a);return s(),o}function Pl(n,e){const a=e.split(".");return()=>{let t=n;for(let i=0;i<a.length&&t;i++)t=t[a[i]];return t}}const ta=new WeakMap,Ol=Symbol("_vte"),Li=n=>n.__isTeleport,_a=n=>n&&(n.disabled||n.disabled===""),yd=n=>n&&(n.defer||n.defer===""),Ms=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Cs=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,_r=(n,e)=>{const a=n&&n.to;return Nn(a)?e?e(a):null:a},wd={name:"Teleport",__isTeleport:!0,process(n,e,a,t,i,r,s,o,l,u){const{mc:c,pc:d,pbc:m,o:{insert:p,querySelector:w,createText:h,createComment:g,parentNode:_}}=u,S=_a(e.props);let{dynamicChildren:v}=e;const k=(C,A,M)=>{C.shapeFlag&16&&c(C.children,A,M,i,r,s,o,l)},I=(C=e)=>{const A=_a(C.props),M=C.target=_r(C.props,w),R=Sr(M,C,h,p);M&&(s!=="svg"&&Ms(M)?s="svg":s!=="mathml"&&Cs(M)&&(s="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(M),A||(k(C,M,R),mt(C,!1)))},z=C=>{const A=()=>{if(ta.get(C)===A){if(ta.delete(C),_a(C.props)){const M=_(C.el)||a;k(C,M,C.anchor),mt(C,!0)}I(C)}};ta.set(C,A),se(A,r)};if(n==null){const C=e.el=h(""),A=e.anchor=h("");if(p(C,a,t),p(A,a,t),yd(e.props)||r&&r.pendingBranch){z(e);return}S&&(k(e,a,A),mt(e,!0)),I()}else{e.el=n.el;const C=e.anchor=n.anchor,A=ta.get(n);if(A){A.flags|=8,ta.delete(n),z(e);return}e.targetStart=n.targetStart;const M=e.target=n.target,R=e.targetAnchor=n.targetAnchor,D=_a(n.props),x=D?a:M,F=D?C:R;if(s==="svg"||Ms(M)?s="svg":(s==="mathml"||Cs(M))&&(s="mathml"),v?(m(n.dynamicChildren,v,x,i,r,s,o),$r(n,e,!0)):l||d(n,e,x,F,i,r,s,o,!1),S)D?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):$t(e,a,C,u,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const O=_r(e.props,w);O&&(e.target=O,$t(e,O,null,u,0))}else D&&$t(e,M,R,u,1);mt(e,S)}},remove(n,e,a,{um:t,o:{remove:i}},r){const{shapeFlag:s,children:o,anchor:l,targetStart:u,targetAnchor:c,target:d,props:m}=n,p=_a(m),w=r||!p,h=ta.get(n);if(h&&(h.flags|=8,ta.delete(n)),d&&(i(u),i(c)),r&&i(l),!h&&(p||d)&&s&16)for(let g=0;g<o.length;g++){const _=o[g];t(_,e,a,w,!!_.dynamicChildren)}},move:$t,hydrate:_d};function $t(n,e,a,{o:{insert:t},m:i},r=2){r===0&&t(n.targetAnchor,e,a);const{el:s,anchor:o,shapeFlag:l,children:u,props:c}=n,d=r===2;if(d&&t(s,e,a),!ta.has(n)&&(!d||_a(c))&&l&16)for(let m=0;m<u.length;m++)i(u[m],e,a,2);d&&t(o,e,a)}function _d(n,e,a,t,i,r,{o:{nextSibling:s,parentNode:o,querySelector:l,insert:u,createText:c}},d){function m(g,_){let S=_;for(;S;){if(S&&S.nodeType===8){if(S.data==="teleport start anchor")e.targetStart=S;else if(S.data==="teleport anchor"){e.targetAnchor=S,g._lpa=e.targetAnchor&&s(e.targetAnchor);break}}S=s(S)}}function p(g,_){_.anchor=d(s(g),_,o(g),a,t,i,r)}const w=e.target=_r(e.props,l),h=_a(e.props);if(w){const g=w._lpa||w.firstChild;e.shapeFlag&16&&(h?(p(n,e),m(w,g),e.targetAnchor||Sr(w,e,c,u,o(n)===w?n:null)):(e.anchor=s(n),m(w,g),e.targetAnchor||Sr(w,e,c,u),d(g&&s(g),e,w,a,t,i,r))),mt(e,h)}else h&&e.shapeFlag&16&&(p(n,e),e.targetStart=n,e.targetAnchor=s(n));return e.anchor&&s(e.anchor)}const Rl=wd;function mt(n,e){const a=n.ctx;if(a&&a.ut){let t,i;for(e?(t=n.el,i=n.anchor):(t=n.targetStart,i=n.targetAnchor);t&&t!==i;)t.nodeType===1&&t.setAttribute("data-v-owner",a.uid),t=t.nextSibling;a.ut()}}function Sr(n,e,a,t,i=null){const r=e.targetStart=a(""),s=e.targetAnchor=a("");return r[Ol]=s,n&&(t(r,n,i),t(s,n,i)),s}const we=Symbol("_leaveCb"),lt=Symbol("_enterCb");function Nl(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ae(()=>{n.isMounted=!0}),Fi(()=>{n.isUnmounting=!0}),n}const ge=[Function,Array],Dl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ge,onEnter:ge,onAfterEnter:ge,onEnterCancelled:ge,onBeforeLeave:ge,onLeave:ge,onAfterLeave:ge,onLeaveCancelled:ge,onBeforeAppear:ge,onAppear:ge,onAfterAppear:ge,onAppearCancelled:ge},Ll=n=>{const e=n.subTree;return e.component?Ll(e.component):e},Sd={name:"BaseTransition",props:Dl,setup(n,{slots:e}){const a=Be(),t=Nl();return()=>{const i=e.default&&jr(e.default(),!0),r=i&&i.length?Hl(i):a.subTree?mn():void 0;if(!r)return;const s=wn(n),{mode:o}=s;if(t.isLeaving)return nr(r);const l=vi(r);if(!l)return nr(r);let u=xt(l,s,t,a,d=>u=d);l.type!==Xn&&Pa(l,u);let c=a.subTree&&vi(a.subTree);if(c&&c.type!==Xn&&!Sa(c,l)&&Ll(a).type!==Xn){let d=xt(c,s,t,a);if(Pa(c,d),o==="out-in"&&l.type!==Xn)return t.isLeaving=!0,d.afterLeave=()=>{t.isLeaving=!1,a.job.flags&8||a.update(),delete d.afterLeave,c=void 0},nr(r);o==="in-out"&&l.type!==Xn?d.delayLeave=(m,p,w)=>{const h=Fl(t,c);h[String(c.key)]=c,m[we]=()=>{p(),m[we]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{w(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return r}}};function Hl(n){let e=n[0];if(n.length>1){for(const a of n)if(a.type!==Xn){e=a;break}}return e}const kd=Sd;function Fl(n,e){const{leavingVNodes:a}=n;let t=a.get(e.type);return t||(t=Object.create(null),a.set(e.type,t)),t}function xt(n,e,a,t,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:m,onLeave:p,onAfterLeave:w,onLeaveCancelled:h,onBeforeAppear:g,onAppear:_,onAfterAppear:S,onAppearCancelled:v}=e,k=String(n.key),I=Fl(a,n),z=(M,R)=>{M&&xe(M,t,9,R)},C=(M,R)=>{const D=R[1];z(M,R),dn(M)?M.every(x=>x.length<=1)&&D():M.length<=1&&D()},A={mode:s,persisted:o,beforeEnter(M){let R=l;if(!a.isMounted)if(r)R=g||l;else return;M[we]&&M[we](!0);const D=I[k];D&&Sa(n,D)&&D.el[we]&&D.el[we](),z(R,[M])},enter(M){if(I[k]===n)return;let R=u,D=c,x=d;if(!a.isMounted)if(r)R=_||u,D=S||c,x=v||d;else return;let F=!1;M[lt]=j=>{F||(F=!0,j?z(x,[M]):z(D,[M]),A.delayedLeave&&A.delayedLeave(),M[lt]=void 0)};const O=M[lt].bind(null,!1);R?C(R,[M,O]):O()},leave(M,R){const D=String(n.key);if(M[lt]&&M[lt](!0),a.isUnmounting)return R();z(m,[M]);let x=!1;M[we]=O=>{x||(x=!0,R(),O?z(h,[M]):z(w,[M]),M[we]=void 0,I[D]===n&&delete I[D])};const F=M[we].bind(null,!1);I[D]=n,p?C(p,[M,F]):F()},clone(M){const R=xt(M,e,a,t,i);return i&&i(R),R}};return A}function nr(n){if(Lt(n))return n=fa(n),n.children=null,n}function vi(n){if(!Lt(n))return Li(n.type)&&n.children?Hl(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:a}=n;if(a){if(e&16)return a[0];if(e&32&&fn(a.default))return a.default()}}function Pa(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const a=n.component.subTree;Pa(Li(a.type)&&vi(a)||a,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function jr(n,e=!1,a){let t=[],i=0;for(let r=0;r<n.length;r++){let s=n[r];const o=a==null?s.key:String(a)+String(s.key!=null?s.key:r);s.type===gn?(s.patchFlag&128&&i++,t=t.concat(jr(s.children,e,o))):(e||s.type!==Xn)&&t.push(o!=null?fa(s,{key:o}):s)}if(i>1)for(let r=0;r<t.length;r++)t[r].patchFlag=-2;return t}function yn(n,e){return fn(n)?Yn({name:n.name},e,{setup:n}):n}function Vl(){const n=Be();return n?(n.appContext.config.idPrefix||"v")+"-"+n.ids[0]+n.ids[1]++:""}function Yr(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ps(n){const e=Be(),a=Dn(null);if(e){const i=e.refs===Mn?e.refs={}:e.refs;Object.defineProperty(i,n,{enumerable:!0,get:()=>a.value,set:r=>a.value=r})}return a}function Os(n,e){let a;return!!((a=Object.getOwnPropertyDescriptor(n,e))&&!a.configurable)}const bi=new WeakMap;function Ga(n,e,a,t,i=!1){if(dn(n)){n.forEach((h,g)=>Ga(h,e&&(dn(e)?e[g]:e),a,t,i));return}if(Ea(t)&&!i){t.shapeFlag&512&&t.type.__asyncResolved&&t.component.subTree.component&&Ga(n,e,a,t.component.subTree);return}const r=t.shapeFlag&4?Ki(t.component):t.el,s=i?null:r,{i:o,r:l}=n,u=e&&e.r,c=o.refs===Mn?o.refs={}:o.refs,d=o.setupState,m=wn(d),p=d===Mn?Zo:h=>Os(c,h)?!1:Bn(m,h),w=(h,g)=>!(g&&Os(c,g));if(u!=null&&u!==l){if(Rs(e),Nn(u))c[u]=null,p(u)&&(d[u]=null);else if(zn(u)){const h=e;w(u,h.k)&&(u.value=null),h.k&&(c[h.k]=null)}}if(fn(l))Nt(l,o,12,[s,c]);else{const h=Nn(l),g=zn(l);if(h||g){const _=()=>{if(n.f){const S=h?p(l)?d[l]:c[l]:w()||!n.k?l.value:c[n.k];if(i)dn(S)&&Lr(S,r);else if(dn(S))S.includes(r)||S.push(r);else if(h)c[l]=[r],p(l)&&(d[l]=c[l]);else{const v=[r];w(l,n.k)&&(l.value=v),n.k&&(c[n.k]=v)}}else h?(c[l]=s,p(l)&&(d[l]=s)):g&&(w(l,n.k)&&(l.value=s),n.k&&(c[n.k]=s))};if(s){const S=()=>{_(),bi.delete(n)};S.id=-1,bi.set(n,S),se(S,a)}else Rs(n),_()}}}function Rs(n){const e=bi.get(n);e&&(e.flags|=8,bi.delete(n))}let Ns=!1;const Da=()=>{Ns||(console.error("Hydration completed but contains mismatches."),Ns=!0)},xd=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",Bd=n=>n.namespaceURI.includes("MathML"),Jt=n=>{if(n.nodeType===1){if(xd(n))return"svg";if(Bd(n))return"mathml"}},ja=n=>n.nodeType===8;function Ad(n){const{mt:e,p:a,o:{patchProp:t,createText:i,nextSibling:r,parentNode:s,remove:o,insert:l,createComment:u}}=n,c=(v,k)=>{if(!k.hasChildNodes()){a(null,v,k),fi(),k._vnode=v;return}d(k.firstChild,v,null,null,null),fi(),k._vnode=v},d=(v,k,I,z,C,A=!1)=>{A=A||!!k.dynamicChildren;const M=ja(v)&&v.data==="[",R=()=>h(v,k,I,z,C,M),{type:D,ref:x,shapeFlag:F,patchFlag:O}=k;let j=v.nodeType;k.el=v,O===-2&&(A=!1,k.dynamicChildren=null);let P=null;switch(D){case Ia:j!==3?k.children===""?(l(k.el=i(""),s(v),v),P=v):P=R():(v.data!==k.children&&(Da(),v.data=k.children),P=r(v));break;case Xn:S(v)?(P=r(v),_(k.el=v.content.firstChild,v,I)):j!==8||M?P=R():P=r(v);break;case Wa:if(M&&(v=r(v),j=v.nodeType),j===1||j===3){P=v;const Q=!k.children.length;for(let V=0;V<k.staticCount;V++)Q&&(k.children+=P.nodeType===1?P.outerHTML:P.data),V===k.staticCount-1&&(k.anchor=P),P=r(P);return M?r(P):P}else R();break;case gn:M?P=w(v,k,I,z,C,A):P=R();break;default:if(F&1)(j!==1||k.type.toLowerCase()!==v.tagName.toLowerCase())&&!S(v)?P=R():P=m(v,k,I,z,C,A);else if(F&6){k.slotScopeIds=C;const Q=s(v);if(M?P=g(v):ja(v)&&v.data==="teleport start"?P=g(v,v.data,"teleport end"):P=r(v),e(k,Q,null,I,z,Jt(Q),A),(Ea(k)||k.component.asyncDep)&&!k.component.subTree){let V;M?(V=cn(Wa),V.anchor=P?P.previousSibling:Q.lastChild):V=v.nodeType===3?he(""):cn(v.nodeType===8?Xn:"div"),V.el=v,k.component.subTree=V}}else F&64?j!==8?P=R():P=k.type.hydrate(v,k,I,z,C,A,n,p):F&128&&(P=k.type.hydrate(v,k,I,z,Jt(s(v)),C,A,n,d))}return x!=null&&Ga(x,null,z,k),P},m=(v,k,I,z,C,A)=>{A=A||!!k.dynamicChildren;const{type:M,dynamicProps:R,props:D,patchFlag:x,shapeFlag:F,dirs:O,transition:j}=k,P=M==="input"||M==="option",Q=!!R;if(P||Q||x!==-1){O&&Re(k,null,I,"created");let V=!1;if(S(v)){V=oc(null,j)&&I&&I.vnode.props&&I.vnode.props.appear;const H=v.content.firstChild;if(V){const Z=H.getAttribute("class");Z&&(H.$cls=Z),j.beforeEnter(H)}_(H,v,I),k.el=v=H}if(F&16&&!(D&&(D.innerHTML||D.textContent))){let H=p(v.firstChild,k,v,I,z,C,A);for(H&&!si(v,1)&&Da();H;){const Z=H;H=H.nextSibling,o(Z)}}else if(F&8){let H=k.children;H[0]===`
`&&(v.tagName==="PRE"||v.tagName==="TEXTAREA")&&(H=H.slice(1));const{textContent:Z}=v;Z!==H&&Z!==H.replace(/\r\n|\r/g,`
`)&&(si(v,0)||Da(),v.textContent=k.children)}if(D){if(P||Q||!A||x&48){const H=v.tagName.includes("-"),Z=v.namespaceURI.includes("svg")?"svg":v.namespaceURI.includes("MathML")?"mathml":void 0;for(const hn in D)if(P&&(hn.endsWith("value")||hn==="indeterminate")||Pt(hn)&&!Ba(hn)||hn[0]==="."||H&&!Ba(hn)||R&&R.includes(hn)){if(Td(v,hn,D[hn]))continue;t(v,hn,null,D[hn],Z,I)}}else if(D.onClick)t(v,"onClick",null,D.onClick,void 0,I);else if(x&4&&Je(D.style))for(const H in D.style)D.style[H]}let J;(J=D&&D.onVnodeBeforeMount)&&ye(J,I,k),O&&Re(k,null,I,"beforeMount"),((J=D&&D.onVnodeMounted)||O||V)&&dc(()=>{J&&ye(J,I,k),V&&j.enter(v),O&&Re(k,null,I,"mounted")},z)}return v.nextSibling},p=(v,k,I,z,C,A,M)=>{M=M||!!k.dynamicChildren;const R=k.children,D=R.length;let x=!1;for(let F=0;F<D;F++){const O=M?R[F]:R[F]=_e(R[F]),j=O.type===Ia;v?(j&&!M&&F+1<D&&_e(R[F+1]).type===Ia&&(l(i(v.data.slice(O.children.length)),I,r(v)),v.data=O.children),v=d(v,O,z,C,A,M)):j&&!O.children?l(O.el=i(""),I):(x||(x=!0,si(I,1)||Da()),a(null,O,I,null,z,C,Jt(I),A))}return v},w=(v,k,I,z,C,A)=>{const{slotScopeIds:M}=k;M&&(C=C?C.concat(M):M);const R=s(v),D=p(r(v),k,R,I,z,C,A);return D&&ja(D)&&D.data==="]"?r(k.anchor=D):(Da(),l(k.anchor=u("]"),R,D),D)},h=(v,k,I,z,C,A)=>{if(Md(v,k)||Da(),k.el=null,A){const D=g(v);for(;;){const x=r(v);if(x&&x!==D)o(x);else break}}const M=r(v),R=s(v);return o(v),a(null,k,R,M,I,z,Jt(R),C),I&&(I.vnode.el=k.el,ql(I,k.el)),M},g=(v,k="[",I="]")=>{let z=0;for(;v;)if(v=r(v),v&&ja(v)&&(v.data===k&&z++,v.data===I)){if(z===0)return r(v);z--}return v},_=(v,k,I)=>{const z=k.parentNode;z&&z.replaceChild(v,k);let C=I;for(;C;)C.vnode.el===k&&(C.vnode.el=C.subTree.el=v),C=C.parent},S=v=>v.nodeType===1&&v.tagName==="TEMPLATE";return[c,d]}const Ed=new Set(["src","srcset","href","poster"]);function Td(n,e,a){return Ed.has(e)?n.getAttribute(e)===(a==null?null:`${a}`):!1}const gi="data-allow-mismatch",Id={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function si(n,e){if(e===0||e===1)for(;n&&!n.hasAttribute(gi);)n=n.parentElement;return Ur(n&&n.getAttribute(gi),e)}function Ur(n,e){if(n==null)return!1;if(n==="")return!0;{const a=n.split(",");return e===0&&a.includes("children")?!0:a.includes(Id[e])}}function Md(n,e){return si(n.parentElement,1)||Cd(n)||Pd(e)}function Cd(n){return n.nodeType===1&&Ur(n.getAttribute(gi),1)}function Pd({props:n}){const e=n&&n[gi];return typeof e=="string"&&Ur(e,1)}Ii().requestIdleCallback;Ii().cancelIdleCallback;function Od(n,e){if(ja(n)&&n.data==="["){let a=1,t=n.nextSibling;for(;t;){if(t.nodeType===1){if(e(t)===!1)break}else if(ja(t))if(t.data==="]"){if(--a===0)break}else t.data==="["&&a++;t=t.nextSibling}}else e(n)}const Ea=n=>!!n.type.__asyncLoader;function Rd(n){fn(n)&&(n={loader:n});const{loader:e,loadingComponent:a,errorComponent:t,delay:i=200,hydrate:r,timeout:s,suspensible:o=!0,onError:l}=n;let u=null,c,d=0;const m=()=>(d++,u=null,p()),p=()=>{let w;return u||(w=u=e().catch(h=>{if(h=h instanceof Error?h:new Error(String(h)),l)return new Promise((g,_)=>{l(h,()=>g(m()),()=>_(h),d+1)});throw h}).then(h=>w!==u&&u?u:(h&&(h.__esModule||h[Symbol.toStringTag]==="Module")&&(h=h.default),c=h,h)))};return yn({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(w,h,g){const _=w.isConnected;let S=!1;(h.bu||(h.bu=[])).push(()=>S=!0);const v=()=>{S||!w.parentNode||_&&!w.isConnected||g()},k=r?()=>{const I=r(v,z=>Od(w,z));I&&(h.bum||(h.bum=[])).push(I)}:v;c?k():p().then(()=>!h.isUnmounted&&k())},get __asyncResolved(){return c},setup(){const w=qn;if(Yr(w),c)return()=>Xt(c,w);const h=I=>{u=null,Dt(I,w,13,!t)};if(o&&w.suspense||qa)return p().then(I=>()=>Xt(I,w)).catch(I=>(h(I),()=>t?cn(t,{error:I}):null));const g=vn(!1),_=vn(),S=vn(!!i);let v,k;return tt(()=>{v!=null&&clearTimeout(v),k!=null&&clearTimeout(k)}),i&&(k=setTimeout(()=>{w.isUnmounted||(S.value=!1)},i)),s!=null&&(v=setTimeout(()=>{if(!w.isUnmounted&&!g.value&&!_.value){const I=new Error(`Async component timed out after ${s}ms.`);h(I),_.value=I}},s)),p().then(()=>{w.isUnmounted||(g.value=!0,w.parent&&Lt(w.parent.vnode)&&w.parent.update())}).catch(I=>{if(w.isUnmounted){u=null;return}h(I),_.value=I}),()=>{if(g.value&&c)return Xt(c,w);if(_.value&&t)return cn(t,{error:_.value});if(a&&!S.value)return Xt(a,w)}}})}function Xt(n,e){const{ref:a,props:t,children:i,ce:r}=e.vnode,s=cn(n,t,i);return s.ref=a,s.ce=r,delete e.vnode.ce,s}const Lt=n=>n.type.__isKeepAlive;function Nd(n,e){Kl(n,"a",e)}function Dd(n,e){Kl(n,"da",e)}function Kl(n,e,a=qn){const t=n.__wdc||(n.__wdc=()=>{let i=a;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(Hi(e,t,a),a){let i=a.parent;for(;i&&i.parent;)Lt(i.parent.vnode)&&Ld(t,e,a,i),i=i.parent}}function Ld(n,e,a,t){const i=Hi(e,n,t,!0);tt(()=>{Lr(t[e],i)},a)}function Hi(n,e,a=qn,t=!1){if(a){const i=a[n]||(a[n]=[]),r=e.__weh||(e.__weh=(...s)=>{qe();const o=Ft(a),l=xe(e,a,n,s);return o(),Qe(),l});return t?i.unshift(r):i.push(r),r}}const na=n=>(e,a=qn)=>{(!qa||n==="sp")&&Hi(n,(...t)=>e(...t),a)},Hd=na("bm"),ae=na("m"),Fd=na("bu"),zl=na("u"),Fi=na("bum"),tt=na("um"),Vd=na("sp"),Kd=na("rtg"),zd=na("rtc");function jd(n,e=qn){Hi("ec",n,e)}const jl="components";function Ht(n,e){return Ul(jl,n,!0,e)||n}const Yl=Symbol.for("v-ndc");function Yd(n){return Nn(n)?Ul(jl,n,!1)||n:n||Yl}function Ul(n,e,a=!0,t=!1){const i=Qn||qn;if(i){const r=i.type;{const o=Bm(r,!1);if(o&&(o===e||o===ne(e)||o===Rt(ne(e))))return r}const s=Ds(i[n]||r[n],e)||Ds(i.appContext[n],e);return!s&&t?r:s}}function Ds(n,e){return n&&(n[e]||n[ne(e)]||n[Rt(ne(e))])}function ie(n,e,a,t){let i;const r=a,s=dn(n);if(s||Nn(n)){const o=s&&Je(n);let l=!1,u=!1;o&&(l=!fe(n),u=He(n),n=Oi(n)),i=new Array(n.length);for(let c=0,d=n.length;c<d;c++)i[c]=e(l?u?ma(ke(n[c])):ke(n[c]):n[c],c,void 0,r)}else if(typeof n=="number"){i=new Array(n);for(let o=0;o<n;o++)i[o]=e(o+1,o,void 0,r)}else if(kn(n))if(n[Symbol.iterator])i=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);i=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];i[l]=e(n[c],c,l,r)}}else i=[];return i}function Ud(n,e){for(let a=0;a<e.length;a++){const t=e[a];if(dn(t))for(let i=0;i<t.length;i++)n[t[i].name]=t[i].fn;else t&&(n[t.name]=t.key?(...i)=>{const r=t.fn(...i);return r&&(r.key=t.key),r}:t.fn)}return n}function An(n,e,a,t,i,r){if(a==null&&(a={}),Qn.ce||Qn.parent&&Ea(Qn.parent)&&Qn.parent.ce){const u=a,c=Object.keys(u).length>0;return e!=="default"&&(u.name=e),N(),Pn(gn,null,[cn("slot",u,t&&t())],c?-2:64)}let s=n[e];s&&s._c&&(s._d=!1);const o=Xe.length;N();let l;try{const u=s&&Gl(s(a)),c=a.key||r||u&&u.key;l=Pn(gn,{key:(c&&!ve(c)?c:`_${e}`)+(!u&&t?"_fb":"")},u||(t?t():[]),u&&n._===1?64:-2)}catch(u){for(let c=Xe.length;c>o;c--)Jr();throw u}finally{s&&s._c&&(s._d=!0)}return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function Gl(n){return n.some(e=>At(e)?!(e.type===Xn||e.type===gn&&!Gl(e.children)):!0)?n:null}const kr=n=>n?hc(n)?Ki(n):kr(n.parent):null,bt=Yn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>kr(n.parent),$root:n=>kr(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>$l(n),$forceUpdate:n=>n.f||(n.f=()=>{Kr(n.update)}),$nextTick:n=>n.n||(n.n=pa.bind(n.proxy)),$watch:n=>gd.bind(n)}),er=(n,e)=>n!==Mn&&!n.__isScriptSetup&&Bn(n,e),Gd={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:a,setupState:t,data:i,props:r,accessCache:s,type:o,appContext:l}=n;if(e[0]!=="$"){const m=s[e];if(m!==void 0)switch(m){case 1:return t[e];case 2:return i[e];case 4:return a[e];case 3:return r[e]}else{if(er(t,e))return s[e]=1,t[e];if(i!==Mn&&Bn(i,e))return s[e]=2,i[e];if(Bn(r,e))return s[e]=3,r[e];if(a!==Mn&&Bn(a,e))return s[e]=4,a[e];xr&&(s[e]=0)}}const u=bt[e];let c,d;if(u)return e==="$attrs"&&te(n.attrs,"get",""),u(n);if((c=o.__cssModules)&&(c=c[e]))return c;if(a!==Mn&&Bn(a,e))return s[e]=4,a[e];if(d=l.config.globalProperties,Bn(d,e))return d[e]},set({_:n},e,a){const{data:t,setupState:i,ctx:r}=n;return er(i,e)?(i[e]=a,!0):t!==Mn&&Bn(t,e)?(t[e]=a,!0):Bn(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=a,!0)},has({_:{data:n,setupState:e,accessCache:a,ctx:t,appContext:i,props:r,type:s}},o){let l;return!!(a[o]||n!==Mn&&o[0]!=="$"&&Bn(n,o)||er(e,o)||Bn(r,o)||Bn(t,o)||Bn(bt,o)||Bn(i.config.globalProperties,o)||(l=s.__cssModules)&&l[o])},defineProperty(n,e,a){return a.get!=null?n._.accessCache[e]=0:Bn(a,"value")&&this.set(n,e,a.value,null),Reflect.defineProperty(n,e,a)}};function Wd(){return $d().attrs}function $d(n){const e=Be();return e.setupContext||(e.setupContext=bc(e))}function Ls(n){return dn(n)?n.reduce((e,a)=>(e[a]=null,e),{}):n}let xr=!0;function Jd(n){const e=$l(n),a=n.proxy,t=n.ctx;xr=!1,e.beforeCreate&&Hs(e.beforeCreate,n,"bc");const{data:i,computed:r,methods:s,watch:o,provide:l,inject:u,created:c,beforeMount:d,mounted:m,beforeUpdate:p,updated:w,activated:h,deactivated:g,beforeDestroy:_,beforeUnmount:S,destroyed:v,unmounted:k,render:I,renderTracked:z,renderTriggered:C,errorCaptured:A,serverPrefetch:M,expose:R,inheritAttrs:D,components:x,directives:F,filters:O}=e;if(u&&Xd(u,t,null),s)for(const Q in s){const V=s[Q];fn(V)&&(t[Q]=V.bind(a))}if(i){const Q=i.call(a,a);kn(Q)&&(n.data=ua(Q))}if(xr=!0,r)for(const Q in r){const V=r[Q],J=fn(V)?V.bind(a,a):fn(V.get)?V.get.bind(a,a):Le,H=!fn(V)&&fn(V.set)?V.set.bind(a):Le,Z=B({get:J,set:H});Object.defineProperty(t,Q,{enumerable:!0,configurable:!0,get:()=>Z.value,set:hn=>Z.value=hn})}if(o)for(const Q in o)Wl(o[Q],t,a,Q);if(l){const Q=fn(l)?l.call(a):l;Reflect.ownKeys(Q).forEach(V=>{la(V,Q[V])})}c&&Hs(c,n,"c");function P(Q,V){dn(V)?V.forEach(J=>Q(J.bind(a))):V&&Q(V.bind(a))}if(P(Hd,d),P(ae,m),P(Fd,p),P(zl,w),P(Nd,h),P(Dd,g),P(jd,A),P(zd,z),P(Kd,C),P(Fi,S),P(tt,k),P(Vd,M),dn(R))if(R.length){const Q=n.exposed||(n.exposed={});R.forEach(V=>{Object.defineProperty(Q,V,{get:()=>a[V],set:J=>a[V]=J,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===Le&&(n.render=I),D!=null&&(n.inheritAttrs=D),x&&(n.components=x),F&&(n.directives=F),M&&Yr(n)}function Xd(n,e,a=Le){dn(n)&&(n=Br(n));for(const t in n){const i=n[t];let r;kn(i)?"default"in i?r=ee(i.from||t,i.default,!0):r=ee(i.from||t):r=ee(i),zn(r)?Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:()=>r.value,set:s=>r.value=s}):e[t]=r}}function Hs(n,e,a){xe(dn(n)?n.map(t=>t.bind(e.proxy)):n.bind(e.proxy),e,a)}function Wl(n,e,a,t){let i=t.includes(".")?Pl(a,t):()=>a[t];if(Nn(n)){const r=e[n];fn(r)&&Vn(i,r)}else if(fn(n))Vn(i,n.bind(a));else if(kn(n))if(dn(n))n.forEach(r=>Wl(r,e,a,t));else{const r=fn(n.handler)?n.handler.bind(a):e[n.handler];fn(r)&&Vn(i,r,n)}}function $l(n){const e=n.type,{mixins:a,extends:t}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:s}}=n.appContext,o=r.get(e);let l;return o?l=o:!i.length&&!a&&!t?l=e:(l={},i.length&&i.forEach(u=>yi(l,u,s,!0)),yi(l,e,s)),kn(e)&&r.set(e,l),l}function yi(n,e,a,t=!1){const{mixins:i,extends:r}=e;r&&yi(n,r,a,!0),i&&i.forEach(s=>yi(n,s,a,!0));for(const s in e)if(!(t&&s==="expose")){const o=Zd[s]||a&&a[s];n[s]=o?o(n[s],e[s]):e[s]}return n}const Zd={data:Fs,props:Vs,emits:Vs,methods:pt,computed:pt,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:pt,directives:pt,watch:Qd,provide:Fs,inject:qd};function Fs(n,e){return e?n?function(){return Yn(fn(n)?n.call(this,this):n,fn(e)?e.call(this,this):e)}:e:n}function qd(n,e){return pt(Br(n),Br(e))}function Br(n){if(dn(n)){const e={};for(let a=0;a<n.length;a++)e[n[a]]=n[a];return e}return n}function re(n,e){return n?[...new Set([].concat(n,e))]:e}function pt(n,e){return n?Yn(Object.create(null),n,e):e}function Vs(n,e){return n?dn(n)&&dn(e)?[...new Set([...n,...e])]:Yn(Object.create(null),Ls(n),Ls(e??{})):e}function Qd(n,e){if(!n)return e;if(!e)return n;const a=Yn(Object.create(null),n);for(const t in e)a[t]=re(n[t],e[t]);return a}function Jl(){return{app:null,config:{isNativeTag:Zo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nm=0;function em(n,e){return function(t,i=null){fn(t)||(t=Yn({},t)),i!=null&&!kn(i)&&(i=null);const r=Jl(),s=new WeakSet,o=[];let l=!1;const u=r.app={_uid:nm++,_component:t,_props:i,_container:null,_context:r,_instance:null,version:Em,get config(){return r.config},set config(c){},use(c,...d){return s.has(c)||(c&&fn(c.install)?(s.add(c),c.install(u,...d)):fn(c)&&(s.add(c),c(u,...d))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,d){return d?(r.components[c]=d,u):r.components[c]},directive(c,d){return d?(r.directives[c]=d,u):r.directives[c]},mount(c,d,m){if(!l){const p=u._ceVNode||cn(t,i);return p.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),d&&e?e(p,c):n(p,c,m),l=!0,u._container=c,c.__vue_app__=u,Ki(p.component)}},onUnmount(c){o.push(c)},unmount(){l&&(xe(o,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,d){return r.provides[c]=d,u},runWithContext(c){const d=Ta;Ta=u;try{return c()}finally{Ta=d}}};return u}}let Ta=null;const am=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ne(e)}Modifiers`]||n[`${ha(e)}Modifiers`];function tm(n,e,...a){if(n.isUnmounted)return;const t=n.vnode.props||Mn;let i=a;const r=e.startsWith("update:"),s=r&&am(t,e.slice(7));s&&(s.trim&&(i=a.map(c=>Nn(c)?c.trim():c)),s.number&&(i=i.map(Bu)));let o,l=t[o=Wi(e)]||t[o=Wi(ne(e))];!l&&r&&(l=t[o=Wi(ha(e))]),l&&xe(l,n,6,i);const u=t[o+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,xe(u,n,6,i)}}const im=new WeakMap;function Xl(n,e,a=!1){const t=a?im:e.emitsCache,i=t.get(n);if(i!==void 0)return i;const r=n.emits;let s={},o=!1;if(!fn(n)){const l=u=>{const c=Xl(u,e,!0);c&&(o=!0,Yn(s,c))};!a&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(kn(n)&&t.set(n,null),null):(dn(r)?r.forEach(l=>s[l]=null):Yn(s,r),kn(n)&&t.set(n,s),s)}function Vi(n,e){return!n||!Pt(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Bn(n,e[0].toLowerCase()+e.slice(1))||Bn(n,ha(e))||Bn(n,e))}function ar(n){const{type:e,vnode:a,proxy:t,withProxy:i,propsOptions:[r],slots:s,attrs:o,emit:l,render:u,renderCache:c,props:d,data:m,setupState:p,ctx:w,inheritAttrs:h}=n,g=hi(n);let _,S;try{if(a.shapeFlag&4){const k=i||t,I=k;_=_e(u.call(I,k,c,d,p,m,w)),S=o}else{const k=e;_=_e(k.length>1?k(d,{attrs:o,slots:s,emit:l}):k(d,null)),S=e.props?o:rm(o)}}catch(k){Xe.length=0,Dt(k,n,1),_=cn(Xn)}let v=_;if(S&&h!==!1){const k=Object.keys(S),{shapeFlag:I}=v;k.length&&I&7&&(r&&k.some(Ai)&&(S=sm(S,r)),v=fa(v,S,!1,!0))}if(a.dirs&&(v=fa(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(a.dirs):a.dirs),a.transition){const k=Li(v.type)&&vi(v)||v;Pa(k,a.transition)}return _=v,hi(g),_}const rm=n=>{let e;for(const a in n)(a==="class"||a==="style"||Pt(a))&&((e||(e={}))[a]=n[a]);return e},sm=(n,e)=>{const a={};for(const t in n)(!Ai(t)||!(t.slice(9)in e))&&(a[t]=n[t]);return a};function om(n,e,a){const{props:t,children:i,component:r}=n,{props:s,children:o,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(a&&l>=0){if(l&1024)return!0;if(l&16)return t?Ks(t,s,u):!!s;if(l&8){const c=e.dynamicProps;for(let d=0;d<c.length;d++){const m=c[d];if(Zl(s,t,m)&&!Vi(u,m))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:t===s?!1:t?s?Ks(t,s,u):!0:!!s;return!1}function Ks(n,e,a){const t=Object.keys(e);if(t.length!==Object.keys(n).length)return!0;for(let i=0;i<t.length;i++){const r=t[i];if(Zl(e,n,r)&&!Vi(a,r))return!0}return!1}function Zl(n,e,a){const t=n[a],i=e[a];return a==="style"&&kn(t)&&kn(i)?!Mi(t,i):t!==i}function ql({vnode:n,parent:e,suspense:a},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.suspense.vnode.el=i.el=t,n=i),i===n)(n=e.vnode).el=t,e=e.parent;else break}a&&a.activeBranch===n&&(a.vnode.el=t)}const Ql={},nc=()=>Object.create(Ql),ec=n=>Object.getPrototypeOf(n)===Ql;function lm(n,e,a,t=!1){const i={},r=nc();n.propsDefaults=Object.create(null),ac(n,e,i,r);for(const s in n.propsOptions[0])s in i||(i[s]=void 0);a?n.props=t?i:_l(i):n.type.props?n.props=i:n.props=r,n.attrs=r}function cm(n,e,a,t){const{props:i,attrs:r,vnode:{patchFlag:s}}=n,o=wn(i),[l]=n.propsOptions;let u=!1;if((t||s>0)&&!(s&16)){if(s&8){const c=n.vnode.dynamicProps;for(let d=0;d<c.length;d++){let m=c[d];if(Vi(n.emitsOptions,m))continue;const p=e[m];if(l)if(Bn(r,m))p!==r[m]&&(r[m]=p,u=!0);else{const w=ne(m);i[w]=Ar(l,o,w,p,n,!1)}else p!==r[m]&&(r[m]=p,u=!0)}}}else{ac(n,e,i,r)&&(u=!0);let c;for(const d in o)(!e||!Bn(e,d)&&((c=ha(d))===d||!Bn(e,c)))&&(l?a&&(a[d]!==void 0||a[c]!==void 0)&&(i[d]=Ar(l,o,d,void 0,n,!0)):delete i[d]);if(r!==o)for(const d in r)(!e||!Bn(e,d))&&(delete r[d],u=!0)}u&&Ge(n.attrs,"set","")}function ac(n,e,a,t){const[i,r]=n.propsOptions;let s=!1,o;if(e)for(let l in e){if(Ba(l))continue;const u=e[l];let c;i&&Bn(i,c=ne(l))?!r||!r.includes(c)?a[c]=u:(o||(o={}))[c]=u:Vi(n.emitsOptions,l)||(!(l in t)||u!==t[l])&&(t[l]=u,s=!0)}if(r){const l=wn(a),u=o||Mn;for(let c=0;c<r.length;c++){const d=r[c];a[d]=Ar(i,l,d,u[d],n,!Bn(u,d))}}return s}function Ar(n,e,a,t,i,r){const s=n[a];if(s!=null){const o=Bn(s,"default");if(o&&t===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&fn(l)){const{propsDefaults:u}=i;if(a in u)t=u[a];else{const c=Ft(i);t=u[a]=l.call(null,e),c()}}else t=l;i.ce&&i.ce._setProp(a,t)}s[0]&&(r&&!o?t=!1:s[1]&&(t===""||t===ha(a))&&(t=!0))}return t}const um=new WeakMap;function tc(n,e,a=!1){const t=a?um:e.propsCache,i=t.get(n);if(i)return i;const r=n.props,s={},o=[];let l=!1;if(!fn(n)){const c=d=>{l=!0;const[m,p]=tc(d,e,!0);Yn(s,m),p&&o.push(...p)};!a&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!r&&!l)return kn(n)&&t.set(n,ka),ka;if(dn(r))for(let c=0;c<r.length;c++){const d=ne(r[c]);zs(d)&&(s[d]=Mn)}else if(r)for(const c in r){const d=ne(c);if(zs(d)){const m=r[c],p=s[d]=dn(m)||fn(m)?{type:m}:Yn({},m),w=p.type;let h=!1,g=!0;if(dn(w))for(let _=0;_<w.length;++_){const S=w[_],v=fn(S)&&S.name;if(v==="Boolean"){h=!0;break}else v==="String"&&(g=!1)}else h=fn(w)&&w.name==="Boolean";p[0]=h,p[1]=g,(h||Bn(p,"default"))&&o.push(d)}}const u=[s,o];return kn(n)&&t.set(n,u),u}function zs(n){return n[0]!=="$"&&!Ba(n)}const Gr=n=>n==="_"||n==="_ctx"||n==="$stable",Wr=n=>dn(n)?n.map(_e):[_e(n)],dm=(n,e,a)=>{if(e._n)return e;const t=Sn((...i)=>Wr(e(...i)),a);return t._c=!1,t},ic=(n,e,a)=>{const t=n._ctx;for(const i in n){if(Gr(i))continue;const r=n[i];if(fn(r))e[i]=dm(i,r,t);else if(r!=null){const s=Wr(r);e[i]=()=>s}}},rc=(n,e)=>{const a=Wr(e);n.slots.default=()=>a},sc=(n,e,a)=>{for(const t in e)(a||!Gr(t))&&(n[t]=e[t])},mm=(n,e,a)=>{const t=n.slots=nc();if(n.vnode.shapeFlag&32){const i=e._;i?(sc(t,e,a),a&&el(t,"_",i,!0)):ic(e,t)}else e&&rc(n,e)},pm=(n,e,a)=>{const{vnode:t,slots:i}=n;let r=!0,s=Mn;if(t.shapeFlag&32){const o=e._;o?a&&o===1?r=!1:sc(i,e,a):(r=!e.$stable,ic(e,i)),s=e}else e&&(rc(n,e),s={default:1});if(r)for(const o in i)!Gr(o)&&s[o]==null&&delete i[o]},se=dc;function fm(n){return hm(n,Ad)}function hm(n,e){const a=Ii();a.__VUE__=!0;const{insert:t,remove:i,patchProp:r,createElement:s,createText:o,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:m,setScopeId:p=Le,insertStaticContent:w}=n,h=(f,b,E,U=null,L=null,Y=null,q=void 0,X=null,$=!!b.dynamicChildren)=>{if(f===b)return;f&&!Sa(f,b)&&(U=K(f),hn(f,L,Y,!0),f=null),b.patchFlag===-2&&($=!1,b.dynamicChildren=null),b.dynamicChildren&&f&&f.dynamicChildren&&f.dynamicChildren.hasOnce&&(b.dynamicChildren===ka&&(b.dynamicChildren=[]),b.dynamicChildren.hasOnce=!0);const{type:G,ref:un,shapeFlag:tn}=b;switch(G){case Ia:g(f,b,E,U);break;case Xn:_(f,b,E,U);break;case Wa:f==null&&S(b,E,U,q);break;case gn:x(f,b,E,U,L,Y,q,X,$);break;default:tn&1?I(f,b,E,U,L,Y,q,X,$):tn&6?F(f,b,E,U,L,Y,q,X,$):(tn&64||tn&128)&&G.process(f,b,E,U,L,Y,q,X,$,on)}un!=null&&L?Ga(un,f&&f.ref,Y,b||f,!b):un==null&&f&&f.ref!=null&&Ga(f.ref,null,Y,f,!0)},g=(f,b,E,U)=>{if(f==null)t(b.el=o(b.children),E,U);else{const L=b.el=f.el;b.children!==f.children&&u(L,b.children)}},_=(f,b,E,U)=>{f==null?t(b.el=l(b.children||""),E,U):b.el=f.el},S=(f,b,E,U)=>{[f.el,f.anchor]=w(f.children,b,E,U,f.el,f.anchor)},v=({el:f,anchor:b},E,U)=>{let L;for(;f&&f!==b;)L=m(f),t(f,E,U),f=L;t(b,E,U)},k=({el:f,anchor:b})=>{let E;for(;f&&f!==b;)E=m(f),i(f),f=E;i(b)},I=(f,b,E,U,L,Y,q,X,$)=>{if(b.type==="svg"?q="svg":b.type==="math"&&(q="mathml"),f==null)z(b,E,U,L,Y,q,X,$);else{const G=f.el&&f.el._isVueCE?f.el:null;try{G&&G._beginPatch(),M(f,b,L,Y,q,X,$)}finally{G&&G._endPatch()}}},z=(f,b,E,U,L,Y,q,X)=>{let $,G;const{props:un,shapeFlag:tn,transition:ln,dirs:pn}=f;if($=f.el=s(f.type,Y,un&&un.is,un),tn&8?c($,f.children):tn&16&&A(f.children,$,null,U,L,tr(f,Y),q,X),pn&&Re(f,null,U,"created"),C($,f,f.scopeId,q,U),un){for(const On in un)On!=="value"&&!Ba(On)&&r($,On,null,un[On],Y,U);"value"in un&&r($,"value",null,un.value,Y),(G=un.onVnodeBeforeMount)&&ye(G,U,f)}pn&&Re(f,null,U,"beforeMount");const _n=oc(L,ln);_n&&ln.beforeEnter($),t($,b,E),((G=un&&un.onVnodeMounted)||_n||pn)&&se(()=>{try{G&&ye(G,U,f),_n&&ln.enter($),pn&&Re(f,null,U,"mounted")}finally{}},L)},C=(f,b,E,U,L)=>{if(E&&p(f,E),U)for(let Y=0;Y<U.length;Y++)p(f,U[Y]);if(L){let Y=L.subTree;if(b===Y||uc(Y.type)&&(Y.ssContent===b||Y.ssFallback===b)){const q=L.vnode;C(f,q,q.scopeId,q.slotScopeIds,L.parent)}}},A=(f,b,E,U,L,Y,q,X,$=0)=>{for(let G=$;G<f.length;G++){const un=f[G]=X?Ue(f[G]):_e(f[G]);h(null,un,b,E,U,L,Y,q,X)}},M=(f,b,E,U,L,Y,q)=>{const X=b.el=f.el;let{patchFlag:$,dynamicChildren:G,dirs:un}=b;$|=f.patchFlag&16;const tn=f.props||Mn,ln=b.props||Mn;let pn;if(E&&va(E,!1),(pn=ln.onVnodeBeforeUpdate)&&ye(pn,E,b,f),un&&Re(b,f,E,"beforeUpdate"),E&&va(E,!0),G&&(!f.dynamicChildren||f.dynamicChildren.length!==G.length)&&($=0,q=!1,G=null),(tn.innerHTML&&ln.innerHTML==null||tn.textContent&&ln.textContent==null)&&c(X,""),G?R(f.dynamicChildren,G,X,E,U,tr(b,L),Y):q||V(f,b,X,null,E,U,tr(b,L),Y,!1),$>0){if($&16)D(X,tn,ln,E,L);else if($&2&&tn.class!==ln.class&&r(X,"class",null,ln.class,L),$&4&&r(X,"style",tn.style,ln.style,L),$&8){const _n=b.dynamicProps;for(let On=0;On<_n.length;On++){const In=_n[On],jn=tn[In],Un=ln[In];(Un!==jn||In==="value")&&r(X,In,jn,Un,L,E)}}$&1&&f.children!==b.children&&c(X,b.children)}else!q&&G==null&&D(X,tn,ln,E,L);((pn=ln.onVnodeUpdated)||un)&&se(()=>{pn&&ye(pn,E,b,f),un&&Re(b,f,E,"updated")},U)},R=(f,b,E,U,L,Y,q)=>{for(let X=0;X<b.length;X++){const $=f[X],G=b[X],un=$.el&&($.type===gn||!Sa($,G)||$.shapeFlag&198)?d($.el):E;h($,G,un,null,U,L,Y,q,!0)}},D=(f,b,E,U,L)=>{if(b!==E){if(b!==Mn)for(const Y in b)!Ba(Y)&&!(Y in E)&&r(f,Y,b[Y],null,L,U);for(const Y in E){if(Ba(Y))continue;const q=E[Y],X=b[Y];q!==X&&Y!=="value"&&r(f,Y,X,q,L,U)}"value"in E&&r(f,"value",b.value,E.value,L)}},x=(f,b,E,U,L,Y,q,X,$)=>{const G=b.el=f?f.el:o(""),un=b.anchor=f?f.anchor:o("");let{patchFlag:tn,dynamicChildren:ln,slotScopeIds:pn}=b;pn&&(X=X?X.concat(pn):pn),f==null?(t(G,E,U),t(un,E,U),A(b.children||[],E,un,L,Y,q,X,$)):tn>0&&tn&64&&ln&&f.dynamicChildren&&f.dynamicChildren.length===ln.length?(R(f.dynamicChildren,ln,E,L,Y,q,X),(b.key!=null||L&&b===L.subTree)&&$r(f,b,!0)):V(f,b,E,un,L,Y,q,X,$)},F=(f,b,E,U,L,Y,q,X,$)=>{b.slotScopeIds=X,f==null?b.shapeFlag&512?L.ctx.activate(b,E,U,q,$):O(b,E,U,L,Y,q,$):j(f,b,$)},O=(f,b,E,U,L,Y,q)=>{const X=f.component=_m(f,U,L);if(Lt(f)&&(X.ctx.renderer=on),Sm(X,!1,q),X.asyncDep){if(L&&L.registerDep(X,P,q),!f.el){const $=X.subTree=cn(Xn);_(null,$,b,E),f.placeholder=$.el}}else P(X,f,b,E,L,Y,q)},j=(f,b,E)=>{const U=b.component=f.component;if(om(f,b,E))if(U.asyncDep&&!U.asyncResolved){b.el=f.el,Q(U,b,E);return}else U.next=b,U.update();else b.el=f.el,U.vnode=b},P=(f,b,E,U,L,Y,q)=>{const X=()=>{if(f.isMounted){let{next:tn,bu:ln,u:pn,parent:_n,vnode:On}=f;{const de=lc(f);if(de){tn&&(tn.el=On.el,Q(f,tn,q)),de.asyncDep.then(()=>{se(()=>{f.isUnmounted||G()},L)});return}}let In=tn,jn;va(f,!1),tn?(tn.el=On.el,Q(f,tn,q)):tn=On,ln&&$i(ln),(jn=tn.props&&tn.props.onVnodeBeforeUpdate)&&ye(jn,_n,tn,On),va(f,!0);const Un=ar(f),Ae=f.subTree;f.subTree=Un,h(Ae,Un,d(Ae.el),K(Ae),f,L,Y),tn.el=Un.el,In===null&&ql(f,Un.el),pn&&se(pn,L),(jn=tn.props&&tn.props.onVnodeUpdated)&&se(()=>ye(jn,_n,tn,On),L)}else{let tn;const{el:ln,props:pn}=b,{bm:_n,m:On,parent:In,root:jn,type:Un}=f,Ae=Ea(b);if(va(f,!1),_n&&$i(_n),!Ae&&(tn=pn&&pn.onVnodeBeforeMount)&&ye(tn,In,b),va(f,!0),ln&&Tn){const de=()=>{f.subTree=ar(f),Tn(ln,f.subTree,f,L,null)};Ae&&Un.__asyncHydrate?Un.__asyncHydrate(ln,f,de):de()}else{jn.ce&&jn.ce._hasShadowRoot()&&jn.ce._injectChildStyle(Un,f.parent?f.parent.type:void 0);const de=f.subTree=ar(f);h(null,de,E,U,f,L,Y),b.el=de.el}if(On&&se(On,L),!Ae&&(tn=pn&&pn.onVnodeMounted)){const de=b;se(()=>ye(tn,In,de),L)}(b.shapeFlag&256||In&&Ea(In.vnode)&&In.vnode.shapeFlag&256)&&f.a&&se(f.a,L),f.isMounted=!0,b=E=U=null}};f.scope.on();const $=f.effect=new rl(X);f.scope.off();const G=f.update=$.run.bind($),un=f.job=$.runIfDirty.bind($);un.i=f,un.id=f.uid,$.scheduler=()=>Kr(un),va(f,!0),G()},Q=(f,b,E)=>{b.component=f;const U=f.vnode.props;f.vnode=b,f.next=null,cm(f,b.props,U,E),pm(f,b.children,E),qe(),Is(f),Qe()},V=(f,b,E,U,L,Y,q,X,$=!1)=>{const G=f&&f.children,un=f?f.shapeFlag:0,tn=b.children,{patchFlag:ln,shapeFlag:pn}=b;if(ln>0){if(ln&128){H(G,tn,E,U,L,Y,q,X,$);return}else if(ln&256){J(G,tn,E,U,L,Y,q,X,$);return}}pn&8?(un&16&&ue(G,L,Y),tn!==G&&c(E,tn)):un&16?pn&16?H(G,tn,E,U,L,Y,q,X,$):ue(G,L,Y,!0):(un&8&&c(E,""),pn&16&&A(tn,E,U,L,Y,q,X,$))},J=(f,b,E,U,L,Y,q,X,$)=>{f=f||ka,b=b||ka;const G=f.length,un=b.length,tn=Math.min(G,un);let ln;for(ln=0;ln<tn;ln++){const pn=b[ln]=$?Ue(b[ln]):_e(b[ln]);h(f[ln],pn,E,null,L,Y,q,X,$)}G>un?ue(f,L,Y,!0,!1,tn):A(b,E,U,L,Y,q,X,$,tn)},H=(f,b,E,U,L,Y,q,X,$)=>{let G=0;const un=b.length;let tn=f.length-1,ln=un-1;for(;G<=tn&&G<=ln;){const pn=f[G],_n=b[G]=$?Ue(b[G]):_e(b[G]);if(Sa(pn,_n))h(pn,_n,E,null,L,Y,q,X,$);else break;G++}for(;G<=tn&&G<=ln;){const pn=f[tn],_n=b[ln]=$?Ue(b[ln]):_e(b[ln]);if(Sa(pn,_n))h(pn,_n,E,null,L,Y,q,X,$);else break;tn--,ln--}if(G>tn){if(G<=ln){const pn=ln+1,_n=pn<un?b[pn].el:U;for(;G<=ln;)h(null,b[G]=$?Ue(b[G]):_e(b[G]),E,_n,L,Y,q,X,$),G++}}else if(G>ln)for(;G<=tn;)hn(f[G],L,Y,!0),G++;else{const pn=G,_n=G,On=new Map;for(G=_n;G<=ln;G++){const me=b[G]=$?Ue(b[G]):_e(b[G]);me.key!=null&&On.set(me.key,G)}let In,jn=0;const Un=ln-_n+1;let Ae=!1,de=0;const st=new Array(Un);for(G=0;G<Un;G++)st[G]=0;for(G=pn;G<=tn;G++){const me=f[G];if(jn>=Un){hn(me,L,Y,!0);continue}let Ce;if(me.key!=null)Ce=On.get(me.key);else for(In=_n;In<=ln;In++)if(st[In-_n]===0&&Sa(me,b[In])){Ce=In;break}Ce===void 0?hn(me,L,Y,!0):(st[Ce-_n]=G+1,Ce>=de?de=Ce:Ae=!0,h(me,b[Ce],E,null,L,Y,q,X,$),jn++)}const ws=Ae?vm(st):ka;for(In=ws.length-1,G=Un-1;G>=0;G--){const me=_n+G,Ce=b[me],_s=b[me+1],Ss=me+1<un?_s.el||cc(_s):U;st[G]===0?h(null,Ce,E,Ss,L,Y,q,X,$):Ae&&(In<0||G!==ws[In]?Z(Ce,E,Ss,2):In--)}}},Z=(f,b,E,U,L=null)=>{const{el:Y,type:q,transition:X,children:$,shapeFlag:G}=f;if(G&6){Z(f.component.subTree,b,E,U);return}if(G&128){f.suspense.move(b,E,U);return}if(G&64){q.move(f,b,E,on);return}if(q===gn){t(Y,b,E);for(let tn=0;tn<$.length;tn++)Z($[tn],b,E,U);t(f.anchor,b,E);return}if(q===Wa){v(f,b,E);return}if(U!==2&&G&1&&X)if(U===0)X.persisted&&!Y[we]?t(Y,b,E):(X.beforeEnter(Y),t(Y,b,E),se(()=>X.enter(Y),L));else{const{leave:tn,delayLeave:ln,afterLeave:pn}=X,_n=()=>{f.ctx.isUnmounted?i(Y):t(Y,b,E)},On=()=>{const In=Y._isLeaving||!!Y[we];Y._isLeaving&&Y[we](!0),X.persisted&&!In?_n():tn(Y,()=>{_n(),pn&&pn()})};ln?ln(Y,_n,On):On()}else t(Y,b,E)},hn=(f,b,E,U=!1,L=!1)=>{const{type:Y,props:q,ref:X,children:$,dynamicChildren:G,shapeFlag:un,patchFlag:tn,dirs:ln,cacheIndex:pn,memo:_n}=f;if((tn===-2||G&&G.hasOnce)&&(L=!1),X!=null&&(qe(),Ga(X,null,E,f,!0),Qe()),pn!=null&&(!f.ctx||f.ctx===b)&&(b.renderCache[pn]=void 0),un&256){b.ctx.deactivate(f);return}const On=un&1&&ln,In=!Ea(f);let jn;if(In&&(jn=q&&q.onVnodeBeforeUnmount)&&ye(jn,b,f),un&6)Zn(f.component,E,U);else{if(un&128){f.suspense.unmount(E,U);return}On&&Re(f,null,b,"beforeUnmount"),un&64?f.type.remove(f,b,E,on,U):G&&!G.hasOnce&&(Y!==gn||tn>0&&tn&64)?ue(G,b,E,!1,!0):(Y===gn&&tn&384||!L&&un&16)&&ue($,b,E),U&&Ln(f)}const Un=_n!=null&&pn==null;(In&&(jn=q&&q.onVnodeUnmounted)||On||Un)&&se(()=>{jn&&ye(jn,b,f),On&&Re(f,null,b,"unmounted"),Un&&(f.el=null)},E)},Ln=f=>{const{type:b,el:E,anchor:U,transition:L}=f;if(b===gn){Jn(E,U);return}if(b===Wa){k(f),L&&!L.persisted&&L.afterLeave&&L.afterLeave();return}const Y=()=>{i(E),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(f.shapeFlag&1&&L&&!L.persisted){const{leave:q,delayLeave:X}=L,$=()=>q(E,Y);X?X(f.el,Y,$):$()}else Y()},Jn=(f,b)=>{let E;for(;f!==b;)E=m(f),i(f),f=E;i(b)},Zn=(f,b,E)=>{const{bum:U,scope:L,job:Y,subTree:q,um:X,m:$,a:G}=f;js($),js(G),U&&$i(U),L.stop(),Y?(Y.flags|=8,hn(q,f,b,E)):f.vnode.el&&q&&(q.transition=f.vnode.transition,hn(q,f,b,E)),X&&se(X,b),se(()=>{f.isUnmounted=!0},b)},ue=(f,b,E,U=!1,L=!1,Y=0)=>{for(let q=Y;q<f.length;q++)hn(f[q],b,E,U,L)},K=f=>{if(f.shapeFlag&6)return K(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const b=m(f.anchor||f.el),E=b&&b[Ol];return E?m(E):b};let an=!1;const nn=(f,b,E)=>{let U;f==null?b._vnode&&(hn(b._vnode,null,null,!0),U=b._vnode.component):h(b._vnode||null,f,b,null,null,null,E),b._vnode=f,an||(an=!0,Is(U),fi(),an=!1)},on={p:h,um:hn,m:Z,r:Ln,mt:O,mc:A,pc:V,pbc:R,n:K,o:n};let bn,Tn;return e&&([bn,Tn]=e(on)),{render:nn,hydrate:bn,createApp:em(nn,bn)}}function tr({type:n,props:e},a){return a==="svg"&&n==="foreignObject"||a==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:a}function va({effect:n,job:e},a){a?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function oc(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function $r(n,e,a=!1){const t=n.children,i=e.children;if(dn(t)&&dn(i))for(let r=0;r<t.length;r++){const s=t[r];let o=i[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[r]=Ue(i[r]),o.el=s.el),!a&&o.patchFlag!==-2&&$r(s,o)),o.type===Ia&&(o.patchFlag===-1&&(o=i[r]=Ue(o)),o.el=s.el),o.type===Xn&&!o.el&&(o.el=s.el)}}function vm(n){const e=n.slice(),a=[0];let t,i,r,s,o;const l=n.length;for(t=0;t<l;t++){const u=n[t];if(u!==0){if(i=a[a.length-1],n[i]<u){e[t]=i,a.push(t);continue}for(r=0,s=a.length-1;r<s;)o=r+s>>1,n[a[o]]<u?r=o+1:s=o;u<n[a[r]]&&(r>0&&(e[t]=a[r-1]),a[r]=t)}}for(r=a.length,s=a[r-1];r-- >0;)a[r]=s,s=e[s];return a}function lc(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:lc(e)}function js(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function cc(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?cc(e.subTree):null}const uc=n=>n.__isSuspense;function dc(n,e){e&&e.pendingBranch?dn(n)?e.effects.push(...n):e.effects.push(n):hd(n)}const gn=Symbol.for("v-fgt"),Ia=Symbol.for("v-txt"),Xn=Symbol.for("v-cmt"),Wa=Symbol.for("v-stc"),Xe=[];let pe=null;function N(n=!1){Xe.push(pe=n?null:[])}function Jr(){Xe.pop(),pe=Xe[Xe.length-1]||null}let Bt=1;function wi(n,e=!1){Bt+=n,n<0&&pe&&e&&(pe.hasOnce=!0)}function mc(n){return n.dynamicChildren=Bt>0?pe||ka:null,Jr(),Bt>0&&pe&&pe.push(n),n}function W(n,e,a,t,i,r){return mc(T(n,e,a,t,i,r,!0))}function Pn(n,e,a,t,i){return mc(cn(n,e,a,t,i,!0))}function At(n){return n?n.__v_isVNode===!0:!1}function Sa(n,e){return n.type===e.type&&n.key===e.key}const pc=({key:n})=>n??null,oi=({ref:n,ref_key:e,ref_for:a})=>(typeof n=="number"&&(n=""+n),n!=null?Nn(n)||zn(n)||fn(n)?{i:Qn,r:n,k:e,f:!!a}:n:null);function T(n,e=null,a=null,t=0,i=null,r=n===gn?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&pc(e),ref:e&&oi(e),scopeId:Il,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:t,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Qn};return o?(_i(l,a),r&128&&n.normalize(l)):a&&(l.shapeFlag|=Nn(a)?8:16),Bt>0&&!s&&pe&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&pe.push(l),l}const cn=bm;function bm(n,e=null,a=null,t=0,i=null,r=!1){if((!n||n===Yl)&&(n=Xn),At(n)){const o=fa(n,e,!0);return a&&_i(o,a),Bt>0&&!r&&pe&&(o.shapeFlag&6?pe[pe.indexOf(n)]=o:pe.push(o)),o.patchFlag=-2,o}if(Am(n)&&(n=n.__vccOpts),e){e=li(e);let{class:o,style:l}=e;o&&!Nn(o)&&(e.class=Kn(o)),kn(l)&&(Di(l)&&!dn(l)&&(l=Yn({},l)),e.style=En(l))}const s=Nn(n)?1:uc(n)?128:Li(n)?64:kn(n)?4:fn(n)?2:0;return T(n,e,a,t,i,s,r,!0)}function li(n){return n?Di(n)||ec(n)?Yn({},n):n:null}function fa(n,e,a=!1,t=!1){const{props:i,ref:r,patchFlag:s,children:o,transition:l}=n,u=e?fc(i||{},e):i,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&pc(u),ref:e&&e.ref?a&&r?dn(r)?r.concat(oi(e)):[r,oi(e)]:oi(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==gn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fa(n.ssContent),ssFallback:n.ssFallback&&fa(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&t&&Pa(c,l.clone(c)),c}function he(n=" ",e=0){return cn(Ia,null,n,e)}function gm(n,e){const a=cn(Wa,null,n);return a.staticCount=e,a}function mn(n="",e=!1){return e?(N(),Pn(Xn,null,n)):cn(Xn,null,n)}function _e(n){return n==null||typeof n=="boolean"?cn(Xn):dn(n)?cn(gn,null,n.slice()):At(n)?Ue(n):cn(Ia,null,String(n))}function Ue(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:fa(n)}function _i(n,e){let a=0;const{shapeFlag:t}=n;if(e==null)e=null;else if(dn(e))a=16;else if(typeof e=="object")if(t&65){const i=e.default;i&&(i._c&&(i._d=!1),_i(n,i()),i._c&&(i._d=!0));return}else{a=32;const i=e._;!i&&!ec(e)?e._ctx=Qn:i===3&&Qn&&(Qn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(fn(e)){if(t&65){_i(n,{default:e});return}e={default:e,_ctx:Qn},a=32}else e=String(e),t&64?(a=16,e=[he(e)]):a=8;n.children=e,n.shapeFlag|=a}function fc(...n){const e={};for(let a=0;a<n.length;a++){const t=n[a];for(const i in t)if(i==="class")e.class!==t.class&&(e.class=Kn([e.class,t.class]));else if(i==="style")e.style=En([e.style,t.style]);else if(Pt(i)){const r=e[i],s=t[i];s&&r!==s&&!(dn(r)&&r.includes(s))?e[i]=r?[].concat(r,s):s:s==null&&r==null&&!Ai(i)&&(e[i]=s)}else i!==""&&(e[i]=t[i])}return e}function ye(n,e,a,t=null){xe(n,e,7,[a,t])}const ym=Jl();let wm=0;function _m(n,e,a){const t=n.type,i=(e?e.appContext:n.appContext)||ym,r={uid:wm++,vnode:n,type:t,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Nu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tc(t,i),emitsOptions:Xl(t,i),emit:null,emitted:null,propsDefaults:Mn,inheritAttrs:t.inheritAttrs,ctx:Mn,data:Mn,props:Mn,attrs:Mn,slots:Mn,refs:Mn,setupState:Mn,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=tm.bind(null,r),n.ce&&n.ce(r),r}let qn=null;const Be=()=>qn||Qn;let Si,Et;{const n=Ii(),e=(a,t)=>{let i;return(i=n[a])||(i=n[a]=[]),i.push(t),r=>{i.length>1?i.forEach(s=>s(r)):i[0](r)}};Si=e("__VUE_INSTANCE_SETTERS__",a=>qn=a),Et=e("__VUE_SSR_SETTERS__",a=>qa=a)}const Ft=n=>{const e=qn;return Si(n),n.scope.on(),()=>{n.scope.off(),Si(e)}},Ys=()=>{qn&&qn.scope.off(),Si(null)};function hc(n){return n.vnode.shapeFlag&4}let qa=!1;function Sm(n,e=!1,a=!1){e&&Et(e);const{props:t,children:i}=n.vnode,r=hc(n);lm(n,t,r,e),mm(n,i,a||e);const s=r?km(n,e):void 0;return e&&Et(!1),s}function km(n,e){const a=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Gd);const{setup:t}=a;if(t){qe();const i=n.setupContext=t.length>1?bc(n):null,r=Ft(n),s=Nt(t,n,0,[n.props,i]),o=qo(s);if(Qe(),r(),(o||n.sp)&&!Ea(n)&&Yr(n),o){if(s.then(Ys,Ys),e)return s.then(l=>{Et(!0);try{Us(n,l,e)}finally{Et(!1)}}).catch(l=>{Dt(l,n,0)});n.asyncDep=s}else Us(n,s)}else vc(n)}function Us(n,e,a){fn(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:kn(e)&&(n.setupState=kl(e)),vc(n)}function vc(n,e,a){const t=n.type;n.render||(n.render=t.render||Le);{const i=Ft(n);qe();try{Jd(n)}finally{Qe(),i()}}}const xm={get(n,e){return te(n,"get",""),n[e]}};function bc(n){const e=a=>{n.exposed=a||{}};return{attrs:new Proxy(n.attrs,xm),slots:n.slots,emit:n.emit,expose:e}}function Ki(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(kl(ad(n.exposed)),{get(e,a){if(a in e)return e[a];if(a in bt)return bt[a](n)},has(e,a){return a in e||a in bt}})):n.proxy}function Bm(n,e=!0){return fn(n)?n.displayName||n.name:n.name||e&&n.__name}function Am(n){return fn(n)&&"__vccOpts"in n}const B=(n,e)=>ud(n,e,qa);function rn(n,e,a){try{wi(-1);const t=arguments.length;return t===2?kn(e)&&!dn(e)?At(e)?cn(n,null,[e]):cn(n,e):cn(n,null,e):(t>3?a=Array.prototype.slice.call(arguments,2):t===3&&At(a)&&(a=[a]),cn(n,e,a))}finally{wi(1)}}const Em="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Er;const Gs=typeof window<"u"&&window.trustedTypes;if(Gs)try{Er=Gs.createPolicy("vue",{createHTML:n=>n})}catch{}const gc=Er?n=>Er.createHTML(n):n=>n,Tm="http://www.w3.org/2000/svg",Im="http://www.w3.org/1998/Math/MathML",Ye=typeof document<"u"?document:null,Ws=Ye&&Ye.createElement("template"),Mm={insert:(n,e,a)=>{e.insertBefore(n,a||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,a,t)=>{const i=e==="svg"?Ye.createElementNS(Tm,n):e==="mathml"?Ye.createElementNS(Im,n):a?Ye.createElement(n,{is:a}):Ye.createElement(n);return n==="select"&&t&&t.multiple!=null&&i.setAttribute("multiple",t.multiple),i},createText:n=>Ye.createTextNode(n),createComment:n=>Ye.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ye.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,a,t,i,r){const s=a?a.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),a),!(i===r||!(i=i.nextSibling)););else{Ws.innerHTML=gc(t==="svg"?`<svg>${n}</svg>`:t==="mathml"?`<math>${n}</math>`:n);const o=Ws.content;if(t==="svg"||t==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,a)}return[s?s.nextSibling:e.firstChild,a?a.previousSibling:e.lastChild]}},aa="transition",ct="animation",Qa=Symbol("_vtc"),yc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},wc=Yn({},Dl,yc),Cm=n=>(n.displayName="Transition",n.props=wc,n),it=Cm((n,{slots:e})=>rn(kd,_c(n),e)),ba=(n,e=[])=>{dn(n)?n.forEach(a=>a(...e)):n&&n(...e)},$s=n=>n?dn(n)?n.some(e=>e.length>1):n.length>1:!1;function _c(n){const e={};for(const x in n)x in yc||(e[x]=n[x]);if(n.css===!1)return e;const{name:a="v",type:t,duration:i,enterFromClass:r=`${a}-enter-from`,enterActiveClass:s=`${a}-enter-active`,enterToClass:o=`${a}-enter-to`,appearFromClass:l=r,appearActiveClass:u=s,appearToClass:c=o,leaveFromClass:d=`${a}-leave-from`,leaveActiveClass:m=`${a}-leave-active`,leaveToClass:p=`${a}-leave-to`}=n,w=Pm(i),h=w&&w[0],g=w&&w[1],{onBeforeEnter:_,onEnter:S,onEnterCancelled:v,onLeave:k,onLeaveCancelled:I,onBeforeAppear:z=_,onAppear:C=S,onAppearCancelled:A=v}=e,M=(x,F,O,j)=>{x._enterCancelled=j,ia(x,F?c:o),ia(x,F?u:s),O&&O()},R=(x,F)=>{x._isLeaving=!1,ia(x,d),ia(x,p),ia(x,m),F&&F()},D=x=>(F,O)=>{const j=x?C:S,P=()=>M(F,x,O);ba(j,[F,P]),Js(()=>{ia(F,x?l:r),Pe(F,x?c:o),$s(j)||Xs(F,t,h,P)})};return Yn(e,{onBeforeEnter(x){ba(_,[x]),Pe(x,r),Pe(x,s)},onBeforeAppear(x){ba(z,[x]),Pe(x,l),Pe(x,u)},onEnter:D(!1),onAppear:D(!0),onLeave(x,F){x._isLeaving=!0;const O=()=>R(x,F);Pe(x,d),x._enterCancelled?(Pe(x,m),Tr(x)):(Tr(x),Pe(x,m)),Js(()=>{x._isLeaving&&(ia(x,d),Pe(x,p),$s(k)||Xs(x,t,g,O))}),ba(k,[x,O])},onEnterCancelled(x){M(x,!1,void 0,!0),ba(v,[x])},onAppearCancelled(x){M(x,!0,void 0,!0),ba(A,[x])},onLeaveCancelled(x){R(x),ba(I,[x])}})}function Pm(n){if(n==null)return null;if(kn(n))return[ir(n.enter),ir(n.leave)];{const e=ir(n);return[e,e]}}function ir(n){return Au(n)}function Pe(n,e){e.split(/\s+/).forEach(a=>a&&n.classList.add(a)),(n[Qa]||(n[Qa]=new Set)).add(e)}function ia(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.remove(t));const a=n[Qa];a&&(a.delete(e),a.size||(n[Qa]=void 0))}function Js(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Om=0;function Xs(n,e,a,t){const i=n._endId=++Om,r=()=>{i===n._endId&&t()};if(a!=null)return setTimeout(r,a);const{type:s,timeout:o,propCount:l}=Sc(n,e);if(!s)return t();const u=s+"end";let c=0;const d=()=>{n.removeEventListener(u,m),r()},m=p=>{p.target===n&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},o+1),n.addEventListener(u,m)}function Sc(n,e){const a=window.getComputedStyle(n),t=w=>(a[w]||"").split(", "),i=t(`${aa}Delay`),r=t(`${aa}Duration`),s=Zs(i,r),o=t(`${ct}Delay`),l=t(`${ct}Duration`),u=Zs(o,l);let c=null,d=0,m=0;e===aa?s>0&&(c=aa,d=s,m=r.length):e===ct?u>0&&(c=ct,d=u,m=l.length):(d=Math.max(s,u),c=d>0?s>u?aa:ct:null,m=c?c===aa?r.length:l.length:0);const p=c===aa&&/\b(?:transform|all)(?:,|$)/.test(t(`${aa}Property`).toString());return{type:c,timeout:d,propCount:m,hasTransform:p}}function Zs(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((a,t)=>qs(a)+qs(n[t])))}function qs(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Tr(n){return(n?n.ownerDocument:document).body.offsetHeight}function Rm(n,e,a){const t=n[Qa];t&&(e=(e?[e,...t]:[...t]).join(" ")),e==null?n.removeAttribute("class"):a?n.setAttribute("class",e):n.className=e}const ki=Symbol("_vod"),Xr=Symbol("_vsh"),Oa={name:"show",beforeMount(n,{value:e},{transition:a}){n[ki]=n.style.display==="none"?"":n.style.display,a&&e?a.beforeEnter(n):ut(n,e)},mounted(n,{value:e},{transition:a}){a&&e&&a.enter(n)},updated(n,{value:e,oldValue:a},{transition:t}){!e!=!a&&(t?e?(t.beforeEnter(n),ut(n,!0),t.enter(n)):t.leave(n,()=>{ut(n,!1)}):ut(n,e))},beforeUnmount(n,{value:e}){ut(n,e)}};function ut(n,e){n.style.display=e?n[ki]:"none",n[Xr]=!e}const Nm=Symbol(""),Dm=/(?:^|;)\s*display\s*:/;function Lm(n,e,a){const t=n.style,i=Nn(a);let r=!1;if(a&&!i){if(e)if(Nn(e))for(const s of e.split(";")){const o=s.slice(0,s.indexOf(":")).trim();a[o]==null&&ft(t,o,"")}else for(const s in e)a[s]==null&&ft(t,s,"");for(const s in a){s==="display"&&(r=!0);const o=a[s];o!=null?Fm(n,s,!Nn(e)&&e?e[s]:void 0,o)||ft(t,s,o):ft(t,s,"")}}else if(i){if(e!==a){const s=t[Nm];s&&(a+=";"+s),t.cssText=a,r=Dm.test(a)}}else e&&n.removeAttribute("style");ki in n&&(n[ki]=r?t.display:"",n[Xr]&&(t.display="none"))}const Zt=/\s*!important$/;function ft(n,e,a){if(dn(a))a.forEach(t=>ft(n,e,t));else if(a==null&&(a=""),e.startsWith("--"))Zt.test(a)?n.setProperty(e,a.replace(Zt,""),"important"):n.setProperty(e,a);else{const t=Hm(n,e);Zt.test(a)?n.setProperty(ha(t),a.replace(Zt,""),"important"):n[t]=a}}const Qs=["Webkit","Moz","ms"],rr={};function Hm(n,e){const a=rr[e];if(a)return a;let t=ne(e);if(t!=="filter"&&t in n)return rr[e]=t;t=Rt(t);for(let i=0;i<Qs.length;i++){const r=Qs[i]+t;if(r in n)return rr[e]=r}return e}function Fm(n,e,a,t){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Nn(t)&&a===t}const no="http://www.w3.org/1999/xlink";function eo(n,e,a,t,i,r=Pu(e)){t&&e.startsWith("xlink:")?a==null?n.removeAttributeNS(no,e.slice(6,e.length)):n.setAttributeNS(no,e,a):a==null||r&&!al(a)?n.removeAttribute(e):n.setAttribute(e,r?"":ve(a)?String(a):a)}function ao(n,e,a,t,i){if(e==="innerHTML"||e==="textContent"){a!=null&&(n[e]=e==="innerHTML"?gc(a):a);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=a==null?n.type==="checkbox"?"on":"":String(a);(o!==l||!("_value"in n))&&(n.value=l),a==null&&n.removeAttribute(e),n._value=a;return}let s=!1;if(a===""||a==null){const o=typeof n[e];o==="boolean"?a=al(a):a==null&&o==="string"?(a="",s=!0):o==="number"&&(a=0,s=!0)}try{n[e]=a}catch{}s&&n.removeAttribute(i||e)}function Vm(n,e,a,t){n.addEventListener(e,a,t)}function Km(n,e,a,t){n.removeEventListener(e,a,t)}const to=Symbol("_vei");function zm(n,e,a,t,i=null){const r=n[to]||(n[to]={}),s=r[e];if(t&&s)s.value=t;else{const[o,l]=Um(e);if(t){const u=r[e]=$m(t,i);Vm(n,o,u,l)}else s&&(Km(n,o,s,l),r[e]=void 0)}}const jm=/(Once|Passive|Capture)$/,Ym=/^on:?(?:Once|Passive|Capture)$/;function Um(n){let e,a;for(;(a=n.match(jm))&&!Ym.test(n);)e||(e={}),n=n.slice(0,n.length-a[1].length),e[a[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):ha(n.slice(2)),e]}let sr=0;const Gm=Promise.resolve(),Wm=()=>sr||(Gm.then(()=>sr=0),sr=Date.now());function $m(n,e){const a=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=a.attached)return;const i=a.value;if(dn(i)){const r=t.stopImmediatePropagation;t.stopImmediatePropagation=()=>{r.call(t),t._stopped=!0};const s=i.slice(),o=[t];for(let l=0;l<s.length&&!t._stopped;l++){const u=s[l];u&&xe(u,e,5,o)}}else xe(i,e,5,[t])};return a.value=n,a.attached=Wm(),a}const io=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Jm=(n,e,a,t,i,r)=>{const s=i==="svg";e==="class"?Rm(n,t,s):e==="style"?Lm(n,a,t):Pt(e)?Ai(e)||zm(n,e,a,t,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xm(n,e,t,s))?(ao(n,e,t),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&eo(n,e,t,s,r,e!=="value")):n._isVueCE&&(Zm(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Nn(t)))?ao(n,ne(e),t,r,e):(e==="true-value"?n._trueValue=t:e==="false-value"&&(n._falseValue=t),eo(n,e,t,s))};function Xm(n,e,a,t){if(t)return!!(e==="innerHTML"||e==="textContent"||e in n&&io(e)&&fn(a));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return io(e)&&Nn(a)?!1:e in n}function Zm(n,e){const a=n._def.props;if(!a)return!1;const t=ne(e);return Array.isArray(a)?a.some(i=>ne(i)===t):Object.keys(a).some(i=>ne(i)===t)}const kc=new WeakMap,xc=new WeakMap,xi=Symbol("_moveCb"),ro=Symbol("_enterCb"),qm=n=>(delete n.props.mode,n),Qm=qm({name:"TransitionGroup",props:Yn({},wc,{tag:String,moveClass:String}),setup(n,{slots:e}){const a=Be(),t=Nl();let i,r;return zl(()=>{if(!i.length)return;const s=n.moveClass||`${n.name||"v"}-move`;if(!ip(i[0].el,a.vnode.el,s)){i=[];return}i.forEach(ep),i.forEach(ap);const o=i.filter(tp);Tr(a.vnode.el),o.forEach(l=>{const u=l.el,c=u.style;Pe(u,s),c.transform=c.webkitTransform=c.transitionDuration="";const d=u[xi]=m=>{m&&m.target!==u||(!m||m.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",d),u[xi]=null,ia(u,s))};u.addEventListener("transitionend",d)}),i=[]}),()=>{const s=wn(n),o=_c(s);let l=s.tag||gn;if(i=[],r)for(let u=0;u<r.length;u++){const c=r[u];c.el&&c.el instanceof Element&&!c.el[Xr]&&(i.push(c),Pa(c,xt(c,o,t,a)),kc.set(c,Bc(c.el)))}r=e.default?jr(e.default()):[];for(let u=0;u<r.length;u++){const c=r[u];c.key!=null&&Pa(c,xt(c,o,t,a))}return cn(l,null,r)}}}),np=Qm;function ep(n){const e=n.el;e[xi]&&e[xi](),e[ro]&&e[ro]()}function ap(n){xc.set(n,Bc(n.el))}function tp(n){const e=kc.get(n),a=xc.get(n),t=e.left-a.left,i=e.top-a.top;if(t||i){const r=n.el,s=r.style,o=r.getBoundingClientRect();let l=1,u=1;return r.offsetWidth&&(l=o.width/r.offsetWidth),r.offsetHeight&&(u=o.height/r.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(u)||u===0)&&(u=1),Math.abs(l-1)<.01&&(l=1),Math.abs(u-1)<.01&&(u=1),s.transform=s.webkitTransform=`translate(${t/l}px,${i/u}px)`,s.transitionDuration="0s",n}}function Bc(n){const e=n.getBoundingClientRect();return{left:e.left,top:e.top}}function ip(n,e,a){const t=n.cloneNode(),i=n[Qa];i&&i.forEach(o=>{o.split(/\s+/).forEach(l=>l&&t.classList.remove(l))}),a.split(/\s+/).forEach(o=>o&&t.classList.add(o)),t.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(t);const{hasTransform:s}=Sc(t);return r.removeChild(t),s}const rp=["ctrl","shift","alt","meta"],sp={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>rp.some(a=>n[`${a}Key`]&&!e.includes(a))},ca=(n,e)=>{if(!n)return n;const a=n._withMods||(n._withMods={}),t=e.join(".");return a[t]||(a[t]=((i,...r)=>{for(let s=0;s<e.length;s++){const o=sp[e[s]];if(o&&o(i,e))return}return n(i,...r)}))},op={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},lp=(n,e)=>{const a=n._withKeys||(n._withKeys={}),t=e.join(".");return a[t]||(a[t]=(i=>{if(!("key"in i))return;const r=ha(i.key);if(e.some(s=>s===r||op[s]===r))return n(i)}))},cp=Yn({patchProp:Jm},Mm);let or,so=!1;function up(){return or=so?or:fm(cp),so=!0,or}const dp=((...n)=>{const e=up().createApp(...n),{mount:a}=e;return e.mount=t=>{const i=pp(t);if(i)return a(i,!0,mp(i))},e});function mp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function pp(n){return Nn(n)?document.querySelector(n):n}var Vt=n=>/^[a-z][a-z0-9+.-]*:/.test(n)||n.startsWith("//"),fp=/.md((\?|#).*)?$/,hp=(n,e="/")=>Vt(n)||n.startsWith("/")&&!n.startsWith(e)&&!fp.test(n),Kt=n=>/^(https?:)?\/\//.test(n),oo=n=>{if(!n||n.endsWith("/"))return n;let e=n.replace(/(^|\/)README.md$/i,"$1index.html");return e.endsWith(".md")?e=`${e.substring(0,e.length-3)}.html`:e.endsWith(".html")||(e=`${e}.html`),e.endsWith("/index.html")&&(e=e.substring(0,e.length-10)),e},vp="http://.",bp=(n,e)=>{if(!n.startsWith("/")&&e){const a=e.slice(0,e.lastIndexOf("/"));return oo(new URL(`${a}/${n}`,vp).pathname)}return oo(n)},gp=(n,e)=>{const a=Object.keys(n).sort((t,i)=>{const r=i.split("/").length-t.split("/").length;return r!==0?r:i.length-t.length});for(const t of a)if(e.startsWith(t))return t;return"/"},yp=/(#|\?)/,Ac=n=>{const[e,...a]=n.split(yp);return{pathname:e,hashAndQueries:a.join("")}},wp=["link","meta","script","style","noscript","template"],_p=["title","base"],Sp=([n,e,a])=>_p.includes(n)?n:wp.includes(n)?n==="meta"&&e.name?`${n}.${e.name}`:n==="template"&&e.id?`${n}.${e.id}`:JSON.stringify([n,Object.entries(e).map(([t,i])=>typeof i=="boolean"?i?[t,""]:null:[t,i]).filter(t=>t!=null).sort(([t],[i])=>t.localeCompare(i)),a]):null,kp=n=>{const e=new Set,a=[];return n.forEach(t=>{const i=Sp(t);i&&!e.has(i)&&(e.add(i),a.push(t))}),a},xp=n=>n.endsWith("/")||n.endsWith(".html")?n:`${n}/`,Ec=n=>n.endsWith("/")?n.slice(0,-1):n,Tc=n=>n.startsWith("/")?n.slice(1):n,Zr=n=>Object.prototype.toString.call(n)==="[object Object]",Ie=n=>typeof n=="string";const Bp="modulepreload",Ap=function(n){return"/"+n},lo={},y=function(e,a,t){let i=Promise.resolve();if(a&&a.length>0){let l=function(u){return Promise.all(u.map(c=>Promise.resolve(c).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=s?.nonce||s?.getAttribute("nonce");i=l(a.map(u=>{if(u=Ap(u),u in lo)return;lo[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":Bp,c||(m.as="script"),m.crossOrigin="",m.href=u,o&&m.setAttribute("nonce",o),document.head.appendChild(m),c)return new Promise((p,w)=>{m.addEventListener("load",p),m.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return i.then(s=>{for(const o of s||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},Ep=JSON.parse("{}"),Tp=Object.fromEntries([["/",{loader:()=>y(()=>import("./index.html-DxD5v9-j.js"),[]),meta:{title:"首页"}}],["/events/",{loader:()=>y(()=>import("./index.html-BQX3A6gD.js"),[]),meta:{title:"活动"}}],["/faq/",{loader:()=>y(()=>import("./index.html-NprZJqDh.js"),[]),meta:{title:"常见问题"}}],["/faq/game.html",{loader:()=>y(()=>import("./game.html-DnlJPql9.js"),[]),meta:{title:"游戏问题"}}],["/faq/join.html",{loader:()=>y(()=>import("./join.html-AWeqHooU.js"),[]),meta:{title:"加群问题"}}],["/faq/oversr.html",{loader:()=>y(()=>import("./oversr.html-B5f8xwuP.js"),[]),meta:{title:"超星规定"}}],["/introduction/",{loader:()=>y(()=>import("./index.html-tqpIjBxq.js"),[]),meta:{title:"群介绍"}}],["/introduction/history.html",{loader:()=>y(()=>import("./history.html-DmihrtyQ.js"),[]),meta:{title:"群历史"}}],["/introduction/how-to-join.html",{loader:()=>y(()=>import("./how-to-join.html-fIeYzIPr.js"),[]),meta:{title:"加入新人群"}}],["/introduction/series.html",{loader:()=>y(()=>import("./series.html-DCFYFTeM.js"),[]),meta:{title:"系列群介绍"}}],["/meta/contribution-guide.html",{loader:()=>y(()=>import("./contribution-guide.html-KeeOWkST.js"),[]),meta:{title:"贡献指南"}}],["/meta/contributors.html",{loader:()=>y(()=>import("./contributors.html-BnOBx7G3.js"),[]),meta:{title:"贡献者"}}],["/meta/events.html",{loader:()=>y(()=>import("./events.html-D6U9XzeE.js"),[]),meta:{title:"本站重大事件"}}],["/people/",{loader:()=>y(()=>import("./index.html-Cfro6ly3.js"),[]),meta:{title:"管理组"}}],["/people/administrators.html",{loader:()=>y(()=>import("./administrators.html-CgrlxLSa.js"),[]),meta:{title:"管理"}}],["/people/alumni.html",{loader:()=>y(()=>import("./alumni.html-C3MUd_G8.js"),[]),meta:{title:"名人堂"}}],["/people/owner.html",{loader:()=>y(()=>import("./owner.html-C73v_DB9.js"),[]),meta:{title:"群主"}}],["/article/lastwords/",{loader:()=>y(()=>import("./index.html-D3Qnh0KH.js"),[]),meta:{title:"出群遗言"}}],["/article/recommend/-Yuki_Noa-.html",{loader:()=>y(()=>import("./-Yuki_Noa-.html-to7LJvT1.js"),[]),meta:{title:"1687 (-Yuki Noa-) の听歌向旮旯谱推荐"}}],["/article/recommend/BenZn.html",{loader:()=>y(()=>import("./BenZn.html-C1feFrXH.js"),[]),meta:{title:"BenZn 的跳图推荐#刷pp！"}}],["/article/recommend/Muziyami.html",{loader:()=>y(()=>import("./Muziyami.html-C--oj1Yl.js"),[]),meta:{title:"新人必备图包 by Muz 1.5"}}],["/article/recommend/",{loader:()=>y(()=>import("./index.html-BRjzMsob.js"),[]),meta:{title:"谱面推荐"}}],["/article/recommend/SIyuyuko.html",{loader:()=>y(()=>import("./SIyuyuko.html-1NjFAAID.js"),[]),meta:{title:"SIyuyuko 的 pp 图心得 & 谱面推荐"}}],["/article/recommend/Syzygy5593.html",{loader:()=>y(()=>import("./Syzygy5593.html-uQx729-q.js"),[]),meta:{title:"朔望 [Syzygy5593] 的 pp 刷子心得 & pp 图大放送"}}],["/article/recommend/atahana.html",{loader:()=>y(()=>import("./atahana.html-DHdvYohh.js"),[]),meta:{title:"Atahana 精选 DJ 图包"}}],["/article/recommend/hiiragi_kagami.html",{loader:()=>y(()=>import("./hiiragi_kagami.html-CcSnKwdp.js"),[]),meta:{title:"Kagami 的连打推荐 ver3.0"}}],["/article/recommend/jack_wang_.html",{loader:()=>y(()=>import("./jack_wang_.html-wQ_t1Sg8.js"),[]),meta:{title:"菜鸡杰克的初中阶切指练习推荐（进阶已补完）"}}],["/article/recommend/sayori_yui.html",{loader:()=>y(()=>import("./sayori_yui.html-DkrYM6KO.js"),[]),meta:{title:"Sayori's Stage v1.1 （1000pp+综合向）"}}],["/events/charts/",{loader:()=>y(()=>import("./index.html-CL26Hjv3.js"),[]),meta:{title:"月赛列表"}}],["/events/charts/h2303.html",{loader:()=>y(()=>import("./h2303.html-DxMArsEa.js"),[]),meta:{title:"高阶群 2023 年 3 月月赛"}}],["/events/charts/h2304.html",{loader:()=>y(()=>import("./h2304.html-Dc0o2FxZ.js"),[]),meta:{title:"高阶群 2023 年 4 月月赛"}}],["/events/charts/h2305.html",{loader:()=>y(()=>import("./h2305.html-mh-Zsa75.js"),[]),meta:{title:"高阶群 2023 年 5 月月赛"}}],["/events/charts/h2306.html",{loader:()=>y(()=>import("./h2306.html-DWkKgNbB.js"),[]),meta:{title:"高阶群 2023 年 6 月月赛"}}],["/events/charts/h2307.html",{loader:()=>y(()=>import("./h2307.html-DuoSWtCP.js"),[]),meta:{title:"高阶群 2023 年 7 月月赛"}}],["/events/charts/h2308.html",{loader:()=>y(()=>import("./h2308.html-CS8WQ_SY.js"),[]),meta:{title:"高阶群 2023 年 8 月月赛"}}],["/events/charts/h2309.html",{loader:()=>y(()=>import("./h2309.html-BI7AtzI6.js"),[]),meta:{title:"高阶群 2023 年 9 月月赛"}}],["/events/charts/h2310.html",{loader:()=>y(()=>import("./h2310.html-C5D4Mpr6.js"),[]),meta:{title:"高阶群 2023 年 10 月月赛"}}],["/events/charts/h2311.html",{loader:()=>y(()=>import("./h2311.html-CH_SvKDh.js"),[]),meta:{title:"高阶群 2023 年 11 月月赛"}}],["/events/charts/h2312.html",{loader:()=>y(()=>import("./h2312.html-xeq4Jwa-.js"),[]),meta:{title:"高阶群 2023 年 12 月月赛"}}],["/events/collections/",{loader:()=>y(()=>import("./index.html-7_SLjLDP.js"),[]),meta:{title:"集锦列表"}}],["/events/matches/12.html",{loader:()=>y(()=>import("./12.html-D5fh4inS.js"),[]),meta:{title:"第 12 届新人群群赛"}}],["/events/matches/16.html",{loader:()=>y(()=>import("./16.html-BkdEebbX.js"),[]),meta:{title:"第 16 届新人群群赛"}}],["/events/matches/17.html",{loader:()=>y(()=>import("./17.html-2v2LbK5M.js"),[]),meta:{title:"第 17 届新人群群赛"}}],["/events/matches/18.html",{loader:()=>y(()=>import("./18.html-CKVXmkL4.js"),[]),meta:{title:"第 18 届新人群群赛"}}],["/events/matches/19.html",{loader:()=>y(()=>import("./19.html-B0aFTc6B.js"),[]),meta:{title:"第 19 届新人群群赛"}}],["/events/matches/2.html",{loader:()=>y(()=>import("./2.html-Cke8aQJ5.js"),[]),meta:{title:"第 2 届新人群群赛"}}],["/events/matches/20.html",{loader:()=>y(()=>import("./20.html-CH6pKA5w.js"),[]),meta:{title:"第 20 届新人群群赛"}}],["/events/matches/21.html",{loader:()=>y(()=>import("./21.html-DBFnt0iB.js"),[]),meta:{title:"第 21 届新人群群赛"}}],["/events/matches/22.html",{loader:()=>y(()=>import("./22.html-BreSEhfS.js"),[]),meta:{title:"第 22 届新人群群赛"}}],["/events/matches/23.html",{loader:()=>y(()=>import("./23.html-DVgXxC7Q.js"),[]),meta:{title:"第 23 届新人群群赛"}}],["/events/matches/24.html",{loader:()=>y(()=>import("./24.html-kFXjFtDK.js"),[]),meta:{title:"第 24 届新人群群赛"}}],["/events/matches/25.html",{loader:()=>y(()=>import("./25.html-BRI4Go1o.js"),[]),meta:{title:"第 25 届新人群群赛"}}],["/events/matches/26.html",{loader:()=>y(()=>import("./26.html-CJ9RZmRO.js"),[]),meta:{title:"第 26 届新人群群赛"}}],["/events/matches/27.html",{loader:()=>y(()=>import("./27.html-DxceZveQ.js"),[]),meta:{title:"第 27 届新人群群赛"}}],["/events/matches/28.html",{loader:()=>y(()=>import("./28.html-BbjtUg3H.js"),[]),meta:{title:"第 28 届新人群群赛"}}],["/events/matches/29.html",{loader:()=>y(()=>import("./29.html-Cqa6badq.js"),[]),meta:{title:"第 29 届新人群群赛"}}],["/events/matches/30.html",{loader:()=>y(()=>import("./30.html-a9-14pBB.js"),[]),meta:{title:"第 30 届新人群群赛"}}],["/events/matches/31.html",{loader:()=>y(()=>import("./31.html--VyWuvca.js"),[]),meta:{title:"第 31 届新人群群赛"}}],["/events/matches/32.html",{loader:()=>y(()=>import("./32.html-Dt6QzDAt.js"),[]),meta:{title:"第 32 届新人群群赛"}}],["/events/matches/33.html",{loader:()=>y(()=>import("./33.html-R9Pb0voy.js"),[]),meta:{title:"第 33 届新人群群赛"}}],["/events/matches/34.html",{loader:()=>y(()=>import("./34.html-C_qJs4ED.js"),[]),meta:{title:"第 34 届新人群群赛"}}],["/events/matches/7.html",{loader:()=>y(()=>import("./7.html-DTfpr6H6.js"),[]),meta:{title:"第 7 届新人群群赛"}}],["/events/matches/8.html",{loader:()=>y(()=>import("./8.html-xvZcbwIG.js"),[]),meta:{title:"第 8 届新人群群赛"}}],["/events/matches/",{loader:()=>y(()=>import("./index.html-Cr9m3agF.js"),[]),meta:{title:"群赛列表"}}],["/events/matches/a1.html",{loader:()=>y(()=>import("./a1.html-DshHifKT.js"),[]),meta:{title:"第 1 届进阶群群赛"}}],["/events/matches/a2.html",{loader:()=>y(()=>import("./a2.html-ChfRUamj.js"),[]),meta:{title:"第 2 届进阶群群赛"}}],["/events/matches/a3.html",{loader:()=>y(()=>import("./a3.html-c_WgWyHV.js"),[]),meta:{title:"第 3 届进阶群群赛"}}],["/events/matches/o1.5.html",{loader:()=>y(()=>import("./o1.5.html-BtV6agY7.js"),[]),meta:{title:"第 2 (1.5) 届进阶群新群赛"}}],["/events/matches/o1.html",{loader:()=>y(()=>import("./o1.html-C7dE4qHH.js"),[]),meta:{title:"第 1 届进阶群新群赛"}}],["/events/matches/o2.html",{loader:()=>y(()=>import("./o2.html-CyV31Erx.js"),[]),meta:{title:"第 2 届进阶群新群赛"}}],["/events/matches/u.html",{loader:()=>y(()=>import("./u.html-DNefoqjr.js"),[]),meta:{title:"新人群进阶群联合群赛"}}],["/events/matches/y1.html",{loader:()=>y(()=>import("./y1.html-5hmBD3VI.js"),[]),meta:{title:"第 1 届爷爷赛"}}],["/events/matches/y2.html",{loader:()=>y(()=>import("./y2.html-DwIX7jJr.js"),[]),meta:{title:"第 2 届爷爷赛"}}],["/events/matches/y3.html",{loader:()=>y(()=>import("./y3.html-B8RriESo.js"),[]),meta:{title:"第 3 届爷爷赛"}}],["/events/matches/y4.html",{loader:()=>y(()=>import("./y4.html-tXis_Grl.js"),[]),meta:{title:"第 4 届爷爷赛"}}],["/events/rewards/",{loader:()=>y(()=>import("./index.html-BBksr5Bb.js"),[]),meta:{title:"悬赏列表"}}],["/misc/mascots/",{loader:()=>y(()=>import("./index.html-BT9d8Z-y.js"),[]),meta:{title:"新人群的吉祥物"}}],["/misc/bots/",{loader:()=>y(()=>import("./index.html-D-EKMIxx.js"),[]),meta:{title:"新人群的 bot 们"}}],["/misc/meme/",{loader:()=>y(()=>import("./index.html-Ds2RMNbb.js"),[]),meta:{title:"新人群的回忆"}}],["/article/lastwords/users/0.html",{loader:()=>y(()=>import("./0.html-BYqCb4Do.js"),[]),meta:{title:"不知来源的遗言"}}],["/article/lastwords/users/10364008.html",{loader:()=>y(()=>import("./10364008.html-OBIhb_XB.js"),[]),meta:{title:"Erina-（猫と幽靈）的出群遗言"}}],["/article/lastwords/users/13017923.html",{loader:()=>y(()=>import("./13017923.html-BFDnG2XL.js"),[]),meta:{title:"1902993927 的出群遗言"}}],["/article/lastwords/users/13744965.html",{loader:()=>y(()=>import("./13744965.html-C0K2ygLV.js"),[]),meta:{title:"牢大 killbusark 的出群遗言"}}],["/article/lastwords/users/13891947.html",{loader:()=>y(()=>import("./13891947.html-BJRnjnYv.js"),[]),meta:{title:"SakuraPuare 的出群遗言"}}],["/article/lastwords/users/13932883.html",{loader:()=>y(()=>import("./13932883.html-DSLQ2AYw.js"),[]),meta:{title:"[ cz ] 的出群遗言"}}],["/article/lastwords/users/14145531.html",{loader:()=>y(()=>import("./14145531.html-CuJpQGpY.js"),[]),meta:{title:"RookiesTwo 的出群遗言"}}],["/article/lastwords/users/14353421.html",{loader:()=>y(()=>import("./14353421.html-Cxu2ey9k.js"),[]),meta:{title:"Desolation 的出群遗言"}}],["/article/lastwords/users/14748844.html",{loader:()=>y(()=>import("./14748844.html-CSQH254t.js"),[]),meta:{title:"qRainbowSmile 的出群遗言"}}],["/article/lastwords/users/14832181.html",{loader:()=>y(()=>import("./14832181.html-BtJYk2O0.js"),[]),meta:{title:"yuexian 的出群遗言和推图"}}],["/article/lastwords/users/14970885.html",{loader:()=>y(()=>import("./14970885.html-mCFJQDwx.js"),[]),meta:{title:"wings_wacr 的出群遗言"}}],["/article/lastwords/users/15349720.html",{loader:()=>y(()=>import("./15349720.html-VEmrliwJ.js"),[]),meta:{title:"NaughtyChas 的出群遗言"}}],["/article/lastwords/users/15846580.html",{loader:()=>y(()=>import("./15846580.html-yeR3EK2w.js"),[]),meta:{title:"hiki8man の遗言 fix"}}],["/article/lastwords/users/15851436.html",{loader:()=>y(()=>import("./15851436.html-DxCPHL0A.js"),[]),meta:{title:"zyi 的出群纪念"}}],["/article/lastwords/users/16027612.html",{loader:()=>y(()=>import("./16027612.html-CMTxzkzW.js"),[]),meta:{title:"ChiliJay 的出群遗言"}}],["/article/lastwords/users/16378561.html",{loader:()=>y(()=>import("./16378561.html-DHvHE1z3.js"),[]),meta:{title:"Pouxba 的出群遗言"}}],["/article/lastwords/users/16572973.html",{loader:()=>y(()=>import("./16572973.html-CSEYp_Bz.js"),[]),meta:{title:"7lonekey 的出群遗言"}}],["/article/lastwords/users/16822918.html",{loader:()=>y(()=>import("./16822918.html-BfZunYk1.js"),[]),meta:{title:"Fujwara 的出群遗言"}}],["/article/lastwords/users/16868813.html",{loader:()=>y(()=>import("./16868813.html-DEJjQMxT.js"),[]),meta:{title:"Manhattan Cafee 的出群遗言"}}],["/article/lastwords/users/17027628.html",{loader:()=>y(()=>import("./17027628.html-Ca5LAOiK.js"),[]),meta:{title:"shuaiyue 的出群遗言"}}],["/article/lastwords/users/17610368.html",{loader:()=>y(()=>import("./17610368.html-DPkwiDGH.js"),[]),meta:{title:"1ch0 出群遗言（越级指南）"}}],["/article/lastwords/users/18230719.html",{loader:()=>y(()=>import("./18230719.html-Bn4jfYTo.js"),[]),meta:{title:"ZnCookie 的出群遗言"}}],["/article/lastwords/users/18963228.html",{loader:()=>y(()=>import("./18963228.html-CdyaVtCT.js"),[]),meta:{title:"CreeperTitan の出群遗言"}}],["/article/lastwords/users/20044753.html",{loader:()=>y(()=>import("./20044753.html-DzeatRrX.js"),[]),meta:{title:"shenzhe 的出群遗言"}}],["/article/lastwords/users/20815409.html",{loader:()=>y(()=>import("./20815409.html-Ca-i3LcA.js"),[]),meta:{title:"BloatedPuffer 的出群遗言"}}],["/article/lastwords/users/21242012.html",{loader:()=>y(()=>import("./21242012.html-D79DJqvf.js"),[]),meta:{title:"zhukongQvQ 的出群遗言"}}],["/article/lastwords/users/21614712.html",{loader:()=>y(()=>import("./21614712.html-M4O33g7z.js"),[]),meta:{title:"SINKA0 的出群遗言"}}],["/article/lastwords/users/21768422.html",{loader:()=>y(()=>import("./21768422.html-BbKo9-6A.js"),[]),meta:{title:"Freddy jsjsjs 的出群遗言"}}],["/article/lastwords/users/21943424.html",{loader:()=>y(()=>import("./21943424.html-Bs1MnUKx.js"),[]),meta:{title:"5441126653 的出群遗言（关于长串）"}}],["/article/lastwords/users/22765044.html",{loader:()=>y(()=>import("./22765044.html-B8F83ROW.js"),[]),meta:{title:"SayaBeMySide 的出群遗言"}}],["/article/lastwords/users/25710736.html",{loader:()=>y(()=>import("./25710736.html-BSxXdiC0.js"),[]),meta:{title:"Llitttefoxy 的出群遗言"}}],["/article/lastwords/users/25767690.html",{loader:()=>y(()=>import("./25767690.html-BgdgL2Ru.js"),[]),meta:{title:"Yoizuki 奶柚的出群遗言"}}],["/article/lastwords/users/26795413.html",{loader:()=>y(()=>import("./26795413.html-C2na7-oQ.js"),[]),meta:{title:"xiaobaidan 的出群遗言"}}],["/article/lastwords/users/27552230.html",{loader:()=>y(()=>import("./27552230.html-CJClE4aJ.js"),[]),meta:{title:"Adversity0721 的出群遗言"}}],["/article/lastwords/users/27608705.html",{loader:()=>y(()=>import("./27608705.html-apUkXpMH.js"),[]),meta:{title:"fufuOwO 的出群遗言"}}],["/article/lastwords/users/27815249.html",{loader:()=>y(()=>import("./27815249.html-zKo8gfBw.js"),[]),meta:{title:"jaaaagan 的出群遗言"}}],["/article/lastwords/users/28287625.html",{loader:()=>y(()=>import("./28287625.html-CN08L4mR.js"),[]),meta:{title:"Slavepig 的出群遗言"}}],["/article/lastwords/users/28388886.html",{loader:()=>y(()=>import("./28388886.html-CZnyHqfK.js"),[]),meta:{title:"yuanxy 的出群遗言"}}],["/article/lastwords/users/28446169.html",{loader:()=>y(()=>import("./28446169.html-Xg8TYLP9.js"),[]),meta:{title:"142qwq 的出群遗言"}}],["/article/lastwords/users/28494479.html",{loader:()=>y(()=>import("./28494479.html-DIf-lIsa.js"),[]),meta:{title:"dongguadongde 的出群遗言"}}],["/article/lastwords/users/28534876.html",{loader:()=>y(()=>import("./28534876.html-DS6AmUZb.js"),[]),meta:{title:"Levels] 的出群遗言"}}],["/article/lastwords/users/29235972.html",{loader:()=>y(()=>import("./29235972.html-Dab5IHjl.js"),[]),meta:{title:"FroZZZZZen 的出群遗言"}}],["/article/lastwords/users/29892932.html",{loader:()=>y(()=>import("./29892932.html-2fgohGW3.js"),[]),meta:{title:"hutaoyv6 的出群遗言Ciallo～(∠・ω"}}],["/article/lastwords/users/30125315.html",{loader:()=>y(()=>import("./30125315.html-BjWj_X4_.js"),[]),meta:{title:"ChengAe 的出群遗言"}}],["/article/lastwords/users/30320667.html",{loader:()=>y(()=>import("./30320667.html-C61dWmPQ.js"),[]),meta:{title:"alone_1324 の出群遗言"}}],["/article/lastwords/users/30512018.html",{loader:()=>y(()=>import("./30512018.html-CkU5ncjr.js"),[]),meta:{title:"Doubi_wert 的出群遗言"}}],["/article/lastwords/users/30526925.html",{loader:()=>y(()=>import("./30526925.html-zvqU0Z08.js"),[]),meta:{title:"Wang_12345 的遗言"}}],["/article/lastwords/users/30595368.html",{loader:()=>y(()=>import("./30595368.html-BI_Tw96r.js"),[]),meta:{title:"Paraliesa 的出群遗言"}}],["/article/lastwords/users/30629671.html",{loader:()=>y(()=>import("./30629671.html-JqpJc8hj.js"),[]),meta:{title:"xX_DeSu_Xx 的出群遗言"}}],["/article/lastwords/users/30654176.html",{loader:()=>y(()=>import("./30654176.html-CPrL0b30.js"),[]),meta:{title:"Asane779 的出群遗言"}}],["/article/lastwords/users/30849263.html",{loader:()=>y(()=>import("./30849263.html-BZ0ogOU-.js"),[]),meta:{title:"xianyuOvO 的出群遗言"}}],["/article/lastwords/users/31100455.html",{loader:()=>y(()=>import("./31100455.html-DEqYKVRW.js"),[]),meta:{title:"NagiSea 的遗言和建议"}}],["/article/lastwords/users/31343852.html",{loader:()=>y(()=>import("./31343852.html-DdVxcMJy.js"),[]),meta:{title:"pollux 的遗言"}}],["/article/lastwords/users/31485633.html",{loader:()=>y(()=>import("./31485633.html-CDa6p-lq.js"),[]),meta:{title:"Aki 的出群遗言"}}],["/article/lastwords/users/31639737.html",{loader:()=>y(()=>import("./31639737.html-e1EloHxl.js"),[]),meta:{title:"Zemta 的出群遗言"}}],["/article/lastwords/users/31918202.html",{loader:()=>y(()=>import("./31918202.html-BqRnZHQ0.js"),[]),meta:{title:"TOPiC_6958 的出群遗言[ヾ(￣▽￣)Bye~Bye~]"}}],["/article/lastwords/users/32039184.html",{loader:()=>y(()=>import("./32039184.html-tB5eeaPP.js"),[]),meta:{title:"nanoic 的osu遗言"}}],["/article/lastwords/users/32067163.html",{loader:()=>y(()=>import("./32067163.html-1BP9ukc-.js"),[]),meta:{title:"nnmnnmnnm 的出群遗言"}}],["/article/lastwords/users/32145451.html",{loader:()=>y(()=>import("./32145451.html-Ctjfl4Cl.js"),[]),meta:{title:"OrangeWybel 的出群遗言"}}],["/article/lastwords/users/32228798.html",{loader:()=>y(()=>import("./32228798.html-_4Ppe8iL.js"),[]),meta:{title:"Gua_Zi 的出群遗言"}}],["/article/lastwords/users/32270642.html",{loader:()=>y(()=>import("./32270642.html-BgOHBzR8.js"),[]),meta:{title:"Dragon_Rhyme 的出群遗言"}}],["/article/lastwords/users/32303406.html",{loader:()=>y(()=>import("./32303406.html-CZrNHktI.js"),[]),meta:{title:"ASTARTE7 的新人群出群遗言"}}],["/article/lastwords/users/32396623.html",{loader:()=>y(()=>import("./32396623.html-CZu6u0J7.js"),[]),meta:{title:"daring tact 的出群遗言"}}],["/article/lastwords/users/32452774.html",{loader:()=>y(()=>import("./32452774.html-CICqpK-R.js"),[]),meta:{title:"Nana Sakura 个人成长历程"}}],["/article/lastwords/users/32642875.html",{loader:()=>y(()=>import("./32642875.html-oWMyhuwO.js"),[]),meta:{title:"xAimyonx 的出群遗言"}}],["/article/lastwords/users/32661925.html",{loader:()=>y(()=>import("./32661925.html-B70vBzs3.js"),[]),meta:{title:"kami_i 的出群遗言"}}],["/article/lastwords/users/32743500.html",{loader:()=>y(()=>import("./32743500.html-Bglm_H3a.js"),[]),meta:{title:"Styroporrr 的出群遗言"}}],["/article/lastwords/users/32975448.html",{loader:()=>y(()=>import("./32975448.html-CvFS4Rol.js"),[]),meta:{title:"[ Lithromanti ] の出群遗言"}}],["/article/lastwords/users/33090766.html",{loader:()=>y(()=>import("./33090766.html-C87Vpknz.js"),[]),meta:{title:"xiangkongx 的osu历程"}}],["/article/lastwords/users/33091136.html",{loader:()=>y(()=>import("./33091136.html-BqnSTEC_.js"),[]),meta:{title:"MengLiYL 的出群遗言"}}],["/article/lastwords/users/33122153.html",{loader:()=>y(()=>import("./33122153.html-DcD-J1WX.js"),[]),meta:{title:"hobbit1468 的出群遗言-被逐出群什么的，那种事情不要啊"}}],["/article/lastwords/users/33319591.html",{loader:()=>y(()=>import("./33319591.html-RjTk_30y.js"),[]),meta:{title:"Athenatenno 的遗言"}}],["/article/lastwords/users/33367606.html",{loader:()=>y(()=>import("./33367606.html-BDpuk-8N.js"),[]),meta:{title:"keycurse 的出群遗言"}}],["/article/lastwords/users/33463029.html",{loader:()=>y(()=>import("./33463029.html-B9X5FpI3.js"),[]),meta:{title:"_AnZai_KoKoRo_(- Inui JaHuLi -)出群遗言"}}],["/article/lastwords/users/33595598.html",{loader:()=>y(()=>import("./33595598.html-STDGytvn.js"),[]),meta:{title:"FireBanana 的出群遗言"}}],["/article/lastwords/users/33719256.html",{loader:()=>y(()=>import("./33719256.html-UMQYhWD6.js"),[]),meta:{title:"mimzhu 的出群遗言qwq"}}],["/article/lastwords/users/33794305.html",{loader:()=>y(()=>import("./33794305.html-DQbPRibI.js"),[]),meta:{title:"Tusk1527 的出群留言（铁男!没想到吧！）"}}],["/article/lastwords/users/33823564.html",{loader:()=>y(()=>import("./33823564.html-Dk0Ge4X9.js"),[]),meta:{title:"2ky girl 的出群遗言"}}],["/article/lastwords/users/33879454.html",{loader:()=>y(()=>import("./33879454.html-C3ensZTv.js"),[]),meta:{title:"Star_tsuki 的出群遗言"}}],["/article/lastwords/users/33887163.html",{loader:()=>y(()=>import("./33887163.html-wIrwuLf3.js"),[]),meta:{title:"kitakore 的出群遗言"}}],["/article/lastwords/users/33888415.html",{loader:()=>y(()=>import("./33888415.html-DR5D4Q0G.js"),[]),meta:{title:"akballoon 出群遗言"}}],["/article/lastwords/users/33918873.html",{loader:()=>y(()=>import("./33918873.html-B926VHdn.js"),[]),meta:{title:"0Midas0 的出群留言"}}],["/article/lastwords/users/34210302.html",{loader:()=>y(()=>import("./34210302.html-D_o1oGQ2.js"),[]),meta:{title:"Rurino 的出群遗言"}}],["/article/lastwords/users/34230148.html",{loader:()=>y(()=>import("./34230148.html-CYzc3iwx.js"),[]),meta:{title:"【键鼠dt与跳批】Fiveawa 的新人群出群遗言"}}],["/article/lastwords/users/34345823.html",{loader:()=>y(()=>import("./34345823.html-HMd8gqKe.js"),[]),meta:{title:"Baiqiu 的出群遗言"}}],["/article/lastwords/users/34346018.html",{loader:()=>y(()=>import("./34346018.html-C_kV6La4.js"),[]),meta:{title:"AlphaRaWaY 出群遗言（会有人看吗）"}}],["/article/lastwords/users/34443419.html",{loader:()=>y(()=>import("./34443419.html-DHZcWnTh.js"),[]),meta:{title:"yoasobiai 遗言口牙"}}],["/article/lastwords/users/34556002.html",{loader:()=>y(()=>import("./34556002.html-DEeG0Vkw.js"),[]),meta:{title:"VickVo 的出群遗言"}}],["/article/lastwords/users/34844529.html",{loader:()=>y(()=>import("./34844529.html-BkM___Sp.js"),[]),meta:{title:"丘比(FFrra) 的出群遗言"}}],["/article/lastwords/users/34907673.html",{loader:()=>y(()=>import("./34907673.html-cwENXG9E.js"),[]),meta:{title:"gangkun1414 的出群遗言"}}],["/article/lastwords/users/34995831.html",{loader:()=>y(()=>import("./34995831.html-Bh296cWb.js"),[]),meta:{title:"Sgt_Fantasy 的出群遗言"}}],["/article/lastwords/users/34998676.html",{loader:()=>y(()=>import("./34998676.html-CGGh_0Ef.js"),[]),meta:{title:"AsukiCko の出群遗言"}}],["/article/lastwords/users/35288237.html",{loader:()=>y(()=>import("./35288237.html-DHmtPSdA.js"),[]),meta:{title:"cedric1102 遗言"}}],["/article/lastwords/users/35529699.html",{loader:()=>y(()=>import("./35529699.html-D5Tc_Or3.js"),[]),meta:{title:"hx123yx 的出群遗言"}}],["/article/lastwords/users/35551133.html",{loader:()=>y(()=>import("./35551133.html-Ch45SPNZ.js"),[]),meta:{title:"wdz 王大志的出群遗言"}}],["/article/lastwords/users/35672191.html",{loader:()=>y(()=>import("./35672191.html-HmFSaUSD.js"),[]),meta:{title:"InSnh-Gd 的出群遗言"}}],["/article/lastwords/users/35677457.html",{loader:()=>y(()=>import("./35677457.html-CYflIa3I.js"),[]),meta:{title:"Mintyowo 的出群遗言"}}],["/article/lastwords/users/35683344.html",{loader:()=>y(()=>import("./35683344.html-6SSfFTkl.js"),[]),meta:{title:"Gumiaora 的出群遗言"}}],["/article/lastwords/users/35717411.html",{loader:()=>y(()=>import("./35717411.html-C_oo68qK.js"),[]),meta:{title:"LmX-Gamer 的出群遗言"}}],["/article/lastwords/users/35744851.html",{loader:()=>y(()=>import("./35744851.html-kTaDUfEl.js"),[]),meta:{title:"Syzygy5593 的出群遗言"}}],["/article/lastwords/users/35750067.html",{loader:()=>y(()=>import("./35750067.html-BSM-zGBo.js"),[]),meta:{title:"qqmx_x の被驱逐遗言"}}],["/article/lastwords/users/35902892.html",{loader:()=>y(()=>import("./35902892.html-B66crcmE.js"),[]),meta:{title:"QiQuang 的出群遗言"}}],["/article/lastwords/users/35938964.html",{loader:()=>y(()=>import("./35938964.html-BF_86Mgw.js"),[]),meta:{title:"BloodEngine 的出群遗言"}}],["/article/lastwords/users/36062235.html",{loader:()=>y(()=>import("./36062235.html-1yUEBZQu.js"),[]),meta:{title:"21awa12 的遗言以及推图"}}],["/article/lastwords/users/36097722.html",{loader:()=>y(()=>import("./36097722.html-Cv1y3GlO.js"),[]),meta:{title:"rainbow03 的出群遗言"}}],["/article/lastwords/users/36127474.html",{loader:()=>y(()=>import("./36127474.html-DY_AydjN.js"),[]),meta:{title:"SeeleBronya 的出群遗言"}}],["/article/lastwords/users/36155893.html",{loader:()=>y(()=>import("./36155893.html-CgDmCX85.js"),[]),meta:{title:"adxeo 的出群遗言（aqmm 修订版）"}}],["/article/lastwords/users/36273312.html",{loader:()=>y(()=>import("./36273312.html-DXylNL1m.js"),[]),meta:{title:"N0Where_ 的出群遗言"}}],["/article/lastwords/users/36310606.html",{loader:()=>y(()=>import("./36310606.html-cWn0sBgU.js"),[]),meta:{title:"Mouse_Fish 的出群遗言"}}],["/article/lastwords/users/36409902.html",{loader:()=>y(()=>import("./36409902.html-DRArl0gK.js"),[]),meta:{title:"Chiyarara 的遗言(妹妹图推荐(bushi"}}],["/article/lastwords/users/36547413.html",{loader:()=>y(()=>import("./36547413.html-CfBVl-5S.js"),[]),meta:{title:"evil_01的出群遗言"}}],["/article/lastwords/users/36838632.html",{loader:()=>y(()=>import("./36838632.html-CMmnK9yW.js"),[]),meta:{title:"IYTYY 的出群遗言"}}],["/article/lastwords/users/36846545.html",{loader:()=>y(()=>import("./36846545.html-DcWtRFK9.js"),[]),meta:{title:"Awathon 的出群遗言"}}],["/article/lastwords/users/36941954.html",{loader:()=>y(()=>import("./36941954.html-DPCcUqwZ.js"),[]),meta:{title:"m1saka_mikoto 的出群遗言"}}],["/article/lastwords/users/37418919.html",{loader:()=>y(()=>import("./37418919.html-BZuP7OI7.js"),[]),meta:{title:"jiaofeng 的新人群遗言"}}],["/article/lastwords/users/37449856.html",{loader:()=>y(()=>import("./37449856.html-C7Sr9hT_.js"),[]),meta:{title:"autp 的遗言"}}],["/article/lastwords/users/37963548.html",{loader:()=>y(()=>import("./37963548.html-CrEg0tku.js"),[]),meta:{title:"MyAngelNahida 的遗言"}}],["/article/lastwords/users/37974276.html",{loader:()=>y(()=>import("./37974276.html-BiTbq7rc.js"),[]),meta:{title:"DR1zyt的出群遗言"}}],["/article/lastwords/users/38021034.html",{loader:()=>y(()=>import("./38021034.html-DUmuYpOZ.js"),[]),meta:{title:"Arika-suisui 的出群遗言 qwq 喵"}}],["/article/lastwords/users/38737489.html",{loader:()=>y(()=>import("./38737489.html-DaXKWW8f.js"),[]),meta:{title:"XiaFeng 的出群遗言"}}],["/article/lastwords/users/39005598.html",{loader:()=>y(()=>import("./39005598.html-BWuvz6RM.js"),[]),meta:{title:"Twink1ingStars 的出群遗言"}}],["/article/lastwords/users/39145159.html",{loader:()=>y(()=>import("./39145159.html-jnaWKobR.js"),[]),meta:{title:"Jiujiu147963 的出群遗言"}}],["/article/lastwords/users/39491039.html",{loader:()=>y(()=>import("./39491039.html-BV8MLF0c.js"),[]),meta:{title:"flowboat 的出群遗言"}}],["/article/lastwords/users/40406578.html",{loader:()=>y(()=>import("./40406578.html-BU1oscHo.js"),[]),meta:{title:"VenusPaques 的出群遗言"}}],["/article/lastwords/users/40414685.html",{loader:()=>y(()=>import("./40414685.html-Dq97YLjE.js"),[]),meta:{title:"carl0tta33 遗言"}}],["/article/lastwords/users/4283631.html",{loader:()=>y(()=>import("./4283631.html-CeE1OBeF.js"),[]),meta:{title:"r3milia 的出群遗言"}}],["/article/lastwords/users/5162173.html",{loader:()=>y(()=>import("./5162173.html-Cm2T9iJc.js"),[]),meta:{title:"BenPhantom 的出群遗言"}}],["/article/lastwords/users/6071538.html",{loader:()=>y(()=>import("./6071538.html-CZUwsKQo.js"),[]),meta:{title:"Loyisa 的出群遗言"}}],["/article/lastwords/users/6569959.html",{loader:()=>y(()=>import("./6569959.html-B8cqPJM6.js"),[]),meta:{title:"Himitsu 的遗言"}}],["/article/lastwords/users/6796076.html",{loader:()=>y(()=>import("./6796076.html-B33_8aoV.js"),[]),meta:{title:"Capgras 的出群遗言"}}],["/article/lastwords/users/7851625.html",{loader:()=>y(()=>import("./7851625.html-jaYfDFVl.js"),[]),meta:{title:"subaru322 的出群遗言"}}],["/article/lastwords/users/802382.html",{loader:()=>y(()=>import("./802382.html-DI1LXZlH.js"),[]),meta:{title:"aboluo7 遗言后附彩蛋"}}],["/article/lastwords/users/8457316.html",{loader:()=>y(()=>import("./8457316.html-BeyBEIER.js"),[]),meta:{title:"My Dreaest 的出群遗言"}}],["/article/lastwords/users/8665750.html",{loader:()=>y(()=>import("./8665750.html-Brl5hOoc.js"),[]),meta:{title:"Delta34301370 的出群遗言"}}],["/article/lastwords/users/9650376.html",{loader:()=>y(()=>import("./9650376.html-fiJE1N8s.js"),[]),meta:{title:"Touma-w- 套马的出群遗言"}}],["/404.html",{loader:()=>y(()=>import("./404.html-B1_BeZkp.js"),[]),meta:{title:""}}]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ka=typeof document<"u";function Ic(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Ip(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Ic(n.default)}const xn=Object.assign;function lr(n,e){const a={};for(const t in e){const i=e[t];a[t]=Me(i)?i.map(n):n(i)}return a}const gt=()=>{},Me=Array.isArray;function co(n,e){const a={};for(const t in n)a[t]=t in e?e[t]:n[t];return a}const Mc=/#/g,Mp=/&/g,Cp=/\//g,Pp=/=/g,Op=/\?/g,Cc=/\+/g,Rp=/%5B/g,Np=/%5D/g,Pc=/%5E/g,Dp=/%60/g,Oc=/%7B/g,Lp=/%7C/g,Rc=/%7D/g,Hp=/%20/g;function qr(n){return n==null?"":encodeURI(""+n).replace(Lp,"|").replace(Rp,"[").replace(Np,"]")}function Fp(n){return qr(n).replace(Oc,"{").replace(Rc,"}").replace(Pc,"^")}function Ir(n){return qr(n).replace(Cc,"%2B").replace(Hp,"+").replace(Mc,"%23").replace(Mp,"%26").replace(Dp,"`").replace(Oc,"{").replace(Rc,"}").replace(Pc,"^")}function Vp(n){return Ir(n).replace(Pp,"%3D")}function Kp(n){return qr(n).replace(Mc,"%23").replace(Op,"%3F")}function zp(n){return Kp(n).replace(Cp,"%2F")}function Tt(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const jp=/\/$/,Yp=n=>n.replace(jp,"");function cr(n,e,a="/"){let t,i={},r="",s="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(t=e.slice(0,l),r=e.slice(l,o>0?o:e.length),i=n(r.slice(1))),o>=0&&(t=t||e.slice(0,o),s=e.slice(o,e.length)),t=$p(t??e,a),{fullPath:t+r+s,path:t,query:i,hash:Tt(s)}}function Up(n,e){const a=e.query?n(e.query):"";return e.path+(a&&"?")+a+(e.hash||"")}function uo(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Gp(n,e,a){const t=e.matched.length-1,i=a.matched.length-1;return t>-1&&t===i&&nt(e.matched[t],a.matched[i])&&Nc(e.params,a.params)&&n(e.query)===n(a.query)&&e.hash===a.hash}function nt(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Nc(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var a in n)if(!Wp(n[a],e[a]))return!1;return!0}function Wp(n,e){return Me(n)?mo(n,e):Me(e)?mo(e,n):n?.valueOf()===e?.valueOf()}function mo(n,e){return Me(e)?n.length===e.length&&n.every((a,t)=>a===e[t]):n.length===1&&n[0]===e}function $p(n,e){if(n.startsWith("/"))return n;if(!n)return e;const a=e.split("/"),t=n.split("/"),i=t[t.length-1];(i===".."||i===".")&&t.push("");let r=a.length-1,s,o;for(s=0;s<t.length;s++)if(o=t[s],o!==".")if(o==="..")r>1&&r--;else break;return a.slice(0,r).join("/")+"/"+t.slice(s).join("/")}const je={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Mr=(function(n){return n.pop="pop",n.push="push",n})({}),ur=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function Jp(n){if(!n)if(Ka){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Yp(n)}const Xp=/^[^#]+#/;function Zp(n,e){return n.replace(Xp,"#")+e}function qp(n,e){const a=document.documentElement.getBoundingClientRect(),t=n.getBoundingClientRect();return{behavior:e.behavior,left:t.left-a.left-(e.left||0),top:t.top-a.top-(e.top||0)}}const zi=()=>({left:window.scrollX,top:window.scrollY});function Qp(n){let e;if("el"in n){const a=n.el,t=typeof a=="string"&&a.startsWith("#"),i=typeof a=="string"?t?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!i)return;e=qp(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function po(n,e){return(history.state?history.state.position-e:-1)+n}const Cr=new Map;function n1(n,e){Cr.set(n,e)}function e1(n){const e=Cr.get(n);return Cr.delete(n),e}function a1(n){return typeof n=="string"||n&&typeof n=="object"}function Dc(n){return typeof n=="string"||typeof n=="symbol"}let Fn=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const Lc=Symbol("");Fn.MATCHER_NOT_FOUND+"",Fn.NAVIGATION_GUARD_REDIRECT+"",Fn.NAVIGATION_ABORTED+"",Fn.NAVIGATION_CANCELLED+"",Fn.NAVIGATION_DUPLICATED+"";function et(n,e){return xn(new Error,{type:n,[Lc]:!0},e)}function Ke(n,e){return n instanceof Error&&Lc in n&&(e==null||!!(n.type&e))}const t1=["params","query","hash"];function i1(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const a of t1)a in n&&(e[a]=n[a]);return JSON.stringify(e,null,2)}function r1(n){const e={};if(n===""||n==="?")return e;const a=(n[0]==="?"?n.slice(1):n).split("&");for(let t=0;t<a.length;++t){const i=a[t].replace(Cc," "),r=i.indexOf("="),s=Tt(r<0?i:i.slice(0,r)),o=r<0?null:Tt(i.slice(r+1));if(s in e){let l=e[s];Me(l)||(l=e[s]=[l]),l.push(o)}else e[s]=o}return e}function fo(n){let e="";for(let a in n){const t=n[a];if(a=Vp(a),t==null){t!==void 0&&(e+=(e.length?"&":"")+a);continue}(Me(t)?t.map(i=>i&&Ir(i)):[t&&Ir(t)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+a,i!=null&&(e+="="+i))})}return e}function s1(n){const e={};for(const a in n){const t=n[a];t!==void 0&&(e[a]=Me(t)?t.map(i=>i==null?null:""+i):t==null?t:""+t)}return e}const o1=Symbol(""),ho=Symbol(""),ji=Symbol(""),Qr=Symbol(""),Pr=Symbol("");function dt(){let n=[];function e(t){return n.push(t),()=>{const i=n.indexOf(t);i>-1&&n.splice(i,1)}}function a(){n=[]}return{add:e,list:()=>n.slice(),reset:a}}function sa(n,e,a,t,i,r=s=>s()){const s=t&&(t.enterCallbacks[i]=t.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const u=m=>{m===!1?l(et(Fn.NAVIGATION_ABORTED,{from:a,to:e})):m instanceof Error?l(m):a1(m)?l(et(Fn.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(s&&t.enterCallbacks[i]===s&&typeof m=="function"&&s.push(m),o())},c=r(()=>n.call(t&&t.instances[i],e,a,u));let d=Promise.resolve(c);n.length<3&&(d=d.then(u)),d.catch(m=>l(m))})}function dr(n,e,a,t,i=r=>r()){const r=[];for(const s of n)for(const o in s.components){let l=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Ic(l)){const u=(l.__vccOpts||l)[e];u&&r.push(sa(u,a,t,s,o,i))}else{let u=l();r.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${o}" at "${s.path}"`);const d=Ip(c)?c.default:c;s.mods[o]=c,s.components[o]=d;const m=(d.__vccOpts||d)[e];return m&&sa(m,a,t,s,o,i)()}))}}return r}function l1(n,e){const a=[],t=[],i=[],r=Math.max(e.matched.length,n.matched.length);for(let s=0;s<r;s++){const o=e.matched[s];o&&(n.matched.find(u=>nt(u,o))?t.push(o):a.push(o));const l=n.matched[s];l&&(e.matched.find(u=>nt(u,l))||i.push(l))}return[a,t,i]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let c1=()=>location.protocol+"//"+location.host;function Hc(n,e){const{pathname:a,search:t,hash:i}=e,r=n.indexOf("#");if(r>-1){let s=i.includes(n.slice(r))?n.slice(r).length:1,o=i.slice(s);return o[0]!=="/"&&(o="/"+o),uo(o,"")}return uo(a,n)+t+i}function u1(n,e,a,t){let i=[],r=[],s=null;const o=({state:m})=>{const p=Hc(n,location),w=a.value,h=e.value;let g=0;if(m){if(a.value=p,e.value=m,s&&s===w){s=null;return}g=h?m.position-h.position:0}else t(p);i.forEach(_=>{_(a.value,w,{delta:g,type:Mr.pop,direction:g?g>0?ur.forward:ur.back:ur.unknown})})};function l(){s=a.value}function u(m){i.push(m);const p=()=>{const w=i.indexOf(m);w>-1&&i.splice(w,1)};return r.push(p),p}function c(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(xn({},m.state,{scroll:zi()}),"")}}function d(){for(const m of r)m();r=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:d}}function vo(n,e,a,t=!1,i=!1){return{back:n,current:e,forward:a,replaced:t,position:window.history.length,scroll:i?zi():null}}function d1(n){const{history:e,location:a}=window,t={value:Hc(n,a)},i={value:e.state};i.value||r(t.value,{back:null,current:t.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,u,c){const d=n.indexOf("#"),m=d>-1?(a.host&&document.querySelector("base")?n:n.slice(d))+l:c1()+n+l;try{e[c?"replaceState":"pushState"](u,"",m),i.value=u}catch(p){console.error(p),a[c?"replace":"assign"](m)}}function s(l,u){r(l,xn({},e.state,vo(i.value.back,l,i.value.forward,!0),u,{position:i.value.position}),!0),t.value=l}function o(l,u){const c=xn({},i.value,e.state,{forward:l,scroll:zi()});r(c.current,c,!0),r(l,xn({},vo(t.value,l,null),{position:c.position+1},u),!1),t.value=l}return{location:t,state:i,push:o,replace:s}}function m1(n){n=Jp(n);const e=d1(n),a=u1(n,e.state,e.location,e.replace);function t(r,s=!0){s||a.pauseListeners(),history.go(r)}const i=xn({location:"",base:n,go:t,createHref:Zp.bind(null,n)},e,a);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}let xa=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var Gn=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(Gn||{});const p1={type:xa.Static,value:""},f1=/[a-zA-Z0-9_]/;function h1(n){if(!n)return[[]];if(n==="/")return[[p1]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${a})/"${u}": ${p}`)}let a=Gn.Static,t=a;const i=[];let r;function s(){r&&i.push(r),r=[]}let o=0,l,u="",c="";function d(){u&&(a===Gn.Static?r.push({type:xa.Static,value:u}):a===Gn.Param||a===Gn.ParamRegExp||a===Gn.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:xa.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&a!==Gn.ParamRegExp){t=a,a=Gn.EscapeNext;continue}switch(a){case Gn.Static:l==="/"?(u&&d(),s()):l===":"?(d(),a=Gn.Param):m();break;case Gn.EscapeNext:m(),a=t;break;case Gn.Param:l==="("?a=Gn.ParamRegExp:f1.test(l)?m():(d(),a=Gn.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Gn.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:a=Gn.ParamRegExpEnd:c+=l;break;case Gn.ParamRegExpEnd:d(),a=Gn.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,c="";break;default:e("Unknown state");break}}return a===Gn.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),d(),s(),i}const bo="[^/]+?",v1={sensitive:!1,strict:!1,start:!0,end:!0};var oe=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(oe||{});const b1=/[.+*?^${}()[\]/\\]/g;function g1(n,e){const a=xn({},v1,e),t=[];let i=a.start?"^":"";const r=[];for(const u of n){const c=u.length?[]:[oe.Root];a.strict&&!u.length&&(i+="/");for(let d=0;d<u.length;d++){const m=u[d];let p=oe.Segment+(a.sensitive?oe.BonusCaseSensitive:0);if(m.type===xa.Static)d||(i+="/"),i+=m.value.replace(b1,"\\$&"),p+=oe.Static;else if(m.type===xa.Param){const{value:w,repeatable:h,optional:g,regexp:_}=m;r.push({name:w,repeatable:h,optional:g});const S=_||bo;if(S!==bo){p+=oe.BonusCustomRegExp;try{`${S}`}catch(k){throw new Error(`Invalid custom RegExp for param "${w}" (${S}): `+k.message)}}let v=h?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(v=g&&u.length<2?`(?:/${v})`:"/"+v),g&&(v+="?"),i+=v,p+=oe.Dynamic,g&&(p+=oe.BonusOptional),h&&(p+=oe.BonusRepeatable),S===".*"&&(p+=oe.BonusWildcard)}c.push(p)}t.push(c)}if(a.strict&&a.end){const u=t.length-1;t[u][t[u].length-1]+=oe.BonusStrict}a.strict||(i+="/?"),a.end?i+="$":a.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const s=new RegExp(i,a.sensitive?"":"i");function o(u){const c=u.match(s),d={};if(!c)return null;for(let m=1;m<c.length;m++){const p=c[m]||"",w=r[m-1];d[w.name]=p&&w.repeatable?p.split("/"):p}return d}function l(u){let c="",d=!1;for(const m of n){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const p of m)if(p.type===xa.Static)c+=p.value;else if(p.type===xa.Param){const{value:w,repeatable:h,optional:g}=p,_=w in u?u[w]:"";if(Me(_)&&!h)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const S=Me(_)?_.join("/"):_;if(!S)if(g)m.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);c+=S}}return c||"/"}return{re:s,score:t,keys:r,parse:o,stringify:l}}function y1(n,e){let a=0;for(;a<n.length&&a<e.length;){const t=e[a]-n[a];if(t)return t;a++}return n.length<e.length?n.length===1&&n[0]===oe.Static+oe.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===oe.Static+oe.Segment?1:-1:0}function Fc(n,e){let a=0;const t=n.score,i=e.score;for(;a<t.length&&a<i.length;){const r=y1(t[a],i[a]);if(r)return r;a++}if(Math.abs(i.length-t.length)===1){if(go(t))return 1;if(go(i))return-1}return i.length-t.length}function go(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const w1={strict:!1,end:!0,sensitive:!1};function _1(n,e,a){const t=g1(h1(n.path),a),i=xn(t,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function S1(n,e){const a=[],t=new Map;e=co(w1,e);function i(d){return t.get(d)}function r(d,m,p){const w=!p,h=wo(d);h.aliasOf=p&&p.record;const g=co(e,d),_=[h];if("alias"in d){const k=typeof d.alias=="string"?[d.alias]:d.alias;for(const I of k)_.push(wo(xn({},h,{components:p?p.record.components:h.components,path:I,aliasOf:p?p.record:h})))}let S,v;for(const k of _){const{path:I}=k;if(m&&I[0]!=="/"){const z=m.record.path,C=z[z.length-1]==="/"?"":"/";k.path=m.record.path+(I&&C+I)}if(S=_1(k,m,g),p?p.alias.push(S):(v=v||S,v!==S&&v.alias.push(S),w&&d.name&&!_o(S)&&s(d.name)),Vc(S)&&l(S),h.children){const z=h.children;for(let C=0;C<z.length;C++)r(z[C],S,p&&p.children[C])}p=p||S}return v?()=>{s(v)}:gt}function s(d){if(Dc(d)){const m=t.get(d);m&&(t.delete(d),a.splice(a.indexOf(m),1),m.children.forEach(s),m.alias.forEach(s))}else{const m=a.indexOf(d);m>-1&&(a.splice(m,1),d.record.name&&t.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function o(){return a}function l(d){const m=B1(d,a);a.splice(m,0,d),d.record.name&&!_o(d)&&t.set(d.record.name,d)}function u(d,m){let p,w={},h,g;if("name"in d&&d.name){if(p=t.get(d.name),!p)throw et(Fn.MATCHER_NOT_FOUND,{location:d});g=p.record.name,w=xn(yo(m.params,p.keys.filter(v=>!v.optional).concat(p.parent?p.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),d.params&&yo(d.params,p.keys.map(v=>v.name))),h=p.stringify(w)}else if(d.path!=null)h=d.path,p=a.find(v=>v.re.test(h)),p&&(w=p.parse(h),g=p.record.name);else{if(p=m.name?t.get(m.name):a.find(v=>v.re.test(m.path)),!p)throw et(Fn.MATCHER_NOT_FOUND,{location:d,currentLocation:m});g=p.record.name,w=xn({},m.params,d.params),h=p.stringify(w)}const _=[];let S=p;for(;S;)_.unshift(S.record),S=S.parent;return{name:g,path:h,params:w,matched:_,meta:x1(_)}}n.forEach(d=>r(d));function c(){a.length=0,t.clear()}return{addRoute:r,resolve:u,removeRoute:s,clearRoutes:c,getRoutes:o,getRecordMatcher:i}}function yo(n,e){const a={};for(const t of e)t in n&&(a[t]=n[t]);return a}function wo(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:k1(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function k1(n){const e={},a=n.props||!1;if("component"in n)e.default=a;else for(const t in n.components)e[t]=typeof a=="object"?a[t]:a;return e}function _o(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function x1(n){return n.reduce((e,a)=>xn(e,a.meta),{})}function B1(n,e){let a=0,t=e.length;for(;a!==t;){const r=a+t>>1;Fc(n,e[r])<0?t=r:a=r+1}const i=A1(n);return i&&(t=e.lastIndexOf(i,t-1)),t}function A1(n){let e=n;for(;e=e.parent;)if(Vc(e)&&Fc(n,e)===0)return e}function Vc({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function So(n){const e=ee(ji),a=ee(Qr),t=B(()=>{const l=sn(n.to);return e.resolve(l)}),i=B(()=>{const{matched:l}=t.value,{length:u}=l,c=l[u-1],d=a.matched;if(!c||!d.length)return-1;const m=d.findIndex(nt.bind(null,c));if(m>-1)return m;const p=ko(l[u-2]);return u>1&&ko(c)===p&&d[d.length-1].path!==p?d.findIndex(nt.bind(null,l[u-2])):m}),r=B(()=>i.value>-1&&C1(a.params,t.value.params)),s=B(()=>i.value>-1&&i.value===a.matched.length-1&&Nc(a.params,t.value.params));function o(l={}){if(M1(l)){const u=e[sn(n.replace)?"replace":"push"](sn(n.to)).catch(gt);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:t,href:B(()=>t.value.href),isActive:r,isExactActive:s,navigate:o}}function E1(n){return n.length===1?n[0]:n}const T1=yn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:So,setup(n,{slots:e}){const a=ua(So(n)),{options:t}=ee(ji),i=B(()=>({[xo(n.activeClass,t.linkActiveClass,"router-link-active")]:a.isActive,[xo(n.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const r=e.default&&E1(e.default(a));return n.custom?r:rn("a",{"aria-current":a.isExactActive?n.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:i.value},r)}}}),I1=T1;function M1(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function C1(n,e){for(const a in e){const t=e[a],i=n[a];if(typeof t=="string"){if(t!==i)return!1}else if(!Me(i)||i.length!==t.length||t.some((r,s)=>r.valueOf()!==i[s].valueOf()))return!1}return!0}function ko(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const xo=(n,e,a)=>n??e??a,P1=yn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:a}){const t=ee(Pr),i=B(()=>n.route||t.value),r=ee(ho,0),s=B(()=>{let u=sn(r);const{matched:c}=i.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),o=B(()=>i.value.matched[s.value]);la(ho,B(()=>s.value+1)),la(o1,o),la(Pr,i);const l=vn();return Vn(()=>[l.value,o.value,n.name],([u,c,d],[m,p,w])=>{c&&(c.instances[d]=u,p&&p!==c&&u&&u===m&&(c.leaveGuards.size||(c.leaveGuards=p.leaveGuards),c.updateGuards.size||(c.updateGuards=p.updateGuards))),u&&c&&(!p||!nt(c,p)||!m)&&(c.enterCallbacks[d]||[]).forEach(h=>h(u))},{flush:"post"}),()=>{const u=i.value,c=n.name,d=o.value,m=d&&d.components[c];if(!m)return Bo(a.default,{Component:m,route:u});const p=d.props[c],w=p?p===!0?u.params:typeof p=="function"?p(u):p:null,g=rn(m,xn({},w,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return Bo(a.default,{Component:g,route:u})||g}}});function Bo(n,e){if(!n)return null;const a=n(e);return a.length===1?a[0]:a}const O1=P1;function R1(n){const e=S1(n.routes,n),a=n.parseQuery||r1,t=n.stringifyQuery||fo,i=n.history,r=dt(),s=dt(),o=dt(),l=Dn(je);let u=je;Ka&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=lr.bind(null,K=>""+K),d=lr.bind(null,zp),m=lr.bind(null,Tt);function p(K,an){let nn,on;return Dc(K)?(nn=e.getRecordMatcher(K),on=an):on=K,e.addRoute(on,nn)}function w(K){const an=e.getRecordMatcher(K);an&&e.removeRoute(an)}function h(){return e.getRoutes().map(K=>K.record)}function g(K){return!!e.getRecordMatcher(K)}function _(K,an){if(an=xn({},an||l.value),typeof K=="string"){const b=cr(a,K,an.path),E=e.resolve({path:b.path},an),U=i.createHref(b.fullPath);return xn(b,E,{params:m(E.params),hash:Tt(b.hash),redirectedFrom:void 0,href:U})}let nn;if(K.path!=null)nn=xn({},K,{path:cr(a,K.path,an.path).path});else{const b=xn({},K.params);for(const E in b)b[E]==null&&delete b[E];nn=xn({},K,{params:d(b)}),an.params=d(an.params)}const on=e.resolve(nn,an),bn=K.hash||"";on.params=c(m(on.params));const Tn=Up(t,xn({},K,{hash:Fp(bn),path:on.path})),f=i.createHref(Tn);return xn({fullPath:Tn,hash:bn,query:t===fo?s1(K.query):K.query||{}},on,{redirectedFrom:void 0,href:f})}function S(K){return typeof K=="string"?cr(a,K,l.value.path):xn({},K)}function v(K,an){if(u!==K)return et(Fn.NAVIGATION_CANCELLED,{from:an,to:K})}function k(K){return C(K)}function I(K){return k(xn(S(K),{replace:!0}))}function z(K,an){const nn=K.matched[K.matched.length-1];if(nn&&nn.redirect){const{redirect:on}=nn;let bn=typeof on=="function"?on(K,an):on;return typeof bn=="string"&&(bn=bn.includes("?")||bn.includes("#")?bn=S(bn):{path:bn},bn.params={}),xn({query:K.query,hash:K.hash,params:bn.path!=null?{}:K.params},bn)}}function C(K,an){const nn=u=_(K),on=l.value,bn=K.state,Tn=K.force,f=K.replace===!0,b=z(nn,on);if(b)return C(xn(S(b),{state:typeof b=="object"?xn({},bn,b.state):bn,force:Tn,replace:f}),an||nn);const E=nn;E.redirectedFrom=an;let U;return!Tn&&Gp(t,on,nn)&&(U=et(Fn.NAVIGATION_DUPLICATED,{to:E,from:on}),Z(on,on,!0,!1)),(U?Promise.resolve(U):R(E,on)).catch(L=>Ke(L)?Ke(L,Fn.NAVIGATION_GUARD_REDIRECT)?L:H(L):V(L,E,on)).then(L=>{if(L){if(Ke(L,Fn.NAVIGATION_GUARD_REDIRECT))return C(xn({replace:f},S(L.to),{state:typeof L.to=="object"?xn({},bn,L.to.state):bn,force:Tn}),an||E)}else L=x(E,on,!0,f,bn);return D(E,on,L),L})}function A(K,an){const nn=v(K,an);return nn?Promise.reject(nn):Promise.resolve()}function M(K){const an=Jn.values().next().value;return an&&typeof an.runWithContext=="function"?an.runWithContext(K):K()}function R(K,an){let nn;const[on,bn,Tn]=l1(K,an);nn=dr(on.reverse(),"beforeRouteLeave",K,an);for(const b of on)b.leaveGuards.forEach(E=>{nn.push(sa(E,K,an))});const f=A.bind(null,K,an);return nn.push(f),ue(nn).then(()=>{nn=[];for(const b of r.list())nn.push(sa(b,K,an));return nn.push(f),ue(nn)}).then(()=>{nn=dr(bn,"beforeRouteUpdate",K,an);for(const b of bn)b.updateGuards.forEach(E=>{nn.push(sa(E,K,an))});return nn.push(f),ue(nn)}).then(()=>{nn=[];for(const b of Tn)if(b.beforeEnter)if(Me(b.beforeEnter))for(const E of b.beforeEnter)nn.push(sa(E,K,an));else nn.push(sa(b.beforeEnter,K,an));return nn.push(f),ue(nn)}).then(()=>(K.matched.forEach(b=>b.enterCallbacks={}),nn=dr(Tn,"beforeRouteEnter",K,an,M),nn.push(f),ue(nn))).then(()=>{nn=[];for(const b of s.list())nn.push(sa(b,K,an));return nn.push(f),ue(nn)}).catch(b=>Ke(b,Fn.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function D(K,an,nn){o.list().forEach(on=>M(()=>on(K,an,nn)))}function x(K,an,nn,on,bn){const Tn=v(K,an);if(Tn)return Tn;const f=an===je,b=Ka?history.state:{};nn&&(on||f?i.replace(K.fullPath,xn({scroll:f&&b&&b.scroll},bn)):i.push(K.fullPath,bn)),l.value=K,Z(K,an,nn,f),H()}let F;function O(){F||(F=i.listen((K,an,nn)=>{if(!Zn.listening)return;const on=_(K),bn=z(on,Zn.currentRoute.value);if(bn){C(xn(bn,{replace:!0,force:!0}),on).catch(gt);return}u=on;const Tn=l.value;Ka&&n1(po(Tn.fullPath,nn.delta),zi()),R(on,Tn).catch(f=>Ke(f,Fn.NAVIGATION_ABORTED|Fn.NAVIGATION_CANCELLED)?f:Ke(f,Fn.NAVIGATION_GUARD_REDIRECT)?(C(xn(S(f.to),{force:!0}),on).then(b=>{Ke(b,Fn.NAVIGATION_ABORTED|Fn.NAVIGATION_DUPLICATED)&&!nn.delta&&nn.type===Mr.pop&&i.go(-1,!1)}).catch(gt),Promise.reject()):(nn.delta&&i.go(-nn.delta,!1),V(f,on,Tn))).then(f=>{f=f||x(on,Tn,!1),f&&(nn.delta&&!Ke(f,Fn.NAVIGATION_CANCELLED)?i.go(-nn.delta,!1):nn.type===Mr.pop&&Ke(f,Fn.NAVIGATION_ABORTED|Fn.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),D(on,Tn,f)}).catch(gt)}))}let j=dt(),P=dt(),Q;function V(K,an,nn){H(K);const on=P.list();return on.length?on.forEach(bn=>bn(K,an,nn)):console.error(K),Promise.reject(K)}function J(){return Q&&l.value!==je?Promise.resolve():new Promise((K,an)=>{j.add([K,an])})}function H(K){return Q||(Q=!K,O(),j.list().forEach(([an,nn])=>K?nn(K):an()),j.reset()),K}function Z(K,an,nn,on){const{scrollBehavior:bn}=n;if(!Ka||!bn)return Promise.resolve();const Tn=!nn&&e1(po(K.fullPath,0))||(on||!nn)&&history.state&&history.state.scroll||null;return pa().then(()=>bn(K,an,Tn)).then(f=>f&&Qp(f)).catch(f=>V(f,K,an))}const hn=K=>i.go(K);let Ln;const Jn=new Set,Zn={currentRoute:l,listening:!0,addRoute:p,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:n,push:k,replace:I,go:hn,back:()=>hn(-1),forward:()=>hn(1),beforeEach:r.add,beforeResolve:s.add,afterEach:o.add,onError:P.add,isReady:J,install(K){K.component("RouterLink",I1),K.component("RouterView",O1),K.config.globalProperties.$router=Zn,Object.defineProperty(K.config.globalProperties,"$route",{enumerable:!0,get:()=>sn(l)}),Ka&&!Ln&&l.value===je&&(Ln=!0,k(i.location).catch(on=>{}));const an={};for(const on in je)Object.defineProperty(an,on,{get:()=>l.value[on],enumerable:!0});K.provide(ji,Zn),K.provide(Qr,_l(an)),K.provide(Pr,l);const nn=K.unmount;Jn.add(K),K.unmount=function(){Jn.delete(K),Jn.size<1&&(u=je,F&&F(),F=null,l.value=je,Ln=!1,Q=!1),nn()}}};function ue(K){return K.reduce((an,nn)=>an.then(()=>M(nn)),Promise.resolve())}return Zn}function zt(){return ee(ji)}function rt(n){return ee(Qr)}var ns=Symbol(""),Fe=()=>{const n=ee(ns);if(!n)throw new Error("useClientData() is called without provider.");return n},N1=()=>Fe().pageComponent,Kc=()=>Fe().pageFrontmatter,D1=()=>Fe().pageHead,L1=()=>Fe().pageLang,H1=()=>Fe().pageLayout,F1=()=>Fe().routeLocale,zc=()=>Fe().routePath,V1=()=>Fe().routes,K1=()=>Fe().siteData,Yi=Fe,jc=Kc,Or=new Set,jt=n=>{Or.add(n),tt(()=>{Or.delete(n)})},z1=Symbol(""),Rr=Dn(Ep),$a=Dn(Tp),Yc=(n,e)=>{const a=bp(n,e);if($a.value[a])return a;const t=encodeURI(a);if($a.value[t])return t;const i=Rr.value[a]||Rr.value[t];return i||a},It=(n,e)=>{const{pathname:a,hashAndQueries:t}=Ac(n),i=Yc(a,e),r=i+t;return $a.value[i]?{...$a.value[i],path:r,notFound:!1}:{...$a.value["/404.html"],path:r,notFound:!0}},j1=(n,e)=>{const{pathname:a,hashAndQueries:t}=Ac(n);return Yc(a,e)+t},Y1=n=>{if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)&&!(n.currentTarget&&n.currentTarget.getAttribute("target")?.match(/\b_blank\b/i)))return n.preventDefault(),!0},Ui=yn({name:"RouteLink",props:{to:{type:String,required:!0},active:Boolean,activeClass:{type:String,default:"route-link-active"}},slots:Object,setup(n,{slots:e}){const a=zt(),t=rt(),i=B(()=>n.to.startsWith("#")||n.to.startsWith("?")?n.to:`/${j1(n.to,t.path).substring(1)}`);return()=>rn("a",{class:["route-link",{[n.activeClass]:n.active}],href:i.value,onClick:(r={})=>{Y1(r)&&a.push(n.to).catch()}},e.default())}}),U1=yn({name:"AutoLink",props:{config:{type:Object,required:!0}},slots:Object,setup(n,{slots:e}){const a=Bl(n,"config"),t=rt(),i=K1(),r=B(()=>Vt(a.value.link)),s=B(()=>a.value.target||(r.value?"_blank":void 0)),o=B(()=>s.value==="_blank"),l=B(()=>!r.value&&!o.value),u=B(()=>a.value.rel||(o.value?"noopener noreferrer":null)),c=B(()=>a.value.ariaLabel??a.value.text),d=B(()=>{if(a.value.exact)return!1;const p=Object.keys(i.value.locales);return p.length?p.every(w=>w!==a.value.link):a.value.link!=="/"}),m=B(()=>l.value?a.value.activeMatch?(a.value.activeMatch instanceof RegExp?a.value.activeMatch:new RegExp(a.value.activeMatch,"u")).test(t.path):d.value?t.path.startsWith(a.value.link):t.path===a.value.link:!1);return()=>{const{before:p,after:w,default:h}=e,g=h?.(a.value)??[p?.(a.value),a.value.text,w?.(a.value)];return l.value?rn(Ui,{class:"auto-link",to:a.value.link,active:m.value,"aria-label":c.value},()=>g):rn("a",{class:"auto-link external-link",href:a.value.link,"aria-label":c.value,rel:u.value,target:s.value},g)}}}),es=yn({name:"ClientOnly",setup(n,e){const a=vn(!1);return ae(()=>{a.value=!0}),()=>a.value?e.slots.default?.():null}}),qt=n=>{Or.forEach(e=>e(n))},as=yn({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(n){const e=N1(),a=B(()=>{if(!n.path)return e.value;const i=It(n.path);return Rd(async()=>i.loader().then(({comp:r})=>r))}),t=Kc();return Vn(t,()=>{qt("updated")},{deep:!0,flush:"post"}),()=>rn(a.value,{onVnodeMounted:()=>{qt("mounted")},onVnodeUpdated:()=>{qt("updated")},onVnodeBeforeUnmount:()=>{qt("beforeUnmount")}})}}),G1="Layout",W1="en-US",ga=ua({resolveLayouts:n=>n.reduce((e,a)=>({...e,...a.layouts}),{}),resolvePageHead:(n,e,a)=>{const t=Ie(e.description)?e.description:a.description,i=[...Array.isArray(e.head)?e.head:[],...a.head,["title",{},n],["meta",{name:"description",content:t}]];return kp(i)},resolvePageHeadTitle:(n,e)=>[n.title,e.title].filter(a=>!!a).join(" | "),resolvePageLang:(n,e)=>n.lang||e.lang||W1,resolvePageLayout:(n,e)=>{const a=Ie(n.frontmatter.layout)?n.frontmatter.layout:G1;if(!e[a])throw new Error(`[vuepress] Cannot resolve layout: ${a}`);return e[a]},resolveRouteLocale:(n,e)=>gp(n,decodeURI(e)),resolveSiteLocaleData:({base:n,locales:e,...a},t)=>({...a,...e[t],head:[...e[t]?.head??[],...a.head]})}),ea=(n={})=>n,ts=n=>Kt(n)?n:`/${Tc(n)}`,$1=Object.defineProperty,J1=(n,e)=>{for(var a in e)$1(n,a,{get:e[a],enumerable:!0})},X1={};J1(X1,{COMPONENT_STATE_TYPE:()=>Z1,INSPECTOR_ID:()=>q1,INSPECTOR_LABEL:()=>Q1,INSPECTOR_NODES:()=>n0,INSPECTOR_STATE_SECTION_NAME:()=>e0,PLUGIN_ID:()=>Uc,PLUGIN_LABEL:()=>is});var Uc="org.vuejs.vuepress",is="VuePress",Z1=is,q1=Uc,Q1=is,Ao={id:"INTERNAL",label:"Internal",keys:["layouts","routes","redirects"]},Eo={id:"SITE",label:"Site",keys:["siteData","siteLocaleData"]},To={id:"ROUTE",label:"Route",keys:["routePath","routeLocale"]},Io={id:"PAGE",label:"Page",keys:["pageData","pageFrontmatter","pageLang","pageHead","pageHeadTitle","pageLayout","pageComponent"]},n0={[Ao.id]:Ao,[Eo.id]:Eo,[To.id]:To,[Io.id]:Io},e0="State";function rs(n,e){return Ci()?(Du(n,e),!0):!1}const Ja=new WeakMap,Gc=(...n)=>{var e;const a=n[0],t=(e=Be())===null||e===void 0?void 0:e.proxy,i=t??Ci();if(i==null&&!Ml())throw new Error("injectLocal must be called in setup");return i&&Ja.has(i)&&a in Ja.get(i)?Ja.get(i)[a]:ee(...n)};function a0(n,e){var a;const t=(a=Be())===null||a===void 0?void 0:a.proxy,i=t??Ci();if(i==null)throw new Error("provideLocal must be called in setup");Ja.has(i)||Ja.set(i,Object.create(null));const r=Ja.get(i);return r[n]=e,la(n,e)}const ss=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const t0=n=>n!=null,i0=Object.prototype.toString,r0=n=>i0.call(n)==="[object Object]",Ra=()=>{};function s0(...n){if(n.length!==1)return Bl(...n);const e=n[0];return typeof e=="function"?da(xl(()=>({get:e,set:Ra}))):vn(e)}function os(n,e){function a(...t){return new Promise((i,r)=>{Promise.resolve(n(()=>e.apply(this,t),{fn:e,thisArg:this,args:t})).then(i).catch(r)})}return a}const Wc=n=>n();function o0(n,e={}){let a,t,i=Ra;const r=l=>{clearTimeout(l),i(),i=Ra};let s;return l=>{const u=Cn(n),c=Cn(e.maxWait);return a&&r(a),u<=0||c!==void 0&&c<=0?(t&&(r(t),t=void 0),Promise.resolve(l())):new Promise((d,m)=>{i=e.rejectOnCancel?m:d,s=l,c&&!t&&(t=setTimeout(()=>{a&&r(a),t=void 0,d(s())},c)),a=setTimeout(()=>{t&&r(t),t=void 0,d(l())},u)})}}function l0(...n){let e=0,a,t=!0,i=Ra,r,s,o,l,u;!zn(n[0])&&typeof n[0]=="object"?{delay:s,trailing:o=!0,leading:l=!0,rejectOnCancel:u=!1}=n[0]:[s,o=!0,l=!0,u=!1]=n;const c=()=>{a&&(clearTimeout(a),a=void 0,i(),i=Ra)};return m=>{const p=Cn(s),w=Date.now()-e,h=()=>r=m();return c(),p<=0?(e=Date.now(),h()):(w>p?(e=Date.now(),(l||!t)&&h()):o&&(r=new Promise((g,_)=>{i=u?_:g,a=setTimeout(()=>{e=Date.now(),t=!0,g(h()),c()},Math.max(0,p-w))})),!l&&!a&&(a=setTimeout(()=>t=!0,p)),t=!1,r)}}function c0(n=Wc,e={}){const{initialState:a="active"}=e,t=s0(a==="active");function i(){t.value=!1}function r(){t.value=!0}return{isActive:da(t),pause:i,resume:r,eventFilter:(...o)=>{t.value&&n(...o)}}}function u0(n){let e;function a(){return e||(e=n()),e}return a.reset=async()=>{const t=e;e=void 0,t&&await t},a}function Mo(n){return n.endsWith("rem")?Number.parseFloat(n)*16:Number.parseFloat(n)}function yt(n){return Array.isArray(n)?n:[n]}function d0(n){return Be()}function $c(n,e=200,a={}){return os(o0(e,a),n)}function m0(n,e=200,a=!1,t=!0,i=!1){return os(l0(e,a,t,i),n)}function p0(n,e,a={}){const{eventFilter:t=Wc,...i}=a;return Vn(n,os(t,e),i)}function f0(n,e,a={}){const{eventFilter:t,initialState:i="active",...r}=a,{eventFilter:s,pause:o,resume:l,isActive:u}=c0(t,{initialState:i});return{stop:p0(n,e,{...r,eventFilter:s}),pause:o,resume:l,isActive:u}}function Gi(n,e=!0,a){d0()?ae(n,a):e?n():pa(n)}function h0(n,e,a={}){const{immediate:t=!0,immediateCallback:i=!1}=a,r=Dn(!1);let s;function o(){s&&(clearTimeout(s),s=void 0)}function l(){r.value=!1,o()}function u(...c){i&&n(),o(),r.value=!0,s=setTimeout(()=>{r.value=!1,s=void 0,n(...c)},Cn(e))}return t&&(r.value=!0,ss&&u()),rs(l),{isPending:ed(r),start:u,stop:l}}function ls(n=!1,e={}){const{truthyValue:a=!0,falsyValue:t=!1}=e,i=zn(n),r=Dn(n);function s(o){if(arguments.length)return r.value=o,r.value;{const l=Cn(a);return r.value=r.value===l?Cn(t):l,r.value}}return i?s:[r,s]}function cs(n,e,a){return Vn(n,e,{...a,immediate:!0})}const Se=ss?window:void 0,Jc=ss?window.navigator:void 0;function $e(n){var e;const a=Cn(n);return(e=a?.$el)!==null&&e!==void 0?e:a}function ce(...n){const e=(t,i,r,s)=>(t.addEventListener(i,r,s),()=>t.removeEventListener(i,r,s)),a=B(()=>{const t=yt(Cn(n[0])).filter(i=>i!=null);return t.every(i=>typeof i!="string")?t:void 0});return cs(()=>{var t,i;return[(t=(i=a.value)===null||i===void 0?void 0:i.map(r=>$e(r)))!==null&&t!==void 0?t:[Se].filter(r=>r!=null),yt(Cn(a.value?n[1]:n[0])),yt(sn(a.value?n[2]:n[1])),Cn(a.value?n[3]:n[2])]},([t,i,r,s],o,l)=>{if(!t?.length||!i?.length||!r?.length)return;const u=r0(s)?{...s}:s,c=t.flatMap(d=>i.flatMap(m=>r.map(p=>e(d,m,p,u))));l(()=>{c.forEach(d=>d())})},{flush:"post"})}function us(){const n=Dn(!1),e=Be();return e&&ae(()=>{n.value=!0},e),n}function Yt(n){const e=us();return B(()=>(e.value,!!n()))}function v0(n,e,a={}){const{window:t=Se,...i}=a;let r;const s=Yt(()=>t&&"MutationObserver"in t),o=()=>{r&&(r.disconnect(),r=void 0)},l=Vn(B(()=>{const d=yt(Cn(n)).map($e).filter(t0);return new Set(d)}),d=>{o(),s.value&&d.size&&(r=new MutationObserver(e),d.forEach(m=>r.observe(m,i)))},{immediate:!0,flush:"post"}),u=()=>r?.takeRecords(),c=()=>{l(),o()};return rs(c),{isSupported:s,stop:c,takeRecords:u}}const b0=Symbol("vueuse-ssr-width");function g0(){const n=Ml()?Gc(b0,null):null;return typeof n=="number"?n:void 0}function ds(n,e={}){const{window:a=Se,ssrWidth:t=g0()}=e,i=Yt(()=>a&&"matchMedia"in a&&typeof a.matchMedia=="function"),r=Dn(typeof t=="number"),s=Dn(),o=Dn(!1),l=u=>{o.value=u.matches};return Cl(()=>{if(r.value){r.value=!i.value,o.value=Cn(n).split(",").some(u=>{const c=u.includes("not all"),d=u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),m=u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let p=!!(d||m);return d&&p&&(p=t>=Mo(d[1])),m&&p&&(p=t<=Mo(m[1])),c?!p:p});return}i.value&&(s.value=a.matchMedia(Cn(n)),o.value=s.value.matches)}),ce(s,"change",l,{passive:!0}),B(()=>o.value)}function Co(n,e={}){const{controls:a=!1,navigator:t=Jc}=e,i=Yt(()=>t&&"permissions"in t),r=Dn(),s=typeof n=="string"?{name:n}:n,o=Dn(),l=()=>{var c,d;o.value=(c=(d=r.value)===null||d===void 0?void 0:d.state)!==null&&c!==void 0?c:"prompt"};ce(r,"change",l,{passive:!0});const u=u0(async()=>{if(i.value){if(!r.value)try{r.value=await t.permissions.query(s)}catch{r.value=void 0}finally{l()}if(a)return wn(r.value)}});return u(),a?{state:o,isSupported:i,query:u}:o}function y0(n={}){const{navigator:e=Jc,read:a=!1,source:t,copiedDuring:i=1500,legacy:r=!1}=n,s=Yt(()=>e&&"clipboard"in e),o=Co("clipboard-read"),l=Co("clipboard-write"),u=B(()=>s.value||r),c=Dn(""),d=Dn(!1),m=h0(()=>d.value=!1,i,{immediate:!1});async function p(){let S=!(s.value&&_(o.value));if(!S)try{c.value=await e.clipboard.readText()}catch{S=!0}S&&(c.value=g())}u.value&&a&&ce(["copy","cut"],p,{passive:!0});async function w(S=Cn(t)){if(u.value&&S!=null){let v=!(s.value&&_(l.value));if(!v)try{await e.clipboard.writeText(S)}catch{v=!0}v&&h(S),c.value=S,d.value=!0,m.start()}}function h(S){const v=document.createElement("textarea");v.value=S,v.style.position="absolute",v.style.opacity="0",v.setAttribute("readonly",""),document.body.appendChild(v),v.select(),document.execCommand("copy"),v.remove()}function g(){var S,v,k;return(S=(v=document)===null||v===void 0||(k=v.getSelection)===null||k===void 0||(k=k.call(v))===null||k===void 0?void 0:k.toString())!==null&&S!==void 0?S:""}function _(S){return S==="granted"||S==="prompt"}return{isSupported:u,text:da(c),copied:da(d),copy:w}}const Qt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ni="__vueuse_ssr_handlers__",w0=_0();function _0(){return ni in Qt||(Qt[ni]=Qt[ni]||{}),Qt[ni]}function S0(n,e){return w0[n]||e}function k0(n){return ds("(prefers-color-scheme: dark)",n)}function x0(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}const B0={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},Po="vueuse-storage";function ms(n,e,a,t={}){var i;const{flush:r="pre",deep:s=!0,listenToStorageChanges:o=!0,writeDefaults:l=!0,mergeDefaults:u=!1,shallow:c,window:d=Se,eventFilter:m,onError:p=O=>{console.error(O)},initOnMounted:w}=t,h=(c?Dn:vn)(typeof e=="function"?e():e),g=B(()=>Cn(n));if(!a)try{a=S0("getDefaultStorage",()=>Se?.localStorage)()}catch(O){p(O)}if(!a)return h;const _=Cn(e),S=x0(_),v=(i=t.serializer)!==null&&i!==void 0?i:B0[S],{pause:k,resume:I}=f0(h,O=>R(O),{flush:r,deep:s,eventFilter:m});Vn(g,()=>x(),{flush:r});let z=!1;const C=O=>{w&&!z||x(O)},A=O=>{w&&!z||F(O)};d&&o&&(a instanceof Storage?ce(d,"storage",C,{passive:!0}):ce(d,Po,A)),w?Gi(()=>{z=!0,x()}):x();function M(O,j){if(d){const P={key:g.value,oldValue:O,newValue:j,storageArea:a};d.dispatchEvent(a instanceof Storage?new StorageEvent("storage",P):new CustomEvent(Po,{detail:P}))}}function R(O){try{const j=a.getItem(g.value);if(O==null)M(j,null),a.removeItem(g.value);else{const P=v.write(O);j!==P&&(a.setItem(g.value,P),M(j,P))}}catch(j){p(j)}}function D(O){const j=O?O.newValue:a.getItem(g.value);if(j==null)return l&&_!=null&&a.setItem(g.value,v.write(_)),_;if(!O&&u){const P=v.read(j);return typeof u=="function"?u(P,_):S==="object"&&!Array.isArray(P)?{..._,...P}:P}else return typeof j!="string"?j:v.read(j)}function x(O){if(!(O&&O.storageArea!==a)){if(O&&O.key==null){h.value=_;return}if(!(O&&O.key!==g.value)){k();try{const j=v.write(h.value);(O===void 0||O?.newValue!==j)&&(h.value=D(O))}catch(j){p(j)}finally{O?pa(I):I()}}}}function F(O){x(O.detail)}return h}function A0(n,e,a={}){const{window:t=Se,...i}=a;let r;const s=Yt(()=>t&&"ResizeObserver"in t),o=()=>{r&&(r.disconnect(),r=void 0)},l=Vn(B(()=>{const c=Cn(n);return Array.isArray(c)?c.map(d=>$e(d)):[$e(c)]}),c=>{if(o(),s.value&&t){r=new ResizeObserver(e);for(const d of c)d&&r.observe(d,i)}},{immediate:!0,flush:"post"}),u=()=>{o(),l()};return rs(u),{isSupported:s,stop:u}}function E0(n,e={width:0,height:0},a={}){const{window:t=Se,box:i="content-box"}=a,r=B(()=>{var d;return(d=$e(n))===null||d===void 0||(d=d.namespaceURI)===null||d===void 0?void 0:d.includes("svg")}),s=Dn(e.width),o=Dn(e.height),{stop:l}=A0(n,([d])=>{const m=i==="border-box"?d.borderBoxSize:i==="content-box"?d.contentBoxSize:d.devicePixelContentBoxSize;if(t&&r.value){const p=$e(n);if(p){const w=p.getBoundingClientRect();s.value=w.width,o.value=w.height}}else if(m){const p=yt(m);s.value=p.reduce((w,{inlineSize:h})=>w+h,0),o.value=p.reduce((w,{blockSize:h})=>w+h,0)}else s.value=d.contentRect.width,o.value=d.contentRect.height},a);Gi(()=>{const d=$e(n);d&&(s.value="offsetWidth"in d?d.offsetWidth:e.width,o.value="offsetHeight"in d?d.offsetHeight:e.height)});const u=Vn(()=>$e(n),d=>{s.value=d?e.width:0,o.value=d?e.height:0});function c(){l(),u()}return{width:s,height:o,stop:c}}const Oo=1;function T0(n,e={}){const{throttle:a=0,idle:t=200,onStop:i=Ra,onScroll:r=Ra,offset:s={left:0,right:0,top:0,bottom:0},observe:o={mutation:!1},eventListenerOptions:l={capture:!1,passive:!0},behavior:u="auto",window:c=Se,onError:d=M=>{console.error(M)}}=e,m=typeof o=="boolean"?{mutation:o}:o,p=Dn(0),w=Dn(0),h=B({get(){return p.value},set(M){_(M,void 0)}}),g=B({get(){return w.value},set(M){_(void 0,M)}});function _(M,R){var D,x,F,O;if(!c)return;const j=Cn(n);if(!j)return;(D=j instanceof Document?c.document.body:j)===null||D===void 0||D.scrollTo({top:(x=Cn(R))!==null&&x!==void 0?x:g.value,left:(F=Cn(M))!==null&&F!==void 0?F:h.value,behavior:Cn(u)});const P=(j==null||(O=j.document)===null||O===void 0?void 0:O.documentElement)||j?.documentElement||j;h!=null&&(p.value=P.scrollLeft),g!=null&&(w.value=P.scrollTop)}const S=Dn(!1),v=ua({left:!0,right:!1,top:!0,bottom:!1}),k=ua({left:!1,right:!1,top:!1,bottom:!1}),I=M=>{S.value&&(S.value=!1,k.left=!1,k.right=!1,k.top=!1,k.bottom=!1,i(M))},z=$c(I,a+t),C=M=>{var R;if(!c)return;const D=(M==null||(R=M.document)===null||R===void 0?void 0:R.documentElement)||M?.documentElement||$e(M),{display:x,flexDirection:F,direction:O}=c.getComputedStyle(D),j=O==="rtl"?-1:1,P=D.scrollLeft;k.left=P<p.value,k.right=P>p.value;const Q=Math.abs(P*j)<=(s.left||0),V=Math.abs(P*j)+D.clientWidth>=D.scrollWidth-(s.right||0)-Oo;x==="flex"&&F==="row-reverse"?(v.left=V,v.right=Q):(v.left=Q,v.right=V),p.value=P;let J=D.scrollTop;M===c.document&&!J&&(J=c.document.body.scrollTop),k.top=J<w.value,k.bottom=J>w.value;const H=Math.abs(J)<=(s.top||0),Z=Math.abs(J)+D.clientHeight>=D.scrollHeight-(s.bottom||0)-Oo;x==="flex"&&F==="column-reverse"?(v.top=Z,v.bottom=H):(v.top=H,v.bottom=Z),w.value=J},A=M=>{var R;c&&(C((R=M.target.documentElement)!==null&&R!==void 0?R:M.target),S.value=!0,z(M),r(M))};return ce(n,"scroll",a?m0(A,a,!0,!1):A,l),Gi(()=>{try{const M=Cn(n);if(!M)return;C(M)}catch(M){d(M)}}),m?.mutation&&n!=null&&n!==c&&n!==document&&v0(n,()=>{const M=Cn(n);M&&C(M)},{attributes:!0,childList:!0,subtree:!0}),ce(n,"scrollend",I,l),{x:h,y:g,isScrolling:S,arrivedState:v,directions:k,measure(){const M=Cn(n);c&&M&&C(M)}}}function I0(n={}){const{window:e=Se,...a}=n;return T0(e,a)}function M0(n={}){const{window:e=Se,initialWidth:a=Number.POSITIVE_INFINITY,initialHeight:t=Number.POSITIVE_INFINITY,listenOrientation:i=!0,includeScrollbar:r=!0,type:s="inner"}=n,o=Dn(a),l=Dn(t),u=()=>{if(e)if(s==="outer")o.value=e.outerWidth,l.value=e.outerHeight;else if(s==="visual"&&e.visualViewport){const{width:d,height:m,scale:p}=e.visualViewport;o.value=Math.round(d*p),l.value=Math.round(m*p)}else r?(o.value=e.innerWidth,l.value=e.innerHeight):(o.value=e.document.documentElement.clientWidth,l.value=e.document.documentElement.clientHeight)};u(),Gi(u);const c={passive:!0};return ce("resize",u,c),e&&s==="visual"&&e.visualViewport&&ce(e.visualViewport,"resize",u,c),i&&Vn(ds("(orientation: portrait)"),()=>u()),{width:o,height:l}}const Ro=async(n,e)=>{const{path:a,query:t}=n.currentRoute.value,{scrollBehavior:i}=n.options;n.options.scrollBehavior=void 0,await n.replace({path:a,query:t,hash:e}),n.options.scrollBehavior=i},C0=({headerLinkSelector:n,headerAnchorSelector:e,delay:a,offset:t=5})=>{const i=zt();ce("scroll",$c(()=>{const s=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(s)<t){Ro(i,"");return}const l=window.innerHeight+s,u=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),c=Math.abs(u-l)<t,d=Array.from(document.querySelectorAll(n)),p=Array.from(document.querySelectorAll(e)).filter(w=>d.some(h=>h.hash===w.hash));for(let w=0;w<p.length;w++){const h=p[w],g=p[w+1],_=s>=(h.parentElement?.offsetTop??0)-t,S=!g||s<(g.parentElement?.offsetTop??0)-t;if(!(_&&S))continue;const k=decodeURIComponent(i.currentRoute.value.hash),I=decodeURIComponent(h.hash);if(k===I)return;if(c){for(let z=w+1;z<p.length;z++)if(k===decodeURIComponent(p[z].hash))return}Ro(i,I);return}},a))},P0="a.vp-sidebar-item",O0=".header-anchor",R0=300,N0=5,D0=ea({setup(){C0({headerLinkSelector:P0,headerAnchorSelector:O0,delay:R0,offset:N0})}}),L0=Object.freeze(Object.defineProperty({__proto__:null,default:D0},Symbol.toStringTag,{value:"Module"})),H0=n=>typeof n<"u",Xc=(n,e)=>Ie(n)&&n.startsWith(e),{keys:F0}=Object,Zc=n=>Xc(n,"/")&&n[1]!=="/",qc=n=>!hp(n)&&!Vt(n),No=()=>document.documentElement.getAttribute("data-theme")==="dark",Qc=[...new Array(6)].map((n,e)=>`[vp-content] h${e+1}`).join(","),V0=(n,e=2)=>{if(e===!1)return[];const[a,t]=typeof e=="number"?[e,e]:e==="deep"?[2,6]:e,i=n.filter(s=>s.level>=a&&s.level<=t),r=[];n:for(let s=0;s<i.length;s++){const o=i[s];if(s===0)r.push(o);else{for(let l=s-1;l>=0;l--){const u=i[l];if(u.level<o.level){u.children.push(o);continue n}}r.push(o)}}return r},K0=(n,e=[])=>{let a;if(e.length){const t=n.cloneNode(!0);t.querySelectorAll(e.join(",")).forEach(i=>{i.remove()}),a=t.textContent||""}else a=n.textContent||"";return a.trim()},z0=(n=Qc,e=[])=>Array.from(document.querySelectorAll(n)).filter(a=>a.id&&a.hasChildNodes()).map(a=>({element:a,title:K0(a,e),link:`#${a.id}`,slug:a.id,level:Number(a.tagName[1]),children:[]})),j0=({selector:n=Qc,levels:e=2,ignore:a=[]}={})=>V0(z0(n,a),e),nu=(n,e)=>{const a=Be()?.appContext.components;return a?n in a||ne(n)in a||Rt(ne(n))in a:!1},Y0=yn({name:"FadeInExpandTransition",props:{group:Boolean,appear:Boolean,width:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function},setup(n,{slots:e}){const a=o=>{o.style[n.width?"maxWidth":"maxHeight"]=`${o.offsetHeight}px`,o.offsetWidth},t=o=>{o.style[n.width?"maxWidth":"maxHeight"]="0",o.offsetWidth,n.onLeave?.()},i=o=>{o.style[n.width?"maxWidth":"maxHeight"]="",n.onAfterLeave?.()},r=o=>{if(o.style.transition="none",n.width){const l=o.offsetWidth;o.style.maxWidth="0",o.offsetWidth,o.style.transition="",o.style.maxWidth=`${l}px`}else{const l=o.offsetHeight;o.style.maxHeight="0",o.offsetWidth,o.style.transition="",o.style.maxHeight=`${l}px`}o.offsetWidth},s=o=>{o.style[n.width?"maxWidth":"maxHeight"]="",n.onAfterEnter?.()};return()=>rn(n.group?np:it,{name:n.width?"fade-in-width-expand":"fade-in-height-expand",appear:n.appear,onEnter:r,onAfterEnter:s,onBeforeLeave:a,onLeave:t,onAfterLeave:i,...n.group?void 0:{mode:n.mode}},e)}}),eu=Symbol(""),Do=vn(!1);typeof document<"u"&&(Do.value=No(),new MutationObserver(()=>{Do.value=No()}).observe(document.documentElement,{attributeFilter:["data-theme"],attributes:!0}));const U0=n=>{const e=F1();return B(()=>{const a=Cn(n);return a[e.value]??a["/"]??Object.values(a)[0]})},ps=U0,G0=()=>{const n=V1();return B(()=>Object.keys(n.value))};var W0={"/":{backToTop:"返回顶部"}};const $0=yn({name:"BackToTop",setup(){const n=jc(),e=ps(W0),a=Dn(),{height:t}=E0(a),{height:i}=M0(),{y:r}=I0(),s=B(()=>(n.value.backToTop??!0)&&r.value>100),o=B(()=>r.value/(t.value-i.value)*100);return ae(()=>{a.value=document.body}),()=>rn(it,{name:"fade-in"},()=>s.value?rn("button",{type:"button",class:"vp-back-to-top-button","aria-label":e.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[rn("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":o.value},rn("svg",rn("circle",{cx:"26",cy:"26",r:"24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-dasharray":`${Math.PI*o.value*.48} ${Math.PI*(100-o.value)*.48}`}))),rn("div",{class:"back-to-top-icon"})]):null)}}),J0=ea({rootComponents:[$0]}),X0=Object.freeze(Object.defineProperty({__proto__:null,default:J0},Symbol.toStringTag,{value:"Module"})),Z0=/language-(shellscript|shell|bash|sh|zsh)/,q0=({selector:n,ignoreSelector:e,inlineSelector:a,duration:t=2e3,locales:i,showInMobile:r,transform:s})=>{const o=ds("(max-width: 419px)"),l=B(()=>!o.value||r),u=ps(i),c=h=>{if(h.hasAttribute("copy-code"))return;const g=document.createElement("button");g.type="button",g.classList.add("vp-copy-code-button"),g.setAttribute("aria-label",u.value.copy),g.setAttribute("data-copied",u.value.copied),h.parentElement?.insertBefore(g,h),h.setAttribute("copy-code","")},d=()=>{document.body.classList.toggle("no-copy-code",!l.value),l.value&&document.querySelectorAll(n).forEach(c)};cs(l,()=>pa(d),{flush:"post"}),jt(h=>{h!=="beforeUnmount"&&d()});const{copy:m}=y0({legacy:!0}),p=new WeakMap,w=async(h,g,_)=>{const S=g.cloneNode(!0);s&&s(S);let v=S.textContent||"";if(Z0.test(h.className)&&(v=v.replace(/^ *(\$|>) /gm,"")),await m(v),t<=0)return;_.classList.add("copied"),clearTimeout(p.get(_));const k=setTimeout(()=>{_.classList.remove("copied"),_.blur(),p.delete(_)},t);p.set(_,k)};ce("click",h=>{const g=h.target;if(l.value&&g.matches('div[class*="language-"] > button.vp-copy-code-button')){const _=g.parentElement,S=g.nextElementSibling;if(!_||!S)return;w(_,S,g)}},{passive:!0})};var Q0={"/":{copy:"复制代码",copied:"已复制"}};const n2=ea({setup:()=>{q0({selector:'[vp-content] div[class*="language-"] pre',ignoreSelector:"",inlineSelector:"",locales:Q0,duration:2e3,showInMobile:!1})}}),e2=Object.freeze(Object.defineProperty({__proto__:null,default:n2},Symbol.toStringTag,{value:"Module"})),a2=ea({setup(){ce("beforeprint",()=>{document.querySelectorAll("details").forEach(n=>{n.open=!0})},{passive:!0})}}),t2=Object.freeze(Object.defineProperty({__proto__:null,default:a2},Symbol.toStringTag,{value:"Module"}));var Lo={provider:"github",pattern:{commit:":repo/commit/:hash",issue:":repo/issues/:issue",tag:":repo/releases/tag/:tag"},repo:"osuxrq/osuxrq.com"};const Ho=typeof Lo>"u"?{}:Lo,i2=(n,e)=>!n||Kt(n)?n:e==="github"?`https://github.com/${n}`:e==="gitee"?`https://gitee.com/${n}`:n,r2=/#(\d+)/g,s2=(n=!0)=>{const{frontmatter:e,lang:a,page:t}=Yi(),{pattern:i={},provider:r}=Ho,s=i2(Ho.repo,r);return B(()=>{if(e.value.changelog===!1||!Cn(n))return[];const o=new Intl.DateTimeFormat(a.value,{dateStyle:"short"});return(t.value.git?.changelog??[]).map(l=>{const u={date:o.format(l.time),...l};return i.issue&&s&&(u.message=u.message.replace(r2,(c,d)=>`<a href="${i.issue.replace(":issue",d).replace(":repo",s)}" target="_blank" rel="noopener noreferrer">${c}</a>`)),i.commit&&s&&(u.commitUrl=i.commit.replace(":hash",u.hash).replace(":repo",s)),i.tag&&s&&u.tag&&(u.tagUrl=i.tag.replace(":tag",u.tag).replace(":repo",s)),u})})},au=(n=!0)=>{const{frontmatter:e,page:a}=Yi();return B(()=>e.value.contributors===!1||!Cn(n)?[]:a.value.git.contributors??[])};var Fo={"/":{contributors:"贡献者",changelog:"更新日志",timeOn:"于",viewChangelog:"查看所有更新日志",latestUpdateAt:"最近更新"}};const o2=typeof Fo>"u"?{}:Fo,fs=()=>ps(o2),tu=(n=!0)=>{const{lang:e,page:a}=Yi(),t=fs();return B(()=>{if(!Cn(n))return null;const i=a.value.git?.updatedTime??a.value.git?.changelog?.[0].time;if(!i)return null;const r=new Date(i),s=new Intl.DateTimeFormat(e.value,{dateStyle:"short",timeStyle:"short"}).format(i);return{date:r,text:s,iso:r.toISOString(),locale:t.value.latestUpdateAt}})},iu=({level:n=2,text:e,anchor:a})=>rn(`h${n||2}`,{id:a,tabindex:"-1"},rn("a",{href:`#${a}`,class:"header-anchor"},rn("span",e))),l2=({name:n,url:e,avatar:a})=>rn(e?"a":"span",{href:e,target:"_blank",rel:"noreferrer",class:"vp-contributor"},[a?rn("img",{src:a,alt:"",class:"vp-contributor-avatar"}):null,rn("span",{class:"vp-contributor-name"},n)]),c2=yn({name:"GitContributors",props:{title:String,headerLevel:{type:Number,default:2}},setup(n){const e=au(),a=fs();return()=>e.value.length?[rn(iu,{level:n.headerLevel,anchor:"doc-contributors",text:n.title||a.value.contributors}),rn("div",{class:"vp-contributors"},e.value.map(t=>rn(l2,t)))]:null}}),u2=yn({name:"GitChangelog",props:{title:String,headerLevel:{type:Number,default:2}},setup(n){const e=s2(),a=fs(),t=tu(),[i,r]=ls(),s=()=>rn("div",{class:"vp-changelog-header",onClick:()=>r()},[rn("div",{class:"vp-latest-updated"},[rn("span",{class:"vp-changelog-icon"}),rn("span",{"data-allow-mismatch":""},t.value.text)]),rn("div",[rn("span",{class:"vp-changelog-menu-icon"}),rn("span",a.value.viewChangelog)])]),o=({item:u})=>rn("li",{class:"vp-changelog-item-tag"},rn("div",[rn("a",{class:"vp-changelog-tag"},rn("code",u.tag)),rn("span",{class:"vp-changelog-date","data-allow-mismatch":""},[a.value.timeOn," ",rn("time",{datetime:new Date(u.time).toISOString()},u.date)])])),l=({item:u})=>rn("li",{class:"vp-changelog-item-commit"},[rn(u.commitUrl?"a":"span",{class:"vp-changelog-hash",href:u.commitUrl,target:"_blank",rel:"noreferrer"},[rn("code",u.hash.slice(0,5))]),rn("span",{class:"vp-changelog-divider"},"-"),rn("span",{class:"vp-changelog-message",innerHTML:u.message}),rn("span",{class:"vp-changelog-date","data-allow-mismatch":""},[a.value.timeOn||"on"," ",rn("time",{datetime:new Date(u.time).toISOString()},u.date)])]);return()=>e.value.length?[rn(iu,{level:n.headerLevel,anchor:"doc-changelog",text:n.title||a.value.changelog}),rn("div",{class:["vp-changelog-wrapper",{active:i.value}]},[rn(s),rn("ul",{class:"vp-changelog-list"},[e.value.map(u=>u.tag?rn(o,{item:u,key:u.tag}):rn(l,{item:u,key:u.hash}))])])]:null}}),d2={enhance:({app:n})=>{n.component("GitContributors",c2),n.component("GitChangelog",u2)}},m2=Object.freeze(Object.defineProperty({__proto__:null,default:d2},Symbol.toStringTag,{value:"Module"}));/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var wa=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},ei=function(e){return e.tagName==="IMG"},p2=function(e){return NodeList.prototype.isPrototypeOf(e)},ci=function(e){return e&&e.nodeType===1},Vo=function(e){var a=e.currentSrc||e.src;return a.substr(-4).toLowerCase()===".svg"},Ko=function(e){try{return Array.isArray(e)?e.filter(ei):p2(e)?[].slice.call(e).filter(ei):ci(e)?[e].filter(ei):typeof e=="string"?[].slice.call(document.querySelectorAll(e)).filter(ei):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},f2=function(e){var a=document.createElement("div");return a.classList.add("medium-zoom-overlay"),a.style.background=e,a},h2=function(e){var a=e.getBoundingClientRect(),t=a.top,i=a.left,r=a.width,s=a.height,o=e.cloneNode(),l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,u=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return o.removeAttribute("id"),o.style.position="absolute",o.style.top=t+l+"px",o.style.left=i+u+"px",o.style.width=r+"px",o.style.height=s+"px",o.style.transform="",o},La=function(e,a){var t=wa({bubbles:!1,cancelable:!1,detail:void 0},a);if(typeof window.CustomEvent=="function")return new CustomEvent(e,t);var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i},v2=function n(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=window.Promise||function(x){function F(){}x(F,F)},i=function(x){var F=x.target;if(F===M){w();return}v.indexOf(F)!==-1&&h({target:F})},r=function(){if(!(I||!A.original)){var x=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(z-x)>C.scrollOffset&&setTimeout(w,150)}},s=function(x){var F=x.key||x.keyCode;(F==="Escape"||F==="Esc"||F===27)&&w()},o=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},F=x;if(x.background&&(M.style.background=x.background),x.container&&x.container instanceof Object&&(F.container=wa({},C.container,x.container)),x.template){var O=ci(x.template)?x.template:document.querySelector(x.template);F.template=O}return C=wa({},C,F),v.forEach(function(j){j.dispatchEvent(La("medium-zoom:update",{detail:{zoom:R}}))}),R},l=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return n(wa({},C,x))},u=function(){for(var x=arguments.length,F=Array(x),O=0;O<x;O++)F[O]=arguments[O];var j=F.reduce(function(P,Q){return[].concat(P,Ko(Q))},[]);return j.filter(function(P){return v.indexOf(P)===-1}).forEach(function(P){v.push(P),P.classList.add("medium-zoom-image")}),k.forEach(function(P){var Q=P.type,V=P.listener,J=P.options;j.forEach(function(H){H.addEventListener(Q,V,J)})}),R},c=function(){for(var x=arguments.length,F=Array(x),O=0;O<x;O++)F[O]=arguments[O];A.zoomed&&w();var j=F.length>0?F.reduce(function(P,Q){return[].concat(P,Ko(Q))},[]):v;return j.forEach(function(P){P.classList.remove("medium-zoom-image"),P.dispatchEvent(La("medium-zoom:detach",{detail:{zoom:R}}))}),v=v.filter(function(P){return j.indexOf(P)===-1}),R},d=function(x,F){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return v.forEach(function(j){j.addEventListener("medium-zoom:"+x,F,O)}),k.push({type:"medium-zoom:"+x,listener:F,options:O}),R},m=function(x,F){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return v.forEach(function(j){j.removeEventListener("medium-zoom:"+x,F,O)}),k=k.filter(function(j){return!(j.type==="medium-zoom:"+x&&j.listener.toString()===F.toString())}),R},p=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},F=x.target,O=function(){var P={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},Q=void 0,V=void 0;if(C.container)if(C.container instanceof Object)P=wa({},P,C.container),Q=P.width-P.left-P.right-C.margin*2,V=P.height-P.top-P.bottom-C.margin*2;else{var J=ci(C.container)?C.container:document.querySelector(C.container),H=J.getBoundingClientRect(),Z=H.width,hn=H.height,Ln=H.left,Jn=H.top;P=wa({},P,{width:Z,height:hn,left:Ln,top:Jn})}Q=Q||P.width-C.margin*2,V=V||P.height-C.margin*2;var Zn=A.zoomedHd||A.original,ue=Vo(Zn)?Q:Zn.naturalWidth||Q,K=Vo(Zn)?V:Zn.naturalHeight||V,an=Zn.getBoundingClientRect(),nn=an.top,on=an.left,bn=an.width,Tn=an.height,f=Math.min(Math.max(bn,ue),Q)/bn,b=Math.min(Math.max(Tn,K),V)/Tn,E=Math.min(f,b),U=(-on+(Q-bn)/2+C.margin+P.left)/E,L=(-nn+(V-Tn)/2+C.margin+P.top)/E,Y="scale("+E+") translate3d("+U+"px, "+L+"px, 0)";A.zoomed.style.transform=Y,A.zoomedHd&&(A.zoomedHd.style.transform=Y)};return new t(function(j){if(F&&v.indexOf(F)===-1){j(R);return}var P=function Z(){I=!1,A.zoomed.removeEventListener("transitionend",Z),A.original.dispatchEvent(La("medium-zoom:opened",{detail:{zoom:R}})),j(R)};if(A.zoomed){j(R);return}if(F)A.original=F;else if(v.length>0){var Q=v;A.original=Q[0]}else{j(R);return}if(A.original.dispatchEvent(La("medium-zoom:open",{detail:{zoom:R}})),z=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,I=!0,A.zoomed=h2(A.original),document.body.appendChild(M),C.template){var V=ci(C.template)?C.template:document.querySelector(C.template);A.template=document.createElement("div"),A.template.appendChild(V.content.cloneNode(!0)),document.body.appendChild(A.template)}if(A.original.parentElement&&A.original.parentElement.tagName==="PICTURE"&&A.original.currentSrc&&(A.zoomed.src=A.original.currentSrc),document.body.appendChild(A.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),A.original.classList.add("medium-zoom-image--hidden"),A.zoomed.classList.add("medium-zoom-image--opened"),A.zoomed.addEventListener("click",w),A.zoomed.addEventListener("transitionend",P),A.original.getAttribute("data-zoom-src")){A.zoomedHd=A.zoomed.cloneNode(),A.zoomedHd.removeAttribute("srcset"),A.zoomedHd.removeAttribute("sizes"),A.zoomedHd.removeAttribute("loading"),A.zoomedHd.src=A.zoomed.getAttribute("data-zoom-src"),A.zoomedHd.onerror=function(){clearInterval(J),console.warn("Unable to reach the zoom image target "+A.zoomedHd.src),A.zoomedHd=null,O()};var J=setInterval(function(){A.zoomedHd.complete&&(clearInterval(J),A.zoomedHd.classList.add("medium-zoom-image--opened"),A.zoomedHd.addEventListener("click",w),document.body.appendChild(A.zoomedHd),O())},10)}else if(A.original.hasAttribute("srcset")){A.zoomedHd=A.zoomed.cloneNode(),A.zoomedHd.removeAttribute("sizes"),A.zoomedHd.removeAttribute("loading");var H=A.zoomedHd.addEventListener("load",function(){A.zoomedHd.removeEventListener("load",H),A.zoomedHd.classList.add("medium-zoom-image--opened"),A.zoomedHd.addEventListener("click",w),document.body.appendChild(A.zoomedHd),O()})}else O()})},w=function(){return new t(function(x){if(I||!A.original){x(R);return}var F=function O(){A.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(A.zoomed),A.zoomedHd&&document.body.removeChild(A.zoomedHd),document.body.removeChild(M),A.zoomed.classList.remove("medium-zoom-image--opened"),A.template&&document.body.removeChild(A.template),I=!1,A.zoomed.removeEventListener("transitionend",O),A.original.dispatchEvent(La("medium-zoom:closed",{detail:{zoom:R}})),A.original=null,A.zoomed=null,A.zoomedHd=null,A.template=null,x(R)};I=!0,document.body.classList.remove("medium-zoom--opened"),A.zoomed.style.transform="",A.zoomedHd&&(A.zoomedHd.style.transform=""),A.template&&(A.template.style.transition="opacity 150ms",A.template.style.opacity=0),A.original.dispatchEvent(La("medium-zoom:close",{detail:{zoom:R}})),A.zoomed.addEventListener("transitionend",F)})},h=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},F=x.target;return A.original?w():p({target:F})},g=function(){return C},_=function(){return v},S=function(){return A.original},v=[],k=[],I=!1,z=0,C=a,A={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(e)==="[object Object]"?C=e:(e||typeof e=="string")&&u(e),C=wa({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},C);var M=f2(C.background);document.addEventListener("click",i),document.addEventListener("keyup",s),document.addEventListener("scroll",r),window.addEventListener("resize",w);var R={open:p,close:w,toggle:h,update:o,clone:l,attach:u,detach:c,on:d,off:m,getOptions:g,getImages:_,getZoomedImage:S};return R};function b2(n,e){e===void 0&&(e={});var a=e.insertAt;if(!(typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",a==="top"&&t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}var g2=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";b2(g2);const ru=Symbol("mediumZoom"),y2=()=>{const n=ee(ru);if(!n)throw new Error("useMediumZoom() is called without provider.");return n};var w2={};const _2="[vp-content] > img, [vp-content] :not(a) > img",S2=w2,k2=ea({enhance({app:n}){const e=v2(S2);e.refresh=(a=_2)=>{e.detach(),e.attach(a)},n.provide(ru,e)},setup(){const n=y2();jt(e=>{e!=="beforeUnmount"&&n.refresh()})}}),x2=Object.freeze(Object.defineProperty({__proto__:null,default:k2},Symbol.toStringTag,{value:"Module"}));/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const zo=(n,e)=>{n.classList.add(e)},jo=(n,e)=>{n.classList.remove(e)},B2=n=>{n?.parentNode?.removeChild(n)},mr=(n,e,a)=>n<e?e:n>a?a:n,Yo=n=>(-1+n)*100,A2=(()=>{const n=[],e=()=>{const a=n.shift();a&&a(e)};return a=>{n.push(a),n.length===1&&e()}})(),E2=n=>n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(e,a)=>a.toUpperCase()),ai=(()=>{const n=["Webkit","O","Moz","ms"],e={},a=r=>{const{style:s}=document.body;if(r in s)return r;const o=r.charAt(0).toUpperCase()+r.slice(1);let l=n.length;for(;l--;){const u=`${n[l]}${o}`;if(u in s)return u}return r},t=r=>{const s=E2(r);return e[s]??=a(s)},i=(r,s,o)=>{r.style[t(s)]=o};return(r,s)=>{for(const o in s){const l=s[o];Object.hasOwn(s,o)&&H0(l)&&i(r,o,l)}}})(),ze={minimum:.08,easing:"ease",speed:200,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},Hn={percent:null,isRendered:()=>!!document.getElementById("nprogress"),set:n=>{const{speed:e,easing:a}=ze,t=Hn.isStarted(),i=mr(n,ze.minimum,1);Hn.percent=i===1?null:i;const r=Hn.render(!t),s=r.querySelector(ze.barSelector);return r.offsetWidth,A2(o=>{ai(s,{transform:`translate3d(${Yo(i)}%,0,0)`,transition:`all ${e}ms ${a}`}),i===1?(ai(r,{transition:"none",opacity:"1"}),r.offsetWidth,setTimeout(()=>{ai(r,{transition:`all ${e}ms linear`,opacity:"0"}),setTimeout(()=>{Hn.remove(),o()},e)},e)):setTimeout(()=>{o()},e)}),Hn},isStarted:()=>typeof Hn.percent=="number",start:()=>{Hn.percent||Hn.set(0);const n=()=>{setTimeout(()=>{Hn.percent&&(Hn.trickle(),n())},ze.trickleSpeed)};return n(),Hn},done:n=>!n&&!Hn.percent?Hn:Hn.increase(.3+.5*Math.random()).set(1),increase:n=>{let{percent:e}=Hn;return e?(e=mr(e+(typeof n=="number"?n:(1-e)*mr(Math.random()*e,.1,.95)),0,.994),Hn.set(e)):Hn.start()},trickle:()=>Hn.increase(Math.random()*ze.trickleRate),render:n=>{if(Hn.isRendered())return document.getElementById("nprogress");zo(document.documentElement,"nprogress-busy");const e=document.createElement("div");e.id="nprogress",e.innerHTML=ze.template;const a=e.querySelector(ze.barSelector),t=document.querySelector(ze.parent),i=n?"-100":Yo(Hn.percent??0);return ai(a,{transition:"all 0 linear",transform:`translate3d(${i}%,0,0)`}),t&&(t!==document.body&&zo(t,"nprogress-custom-parent"),t.appendChild(e)),e},remove:()=>{jo(document.documentElement,"nprogress-busy"),jo(document.querySelector(ze.parent),"nprogress-custom-parent"),B2(document.getElementById("nprogress"))}},T2=()=>{ae(()=>{const n=zt(),e=new Set;e.add(n.currentRoute.value.path),n.beforeEach(a=>{e.has(a.path)||Hn.start()}),n.afterEach(a=>{e.add(a.path),Hn.done()})})},I2=ea({setup(){T2()}}),M2=Object.freeze(Object.defineProperty({__proto__:null,default:I2},Symbol.toStringTag,{value:"Module"})),C2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),P2="VUEPRESS_CODE_TAB_STORE",ti=ms(P2,{}),O2=yn({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},tabId:String},slots:Object,setup(n,{slots:e}){let a=n.data.map(()=>Vl());const t=vn(n.active),i=Dn([]),r=()=>{n.tabId&&(ti.value[n.tabId]=n.data[t.value].id)},s=(c=t.value)=>{t.value=c<i.value.length-1?c+1:0,i.value[t.value].focus()},o=(c=t.value)=>{t.value=c>0?c-1:i.value.length-1,i.value[t.value].focus()},l=(c,d)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),t.value=d):c.key==="ArrowRight"?(c.preventDefault(),s()):c.key==="ArrowLeft"&&(c.preventDefault(),o()),n.tabId&&(ti.value[n.tabId]=n.data[t.value].id)},u=()=>{if(n.tabId){const c=n.data.findIndex(({id:d})=>ti.value[n.tabId]===d);if(c!==-1)return c}return n.active};return ae(()=>{t.value=u(),Vn(()=>n.tabId&&ti.value[n.tabId],(c,d)=>{if(n.tabId&&c!==d){const m=n.data.findIndex(({id:p})=>p===c);m!==-1&&(t.value=m)}})}),()=>n.data.length?rn("div",{class:"vp-code-tabs"},[rn("div",{class:"vp-code-tabs-nav",role:"tablist"},n.data.map(({id:c},d)=>{const m=d===t.value;return rn("button",{type:"button",ref:p=>{p&&(i.value[d]=p)},class:["vp-code-tab-nav",{active:m}],role:"tab","aria-controls":a[d],"aria-selected":m,onClick:()=>{t.value=d,r()},onKeydown:p=>{l(p,d)}},e[`title${d}`]({value:c,isActive:m}))})),n.data.map(({id:c},d)=>{const m=d===t.value;return rn("div",{class:["vp-code-tab",{active:m}],id:a[d],role:"tabpanel","aria-expanded":m},[rn("div",{class:"vp-code-tab-title"},e[`title${d}`]({value:c,isActive:m})),e[`tab${d}`]({value:c,isActive:m})])})]):null}}),R2="VUEPRESS_TAB_STORE",pr=ms(R2,{}),N2=yn({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},tabId:String},slots:Object,setup(n,{slots:e}){let a=n.data.map(()=>Vl());const t=vn(n.active),i=Dn([]),r=()=>{n.tabId&&(pr.value[n.tabId]=n.data[t.value].id)},s=(c=t.value)=>{t.value=c<i.value.length-1?c+1:0,i.value[t.value].focus()},o=(c=t.value)=>{t.value=c>0?c-1:i.value.length-1,i.value[t.value].focus()},l=(c,d)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),t.value=d):c.key==="ArrowRight"?(c.preventDefault(),s()):c.key==="ArrowLeft"&&(c.preventDefault(),o()),r()},u=()=>{if(n.tabId){const c=n.data.findIndex(({id:d})=>pr.value[n.tabId]===d);if(c!==-1)return c}return n.active};return ae(()=>{t.value=u(),Vn(()=>n.tabId&&pr.value[n.tabId],(c,d)=>{if(n.tabId&&c!==d){const m=n.data.findIndex(({id:p})=>p===c);m!==-1&&(t.value=m)}})}),()=>n.data.length?rn("div",{class:"vp-tabs"},[rn("div",{class:"vp-tabs-nav",role:"tablist"},n.data.map(({id:c},d)=>{const m=d===t.value;return rn("button",{type:"button",ref:p=>{p&&(i.value[d]=p)},class:["vp-tab-nav",{active:m}],role:"tab","aria-controls":a[d],"aria-selected":m,onClick:()=>{t.value=d,r()},onKeydown:p=>{l(p,d)}},e[`title${d}`]({value:c,isActive:m}))})),n.data.map(({id:c},d)=>{const m=d===t.value;return rn("div",{class:["vp-tab",{active:m}],id:a[d],role:"tabpanel","aria-expanded":m},[rn("div",{class:"vp-tab-title"},e[`title${d}`]({value:c,isActive:m})),e[`tab${d}`]({value:c,isActive:m})])})]):null}}),D2={enhance:({app:n})=>{n.component("CodeTabs",O2),n.component("Tabs",N2)}},L2=Object.freeze(Object.defineProperty({__proto__:null,default:D2},Symbol.toStringTag,{value:"Module"})),H2=JSON.parse(`{"locales":{"/":{"navbar":["/introduction/how-to-join.md",{"text":"介绍","link":"/introduction/","activeMatch":"^/introduction/(?!how-to-join)"},{"text":"常见问题","children":["/faq/game.md","/faq/join.md","/faq/oversr.md"]},{"text":"管理","children":[{"text":"管理组介绍","link":"/people/","activeMatch":"^/people/$"},"/people/owner.md","/people/administrators.md","/people/alumni.md"]},{"text":"活动","children":[{"text":"活动介绍","link":"/events/README.md","activeMatch":"^/events/$"},"/events/matches/","/events/charts/","/events/collections/"]},{"text":"文档","children":[{"text":"谱面推荐","link":"/article/recommend/README.md","activeMatch":"^/article/recommend/$"},{"text":"出群遗言","link":"/article/lastwords/README.md","activeMatch":"^/article/lastwords/$"}]},{"text":"更多","children":[{"text":"机器人","link":"/misc/bots/"},{"text":"吉祥物","link":"/misc/mascots/"},{"text":"新人群的回忆","children":[{"text":"开启回忆","link":"https://meme.osuxrq.com/"},{"text":"添加回忆","link":"/misc/meme/"}]}]},{"text":"元信息","children":["/meta/contribution-guide.md","/meta/contributors.md","/meta/events.md"]}],"sidebar":{"/introduction/":["/introduction/README.md","/introduction/how-to-join.md","/introduction/series.md","/introduction/history.md"],"/faq/":["/faq/game.md","/faq/join.md","/faq/oversr.md"],"/events/":[{"text":"新人群群赛","children":["/events/matches/34.md","/events/matches/33.md","/events/matches/32.md","/events/matches/31.md","/events/matches/30.md","/events/matches/29.md","/events/matches/28.md","/events/matches/27.md","/events/matches/26.md","/events/matches/25.md","/events/matches/24.md","/events/matches/23.md","/events/matches/22.md","/events/matches/21.md","/events/matches/20.md","/events/matches/19.md","/events/matches/18.md","/events/matches/17.md","/events/matches/16.md","/events/matches/12.md","/events/matches/8.md","/events/matches/7.md","/events/matches/2.md"]},{"text":"进阶群群赛","children":["/events/matches/o2.md","/events/matches/o1.5.md","/events/matches/o1.md","/events/matches/a3.md","/events/matches/a2.md","/events/matches/a1.md"]},{"text":"其他群赛","children":["/events/matches/u.md","/events/matches/y4.md","/events/matches/y3.md","/events/matches/y2.md","/events/matches/y1.md"]},{"text":"月赛","children":["/events/charts/h2312.md","/events/charts/h2311.md","/events/charts/h2310.md","/events/charts/h2309.md","/events/charts/h2308.md","/events/charts/h2307.md","/events/charts/h2306.md","/events/charts/h2305.md","/events/charts/h2304.md","/events/charts/h2303.md"]},{"text":"悬赏","children":["/events/rewards/README.md"]},{"text":"集锦","children":["/events/collections/README.md"]}],"/article/recommend/":[{"text":"谱面推荐","link":"README.md","children":[{"text":"2026 年","children":["/article/recommend/BenZn.html"]},{"text":"2025 年","children":["/article/recommend/atahana.html","/article/recommend/-Yuki_Noa-.html"]},{"text":"2024 年","children":["/article/recommend/Syzygy5593.html"]},{"text":"2022 年","children":["/article/recommend/hiiragi_kagami.html","/article/recommend/SIyuyuko.html"]},{"text":"2021 年","children":["/article/recommend/Muziyami.html"]},{"text":"2019 年","children":["/article/recommend/sayori_yui.html"]},{"text":"2018 年","children":["/article/recommend/jack_wang_.html"]}]}],"/article/lastwords/":[{"text":"出群遗言","link":"README.md","children":[{"text":"谱面推荐","children":["/article/lastwords/users/35717411.html","/article/lastwords/users/37418919.html","/article/lastwords/users/15846580.html","/article/lastwords/users/36155893.html","/article/lastwords/users/21943424.html","/article/lastwords/users/36941954.html","/article/lastwords/users/36062235.html","/article/lastwords/users/36846545.html","/article/lastwords/users/21242012.html","/article/lastwords/users/32039184.html","/article/lastwords/users/33090766.html","/article/lastwords/users/34346018.html","/article/lastwords/users/36409902.html","/article/lastwords/users/5162173.html","/article/lastwords/users/35683344.html","/article/lastwords/users/35744851.html"]},{"text":"技巧建议","children":["/article/lastwords/users/4283631.html","/article/lastwords/users/36547413.html","/article/lastwords/users/35529699.html","/article/lastwords/users/9650376.html","/article/lastwords/users/28446169.html"]},{"text":"常规","children":["/article/lastwords/users/37974276.html","/article/lastwords/users/39005598.html","/article/lastwords/users/35288237.html","/article/lastwords/users/39491039.html","/article/lastwords/users/38737489.html","/article/lastwords/users/33463029.html","/article/lastwords/users/13932883.html","/article/lastwords/users/13017923.html","/article/lastwords/users/30320667.html","/article/lastwords/users/34230148.html","/article/lastwords/users/33918873.html","/article/lastwords/users/38021034.html","/article/lastwords/users/33319591.html","/article/lastwords/users/17610368.html","/article/lastwords/users/32303406.html","/article/lastwords/users/37449856.html","/article/lastwords/users/802382.html","/article/lastwords/users/8665750.html","/article/lastwords/users/16868813.html","/article/lastwords/users/14832181.html","/article/lastwords/users/31100455.html","/article/lastwords/users/32145451.html","/article/lastwords/users/35551133.html","/article/lastwords/users/32743500.html","/article/lastwords/users/13891947.html","/article/lastwords/users/18963228.html","/article/lastwords/users/14970885.html","/article/lastwords/users/14353421.html","/article/lastwords/users/15349720.html","/article/lastwords/users/15851436.html","/article/lastwords/users/16027612.html","/article/lastwords/users/16378561.html","/article/lastwords/users/16572973.html","/article/lastwords/users/16822918.html","/article/lastwords/users/18230719.html","/article/lastwords/users/20044753.html","/article/lastwords/users/21614712.html","/article/lastwords/users/25767690.html","/article/lastwords/users/27608705.html","/article/lastwords/users/28534876.html","/article/lastwords/users/30512018.html","/article/lastwords/users/30654176.html","/article/lastwords/users/31918202.html","/article/lastwords/users/32228798.html","/article/lastwords/users/32270642.html","/article/lastwords/users/32452774.html","/article/lastwords/users/33091136.html","/article/lastwords/users/33823564.html","/article/lastwords/users/33879454.html","/article/lastwords/users/33888415.html","/article/lastwords/users/34443419.html","/article/lastwords/users/35750067.html","/article/lastwords/users/36273312.html","/article/lastwords/users/6796076.html","/article/lastwords/users/6569959.html","/article/lastwords/users/36097722.html","/article/lastwords/users/10364008.html"]},{"text":"言简意赅","children":["/article/lastwords/users/39145159.html","/article/lastwords/users/30526925.html","/article/lastwords/users/36838632.html","/article/lastwords/users/31343852.html","/article/lastwords/users/40406578.html","/article/lastwords/users/37963548.html","/article/lastwords/users/40414685.html","/article/lastwords/users/27552230.html","/article/lastwords/users/34556002.html","/article/lastwords/users/32642875.html","/article/lastwords/users/34844529.html","/article/lastwords/users/21768422.html","/article/lastwords/users/31485633.html","/article/lastwords/users/34345823.html","/article/lastwords/users/20815409.html","/article/lastwords/users/26795413.html","/article/lastwords/users/28287625.html","/article/lastwords/users/35902892.html","/article/lastwords/users/36127474.html","/article/lastwords/users/35672191.html","/article/lastwords/users/32975448.html","/article/lastwords/users/29892932.html","/article/lastwords/users/32067163.html","/article/lastwords/users/32661925.html","/article/lastwords/users/22765044.html","/article/lastwords/users/13744965.html","/article/lastwords/users/14145531.html","/article/lastwords/users/14748844.html","/article/lastwords/users/17027628.html","/article/lastwords/users/25710736.html","/article/lastwords/users/27815249.html","/article/lastwords/users/28388886.html","/article/lastwords/users/28494479.html","/article/lastwords/users/29235972.html","/article/lastwords/users/30125315.html","/article/lastwords/users/30595368.html","/article/lastwords/users/30629671.html","/article/lastwords/users/30849263.html","/article/lastwords/users/31639737.html","/article/lastwords/users/32396623.html","/article/lastwords/users/33122153.html","/article/lastwords/users/33367606.html","/article/lastwords/users/33595598.html","/article/lastwords/users/33719256.html","/article/lastwords/users/33794305.html","/article/lastwords/users/33887163.html","/article/lastwords/users/34210302.html","/article/lastwords/users/34907673.html","/article/lastwords/users/34995831.html","/article/lastwords/users/34998676.html","/article/lastwords/users/35938964.html","/article/lastwords/users/6071538.html","/article/lastwords/users/7851625.html","/article/lastwords/users/8457316.html","/article/lastwords/users/36310606.html","/article/lastwords/users/35677457.html"]},{"text":"未知","children":["/article/lastwords/users/0.html"]}]}],"/meta/":[{"text":"元信息","children":["/meta/contribution-guide.md","/meta/contributors.md","/meta/events.md"]}],"/history/":["/history/README.md"],"/people/":["/people/README.md","/people/owner.md","/people/administrators.md","/people/alumni.md"]},"logo":"/images/hero.png","editLink":true,"editLinkText":"在 GitHub 上编辑此页","lastUpdatedText":"上次更新","contributorsText":"贡献者","tip":"提示","warning":"注意","danger":"警告","notFound":["这里什么都没有。","我们怎么到这儿来了？","这是一个四〇四页面。","我们好像进入了错误的链接。"],"backToHome":"返回首页","openInNewWindow":"在新窗口打开","selectLanguageName":"English"}},"repo":"osuxrq/osuxrq.com","lastUpdated":true,"contributors":true,"docsRepo":"osuxrq/osuxrq.com","docsBranch":"main","colorMode":"auto","colorModeSwitch":true,"navbar":[],"logo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebar":"heading","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`),F2=vn(H2),su=()=>F2,ou=Symbol(""),V2=()=>{const n=ee(ou);if(!n)throw new Error("useThemeLocaleData() is called without provider.");return n},K2=(n,e)=>{const{locales:a,...t}=n;return{...t,...a?.[e]}},z2=ea({enhance({app:n}){const e=su(),a=n._context.provides[ns],t=B(()=>K2(e.value,a.routeLocale.value));n.provide(ou,t),Object.defineProperties(n.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return t.value}}})}}),j2=Object.freeze(Object.defineProperty({__proto__:null,default:z2},Symbol.toStringTag,{value:"Module"})),$n=()=>({...Yi(),theme:su(),themeLocale:V2()}),Y2=n=>{const e=(a=n.value)=>{const t=window.document.documentElement;t.dataset.theme=a?"dark":"light"};ae(()=>{cs(n,e)}),tt(()=>{e()})},hs=()=>{const n=ee(eu);if(!n)throw new Error("useDarkMode() is called without provider.");return n},U2=()=>{const{themeLocale:n}=$n(),e=k0(),a=ms("vuepress-color-scheme",n.value.colorMode),t=B({get(){return n.value.colorModeSwitch?a.value==="auto"?e.value:a.value==="dark":n.value.colorMode==="dark"},set(i){i===e.value?a.value="auto":a.value=i?"dark":"light"}});la(eu,t),Y2(t)},lu=Symbol("headers"),G2=()=>{const n=Gc(lu);if(!n)throw new Error("useHeaders() is called without provider.");return n},W2=()=>{const{frontmatter:n,themeLocale:e}=$n(),a=vn([]),t=B(()=>n.value.sidebarDepth??e.value.sidebarDepth??2),i=()=>{if(t.value<=0){a.value=[];return}a.value=j0({levels:[2,t.value+1],ignore:[".vp-badge"]})};a0(lu,a),jt(r=>{r==="beforeUnmount"?a.value=[]:i()})};let fr=null,hr=null;const $2={wait:()=>fr,pending:()=>{fr=new Promise(n=>{hr=n})},resolve:()=>{hr?.(),fr=null,hr=null}},cu=()=>$2,at=(n,e)=>{const{notFound:a,meta:t,path:i}=It(n,e);return a?{text:i,link:i}:{text:t.title||i,link:i}},Xa=(n="",e="")=>Zc(e)||Vt(e)?e:`${xp(n)}${e}`,J2=n=>({text:n.title,link:n.link,children:vs(n.children)}),vs=n=>n?n.map(e=>J2(e)):[],uu=(n,e)=>[{text:n.title,children:vs(e)}],du=(n,e,a,t="")=>{const i=(r,s)=>{const o=Ie(r)?at(Xa(s,r)):Ie(r.link)?{...r,link:qc(r.link)?at(Xa(s,r.link)).link:r.link}:r;if("children"in o)return{...o,children:o.children.map(l=>i(l,Xa(s,o.prefix)))};if(o.link===a){const l=e[0]?.level===1?e[0].children:e;return{...o,children:vs(l)}}return o};return n.map(r=>i(r,t))},X2=(n,e,a,t)=>{const i=F0(n).sort((r,s)=>s.length-r.length);for(const r of i)if(Xc(decodeURI(t),r)){const s=n[r];return s?s==="heading"?uu(e,a):du(s,a,t,r):[]}return console.warn(`${decodeURI(t)} is missing sidebar config.`),[]},mu=Symbol("sidebarItems"),bs=()=>{const n=ee(mu);if(!n)throw new Error("useSidebarItems() is called without provider.");return n},Z2=(n,e,a,t,i)=>n===!1?[]:n==="heading"?uu(e,i):Array.isArray(n)?du(n,i,a,t):Zr(n)?X2(n,e,i,a):[],q2=()=>{const{frontmatter:n,page:e,routeLocale:a,themeLocale:t}=$n(),i=G2(),r=zc(),s=B(()=>!n.value.home&&(n.value.sidebar??t.value.sidebar??"heading")),o=B(()=>Z2(s.value,e.value,r.value,a.value,i.value));la(mu,o)},Q2=yn({__name:"Badge",props:{type:{default:"tip"},text:{default:""},vertical:{default:""}},setup(n){return(e,a)=>(N(),W("span",{class:Kn(["vp-badge",n.type]),style:En(n.vertical?{verticalAlign:n.vertical}:"")},[An(e.$slots,"default",{},()=>[he(en(n.text),1)])],6))}}),n4=yn({__name:"VPFadeSlideYTransition",emits:["beforeEnter","beforeLeave"],setup(n){return(e,a)=>(N(),Pn(it,{name:"fade-in-down",mode:"out-in",onBeforeEnter:a[0]||(a[0]=t=>e.$emit("beforeEnter")),onBeforeLeave:a[1]||(a[1]=t=>e.$emit("beforeLeave"))},{default:Sn(()=>[An(e.$slots,"default")]),_:3}))}}),e4={key:0,class:"vp-features"},a4=yn({__name:"VPHomeFeatures",setup(n){const{frontmatter:e}=$n(),a=B(()=>e.value.features??[]);return(t,i)=>a.value.length?(N(),W("div",e4,[(N(!0),W(gn,null,ie(a.value,r=>(N(),W("div",{key:r.title,class:"vp-feature"},[T("h2",null,en(r.title),1),T("p",null,en(r.details),1)]))),128))])):mn("",!0)}}),t4=["innerHTML"],i4=["textContent"],r4=yn({__name:"VPHomeFooter",setup(n){const e=jc(),a=B(()=>e.value.footer),t=B(()=>e.value.footerHtml);return(i,r)=>a.value?(N(),W(gn,{key:0},[t.value?(N(),W("div",{key:0,class:"vp-footer","vp-footer":"",innerHTML:a.value},null,8,t4)):(N(),W("div",{key:1,class:"vp-footer","vp-footer":"",textContent:en(a.value)},null,8,i4))],64)):mn("",!0)}}),Ze=yn({__name:"VPAutoLink",props:{config:{}},setup(n){return(e,a)=>(N(),Pn(sn(U1),{config:n.config},Ud({before:Sn(()=>[An(e.$slots,"before",Ji(li(n.config)))]),after:Sn(()=>[An(e.$slots,"after",Ji(li(n.config)))]),_:2},[e.$slots.default?{name:"default",fn:Sn(()=>[An(e.$slots,"default",Ji(li(n.config)))]),key:"0"}:void 0]),1032,["config"]))}}),s4={class:"vp-hero"},o4={key:0,id:"main-title"},l4={key:1,class:"vp-hero-description"},c4={key:2,class:"vp-hero-actions"},u4=yn({__name:"VPHomeHero",setup(n){const{frontmatter:e,siteLocale:a}=$n(),t=hs(),i=B(()=>e.value.heroText===null?null:e.value.heroText||a.value.title||"Hello"),r=B(()=>e.value.tagline===null?null:e.value.tagline||a.value.description||"Welcome to your VuePress site"),s=B(()=>t.value&&e.value.heroImageDark!==void 0?e.value.heroImageDark:e.value.heroImage),o=B(()=>e.value.heroAlt||i.value||"hero"),l=B(()=>e.value.heroHeight??280),u=B(()=>Array.isArray(e.value.actions)?e.value.actions.map(({type:d="primary",...m})=>({type:d,...m})):[]),c=()=>{if(!s.value)return null;const d=rn("img",{class:"vp-hero-image",src:ts(s.value),alt:o.value,height:l.value});return e.value.heroImageDark===void 0?d:rn(es,()=>d)};return(d,m)=>(N(),W("header",s4,[cn(c),i.value?(N(),W("h1",o4,en(i.value),1)):mn("",!0),r.value?(N(),W("p",l4,en(r.value),1)):mn("",!0),u.value.length?(N(),W("p",c4,[(N(!0),W(gn,null,ie(u.value,p=>(N(),Pn(Ze,{key:p.text,class:Kn(["vp-hero-action-button",[p.type]]),config:p},null,8,["class","config"]))),128))])):mn("",!0)]))}}),d4={class:"vp-home"},m4={"vp-content":""},p4=yn({__name:"VPHome",setup(n){return(e,a)=>(N(),W("main",d4,[cn(u4),cn(a4),T("div",m4,[cn(sn(as))]),cn(r4)]))}}),f4=["aria-hidden"],h4=yn({__name:"VPNavbarBrand",setup(n){const{routeLocale:e,siteLocale:a,themeLocale:t}=$n(),i=hs(),r=B(()=>t.value.home||e.value),s=B(()=>a.value.title),o=B(()=>i.value&&t.value.logoDark!==void 0?t.value.logoDark:t.value.logo),l=B(()=>t.value.logoAlt??s.value),u=B(()=>s.value.toLocaleUpperCase().trim()===l.value.toLocaleUpperCase().trim()),c=()=>{if(!o.value)return null;const d=rn("img",{class:"vp-site-logo",src:ts(o.value),alt:l.value});return t.value.logoDark===void 0?d:rn(es,()=>d)};return(d,m)=>(N(),Pn(sn(Ui),{to:r.value},{default:Sn(()=>[cn(c),s.value?(N(),W("span",{key:0,class:Kn(["vp-site-name",{"vp-hide-mobile":o.value}]),"aria-hidden":u.value},en(s.value),11,f4)):mn("",!0)]),_:1},8,["to"]))}}),v4=["aria-label"],b4={class:"title"},g4=["aria-label"],y4={class:"title"},w4={class:"vp-navbar-dropdown"},_4={class:"vp-navbar-dropdown-subtitle"},S4={key:1},k4={class:"vp-navbar-dropdown-subitem-wrapper"},x4=yn({__name:"VPNavbarDropdown",props:{config:{}},setup(n){const[e,a]=ls(),t=B(()=>n.config.ariaLabel||n.config.text),i=(s,o)=>o[o.length-1]===s,r=s=>{s.detail===0?a():a(!1)};return jt(()=>{a(!1)}),(s,o)=>(N(),W("div",{class:Kn(["vp-navbar-dropdown-wrapper",{open:sn(e)}])},[T("button",{class:"vp-navbar-dropdown-title",type:"button","aria-label":t.value,onClick:r},[T("span",b4,en(n.config.text),1),o[1]||(o[1]=T("span",{class:"arrow down"},null,-1))],8,v4),T("button",{class:"vp-navbar-dropdown-title-mobile",type:"button","aria-label":t.value,onClick:o[0]||(o[0]=()=>sn(a)())},[T("span",y4,en(n.config.text),1),T("span",{class:Kn(["arrow",sn(e)?"down":"right"])},null,2)],8,g4),cn(sn(Y0),null,{default:Sn(()=>[Ca(T("ul",w4,[(N(!0),W(gn,null,ie(n.config.children,l=>(N(),W("li",{key:l.text,class:"vp-navbar-dropdown-item"},["children"in l?(N(),W(gn,{key:0},[T("h4",_4,[l.link?(N(),Pn(Ze,{key:0,config:l,onFocusout:()=>{i(l,n.config.children)&&l.children.length===0&&(e.value=!1)}},null,8,["config","onFocusout"])):(N(),W("span",S4,en(l.text),1))]),T("ul",k4,[(N(!0),W(gn,null,ie(l.children,u=>(N(),W("li",{key:u.link,class:"vp-navbar-dropdown-subitem"},[cn(Ze,{config:u,onFocusout:()=>{i(u,l.children)&&i(l,n.config.children)&&sn(a)(!1)}},null,8,["config","onFocusout"])]))),128))])],64)):(N(),Pn(Ze,{key:1,config:l,onFocusout:()=>{i(l,n.config.children)&&sn(a)(!1)}},null,8,["config","onFocusout"]))]))),128))],512),[[Oa,sn(e)]])]),_:1})],2))}}),pu=(n,e="")=>Ie(n)?at(Xa(e,n)):"children"in n?{...n,children:n.children.map(a=>pu(a,Xa(e,n.prefix)))}:{...n,link:qc(n.link)?at(Xa(e,n.link)).link:n.link},B4=()=>{const{themeLocale:n}=$n();return B(()=>(n.value.navbar||[]).map(e=>pu(e)))},fu=n=>!Kt(n)||n.includes("github.com")?"GitHub":n.includes("bitbucket.org")?"Bitbucket":n.includes("gitlab.com")?"GitLab":n.includes("gitee.com")?"Gitee":null,A4=()=>{const{themeLocale:n}=$n(),e=B(()=>n.value.repo),a=B(()=>e.value?fu(e.value):null),t=B(()=>e.value&&!Kt(e.value)?`https://github.com/${e.value}`:e.value),i=B(()=>t.value?n.value.repoLabel?n.value.repoLabel:a.value===null?"Source":a.value:null);return B(()=>!t.value||!i.value?[]:[{text:i.value,link:t.value}])},E4=()=>{const n=rt(),e=G0(),{routeLocale:a,site:t,siteLocale:i,theme:r,themeLocale:s}=$n(),o=us();return B(()=>{const l=Object.keys(t.value.locales);if(l.length<2)return[];const u=n.path,c=n.fullPath;return[{text:`${s.value.selectLanguageText}`,ariaLabel:`${s.value.selectLanguageAriaLabel??s.value.selectLanguageText}`,children:l.map(m=>{const p=t.value.locales?.[m]??{},w=r.value.locales?.[m]??{},h=`${p.lang}`,g=w.selectLanguageName??h;if(h===i.value.lang)return{text:g,activeMatch:".",link:o.value?c:u};const _=u.replace(a.value,m);return{text:g,link:e.value.some(S=>S===_)?o.value?c.replace(u,_):_:w.home??m}})}]})},T4="719px",I4={mobile:T4};var Mt;(function(n){n.Mobile="mobile"})(Mt||(Mt={}));const M4={[Mt.Mobile]:Number.parseInt(I4.mobile.replace("px",""),10)},hu=(n,e)=>{const a=M4[n];Number.isInteger(a)&&(ce("orientationchange",()=>{e(a)}),ce("resize",()=>{e(a)}),ae(()=>{e(a)}))},C4=["aria-label"],vu=yn({__name:"VPNavbarItems",setup(n){const{themeLocale:e}=$n(),a=B4(),t=E4(),i=A4(),r=vn(!1),s=B(()=>e.value.navbarLabel??"site navigation"),o=B(()=>[...a.value,...t.value,...i.value]);return hu(Mt.Mobile,l=>{r.value=window.innerWidth<l}),(l,u)=>o.value.length?(N(),W("nav",{key:0,class:"vp-navbar-items","aria-label":s.value},[(N(!0),W(gn,null,ie(o.value,c=>(N(),W("div",{key:c.text,class:"vp-navbar-item"},["children"in c?(N(),Pn(x4,{key:0,class:Kn({mobile:r.value}),config:c},null,8,["class","config"])):(N(),Pn(Ze,{key:1,config:c},null,8,["config"]))]))),128))],8,C4)):mn("",!0)}}),be=(n,e)=>{const a=n.__vccOpts||n;for(const[t,i]of e)a[t]=i;return a},P4={},O4={class:"dark-icon",viewBox:"0 0 32 32"};function R4(n,e){return N(),W("svg",O4,[...e[0]||(e[0]=[T("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)])])}const N4=be(P4,[["render",R4]]),D4={},L4={class:"light-icon",viewBox:"0 0 32 32"};function H4(n,e){return N(),W("svg",L4,[...e[0]||(e[0]=[gm('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)])])}const F4=be(D4,[["render",H4]]),V4=["title"],K4=yn({__name:"VPToggleColorModeButton",setup(n){const{themeLocale:e}=$n(),a=hs(),t=()=>{a.value=!a.value};return(i,r)=>(N(),W("button",{type:"button",class:"vp-toggle-color-mode-button",title:sn(e).toggleColorMode,onClick:t},[Ca(cn(F4,null,null,512),[[Oa,!sn(a)]]),Ca(cn(N4,null,null,512),[[Oa,sn(a)]])],8,V4))}}),z4=["title"],j4=yn({__name:"VPToggleSidebarButton",emits:["toggle"],setup(n){const{themeLocale:e}=$n();return(a,t)=>(N(),W("div",{class:"vp-toggle-sidebar-button",title:sn(e).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:t[0]||(t[0]=i=>a.$emit("toggle"))},[...t[1]||(t[1]=[T("div",{class:"icon","aria-hidden":"true"},[T("span"),T("span"),T("span")],-1)])],8,z4))}}),Y4={ref:"navbar-brand"},U4=yn({__name:"VPNavbar",emits:["toggleSidebar"],setup(n){const e=nu("SearchBox")?Ht("SearchBox"):()=>null,{themeLocale:a}=$n(),t=Ps("navbar"),i=Ps("navbar-brand"),r=vn(0),s=B(()=>r.value?{maxWidth:`${r.value}px`}:{}),o=(l,u)=>{const c=l?.ownerDocument.defaultView?.getComputedStyle(l,null)[u],d=Number.parseInt(c,10);return Number.isNaN(d)?0:d};return hu(Mt.Mobile,l=>{const u=o(t.value,"paddingLeft")+o(t.value,"paddingRight");window.innerWidth<l?r.value=0:r.value=t.value.offsetWidth-u-(i.value?.offsetWidth??0)}),(l,u)=>(N(),W("header",{ref_key:"navbar",ref:t,class:"vp-navbar","vp-navbar":""},[cn(j4,{onToggle:u[0]||(u[0]=c=>l.$emit("toggleSidebar"))}),T("span",Y4,[cn(h4)],512),T("div",{class:"vp-navbar-items-wrapper",style:En(s.value)},[An(l.$slots,"before"),cn(vu,{class:"vp-hide-mobile"}),An(l.$slots,"after"),sn(a).colorModeSwitch?(N(),Pn(K4,{key:0})):mn("",!0),cn(sn(e))],4)],512))}}),G4={},W4={class:"edit-icon",viewBox:"0 0 1024 1024"};function $4(n,e){return N(),W("svg",W4,[...e[0]||(e[0]=[T("g",{fill:"currentColor"},[T("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),T("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})],-1)])])}const J4=be(G4,[["render",$4]]),X4={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Z4=({docsRepo:n,editLinkPattern:e})=>{if(e)return e;const a=fu(n);return a!==null?X4[a]:null},q4=({docsRepo:n,docsBranch:e,docsDir:a,filePathRelative:t,editLinkPattern:i})=>{if(!t)return null;const r=Z4({docsRepo:n,editLinkPattern:i});return r?r.replace(/:repo/,Kt(n)?n:`https://github.com/${n}`).replace(/:branch/,e).replace(/:path/,Tc(`${Ec(a)}/${t}`)):null},Q4=()=>{const{frontmatter:n,page:e,themeLocale:a}=$n();return B(()=>{if(!(n.value.editLink??a.value.editLink??!0))return null;const{repo:i,docsRepo:r=i,docsBranch:s="main",docsDir:o="",editLinkText:l}=a.value;if(!r)return null;const u=q4({docsRepo:r,docsBranch:s,docsDir:o,filePathRelative:e.value.filePathRelative,editLinkPattern:n.value.editLinkPattern??a.value.editLinkPattern});return u?{text:l??"Edit this page",link:u}:null})},n3={class:"vp-page-meta"},e3={key:0,class:"vp-meta-item edit-link"},a3={class:"vp-meta-item git-info"},t3={key:0,class:"vp-meta-item last-updated"},i3={class:"meta-item-label"},r3=["datetime"],s3={key:1,class:"vp-meta-item contributors"},o3={class:"meta-item-label"},l3={class:"meta-item-info"},c3=["title"],u3=yn({__name:"VPPageMeta",setup(n){const{frontmatter:e,themeLocale:a}=$n(),t=au(()=>e.value.contributors??a.value.contributors??!0),i=Q4(),r=tu(()=>e.value.lastUpdated??a.value.lastUpdated??!0);return(s,o)=>(N(),W("footer",n3,[sn(i)?(N(),W("div",e3,[cn(Ze,{class:"label",config:sn(i)},{before:Sn(()=>[cn(J4)]),_:1},8,["config"])])):mn("",!0),T("div",a3,[sn(r)?(N(),W("div",t3,[T("span",i3,en(sn(a).lastUpdatedText??sn(r).locale)+": ",1),T("time",{class:"meta-item-info",datetime:sn(r).iso,"data-allow-mismatch":""},en(sn(r).text),9,r3)])):mn("",!0),sn(t).length?(N(),W("div",s3,[T("span",o3,en(sn(a).contributorsText)+": ",1),T("span",l3,[(N(!0),W(gn,null,ie(sn(t),(l,u)=>(N(),W(gn,{key:u},[T("span",{class:"contributor",title:`email: ${l.email}`},en(l.name),9,c3),u!==sn(t).length-1?(N(),W(gn,{key:0},[he(", ")],64)):mn("",!0)],64))),128))])])):mn("",!0)])]))}}),d3=()=>{const n=zt(),e=rt();return a=>{a&&(Zc(a)?e.fullPath!==a&&n.push(a):Vt(a)?window.open(a):n.push(encodeURI(a)))}},Uo=(n,e)=>n===!1?!1:Ie(n)?at(n,e):Zr(n)?{...n,link:at(n.link,e).link}:null,Nr=(n,e,a)=>{const t=n.findIndex(r=>r.link===e);if(t!==-1){const r=n[t+a];return r?r.link?r:"prefix"in r&&!It(r.prefix).notFound?{...r,link:r.prefix}:null:null}for(const r of n)if("children"in r){const s=Nr(r.children,e,a);if(s)return s}const i=n.findIndex(r=>"prefix"in r&&r.prefix===e);if(i!==-1){const r=n[i+a];return r?r.link?r:"prefix"in r&&!It(r.prefix).notFound?{...r,link:r.prefix}:null:null}return null},m3=()=>{const{frontmatter:n,themeLocale:e}=$n(),a=bs(),t=zc(),i=B(()=>{const s=Uo(n.value.prev,t.value);return s===!1?null:s??(e.value.prev===!1?null:Nr(a.value,t.value,-1))}),r=B(()=>{const s=Uo(n.value.next,t.value);return s===!1?null:s??(e.value.next===!1?null:Nr(a.value,t.value,1))});return{prevLink:i,nextLink:r}},p3=["aria-label"],f3={class:"hint"},h3={class:"link"},v3={class:"external-link"},b3={class:"hint"},g3={class:"link"},y3={class:"external-link"},w3=yn({__name:"VPPageNav",setup(n){const{themeLocale:e}=$n(),a=d3(),{prevLink:t,nextLink:i}=m3(),r=B(()=>e.value.pageNavbarLabel??"page navigation");return ce("keydown",s=>{s.altKey&&(s.key==="ArrowRight"?i.value&&(a(i.value.link),s.preventDefault()):s.key==="ArrowLeft"&&t.value&&(a(t.value.link),s.preventDefault()))}),(s,o)=>sn(t)||sn(i)?(N(),W("nav",{key:0,class:"vp-page-nav","aria-label":r.value},[sn(t)?(N(),Pn(Ze,{key:0,class:"prev",config:sn(t)},{default:Sn(()=>[T("div",f3,[o[0]||(o[0]=T("span",{class:"arrow left"},null,-1)),he(" "+en(sn(e).prev??"Prev"),1)]),T("div",h3,[T("span",v3,en(sn(t).text),1)])]),_:1},8,["config"])):mn("",!0),sn(i)?(N(),Pn(Ze,{key:1,class:"next",config:sn(i)},{default:Sn(()=>[T("div",b3,[he(en(sn(e).next??"Next")+" ",1),o[1]||(o[1]=T("span",{class:"arrow right"},null,-1))]),T("div",g3,[T("span",y3,en(sn(i).text),1)])]),_:1},8,["config"])):mn("",!0)],8,p3)):mn("",!0)}}),_3={class:"vp-page"},S3={"vp-content":""},k3=yn({__name:"VPPage",setup(n){return(e,a)=>(N(),W("main",_3,[An(e.$slots,"top"),T("div",S3,[An(e.$slots,"content-top"),cn(sn(as),{id:"content"}),An(e.$slots,"content-bottom")]),cn(u3),cn(w3),An(e.$slots,"bottom")]))}}),x3=yn({__name:"VPDropdownTransition",setup(n){const e=t=>{t.style.height=`${t.scrollHeight}px`},a=t=>{t.style.height=""};return(t,i)=>(N(),Pn(it,{name:"vp-dropdown",onEnter:e,onAfterEnter:a,onBeforeLeave:e},{default:Sn(()=>[An(t.$slots,"default")]),_:3}))}}),Go=n=>decodeURI(n).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),B3=(n,e)=>{if(e.hash===n)return!0;const a=Go(e.path),t=Go(n);return a===t},bu=(n,e)=>n.link&&B3(n.link,e)?!0:"children"in n?n.children.some(a=>bu(a,e)):!1,A3={class:"vp-sidebar-children"},E3=yn({__name:"VPSidebarItem",props:{item:{},depth:{default:0}},setup(n){const e=rt(),a=zt(),t=B(()=>n.item.collapsible),i=B(()=>bu(n.item,e)),r=B(()=>({"vp-sidebar-item":!0,"vp-sidebar-heading":n.depth===0,active:i.value,collapsible:t.value})),s=B(()=>t.value?i.value:!0),[o,l]=ls(s.value),u=d=>{t.value&&(d.preventDefault(),l())},c=a.afterEach(()=>{pa(()=>{o.value=s.value})});return Fi(()=>{c()}),(d,m)=>{const p=Ht("VPSidebarItem",!0);return N(),W("li",null,[n.item.link?(N(),Pn(Ze,{key:0,class:Kn(r.value),config:n.item},{after:Sn(()=>[t.value?(N(),W("span",{key:0,class:Kn(["arrow",sn(o)?"down":"right"])},null,2)):mn("",!0)]),_:1},8,["class","config"])):(N(),W("p",{key:1,tabindex:"0",class:Kn(r.value),onClick:u,onKeydown:lp(u,["enter"])},[he(en(n.item.text)+" ",1),t.value?(N(),W("span",{key:0,class:Kn(["arrow",sn(o)?"down":"right"])},null,2)):mn("",!0)],34)),"children"in n.item&&n.item.children.length?(N(),Pn(x3,{key:2},{default:Sn(()=>[Ca(T("ul",A3,[(N(!0),W(gn,null,ie(n.item.children,w=>(N(),Pn(p,{key:`${n.depth}${w.text}${w.link}`,item:w,depth:n.depth+1},null,8,["item","depth"]))),128))],512),[[Oa,sn(o)]])]),_:1})):mn("",!0)])}}}),T3={key:0,class:"vp-sidebar-items"},I3=yn({__name:"VPSidebarItems",setup(n){const e=rt(),a=bs();return ae(()=>{Vn(()=>e.hash,t=>{const i=document.querySelector(".vp-sidebar");if(!i)return;const r=document.querySelector(`.vp-sidebar .vp-sidebar-item.auto-link[href="${e.path}${t}"]`);if(!r)return;const{top:s,height:o}=i.getBoundingClientRect(),{top:l,height:u}=r.getBoundingClientRect();l<s?r.scrollIntoView(!0):l+u>s+o&&r.scrollIntoView(!1)})}),(t,i)=>sn(a).length?(N(),W("ul",T3,[(N(!0),W(gn,null,ie(sn(a),r=>(N(),Pn(E3,{key:`${r.text}${r.link}`,item:r},null,8,["item"]))),128))])):mn("",!0)}}),M3={class:"vp-sidebar","vp-sidebar":""},C3=yn({__name:"VPSidebar",setup(n){return(e,a)=>(N(),W("aside",M3,[cn(vu),An(e.$slots,"top"),cn(I3),An(e.$slots,"bottom")]))}}),P3=yn({__name:"Layout",setup(n){const{frontmatter:e,page:a,themeLocale:t}=$n(),i=B(()=>e.value.navbar??t.value.navbar??!0),r=bs(),s=vn(!1),o=g=>{s.value=typeof g=="boolean"?g:!s.value},l={x:0,y:0},u=g=>{l.x=g.changedTouches[0].clientX,l.y=g.changedTouches[0].clientY},c=g=>{const _=g.changedTouches[0].clientX-l.x,S=g.changedTouches[0].clientY-l.y;Math.abs(_)>Math.abs(S)&&Math.abs(_)>40&&(_>0&&l.x<=80?o(!0):o(!1))},d=B(()=>e.value.externalLinkIcon??t.value.externalLinkIcon??!0),m=B(()=>[{"no-navbar":!i.value,"no-sidebar":!r.value.length,"sidebar-open":s.value,"external-link-icon":d.value},e.value.pageClass]);jt(()=>{o(!1)});const p=cu(),w=p.resolve,h=p.pending;return(g,_)=>(N(),W("div",{class:Kn(["vp-theme-container",m.value]),"vp-container":"",onTouchstart:u,onTouchend:c},[An(g.$slots,"navbar",{},()=>[i.value?(N(),Pn(U4,{key:0,onToggleSidebar:o},{before:Sn(()=>[An(g.$slots,"navbar-before")]),after:Sn(()=>[An(g.$slots,"navbar-after")]),_:3})):mn("",!0)]),T("div",{class:"vp-sidebar-mask",onClick:_[0]||(_[0]=S=>o(!1))}),An(g.$slots,"sidebar",{},()=>[cn(C3,null,{top:Sn(()=>[An(g.$slots,"sidebar-top")]),bottom:Sn(()=>[An(g.$slots,"sidebar-bottom")]),_:3})]),An(g.$slots,"page",{},()=>[cn(n4,{onBeforeEnter:sn(w),onBeforeLeave:sn(h)},{default:Sn(()=>[sn(e).home?(N(),Pn(p4,{key:0})):(N(),Pn(k3,{key:sn(a).path},{top:Sn(()=>[An(g.$slots,"page-top")]),"content-top":Sn(()=>[An(g.$slots,"page-content-top")]),"content-bottom":Sn(()=>[An(g.$slots,"page-content-bottom")]),bottom:Sn(()=>[An(g.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"])])],34))}}),O3={class:"vp-theme-container","vp-container":""},R3={class:"page"},N3={"vp-content":""},D3=yn({__name:"NotFound",setup(n){const{routeLocale:e,theme:a,themeLocale:t}=$n(),i=us(),r=B(()=>i.value?e.value:"/"),s=B(()=>{if(i.value)return t.value;const{locales:d,...m}=a.value;return{...m,...d?.["/"]}}),o=B(()=>s.value.home??r.value),l=B(()=>s.value.backToHome??"Back to home"),u=B(()=>s.value.notFound??["Not Found"]),c=B(()=>i.value?u.value[Math.floor(Math.random()*u.value.length)]:u.value[0]);return(d,m)=>(N(),W("div",O3,[T("main",R3,[T("div",N3,[m[0]||(m[0]=T("h1",null,"404",-1)),T("blockquote",null,en(c.value),1),cn(sn(Ui),{to:o.value},{default:Sn(()=>[he(en(l.value),1)]),_:1},8,["to"])])])]))}}),L3=be(D3,[["__scopeId","data-v-91f12681"]]),H3=ea({enhance({app:n,router:e}){nu("Badge")||n.component("Badge",Q2);const a=e.options.scrollBehavior;e.options.scrollBehavior=async(...t)=>(await cu().wait(),a(...t))},setup(){U2(),W2(),q2()},layouts:{Layout:P3,NotFound:L3}}),F3=Object.freeze(Object.defineProperty({__proto__:null,default:H3},Symbol.toStringTag,{value:"Module"})),V3=()=>{if(typeof document>"u")return;const n=(i,r)=>{if(i.naturalWidth>0&&r>0){const s=i.naturalWidth/r;i.setAttribute("width",s.toString())}},e=()=>{document.querySelectorAll("main img").forEach(r=>{try{const s=decodeURIComponent(new URL(r.src).pathname),o=/-((?=\d|\.\d)\d*\.?\d*)x(?:-[0-9a-f]{7,})?\.[0-9a-z]+$/i.exec(s);if(!o)return;const l=parseFloat(o[1]);r.complete?n(r,l):r.onload=()=>{n(r,l)}}catch(s){console.error("Image scaling error:",s)}})};e();const a=new MutationObserver(i=>{i.forEach(r=>{r.type==="childList"&&e()})}),t=document.querySelector("main");t&&a.observe(t,{childList:!0,subtree:!0})};let Ya=null;const Bi=new WeakMap,K3="200px 0px",z3=n=>{for(const e of n){if(!e.isIntersecting||!(e.boundingClientRect.height>0)&&e.intersectionRatio<=0)continue;const t=Bi.get(e.target);t&&(Bi.delete(e.target),Ya?.unobserve(e.target),t())}},j3=()=>Ya||(Ya=new IntersectionObserver(z3,{rootMargin:K3,threshold:.01}),Ya),Y3=(n,e)=>{if(n){if(typeof IntersectionObserver>"u"){e();return}Bi.set(n,e),j3().observe(n)}},Wo=n=>{n&&(Bi.delete(n),Ya?.unobserve(n))},Ct=Object.assign({inheritAttrs:!1},{__name:"LazyImage",props:{src:{type:String,required:!0},fallbackSrc:{type:String,default:""},tag:{type:String,default:"span"},renderer:{type:[String,Object],default:null}},setup(n){const e=n,a=Wd(),t=B(()=>e.renderer||e.tag),i=vn(null),r=vn({}),s=new Set,o=new Set,l=m=>{const p=m.match(/url\((['"]?)(.*?)\1\)/);return p?p[2]:m},u=m=>{r.value={backgroundImage:`url("${m}")`}},c=(m,p)=>{if(!m||s.has(m)){console.error(`所有图片源加载均失败: ${m||"(未配置备选源)"}`);return}const w=new Image;w.onload=()=>p(m),w.onerror=()=>{s.add(m),console.error(`所有图片源加载均失败: ${m}`)},w.src=m},d=(m,p)=>{const w=h=>{l(e.src)===m&&(o.add(h),u(h))};if(o.has(m)){w(m);return}if(m&&!s.has(m)){const h=new Image;h.onload=()=>w(m),h.onerror=()=>{s.add(m),c(p,w)},h.src=m;return}c(p,w)};return Cl(m=>{const p=i.value,w=e.src,h=e.fallbackSrc;!p||!w||(Y3(p,()=>{d(l(w),h?l(h):"")}),m(()=>Wo(p)))}),tt(()=>{Wo(i.value)}),(m,p)=>(N(),Pn(Yd(t.value),fc({ref_key:"rootRef",ref:i,style:r.value},sn(a)),{default:Sn(()=>[An(m.$slots,"default")]),_:3},16,["style"]))}}),U3=()=>{if(typeof window>"u")return .4;const n=localStorage.getItem("global_audio_volume");return n!==null?parseFloat(n):.4},Ee=ua({src:"",title:"",isPlaying:!1,volume:U3(),playbackRate:1}),G3=B(()=>Ee.src),gs=()=>({state:da(Ee),currentSrc:G3,playAudio:(t,i="未知音频",r=1)=>{if(Ee.src===t){Ee.isPlaying=!Ee.isPlaying;return}Ee.src=t,Ee.title=i,Ee.isPlaying=!0,Ee.playbackRate=r},pauseAudio:()=>{Ee.isPlaying=!1},setVolume:t=>{if(typeof t!="number"||isNaN(t))return;const i=Math.max(0,Math.min(1,t));Ee.volume=i,typeof window<"u"&&localStorage.setItem("global_audio_volume",i.toString())}}),W3=1,$3=90,vr="#AAAAAA",J3="#000",wt=n=>{const e=parseFloat(n);if(Number.isNaN(e))return vr;const a=Math.round(e*10);return a<W3?vr:a>$3?J3:Z3[a]??vr},br=2.2,ii=[[.1,66,144,251],[1.25,79,192,255],[2,79,255,213],[2.5,124,255,79],[3.3,246,240,92],[4.2,255,104,104],[4.9,255,78,111],[5.8,198,69,184],[6.7,101,99,222],[7.7,24,21,142],[9,0,0,0]],X3=n=>{if(n<.1)return"#AAAAAA";if(n>=9)return"#000000";let e=ii.findIndex(m=>n<m[0]);e===-1&&(e=ii.length-1);const[a,t,i,r]=ii[e-1],[s,o,l,u]=ii[e],c=(n-a)/(s-a),d=(m,p)=>{const w=Math.pow((1-c)*Math.pow(m,br)+c*Math.pow(p,br),1/br);return Math.round(w).toString(16).padStart(2,"0")};return`#${d(t,o)}${d(i,l)}${d(r,u)}`},Z3=(()=>{const n=new Array(101);for(let e=0;e<=100;e++)n[e]=X3(e/10);return n})(),Za={NF:{name:"No Fail",bg:"#0068B7",color:"#FFFFFF"},EZ:{name:"Easy",bg:"#22AC38",color:"#FFFFFF"},TD:{name:"Touch Device",bg:"#7ECEF4",color:"#000000"},HD:{name:"Hidden",bg:"#F8B551",color:"#FFFFFF"},HR:{name:"Hard Rock",bg:"#D32F2F",color:"#FFFFFF"},SD:{name:"Sudden Death",bg:"#FF9800",color:"#FFFFFF"},DT:{name:"Double Time",bg:"#00A0E9",color:"#FFFFFF"},RX:{name:"Relax",bg:"#BFC31F",color:"#FFFFFF"},HT:{name:"Half Time",bg:"#BDBDBD",color:"#000000"},NC:{name:"Nightcore",bg:"#9922EE",color:"#FFFFFF"},FL:{name:"Flashlight",bg:"#000000",color:"#FFFFFF"},AT:{name:"Autoplay",bg:"#00B7EE",color:"#FFFFFF"},SO:{name:"Spun Out",bg:"#B28850",color:"#FFFFFF"},AP:{name:"Auto Pilot",bg:"#B3D465",color:"#FFFFFF"},PF:{name:"Perfect",bg:"#FFF100",color:"#000000"},DC:{name:"Daycore",bg:"#DADADA",color:"#000000"},BL:{name:"Blinds",bg:"#EB6100",color:"#FFFFFF"},ST:{name:"Strict Tracking",bg:"#D32F2F",color:"#FFFFFF"},TP:{name:"Target Practice",bg:"#920783",color:"#FFFFFF"},DA:{name:"Difficulty Adjust",bg:"#601986",color:"#FFFFFF"},CL:{name:"Classic",bg:"#920783",color:"#FFFFFF"},RD:{name:"Random",bg:"#009944",color:"#FFFFFF"},MR:{name:"Mirror",bg:"#007130",color:"#FFFFFF"},CN:{name:"Cinema",bg:"#00B7EE",color:"#FFFFFF"},V2:{name:"Score V2",bg:"#000000",color:"#FFFFFF"},SV2:{name:"Score V2",bg:"#000000",color:"#FFFFFF"},SW:{name:"Swap",bg:"#7B0046",color:"#FFFFFF"},FI:{name:"Fade In",bg:"#F8B551",color:"#000000"},CO:{name:"Cover",bg:"#F8B551",color:"#000000"},DS:{name:"Dual Stages",bg:"#9E005E",color:"#FFFFFF"},IN:{name:"Invert",bg:"#5F5BA8",color:"#FFFFFF"},HO:{name:"Hold Off",bg:"#8781BE",color:"#FFFFFF"},"1K":{name:"1 Key",bg:"#616161",color:"#FFFFFF"},"2K":{name:"2 Keys",bg:"#616161",color:"#FFFFFF"},"3K":{name:"3 Keys",bg:"#616161",color:"#FFFFFF"},"4K":{name:"4 Keys",bg:"#616161",color:"#FFFFFF"},"5K":{name:"5 Keys",bg:"#616161",color:"#FFFFFF"},"6K":{name:"6 Keys",bg:"#616161",color:"#FFFFFF"},"7K":{name:"7 Keys",bg:"#616161",color:"#FFFFFF"},"8K":{name:"8 Keys",bg:"#616161",color:"#FFFFFF"},"9K":{name:"9 Keys",bg:"#616161",color:"#FFFFFF"},"10K":{name:"10 Keys",bg:"#616161",color:"#FFFFFF"},NM:{name:"No Mod",bg:"#22AC38",color:"#FFFFFF",desc:"不允许玩家选择模组"},RC:{name:"Rice",bg:"#22AC38",color:"#FFFFFF",desc:"含有大量普通音符的图"},LN:{name:"Lone Note",bg:"#F8B551",color:"#FFFFFF",desc:"含有大量长按音符的图"},FE:{name:"Free Mod",bg:"#B57BFF",color:"#FFFFFF",alias:"FM",desc:"允许玩家任意选择模组"},FR:{name:"Free Mod",bg:"#B57BFF",color:"#FFFFFF",alias:"FM",desc:"允许玩家任意选择模组"},FM:{name:"Force Mod",bg:"#9922EE",color:"#FFFFFF",desc:"玩家必须选择模组"},HB:{name:"Hybrid",bg:"#00A0E9",color:"#FFFFFF",desc:"各种音符交错繁杂的图"},SV:{name:"Speed Variation",bg:"#9922EE",color:"#FFFFFF",desc:"含有下落速度突变的图"},TB:{name:"Tiebreaker",bg:"#000000",color:"#FFFFFF",desc:"决胜图"},AC:{name:"Accuracy",bg:"#FF9800",color:"#000000",desc:"按准确率高低排名赋分"},ACC:{name:"Accuracy",bg:"#FF9800",color:"#000000",desc:"按准确率高低排名赋分"},EX:{name:"Extra",bg:"#FF9800",color:"#000000",desc:"额外图"},SP:{name:"Special",bg:"#9E040D",color:"#FFFFFF",desc:"特殊图"},JB:{name:"Jiba",bg:"#9E040D",color:"#FFFFFF",desc:"特别难打或卡手的图"},SV1:{name:"ScoreV1",bg:"#000000",color:"#FFFFFF",desc:"需要采用第一版计分规则"},V1:{name:"ScoreV1",bg:"#000000",color:"#FFFFFF",desc:"需要采用第一版计分规则"},EP:{name:"Easy Plus",bg:"#22AC38",color:"#FFFFFF",desc:"新手追加"},NP:{name:"Normal Plus",bg:"#22AC38",color:"#FFFFFF",desc:"新手追加"},NS:{name:"Normal Short",bg:"#BDBDBD",color:"#000000",desc:"常规短图"},NL:{name:"Normal Long",bg:"#616161",color:"#000000",desc:"常规长图"},HS:{name:"Hard Short",bg:"#D32F2F",color:"#FFFFFF",desc:"困难短图"},HL:{name:"Hard Long",bg:"#9E040D",color:"#FFFFFF",desc:"困难长图"},HP:{name:"Hard Plus",bg:"#9922EE",color:"#FFFFFF",desc:"高手追加"},RU:{name:"Rush",bg:"#FF9800",color:"#000000",desc:"冲刺图，一般很简单，让玩家多次游玩来冲刺最高分"},DEFAULT:{name:"Unknown",bg:"#555555",color:"#FFFFFF",desc:"未知模组"}},q3=new Set(Object.keys(Za).filter(n=>n!=="DEFAULT")),gu=n=>{if(!n)return Za.DEFAULT;const e=n.toString().toUpperCase().trim();return Za[e]||{name:e,...Za.DEFAULT}};function yu(n){if(!n)return[];if(Array.isArray(n))return n.map(e=>e.toString().toUpperCase().trim()).filter(Boolean);if(typeof n=="string"){const e=n.toString().replace(/[+\[\]]/g,"").trim();return e?e.length<=3&&q3.has(e.toUpperCase())?[e.toUpperCase()]:e.includes(",")?e.split(",").map(t=>t.trim().toUpperCase()).filter(Boolean):(e.match(/.{1,2}/g)||[]).map(t=>t.toUpperCase()):[]}return[]}const wu=n=>{const e=n.map(a=>a.toUpperCase());return e.includes("DT")||e.includes("NC")?1.5:e.includes("HT")||e.includes("DC")?.75:1},Q3=["href","title"],n5={class:"card-canvas"},e5={class:"download-group"},a5={key:0,class:"mods-box",title:"启用模组"},t5=["title"],i5=["title"],r5=["fill"],s5={key:1,viewBox:"0 0 24 24",fill:"currentColor",class:"play-icon"},o5={class:"text-content"},l5={class:"part-a"},c5={key:0,class:"alias-badge"},u5={class:"text-content-2"},d5={key:0,class:"part-b"},m5={class:"text-content-3"},p5={key:0,class:"rect-star"},f5=["title"],h5={key:1,class:"part-c"},v5={class:"text-content-4"},b5={key:0,class:"part-d"},g5={class:"modal-content"},y5=["src"],w5={key:0,class:"loading-spinner"},_5={__name:"Beatmap",props:{bid:[String,Number],sid:[String,Number],preview:{type:String,default:""},star:{type:[String,Number],default:0},max:{type:[String,Number],default:""},mode:{type:String,default:"o"},difficulties:{type:[Array,String],default:()=>[]},disabled:{type:[Boolean,String],default:!1},color:{type:String,default:null},alias:{type:String,default:null},other:{type:[String,Number],default:null},mods:{type:[Array,String],default:()=>[]}},setup(n){const e=vn(!1);ae(()=>{e.value=!0});const a=/^(.*?)\s+-\s+(.*)\s+\(([^()]*)\)(?:\s+\[(.*)])?\s*$/,t=n,i=B(()=>yu(t.mods)),r=B(()=>i.value.map(V=>{const J=gu(V);return{key:V,backgroundColor:J.bg,color:J.color,title:`${J.name} (${V})`}})),s=B(()=>{const V=t.disabled;return V==="false"||V===0||V===null||V===void 0||V===!1?!1:!!V}),o=B(()=>`https://assets.ppy.sh/beatmaps/${t.sid}/covers/list.jpg`),l=B(()=>`https://a.sayobot.cn/beatmaps/${t.sid}/covers/cover.webp`),u=B(()=>`https://assets.ppy.sh/beatmaps/${t.sid}/covers/cover.jpg`),c=B(()=>`https://a.sayobot.cn/beatmaps/${t.sid}/covers/cover.webp`),d=B(()=>t.bid!=null?`https://osu.ppy.sh/b/${t.bid}`:t.sid!=null?`https://osu.ppy.sh/s/${t.sid}`:"https://osu.ppy.sh/beatmapsets"),m=B(()=>{const V=t.preview||"",J=V.match(a);let H;switch(t?.mode?.toString()?.substring(0,1)){case"o":H="osu!standard";break;case"t":H="osu!taiko";break;case"c":case"f":H="osu!catch";break;case"m":H="osu!mania";break;default:H="osu!standard";break}return J?{artist:J[1]?.trim(),title:J[2]?.trim(),creator:J[3]?.trim(),difficulty:J[4]?.trim(),bid:t.bid?.toString()??"0",mode:H}:{artist:V.toString(),title:"",creator:"",difficulty:"",bid:t.bid?.toString()??"0",mode:H}}),p=B(()=>wt(t.star)),w=B(()=>t.color!=null&&t.color.toString().startsWith("#")?t.color:wt(t.star)),h=vn(!1),g=()=>{const V=t.sid?.toString()??"0";if(V==="0"){alert("配置的谱面集编号无效，无法下载。");return}const J=encodeURI(`https://dl.sayobot.cn/beatmaps/download/novideo/${V}?server=auto`);window.open(J,"_blank")},_=()=>{const V=t.sid?.toString()??"0";if(V==="0"){alert("配置的谱面集编号无效，无法下载。");return}const J=encodeURI(`https://dl.sayobot.cn/beatmaps/download/full/${V}?server=auto`);window.open(J,"_blank")},S=B(()=>{const V=parseFloat(t.star?.toString());return isNaN(V)?"0":(Math.floor(V*10)/10).toString()}),v=B(()=>{const V=parseFloat(t.star);return!isNaN(V)&&V>=.1&&V<4?{color:"#1c1719",textShadow:"0 1px 2px rgba(0, 0, 0, 0.2)"}:{color:"#ffffff",textShadow:"0 1px 2px rgba(0, 0, 0, 0.5)"}}),k=vn(""),I=vn([]),z=vn(0),C=V=>{V.preventDefault(),V.stopPropagation();const J=t.sid?.toString()??"0";I.value=[`https://assets.ppy.sh/beatmaps/${J}/covers/fullsize.jpg`,`https://a.sayobot.cn/beatmaps/${J}/covers/cover.webp`],z.value=0,k.value=I.value[0],h.value=!0},A=()=>{z.value<I.value.length-1?(z.value++,console.warn(`图片加载失败，正在尝试备选源 ${z.value}: ${I.value[z.value]}`),k.value=I.value[z.value]):console.error("所有图片源均加载失败")},M=B(()=>{if(Array.isArray(t.difficulties))return t.difficulties;if(typeof t.difficulties=="string")try{const V=JSON.parse(t.difficulties);return Array.isArray(V)?V:[]}catch{return t.difficulties.toString().replace(/[\[\]]/g,"").split(",").map(J=>parseFloat(J.trim())).filter(J=>!isNaN(J))}return[]}),R=B(()=>M.value.map(V=>({star:V,color:wt(V)}))),{state:D,currentSrc:x,playAudio:F}=gs(),O=B(()=>{const V=t.sid?.toString()??"0";return V!=="0"?`https://b.ppy.sh/preview/${V}.mp3`:""}),j=B(()=>x.value===O.value&&D.isPlaying),P=B(()=>wu(i.value)),Q=()=>{if(!O.value)return;const V=t.alias?` (${t.alias||""})`:"",J=m.value.title?`${m.value.artist||""} - ${m.value.title}${V}`:`Beatmap ${t.sid}`;F(O.value,J,P.value)};return(V,J)=>{const H=Ht("ClientOnly");return N(),W(gn,null,[T("a",{href:d.value,target:"_blank",class:Kn(["data-card-container",{"is-disabled":s.value}]),title:s.value?"谱面被删除或被版权，不建议访问网页":"访问谱面网页",onClick:J[1]||(J[1]=Z=>s.value&&Z.preventDefault())},[T("span",n5,[T("span",e5,[r.value.length?(N(),W("span",a5,[(N(!0),W(gn,null,ie(r.value,(Z,hn)=>(N(),W("span",{key:Z.key,class:"mod-badge",style:En({backgroundColor:Z.backgroundColor,color:Z.color,zIndex:hn+1,right:`${(r.value.length-1-hn)*55}%`}),title:Z.title},en(Z.key),13,t5))),128))])):mn("",!0),T("span",{class:"download-icon official",onClick:ca(g,["stop","prevent"]),title:"使用 Sayobot 下载谱面（不包含视频）"},[...J[4]||(J[4]=[T("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[T("path",{d:"M7 17.5a4 4 0 01-.88-7.903A5 5 0 1115.9 7.5L16 7.5a5 5 0 011 9.9M15 14.5l-3 3m0 0l-3-3m3 3V11.5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])]),T("span",{class:"download-icon sayo",onClick:ca(_,["stop","prevent"]),title:"使用 Sayobot 下载谱面"},[...J[5]||(J[5]=[T("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[T("path",{d:"M12 15V3m0 12l-4-4m4 4l4-4M4 17v1a2 2 0 002 2h12a2 2 0 002-2v-1",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])])]),T("span",{class:"color-rect",style:En({backgroundColor:w.value})},null,4),t.star?(N(),W("span",{key:0,class:"star-badge",style:En([{backgroundColor:p.value},v.value])},en(S.value),5)):mn("",!0),t.bid||t.sid?(N(),W("span",{key:1,class:"id-badge",style:En([{backgroundColor:p.value},v.value])},en(t.bid||`s${t.sid}`),5)):mn("",!0),cn(Ct,{src:u.value,"fallback-src":c.value,class:"background-rect"},null,8,["src","fallback-src"]),cn(Ct,{class:Kn([{"is-disabled":s.value},"preview-rect"]),src:o.value,"fallback-src":l.value,title:"查看完整背景",onClick:C},{default:Sn(()=>[T("span",{class:"preview-play-btn",onClick:J[0]||(J[0]=ca(Z=>t.sid&&!s.value&&Q(),["stop","prevent"])),title:t.sid?s.value?"谱面已被禁用，无法试听":j.value?"暂停试听":`试听 ${m.value.title||t.sid}`:"谱面不可用"},[j.value?(N(),W("svg",{key:0,viewBox:"0 0 24 24",fill:p.value,class:"pause-icon"},[...J[6]||(J[6]=[T("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"},null,-1)])],8,r5)):(N(),W("svg",s5,[...J[7]||(J[7]=[T("path",{d:"M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"},null,-1)])]))],8,i5)]),_:1},8,["class","src","fallback-src"]),T("span",o5,[T("span",l5,en(m.value.title),1),t.alias?(N(),W("span",c5,en(t.alias),1)):mn("",!0)]),T("span",u5,[m.value.artist&&m.value.creator?(N(),W("span",d5,en(m.value.artist+" // "+m.value.creator),1)):mn("",!0)]),T("span",m5,[t.difficulties&&t.difficulties.length>0?(N(),W("span",p5,[(N(!0),W(gn,null,ie(R.value,(Z,hn)=>(N(),W("span",{key:hn,class:"star-rect-item",style:En({backgroundColor:Z.color}),title:`星数: ${Z.star}`},null,12,f5))),128))])):mn("",!0),m.value.difficulty?(N(),W("span",h5,en(`[${m.value.difficulty}]`+(t.other!=null&&t.other!==""?` (${t.other})`:"")),1)):mn("",!0)]),T("span",v5,[m.value.mode?(N(),W("span",b5,en(m.value.mode),1)):mn("",!0)])])],10,Q3),cn(H,null,{default:Sn(()=>[(N(),Pn(Rl,{to:"body"},[cn(it,{name:"fade"},{default:Sn(()=>[e.value&&h.value?(N(),W("div",{key:0,class:"image-modal-overlay",onClick:J[3]||(J[3]=Z=>h.value=!1)},[T("div",g5,[T("img",{src:k.value,alt:"Preview",class:"full-image",decoding:"async",onError:A},null,40,y5),T("div",{class:"close-btn",onClick:J[2]||(J[2]=Z=>h.value=!1)},"×"),k.value?mn("",!0):(N(),W("div",w5,"Loading..."))])])):mn("",!0)]),_:1})]))]),_:1})],64)}}},S5=be(_5,[["__scopeId","data-v-d241f1cc"]]),k5=["href"],x5={class:"card-canvas"},B5={class:"download-group"},A5={key:0,class:"mods-box",title:"启用模组"},E5=["title"],T5={class:"symbol-wrapper"},I5={class:"baseline-container"},M5={class:"text-large"},C5={class:"text-small"},P5=["title"],O5=["fill"],R5={key:1,viewBox:"0 0 24 24",fill:"currentColor",class:"play-icon"},N5={class:"part-a"},D5={key:0,class:"alias-badge"},L5={key:0,class:"part-b"},H5={class:"text-content-3"},F5={key:0,class:"part-c"},V5={class:"modal-content"},K5=["src"],z5={key:0,class:"loading-spinner"},j5={__name:"Score",props:{bid:[String,Number],sid:[String,Number],preview:{type:String,default:""},star:{type:[String,Number],default:0},mode:{type:String,default:"o"},accuracy:{type:[String,Number],default:0},combo:{type:[Number,String],default:0},max:{type:[Number,String],default:0},rank:{type:String,default:"F"},performance:{type:[Number,String],default:0},mods:{type:[Array,String],default:()=>[]},disabled:{type:[Boolean,String],default:!1},color:{type:[String],default:null},alias:{type:[String],default:null}},setup(n){const e=vn(!1);ae(()=>{e.value=!0});const a=/^(.*?)\s+-\s+(.*)\s+\(([^()]*)\)\s+\[(.*)]\s*$/,t=n,i=B(()=>{const H=t.disabled;return H==="false"||H===0||H===null||H===void 0||H===!1?!1:!!H}),r=B(()=>yu(t.mods)),s=B(()=>r.value.map(H=>{const Z=gu(H);return{key:H,backgroundColor:Z.bg,color:Z.color,title:`${Z.name} (${H})`}})),o=B(()=>`https://assets.ppy.sh/beatmaps/${t.sid}/covers/list.jpg`),l=B(()=>`https://a.sayobot.cn/beatmaps/${t.sid}/covers/cover.webp`),u=B(()=>`https://assets.ppy.sh/beatmaps/${t.sid}/covers/cover.jpg`),c=B(()=>`https://a.sayobot.cn/beatmaps/${t.sid}/covers/cover.webp`),d=B(()=>t.bid!=null?`https://osu.ppy.sh/b/${t.bid}`:t.sid!=null?`https://osu.ppy.sh/s/${t.sid}`:"https://osu.ppy.sh/beatmapsets"),m=B(()=>{const H=t.preview||"",Z=H.match(a);let hn;switch(t?.mode?.toString()?.substring(0,1)){case"o":hn="osu!standard";break;case"t":hn="osu!taiko";break;case"c":case"f":hn="osu!catch";break;case"m":hn="osu!mania";break;default:hn="osu!standard";break}let Ln=parseFloat(t.accuracy),Jn;isNaN(Ln)?Jn="0":Ln<=1?Jn=Number((Ln*100).toFixed(2)).toString():Ln<=100||Ln<=1e4?Jn=Number(Ln.toFixed(2)).toString():Jn="";let Zn;return t.combo&&t.max?Zn=` - ${Jn}% ${t.combo}x/${t.max}x`:Zn="",Z?{artist:Z[1]?.trim(),title:Z[2]?.trim(),creator:Z[3]?.trim(),difficulty:Z[4]?.trim(),statistics:Zn,bid:t.bid?.toString()??"0",mode:hn}:{artist:H.toString(),title:"",creator:"",difficulty:"",statistics:"",bid:t.bid?.toString()??"0",mode:hn}}),p=B(()=>wt(t.star)),w=B(()=>t.color!=null&&t.color.toString().startsWith("#")?t.color:wt(t.star)),h=B(()=>{const H=Number.parseFloat(t.performance);return Number.isFinite(H)?{value:Math.round(H).toString(),unit:t.performance!=null?"PP":""}:{value:t.performance,unit:""}}),g=vn(!1),_=()=>{const H=t.sid?.toString()??"0";if(H==="0"){alert("配置的谱面集编号无效，无法下载。");return}const Z=encodeURI(`https://dl.sayobot.cn/beatmaps/download/novideo/${H}?server=auto`);window.open(Z,"_blank")},S=()=>{const H=t.sid?.toString()??"0";if(H==="0"){alert("配置的谱面集编号无效，无法下载。");return}const Z=encodeURI(`https://dl.sayobot.cn/beatmaps/download/full/${H}?server=auto`);window.open(Z,"_blank")},v=B(()=>{const H=parseFloat(t.star?.toString());return isNaN(H)?"0":(Math.floor(H*10)/10).toString()}),k=B(()=>{const H=parseFloat(t.star);return!isNaN(H)&&H>=.1&&H<4?{color:"#1c1719",textShadow:"0 1px 2px rgba(0, 0, 0, 0.2)"}:{color:"#ffffff",textShadow:"0 1px 2px rgba(0, 0, 0, 0.5)"}}),I=B(()=>{let H="/images/rank/";switch(t.rank?.toUpperCase()){case"PF":case"XH":case"SSH":case"EX":case"X+":H+="XH";break;case"X":case"SS":H+="X";break;case"SH":case"SP":case"S+":H+="SH";break;case"S":H+="S";break;case"A":H+="A";break;case"B":H+="B";break;case"C":H+="C";break;case"D":H+="D";break;case"F":H+="F";break;default:return""}return H+".svg"}),z=B(()=>{let H;switch(t.rank?.toUpperCase()){case"PF":case"XH":case"SSH":case"EX":case"X+":H=["#ccc","#fafafa"];break;case"X":case"SS":H=["#FFC86B","#FFFF00"];break;case"SH":H=["#999","#ccc"];break;case"SP":case"S+":H=["#FF4E6F","#FAD126"];break;case"S":H=["#EC6841","#FF9800"];break;case"A":H=["#31B16C","#12B4B1"];break;case"B":H=["#7776FF","#4FACFE"];break;case"C":H=["#9922EE","#F772D1"];break;case"D":H=["#D32F2F","#FD5392"];break;case"F":H=["#666","#999"];break;default:H=["#2A2226","#2A2226"]}return H}),C=vn(""),A=vn([]),M=vn(0),R=H=>{H.preventDefault(),H.stopPropagation();const Z=t.sid?.toString()??"0";A.value=[`https://assets.ppy.sh/beatmaps/${Z}/covers/fullsize.jpg`,`https://a.sayobot.cn/beatmaps/${Z}/covers/cover.webp`],M.value=0,C.value=A.value[0],g.value=!0},D=()=>{M.value<A.value.length-1?(M.value++,console.warn(`图片加载失败，正在尝试备选源 ${M.value}: ${A.value[M.value]}`),C.value=A.value[M.value]):console.error("所有图片源均加载失败")},x=B(()=>r.value.length===0?"30%":"40%"),{state:F,currentSrc:O,playAudio:j}=gs(),P=B(()=>{const H=t.sid?.toString()??"0";return H!=="0"?`https://b.ppy.sh/preview/${H}.mp3`:""}),Q=B(()=>O.value===P.value&&F.isPlaying),V=B(()=>wu(r.value)),J=()=>{if(!P.value)return;const H=t.alias?` (${t.alias||""})`:"",Z=m.value.title?`${m.value.artist||""} - ${m.value.title}${H}`:`Beatmap ${t.sid}`;j(P.value,Z,V.value)};return(H,Z)=>{const hn=Ht("ClientOnly");return N(),W(gn,null,[T("a",{href:d.value,target:"_blank",class:"data-card-container",title:"访问谱面网页"},[T("span",x5,[T("span",B5,[s.value.length?(N(),W("span",A5,[(N(!0),W(gn,null,ie(s.value,(Ln,Jn)=>(N(),W("span",{key:Ln.key,class:"mod-badge",style:En({backgroundColor:Ln.backgroundColor,color:Ln.color,zIndex:Jn+1,right:`${(s.value.length-1-Jn)*55}%`}),title:Ln.title},en(Ln.key),13,E5))),128))])):mn("",!0),T("span",{class:"download-icon official",onClick:ca(_,["stop","prevent"]),title:"使用 Sayobot 下载谱面（不包含视频）"},[...Z[3]||(Z[3]=[T("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[T("path",{d:"M7 17.5a4 4 0 01-.88-7.903A5 5 0 1115.9 7.5L16 7.5a5 5 0 011 9.9M15 14.5l-3 3m0 0l-3-3m3 3V11.5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])]),T("span",{class:"download-icon sayo",onClick:ca(S,["stop","prevent"]),title:"使用 Sayobot 下载谱面"},[...Z[4]||(Z[4]=[T("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[T("path",{d:"M12 15V3m0 12l-4-4m4 4l4-4M4 17v1a2 2 0 002 2h12a2 2 0 002-2v-1",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])])]),T("span",{class:"color-rect",style:En({backgroundColor:w.value})},null,4),T("span",{class:"extra-rect",style:En({"--color-1":z.value[0],"--color-2":z.value[1]})},[I.value?(N(),W("span",{key:0,class:"decoration-rect",style:En({maskImage:`url(${I.value})`,WebkitMaskImage:`url(${I.value})`})},null,4)):mn("",!0),T("span",T5,[T("span",I5,[T("span",M5,en(h.value.value),1),T("span",C5,en(h.value.unit),1)])])],4),Z[7]||(Z[7]=T("span",{class:"base-rect",style:{backgroundColor:"#2A2226"}},null,-1)),t.star?(N(),W("span",{key:0,class:"star-badge",style:En([{backgroundColor:p.value},k.value])},en(v.value),5)):mn("",!0),t.bid||t.sid?(N(),W("span",{key:1,class:"id-badge",style:En([{backgroundColor:p.value},k.value])},en(t.bid||`s${t.sid}`),5)):mn("",!0),cn(Ct,{src:u.value,"fallback-src":c.value,class:"background-rect"},null,8,["src","fallback-src"]),cn(Ct,{class:Kn([{"is-disabled":i.value},"preview-rect"]),src:o.value,"fallback-src":l.value,title:"查看完整背景",onClick:R},{default:Sn(()=>[T("span",{class:"preview-play-btn",onClick:Z[0]||(Z[0]=ca(Ln=>t.sid&&!i.value&&J(),["stop","prevent"])),title:t.sid?i.value?"谱面已被禁用，无法试听":Q.value?"暂停试听":`试听 ${m.value.title||t.sid}`:"谱面不可用"},[Q.value?(N(),W("svg",{key:0,viewBox:"0 0 24 24",fill:p.value,class:"pause-icon"},[...Z[5]||(Z[5]=[T("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"},null,-1)])],8,O5)):(N(),W("svg",R5,[...Z[6]||(Z[6]=[T("path",{d:"M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"},null,-1)])]))],8,P5)]),_:1},8,["class","src","fallback-src"]),T("span",{class:"text-content",style:En({right:x.value})},[T("span",N5,en(m.value.title),1),t.alias?(N(),W("span",D5,en(t.alias),1)):mn("",!0)],4),T("span",{class:"text-content-2",style:En({right:x.value})},[m.value.artist&&m.value.creator?(N(),W("span",L5,en(m.value.artist+" // "+m.value.creator),1)):mn("",!0)],4),T("span",H5,[m.value.difficulty?(N(),W("span",F5,"["+en(m.value.difficulty)+"]"+en(m.value.statistics),1)):mn("",!0)])])],8,k5),cn(hn,null,{default:Sn(()=>[(N(),Pn(Rl,{to:"body"},[cn(it,{name:"fade"},{default:Sn(()=>[e.value&&g.value?(N(),W("div",{key:0,class:"image-modal-overlay",onClick:Z[2]||(Z[2]=Ln=>g.value=!1)},[T("div",V5,[T("img",{src:C.value,alt:"Preview",class:"full-image",decoding:"async",onError:D},null,40,K5),T("div",{class:"close-btn",onClick:Z[1]||(Z[1]=Ln=>g.value=!1)},"×"),C.value?mn("",!0):(N(),W("div",z5,"Loading..."))])])):mn("",!0)]),_:1})]))]),_:1})],64)}}},Y5=be(j5,[["__scopeId","data-v-dd14f5c7"]]),U5={class:"user-card-container"},G5=["href"],W5=["src"],$5=["src"],J5={class:"text-global"},X5={class:"text-country"},Z5={class:"text-name"},q5={class:"text-stats"},Q5={class:"pp-container"},nf={class:"text-perf"},ef={__name:"Player",props:{id:[String,Number],name:[String],country:[String,Number],global:[String,Number],from:[String],accuracy:[String,Number],level:[String,Number],progress:[String,Number],performance:[String,Number]},setup(n){const e=n,a=B(()=>{const r=Number.parseFloat(e.performance);return Number.isFinite(r)?Math.round(r).toString():e.performance}),t=B(()=>{let r=parseFloat(e.accuracy),s;return isNaN(r)?s="0":r<=1?s=Number((r*100).toFixed(2)).toString():r<=100||r<=1e4?s=Number(r.toFixed(2)).toString():s="0",s}),i=B(()=>{let r;/^[A-Za-z]{2}$/.test(e.from)?r=e.from?.toUpperCase():r="XX",r==="TW"&&(r="CN");const s=127462,o=s+r.charCodeAt(0)-65,l=s+r.charCodeAt(1)-65;return`https://osu.ppy.sh/assets/images/flags/${o.toString(16).toLowerCase()}-${l.toString(16).toLowerCase()}.svg`});return(r,s)=>(N(),W("div",U5,[T("a",{href:`https://osu.ppy.sh/u/${e.id}`,target:"_blank",class:"user-card"},[s[1]||(s[1]=T("span",{class:"card-bg-animated"},null,-1)),s[2]||(s[2]=T("span",{class:"card-overlay"},null,-1)),T("img",{src:`https://a.ppy.sh/${e.id}`,class:"user-avatar",alt:"avatar"},null,8,W5),T("img",{src:`${i.value}`,class:"user-flag",alt:"country flag"},null,8,$5),T("span",J5,"#"+en(e.global??0),1),T("span",X5,en(e.from??"??")+"#"+en(e.country??0),1),T("span",Z5,en(e.name??"Unknown"),1),T("span",q5,en(t.value)+"% Lv."+en(e.level??0)+"("+en(e.progress??0)+"%) ",1),T("span",Q5,[T("span",nf,en(a.value),1),s[0]||(s[0]=T("span",{class:"text-pp"},"PP",-1))])],8,G5)]))}},af=be(ef,[["__scopeId","data-v-81307970"]]),tf="/images/banner-overlay.png",rf=["src"],sf={class:"badge__content"},$o=1920,of=320,lf={__name:"Pool",props:{mod:{type:String,default:"HD"},overlay:{type:String,default:tf},radius:{type:Number,default:40},scale:{type:Number,default:1},colorAlpha:{type:Number,default:.8},other:{type:String,default:""}},setup(n){const e=vn(!1),a=vn(0),t=vn(0);function i(R){const D=R.currentTarget.getBoundingClientRect();a.value=(R.clientX-D.left)/c.value,t.value=(R.clientY-D.top)/c.value}function r(){e.value=!0}function s(){e.value=!1}const o=n;function l(R,D=1){let x=String(R).replace("#","").trim();x.length===3&&(x=x.split("").map(Q=>Q+Q).join(""));const F=parseInt(x,16),O=F>>16&255,j=F>>8&255,P=F&255;return`rgba(${O}, ${j}, ${P}, ${D})`}const u=vn(null),c=vn(1);let d=null;ae(()=>{c.value=u.value.clientWidth/$o,d=new ResizeObserver(([R])=>{c.value=R.contentRect.width/$o}),d.observe(u.value)}),Fi(()=>d?.disconnect());const m=B(()=>c.value*o.scale),p=B(()=>String(o.mod||"").trim().toUpperCase()),w=B(()=>{const R=p.value;return/V\d+$/i.test(R)?R:R.replace(/[0-9]+$/g,"").trim()}),h=B(()=>{const R=p.value;if(/V\d+$/i.test(R))return"";const D=R.match(/(\d+)$/);return D?D[1]:""}),g=B(()=>Za[w.value]??Za.DEFAULT),_=B(()=>l(g.value.bg,o.colorAlpha)),S=B(()=>g.value.desc??""),v=B(()=>g.value.name??w.value+h.value),k=B(()=>g.value.alias??w.value+h.value),I=B(()=>{const R=g.value.color??"#fff";return l(R,o.colorAlpha)}),z=B(()=>({height:`${of*m.value}px`})),C=B(()=>({backgroundColor:_.value,borderRadius:`${o.radius}px`,transform:`scale(${m.value})`}));function A(R){let D=String(R).replace("#","").trim();D.length===3&&(D=D.split("").map(P=>P+P).join(""));const x=parseInt(D,16);if(isNaN(x))return .5;const F=x>>16&255,O=x>>8&255,j=x&255;return(.2126*F+.7152*O+.0722*j)/255}const M=B(()=>{const R=g.value.bg||"#000000",D=A(R);return D<.1?"screen":(D>.8,"overlay")});return(R,D)=>(N(),W("div",{ref_key:"outerRef",ref:u,class:"badge-outer",style:En(z.value),onMousemove:i,onMouseenter:r,onMouseleave:s},[T("div",{class:"badge",style:En(C.value)},[T("img",{class:"badge__overlay",src:n.overlay,style:En({mixBlendMode:M.value}),alt:"","aria-hidden":"true",draggable:"false"},null,12,rf),S.value&&e.value?(N(),W("div",{key:0,class:"badge__tip",style:En({left:a.value+"px",top:t.value+"px"}),role:"tooltip"},en(S.value),5)):mn("",!0),T("div",{class:"badge__corner badge__corner--tl",style:En({color:I.value})},[An(R.$slots,"top-left",{mod:w.value,conf:g.value},()=>[he(en(k.value),1)],!0)],4),T("div",{class:"badge__corner badge__corner--bl",style:En({color:I.value})},[An(R.$slots,"bottom-left",{mod:w.value,conf:g.value},()=>[he(en(v.value),1)],!0)],4),n.other?(N(),W("div",{key:1,class:"badge__corner badge__corner--br",style:En({color:I.value})},[An(R.$slots,"bottom-right",{mod:w.value,conf:g.value},()=>[he(en(n.other),1)],!0)],4)):mn("",!0),T("div",sf,[An(R.$slots,"default",{},void 0,!0)])],4)],36))}},cf=be(lf,[["__scopeId","data-v-60f92df5"]]),uf=["title"],df={key:0,viewBox:"0 0 24 24",fill:"currentColor"},mf={key:1},pf={class:"player-content"},ff={class:"audio-header"},hf=["title"],vf={key:0,class:"title","aria-hidden":"true"},bf={class:"audio-controls"},gf=["src","volume"],yf={__name:"GlobalAudioPlayer",setup(n){const e=vn(!1),a=vn(!1),t=vn(null),i=vn(null),{state:r,setVolume:s,pauseAudio:o}=gs(),l=vn(null),u=async()=>{a.value=!1,await pa(),t.value&&i.value&&(a.value=i.value.scrollWidth>t.value.clientWidth)};Vn(()=>r.title,()=>{u()}),Vn(e,w=>{w||u()});const c=()=>{l.value&&(l.value.playbackRate=r.playbackRate||1)},d=()=>{l.value&&(l.value.volume=r.volume)},m=()=>{l.value&&Math.abs(l.value.volume-r.volume)>.01&&s(l.value.volume)},p=()=>{o()};return ae(()=>{d(),c(),u(),Vn(()=>r.volume,w=>{l.value&&(l.value.volume=w)}),Vn(()=>r.isPlaying,w=>{l.value&&(w?(d(),c(),l.value.play().catch(()=>{})):l.value.pause())}),Vn(()=>r.playbackRate,w=>{l.value&&(l.value.playbackRate=w||1)}),Vn(()=>r.src,async()=>{e.value=!1,await pa(),l.value&&(l.value.volume=r.volume,r.isPlaying&&(l.value.currentTime=0,l.value.playbackRate=r.playbackRate||1,l.value.play().catch(()=>{})))})}),(w,h)=>sn(r).src&&sn(r).src.trim()!==""?(N(),W("div",{key:0,class:Kn(["global-audio-player",{"is-collapsed":e.value}])},[T("button",{class:"toggle-btn",onClick:h[0]||(h[0]=g=>e.value=!e.value),title:e.value?"展开播放器":"收起播放器"},[e.value?(N(),W("svg",df,[...h[1]||(h[1]=[T("path",{d:"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"},null,-1)])])):(N(),W("span",mf,"✕"))],8,uf),Ca(T("div",pf,[T("div",ff,[T("div",{ref_key:"wrapperRef",ref:t,class:"title-wrapper"},[T("div",{class:Kn(["title-track",{"is-scrolling":a.value}])},[T("span",{ref_key:"titleRef",ref:i,class:"title",title:sn(r).title},en(sn(r).title||"正在播放音频"),9,hf),a.value?(N(),W("span",vf,en(sn(r).title||"正在播放音频"),1)):mn("",!0)],2)],512)]),T("div",bf,[T("audio",{ref_key:"audioRef",ref:l,src:sn(r).src,volume:sn(r).volume,controls:"",autoplay:"",onVolumechange:m,onEnded:p},null,40,gf)])],512),[[Oa,!e.value]])],2)):mn("",!0)}},Jo=be(yf,[["__scopeId","data-v-8dd1bb52"]]),wf={class:"timeline"},_f={class:"timeline-content"},Sf={class:"timeline-date"},kf={class:"timeline-title"},xf={key:0,class:"timeline-desc"},Bf={__name:"Timeline",props:{items:{type:Array,required:!0,default:()=>[]},order:{type:String,default:"desc"}},setup(n){const e=n,a=B(()=>[...e.items].sort((t,i)=>{const r=new Date(t.date).getTime(),s=new Date(i.date).getTime();return e.order==="desc"?s-r:r-s}));return(t,i)=>(N(),W("div",wf,[(N(!0),W(gn,null,ie(a.value,(r,s)=>(N(),W("div",{key:s,class:"timeline-item"},[i[0]||(i[0]=T("div",{class:"timeline-point"},null,-1)),T("div",_f,[T("span",Sf,en(r.date),1),T("div",kf,en(r.title),1),r.description?(N(),W("p",xf,en(r.description),1)):mn("",!0)])]))),128))]))}},Af=be(Bf,[["__scopeId","data-v-b7aae10c"]]),Xo=["#588c7e","#b2a367","#c98f65","#bc5151","#5c8bd6","#7f6ab7","#a368ad","#aa6880","#6fad9b","#f2e394","#f2ae72","#f98f8a","#7daef4","#a691f2","#c894d3","#d895b0","#53c4a1","#eace5c","#ea8c47","#fc4f4f","#3d94ea","#7760ea","#af52c6","#e25696","#677c66","#9b8732","#8c5129","#8c3030","#1f5d91","#4335a5","#812a96","#992861"];function Ma(n){let e=0;if(typeof n=="number")e=Math.abs(n);else if(typeof n=="string"){for(let t=0;t<n.length;t++)e=n.charCodeAt(t)+((e<<5)-e);e=Math.abs(e)}else e=0;const a=e%Xo.length;return Xo[a]??"#e3f2fd"}const Ef=["src","alt"],Tf={class:"content-container"},If={class:"header-group"},Mf={class:"card-name"},Cf={key:0,class:"card-date"},Pf={class:"card-title"},Of={__name:"EasyCard",props:{id:{type:[String,Number],required:!0},name:{type:String,required:!0},title:{type:String,required:!0},date:{type:String,default:null},color:{type:String,default:null},link:{type:String,default:null}},emits:["avatar-click"],setup(n,{emit:e}){const a=n,t=e,i=B(()=>a.id>0?`https://a.ppy.sh/${a.id}`:"https://a.ppy.sh/"),r=B(()=>a.link?a.link?.startsWith("http")?a.link:typeof a.id=="number"?`https://osu.ppy.sh/u/${a.id}`:a.link:"#"),s=B(()=>a.color?a.color:typeof a.id=="number"||typeof a.id=="string"?Ma(a.id.toString()):typeof a.name=="string"?Ma(a.name.toString()):typeof a.title=="string"?Ma(a.title.toString()):"#666666"),o=B(()=>{let u=s.value.replace("#","");u.length===3&&(u=u.split("").map(w=>w+w).join(""));const c=parseInt(u,16),d=c>>16&255,m=c>>8&255,p=c&255;return`linear-gradient(rgba(${d}, ${m}, ${p}, 0.3), rgba(${d}, ${m}, ${p}, 0.3)), var(--vp-c-bg)`}),l=u=>{u.stopPropagation(),u.preventDefault(),t("avatar-click",i.value)};return(u,c)=>{const d=Ht("router-link");return N(),Pn(d,{to:r.value,class:"custom-card",style:En({background:o.value})},{default:Sn(()=>[T("div",{class:"avatar-container",onClick:l},[T("img",{src:i.value,alt:n.title,class:"avatar-img"},null,8,Ef)]),T("div",Tf,[T("div",If,[T("div",Mf,en(n.name),1),n.date?(N(),W("div",Cf,en(n.date),1)):mn("",!0)]),T("div",Pf,en(n.title),1)])]),_:1},8,["to","style"])}}},ys=be(Of,[["__scopeId","data-v-4238ae7c"]]),Rf=`---
date: 2025-05-25
---

# 1687 (-Yuki Noa-) の听歌向旮旯谱推荐

<Player
id=27999664
name="-Yuki Noa-"
country=4065
global=0
from="CN"
accuracy=93.06
level=98
progress=57
performance=2995
/>

*编者注：你知道怎么在网页版推荐里下图的吧 .jpg*

*部分暗色背景的图就是官网不存在的图，可以去小夜下载。*

## 前言

本篇适用分段为 2500pp 左右

关于下载谱面方面，可以直接复制下面的链接，也可以在官网直接输入链接后面的数字

搜之前要开启“全部”（不开的话坟图搜不到）

标有“下架”的图在官网是搜不到的

可以去新人群的群文件查找

---

最后感谢一下 CL1096 和 Saleriy

CL 两个月以来帮我一起试图~~（赤石）~~给了我不少的建议

Saleriy 这个大 fp 头子给我找了 1GB 的图节省了我不少的时间

最后做的比较匆忙 也是第一次做这种东西 手机上看排版可能有点奇怪

~~不过我也懒得改了＞_＜~~

## 内容

### フレラバ ~Friend to Lover~ · 从朋友到恋人

<Beatmap
  bid=1618565
  sid=183467
  preview="Marika - quantum jump (Shurelia) [Insane]"
  star=4.43
  max=960
/>

<Beatmap
  bid=322744
  sid=127135
  preview="Marika - quantum jump (Tari) [Insane]"
  star=3.41
  max=337
/>

### Making\\*Lovers · 突然恋人

<Beatmap
  bid=1763187
  sid=827286
  preview="Yuuka - Girls' Carnival (Dored) [Laura's Light Insane]"
  star=4.39
  max=1524
/>

<Beatmap
  bid=1469442
  sid=689715
  preview="Yuuka - Girls' Carnival (Log Off Now) [Insane]"
  star=4.46
  max=514
/>

### カノジョ＊ステップ · 与她*心渐近

<Beatmap
  bid=2845803
  sid=1376952
  preview="Sasaki Shiori - Harenohi Step (Kuse) [Sunlit]"
  star=4.12
  max=913
/>

<Beatmap
  bid=1553157
  sid=735860
  preview="Sasaki Shiori - Harenohi Step short ver. (Asuka_-) [Insane]"
  star=3.83
  max=358
/>

### ピュア×コネクト · 与你×心相连

<Beatmap
  bid=1851141
  sid=877674
  preview="Shimotsuki Haruka - Snow x Connect (ImpurePug) [Blossom]"
  star=4.52
  max=1199
/>

### 殻ノ少女 · 壳之少女 

<Beatmap
  bid=4428034
  sid=2104797
  preview="Shimotsuki Haruka - Ruri no Tori (Gust) [Gensou]"
  star=5.08
  max=924
/>

<Beatmap
  bid=4745722
  sid=2234363
  preview="Shimotsuki Haruka - Tsuki no Uro (Syoko) [Curse]"
  star=5.24
  max=1622
/>

### 虚ノ少女 · 虚之少女

<Beatmap
  bid=4940295
  sid=2309355
  preview="Shimotsuki Haruka - Solenoid (Lasse) [Obsession]"
  star=4.91
  max=1396
/>

### 天ノ少女 · 天之少女

“我想请你寻找——我。真正的，我”

<Beatmap
  bid=3126436
  sid=1528278
  preview="Shimotsuki Haruka - Giyoku no Replica (Kagayaki) [Mayuyaki's Tsubasa]"
  star=4.72
  max=1520
/>

### カルタグラ～ツキ狂イノ病～ · 恋狱月狂病

<Beatmap
  bid=1899079
  sid=910043
  preview="Shimotsuki Haruka - Rengoku (Garden) [Narcissu's Insane]"
  star=4.82
  max=1031
/>

<Beatmap
  bid=3492968
  sid=1692763
  preview="Shimotsuki Haruka - Rengoku (Dored) [Misure's Insane]"
  star=4.52
  max=402
/>

<Beatmap
  bid=4460302
  sid=2122608
  preview="Shimotsuki Haruka - Kodoku no Umi (Oakenfold-) [Cartagra]"
  star=4.59
  max=291
/>

### FLOWERS

<Beatmap
  bid=4789842
  sid=2252107
  preview="Shimotsuki Haruka - FLOWERS (Aakki) [Lilac]"
  star=5.00
  max=415
/>

### 9-nine-ここのつここのかここのいろ · 9-nine-九次九日九重色

<Beatmap
  bid=1889719
  sid=905365
  preview="Yonekura Chihiro - ReAliZe (Altina2) [Insane]"
  star=4.59
  max=416
/>

<Beatmap
  bid=1775705
  sid=849144
  preview="Yonekura Chihiro - Futari (Movie Size) (]-[iyori) [Ex]"
  star=5.61
  max=981
/>

<Beatmap
  bid=3501944
  sid=1713808
  preview="Miyako Kujo (CV: Sawada Natsu) - Lovesick Magic (Enjiklyx) [Magic]"
  star=4.97
  max=1109
/>

### 9-nine-そらいろそらうたそらのおと · 9-nine-天色天歌天籁音

<Beatmap
  bid=3114186
  sid=1446866
  preview="Yonekura Chihiro - Sora no Kioku (Saggin) [Mayu's Insane]"
  star=4.62
  max=627
/>

<Beatmap
  bid=1644798
  sid=783322
  preview="Chihiro Yonekura - Koko ni Aru Sora (ArcherSelwyn) [Sora]"
  star=4.41
  max=1127
/>

<Beatmap
  bid=2597323
  sid=1249697
  preview="Sora Nimi (CV: Sawa Sawasawa) - Sweet Pop (silverin0) [KLQ9]"
  star=4.76
  max=1200
/>

### 9-nine-はるいろはるこいはるのかぜ · 9-nine-春色春恋春熙风

<Beatmap
  bid=2080513
  sid=957816
  preview="Yonekura Chihiro - Harutoki~Spring Moment~ (Altina2) [Expert]"
  star=5.12
  max=566
/>

<Beatmap
  bid=3294091
  sid=1613457
  preview="Yonekura Chihiro - Soshite Ai ni Naru (Ayesha Altugle) [Always beside you]"
  star=5.10
  max=1041
/>

### 9-nine-ゆきいろゆきはなゆきのあと · 9-nine-雪色雪花雪余痕

<Beatmap
  bid=2615137
  sid=1257060
  preview="Yonekura Chihiro - DEAR MY WAKER (HeTo) [BELLICOSE'S INSANE]"
  star=4.77
  max=557
/>

<Beatmap
  bid=2950591
  sid=1433072
  preview="Yonekura Chihiro - Be braver! (Shikibe Mayu) [Shizurre's Insane]"
  star=4.85
  max=1312
/>

<Beatmap
  bid=4608844
  sid=2115827
  preview="Yuuki Noa (CV: Kanako) - The Order... (pnky) [nantoka's Insane...]"
  star=4.98
  max=1255
/>

### 9-nine- New Episode · 9-nine-新章

選択したその未来へ──

Ps：制作组你看看这他妈是一个人吗？

![](/images/recommend/1687-1.jpg)

![](/images/recommend/1687-2.jpg)

<Beatmap
  bid=2941487
  sid=1428758
  preview="Yonekura Chihiro - InFINITE Line (Snowy Wind) [Neverending]"
  star=4.43
  max=589
/>

### ましろ色シンフォニー · 纯白交响曲

<Beatmap
  bid=205332
  sid=71697
  preview="Hashimoto Miyuki - Symphonic Love (Short Ver.) (DarknessAngel) [D.N.Angel]"
  star=4.49
  max=519
/>

<Beatmap
  bid=110855
  sid=28240
  preview="Misato Aki - Sayonara Kimi no Koe (Nymph) [Insane]"
  star=3.88
  max=855
/>

<Beatmap
  bid=4257604
  sid=2040284
  preview="Kotoha - Yuki wa Naniiro (Armada) [AF's Insane]"
  star=4.49
  max=454
/>

<Beatmap
  bid=4314837
  sid=2045417
  preview="Kotoha - Yuki wa Naniiro (litoluna) [Lecana's Insane*]"
  star=4.82
  max=1079
/>

<Beatmap
  bid=4207810
  sid=2017137
  preview="Kotoha - Haru o Tsurete (tomatas95) [A New Chapter Begins Between You and Me~]"
  star=3.94
  max=758
alias="携春同行"
/>

SANA 篇的谱几乎都被下架了

详细可以去群文件找

这里就列了几个我常玩的

<Beatmap
  bid=4539010
  sid=2154085
  preview="marble - Suisai Candy (TV Size) (lit120) [Insane]"
  star=3.89
  max=372
/>

<Beatmap
  bid=1589038
  sid=754826
  preview="ChouCho - Authentic symphony (timemon) [Insane]"
  star=5.00
  max=1158
/>

<Beatmap
  bid=178095
  sid=59418
  preview="ChouCho - Niji no Asa ni (Frostmourne) [Insane]"
  star=4.02
  max=973
/>

### 恋がさくころ桜どき · 恋花绽放樱飞时

<Beatmap
  bid=354453
  sid=142300
  preview="Sasaki Sayaka - Koi Saku Mirai (Gamu) [Insane]"
  star=4.69
  max=670
/>

<Beatmap
  bid=568258
  sid=246733
  preview="Sasaki Sayaka - Koi Saku Mirai (snowsign7) [Insane]"
  star=4.94
  max=1319
/>

<Beatmap
  bid=452882
  sid=190148
  preview="Sasaki Sayaka - Distance (KaedekaShizuru) [SakuraSaku]"
  star=3.42
  max=357
/>

<Beatmap
  bid=3541330
  sid=1732499
  preview="sasaki sayaka - Distance (- Ayame -) [Tina]"
  star=3.98
  max=865
/>

### 穢翼のユースティア · 秽翼的尤斯蒂娅

就这样，守护、治愈、信仰、俯瞰，并记录下这个被拯救的世界吧。 

不要再迷茫了。

<Beatmap
  bid=4846283
  sid=2266977
  preview="Ceui - Asphodelus (Beomsan) [Lude's Insane]"
  star=4.52
  max=1385
/>

<Beatmap
  bid=963942
  sid=449207
  preview="Sharlo - Asphodelus (KaedekaShizuru) [Blessing]"
  star=4.83
  max=1164
/>

<Beatmap
  bid=2249134
  sid=1069927
  preview="Ceui - Shinai naru Sekai e (GlaZe) [Tarnished Wings]"
  star=4.90
  max=1309
/>

<Beatmap
  bid=303143
  sid=117693
  preview="Ami Fujisaki - Close My Eyes (-Yukikaze-) [Hard]"
  star=3.46
  max=732
/>

### 大図書館の羊飼い · 大图书馆的牧羊人

<Beatmap
  bid=1077221
  sid=505415
  preview="Nakae Mitsuki - On my Sheep -TV size- (sahuang) [wkyik's Insane]"
  star=4.43
  max=439
/>

<Beatmap
  bid=2905494
  sid=659907
  preview="Nakae Mitsuki - On my Sheep (My Angel Rize) [Insane]"
  star=4.31
  max=1038
/>

<Beatmap
  bid=369897
  sid=149722
  preview="Nakae Mitsuki - Dreaming Sheep (CakiP) [Insane]"
  star=4.95
  max=618
/>

### 千の刃濤、桃花染の皇姫 · 千之刃涛、桃花染之皇姬

<Beatmap
  bid=4503010
  sid=2116404
  preview="Uinyasu, Occhoko Bunny - Aa Kenran no Yume ga Gotoku (iRedi) [Agllius' Another]"
  star=4.89
  max=1457
  alias="啊，像绚烂的泡沫一样"
/>

<Beatmap
  bid=2337236
  sid=1118979
  preview="Airots - Tougen Roman (NikaidouShinku) [wip]"
  star=4.88
  max=842
/>

<Beatmap
  bid=3263096
  sid=1597783
  preview="Uinyasu - Tsukiyo ni Mau Koi no Hana (Sakura Shizuku) [Momo Hana]"
  star=5.56
  max=1773
/>

### 恋×シンアイ彼女 · 想要传达给你的爱恋

<Beatmap
  bid=926137
  sid=429220
  preview="yuiko - GLORIOUS_DAYS(Short) (Momochikun) [Insane]"
  star=4.70
  max=509
/>

<Beatmap
  bid=1178758
  sid=557022
  preview="yuiko - GLORIOUS DAYS (Garden) [Farewell]"
  star=4.89
  max=1255
/>

<Beatmap
  bid=774758
  sid=351528
  preview="Duca - Hajimari Kioku (Meg) [Insane]"
  star=5.08
  max=556
/>

### 蒼の彼方のフォーリズム · 苍之彼方的四重奏

<Beatmap
  bid=484269
  sid=205095
  preview="Kawada Mami - Wings of Courage -Sora o Koete- (Momovely) [Insane]"
  star=4.64
  max=726
/>

<Beatmap
  bid=2314243
  sid=1107289
  preview="Kawada Mami - Wings of Courage -Sora o Koete- (-[Shady]-) [Eternal Sky]"
  star=4.97
  max=1517
/>

<Beatmap
  bid=912134
  sid=421655
  preview="Mami Kawada - Contrail ~Kiseki~ (Yuria) [Shioi's Insane]"
  star=5.01
  max=433
/>

<Beatmap
  bid=1086008
  sid=506291
  preview="Mami Kawada - Contrail ~Kiseki~ (Akitoshi) [Kalibe's Insane]"
  star=4.60
  max=1190
/>

<Beatmap
  bid=4120379
  sid=1983939
  preview="Ray - a-gain (mnyui) [Insane]"
  star=3.57
  max=1007
/>

<Beatmap
  bid=2680253
  sid=1291251
  preview="Ray - Kimi to Ita Sora (cocona) [Beyond The Light We See Above]"
  star=5.24
  max=1272
/>

### いますぐお兄ちゃんに妹だっていいたい！ · 现在就想告诉哥哥，我是妹妹！

<Beatmap
  bid=882397
  sid=402680
  preview="Ceui - Ima, Arukidasu Kimi e. (Karen) [Fycho's Kiseki]"
  star=4.60
  max=1153
alias="给即将启程的你。"
/>

### 夢と色でできている · 由梦想与色彩编织而成

<Beatmap
  bid=2922983
  sid=1394924
  preview="Sasaki Sayaka - Yume to Iro de Dekiteiru (kazu2411) [gaziblaze's Collab Insane]"
  star=4.88
  max=1469
/>

<Beatmap
  bid=4334582
  sid=2071480
  preview="Sasaki Sayaka - Yume to Iro de Dekiteiru (eringiRa) [Everlasting Memories]"
  star=4.98
  max=1609
/>

<Beatmap
  bid=4208454
  sid=2004205
  preview="Sasaki Sayaka - Yume to Iro de Dekiteiru (Short Ver.) (tomatas95) [Insane]"
  star=4.46
  max=600
/>

<Beatmap
  bid=2645017
  sid=1272869
  preview="Aitsuki Nakuru - Korekurai de (Ayesha Altugle) [Childhood Memories]"
  star=5.11
  max=1034
/>

### G線上の魔王 · G弦上的魔王

生者，生者，路化冰河。人生没有四季，唯有那寒冬的荒野。

那渗出的血和泪，倘若不将它拭去，就会冻结成冰。

<Beatmap
  bid=2666742
  sid=1282756
  preview="Rekka Katakiri - Answer (Game Ver.) (Riene) [Asa's Insane]"
  star=4.62
  max=414
/>

<Beatmap
  bid=950020
  sid=440266
  preview="Katakiri Rekka - Answer (deetz) [Insane]"
  star=4.64
  max=1257
/>

<Beatmap
  bid=2325983
  sid=1062653
  preview="Katakiri Rekka - Answer (ShirohaMyMommy) [Insane]"
  star=5.03
  max=1072
/>

<Beatmap
  bid=2505079
  sid=1190434
  preview="Ayane - Close Your Eyes (Luscent) [Kalibe's Insane]"
  star=4.18
  max=1168
/>

<Beatmap
  bid=476289
  sid=201085
  preview="Barbarian on the Groove feat. Chata - Yuki no Hane, Toki no Kaze (joolomasta) [Insane]"
  star=4.22
  max=757
/>

### できない私が、くり返す。 · 若能与你再次相见

<Beatmap
  bid=588367
  sid=256831
  preview="Shimotsuki Haruka - Re:Call (-Nanaka-) [Re:Call]"
  star=5.41
  max=1881
/>

<Beatmap
  bid=571610
  sid=221364
  preview="Shimotsuki Haruka - Re:Call (PinkHeart) [Re:Call]"
  star=4.94
  max=698
/>

<Beatmap
  bid=806216
  sid=367571
  preview="Riryka - VOICE LETT;ER (-Maruk-) [Re:Call]"
  star=3.77
  max=475
/>

### RIDDLE JOKER

<Beatmap
  bid=3223089
  sid=1519872
  preview="Hashimoto Miyuki, Sasaki Sayaka - astral ability (Game Ver.) (tomatas95) [Saturnalize's Insane]"
  star=4.32
  max=492
/>

<Beatmap
  bid=3099167
  sid=1405453
  preview="Arihara Nanami (CV: Kusuhara Yui) - Sympathy (Shikibe Mayu) [Kagayaki's Insane]"
  star=4.49
  max=1391
/>

### サノバウィッチ · 魔女的夜宴

<Beatmap
  bid=4577915
  sid=2122109
  preview="Yonekura Chihiro - Koiseyo Otome! (Game Ver.) (tomatas95) [Another]"
  star=4.89
  max=509
/>

<Beatmap
  bid=1070127
  sid=498438
  preview="Yonekura Chihiro - Koiseyo Otome! (Kencho) [NiNo's Insane]"
  star=4.96
  max=1442
/>

### 天使☆騒々 RE-BOOT! · 天使☆纷扰

<Beatmap
  bid=4836768
  sid=2270134
  preview="QUARTET*RE-BOOT! - FUN FUN RE-BOOT (Ayesha Altugle) [Insane]"
  star=4.56
  max=973
/>

<Beatmap
  bid=4127779
  sid=1984951
  preview="Tanikaze Amane (CV: Kanako) - Watashi dake. (Short Ver.) (pnky) [Insane]"
  star=4.28
  max=539
/>

### 千恋＊万花

<Beatmap
  bid=4570744
  sid=2166472
  preview="KOTOKO - Koi Kou Enishi (suzusiro) [Insane]"
  star=4.61
  max=1104
alias="以恋结缘"
/>

<Beatmap
  bid=2977916
  sid=1372152
  preview="Lena Liechtenauer (CV: Sawasawa Sawa) - Blue sky (tomatas95) [Insane]"
  star=4.71
  max=479
/>

<Beatmap
  bid=1764572
  sid=843407
  preview="Harukaze Mayuki - Futatsu no Kage (kpx-x) [Aya]"
  star=3.79
  max=863
/>

<Beatmap
  bid=4986651
  sid=2307369
  preview="Hitachi Mako (CV: Kotorii Yuuka) - Mako no Nichijou (Short Ver.) (Tokiwa Kano) [Kumocha's Insane]"
  star=4.59
  max=481
/>

### ハミダシクリエイティブ · 灵感满溢的甜蜜创想

<Beatmap
  bid=2661682
  sid=1197118
  preview="Sakuragawa Megu - Unreal Creation! (Kuse) [Insane]"
  star=5.11
  max=533
/>

<Beatmap
  bid=4375474
  sid=2082043
  preview="Sakuragawa Megu - Issatsu no Arrow (eringiRa) [Nekomimi Headphone Another]"
  star=4.97
  max=806
/>

<Beatmap
  bid=4392445
  sid=2094873
  preview="Nisiki Asumi (CV: tsumugi yukino) - kazabanamuume (LikeShiratama) [yukige siki]"
  star=5.02
  max=1400
/>

<Beatmap
  bid=4316807
  sid=2043442
  preview="Tsukino - Heart Creation (Clammbon) [Collab Insane]"
  star=4.66
  max=1262
/>

<Beatmap
  bid=3971940
  sid=1923990
  preview="Tsukino - Heart Creation (KoldNoodl) [Little Star]"
  star=4.99
  max=1155
/>

<Beatmap
  bid=4174872
  sid=2007127
  preview="Aitsuki Nakuru - happy palette (eringiRa) [Precious~ >w<]"
  star=5.04
  max=1263
/>

<Beatmap
  bid=4886207
  sid=2289575
  preview="Tokiwa Kano(CV:Honoka Hino) - Everyday (marty916) [Elite Illustrator : Takoyakiwa Kano]"
  star=5.25
  max=1186
/>

### ラズベリーキューブ · 树莓立方体

<Beatmap
  bid=4333562
  sid=2071104
  preview="Matsushita - raspberry cube (Clammbon) [Insane]"
  star=4.92
  max=1484
/>

<Beatmap
  bid=2992233
  sid=1455505
  preview="Matsushita - my little wish (gazimal) [Mayu's Insane]"
  star=5.05
  max=1534
/>

### セレクトオブリージュ · 天选庶民的真命之选

<Beatmap
  bid=4834214
  sid=2233944
  preview="Faylan - Path to glory (Game Ver.) (tomatas95) [Insane]"
  star=4.71
  max=556
/>

<Beatmap
  bid=4885539
  sid=2289317
  preview="Nanahira - I will... Kimi ga Iru Kara (Ryohka) [Compelling Love]"
  star=5.03
  max=1119
/>

### 抜きゲーみたいな島に住んでる貧乳（わたし）はどうすりゃいいですか？ · 住在拔作岛上的贫乳应该如何是好？

<Beatmap
  bid=2125589
  sid=1014034
  preview="Yumeno Yuki - BWLAUTE BEIRRD (Lasse) [Insane.]"
  star=5.47
  max=1273
/>

<Beatmap
  bid=1974601
  sid=945614
  preview="Yumeno Yuki - THE APPLE IS CAST! (Lasse) [Insane]"
  star=5.29
  max=953
/>

<Beatmap
  bid=3522426
  sid=1713134
  preview="Yumeno Yuki - Hijitsuzaikei Joshitachi wa Dou Surya Ii Desu ka? Another ver. (tutis) [ZevinLevin's Insane]"
  star=4.11
  max=1240
/>

### Summer Pockets · 夏日口袋

“唯有那份炫目 未曾忘却。”

“无论何时，我都会记得夏天的蓝……。”

<Beatmap
  bid=2330569
  sid=1115579
  preview="Suzuki Konomi - ALKATALE (iljaaz) [Wish]"
  star=4.71
  max=1363
/>

<Beatmap
  bid=3836615
  sid=1865269
  preview="Mizutani Runa - Hane no Yurikago (Garden) [Lullaby]"
  star=4.95
  max=1434
/>

<Beatmap
  bid=4330245
  sid=2069550
  preview="YURiKA - Yasouka (fnayR) [Fireworks]"
  star=3.74
  max=999
/>

<Beatmap
  bid=2848888
  sid=1378712
  preview="Tsumugi Wenders (CV: Iwai Emiri) - Golden Hours (Garden) [Special]"
  star=5.34
  max=1647
/>

<Beatmap
  bid=1710859
  sid=815767
  preview="Tsumugi Wenders (CV: Iwai Emiri) - Tsumugi no Natsuyasumi -Sunset Lighthouse Version- (Yumikoi) [Mugyugyu]"
  star=4.35
  max=1213
/>

### Little Busters!

恭介：

「 你有没有解明，这个世界的秘密 」

<Beatmap
  bid=2681759
  sid=1292131
  preview="Rita - Little Busters! ~TV animation ver.~ (TV Size) (Adinda) [Insane!]"
  star=4.59
  max=444
/>

<Beatmap
  bid=376291
  sid=153020
  preview="Lia - Saya's Song Remix (pkhg) [Saya]"
  star=4.59
  max=2143
/>

<Beatmap
  bid=228557
  sid=82612
  preview="Rita - Alicemagic ~TV animation ver.~ (Frostmourne) [Insane]"
  star=4.94
  max=1427
/>

### Kud Wafter

哇呼 哇呼 >ω<

<Beatmap
  bid=4719763
  sid=2225093
  preview="Suzuyu - Light A Way (Sakuya079) [Summer Memories]"
  star=3.84
  max=1060
/>

### 終のステラ · 星之终途

<Beatmap
  bid=3886087
  sid=1886461
  preview="Aimiya Zero - breath of stella (gazimal) [insane]"
  star=5.02
  max=1241
/>

<Beatmap
  bid=4674213
  sid=2207406
  preview="Aimiya Zero - Ortus (Sakuya079) [Blessing]"
  star=2.62
  max=614
/>

### Rewrite

<Beatmap
  bid=1018995
  sid=477045
  preview="Mizutani Runa (NanosizeMir) - Philosophyz ~TV animation ver.~ (TVsize) (Fycho) [Rewrite]"
  star=4.89
  max=499
/>

<Beatmap
  bid=963762
  sid=449126
  preview="yanaginagi - Koibumi (Shurelia) [Love Letter]"
  star=2.34
  max=707
/>

### Angel Beats!

<Beatmap
  bid=3622783
  sid=1769755
  preview="Lia - Heartily Song (Shurelia) [My Soul, Your Heart]"
  star=5.08
  max=1421
/>

<Beatmap
  bid=2764415
  sid=1334357
  preview="Girls Dead Monster STARRING LiSA - Ichiban no Takaramono ~Yui final ver.~ (Yumerios) [Eternal Love]"
  star=3.66
  max=1061
/>

### ONE ～輝く季節へ～ · ONE～辉之季节～

<Beatmap
  bid=4799137
  sid=2116405
  preview="fhana - Eien to Iu Hikari (Game Ver.) (My Angel Eririn) [kowari's Insane]"
  star=5.08
  max=735
/>

### サクラノ詩 －櫻の森の上を舞う－ · 樱之诗 -在樱花之森上飞舞-

<Beatmap
  bid=824389
  sid=376552
  preview="Hana - Sakura no Uta (Alyce) [Lecana's Insane]"
  star=4.82
  max=1176
/>

<Beatmap
  bid=1558875
  sid=738656
  preview="Hana - Sakura no Uta (Nevo) [sdafsf's Insane]"
  star=4.63
  max=532
/>

<Beatmap
  bid=4700801
  sid=1825533
  preview="monet - Arishi Hi no Tame ni (momoyo) [IV.Gust's Insane]"
  star=5.05
  max=1177
/>

### サクラノ刻 -櫻の森の下を歩む- · 樱之刻 -漫步于樱花之森下-

平凡的天才施展才能

真正的天才让人忘记才能

<Beatmap
  bid=3707402
  sid=1807736
  preview="Luna - Toki to Uta (Fushimi Rio) [Insane]"
  star=4.88
  max=554
/>

<Beatmap
  bid=4624791
  sid=2187373
  preview="Kano Nanaka - Sakura to Himawari (DarkWarriorX) [Insane]"
  star=3.58
  max=1087
  disabled=true
/>

### 素晴らしき日々～不連続存在～ · 美好的每一天～不连续存在～

世界又如何 补偿又如何 高岛又如何 诅咒又如何 死亡又如何 

我想拥抱她 只想拥抱她

除此之外 都无所谓 都死了又如何 世界亦然 我亦然 希实香亦然

什么都不剩又如何 一切都消失了又如何 我只想 我只是想拥抱她临死前 

即便，那只是刹那的世界

<Beatmap
  bid=106107
  sid=32430
  preview="Hana - Aerodynamics Girls and Boys Song (Patchouli) [Insane]"
  star=4.85
  max=1034
/>

<Beatmap
  bid=3170093
  sid=1551329
  preview="griffon nakano - soranosita (Mirash) [Djulus' Insane]"
  star=4.82
  max=1292
/>

<Beatmap
  bid=2625368
  sid=1220443
  preview="monet - Naglfar no Senjou nite (Luscent) [allein's Insane]"
  star=4.41
  max=1381
/>

<Beatmap
  bid=4837455
  sid=2271106
  preview="monet - Naglfar no Senjou nite (Gorou) [Expert]"
  star=5.41
  max=1356
/>

### 向日葵の教会と長い夏休み

<Beatmap
  bid=923244
  sid=427688
  preview="Hana - Sakura to Kotori (Giralda) [Laurier's Insane]"
  star=5.41
  max=1812
/>

<Beatmap
  bid=1609526
  sid=757784
  preview="Hana - Sakura to Kotori (Silky) [Irohas' Insane]"
  star=4.55
  max=916
/>

### ATRI -My Dear Moments-

「在日渐沉没的世界里，我找到了你。」

「当我和你相遇，停滞的时间再次开始了流动。」

<Beatmap
  bid=2492246
  sid=1130090
  preview="Yanagi Mami - Hikari Hanate! (Bellicose) [Lost's Extra]"
  star=4.77
  max=509
/>

<Beatmap
  bid=3459231
  sid=1692837
  preview="Yanagi Mami - Hikari Hanate! (Zekk) [Shizuwari's Insane]"
  star=4.96
  max=1222
/>

<Beatmap
  bid=4782344
  sid=2248936
  preview="Nogizaka46 - Ano Hikari (Sakuya079) [A Ray Of Hope Deep Beneath The Sea]"
  star=3.23
  max=894
/>

### 死に逝く君、館に芽吹く憎悪    濒死的卿于馆中萌生的憎恶

<Beatmap
  bid=1759602
  sid=834127
  preview="Denkishiki Karen Ongaku Shuudan - Yakata Mawari (Dored) [AF's Insane]"
  star=5.21
  max=576
/>

### キミの瞳にヒットミー  · 被你的眼神打动

<Beatmap
  bid=2750746
  sid=1322295
  preview="Uema Emi - Catch Light (Misure) [Insane]"
  star=4.68
  max=570
/>

### かけぬけ★青春スパーキング！ · 闪耀★青春追逐记

<Beatmap
  bid=3096488
  sid=1498595
  preview="Matsushita/nayuta - Love Vacation (tomatas95) [Insane]"
  star=4.65
  max=516
/>

<Beatmap
  bid=2594454
  sid=1246919
  preview="Matsushita/nayuta - Love Vacation (Kazato Asa) [Insane]"
  star=4.99
  max=1384
/>

### 魔法使いの夜 · 魔法使之夜

<Beatmap
  bid=670743
  sid=294042
  preview="supercell - Hoshi ga Matataku Konna Yoru ni ([Teichan]) [Sharlo's Insane]"
  star=4.72
  max=1064
/>

### 悠久之翼

“如果忘却的话，就请沉默到回忆起来。”

<Beatmap
  bid=4560844
  sid=2162675
  preview="Harada Hitomi - Eternal Feather (LostF4te) [Insane]"
  star=4.10
  max=464
/>

<Beatmap
  bid=1215792
  sid=573989
  preview="Hitomi Harada - ever forever (Shad0w1and) [Towa]"
  star=4.66
  max=1662
/>

### すぴぱら · SPPL

<Beatmap
  bid=4953478
  sid=2314653
  preview="Machico - Magical Happy Show! (Sakuya079) [Yume no mahou]"
  star=4.70
  max=1489
/>

### Dreamin' Her - 僕は、彼女の夢を見る。- · Dreamin' Her -我梦见了她。-

<Beatmap
  bid=4559000
  sid=1846282
  preview="isui - Oyasumi Monochrome (milkgreen) [Dreamin' Kako]"
  star=4.61
  max=1311
/>

<Beatmap
  bid=3624378
  sid=1770511
  preview="isui - Oyasumi Monochrome (Itsuuki) [Yume]"
  star=4.39
  max=403
/>

### はつゆきさくら · 初雪樱

交替轮回的春夏秋冬 即将结束的 1095 日

那或许会如梦似幻一般流逝而过吧 或许会如 Ghost 一般消逝而去吧

然而，又像樱花一样 留给人一种面向采来，再度绽放的预感。

<Beatmap
  bid=1090791
  sid=513343
  preview="fripSide - HesitationSnow (Koiyuki) [Souvenir]"
  star=4.40
  max=616
/>

<Beatmap
  bid=3498604
  sid=1712171
  preview="monet - GHOST x GRADUATION (Primonix) [Fluttering Petals]"
  star=4.61
  max=1144
/>

### 枯れない世界と終わる花 · 不败世界与终焉之花

<Beatmap
  bid=1130952
  sid=522940
  preview="AiRI - Towa ni Saku Hana (short ver.) (Toyosaki Aki) [Eternity]"
  star=4.65
  max=656
/>

<Beatmap
  bid=1791751
  sid=856144
  preview="AiRI - Towa ni Saku Hana (island) [AF's Insane]"
  star=4.79
  max=997
/>

### アストラエアの白き永遠 · 星辰恋曲的白色永恒

<Beatmap
  bid=654791
  sid=290683
  preview="Hashimoto Miyuki - Kisetsu o Dakishimete ~blooming white love~ (Kencho) [Insane]"
  star=4.62
  max=713
/>

<Beatmap
  bid=4885708
  sid=2284384
  preview="Hashimoto Miyuki - Kisetsu o Dakishimete ~blooming white love~ (Ayesha Altugle) [Insane]"
  star=4.63
  max=1584
/>

<Beatmap
  bid=1153268
  sid=544197
  preview="Suzuyu - Euphorium (Homura-) [Meg's Insane]"
  star=4.76
  max=702
/>

<Beatmap
  bid=1146761
  sid=537814
  preview="Suzuyu - Euphorium (Flower) [Insane]"
  star=4.93
  max=655
/>

<Beatmap
  bid=4422885
  sid=2106292
  preview="Suzuyu - Euphorium (- Nilou -) [Lasse's Insane]"
  star=5.07
  max=1611
/>

<Beatmap
  bid=1679720
  sid=779047
  preview="Suzuyu - Euphorium (Dored) [Collab Insane.]"
  star=5.38
  max=1676
/>

<Beatmap
  bid=4894572
  sid=2289897
  preview="Nitta Emi - White Eternity ~Memories in the air~ (10th Anniversary Re:mix) (Ayesha Altugle) [Insane]"
  star=4.77
  max=1365
/>

<Beatmap
  bid=396554
  sid=162622
  preview="Nitta Emi - White Eternity (Flower) [Insane]"
  star=4.94
  max=555
/>

<Beatmap
  bid=397904
  sid=163303
  preview="Nitta Emi - White Eternity (Laurier) [Insane]"
  star=4.57
  max=654
/>

<Beatmap
  bid=628687
  sid=276963
  preview="Nitta Emi - White Eternity (Sellenite) [-Yuzuriha's Insane]"
  star=4.67
  max=1213
/>

<Beatmap
  bid=3275649
  sid=1604013
  preview="Yuuki (CV: Futaba Marika) & Yuki (CV: Hanamiya Suzune) - smile again (tomatas95) [Insane]"
  star=4.51
  max=578
/>

### さくら、もゆ。 · 樱花、萌放

<Beatmap
  bid=3544157
  sid=1713744
  preview="Yamamoto Mineko - Rinne (Share) [Ex & Kowari's Insane]"
  star=4.73
  max=1368
/>

<Beatmap
  bid=2121155
  sid=1001755
  preview="Yamamoto Mineko - Rinne (Shirahane Suou) [Seto's Insane]"
  star=4.77
  max=1356
/>

<Beatmap
  bid=2197382
  sid=1018061
  preview="Yamamoto Mineko - Rinne (ScubDomino) [Left's Insane]"
  star=4.86
  max=1471
/>

<Beatmap
  bid=1990659
  sid=948133
  preview="Yamamoto Mineko - Rinne (Dored) [Silky's Insane]"
  star=4.51
  max=522
/>

<Beatmap
  bid=4017223
  sid=1913687
  preview="Yamamoto Mineko - Rinne (Share) [Insane]"
  star=4.31
  max=553
/>

<Beatmap
  bid=4685023
  sid=2185446
  preview="kanako - Sakura, Moyu (kanako) [precious]"
  star=4.92
  max=1403
/>

<Beatmap
  bid=4399477
  sid=2097599
  preview="Suzuyu - Owaranai Monogatari (Garden) [Neverending]"
  star=4.65
  max=1174
/>

<Beatmap
  bid=2139973
  sid=1022979
  preview="Sasaki Sayaka - Sakura, Reincarnation (Kowari) [Insane]"
  star=4.97
  max=1433
/>

<Beatmap
  bid=3700313
  sid=1793397
  preview="Sasaki Sayaka - Sakura, Reincarnation (TNTlealu) [Collab Insane]"
  star=4.86
  max=1423
/>

<Beatmap
  bid=3003741
  sid=1462119
  preview="Sasaki Sayaka - Sakura, Reincarnation (AsuKow) [AsuKo & Kyutei's Insane]"
  star=4.91
  max=635
/>

<Beatmap
  bid=1867048
  sid=884081
  preview="Sasaki Sayaka - Sakura, Reincarnation (Flower) [Insane]"
  star=4.74
  max=648
/>

### いろとりどりのセカイ · 五彩斑斓的世界

<Beatmap
  bid=2275504
  sid=1087831
  preview="Ceui - COLORFUL DAYS!! (Shikibe Mayu) [Insane]"
  star=4.98
  max=1433
/>

<Beatmap
  bid=2183905
  sid=617916
  preview="Ceui - COLORFUL DAYS!! (Cut Ver.) (Sarawatlism) [Lecana's Insane]"
  star=4.73
  max=513
/>

<Beatmap
  bid=206525
  sid=70744
  preview="Ceui - COLORFUL DAYS!! (SamiPale) [Hard]"
  star=4.20
  max=1046
/>

<Beatmap
  bid=4639464
  sid=2190901
  preview="eufonius - Aletheia (Game Ver.) (marty916) [Colorful]"
  star=4.38
  max=530
/>

<Beatmap
  bid=4953737
  sid=2265991
  preview="eufonius - Eien no Hikari ~Song of love to a blue sky~ (KoldNoodl) [Sora]"
  star=4.80
  max=1546
/>

<Beatmap
  bid=1919045
  sid=911279
  preview="eufonius - glowing world ~Kagayaki no, Sekai e~ (Dored) [Asuka_-'s Eternal Love.]"
  star=5.19
  max=1074
/>

<Beatmap
  bid=4737329
  sid=2231803
  preview="Sawada Natsu - Akai Hitomi ni Utsuru Sekai feat. Nikaidou Shinku (Tommy315) [Colorful World]"
  star=4.74
  max=1559
/>

<Beatmap
  bid=4840000
  sid=2271801
  preview="Ceui - Mi-fa-sol-la-si de Kiss Shiyou (KoldNoodl) [Collab Insane]"
  star=4.30
  max=1089
/>

### 星空のメモリア · 星空的记忆

<Beatmap
  bid=410798
  sid=169622
  preview="Shimotsuki Haruka - Kaleidoscope (Shurelia) [Insane]"
  star=4.47
  max=1173
/>

<Beatmap
  bid=1484777
  sid=701549
  preview="Sagara Kokoro - Hoshizora no Ima (Kyuukai) [PoNo's Insane]"
  star=4.57
  max=547
/>

<Beatmap
  bid=1800748
  sid=860649
  preview="Chata - Hoshizora no Memoria (Shurelia) [Stellar]"
  star=4.14
  max=1348
/>

### ジュエリー・ナイツ・アルカディア · 霞流宝石心

<Beatmap
  bid=3907110
  sid=1881323
  preview="KyoKa - Kimi to no Michishirube (eringiRa) [Ex & Kuroame's Expert]"
  star=5.22
  max=653
/>

<Beatmap
  bid=4319385
  sid=1980306
  preview="KyoKa - Kimi to no Michishirube (Zetsu-) [Rittoru's Insane]"
  star=5.03
  max=1430
/>

<Beatmap
  bid=3743710
  sid=1794173
  preview="Sasaki Sayaka - Will of Adamant (tomatas95) [V. Love Blossom]"
  star=5.00
  max=536
/>

<Beatmap
  bid=5012526
  sid=2278116
  preview="uniy - Addict of justice (Game Ver.) (tomatas95) [V. Interweaving Butterfly Pledge]"
  star=5.33
  max=522
/>

### コイバナ恋愛 · 八卦恋爱

<Beatmap
  bid=4846849
  sid=2251109
  preview="Kohinata Chiko - Rashikunai Koi (FreezingAnimenz) [karupa's Insane]"
  star=5.14
  max=981
/>

<Beatmap
  bid=4359192
  sid=2052878
  preview="Kohinata Chiko - Hetakuso na Koi (tomatas95) [Insane]"
  star=4.90
  max=557
/>

### けもの道☆ガーリッシュスクエア · 兽娘道 ☆ Girlish Square

<Beatmap
  bid=3472818
  sid=1644043
  preview="Ouse Akira - Girlish * Love (Short Ver.) (tomatas95) [Insane]"
  star=5.10
  max=576
/>

<Beatmap
  bid=4459499
  sid=2089049
  preview="Ouse Akira - Girlish * Love (cutefro) [Insane]"
  star=4.96
  max=1573
/>

### 銀色、遥か · 银色、遥远

<Beatmap
  bid=1024725
  sid=479942
  preview="Ceui - Giniro, Haruka (-Nanaka-) [Moon Snow]"
  star=4.04
  max=542
/>

<Beatmap
  bid=4578813
  sid=2169732
  preview="Kicco - Himawari (poces) [Hana no monogatari]"
  star=4.50
  max=987
/>

<Beatmap
  bid=2791537
  sid=1348040
  preview="Duca - Koiiro Sekai (Shirahane Suou) [Insane]"
  star=4.53
  max=1166
/>

### ノラと皇女と野良猫ハート · 野良与皇女与流浪猫之心

<Beatmap
  bid=1352605
  sid=637579
  preview="Haruka Sora, Kotorii Yuuka, Kamishiro Misaki, Kiritani Hana - Noraneko Heart (Asuka_-) [Insane]"
  star=4.95
  max=568
/>

<Beatmap
  bid=4015465
  sid=1810832
  preview="Iris December Uncry (CV: Hanazono Mei), Noel the Nextseason (CV: Ameba Tsukasa) - Crying Heart (Game Ver.) (Uzawa Reisa) [Sea's Insane]"
  star=4.82
  max=561
/>

<Beatmap
  bid=2787180
  sid=1345858
  preview="Iris December Uncry (CV: Hanazono Mei), Noel the Nextseason (CV: Ameba Tsukasa) - Crying Heart (Primonix) [Asa's Insane]"
  star=4.99
  max=1400
/>

<Beatmap
  bid=4106707
  sid=1976035
  preview="Takamori Natsumi, Sendai Eri, Asakawa Yuu, Tanezaki Atsumi - Ne! Ko! (MiyohashiKoori) [Firika's Insane]"
  star=5.07
  max=1709
/>

### 美少女万華鏡 · 美少女万华镜

<Beatmap
  bid=1431388
  sid=676776
  preview="Amamiya Erika - Ikitoshi Ikeru Mono (Yugu) [Illusive]"
  star=4.39
  max=346
/>

<Beatmap
  bid=5027881
  sid=2340301
  preview="Amamiya Erika - Ikitoshi Ikeru Mono (poces) [Kagura]"
  star=4.44
  max=1022
/>

### 月に寄りそう乙女の作法 · 近月少女的礼仪

<Beatmap
  bid=1637628
  sid=779909
  preview="Misato Aki - DESIRE (Asuka_-) [Insane]"
  star=5.14
  max=574
/>

<Beatmap
  bid=804246
  sid=365826
  preview="Misato Aki - Glitter (Misure) [Insane]"
  star=4.84
  max=451
/>

### それは舞い散る桜のように · 繁花落舞恋如樱

<Beatmap
  bid=3844265
  sid=1868562
  preview="Riryka - principle (Lasse) [Insane]"
  star=5.13
  max=1386
/>

### さくらの雲＊スカアレットの恋 · 樱色之云＊绯色之恋

<Beatmap
  bid=2895825
  sid=1404039
  preview="KyoKa - Ouran Romancia (Yuuma) [Insane]"
  star=4.22
  max=476
/>

<Beatmap
  bid=3398700
  sid=1656553
  preview="Ouse Akira - Hiyoku no Sakura (Cut Ver.) (Left) [Insane]"
  star=4.66
  max=570
/>

<Beatmap
  bid=2716291
  sid=1298109
  preview="Ouse Akira - Hiyoku no Sakura (gazimal) [Asa's Insane]"
  star=5.11
  max=1627
/>

<Beatmap
  bid=3854916
  sid=1863372
  preview="KyoKa - Yumemi Hanabira (tomatas95) [Insane]"
  star=4.75
  max=511
/>

### LOST:SMILE memories + promises

<Beatmap
  bid=2126411
  sid=1015930
  preview="Nayugorou - White Promise (Asuka_-) [Insane]"
  star=5.08
  max=442
/>

<Beatmap
  bid=3627901
  sid=1766146
  preview="Nayugorou - White Promise (ckharv) [Zekk's Insane]"
  star=4.84
  max=1179
/>

### 月の彼方で逢いましょう · 相逢在明月映照的彼岸

<Beatmap
  bid=4438882
  sid=2114055
  preview="Yumeno Yuki - With Tomorrow (frozz) [Feelings]"
  star=4.44
  max=838
/>

### ちいさな彼女の小夜曲 · 娇小女孩的小夜曲

<Beatmap
  bid=532459
  sid=228678
  preview="Sasaki Sayaka - Kiss no Hitotsu de short (Momovely) [Insane]"
  star=4.78
  max=567
/>

<Beatmap
  bid=1348405
  sid=613158
  preview="Sasaki Sayaka - Kiss no Hitotsu de (Left) [NiNo's Insane]"
  star=4.57
  max=1328
/>

<Beatmap
  bid=1005190
  sid=182958
  preview="Sasaki Sayaka - Marine Blue ni Sotte (Koiyuki) [Meg's Insane]"
  star=4.86
  max=1168
/>

### Garden

<Beatmap
  bid=4238950
  sid=2033393
  preview="Duca - Ai no Niwa (poces) [Ai no Uta]"
  star=3.59
  max=854
/>

### 出会って5分は俺のもの！時間停止と不可避な運命

<Beatmap
  bid=3268564
  sid=1531782
  preview="Duca - Time is (tomatas95) [Insane]"
  star=4.84
  max=473
/>

### 魔女恋爱日记

<Beatmap
  bid=3143146
  sid=1537235
  preview="monet - Eien no Mahoutsukai (SheepChef) [Takumi]"
  star=3.37
  max=917
/>

### 沙耶の唄 · 沙耶之歌

<Beatmap
  bid=716298
  sid=322137
  preview="Ito Kanako - Garasu no Kutsu (Maruyu) [~]"
  star=3.46
  max=1150
/>

### STEINS;GATE · 命运石之门

<Beatmap
  bid=805256
  sid=352726
  preview="Ito Kanako - Skyclad no Kansokusha (N a s y a) [Guy's Insane]"
  star=4.77
  max=558
/>

<Beatmap
  bid=907850
  sid=416129
  preview="Ito Kanako - Skyclad no Kansokusha (Linada) [Time Travel]"
  star=5.41
  max=1484
/>

<Beatmap
  bid=246599
  sid=89379
  preview="Itou Kanako - Hacking to the Gate (TV Size) (Chloe) [Insane]"
  star=4.58
  max=495
/>

<Beatmap
  bid=5050549
  sid=2347952
  preview="Ito Kanako - Hacking to the Gate (Avias_) [Steins;Gate]"
  star=5.52
  max=1153
/>

<Beatmap
  bid=797292
  sid=363067
  preview="Ito Kanako - Amadeus (TT Mouse) [z1085684963's Insane]"
  star=4.57
  max=465
/>

<Beatmap
  bid=840538
  sid=384688
  preview="Ito Kanako - Amadeus (FrostxE) [Insane]"
  star=5.13
  max=1156
/>

<Beatmap
  bid=1876016
  sid=898005
  preview="Ito Kanako - Fatima (TV Size) (Sotarks) [Reform's Insane]"
  star=4.60
  max=493
/>

<Beatmap
  bid=4672730
  sid=2202465
  preview="Ito Kanako - Fatima (Kanui) [Insane]"
  star=4.80
  max=1278
/>

<Beatmap
  bid=1691921
  sid=806067
  preview="Zwei - LAST GAME (Kalibe) [Emptiness]"
  star=4.85
  max=1385
/>

<Beatmap
  bid=1319464
  sid=625938
  preview="Eri Sasaki - Gate of Steiner (Vocal Version) (rockstarrzz) [El Psy Congroo]"
  star=4.90
  max=986
/>

<Beatmap
  bid=1782834
  sid=853034
  preview="Zwei - Lyra (Nagi Hisakawa) [Orihime]"
  star=4.64
  max=1254
/>

<Beatmap
  bid=1164084
  sid=549739
  preview="Ayane - Itsumo Kono Basho de (Kalibe) [Mirai]"
  star=4.75
  max=1344
/>

### CHAOS;CHILD · 混沌之子

<Beatmap
  bid=2160522
  sid=1029189
  preview="Ito Kanako - Hijitsuzai Seishounen (Game Ver.) (kuyusu) [Neiro's Insane]"
  star=4.24
  max=549
/>

<Beatmap
  bid=4143586
  sid=1993935
  preview="Kanako Itou - Silent Wind Bell (piss chan) [Silent Sky]"
  star=3.19
  max=746
/>

<Beatmap
  bid=1691293
  sid=805733
  preview="Ito Kanako - Uncontrollable (TV Size) (schoolboy) [Djulus' Insane]"
  star=4.80
  max=497
/>

### ヨスガノソラ · 缘之空

<Beatmap
  bid=1292111
  sid=612225
  preview="eufonius - Hiyoku no Hane (nice_safaleen) [Insane]"
  star=4.83
  max=1215
/>

### こなたよりかなたまで · 从此方到彼方

<Beatmap
  bid=4767732
  sid=2243030
  preview="KOTOKO - Imaginary Affair (marty916) [Insane]"
  star=4.21
  max=574
/>

### アイキス · 爱之吻

<Beatmap
  bid=4453801
  sid=2113814
  preview="Matsushita - Koishichatta Mitai (tomatas95) [Insane]"
  star=4.68
  max=549
/>

<Beatmap
  bid=3453781
  sid=1690080
  preview="Sakura Miko - as x sist ~Amae Beta na Watashi Nari ni~ (Didah) [Insane]"
  star=4.78
  max=588
/>

<Beatmap
  bid=4438356
  sid=2113813
  preview="Se-fukubu - Sweet Sweet True Love (tomatas95) [First Love Syndrome]"
  star=4.73
  max=554
/>

<Beatmap
  bid=4547547
  sid=2105253
  preview="Sakura Miko, Houshou Marine, AZKi - Kiss me! Choose me! (tomatas95) [Insane]"
  star=4.69
  max=629
/>

<Beatmap
  bid=4581453
  sid=2149578
  preview="Sakuragawa Megu feat. Se-fukubu - Blooming Kiss! (Game Ver.) (tomatas95) [Light Insane]"
  star=4.45
  max=495
/>

### D.C.

<Beatmap
  bid=4430064
  sid=2110359
  preview="Rin'ca - Koisuru MODE (Ozato Fumika) [Erisu's Insane]"
  star=4.85
  max=693
/>

<Beatmap
  bid=3044289
  sid=1457658
  preview="Rin'ca - Koisuru MODE (Hakusui3820) [ALEX'S INSANE]"
  star=5.26
  max=1458
/>

<Beatmap
  bid=4465434
  sid=2124640
  preview="Rin'ca - Kimi ga Hohoemu kara (Aiman Joe) [Source of Happiness]"
  star=4.51
  max=1116
/>

<Beatmap
  bid=4005281
  sid=1915289
  preview="Rin'ca - Kimi ga Hohoemu kara (tomatas95) [Hanasanaide Kudasai, Itsumo Zutto Soba ni Ite]"
  star=4.42
  max=499
/>

<Beatmap
  bid=4928770
  sid=2305327
  preview="yozuca* - Sakura Biyori (Sakuya079) [Ashita no kibou]"
  star=4.62
  max=1304
/>

<Beatmap
  bid=4772791
  sid=2237133
  preview="Rin'ca - Kiseki Melody (Game Ver.) (MochiA) [Nilou's Insane]"
  star=4.91
  max=496
/>

<Beatmap
  bid=3650418
  sid=1754642
  preview="Rin'ca - Kiseki Melody (pnky) [KoldNoodl's Insane]"
  star=4.72
  max=1233
/>

<Beatmap
  bid=5059691
  sid=2350860
  preview="yozuca* - Ima o Wasurenai (Short Ver.) (Share) [Amats & Share's Insane]"
  star=4.61
  max=511
/>

<Beatmap
  bid=3495284
  sid=1709393
  preview="Rin'ca - Kiseki no Itazura (Noname Neko) [dahkjdas' Insane]"
  star=4.92
  max=564
/>

<Beatmap
  bid=4889050
  sid=2290581
  preview="yozurino* - Koisuru X'mas (Game Ver.) (tomatas95) [Senpai, I'll be your Gift from now and forever~]"
  star=4.84
  max=444
/>

<Beatmap
  bid=245123
  sid=89276
  preview="fripSide - endless memory ~refrain as Da Capo~ (Xinely) [Collab]"
  star=3.44
  max=495
/>

<Beatmap
  bid=3206904
  sid=1570447
  preview="fripSide - endless memory ~refrain as Da Capo~ (gokugohan12468) [Another ~refrain as Da Baby~]"
  star=4.92
  max=747
/>

### アンラベル・トリガー · Unravel Trigger

<Beatmap
  bid=4837677
  sid=2270197
  preview="Sasaki Sayaka - Unravel Sky (Share) [Amats & Share's Insane]"
  star=5.09
  max=1445
/>

<Beatmap
  bid=4637586
  sid=2187360
  preview="Sasaki Sayaka - Unravel Sky (tomatas95) [Insane]"
  star=4.81
  max=601
/>

<Beatmap
  bid=4656914
  sid=2200420
  preview="Hiiragi Tamaki - Snowdrop (Lasse) [Blossom]"
  star=5.06
  max=1214
/>

<Beatmap
  bid=4680106
  sid=2205634
  preview="Ayumi. - Deciding the future (Lasse) [Insane]"
  star=4.90
  max=1327
/>

### ネコと女子寮せよ！

<Beatmap
  bid=4147143
  sid=1995461
  preview="Yasaka Kanon (CV: Akabane Kyouko) - Kimiiro (lushifer) [me & who?]"
  star=4.37
  max=1166
/>

### WHITE ALBUM2

<Beatmap
  bid=1127250
  sid=531972
  preview="Ogiso Setsuna (CV. Yonezawa Madoka) - Anata o Omoitai (Shad0w1and) [Mite Ite]"
  star=4.49
  max=1312
/>

<Beatmap
  bid=927939
  sid=430141
  preview="Uehara Rena - Answer (Shad0w1and) [Shinjitsu]"
  star=4.72
  max=1143
/>

<Beatmap
  bid=1048097
  sid=491931
  preview="Rena Uehara - closing (Shad0w1and) [Heartbroken]"
  star=5.26
  max=1557
/>

### Memories Off · 秋之回忆

<Beatmap
  bid=4630537
  sid=2189332
  preview="Memories Off 1st & 2nd Members - Ame Nochi Omoide (wanjia) [Memories]"
  star=3.70
  max=1197
/>

<Beatmap
  bid=2172462
  sid=1039296
  preview="Murata Ayumi - Drawing Again (Luscent) [Flower of Happiness]"
  star=5.40
  max=1848
/>

<Beatmap
  bid=2139971
  sid=1008301
  preview="Ayane - Resilience (Garden) [Misure's Insane]"
  star=4.63
  max=669
/>

<Beatmap
  bid=2168246
  sid=1037090
  preview="Ayane - Agaranai Ame wa Nain da yo (Garden) [Dearest]"
  star=4.89
  max=1323
/>

<Beatmap
  bid=1011629
  sid=473427
  preview="Ayane - Kimi no Kakera (Shad0w1and) [Insane]"
  star=4.59
  max=542
/>

### Clover Day's

<Beatmap
  bid=4104069
  sid=1977030
  preview="Marie - Clover Heart's -New days recording- (Game Ver.) (tomatas95) [Four-leaf Clover Promise]"
  star=4.56
  max=708
/>
`,Nf=Object.freeze(Object.defineProperty({__proto__:null,default:Rf},Symbol.toStringTag,{value:"Module"})),Df=`---
date: 2026-05-30
---

# BenZn 的跳图推荐\\#刷pp！

<Player
id=32406156
name="BenZn"
country=3865
global=55566
from="CN"
accuracy=94.59
level=95
progress=53
performance=2994
/>

## 时长 <= 1分钟

### 0 ~ 160 BPM

<Beatmap
bid=1182090
sid=557532
preview="bradbreeck - Emotional Uplifting Orchestral (Venix) [Heaven]"
star=2.84
max=108
/>

<Beatmap
bid=1241727
sid=586306
preview="Veritas Unae - ~DISK 1~ (100bit) [Hard]"
star=2.66
max=75
alias="•~DISK 1~•"
/>

<Beatmap
bid=1802637
sid=861685
preview="R3 Music Box - Harumachi Clover (Nao Tomori) [Insane]"
star=3.03
max=106
alias="等待春天的三叶草"
/>

<Beatmap
bid=1711830
sid=816264
preview="55x55 - MY REZHEM KINOLENTY (feat. Cut The Crap) (Shmiklak) [CUT THE INSANE]"
star=3.65
max=158
alias="我们裁切着胶片"
/>

<Beatmap
bid=5532470
sid=2510616
preview="TIA feat. Le Thien Hieu - Ai Dua Em Ve (Cukak Remix) (Agnes Tachyon Low Cortisol Edit) (Cut Ver.) (Bloxi) [High Cortisol]"
star=3.68
max=119
alias="皮质醇的小曲"
/>

<Beatmap
bid=5536809
sid=2511935
preview="Omoinotake - Ubugoe (TV Size) (Isagi Yoichi) [Insane]"
star=4.32
max=289
alias="产声"
/>

<Beatmap
bid=1396152
sid=652412
preview="Hanasaka Yui(CV: M.A.O) - Harumachi Clover (ezek) [Fiery's Extra]"
star=4.54
max=148
alias="等待春天的三叶草"
/>

<Beatmap
bid=1278814
sid=600702
preview="Hanasaka Yui(CV: M.A.O) - Harumachi Clover (Djulus) [Tarrasky's True Love]"
star=4.54
max=147
alias="等待春天的三叶草"
/>

<Beatmap
bid=1592917
sid=757146
preview="Tanaka Hirokazu - C-TYPE (Arf) [S-TYPE]"
star=4.86
max=167
/>

<Beatmap
bid=4855939
sid=2278283
preview="Jaxomy x Agatino Romero x Raffaella Carra - Pedro (Cut Ver.) (Bloxi) [Youru's Another]"
star=4.46
max=240
/>

<Beatmap
bid=5481862
sid=2494398
preview="Katy Perry - Last Friday Night (T.G.I.F.) (Nightcore & Cut Ver.) (PikAqours) [We definitely kissed]"
star=4.99
max=261
/>

### 160 ~ 200 BPM

<Beatmap
bid=2659911
sid=1280506
preview="EDOGA-SULLIVAN - WONDERFUL WONDER (TV Size) (Kuki1537) [Simple Heart]"
star=4.93
max=275
/>

<Beatmap
bid=1994802
sid=954164
preview="EDOGA-SULLIVAN - WONDERFUL WONDER (TV Size) (Unranked Mapper) [Lust]"
star=4.71
max=253
/>

<Beatmap
bid=4899737
sid=2294177
preview="Victorious Cast - Take a Hint feat. Victoria Justice & Elizabeth Gillies (Nightcore & Cut Ver.) (Aakki) [Malphs' Expert]"
star=4.53
max=234
/>

<Beatmap
bid=486513
sid=206284
preview="FELT - In my room (Aka) [Tranquility]"
star=4.08
max=197
/>

<Beatmap
bid=5336546
sid=2445174
preview="OneRepublic - Sunshine (Nightcore & Cut Ver.) (Smoke) [Wonder]"
star=5.15
max=316
/>

<Beatmap
bid=5488396
sid=2496558
preview="Ava Max - So Am I (Nightcore & Cut Ver.) (melae) [Outcast]"
star=4.92
max=238
/>

<Beatmap
bid=1797557
sid=859783
preview="Will Stetson - Harumachi Clover (Swing Arrangement) (Will Stetson) [Mohab's Insane]"
star=4.17
max=148
alias="等待春天的三叶草"
/>

<Beatmap
bid=2596018
sid=1249048
preview="Set It Off - Horrible Kids (My Angel Ram) [Kuki's Extra]"
star=5.32
max=315
/>

<Beatmap
bid=2514777
sid=1207609
preview="Seth Everman - how to create the weeknd's “blinding lights” (browiec) [mario and bowser kissing (illegal)]"
star=4.56
max=199
/>

<Beatmap
bid=5482414
sid=2494533
preview="MARETU - Tool (SotoWH) [Here Comes The Pain!!!!!]"
star=5.13
max=162
alias="工具"
/>

<Beatmap
bid=5320175
sid=2390209
preview="Porcelain Black - Pretty Little Psycho (Nightcore & Cut Ver.) (Mita) [Parad0xa's Insane]"
star=4.16
max=223
/>

<Beatmap
bid=5463343
sid=2487912
preview="3OH!3 - My First Kiss (feat. Ke$ha) (Nightcore & Cut Ver.) (Mita) [Mimari's Extra]"
star=5.32
max=243
/>

<Beatmap
bid=5391263
sid=2463569
preview="Marina and the Diamonds - How to Be a Heartbreaker (Nightcore & Cut Ver.) (Mita) [Parad0xa's Expert]"
star=4.90
max=275
/>

<Beatmap
bid=4883955
sid=2281428
preview="Groove Coverage - Poison (Nightcore & Cut Ver.) (My Angel Ram) [kowari's Insane]"
star=4.43
max=295
/>

<Beatmap
bid=5497460
sid=2499570
preview="Paramore - Still Into You (Nightcore & Cut Ver.) (aaeky) [Insane]"
star=4.20
max=266
/>

<Beatmap
bid=5486309
sid=2495916
preview="Miley Cyrus - The Best of Both Worlds (Nightcore & Cut Ver.) (Mimari) [Insane]"
star=4.28
max=192
/>

<Beatmap
bid=5440267
sid=2479183
preview="Erika - I Don't Know (Nightcore & Cut Ver.) (Mita) [Ram's Another]"
star=4.56
max=181
/>

<Beatmap
bid=5571526
sid=2515511
preview="EDOGA-SULLIVAN - WONDERFUL WONDER (TV Size & Sped Up Ver.) (Sotarks) [Smoke's INSANE]"
star=4.43
max=260
/>

<Beatmap
bid=2025941
sid=968171
preview="MIMI feat. Hatsune Miku - Mizuoto to Curtain (Log Off Now) [Insane]"
star=4.37
max=251
alias="水音与窗帘"
/>

<Beatmap
bid=5520366
sid=2506803
preview="renforshort - feeling good (nightcore & cut ver.) (Mimari) [snyc's insane]"
star=4.35
max=237
/>

<Beatmap
bid=5556337
sid=2513672
preview="FLORE - GRIM (NIGHTCORE & CUT VER.) (Smoke) [MELAE'S INSANE]"
star=4.21
max=222
/>

<Beatmap
bid=2222887
sid=1061287
preview="Turbo - PADORU / PADORU (DeRandom Otaku) [Insane]"
star=4.39
max=173
/>

<Beatmap
bid=5630985
sid=2530233
preview="renforshort - made for you (nightcore & cut ver.) (RL34_) [wesley's expert]"
star=4.70
max=298
/>

<Beatmap
bid=4873747
sid=2282704
preview="Marina and the Diamonds - Bubblegum Bitch (Nightcore & Cut Ver.) (Parad0xa) [Andrea's Insane]"
star=4.79
max=332
/>

### 200 ~ 240 BPM

<Beatmap
bid=1618411
sid=765778
preview="Icon For Hire - Make a Move (Speed Up Ver.) (Sotarks) [Light Insane]"
star=4.57
max=236
/>

<Beatmap
bid=5640686
sid=2543417
preview="Olivia Rodrigo - good 4 u (nightcore & cut ver.) (Mita) [snyc's insane]"
star=4.40
max=261
/>

<Beatmap
bid=1287025
sid=609311
preview="Roromiya Karuta(Hanazawa Kana) - sweets parade (gary00737) [117's Insane]"
star=4.51
max=243
/>

<Beatmap
bid=1869937
sid=894883
preview="Aiurabu - Kani*Do-Luck! (TV Size) (Azunyan-) [Insane!]"
star=4.49
max=380
alias="螃蟹☆Do-Luck!"
/>

<Beatmap
bid=4942574
sid=2310271
preview="Aiurabu (CV: Nakajima Yui, Iida Yuuko, Tamura Nao) - Kani*Do-Luck! (TV Size) (KeyWee) [Laurier's Insane Crab]"
star=4.67
max=375
alias="螃蟹☆Do-Luck!"
/>

<Beatmap
bid=5296271
sid=2431217
preview="Charli XCX - Boom Clap (kyoto Remix) (Sped Up & Cut Ver.) (riot1133) [hard]"
star=3.56
max=186
/>

<Beatmap
bid=5465357
sid=2488678
preview="The Living Tombstone - Cats (Cut Ver.) (fetch) [Insane]"
star=4.31
max=204
/>

<Beatmap
bid=5127728
sid=2374386
preview="Aziya - bbydoll (nightcore & cut ver.) (riot1133) [insane]"
star=4.46
max=320
/>

<Beatmap
bid=4958654
sid=2252051
preview="beethow - klik klak brazil strelyayet (f e e l) [LIGHT INSANE]"
star=4.23
max=246
alias="клик клак brazil стреляет"
/>

<Beatmap
bid=4419204
sid=2104327
preview="Apollo - Brazil (moonpoint) [Insane]"
star=4.83
max=235
/>

<Beatmap
bid=5065499
sid=2352698
preview="ONE OK ROCK - American Girls (Juztan Remix) (Tylerderp) [Parad0xa's Insane]"
star=4.56
max=298
/>

<Beatmap
bid=4838541
sid=1464487
preview="NateWantsToBattle - Chug Jug With You, but i can't anymore (Smoke) [Light Insane]"
star=4.65
max=309
/>

<Beatmap
bid=5114381
sid=2360937
preview="Pedro Silva - Valour Against All Odds (Mita) [mqno's Insane]"
star=4.74
max=310
/>

<Beatmap
bid=5474447
sid=2440245
preview="Sayfalse, Scythermane, TRXSHBXY - ESSE CARA! (Mita) [INSANE!]"
star=4.31
max=255
/>

### 240 ~ 300 BPM

<Beatmap
bid=4791391
sid=2252729
preview="toby fox - Song That Might Play When You Fight Sans (Smoke) [Light Insane]"
star=4.40
max=393
/>

<Beatmap
bid=4886794
sid=2288607
preview="Tomoya Ohtani - Unstoppable (-AzuMi) [Insane]"
star=4.48
max=230
/>

<Beatmap
bid=4876930
sid=2285243
preview="Jeff Williams feat. Casey Lee Williams - Time to Say Goodbye (TV Size) (My Angel Ram) [Amats' Insane]"
star=5.02
max=246
/>

## 时长 <= 2分钟

### 0 ~ 160 BPM

<Beatmap
bid=5039100
sid=2344112
preview="Miki Sayaka (CV: Kitamura Eri), Sakura Kyoko (CV: Nonaka Ai) - and I'm home (TV Size) (craxtz) [lachrymose]"
star=4.26
max=310
/>

<Beatmap
bid=277969
sid=106001
preview="Hanazawa Kana - Yuki ni Saku Hana (TV Size) (Damnae) [Hard]"
star=3.44
max=355
alias="盛开在雪中的花"
/>

<Beatmap
bid=2449792
sid=1174505
preview="The Cab - Angel With A Shotgun (Sped Up Ver.) (Sotarks) [Sacred Bullet]"
star=4.52
max=329
/>

<Beatmap
bid=932185
sid=432290
preview="Sawamura Spencer Eriri (CV.Oonishi Saori) - Blooming Lily (Momoka) [Insane]"
star=4.19
max=466
/>

<Beatmap
bid=1546205
sid=705434
preview="riya (eufonius) / Ceui - Chroma (Game Ver.) (Firis Mistlud) [Gust's Atelier Lydie & Suelle]"
star=4.49
max=373
alias="炫彩"
/>

<Beatmap
bid=2347052
sid=1123162
preview="Sayuri - Sore wa Chiisana Hikari no Youna (TV Size) (Kuki1537) [Revival]"
star=4.20
max=371
alias="犹如微弱的光芒"
/>

<Beatmap
bid=152826
sid=49594
preview="KOTOKO - unfinished (TV Size) (Melophobia) [Insane]"
star=4.19
max=382
/>

<Beatmap
bid=5181352
sid=2393021
preview="ano - Happy Lucky Chappy (TV Size) (0ppInOsu) [Loop4]"
star=4.08
max=287
alias="快乐幸运恰皮"
/>

<Beatmap
bid=5437021
sid=2478741
preview="Lucky Twice - Lucky (Nightcore & Cut Ver.) (Fufla) [Charming]"
star=4.67
max=282
/>

<Beatmap
bid=4977898
sid=2323038
preview="Avril Lavigne - What The Hell (Cut Ver.) (Tylerderp) [Careless]"
star=4.50
max=356
/>

<Beatmap
bid=748438
sid=338293
preview="Lia - Bravely You (TV Size) (Enon) [Insane]"
star=4.41
max=409
/>

<Beatmap
bid=407544
sid=167836
preview="Petit Rabbit's - Daydream cafe (TV Size) (Neta) [Insane]"
star=4.18
max=433
/>

<Beatmap
bid=4903535
sid=2295884
preview="Porcelain Black - Pretty Little Psycho (Nightcore & Cut Ver.) (Fufla) [Relentless]"
star=4.65
max=272
/>

<Beatmap
bid=5150129
sid=2382142
preview="Jessie J - Domino (Nightcore & Cut Ver.) (Kumocha) [Desire]"
star=4.40
max=328
/>

<Beatmap
bid=4962030
sid=2314502
preview="Zachz Winner - blu (Bloxi) [fufla at 3am]"
star=4.43
max=332
/>

<Beatmap
bid=2777472
sid=1324491
preview="Nakanoke no Itsutsugo - Gotoubun no Katachi (TV Size) (Gaia) [eINess' Ichika]"
star=4.82
max=440
alias="五等分的形式 / 花嫁"
/>

### 160 ~ 200 BPM

<Beatmap
bid=4986651
sid=2307369
preview="Hitachi Mako (CV: Kotorii Yuuka) - Mako no Nichijou (Short Ver.) (Tokiwa Kano) [Kumocha's Insane]"
star=4.60
max=481
alias="茉子的日常"
/>

<Beatmap
bid=1783814
sid=853519
preview="Amatsuki - DORAEMON (Nevo) [Insane]"
star=4.61
max=450
alias="哆啦 A 梦"
/>

<Beatmap
bid=5022611
sid=2338699
preview="Code Red - 18 (Nightcore & Cut Russian Ver.) (Tarrasky) [Insane]"
star=4.71
max=359
/>

<Beatmap
bid=1264763
sid=596704
preview="ClariS - Hitorigoto -TV MIX- (Doormat) [Little's Insane]"
star=4.48
max=440
alias="独白"
/>

<Beatmap
bid=2098783
sid=1002716
preview="Digital Sexy - Til Death (Nightcore Mix) (Sotarks) [Expert]"
star=5.05
max=612
/>

<Beatmap
bid=5650018
sid=2548608
preview="Annabel - Signal Graph (TV Size) (Harumiii) [Insane]"
star=4.40
max=486
alias="信号图"
/>

<Beatmap
bid=5041492
sid=1309426
preview="Avril Lavigne - What The Hell (Sped Up & Cut Ver.) (Froskya) [killian's Expert]"
star=4.76
max=400
/>

<Beatmap
bid=1062037
sid=373744
preview="Domino Brothers - Just 4 You (Nightcore Mix) (MkGuh) [Voli's Super Insane]"
star=4.55
max=427
/>

<Beatmap
bid=1509549
sid=714239
preview="Chito (CV: Minase Inori), Yuuri (CV: Kubo Yurika) - More One Night (Assertive Hardcore Bootleg) [short ver.] (SquareTude) [Kibb's Insane]"
star=5.31
max=437
/>

<Beatmap
bid=2596017
sid=1249048
preview="Set It Off - Horrible Kids (My Angel Ram) [Insane]"
star=4.21
max=331
/>

<Beatmap
bid=2756887
sid=1328989
preview="YOASOBI - Kaibutsu (TV Size) ([-Evil-]) [PikA's Insane ft. Kuro]"
star=4.26
max=447
alias="怪物"
/>

<Beatmap
bid=4575011
sid=2168363
preview="Pmarusama. - Zenryoku Joshi Kakumei! (TV Size) (Hina Sorasaki) [Secret Insane]"
star=4.72
max=450
alias="全力女子革命！"
/>

<Beatmap
bid=5094400
sid=2363063
preview="The Beaches - Blame Brett (Sped Up & Cut Ver.) (ralsei fan) [Amats' Insane]"
star=4.22
max=454
/>

<Beatmap
bid=4521132
sid=2112582
preview="Angerfist - Knock Knock (Shmiklak) [Mizujin's Another]"
star=5.17
max=483
/>

<Beatmap
bid=4906158
sid=2296940
preview="ONE OK ROCK - Start Again (Cut Ver.) (ONE OK ROCK) [Rosiie's Expert]"
star=4.91
max=349
/>

<Beatmap
bid=1418128
sid=670558
preview="YURiCa/Hanatan - Cat Food (Garden) [Insane]"
star=4.04
max=425
alias="猫粮"
/>

<Beatmap
bid=1746869
sid=720066
preview="Yuzuki - Dear You (DJ Genericname DnB Remix) (Spkz) [Dear Spkz (Extra)]"
star=5.17
max=620
/>

<Beatmap
bid=4994392
sid=2292009
preview="Aitsuki Nakuru - Monochrome Butterfly (Cut Ver.) (- Nilou -) [Fuxi's Hard]"
star=3.68
max=432
/>

<Beatmap
bid=1623092
sid=770300
preview="Aitsuki Nakuru - Monochrome Butterfly (Sotarks) [A r M i N's Expert]"
star=5.07
max=455
/>

<Beatmap
bid=4882671
sid=2288193
preview="Ke$ha - Backstabber (Sped Up & Cut Ver.) (payney) [Deception]"
star=5.12
max=355
/>

<Beatmap
bid=2237465
sid=1068768
preview="yuikonnu - Yume Chizu (browiec) [A r M i N's Extra]"
star=5.62
max=521
alias="梦地图"
/>

<Beatmap
bid=1749322
sid=819112
preview="Simple Plan - You Suck At Love (Speed Up Ver.) (Reform) [Extra]"
star=5.56
max=428
/>

<Beatmap
bid=4826894
sid=2250300
preview="HoneyWorks - Miraizu feat. Aida Miou (CV: Toyosaki Aki) (Cut Ver.) (Sotarks) [RoniX's Insane]"
star=4.75
max=439
alias="未来图"
/>

<Beatmap
bid=1481541
sid=686601
preview="SPYAIR - Sakura Mitsutsuki (Nevo) [byd's Hard]"
star=3.84
max=352
alias="樱满月"
/>

<Beatmap
bid=1452718
sid=684464
preview="Tamura Yukari - MERRY MERRY MERRY MENU...ne! (Cut Ver.) (Shmiklak) [Sulli's Insane]"
star=4.64
max=436
/>

<Beatmap
bid=2473353
sid=1178935
preview="Nogizaka46 - Yubi Bouenkyou (TV Size) (fieryrage) [Hooni's Insane]"
star=4.34
max=438
alias="指望远镜"
/>

<Beatmap
bid=4952868
sid=2314394
preview="LUM!X feat. Pia Maria - Halo (Nightcore & Cut Ver.) (riot1133) [Halo]"
star=4.98
max=370
/>

<Beatmap
bid=2741551
sid=1317972
preview="Serizawa Yu - Devi-kyuu (TV Size) (- Ex -) [Kuroame's Insane]"
star=4.49
max=501
alias="恶魔 Q"
/>

<Beatmap
bid=4443911
sid=1347474
preview="Serizawa Yu - Devi-kyuu (TV Size) (Kuki1537) [Insane]"
star=4.54
max=518
alias="恶魔 Q"
/>

<Beatmap
bid=1265800
sid=480765
preview="3 Nen E Gumi Utatan (Nagisa & Kayano & Karuma & Isogai & Maehara) - Bye Bye YESTERDAY (Gero) [Expert]"
star=5.06
max=555
alias="拜拜 YESTERDAY"
/>

<Beatmap
bid=4744313
sid=2225625
preview="Jessie J - Domino (Whippa Hardstyle Remix) (Sped Up & Cut Ver.) (riot1133) [SupaV's Hard]"
star=3.66
max=353
/>

<Beatmap
bid=722607
sid=323773
preview="Ayumi. - Hanagoyomi short version (Lavender) [Kencho's Insane]"
star=5.04
max=530
alias="华历"
/>

<Beatmap
bid=2969237
sid=1440767
preview="DM DOKURO - SAVE (Encore) (browiec) [browiec & Kuki's Insane]"
star=4.11
max=485
/>

<Beatmap
bid=2014469
sid=962088
preview="MIMI feat. Hatsune Miku - Marshmary (Log Off Now) [Horizon]"
star=5.11
max=433
alias="棉花糖"
/>

<Beatmap
bid=1901435
sid=909776
preview="ASCA - RESISTER (TV Size) (Doormat) [Kalibe's Expert]"
star=5.34
max=552
/>

<Beatmap
bid=5251854
sid=2414617
preview="LONOWN, riserayss - starly (slowed down & cut ver.) (flouah) [bolo's insane]"
star=3.97
max=382
/>

<Beatmap
bid=3407059
sid=1664358
preview="Chihara Minori - Kyoukai no Kanata (TV Size) (Sotarks) [r1ngochan's INsAanE!!]"
star=4.96
max=470
alias="境界的彼方"
/>

<Beatmap
bid=5281751
sid=2425417
preview="Bridgit Mendler, Adam Hicks, Naomi Scott and Hayley Kiyoko - Determinate (Nightcore & Cut Ver.) (My Angel Ram) [Mita's Extra]"
star=5.31
max=269
/>

<Beatmap
bid=2123907
sid=999126
preview="Mrs. GREEN APPLE - Inferno (TV Size) (Reform) [Ipas' Insane]"
star=4.86
max=578
alias="地狱"
/>

<Beatmap
bid=1836302
sid=873811
preview="dj TAKA - quaver (Sotarks) [NiNo's Insane]"
star=4.73
max=418
/>

<Beatmap
bid=1649990
sid=785858
preview="THE ORAL CIGARETTES - ReI (Sotarks) [NiNo's Insane]"
star=4.84
max=567
/>

<Beatmap
bid=3323514
sid=1608572
preview="Ando Hirokazu - Gourmet Race (gary00737) [GodKei's Insane]"
star=4.47
max=388
alias="噗噗噗之国舞台"
/>

<Beatmap
bid=1353259
sid=637445
preview="LiSA - Datte Atashi no Hero. -TV ver.- (Monstrata) [Akitoshi's Insane]"
star=5.06
max=489
alias="因为你是我的英雄。"
/>

<Beatmap
bid=946136
sid=438535
preview="NIGHTMARE - the WORLD  ~TV Size~ (smallboat) [117's Insane]"
star=4.94
max=427
/>

<Beatmap
bid=2468861
sid=1184314
preview="nano - No pain, No game (TV Size) (browiec) [Insane]"
star=4.53
max=483
/>

<Beatmap
bid=4813342
sid=2252260
preview="Set It Off - Partners In Crime (Cut Ver.) (Poczwar) [Aosek's Light Insane]"
star=4.25
max=469
/>

<Beatmap
bid=4529443
sid=2130552
preview="Fear, and Loathing in Las Vegas - Just Awake (TV Size) (midorijeon) [Akitoshi's Expert]"
star=5.34
max=564
/>

<Beatmap
bid=1724120
sid=820096
preview="Sayuri - Heikousen (TV Size) (Kyuukai) [Insane]"
star=4.53
max=413
alias="平行线"
/>

<Beatmap
bid=1796684
sid=859608
preview="LiSA - ADAMAS (TV Size) (Doormat) [Insane]"
star=5.18
max=579
/>

<Beatmap
bid=5394823
sid=2464474
preview="Kano - Cherry Pop (Cut Ver.) (Sotarks) [Kumocha's Expert]"
star=5.06
max=418
alias="樱桃 Pop"
/>

<Beatmap
bid=4805125
sid=2250634
preview="Groove Coverage - God is a Girl (Nightcore & Cut Ver.) (Bloxi) [Ram's Another]"
star=4.91
max=366
/>

<Beatmap
bid=2268639
sid=1012262
preview="THE ORAL CIGARETTES - GET BACK (NexusQI) [Insane]"
star=4.72
max=604
/>

<Beatmap
bid=2129147
sid=1017271
preview="Nashimoto Ui - AaAaAaAAaAaAAa (Sotarks) [SMOKELIND's InSaNE]"
star=4.36
max=598
alias="啊啊啊啊啊啊啊啊啊啊啊"
/>

<Beatmap
bid=4631966
sid=2178943
preview="kessoku band - Guitar to Kodoku to Aoi Hoshi (TV Size) (Hayakou) [Auriga's Expert]"
star=5.27
max=526
alias="吉他与孤独与蓝色星球"
/>

<Beatmap
bid=2609730
sid=1255746
preview="Tarkan - Simarik (Sotarks) [Deli]"
star=4.36
max=348
alias="Şımarık"
/>

### 200 ~ 240 BPM

<Beatmap
bid=4748330
sid=1049899
preview="Krewella - Say Goodbye (Nightcore & Cut Ver.) (A r M i N) [Log Off Now's Insane]"
star=4.57
max=343
/>

<Beatmap
bid=3308877
sid=1620540
preview="Krewella - Say Goodbye (Sped Up & Cut Ver.) (Sotarks) [Pepekcz's Hard]"
star=3.48
max=294
/>

<Beatmap
bid=5168742
sid=2387896
preview="BABYMETAL - from me to u (feat. Poppy) (Cut Ver.) (Sotarks) [Fuxi's Expert]"
star=5.08
max=431
/>

<Beatmap
bid=713818
sid=320118
preview="Reol - No title (VINXIS) [byfaR's Hard]"
star=3.53
max=419
/>

<Beatmap
bid=5313777
sid=2436628
preview="Reol - No title -10 Years Later Edition- (Cut Ver.) (Sotarks) [Fuxi's Light Expert]"
star=4.95
max=401
/>

<Beatmap
bid=5445060
sid=2478619
preview="HO-KAGO TEA TIME - Kira Kira Days (Cut Ver.) (gwb) [Amadoxal's Insane!!]"
star=4.68
max=531
alias="闪耀 Days (Cut Ver.)"
/>

<Beatmap
bid=961692
sid=444335
preview="HO-KAGO TEA TIME - Kira Kira Days (Kagetsu) [pkhg's Insane!!]"
star=4.08
max=511
alias="闪耀 Days"
/>

<Beatmap
bid=2161929
sid=1034008
preview="DIVELA feat. Hatsune Miku - Beat Syncer (Log Off Now) [Insane]"
star=4.58
max=553
alias="节奏同步者"
/>

<Beatmap
bid=1595303
sid=758344
preview="Colors*Slash - Colors Power ni Omakasero! (Sotarks) [Expert]"
star=5.10
max=594
alias="交给三颗星的力量吧！"
/>

<Beatmap
bid=4457207
sid=2121231
preview="Mu (CV: Rie Takahashi) - Trauma (TV Size) (kxlman) [Kuki's Insane]"
star=4.73
max=547
/>

<Beatmap
bid=1988750
sid=952409
preview="MIMI feat. Hatsune Miku - Ai no Sukima (Log Off Now) [Insane]"
star=4.47
max=341
alias="哀伤的隙间"
/>

<Beatmap
bid=1642169
sid=781509
preview="Vickeblanka - Black Rover (TV Size) (Sotarks) [Mir's Expert]"
star=5.27
max=526
/>

<Beatmap
bid=5541585
sid=2513658
preview="S3RL - Bass Slut (Original Mix) (Sped Up & Cut Ver.) (killian) [Takedrea's Hard]"
star=3.91
max=421
/>

<Beatmap
bid=4590252
sid=2173752
preview="Young Kee - Muteki (TV Size) (AirinCat) [Insane]"
star=4.56
max=410
alias="无敌"
/>

<Beatmap
bid=2444151
sid=1171789
preview="SPYAIR - Imagination (TV Size) (browiec) [Insane]"
star=4.45
max=477
alias="想象"
/>

<Beatmap
bid=2480901
sid=1190710
preview="Suzuki Konomi - Realize (TV Size) (Sotarks) [Eli's Insane]"
star=4.65
max=503
/>

<Beatmap
bid=2410949
sid=1155295
preview="TrySail - Utsuroi (Short Ver.) (Log Off Now) [mnyui's Extra]"
star=5.19
max=554
alias="岁月变迁"
/>

<Beatmap
bid=2201876
sid=1053509
preview="ViViD - HIKARI (TV Size) (Log Off Now) [Extra]"
star=5.11
max=540
alias="光"
/>

<Beatmap
bid=4791120
sid=2182334
preview="ANGUISH, POCHTISCHASTLIV & ily - Glaza (Sped Up Ver.) (Flade) [PIROSHKI'S INSANE FEAT. KOLMAN]"
star=4.93
max=606
/>

<Beatmap
bid=3073586
sid=1497304
preview="i.o - Aoiro Step (Short Ver.) (Kuki1537) [PikA's Insane]"
star=4.65
max=516
alias="青色步伐"
/>

<Beatmap
bid=4982503
sid=2312504
preview="youman feat. GUMI - Worst Regret (Sped Up & Cut Ver.) (jubilea) [Reenix' Light Insane]"
star=4.58
max=521
alias="最深的遗憾"
/>

<Beatmap
bid=5221654
sid=2402889
preview="youman feat. GUMI - Worst Regret (Sped Up & Cut Ver.) (Omekyu) [xsie's Insane]"
star=4.38
max=440
alias="最深的遗憾"
/>

<Beatmap
bid=4186715
sid=2011122
preview="Dizzy Sunfist - Decided (TV Size) (Fuxi66) [Insane]"
star=4.78
max=486
/>

<Beatmap
bid=2506538
sid=1044953
preview="i.o - Aoiro Step (Cut Ver.) (Bazz B) [Karen's Another]"
star=5.58
max=629
alias="青色步伐"
/>

<Beatmap
bid=786979
sid=355573
preview="O2i3 - Ooi [Game Edit] (Fort) [Another]"
star=4.36
max=604
/>

<Beatmap
bid=5235268
sid=2410720
preview="Aziya - bbydoll (nightcore mix) (Visionary) [amats' hard]"
star=3.91
max=488
/>

<Beatmap
bid=812824
sid=368187
preview="CustomiZ - Kai TV Size (F D Flourite) [Hyper]"
star=4.11
max=554
alias="解 TV Size"
/>

<Beatmap
bid=1385399
sid=653534
preview="Panda Eyes - ILY (M a r v o l l o) [Fanteer's Insane]"
star=4.59
max=479
/>

<Beatmap
bid=4867543
sid=2276946
preview="Yousei Teikoku - Kuusou Mesorogiwi (TV Size) (Kuki1537) [Amats' Insane]"
star=4.86
max=525
alias="空想神话"
/>

<Beatmap
bid=4917898
sid=2299895
preview="Middle Kids - R U 4 Me? (Cut Ver.) (KeyWee) [Laurier's Insane]"
star=4.83
max=526
/>

<Beatmap
bid=4669100
sid=2204592
preview="hitorie - Montage Girl (Cut Ver.) (Parad0xa) [sanairrt's Insane]"
star=4.94
max=610
alias="蒙太奇女孩"
/>

<Beatmap
bid=3257739
sid=1594964
preview="Rika (CV: Tamura Yukari) & Satoko (CV: Kanai Mika) & Hanyuu (CV: Horie Yui) - Happy! Lucky! Dochy! (TV Size) (Log Off Now) [Hard]"
star=3.34
max=485
/>

### 240 ~ 300 BPM

<Beatmap
bid=4870528
sid=2280225
preview="ParagonX9 - Polar 240 (sytho) [sstari's Insane]"
star=4.97
max=534
/>

<Beatmap
bid=5423180
sid=2474192
preview="Aitsuki Nakuru - Presenter* (Cut Ver.) (Mita) [Laurier's Insane]"
star=4.69
max=534
alias="礼物送达者☆ "
/>

<Beatmap
bid=4834691
sid=2269930
preview="The Wrecks - Favorite Liar (Cut Ver.) (PikAqours) [Amats' Insane]"
star=4.92
max=368
/>

<Beatmap
bid=2453128
sid=1172436
preview="SPYAIR - RAGE OF DUST (TV Size) (Fall) [NEKRO'S ANOTHER]"
star=5.18
max=551
/>

<Beatmap
bid=5534430
sid=2510715
preview="Set It Off - Why Worry (Nightcore & Cut Ver.) (PikAqours) [KPMY's Insane]"
star=4.40
max=275
/>

<Beatmap
bid=4922668
sid=2302766
preview="Tim Follin - Title Screen (Mekadon) [Insane]"
star=4.76
max=673
/>

<Beatmap
bid=5002972
sid=2331916
preview="TrySail - adrenaline!!! (TV Size) (KeyWee) [Laurier's Insane]"
star=5.13
max=708
/>

<Beatmap
bid=1281080
sid=604847
preview="TrySail - adrenaline!!! -TV Ver- (Lami) [Insane]"
star=4.30
max=606
/>

## 时长 <= 3分钟

### 0 ~ 160 BPM

<Beatmap
bid=374835
sid=118459
preview="Hai Nan - Ai La La (moonlightleaf) [Insane]"
star=3.91
max=697
alias="爱啦啦"
/>

<Beatmap
bid=1651309
sid=786689
preview="Miki Sayaka (CV: Kitamura Eri), Sakura Kyoko (CV: Nonaka Ai) - and I'm home (Kyuukai) [Kyoko]"
star=4.19
max=573
/>

<Beatmap
bid=5293654
sid=2429891
preview="Hazuki - Hey. (Game Ver.) (shiritani) [Hard]"
star=3.16
max=615
alias="呐。"
/>

<Beatmap
bid=4913035
sid=2293442
preview="Marina and the Diamonds - Oh No! (Nightcore Mix) (AJT) [Chanmann's Insane]"
star=4.30
max=600
/>

<Beatmap
bid=3086537
sid=1502812
preview="LIDA x FRIK PATI - Emo Hardcore (Nuvolina) [384's Insane]"
star=4.44
max=515
alias="情绪硬核"
/>

## 160 ~ 200 BPM

<Beatmap
bid=1554326
sid=736339
preview="Pierce The Veil - Circles (Peter) [Insane]"
star=4.34
max=594
/>

<Beatmap
bid=4646485
sid=2195891
preview="Katy Perry - Hot N Cold (Whippa Hardstyle Remix) (Tylerderp) [you're no good for me]"
star=5.22
max=851
/>

<Beatmap
bid=812590
sid=370819
preview="supercell - My Dearest (TV Edit) (monstrata) [Guilt]"
star=5.24
max=857
/>

<Beatmap
bid=4696644
sid=2134722
preview="CIEL - Kuuchuu Sanpo (Aratoji) [Kuru's Hard]"
star=3.40
max=775
alias="空中散步"
/>

<Beatmap
bid=3217116
sid=1575739
preview="The Kid LAROI, Justin Bieber - Stay (Log Off Now) [Wasted]"
star=4.86
max=503
/>

<Beatmap
bid=2856443
sid=1151309
preview="Stonebank - Be Alright (feat. EMEL) (Cut Ver.) (Nhawak) [iyasine's Hard]"
star=3.42
max=672
/>

<Beatmap
bid=4515069
sid=1951832
preview="Akashi Maho (CV: Kagami Karin) - Fantastic future (Akitoshi) [Hard]"
star=3.71
max=680
/>

<Beatmap
bid=2165271
sid=1035167
preview="ONE OK ROCK - Start Again (A r M i N) [Another]"
star=4.88
max=617
/>

<Beatmap
bid=1498150
sid=701330
preview="I SEE MONSTAS - Holdin On (Skrillex and Nero Remix) (Sotarks) [Insane]"
star=4.55
max=534
/>

<Beatmap
bid=5187913
sid=2395248
preview="Lil Texas - Die Young (Tarrasky) [INSANE]"
star=4.52
max=448
/>

<Beatmap
bid=3426783
sid=1677255
preview="Aspen - Reach Out (Nightcore Mix) (Andrea) [Andrea & Gero's Hard]"
star=3.87
max=738
/>

<Beatmap
bid=949888
sid=441155
preview="Chino(CV.Minase Inori) - Shinsaku no Shiawase wa Kochira! (Shioi) [Son's Insane]"
star=4.61
max=632
alias="新品的幸福就在这里！"
/>

<Beatmap
bid=2118445
sid=983911
preview="S3RL - Bass Slut (Original Mix) (Fatfan Kolek) [TheShadow's Dirty Insane]"
star=4.18
max=471
/>

<Beatmap
bid=4025628
sid=1940162
preview="Feint - We Won't Be Alone (feat. Laura Brehm) (Cut Ver.) (Kuki1537) [MajK00's Extra]"
star=5.25
max=580
/>

<Beatmap
bid=4770471
sid=2233819
preview="Ke$ha - Die Young (Nightcore Mix) (Tylerderp) [NYAN_KOT_NYAN's Insane]"
star=4.59
max=816
/>

<Beatmap
bid=535808
sid=230367
preview="MISATO - Necro Fantasia (Aka) [Lunatic]"
star=4.79
max=724
/>

<Beatmap
bid=3553341
sid=1738510
preview="Ling Yuan yousa, Xiu Mu Su, Hun Miao Miao - Hua Yue Cheng Shuang (UjiMatcha) [Lunar Dance]"
star=4.66
max=949
alias="花月成双"
/>

<Beatmap
bid=125316
sid=39275
preview="paraoka - Manima ni (Short Ver.) (Mixagji) [Insane]"
star=4.82
max=832
alias="随波逐流"
/>

<Beatmap
bid=514456
sid=219728
preview="Orangestar - Asu no Yozora Shoukaihan (Gelbana) [Insane]"
star=4.68
max=845
alias="明日夜空哨戒班"
/>

<Beatmap
bid=853926
sid=384772
preview="Yuaru - Asu no Yozora Shoukaihan (Akitoshi) [Insane]"
star=5.06
max=1133
alias="明日夜空哨戒班"
/>

<Beatmap
bid=4223500
sid=2012683
preview="yanaginagi - Usotsuki (chaser01) [Fsjallink's Lie]"
star=5.02
max=822
alias="嘘月"
/>

<Beatmap
bid=4985627
sid=2323490
preview="DI:Verse - Fusion (AirinCat) [Insane]"
star=4.72
max=869
alias="融合"
/>

<Beatmap
bid=1625592
sid=773330
preview="Nanamori-chu * Goraku-bu - Happy Time wa Owaranai (eiri-) [Shiinoha's Insane]"
star=4.87
max=708
alias="快乐时光永不结束"
/>

<Beatmap
bid=4767777
sid=2243043
preview="jon-YAKITORY feat. Hatsune Miku - Konton Boogie (Beige) [Insane]"
star=4.82
max=836
alias="混沌 Boogie"
/>

<Beatmap
bid=2938023
sid=1418780
preview="Ren feat. Hatsune Miku - Tougetsu, Rinzen ni Kisu. (Log Off Now) [Insane]"
star=4.51
max=847
alias="冬月，归于凛然。"
/>

<Beatmap
bid=1359787
sid=640558
preview="sak respect for Arata Iiyoshi - Reason of being (CookieBite) [Kenterz's ANOTHER]"
star=5.31
max=854
/>

<Beatmap
bid=996356
sid=326920
preview="Seiryu - BLUE DRAGON (Blue Dragon) [Fiery's Insane]"
star=4.95
max=913
/>

<Beatmap
bid=1946909
sid=931452
preview="HAG - Colorful (Sotarks) [MiracleE's Expert]"
star=5.03
max=761
alias="色彩缤纷"
/>

<Beatmap
bid=4962285
sid=1943000
preview="Marina and the Diamonds - Bubblegum Bitch (Nightcore Mix) (Log Off Now) [Fuxi's Insane]"
star=4.77
max=806
/>

### 200 ~ 240 BPM

<Beatmap
bid=4736790
sid=2180849
preview="ANGUISH, EXILED & elfass - Gulyayu (Tachibana_) [Kujinn's Insane]"
star=5.07
max=679
alias="漫步"
/>

<Beatmap
bid=4765310
sid=2241412
preview="molly - LOVE AGAIN (namriee) [PDXL'S INSANE]"
star=4.86
max=648
/>

<Beatmap
bid=5001591
sid=2316335
preview="Asagi Shiki - Haizakurairo (Gibune) [fllecc's Insane]"
star=5.08
max=956
alias="灰樱色"
/>

<Beatmap
bid=5273300
sid=2422687
preview="Will Stetson - Of Our Time (osu! Edit) (Sotarks) [riot's Light Insane]"
star=4.28
max=652
/>

<Beatmap
bid=4861424
sid=2278555
preview="Shirakami Fubuki with Kurokami Fubuki - Override (-Yuzuriha) [Collab Hard]"
star=3.82
max=724
alias="覆写"
/>

<Beatmap
bid=768459
sid=213629
preview="The Living Tombstone - Five Nights at Freddy's (-Faded-) [Insane]"
star=4.60
max=802
/>

<Beatmap
bid=1901946
sid=911281
preview="solfa feat. Shimotsuki Haruka - leap in your mind (Dored) [Insane]"
star=4.53
max=671
/>

<Beatmap
bid=4888762
sid=2284092
preview="Set It Off - Parasite (Cut Ver.) (Smoke) [Fuxi's Insane]"
star=4.55
max=672
/>

<Beatmap
bid=4880188
sid=2287284
preview="Phoneboy - Nevermind (feat. Justin Magnaye) (Nightcore Mix) (-aly) [Insane]"
star=5.08
max=916
/>

<Beatmap
bid=848234
sid=387700
preview="toby fox - MEGALOVANIA (Kyshiro) [Hard]"
star=3.97
max=676
alias="狂妄之人"
/>

### 240 ~ 300 BPM

<Beatmap
bid=4877536
sid=2235601
preview="Arash - Temptation (feat. Rebecca) (Nightcore Mix) (silver tail) [advu's Insane]"
star=4.56
max=977
/>

<Beatmap
bid=4814530
sid=2184780
preview="kessoku band - Guitar to Kodoku to Aoi Hoshi (Hayakou Bootleg) (Hayakou) [Ome & Haya's Insane]"
star=5.01
max=1075
alias="吉他与孤独与蓝色星球"
/>

## 时长 <= 5分钟

### 0 ~ 160 BPM

<Beatmap
bid=3246877
sid=1589584
preview="ChiliChill feat. Duo Duo poi, Yan Ning ccccc - To You on The Other Side (lit120) [Insane]"
star=3.92
max=868
alias="门的另一端"
/>

<Beatmap
bid=2845803
sid=1376952
preview="Sasaki Shiori - Harenohi Step (Kuse) [Sunlit]"
star=4.13
max=913
alias="晴日舞步"
/>

### 160 ~ 200 BPM

<Beatmap
bid=5070699
sid=2355037
preview="NOMELON NOLEMON - SAYONARA MAYBE (Liyuu_0109) [Insane]"
star=4.69
max=1080
/>

<Beatmap
bid=838030
sid=375648
preview="S3RL - Bass Slut (Original Mix) (Secretpipe) [Tari's Insane]"
star=4.87
max=951
/>

<Beatmap
bid=2439524
sid=1130014
preview="Yorushika - Bakudanma (Meg) [vick's Insane]"
star=4.82
max=1108
alias="爆弹魔"
/>

<Beatmap
bid=4977894
sid=2320572
preview="TUMENECO feat. yukina & Mii - Itsuka Kimi to Mukaeru Yoake (dahkjdas) [Laurier's Insane]"
star=4.76
max=1311
alias="终有一天与你一同迎来的黎明"
/>

<Beatmap
bid=4518713
sid=2037307
preview="Tsuzuri - NAME (aundy) [-karUpA-'s Insane]"
star=5.01
max=942
/>

<Beatmap
bid=889634
sid=409898
preview="Komiya Mao - (can you) understand me? (Okoratu) [huh?]"
star=5.45
max=1238
/>

<Beatmap
bid=1014244
sid=423527
preview="dj TAKA - quaver (Monstrata) [Joey's Hyper]"
star=3.79
max=1072
/>

<Beatmap
bid=2550090
sid=1208734
preview="ReoNa - Untitled world (SMOKELIND) [Kalijaaz's Expert]"
star=5.25
max=1138
/>

<Beatmap
bid=1222417
sid=569503
preview="96neko - Uso no Hibana (Yasaija 714) [Collab Insane]"
star=5.20
max=1313
alias="谎言的火花"
/>

<Beatmap
bid=4535435
sid=2108343
preview="Kano - Keppekishou (Kanui) [Hard]"
star=4.03
max=1053
alias="洁癖症"
/>

<Beatmap
bid=176549
sid=58787
preview="Raujika - Grim (JauiPlaY) [JauiPlKsp3]"
star=4.94
max=950
/>

<Beatmap
bid=3902695
sid=1880007
preview="kessoku band - Guitar to Kodoku to Aoi Hoshi (ponbot) [Ame's Insane]"
star=5.22
max=1195
alias="吉他与孤独与蓝色星球"
/>

<Beatmap
bid=2373468
sid=1131265
preview="TUYU - Kuraberarekko (jonathanlfj) [Subjectively Insane]"
star=4.97
max=1185
alias="被比较的孩子"
/>

<Beatmap
bid=2820129
sid=1113893
preview="yuikonnu - caramel heaven (Nevo) [Arc's Insane]"
star=5.06
max=1365
alias="焦糖天堂"
/>

<Beatmap
bid=2274507
sid=1056140
preview="Akatsuki Records - Trance Dance Anarchy (papapa213) [Misure's Insane]"
star=4.52
max=1145
alias="迷幻舞曲无秩序"
/>

<Beatmap
bid=2217566
sid=1054931
preview="PassCode - Ray (Akitoshi) [Insane]"
star=4.85
max=1389
/>

### 200 ~ 240 BPM

<Beatmap
bid=1812658
sid=867074
preview="Reol - Heimenkyou (Frey) [Insane]"
star=4.82
max=961
alias="平面镜"
/>

<Beatmap
bid=2856078
sid=1371996
preview="umu. - Ai no Sukima (Half) [Expert]"
star=5.17
max=1109
alias="哀伤的隙间"
/>

<Beatmap
bid=1733445
sid=811119
preview="XX:me - Escape (jonathanlfj) [Noz's Insane]"
star=4.92
max=1126
/>

<Beatmap
bid=2292290
sid=1082702
preview="Hanatan - Ghost Rule (BadGames) [Heto's Insane]"
star=5.06
max=1017
alias="幽灵法则"
/>

<Beatmap
bid=637625
sid=219380
preview="Konuko - Toumei Elegy (Awaken) [Hard]"
star=3.98
max=765
alias="透明哀歌"
/>

<Beatmap
bid=736213
sid=332532
preview="Panda Eyes & Teminite - Highscore (Fort) [Another]"
star=4.62
max=1119
/>

<Beatmap
bid=924324
sid=416153
preview="Remo Prototype[CV: Hanamori Yumiri] - Sendan Life (Lami) [Kanau's Hard]"
star=4.08
max=1075
alias="先端人生"
/>

<Beatmap
bid=4417173
sid=2078743
preview="Kominami Yasuha - 3355411 (3y3s) [Nilou's Insane]"
star=4.99
max=1026
/>

<Beatmap
bid=4963963
sid=2311267
preview="Mrs. GREEN APPLE - Ao to Natsu (katagiri Bootleg) (Sped Up Ver.) (- Nilou -) [sayu's Insane]"
star=4.92
max=1222
alias="青与夏"
/>

### 240 ~ 300 BPM

<Beatmap
bid=864246
sid=390619
preview="Primary - Inai Sekai (Shad0w1and) [Misure's Insane]"
star=5.39
max=1129
alias="不存在的世界"
/>

<Beatmap
bid=2720303
sid=1242183
preview="DM DOKURO - Roar of the Jungle Dragon (-Keitaro) [-Zeraora's Insane]"
star=4.79
max=1327
/>

## 时长 > 5分钟

没东西。`,Lf=Object.freeze(Object.defineProperty({__proto__:null,default:Df},Symbol.toStringTag,{value:"Module"})),Hf=`---
date: 2021-04-23
---

# 新人必备图包 by Muz 1.5

<Player
id=7003013
name="Muziyami"
country=676
global=0
from="CN"
accuracy=99.04
level=100
progress=48
performance=6197
/>

新人必备图包说明文档 v1.5

因为 qq 群没法放太多文件，所以现以文档形式~~存储网盘链接~~，需要的玩家请酌情自取：

双击谱面文件直接打开，或者拖入 Songs 文件夹，进游戏 f5 刷新即可。

## 【基础图包】0-500 入门级低星图

这真的是**入门**级别的图包了。甚至有0星图。上手必备。

<Beatmap
sid=690222
preview="Dan Salvato - Sayo-nara (Deppyforce)"
star=1.21
difficulties=[0.76,0.96,1.21]
alias="再见"
/>

<Beatmap
sid=405051
preview="Halozy - Genryuu Kaiko (Weber)"
star=1.66
difficulties=[1.16,1.21,1.66,0.81]
alias="源流怀古"
/>

<Beatmap
sid=633500
preview="YUEZHENG LONGYA - King of Comedy (Regraz)"
star=1.78
difficulties=[1.21,1.78]
alias="喜剧之王"
/>

<Beatmap
sid=560610
preview="jinsang - affection (Battle)"
star=1.86
difficulties=[1.25,1.86]
/>

<Beatmap
sid=706762
preview="nekodex - aureole (osu! xmas 2017) (Lumael)"
star=2.36
difficulties=[1.20,1.64,2.36]
/>

<Beatmap
sid=117143
preview="Top Combine - Mian Hua Tang (CET 6)"
star=2.62
difficulties=[1.66,2.62]
alias="棉花糖"
/>

<Beatmap
sid=432289
preview="Joe Hisaishi - Itsumo Nando demo (Battle)"
star=2.64
difficulties=[1.50,1.87,2.64]
alias="永远同在"
/>

<Beatmap
sid=1276554
preview="Koiwai Kotori, Murakawa Rie, Sakura Ayane, Asumi Kana - Okaeri (TV Size) (Kazuma)"
star=2.68
difficulties=[1.68,2.05,2.68]
alias="欢迎回来"
/>

<Beatmap
sid=1181096
preview="Xiao Feng Feng - Jiu Bang (Mafumafu)"
star=2.76
difficulties=[1.88,2.76]
alias="酒梦"
/>

<Beatmap
sid=397976
preview="Michael Wong - Yue Ding (Xinely)"
star=2.76
difficulties=[1.48,1.93,2.76]
alias="约定"
/>

<Beatmap
sid=159708
preview="Lenka - Trouble Is a Friend (Sniqht)"
star=2.94
difficulties=[1.40,1.94,2.94]
/>

<Beatmap
sid=107009
preview="Shouta Kageyama - Relic Song (Leader)"
star=3.45
difficulties=[1.43,1.81,2.50,3.21,3.45,1.23,1.65,1.21,1.97,2.94,1.31,2.15]
alias="遗迹之歌"
/>

<Beatmap
sid=109343
preview="Linda Yang - Bie Kan Wo Zhi Shi Yi Zhi Yang (S o a p)"
star=3.52
difficulties=[1.56,1.87,1.90,2.60,3.12,3.52]
alias="别看我只是一只羊"
/>

<Beatmap
sid=629373
preview="Aimer - Hoshikuzu Venus (Kyuukai)"
star=3.72
difficulties=[1.50,1.70,3.06,3.33,3.72]
alias="星屑维纳斯"
/>

<Beatmap
sid=344228
preview="Xiao Qiong (CV: KSP) - Xia Yi Zhan. Yu Ni (DreaM117er)"
star=3.77
difficulties=[1.50,1.87,2.90,3.69,3.77]
alias="下一站．与你"
/>

<Beatmap
sid=53000
preview="eufonius - Hikari Kagayaku Sekai (Flower)"
star=3.96
difficulties=[1.38,1.65,3.24,3.76,3.96,3.35]
alias="光芒闪耀的世界"
/>

<Beatmap
sid=520938
preview="R3 Music Box - No title (sahuang)"
star=3.97
difficulties=[1.17,1.63,2.15,3.04,3.97]
/>

<Beatmap
sid=1082270
preview="Shirakami Fubuki - Ievan Polkka x Fubuki (Hamburgaga Remix) (-Aqua)"
star=4.03
difficulties=[1.40,1.81,2.41,3.25,4.03]
alias="甩葱歌 x 小狐狸"
/>

<Beatmap
sid=788905
preview="Sporty-O - Let Me Hit It (Audiostalkers Original Mix) (eiri-)"
star=4.07
difficulties=[1.28,1.72,2.43,3.55,3.88,4.07,2.83,3.13]
/>

<Beatmap
sid=25871
preview="Funtastic Power! - Pachelbel's Canon (Mustaash)"
star=4.08
difficulties=[1.37,1.50,2.65,3.81,4.08]
alias="帕赫贝尔的卡农"
/>

<Beatmap
sid=611812
preview="Angela Chang - Aurora (Rizen)"
star=4.09
difficulties=[1.31,1.81,2.59,4.09]
alias="欧若拉"
/>

<Beatmap
sid=1125327
preview="OR3O - [bongo cat and friends] meow (eiri-)"
star=4.15
difficulties=[1.91,2.00,3.06,4.15,1.71,2.59,3.28]
/>

[[bongo cat and friends] meow](https://www.bilibili.com/video/BV1GW411671V/)

<Beatmap
sid=855083
preview="Miss Monochrome (CV: Horie Yui) - Poker Face (Akitoshi)"
star=4.22
difficulties=[1.62,1.94,2.99,3.84,4.22]
alias="小丑脸"
/>

<Beatmap
sid=469782
preview="Ryu* feat.Mayumi Morinaga - Din Don Dan (moonlightleaf)"
star=4.79
difficulties=[1.63,1.97,2.92,4.16,4.24,4.79]
/>

<Beatmap
sid=739396
preview="sana - Sunset March (hypercyte)"
star=4.81
difficulties=[1.53,1.68,3.19,3.99,4.81]
alias="夕阳进行曲"
/>

<Beatmap
sid=295880
preview="Smooth J - Haru yo, Koi (Streliteela)"
star=5.09
difficulties=[1.42,2.06,2.49,3.36,4.46,5.09]
alias="春天，来吧"
/>

<Beatmap
sid=637706
preview="sana - Senpai. (Kyuukai)"
star=5.23
difficulties=[1.77,2.41,2.92,3.58,4.87,5.23]
alias="先辈。"
/>

<Beatmap
sid=1348018
preview="C418 - Living Mice (_DUSK_)"
star=1.69
difficulties=[1.31,1.69]
mode="t"
/>

<Beatmap
sid=670088
preview="Yunomi - Mitarashi Platonic (feat. nicamoq) (komasy)"
star=5.01
difficulties=[1.18,1.92,3.02,3.59,5.01]
alias="酱油丸子柏拉图"
mode="t"
/>

<Beatmap
sid=1330784
preview="C418 - Dry Hands (-Joni-)"
star=1.72
difficulties=[1.01,1.38,1.72]
mode="c"
/>

<Beatmap
sid=1042420
preview="Suzuki Masayuki - Love Dramatic feat. Ihara Rikka (TV Size) (Ascendance)"
star=3.67
difficulties=[1.34,2.15,2.85,3.67]
alias="戏剧性之恋"
mode="c"
/>

<Beatmap
sid=752110
preview="Ling Yuan yousa - Hoshi to Kimi ga Kieta Hi (Dapuluous)"
star=3.65
difficulties=[1.36,1.91,2.50,3.03,3.65]
alias="繁星与你消逝之日"
mode="c"
/>

<Beatmap
sid=519251
preview="Jinjin - pi (Jinjin)"
star=1.33
difficulties=[0.68,0.68,0.74,0.74,1.05,1.08,1.28,1.33]
alias="π"
mode="m"
/>

<Beatmap
sid=257325
preview="JULIE SIGTUNA (CV:Yamamoto Nozomi) - BelievexBelieve ([ A v a l o n ])"
star=2.83
difficulties=[1.34,1.85,2.83]
mode="m"
/>

<Beatmap
sid=303649
preview="LiSA - Rally Go Round -TV ver.- (DrawdeX)"
star=4.21
difficulties=[1.20,1.22,1.77,1.82,2.85,2.97,3.79,4.21]
mode="m"
/>

<Beatmap
sid=581729
preview="jioyi - cyanine (Rivals_7)"
star=4.98
difficulties=[0.89,1.29,1.80,2.21,2.82,3.28,4.47,4.98]
mode="m"
/>

## 【基础图包】0-1200 常规级低星图

这个包相比于入门级图包，添加了更多的谱面，但萌新依旧能玩最低的两三个难度。

<Beatmap
sid=59504
preview="BY2 - Ai Qing Chuang Jin Men (Pink Agate)"
star=2.39
difficulties=[1.64,2.39]
alias="爱情闯进门"
/>

<Beatmap
sid=745623
preview="BabyBus - Wo Hui Zi Ji Shang Ce Suo (Regraz)"
star=2.39
difficulties=[1.49,2.39]
alias="我会自己上厕所"
/>

<Beatmap
sid=725514
preview="Minori Chihara - Michishirube (Kibbleru)"
star=2.31
difficulties=[1.60,2.31]
alias="路标"
/>

<Beatmap
sid=994409
preview="Kelly Yu - Ti Mian (gary00737)"
star=2.53
difficulties=[1.79,2.53]
alias="体面"
/>

<Beatmap
sid=303823
preview="Gui Xu - Ke Xi (cmn_891127)"
star=2.64
difficulties=[1.48,2.64]
alias="可惜"
/>

<Beatmap
sid=434255
preview="himmel - Carnation (Crimmi)"
star=2.67
difficulties=[1.49,1.89,2.67]
/>

<Beatmap
sid=510663
preview="Chata - Dango Daikazoku (Yohanes)"
star=2.70
difficulties=[1.87,2.70]
alias="团子大家族"
/>

<Beatmap
sid=876788
preview="Li Rong Hao - If I Were Young (bossandy)"
star=2.81
difficulties=[1.96,2.81]
alias="年少有为"
/>

<Beatmap
sid=47994
preview="ClariS - irony (CDFA)"
star=3.31
difficulties=[1.73,1.92,2.44,3.31]
/>

<Beatmap
sid=301537
preview="Fish Leong - Ning Xia (Kagamine Ren)"
star=3.33
difficulties=[1.67,2.44,3.33]
alias="宁夏"
/>

<Beatmap
sid=186048
preview="CHOPSTICKS BRO. - Xiao Ping Guo (-N a n a k o-)"
star=3.35
difficulties=[1.63,1.99,3.35]
alias="小苹果"
/>

<Beatmap
sid=608723
preview="RADWIMPS - Katawaredoki (Monstrata)"
star=3.36
difficulties=[1.64,2.53,3.36]
alias="黄昏之时"
/>

<Beatmap
sid=712959
preview="Dan Salvato - Your Reality (Nozhomi)"
star=3.39
difficulties=[1.42,2.06,2.75,3.39]
/>

<Beatmap
sid=1123670
preview="Aura Qualic feat. Hatsune Miku - Sweet Cat Dreaming (PaRaDogi)"
star=3.42
difficulties=[1.53,1.83,2.34,3.42,1.11,1.67,2.09]
/>

<Beatmap
sid=238992
preview="CCTV - Believe in the power of the brand (cmn_891127)"
star=3.45
difficulties=[1.61,2.26,3.45]
alias="相信品牌的力量"
/>

<Beatmap
sid=651825
preview="DAOKO x Kenshi Yonezu - Uchiage Hanabi (alacat)"
star=3.61
difficulties=[1.26,2.17,2.61,3.07,3.61]
alias="打上花火"
/>

<Beatmap
sid=61207
preview="VocaliodP - 1/6 (Nymph)"
star=3.70
difficulties=[1.71,2.65,3.70]
/>

<Beatmap
sid=170836
preview="Tsuji Ayano - Kaze ni Naru (S o a p)"
star=3.72
difficulties=[1.61,3.10,3.72]
alias="幻化成风"
/>

<Beatmap
sid=162578
preview="Angela Chang - Aurora (Pasha_Khvan97)"
star=3.73
difficulties=[1.19,1.62,2.33,3.73]
alias="欧若拉"
/>

<Beatmap
sid=43058
preview="marble - Suisai Candy (TV Size) (Nymph)"
star=3.84
difficulties=[1.64,1.88,3.12,3.77,3.84]
/>

<Beatmap
sid=84698
preview="96Neko x KurousaP - Kagen no Tsuki (Nyquill)"
star=3.86
difficulties=[1.91,2.69,3.86]
alias="下弦之月"
/>

<Beatmap
sid=244929
preview="Neon Hitch - Fuck U Betta (Nightcore Mix) (Gero)"
star=3.87
difficulties=[1.62,2.39,2.97,3.87]
/>

<Beatmap
sid=332082
preview="Afilia Saga - Neptune*Sagashite (Gear)"
star=4.00
difficulties=[1.47,1.95,2.62,3.19,4.00]
alias="寻找☆海王星"
/>

<Beatmap
sid=1266328
preview="Harumaki Gohan feat. Hatsune Miku - Yakusoku (Cut Ver.) (ruchuers)"
star=4.00
difficulties=[1.88,2.87,4.00]
alias="约束"
/>

<Beatmap
sid=309113
preview="Larval Stage Planning - Stargazer (CelsiusLK)"
star=4.03
difficulties=[1.61,2.07,3.02,4.03]
/>

<Beatmap
sid=980453
preview="Kyary Pamyu Pamyu - PONPONPON (deetz)"
star=4.05
difficulties=[2.08,3.12,4.05]
alias="彭薇薇"
/>

<Beatmap
sid=144367
preview="DECO*27 - Kisou Honnou feat. Yuuki Aoi (Kibbleru)"
star=4.06
difficulties=[1.76,2.01,3.05,4.06]
alias="归想本能 feat. 悠木碧"
/>

<Beatmap
sid=57546
preview="BRIGHT - 1 year 2 months 20 days (Athena Tennos)"
star=4.09
difficulties=[1.36,2.13,3.38,3.60,4.09]
/>

<Beatmap
sid=1052774
preview="Nishino Kana - Darling (Petal)"
star=4.13
difficulties=[2.21,3.16,4.13]
/>

<Beatmap
sid=1297248
preview="TOKYO GIRLS' STYLE - Reflection (timemon)"
star=4.13
difficulties=[2.04,3.05,4.13]
alias="反射"
/>

<Beatmap
sid=77093
preview="Chata - anesthesia (hoLysoup)"
star=4.15
difficulties=[1.71,2.91,4.15]
/>

<Beatmap
sid=49942
preview="BIGBANG - Fantastic Baby (Lissette)"
star=4.20
difficulties=[1.53,2.21,4.20]
/>

<Beatmap
sid=565072
preview="SMiLE.dk - Koko Soko (Trust)"
star=4.27
difficulties=[2.07,3.33,4.27]
/>

<Beatmap
sid=663572
preview="Ramin Djawadi - The Queen's Justice (TheKoala)"
star=4.30
difficulties=[1.87,2.87,3.64,4.30]
/>

<Beatmap
sid=1054381
preview="Orangestar - Nijigen no Onnanoko ni Koi o Shite Shimatte Tsurai...w (Irin)"
star=4.31
difficulties=[2.14,3.17,4.31]
alias="爱上二次元的女孩而痛苦…w"
/>

<Beatmap
sid=967347
preview="Perfume - Daijobanai (eiri-)"
star=4.36
difficulties=[1.69,2.13,3.30,4.36]
alias="没关系才怪"
/>

<Beatmap
sid=215381
preview="V.K - Wings of Piano (FlobuFlobs)"
star=4.37
difficulties=[2.01,2.97,4.37]
alias="琴之翼"
/>

<Beatmap
sid=94790
preview="Hatsuki Yura - Fuuga (Lan wings)"
star=4.38
difficulties=[1.40,1.80,3.69,4.38]
alias="风雅"
/>

<Beatmap
sid=462896
preview="Suzuki Konomi - This game (Kalibe)"
star=4.43
difficulties=[1.88,2.88,3.94,4.43]
alias="鱼，好大的鱼，虎纹鲨鱼"
/>

<Beatmap
sid=862835
preview="Xiao Ye Dao ono - Dan Xiang Di Tie Feat. Karin (moonlightleaf)"
star=4.44
difficulties=[1.81,2.89,4.44]
alias="单向地铁"
/>

<Beatmap
sid=1009836
preview="TryHardNinja feat. CaptainSparklez - Revenge (fieryrage)"
star=4.54
difficulties=[1.58,1.82,3.09,4.54]
alias="creeper?"
/>

<Beatmap
sid=402680
preview="Ceui - Ima, Arukidasu Kimi e. (Karen)"
star=4.62
difficulties=[1.92,2.51,3.41,4.46,4.62]
alias="给即将启程的你。"
/>

<Beatmap
sid=950890
preview="Kano - Ikanaide (Irin)"
star=4.67
difficulties=[1.89,2.44,3.41,4.30,4.67]
alias="不要走"
/>

<Beatmap
sid=42946
preview="namapann - Desire Drive (Mixagji)"
star=4.75
difficulties=[1.58,1.94,3.83,4.75]
alias="欲望加速"
/>

<Beatmap
sid=1159452
preview="Cornelius Link - Astronomia (Medieval Style) (Seto Kousuke)"
star=4.82
difficulties=[1.78,2.57,3.26,3.37,4.09,4.56,4.82]
/>

<Beatmap
sid=64636
preview="DJ Genericname - Dango Dango Drum and Bass (Moway)"
star=4.84
difficulties=[1.51,1.89,3.48,4.84,2.68,4.16]
alias="团子大家族"
/>

<Beatmap
sid=215069
preview="TOTTO - Onigami (Kloyd)"
star=4.93
difficulties=[1.60,2.23,3.60,4.93]
alias="鬼天"
/>

<Beatmap
sid=596704
preview="ClariS - Hitorigoto -TV MIX- (Doormat)"
star=4.95
difficulties=[1.78,1.91,2.25,2.31,3.43,3.62,4.26,4.48,4.55,4.59,4.79,4.95]
alias="独白"
/>

<Beatmap
sid=1090501
preview="Zu Hai - Hao Yun Lai (kanor)"
star=4.97
difficulties=[1.87,3.25,4.97]
alias="好运来"
/>

<Beatmap
sid=497769
preview="Drop - Granat (Left)"
star=5.05
difficulties=[2.04,2.81,3.89,5.05]
/>

<Beatmap
sid=664099
preview="Mitchie M feat. Hatsune Miku with KAITO - Ohedo Julia-Night (Natsu)"
star=5.25
difficulties=[1.38,2.04,3.29,4.38,5.25]
alias="大江户朱莉安娜之夜"
/>

<Beatmap
sid=425219
preview="Lan Zi - Yi Bai Kuai Dou Bu Gei Wo (Pata-Mon)"
star=5.27
difficulties=[1.69,2.15,2.39,3.28,3.96,4.71,5.27]
alias="一百块都不给我"
/>

<Beatmap
sid=841289
preview="mafumafu x Amatsuki - nonfantasy (Jian)"
star=5.27
difficulties=[1.77,2.52,3.36,4.49,5.27]
alias="非现实"
/>

<Beatmap
sid=602230
preview="loos - Koi Yomi Zakura (Full size) (papapa213)"
star=5.63
difficulties=[1.60,2.27,3.52,4.74,5.18,5.25,5.35,5.63]
alias="恋咏樱"
/>

<Beatmap
sid=431971
preview="M2U - Lunatic Sky (buhei)"
star=5.93
difficulties=[1.61,1.99,2.81,3.60,4.95,5.48,5.59,5.67,5.80,5.87,5.93]
alias="狂野天空"
/>

<Beatmap
sid=420765
preview="Dendei - gabe power (HighTec)"
star=6.04
difficulties=[1.26,1.73,1.91,2.89,3.81,4.59,5.01,5.55,6.04]
alias="gabe 脑力"
/>

<Beatmap
sid=984641
preview="sana - Kanojo wa Tabi ni Deru (Firika)"
star=6.06
difficulties=[1.93,2.60,3.65,4.69,6.06]
alias="她踏上了旅程"
/>

<Beatmap
sid=613158
preview="Sasaki Sayaka - Kiss no Hitotsu de (Left)"
star=6.27
difficulties=[1.25,1.73,2.38,3.53,4.65,5.33,5.74,6.27]
alias="仅凭一个吻"
/>

<Beatmap
sid=1158494
preview="TUYU - Rock na Kimi to wa Owakare da (Seros)"
star=6.36
difficulties=[1.89,2.47,3.39,4.68,5.56,6.36]
alias="和充满摇滚气息的你说再见"
/>

<Beatmap
sid=833895
preview="t+pazolite - Oshama Scramble! (DTM9 Nowa)"
star=6.98
difficulties=[1.95,2.67,2.87,3.72,4.33,4.80,5.32,5.70,5.92,6.40,6.58,6.98]
alias="牛奶猫"
/>

<Beatmap
sid=1023737
preview="Kikiyama - Yume Nikki (Axer)"
star=1.23
difficulties=[0.70,0.89,1.23]
alias="梦日记"
mode="t"
/>

<Beatmap
sid=1180701
preview="Chino (CV: Minase Inori), Maya (CV: Tokui Sora), Megu (CV: Murakawa Rie) - Komorebi Seishunfu ~Gekichuu Uta Ver.~ (Faputa)"
star=1.94
difficulties=[1.03,1.39,1.94]
alias="木构街道青春谱 ~劇中歌 Ver.~"
mode="t"
/>

<Beatmap
sid=547701
preview="Kayano Ai / Tomatsu Haruka / Hayami Saori - secret base ~Kimi ga Kureta Mono~ (10 years after Ver.) (Ascendance)"
star=2.85
difficulties=[1.17,2.07,2.85]
alias="秘密基地 ～你赠与我～"
mode="c"
/>

<Beatmap
sid=436623
preview="3R2 - Farewell (Gravey-)"
star=1.63
difficulties=[1.42,1.63]
mode="m"
/>

<Beatmap
sid=839245
preview="F4 - Liu Xing Yu (Rivals_7)"
star=2.41
difficulties=[1.16,1.72,2.41]
alias="流星雨"
mode="m"
/>

<Beatmap
sid=428023
preview="banshi - Fading Star(banshi-Remix) (erlinadewi-)"
star=2.78
difficulties=[1.22,1.88,2.78]
mode="m"
/>

<Beatmap
sid=342327
preview="3R2 - Next Stop.With You (feat. KSP) (Sky_Demon)"
star=2.79
difficulties=[1.66,2.46,2.79]
alias="下一站．与你"
mode="m"
/>

<Beatmap
sid=224299
preview="Martin Garrix - Animals (DrawdeX)"
star=3.63
difficulties=[1.15,1.71,2.22,3.19,3.63]
mode="m"
/>

## 【扩展图包】OSU名曲

这里收录了六十几张 osu 里最火的谱面。有超星图，不要乱糊哦。

<Beatmap
sid=79832
preview="Gigi Leung - Chicken Chic (Weiren)"
star=3.11
difficulties=[1.82,3.10,3.11]
alias="胆小鬼"
/>

<Beatmap
sid=825541
preview="Alvaro Soler - Sofia (Regraz)"
star=3.77
difficulties=[1.87,3.08,3.77]
/>

<Beatmap
sid=127712
preview="Primastella - Koigokoro (Luerxa)"
star=4.51
difficulties=[1.68,3.05,4.13,4.51]
alias="恋心"
/>

<Beatmap
sid=798261
preview="TheFatRat - MAYDAY (feat. Laura Brehm) (Sotarks)"
star=4.54
difficulties=[1.97,3.14,3.88,4.22,4.54]
/>

<Beatmap
sid=83130
preview="EastNewSound - Eisou Youga ~Meikyou Shisui~ (Forseen)"
star=4.79
difficulties=[1.57,2.07,3.35,4.79]
alias="咏奏妖华～明镜止水～"
/>

<Beatmap
sid=451250
preview="Syaro(CV.Uchida Maaya) - Caffeine Fighter (Doormat)"
star=4.90
difficulties=[1.89,2.30,3.43,4.55,4.90]
alias="咖啡因战士"
/>

<Beatmap
sid=470977
preview="Mili - world.execute(me); (Exile-)"
star=5.00
difficulties=[1.39,2.55,3.42,4.32,4.64,5.00]
/>

[Mili】world.execute(me);](https://www.bilibili.com/video/BV1ds411e7df/)

<Beatmap
sid=456986
preview="Komiya Mao - (can you) understand me? (Sotarks)"
star=5.01
difficulties=[2.09,3.52,4.29,5.01]
/>

<Beatmap
sid=277421
preview="Lindsey Stirling - Senbonzakura (MrSergio)"
star=5.15
difficulties=[1.54,2.10,3.46,4.43,5.15,2.09,3.30]
alias="千本樱"
/>

<Beatmap
sid=72051
preview="Cascada - Bad Boy (Nightcore Mix) (-Bakari-)"
star=5.20
difficulties=[1.17,1.71,2.26,3.65,3.78,4.56,5.20,3.02,4.27]
/>

<Beatmap
sid=371569
preview="Minamotoya feat. Kuroa* - Hana Kagerou (DreaM117er)"
star=5.26
difficulties=[1.78,2.24,3.09,4.04,4.42,4.83,5.26]
alias="华阳炎"
/>

<Beatmap
sid=952409
preview="MIMI feat. Hatsune Miku - Ai no Sukima (Log Off Now)"
star=5.31
difficulties=[2.12,3.51,3.95,4.47,4.99,5.31]
alias="哀伤的隙间"
/>

<Beatmap
sid=683816
preview="Taylor Swift - ...Ready For It? (Syph)"
star=5.32
difficulties=[1.79,2.47,3.04,4.59,5.32]
/>

<Beatmap
sid=1114649
preview="saradisk - 222 - wewewe (Uta)"
star=5.37
difficulties=[2.40,3.54,4.52,4.57,5.01,5.05,5.37]
/>

<Beatmap
sid=13223
preview="Demetori - Emotional Skyscraper ~ World's End (happy30)"
star=5.50
difficulties=[4.53,5.50,5.02]
alias="2012"
/>

<Beatmap
sid=53857
preview="Saiya - Remote Control (Garven)"
star=5.53
difficulties=[2.13,2.16,3.60,4.44,5.53,2.84,4.29]
alias="遥控器"
/>

<Beatmap
sid=444335
preview="HO-KAGO TEA TIME - Kira Kira Days (Kagetsu)"
star=5.60
difficulties=[1.68,2.52,3.68,4.08,4.72,5.28,5.60]
alias="闪耀 Days"
/>

<Beatmap
sid=51972
preview="goreshit - o'er the flood (grumd)"
star=5.71
difficulties=[1.65,2.35,3.79,5.71,3.30,5.52]
alias="大洪水"
/>

<Beatmap
sid=41686
preview="Lily - Scarlet Rose (val0108)"
star=5.79
difficulties=[5.79]
alias="血玫瑰"
/>

<Beatmap
sid=372851
preview="Ni-Sokkususu - Blade Dance (Bearizm)"
star=5.84
difficulties=[2.00,2.55,3.82,4.90,5.84,3.30,4.19]
alias="精灵剑舞祭"
/>

<Beatmap
sid=411894
preview="Remo Prototype[CV: Hanamori Yumiri] - Sendan Life (Narcissu)"
star=5.89
difficulties=[1.46,2.23,3.52,4.99,5.76,5.89]
alias="先端人生"
/>

<Beatmap
sid=867074
preview="Reol - Heimenkyou (Frey)"
star=5.97
difficulties=[2.21,3.59,4.82,5.97]
alias="平面镜"
/>

<Beatmap
sid=522857
preview="Porter Robinson & Madeon - Shelter (Monstrata)"
alias="庇护所"
star=6.01
difficulties=[1.33,2.04,2.81,3.49,4.29,5.16,5.56,5.80,5.90,5.95,6.01]
/>

[【Porter Robinson & Madeon】Shelter 官方MV](https://www.bilibili.com/video/BV1qbtLzdEAk/)

<Beatmap
sid=153776
preview="yuikonnu & ayaponzu* - Super Nuko World (AllStar12)"
star=6.09
difficulties=[1.97,2.60,4.13,5.36,6.09,2.95,5.34]
alias="超级猫世界"
/>

<Beatmap
sid=186318
preview="Warak - REANIMATE (iyasine)"
star=6.11
difficulties=[1.77,2.37,3.58,4.53,5.36,5.67,5.74,6.11]
alias="暗夜苏醒"
/>

<Beatmap
sid=437797
preview="Silent Siren - Soukai Rock (Shad0w1and)"
star=6.19
difficulties=[1.66,2.20,2.75,4.00,4.59,5.59,5.80,5.99,6.19]
alias="爽快摇滚"
/>

<Beatmap
sid=442581
preview="Memme - Cherry Blossom (Priti)"
star=6.19
difficulties=[1.77,2.50,3.80,4.91,5.87,6.11,6.16,6.19]
/>

<Beatmap
sid=51245
preview="IA - Six Trillion Years and Overnight Story (NatsumeRin)"
star=6.21
difficulties=[1.89,2.32,3.91,5.25,6.02,6.21,5.10,5.46]
alias="六兆年零一夜的故事"
/>

<Beatmap
sid=546820
preview="YUC'e - Future Candy (Nathan)"
star=6.22
difficulties=[2.12,3.61,5.37,6.22]
alias="未来糖果"
/>

<Beatmap
sid=914691
preview="S3RL - MTC (Different Heaven Remix) (Sylas)"
star=6.22
difficulties=[1.90,2.44,3.53,5.15,6.03,6.22]
alias="对二次元冲"
/>

[我从未听过如此丧心病狂的电音S3RL-MTC（带字幕）](https://www.bilibili.com/video/BV1Js411U78a/)

<Beatmap
sid=499488
preview="Kana Nishino - Sweet Dreams (11t dnb mix) (Ascendance)"
star=6.23
difficulties=[1.66,2.25,2.66,3.00,3.20,3.86,4.02,4.93,5.06,5.15,5.40,5.61,5.64,5.67,5.92,5.93,6.23,3.52,4.24,5.33]
/>

<Beatmap
sid=257793
preview="Yuyoyuppe - AiAe (Fort)"
star=6.29
difficulties=[1.75,2.13,2.71,3.67,4.45,5.23,5.83,6.29]
/>

<Beatmap
sid=564329
preview="YUC'e - Sengoku HOP (Nathan)"
star=6.44
difficulties=[2.12,2.78,3.24,5.04,6.14,6.44]
alias="战国 HOP"
/>

<Beatmap
sid=985788
preview="Loki - Wizard's Tower (Taeyang)"
star=6.49
difficulties=[2.02,2.66,3.43,4.69,5.78,6.49]
alias="巫师塔"
/>

<Beatmap
sid=513731
preview="A.SAKA - Nanatsu Issenzakura (yf_bmp)"
star=6.56
difficulties=[1.54,1.57,2.57,3.79,5.15,5.80,5.84,5.97,6.55,6.56]
alias="七叶一旋樱"
/>

<Beatmap
sid=88180
preview="t+pazolite - cheatreal (caren_sk)"
star=6.56
difficulties=[2.21,3.03,3.80,5.32,5.92,6.56]
/>

<Beatmap
sid=667868
preview="MAZARE - Mazare Party (IntellectualBoy)"
star=6.59
difficulties=[2.03,2.75,3.84,5.21,5.70,6.44,6.59]
/>

<Beatmap
sid=287873
preview="Alipio Martins - Piranha (Maffalda Reloaded Trap Mix) (Tarrasky)"
star=6.61
difficulties=[1.64,2.15,3.51,4.29,5.01,6.10,6.61,5.00]
alias="灯笼鱼"
/>

<Beatmap
sid=58951
preview="UNDEAD CORPORATION - Yoru Naku Usagi wa Yume o Miru (Smoothie)"
star=6.62
difficulties=[1.78,2.08,3.40,5.72,6.62,3.26,5.03]
alias="夜啼的兔子做着梦 / 夜啼兔"
/>

<Beatmap
sid=384772
preview="Yuaru - Asu no Yozora Shoukaihan (Akitoshi)"
star=6.63
difficulties=[1.76,2.48,3.56,5.06,5.53,5.66,6.63]
alias="明日夜空哨戒班"
/>

<Beatmap
sid=484532
preview="Kano - Sukisuki Zecchoushou (Loreley)"
star=6.67
difficulties=[2.26,3.00,3.86,5.03,5.47,5.99,6.67]
alias="喜欢喜欢绝顶症"
/>

<Beatmap
sid=983911
preview="S3RL - Bass Slut (Original Mix) (Fatfan Kolek)"
star=6.69
difficulties=[2.42,3.42,4.18,4.52,4.87,5.67,5.68,6.02,6.69]
/>

<Beatmap
sid=24313
preview="Team Nekokan - Can't Defeat Airman (Blue Dragon)"
star=6.78
difficulties=[6.78]
alias="空气人"
/>

<Beatmap
sid=230739
preview="USAO - Miracle 5ympho X (Extended Mix) (RLC)"
star=6.79
difficulties=[1.81,2.36,3.62,4.20,5.48,6.58,6.79]
/>

<Beatmap
sid=41823
preview="The Quick Brown Fox - The Big Black (Blue Dragon)"
star=6.93
difficulties=[6.93,5.18]
alias="大黑"
/>

<Beatmap
sid=143397
preview="Natsume Chiaki - Hanairo Biyori (rinsukir)"
star=6.95
difficulties=[1.52,2.29,3.58,5.19,5.56,6.95]
alias="花色日和"
/>

<Beatmap
sid=697087
preview="Y&Co. - Daisuke (kwk)"
star=6.96
difficulties=[1.79,2.21,3.79,4.48,5.75,6.96]
/>

<Beatmap
sid=210316
preview="U1 overground - Dopamine (fanzhen0019)"
star=6.99
difficulties=[1.49,2.41,3.59,4.85,5.63,6.99]
alias="多巴胺"
/>

<Beatmap
sid=771159
preview="VINXIS - Sidetracked Day (Short Ver.) (Sotarks)"
star=7.06
difficulties=[2.32,3.26,4.73,5.89,7.06]
/>

<Beatmap
sid=332532
preview="Panda Eyes & Teminite - Highscore (Fort)"
star=7.08
difficulties=[2.21,3.22,3.71,4.62,5.79,7.08]
/>

<Beatmap
sid=647452
preview="GEM - Umiyuri Kaiteitan (Loreley)"
star=7.34
difficulties=[2.30,3.17,4.07,5.00,5.99,6.27,7.05,7.34]
alias="海百合海底谭"
/>

<Beatmap
sid=452230
preview="BABYMETAL - Gimme chocolate!! (alacat)"
star=7.41
difficulties=[1.89,2.49,3.87,4.68,5.56,6.46,7.41]
alias="给我巧克力！！"
/>

<Beatmap
sid=364574
preview="Ocelot - TSUBAKI (Hollow Wings)"
star=7.45
difficulties=[1.83,2.44,3.25,3.88,4.43,4.76,5.65,5.69,6.04,6.14,6.14,6.35,6.67,7.45]
/>

<Beatmap
sid=292301
preview="xi - Blue Zenith (Asphyxia)"
star=7.51
difficulties=[2.12,2.69,3.59,4.62,5.59,6.18,6.83,6.98,7.51]
alias="蓝极光 / 蓝顶"
/>

<Beatmap
sid=721804
preview="Omoi - Teo (Kroytz)"
star=7.58
difficulties=[2.62,3.61,5.06,5.65,6.02,6.80,7.58]
alias="将手"
/>

<Beatmap
sid=219380
preview="Konuko - Toumei Elegy (Awaken)"
star=7.83
difficulties=[1.93,2.59,3.98,4.80,5.66,6.14,7.19,7.83]
alias="透明哀歌"
/>

<Beatmap
sid=413117
preview="DECO*27 - Ghost Rule (Awaken)"
star=8.20
difficulties=[2.56,3.84,4.27,4.96,5.53,5.90,6.44,6.92,7.04,7.98,8.20]
alias="幽灵法则"
/>

<Beatmap
sid=559097
preview="Sota Fujimori - polygon (Kaifin)"
star=8.63
difficulties=[1.75,2.24,3.47,4.99,5.46,6.35,6.42,6.81,7.65,7.85,8.63]
/>

<Beatmap
sid=147210
preview="xi - FREEDOM DiVE (Pikastar)"
star=8.72
difficulties=[1.33,2.32,3.52,4.68,5.74,6.96,7.60,8.72]
alias="FD"
/>

<Beatmap
sid=597779
preview="O2i3 - TSLove (JessiChan)"
star=6.01
difficulties=[1.30,2.02,3.10,4.02,4.31,6.01]
mode="t"
/>

<Beatmap
sid=625493
preview="Yunomi with Momobako&miko - Soumatou Labyrinth (komasy)"
star=4.48
difficulties=[1.24,1.99,3.17,3.80,4.48]
alias="走马灯迷宫"
mode="t"
/>

<Beatmap
sid=1009824
preview="PSYQUI - Hype feat. Such (lapix Remix) (Ascendance)"
star=6.48
difficulties=[1.78,2.45,3.32,3.33,4.24,4.37,4.87,5.99,6.07,6.16,6.48]
mode="c"
/>

<Beatmap
sid=606334
preview="Dark PHOENiX - Taketori Hishou (Madoka2574)"
star=4.42
difficulties=[1.42,2.15,3.46,4.42]
alias="竹取飞翔"
mode="m"
/>

## 【基础图包】0-500 免安装附带

这个包是群里曾经的免安装版**已经包含**的图，~~请注意不要重复下载~~。

<Beatmap
sid=645502
preview="A-Lin - Gei Wo Yi Ge Li You Wang Ji (Regraz)"
star=1.17
difficulties=[0.95,1.17]
alias="给我一个理由忘记"
/>

<Beatmap
sid=793539
preview="Song Zuying - Xiao Bei Lou (Regraz)"
star=2.26
difficulties=[1.61,2.26]
alias="小背篓"
/>

<Beatmap
sid=854025
preview="Liu Zeng Tong - Lun Hui (bossandy)"
star=2.28
difficulties=[2.28]
alias="轮回"
/>

<Beatmap
sid=1733689
preview="Araragi Tsukihi (CV: Iguchi Yuka) - Platinum Disco (TV Size) (DenYi)"
star=2.43
difficulties=[1.13,1.72,2.43]
alias="白金 Disco"
/>

<Beatmap
sid=251913
preview="Jay Chou - Qing Hua Ci (liangv587)"
star=2.88
difficulties=[2.17,2.88]
alias="青花瓷"
/>

<Beatmap
sid=468807
preview="Kalafina - Yume no Daichi (Vell)"
star=3.03
difficulties=[1.54,1.89,2.21,3.03]
alias="梦之大地"
/>

<Beatmap
sid=389179
preview="Jay Chou - Fa Ru Xue (KaedekaShizuru)"
star=3.05
difficulties=[1.66,2.42,3.05]
alias="发如雪"
/>

<Beatmap
sid=789103
preview="Xiao Pan Pan & Xiao Feng Feng - Xue Mao Jiao (Asaiga)"
star=3.25
difficulties=[1.72,1.92,2.76,3.25]
alias="学猫叫"
/>

<Beatmap
sid=584575
preview="toby fox - sans. (Error-)"
star=3.33
difficulties=[1.38,1.67,2.34,3.33,2.86]
/>

<Beatmap
sid=501719
preview="VINXIS - Applause (Pachiru)"
star=3.35
difficulties=[1.47,2.05,3.35,0.96,1.58,2.69]
/>

<Beatmap
sid=143734
preview="Linda Yang - Wo Niu Yu Huang Li Niao (yf_bmp)"
star=3.69
difficulties=[1.33,1.93,3.01,3.69]
alias="蜗牛与黄鹂鸟"
/>

<Beatmap
sid=396077
preview="Alan Walker - Faded (Astarte)"
star=3.76
difficulties=[1.71,2.30,2.77,3.43,3.76]
/>

<Beatmap
sid=403953
preview="Petit Rabbit's - Daydream cafe (Moa)"
star=4.01
difficulties=[1.71,2.16,2.99,4.01]
/>

<Beatmap
sid=847576
preview="dark cat - hot chocolate (Backfire)"
star=4.09
difficulties=[1.20,1.91,2.65,3.34,4.09]
/>

<Beatmap
sid=1020475
preview="ClariS - irony (TV Size) (Kencho)"
star=4.19
difficulties=[1.66,2.22,3.05,3.62,3.83,4.19]
/>

<Beatmap
sid=685580
preview="Tanchiky - ENERGY SYNERGY MATRIX (Tofu1222)"
star=4.25
difficulties=[1.90,2.99,3.81,4.25]
/>

<Beatmap
sid=973194
preview="The xx - Intro (Leader)"
star=4.42
difficulties=[2.21,3.18,3.87,4.12,4.33,4.42]
/>

<Beatmap
sid=773973
preview="S.I.N.G - Ji Ming Yue (Sandrew)"
star=4.44
difficulties=[1.95,3.05,3.94,4.44]
alias="寄明月"
/>

<Beatmap
sid=964675
preview="Billie Eilish - bad guy (schoolboy)"
star=4.47
difficulties=[1.88,2.10,2.47,3.33,4.47]
/>

<Beatmap
sid=221768
preview="Sharlo - Shinkai Shoujo (yf_bmp)"
star=4.73
difficulties=[1.72,2.05,3.11,3.75,4.73]
alias="深海少女"
/>

<Beatmap
sid=495334
preview="Raujika - Roseo Neige (sahuang)"
star=4.80
difficulties=[1.90,2.30,3.53,4.57,4.80]
/>

<Beatmap
sid=476730
preview="Flower - Taiyou to Himawari (z1085684963)"
star=4.94
difficulties=[1.78,2.57,3.72,4.94]
alias="太阳与向日葵"
/>

<Beatmap
sid=416702
preview="nameless x toa - Patchwork Staccato (Taeyang)"
star=5.01
difficulties=[1.38,1.55,1.96,2.41,2.77,2.99,3.31,4.02,4.47,5.01]
alias="拼凑的断音"
/>

<Beatmap
sid=316761
preview="Cororo - Fairy ring (Kite)"
star=5.04
difficulties=[2.01,2.46,3.72,4.23,5.04]
/>

<Beatmap
sid=476691
preview="DJ OKAWARI - Flower Dance (Narcissu)"
star=5.05
difficulties=[1.29,2.25,3.10,4.36,5.05,1.61,2.50]
alias="花舞"
/>

<Beatmap
sid=1398443
preview="Phao - 2 Phut Hon (KAIZ Remix) (Cut Ver.) (Elinor)"
star=5.19
difficulties=[1.83,2.90,3.83,4.52,5.19]
alias="两分多钟"
/>

<Beatmap
sid=624879
preview="Rob Gasser - Taking Over (ft. Miyoki) (Mir)"
star=5.31
difficulties=[1.80,2.26,3.59,4.64,5.31]
/>

<Beatmap
sid=1192586
preview="Hyper Potions & MYLK - Jelly (eiri-)"
star=5.34
difficulties=[1.63,2.31,3.85,5.34]
/>

<Beatmap
sid=1213174
preview="YOASOBI - Ano Yume o Nazotte (-Aqua)"
star=5.39
difficulties=[2.12,2.64,3.60,4.52,5.39]
alias="描绘那个梦境"
/>

<Beatmap
sid=1174616
preview="LeaF - Mopemope (hypercyte)"
star=5.70
difficulties=[1.97,2.75,3.63,4.71,5.70]
alias="もぺもぺ"
/>

<Beatmap
sid=241526
preview="Soleily - Renatus (Multiple Creators)"
star=5.78
difficulties=[2.11,3.51,5.32,1.95,2.86,5.78,2.63,3.53,4.65,1.94,3.20,4.73]
alias="重生纪元"
/>

<Beatmap
sid=716441
preview="Fractal Dreamers - Paradigm Shift (appleeaterx)"
star=5.78
difficulties=[2.13,2.67,3.80,5.24,5.78]
alias="范式转移"
/>

<Beatmap
sid=1194543
preview="D.D.D. - Ready? (Crissa)"
star=5.80
difficulties=[1.68,2.51,3.58,4.79,5.80]
/>

<Beatmap
sid=1369139
preview="Yu-Peng Chen @HOYO-MiX - Rex Incognito (Crissa)"
star=5.83
difficulties=[1.83,2.42,3.47,4.63,5.03,5.83]
alias="尘世闲游"
/>

<Beatmap
sid=496096
preview="Red Velvet - Ice Cream Cake (Lilyanna)"
star=5.88
difficulties=[1.08,1.26,1.93,3.15,4.13,4.65,5.88]
/>

<Beatmap
sid=522857
preview="Porter Robinson & Madeon - Shelter (Monstrata)"
star=6.01
difficulties=[1.33,2.04,2.81,3.49,4.29,5.16,5.56,5.80,5.90,5.95,6.01]
alias="避难所"
/>

<Beatmap
sid=374858
preview="IOSYS - Tanoshii Yoru no Ochakai - Ringo's Tea Party (Frey)"
star=6.05
difficulties=[1.74,2.67,3.69,5.11,6.05]
alias="快乐的深夜茶会"
/>

<Beatmap
sid=722797
preview="Saratoga(CV: Sumire Uesaka) - Souzetsu Gekkou (Yasaija 714)"
star=6.12
difficulties=[1.80,2.25,3.41,4.61,4.90,5.37,5.79,5.93,6.12]
alias="壮绝激昂"
/>

<Beatmap
sid=128931
preview="Feint - Tower Of Heaven (You Are Slaves) (eLy)"
star=6.15
difficulties=[2.13,3.21,3.87,4.56,5.12,6.15]
alias="天堂塔"
/>

<Beatmap
sid=603905
preview="Dreamcatcher - GOOD NIGHT (Natsu)"
star=6.50
difficulties=[1.77,2.51,3.66,4.49,5.42,5.45,6.50]
/>

<Beatmap
sid=1002819
preview="Roselia - MIIRO (-Mikan)"
star=6.56
difficulties=[1.79,2.09,2.58,3.67,4.58,4.98,5.30,5.82,5.97,6.08,6.56,1.33,2.13,3.10,4.29,4.97,1.82,2.19,3.43,4.64,5.64,2.28,3.32,4.04]
alias="海色"
/>

<Beatmap
sid=320118
preview="Reol - No title (VINXIS)"
star=6.61
difficulties=[1.13,1.97,2.37,3.53,4.22,4.71,5.10,5.41,5.53,5.56,5.62,5.86,5.94,6.61]
/>

<Beatmap
sid=586889
preview="Eisyo-kobu - Oriental Blossom (Crystal)"
star=6.62
difficulties=[1.61,2.05,2.93,3.49,4.18,4.75,5.16,5.17,5.19,5.30,5.73,5.75,5.76,5.87,6.04,6.05,6.20,6.33,6.35,6.39,6.61,6.62]
/>

<Beatmap
sid=1443294
preview="TUYU - Daemonisch (Keqing)"
star=6.84
difficulties=[2.84,3.79,4.79,5.41,5.97,6.13,6.42,6.77,6.78,6.84]
alias="恶魔"
/>

<Beatmap
sid=1376486
preview="Risshuu feat. Choko - Take (yf_bmp)"
star=7.68
difficulties=[1.58,2.57,3.06,3.83,4.83,5.26,5.89,6.22,6.66,6.74,7.38,7.51,7.68]
alias="竹"
/>

<Beatmap
sid=85488
preview="Azis - Hop (Stefan)"
star=4.02
difficulties=[1.25,1.90,3.36,4.02]
alias="Хоп"
mode="t"
/>

<Beatmap
sid=1153833
preview="Digital Math - The Musky Thrust (Jaltzu)"
star=4.83
difficulties=[1.32,2.15,2.80,3.44,4.83]
mode="t"
/>

<Beatmap
sid=501962
preview="Helblinde - Above the Clouds (P i k u)"
star=3.87
difficulties=[1.65,2.25,3.24,3.87]
mode="c"
/>

<Beatmap
sid=336173
preview="Ci Mei Gui - Wu Xuan Lan (Peachtrees)"
star=4.93
difficulties=[1.74,2.24,3.36,3.88,4.93]
alias="舞·绚烂"
mode="c"
/>

<Beatmap
sid=731247
preview="Ryu* - China Express (Sorcerer)"
star=5.21
difficulties=[1.61,2.36,3.16,4.11,5.21]
alias="中华急行"
mode="c"
/>

<Beatmap
sid=1135268
preview="Ling Yuan yousa - Gou Zhi Qi Shi (Madoka2574)"
star=2.68
difficulties=[1.36,2.00,2.68]
alias="勾指起誓"
mode="m"
/>

<Beatmap
sid=473858
preview="Ji Zhou - Theresa's teriteri Circulation (ExNeko)"
star=3.01
difficulties=[1.38,1.46,2.07,2.19,2.91,3.01]
alias="德丽莎的 teriteri 循环"
mode="m"
/>

<Beatmap
sid=248504
preview="Kozato - Tsuki -Yue- (KawaEE)"
star=4.13
difficulties=[1.77,2.85,4.13]
alias="月"
mode="m"
/>

<Beatmap
sid=381397
preview="ginkiha - Anemoi ([ A v a l o n ])"
star=4.54
difficulties=[1.45,2.10,2.79,3.08,4.19,4.54]
mode="m"
/>`,Ff=Object.freeze(Object.defineProperty({__proto__:null,default:Hf},Symbol.toStringTag,{value:"Module"})),Vf=`---
title: 谱面推荐
lang: zh-CN
---

# 谱面推荐

<EasyWallet />
`,Kf=Object.freeze(Object.defineProperty({__proto__:null,default:Vf},Symbol.toStringTag,{value:"Module"})),zf=`---
date: 2022-02-25
---

# SIyuyuko 的 pp 图心得 & 谱面推荐

<Player
id=9794030
name="SIyuyuko"
country=1638
global=88467
from="CN"
accuracy=98.42
level=100
progress=9
performance=4119.31
/>

你好呀，我是幽幽子 awa

这是我的 osu!主页：[https://osu.ppy.sh/users/9794030](https://osu.ppy.sh/users/9794030)

温馨提示：本文内容均属个人感想，可能没专业说法那般严谨。如有绝对性错误，欢迎各位指出。

## 一、前言

### 1. 个人 osu!生涯

- 2017.2 注册账号
- 2018.7 开始真正认真玩 osu!，键鼠单双(混双)玩家，通过 3mod 或 HDHR 低星图 (1~3*并且 AR<8) 冲到 500pp 左右
- 2019.6 高考结束，默认 HD 开始打 3~4.5* (跳图、少量切指)
- 2019.9达到1000pp；入手数位板，转型板键
- 2020.1 达到 2000pp，最高平均能打 4.3~4.5* (跳图、少量切指、综合图)
- 2020.2 入手 ikbc87 (茶轴)，与笔记本键盘 say goodbye
- 2020.4~2021.5 停滞期，打图不高于 5.2* (绝大部分时间) (切指、综合图)
- 2021.5在 m u s e 的点化下尝试打更高星图 (不高于5.5*)，逐渐走出以前的舒适圈
- 2021.6 出新人群
- 2021.8 达到 3000pp，最高平均能打 5~5.2* (综合图、少量串图)
- 2022.1 半个月从 3300 刷到 4000pp
- Now 

### 2. 受众对象

1. 能开始摸 4.5*且能适应 AR≥8.5
2. 默认 nomod 或 HD
3. 想提升aim和 acc，多打综合图/长图

推荐这类萌新食用本文，针对性更明显

其他小伙伴可以查看“群文档-谱面推荐”或和大佬们多多交流，找更适合自己的练习方法对症下药

## 二、打图 (刷 pp) 建议

### 1. 什么是 pp 图

总有萌新问：什么是 pp 图。其实是个 ranked 图都有 pp，因为有 pp 系统的引入，只是多与少的区别。

pp 图更多强调的是：排列比同星级图简单，打起来没那么卡手，花较短的时间就能获得大量 pp(相对来说)的这类图。从时间线上来说，在2015~2016年开始有 mapper 发现这样的作图规律，自此 pp 图开始崛起并有很多玩家游玩。举例几个著名 mapper：Sotarks、Log Off Now、Doormat

pp 图的类型有很多种：跳 pp 图、串 pp 图、综合 pp 长图、超短 pp 图……每个人的说法都不一致，但这些图的特性会让你感觉：欸也不是很难，可竟然有这么多 pp！

### 2. 对 pp 图的误解

#### ① 具体图具体分析

总是看到大家有时候玩梗复读什么 ”不要碰史塔克，会变得不幸“ ”tv size 有毒“ 之类的话。并不是说这些话完全不对，排开对 mapper 的个人情感，大家应该去主动分析单张图的排列和四维。

例如：

<Beatmap
bid=1262832
sid=596704
preview="ClariS - Hitorigoto -TV MIX- (Doormat) [Soliloquy]"
star=4.95
max=476
alias="独白"
/>

作为主难，长度合适，OD8.5 略高，排列有小跳有大跳但acc不会很难看。

再看大家痛恨的 harumachi 主难：

<Beatmap
bid=1764213
sid=842412
preview="Will Stetson - Harumachi Clover (Swing Arrangement) [Dictate Edit] (Sotarks) [Oh no!]"
star=5.13
max=151
alias="等待春天的三叶草"
/>

不仅长度短，OD9，加上排列对角 1-2 大跳。acc 很容易崩，而且会让很多小伙伴一直 retry，时间长下去会养成糊 combo、低 acc的毛病。

“tv size 有毒”实则也是变相说 tv size 图量产 pp。这一情况只适用于部分，仍然有很多图不好上手。例如：

<Beatmap
bid=2654115
sid=1276862
preview="Asaka - I believe what you said (TV Size) (Okoratu) [Spkz's Insane]"
star=4.89
max=573
/>

低 bpm 手控，少量 alt，二连，容易断滑条。

#### ② 平等看待每一个指标

从来没有什么定论说，串一定比跳好，跳跳人是人下人。要想全面均衡发展(假设这是给自己设的目标)，应该通过对自己的观察，引导自己去练习相应类型的图。

一旦决定自己这段时间要练什么，那就保持下去。不要突然看到群友发个什么成绩，自己也去跟风练。在自己现有的水平和舒适圈都没有打的八八九九就切换到另一个不熟悉的领域，结果很可能会什么都打不好。

#### ③ 打好高星 pp图的前提是打的稳和准 

相对来说，星数越高 pp 越多，但pp 也被 combo和 acc 约束着，同时图的难度也在上升。一个 87acc 的 5.2\\*fc 成绩和一个 98acc 的 4.6\\*fc 成绩，pp 都是 120，其实挺讽刺的。稳定性的练习是必要的，为以后接触更难的图打基础。

对于糊的定义也不单一，一是在开始接触自己舒适圈以外的图时，由于不适应突然上升的难度(这里的“难度”不一定指星数)导致 combo 和 acc不佳。这样的现象很正常，踏出去必然会有些牺牲，练好之后回报满满，时机成熟后请勇敢的迈出第一步；二是打自己本来能够打好的图，可能会因为心态(比如 retry 了很多次)或者双手问题，没把 acc 提上去，对待刷pp 要理性，今天打不好改天说不定有状态就打好了；三是(盲目)追求 pass 高星难图的成就感，不在乎评级如何，这样的副作用是：会对自己的稳定性伤害很大，不容易打好正常图。

### 3. 具体建议

1. 初期打图不要直接上手高 OD图(＞8.5)，AR＜9.4
2. 小跳图巩固 acc，再逐步过渡到大跳图上去
3. 选择bpm区间：不高于 240

## 三、谱面推荐

### 1. 跳图

<Beatmap
bid=285928
sid=109554
preview="Yousei Teikoku - Deep Sea (Nemis) [Nemis]"
star=4.35
max=327
/>

<Beatmap
bid=918997
sid=420677
preview="Izumi Akazawa (CV. Madoka Yonezawa) - Responsibility Response (Natsu) [Euny's Insane]"
star=4.30
max=1106
/>

<Beatmap
bid=1714633
sid=817667
preview="Luschka - Kami no Kotoba (byfar) [Insane]"
star=4.47
max=1274
alias="神之语言"
/>

<Beatmap
bid=892543
sid=409898
preview="Komiya Mao - (can you) understand me? (Okoratu) [insane?]"
star=4.62
max=1098
/>

<Beatmap
bid=2201675
sid=1053509
preview="ViViD - HIKARI (TV Size) (Log Off Now) [browiec's Insane]"
star=4.53
max=513
alias="光"
/>

<Beatmap
bid=1055748
sid=495334
preview="Raujika - Roseo Neige (sahuang) [Insane]"
star=4.57
max=996
/>

<Beatmap
bid=2550208
sid=1206296
preview="MIMI - Mizuoto to Curtain (Nozhomi) [Insane]"
star=4.76
max=890
alias="水音与窗帘"
/>

<Beatmap
bid=466789
sid=196813
preview="DJ Genericname - Dango Dango Daikazoku (Drum and Bass Remix) (Moo-Chan) [Insane]"
star=4.96
max=626
alias="团子大家族"
/>

<Beatmap
bid=959406
sid=446774
preview="Krewella - Say Goodbye (PantyDev) [Goodbye]"
star=5.30
max=1034
other=Boss
/>

### 2. 综合

<Beatmap
bid=1439001
sid=613726
preview="DJ TOTTO - Windy Fairy (Syph) [Enon's Insane]"
star=4.44
max=643
/>

<Beatmap
bid=1032103
sid=441167
preview="LiSA - Kimi ni Pierrot (Sotarks) [Kalicuri's Insane]"
star=4.48
max=1242
alias="给你的小丑"
/>

<Beatmap
bid=2305394
sid=942284
preview="ShinRa-Bansho - Dramatic Hizakurige (-Mikan) [Lemaire's Insane]"
star=4.54
max=1122
alias="戏剧性徒步旅行"
/>

<Beatmap
bid=648072
sid=282375
preview="yuikonnu - Ai no Scenario (Guy) [Insane]"
star=4.71
max=1400
alias="爱的剧本"
/>

<Beatmap
bid=2216352
sid=879429
preview="Eve - Outsider (AirinCat) [Insane]"
star=4.71
max=1045
alias="局外人"
/>

<Beatmap
bid=3087276
sid=1507333
preview="Elephante feat. Matluck - Come Back For You (Morgan Page Remix) (Asphyxia) [Expose Me]"
star=4.71
max=752
/>

<Beatmap
bid=888008
sid=409025
preview="Sleeping With Sirens - If You Can't Hang (pishifat) [10nya's Light Insane]"
star=4.71
max=1219
/>

<Beatmap
bid=692241
sid=107747
preview="iojjj - Deus Ex Machina (Okoratu) [INSANE]"
star=4.74
max=1183
alias="机械降神"
/>

<Beatmap
bid=2348195
sid=1123753
preview="MIMI - Lapis Lazuli (Mak Kau Hijau) [Insane]"
star=4.89
max=1246
alias="青金石"
/>

<Beatmap
bid=2801570
sid=1352739
preview="Hijirime Laeria - stlaeria (Hinsvar) [Insane]"
star=4.82
max=997
alias="鹤望兰"
/>

<Beatmap
bid=258252
sid=92509
preview="senya - Kanjou Chemistry (Drum 'n' Bass Remix) (Satellite) [Satellite]"
star=4.97
max=1415
alias="感情化学"
/>

<Beatmap
bid=992281
sid=462386
preview="Foreground Eclipse - From Under Cover (Caught Up In A Love Song) (Seni) [Lunatic]"
star=5.11
max=1222
/>

<Beatmap
bid=2266883
sid=1083931
preview="Nekrogoblikon - Dragons (Nao Tomori) [Soaring in the Sky]"
star=5.10
max=1404
/>

<Beatmap
bid=230523
sid=83494
preview="B.o.B feat. Hayley Williams - Airplanes (Feint Remix) (Snepif) [Shooting Stars]"
star=5.47
max=1093
other=Boss
/>

<br />

<div style="text-align: center; padding: 0; ">
    ❀The end❀
</div>

![9794030-1.jpg](/images/recommend/9794030-1.jpg)`,jf=Object.freeze(Object.defineProperty({__proto__:null,default:zf},Symbol.toStringTag,{value:"Module"})),Yf=`---
date: 2024-06-27
---

# 朔望 [Syzygy5593] 的 pp 刷子心得 & pp 图大放送

<Player
id=35744851
name="Syzygy5593"
country=0
global=249304
from="JP"
accuracy=94.77
level=78
progress=25
performance=3107
/>

## ★个人经历和介绍

2024.4 注册账号随后备战高考，入坑即为强双+板键玩家，游玩时间不长，全在刷 pp 有其他音游（无轨下落式）基础，跳图玩家，连打苦手，手速低下

今天是 2024.6.27，出群之际写下本文，以供后之览者爽刷 pp

本文将提供支持你从入坑到出群的一系列 pp 图

如果你也想成为像我一样的 pp 刷子，希望本文可以为你提供一些帮助

pp+ 和游玩数据如下：

![35744851-1.jpg](/images/recommend/35744851-1.jpg)

## ★如何寻找 pp 图

关于「如何定义pp图」，可以阅读「[SIyuyuko 的 pp 图心得](./SIyuyuko.md)」，本文不再赘述下面是一些目前我搜集到的 pp 图推荐网站/软件，评价较为主观（主要以我刷不刷得到）在刷的时候建议不要在一个地方的推荐上磕死，如果推荐的太难可以换个网站找

### osu! Farmers Market

[https://pp.bcs.dev/](https://pp.bcs.dev/)，本人的第一款 pp 图推荐网站

优点：可以筛选预期 pp、mod、时长、bpm、ar、cs 和星数等，非常方便找想要的图缺点：不能针对玩家个性化推荐，需要自己去试

另外，这个站谱面推荐的是高 acc（>98），在筛选的时候 maxPP 可以适当写高一点

![35744851-2.jpg](/images/recommend/35744851-2.jpg)

### AlphaOsu!

[https://alphaosu.keytoix.vip/self/pp-recommend](https://alphaosu.keytoix.vip/self/pp-recommend)，强推！！！

优点：可以根据你的 bp 个性化推荐 pp 图，支持星数和 mod 筛选

缺点：对2000pp以下推荐的图普遍偏难，但是可以通过筛选星数规避

![35744851-3.jpg](/images/recommend/35744851-3.jpg)

### osu-pps

[https://osu-pps.com/#/osu/maps](https://osu-pps.com/#/osu/maps)，老牌 pp 图网站

优点：只需要第一次加载，后面即可直接读缓存，加载更快。支持bpm、时长、mod筛选缺点：不支持个性化推荐

![35744851-4.jpg](/images/recommend/35744851-4.jpg)

### Tillerino

bot，游戏内发起聊天即可使用，帮助文档 [https://github.com/Tillerino/Tillerinobot/wiki](https://github.com/Tillerino/Tillerinobot/wiki)

优点：个性化推荐，支持mod筛选，可以看 acc对应的pp

缺点：推的图有时候偏难（在我2000不到的时候给我推了哀の隙間主难），响应有点慢

![35744851-5.jpg](/images/recommend/35744851-5.jpg)

### DalouBot

软件，在群文件有，双击main.exe即可使用

群里没什么人用这个，但是我觉得非常好用

好像是个历史遗物，本人考证无果，或许可以问问管理

优点：推图比较符合当前水平，至少我自己用它吃到了不少pp

缺点：使用的18年以前的离线库，推图比较老，没有近六年的新图

![35744851-6.jpg](/images/recommend/35744851-6.jpg)

## ★pp 图推荐

注意：本文不讨论什么排列可以练跳练串练连打，一切以能刷到pp 为准

以下推荐带有强烈的主观色彩，仅代表我自己可以刷得到

如果你认为某张图很难刷不到，可以打低难或者不刷，刷不到不要硬刷，换张图如果你认为你没图刷了，可以考虑低难 DT或者自己找其他图，pp 图多的是（反正我都给了这么多 你就慢慢试嘛）

### ★知名必刷 pp 图

以下图每个难度基本都能刷，够你从入群刷到出群

如果觉得刷不到了可以试着低难+DT，原ar>8的图慎开DT，小心高 ar综合征

#### PADORU 二则

<Beatmap
sid=1061287
preview="Turbo - PADORU / PADORU (DeRandom Otaku)"
star=5.77
difficulties=[1.63,2.21,3.44,4.39,4.81,4.86,5.01,5.10,5.19,5.24,5.32,5.42,5.49,5.60,5.68,5.77]
/>

<Beatmap
sid=1073074
preview="Turbo - PADORU / PADORU (Sotarks)"
star=5.96
difficulties=[2.33,3.63,4.18,4.42,4.44,4.47,4.47,4.51,4.78,4.81,4.83,5.07,5.13,5.44,5.46,5.46,5.50,5.58,5.59,5.60,5.62,5.73,5.88,5.91,5.96]
/>

两个都可以刷，acc 太低就别打了，小心倒刷

#### Harumachi 四则

除了这几张还有很多 harumachi，可以自己去搜，但是基本都不太好刷

<Beatmap
sid=600702
preview="Hanasaka Yui(CV: M.A.O) - Harumachi Clover (Djulus)"
star=4.54
difficulties=[1.36,1.98,2.39,2.85,4.09,4.54]
alias="等待春天的三叶草"
/>

<Beatmap
sid=859783
preview="Will Stetson - Harumachi Clover (Swing Arrangement) (Will Stetson)"
star=5.26
difficulties=[1.95,3.19,4.16,4.17,4.24,4.24,4.34,4.83,4.84,4.86,5.08,5.15,5.23,5.26]
alias="等待春天的三叶草"
/>

<Beatmap
sid=861685
preview="R3 Music Box - Harumachi Clover (Nao Tomori)"
star=3.03
difficulties=[1.99,2.43,3.03]
alias="等待春天的三叶草"
/>

<Beatmap
sid=842412
preview="Will Stetson - Harumachi Clover (Swing Arrangement) [Dictate Edit] (Sotarks)"
star=5.13
difficulties=[2.23,3.27,3.82,3.88,4.27,4.27,4.55,5.13,2.66,3.32]
alias="等待春天的三叶草"
/>

#### Granat 五则

第一个最经典最好刷，后面的酌情，可以打两把看看难度，打不了别硬打

<Beatmap
sid=497769
preview="Drop - Granat (Left)"
star=5.05
difficulties=[2.04,2.81,3.89,5.05]
/>

<Beatmap
sid=219763
preview="Drop - Granat (Kaguya Hourain)"
star=5.25
difficulties=[1.88,2.53,3.45,4.13,4.26,5.05,5.25]
/>

<Beatmap
sid=720240
preview="Drop - Granat (Half)"
star=5.97
difficulties=[1.84,2.47,3.29,3.93,4.56,4.79,5.02,5.97]
/>

<Beatmap
sid=155118
preview="Drop - Granat (Lan wings)"
star=5.58
difficulties=[1.26,1.84,2.88,5.21,5.58]
/>

<Beatmap
sid=501992
preview="Drop - Granat (diraimur)"
star=6.01
difficulties=[1.78,2.15,2.83,3.20,4.17,5.06,5.15,5.18,5.87,6.01]
/>

#### Log Off Now 的 MIMI 三件套

这跳写的比sotarks 好一百倍。爽刷另附串比特供的哀之隙间（但是jump要求也不低）

<Beatmap
sid=952409
preview="MIMI feat. Hatsune Miku - Ai no Sukima (Log Off Now)"
star=5.31
difficulties=[2.12,3.51,3.95,4.47,4.99,5.31]
alias="哀伤的隙间"
/>

<Beatmap
sid=962088
preview="MIMI feat. Hatsune Miku - Marshmary (Log Off Now)"
star=5.11
difficulties=[2.34,3.46,4.41,5.11]
alias="棉花糖"
/>

<Beatmap
sid=968171
preview="MIMI feat. Hatsune Miku - Mizuoto to Curtain (Log Off Now)"
star=5.49
difficulties=[2.41,3.29,3.91,4.37,4.96,5.49]
alias="水音与窗帘"
/>

<Beatmap
sid=1919786
preview="MIMI vs. Leah Kate - 10 Things I Hate About Ai no Sukima (Log Off Now)"
star=6.69
difficulties=[2.05,2.64,3.27,3.72,4.48,4.93,5.31,5.74,6.16,6.35,6.69]
alias="我讨厌哀伤的隙间的 10 点"
/>

#### Cold Green Eyes 三则

还有很多张其他冷绿眼，可以自己找着玩

<Beatmap
sid=371128
preview="Station Earth - Cold Green Eyes ft. Roos Denayer (Bearizm)"
star=4.89
difficulties=[1.88,2.25,3.03,4.19,4.89]
alias="冷绿眼"
/>

<Beatmap
sid=716719
preview="Station Earth - Cold Green Eyes ft. Roos Denayer (Mismagius)"
star=5.34
difficulties=[1.55,2.22,3.03,3.32,4.42,5.34]
alias="冷绿眼"
/>

<Beatmap
sid=1101976
preview="Station Earth - Cold Green Eyes feat. Roos Denayer (Sotarks)"
star=5.32
difficulties=[3.30,4.26,4.63,5.32]
alias="冷绿眼"
/>

#### MY REZHEM KINOLENTY

每个难度都能吃，主难DT 可吃120+pp

<Beatmap
sid=816264
preview="55x55 - MY REZHEM KINOLENTY (feat. Cut The Crap) (Shmiklak)"
star=3.65
difficulties=[1.35,2.03,2.95,3.65]
alias="我们裁切着胶片"
/>

#### 其他

<Beatmap
sid=503141
preview="Gom (HoneyWorks) - Zen Zen Zense (MugiwaraSekai)"
star=4.74
difficulties=[1.71,2.36,3.37,4.19,4.74]
alias="前前前世"
/>

30s 刷不了吃亏刷不了上当，Monstrata 还写了个一分多钟的，也可以刷

<Beatmap
sid=513590
preview="RADWIMPS - Zen Zen Zense (movie ver.) (Monstrata)"
star=5.32
difficulties=[1.81,2.44,3.52,4.46,4.99,5.02,5.13,5.28,5.32]
alias="前前前世"
/>

爽刷，1kpp 段刷 nm，2kpp 段刷 DT

<Beatmap
sid=542081
preview="Elmo and Cookie Monster - Cookie-Butter-Choco-Cookie (Monstrata)"
star=5.06
difficulties=[1.42,1.88,2.76,2.89,3.48,3.51,3.54,3.62,3.65,3.96,4.00,4.19,4.23,4.46,4.48,5.06,2.28,2.81,3.27]
alias="曲奇・黄油・巧可・曲奇"
/>

也是什么分段都能刷的歌

<Beatmap
sid=705423
preview="Unknown Artist - Miniministop Hitoyasumi no Uta[Mokuyoubi]Gakusei no Uta (Chromoxx)"
star=3.71
difficulties=[1.21,1.49,2.27,2.80,3.55,3.58,3.71,0.99,1.43,1.85,2.40]
alias="迷你 Ministop 小憩之歌【星期四】学生之歌"
/>

经典

<Beatmap
sid=765778
preview="Icon For Hire - Make a Move (Speed Up Ver.) (Sotarks)"
star=6.10
difficulties=[2.33,3.77,4.57,4.73,4.75,5.06,5.08,5.42,5.60,5.70,5.79,5.93,6.09,6.10,3.21,3.97,4.61]
/>

排列有一点难，不过多打几次就会了

<Beatmap
sid=325112
preview="Roses Epicurean - Yoru no Kodomo tachi (CodeS)"
star=3.80
difficulties=[1.33,2.11,2.90,3.20,3.80]
alias="夜之子"
/>

每个难度都可以吃

<Beatmap
sid=596704
preview="ClariS - Hitorigoto -TV MIX- (Doormat)"
star=4.95
difficulties=[1.78,1.91,2.25,2.32,3.43,3.62,4.26,4.48,4.55,4.59,4.79,4.95]
alias="独白"
/>

有一点难度的跳

<Beatmap
sid=938926
preview="Tashiro Tomokazu - Koi no Hime Hime Pettanko (Karaoke) (DakiniBrave)"
star=5.61
difficulties=[2.26,3.42,4.26,4.82,5.03,5.22,5.61]
alias="爱的公主公主平胸妹 (卡拉 OK)"
/>

没事抽两把，说不定出 bp 了呢

<Beatmap
sid=206284
preview="FELT - In my room (Aka)"
star=4.08
difficulties=[1.39,2.11,3.10,4.08]
/>

<Beatmap
sid=399061
preview="FELT - In my room (ByBy13)"
star=4.61
difficulties=[1.74,2.43,3.24,4.11,4.24,4.61]
/>

经典抽奖图西酞普，小圈+跳警告，我刷次难 197pp出的群

<Beatmap
sid=757146
preview="Tanaka Hirokazu - C-TYPE (Arf)"
star=6.20
difficulties=[1.53,2.13,3.26,4.86,4.87,4.91,5.07,5.28,5.46,6.20]
/>

力作 爽刷

<Beatmap
sid=798007
preview="Will Stetson - Despacito ft. R3 Music Box (Sotarks)"
star=5.53
difficulties=[2.14,3.50,4.04,4.23,4.30,4.64,4.82,4.84,4.90,5.12,5.31,5.37,5.53,2.80,3.41]
/>

经典跳图

<Beatmap
sid=873811
preview="dj TAKA - quaver (Sotarks)"
star=6.51
difficulties=[1.28,1.81,2.35,2.74,3.56,4.23,4.31,4.67,4.73,5.21,5.30,5.37,5.51,5.66,5.79,5.80,5.99,6.03,6.06,6.13,6.15,6.44,6.51,3.05,4.10]
alias="quaver ♪"
/>

你群唯一赦免图↓

<Beatmap
sid=320118
preview="Reol - No title (VINXIS)"
star=6.61
difficulties=[1.13,1.97,2.37,3.53,4.22,4.71,5.10,5.41,5.53,5.56,5.62,5.86,5.94,6.61]
/>

恐龙妈妈~

<Beatmap
sid=444335
preview="HO-KAGO TEA TIME - Kira Kira Days (Kagetsu)"
star=5.60
difficulties=[1.68,2.52,3.68,4.08,4.72,5.28,5.60]
alias="闪耀 Days"
/>

<Beatmap
sid=1384619
preview="HO-KAGO TEA TIME - Kira Kira Days (Cut Ver.) (Sotarks)"
star=5.86
difficulties=[2.50,3.66,4.59,5.08,5.86]
alias="闪耀 Days"
/>

NSFW 警告

<Beatmap
sid=983911
preview="S3RL - Bass Slut (Original Mix) (Fatfan Kolek)"
star=6.69
difficulties=[2.42,3.42,4.18,4.52,4.87,5.67,5.68,6.02,6.69]
/>

我没词了。

<Beatmap
sid=984684
preview="Victorious Cast - Take a Hint feat. Victoria Justice & Elizabeth Gillies (Speed Up Ver.) (SquareTude)"
star=5.10
difficulties=[1.87,2.26,2.70,3.38,3.76,4.23,4.70,5.10]
/>

### ★60s 以内的超短图

不包含上面提过的图

<Beatmap
sid=527431
preview="Brad Breeck - Gravity Falls Theme Song (Alphabet)"
star=4.24
difficulties=[1.48,2.14,3.24,3.92,4.24]
/>

<Beatmap
sid=1542384
preview="Rory Doggett - Home Depot TV Theme Song (Aistre)"
star=4.22
difficulties=[1.49,2.09,2.80,4.22]
/>

<Beatmap
sid=520938
preview="R3 Music Box - No title (sahuang)"
star=3.97
difficulties=[1.17,1.63,2.15,3.04,3.97]
/>

<Beatmap
sid=788905
preview="Sporty-O - Let Me Hit It (Audiostalkers Original Mix) (eiri-)"
star=4.07
difficulties=[1.28,1.72,2.43,3.55,3.88,4.07,2.83,3.13]
/>

<Beatmap
sid=420765
preview="Dendei - gabe power (HighTec)"
star=6.04
difficulties=[1.26,1.73,1.91,2.89,3.81,4.59,5.01,5.55,6.04]
/>

<Beatmap
sid=107009
preview="Shouta Kageyama - Relic Song (Leader)"
star=3.45
difficulties=[1.43,1.81,2.50,3.21,3.45,1.23,1.65,1.21,1.97,2.94,1.31,2.15]
alias="遗迹之歌"
/>

<Beatmap
sid=1207609
preview="Seth Everman - how to create the weeknd's “blinding lights” (browiec)"
star=4.56
difficulties=[2.10,2.98,3.84,4.56]
/>

<Beatmap
sid=459149
preview="Ayase Rie - Yuima-ru*World TVver. (Fycho)"
star=5.93
difficulties=[1.54,2.10,3.20,4.28,4.94,5.93]
alias="互助世界"
/>

<Beatmap
sid=726747
preview="Ayase Rie feat. Hata-tan - Yuima-ru*World TVver. (Hey lululu)"
star=5.66
difficulties=[1.65,2.21,3.49,4.46,5.40,5.66]
alias="互助世界"
/>

<Beatmap
sid=1159452
preview="Cornelius Link - Astronomia (Medieval Style) (Seto Kousuke)"
star=4.82
difficulties=[1.78,2.57,3.26,3.37,4.09,4.56,4.82]
/>

<Beatmap
sid=2121355
preview="DJ Genki - Introduction (KaedeharaKazuha)"
star=5.62
difficulties=[2.04,2.53,3.52,4.67,5.62]
/>

<Beatmap
sid=331190
preview="Asterisk - Ren-chon no Drum 'n' Bass (Deppyforce)"
star=5.54
difficulties=[1.54,2.15,3.56,4.65,5.54]
alias="莲酱的鼓打贝斯"
/>

<Beatmap
sid=1280506
preview="EDOGA-SULLIVAN - WONDERFUL WONDER (TV Size) (Kuki1537)"
star=4.93
difficulties=[2.21,3.44,4.29,4.93]
/>

<Beatmap
sid=485903
preview="DZIDZIO - Yalta (wajinshu)"
star=3.98
difficulties=[1.58,2.28,3.06,3.98]
alias="Ялта"
/>

<Beatmap
sid=109570
preview="Griffin Lewis - Princess of the Night (Fatfan Kolek)"
star=4.35
difficulties=[1.17,1.57,2.81,3.40,4.35]
/>

<Beatmap
sid=1011341
preview="Puffy AmiYumi - TEEN TITANS THEME (TV Size) (yShadowXOP_)"
star=5.08
difficulties=[2.23,3.34,4.37,5.08]
/>

<Beatmap
sid=2009205
preview="Aiobahn - INTERNET ANGEL (bnmc)"
star=5.92
difficulties=[1.80,2.26,3.54,4.54,4.84,5.44,5.92]
/>

<Beatmap
sid=662679
preview="Koji Kondo - MAP4(Native Star) (MoodyRPG)"
star=2.86
difficulties=[1.25,1.87,2.62,2.86]
/>

<Beatmap
sid=189825
preview="Disasterpeace - Jolly Frolic (Timorisu)"
star=4.49
difficulties=[1.65,2.41,3.53,4.49,2.56,3.48]
/>

<Beatmap
sid=874602
preview="R3 Music Box - Zankoku na Tenshi no These (CptSqBany)"
star=2.60
difficulties=[1.01,1.34,2.17,2.60]
alias="残酷天使的行动纲领"
/>

<Beatmap
sid=1004468
preview="Parry Gripp - Guinea Pig Bridge (Sotarks)"
star=5.52
difficulties=[2.40,3.33,3.98,4.52,4.95,5.52]
/>

串图警告

<Beatmap
sid=573894
preview="3R2 - Bunny Panic!!! (Kyubey)"
star=6.06
difficulties=[2.15,3.13,3.71,4.83,6.06]
/>

<Beatmap
sid=1293791
preview="Cadence and The Penguin Band - Cool in the Cold (Cut Ver.) ([-Evil-])"
star=3.73
difficulties=[1.57,2.15,2.96,3.73]
/>

### ★DT 图

本人 DT 玩的不精，可以去参考其他前辈的 DT 推荐

<Beatmap
sid=557532
preview="bradbreeck - Emotional Uplifting Orchestral (Venix)"
star=2.84
difficulties=[0.92,1.25,2.00,2.84]
/>

<Beatmap
sid=346339
preview="Three Days Grace - Unbreakable Heart (Lumael)"
star=3.48
difficulties=[1.55,1.75,2.89,3.48]
/>

<Beatmap
sid=175968
preview="Trident - Blue Field (CelsiusLK)"
star=3.71
difficulties=[1.61,2.11,3.19,3.71]
alias="蓝场"
/>

<Beatmap
sid=1004468
preview="Parry Gripp - Guinea Pig Bridge (Sotarks)"
star=5.52
difficulties=[2.40,3.33,3.98,4.52,4.95,5.52]
/>

<Beatmap
sid=584575
preview="toby fox - sans. (Error-)"
star=3.33
difficulties=[1.38,1.67,2.34,3.33,2.86]
/>

<Beatmap
sid=1061694
preview="Paul K. Joyce feat. Neil Morrissey - Can We Fix It? (TV Size) (Kyoshiro)"
star=3.82
difficulties=[1.85,2.94,3.82]
/>

<Beatmap
sid=558938
preview="bradbreeck - Step Off Playa (Chalwa)"
star=3.81
difficulties=[1.48,2.35,2.98,3.81]
/>

<Beatmap
sid=1813523
preview="Miki Sayaka (CV: Kitamura Eri), Sakura Kyoko (CV: Nonaka Ai) - and I'm home (TV Size) (crewfantasy)"
star=3.61
difficulties=[1.70,2.66,3.20,3.61]
/>

<Beatmap
sid=470741
preview="Mariya Nishiuchi - Don't let me down (Jonawaga)"
star=3.31
difficulties=[1.43,2.14,3.31]
/>

<Beatmap
sid=1123162
preview="Sayuri - Sore wa Chiisana Hikari no Youna (TV Size) (Kuki1537)"
star=4.20
difficulties=[2.06,2.98,3.56,4.03,4.20]
alias="犹如微弱的光芒"
/>

<Beatmap
sid=627629
preview="55x55 - MUZYKA NE MUZYKANTA (feat. Snailkick) (Shmiklak)"
star=3.05
difficulties=[1.34,2.16,3.05]
/>

<Beatmap
sid=235551
preview="Rammstein - Los (Sieg)"
star=3.75
difficulties=[2.08,2.61,3.75]
/>

<Beatmap
sid=608723
preview="RADWIMPS - Katawaredoki (Monstrata)"
star=3.36
difficulties=[1.64,2.53,3.36]
alias="黄昏之时"
/>

DT 后 ar9.8 警告

<Beatmap
sid=818349
preview="Tanizawa Tomofumi - Sawakaze (TV Size) (Nyantiaz)"
star=3.82
difficulties=[1.88,2.82,3.82]
alias="爽风"
/>

### ★其他 pp 图（TV size 合集）

<Beatmap
sid=495334
preview="Raujika - Roseo Neige (sahuang)"
star=4.80
difficulties=[1.90,2.30,3.53,4.57,4.80]
/>

<Beatmap
sid=357466
preview="ARCIEN - Future Son (Mishima Yurara)"
star=4.45
difficulties=[1.77,2.20,3.15,4.38,4.45]
/>

<Beatmap
sid=1328989
preview="YOASOBI - Kaibutsu (TV Size) ([-Evil-])"
star=4.96
difficulties=[1.90,2.30,3.48,4.26,4.53,4.68,4.96]
alias="怪物"
/>

<Beatmap
sid=1147361
preview="Suzuki Masayuki - DADDY ! DADDY ! DO ! feat. Suzuki Airi (TV Size) (hypercyte)"
star=4.66
difficulties=[1.62,2.00,3.21,4.00,4.66]
/>

<Beatmap
sid=497942
preview="mimimemeMIMI - Harebare Fanfare (Luna-)"
star=5.04
difficulties=[1.64,2.17,3.29,4.19,5.04]
alias="晴朗号角"
/>

<Beatmap
sid=190222
preview="Aoi Eir - IGNITE (TV size ver.) (Guy)"
star=4.97
difficulties=[1.73,2.33,3.43,4.97]
/>

<Beatmap
sid=446418
preview="ULTRA TOWER - Kibou no Uta (TV Size) (Nevo)"
star=4.53
difficulties=[2.14,3.09,4.03,4.53]
alias="希望之歌"
/>

<Beatmap
sid=130104
preview="Fujijo Seitokai Shikkou-bu - Best FriendS -TV Size- (Flask)"
star=4.65
difficulties=[1.71,2.13,3.37,4.43,4.65]
/>

<Beatmap
sid=2145273
preview="Aoi Eir - IGNITE (TV Size) (Paradoxal)"
star=5.47
difficulties=[2.26,3.56,4.09,4.70,5.47]
/>

写的很舒服的跳

<Beatmap
sid=1034008
preview="DIVELA feat. Hatsune Miku - Beat Syncer (Log Off Now)"
star=5.72
difficulties=[2.47,3.44,4.58,5.27,5.72]
alias="节奏同步者"
/>

<Beatmap
sid=361740
preview="Agnete Kjolsrud - Get Jinxed (Tarrasky)"
star=6.09
difficulties=[1.90,2.52,3.48,4.34,5.63,5.67,6.09]
/>

<Beatmap
sid=236292
preview="Agressor Bunx - Tornado (Original Mix) (Shadren)"
star=4.06
difficulties=[1.65,2.11,3.21,4.06]
/>

<Beatmap
sid=1418780
preview="Ren feat. Hatsune Miku - Tougetsu, Rinzen ni Kisu. (Log Off Now)"
star=5.38
difficulties=[2.54,3.60,4.51,5.38]
alias="冬月，归于凛然。"
/>

<Beatmap
sid=1685799
preview="m1v - you (i love ganyu)"
star=4.78
difficulties=[2.23,3.50,4.08,4.78]
/>

<Beatmap
sid=819112
preview="Simple Plan - You Suck At Love (Speed Up Ver.) (Reform)"
star=5.56
difficulties=[2.14,3.62,4.39,5.17,5.45,5.56]
/>

<Beatmap
sid=599556
preview="(K)NoW_NAME - Freesia (Vert)"
star=5.21
difficulties=[1.92,3.22,4.27,5.21]
/>

<Beatmap
sid=456986
preview="Komiya Mao - (can you) understand me? (Sotarks)"
star=5.01
difficulties=[2.09,3.52,4.29,5.01]
/>

<Beatmap
sid=765169
preview="Komiya Mao - (can you) understand me? (Sotarks)"
star=4.99
difficulties=[2.27,3.66,4.96,4.98,4.99]
/>

<Beatmap
sid=770300
preview="Aitsuki Nakuru - Monochrome Butterfly (Sotarks)"
star=5.83
difficulties=[2.23,3.64,4.46,5.07,5.44,5.70,5.83]
/>

<Beatmap
sid=503486
preview="Tia - The Glory Days (Beomsan)"
star=5.77
difficulties=[1.91,3.22,4.16,4.76,5.68,5.77]
/>

<Beatmap
sid=259907
preview="SawanoHiroyuki[nZk]:mizuki - &Z (TV size-English ver.-) (xxdeathx)"
star=4.48
difficulties=[0.71,1.60,1.95,3.11,3.78,4.27,4.48]
/>

<Beatmap
sid=1053509
preview="ViViD - HIKARI (TV Size) (Log Off Now)"
star=5.95
difficulties=[2.42,3.43,4.12,4.53,5.11,5.52,5.95]
alias="光"
/>

<Beatmap
sid=152249
preview="Mikakuning! - Tomadoi Recipe (TV Size) (Fycho)"
star=4.70
difficulties=[1.73,2.05,3.30,4.70]
alias="困惑→食谱 (TV Size)"
/>

<Beatmap
sid=223180
preview="Goose house - Hikaru nara -TV size- (Mei)"
star=4.18
difficulties=[1.55,2.36,3.01,3.99,4.18]
alias="若能绽放光芒"
/>

<Beatmap
sid=420458
preview="Diana Garnet - Spinning World (Anime Ver.) (-Sh1n1-)"
star=5.22
difficulties=[1.82,2.48,3.50,4.41,4.88,5.22]
/>

<Beatmap
sid=559248
preview="Tomita Miyu, Onishi Saori, Ohzora Naomi, Hanazawa Kana - Hallelujah*Essaim (Doormat)"
star=5.93
difficulties=[2.17,2.63,3.63,3.72,4.37,4.74,4.97,5.30,5.60,5.93]
alias="ハレルヤ☆エッサイム"
/>

<Beatmap
sid=770306
preview="miwa - chAngE (MaridiuS)"
star=5.46
difficulties=[2.02,3.40,4.34,4.75,4.86,5.46]
/>

<Beatmap
sid=223871
preview="Goose house - Hikaru nara -TV size- (Pandiar)"
star=4.29
difficulties=[1.81,2.94,4.29]
alias="若能绽放光芒"
/>

<Beatmap
sid=480765
preview="3 Nen E Gumi Utatan (Nagisa & Kayano & Karuma & Isogai & Maehara) - Bye Bye YESTERDAY (Gero)"
star=5.52
difficulties=[2.00,2.57,3.38,3.70,4.36,4.79,5.06,5.27,5.39,5.52]
alias="拜拜 YESTERDAY"
/>

<Beatmap
sid=380545
preview="Primary - Sweets Weekend (CaffeAmericano)"
star=5.35
difficulties=[2.00,2.28,3.60,4.30,5.02,5.35]
/>

经典连打图

<Beatmap
sid=43466
preview="DJ Genericname - Dear You (Rue)"
star=4.83
difficulties=[1.90,2.08,3.66,4.83]
/>

<Beatmap
sid=50771
preview="Kozato - 45nen no Yukizakura (LoliSora)"
star=4.47
difficulties=[1.69,2.37,4.07,4.47]
alias="45年的雪樱"
/>

## ★给准 pp 刷子的建议

刷 pp 虽好，终非长久之计

本人从 500 多 pp 开始认识「pp 图」概念之后猛刷 pp，刷到 5* 的 pp 图的时候会很明显地被各种连打卡住，只能去补救连打才刷的动（力荐「[Kagami的连打推荐](./hiiragi_kagami.md)」）

而且一直刷 pp 会导致 mp 的时候没有什么正常图选（笑）

切记pp 图不能当做练习图，需要串跳切练习图请移步群文件，其他前辈的谱面推荐更有效刷pp之余记得去练acc、练长图、练切纸、练连打和串串，成为均衡发展的刷子

## ★后记

祝大家都能突破瓶颈迎来飞升，早日出群来找我玩喵

☆博麗霊夢天下第一☆

![35744851-7.jpg](/images/recommend/35744851-7.jpg)`,Uf=Object.freeze(Object.defineProperty({__proto__:null,default:Yf},Symbol.toStringTag,{value:"Module"})),Gf=`---
date: 2025-06-21
---

# Atahana 精选 DJ 图包

<Player 
  id=24684205
  name="Atahana"
  country=1297
  global=71248
  from="CN"
  accuracy=98.21
  level=100
  progress=54
  performance=5671
/>

*编者注：这玩意在群里占用 1.04 GB，但是这篇文章只有 17.3 KB，节省了至少 99.9984% 的空间。*

## 1-30

<Beatmap
  sid=5731
  preview="Naoki & Tatsh - Red Zone (HenkieBP)"
  star=5.13
  difficulties=[2.43,3.26,5.08,5.13]
/>

<Beatmap
  sid=7104
  preview="Yuu - U.N. Owen was Her? (ignorethis)"
  star=5.29
  difficulties=[3.05,4.64,5.29,3.87]
/>

<Beatmap
  sid=8229
  preview="DJ Mars - Lemon Tree (MetalMario201)"
  star=4.21
  difficulties=[2.75,3.18,4.21]
  alias="柠檬树"
/>

<Beatmap
  sid=8545
  preview="DJ Satomi - Castles in the Sky (xxheroxx)"
  star=4.89
  difficulties=[2.35,3.97,4.10,4.34,4.82,4.89]
  alias="天空城堡"
/>

<Beatmap
  sid=8974
  preview="dj TAKA - V2 (Mystearica)"
  star=4.76
  difficulties=[2.41,3.89,4.76]
/>

<Beatmap
  sid=9489
  preview="Silver Forest - The Doll Maker of Bucuresti (Yes)"
  star=4.87
  difficulties=[1.81,3.72,4.87]
/>

<Beatmap
  sid=14091
  preview="DJ Changsta - River Flows In You (SteRRuM)"
  star=4.11
  difficulties=[1.96,3.39,4.11]
/>

<Beatmap
  sid=16619
  preview="DJ Sharpnel - Exciting Hyper Highspeed Star (xBubu)"
  star=5.36
  difficulties=[2.42,3.01,4.81,5.36]
/>

<Beatmap
  sid=18630
  preview="DJ Manian - Welcome To The Club (tieff)"
  star=3.51
  difficulties=[1.64,2.19,3.51]
/>

<Beatmap
  sid=22194
  preview="DCX - Flying High (DJ Splash Remix) (yeahyeahyeahhh)"
  star=5.48
  difficulties=[2.34,2.92,4.10,5.48,4.24]
/>

<Beatmap
  sid=24899
  preview="Cascada - Ready For Love (Nightcore Mix) (osuplayer111)"
  star=4.46
  difficulties=[2.04,2.32,4.46,4.44]
/>

<Beatmap
  sid=28146
  preview="Dj Satomi - Waves (Nightcore Mix) (ztrot)"
  star=4.96
  difficulties=[2.26,2.63,4.80,4.96]
/>

<Beatmap
  sid=30831
  preview="Various Artists - AKABEi SOFT2 Nonstop Remix (regenz)"
  star=5.64
  difficulties=[5.64]
/>

<Beatmap
  sid=33323
  preview="Itou Kanako - Skyclad no Kansokusha -Remix- (Takos)"
  star=4.99
  difficulties=[1.91,3.64,4.77,4.99]
/>

<Beatmap
  sid=39032
  preview="Rin - Prism Magical (DJ SHARPNEL hardrave remix) (regenz)"
  star=5.62
  difficulties=[1.78,2.42,2.93,5.34,5.62]
/>

<Beatmap
  sid=43466
  preview="DJ Genericname - Dear You (Rue)"
  star=4.82
  difficulties=[2.03,2.13,3.70,4.82]
/>

<Beatmap
  sid=46218
  preview="A*Teens - Gimme! Gimme! Gimme! (Nightcore Mix) (ShadowSoul)"
  star=5.61
  difficulties=[2.07,2.71,4.40,5.61,4.49]
/>

<Beatmap
  sid=46196
  preview="REDALiCE feat. Shihori - Express Emotion (Muya)"
  star=5.40
  difficulties=[1.39,2.05,3.80,5.02,5.40]
  disabled=true
/>

<Beatmap
  sid=53813
  preview="DJ Fresh - Gold Dust (Sonic Entropy Remix) (galvenize)"
  star=5.89
  difficulties=[3.85,5.89]
/>

<Beatmap
  sid=61714
  preview="DJ BaSSMaT - Merry Christmas (-Bakari-)"
  star=3.57
  difficulties=[1.85,2.02,3.18,3.57]
/>

<Beatmap
  sid=64636
  preview="DJ Genericname - Dango Dango Drum and Bass (Moway)"
  star=4.87
  difficulties=[1.72,2.13,3.51,4.87,2.70,4.16]
  alias="团子大家族"
/>

<Beatmap
  sid=67105
  preview="DJ S3RL feat. Tamika - Rainbow Girl ([Te][Amo])"
  star=4.49
  difficulties=[1.86,2.45,3.30,4.49]
/>

<Beatmap
  sid=72051
  preview="Cascada - Bad Boy (Nightcore Mix) (-Bakari-)"
  star=5.20
  difficulties=[1.26,1.79,2.28,3.58,3.77,4.55,5.20,3.04,4.27]
/>

<Beatmap
  sid=79702
  preview="DJ YOSHITAKA - A Kiss for the FLOWER (Silynn)"
  star=6.94
  difficulties=[6.94]
  alias="花吻"
/>

<Beatmap
  sid=83560
  preview="DJ S3RL - T-T-Techno (feat. Jesskah) (nold_1702)"
  star=5.85
  difficulties=[1.92,2.47,3.84,4.65,5.47,5.85,2.58,3.54,4.43]
/>

<Beatmap
  sid=103862
  preview="Groove Coverage - Runaway (Nightcore Mix) (Asphyxia)"
  star=4.87
  difficulties=[1.99,2.29,3.43,4.87]
/>

<Beatmap
  sid=110954
  preview="Dope Arcade - Ascension (MitiS Remix) ([Luanny])"
  star=5.48
  difficulties=[5.48]
/>

<Beatmap
  sid=139525
  preview="Lite Show Magic (t+pazolite vs C-Show) - Crack Traxxxx (Fatfan Kolek)"
  star=7.30
  difficulties=[1.78,2.48,3.55,4.32,4.80,5.63,5.98,6.14,6.69,7.30,3.64,5.44,5.76,4.66,5.54]
/>

<Beatmap
  sid=153920
  preview="nora2r - B.B.K.K.B.K.K (rezoons)"
  star=5.33
  difficulties=[2.01,2.64,4.07,5.33]
/>

## 31-60

<Beatmap
  sid=202036
  preview="seiya-murai feat.ALT - Sumidagawa Karenka (Sakaue Nachi)"
  star=5.85
  difficulties=[1.97,2.28,3.61,4.82,5.32,5.85]
  alias="隅田川夏恋歌"
/>

<Beatmap
  sid=203734
  preview="JerryC - Canon Rock (momo1101)"
  star=6.17
  difficulties=[1.70,2.22,3.80,5.94,6.17,1.94,4.10,5.31,5.70,1.20,1.94,3.05,4.32,5.23]
  alias="摇滚卡农"
/>

<Beatmap
  sid=228955
  preview="Hatsuki Yura - Drivi'n greedy - Nhato Remix - (Kamio Misuzu)"
  star=5.27
  difficulties=[5.27]
/>

<Beatmap
  sid=238360
  preview="DJ Mikesh - Be Free (Nightcore Mix) (Kazuya)"
  star=5.11
  difficulties=[2.09,3.60,5.11]
/>

<Beatmap
  sid=252981
  preview="DJ Okawari - Flower Dance (Short Ver.) (-Hanayuki-)"
  star=6.85
  difficulties=[6.00,6.00,6.00,6.55,6.55,6.55,6.82,6.85]
  alias="花舞"
/>

<Beatmap
  sid=274035
  preview="DJ Fresh (feat. Ellie Goulding) - Flashlight (Radio Edit) (Frey)"
  star=5.10
  difficulties=[1.76,2.31,3.00,3.55,5.10]
/>

<Beatmap
  sid=287561
  preview="Sunny Wang - Wu Ye DJ (Hrs Club Remix) (blueloniess)"
  star=4.01
  difficulties=[4.01]
  alias="午夜 DJ"
/>

<Beatmap
  sid=290184
  preview="Kyary Pamyu Pamyu - Furisodation (DJ HKT's bootleg MIX) (Tarrasky)"
  star=6.08
  difficulties=[6.08]
/>

<Beatmap
  sid=297933
  preview="Yooh - Ice Angel (ktgster)"
  star=5.89
  difficulties=[5.89]
  alias="冰天使"
/>

<Beatmap
  sid=318425
  preview="Forte Escape - Ask to Wind (Taeyang)"
  star=6.27
  difficulties=[1.49,2.22,3.35,4.41,5.25,5.56,6.27]
/>

<Beatmap
  sid=324303
  preview="Zedd - Clarity (feat. Foxes) (kamome sano remix) (Broccoly)"
  star=5.86
  difficulties=[5.86]
/>

<Beatmap
  sid=324990
  preview="Apocalyptica - 2010 (feat. Dave Lombardo) (pishifat)"
  star=6.11
  difficulties=[2.05,2.53,3.70,4.71,5.33,5.78,6.11]
/>

<Beatmap
  sid=346213
  preview="Tatsh - reunion (Irreversible)"
  star=6.25
  difficulties=[1.18,1.97,2.01,2.42,3.39,4.09,4.44,4.59,5.86,6.25]
/>

<Beatmap
  sid=349445
  preview="Dancing Dolls - monochrome(Asterisk Makina Remix) (monstrata)"
  star=5.42
  difficulties=[5.42]
/>

<Beatmap
  sid=358119
  preview="Sarah Connor - Cold As Ice (PH Electro Remix) (Nightcore Mix) (Gologle)"
  star=6.37
  difficulties=[2.35,3.91,4.25,4.60,5.51,5.80,6.24,6.31,6.37]
/>

<Beatmap
  sid=359168
  preview="LeaF - Calamity Fortune (Frostings)"
  star=6.25
  difficulties=[1.81,2.30,3.52,4.85,6.25]
  alias="CF"
/>

<Beatmap
  sid=392682
  preview="DJ Noriken - Elektrick U-Phoria(Extended Mix) (sionKotori)"
  star=5.79
  difficulties=[5.79]
/>

<Beatmap
  sid=432822
  preview="NOMA - Brain Power Long Version (Skystar)"
  star=6.01
  difficulties=[6.01]
  alias="脑力"
/>

<Beatmap
  sid=476695
  preview="Aimer with chelly (EGOIST) - ninelie (REDSHiFT x Vesuvia remix) (ProfessionalBox)"
  star=5.96
  difficulties=[1.81,2.30,3.66,4.94,5.75,5.96]
/>

<Beatmap
  sid=483606
  preview="NOMA - LOUDER MACHINE (Skystar)"
  star=6.80
  difficulties=[1.92,2.31,3.74,4.61,5.46,5.82,5.87,5.92,5.95,6.02,6.03,6.32,6.80]
/>

<Beatmap
  sid=501394
  preview="DJ Noriken - Enjoy This Time (ft. yukacco) (DragonCreeper)"
  star=6.05
  difficulties=[6.05,3.77]
/>

<Beatmap
  sid=548417
  preview="Dj Matrix - Sul tetto del mondo (Anto)"
  star=4.07
  difficulties=[1.94,2.30,2.88,3.50,4.07]
/>

<Beatmap
  sid=624963
  preview="USAO - Extra Mode (Imouto koko)"
  star=5.73
  difficulties=[5.73]
/>

<Beatmap
  sid=762867
  preview="V.A. - streams for beginner (Firika)"
  star=5.67
  difficulties=[3.96,4.99,5.04,5.40,5.67]
/>

<Beatmap
  sid=814216
  preview="Hard In Tango - This Is My Dj (Anto)"
  star=4.01
  difficulties=[1.76,1.97,2.99,4.01]
/>

<Beatmap
  sid=830666
  preview="USAO - USAO ULTIMATE HYPER MEGA MIX (Nathan)"
  star=6.49
  difficulties=[5.55,6.49]
/>

<Beatmap
  sid=866938
  preview="ClariS - Colorful (tamame's apostate remix) (Bearizm)"
  star=6.96
  difficulties=[2.38,2.70,4.15,5.66,6.96]
/>

<Beatmap
  sid=890981
  preview="Adust Rain - psychology (eiri-)"
  star=7.88
  difficulties=[2.41,3.74,4.79,4.83,6.12,6.58,6.92,7.88]
/>

<Beatmap
  sid=893370
  preview="Various Artists - Gachimuchi Compilation (Daxxel)"
  star=5.32
  difficulties=[5.32]
/>

<Beatmap
  sid=953367
  preview="Maduk feat. Veela - Ghost Assassin (Hourglass Bonusmix) (_tranquility)"
  star=5.45
  difficulties=[2.35,3.49,4.77,5.18,5.45]
/>

## 61-90

<Beatmap
  sid=968216
  preview="Various Artists - rezoons' Jump Training (Remyria)"
  star=6.23
  difficulties=[4.07,4.34,4.82,5.13,5.40,6.23,6.23,6.23]
/>

<Beatmap
  sid=968222
  preview="Various Artists - rezoons' Jump Training #2 (Remyria)"
  star=6.73
  difficulties=[4.06,4.74,4.74,5.03,5.14,5.54,6.05,6.73]
/>

<Beatmap
  sid=1022717
  preview="DJ Sharpnel - Back to the gate (Firika)"
  star=6.57
  difficulties=[6.57]
/>

<Beatmap
  sid=1143951
  preview="Kawada Mami - Wings of Courage -Sora o Koete- (K@keru Dnb Remix) (Akitoshi)"
  star=6.38
  difficulties=[2.00,2.41,3.80,4.77,5.42,6.38]
/>

<Beatmap
  sid=1171250
  preview="RoughSketch - 666 (Lebros)"
  star=8.45
  difficulties=[4.86,5.51,6.76,8.45]
/>

<Beatmap
  sid=1185252
  preview="Mittsies - Vitality (t+pazolite Remix) (ReaL motion)"
  star=6.18
  difficulties=[2.53,4.07,5.12,6.18]
/>

<Beatmap
  sid=1185294
  preview="Hatsuki Yura - Drivi'n greedy - Nhato Remix - (Calvaria)"
  star=5.66
  difficulties=[5.04,5.66]
/>

<Beatmap
  sid=1203052
  preview="Chibanyan vs. Otogibara Era - GOMIKASU -Original Mix- (buhei)"
  star=6.16
  difficulties=[2.14,3.71,4.80,5.31,6.16]
/>

<Beatmap
  sid=1262302
  preview="EPICA - Universal Death Squad (Mao)"
  star=6.75
  difficulties=[6.75]
/>

<Beatmap
  sid=1267298
  preview="USAO - TAPIOCA (Realazy)"
  star=7.32
  difficulties=[7.32]
/>

<Beatmap
  sid=1314891
  preview="Idun Nicoline - Lost Without You (Boxplot Remix) (Log Off Now)"
  star=5.57
  difficulties=[4.87,5.57]
/>

<Beatmap
  sid=1333866
  preview="S3RL ft Kayliana - You Are Mine (-Darius)"
  star=7.04
  difficulties=[2.84,3.81,4.29,4.33,4.82,5.11,5.55,5.62,5.87,6.90,7.03,7.04]
/>

<Beatmap
  sid=1357624
  preview="sabi - true DJ MAG top ranker's song Zenpen (katagiri Remix) (Nathan)"
  star=7.62
  difficulties=[5.31,5.74,6.64,7.62]
/>

<Beatmap
  sid=1385245
  preview="sabi - true DJ MAG top ranker's song Zenpen (katagiri Remix) (too)"
  star=5.43
  difficulties=[5.43]
/>

<Beatmap
  sid=1434388
  preview="Hinkik - Time Leaper (ADoorNob)"
  star=5.81
  difficulties=[3.40,4.93,5.38,5.81]
/>

<Beatmap
  sid=1435435
  preview="DJ Sharpnel - Gate Openerz (CosmicWolf)"
  star=8.41
  difficulties=[6.12,6.42,6.73,7.03,7.35,7.70,8.05,8.41]
/>

<Beatmap
  sid=1453937
  preview="DJ SPIZDIL - Malo Tebya (SerniGrief)"
  star=6.31
  difficulties=[2.55,3.44,3.91,4.00,4.08,4.79,5.48,5.48,5.82,5.96,6.19,6.23,6.31]
/>

<Beatmap
  sid=1501157
  preview="DJ Genericname - Dango Dango Daikazoku (Drum and Bass Remix) (NekuMagetsu)"
  star=4.92
  difficulties=[1.96,2.17,3.44,4.39,4.92]
  alias="团子大家族"
/>

<Beatmap
  sid=1581157
  preview="OnlyRight - Mermaid Girl [Gachi Remix] (Yooh)"
  star=6.33
  difficulties=[2.27,3.53,4.81,5.68,6.33]
  alias="美人鱼女孩"
/>

<Beatmap
  sid=1629782
  preview="Groove Coverage - Holy Virgin (Nightcore Mix) (LeomineXD)"
  star=4.78
  difficulties=[2.35,3.30,4.78]
/>

<Beatmap
  sid=1770758
  preview="Caramell - Caramelldansen (Ryu* Remix) (AJT)"
  star=6.45
  difficulties=[5.39,6.45]
/>

<Beatmap
  sid=1777388
  preview="Akira - I Dream (Radio Mix) (Nightcore Mix) (Gero)"
  star=6.08
  difficulties=[1.87,2.30,3.41,4.77,5.30,6.08]
/>

<Beatmap
  sid=1790704
  preview="TAMAONSEN - Sonna Yume o Mita no ~lonely dreaming girl~ (Nightcore Mix) (Aranel)"
  star=4.28
  difficulties=[1.47,2.57,3.32,4.28]
/>

<Beatmap
  sid=1790824
  preview="YABUJIN - .*302? ionwan2go*. (Aistre)"
  star=5.55
  difficulties=[1.45,2.08,3.06,3.90,4.43,4.81,5.55]
/>

<Beatmap
  sid=1808911
  preview="Jea - Hyper Highspeed Star (Reywateil)"
  star=6.74
  difficulties=[3.90,5.05,6.74]
/>

<Beatmap
  sid=1869119
  preview="Cascada - A Never Ending Dream (Nightcore Mix) (StripedGoose)"
  star=5.04
  difficulties=[2.04,2.54,3.53,5.04]
/>

<Beatmap
  sid=1886047
  preview="DJ Mikesh - Be Free (Dancecore Mix) (Nightcore Mix) (Andrea)"
  star=5.38
  difficulties=[2.51,3.43,4.93,5.38]
/>

<Beatmap
  sid=1890007
  preview="B-Complex - Beautiful Lies VIP (Zer0-)"
  star=5.71
  difficulties=[5.71]
/>

<Beatmap
  sid=1949720
  preview="Groove Coverage - Let It Be (Nightcore Mix) (StripedGoose)"
  star=5.00
  difficulties=[2.06,2.73,3.58,5.00]
/>

<Beatmap
  sid=1999363
  preview="Batashi - Smag Slow (Bluenation)"
  star=6.10
  difficulties=[4.90,5.98,6.10]
/>

## 91-120

<Beatmap
  sid=2021678
  preview="Kurokotei - qu'ils mangent des puchi pastel (Aerousea)"
  star=7.53
  difficulties=[2.37,3.72,4.97,6.22,6.79,7.20,7.53]
/>

<Beatmap
  sid=2026486
  preview="VaVa - Wo Xiang Dui Ni Shuo Baby (Yu vs. CTM Radio Mix) (Nightcore Mix) (__Ag)"
  star=6.39
  difficulties=[2.34,3.71,4.94,5.42,5.92,6.39]
  alias="我想对你说 Baby"
/>

<Beatmap
  sid=2067186
  preview="Sayuri - Hana no Tou (nenpulse bootleg remix) (Kanui)"
  star=5.68
  difficulties=[5.68]
/>

<Beatmap
  sid=2076193
  preview="DJ SHARPNEL - BLUE ARMY (AdeAAa)"
  star=6.82
  difficulties=[5.90,6.82]
  alias="蓝军"
/>

<Beatmap
  sid=2095486
  preview="Ama no Murakumo no Tsurugi - Close the World feat. a*ru (allein)"
  star=6.44
  difficulties=[2.63,3.88,4.86,6.05,6.44]
/>

<Beatmap
  sid=2102873
  preview="DJ-Technetium - Poison Body ~ Forsaken Doll (MAKINA MIX) (Sanch-KK)"
  star=6.86
  difficulties=[6.86]
/>

<Beatmap
  sid=2129063
  preview="MakSim - Ne otdam (Rikki & Nikki Remix) (Cut Ver.) (Mizujin)"
  star=5.39
  difficulties=[2.65,3.69,4.89,5.39]
/>

<Beatmap
  sid=2132638
  preview="t.A.T.u. - Nas Ne Dogonyat (DJ SPIZDIL Remix) (Cut Ver.) (Mizujin)"
  star=4.61
  difficulties=[2.06,3.16,4.61]
/>

<Beatmap
  sid=2139018
  preview="HO-KAGO TEA TIME - Tenshi ni Fureta yo! (Asterisk DnB Remix) (sanairrt)"
  star=6.15
  difficulties=[1.97,2.39,3.71,5.00,5.53,6.15]
  alias="触碰天使"
/>

<Beatmap
  sid=2182334
  preview="ANGUISH, POCHTISCHASTLIV & ily - Glaza (Sped Up Ver.) (Flade)"
  star=6.56
  difficulties=[2.73,3.57,4.92,5.29,6.37,6.56,1.63,2.62,3.53,4.82,5.90,1.63,2.27,2.68,3.11,3.52,3.92,4.55,5.19,5.45]
/>

<Beatmap
  sid=2191580
  preview="SMiLE.dk - Koko Soko (AKIBA KOUBOU Eurobeat Remix) (HyperPigeon)"
  star=5.17
  difficulties=[2.19,3.42,4.33,5.17]
  alias="KKSK"
/>

<Beatmap
  sid=2197830
  preview="Slax - Loli Bomb (Cut Ver.) (smolship)"
  star=6.36
  difficulties=[2.54,3.06,3.81,5.03,5.67,6.36]
  alias="萝莉炸弹"
/>

<Beatmap
  sid=2197905
  preview="Aaron Smith feat. Luvli - Dancin (Remix by KRONO) (Nightcore Mix) (Delette)"
  star=5.01
  difficulties=[2.30,3.69,4.31,5.01]
/>

<Beatmap
  sid=2199779
  preview="Mothtek - Meltdown (Remix 2022) (Nozuchi)"
  star=6.08
  difficulties=[6.08]
/>

<Beatmap
  sid=2203280
  preview="Fantasy Project feat. NDA - Dam Dadi Doo (Nightcore Extended Mix) (Okoayu)"
  star=5.16
  difficulties=[2.64,3.84,4.60,5.16]
/>

<Beatmap
  sid=2225109
  preview="senya - Koakuma Ringo (EUROBEAT Remix) (Okoayu)"
  star=6.38
  difficulties=[3.68,5.15,6.38]
/>

<Beatmap
  sid=2241273
  preview="Guo Gao Ming - Ye Mo Tuo (DJ A Zhuo Ver.) (Cut Ver.) (Yorita Yoshino)"
  star=4.54
  difficulties=[2.09,3.22,4.54]
  alias="野摩托"
/>

<Beatmap
  sid=2260829
  preview="Tsukasa (Arte Refact) - Fragrance (XinBai-HW Remix) (MeAqua tete)"
  star=7.13
  difficulties=[2.44,3.84,4.68,5.73,7.08,7.13]
  alias="电棍香水"
/>

<Beatmap
  sid=2280283
  preview="DJ SHARPNEL - 20031023 (Cut Ver.) (Kouri Cube)"
  star=5.12
  difficulties=[2.50,3.32,4.37,5.01,5.12]
/>

<Beatmap
  sid=2280350
  preview="Calvin Harris feat. Ellie Goulding - Outside (Whippa Hardstyle Remix) (STaLeRGooD)"
  star=5.36
  difficulties=[2.41,3.24,4.27,5.11,5.36]
/>

<Beatmap
  sid=2294177
  preview="Victorious Cast - Take a Hint feat. Victoria Justice & Elizabeth Gillies (Nightcore & Cut Ver.) (Aakki)"
  star=5.06
  difficulties=[2.28,3.25,4.39,4.58,4.77,4.94,5.06]
/>

<Beatmap
  sid=2295884
  preview="Porcelain Black - Pretty Little Psycho (Nightcore & Cut Ver.) (Fufla)"
  star=4.71
  difficulties=[2.06,3.26,4.08,4.35,4.71]
/>

<Beatmap
  sid=2338699
  preview="Code Red - 18 (Nightcore & Cut Russian Ver.) (Tarrasky)"
  star=4.71
  difficulties=[2.29,3.38,4.71]
/>

<Beatmap
  sid=2342474
  preview="DJ SHARPNEL - CYBER INDUCTANCE (mithew)"
  star=6.47
  difficulties=[4.66,5.65,6.47]
/>

<Beatmap
  sid=2347113
  preview="Various Artists - Songs Compilation VI (Sotarks)"
  star=7.44
  difficulties=[7.21,7.44]
/>

<Beatmap
  sid=2352698
  preview="ONE OK ROCK - American Girls (Juztan Remix) (Tylerderp)"
  star=8.03
  difficulties=[2.31,2.71,3.62,4.66,5.31,5.80,6.08,6.40,6.66,7.26,7.83,8.03]
/>

<Beatmap
  sid=2365404
  preview="DJ Kicken vs. MC-Q - Zombie (Candy Crew Remix) (Cut Ver.) (-Ady)"
  star=3.38
  difficulties=[2.65,3.38]
/>

## 121-122

<Beatmap
  sid=2366163
  preview="Jan Wayne vs. Raindropz! - Numb (RainDropz! Edit) (Nightcore Mix) (Leomine)"
  star=4.70
  difficulties=[2.35,3.60,4.70]
/>

<Beatmap
  sid=2378023
  preview="Ying Jiang - Jin Ye Xing Guang Shan Shan (Dong Official Remix) (App)"
  star=4.20
  difficulties=[1.76,3.16,4.20]
  alias="今夜星光闪闪"
/>`,Wf=Object.freeze(Object.defineProperty({__proto__:null,default:Gf},Symbol.toStringTag,{value:"Module"})),$f=`---
date: 2022-05-06
---


# Kagami 的连打推荐 ver3.0

<Player 
  id=10026750
  name="Hiiragi Kagami"
  country=25
  global=647
  from="CN"
  accuracy=99.77
  level=100
  progress=54
  performance=10943
/>

本 list 建议在电脑上阅读

“连打”的粗浅定义：因速度较快单指难以完成的排列形式；速度阈值为 osu 的四分拍（1/4）/乐理的十六分音符的情况下大于等于 130bpm，且填充满。

该连打推荐面向人群为新人群主群及进阶群成员。同时，该推荐较为倾向于大众化，如果希望进一步发展请移步 [Jack 王推荐](./jack_wang_.md)。

玩家的手速及其余综合能力存在很大分化。读者应根据自身实际情况以及图的 bpm 合理选择并练习。

一些有大量难度的图不会列出星数相近的所有难度。（点名 Oriental Blossom 与 Tokyo）

## 阶段介绍

阶段1、阶段2：均仅用于让萌新了解连打这一机制同时熟悉这类排列的样子，图很少，可从正文的图中选取低难度来自行补充。pp 段约对应 500-1200 pp。注：这一阶段小萌新主要任务仍然是刷 pp，力图早日能够打四星。

阶段3：osu 从四星开始才算正式起步，连打也是。进入正文阶段，该阶段主要是练习三连五连的短连打，密度低，移动要求低。pp 段约对应 1200-2000pp。

阶段4：在这个分段，跳图型玩家和连打型玩家已经开始有区分了。该阶段初步接触了长连打带来的 flow（钝角移动）以及耐力，稳定性等的概念，同时连打的排列也变得更丰富多样了。pp 段约对应 2000-2800pp。

阶段5：连打图的类型逐渐完成了分化：bpm 的高低；分出了需求flow与否的长连打；密集短连打；依托大量滑条，有一定跳图要素，移动要求很高的连续多组连打（个人粗浅分类，约对应 owc 标准图池中 nomod2-6 号位）等。对 pp+ 中flow spd sta三项逐渐开始落实。pp 段约对应 2800-4500pp。

## 颜色

- 🟢：绿色，更推荐去玩的图
- 🔴：红色，BOSS 图，一般较难，在某种方面有较强偏向。
- 🟣：紫色，EX (extreme) 图，满足 BOSS 图特性同时一般略超过本阶段难度，且一般较长，以对应赛图中的tierbreaker。

## 阶段

1 阶段：7 张，2 阶段：9 张，3 阶段：35 张，4 阶段：119 张，5 阶段：187 张

### 1

<Beatmap
  bid=920811
  sid=424743
  preview="dj TAKA feat.AiMEE - True Blue (ZZHBOY) [Hard]"
  star=3.36
  max=407
  color="#eee"
/>

全曲散布着一些三连。

<Beatmap
  bid=752313
  sid=339708
  preview="Rameses B - Transcend (Milan-) [Hard]"
  star=3.26
  max=524
  color="#eee"
/>

后半段高潮部分有一部分三连。注意滑条移动。

<Beatmap
  bid=794710
  sid=340903
  preview="Gentle Stick X M2U - Ineffabilis (buhei) [Regraz's Hard]"
  star=3.46
  max=761
  alias="无可言喻"
  color="#eee"
/>

全曲有二连接滑条，也有滑条单点滑条这种三连，对于读图是种挑战，但只需要知道这是三连，就会轻松一些。

<Beatmap
  bid=325896
  sid=102763
  preview="Diana Boncheva - Purple Passion (lkx_Shore) [Hard]"
  star=3.34
  max=1008
  color="#eee"
/>

全曲仍以三连为主，但折返滑条和歌曲长度都对新人有杀伤力。

<Beatmap
  bid=647607
  sid=284847
  preview="Memme - Dajiahao (Erhu ver.) (Kamio Misuzu) [Hard]"
  star=3.50
  max=684
  alias="大家好"
  color="#eee"
/>

三连的出现频率略有增加，注意习惯。

<Beatmap
  bid=744550
  sid=334469
  preview="ALiCE'S EMOTiON - Dark Flight Dreamer (Natsu) [Hard]"
  star=3.48
  max=1038
  alias="魔理沙"
  color="#c00"
/>

三分钟的长度和较高的bpm对新人是个挑战。

<Beatmap
  bid=690498
  sid=291495
  preview="orangentle - HAELEQUIN (Gamu) [bbHard]"
  star=3.25
  max=647
  color="#c00"
/>

三分钟的长度和较高的bpm对新人是个挑战。

### 2

<Beatmap
  bid=589971
  sid=257793
  preview="Yuyoyuppe - AiAe (Fort) [Hyper]"
  star=3.61
  max=1144
  color="#eee"
/>

ar8 是个门槛，同样后半段的五连也算个门槛，要慢慢习惯。

<Beatmap
  bid=947499
  sid=439600
  preview="Koizumi Hanayo(CV.Kubo Yurika) - Kodoku na Heaven (Lily Bread) [Hyper]"
  star=3.67
  max=695
  color="#eee"
  alias="孤独天堂"
/>

慢速连打，且连打的个数开始不止5个。

<Beatmap
  bid=557360
  sid=205022
  preview="Ryu* - Sakura Mirage (Priti) [ADVANCED]"
  star=3.70
  max=494
  color="#eee"
/>

这个图的难点在于比较奇怪的节奏，注意读图。

<Beatmap
  bid=358249
  sid=144158
  preview="BlackYooh vs. siromaru - BLACK or WHITE? (Fast) [ADVANCED+]"
  star=3.78
  max=579
  color="#eee"
  alias="黑与白"
/>

会读 ar8 就会很好打。

<Beatmap
  bid=387164
  sid=149749
  preview="Memme - China Dress (iyasine) [Kloyd's Hyper]"
  star=3.98
  max=768
  color="#eee"
  alias="中国裙子"
/>

存在一些五连，节奏较为紧凑，可以用作练习

<Beatmap
  bid=847315
  sid=128931
  preview="Feint - Tower Of Heaven (You Are Slaves) (eLy) [Hyper]"
  star=3.85
  max=863
  color="#eee"
  alias="天堂塔"
/>

万恶之源天堂塔。几乎全为原地三连五连，可以作为验证实力的图。

<Beatmap
  bid=563828
  sid=224164
  preview="Morimori Atsushi - PUPA (Cherry Blossom) [Hyper]"
  star=4.08
  max=801
  color="#c00"
  alias="蝴蝶"
/>

较为复杂的排列和高bpm都是难点。

<Beatmap
  bid=716695
  sid=320510
  preview="Mizuki Nana - No Limit (Taeyang) [eINess' Insane]"
  star=4.23
  max=515
  color="#c00"
/>

存在长达八个的连打，同时排列较为复杂，较高的四维也是一个难题。

<Beatmap
  bid=1481150
  sid=697087
  preview="Y&Co. - Daisuke (kwk) [Hyper]"
  star=3.71
  max=609
  color="#c00"
/>

存在不少的二连，偶数连打第一次出现。较难，仅作了解。

### 3

<Beatmap
  bid=1889829
  sid=905119
  preview="YUC'e - Chemical Cookie (Yusomi) [Hyper]"
  star=4.14
  max=617
  color="#eee"
  alias="化学曲奇"
/>

由这个图开始引入连打图可能出现的常见一般配置： 利用较多较快的滑条填充节奏（多见于低星）与较多的连续单点（但相比跳图移动要求可能更低），以及连打部分。注意读图。

<Beatmap
  bid=663881
  sid=257793
  preview="Yuyoyuppe - AiAe (Fort) [Insane]"
  star=4.34
  max=1386
  color="#0c0"
/>

物件密度较上难度明显增加，注意耐力把控。

<Beatmap
  bid=2116610
  sid=1011055
  preview="HyuN - Tokyo's Starlight (Heilia) [Insane]"
  star=4.31
  max=725
  color="#0c0"
  alias="东京星光"
/>

全图五连较多，难点在较低的 bpm 与较高的 cs

<Beatmap
  bid=1260122
  sid=578755
  preview="Getty vs. DJ DiA - Grayed Out -Antifront- (Realazy) [Jager's Light Insane]"
  star=4.20
  max=608
  color="#eee"
/>

存在不以滑条结尾的五连，尽量避免出现忘了击打最后一个 note 的情况。

<Beatmap
  bid=739212
  sid=242462
  preview="xi - Wish upon Twin Stars (Chaoslitz) [HYPER]"
  star=4.45
  max=667
  color="#eee"
/>

不算很难，但得能读 ar8.5 和爆发 200bpm 的手速，最长也就五连，不用担心手速不足。

<Beatmap
  bid=933635
  sid=405524
  preview="D.J.Nero - Joker (09kami) [Hikari's Light Insane]"
  star=4.28
  max=707
  color="#eee"
/>

连打部分不算很难，进一步熟悉连打图的排列类型（滑条处理）。

<Beatmap
  bid=336228
  sid=115193
  preview="sakuzyo - AXION (Flower) [Hyper]"
  star=4.34
  max=779
  color="#0c0"
/>

有略长于五个的连打，且需要一定的 aim 能力处理滑条。

<Beatmap
  bid=911517
  sid=417408
  preview="M2U & NICODE - Lune (Taeyang) [Insane]"
  star=4.40
  max=707
  color="#0c0"
/>

低速短连打，注意手控即可。

<Beatmap
  bid=608765
  sid=261911
  preview="MitiS & MaHi - Blu (Speed Up Ver.) (Ashasaki) [Asagi's Insane]"
  star=4.44
  max=625
  color="#eee"
/>

注意滑条的处理，连打部分不难。

<Beatmap
  bid=804387
  sid=362316
  preview="EYEMEDIA - HOLY KNIGHT (snowsign7) [Insane]"
  star=4.46
  max=708
  color="#eee"
/>

低速连打，同样对手控与移动有要求。

<Beatmap
  bid=554519
  sid=158023
  preview="UNDEAD CORPORATION - Everything will freeze (Ekoro) [Insane]"
  star=4.23
  max=1201
  color="#eee"
  alias="冻僵"
/>

这个图不存在超五连的连打，可用于练习短爆发。

<Beatmap
  bid=677872
  sid=292301
  preview="xi - Blue Zenith (Asphyxia) [toybot's Insane]"
  star=4.42
  max=1503
  color="#0c0"
  alias="蓝极光、蓝顶"
/>

万恶之源蓝极光。高 bpm 和四分钟的长度是个挑战。

<Beatmap
  bid=1269801
  sid=542868
  preview="ATSUMI UEDA - Harmonia (Starfy) [Insane]"
  star=4.39
  max=551
  color="#eee"
/>

常规图，可以用于检验水平（刷 pp

<Beatmap
  bid=1403207
  sid=657498
  preview="ak+q - Vexaria (Pentori) [_83's Light Insane]"
  star=4.56
  max=601
  color="#eee"
/>

连打部分不难，主要注意单点与滑条的移动与较高的od。

<Beatmap
  bid=1187922
  sid=508968
  preview="Dima Elmo - To Adventures (xChorse) [Insane]"
  star=4.46
  max=544
  color="#eee"
/>

该图五连很多，同时是 od8，注意把控 acc。

<Beatmap
  bid=1017602
  sid=357777
  preview="NOMA - Brain Power (Jacob) [Exote's EXHAUST]"
  star=4.45
  max=743
  color="#0c0"
  alias="脑力"
/>

耿直无比的排列，真实入门图，也是 pp 图。

<Beatmap
  bid=645355
  sid=256467
  preview="Memme - Chinese Restaurant (M o k o r i) [Hyper]"
  star=4.62
  max=660
  color="#0c0"
  alias="中国餐馆"
/>

mp5 第一轮 NM 图，注意移动，排列种类较为丰富。

<Beatmap
  bid=827019
  sid=362989
  preview="Street - Sakura Fubuki (Cherry Blossom) [Another]"
  star=4.56
  max=574
  color="#0c0"
  alias="樱吹雪"
/>

樱吹雪。排列耿直，密度适中，适合练习。

<Beatmap
  bid=766602
  sid=333139
  preview="DJ Ozawa - Tokyo (Innovaderz Remix) (Asphyxia) [Aka's Insane]"
  star=4.57
  max=723
  color="#eee"
  alias="东京"
/>

较为综合，需要注意读图。

<Beatmap
  bid=1780782
  sid=818360
  preview="Thaehan - Sunrise (Realazy) [Pachiru's Insane]"
  star=4.70
  max=763
  color="#0c0"
/>

排列耿直简单但 bpm 较高，处理跳与连打都需要一定手速。

<Beatmap
  bid=1023450
  sid=436177
  preview="yuikonnu - Kakushigoto (AtHeoN) [Laura's Light Insane]"
  star=4.64
  max=1303
  color="#eee"
  alias="隐瞒之事"
/>

难度平均，时而有三五连，属于 pp 图但长度较长。

<Beatmap
  bid=785982
  sid=352570
  preview="beatMARIO - Night of Knights (alacat) [N a s y a's Insane]"
  star=4.62
  max=1040
  color="#0c0"
  alias="夜骑"
/>

耿直的原地三连五连，但密度大而时间长，考验稳定性，真实入门图。有条件可以凹这首歌的准度，越高越好。

<Beatmap
  bid=446612
  sid=186318
  preview="Warak - REANIMATE (iyasine) [N a s y a's Another]"
  star=4.52
  max=716
  color="#0c0"
/>

常规图，基本只有三连和五连。

<Beatmap
  bid=1151644
  sid=519054
  preview="Thaehan - Doki-Doki (Mr HeliX) [Complexious]"
  star=4.66
  max=845
  color="#0c0"
/>

以短连打为主但密度稍高，且需注意滑条处理。

<Beatmap
  bid=977161
  sid=453467
  preview="uma - take a step forward (Regraz) [Karen's EXHAUST]"
  star=4.60
  max=624
  color="#0c0"
/>

连打方面是入门级别，但需要一定的 jump 能力。

<Beatmap
  bid=751747
  sid=336099
  preview="LeaF - Wizdomiot (Asahina Momoko) [Hyper]"
  star=4.71
  max=904
  color="#eee"
/>

单戳较密集，时而插入一个三连，偶有五连，用于练习较大单戳压力下的爆发

<Beatmap
  bid=763294
  sid=185250
  preview="ALiCE'S EMOTiON - Dark Flight Dreamer (Sakaue Nachi) [Twaoi's Insane]"
  star=4.87
  max=1028
  color="#0c0"
  alias="魔理沙"
/>

较为耿直的原地连打较多，od 也不高。pp 图

<Beatmap
  bid=1691692
  sid=775846
  preview="An - Catanoph (Ryuusei Aika) [Crystar's Insane]"
  star=4.89
  max=1322
  color="#eee"
/>

歌曲长，但连打几乎全是三连五连的打桩。

<Beatmap
  bid=136400
  sid=43466
  preview="DJ Genericname - Dear You (Rue) [Dear Rue]"
  star=4.82
  max=602
  color="#0c0"
/>

耿直的排列，仅有的小长串连打数也不多，真实入门图。但是移动要求相对较高，需要一定 jump 能力。

<Beatmap
  bid=840777
  sid=327825
  preview="Y&Co. feat. Karin - Sweet Rain (Yauxo) [apple's Insane]"
  star=4.40
  max=727
  color="#c00"
/>

连打类型丰富且密集连贯，对综合实力具有要求。

<Beatmap
  bid=759888
  sid=340903
  preview="Gentle Stick X M2U - Ineffabilis (buhei) [Yoru's Insane]"
  star=4.51
  max=1014
  color="#c00"
  alias="无可言喻"
/>

密度较高，较低的 bpm，偶数连，十连左右的小串都是难点。

<Beatmap
  bid=231139
  sid=83754
  preview="Uchida Aya & Kubo Yurika - Kokuhaku Biyori, desu! (Rare) [Insane]"
  star=4.72
  max=1078
  color="#c00"
  alias="告白日和"
/>

短连打较多，同时有一些梗排列，od8 导致 acc 并不好打

<Beatmap
  bid=830360
  sid=297969
  preview="yuikonnu - caramel heaven (sukiNathan) [Insane]"
  star=4.70
  max=1302
  color="#c00"
  alias="焦糖天堂"
/>

焦糖天堂，很好听的歌。切指频率高，物件密度大，bpm也高达194，对新人来说一不注意容易炸。

<Beatmap
  bid=1554528
  sid=725159
  preview="SYNC.ART'S - Mienai kara, Mieru Mono. (pyrowar56) [Lunatic]"
  star=4.63
  color="#c00"
  max=1439
/>

bpm 较低但连打部分不少，有一些长于五连的连打，移动要求不高。

<Beatmap
  bid=1124841
  sid=448919
  preview="xi - Halcyon -Long Version- (Natsu) [Human]"
  star=4.52
  max=2040
  color="#92e"
  alias="翡翠鸡"
/>

xi 姥爷的名作之一。仍以三五连为主，但高 bpm 和五分钟的长度是相当困难的

*编者注：BOF 2010 冠军曲*

### 4

<Beatmap
  bid=1478254
  sid=581787
  preview="Eleharmonica remixed by kors k - Der Wald (kors k Remix) (Cheesecake) [mithew's Light Insane]"
  star=4.33
  max=868
  color="#eee"
/>

引入了一种长串的常规排列：滑条尾之后间隔仅四分拍（一般连打两个 note 之间的间隔）后开始下一串连打。对手控及移动开始具有一定要求。

<Beatmap
  bid=1486576
  sid=697087
  preview="Y&Co. - Daisuke (kwk) [Saturnalize's Another]"
  star=4.44
  max=780
  color="#c00"
/>

bpm 低而连打不是很短（具有九连），同时有的连打之间仅有短滑条间隔，需要较长稳定的手控。

<Beatmap
  bid=2015158
  sid=960743
  preview="kors k - Playing With Fire (deetz) [Another]"
  star=4.55
  max=617
  color="#eee"
  alias="玩火"
/>

玩火短版，排列较为复杂，有若干二连，需要注意读图及短串的移动。

<Beatmap
  bid=1592521
  sid=707164
  preview="Negentropy (a.k.a. Team Grimoire) - ouroVoros (Suzuki_1112) [Dynamix's Insane]"
  star=4.48
  max=833
  color="#eee"
/>

密集的滑条 + 连打配合排列加上 od8 对综合实力是巨大的考验。

<Beatmap
  bid=1644001
  sid=782989
  preview="LeaF - Alice in Misanthrope -Ensei Alice- (eiri-) [Reform's Light Insane]"
  star=4.48
  max=901
  color="#eee"
  alias="厌世爱丽丝"
/>

前半程的二连与后半程的密集五连是主要难点，同时较大密度下的较低 ar 增加了读图压力。

<Beatmap
  bid=1593699
  sid=671056
  preview="Sakuzyo - Amenohoakari (Firis Mistlud) [Minorsonek's Insane]"
  star=4.51
  max=812
  color="#0c0"
  alias="天火明命"
/>

天火明命，非常好听。bpm 较低而 od 较高，出现了滑条尾与四分拍之后的连打空间上不连续的排列，需要着重注意读图移动及手控。

<Beatmap
  bid=1242788
  sid=586889
  preview="Eisyo-kobu - Oriental Blossom (Crystal) [hm's Insane]"
  star=4.68
  max=715
  color="#0c0"
/>

排列非常好看（dutumafan），切指方面注意 od8，以及一定的移动要求。

<Beatmap
  bid=909551
  sid=403427
  preview="xi - Akasha (Atsuro) [FCL's Hyper]"
  star=4.57
  max=1587
  color="#0c0"
/>

xi 姥爷名曲之一。排列仍以短切指为主，歌曲长度四分钟，注意耐力把控。

<Beatmap
  bid=961757
  sid=446332
  preview="Rameses B - Neon Rainbow (ft. Anna Yvette) (Aia) [Milan-'s Insane]"
  star=4.70
  max=727
  color="#eee"
  alias="霓彩"
/>

注意 note 滑条 note 这一类连打及少许九连即可，od8 较为考验acc。

<Beatmap
  bid=1408170
  sid=665232
  preview="Denkishiki Karen Ongaku Shuudan - Natsu no Owari (Soleily Remix) (Lasse) [Insane]"
  star=4.63
  max=969
  color="#eee"
/>

拥有相当复杂的排列与滑条，需要比较强的综合能力。

<Beatmap
  bid=1936309
  sid=838536
  preview="sasakure.UK - Atropos (Cellina) [Collab Insane]"
  star=4.59
  max=733
  color="#eee"
/>

曲风鲜明的一首歌，需要注意较长的连打和读图。

<Beatmap
  bid=1289398
  sid=571835
  preview="TERRASPEX - AMAZING BREAK (Monstrata) [INSANE]"
  star=4.73
  max=1719
  color="#0c0"
/>

单纯连打不难，但移动与读图难度较高，排列相当复杂，滑条多且较快，连打组成形式较多。

<Beatmap
  bid=1487640
  sid=700421
  preview="Hommarju - Rock It (toybot) [Underdogs' Insane]"
  star=4.68
  max=752
  color="#eee"
/>

bpm 和连打个数中规中矩，但有较高的移动要求，滑条也不简单。

<Beatmap
  bid=321946
  sid=87188
  preview="Memme - NEW Astronomas (Charles445) [Color's Another]"
  star=4.64
  max=776
  color="#eee"
/>

低 bpm 和 10 个 note 左右且密度较大的串以及偶数对低速手控差的玩家极不友好，需要练习。

<Beatmap
  bid=663373
  sid=292644
  preview="ZUN remixed by LeaF - Resurrection Spell (Muya) [Hyper]"
  star=4.58
  max=858
  color="#0c0"
/>

密集短连打的雏形，对手控和耐力有较高的要求。

<Beatmap
  bid=1319345
  sid=557039
  preview="uma vs. Morimori Atsushi - Re:End of a Dream (Battle) [Hobbes2's Another]"
  star=4.69
  max=898
  color="#eee"
  alias="终梦"
/>

排列较为复杂，bpm 也很高，较难。

<Beatmap
  bid=954703
  sid=257165
  preview="Amane - TWEEKER (TicClick) [Mikii's Insane]"
  star=4.81
  max=1242
  color="#0c0"
/>

万恶之源之一，曲名意为弹弓。连打种类丰富，排列不算很难。

<Beatmap
  bid=823197
  sid=375073
  preview="nanobii - rainbow road (Natsu) [Insane]"
  star=4.54
  max=822
  color="#eee"
  alias="彩虹路"
/>

拥有较长的连打和较高的移动要求，注意 ar 较低。

<Beatmap
  bid=1045832
  sid=440997
  preview="LeaF - Evanescent (Anxient) [Insane]"
  star=4.60
  max=690
  color="#eee"
/>

较高的 bpm 和复杂的排列，注意读图。

<Beatmap
  bid=1607377
  sid=761244
  preview="ak+q - Ignotus (Ryuusei Aika) [Yugu's FUTURE]"
  star=4.72
  max=678
  color="#eee"
/>

连打难度中规中矩，更大的难点仍是滑条的读图和移动，为以后类似图打基础。

<Beatmap
  bid=847313
  sid=128931
  preview="Feint - Tower Of Heaven (You Are Slaves) (eLy) [Another]"
  star=4.60
  max=1023
  color="#0c0"
  alias="天堂塔"
/>

天堂塔最常见的难度，该图具有五连与九连短串，是不可多得的好图（Best map of 2016）

<Beatmap
  bid=1578253
  sid=679918
  preview="wa. - Black Lotus (Realazy) [Lasse's Light Insane]"
  star=4.52
  max=743
  color="#eee"
/>

注意三分拍的长连打。

<Beatmap
  bid=1749900
  sid=822032
  preview="team Umifure - DEEP BLUE TOWN e Oide yo (Hanazawa Kana) [Firika's Insane]"
  star=4.76
  max=1062
  color="#eee"
/>

较低的 ar 和 bpm 以及 od8 导致这个图 acc 相当不好打。

<Beatmap
  bid=2423983
  sid=1151330
  preview="Memme - Xiao Long Bao (Gamu) [Another]"
  star=4.70
  max=798
  color="#0c0"
  alias="小笼包"
/>

密度相当大的连续三连，但毕竟属于简单机制，应尝试打高 acc。

<Beatmap
  bid=2358639
  sid=1050635
  preview="lapix - Nexta (Realazy) [coco's EXHAUST]"
  star=4.71
  max=742
  color="#eee"
/>

具有一些较多个数的连打，但移动要求很低，注意手控即可。

<Beatmap
  bid=2191553
  sid=1044511
  preview="A.SAKA - Yosakura Fubuki (Beomsan) [Insane]"
  star=4.91
  max=912
  color="#eee"
  alias="夜樱吹雪"
/>

滑条仍占据很大一部分难度，连打主要依托于滑条的短连打。

<Beatmap
  bid=432841
  sid=140691
  preview="Cres - End Time (Kyshiro) [Insane]"
  star=4.76
  max=754
  color="#eee"
/>

该图具有很多九连小串，同时也存在偶数连。

<Beatmap
  bid=1583545
  sid=727049
  preview="Getty vs. DJ DiA - DropZ-Line- (Realazy) [Dash's Insane]"
  star=4.72
  max=792
  color="#0c0"
/>

排列简单明晰，滑条几乎为走路段，仅需注意 200bpm 的短爆发。

<Beatmap
  bid=965494
  sid=399151
  preview="Camellia - crystallized (Smoothie World) [wa's Insane]"
  star=4.80
  max=1352
  color="#0c0"
/>

四分钟的长度，注意耐力分配，不要打快或者移动过快。

<Beatmap
  bid=964065
  sid=442581
  preview="Memme - Cherry Blossom (Priti) [Karen's Insane]"
  star=4.83
  max=806
  color="#eee"
/>

连打难度不是很大，主要难度在于移动和读图。

<Beatmap
  bid=1895932
  sid=893573
  preview="kozato - Izayoi Sakura (Gust) [Firika's Insane]"
  star=4.93
  max=961
  color="#eee"
  alias="十六夜樱"
/>

十六夜樱，排列较密，且较低的 cs 与 ar 非常容易导致抢拍，要注意。

<Beatmap
  bid=414709
  sid=171421
  preview="M2U - Quo Vadis (buhei) [Insane]"
  star=4.86
  max=917
  color="#eee"
  alias="君往何处"
/>

具有复杂的排列和低bpm，注意移动。

<Beatmap
  bid=163054
  sid=53519
  preview="Shihori - Magic Girl !! (Frostmourne) [Lunatic]"
  star=4.76
  max=1111
  color="#0c0"
  alias="魔法少女"
/>

osu 经典老图，bpm 稍低，打稍多 note 的连打时控制住手速。

<Beatmap
  bid=568565
  sid=244799
  preview="Memme - Chinese Restaurant (Muya) [Hyper]"
  star=4.76
  max=729
  color="#eee"
  alias="中国餐馆"
/>

muya 的图排列一向呆板但困难，连打密度相当高，同时 od8 需要注意。

<Beatmap
  bid=936769
  sid=431971
  preview="M2U - Lunatic Sky (buhei) [Yoru's Insane]"
  star=4.87
  max=769
  color="#eee"
  alias="狂野天空"
/>

全曲二连众多且排列复杂，在 160 这种 bpm 下想打出好 acc 需要练习。

<Beatmap
  bid=2003513
  sid=957007
  preview="sakuzyo - AXION (Star* Remix 2016 Update) (Ryuusei Aika) [gary00737's Insane]"
  star=4.88
  max=650
  color="#eee"
/>

axion 的一个 remix，排列比较中规中矩，适合练习。

<Beatmap
  bid=1225664
  sid=576022
  preview="Mitsuyoshi Takenobu no Ani - Amphisbaena (toybot) [Insane]"
  star=4.76
  max=820
  color="#eee"
/>

滑条上的难度仍很大，连打部分的难度较为一般。

<Beatmap
  bid=2468000
  sid=1183900
  preview="Powerless feat. Sennzai - Lost Desire (meiikyuu) [Insane]"
  star=5.04
  max=882
  color="#0c0"
  alias="失欲"
/>

中途的较大间距短串是主要难点所在。

<Beatmap
  bid=2028792
  sid=968678
  preview="Rche - Todestrieb (FrenZ396) [Insane]"
  star=4.88
  max=832
  color="#eee"
/>

注意其较低的 ar 与偶数连打。

<Beatmap
  bid=353182
  sid=141672
  preview="SAKURA*TRICK - Won(*3*)Chu KissMe! [TV Size] (OniJAM) [Kiss]"
  star=4.85
  max=539
  color="#eee"
/>

bpm 很低，排列也并不友好，需要一定技术才能打好。

<Beatmap
  bid=775361
  sid=351828
  preview="TOTTO - Wadatsumi (Desperate-kun) [Konei's Insane]"
  star=4.91
  max=790
  color="#eee"
  alias="海神"
/>

<Beatmap
  bid=775366
  sid=351828
  preview="TOTTO - Wadatsumi (Desperate-kun) [Zetera's Insane]"
  star=4.83
  max=855
  color="#eee"
  alias="海神"
/>

海神，四星的两个难度前者倾向于大间距，倾向于密度及排列复杂性。

<Beatmap
  bid=602735
  sid=198380
  preview="sakuzyo - Neurotoxin (Rumia-) [SCV's Insane]"
  star=4.85
  max=723
  color="#eee"
/>

排列比较密集，三连五连反复出现，注意耐力把控。

<Beatmap
  bid=653128
  sid=173422
  preview="Studio EIM - Crescent Moon Island Boss Theme (Rakuen) [Insane]"
  star=4.83
  max=838
  color="#0c0"
/>

连打密度很大，二分之一左右有若干排列越来越奇怪的九连短串，注意移动。但 od 很低，会一点连打 acc 可以很高。

<Beatmap
  bid=2276017
  sid=1088528
  preview="Loki - With Fire and Sword (2013) (TheShadowOfDark) [TheMinorsonek's Insane]"
  star=4.85
  max=1662
  color="#0c0"
/>

长，密度较大，有较多个数的连打，考验长时间的耐力与手控。

<Beatmap
  bid=762792
  sid=341933
  preview="ETIA. - Lost Love (JJburstOwO) [Insane]"
  star=4.91
  max=1046
  color="#eee"
/>

ETIA早期artcore代表作，常规切指。

<Beatmap
  bid=1295717
  sid=611095
  preview="Memme - Avalanche (Starfy) [Insane]"
  star=4.75
  max=911
  color="#eee"
  alias="雪崩"
/>

这个版本相较另一个排列更加复杂，需要移动能力。

<Beatmap
  bid=441646
  sid=184498
  preview="Yooh - Shanghai Kouchakan ~ Chinese Tea Orchid Remix (Gamu) [EXHAUST]"
  star=4.80
  max=798
  color="#eee"
  alias="上海红茶馆"
/>

上海红茶馆，bpm 较高，有一定 aim 要求。需要注意 ar8.5 对读图的影响。

<Beatmap
  bid=780020
  sid=347170
  preview="DJ TOTTO - glacia (Kloyd) [Momoko's Insane]"
  star=4.83
  max=693
  color="#0c0"
/>

常规排列的正常图，bpm 稍高。

<Beatmap
  bid=1053842
  sid=375402
  preview="onoken - Viden (-kevincela-) [toybot's Insane]"
  star=4.78
  max=786
  color="#0c0"
/>

连打较为密集，考验基本功，同时注意移动。

<Beatmap
  bid=821679
  sid=363882
  preview="P*Light - YELLOW SPLASH!! (Minakami Yuki) [Enjoy's Insane]"
  star=4.86
  max=786
  color="#eee"
/>

移动较难，需要读图。

<Beatmap
  bid=306038
  sid=111611
  preview="ZUN - Kobito of the Shining Needle ~ Little Princess (sjoy) [Lunatic]"
  star=4.94
  max=1269
  color="#0c0"
  alias="小公主"
/>

小公主，强力的手控检验图，大于5的连打很多，最高达到接近 20 个，长串入门图之一。

<Beatmap
  bid=2012923
  sid=918026
  preview="Hommarju - Shanghai Wu Long (Flask) [Dakini's HYPER]"
  star=4.99
  max=775
  color="#eee"
  alias="上海舞龙"
/>

压力逐渐增大，最后一段的连续短连打非常考验底力。且 ar 与 od 都不太舒适，导致 acc 不太好打。

*编者注：背景图很大很白*

<Beatmap
  bid=1559778
  sid=737852
  preview="Project Grimoire - Excalibur ~Revived resolution~ (SnowNiNo_) [EXPERT]"
  star=4.86
  max=791
  color="#eee"
  alias="圣剑 2"
/>

圣剑 2，比较常规的连打排列，以五与七连为主，注意较高 bpm 的手速输出

<Beatmap
  bid=1652104
  sid=486454
  preview="Yomi - D's Adventure Note Remake-ban (toybot) [Asami's Insane]"
  star=4.96
  max=795
  color="#eee"
/>

连打非常散碎，需要较高的手控和读图能力。

<Beatmap
  bid=866256
  sid=359168
  preview="LeaF - Calamity Fortune (Frostings) [Insane]"
  star=4.85
  max=848
  color="#eee"
  alias="CF"
/>

压力大，od8 和高 bpm 导致前期不好打 acc，但一旦水平上去了会非常好打。

<Beatmap
  bid=1815526
  sid=835474
  preview="Festa - Lemuria (QuiescentRabbit) [Insane]"
  star=4.81
  max=984
  color="#0c0"
/>

作曲家 Festa 为 xi 的马甲。密度较高，bpm 也较高，对手速是一个考验。

<Beatmap
  bid=1618331
  sid=768281
  preview="A.SAKA - Nanatsu Momijiakari (xLolicore-) [Left's Insane]"
  star=4.95
  max=722
  color="#0c0"
  alias="七叶红叶灯"
/>

七叶红叶灯，较为复杂的排列，包含少量偶数连，滑条也需要当心。

<Beatmap
  bid=952787
  sid=385427
  preview="Nizikawa - F.K.S. (Pho) [Collab HYPER]"
  star=5.05
  max=655
  color="#0c0"
/>

这个图与其说练连打不如说练滑条移动，但不会连打那就根本打不动。

<Beatmap
  bid=1649420
  sid=785650
  preview="yuki. feat. setsunan - Hello! World (Regou) [pishi's Insane!]"
  star=4.94
  max=922
  color="#eee"
/>

排列较为复杂，注意手控。

<Beatmap
  bid=743818
  sid=334469
  preview="ALiCE'S EMOTiON - Dark Flight Dreamer (Natsu) [Lunatic]"
  star=5.01
  max=1262
  color="#eee"
  alias="魔理沙"
/>

排列比另一个版本更复杂，容易断cb，od也更高

<Beatmap
  bid=68036
  sid=19320
  preview="Dark PHOENiX - Taketori Hishou (Aakiha) [Lunatic]"
  star=5.01
  max=949
  color="#eee"
  alias="竹取飞翔，小竹取"
/>

为便于区分，这个版本一般叫做小竹取。注意移动即可，没有太大切指压力

<Beatmap
  bid=619891
  sid=210316
  preview="U1 overground - Dopamine (fanzhen0019) [EXTREME]"
  star=4.68
  max=887
  color="#eee"
  alias="多巴胺"
/>

多巴胺，200bpm 和复杂的排列导致突然 fail 的可能不低，acc 也并不好打。

<Beatmap
  bid=2101534
  sid=822937
  preview="Uinyasu, Occhoko Bunny - Aa Kenran no Yume ga Gotoku (Epsilon Remix) (deadcode) [Insane]"
  star=5.13
  max=1631
  color="#0c0"
  alias="啊，像绚烂的泡沫一样"
/>

<Beatmap
  bid=1658312
  sid=785703
  preview="Hazuki - Legend of Millennium (Syph) [Log's Insane]"
  star=4.96
  max=797
  color="#eee"
/>

相当综合的长图，连打的类型也比较复杂。

<Beatmap
  bid=1365161
  sid=624995
  preview="xi - ANiMA (sdafsf) [Insane]"
  star=4.93
  max=668
  color="#eee"
/>

后半程比较密集的 192bpm 连打和 od8 对连打水平是一个考验。

<Beatmap
  bid=207659
  sid=72740
  preview="MuryokuP - Catastrophe (meiikyuu) [Cataclysm]"
  star=4.91
  max=881
  color="#0c0"
/>

注意三分拍连打。这个难度还是不难的，很多连打由折返滑条代替

<Beatmap
  bid=1033154
  sid=482090
  preview="9mm Parabellum Bullet - Inferno (Monstrata) [Agonizing Insane]"
  star=4.97
  max=552
  color="#0c0"
/>

这个阶段所能接触到的不多的较高 bpm 的较长连打，高手速人的 pp 图。

<Beatmap
  bid=1735858
  sid=790045
  preview="Umeboshi Chazuke - Owari to Hajimari no Oto (Yoshimaro) [Yoshi73's Insane]"
  star=4.92
  max=937
  color="#eee"
  alias="终与始之音"
/>

检验水平的时候到了，od8.5 和 bpm195 的组合，能达到多少 acc 全看基础。

<Beatmap
  bid=672259
  sid=296198
  preview="DJ'TEKINA//SOMETHING - Internet bitch P*Light Remix (Priti) [Frey's Insane]"
  star=4.83
  max=815
  color="#eee"
  alias="网络碧池"
/>

正常的较高 bpm 四星连打图。

<Beatmap
  bid=786021
  sid=352570
  preview="beatMARIO - Night of Knights (alacat) [iyasine's Lunatic]"
  star=5.08
  max=1080
  color="#eee"
  alias="夜骑"
/>

这个难度尚没有很困难的排列，但 od8 已经开始要求连打准度。

<Beatmap
  bid=386140
  sid=157754
  preview="deadmau5 - Orange File (Jethh) [Extra]"
  star=5.09
  max=289
  color="#eee"
/>

从头连打到尾的半分钟短图，也没有长串~~，某种程度上的弱智图~~

<Beatmap
  bid=421532
  sid=151720
  preview="ginkiha - EOS (alacat) [RLC's Another]"
  star=5.06
  max=903
  color="#0c0"
/>

常规图，能打天堂塔 another 难度就一定可以打这个。不过 flow 要求还是高一点。

<Beatmap
  bid=623835
  sid=264299
  preview="sakuzyo - Imprinting (Squigly) [lfj's Insane]"
  star=4.91
  max=805
  color="#eee"
/>

<Beatmap
  bid=638017
  sid=264299
  preview="sakuzyo - Imprinting (Squigly) [scanter's Another]"
  star=5.24
  max=839
  color="#eee"
/>

对左右手均有要求的综合图，两个难度的差别不特别大。

<Beatmap
  bid=669102
  sid=298138
  preview="Printemps - Puwa Puwa-O! (Sakaue Nachi) [SukiSuki]"
  star=4.80
  max=493
  color="#eee"
/>

需要注意偶数连以及短滑条掺杂进连打的处理。

<Beatmap
  bid=659423
  sid=291495
  preview="orangentle - HAELEQUIN (Gamu) [Momoko's Insane]"
  star=5.18
  max=1080
  color="#0c0"
/>

排列复杂，物件密度大。低 bpm 需要手控。

<Beatmap
  bid=297663
  sid=115107
  preview="SirensCeol - Nightmare (Maxin Remix) (galvenize) [Another]"
  star=5.05
  max=852
  color="#eee"
/>

有很有趣的排列，有一定的读图压力，注意处理好切指与单戳之间的关系。

<Beatmap
  bid=861348
  sid=391817
  preview="Petit Rabbit's - No Poi! (Doormat) [Rabbit House]"
  star=4.92
  max=1303
  color="#eee"
  alias="不准 Poi！"
/>

点兔 op2，较低的 bpm 与 od8 以及密集的连打导致 acc 并不很好打。

<Beatmap
  bid=783249
  sid=354013
  preview="Sawawa - kirakira TIME* (Priti) [EXHAUST]"
  star=4.83
  max=762
  color="#eee"
/>

具有较为困难的排列，滑条比较复杂，需要读图与爆发手速。

<Beatmap
  bid=632127
  sid=267767
  preview="cosMo@BousouP - Oceanus (Broccoly) [Asagi's Insane]"
  star=5.02
  max=1238
  color="#0c0"
  alias="海洋"
/>

难点在于 196bpm 的小串，没有高手速会比较难处理。

<Beatmap
  bid=853926
  sid=384772
  preview="Yuaru - Asu no Yozora Shoukaihan (Akitoshi) [Insane]"
  star=4.96
  max=1133
  color="#eee"
  alias="明日夜空哨戒班"
/>

哨戒班，注意连打接滑条的移动。

<Beatmap
  bid=715345
  sid=275743
  preview="Memme - Starving Days (Gamu) [Another]"
  star=5.05
  max=928
  color="#0c0"
  alias="饿日"
/>

全图有大量的三连五连这种短连打，是不错的练习图。

<Beatmap
  bid=1187250
  sid=558694
  preview="xi - Glorious Crown (Monstrata) [Hobbes2's Insane]"
  star=5.17
  max=869
  color="#eee"
  alias="皇冠"
/>

bpm 很高，但连打部分不多，低 cs 导致移动也不难，借此可以练习短爆发，为之后打基础。

<Beatmap
  bid=355510
  sid=126961
  preview="Uchida Aya - Blueberry Train (Fycho) [Insane]"
  star=4.98
  max=1256
  color="#eee"
  alias="蓝莓火车"
/>

该图较为复杂的移动和读图一定程度上比较影响连打，由此作为排列更加复杂的连打图读图的练习。

<Beatmap
  bid=246276
  sid=60115
  preview="USAO - ZED (Mr Color) [Nyquill's Another]"
  star=4.94
  max=698
  color="#eee"
/>

滑条排列较为困难，同时有不少三分拍连打。

<Beatmap
  bid=186407
  sid=62962
  preview="wa. remixed celas - Crystal World ~Fracture~ (Mr Color) [Extra]"
  star=5.20
  max=749
  color="#0c0"
  alias="水晶世界"
/>

经典老图水晶世界，排列本身不复杂，但是高达 9 的 od 非常考验底力。

<Beatmap
  bid=545555
  sid=155749
  preview="xi - .357 Magnum (Akali) [Hyper]"
  star=5.14
  max=1000
  color="#0c0"
/>

移动连打是这个图的招牌，这个图有助于开始练习 flow。

<Beatmap
  bid=1452811
  sid=542317
  preview="Memme - Avalanche (Kalindraz) [Insane.]"
  star=4.85
  max=1027
  color="#eee"
  alias="雪崩"
/>

切指密度相当大，但麻婆作图时音押的很好，打着比较舒服

<Beatmap
  bid=974148
  sid=392215
  preview="IOSYS - Cirno no Perfect Sansuu Kyoushitsu (alacat) [Muya's Lunatic]"
  star=5.15
  max=770
  color="#eee"
  alias="琪露诺"
/>

琪露诺的算数教室，连打密集。这个图受到 muya 比较直楞排列的影响，acc 很不好打

<Beatmap
  bid=114446
  sid=35219
  preview="Tsubaki - Kyun Kyun Tamaran Inaba tan! (Aenna) [Inaba!]"
  star=4.96
  max=915
  color="#0c0"
  alias="因幡帝"
/>

od 很低，检验一下连打精准度了。

*编者注：我看是你想听小妹妹歌了（注：歌手唱歌时才 12 岁）*

<Beatmap
  bid=1316477
  sid=578755
  preview="Getty vs. DJ DiA - Grayed Out -Antifront- (Realazy) [Pachiru vs. Ayyri's Insane]"
  star=4.98
  max=616
  color="#eee"
/>

简单的连打图，注意读图即可，190bpm 带来的麻烦不大。

<Beatmap
  bid=1511836
  sid=695743
  preview="UNDEAD CORPORATION - Yoru Naku Usagi wa Yume o Miru (MaridiuS) [ChekidiuS' Insane]"
  star=5.09
  max=1427
  color="#eee"
alias="夜啼的兔子做着梦 / 夜啼兔"
/>

三分钟的长度与200的bpm考验耐力。

<Beatmap
  bid=1565293
  sid=730367
  preview="REDALiCE feat. Ayumi Nomiya - Little Star (DavidEd) [Insane]"
  star=5.22
  max=702
  color="#0c0"
/>

注意连打的移动。

<Beatmap
  bid=1384249
  sid=652886
  preview="Wisp X - Wander (Zer0-) [Endlessly]"
  star=5.09
  max=554
  color="#eee"
/>

长度不长，但后半段压力很足，od也较高。

<Beatmap
  bid=1719727
  sid=807396
  preview="onoken - K8107 (MaridiuS) [Menda's Insane]"
  star=5.08
  max=783
  color="#eee"
/>

有一小段可忽略的变速，同时排列较为卡手。

<Beatmap
  bid=430192
  sid=167225
  preview="LhoU - Highlander (Cherry Blossom) [Sylith's Another]"
  star=5.11
  max=671
  color="#0c0"
/>

这个图着重练习滑条后跟随连打的排列。

<Beatmap
  bid=2027991
  sid=969312
  preview="void - Dedication (Rockyy) [yaspo's Insane]"
  star=5.12
  max=1400
  color="#eee"
/>

长度较长，且排列十分有想法，适合练习连打图的移动。

<Beatmap
  bid=382887
  sid=156235
  preview="Yooh - snow storm -euphoria- (-Chata-) [EXHAUST]"
  star=5.06
  max=928
  color="#0c0"
  alias="雪暴"
/>

不算简单图，读图一定要仔细，连打存在停顿后出发，移动不要贸然。

<Beatmap
  bid=358682
  sid=144158
  preview="BlackYooh vs. siromaru - BLACK or WHITE? (Fast) [Gurvy's EXHAUST]"
  star=5.10
  max=782
  color="#eee"
  alias="黑与白"
/>

和另一个版本比相对简单，基本没有特别难点。

<Beatmap
  bid=1287386
  sid=603051
  preview="a_hisa - Pastel Subliminal (Albatro) [Insane]"
  star=5.08
  max=1843
  color="#0c0"
/>

长，物件密度大，但机制简单，多为短连打，个数较多的连打组数较少。

<Beatmap
  bid=507728
  sid=143397
  preview="Natsume Chiaki - Hanairo Biyori (rinsukir) [wkyik's Insane]"
  star=5.16
  max=1061
  color="#0c0"
  alias="花色日和"
/>

花色日和，兼顾移动和切指。

<Beatmap
  bid=628637
  sid=277421
  preview="Lindsey Stirling - Senbonzakura (MrSergio) [Extra]"
  star=4.95
  max=1097
  color="#eee"
  alias="千本樱"
/>

千本樱乐器版，十分好听。主要在于低 bpm 的手控以及很难的滑条移动。

<Beatmap
  bid=1309215
  sid=620910
  preview="O2i3 - TSLove (Fanteer) [Another]"
  star=5.12
  max=670
  color="#0c0"
/>

综合考验移动读图连打，有较奇怪的连打排列。

<Beatmap
  bid=1017374
  sid=436177
  preview="yuikonnu - Kakushigoto (AtHeoN) [Hathz's Insane]"
  star=5.21
  max=1457
  color="#eee"
  alias="隐瞒之事"
/>

在这个难度，密度骤增了不少，副歌段的连续连打是个很难的点。

<Beatmap
  bid=789819
  sid=359191
  preview="xi - ANiMA (liaoxingyao) [Spring's LV.10]"
  star=5.20
  max=790
  color="#eee"
/>

这个版本打着很顺滑，但对主群来说存在移动底力不足的可能。

<Beatmap
  bid=1624775
  sid=770246
  preview="Rabbit House - Final Overtake (bbu) [Habi's Insane]"
  star=5.12
  max=888
  color="#eee"
/>

bpm 较高，物件密度大，对手速有一定要求，好在是 od7。

<Beatmap
  bid=1460444
  sid=688877
  preview="Kucchi vs Akki - Yakumo >>JOINT STRUGGLE (Muya) [Hyper]"
  star=5.02
  max=888
  color="#c00"
/>

连续不断的密集短连打，od8 导致 acc 控制较为困难

<Beatmap
  bid=824931
  sid=376837
  preview="Demetori - Genshi no Yoru ~ Ghostly Eyes (Alheak) [Bamboo Forest of the Lost]"
  star=5.10
  max=1950
  color="#c00"
  alias="幻视之夜"
/>

五分钟的长度，练习长图稳定性。但比较常规，注意三分拍即可。

<Beatmap
  bid=589965
  sid=257793
  preview="Yuyoyuppe - AiAe (Fort) [Another]"
  star=5.08
  max=1720
  color="#c00"
/>

又见面了，这个难度的物件密度更大了，几乎一直处于连打状态，对耐力的考验很高。

<Beatmap
  bid=1208245
  sid=569986
  preview="ClariS - CLICK(Soleily Remix) (My Angel Azusa) [NiseCLICK]"
  star=5.01
  max=1753
  color="#c00"
/>

长，bpm 不高而 od 高，acc 较难打。

<Beatmap
  bid=476149
  sid=153776
  preview="yuikonnu & ayaponzu* - Super Nuko World (AllStar12) [Insane]"
  star=5.21
  max=1381
  color="#c00"
  alias="超级猫世界"
/>

猫世界，高 bpm 高物件密度，需要不错的耐力。和花色日和性质类似，但各方面都更难一些。

<Beatmap
  bid=899859
  sid=358350
  preview="Dollscythe - Flashes (Extended) (handsome) [Atsuro's Insane]"
  star=5.26
  max=1489
  color="#c00"
/>

四分半钟的长图，切指密集，bpm 不低。同样要注意耐力。

<Beatmap
  bid=557821
  sid=241526
  preview="Soleily - Renatus (Multiple Creators) [Insane]"
  star=5.27
  max=1328
  color="#c00"
  alias="重生纪元"
/>

这个图难度其实不难，作为 Boss 其实是情怀加成。常规图，注意二连。

<Beatmap
  bid=152078
  sid=49052
  preview="goreshit - the nature of dying (grumd) [The Nature of Dying]"
  star=4.65
  max=1932
  color="#92e"
  alias="凋零"
/>

凋零，所谓的密集短连打就是这种图，小号洪水，bpm 稍低，对耐力和稳定性是巨大考验。

<Beatmap
  bid=1701400
  sid=806859
  preview="Camellia feat. Nanahira - Bassdrop Freaks (2018 &nbsp;Redrop&nbsp; ver.) (Mir) [LCFC's Insane]"
  star=5.09
  max=1917
  color="#92e"
  alias="贝斯大老婆"
/>

贝斯大老婆~，这个图主要是用于展示，练连打的时候不要放下移动，也是代表一种连打图的类型。

<Beatmap
  bid=926832
  sid=414348
  preview="Petit Rabbit's - No Poi! (nenpulse bootleg remix) (Skystar) [Rizia's Insane]"
  star=5.16
  max=1564
  alias="不准 Poi！"
  color="#92e"
/>

原曲加速版，物件密度在这个分段可以说很大，基本不可避免会有 fail 的经历，一定程度上可以认为是 2012 的缩短版。

*编者注：以上点兔和 xi 歌均为私货*

<Beatmap
  bid=733772
  sid=323329
  preview="positive MAD-crew - Mynarco Addiction (Okoratu) [Hyper]"
  star=5.31
  max=2349
  color="#92e"
/>

由于歌本身的原因有一点昏睡连打，但够长，想打好需要耐力。

<Beatmap
  bid=53554
  sid=13223
  preview="Demetori - Emotional Skyscraper ~ World's End (happy30) [Extra Stage]"
  star=5.39
  max=2012
  color="#333"
  alias="2012"
/>

大名鼎鼎的（老）2012，得名于歌名和总 cb 数。长达 7 分钟（但实际上由于有休息段不累），注意 od9 的手控，移动不难。

注：列入该连打推荐仅由于其历史地位，并因为排列类型列于阶段 4 中，但并不推荐主群玩家进行游玩。

### 5

<Beatmap
  bid=2039171
  sid=967904
  preview="Matsushita - raspberry cube (timemon) [Lasse's Insane]"
  star=4.98
  max=1460
  color="#eee"
/>

超低速连打，flow要求较高，手控与移动缺一不可。

<Beatmap
  bid=1821081
  sid=813569
  preview="Laur - Sound Chimera (Nattu) [Orthrus]"
  star=4.77
  max=1703
  color="#0c0"
  alias="奇美拉"
/>

正常四分拍段密度较高需要手速，而三分拍段又需要低速手控。长度长，综合难度较高。

<Beatmap
  bid=2680793
  sid=1291562
  preview="Zekk - Libertas (Extended Mix) (Cubby) [toybot x cubby insane]"
  star=5.07
  max=1789
  color="#0c0"
/>

出现了有间距的连打以及分离连打，且滑条也较为复杂。

<Beatmap
  bid=751664
  sid=339708
  preview="Rameses B - Transcend (Milan-) [Another]"
  star=4.67
  max=770
  color="#0c0"
/>

后半段全程连打，较高 cs 与较低 bpm 需要一定的 flow 与手控水平，也需要一定耐力。长串入门。

<Beatmap
  bid=772294
  sid=350295
  preview="yak_won - Sewing Machine (ktgster) [Extra]"
  star=4.71
  max=1157
  color="#0c0"
  alias="缝纫机"
/>

分离连打入门图，即时间连续空间不连续的连打。bpm相当低，需要手控。

<Beatmap
  bid=722587
  sid=319940
  preview="xi - Mirage Garden (P o M u T a) [Hyper]"
  star=4.90
  max=1587
  color="#eee"
/>

变速极多且具有偶数连打。整体处于较低bpm，低ar影响不大但需要会读。

<Beatmap
  bid=2036906
  sid=972932
  preview="James Landino - Hide And Seek (Mirash) [RLC's Insane]"
  star=4.88
  max=961
  color="#eee"
  alias="捉迷藏"
/>

连打密度较大且滑条占比大，需求综合实力。

<Beatmap
  bid=1656914
  sid=789544
  preview="Andromedik - Invasion (Mirash) [NeilBot's Insane]"
  star=4.85
  max=1340
  color="#0c0"
/>

连打种类较多，排列较复杂，需要一定读图能力。

<Beatmap
  bid=2489320
  sid=1051403
  preview="Akatsuki Records - Bhavacakra (SMOKELIND) [Zelq's Lunatic]"
  star=4.72
  max=1479
  color="#eee"
/>

超低速bpm连打手控图，且需要较高的flow能力。

<Beatmap
  bid=977326
  sid=417408
  preview="M2U & NICODE - Lune (Taeyang) [GimBab's Another]"
  star=4.90
  max=733
  color="#eee"
/>

连打的note个数较多，需要手控与一定flow能力。

<Beatmap
  bid=1950314
  sid=417408
  preview="M2U & NICODE - Lune (Taeyang) [AF's Extra]"
  star=5.27
  max=711
  color="#0c0"
/>

相比上一个难度 flow 难度增加非常多。

<Beatmap
  bid=1970128
  sid=938426
  preview="Camellia - Newspapers for Magicians (Mir) [Reform's Insane]"
  star=5.00
  max=1898
  color="#eee"
/>

典型的滑条占比较大，连打高度依托短滑条完成的图类型。需要较高的读图与aim能力。

<Beatmap
  bid=2648002
  sid=1268030
  preview="Camellia - Compute It With Some Devilish Alcoholic Steampunk Engines (OneShotFox) [banter's Insane]"
  star=4.93
  max=1863
  color="#eee"
/>

短连打占比较大，注意连打的连贯性。

<Beatmap
  bid=1848516
  sid=848697
  preview="lapix - Amazing Mirage (Lokidoki) [Knight's Insane]"
  star=5.04
  max=892
  color="#0c0"
/>

前半段以散碎的短连打为主，后半段则为较长的需求 flow 能力的连打，且存在变距。

<Beatmap
  bid=1129261
  sid=528821
  preview="KikuoHana - Nobore! Susume! Takai Tou (Karen) [Azure's Insane]"
  star=4.89
  max=1772
  color="#eee"
  alias="高高塔"
/>

超低速 bpm 图，排列较复杂，结尾有较大间距长连打。

<Beatmap
  bid=2255707
  sid=1077982
  preview="Emiru no Aishita Tsukiyo ni Dai San Gensou Kyoku wo - ito (Lasse) [Insane]"
  star=5.05
  max=1460
  color="#0c0"
  alias="弦"
/>

低速 flow 向连打，有三分拍的变速段，且ar稍低。

<Beatmap
  bid=1970659
  sid=936126
  preview="siromaru + cranky - conflict (Icekalt) [Insane]"
  star=5.10
  max=873
  color="#eee"
  alias="公交车"
/>

具有较多的滑条 + note + 滑条类型的排列，且滑条自身较快，需要较高的aim能力。

<Beatmap
  bid=1707910
  sid=749304
  preview="USAO - FREEDOM (Extended Mix) (C00L) [Insane Collab]"
  star=4.86
  max=1647
  color="#0c0"
/>

前半段为 150bpm，后半段为 170bpm。排列类型丰富。

<Beatmap
  bid=1780740
  sid=848977
  preview="Ice vs. Morimori Atsushi - RE:UNION -Duo Blade Against- (Realazy) [Trynna's Insane]"
  star=5.03
  max=851
  color="#eee"
/>

高 bpm 短爆发连打图。

<Beatmap
  bid=1296762
  sid=554892
  preview="xi - Zauberkugel (pishifat) [Insane]"
  star=5.05
  max=729
  color="#eee"
/>

排列非常复杂，需要较高的读图与移动能力，滑条占比大。

<Beatmap
  bid=2683455
  sid=1281379
  preview="kanone - Ground Z.E.R.O. (DTM9 Nowa) [Insane]"
  star=5.24
  max=1040
  color="#0c0"
/>

连打密度较高，短连打为主，间距较大，可用作练习 flow。

<Beatmap
  bid=2012850
  sid=960341
  preview="Utagumi Setsugetsuka - Maware! Setsugetsuka (Lunala) [Moment of Inertia]"
  star=5.22
  max=1636
  color="#eee"
  alias="旋转吧雪月花"
/>

雪月花完整版，主要难点在副歌段的分离连打。

<Beatmap
  bid=1477261
  sid=581787
  preview="Eleharmonica remixed by kors k - Der Wald (kors k Remix) (Cheesecake) [Jace's Insane]"
  star=5.00
  max=935
  color="#0c0"
/>

连打密度高，间距小导致手控不好的情况下很容易打快导致 acc 低，需要注意。

<Beatmap
  bid=917430
  sid=424743
  preview="dj TAKA feat.AiMEE - True Blue (ZZHBOY) [Insane]"
  star=5.05
  max=791
  color="#0c0"
  alias="真蓝"
/>

真蓝，排列复杂，主要体现在有偶数连打及滑条后连打与滑条空间不连续，需要较高读图与移动水平。

<Beatmap
  bid=1483948
  sid=682996
  preview="YURRY CANON - Nadeshiko color Heart (kwk) [Insane Collab]"
  star=5.05
  max=1307
  color="#0c0"
  alias="抚子色"
/>

抚子色，具有分离连打与间距短连打，需要较高的 flow 水平。变速可忽略不计，总体评价为超低 bpm。

<Beatmap
  bid=944717
  sid=430339
  preview="Hatsuki Yura - Eclipse Parade (Vert) [Gxy's Insane]"
  star=5.12
  max=1606
  color="#eee"
/>

全曲为三分拍连打，主要为二连与偶数连打，特化向练习图。

<Beatmap
  bid=415217
  sid=171676
  preview="SHK - Identity Part 5 ([Twinkle]) [ExtrA]"
  star=4.92
  max=830
  color="#eee"
/>

cs5 与 bpm140 导致这个图需要很高的手控与 flow 能力。

<Beatmap
  bid=727447
  sid=327825
  preview="Y&Co. feat. Karin - Sweet Rain (Yauxo) [Another]"
  star=4.89
  max=770
  color="#eee"
/>

排列复杂，组与组连打间个数变化较频繁，需要读图水平。也需要一定水平 flow。

<Beatmap
  bid=2039417
  sid=968923
  preview="HyuN - Illusion of Inflict (Icekalt) [Insane]"
  star=5.18
  max=876
  color="#eee"
/>

密集短连打，由于 cs3.5 与 ar8.8 导致 acc 较为难打。

<Beatmap
  bid=1096903
  sid=514980
  preview="Kanpyohgo - Unmei no Dark Side -Rolling Gothic mix (My Angel Azusa) [Satellite's Lunatic]"
  star=5.02
  max=1652
  color="#0c0"
  alias="转转"
/>

转转，经典图。全图连打密度大且类型丰富，需要一定耐力，其余综合实力要求也较高。

<Beatmap
  bid=2438516
  sid=776328
  preview="Getty vs. DJ DiA - Ops:Code -Rapture- (Realazy) [Acyl's Insane]"
  star=5.13
  max=783
  color="#eee"
/>

自身连打难度不高，但可通过此图练习到初级的一种高bpm准tech图，即较多复杂滑条，连打部分依托滑条。

<Beatmap
  bid=485284
  sid=171421
  preview="M2U - Quo Vadis (buhei) [Extreme]"
  star=5.03
  max=1011
  color="#eee"
  alias="君往何处"
/>

排列复杂，需要 flow 能力，且有少量六分短爆发段。

<Beatmap
  bid=1521481
  sid=546820
  preview="YUC'e - Future Candy (Nathan) [Insane]"
  star=5.23
  max=1218
  color="#0c0"
/>

滑条占比高，移动要求高。

<Beatmap
  bid=1432015
  sid=518743
  preview="Nekomata Master - Nekozamurai no Gyakushu (moph) [Insane]"
  star=4.88
  max=927
  color="#eee"
/>

低 bpm，但密度较高且难度较平均，需要 flow 能力。

<Beatmap
  bid=1819782
  sid=765795
  preview="Ryu* - Sakura Mirage (STARLiGHT Mix) (Jean-Michel Jr) [Zizou's Insane]"
  star=5.09
  max=1383
  color="#0c0"
/>

加长版，排列类型简单，但密度较大且副歌段持续时间长导致需要较高耐力与稳定性。

<Beatmap
  bid=282166
  sid=106212
  preview="LeaF - MEPHISTO (Alumetorz) [Another]"
  star=5.14
  max=1003
  color="#0c0"
/>

以有一定间距的长连打为主，可用作练习长串的入门。

<Beatmap
  bid=1607327
  sid=671056
  preview="Sakuzyo - Amenohoakari (Firis Mistlud) [how2miss' Insane]"
  star=5.15
  max=872
  color="#eee"
  alias="天火明命"
/>

相比前一个难度移动难度增加很多，且 cs4.6，需求较高的读图与移动能力。od 也较高。

<Beatmap
  bid=742728
  sid=331025
  preview="Camellia - Fastest Crash (sukiNathan) [Collab Insane]"
  star=5.11
  max=1692
  color="#0c0"
/>

全图难度平均且排列较为综合，配合 210 的高 bpm 需要一定的手速与耐力，可用作练习。

<Beatmap
  bid=3015425
  sid=1453967
  preview="Getty vs. DJ DiA - DropZ -Line- (Extended Mix) (-Syncro) [FLASK'S INSANE]"
  star=5.09
  max=1136
  color="#eee"
/>

现代谱面，有一些现代向的怪排列，整体偏向手速。

<Beatmap
  bid=1838159
  sid=519054
  preview="Thaehan - Doki-Doki (Mr HeliX) [rockstarrzz' Insane]"
  star=5.10
  max=1007
  color="#0c0"
/>

该难度更倾向于密度较大的较小间距连打

<Beatmap
  bid=1107300
  sid=519054
  preview="Thaehan - Doki-Doki (Mr HeliX) [Insaniac]"
  star=5.37
  max=943
  color="#0c0"
/>

该难度更倾向于间距较大的短连打与滑条跳的组合

<Beatmap
  bid=1486581
  sid=699427
  preview="Blend A - Bon Appetit S (Meg) [Koume's Insane]"
  star=5.23
  max=1547
  color="#eee"
/>

难点主要为低 bpm 带有 flow 的连续多段连打结合滑条。

<Beatmap
  bid=1744010
  sid=830537
  preview="PSYQUI - Hype feat. Such (lapix Remix) (Mir) [Reform's Insane]"
  star=5.02
  max=1903
  color="#0c0"
/>

长度长，密度较大的密集短连打，较为需要手速与耐力。

<Beatmap
  bid=2924172
  sid=1262520
  preview="DJ Totoriott - Chronoxia (Icekalt) [Insane]"
  star=5.25
  max=806
  color="#eee"
/>

四分拍和三分拍几乎各占一半，对读图与变速能力要求较高

<Beatmap
  bid=2355610
  sid=1116399
  preview="TAROLIN feat. Katakiri Rekka - Cardinal Rave (Yusomi) [Cub's Insane]"
  star=5.20
  max=1533
  color="#eee"
/>

cs5，且排列较为复杂，需要良好的读图与移动能力。

<Beatmap
  bid=3155842
  sid=1531319
  preview="SHIKI - Pure Ruby (Matrix) [mithew's Insane]"
  star=5.25
  max=936
  color="#eee"
/>

排列较为奇怪，需要较高的 flow 能力。同时 cs3 容易导致按快。

<Beatmap
  bid=2037327
  sid=973162
  preview="Brandy - Cross Time !! (Leader) [Insane]"
  star=5.11
  max=779
  color="#eee"
/>

难度集中在结尾的间距较大的长串。

<Beatmap
  bid=766528
  sid=340903
  preview="Gentle Stick X M2U - Ineffabilis (buhei) [Yuki's Extra]"
  star=5.18
  max=1083
  color="#0c0"
  alias="无可言喻"
/>

难点主要为分离连打

<Beatmap
  bid=766504
  sid=340903
  preview="Gentle Stick X M2U - Ineffabilis (buhei) [-kevincela-'s Insane]"
  star=5.16
  max=1062
  color="#0c0"
  alias="无可言喻"
/>

难点主要为较长的有一定间距的连打，需要常规 flow 能力

<Beatmap
  bid=753968
  sid=340903
  preview="Gentle Stick X M2U - Ineffabilis (buhei) [Extreme]"
  star=5.47
  max=1169
  color="#0c0"
  alias="无可言喻"
/>

难点包括前两者，以及一定的六分拍短爆发与滑条跳

<Beatmap
  bid=1563044
  sid=700421
  preview="Hommarju - Rock It (toybot) [Another]"
  star=5.21
  max=737
  color="#eee"
/>

相较本图上一个难度各方面均衡变难一些，整体较为常规，注意 cs4.5

<Beatmap
  bid=1704915
  sid=740672
  preview="Ni-Sokkususu - Shukusai no Elementalia (SnowNiNo_) [Insane]"
  star=4.94
  max=1262
  color="#eee"
/>

低 bpm 具有一定间距的个数适中的连打，注意这种连打与滑条的配合。结尾变速为 170bpm。

<Beatmap
  bid=116938
  sid=14309
  preview="Demetori - Silent Voyage to Eternity (brikel) [Extra]"
  star=5.21
  max=1382
  color="#0c0"
  alias="鼠之力"
/>

鼠之力，经典老图。难点主要是 cs5 环境下的连打移动。

<Beatmap
  bid=2155867
  sid=1028168
  preview="ATSUMI UEDA - Harmonia (Creamy Candy) [Xenon's Insane]"
  star=5.20
  max=1239
  color="#eee"
/>

长版。排列较为反常规，但由于难度低并不难打，可用于练习读图。

<Beatmap
  bid=366142
  sid=147962
  preview="UPLIFT SPICE - Omega Rhythm (Jemmmmy) [lightr's Insane]"
  star=5.21
  max=1023
  color="#0c0"
/>

经典老图，注意连续的五连与长连打的移动。

<Beatmap
  bid=3568951
  sid=1736814
  preview="Mitsuki - Eeliaas (Strategas) [INSANE]"
  star=5.17
  max=709
  color="#eee"
/>

连打密度较大，且有相当的滑条后紧跟连打的排列需要注意。

<Beatmap
  bid=1558884
  sid=545956
  preview="yuikonnu x sana - Fuzzy Future (Aeril) [Lasse's Insane]"
  star=4.95
  max=1662
  color="#eee"
  alias="模糊的未来"
/>

<Beatmap
  bid=1526485
  sid=545956
  preview="yuikonnu x sana - Fuzzy Future (Aeril) [Another]"
  star=5.34
  max=1562
  color="#eee"
  alias="模糊的未来"
/>

两个难度均为低bpm连续多段式连打，前一个难度密度更大，后一个难度有较大间距，移动更为困难。

<Beatmap
  bid=744675
  sid=336471
  preview="UNDEAD CORPORATION - Everything will freeze (sjoy) [Yuki's Lunatic]"
  star=4.79
  max=1682
  color="#eee"
  alias="冻僵"
/>

蓝冻僵，该难度的连打密度并不大，主要还是倾向于高bpm的短爆发连打，以及适应较高bpm的连续单点。

<Beatmap
  bid=260489
  sid=97433
  preview="Traktion - The Near Distant Future (RLC) [Lapse]"
  star=5.30
  max=2677
  color="#0c0"
/>

超长图，连打种类丰富，考验综合实力与耐力稳定性。

<Beatmap
  bid=593441
  sid=256467
  preview="Memme - Chinese Restaurant (M o k o r i) [Kloyd's Another]"
  star=5.29
  max=755
  color="#eee"
  alias="中国餐馆"
/>

连打种类比较丰富，需要注意读图与手控。

<Beatmap
  bid=3047819
  sid=1280194
  preview="seatrus - MONONOKE (Realazy) [Zelq's Insane]"
  star=5.11
  max=1016
  color="#eee"
/>

一张标准 tech 图的低星难度，滑条占比很大，用于练习连打与滑条的搭配与移动。

<Beatmap
  bid=1517665
  sid=716211
  preview="yuki. - Spring Signal (pishifat) [Collab Insane]"
  star=5.19
  max=900
  color="#0c0"
/>

短连打居多，有单个 note 后接滑条的类二连排列，滑条跳也不少。

<Beatmap
  bid=818272
  sid=372850
  preview="Kuroneko Dungeon - Ryoushi no Umi no Lindwurm (P o M u T a) [SUPER]"
  star=5.07
  max=809
  color="#eee"
/>

该难度实际仅包含 140bpm 连打。存在滑条 + note + 滑条这类连打排列中 note 离前后滑条均很远的 alt 图排列类型。

<Beatmap
  bid=2469254
  sid=713926
  preview="Thaehan - Doki-Doki (FrenZ396) [Another]"
  star=5.16
  max=887
  color="#eee"
/>

ranked 版，连打密度全程较高，需要耐力及稳定性。

<Beatmap
  bid=818597
  sid=347719
  preview="Demetori - Kuuchuu ni Shizumu Kishinjou ~ Counter-Clock World (jonathanlfj) [Lunatic Collab]"
  star=5.31
  max=2232
  color="#0c0"
/>

很长的综合型连打图，单组连打个数偏少。

<Beatmap
  bid=270363
  sid=102282
  preview="Renard - Terminal (nold_1702) [Ends' Insane]"
  star=5.36
  max=1099
  color="#0c0"
/>

密度很高的连续连打图，多为依靠滑条中转的多组短连打，需要较高的耐力与手控能力。

<Beatmap
  bid=603965
  sid=261911
  preview="MitiS & MaHi - Blu (Speed Up Ver.) (Ashasaki) [Broccoly's Insane]"
  star=5.16
  max=642
  color="#eee"
/>

排列较为复杂且间距较大，需要手控与 flow 能力。

<Beatmap
  bid=338862
  sid=132312
  preview="Utagumi Setsugekka - Yumemi Sunrise (Zweib) [Insane]"
  star=4.94
  max=1973
  color="#eee"
/>

全图为三分拍连打，实际上为超低 bpm 连打图，且间距相当大，但连续个数不多，尤其二连数量很多。

<Beatmap
  bid=153926
  sid=50017
  preview="Rabpit - Sanctity (tsuka) [Expert]"
  star=5.07
  max=610
  color="#eee"
/>

超低 bpm 连打，且 cs5，存在分离连打，对手控与 flow 要求较高。

<Beatmap
  bid=757386
  sid=291495
  preview="orangentle - HAELEQUIN (Gamu) [toybot's Insane]"
  star=5.37
  max=1135
  color="#0c0"
/>

相比上一个难度密度近似，但 flow 难度增加较多。

<Beatmap
  bid=795798
  sid=362316
  preview="EYEMEDIA - HOLY KNIGHT (snowsign7) [Holy War]"
  star=5.14
  max=743
  color="#0c0"
  alias="圣骑"
/>

低 bpm 且 cs5，排列较复杂且有较长连打。

<Beatmap
  bid=1728260
  sid=812792
  preview="-45 - Midorigo Queen Bee (PandaHero) [Another]"
  star=5.32
  max=1301
  color="#eee"
/>

前半段短连打为主，后半段变长，间距增大且有分离连打。

<Beatmap
  bid=2144183
  sid=965125
  preview="Tyrfing - Verflucht (Muya) [Hyper]"
  star=5.32
  max=861
  color="#0c0"
/>

连打密度较大且掺杂若干滑条，需要一定的手控。

<Beatmap
  bid=1864177
  sid=891712
  preview="HyuN - Tokyo's Starlight (Pho) [Collab Insane]"
  star=5.28
  max=824
  color="#eee"
/>

bpm低，连打间距大且密度高不过以短连打为主，需要手控与 aim 能力。

<Beatmap
  bid=238265
  sid=87188
  preview="Memme - NEW Astronomas (Charles445) [Extra]"
  star=5.40
  max=919
  color="#eee"
/>

bpm 低，前半段有较长连打需要手控，后半段有大间距的短连打。

<Beatmap
  bid=2257469
  sid=1034179
  preview="Demetori - Yuuga ni Sakase, Sumizome no Sakura ~ The Harm of Coming into Existence (jonathanlfj) [Trustlfj's Lunatic]"
  star=5.27
  max=2808
  color="#0c0"
/>

长度很长的综合连打图，多为短连打但密度较高，需要较高的耐力与稳定性。

<Beatmap
  bid=1232328
  sid=559097
  preview="Sota Fujimori - polygon (Kaifin) [fanzhen's Another]"
  star=5.48
  max=810
  color="#eee"
/>

排列相当复杂，连打个数变化较多，需要一定的手控及较高的读图能力。

<Beatmap
  bid=2003510
  sid=957007
  preview="sakuzyo - AXION (Star* Remix 2016 Update) (Ryuusei Aika) [Another]"
  star=5.30
  max=786
  color="#eee"
/>

连打较为常规，但难点主要为 cs5.5，需要很高的移动准确度。

<Beatmap
  bid=558451
  sid=205022
  preview="Ryu* - Sakura Mirage (Priti) [EXHAUST]"
  star=5.19
  max=633
  color="#eee"
/>

难点主要集中于后半段，整体难度不高。

<Beatmap
  bid=1899815
  sid=908006
  preview="Camellia - Beyond the Geostationary Orbit Level (Regou) [Another]"
  star=5.15
  max=2228
  color="#eee"
/>

滑条占比较大，且存在少量的三分拍变速，长度也较长，考验综合实力。

<Beatmap
  bid=988793
  sid=295848
  preview="nameless - SLoWMoTIoN (Milan-) [LoLIS]"
  star=5.20
  max=1740
  color="#0c0"
/>

长图，连打主要仍为短连打，但 bpm 较低因此需要稳定五分钟的手控。

<Beatmap
  bid=1889660
  sid=905119
  preview="YUC'e - Chemical Cookie (Yusomi) [den0saur's Insane]"
  star=5.41
  max=739
  color="#0c0"
  alias="化学曲奇"
/>

比较典型的连续多段短爆发式连打接长连打，两段的发力方式一旦不同，很容易造成 acc 大幅度下滑。

<Beatmap
  bid=1620228
  sid=750316
  preview="P*Light - SAY BAY (yf_bmp) [papapa's Insane]"
  star=5.31
  max=791
  color="#0c0"
  alias="SB"
/>

比较常规的低 bpm 稍长连打，排列稍有一定扭折。

<Beatmap
  bid=1588845
  sid=750316
  preview="P*Light - SAY BAY (yf_bmp) [Firika's Expert (Winner!)]"
  star=5.80
  max=828
  color="#0c0"
  alias="SB"
/>

排列常规但 cs 非常高，需要非常高的移动精准度。

<Beatmap
  bid=1814018
  sid=866436
  preview="DJKurara - Goodbye (EijiKuinbii) [semaphore's Insane]"
  star=5.30
  max=1967
  color="#0c0"
/>

典型密集短连打且 bpm 较高，需要较高的耐力与稳定性。

<Beatmap
  bid=261725
  sid=96103
  preview="LeaF - Calamity Fortune (Flower) [SCV's Lunatic]"
  star=5.30
  max=987
  color="#eee"
  alias="CF"
/>

连打密度比另一个版本高不少，但整体较为常规。

<Beatmap
  bid=374776
  sid=149648
  preview="Yooh - Dynasty (Sylith) [HalLoWeeN's EXHAUST]"
  star=5.24
  max=829
  color="#0c0"
/>

<Beatmap
  bid=374777
  sid=149648
  preview="Yooh - Dynasty (Sylith) [INFINITE]"
  star=5.74
  max=804
  color="#0c0"
/>

两个难度密度相仿，前一个难度排列简单但为 cs5，后一个难度连打更长且有一定间距，需要 flow。

<Beatmap
  bid=1458529
  sid=688552
  preview="Mitsuki Nakae - Ouka Enbu (Lasse) [Insane]"
  star=5.01
  max=1422
  color="#eee"
  alias="樱花演武"
/>

超低 bpm 连打，有几根排列较为扭曲的长连打，其余均为与滑条结合的短连打，注意移动。

<Beatmap
  bid=637477
  sid=248876
  preview="BlackYooh vs. siromaru - BLACK or WHITE? (BluOxy) [INFINITE]"
  star=5.30
  max=979
  color="#0c0"
  alias="黑与白"
/>

这个版本密度相比另一个高很多，且排列相当复杂，连打类型丰富，需要较高的综合实力。

<Beatmap
  bid=887095
  sid=403427
  preview="xi - Akasha (Atsuro) [Insane]"
  star=5.35
  max=1707
  color="#0c0"
/>

相比前一个难度密度增加了，出现了一些长连打，对移动要求也变高了一些。

<Beatmap
  bid=281389
  sid=107377
  preview="Seiryu - Ultramarine (RLC) [Another]"
  star=5.39
  max=1369
  color="#eee"
/>

比较常规，但有一些比较奇怪的排列相对卡手。

<Beatmap
  bid=131009
  sid=40368
  preview="Miki Sayaka vs. Miki Sayaka (fw. Miki Sayaka) - squartatrice (Muya) [Another]"
  star=5.49
  max=824
  color="#eee"
/>

密度很高的密集短连打，且组与组之间个数与排列形式都有所不同，需要很高的手控与移动能力。

<Beatmap
  bid=525849
  sid=224164
  preview="Morimori Atsushi - PUPA (Cherry Blossom) [Kenterz's Another]"
  star=5.38
  max=968
  color="#eee"
  alias="蝴蝶"
/>

主要难点为副歌段的连续二连，由于 bpm 相当高，需要一定的练习。

<Beatmap
  bid=529358
  sid=225377
  preview="xi - Aragami (Sayaka-) [Another]"
  star=5.22
  max=793
  color="#0c0"
  alias="荒神"
/>

荒神，xi 的名作之一。难度集中于后半段的连续多组连打。

<Beatmap
  bid=881416
  sid=405524
  preview="D.J.Nero - Joker (09kami) [Insane]"
  star=5.19
  max=782
  color="#eee"
/>

难度集中于后半段稍长的连打，排列较为卡手。

<Beatmap
  bid=450079
  sid=188877
  preview="Starving Trancer - New Gravity (fanzhen0019) [Expert]"
  star=5.23
  max=604
  color="#eee"
/>

难点集中在两段画圆且间距渐增的连打上，基本上这两段连上即可锁定fc。

<Beatmap
  bid=1864006
  sid=891632
  preview="HyuN feat. YURI - Disorder (lcfc) [coco's Insane]"
  star=5.39
  max=774
  color="#0c0"
/>

连打类型主要为配合滑条的连续多段连打，移动与手速要求较高。

<Beatmap
  bid=350132
  sid=140115
  preview="Nanahira - Monosugoi Ikioide Keine ga Monosugoi Uta (Oracle) [Lunatic]"
  star=5.39
  max=1600
  color="#eee"
  alias="物凄"
/>

nanahira 版物凄，主要为密集短连打，由于长度长需要一定的耐力与稳定性。

<Beatmap
  bid=1863246
  sid=891345
  preview="HyuN - Infinity Heaven (Niva) [Ad Infinitum]"
  star=5.37
  max=1045
  color="#0c0"
  alias="无限天堂"
/>

无限天堂，经典名曲之一。难点为 cs4.8 的间距较大的长连打，也有一些滑条跳。

<Beatmap
  bid=828940
  sid=352570
  preview="beatMARIO - Night of Knights (alacat) [Kotori's Extreme]"
  star=5.27
  max=1305
  color="#0c0"
  alias="夜骑"
/>

该难度排列相当好看，连贯性较好，注意连续的五连。

<Beatmap
  bid=786018
  sid=352570
  preview="beatMARIO - Night of Knights (alacat) [Guy's Extra]"
  star=5.63
  max=1218
  color="#eee"
  alias="夜骑"
/>

该难度略增大了一些连打的间距，密度与上一个相仿。

<Beatmap
  bid=1557405
  sid=707164
  preview="Negentropy (a.k.a. Team Grimoire) - ouroVoros (Suzuki_1112) [Firika's Another]"
  star=5.39
  max=944
  color="#eee"
/>

相对前一个难度增加了密度，且连打的排列较为扭折，需要更强的 flow 能力。

<Beatmap
  bid=484890
  sid=199535
  preview="Seiryu - Critical Crystal (Priti) [Yuki's Another]"
  star=5.39
  max=868
  color="#0c0"
/>

副歌段主要为九连为主的较长连打，其余部分有一些配合滑条的短连打需要注意。

<Beatmap
  bid=1095270
  sid=514750
  preview="Camellia as &nbsp;Reverse of Riot&nbsp; - Completeness Under Incompleteness (Regou) [Drop's EXHAUST]"
  star=5.43
  max=913
  color="#eee"
/>

难点在多段连续较长连打，并需要考虑到其间的滑条。

<Beatmap
  bid=2034488
  sid=917915
  preview="Silentroom - Nhelv (Nyxa) [Shademphrik's Insane]"
  star=5.42
  max=1011
  color="#eee"
  alias="你和驴"
/>

有相当密集的 note 滑条间隔出现的连续多段短连打，长连打较少，需要较高的手控与移动能力。

<Beatmap
  bid=1863198
  sid=891333
  preview="HyuN - White Aura (Mirash) [coco's Insane]"
  star=5.34
  max=776
  color="#eee"
  alias="白光环"
/>

主要也以依靠滑条的连续多段短连打为主，由于 bpm 较高需要一定手速。

<Beatmap
  bid=1701590
  sid=727049
  preview="Getty vs. DJ DiA - DropZ-Line- (Realazy) [Wormi's Another]"
  star=5.46
  max=949
  color="#0c0"
/>

短版，以中等长度连打与滑条跳为主，需要一定手速。

<Beatmap
  bid=1501410
  sid=694402
  preview="Camellia vs Akira Complex - Railgun Roulette (VIP) (NeilPerry) [LowBot's Insane]"
  star=5.26
  max=1661
  color="#eee"
/>

滑条占比高，连打多依靠滑条且并不长，排列稍复杂。

<Beatmap
  bid=386759
  sid=158075
  preview="Yooh - snow storm -euphoria- (ktgster) [INFINITE]"
  star=5.42
  max=990
  color="#eee"
  alias="雪暴"
/>

密集短连打且密度较高，由于为老图因此排列较为单调，推荐度不如另一个版本。

<Beatmap
  bid=1755526
  sid=838536
  preview="sasakure.UK - Atropos (Cellina) [Another]"
  star=5.49
  max=790
  color="#eee"
/>

连打种类丰富，排列也稍复杂。

<Beatmap
  bid=297812
  sid=115193
  preview="sakuzyo - AXION (Flower) [LKs' Another]"
  star=5.47
  max=600
  color="#eee"
/>

有若干长度不一的大间距连打，对flow要求很高。其余部分注意滑条跳即可。

<Beatmap
  bid=778051
  sid=333139
  preview="DJ Ozawa - Tokyo (Innovaderz Remix) (Asphyxia) [N a s y a's Insane]"
  star=5.20
  max=752
  color="#0c0"
  alias="东京"
/>

邻近几个难度里最简单的一张，偏向普通综合图。若能打好则可尝试邻近别的难度。

<Beatmap
  bid=241578
  sid=88692
  preview="TeamGrimoire+Amaneko - croiX (HelloSCV) [EXHAUST]"
  star=5.34
  max=880
  color="#0c0"
/>

开头结尾均有较长连打，其余为短连打。变速段只有滑条。

<Beatmap
  bid=2278502
  sid=1089149
  preview="Morimori Atsushi - Toono Gensou Monogatari (MRM REMIX) (IOException) [Insane]"
  star=5.61
  max=795
  color="#eee"
/>

比较常规的连打图但 bpm 较高，需要一定手速。

<Beatmap
  bid=754799
  sid=336099
  preview="LeaF - Wizdomiot (Asahina Momoko) [Another]"
  star=5.47
  max=953
  color="#0c0"
/>

相比上一个难度密度显著增加，有一些长连打，更需要手速。

<Beatmap
  bid=719594
  sid=292301
  preview="xi - Blue Zenith (Asphyxia) [RLC's Insane]"
  star=5.51
  max=1645
  color="#0c0"
  alias="蓝顶，蓝极光"
/>

密集短连打，长连打很少。密度相当高因此需要较高的手速，耐力与稳定性。

<Beatmap
  bid=509610
  sid=173422
  preview="Studio EIM - Crescent Moon Island Boss Theme (Rakuen) [Extra Collab]"
  star=5.46
  max=864
  color="#0c0"
/>

难点主要为一些分离连打，需要一定移动水平。

<Beatmap
  bid=825243
  sid=358350
  preview="Dollscythe - Flashes (Extended) (handsome) [N/A's Insane]"
  star=5.43
  max=1721
  color="#eee"
/>

长图，综合性很高且连打类型丰富。

<Beatmap
  bid=2668350
  sid=1285142
  preview="RAISE A SUILEN - Sacred world (Noctiam) [Descent]"
  star=5.34
  max=2031
  color="#0c0"
/>

ranked 短版麻婆所作的 unranked 长版。超低 bpm 连打，间距逐渐增大，后半段压力较大。

<Beatmap
  bid=209576
  sid=73474
  preview="Cres - End Time (Maddy) [Another]"
  star=5.38
  max=826
  color="#eee"
/>

经典名曲，难点集中在中后段，连续几组长连打相当考验手速，手控与移动能力，间距不是特别大。

<Beatmap
  bid=369938
  sid=149749
  preview="Memme - China Dress (iyasine) [Another]"
  star=5.60
  max=948
  color="#0c0"
  alias="中国裙子"
/>

两个难度类型相同，均为比较综合的连打图，也比较常规。后一个难度间距略大一些。

<Beatmap
  bid=369981
  sid=149749
  preview="Memme - China Dress (iyasine) [Guy's Extra]"
  star=5.64
  max=985
  color="#0c0"
  alias="中国裙子"
/>

该难度最明显的难点为后半段节奏非常鲜明的连续大间距五连，其余部分较为正常。

<Beatmap
  bid=1644003
  sid=782989
  preview="LeaF - Alice in Misanthrope -Ensei Alice- (eiri-) [Uberzolik's Insane]"
  star=5.59
  max=948
  color="#eee"
  alias="厌世爱丽丝"
/>

主要排列形式为间距适中的较长连打，需要一定 flow 能力。

<Beatmap
  bid=162363
  sid=53231
  preview="Zeami - Music Revolver (KanaRin) [Kana]"
  star=5.39
  max=760
  color="#0c0"
/>

<Beatmap
  bid=308991
  sid=119438
  preview="8284 vs wa. - Adularescence (Cherry Blossom) [Another]"
  star=5.48
  max=724
  color="#eee"
/>

<Beatmap
  bid=306669
  sid=119438
  preview="8284 vs wa. - Adularescence (Cherry Blossom) [Extra]"
  star=5.91
  max=780
  color="#eee"
/>

两个难度均为比较常规的连打图类型，后一个难度密度更大，有更长的连打与更高的移动需求。

<Beatmap
  bid=1088043
  sid=500816
  preview="Hakuryu - Genesis At Oasis (MOONLiGHT Mix) (Krimek) [Vell's Insane]"
  star=5.42
  max=1581
  color="#eee"
/>

本难度排列形式其实相对单调：混杂着滑条跳的短爆发连打。由于 bpm 高，需要较高的手速能力。

<Beatmap
  bid=1575101
  sid=747507
  preview="senya - Terasareru kurai no Shiawase (Satellite) [Satellite]"
  star=5.41
  max=1137
  color="#eee"
  alias="被照耀的幸福"
/>

常规的低 bpm，需求 flow 的连打图。od 稍高。

<Beatmap
  bid=1538480
  sid=722662
  preview="Duoscience - Indifferences (Mir) [Senseless]"
  star=5.45
  max=937
  color="#eee"
/>

标准的 tech 图，具有一些欺骗性的排列以及遮挡式排列，均与连打有关。其次滑条占比也较高且较为复杂。

<Beatmap
  bid=1613453
  sid=641201
  preview="Kaneko Chiharu - Zettai Reido (Karen) [Insane]"
  star=5.52
  max=889
  color="#eee"
  alias="绝对零度"
/>

绝对零度，该难度仍以较多的短连打为主，需要一定的手速能力

<Beatmap
  bid=1372586
  sid=624995
  preview="xi - ANiMA (sdafsf) [Extra]"
  star=5.71
  max=887
  color="#eee"
/>

在三个版本中，这个版本的排列是最为复杂的，需要一定的读图能力。注意变速。

<Beatmap
  bid=731975
  sid=264299
  preview="sakuzyo - Imprinting (Squigly) [toybot's Extra]"
  star=5.60
  max=890
  color="#eee"
/>

这个难度的连打大部分不以滑条收尾，因此需要留意一点手控。

<Beatmap
  bid=618865
  sid=267767
  preview="cosMo@BousouP - Oceanus (Broccoly) [Fortune's Insane]"
  star=5.69
  max=1524
  color="#0c0"
  alias="海王"
/>

相比上一个难度各方面难度均匀增加了一些，仍然是较为常规的连打图，只有 bpm 稍高需要注意。

<Beatmap
  bid=1551961
  sid=721804
  preview="Omoi - Teo (Kroytz) [Kawa's Expert]"
  star=5.73
  max=1365
  color="#eee"
  alias="将手"
/>

这个难度的连打对 flow 的要求相对比较高，比较扭。

<Beatmap
  bid=842512
  sid=385427
  preview="Nizikawa - F.K.S. (Pho) [EXHAUST]"
  star=5.57
  max=752
  color="#eee"
/>

这个难度的滑条难度进一步增加，连打依托于滑条，且有少量三分拍变速。

<Beatmap
  bid=657054
  sid=257793
  preview="Yuyoyuppe - AiAe (Fort) [Expert]"
  star=5.61
  max=1950
  color="#0c0"
/>

比上一个难度的密度进一步增加，但几乎没有什么有间距的连打，纯考验手控与耐力稳定性。

<Beatmap
  bid=1391282
  sid=646289
  preview="Infected Mushroom - The Pretender (DavidEd) [Ignorance]"
  star=5.68
  max=2390
  color="#0c0"
/>

大量连续多段短连打配合少量的长连打组成的长图。该歌版本较多且另外二个版本相比该难度略难，可自行搜索下载游玩。

<Beatmap
  bid=140805
  sid=45028
  preview="Hatsune Miku - Dance of many (LKs) [Dance]"
  star=5.56
  max=827
  color="#eee"
/>

老图，排列比较单调，但也比较综合，长短连打均有，滑条较少。

*编者注：但是谱师是[拉克丝](https://space.bilibili.com/125526)*

<Beatmap
  bid=789815
  sid=359191
  preview="xi - ANiMA (liaoxingyao) [LV.11]"
  star=5.64
  max=965
  color="#eee"
/>

该版本密度稍大一些，同时flow要求较高。一些折返滑条接连打较难处理。

<Beatmap
  bid=373781
  sid=151720
  preview="ginkiha - EOS (alacat) [Lycoris]"
  star=5.58
  max=910
  color="#0c0"
/>

综合连打图，连打种类丰富。难点主要为 cs5 + od9

<Beatmap
  bid=161787
  sid=52203
  preview="Rungran - d.m.c (Band Ver.) (Sieg) [Insane]"
  star=5.48
  max=505
  color="#eee"
/>

有名的转圈连打图，具有很强的抽奖性质，能力不够前少糊这张图。

<Beatmap
  bid=689804
  sid=302535
  preview="Memme - Acid Burst (Priti) [Tess' Insane]"
  star=5.57
  max=930
  color="#eee"
  alias="酸爆"
/>

酸爆，节奏奇怪导致排列也比较奇怪，需要较强的读图与处理复杂排列的能力。

<Beatmap
  bid=432839
  sid=140691
  preview="Cres - End Time (Kyshiro) [Extra]"
  star=5.55
  max=888
  color="#eee"
/>

另一个版本，该版本的长连打 flow 要求更高。

<Beatmap
  bid=662064
  sid=292644
  preview="ZUN remixed by LeaF - Resurrection Spell (Muya) [Another]"
  star=5.60
  max=975
  color="#0c0"
/>

到结尾前均为 180bpm 连续多段短连打及少量三分拍变速，结尾为 200bpm 长连打。

<Beatmap
  bid=2156842
  sid=1031435
  preview="VINXIS - Sidetracked Day (emu1337) [Daydream]"
  star=5.44
  max=2064
  color="#eee"
/>

长图，但排列形式单调，长短连打的搭配。

<Beatmap
  bid=797108
  sid=362989
  preview="Street - Sakura Fubuki (Cherry Blossom) [Sakura no Hana]"
  star=5.64
  max=717
  color="#0c0"
  alias="樱吹雪"
/>

樱吹雪，该难度 flow 要求相当高，且两组连打间相隔较大，需要练习抓串头的技能。

<Beatmap
  bid=574187
  sid=156235
  preview="Yooh - snow storm -euphoria- (-Chata-) [INFINITE]"
  star=5.68
  max=989
  color="#0c0"
  alias="雪暴"
/>

这个版本的雪风暴排列形式更加现代，主要以较长的一定间距连打为主，配合一些滑条跳。ar9.4 对于这个分段的玩家可能有一定压力。

<Beatmap
  bid=243487
  sid=85802
  preview="RYO - Shuffle Heaven (Nemis) [Another]"
  star=5.74
  max=991
  color="#0c0"
  alias="混沌天堂"
/>

混沌天堂，主要以连续多组短→长连打组成，对耐力与稳定性要求很高。

<Beatmap
  bid=2606880
  sid=1254404
  preview="Tatsh - Xevel (emu1337) [Extra]"
  star=5.52
  max=985
  color="#eee"
/>

排列非常常规的连打图。

<Beatmap
  bid=296403
  sid=114477
  preview="xi - Zephyros (Maddy) [Anemoi]"
  star=5.65
  max=1836
  color="#eee"
  alias="西风神"
/>

西风之神，xi的作品之一。全图连打密度较大且有一段近半分钟的超长连打，非常考验耐力与稳定性。

<Beatmap
  bid=361687
  sid=145909
  preview="Remixed by DJ Command - Mermaid girl -Akiba Koubou MIX- (Priti) [Black Another]"
  star=5.44
  max=696
  color="#eee"
/>

超低速大间距连打，加上 hp8 非常容易导致 fail。

<Beatmap
  bid=800947
  sid=363882
  preview="P*Light - YELLOW SPLASH!! (Minakami Yuki) [Guy's Extra]"
  star=5.84
  max=899
  color="#eee"
/>

连打类型丰富，滑条占比较大且由于一些折返滑条容易导致抓不准串头乃至断连。

<Beatmap
  bid=870152
  sid=399151
  preview="Camellia - crystallized (Smoothie World) [Azer's Another]"
  star=5.83
  max=1614
  color="#0c0"
/>

综合连打图，有不少间距较大的排列，需要较好的移动能力。

<Beatmap
  bid=226279
  sid=80214
  preview="Wotamin - Gigantic O.T.N (Star Stream) [Guy's Extra]"
  star=5.78
  max=1279
  color="#0c0"
/>

中段有一段多组长连打，别的部分连打密度也比较高，加之较高的 bpm 需要一定的手速与耐力。滑条跳也需要注意。

<Beatmap
  bid=2470527
  sid=1183900
  preview="Powerless feat. Sennzai - Lost Desire (meiikyuu) [Extra]"
  star=5.75
  max=936
  color="#eee"
  alias="失欲"
/>

注意中段的较大间距长连打。

<Beatmap
  bid=486619
  sid=184498
  preview="Yooh - Shanghai Kouchakan ~ Chinese Tea Orchid Remix (Gamu) [INFINITE]"
  star=5.72
  max=933
  color="#0c0"
  alias="上海红茶馆"
/>

综合连打图，全图密度较大，注意耐力把控与滑条处理。

<Beatmap
  bid=1572141
  sid=703580
  preview="Reol,nqrse - Ooedo Ranvu (zhu) [Expert]"
  star=5.60
  max=1421
  color="#0c0"
  alias="大江户乱舞"
/>

经典的超低 bpm alt 图排列，即大间距锐/钝角均有的连打配合较快的滑条。由于 ar9.6 相当高，读图也有压力。

<Beatmap
  bid=146929
  sid=47330
  preview="Levaslater - NNRT (Reisen Udongein) [Another]"
  star=5.75
  max=809
  color="#0c0"
/>

<Beatmap
  bid=146985
  sid=47330
  preview="Levaslater - NNRT (Reisen Udongein) [Extra]"
  star=5.90
  max=940
  color="#0c0"
/>

两个难度类型类似，短连打与常规长连打均有。后一个难度密度高不少。

<Beatmap
  bid=958819
  sid=441271
  preview="xi - ANiMA (Kalindraz) [Extra]"
  star=5.79
  max=928
  color="#eee"
/>

三个版本中排列最为普通，但硬实力要求较高，即 flow 以及手速耐力等。

<Beatmap
  bid=499343
  sid=212387
  preview="void feat. Komatsuna - Akatsuki no Tsuki (Cherry Blossom) [Extra]"
  star=5.72
  max=1431
  color="#0c0"
  alias="晓月"
/>

有许多连续的不依托滑条的五连，也有一些长连打，需要一定的稳定性。

<Beatmap
  bid=1513623
  sid=716441
  preview="Fractal Dreamers - Paradigm Shift (appleeaterx) [Expert]"
  star=5.70
  max=1260
  color="#eee"
alias="范式转移"
/>

综合图，连打难度不是特别大但 bpm 较高，需要练习，同时该图 jump 也较难

<Beatmap
  bid=386728
  sid=153776
  preview="yuikonnu & ayaponzu* - Super Nuko World (AllStar12) [Guy's Extra]"
  star=5.84
  max=1739
  color="#0c0"
  alias="超级猫世界"
/>

综合连打图，排列正常，且密度相当大 bpm 也较高，需要较强的耐力与稳定性。

<Beatmap
  bid=1161150
  sid=307034
  preview="NU-KO - Pochiko no Shiawase na Nichijou (Long Version) (SnowNiNo_) [Corinn's Extra]"
  star=5.79
  max=1430
  color="#eee"
/>

综合图，难度主要集中于中段的连续多组长连打。

<Beatmap
  bid=1528254
  sid=723024
  preview="nmk - sola (Morinaga) [Down's Extra]"
  star=5.92
  max=965
  color="#0c0"
/>

有一些复杂排列，如遮挡与慢速刹车等，需要较好的读图。

<Beatmap
  bid=1531148
  sid=723024
  preview="nmk - sola (Morinaga) [Cellina & Yuria's Extra]"
  star=5.87
  max=980
  color="#eee"
/>

排列相对常规，但连打间距与密度有所增加。

<Beatmap
  bid=1712377
  sid=785703
  preview="Hazuki - Legend of Millennium (Syph) [schoolboy's Extra]"
  star=5.94
  max=796
  color="#eee"
/>

虽然短，但对连打的几个方面如bpm，间距，密度等都有涵盖。

<Beatmap
  bid=1915983
  sid=905158
  preview="xi remixed by cosMo@bousouP - FREEDOM DiVE [METAL DIMENSIONS] (Cherry Blossom) [Another]"
  star=5.91
  max=1751
  color="#0c0"
  alias="自由落体，FD"
/>

fd 的 remix 版，全图连打类型较为丰富，且排列较为常规。ar9 对于这种物件密度可能稍低，注意读图。

<Beatmap
  bid=1630245
  sid=775846
  preview="An - Catanoph (Ryuusei Aika) [Lavender's Extra]"
  star=6.29
  max=1827
  color="#0c0"
/>

综合连打图，连打种类丰富。有一段 jump 掺短连打排列非常复杂，需要很强的读图能力与耐力。

<Beatmap
  bid=2822369
  sid=1306570
  preview="NIWASHI - Playing with Ruby (Down) [Insane]"
  star=5.46
  max=2181
  color="#c00"
/>

标准 tech 图的低星难度。连打密度非常大，具有相当多的连打个数变化以及变速，需要很强的读图与手控。

<Beatmap
  bid=181253
  sid=51972
  preview="goreshit - o'er the flood (grumd) [The Flood Beneath]"
  star=5.59
  max=1923
  color="#c00"
  alias="洪水"
/>

洪水，著名图。主要以密集短连打为主，长连打很少。有一段连续二连需要很强的手速与手控能力。

<Beatmap
  bid=847314
  sid=128931
  preview="Feint - Tower Of Heaven (You Are Slaves) (eLy) [Extra]"
  star=5.20
  max=1292
  color="#c00"
  alias="天堂塔"
/>

万恶之源。全图几乎全由连打组成但排列相对单调，需要比较强的 flow 与手控稳定性。

注：个人建议在天堂塔该难度能打好之后再接触跑道图。

<Beatmap
  bid=147327
  sid=46218
  preview="A*Teens - Gimme! Gimme! Gimme! (Nightcore Mix) (ShadowSoul) [CDFGimme!]"
  star=5.61
  max=747
  color="#c00"
/>

全图连打密度低，但全为接近大间距的连打，对 flow 要求很高。

<Beatmap
  bid=953945
  sid=359580
  preview="Jimmy Weckl - Get Happy (buhei) [MASTER]"
  star=5.60
  max=971
  color="#c00"
/>

排列非常复杂，形式多样，具有较大间距的短连打与六分拍爆发段。ar 也较高需要注意。

<Beatmap
  bid=478605
  sid=202252
  preview="kors k - Playing With Fire (Sota Fujimori Remix) (xlni) [Pyrotechnics]"
  star=5.42
  max=2330
  color="#c00"
  alias="玩火"
/>

主要由依托滑条的短连打组成，但形式多样，也有一些二连。长度很长，需要较高的耐力稳定性。

<Beatmap
  bid=703584
  sid=175671
  preview="Sakaue Nachi - Crazy Hot (Sakaue Nachi) [Crazy Night]"
  star=5.56
  max=2305
  color="#c00"
  alias="狂热"
/>

连打密度很大的低 bpm 连打图，连打长短均有，间距压力逐渐增大，容易产生受迫性失误在结尾大间距处 fail。

<Beatmap
  bid=1812393
  sid=866938
  preview="ClariS - Colorful (tamame's apostate remix) (Bearizm) [Corrupted]"
  star=5.66
  max=2336
  color="#c00"
/>

全图连打种类丰富，压力呈逐渐增大的趋势，结尾处密集短连打很容易出现受迫性失误，需要较好的综合能力。

<Beatmap
  bid=1124153
  sid=448919
  preview="xi - Halcyon -Long Version- (Natsu) [Demigod]"
  star=5.70
  max=2146
  color="#c00"
  alias="翡翠鸡"
/>

翡翠鸟，该难度较为常规，但长度很长乃至有较高 bpm，导致需要很高的耐力稳定性。

<Beatmap
  bid=687303
  sid=307163
  preview="TwoThirds & Feint - Epiphany (feat. Veela) (Aiceo) [Revelation]"
  star=5.77
  max=2416
  color="#c00"
/>

全图由大量单独五连构成，别的短连打有一些，长连打很少。可视作 United 的弱化版，但同样是 od9，练习连打稳定性。

<Beatmap
  bid=907479
  sid=418922
  preview="dj TAKA - True Blue (Monstrata) [Halcyon]"
  star=5.82
  max=2050
  color="#c00"
  alias="真蓝"
/>

真蓝完整版，密度较大且有间距的低 bpm 连打，需要较高的手控与移动能力。

<Beatmap
  bid=815857
  sid=372510
  preview="THE ORAL CIGARETTES - Kyouran Hey Kids!! (monstrata) [God of Speed]"
  star=5.77
  max=1665
  color="#c00"
  alias="狂乱"
/>

经典的超低 bpm 大间距 alt 排列，相对来说排列偏向一般 flow，但由于星级高需要的硬实力较高。

<Beatmap
  bid=297463
  sid=115011
  preview="Hatsuki Yura - Yoiyami Hanabi (Lan wings) [Lan]"
  star=5.56
  max=1843
  color="#92e"
  alias="宵暗花火"
/>

宵暗花火，经典图。连打绝大多数为六分拍，偶数连打很多，组与组之间时间连续空间不连续的情况也很多，需要很强的手控与读图能力。该图实际 hp 很高较容易 fail。

<Beatmap
  bid=1151879
  sid=181957
  preview="kors k - Insane Techniques (Extended) (RLC) [( ' v ' )]"
  star=5.68
  max=2178
  color="#92e"
/>

超低 bpm 具有复杂排列的连打图，包括但不限于比较散碎的分离连打与大间距及锐角转折，需要很高的移动能力。

<Beatmap
  bid=2006080
  sid=818360
  preview="Thaehan - Sunrise (Realazy) [Azzeddine Zidane's Extra]"
  star=5.69
  max=894
  color="#92e"
/>

bpm 高，连打密度非常高，多为连续的分组连打，且滑条阵对正常发力的干扰非常大，对手控和耐力均有考验。

<Beatmap
  bid=644971
  sid=285577
  preview="Yooh - MariannE (neonat) [Collab]"
  star=6.47
  max=2496
  color="#92e"
/>

综合图，连打部分难度不超过该阶段。对于从该阶段接近毕业的玩家而言，用一个综合长图检验自己的综合实力再好不过了。如果打不动 jump 部分，那还是回去把 jump 等综合实力练好吧。jump 与连打在实力的进不上缺一不可。
`,Jf=Object.freeze(Object.defineProperty({__proto__:null,default:$f},Symbol.toStringTag,{value:"Module"})),Xf=`---
date: 2018-03-10
---

# 菜鸡杰克的初中阶切指练习推荐（进阶已补完）

<Player
id=9975427
name="Jack_Wang_"
country=15
global=1446
from="CN"
accuracy=98.73
level=102
progress=61
performance=13253
/>

## 正文

大概的难度标准：

1. 继续努力
2. 又是一个新人群扛把子，走了
3. 可以提了.jpg
4. 您诗人？？

**注意**：星数并不一定代表某一张图的实际难度。请熟悉用按照物件摆放、排列、数量等来衡量难度的方法。

### Stage 1 笨鸟先飞

<Beatmap
  bid=321946
  sid=87188
  preview="Memme - NEW Astronomas (Charles445) [Color's Another]"
  star=4.64
  max=776
/>

作为入门熟悉数量杂乱切指还是很有帮助的。od 不高，acc 不会太难打，注意HP即可。

难度：1

要求：98 acc fc

<Beatmap
  bid=154727
  sid=50322
  preview="Itou Kanako - fake me (Science Adventure Dance Remix) (ykcarrot) [Insane]"
  star=4.99
  max=759
/>

主打短切以及移动。注意 od 以及 hp。

难度：1-2

要求：95acc pass -> 任意acc S 评级 -> 98acc fc

<Beatmap
  bid=1296762
  sid=554892
  preview="xi - Zauberkugel (pishifat) [Insane]"
  star=5.05
  max=729
/>

对于 aim 要求较高，切指不会是太大难点。CS 方面稍微留意就没有问题。
难度 1-2-2.6
要求：不低于 94acc pass -> 95acc fc -> 高于 97acc

<Beatmap
  bid=763294
  sid=185250
  preview="ALiCE'S EMOTiON - Dark Flight Dreamer (Sakaue Nachi) [Twaoi's Insane]"
  star=4.87
  max=1028
  alias="魔理沙"
/>

不要被bpm吓到，整张图打起来十分舒服，可以作为前期基础练习移动和切指的保留图。

难度：1-2

要求：95acc 以上 pass -> 99acc 以上 fc

<Beatmap
  bid=568565
  sid=244799
  preview="Memme - Chinese Restaurant (Muya) [Hyper]"
  star=4.76
  max=729
  alias="中国餐馆"
/>

排列和切指数量都比较清晰的一张图，主要注意的是切分手指一定要清楚，要不然很容易少切或者多切一个。Kiai中的滑条接二连需要注意一下。

难度：1-2

要求：95acc pass -> 98acc fc

<Beatmap
  bid=420012
  sid=158075
  preview="Yooh - snow storm -euphoria- (ktgster) [EXHAUST]"
  star=4.76
  max=794
  alias="雪暴"
/>

奇数切练习，没有过多的aim难点。也可以拿ar8洗洗眼睛（笑

难度：1

要求：97acc以上fc

---

Stage Clear!

### Stage 2 切指初心者

<Beatmap
  bid=964065
  sid=442581
  preview="Memme - Cherry Blossom (Priti) [Karen's Insane]"
  star=4.83
  max=806
/>

对于刚刚练习切指一段时间的人来说，这张图很好的考验了综合切指 + 移动能力，fc 可能不是什么难事，但是 acc 就不好说了。

难度：1.5-2

要求：95acc pass -> 97acc 以上 fc

<Beatmap
  bid=1242786
  sid=586889
  preview="Eisyo-kobu - Oriental Blossom (Crystal) [EmingK's Insane]"
  star=5.11
  max=754
/>

低od，排列可能一开始稍微有点卡手，注意不要过多次重试，反而会出梗，等到对自己实力有一定信心以后可以试试高 acc。

难度：1.5-2.5

要求：97acc fc -> SS 评级

<Beatmap
  bid=306038
  sid=111611
  preview="ZUN - Kobito of the Shining Needle ~ Little Princess (sjoy) [Lunatic]"
  star=4.94
  max=1269
  alias="小公主"
/>

中低速切指，作为入门练习还是很好玩的。注意后面的短串和衔接上可能出现的问题，出现16note连打时不要慌，抬高手指控住即可。

难度：2-2.5

要求：95acc 以上 pass -> 97acc 以上 fc

<Beatmap
  bid=667282
  sid=296393
  preview="Memme - %S(M) (P o M u T a) [AngelHoney's Insane]"
  star=5.25
  max=622
/>

手控自测图，排列和切指数量极为综合，同时 od 不是很高，acc 也要注意一下

难度：2-2.5

要求：90acc pass -> 95acc pass -> 97acc 以上fc

<Beatmap
  bid=965494
  sid=399151
  preview="Camellia - crystallized (Smoothie World) [wa's Insane]"
  star=4.80
  max=1352
/>


主要是较低的AR带来的读图+炫酷排列，注意拉滑条的方式，不然 acc 会很难拉。同时要留意在连打+短切中的aim。

难度：2-2.5

要求：93acc pass -> 不低于 95acc fc -> 97acc 以上fc

<Beatmap
  bid=1295717
  sid=611095
  preview="Memme - Avalanche (Starfy) [Insane]"
  star=4.75
  max=911
/>

大量的滑条 + 短切 + 衔接，较低的 bpm 也会是一个问题，手控要求较高。滑条也将会是一个 acc 的大难点，注意拉滑条的时机。

难度：2.5-3

要求：不低于 95acc pass -> 97acc 以上fc

#### Final Boss

<Beatmap
  bid=743818
  sid=334469
  preview="ALiCE'S EMOTiON - Dark Flight Dreamer (Natsu) [Lunatic]"
  star=5.01
  max=1262
  alias="魔理沙"
/>

物件摆放较为整齐，多四方+五角星+三角跳，同时注意不要梗掉。切指方面，主打 3 连和 4 连接滑条，无太多难点，注意 bpm 可能对手控带来的影响。

难度：2.5

过关要求：不低于 95acc fc

<Beatmap
  bid=1053845
  sid=472890
  preview="Titancube - Warp Drive (DTM9 Nowa) [Another]"
  star=4.99
  max=567
/>

低 bpm 和较高的 od 带来的手控问题将会是一大难点，多偶数切和滑条短串的衔接，移动要求中等。

难度：2.5

过关要求：不低于 96acc fc

---

Stage Clear!

### Stage 3 初阶学员

<Beatmap
  bid=386140
  sid=157754
  preview="deadmau5 - Orange File (Jethh) [Extra]"
  star=5.09
  max=289
/>

acc 可能是个问题，手控要注意。

难度：2-2.5

要求:不低于 97acc fc -> SS 评级

<Beatmap
  bid=786021
  sid=352570
  preview="beatMARIO - Night of Knights (alacat) [iyasine's Lunatic]"
  star=5.08
  max=1080
  alias="夜骑"
/>

中规中矩的一张切指图，奇数偶数切都有，打起来也比较顺手。稍稍注意一下 od 对 acc可能出现的影响。

难度：2-3

要求：不低于 93acc pass -> 96acc fc -> 99acc fc

<Beatmap
  bid=917430
  sid=424743
  preview="dj TAKA feat.AiMEE - True Blue (ZZHBOY) [Insane]"
  star=5.05
  max=791
  alias="真蓝"
/>

难度稍有提升，低 bpm 和乍一听起来非常不合拍的碎切都是 cb 和 acc 的阻碍。切记要把手指抬清楚。

难度：2.5-3

要求：93acc pass -> 96acc 以上fc

<Beatmap
  bid=899859
  sid=358350
  preview="Dollscythe - Flashes (Extended) (handsome) [Atsuro's Insane]"
  star=5.26
  max=1489
/>

非常考验综合能力的一张长图，180 bpm 下的 od7.5 对于 acc 的影响全在于你自己的手控。也算是中间的一个小小检查点吧（笑

难度：2.5-3

要求：不低于 95acc pass -> 97acc 以上 fc

<Beatmap
  bid=715345
  sid=275743
  preview="Memme - Starving Days (Gamu) [Another]"
  star=5.05
  max=928
/>

难度较高，高 bpm 带来的切指压力会变得越来越大，不断的三连和 4、5 连衔接更是 acc 杀手。

难度2.5-3.5

要求：不低于 95acc fc -> 不低于 98acc fc

<Beatmap
  bid=1009793
  sid=422136
  preview="Sota Fujimori - polygon (Sebu) [tetragon]"
  star=5.16
  max=943
/>

继续进阶，kiai 段的滑条和衔接是一个难点，基础碎切没什么过于困难的地方。od 低，但是 acc 不太好打。

要求：97acc -> 99acc

<Beatmap
  bid=818272
  sid=372850
  preview="Kuroneko Dungeon - Ryoushi no Umi no Lindwurm (P o M u T a) [SUPER]"
  star=5.07
  max=809
/>

低速切指自测，注意排列对 aim 带来的可能影响。

要求：A 评级 pass -> 不低于 96acc

<Beatmap
  bid=545555
  sid=155749
  preview="xi - .357 Magnum (Akali) [Hyper]"
  star=5.14
  max=1000
/>

排列以及切指数量都非常舒服的一张中度长度图，注意手控。

要求：不低于 95acc pass -> 97acc fc -> 把我从榜上爆掉

#### Checkpoint

<Beatmap
  bid=589965
  sid=257793
  preview="Yuyoyuppe - AiAe (Fort) [Another]"
  star=5.08
  max=1720
/>

很考验稳定性的一张图，acc 方面要注意。

<Beatmap
  bid=1427700
  sid=673878
  preview="Zekk - Calling (NeilPerry) [Mirash's Another]"
  star=5.10
  max=621
/>

继续 ar8 洗眼睛（笑

其实也可以试试 hr，但是 no mod 都切不到 a 评级的话就暂时别打了。

<Beatmap
  bid=571591
  sid=242462
  preview="xi - Wish upon Twin Stars (Chaoslitz) [EXHAUST]"
  star=5.06
  max=752
/>

主要是 bpm 带来的切指问题，od影响不会太大。

要求：97acc 以上 fc

<Beatmap
  bid=557821
  sid=241526
  preview="Soleily - Renatus (Multiple Creators) [Insane]"
  star=5.27
  max=1328
  alias="重生纪元"
/>

萌新必备曲（大雾），od 和 bpm 搭配可能会出现一些问题，不过不会太大。

要求：97acc 以上 fc

---

Stage3 Cleared!

### Stage 4 开始进阶

从这里开始就不会有具体的数据和简单的总结了，一切就看你自己的喜好了。

目标其实也不太重要了（还是往fc上凹吧（大雾）），重点是这些图将会成为你不断夯实切指基础并且进阶的助力，也将让你喜欢上切指和打串，希望这个列表可以帮你做到这一点。

PS：从这里开始，切指和串可能并没有一个太过于明显的分界点，这些图我才觉得叫真的“好玩”~

<Beatmap
  bid=1521481
  sid=546820
  preview="YUC'e - Future Candy (Nathan) [Insane]"
  star=5.23
  max=1218
/>

<Beatmap
  bid=1309215
  sid=620910
  preview="O2i3 - TSLove (Fanteer) [Another]"
  star=5.12
  max=670
/>

<Beatmap
  bid=1517726
  sid=716441
  preview="Fractal Dreamers - Paradigm Shift (appleeaterx) [Collab Insane]"
  star=5.18
  max=1010
alias="范式转移"
/>

<Beatmap
  bid=1511130
  sid=714225
  preview="xi feat. Sta - Tiferet (ktgster) [Insane]"
  star=4.47
  max=1016
/>

综合切指 + flow 图（虽然不多

<Beatmap
  bid=1257134
  sid=593883
  preview="M2U - Velocity (Gero) [Irreversible's Extra]"
  star=5.14
  max=810
/>

建议放到后面打

<Beatmap
  bid=766528
  sid=340903
  preview="Gentle Stick X M2U - Ineffabilis (buhei) [Yuki's Extra]"
  star=5.18
  max=1083
  alias="无可言喻"
/>

推荐 buhei 的这组难度，都是精品低 bpm+ 分离串

<Beatmap
  bid=593441
  sid=256467
  preview="Memme - Chinese Restaurant (M o k o r i) [Kloyd's Another]"
  star=5.29
  max=755
  alias="中国餐馆"
/>

<Beatmap
  bid=1295717
  sid=611095
  preview="Memme - Avalanche (Starfy) [Insane]"
  star=4.75
  max=911
/>

注意大量 kickslider 和手控

<Beatmap
  bid=476149
  sid=153776
  preview="yuikonnu & ayaponzu* - Super Nuko World (AllStar12) [Insane]"
  star=5.21
  max=1381
  alias="超级猫世界"
/>

<Beatmap
  bid=944717
  sid=430339
  preview="Hatsuki Yura - Eclipse Parade (Vert) [Gxy's Insane]"
  star=5.12
  max=1606
/>

叶月里面相对简单的一个难度，注意手控和三分拍的串

<Beatmap
  bid=366142
  sid=147962
  preview="UPLIFT SPICE - Omega Rhythm (Jemmmmy) [lightr's Insane]"
  star=5.21
  max=1023
/>

<Beatmap
  bid=1053842
  sid=375402
  preview="onoken - Viden (-kevincela-) [toybot's Insane]"
  star=4.78
  max=786
/>

没什么难度

<Beatmap
  bid=1242785
  sid=586889
  preview="Eisyo-kobu - Oriental Blossom (Crystal) [bread's Insane]"
  star=5.23
  max=690
/>

没想到吧，又是我.jpg

<Beatmap
  bid=789819
  sid=359191
  preview="xi - ANiMA (liaoxingyao) [Spring's LV.10]"
  star=5.20
  max=790
/>

是阿尼玛.jpg

#### Checkpoint Reached!

<Beatmap
  bid=1242785
  sid=586889
  preview="Eisyo-kobu - Oriental Blossom (Crystal) [bread's Insane]"
  star=5.23
  max=690
/>

啊哈.jpg

*编者注：杰克王是真的很喜欢这首歌*

<Beatmap
  bid=887095
  sid=403427
  preview="xi - Akasha (Atsuro) [Insane]"
  star=5.35
  max=1707
/>

非常考验稳定性的一张图

<Beatmap
  bid=53554
  sid=13223
  preview="Demetori - Emotional Skyscraper ~ World's End (happy30) [Extra Stage]"
  star=5.39
  max=2012
  alias="2012"
/>

2012 没什么好说的，经典中的经典

<Beatmap
  bid=260489
  sid=97433
  preview="Traktion - The Near Distant Future (RLC) [Lapse]"
  star=5.30
  max=2677
/>

7 分钟，2600 combo，你能坚持多少呢？

### Stage 5 得心应手

<Beatmap
  bid=1383875
  sid=652668
  preview="zts - miragecoordinator (Mirash) [Insane]"
  star=4.81
  max=1621
/>

AR8

<Beatmap
  bid=772294
  sid=350295
  preview="yak_won - Sewing Machine (ktgster) [Extra]"
  star=4.71
  max=1157
  alias="缝纫机"
/>

准备好 ktg 专场了么（

<Beatmap
  bid=1569283
  sid=736694
  preview="yak_won - Sinus ~Secret Heart~ (ktgster) [Extra]"
  star=4.99
  max=981
/>

<Beatmap
  bid=485284
  sid=171421
  preview="M2U - Quo Vadis (buhei) [Extreme]"
  star=5.03
  max=1011
  alias="君往何处"
/>

<Beatmap
  bid=238265
  sid=87188
  preview="Memme - NEW Astronomas (Charles445) [Extra]"
  star=5.40
  max=919
/>

大量的变速是个不小的难点，注意分离串的 aim

<Beatmap
  bid=1371758
  sid=647546
  preview="Suigetsu Yamato - Fuujin Shoujo (Suigetsu Yamato Remix) (ktgster) [Lunatic]"
  star=5.61
  max=1221
  alias="风神少女"
/>

ktg 的风神，acc 和 cb 依旧是难点，注意 128bpm

<Beatmap
  bid=828940
  sid=352570
  preview="beatMARIO - Night of Knights (alacat) [Kotori's Extreme]"
  star=5.27
  max=1305
  alias="夜骑"
/>

没什么好说的，综合切指 pp 图

<Beatmap
  bid=369981
  sid=149749
  preview="Memme - China Dress (iyasine) [Guy's Extra]"
  star=5.64
  max=985
  alias="中国裙子"
/>

中国裙，又是一张好图

<Beatmap
  bid=446378
  sid=137665
  preview="Memme - China Dress (Tear) [cheesiest's Expert]"
  star=5.80
  max=908
  alias="中国裙子"
/>

另一个版本的中国裙，不过难度提升一个等级

<Beatmap
  bid=1501582
  sid=710329
  preview="Shawn Wasabi + YDG - Burnt Rice (feat. YUNG GEMMY) (Alphabet) [Another]"
  star=5.54
  max=750
  alias="锅巴"
/>

主要是遮挡和变来变去的间距

<Beatmap
  bid=231917
  sid=84100
  preview="Memme - Plasma Gun (Maddy) [eXtra]"
  star=5.84
  max=458
  alias="等离子枪"
/>

od9，切爆.jpg（其实也算是 pp 图

<Beatmap
  bid=736394
  sid=332622
  preview="kamome sano - sparkle (2015 rework) (-kevincela-) [Extra]"
  star=5.64
  max=1451
/>

unrank 好图！

<Beatmap
  bid=785113
  sid=347551
  preview="sky_delta - Kreuz (Side) [Another]"
  star=5.46
  max=757
/>

稍稍注意 od

<Beatmap
  bid=181253
  sid=51972
  preview="goreshit - o'er the flood (grumd) [The Flood Beneath]"
  star=5.59
  max=1923
  alias="小洪水"
/>

小洪水，照着 fc 切吧（

#### Checkpoint Reached!

<Beatmap
  bid=1242794
  sid=586889
  preview="Eisyo-kobu - Oriental Blossom (Crystal) [hm's Another]"
  star=5.74
  max=850
/>

别小看这张图，分离和间距能切死你，顺便友情送 flow

*编者注：怎么老是你……建议读者全打一遍*

<Beatmap
  sid=586889
  preview="Eisyo-kobu - Oriental Blossom (Crystal)"
  star=6.72
  difficulties=[1.73,2.18,2.93,3.51,4.13,4.68,5.10,5.11,5.23,5.29,5.60,5.63,5.72,5.74,5.90,6.03,6.17,6.21,6.22,6.31,6.41,6.72]
/>

<Beatmap
  bid=478605
  sid=202252
  preview="kors k - Playing With Fire (Sota Fujimori Remix) (xlni) [Pyrotechnics]"
  star=5.42
  max=2330
  alias="玩火"
/>

玩火，二连、碎切和高频移动自测

<Beatmap
  bid=1461560
  sid=690608
  preview="Memme - Marionette (Gamu) [Extra]"
  star=5.52
  max=1010
/>

我们来愉快的压手速吧.jpg

<Beatmap
  bid=243487
  sid=85802
  preview="RYO - Shuffle Heaven (Nemis) [Another]"
  star=5.74
  max=991
/>

主要还是考验稳定、手速和耐力

<Beatmap
  bid=1018938
  sid=422136
  preview="Sota Fujimori - polygon (Sebu) [-GN's pentagon]"
  star=5.57
  max=938
/>

看到作图的人是谁你应该就懂我的意思了.jpg

---

Stage 5 Cleared!

### Stage 6+ Stage Unknown

<Beatmap
  bid=771858
  sid=257165
  preview="Amane - TWEEKER (TicClick) [Lunatic]"
  star=5.59
  max=1597
/>

低 bpm + 切指数量综合

<Beatmap
  bid=986233
  sid=460516
  preview="sakuzyo - Senkyou Ranbu (ktgster) [EX]"
  star=5.89
  max=1539
  alias="战狂乱舞"
/>

看看你自己对 ktg 的图有多了解呢（笑

<Beatmap
  bid=107763
  sid=31750
  preview="S.S.H. - Holy Orders (Deif) [Daiguren]"
  star=5.61
  max=1519
/>

老图风格节奏 + shit 一般的间距和排列

<Beatmap
  bid=553131
  sid=158023
  preview="UNDEAD CORPORATION - Everything will freeze (Ekoro) [Lunatic]"
  star=5.86
  max=1592
  alias="冻僵"
/>

拿到 A 评级应该不难

*编者注：不难在哪*

<Beatmap
  bid=964063
  sid=442581
  preview="Memme - Cherry Blossom (Priti) [Cherry Blossom's Extra]"
  star=5.79
  max=927
/>

acc 自测

<Beatmap
  bid=381928
  sid=155749
  preview="xi - .357 Magnum (Akali) [Another]"
  star=6.05
  max=1088
/>

挺普通的一张 flow 图，注意间距

<Beatmap
  bid=661602
  sid=294247
  preview="Demetori - Rigid Paradise ~ Dawn of the Dead (Keada) [Dawn]"
  star=5.88
  max=3028
/>

耐力 + 大幅度的串，适合偶尔捡起来看看自己的手控（其实感觉和新 2012 差不多）

<Beatmap
  bid=972034
  sid=382686
  preview="aran - Ripples (DJ Noriken Remix) (Side) [Shockwave]"
  star=6.15
  max=2134
/>

od9 + 移动压力极大的切指排列

<Beatmap
  bid=725026
  sid=302535
  preview="Memme - Acid Burst (Priti) [wa's Extra]"
  star=6.09
  max=988
  alias="酸爆雨"
/>

<Beatmap
  bid=786018
  sid=352570
  preview="beatMARIO - Night of Knights (alacat) [Guy's Extra]"
  star=5.63
  max=1218
  alias="怎么又是夜骑"
/>

PP 图

<Beatmap
  bid=58063
  sid=15920
  preview="beatMARIO - Night of Knights (DJPop) [SOLO]"
  star=5.43
  max=1425
  alias="你推五个夜骑了知道吗"
/>

夜骑士二连.jpg

<Beatmap
  bid=246397
  sid=90930
  preview="goreshit - semantic compositions on death and its meaning (grumd) [Mortem Sensum]"
  star=6.11
  max=4537
/>

洪水马拉松，注意后面 222bpm 尾杀，第一次打建议 nf

<Beatmap
  bid=830322
  sid=359890
  preview="goreshit - burn this moment into the retina of my eye (grumd) [insane]"
  star=6.03
  max=2590
  alias="黑森林"
/>

黑森林，200bpm 高压切指，故事板值得欣赏

<Beatmap
  bid=1154908
  sid=543250
  preview="goreshit - o'er the flood (Hobbes2) [deluge]"
  star=6.32
  max=2042
  alias="大洪水"
/>

大洪水，对于移动、切指、读图要求极高（顺便 goreshit 三连 .jpg）

<Beatmap
  bid=1100265
  sid=517861
  preview="Intervals - The Self Surrendered (DavidEd) [Forever]"
  star=6.26
  max=2007
/>

210 bpm，不可多得的高 bpm 切指好图

#### Checkpoint Reached!

<Beatmap
  bid=1291481
  sid=611867
  preview="DJ Noriken - Turn It Up feat. Kanae Asaba (Akali) [Friendship is Magic Collab ft Cassu]"
  star=6.36
  max=2319
/>

此时，akali出现了.jpg

悄悄告诉你，这图我也没pass呢，实在读不过来（哭

<Beatmap
  bid=776951
  sid=352570
  preview="beatMARIO - Night of Knights (alacat) [The World]"
  star=6.35
  max=1054
  alias="怎么天天夜骑"
/>

究极移动测试，od 爆炸

<Beatmap
  bid=385544
  sid=104784
  preview="Kommisar - Chipstream (viptwo) [Challenge]"
  star=6.53
  max=1012
/>

你能够有多少 combo 和 acc 呢（笑

<Beatmap
  bid=95382
  sid=27752
  preview="t+pazolite - chipscape (Shiirn) [Ragnarok]"
  star=6.88
  max=2054
/>

终于来到这里了吗（望天

<Beatmap
  bid=992389
  sid=463454
  preview="BlackYooh vs. siromaru - BLACK or WHITE? (Akali) [GRANDMASTER]"
  star=6.93
  max=2910
  alias="黑与白"
/>

Good Luck.

---

千里之行，始于足下

为何不从今天开始呢？

2018.3.10`,Zf=Object.freeze(Object.defineProperty({__proto__:null,default:Xf},Symbol.toStringTag,{value:"Module"})),qf=`---
date: 2019-12-25
---

# Sayori's Stage v1.1 （1000pp+综合向）

<Player
  id=7183040
  name="Sayori_yui"
  country=0
  global=6570^
  from="CN"
  accuracy=98.41
  level=101
  progress=41
  performance=7532
/>

## 解释

这个是综合向 Stage（阶段），有可能会出现难度不均的情况（

难度从 4.0 开始算起，记为 Stage 1（最高16，即本群星数上限）

每一个 Stage 的星数取值范围为[3.9+Stage/10, 4+Stage/10）

### 🟣 Comprehensive

本 Stage 仅为参考，有可能自己觉得好听的也会放（有的可能找不到图就找了个别的比较相似的代替了）

第一次做，不好的话多提一点建议（（（草 为什么专门的这么难找 还是直接放综合好了 想练专门技能可以尝试其他的推图

~~只是 ver1.0，以后可能会修改，也可能会咕咕~~

强烈不推荐 1000pp 以下玩家的尝试本 Stage！！！

### ⚫ Black

黑色的有一定难度 请谨慎（x）努力尝试

做了一点，发现好像定要求有点难，就 pass 和 fc 两个要求吧（以后可能会修正 详情计分方式见下页

当你打不了这个 Stage 的时候，找找别的图打打，练一下技术再尝试吧（

1-12 段针对新人群 13-20 段针对进阶群

新人群从 1 段开始计算，进阶群从 11 段开始计算

请不要打超出自己水平的 Stage，谢谢合作（因为 13 段开始图就不正常了）

## 分段

ver1.1 分段规则：无论 pass 或者 fc

- 黑色计 2 分
- 紫色计 1 分
- 括号内表示进阶群要求

| Stage | Pass 要求 | Full Combo 要求 |
| :-: | :-: | :-: |
| 1 | 6 | 6(6) |
| 2 | 7 | 4(7) |
| 3 | 6 | 4(6) |
| 4 | 7 | 4(7) |
| 5 | 7 | 4(7) |
| 6 | 6 | 4(6) |
| 7 | 8 | 3(8) |
| 8 | 6 | 5(6) |
| 9 | 7 | 3(7) |
| 10 | 7 | 3(7) |
| 11 | 6 | 4(6) |
| 12 | 7 | 4(7) |
| 13 | (10) | (4) |
| 14 | (10) | (6) |
| 15 | (10) | (4) |
| 16 | (10) | (5) |
| 17 | (10) | (2) |
| 18 | (10) | (2) |
| 19 | (10) | (2) |
| 20 | (10) | (2) |

## 谱面

*编者注：前附紫色是 Comprehensive，前附黑灰色是 Black 图*

### 1

<Beatmap
  bid=210696
  sid=74110
  preview="DepXe - Jinkela is always with you (lkx_Shore) [Insane]"
  star=4.38
  max=481
  color="#92e"
  alias="金坷垃与你同在"
/>

<Beatmap
  bid=2056071
  sid=982431
  preview="DiGiTAL WiNG - Three Magic (tokiko) [Lunatic]"
  star=4.16
  max=841
  color="#92e"
/>

<Beatmap
  bid=853094
  sid=391671
  preview="BoA - MASAYUME CHASING (-Nya-) [Insane]"
  star=4.12
  max=917
  color="#92e"
/>

<Beatmap
  bid=161338
  sid=52853
  preview="Ushirokara Haiyoritai G - Taiyou Iwaku Moeyo Chaos (osuplayer111) [Insane]"
  star=4.18
  max=834
  color="#92e"
/>

<Beatmap
  bid=2240357
  sid=1070288
  preview="Raven's Jig - Neige Immaculee (Maardhen) [Un Tresor Depose par le Vent d'Hiver]"
  star=4.10
  max=684
  color="#333"
/>

### 2

<Beatmap
  bid=2056797
  sid=982841
  preview="Shimotsuki Haruka - Hoshikuzu (SuperDalouBot) [Lament of Falling Star]"
  star=4.07
  max=1146
  color="#92e"
  alias="星屑"
/>

<Beatmap
  bid=80820
  sid=23652
  preview="Xe - Flandre's Xmas Night (Lybydose) [Lunatic]"
  star=4.38
  max=870
  color="#92e"
/>

<Beatmap
  bid=1454746
  sid=687493
  preview="Toyama Nao - Ima Koko (Kibbleru) [Together]"
  star=4.41
  max=1109
  color="#92e"
/>

<Beatmap
  bid=1042025
  sid=460516
  preview="sakuzyo - Senkyou Ranbu (ktgster) [Insane]"
  star=4.51
  max=1424
  color="#333"
  alias="战狂乱舞"
/>

<Beatmap
  bid=220983
  sid=76461
  preview="Infected Mushroom - Sa'eed (Nemis) [Hope]"
  star=4.41
  max=2086
  color="#333"
/>

### 3

<Beatmap
  bid=373277
  sid=119911
  preview="OkameP - EdelWeiss ([Mahua]) [Melt's Insane]"
  star=4.30
  max=898
  color="#92e"
/>

<Beatmap
  bid=738959
  sid=333965
  preview="zts - lastendconductor (EvilElvis) [Insane]"
  star=4.41
  max=1534
  color="#333"
/>

<Beatmap
  bid=836756
  sid=382664
  preview="dBu music - Higan Kikou ~ Titanic of Stygian (Lily Bread) [Lunatic]"
  star=4.32
  max=556
  color="#92e"
/>

<Beatmap
  bid=1723594
  sid=822391
  preview="Daniele Meo - Adesso balla! (Handz Up Extended) (Andrea) [Dance!]"
  star=4.58
  max=1465
  color="#92e"
/>

<Beatmap
  bid=173015
  sid=57393
  preview="96Neko - Paintings? Oh, yeah. (Charles445) [Insane]"
  star=4.12
  max=744
  color="#92e"
/>

### 4

<Beatmap
  bid=289275
  sid=111150
  preview="BiBi - Love Novels (happy623) [Insane]"
  star=4.24
  max=937
  color="#92e"
/>

<Beatmap
  bid=48416
  sid=13019
  preview="Daisuke Achiwa - BASARA (100pa-) [BASARA]"
  star=4.67
  max=987
  color="#333"
/>

<Beatmap
  bid=546148
  sid=226381
  preview="Misawa Aki - Nostalgia (Narcissu) [Nostalgia]"
  star=4.57
  max=1580
  color="#92e"
/>

<Beatmap
  bid=1124841
  sid=448919
  preview="xi - Halcyon -Long Version- (Natsu) [Human]"
  star=4.52
  max=2040
  color="#333"
  alias="翡翠鸡"
/>

<Beatmap
  bid=1486576
  sid=697087
  preview="Y&Co. - Daisuke (kwk) [Saturnalize's Another]"
  star=4.44
  max=780
  color="#92e"
/>

### 5

<Beatmap
  bid=1352167
  sid=605290
  preview="senya - Zetsubou no Fuchi (-Mo-) [Insane]"
  star=4.84
  max=1062
  color="#333"
  alias="绝望之渊"
/>

<Beatmap
  bid=1834667
  sid=783394
  preview="OR3O - Doki Doki Forever (ft. rachie, Chi-chi, Kathy-chan*) (DTM9 Nowa) [Monika's Insane]"
  star=4.52
  max=828
  color="#92e"
  alias="DDLC"
/>

<Beatmap
  bid=130418
  sid=41244
  preview="Kuribayashi Minami - Super*Affection (Thite) [Insane]"
  star=4.73
  max=953
  color="#92e"
/>

<Beatmap
  bid=663373
  sid=292644
  preview="ZUN remixed by LeaF - Resurrection Spell (Muya) [Hyper]"
  star=4.58
  max=858
  color="#333"
/>

<Beatmap
  bid=785982
  sid=352570
  preview="beatMARIO - Night of Knights (alacat) [N a s y a's Insane]"
  star=4.62
  max=1040
  color="#92e"
  alias="夜骑"
/>

### 6

<Beatmap
  bid=979405
  sid=113458
  preview="ttbt - Makkuro Flandre S Shuuseiban (moonlightleaf) [Rumi's Insane]"
  star=4.82
  max=1167
  color="#92e"
/>

<Beatmap
  bid=557980
  sid=145976
  preview="Meramipop - Rakujitsu Romance (Loneight) [Romance]"
  star=4.90
  max=1832
  color="#333"
  alias="落日浪漫"
/>

<Beatmap
  bid=763294
  sid=185250
  preview="ALiCE'S EMOTiON - Dark Flight Dreamer (Sakaue Nachi) [Twaoi's Insane]"
  star=4.87
  max=1028
  color="#92e"
  alias="魔理沙"
/>

<Beatmap
  bid=114716
  sid=35375
  preview="Nanahira - Frightfully-insane Flan-chan's frightful song (Sherry) [Insane]"
  star=4.88
  max=1022
  color="#92e"
/>

<Beatmap
  bid=195548
  sid=67248
  preview="Makishima Yuki, Yoshikawa Yukako & Fujita Saki - Kiseki no Kakera (DarknessAngel) [D.N.Angel]"
  star=4.85
  max=942
  color="#92e"
  alias="奇迹的碎片"
/>

### 7

<Beatmap
  bid=2160150
  sid=1033156
  preview="DJ Genki vs. Camellia feat. moimoi - Sunshine (Smug Nanachi) [Insane]"
  star=4.95
  max=1458
  color="#333"
/>

<Beatmap
  bid=1501761
  sid=311328
  preview="Foreground Eclipse - Storytellers (Seni) [Lunatic]"
  star=4.79
  max=1250
  color="#333"
/>

<Beatmap
  bid=959058
  sid=442587
  preview="Days N' Daze - Misanthropic Drunken Loner (pishifat) [Insane]"
  star=4.89
  max=1008
  color="#92e"
/>

<Beatmap
  bid=1921936
  sid=905158
  preview="xi remixed by cosMo@bousouP - FREEDOM DiVE [METAL DIMENSIONS] (Cherry Blossom) [Hyper]"
  star=4.55
  max=1498
  color="#92e"
  alias="FD"
/>

<Beatmap
  bid=737493
  sid=302756
  preview="Nanahoshi Kangengakudan - Meikaruza (pkk) [Insane]"
  star=4.62
  max=1584
  color="#333"
/>

### 8

<Beatmap
  bid=363043
  sid=125380
  preview="Duca - COLD BUTTERFLY (Zweib) [Melt's Insane]"
  star=4.91
  max=1132
  color="#92e"
/>

<Beatmap
  bid=342423
  sid=136902
  preview="Hanatan - Shiwa (W h i t e) [Insane]"
  star=4.84
  max=1368
  color="#92e"
/>

<Beatmap
  bid=155064
  sid=50462
  preview="Lon - Yuru Fuwa Jukai Girl (phonic) [Insane]"
  star=4.88
  max=824
  color="#92e"
/>

<Beatmap
  bid=1248109
  sid=588211
  preview="96neko - Buriki no Dance (Lasse) [Insane]"
  star=4.98
  max=1216
  color="#333"
  alias="马口铁之舞"
/>

<Beatmap
  bid=1406645
  sid=664636
  preview="Narae - SPiCa (timemon) [Insane]"
  star=4.69
  max=868
  color="#92e"
/>

### 9

<Beatmap
  bid=2192460
  sid=1034381
  preview="Amemori Sayo x Kudou Chitose - White Lily (Yugu) [Tt's Insane]"
  star=5.00
  max=1079
  color="#333"
  alias="白百合"
/>

<Beatmap
  bid=733678
  sid=331150
  preview="Halozy - Genryuu Kaiko (pkk) [Death Melody]"
  star=5.10
  max=1618
  color="#333"
  alias="源流怀古"
/>

<Beatmap
  bid=120080
  sid=37313
  preview="U - Ha-tenya? (biwako) [Insane]"
  star=5.02
  max=890
  color="#92e"
/>

<Beatmap
  bid=1680025
  sid=800070
  preview="Meramipop - Unknown x known - DYES IWASAKI Remix - (Lasse) [Lunatic]"
  star=5.14
  max=1358
  color="#92e"
/>

<Beatmap
  bid=1784314
  sid=840827
  preview="Shinra-bansho - Kaiten (DJ Lucky) [Shani's Insane]"
  star=5.15
  max=1627
  color="#92e"
  alias="回转"
/>

### 10

<Beatmap
  bid=336295
  sid=134008
  preview="ClariS - Colorful (Laurier) [Insane]"
  star=5.00
  max=1482
  color="#92e"
/>

<Beatmap
  bid=116938
  sid=14309
  preview="Demetori - Silent Voyage to Eternity (brikel) [Extra]"
  star=5.21
  max=1382
  color="#333"
  alias="鼠之力"
/>

<Beatmap
  bid=521280
  sid=223092
  preview="tsunamix_underground - Period. ~ Seishin no Kousoku to Jiyuu o Tsukamu Jouka (TicClick) [Lunatic]"
  star=5.01
  max=784
  color="#333"
/>

<Beatmap
  bid=611349
  sid=253313
  preview="LiSA - EGOiSTiC SHOOTER (Asphyxia) [alacat's Insane]"
  star=4.97
  max=980
  color="#92e"
/>

<Beatmap
  bid=1268419
  sid=600246
  preview="Yousei Teikoku - Shadow Corps (Lune Hivernale) [Insane]"
  star=4.90
  max=1597
  disabled=false
  color="#333"
/>

### 11

<Beatmap
  bid=658387
  sid=292077
  preview="Reol - Asymmetry (Gaia) [Kibboo's Insane]"
  star=4.94
  max=1391
  color="#92e"
  alias="不对称"
/>

<Beatmap
  bid=53554
  sid=13223
  preview="Demetori - Emotional Skyscraper ~ World's End (happy30) [Extra Stage]"
  star=5.39
  max=2012
  color="#333"
  alias="2012"
/>

<Beatmap
  bid=1644943
  sid=783394
  preview="OR3O - Doki Doki Forever (ft. rachie, Chi-chi, Kathy-chan*) (DTM9 Nowa) [Tragic Love Story]"
  star=5.04
  max=901
  color="#92e"
  alias="DDLC"
/>

<Beatmap
  bid=137840
  sid=43960
  preview="Xelia - Illumiscape (Kanna) [Another]"
  star=5.29
  max=743
  color="#92e"
/>

<Beatmap
  bid=1183543
  sid=559622
  preview="Duca - Shiawase no Otoshimono (Kencho) [Clover]"
  star=4.96
  max=1123
  color="#92e"
  alias="幸福的遗落物"
/>

### 12

<Beatmap
  bid=1786690
  sid=850874
  preview="Xe vs. cYsmix - Youkai Saisandou -Oriental Swing- (Yami Sun) [Arcareh's Swing]"
  star=5.52
  max=1736
  color="#333"
/>

<Beatmap
  bid=773195
  sid=347947
  preview="Koven - Get This Right (Aiceo) [byfar's Extra]"
  star=5.47
  max=566
  color="#92e"
/>

<Beatmap
  bid=1501410
  sid=694402
  preview="Camellia vs Akira Complex - Railgun Roulette (VIP) (NeilPerry) [LowBot's Insane]"
  star=5.26
  max=1661
  color="#333"
/>

<Beatmap
  bid=702778
  sid=315150
  preview="TAMUSIC - Kyuu Jigoku Kaidou wo Yuku (Xanandra) [Insane]"
  star=5.00
  max=1047
  color="#92e"
  alias="旧地狱街道之旅"
/>

<Beatmap
  bid=140821
  sid=44967
  preview="Memme - BSPower Explosion (AngelHoney) [Another]"
  star=5.46
  max=905
  color="#92e"
/>

### 13

<Beatmap
  bid=1605985
  sid=762867
  preview="V.A. - streams for beginner (Firika) [DJ Sharpnel-20031023-179]"
  star=5.40
  max=1733
  color="#333"
/>

<Beatmap
  bid=1781960
  sid=852544
  preview="Yonezu Kenshi - LOSER (Skystar) [WINNER]"
  star=5.51
  max=1328
  color="#333"
  alias="你"
/>

<Beatmap
  bid=176960
  sid=58951
  preview="UNDEAD CORPORATION - Yoru Naku Usagi wa Yume o Miru (Smoothie) [Lunatic]"
  star=5.45
  max=1505
  color="#333"
alias="夜啼的兔子做着梦 / 夜啼兔"
/>

<Beatmap
  bid=478605
  sid=202252
  preview="kors k - Playing With Fire (Sota Fujimori Remix) (xlni) [Pyrotechnics]"
  star=5.42
  max=2330
  color="#333"
  alias="玩火"
/>

<Beatmap
  bid=217651
  sid=76396
  preview="Rohi - Kakuzetsu Thanatos (NatsumeRin) [Pokie]"
  star=5.56
  max=1422
  color="#333"
/>

### 14

<Beatmap
  bid=1613769
  sid=762867
  preview="V.A. - streams for beginner (Firika) [F-777 -Airborne Robots-200]"
  star=5.67
  max=900
  color="#333"
/>

<Beatmap
  bid=657054
  sid=257793
  preview="Yuyoyuppe - AiAe (Fort) [Expert]"
  star=5.61
  max=1950
  color="#333"
/>

<Beatmap
  bid=1045757
  sid=490662
  preview="Shoji Meguro - Kimi no Kioku (Aethral Remix) (Akali) [Remembrance]"
  star=5.78
  max=2257
  color="#333"
  alias="你的记忆"
/>

<Beatmap
  bid=1052353
  sid=494225
  preview="Teminite - Beastmode (Yamicchi) [GONE WILD]"
  star=5.31
  max=1704
  color="#333"
/>

<Beatmap
  bid=776752
  sid=330566
  preview="Ray - Hajimete Girls! (Meyrink) [Skystar's Pin Pon~]"
  star=5.56
  max=657
  color="#333"
/>

### 15

<Beatmap
  bid=1213586
  sid=572790
  preview="HoneyWorks - Boku ga Namae o Yobu Hi feat.Mochizuki Souta (CV:Kaji Yuki) (Haruto) [Confession]"
  star=5.56
  max=1748
  color="#92e"
  alias="我呼唤你的日子"
/>

<Beatmap
  bid=1922594
  sid=914120
  preview="A Himitsu - Lost Within (Wezeh) [Lonely]"
  star=5.66
  max=1735
  color="#92e"
/>

<Beatmap
  bid=246099
  sid=90784
  preview="a_hisa - Anhedonia (RLC) [Euphoria]"
  star=5.97
  max=3588
  color="#333"
/>

<Beatmap
  bid=1139789
  sid=504171
  preview="Yunomi - Wakusei Rabbit (feat. TORIENA) (Nathan) [PYON]"
  star=5.87
  max=1422
  color="#333"
  alias="行星兔子"
/>

<Beatmap
  bid=2204892
  sid=1055224
  preview="ABSOLUTE CASTAWAY - Halloween Night Parade (Hey lululu) [Halloween Party!]"
  star=5.56
  max=1706
  color="#333"
/>

### 16

<Beatmap
  bid=821298
  sid=374937
  preview="Chihiro Yonekura - Koiseyo Otome! (Game Size) (Shioi) [Extra]"
  star=5.48
  max=555
  color="#92e"
  alias="恋爱少女"
/>

<Beatmap
  bid=806584
  sid=358353
  preview="HIELO - La Posesion Du Mimi - ILLUMINATEK Rmx - HIELO Refuck! (Euny) [Sweet vanilla love]"
  star=5.73
  max=1951
  color="#333"
/>

<Beatmap
  bid=131564
  sid=41686
  preview="Lily - Scarlet Rose (val0108) [0108 style]"
  star=5.57
  max=1441
  color="#333"
  alias="血玫瑰"
/>

<Beatmap
  bid=246280
  sid=90784
  preview="a_hisa - Anhedonia (RLC) [Collab Extra]"
  star=5.81
  max=3505
  color="#333"
/>

<Beatmap
  bid=351996
  sid=100049
  preview="Himeringo - Yotsuya-san ni Yoroshiku (RLC) [Skystar's Extra]"
  star=5.77
  max=997
  color="#333"
  alias="四谷"
/>

### 17

<Beatmap
  bid=978628
  sid=456691
  preview="kors k - Insane Techniques (Extended) (sukiNathan) [Hi-Tech]"
  star=6.16
  max=2271
  color="#333"
/>

<Beatmap
  bid=750846
  sid=339400
  preview="Halozy - Kanshou no Matenrou (sodarose) [The Great Magician]"
  star=5.77
  max=2012
  color="#333"
/>

<Beatmap
  bid=931860
  sid=403427
  preview="xi - Akasha (Atsuro) [N/A's Another]"
  star=5.90
  max=1977
  color="#333"
/>

<Beatmap
  bid=1060951
  sid=466550
  preview="Sharlo - Fantastic Future (sahuang) [yf's Expert]"
  star=5.88
  max=1435
  color="#333"
/>

<Beatmap
  bid=1694583
  sid=806859
  preview="Camellia feat. Nanahira - Bassdrop Freaks (2018 &quot;Redrop&quot; ver.) (Mir) [Lasse's Extra]"
  star=5.86
  max=2152
  color="#333"
  alias="贝斯大老婆"
/>

### 18

<Beatmap
  bid=917176
  sid=424600
  preview="Camellia - Exit This Earth's Atomosphere (Girl) [GiRLC's Intangible]"
  star=6.07
  max=2195
  color="#333"
  alias="大气层"
/>

<Beatmap
  bid=904030
  sid=417492
  preview="Camellia - dreamless wanderer (deetz) [lost]"
  star=6.16
  max=1737
  color="#333"
/>

<Beatmap
  bid=815857
  sid=372510
  preview="THE ORAL CIGARETTES - Kyouran Hey Kids!! (monstrata) [God of Speed]"
  star=5.77
  max=1665
  color="#333"
  alias="狂乱"
/>

<Beatmap
  bid=778603
  sid=353398
  preview="Nanahoshi Kangengakudan feat.Matsushita - Dance Number o Tomo ni (pkk) [Dance Number]"
  star=5.84
  max=2064
  color="#333"
  alias="数字舞"
/>

<Beatmap
  bid=734927
  sid=331821
  preview="DJ Noriken - #The_Relentless_(Modified) (captin1) [Unstoppable]"
  star=5.95
  max=2560
  color="#333"
/>

### 19

<Beatmap
  bid=994370
  sid=464398
  preview="Ceui - Hana ni Natta Shounen no Shinwa (_MiaoFUuU_) [Calendula]"
  star=5.81
  max=3533
  color="#333"
/>

<Beatmap
  bid=933228
  sid=432822
  preview="NOMA - Brain Power Long Version (Skystar) [Overdrive]"
  star=6.01
  max=2940
  color="#333"
  alias="脑力"
/>

<Beatmap
  bid=1115984
  sid=525840
  preview="kamome sano - starlights feat. TEA (MoeMoeKyunNN) [Labradorite]"
  star=5.97
  max=2034
  color="#333"
/>

<Beatmap
  bid=1083202
  sid=509341
  preview="REOL - YoiYoi Kokon (Pho) [Timeless Dance]"
  star=5.88
  max=1814
  color="#333"
  alias="宵宵古今"
/>

<Beatmap
  bid=550235
  sid=237768
  preview="Our Stolen Theory - United (L.A.O.S Remix) (Asphyxia) [Infinity]"
  star=6.09
  max=2275
  color="#333"
/>

### 20

<Beatmap
  bid=151229
  sid=48979
  preview="Hatsune Miku - Mythologia's End (val0108) [Myth0108ia]"
  star=6.23
  max=2368
  color="#333"
/>

<Beatmap
  bid=1717851
  sid=819349
  preview="t+pazolite - Party in the HOLLOWood feat. Nanahira (eiri-) [EXTreme]"
  star=5.99
  max=1485
  color="#333"
/>

<Beatmap
  bid=1479802
  sid=698737
  preview="Masayoshi Minoshima feat.nomico - Lost Emotion (Amane UK Hardcore Remix) (xLolicore-) [Emotionless]"
  star=6.19
  max=2180
  color="#333"
/>

<Beatmap
  bid=1309290
  sid=620910
  preview="O2i3 - TSLove (Fanteer) [Extra]"
  star=6.11
  max=785
  color="#333"
/>

<Beatmap
  bid=1662480
  sid=792606
  preview="PSYQUI - Hype feat. Such (NeilPerry) [Phosphene]"
  star=6.43
  max=1963
  color="#333"
/>`,Qf=Object.freeze(Object.defineProperty({__proto__:null,default:qf},Symbol.toStringTag,{value:"Module"})),n6={class:"easy-wallet-container"},e6=["onClick"],a6={class:"year-title"},t6={class:"count-badge"},i6={class:"toggle-text"},r6={class:"year-content"},s6={class:"card-grid"},o6=["disabled","onClick"],l6={class:"page-info"},c6=["disabled","onClick"],u6="article/recommend",Ha=12,d6={__name:"EasyWallet",setup(n){const e=Object.assign({"../../article/recommend/-Yuki_Noa-.md":Nf,"../../article/recommend/BenZn.md":Lf,"../../article/recommend/Muziyami.md":Ff,"../../article/recommend/README.md":Kf,"../../article/recommend/SIyuyuko.md":jf,"../../article/recommend/Syzygy5593.md":Uf,"../../article/recommend/atahana.md":Wf,"../../article/recommend/hiiragi_kagami.md":Jf,"../../article/recommend/jack_wang_.md":Zf,"../../article/recommend/sayori_yui.md":Qf}),a=h=>{let g="";if(typeof h=="string")g=h;else if(h&&typeof h.default=="string")g=h.default;else if(h)try{g=String(h.default||"")}catch{g=""}if(!g)return{fm:{},bodyHeading:"",extractedId:"",extractedName:""};const _={};let S="",v="",k="";try{let I=0,z=g.length;for(let O=0;O<g.length;O++)if(g[O]===`
`&&(I++,I>=50)){z=O+1;break}const C=g.slice(0,z),A=C.split(/\r?\n/),M=A.length;let R=!1,D=!1;for(let O=0;O<M;O++){const j=A[O];if(!j)continue;const P=j.trim();if(P==="---")if(D){if(R){R=!1;continue}}else{D=!0,R=!0;continue}if(R){const Q=j.indexOf(":");if(Q!==-1){const V=j.slice(0,Q).trim().toLowerCase();let J=j.slice(Q+1).trim();J=J.replace(/^['"](.*)['"]$/,"$1"),_[V]=J}}else!S&&P.startsWith("#")&&(S=P.replace(/^#+\s*/,"").replace(/\\/g,""))}const x=C.match(/<Player\b[^>]*\bid=["']?(\d+)["']?/i),F=C.match(/<Player\b[^>]*\bname=["']([^"']+)["']/i);x&&(v=x[1]),F&&(k=F[1])}catch{}return{fm:_,bodyHeading:S,extractedId:v,extractedName:k}},t=[],i=Object.entries(e||{});for(let h=0;h<i.length;h++){const g=i[h],_=g[0],S=g[1];if(_.toLowerCase().includes("readme"))continue;const v=_.split("/"),I=(v[v.length-1]||"").replace(".md","").trim(),{fm:z,bodyHeading:C,extractedId:A,extractedName:M}=a(S),R=z.name||M||I,D=z.title||C||"暂无标题...",x=z.id||A||I,F=z.color||Ma(x);let O="未分类";if(z.date){const Q=new Date(z.date);if(!isNaN(Q.getTime()))O=String(Q.getFullYear());else{const V=String(z.date).match(/\d{4}/);V&&(O=V[0])}}const P=`/${u6.trim().replace(/^\/+|\/+$/g,"")}/${I}.html`;t.push({id:x,name:R,title:D,color:F,link:P,date:z.date||"",year:O})}t.sort((h,g)=>g.date&&h.date?new Date(g.date).getTime()-new Date(h.date).getTime():g.year.localeCompare(h.year));const r=B(()=>{const h={};return t.forEach(_=>{h[_.year]||(h[_.year]=[]),h[_.year].push(_)}),Object.keys(h).sort((_,S)=>_==="未分类"?1:S==="未分类"?-1:S.localeCompare(_)).map(_=>({year:_,posts:h[_]}))}),s=vn({}),o=vn({}),l=h=>s.value[h]||1,u=(h,g)=>{s.value[h]=g},c=h=>Math.ceil(h.length/Ha),d=(h,g)=>{if(g.length<=Ha)return g;const S=(l(h)-1)*Ha;return g.slice(S,S+Ha)},m=(h,g=[])=>o.value[h]!==void 0?o.value[h]:g.length<=Ha,p=(h,g=[])=>{o.value[h]=!m(h,g)},w=h=>{if(h==="未分类")return"var(--vp-c-bg-elv, #f9f9f9)";let _=Ma(String(h)).replace("#","");_.length===3&&(_=_.split("").map(z=>z+z).join(""));const S=parseInt(_,16),v=S>>16&255,k=S>>8&255,I=S&255;return`linear-gradient(rgba(${v}, ${k}, ${I}, 0.12), rgba(${v}, ${k}, ${I}, 0.12)), var(--vp-c-bg-elv, #f9f9f9)`};return(h,g)=>(N(),W("div",n6,[(N(!0),W(gn,null,ie(r.value,_=>(N(),W("div",{key:_.year,class:"year-section",style:En({background:w(_.year)})},[T("div",{class:Kn(["year-header",{collapsed:!m(_.year,_.posts)}]),onClick:S=>p(_.year,_.posts)},[T("div",a6,[T("span",null,[he(en(_.year)+" 年 ",1),T("span",t6,"("+en(_.posts.length)+"x)",1)]),T("span",i6,en(m(_.year,_.posts)?"收起 ▲":"展开 ▼"),1)])],10,e6),Ca(T("div",r6,[T("div",s6,[(N(!0),W(gn,null,ie(d(_.year,_.posts),S=>(N(),Pn(ys,{key:S.id,id:S.id,name:S.name,title:S.title,color:S.color,link:S.link,date:S.date},null,8,["id","name","title","color","link","date"]))),128))]),_.posts.length>Ha?(N(),W("div",{key:0,class:"pagination-controls",onClick:g[0]||(g[0]=ca(()=>{},["stop"]))},[T("button",{class:"page-btn",disabled:l(_.year)===1,onClick:S=>u(_.year,l(_.year)-1)}," 上一页 ",8,o6),T("span",l6," 第 "+en(l(_.year))+" / "+en(c(_.posts))+" 页 ",1),T("button",{class:"page-btn",disabled:l(_.year)>=c(_.posts),onClick:S=>u(_.year,l(_.year)+1)}," 下一页 ",8,c6)])):mn("",!0)],512),[[Oa,m(_.year,_.posts)]])],4))),128))]))}},m6=be(d6,[["__scopeId","data-v-e1d18400"]]),p6=`---
date: 2007-07-27
type: unknown
---

# 不知来源的遗言

## 99p 的出群遗言

我可能是本群进度最慢的那一批人之一了，从去年3月进群到今年7月出群，总计在群时长1年半。
希望大家不会像我一样龟速加pp，能早日出群。
另外提醒大家，如果一直打同一个图取不到想要的成绩，可以试试换一张图玩玩或者歇一下，可能会对手感有帮助哦。
最后祝大家早日升上3kpp，早日出群。

## AI 的遗言

我也是打了 4 年 osu std，但直到今年才加的萌新群（加的时候我记得是1kpp出头吧），那就在这即将退群之际，在这写写我的游玩经历以及相关感想，虽然我觉得大部分人不需要参考我这个奇葩（

我一直以来都奉行着“只要 A 就好，combo 什么的无所谓”的态度打歌，因此我天天越级，萌新群以5.7 为超星标准，而我日常打的图都是 6.2，最高到过 7.2。这么做有好有坏吧，好处是，水平长进的很快，坏处是，acc 和 pp 不太好看。所以在很长的一段时间内，我pp没有加过，要加，那也是每天 +1 的速度（

我一直以为我这样是正常的，直到我加了群，发现好多人都不是以我这种态度打歌（

我还是更推荐群里的人他们的方法，不越级，抓 combo，不要学我

接下来是一些我总结的技巧

1. 键盘需要有一定高度，有一定高度才能适合手发力，并且键盘要放在桌子边缘位置，让小臂部分悬空，这都能帮助你去发力
2. 如果你觉得笔很滑，拿不住，那我非常推荐你用羽毛球手胶粘上去防滑。不需要绕太多层，一层就好，剩下的可以备用
3. 不要太过于追求握笔的姿势，别人的握笔不一定适合你，自己怎么舒服怎么来就好
4. 如果感觉游戏很怪，一定一定要看群里的优化教程，我之前一直觉得游戏音频有问题，前几天看到群里的教程，因此解决了，然后就拿下 206pp 走了（
5. 如果你有一天手感火热，接连拿下好成绩，那就不要放过这个机会，勇敢的挑战曲子争取拿下新bp1吧
6. 不能光打跳图，不要只玩单戳，一定一定要全面发展。以后的路上，高 bpm 跳，串，跳接串基本上占据了每一首曲子，普通的单双或许不适应这些了。所以要尽早开始练强双以及串图，防止极度偏科的情况
7. 尽量用 lazer 端，lazer 端的相关优化能帮助你更好的打歌

那大概就这么多吧，最后祝群友早日拿下 190pp，早日刷到 3000pp

以上。

## Mijikuru 的遗言

![](/images/lastwords/0-1.jpg)

## Amprevil 的遗言

去听反重力的街

## LANGU 的遗言

### 原文

2024年9月13日 大家好我是LANGU一名普通的osu！玩家，2k9pp（140h游玩时间）了，想一想我的出群遗言吧。

首先我是在2022年4月注册的osu！账号，不过到了今年（2024年4月），我才算正式入坑osu！用鼠标玩了两天，立马就决定买数位板了。

建议萌新入坑那几天不要着急找pp图，先把基本的练练（大概到3*图随便pass，4*能打一打的地步），不知道玩什么图，可以在官网铺面从高游玩次数往下玩一般质量都挺高的，大概到了4*能随便pass的时候就能找一些pp图玩玩了。（4*阶段是个很漫长的阶段，当你1k多pp的时候大多都是玩4*图，大概1k9左右能pass一些简单的5*图）。2kpp的时候，我的情况是刷DT图，各种DT图使我从2kpp到2k5pp只花了20h！遇到瓶颈的话，多练。（￣︶￣）↗


### 利用AI优化语言后的版本

<mark>游戏心得与成长轨迹：从osu！新手到2k9pp的历程</mark>

转眼间，2024年9月13日已至，我的osu！之旅已累积了令人瞩目的140小时游戏时间，标志着我达到了2k9pp的里程碑。在这值得纪念的时刻，我想分享一些心得，作为我“出群”前的遗言，同时也为刚踏入osu！世界的萌新们提供一些建议。

<mark>初识osu！：从旁观者到参与者</mark>

我的osu！之旅始于2022年4月，那时的我仅是注册了一个账号，对游戏的深度与魅力还知之甚少。直到一年后，即2024年的春天，我才真正踏入了这个充满挑战与乐趣的世界。起初，我使用鼠标尝试了几日，便打算使用数位板游玩。这次转变，不仅提升了我的游戏体验，也为我后续的快速成长奠定了基础。

<mark>新手期的策略：稳扎稳打，循序渐进</mark>

对于刚加入osu！的新手而言，我强烈建议在最初的几天里不要急于挑战高难度或追求PP（Performance Points）增长。相反，应该专注于基础技能的打磨，比如稳定性、节奏感以及对游戏机制的理解。当你能轻松通过3星图，并在4星图上有所建树时，再考虑向更高难度进发。为了找到适合自己的练习曲目，不妨浏览osu！官网的热门铺面，这些高游玩次数的地图往往质量上乘，是提升技能的绝佳选择。

<mark>跨越4星门槛：耐心与坚持的回报</mark>

4星图是一个重要的分水岭，也是提升过程中相对漫长的阶段。在这个阶段，你可能会花费大量时间在重复练习与尝试中，但请相信，每一次失败都是向成功迈进的一步。当你终于能够轻松驾驭4星图时，那种成就感将无比珍贵。此时，你可以开始尝试寻找一些PP图，通过挑战它们来进一步提升自己的实力。

<mark>冲刺2kpp：DT图的魔力</mark>

当我接近并突破2kpp时，我发现了一个快速提升PP的秘诀——DT图（Double Time，即速度加倍的地图）。这些地图虽然难度大增，但也能带来成倍的PP奖励。在短短20小时内，我通过不断刷DT图，成功地将PP提升到了2k5pp。当然，这也离不开我之前打下的坚实基础和对游戏机制的深刻理解。

<mark>面对瓶颈：持续练习，永不言弃</mark>

在osu！的旅途中，遇到瓶颈是在所难免的。但请记住，每一次瓶颈都是成长的契机。面对困难，不要轻易放弃，而是要通过持续、有针对性的练习来突破自我。相信自己的潜力，坚持下去，你终将能够跨越障碍，迎来新的飞跃。

最后，我想对所有osu！的玩家们说：无论你是刚入门的新手还是经验丰富的老鸟，都请享受这个过程中的每一刻。osu！不仅是一款游戏，更是一个充满挑战与自我超越的舞台。让我们一起在这个舞台上绽放属于自己的光彩吧！

最后放一些截图：

第一个100pp

<Score
  bid=1520956
  sid=720240
  preview="Drop - Granat (Half) [Insane]"
  star=5.02
  max=230
  mode="o"
  accuracy=96.12
  combo=229
  rank="s"
  performance=116
/>

100h，2000pp

20h，涨500pp

截止今天2024/9/13的bp

<Score
  bid=1711830
  sid=816264
  preview="55x55 - MY REZHEM KINOLENTY (feat. Cut The Crap) (Shmiklak) [CUT THE INSANE]"
  star=3.65
  max=158
  mode="o"
  accuracy=98.84
  combo=158
alias="我们裁切着胶片"
  rank="s"
  performance=166
/>

部落冲突摆了个字阵，印有osu！

![](/images/lastwords/0-2.jpg)

我的世界，和朋友玩的存档。但是没有玩osu!的朋友

![](/images/lastwords/0-3.jpg)

大概就这些吧！希望早日3kpp！！

<Score
  bid=2449788
  sid=1174505
  preview="The Cab - Angel With A Shotgun (Sped Up Ver.) (Sotarks) [Insane]"
  star=3.80
  max=315
  mode="o"
  accuracy=96.41
  combo=315
  rank="s"
  performance=143
/>

2024/9/14 3000pp！！

## 喷喷遗言

很幸运，一口气刷出了新人群 个人认为自己最开始是一个aim玩家，不过最近有打串的想法，所以练得比较多。

回顾自己一路下来，挫折非常多，以至于很多时候都想退游，不过这都是过去话了。

没什么好说的，大家一定要相信努力是一定会有回报的，一定要对自己保持信心。飞升会在某一个时刻到来的。

以上.

## KonoYukid 的出群遗言

我不想似

## Liniesama 的出群遗言

2024.11.14入坑osu!

到2025.1.8

55天

3003pp

没啥好说的 狠狠开炼就完事了 玩不好就多骂骂自己 为什么我就不行？

## 栗子的出群遗言

咦？我什么时候来过？又是什么时候满足了出去的条件呢？

## 墨苏の出群遗言

不知不觉打着打着就3000pp了，果然还是得少刷短pp

一直以来打的都没有acc(羡慕高acc)

建议新人少越级，多练习连打和acc

手痛就多休息，尽快找到适合自己的发力姿势，打久了就不会那么容易手痛了

——end

`,f6=Object.freeze(Object.defineProperty({__proto__:null,default:p6},Symbol.toStringTag,{value:"Module"})),h6=`---
date: 2024-08-05
---

# Erina-（猫と幽靈）的出群遗言

<Player 
  id=10364008
  name="Erina-"
  country=4211
  global=260841
  from="CN"
  accuracy=94.52
  level=97
  progress=5
  performance=3032
/>

这里是 Erina-,也是猫と幽靈，一只喜欢交朋友的猫耳幽灵，你可以叫我幽灵怎样都好，朋友一般叫我猫猫（大概是因为比较顺口叭），但是请严格区分猫幽灵与幽灵猫喔

[https://osu.ppy.sh/users/10364008](https://osu.ppy.sh/users/10364008)这是我的玩家页面，欢迎 mumu 喵（ mu了请一定告诉我!）

此前声明（神圣屏障的败露球菇的钨合金棍的心之钢的阴阳吸星石的免责声明叠甲保命）：本文不宣扬越级行为，请不要学我，越级需要适时适当，警惕乱越级行为

今天是8月5号，我像往常一样打开了osu!，看着自己右下角的2985pp，我深知自己不能再刷pp了，我不愿离开新人群的大家，这里有我的好多好朋友，他们支撑着我一次又一次打开这款游戏，即使出群，我也更想用一张四分钟的长图 来打破3kpp这一壁垒。于是我决定越级，去打六星图，只为了不刷pp，起初一切都很顺利，似乎根本就不可能刷出pp，直到我遇上了osu史上最凶最恶的魔王——sotarks 与他的Black Rover。

<Score
  bid=1642274
  sid=781509
  preview="Vickeblanka - Black Rover (TV Size) (Sotarks) [Extra]"
  star=5.90
  max=534
  mode="o"
  accuracy=90.59
  combo=532
  rank="a"
  performance=175
/>

我深知这是一张著名pp图，但当我糊上那一段大跳时，已经来不及回头了，新人群，堂堂完结

## 幽灵与OSU!的故事

事已至此，我还是想讲讲我和OSU!的故事，大约会从…宇宙起源开始讲？ 

(因为太长太聒噪嫌长的可以直接跳过这段啦x)

![](/images/lastwords/10364008-1.jpg)

这是我

![](/images/lastwords/10364008-2.jpg)

这是我的盆地（

没错我是个18年的老东西，2w+pc才3kpp，acc还低x

### 初期 

2017年6月，不知道在什么情况下注册了账号，但此时我还没有开始玩这款游
戏

2018年1月，那时的我，还在上初中，我在b站up主尚在天国EX的视频 【游戏众生相】模因：表情包背后的迷思中了解到了osu这个游戏，遂开始游玩并深深地被这个游戏所吸引，我选择的是强双指法，那时的我对这个游戏充满热情，最肝的时候一天能够play一千次，尽管不会算作1000pc，能够对着一张喜欢的图retry300 次，但是和大多数人不同，我对fc并不热情，这也注定了我的acc比绝大多数人都要低也奠定了我后期的主要游玩方向。

2018 年2月，也许是我最肝的时期，并且也赶上了寒假可以放纵玩（因为没有数位板，我在半个月的鼠标后发现了家里的手写板可以用来充当数位板用，于是有了简陋的板键），每天打开电脑，我几乎只玩osu这一款游戏，但在长期的漫无目的的游玩下也渐渐感到乏味，游玩频率也渐渐降低了，我去过mp房，也惊叹于大佬们能够打我几乎看不懂的五星图。

2018 年 4 月，我pass了第一张五星图，但此时我还没有fc过三星图，直到五月初才fc了第一张三星，我的acc也因为越级一路走低，从那以后便走上了越级的不归路（不要学）

2018 年5月，我开始混迹于国人mp房，交了许多朋友，但是我没能好好珍惜，在之后的一次退坑再回坑中断了联系。我也正式入手了数位板，是 wacom 的ctl472，这块板子一直陪我至今（除了弄丢过两次笔x）,我也开始在b站上上传我的osu视频，尽管观看量惨淡但是玩osu的大家都很友善，给了我很多鼓励

在那之后，随着我对osu的热情的散去，以及学业等一系列问题，我渐渐淡出了这个游戏，我删除了以前的视频，也和osu的大家断了联系，但是我一直记得这个游戏，期间换过几次设备，但是我都会记得把osu的谱面全部拷贝到新的设备中。每当我想起这个游戏，我都会打开他，并且短暂的玩上一段时间，因为强度太低，自然也没法进步，于是一直卡在了瓶颈期，pp也停在差不多900没了动弹，但是我并不是很在乎进步，只是时不时的打开这个游戏，然后消失，打开这个游戏，然后再一次消失。

2021 年的 2 月，pass 了第一张六星，但是是超水的bass sult,并且在今天的星数系统下已经变成了5.9星。同时期我开始学习单双指法，放弃了原本的强双指法。 

### 现在

2023 年 9 月，在闲聊中发现和自己经常联机的一位朋友居然也玩osu，并且是15 年注册的老东西，有了一起玩的朋友也稍微有了打osu的动力，但是要玩的游戏太多，osu依旧玩的断断续续。 

2024 年6月19日，决心改变只会越级的自己，开始尝试刷pp打fc,然后发现：
什么嘛原来我也能刷pp的嘛，于是暂时对osu燃起了一些热情，开始了愉快的
刷pp之旅。 

2024 年 6 月22日，在b站刷视频偶然看见新人群资历哥传奇（可恶居然还顶
着我家秦心的头像），于是加入新人群。此时的我大概只有1700pp左右

在入群的当晚，我误入了伪装成宝宝巴士的老登巴士，并且第一次遇见了killbusark(牢大)，也许是因为比较会糊高星图，牢大一直喊我藏子，现在想来像是牢大用来社交的话术呢( 

此后的每天晚上，我几乎都会参与mp,有宝宝级的，也有老登级的，遇上了各自身怀绝技的大家，也交到了新的朋友，有了能一起mp，一起进步，互相鼓励的伙伴，我才真正的重拾起对osu的热情，开始像大家一样玩osu，像大家一样去刷pp，去打自己能力范围内的图，去提升自己。

在有了对osu的热情后，我开始每天高强度的打o,刷pp,pp和实力的提升也让我对自己更加自信，原本怀疑自己并不是打fc和刷pp的料，现在才知道自己也可以像别人一样好。

6月23日，突破2000pp

7月4日，1miss但是146pp,首次突破2500大关

7月16日，fc拿下140pp，突破2700pp

<Score
  bid=221950
  sid=79116
  preview="Sagara Kokoro - Hoshizora no Ima (Star Stream) [S.S]"
  star=5.40
  max=535
  mode="o"
  accuracy=95.26
  combo=535
  rank="s"
  performance=140
/>

7月17日，fc点兔新鲜出炉

<Score
  bid=949011
  sid=441155
  preview="Chino(CV.Minase Inori) - Shinsaku no Shiawase wa Kochira! (Shioi) [Dan Dan]"
  star=5.62
  max=728
  mode="o"
  accuracy=89.71
  combo=728
  rank="a"
  performance=132
/>

7月18日，拿下经典pp图无题并因此对pp图稍微有些反感,突破2800pp

<Score
  bid=738063
  sid=320118
  preview="Reol - No title (VINXIS) [Lust's Insane]"
  star=5.62
  max=403
  mode="o"
  accuracy=95.60
  combo=403
  rank="s"
  performance=164
/>

今天，想不刷pp但被史塔克pp图逮捕，175pp一举从2985飞到3032pp() 

——————————————meow~————————————————

## 后话啦后话

Shimakazei（涅普），是一直陪我玩各种游戏的朋友，也是偶然发现的古早 osu玩家 x,也是我能重拾osu的最初的动力，很有实力的喔（不过涅普该多练练读图啦x）

6月27日，受邀与牢大、真红、青空组成远东旮旯音游结社，非常庆幸能够遇见你们，满脑子开后宫的牢大，只玩旮旯曲的传奇串佬可爱真红，以及有些社恐又可爱的青空，大家都又强又温柔。 

还有被我拐进来的新人秃紫 x，虽然是萌新但是很有天赋喔，比我有天赋多啦，虽然不常打，但是还是希望能早日在进阶群看到你呢


↑↑↑是 OSU!小团体泰拉灾厄团建xxx 

有人说玩OSU!不需要朋友，但我认为 

即使在音游中，朋友也是不可或缺的熠熠生辉的宝物喔

——————————————meow~———————————————— 

锵锵~小幽灵的好朋友的留言板~（是朋友们想在我的遗言里留下的话啦）

[Killbusark](https://osu.ppy.sh/users/13744965)（牢大）：
补个我的留言：acc真的很重要！acc真的很重要！acc真的很重要！mp可以交到很多朋友 一个人玩腻了可以试试mp

[Shimakazei](https://osu.ppy.sh/users/7378611)(涅普)：不要越大级，不要越大级，越大级真的很影响ACC！关注超次元游戏海王星喵，关注海王星谢谢喵

[Tutuzi](https://osu.ppy.sh/users/36144146)(秃紫)：谨防老登花言巧语骗入坑喵，谢谢喵

Killbusark（牢大）：不行！我还是要开后宫！

[hx123yx](https://osu.ppy.sh/users/35529699)（真红）：移动是基础，一定要练好移动，多刷pp图，不要听猫猫说pp图 x，有能力了自然就可以把自己喜欢的图打好

——————————————meow~———————————————— 

## 关于越级与pp图之类的话题？

其实作为一个和主流玩法相差甚远的越级玩家，我是不太能给出合理建议的，所以就当听个乐子叭。

### 关于越级

实际上，打超出你实力范围太多的图都可以算作越级，作为一个长期越级的玩家，我还是能明显感觉出越级带给我的负面影响的，首先是acc,我的acc奇差无比，即使打简单图也比大多数人要低，因为长期的越级让我不在乎acc,想着只要pass就好，实际上一张图的pp里acc也是占很大比重的。其次是稳定性，常年越级的人往往目光呆滞，手法暴力，打图乱糊光标乱飞，最终ar低于9看不懂，简单排列天天断康，最终只能在大跳图上抽奖。最后，没有夯实的基础，去打高于自己实力的图，是很难有所进步的，很容易卡在瓶颈最终慢慢失去对osu的热情以及陷入对自己的怀疑中。 

但是！越级是必要的，越是故步自封，越是没法冲击更高星的图，我们只反对盲目的越级，一般来说，如果你能fc4.5星图并且高acc,你就该适当尝试冲击4.9星图，等到适应了4.9星就该向五星图跨越啦，差不多就是4星出头→4.5→4.9→五星出头→5.5之类的，不建议一次性跨太多星。（总觉得这话从我嘴里说出来没啥信服力）

### 关于pp图

实话说，我个人是讨厌pp图也讨厌史塔克的，请注意，我所说的pp图是指padoru无题这类几乎千篇一律的大跳和简单排列，不是有pp但排列简单一些就能叫pp图的，但是尽管如此我的bp里也充斥着不少pp图，不得不承认的是，这些pp图真的比同pp量正常的图简单太多，不仅短，而且难点集中，排列简单易读，你要做的只是刚好糊过一次那唯一的难的部分并且轻松fc 剩下的部分就能有大量的pp，在我的印象中，我刚入坑的18年，这类图还没有这么充斥，也许会有但只占很小一部分，大家刷pp也都得在正常的图上刷，或者就是DT低星。但是没有办法，pp系统再怎么优化总会有相对容易获得pp的方式的，并且也不好优化。刷pp图并没有什么不好，pp刷子也并不贬义，我自己也刷pp图，能刷到自然是有本事的，我讨厌的只是制作pp图的人，所以也不用太过苛求什么bp洁癖，想刷pp那就大胆刷pp图就行了。但是我还是建议，除开刷pp以外，也请多多去看看那些用心的谱师的图，去看看他们花费心血制作的排列富有意蕴的四分钟长图，去感受一下True DJmag这些tech图的魅力，不要让他们的游玩量被粗制滥造千篇一律的pp图彻底淹没，有很多谱面，他能让我感受到他的排列，与音乐是一体的，或是对氛围，或是对元素，这也是osu谱面的魅力，但是pp图给我的感觉却是空洞且割裂的，你要做的仅仅是在音乐的高潮部分执行好你已经在各个pp图见过无数次的大跳而已。 

*编者注：pp图不一定是短图，短图也不一定是pp图，尽管大部分pp图确实是为pp服务的，但也不乏一些优质的长综 “pp图”。多打不同类型的图，包括 “pp图”。*

请永远记得你所玩的，是一个音乐游戏，而不是点圈圈游戏，不要忘记你游玩这个游戏的初心。

## 是结语呢

1. 请mu我mu我mu我，mu了请告诉我

2. 关于猫幽灵和幽灵猫：前者主体是幽灵，后者是灵体化的猫咪

3. 群友很可爱

4. 龟龟是个非常好的指导！

5. 欢迎与我交朋友喵喵喵

6. 我们跳批都是香香软软的

7. 其实串批也是香香软软的

8. 358224650 这是我的steam好友代码，欢迎找我玩w

9. 肚子饿了吃个第十条

10. 

11. 打o前一定要保持充足睡眠!非常有效

12. 可以做做b站上的手指操

13. 龟龟什么时候能mu我呜呜..

14. 我根本不会打音游，我只会瞎基霸按

15. 旮旯什么的不懂啦不懂

16. 谢谢你看到这里，祝你早日破3k喔w`,v6=Object.freeze(Object.defineProperty({__proto__:null,default:h6},Symbol.toStringTag,{value:"Module"})),b6=`---
date: 2025-12-19
---

# 1902993927 的出群遗言

<Player 
  id="13017923"
  name="1903992027"
  country="2892"
  global="167584"
  from="CN"
  accuracy="95.88"
  level="92"
  progress="98"
  performance="4012"
/>

## 前言

大家好！我是 Hiru 小蝠。2018 年小学生注册的时候看不懂英文，结果把名字写成QQ号了。。。

（编者注：他的 QQ 号是 1903992027）

## 设备

我是键鼠玩家。键盘是狼途 S69，鼠标是 GPW2，鼠标垫是 qck。（键盘是一位osu4k国人大佬在用，而且很便宜，所以我就买了；鼠标和鼠标垫是 donk 同款）

![](/images/lastwords/13017923-1.jpg)

![](/images/lastwords/13017923-2.jpg)

## 设置

灵敏度是 800×1.0，皮肤是 HDDT，按键是 xz

## 游玩铺面

我最开始是按着“游玩最多”的图来打的，然后开始玩各位群友们打过的图，特别是群友们的 bs 的图。最后就是我染上跳图了。

## 游玩方式

指法用的是单双指法（一个指头抗，需要的时候再双指轮）。虽是如此，但我还没掌握，遇到一些有点操作的连点图我就会脑雾，我的手就会死机。

## 如何提升

1. 多玩群友们平时在群里发的图，搜搜喜欢听的图，多多尝试，支持小越级，踏出舒适圈，但是漏得太多准度太低的图就先放着吃灰。
2. 慢慢跟着音乐来以提升准度，不要糊，想提升就一定要先理解思考铺面，可以看一看自己的回放，看看难处怎么打，是按快了还是慢了。
3. 一定要分清双手的分工，想象一只手按到极致，一只手瞄准到极致。
4. 跳图怎么打：跳图的跨度很大，眼睛是跟不上的，只需要看中间甩两边就好打很多了。

## 想说的话

在群的这些天我感到很充实，有共同的喜好，同一个目标，相聚一起都是缘分。在群友打出惊人成绩时不用着急灰心，每个人擅长的点不同，他可能擅长打串，而他喜欢打跳，他喜欢打连，我喜欢你。大家都未来可期喵，不要停下来袜。

## 最后附上BS图

（*编者注：只附上了前 10 张*）

<Score
bid=5315678
sid=2436628
preview="Reol - No title -10 Years Later Edition- (Cut Ver.) (Sotarks) [Nymphe's Extra]"
star=5.76
max=408
mode="o"
accuracy=95.32
combo=407
rank="s"
performance=179
/>

<Score
bid="738063"
sid="320118"
preview="Reol - No title (VINXIS) [Lust's Insane]"
star="5.72"
max="403"
mode="o"
accuracy=95.65
combo=402
rank="a"
performance=170
/>

<Score
bid="1627157"
sid="765778"
preview="Icon For Hire - Make a Move (Speed Up Ver.) (Sotarks) [Lami's Extra]"
star="5.73"
max="253"
mode="o"
accuracy=94.38
combo=251
rank="s"
performance=170
/>

<Score
bid="5312754"
sid="2436628"
preview="Reol - No title -10 Years Later Edition- (Cut Ver.) (Sotarks) [Parad0xa's Extra]"
star="5.66"
max="469"
mode="o"
accuracy=93.02
combo=468
rank="a"
performance=161
/>

<Score
bid="4867588"
sid="2282704"
preview="Marina and the Diamonds - Bubblegum Bitch (Nightcore & Cut Ver.) (Parad0xa) [Barbie Girl]"
star="5.94"
max="332"
mode="o"
accuracy=89.95
combo=294
rank="b"
performance=152
/>

<Score
bid="5315180"
sid="2436628"
preview="Reol - No title -10 Years Later Edition- (Cut Ver.) (Sotarks) [gwb's Extra]"
star="5.76"
max="408"
mode="o"
accuracy=94.06
combo=341
rank="a"
performance=150
/>

<Score
bid="1988753"
sid="952409"
preview="MIMI feat. Hatsune Miku - Ai no Sukima (Log Off Now) [Radiance]"
star="5.46"
max="346"
mode="o"
accuracy=94.58
combo=345
rank="s"
performance=145
alias="哀伤的隙间"
/>
<Score
bid="2025942"
sid="968171"
preview="MIMI feat. Hatsune Miku - Mizuoto to Curtain (Log Off Now) [Lucid]"
star="5.61"
max="265"
mode="o"
accuracy=91.31
combo=265
rank="a"
performance=144
alias="水音与窗帘"
/>

<Score
bid="5394823"
sid="2464474"
preview="Kano - Cherry Pop (Cut Ver.) (Sotarks) [Kumocha's Expert]"
star="5.30"
max="418"
mode="o"
accuracy=95.47
combo=417
rank="s"
performance=136
/>

<Score
bid="4891660"
sid="2282704"
preview="Marina and the Diamonds - Bubblegum Bitch (Nightcore & Cut Ver.) (Parad0xa) [Fuxi's Extra]"
star="5.25"
max="330"
mode="o"
accuracy=95.53
combo=330
rank="s"
performance=133
/>

`,g6=Object.freeze(Object.defineProperty({__proto__:null,default:b6},Symbol.toStringTag,{value:"Module"})),y6=`---
date: 2024-12-03
type: simple
---

# 牢大 killbusark 的出群遗言

<Player 
  id=13744965
  name="killbusark"
  country=4028
  global=251716
  from="CN"
  accuracy=92.3
  level=98
  progress=52
  performance=3351
/>

看起来你可能是在讨论一个社交媒体群组或游戏内的规则，其中“PP”可能是指某种积分或者表现值，当它超过一定数值（如3000）时会有特定的后果，比如被移除出群。

不过，这样的情况听起来更像是一个玩笑或者是一种游戏内的设定。如果你确实需要写一份“遗言”，我们可以把它当作一种幽默的方式处理。这里有一个轻松版本的例子：

---

**【新人群】遗言**

亲爱的群友们，

在这个阳光明媚的日子，我带着一丝不舍和满心的回忆，准备离开这个充满欢笑与泪水的地方。我的PP值已经超过了3000，根据群规，这意味着我必须踏上新的旅程。

在这短暂的时间里，我收获了许多宝贵的经验和友情。我想感谢以下几位特别的朋友：

- [朋友A]：谢谢你在我最需要帮助的时候伸出援手。

- [朋友B]：你的笑话总是能让我笑出声来，即使是最糟糕的一天。

- [朋友C]：你的建议让我在关键时刻做出了正确的选择。

虽然我要离开了，但我希望你们每个人都能继续享受在这里的时光，并且记住我们曾经一起度过的美好时光。请继续保持联系，谁知道未来某一天我们会不会再次相遇呢？

最后，我希望大家都能够遵守群规，让这个群成为更加温馨和谐的地方。也许有一天当我归来之时，我会发现这里变得更加美好。

再见了，朋友们！
- [killbusark  牢大]

---

当然，如果这是一份严肃的声明，你可以调整语气和内容以适应实际情况。如果需要更正式的版本，请告诉我。`,w6=Object.freeze(Object.defineProperty({__proto__:null,default:y6},Symbol.toStringTag,{value:"Module"})),_6=`---
date: 2024-12-28
---

# SakuraPuare 的出群遗言

<Player 
  id=13891947
  name="SakuraPuare"
  country=0
  global=202939
  from="CN"
  accuracy=97.11
  level=98
  progress=4
  performance=2,933
/>

以前经常在幻想自己出群的时候，现在终于轮到自己了。莫名其妙bp1就200，分享osu的一些经验。

## 历史

入坑是因为19年拜年祭那几秒的osu画面，后续一直断断续续。直到22年才入坑新人群，才真正算入坑这游戏，以前都是闭门造车。

see [https://www.bilibili.com/video/BV17t411y7fX/](https://www.bilibili.com/video/BV17t411y7fX/)

## 经验

准确率其实挺重要的，我发现我身边的朋友都是一味的追求越级，打出来的准确率也就70-80。其实准确率上去了，基础才越练越扎实

其实出群相对来说还是很简单了，新人在游玩期间会遇到大约两到三个瓶颈期，遇到瓶颈期别慌，慢慢刷节奏，把pc堆上去。再加上改版后的pp计算相对宽松很多，基本上一百多小时就能出群。

有的时候pp图会助你一臂之力，其实我的bp大部分都是bp图

## data

个人数据分享给大家，我其实是音痴，算是普通人吧，可以以此为参考

奖章：29

pp：2,933

游戏时间：5d 6h 25m

计分成绩总分：2,071,325,264

准确率：97.11%

游戏次数：7,485

总分：9,210,272,739

总命中次数：1,249,854

最大连击：1,084

回放被观看次数：0

## bp list

附 bp list

*编者注：没有注明是哪个难度，故直接复制粘贴前十bp*

C-TYPE by Tanaka Hirokazu
97.94%  200pp

Take a Hint feat. Victoria Justice & Elizabeth Gillies (Speed Up Ver.) by Victorious Cast
98.12%  157pp

Gravity Falls Theme Song- 16 Bit Mix by Cass2
97.71%  134pp

We Won't Be Alone (feat. Laura Brehm) by Feint
97.01%  122pp

Despacito ft. R3 Music Box by Will Stetson
98.06%  110pp

Close Call by Tarpey
96.44%  101pp

Gravity Falls Theme Song- 16 Bit Mix by Cass2
100.00% 96pp

Kaibutsu (TV Size) by YOASOBI
98.04%  90pp

BUBBLE TEA (feat. juu & cinders) by dark cat
97.04%  85pp

Liu Guang Zhi Yu by Chi Guo (CV: Ke Ke Wei)
95.93%  81pp`,S6=Object.freeze(Object.defineProperty({__proto__:null,default:_6},Symbol.toStringTag,{value:"Module"})),k6=`---
date: 2026-02-09
---

# [ cz ] 的出群遗言

<Player 
  id="13932883"
  name="[ cz ]"
  country="4317"
  global="269469"
  from="CN"
  accuracy="94.86"
  level="96"
  progress="69"
  performance="3071"
/>

感谢已达天堂的Osu_autp大蛇和赖在进阶群的aboluo7大蛇给我源源不断的动力一直打o！

感谢新人群的ideration、PerIOdMI和mydgcz成为我这一年新的路标！

感谢进阶群的kurum11、elisabethtea、kabuki、yyyxh大神们的推图！

感谢新人群-inui sana-、Falulu、kagami管理们的引导！

谢谢你们的陪伴，追随大家的脚步，我也是到了不得不出群的这一天（泪目）

这里推荐一些锻炼和缓解疼痛的方法，来帮助大家能更持久的打o（x）：

- [可以锻炼手部的肌肉力量](https://www.bilibili.com/video/BV11T4y1h73B)

- [在游戏前后可以拉伸用](https://www.bilibili.com/video/BV1s84y187JA)

- [游戏前的热身](https://www.bilibili.com/video/BV19x411D7Rn)

- [练习提高手指的灵活度](https://www.bilibili.com/video/BV1pg4y167TN)

- [缓解眼疲劳（推荐**每看屏幕半小时就远望5分钟**）](https://www.bilibili.com/video/BV1hb4y1s79w)

- [缓解腕部疼痛](https://www.bilibili.com/video/BV1Wy4y137Lb)

- [如果手抖可以练习来提高稳定](https://www.bilibili.com/video/BV1QW4y1U74K)

- [依旧按摩腕部](https://www.bilibili.com/video/BV1CK4y1R7s8)

真的很感谢大家的帮助让我达到现在的成绩（这在我刚开始玩的那800pp时期看来是完全不可能的）

<Score
bid="2118444"
sid="983911"
preview="S3RL - Bass Slut (Original Mix) (Fatfan Kolek) [Taeyang's Trashy Extreme]"
star="5.96"
max="538"
mode="o"
accuracy=96.02
combo=533
rank="s"
performance=230
/>

<div style="text-align: center; font-size: 0.8em; color: gray;">
    这是3000pp达成的图，同时也是第一张200pp（虽然ACC并不高）
</div>

以下是我的b30图（*编者注：仅展示 10 个*）

<Score
bid="2118444"
sid="983911"
preview="S3RL - Bass Slut (Original Mix) (Fatfan Kolek) [Taeyang's Trashy Extreme]"
star="5.96"
max="538"
mode="o"
accuracy=96.02
combo=533
rank="s"
performance=230
/>

<Score
bid="1570203"
sid="744772"
preview="toby fox - Last Goodbye (Fatfan Kolek) [Determination]"
star="6.28"
max="484"
mode="o"
accuracy=96.62
combo=439
rank="a"
performance=222
/>

<Score
bid="2118443"
sid="983911"
preview="S3RL - Bass Slut (Original Mix) (Fatfan Kolek) [Reform's Filthy Expert]"
star="5.01"
max="492"
mode="o"
accuracy=99.35
combo=492
rank="s"
performance=191
/>

<Score
bid="2025942"
sid="968171"
preview="MIMI feat. Hatsune Miku - Mizuoto to Curtain (Log Off Now) [Lucid]"
star="5.61"
max="265"
mode="o"
accuracy=96.73
combo=265
rank="s"
performance=182
alias="水音与窗帘"
/>

<Score
bid="5443307"
sid="2479183"
preview="Erika - I Don't Know (Nightcore & Cut Ver.) (Mita) [Parad0xa's Expert]"
star="5.12"
max="183"
mode="o"
accuracy=99.57
combo=183
rank="s"
performance=176
/>

<Score
bid="4890556"
sid="2282704"
preview="Marina and the Diamonds - Bubblegum Bitch (Nightcore & Cut Ver.) (Parad0xa) [Ram's Extra]"
star="5.62"
max="328"
mode="o"
accuracy=96.91
combo=218
rank="a"
performance=170
/>

<Score
bid="5176402"
sid="2390209"
preview="Porcelain Black - Pretty Little Psycho (Nightcore & Cut Ver.) (Mita) [PikA's Extra]"
star="5.47"
max="245"
mode="o"
accuracy=96.01
combo=243
rank="s"
performance=167
/>

<Score
bid="2014469"
sid="962088"
preview="MIMI feat. Hatsune Miku - Marshmary (Log Off Now) [Horizon]"
star="5.21"
max="433"
mode="o"
accuracy=96.74
combo=431
rank="s"
performance=161
alias="棉花糖"
/>

<Score
bid="4834210"
sid="2233944"
preview="Faylan - Path to glory (Game Ver.) (tomatas95) [Scarlet Vision]"
star="5.70"
max="610"
mode="o"
accuracy=93.96
combo=222
rank="a"
performance=151
/>

<Score
bid="2222070"
sid="1061287"
preview="Turbo - PADORU / PADORU (DeRandom Otaku) [Christmas Drift]"
star="5.83"
max="179"
mode="o"
accuracy=92.82
combo=85
rank="a"
performance=148
/>

跳批这一块，跳批是对的我跟你说（（（（（`,x6=Object.freeze(Object.defineProperty({__proto__:null,default:k6},Symbol.toStringTag,{value:"Module"})),B6=`---
date: 2024-12-03
type: simple
---

# RookiesTwo 的出群遗言

<Player 
  id=14145531
  name="RookiesTwo"
  country=3355
  global=200705
  from="CN"
  accuracy=97.36
  level=99
  progress=10
  performance=3796
/>

![](/images/lastwords/14145531-1.jpg)`,A6=Object.freeze(Object.defineProperty({__proto__:null,default:B6},Symbol.toStringTag,{value:"Module"})),E6=`---
date: 2024-12-03
---

# Desolation 的出群遗言

<Player 
  id=14353421
  name="Desolation"
  country=9613
  global=98577
  from="RU"
  accuracy=97.66
  level=100
  progress=7
  performance=5211
/>

# 写在前面

这里是DesoLaTiON. 本人不算喜欢长篇大论的人，写这篇小作文的动力更多的是有感而发，和来自于对osu的喜爱吧。

我之前一直是自闭玩家，入坑是因为看到了osu里有缪斯的自制谱，然后就下载了，花了半天pass了start::dash!!的hard难度（现在这个难度我的bp还是20年的）之后又打了不少LL的歌。当时熟悉音乐而且不会看缩圈，所以现在也不会看。然后就是刷成就，3*4*5*pass。知道了sayobot镜像站，就下了很多好听的曲子，里面一堆5*6*7*长图，当时不知道pp的概念就硬着头皮开nfht打，也算锻炼了打串的能力，最后推6*pass的时候看到了osu的贴吧得知要关掉raw input，关了之后什么都打不了了，遂afk。这时大概6-700pp。这时候acc很差，基本上在90左右。

中间有时候会打，打的图也都是7*ht

回坑是在买了数位板之后（2023年下半年），加了群，回了一段时间刷到900，适应了几天板子，又afk。这段时间因为受到tonehh视频的影响，一直在练简单图，也算是把acc拉到了95左右。这期间没碰过pp跳图。直到群赛前拿到赛图才真正回坑，因为有其他音游的底力基础加上赛图比较简单，算是打出了比较稳定的acc。（96 97这样）

群赛靠buff拿了冠军。个人比较自豪的是没buff的acc图拿了第一

然后发现自己会打串，开始了刷串的不归路（不是）

目前std游戏风格较为固定：acc玩家，不太注重combo，偶尔小越一下，喜欢串图，不喜欢全程跨屏跳的抽奖图

写这篇文章主要是讲讲自己对osu练习的理解，希望能给其他人一些帮助吧。

注：本人也只是刚出群的水平，所以以下内容均为个人建议。

0. 提一下Pouxba

![](/images/lastwords/14353421-1.jpg)

1. 个人理解的游戏pp分层

新人群0-2800pp个人认为可以分成以下三个层次：

0-1000pp为摸索期，这段时间玩家主要熟悉游戏的判定，建立手与图之间的映射，以及确定自己的游玩习惯。这段时间acc，combo，pp，bp都不重要，玩的舒服就行（有一种情况除外，那就是越级，这方面我早期走了不少弯路，一定一定不要越级）

1000-2000pp个人认为对后面的游玩影响较大，这段时间你打的最多的图基本上就是2000pp后你最擅长的部分，所以个人认为这时候应该不挑图打，如果觉得某个难度不能不挑图，就降低难度，保证自己的bp是坚实的而不是一堆抽奖图

2000pp以上的玩家大多已经认清自己的优势，也基本确定了游玩方式和设备（当然后面还有转的可能），如果2000pp前打好了基础，这时只需要放平心态，一点点吃分就能到2800

当然这里的pp均不包含抽奖图，抽奖图个人认为定义是acc较低且无复刻fc能力的图，这样的bp不能算进总pp，也就是说部分2000pp以上的玩家可能需要像1-2000一样打基础（

2. 关于游玩什么难度的谱面

我这里游玩的谱面大致分为五类：第一类是完全掌握（闭着眼都能ss），第二类是掌握（可以比较轻松打出fc以及高acc），第三类是锻炼（一般以少miss结束，acc在97上下，需要凹一凹fc），第四类是越级（acc在94左右，很难或不能控制、预测miss数量，容易爆100和50），第五类是大越级（所有打不到A的图）。

就我的经验来说，假设第三类是标准难度，那么第一类是标准难度-1*，第二类是标准难度-0.5*，第四类是标准难度+0.25*，第五类是标准难度+0.25*以上（大部分正常ranked高分图，不包括tech、压星图等困难的谱面）

比较方便定位第三类谱面的方法：先保证电脑里有足够多的图（数量，种类），然后从一个你认为能完全掌控的星级开始（比如4*），排序选成慢慢往上加，直到发现自己不能不挑图打了（比如到了5.2*发现自己差不多每三张图里只有一张能打97acc，剩下都低于97甚至94），这些图都还是正常图的话，这个星级-0.2*就是第三类谱面所在的大致星级

个人认为一般打图以第三、四类为主，第二类用来热身，第一、二类用来练难点（比如我不会跳，就去练第二类甚至第一类星级附近的图），或者练mod（比如对我来说标准难度是5*，我不会dt，那就去练dt后4*的图），状态好的时候可以多去攻克第四类图 第五类不碰或少碰

据我观察大部分新人群里的人应该标准难度都在5.00*左右或者不到5.00*，这也说明了群规的5.7*以上超星是合理的

有人可能会说我都能fc5.75*的无题了，为什么不能打高星？那么你所有5.75*都会打吗？无题的acc能保证吗？你的无题bp是抽奖多少次刷出来的？10次机会你能fc几次？短图跳图凹出来一个A FC不是你强，是随机数刚好眷顾了你。（这里不是指combo player，人家什么图都能低acc糊）

持续酬勤练习，有一天你会发现你的第三类谱面有变成第二类的趋势，这时候就可以加星了，把第四类谱面的难度定为标准难度，你会发现许多第四类谱面你都能少miss或者fc，然后pp就飞升一大截

（我std和ctb都是这么练图的，每一次都是飞升—沉淀—飞升的循环）

3. 关于提升实力（获得pp）

由上一条可以知道，pp的来源应该是综合实力的提升，而不是刷，换句话说需要打有效totalhit（tth）

刻意练习是最有效的，但是刻意练习很痛苦，这里只建议acc极差，只会打抽奖图的纯刷子采用这种方法（如果想改善acc的话），细节参见tonehh视频：https://b23.tv/yQTQOKT

顺便说一句，我当时的极差acc就是这么练回95的

其次就是什么都打，如果按第2条的不挑图原则打的话一般所有类型的图都能见一见。打的过程中不要retry，越retry你打的排列就越单一！（特别是喜欢打30s短图的，很多时候多次retry只是让你的手记住了图的排列，而不是真正的阅读然后击打，这样练习就是无效tth）

如果觉得这个也做不到的话就去参加比赛，赛图的多样性保证了参赛练图过程中打的都是有效tth，一般认真练图之后都能飞升一波

如果没机会参加比赛的话可以mp，mp的好处是强制不能retry，而且可以打各种类型的图。缺点是不能控制图的难度，而且mp一般倾向于选比较难的图

练图的时候要保证自己认真读图然后打图，不要糊图，不然就是无效tth

4. 关于刷pp

建议玩家只在想要快速达成某个目标时选择刷pp。pp跳图大家都知道是哪些，pp串图建议参考kagami的连打推荐，里面挺多图都挺pp的。同时长图也是一种选择，一般长图平均难度会低一些而且fc的pp会多，对自己稳定性自信的话可以考虑

5. 关于练acc
acc95以下直接参考 https://b23.tv/yQTQOKT

acc95以上主要是要学会音押，音押acc提升很大很大

练音押的方法就是不看缩圈，这里提供的建议是开hd打ar9以下的图，练习一段时间之后再尝试nm不看缩圈打图

还有一个好办法是心中装一个节拍器（当然要保证速度是稳的），再根据音乐和之前的判定进行调整，打着拍子打图，之后在拍子上就按键就不会爆100

6. 关于固定手感/换设备/转板/调映射

建议所有玩家尽早确定自己大体的游玩方式和设备！！这是我作为1wpp的ctb玩家说的，因为手感真的很重要。后面转设备/转游玩习惯是非常痛苦的，需要刻意练习的！！

首先确定自己习惯食指中指还是食指无名指打图（或者是其他习惯），这里只讲一下主流的两种优劣

食指中指的优势在于入门简单，大多数人上手就能用，缺点在于容易卡指

食指无名指优势在于不硬糊图绝对不会卡指，缺点在于大多数人无名指偏弱

然后就是输入设备，大键盘/笔记本键盘/客制化osu专用小键盘（下称小键盘）要提前选好，后面转设备也是需要适应的

笔记本键盘容易坏，不太建议

如果是pc的玩家，建议在舒服的放大键盘和小键盘的地方做标记以免遗忘，键盘放好了只要放好手就知道座椅的位置，进而确定数位板/鼠标位置

如果是笔记本玩家，笔记本不需要移动的话和pc处理一样（多标记一个笔记本位置），需要移动的话可以像我一样确定笔记本和键盘的相对位置：我用过外置键盘两种，k70和uwu，k70对位的方法是正对笔记本电脑，同时下沿卡住k70的凹槽；uwu的对位方法是用连接口和uwu上沿卡住笔记本的两个角。

确定相对位置之后只要调整好笔记本位置那么键盘就调整好了，进而调整座椅和数位板/鼠标

我是反着来的，先确定座椅和键盘的相对位置（手放着最舒服），然后按照键盘和笔记本相对位置来调笔记本，最后调数位板/鼠标

这样的话每次你玩osu设备都在同一个位置，也就是相同的手感！每次打图手感都在最佳状态！

然后是转板。首先是考虑要不要转板，这里先上个人结论：如果鼠标不会指握/鼠标打跳有困难，同时又有数位板的话，那么直接转板。其他情况都可以自行考虑。

转板期间要摸索映射，一般和鼠标dpi用起来感觉相近即可平滑过渡，后面可以再调整映射大小，具体映射比例可以参照视频[【6分钟展示30种osu姿势（映射 键盘）（数位板篇）| osu! 30 Playstyles in 6 Minutes (Tablet Edition)-哔哩哔哩】](https://b23.tv/hyphQXu)

不管是数位板还是鼠标也都是要确定位置的，位置确定了手感才确定，方法上面讲过了。

所有改硬件/游玩习惯的过程中都需要刻意练习，刻意练习的内容就是在第一类图打有效tth，需要打各种排列的图，不断体会新旧设备之间的手感差异并适应新设备。初期成绩会很难看，但是不适应就永远转不了！

7. 关于心态

这也是这篇小作文的最后一点：玩osu的心态。

osu是个游戏，是为我们提供快乐的，如果你觉得刷pp/刷不到pp很痛苦，那就不要刷！听听歌，打打自己喜欢的图调整一下心情。pp不是刷出来的，是实力提升之后水到渠成的事！实力提升了，就是把电脑里的图过一遍都能刷到一堆pp！

然后就是成就心态，什么6*pass5*fc，或者某张图1misschoke很痛苦之类。我可以负责任的说这些东西等你到了4000pp就不会再看重了，这是我ctb一路刷上来的经验。

所以玩osu平常心就好，当然这点很难，我到现在也经常急，急了就打不好然后更急，毕竟人类总是在重复自己的错误。但是急完之后，恢复冷静了，一定要告诉自己这没什么，刷不到pp就等未来实力到了再刷，pass不了就等实力到了再打。只好肯酬勤，这些都不是事。

8. 打个广告

uwu永远滴神！选择uwu，选择飞升！`,T6=Object.freeze(Object.defineProperty({__proto__:null,default:E6},Symbol.toStringTag,{value:"Module"})),I6=`---
date: 2024-12-03
type: simple
---

# qRainbowSmile 的出群遗言

<Player 
  id=14748844
  name="qRainbowSmile"
  country=39
  global=1233
  from="CN"
  accuracy=98.39
  level=83
  progress=8
  performance=11004
/>

遗言想不出来要写啥（

新人群还没待够呢 大家都超好相处呜呜

还想和大家一起mp喵呜！！`,M6=Object.freeze(Object.defineProperty({__proto__:null,default:I6},Symbol.toStringTag,{value:"Module"})),C6=`---
date: 2025-03-02
---

# yuexian 的出群遗言和推图

<Player 
  id=14832181
  name="yuexian"
  country=3762
  global=231280
  from="CN"
  accuracy=96.74
  level=97
  progress=41
  performance=3519
/>

我大概是19年末接触到的osu吧，但是当时大部分时间都在玩移动端音游。

后来手机坏了，很长一段时间没有接触音游，一直到22年年末又开始玩起mania。

大概三四个月前mania瓶颈了，被朋友叫过来玩std，没想到在std体会到了飞升的快感......

从此一去不复返，再也没摸过mania。

没想到四个月就能飞升3000pp，感谢每一个在群里推图的群友和大家的指导啊啊啊啊啊啊.......

虽然3000pp了但是依旧没什么底力存在，左右手同时肌无力。

不要天天刷pp图啊！会毁了你的。

后面是一些我觉得很好刷的pp图推荐，基本上都是二次元曲

五星比较多，大部分是跳：

<Beatmap
  sid=2194372
  preview="ONE OK ROCK feat. Koie from Crossfaith, MAH from SiM, Masato from coldrain - Skyfall (Cut Ver.) (Kujinn)"
  star=6.08
  difficulties=[2.55,3.73,4.62,4.91,5.29,5.51,5.60,5.72,6.03,6.08]
/>

<Beatmap
  bid=4834210
  sid=2233944
  preview="Faylan - Path to glory (Game Ver.) (tomatas95) [Scarlet Vision]"
  star=5.73
  max=610
/>

这个真的很好刷我从2000pp刷到3000pp

<Beatmap
  bid=748983
  sid=325158
  preview="AKINO from bless4 & CHiCO with HoneyWorks - MIIRO vs. Ai no Scenario (monstrata) [Kyshiro's Extra]"
  star=5.35
  max=475
  alias="海色 vs. アイのシナリオ"
/>

<Beatmap
  sid=962088
  preview="MIMI feat. Hatsune Miku - Marshmary (Log Off Now)"
  star=5.11
  difficulties=[2.34,3.46,4.41,5.11]
  alias="マシュマリー"
/>

<Beatmap
  sid=770306
  preview="miwa - chAngE (MaridiuS)"
  star=5.46
  difficulties=[2.02,3.40,4.34,4.75,4.86,5.46]
/>

<Beatmap
  sid=1538840
  preview="ClariS - Careless (TV Size) (Sarawatlism)"
  star=5.04
  difficulties=[2.39,3.53,5.01,5.04]
  alias="ケアレス (TV Size)"
/>

<Beatmap
  sid=1028594
  preview="Momohara Natsuki (CV: Murakawa Rie) - Natsuzora Yell (TV Size) (Sotarks)"
  star=5.18
  difficulties=[2.21,3.35,4.26,4.73,4.85,4.87,4.97,5.18]
  alias="夏空エール (TV Size)"
/>

<Beatmap
  sid=2252260
  preview="Set It Off - Partners In Crime (Cut Ver.) (Poczwar)"
  star=5.26
  difficulties=[2.33,3.18,4.25,4.25,4.51,4.58,5.12,5.26]
/>

<Beatmap
  sid=658952
  preview="Poppin'Party - Tokimeki Experience! (TV Size) (Nitrous)"
  star=5.23
  difficulties=[1.78,2.60,3.60,4.38,4.71,5.23]
  alias="ときめきエクスペリエンス！ (TV Size)"
/>

<Beatmap
  sid=770300
  preview="Aitsuki Nakuru - Monochrome Butterfly (Sotarks)"
  star=5.83
  difficulties=[2.23,3.64,4.46,5.07,5.44,5.70,5.83]
/>

<Beatmap
  sid=497769
  preview="Drop - Granat (Left)"
  star=5.05
  difficulties=[2.04,2.81,3.89,5.05]
/>

<Beatmap
  sid=1883457
  preview="HUMBREADERS - Hikari (TV Size) (Basensorex)"
  star=5.66
  difficulties=[2.37,3.59,4.83,5.66]
  alias="光 (TV Size)"
/>

dt玩的不多所以没几首:

<Beatmap
  sid=816264
  preview="55x55 - MY REZHEM KINOLENTY (feat. Cut The Crap) (Shmiklak)"
  star=3.65
  difficulties=[1.35,2.03,2.95,3.65]
  alias="МЫ РЕЖЕМ КИНОЛЕНТЫ (feat. Cut The Crap)"
/>

<Beatmap
  sid=705423
  preview="Unknown Artist - Miniministop Hitoyasumi no Uta[Mokuyoubi]Gakusei no Uta (Chromoxx)"
  star=3.71
  difficulties=[1.21,1.49,2.27,2.80,3.55,3.58,3.71,0.99,1.43,1.85,2.40]
  alias="ミニミニストップひとやすみの歌【木曜日】学生の歌"
/>

<Beatmap
  sid=584575
  preview="toby fox - sans. (Error-)"
  star=3.33
  difficulties=[1.38,1.67,2.34,3.33,2.86]
/>

<Beatmap
  sid=235551
  preview="Rammstein - Los (Sieg)"
  star=3.75
  difficulties=[2.08,2.61,3.75]
/>`,P6=Object.freeze(Object.defineProperty({__proto__:null,default:C6},Symbol.toStringTag,{value:"Module"})),O6=`---
date: 2024-12-12
---

# wings_wacr 的出群遗言

<Player 
  id=14970885
  name="[SHK]wings_wacr"
  country=501
  global=29128
  from="CN"
  accuracy=99.06
  level=100
  progress=68
  performance=7527
/>

Flag不能乱立（

——wings_wacr

2024.12.11

![](/images/lastwords/14970885-1.jpg)

![](/images/lastwords/14970885-2.jpg)

最后还是fc了，不留遗憾了

<Score
  bid=1620144
  sid=757146
  preview="Tanaka Hirokazu - C-TYPE (Arf) [Bonsai's BasS-TYPE]"
  star=5.46
  max=162
  mode="o"
  accuracy=99.58
  combo=162
  rank="s"
  performance=225
/>

（虽然还是挺遗憾的，1x100在水段）[https://osu.ppy.sh/scores/4002949967](https://osu.ppy.sh/scores/4002949967)

感觉没啥能说的，唯一想说的话，大概就是两个字：

![](/images/lastwords/14970885-3.jpg)

多练（

附本人抽象bp（

<Score
  bid=1620144
  sid=757146
  preview="Tanaka Hirokazu - C-TYPE (Arf) [Bonsai's BasS-TYPE]"
  star=5.46
  max=162
  mode="o"
  accuracy=99.58
  combo=162
  rank="s"
  performance=225
/>

<Score
  bid=481057
  sid=203567
  preview="ClariS - Connect -TV MIX- (captin1) [Insane]"
  star=4.97
  max=522
  mode="o"
  accuracy=98.86
  combo=521
  alias="コネクト -TV MIX-"
  rank="s"
  performance=145
/>

<Score
  bid=42763
  sid=10353
  preview="REDALiCE - Bad Apple!! (Rena-chan) [NachoPiggy's Intense]"
  star=4.72
  max=960
  mode="o"
  accuracy=99.91
  combo=960
  rank="s"
  performance=133
/>

<Score
  bid=3072328
  sid=1499145
  preview="YOASOBI - Yasashii Suisei (Pepekcz) [Love Farewell]"
  star=4.59
  max=939
  mode="o"
  accuracy=98.41
  combo=939
  alias="優しい彗星"
  rank="s"
  performance=131
/>

<Score
  bid=3068602
  sid=1497007
  preview="YOASOBI - Yasashii Suisei (Gouhin) [Gentle Comet]"
  star=4.63
  max=874
  mode="o"
  accuracy=98.73
  combo=809
  alias="優しい彗星"
  rank="a"
  performance=129
/>

<Score
  bid=1923316
  sid=908811
  preview="M2U - Mare Maris (Minorsonek) [Skubi's Insane]"
  star=5.03
  max=842
  mode="o"
  accuracy=96.85
  combo=804
  rank="a"
  performance=124
/>

<Score
  bid=2974698
  sid=1222543
  preview="inabakumori - Lagtrain (Sagu) [fanzhen's Insane]"
  star=4.55
  max=1148
  mode="o"
  accuracy=98.77
  combo=906
  alias="ラグトレイン"
  rank="a"
  performance=123
/>

<Score
  bid=2494808
  sid=1187717
  preview="Powerless feat. Sennzai - Lost Desire (Pentori) [Insane]"
  star=4.93
  max=956
  mode="o"
  accuracy=97.91
  combo=625
  rank="a"
  performance=123
/>

<Score
  bid=4097132
  sid=1974204
  preview="YOASOBI - Idol (TV Size) (achyoo) [Insane]"
  star=4.77
  max=486
  mode="o"
  accuracy=97.67
  combo=485
  alias="アイドル (TV Size)"
  rank="f"
  performance=123
/>

<Score
  bid=2755633
  sid=1328989
  preview="YOASOBI - Kaibutsu (TV Size) ([-Evil-]) [Syoko's Expert]"
  star=4.53
  max=462
  mode="o"
  accuracy=98.96
  combo=462
  alias="怪物 (TV Size)"
  rank="s"
  performance=122
/>`,R6=Object.freeze(Object.defineProperty({__proto__:null,default:O6},Symbol.toStringTag,{value:"Module"})),N6=`---
date: 2024-12-03
---

# NaughtyChas 的出群遗言

<Player 
  id=15349720
  name="NaughtyChas"
  country=1347
  global=72686
  from="CN"
  accuracy=99.01
  level=100
  progress=68
  performance=5796
/>

晚上好新人群，3kpp超限的5天后（因为群赛多苟了38天）还是被管理狠狠的制裁了。很高兴能在这三十天内遇到了大家，和大家在群里聊天、mp的日子真的很开心。非常感谢指导们的帮助，也祝我们CN osu!的环境越来越好。

To 萌新们：祝你们能够享受这款戳大粉饼游戏，享受每一次游玩的过程，享受打谱时skill的提升。多打mp多交朋友，多打综合图，少打又短又全是跳的pp图，拥抱优质谱师，远离Sotarks（不要为了刷pp而刷pp：pp只不过是附在你成绩上的一个数字罢了，技术上去了，pp自然就有了。祝你们每天都有进步，早日出群！

To deRankers：炸鱼可能是快乐的，但还是给萌新们一个好的mp环境吧。

另外我想聊聊Lazer。Lazer的开发速度确实不尽人意，但是Lazer确实是ppy和osu devs明确给出的未来发展方向。虽然性能，手感或者其他细节方面不如连续开发了近17年的stable来的舒服，但是经过ppy高强度的更新后也没有我们想象的那么答辩。之前对Lazer有偏见的不妨多去试试，毕竟萝卜青菜各有所爱，适合自己发挥的client才是最好的。

对于习惯stable的老登们来讲，在Lazer上打谱肯定是一段困难的经历，但对于刚入坑的萌新们来说也许未必。因此，与其说是一谈到Lazer就说“答辩”，给萌新们尝试Lazer的机会应当是更健康的。如果真的感觉Lazer是矢，不如动动手向ppy的Github仓库写两个issue，交两份优质pr，哪怕是写个discussion呢，在我看来才是对待Lazer的正确方式。

不要脸地推广下我写的面向新人的Lazer入门doc：

[https://www.yuque.com/runtujiadecha-3cnay/uzzwpx/tnwgtghcii4vuh4k?singleDoc#](https://www.yuque.com/runtujiadecha-3cnay/uzzwpx/tnwgtghcii4vuh4k?singleDoc#)

写了这么多，先立个flag：我要玩一辈子键鼠。然后还是祝大家早日飞升，进阶群见！`,D6=Object.freeze(Object.defineProperty({__proto__:null,default:N6},Symbol.toStringTag,{value:"Module"})),L6=`---
date: 2025-09-28
type: recommend
---

# hiki8man の遗言 fix

<Player 
  id=15846580
  name="hiki8man"
  country=4320
  global=276483
  from="CN"
  accuracy=98.61
  level=100
  progress=0
  performance=3004
/>

## 游玩历程

- 2019-12 使用 Simpad 和便宜鼠标入坑
- 2020-2 1000 PP 达成，但由于手打伤了退坑
- 2024-1 因为朋友提到了 osu! 让我试试回坑，使用 SDVX 小台 + 15 元办公鼠标
- 2024-12 1500 PP 达成，朋友听说我在玩 osu! 送了我一个 CTL 472，也因为这个原因我才开始认真尝试入坑
- 2025-1 88 买了个 o3c++，成功达成 2000 PP，随后桌子被我打散架了就慢慢淡坑了
- 2025-3 回坑
- 2025-6 2500 PP 达成
- 2025-8 3000 PP 达成

## 磁轴设置

释放：0.500 mm

触发：0.600 mm

RT 释放：0.300 mm

RT 触发：0.300 mm

## 数位板设置

比例：16:9（与显示器同比例）

映射：长 67.6 -> 68.2 -> 67.8 -> 74.2（石墨膜换成磨砂膜）-> 67.4（意识到映射太大，手腕流派处理四角跳很难移动）

可以看到我的映射一直都在调整，但最重要的一点是：**最适合你的映射永远是你练习过一段时间后熟练了的映射，没有熟悉映射的过程频繁大幅度调整映射基本上没有实质作用**。

如果你想尝试我这种大小的或者更大的映射，我个人比较建议想个办法让你的手臂有个支撑点，具体怎么支撑可以是椅子上的手托，也可以直接尝试各种姿势把手往桌子深处放

 我个人认为中等及以上的映射需要适当的学会使用手臂控制移动。手腕移动由于你正常握笔的时候很难动态调整握笔高度，因此四角移动距离和精度会相对更难掌握，使用手臂适当辅助能够帮助你更精准地移动。

## 出群了有啥感想 & 以后打算做什么

没什么感想，只是比较可惜以后没法亲眼看到丛雨酱 1500 PP 了

我因为在忙着工作，所以以后大概也没多少时间打游戏，如果有时间的话可能会尝试下写谱或者别的东西

## 推荐给新人看的视频 & 资料

1. 群文件延时优化
2. 群文件 OTD
3. Sayo 镜像站：[https://osu.sayobot.cn/home](https://osu.sayobot.cn/home)
4. 热手操，可以放松手指：[https://www.bilibili.com/video/BV11T4y1h73B/](https://www.bilibili.com/video/BV11T4y1h73B/)
5. 如何设置映射：[https://www.bilibili.com/video/BV1h44y1P7DE/](https://www.bilibili.com/video/BV1h44y1P7DE/)
6. 2021 新手常犯的错误：[https://www.bilibili.com/video/BV1Er4y1W7xF/](https://www.bilibili.com/video/BV1Er4y1W7xF/)
7. 部分版权曲下载：[https://docs.google.com/document/d/1uNANeGLg_4TjZpJk3Sx_T1Xy2ox7EImMlzxY6aSJMp8/](https://docs.google.com/document/d/1uNANeGLg_4TjZpJk3Sx_T1Xy2ox7EImMlzxY6aSJMp8/)

## 跑哪能找我

QQ：1794645231

osu! 主页：[https://osu.ppy.sh/u/15846580](https://osu.ppy.sh/u/15846580)

B 站：[https://space.bilibili.com/34450884](https://space.bilibili.com/34450884)

## 想给新人说的话

### 刚开始玩的时候有没有必要先调延时

*编者注：那个是 offset，叫偏移*

如果有音游基础，我觉得可以调，整体向左偏说明你打击点偏早，向右则是偏晚

如果没有，我更建议先把延迟优化做了，直接开打。对于新人来说，打准是很难的一件事，做好延迟优化更简单可靠点

需要注意的是：

- Lazer 不管是游戏内还是游戏外，都是早了要 \`+\`，晚了要 \`-\`
- Stable 在设置里的音频偏移是早了要 \`+\`，晚了要 \`-\`，游戏内的谱面偏移是反着的，是早了要  \`-\`，晚了要  \`+\`

### 有没有必要从鼠标转成板子（或者升级其他设备）

这取决于你觉得这游戏你能坚持玩多久。从实用性角度触发，我认为选择设备的重要程度是：键盘 > 显示器 > 数位板

为什么？因为键盘和显示器都是你退坑后还能用于其他用途的东西，而数位板如果你不画画的话，基本上在不玩 osu! 之后只能让它吃灰了

当然，也要很多用键鼠达到很高层次的人。在你决定了要认真玩下去的情况下，可以考虑两种操作方式都试一试

### 单练左手/右手有用吗

有点用，但用处不是特别大

osu! 主模式需要你两只手的能力都要能驾驭住所游玩的谱面。如果有一只手能力相对较弱，你的精力和体力都会无意识地往不熟练的手划分，从而间接影响到你另一只手的动作

比较明显的例子是使用数位板的玩家，如果不注意连打的姿势用力过猛，握笔的那只手就有可能因为这样或者其他原因影响 aim

因此，最好两只手一起练，单独练顶多用于找到节奏和移动的感觉，其他方面意义不大

### 不打超星的图是不是没办法出新人群

我出群的时候，BP 全都没有超过 5.7 星，只要保证自己没有糊图，你想怎么打就怎么打。

之所以大多数人出群的时候，BP 里都有超星图，我认为更主要的原因其实是：一个人想要往上爬，就一定会主动练习自己不擅长或者没有接触过领域的图。因此会慢慢地尝试打更高难度的谱面。

但请记住，永远不要为了糊图而打图，这不是面对挑战而勇往直前的勇气，而是无知带来的鲁莽和冲动。

### 我手速很慢会不会出不了群

尽管没法否认，磁轴和手速确实会影响玩家的上限，但是我认为对于新人群的玩家来说：

**手速和磁轴并不会增强你多少能力**

也许你听了会觉得很惊讶：如果不是因为我手速不行，为什么没法打连打？实际上，不管是怎么样的连打排列，在你 aim 基础过关的前提下，影响你能否打上的因素只有：

1. 你对这首歌节奏的熟悉程度
2. 你能否将歌曲所需要的切指频率控制住（BPM）
3. 你能否在保证连打稳定的同时保留体力（不管是磁轴还是机械轴）

基本上 4 星图并不会出现太长的连打，常见的只有 3 连打和 5 连打。这其中第三点其实对于还在新人群的玩家来说**并不重要**。比起体力问题，我认为更重要的是熟悉节奏和控制手指频率

同样地，也不要因为你用的是机械轴而不是磁轴，就觉得自己没法打连打：**磁轴的优势要从高 BPM（220 以上）开始才会展现出来，如果只是为了达到出群标准，用机械轴完全没有问题**

~~除了青轴和蓝轴，这两个轴体手感确实很差，早点扔了换茶轴、红轴、快银 v2，或者直接一步到位买 O3C 或猫盘~~

### 如何提升游玩水平

简单来说就两个字：**多练** 

但多练并不是说无脑的堆时长，而是要针对你自己当前的实际情况来处理：

#### 1. 没有音游基础，刚玩不到 100 小时

这个时期多练的方法很简单：**多找各种图去玩** 任何游戏刚入坑都有一个熟悉游戏的过程，游戏不熟悉就想往上爬对于绝大多数人是不可能的。

#### 2. 玩了 100 小时或者有别的音游基础，已经能打 3.5 星

这个阶段对游戏机制与构成有了一定的了解，基本读图不再是太大的问题。 从这个阶段开始我更建议的做法是：**有意识地将自己能打和不能打的谱面进行分类。**

从这时候开始你会遇到不同技能需求的谱面，其中会有你擅长的和你不擅长的。如果你只是为了听歌的话可以把不会打的谱面全都删了，但如果你是想要进步的话，我个人认为最好的办法就是有意识地将不会打的谱面和会打的谱面进行分类。随着你分类的谱面增多，你会慢慢意识到自己到底是什么技能有缺陷，这样才能更好地对症下药进行针对性训练。

毕竟，只要你想往上爬，现在这些你不会打的技能以后都必须得会。

### 针对特定技能训练应该怎么做？

对于还在新人群的玩家，我认为特定训练需要知道的东西如下：

#### 享受游戏，适度休息

无论玩什么游戏，这永远都是最重要的。这并不是说玩的时候就不能为了追求什么目标而去玩游戏，而是说不要太过度要求自己，让自己一直得不到正反馈。游玩一个游戏永远应当是你在享受游戏给你带来的东西，当连这点都做不到的时候，你大可以先放下一切好好休息再回来攻克难题。

#### 不要硬打你读不懂的谱面

读不动的谱面再怎么硬练也是很难提升读谱能力的。即使你通过多次重开成功熟悉了这个谱面的所有配置，你也并没有真正地学会读谱。

#### 善用编辑器 / Auto

当你遇到能看懂但听不懂节奏的谱面时，可以考虑借助 Auto 和编辑器去反复听这一段配置的打击音是什么节奏。个人认为如果 5 遍以内听得懂，说明你确实只是不能理解谱面节奏。这种情况很好办：多碰碰同类型的谱面熟悉即可。 而如果你听了 5 遍以后还是不明白这一段的节奏怎么打，你的问题也许并不是出现在理解谱面节奏上，而是出现在了读谱能力上。这种情况直接放置谱面而不是硬打是更好的方法。毕竟前面也说了，硬打自己不会读的谱面是没法让读谱能力进步的。

### 如何练习跳

练习跳最好的方法就是：**多打 PP 图** 

尽管很多人说什么 PP 图毁了游戏，但正因为 PP 图排列很简单，对于刚开始入门练习 osu! 的玩家来说是最好的学习打跳这个技能的方式。

不要觉得打了很多 PP 图会被人瞧不起，PP 图只是针对特定技能做了很多基于该技能的 PP 配置，你能吃到 PP 说明你对于这种配置的基本功过关，这是好事，不要因为你 PP 图打得多就觉得自己能力很弱。

### 如何练习连打

现阶段并不需要你会打什么很长的连打，但最基本的三连打、五连打是必须会打的。 可以先寻找一些 160~180BPM 之间的歌曲进行训练，这个 BPM 区间对于绝大多数人很容易把握住歌曲的节奏，会相对好练习一点。

### 奇怪的滑条（Tech）

**不要吃屎，赶紧跑，越远越好。** 

Tech（技术）谱面通常情况下比同星级的谱面难出一大截，这个即使是进入了进阶群的玩家也不一定会玩，不用强迫自己去主动练习。

### 我该不该现在开始练习 Mod / 我不习惯低 AR 能不能开 HD/HR 打？

以下内容均仅为个人观点，如果你不认同可以直接把下面的言论当作我个人的暴论： 就我个人看来，Mod 在低星基本上没有太大的难度影响。过早地接触 Mod 不仅不能提高你的游玩水平，反而会让你逐渐地开始对这些 Mod 产生依赖性。因此我是完全不建议还在新人群的玩家这么早就开始练习各种 Mod。

尤其是 **HR**，HR 会影响缩圈速度，尽管 2 星谱面使用 HR 提高缩圈速度对于大多数人来说反而更容易读谱，但 HR 这个 Mod 在低难度下不仅因为谱面四维过低没有练习作用，同时因为低难度下 Note 数量并不多，Note 在高 AR 下显示的密度会很低，**容易养成看到就直接点的坏习惯**。不跟随歌曲节奏点击永远是音乐游戏中的大忌。当然，如果你只是突然想尝试下各种 Mod，这种情况下你想怎么玩都行。

### 单双能不能打高强度的谱面？

答案是肯定的。 实际上不管是单双还是强双还是其他衍生手法，遇到高强度配置时最好的处理方法都是双指交互。单双也不是说只有 16 分连打才用交互，而是应当根据实际情况选择合理的指法拆解谱面。因此两种指法在大多数情况下遇到高强度时处理方法基本是一致的。

单双真正需要考虑的问题是：**如何在爆发或连打前减轻主指负担，使主指在处理后面更大强度配置时不会因为体力耗尽而力竭。** 

要解决这个问题的方法有很多，包括但不限于以下几种：

1. 在低强度区也使用双指交互留体力。
2. 使用副指单戳保留主指体力。
3. 构思指顺（例如 1122，122）合理分配手指体力。

不过这些东西个人认为已经算比较进阶的话题了，对于新人群的玩家来说最重要的其实只有：**不要只练一种指法，另一种指法你可以不熟练但最好要会。** 只有这样你才能应对各种难以处理的情况。

### Lazer 和 Stable 哪个更好

|      | 优点 | 缺点 |
| :-: | :-: | :-: |
| Stable | 框架经历多年考验，比较稳定 (.NET 4) | 输入基于帧，在帧生成时间不能跑到 1ms 的情况下，会受到延时影响，中文输入容易卡输入法，需要手动按 \`Win\` + \`Space\` 解决 |
| Lazer | 输入不再基于帧而是单独的线程，对于部分电脑体验更好 | 小 bug 不断，打图时遇到了会很糟心，由于是多线程，对电脑配置要求会高一点 |

### Note Lock 是什么，为什么我觉得 Lazer 也有 Note Lock？

这其实是一个狭义和广义的问题。

群里人平常聊天说的 **Note Lock** 特指 Stable 中两个 Note 都进入判定区时，你只能按顺序点击的现象；而在 Lazer 中，则会直接将前一个 Note 判定为 Miss，然后判定当前点击的 Note。

更广义的 **Note Lock** 则是不考虑有没有进入判定区这一要素。

因此在 Lazer 里，当第二个 Note 没有进入判定区时你去点击它，你仍然会观察到 Note 产生晃动、不进行判定的情况。

## 谱面推荐

<Beatmap
  bid=2191417
  sid=1048429
  preview="ASCA - Hibari (TV Size) (bigfrog) [Insane]"
  star=3.09
  max=276
  alias="云雀"
/>

读图理解

考验对游戏读图理解。打不过可以先打 Hard 难度，Insane 读图要求会高点。

<Beatmap
  bid=1746265
  sid=822032
  preview="team Umifure - DEEP BLUE TOWN e Oide yo (Hanazawa Kana) [Asuka_-'s Hard]"
  star=3.31
  max=899
/>

滑条与连打

需要熟悉滑条尾采音与三连打基本功。

<Beatmap
  bid=2055563
  sid=982181
  preview="Plexi - the new sweet groove (Apis035) [Basic]"
  star=3.37
  max=724
/>

跳图练习

跳图，OD 很低。两个难度都可以试试打到 95% 以上，熟悉下跳的基本配置。

<Beatmap
  bid=1977860
  sid=330377
  preview="ClariS - Nemuri Hime (-ClariS-) [Hard]"
  star=3.38
  max=859
  alias="睡美人"
/>

定位能力

基本上都是定位能力要求，多听听歌熟悉读谱就行。

<Beatmap
  bid=4325841
  sid=2067764
  preview="YOASOBI - Yuusha (iljaaz) [Amateurre's Hard]"
  star=3.77
  max=894
  alias="勇者"
/>

爆发练习

副歌部分比较考验爆发，本身曲速比较快，容易乱节奏。

<Beatmap
  bid=932184
  sid=430622
  preview="Girls' Generation - Gee (Natsu) [Gero's Hard]"
  star=3.75
  max=966
/>

综合图（曲速偏快）

难点在三连打跳切、滑条尾采音接连打和结尾稍微偏远的短滑条跳。缩圈（CS/AR）对于 3 星也比较高。

<Beatmap
  bid=4573071
  sid=2160056
  preview="capitaro - Tenshinranman High Collar Hime (dakiwii) [Collab Muzukashii]"
  star=3.88
  max=856
  alias="天真烂漫高襟姫"
/>

切指基础

三连打较多，需要切指基本功。

<Beatmap
  bid=1219573
  sid=570679
  preview="Tanya Degurechaff (CV: Yuki Aoi) - Los! Los! Los! (Logic Agent) [Hard]"
  star=4.04
  max=542
/>

体力分配

曲速很快，相比其他同难度的谱面，这个更考验拆谱和分配体力的能力。

<Beatmap
  bid=515453
  sid=196674
  preview="petit milady - Koi wa Milk Tea (ak74) [buhei's Insane]"
  star=4.07
  max=465
  alias="恋爱奶茶"
/>

小跳与小串

开头有个小串，副歌有个有点卡手的往返小跳。打不过可以先放着。

<Beatmap
  bid=2177707
  sid=1041991
  preview="Takeya Yuki (CV: Minase Inori) - Friend Shitai (Blitzifyyy) [Sanguine]"
  star=4.02
  max=430
/>

锐角跳

跳图基本都是些很顺手的锐角跳。有一些简单的三连打、五连打。结尾的滑条尾接 16 分连打间距拉得相对偏大，可能需要注意下。

<Beatmap
  bid=3380580
  sid=1625222
  preview="Crusher - ECHO (Abelia) [Light Insane]"
  star=4.06
  max=825
/>

大跳练习

跳图，OD 不高，主要难点为大跳，里面也有一些基础的三连打和五连打配置。

<Beatmap
  bid=4816262
  sid=2262582
  preview="namigroove feat. KAFU - DENNO MIENMIEN MAO (KenYue) [Nyan~]"
  star=4.22
  max=830
  alias="电脑眠眠猫"
/>

老图风格连打

老图风格的连打图。OD 不高，排列间距固定，拿来练习三连打、五连打很合适。

<Beatmap
  bid=1963417
  sid=935111
  preview="DJ Fresh - Gold Dust (Sotarks) [NiNo's Insane]"
  star=4.30
  max=455
/>

跳综

难点在于速度不算慢的 8 分跳和里面参杂的小串，需要同时有双指交互和瞄准基本功才能 FC。

<Beatmap
  bid=737908
  sid=333449
  preview="Stefanie Sun - Lv Guang (liangv587) [Insane]"
  star=4.37
  max=830
  alias="绿光"
/>

Alt 图（伪低 BPM）

BPM 看似很低，但这首歌有很多的 16 分音，基本等于一直在打 212 BPM 的 8 分。需要合理分配好手指体力解谱。

<Beatmap
  bid=75843
  sid=21844
  preview="Kagamine Rin - Anti-chlorobenzene (NatsumeRin) [Rin]"
  star=4.16
  max=916
/>

手控

难度不高，但是有很多低 BPM 连打，需要注意控制切指速度。

<Beatmap
  bid=4828225
  sid=2178627
  preview="Rin'ca - Pleasure garden (eringiRa) [Insane]"
  star=4.26
  max=1096
/>

跳图

4 星开始短连打会变成常见配置，因此最基本的三连打和五连打能力得过关。

<Beatmap
  bid=2010447
  sid=943927
  preview="Nakae Mitsuki - Brightly horizon (Hanazawa Kana) [-Claresent-'s Insane]"
  star=4.32
  max=464
/>

短跳图

难点是大跳和一些 8 分跳，多练就行。

<Beatmap
  bid=1123159
  sid=529724
  preview="kalon. - Juubaku (Meg) [Mikii's Insane]"
  star=4.49
  max=976
  alias="铳爆"
/>

综合图

OD 不高，基本上不糊图的话要打个高 ACC 很容易。

<Beatmap
  bid=4633133
  sid=1049899
  preview="Krewella - Say Goodbye (Nightcore & Cut Ver.) (A r M i N) [Ram's Insane]"
  star=4.64
  max=340
/>

跳图

严格来说这个谱面所有难度都可以用来练速度偏快的大跳，大跳熟悉了就能吃 PP。

<Beatmap
  bid=5029246
  sid=2340739
  preview="TAK feat. Hatsune Miku - LEMON MELON COOKIE (Andrea) [Laurier's Insane]"
  star=4.73
  max=919
/>

PP 图

谱面不难，BPM 180 对于大多数人来说压准度很合适，可以适当地尝试下打高 ACC。

<Beatmap
  bid=4065247
  sid=1944664
  preview="Hataya Naofumi - Louvre Bijutsukan Shinnyuu (Skubi) [Fsjallink & Skubi's Insane Burglary]"
  star=4.66
  max=442
  alias="卢浮宫美术馆闯入"
/>

偏表演性质的综合图

务必在 Stable 中适当提高亮度，然后打开故事板（Storyboard）游玩，不然你会错过很多东西。

<Beatmap
  bid=5175505
  sid=2390875
  preview="Roselia - Senkou (R1cho) [Flare]"
  star=5.83
  max=1050
  alias="闪光"
/>

长综

谱面本身不是很难。故事板做得很好看，不刷 PP 的时候可以打开观赏下。

<Beatmap
  bid=785982
  sid=352570
  preview="beatMARIO - Night of Knights (alacat) [N a s y a's Insane]"
  star=4.62
  max=1040
  alias="夜骑"
/>

跳切

OD 不高，有着比较多的三连打、五连打，适合用来练习最基本的连打基本功。

<Beatmap
  bid=163054
  sid=53519
  preview="Shihori - Magic Girl !! (Frostmourne) [Lunatic]"
  star=4.76
  max=1111
/>

跳切

OD 不高，BPM 也不快，很适合拿来练习基础连打。

<Beatmap
  bid=3260820
  sid=1594556
  preview="Wolpis Carter - Batsubyou (Dailycare) [Oriental's Insane]"
  star=4.74
  max=1102
  alias="拔锚"
/>

跳图

歌曲全程都是 12 分跳拍，基本等于一直在打。210 BPM 的 8 分跳图，最好学会使用双指交互解谱。

<Beatmap
  bid=221409
  sid=79307
  preview="Shano x 40mP - Kiritorisen (Frostmourne) [Insane]"
  star=4.68
  max=1115
  alias="剪纸线"
/>

跳切

歌好听就写了（

<Beatmap
  bid=5036613
  sid=2343122
  preview="Matsushita - Sukisuki Zecchoushou (-AzuMi) [Kuroame's Insane]"
  star=4.78
  max=1192
  alias="喜欢喜欢绝顶症"
/>

Alt 图

曲速很快，只用单戳很难稳住节奏，需要合理分配手指体力解谱，最好学会使用双指交互解谱。

<Beatmap
  bid=272843
  sid=103575
  preview="doa - Hero (TV Size) (pieguy1372) [Insane]"
  star=4.78
  max=532
/>

跳切

有几处跳切有点难，需要对歌曲节奏有一定的熟悉度。

<Beatmap
  bid=4834214
  sid=2233944
  preview="Faylan - Path to glory (Game Ver.) (tomatas95) [Insane]"
  star=4.71
  max=556
/>

跳图

BPM 192，属于偏快但是仍然在大多数人能按的曲速。这首歌的其他难度也可以拿来练下，非常不错的 12 跳练习图。

<Beatmap
  bid=1645491
  sid=669776
  preview="Ito Kashitaro x Lon - Soushi Sou Ai (Anishina Kodoku) [Kalindraz's Insane]"
  star=4.60
  max=906
  alias="相思创爱"
/>

综合

连打比较多，强度很高，刚开始打可能会觉得有点卡手。打不过不要硬打，这个谱面相对比较吃纯地力需求。

<Beatmap
  bid=3839993
  sid=1638844
  preview="U2 - Saigetsu (Koko & Satsuki ga Tenkomori's Sagyou Bougai Remix) (Bloxi) [bnmc's LUNATIC JAPANESE GOBLIN!]"
  star=4.78
  max=1303
  alias="碎月"
/>

跳综

务必关闭自带的谱面皮肤。节奏不难，但是很长，需要一定的稳定性和其他的基础功。

<Beatmap
  bid=2439524
  sid=1130014
  preview="Yorushika - Bakudanma (Meg) [vick's Insane]"
  star=4.78
  max=1108
  alias="爆弹魔"
/>

综合

OD 不高，可以试着挑战下高 ACC。

<Beatmap
  bid=1184314
  sid=540674
  preview="Suara - Fuantei na Kamisama (Kalibe) [Dawn]"
  star=4.89
  max=1177
  alias="不稳定的神明"
/>

长综

这个难度有个相对 4 星来说比较长的串，可能需要稍微练一下。如果打不过这个难度也可以试试 4.35 难度的谱面。

<Beatmap
  bid=730162
  sid=305938
  preview="C-Show - Rocking to the Beat (Priti) [Frey's Insane]"
  star=4.97
  max=1167
/>

跳图

难度数虚高，考验基础瞄准能力和短连打能力。基本上移动能力上来了就能吃 PP。

<Beatmap
  bid=1596086
  sid=749096
  preview="Uinyasu, Occhoko Bunny - Aa Kenran no Yume ga Gotoku (Epsilon Remix) (GIDZ) [Dailycare's Insane]"
  star=5.09
  max=1369
  alias="啊，像绚烂的泡沫一样"
/>

长综（另一版本）

相对另一个版本简单了不少。结尾的跳我个人打的时候经常看不到导致断连，可能需要记一下。其他要注意的可能只有控速，如果觉得打着吃力就先放着不打。

<Beatmap
  bid=3986450
  sid=1927451
  preview="Nor - RE Aoharu (Kuse) [Setu's Insane]"
  star=5.07
  max=788
/>

综合

开头的钝角跳和抓滑条节奏不是很好打。开头结束后几乎没有休息段，比较吃体力需求。

<Beatmap
  bid=4688531
  sid=421554
  preview="you feat. nayuta - Diamond Smile (moonlightleaf) [Insane]"
  star=5.10
  max=1870
/>

偏耐力的谱面

歌曲比较长，打着可能会有点累。故事板（Storyboard）做得很帅，不刷 PP 的时候可以开着打观赏下。

<Beatmap
  bid=4949729
  sid=2312650
  preview="SAWTOWNE - Confessions of a Rotten Girl feat. Hatsune Miku (AirinCat) [Insane]"
  star=4.70
  max=992
/>

带 Tech 的跳切

节奏不是很好抓，听不明白不要去硬打。

<Beatmap
  bid=5220606
  sid=2405974
  preview="Yumeno Yuki - Utopia or Dystopia (TV Size) (Matsuyuki Ame) [Insane]"
  star=4.93
  max=550
/>

跳切

开头的节奏不是很好抓，可以多 RE（重开）理解下节奏。整个谱面连打强度偏高，可能会打着有点累。

<Beatmap
  bid=1569291
  sid=647452
  preview="GEM - Umiyuri Kaiteitan (Loreley) [Insane]"
  star=4.93
  max=1470
  alias="海百合海底谭"
/>

Alt

BPM 240，不要想着单戳，老老实实使用双指交互降低体力消耗。

<Beatmap
  bid=829336
  sid=378803
  preview="EVO+ - [A]ddiction (Mei) [Insane]"
  star=4.95
  max=1062
/>

跳综

比较难的部分是最后一个副歌前面的跳切。没有双指交互连打基础就老老实实回去练。

<Beatmap
  bid=1704915
  sid=740672
  preview="Ni-Sokkususu - Shukusai no Elementalia (SnowNiNo_) [Insane]"
  star=4.94
  max=1262
  alias="庆典元素学"
/>

连打图

前面大部分都是 150BPM 的慢速连打，对于部分人可能需要一点手控。结尾段 BPM 升至 170，注意调整手指状态适应更快的节奏，理论上 170BPM 对于大多数人其实是更好打了。

<Beatmap
  bid=3228570
  sid=1297930
  preview="yuikonnu - Kono Fuzaketa Subarashiki Sekai wa, Boku no Tame ni Aru (Athanasia-) [Insane]"
  star=5.13
  max=1884
  alias="这可笑又美妙的世界，为我而存在"
/>

Alt 图

16 分单点 + 滑条形成的 3 连打采音有点卡手。我个人的解法为 1122（左右手各点两下），其他地方像是串什么的只能自己去多练了，这个谱面确实相对来说比较难打。

<Beatmap
  bid=4577915
  sid=2122109
  preview="Yonekura Chihiro - Koiseyo Otome! (Game Ver.) (tomatas95) [Another]"
  star=4.89
  max=509
  alias="恋爱少女"
/>

跳图

BPM 220 以上，这种速度的跳建议使用双指交互解决

使用单戳也可以，但是这么打会很累

<Beatmap
  bid=3291257
  sid=1606712
  preview="KyoKa - Ouran Romancia (GodKei) [Insane]"
  star=4.97
  max=1438
  alias="樱花烂漫罗曼史"
/>

爆发

BPM 不高但是连打跳切强度很高

需要同时拥有一定的手控和体力才比较好打

<Beatmap
  bid=1309215
  sid=620910
  preview="O2i3 - TSLove (Fanteer) [Another]"
  star=5.12
  max=670
/>

爆发跳切

BPM 185 同时强度从头到尾都没有降低过多少

对体力要求和定位要求比较高

<Beatmap
  bid=3416968
  sid=1655701
  preview="Mu Rong Xiao Xiao - Ai Qing Mai Mai (Firika) [Dalou's Insane]"
  star=4.36
  max=1012
  alias="爱情买卖"
/>

当初是你要分开，分↑开→就↑分↓开→

抛开歌不提，谱面本身不难，但结尾的节奏对于新人来说不算友好，要打高 ACC 还是有点难度

<Beatmap
  bid=4446606
  sid=2026486
  preview="VaVa - Wo Xiang Dui Ni Shuo Baby (Yu vs. CTM Radio Mix) (Nightcore Mix) (__Ag) [DJ Ame's Insane]"
  star=4.94
  max=966
  alias="我想对你说 Baby"
/>

天地人间完全放电

打着很爽的一个土嗨歌谱面

<Beatmap
  bid=1131698
  sid=526574
  preview="Stefan Karl Stefansson & Mani Svavarsson - We are Number One (Doomsday is Bad) [NyarkoO's We are Number One but read the creator's comments]"
  star=4.88
  max=658
  alias="我们是一"
/>

滑条图，记得配合背景视频一起看

<Beatmap
  bid=3075237
  sid=1476172
  preview="Takayan - Be Alright (imaginative) [Tycani's Insane]"
  star=4.88
  max=574
/>

跳图不要笑挑战
`,H6=Object.freeze(Object.defineProperty({__proto__:null,default:L6},Symbol.toStringTag,{value:"Module"})),F6=`---
date: 2024-12-03
---

# zyi 的出群纪念

<Player 
  id=15851436
  name="zyi"
  country=4089
  global=256301
  from="CN"
  accuracy=97.47
  level=97
  progress=83
  performance=3311
/>

![](/images/lastwords/15851436-1.jpg)

## zji

2019.12.27 注册账号

2023.6.18 500pp 购买ctl472并放弃转板

2023.7.10 1000pp & 4*pass

2023.8.13 1500pp & 5*pass

2023.10.2 竹取pass

2024.1.21 2500pp & 6*pass

2024.2.15 2700pp & 7*pass

24年1月买了O3C++，RT的效用非常明显。但总有种作弊的感觉呢...

致所有从笔记本/薄膜转RT的用户：

换任何设备都有磨合期，经过几天熟悉后可以妥帖使用。

执迷不悟的键鼠玩家，单纯喜好键鼠帅气而干净的移动

希望练习更多技能，希望征服所有低星高难图

farming pp is not fun （ 、 V•）

## 未完成的出群目标

polygon [fanzhen's another] 5.47* FC

now: 4miss 离稳定fc还有距离呢

<Beatmap
  bid=1232328
  sid=559097
  preview="Sota Fujimori - polygon (Kaifin) [fanzhen's Another]"
  star=5.46
  max=810
/>

Resurrection Spell [ Another ] 5.64* FC

now: 结尾 2miss 这个差不多了

<Beatmap
  bid=662064
  sid=292644
  preview="ZUN remixed by LeaF - Resurrection Spell (Muya) [Another]"
  star=5.75
  max=975
/>

Sengoku Sangen [ lnsane ] 4.73* 97% FC

now：489/518cb 95acc lmiss 干脆悬赏吧！

<Beatmap
  bid=89463
  sid=26489
  preview="Kakumi Nishigomi - Sengoku Sangen (lepidopodus) [Insane]"
  star=4.79
  max=518
/>

メイカル一ザ(inst)[Ayameteurre's Insane] 5.03* 97% FC

now：差不多了～ nanahoshi

<Beatmap
  bid=3169833
  sid=1504828
  preview="Nanahoshi Kangengakudan - MAKE A LOSER (inst) (Keqing) [Ayameteurre's Insane]"
  star=5.38
  max=1584
  alias="メイカルーザ (inst)"
/>

希望练会EZ提升aim control有实力打各种比赛

## 画廊

![](/images/lastwords/15851436-2.jpg)

## 关于超星

不要超星，即不要只追求Pass高星数的谱面，而不关注Acc与Combo。

超星只会让未来变强的你回头看时感慨自己“浪费了多少时间”

对于我来说，超星相当于“抽奖才能逼近FC”。如果打某一分段的PP图都只能获得70-85aCC，就意味着你不属于这个分段。

## 关于Relax

长期使用Relax会让你的双手协调严重拉胯，甚至于需要长期恢复。

如果你不打算主玩RX或还在犹豫，我建议你尽量避免长时期只玩RX。

它确实可以练习Aim也很帅，但它会让你付出更多的时间与精力来磨合左右手。

## 关于心态

玩儿osu!请保持平常心。不要因为别人强而焦虑，不要因为几张1miss就睡不着觉。刷pp刷得多是时间投下去的，你刷不刷是你的选择。

注意身体健康。保持冷静。多听听喜欢的歌。

## 键鼠玩家2k-2k5瓶颈过渡

在这一阶段应当已经对游戏元素具备一定认识，并开始形成属于个人的游玩风格。在无法确定练习目标（Eg.跳或串）时，可以对不同类型的低星图进行每次3-5pc的尝试，并保证在这一分段量产较高combo&acc，以此找到进步速度较为缓慢的技能，来进行针对性的练习。在希望尽快提升实力时，科学的针对性练习是非常有效的。

不过就我个人而言更多时候都在play4fun。听听歌，放轻松。

键鼠的短板同时体现在耐力有限上。多打低星长图可以在提高你的稳定性的同时帮助你缓解焦虑<sup>Nerve Control</sup>。打长图意味着更低的容错度与更高的重开成本而使其不成为pp刷子的首选，但相比于类似抽大奖的高星长图，相对在你舒适圈内的长图能持续地锻炼你而非让你反复重开，并在此过程中充满正反馈。你也可以尝试刷曲包medal，去积极地参与群内MP，耐力是在这种过程中积渐突破的。

~~实际土新人群分段不需要关注太多技能点，一言以蔽之：“多练。”~~

## 似乎认识的人&碎碎念

cy,yuyuko,NatsuRin,mm & 陪伴许久的管理们

前几届的纯鼠无罪下划线，四星娱乐GinF，呜咪Claise，橘，香香

上届的1314，mak，素食13,米吉多四只，yag，no神，神仙鱼，whp，土豆，htr

同届的1024，鱼总，枸桎，蛋酥，koishi，ori，动点，键鼠oni以及论外的冬瓜

超级多偶像。祝cn osu越来越好

好像也没什么要讲的。。。那么——

祝你远离冰冷的屏幕与房间，早日创造出生命的逃逸之线。

zyi

3.13.2024`,V6=Object.freeze(Object.defineProperty({__proto__:null,default:F6},Symbol.toStringTag,{value:"Module"})),K6=`---
date: 2024-12-03
---

# ChiliJay 的出群遗言

<Player 
  id=16027612
  name="ChiliJay"
  country=3160
  global=187365
  from="CN"
  accuracy=97.3
  level=98
  progress=16
  performance=3017
/>

喜报 
 
本人于9月27日拿下3k pp并出此新人群

总共历时11日从入群2kpp猛涨到3kpp

实际上3kpp里面塞得全都是又短又简单的pp刷子图。玩过的人随便一看，这些不
全都是大跳图吗

PP 是能力的一种体现，当然也不能完全作为能力的参考数值。 

PP 上去了的好处是让你能够观察你choke的图，你可以在此为自己能力做评估，比如第一个耐力图耐力不行。第二个比较高难度的No title就是代表现在的能力不达标不能刷更往上的PP图。The Monk就是中长跳图，自己大跳不能坚持太久啊什么什么的。这个时候就能清楚自己想要提升的是什么了，积极地去下图，积极地去网上搜索一些相关的跳图，串图，综合图啥的。 

<font size="6">合理地告诉自己是哪里不行，并以此做出改变</font>

实际上很多人都推荐不要去越级玩图，这会极大地损失你在OSU里的有效时间。不过我是推荐去适当的越级，打一些具有挑战性的有意思的图。

<font size="6">毕竟试试也不需要成本</font>

不过要听我劝

AIM 能力，技巧能力，读谱能力，还有Double Tapping并不会你在2kpp下，AP了一个5.4纯pp刷子图就一下有了的。

即使我到了3kpp也有一大堆的4.0的图依然是B，顶天能给他们打到A。 

以前的我： 

我要成为恶馊高手，跳图，杀！

我要成为恶馊高手，串图，杀！

我要成为恶馊高手，Tech图，杀！

我要成为恶馊高手，滑条图，杀！

然后被打爆，在床上安然地趋势

如果你也这样玩，那么恭喜你，你也会像我一样会产生将近180h的无效游戏时长。

**越级也得挑能打的，或者挑那种典型的，能对得住你目前的特长的能力相关谱。**

我是键鼠，我要拉枪，我要成为转火高手，我要对面都说我是桂

我目前玩鼠标的优势就是大拉。PP刷子图也正好是跳，和我契合度很高。但是我不稳定，短图的不到2分钟的长度正好弥补了这一点。 

就像这样，我能在11天以内从2k瓶颈突破到3k。

**这PP提升，简直就是纯纯的正反馈**


德国的管理学家彼得·杜拉克提出了木桶效应也就是所谓的短板效应。他说，一个组织
的实力取决于最弱的一环。 

我不否认一味地练习一张不擅长的图能够提升你的实力。 

但是，他的名言没有说完，他说，管理的关键在于知道自己的优势在哪里，并利用它
们；同时，找到阻碍发展的最薄弱环节，并加以改善。 

我大跳行 为什么不越？


我TM越越越越，于是在5.7被滑条击毙。 

该练滑条了 

滑条就是我的最薄弱环节，我相信我滑条行了一定能干碎5.5以后的pp图。 

串：你好 

别急，我先把滑条的正反馈吃了再说。 


那都是后话了，至少作为进阶玩家来说，我们的路才刚刚开始。 

一想到我还有一大堆正反馈还能在恶馊中获取到我就 わくわく

**其实我还有很多想说的，奈何今天我要被肃清了**

未来，我们在进阶群见！！`,z6=Object.freeze(Object.defineProperty({__proto__:null,default:K6},Symbol.toStringTag,{value:"Module"})),j6=`---
date: 2024-12-03
---

# Pouxba 的出群遗言

<Player 
  id=16378561
  name="Pouxba"
  country=368
  global=21549
  from="CN"
  accuracy=96.79
  level=100
  progress=40
  performance=8102
/>

你好。写出群遗言是希望能为刚开始玩osu的玩家提供一些帮助。 

我是Pouxba，键鼠dpi1600*1，强双。第一个认真玩的音游就是osu，没有基础也没有天赋（还踩了一堆坑）。

![](/images/lastwords/16378561-1.jpg)

刚入坑的osu玩家应该做的：（懒得叠甲，反正你能刷到pp就是你对） 

第一步是去看差异的降低osu延迟教程。 

[手把手教你降低osu延迟 - 哔哩哔哩](https://www.bilibili.com/read/cv15801974/)

第二步是选择一个大众化的游玩方式。

比如，使用键盘点击（单双强双混双都行但总之不能是单戳）而不是鼠标或数位板笔点击；转板，或者起码以一个合情合理的原因使用鼠标；使用一个常见的数位板映射或鼠标DPI（1000-2000）。 

本人是键鼠玩家所以关于鼠标额外多说几句。

新人可能会产生这样的困惑：鼠标真的有前途吗？往往其他人的回答会是“有，XXX就是鼠标top”。但是不要因为任何人玩鼠标而坚持玩鼠标，也尽量不要对任何鼠标玩家抱有“他们会一辈子玩鼠标”的期待。用鼠标还是数位板玩osu的原因只应该从自己身上发掘。~~（但是可以以Pouxba玩鼠标为理由因为Pouxba有恋鼠标癖）~~

第三步是调整osu的游戏设置。 

选择一个简洁的osu皮肤（至少双色combo，黑白皮只建议高AR用），关闭视频，关闭击打闪光，背景暗化90%以上（全黑更为常见，但如果你像我一样怕黑或是容易反光，拉90%也差不多了），总之要易于读图。不要顶着花里胡哨的游戏界面玩osu，除非你是Tik Tok player。 

第四步：玩osu。

可以在下面的网站下载图包。

[https://blog.nicholashao.vip/](https://blog.nicholashao.vip/)

从0-2星开始玩就行（我比较笨我只能从0星开始玩）。觉得缩圈太慢可以寻找同星级高AR的图或者开HRorDT（但不要HRDT同时开，因为开启HRDT后只有SS才能刷到pp）

差不多能接近fc某个星级的的大部分图时就可以考虑玩更高的星级了。

除了以刷pp为目的，不建议短时间内反复打同一张图凹成绩。多打不同的图提升更快。需要注意的是坟图往往谱面质量较差，尤其在新手期，不要玩坟图…

一般来说随便玩能玩到1000-2000pp（不算bonuspp）。 感觉到osu水平停滞不前就去刷pp，pp刷上去了实力自然会提升的。比如Pouxba现在是最菜的3k pp但是比起以前只有2k pp的Pouxba已经进步了非常非常多。

不要太过迷信打串，新手也没法接触什么正经的串图。建议玩pp图刷pp，遇到连打发现完全打不动再去打[Kagami的连打推荐](/article/recommend/hiiragi_kagami.md)（Kagami圣经）

碎碎念：：非常感谢观看Pouxba的出群遗言。感觉大部分玩家不至于像我这样没天赋；_；但是如果你跟我一样，我想说，不要怀疑自己，坚持玩osu就好了，一定要玩下去！刷到一个很高很高的pp了谁敢议论你花了多少游玩时间多少tth。缺pp图可以找我PuP 

：：最近遇到一些坏玩家所以额外多说几句。作为osu玩家请守好底线，不要代打不要开小号不要开挂。这是非常严肃的事情。

最后。**关注Pouxba！**

[Pouxba · 玩家信息 | osu! (ppy.sh) ](https://osu.ppy.sh/users/16378561)

[Pouxba 的个人空间-Pouxba个人主页-哔哩哔哩视频 (bilibili.com) ](https://space.bilibili.com/13751267)

QQ表情搜索小被矮。

![](/images/lastwords/16378561-2.jpg)`,Y6=Object.freeze(Object.defineProperty({__proto__:null,default:j6},Symbol.toStringTag,{value:"Module"})),U6=`---
date: 2024-12-03
---

# 7lonekey 的出群遗言

<Player 
  id="16572973"
  name="7lonekey"
  country="7539"
  global="474505"
  from="CN"
  accuracy="94.9"
  level="82"
  progress="75"
  performance="2001"
/>

经过一天的奋战，鼠鼠把自己的pp刷到了2000，顺利的加进了进阶群

<div style="text-align: center; font-size: 2em; color: red;">
    但是
</div>

![](/images/lastwords/16572973-1.jpg)

事情是这样的

在2024/10/19为了凑齐一个月500pp的时候心血来潮刷了闹太套，然后拿到了201的pp（

![](/images/lastwords/16572973-2.jpg)

---

以下是我的刷pp历程：

1. 从进群到700pp的时候群友介绍了PADORU，拿到了第一个100pp，然后这个padoru就在我的bp1呆到了出群那天（
2. 期间也试过各种pp图，无一例外被暴打（padoru断连的挫败感真的很低，真的很推荐）
3. 上了两次mp车，初见新铺打了50pp出来（mp真的很好玩）
4. 后期都是在打自己喜欢听的歌，2分钟到4分钟都可以，自己喜欢听可以无限重开！

---

由于我的游戏经验只到2000pp所以没办法给出更多建议了，下面可以看bp1-100参考一下

<Score
bid="738063"
sid="320118"
preview="Reol - No title (VINXIS) [Lust's Insane]"
star="5.72"
max="403"
mode="o"
rank="s"
performance=201
/>

<Score
bid="2222967"
sid="1061287"
preview="Turbo - PADORU / PADORU (DeRandom Otaku) [Frontier's Expert]"
star="5.21"
max="169"
mode="o"
rank="s"
performance=121
/>

<Score
bid="4758241"
sid="2231831"
preview="Minato Aqua - Kira Kira (Karen) [Ayesha's Insane]"
star="5.02"
max="907"
mode="o"
rank="a"
performance=112
/>

<Score
bid="2223057"
sid="1061287"
preview="Turbo - PADORU / PADORU (DeRandom Otaku) [Deppy's Expert]"
star="5.27"
max="173"
mode="o"
rank="s"
performance=108
/>

<Score
bid="1269592"
sid="573894"
preview="3R2 - Bunny Panic!!! (Kyubey) [Noz's Insane]"
star="4.95"
max="297"
mode="o"
rank="s"
performance=105
/>

<Score
bid="2222861"
sid="1061287"
preview="Turbo - PADORU / PADORU (DeRandom Otaku) [FuJu's Expert]"
star="5.11"
max="186"
mode="o"
rank="s"
performance=103
/>

<Score
bid="1988748"
sid="952409"
preview="MIMI feat. Hatsune Miku - Ai no Sukima (Log Off Now) [Extra]"
star="5.08"
max="347"
mode="o"
rank="a"
performance=102
alias="哀伤的隙间"
/>

<Score
bid="2223057"
sid="1061287"
preview="Turbo - PADORU / PADORU (DeRandom Otaku) [Deppy's Expert]"
star="5.27"
max="173"
mode="o"
rank="b"
performance=96
/>

<Score
bid="1361935"
sid="642379"
preview="angela - Zenryoku*Summer! TV Size (AngelSnow) [Insane]"
star="4.60"
max="362"
mode="o"
rank="s"
performance=93
/>

<Score
bid="2077642"
sid="993307"
preview="AKINO from bless4 - MIIRO (TV Size) (Sotarks) [Reform's INSANE]"
star="4.81"
max="520"
mode="o"
rank="a"
performance=82
/>`,G6=Object.freeze(Object.defineProperty({__proto__:null,default:U6},Symbol.toStringTag,{value:"Module"})),W6=`---
date: 2024-12-03
---

# Fujwara 的出群遗言

<Player 
  id=16822918
  name="Fujwara"
  country=4327
  global=268118
  from="CN"
  accuracy=95.87
  level=98
  progress=15
  performance=3001
/>

**想要传达的，仅仅只有一件是将瞬间保存下来的永远。**

——“幸福前方的物语”

## ——记忆之初

2024年8月14日，一个ID为Fujwara的萌新加入了Osu新人群，尽管账号是2020年4月注册的，但是对于afk了很久的他来说，这便是他新的起点，这个时候他仅仅只有3位数的pp。或许是不想让数位板一直吃灰，或许是看着好朋友从一起入坑到现在他5kpp的羡慕，他决定专注于Osu。当他擦拭好数位板接上电脑的那一刻，新的旅程开始了。

## ——柳暗

因为有一定基础的因素，回来之后的他选择了3星到4星出头的谱面，发现居然意外的还挺上手(当然不推荐每一位刚刚入坑的玩家直接开越，还是要根据自身情况来看，小越怡情大越伤身)于是他玩呀玩呀玩，也是玩到了4星以内的谱面(真的就是一直在玩，8月玩了5,6kpc)pp加啊加啊加，然后他发现，他瓶颈了！T T尽管谱面打的很顺手，但是拼尽全力也无法FC，choke，choke，一张图接一张图的choke（时至今日他osu收藏夹——1Miss里还有78张图，fix不好了T T）我去问我的好朋友，我应该怎么办，玩不下去了QAQ，得到的回答只有两个字——多练。尽管不仅被choke击碎了而且还被朋友冰冷的菜就多练击碎了，但是没办法，这就是事实，你打不中瞄不准接不上就是菜，随后我继续挣扎，一次次的垂头丧气然后再强装振作继续retry，我终于坚持不住了，每天玩6,7个小时的我已经身心疲惫，我已经不想再戳键盘上的X,C键了。郁闷之间，我不小心点到了mod栏，发现了底下那个显眼的mod——Relax（简称RX）正好放松下左手，于是他使用RX进行游玩，可他也没想到，这会给他带来什么。

## ——花明(?

用了RX游玩一会了的他发现，有一些他无法FC的图单靠移动居然可以FC了，这个时候他还挺开心的，因为这总能帮助你找回一点自信心不是吗(笑，于是他又有了继续玩下去的动力（虽然玩的是rx），用RX从4星图玩到5星图，再玩到更高星级的图，他对四指握笔的掌控能力越来越好(?，于是他开始RX一些top们玩的图和一些纯练习aim的跳图

![](/images/lastwords/16822918-1.jpg)

（这是专门用RX练习的收藏夹，注：这种方法并不适用于任何人，我朋友很不推荐我这样做，并且我一玩RX就是好几小时，短时间是没有什么提升的）

练习aim的同时为了瞄的更准（）他顺便把HD也加上了，再之后，他把DT,HR都加上了（？？为后面变成DTHD玩家埋下基础）。在大概摸索出一点瞄准的要领之后（不能完全用手指发力，用手臂来引导会让你打的更准！）他关掉了RX，开始了飞升之旅（雾

8月31日 2609pp

9月6日下午3点 2836pp

9月6日晚上19点 2946pp

9月6日晚上9点半 3001pp

<Score
  bid=4570668
  sid=2166446
  preview="RED feat. Abydos High School Foreclosure Task Force - Mahiru no Sora no Tsuki (TV Size) (- Nilou -) [Abydos]"
  star=3.63
  max=325
  mode="o"
  accuracy=98.03
  combo=325
  alias="真昼の空の月 (TV Size)"
  rank="s"
  performance=185
/>

随着又一次双模式FC，我也是到了3000pp。
我。。激动吗？
明明刚刚才和大家相处熟悉，就要离开了吗。。
这或许就是刷子的悲哀(

## ——诗的最后

说到这里,来和大家分享一些我受益匪浅的教程什么的

1. [【中字】DigitalHypno的osu!大问答，梗、读图、移动连打、训练难度、手指控制](https://www.bilibili.com/video/BV1D54y1h7BC/?spm_id_from=333.337.search-card.all.click&vd_source=513fae5c173b6b9ad1b4c1b84f2969f0)

2. [【熟肉】Ryuk 谈如何锻炼耐力和手控](https://www.bilibili.com/video/BV1eM411t7Lo/?spm_id_from=333.337.search-card.all.click&vd_source=513fae5c173b6b9ad1b4c1b84f2969f0)

3. [【Elimia/osu!个人翻译】你该在什么时候学习mod？](https://www.bilibili.com/video/BV1GMnoe4EZJ/?spm_id_from=333.337.search-card.all.click&vd_source=513fae5c173b6b9ad1b4c1b84f2969f0)

这个比较重要，不要急于学习mod！

4. [【Elimia/osu!个人翻译】掌握多种技能的重要性——突破瓶颈](https://www.bilibili.com/video/BV1PYHye1Ebw/?spm_id_from=333.337.search-card.all.click&vd_source=513fae5c173b6b9ad1b4c1b84f2969f0)

看了这些相信会对你有不少帮助！毕竟玩osu也是个不断学习和积累的过程，前人top们总结出的道理也是很正确的！

## ——大家共同绘出的诗

在群短短20多天，这期间我参加了由-Capgras-每周六举办的Vivo50杯，遇到了两位很好的队友MengLiYL和RRicardo，感谢他们在比赛期间带我飞到亚军！（虽然当时我是pp最多的但是我是纯战犯一直missqaq）借此机会也认识了几位大佬qwq，摆脱了solo玩家捏！借此说一下子，大家最好不要成为solo玩家哦，一个人玩可寂寞了，刷到了pp也不知道和谁分享，有几位朋友才有继续玩下去的动力呢！

再此感谢

-Capgras- [MengLiYL](https://osu.ppy.sh/users/33091136) [RRicardo](https://osu.ppy.sh/users/30581795) [ZnCookie](https://osu.ppy.sh/users/18230719) Coldfish zhan_Al-1s [Rainbow03](https://osu.ppy.sh/users/36097722) [Reincarnation13](https://osu.ppy.sh/users/33102208)（名字有打错抱歉了）和其他群友们！

另外！vivo杯真的很好玩呀，大家快来玩！

## ——番外

走之前没什么能给大家的了，就把我自己MIX的皮肤送给大家吧qwq

通过百度网盘分享的文件：Fujwara mixHDDT.osk

链接：[https://pan.baidu.com/s/1hy3evmSJMYQN2tdLAo0foA](https://pan.baidu.com/s/1hy3evmSJMYQN2tdLAo0foA )

提取码：z0y3

9月8日的时候，也就是现在我刷到了第一个200pp！

<Score
  bid=1553157
  sid=735860
  preview="Sasaki Shiori - Harenohi Step short ver. (Asuka_-) [Insane]"
  star=3.80
  max=358
  mode="o"
  accuracy=98.75
  combo=357
  alias="ハレノヒステップ short ver."
  rank="s"
  performance=201
/>

两个条件都达成才出的群，也算是没有遗憾了qwq

祝大家玩Osu顺心顺意，天天FC，早日3kpp！

我在进阶群等你呀

**随风飞舞的樱花花瓣的彼方，那是，有如曾经约定下的再会——。**

**时间将思念重叠在一起，当感情的奔流成形之时，在那里相遇到的光景将会是？**
`,$6=Object.freeze(Object.defineProperty({__proto__:null,default:W6},Symbol.toStringTag,{value:"Module"})),J6=`---
date: 2025-03-05
---

# Manhattan Cafee 的出群遗言

<Player 
  id=16868813
  name="Manhattan Cafee"
  country=332
  global=19419
  from="CN"
  accuracy=98.33
  level=102
  progress=6
  performance=8302
/>

osu真好玩，进群是2月初的时候，当时因为工作问题停留在1600pp然后afk了两年，最后进群系统性玩了一下也是不到一个月就猛飞1400pp出群了。

作为一个喜欢越级打歌练习的人给点建议吧。

首先越级打歌练习不是指打总时长1分20秒以下，且你只能获得B/C/D评价，排列简单的pp图，这样的图很适合用来提高pp，但对于osu能力的提升相当有限。

osu这个游戏的进步非常简单，就是不停地玩，然后把一张你可以打到88%~90%acc的图打到97%acc，越级练习的思路也是基于此。一张图如果可以得到88%acc，说明你可以大致阅读并跟上节奏处理谱面，这个情况下去练习，把这张图中自己不能处理的部分完善掉一定可以得到巨大的进步。

但一张图如果只能打到83%acc甚至更低，那我认为就没有必要去打了，读图、移动、节奏一定会有某一方面完全跟不上，在这种基础上去硬打某张图只会养成“糊图”的坏习惯，简而言之就是乱打，事实上很多人深受其害。

当然，osu是一款完全自由的音游，自己玩的开心是最重要的事，有的人就喜欢把高难度的图凹pass，并以此获得成就感，虽然这样也不是不能进步，但你的效率一定会很低，遇到的瓶颈也会比别人更大的，但还是开心最重要。

最后附一张从入坑开始陪伴我到现在的绝世好图吧，我的大部分底力都可以说是来自于这张图，这惊人的游玩次数也可以称得上是永夜抄了。————大家都爱的竹取飞翔

![](/images/lastwords/16868813-1.jpg)

[https://osu.ppy.sh/beatmapsets/22276#osu/86324](https://osu.ppy.sh/beatmapsets/22276#osu/86324)
`,X6=Object.freeze(Object.defineProperty({__proto__:null,default:J6},Symbol.toStringTag,{value:"Module"})),Z6=`---
date: 2024-12-03
type: simple
---

# shuaiyue 的出群遗言

<Player 
  id=17027628
  name="shuaiyue"
  country=5345
  global=339762
  from="CN"
  accuracy=96.62
  level=98
  progress=59
  performance=2585
/>

不要打C-TYPE！！！！！！

不要打C-TYPE！！！！！！！！！

不要打C-TYPE！！！！！！！！！！！！

死因：因手贱点开了C-TYPE并fc了

刚接触osu时看到大佬用数位板

于是买了个数位板+o3c

（472真的好用）


对于小登的话：稳扎稳打别<font size="5">越级</font>，多练练三连 二连 一些flow图 手控图，尽量让自己的能力综合发展，别天天玩<font size="5">跳</font>

推荐一张图

<Beatmap
  bid=1530025
  sid=724594
  preview="Amidst - Phantasy (ZLOdeuka-) [NYA?!]"
  star=5.11
  max=474
/>

我的主页：https://osu.ppy.sh/users/17027628  欢迎加好友

感谢[Chiyarara](https://osu.ppy.sh/users/36409902)大佬让我在2000pp时能快速飞升

（也让我知道了C-TYPE这张图）

很荣幸与群友们认识，我在进阶群等着你们

See you next time ~`,q6=Object.freeze(Object.defineProperty({__proto__:null,default:Z6},Symbol.toStringTag,{value:"Module"})),Q6=`---
date: 2025-08-17
---

# 1ch0 出群遗言（越级指南）

<Player 
  id="17610368"
  name="1ch0"
  country="2650"
  global="151350"
  from="CN"
  accuracy="86.48"
  level="97"
  progress="47"
  performance="4212"
/>

<br>

<div style="text-align: center; font-size: 2em; color: black;">
    键鼠天下第一
</div>

Apex 猎杀哪里有用数位板的道理，派派没有转手柄，osu 也不会。

osu 本来只是在打别的游戏下播时间顺手玩的但是越玩越能让我感受其中的魅力。有关于越级我就有几个要说的第一就是越级好处是真不少但是别硬甩，能越级的都是跳p。当你越不动了你就要去提升自己的稳定性。

举个例子打 quaver

<Score
bid="1826438"
sid="873811"
preview="dj TAKA - quaver (Sotarks) [Ultimate Crescendo]"
star="6.44"
max="398"
mode="o"
accuracy=82.55
combo=106
rank="c"
performance=119
/>

<Score
bid="917129"
sid="423527"
preview="dj TAKA - quaver (Monstrata) [NiNo's Extra]"
star="6.07"
max="1318"
mode="o"
accuracy=85.36
combo=514
rank="f"
performance=0
/>

当你 6.48 打不过或者比较吃力的话就可以尝试去练长的 quaver

跳p提高稳定性是相当重要的。Acc 的话就要通过练串去练这个是相辅相成的。

最后的话，是要有一个目标去练。不要觉得手速不行就永远不行。不要因为某些人的话就觉得肯定打不了。只有自己才知道自己能做到。

以我自己的例子来说就是 sendan life

<Score
bid="972691"
sid="416153"
preview="Remo Prototype[CV: Hanamori Yumiri] - Sendan Life (Lami) [Extra]"
star="6.27"
max="1213"
mode="o"
accuracy=90.62
combo=355
rank="b"
performance=91
alias="先端人生"
/>

这张图是我两个月以前跟高手mp拿到的当时我就觉得这歌很难我一定要拿下

<Player 
  id="35551133"
  name="wdz"
  country="711"
  global="41268"
  from="CN"
  accuracy="95.35"
  level="100"
  progress="7"
  performance="6659"
/>

经过快一个月才终于有一次 pass，但是也只是蒙的，而随着游玩的次数上来了慢慢的就开始感觉能打了。时间一定会给出答案的。

<Beatmap
bid="4803942"
sid="2253247"
preview="Hechizeros Band x Koji Kondo - El Sonidito x Athletic Theme (DitzyFlama Mashup) (Fuxi66) [Nymphe's ZESTY BURRITO]"
star="5.72"
max="194"
/>

喜欢越级的话可以直接加我 osu，我可以整点比较好越的图来 mp

平均星数5左右就可以开始尝试一下了 欢迎大家来找我mp哦

推荐一张我新手期就在越的好图

<Beatmap
bid="4835566"
sid="2268756"
preview="Last Note. feat. mirin - Fake out (Fushia) [Laurier's Insane]"
star="5.14"
max="600"
/>
`,nh=Object.freeze(Object.defineProperty({__proto__:null,default:Q6},Symbol.toStringTag,{value:"Module"})),eh=`---
date: 2024-12-03
---

# ZnCookie 的出群遗言

<Player 
  id=18230719
  name="ZnCookie"
  country=1375
  global=74117
  from="CN"
  accuracy=98.29
  level=101
  progress=14
  performance=5764
/>

![](/images/lastwords/18230719-1.jpg)

![](/images/lastwords/18230719-2.jpg)

<font size="5">加群556278354，加群556278354谢谢喵</font>

OSU！STD×Vivo50杯 群赛

该比赛主要是帮助活跃的低分段玩家适应比赛，让有意参加比赛的玩家提前了解比赛玩法和节奏。

<font size="5">~~广告位招租~~</font>

## 正文

osu id:ZnCookie，养生玩家，不凹图，20年就注册了号。

[Bilibili:https://b23.tv/undxX7f](Bilibili:https://b23.tv/undxX7f)

不定期直播

![](/images/lastwords/18230719-3.jpg)

~~谁家股票（~~

新人群的话是HaHk拉我的，刚进来好像才700pp

不过我本身也不是为了刷pp才玩（）

当时用的还是键鼠，键盘甚至是静音轴（水蜜桃v2）

现在想想好像也挺逆天

## 对新手玩家的建议

首先别急，游戏初期，你可能会感到挫败，只能靠极低的准确率来pass，无法达到理想的成绩和刷pp。这是正常的，而且通常是每位玩家都经历过的阶段。多练习，尤其是基本的点击和瞄准。此外，尝试不同的图，找到适合自己的风格与手法。

加入社区，和其他玩家交流也非常重要。无论是参加比赛还是与朋友mp，尝试不同的图都能激发你的潜力。记住，进步是一个循序渐进的过程，**享受这个游戏本身，比单纯追求成绩和PP更为重要。**

特别感激社区中的每一个人，正是你们的支持与鼓励让我不断向前。

## 未来的展望

尽管我即将告别这个阶段，但我相信，osu!会继续陪伴我 ~~我要去玩其他模式了~~。对于那些仍在新人群的玩家们，我想说，继续保持激情。感谢每一个陪伴我走过这段旅程的人，希望你们在未来的道路上，能够找到属于自己的快乐与成就，再见了新人群。

![](/images/lastwords/18230719-4.jpg)

「祈祷着今后的你的人生，永远都有幸福的“魔法”相伴。」

如果有想对我说的话可以写在下面（学的_AnZai_KoKoRo_）：

已阅（sz

你的名字是🤔我知道了😮绝对不想忘记的人😫绝对不能忘记的人😭你的名字是？😨你的名字是？😱

![](/images/lastwords/18230719-5.jpg)

已阅（koibroken）

Tell my mom I love her.（AsumiMiuna）

我喜欢你（-Capgras-）

已阅(bget:兄弟继续加油😭😭)

兄弟你好香 还香草（说的沐雨）

![](/images/lastwords/18230719-6.jpg)

什么时候再给我草一次（RURINO）

什么时候再给我草一次(Reincarnation13)

兄弟其实我香草你(bget 补)

还没嗦过neednewnew我会想你的（Sacil）

投降喵大家都是我的主人（ Inui JaHuLi-）(本人)

我们FP 真的是太有实力辣，剩下三位FP什么时候出群？(rainbowO3)

主包你带我奏吧二次元通道@ZnCookie(hx123yx)

今天是zncookie 大神出新人群的日子，后面忘了=w=(cold fish)

前面忘了，中间忘了，后面忘了，总之有你有我也有他;w;(Koishi Komeiji)

今天是著名osu大神 ZnCookie出群的日子，生活中的酸甜苦辣，记录着命运的轨迹，轨迹留下你的影子，300Opp到来之际，送给你的祝愿最诚挚，衷心祝你大吉大利，顺心如意。加油大神！(5atori Komeiji)）

不知不觉主包也 3k 了，当初我进群的时候才 1k 你 2k，如今我 2k 了你3k了恭喜你！我在想会不会我到时候3k出群的时候你已经4k了呢？以及感谢你一直以来的陪伴。最后你怎么就3k了草似你喵！草似你喵！草似你喵！（21awa12）

主包别肘，你走了我怎么办啊！我为你彻底疯狂！彻底疯狂！彻底疯狂！彻底疯狂！彻底疯狂！彻底疯狂！彻底疯狂！彻底疯狂！超市你喵 owo(KonoYuki)
Ciallo～(· w<)∩☆（一 love yuzesazi 一）

化学曲奇大神偷偷飞了玩cs玩的（RRicardo）

![](/images/lastwords/18230719-7.jpg)

事实上，主播真的很难超... 苦呀西！！！ ——RemindLight

呜呜呜曲奇大神出群了，我也是见证了新大神的飞升（koibroken2）

sukisukidasuki，教我 std（小杰）

![](/images/lastwords/18230719-8.jpg)

恭喜主包3000pp飞出去啦 祝大飞喵

团子和ZnCookie在新人群一起进步一起刷pp的日子

团子都会好好记住的

主包也要加油哦 不可以懈怠哦（笑

团子很快就会追上你的步伐哒 可不要被团子超上哦（

——是羽月团子喵

![](/images/lastwords/18230719-9.jpg)`,ah=Object.freeze(Object.defineProperty({__proto__:null,default:eh},Symbol.toStringTag,{value:"Module"})),th=`---
date: 2024-12-13
---

# CreeperTitan の出群遗言

<Player 
  id=18963228
  name="Stagnater"
  country=3734
  global=249817
  from="CN"
  accuracy=94.45
  level=97
  progress=10
  performance=2993
/>

我从来没有觉得刷pp开心过

我还记得那天萌新们的宝宝巴士，那是我逝去的青春

我曾是你的萌

——失萌棍哥

你说 c-type，一遍一遍换了多少数位板笔芯了，加 pp 了吗？换汤不换药啊，人家 Log Off Now 也有理由说的，我带的是什么队，我带的初音未来队。你这是什么pp图啊？你叫我刷？
CreeperTitan 现在什么水平，就这么几个bp，你PADORU和quaver什么的都推不上去了，开始去超星图找pp了，他能刷吗？刷不了！没这个能力知道吗？再下去acc掉90了，掉完90掉80，再掉60，接下来没得掉了。 

从另一方面说，CreeperTitan是备战2077OWC最早的职业(?)选手…… 

哦呦谢天谢地了。我已经说了，你像这样的pp刷子本身就没有打好基础，你能跟我保证在大黑这样关键曲目不翻车啊？务实一点，把自己的指法、定位、选曲品味的这个理念先搞懂。天堂塔练的挺好的，你把他去删了干什么你告诉我？你在串图输个1比5（指指个个5连打只有一个300），你倒告诉我怎么解释？基本功都不要了！

所以说不要越级，不要越级，越级伤手伤脑伤感情；到时候mp时候人家问你“诶你acc怎么这么低”你说啊对对对，开糊就完了呗，对不对？房间里头人家问“诶你combo数怎么这么少”你也啊对对对；结算界面盖小被儿，你也啊对对对，越就完了呗，说什么我都开糊！

2020 年 10 月的时候，这个叫creepertitan的账号刚被创建指那时不知道改名不是免费的），没有社交没有指导，自己用一个很便宜的地摊鼠标大概摸到了300pp左右，那时我还是个很纯粹的纯鼠玩家指指什么也不懂），然后感到吃力了以后就退坑了好久。感谢前辈RookiesTwo，在线下接触并得知“原来你也玩指过）OSU”以后给了我很多指导，也推荐了我很多好玩好听的谱面，然后我作为一个键鼠玩家摸到了大概700pp，在触摸到自己的键鼠瓶颈以后再次弃坑了一段时间。 

在24年10月，rookies成功的忽悠我买了一块数位板，并且拉我进入了osu新人群。 

rookies：啊你没加过这个群吗

我：我不道啊

在拥有了数位板以后，pp 很快速(?)的上涨并最终得到了今天来之不易指指只打了三遍）的bp1。大家缺pp的也一定要试试，这个确实好刷，并且感谢群友21awa12的pp图情报，您的恩情利滚利永远也还不完(?) 

<Score
  bid=4570832
  sid=2166521
  preview="RED feat. Abydos High School Foreclosure Task Force - Mahiru no Sora no Tsuki (TV Size) (lit120) [Insane]"
  star=3.85
  max=378
  mode="o"
  accuracy=98.91
  combo=378
  alias="真昼の空の月 (TV Size)"
  rank="s"
  performance=201
/>

指说起来，我的头像真的有什么问题吗？） 

![](/images/lastwords/18963228-1.jpg)

出群是不可能出群的，这辈子不会出群的。底力图又不会打，就是吃送分图才能涨涨pp这样子。在新人群里面的感觉呢，在新人群里面的感觉比一个人玩好多了！！！自己刷pp很无聊，没有tech图玩，没有使图炽。进了新人群里面个个都是人才，说话又好听，喔唷超喜欢在里面的！ 

啊！什么！201pp？怎……怎会如此了，今日，我手震……今日，我心痛……为什么会这样？新人群的大家，大家…我…我…我…我真的好爱大家的，为何ppy要这样对我呀！ 

今当远离，临表涕零，不知所言；想做点贡献给群里的大家，可是我玩过的谱，前辈们已经推荐过了…… 

那么，最后祝您，~~提前~~■■身体健康，再见。`,ih=Object.freeze(Object.defineProperty({__proto__:null,default:th},Symbol.toStringTag,{value:"Module"})),rh=`---
date: 2024-12-03
---

# shenzhe 的出群遗言

<Player 
  id=20044753
  name="shenzhe"
  country=753
  global=40999
  from="CN"
  accuracy=98.77
  level=100
  progress=80
  performance=6884
/>

希望有所帮助吧

我先写在这里，虽然不一定会用，但是还是想写--sz

一直用键鼠打，一方面是我也确实懒得换 

（不是因为不会画画才不买板子？）

更好的外设是能提升水平但不是主要因素，自己没有想提升的心外设再好也白搭（娱乐随意）

离开新人群，以后的路还长着

![](/images/lastwords/20044753-1.jpg)

时间过得好快，从刚入群不说话到mp房地板，现在轮到我写遗言了

正常的mp房还是能出好图的，平时就算垫底也可以打打，只要不是水平差太多 对应的谱面对你的技术还是有很大帮助的

过载巴士真是人玩的吗xwx

新人群氛围很好，至少在我见过的几个大群里算好的，也很容易融入进去，有问题直接提出来也不用顾虑啥，谁都是从小白过来的。

不要忘了玩游戏的初心，如果刷短图刷pp刷累了，就放下pp和分数，专注于听歌吧

Ciallo～(∠·ω< )⌒★

![](/images/lastwords/20044753-2.jpg)

以下是个人废话

我草牛魔的滑条  给我连一下康会似一样的

这个群的mp房虽然有时候会有大份吃  但是大多数时候还是有好图的。越越越健康（不是）

以下是暗杀名单（划去）感谢:

新人群管理组

Isanke和youshuuuuu(虽然这两不玩了 但是有什么是比为了我去下osu的哥们更酷的😎

zhan_AL-1S    

[- Inui JaHuLi -]   戳一下就倒地睡觉喵♡︎

refLect_awa.    

-Capgras-  

还有所有互关的哥们

群里几个眼熟的一并感谢了，你们都是可爱滴捏🥰

此遗言在古事记/史记/源氏物语/地狱道/皇极经世/达摩经/圣言录/侠客行/永乐大典/平安时代/四库全书/诗经/荡寇志/论语/孙子兵法/幻想乡缘起/东方永夜抄/新约/旧约/论浮体/银河系漫游指南/斗破苍穹大主宰/全知全能之书/岁月史书/春日影/OCG完全规则书/d小调第九交响曲/阿斯塔特圣典/波罗蜜多心经/文果真报/天工开物/新华字典/九十五条论纲/天体运行论/论法的精神/母猪的产后护理/汉谟拉比法典/死灵之书/黑暗剑22/鲁迅全集/莎士比亚全集/新乡时报/死亡笔记/DIO的日记/放逐者之图书馆/爱泼斯坦名单/C109/宝可梦图鉴/中国通史/赤脚医生手册/一千零一夜/数学分析/聊斋志异/计算机系统结构/Bright博士不允许在基金会做的事/黄金律法/阿卡夏记录/曼德拉记录/SCP收容物档案/第5版dnd/剑来/余光中诗集/东百往事/号角日报/死海文书/荆轲的燕国地图/大山倍达的主张/愚地独步的发问/少女前线设定集/赛马娘图鉴/太平风土记/废墟图书馆/中均有记载。`,sh=Object.freeze(Object.defineProperty({__proto__:null,default:rh},Symbol.toStringTag,{value:"Module"})),oh=`---
date: 2025-02-27
type: simple
---

# BloatedPuffer 的出群遗言

<Player 
  id=20815409
  name="BloatedPuffer"
  country=4522
  global=284211
  from="CN"
  accuracy=92.52
  level=97
  progress=15
  performance=3116
/>

入群一个月从1517飞升到2600然后瓶颈四个月+新人群活动磨磨蹭蹭到今天(2025-2-27)成功出群(3002.3pp)，刻上墓碑.zip

给一部分新人：

acc太差？别太在意，按自己节奏打就好了，保持90以上就行

有这样一类玩家，他们玩音游并不是为了极限的操作和劲爆的音游曲，而是享受“演奏”音乐的过程，和乐器不同，音游不需要刻苦的练习就能体验到演奏的乐趣，不是吗？

瓶颈期开始之后，我发现我开始不那么着迷音游曲，或者说更喜欢二次元风的音乐（尤其是gal曲），我还开始喜欢打长图和马拉松（当然必须是我喜欢的Compilation才打得动），我逐渐意识到我可能并不适合刷pp，我每天打几首哪怕是重复的，低难的，只要是喜欢的音乐就能满足。我只是喜欢打歌的过程而已，提升什么的，根本无所谓。游戏是为了愉悦自己才去玩的，连打音游都会因为没提升而憋气岂不是本末倒置。

虽然定居进阶群了，但我的实力可能很难再有大提升了，身边的事越来越多，玩的机会越来越少，回到完全形态都成了一种奢求，只希望尽量晚点长大吧……`,lh=Object.freeze(Object.defineProperty({__proto__:null,default:oh},Symbol.toStringTag,{value:"Module"})),ch=`---
date: 2024-12-03
type: recommend
---

# zhukongQvQ 的出群遗言

<Player 
  id=21242012
  name="zhukongOvQ"
  country=4266
  global=264728
  from="CN"
  accuracy=95.67
  level=94
  progress=49
  performance=3000
/>

2024.7.27 也是成功飞升了） 

虽然入群就7天，pp从1600到3000听上去很夸张，但是沉淀的时间还是占了很多的，印象里大部分时间都泡在跳图里了，也在能力范围内小越一些曲子，个人觉得打跳图的提升还是很大的，但是不推荐大家拿pp图练跳，推荐大家打打长图之类的，随着时间沉淀就会慢慢变强的。 

单双跳批练手速可以慢慢从bpm180慢慢加上去，不用一次到位的） 

其他也没什么经验传授了，打到现在其实除了跳什么都不会属于是，3星的每日挑战有时候还会死也是丢了3000pp的含金量说是，就给大家推荐一些我自己打的跳图合集好了，可能难度有高有低，选择适合的，喜欢的练习玩就可以了 

铺面介绍：（下载地址难度不一，选择适合自己的即可

1. 四分钟的耐力图，歌好，跳好，身体好，个人觉得算是bpm偏低点的跳，手不用那么累

<Beatmap
  sid=405570
  preview="*Namirin - Yasashisa no Riyuu (Kibbleru)"
  star=5.62
  difficulties=[1.75,2.48,3.74,4.98,5.62]
  alias="優しさの理由"
/>

2. bpm较高，也是长图，可以练练手速和三切？

<Beatmap
  sid=1485959
  preview="Yorushika - Matasaburo (Rosiie)"
  star=6.28
  difficulties=[2.69,3.81,5.06,5.75,6.28]
  alias="又三郎"
/>

3. 很多群友都推荐的跳图，可以拿来锻炼自己，也可以刷pp

<Beatmap
  sid=799418
  preview="Chata - Boku no Tonari de Koi o Shite! (Dored)"
  star=5.26
  difficulties=[2.43,3.51,4.10,4.28,4.76,4.92,5.02,5.26]
  alias="僕のとなりで恋をして！"
/>

4. 考验底力的时候到了！刷到就是赚pp 

<Beatmap
  sid=895391
  preview="Post Malone, Swae Lee - Sunflower (Tatan)"
  star=4.57
  difficulties=[2.22,2.52,3.37,4.57]
/>

5. 也算是知名跳图了说是，跳的间隔比较大 

<Beatmap
  sid=380545
  preview="Primary - Sweets Weekend (CaffeAmericano)"
  star=5.35
  difficulties=[2.00,2.28,3.60,4.30,5.02,5.35]
/>

6. 比较吃手控的跳，切指部分挺多的 

<Beatmap
  sid=1984719
  preview="Hanon x Kotoha - Fuwari (Kyss)"
  star=5.51
  difficulties=[2.46,3.66,4.67,5.51]
  alias="ふわり"
/>

7. 速度较快，跳的部分还好，可以锻炼手速

<Beatmap
  sid=954692
  preview="HALCA - Sentimental Crisis (TV Size) ([Raseas])"
  star=3.37
  difficulties=[2.56,3.37]
  alias="センチメンタルクライシス (TV Size)"
/>

8.极吃手控能力，可以锻炼自己的单双3切能力，尾杀的连续跳同样也考验了在经历了前面的手速炼狱后的剩余耐久

<Beatmap
  sid=1303587
  preview="Nightcore - Comatose (power5)"
  star=3.58
  difficulties=[3.58]
/>

9. 底力检测

<Beatmap
  sid=456986
  preview="Komiya Mao - (can you) understand me? (Sotarks)"
  star=5.01
  difficulties=[2.09,3.52,4.29,5.01]
/>

10. 大跳检测器，也考验一些手控

<Beatmap
  sid=1034008
  preview="DIVELA feat. Hatsune Miku - Beat Syncer (Log Off Now)"
  star=5.72
  difficulties=[2.47,3.44,4.58,5.27,5.72]
alias="节奏同步者"
/>

11. 兔子跳，好听好玩 

<Beatmap
  sid=441155
  preview="Chino(CV.Minase Inori) - Shinsaku no Shiawase wa Kochira! (Shioi)"
  star=5.62
  difficulties=[1.83,2.52,3.50,4.61,5.62]
  alias="新作のしあわせはこちら!"
/>

12. 大跳检测器2

<Beatmap
  sid=443751
  preview="Chino(CV.Minase Inori) - Shinsaku no Shiawase wa Kochira! (Lami)"
  star=5.74
  difficulties=[1.90,2.32,3.27,4.24,5.04,5.74]
  alias="新作のしあわせはこちら!"
/>

什么？你都看到这里了，那我只能送你一点pp曲了

DT：

<Beatmap
  bid=1007352
  sid=471261
  preview="ELISA - Dear My Friend -Mada Minu Mirai e- (TV size) (Rizen) [Easy]"
  star=1.56
  max=190
  alias="Dear My Friendーまだ見ぬ未来へー (TV size)"
/>

<Beatmap
  bid=203993
  sid=71061
  preview="Masato Nakamura - Eggman's Theme (Pereira006) [Insane]"
  star=3.70
  max=179
/>

<Beatmap
  bid=1149713
  sid=542081
  preview="Elmo and Cookie Monster - Cookie-Butter-Choco-Cookie (Monstrata) [Linada's Insane]"
  star=3.62
  max=163
  alias="クッキー・バター・チョコ・クッキー"
/>

<Beatmap
  bid=545933
  sid=235551
  preview="Rammstein - Los (Sieg) [Hard]"
  star=3.75
  max=519
/>

<Beatmap
  bid=1655726
  sid=788905
  preview="Sporty-O - Let Me Hit It (Audiostalkers Original Mix) (eiri-) [Shiinoha's Insane]"
  star=3.55
  max=151
/>

<Beatmap
  bid=1492011
  sid=705423
  preview="Unknown Artist - Miniministop Hitoyasumi no Uta[Mokuyoubi]Gakusei no Uta (Chromoxx) [Chromstrata's Hitoyasumi]"
  star=3.71
  max=123
  alias="迷你 Ministop 小憩之歌【星期四】学生之歌"
/>

<Beatmap
  bid=137111
  sid=43698
  preview="Yasuna to Sonya - Futari no Kimochi no Honto no Himitsu (TV Size) (Nymph) [Insane]"
  star=3.94
  max=324
/>

<Beatmap
  bid=1711830
  sid=816264
  preview="55x55 - MY REZHEM KINOLENTY (feat. Cut The Crap) (Shmiklak) [CUT THE INSANE]"
  star=3.65
  max=158
alias="我们裁切着胶片"
/>

NM：

<Beatmap
  bid=953394
  sid=443589
  preview="Shiena Nishizawa - Meaning (Janpai) [Tears]"
  star=5.05
  max=349
/>

<Beatmap
  bid=2245774
  sid=1073074
  preview="Turbo - PADORU / PADORU (Sotarks) [Gift]"
  star=5.91
  max=192
/>

<Beatmap
  bid=1988753
  sid=952409
  preview="MIMI feat. Hatsune Miku - Ai no Sukima (Log Off Now) [Radiance]"
  star=5.31
  max=346
  alias="哀の隙間"
/>

<Beatmap
  bid=738063
  sid=320118
  preview="Reol - No title (VINXIS) [Lust's Insane]"
  star=5.62
  max=403
/>

<Beatmap
  bid=1059388
  sid=497769
  preview="Drop - Granat (Left) [Extra]"
  star=5.05
  max=241
/>

<Beatmap
  bid=2014469
  sid=962088
  preview="MIMI feat. Hatsune Miku - Marshmary (Log Off Now) [Horizon]"
  star=5.11
  max=433
alias="棉花糖"
/>

<Beatmap
  bid=2025942
  sid=968171
  preview="MIMI feat. Hatsune Miku - Mizuoto to Curtain (Log Off Now) [Lucid]"
  star=5.49
  max=265
  alias="水音とカーテン"
/>

希望大家也变成香喷喷的跳批，早日飞升，以后在隔壁见）`,uh=Object.freeze(Object.defineProperty({__proto__:null,default:ch},Symbol.toStringTag,{value:"Module"})),dh=`---
date: 2024-12-03
---

# SINKA0 的出群遗言

<Player
id=21614712
name="SINKA0"
country=4295
global=0
from="CN"
accuracy=97.93
level=95
progress=25
performance=2995
/>

100h58m47s，再见了大家

我不想走，我才入群4个月啊

但这下不得不走了（都怪手贱打了C TPYE）

新人群氛围真的很棒，你们没出群的就乐吧

舍不得捏（落泪

看到别人用多少小时刷到多少pp都是别人的，不用羡慕或者刻意追赶，每个人的天赋都不一样（也可能对面是pp刷子

所以，可不要老是想着刷pp哦，享受游戏最重要

也不要打歌到自己红温，打不过可能只是状态不好，或者自己底力不够，休息一下，总会好的

红温会毁掉一首歌在心中的印象的！！！

---

另外，不要在群里发有关超星（>5.70*)的东西哦，无论是自己的成绩还是别人的成绩什么的（或者是带星数的截图

*编者注：现在超星上升到6.00*

（某人因为查了mrekk被关了7天）

还有就是

我叫SINKA0，不是SINKAO，也不是SINKAo，更不是SINHKA0之类的什么！！

---

最重要的！：

这是异世界情绪的b站首页：[异世界情绪的个人空间-异世界情绪个人主页-哔哩哔哩视频 (bilibili.com) ](https://space.bilibili.com/488978908?spm_id_from=333.337.0.0)

油管：[ヰ世界情緒 -Isekaijoucho- - YouTube](https://www.youtube.com/@isekaijoucho)

她的歌真的很好听，不听后悔一辈子！！！！

![](/images/lastwords/21614712-1.jpg)

---

小登们，不要觉得出群离你们很远！

不想出群的话就把你们的pp图和跳图全都删掉！！！！（

![](/images/lastwords/21614712-2.jpg)`,mh=Object.freeze(Object.defineProperty({__proto__:null,default:dh},Symbol.toStringTag,{value:"Module"})),ph=`---
date: 2025-03-08
type: simple
---

# Freddy jsjsjs 的出群遗言

<Player 
  id=21768422
  name="-Freddy-"
  country=1430
  global=77864
  from="CN"
  accuracy=98.87
  level=100
  progress=18
  performance=5675
/>

没想到会那么早出群还是bp1上218出的群，还以为出群起码还要一个月，千万别去打水音とカーテン，pp图害人不浅。

建议是多方面发展不要像我一样专攻跳图，现在打串图一张打下来直接手抽筋，新手也不要太在意pp的高低，打打喜欢的歌打打喜欢的谱，在那些喜欢的歌上拿到高acc也是一种享受。所以不要越级，也不要去拿着pp图凹，全方面提升

祝各位早日飞升！！！`,fh=Object.freeze(Object.defineProperty({__proto__:null,default:ph},Symbol.toStringTag,{value:"Module"})),hh=`---
date: 2025-05-25
type: recommend
---

# 5441126653 的出群遗言（关于长串）

<Player 
  id=21943424
  name="5441126653"
  country=5069
  global=341793
  from="CN"
  accuracy=96.58
  level=95
  progress=59
  performance=2508
/>

我是一个爱好打串的玩家（机械键盘和随便一个鼠标），如果你也喜欢串图或者想练串图，希望我的遗言可以帮到你。

首先先是一段的自述：

我是 std 玩家，其实更多玩的是 malody 和 om 的 4k 模式，在 4k 上小有成就后才入坑的 std。至于入坑原因是因为我特别喜欢点兔这部动漫，不过点兔的音游谱 4k 真是太少了，大部分都是 std，为了听歌所以入坑的 std。

接下来说说我是怎么爱上串图的（绝对不是因为跳图太难。。。）

先附上我出群时的 bs

（*编者注：只附带了 10 张*）

<Score
  bid=4466556
  sid=2125044
  preview="-45 - Crimsonic dimension (Sanch-KK) [Phantasm]"
  star=5.01
  max=3509
  mode="o"
  accuracy=98.78
  combo=2087
  rank="a"
  performance=195
/>

<Score
  bid=847314
  sid=128931
  preview="Feint - Tower Of Heaven (You Are Slaves) (eLy) [Extra]"
  star=5.20
  max=1292
  mode="o"
  accuracy=96.86
  combo=361
  rank="a"
  performance=135
/>

<Score
  bid=4108775
  sid=1978407
  preview="-45 - Millarca (228) [Insane]"
  star=4.94
  max=1819
  mode="o"
  accuracy=97.06
  combo=1231
  rank="a"
  performance=129
/>

<Score
  bid=1837859
  sid=878807
  preview="Chino (CV: Minase Inori) - Ashita Genki ni Naare! (UjiMatcha) [Cappuccino]"
  star=4.80
  max=415
  mode="o"
  accuracy=99.07
  combo=319
  rank="a"
  performance=127
/>

<Score
  bid=968065
  sid=451250
  preview="Syaro(CV.Uchida Maaya) - Caffeine Fighter (Doormat) [Kilimanjaro]"
  star=4.84
  max=921
  mode="o"
  accuracy=98.55
  combo=303
  rank="a"
  performance=122
/>

<Score
  bid=4563732
  sid=879890
  preview="SHK - Flight of the Bumblebee (RST Classic) (Riana) [-Tynamo's Insane]"
  star=5.13
  max=748
  mode="o"
  accuracy=96.69
  combo=317
  rank="s"
  performance=120
/>

<Score
  bid=394141
  sid=161526
  preview="Mikami Shiori - Shiawase Gift (Setz206) [Akariiin!]"
  star=5.37
  max=570
  mode="o"
  accuracy=97.44
  combo=256
  rank="a"
  performance=118
/>

<Score
  bid=4785597
  sid=2250284
  preview="-45 - Konba Poison Reverse (Radiownd) [Myling]"
  star=4.97
  max=2842
  mode="o"
  accuracy=95.72
  combo=966
  rank="a"
  performance=116
/>

<Score
  bid=1305437
  sid=551782
  preview="gi(a)rlish number - Bloom (Ayesha Altugle) [Corinn's Extra]"
  star=5.54
  max=1361
  mode="o"
  accuracy=95.72
  combo=240
  rank="a"
  performance=113
/>

<Score
  bid=1347936
  sid=536219
  preview="Chino (CV. Inori Minase) - Mirai Puzzle (LeQuack) [Barista]"
  star=5.11
  max=516
  mode="o"
  accuracy=97.3
  combo=319
  rank="a"
  performance=111
/>

其实也是能看出来一点问题的，我跳图吃的分不比串图吃的少很多，这也有点奇怪，明明我打跳比较少但跳图进步也不慢（也可能我b里的跳图都很简单，适合大家吃分）。

大伙可以挑挑我里面的串图玩玩，一些在群里的串图推荐里有，一些是我自己找到的，我找到的大多是超级长串耐力图，可以适合练习，就比如害我出群的这张：

<Score
  bid=4466556
  sid=2125044
  preview="-45 - Crimsonic dimension (Sanch-KK) [Phantasm]"
  star=5.01
  max=3509
  mode="o"
  accuracy=98.78
  combo=2087
  rank="a"
  performance=195
/>

ok，自述到此为止，接下来讲讲我对于练习串图的心得

---

群里的串图推荐是个非常好的东西，十分推荐大家照着上面的谱打打，都很好玩，我用这个串图推荐的方法是找到里面适合我打的阶段（我对于能打的判定是 boss 曲能 pass 或者高 acc 但是突然死亡），然后专门找里面的长曲来玩，这样可以练习串的同时兼顾了耐力的练习（我也比较喜欢玩长图）。

还有一点需要声明，我打串图的 acc 一般较高（a 一般很轻松，不过s很少，经常漏在莫名其妙的地方）可能是因为有 4k 音游基础的缘故，所以我基本没啥练过准度，准度方面的练习还得靠你自己。

对于发力方面，我是大部分情况左手中指单戳，串的话中指起的单手切，打到高 bpm 长串（180 往上）我会把左手手腕悬空，这样貌似能加快一点点手速。右手的话我是整只手把鼠标把住，手指和手腕都有发力带动鼠标来位移的，有时候鼠标会离开手腕很远，要找个机会把鼠标移回来，这点我还没想到解决方法，只能强行让自己抓鼠标抓更紧一点。

好想貌似能说的就这些了，接下来推荐一些我觉得很适合练习的谱面吧（不建议开no fail和乱糊，建议以高acc为主，不要为了追求高连击而乱打）

我推荐的大多 5 星往上，适合提升自己长串和耐力的玩家尝试。

<Beatmap
bid=4785597
sid=2250284
preview="-45 - Konba Poison Reverse (Radiownd) [Myling]"
star=4.97
max=2842
/>

这张图是我玩的第一张长串图，耐力要求还行，可以练习耐力。

<Beatmap
bid=4466556
sid=2125044
preview="-45 - Crimsonic dimension (Sanch-KK) [Phantasm]"
star=5.01
max=3509
/>

这张也就是导致我出群的歌了，pp非常多的5星，但是因为这图极高的密度和长度，耐力要求非常高，全曲前 2000 左右的 combo 对右手位移要求不会很大，可以试试通过这图拿下 2000 combo 成就（我就是），后面一点右手压力激增，需要把握好耐力分配，防止暴毙。

<Beatmap
bid=4552003
sid=879890
preview="SHK - Flight of the Bumblebee (RST Classic) (Riana) [Cellina's Extra]"
star=5.43
max=751
/>

这是一张 pp 长串图，也是我推荐里不怎么考耐力的图了，bpm175 的长串稳定还是挺有难度的，这图的位移很好玩（随着难度增加）各个星数我都推荐大家去试试，这图还是建议以高连击为主（感觉这图连击高了 acc 也会高的）。

<Beatmap
bid=4108775
sid=1978407
preview="-45 - Millarca (228) [Insane]"
star=4.94
max=1819
/>

这是图全程都有较长串，后半有 4 连和 2 连比较难，这图的跳也很容易断（感觉这跳对我来说难度不低），全图耐力要求很低，可以吃到 pp 的。

<Beatmap
bid=1103841
sid=517769
preview="Metrei - Syaro ga nakisakebinagara Brain Power (Deppyforce) [Ren's Insane]"
star=4.26
max=267
/>

这张图超级短，可以练习双连和长串和大位移，各个难度都可以试一下。

<Beatmap
bid=2167815
sid=1036855
preview="-45 - Midorigo Queen Bee (Cut Ver.) (Kastellan) [153 (230)]"
star=4.69
max=1965
/>

这张图我强烈推荐，练习左手的法门，能把这图轻松拿下的话同 bpm 内应该很少有能难住你左手的串图了，耐力要求非常高！如果打不了的话这图是可以开 no fail 的（因为那个 2 连和滑条太容易海思人了），建议这图以打高 acc 为主。

---

接下来推荐两张我越级的图，不过大家如果要玩的话不要以乱糊为主，把这两张图当做练习图话那就都是非常好的练习图了

<Beatmap
bid=2082018
sid=859515
preview="K A Z M A S A - Bon Appetit S (Oldskool HappyHardcore Remix) (Short Ver.) (BarkingMadDog) [blend s 160 bpm]"
star=5.71
max=2153
/>

160bpm 这个难度我觉得已经足够大家玩了，这图非常适合练习耐力和定位，同时图中有各种速度的大长串，练习串的价值也很高。大家玩这图可以跟我一样，别开 no fail 当成打 boss 一样跟这张图玩（虽然可能跟我一样死了快 300 次还 pass 不了）

<Beatmap
bid=3018109
sid=1470072
preview="Mage - The Words I Never Said (Strategas) [Regret]"
star=5.88
max=2376
/>

这图是练习变速串的好图！在172bpm的加持下左手强度不低，而且右手的大位移也是十分困难，耐力要求也不会低

可以试试跟这张图磕一会儿，对串的位移帮助很大，打法还是同上，不建议开no fail，建议打高acc，连击断在串的话你差不多也没了。。。

---

我想说的差不多就这些了，还有推荐一下-45这个曲师，他的歌曲大多都是低bpm耐力串，很适合练串的人玩。还有一点需要提醒，也是我最近发现的，那些高难串图的跳一般不会简单的，大家不能只练串而完全舍弃了跳的练习。

最后，感谢看到这里的你，让我们一起努力，在串的道路上越走越远吧（

![](/images/lastwords/21943424-1.jpg)`,vh=Object.freeze(Object.defineProperty({__proto__:null,default:hh},Symbol.toStringTag,{value:"Module"})),bh=`---
date: 2024-12-12
type: simple
---

# SayaBeMySide 的出群遗言

<Player 
  id=22765044
  name="SayaBeMySide"
  country=2257
  global=126807
  from="CN"
  accuracy=97.17
  level=99
  progress=7
  performance=4737
/>

玩游戏高兴最重要，不要因为自己进步没别人快、打得没别人好就难受，每个人擅长方向和进步曲线不同。Osu多玩总会有进步的。

实在因为osu比不过别人难受，可以换游戏，如果有放不下的执念，还是先回到现实照顾自己吧，生活比游戏重要。

Mp选图时注意考虑别人的感受。

不要过分或者说不要卖弱和黑屁（类似捧杀的意思），营造良好环境从你我做起，尤其是为了优越感、成就感、虚荣感故意不刷pp）甚至离线，然后<u>**通过卖弱**</u>来让别人夸你。

同时，不推荐过分压pp和离线然后去打比赛，无论是为了一鸣惊人的快感还是对抗自己的自卑感，在游戏里这样投机取巧只是治标不治本。至少去打国际赛，国际赛都是大de（压pp或离线的人），不要来欺负中国人。
`,gh=Object.freeze(Object.defineProperty({__proto__:null,default:bh},Symbol.toStringTag,{value:"Module"})),yh=`---
date: 2024-12-03
type: simple
---

# Llitttefoxy 的出群遗言

<Player
id=25710736
name="KawashiroNitori"
country=4232
global=0
from="CN"
accuracy=97.13
level=97
progress=58
performance=3002
/>

想了半天，发现其实这么点文字写不了什么有帮助的内容。

唯一能简略表述的心得是：想进步就多打打上限（上限指的是能pass而且acc 不低，评级起码有个B，要是有个92acc以上就更好了），对于在新人群的玩家，打上限进步最快了。 

另一个是，pp图可以打，但是不要刷太过头，pp图是用来提款的，不是用来练习的。换句话说，水平足够之后打pp图刷pp可以看成是自己努力的奖励（雾）。 

最后一句：我知道这个文件其实根本没几个人会看，但是还是希望能够与愿意往上爬的各位在之后再次相遇。加油！ 

Mu我：[https://osu.ppy.sh/users/25710736](https://osu.ppy.sh/users/25710736)`,wh=Object.freeze(Object.defineProperty({__proto__:null,default:yh},Symbol.toStringTag,{value:"Module"})),_h=`---
date: 2024-12-03
---

# Yoizuki 奶柚的出群遗言

<Player 
  id=25767690
  name="Yoizuki"
  country=2555
  global=144719
  from="CN"
  accuracy=96.37
  level=100
  progress=35
  performance=4467
/>

终于，还是到了这个时候啊...

2022.1 一只很新很新的萌新加入了这个群。

当时他只有大概560pp。

而今，他有2800pp了。

在2024年的9月（大概），他即将告别新人群，结束在新人群成长的日子。

柚子的故事结束啦～

但别忘了，奶柚的故事才刚刚开始～

那在正式开始进阶群的生活之前，再回顾回顾之前的事情吧～

2022

那大概是4月份的一天吧。

柚子睁开眼，他把自己的青轴键盘放下脚架。

昨天 他刚刚FC了152bpm的串图。

而趁着清晨，他想试一试sbday，188bpm。

随着音乐，柚子展现出了前所未有的手速和flow

拿下了1447combo（78pp）

那时候的柚子才1100pp。

中午，柚子拿下人生的第一个100pp，雪司机。（109）

下午，柚子拿下竹取（73pp）

于是，在新人群里的neu盯上了柚子，而柚子不知道，这意味着什么。

## part.II

如果说，越小级是坐牢的话，柚子则是从天堂跳到了地狱。

6⭐️图层出不穷，除了军训还是军训。

在绝望和希望并存（指pass）的图中

柚子拿下了第一个6*medal。

V0。260bpm的图就这样成为了柚子的6*medal图。

那之后，neu总是拉着我mp。

而我嘛...就这样把耐力和手速，练到了一个特别特别超前的地步。

但...代价是什么呢？

很简单，因为这样，我的跳非常糟糕，走路断的很多。

一旦出现不均衡的发展，就很容易失去良性的打图循环。

这中间柚子pass喷火龙，砍下红老头，拿下神罚pass。

但另一边却是pp rework，以及久久拿不下第二张100pp的图的尴尬。

是啊....这就是越级和糊图的代价

虽然顿悟了flow，但，那真的正常吗，值得吗？

再之后，柚子突然越过110 120 130 一举拿下142pp的bp1

也是现在的bp1，hikari。

再之后，柚子突然被ban（2000pp）。

思索许久，在冷静期期间的柚子继续打图，创造了很多新成绩

那也是柚子的巅峰期-bp1有150pp 超长图 综合图信手拈来

但不幸的是 那时候是2022年的12月。

不出意外。柚子阳了。

0.5秒的大脑反应延迟 让刚展开翅膀飞升的柚子，狠狠地摔在了地面。

## part.3 折戟

在那之后的柚子足足缓了3个月，才重拾osu！

而好消息是 账号回归，但在冷静期里的所有成绩，付之一炬。

哈...

就这样，柚子浑浑噩噩，度过了2023，pp也只是到了2030

## part.4 重启

2024.

暑假里的某一天，柚子望着粉饼，想了想。

要不，再去试试吧？

........

为什么会打osu呢？

曲奇很帅，我也想打fdfd！

拿到数位板的第一刻，打开osu开始游玩

那份激动，还有期待。

慢慢的深入，体会到实力的进步

以及每一次，在面对不可能的时候

“让我试一试吧？”最终拿下 大喊“我做到了！！”

思绪还在飘转。

..........

welcome to osu！

两年过去了，柚子再度拿起笔，那种生疏如初见的感觉传来。

但当他选择谱面，开始游玩的时候，熟悉的感觉传来。

似乎是初见，但却又很熟悉，柚子想揭开这种神秘感。

但

柚子清楚的明白，现在的自己远远不如两年前的那个自信的柚子。

他很自卑。

但他想试一试，他想通过练习，继续去打那些有趣的图。

但或者，已经都过了两年了呀

那～

柚子找到了某个群的备注

“大奶柚”

嗯～那就～

以全新的大奶柚开始，打图！！

奶柚不相信自己不如两年前的自己，一怒之下，再度FC hikari，再度拿到145pp！

奶柚不相信自己过了两年，就不会打串。

奶柚，拿下了sbday！（虽然掉出去了）

奶柚不相信自己真的什么都找不到。

于是奶柚爆发出了260bpm的手速（9连）

---

那，现在再做一个自我介绍吧～

我是Yoizuki，你可以叫我柚子，奶柚，大奶柚，柚妈～

我呢～会一点跳 会一点串 会一点点tech

有点耐力和手速，就是不会ACC（噗嗤

好啦，进阶群再见啦～

我在那里等你哦～

（结尾放一只可爱的爱莉～）

![](/images/lastwords/25767690-1.jpg)`,Sh=Object.freeze(Object.defineProperty({__proto__:null,default:_h},Symbol.toStringTag,{value:"Module"})),kh=`---
date: 2025-02-27
type: simple
---

# xiaobaidan 的出群遗言

<Player 
  id=26795413
  name="MyAngelTendoKei"
  country=3366
  global=21201
  from="CN"
  accuracy=96.17
  level=64
  progress=93
  performance=6681
/>

47h bp1 190pp达成

48h 总pp3000达成

osu其实很简单,重要的是多练

少刷pp图！

少刷pp图！！

少刷pp图！！！

*编者注：多刷。*`,xh=Object.freeze(Object.defineProperty({__proto__:null,default:kh},Symbol.toStringTag,{value:"Module"})),Bh=`---
date: 2025-09-04
type: simple
---

# Adversity0721 的出群遗言

<Player 
  id=27552230
  name="Adversity0721"
  country=4322
  global=276863
  from="CN"
  accuracy=93.03
  level=90
  progress=63
  performance=3000
/>

主包在 21 年 12 月注册 osu 账号，23 年买了数位板开始入坑 osu，从昨天开始打到现在刷了 100 多 pp 刷到 3000

感谢新人群的群友们，也感谢我从新人群里认识的朋友，给我很多的指导。

对osu提升的建议是不要刷太多pp图，也不要越太多级，要打你能力范围的图，日积月累才能提升。

最后给新人方便找pp图的网站：https://osu-pps.com/#/osu/maps

最后祝大家身体健康，万事顺利。`,Ah=Object.freeze(Object.defineProperty({__proto__:null,default:Bh},Symbol.toStringTag,{value:"Module"})),Eh=`---
date: 2024-12-03
---

# fufuOwO 的出群遗言

<Player 
  id=27608705
  name="fufuOwO"
  country=4245
  global=263605
  from="CN"
  accuracy=96.14
  level=96
  progress=45
  performance=3008
/>

2024.7.27 pp3000达成！

就不分享pp图了 反正打来打去大家都是这么几张

一些个人推到3kpp的经验（不一定对 当乐子看就好）↓ 

建议0-2000pp的群友以多打图为主，不需要过分看重fc和pp；适当越级（个人对越级的定义：acc小于90%） 

2000-3000pp 尽量以 acc95 以上为目标，没事可以参与一下群友的mp，主要不是为了pp而是享受游戏乐趣以及接触新的排列（深夜档mp可能会变成超星/抽象图mp，请慎重游玩qwq） 

如果觉得遇到瓶颈可以afk一天或者打点简单的图，千万不要上头红温导致身心收到伤害（来自一个曾经因为状态不佳〇〇未遂玩家的忠告）

以及 pc 效率论禁止，毕竟每个群友有不同的基础和情况，不必过度在意别人进步速度而导致自我内耗

如果不急着出群，接近3kpp时可以不用急着刷pp，我的建议是以推上限为主，可以适当打一些 5.5*以上的图，但切忌沉迷越级（特别是跳图，如果一串跳打出来全是early100，即使 fc 了也算越级，可能会留下手癖） 

以及想进步尽量多打长图！多打长图！多打长图！ 

最后祝大家快乐游戏，早日飞升 (OwO)

以下是个人发电时刻↓ 

<Score
  bid=848345
  sid=380545
  preview="Primary - Sweets Weekend (CaffeAmericano) [Sweet Neko]"
  star=5.35
  max=533
  mode="o"
  accuracy=99.06
  combo=336
  rank="a"
  performance=147
/>

为什么会断为什么会断为什么会断为什么会断气死我了气死我了气死我了气死我了啊啊啊啊啊啊啊啊啊啊啊—— 

（因为断在水段而痛失提前出群的痛苦哀嚎）

<Beatmap
  bid=2491072
  sid=1195818
  preview="Isla (CV: Amamiya Sora) - Suki Nanode. (rosario wknd) [You'll Always be in my Heart]"
  star=4.76
  max=1010
/>

这是艾拉！简直是天使www

我非常喜欢的一张图，都给我去打！！

玩nomod和hd和hr的是有品位的人，玩dt怎么享受音乐！dt禁止！死刑！死刑！！ 

【玩家fufuOwO因发表过激不当引战言论已被封禁】 

以及acc97以上的都是神！受我一拜orz

好像没啥想说的了（？ 

那就在进阶群等各位www 大家加油\\(//∇//)\\

mu我：[https://osu.ppy.sh/users/27608705](https://osu.ppy.sh/users/27608705)（私信我回 mu！） `,Th=Object.freeze(Object.defineProperty({__proto__:null,default:Eh},Symbol.toStringTag,{value:"Module"})),Ih=`---
date: 2024-12-03
type: simple
---

# jaaaagan 的出群遗言

<Player 
  id=27815249
  name="jaaaagan"
  country=25287
  global=130857
  from="US"
  accuracy=97.07
  level=100
  progress=26
  performance=4665
/>

这里是jaaaagan的遗言，先感谢管理这几天没给我直接遣返了，事发突然奶奶确定要手术到去做手术只隔了24个小时，当我打出bp1突破3000的时候一直只能睡觉了，那几天只能闭嘴不讲话，没想到还是被揪出来了，终究还是要告别这里

特别感谢新人群的管理和几位，从6月29号正式开始练习osu到现在，已经过去接近4个月了，新人群文件夹里的东西都是宝藏，各位还没出群的玩家有空可以多看看，一路下来前辈留下的东西帮到了我许多，铺面推荐里的东西在我图荒的时候，帮助真的很大。（千万不要刷pp魔怔了）

希望还在新人群的小登们能赶紧飞升，给进阶群多添加一些活力。（千万不要刷pp魔怔了）

但是也希望各位不要打游戏太上头了，每天多打打不一样的图，不要在一张图上死磕，这样实在是太消磨对游戏的热爱了。多打打自己喜欢听的音乐，多仔细听听鼓点，把acc打高才是实力真正的沉淀了，糊图人pp是难以飞跃的，高acc才是进化的捷径。（不要刷pp魔怔了）

真要想进步也不要打太多的mod，尤其是dt，dt带来的pp是虚假的，很多dt用着3星多的铺面把星数拉到5星多，看样子是同等水平竞技，但是铺面依然是3星的，大部分太简单了，90几个note十几秒一张的图，那个人的bp我还是历历在目，如果他是真在享受我也没啥好说的，人的喜好确实不同，真要想进步稳扎稳打，满满的压榨自己才是最快的路，你能4.5星95acc，想提升就去打5星，阶梯式的难度提升收益永远是稳定且快速的。

在新人群视奸的时候，经常能看到有很多的新人们对自己某项领域并不擅长，甚至不敢打相关的图，想提升但是又解决不了相关的难题。其实各位与其来群里问，不如多正视自己的问题，怕就打，不停的殴打！不停的殴打！直到把你当初不擅长的领域殴打成你的形状，等你回头去看你的pp就会发现，已经飞跃好几百了，但是还是请各位多问问，大家不问我看啥

祝大家早日出群，pp飞涨

**PP？**

p

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

P

**Parrrrrrrrrrrrrrrrrrrrrrrrrrrrrrty!  Of  your  lifetime! ! ! ! ! ! ! ! ! ! ! ! !**

(Everybody come in, everybody to the party)

We're On-lyne, On-lyne

We're On-lyne

Step into the night, where all the stars are bright

We're back again to do this, and we're gonna do it right

Something wild's in the air, I just know it

Now we're moving quicker, keeping on track

And once we hit the scene, there's no turning back

Gonna bring that feeling, gonna feel the heat

On-lyne is in town and we can't be beat

We come alive moving under the neon glow(Everybody rock)

It's the party of your lifetime (everybody rock, yeah)

The signal's strong, can you feel it in the floor? (Everybody rock)

It's the party of your lifetime

Now that you can see, there ain't no stopping me

The city's on 11, it's two thousand degrees

Something big is coming, but it's just the beginning (this is just the beginning, just the beginning)

Neon lights flicker, DJ spins the track

The boys are in sync, and there's no turning back

Now that you're invested, we're turning up the heat

Everybody sing together on the one, two, three

We come alive moving under the neon glow(Everybody rock)

It's the party of your lifetime (everybody rock, yeah)

The signal's strong, can you feel it in the floor? (Everybody rock)

It's the party of your lifetime

Floating higher as the stars align

Here on the edge of 1999

All systems go in this moment like you've never known (you've never known)

Join us, embrace us, don't ever erase us

Join us, embrace us, don't ever erase us (On-lyne's in the house)

Join us, embrace us, don't ever erase us

Join us, embrace us, don't ever erase us (On-lyne's in the house)

Stop!

On-lyne's in the house to bring the party of your lifetime

We come alive moving under the neon glow(Everybody rock)

It's the party of your lifetime (everybody rock, yeah)

The signal's strong, can you feel it in the floor? (Everybody rock)

It's the party of your lifetime

We come to life, we come to life on the floor

This feeling's what we came for
	
The beat is strong, we can feel it in the floor
	
Party of your lifetime

Party of your lifetime
	
Party of your life----time

——JAAAAGAN`,Mh=Object.freeze(Object.defineProperty({__proto__:null,default:Ih},Symbol.toStringTag,{value:"Module"})),Ch=`---
date: 2025-01-23
type: simple
---

# Slavepig 的出群遗言

<Player 
  id=28287625
  name="Slavepig"
  country=1124
  global=60985
  from="CN"
  accuracy=96.01
  level=100
  progress=50
  performance=6136
/>

我从2022.1被朋友拉来玩osu并加入新人群到现在(2025.3)已经3年多时间了，感觉群里除了管理应该没多少人比我在新人群呆的时间长吧。。。

主要原因还是因为前两年没什么时间玩，大部分时间都在afk，一直到2024.10我才开始大量玩，在2025.1.23也是获得了3000pp

记得刚接触osu那时候朋友经常带我开rx打9星，10星图，虽然有点折磨，但是很爽，也是从那个时候开始我养成了越级的习惯，从能pass4星图就不绝打3星图到现在已经看不上6.5星以下的图了，虽然pass7星图很爽，但这也导致我现在几乎只会打跳图，手控一坨，所以各位新人千万千万不要越级

祝各位早日飞升！`,Ph=Object.freeze(Object.defineProperty({__proto__:null,default:Ch},Symbol.toStringTag,{value:"Module"})),Oh=`---
date: 2024-12-03
type: simple
---

# yuanxy 的出群遗言

<Player 
  id=28388886
  name="yuanxy"
  country=2118
  global=117337
  from="CN"
  accuracy=96.46
  level=100
  progress=25
  performance=4892
/>

今，初上号，偶见Doubi_wert正刷in my room，心血来潮，遂带hr初见此图。后观群内消息，Doubi_wert刷上3kpp，出新人群，后观自身，今2.8kpp，或也出新人群，感慨万千，突心生一念，带hrhd刷in my room，不过2pc，得成绩98.68accfc，其有203pp。遂同Doubi_wert出群。

当初加入新人群的时候没有想到会玩到现在这个程度，也没有想过会去选择参加比赛，说起来这次刷出203pp的bp1也可以说是意外，原本在群里看见逗逼要出群了，想着我是不是也该要出群了，然后随手打了一下，真就陪着逗逼一起出群了。最早的时候是被kulib推荐（强迫）加入这个新人群的，后面跟群友mp，拿到了很多好玩好听的谱面，我的水平也提升了不少，或许，能跟群友mp才是我能把这个游戏玩下去的动力吧。我甚至因此产生了自己写一个mpbot的想法，最后是熬了几天夜，把最初的版本写了出来，但是我发现还有许多不足的地方，所以现在把bot关了，想着要再修改一下。对于我来说，这个游戏更像一个社交类型的游戏，自己找到了好玩的谱面，通过mp向好友分享，不在乎其他，单纯的享受这种和其他人一同玩的快乐。所以大伙快来找我mp呀！！`,Rh=Object.freeze(Object.defineProperty({__proto__:null,default:Oh},Symbol.toStringTag,{value:"Module"})),Nh=`---
date: 2024-11-24
type: suggest
---

# 142qwq 的出群遗言

<Player 
  id="28446169"
  name="142qwq"
  country="3685"
  global="249194"
  from="CN"
  accuracy="97.2"
  level="97"
  progress="3"
  performance="2969"
/>

## 关于我

呜呜，不想出群，舍不得⼤伙（

2024-2-28 入群，2024-11-24 出群，是老老登（

### 分享一下个人经历

#### 萌新阶段

以前就经常在 B 站上刷到我的 kz 偶像也是 osu 偶像发的 osu 视频，一直就在好奇这个游戏该怎么玩，但是自己没有音游的经验，所以就只是看看。

然后有一天心血来潮注册了 osu，玩了几局后直接退坑了(太难了！)。真正开始好好玩 osu 应该是去年 10 月(孩子实在没游戏玩了)。那时候我作为萌新发现 osu 最好玩的地方就是可以免费的玩自己喜欢的动漫或者 gal 曲。就这样一直玩到 1200pp，在 B 站刷到了 osu 萌新群出群记录，我才知道这游戏居然还有群 emm. 不过在我加群后，也就只是加了群, 群里面的消息和文件我基本都没有看过. 从 2 月到 10 月，osu 也是断断续续的玩到 1800pp，可以说，我一直是把 osu 当单机游戏玩的（

#### 小转折

在我到达 1800pp 后，这个时候我已经能 pass 4.4 到 5.1 星的图了，但是我发现我对 osu! 的理解跟我刚入坑的时候没有什么差别，这个时候我仍然不明白 CS (circle size)，AR (approach rate)，OD (overall difficulty)，FC (full combo)，ACC (accuracy) 等一些 osu! 术语是什么意思，于是我点开了群文件，发现下载量最高的是 Nana Sakura 的参考指南，然后我下载一份并仔细的阅读了一遍。这份指南不仅解决了我很多术语上的疑问，还推荐了很多图，直到现在，这份指南推荐的许多图还在我的 BP (best performance) 上面, 可以说打开了新天地，我对 osu! 的态度从偶尔娱乐变成了常玩游戏。

#### 大转折

但是但是但是！！！即使是把 osu! 当成常玩游戏，我还是把它当成单机游戏在玩，萌新群对我的意义不过是在没歌的时候去翻翻大佬们推荐的指南和歌单而已。就这样一直玩到 2200pp (此时是 combo 算法改动前夕)，我发现自己实在是受不了高 combo 因为鼠标的复位断掉 combo，于是去咸鱼花了 170 买了一个二手的 472 数位板，可以说数位板有效地解决了我玩 osu! 高血压的问题 (笑)。算法改动后，我的 pp 到了 2500，直接给我加了 300！可想而知鼠标有多害人！(其实是我菜，后继的鼠标大佬别打我.jpg)。

这个时候，我突然发现群里有人在喊 mp (multiple player)，之前我就注意到这个词了，一直不知道是什么意思，百度了一下后才知道 osu! 原来还能联机 (我晕)！ 于是，我第一次和群友联机一块打 osu!，才发现原来 osu! 不仅可以听歌，还能交朋友. 可能交朋友才是重点？ 自那次联机之后，我再也不能沉下心单机刷图了 (恼), 满脑子都是和群友 mpmpmpmp (我可以和你们玩一辈子 mp 吗)。就这样一直玩到出群。

自此，我发现萌新群不止是歌单歌库，还是一个很好的交友平台。在这里非常感谢建立 osu! 交流群的大佬们，没有你们我也体会不到 osu! 的魅力。

最后贴上我的游玩记录

![](/images/lastwords/28446169-1.jpg)

## 给萌新的建议

### 最重要的建议

#### 玩什么样的图？

自己觉得好听的，好看的 (你没看错，有些谱子背景板看了就想去玩)。优先考虑 5 星以下，CS4，AR9，BPM 160-185，OD 7-8 的图。没图了可以去翻翻群文件，找到那种你能稳定 90 acc 的图，慢慢地把 acc 提上去。

### 次要建议 (也是碎碎念)

#### 选择强双还是单双

强双就是 ZX 不断交换戳泡泡，单双就是谱面泡泡少的情况下只用 Z 键，出现多个泡泡比如说三连用 ZXZ。具体定义可以去看群里的文件。我还是萌新的时候只用单双，但是因为我手速太慢了 (测试软件测试只有 140 bpm 呜呜)，遇到一些高密度图吃不消，于是慢慢地从单双转到了强双。我还是建议萌新如果可以最好从强双开始学起，这样可以打大部分类型的谱面，就很难遇到你很喜欢的曲子但是因为自己是单双戳不动的情况，强双是万金油。

#### 如果你耐心不太好，那最好还是换一个数位板

用鼠标玩 osu! 比用数位板难得多，尤其是那种 jump map。喜欢打长图也推荐换数位板，你也不想在自己高 combo 情况下因为复位鼠标断掉吧。

#### 2000pp 前不用太在乎自己的 acc

玩你喜欢的 map，把 osu! 当一个听歌游戏玩就行。2000pp 后，如果你想更进一步，那就要注意自己的 acc 了，最好保持 95 以上。对自己要求高的建议 96, 97, 98, 99。PS: 我在 2300pp 时，acc 只有 90。因为我只是把 osu! 当单机游戏，后面的还债过程可真是痛苦啊()。

#### 还是建议新人把 osu! 当交友游戏玩

这样你就会有源源不断的动力玩下去。既能交友还能提升自己的技术，也可以在 mp 时接触到你没听过、没玩过的好听好玩的图。甚至！！！你还能丢 shit 折磨你的群友。

下面是如何 mp 的案例，一定要勇敢哦

![](/images/lastwords/28446169-2.jpg)

## 致谢

最后，首先在这里感谢 cy 大佬，cy 大佬人非常好，不仅花费自己宝贵时间帮我调我的垃圾电脑，还经常在群里面解答我们萌新的疑问。

然后在这里感谢陪我一起 mp 的小伙伴们，没有你们我也不可能在今天如此喜欢 osu。以及在群里一起吹水的群友。

可以说这一个月是我这一年里最开心的一个月。也希望能看到这份遗言的萌新们，能够坚持把 osu 玩下去，它绝对可以给你带来不少的正反馈的 ~~（当然负反馈也不少就是了）~~。

咱们进阶群见。`,Dh=Object.freeze(Object.defineProperty({__proto__:null,default:Nh},Symbol.toStringTag,{value:"Module"})),Lh=`---
date: 2024-12-03
type: simple
---

# dongguadongde 的出群遗言

<Player 
  id=28494479
  name="dongguadongde"
  country=2277
  global=218527
  from="HK"
  accuracy=92.05
  level=99
  progress=17
  performance=3596
/>

遗言（？

多练

新人不要糊图越级，会死的很惨

有想要打比赛的机会可以来DFC玩娱乐赛 群号173996728

[个人主页](https://osu.ppy.sh/users/28494479)
记得支持

来支持新视频：

[ Minority Myakuraku - ZUTOMAYO [no context] ](https://www.bilibili.com/video/BV1du43eSEkt/?share_source=copy_web&vd_source=8dac9b58577d2456988e6e8bbefa4430)

[ [PB] AiAe - Yuyoyuppe [Eternal] ](https://www.bilibili.com/video/BV13q4gekEh6/?share_source=copy_web&vd_source=8dac9b58577d2456988e6e8bbefa4430)

[ The Big Black - The Quick Brown Fox [WHO'S AFRAID OF THE BIG BLACK] ](https://www.bilibili.com/video/BV1UQxQeJEPc/?share_source=copy_web&vd_source=8dac9b58577d2456988e6e8bbefa4430)
`,Hh=Object.freeze(Object.defineProperty({__proto__:null,default:Lh},Symbol.toStringTag,{value:"Module"})),Fh=`---
date: 2024-12-03
---

# Levels] 的出群遗言

<Player 
  id=28534876
  name="Levels]"
  country=3511
  global=238978
  from="CN"
  accuracy=92.43
  level=80
  progress=40
  performance=3016
/>

2022年入坑，断断续续打了快三年，终于3000pp了

BP前50给大伙参考参考

进阶群见！

<Score
  bid=2201460
  sid=1053509
  preview="ViViD - HIKARI (TV Size) (Log Off Now) [browiec's Wisdom]"
  star=5.95
  max=551
  mode="o"
  accuracy=95.19
  combo=417
  alias="光-HIKARI- (TV Size)"
  rank="a"
  performance=173
/>

<Score
  bid=1612453
  sid=765778
  preview="Icon For Hire - Make a Move (Speed Up Ver.) (Sotarks) [Chromoxx's Extra]"
  star=5.60
  max=246
  mode="o"
  accuracy=95.39
  combo=246
  rank="s"
  performance=166
/>

<Score
  bid=2025942
  sid=968171
  preview="MIMI feat. Hatsune Miku - Mizuoto to Curtain (Log Off Now) [Lucid]"
  star=5.49
  max=265
  mode="o"
  accuracy=94.27
  combo=265
  alias="水音とカーテン"
  rank="s"
  performance=153
/>

<Score
  bid=1675844
  sid=798007
  preview="Will Stetson - Despacito ft. R3 Music Box (Sotarks) [Slowly]"
  star=5.37
  max=240
  mode="o"
  accuracy=93.71
  combo=240
  rank="s"
  performance=142
/>

<Score
  bid=2129143
  sid=1017271
  preview="Nashimoto Ui - AaAaAaAAaAaAAa (Sotarks) [aAaAaaAaAaaA]"
  star=6.18
  max=624
  mode="o"
  accuracy=89.50
  combo=305
  alias="あぁあぁあぁああぁあぁああぁ"
  rank="b"
  performance=139
/>

<Score
  bid=2964230
  sid=1440767
  preview="DM DOKURO - SAVE (Encore) (browiec) [Extreme]"
  star=5.63
  max=522
  mode="o"
  accuracy=94.24
  combo=136
  rank="a"
  performance=136
/>

<Score
  bid=2444149
  sid=1171789
  preview="SPYAIR - Imagination (TV Size) (browiec) [Extra]"
  star=5.42
  max=492
  mode="o"
  accuracy=95.40
  combo=297
  alias="イマジネーション (TV Size)"
  rank="s"
  performance=136
/>

<Score
  bid=2245777
  sid=1073074
  preview="Turbo - PADORU / PADORU (Sotarks) [Kyuukai's Extra]"
  star=5.50
  max=197
  mode="o"
  accuracy=85.52
  combo=195
  rank="b"
  performance=135
/>

<Score
  bid=1620144
  sid=757146
  preview="Tanaka Hirokazu - C-TYPE (Arf) [Bonsai's BasS-TYPE]"
  star=5.46
  max=162
  mode="o"
  accuracy=89.91
  combo=121
  rank="b"
  performance=134
/>

<Score
  bid=1988753
  sid=952409
  preview="MIMI feat. Hatsune Miku - Ai no Sukima (Log Off Now) [Radiance]"
  star=5.31
  max=346
  mode="o"
  accuracy=95.44
  combo=331
  alias="哀の隙間"
  rank="a"
  performance=125
/>
`,Vh=Object.freeze(Object.defineProperty({__proto__:null,default:Fh},Symbol.toStringTag,{value:"Module"})),Kh=`---
date: 2024-12-03
type: simple
---

# FroZZZZZen 的出群遗言

<Player 
  id=29235972
  name="FroZZZZZen"
  country=2097
  global=116656
  from="CN"
  accuracy=97.53
  level=100
  progress=2
  performance=4901
/>

只会哭的香蕉猫，是小男娘

刷出新人群就能来进阶群狠狠撅我了

我等着喵`,zh=Object.freeze(Object.defineProperty({__proto__:null,default:Kh},Symbol.toStringTag,{value:"Module"})),jh=`---
date: 2024-12-21
type: simple
---

# hutaoyv6 的出群遗言Ciallo～(∠・ω

<Player 
  id=29892932
  name="[SHK]hutaoyv6"
  country=936
  global=74207
  from="SG"
  accuracy=98.25
  level=100
  progress=21
  performance=5762
/>

柚子厨天下第一！

也是让我写上遗言了昂。在新人群呆了42天就出群了使我很震撼，也算是一种速通了吧，这么早就3000pp了说实话我萌新还没做明白呢就出新人群了，也算是一种遗憾了吧。

但是作为一名旮旯大神，迟早是要出群的，这是不可避免的事情，也暂时告别新人群群友了。也祝新人脱胎换骨100h3kpp，我在进阶群等你。

![](/images/lastwords/29892932-1.jpg)

另外附上我的线稿

柚子厨天下第一！我是hutaoyv6你记住，我是旮旯给木大神。

Ciallo～(∠・ω< )⌒☆
`,Yh=Object.freeze(Object.defineProperty({__proto__:null,default:jh},Symbol.toStringTag,{value:"Module"})),Uh=`---
date: 2024-12-03
type: simple
---

# ChengAe 的出群遗言

<Player 
  id=30125315
  name="ChengAe"
  country=248
  global=15754
  from="CN"
  accuracy=97.84
  level=103
  progress=44
  performance=8678
/>

孩子们，我转板了！

孩子们，我发现我好像会打跳图！

孩子们，我差点被no title肘飞！

孩子们，我被c-type肘飞了！！！

——不知道什么时候能打赢复活赛回来（x）

一些建议：

别硬刷，会红温，真的会红温！

少碰高bpm、ar10、od10，或者说dt和hr. 这些东西迟早要练，但在萌新阶段练只会败坏你的手感！

鼠标玩家感觉坐牢就赶快转板！

一些神秘的练习方式：

越级(+hr)+rx+用力握笔

200bpm高难串+lazer（用于避免notelock）+适当倍速的ht

抠掉retry键(?`,Gh=Object.freeze(Object.defineProperty({__proto__:null,default:Uh},Symbol.toStringTag,{value:"Module"})),Wh=`---
date: 2025-12-09
---

# alone_1324 の出群遗言

<Player 
  id=30320667
  name="alone_1324"
  country=2765
  global=265997
  from="HK"
  accuracy=98.21
  level=83
  progress=77
  performance=3022
/>

两天速通你群的龙比：

什么时候入坑的 osu(lazer) 已经不记得了，最近可能也是实在无聊才想起电脑里还有 osu，然后一打开就停不下来力） 

上一次玩 o 已经至少是半年~一年前了 当时还只能打 3.4 以下的难度 并且 acc 也很低，b1 也只有 73pp 的一首水歌。 没想到复键短短五天能从 1600 飞升到 3000pp。

突然能打 4.5+ 甚至 5+ 难度（水谱5）我自己也很震惊。不过感觉也差不多到快到自己的鼠标定位极限 le

*ps：本人有扎实的移动端/街机音游基础！底力比较好所以才可能飞升如此之快~*

进群纯纯是因为大晚上打完o无聊翻了一眼b站的视频找到的群awa（终于找到玩家群力）

---

接下来讲讲个人觉得打 osu 的几个习惯和技巧吧

首先主包的灵敏度是 1200* 游戏内 1.65x（1980edpi）lazer 版本 2k165hz 键鼠操作

1. 打歌前或者途中根据手感，椅子高度一定要调好了。不然打着就不怎么舒服。
2. 鼠标的握法 如果灵敏度不是很高的话感觉都还好，但是如果灵敏度偏高的话个人感觉得握紧一些鼠标。比如打跳的配置如果握不紧会飘，尤其是在bpm比较快的地方表现更明显。
3. 尽量不要让右手的移动受限制/移动困难，不然定位某一方向的准度将会降低很多。能保持在往上下左右移动都比较舒适的情况下是最好的。
4. 鼠标转圈的时候一定不要大幅度/太用力的转，除非你有很好的鼠标复位能力，不然转圈之后的短暂时间内定位是非常非常影响手感的。如果转圈幅度大 最后停留的位置让你的右手移动鼠标很不舒适也很难受（主播之前转圈就是很想转满费力去转 速度有 500 多 圈是转满了但是手感毁了并且很有可能导致转完圈的下一个点击会 miss 掉）总之对于新手来说优先保证 acc ,圈正常转到不爆 gr 就够了
5. 个人感觉把按键改到方向键上打的会更舒服一些 尤其是打串的手感提升了很多（仅个人观点 原来主播的按键是R和G）

![](/images/lastwords/30320667-1.jpg)

<div style="text-align: center; font-size: 0.8em; color: gray;">
    如图 左方向键可以设置成快速重开(原~键功能) 其余三个键可以根据个人习惯设置 主包是上和右
</div>

**不要把 pp 看的太重了！！玩音游享受音乐才是最重要的！**

**打自己喜欢的歌，玩自己喜欢的谱才是音游的真谛！**

**给看到这里的大佬们推荐一点我自己觉得谱面做的还不错的歌**

<Beatmap
bid=1658801
sid=790041
preview="Roselia - Six Trillion Years and Overnight Story (Doormat) [Insane]"
star=5.01
max=618
/>

<Beatmap
bid=4869472
sid=2283381
preview="JAWNY - Honeypie (Bloxi) [OH HONEY HONEY PIE, HONEY HONEY HONEY PIE]"
star=3.85
max=461
/>

<Beatmap
bid=1046830
sid=385088
preview="Crywolf - Eyes Half Closed (Truzon) [Remap]"
star=5.28
max=531
/>

<Beatmap
bid=3716285
sid=1811717
preview="Porter Robinson - Everything Goes On (Star Guardian Version) (Sped Up Ver.) (Sotarks) [Top Diff]"
star=5.59
max=764
/>

<Beatmap
bid=3217116
sid=1575739
preview="The Kid LAROI, Justin Bieber - Stay (Log Off Now) [Wasted]"
star=4.87
max=503
/>

<Beatmap
bid=733755
sid=331190
preview="Asterisk - Ren-chon no Drum 'n' Bass (Deppyforce) [Extra]"
star=5.58
max=316
/>

<Beatmap
bid=4991747
sid=2328218
preview="MIMI - Science (feat. Kasane Teto SV) (Rino Inosaki) [Solution]"
star=5.82
max=925
/>

<Beatmap
bid=4058451
sid=1796464
preview="Kairiki bear feat. Hatsune Miku - BUG (sukii) [Lost Extra]"
star=5.7
max=951
/>

<Beatmap
bid=5000992
sid=2331063
preview="DECO*27 - Telepathy feat. Hatsune Miku (AirinCat) [Kyousuke's MEME Extra]"
star=5.74
max=942
/>

<Beatmap
bid=4011524
sid=1940162
preview="Feint - We Won't Be Alone (feat. Laura Brehm) (Cut Ver.) (Kuki1537) [Everlasting Warmth]"
star=5.57
max=595
/>

Eyes Half Closed 不是上架谱面，成绩不计 pp，单纯谱面写的很爽

~~(上图中没写出来的部分歌是单纯主观意义的喜欢 您要想打可以自行搜索) \\*标为很推荐~~

下面还有awa

最后再放一张自己的b20图片~很多都是水歌 可以参考爽吃pp！

（*编者注：只有 10 个*）

<Score
  bid=4907182
  sid=2295884
  preview="Porcelain Black - Pretty Little Psycho (Nightcore & Cut Ver.) (Fufla) [Insane]"
  star=5.70
  max=266
  mode="o"
  accuracy=97.11
  combo=159
  rank="a"
  performance=181
  mods="DT"
/>

<Score
  bid=2025938
  sid=968171
  preview="MIMI feat. Hatsune Miku - Mizuoto to Curtain (Log Off Now) [Extra]"
  star=5.14
  max=257
  mode="o"
  accuracy=98.76
  combo=257
  rank="s"
  performance=165
alias="水音与窗帘"
/>

<Score
  bid=5000435
  sid=2331063
  preview="DECO*27 - Telepathy feat. Hatsune Miku (AirinCat) [Insane]"
  star=4.90
  max=805
  mode="o"
  accuracy=99.37
  combo=805
  rank="s"
  performance=163
/>

<Score
  bid=2014469
  sid=962088
  preview="MIMI feat. Hatsune Miku - Marshmary (Log Off Now) [Horizon]"
  star=5.21
  max=433
  mode="o"
  accuracy=98.45
  combo=394
  rank="a"
  performance=161
alias="棉花糖"
/>

<Score
  bid=3217116
  sid=1575739
  preview="The Kid LAROI, Justin Bieber - Stay (Log Off Now) [Wasted]"
  star=4.87
  max=503
  mode="o"
  accuracy=98.83
  combo=291
  rank="a"
  performance=159
/>

<Score
  bid=2231267
  sid=1061287
  preview="Turbo - PADORU / PADORU (DeRandom Otaku) [Light's Expert]"
  star=4.99
  max=173
  mode="o"
  accuracy=100.0
  combo=173
  rank="ss"
  performance=158
/>

<Score
  bid=4820866
  sid=2264468
  preview="25-ji, Nightcord de. x KAITO - BAKENOHANA (Doormat) [Insane]"
  star=4.96
  max=640
  mode="o"
  accuracy=98.66
  combo=639
  rank="s"
  performance=156
/>

<Score
  bid=2223144
  sid=1061287
  preview="Turbo - PADORU / PADORU (DeRandom Otaku) [Anzei's Another]"
  star=4.97
  max=180
  mode="o"
  accuracy=100.00
  combo=180
  rank="ss"
  performance=155
/>

<Score
  bid=5016472
  sid=2328218
  preview="MIMI - Science (feat. Kasane Teto SV) (Rino Inosaki) [Amats' Insane]"
  star=4.77
  max=949
  mode="o"
  accuracy=99.27
  combo=945
  rank="s"
  performance=153
/>

<Score
  bid=1403949
  sid=444079
  preview="SawanoHiroyuki[nZk]:Tielle - Into the Sky (TV size) (TT Mouse) [Kencho's Mobile Suit]"
  star=4.74
  max=425
  mode="o"
  accuracy=98.74
  combo=424
  rank="s"
  performance=145
/>

b1,2,4,6,8,10,14,20 都不是很长且比较水 好吃分 推荐喵~

群里大家都很友善喵 人也很好喵 最喜欢大家了喵！

愿看到这里的你也能马上飞升喵！加油喵~ 

未来进阶群再见了喵~拜拜喵~

<br>

Player 

alone_1324`,$h=Object.freeze(Object.defineProperty({__proto__:null,default:Wh},Symbol.toStringTag,{value:"Module"})),Jh=`---
date: 2024-12-03
---

# Doubi_wert 的出群遗言

<Player 
  id=30512018
  name="Doubi_wert"
  country=4180
  global=260194
  from="CN"
  accuracy=97.17
  level=99
  progress=6
  performance=3017
/>

——我左手无力，右手不精，眼神涣散，反应迟钝，没一个combo接上的，就我这样还想出群吗？

Ciallo～(∠・ω< )⌒☆这里是完全没有天赋的逗比（wert是滚键盘滚出来的）一枚！！！ 

<mark>（强调：不是抖逼！不是抖逼！不是抖逼！）</mark>

**B站账号：逗比wert**

纯鼠（0~1200pp）、键鼠（1200pp~2600pp）、键板（2600pp~3000pp）。如果你是鼠标玩家，请务必注意自己的dpi，高dpi将会对右手有较高的要求，增加负担，导致进步缓慢（我原来是2400dpix2，打了三个月也没打出50pp，在ppchara主办的STDC S0中被热心的群友们指出降低dpi，改为了2400dpix1，当天就从2200pp飞到了2400pp）。本人是强双玩家，原因是纯属阶段也打打太鼓，太鼓用的强双手法，于是转键鼠之后就强双了。

## 一些个人经历：
22年6月高考结束接触屙屎（因为听说社区音游有很多自制谱，可以找到自己想要的歌），找到了自己想听的歌，然后被虐到退游，强烈推荐这张图：君だったら(bid: 743126)，虽然只有2.56，但是其难度在同级中可谓佼佼。（难点：小圈，2.5的跳）

<Beatmap
  bid=743126
  sid=333434
  preview="Koiwai Kotori, Murakawa Rie, Sakura Ayane & Asumi Kana - Okaeri (kakerunochi) [Hard]"
  star=2.43
  max=212
/>

23年6月重拾屙屎，7月加入了学校的屙屎群，得到了好心人们（Misaki daisuki、Okamiroy、[Arctor]、Mitto……）的指导，并在Misaki daisuki的介绍下于11月进入新人群（因为我过于佛系地打屙屎从来不刷pp，能FC4.5跳图了pp却只有500出头，Misaki daisuki一怒之下让我进新人群，“进去之后你就会忍不住刷pp了”，于是一直刷混到了2024年6月29日）

更多想了解的直接去屙屎官网我的主页的个人介绍~

本人是个跳批，顺带会打点alt，不会连打，不会滑条，不会tech。

## 下面是推图环节：

<Beatmap
  bid=1764572
  sid=843407
  preview="Harukaze Mayuki - Futatsu no Kage (kpx-x) [Aya]"
  star=3.72
  max=863
/>

3.7*跳图，AR8

本人凹了不下百遍

从最初的pass不能到最大连康100不到勉强pass到FC，逐渐学会了跳，打破了瓶颈，开始接触四星图

建议500pp左右不会跳图的新人练习

我遇见新人必推的图之一

<Beatmap
  bid=2961839
  sid=1239626
  preview="cinnamons x evening cinema - summertime (Foxy Grandpa) [nathan's insane]"
  star=4.21
  max=1082
/>

4*alt图

Misaki daisuki推给我的，我接触到的第一张alt图，十分折磨，迄今未能收歌

刚接触alt图打起来可能会觉得很shit，但是逐渐你就会发现其中敲打的快感。

Misaki daisuki：“跳的排列你当成低速连打打”

<Beatmap
  bid=1027175
  sid=480789
  preview="Tainaka Sachi - Saikou no Kataomoi (On Air Ver.) ([ Abhor ]) [Insane]"
  star=3.97
  max=315
/>

3.9*跳图

略带遮挡的跳，初见容易寄，能够练跳的基本功（个人认为）

我遇见新人必推的图之一

<Beatmap
  bid=3674206
  sid=1792876
  preview="HoneyWorks feat. Narumi Sena x Narumi Mona (CV: Amamiya Sora, Natsukawa Shiina) - Yume Fanfare (TV Size) (sanairrt) [Lovely Insane]"
  star=4.83
  max=489
/>

<Beatmap
  bid=830360
  sid=297969
  preview="yuikonnu - caramel heaven (sukiNathan) [Insane]"
  star=4.85
  max=1302
/>

4.6*连打图

Misaki daisuki见我只会打跳，于是塞给我了kagami的连打图推荐，最喜欢的就是这张。

非常好的连打图，使我疯狂卡指！

<Beatmap
  bid=3081130
  sid=1503907
  preview="daniwellP - Hatsune Miku ga Enshuu-Ritsu 10,000-keta Oboeta Youdesu. (-Aku) [Pi Master]"
  star=3.55
  max=10258
/>

3.3*的圆周率

嗯可以当作aim练习使用，我迄今只完整打了2pc（纯鼠转键鼠后以及键鼠转键
板后），但是每一次打完之后aim的稳定性和强双打简单节奏的稳定性都得到了极大的提升！

非常推荐闲着没事的萌新来练习！

## 在新人群认识了好多朋友，在此鸣谢：

[Nana Sakura](https://osu.ppy.sh/users/32452774)

非常可爱的猫猫，每天打屙屎的第一件事就是捏捏猫猫的脸！

没能信守诺言等猫猫出群真的很抱歉，祝愿猫猫早日出群！

[ElegiaET](https://osu.ppy.sh/users/35778917)

非常有潜力的新人捏，也算是我亲手栽培（坑害）的第一个新人！

快点刷到2kpp来进阶群陪我！

[Paraliesa](https://osu.ppy.sh/users/30595368)

非常可怕的凶脸猫猫头，天赋批速通新人群，~~天天咬我~~。
希望猫猫头早日成为OWC选手！

[-Inui Sana-](https://osu.ppy.sh/users/9043058)

天天盼望大家出群的CY，希望大家都能实现CY的愿望。

<mark>CY mu我！CY mu我！CY mu我！CY mu我！CY mu我！</mark>

遗愿未能完成，希望有大佬替我在新人群内实现！

HD 99ACC FC此图：

<Beatmap
  bid=3718752
  sid=1812791
  preview="Tsukimi Eiko (VO: 96neko) - Sakuranbo (Akitoshi) [Blooming Smile]"
  star=5.21
  max=1155
/>

最后附上CY的经典语录（我是要超猫猫头的男人！）

![](/images/lastwords/30512018-1.jpg)

![](/images/lastwords/30512018-2.jpg)




`,Xh=Object.freeze(Object.defineProperty({__proto__:null,default:Jh},Symbol.toStringTag,{value:"Module"})),Zh=`---
date: 2026-10-08
type: simple
---

# Wang_12345 的遗言

<Player
id=30526925
name="Wang_12345"
country=4679
global=301036
from="CN"
accuracy=95.72
level=98
progress=42
performance=2997
/>

串是好的，跳是坏的，但是，很遗憾，我的 bs 全是跳图😡😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭 😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭

所以，串到底怎么打？

不管了😡诶，这是什么？粉毛图！[ 注：PP图少打怡情，多打伤身，切记不要让PP控制了你的大脑哦！可以多多尝试复杂多变的图，有时，一些奇怪有趣的排列也会让你会心一笑，这就是“史”图的魅力口牙！（比如我把所有的galgame图都下了下来]😧打一下😋

最后，推荐一张图，我认为非常具有想象力，好吃😋

<Beatmap
sid=2409120
preview="TYSM - Normal No More (Huan Gei Wo Shen ID Remix) (09kami)"
star=4.93
difficulties=[1.61,2.58,3.07,4.22,4.93]
alias="Normal No More (还给我神ID Remix)"
/>

最后的最后，我认为打 osu 最重要的是心态，陷入瓶颈期时，不妨放下一周或是一个月，再拾起时，你会有新的感受。

（编者注：下面有一百条 喵にゃーmiaow）

`,qh=Object.freeze(Object.defineProperty({__proto__:null,default:Zh},Symbol.toStringTag,{value:"Module"})),Qh=`---
date: 2024-12-03
type: simple
---

# Paraliesa 的出群遗言

<Player 
  id=30595368
  name="[SHK]Paraliesa"
  country=776
  global=42265
  from="CN"
  accuracy=98.2
  level=100
  progress=51
  performance=6826
/>

我是要成为owc选手的人！`,n9=Object.freeze(Object.defineProperty({__proto__:null,default:Qh},Symbol.toStringTag,{value:"Module"})),e9=`---
date: 2024-12-03
type: simple
---

# xX_DeSu_Xx 的出群遗言

<Player 
  id=30629671
  name="1hot"
  country=1362
  global=124723
  from="HK"
  accuracy=97.18
  level=99
  progress=63
  performance=4767
/>

我是露娜Sama的狗 !

我是露娜Sama的狗 !

我是露娜Sama的狗 !

重要的事情说三遍 !

我想留下的只有

少打跳 少刷pp 多练skill !!!

如果不做就会和我一样成为pp刷子了 (啥skill都没有)

有朝一日我会倒刷回来的 !!! (划掉)

最后再见新人群的米娜桑 希望还能在进阶群遇到大家呢!!!

Osu给我带来了很多乐趣 最喜欢Osu了!!!`,a9=Object.freeze(Object.defineProperty({__proto__:null,default:e9},Symbol.toStringTag,{value:"Module"})),t9=`---
date: 2024-12-03
---

# Asane779 的出群遗言

<Player 
  id=30654176
  name="Asane779"
  country=4199
  global=264756
  from="CN"
  accuracy=90.81
  level=96
  progress=26
  performance=3004
/>

作为从去年七月入群的老登，看走一大批飞出去的老大小登，没想到今天就轮到我了。在最后感谢在野房排到的Atahana将我拉入新人群这个大集体，也感谢群里各位大佬的悉心指导，感谢rework，也祝各位群u能早日飞到进阶群！附带一份bp参考

<Score
  bid=799913
  sid=364401
  preview="Shiena Nishizawa - Meaning (Taeyang) [True Meaning]"
  star=5.81
  max=746
  mode="o"
  accuracy=96.37
  combo=420
  rank="a"
  performance=166
/>

<Score
  bid=1570203
  sid=744772
  preview="toby fox - Last Goodbye (Fatfan Kolek) [Determination]"
  star=6.32
  max=484
  mode="o"
  accuracy=88.10
  combo=428
  rank="b"
  performance=157
/>

<Score
  bid=2347578
  sid=1123162
  preview="Sayuri - Sore wa Chiisana Hikari no Youna (TV Size) (Kuki1537) [browiec's Expert]"
  star=4.03
  max=338
  mode="o"
  accuracy=94.82
  combo=281
  rank="s"
  performance=152
alias="犹如微弱的光芒"
/>

<Score
  bid=2245774
  sid=1073074
  preview="Turbo - PADORU / PADORU (Sotarks) [Gift]"
  star=5.91
  max=192
  mode="o"
  accuracy=89.56
  combo=159
  rank="b"
  performance=148
/>

<Score
  bid=3257742
  sid=1594964
  preview="Rika (CV: Tamura Yukari) & Satoko (CV: Kanai Mika) & Hanyuu (CV: Horie Yui) - Happy! Lucky! Dochy! (TV Size) (Log Off Now) [1-2-3]"
  star=6.34
  max=640
  mode="o"
  accuracy=92.94
  combo=369
  rank="a"
  performance=145
/>

<Score
  bid=746737
  sid=337527
  preview="Lia - Bravely You (TV Size) (Homura-) [KIRANAGAMATU's Insane]"
  star=3.93
  max=404
  mode="o"
  accuracy=94.67
  combo=403
  rank="s"
  performance=144
/>

<Score
  bid=968350
  sid=437097
  preview="Yura Hatsuki - Yuki no Hana (Lan wings) [Sharlo's Insane]"
  star=4.29
  max=346
  mode="o"
  accuracy=93.36
  combo=116
  rank="a"
  performance=141
/>

<Score
  bid=2250747
  sid=1073074
  preview="Turbo - PADORU / PADORU (Sotarks) [Fatfan's Extreme]"
  star=5.88
  max=194
  mode="o"
  accuracy=77.28
  combo=193
  rank="c"
  performance=139
/>

<Score
  bid=2627437
  sid=1242911
  preview="Qrispy Joybox feat. mao - Colorful Minutes (Kuki1537) [Insane]"
  star=4.05
  max=424
  mode="o"
  accuracy=94.48
  combo=395
  rank="a"
  performance=138
/>

<Score
  bid=2449789
  sid=1174505
  preview="The Cab - Angel With A Shotgun (Sped Up Ver.) (Sotarks) [Nevo's Insane]"
  star=4.05
  max=328
  mode="o"
  accuracy=89.35
  combo=323
  rank="a"
  performance=138
/>`,i9=Object.freeze(Object.defineProperty({__proto__:null,default:t9},Symbol.toStringTag,{value:"Module"})),r9=`---
date: 2024-12-03
type: simple
---

# xianyuOvO 的出群遗言

<Player 
  id=30849263
  name="xianyuOvO"
  country=1443
  global=78532
  from="CN"
  accuracy=98.54
  level=100
  progress=29
  performance=5655
/>

这里是键鼠单双菜鸡咸鱼。没想到进群一个多月就刷到了3000pp，在感慨自己进步之快的同时，也很开心遇到了一群一起玩osu的朋友。感觉真正开始玩osu也不过2个月，总之进了进阶群后继续努力吧，也说不定什么时候就不玩了)

对新人说的话:

在不断提升自己技术的同时也不要忘了玩osu的初心，累了就停下来休息一下，你的双手是为了你的一生服务的，而不是osu!

ps:等上了4000pp，我就女装！`,s9=Object.freeze(Object.defineProperty({__proto__:null,default:r9},Symbol.toStringTag,{value:"Module"})),o9=`---
date: 2025-02-28
---

# NagiSea 的遗言和建议

<Player 
  id=31100455
  name="NagiSea"
  country=1827
  global=99685
  from="CN"
  accuracy=98.08
  level=100
  progress=15
  performance=5221
/>

唉还是到这一天了吗 
我补药出群---

我是分割线

很久以前就知道有osu这个音游但是最后吸引我入坑的是这个奇奇怪怪的视频（

[https://www.bilibili.com/video/BV1x3411c7jh/?spm_id_from=333.337.search-card.all.click](https://www.bilibili.com/video/BV1x3411c7jh/?spm_id_from=333.337.search-card.all.click)

当时感觉很好玩就下了玩玩，但也就是下载了试试看，感觉太难了就把这游戏晾一边了

2024年11月 我朋友突然问我知不知道osu这个游戏，他想下个玩玩。

帮他下了以后我自己也下了一个，开始一起找图玩→然后就开始一发不可收拾了。

最开始是纯鼠，因为有fps基础，所以打的还凑合。有一天在网上突然刷到了有人用数位板打o的视频

突然想起来我也有个数位板。于是就开启了新世界（飞升）的大门。

以下是一些个人游玩经验 

少越级，11月刚开始打的时候仗着自己有fps基础，极度自信，上来就打5星图.然后就被打爆了....之后为了pass4星5星开始硬越导致acc烂完了，还养成了不少坏习惯，

记得我刚入群的时候只有82的acc。修了好一整子才把acc补回来

多mp 非常感谢入坑的时候wanghou50就开始拉着我mp（赤石）多mp不仅可以快速认识一些同水平的人，还能偷图（主要优点）

别为自己的水平焦虑，每个人的进步曲线是不一样的。 

多翻翻群文件的图，里面藏了不少好东西

以下是一些推图 4.5星-5.5星

<Beatmap
  bid=1054507
  sid=495334
  preview="Raujika - Roseo Neige (sahuang) [Tranquility]"
  star=4.80
  max=1040
/>

这张图的主难4.66和4.90次难都很有意思 小跳

<Beatmap
  bid=1071754
  sid=503486
  preview="Tia - The Glory Days (Beomsan) [Down's Insane]"
  star=4.76
  max=445
/>

<Beatmap
  bid=823688
  sid=371569
  preview="Minamotoya feat. Kuroa* - Hana Kagerou (DreaM117er) [Extreme]"
  star=4.83
  max=599
  alias="華陽炎-Hana Kagerou-"
/>

连打比较多

<Beatmap
  bid=1017602
  sid=357777
  preview="NOMA - Brain Power (Jacob) [Exote's EXHAUST]"
  star=4.38
  max=743
/>

连打入门图

<Beatmap
  bid=574471
  sid=249939
  preview="Fujijo Seitokai Shikkou-bu - Best FriendS (No Dap) [Insane]"
  star=4.83
  max=1184
/>

好玩的4.9长图

<Beatmap
  bid=3228870
  sid=1572909
  preview="Silent Siren - Hachigatsu no Yoru (Cut Ver.) (Log Off Now) [Insane]"
  star=4.58
  max=577
  alias="八月の夜 (Cut Ver.)"
/>

跳图

<Beatmap
  bid=949888
  sid=441155
  preview="Chino(CV.Minase Inori) - Shinsaku no Shiawase wa Kochira! (Shioi) [Son's Insane]"
  star=4.61
  max=632
  alias="新作のしあわせはこちら!"
/>

跳图

<Beatmap
  bid=2118443
  sid=983911
  preview="S3RL - Bass Slut (Original Mix) (Fatfan Kolek) [Reform's Filthy Expert]"
  star=4.87
  max=492
/>

经典pp图 5.1的也能打

<Beatmap
  bid=1821561
  sid=871187
  preview="BAND-MAID - Choose me (Yukiyo) [Choose NotEnough's Insane]"
  star=5.06
  max=1315
/>

4.9综合图 较难

<Beatmap
  bid=4758242
  sid=2231831
  preview="Minato Aqua - Kira Kira (Karen) [Liyuu_0109's Insane]"
  star=4.98
  max=1009
  alias="きらきら"
/>

跳图

<Beatmap
  bid=3078623
  sid=1429397
  preview="Takanon feat. sana - Shitsuren Repeater (sanairrt) [Chu's Insane]"
  star=4.69
  max=1048
  alias="失恋リピーター"
/>

忘了（

<Beatmap
  bid=2427895
  sid=1163834
  preview="Yorushika - Yoru Magai (CoLouRed GlaZeE) [Insane]"
  star=5.00
  max=1080
  alias="夜紛い"
/>

小跳 简单

<Beatmap
  bid=325209
  sid=128432
  preview="Aki - Wanna Be My Dream (Lortus) [Insane]"
  star=4.68
  max=1050
/>

综合图 较难

<Beatmap
  bid=513551
  sid=204399
  preview="ALiCE'S EMOTiON - Cold Rain (Yauxo) [oko's Insane]"
  star=4.89
  max=742
/>

跳图

<Beatmap
  bid=4778667
  sid=2211981
  preview="Ogura Yui - Honey Come!! (TV Size) (MochiA) [AsuKo's Insane]"
  star=4.74
  max=434
/>

跳图 难

<Beatmap
  bid=1812549
  sid=720066
  preview="Yuzuki - Dear You (DJ Genericname DnB Remix) (Spkz) [Dear Jinx (Insane)]"
  star=4.79
  max=629
/>

5*入门综合图

<Beatmap
  bid=967248
  sid=420390
  preview="Machico - fantastic dreamer (Rizia) [Kisses' Insane]"
  star=5.20
  max=1294
/>

综合图

<Beatmap
  bid=4263552
  sid=2037770
  preview="SILENT SIREN - Hachigatsu no Yoru (Akitoshi) [Another]"
  star=5.38
  max=1475
  alias="八月の夜"
/>

跳图

<Beatmap
  bid=466789
  sid=196813
  preview="DJ Genericname - Dango Dango Daikazoku (Drum and Bass Remix) (Moo-Chan) [Insane]"
  star=4.96
  max=626
/>

切

<Beatmap
  bid=366142
  sid=147962
  preview="UPLIFT SPICE - Omega Rhythm (Jemmmmy) [lightr's Insane]"
  star=5.21
  max=1023
  alias="オメガリズム"
/>

串串

<Beatmap
  bid=290581
  sid=111760
  preview="Toyosaki Aki - Diamond (Fycho) [Insane]"
  star=5.07
  max=816
  alias="ダイヤモンド"
/>

5*入门跳图

附上bp

<Score
  bid=1054507
  sid=495334
  preview="Raujika - Roseo Neige (sahuang) [Tranquility]"
  star=4.80
  max=1040
  mode="o"
  accuracy=99.20
  combo=767
  rank="s"
  performance=161
/>

<Score
  bid=2923009
  sid=1418780
  preview="Ren feat. Hatsune Miku - Tougetsu, Rinzen ni Kisu. (Log Off Now) [Touch Your Dreams]"
  star=5.38
  max=905
  mode="o"
  accuracy=97.86
  combo=449
  alias="冬月、凜然に帰す。"
  rank="a"
  performance=154
/>

<Score
  bid=4834210
  sid=2233944
  preview="Faylan - Path to glory (Game Ver.) (tomatas95) [Scarlet Vision]"
  star=5.73
  max=610
  mode="o"
  accuracy=97.10
  combo=187
  rank="a"
  performance=147
/>

<Score
  bid=1988753
  sid=952409
  preview="MIMI feat. Hatsune Miku - Ai no Sukima (Log Off Now) [Radiance]"
  star=5.31
  max=346
  mode="o"
  accuracy=97.72
  combo=234
  alias="哀の隙間"
  rank="a"
  performance=145
/>

<Score
  bid=2096800
  sid=1001653
  preview="MIMI feat. Hatsune Miku - Mizuoto to Curtain (Mak Kau Hijau) [Sabishii]"
  star=5.58
  max=894
  mode="o"
  accuracy=97.35
  combo=236
  alias="水音とカーテン"
  rank="a"
  performance=145
/>

<Score
  bid=1620144
  sid=757146
  preview="Tanaka Hirokazu - C-TYPE (Arf) [Bonsai's BasS-TYPE]"
  star=5.46
  max=162
  mode="o"
  accuracy=93.83
  combo=85
  rank="a"
  performance=142
/>

<Score
  bid=2222070
  sid=1061287
  preview="Turbo - PADORU / PADORU (DeRandom Otaku) [Christmas Drift]"
  star=5.77
  max=179
  mode="o"
  accuracy=93.98
  combo=116
  rank="a"
  performance=142
/>

<Score
  bid=3393469
  sid=1662256
  preview="KOCHO - Hanyamaru Manten, Zenitendou. (TV Size) (Xahlt) [Hard]"
  star=3.44
  max=155
  mode="o"
  accuracy=99.42
  combo=155
  alias="はにゃ○満点、銭天堂。 (TV Size)"
  rank="s"
  performance=140
/>

<Score
  bid=2168768
  sid=983911
  preview="S3RL - Bass Slut (Original Mix) (Fatfan Kolek) [Seductive Extra]"
  star=5.68
  max=535
  mode="o"
  accuracy=93.17
  combo=248
  rank="a"
  performance=139
/>

<Score
  bid=785097
  sid=356821
  preview="Kano - Stella-rium (Moeka) [Starlight]"
  star=5.55
  max=1341
  mode="o"
  accuracy=93.66
  combo=875
  rank="s"
  performance=137
/>`,l9=Object.freeze(Object.defineProperty({__proto__:null,default:o9},Symbol.toStringTag,{value:"Module"})),c9=`---
date: 2026-10-04
type: simple
---

# pollux 的遗言

阿谦到此一游`,u9=Object.freeze(Object.defineProperty({__proto__:null,default:c9},Symbol.toStringTag,{value:"Module"})),d9=`---
date: 2025-02-28
type: simple
---

# Aki 的出群遗言

<Player 
  id=31485633
  name="Akimizussq"
  country=3420
  global=204510
  from="CN"
  accuracy=94.98
  level=99
  progress=35
  performance=3616
/>

出群遗言

From 2024-2-1 ~ 2025-2-28

养成路径：

萌新（单戳）-> 单双 -> pp刷子 ->强双 -> pp刷子 ->手控图享受者-> 邦多利乐曲爱好者（但永远是打串苦手，因为直到出群都没怎么玩过纯串图，所以这方面很垃圾）

其实是想等新一轮群赛结束再走的，并在 24 年 12 月开始离线练习v2至次年2月，但是其中时间，在开房间中意外的也能收获相同的感觉，所以后面渐渐的就和解了。

堪堪待够了一年。感谢群主和管理，感谢给过建议的每一位朋友，感谢可乐哥

愿各位群友最终能达成自己的目标，欢迎各位萌新继续加入这个群（啊不是，在进阶群买房了，由于现实原因，一时半会应该走不掉了，所以应该在那里可以待挺久了，如果你想在进阶群找我 mp 可以 call 我）

有一些个人的小建议吧

1. 尽早练习强双，你会有更多的打图选择，而不会只局限在排列简单的图
2. 劳逸结合（指上分和休闲）
3. 不必急着出群，打磨打磨技术以后玩得更自然
4. 在越大级之前请三思，你的双手是为你的一生服务的 
5. 培养对某种曲风的爱好，让你更有动力地练习，或进步，或保持热情
6. 你可以随时离开，也可以随时回来，这不是强度游戏，你要养成的角色就是你自己

https://osu.ppy.sh/users/31485633  欢迎关注我，如果你需要我给你关注，请在右上角私信我

https://www.cnblogs.com/Akimizuss101/p/18508531 这是我的博客（osu信息页，包含了我的个人设置和推荐曲风或曲师，可供你参考）因为买不起 supporter

在 osu 未来的某个瞬间，我们终将重逢。

![](/images/lastwords/31485633-1.jpg)
`,m9=Object.freeze(Object.defineProperty({__proto__:null,default:d9},Symbol.toStringTag,{value:"Module"})),p9=`---
date: 2024-12-03
type: simple
---

# Zemta 的出群遗言

<Player 
  id=31639737
  name="Zemta"
  country=1442
  global=78464
  from="CN"
  accuracy=97.36
  level=101
  progress=38
  performance=5658
/>

我的主页，欢迎加好友（能有什么好看的呢？）：https://osu.ppy.sh/users/31639737

很好新人群，陪伴了我最后的时光（

感谢[Denglin](https://osu.ppy.sh/users/32066246)大佬对我的帮助，使我在只有200多pp的时候知道了如何提升，之后的帮助也很大）。

在2k多pp时才加的新人群，大概2k5pp左右（？）时开始沉迷新人群mp。

走之后有新人群mp速速叫我XD。

之后就要在进阶群面对各种大佬了，太卑微了˃̣̣̥᷄⌓˂̣̣̥᷅
`,f9=Object.freeze(Object.defineProperty({__proto__:null,default:p9},Symbol.toStringTag,{value:"Module"})),h9=`---
date: 2024-12-03
---

# TOPiC_6958 的出群遗言[ヾ(￣▽￣)Bye~Bye~]

<Player 
  id=31918202
  name="ATRI-TOPiC"
  country=1311
  global=70883
  from="CN"
  accuracy=96.94
  level=98
  progress=22
  performance=5844
/>

7月9日，我成功拿下了DT SS 194PP，在此也将要与各位告别，同时也希望新人群的各位能够成功拿下3000PP（或者bp1 190+PP）!

我想在这篇文档里谈谈我的osu!生涯：

2022年11月 我来到了osu!，当时的我还在上初二，也是偶然接触到了osu!这款游戏，其实准确来说我刚开始并没有认真玩这款游戏。

2023年1月，我开始认真玩这款游戏，在当时用鼠标游玩。

2023年5月，我购入了第一块属于自己的数位板！（XP-Pen Deco Fun L [CT1060]），并在之后提高了游玩这款游戏的强度。

2023年7月，我加入了osu!新人群，并在这里见识到了更多的大神！（遗憾的是，8月以前的我并不知道在osu!里F12键可以截屏，因此也丢失了很多成绩界面）

<Score
  bid=844663
  sid=325307
  preview="Stonebank - The Pressure (Asserin) [CBH's Hard]"
  star=3.81
  max=379
  mode="o"
  accuracy=94.69
  combo=379
  rank="s"
  performance=33
/>

2023年8月，第一次学会打串，并取得FC！

<Score
  bid=2756887
  sid=1328989
  preview="YOASOBI - Kaibutsu (TV Size) ([-Evil-]) [PikA's Insane ft. Kuro]"
  star=4.26
  max=447
  mode="o"
  accuracy=98.06
  combo=445
  alias="怪物 (TV Size)"
  rank="s"
  performance=73
/>

2023年9月，第一个70pp！

<Score
  bid=2245786
  sid=1073074
  preview="Turbo - PADORU / PADORU (Sotarks) [SMOKELIND's Insane]"
  star=4.18
  max=168
  mode="o"
  accuracy=91.33
  combo=167
  rank="a"
  performance=58
/>

第一次提车，o(*￣▽￣*)ブ

<Score
  bid=338912
  sid=135227
  preview="Roberto Colombo - Tutti Beautiful (Leader) [Insane]"
  star=4.07
  max=141
  mode="o"
  accuracy=100.00
  combo=141
  rank="ss"
  performance=93
/>

2023年10月，第一个四星SS！

<Score
  bid=1182090
  sid=557532
  preview="bradbreeck - Emotional Uplifting Orchestral (Venix) [Heaven]"
  star=2.84
  max=108
  mode="o"
  accuracy=100.00
  combo=108
  rank="ss"
  performance=101
/>

2023年11月，第一个100pp！

<Score
  bid=1711830
  sid=816264
  preview="55x55 - MY REZHEM KINOLENTY (feat. Cut The Crap) (Shmiklak) [CUT THE INSANE]"
  star=3.65
  max=158
  mode="o"
  accuracy=93.04
  combo=156
alias="我们裁切着胶片"
  rank="s"
  performance=114
/>

第二个100pp！

<Score
  bid=204971
  sid=53810
  preview="Junichi Masuda - Lavender Town Theme (bomber34) [TVO's Hard]"
  star=2.94
  max=101
  mode="o"
  accuracy=100.00
  combo=101
  rank="ss"
  performance=106
/>

<Score
  bid=1182090
  sid=557532
  preview="bradbreeck - Emotional Uplifting Orchestral (Venix) [Heaven]"
  star=2.84
  max=108
  mode="o"
  accuracy=100.00
  combo=108
  rank="ss"
  performance=110
/>

2024年1月，我买了一把新的键盘（虽然还是薄膜【英菲克】），但我再也不需要忍受笔记本的薄膜键盘啦哈哈哈！！！！

<Score
  bid=2014470
  sid=962088
  preview="MIMI feat. Hatsune Miku - Marshmary (Log Off Now) [Insane]"
  star=4.41
  max=427
  mode="o"
  accuracy=98.55
  combo=427
alias="棉花糖"
  rank="s"
  performance=0
/>

这是用我的新键盘打出来的第一个成绩！

随后取得人生第一个五星FC！

<Score
  bid=4499470
  sid=2136811
  preview="Flanger Moose - Brain Implosion Energy Drink (feat. Kasane Teto) (Bloxi) [De-pp-y's Depression Durian]"
  star=4.72
  max=139
  mode="o"
  accuracy=90.56
  combo=137
  rank="a"
  performance=48
/>

第一次单图打到了全球36名！纪念性的一刻！
后面的我购入一块新的触盘（Free AIR外设），方便自己来打osu!

<Score
  bid=1149713
  sid=542081
  preview="Elmo and Cookie Monster - Cookie-Butter-Choco-Cookie (Monstrata) [Linada's Insane]"
  star=3.62
  max=163
  mode="o"
  accuracy=100.00
  combo=163
  alias="クッキー・バター・チョコ・クッキー"
  rank="ss"
  performance=194
/>

2024年7月9日，梦幻般的一天，我神奇般的拿下了这张图的SS！价值194pp！

玩过一年多的osu!，我自己的感触也颇深，最后再啰嗦几句：尝试去感受这款游戏的美好，发展自己专精的地方，相信各位可以做的更好的，成功出群！`,v9=Object.freeze(Object.defineProperty({__proto__:null,default:h9},Symbol.toStringTag,{value:"Module"})),b9=`---
date: 2024-12-03
type: recommend
---

# nanoic 的osu遗言

<Player 
  id=32039184
  name="nanoic"
  country=3617
  global=220233
  from="CN"
  accuracy=93.85
  level=99
  progress=54
  performance=3608
/>

我咋就出群了呢，说好要一起当一辈子新人的

我还想在新人群买房呢（

本文无图，不会杀猫，大家放心。

3kpp于：忘记哪天了，欸嘿

因为pp算法更新，管理在更新全部结束后再统一鲨

出群于：2024年11月08日

## 碎碎念

2022年11月，疫情，居家上网课但是正在爽打Phigros时，展展突然在我群里问我要不要和他一起玩osu!。我上网一查，诶！这我以前还真玩过，还挺有意思的，但之前感觉太难就退坑了，现在忘记账号密码了，遂注册了一个新账号，即现在正在用的这个账号 nanoic【id：32039184】，那场MP之后，我正式开始了我的osu!生涯。

*编者注：一个人只能拥有一个账号，忘记可通过邮箱找回，邮箱也忘了的话，还记得以前的osuid就给ppy发邮件让其注销掉以前的号*

为什么要叫nanoic？（欢迎加我QQ好友：2026256242）

本来准备叫NaNOvO来着，NaN代表一个不是数字的值，OvO是可爱的小表情。结果!!!想名字和输名字的时间跨度太大了，记忆太模糊了，就输成nanoic了（悲），后来为了不浪费宝贵的改名机会，就在各平台沿用这个名字了。

当然大家也可以叫我 **那那口** / **娜娜口** / **nnc** ... 之类的，我不介意哦。

2022年12月13日，刷贴吧的时候刷到了osu吧，于是加入了本群。

进群是我是200pp小萌新，那时的我胆小社恐又自卑，根本不敢在群里说话，看着大家在查4星5星的图，单图刷100+PP，我觉得大家好强，那会查成绩只敢在展展的小群里查www（当时刷喷火龙刷不动一怒之下退游了，把游戏删了、把群退了，（但是后来o瘾犯了根本控制不了，又下回来了），幸好现在复活了）。

平常会 ~~在群里实践大家👁👁~~（翻聊天记录看大家遇到的问题），感谢各位管理。

200到600、600到800、800到1200，嗯，慢慢刷，ACC也在库库掉，ACC下降与PP提高成正比。

（可恶的Bot之前还因为我ACC太低说过我不适合玩这游戏让我退游，红了）

我因为还在上高中，一周只能osu一次，而且是高漫数位板全板映射，因此进步十分甚至九分缓慢，相当于每周都是康复训练。

偶尔会小飞一下，但是也没能刷出太逆天的好成绩，基本都是糊图来的。

本来想着高中毕业前出群，结果只刷到2k4（悲）

后来以为高考完会狠狠打歌狠狠进步，没想到高考完就失去玩这游戏的激情了（当然，只持续了一段时间）

虽然osu!这沟槽的游戏打多了会恶心、会崩溃，但是长时间不玩的话又想玩的厉害，~~♿打osu!属实是溜冰了属于是♿~~。

大学后，开始慢慢提升，慢慢练ACC。（⚠ ACC真的很重要！！！现在你在90以下，以后5星6星给ppy还债有的你痛苦的 ⚠）

看完了幸运星，转生成为了泉此方⭐（我家此方真可爱）

(补：后来看完了《日常》所以steam又转生成为了祐子(?这人怎么回事,变脸不扣豆?)，欢迎加我steam好友 [Steam 社区-地表最强の突破-祐子](https://steamcommunity.com/id/nanoic39/))

将ACC从90救到了92（？）、刷到了车、刷到了C-type、PASS了第一张6星、刷到了玻璃花、拿到了第一个SS、认识了各位小灯...

参与了很多mp...

参与了S32群赛（虽然因为有事没能最终参加上，但是报名了，但还是好遗憾啊啊啊啊啊啊啊啊啊啊）

终于...也是要轮到我离开了...

我的最后一场新人群MP：[老登巴士逸一时误一世 · 比赛 | osu!](https://osu.ppy.sh/community/matches/116108910)（赤石赤爽了属于是）

虽然3kpp了，但是还是很菜，被各种5星6星锤爆，希望未来能让准度和手速更进一步

（什么时候能Pass喷火龙？什么时候能FC竹取？什么时候能FC哈辱骂吃DT？什么时候能刷长综？）

## 给新人的一些建议

1. 少超星，否则ACC暴跌警告

2. 刷新率对实力是有一定影响的，一个高刷显示器会让你更容易打跳，一个大屏显示器能让你更容易打小圈

3. 下载谱面可以选择 [OSU!DownloadBooster](https://www.rainng.com/osu-download-booster/) 插件，可以在下图界面添加镜像下载源，Sayo镜像真的好用

4. 没了，毕竟我也是小灯，很多东西都是向展展和dwyuchan学习的，即使给建议也只能给点管理们平常反复说的

5. 好多人的遗言里建议都写得很好了，我就不写了

6. 速来和我组幸运星collab(奇怪，我怎么成小镜了www)：详情见 [Gumiaora的遗言](./35683344.md) 或 [新人群的幸运星collab](https://docs.qq.com/sheet/DZnNIUmRUVVJCbkdp)

## 我的朋友们

### 老灯们

真正拉我入坑的老登：[Glimmer_Miku](https://osu.ppy.sh/users/13928307)【id：13928307，原名lizhanyiawa】可爱学弟展展，香草。

飞升b气死我了：[dwyuchan](https://osu.ppy.sh/users/32606942)【id：32606942】飞升b气死我了，真tm强啊。

涩猫猫/晓南凉/涩猫娘：[Dr_Shindo](https://osu.ppy.sh/users/30895664)【id：30895664】涩猫猫太可爱了，好想和他面积打o。

我所崇拜的超级无敌大神：[Senbe1](https://osu.ppy.sh/users/6911753)【id：6911753】之前打ZKFC时我的队长，当时就觉得他好强

展群老登羽口(已升级为鼓痴)：[yukko233](https://osu.ppy.sh/users/28804123)【id：28804123】计算机领域高手

强力老灯薄纱我：[0723](https://osu.ppy.sh/users/26357944)【id：26357944】我错了别再玩TeamVS让我1v5了

另一个此方！好耶：[Gumiaora](https://osu.ppy.sh/users/35683344)【id：35683344】希望下个阶段能够速速飞升，狠狠薄纱我

还有展群的各位老灯，这里就不一一列举了，感兴趣的欢迎加入：468184229

### 小灯们

39：[39lover](https://osu.ppy.sh/users/35034809)【id：35034809】39..嘿嘿...39

爱丽丝：[zhan_AL-1S](https://osu.ppy.sh/users/35170310)【id：35170310】爱丽丝你个人机（。

怎么还不打o，快去打o！：[Niect](https://osu.ppy.sh/users/32565032)【id：32565032】为什么不玩o

初中小灯/白羽：[shenshan shi](https://osu.ppy.sh/users/34611437)【id：34611437】感谢给我推图，图的质量都很高，感谢你来我直播间陪伴空巢老那555。小萌新，菜菜的很可爱（竟然能承受我的拷打而不跑路诶!）祝你适应板子后速速飞升

是西太谱害了他：[wanghou50](https://osu.ppy.sh/users/34736098)【id：34736098】别刷西太谱了

超级无敌越级大王：[LINCUSO4](https://osu.ppy.sh/users/34779098)【id：34779098】不是？800pp刷5~6星？WTF

土黄弟：[21awa12](https://osu.ppy.sh/users/36062235)【id：36062235】土黄弟土黄弟土黄弟土黄弟土黄弟土黄弟土黄弟土黄弟土黄弟

虚假的爱丽丝：[SOMAW](https://osu.ppy.sh/users/33210849)【id：33210849】别戳啦我错了我再也不熬夜了（去进阶群偷偷熬）

天负哥：[Momizi25](https://osu.ppy.sh/users/31819577/osu)【id：31819577】补药退游啊😭你可以的😭

还有很多聊过天伙伴们，这里就不一一列举了。

## 谱面推荐(热门图就不推荐了，⚠部分谱面超星警告⚠)

### 我喜欢的图

推一些我喜欢的图，个人感觉挺好刷的

<Beatmap
  bid=1389961
  sid=655970
  preview="STEREO DIVE FOUNDATION - Genesis (Akitoshi) [Hard]"
  star=3.61
  max=957
/>

好听好打

<Beatmap
  bid=1383388
  sid=652412
  preview="Hanasaka Yui(CV: M.A.O) - Harumachi Clover (ezek) [Insane]"
  star=4.22
  max=151
alias="等待春天的三叶草"
/>

可选DT：哈辱骂吃，加DT进化为高速PP图

<Beatmap
  bid=1383388
  sid=652412
  preview="Hanasaka Yui(CV: M.A.O) - Harumachi Clover (ezek) [Insane]"
  star=4.22
  max=151
alias="等待春天的三叶草"
/>

小圈，可选HD：次难，多刷几次就刷出来了，PP图

<Beatmap
  bid=118226
  sid=36569
  preview="Nanamori-chu * Goraku-bu - My Pace de Ikimashou (bakabaka) [Yuri]"
  star=5.92
  max=1182
/>

baka可爱，节奏好听，好打

<Beatmap
  bid=714528
  sid=139525
  preview="Lite Show Magic (t+pazolite vs C-Show) - Crack Traxxxx (Fatfan Kolek) [oko's Insane]"
  star=4.29
  max=811
/>

SPEED，高速

<Beatmap
  bid=2295079
  sid=1094838
  preview="Teminite - Ascent (Stack) [Hard]"
  star=3.76
  max=1001
/>

<Beatmap
  bid=3313173
  sid=1622691
  preview="YURiMental - Kinou ni Kanaderu Ashita no Uta (Share) [CELESTiAL DiMENSiON]"
  star=5.35
  max=1845
  alias="昨日に奏でる明日の歌"
/>

好听

<Beatmap
  bid=3120225
  sid=1507386
  preview="YURiMental - Kinou ni Kanaderu Ashita no Uta (Cut Ver.) (momothx) [RalkSevia's Extra]"
  star=5.29
  max=761
  alias="昨日に奏でる明日の歌 (Cut Ver.)"
/>

好听

<Beatmap
  bid=877625
  sid=403612
  preview="Tarpey - Close Call (xChorse) [Near Miss]"
  star=5.06
  max=731
/>

<Beatmap
  bid=1869933
  sid=894883
  preview="Aiurabu - Kani*Do-Luck! (TV Size) (Azunyan-) [A I U R A !]"
  star=5.94
  max=386
  alias="カニ☆Do-Luck! (TV Size)"
/>

PP图

<Beatmap
  bid=1711830
  sid=816264
  preview="55x55 - MY REZHEM KINOLENTY (feat. Cut The Crap) (Shmiklak) [CUT THE INSANE]"
  star=3.65
  max=158
alias="我们裁切着胶片"
/>

可选DT：PP图

<Beatmap
  bid=1346729
  sid=623515
  preview="Toyama Kasumi (CV.Aimi) - Dokidoki SING OUT! (Underdogs) [Hiya's Extra]"
  star=5.49
  max=631
  alias="どきどきSING OUT!"
/>

好刷

<Beatmap
  bid=1009530
  sid=472440
  preview="KAKU P-MODEL - Big Brother (Voli) [Challenge]"
  star=5.55
  max=601
/>

可选HD：PP图

<Beatmap
  bid=2208203
  sid=1054931
  preview="PassCode - Ray (Akitoshi) [Expert]"
  star=5.74
  max=1470
/>

真好听，好打

<Beatmap
  bid=114446
  sid=35219
  preview="Tsubaki - Kyun Kyun Tamaran Inaba tan! (Aenna) [Inaba!]"
  star=4.99
  max=915
/>

简单图，好听

<Beatmap
  bid=466789
  sid=196813
  preview="DJ Genericname - Dango Dango Daikazoku (Drum and Bass Remix) (Moo-Chan) [Insane]"
  star=4.96
  max=626
/>

简单图，好听，好打

<Beatmap
  bid=2328396
  sid=1114649
  preview="saradisk - 222 - wewewe (Uta) [Fall's Expert]"
  star=5.01
  max=249
/>

PP跳图，好听

<Beatmap
  bid=4388363
  sid=2046888
  preview="Against The Current - Running With The Wild Things (Sped Up & Cut Ver.) (Basensorex) [Expert]"
  star=5.70
  max=408
/>

PP跳图，好听

<Beatmap
  bid=476149
  sid=153776
  preview="yuikonnu & ayaponzu* - Super Nuko World (AllStar12) [Insane]"
  star=5.36
  max=1381
  alias="すーぱーぬこわーるど"
/>

串？好听好打

<Beatmap
  bid=2347579
  sid=1123162
  preview="Sayuri - Sore wa Chiisana Hikari no Youna (TV Size) (Kuki1537) [Insane]"
  star=3.56
  max=356
alias="犹如微弱的光芒"
/>

可选DT：PP图

<Beatmap
  bid=384511
  sid=156426
  preview="Cascada - Dream On Dreamer (Nightcore Mix) (Carvel94) [Advanced]"
  star=2.64
  max=493
/>

<Beatmap
  bid=785982
  sid=352570
  preview="beatMARIO - Night of Knights (alacat) [N a s y a's Insane]"
  star=4.63
  max=1040
  alias="ナイト・オブ・ナイツ"
/>

飞天大b串

### 史

吃完豪的也得整点史给大家尝尝

<Beatmap
  bid=31819
  sid=7385
  preview="IOSYS - Utage wa Eien ni ~SHD~ (DJPop) [SOLO]"
  star=5.21
  max=1146
/>

史

<Beatmap
  bid=3264713
  sid=1538052
  preview="nagi72 - Rimururimururimururimururimururimururimururimuru Wa Mabudati Nanoda! (dkblaze) [Extra Nanoda!]"
  star=6.00
  max=260
  alias="リムルりムルりむルリムるリむるりムるりむるリムルはマブダチなのだ！"
/>

史

<Beatmap
  bid=3169863
  sid=1494548
  preview="DE DE MOUSE - Silly Love (Cubby) [0pp's Insane]"
  star=4.61
  max=777
/>

史

<Beatmap
  bid=979514
  sid=457145
  preview="MCKLN - R.H.S. - SAS, SSS, ASA, AAS (J-core remix) (-N a n a k o-) [kapo's Extra]"
  star=6.28
  max=775
/>

史中史🤢

<Beatmap
  bid=3907767
  sid=1889729
  preview="15 Voices - Non-breath oblige (Delis) [insane]"
  star=5.13
  max=1062
  alias="ノンブレス・オブリージュ"
/>

史


<Beatmap
  bid=3613084
  sid=1765136
  preview="TUYU - Songs Compilation (Keqing) [Seclusion]"
  star=6.65
  max=3804
/>

史，9min32s，240BPM

## 小群，欢迎来玩

- 【小N的音游幼儿园｜内部群】368968665

    - 是音游群，但又不止各类音游

    - 还有CS、L4D2、后室、JM、南梁、Gal、O神、抽象、神金

    - 总之就是成分复杂（

- 【展群】468184229

    - 展展可爱

## 结语

孩子们，N老师要~~坠机~~走了，记得想我。

要对自己保持信心，坚持打下去，终有一天会飞的。

感谢新人群的大家，感谢你们一路陪伴，我会在进阶群等着你们到来，咱们进阶群见。

（我在线的话MP记得叫我）

See U Next Time.`,g9=Object.freeze(Object.defineProperty({__proto__:null,default:b9},Symbol.toStringTag,{value:"Module"})),y9=`---
date: 2024-12-18
type: simple
---

# nnmnnmnnm 的出群遗言

<Player 
  id=32067163
  name="nnmnnmnnm"
  country=2311
  global=221558
  from="HK"
  accuracy=95.26
  level=100
  progress=23
  performance=3604
/>

呃，这游戏皮肤确实影响很大，我以前一直用彩色并且开打开光效，特别晃眼睛，现在用纯白感觉好多了，至少不晃眼睛了。关于pp和星数，我一直刷不到pp，bp里已经不少六星了，pp还是低。而且玩这游戏已经这么久了一千小时了，应该是不会有很大的进步了，只能说享受游戏了。。`,w9=Object.freeze(Object.defineProperty({__proto__:null,default:y9},Symbol.toStringTag,{value:"Module"})),_9=`---
date: 2025-01-04
---

# OrangeWybel 的出群遗言

<Player 
  id=32145451
  name="[SHK]Wybel"
  country=7554
  global=38574
  from="US"
  accuracy=98.63
  level=100
  progress=57
  performance=7008
/>

大家好，这里是OrangeWybel，本人于北京时间2024年1月3日上午8:点30分通过3000 pp出群，成为本群2025年第二个出群的osu玩家。

我是一个FPS游戏玩家，在2022年的一次跟朋友直接的闲聊中得知osu这款游戏(他当时说可以练习瞄准)，并且注册了账号。当时我是抱着练习瞄准的想法来玩的，并且玩了一会觉得：“我测，这是什么垃圾游戏？？“遂卸载。在2024年的五月份我因为厌倦了玩命运2于是在想有没有其他的游戏可以让我玩的，在那时我突然想到还有osu这款游戏。在当时因为我高中快要毕业了，所以偶尔性的玩一下然后在一次fc了一张三星跳图之后觉得这款游戏还挺有意思的，于是决定继续玩下去。同年六月，我放暑假从美国返回到了国内探望去亲人，由于我表妹也是音游玩家的缘故，我跟她去参加了几场她的同学聚会，我发现在国内似乎并没有很多人知道osu这款游戏，玩过的也只是玩它的mania模式。于是我产生了想进入国人osu!standard玩家圈子的想法，在回到美国之后因为大学的事逐渐淡忘了这个想法。不过幸运的是，我在24年11月末也就是我1700pp的时候想起来了这件事并且通过我朋友的渠道得知了新人群。到现在两个月了终于刷到3000pp成功出群并且超越了拉我入坑的那个朋友（感觉我应该是本群少有的没刷到单图190pp出群的）。

感谢所有在新人群里帮助过我人，比如21awa12等玩家，非常感谢你们也很高兴认识你们，我爱你们，希望很快也能在进阶群里面见到你们。也感谢inui sana等指导的倾囊相助，非常感谢！

我深知自己并没有这个游戏的天赋，现在也已经趋于瓶颈，也只是靠着我的fps游戏的定位能力pass了各种跳图才到达这一步的。我的一个朋友是这样评价我的游戏方式的：

![](/images/lastwords/32145451-1.jpg)

当然我也会继续努力，从今天起我要去练四星串图，多打常规图，希望能在我真正瓶颈之前交出一份满意的答卷。

最后祝大家新年快乐，元旦快乐，也希望大家能fc自己想要的图跟刷到自己满意的pp，再见。`,S9=Object.freeze(Object.defineProperty({__proto__:null,default:_9},Symbol.toStringTag,{value:"Module"})),k9=`---
date: 2024-12-03
---

# Gua_Zi 的出群遗言

<Player 
  id=32228798
  name="Gua_Zi"
  country=4678
  global=329006
  from="CN"
  accuracy=95.29
  level=89
  progress=3
  performance=2454
/>

7.12日加入群聊 到11月20日刷到191pp出群了

和新人群的大家聊得很开心，拿到了许多不错的成绩

900pp多的时候拿到的第一张100pp

之后划水到1.4k左右pp更新拿到了500并冲上进阶群

pp算法更新后吃到红利

<Score
  bid=1897995
  sid=909559
  preview="3R2 - Starting Forest (CoLouRed GlaZeE) [Insane]"
  star=4.04
  max=278
  mode="o"
  accuracy=98.88
  combo=168
  rank="a"
  performance=191
/>

最后刷出来的图

---

好图推荐（连打不适者慎入

1. 会连打就能拿的巨水100pp

<Beatmap
  bid=847313
  sid=128931
  preview="Feint - Tower Of Heaven (You Are Slaves) (eLy) [Another]"
  star=4.56
  max=1023
/>

2. 都是相对简单的连打很好混分

<Beatmap
  bid=211697
  sid=74586
  preview="DJ Genericname - Dear You (Nemis) [Dear Nemis]"
  star=5.27
  max=705
/>

<Beatmap
  bid=136400
  sid=43466
  preview="DJ Genericname - Dear You (Rue) [Dear Rue]"
  star=4.83
  max=602
/>

3. 耐力练习+一点tech

<Beatmap
  bid=2916949
  sid=1357624
  preview="sabi - true DJ MAG top ranker's song Zenpen (katagiri Remix) (Nathan) [Scub x Nathan's Insane]"
  star=5.69
  max=2378
  alias="true DJ MAG top ranker's song 前編 (かたぎり Remix)"
/>

---

特别鸣谢

新人群各位群友(顺序不分先后)

[-Inui Sana-](https://osu.ppy.sh/users/9043058) -Inui JaHuLi- [reflect_awa](https://osu.ppy.sh/users/35791473) [ZnCookie](https://osu.ppy.sh/users/18230719) -Capgras- [Mos1ey](https://osu.ppy.sh/users/36323631) [SOMAW](https://osu.ppy.sh/users/33210849)

zhan_AL-1S [39lover](https://osu.ppy.sh/users/35034809) [AiXing1145134](https://osu.ppy.sh/users/35475253) [Yoizuki](https://osu.ppy.sh/users/25767690) [iamb_PM](https://osu.ppy.sh/users/36427223) [dongguadongde](https://osu.ppy.sh/users/28494479) [21awa12](https://osu.ppy.sh/users/36062235)

[0723](https://osu.ppy.sh/users/38748390) [AFKFOX](https://osu.ppy.sh/users/32350606) [yun_huan](https://osu.ppy.sh/users/32713106) [box1n](https://osu.ppy.sh/users/33671030)

新人进阶群见！

antiPlur - Runengon`,x9=Object.freeze(Object.defineProperty({__proto__:null,default:k9},Symbol.toStringTag,{value:"Module"})),B9=`---
date: 2024-12-03
---

# Dragon_Rhyme 的出群遗言

<Player 
  id=32270642
  name="Dragon_Rhyme"
  country=4233
  global=262241
  from="CN"
  accuracy=97.31
  level=99
  progress=33
  performance=3021
/>

作为一个天天在新人群飞升的玩家

一部分人可能已经认识我了 但我还是想要和你们做一个详细的自我介绍

我是Dragon_Rhyme 也就是你们所熟知的【龙神】

2022年12月17日下午15:40:26

也就是我正式入坑OSU的时候

但是作为一个音游党 肯定不只有一个音游要去游玩

并且当时我也正在备战中考【~~虽然中考成绩不是很理想~~】没有很多的时间来细细的欣赏这个游戏的魅力

以下是游玩记录↓

直到23年10月左右 我的电脑配置也得到了升级 这个尘封已久的游戏也从曾经的硬盘里被我翻了出来

出于FPS游戏的原因 我以键鼠的方式正式步入了OSU

![](/images/lastwords/32270642-1.jpg)

↑我初入OSU的游戏设备

由于入坑早,中间间隔时间长,并且不知道pp是什么的情况下---我以541.85pp & 28h游玩时长的基准 以及移动端音游的基础 开启了我的OSU生涯

在最新接触OSU的时候 我与许多萌新认为的一样--定位再点击 

于是乎我决定直接从4*开始游玩OSU……

~~然后被难度打回了现实…2*难度~~

在中间的一段时间因为学业的问题 我的PP一直飘忽不定（指5天休息2天刷-我是住宿生啦!!）

那段时间的周末对我来说简直就是住在OSU里一样 已经变成OSU的形状了
我深深地沉迷在这个游戏里 享受着节奏的律动

等时间来到了暑假 为了追求更多的玩伴 以及技术上的指导 来到了本群

来到群里的前几天 我的PP突飞猛进

甚至一度被称之为天赋选手（~~谁tm这么叫的~~）

再到后来因为暑假的原因 一批批的新人也陆续加入了本群

而我本就不低的pp在一群人中显得格外耀眼

并且每天保证增长的两位数pp更是让新人们陆陆续续开始称之我为【龙神】

这时 我的奖学金也陆续到了账 然后就有了猫盘和CTL-472

得到了专业设备的我如虎添翼 甚至在一天内打出+200pp原地起飞

（想打pp就别想着你的ACC了）

写到这里也该给大家提个建议了

~~我怎么觉得没人看呢~~

打不过图，越不了级，那就沉淀！

打自己能稳FC的难度

不仅能增加ACC 说不定还有意外pp收获

读完了?那再想想龙神为什么叫龙神罢~

大家要快点刷到2000pp来进阶群找咱w~

~~（我编不下去了）~~`,A9=Object.freeze(Object.defineProperty({__proto__:null,default:B9},Symbol.toStringTag,{value:"Module"})),E9=`---
date: 2025-07-23
---

# ASTARTE7 的新人群出群遗言

你好，我是 ASTARTE7，这是我的个人信息

<Player 
  id=32303406
  name="ASTARTE7"
  country=4214
  global=271646
  from="CN"
  accuracy=95.31
  level=97
  progress=3
  performance=3480
/>

光阴似箭，没想到已经玩了这么久了

<Player 
  id=32211887
  name="YiLeina_114514"
  country=7499
  global=523191
  from="CN"
  accuracy=89.82
  level=50
  progress=87
  performance=1815
/>

22年时我偶然因为同学推荐入坑了OSU，

这是他的主页。他天赋很好，39h 就已快 2000 pp了，但可惜现在他已经不玩了。

我的设备是蕾米送给我的 O3C 键盘和 g502 鼠标

话说蕾米是谁呢又怎么会送我键盘呢，这就要追溯到我和同学的一次mp了TwT

附上一张我们的 collab 图

![](/images/lastwords/32303406-1.png)

那天我和同学 mp 时，wanghou 进了我们房间，后面 wanghou 叫我进了两个群，一个是新人群，另一个是我们的 mp 群。后面经过了解我认识了他们，群里最强是 BGeggman 蛋哥，acc 之神 zzZoxer，天赋异禀 wanghou，eqn，ZOUXIN，养老休闲玩家 lhkuonji

还有 BlowNia，Remilia。

<Player 
  id=16158858
  name="BG eggman"
  country=625
  global=37966
  from="TW"
  accuracy=98.56
  level=102
  progress=10
  performance=6922
/>

<br />

<Player 
  id=16522128
  name="zzZoxer"
  country=589
  global=34165
  from="CN"
  accuracy=98.91
  level=102
  progress=17
  performance=7123
/>

<br />

<Player 
  id=34736098
  name="wanghou50"
  country=578
  global=33734
  from="CN"
  accuracy=97.73
  level=100
  progress=87
  performance=7146
/>

<br />

<Player 
  id=28693345
  name="Eqn_0"
  country=1582
  global=143526
  from="HK"
  accuracy=98.49
  level=100
  progress=46
  performance=4417
/>

<br />

<Player 
  id=30633069
  name="ZOUXIN-"
  country=374
  global=22728
  from="CN"
  accuracy=97.21
  level=100
  progress=42
  performance=7903
/>

<br />

<Player 
  id=24773173
  name="lhKuonji"
  country=2564
  global=144654
  from="CN"
  accuracy=96.94
  level=100
  progress=51
  performance=4401
/>

文件大小有限就不在挂啦

我算是天资平平吧，有时我会因为打不好而沮丧，几度想要退游，不过后来就开始享受游戏了。

对于新手我建议从简单的开始打，适当的越级，先掌握好跳的技术，因为跳图是入门最快的选择之一，接着就是最基本的连打，和走路串。最重要的一点是要有玩下去的决心，只要坚持就会有进步，不能轻易言弃。

最后我也是个大菜鸟有什么不懂的可以多问管理和群友们，祝大家早日出群！
`,T9=Object.freeze(Object.defineProperty({__proto__:null,default:E9},Symbol.toStringTag,{value:"Module"})),I9=`---
date: 2024-12-03
type: simple
---

# daring tact 的出群遗言

<Player 
  id=32396623
  name="daring tact"
  country=4542
  global=287758
  from="CN"
  accuracy=94.71
  level=100
  progress=24
  performance=3029
/>

不确定有没有人看但还是写了，这里是daring tact的遗言。

不知道有没有在群友中混个眼熟，高三住宿加单休的学业压力不小，总想着能在高考冲刺前出群，到了出群的时候又有点茫然加伤感。

回顾这四个月，感谢各位管理和诸多群友的帮助和指导（下次还越），让我在群里期间有了很大进步，在瓶颈期也是大家给了我超越自我的动力，一开始想成为串串玩家，最后还是练成了aim玩家，我个人觉得我tech也打得不错（

在群期间还打了一届群赛（超级垫底），一届vivo50杯赛，印象深刻了只能说是。

多打tech多看whp 多打tech多看whp 多打tech多看whp

多打tech多看whp 多打tech多看whp 多打tech多看whp

多练，努力一定会有回报，大家在进阶群再见。

哦对了我名字来源是知名赛马/赛马娘谋勇兼备

https://osu.ppy.sh/users/32396623

[https://osu.ppy.sh/users/32396623](https://osu.ppy.sh/users/32396623)

加我加我加我加我加我`,M9=Object.freeze(Object.defineProperty({__proto__:null,default:I9},Symbol.toStringTag,{value:"Module"})),C9=`---
date: 2024-12-03
---

# Nana Sakura 个人成长历程

<Player 
  id=32452774
  name="Nana Sakura"
  country=2585
  global=146474
  from="CN"
  accuracy=98.91
  level=99
  progress=43
  performance=4304
/>

![](/images/lastwords/32452774-1.jpg)

2023.04.16 入群，纯萌新，100pp 不到。

2023.05.25 被管理请喝茶了，因为当时 4700pc 只打了 50 个成绩，还以为我是什么离线的还是小号什么的。

但是后来仍然在邪路上⾛，⼀直在使用

![](/images/lastwords/32452774-2.png)

叠模组玩，浪费了很多时间，一直在限制自己，并没有得到实质的有效的训练（而且DT在大多数时候就是毁歌的！）。直到……（2023.07.26）

![](/images/lastwords/32452774-3.jpg)

当时的 bonus pp 算法不像现在，随便拿两三百甚至几下就拿满了，因此当时 bonus 也就五十左右，也就是说这个 680pp 相当于现在的一千多。 

其实这时候也是因为意识到了叠模组很坏很坏，开始打正儿八经的三星了。不过这时候我就因为不可抗力开始不玩了。 

你会发现，我虽然 bp 里很多 SS，但是我真的很菜。四星完全不会打，真的 pass 不了，真的！甚至三星也打得很差很差。 

我不希望有任何一个萌新会再在 HRDT 上浪费一点时间。 

🚫 HRDT！🚫 HRDT！🚫 HRDT！

 一定要 No Mod！一定要 No Mod！一定要 No Mod！ 

九月份回坑的时候就开始想打四星了，但感觉最简单的那个图却又总是差那么一点（后来才发现这么难！）

---

9/2 pass 了天堂塔，3.8\\* 那个，但是成绩挺惨的。

<Score
  bid=847315
  sid=128931
  preview="Feint - Tower Of Heaven (You Are Slaves) (eLy) [Hyper]"
  star=3.85
  max=863
  mode="o"
  combo=124
  accuracy=82.74
  rank="c"
  performance=74
  alias="天堂塔"
/>

---

9/7 打了个长图

<Score
  bid=3090009
  sid=1508883
  preview="Yorushika - Dakara Boku wa Ongaku o Yameta ([Hatsune Miku]) [Dalou's Hard]"
  star=3.51
  max=1146
  mode="o"
  accuracy=95.15
  combo=1139
  rank="s"
  performance=35
  alias="所以我放弃了音乐"
/>

但是怎么感觉 4 星还这么遥远啊.jpg 

---

9/10 那天，朋友跟我说鼠标动态加速的事情，当天我就调了设置，用的虚拟机打得比较满意的成绩，简直是有生之年系列.jpg

<Score
  bid=2748903
  sid=1323207
  preview="MIMI feat. Hatsune Miku - Ai no Sukima (theramdans) [Hard]"
  star=3.63
  max=1100
  mode="o"
  accuracy=96.67
  combo=363
  rank="a"
  performance=40
alias="哀伤的隙间"
/>

---

五天后......

![](/images/lastwords/32452774-4.jpg)

终于 pass 了，但是 80acc 好菜哦，嗯没错我就是很菜当天又来了个 3 星 SS。

<Score
  bid=1592913
  sid=757146
  preview="Tanaka Hirokazu - C-TYPE (Arf) [A-TYPE]"
  star=3.41
  max=167
  mode="o"
  accuracy=100.00
  combo=167
  rank="ss"
  performance=53
/>

短图，而且说实话这曲子有点抽象，不好听。

而且 5.65\\* 那个真难真难真难！

打它是因为当时群友都在打 5.65 的那个难度了。

<Player 
  id=33634210
  name="cloudland"
  country=245
  global=20265
  from="HK"
  accuracy=98.54
  level=101
  progress=59
  performance=8041
/>

害怕喵

这位现在已经 6700 pp 了！又有天赋又努力

---

9/24 拿到了最水的 4* fc 牌子！

![](/images/lastwords/32452774-5.jpg)

当然了我还是很菜

---

10/26 1000pp！

![](/images/lastwords/32452774-6.jpg)

---

10 月底 pass 了 140 bpm 跑道！

<Score
  bid=207088
  sid=72474
  preview="Various Artist - Long Stream Practice Maps (onlyforyou) [Identity Part 4 BPM140]"
  star=3.91
  max=1010
  mode="o"
  accuracy=76.30
  combo=57.52
  rank="d"
  performance="..."
/>

---

11/1 pass 天堂塔 another！

<Score
  bid=847313
  sid=128931
  preview="Feint - Tower Of Heaven (You Are Slaves) (eLy) [Another]"
  star=4.60
  max=1023
  mode="o"
  accuracy=76.16
  combo=352
  rank="c"
  performance="..."
  alias="天堂塔"
/>

后面一段时间感觉也没什么提升，因为好像是要考试了，打的就少了。

---

1/3 选择 DT 成功

<Score
  bid=1036133
  sid=485903
  preview="DZIDZIO - Yalta (wajinshu) [Hard]"
  star=4.42
  max=192
  mode="o"
  accuracy=88.37
  combo=115
  rank="a"
  performance="..."
  mods="DT"
/>

曲子不好听，当做练习算了

---

1/4 拿到了第一个 100pp

<Score
  bid=1182090
  sid=557532
  preview="bradbreeck - Emotional Uplifting Orchestral (Venix) [Heaven]"
  star=3.03
  max=108
  mode="o"
  accuracy=100.00
  combo=108
  rank="ss"
  performance=104
/>

感觉充满了力量，2000 有望！

---

1/11 马拉松图不带 NF pass 了！

![](/images/lastwords/32452774-7.jpg)

真好听，想 DT！

可惜 DT 完 6 星，200 的串网页按不动

---

1/13 第二个 100！

但是两个 100 pp 的图都太短了，真实水平还是差一截。

<Score
  bid=1802637
  sid=861685
  preview="R3 Music Box - Harumachi Clover (Nao Tomori) [Insane]"
  star=3.07
  max=106
  mode="o"
  accuracy=98.11
  combo=106
  rank="s"
  performance=107
alias="等待春天的三叶草"
/>

---

2/5 FC 了一个长一点的 DT 图

群友：这就会 DT 了？（实际差远了）

2/12 HDDT 再次 fc 了它

<Score
  bid=761802
  sid=330731
  preview="Mr.Kitty - Scars (Bakari) [Dark]"
  star=4.58
  max=506
  mode="o"
  accuracy=98.50
  combo=506
  rank="sh"
  performance=129
  mods="HDDTSD"
/>

并且恰巧遇上了 ppy 的 pp 补贴，于是就有了 2000 pp

---

![](/images/lastwords/32452774-8.jpg)

当天就进进阶群了，没错，我一如既往的菜打竹取打到自闭

<Score
  bid=86324
  sid=22276
  preview="Dark PHOENiX - Taketori Hishou (KanbeKotori) [Extra]"
  star=5.71
  max=1387
  mode="o"
  rank="f"
  performance="..."
  alias="竹取飞翔"
/>

然后我就很清楚：我太缺手速了！要做大神，先 FC dear you！

<Score
  bid=136400
  sid=43466
  preview="DJ Genericname - Dear You (Rue) [Dear Rue]"
  star=4.82
  max=602
  mode="o"
  accuracy=94.68
  combo=310
  rank="a"
  performance="..."
/>

没错我被创似了回去刷 pp 了

---

![](/images/lastwords/32452774-9.jpg)

多练才有能力打自己喜欢的！不过这种图没什么练习效果

新人不要碰 HR！

<Score
  bid=1762729
  sid=842412
  preview="Will Stetson - Harumachi Clover (Swing Arrangement) [Dictate Edit] (Sotarks) [Light Insane]"
  star=4.08
  max=152
  mode="o"
  accuracy=75.94
  combo=152
  rank="c"
  performance="..."
alias="等待春天的三叶草"
/>

75 acc 不如不打！找 mm 给我推点图去了！

---

![](/images/lastwords/32452774-10.jpg)

第一次被人围观 .jpg

没手速，还可以 HT

<Score
  bid=738063
  sid=320118
  preview="Reol - No title (VINXIS) [Lust's Insane]"
  star=4.89
  max=403
  mode="o"
  accuracy=95.83
  combo=403
  rank="s"
  performance=115
  mods="HTHRSO"
/>

新人群指定 pp 图，但是原速 aim 真跟不上，在练了 .jpg

---

触控板 + 薄膜键盘也可以 SS！

<Score
  bid=2191417
  sid=1048429
  preview="ASCA - Hibari (TV Size) (bigfrog) [Insane]"
  star=4.39
  max=276
  mode="o"
  accuracy=100.00
  combo=276
  rank="f"
  performance=149
  mods="HDDT"
/>

---

？一发就出了！

dear you FC！

<Score
  bid=136400
  sid=43466
  preview="DJ Genericname - Dear You (Rue) [Dear Rue]"
  star=4.82
  max=602
  mode="o"
  accuracy=98.16
  combo=600
  rank="s"
  performance="..."
/>

但是我还是好菜

---

同类型的图，又 FC 了！

<Score
  bid=217253
  sid=76623
  preview="Meiko - Leave The Lights On (KROT Remix) (vipto) [Insane]"
  star=4.80
  max=532
  mode="o"
  accuracy=98.71
  combo=531
  rank="s"
  performance=138
/>
134 pp

---

好啊去新人群 mp 了！

![](/images/lastwords/32452774-11.jpg)

---

竹取 pass 了！

<Score
  bid=86324
  sid=22276
  preview="Dark PHOENiX - Taketori Hishou (KanbeKotori) [Extra]"
  star=5.71
  max=1387
  mode="o"
  accuracy=90.4
  combo=360
  rank="b"
  performance="..."
  alias="竹取飞翔"
/>

---

这图怎么这么水 .jpg

<Score
  bid=1264763
  sid=596704
  preview="ClariS - Hitorigoto -TV MIX- (Doormat) [Little's Insane]"
  star=4.58
  max=440
  mode="o"
  accuracy=99.56
  combo=440
  rank="s"
  performance=128
  alias="独白"
/>

才第二把啊！free 127 pp！突然感觉好水！

---

<Score
  bid=154357
  sid=50177
  preview="Otokaze - Karen (Short Ver.) (spboxer3) [Hanabi]"
  star=4.79
  max=658
  mode="o"
  accuracy=97.50
  combo=384
  rank="a"
  performance=90
/>

钝角不少。后面手抖出了好几个绿

差一点就 5 星 fc 了！

我怎么还是这么菜！

---

*编者注：..........以后写遗言能不能别三步一卖弱，五步一多练啊，而且写了 40 几页全是图，不想搬了。*

*编者注：以下是最后一部分*

---

![](/images/lastwords/32452774-12.jpg)

![](/images/lastwords/32452774-13.jpg)

![](/images/lastwords/32452774-14.jpg)

![](/images/lastwords/32452774-15.jpg)

---

新人群终于是走完了，总结就是多打长图，适度越级，最多多个 0.5* - 1* 这样，多的话看个人能力什么的，别把自己整太惨了，那没什么用。

不要看着长图又长又没 pp，打了自然有好处。打长图的逻辑就是能多连尽量多连，能 FC 血赚，没 FC 不亏。

新人群超星限制 5.70* 自然有它的道理。

个人感觉还是挺合理的，因为我压根不会超星，是真不会，哪怕到现在给我一个大于 5.70* 的我也能死给你看。
`,P9=Object.freeze(Object.defineProperty({__proto__:null,default:C9},Symbol.toStringTag,{value:"Module"})),O9=`---
date: 2025-03-11
type: simple
---

# xAimyonx 的出群遗言

<Player 
  id=32642875
  name="xAimyonx"
  country=4318
  global=271444
  from="CN"
  accuracy=97.74
  level=96
  progress=47
  performance=3205
/>

进来也有很多天了，天天玩跳图打串打成依托的我没想到也会有3000pp的一天，也不知道要说些什么，只能对大伙们说一声加油

晚安

 ——爱来自xAimyonx`,R9=Object.freeze(Object.defineProperty({__proto__:null,default:O9},Symbol.toStringTag,{value:"Module"})),N9=`---
date: 2024-12-15
type: simple
---

# kami_i 的出群遗言

<Player 
  id=32661925
  name="kami_i"
  country=7209
  global=59800
  from="CN"
  accuracy=95.88
  level=82
  progress=63
  performance=4019
/>

本人从2023年2月入坑至2024年12月终于达成3000pp成就，或许我是打音游最没天赋的人，看着大家飞升，心中很是羡慕，但是音游是一个人的游戏，我希望大家不要因为其他人的飞升而自卑，快乐的游戏，只要你觉得开心，祝大家享受游戏的快乐，而不局限于pp`,D9=Object.freeze(Object.defineProperty({__proto__:null,default:N9},Symbol.toStringTag,{value:"Module"})),L9=`---
date: 2024-12-30
---

# Styroporrr 的出群遗言

<Player 
  id=32743500
  name="Styroporrr"
  country=2792
  global=251406
  from="CN"
  accuracy=96.11
  level=98
  progress=15
  performance=3006
/>

2024/12/30 20:07 3000PP 达成

---

终究还是走上了刷pp的道路（bushi

![](/images/lastwords/32743500-1.jpg)

从22年到24年，osu陪伴了我两年的时光，179h（肝力过低 

坚持no mod打到了2k9pp，最后还是按耐不住刷dt上了3k 

其次就是连夜刷pp到3k去投票我们的osu年度玩家（难绷

[我的osu主页](https://osu.ppy.sh/users/32743500)

![](/images/lastwords/32743500-2.jpg)

第一个100pp是Marshmary

<Score
  bid=2014470
  sid=962088
  preview="MIMI feat. Hatsune Miku - Marshmary (Log Off Now) [Insane]"
  star=4.41
  max=427
  mode="o"
  accuracy=99.03
  combo=427
  alias="マシュマリー"
  rank="s"
  performance=110
/>

印象最深的铺面是Grim

<Score
  bid=176549
  sid=58787
  preview="Raujika - Grim (JauiPlaY) [JauiPlKsp3]"
  star=4.94
  max=950
  mode="o"
  accuracy=98.00
  combo=949
  rank="s"
  performance=131
/>

最喜欢的铺面Kira Kira Day

<Beatmap
  sid=444335
  preview="HO-KAGO TEA TIME - Kira Kira Days (Kagetsu)"
  star=5.60
  difficulties=[1.68,2.52,3.68,4.08,4.72,5.28,5.60]
  alias="キラキラ Days"
/>

艹，bp全是pp图

糊图大王

也是要去进阶群了，总结就是多打长图好处多，越级来的迟早要还回来，新pp机制对长图choke也是温和了点，其次就是少糊图（，acc还是重要的啊。 

osu 对于我个人也是无可替代的游戏，从最初的新手阶段到逐渐掌握高难度歌曲，对于我来说，osu更是放松和娱乐的方式。学习之余，打开游戏，选一首喜欢的歌，享受。 

同样我们cnosu的社区也是蒸蒸日上（ 

没啥可说的了，看到这也希望你能蒸蒸日上进步，争取早日成为cntop，owc没你我不看 

进阶群见

![](/images/lastwords/32743500-3.jpg)`,H9=Object.freeze(Object.defineProperty({__proto__:null,default:L9},Symbol.toStringTag,{value:"Module"})),F9=`---
date: 2024-12-27
type: simple
---

# [ Lithromanti ] の出群遗言

<Player 
  id="32975448"
  name="[ Lithromanti ]"
  country="4324"
  global="294259"
  from="CN"
  accuracy="97.27"
  level="96"
  progress="43"
  performance="2713"
/>

Ciallo～(∠・ω< )⌒☆

你好~ 这里是佳佳

游戏内ID叫：[ Lithromanti ]

~~是一只mtf捏~~

在2024.9.31入坑 2024.12.27出群

<Score
bid="1711830"
sid="816264"
preview="55x55 - MY REZHEM KINOLENTY (feat. Cut The Crap) (Shmiklak) [CUT THE INSANE]"
star="3.67"
mode="o"
accuracy=100
combo=158
rank="ss"
performance=192
max="158"
alias="我们裁切着胶片"
/>

<div style="text-align: center; font-size: 0.8em; color: gray;">
    出群成绩
</div>

这么快就能出群真的是我没想到的 原本只是想打ocnt刷pp（

不过不管怎么说还是祝你游戏愉快

我在进阶群等你~
`,V9=Object.freeze(Object.defineProperty({__proto__:null,default:F9},Symbol.toStringTag,{value:"Module"})),K9=`---
date: 2024-12-03
type: recommend
---

# xiangkongx 的osu历程

<Player 
  id=33090766
  name="xiangkongx"
  country=3044
  global=178162
  from="CN"
  accuracy=95.29
  level=99
  progress=50
  performance=4040
/>

接触这个游戏的时间不算长，入群也才几个月，由于当时的自己不懂，用着数位板却开着鼠标模式，活生生被卡在了1800pp这个点，找到群指导InuiSana- 老哥，后者帮忙了一下午，算是解决了我的所有问题。在此之后，便开启了pp刷子之路。我一直在思考一个问题，到底是我玩游戏还是游戏玩我。由于osu 刷pp需要良好的状态和一定的运气，加上727烂尾，心态也不能差，导致自己在2600pp卡了好久。享受游戏才是主要目的，我开始试着打一些长串图，单纯开始听歌，抱着这样的目的，我开始沉淀下来，到更新算法后得以突破3000pp。下面说一些常出现的问题吧。

1. 数位板驱动的问题，本人在购买了wacom的板子后下载了官方驱动，随后各种麻烦就出现了，延迟高，不直观，更重要的是这个官驱卸载不掉！！！怎么卸载都有残余，留下的残余又导致群文件中的驱动无法正常运行，各位请留意

2. 键盘，磁轴无疑是最好的选择，群友都在用的猫盘也不错，便宜好用，驱动在群里也有。

3. 谱面，我前期找谱面在 [https://osu.sayobot.cn/home](https://osu.sayobot.cn/home)（osu 中文镜像），其有一个论坛，进入后也可以下载一些皮肤。后续一直在osu!lazer游戏里下载，后者在使用加速器后，下载谱面速度快，也可以使用群文件里工具将lazer的谱面提取出来，从而导入stb。

4. Mod，mod的选择要谨慎，本人正是因为过早的选择了hr mod，导致患上了高ar综合征。

低ar的完全打不了，后续在加dtmod的时候就会出现无法读图等现象，请各位一定要谨慎选择。

![](/images/lastwords/33090766-1.jpg)

![](/images/lastwords/33090766-2.jpg)

群负面典型，（hr失败者）

谱面推荐前情提要，我打的都是短跳图，加 hr 打acc得以刷pp，不加hr也是可以的，但 并 不 一 定适用于 dt 刷 子 。

## 推荐开始

### 一．短跳：（一分钟以内）

<Beatmap
  bid=2148832
  sid=1027590
  preview="WORSTPOLACKEU - bonjour (Nashia) [grochowka]"
  star=0.14
  max=4
/>

<Beatmap
  bid=1262809
  sid=597319
  preview="NanoKarrin - Eutrepe (Epiclol) [Lament]"
  star=3.34
  max=505
/>

<Beatmap
  bid=2096054
  sid=1001305
  preview="Shiggy Jr. - oyasumi (-Arche) [Extra]"
  star=5.72
  max=277
/>

<Beatmap
  bid=1004468
  sid=447034
  preview="Various Artists - ebullient future (Japanese TV-EDIT ver.) & ever forever OG mix. (Shad0w1and) [Lyric's Insane]"
  star=4.76
  max=981
/>

<Beatmap
  bid=1685799
  sid=800677
  preview="EastNewSound ft. Hatsuki Yura - Lunicode (Came1lia) [Lunatic Collab]"
  star=4.85
  max=852
/>

然后grant

<Beatmap
  bid=514516
  sid=219763
  preview="Drop - Granat (Kaguya Hourain) [Natural Gem]"
  star=5.25
  max=211
/>

<Beatmap
  bid=155118
  sid=50481
  preview="Rabpit - Saika (tsuka) [Expert]"
  star=4.77
  max=490
/>

<Beatmap
  bid=720240
  sid=324131
  preview="Soraru - Madamamagoto (tsuryuu) [Easy]"
  star=1.31
  max=59
/>

<Beatmap
  bid=497769
  sid=211704
  preview="Harry Gregson-Williams - "Metal Gear Solid Main Theme (Lanturn) [Difficult]
  star=3.61
  max=495
/>

<Beatmap
  bid=501992
  sid=212428
  preview="Talgol-Nyeo - Zook Zook Zook (HabiHolic) [Barry]"
  star=3.75
  max=61
  alias="쭉쭉쭉"
/>

两个车神

<Beatmap
  bid=1073074
  sid=504333
  preview="Loffciamcore & odaxelagnia - Romantyzm Mnie Napierdala (R_Gray) [Inner]"
  star=6.32
  max=1000
/>

<Beatmap
  bid=1061287
  sid=498562
  preview="Camellia - Yamabiko (Zunv) [Insane]"
  star=5.09
  max=1611
/>

其它

<Beatmap
  bid=452186
  sid=189825
  preview="Disasterpeace - Jolly Frolic (Timorisu) [Insane]"
  star=4.49
  max=167
/>

<Beatmap
  bid=2659911
  sid=1280506
  preview="EDOGA-SULLIVAN - WONDERFUL WONDER (TV Size) (Kuki1537) [Simple Heart]"
  star=4.93
  max=275
/>

<Beatmap
  bid=1011341
  sid=473306
  preview="powerwolf - sanctus dominous (link3329) [Hard]"
  star=5.83
  max=770
/>

<Beatmap
  bid=938926
  sid=435862
  preview="Chata - Dango Daikazoku -TV animation Ver.- (- Dzy -) [Normal]"
  star=2.02
  max=193
  alias="だんご大家族 -TV animation Ver.-"
/>

<Beatmap
  bid=871154
  sid=399061
  preview="FELT - In my room (ByBy13) [Deep]"
  star=4.61
  max=198
/>

<Beatmap
  bid=486513
  sid=206284
  preview="FELT - In my room (Aka) [Tranquility]"
  star=4.08
  max=197
/>

<Beatmap
  bid=1071416
  sid=503141
  preview="Gom (HoneyWorks) - Zen Zen Zense (MugiwaraSekai) [Sotarks' Extra]"
  star=4.74
  max=174
  alias="前前前世"
/>

<Beatmap
  bid=2514777
  sid=1207609
  preview="Seth Everman - how to create the weeknd's "blinding lights (browiec) [mario and bowser kissing (illegal)]
  star=4.56
  max=199
/>

<Beatmap
  bid=1869933
  sid=894883
  preview="Aiurabu - Kani*Do-Luck! (TV Size) (Azunyan-) [A I U R A !]"
  star=5.94
  max=386
  alias="カニ☆Do-Luck! (TV Size)"
/>

<Beatmap
  bid=1627148
  sid=765778
  preview="Icon For Hire - Make a Move (Speed Up Ver.) (Sotarks) [Endless Fear]"
  star=6.10
  max=261
/>

### 二. 精选中短跳，我前期打基础的好谱子，（1-2分钟）

*编者注：太多了，这里只展示十个*

<Beatmap
  bid=1401283
  sid=661919
  preview="ClariS - SHIORI -TV size mix- (Monstrata) [Extra]"
  star=5.25
  max=518
/>

<Beatmap
  bid=1957515
  sid=858306
  preview="dark cat - Can't You See (feat. Lonemoon) (anfeargorm) [taiko]"
  star=3.30
  max=318
/>

<Beatmap
  bid=439135
  sid=183267
  preview="nmk - sola (sjoy) [Extra]"
  star=6.38
  max=1166
/>

<Beatmap
  bid=848345
  sid=380545
  preview="Primary - Sweets Weekend (CaffeAmericano) [Sweet Neko]"
  star=5.35
  max=533
/>

<Beatmap
  bid=2712912
  sid=1121028
  preview="MIMI - Lapis Lazuli (Cut Ver.) (Onegai) [byd's Azure Ex]"
  star=5.58
  max=355
  alias="ラピスラズリ (Cut Ver.)"
/>

<Beatmap
  bid=724474
  sid=130546
  preview="Avizura - Lucky Star (Bearizm) [Divine]"
  star=5.51
  max=581
/>

<Beatmap
  bid=1482745
  sid=700384
  preview="Nakanojojo - Bittersweet (feat. Kuishinboakachan a.k.a Kiato) (Mentai) [Akitoshi's Bittersweet Extra]"
  star=5.82
  max=644
  alias="Bittersweet (feat. くいしんぼあかちゃん a.k.a きあと)"
/>

<Beatmap
  bid=780914
  sid=354537
  preview="Feint - Vagrant (feat. Veela) (Aia) [Still Alive]"
  star=5.29
  max=421
/>

<Beatmap
  bid=192508
  sid=65853
  preview="Blue Stahli - Shotgun Senorita (Zardonic Remix) (Aleks719) [Insane]"
  star=5.53
  max=750
/>

<Beatmap
  bid=1619561
  sid=770306
  preview="miwa - chAngE (MaridiuS) [fEAthEr]"
  star=5.46
  max=489
/>

### 三. 个人精选

<Beatmap
  bid=1592916
  sid=757146
  preview="Tanaka Hirokazu - C-TYPE (Arf) [SS-TYPE]"
  star=6.20
  max=167
/>

<Beatmap
  bid=1018238
  sid=476691
  preview="DJ OKAWARI - Flower Dance (Narcissu) [Camellia]"
  star=5.05
  max=1136
/>

<Beatmap
  bid=1957515
  sid=858306
  preview="dark cat - Can't You See (feat. Lonemoon) (anfeargorm) [taiko]"
  star=3.30
  max=318
/>

<Beatmap
  bid=1274098
  sid=603224
  preview="Skrillex - Ruffneck (CakeEcchi) [[4K] Twist Flex EX (ft. Couil)]"
  star=3.03
  max=625
/>

<Beatmap
  bid=2419834
  sid=1159718
  preview="MIMI - Shijima ni Saku (eiri-) [Insane]"
  star=4.50
  max=822
  alias="静寂に咲く"
/>

<Beatmap
  bid=1621319
  sid=771159
  preview="VINXIS - Sidetracked Day (Short Ver.) (Sotarks) [Deflected Journey]"
  star=7.06
  max=1011
/>

<Beatmap
  bid=44967
  sid=11858
  preview="Vato Gonzalez - Dirty House Mixtape 3 (lesjuh) [Pumpin']"
  star=0.14
  max=1
/>

<Beatmap
  bid=1054507
  sid=495334
  preview="Raujika - Roseo Neige (sahuang) [Tranquility]"
  star=4.80
  max=1040
/>

这个我bp2

<Beatmap
  bid=1596706
  sid=759178
  preview="Araki - Teo (Nevo) [Descent]"
  star=6.30
  max=876
  alias="テオ"
/>

<Beatmap
  bid=952409
  sid=442948
  preview="7!! - Shigatsu wa Kimi no Uso ED 2 Final Version 7!! Orange (AkemiMoon8) [When I First Met You]"
  star=1.47
  max=116
/>

说来也可笑，我bp1是dt，来点dt

<Beatmap
  bid=722238
  sid=325112
  preview="Roses Epicurean - Yoru no Kodomo tachi (CodeS) [Shiro's Hollow]"
  star=3.80
  max=186
  alias="夜之子"
/>

（bp1）185pp

<Beatmap
  bid=1786960
  sid=818349
  preview="Tanizawa Tomofumi - Sawakaze (TV Size) (Nyantiaz) [Xenon's Insane]"
  star=3.82
  max=241
  alias="爽風 (TV Size)"
/>

<Beatmap
  bid=1285526
  sid=608723
  preview="RADWIMPS - Katawaredoki (Monstrata) [Twilight]"
  star=3.36
  max=417
alias="黄昏之时"
/>

<Beatmap
  bid=1182213
  sid=558938
  preview="bradbreeck - Step Off Playa (Chalwa) [ezek's Step Off Fool!]"
  star=3.81
  max=191
/>

<Beatmap
  bid=41384
  sid=10684
  preview="Yoko Shimomura - Last Battle (joshisfriend) [Easy]"
  star=1.22
  max=131
/>

<Beatmap
  bid=1123162
  sid=529724
  preview="kalon. - Juubaku (Meg) [VINXIS' Insane]"
  star=5.25
  max=984
  alias="銃爆"
/>

<Beatmap
  bid=235551
  sid=85835
  preview="Owl City - How Deep the Father's Love for Us (inverness) [Normal]"
  star=2.04
  max=290
/>

<Beatmap
  bid=1711830
  sid=816264
  preview="55x55 - MY REZHEM KINOLENTY (feat. Cut The Crap) (Shmiklak) [CUT THE INSANE]"
  star=3.65
  max=158
alias="我们裁切着胶片"
/>

<Beatmap
  bid=637549
  sid=251391
  preview="Yasuda Rei - Passcode 4854 -TV edit- (guineaQ) [Insane]"
  star=3.61
  max=348
  alias="パスコード4854 -TV edit-"
/>

<Beatmap
  bid=175968
  sid=37270
  preview="Nico Nico Chorus - Alice Human Sacrifice (Teru21) [Kaguya's normal]"
  star=2.12
  max=395
/>

<Beatmap
  bid=1813523
  sid=867511
  preview="magNumn - James Arthur - Say You Won't Let Go Remix (magNumn_cha0s) [Insane]"
  star=4.35
  max=343
/>

最后是综合图，手感歌曲都好的图，打好了150+pp不是问题。（其实只要不是向我这样的高ar综合征玩家，这些都轻轻松松）

<Beatmap
  bid=1018238
  sid=476691
  preview="DJ OKAWARI - Flower Dance (Narcissu) [Camellia]"
  star=5.05
  max=1136
/>

<Beatmap
  bid=503155
  sid=195715
  preview="Sharlo & Sabbo - Sakura no Hana ga Maiochiru Toki (Pokie) [Candidate 11's Expert]"
  star=5.68
  max=1088
  alias="桜の花が舞い落ちるとき"
/>

<Beatmap
  bid=1274098
  sid=603224
  preview="Skrillex - Ruffneck (CakeEcchi) [[4K] Twist Flex EX (ft. Couil)]"
  star=3.03
  max=625
/>

<Beatmap
  bid=1083458
  sid=503486
  preview="Tia - The Glory Days (Beomsan) [Sonnyc's Expert]"
  star=5.77
  max=524
/>

<Beatmap
  bid=386117
  sid=157744
  preview="Pennywise - Pennywise - Nothing To Lose (berkay1000) [Hard]"
  star=0.00
  max=0
/>

<Beatmap
  bid=3604416
  sid=1761107
  preview="Leo/need x Hatsune Miku - Stella (chang) [Astrophel]"
  star=5.93
  max=689
  alias="ステラ"
/>

<Beatmap
  bid=654520
  sid=290541
  preview="ChouCho - Melt (Kibbleru) [Nostalgia]"
  star=4.87
  max=1173
  alias="メルト"
/>

<Beatmap
  bid=1676605
  sid=798402
  preview="cYsmix - cYsmix - Moonlight Sonata (CalvinChoy) [Not Difficult]"
  star=3.00
  max=456
/>

<Beatmap
  bid=1676481
  sid=798342
  preview="Clattonoia - OxT (VintageCookies) [Overlord]"
  star=4.89
  max=356
/>

<Beatmap
  bid=3110398
  sid=1519638
  preview="Perfume - Future Pop (vivicat) [Extra]"
  star=5.92
  max=988
/>

刚入群时我就在群文件里找谱面，现在算是回馈给大家了，到了另一个群就没头衔了，打头衔图那种综合图我这个偏科生又没办法，短时间再也冲不了高pp了，这样的话，大家就当HR仙人死了，我在另一个群等大家.祝大家早日突破，也可以加我好友一起玩，先前聊天的几个群友忘记加好友了，1079343687，如果还对我有印象的话。。。

再 截 个 图 纪 念 下 吧 。

![](/images/lastwords/33090766-3.jpg)`,z9=Object.freeze(Object.defineProperty({__proto__:null,default:K9},Symbol.toStringTag,{value:"Module"})),j9=`---
date: 2024-12-03
---

# MengLiYL 的出群遗言

<Player 
  id=33091136
  name="MengLiYL"
  country=3501
  global=211767
  from="CN"
  accuracy=97.52
  level=99
  progress=67
  performance=3685
/>

## 自我介绍

灌注梦璃雨落喵，灌注梦璃雨落谢谢喵~

2023 年3月入坑osu，虽然我之前有其他音游的基础，然后在2023年5月退坑，2024 年3月底卷土重来，一开始是自己打，偶尔mp，后来在mp中遇到了群友，就加入了新人群

一开始我是键鼠玩家，在2100pp的时候从键鼠转成了键板，大概是2024年10月份的时候，指法在我300pp的时候就已经转强双了，一直用到现在（ 

我在2024年6月5日进入新人群，2024年11月25日就出群了

我要在新人群买房，不要踢我，呜呜~ 

不会有人在要出群了还没有Collab吧，哦原来是我啊，呜呜希望有一天会有小妹妹和我组Collab（

没错，我就是nm玩家，bp有99张图都是no mod，nm yyds，不要刷什么dt

## 建议

建议多打NM，NM是基础，NM打的稳了，打mod图也就很轻松了，剩下就是音游通用诀窍：多练，不要越级

关于需不需要买板子，如果有米的话是可以买的，简单适应一下也是能飞的，但是，用鼠标也是能打到很高pp的（多练） 

关于键盘，我在几个星期前换了个键盘，从原来的55g触底，45g触发换成了47g触底，41g触发，导致我能够打高bpm图了（，因为用原来的键盘到后半段会手酸，导致按不动（ 

关于使用lazer还是 standard：其实这两个客户端都差不多，lazer会有滑条头判定，所以相对较难，但是pp比standard多，我是两个客户端都用的，因为mp通常是在standard上，剩下的就是lazer的性能要求比standard 高点，可能配置低的电脑在lazer会发生卡顿

## 最后

放上我的链接

[https://osu.ppy.sh/users/33091136](https://osu.ppy.sh/users/33091136)

还有B站（偶尔会直播）

[https://space.bilibili.com/380535457](https://space.bilibili.com/380535457)

那再放上我的个人博客吧（ 

[https://blog.dreamfall.cn/](https://blog.dreamfall.cn/)`,Y9=Object.freeze(Object.defineProperty({__proto__:null,default:j9},Symbol.toStringTag,{value:"Module"})),U9=`---
date: 2024-12-03
type: simple
---

# hobbit1468 的出群遗言-被逐出群什么的，那种事情不要啊

<Player 
  id=33122153
  name="hobbit1468"
  country=1001
  global=53847
  from="CN"
  accuracy=98.38
  level=100
  progress=29
  performance=6374
/>

额

其实也没啥想说的

这也太快了

我记得是2月12日700pp入的群，在那之前也是个超星哥

当时发了个89acc6星的miiro视频就觉得自己很牛逼，然后被群里的各种大佬打回原形。（打miiro主要是看尚在天国的视频入坑的osu，然后当时就想md这个逆天都能打200pp的miiro我也要打）

虽然才2200pp也不知道有没有这个资格，但还是想以前超星哥的身份给各位来点小建议

就首先，高星图acc低于85以下的pass我认为都不能说你已经到达了那个实力，即使你糊了一个5星6星的pass但acc和combo灾难，只能代表说按的快或者运气不错

对于1000pp以下的朋友来说，通过2星3星或者4.5之前的图练基本功是必要的，如果你能高accfc2星，3星图那么这对你之后打4星甚至5星的谱面会有非常大的帮助（当初就是基本功没练好在1500pp卡了好久，后来是爬回去刷4星fc才慢慢地变好的）

最后额，也没什么想说的了

2月12入群，3月12出群，

反正，跟着群里大佬和管理指导的方法来玩osu，早晚你们得飞升的比我还快

welcome to osu`,G9=Object.freeze(Object.defineProperty({__proto__:null,default:U9},Symbol.toStringTag,{value:"Module"})),W9=`---
date: 2025-09-15
---

# Athenatenno 的遗言

<Player 
  id=33319591
  name="Athenatenno"
  country=4412
  global=281550
  from="CN"
  accuracy=92.07
  level=71
  progress=67
  performance=2995
/>

终于也轮到我写遗言了 ouo，最开始玩这游戏把 3kpp 当成最终目标，没想到也挺快就完成了（欢迎 pm 加好友，本人法老控粉丝）

是 1000pp 时半路出家的数位板玩家一枚，强烈建议没试过板子的人买个试试，推荐 ctl472/672，嫌贵入二手完全没问题。也许你真的很适合用数位板呢，不过数位板用的不如鼠标也是正常的，自己哪个好用用哪个，没有说哪个更好

我推荐纯粹是因为我在换设备后提升快了很多（但数位板映射和握笔调整是很麻烦，我因为之前打得手痛改握笔姿势，沉寂了好几个月），所以建议大家试试（也建议买个磁轴键盘，普通机械键盘真不适合玩），本人真正第一次玩的音游基本就是 osu，这游戏纯新手时期比较难，到 1kpp 的时候我就花了四五十小时，后面会越来越上手，这游戏只吃时长，玩的越久越厉害，不必强度焦虑

<Score
  bid=1055147
  sid=495332
  preview="Izumi Akazawa (CV. Madoka Yonezawa) - Responsibility Response (Shmiklak) [Slayed's Answer]"
  star=6.03
  max=453
  mode="o"
  accuracy=92.38
  combo=196
  rank="b"
  performance=145
/>

接下来是关于游戏建议

1. 可以多适当越级，本人因为准度很差，所以喜欢越级换取 pp，也基本是个 pp 刷子，但 pp 刷到就是你的，刷 pp 图也是提升实力的好方法，不过也要多打打其他类型的图，这样才全面嘛，有些图就算没 pp 也是很好玩滴，不要一直刷同一张图，多下点玩（下图 bp 池子大部分推荐 2k5pp 以上跳批玩家刷取，都是同难度内比较简单的跳图）
2. 刷 pp 虽然让人身心愉悦，但最重要的还是享受游戏（强烈推荐皮肤 Aristia himawari，好看又好用，少用 hddt 那种，比较伤眼睛，还是单色）
3. 还有更多也给不出啥建议了，毕竟我也才 3000pp，一起努力吧
4. 我是跳批，打跳图是好的，好玩，提升实力也挺快
5. 这是第四点（我话好多，真的有人看吗，理我一下）
6. 本人 afk 玩家，打不动后 afk 一段时间回来实力莫名会提高（也许是手感好）(ps:未经科学证实，可忽略此条)

<Score
  bid=2194234
  sid=1049899
  preview="Krewella - Say Goodbye (Nightcore & Cut Ver.) (A r M i N) [Broken Promises]"
  star=6.21
  max=368
  mode="o"
  accuracy=0.9096692111959288
  combo=131
  rank="b"
  performance=139
/>

<Score
  bid=2014469
  sid=962088
  preview="MIMI feat. Hatsune Miku - Marshmary (Log Off Now) [Horizon]"
  star=5.21
  max=433
  mode="o"
  accuracy=0.971111111111111
  combo=338
  rank="s"
  performance=137
alias="棉花糖"
/>

<Score
  bid=2336704
  sid=1034008
  preview="DIVELA feat. Hatsune Miku - Beat Syncer (Log Off Now) [One More Time!]"
  star=5.80
  max=599
  mode="o"
  accuracy=0.9423868312757201
  combo=271
  rank="a"
  performance=136
alias="节奏同步者"
/>

<Score
  bid=5127731
  sid=2374386
  preview="Aziya - bbydoll (nightcore & cut ver.) (riot1133) [pick me]"
  star=6.20
  max=340
  mode="o"
  accuracy=0.942577030812325
  combo=140
  rank="a"
  performance=126
/>

<Score
  bid=2025938
  sid=968171
  preview="MIMI feat. Hatsune Miku - Mizuoto to Curtain (Log Off Now) [Extra]"
  star=5.14
  max=257
  mode="o"
  accuracy=0.9558011049723757
  combo=256
  rank="s"
  performance=123
alias="水音与窗帘"
/>

<Score
  bid=4765584
  sid=2241059
  preview="Hoshi Syoko (CV: Matsuda Satsumi) - Zettai Tokken Shuchou Shimasu! Hoshi Syoko Solo Remix (Cut Ver.) (Remilie) [Collab Expert!]"
  star=5.41
  max=468
  mode="o"
  accuracy=0.9194630872483222
  combo=449
  rank="a"
  performance=118
/>

<Score
  bid=4921686
  sid=2282539
  preview="Middle Kids - R U 4 Me? (Cut Ver.) (Smoke) [extra]"
  star=5.92
  max=477
  mode="o"
  accuracy=0.9240196078431373
  combo=318
  rank="b"
  performance=117
/>

<Score
  bid=4864117
  sid=2281428
  preview="Groove Coverage - Poison (Nightcore & Cut Ver.) (My Angel Ram) [Sotarks' Extra]"
  star=5.31
  max=307
  mode="o"
  accuracy=0.9346092503987241
  combo=285
  rank="a"
  performance=116
/>

<Score
  bid=2201460
  sid=1053509
  preview="ViViD - HIKARI (TV Size) (Log Off Now) [browiec's Wisdom]"
  star=6.06
  max=551
  mode="o"
  accuracy=0.9164358264081257
  combo=165
  rank="b"
  performance=114
/>

<Score
  bid=4950096
  sid=2310271
  preview="Aiurabu (CV: Nakajima Yui, Iida Yuuko, Tamura Nao) - Kani*Do-Luck! (TV Size) (KeyWee) [Heto's King Crab]"
  star=5.85
  max=354
  mode="o"
  accuracy=0.901920438957476
  combo=98
  rank="b"
  performance=112
/>

<Score
  bid=2431320
  sid=1049899
  preview="Krewella - Say Goodbye (Nightcore & Cut Ver.) (A r M i N) [browiec's Expert]"
  star=5.24
  max=374
  mode="o"
  accuracy=0.94683908045977
  combo=300
  rank="a"
  performance=108
/>

<Score
  bid=848345
  sid=380545
  preview="Primary - Sweets Weekend (CaffeAmericano) [Sweet Neko]"
  star=5.28
  max=533
  mode="o"
  accuracy=0.9447278911564625
  combo=272
  rank="a"
  performance=107
/>

<Score
  bid=4796020
  sid=2253247
  preview="Hechizeros Band x Koji Kondo - El Sonidito x Athletic Theme (DitzyFlama Mashup) (Fuxi66) [Ram's ANOTHER]"
  star=5.02
  max=194
  mode="o"
  accuracy=0.9431524547803618
  combo=194
  rank="s"
  performance=107
/>

<Score
  bid=4914436
  sid=2299895
  preview="Middle Kids - R U 4 Me? (Cut Ver.) (KeyWee) [Nilou's Extreme]"
  star=6.47
  max=544
  mode="o"
  accuracy=0.843875502008032
  combo=137
  rank="c"
  performance=107
/>

<Score
  bid=4855367
  sid=2278116
  preview="uniy - Addict of justice (Game Ver.) (tomatas95) [VII. A Dawnless Night, Crimson Lustrous Eyes, and a Will of Diamond]"
  star=5.95
  max=556
  mode="o"
  accuracy=0.8776595744680851
  combo=170
  rank="b"
  performance=105
/>

<Score
  bid=4952943
  sid=2310271
  preview="Aiurabu (CV: Nakajima Yui, Iida Yuuko, Tamura Nao) - Kani*Do-Luck! (TV Size) (KeyWee) [gwb's Crab Stew]"
  star=6.01
  max=379
  mode="o"
  accuracy=0.8690476190476191
  combo=146
  rank="b"
  performance=104
/>

<Score
  bid=4798302
  sid=2253247
  preview="Hechizeros Band x Koji Kondo - El Sonidito x Athletic Theme (DitzyFlama Mashup) (Fuxi66) [PikA's EXPERT]"
  star=5.31
  max=185
  mode="o"
  accuracy=0.8813131313131313
  combo=100
  rank="b"
  performance=100
/>

<Score
  bid=1608832
  sid=765169
  preview="Komiya Mao - (can you) understand me? (Sotarks) [heh?]"
  star=5.13
  max=436
  mode="o"
  accuracy=0.9429429429429429
  combo=196
  rank="a"
  performance=100
/>

<Score
  bid=1988748
  sid=952409
  preview="MIMI feat. Hatsune Miku - Ai no Sukima (Log Off Now) [Extra]"
  star=5.08
  max=347
  mode="o"
  accuracy=0.9553695955369595
  combo=303
  rank="a"
  performance=100
alias="哀伤的隙间"
/>

<Score
  bid=979155
  sid=456986
  preview="Komiya Mao - (can you) understand me? (Sotarks) [uhh?]"
  star=5.06
  max=439
  mode="o"
  accuracy=0.9693989071038251
  combo=149
  rank="a"
  performance=99
/>

<Score
  bid=4577577
  sid=2169204
  preview="S3RL - Pika Girl (Nightcore & Cut Ver.) (Sotarks) [PIKACHU!!! USE THUNDERBOLT!!!!!]"
  star=6.12
  max=520
  mode="o"
  accuracy=0.88003663003663
  combo=156
  rank="b"
  performance=99
/>

<Score
  bid=86324
  sid=22276
  preview="Dark PHOENiX - Taketori Hishou (KanbeKotori) [Extra]"
  star=5.71
  max=1387
  mode="o"
  accuracy=0.9220119172800562
  combo=464
  rank="b"
  performance=98
/>

<Score
  bid=3029817
  sid=1476373
  preview="Dreamcatcher - Eclipse (TV Size) (paperoni17) [Extra]"
  star=5.66
  max=535
  mode="o"
  accuracy=0.9138733705772812
  combo=181
  rank="b"
  performance=98
/>

<Score
  bid=2118443
  sid=983911
  preview="S3RL - Bass Slut (Original Mix) (Fatfan Kolek) [Reform's Filthy Expert]"
  star=5.01
  max=492
  mode="o"
  accuracy=0.9537856440511308
  combo=275
  rank="a"
  performance=98
/>

<Score
  bid=2964222
  sid=1440767
  preview="DM DOKURO - SAVE (Encore) (browiec) [Reform's Extra]"
  star=5.10
  max=496
  mode="o"
  accuracy=0.9225280326197758
  combo=403
  rank="a"
  performance=97
/>

<Score
  bid=4867484
  sid=2281428
  preview="Groove Coverage - Poison (Nightcore & Cut Ver.) (My Angel Ram) [Kuki's Extra]"
  star=5.37
  max=321
  mode="o"
  accuracy=0.9142053445850915
  combo=191
  rank="b"
  performance=97
/>

<Score
  bid=2118440
  sid=983911
  preview="S3RL - Bass Slut (Original Mix) (Fatfan Kolek) [Dereban's Lewd Extra]"
  star=5.67
  max=471
  mode="o"
  accuracy=0.9013409961685823
  combo=142
  rank="b"
  performance=97
/>

<Score
  bid=4952868
  sid=2314394
  preview="LUM!X feat. Pia Maria - Halo (Nightcore & Cut Ver.) (riot1133) [Halo]"
  star=5.13
  max=370
  mode="o"
  accuracy=0.9488243430152143
  combo=229
  rank="a"
  performance=97
/>

<Score
  bid=2161926
  sid=1034008
  preview="DIVELA feat. Hatsune Miku - Beat Syncer (Log Off Now) [Extra]"
  star=5.50
  max=587
  mode="o"
  accuracy=0.9265611257695691
  combo=155
  rank="b"
  performance=95
alias="节奏同步者"
/>

<Score
  bid=1059388
  sid=497769
  preview="Drop - Granat (Left) [Extra]"
  star=5.05
  max=241
  mode="o"
  accuracy=0.9354838709677419
  combo=162
  rank="a"
  performance=95
/>`,$9=Object.freeze(Object.defineProperty({__proto__:null,default:W9},Symbol.toStringTag,{value:"Module"})),J9=`---
date: 2024-12-03
type: simple
---

# keycurse 的出群遗言

<Player
id=33367606
name="keycurse"
country=4027
global=0
from="CN"
accuracy=88.13
level=93
progress=5
performance=2999
/>

我不想似`,X9=Object.freeze(Object.defineProperty({__proto__:null,default:J9},Symbol.toStringTag,{value:"Module"})),Z9=`---
date: 2026-06-07
---

# \\_AnZai_KoKoRo_(- Inui JaHuLi -)出群遗言

<Player 
  id="33463029"
  name="_-AnonxSakiko_-"
  country="4239"
  global="229570"
  from="TW"
  accuracy="97.34"
  level="99"
  progress="14"
  performance="3385"
/>

大家好我是 \\_AnZai_KoKoRo_

我於6/28日進群（當時只有1528.27pp）

經過了三個月的努力 

我於8/31日達到3000pp了～

| 期間必須感謝： | （名字打錯的話 不好意思了）） |
| :-: | :-: |
| -Inui Sana-（指導） | Touma miyuki |
| Hiiragi Kagami（指導） | zhuiqiuat |
| -spring night-（指導） | Karta3078067 |
| Molli（指導） | HuXiaoYan |
| Yoizuki（指導） | Googujiang |
| 0723 | Insidecactus |
| Rainbow03 | Dragon_Rhyme |
| Reflect_awa | yuyox |
| SINKA0 | Sans_killer97 |
| -Capgras- | My dreaest |
| GM-Suwako | yun_huan |
| Zhdchina | BenPhantom |
| ShimaKazei | [haruhi] |
| Qqmx_x | akari_de |
| Yun_huna | luma114515 |
| Cold Fish | Ciallo |
| Hx123yx | dongguadongde |
| ZnCookie | Setsuna_uwu |
| Gua_zi | Star_tsuki |
| 21awa12 | baicai492 |
| Zhan_AL-1S | inSnh-Gd |
| AiXing114514 | ----以及我未提及的群友們---- |

感謝三個月的指導、陪伴（群友們趕緊飛來進階群！）

給新手的建議..？

！不要糊圖！不要覺得自己辦不到！

每天前進一小步 到後面就會飛了～

覺得太難可以降一星，最後找到你可以穩定acc的map！

…差不多是這樣…我也不太會講了（）

---

下面的是一些…名場面？：

![](/images/lastwords/33463029-1.jpg)

![](/images/lastwords/33463029-2.jpg)

![](/images/lastwords/33463029-3.jpg)

---

如果有想對我說的話可以寫在下面（能編輯的話）：

\\_AnZai_KoKoRo_是你啊！你现在都出群了。你还记得我吗？从小我们俩就不认识，你在你家玩，我在我家玩。哎，真是怀念当年的时光啊。——ZnCookie

每个深夜都能看到你在群里发言，感谢猫猫陪伴。SINKA0批准出群！——SINKA0

新人群没猫粮吃了哭哭 ——hx123yx

猫粮可爱喵 有机会还要一起mp喔 ——yuyox

恭喜小猫粮出群喵 希望早日回到新人群喵 记得多打串喵——Gua_Zi

恭喜你，虽然说，我们认识的时间并不是很长，但是，你让我留下了，深刻的印象，早在和你第一次mp时，我就已经注意着你了，我那时侯就觉得，你肯定是个天才，没想到还真是，而且你还是只猫粮（），看见有我的名字还是受宠若惊，永远爱你哦——sans_killer97

恭喜飞升出群，虽然没来得及和大佬好好认识一下，但是在我眼里你一直是会很温柔的解答我问题的大佬捏。希望在进阶群一切安好——Fujwara

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

（有機會的話希望能回來新人群當管理www）
`,q9=Object.freeze(Object.defineProperty({__proto__:null,default:Z9},Symbol.toStringTag,{value:"Module"})),Q9=`---
date: 2024-12-03
type: simple
---

# FireBanana 的出群遗言

<Player 
  id=33595598
  name="FireBanana"
  country=1136
  global=61551
  from="CN"
  accuracy=98.43
  level=100
  progress=12
  performance=6108
/>

哈喽啊 我是FireBanana 一根烧香蕉

不知不觉又怎么长时间了 又到了写遗言的时候了

刚接触OSU的时候感觉很适合用来练枪（不会只有我一个人这么觉得吧）又非常喜欢音游 一下子就沉迷在里面了

![](/images/lastwords/33595598-1.jpg)

于是买了板子 已经被我滑出尸斑了

又买了个O3C

又又又于是

![](/images/lastwords/33595598-2.jpg)

（WacomCtl472好用）

一个人摸索 一个人打歌 找寻着自己的道路并在其中历练着自己 我觉得这是一件很酷的事情 正因如此 我觉得不必特意去做什么特别的事 只要能细细品味每一样微笑但确切的幸福就好 当然这只是我的见解

很幸运在新人群与大家认识  我在进阶群等着你们

See you next time~

`,n7=Object.freeze(Object.defineProperty({__proto__:null,default:Q9},Symbol.toStringTag,{value:"Module"})),e7=`---
date: 2024-12-03
type: simple
---

# mimzhu 的出群遗言qwq

<Player 
  id=33719256
  name="mimzhu"
  country=1
  global=137587
  from="SC"
  accuracy=97.28
  level=100
  progress=47
  performance=4563
/>

折腾了好一段时间总算是出群了，怎么说呢我应该属于努力方向错了导致一直刷不出pp（孩子真的没有de我是真的刷不到qwq），如果看到这个遗言的小萌新我就提一嘴：不要乱越级！不要乱越级！不要乱越级！（重要的事说三遍qwq）

萌新期不适合越大级也不适合研究一些比较难的技能，多刷点跳图把aim提上来aim有了练稳定性，后面学其他技能都是如虎添翼（本人学打串和flow卡了4个月提升巨慢qwq），对于专门刷pp跳的和喜欢打越级的都推荐多去打打长综，从中bpm爆发开始练到学会5-8连打基本就够你玩到3000pp了，萌新期确实不用练太多东西学多了反而会乱，把基础的音压，节奏，aim练练基本上就能出群了（越写越多了opo为什么会写那么多！？）。

就这样吧，我属于比起刷pp更喜欢享受游戏的想怎么玩就怎么玩，我也觉得这游戏就应该这样玩，如果玩的不开心有点累那就休息一下，afk可以的提升实力（确信）希望下次能在进阶群看到各位！

最后！ Ciallo～(∠・ω< )⌒☆`,a7=Object.freeze(Object.defineProperty({__proto__:null,default:e7},Symbol.toStringTag,{value:"Module"})),t7=`---
date: 2024-12-03
type: simple
---

# Tusk1527 的出群留言（铁男!没想到吧！）

<Player 
  id=33794305
  name="Tusk1527"
  country=3422
  global=206484
  from="CN"
  accuracy=97.47
  level=100
  progress=0
  performance=3739
/>

2023年6月入坑的时候，我还年轻气盛，然后，很快啊，因为调戏管理员，被铁男制裁了，新人群还没呆热乎，二话不说就被飞出新人群。

然后首先我意识到，osu作为社区音游的一个特点就是小众封闭，原因很简单，门槛太高了，osu里面的某一个技巧，像是打串，都需要数百个小时的游戏时间从入门到精通。这导致了osu玩家圈子是相对封闭的：加一圈群发现活跃的就是那么几个人。

因此，osu新人群几乎是无可替代的，对于刚入坑的新人，你没法找到第二个像它一样的cnosu社区了（当然也可能是我见识少了）。良好的社区环境有赖于每一位管理员和群友的维护。在这里也对每一位群管理员和对社区无私贡献的osu玩家表示感谢：无论是对群的管理，还是对新人的指点，还是举办各种比赛和活动给新人表现自己和进步的机会。

于是我极其后悔，没有好好珍惜来之不易的社区。我尝试请求管理让我回来，管理商讨之后一致拒绝。反复尝试后，我意识到，言语的力量是无力的，唯有切实的行动才有价值。于是我决定：在一年以内达到2000pp实力（不靠短pp跳图），然后直接加入新人进阶群。

然而，我太急于求成了，无比渴望证明自己，不顾代价的越级，超星。然后我的行为被vialvistas发现了，抓我进入jail开启了无穷无尽的alt,tech,speed折磨之旅。当然，不是没有用，在1.6kpp的时候我pass了一张六星串图，united：[www.bilibili.com/video/BV1Qr421s7Qv](www.bilibili.com/video/BV1Qr421s7Qv)

其实没有必要过分越级，这对你的实力提升并没有帮助。最后，经过了半年左右，我大概1.9kpp，管理员终于同意我重新进入新人群。（感谢幽幽子对我的信任）在那之后不久，因为bonuspp算法改动，白给了几百pp，我达到2kpp，加入进阶群。

这之后，我开始积极参加群活动，然后也争取参加各种比赛（虽然大部分都因为实力不够无法参加），这些都是很愉快的回忆，每一次都能有所收获，也认识了很多优秀的osu玩家。

其中就包括：

[nana sakura](https://osu.ppy.sh/users/32452774)：很热心的osu玩家，乐于帮助新人解决各种疑难，性格超好，人很温柔。在参加stdc（一个1v1osu比赛）的时候和他认识，后面成为了friend。

[doubi_wert](https://osu.ppy.sh/users/30512018):2kpp的时候和我一起参加stdc，现在也远远超过了我，2.6kpp后从鼠标转板子，进一步飞升，现在已经快4k了。

paralisa: stdc新人高校杯，又叫para炸鱼杯。

[pouxba](https://osu.ppy.sh/users/16378561)：和我同期的键鼠玩家，甚至比我稍晚，现在已经飞到4.5kpp出进阶群了，一直坚持鼠标，没有放弃，很是励志。

没错，参加stdc的一批人，几乎都飞了，我是最后几个。写了出群留言但是留言的对象已经不在这了......

关于游戏本身，我是键鼠玩家，关于鼠标怎么防止鼠标漂移，移动怎么发力，鼠标和鼠标垫的选择，如何防滑，这些问题随便问一个键鼠大佬都能有比我更专业的回答，我就不赘述了。

最后引用Crystal的话结尾：“想玩自然就会玩下去，但是想不想进步是纯个人的选择，游戏而已还是贴合现实需要最好，没有也不要强迫自己保持热情。”

祝，早日出群。`,i7=Object.freeze(Object.defineProperty({__proto__:null,default:t7},Symbol.toStringTag,{value:"Module"})),r7=`---
date: 2024-12-03
---

# 2ky girl 的出群遗言

<Player 
  id=33823564
  name="2ky girl"
  country=2514
  global=14374
  from="CN"
  accuracy=96.51
  level=96
  progress=40
  performance=7854
/>

我是2ky girl 板子 强双玩家（600pp）之前用的键鼠 本来玩std只是作为休闲娱乐的但是没想到都已经3000pp了 想对各位还没出群的说几句越级要适当 但是别一直越级 可能会手癖 如果舒适区3星就可以打会四星试试手什么的 慢慢来提升自我 只要多玩肯定会变厉害的 加油！

我其实一开始玩的时候就在想着如何提升自己并且尝试越级了 但是自己很菜还想pass个四星于是凹了好久好久知道600pp pass了一张四星图成就感满满让我有了继续玩下去的动力了 （这张图是24年3月打的）

<Beatmap
  bid=1228359
  sid=580151
  preview="Hanasaka Yui (CV: M.A.O) - Harumachi Clover (Momochikun) [Clover]"
  star=4.64
  max=1086
  alias="春待ちクローバー"
/>

随着时间的推移慢慢的堆积自己的游戏pc（游戏次数）我慢慢的打过四星跳图（96acc fc！！！） 成就感满满 那个时候就基本确定了自己适合打什么谱子了

当时打std的动力基本上就是看群友打了点自己也去打一点的状态 也对照着群友的bp去抄

当时玩std其实还下了一个目标那就是10000pc以内出群（） 基本就是上线摸一会会就不打了 又菜又打得不多

在我1400pp的时候突然飞升了并且取得了良好的成绩（单曲100pp）

在24年的6月没错就过了3个月我的1000pp来到了2000pp并且dthd acc100 拿下了110pp单曲的成绩 这张图很推荐大家去打 特别好打

最后附上我的一份bp列表

*编者注：太糊了看不清*`,s7=Object.freeze(Object.defineProperty({__proto__:null,default:r7},Symbol.toStringTag,{value:"Module"})),o7=`---
date: 2024-12-03
---

# Star_tsuki 的出群遗言

<Player 
  id=33879454
  name="Star_tsuki"
  country=642
  global=35350
  from="CN"
  accuracy=98.48
  level=100
  progress=68
  performance=7165
/>

先来自我介绍一下吧，我是Star_tsuki，你也可以叫我星月。

在2900pp的时候，作为一个跳批，车是必刷不可的，一张5.85的使我获得了192pp顺利出群😋

我对pp不是很感冒，所以我不刷pp（ba线超陡）pp随缘涨可以让你玩osu！而不是osu！玩你！

还有就是看到遗书的人快加入跳p，跳p使你的pp轻松到手，而且日本人在串图里放了炸弹😱

我会一直视奸新人群的，mp会星月出没⚠

小藏一手，希望能在3k以前出200

干货时间到：

如果你正在瓶颈， 那么可以afk 1天 + 多打长综图（没有去找cy和kagami

不要一直把技能点点在一个技能上，即使我是一个跳批，我也是能打5.7*-的串的，提一嘴我跳力6*（想装b但是没装起来的星月（😭

我是建议转板的，板子无论是打串还是打跳的优势都要大于鼠标

好了，遗书到这就结束了，看到这的人希望你的osu！之旅一路顺风！！！💪`,l7=Object.freeze(Object.defineProperty({__proto__:null,default:o7},Symbol.toStringTag,{value:"Module"})),c7=`---
date: 2024-12-03
type: simple
---

# kitakore 的出群遗言

<Player 
  id=33887163
  name="Flandre Scarlet"
  country=1751
  global=95937
  from="CN"
  accuracy=97.28
  level=100
  progress=46
  performance=5280
/>

这里是kitakore，可以叫我kita，欢迎来和我互mu。

另外，猫盘、ctl472、3.5mm有线耳机这些东西早买早享受，右下角帧生成时间尽量1ms以下，多打长图，最好还能有一个可以陪你一直玩下去的朋友（para∶什么在想我？）

最后的最后，芙兰敲可爱的！`,u7=Object.freeze(Object.defineProperty({__proto__:null,default:c7},Symbol.toStringTag,{value:"Module"})),d7=`---
date: 2024-12-03
---

# akballoon 出群遗言

<Player 
  id=33888415
  name="akballoon"
  country=3790
  global=110712
  from="JP"
  accuracy=98.09
  level=100
  progress=32
  performance=4837
/>

遗言之: 死于！今天下午能不能出群（立即灵验版

在这从 1600PP 左右入群到出群这半年多内好像在快出群之前都没跟群友互动过 233，好像能说的也就几点不是很有用的建议（瘫

鼠标其实osu也可以玩的很舒服，板子不是必要的（盯着我 G502

一个好的键盘，和一个舒适的游玩姿势对于提升还是效果很大的

要多去尝试自己目前能力之外的图，小小越级一下，可以开 NF 或者 auto 了解一下更高等级的排列以及如何去读图，糊图我觉得不可取，先从音乐开始了解节奏作为进步的基础我认为是很有必要的，当然也不要大越，只会有反作用（躺

最后我觉得最重要的是，音游自己玩的开心是最重要的，没必要过度执着于刷PP，不然对自己心态还是容易有挺大影响（在快乐中进步不也挺好的么

（其他的其实是想不出来了

完！就这点东西我居然憋了快一天！太屑了！`,m7=Object.freeze(Object.defineProperty({__proto__:null,default:d7},Symbol.toStringTag,{value:"Module"})),p7=`---
date: 2025-11-09
---

# 0Midas0 的出群留言

![](/images/lastwords/33918873-1.jpg)

![](/images/lastwords/33918873-2.jpg)

![](/images/lastwords/33918873-3.jpg)`,f7=Object.freeze(Object.defineProperty({__proto__:null,default:p7},Symbol.toStringTag,{value:"Module"})),h7=`---
date: 2024-12-03
type: simple
---

# Rurino 的出群遗言

<Player 
  id=34210302
  name="Rurino"
  country=2910
  global=169353
  from="CN"
  accuracy=96.29
  level=99
  progress=68
  performance=4143
/>

在群里赖了10个月之后终于要出群了，最大的原因是我喜欢动不动就afk一段时间，虽然afk几天确实能让手感变好，但是会发现周围人一直在飞升（），我已经见证好多批人了，所以还是不太推荐经常afk（）不过还是别太把自己和别人对比，快乐游戏就好了！

出群的最大原因还是因为dt…dt…

虽然我是个手速严重拉胯（220爆发都打不了）的fw，但是我才知道原来还有一堆180bpm左右的dt可以拿来刷pp，靠这个直接飞升300多 :D

最后希望大家伙都快快飞升！
`,v7=Object.freeze(Object.defineProperty({__proto__:null,default:h7},Symbol.toStringTag,{value:"Module"})),b7=`---
date: 2025-11-23
---

# 【键鼠dt与跳批】Fiveawa 的新人群出群遗言

<Player 
  id="34230148"
  name="fiveawa"
  country="3157"
  global="186373"
  from="CN"
  accuracy="97.08"
  level="94"
  progress="36"
  performance="3796"
/>

2025.03.23--2025.11.23，历时八个月整，正式出群了！11

 只会打跳图，bp 没几个连打，除非非常简单的才能进 bp，所以连打之后再慢慢练吧

键鼠打跳还是有些难的，对于距离的把控要求有点大，不过熟练了就打得比较爽了

忠告：少 re，尽量打完整首歌，不然你也会像我一样 1w3pc 才出群（ 寄宿生一周玩一点点真不容易啊，手感好容易丢

不过好在我终于成功出群了，零音游基础也可以轻松打 osu（真的轻松吗）

半年后就要升高三了，更没时间玩了，所以最后一个寒假要好好玩（

---

鼠标：vxe r1 1600*1x，win10 光标速度 14

键盘：青轴键盘，正在攒钱买磁轴键盘

osu 版本：stable

延迟：4ms 左右 *（编者注：这个是帧生成时间）*

全局 offset：+17ms

skin：Aristia MiMiTooU Edit 带血条，- HK7205A - アロナ&プラナ Collectors edition - std v2，- #ki chan

---

[主页](https://osu.ppy.sh/u/34230148)

[bilibili 主页](https://space.bilibili.com/1284758443)

[欢迎 mu 我（）]( https://mutualify.stanr.info/users/34230148)

---

个人里程碑 

- 2025.03.23 正式开始玩 osu 并加入新人群
- 2025.03.23 单曲 50pp
- 2025.03.29 1000pp 达成
- 2025.05.30 1500pp 达成
- 2025.09.06 单曲 100pp
- 2025.09.21 2000pp 达成
- 2025.10.01 女仆爱丽丝 50 好感达成（？） 
- 2025.10.05 单曲 150pp
- 2025.10.07 2500pp 达成
- 2025.11.23 3000pp 达成,正式出群!!!

---

!bp1-100 sr<5.7（*编者注：仅展示 9 个*）

<Score
bid="5165670"
sid="2377334"
preview="Never Dull - Gypsy In My Mind (Disco Rave Edit 2022) (Sped Up & Cut Ver.) (Bloxi) [kayzy's light insane]"
star="5.48"
max="213"
mode="o"
accuracy=97.71
combo=213
rank="s"
performance=164
mods="DT"
/>

<Score
bid="943019"
sid="437998"
preview="Ray - a-gain (Mei) [Insane]"
star="5.12"
max="354"
mode="o"
accuracy=98.51
combo=354
rank="s"
performance=154
mods="DT"
/>

<Score
bid="1181933"
sid="557832"
preview="Hanasaka Yui(CV: M.A.O) - Harumachi Clover (KuranteMelodii) [Mochi's Insane]"
star="5.12"
max="136"
mode="o"
accuracy=98.73
combo=136
rank="s"
performance=154
mods="DT"
/>

<Score
bid="2347579"
sid="1123162"
preview="Sayuri - Sore wa Chiisana Hikari no Youna (TV Size) (Kuki1537) [Insane]"
star="5.11"
max="356"
mode="o"
accuracy=98.22
combo=356
rank="s"
performance=152
mods="DT"
alias="犹如微弱的光芒"
/>

<Score
bid="5280759"
sid="2425885"
preview="Xi Yang Yang Tong Sheng He Chang Tuan - Qi Si Miao Xiang Xi Yang Yang (MarioKartya) [Insane]"
star="5.30"
max="226"
mode="o"
accuracy=96.29
combo=226
rank="s"
performance=150
mods="DT"
/>

<Score
bid="4898204"
sid="2288239"
preview="MOMOIRO CLOVER Z - SANTA SAN (Cut Ver.) (KeyWee) [FukA's Extra]"
star="5.57"
max="745"
accuracy=97.57
combo=450
rank="a"
performance=140
/>

<Score
bid="2129145"
sid="1017271"
preview="Nashimoto Ui - AaAaAaAAaAaAAa (Sotarks) [Reform's ExPeRT]"
star="5.16"
max="597"
mode="o"
accuracy=98.43
combo=451
rank="a"
performance=139
/>

<Score
bid="1592826"
sid="752070"
preview="Earth Star Dream - Yumeiro Toridori Parade (TV Size) (Faputa) [-GN Jr.'s Hyper]"
star="5.53"
max="203"
mode="o"
accuracy=93.7
combo=202
rank="s"
performance=139
mods="DT"
/>

<Score
bid="850263"
sid="390071"
preview="nao - Anthem Short Version (Kencho) [Summer]"
star="5.36"
max="503"
mode="o"
accuracy=96.96
combo=310
rank="a"
performance=138
mods="DT"
/>

---

被禁言实录，大家一定要看清星级不要超星啊

![](/images/lastwords/34230148-1.jpg)

![](/images/lastwords/34230148-2.jpg)

没有别的了，enjoy gaming`,g7=Object.freeze(Object.defineProperty({__proto__:null,default:b7},Symbol.toStringTag,{value:"Module"})),y7=`---
date: 2025-02-28
type: simple
---

# Baiqiu 的出群遗言

<Player 
  id=34345823
  name="Baiqiu"
  country=3015
  global=176603
  from="CN"
  accuracy=96.87
  level=94
  progress=70
  performance=4063
/>

我从2025年2月28日出群，感谢各位一直以来的关照。从天国那边得知osu这个游戏，从一开始的拿来练鼠标掌握度到后面买数位板，前前后后认识了很多人 很多有趣的人。

我不是很建议大家像我一样一直凹pp图，其他方面一定要提升，我从2700pp猛然发现自己的底子原来那么薄，又用了很多天打别的曲子来稳定自己的基础，pp固然很重要，但是不要带着刷pp的目的来玩osu这款游戏，享受游戏过程同样很重要。最后还是感谢大家一直以来的关照（因为宿舍马上停电这篇只能草草结束了，悲！）osu是个很好玩的游戏，享受游戏过程一定是最重要的，再见啦。`,w7=Object.freeze(Object.defineProperty({__proto__:null,default:y7},Symbol.toStringTag,{value:"Module"})),_7=`---
date: 2024-12-03
type: recommend
---

# AlphaRaWaY 出群遗言（会有人看吗）

<Player 
  id=34346018
  name="alphaRaWaY"
  country=4408
  global=271854
  from="CN"
  accuracy=97.19
  level=97
  progress=6
  performance=3001
/>

~~真的有人会看嘛...~~

## 感想

时隔将近半年突然就要出群了，即使 3000pp 感觉还是和萌新一样没啥区别，即使是现在还是会被一堆 4* 图俘虏...

虽然入新人群是在 2024 年 4 月,但是实际上入坑是在 23 年暑假,大部分 OSU 经历是在游荡中度过的。

总之感谢新人群，感谢管理组，感谢群友，让我在短暂的 6 个月里找到了一个能有归属感的团体，管理辛苦了。

## 介绍

### 关于名字 alphaRaWaY

其实本来的写法应该是 αRaWaY，但是大部分情况下 α 打不出来，所以就用拼音 alpha 代替了。

感觉很多群友都有根据 OSUid 取的昵称，但是看到我的 id 怎么读都是个问题，也联想不到什么东西来作为昵称。

目前id也不好改了，**其实直接叫我 α 就好了**，α 和 "a far" 是谐音，所以或许取个什么和“遥”字相关的昵称也行~~遥遥公主（bushi）。~~

### [osu 个人主页](https://osu.ppy.sh/u/34346018)

~~没有撒泼特界面很简陋~~

速速来大神教我组建collab

![](/images/lastwords/34346018-1.jpg)

### [bilibili 主页](https://space.bilibili.com/341508968)

![](/images/lastwords/34346018-2.jpg)

## 成长史

入坑是一个人入的，进群是没人邀的，玩是没人陪得。(´･_･\`)

### 入坑

入坑的契机还挺神奇的，追溯到 早可能原因是4年前看过一个OSU的[火柴人联合](https://www.youtube.com/watch?v=etrq9eZaUnc)（尤其喜欢里面no title的一段，于是刚入 OSU 下的第一个谱就是 no title，甚至版本还是对的），被里面洗脑的歌和节奏吸引了，然后一直惦记着， 后 23 年暑假为了画画买了个数位板，顺势就注册了 OSU。

### 游荡

在没人交流的情况下玩了半年，经历令人忍俊不禁。

全映射戳版 -> 心疼板子换纯鼠，发现也可以，便转了键鼠 -> 既然可以不戳板又转了悬板 -> 左手中指按得酸开始混双

OSU 应该是我接触的第二个音游，所以这个时期连击分、acc、pp什么的全然不知，也不知道原来可以在官网看自己的 profile，就这么傻乐呵地熟悉了半年 OSU。

### 入群

不记得什么时候在 b 站刷到了谁的新人群出群纪念，然后才知道有新人群这么个团体在，随便搜了下群名就进来了，越级了沉淀了半年其实刚入群已经有 1000pp 了

![](/images/lastwords/34346018-3.jpg)

![](/images/lastwords/34346018-4.jpg)

<div style="text-align: center; font-size: 0.8em; color: gray;">
    这个阶段啥都不懂，就照葫芦画瓢学着大家发点什么 !p、~ 啥的指令玩玩 bot。
</div>

### 飞升

后面水群水多了就开始理论指导实践了，同时也开始刷一些 OSU 的教程和科普，这里推荐来择 Rizer 大大的[低成本 OSU 小教室](https://www.youtube.com/watch?v=xQ51XfMa5WM)。

这个阶段改掉了很多问题：

- 这个游戏太难了 => 应该是只要pass就行，小越怡小情，大越怡大情，
- bp 榜靠后不是 C 就是 B。=> 不是游戏太难而是急于求成
- acc 是啥？=> 把 96% 作为标准，把 acc 作为衡量自己对谱面熟悉程度的指标右手好累 => 全板映射不累才奇怪 
- 左手很多奇怪的失误 => 换猫盘，别糟蹋笔记本的 zx 键了
- 多练孤儿游戏 => 这个游戏原来有 mp 的吗

不断地修正问题，之后稳定到了现在的模式：半悬板 + 猫盘 + 混双模式。

这个时期主要是追求 3.5~4.5 星 acc 95% fc，多上宝宝巴士见见新颖的排列，pp自然就涨了。

### 沉淀

积累的底力有限，飞到 2500 多 pp 就开始乏力了，这个时期开始 fix 4 星、凹 5 星 FC，开始苦练移动，连打，跳，串，强双，控指等硬性指标。 后在新人群 s32 赛季参赛结束后，刷几个 pp 图飞升出群。

## 对新人说的

### 多练优于理论，但是不能完全没有理论

这是我找到游戏社区前体会到的，深刻的教训。

（这里我）分享一些从 1000PP 到 3000PP 成长途中积累的理论：

*免责：以下理论仅供交流，很多东西也只是都这么说就是这样了，并没有严格的定义，一切以官网的解释为准，做个参考看看，如果有不对的地方看个乐呵就行*

#### 图的几个基础指标

- AR(4~10)：缩圈速度
- OD(随意)：判定的严格程度
- HP(随意)：血量
- BPM(100~240)：节奏的速度（各个音游通用）
- CS(<=9)：泡泡尺寸
- Len(<6min)：长度，一般也不会缩写就写作Length

一般情况下以上指标都是越高越难（相对的），例如 CS 更高圈反而更小，”指标都是越高越难“这句话只是方便记忆这些指标变高会对谱面产生什么样的影响，其实真实情况是适中

好，适合打的指标区间我标在名词后面了，当然游戏终究是图一乐，不是为了刷 pp 的话玩的开心的图就是 适合自己的图。

#### 常见的指法

- 连打：连续且快速地按到三次以上。常见的就是三个泡泡叠在一起，需要 zxz 或者 xzx 地连着按，进阶点就是5连、7连、串，注意和密集连戳区分不然会acc爆炸。
- 单双：除了连打等特殊情况外，一般只用一个手指单戳，一般称这个手指为主指，另外一个我习惯叫辅助指。
- 强双：没有所谓主指和辅助指，两个手指平等且轮流地去按 zx，底力不足单双人（像我）会在遇到高bpm连戳后转强双。
- 混双：比较广义的叫法，不是单双或强双都可以叫混双，我目前的混双是连打和叠指主指起手，其余全是强双。
- 切指：可以理解为二连打双押？，常出现在滑条首尾或混在单戳中间。
- 卡指：左手不知道该按哪个手指了，我喜欢形容为连打中的左指踩右指原地升天。
- 串：名字就已经比较形象了，一般不移动的连打不叫串，也要注意和密集连戳区分不然会acc爆炸。
- 跳：大位移，比较有规律的跳会有专有名词：对跳（180°）、画星星（锐角跳）、钝角跳。种类很多，看谱师排列。

#### 常见缩写

- FC：full combo
- sb：如果看到别人发了这个别第一时间觉得冒犯，这是有两种解释的：一个是指断了滑条（slide break），一个是背景里那个一闪一闪的（story board）（*编者注：一闪一闪的叫 Kiai 闪光，故事板是背景里类似于演出一样的东西，和在背景里放一个视频不一样*）
- afk：away from keyboard
- tech：technique，就是技巧，tech 图没什么明确的定义，但是摆出来大家都知道这是 tech，（一般特点就是星级诈骗、难度奇高、但是又能打、fc 了观赏性极强）
- tth：total hits，总共的击打次数
- PC：~~私人电脑~~ play count，游玩次数
- acc：Accuracy，准度
- PT：play time，游玩时长
- bp：Best Performance，可以指 pp 高的成绩（!bp），也可以指算入总 pp 计算的前 100 个成绩（!bp1-100），具体这一百个成绩怎么算入总数的可以在官网 wiki 里看到（*编者注：实际上会算所有成绩，但只有这个区间的成绩占比高*）
- std：戳泡泡模式
- ctb：接水果
- mp：multiplayer，多人模式
- mu：互相关注 
- alt：100~130bpm 连戳谱
- ...

希望这些理论可以帮助到一些和我刚入群时一样的小萌新们，刚进群没有人带，看到大家说着一些不像汉语的名词，问又显得自己啥都不懂。

新人群这个社区整体是非常友好的，并没有像一些圈子刻意地用意义不明的专有名词来排挤新来的，我能列举的只是片面的，其实即使 3000pp 了我还是一堆不懂的圈梗，有不懂的直接问就好，希望所有玩家能不被这些繁文缛节所干扰，开心地享受 OSU 这款游戏。

### 适量刷 pp

强调：刷 pp 不可耻！刷 pp 不可耻！刷 pp 不可耻！为什么不刷 pp，是不想要吗？

刷到了就是你的，你的每一个 pp 都是你亲手打出来的，不是虚出来的，打不出来的 pp 就是不属于自己的。

说适量刷pp，指的是不要囿于 pp 这个数字，pp 不代表实力的全部，实力有没有提升其实自己本人是 清楚的。

让人兴奋的时刻不是多了个一分钟不到的 bp，而是发现上个月自己看都看不懂的谱面突然就能 FC 了、一些配置不需要经过大脑双手能自动地作出反应...每一次觉得自己更加理解、适应这个游戏才是真正的进步了。

与其一味地死钻，重试 500 次有可能为自己 pp 做出贡献的谱面，不如扪心自问还有哪些技能不够熟练，找找或问问大佬有没有推荐的练习谱。很多 pp 图当实力达到一定程度后能非常轻松地拿下（SS 除外），没必要在实力比较勉强的时候就去狂凹， 后实力涨幅没有 pp 快会让人更早地进入瓶颈，摧毁游戏体验。

### acc！！！

我玩游戏尊重每一个玩家，但是当我看到有人打出 80 多甚至 70 多 acc 的低星 fc 时，个人而言非常反感。

对一个谱面完全理解了的终点不是 fc，而是在一定 acc 之上的 fc，音游是音乐节奏游戏，不是目力（也不是不可以）游戏， 健康的心态就是每开一次游戏都当作是演奏一个谱面，我相信大部分乐器应该不是只要在调上就没事了，除了位置肯定节奏也要对上。

常见的方法就是把一定的 acc 作为自己理解谱面配置的标志，我的标准是至少 acc 96%，以及谱面中有片段会稳定出现 50 或者大量 100 也视为掌握谱面的配置不完全。

当然，这些理论全部仅适用于常规的谱面，明显的tech图、串的专项练习等等用来练习技能的就没必要太苛刻了，在新人阶段重视 acc，是在为以后扎实的基本功打下良好的铺垫。

如果 3 星、4 星的 3 连、5 连都能稳定爆一个 100，180bpm 以下的散步连戳都会 300-100-50，那以后会相当痛苦，或许目前的你确实可以靠这样的 acc 接住他们，但是如果以后你去连戳长耐力图，里面塞 3 连，塞串，塞切指，不知阁下还能不能像萌新阶段一样显得游刃有余。

大神不一定每一个 bp 都有很高的 acc，但是 acc 大神真的什么谱都能打一点。如果一个玩家能在综合图、马拉松图、跳图、串图、tech 图中屡屡保持高 acc，那么这个玩家对游戏的理解真的很高，这种玩家可以在各种配置中精准地抓准节奏，左手和节奏的感知保持了高度的同步，强如 5 分音符 7 分音符（*编者注：可能是 5 连或者 7 连，一般来说串是 16 分音符*）等阴间音符不能击败。

强烈推荐在新人阶段就苦练 acc，我的飞升期都是在降星刷 acc 之后开始的，即使现在能 acc 97 fc 竹取，我还是会不时地回 4.5 星以下，打打 acc 99 的成绩练手（tip：本人没有一个 4 星 SS）。

### 多练

老生常谈的话题，虽然我真没资格说（

本人肝力 c，PC 才 6000，即使进行了大量的无效练习还是只有 7 天的游戏时长。

但是“多练”真的有魔力让每个大神在指导新人时说出它，这肯定有他的道理。

在我短暂的 OSU 生涯里学到，一个懒鬼越是寻求捷径，越是会在疏于练习的谱面失足，要成为超越懒鬼的存在啊。我不当懒鬼了，ppy！我要成为超越懒鬼的存在！

来朗诵一下圣经：

\`\`\`
不会打跳只是因为不打跳
不会手控只是因为不打手控
不会 HD 只是因为没开过 HD
不会打串只是因为没打过串 
不会 tech 只是因为没打过 tech
不会强双只是因为没打过强双
没有手速只是因为不打手速图
\`\`\`

这个是在 Nana Sakura 的《OSU！新人参考指南》中看到的，当时感触挺深的，于是我就决定放弃投机，啥都多练~~（啥都不精）~~。

### 不要闭门造车

既然都进了新人群就好好利用社区资源，没事去群文件挖挖宝，学会耐心看文件，耐心看科普，虚心询问，结识大佬（快点飞出群来新人群带我）。

学会了用好社区你可以解决的问题包括但不限于：

1. 比赛 
2. 梗
3. 皮肤
4. 术语
5. 游戏设置
6. 外设
7. 实用软件
8. ~~对象~~

~~说实话这点我自己都没做到（~~

### 设备上对自己好点

虽然确实在很多游戏中，把自身技术问题归咎于设备容易被嘲笑，但说实话 OSU 这个游戏里似乎是反的。

OSU 的外设主要就是输入设备和移动设备。

撇开互联网上一些锤子、电动牙刷、电钻等离谱的东西，常见的玩法有以下几种：

纯鼠：输入：鼠标左右键，移动：鼠标键鼠：输入：键盘，移动：鼠标板键：输入：键盘，移动：数位板

鼠标和数位板都是没有上限的，不提倡所谓孰优孰劣，只有适不适合。方便的话肯定是鼠标更好，数位板的话，如果只是为了玩 OSU 而不是像我一样还有绘画等其他用途，请在入手前斟酌一下自己是不是真的会一直玩下去。

鼠标不是很懂，不断触，摸得舒服应该就好。

数位板：推荐 wacom CTL472，配置看群文件或者问管理。

键盘：推荐入手专门服务 OSU 的猫盘 MeowPad v2se，其他的话尽量回报率要高。（*编者注：回报率 1000 Hz 左右就很合适了，更需要注意的是手感、键程以及要不要考虑磁轴*）

另外电脑有显卡的话，一定要开独显，性能问题看群文件或者问管理（*编者注：问 CY*）。

## 谱面推荐

热门的就不推荐了

<Beatmap
  bid=4261251
  sid=2042163
  preview="MIMI - Dakishimeru made. (CoLouRed GlaZeE) [Insane]"
  star=3.06
  max=407
/>

真萌新图，入新人群前玩的，好听

<Beatmap
  bid=3165994
  sid=1546846
  preview="Sawano Hiroyuki - Inferno (kanor) [Chu's Hard]"
  star=3.13
  max=765
/>

我第一次学会的三连打

<Beatmap
  bid=2484170
  sid=1192164
  preview="Mili - String Theocracy ([Arc]) [groovy's Hard]"
  star=3.16
  max=702
/>

我第一次学会的切指  

<Beatmap
  bid=3998232
  sid=199838
  preview="Yonder Voice - Last Train (Hakurei Yoru) [Collab Hard]"
  star=3.46
  max=811
/>

适合刚玩 3 星的新人的连戳，容易断滑条，可以不追求 FC

<Beatmap
  bid=2050415
  sid=970646
  preview="Wisp X - Wander (Uta) [Hard]"
  star=3.79
  max=1018
/>

3 到 4 过渡图

<Beatmap
  bid=164713
  sid=54123
  preview="Mika Kobayashi - Bios (MK + nZK ver.) (meiikyuu) [Insane]"
  star=4.02
  max=1164
/>

新人必备 3 转 4，提前适应 190 单戳，爽图

<Beatmap
  bid=1530642
  sid=703957
  preview="Panda Eyes & Teminite - Immortal Flame (feat. Anna Yvette) (Sotarks) [Insane]"
  star=4.28
  max=669
/>

练速度，连戳，爽

<Beatmap
  bid=2185535
  sid=1032163
  preview="Wisp X - Crimson feat. Hatsune Miku (Radio Edit) (Nao Tomori) [yaspo's Insane]"
  star=4.38
  max=915
/>

连打练习图，建议 acc 凹到 96 以上

<Beatmap
  bid=496143
  sid=210937
  preview="SawanoHiroyuki[nZk]:mizuki - aLIEz (TV size) (xxdeathx) [Insane]"
  star=4.51
  max=628
/>

核爆神曲，单双转强双好图

<Beatmap
  bid=1017602
  sid=357777
  preview="NOMA - Brain Power (Jacob) [Exote's EXHAUST]"
  star=4.45
  max=743
/>

脑力，版本很多，这个版本适合练对跳和连打

<Beatmap
  bid=4244902
  sid=2016404
  preview="Nor - Usagi Flap (newton-) [Fukari's Insane]"
  star=4.56
  max=601
/>

连戳练习好图，远比看上去难

<Beatmap
  bid=4767842
  sid=1670325
  preview="Ardolf - Split EX (Instrumental Ver.) (Ixcors) [INSANE]"
  star=4.55
  max=1427
/>

连打练习谱

<Beatmap
  bid=2419135
  sid=1157351
  preview="Akira Complex - Ether Strike (FreeSongs) [Future]"
  star=4.66
  max=742
/>

tech，可练slide，零光吹喇叭

<Beatmap
  bid=2031676
  sid=966339
  preview="umu. - Ai no Sukima (Sotarks) [Reform's Insane]"
  star=4.77
  max=585
alias="哀伤的隙间"
/>

不是你认识的那个pp图，可练手速

<Beatmap
  bid=492543
  sid=204159
  preview="Fear, and Loathing in Las Vegas - Swing It!! (Guy) [Insane]"
  star=4.84
  max=1283
/>

14 年老图，连打经典，强烈建议acc凹到98+

<Beatmap
  bid=1209277
  sid=570494
  preview="Karen Aoki & Daisuke Hasegawa - Great Days (Testo) [Crazy Diamond]"
  star=4.80
  max=429
/>

综合短图，可用于检测自己的弱项在哪

<Beatmap
  bid=4225283
  sid=1843127
  preview="onoken - Last | Eternity & Moment (Lavender) [Lunala's Future]"
  star=4.87
  max=559
/>

转 5 星预备图

<Beatmap
  bid=1524133
  sid=720240
  preview="Drop - Granat (Half) [milr_'s Insane]"
  star=4.66
  max=222
/>

pp 图的另一个版本，难度更高，在含有连跳的基础上，其实更考验读谱

<Beatmap
  bid=3226510
  sid=1541421
  preview="Mitsukiyo - Unwelcome School (gazimal) [wring's Insane]"
  star=4.99
  max=806
/>

tech，读谱考级

<Beatmap
  bid=632127
  sid=267767
  preview="cosMo@BousouP - Oceanus (Broccoly) [Asagi's Insane]"
  star=5.02
  max=1238
/>

4 到 5 过渡好图

<Beatmap
  bid=3986450
  sid=1927451
  preview="Nor - RE Aoharu (Kuse) [Setu's Insane]"
  star=5.07
  max=788
/>

4 到 5 过渡连打图，速来练连打切连戳
`,S7=Object.freeze(Object.defineProperty({__proto__:null,default:_7},Symbol.toStringTag,{value:"Module"})),k7=`---
date: 2024-12-03
---

# yoasobiai 遗言口牙

<Player 
  id=34443419
  name="Marisa Kirisame"
  country=161
  global=2988
  from="CN"
  accuracy=98.99
  level=62
  progress=60
  performance=4653
/>

前言

这里是yoasobiai

星野爱狂热粉丝兼东方厨

## 入坑osu的契机

那必然是为了星野爱啊！！！

“爱”的眼睛好似魔力般能吸引我的视线，为此开始不断循环idol，追漫画，只为能够更能够体会到来自“爱”完整的魅力。苦于不会下落式音游，在偶然间b站刷到了osu里的idol谱子，yoasobiai这个账号由此诞生

## 关于pp

pp只是目前实力的客观表现，每个人都有自己独特的音游理解，不需要为当前的pp焦虑，每一次沉淀都是实力的提升，快去做derank吧（bushi

## 关于osu的一些目标

当前小目标：

World ender（魔王）+dt fc

<Beatmap
  bid=3702396
  sid=1804812
  preview="sasakure.UK x TJ.hangneil - World Ender (Hey lululu) [Present]"
  star=3.85
  max=948
  alias="魔王"
/>

Scarlet rose（血玫瑰）+hr hd pass

<Beatmap
  bid=131564
  sid=41686
  preview="Lily - Scarlet Rose (val0108) [0108 style]"
  star=5.79
  max=1441
/>

终极目标：

任意idol谱面world#1  hrdthd的路还有很长要走啊(ㄒoㄒ)

![](/images/lastwords/34443419-1.jpg)

## 一些想说的话

作为音游玩家，勿忘记了我们的初衷。

如今，“爱”依旧能抓住我悸动的心脏，不过追随“爱”的旅程似乎变得更加多彩。

Lovelive缪斯、虹咲的各位偶像，东方幻想乡的各路角色，凄惨的马猴烧酒魔圆，还有新人群的各位，在此感谢同你们的相遇。

还在迷茫的各位，坚信练习就能成长，愿君诸事顺利。

## 最后再提一下有关超星

什么水平打什么难度的图，一味去凹远超能力的谱面只会让你陷入自我怀疑的泥淖。

不知道如何正确的练习不妨去问问群内管理，帮助你更好的去理解包括但不限于谱面排列，指法，按键，转板等问题。

也在这跟新人群的管理说一声抱歉，因为我超星违反群规的问题增加了不少工作负担。

<font size="5">不要越级！！！不要越级！！！不要越级！！！</font>

## 结语

时间辗转，唯有“爱”恒久不灭。以“爱”为名，因”爱”得与osu和米娜桑相遇

最后，为同OSU！与米娜桑的完美邂逅献上礼炮(●ˇ∀ˇ●)

<font size="5">完</font>

&emsp;

&emsp;

&emsp;

&emsp;

&emsp;

&emsp;

&emsp;

&emsp;

&emsp;

&emsp;

真的没了！！！！！

&emsp;

&emsp;

&emsp;

&emsp;

&emsp;

&emsp;

&emsp;

&emsp;

&emsp;

&emsp;

别往下翻了！！！！

&emsp;

&emsp;

&emsp;

&emsp;

&emsp;

&emsp;

&emsp;

&emsp;

&emsp;

&emsp;

既然你诚心诚意的发问了。那我便大发慈悲的告诉你：

向那比黑色更黑，比黑暗更暗的倒刷，在此寄讯吾真理的金光吧!

觉醒之时的到来，pp奴隶的堕落章理，成为无形的扭曲而显现吧!

起舞吧，起舞吧，起舞吧!

吾之力量本源之愿的崩坏，无人可及的崩坏，将天地万象焚烧殆尽，自深渊降临吧！

这正是当今最强的刷pp魔法魔法，这就是究极飞升魔法

HR DT HD FL!
`,x7=Object.freeze(Object.defineProperty({__proto__:null,default:k7},Symbol.toStringTag,{value:"Module"})),B7=`---
date: 2025-03-15
type: simple
---

# VickVo 的出群遗言

<Player 
  id=34556002
  name="VickVo"
  country=1198
  global=64414
  from="CN"
  accuracy=98.4
  level=100
  progress=9
  performance=6029
/>

加油`,A7=Object.freeze(Object.defineProperty({__proto__:null,default:B7},Symbol.toStringTag,{value:"Module"})),E7=`---
date: 2025-03-09
type: simple
---

# 丘比(FFrra) 的出群遗言

<Player 
  id=34844529
  name="FFrra"
  country=2386
  global=134496
  from="CN"
  accuracy=97.68
  level=96
  progress=39
  performance=4617
/>

我的心路历程：

回国玩了舞萌，真好玩

听说osu也有slider，我之前还注册了账号没怎么玩，再试试？

一个五位数大佬指点了下

多练

欸我怎么在飞

欸我怎么2000pp了

欸我怎么200pp bp了

欸我怎么出群了（

给后面的萌新指导：享受游戏，没了（真的有人会看吗

在新人群差不多呆了20天？`,T7=Object.freeze(Object.defineProperty({__proto__:null,default:E7},Symbol.toStringTag,{value:"Module"})),I7=`---
date: 2024-12-03
type: simple
---

# gangkun1414 的出群遗言

<Player 
  id=34907673
  name="getan_miku14"
  country=767
  global=66715
  from="HK"
  accuracy=97.93
  level=100
  progress=27
  performance=5954
/>

键鼠hr重症患者，请玩mod三思而后行

刷上3000pp没过三天久死了`,M7=Object.freeze(Object.defineProperty({__proto__:null,default:I7},Symbol.toStringTag,{value:"Module"})),C7=`---
date: 2024-12-03
type: simple
---

# Sgt_Fantasy 的出群遗言

<Player 
  id=34995831
  name="Sgt_Fantasy"
  country=53456
  global=271477
  from="US"
  accuracy=98.18
  level=100
  progress=10
  performance=3003
/>

迫于学业压力，平常玩的时间不多，加上本人太菜了，导致在新人群待了八个多月才出群。在新人群的的这八个多月，七月份之前只是单纯的划水，七月之后和群友打了第一次mp后才渐渐融入到这个群体，也认识到了很多人（如：[ciallo](https://osu.ppy.sh/users/16325440)大神，[qqmx_x](https://osu.ppy.sh/users/35750067)大神，[rainbow03](https://osu.ppy.sh/users/36097722)大神，[SINKA0](https://osu.ppy.sh/users/21614712)大神，[daring tact](https://osu.ppy.sh/users/32396623)大神，[ZnCookie](https://osu.ppy.sh/users/18230719)大神，[baicai492](https://osu.ppy.sh/users/27368979)大神，[cold fish](https://osu.ppy.sh/users/35678806)大神等等）。

然后，感谢一下cold fish，cold fish算是目前对我的osu生涯影响最大的人，促使我打了第一场比赛，陪伴了我多次的mp，让我调回了偏移。 

最后，给新人一些我自己的感悟吧。

1.	多打mp， 

2.	实力到了acc自然就上去了

3.	如果连续一段时间手感不好，不妨休息几天

4.	不要长时间凹一张图，容易手癖

祝大家都能早日出群！`,P7=Object.freeze(Object.defineProperty({__proto__:null,default:C7},Symbol.toStringTag,{value:"Module"})),O7=`---
date: 2024-12-03
type: simple
---

# AsukiCko の出群遗言

<Player 
  id=34998676
  name="AsukiCko"
  country=3911
  global=113470
  from="JP"
  accuracy=91.7
  level=97
  progress=0
  performance=4882
/>

2023 年 12 月的时候入坑 osu!

当时我本来是想试一试这个游戏，结果就越打越上瘾了。

我也不知道说什么。反正就是不要越级，是真的容易手癖。

希望大家也能早日飞升吧。

QwQ

3天没打，莫名其妙的飞了。。。没想到这么早就可以被踢（送）出群了。`,R7=Object.freeze(Object.defineProperty({__proto__:null,default:O7},Symbol.toStringTag,{value:"Module"})),N7=`---
date: 2026-10-10
---

# cedric1102 遗言

<Player
id=35288237
name="cedric1102"
country=3840
global=304390
from="SG"
accuracy=96.69
level=99
progress=55
performance=2967
/>

<Score
bid=4065924
sid=1961815
preview="mary - Alice in Reitouko (Airiesu) [Swaying around Wonderland, we danced to our hearts' content.]"
star=5.47
max=1815
mode="o"
accuracy=96.79
combo=1010
alias="Alice in 冷冻库"
rank="a"
performance=172
/>

<Score
bid=738063
sid=320118
preview="Reol - No title (VINXIS) [Lust's Insane]"
star=5.62
max=403
mode="o"
accuracy=97.96
combo=335
rank="a"
performance=162
/>

<Score
bid=5238454
sid=2412232
preview="Will Stetson - Of Our Time (Sotarks) [Insane]"
star=5.00
max=905
mode="o"
accuracy=99.22
combo=763
rank="a"
performance=161
/>

<Score
bid=5127731
sid=2374386
preview="Aziya - bbydoll (nightcore & cut ver.) (riot1133) [pick me]"
star=6.03
max=340
mode="o"
accuracy=93.61
combo=134
rank="a"
performance=156
/>

<Score
bid=4919915
sid=2282704
preview="Marina and the Diamonds - Bubblegum Bitch (Nightcore & Cut Ver.) (Parad0xa) [PikA's Extra]"
star=5.17
max=327
mode="o"
accuracy=97.43
combo=248
rank="a"
performance=147
/>

<Score
bid=1724734
sid=822974
preview="Yamamoto Nozomi, Yamashita Nanami, Fuchigami Mai, Oozora Naomi, Toyama Nao - BEYOND THE STARLIGHT (Shunao) [Mordred's Insane]"
star=5.20
max=599
mode="o"
accuracy=96.41
combo=595
rank="s"
performance=143
/>

<Score
bid=1091249
sid=513590
preview="RADWIMPS - Zen Zen Zense (movie ver.) (Monstrata) [Extra: Taki]"
star=5.32
max=702
mode="o"
accuracy=96.87
combo=248
alias="前前前世"
rank="a"
performance=142
/>

<Score
bid=5137227
sid=1286874
preview="Poppin'Party - Yume wo Uchinuku Shunkan ni! (Livermorium) [Insane!]"
star=5.13
max=1502
mode="o"
accuracy=97.99
combo=1080
alias="在击穿梦想的那一瞬间！"
rank="a"
performance=140
/>

<Score
bid=1054507
sid=495334
preview="Raujika - Roseo Neige (sahuang) [Tranquility]"
star=4.80
max=1040
mode="o"
accuracy=97.42
combo=760
rank="a"
performance=137
/>

<Score
bid=829359
sid=374858
preview="IOSYS - Tanoshii Yoru no Ochakai - Ringo's Tea Party (Frey) [Lunatic]"
star=5.11
max=1156
mode="o"
accuracy=98.23
combo=1085
alias="快乐的深夜茶会"
rank="a"
performance=137
/>

## 设备

屏幕是暗影精灵笔记本原装

鼠标是G304

键盘是狼蛛S3187   

很简陋，但是够用了

说来有趣，其实我是先进的进阶群再进的新手群，2500pp左右的时候吧

之前一直在默默自己找歌和打rp基本没有参加社群活动，现在想来有点后悔，很多东西后面才知道

其实在2800左右我就已经感觉到我要飞升了，但是最后还是没忍住，不想写那么多感受了，我写遗言的唯一目的就是拉感谢清单

## 以下是获奖名单

- Lifelong，我的引路人，一切的开端，从他那偷到了b2
- Jiaofeng，从他那偷到了b1
- 基米大王，我出群的罪魁祸首，从他那偷到了b5
- Kiaturbopl，rp fun!
- 大师jianfeng，给我推了很多好图，优质长综基础
- Moming,refrainOVO,chickengold,chinwen,lvwq等人（还有很多）一起mp is fun
- Lain0000，dawn1220，ilvdijun，zhidao等氛围制造组们，水群辛苦了
- 感谢管理们答疑解惑兢兢业业

## 提升建议

少重打，要打就打完

多mp和rp（不知道就去问管理啥意思XD）

多打长综，少开mod

多进某个名字叫lvwq的lazer私密房间（密码是11415）

永远保持谦卑

不要害怕成为怪胎，但也要做好走更困难的路的准备

哦对了这是我的[斗鱼房间](https://www.douyu.com/11892418)，偶尔会开播打打osu

欢          迎          来          看

`,D7=Object.freeze(Object.defineProperty({__proto__:null,default:N7},Symbol.toStringTag,{value:"Module"})),L7=`---
date: 2024-12-03
type: suggest
---

# hx123yx 的出群遗言

<Player 
  id=35529699
  name="hx123yx"
  country=985
  global=301483
  from="CH"
  accuracy=96.70
  level=99
  progress=45
  performance=3040
/>

**这里是hx123yx一个休闲听歌型玩家。**

**喜欢喔屎，旮旯，泰拉**

在24/11/04 的今天

因为ppy的新pp算法更新，导致直接把我送到了3kpp。

也就是说根据群规，再过不久我也会和我当时同期的人一样，离开新人群（虽然我的同期们早就飞的不剩几个了）

一直觉得自己没什么天赋所以天天摸鱼，从300h还没2000pp，到靠新算法从2956抬到3040（强制出群）， 此时的时长也来到了464h。

因为从来没想过自己有一天能够出群，所以遗言当然是从来没有想过，记录也是基本没有。所以从现在开始想到什么就写什么好啦。

最早认识到osu是因为Neuro VS Mrekk 的视频
[（BV1uT411C7wP）](https://www.bilibili.com/video/BV1uT411C7wP/?spm_id_from=333.337.search-card.all.click&vd_source=513fae5c173b6b9ad1b4c1b84f2969f0)

看到新奇的音游形式和NO.1离谱的操作，让我对这款“新鲜的”音游留下了深刻印象。（ 入坑后才知道这是2007年的老东西））

起初是3月的某一天想起了这个游戏，而入坑的原因是想玩里面的旮旯曲子。如果要数哪个音游旮旯谱（应该说是歌曲最多）最多，那肯定是喔屎啦。（虽然当时并不知道） 

![](/images/lastwords/35529699-1.jpg)

也是因为天天看到下落式想着试试别的类型的音游，虽然我连下落式都没玩过（真零音游基础入坑osu）

从3月注册5月入群到现在11月出群，看着很长其实也很短。 

## 3~5月瞎玩时期

从入坑开始就直接拿着手上的鼠标和薄膜键盘，每天在官网上找旮旯曲玩。

![](/images/lastwords/35529699-2.jpg)

瞎玩时期的逆天记录

放群里你可能觉得，100多h还在打3*，甚至连4*出头都打不过，是怎么坚持玩这么久的？

至于为什么能打这么久……

~~<u>1.是大学生闲得慌（bushi</u>~~

1. 是因为当时并不混圈，也不懂100h打的什么水平。（ 甚至进群前连pp都不知道）

2. 每天打自己喜欢的曲子，目的只为打出更高的acc。（ 并不知道如何练图才有提升）

![](/images/lastwords/35529699-3.jpg)

![](/images/lastwords/35529699-4.jpg)

反面教材（喜欢就多玩是吧） 

入群的契机是，当时在B站刷到了大名鼎鼎的七星哥的视频，从而知道了新人群。也是想着进群看看自己的水平怎么办，为何玩了这么久连打4*都很困难呢）

![](/images/lastwords/35529699-5.jpg)

希望群友们能对我们这些刚入群的萌新休闲玩家友好点）

（我一进群就先潜水了一个月，因为不熟悉群里的环境所以一直在观察，平时想混个脸熟只能趁群里复读+1的时候点一下hhhhh）

## 努力提升时期

随着环境的不断熟悉，渐渐的在群里活跃起来。

![](/images/lastwords/35529699-6.jpg)

进群后不仅cy帮助我优化了osu（吸歪我的超人）还学习到了很多练习的技巧。参加了群内mp（虽然挺少的）， 同屏打图，头衔图，认识到了很多人。

![](/images/lastwords/35529699-7.jpg)

多亏了拍屏才能拍下这一瞬间）

![](/images/lastwords/35529699-8.jpg)

在群里混眼熟被牢大记住了，被拉去mp之后秒建collab群。从自己一个人玩到真正有人一起玩的巨大转折。

之后就是不断打图（大多数是旮旯图）提升自己的技（结果牢大现在已经不o）

术顺带提升pp。虽然之间遇到不少的困难，但过程中断断续续的参加了几次mp，组建了collab群又认识了不少人。

[回忆录](https://meme.osuxrq.com/)

之前错了一次的[新人群赛](/events/matches/32.html)，终于补上了

学会一点hd，一点dt，一点jump，一点flow，一点spd，一点tech，一点ar8。（ 什么都会一点约等于都不会2333）  

不会读ar10以上，不会ez。

这段时间应该算是在osu里面最开心的时光。就算是这么摸鱼的我，最后还是迎来了出群的时刻。

写完了上面这些废话，我觉得还得留一下话给新入群的萌新们（应该也没什么人看）。 这只是如何正确的提升自己，但是如果你和我一样，喜欢这首歌并想把它pass，这也是一种游玩方式，并没有问题。

1. 千万千万不要越大级。根据我个人的惨烈经历，不要一直打一张你每次打出来成绩都是C或以下的图。这样你不管打这张图多少次，对你的提升都是很微小的。

2. 不要一直re一张图，特别是re很多次都不能pass这张图1次的，赶紧换张图玩，这对你的手感影响非常严重，甚至会搞坏你的手感。

3. 如果你卡在一个瓶颈很久，可以先提升读图。如果你觉得不是读图的问题，也可以大胆尝试其他的游玩方式。

像我是从入坑用鼠标玩，换了两个鼠标，是不信邪不能把鼠标玩好。后来死磕到200h，确实是没有提升就换了板子和猫盘。

换板之后也经常遇到瓶颈，无论如何都没有任何提升的情况。我也多次的更换了我的握笔和映射，osu就是一个不断试错的游戏，每次更换也帮助了我突破瓶颈。

不用害怕你的水平会下降很多，你练习了很久的读图，你只需要适应好你更舒服的游玩方式，就能比以前玩的更好。

4. 享受游戏，保持你对游戏的热情和良好的心态，只要你一直打，就能进步。

以下是很多有用的资料，每个都对我有或多或少的帮助。

[【手把手教你降低osu延迟-哔哩哔哩】](https://www.bilibili.com/video/BV1DKmFBNE3C/?spm_id_from=333.337.search-card.all.click&vd_source=513fae5c173b6b9ad1b4c1b84f2969f0)

[【osu!在使用数位板过程中可能没人真正告诉过你的问题-哔哩哔哩】](https://www.bilibili.com/video/BV1k34y1v7uj/?spm_id_from=333.337.search-card.all.click&vd_source=513fae5c173b6b9ad1b4c1b84f2969f0)

[【 究极 osu! 圣经 | 英文字幕】详细剖析 osu! 所有的技
术：osu! 博士毕业论文 by DigitalHypno-哔哩哔哩】](https://www.bilibili.com/video/BV1aU4y1W7J3/?spm_id_from=333.337.search-card.all.click&vd_source=513fae5c173b6b9ad1b4c1b84f2969f0)

[【【osu!中文翻译】如何提升你的移动 Aim指南 Part.1-哔哩哔哩】](https://www.bilibili.com/video/BV1RY4y1t74R/?spm_id_from=333.337.search-card.all.click&vd_source=513fae5c173b6b9ad1b4c1b84f2969f0)

[【osu! 手速与耐力教学 高bpm长串发力技巧 手速圣经第一章：工欲善其事必先利其器-哔哩哔哩】](https://www.bilibili.com/video/BV1YC4y1k7fo/?spm_id_from=333.337.search-card.all.click&vd_source=513fae5c173b6b9ad1b4c1b84f2969f0)

[【音游手速圣经：科学训练手速与耐力 解析耐力的科学原理 osu手速圣经第二章：汝果欲学串，功夫在串外-哔哩哔哩】](https://www.bilibili.com/video/BV12K421C71X/?spm_id_from=333.337.search-card.all.click&vd_source=513fae5c173b6b9ad1b4c1b84f2969f0)

[【【 中字翻译】游戏玩家的手部运动热身 | Hand Exercises for Gamers-哔哩哔哩】](https://www.bilibili.com/video/BV11T4y1h73B/?spm_id_from=333.337.search-card.all.click)

感谢你们陪我走过这段路：

火箭飞升批 [ciaIIo](https://osu.ppy.sh/users/34504424)，彩虹 [rainbow03](https://osu.ppy.sh/users/36097722)。主包 [ZnCookie](https://osu.ppy.sh/users/18230719)。Acc大神 [SisypheOvO](https://osu.ppy.sh/users/35628968)。牢大 [killbusark](https://osu.ppy.sh/users/13744965)。爱撒娇的超可爱猫猫 [Erina-](https://osu.ppy.sh/users/10364008)。 

Fp们 [Yamiyami](https://osu.ppy.sh/users/16471586)，[lingjiang](https://osu.ppy.sh/users/8223096)，[coconut123](https://osu.ppy.sh/users/31851527)，[21awa12](https://osu.ppy.sh/users/36062235)，[Umino Miyako](https://osu.ppy.sh/users/33979116)，[Acat0721](https://osu.ppy.sh/users/22177500)。 

zhu KonoYuki。小可爱 [cold fish](https://osu.ppy.sh/users/35678806)。大佬 - Inui JaHuLi -。 

新人群的，青空 [Apocryphal](https://osu.ppy.sh/users/35317988)。团子 [Uzuki Tuanzi](https://osu.ppy.sh/users/35595885)。

白菜 [baicai492](https://osu.ppy.sh/users/27368979)。涅普 [Shimakazei](https://osu.ppy.sh/users/7378611)。龙王 [ElegiaET](https://osu.ppy.sh/users/35778917)。爱丽丝zhan_AL-1S。[HaHk](https://osu.ppy.sh/users/22914893)。[MengLiYL](https://osu.ppy.sh/users/33091136)。[Googujiang](https://osu.ppy.sh/users/15651670)。

[dongyue277353](https://osu.ppy.sh/users/35874311)。还有新人群的其他人，你们也要开心osu呀

由于时间紧迫这篇遗言写的非常粗糙。只能说说自己的故事也帮不到新人，算是给以后的自己留下一个回忆吧。

附上bp表，里面的大多数歌都很好听，想听歌的可以玩玩） 

<Score
  bid=738063
  sid=320118
  preview="Reol - No title (VINXIS) [Lust's Insane]"
  star=5.62
  max=403
  mode="o"
  accuracy=98.26
  combo=224
  rank="a"
  performance=164
/>

<Score
  bid=1620144
  sid=757146
  preview="Tanaka Hirokazu - C-TYPE (Arf) [Bonsai's BasS-TYPE]"
  star=5.46
  max=162
  mode="o"
  accuracy=93.41
  combo=162
  rank="s"
  performance=163
/>

<Score
  bid=733678
  sid=331150
  preview="Halozy - Genryuu Kaiko (pkk) [Death Melody]"
  star=5.08
  max=1618
  mode="o"
  accuracy=98.02
  combo=1617
  alias="源流懐古"
  rank="s"
  performance=155
/>

<Score
  bid=923244
  sid=427688
  preview="Hana - Sakura to Kotori (Giralda) [Laurier's Insane]"
  star=5.57
  max=1812
  mode="o"
  accuracy=96.95
  combo=970
  alias="さくらとことり"
  rank="a"
  performance=145
/>

<Score
  bid=2250747
  sid=1073074
  preview="Turbo - PADORU / PADORU (Sotarks) [Fatfan's Extreme]"
  star=5.88
  max=194
  mode="o"
  accuracy=85.30
  combo=161
  rank="c"
  performance=140
/>

<Score
  bid=1680593
  sid=799418
  preview="Chata - Boku no Tonari de Koi o Shite! (Dored) [Rio's Insane]"
  star=5.02
  max=443
  mode="o"
  accuracy=99.54
  combo=248
  alias="僕のとなりで恋をして！"
  rank="s"
  performance=139
/>

<Score
  bid=114446
  sid=35219
  preview="Tsubaki - Kyun Kyun Tamaran Inaba tan! (Aenna) [Inaba!]"
  star=4.99
  max=915
  mode="o"
  accuracy=99.03
  combo=915
  rank="s"
  performance=136
/>

<Score
  bid=722607
  sid=323773
  preview="Ayumi. - Hanagoyomi short version (Lavender) [Kencho's Insane]"
  star=5.04
  max=530
  mode="o"
  accuracy=97.22
  combo=529
  alias="華暦 short version"
  rank="s"
  performance=136
/>

<Score
  bid=221950
  sid=79116
  preview="Sagara Kokoro - Hoshizora no Ima (Star Stream) [S.S]"
  star=5.40
  max=535
  mode="o"
  accuracy=97.82
  combo=390
  alias="星空のいま"
  rank="a"
  performance=135
/>

<Score
  bid=939896
  sid=436344
  preview="Chiyoko - Come Home! Princess (VINXIS) [hvick225's Insane]"
  star=5.02
  max=431
  mode="o"
  accuracy=96.94
  combo=431
  rank="s"
  performance=135
/>

（悄悄话部分）非常的舍不得新人群的各位萌新（壁灯）们。

其实不喜欢水进阶群，因为感觉大环境已经不适合我们这种类型的玩家融入（bushi）。`,H7=Object.freeze(Object.defineProperty({__proto__:null,default:L7},Symbol.toStringTag,{value:"Module"})),F7=`---
date: 2024-12-31
---

# wdz 王大志的出群遗言

<Player 
  id=35551133
  name="wdz"
  country=570
  global=31882
  from="CN"
  accuracy=96.26
  level=100
  progress=32
  performance=7361
/>

![](/images/lastwords/35551133-1.jpg)

10.24日偶然（并非偶然）进入osu!新人群 于2025年1月1日（成为本群第一个2025年出群的）刷到3000pp出群了！

感悟很多，首先要感谢父母，感谢老师，感谢同学，感谢推图的群友，感谢-inui sana-指导（这个是真的）

从0基础现在也变得对音游有点认知了，虽然还是读图烂，左手烂，连不上这样。
哎，很舍不得新人群，认识很多朋友，也见证了一个又一个飞升的群友，和新人群的朋友也打了很多mp，虽然很舍不得，但是该来的终究会来的，很高兴能在这60天内遇到了大家，和大家在群里聊天、mp的日子真的很开心。非常感谢指导们的帮助（在新的一年被踢出群这种事情不要啊）

本人应该算是aim玩家，完全不熟悉茄汁串串，靠着fps基本功也算是勉强打到3000pp

了。之后的进步应该会很难，感觉自己的习惯很不好，不过多打应该也能解决问题，喜欢跳的人可以看看我的bp，都是低bpm的pp跳图（下附）

最后也希望群友早日3000pp也一起飞升到进阶群，也祝cnosu！人才辈出吧！
`,V7=Object.freeze(Object.defineProperty({__proto__:null,default:F7},Symbol.toStringTag,{value:"Module"})),K7=`---
date: 2024-12-30
type: simple
---

# InSnh-Gd 的出群遗言

<Player 
  id=35672191
  name="InSnh-Gd"
  country=1983
  global=108627
  from="CN"
  accuracy=97.06
  level=100
  progress=24
  performance=5053
/>

长综玩家最终还是走上刷pp的路出群了

最喜欢 cold fish 了（`,z7=Object.freeze(Object.defineProperty({__proto__:null,default:K7},Symbol.toStringTag,{value:"Module"})),j7=`---
date: 2024-06-25
type: simple
---

# Mintyowo 的出群遗言

<Player 
  id=35677457
  name="HR1"
  country=906
  global=25964
  from="JP"
  accuracy=97.39
  level=101
  progress=7
  performance=7732
/>

遗言：（2024.6.25）今天是出群的日子里啦，在osu新人群的日子很开心，大家加油，我们进阶群再见o/`,Y7=Object.freeze(Object.defineProperty({__proto__:null,default:j7},Symbol.toStringTag,{value:"Module"})),U7=`---
date: 2024-11-07
type: recommend
---

# Gumiaora 的出群遗言

<Player 
  id=35683344
  name="Gumiaora"
  country=2272
  global=55752
  from="JP"
  accuracy=96.41
  level=60
  progress=76
  performance=4168
/>

原计划还是打算在2500好好沉淀下的

突如其来的算法改动

达到斩杀线的

nanoic

不得已消耗潜力飞升

终于在大清理之前刷上3000pp

最后

能和 nanoic 一起出群真的太好了

于：2024/11/7 00：40 达成3000pp

## 奇怪的话

因为实在是不知道该怎么写

遂“借鉴下”nanoic的遗言

感谢提供的思路

## 入坑契机

2024/04/02 入坑（居然还是我生日的前一天！）

在喵赛克瓶颈时，无意间翻评论区看到了osu，好奇之下就入坑了

开始很自信，想着凭借着基础打个3(4k)应该还是很简单的,随即发现1都够呛，随即转战stb

一番摸爬滚打后，一路从纯鼠->纯板->键鼠->板子么玩（没人带真是太难受了）

终于断断续续打到800pp后，在一个契机下加入了ATRI的小群，在群里大佬的指导下，才算是真正了解了这个游戏，同时也是接触到了pp图，体验到了pp飞升的快感，但好景不长，到1200就陷入了瓶颈。

还有跟着瓶颈到来的两个月长的暑假（在家里没办法打osu，痛苦）

2024/09/10 返校

也不知道是不是暑假看了不少手元视频的缘故，困扰了好久的dt图终于突破了，连带着padoru也读懂了，沉寂已久的pp也是开始慢慢稳定增长

2024/10/11 入osu新人群

其实还挺意外的，入群契机，还是在B站刷到了出群纪念才知道的，想着这边人多热闹点（可以窃更多图了）

随后在管理的建议下调整了映射，也换了O3c，一下子跳图突飞猛进（真不知道之前全板672的日子是怎么过的

之后还是第一次体验mp，群友都好厉害，那会感觉自己的pp严重虚高了

但也是随着mp认识了好多群友（其实更多是偷图认识的，群友bp质量好高）

最后也终于是在nanoic每天的  下圆满突破3000pp了（好有压力！不要视奸我）

碎碎念的自传，没过脑子写的，大概第二天看会很羞耻吧，但等不到第二天再改了（要给杀掉了）

## 给新人的建议

我给建议？真的假的）

## 快速度过瓶颈期的~~小妙招~~

（不确定适用性，仅在我自己身上尝试过）

- 找1-2张目前无法拿下的长综图，每天打1-2遍，不考虑combo，只考虑acc，学习读图（后面有铺面推荐）

- 调整映射，大调小，小调大（微调）

- 去和群友mp（来点Lazer的mp吧）

- 休息1-2天再打osu！

- 多打目前水平段的长综

## 关于萌新如何快速了解这个游戏各种缩写是什么意思

请看“新人群出群遗言”中的《[AlphaRaWaY出群遗言（会有人看吗）](./34346018.md).pdf》

## 认识的群友们！（suki!!!）

老灯们：

- 等了我8-15天另一个此方：[nanoic](https://osu.ppy.sh/users/32039184) 喜欢幸运星的都是好人~

- 超级无敌dt/nc高手：[tonygao116](https://osu.ppy.sh/users/34747229) 喜欢打dt/nc图的可以查他bp，超高质量的！

- 长综高手！团子！：[Uzuki Tuanzi](https://osu.ppy.sh/users/35595885)团子~可爱捏~

印象深刻的小灯：

- SOMAW：[SOMAW](https://osu.ppy.sh/users/33210849) 可爱......但是别摆烂了......可爱...嘿嘿~

- 超级无敌越级大王！：LINCUSO4 哥，求你别越了，我害怕

时间有限，好多群友都没能写上去

## 精彩的铺面推荐！！！高质量pp图和练习图

### 以高速跳图为主的pp图

<Beatmap
  bid=545933
  sid=235551
  preview="Rammstein - Los (Sieg) [Hard]"
  star=3.75
  max=519
/>

可选DT/NC：单纯简单高速跳图

<Beatmap
  bid=1067123
  sid=471261
  preview="ELISA - Dear My Friend -Mada Minu Mirai e- (TV size) (Rizen) [Insane]"
  star=4.04
  max=361
  alias="Dear My Friendーまだ見ぬ未来へー (TV size)"
/>

可选DT/NC：稍高难度的高速跳图，但收益很高

<Beatmap
  bid=2431320
  sid=1049899
  preview="Krewella - Say Goodbye (Nightcore & Cut Ver.) (A r M i N) [browiec's Expert]"
  star=5.13
  max=374
/>

大跳图，优点是其他难度相近，会打一个等于会好多个

<Beatmap
  bid=3720482
  sid=1813523
  preview="Miki Sayaka (CV: Kitamura Eri), Sakura Kyoko (CV: Nonaka Ai) - and I'm home (TV Size) (crewfantasy) [Emotions]"
  star=3.61
  max=281
/>

可选DT/NC：我的dt启蒙之一，小小推荐一首，难点：结尾高速爆发

<Beatmap
  bid=1006382
  sid=470741
  preview="Mariya Nishiuchi - Don't let me down (Jonawaga) [Hard]"
  star=3.31
  max=329
/>

可选DT/NC：一首比较简单的dt，小灯可以试试~

<Beatmap
  bid=2742956
  sid=1324247
  preview="Parry Gripp - I Wanna Guinea Pig For Christmas (Sotarks) [A r M i N's Extra]"
  star=5.26
  max=307
/>

很好的跳图，中间段略难，但其他难度风格类似，会一个等于会很多

<Beatmap
  bid=1988753
  sid=952409
  preview="MIMI feat. Hatsune Miku - Ai no Sukima (Log Off Now) [Radiance]"
  star=5.31
  max=346
  alias="哀の隙間"
/>

很好的高速跳图（伟大无需多盐）

<Beatmap
  bid=490154
  sid=208112
  preview="Kitamura Eri & Nonaka Ai - and I'm home (kakifly) [Mirai]"
  star=3.42
  max=601
/>

可选DT/NC：相对简单的dt

<Beatmap
  bid=2348016
  sid=1123670
  preview="Aura Qualic feat. Hatsune Miku - Sweet Cat Dreaming (PaRaDogi) [Emotion]"
  star=3.42
  max=504
/>

可选DT/NC：很有难度的高速小跳加爆发的图

### 以长图中长串为主的练习图

<Beatmap
  bid=1811527
  sid=866472
  preview="Avenged Sevenfold - Save Me (Sersh4nt) [Nightmare]"
  star=6.92
  max=4312
/>

很好的串+耐力图

<Beatmap
  bid=651744
  sid=289074
  preview="supercell - Kimi no Shiranai Monogatari (monstrata) [Celestial]"
  star=5.31
  max=1700
  alias="君の知らない物語"
/>

个人很喜欢的一首曲且难度不高

<Beatmap
  bid=3018109
  sid=1470072
  preview="Mage - The Words I Never Said (Strategas) [Regret]"
  star=5.91
  max=2376
/>

超绝耐力长串

<Beatmap
  bid=2042534
  sid=975932
  preview="ShinRa-Bansho - Muishiki Requiem (Rumia-) [Lunatic]"
  star=5.53
  max=1342
  alias="無意識レクイエム"
/>

个人特别喜欢的一张长综

<Beatmap
  bid=1803553
  sid=850717
  preview="Kano - Daisy Blue (Rieri) [Insane]"
  star=4.63
  max=1176
/>

难度简单的长综，小心尾杀

<Beatmap
  bid=195165
  sid=66927
  preview="ONE OK ROCK - Kanzen Kankaku Dreamer (Kuria) [Insane]"
  star=5.07
  max=1452
  alias="完全感覚Dreamer"
/>

节奏很双的难度稍高有尾杀的长综

## 结尾

附 [幸运星collab](https://docs.qq.com/sheet/DZnNIUmRUVVJCbkdp)：

球球你了，和我组collab吧

内置留言板（预计9.20完工）`,G7=Object.freeze(Object.defineProperty({__proto__:null,default:U7},Symbol.toStringTag,{value:"Module"})),W7=`---
date: 2026-10-05
type: recommend
---

# LmX-Gamer 的出群遗言

以 2026.10.5 当日出群时为准

按照惯例传统贴数值

<Player
id=35717411
name="LmX-Gamer"
country=4712
global=297059
from="CN"
accuracy=98.74
level=98
progress=27
performance=2997
/>

## 硬件

- i7 10700F
- DDR4 8G x4 2933MHz
- RTX3070
- DELL 27寸2K165Hz

## 外设

- VXE R1 PRO MAX 1K无线
- SKN 青龙惊碳 8K有线
- 漫步者G1S雷霆 无线

其实在出群前一天也不晓得怎么写这个，一直处于新建文档状态，自2024年4月注册之前，我在是别的游戏的公会里的好友mrx97(Osu uid)在直播的时玩的游戏，因为是音游所以点歌给他去下载谱面玩，但因为不是每首歌都能找到，以至于我必须要注册才能使用搜索功能，入坑是因为本身有一些音游基础，玩过的音游有[劲舞团的激舞,领舞模式]，[音灵INVAXION]，[音乐战机]，移动端[节奏大师]，[Cytus]，[Deemo]，[O2JamU]，[乐动时代]；而需要使用鼠标和键盘一起操作的音游，Osu!还是头一个，刚上手的时候其实不算难，**但我玩Osu!的初衷是想把电脑里20GB+的歌能在官网谱面里找到的都游玩**，刚开始玩的时候也没有皮肤这种概念，一直在用std原皮玩，在直播玩的时候也接受过几位大佬的帮助，有妹弓[AeCw]，援桌骑士[ciallo]，凑好好[Misaki10032]几位前辈等，也给我点了一些谱面让我玩，我印象最深的就是凑好好前辈看到我游玩了以后增加了PP兴奋的不行，因为我自己对PP真没什么概念就想着随缘玩就好，而玩的过程中自己也无意中染上了一个不是太好的习惯[Hidden]（是自己染上的和几位大佬无关！），叫做HD的mod，这是一个在游玩的时候取消缩圈并提前隐藏物件的一个mod，这让我对银S和SS有了渴望，在此之后导致后来在游玩任何谱面的时候HD都作为默认mod一直陪伴，还是在原皮的情况下，加上游玩的多数谱都是自己听了很多遍的歌导致在对节拍的掌控方面有自己的一套音感，我想说的是HD是好的！至少比HR或DT会健康很多，因为这俩mod对自身的反应能力要高非常多也更难入门！在直播中也有路人问为什么不用皮肤，我说我不会，就也一直没想着换，但在陆续玩了两年，我的PP来到了1800+，因为我觉得到了瓶颈期，让我萌生了加入osu新人群的想法，加群后我发现群文件里有很多好看实用的皮肤，在用了百款皮肤之后最终我选择[moonshine2.1]，这让我在HD时更加放肆，以至到后来在不使用HD的时候看着缩圈物件头会晕，彻底依赖HD无法戒掉！我没有忘掉刚加群的时候我说过的话，我说我不想加PP，因为这意味着之后会出群，而我水平那么差我不想出，但9月后我的PP来到了2900+，这让我恐惧被踢出群就一直压着PP，某天早上起来想玩两把发现手感忽然一下差的离谱于是新人群的群赛报名也没参与，总之就是非常抱歉让大伙失望了~最近也摆烂了一直没练 一直压着不出群 也只是想看看大伙比赛之后的分数情况。

最后想说的是在新人群里的时光很快乐！虽然才进群才半年，能认识到很多有趣群友，看到各种奇奇怪怪的谱面，群管理也会根据你的实际水平给与一些谱面让你进步~还可以在别人发出!p以后趁热把神秘数字抄进搜索框并下载游玩，在群友都有时间的前提下会开mp房多人一起玩，相互当房主选歌分享给大家~

在这里感谢uid不分先后的mp推图达人~让我收获了很多好听的歌

- Dawn1220
- halukaze
- lain0000
- sword1921
- MO_ming
- jiaofeng
- imArisu
- halilu
- zhidao
- lvwq
- fiowboat

等~

最后的最后就是一些好听的歌了 希望你们能从中寻到好听的适合自己的歌~

不忘初心 以听歌 而非进阶 **推歌包含坟图**

<Beatmap
sid=504995
preview="KOTOKO - Koi Kou Enishi (Momoka)"
star=4.50
difficulties=[1.66,2.17,3.25,4.50]
alias="以恋结缘"
/>

Ciallo~(·ω<)~☆

<Beatmap
sid=22428
preview="KOTOKO - Re-Sublimity (TV Size) (NatsumeRin)"
star=3.96
difficulties=[1.63,2.43,3.67,3.96]
/>

主推次难 因为歌去看番

<Beatmap
sid=2508033
preview="Colorful Sounds Port feat. Sennzai - Jewelry Beans (MaestroSplinter)"
star=6.25
difficulties=[2.32,3.13,4.34,4.77,5.76,6.21,6.25]
/>

珍珠豆豆 我的年度最爱

<Beatmap
sid=2205471
preview="ASU - Soragoto (Nadeshiko)"
star=4.40
difficulties=[2.07,3.08,4.40]
alias="谎言"
/>

明透的虚言 群友mp推歌 无敌好听

<Beatmap
sid=865994
preview="Momijitsuki Nagiha - Albion (Vogelsen)"
star=6.53
difficulties=[3.05,5.41,6.53]
/>

坟

<Beatmap
sid=776620
preview="Roselia - Neo-Aspect (Underdogs)"
star=5.97
difficulties=[1.68,2.49,3.49,4.86,5.58,5.97,3.06,4.31,5.61]
/>

Roselia 赛高

<Beatmap
sid=1040095
preview="Roselia - LOUDER (SkyFlame)"
star=7.16
difficulties=[2.79,3.90,5.15,6.16,6.76,7.16]
/>

Roselia 赛高

<Beatmap
sid=690206
preview="Roselia - Determination Symphony (Underdogs)"
star=5.82
difficulties=[1.82,2.42,3.68,4.71,5.45,5.82]
/>

Roselia 赛高

<Beatmap
sid=206284
preview="FELT - In my room (Aka)"
star=4.08
difficulties=[1.39,2.11,3.10,4.08]
/>

每位玩家都应该去玩的图~

<Beatmap
sid=768918
preview="acane_madder - Teien ni te (arcfox)"
star=3.89
difficulties=[3.89]
alias="在庭园中。"
/>

练习用 同上

<Beatmap
sid=1784637
preview="CYPARISS - EMPTY DREAMS (_kabUki)"
star=5.37
difficulties=[2.01,3.73,4.06,4.55,4.91,5.37]
/>

经典 EMP 练习用 不开HD我按不来 虽坟但火

<Beatmap
sid=62957
preview="Melone (Ryoko Shintani) - Kira Kira Serenade (__Ag)"
star=4.55
difficulties=[1.14,1.81,3.22,4.55]
alias="闪耀小夜曲"
/>

这歌里有毒！无法自拔！

<Beatmap
sid=2453699
preview="Tenko Shibuki - Anta ni Akkanbe (GimBab)"
star=5.77
difficulties=[3.22,4.07,4.64,5.77]
alias="对你做鬼脸"
/>

韩国人翻唱 我觉得比原版好听

<Beatmap
sid=1214021
preview="Camellia - Shun no Seafood o Ikashita Curry Fuumi Paella ~808 Chef no Twerk to Trap Jitate~ (Silverboxer)"
star=7.49
difficulties=[4.01,4.64,6.01,6.61,7.49]
alias="时令海鲜咖喱风味西班牙海鲜饭 ～808大厨特制 Twerk 与 Trap 调味～"
/>

人称 深海大章鱼 异域风情 燃爆

<Beatmap
sid=2562540
preview="Billie Eilish - WILDFLOWER (Trynna)"
star=4.69
difficulties=[4.69]
/>

变成女同写歌会更艺术吗 (网易云摘要)

<Beatmap
sid=2553931
preview="Farewell225 - Window View feat. Kasane Teto SV (Andrea)"
star=5.88
difficulties=[1.92,2.49,3.48,4.90,5.51,5.88]
alias="车窗"
/>

重音 的爱

<Beatmap
sid=373373
preview="toby fox - Hopes and Dreams (pkk)"
star=5.19
difficulties=[1.69,2.15,2.96,4.15,5.19]
alias="希望与梦想"
/>

传说之下

<Beatmap
sid=387700
preview="toby fox - MEGALOVANIA (Kyshiro)"
star=6.06
difficulties=[1.74,2.29,3.10,3.97,4.80,5.46,6.06]
alias="狂妄之人"
/>

传说之下 骷髅哥

<Beatmap
sid=1225001
preview="ARForest - Infection (Niva)"
star=5.01
difficulties=[1.92,2.33,3.49,5.01]
/>

ARForest 超绝低音 主难请勿乱尝试

<Beatmap
sid=146947
preview="Rabpit - Saika (Caffe_[Latte])"
star=4.11
difficulties=[1.47,1.95,2.99,4.11]
alias="彩华"
/>

<Beatmap
sid=561640
preview="Hiromi Sato - Jiyuu no Hane (Xexxar)"
star=5.77
difficulties=[1.88,2.58,3.52,4.55,5.24,5.77]
alias="自由的翅膀"
/>

<Beatmap
sid=437990
preview="Duca - be confidence (Xexxar)"
star=3.86
difficulties=[1.57,2.50,3.16,3.86]
/>

好听的 从前辈歌单里找到的

<Beatmap
sid=599457
preview="Yasuda Rei - Best of my Love (Komore)"
star=4.13
difficulties=[4.13]
/>

因为歌去看番2 玩osu最早打的歌也最想fc

<Beatmap
sid=556945
preview="Flower - Akikaze no Answer (Zer0-)"
star=4.57
difficulties=[1.28,1.92,3.02,3.64,3.91,4.57,3.75]
alias="秋风的回答"
/>

花团好歌

<Beatmap
sid=476730
preview="Flower - Taiyou to Himawari (z1085684963)"
star=4.94
difficulties=[1.78,2.57,3.72,4.94]
alias="太阳与向日葵"
/>

花团好歌

<Beatmap
sid=356863
preview="Sawano Hiroyuki - MOBILE SUIT (W-REC MIX) (Lily Bread)"
star=4.47
difficulties=[1.99,3.29,4.47]
/>

FC 成为新人类吧！

<Beatmap
sid=1531033
preview="AliA - nostalgia (Nelliel)"
star=6.20
difficulties=[2.51,3.70,4.69,5.94,6.20]
alias="怀旧"
/>

<Beatmap
sid=636393
preview="Camellia - Towards The Horizon (Pho)"
star=6.83
difficulties=[1.57,2.33,3.32,4.48,5.82,6.24,6.83]
/>

<Beatmap
sid=320118
preview="Reol - No title (VINXIS)"
star=6.61
difficulties=[1.13,1.97,2.37,3.53,4.22,4.71,5.10,5.41,5.53,5.56,5.62,5.86,5.94,6.61]
/>

下载次数?游玩次数?最多的歌

<Beatmap
sid=170604
preview="Tokisawa Nao - BRYNHILDR IN THE DARKNESS -Ver. EJECTED- (gxytcgxytc)"
star=5.25
difficulties=[1.46,2.18,3.49,4.32,5.00,5.25]
/>

极黑 自古烂番出神曲

<Beatmap
sid=428735
preview="SPYAIR - My World ( TV Version ) (HabiHolic)"
star=3.95
difficulties=[1.44,1.81,2.97,3.82,3.95]
/>

高达曲

<Beatmap
sid=717752
preview="Suzuki Minori - FEELING AROUND (TV Size) (DreaM117er)"
star=4.43
difficulties=[1.86,3.35,4.43]
/>

爱吃拉面的番

<Beatmap
sid=1440767
preview="DM DOKURO - SAVE (Encore) (browiec)"
star=6.17
difficulties=[2.34,3.38,4.11,4.69,5.02,5.63,6.17]
/>

传说之下

<Beatmap
sid=2480214
preview="Nemo Suzumi - Ao no Onkai (EIKIMUA)"
star=5.98
difficulties=[2.42,3.53,4.70,5.98]
alias="苍之音阶"
/>

mimi

<Beatmap
sid=2328218
preview="MIMI - Science (feat. Kasane Teto SV) (Rino Inosaki)"
star=5.82
difficulties=[2.49,3.82,4.73,5.82]
alias="科学"
/>

mimi

<Beatmap
sid=2528346
preview="MIMI - Marshmary (Cut Ver.) (dal4ra)"
star=5.28
difficulties=[2.32,3.40,4.41,4.86,5.28]
alias="棉花糖"
/>

mimi

<Beatmap
sid=1772420
preview="Yui Makino - Fuwafuwa (Yohanes)"
star=5.07
difficulties=[5.07]
alias="轻飘飘♪"
/>

好听的 从前辈歌单里找到的 希望某天能fc

<Beatmap
sid=818349
preview="Tanizawa Tomofumi - Sawakaze (TV Size) (Nyantiaz)"
star=3.82
difficulties=[1.88,2.82,3.82]
alias="爽风"
/>

简单好听的PP小曲

<Beatmap
sid=594154
preview="J.Fla - Shape Of You (cRyo[iceeicee])"
star=5.15
difficulties=[2.68,3.64,4.42,5.15]
/>

果然还是J.Fla唱的好听

<Beatmap
sid=325158
preview="AKINO from bless4 & CHiCO with HoneyWorks - MIIRO vs. Ai no Scenario (monstrata)"
star=5.90
difficulties=[0.38,0.78,1.23,1.84,2.03,2.99,3.22,3.73,4.19,4.60,4.97,5.35,5.40,5.44,5.53,5.75,5.90]
alias="海色 vs. 爱的剧本"
/>

<Beatmap
sid=158932
preview="sweet ARMS - Trust in you (TV Size) (wcx19911123)"
star=5.41
difficulties=[1.79,2.38,3.71,5.41]
/>

<Beatmap
sid=2071269
preview="Kotoha - Ima wa Ii nda yo. (AraZh)"
star=4.34
difficulties=[2.20,3.28,4.34]
alias="现在这样就好。"
/>

<Beatmap
sid=307736
preview="FELT - white (Pho)"
star=4.68
difficulties=[1.74,2.30,3.34,4.68]
/>

FELT 好歌

<Beatmap
sid=585723
preview="FELT - Flower Flag (Bearizm)"
star=4.98
difficulties=[2.20,2.76,3.71,4.98]
/>

FELT 好歌

<Beatmap
sid=118459
preview="Hai Nan - Ai La La (moonlightleaf)"
star=3.91
difficulties=[1.76,3.01,3.76,3.91]
alias="爱啦啦"
/>

PP 小曲爱啦啦

<Beatmap
sid=2409248
preview="Maeshima Ami - Wish for you (TV Size) (Umi Sonoda)"
star=5.55
difficulties=[1.84,2.23,3.49,4.46,5.55]
/>

<Beatmap
sid=384535
preview="Feint - Stray (FCL)"
star=5.09
difficulties=[1.74,2.07,3.17,3.78,4.24,4.94,5.09]
/>

5 连

<Beatmap
sid=592722
preview="JungKook - We Don't Talk Anymore (shanhudian)"
star=5.41
difficulties=[1.55,2.05,2.92,4.40,5.06,5.41]
/>

坟 但非常好听 我一直有个疑问 封面是释小龙？

<Beatmap
sid=822039
preview="sakuzyo - Kronos (Syaro Kirima)"
star=6.37
difficulties=[1.55,2.26,4.02,5.16,6.08,6.37]
/>

Kronos 音游神曲 打串的 但坟

<Beatmap
sid=1235121
preview="Fujikawa Chiai - Gomi no Hi (a_Blue)"
star=7.53
difficulties=[2.39,3.63,5.40,6.72,7.53]
alias="垃圾日"
/>

因为盾勇 爱上 藤川千爱 鼓点带劲

<Beatmap
sid=687511
preview="Aoki Chihiro - Kodou (09kami)"
star=6.18
difficulties=[1.78,2.83,3.21,4.14,5.99,6.01,6.12,6.18]
alias="鼓动"
/>

好浓的樱花味

<Beatmap
sid=727908
preview="Knife Party & Tom Morello - Battle Sirens (RIOT Remix) (Marmowka)"
star=5.88
difficulties=[1.53,2.03,3.31,3.72,4.66,5.88]
/>

Remix！

<Beatmap
sid=310702
preview="Mili - Nine Point Eight (Inversal)"
star=4.89
difficulties=[1.67,2.55,3.49,3.93,4.30,4.89]
/>

Deemo

<Beatmap
sid=1977030
preview="Marie - Clover Heart's -New days recording- (Game Ver.) (tomatas95)"
star=4.50
difficulties=[1.71,2.12,3.11,3.72,4.07,4.34,4.50]
/>

<Beatmap
sid=1276389
preview="Ice - Entrance (Icekalt)"
star=7.41
difficulties=[2.36,3.59,4.52,5.60,6.02,7.03,7.41]
/>

魔王曲

<Beatmap
sid=958066
preview="Fujikawa Chiai - Atashi ga Tonari ni Iru Uchi ni (TV Size) (KwAIMSuckASFuk)"
star=4.36
difficulties=[2.02,2.94,4.36]
alias="趁我还陪在你身边时"
/>

因为盾勇 爱上 藤川千爱

<Beatmap
sid=14298
preview="Drop no Koya - Rouzensatorin (no-7)"
star=4.47
difficulties=[1.46,2.27,4.47]
/>

有点颠的歌 有串

<Beatmap
sid=28705
preview="Yousei Teikoku - Kokou no Sousei (Saten-san)"
star=6.88
difficulties=[3.18,4.77,6.00,6.88,5.80,5.82]
alias="孤高的创世"
/>

同上

<Beatmap
sid=2282704
preview="Marina and the Diamonds - Bubblegum Bitch (Nightcore & Cut Ver.) (Parad0xa)"
star=5.82
difficulties=[2.32,3.60,4.72,4.79,5.08,5.17,5.18,5.42,5.60,5.62,5.70,5.82]
/>

我称这首歌为 帮波必去~ 有中跳 PP小曲

<Beatmap
sid=2009608
preview="Azuna Riko - Kimi ni Furete (TV Size) (KeyWee)"
star=4.60
difficulties=[2.29,2.84,3.53,4.20,4.60]
alias="触碰你"
/>

百合小曲 好听！

<Beatmap
sid=2209732
preview="Sabrina Carpenter - Espresso (nishihara)"
star=4.73
difficulties=[1.48,1.50,2.24,3.24,4.13,4.73]
/>

浓缩咖啡 也是我V的铃声 有调调 好听！

<Beatmap
sid=685946
preview="Yuki Yumeno - First Love (timemon)"
star=3.68
difficulties=[1.69,2.88,3.68]
/>

温柔女声

<Beatmap
sid=43466
preview="DJ Genericname - Dear You (Rue)"
star=4.83
difficulties=[1.90,2.08,3.66,4.83]
/>

应该都听过

<Beatmap
sid=2160849
preview="ave;new feat. Sakura Saori - snow of love -inlay mix- (milr_)"
star=3.41
difficulties=[1.70,2.47,3.41]
/>

低 AR 前辈推的歌 好听

<Beatmap
sid=2414617
preview="LONOWN, riserayss - starly (slowed down & cut ver.) (flouah)"
star=5.08
difficulties=[2.25,3.29,3.97,4.47,5.08]
/>

是中跳 PP 小曲

<Beatmap
sid=354537
preview="Feint - Vagrant (feat. Veela) (Aia)"
star=5.29
difficulties=[1.72,2.35,3.77,5.00,5.29]
/>

Feint 懂得都懂 嗨起来

<Beatmap
sid=283009
preview="Julie Sigtuna (CV:Yamamoto Nozomi) x Lilith Bristol (CV:Yamazaki Haruka) - Apple Tea no Aji (Andrea)"
star=3.64
difficulties=[1.93,2.31,2.91,3.64]
alias="苹果茶之味"
/>

可爱茱莉！山本希望！

<Beatmap
sid=230989
preview="Knife Party - Give It Up (Shadren)"
star=4.64
difficulties=[1.70,2.23,3.26,4.64]
/>

嗨起来

<Beatmap
sid=2510616
preview="TIA feat. Le Thien Hieu - Ai Dua Em Ve (Cukak Remix) (Agnes Tachyon Low Cortisol Edit) (Cut Ver.) (Bloxi)"
star=3.68
difficulties=[1.97,2.61,3.68]
alias="皮质醇的小曲"
/>

洗脑 back back home

<Beatmap
sid=1083484
preview="DiverDiva - SUPER NOVA (Noctiam)"
star=4.41
difficulties=[3.20,4.41]
/>

虚拟歌姬 DiverDiva 坟

<Beatmap
sid=2495470
preview="DiverDiva - Shadow Effect (JauiPlaY)"
star=6.08
difficulties=[2.54,3.63,4.68,6.08]
/>

虚拟歌姬 DiverDiva

<Beatmap
sid=726765
preview="XX:me - Torikago (TV Size) (-Eriri-)"
star=5.30
difficulties=[1.97,3.42,4.22,5.30]
alias="鸟笼"
/>

国家队xx

<Beatmap
sid=310499
preview="Reol - Asymmetry (Skystar)"
star=6.62
difficulties=[2.18,3.29,4.03,5.50,5.83,6.27,6.59,6.62,5.55]
alias="不对称"
/>

御~ REOL

<Beatmap
sid=706150
preview="REOL - Endless Line (DeRandom Otaku)"
star=5.89
difficulties=[1.99,2.54,3.73,4.25,4.94,5.54,5.89]
alias="无穷线"
/>

御~ REOL

<Beatmap
sid=989745
preview="REOL - VIORA (Sparhten)"
star=5.77
difficulties=[3.35,4.33,5.02,5.20,5.77]
/>

御~ REOL

<Beatmap
sid=476697
preview="REOL - ChiruChiru (Pho)"
star=4.54
difficulties=[1.76,2.42,3.38,4.54]
alias="散落"
/>

御~ REOL

<Beatmap
sid=867074
preview="Reol - Heimenkyou (Frey)"
star=5.97
difficulties=[2.21,3.59,4.82,5.97]
alias="平面镜"
/>

御~ REOL

<Beatmap
sid=534116
preview="REOL - 404 not found (SnowNiNo_)"
star=5.62
difficulties=[1.82,3.02,3.94,4.89,5.62]
/>

御~ REOL

<Beatmap
sid=49199
preview="Fujita Maiko - Nee (TV Size) (GiNa)"
star=3.49
difficulties=[1.32,1.77,2.47,3.49]
/>

<Beatmap
sid=2065865
preview="Ave Mujica - Ave Mujica (Plus4j)"
star=7.28
difficulties=[4.15,5.31,6.06,6.89,7.28]
/>

节奏几乎在鼓 难度很大 ave mujica

<Beatmap
sid=2287975
preview="Ave Mujica - Black Birthday (Plus4j)"
star=6.64
difficulties=[4.07,5.21,6.09,6.64]
alias="黑色生日"
/>

同上

<Beatmap
sid=366514
preview="Valentin - A Little Story (music84668645)"
star=4.70
difficulties=[2.49,3.36,4.51,4.70]
/>

你一定听过的钢琴曲 坟

<Beatmap
sid=2541060
preview="*namirin - Hitokoto no Kyori (Cut Ver.) (HakuYT)"
star=5.41
difficulties=[2.34,3.36,4.58,5.07,5.41]
alias="一句话的距离"
/>

好听的PP小曲 封面喜欢

<Beatmap
sid=2398736
preview="Ushio Reira - Hare no Hi ni (TV Size) (Left)"
star=4.49
difficulties=[1.92,3.02,4.49]
alias="在晴朗之日"
/>

甜甜

<Beatmap
sid=1068
preview="KOKIA - Tatta Hitotsu no Omoi (James)"
star=2.76
difficulties=[2.15,2.76]
/>

虽然星级不高但 KOKIA

<Beatmap
sid=1770198
preview="Feint & R7CKY - Lost & Found (feat. Skyelle) (Cut Ver.) (Tachibana_)"
star=5.27
difficulties=[2.23,3.72,4.45,5.27]
/>

不要禁用StoryBoard！

<Beatmap
sid=193996
preview="BACK-ON - STRIKE BACK (HabiHolic)"
star=4.76
difficulties=[1.90,2.43,3.14,3.68,4.76]
/>

群友推歌 妖尾

<Beatmap
sid=50006
preview="Perfume - Communication (Short Ver.) (IchiGUN)"
star=4.07
difficulties=[1.62,2.06,3.56,4.07,2.86]
/>

<Beatmap
sid=1319101
preview="MIN - Tren Tinh Ban Duoi Tinh Yeu (miyatohanasaki)"
star=4.12
difficulties=[3.03,4.12]
alias="友人之上，恋人未满"
/>

（越南小曲 比起歌 我更喜欢的是MV 坟

<Beatmap
sid=151720
preview="ginkiha - EOS (alacat)"
star=5.62
difficulties=[1.97,2.24,3.97,5.01,5.62]
/>

EOS 经典难谱？

<Beatmap
sid=2496040
preview="THE BINARY - Orbital (fnayR)"
star=4.06
difficulties=[1.86,2.81,3.81,4.06]
/>

<Beatmap
sid=2470970
preview="Suzuki Konomi - DAYS of DASH (TV Size) (maikayuii)"
star=4.86
difficulties=[1.65,2.15,3.21,4.53,4.86]
/>

<Beatmap
sid=1126845
preview="Hatsuki Yura - Salamandra no Odoriko (Irohas)"
star=5.09
difficulties=[1.48,2.15,3.24,4.55,5.09]
alias="萨拉曼德拉的舞女"
/>

哥特小曲 味道足足

（编者注：这是吉普赛风或日系异域幻想风格）

<Beatmap
sid=43446
preview="Hatsuki Yura - HAMELN (karenying)"
star=4.05
difficulties=[1.91,2.16,3.58,4.05]
/>

哥特小曲 味道足足

<Beatmap
sid=1564593
preview="Burak Yeter - Tuesday feat. Danelle Sandoval (piroshki)"
star=4.75
difficulties=[2.20,2.97,3.57,4.75]
/>

慢摇

<Beatmap
sid=174927
preview="V.K - mirror night (apl-)"
star=4.46
difficulties=[1.82,2.20,3.46,4.46]
/>

镜夜 Deemo神曲 VK克

<Beatmap
sid=2337848
preview="U-ske - High-School QUEEN!!! (feat. Suzushiro) (moesode)"
star=5.55
difficulties=[2.46,3.69,4.51,5.55]
/>

爱听萝莉音的有福了

<Beatmap
sid=1639207
preview="sana - babyhalo (Firika)"
star=5.15
difficulties=[2.60,3.47,4.64,5.15]
alias="宝贝光环"
/>

同上

<Beatmap
sid=643891
preview="qianban - Fragments (Rui1619)"
star=4.86
difficulties=[4.24,4.80,4.86]
/>

千坂！

<Beatmap
sid=497380
preview="himmel feat. YooSanHyakurei - Maple Wind (Crystal)"
star=3.77
difficulties=[1.58,2.68,3.25,3.77]
alias="远枫"
/>

再也不说害怕 就算你不在身边我也会吞下泪花

<Beatmap
sid=437541
preview="Taylor Swift - Style (F D Flourite)"
star=4.99
difficulties=[1.96,2.83,4.99]
/>

oh 我霉 坟

<Beatmap
sid=12252
preview="Kuraki Mai with Stefanie - Tonight, I Feel Close to You (S i R i R u)"
star=3.15
difficulties=[2.28,3.15]
/>

仓木麻衣 柯南经典曲目

<Beatmap
sid=2505466
preview="P4koo - Believe (feat. Tsuyuri Karin) (Noi Komazawa)"
star=5.44
difficulties=[1.76,2.44,3.32,4.74,5.44]
/>

<Beatmap
sid=1351876
preview="Maison book girl - snow irony_ (newton-)"
star=5.20
difficulties=[3.49,4.34,5.20]
/>

<Beatmap
sid=1294231
preview="Sun Yi Qi - Jiu Zui De Hu Die (DJ He Peng Version) (Cut Ver.) (Firika)"
star=5.31
difficulties=[1.99,2.75,3.68,3.85,4.62,5.09,5.31]
alias="酒醉的蝴蝶 (DJ 何鹏版)"
/>

广场舞大队曲目

<Beatmap
sid=1255411
preview="Wisp X - Somewhere I'd Rather Be (reiSevia)"
star=3.90
difficulties=[1.99,2.26,3.29,3.90]
/>

Wisp X

<Beatmap
sid=2253765
preview="Daoko - Allure of the Dark (Shurelia)"
star=5.33
difficulties=[3.28,4.49,5.33]
/>

2026.6月新人群同屏活动曲 在下不才拿了 MVP

<Beatmap
sid=1530096
preview="Helblinde - Grief & Malice (Cut Ver.) (Half)"
star=6.42
difficulties=[2.40,3.27,4.06,4.96,5.80,6.42]
/>

哎 马猴烧酒

<Beatmap
sid=879061
preview="Mitui Fumika - Sono Koe Kienai yo (Modem)"
star=3.65
difficulties=[1.51,1.81,3.07,3.65]
alias="那声音不会消逝"
/>

虽坟但好听

<Beatmap
sid=600702
preview="Hanasaka Yui(CV: M.A.O) - Harumachi Clover (Djulus)"
star=4.54
difficulties=[1.36,1.98,2.39,2.85,4.09,4.54]
alias="等待春天的三叶草"
/>

PP小曲 有跳

<Beatmap
sid=572897
preview="LiSA - Catch the Moment (Delis)"
star=5.65
difficulties=[1.99,2.45,3.77,4.71,5.65]
/>

刀剑神域

<Beatmap
sid=1828
preview="Bond - Explosive (kingcobra52)"
star=4.14
difficulties=[1.92,2.23,3.16,4.14]
/>

不知道你可听过 Bond古典辣妹

<Beatmap
sid=2549145
preview="Isekaijoucho - The Flower That Never Wilt (fnayR)"
star=4.63
difficulties=[3.64,4.63]
alias="永不枯萎的花"
/>

异世界情绪 好嗓音

<Beatmap
sid=2334579
preview="Isekaijoucho - Kurenazumu Yakusoku (TV Size) (Shpich)"
star=5.10
difficulties=[2.40,3.38,4.72,5.10]
alias="黄昏下的约定"
/>

同上

<Beatmap
sid=681410
preview="Street - Maritime Police (Mir)"
star=6.17
difficulties=[1.58,2.38,3.44,4.81,6.17]
/>

就为了封面 都值得下载

<Beatmap
sid=2541312
preview="voira - brainwave (Helfy0)"
star=4.62
difficulties=[2.32,3.54,4.62]
/>

同上

<Beatmap
sid=102071
preview="Yoomiii - Rhythm Of Love (Jemmmmy)"
star=4.43
difficulties=[1.70,2.79,4.43]
/>

慢摇

<Beatmap
sid=2439455
preview="Lemonade Factory - Akeboshi (Game Ver.) (tomatas95)"
star=5.34
difficulties=[2.56,3.48,3.94,4.11,4.18,4.26,4.40,4.44,4.61,5.34,1.52,2.07,2.84,3.42,4.01,4.73]
alias="启明星"
/>

有中跳 PP小曲 你会爱上某个难度的封面

<Beatmap
sid=2200062
preview="Katy Perry - Last Friday Night (T.G.I.F.) (Whippa Hardstyle Remix) (Tylerderp)"
star=5.54
difficulties=[2.40,3.68,4.43,5.54]
/>

有小中跳 Remix T.G.I.F 同上 封面

<Beatmap
sid=434611
preview="Sakamoto Maaya - Okaerinasai (tomatomerde Remix) (Gloria Guard)"
star=5.23
difficulties=[5.23]
alias="欢迎回家"
/>

虽6分钟长综还连点+串 但比原版好听

<Beatmap
sid=2532292
preview="Suzuki Konomi feat. Ashnikko - Recollect (TV Size) (TasseDeThe)"
star=5.78
difficulties=[1.38,1.89,3.38,4.47,4.93,5.78]
/>

这封面是RE0艾米莉亚吗

<Beatmap
sid=1539643
preview="Sawai Miku - Colorful. (Asterisk DnB Remix) (Cut Ver.) (Synaelle)"
star=5.28
difficulties=[2.47,3.45,4.60,5.01,5.28]
alias="色彩缤纷。"
/>

圣人惠 remix

<Beatmap
sid=2530233
preview="renforshort - made for you (nightcore & cut ver.) (RL34_)"
star=5.40
difficulties=[2.36,3.44,4.32,4.61,4.70,4.99,5.12,5.32,5.40]
/>

粉毛别沾 全是中大跳 T.T

<Beatmap
sid=2523810
preview="FLORE - SKELETON (NIGHTCORE & CUT VER.) (Smoke)"
star=5.36
difficulties=[2.32,3.42,4.29,4.53,4.75,4.86,5.07,5.21,5.36]
/>

<Beatmap
sid=2390209
preview="Porcelain Black - Pretty Little Psycho (Nightcore & Cut Ver.) (Mita)"
star=5.58
difficulties=[2.37,3.61,4.16,4.52,4.97,5.23,5.33,5.34,5.58]
/>

<Beatmap
sid=2496558
preview="Ava Max - So Am I (Nightcore & Cut Ver.) (melae)"
star=4.92
difficulties=[2.18,3.11,3.98,4.57,4.68,4.92]
/>

<Beatmap
sid=2463569
preview="Marina and the Diamonds - How to Be a Heartbreaker (Nightcore & Cut Ver.) (Mita)"
star=5.49
difficulties=[2.27,3.26,4.38,4.81,4.90,4.98,5.01,5.09,5.18,5.29,5.34,5.49]
/>

<Beatmap
sid=2553422
preview="Milky - Just The Way You Are (Nightcore & Cut Ver.) (Mita)"
star=4.59
difficulties=[2.06,3.42,4.36,4.59]
/>

<Beatmap
sid=2314394
preview="LUM!X feat. Pia Maria - Halo (Nightcore & Cut Ver.) (riot1133)"
star=4.98
difficulties=[2.17,3.77,4.44,4.88,4.98]
/>

虽不是粉毛但也都是中大跳 T.T

<Beatmap
sid=2484768
preview="The Veronicas - 4ever (cut ver.) (snyc)"
star=4.44
difficulties=[1.85,2.98,3.94,4.27,4.40,4.44]
/>

虽不是粉毛但也都是中大跳 T.T

<Beatmap
sid=584333
preview="Zedd, Grey - Adrenaline (Hollow Wings)"
star=7.55
difficulties=[2.09,5.65,5.95,6.30,7.55]
/>

很嗨但 玩最低的就好了 跨度太大迈不开步子

<Beatmap
sid=10254
preview="ELISA - Dear My Friend -Mada Minu Mirai e- (DJPop)"
star=3.37
difficulties=[1.85,2.57,3.37]
/>

<Beatmap
sid=2488648
preview="San-Z - Tiny Giant (Amateurre)"
star=6.07
difficulties=[2.55,3.06,4.48,6.07]
alias="小巨星"
/>

洗脑小曲

<Beatmap
sid=2376913
preview="San-Z - pinKing (Amateurre)"
star=5.23
difficulties=[2.62,3.29,4.34,5.23]
/>

蒸..汽..波

<Beatmap
sid=2475328
preview="yuiko - petit bonheur (Game Ver.) (Share)"
star=5.69
difficulties=[2.33,3.54,4.60,4.97,5.69]
/>

<Beatmap
sid=983911
preview="S3RL - Bass Slut (Original Mix) (Fatfan Kolek)"
star=6.69
difficulties=[2.42,3.42,4.18,4.52,4.87,5.67,5.68,6.02,6.69]
/>

跳 嗨 不良内容bushi

<Beatmap
sid=770300
preview="Aitsuki Nakuru - Monochrome Butterfly (Sotarks)"
star=5.83
difficulties=[2.23,3.64,4.46,5.07,5.44,5.70,5.83]
/>

跳 PP

<Beatmap
sid=865746
preview="the peggies - Kimi no Sei (TV Size) (Sotarks)"
star=5.44
difficulties=[2.24,3.41,4.68,4.74,4.78,5.21,5.44]
alias="君のせい (TV Size)"
/>

<Beatmap
sid=754219
preview="TheFatRat ft. Laura Brehm - MAYDAY (Nightcore Mix) (Peter)"
star=4.10
difficulties=[1.79,2.20,3.26,3.95,4.10]
/>

MAYDAY Mix

<Beatmap
sid=2178902
preview="CROW'SCLAW - Ketsubetsu (JOYH-TV Rmx) (SUISEI69)"
star=6.37
difficulties=[2.05,2.72,3.85,4.74,5.59,6.37]
alias="诀别"
/>

<Beatmap
sid=1777892
preview="Polyphia - Playing God (Mir)"
star=6.58
difficulties=[1.96,3.29,3.54,5.05,6.54,6.58]
/>

玩神！诡异！新人群最忌惮谱面 星级严重不符

<Beatmap
sid=366884
preview="yuikonnu - caramel heaven (Fast)"
star=6.22
difficulties=[1.91,2.47,3.49,4.08,4.91,5.40,6.22]
alias="焦糖天堂"
/>

<Beatmap
sid=2533384
preview="*Luna - Unveil feat. Nenne (Shurelia)"
star=5.68
difficulties=[4.37,4.88,5.68]
/>

群友mp 燃曲

<Beatmap
sid=2529101
preview="KINEMA106 - Juubaku (Cut Ver.) (chapter)"
star=4.78
difficulties=[1.84,2.34,3.39,4.78]
alias="铳爆"
/>

<Beatmap
sid=2254715
preview="Harumaki Gohan - Zero Talking (Okoayu)"
star=6.58
difficulties=[3.53,4.16,5.01,5.78,6.58]
alias="零谈"
/>

<Beatmap
sid=1938895
preview="Masayoshi Minoshima feat. Mei Ayakura - Romantic Fall (Tribute DK) (Sanch-KK)"
star=5.11
difficulties=[5.11]
/>

<Beatmap
sid=1403832
preview="linear ring - enchanted love ([Hatsune Miku])"
star=6.27
difficulties=[1.86,2.25,3.03,3.67,4.37,4.89,5.29,6.27]
/>

难

<Beatmap
sid=2591642
preview="seatrus - Ataraxia (2020 Rework) ([-E S I A-])"
star=5.94
difficulties=[1.90,2.59,3.59,4.58,5.94,1.46,2.33,3.20,4.01,5.69]
/>

群友mp 北欧风味

<Beatmap
sid=2358432
preview="MIOYAMAZAKI - Byoushin Zenkai Girl (FuJu)"
star=7.56
difficulties=[2.44,3.59,4.92,5.78,6.49,6.97,7.56]
alias="铁心全崩女孩"
/>

时尚学妹 说的是封面

<Beatmap
sid=2380036
preview="Lee Jin Ah - Target for Love (PV Ver.) (Amats)"
star=5.02
difficulties=[2.66,3.61,4.33,5.02]
/>

小清新韩语歌

<Beatmap
sid=256415
preview="viewtifulday - With You Tonight (XinCrin)"
star=4.18
difficulties=[1.79,2.23,3.83,4.18]
/>

动次打次

<Beatmap
sid=1081094
preview="Maroon 5 - Animals (Aka)"
star=5.70
difficulties=[2.53,3.26,4.52,5.70]
/>

魔力红 嗷呜

<Beatmap
sid=2286917
preview="niki - Swallow feat. KAFU (Nyarue)"
star=4.98
difficulties=[2.13,2.84,3.42,4.18,4.98]
alias="吞"
/>

<Beatmap
sid=2426406
preview="tayori - Tsuki no Uta (Edmound)"
star=4.82
difficulties=[3.44,4.82]
alias="月之歌"
/>

<Beatmap
sid=37964
preview="S.F.A - The G appears (SuiShouGe)"
star=4.12
difficulties=[4.12]
/>

电吉他+小提琴 坟

<Beatmap
sid=357777
preview="NOMA - Brain Power (Jacob)"
star=6.35
difficulties=[2.03,2.35,3.40,4.38,5.47,5.77,5.96,6.35]
alias="脑力"
/>

水晶骷髅 串

<Beatmap
sid=2375004
preview="Sati Akura - Monitoring (Moka21)"
star=6.09
difficulties=[2.05,3.50,4.49,4.93,5.54,6.09]
alias="监视"
/>

miku 但俄语翻唱

<Beatmap
sid=2401948
preview="DAZBEE - Othello (Mejiro Dober)"
star=6.79
difficulties=[2.53,3.58,4.93,5.82,6.60,6.76,6.79]
alias="奥赛罗"
/>

群友mp

<Beatmap
sid=2317883
preview="MyGO!!!!! - Haruhikage (MyGO!!!!! Ver.) (Plus4j)"
star=5.20
difficulties=[5.20]
alias="春日影"
/>

<Beatmap
sid=2393068
preview="nao feat. isui - Ukigumo (BadGames)"
star=7.52
difficulties=[2.00,2.92,4.07,5.14,5.76,6.62,6.66,7.15,7.52]
alias="浮云"
/>

<Beatmap
sid=128931
preview="Feint - Tower Of Heaven (You Are Slaves) (eLy)"
star=6.15
difficulties=[2.13,3.21,3.87,4.56,5.12,6.15]
alias="天堂塔"
/>

恐怖大串天堂塔

<Beatmap
sid=2341894
preview="Empty old City - Daisy Crown (Andrea)"
star=5.08
difficulties=[2.27,3.52,4.14,5.08]
/>

菲比秋比

<Beatmap
sid=2445258
preview="Kashii Moimi feat. HARU - Murasakiiro no Himawari (Ellyu)"
star=6.35
difficulties=[2.96,4.08,4.81,5.93,6.35,4.87]
alias="紫色的向日葵"
/>

<Beatmap
sid=1708547
preview="Pixel Terror - Millennia (Asphyxia)"
star=6.79
difficulties=[2.26,3.47,4.41,5.17,5.64,6.53,6.56,6.79]
/>

<Beatmap
sid=2207503
preview="Krewella - Alibi (Far Out Remix) (Asphyxia)"
star=6.67
difficulties=[2.28,2.84,3.88,4.97,5.96,6.67]
/>

Stay with me tonight I'll be your alibi 坟

<Beatmap
sid=686777
preview="Sound Souler - Paradise (kwk)"
star=7.16
difficulties=[2.40,3.46,4.45,5.28,5.65,6.17,7.16]
/>

与天堂塔一样恐怖的串

<Beatmap
sid=1087774
preview="Wang Rui - Tao Hua Xiao (Muziyami)"
star=5.67
difficulties=[1.70,2.10,2.89,3.45,4.40,4.73,5.67,1.30,2.13,2.75,3.69]
alias="桃花笑"
/>

桃花笑 少有的中文歌

<Beatmap
sid=1766012
preview="toby fox - Shop (Kingling)"
star=3.92
difficulties=[1.66,1.99,2.80,3.57,3.92]
/>

CS10的恶趣味

<Beatmap
sid=1205039
preview="Yorushika - Usotsuki (Moecho)"
star=3.87
difficulties=[3.87]
alias="嘘月"
/>

温柔女声

<Beatmap
sid=1766012
preview="toby fox - Shop (Kingling)"
star=3.92
difficulties=[1.66,1.99,2.80,3.57,3.92]
/>

<Beatmap
sid=104260
preview="Yousei Teikoku - Deep Sea (EvilElvisV2)"
star=5.67
difficulties=[1.66,2.30,3.84,5.29,5.67]
/>

混乱`,$7=Object.freeze(Object.defineProperty({__proto__:null,default:W7},Symbol.toStringTag,{value:"Module"})),J7=`---
date: 2024-06-27
type: recommend
---

# Syzygy5593 的出群遗言

<Player 
  id=35744851
  name="Syzygy5593"
  country=0
  global=249304
  from="JP"
  accuracy=94.77
  level=78
  progress=25
  performance=3107
/>

希望大家多打 NM，少碰低星 HR

我在群文件留了一份[pp图推荐](../../recommend/Syzygy5593.md)，大家都来刷pp

祝大家都能在 osu 里玩的开心

进阶群见`,X7=Object.freeze(Object.defineProperty({__proto__:null,default:J7},Symbol.toStringTag,{value:"Module"})),Z7=`---
date: 2024-12-03
---

# qqmx_x の被驱逐遗言

<Player 
  id=35750067
  name="qqmx_x"
  country=1192
  global=64274
  from="CN"
  accuracy=98.36
  level=100
  progress=17
  performance=6028
/>

这里是qqmx_xの遗言：

今天，

2024.9.16

在新人群里赖了4个月的我终于要被驱逐出境了（悲）

曾经以为要很久才会甚至不可能会发生的事情最后还是落在了我的身上

4个月说长不长，说短不短，一眨眼便过去了

刚入坑还是个摆烂初三牲，如今已经是被学校调教成功的苦逼高一牲

我在新人群mp认识了好多群友，他们说的话又好听，选的图还很人性，根本不想走好吧（bushi）

还记得入群时三位数pp的我唯唯诺诺，在新人群里不敢大声说话，如今3kpp的我肆意妄为：

群内抽查新人

mp调教群友

可我还没多享受一会，就要被驱逐出境，在进阶群里唯唯诺诺了（）

对此我深感悲痛

可我转念一想：

与我同期的群友一个又一个走了，曾经一起mp的人该飞的都飞了，就留我孤独的呆在新人群里

尽管有很多不舍，但任何事情总会结束

而我能做的

就是为它画上一个完美的句号

为这4个月时光画上休止符

总之有你有我还有他（）

致全体新人群萌新 2024.9.16 qqmx_x

（另外专门致谢一下[Antrol](https://osu.ppy.sh/users/33866060)大佬，在我瓶颈的时候给我推了好多图，呜呜呜大佬你真的我哭死）`,q7=Object.freeze(Object.defineProperty({__proto__:null,default:Z7},Symbol.toStringTag,{value:"Module"})),Q7=`---
date: 2025-01-08
type: simple
---

# QiQuang 的出群遗言

<Player 
  id=35902892
  name="QiQuang"
  country=1834
  global=100418
  from="CN"
  accuracy=98.31
  level=100
  progress=49
  performance=5207
/>

随缘刷pp，休闲听歌快半年也是3000pp了，还是挺开心的

个人只刷的动跳图，也不知道有啥好的建议给大家

希望大家在享受音乐的同时取得进步和满意的成就，早日飞升！

嗯，就这样吧，加油！

ps：永远喜欢kano，嘿嘿，以后能多刷点kano的歌就好了。`,nv=Object.freeze(Object.defineProperty({__proto__:null,default:Q7},Symbol.toStringTag,{value:"Module"})),ev=`---
date: 2024-12-03
type: simple
---

# BloodEngine 的出群遗言

<Player 
  id=35938964
  name="BloodEngine"
  country=2614
  global=149243
  from="CN"
  accuracy=98.53
  level=100
  progress=8
  performance=4371
/>

2024年5月入坑osu，之前主玩MuseDash轮指，有600+h时长，想利用一下以前的基础，所以就走了单双

刚开始不知道pp图什么的，开始一个月pp加的很慢

后来就开始打一些pp图了，8月初涨到了2500+pp

8月比较摆了，没怎么打，开学研究生了，也挺焦虑，卡在这个pp很久

9月开学了，宿舍桌子很小，放不开键盘，就几十块闲鱼入了个osu触盘，挺好用的

这几天有几把运气比较好吧，几个大跳连上了，加了不少pp。中秋节晚上，之前打了很多把的5.75no title连上了，拿到了193pp

osu我以后应该会坚持玩的，但听说单双局限挺大的，不知能走多远。

群友们加油，有的图今天可能几十把没连上，但是将来某一天一定能连上的。

`,av=Object.freeze(Object.defineProperty({__proto__:null,default:ev},Symbol.toStringTag,{value:"Module"})),tv=`---
date: 2025-02-28
type: recommend
---

# 21awa12 的遗言以及推图

<Player 
  id="36062235"
  name="21awa12"
  country="3493"
  global="225248"
  from="CN"
  accuracy="95.23"
  level="100"
  progress="34"
  performance="3290"
/>

## 这里是  的遗言 qwq

语文水平不太好所以写的不太行也应该给不出什么好的意见（

（*编者注：写遗言记得多用标点符号，下文已经是大量修改并润色过的*）

我于 2024 年 6 月 1 日注册账号，并且距离开始游玩时隔 7 个月也出群了，花费了 3、40 小时也是终于 3k 了。

我接触 osu 的契机，是在我记忆里这个游戏的某个梗图实际上当时我并不知道这个游戏是叫 osu，当时我处于没什么游戏想玩情况于是就抱着尝试的心态接触了这个游戏不过意想不到的是这个游戏给了我许多的惊喜。

这个游戏大量的铺面以及良好的社区环境，还有好看的皮肤(老婆 bushi)以及我很多喜欢的旮旯歌做的谱面引了我，同时我还认识了许多网友陪着我使我坚持玩了下去，要不然大概我可能坚持不到现在吧，今后我也会坚持玩下去的。

我的进步并不算快，我是基本上靠时长硬堆上去的。以下是我的进步曲线，以及游玩次数。同时我还是个目押选手，指法的话是混双。写这个遗言的时候，打谱最大的问题是卡指严重(最近因为各种事我的游戏次数减少了)

可以看见我的进步曲线非常的平缓，也就只有几段是有提升的。还有一段飞的比较快，是因为算法的更新吃到了 ppy 的百亿补贴。如果一直没有提升，也不要怀疑自己，自信最重要，时间会解决问题的，还有就是不要大越（小越倒是可以适当（（）本人因为之前沉迷大越，导致有很长一段时间导致 acc 非常烂，并且养成了非常并不好的打图习惯和及其严重的高 ar 综合征，甚至连ar9都读不了（

设备这方面的话，我刚开始打 osu 的时候，外设是薄膜键盘和茶轴键盘+魔焰 2 鼠标(某个十几年前的老古董)。游玩到 1600pp 左右，我决定长时间游玩下去，于是开始更换外设。刚开始更换的是键盘 (o3c++) 和数位板 (ctl-472)，数位板适应了大概一周，然后在大概 2600pp 换了个有线的头戴式蓝牙耳机。关于鼠标灵敏度和数位板映射的话，不要一味最求高敏或者大映射小映射应该选择一个自己觉得合适的然后在游玩中慢慢的微调。

---

接下来就是我的 bp（全是跳图，不过隐约记得我 bp 里好像有个小串图）以及推荐的图。如果你想出群便且符合条件的话，可以尝试下（许多这个pp分段的玩家都是被我推的图亲手送出去的）。我推的图适合2600+pp 左右的跳批打（大概），新手也可以打这些图的低难度。希望这些图可以帮助到你。

<Beatmap
bid="4834211"
sid="2233944"
preview="Faylan - Path to glory (Game Ver.) (tomatas95) [Expert]"
star="5.26"
max="579"
/>

这图有许多难度可以刷，都是纯跳，同时 5.71（*编者注：已经被削到  5.3 了*）难度可以说是另一个 bpm 更低但是间隔更大一些的钝角跳以及少量简单直角跳的赦免图 no title (部分人觉得会比 no title 难点)。

<Beatmap
bid="4751014"
sid="2236406"
preview="Kawada Mami - u/n (Cut Ver.) (browiec) [Not DT Farmer's Extra]"
star="5.50"
max="449"
/>

这图与 Path to glory (Game Ver.) 一样都是纯跳图，并且有许多难度可刷，但是其他难度可能会更难一些。推荐次次难，就是星有点高。这首歌也有其他版本可以去尝试下。

<Beatmap
bid="1863993"
sid="884081"
preview="Sasaki Sayaka - Sakura, Reincarnation (Flower) [Kaedeka's Expert]"
star="5.37"
max="652"
/>

也是拥有许多难度的图，但是带了点串，除了次难（不理解为什么次难比主难难并且感觉有点石？）皆可刷，就是容易手癖。(我最喜欢的歌之一)

<Beatmap
bid="1165780"
sid="519521"
preview="Hotaru Murasaki - Re:TrymenT (eLy) [wkyik's Extra]"
star="5.48"
max="549"
/>

也是拥有许多难度的跳图。推荐玩这个 5.51 星的难度。其他难度虽然都可以刷，不过这首歌比前三个可能会更难，这首歌也有其他版本可以去尝试下。(我最喜欢的歌之一)

<Beatmap
bid="998447"
sid="425957"
preview="Rhodanthe* - Yumeiro Parade (Doormat) [Fycho's Insane]"
star="5.10"
max="1215"
/>

次难主难皆可刷，类型是长跳图，带有非常少量的 3 连和极少的 5 连。

<Beatmap
bid="570140"
sid="222790"
preview="Marika - Soul Release (El SolarBeam) [Liberation]"
star="5.46"
max="1285"
/>

只记得是长综，但是跳占比比较多，就打了 1pc 出了个 97acc（对我来说97acc已经很高了TAT）的成绩就没打了。没什么印象，不过应该会比较简单，所以就放推荐里了。

<Beatmap
bid="4903571"
sid="2295905"
preview="Yamajet feat. Hiura Masako - Sunglow (The Fart Lord) [Daydream]"
star="5.04"
max="1575"
/>

长跳图，全程走路，是所有 sunglow 里难度最低的谱面，acc 也很好打，pp 也多。

<Beatmap
bid="4720023"
sid="2214048"
preview="Inori Minase - Songs Compilation (Wen) [Insane]"
star="5.16"
max="2898"
/>

八分钟长综图属于全程走路难度比较低但是吃稳定pp也多歌也好听。

<Beatmap
bid="1327000"
sid="628968"
preview="Iris Freyja(CV:Rina Hidaka), Mitsuki Mononobe(CV:Manami Numakura) - Ray of bullet (Meg) [Light]"
star="5.47"
max="1366"
/>

排列看起来可能会比较吓人但是实际打起来可能会感觉比较简单。

<Beatmap
bid="4620314"
sid="2030098"
preview="KOTOKO - Onaji Sora no Shita de (wanjia) [Kazoku]"
star="5.26"
max="1589"
/>

一张长跳切图，排列可能会有点卡指，但是全图排列基本上差不多。

<Beatmap
bid="1572198"
sid="745838"
preview="nonet - Now On Stage!! (Fycho) [Extra]"
star="5.51"
max="616"
/>

一张比较难的跳图，特别是结尾的折返跳，这点要注意。不过可以作为练习图。

<Beatmap
bid="1229675"
sid="561640"
preview="Hiromi Sato - Jiyuu no Hane (Xexxar) [NK's Extra]"
star="5.27"
max="562"
/>

次难可刷，主难我没怎么打所以就不推荐了（其他人包括我打起来会出现一些比较神奇的漏勺）。

<Beatmap
bid="758466"
sid="343258"
preview="KOTOKO - INFINITE SKY (Garden) [Yomi's Insane]"
star="4.67"
max="553"
/>

推荐主难。这张图开头部分会有一个大逼串，但是后续就基本上全是跳了。排列可能对部分人来说会有点不友好。

<Beatmap
bid="4922946"
sid="2300008"
preview="Tamura Yukari - fancy baby doll (- Nilou -) [Laurier's Insane]"
star="4.93"
max="1598"
/>

长综图但是偏向跳，acc 好刷。要注意的地方是接近结尾部分，大概是 900combo 部分会有个大逼串。

<Beatmap
bid="766939"
sid="347586"
preview="Marie - Clover Day's (sukiNathan) [hvick225's Insane]"
star="4.98"
max="662"
/>

主难注意结尾的连跳，其他的地方不难。(我最喜欢的歌之一)

<Beatmap
bid="2197839"
sid="911995"
preview="Marie - Clover Day's (Rage Quit) [Misure's Extra]"
star="5.63"
max="1380"
/>

上面那张图的长版，不过是长综图，会偏难一点。推荐次次难（觉得自己很强可以打主难）。

<Beatmap
bid="4266945"
sid="2044373"
preview="DJ OKAWARI - Luv Letter (Narcissu) [Lilium]"
star="5.01"
max="933"
/>

非常容易刷 acc 的 190BPM 单戳图，全程单戳，不过对读谱以及稳定有一定要求。

<Beatmap
bid="1594074"
sid="757784"
preview="Hana - Sakura to Kotori (Silky) [Expert]"
star="5.24"
max="901"
/>

有许多难度，不过也是偏向综合的跳图。(我最喜欢的歌之一)

<Beatmap
bid="2460961"
sid="1180189"
preview="Hana - Sakura to Kotori (kudosu) [A Midsummer Night's Dream]"
star="5.62"
max="1861"
/>

上面那张图的长版，是个长综图，会难一些。不过在同星的情况下算简单了。

<Beatmap
bid="4878770"
sid="2284526"
preview="AmaLee - Santa Senpai (Cut Ver.) (Sotarks) [Reform's Expert]"
star="5.45"
max="351"
/>

非常多难度，和车一个性质的图。个人感觉是比车好刷，就是排列看着吓人，实际上打起来是不难的。

<Beatmap
bid="853919"
sid="392118"
preview="SawanoHiroyuki[nZk]:mizuki - &Z (Sotarks) [Inherit the Stars]"
star="4.97"
max="1223"
/>

经典 pp 图的长版，但是我看没什么人推，那我就推了。比较吃稳定的图，但是全程走路难点，就是 hp 比较高，容易突然暴毙。

<Beatmap
bid="2096800"
sid="1001653"
preview="MIMI feat. Hatsune Miku - Mizuoto to Curtain (Mak Kau Hijau) [Sabishii]"
star="5.53"
max="894"
alias="水音与窗帘"
/>

长综图，休息段结束后进入尾杀阶段比较容易掉，要注意下。(我最喜欢的歌之一)

推图到这里就结束了。dt 图在我 bp 里了，全可刷，都是 bpm 低于 200 的超级 pp 图。

最后就是我的 bp1-100了（编者注：你推的图太多了，懒得加了，读者自己点链接去看）`,iv=Object.freeze(Object.defineProperty({__proto__:null,default:tv},Symbol.toStringTag,{value:"Module"})),rv=`---
date: 2024-09-15
---

# rainbow03 的出群遗言

<Player 
  id=36097722
  name="rainbow03"
  country=4322
  global=267183
  from="CN"
  accuracy=95.82
  level=95
  progress=60
  performance=3013
/>

这份遗言其实早在刚达到2000PP时就开始撰写了，之后也经过了反复的修改。起因是因为看着周围的大佬朋友们一个个飞出了新人群。在愈发感到孤单的同时，也意识到自己早晚也将追随他们的脚步出群。因此便有了这份时长跨越了我半个osu生涯的遗言，希望能对仍在新人群中的各位有所帮助，并以此共勉。

个人Osu历程（省流版）：

2024.06.07 入坑

2024.06.28 首个4*FC

2024.07.08  1000PP

2024.07.09 首个100PP

2024.07.24  2000PP

2024.08.07 首个5*FC

2024.09.15  3000PP

在刚入坑osu时的我曾以PASS作为一首曲子的终极目标，导致我从一开始便偏离了正道，入坑当天就越3*，第二天越4*，结果仍不满足一路越到5.97*，然后不懂事的在群里！P了一下，喜提6小时银手镯，最后被群友骂醒，决定改头换面重新做人）

新入坑的萌新切记不要越大级！！！只要你不是CN第一天赋哥，起码不要在达到四位数PP之前越大级。如同生活中的技能一般，osu的练习亦是一个循序渐进的过程，没有下层的基础便没有上层的建筑。因此切勿心急，一开始的稳扎稳打是非常有必要的。另外请一定要听CY的话！！！

<Score
  bid=847313
  sid=128931
  preview="Feint - Tower Of Heaven (You Are Slaves) (eLy) [Another]"
  star=4.56
  max=1023
  mode="o"
  accuracy=87.86
  combo=608
  rank="a"
  performance=39
/>

改头换面重新做人前的最后一舞）

在决定返工之后，我回到了3星开始练习基础，当然同时也会试着打一些稍微超出自己能力的图。事实证明稳扎稳打确实是能很有效的提升能力，短短一周之后便已能较为轻松地FC 一些简单的3-3.5星的图

<Score
  bid=4127953
  sid=1985728
  preview="QUARTET*RE-BOOT! - FUN FUN RE-BOOT (tomatas95) [Hard]"
  star=3.35
  max=382
  mode="o"
  accuracy=98.79
  combo=381
  rank="s"
  performance=36
/>

<Score
  bid=1988749
  sid=952409
  preview="MIMI feat. Hatsune Miku - Ai no Sukima (Log Off Now) [Hard]"
  star=3.51
  max=317
  mode="o"
  accuracy=99.61
  combo=316
  alias="哀の隙間"
  rank="s"
  performance=40
/>

接着便听从CY的建议开始尝试打3.5-4*的图<font size="1">的同时还是没有放弃越级</font>,紧接着第二天就打出了首张100PP choke

<Score
  bid=2014470
  sid=962088
  preview="MIMI feat. Hatsune Miku - Marshmary (Log Off Now) [Insane]"
  star=4.41
  max=427
  mode="o"
  accuracy=97.94
  combo=364
alias="棉花糖"
  rank="a"
  performance=84
/>

已经难以想起这个成绩是如何打出来的了，只记得至今仍未fix)

以此为契机我便也开始接触4*以上的图，靠着地板还没填满一路刷到了1000PP

<Score
  bid=1601399
  sid=761598
  preview="Rita - Winter Diamond (Dubturt) [Insane]"
  star=4.54
  max=607
  mode="o"
  accuracy=94.82
  combo=606
  rank="s"
  performance=73
/>

当时正好遇上猫猫出群，在其推荐下尝试了dear you和竹取，鏖战一番后成功拿下

<Score
  bid=136400
  sid=43466
  preview="DJ Genericname - Dear You (Rue) [Dear Rue]"
  star=4.83
  max=602
  mode="o"
  accuracy=94.35
  combo=601
  rank="s"
  performance=80
/>

<Score
  bid=86324
  sid=22276
  preview="Dark PHOENiX - Taketori Hishou (KanbeKotori) [Extra]"
  star=5.76
  max=1387
  mode="o"
  accuracy=91.85
  combo=234
  rank="b"
  performance=17
/>

没过多久便在群友的推荐下拿下第一张超水的100PP

<Score
  bid=1182090
  sid=557532
  preview="bradbreeck - Emotional Uplifting Orchestral (Venix) [Heaven]"
  star=2.84
  max=108
  mode="o"
  accuracy=100.00
  combo=108
  rank="ss"
  performance=98
/>

然后慢慢的能接得住MP房里佬们扔来的5*

![](/images/lastwords/36097722-1.jpg)

被四个大佬四包一的珍贵影像）

![](/images/lastwords/36097722-2.jpg)

接着便来到了7月22号，这天上午我终于考完了最后一门期末，正值板子适应期结束，这下不等不猛猛刷了。

<Score
  bid=1750033
  sid=716719
  preview="Station Earth - Cold Green Eyes ft. Roos Denayer (Mismagius) [Seto's Insane]"
  star=4.42
  max=492
  mode="o"
  accuracy=97.98
  combo=492
  rank="s"
  performance=95
alias="冷绿眼"
/>

吹响向2000PP进军的进攻号

<Score
  bid=1492012
  sid=705423
  preview="Unknown Artist - Miniministop Hitoyasumi no Uta[Mokuyoubi]Gakusei no Uta (Chromoxx) [Chromstrata's Insane]"
  star=3.55
  max=121
  mode="o"
  accuracy=97.89
  combo=121
  alias="迷你 Ministop 小憩之歌【星期四】学生之歌"
  rank="s"
  performance=131
/>

期间刷出来个新的BP1

<Score
  bid=423986
  sid=175968
  preview="Trident - Blue Field (CelsiusLK) [Hard]"
  star=3.19
  max=336
  mode="o"
  accuracy=98.72
  combo=336
  alias="ブルー・フィールド"
  rank="s"
  performance=99
/>

<Score
  bid=1962161
  sid=938926
  preview="Tashiro Tomokazu - Koi no Hime Hime Pettanko (Karaoke) (DakiniBrave) [Extra]"
  star=4.82
  max=183
  mode="o"
  accuracy=94.62
  combo=183
  alias="爱的公主公主平胸妹 (卡拉 OK)"
  rank="s"
  performance=98
/>

<Score
  bid=486513
  sid=206284
  preview="FELT - In my room (Aka) [Tranquility]"
  star=4.08
  max=197
  mode="o"
  accuracy=98.63
  combo=197
  rank="s"
  performance=75
/>

最终成功在7月24号晚9点拿下2000PP进入进阶群

紧随而来的就是漫长的瓶颈期，接下来整整两周都可以说是毫无进展，直到8月7日小小突破了一下，拿下了5*FC的牌子以及新的BP1

<Score
  bid=1711830
  sid=816264
  preview="55x55 - MY REZHEM KINOLENTY (feat. Cut The Crap) (Shmiklak) [CUT THE INSANE]"
  star=3.65
  max=158
  mode="o"
  accuracy=97.10
  combo=158
alias="我们裁切着胶片"
  rank="s"
  performance=141
/>

然后便开始十分随缘的刷PP，期间也中了不少奖

<Score
  bid=1620144
  sid=757146
  preview="Tanaka Hirokazu - C-TYPE (Arf) [Bonsai's BasS-TYPE]"
  star=5.46
  max=162
  mode="o"
  accuracy=90.12
  combo=162
  rank="a"
  performance=147
/>

<Score
  bid=738063
  sid=320118
  preview="Reol - No title (VINXIS) [Lust's Insane]"
  star=5.62
  max=403
  mode="o"
  accuracy=96.18
  combo=397
  rank="a"
  performance=159
/>

接着在2400PP时报名参加了osu生涯中的第一个比赛YHC，为此还苦练了HD，可惜由于实力差距过大，只能在队里充当挂件给大哥们加油


![](/images/lastwords/36097722-3.jpg)

一张图打了40个成绩，可惜最后因为第一次上场太过紧张导致手从头抖到尾，练图70W，比赛20W然后遗憾离世）

![](/images/lastwords/36097722-4.jpg)

队里赛前MP时打出的高光时刻，糊图巅峰）

不得不说打赛图确实对我起到了不小的帮助，特别是打长图所需的耐力方面，以及面对各种类型的图的能力，让我不至于变成一个纯粹的PP刷子。

接下来依然是缓慢的挤牙膏般的刷PP环节，慢慢从2500PP一路往上爬。这期间必须感谢[Nana Sakura](https://osu.ppy.sh/users/32452774)和[Doubi_wert](https://osu.ppy.sh/users/30512018)向我持续不断地推图，使我始终能找到刷得到PP的图

<Score
  bid=979155
  sid=456986
  preview="Komiya Mao - (can you) understand me? (Sotarks) [uhh?]"
  star=5.01
  max=439
  mode="o"
  accuracy=97.70
  combo=397
  rank="a"
  performance=144
/>

<Score
  bid=968065
  sid=451250
  preview="Syaro(CV.Uchida Maaya) - Caffeine Fighter (Doormat) [Kilimanjaro]"
  star=4.90
  max=921
  mode="o"
  accuracy=92.27
  combo=919
  alias="カフェインファイター"
  rank="a"
  performance=100
/>

<Score
  bid=3082320
  sid=1504648
  preview="Oshimizu Nako (CV: Toyosaki Aki) - Suisei Melody (CoLouRed GlaZeE) [Insane]"
  star=3.74
  max=853
  mode="o"
  accuracy=96.12
  combo=851
  alias="水性メロディ"
  rank="s"
  performance=154
/>

<Score
  bid=1492008
  sid=705423
  preview="Unknown Artist - Miniministop Hitoyasumi no Uta[Mokuyoubi]Gakusei no Uta (Chromoxx) [Chromstrata's Extra]"
  star=3.58
  max=123
  mode="o"
  accuracy=98.60
  combo=123
  alias="迷你 Ministop 小憩之歌【星期四】学生之歌"
  rank="s"
  performance=161
/>

<Score
  bid=780914
  sid=354537
  preview="Feint - Vagrant (feat. Veela) (Aia) [Still Alive]"
  star=5.29
  max=421
  mode="o"
  accuracy=96.12
  combo=416
  rank="a"
  performance=138
/>

<Score
  bid=2964222
  sid=1440767
  preview="DM DOKURO - SAVE (Encore) (browiec) [Reform's Extra]"
  star=5.02
  max=496
  mode="o"
  accuracy=97.86
  combo=486
  rank="a"
  performance=137
/>

终于在9月15日这天，在睡醒午觉起来之后打开了两周前曾试过的一张DT图，然后仅用了2PC便打出了这个成绩，直接冲过了3000PP（虽然还是CHOKE了）。至此入坑至今正好100天，我完成了从0到3000的旅程。

<Score
  bid=490154
  sid=208112
  preview="Kitamura Eri & Nonaka Ai - and I'm home (kakifly) [Mirai]"
  star=3.42
  max=601
  mode="o"
  accuracy=98.69
  combo=573
  rank="a"
  performance=142
/>

当然，3000PP并不是结束，而是一个新的开始。在怀揣这对美好未来的期待的同时，我也衷心的祝愿各位能早日出群，达到新的高度。

最后附上个人的成绩图和BP列表，希望对各位有所借鉴

*编者注：bp在前面基本都出现过了，这里不再赘述*

最后非常感谢在这三个月期间所有为我提供帮助与建议的各位，请允许我在此特别感谢一些指引我明路的大佬们：

[-Inui Sana-](https://osu.ppy.sh/users/9043058)（指导）：为我提供了宝贵的技术指导，以及在遇到各种疑难杂症时帮我解决症结所在，使我得以保持前进的脚步

[Nana Sakura](https://osu.ppy.sh/users/32452774)：在我越级越的最昏头的时候点醒了我，使我得以重回正轨。之后也一直指导并鼓励着我，持续给我推图直到出群（捏捏猫猫）

[ShandenOnter](https://osu.ppy.sh/users/13999223)：我的YHC队伍教练，一眼看出我的引导线存在的大问题，要是没他我估计还在2500PP躺尸）

以及陪伴着我OSU生涯的好伙伴们（排名不分先后）：

[Cold fish](https://osu.ppy.sh/users/35678806)：新人群超级老登之一，NM大神，一路见证着我从三位数PP到3000PP（赶紧刷出群来陪我）

[hx123yx](https://osu.ppy.sh/users/35529699)：另一位新人群超级老登，400h的HD大神（你也赶紧刷出群来陪我）

Shimakaze:新人群老登之一，打串糕手（你也赶紧刷出群来陪我）

[baicai492](https://osu.ppy.sh/users/27368979)：最后一位新人群老登，MP房常客（你也赶紧刷出群来陪我）

[Erina-](https://osu.ppy.sh/users/10364008)：猫猫幽灵，带我度过了早期MP房被老登炸的时间，可惜现在经常不见人影）

[Killbusark](https://osu.ppy.sh/users/13744965)（牢大）：在我冲刺2000PP期间给我推了大量的好图，使我得以实现48小时飞升的愿望，可惜现在不误正业沉迷战甲）

[Apocryphal](https://osu.ppy.sh/users/35317988)：MP房好朋友之一，为了你，我要当下头太刀虾！（火速刷上2000来进阶群陪我！）

[-Capgras-](https://osu.ppy.sh/users/6796076)：双模式大神，串跳双修，特别感谢主板送的两个半个月撒泼特）

[- Inui JaHuLi -]：群猫粮，陪我度过1000PP的伙伴

[yuyox](https://osu.ppy.sh/users/35414991)：群同期，总是快我一步在我前方等着我（就连注册都快我一步）

[yuanxy](https://osu.ppy.sh/users/28388886)：我的HR老师，同时也是我追赶的目标之一，渊神，启动！

[Doubi_wert](https://osu.ppy.sh/users/30512018)：我的长图老师，耐力大神，也是我追赶的目标之一

[ciaIIo](https://osu.ppy.sh/users/34504424)：MP房超级老登，从我第一次进MP房开始就从未缺席，也是我追赶的目标之一，最后请容我说一句Ciallo～(∠・ω< )⌒☆

写在最后：在入坑osu时我并未想到能达到如此成就，在入群时也未曾设想有朝一日会在新人群留下自己的痕迹。非常感谢这入坑三个月以来在osu社区遇到的各位，也希望你们都能在osu中找到自己的快乐，如果有MP的话请务必叫上我）
`,sv=Object.freeze(Object.defineProperty({__proto__:null,default:rv},Symbol.toStringTag,{value:"Module"})),ov=`---
date: 2025-01-05
type: simple
---

# SeeleBronya 的出群遗言

<Player 
  id=36127474
  name="SeeleBronya"
  country=2466
  global=71560
  from="JP"
  accuracy=96.13
  level=100
  progress=18
  performance=5830
/>

遗言：（2024.12.28）在群里藏了好久了还是得走了

今天是出群的日子里啦，在osu新人群的日子很开心，大家加油，我们进阶群再见😭😭😭

跳图真好玩啊

我还是不想似啊
`,lv=Object.freeze(Object.defineProperty({__proto__:null,default:ov},Symbol.toStringTag,{value:"Module"})),cv=`---
date: 2025-06-17
type: recommend
---

# adxeo 的出群遗言（aqmm 修订版）

<Player 
  id=36155893
  name="Ariael"
  country=4091
  global=265695
  from="CN"
  accuracy=97.27
  level=98
  progress=15
  performance=3000
/>

这里是 adxeo，首先

<div style="text-align: center; font-size: 1.8em; color: black; background-color: yellow; padding: 0; ">
    传下去
</div>

<div style="text-align: center; font-size: 1.8em; color: black; background-color: yellow; padding: 0; ">
    传下去
</div>

<div style="text-align: center; font-size: 1.8em; color: black; background-color: yellow; padding: 0; ">
    传下去
</div>

<div style="text-align: center; font-size: 1.8em; color: red; background-color: yellow; padding: 0; font-style: italic">
    mp 必备，先手制人，我们不玩 tech，我们直击灵魂！
</div>

<Beatmap
bid=4532722
sid=2150967
preview="Gu Xi - Wo Xing Shi (Sped Up Ver.) (Priqnot) [Borderline Insane]"
star=4.50
max=666
alias="我姓石"
/>

<Beatmap
bid=4446606
sid=2026486
preview="VaVa - Wo Xiang Dui Ni Shuo Baby (Yu vs. CTM Radio Mix) (Nightcore Mix) (__Ag) [DJ Ame's Insane]"
star=4.94
max=966
alias="我想对你说 Baby"
/>

<Beatmap
bid=3416968
sid=1655701
preview="Mu Rong Xiao Xiao - Ai Qing Mai Mai (Firika) [Dalou's Insane]"
star=4.36
max=1012
alias="爱情买卖"
/>

<Beatmap
bid=4655174
sid=2195334
preview="Lei Lei - Wo Ai Wan Dian Wei (Firika) [Kieost's Insane]"
star=4.84
max=421
alias="我爱玩典韦"
/>

<Beatmap
bid=1783725
sid=853469
preview="A Zhong Bu Dai Xi - Gu Niang De Jiu Wo (Hey lululu) [Chicken Hair]"
star=4.59
max=148
alias="姑娘的酒窝"
/>

<Beatmap
bid=4763607
sid=2241273
preview="Guo Gao Ming - Ye Mo Tuo (DJ A Zhuo Ver.) (Cut Ver.) (Yorita Yoshino) [Get on]"
star=4.62
max=466
alias="野摩托 (DJ阿卓版)"
/>

<Beatmap
bid=155120
sid=50453
preview="Phoenix Legend - Zui Xuan Min Zu Feng (a3272509123) [Insane]"
star=4.68
max=787
alias="最炫民族风"
/>

<Beatmap
bid=648799
sid=287561
preview="Sunny Wang - Wu Ye DJ (Hrs Club Remix) (blueloniess) [collab]"
star=4.11
max=1785
alias="午夜 DJ"
/>

<div style="text-align: center; font-size: 1.8em; color: black; background-color: yellow; padding: 0; ">
    然后先感谢卡噶米连打推荐和以下一些老登遗留物
</div>

![](/images/lastwords/36155893-1.jpg)

<div style="text-align: center; font-size: 2em; color: black; background-color: yellow; padding: 0;">
    然后简单介绍一下自己
</div>

<div style="text-align: center; font-size: 1.2em; color: black; background-color: yellow; padding: 0;">
    感谢群友们和管理一个月的指导，本人用的数位板 + o3c，比较喜欢打跳图，最喜欢的铺师是 akitoshi，有兴趣的话可以看看 bp 了解一下。
</div>

<Score
  bid="738063"
  sid="320118"
  preview="Reol - No title (VINXIS) [Lust's Insane]"
  star="5.72"
  max="403"
  mode="o"
  accuracy=98.4
  combo=357
  rank="a"
  performance=186
/>

<Score
  bid=2168768
  sid=983911
  preview="S3RL - Bass Slut (Original Mix) (Fatfan Kolek) [Seductive Extra]"
  star=5.87
  max=535
  mode="o"
  accuracy=95.00
  combo=329
  rank="a"
  performance=162
/>

<Score
  bid="4834210"
  sid="2233944"
  preview="Faylan - Path to glory (Game Ver.) (tomatas95) [Scarlet Vision]"
  star="5.70"
  max="610"
  mode="o"
  accuracy=98.38
  combo=401
  rank="a"
  performance=161
/>

<Score
  bid=2025938
  sid=968171
  preview="MIMI feat. Hatsune Miku - Mizuoto to Curtain (Log Off Now) [Extra]"
  star=5.14
  max=257
  mode="o"
  accuracy=97.92
  combo=256
  rank="s"
  performance=155
alias="水音与窗帘"
/>

（*编者注：你的 BP 为什么要压缩*）

![](/images/lastwords/36155893-2.jpg)

最后各位进阶群见

bye
`,uv=Object.freeze(Object.defineProperty({__proto__:null,default:cv},Symbol.toStringTag,{value:"Module"})),dv=`---
date: 2024-12-03
---

# N0Where_ 的出群遗言

<Player 
  id=36273312
  name="N0Where_"
  country=3622
  global=244827
  from="CN"
  accuracy=94.08
  level=97
  progress=0
  performance=3002
/>

## 闲聊

作为24年七月份入坑的小登，没想到5个月就出群了，刚开始玩的时候不知道数位板也能玩osu，后来购入了472，适应之后猛猛飞升，后来过了几个星期的低迷期，换了磁轴，又继续猛猛飞^-^。

## 建议

如果你是板子选手，建议笔尖不要太过用力的贴板，把用在笔尖上的力放松下来，握笔姿势和映射没有标准，自己用的舒服就是最好的。不要一直想着越级，循序渐进，感觉一张图在某个地方一直断就别打了，换张图打或者休息一会，别红温了还硬打，，开心最重要。

<font size="5">特别感谢新人群管理和群友们给我的指导还有铺面推荐！！！我们进阶群再见！</font>

[https://osu.ppy.sh/users/36273312](https://osu.ppy.sh/users/36273312)

附上我的bp给各位参考

<Score
  bid=738063
  sid=320118
  preview="Reol - No title (VINXIS) [Lust's Insane]"
  star=5.62
  max=403
  mode="o"
  accuracy=98.84
  combo=279
  rank="a"
  performance=170
/>

<Score
  bid=1067123
  sid=471261
  preview="ELISA - Dear My Friend -Mada Minu Mirai e- (TV size) (Rizen) [Insane]"
  star=4.04
  max=361
  mode="o"
  accuracy=97.32
  combo=253
  alias="Dear My Friendーまだ見ぬ未来へー (TV size)"
  rank="a"
  performance=169
/>

<Score
  bid=1620144
  sid=757146
  preview="Tanaka Hirokazu - C-TYPE (Arf) [Bonsai's BasS-TYPE]"
  star=5.46
  max=162
  mode="o"
  accuracy=91.76
  combo=162
  rank="a"
  performance=155
/>

<Score
  bid=2684855
  sid=1280506
  preview="EDOGA-SULLIVAN - WONDERFUL WONDER (TV Size) (Kuki1537) [Insane]"
  star=4.29
  max=270
  mode="o"
  accuracy=91.03
  combo=123
  rank="b"
  performance=153
/>

<Score
  bid=2347578
  sid=1123162
  preview="Sayuri - Sore wa Chiisana Hikari no Youna (TV Size) (Kuki1537) [browiec's Expert]"
  star=4.03
  max=338
  mode="o"
  accuracy=87.57
  combo=332
alias="犹如微弱的光芒"
  rank="a"
  performance=144
/>

<Score
  bid=1988753
  sid=952409
  preview="MIMI feat. Hatsune Miku - Ai no Sukima (Log Off Now) [Radiance]"
  star=5.31
  max=346
  mode="o"
  accuracy=97.00
  combo=266
  alias="哀の隙間"
  rank="a"
  performance=143
/>

<Score
  bid=2025942
  sid=968171
  preview="MIMI feat. Hatsune Miku - Mizuoto to Curtain (Log Off Now) [Lucid]"
  star=5.49
  max=265
  mode="o"
  accuracy=94.09
  combo=126
  alias="水音とカーテン"
  rank="a"
  performance=141
/>

<Score
  bid=2201553
  sid=1053509
  preview="ViViD - HIKARI (TV Size) (Log Off Now) [Extreme]"
  star=5.52
  max=551
  mode="o"
  accuracy=93.68
  combo=226
  alias="光-HIKARI- (TV Size)"
  rank="a"
  performance=131
/>

<Score
  bid=853919
  sid=392118
  preview="SawanoHiroyuki[nZk]:mizuki - &Z (Sotarks) [Inherit the Stars]"
  star=4.93
  max=1223
  mode="o"
  accuracy=97.62
  combo=467
  rank="a"
  performance=130
/>

<Score
  bid=954692
  sid=444335
  preview="HO-KAGO TEA TIME - Kira Kira Days (Kagetsu) [Shiawase!!]"
  star=5.60
  max=574
  mode="o"
  accuracy=94.26
  combo=191
  alias="キラキラ Days"
  rank="a"
  performance=130
/>`,mv=Object.freeze(Object.defineProperty({__proto__:null,default:dv},Symbol.toStringTag,{value:"Module"})),pv=`---
date: 2024-10-19
type: simple
---

# Mouse_Fish 的出群遗言

<Player 
  id=36310606
  name="Mouse_Fish"
  country=4393
  global=271221
  from="CN"
  accuracy=97.35
  level=81
  progress=37
  performance=3004
/>

感谢新人群里的管理和大家，大家有什么技术问题都可以去群里问管理，管理都会给你解决的。这里尤其感谢zhan_AL-1S在我没图打的时候热心的为我提供pp图，从1000pp到3000pp打了他不少图。

说实话我也不会教别人什么技巧之类的，下面是我的bp1-100可以做个参考去打图。

最后8月1号入群，10月19出群，也算速通了。Osu真好玩，Fps也好玩。
Osu+Fps=只会打跳，串什么的根本打不了。我在进阶群see you next time`,fv=Object.freeze(Object.defineProperty({__proto__:null,default:pv},Symbol.toStringTag,{value:"Module"})),hv=`---
date: 2024-12-03
type: recommend
---

# Chiyarara 的遗言(妹妹图推荐(bushi

<Player 
  id=36409902
  name="Chiyarara"
  country=1168
  global=62803
  from="CN"
  accuracy=97.73
  level=100
  progress=21
  performance=6048
/>

心情低落来一串 oooooooooo

心情愤怒来一跳 o   o   o

长图少打长图坏 o o o o o o (保护视力)

不凹不凹不刷不刷 o (多打没打过的图)

难听的歌不要打 （〃｀ 3′〃）

开心开心mp ①②③④⑤⑥⑦⑧⑨⑩

—————————————————————————————————————————————————

再见啦~

感谢群友们这么多天的陪伴 !

要玩的开心群友们  !

PP提升出去是迟早的事情  !(不要只为了刷pp啊喂(#\`O′))

—————————————————————————————————————————————————

以下是妹妹图推荐:

<Beatmap
  bid=3709177
  sid=1808565
  preview="Hestia (CV: Inori Minase) - Kimiiro Everyday (- Ex -) [Adventure]"
  star=5.20
  max=1161
/>

<Beatmap
  bid=4716364
  sid=2224055
  preview="Alya (CV: Uesaka Sumire) - Chiisana Koi no Uta (TV Size) (- Nilou -) [A Tiny Little Love Song for You~]"
  star=4.73
  max=523
/>

<Beatmap
  bid=4718672
  sid=2224823
  preview="Monster Siren Records - Mystic Light Quest ([ L I M ]) [Insane]"
  star=5.19
  max=1247
/>

<Beatmap
  bid=3074714
  sid=1464031
  preview="LazuLight - Diamond City Lights ([ TNTlealu ]) [Chu's Insane]"
  star=5.04
  max=1203
/>

<Beatmap
  bid=1568203
  sid=743650
  preview="TrySail - High Free Spirits (nenpulse bootleg remix) ([[Pika]]) [Hibike]"
  star=7.03
  max=2522
/>

<Beatmap
  bid=2484169
  sid=1192164
  preview="Mili - String Theocracy ([Arc]) [Theatrically Interesting]"
  star=5.90
  max=1048
/>

<Beatmap
  bid=1034482
  sid=485056
  preview="*namirin - Koi no Hime Hime Pettanko ([C u r i]) [Extra]"
  star=5.39
  max=529
/>

<Beatmap
  bid=1095893
  sid=516126
  preview="sana - Songs Compilation ([C u r i]) [Love]"
  star=6.38
  max=3300
/>

<Beatmap
  bid=1346523
  sid=625045
  preview="Poppin'Party - Kira Kira datoka Yume datoka ~Sing Girls~ (TV Size) ([Crz]Sword) [Pata-Mon's Insane]"
  star=4.77
  max=516
/>

<Beatmap
  bid=4108545
  sid=1978984
  preview="inabakumori - Haru no Sekibaku ([Hatsune Miku]) [Worn Farewell]"
  star=5.57
  max=858
/>
`,vv=Object.freeze(Object.defineProperty({__proto__:null,default:hv},Symbol.toStringTag,{value:"Module"})),bv=`---
date: 2025-01-07
type: suggest
---

# evil_01的出群遗言

<Player 
  id=36547413
  name="evil_01"
  country=3778
  global=251272
  from="CN"
  accuracy=97.40
  level=99
  progress=78
  performance=3017
/>

2025年1月7日，耗时四个月达成3000pp。这四个月在osu认识了很多新朋友也学到了很多，从一开始只能打1，2星的菜鸟到现在能fc5星的大菜鸟。

在这里也给大家一点建议。

1. 刷pp图没错，但是正常图一定不要落下，基本功练好了想刷pp会更容易，只打pp图只会表面涨pp但是一mp就会被看出实力虚浮。

(本人曾经走上歪路，1000pp时开始只刷pp图一直到2400左右就刷不太动了，以至于后来补基础花了一个月。至于补基础的契机就是mp还没一个低我10万名的玩家打得好。当然说这些不是为了让大家攀比，一切以自己开心为准)

2. 在遇到瓶颈时可以试试使用不同的mod，例如HD,EZ,HR等，我自己每次在尝试新mod时就会有新的收获，我在练了一个月EZ(大部分时间是DA)和HD后读图能力提升巨大

aim也有一定提升，后续准备跟进HR的练习。

最后祝cnosu越来越NB，也祝大家早日飞升`,gv=Object.freeze(Object.defineProperty({__proto__:null,default:bv},Symbol.toStringTag,{value:"Module"})),yv=`---
date: 2026-10-05
type: simple
---

# IYTYY 的出群遗言

<Player
id=36838632
name="IYTYY"
country=3051
global=307444
from="HK"
accuracy=96.05
level=67
progress=77
performance=2960
/>

出群时为鼠标玩家，800*2

Man what can I say！

<Score
bid=1620144
sid=757146
preview="Tanaka Hirokazu - C-TYPE (Arf) [Bonsai's BasS-TYPE]"
star=5.46
max=162
mode="o"
accuracy=100.00
combo=162
rank="ss"
performance=226
/>

这是我的 #1 你敢跟它对视吗

也不知道说什么，入坑的时候就是想找一个练枪的东西（雾）

然后发现 osu 真他妈好玩（比 cs 好玩）

想快速刷 pp 你就粉毛跳图耍起就行

要有 fps 基础直接 ctype 耍起!

![](/images/lastwords/36838632-1.jpg)

进阶群见`,wv=Object.freeze(Object.defineProperty({__proto__:null,default:yv},Symbol.toStringTag,{value:"Module"})),_v=`---
date: 2025-02-28
type: recommend
---

# Awathon 的出群遗言

<Player 
  id=36846545
  name="- Awathon -"
  country=3926
  global=260415
  from="CN"
  accuracy=97.99
  level=84
  progress=23
  performance=2989
/>

Ciallo～(∠・ω< )⌒☆   这里是离月！

我接触osu大概是24年十月份吧，但是正式开始大量玩是从25年一月开始

从入群到出群  1.06-2.27  共计52天  也是成功飞上了4kpp

很感谢新人群里各位的陪伴！也感谢各位给我推的图！

很可惜还没和新人群里的许多人好好认识就分别了。

祝愿各位能趁早飞升！上层再见！

![](/images/lastwords/36846545-1.jpg)

接下来就是一些建议吧，以及一些我自己的看法。

第一，不要越级！不要越级！！不要越级！！！

尽可能地去听节奏听歌，去把自己能读得懂的图acc尽量打高。

更高的acc也更容易拿到更多pp！一定要让自己的bp尽量不要出现蓝紫红啊！

第二，少凹图，很败手感的。可以凹但不要多凹。

建议一张图超过十遍就别再刷了，手癖了很难解的！

然后就是 我并不认为打pp图是什么不好的事情，

能把pp图打到高acc也是一种实力  但不要只刷pp图就好。

以及打游戏最重要的是享受，不要把游戏玩的太功利了，那样不会让自己好受的哦！

嘛，我的废话大概也就这么多了，写太多各位应该也看不下去

下面就是一些推图，希望各位也能早日飞升！

<Beatmap
  bid=1746869
  sid=720066
  preview="Yuzuki - Dear You (DJ Genericname DnB Remix) (Spkz) [Dear Spkz (Extra)]"
  star=5.18
  max=620
/>

推荐难度：4.86\\* 5.19\\*（4.98\\*偏难）

推荐原因：比较简单的五星图，能刷高acc的话很容易拿到pp，这首我是在2k3的时候打出的178pp。基本都是不太难的跳切和小串，只要接住中间比较长的两串打这个图基本没什么难度。

<Beatmap
  bid=814293
  sid=371128
  preview="Station Earth - Cold Green Eyes ft. Roos Denayer (Bearizm) [Divine]"
  star=4.94
  max=562
alias="冷绿眼"
/>

推荐难度：4.97\\*

推荐原因：不错的跳图，跳不会太难，歌也好听，适合当作练习。

<Beatmap
  bid=1819801
  sid=859370
  preview="*namirin - The Noise of Rain (Sotarks) [NiNo's Insane]"
  star=4.84
  max=1121
/>

推荐难度：3.52\\* 4.72\\*

推荐原因：好听！四星的谱可能会偏难一点，主要难点在爆发段和尾杀的读图，实在看不懂可以开AT然后听节奏，建议有一定实力再来摸四星。

<Beatmap
  bid=2904026
  sid=1372317
  preview="lasah - MOTHER (Cellina) [zzx's Insane]"
  star=4.68
  max=1079
/>

推荐难度：2.94\\* 4.54\\*

推荐原因：也是很好听的一首歌，同样四星谱会有比较偏难的读图和216bpm的连打，建议有一定实力再摸四星谱。

<Beatmap
  bid=2689178
  sid=1296110
  preview="hololive IDOL PROJECT - Shiny Smily Story (Hollow Wings) [Yugu's Insane]"
  star=4.70
  max=1241
/>

推荐难度：3.35\\* 4.67\\*

推荐原因：考验耐力的长图，没什么难点，切和串都是很基本的排列。平常可以动不动摸两把来练练自己的耐力，注意不要读错图就可以了。

<Beatmap
  bid=2092649
  sid=962863
  preview="AliA - impulse (skytuna) [Entry's Insane]"
  star=4.78
  max=1144
/>

推荐难度：3.78\\* 4.71\\*

推荐原因：长综图，歌很爽，也很好听。

好了，大概能说的也就这么多了，我在新人群的故事也该告一段落啦。接下来，就是你们以后的各位所谱写的传奇了哦！我在进阶群静待各位的到来！让我们一起打一辈子osu吧！

♥ 我们明日见 ♥

![](/images/lastwords/36846545-2.jpg)`,Sv=Object.freeze(Object.defineProperty({__proto__:null,default:_v},Symbol.toStringTag,{value:"Module"})),kv=`---
date: 2025-03-02
type: recommend
---

# m1saka_mikoto 的出群遗言

<Player 
  id=36941954
  name="m1saka_mikoto"
  country=1055
  global=56771
  from="CN"
  accuracy=97.82
  level=100
  progress=16
  performance=6273
/>

本人于2024年11月4日加入osu!std新人群 于2025年3月2日出群 用时151h 也是度过了快乐的5个月

首先要感谢新人群的各位，感谢各位新人群指导的帮助 特别指名-inui sana-（曾用名cyclc）这位指导对我的帮助非常大（有什么问题都可以问他 人很好）

首先介绍一下我接触osu的契机

我非常小的时候（时年约5岁）就知道有这么一款游戏叫做osu而且是戳泡泡 大概15年那个时候在网上有看到相关内容 当时对这类游戏并不感兴趣 所以也就没有去玩 经过快十年的时间 我接触了许多音游 我玩的第一款音游是节奏大师 也尝试过钢琴块 当时什么都玩不懂 只觉得好难 于是没有玩多久就都卸载了 再接触时是小学 玩过了太鼓达人和phigros后才是真正的入坑了音游 之后我尝试了muse dash  malody  cytus  arc等等众多优秀的音游 最终影响我入坑osu!的是冰与火之舞这款和osu性质差不多的社区游戏  我闲来无事时间执法b站动态时我看到了执法一条视频下的一条留言

[https://www.bilibili.com/video/BV1sRx4e3EFK?vd_source=23f6de2f9a9d63c678557279b333e076](https://www.bilibili.com/video/BV1sRx4e3EFK?vd_source=23f6de2f9a9d63c678557279b333e076)

看到这个视频再结合我当时对音游的兴趣 我便决定尝试一下 但没想到会这么上瘾 于是便有了现在这篇出群遗言

## 个人osu经历

我个人在玩之前有3000h的fps游戏经验和一点点的音游基础 所以对我来说上手是比较快的 入坑即单双 现在是跳部分单戳其他强双  喜欢的图型是跳   我经过21h的游玩后达到了1000pp（此时我的bp是c-type 136pp）该bp直到我2800pp以后才刷下去 达成1000pp后我开始越级 打地鼠从4*越到6.2*一直越到2300pp 86acc后才开始修补 直到出群3000pp时 我的acc是95.33 对我来说acc的压力确实并不是很大 现在也仍然在越级（此时bp最高星数是6.7）但是现在越级刷不到特别多pp 直到出群 我已经可以将5*打到99acc了 也算是有些成果

我是在2600pp时转的数位板 由于我发现玩的时候鼠标会飘移 开始的时候鼠标位置在垫子中心 打的时候就飘到垫子下方了 这个时候移动就非常难受也没有办法调整 毕竟不同于fps不可以随时抬鼠复位 这很大程度上影响了我的移动 在某种程度上也导致了我的瓶颈 在转板之后关于这些的困扰便消失了 移动也更加省力（就是适应了两三天）后来便开启了飞升之路

关于图型目前是什么都会一点（专精跳图）似乎也是主流 对于大部分人来说我认为都是跳更简单 一开始我是完全不会打串的 经过一段时间的练习有了一定的打串能力 如果你感觉实在是不会打可以尝试更换游戏方式转换手感（比如换键位或者换打击手指）将zx键位换成别的或者打击手指从食指和中指换成食指和无名指尝试一下可能会有所帮助

游戏时长5d7h55m 我出群了

## 关于外设

我键鼠时的鼠标是迈从的g3ultra 键盘是艾石头的zn84换ttc快银v2轴（现在仍然使用）数位板是wacom ctl472 耳机是飓风3 显示器是泰坦军团的p24a2g（165hz）都不是特别好的外设 价格比较便宜 可以作为参考

## 关于一些建议

我的建议第一条就是四个字：多玩 多练 以下的所有建议都是建立在这四个字的基础上的 如果你想提高自己的水平 这就是最有用的四个字  第二是放低期待，享受游戏 不要太过在意pp 不然刷pp的效率会非常低 bp也不会高（本人深受其害 某图一旦前面打得好了后面就开始紧张导致烂尾）过于在意pp不仅让你玩的难受 也会限制你的进步速度  第三是尝试稍微做一些适当的越级 大越伤身小越怡情 一直待在舒适区会让你的进步停滞不前 第四是多下图 少retry  retry刷pp凹图固然能凹到不少pp 但是一般情况下多retry并不能刷到特别高的pp 也不利于你的进步（同样本人深有体会） 以上

## 最后附上cy的珍贵教导

不要看见人就卖弱 你没那么不堪 别人也没那么强 少说 多练

杜绝文爱现象 维护良好风气 男娘和药等内容绝对禁止 非常危险（附上noesis圈汉化药娘自杀事件贴吧链接）警惕此类事件的发生

[https://tieba.baidu.com/p/8718103716?share=9105&fr=sharewise&see_lz=1&share_from=post&sfc=copy&client_type=2&client_version=12.77.1.0&st=1741411376&is_video=](https://tieba.baidu.com/p/8718103716?share=9105&fr=sharewise&see_lz=1&share_from=post&sfc=copy&client_type=2&client_version=12.77.1.0&st=1741411376&is_video=)

## 推图和bp

<Beatmap
  bid=1093507
  sid=513590
  preview="RADWIMPS - Zen Zen Zense (movie ver.) (Monstrata) [Haruto's Insane]"
  star=5.02
  max=682
  alias="前前前世 (movie ver.)"
/>

前前前世 经典pp图

<Beatmap
  bid=996356
  sid=326920
  preview="Seiryu - BLUE DRAGON (Blue Dragon) [Fiery's Insane]"
  star=4.95
  max=913
/>

青龙 比较难的连打

<Beatmap
  bid=1508535
  sid=713740
  preview="kana - Hammer o Denpa Song ni Shitemita (Alumetri) [Baka]"
  star=4.96
  max=361
  alias="ハンマーを電波ソングにしてみた"
/>

连打+跳 比较难

<Beatmap
  bid=4777435
  sid=2246377
  preview="Linkin Park - The Emptiness Machine (Cut Ver.) (Sotarks) [Ram's Another]"
  star=4.89
  max=639
/>

emptiness machine 跳 非常pp

<Beatmap
  bid=3075278
  sid=1500745
  preview="Demetori - Youma Yakou ~ Deterministic Chaos (Trust) [Lunatic]"
  star=5.31
  max=1996
  alias="妖魔夜行 ～ Deterministic Chaos"
/>

强双

<Beatmap
  bid=4796020
  sid=2253247
  preview="Hechizeros Band x Koji Kondo - El Sonidito x Athletic Theme (DitzyFlama Mashup) (Fuxi66) [Ram's ANOTHER]"
  star=4.81
  max=194
/>

非常纯粹的跳

<Beatmap
  bid=2118443
  sid=983911
  preview="S3RL - Bass Slut (Original Mix) (Fatfan Kolek) [Reform's Filthy Expert]"
  star=4.87
  max=492
/>

bass slut个人认为主难度最简单的6.7

<Beatmap
  bid=1929563
  sid=924000
  preview="Kawada Mami - No buts! (TV Size) (Yudragen) [Another]"
  star=5.06
  max=575
/>

no buts!好听好玩好刷

<Beatmap
  bid=2360152
  sid=1129819
  preview="Little Glee Monster - Dakara, Hitori ja Nai (TV Size) (browiec) [Extra]"
  star=4.94
  max=497
  alias="だから、ひとりじゃない (TV Size)"
/>

跨度很大的12 12跳 非常pp

<Beatmap
  bid=1059388
  sid=497769
  preview="Drop - Granat (Left) [Extra]"
  star=5.05
  max=241
/>

granat 好刷但是比较难

<Beatmap
  bid=290581
  sid=111760
  preview="Toyosaki Aki - Diamond (Fycho) [Insane]"
  star=5.07
  max=816
  alias="ダイヤモンド"
/>

小跳 非常好刷

<Beatmap
  bid=1441095
  sid=665057
  preview="Shiggy Jr. - oyasumi (bite you death) [hazu's expert]"
  star=5.08
  max=408
/>

跳 强度比较高

<Beatmap
  bid=1988748
  sid=952409
  preview="MIMI feat. Hatsune Miku - Ai no Sukima (Log Off Now) [Extra]"
  star=4.99
  max=347
  alias="哀の隙間"
/>

同样强度较高

<Beatmap
  bid=979155
  sid=456986
  preview="Komiya Mao - (can you) understand me? (Sotarks) [uhh?]"
  star=5.01
  max=439
/>

极其好刷的跳

<Beatmap
  bid=1608832
  sid=765169
  preview="Komiya Mao - (can you) understand me? (Sotarks) [heh?]"
  star=4.99
  max=436
/>

上一个的另一个版本 同样好刷

<Beatmap
  bid=844014
  sid=386117
  preview="Kano - Stella-rium (Tsukuyomi) [Inner Insane]"
  star=4.99
  max=508
/>

常规 比较难

<Beatmap
  bid=1962182
  sid=744772
  preview="toby fox - Last Goodbye (Fatfan Kolek) [Extra]"
  star=5.11
  max=458
/>

跳跳

<Beatmap
  bid=1970829
  sid=942642
  preview="Nanahira - Chikatto Chika Chika (Agatsu) [Reform's Expert]"
  star=5.03
  max=413
  alias="チカっとチカ千花っ♡"
/>

大跳 比较难

<Beatmap
  bid=1265800
  sid=480765
  preview="3 Nen E Gumi Utatan (Nagisa & Kayano & Karuma & Isogai & Maehara) - Bye Bye YESTERDAY (Gero) [Expert]"
  star=5.06
  max=555
  alias="バイバイ YESTERDAY"
/>

比较难 各难度各图型都有

<Beatmap
  bid=1746869
  sid=720066
  preview="Yuzuki - Dear You (DJ Genericname DnB Remix) (Spkz) [Dear Spkz (Extra)]"
  star=5.17
  max=620
/>

好刷 pp不算多

<Beatmap
  bid=2025938
  sid=968171
  preview="MIMI feat. Hatsune Miku - Mizuoto to Curtain (Log Off Now) [Extra]"
  star=4.96
  max=257
  alias="水音とカーテン"
/>

跳 比较难

<Beatmap
  bid=4859801
  sid=1464487
  preview="NateWantsToBattle - Chug Jug With You, but i can't anymore (Smoke) [Mekadon's Expert]"
  star=5.15
  max=298
/>

pp很多 强度很高的跳 考验手速的时候到了

<Beatmap
  bid=4857996
  sid=2250663
  preview="Yousei Teikoku - Zetsubou plantation (Cut Ver.) (kolman) [Insane]"
  star=5.02
  max=530
  alias="絶望plantation (Cut Ver.)"
/>

同上

<Beatmap
  bid=712376
  sid=320118
  preview="Reol - No title (VINXIS) [Insane]"
  star=5.10
  max=476
/>

经典no title 5.75难度极其好刷

<Beatmap
  bid=848345
  sid=380545
  preview="Primary - Sweets Weekend (CaffeAmericano) [Sweet Neko]"
  star=5.35
  max=533
/>

比较难但是很好刷的跳

<Beatmap
  bid=4834211
  sid=2233944
  preview="Faylan - Path to glory (Game Ver.) (tomatas95) [Expert]"
  star=5.13
  max=579
/>

极度pp 强推

<Beatmap
  bid=777303
  sid=352726
  preview="Ito Kanako - Skyclad no Kansokusha (N a s y a) [1.048596%]"
  star=5.27
  max=559
  alias="スカイクラッドの観測者"
/>

有大跳和爆发 比较难 好听

<Beatmap
  bid=2666261
  sid=1283387
  preview="Akatsuki Records - KARMANATIONS (-Rik-) [Insane]"
  star=5.39
  max=1360
/>

考研耐力和戳力的 pp很多

<Beatmap
  bid=2444910
  sid=1172199
  preview="NIGHTMARE - Alumina (TV Size) (Kuki1537) [My World]"
  star=5.20
  max=353
  alias="アルミナ (TV Size)"
/>

跳 pp很多

<Beatmap
  bid=2014469
  sid=962088
  preview="MIMI feat. Hatsune Miku - Marshmary (Log Off Now) [Horizon]"
  star=5.11
  max=433
  alias="マシュマリー"
/>

非常简单的纯跳图 我的190pp

<Beatmap
  bid=1556932
  sid=737710
  preview="MY FIRST STORY - REVIVER (Underdogs) [Insane]"
  star=5.37
  max=551
/>

比较难 比较综 强度比较高 pp比较多

<Beatmap
  bid=836907
  sid=375648
  preview="S3RL - Bass Slut (Original Mix) (Secretpipe) [Kyshiro's Extra]"
  star=5.37
  max=883
/>

长bass slut 同样的好刷

<Beatmap
  bid=748983
  sid=325158
  preview="AKINO from bless4 & CHiCO with HoneyWorks - MIIRO vs. Ai no Scenario (monstrata) [Kyshiro's Extra]"
  star=5.35
  max=475
  alias="海色 vs. アイのシナリオ"
/>

古老的pp图 但是很难

<Beatmap
  bid=952620
  sid=438535
  preview="NIGHTMARE - the WORLD  ~TV Size~ (smallboat) [Kencho's Extra]"
  star=5.26
  max=428
  alias="the WORLD ～TVサイズ～"
/>

很难 但是pp很多

<Beatmap
  bid=4761697
  sid=2236406
  preview="Kawada Mami - u/n (Cut Ver.) (browiec) [Remilie's Expert]"
  star=5.36
  max=437
/>

u/n 大跳和12跳 比较难但是很pp

<Beatmap
  bid=1956122
  sid=935111
  preview="DJ Fresh - Gold Dust (Sotarks) [MiracleE's Extra]"
  star=5.38
  max=464
/>

gold dust 很pp但是跳很长

<Beatmap
  bid=962979
  sid=444335
  preview="HO-KAGO TEA TIME - Kira Kira Days (Kagetsu) [Milan-'s Extra!!]"
  star=5.28
  max=577
  alias="キラキラ Days"
/>

强度比较高 pp很多

<Beatmap
  bid=4819984
  sid=2250201
  preview="Erabareshi - Motto, Nee Motto (TV Size) (NiniDialga) [Expert]"
  star=5.18
  max=254
  alias="もっと、ねぇもっと (TV Size)"
/>

从5*打起 30s的大串爆发

<Beatmap
  bid=4637581
  sid=2187360
  preview="Sasaki Sayaka - Unravel Sky (tomatas95) [Expert]"
  star=5.24
  max=627
/>

1212跳 比较难

<Beatmap
  bid=1067123
  sid=471261
  preview="ELISA - Dear My Friend -Mada Minu Mirai e- (TV size) (Rizen) [Insane]"
  star=4.04
  max=361
  alias="Dear My Friendーまだ見ぬ未来へー (TV size)"
/>

+dt 很好刷

以下是我出群时的bp

*编者注：看不清图片*`,xv=Object.freeze(Object.defineProperty({__proto__:null,default:kv},Symbol.toStringTag,{value:"Module"})),Bv=`---
date: 2026-09-17
type: recommend
---

# jiaofeng 的新人群遗言

<Player
id=37418919
name="jiaofeng"
country=3555
global=215743
from="CN"
accuracy=98.29
level=99
progress=57
performance=3656
/>

## 碎碎念：

这是我，一个25年2月入坑的小登，终于在26年9月17号刷pp出群了（等不及群赛分组了，再憋下去我怕我水平倒退）。实际上，我在这一年半的时间里，大部分时候都在afk。25年2月入坑打到4-5月2kpp（中间买了个o3c小键盘），打了25年6月的同屏图之后感觉到达了瓶颈。就afk到9-10月打群赛

![取得了第十七名的好成绩](/images/lastwords/37418919-1.jpg)

群赛打完就又afk。下一次26年2月过年打了几下，再之后6月份同屏图回来了一下，（忘了提交回放了）导致没能上群里的最后一个同屏图视频。在这期间我一直保持着2000pp的成绩。

![26年7月27日！pm成绩](/images/lastwords/37418919-2.jpg)

直到命运的转折点：8月十几的一个下午，我发现我自己的旧鼠标{富勒l102【2010年产，99.2g，固定125hz，800dpi，长度100mm左右（看着很烂其实很烂）】}右键失灵了，于是我就在网上搜索了好久，才选定了我目前在用的鼠标“灵动v9 ultra”，我选这个鼠标的原因也很简单，模具与我旧鼠标相似，我适应上手会很快。而说到适应鼠标，我便打开了osu，准备尝试打图。在随后的几天，我迅速适应了鼠标的手感和重量，开始了我的飞升之旅。

随后，我的得知了新人群将会举办群赛的消息，于是开始准备压pp（其实就是故意miss几个降点acc），等待群赛拿奖励，于是一直到2997pp，实在是压不下去了，加上这种方式对我自己其实也是一种折磨，遂放弃群赛奖励，准备享受比赛。

这就是我到这里一路的历程。

## 设备：

电脑：天选5 pro 原厂512GB+1GB内存 i7-13650HX 4060laptap

鼠标：灵动v9 ultra 1000hz 1600dpi 关闭鼠标加速度（改回报率还会影响鼠标移动速度，我测试了一下1000hz，1600dpi和125hz，800dpi移动速度差不多）

键盘：o3c 按键触发设置跟群精华一样

打法：单双（可临时打出混双）

## 打图历程：

看到这里，我将会分享我具体的打歌阶段（从3星开始），也会推荐一些代表性歌曲并点评（不会设置标准，想打就打），由于我本人是一名综合（实际上原先想的是连打）玩家，所以不会单推某类图，想要推荐某类的可以出门右转去铺面推荐里面找，这里仅做分享。

### 三星：

首先从三星开始，这一阶段在我1000pp到1800pp，我大量打三星图，并且开始接触四星图，并且由于aim缺陷，我开始大量找三连打连打图去打（希望通过连打补足跳的短板）。

代表性的图有：

<Beatmap
bid=4408518
sid=1861083
preview="Lindsey Stirling - Take Flight (AmeThysTas) [Aiman Joe's Hard]"
star=3.45
max=1165
/>

这张图拥有大量的三连打和五连打接滑条，是我连打入门的图谱。我当时直接练到了我全连高acc，也为我之后的连打之路打下了坚实的基础。

<Beatmap
bid=484543
sid=171421
preview="M2U - Quo Vadis (buhei) [Hard]"
star=3.71
max=768
alias="君往何处"
/>

这首歌玩过齐秦太帅的人应该听过，谱面上同样有一定的三连打和五连打，十分顺手。

<Beatmap
bid=2834965
sid=1274121
preview="Neru & z'5 feat. Kagamine Rin & Kagamine Len - The Disease Called Love (Addy2607) [Hatsune Miku's Hard]"
star=3.49
max=926
alias="病名为爱"
/>

这首歌可以当做进阶去打，其中有几处三连打和四连滑条的配置，加上高潮段比较tech的节奏变化，当你打好后可以说大部分三星图都可以打了。

<Beatmap
bid=5159337
sid=2362177
preview="uma vs. Morimori Atsushi - Re: End of a Dream (-cy) [Tokyo 727's Hard]"
star=3.76
max=636
alias="终梦"
/>

这张图放在这里，是因为它较高的bpm带来了较快的移动要求，这种速度的移动在四星较为常见，因此会读这种速度的谱子，那也就可以去尝试四星了。

### 四星：

你会在群里见到这种说法：四星才算是真是入门了osu。这句话完全没错，四星开始，各种跳图，tech图，连打图开始真正分化，虽然相比五星还是温和了些，但对于刚刚脱离婴儿瞄准的四星入门者来说却是很难的。我当时不得不去练习跳图，否则我连正常打连打图的资格都没有。在我现在看来，四星比三星多的技能只有一个：aim。在四星，note之间开始出现更长的距离，而无论是jump还是flow aim，都要求你用较快的移动速度来对准note并点击。因此，无论你打的是跳图还是连打图，这一阶段主要需要练习的就是aim技巧。从小跳到大跳，从原地连打到移动连打，aim从容易到难，便是通向五星的阶梯。

<Beatmap
bid=323875
sid=127712
preview="Primastella - Koigokoro (Luerxa) [Delis' Insane]"
star=4.13
max=612
alias="恋心"
/>

这张铺面bpm较低，适合刚刚开始入门跳图的新手，注意一下，中间可能会有一串较慢的串，同时它的主难也可以试试。（至于之后跳图的选择有很多，有间距大的，有速度快的，看你怎么选了，我就只推荐一个入门的。）

<Beatmap
bid=4614503
sid=2180676
preview="Aiobahn feat. Yui Makino - non-reflection (Narkvar) [ratarok's non-insane]"
star=4.79
max=941
/>

这一阶段开始，铺面推荐系列就发力了，kagami的连打推荐有大部分类型的连打图，我也有许多连打图都是那里面来的，因此我只推荐一张不在推荐里面的图。回到这张铺面，大量的原地三连打五连打，只要有基础其实很好打，这张图难的地方最主要在于各个连打位置比较分散，需要大量的跳，也就是所谓的跳切。打好了这张图，在面对以后类似的跳切图，也便有了基础。需要注意的是后半段有连续三连打，可能导致失败，要注意。

<Beatmap
bid=936947
sid=383147
preview="Camellia feat. Nanahira - Tsukitourou (jonathanlfj) [Raose's Hard]"
star=4.14
max=1610
alias="月灯笼"
/>

这张图原本是3\\.99\\*，在星级系统更新之后变成了现在的星数，虽然大部分都是走路段，但是bpm较高，点击频率较高，排列需要一点读图能力，同时全歌时长比较长。因此我当时在熟悉之后，选择这张图锻炼耐力并作为热手图。

<Beatmap
bid=2217566
sid=1054931
preview="PassCode - Ray (Akitoshi) [Insane]"
star=4.85
max=1389
/>

这张图是让我达到3000pp的图，全曲速度较快，节奏稳定且明显，有大量小跳，穿插三连打和五连打，排键及其顺滑，算是长综的入门难度。我对这张图的最高评价是：这是我在2kpp瓶颈期都能打的图。

### 五星

既然都到五星了，也就对游戏有了基本的理解，明白各种图的类型，并且在某一能力方面有较为突出的表现。在这里我也就只能是推荐我自己打的图，以供练习或者是刷pp。

<Beatmap
bid=4758871
sid=2239344
preview="Airi Miyakawa - Ao Raid (Sotarks) [Wen's Insane]"
star=5.06
max=942
alias="青色突袭"
/>

<Beatmap
bid=4758869
sid=2239344
preview="Airi Miyakawa - Ao Raid (Sotarks) [Extra]"
star=6.00
max=972
alias="青色突袭"
/>

能作为[新人群s32群赛](../../../events/matches/32.md)赛图，这张图是比较简单的跳。当然，简单是相对其他五星跳图而言，它本身205bpm的速度还是决定了它拥有5星的星级。而更进阶的难度就祝你们好运能打出pp吧。

<Beatmap
bid=4793956
sid=2253765
preview="Daoko - Allure of the Dark (Shurelia) [Tremble]"
star=5.33
max=1287
/>

这张图的四星难度是新人群的26年6月同屏图，是张不错的综合。而五星难度难点基本上在中间那一段的三连打五连打接滑条的切上，以及后半段移动较为缓慢的两个长串，能过的话基本就能吃到pp了。

（什么？你要更难的切？这首热异常绝对能使你的手指打结。）

<Beatmap
bid=5133167
sid=2375676
preview="25-ji, Nightcord de. x KAITO - Heat abnormal (Dailycare) [Insane]"
star=5.36
max=1243
alias="热异常"
/>

纯粹的切图，高潮段全是三连打滑条接二连打，同时后半段也有四连打和五连打接五连打滑条的组合，你问我怎么过？这就是你的事情了。

串：你问我串？

<Beatmap
bid=2556428
sid=1152932
preview="Horie Yui - Asymmetry (MaridiuS) [PandaHero's Extra]"
star=5.95
max=1574
alias="不对称"
/>

你要的串（无感情）。这张图其实算是很难的串图了，有10个的短串，也有近30个的串，同时中途虽然不会突然变向，但是依旧对flow要求较高，需要同时拥有能够稳定打串和移动的功底。【而在写这篇遗言的时候，我正好有（）】当然，如果你能过天堂塔五星，那这首的串其实也很那个差不多（甚至还简单些）。

Tech：你问我tech？这我真没有。

好吧，就随手推一个，不过由于我不玩重度的tech，因此如果特别难别怪我下手没轻没重（）

<Beatmap
bid=5644693
sid=2547062
preview="Monster Siren Records - Innocence ([SHK]SparkNight) [Welcome Back, Kal'tsit]"
star=4.95
max=1036
/>

是的你没看错，甚至不是五星。这首歌我当时听着好听就下回来了，结果过了舒缓的前奏我才发现，这是一张滑条tech（这种谱子到底是怎么给上架的）。至今游玩人数不多，我看好你榜上留名。

<Beatmap
bid=1773928
sid=848285
preview="fripSide - an evening calm (pappl e 104) [Sunset]"
star=5.12
max=2030
/>

和群u多人游戏出来的一张强双的小跳图（感谢大自然的馈赠），时间较长，因此星级上了5星。（实际上我单双也能打打），强双的朋友们可以来刷pp了。

## 尾声：

其实回顾这一年半，由于我afk时间太长，以前的同级生都已经升去高阶群了，同时也有很多后进的群u，已经先我一步去进阶群了，而我才刚刚出新人群。Emmm只能说是享受游戏，享受音乐吧，我一直都是抱着这个心态来玩osu的。如果不是群赛限制，我估计也不会压pp，而是顺其自然刷出去。

在这里，感谢zhidao（指导），halukaze（花田），Dawn1220（大蜗牛），lain0000（莱茵四个蛋），mawofang（马我方），iLVDIJUN（爱驴帝君），googujiang（咕谷酱），carl0tta33（老鼠），Nagaelku，LGX\\-Gamer，fiowboat，sword1921，2293002405，MO\\_ming【即将出群】，chinwen【已出群】，mengzuan【已出群】等群友的陪伴（去mp吧，群u总是在选图的时候会给你出其不意的惊喜），尤其感谢zhidao给我的压力（80），LGX\\-Gamer给了我他的bs成功让我刷了bp1，halukaze给我推好玩的图，lain0000教会了我如何直播osu。大家在我走后也要好好相处啊。

以及BenZn（苯锌），\\-inui sana\\-（cy），SuzumiyaHaruh1（凉宫），nyauta等管理的帮助和解惑，尤其感谢BenZn帮我选了好几张图，她也一直在鼓励新人出群（感觉有养成的意思），还有\\-inui sana\\-帮我解答了关于我外设方面的一些疑惑（其实一般都是我看cy解答其他人的问题，同时自己记下来的）。

有不懂的问题就去问群u和管理，总会有人给你解答的。

（由于刷的太投入了，我甚至忘记了留一个3kpp的bs，pm和pp，不过这也能看。）

我的bs200（不具有跳图参考性）：

<Score
bid=1054507
sid=495334
preview="Raujika - Roseo Neige (sahuang) [Tranquility]"
star=4.80
max=1040
mode="o"
accuracy=99.64
combo=822
rank="s"
performance=172
/>

<Score
bid=5752890
sid=2580789
preview="MIMI - Kuu ni Naru (feat. Hatsune Miku & KAFU) (isekaijoucho) [Kumocha's Petals]"
star=5.12
max=799
mode="o"
accuracy=98.53
combo=776
alias="化为虚无"
rank="s"
performance=164
/>

<Score
bid=3986450
sid=1927451
preview="Nor - RE Aoharu (Kuse) [Setu's Insane]"
star=5.04
max=788
mode="o"
accuracy=98.63
combo=786
rank="s"
performance=161
/>

<Score
bid=4993785
sid=2296532
preview="PassCode - SKILLAWAKE (Akitoshi) [Expert]"
star=5.78
max=1430
mode="o"
accuracy=96.19
combo=737
rank="s"
performance=159
/>

<Score
bid=840253
sid=384535
preview="Feint - Stray (FCL) [Insane]"
star=4.94
max=445
mode="o"
accuracy=100.00
combo=445
rank="ss"
performance=158
/>

<Score
bid=5137227
sid=1286874
preview="Poppin'Party - Yume wo Uchinuku Shunkan ni! (Livermorium) [Insane!]"
star=5.13
max=1502
mode="o"
accuracy=98.99
combo=819
alias="在击穿梦想的那一瞬间！"
rank="a"
performance=152
/>

<Score
bid=4758871
sid=2239344
preview="Airi Miyakawa - Ao Raid (Sotarks) [Wen's Insane]"
star=5.06
max=942
mode="o"
accuracy=98.72
combo=748
alias="青色突袭"
rank="s"
performance=144
/>

<Score
bid=4268292
sid=2037770
preview="SILENT SIREN - Hachigatsu no Yoru (Akitoshi) [Insane]"
star=5.23
max=1455
mode="o"
accuracy=97.87
combo=860
alias="八月的夜"
rank="a"
performance=143
mods="HD"
/>

<Score
bid=2992124
sid=1436167
preview="BPM15Q - Go Shoot! (Venyera) [Melo's Insane]"
star=5.55
max=1646
mode="o"
accuracy=98.41
combo=575
alias="射门！"
rank="a"
performance=142
/>

<Score
bid=2894585
sid=1123764
preview="BPM15Q - GOOD LUCK (Venyera) [alacat's Insane]"
star=4.87
max=824
mode="o"
accuracy=99.22
combo=703
rank="a"
performance=142
/>

**去进阶群后不要把我认错了，我是jiaofeng（交锋），不是jianfeng**`,Av=Object.freeze(Object.defineProperty({__proto__:null,default:Bv},Symbol.toStringTag,{value:"Module"})),Ev=`---
date: 2025-06-01
---

# autp 的遗言

<Player 
  id=37449856
  name="Osu_Autp"
  country=4357
  global=278491
  from="CN"
  accuracy=96.54
  level=98
  progress=69
  performance=3003
/>

在经历了 42 天的时间我离开了这里

2025.2.16 osu 打开一张图

2025.4.10 加入新人群

2025.4.15 数位板

2025.5.22 离开新人群

说来也只是短短的一个半月但在这里还是很愉快的（节目真多

或许你们不会打开这封遗言的说

但打开了还是给你们一些对于新人有用的建议吧

## 游戏教程

在我刚进入新人群的时候面对的问题，如果你作为一个新人又恰好点开了我的文档，不妨好好看看

常规的问题或许会有很多热情的人来帮助你，既然这样来谈谈不是很常规的

数位板与鼠标

在你入群一段时间后你可能会开始产生对设备的焦虑，明确的说其实这是无意义的，新人阶段最重要的是体会游戏所带来的美好，好的设备虽会带来更好的体验，但自然新人群的毕业设备所限制的上限自然不会非常高，如果你犹豫不决那么请看看你的钱包是否支持本次消费

## 鼠标

设备：atk 裂空 x1Pro

或许你们在游玩的过程中会觉得手掌手指的强烈酸痛，放轻松任何时候都应该是这样（也请不要误解换了设备疼痛就会好）

回报率 1k 就足够

无法准确定位

请在设置界面调整你的灵敏度吧，它不需要非常高的数值同时你也可以参考群内键鼠选手或许会有帮助

请多尝试游玩，放轻松，作为一个重 aim 的游戏你需要的是平滑的移动到球上，再点击键盘，你可能会因为满屏幕的球不知所措将准星胡乱摆放，解决方法就是跟随引导线一步一步来

## 数位板

设备：wacom472

当你已经成为一位合格的数位板玩家，那么我对你唯一的建议便是贴膜和小力游玩，你应该加强对手腕的控制而不是一味将准星蹭板（笔会因为力太大压坏，贴膜也是为了保持水平的稳定发挥

## 映射

常见的问题请问问热心的群友吧！

关于映射我的建议便是适合自己的最好（从 1:1.5 的比例开始调整），请不要偷懒照抄，同时也不要使用极端映射，相信我他对你的游玩好处几乎为 0

笔请贴上手胶，他的作用或许不亚于一个高刷显示器

## 外围设备

如上述 osu 对硬件要求并不高，你只需要设置好你目前可以有利于 osu 的设置就可以，当然群文件里就有

## 机械键盘与磁轴

键盘并不会是你在进入进阶群的瓶颈，击打键盘不流畅才是目前最应该解决的问题

## 显示器

高刷的必要性确实很高，但请不要冲动消费，毕竟 60hz 进入进阶群或者毕业的也不少

## 关于伽马

可能有人会告诉你拉低或者拉高显卡显示的某一项数值会让你读谱更容易，或者使用高亮皮肤和纯黑背景来游玩，相信我，请不要这样做，这样的做法带来的提升并不会让你从 1500 飞升到 2000pp，但对于眼睛的伤害是不小的，换句话说这样难道不麻烦吗

当你接触 ar9.4 bpm200 以上的时候可以尝试（实际低于 ar10 并无明显区别）

## 关于 pp

实际上我并不推荐为了 pp 而去刷 pp，作为一个新手的我们要做的是多享受这个游戏听听自己喜欢的歌曲，这同时也适用于所有的音游

不必跟一些天赋很强或者适应游戏快的人做对比，当你开始享受游玩这个游戏的时候或许你已经成为人人羡慕的飞升 p了

数值焦虑问题，现阶段并不需要考虑数值，如 acc 游玩次数 ！pl ！pm 当你玩的舒服时它们自然不会低

不要尝试打不符合实力超的谱子（如果这样让你舒服请无视）不管怎么打它对你都是 0益

关于 mod 的问题，我的 bp 并没有很多的 mod，我同时也不建议在 4\\*以下的谱子加入任何 mod，任何难度不应该开启如 nf 这种纯无害 mod，它会使你无法准确把握高 hp 节奏，低星 mod 的使用无法让你学会任何东西，在无法无压力 4\\*（tech 除外）到 5-5.7 94acc 的时候不要尝试 mod 而是习惯高难度的排列

我希望你们可以开开心心的度过新人时期的时间

bilibili：Osu\\_Autp

抖音：Osu\\_Autp

以下是我的 bp 参考

*编者注：Word 缩小看不清了*`,Tv=Object.freeze(Object.defineProperty({__proto__:null,default:Ev},Symbol.toStringTag,{value:"Module"})),Iv=`---
date: 2026-09-20
type: simple
---

# MyAngelNahida 的遗言

遗言：我咋知道啊我入群第一天有个群友刷c-type然后刷了个190pp被飞了，然后我也想玩然后刷了两天就刷了个219然后就被踢了...无语，屁股还没坐热呢，我b2才115pp呢总pp才2490呢我就被飞了。。。。。。大家都去刷c-type 5.45* 1620144

<Beatmap
bid=1620144
sid=757146
preview="Tanaka Hirokazu - C-TYPE (Arf) [Bonsai's BasS-TYPE]"
star=5.46
max=162
/>`,Mv=Object.freeze(Object.defineProperty({__proto__:null,default:Iv},Symbol.toStringTag,{value:"Module"})),Cv=`---
date: 2026-10-13
---

# DR1zyt的出群遗言

展示数值

<Player
id=37974276
name="DR1zyt"
country=4714
global=297444
from="CN"
accuracy=96.88
level=100
progress=1
performance=3026
/>

## 外设

CTL472 (未刷1000hz)

小夜 O3C (轴换了lekker 45 v2)

P2510H PLUS+ (24寸 1K 260hz)

## 出群时打的图

挑了一首喜欢的歌打

<Score
bid=1248887
sid=586877
preview="fourfolium - Hosshii no! (Kisses) [Kalibe's Extra!]"
star=5.90
max=1304
mode="o"
accuracy=96.36
combo=403
alias="ほっしーの!"
rank="a"
performance=141
/>

我是在 2026.1.10 进的新人群，出群日期 2026.10.10，我进群时已经2900PP了，好后悔没来早点刚来群赛就开始了，没能参加群赛有点遗憾，每天群里都好热闹，发成绩的

发成绩问问题的问问题聊天的聊天氛围很好 ୧⍢⃝୨，和群友一起mp也很开心，一开始

玩OSU是因为想找个练枪软件，谁能想到这游戏这么上头一玩就停不下来了，在玩OSU之前几乎没有任何音游基础虽然以前有玩过节奏大师，phira，冰与火之舞但都是一时兴起玩了几分钟就玩不下去了，以前每当我看到那些游戏时长比我低的轻轻松松就打出了我打不出的成绩我就有点不甘心，现在想明白了，游戏玩得开心最重要没必要比来比去的♪(^∇^*)，我变强的目的就是为了能够把自己喜欢的歌打好仅此而已，以前每天打半个小时就打不动了最高只能打3星图，当时觉得4星图太难了就一直不碰，一直打了90h的3星图之后才开始打4星，舒适圈待久了还是要出圈走走比较好，不然你都不知道你有多强，在110h时转了数位板，刚转板子当天还不太适应我当时甚至想把板子丢了继续玩鼠标，坚持了两天之后才找到适合自己的映射和舒服的握笔姿势，现在这块板子上也有许多划痕了奉劝各位要保护好自己的板子不要像我一样这么不注意如果你不在乎你的板子外观有划痕那当我没说，这一路走来我一直都是一个人直到120h左右突然有一天我刷到了Jiujiu147963的直播，我在他的直播间认识了一些小伙伴新人群也是他和我说我才知道的，本来是想卡个极限PP一直在新人群赖着不走的，但是这样我打歌时都会故意漏掉几个防止吃到PP，后来我想了想这样没有意义，实力发挥不完全打着也不顺心所以就在今天我飞啦，飞升前打歌我还是挺紧张的，一直想打个好成绩顺利飞升但是就是打不好，打了好久才终于打出了个还能看的成绩。

## 结语

就说这么多啦，祝各位能早日给自己喜欢打的歌打出理想的成绩，一起加油努力吧！(*ˋωˊ)b`,Pv=Object.freeze(Object.defineProperty({__proto__:null,default:Cv},Symbol.toStringTag,{value:"Module"})),Ov=`---
date: 2025-10-20
---

# Arika-suisui 的出群遗言 qwq 喵

<Player 
  id=38021034
  name="Arika-suisui"
  country=4504
  global=285428
  from="CN"
  accuracy=97.45
  level=95
  progress=96
  performance=3000
/>

2025 年 6 月 13 号入坑，历时4个月出群。当初入坑这个音乐游戏纯粹是其他移动端音游到瓶颈了推不动了（所以我飞这么快与有音游经验有很大关系），也没想到一玩就上头了，入坑四个月以来移动端音游就没启动过。

本人键鼠玩家，入坑以来就用的G！5！0！2！鼠标作游玩鼠标，edpi 为 800x1.15，键盘倒是从机械键盘换成了磁轴键盘（这里推荐一下有能力买磁轴尽量买，是真好用）。

这里给所有新手玩家一个忠告：osu 的 std 模式作为一款对左手切指以及右手鼠标掌控力都高度要求的音游，难上手是必然的，不用对自己的成绩妄自菲薄，说不定那天就顿悟了呢（

以下放一下我的 bp，如果你是 2000pp 以上且熟悉三连、五连、跳（主要）配置的玩家可以打打我 bp 里面的曲目喵：

*Welcome to osu! And see you next time! (in 进阶群)*

<Score
  bid=5314363
  sid=2436971
  preview="Mei You Hua Xiang De HANA - Science (feat. Kasane Teto SV) (Cut Ver.) (MeAqua tete) [OnLoong's Insane]"
  star=4.78
  max=653
  mode="o"
  accuracy=0.995323
  combo=653
  rank="s"
  performance=162
/>

<Score
  bid=5235352
  sid=2411013
  preview="DECO*27 - Cherry Pop feat. Hatsune Miku (Andrea) [Laurier's Insane]"
  star=4.92
  max=895
  mode="o"
  accuracy=0.984869
  combo=523
  rank="a"
  performance=146
/>

<Score
  bid=2025942
  sid=968171
  preview="MIMI feat. Hatsune Miku - Mizuoto to Curtain (Log Off Now) [Lucid]"
  star=5.61
  max=265
  mode="o"
  accuracy=0.955536
  combo=156
  rank="a"
  performance=146
  alias="水音与窗帘"
/>

<Score
  bid=5016472
  sid=2328218
  preview="MIMI - Science (feat. Kasane Teto SV) (Rino Inosaki) [Amats' Insane]"
  star=4.77
  max=949
  mode="o"
  accuracy=0.987611
  combo=949
  rank="s"
  performance=143
/>

<Score
  bid=4692766
  sid=2214499
  preview="konoco x Kobashiri. Sound produced by MIMI - Bullets (- Nilou -) [Kanui's Insane]"
  star=4.58
  max=846
  mode="o"
  accuracy=0.991153
  combo=846
  rank="s"
  performance=142
/>

<Score
  bid=2025938
  sid=968171
  preview="MIMI feat. Hatsune Miku - Mizuoto to Curtain (Log Off Now) [Extra]"
  star=5.14
  max=257
  mode="o"
  accuracy=0.969164
  combo=257
  rank="s"
  performance=141
  alias="水音与窗帘"
/>

<Score
  bid=5271737
  sid=2422687
  preview="Will Stetson - Of Our Time (osu! Edit) (Sotarks) [Andrea's Another]"
  star=4.95
  max=776
  mode="o"
  accuracy=0.984815
  combo=728
  rank="a"
  performance=141
/>

<Score
  bid=2118443
  sid=983911
  preview="S3RL - Bass Slut (Original Mix) (Fatfan Kolek) [Reform's Filthy Expert]"
  star=5.01
  max=492
  mode="o"
  accuracy=0.976577
  combo=214
  rank="a"
  performance=135
/>

<Score
  bid=5271745
  sid=2422687
  preview="Will Stetson - Of Our Time (osu! Edit) (Sotarks) [Laurier's Another]"
  star=4.94
  max=812
  mode="o"
  accuracy=0.982079
  combo=454
  rank="a"
  performance=134
/>

<Score
  bid=1988748
  sid=952409
  preview="MIMI feat. Hatsune Miku - Ai no Sukima (Log Off Now) [Extra]"
  star=5.08
  max=347
  mode="o"
  accuracy=0.977602
  combo=242
  rank="a"
  performance=132
alias="哀伤的隙间"
/>

<Score
  bid=5204788
  sid=2390209
  preview="Porcelain Black - Pretty Little Psycho (Nightcore & Cut Ver.) (Mita) [Kosi's Another]"
  star=4.61
  max=200
  mode="o"
  accuracy=0.992891
  combo=199
  rank="s"
  performance=131
/>

<Score
  bid=869197
  sid=399358
  preview="KANA-BOON - Silhouette (Kagetsu) [Kage]"
  star=5.26
  max=458
  mode="o"
  accuracy=0.964539
  combo=287
  rank="a"
  performance=129
/>

<Score
  bid=3795104
  sid=1846677
  preview="MIMI feat. wanko - Minimum (Log Off Now) [Insane]"
  star=4.63
  max=666
  mode="o"
  accuracy=0.981944
  combo=665
  rank="s"
  performance=128
/>`,Rv=Object.freeze(Object.defineProperty({__proto__:null,default:Ov},Symbol.toStringTag,{value:"Module"})),Nv=`---
date: 2026-09-20
---

# XiaFeng 的出群遗言

这里是夏风，不是虾缝）我的osu主页：https://osu.ppy.sh/users/38737489‬欢迎互mu
于2025.11.22入坑osu，在这里郑重感谢我的导师ZnCookie，是他带我了解了osu这款游戏并让我认识了许多朋友）
此外，在新人群中我也同许多网友一起进行了mp和交流，如jiaofeng halukaze等在此不一一列举了，总之非常感谢新人群各位的陪伴
接下来就说说我自己的osu历程）下为我的个人信息（何拉伸）

<Player
id=38737489
name="XiaFeng"
country=4647
global=292631
from="CN"
accuracy=94.51
level=95
progress=18
performance=3017
/>

![](/images/lastwords/38737489-1.jpg)

本人于2000pp之前一直是条鼠标大区而且很少在新人群露面，那时候的我被鼠标折磨的痛不欲生（其实就是不知道有防滑贴这个东西））于是转板

转板后也是很快就起飞了，算上适应的时间七天刷了300pp，所以说板子真是个好东西啊）

本质pp刷子，从来没觉得刷pp开心过.jpg

下面是我的bs（length<120）

<Score
bid=4834210
sid=2233944
preview="Faylan - Path to glory (Game Ver.) (tomatas95) [Scarlet Vision]"
star=5.73
max=610
mode="o"
accuracy=97.05
combo=516
rank="a"
performance=175
/>

<Score
bid=1181933
sid=557832
preview="Hanasaka Yui(CV: M.A.O) - Harumachi Clover (KuranteMelodii) [Mochi's Insane]"
star=5.20
max=136
mode="o"
accuracy=98.09
combo=136
alias="等待春天的三叶草"
rank="sh"
performance=153
mods="HDDT"
/>

<Score
bid=5395689
sid=2463664
preview="renforshort - hate the way you love me (nightcore & cut ver.) (Mimari) [kumocha's extra]"
star=5.14
max=341
mode="o"
accuracy=98.18
combo=340
rank="s"
performance=152
/>

<Score
bid=4834218
sid=2233944
preview="Faylan - Path to glory (Game Ver.) (tomatas95) [No. 999]"
star=5.81
max=625
mode="o"
accuracy=90.95
combo=520
rank="b"
performance=145
/>

<Score
bid=4907182
sid=2295884
preview="Porcelain Black - Pretty Little Psycho (Nightcore & Cut Ver.) (Fufla) [Insane]"
star=5.73
max=266
mode="o"
accuracy=92.32
combo=231
rank="b"
performance=139
mods="HDDT"
/>

<Score
bid=4873751
sid=2282704
preview="Marina and the Diamonds - Bubblegum Bitch (Nightcore & Cut Ver.) (Parad0xa) [Tylerderp's Extra]"
star=5.08
max=332
mode="o"
accuracy=95.59
combo=330
rank="s"
performance=134
/>

<Score
bid=5151102
sid=2382142
preview="Jessie J - Domino (Nightcore & Cut Ver.) (Kumocha) [Insane]"
star=5.67
max=325
mode="o"
accuracy=94.21
combo=154
rank="a"
performance=133
mods="HDDT"
/>

<Score
bid=1180151
sid=557733
preview="Hanasaka Yui(CV: M.A.O) - Harumachi Clover (Karen) [wkyik's Insane]"
star=5.65
max=144
mode="o"
accuracy=91.24
combo=80
alias="等待春天的三叶草"
rank="b"
performance=132
mods="HDDT"
/>

<Score
bid=5315678
sid=2436628
preview="Reol - No title -10 Years Later Edition- (Cut Ver.) (Sotarks) [Nymphe's Extra]"
star=5.66
max=408
mode="o"
accuracy=94.15
combo=204
rank="a"
performance=129
/>

看完你会发现很难在我的bs里找到不是pp图的图，啊哈哈（）

但刷pp也是有些好处的，aim jump能力都会得到提升（还有pp↑升，下面是我的pp分布

![](/images/lastwords/38737489-2.jpg)

怎么样，严重偏科这一块（）

因为感觉自己实在是写不出什么东西所以不写了直接进入推图环节吧

不喜欢刷pp和只打长图的朋友可以退出了因为我只会pp短图）

首推 Path to glory(game ver.）     

注：认准tomatas95出品

No title & No title (10 years.........)

The best of both worlds (nightcore & cut ver.)

miku三件套

一系列nightcore都可以打，都是很好刷的pp图（大概）

（想获得更详细更适合你的谱面请询问管理员）

（感觉推图也好费劲还是不写了吧）

此外，如果你感觉进入了瓶颈期，不妨尝试一下dt

dt不仅可以让你吃到 pp 也可以让你吃到pp（🤔）

要选择合适的图 dt，最好不要选择 bpm 超过160的图，很吃手速，如果你是ssg当我没说）

注意：dt 中慎重选择 hd，它有可能会让你的 acc 降很多（当然我是不管这些的 acc 是啥我不认识嘻嘻嘻）

其实在此之前已经写过一次遗言了，这是第二版，虽然感觉都是废话文学（对自己的文学水平感到悲伤😭）

没了，我想说的和推图只有这些，没错这就是 XiaFeng 一头大猪

![](/images/lastwords/38737489-3.jpg)

哦对了fp加我旮旯吃加我柚子厨加我什么厨都可以加我 看到这里的人我喜欢你）

![](/images/lastwords/38737489-4.jpg)
![](/images/lastwords/38737489-5.jpg)
![](/images/lastwords/38737489-6.jpg)
![](/images/lastwords/38737489-7.jpg)
![](/images/lastwords/38737489-8.jpg)`,Dv=Object.freeze(Object.defineProperty({__proto__:null,default:Nv},Symbol.toStringTag,{value:"Module"})),Lv=`---
date: 2026-10-11
---

# Twink1ingStars 的出群遗言

<Player
id=39005598
name="Twink1ingStars"
country=4760
global=286802
from="CN"
accuracy=95.82
level=91
progress=4
performance=3096
/>

好吧其实我不知道怎么写遗言，这两天也是开智了手感格外的好，本来昨天只是能批发 100pp，结果今天就飞出群了，在这坐着打了一下午手都打疼了刚刚好出群（

## 先说一下我的外设吧

数位板：wacom CTL-472（刷了1000hz固件）

如果你想转板的话基本可以无脑选 472，闲鱼 150 左右就可以买到一个二手的，全新 250 左右

如果你也想刷 1000hz 固件，教程在这：[[osu!无废话干货] 教你如何将你的数位板刷到 1000hz ](https://www.bilibili.com/video/BV1s2hX66ESr/)

照着做就行，千万记得备份

键盘：小夜k05he（感谢carl0tta33送我这个，换了磁轴确实提升很大）

磁轴参数详见群文件“O3C磁轴参数推荐.jpg“

如果你现在用的是机械或别的类型的键盘，换一个磁轴的提升确实很大，具体买什么键盘可以问群u，或者直接无脑小夜k05he

另外，对于 k05he 的设置我还有一点要说，千万别把上面的三个按键任意一个改成 esc 或者重开，很容易误触，如果非要改可以像下图我这么改

![](/images/lastwords/39005598-1.jpg)

这样就没那么容易误触导致暂停或者重开了

以及我的osu常用皮肤，直接在群文件搜索：“aristia hima(lolol233)无边框.osk“

这是我目前为止用的最久的也是我觉得最好用的一个皮肤

如果你不喜欢也可以在群文件里找一个或者问问群u用的什么

## 成绩

<Score
bid=2222070
sid=1061287
preview="Turbo - PADORU / PADORU (DeRandom Otaku) [Christmas Drift]"
star=5.77
max=179
mode="o"
accuracy=94.98
combo=74
rank="a"
performance=144
/>

这是我出群打的最后一张图↑

如果你在群里看到有人叫一张谱子为“车”的话，那大概率就是这张 （怎么感觉跟在写流水账作文似的）

总之你要是想刷pp的话，这张图还是比较推荐的，如果你想刷更多的pp，详见群文件：”[跳图推荐#刷pp！.html](../../recommend/BenZn.md)”

我的大部分pp图都是在这找的

当然如果你懒得去搜，也可以直接抄我的

<Score
bid=4207810
sid=2017137
preview="Kotoha - Haru o Tsurete (tomatas95) [A New Chapter Begins Between You and Me~]"
star=5.56
max=758
mode="o"
accuracy=97.48
combo=365
alias="携春同行"
rank="a"
performance=166
mods="DT"
/>

<Score
bid=5532470
sid=2510616
preview="TIA feat. Le Thien Hieu - Ai Dua Em Ve (Cukak Remix) (Agnes Tachyon Low Cortisol Edit) (Cut Ver.) (Bloxi) [High Cortisol]"
star=5.06
max=119
mode="o"
accuracy=97.87
combo=119
rank="s"
performance=157
mods="DT"
alias="皮质醇的小曲"
/>

<Score
bid=135385
sid=43100
preview="Matsumoto Tamaki - Tenshi Teki Kenpou Yonjou (KayeSara) [Hard]"
star=5.20
max=636
mode="o"
accuracy=94.88
combo=636
rank="s"
performance=152
mods="DT"
/>

<Score
bid=2222070
sid=1061287
preview="Turbo - PADORU / PADORU (DeRandom Otaku) [Christmas Drift]"
star=5.77
max=179
mode="o"
accuracy=94.98
combo=74
rank="a"
performance=144
/>

<Score
bid=5486313
sid=2495916
preview="Miley Cyrus - The Best of Both Worlds (Nightcore & Cut Ver.) (Mimari) [Popstar]"
star=5.59
max=195
mode="o"
accuracy=95.92
combo=135
rank="a"
performance=142
/>

<Score
bid=4130854
sid=1984719
preview="Hanon x Kotoha - Fuwari (Kyss) [Pepekcz's Expert]"
star=5.51
max=691
mode="o"
accuracy=93.33
combo=432
alias="轻飘飘"
rank="a"
performance=139
/>

<Score
bid=764517
sid=346339
preview="Three Days Grace - Unbreakable Heart (Lumael) [Unbreakable]"
star=4.85
max=178
mode="o"
accuracy=98.86
combo=178
rank="s"
performance=136
mods="DT"
/>

<Score
bid=1711830
sid=816264
preview="55x55 - MY REZHEM KINOLENTY (feat. Cut The Crap) (Shmiklak) [CUT THE INSANE]"
star=5.07
max=158
mode="o"
accuracy=95.94
combo=158
rank="s"
performance=133
mods="DT"
alias="我们裁切着胶片"
/>

<Score
bid=5486311
sid=2495916
preview="Miley Cyrus - The Best of Both Worlds (Nightcore & Cut Ver.) (Mimari) [Kumocha's Extra]"
star=5.29
max=197
mode="o"
accuracy=97.58
combo=113
rank="a"
performance=132
/>

其中带蓝色标志的图如果你pp小于2000，暂不推荐，这些都是dt图，dt就是游戏中的mod “double time“会加快谱面的速度，虽然叫这个名字但是他只会让谱面速度x1.5

不过还是蛮快的，建议先把不加mod的图打好再来玩这些

## 还有一些我的经验↓

关于越级：我自己也是个爱越级的，刚玩的时候觉得低星的打了不爽，转头就下载了一个五星谱面，结果截止到现在打了两百多遍也没打到A评分，这还只是一个5.05星的谱子，可以看到我现在也125小时的时长，3000pp了，可我也并不能稳定打五星谱子，要越级最好只能比你现在能打（关于“能打“的定义就是能稳定95acc）的谱子星数多一点的，比如你现在可以稳定打4.8星的谱子了，那你可以去试试五星出头的谱子，≤5.2就差不多，这样的越级可以获得一些提升，而不是像我那样跨度这么大，纯m来的

关于数位板映射：这个其实我也没什么好说的，适合自己的用着舒服的就是最好的，[[osu! 你真的懂如何用数位板吗？] Part.2 调整你的映射大小](https://www.bilibili.com/video/BV1wZ4y1U7pJ) 

这是我当时看的教程，可以参考一下

关于bot：群里叫雨沐以及消防栓的管理员都是bot，你可以通过它们查你的成绩，我上面放的那些成绩图就是bot生成的，在群里发出“！“带上相应指令就可以查，还是比较方便的，如果你不想在群里发出自己的成绩，可以用另一个雨沐，那个带qq官方bot标志的，直接添加私信就好了，打出斜杠→ “/“可以看到各项指令以及作用

注意群公告写了禁止超星也就是发出≥6星的成绩，bot会直接把你禁言

!h 这条指令可以查看bot的使用教程，当然我看不懂这个，所以我决定吧一些指令列在下方
常用的几个

- ~ 查询你的个人信息
- !p 查询你刚刚结算了的成绩，可以看到获取的pp，acc等各项数值
- !r 查询你刚刚放弃，或失败的成绩，和上面那个差不多，但是这个得慎用，如果你刚刚打了一首超星的谱子，不论失败还是放弃，只要打了＞10个物件就记录成绩，这时候如果你用这条指令就直接被禁言了
- !bs 查询你的最好成绩，上限200个，pp越高越靠前
- !s 查询指定谱面最好成绩，在这条指令后面加上指定谱面的号码就可以指定谱面，格式如下 !s+空格+数字
- !t 查询你今天（24h内）获取的所有最好成绩
- !ba 你的成绩分析总结
!m 查询指定谱面信息，在这条指令后面加上指定谱面的号码就可以指定谱面，格式如下 !m+空格+数字，也可以 加上mod，比如加dt，!m+空格+数字+加号+dt
- 以及最最最重要的，sr<6，这个加在任意指令后面就可以避免查到超星成绩，注意这个要和指令隔一个空格
- 重要的事情说三遍：sr<6 sr<6 sr<6
- 好吧剩下的我懒得写了（我为啥要写这个阿卧槽），这些也够用了应该，有什么不懂的，问问管理或者群u，会有人回答的，或者别人用啥指令你就用啥

写这个遗言好累啊不想写了，总结一下吧

新人群算是我待过氛围最好，群u最友善最热情的群了，我1月份加的群直到9月份才开始在群里活跃同时认真玩osu，活跃了也快一个多月了，每天和大家聊聊天，展示自己刚打出来的成绩，mp互相推图什么的非常有意思，我甚至还参加了我人生中第一场游戏比赛（新人群群赛），我能坚持玩这么多天osu也少不了群u和各位管理的一份功劳，真的很开心，我记得我一开始还不敢在群里查成绩，有次打出自己满意的成绩之后咬咬牙发出来了，马上就被夸了，开心的不得了，额总之谢谢大家对我的帮助以及陪伴，我就不像其他人把每个人的id一一列出来了，因为我怕给谁漏了，呃呃，那样我会有种罪恶感

哦对了我差点忘了，接下来是最最最重要的新人群规则怪谈环节

## 新人群规则怪谈环节

1. 千万不要把你要的群头衔（群头衔规则详见群文件“头衔图“文件夹内最新日期文件），放进一句话里发给群主，错误示范如下

![](/images/lastwords/39005598-2.jpg)

![](/images/lastwords/39005598-3.jpg)

![](/images/lastwords/39005598-4.jpg)

别学上面这个朱笔

引以为戒

要错了就不能改了，正确的要头衔方式应该是

“群主我来要头衔了“

“繁星“

“【小茂吐舌头表情包】“

2. 千万不要在报名了群赛的前提下，在开赛前刷pp，不要以为拿了图包你就固定是这个分段的了，最终结算比赛成绩时的分段按开赛当天的pp数计算，我报名群赛的时候是1500-1999的分段，然而我刷了pp，在开赛前到了2500pp以上，所以我的最终成绩是和2500-3000分段的人比，我被当路边一条踹飞了………

大家别学上面这个主笔

引以为戒

3. 千万不要查别人的成绩，要查也要加上sr<6，不加相当于扫雷，踩雷了直接睡死 

额好像没有了

那我的流水账就到此结束了，还有什么不懂得就问问管理问问群u，感谢大家感谢所有人，我上面说的这些可能有错的，不一定都是对的，如果你在询问他人的时候获得了更好的更正确的指导，那就忽略我的听他的，对了一定要多玩啊，多玩玩就可以变厉害刷到很多pp了，加油，欢迎来下一个群找我玩，加我osu好友私信我也可以喔:D`,Hv=Object.freeze(Object.defineProperty({__proto__:null,default:Lv},Symbol.toStringTag,{value:"Module"})),Fv=`---
date: 2026-10-09
type: simple
---

# Jiujiu147963 的出群遗言

<Player
id=39145159
name="Jiujiu147963"
country=2982
global=300434
from="HK"
accuracy=96.63
level=98
progress=90
performance=3008
/>

不是哥们我怎么就3000pp了，当时都不知道有这个新人群，一直都是自己抱着玩，直到尝试在dy直播，才开始有人拉着我来到这里，当时1900pp，感觉来到这里也没过多久就3000了。感谢一路给我推荐好玩的图的朋友，让我才有了今天`,Vv=Object.freeze(Object.defineProperty({__proto__:null,default:Fv},Symbol.toStringTag,{value:"Module"})),Kv=`---
date: 2026-10-04
---

# flowboat 的出群遗言

<Player
id=39491039
name="fiowboat"
country=4530
global=285203
from="CN"
accuracy=96.62
level=96
progress=62
performance=3092
/>

写出群遗言千万别删文件后缀 QAQ

进群已经过了20天了，呃呃呃，马上要被一脚踢出群了，害得我这么懒的人也被迫来写出群遗言了。

新人群真的是一个非常友好的地方，所以大家进群可以把自己的问题全提出来，肯定会有老登解答的。

我刚进群的时候打mp手都在抖，到现在已经变成老油条了。大家不要因为畏惧而不敢尝试，在后来你会发现mp是osu玩下去最大动力之一

我在群里看到过很人质疑自己，大家应该相信自己的潜力，能够不断变强。

我也曾经质疑过自己，不过后来发现纯属粉毛刷多了（小声）。

群友们么，由于我两次犯糖，所以这是我第三次重写，我快力竭了

zhidao和sword1921如果还没出群，你可以尽管问他们问题，他们能解决你绝大部分的问题

还有很多mp群友，Carl0tta33，jiaofeng，mo_ming，halukaze，Twink1ingStars，lain0000，dawn1220，mawofang，2293002405，inwet，mousexlunar_，halilu，LmX-Gamer，[GB]ChickenGold，i love 0000.......

如果你要疯狂刷pp，那就打时长短的跳图，刚开始一天几百是正常速度，慢下来也能2天100pp

但是我强烈建议不要被pp麻痹，我现在就在恶补之前刷pp图欠下的底力，我的建议是，用短跳图锻炼aim，之后一定要多打打长图，并且做到bs里的图减0.7sr的tech也能打，这样发展，你将会变成一个超级大龙

我已力竭，就写到这了

欢迎来进阶去找我玩哦`,zv=Object.freeze(Object.defineProperty({__proto__:null,default:Kv},Symbol.toStringTag,{value:"Module"})),jv=`---
date: 2026-09-28
type: simple
---

# VenusPaques 的出群遗言

<Player
id=40406578
name="VenusPaques"
country=2921
global=289336
from="HK"
accuracy=91.48
level=74
progress=25
performance=3056
/>

JUST PLAY MORE

大家好我是 VenusPaques，再无话说速速动手

![](/images/lastwords/40406578-1.png)

![](/images/lastwords/40406578-2.png)`,Yv=Object.freeze(Object.defineProperty({__proto__:null,default:jv},Symbol.toStringTag,{value:"Module"})),Uv=`---
date: 2026-09-19
type: simple
---

# carl0tta33 遗言

大家好鄙人刚入坑 16 天后因染上 CTYPE，而后 MREKK 附体被飞升

<Player
id=40414685
name="carl0tta33"
country=9892
global=641881
from="CN"
accuracy=95.92
level=57
progress=5
performance=1524.47
/>

当我意识到什么的时候已经来不及了

<Score
bid=1620144
sid=757146
preview="Tanaka Hirokazu - C-TYPE (Arf) [Bonsai's BasS-TYPE]"
star=5.46
max=162
mode="o"
accuracy=97.53
combo=162
rank="s"
performance=190.42
/>

如果有萌新看到这，听我说，不要玩 CTYPE！不要玩 CTYPE！不要玩 CTYPE！

说实话新人群是我见过群氛围最好的QQ群聊了，当然这一切离不开各位管理员和老登的付出感谢你们给萌新提供了一个好的成长环境！

最后感谢各位大佬的鼎力相助，感谢每一位在群里答疑解惑的群友，希望在进阶群能再次和各位相遇！我不是很爱报菜名，总之谢谢你们！
`,Gv=Object.freeze(Object.defineProperty({__proto__:null,default:Uv},Symbol.toStringTag,{value:"Module"})),Wv=`---
date: 2025-02-23
type: suggest
---

# r3milia 的出群遗言

<Player 
  id=4283631
  name="r3milia"
  country=3942
  global=260796
  from="CN"
  accuracy=98.64
  level=100
  progress=87
  performance=3013
/>

姓名：r3milia

班级：新人群24级11月班

UID：4283631

## 目录

- [入坑是因为FPS游戏](#入坑是因为fps游戏)

- [以下是我踩过的坑与一些建议](#以下是我踩过的坑与一些建议)

    - [外设（键盘、鼠标之类）](#外设键盘鼠标之类）)

        - [鼠标或板子？](#鼠标或板子)

        - [关于鼠标重量](#关于鼠标重量)

        - [按照重要性来排列：鼠标模具/舒适度>传感器性能](#按照重要性来排列鼠标模具舒适度传感器性能)

        - [关于鼠标传感器/纸面性能](#关于鼠标传感器和纸面性能)

        - [鼠标垫选择](#鼠标垫选择)

        - [键盘选择](#键盘选择)

        - [显示器](#显示器)

    - [左手的问题](#左手的问题)

    - [映射大小](#映射大小)

    - [右下角ms高/帧数不稳/卡顿](#右下角ms高帧数不稳卡顿)

- [最后](#最后)

**花了大概三个月时间出群，也总结出了一些新人刚玩时需要避免的误区与建议。**

### 入坑是因为FPS游戏

让我想起这个游戏的一切都要起源于这个视频（曾经是Starry忠实粉丝）：

[【Starry 直播录像 2024-05-20 完美天梯】](https://www.bilibili.com/video/BV1DZ421p76B/?share_source=copy_web&vd_source=25f1bb525d5d4d9972015bfc70a377c8)

然后又偶然间刷到这个：

[【CSGO职业哥练枪系列 TenZ（OSU!）】](https://www.bilibili.com/video/BV1X4411R7HC/?share_source=copy_web&vd_source=25f1bb525d5d4d9972015bfc70a377c8)

正因为当时竞技状态低迷，想找个办法热身来打CS。 

但是又因为点小球（KovaaK’s）太无聊而且手部紧绷容易受伤（RSI）。 

于是想起来在小学四年级的下午我好像创建过这个游戏的账号。 

我用一直以来的QQ邮箱试了一下，果然登进去了！

![](/images/lastwords/4283631-1.jpg)

2014 年四月玩了2PC就再也没动过了

<Score
  bid=3107464
  sid=1508139
  preview="EGOIST - Namae no Nai Kaibutsu (TV Size) (rew0825) [Azu's Cup]"
  star=1.66
  max=227
  mode="c"
  accuracy=77.42
  combo=30
  alias="名前のない怪物 (TV Size)"
  rank="d"
  performance=0
/>

这是当时的游玩记录，居然还是CTB！

后来就一直在玩了。一发不可收拾了！ 

从最开始的纯鼠→键鼠→键板 

本来只是想玩osu!来给CS热身的，结果到现在CS都很久没动过了，和我开黑的朋友都以为我死掉了。 

可以算是零音游基础，所以走了比很多人更长的一段路。 

也走了很多弯路：

![](/images/lastwords/4283631-2.jpg)

这是我的排名曲线，明显能感觉比大多数人平缓很多。 

而且我的上限很差，BP1只有151pp，全是靠下面BP叠上来的。 

用侯哥的话说就是我打的图比较杂，是对于大多数图来说不管打什么都能出pp但是打不高那种玩家，也就是不挑图。

### 以下是我踩过的坑与一些建议

#### 外设（键盘、鼠标之类）

##### 鼠标或板子？

如果你对你的控制鼠标能力非常自信且没有遇到鼠标漂移的情况，打长图也能适应，

并且有非常稳定上升的进步曲线，那就使用鼠标。 

如果你使用鼠标进步缓慢，遇到很长的瓶颈期，那可以试试板子。 

结合玩了四五年外设的经验可以在这里推荐一些外设选择的方法（很多外设KOL因为收了钱都不会和你说的点）

##### 关于鼠标重量

最开始了解到有osu!键鼠TOP还在使用G502的时候我是很难绷的，毕竟TOP就是TOP，肯定有什么过人之处吧，但是对于大部分人来说，选择一个更轻重量的鼠标是一个更好的选择。 

从个人健康的方面来说，一个被轻量化的鼠标能够减少患上RSI的概率。 

从鼠标厂商的方面来说，一个做了鼠标轻量化的厂商是可以反映出他们在设计方面考虑过了人机交互体验。虽然大部分厂商做的只是移除鼠标内的各种能保证模具、品控稳定的加强筋来投机取巧偷重量（说的就是你Finalmouse），而且也不知道如何做好鼠标的重心平衡（有很多头重脚轻的鼠标）。 

根据ZOWIE The Human & Machine Innovation Lab 测试出的数据： 

有线鼠标最佳重量是≤60g，无线鼠标则是≤70g。 

无线鼠标的甜点重量是65g，既保证了稳定性也有一定轻量化。 

**结论：无线鼠标选择重量在65g左右的，有线鼠标选择重量在55g左右的。**

##### 按照重要性来排列：鼠标模具/舒适度>传感器性能

关于鼠标的模具/握鼠方法： 

以Endgame Gear 产出的经典XM模具为例。 

XM系列模具成就了众多国产鼠标，最先一批做起来并在海外走量的国产鼠标例如LAMZU、VGN、Ninjutso 之类，他们最热门的型号都使用了类XM这一个经典的抓握模具。

对于不管任何游戏，大部分人使用的握鼠方法仍是抓握，既能保证灵活，也有一定稳定性。 

其他模具如类EC（炼狱蝰蛇V3 Pro、Pulsar Xlite V3、EC2-CW）等非对称模具为趴握特化的模具，如果你抓握觉得舒服也可以用，但是最适配抓握的仍旧是对称模具。 

同时对称与非对称无法简单概括鼠标模具差别，其他还有收腰、背部高度、尾部宽度、按键盖高度等要素影响鼠标握持感受。 

**结论：如果你觉得你现在的鼠标适用大部分情况且对你来说没有致命缺陷，那无需考虑其他鼠标。如果新购入鼠标，抓握玩家推荐对称模具，趴握玩家推荐人体工学模具。关于模具区别具体可以去[ELOShapes](https://www.eloshapes.com/mouse/find-similar?p=endgame-gear-xm2-8k)和[RTINGS.com](https://www.rtings.com/mouse/tools/3d-model-shape-compare/?)找到模具并对比。**

##### 关于鼠标传感器和纸面性能

完全没有必要去追求所谓“满血3395/Nordic 52840/真8K”之类的参数，这一切都只是鼠标厂商的广告宣传手段，因为实际性能是远远过剩的。真正在这方面影响你游戏体验的是厂商对于鼠标固件的调教。 

以我为例：本人使用3395（上一代原相旗舰传感器）的Endgame Gear XM2 8k有线鼠标和朋友双排上了FACEIT亚服10级并在10级游龙。

![](/images/lastwords/4283631-3.jpg)

Endgame Gear 是一家以固件调校为特色的鼠标厂商：

以Endgame Gear XM2we 为例，他用了大部分人看来垃圾无比的原相3370传感器，但是结合他非常顶级的固件优化，根据MouseTester测试出的结果和玩家的实际体验，爆杀同期绝大多数国产3395鼠标。 

**结论：鼠标传感器根本不是任何限制你游戏水平的因素，真正限制的是鼠标的跟手性也就是厂商对于固件的调教。**

##### 鼠标垫选择

打osu!首选**玻璃垫**，次选树脂垫，如果有其它游戏需求可以选择速度高的布垫。 

##### 键盘选择

键盘主要是轴体选择，我一般偏向触底力度大的轴体，大约60g左右的触底力度可以带来更好的击打反馈。

外设篇总结：关于外设具体的可以看B站评测，推荐几位UP主：[Nova游戏外设_鹤居](https://space.bilibili.com/6612699)、[三毛外设历险记](https://space.bilibili.com/3493074489575803)、[Kanye_East-47](https://space.bilibili.com/25572893)。

##### 显示器

显示器只需要看面板和刷新率就好了。 

在同样为240Hz的情况下，OLED＞TN＞IPS＞＞VA，所以首先排除VA面板。 

又由于OLED面板偏贵，所以首选TN或者IPS面板。 

平时有FPS游戏需求的建议选择TN面板。 

超过360Hz由于边际效应，对osu!这类游戏提升并不大。 

尺寸建议24-25英寸之间。过大的可能会影响读图，因为眼睛移动起来会很累。

#### 左手的问题

最开始我是使用中指＋食指单双，主指是中指。 

因为中指起手我能连打更快（手速测试210+bpm），单戳也很快。 

但是，我却发现因为过度发力与疲劳导致我中指逐渐按不下去了，单戳都无法稳定。 

表现类似于我的脑子给我手指一个往下按的命令但是我的手指却僵住了。 

于是我最后终于下定决心换食指。

换食指的最开始几天非常痛苦，因为几乎所有带一点连打的图都很难打，完全无法打出稳定的三连。

于是我想起来关于肌肉记忆的理论，我AFK了大约5天时间，这5天一点没玩（感谢龙之冒险新征程2整合包，让我忘记玩osu!五天）。 

然后让我的中指连打的肌肉记忆褪去了一部分，减少了因为中指连打过于熟练导致的左右脑互博的情况。 

AFK 归来后我发现，不管掌握什么新技能都要要从低BPM练起（因为换主指高BPM的根本打不了啊笨蛋！）。

因为低BPM的图，特别是长图： 

物件密度低、节奏缓，复杂的切和大距离的跳可以有更多时间反应。 

于是打了几天5*左右的低BPM长图，取得了一定成果！ 

ACC瞬间高了一大截，而且能打BPM范围更大的谱子了。 

这保证了你能达到应该有的水平，却无法保证突破你的上限。 

进行适当**越级**可以突破上限，但是不要越太大！ 

**打大部分都能够读懂的图，进行一个稍微超越舒适区的越级。**

**而不是纯靠本能和反应去抽奖。**

**因为用本能玩这个游戏是很累的，而且很难学到东西。**

**结论：学习新技能建议从低BPM循序渐进，保证ACC，不要糊COMBO！对于主指的选择，ACC和UR>单戳手速。如果要突破上限的话就适当越级。**

#### 映射大小

**不要去抄别人的映射大小，这是没有意义的。**这只会让你更加难受。

你只要把映射分为三档：大、中、小，就可以了。

改变映射大小的挡位会改变你的游玩方式，需要花时间重新学习。 

而在一个挡位区间内**微调则会让你玩的更加舒服**。 

90mm以上是大映射，60-90mm是中映射，60mm以下是小映射。 

**不推荐过于小的映射**，因为这需要非常强的控制力，会让你手过于紧绷而疲劳。 

对于**小映射**玩家，有一种投机取巧的方法就是购买Wacom原装的**柔韧笔尖**。

中间材料是橡胶材质，所以增加了摩擦力，增加了控制感。

#### 右下角ms高/帧数不稳/卡顿

对于电脑优化可以参考[Calypto’s Latency Guide](https://docs.google.com/document/d/1c2-lUJq74wuYK1WrA_bIvgb89dUN0sj8-hO3vqmrau4/edit?tab=t.0)，我也会在近期[我的B站](https://space.bilibili.com/5524404)发布教程的汉化版，以便国内玩家理解。

该教程适用所有游戏，包括日常办公之类的都会变快很多，如果你等不及的话可以先看英文版。

### 最后

最后非常感谢从进新人群以来认识且一直陪伴我的朋友。虽然他们玩的都比我好，但是还是愿意带我玩这个游戏，感到非常开心！

![](/images/lastwords/4283631-4.jpg)

谢谢大家❤`,$v=Object.freeze(Object.defineProperty({__proto__:null,default:Wv},Symbol.toStringTag,{value:"Module"})),Jv=`---
date: 2024-12-03
type: recommend
---

# BenPhantom 的出群遗言

<Player 
  id=5162173
  name="Sisyphus"
  country=9779
  global=241344
  from="CA"
  accuracy=99.0
  level=100
  progress=4
  performance=3002
/>

PS：我在结尾附了我的jumppack，希望跟我不熟的、跟我熟的米娜桑都能获得愉快的jump gaming experience。

当你看到这篇长长的流水账时，我已经离开新人群

\`\`\`dart

timeToTimestamp(time){

    let timestamp = Date.parse(new Date(time).toString());

    //timestamp = timestamp / 1000;

    console.log(time + "的时间戳为："+timestamp);

    return timestamp;
}

daysCount := timeToTimestamp( yourWatchTime )- 1721759642

printLn(daysCount) 

\`\`\`

秒了。

此在在死亡中达到了整全但也就此丧失了此之在。为此，若留有对过去的眷恋者，由于
文字以其对时间永恒性的反叛达成了对此在死亡的超越，因而在文字中寻找真理或渴求名为幸福的媚俗。在其中能够被找到的已经被找到，不能被找到的则持恒地被无果索求着。书写的阐释之人所能做到的即是讲述已被讲述的、强调已被识得的，以此与那索求者其慰藉或回报。在其中寻找真理者则不必费心，因为答案并不在这里。

从注册到现在，历时三个月达到了3000pp。说句实话，再给我一天的游玩时间我就能
够基本吃透三星图，从此打三星毫无难度可言，然而我已经失去了打大部分三星图折磨自己的兴趣和动力。

目前的极大难题在于其中切指的部分，我对此一窍不通。相应的，这个问题也延续到了
我在四星图中所遇到的切指上，从大约2100pp开始便困扰着我直到出群。当然，打四星导致如今AR8.5以下的图我想要读懂已经十分困难了，终于也体会到了大家所调侃的AR综合征——关键问题在于我AR10也不会……

不会切指、能读的AR范围有限。仅此两个问题已经足够判我的死刑，决定了我从开始
接触四星（2100pp左右，由于自己想要精通三星而花了很多工夫，2100也算是一个很晚的时间了）直到3000pp，能打的图都非常的有限——少量连打（主要为简单排列的三连和五连）和跳。

因为我打细碎一些的排列图非常非常的痛苦，所以我也不喜欢打。再加之每次MultiPlay打排列图、连打、串（可能有重合）时，我都完完全全垫底，甚至活都活不下来，毫无悬念，而打跳图时我一般排名会靠前一些。这些种种奠定了我是一个跳批的基础。

关于技术和风格，其实我有很多很多想说的，有很多很多大家也许会想知道的。但我即
刻能想到的或许不多。随便列几条罢:

避免只关注combo，而是同时关注accuracy以及combo甚至特别关注accuracy

避免经常性的越级打超出水平极大范围的图，保持个人数据中良好的acc 

背景暗度80%以上，集中注意力读图

尽量关闭背景视频以及谱面自带皮肤

（主观建议）多用透明皮肤，对于叠键的阅读较为理想

（主观建议且仅限OD8.5以下）高acc秘诀: 少打你打不了acc的图,或尽可能地打acc
在搜索中使用jump、aim、pack、flow、stream、training、practice 等关键词寻找练习图

提高流畅性以及好的游戏体验请多多询问CYCLC管理

多水群，大家的意见可以将信将疑，但多借鉴一定是好事

调整适合自己的不会疼痛且能够稳定的握笔姿势并加以持之以恒的稳固

数位板的映射在合适的范围内（对我来讲约是30-35mm）

保持一个良好的作息

使用小键盘而非薄膜键盘或大键盘

在感到疼痛时及时停下。

我还想额外强调一点。不要什么都在群里问。很多写代码的人、玩galgame的人、搞电
脑的人以及很多某一领域的精通者都会明白一句话，“百度是个好东西”。有一些非常之简单的问题，明明可以靠网络搜索来解决，就不必浪费他人的时间来解释。尤其是在osu.ppy.sh官网提供了非常好、非常详细的介绍文档的前提下，更没有理由在没用经过任何努力的情况下询问愚蠢的问题。根据朋霍费尔的书摘，“十分肯定的是，愚蠢是一种道德上的缺陷，而不是一种理智上的缺陷。有些人智力高超，但却是蠢人，还有些人智力低下，但绝非蠢人。”

也是写上小作文了呀。群里有很多很好的朋友：fufuOwO、Touma（跟我一起出群啦）、团子、Touhu老师、Minty、猫猫、hx123yx、killbusark 牢大、miklelf 小姐、ciallo 大神、Nikey、csafsd、2ky 大神、coldfish 大神……等等等等，我都数不过来了。大家都是很好的人，希望没来进阶的速来进阶重逢！（soon）

最后还是感谢ChestZone学长的陪伴和osu启蒙与引领吧。不仅是我代码上的老师，也是人生路上很好的伙伴。

## 跳批附录：

由于我不知道怎么索引到对应网页，一个一个找也非常麻烦，所以就用图片了。

*编者注：编者一个个找也非常麻烦，所以挑几张放上去*

<Beatmap
  sid=50771
  preview="Kozato - 45nen no Yukizakura (LoliSora)"
  star=4.47
  difficulties=[1.69,2.37,4.07,4.47]
alias="45年的雪樱"
/>

<Beatmap
  bid=1905558
  sid=912168
  preview="Veritas Unae - ~DISK 1~ (Yamakudzi) [Sadness]"
  star=3.82
  max=76
/>

<Beatmap
  bid=892543
  sid=409898
  preview="Komiya Mao - (can you) understand me? (Okoratu) [insane?]"
  star=4.62
  max=1098
/>

<Beatmap
  bid=977197
  sid=455482
  preview="Komiya Mao - (can you) understand me? (Revialink) [kitty's insane?]"
  star=4.32
  max=480
/>

<Beatmap
  bid=1773237
  sid=847930
  preview="LukHash - 8BIT FAIRY TALE (Delis) [Insane]"
  star=4.52
  max=720
/>

<Beatmap
  bid=1565700
  sid=742294
  preview="Konomi Suzuki - ALKATALE (Game Size) (KaedekaShizuru) [Insane]"
  star=4.13
  max=522
/>

<Beatmap
  bid=989493
  sid=461509
  preview="Marshmello - Alone (Zer0-) [Hard]"
  star=3.70
  max=1026
/>

<Beatmap
  bid=2439524
  sid=1130014
  preview="Yorushika - Bakudanma (Meg) [vick's Insane]"
  star=4.82
  max=1108
/>

<Beatmap
  bid=2118445
  sid=983911
  preview="S3RL - Bass Slut (Original Mix) (Fatfan Kolek) [TheShadow's Dirty Insane]"
  star=4.18
  max=471
/>

<Beatmap
  bid=2161929
  sid=1034008
  preview="DIVELA feat. Hatsune Miku - Beat Syncer (Log Off Now) [Insane]"
  star=4.58
  max=553
alias="节奏同步者"
/>

<Beatmap
  bid=1062873
  sid=358119
  preview="Sarah Connor - Cold As Ice (PH Electro Remix) (Nightcore Mix) (Gologle) [Frozen]"
  star=4.22
  max=911
/>

<Beatmap
  bid=1750033
  sid=716719
  preview="Station Earth - Cold Green Eyes ft. Roos Denayer (Mismagius) [Seto's Insane]"
  star=4.42
  max=492
alias="冷绿眼"
/>

<Beatmap
  bid=2628164
  sid=1264537
  preview="KISIDA KYODAN & THE AKEBOSI ROCKETS - Colorful (Cut Ver.) (SMOKELIND) [Reform's Insane]"
  star=4.41
  max=531
/>

<Beatmap
  bid=879358
  sid=391823
  preview="Pegboard Nerds - Emoji (Marmowka) [hackSL's Light Insane]"
  star=3.85
  max=866
/>`,Xv=Object.freeze(Object.defineProperty({__proto__:null,default:Jv},Symbol.toStringTag,{value:"Module"})),Zv=`---
date: 2024-12-03
type: simple
---

# Loyisa 的出群遗言

<Player 
  id=6071538
  name="Loyisa"
  country=3126
  global=184498
  from="CN"
  accuracy=97.46
  level=98
  progress=62
  performance=3963
/>

不要玩纯鼠 不要玩纯鼠 不要玩纯鼠 不要玩纯鼠 不要玩纯鼠 不要玩纯鼠

补药刷车 多打tech

我们进阶群再见`,qv=Object.freeze(Object.defineProperty({__proto__:null,default:Zv},Symbol.toStringTag,{value:"Module"})),Qv=`---
date: 2024-11-14
---

# Himitsu 的遗言

<Player 
  id=6569959
  name="Himitsu"
  country=3471
  global=235027
  from="CN"
  accuracy=98.48
  level=100
  progress=16
  performance=3062
/>

你好，我是Shylph(Osu id:Himitsu)

于2024/10/6加入新人群，2024/11/14惨遭杀害，以下是我的遗言：

## 心态

音乐游戏的提升是个不太平滑的曲线，完全没有基础的萌新刚刚接触时，可能会经历一段漫长的铺垫，比如打个100，200小时都没什么提升，还是只能玩一些简单的谱面，准度低，手速慢，看不懂配置，希望读者在遇到这些情况时，能稳住心态，拿出毅力坚持下去，总会登上开悟之坡。

## 提升

当你自己闷头打图发现怎么都提升不了，玩的难受。可以去学习别人的经验，在萌新期多去尝试各种玩法思路，找到那条适合自己的道路之后就会开始飞升了。

在这里推荐一些优质的Osu教程：

- [Osu! Beginner Guide | How to Play Osu! (Tips & Tricks for Beginner Players)](https://www.youtube.com/watch?v=qUkvt8DThQc&t=1660s)

- [osu!2017新手入门教学以及进阶思路 by phtry](https://www.bilibili.com/video/BV1Ax411L7u6/?vd_source=513fae5c173b6b9ad1b4c1b84f2969f0)

- [如何学会 Easy 模组：学会低AR，打跳，tech，等等](https://www.bilibili.com/video/BV1W1mmYeE5f/?vd_source=513fae5c173b6b9ad1b4c1b84f2969f0)

- [如何进步？如何变强？怎样像Vaxei, Whitecat一样牛逼?](https://www.bilibili.com/video/BV1Va4y1E7A9/?vd_source=513fae5c173b6b9ad1b4c1b84f2969f0)

- [2020年新手犯的重大错误 | acc很差，不会打串，一直卡指](https://www.bilibili.com/video/BV1ZY4y1q7Qn/?vd_source=513fae5c173b6b9ad1b4c1b84f2969f0)

- [總是跳不到？三分鐘教你簡單aim練習法+心路歷程簡單分享](https://www.bilibili.com/video/BV1mE411N7Zf/?vd_source=513fae5c173b6b9ad1b4c1b84f2969f0)

- [連打練習方法分享！馬上成為下一位串燒王！Part.1](https://www.bilibili.com/video/BV1gF411A7zp/?vd_source=513fae5c173b6b9ad1b4c1b84f2969f0)

- [連打練習方法分享！三分鐘讓你知道怎麼練習長串燒！Part.2](https://www.bilibili.com/video/BV1gJ411H7cA/?vd_source=513fae5c173b6b9ad1b4c1b84f2969f0)

在这里就先分享这么多，因为优质的OSU教程实在是太多了，如果读者真的非常想改变自己，提高自己，我非常推荐去油管和B站搜索并观看这些教程，或许就能让你少走弯路，提升的更快一些。

找到正确的游玩方式是第一步，第二步是找到适合自己当前阶段的谱面，分享一下我找到合适谱面的方法：

F9（在osu界面） 打开之后跳转到全部-排名，之后拉到和自己差不多排名的人，不同家的也可以，之后打开他们的主页，下载他们BP1-50的图，如果你有时间，全部下载都可以，如果发现某个人的BP玩起来非常适合自己，就可以把这个人的好友加上，持续视奸并且持续偷图。

民间谱面推荐视频，新人群的群文件

B站搜索 PP 推荐 osu 也能得到相当多的优质谱面

多玩一些自己能A的谱，如果是作为练习，也尽量从打到B，可能打到A的谱开始，尽量不要去越级打C和D，很有可能会养成不好的发力习惯（手癖）真养成了真的是很难改掉的，基本就废了，所以非常不推荐越级。

有正确的玩法，好玩的谱面，多练就是了，我在进阶群等你。


`,n8=Object.freeze(Object.defineProperty({__proto__:null,default:Qv},Symbol.toStringTag,{value:"Module"})),e8=`---
date: 2024-12-03
---

# Capgras 的出群遗言

<Player 
  id=6796076
  name="[SHK]Capgras"
  country=3643
  global=260909
  from="CN"
  accuracy=94.81
  level=100
  progress=90
  performance=3058
/>

<font size="5">初次的匆匆离别，是为了让再次相遇时倍感珍惜。</font>

**即使这一阔别就是九年。**

这里是音游底层，vivo50娱乐赛主板，osu享受者-Capgras-，能与各位结识是我的荣幸。2015年接触了osu，作为om的附加模式就这样藕断丝连着。

一个月前1300pp，当时不曾想过入群后仅仅一个月就要被撵走了qwq。在9.19号同时取得3000pp总分与200pp单张。感谢群里的朋友们能在我一遍一遍凹图的时候在一旁加油鼓励，能和群里的朋友们分享这一喜悦让我无比的幸福。不过这也意味着我要离开这个带给我满满回忆的大群了。

![](/images/lastwords/6796076-1.jpg)

<Score
  bid=1620144
  sid=757146
  preview="Tanaka Hirokazu - C-TYPE (Arf) [Bonsai's BasS-TYPE]"
  star=5.46
  max=162
  mode="o"
  accuracy=98.35
  combo=162
  rank="s"
  performance=203
/>

当天yuyox宝贝也突破200pp摘下211pp的成就↓

<Score
  bid=3082320
  sid=1504648
  preview="Oshimizu Nako (CV: Toyosaki Aki) - Suisei Melody (CoLouRed GlaZeE) [Insane]"
  star=3.74
  max=853
  mode="o"
  accuracy=98.41
  combo=853
  alias="水性メロディ"
  rank="s"
  performance=211
/>

我并不是什么天赋型选手，只是运气好刚好有一条看得见摸得到的路并坚持走了下来。我喜欢以挑战者的心态走进一张图，在里面磨砺成长，最终收获技术上的提升。办比赛的初衷就是为了分享我成长突破的经历，四星开始各种雷开始不断出现，摇曳的小舟需要保驾护航。虽然现在还不是很完美，但我相信以后会让大家都认识并记住这个比赛的owo

很幸运在新人群与大家认识，并和我的天使相遇，myangelyuyox。对于大多数玩家来说，3000pp之后是慢慢学会飞行的阶段，需要沉淀的时间加倍提高，获得的正反馈也不如新手时期。而就在这个阶段，可以找到互相依靠的人，有一种强烈的愿望，想彼此成为指引对方的明星。

![](/images/lastwords/6796076-2.jpg)

毕竟这是遗言，写回忆录什么的就算了吧，这个月我在进阶群等你们，下个月我会在高阶群等着大家，See you next time~

[群回忆时刻](https://meme.osuxrq.com/)

赛群：556278354`,a8=Object.freeze(Object.defineProperty({__proto__:null,default:e8},Symbol.toStringTag,{value:"Module"})),t8=`---
date: 2024-12-03
type: simple
---

# subaru322 的出群遗言

<Player 
  id=7851625
  name="Liangyue322"
  country=2636
  global=152617
  from="TW"
  accuracy=97.17
  level=100
  progress=12
  performance=4353
/>

我也不想似(

好啦不開玩笑了，祝福各位早日出群來新人進階群

共勉`,i8=Object.freeze(Object.defineProperty({__proto__:null,default:t8},Symbol.toStringTag,{value:"Module"})),r8=`---
date: 2025-06-01
---

# aboluo7 遗言后附彩蛋

<Player 
  id=802382
  name="aboluo7"
  country=4041
  global=263506
  from="CN"
  accuracy=96.9
  level=93
  progress=4
  performance=3003
/>

一位老家伙的遗言QAQ（注册时间长而已啊喂！），没想到这么快就走了。

2025-5-1 700pp入群，开始正式捡起 OSU 开始玩。2025-6-1 出群。

感谢各位群 U 们的陪伴与指导，让我这个老家伙感受到这么好的氛围。

关于一些建议：我是个PP刷子也不懂怎么给建议哈哈！总之所有都是围绕多玩，多练！多打综合图，长图。着急着打不了串，打不了跳的，压根不用给自己制造焦虑。玩着玩着会突然有一天发现，哎？这也打得过去，那也打得过去了。享受游戏最重要。

我用的外设：数位板是 wacom ctl472（笔滑手还缠了手胶），O3C 的键盘（默认数值）。（ps.猫盘也是很不错的选择~）

我将在进阶群等你们来一起玩啦。都快一点飞上来喂，我一个人在那里会很孤单的。

下面是我 PP 刷子的 BP（都是短图跳图~哎？我的车呢！）：

<Score
  bid=738063
  sid=320118
  preview="Reol - No title (VINXIS) [Lust's Insane]"
  star=5.72
  max=403
  mode="o"
  accuracy=98.47
  combo=402
  rank="a"
  performance=189
/>

<Score
  bid=2014469
  sid=962088
  preview="MIMI feat. Hatsune Miku - Marshmary (Log Off Now) [Horizon]"
  star=5.21
  max=433
  mode="o"
  accuracy=98.33
  combo=433
  rank="s"
  performance=182
alias="棉花糖"
/>

<Score
  bid=3217116
  sid=1575739
  preview="The Kid LAROI, Justin Bieber - Stay (Log Off Now) [Wasted]"
  star=4.87
  max=503
  mode="o"
  accuracy=98.45
  combo=503
  rank="s"
  performance=153
/>

<Score
  bid=1059388
  sid=497769
  preview="Drop - Granat (Left) [Extra]"
  star=5.05
  max=241
  mode="o"
  accuracy=97.46
  combo=241
  rank="s"
  performance=144
/>

<Score
  bid=4962285
  sid=1943000
  preview="Marina and the Diamonds - Bubblegum Bitch (Nightcore Mix) (Log Off Now) [Fuxi's Insane]"
  star=4.73
  max=806
  mode="o"
  accuracy=99.48
  combo=471
  rank="a"
  performance=142
/>

<Score
  bid=2245783
  sid=1073074
  preview="Turbo - PADORU / PADORU (Sotarks) [Reform's Expert]"
  star=5.31
  max=171
  mode="o"
  accuracy=94.51
  combo=171
  rank="a"
  performance=136
/>

<Score
  bid=4794236
  sid=2253881
  preview="Enina - Konchil (-Kerrigan-) [Cum(Matt)]"
  star=4.84
  max=193
  mode="o"
  accuracy=94.54
  combo=184
  rank="a"
  performance=134
/>

<Score
  bid=4834211
  sid=2233944
  preview="Faylan - Path to glory (Game Ver.) (tomatas95) [Expert]"
  star=5.26
  max=579
  mode="o"
  accuracy=96.41
  combo=250
  rank="a"
  performance=134
/>

<Score
  bid=814293
  sid=371128
  preview="Station Earth - Cold Green Eyes ft. Roos Denayer (Bearizm) [Divine]"
  star=4.94
  max=562
  mode="o"
  accuracy=97.85
  combo=298
  rank="a"
  performance=133
alias="冷绿眼"
/>

<Score
  bid=2025942
  sid=968171
  preview="MIMI feat. Hatsune Miku - Mizuoto to Curtain (Log Off Now) [Lucid]"
  star=5.61
  max=265
  mode="o"
  accuracy=93.85
  combo=155
  rank="a"
  performance=133
alias="水音与窗帘"
/>

![](/images/lastwords/802382-1.jpg)

彩蛋：哎？！ 189PP 单图 2999PP。全差 1 哎！ 就这样留在新人群吧！哈哈哈哈

<Score
  bid=738063
  sid=320118
  preview="Reol - No title (VINXIS) [Lust's Insane]"
  star=5.72
  max=403
  mode="o"
  accuracy=98.47
  combo=402
  rank="a"
  performance=189
/>
`,s8=Object.freeze(Object.defineProperty({__proto__:null,default:r8},Symbol.toStringTag,{value:"Module"})),o8=`---
date: 2024-12-03
type: simple
---

# My Dreaest 的出群遗言

<Player 
  id=8457316
  name="My Dreaest"
  country=4356
  global=274286
  from="CN"
  accuracy=97.61
  level=97
  progress=65
  performance=3175
/>

硬要说感慨的话，可能就还是要相信自己吧

也是用键鼠打到3000pp了，BP小200也满足了

为什么要强调键鼠呢

因为我想证明，不管你设备如何，天赋如何，只要努力了，相信自己

起码这么一点点的回报还是有的

osu虽然只是游戏，但是你对待事情的态度很关键

别焦虑，别有压力，放手去玩去享受，只要努力坚持，一定就有成绩

那就这样，有缘再会

猫抓板少折磨自己，我在进阶群等你

应2ky girl要求这边提一下她，哪来的2ky？`,l8=Object.freeze(Object.defineProperty({__proto__:null,default:o8},Symbol.toStringTag,{value:"Module"})),c8=`---
date: 2025-03-17
---

# Delta34301370 的出群遗言

<Player 
  id=8665750
  name="Delta34301370"
  country=3745
  global=247367
  from="CN"
  accuracy=97.02
  level=97
  progress=37
  performance=3001
/>

（我其实在15号是就pp超限了，看看管理什么时候发现我。）

![](/images/lastwords/8665750-1.jpg)

我的账号是在16年7月创的，到现在也快成为⑨年牢玩家了（）。

说起玩osu的契机，也是当时在B站上刷到了曲奇用hr（还是hdhr？）fc了fdfd。当时就觉得“沃日，好基霸炫酷”。后面也是开始找osu的视频看，最后入坑了这款游戏。

刚刚入坑的我不语，只是一味地越级——越完3星越4星，越完4星越5星。因为那时候pp更多与combo相关，导致我的游玩体验及其坐牢，一直在700pp停滞不前。后面还把左手弄受伤了😭。所以说千万<font size="10">不要越级太多</font>。

在不久之后也是入坑了卓德，也在卓德上断断续续打到21年，因为买了电脑玩3A退的坑。（我卓德的pc应该不止这么点吧？）

![](/images/lastwords/8665750-2.jpg)

退坑的那些时间也偶尔会在B站上刷到一些osu的视频，然后也是在去年11月突发奇想买了块板子，重新下回了osu。转板加上复健双重debuff导致刚回坑时连打2星图都汗流浃背。不过也是在不断的练习下逐渐回到了之前的水平，然后也在最近达到了3kpp，acc也从刚刚回坑时的90打到了97。

说到如何提升pp，我认为提升底力最为关键。底力提升了，你也能随手打出高acc少miss的成绩（这也是目前我刷pp的方式）。至于如何提升底力，我认为可以定下不同的目标，然后朝着这个目标去练习。也说一下出群之后我的一些目标：

1. fc一张5星图（没错我现在一个5星fc都没有😭）

2. 练习一些在新人群发出来就会被禁言的综合图

3. 提升我bp列表里面acc比较低的图

在最后发一下我的bp列表。

<Score
  bid=738063
  sid=320118
  preview="Reol - No title (VINXIS) [Lust's Insane]"
  star=5.62
  max=403
  mode="o"
  accuracy=98.40
  combo=306
  rank="a"
  performance=168
/>

<Score
  bid=577517
  sid=251437
  preview="Halozy - Genryuu Kaiko (Mira-san) [Melody of Sanzu]"
  star=5.36
  max=1715
  mode="o"
  accuracy=97.49
  combo=732
  alias="源流懐古"
  rank="a"
  performance=162
/>

<Score
  bid=1067123
  sid=471261
  preview="ELISA - Dear My Friend -Mada Minu Mirai e- (TV size) (Rizen) [Insane]"
  star=4.04
  max=361
  mode="o"
  accuracy=95.73
  combo=160
  alias="Dear My Friendーまだ見ぬ未来へー (TV size)"
  rank="a"
  performance=0
/>

<Score
  bid=4834210
  sid=2233944
  preview="Faylan - Path to glory (Game Ver.) (tomatas95) [Scarlet Vision]"
  star=5.73
  max=610
  mode="o"
  accuracy=97.01
  combo=128
  rank="a"
  performance=154
/>

<Score
  bid=1303587
  sid=609311
  preview="Roromiya Karuta(Hanazawa Kana) - sweets parade (gary00737) [Walao's Extra]"
  star=5.26
  max=264
  mode="o"
  accuracy=96.28
  combo=170
  rank="a"
  performance=152
/>

<Score
  bid=712376
  sid=320118
  preview="Reol - No title (VINXIS) [Insane]"
  star=5.10
  max=476
  mode="o"
  accuracy=98.12
  combo=467
  rank="a"
  performance=145
/>

<Score
  bid=2170029
  sid=983911
  preview="S3RL - Bass Slut (Original Mix) (Fatfan Kolek) [Indecent Insane]"
  star=4.52
  max=476
  mode="o"
  accuracy=99.09
  combo=353
  rank="a"
  performance=140
/>

<Score
  bid=4595981
  sid=2173294
  preview="Faylan - Path to glory (eringiRa) [RoniX's Insane]"
  star=5.02
  max=632
  mode="o"
  accuracy=98.18
  combo=270
  rank="a"
  performance=136
/>

<Score
  bid=4570832
  sid=2166521
  preview="RED feat. Abydos High School Foreclosure Task Force - Mahiru no Sora no Tsuki (TV Size) (lit120) [Insane]"
  star=3.85
  max=378
  mode="o"
  accuracy=95.18
  combo=195
  alias="真昼の空の月 (TV Size)"
  rank="a"
  performance=135
/>

<Score
  bid=2118443
  sid=983911
  preview="S3RL - Bass Slut (Original Mix) (Fatfan Kolek) [Reform's Filthy Expert]"
  star=4.87
  max=492
  mode="o"
  accuracy=97.09
  combo=290
  rank="a"
  performance=132
/>

（有人说我bp太难打了，再放个5星以下的bp。好像有些图比较难打）

<Score
  bid=2170029
  sid=983911
  preview="S3RL - Bass Slut (Original Mix) (Fatfan Kolek) [Indecent Insane]"
  star=4.52
  max=476
  mode="o"
  accuracy=99.09
  combo=353
  rank="a"
  performance=140
/>

<Score
  bid=4595981
  sid=2173294
  preview="Faylan - Path to glory (eringiRa) [RoniX's Insane]"
  star=5.02
  max=632
  mode="o"
  accuracy=98.18
  combo=270
  rank="a"
  performance=136
/>

<Score
  bid=1083055
  sid=478405
  preview="Omoi - Snow Drive(01.23) (Kroytz) [pk's Insane]"
  star=5.00
  max=1529
  mode="o"
  accuracy=98.86
  combo=830
  alias="スノウドライヴ(01.23)"
  rank="a"
  performance=127
/>

<Score
  bid=3969862
  sid=1922323
  preview="kessoku band - Guitar to Kodoku to Aoi Hoshi (Amateurre) [Wen's Insane]"
  star=4.68
  max=1141
  mode="o"
  accuracy=98.07
  combo=699
  alias="ギターと孤独と蒼い惑星"
  rank="a"
  performance=121
/>

<Score
  bid=853926
  sid=384772
  preview="Yuaru - Asu no Yozora Shoukaihan (Akitoshi) [Insane]"
  star=5.06
  max=1133
  mode="o"
  accuracy=97.41
  combo=1132
  alias="アスノヨゾラ哨戒班"
  rank="s"
  performance=120
/>

<Score
  bid=1963209
  sid=744772
  preview="toby fox - Last Goodbye (Fatfan Kolek) [Keitaro's Insane]"
  star=4.47
  max=455
  mode="o"
  accuracy=98.77
  combo=454
  rank="s"
  performance=119
/>

<Score
  bid=484269
  sid=205095
  preview="Kawada Mami - Wings of Courage -Sora o Koete- (Momovely) [Insane]"
  star=4.75
  max=726
  mode="o"
  accuracy=98.26
  combo=726
  alias="Wings of Courage -空を超えて-"
  rank="s"
  performance=116
/>

<Score
  bid=974072
  sid=412140
  preview="Yousei Teikoku - Torikago (Okorin) [Insane]"
  star=4.52
  max=1823
  mode="o"
  accuracy=98.09
  combo=1726
  alias="トリカゴ"
  rank="s"
  performance=116
/>

<Score
  bid=4789350
  sid=1998171
  preview="inabakumori - Float Play ([Hatsune Miku]) [Patchouli-R's Insane]"
  star=5.00
  max=1101
  mode="o"
  accuracy=97.22
  combo=405
  alias="フロートプレイ"
  rank="a"
  performance=115
/>

<Score
  bid=2014470
  sid=962088
  preview="MIMI feat. Hatsune Miku - Marshmary (Log Off Now) [Insane]"
  star=4.41
  max=427
  mode="o"
  accuracy=99.22
  combo=246
  alias="マシュマリー"
  rank="a"
  performance=114
/>

adios～

![](/images/lastwords/8665750-3.jpg)`,u8=Object.freeze(Object.defineProperty({__proto__:null,default:c8},Symbol.toStringTag,{value:"Module"})),d8=`---
date: 2024-12-03
type: suggest
---

# Touma-w- 套马的出群遗言

<Player 
  id=9650376
  name="Touma-w-"
  country=0
  global=116187
  from="CN"
  accuracy=98.11
  level=98
  progress=44
  performance=4149
/>

这里是Touma miyuki，一个从2017年1月入坑的老萌新，在历经了四次因为眼疾的原因退坑而后回坑后，有点话想新人说。就当是在群里最后的聊天了。自此我们新人群两隔。

在这里我们先不讲实力，不讲技术，只讲对待这个游戏的心态。技术类型的我会放在最后说，如果你想刷PP尽快出群那你可以直接拉到底。

首先，不管你们现在处于什么PP段,一定不要焦虑，不要焦虑，不要焦虑，一定不要因为短时间内无法刷出BP,1MISS，明明光标到了但是却没按到，等诸如此类的问题而焦虑。发泄一下就好了，你甚至可以去打一下小超实力的tech图找虐，亦或者是开NF感受一下完全反应不过来的AR10。但无论怎么说，发泄过后，心态一定要放平，这决定了这个游戏的游戏寿命对你来说有多长。OSU是靠时间磨的游戏，一旦你红温了，就不是你在玩游戏而是游戏在玩你。

也许群里有天赋异禀的人，(虽然这个游戏看天赋，但是对于我们还没入门的人来说天赋可能占比不到10%)一天从2000PP飞升到了3000PP，而自己还在2800pp努力Retey刷180PP的图，而他已经在一天内量产了几张。于是自己就更加焦急的Retry，不停的Retry似乎就能达到那个成绩。但是事实上不停地Retry只会更快的陷入手癖以及消耗你对这首歌乃至于这类型的图的热情。放平心态，这才是最重要的，就像我在某位TOP的视频里听见并记下的一句话“One day I will Get 1000PP,but not today”可以尝试在各种令人沮丧情况出现后对自己说出这句话。

这个游戏会因为每个人的游玩特点导致能力的分离，可能在3000pp前感受不明显，但是每个人都有专长能力的这个事实是存在的。如果感到累了不妨去群里找找MP，发现自己在哪些图里能拿到比别人高的ACC和Combo，也可以看看自己在哪些能力上比同PP段的人更差。以便对自己的能力有更充分的认知。

接下来我们来分析一下这个游戏在3000PP前想提升我们需要关注什么。

首先是身体状态，这个游戏太看重身体状态了，眼睛，双手的协调能力，甚至对坐姿和发力方式也有讲究，甚至我之前的眼睛是问题也是多亏了这个游戏让我提前发现并接受治疗。请诸位新人一定要多注意自己的身体，要好好休息，打之前也可以稍微的拉伸一下自己的小臂肌群，注意一下自己的姿势和发力方式有没有问题，一旦感受到哪里不舒服一定要及时注意。

正如那句话你的双手是为了服务你的一生，而不只是为了OSU。

其次你需要了解一下这个游戏内大致的能力分类，因为在你注意到自己已经很久没有提升的时候，往往就是有一部分能力出现了短板， 唯有找出它，强化它，你才能变强。B站上有一个搬运的视频（有字幕翻译）对此有较为详细的分类和练习方式。

（[https://www.bilibili.com/video/BV1aU4y1W7J3/?spm_id_from=333.337.search-card.all.click](https://www.bilibili.com/video/BV1aU4y1W7J3/?spm_id_from=333.337.search-card.all.click)），我就在此针对新人展开其中几点简单阐述一下。

Jump AIM：跳跃瞄准能力可以说是很多刚开始接触跳图且以此作为自己BP的玩家最看重的能力了，但是实际上这个能力可以细分成移动，瞄准，压拍子（音押目押），其中任何一个没跟上都会变成几个连续的miss然后Fail掉，也许最开始小幅度的跳动并不能感受出来，但是一旦BPM高了（找节拍的要求变高）或者跳跃幅度大了（移动要求变高）跳跃次数变多了（连续瞄准要求变高）其中的难点自然就浮现出来了。对这个能力的提升我能给出的建议就是，多去尝试在能力范围内不同BPM下的跳跃、不同排列的跳跃、不要去担心MISS后Faill的情况，尽量保证自己能接上。

Reading：读图能力其实是这个游戏里最基础的圈圈和滑条（物件）的能力，这个能力是你能熟练的打这个游戏的基础，也可以说是最基础的技能之一了。但是再往上就是读复杂排列读图能力了。复杂排列的读图能力我们暂且不展开讨论，单论4星5星会出现的一些滑条头藏note或者是滑条尾接滑条头note的情况。一般这种情况在跨级打图的时候很难注意到而导致miss，能给出的建议就是多找这类型的图，在4星出头的图内稳定的去训练自己的这个能力，慢慢的你就会了。

Focus：专注，专注，专注，这一点非常的重要，且不说3000pp的去打3星图一旦分散注意力也会MISS，就算是那群TOP，也会因为专注力和组合读图的问题导致miss或者Fail（曲奇大跳727）。

所以，尽量的提高自己的专注力，这点没什么不好的，尤其是针对打短图PP图较多的玩家来说，这一点非常最重要。尽量少去不停的Retry那些Harumachi、Padoru（在5PC内不能FC就不要再凹了）

这种图的Retey代价太小，尽量多去打打长图，（三分钟以上的），在能力范围内多连Combo，断了不亏，FC了上BP了血赚。

我个人主观的认为以上这几点能力只要做好了，达到3000PP并不是一件困难的事情，只是每个人需要投入的时间并不成正分布。总而言之，just play it
放上CY的名言:

![](/images/lastwords/9650376-1.jpg)

最后就是，不要因为一时的状态不好而放弃去打跨越能力的图，不要在儿歌图停留太久，不要因为你可以DT儿歌图拿到PP就觉得自己的能力有所提升，尽量保证自己在打同PP段内的原生PP图。不要过早的开MOD刷PP，现在我已经3500PP了但是依旧可以重新从0开始练4星。加油,各位CNOSU的希望。`,m8=Object.freeze(Object.defineProperty({__proto__:null,default:d8},Symbol.toStringTag,{value:"Module"})),p8={class:"easy-holder-container"},f8=["onClick"],h8={class:"type-title"},v8={class:"count-badge"},b8={class:"toggle-text"},g8={class:"type-content"},y8={class:"card-grid"},w8=["disabled","onClick"],_8={class:"page-info"},S8=["disabled","onClick"],k8="article/lastwords/users",Fa=12,x8={__name:"EasyHolder",setup(n){const e=Object.assign({"../../article/lastwords/users/0.md":f6,"../../article/lastwords/users/10364008.md":v6,"../../article/lastwords/users/13017923.md":g6,"../../article/lastwords/users/13744965.md":w6,"../../article/lastwords/users/13891947.md":S6,"../../article/lastwords/users/13932883.md":x6,"../../article/lastwords/users/14145531.md":A6,"../../article/lastwords/users/14353421.md":T6,"../../article/lastwords/users/14748844.md":M6,"../../article/lastwords/users/14832181.md":P6,"../../article/lastwords/users/14970885.md":R6,"../../article/lastwords/users/15349720.md":D6,"../../article/lastwords/users/15846580.md":H6,"../../article/lastwords/users/15851436.md":V6,"../../article/lastwords/users/16027612.md":z6,"../../article/lastwords/users/16378561.md":Y6,"../../article/lastwords/users/16572973.md":G6,"../../article/lastwords/users/16822918.md":$6,"../../article/lastwords/users/16868813.md":X6,"../../article/lastwords/users/17027628.md":q6,"../../article/lastwords/users/17610368.md":nh,"../../article/lastwords/users/18230719.md":ah,"../../article/lastwords/users/18963228.md":ih,"../../article/lastwords/users/20044753.md":sh,"../../article/lastwords/users/20815409.md":lh,"../../article/lastwords/users/21242012.md":uh,"../../article/lastwords/users/21614712.md":mh,"../../article/lastwords/users/21768422.md":fh,"../../article/lastwords/users/21943424.md":vh,"../../article/lastwords/users/22765044.md":gh,"../../article/lastwords/users/25710736.md":wh,"../../article/lastwords/users/25767690.md":Sh,"../../article/lastwords/users/26795413.md":xh,"../../article/lastwords/users/27552230.md":Ah,"../../article/lastwords/users/27608705.md":Th,"../../article/lastwords/users/27815249.md":Mh,"../../article/lastwords/users/28287625.md":Ph,"../../article/lastwords/users/28388886.md":Rh,"../../article/lastwords/users/28446169.md":Dh,"../../article/lastwords/users/28494479.md":Hh,"../../article/lastwords/users/28534876.md":Vh,"../../article/lastwords/users/29235972.md":zh,"../../article/lastwords/users/29892932.md":Yh,"../../article/lastwords/users/30125315.md":Gh,"../../article/lastwords/users/30320667.md":$h,"../../article/lastwords/users/30512018.md":Xh,"../../article/lastwords/users/30526925.md":qh,"../../article/lastwords/users/30595368.md":n9,"../../article/lastwords/users/30629671.md":a9,"../../article/lastwords/users/30654176.md":i9,"../../article/lastwords/users/30849263.md":s9,"../../article/lastwords/users/31100455.md":l9,"../../article/lastwords/users/31343852.md":u9,"../../article/lastwords/users/31485633.md":m9,"../../article/lastwords/users/31639737.md":f9,"../../article/lastwords/users/31918202.md":v9,"../../article/lastwords/users/32039184.md":g9,"../../article/lastwords/users/32067163.md":w9,"../../article/lastwords/users/32145451.md":S9,"../../article/lastwords/users/32228798.md":x9,"../../article/lastwords/users/32270642.md":A9,"../../article/lastwords/users/32303406.md":T9,"../../article/lastwords/users/32396623.md":M9,"../../article/lastwords/users/32452774.md":P9,"../../article/lastwords/users/32642875.md":R9,"../../article/lastwords/users/32661925.md":D9,"../../article/lastwords/users/32743500.md":H9,"../../article/lastwords/users/32975448.md":V9,"../../article/lastwords/users/33090766.md":z9,"../../article/lastwords/users/33091136.md":Y9,"../../article/lastwords/users/33122153.md":G9,"../../article/lastwords/users/33319591.md":$9,"../../article/lastwords/users/33367606.md":X9,"../../article/lastwords/users/33463029.md":q9,"../../article/lastwords/users/33595598.md":n7,"../../article/lastwords/users/33719256.md":a7,"../../article/lastwords/users/33794305.md":i7,"../../article/lastwords/users/33823564.md":s7,"../../article/lastwords/users/33879454.md":l7,"../../article/lastwords/users/33887163.md":u7,"../../article/lastwords/users/33888415.md":m7,"../../article/lastwords/users/33918873.md":f7,"../../article/lastwords/users/34210302.md":v7,"../../article/lastwords/users/34230148.md":g7,"../../article/lastwords/users/34345823.md":w7,"../../article/lastwords/users/34346018.md":S7,"../../article/lastwords/users/34443419.md":x7,"../../article/lastwords/users/34556002.md":A7,"../../article/lastwords/users/34844529.md":T7,"../../article/lastwords/users/34907673.md":M7,"../../article/lastwords/users/34995831.md":P7,"../../article/lastwords/users/34998676.md":R7,"../../article/lastwords/users/35288237.md":D7,"../../article/lastwords/users/35529699.md":H7,"../../article/lastwords/users/35551133.md":V7,"../../article/lastwords/users/35672191.md":z7,"../../article/lastwords/users/35677457.md":Y7,"../../article/lastwords/users/35683344.md":G7,"../../article/lastwords/users/35717411.md":$7,"../../article/lastwords/users/35744851.md":X7,"../../article/lastwords/users/35750067.md":q7,"../../article/lastwords/users/35902892.md":nv,"../../article/lastwords/users/35938964.md":av,"../../article/lastwords/users/36062235.md":iv,"../../article/lastwords/users/36097722.md":sv,"../../article/lastwords/users/36127474.md":lv,"../../article/lastwords/users/36155893.md":uv,"../../article/lastwords/users/36273312.md":mv,"../../article/lastwords/users/36310606.md":fv,"../../article/lastwords/users/36409902.md":vv,"../../article/lastwords/users/36547413.md":gv,"../../article/lastwords/users/36838632.md":wv,"../../article/lastwords/users/36846545.md":Sv,"../../article/lastwords/users/36941954.md":xv,"../../article/lastwords/users/37418919.md":Av,"../../article/lastwords/users/37449856.md":Tv,"../../article/lastwords/users/37963548.md":Mv,"../../article/lastwords/users/37974276.md":Pv,"../../article/lastwords/users/38021034.md":Rv,"../../article/lastwords/users/38737489.md":Dv,"../../article/lastwords/users/39005598.md":Hv,"../../article/lastwords/users/39145159.md":Vv,"../../article/lastwords/users/39491039.md":zv,"../../article/lastwords/users/40406578.md":Yv,"../../article/lastwords/users/40414685.md":Gv,"../../article/lastwords/users/4283631.md":$v,"../../article/lastwords/users/5162173.md":Xv,"../../article/lastwords/users/6071538.md":qv,"../../article/lastwords/users/6569959.md":n8,"../../article/lastwords/users/6796076.md":a8,"../../article/lastwords/users/7851625.md":i8,"../../article/lastwords/users/802382.md":s8,"../../article/lastwords/users/8457316.md":l8,"../../article/lastwords/users/8665750.md":u8,"../../article/lastwords/users/9650376.md":m8}),a=h=>{let g="";if(typeof h=="string")g=h;else if(h&&typeof h.default=="string")g=h.default;else if(h)try{g=String(h.default||"")}catch{g=""}if(!g)return{fm:{},bodyHeading:"",extractedId:"",extractedName:""};const _={};let S="",v="",k="";try{let I=0,z=g.length;for(let O=0;O<g.length;O++)if(g[O]===`
`&&(I++,I>=50)){z=O+1;break}const C=g.slice(0,z),A=C.split(/\r?\n/),M=A.length;let R=!1,D=!1;for(let O=0;O<M;O++){const j=A[O];if(!j)continue;const P=j.trim();if(P==="---")if(D){if(R){R=!1;continue}}else{D=!0,R=!0;continue}if(R){const Q=j.indexOf(":");if(Q!==-1){const V=j.slice(0,Q).trim().toLowerCase();let J=j.slice(Q+1).trim();J=J.replace(/^['"](.*)['"]$/,"$1"),_[V]=J}}else!S&&P.startsWith("#")&&(S=P.replace(/^#+\s*/,"").replace(/\\/g,""))}const x=C.match(/<Player\b[^>]*\bid=["']?(\d+)["']?/i),F=C.match(/<Player\b[^>]*\bname=["']([^"']+)["']/i);x&&(v=x[1]),F&&(k=F[1])}catch{}return{fm:_,bodyHeading:S,extractedId:v,extractedName:k}},t=[],i=Object.entries(e||{});for(let h=0;h<i.length;h++){const g=i[h],_=g[0],S=g[1];if(_.toLowerCase().includes("readme"))continue;const k=_.split("/"),z=(k[k.length-1]||"").replace(".md","").trim(),{fm:C,bodyHeading:A,extractedId:M,extractedName:R}=a(S),D=C.name||R||z,x=C.title||A||"暂无标题...",F=C.id||M||z,O=C.color||Ma(F),j=(C.type||"").trim().toLowerCase();let P="常规";j==="recommend"?P="谱面推荐":j==="suggest"?P="技巧建议":j==="simple"?P="言简意赅":j==="unknown"&&(P="未知");const V=`/${k8.trim().replace(/^\/+|\/+$/g,"")}/${z}.html`;t.push({id:F,name:D,title:x,color:O,link:V,date:C.date||"",typeName:P})}t.sort((h,g)=>g.date&&h.date?new Date(g.date).getTime()-new Date(h.date).getTime():0);const r=B(()=>{const h={};t.forEach(S=>{h[S.typeName]||(h[S.typeName]=[]),h[S.typeName].push(S)});const g={谱面推荐:1,技巧建议:2,常规:10,言简意赅:21,未知:22};return Object.keys(h).sort((S,v)=>{const k=g[S]!==void 0?g[S]:99,I=g[v]!==void 0?g[v]:99;return k-I}).map(S=>({typeName:S,posts:h[S]}))}),s=vn({}),o=vn({}),l=h=>s.value[h]||1,u=(h,g)=>{s.value[h]=g},c=h=>Math.ceil(h.length/Fa),d=(h,g)=>{if(g.length<=Fa)return g;const S=(l(h)-1)*Fa;return g.slice(S,S+Fa)},m=(h,g=[])=>o.value[h]!==void 0?o.value[h]:g.length<=Fa,p=(h,g=[])=>{o.value[h]=!m(h,g)},w=h=>{let _=Ma(h).replace("#","");_.length===3&&(_=_.split("").map(z=>z+z).join(""));const S=parseInt(_,16),v=S>>16&255,k=S>>8&255,I=S&255;return`linear-gradient(rgba(${v}, ${k}, ${I}, 0.12), rgba(${v}, ${k}, ${I}, 0.12)), var(--vp-c-bg-elv, #f9f9f9)`};return(h,g)=>(N(),W("div",p8,[(N(!0),W(gn,null,ie(r.value,_=>(N(),W("div",{key:_.typeName,class:"type-section",style:En({background:w(_.typeName)})},[T("div",{class:Kn(["type-header",{collapsed:!m(_.typeName,_.posts)}]),onClick:S=>p(_.typeName,_.posts)},[T("div",h8,[T("span",null,[he(en(_.typeName)+" ",1),T("span",v8,"("+en(_.posts.length)+"x)",1)]),T("span",b8,en(m(_.typeName,_.posts)?"收起 ▲":"展开 ▼"),1)])],10,f8),Ca(T("div",g8,[T("div",y8,[(N(!0),W(gn,null,ie(d(_.typeName,_.posts),S=>(N(),Pn(ys,{key:S.id,id:S.id,name:S.name,title:S.title,color:S.color,link:S.link,date:S.date},null,8,["id","name","title","color","link","date"]))),128))]),_.posts.length>Fa?(N(),W("div",{key:0,class:"pagination-controls",onClick:g[0]||(g[0]=ca(()=>{},["stop"]))},[T("button",{class:"page-btn",disabled:l(_.typeName)===1,onClick:S=>u(_.typeName,l(_.typeName)-1)}," 上一页 ",8,w8),T("span",_8," 第 "+en(l(_.typeName))+" / "+en(c(_.posts))+" 页 ",1),T("button",{class:"page-btn",disabled:l(_.typeName)>=c(_.posts),onClick:S=>u(_.typeName,l(_.typeName)+1)}," 下一页 ",8,S8)])):mn("",!0)],512),[[Oa,m(_.typeName,_.posts)]])],4))),128))]))}},B8=be(x8,[["__scopeId","data-v-39633bac"]]),A8=ea({setup(){},rootComponents:[Jo],enhance({app:n,router:e,siteData:a}){e.beforeEach(t=>{}),e.afterEach(t=>{setTimeout(()=>{V3()},500)}),n.component("Beatmap",S5),n.component("Score",Y5),n.component("Player",af),n.component("Pool",cf),n.component("LazyImage",Ct),n.component("GlobalAudioPlayer",Jo),n.component("Timeline",Af),n.component("EasyCard",ys),n.component("EasyWallet",m6),n.component("EasyHolder",B8)}}),E8=Object.freeze(Object.defineProperty({__proto__:null,default:A8},Symbol.toStringTag,{value:"Module"})),ri=[L0,X0,e2,t2,m2,x2,M2,C2,L2,j2,F3,E8].map(n=>n.default).filter(Boolean),T8=JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[["link",{"rel":"icon","href":"/images/favicon.ico"}],["link",{"href":"/fonts/Torus-SemiBold.woff2","rel":"stylesheet"}],["link",{"href":"/fonts/Torus-SemiBold.woff","rel":"stylesheet"}],["link",{"href":"/fonts/Torus-Bold.woff2","rel":"stylesheet"}],["link",{"href":"/fonts/Torus-Bold.woff","rel":"stylesheet"}],["meta",{"name":"referrer","content":"no-referrer"}]],"locales":{"/":{"lang":"zh-CN","title":"osu! 新人群","description":"一个为新人而生的群聊团体。"}}}');var za=Dn(T8),I8=m1,M8=()=>{const n=R1({history:I8(Ec("/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(e,a,t)=>t||(e.hash?{el:e.hash}:{top:0})});return n.beforeResolve(async(e,a)=>{if(e.path!==a.path||a===je){const t=It(e.fullPath);if(t.path!==e.fullPath)return t.path;const i=await t.loader();e.meta={...t.meta,_pageChunk:i}}else e.path===a.path&&(e.meta=a.meta)}),n},C8=n=>{n.component("ClientOnly",es),n.component("Content",as),n.component("RouteLink",Ui)},P8=(n,e,a)=>{const t=B(()=>e.currentRoute.value.path),i=xl((g,_)=>({get(){return g(),e.currentRoute.value.meta._pageChunk},set(S){e.currentRoute.value.meta._pageChunk=S,_()}})),r=B(()=>ga.resolveLayouts(a)),s=B(()=>ga.resolveRouteLocale(za.value.locales,t.value)),o=B(()=>ga.resolveSiteLocaleData(za.value,s.value)),l=B(()=>i.value.comp),u=B(()=>i.value.data),c=B(()=>u.value.frontmatter),d=B(()=>ga.resolvePageHeadTitle(u.value,o.value)),m=B(()=>ga.resolvePageHead(d.value,c.value,o.value)),p=B(()=>ga.resolvePageLang(u.value,o.value)),w=B(()=>ga.resolvePageLayout(u.value,r.value)),h={layouts:r,pageData:u,pageComponent:l,pageFrontmatter:c,pageHead:m,pageHeadTitle:d,pageLang:p,pageLayout:w,redirects:Rr,routeLocale:s,routePath:t,routes:$a,siteData:za,siteLocaleData:o,frontmatter:c,head:m,headTitle:d,lang:p,page:u,site:za,siteLocale:o};return n.provide(ns,h),Object.defineProperties(n.config.globalProperties,{$pageFrontmatter:{get:()=>c.value},$pageHead:{get:()=>m.value},$pageHeadTitle:{get:()=>d.value},$pageLang:{get:()=>p.value},$pageData:{get:()=>u.value},$routeLocale:{get:()=>s.value},$withBase:{get:()=>ts},$frontmatter:{get:()=>c.value},$head:{get:()=>m.value},$headTitle:{get:()=>d.value},$lang:{get:()=>p.value},$page:{get:()=>u.value},$site:{get:()=>za.value},$siteLocale:{get:()=>o.value}}),h},O8=([n,e,a=""])=>{const t=Object.entries(e).map(([o,l])=>Ie(l)?`[${o}=${JSON.stringify(l)}]`:l?`[${o}]`:"").join(""),i=`head > ${n}${t}`;return Array.from(document.querySelectorAll(i)).find(o=>o.innerText===a)??null},R8=([n,e,a])=>{if(!Ie(n))return null;const t=document.createElement(n);return Zr(e)&&Object.entries(e).forEach(([i,r])=>{Ie(r)?t.setAttribute(i,r):r&&t.setAttribute(i,"")}),Ie(a)&&t.appendChild(document.createTextNode(a)),t},N8=()=>{const n=D1(),e=L1();let a=[];const t=()=>{n.value.forEach(s=>{const o=O8(s);o&&a.push(o)})},i=()=>{const s=[];return n.value.forEach(o=>{const l=R8(o);l&&s.push(l)}),s},r=()=>{document.documentElement.lang=e.value;const s=i();a.forEach((o,l)=>{const u=s.findIndex(c=>o.isEqualNode(c));u===-1?(o.remove(),delete a[l]):s.splice(u,1)}),s.forEach(o=>document.head.appendChild(o)),a=[...a.filter(o=>!!o),...s]};la(z1,r),ae(()=>{t(),Vn(n,r,{immediate:!1})})},D8=dp,L8=async()=>{const n=D8({name:"Vuepress",setup(){N8();for(const i of ri)i.setup?.();const a=ri.flatMap(({rootComponents:i=[]})=>i.map(r=>rn(r))),t=H1();return()=>[rn(t.value),a]}}),e=M8();C8(n),P8(n,e,ri);for(const a of ri)await a.enhance?.({app:n,router:e,siteData:za});return n.use(e),{app:n,router:e}};L8().then(({app:n,router:e})=>{e.isReady().then(()=>{n.mount("#app")})});export{gn as F,it as T,be as _,gm as a,T as b,W as c,L8 as createVueApp,he as d,cn as e,yn as f,ie as g,An as h,ae as i,En as j,vn as k,Kn as n,N as o,Ht as r,en as t,Sn as w};
