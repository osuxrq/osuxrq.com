/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lr(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Tn={},Bt=[],Oe=()=>{},Yo=()=>!1,Ta=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Si=n=>n.startsWith("onUpdate:"),$n=Object.assign,Nr=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},pu=Object.prototype.hasOwnProperty,kn=(n,e)=>pu.call(n,e),ln=Array.isArray,ot=n=>Ca(n)==="[object Map]",li=n=>Ca(n)==="[object Set]",ws=n=>Ca(n)==="[object Date]",dn=n=>typeof n=="function",Nn=n=>typeof n=="string",me=n=>typeof n=="symbol",Bn=n=>n!==null&&typeof n=="object",jo=n=>(Bn(n)||dn(n))&&dn(n.then)&&dn(n.catch),Wo=Object.prototype.toString,Ca=n=>Wo.call(n),fu=n=>Ca(n).slice(8,-1),Jo=n=>Ca(n)==="[object Object]",ki=n=>Nn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,kt=Lr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_i=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},hu=/-\w/g,Zn=_i(n=>n.replace(hu,e=>e.slice(1).toUpperCase())),vu=/\B([A-Z])/g,ft=_i(n=>n.replace(vu,"-$1").toLowerCase()),Ma=_i(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ui=_i(n=>n?`on${Ma(n)}`:""),Ne=(n,e)=>!Object.is(n,e),Gi=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},qo=(n,e,t,a=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:a,value:t})},gu=n=>{const e=parseFloat(n);return isNaN(e)?n:e},bu=n=>{const e=Nn(n)?Number(n):NaN;return isNaN(e)?n:e};let ys;const Ai=()=>ys||(ys=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cn(n){if(ln(n)){const e={};for(let t=0;t<n.length;t++){const a=n[t],i=Nn(a)?Bu(a):Cn(a);if(i)for(const r in i)e[r]=i[r]}return e}else if(Nn(n)||Bn(n))return n}const wu=/;(?![^(]*\))/g,yu=/:([^]+)/,xu=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Bu(n){const e={};return n.replace(xu,t=>t.startsWith("/*")?"":t).split(wu).forEach(t=>{if(t){const a=t.split(yu);a.length>1&&(e[a[0].trim()]=a[1].trim())}}),e}function zn(n){let e="";if(Nn(n))e=n;else if(ln(n))for(let t=0;t<n.length;t++){const a=zn(n[t]);a&&(e+=a+" ")}else if(Bn(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function Yi(n){if(!n)return null;let{class:e,style:t}=n;return e&&!Nn(e)&&(n.class=zn(e)),t&&(n.style=Cn(t)),n}const Su="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ku=Lr(Su);function Xo(n){return!!n||n===""}function _u(n,e,t){if(n.length!==e.length)return!1;let a=!0;for(let i=0;a&&i<n.length;i++)a=Ei(n[i],e[i],t);return a}function xs(n,e,t){if(n.size!==e.size)return!1;const a=Array.from(e),i=new Uint8Array(a.length);for(const r of n){let s=-1;for(let o=0;o<a.length;o++)if(!i[o]&&Ei(r,a[o],t)){s=o;break}if(s<0)return!1;i[s]=1}return!0}function Au(n,e,t){let a=ot(n),i=ot(e);if(a||i||(a=li(n),i=li(e),a||i))return a&&i?xs(n,e,t):!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const l=n.hasOwnProperty(o),u=e.hasOwnProperty(o);if(l&&!u||!l&&u||!Ei(n[o],e[o],t))return!1}return String(n)===String(e)}function Bs(n,e,t,a){t||(t=[new Map,new Map]);const[i,r]=t;if(i.has(n)||r.has(e))return i.get(n)===e&&r.get(e)===n;i.set(n,e),r.set(e,n);const s=a(n,e,t);return i.delete(n),r.delete(e),s}function Ei(n,e,t){if(n===e)return!0;let a=ws(n),i=ws(e);return a||i?a&&i?n.getTime()===e.getTime():!1:(a=me(n),i=me(e),a||i?n===e:(a=ln(n),i=ln(e),a||i?a&&i?Bs(n,e,t,_u):!1:(a=Bn(n),i=Bn(e),a||i?!a||!i?!1:Bs(n,e,t,Au):String(n)===String(e))))}const Zo=n=>!!(n&&n.__v_isRef===!0),tn=n=>Nn(n)?n:n==null?"":ln(n)||Bn(n)&&(n.toString===Wo||!dn(n.toString))?Zo(n)?tn(n.value):JSON.stringify(n,Qo,2):String(n),Qo=(n,e)=>Zo(e)?Qo(n,e.value):ot(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[a,i],r)=>(t[ji(a,r)+" =>"]=i,t),{})}:li(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ji(t))}:me(e)?ji(e):Bn(e)&&!ln(e)&&!Jo(e)?String(e):e,ji=(n,e="")=>{var t;return me(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yn;class Eu{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Yn&&(Yn.active?(this.parent=Yn,this.index=(Yn.scopes||(Yn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const a=this.scopes.slice();for(e=0,t=a.length;e<t;e++)a[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}const a=this.effects.slice();for(e=0,t=a.length;e<t;e++)a[e].resume()}}run(e){if(this._active){const t=Yn;try{return Yn=this,e()}finally{Yn=t}}}on(){++this._on===1&&(this.prevScope=Yn,Yn=this)}off(){if(this._on>0&&--this._on===0){if(Yn===this)Yn=this.prevScope;else{let e=Yn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,a;for(t=0,a=this.effects.length;t<a;t++)this.effects[t].stop();for(this.effects.length=0,t=0,a=this.cleanups.length;t<a;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const i=this.scopes.slice();for(t=0,a=i.length;t<a;t++)i[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ii(){return Yn}function Iu(n,e=!1){Yn&&Yn.cleanups.push(n)}let Ln;const Wi=new WeakSet;class nl{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Yn&&(Yn.active?Yn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wi.has(this)&&(Wi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||tl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ss(this),al(this);const e=Ln,t=Se;Ln=this,Se=!0;try{return this.fn()}finally{il(this),Ln=e,Se=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Fr(e);this.deps=this.depsTail=void 0,Ss(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){hr(this)&&this.run()}get dirty(){return hr(this)}}let el=0,ua,da;function tl(n,e=!1){if(n.flags|=8,e){n.next=da,da=n;return}n.next=ua,ua=n}function Or(){el++}function Dr(){if(--el>0)return;if(da){let e=da;for(da=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ua;){let e=ua;for(ua=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(a){n||(n=a)}e=t}}if(n)throw n}function al(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function il(n){let e,t=n.depsTail,a=t;for(;a;){const i=a.prevDep;a.version===-1?(a===t&&(t=i),Fr(a),Tu(a)):e=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=i}n.deps=e,n.depsTail=t}function hr(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(rl(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function rl(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===va)||(n.globalVersion=va,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!hr(n))))return;n.flags|=2;const e=n.dep,t=Ln,a=Se;Ln=n,Se=!0;try{al(n);const i=n.fn(n._value);(e.version===0||Ne(i,n._value))&&(n.flags|=128,n._value=i,e.version++)}catch(i){throw e.version++,i}finally{Ln=t,Se=a,il(n),n.flags&=-3}}function Fr(n,e=!1){const{dep:t,prevSub:a,nextSub:i}=n;if(a&&(a.nextSub=i,n.prevSub=void 0),i&&(i.prevSub=a,n.nextSub=void 0),t.subs===n&&(t.subs=a,!a&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Fr(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Tu(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Se=!0;const sl=[];function qe(){sl.push(Se),Se=!1}function Xe(){const n=sl.pop();Se=n===void 0?!0:n}function Ss(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ln;Ln=void 0;try{e()}finally{Ln=t}}}let va=0;class Cu{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ti{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ln||!Se||Ln===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ln)t=this.activeLink=new Cu(Ln,this),Ln.deps?(t.prevDep=Ln.depsTail,Ln.depsTail.nextDep=t,Ln.depsTail=t):Ln.deps=Ln.depsTail=t,ol(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const a=t.nextDep;a.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=a),t.prevDep=Ln.depsTail,t.nextDep=void 0,Ln.depsTail.nextDep=t,Ln.depsTail=t,Ln.deps===t&&(Ln.deps=a)}return t}trigger(e){this.version++,va++,this.notify(e)}notify(e){Or();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Dr()}}}function ol(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let a=e.deps;a;a=a.nextDep)ol(a)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ci=new WeakMap,_t=Symbol(""),vr=Symbol(""),ga=Symbol("");function ne(n,e,t){if(Se&&Ln){let a=ci.get(n);a||ci.set(n,a=new Map);let i=a.get(t);i||(a.set(t,i=new Ti),i.map=a,i.key=t),i.track()}}function Ue(n,e,t,a,i,r){const s=ci.get(n);if(!s){va++;return}const o=l=>{l&&l.trigger()};if(Or(),e==="clear")s.forEach(o);else{const l=ln(n),u=l&&ki(t);if(l&&t==="length"){const c=Number(a);s.forEach((d,m)=>{(m==="length"||m===ga||!me(m)&&m>=c)&&o(d)})}else switch((t!==void 0||s.has(void 0))&&o(s.get(t)),u&&o(s.get(ga)),e){case"add":l?u&&o(s.get("length")):(o(s.get(_t)),ot(n)&&o(s.get(vr)));break;case"delete":l||(o(s.get(_t)),ot(n)&&o(s.get(vr)));break;case"set":ot(n)&&o(s.get(_t));break}}Dr()}function Mu(n,e){const t=ci.get(n);return t&&t.get(e)}function Mt(n){const e=gn(n);return e===n||(ne(e,"iterate",ga),de(n))?e:De(n)?je(n)?e.map(t=>dt(we(t))):e.map(dt):e.map(we)}function Ci(n){return ne(n=gn(n),"iterate",ga),n}function Le(n,e){return De(n)?dt(je(n)?we(e):e):we(e)}const Ru={__proto__:null,[Symbol.iterator](){return Ji(this,Symbol.iterator,n=>Le(this,n))},concat(...n){return Mt(this).concat(...n.map(e=>ln(e)?Mt(e):e))},entries(){return Ji(this,"entries",n=>(n[1]=Le(this,n[1]),n))},every(n,e){return Pe(this,"every",n,e,void 0,arguments)},filter(n,e){return Pe(this,"filter",n,e,t=>t.map(a=>Le(this,a)),arguments)},find(n,e){return Pe(this,"find",n,e,t=>Le(this,t),arguments)},findIndex(n,e){return Pe(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Pe(this,"findLast",n,e,t=>Le(this,t),arguments)},findLastIndex(n,e){return Pe(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Pe(this,"forEach",n,e,void 0,arguments)},includes(...n){return qi(this,"includes",n)},indexOf(...n){return qi(this,"indexOf",n)},join(n){return Mt(this).join(n)},lastIndexOf(...n){return qi(this,"lastIndexOf",n)},map(n,e){return Pe(this,"map",n,e,void 0,arguments)},pop(){return ta(this,"pop")},push(...n){return ta(this,"push",n)},reduce(n,...e){return ks(this,"reduce",n,e)},reduceRight(n,...e){return ks(this,"reduceRight",n,e)},shift(){return ta(this,"shift")},some(n,e){return Pe(this,"some",n,e,void 0,arguments)},splice(...n){return ta(this,"splice",n)},toReversed(){return Mt(this).toReversed()},toSorted(n){return Mt(this).toSorted(n)},toSpliced(...n){return Mt(this).toSpliced(...n)},unshift(...n){return ta(this,"unshift",n)},values(){return Ji(this,"values",n=>Le(this,n))}};function Ji(n,e,t){const a=Ci(n),i=a[e]();return a!==n&&!de(n)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=t(r.value)),r}),i}const Lu=Array.prototype;function Pe(n,e,t,a,i,r){const s=Ci(n),o=s!==n&&!de(n),l=s[e];if(l!==Lu[e]){const d=l.apply(n,r);return o?we(d):d}let u=t;s!==n&&(o?u=function(d,m){return t.call(this,Le(n,d),m,n)}:t.length>2&&(u=function(d,m){return t.call(this,d,m,n)}));const c=l.call(s,u,a);return o&&i?i(c):c}function ks(n,e,t,a){const i=Ci(n),r=i!==n&&!de(n);let s=t,o=!1;i!==n&&(r?(o=a.length===0,s=function(u,c,d){return o&&(o=!1,u=Le(n,u)),t.call(this,u,Le(n,c),d,n)}):t.length>3&&(s=function(u,c,d){return t.call(this,u,c,d,n)}));const l=i[e](s,...a);return o?Le(n,l):l}function qi(n,e,t){const a=gn(n);ne(a,"iterate",ga);const i=a[e](...t);return(i===-1||i===!1)&&Li(t[0])?(t[0]=gn(t[0]),a[e](...t)):i}function ta(n,e,t=[]){qe(),Or();const a=gn(n)[e].apply(n,t);return Dr(),Xe(),a}const Nu=Lr("__proto__,__v_isRef,__isVue"),ll=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(me));function Ou(n){me(n)||(n=String(n));const e=gn(this);return ne(e,"has",n),e.hasOwnProperty(n)}class cl{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,a){if(t==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return r;if(t==="__v_raw")return a===(i?r?hl:fl:r?pl:ml).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(a)?e:void 0;const s=ln(e);if(!i){let l;if(s&&(l=Ru[t]))return l;if(t==="hasOwnProperty")return Ou}const o=Reflect.get(e,t,Kn(e)?e:a);if((me(t)?ll.has(t):Nu(t))||(i||ne(e,"get",t),r))return o;if(Kn(o)){const l=s&&ki(t)?o:o.value;return i&&Bn(l)?ut(l):l}return Bn(o)?i?ut(o):ct(o):o}}class ul extends cl{constructor(e=!1){super(!1,e)}set(e,t,a,i){let r=e[t];const s=ln(e)&&ki(t);if(!this._isShallow){const u=De(r);if(!de(a)&&!De(a)&&(r=gn(r),a=gn(a)),!s&&Kn(r)&&!Kn(a))return u||(r.value=a),!0}const o=s?Number(t)<e.length:kn(e,t),l=Reflect.set(e,t,a,Kn(e)?e:i);return e===gn(i)&&l&&(o?Ne(a,r)&&Ue(e,"set",t,a):Ue(e,"add",t,a)),l}deleteProperty(e,t){const a=kn(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&a&&Ue(e,"delete",t,void 0),i}has(e,t){const a=Reflect.has(e,t);return(!me(t)||!ll.has(t))&&ne(e,"has",t),a}ownKeys(e){return ne(e,"iterate",ln(e)?"length":_t),Reflect.ownKeys(e)}}class dl extends cl{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Du=new ul,Fu=new dl,Pu=new ul(!0),Hu=new dl(!0),gr=n=>n,za=n=>Reflect.getPrototypeOf(n);function Ku(n,e,t){return function(...a){const i=this.__v_raw,r=gn(i),s=ot(r),o=n==="entries"||n===Symbol.iterator&&s,l=n==="keys"&&s,u=i[n](...a),c=t?gr:e?dt:we;return!e&&ne(r,"iterate",l?vr:_t),$n(Object.create(u),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:o?[c(d[0]),c(d[1])]:c(d),done:m}}})}}function $a(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Vu(n,e){const t={get(i){const r=this.__v_raw,s=gn(r),o=gn(i);n||(Ne(i,o)&&ne(s,"get",i),ne(s,"get",o));const{has:l}=za(s),u=e?gr:n?dt:we;if(l.call(s,i))return u(r.get(i));if(l.call(s,o))return u(r.get(o));r!==s&&r.get(i)},get size(){const i=this.__v_raw;return!n&&ne(gn(i),"iterate",_t),i.size},has(i){const r=this.__v_raw,s=gn(r),o=gn(i);return n||(Ne(i,o)&&ne(s,"has",i),ne(s,"has",o)),i===o?r.has(i):r.has(i)||r.has(o)},forEach(i,r){const s=this,o=s.__v_raw,l=gn(o),u=e?gr:n?dt:we;return!n&&ne(l,"iterate",_t),o.forEach((c,d)=>i.call(r,u(c),u(d),s))}};return $n(t,n?{add:$a("add"),set:$a("set"),delete:$a("delete"),clear:$a("clear")}:{add(i){const r=gn(this),s=za(r),o=gn(i),l=!e&&!de(i)&&!De(i)?o:i;return s.has.call(r,l)||Ne(i,l)&&s.has.call(r,i)||Ne(o,l)&&s.has.call(r,o)||(r.add(l),Ue(r,"add",l,l)),this},set(i,r){!e&&!de(r)&&!De(r)&&(r=gn(r));const s=gn(this),{has:o,get:l}=za(s);let u=o.call(s,i);u||(i=gn(i),u=o.call(s,i));const c=l.call(s,i);return s.set(i,r),u?Ne(r,c)&&Ue(s,"set",i,r):Ue(s,"add",i,r),this},delete(i){const r=gn(this),{has:s,get:o}=za(r);let l=s.call(r,i);l||(i=gn(i),l=s.call(r,i)),o&&o.call(r,i);const u=r.delete(i);return l&&Ue(r,"delete",i,void 0),u},clear(){const i=gn(this),r=i.size!==0,s=i.clear();return r&&Ue(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ku(i,n,e)}),t}function Mi(n,e){const t=Vu(n,e);return(a,i,r)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?a:Reflect.get(kn(t,i)&&i in a?t:a,i,r)}const zu={get:Mi(!1,!1)},$u={get:Mi(!1,!0)},Uu={get:Mi(!0,!1)},Gu={get:Mi(!0,!0)},ml=new WeakMap,pl=new WeakMap,fl=new WeakMap,hl=new WeakMap;function Yu(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ct(n){return De(n)?n:Ri(n,!1,Du,zu,ml)}function vl(n){return Ri(n,!1,Pu,$u,pl)}function ut(n){return Ri(n,!0,Fu,Uu,fl)}function ju(n){return Ri(n,!0,Hu,Gu,hl)}function Ri(n,e,t,a,i){if(!Bn(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=i.get(n);if(r)return r;const s=Yu(fu(n));if(s===0)return n;const o=new Proxy(n,s===2?a:t);return i.set(n,o),o}function je(n){return De(n)?je(n.__v_raw):!!(n&&n.__v_isReactive)}function De(n){return!!(n&&n.__v_isReadonly)}function de(n){return!!(n&&n.__v_isShallow)}function Li(n){return n?!!n.__v_raw:!1}function gn(n){const e=n&&n.__v_raw;return e?gn(e):n}function Wu(n){return!kn(n,"__v_skip")&&Object.isExtensible(n)&&qo(n,"__v_skip",!0),n}const we=n=>Bn(n)?ct(n):n,dt=n=>Bn(n)?ut(n):n;function Kn(n){return n?n.__v_isRef===!0:!1}function hn(n){return gl(n,!1)}function On(n){return gl(n,!0)}function gl(n,e){return Kn(n)?n:new Ju(n,e)}class Ju{constructor(e,t){this.dep=new Ti,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:gn(e),this._value=t?e:we(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,a=this.__v_isShallow||de(e)||De(e);e=a?e:gn(e),Ne(e,t)&&(this._rawValue=e,this._value=a?e:we(e),this.dep.trigger())}}function Z(n){return Kn(n)?n.value:n}function Mn(n){return dn(n)?n():Z(n)}const qu={get:(n,e,t)=>e==="__v_raw"?n:Z(Reflect.get(n,e,t)),set:(n,e,t,a)=>{const i=n[e];return Kn(i)&&!Kn(t)?(i.value=t,!0):Reflect.set(n,e,t,a)}};function bl(n){return je(n)?n:new Proxy(n,qu)}class Xu{constructor(e){this.__v_isRef=!0,this._value=void 0;const t=this.dep=new Ti,{get:a,set:i}=e(t.track.bind(t),t.trigger.bind(t));this._get=a,this._set=i}get value(){return this._value=this._get()}set value(e){this._set(e)}}function wl(n){return new Xu(n)}class Zu{constructor(e,t,a){this._object=e,this._defaultValue=a,this.__v_isRef=!0,this._value=void 0,this._key=me(t)?t:String(t),this._raw=gn(e);let i=!0,r=e;if(!ln(e)||me(this._key)||!ki(this._key))do i=!Li(r)||de(r);while(i&&(r=r.__v_raw));this._shallow=i}get value(){let e=this._object[this._key];return this._shallow&&(e=Z(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Kn(this._raw[this._key])){const t=this._object[this._key];if(Kn(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return Mu(this._raw,this._key)}}class Qu{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function yl(n,e,t){return Kn(n)?n:dn(n)?new Qu(n):Bn(n)&&arguments.length>1?nd(n,e,t):hn(n)}function nd(n,e,t){return new Zu(n,e,t)}class ed{constructor(e,t,a){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ti(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=va-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&Ln!==this)return tl(this,!0),!0}get value(){const e=this.dep.track();return rl(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function td(n,e,t=!1){let a,i;return dn(n)?a=n:(a=n.get,i=n.set),new ed(a,i,t)}const Ua={},ui=new WeakMap;let bt;function ad(n,e=!1,t=bt){if(t){let a=ui.get(t);a||ui.set(t,a=[]),a.push(n)}}function id(n,e,t=Tn){const{immediate:a,deep:i,once:r,scheduler:s,augmentJob:o,call:l}=t,u=b=>i?b:de(b)||i===!1||i===0?Ge(b,1):Ge(b);let c,d,m,f,g=!1,w=!1;if(Kn(n)?(d=()=>n.value,g=de(n)):je(n)?(d=()=>u(n),g=!0):ln(n)?(w=!0,g=n.some(b=>je(b)||de(b)),d=()=>n.map(b=>{if(Kn(b))return b.value;if(je(b))return u(b);if(dn(b))return l?l(b,2):b()})):dn(n)?e?d=l?()=>l(n,2):n:d=()=>{if(m){qe();try{m()}finally{Xe()}}const b=bt;bt=c;try{return l?l(n,3,[f]):n(f)}finally{bt=b}}:d=Oe,e&&i){const b=d,R=i===!0?1/0:i;d=()=>Ge(b(),R)}const x=Ii(),C=()=>{c.stop(),x&&x.active&&Nr(x.effects,c)};if(r&&e){const b=e;e=(...R)=>{const Y=b(...R);return C(),Y}}let B=w?new Array(n.length).fill(Ua):Ua;const h=b=>{if(!(!(c.flags&1)||!c.dirty&&!b))if(e){const R=c.run();if(b||i||g||(w?R.some((Y,N)=>Ne(Y,B[N])):Ne(R,B))){m&&m();const Y=bt;bt=c;try{const N=[R,B===Ua?void 0:w&&B[0]===Ua?[]:B,f];B=R,l?l(e,3,N):e(...N)}finally{bt=Y}}}else c.run()};return o&&o(h),c=new nl(d),c.scheduler=s?()=>s(h,!1):h,f=b=>ad(b,!1,c),m=c.onStop=()=>{const b=ui.get(c);if(b){if(l)l(b,4);else for(const R of b)R();ui.delete(c)}},e?a?h(!0):B=c.run():s?s(h.bind(null,!0),!0):c.run(),C.pause=c.pause.bind(c),C.resume=c.resume.bind(c),C.stop=C,C}function Ge(n,e=1/0,t){if(e<=0||!Bn(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Kn(n))Ge(n.value,e,t);else if(ln(n))for(let a=0;a<n.length;a++)Ge(n[a],e,t);else if(li(n)||ot(n))n.forEach(a=>{Ge(a,e,t)});else if(Jo(n)){for(const a in n)Ge(n[a],e,t);for(const a of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,a)&&Ge(n[a],e,t)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ra(n,e,t,a){try{return a?n(...a):n()}catch(i){La(i,e,t)}}function ye(n,e,t,a){if(dn(n)){const i=Ra(n,e,t,a);return i&&jo(i)&&i.catch(r=>{La(r,e,t)}),i}if(ln(n)){const i=[];for(let r=0;r<n.length;r++)i.push(ye(n[r],e,t,a));return i}}function La(n,e,t,a=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||Tn;if(e){let o=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](n,l,u)===!1)return}o=o.parent}if(r){qe(),Ra(r,null,10,[n,l,u]),Xe();return}}rd(n,t,i,a,s)}function rd(n,e,t,a=!0,i=!1){if(i)throw n;console.error(n)}const ie=[];let Me=-1;const Pt=[];let rt=null,Nt=0;const xl=Promise.resolve();let di=null;function mt(n){const e=di||xl;return n?e.then(this?n.bind(this):n):e}function sd(n){let e=Me+1,t=ie.length;for(;e<t;){const a=e+t>>>1,i=ie[a],r=ba(i);r<n||r===n&&i.flags&2?e=a+1:t=a}return e}function Pr(n){if(!(n.flags&1)){const e=ba(n),t=ie[ie.length-1];!t||!(n.flags&2)&&e>=ba(t)?ie.push(n):ie.splice(sd(e),0,n),n.flags|=1,Bl()}}function Bl(){di||(di=xl.then(Sl))}function od(n){if(!ln(n))rt&&n.id===-1?rt.splice(Nt+1,0,n):n.flags&1||(Pt.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)Pt.push(n[e]);Bl()}function _s(n,e,t=Me+1){for(;t<ie.length;t++){const a=ie[t];if(a&&a.flags&2){if(n&&a.id!==n.uid)continue;ie.splice(t,1),t--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function mi(n){if(Pt.length){const e=[...new Set(Pt)].sort((t,a)=>ba(t)-ba(a));if(Pt.length=0,rt){for(let t=0;t<e.length;t++)rt.push(e[t]);return}for(rt=e,Nt=0;Nt<rt.length;Nt++){const t=rt[Nt];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}rt=null,Nt=0}}const ba=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Sl(n){try{for(Me=0;Me<ie.length;Me++){const e=ie[Me];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ra(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Me<ie.length;Me++){const e=ie[Me];e&&(e.flags&=-2)}Me=-1,ie.length=0,mi(),di=null,(ie.length||Pt.length)&&Sl()}}let Xn=null,kl=null;function pi(n){const e=Xn;return Xn=n,kl=n&&n.type.__scopeId||null,e}function xn(n,e=Xn,t){if(!e||n._n)return n;const a=(...i)=>{a._d&&bi(-1);const r=pi(e),s=We.length;let o;try{o=n(...i)}finally{for(let l=We.length;l>s;l--)Yr();pi(r),a._d&&bi(1)}return o};return a._n=!0,a._c=!0,a._d=!0,a}function wa(n,e){if(Xn===null)return n;const t=Pi(Xn),a=n.dirs||(n.dirs=[]);for(let i=0;i<e.length;i++){let[r,s,o,l=Tn]=e[i];r&&(dn(r)&&(r={mounted:r,updated:r}),r.deep&&Ge(s),a.push({dir:r,instance:t,value:s,oldValue:void 0,arg:o,modifiers:l}))}return n}function Re(n,e,t,a){const i=n.dirs,r=e&&e.dirs;for(let s=0;s<i.length;s++){const o=i[s];r&&(o.oldValue=r[s].value);let l=o.dir[a];l&&(qe(),ye(l,t,8,[n.el,o,n,e]),Xe())}}function lt(n,e){if(qn){let t=qn.provides;const a=qn.parent&&qn.parent.provides;a===t&&(t=qn.provides=Object.create(a)),t[n]=e}}function Qn(n,e,t=!1){const a=Ee();if(a||Et){let i=Et?Et._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(i&&n in i)return i[n];if(arguments.length>1)return t&&dn(e)?e.call(a&&a.proxy):e}}function _l(){return!!(Ee()||Et)}const ld=Symbol.for("v-scx"),cd=()=>Qn(ld);function ud(n,e){return Hr(n,null,e)}function Hn(n,e,t){return Hr(n,e,t)}function Hr(n,e,t=Tn){const{immediate:a,deep:i,flush:r,once:s}=t,o=$n({},t),l=e&&a||!e&&r!=="post";let u;if(jt){if(r==="sync"){const f=cd();u=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Oe,f.resume=Oe,f.pause=Oe,f}}const c=qn;o.call=(f,g,w)=>ye(f,c,g,w);let d=!1;r==="post"?o.scheduler=f=>{te(f,c&&c.suspense)}:r!=="sync"&&(d=!0,o.scheduler=(f,g)=>{g?f():Pr(f)}),o.augmentJob=f=>{e&&(f.flags|=4),d&&(f.flags|=2,c&&(f.id=c.uid,f.i=c))};const m=id(n,e,o);return jt&&(u?u.push(m):l&&m()),m}function dd(n,e,t){const a=this.proxy,i=Nn(n)?n.includes(".")?Al(a,n):()=>a[n]:n.bind(a,a);let r;dn(e)?r=e:(r=e.handler,t=e);const s=Da(this),o=Hr(i,r.bind(a),t);return s(),o}function Al(n,e){const t=e.split(".");return()=>{let a=n;for(let i=0;i<t.length&&a;i++)a=a[t[i]];return a}}const at=new WeakMap,El=Symbol("_vte"),Ni=n=>n.__isTeleport,yt=n=>n&&(n.disabled||n.disabled===""),md=n=>n&&(n.defer||n.defer===""),As=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Es=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,br=(n,e)=>{const t=n&&n.to;return Nn(t)?e?e(t):null:t},pd={name:"Teleport",__isTeleport:!0,process(n,e,t,a,i,r,s,o,l,u){const{mc:c,pc:d,pbc:m,o:{insert:f,querySelector:g,createText:w,createComment:x,parentNode:C}}=u,B=yt(e.props);let{dynamicChildren:h}=e;const b=(N,T,M)=>{N.shapeFlag&16&&c(N.children,T,M,i,r,s,o,l)},R=(N=e)=>{const T=yt(N.props),M=N.target=br(N.props,g),D=wr(M,N,w,f);M&&(s!=="svg"&&As(M)?s="svg":s!=="mathml"&&Es(M)&&(s="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(M),T||(b(N,M,D),oa(N,!1)))},Y=N=>{const T=()=>{if(at.get(N)===T){if(at.delete(N),yt(N.props)){const M=C(N.el)||t;b(N,M,N.anchor),oa(N,!0)}R(N)}};at.set(N,T),te(T,r)};if(n==null){const N=e.el=w(""),T=e.anchor=w("");if(f(N,t,a),f(T,t,a),md(e.props)||r&&r.pendingBranch){Y(e);return}B&&(b(e,t,T),oa(e,!0)),R()}else{e.el=n.el;const N=e.anchor=n.anchor,T=at.get(n);if(T){T.flags|=8,at.delete(n),Y(e);return}e.targetStart=n.targetStart;const M=e.target=n.target,D=e.targetAnchor=n.targetAnchor,P=yt(n.props),_=P?t:M,E=P?N:D;if(s==="svg"||As(M)?s="svg":(s==="mathml"||Es(M))&&(s="mathml"),h?(m(n.dynamicChildren,h,_,i,r,s,o),Gr(n,e,!0)):l||d(n,e,_,E,i,r,s,o,!1),B)P?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Ga(e,t,N,u,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const I=br(e.props,g);I&&(e.target=I,Ga(e,I,null,u,0))}else P&&Ga(e,M,D,u,1);oa(e,B)}},remove(n,e,t,{um:a,o:{remove:i}},r){const{shapeFlag:s,children:o,anchor:l,targetStart:u,targetAnchor:c,target:d,props:m}=n,f=yt(m),g=r||!f,w=at.get(n);if(w&&(w.flags|=8,at.delete(n)),d&&(i(u),i(c)),r&&i(l),!w&&(f||d)&&s&16)for(let x=0;x<o.length;x++){const C=o[x];a(C,e,t,g,!!C.dynamicChildren)}},move:Ga,hydrate:fd};function Ga(n,e,t,{o:{insert:a},m:i},r=2){r===0&&a(n.targetAnchor,e,t);const{el:s,anchor:o,shapeFlag:l,children:u,props:c}=n,d=r===2;if(d&&a(s,e,t),!at.has(n)&&(!d||yt(c))&&l&16)for(let m=0;m<u.length;m++)i(u[m],e,t,2);d&&a(o,e,t)}function fd(n,e,t,a,i,r,{o:{nextSibling:s,parentNode:o,querySelector:l,insert:u,createText:c}},d){function m(x,C){let B=C;for(;B;){if(B&&B.nodeType===8){if(B.data==="teleport start anchor")e.targetStart=B;else if(B.data==="teleport anchor"){e.targetAnchor=B,x._lpa=e.targetAnchor&&s(e.targetAnchor);break}}B=s(B)}}function f(x,C){C.anchor=d(s(x),C,o(x),t,a,i,r)}const g=e.target=br(e.props,l),w=yt(e.props);if(g){const x=g._lpa||g.firstChild;e.shapeFlag&16&&(w?(f(n,e),m(g,x),e.targetAnchor||wr(g,e,c,u,o(n)===g?n:null)):(e.anchor=s(n),m(g,x),e.targetAnchor||wr(g,e,c,u),d(x&&s(x),e,g,t,a,i,r))),oa(e,w)}else w&&e.shapeFlag&16&&(f(n,e),e.targetStart=n,e.targetAnchor=s(n));return e.anchor&&s(e.anchor)}const Il=pd;function oa(n,e){const t=n.ctx;if(t&&t.ut){let a,i;for(e?(a=n.el,i=n.anchor):(a=n.targetStart,i=n.targetAnchor);a&&a!==i;)a.nodeType===1&&a.setAttribute("data-v-owner",t.uid),a=a.nextSibling;t.ut()}}function wr(n,e,t,a,i=null){const r=e.targetStart=t(""),s=e.targetAnchor=t("");return r[El]=s,n&&(a(r,n,i),a(s,n,i)),s}const ve=Symbol("_leaveCb"),aa=Symbol("_enterCb");function Tl(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Jn(()=>{n.isMounted=!0}),Di(()=>{n.isUnmounting=!0}),n}const fe=[Function,Array],Cl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:fe,onEnter:fe,onAfterEnter:fe,onEnterCancelled:fe,onBeforeLeave:fe,onLeave:fe,onAfterLeave:fe,onLeaveCancelled:fe,onBeforeAppear:fe,onAppear:fe,onAfterAppear:fe,onAppearCancelled:fe},Ml=n=>{const e=n.subTree;return e.component?Ml(e.component):e},hd={name:"BaseTransition",props:Cl,setup(n,{slots:e}){const t=Ee(),a=Tl();return()=>{const i=e.default&&Kr(e.default(),!0),r=i&&i.length?Rl(i):t.subTree?mn():void 0;if(!r)return;const s=gn(n),{mode:o}=s;if(a.isLeaving)return Xi(r);const l=fi(r);if(!l)return Xi(r);let u=ya(l,s,a,t,d=>u=d);l.type!==Wn&&Tt(l,u);let c=t.subTree&&fi(t.subTree);if(c&&c.type!==Wn&&!xt(c,l)&&Ml(t).type!==Wn){let d=ya(c,s,a,t);if(Tt(c,d),o==="out-in"&&l.type!==Wn)return a.isLeaving=!0,d.afterLeave=()=>{a.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,c=void 0},Xi(r);o==="in-out"&&l.type!==Wn?d.delayLeave=(m,f,g)=>{const w=Ll(a,c);w[String(c.key)]=c,m[ve]=()=>{f(),m[ve]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{g(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return r}}};function Rl(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Wn){e=t;break}}return e}const vd=hd;function Ll(n,e){const{leavingVNodes:t}=n;let a=t.get(e.type);return a||(a=Object.create(null),t.set(e.type,a)),a}function ya(n,e,t,a,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:m,onLeave:f,onAfterLeave:g,onLeaveCancelled:w,onBeforeAppear:x,onAppear:C,onAfterAppear:B,onAppearCancelled:h}=e,b=String(n.key),R=Ll(t,n),Y=(M,D)=>{M&&ye(M,a,9,D)},N=(M,D)=>{const P=D[1];Y(M,D),ln(M)?M.every(_=>_.length<=1)&&P():M.length<=1&&P()},T={mode:s,persisted:o,beforeEnter(M){let D=l;if(!t.isMounted)if(r)D=x||l;else return;M[ve]&&M[ve](!0);const P=R[b];P&&xt(n,P)&&P.el[ve]&&P.el[ve](),Y(D,[M])},enter(M){if(R[b]===n)return;let D=u,P=c,_=d;if(!t.isMounted)if(r)D=C||u,P=B||c,_=h||d;else return;let E=!1;M[aa]=S=>{E||(E=!0,S?Y(_,[M]):Y(P,[M]),T.delayedLeave&&T.delayedLeave(),M[aa]=void 0)};const I=M[aa].bind(null,!1);D?N(D,[M,I]):I()},leave(M,D){const P=String(n.key);if(M[aa]&&M[aa](!0),t.isUnmounting)return D();Y(m,[M]);let _=!1;M[ve]=I=>{_||(_=!0,D(),I?Y(w,[M]):Y(g,[M]),M[ve]=void 0,R[P]===n&&delete R[P])};const E=M[ve].bind(null,!1);R[P]=n,f?N(f,[M,E]):E()},clone(M){const D=ya(M,e,t,a,i);return i&&i(D),D}};return T}function Xi(n){if(Na(n))return n=pt(n),n.children=null,n}function fi(n){if(!Na(n))return Ni(n.type)&&n.children?Rl(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&dn(t.default))return t.default()}}function Tt(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Tt(Ni(t.type)&&fi(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Kr(n,e=!1,t){let a=[],i=0;for(let r=0;r<n.length;r++){let s=n[r];const o=t==null?s.key:String(t)+String(s.key!=null?s.key:r);s.type===bn?(s.patchFlag&128&&i++,a=a.concat(Kr(s.children,e,o))):(e||s.type!==Wn)&&a.push(o!=null?pt(s,{key:o}):s)}if(i>1)for(let r=0;r<a.length;r++)a[r].patchFlag=-2;return a}function vn(n,e){return dn(n)?$n({name:n.name},e,{setup:n}):n}function Nl(){const n=Ee();return n?(n.appContext.config.idPrefix||"v")+"-"+n.ids[0]+n.ids[1]++:""}function Vr(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Is(n){const e=Ee(),t=On(null);if(e){const i=e.refs===Tn?e.refs={}:e.refs;Object.defineProperty(i,n,{enumerable:!0,get:()=>t.value,set:r=>t.value=r})}return t}function Ts(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const hi=new WeakMap;function Ht(n,e,t,a,i=!1){if(ln(n)){n.forEach((w,x)=>Ht(w,e&&(ln(e)?e[x]:e),t,a,i));return}if(At(a)&&!i){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Ht(n,e,t,a.component.subTree);return}const r=a.shapeFlag&4?Pi(a.component):a.el,s=i?null:r,{i:o,r:l}=n,u=e&&e.r,c=o.refs===Tn?o.refs={}:o.refs,d=o.setupState,m=gn(d),f=d===Tn?Yo:w=>Ts(c,w)?!1:kn(m,w),g=(w,x)=>!(x&&Ts(c,x));if(u!=null&&u!==l){if(Cs(e),Nn(u))c[u]=null,f(u)&&(d[u]=null);else if(Kn(u)){const w=e;g(u,w.k)&&(u.value=null),w.k&&(c[w.k]=null)}}if(dn(l))Ra(l,o,12,[s,c]);else{const w=Nn(l),x=Kn(l);if(w||x){const C=()=>{if(n.f){const B=w?f(l)?d[l]:c[l]:g()||!n.k?l.value:c[n.k];if(i)ln(B)&&Nr(B,r);else if(ln(B))B.includes(r)||B.push(r);else if(w)c[l]=[r],f(l)&&(d[l]=c[l]);else{const h=[r];g(l,n.k)&&(l.value=h),n.k&&(c[n.k]=h)}}else w?(c[l]=s,f(l)&&(d[l]=s)):x&&(g(l,n.k)&&(l.value=s),n.k&&(c[n.k]=s))};if(s){const B=()=>{C(),hi.delete(n)};B.id=-1,hi.set(n,B),te(B,t)}else Cs(n),C()}}}function Cs(n){const e=hi.get(n);e&&(e.flags|=8,hi.delete(n))}let Ms=!1;const Rt=()=>{Ms||(console.error("Hydration completed but contains mismatches."),Ms=!0)},gd=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",bd=n=>n.namespaceURI.includes("MathML"),Ya=n=>{if(n.nodeType===1){if(gd(n))return"svg";if(bd(n))return"mathml"}},Ft=n=>n.nodeType===8;function wd(n){const{mt:e,p:t,o:{patchProp:a,createText:i,nextSibling:r,parentNode:s,remove:o,insert:l,createComment:u}}=n,c=(h,b)=>{if(!b.hasChildNodes()){t(null,h,b),mi(),b._vnode=h;return}d(b.firstChild,h,null,null,null),mi(),b._vnode=h},d=(h,b,R,Y,N,T=!1)=>{T=T||!!b.dynamicChildren;const M=Ft(h)&&h.data==="[",D=()=>w(h,b,R,Y,N,M),{type:P,ref:_,shapeFlag:E,patchFlag:I}=b;let S=h.nodeType;b.el=h,I===-2&&(T=!1,b.dynamicChildren=null);let y=null;switch(P){case It:S!==3?b.children===""?(l(b.el=i(""),s(h),h),y=h):y=D():(h.data!==b.children&&(Rt(),h.data=b.children),y=r(h));break;case Wn:B(h)?(y=r(h),C(b.el=h.content.firstChild,h,R)):S!==8||M?y=D():y=r(h);break;case Kt:if(M&&(h=r(h),S=h.nodeType),S===1||S===3){y=h;const q=!b.children.length;for(let W=0;W<b.staticCount;W++)q&&(b.children+=y.nodeType===1?y.outerHTML:y.data),W===b.staticCount-1&&(b.anchor=y),y=r(y);return M?r(y):y}else D();break;case bn:M?y=g(h,b,R,Y,N,T):y=D();break;default:if(E&1)(S!==1||b.type.toLowerCase()!==h.tagName.toLowerCase())&&!B(h)?y=D():y=m(h,b,R,Y,N,T);else if(E&6){b.slotScopeIds=N;const q=s(h);if(M?y=x(h):Ft(h)&&h.data==="teleport start"?y=x(h,h.data,"teleport end"):y=r(h),e(b,q,null,R,Y,Ya(q),T),(At(b)||b.component.asyncDep)&&!b.component.subTree){let W;M?(W=sn(Kt),W.anchor=y?y.previousSibling:q.lastChild):W=h.nodeType===3?ke(""):sn(h.nodeType===8?Wn:"div"),W.el=h,b.component.subTree=W}}else E&64?S!==8?y=D():y=b.type.hydrate(h,b,R,Y,N,T,n,f):E&128&&(y=b.type.hydrate(h,b,R,Y,Ya(s(h)),N,T,n,d))}return _!=null&&Ht(_,null,Y,b),y},m=(h,b,R,Y,N,T)=>{T=T||!!b.dynamicChildren;const{type:M,dynamicProps:D,props:P,patchFlag:_,shapeFlag:E,dirs:I,transition:S}=b,y=M==="input"||M==="option",q=!!D;if(y||q||_!==-1){I&&Re(b,null,R,"created");let W=!1;if(B(h)){W=ec(null,S)&&R&&R.vnode.props&&R.vnode.props.appear;const cn=h.content.firstChild;if(W){const yn=cn.getAttribute("class");yn&&(cn.$cls=yn),S.beforeEnter(cn)}C(cn,h,R),b.el=h=cn}if(E&16&&!(P&&(P.innerHTML||P.textContent))){let cn=f(h.firstChild,b,h,R,Y,N,T);for(cn&&!ai(h,1)&&Rt();cn;){const yn=cn;cn=cn.nextSibling,o(yn)}}else if(E&8){let cn=b.children;cn[0]===`
`&&(h.tagName==="PRE"||h.tagName==="TEXTAREA")&&(cn=cn.slice(1));const{textContent:yn}=h;yn!==cn&&yn!==cn.replace(/\r\n|\r/g,`
`)&&(ai(h,0)||Rt(),h.textContent=b.children)}if(P){if(y||q||!T||_&48){const cn=h.tagName.includes("-"),yn=h.namespaceURI.includes("svg")?"svg":h.namespaceURI.includes("MathML")?"mathml":void 0;for(const An in P)if(y&&(An.endsWith("value")||An==="indeterminate")||Ta(An)&&!kt(An)||An[0]==="."||cn&&!kt(An)||D&&D.includes(An)){if(xd(h,An,P[An]))continue;a(h,An,null,P[An],yn,R)}}else if(P.onClick)a(h,"onClick",null,P.onClick,void 0,R);else if(_&4&&je(P.style))for(const cn in P.style)P.style[cn]}let pn;(pn=P&&P.onVnodeBeforeMount)&&he(pn,R,b),I&&Re(b,null,R,"beforeMount"),((pn=P&&P.onVnodeMounted)||I||W)&&rc(()=>{pn&&he(pn,R,b),W&&S.enter(h),I&&Re(b,null,R,"mounted")},Y)}return h.nextSibling},f=(h,b,R,Y,N,T,M)=>{M=M||!!b.dynamicChildren;const D=b.children,P=D.length;let _=!1;for(let E=0;E<P;E++){const I=M?D[E]:D[E]=ge(D[E]),S=I.type===It;h?(S&&!M&&E+1<P&&ge(D[E+1]).type===It&&(l(i(h.data.slice(I.children.length)),R,r(h)),h.data=I.children),h=d(h,I,Y,N,T,M)):S&&!I.children?l(I.el=i(""),R):(_||(_=!0,ai(R,1)||Rt()),t(null,I,R,null,Y,N,Ya(R),T))}return h},g=(h,b,R,Y,N,T)=>{const{slotScopeIds:M}=b;M&&(N=N?N.concat(M):M);const D=s(h),P=f(r(h),b,D,R,Y,N,T);return P&&Ft(P)&&P.data==="]"?r(b.anchor=P):(Rt(),l(b.anchor=u("]"),D,P),P)},w=(h,b,R,Y,N,T)=>{if(Sd(h,b)||Rt(),b.el=null,T){const P=x(h);for(;;){const _=r(h);if(_&&_!==P)o(_);else break}}const M=r(h),D=s(h);return o(h),t(null,b,D,M,R,Y,Ya(D),N),R&&(R.vnode.el=b.el,Yl(R,b.el)),M},x=(h,b="[",R="]")=>{let Y=0;for(;h;)if(h=r(h),h&&Ft(h)&&(h.data===b&&Y++,h.data===R)){if(Y===0)return r(h);Y--}return h},C=(h,b,R)=>{const Y=b.parentNode;Y&&Y.replaceChild(h,b);let N=R;for(;N;)N.vnode.el===b&&(N.vnode.el=N.subTree.el=h),N=N.parent},B=h=>h.nodeType===1&&h.tagName==="TEMPLATE";return[c,d]}const yd=new Set(["src","srcset","href","poster"]);function xd(n,e,t){return yd.has(e)?n.getAttribute(e)===(t==null?null:`${t}`):!1}const vi="data-allow-mismatch",Bd={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function ai(n,e){if(e===0||e===1)for(;n&&!n.hasAttribute(vi);)n=n.parentElement;return zr(n&&n.getAttribute(vi),e)}function zr(n,e){if(n==null)return!1;if(n==="")return!0;{const t=n.split(",");return e===0&&t.includes("children")?!0:t.includes(Bd[e])}}function Sd(n,e){return ai(n.parentElement,1)||kd(n)||_d(e)}function kd(n){return n.nodeType===1&&zr(n.getAttribute(vi),1)}function _d({props:n}){const e=n&&n[vi];return typeof e=="string"&&zr(e,1)}Ai().requestIdleCallback;Ai().cancelIdleCallback;function Ad(n,e){if(Ft(n)&&n.data==="["){let t=1,a=n.nextSibling;for(;a;){if(a.nodeType===1){if(e(a)===!1)break}else if(Ft(a))if(a.data==="]"){if(--t===0)break}else a.data==="["&&t++;a=a.nextSibling}}else e(n)}const At=n=>!!n.type.__asyncLoader;function Ed(n){dn(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:a,delay:i=200,hydrate:r,timeout:s,suspensible:o=!0,onError:l}=n;let u=null,c,d=0;const m=()=>(d++,u=null,f()),f=()=>{let g;return u||(g=u=e().catch(w=>{if(w=w instanceof Error?w:new Error(String(w)),l)return new Promise((x,C)=>{l(w,()=>x(m()),()=>C(w),d+1)});throw w}).then(w=>g!==u&&u?u:(w&&(w.__esModule||w[Symbol.toStringTag]==="Module")&&(w=w.default),c=w,w)))};return vn({name:"AsyncComponentWrapper",__asyncLoader:f,__asyncHydrate(g,w,x){const C=g.isConnected;let B=!1;(w.bu||(w.bu=[])).push(()=>B=!0);const h=()=>{B||!g.parentNode||C&&!g.isConnected||x()},b=r?()=>{const R=r(h,Y=>Ad(g,Y));R&&(w.bum||(w.bum=[])).push(R)}:h;c?b():f().then(()=>!w.isUnmounted&&b())},get __asyncResolved(){return c},setup(){const g=qn;if(Vr(g),c)return()=>ja(c,g);const w=R=>{u=null,La(R,g,13,!a)};if(o&&g.suspense||jt)return f().then(R=>()=>ja(R,g)).catch(R=>(w(R),()=>a?sn(a,{error:R}):null));const x=hn(!1),C=hn(),B=hn(!!i);let h,b;return Zt(()=>{h!=null&&clearTimeout(h),b!=null&&clearTimeout(b)}),i&&(b=setTimeout(()=>{g.isUnmounted||(B.value=!1)},i)),s!=null&&(h=setTimeout(()=>{if(!g.isUnmounted&&!x.value&&!C.value){const R=new Error(`Async component timed out after ${s}ms.`);w(R),C.value=R}},s)),f().then(()=>{g.isUnmounted||(x.value=!0,g.parent&&Na(g.parent.vnode)&&g.parent.update())}).catch(R=>{if(g.isUnmounted){u=null;return}w(R),C.value=R}),()=>{if(x.value&&c)return ja(c,g);if(C.value&&a)return sn(a,{error:C.value});if(t&&!B.value)return ja(t,g)}}})}function ja(n,e){const{ref:t,props:a,children:i,ce:r}=e.vnode,s=sn(n,a,i);return s.ref=t,s.ce=r,delete e.vnode.ce,s}const Na=n=>n.type.__isKeepAlive;function Id(n,e){Ol(n,"a",e)}function Td(n,e){Ol(n,"da",e)}function Ol(n,e,t=qn){const a=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(Oi(e,a,t),t){let i=t.parent;for(;i&&i.parent;)Na(i.parent.vnode)&&Cd(a,e,t,i),i=i.parent}}function Cd(n,e,t,a){const i=Oi(e,n,a,!0);Zt(()=>{Nr(a[e],i)},t)}function Oi(n,e,t=qn,a=!1){if(t){const i=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...s)=>{qe();const o=Da(t),l=ye(e,t,n,s);return o(),Xe(),l});return a?i.unshift(r):i.push(r),r}}const Ze=n=>(e,t=qn)=>{(!jt||n==="sp")&&Oi(n,(...a)=>e(...a),t)},Md=Ze("bm"),Jn=Ze("m"),Rd=Ze("bu"),Dl=Ze("u"),Di=Ze("bum"),Zt=Ze("um"),Ld=Ze("sp"),Nd=Ze("rtg"),Od=Ze("rtc");function Dd(n,e=qn){Oi("ec",n,e)}const Fl="components";function Oa(n,e){return Hl(Fl,n,!0,e)||n}const Pl=Symbol.for("v-ndc");function Fd(n){return Nn(n)?Hl(Fl,n,!1)||n:n||Pl}function Hl(n,e,t=!0,a=!1){const i=Xn||qn;if(i){const r=i.type;{const o=bm(r,!1);if(o&&(o===e||o===Zn(e)||o===Ma(Zn(e))))return r}const s=Rs(i[n]||r[n],e)||Rs(i.appContext[n],e);return!s&&a?r:s}}function Rs(n,e){return n&&(n[e]||n[Zn(e)]||n[Ma(Zn(e))])}function pe(n,e,t,a){let i;const r=t,s=ln(n);if(s||Nn(n)){const o=s&&je(n);let l=!1,u=!1;o&&(l=!de(n),u=De(n),n=Ci(n)),i=new Array(n.length);for(let c=0,d=n.length;c<d;c++)i[c]=e(l?u?dt(we(n[c])):we(n[c]):n[c],c,void 0,r)}else if(typeof n=="number"){i=new Array(n);for(let o=0;o<n;o++)i[o]=e(o+1,o,void 0,r)}else if(Bn(n))if(n[Symbol.iterator])i=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);i=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];i[l]=e(n[c],c,l,r)}}else i=[];return i}function Pd(n,e){for(let t=0;t<e.length;t++){const a=e[t];if(ln(a))for(let i=0;i<a.length;i++)n[a[i].name]=a[i].fn;else a&&(n[a.name]=a.key?(...i)=>{const r=a.fn(...i);return r&&(r.key=a.key),r}:a.fn)}return n}function _n(n,e,t,a,i,r){if(t==null&&(t={}),Xn.ce||Xn.parent&&At(Xn.parent)&&Xn.parent.ce){const u=t,c=Object.keys(u).length>0;return e!=="default"&&(u.name=e),F(),Dn(bn,null,[sn("slot",u,a&&a())],c?-2:64)}let s=n[e];s&&s._c&&(s._d=!1);const o=We.length;F();let l;try{const u=s&&Kl(s(t)),c=t.key||r||u&&u.key;l=Dn(bn,{key:(c&&!me(c)?c:`_${e}`)+(!u&&a?"_fb":"")},u||(a?a():[]),u&&n._===1?64:-2)}catch(u){for(let c=We.length;c>o;c--)Yr();throw u}finally{s&&s._c&&(s._d=!0)}return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function Kl(n){return n.some(e=>Ba(e)?!(e.type===Wn||e.type===bn&&!Kl(e.children)):!0)?n:null}const yr=n=>n?lc(n)?Pi(n):yr(n.parent):null,ma=$n(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>yr(n.parent),$root:n=>yr(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>zl(n),$forceUpdate:n=>n.f||(n.f=()=>{Pr(n.update)}),$nextTick:n=>n.n||(n.n=mt.bind(n.proxy)),$watch:n=>dd.bind(n)}),Zi=(n,e)=>n!==Tn&&!n.__isScriptSetup&&kn(n,e),Hd={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:a,data:i,props:r,accessCache:s,type:o,appContext:l}=n;if(e[0]!=="$"){const m=s[e];if(m!==void 0)switch(m){case 1:return a[e];case 2:return i[e];case 4:return t[e];case 3:return r[e]}else{if(Zi(a,e))return s[e]=1,a[e];if(i!==Tn&&kn(i,e))return s[e]=2,i[e];if(kn(r,e))return s[e]=3,r[e];if(t!==Tn&&kn(t,e))return s[e]=4,t[e];xr&&(s[e]=0)}}const u=ma[e];let c,d;if(u)return e==="$attrs"&&ne(n.attrs,"get",""),u(n);if((c=o.__cssModules)&&(c=c[e]))return c;if(t!==Tn&&kn(t,e))return s[e]=4,t[e];if(d=l.config.globalProperties,kn(d,e))return d[e]},set({_:n},e,t){const{data:a,setupState:i,ctx:r}=n;return Zi(i,e)?(i[e]=t,!0):a!==Tn&&kn(a,e)?(a[e]=t,!0):kn(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:a,appContext:i,props:r,type:s}},o){let l;return!!(t[o]||n!==Tn&&o[0]!=="$"&&kn(n,o)||Zi(e,o)||kn(r,o)||kn(a,o)||kn(ma,o)||kn(i.config.globalProperties,o)||(l=s.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:kn(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ls(n){return ln(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let xr=!0;function Kd(n){const e=zl(n),t=n.proxy,a=n.ctx;xr=!1,e.beforeCreate&&Ns(e.beforeCreate,n,"bc");const{data:i,computed:r,methods:s,watch:o,provide:l,inject:u,created:c,beforeMount:d,mounted:m,beforeUpdate:f,updated:g,activated:w,deactivated:x,beforeDestroy:C,beforeUnmount:B,destroyed:h,unmounted:b,render:R,renderTracked:Y,renderTriggered:N,errorCaptured:T,serverPrefetch:M,expose:D,inheritAttrs:P,components:_,directives:E,filters:I}=e;if(u&&Vd(u,a,null),s)for(const q in s){const W=s[q];dn(W)&&(a[q]=W.bind(t))}if(i){const q=i.call(t,t);Bn(q)&&(n.data=ct(q))}if(xr=!0,r)for(const q in r){const W=r[q],pn=dn(W)?W.bind(t,t):dn(W.get)?W.get.bind(t,t):Oe,cn=!dn(W)&&dn(W.set)?W.set.bind(t):Oe,yn=A({get:pn,set:cn});Object.defineProperty(a,q,{enumerable:!0,configurable:!0,get:()=>yn.value,set:An=>yn.value=An})}if(o)for(const q in o)Vl(o[q],a,t,q);if(l){const q=dn(l)?l.call(t):l;Reflect.ownKeys(q).forEach(W=>{lt(W,q[W])})}c&&Ns(c,n,"c");function y(q,W){ln(W)?W.forEach(pn=>q(pn.bind(t))):W&&q(W.bind(t))}if(y(Md,d),y(Jn,m),y(Rd,f),y(Dl,g),y(Id,w),y(Td,x),y(Dd,T),y(Od,Y),y(Nd,N),y(Di,B),y(Zt,b),y(Ld,M),ln(D))if(D.length){const q=n.exposed||(n.exposed={});D.forEach(W=>{Object.defineProperty(q,W,{get:()=>t[W],set:pn=>t[W]=pn,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===Oe&&(n.render=R),P!=null&&(n.inheritAttrs=P),_&&(n.components=_),E&&(n.directives=E),M&&Vr(n)}function Vd(n,e,t=Oe){ln(n)&&(n=Br(n));for(const a in n){const i=n[a];let r;Bn(i)?"default"in i?r=Qn(i.from||a,i.default,!0):r=Qn(i.from||a):r=Qn(i),Kn(r)?Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>r.value,set:s=>r.value=s}):e[a]=r}}function Ns(n,e,t){ye(ln(n)?n.map(a=>a.bind(e.proxy)):n.bind(e.proxy),e,t)}function Vl(n,e,t,a){let i=a.includes(".")?Al(t,a):()=>t[a];if(Nn(n)){const r=e[n];dn(r)&&Hn(i,r)}else if(dn(n))Hn(i,n.bind(t));else if(Bn(n))if(ln(n))n.forEach(r=>Vl(r,e,t,a));else{const r=dn(n.handler)?n.handler.bind(t):e[n.handler];dn(r)&&Hn(i,r,n)}}function zl(n){const e=n.type,{mixins:t,extends:a}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:s}}=n.appContext,o=r.get(e);let l;return o?l=o:!i.length&&!t&&!a?l=e:(l={},i.length&&i.forEach(u=>gi(l,u,s,!0)),gi(l,e,s)),Bn(e)&&r.set(e,l),l}function gi(n,e,t,a=!1){const{mixins:i,extends:r}=e;r&&gi(n,r,t,!0),i&&i.forEach(s=>gi(n,s,t,!0));for(const s in e)if(!(a&&s==="expose")){const o=zd[s]||t&&t[s];n[s]=o?o(n[s],e[s]):e[s]}return n}const zd={data:Os,props:Ds,emits:Ds,methods:la,computed:la,beforeCreate:ee,created:ee,beforeMount:ee,mounted:ee,beforeUpdate:ee,updated:ee,beforeDestroy:ee,beforeUnmount:ee,destroyed:ee,unmounted:ee,activated:ee,deactivated:ee,errorCaptured:ee,serverPrefetch:ee,components:la,directives:la,watch:Ud,provide:Os,inject:$d};function Os(n,e){return e?n?function(){return $n(dn(n)?n.call(this,this):n,dn(e)?e.call(this,this):e)}:e:n}function $d(n,e){return la(Br(n),Br(e))}function Br(n){if(ln(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ee(n,e){return n?[...new Set([].concat(n,e))]:e}function la(n,e){return n?$n(Object.create(null),n,e):e}function Ds(n,e){return n?ln(n)&&ln(e)?[...new Set([...n,...e])]:$n(Object.create(null),Ls(n),Ls(e??{})):e}function Ud(n,e){if(!n)return e;if(!e)return n;const t=$n(Object.create(null),n);for(const a in e)t[a]=ee(n[a],e[a]);return t}function $l(){return{app:null,config:{isNativeTag:Yo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gd=0;function Yd(n,e){return function(a,i=null){dn(a)||(a=$n({},a)),i!=null&&!Bn(i)&&(i=null);const r=$l(),s=new WeakSet,o=[];let l=!1;const u=r.app={_uid:Gd++,_component:a,_props:i,_container:null,_context:r,_instance:null,version:ym,get config(){return r.config},set config(c){},use(c,...d){return s.has(c)||(c&&dn(c.install)?(s.add(c),c.install(u,...d)):dn(c)&&(s.add(c),c(u,...d))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,d){return d?(r.components[c]=d,u):r.components[c]},directive(c,d){return d?(r.directives[c]=d,u):r.directives[c]},mount(c,d,m){if(!l){const f=u._ceVNode||sn(a,i);return f.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),d&&e?e(f,c):n(f,c,m),l=!0,u._container=c,c.__vue_app__=u,Pi(f.component)}},onUnmount(c){o.push(c)},unmount(){l&&(ye(o,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,d){return r.provides[c]=d,u},runWithContext(c){const d=Et;Et=u;try{return c()}finally{Et=d}}};return u}}let Et=null;const jd=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Zn(e)}Modifiers`]||n[`${ft(e)}Modifiers`];function Wd(n,e,...t){if(n.isUnmounted)return;const a=n.vnode.props||Tn;let i=t;const r=e.startsWith("update:"),s=r&&jd(a,e.slice(7));s&&(s.trim&&(i=t.map(c=>Nn(c)?c.trim():c)),s.number&&(i=i.map(gu)));let o,l=a[o=Ui(e)]||a[o=Ui(Zn(e))];!l&&r&&(l=a[o=Ui(ft(e))]),l&&ye(l,n,6,i);const u=a[o+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,ye(u,n,6,i)}}const Jd=new WeakMap;function Ul(n,e,t=!1){const a=t?Jd:e.emitsCache,i=a.get(n);if(i!==void 0)return i;const r=n.emits;let s={},o=!1;if(!dn(n)){const l=u=>{const c=Ul(u,e,!0);c&&(o=!0,$n(s,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(Bn(n)&&a.set(n,null),null):(ln(r)?r.forEach(l=>s[l]=null):$n(s,r),Bn(n)&&a.set(n,s),s)}function Fi(n,e){return!n||!Ta(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),kn(n,e[0].toLowerCase()+e.slice(1))||kn(n,ft(e))||kn(n,e))}function Qi(n){const{type:e,vnode:t,proxy:a,withProxy:i,propsOptions:[r],slots:s,attrs:o,emit:l,render:u,renderCache:c,props:d,data:m,setupState:f,ctx:g,inheritAttrs:w}=n,x=pi(n);let C,B;try{if(t.shapeFlag&4){const b=i||a,R=b;C=ge(u.call(R,b,c,d,f,m,g)),B=o}else{const b=e;C=ge(b.length>1?b(d,{attrs:o,slots:s,emit:l}):b(d,null)),B=e.props?o:qd(o)}}catch(b){We.length=0,La(b,n,1),C=sn(Wn)}let h=C;if(B&&w!==!1){const b=Object.keys(B),{shapeFlag:R}=h;b.length&&R&7&&(r&&b.some(Si)&&(B=Xd(B,r)),h=pt(h,B,!1,!0))}if(t.dirs&&(h=pt(h,null,!1,!0),h.dirs=h.dirs?h.dirs.concat(t.dirs):t.dirs),t.transition){const b=Ni(h.type)&&fi(h)||h;Tt(b,t.transition)}return C=h,pi(x),C}const qd=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ta(t))&&((e||(e={}))[t]=n[t]);return e},Xd=(n,e)=>{const t={};for(const a in n)(!Si(a)||!(a.slice(9)in e))&&(t[a]=n[a]);return t};function Zd(n,e,t){const{props:a,children:i,component:r}=n,{props:s,children:o,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return a?Fs(a,s,u):!!s;if(l&8){const c=e.dynamicProps;for(let d=0;d<c.length;d++){const m=c[d];if(Gl(s,a,m)&&!Fi(u,m))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:a===s?!1:a?s?Fs(a,s,u):!0:!!s;return!1}function Fs(n,e,t){const a=Object.keys(e);if(a.length!==Object.keys(n).length)return!0;for(let i=0;i<a.length;i++){const r=a[i];if(Gl(e,n,r)&&!Fi(t,r))return!0}return!1}function Gl(n,e,t){const a=n[t],i=e[t];return t==="style"&&Bn(a)&&Bn(i)?!Ei(a,i):a!==i}function Yl({vnode:n,parent:e,suspense:t},a){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.suspense.vnode.el=i.el=a,n=i),i===n)(n=e.vnode).el=a,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=a)}const jl={},Wl=()=>Object.create(jl),Jl=n=>Object.getPrototypeOf(n)===jl;function Qd(n,e,t,a=!1){const i={},r=Wl();n.propsDefaults=Object.create(null),ql(n,e,i,r);for(const s in n.propsOptions[0])s in i||(i[s]=void 0);t?n.props=a?i:vl(i):n.type.props?n.props=i:n.props=r,n.attrs=r}function nm(n,e,t,a){const{props:i,attrs:r,vnode:{patchFlag:s}}=n,o=gn(i),[l]=n.propsOptions;let u=!1;if((a||s>0)&&!(s&16)){if(s&8){const c=n.vnode.dynamicProps;for(let d=0;d<c.length;d++){let m=c[d];if(Fi(n.emitsOptions,m))continue;const f=e[m];if(l)if(kn(r,m))f!==r[m]&&(r[m]=f,u=!0);else{const g=Zn(m);i[g]=Sr(l,o,g,f,n,!1)}else f!==r[m]&&(r[m]=f,u=!0)}}}else{ql(n,e,i,r)&&(u=!0);let c;for(const d in o)(!e||!kn(e,d)&&((c=ft(d))===d||!kn(e,c)))&&(l?t&&(t[d]!==void 0||t[c]!==void 0)&&(i[d]=Sr(l,o,d,void 0,n,!0)):delete i[d]);if(r!==o)for(const d in r)(!e||!kn(e,d))&&(delete r[d],u=!0)}u&&Ue(n.attrs,"set","")}function ql(n,e,t,a){const[i,r]=n.propsOptions;let s=!1,o;if(e)for(let l in e){if(kt(l))continue;const u=e[l];let c;i&&kn(i,c=Zn(l))?!r||!r.includes(c)?t[c]=u:(o||(o={}))[c]=u:Fi(n.emitsOptions,l)||(!(l in a)||u!==a[l])&&(a[l]=u,s=!0)}if(r){const l=gn(t),u=o||Tn;for(let c=0;c<r.length;c++){const d=r[c];t[d]=Sr(i,l,d,u[d],n,!kn(u,d))}}return s}function Sr(n,e,t,a,i,r){const s=n[t];if(s!=null){const o=kn(s,"default");if(o&&a===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&dn(l)){const{propsDefaults:u}=i;if(t in u)a=u[t];else{const c=Da(i);a=u[t]=l.call(null,e),c()}}else a=l;i.ce&&i.ce._setProp(t,a)}s[0]&&(r&&!o?a=!1:s[1]&&(a===""||a===ft(t))&&(a=!0))}return a}const em=new WeakMap;function Xl(n,e,t=!1){const a=t?em:e.propsCache,i=a.get(n);if(i)return i;const r=n.props,s={},o=[];let l=!1;if(!dn(n)){const c=d=>{l=!0;const[m,f]=Xl(d,e,!0);$n(s,m),f&&o.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!r&&!l)return Bn(n)&&a.set(n,Bt),Bt;if(ln(r))for(let c=0;c<r.length;c++){const d=Zn(r[c]);Ps(d)&&(s[d]=Tn)}else if(r)for(const c in r){const d=Zn(c);if(Ps(d)){const m=r[c],f=s[d]=ln(m)||dn(m)?{type:m}:$n({},m),g=f.type;let w=!1,x=!0;if(ln(g))for(let C=0;C<g.length;++C){const B=g[C],h=dn(B)&&B.name;if(h==="Boolean"){w=!0;break}else h==="String"&&(x=!1)}else w=dn(g)&&g.name==="Boolean";f[0]=w,f[1]=x,(w||kn(f,"default"))&&o.push(d)}}const u=[s,o];return Bn(n)&&a.set(n,u),u}function Ps(n){return n[0]!=="$"&&!kt(n)}const $r=n=>n==="_"||n==="_ctx"||n==="$stable",Ur=n=>ln(n)?n.map(ge):[ge(n)],tm=(n,e,t)=>{if(e._n)return e;const a=xn((...i)=>Ur(e(...i)),t);return a._c=!1,a},Zl=(n,e,t)=>{const a=n._ctx;for(const i in n){if($r(i))continue;const r=n[i];if(dn(r))e[i]=tm(i,r,a);else if(r!=null){const s=Ur(r);e[i]=()=>s}}},Ql=(n,e)=>{const t=Ur(e);n.slots.default=()=>t},nc=(n,e,t)=>{for(const a in e)(t||!$r(a))&&(n[a]=e[a])},am=(n,e,t)=>{const a=n.slots=Wl();if(n.vnode.shapeFlag&32){const i=e._;i?(nc(a,e,t),t&&qo(a,"_",i,!0)):Zl(e,a)}else e&&Ql(n,e)},im=(n,e,t)=>{const{vnode:a,slots:i}=n;let r=!0,s=Tn;if(a.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:nc(i,e,t):(r=!e.$stable,Zl(e,i)),s=e}else e&&(Ql(n,e),s={default:1});if(r)for(const o in i)!$r(o)&&s[o]==null&&delete i[o]},te=rc;function rm(n){return sm(n,wd)}function sm(n,e){const t=Ai();t.__VUE__=!0;const{insert:a,remove:i,patchProp:r,createElement:s,createText:o,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:m,setScopeId:f=Oe,insertStaticContent:g}=n,w=(p,v,k,z=null,O=null,V=null,J=void 0,j=null,G=!!v.dynamicChildren)=>{if(p===v)return;p&&!xt(p,v)&&(z=H(p),An(p,O,V,!0),p=null),v.patchFlag===-2&&(G=!1,v.dynamicChildren=null),v.dynamicChildren&&p&&p.dynamicChildren&&p.dynamicChildren.hasOnce&&(v.dynamicChildren===Bt&&(v.dynamicChildren=[]),v.dynamicChildren.hasOnce=!0);const{type:$,ref:on,shapeFlag:nn}=v;switch($){case It:x(p,v,k,z);break;case Wn:C(p,v,k,z);break;case Kt:p==null&&B(v,k,z,J);break;case bn:_(p,v,k,z,O,V,J,j,G);break;default:nn&1?R(p,v,k,z,O,V,J,j,G):nn&6?E(p,v,k,z,O,V,J,j,G):(nn&64||nn&128)&&$.process(p,v,k,z,O,V,J,j,G,an)}on!=null&&O?Ht(on,p&&p.ref,V,v||p,!v):on==null&&p&&p.ref!=null&&Ht(p.ref,null,V,p,!0)},x=(p,v,k,z)=>{if(p==null)a(v.el=o(v.children),k,z);else{const O=v.el=p.el;v.children!==p.children&&u(O,v.children)}},C=(p,v,k,z)=>{p==null?a(v.el=l(v.children||""),k,z):v.el=p.el},B=(p,v,k,z)=>{[p.el,p.anchor]=g(p.children,v,k,z,p.el,p.anchor)},h=({el:p,anchor:v},k,z)=>{let O;for(;p&&p!==v;)O=m(p),a(p,k,z),p=O;a(v,k,z)},b=({el:p,anchor:v})=>{let k;for(;p&&p!==v;)k=m(p),i(p),p=k;i(v)},R=(p,v,k,z,O,V,J,j,G)=>{if(v.type==="svg"?J="svg":v.type==="math"&&(J="mathml"),p==null)Y(v,k,z,O,V,J,j,G);else{const $=p.el&&p.el._isVueCE?p.el:null;try{$&&$._beginPatch(),M(p,v,O,V,J,j,G)}finally{$&&$._endPatch()}}},Y=(p,v,k,z,O,V,J,j)=>{let G,$;const{props:on,shapeFlag:nn,transition:rn,dirs:un}=p;if(G=p.el=s(p.type,V,on&&on.is,on),nn&8?c(G,p.children):nn&16&&T(p.children,G,null,z,O,nr(p,V),J,j),un&&Re(p,null,z,"created"),N(G,p,p.scopeId,J,z),on){for(const Rn in on)Rn!=="value"&&!kt(Rn)&&r(G,Rn,null,on[Rn],V,z);"value"in on&&r(G,"value",null,on.value,V),($=on.onVnodeBeforeMount)&&he($,z,p)}un&&Re(p,null,z,"beforeMount");const wn=ec(O,rn);wn&&rn.beforeEnter(G),a(G,v,k),(($=on&&on.onVnodeMounted)||wn||un)&&te(()=>{try{$&&he($,z,p),wn&&rn.enter(G),un&&Re(p,null,z,"mounted")}finally{}},O)},N=(p,v,k,z,O)=>{if(k&&f(p,k),z)for(let V=0;V<z.length;V++)f(p,z[V]);if(O){let V=O.subTree;if(v===V||ic(V.type)&&(V.ssContent===v||V.ssFallback===v)){const J=O.vnode;N(p,J,J.scopeId,J.slotScopeIds,O.parent)}}},T=(p,v,k,z,O,V,J,j,G=0)=>{for(let $=G;$<p.length;$++){const on=p[$]=j?$e(p[$]):ge(p[$]);w(null,on,v,k,z,O,V,J,j)}},M=(p,v,k,z,O,V,J)=>{const j=v.el=p.el;let{patchFlag:G,dynamicChildren:$,dirs:on}=v;G|=p.patchFlag&16;const nn=p.props||Tn,rn=v.props||Tn;let un;if(k&&ht(k,!1),(un=rn.onVnodeBeforeUpdate)&&he(un,k,v,p),on&&Re(v,p,k,"beforeUpdate"),k&&ht(k,!0),$&&(!p.dynamicChildren||p.dynamicChildren.length!==$.length)&&(G=0,J=!1,$=null),(nn.innerHTML&&rn.innerHTML==null||nn.textContent&&rn.textContent==null)&&c(j,""),$?D(p.dynamicChildren,$,j,k,z,nr(v,O),V):J||W(p,v,j,null,k,z,nr(v,O),V,!1),G>0){if(G&16)P(j,nn,rn,k,O);else if(G&2&&nn.class!==rn.class&&r(j,"class",null,rn.class,O),G&4&&r(j,"style",nn.style,rn.style,O),G&8){const wn=v.dynamicProps;for(let Rn=0;Rn<wn.length;Rn++){const In=wn[Rn],Vn=nn[In],Un=rn[In];(Un!==Vn||In==="value")&&r(j,In,Vn,Un,O,k)}}G&1&&p.children!==v.children&&c(j,v.children)}else!J&&$==null&&P(j,nn,rn,k,O);((un=rn.onVnodeUpdated)||on)&&te(()=>{un&&he(un,k,v,p),on&&Re(v,p,k,"updated")},z)},D=(p,v,k,z,O,V,J)=>{for(let j=0;j<v.length;j++){const G=p[j],$=v[j],on=G.el&&(G.type===bn||!xt(G,$)||G.shapeFlag&198)?d(G.el):k;w(G,$,on,null,z,O,V,J,!0)}},P=(p,v,k,z,O)=>{if(v!==k){if(v!==Tn)for(const V in v)!kt(V)&&!(V in k)&&r(p,V,v[V],null,O,z);for(const V in k){if(kt(V))continue;const J=k[V],j=v[V];J!==j&&V!=="value"&&r(p,V,j,J,O,z)}"value"in k&&r(p,"value",v.value,k.value,O)}},_=(p,v,k,z,O,V,J,j,G)=>{const $=v.el=p?p.el:o(""),on=v.anchor=p?p.anchor:o("");let{patchFlag:nn,dynamicChildren:rn,slotScopeIds:un}=v;un&&(j=j?j.concat(un):un),p==null?(a($,k,z),a(on,k,z),T(v.children||[],k,on,O,V,J,j,G)):nn>0&&nn&64&&rn&&p.dynamicChildren&&p.dynamicChildren.length===rn.length?(D(p.dynamicChildren,rn,k,O,V,J,j),(v.key!=null||O&&v===O.subTree)&&Gr(p,v,!0)):W(p,v,k,on,O,V,J,j,G)},E=(p,v,k,z,O,V,J,j,G)=>{v.slotScopeIds=j,p==null?v.shapeFlag&512?O.ctx.activate(v,k,z,J,G):I(v,k,z,O,V,J,G):S(p,v,G)},I=(p,v,k,z,O,V,J)=>{const j=p.component=pm(p,z,O);if(Na(p)&&(j.ctx.renderer=an),fm(j,!1,J),j.asyncDep){if(O&&O.registerDep(j,y,J),!p.el){const G=j.subTree=sn(Wn);C(null,G,v,k),p.placeholder=G.el}}else y(j,p,v,k,O,V,J)},S=(p,v,k)=>{const z=v.component=p.component;if(Zd(p,v,k))if(z.asyncDep&&!z.asyncResolved){v.el=p.el,q(z,v,k);return}else z.next=v,z.update();else v.el=p.el,z.vnode=v},y=(p,v,k,z,O,V,J)=>{const j=()=>{if(p.isMounted){let{next:nn,bu:rn,u:un,parent:wn,vnode:Rn}=p;{const le=tc(p);if(le){nn&&(nn.el=Rn.el,q(p,nn,J)),le.asyncDep.then(()=>{te(()=>{p.isUnmounted||$()},O)});return}}let In=nn,Vn;ht(p,!1),nn?(nn.el=Rn.el,q(p,nn,J)):nn=Rn,rn&&Gi(rn),(Vn=nn.props&&nn.props.onVnodeBeforeUpdate)&&he(Vn,wn,nn,Rn),ht(p,!0);const Un=Qi(p),Be=p.subTree;p.subTree=Un,w(Be,Un,d(Be.el),H(Be),p,O,V),nn.el=Un.el,In===null&&Yl(p,Un.el),un&&te(un,O),(Vn=nn.props&&nn.props.onVnodeUpdated)&&te(()=>he(Vn,wn,nn,Rn),O)}else{let nn;const{el:rn,props:un}=v,{bm:wn,m:Rn,parent:In,root:Vn,type:Un}=p,Be=At(v);if(ht(p,!1),wn&&Gi(wn),!Be&&(nn=un&&un.onVnodeBeforeMount)&&he(nn,In,v),ht(p,!0),rn&&En){const le=()=>{p.subTree=Qi(p),En(rn,p.subTree,p,O,null)};Be&&Un.__asyncHydrate?Un.__asyncHydrate(rn,p,le):le()}else{Vn.ce&&Vn.ce._hasShadowRoot()&&Vn.ce._injectChildStyle(Un,p.parent?p.parent.type:void 0);const le=p.subTree=Qi(p);w(null,le,k,z,p,O,V),v.el=le.el}if(Rn&&te(Rn,O),!Be&&(nn=un&&un.onVnodeMounted)){const le=v;te(()=>he(nn,In,le),O)}(v.shapeFlag&256||In&&At(In.vnode)&&In.vnode.shapeFlag&256)&&p.a&&te(p.a,O),p.isMounted=!0,v=k=z=null}};p.scope.on();const G=p.effect=new nl(j);p.scope.off();const $=p.update=G.run.bind(G),on=p.job=G.runIfDirty.bind(G);on.i=p,on.id=p.uid,G.scheduler=()=>Pr(on),ht(p,!0),$()},q=(p,v,k)=>{v.component=p;const z=p.vnode.props;p.vnode=v,p.next=null,nm(p,v.props,z,k),im(p,v.children,k),qe(),_s(p),Xe()},W=(p,v,k,z,O,V,J,j,G=!1)=>{const $=p&&p.children,on=p?p.shapeFlag:0,nn=v.children,{patchFlag:rn,shapeFlag:un}=v;if(rn>0){if(rn&128){cn($,nn,k,z,O,V,J,j,G);return}else if(rn&256){pn($,nn,k,z,O,V,J,j,G);return}}un&8?(on&16&&se($,O,V),nn!==$&&c(k,nn)):on&16?un&16?cn($,nn,k,z,O,V,J,j,G):se($,O,V,!0):(on&8&&c(k,""),un&16&&T(nn,k,z,O,V,J,j,G))},pn=(p,v,k,z,O,V,J,j,G)=>{p=p||Bt,v=v||Bt;const $=p.length,on=v.length,nn=Math.min($,on);let rn;for(rn=0;rn<nn;rn++){const un=v[rn]=G?$e(v[rn]):ge(v[rn]);w(p[rn],un,k,null,O,V,J,j,G)}$>on?se(p,O,V,!0,!1,nn):T(v,k,z,O,V,J,j,G,nn)},cn=(p,v,k,z,O,V,J,j,G)=>{let $=0;const on=v.length;let nn=p.length-1,rn=on-1;for(;$<=nn&&$<=rn;){const un=p[$],wn=v[$]=G?$e(v[$]):ge(v[$]);if(xt(un,wn))w(un,wn,k,null,O,V,J,j,G);else break;$++}for(;$<=nn&&$<=rn;){const un=p[nn],wn=v[rn]=G?$e(v[rn]):ge(v[rn]);if(xt(un,wn))w(un,wn,k,null,O,V,J,j,G);else break;nn--,rn--}if($>nn){if($<=rn){const un=rn+1,wn=un<on?v[un].el:z;for(;$<=rn;)w(null,v[$]=G?$e(v[$]):ge(v[$]),k,wn,O,V,J,j,G),$++}}else if($>rn)for(;$<=nn;)An(p[$],O,V,!0),$++;else{const un=$,wn=$,Rn=new Map;for($=wn;$<=rn;$++){const ce=v[$]=G?$e(v[$]):ge(v[$]);ce.key!=null&&Rn.set(ce.key,$)}let In,Vn=0;const Un=rn-wn+1;let Be=!1,le=0;const ea=new Array(Un);for($=0;$<Un;$++)ea[$]=0;for($=un;$<=nn;$++){const ce=p[$];if(Vn>=Un){An(ce,O,V,!0);continue}let Ie;if(ce.key!=null)Ie=Rn.get(ce.key);else for(In=wn;In<=rn;In++)if(ea[In-wn]===0&&xt(ce,v[In])){Ie=In;break}Ie===void 0?An(ce,O,V,!0):(ea[Ie-wn]=$+1,Ie>=le?le=Ie:Be=!0,w(ce,v[Ie],k,null,O,V,J,j,G),Vn++)}const vs=Be?om(ea):Bt;for(In=vs.length-1,$=Un-1;$>=0;$--){const ce=wn+$,Ie=v[ce],gs=v[ce+1],bs=ce+1<on?gs.el||ac(gs):z;ea[$]===0?w(null,Ie,k,bs,O,V,J,j,G):Be&&(In<0||$!==vs[In]?yn(Ie,k,bs,2):In--)}}},yn=(p,v,k,z,O=null)=>{const{el:V,type:J,transition:j,children:G,shapeFlag:$}=p;if($&6){yn(p.component.subTree,v,k,z);return}if($&128){p.suspense.move(v,k,z);return}if($&64){J.move(p,v,k,an);return}if(J===bn){a(V,v,k);for(let nn=0;nn<G.length;nn++)yn(G[nn],v,k,z);a(p.anchor,v,k);return}if(J===Kt){h(p,v,k);return}if(z!==2&&$&1&&j)if(z===0)j.persisted&&!V[ve]?a(V,v,k):(j.beforeEnter(V),a(V,v,k),te(()=>j.enter(V),O));else{const{leave:nn,delayLeave:rn,afterLeave:un}=j,wn=()=>{p.ctx.isUnmounted?i(V):a(V,v,k)},Rn=()=>{const In=V._isLeaving||!!V[ve];V._isLeaving&&V[ve](!0),j.persisted&&!In?wn():nn(V,()=>{wn(),un&&un()})};rn?rn(V,wn,Rn):Rn()}else a(V,v,k)},An=(p,v,k,z=!1,O=!1)=>{const{type:V,props:J,ref:j,children:G,dynamicChildren:$,shapeFlag:on,patchFlag:nn,dirs:rn,cacheIndex:un,memo:wn}=p;if((nn===-2||$&&$.hasOnce)&&(O=!1),j!=null&&(qe(),Ht(j,null,k,p,!0),Xe()),un!=null&&(!p.ctx||p.ctx===v)&&(v.renderCache[un]=void 0),on&256){v.ctx.deactivate(p);return}const Rn=on&1&&rn,In=!At(p);let Vn;if(In&&(Vn=J&&J.onVnodeBeforeUnmount)&&he(Vn,v,p),on&6)oe(p.component,k,z);else{if(on&128){p.suspense.unmount(k,z);return}Rn&&Re(p,null,v,"beforeUnmount"),on&64?p.type.remove(p,v,k,an,z):$&&!$.hasOnce&&(V!==bn||nn>0&&nn&64)?se($,v,k,!1,!0):(V===bn&&nn&384||!O&&on&16)&&se(G,v,k),z&&nt(p)}const Un=wn!=null&&un==null;(In&&(Vn=J&&J.onVnodeUnmounted)||Rn||Un)&&te(()=>{Vn&&he(Vn,v,p),Rn&&Re(p,null,v,"unmounted"),Un&&(p.el=null)},k)},nt=p=>{const{type:v,el:k,anchor:z,transition:O}=p;if(v===bn){et(k,z);return}if(v===Kt){b(p),O&&!O.persisted&&O.afterLeave&&O.afterLeave();return}const V=()=>{i(k),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(p.shapeFlag&1&&O&&!O.persisted){const{leave:J,delayLeave:j}=O,G=()=>J(k,V);j?j(p.el,V,G):G()}else V()},et=(p,v)=>{let k;for(;p!==v;)k=m(p),i(p),p=k;i(v)},oe=(p,v,k)=>{const{bum:z,scope:O,job:V,subTree:J,um:j,m:G,a:$}=p;Hs(G),Hs($),z&&Gi(z),O.stop(),V?(V.flags|=8,An(J,p,v,k)):p.vnode.el&&J&&(J.transition=p.vnode.transition,An(J,p,v,k)),j&&te(j,v),te(()=>{p.isUnmounted=!0},v)},se=(p,v,k,z=!1,O=!1,V=0)=>{for(let J=V;J<p.length;J++)An(p[J],v,k,z,O)},H=p=>{if(p.shapeFlag&6)return H(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const v=m(p.anchor||p.el),k=v&&v[El];return k?m(k):v};let Q=!1;const X=(p,v,k)=>{let z;p==null?v._vnode&&(An(v._vnode,null,null,!0),z=v._vnode.component):w(v._vnode||null,p,v,null,null,null,k),v._vnode=p,Q||(Q=!0,_s(z),mi(),Q=!1)},an={p:w,um:An,m:yn,r:nt,mt:I,mc:T,pc:W,pbc:D,n:H,o:n};let fn,En;return e&&([fn,En]=e(an)),{render:X,hydrate:fn,createApp:Yd(X,fn)}}function nr({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ht({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ec(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Gr(n,e,t=!1){const a=n.children,i=e.children;if(ln(a)&&ln(i))for(let r=0;r<a.length;r++){const s=a[r];let o=i[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[r]=$e(i[r]),o.el=s.el),!t&&o.patchFlag!==-2&&Gr(s,o)),o.type===It&&(o.patchFlag===-1&&(o=i[r]=$e(o)),o.el=s.el),o.type===Wn&&!o.el&&(o.el=s.el)}}function om(n){const e=n.slice(),t=[0];let a,i,r,s,o;const l=n.length;for(a=0;a<l;a++){const u=n[a];if(u!==0){if(i=t[t.length-1],n[i]<u){e[a]=i,t.push(a);continue}for(r=0,s=t.length-1;r<s;)o=r+s>>1,n[t[o]]<u?r=o+1:s=o;u<n[t[r]]&&(r>0&&(e[a]=t[r-1]),t[r]=a)}}for(r=t.length,s=t[r-1];r-- >0;)t[r]=s,s=e[s];return t}function tc(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tc(e)}function Hs(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function ac(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?ac(e.subTree):null}const ic=n=>n.__isSuspense;function rc(n,e){e&&e.pendingBranch?ln(n)?e.effects.push(...n):e.effects.push(n):od(n)}const bn=Symbol.for("v-fgt"),It=Symbol.for("v-txt"),Wn=Symbol.for("v-cmt"),Kt=Symbol.for("v-stc"),We=[];let ue=null;function F(n=!1){We.push(ue=n?null:[])}function Yr(){We.pop(),ue=We[We.length-1]||null}let xa=1;function bi(n,e=!1){xa+=n,n<0&&ue&&e&&(ue.hasOnce=!0)}function sc(n){return n.dynamicChildren=xa>0?ue||Bt:null,Yr(),xa>0&&ue&&ue.push(n),n}function U(n,e,t,a,i,r){return sc(L(n,e,t,a,i,r,!0))}function Dn(n,e,t,a,i){return sc(sn(n,e,t,a,i,!0))}function Ba(n){return n?n.__v_isVNode===!0:!1}function xt(n,e){return n.type===e.type&&n.key===e.key}const oc=({key:n})=>n??null,ii=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Nn(n)||Kn(n)||dn(n)?{i:Xn,r:n,k:e,f:!!t}:n:null);function L(n,e=null,t=null,a=0,i=null,r=n===bn?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&oc(e),ref:e&&ii(e),scopeId:kl,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:a,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Xn};return o?(wi(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Nn(t)?8:16),xa>0&&!s&&ue&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ue.push(l),l}const sn=lm;function lm(n,e=null,t=null,a=0,i=null,r=!1){if((!n||n===Pl)&&(n=Wn),Ba(n)){const o=pt(n,e,!0);return t&&wi(o,t),xa>0&&!r&&ue&&(o.shapeFlag&6?ue[ue.indexOf(n)]=o:ue.push(o)),o.patchFlag=-2,o}if(wm(n)&&(n=n.__vccOpts),e){e=ri(e);let{class:o,style:l}=e;o&&!Nn(o)&&(e.class=zn(o)),Bn(l)&&(Li(l)&&!ln(l)&&(l=$n({},l)),e.style=Cn(l))}const s=Nn(n)?1:ic(n)?128:Ni(n)?64:Bn(n)?4:dn(n)?2:0;return L(n,e,t,a,i,s,r,!0)}function ri(n){return n?Li(n)||Jl(n)?$n({},n):n:null}function pt(n,e,t=!1,a=!1){const{props:i,ref:r,patchFlag:s,children:o,transition:l}=n,u=e?um(i||{},e):i,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&oc(u),ref:e&&e.ref?t&&r?ln(r)?r.concat(ii(e)):[r,ii(e)]:ii(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==bn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&pt(n.ssContent),ssFallback:n.ssFallback&&pt(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&a&&Tt(c,l.clone(c)),c}function ke(n=" ",e=0){return sn(It,null,n,e)}function cm(n,e){const t=sn(Kt,null,n);return t.staticCount=e,t}function mn(n="",e=!1){return e?(F(),Dn(Wn,null,n)):sn(Wn,null,n)}function ge(n){return n==null||typeof n=="boolean"?sn(Wn):ln(n)?sn(bn,null,n.slice()):Ba(n)?$e(n):sn(It,null,String(n))}function $e(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:pt(n)}function wi(n,e){let t=0;const{shapeFlag:a}=n;if(e==null)e=null;else if(ln(e))t=16;else if(typeof e=="object")if(a&65){const i=e.default;i&&(i._c&&(i._d=!1),wi(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!Jl(e)?e._ctx=Xn:i===3&&Xn&&(Xn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(dn(e)){if(a&65){wi(n,{default:e});return}e={default:e,_ctx:Xn},t=32}else e=String(e),a&64?(t=16,e=[ke(e)]):t=8;n.children=e,n.shapeFlag|=t}function um(...n){const e={};for(let t=0;t<n.length;t++){const a=n[t];for(const i in a)if(i==="class")e.class!==a.class&&(e.class=zn([e.class,a.class]));else if(i==="style")e.style=Cn([e.style,a.style]);else if(Ta(i)){const r=e[i],s=a[i];s&&r!==s&&!(ln(r)&&r.includes(s))?e[i]=r?[].concat(r,s):s:s==null&&r==null&&!Si(i)&&(e[i]=s)}else i!==""&&(e[i]=a[i])}return e}function he(n,e,t,a=null){ye(n,e,7,[t,a])}const dm=$l();let mm=0;function pm(n,e,t){const a=n.type,i=(e?e.appContext:n.appContext)||dm,r={uid:mm++,vnode:n,type:a,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Eu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xl(a,i),emitsOptions:Ul(a,i),emit:null,emitted:null,propsDefaults:Tn,inheritAttrs:a.inheritAttrs,ctx:Tn,data:Tn,props:Tn,attrs:Tn,slots:Tn,refs:Tn,setupState:Tn,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Wd.bind(null,r),n.ce&&n.ce(r),r}let qn=null;const Ee=()=>qn||Xn;let yi,Sa;{const n=Ai(),e=(t,a)=>{let i;return(i=n[t])||(i=n[t]=[]),i.push(a),r=>{i.length>1?i.forEach(s=>s(r)):i[0](r)}};yi=e("__VUE_INSTANCE_SETTERS__",t=>qn=t),Sa=e("__VUE_SSR_SETTERS__",t=>jt=t)}const Da=n=>{const e=qn;return yi(n),n.scope.on(),()=>{n.scope.off(),yi(e)}},Ks=()=>{qn&&qn.scope.off(),yi(null)};function lc(n){return n.vnode.shapeFlag&4}let jt=!1;function fm(n,e=!1,t=!1){e&&Sa(e);const{props:a,children:i}=n.vnode,r=lc(n);Qd(n,a,r,e),am(n,i,t||e);const s=r?hm(n,e):void 0;return e&&Sa(!1),s}function hm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Hd);const{setup:a}=t;if(a){qe();const i=n.setupContext=a.length>1?gm(n):null,r=Da(n),s=Ra(a,n,0,[n.props,i]),o=jo(s);if(Xe(),r(),(o||n.sp)&&!At(n)&&Vr(n),o){if(s.then(Ks,Ks),e)return s.then(l=>{Sa(!0);try{Vs(n,l,e)}finally{Sa(!1)}}).catch(l=>{La(l,n,0)});n.asyncDep=s}else Vs(n,s)}else cc(n)}function Vs(n,e,t){dn(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Bn(e)&&(n.setupState=bl(e)),cc(n)}function cc(n,e,t){const a=n.type;n.render||(n.render=a.render||Oe);{const i=Da(n);qe();try{Kd(n)}finally{Xe(),i()}}}const vm={get(n,e){return ne(n,"get",""),n[e]}};function gm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,vm),slots:n.slots,emit:n.emit,expose:e}}function Pi(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(bl(Wu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ma)return ma[t](n)},has(e,t){return t in e||t in ma}})):n.proxy}function bm(n,e=!0){return dn(n)?n.displayName||n.name:n.name||e&&n.__name}function wm(n){return dn(n)&&"__vccOpts"in n}const A=(n,e)=>td(n,e,jt);function en(n,e,t){try{bi(-1);const a=arguments.length;return a===2?Bn(e)&&!ln(e)?Ba(e)?sn(n,null,[e]):sn(n,e):sn(n,null,e):(a>3?t=Array.prototype.slice.call(arguments,2):a===3&&Ba(t)&&(t=[t]),sn(n,e,t))}finally{bi(1)}}const ym="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kr;const zs=typeof window<"u"&&window.trustedTypes;if(zs)try{kr=zs.createPolicy("vue",{createHTML:n=>n})}catch{}const uc=kr?n=>kr.createHTML(n):n=>n,xm="http://www.w3.org/2000/svg",Bm="http://www.w3.org/1998/Math/MathML",ze=typeof document<"u"?document:null,$s=ze&&ze.createElement("template"),Sm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,a)=>{const i=e==="svg"?ze.createElementNS(xm,n):e==="mathml"?ze.createElementNS(Bm,n):t?ze.createElement(n,{is:t}):ze.createElement(n);return n==="select"&&a&&a.multiple!=null&&i.setAttribute("multiple",a.multiple),i},createText:n=>ze.createTextNode(n),createComment:n=>ze.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ze.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,a,i,r){const s=t?t.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===r||!(i=i.nextSibling)););else{$s.innerHTML=uc(a==="svg"?`<svg>${n}</svg>`:a==="mathml"?`<math>${n}</math>`:n);const o=$s.content;if(a==="svg"||a==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[s?s.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},tt="transition",ia="animation",Wt=Symbol("_vtc"),dc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},mc=$n({},Cl,dc),km=n=>(n.displayName="Transition",n.props=mc,n),Qt=km((n,{slots:e})=>en(vd,pc(n),e)),vt=(n,e=[])=>{ln(n)?n.forEach(t=>t(...e)):n&&n(...e)},Us=n=>n?ln(n)?n.some(e=>e.length>1):n.length>1:!1;function pc(n){const e={};for(const _ in n)_ in dc||(e[_]=n[_]);if(n.css===!1)return e;const{name:t="v",type:a,duration:i,enterFromClass:r=`${t}-enter-from`,enterActiveClass:s=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:u=s,appearToClass:c=o,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:m=`${t}-leave-active`,leaveToClass:f=`${t}-leave-to`}=n,g=_m(i),w=g&&g[0],x=g&&g[1],{onBeforeEnter:C,onEnter:B,onEnterCancelled:h,onLeave:b,onLeaveCancelled:R,onBeforeAppear:Y=C,onAppear:N=B,onAppearCancelled:T=h}=e,M=(_,E,I,S)=>{_._enterCancelled=S,it(_,E?c:o),it(_,E?u:s),I&&I()},D=(_,E)=>{_._isLeaving=!1,it(_,d),it(_,f),it(_,m),E&&E()},P=_=>(E,I)=>{const S=_?N:B,y=()=>M(E,_,I);vt(S,[E,y]),Gs(()=>{it(E,_?l:r),Ce(E,_?c:o),Us(S)||Ys(E,a,w,y)})};return $n(e,{onBeforeEnter(_){vt(C,[_]),Ce(_,r),Ce(_,s)},onBeforeAppear(_){vt(Y,[_]),Ce(_,l),Ce(_,u)},onEnter:P(!1),onAppear:P(!0),onLeave(_,E){_._isLeaving=!0;const I=()=>D(_,E);Ce(_,d),_._enterCancelled?(Ce(_,m),_r(_)):(_r(_),Ce(_,m)),Gs(()=>{_._isLeaving&&(it(_,d),Ce(_,f),Us(b)||Ys(_,a,x,I))}),vt(b,[_,I])},onEnterCancelled(_){M(_,!1,void 0,!0),vt(h,[_])},onAppearCancelled(_){M(_,!0,void 0,!0),vt(T,[_])},onLeaveCancelled(_){D(_),vt(R,[_])}})}function _m(n){if(n==null)return null;if(Bn(n))return[er(n.enter),er(n.leave)];{const e=er(n);return[e,e]}}function er(n){return bu(n)}function Ce(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Wt]||(n[Wt]=new Set)).add(e)}function it(n,e){e.split(/\s+/).forEach(a=>a&&n.classList.remove(a));const t=n[Wt];t&&(t.delete(e),t.size||(n[Wt]=void 0))}function Gs(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Am=0;function Ys(n,e,t,a){const i=n._endId=++Am,r=()=>{i===n._endId&&a()};if(t!=null)return setTimeout(r,t);const{type:s,timeout:o,propCount:l}=fc(n,e);if(!s)return a();const u=s+"end";let c=0;const d=()=>{n.removeEventListener(u,m),r()},m=f=>{f.target===n&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},o+1),n.addEventListener(u,m)}function fc(n,e){const t=window.getComputedStyle(n),a=g=>(t[g]||"").split(", "),i=a(`${tt}Delay`),r=a(`${tt}Duration`),s=js(i,r),o=a(`${ia}Delay`),l=a(`${ia}Duration`),u=js(o,l);let c=null,d=0,m=0;e===tt?s>0&&(c=tt,d=s,m=r.length):e===ia?u>0&&(c=ia,d=u,m=l.length):(d=Math.max(s,u),c=d>0?s>u?tt:ia:null,m=c?c===tt?r.length:l.length:0);const f=c===tt&&/\b(?:transform|all)(?:,|$)/.test(a(`${tt}Property`).toString());return{type:c,timeout:d,propCount:m,hasTransform:f}}function js(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,a)=>Ws(t)+Ws(n[a])))}function Ws(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function _r(n){return(n?n.ownerDocument:document).body.offsetHeight}function Em(n,e,t){const a=n[Wt];a&&(e=(e?[e,...a]:[...a]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const xi=Symbol("_vod"),jr=Symbol("_vsh"),ka={name:"show",beforeMount(n,{value:e},{transition:t}){n[xi]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):ra(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:a}){!e!=!t&&(a?e?(a.beforeEnter(n),ra(n,!0),a.enter(n)):a.leave(n,()=>{ra(n,!1)}):ra(n,e))},beforeUnmount(n,{value:e}){ra(n,e)}};function ra(n,e){n.style.display=e?n[xi]:"none",n[jr]=!e}const Im=Symbol(""),Tm=/(?:^|;)\s*display\s*:/;function Cm(n,e,t){const a=n.style,i=Nn(t);let r=!1;if(t&&!i){if(e)if(Nn(e))for(const s of e.split(";")){const o=s.slice(0,s.indexOf(":")).trim();t[o]==null&&ca(a,o,"")}else for(const s in e)t[s]==null&&ca(a,s,"");for(const s in t){s==="display"&&(r=!0);const o=t[s];o!=null?Rm(n,s,!Nn(e)&&e?e[s]:void 0,o)||ca(a,s,o):ca(a,s,"")}}else if(i){if(e!==t){const s=a[Im];s&&(t+=";"+s),a.cssText=t,r=Tm.test(t)}}else e&&n.removeAttribute("style");xi in n&&(n[xi]=r?a.display:"",n[jr]&&(a.display="none"))}const Wa=/\s*!important$/;function ca(n,e,t){if(ln(t))t.forEach(a=>ca(n,e,a));else if(t==null&&(t=""),e.startsWith("--"))Wa.test(t)?n.setProperty(e,t.replace(Wa,""),"important"):n.setProperty(e,t);else{const a=Mm(n,e);Wa.test(t)?n.setProperty(ft(a),t.replace(Wa,""),"important"):n[a]=t}}const Js=["Webkit","Moz","ms"],tr={};function Mm(n,e){const t=tr[e];if(t)return t;let a=Zn(e);if(a!=="filter"&&a in n)return tr[e]=a;a=Ma(a);for(let i=0;i<Js.length;i++){const r=Js[i]+a;if(r in n)return tr[e]=r}return e}function Rm(n,e,t,a){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Nn(a)&&t===a}const qs="http://www.w3.org/1999/xlink";function Xs(n,e,t,a,i,r=ku(e)){a&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(qs,e.slice(6,e.length)):n.setAttributeNS(qs,e,t):t==null||r&&!Xo(t)?n.removeAttribute(e):n.setAttribute(e,r?"":me(t)?String(t):t)}function Zs(n,e,t,a,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?uc(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let s=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Xo(t):t==null&&o==="string"?(t="",s=!0):o==="number"&&(t=0,s=!0)}try{n[e]=t}catch{}s&&n.removeAttribute(i||e)}function Lm(n,e,t,a){n.addEventListener(e,t,a)}function Nm(n,e,t,a){n.removeEventListener(e,t,a)}const Qs=Symbol("_vei");function Om(n,e,t,a,i=null){const r=n[Qs]||(n[Qs]={}),s=r[e];if(a&&s)s.value=a;else{const[o,l]=Pm(e);if(a){const u=r[e]=Vm(a,i);Lm(n,o,u,l)}else s&&(Nm(n,o,s,l),r[e]=void 0)}}const Dm=/(Once|Passive|Capture)$/,Fm=/^on:?(?:Once|Passive|Capture)$/;function Pm(n){let e,t;for(;(t=n.match(Dm))&&!Fm.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):ft(n.slice(2)),e]}let ar=0;const Hm=Promise.resolve(),Km=()=>ar||(Hm.then(()=>ar=0),ar=Date.now());function Vm(n,e){const t=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=t.attached)return;const i=t.value;if(ln(i)){const r=a.stopImmediatePropagation;a.stopImmediatePropagation=()=>{r.call(a),a._stopped=!0};const s=i.slice(),o=[a];for(let l=0;l<s.length&&!a._stopped;l++){const u=s[l];u&&ye(u,e,5,o)}}else ye(i,e,5,[a])};return t.value=n,t.attached=Km(),t}const no=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,zm=(n,e,t,a,i,r)=>{const s=i==="svg";e==="class"?Em(n,a,s):e==="style"?Cm(n,t,a):Ta(e)?Si(e)||Om(n,e,t,a,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$m(n,e,a,s))?(Zs(n,e,a),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xs(n,e,a,s,r,e!=="value")):n._isVueCE&&(Um(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Nn(a)))?Zs(n,Zn(e),a,r,e):(e==="true-value"?n._trueValue=a:e==="false-value"&&(n._falseValue=a),Xs(n,e,a,s))};function $m(n,e,t,a){if(a)return!!(e==="innerHTML"||e==="textContent"||e in n&&no(e)&&dn(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return no(e)&&Nn(t)?!1:e in n}function Um(n,e){const t=n._def.props;if(!t)return!1;const a=Zn(e);return Array.isArray(t)?t.some(i=>Zn(i)===a):Object.keys(t).some(i=>Zn(i)===a)}const hc=new WeakMap,vc=new WeakMap,Bi=Symbol("_moveCb"),eo=Symbol("_enterCb"),Gm=n=>(delete n.props.mode,n),Ym=Gm({name:"TransitionGroup",props:$n({},mc,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=Ee(),a=Tl();let i,r;return Dl(()=>{if(!i.length)return;const s=n.moveClass||`${n.name||"v"}-move`;if(!Xm(i[0].el,t.vnode.el,s)){i=[];return}i.forEach(Wm),i.forEach(Jm);const o=i.filter(qm);_r(t.vnode.el),o.forEach(l=>{const u=l.el,c=u.style;Ce(u,s),c.transform=c.webkitTransform=c.transitionDuration="";const d=u[Bi]=m=>{m&&m.target!==u||(!m||m.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",d),u[Bi]=null,it(u,s))};u.addEventListener("transitionend",d)}),i=[]}),()=>{const s=gn(n),o=pc(s);let l=s.tag||bn;if(i=[],r)for(let u=0;u<r.length;u++){const c=r[u];c.el&&c.el instanceof Element&&!c.el[jr]&&(i.push(c),Tt(c,ya(c,o,a,t)),hc.set(c,gc(c.el)))}r=e.default?Kr(e.default()):[];for(let u=0;u<r.length;u++){const c=r[u];c.key!=null&&Tt(c,ya(c,o,a,t))}return sn(l,null,r)}}}),jm=Ym;function Wm(n){const e=n.el;e[Bi]&&e[Bi](),e[eo]&&e[eo]()}function Jm(n){vc.set(n,gc(n.el))}function qm(n){const e=hc.get(n),t=vc.get(n),a=e.left-t.left,i=e.top-t.top;if(a||i){const r=n.el,s=r.style,o=r.getBoundingClientRect();let l=1,u=1;return r.offsetWidth&&(l=o.width/r.offsetWidth),r.offsetHeight&&(u=o.height/r.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(u)||u===0)&&(u=1),Math.abs(l-1)<.01&&(l=1),Math.abs(u-1)<.01&&(u=1),s.transform=s.webkitTransform=`translate(${a/l}px,${i/u}px)`,s.transitionDuration="0s",n}}function gc(n){const e=n.getBoundingClientRect();return{left:e.left,top:e.top}}function Xm(n,e,t){const a=n.cloneNode(),i=n[Wt];i&&i.forEach(o=>{o.split(/\s+/).forEach(l=>l&&a.classList.remove(l))}),t.split(/\s+/).forEach(o=>o&&a.classList.add(o)),a.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(a);const{hasTransform:s}=fc(a);return r.removeChild(a),s}const Zm=["ctrl","shift","alt","meta"],Qm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Zm.some(t=>n[`${t}Key`]&&!e.includes(t))},Vt=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),a=e.join(".");return t[a]||(t[a]=((i,...r)=>{for(let s=0;s<e.length;s++){const o=Qm[e[s]];if(o&&o(i,e))return}return n(i,...r)}))},np={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ep=(n,e)=>{const t=n._withKeys||(n._withKeys={}),a=e.join(".");return t[a]||(t[a]=(i=>{if(!("key"in i))return;const r=ft(i.key);if(e.some(s=>s===r||np[s]===r))return n(i)}))},tp=$n({patchProp:zm},Sm);let ir,to=!1;function ap(){return ir=to?ir:rm(tp),to=!0,ir}const ip=((...n)=>{const e=ap().createApp(...n),{mount:t}=e;return e.mount=a=>{const i=sp(a);if(i)return t(i,!0,rp(i))},e});function rp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function sp(n){return Nn(n)?document.querySelector(n):n}var Fa=n=>/^[a-z][a-z0-9+.-]*:/.test(n)||n.startsWith("//"),op=/.md((\?|#).*)?$/,lp=(n,e="/")=>Fa(n)||n.startsWith("/")&&!n.startsWith(e)&&!op.test(n),Pa=n=>/^(https?:)?\/\//.test(n),ao=n=>{if(!n||n.endsWith("/"))return n;let e=n.replace(/(^|\/)README.md$/i,"$1index.html");return e.endsWith(".md")?e=`${e.substring(0,e.length-3)}.html`:e.endsWith(".html")||(e=`${e}.html`),e.endsWith("/index.html")&&(e=e.substring(0,e.length-10)),e},cp="http://.",up=(n,e)=>{if(!n.startsWith("/")&&e){const t=e.slice(0,e.lastIndexOf("/"));return ao(new URL(`${t}/${n}`,cp).pathname)}return ao(n)},dp=(n,e)=>{const t=Object.keys(n).sort((a,i)=>{const r=i.split("/").length-a.split("/").length;return r!==0?r:i.length-a.length});for(const a of t)if(e.startsWith(a))return a;return"/"},mp=/(#|\?)/,bc=n=>{const[e,...t]=n.split(mp);return{pathname:e,hashAndQueries:t.join("")}},pp=["link","meta","script","style","noscript","template"],fp=["title","base"],hp=([n,e,t])=>fp.includes(n)?n:pp.includes(n)?n==="meta"&&e.name?`${n}.${e.name}`:n==="template"&&e.id?`${n}.${e.id}`:JSON.stringify([n,Object.entries(e).map(([a,i])=>typeof i=="boolean"?i?[a,""]:null:[a,i]).filter(a=>a!=null).sort(([a],[i])=>a.localeCompare(i)),t]):null,vp=n=>{const e=new Set,t=[];return n.forEach(a=>{const i=hp(a);i&&!e.has(i)&&(e.add(i),t.push(a))}),t},gp=n=>n.endsWith("/")||n.endsWith(".html")?n:`${n}/`,wc=n=>n.endsWith("/")?n.slice(0,-1):n,yc=n=>n.startsWith("/")?n.slice(1):n,Wr=n=>Object.prototype.toString.call(n)==="[object Object]",_e=n=>typeof n=="string";const bp="modulepreload",wp=function(n){return"/"+n},io={},K=function(e,t,a){let i=Promise.resolve();if(t&&t.length>0){let l=function(u){return Promise.all(u.map(c=>Promise.resolve(c).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=s?.nonce||s?.getAttribute("nonce");i=l(t.map(u=>{if(u=wp(u),u in io)return;io[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":bp,c||(m.as="script"),m.crossOrigin="",m.href=u,o&&m.setAttribute("nonce",o),document.head.appendChild(m),c)return new Promise((f,g)=>{m.addEventListener("load",f),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return i.then(s=>{for(const o of s||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},yp=JSON.parse("{}"),xp=Object.fromEntries([["/",{loader:()=>K(()=>import("./index.html-5-blrU9s.js"),[]),meta:{title:"首页"}}],["/faq/",{loader:()=>K(()=>import("./index.html-AqpFhVrl.js"),[]),meta:{title:"常见问题"}}],["/faq/game.html",{loader:()=>K(()=>import("./game.html-Dx_ZNwOm.js"),[]),meta:{title:"游戏问题"}}],["/faq/join.html",{loader:()=>K(()=>import("./join.html-uYafRjyQ.js"),[]),meta:{title:"加群问题"}}],["/faq/oversr.html",{loader:()=>K(()=>import("./oversr.html-P1zcwrGh.js"),[]),meta:{title:"超星规定"}}],["/meta/contribution-guide.html",{loader:()=>K(()=>import("./contribution-guide.html-CAdQTADj.js"),[]),meta:{title:"贡献指南"}}],["/meta/contributors.html",{loader:()=>K(()=>import("./contributors.html-D2I6cbEC.js"),[]),meta:{title:"贡献者"}}],["/meta/events.html",{loader:()=>K(()=>import("./events.html-kS2WEa42.js"),[]),meta:{title:"本站重大事件"}}],["/events/",{loader:()=>K(()=>import("./index.html-sEivc2NM.js"),[]),meta:{title:"活动"}}],["/people/",{loader:()=>K(()=>import("./index.html-BkgNxA-A.js"),[]),meta:{title:"管理组"}}],["/people/administrators.html",{loader:()=>K(()=>import("./administrators.html-C7HDfw5Q.js"),[]),meta:{title:"管理"}}],["/people/alumni.html",{loader:()=>K(()=>import("./alumni.html-GXdHHutk.js"),[]),meta:{title:"名人堂"}}],["/people/owner.html",{loader:()=>K(()=>import("./owner.html-Bw0ndGrU.js"),[]),meta:{title:"群主"}}],["/introduction/",{loader:()=>K(()=>import("./index.html-CYSXKj-Y.js"),[]),meta:{title:"群介绍"}}],["/introduction/history.html",{loader:()=>K(()=>import("./history.html-OF8ZVPPf.js"),[]),meta:{title:"群历史"}}],["/introduction/how-to-join.html",{loader:()=>K(()=>import("./how-to-join.html-BqnpERSE.js"),[]),meta:{title:"加入新人群"}}],["/introduction/series.html",{loader:()=>K(()=>import("./series.html-DI_YFd6E.js"),[]),meta:{title:"系列群介绍"}}],["/misc/bots/",{loader:()=>K(()=>import("./index.html-OBt7V5qa.js"),[]),meta:{title:"新人群的 bot 们"}}],["/misc/mascots/",{loader:()=>K(()=>import("./index.html-hHeXzKdy.js"),[]),meta:{title:"新人群的吉祥物"}}],["/misc/meme/",{loader:()=>K(()=>import("./index.html-3FVlW_Ne.js"),[]),meta:{title:"新人群的回忆"}}],["/events/charts/",{loader:()=>K(()=>import("./index.html-BJykltHf.js"),[]),meta:{title:"月赛列表"}}],["/events/charts/h2303.html",{loader:()=>K(()=>import("./h2303.html-Nnl6LnVB.js"),[]),meta:{title:"高阶群 2023 年 3 月月赛"}}],["/events/charts/h2304.html",{loader:()=>K(()=>import("./h2304.html-C9eGEKLa.js"),[]),meta:{title:"高阶群 2023 年 4 月月赛"}}],["/events/charts/h2305.html",{loader:()=>K(()=>import("./h2305.html-C-lI-zpj.js"),[]),meta:{title:"高阶群 2023 年 5 月月赛"}}],["/events/charts/h2306.html",{loader:()=>K(()=>import("./h2306.html-g5Pzkw60.js"),[]),meta:{title:"高阶群 2023 年 6 月月赛"}}],["/events/charts/h2307.html",{loader:()=>K(()=>import("./h2307.html-DUqsRknG.js"),[]),meta:{title:"高阶群 2023 年 7 月月赛"}}],["/events/charts/h2308.html",{loader:()=>K(()=>import("./h2308.html-WVwrIrzg.js"),[]),meta:{title:"高阶群 2023 年 8 月月赛"}}],["/events/charts/h2309.html",{loader:()=>K(()=>import("./h2309.html-BZ3icQtR.js"),[]),meta:{title:"高阶群 2023 年 9 月月赛"}}],["/events/charts/h2310.html",{loader:()=>K(()=>import("./h2310.html-B9Txtx0k.js"),[]),meta:{title:"高阶群 2023 年 10 月月赛"}}],["/events/charts/h2311.html",{loader:()=>K(()=>import("./h2311.html-Bw2EwnTM.js"),[]),meta:{title:"高阶群 2023 年 11 月月赛"}}],["/events/charts/h2312.html",{loader:()=>K(()=>import("./h2312.html-BZ2FxV0K.js"),[]),meta:{title:"高阶群 2023 年 12 月月赛"}}],["/events/collections/",{loader:()=>K(()=>import("./index.html-BbIGbt49.js"),[]),meta:{title:"集锦列表"}}],["/events/rewards/",{loader:()=>K(()=>import("./index.html-BZOXCWiP.js"),[]),meta:{title:"悬赏列表"}}],["/events/matches/12.html",{loader:()=>K(()=>import("./12.html-BgB-f_TU.js"),[]),meta:{title:"第 12 届新人群群赛"}}],["/events/matches/16.html",{loader:()=>K(()=>import("./16.html-CmWbRbHi.js"),[]),meta:{title:"第 16 届新人群群赛"}}],["/events/matches/17.html",{loader:()=>K(()=>import("./17.html-DNK6pAOo.js"),[]),meta:{title:"第 17 届新人群群赛"}}],["/events/matches/18.html",{loader:()=>K(()=>import("./18.html-JU2_W0Hj.js"),[]),meta:{title:"第 18 届新人群群赛"}}],["/events/matches/19.html",{loader:()=>K(()=>import("./19.html-BNAOJCEg.js"),[]),meta:{title:"第 19 届新人群群赛"}}],["/events/matches/2.html",{loader:()=>K(()=>import("./2.html-E_PU6_ma.js"),[]),meta:{title:"第 2 届新人群群赛"}}],["/events/matches/20.html",{loader:()=>K(()=>import("./20.html-DHoBGxqL.js"),[]),meta:{title:"第 20 届新人群群赛"}}],["/events/matches/21.html",{loader:()=>K(()=>import("./21.html-Bnm9PEcA.js"),[]),meta:{title:"第 21 届新人群群赛"}}],["/events/matches/22.html",{loader:()=>K(()=>import("./22.html-CNnKqUiW.js"),[]),meta:{title:"第 22 届新人群群赛"}}],["/events/matches/23.html",{loader:()=>K(()=>import("./23.html-DIHj6FzR.js"),[]),meta:{title:"第 23 届新人群群赛"}}],["/events/matches/24.html",{loader:()=>K(()=>import("./24.html-vFIo4aYw.js"),[]),meta:{title:"第 24 届新人群群赛"}}],["/events/matches/25.html",{loader:()=>K(()=>import("./25.html-Dalc-brE.js"),[]),meta:{title:"第 25 届新人群群赛"}}],["/events/matches/26.html",{loader:()=>K(()=>import("./26.html-ZgComlGW.js"),[]),meta:{title:"第 26 届新人群群赛"}}],["/events/matches/27.html",{loader:()=>K(()=>import("./27.html-D2hd9ogR.js"),[]),meta:{title:"第 27 届新人群群赛"}}],["/events/matches/28.html",{loader:()=>K(()=>import("./28.html-BqJU-CXD.js"),[]),meta:{title:"第 28 届新人群群赛"}}],["/events/matches/29.html",{loader:()=>K(()=>import("./29.html-CPmMO-5s.js"),[]),meta:{title:"第 29 届新人群群赛"}}],["/events/matches/30.html",{loader:()=>K(()=>import("./30.html-ihmp1X3t.js"),[]),meta:{title:"第 30 届新人群群赛"}}],["/events/matches/31.html",{loader:()=>K(()=>import("./31.html-BWl6kKMK.js"),[]),meta:{title:"第 31 届新人群群赛"}}],["/events/matches/32.html",{loader:()=>K(()=>import("./32.html-D910k_nE.js"),[]),meta:{title:"第 32 届新人群群赛"}}],["/events/matches/33.html",{loader:()=>K(()=>import("./33.html-DQjewhFc.js"),[]),meta:{title:"第 33 届新人群群赛"}}],["/events/matches/34.html",{loader:()=>K(()=>import("./34.html-qi-x6nJf.js"),[]),meta:{title:"第 34 届新人群群赛"}}],["/events/matches/7.html",{loader:()=>K(()=>import("./7.html-B-K0mkTD.js"),[]),meta:{title:"第 7 届新人群群赛"}}],["/events/matches/8.html",{loader:()=>K(()=>import("./8.html-DW8G1cHP.js"),[]),meta:{title:"第 8 届新人群群赛"}}],["/events/matches/",{loader:()=>K(()=>import("./index.html-UeW5y4_8.js"),[]),meta:{title:"群赛列表"}}],["/events/matches/a1.html",{loader:()=>K(()=>import("./a1.html-Bwgy87jt.js"),[]),meta:{title:"第 1 届进阶群群赛"}}],["/events/matches/a2.html",{loader:()=>K(()=>import("./a2.html-DYWunTpD.js"),[]),meta:{title:"第 2 届进阶群群赛"}}],["/events/matches/a3.html",{loader:()=>K(()=>import("./a3.html-lUZuD9gV.js"),[]),meta:{title:"第 3 届进阶群群赛"}}],["/events/matches/o1.5.html",{loader:()=>K(()=>import("./o1.5.html-C1Jl_bRT.js"),[]),meta:{title:"第 2 (1.5) 届进阶群新群赛"}}],["/events/matches/o1.html",{loader:()=>K(()=>import("./o1.html-DEyeCkov.js"),[]),meta:{title:"第 1 届进阶群新群赛"}}],["/events/matches/o2.html",{loader:()=>K(()=>import("./o2.html-CKBoodnL.js"),[]),meta:{title:"第 2 届进阶群新群赛"}}],["/events/matches/u.html",{loader:()=>K(()=>import("./u.html-D5WuGZd7.js"),[]),meta:{title:"新人群进阶群联合群赛"}}],["/events/matches/y1.html",{loader:()=>K(()=>import("./y1.html-B315o3vD.js"),[]),meta:{title:"第 1 届爷爷赛"}}],["/events/matches/y2.html",{loader:()=>K(()=>import("./y2.html-oPJFeUN0.js"),[]),meta:{title:"第 2 届爷爷赛"}}],["/events/matches/y3.html",{loader:()=>K(()=>import("./y3.html-tbUAlF_7.js"),[]),meta:{title:"第 3 届爷爷赛"}}],["/events/matches/y4.html",{loader:()=>K(()=>import("./y4.html-Cg8J2HM1.js"),[]),meta:{title:"第 4 届爷爷赛"}}],["/article/lastwords/",{loader:()=>K(()=>import("./index.html-BuG0KRiw.js"),[]),meta:{title:"出群遗言"}}],["/article/recommend/-Yuki_Noa-.html",{loader:()=>K(()=>import("./-Yuki_Noa-.html-B49Xw-bM.js"),[]),meta:{title:"1687 (-Yuki Noa-) の听歌向旮旯谱推荐"}}],["/article/recommend/BenZn.html",{loader:()=>K(()=>import("./BenZn.html-CDhomd99.js"),[]),meta:{title:"BenZn 的跳图推荐#刷pp！"}}],["/article/recommend/Muziyami.html",{loader:()=>K(()=>import("./Muziyami.html-DZspX-25.js"),[]),meta:{title:"新人必备图包 by Muz 1.5"}}],["/article/recommend/",{loader:()=>K(()=>import("./index.html-xRkZN9xE.js"),[]),meta:{title:"谱面推荐"}}],["/article/recommend/atahana.html",{loader:()=>K(()=>import("./atahana.html-BO_hLOy0.js"),[]),meta:{title:"Atahana 精选 DJ 图包"}}],["/article/recommend/hiiragi_kagami.html",{loader:()=>K(()=>import("./hiiragi_kagami.html-DQFX0L3F.js"),[]),meta:{title:"Kagami 的连打推荐 ver3.0"}}],["/article/recommend/jack_wang_.html",{loader:()=>K(()=>import("./jack_wang_.html-CuRhC5KY.js"),[]),meta:{title:"菜鸡杰克的初中阶切指练习推荐（进阶已补完）"}}],["/article/recommend/sayori_yui.html",{loader:()=>K(()=>import("./sayori_yui.html-DLJ9oZYw.js"),[]),meta:{title:"Sayori's Stage v1.1 （1000pp+综合向）"}}],["/article/lastwords/users/0.html",{loader:()=>K(()=>import("./0.html-DDgn8Ukf.js"),[]),meta:{title:"不知来源的遗言"}}],["/article/lastwords/users/13017923.html",{loader:()=>K(()=>import("./13017923.html-CwK0FFMX.js"),[]),meta:{title:"1902993927 的出群遗言"}}],["/article/lastwords/users/13932883.html",{loader:()=>K(()=>import("./13932883.html-utiHCUPI.js"),[]),meta:{title:"[cz] 的出群遗言"}}],["/article/lastwords/users/14353421.html",{loader:()=>K(()=>import("./14353421.html-DzLzpN0u.js"),[]),meta:{title:"Desolation 的出群遗言"}}],["/article/lastwords/users/15846580.html",{loader:()=>K(()=>import("./15846580.html-CBzPvPNO.js"),[]),meta:{title:"hiki8man の遗言 fix"}}],["/article/lastwords/users/16027612.html",{loader:()=>K(()=>import("./16027612.html-18V2VXRO.js"),[]),meta:{title:"ChiliJay 的出群遗言"}}],["/article/lastwords/users/16572973.html",{loader:()=>K(()=>import("./16572973.html-JfntEcPr.js"),[]),meta:{title:"7lonekey的出群遗言"}}],["/article/lastwords/users/17610368.html",{loader:()=>K(()=>import("./17610368.html-Bw6hgH9g.js"),[]),meta:{title:"1ch0出群遗言（越级指南）"}}],["/article/lastwords/users/21943424.html",{loader:()=>K(()=>import("./21943424.html-SE782QZB.js"),[]),meta:{title:"5441126653 的出群遗言（关于长串）"}}],["/article/lastwords/users/27552230.html",{loader:()=>K(()=>import("./27552230.html-DiNV_g75.js"),[]),meta:{title:"Adversity0721 的出群遗言"}}],["/article/lastwords/users/28446169.html",{loader:()=>K(()=>import("./28446169.html-bqZvXvw3.js"),[]),meta:{title:"142qwq 的出群遗言"}}],["/article/lastwords/users/28494479.html",{loader:()=>K(()=>import("./28494479.html-Do8SgbIx.js"),[]),meta:{title:"dongguadongde 的出群遗言"}}],["/article/lastwords/users/30125315.html",{loader:()=>K(()=>import("./30125315.html-BSdEaNI_.js"),[]),meta:{title:"ChengAe 的出群遗言"}}],["/article/lastwords/users/30320667.html",{loader:()=>K(()=>import("./30320667.html-DyRqSWHc.js"),[]),meta:{title:"alone_1324 の出群遗言"}}],["/article/lastwords/users/31485633.html",{loader:()=>K(()=>import("./31485633.html-Dw3WwTH3.js"),[]),meta:{title:"Aki 的出群遗言"}}],["/article/lastwords/users/32303406.html",{loader:()=>K(()=>import("./32303406.html-KFIVmWiv.js"),[]),meta:{title:"ASTARTE7 的新人群出群遗言"}}],["/article/lastwords/users/32452774.html",{loader:()=>K(()=>import("./32452774.html-6-No3maQ.js"),[]),meta:{title:"Nana Sakura 个人成长历程"}}],["/article/lastwords/users/32975448.html",{loader:()=>K(()=>import("./32975448.html-YmtLeAKP.js"),[]),meta:{title:"[ Lithromanti ] の出群遗言"}}],["/article/lastwords/users/33319591.html",{loader:()=>K(()=>import("./33319591.html-frgdPgFT.js"),[]),meta:{title:"Athenatenno 的遗言"}}],["/article/lastwords/users/33463029.html",{loader:()=>K(()=>import("./33463029.html-Dq5wrOAI.js"),[]),meta:{title:"_AnZai_KoKoRo_(- Inui JaHuLi -)出群遗言"}}],["/article/lastwords/users/33888415.html",{loader:()=>K(()=>import("./33888415.html-BeExlDCl.js"),[]),meta:{title:"akballoon 出群遗言"}}],["/article/lastwords/users/33918873.html",{loader:()=>K(()=>import("./33918873.html-CcIjZb0L.js"),[]),meta:{title:"0Midas0的出群留言"}}],["/article/lastwords/users/34230148.html",{loader:()=>K(()=>import("./34230148.html-DzRq1w_Q.js"),[]),meta:{title:"【键鼠dt与跳批】Fiveawa的新人群出群遗言"}}],["/article/lastwords/users/34346018.html",{loader:()=>K(()=>import("./34346018.html-Bgmkm3Yf.js"),[]),meta:{title:"AlphaRaWaY 出群遗言（会有人看吗）"}}],["/article/lastwords/users/34998676.html",{loader:()=>K(()=>import("./34998676.html-Dv-W2kC5.js"),[]),meta:{title:"AsukiCko の出群遗言"}}],["/article/lastwords/users/35938964.html",{loader:()=>K(()=>import("./35938964.html-9ASyH4Ln.js"),[]),meta:{title:"BloodEngine 的出群遗言"}}],["/article/lastwords/users/36062235.html",{loader:()=>K(()=>import("./36062235.html-D6Xl_oz5.js"),[]),meta:{title:"21awa12的遗言以及推图"}}],["/article/lastwords/users/36155893.html",{loader:()=>K(()=>import("./36155893.html-cSDCkGZn.js"),[]),meta:{title:"adxeo 的出群遗言（aqmm 修订版）"}}],["/article/lastwords/users/36409902.html",{loader:()=>K(()=>import("./36409902.html-Bh6ApRFx.js"),[]),meta:{title:"Chiyarara 的遗言(妹妹图推荐(bushi"}}],["/article/lastwords/users/36846545.html",{loader:()=>K(()=>import("./36846545.html-2fmfXcQr.js"),[]),meta:{title:"Awathon 的出群遗言"}}],["/article/lastwords/users/37449856.html",{loader:()=>K(()=>import("./37449856.html-DV5RVrk-.js"),[]),meta:{title:"autp 的遗言"}}],["/article/lastwords/users/38021034.html",{loader:()=>K(()=>import("./38021034.html-BJU32gQI.js"),[]),meta:{title:"Arika-suisui 的出群遗言 qwq 喵"}}],["/article/lastwords/users/5162173.html",{loader:()=>K(()=>import("./5162173.html-Y1fhQ91d.js"),[]),meta:{title:"BenPhantom 的出群遗言"}}],["/article/lastwords/users/802382.html",{loader:()=>K(()=>import("./802382.html-0t6T8_Kf.js"),[]),meta:{title:"aboluo7 遗言后附彩蛋"}}],["/404.html",{loader:()=>K(()=>import("./404.html-d67rLTU7.js"),[]),meta:{title:""}}]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ot=typeof document<"u";function xc(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Bp(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&xc(n.default)}const Sn=Object.assign;function rr(n,e){const t={};for(const a in e){const i=e[a];t[a]=Ae(i)?i.map(n):n(i)}return t}const pa=()=>{},Ae=Array.isArray;function ro(n,e){const t={};for(const a in n)t[a]=a in e?e[a]:n[a];return t}const Bc=/#/g,Sp=/&/g,kp=/\//g,_p=/=/g,Ap=/\?/g,Sc=/\+/g,Ep=/%5B/g,Ip=/%5D/g,kc=/%5E/g,Tp=/%60/g,_c=/%7B/g,Cp=/%7C/g,Ac=/%7D/g,Mp=/%20/g;function Jr(n){return n==null?"":encodeURI(""+n).replace(Cp,"|").replace(Ep,"[").replace(Ip,"]")}function Rp(n){return Jr(n).replace(_c,"{").replace(Ac,"}").replace(kc,"^")}function Ar(n){return Jr(n).replace(Sc,"%2B").replace(Mp,"+").replace(Bc,"%23").replace(Sp,"%26").replace(Tp,"`").replace(_c,"{").replace(Ac,"}").replace(kc,"^")}function Lp(n){return Ar(n).replace(_p,"%3D")}function Np(n){return Jr(n).replace(Bc,"%23").replace(Ap,"%3F")}function Op(n){return Np(n).replace(kp,"%2F")}function _a(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const Dp=/\/$/,Fp=n=>n.replace(Dp,"");function sr(n,e,t="/"){let a,i={},r="",s="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(a=e.slice(0,l),r=e.slice(l,o>0?o:e.length),i=n(r.slice(1))),o>=0&&(a=a||e.slice(0,o),s=e.slice(o,e.length)),a=Vp(a??e,t),{fullPath:a+r+s,path:a,query:i,hash:_a(s)}}function Pp(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function so(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Hp(n,e,t){const a=e.matched.length-1,i=t.matched.length-1;return a>-1&&a===i&&Jt(e.matched[a],t.matched[i])&&Ec(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Jt(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Ec(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!Kp(n[t],e[t]))return!1;return!0}function Kp(n,e){return Ae(n)?oo(n,e):Ae(e)?oo(e,n):n?.valueOf()===e?.valueOf()}function oo(n,e){return Ae(e)?n.length===e.length&&n.every((t,a)=>t===e[a]):n.length===1&&n[0]===e}function Vp(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),a=n.split("/"),i=a[a.length-1];(i===".."||i===".")&&a.push("");let r=t.length-1,s,o;for(s=0;s<a.length;s++)if(o=a[s],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+a.slice(s).join("/")}const Ve={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Er=(function(n){return n.pop="pop",n.push="push",n})({}),or=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function zp(n){if(!n)if(Ot){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Fp(n)}const $p=/^[^#]+#/;function Up(n,e){return n.replace($p,"#")+e}function Gp(n,e){const t=document.documentElement.getBoundingClientRect(),a=n.getBoundingClientRect();return{behavior:e.behavior,left:a.left-t.left-(e.left||0),top:a.top-t.top-(e.top||0)}}const Hi=()=>({left:window.scrollX,top:window.scrollY});function Yp(n){let e;if("el"in n){const t=n.el,a=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?a?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=Gp(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function lo(n,e){return(history.state?history.state.position-e:-1)+n}const Ir=new Map;function jp(n,e){Ir.set(n,e)}function Wp(n){const e=Ir.get(n);return Ir.delete(n),e}function Jp(n){return typeof n=="string"||n&&typeof n=="object"}function Ic(n){return typeof n=="string"||typeof n=="symbol"}let Pn=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const Tc=Symbol("");Pn.MATCHER_NOT_FOUND+"",Pn.NAVIGATION_GUARD_REDIRECT+"",Pn.NAVIGATION_ABORTED+"",Pn.NAVIGATION_CANCELLED+"",Pn.NAVIGATION_DUPLICATED+"";function qt(n,e){return Sn(new Error,{type:n,[Tc]:!0},e)}function He(n,e){return n instanceof Error&&Tc in n&&(e==null||!!(n.type&e))}const qp=["params","query","hash"];function Xp(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of qp)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function Zp(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let a=0;a<t.length;++a){const i=t[a].replace(Sc," "),r=i.indexOf("="),s=_a(r<0?i:i.slice(0,r)),o=r<0?null:_a(i.slice(r+1));if(s in e){let l=e[s];Ae(l)||(l=e[s]=[l]),l.push(o)}else e[s]=o}return e}function co(n){let e="";for(let t in n){const a=n[t];if(t=Lp(t),a==null){a!==void 0&&(e+=(e.length?"&":"")+t);continue}(Ae(a)?a.map(i=>i&&Ar(i)):[a&&Ar(a)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function Qp(n){const e={};for(const t in n){const a=n[t];a!==void 0&&(e[t]=Ae(a)?a.map(i=>i==null?null:""+i):a==null?a:""+a)}return e}const nf=Symbol(""),uo=Symbol(""),Ki=Symbol(""),qr=Symbol(""),Tr=Symbol("");function sa(){let n=[];function e(a){return n.push(a),()=>{const i=n.indexOf(a);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function st(n,e,t,a,i,r=s=>s()){const s=a&&(a.enterCallbacks[i]=a.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const u=m=>{m===!1?l(qt(Pn.NAVIGATION_ABORTED,{from:t,to:e})):m instanceof Error?l(m):Jp(m)?l(qt(Pn.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(s&&a.enterCallbacks[i]===s&&typeof m=="function"&&s.push(m),o())},c=r(()=>n.call(a&&a.instances[i],e,t,u));let d=Promise.resolve(c);n.length<3&&(d=d.then(u)),d.catch(m=>l(m))})}function lr(n,e,t,a,i=r=>r()){const r=[];for(const s of n)for(const o in s.components){let l=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(xc(l)){const u=(l.__vccOpts||l)[e];u&&r.push(st(u,t,a,s,o,i))}else{let u=l();r.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${o}" at "${s.path}"`);const d=Bp(c)?c.default:c;s.mods[o]=c,s.components[o]=d;const m=(d.__vccOpts||d)[e];return m&&st(m,t,a,s,o,i)()}))}}return r}function ef(n,e){const t=[],a=[],i=[],r=Math.max(e.matched.length,n.matched.length);for(let s=0;s<r;s++){const o=e.matched[s];o&&(n.matched.find(u=>Jt(u,o))?a.push(o):t.push(o));const l=n.matched[s];l&&(e.matched.find(u=>Jt(u,l))||i.push(l))}return[t,a,i]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let tf=()=>location.protocol+"//"+location.host;function Cc(n,e){const{pathname:t,search:a,hash:i}=e,r=n.indexOf("#");if(r>-1){let s=i.includes(n.slice(r))?n.slice(r).length:1,o=i.slice(s);return o[0]!=="/"&&(o="/"+o),so(o,"")}return so(t,n)+a+i}function af(n,e,t,a){let i=[],r=[],s=null;const o=({state:m})=>{const f=Cc(n,location),g=t.value,w=e.value;let x=0;if(m){if(t.value=f,e.value=m,s&&s===g){s=null;return}x=w?m.position-w.position:0}else a(f);i.forEach(C=>{C(t.value,g,{delta:x,type:Er.pop,direction:x?x>0?or.forward:or.back:or.unknown})})};function l(){s=t.value}function u(m){i.push(m);const f=()=>{const g=i.indexOf(m);g>-1&&i.splice(g,1)};return r.push(f),f}function c(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Sn({},m.state,{scroll:Hi()}),"")}}function d(){for(const m of r)m();r=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:d}}function mo(n,e,t,a=!1,i=!1){return{back:n,current:e,forward:t,replaced:a,position:window.history.length,scroll:i?Hi():null}}function rf(n){const{history:e,location:t}=window,a={value:Cc(n,t)},i={value:e.state};i.value||r(a.value,{back:null,current:a.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,u,c){const d=n.indexOf("#"),m=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+l:tf()+n+l;try{e[c?"replaceState":"pushState"](u,"",m),i.value=u}catch(f){console.error(f),t[c?"replace":"assign"](m)}}function s(l,u){r(l,Sn({},e.state,mo(i.value.back,l,i.value.forward,!0),u,{position:i.value.position}),!0),a.value=l}function o(l,u){const c=Sn({},i.value,e.state,{forward:l,scroll:Hi()});r(c.current,c,!0),r(l,Sn({},mo(a.value,l,null),{position:c.position+1},u),!1),a.value=l}return{location:a,state:i,push:o,replace:s}}function sf(n){n=zp(n);const e=rf(n),t=af(n,e.state,e.location,e.replace);function a(r,s=!0){s||t.pauseListeners(),history.go(r)}const i=Sn({location:"",base:n,go:a,createHref:Up.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}let St=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var Gn=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(Gn||{});const of={type:St.Static,value:""},lf=/[a-zA-Z0-9_]/;function cf(n){if(!n)return[[]];if(n==="/")return[[of]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(f){throw new Error(`ERR (${t})/"${u}": ${f}`)}let t=Gn.Static,a=t;const i=[];let r;function s(){r&&i.push(r),r=[]}let o=0,l,u="",c="";function d(){u&&(t===Gn.Static?r.push({type:St.Static,value:u}):t===Gn.Param||t===Gn.ParamRegExp||t===Gn.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:St.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==Gn.ParamRegExp){a=t,t=Gn.EscapeNext;continue}switch(t){case Gn.Static:l==="/"?(u&&d(),s()):l===":"?(d(),t=Gn.Param):m();break;case Gn.EscapeNext:m(),t=a;break;case Gn.Param:l==="("?t=Gn.ParamRegExp:lf.test(l)?m():(d(),t=Gn.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Gn.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:t=Gn.ParamRegExpEnd:c+=l;break;case Gn.ParamRegExpEnd:d(),t=Gn.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,c="";break;default:e("Unknown state");break}}return t===Gn.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),d(),s(),i}const po="[^/]+?",uf={sensitive:!1,strict:!1,start:!0,end:!0};var ae=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(ae||{});const df=/[.+*?^${}()[\]/\\]/g;function mf(n,e){const t=Sn({},uf,e),a=[];let i=t.start?"^":"";const r=[];for(const u of n){const c=u.length?[]:[ae.Root];t.strict&&!u.length&&(i+="/");for(let d=0;d<u.length;d++){const m=u[d];let f=ae.Segment+(t.sensitive?ae.BonusCaseSensitive:0);if(m.type===St.Static)d||(i+="/"),i+=m.value.replace(df,"\\$&"),f+=ae.Static;else if(m.type===St.Param){const{value:g,repeatable:w,optional:x,regexp:C}=m;r.push({name:g,repeatable:w,optional:x});const B=C||po;if(B!==po){f+=ae.BonusCustomRegExp;try{`${B}`}catch(b){throw new Error(`Invalid custom RegExp for param "${g}" (${B}): `+b.message)}}let h=w?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;d||(h=x&&u.length<2?`(?:/${h})`:"/"+h),x&&(h+="?"),i+=h,f+=ae.Dynamic,x&&(f+=ae.BonusOptional),w&&(f+=ae.BonusRepeatable),B===".*"&&(f+=ae.BonusWildcard)}c.push(f)}a.push(c)}if(t.strict&&t.end){const u=a.length-1;a[u][a[u].length-1]+=ae.BonusStrict}t.strict||(i+="/?"),t.end?i+="$":t.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const s=new RegExp(i,t.sensitive?"":"i");function o(u){const c=u.match(s),d={};if(!c)return null;for(let m=1;m<c.length;m++){const f=c[m]||"",g=r[m-1];d[g.name]=f&&g.repeatable?f.split("/"):f}return d}function l(u){let c="",d=!1;for(const m of n){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const f of m)if(f.type===St.Static)c+=f.value;else if(f.type===St.Param){const{value:g,repeatable:w,optional:x}=f,C=g in u?u[g]:"";if(Ae(C)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const B=Ae(C)?C.join("/"):C;if(!B)if(x)m.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);c+=B}}return c||"/"}return{re:s,score:a,keys:r,parse:o,stringify:l}}function pf(n,e){let t=0;for(;t<n.length&&t<e.length;){const a=e[t]-n[t];if(a)return a;t++}return n.length<e.length?n.length===1&&n[0]===ae.Static+ae.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===ae.Static+ae.Segment?1:-1:0}function Mc(n,e){let t=0;const a=n.score,i=e.score;for(;t<a.length&&t<i.length;){const r=pf(a[t],i[t]);if(r)return r;t++}if(Math.abs(i.length-a.length)===1){if(fo(a))return 1;if(fo(i))return-1}return i.length-a.length}function fo(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const ff={strict:!1,end:!0,sensitive:!1};function hf(n,e,t){const a=mf(cf(n.path),t),i=Sn(a,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function vf(n,e){const t=[],a=new Map;e=ro(ff,e);function i(d){return a.get(d)}function r(d,m,f){const g=!f,w=vo(d);w.aliasOf=f&&f.record;const x=ro(e,d),C=[w];if("alias"in d){const b=typeof d.alias=="string"?[d.alias]:d.alias;for(const R of b)C.push(vo(Sn({},w,{components:f?f.record.components:w.components,path:R,aliasOf:f?f.record:w})))}let B,h;for(const b of C){const{path:R}=b;if(m&&R[0]!=="/"){const Y=m.record.path,N=Y[Y.length-1]==="/"?"":"/";b.path=m.record.path+(R&&N+R)}if(B=hf(b,m,x),f?f.alias.push(B):(h=h||B,h!==B&&h.alias.push(B),g&&d.name&&!go(B)&&s(d.name)),Rc(B)&&l(B),w.children){const Y=w.children;for(let N=0;N<Y.length;N++)r(Y[N],B,f&&f.children[N])}f=f||B}return h?()=>{s(h)}:pa}function s(d){if(Ic(d)){const m=a.get(d);m&&(a.delete(d),t.splice(t.indexOf(m),1),m.children.forEach(s),m.alias.forEach(s))}else{const m=t.indexOf(d);m>-1&&(t.splice(m,1),d.record.name&&a.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function o(){return t}function l(d){const m=wf(d,t);t.splice(m,0,d),d.record.name&&!go(d)&&a.set(d.record.name,d)}function u(d,m){let f,g={},w,x;if("name"in d&&d.name){if(f=a.get(d.name),!f)throw qt(Pn.MATCHER_NOT_FOUND,{location:d});x=f.record.name,g=Sn(ho(m.params,f.keys.filter(h=>!h.optional).concat(f.parent?f.parent.keys.filter(h=>h.optional):[]).map(h=>h.name)),d.params&&ho(d.params,f.keys.map(h=>h.name))),w=f.stringify(g)}else if(d.path!=null)w=d.path,f=t.find(h=>h.re.test(w)),f&&(g=f.parse(w),x=f.record.name);else{if(f=m.name?a.get(m.name):t.find(h=>h.re.test(m.path)),!f)throw qt(Pn.MATCHER_NOT_FOUND,{location:d,currentLocation:m});x=f.record.name,g=Sn({},m.params,d.params),w=f.stringify(g)}const C=[];let B=f;for(;B;)C.unshift(B.record),B=B.parent;return{name:x,path:w,params:g,matched:C,meta:bf(C)}}n.forEach(d=>r(d));function c(){t.length=0,a.clear()}return{addRoute:r,resolve:u,removeRoute:s,clearRoutes:c,getRoutes:o,getRecordMatcher:i}}function ho(n,e){const t={};for(const a of e)a in n&&(t[a]=n[a]);return t}function vo(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:gf(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function gf(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const a in n.components)e[a]=typeof t=="object"?t[a]:t;return e}function go(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function bf(n){return n.reduce((e,t)=>Sn(e,t.meta),{})}function wf(n,e){let t=0,a=e.length;for(;t!==a;){const r=t+a>>1;Mc(n,e[r])<0?a=r:t=r+1}const i=yf(n);return i&&(a=e.lastIndexOf(i,a-1)),a}function yf(n){let e=n;for(;e=e.parent;)if(Rc(e)&&Mc(n,e)===0)return e}function Rc({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function bo(n){const e=Qn(Ki),t=Qn(qr),a=A(()=>{const l=Z(n.to);return e.resolve(l)}),i=A(()=>{const{matched:l}=a.value,{length:u}=l,c=l[u-1],d=t.matched;if(!c||!d.length)return-1;const m=d.findIndex(Jt.bind(null,c));if(m>-1)return m;const f=wo(l[u-2]);return u>1&&wo(c)===f&&d[d.length-1].path!==f?d.findIndex(Jt.bind(null,l[u-2])):m}),r=A(()=>i.value>-1&&_f(t.params,a.value.params)),s=A(()=>i.value>-1&&i.value===t.matched.length-1&&Ec(t.params,a.value.params));function o(l={}){if(kf(l)){const u=e[Z(n.replace)?"replace":"push"](Z(n.to)).catch(pa);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:a,href:A(()=>a.value.href),isActive:r,isExactActive:s,navigate:o}}function xf(n){return n.length===1?n[0]:n}const Bf=vn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:bo,setup(n,{slots:e}){const t=ct(bo(n)),{options:a}=Qn(Ki),i=A(()=>({[yo(n.activeClass,a.linkActiveClass,"router-link-active")]:t.isActive,[yo(n.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&xf(e.default(t));return n.custom?r:en("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},r)}}}),Sf=Bf;function kf(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function _f(n,e){for(const t in e){const a=e[t],i=n[t];if(typeof a=="string"){if(a!==i)return!1}else if(!Ae(i)||i.length!==a.length||a.some((r,s)=>r.valueOf()!==i[s].valueOf()))return!1}return!0}function wo(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const yo=(n,e,t)=>n??e??t,Af=vn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const a=Qn(Tr),i=A(()=>n.route||a.value),r=Qn(uo,0),s=A(()=>{let u=Z(r);const{matched:c}=i.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),o=A(()=>i.value.matched[s.value]);lt(uo,A(()=>s.value+1)),lt(nf,o),lt(Tr,i);const l=hn();return Hn(()=>[l.value,o.value,n.name],([u,c,d],[m,f,g])=>{c&&(c.instances[d]=u,f&&f!==c&&u&&u===m&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),u&&c&&(!f||!Jt(c,f)||!m)&&(c.enterCallbacks[d]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=i.value,c=n.name,d=o.value,m=d&&d.components[c];if(!m)return xo(t.default,{Component:m,route:u});const f=d.props[c],g=f?f===!0?u.params:typeof f=="function"?f(u):f:null,x=en(m,Sn({},g,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return xo(t.default,{Component:x,route:u})||x}}});function xo(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Ef=Af;function If(n){const e=vf(n.routes,n),t=n.parseQuery||Zp,a=n.stringifyQuery||co,i=n.history,r=sa(),s=sa(),o=sa(),l=On(Ve);let u=Ve;Ot&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=rr.bind(null,H=>""+H),d=rr.bind(null,Op),m=rr.bind(null,_a);function f(H,Q){let X,an;return Ic(H)?(X=e.getRecordMatcher(H),an=Q):an=H,e.addRoute(an,X)}function g(H){const Q=e.getRecordMatcher(H);Q&&e.removeRoute(Q)}function w(){return e.getRoutes().map(H=>H.record)}function x(H){return!!e.getRecordMatcher(H)}function C(H,Q){if(Q=Sn({},Q||l.value),typeof H=="string"){const v=sr(t,H,Q.path),k=e.resolve({path:v.path},Q),z=i.createHref(v.fullPath);return Sn(v,k,{params:m(k.params),hash:_a(v.hash),redirectedFrom:void 0,href:z})}let X;if(H.path!=null)X=Sn({},H,{path:sr(t,H.path,Q.path).path});else{const v=Sn({},H.params);for(const k in v)v[k]==null&&delete v[k];X=Sn({},H,{params:d(v)}),Q.params=d(Q.params)}const an=e.resolve(X,Q),fn=H.hash||"";an.params=c(m(an.params));const En=Pp(a,Sn({},H,{hash:Rp(fn),path:an.path})),p=i.createHref(En);return Sn({fullPath:En,hash:fn,query:a===co?Qp(H.query):H.query||{}},an,{redirectedFrom:void 0,href:p})}function B(H){return typeof H=="string"?sr(t,H,l.value.path):Sn({},H)}function h(H,Q){if(u!==H)return qt(Pn.NAVIGATION_CANCELLED,{from:Q,to:H})}function b(H){return N(H)}function R(H){return b(Sn(B(H),{replace:!0}))}function Y(H,Q){const X=H.matched[H.matched.length-1];if(X&&X.redirect){const{redirect:an}=X;let fn=typeof an=="function"?an(H,Q):an;return typeof fn=="string"&&(fn=fn.includes("?")||fn.includes("#")?fn=B(fn):{path:fn},fn.params={}),Sn({query:H.query,hash:H.hash,params:fn.path!=null?{}:H.params},fn)}}function N(H,Q){const X=u=C(H),an=l.value,fn=H.state,En=H.force,p=H.replace===!0,v=Y(X,an);if(v)return N(Sn(B(v),{state:typeof v=="object"?Sn({},fn,v.state):fn,force:En,replace:p}),Q||X);const k=X;k.redirectedFrom=Q;let z;return!En&&Hp(a,an,X)&&(z=qt(Pn.NAVIGATION_DUPLICATED,{to:k,from:an}),yn(an,an,!0,!1)),(z?Promise.resolve(z):D(k,an)).catch(O=>He(O)?He(O,Pn.NAVIGATION_GUARD_REDIRECT)?O:cn(O):W(O,k,an)).then(O=>{if(O){if(He(O,Pn.NAVIGATION_GUARD_REDIRECT))return N(Sn({replace:p},B(O.to),{state:typeof O.to=="object"?Sn({},fn,O.to.state):fn,force:En}),Q||k)}else O=_(k,an,!0,p,fn);return P(k,an,O),O})}function T(H,Q){const X=h(H,Q);return X?Promise.reject(X):Promise.resolve()}function M(H){const Q=et.values().next().value;return Q&&typeof Q.runWithContext=="function"?Q.runWithContext(H):H()}function D(H,Q){let X;const[an,fn,En]=ef(H,Q);X=lr(an.reverse(),"beforeRouteLeave",H,Q);for(const v of an)v.leaveGuards.forEach(k=>{X.push(st(k,H,Q))});const p=T.bind(null,H,Q);return X.push(p),se(X).then(()=>{X=[];for(const v of r.list())X.push(st(v,H,Q));return X.push(p),se(X)}).then(()=>{X=lr(fn,"beforeRouteUpdate",H,Q);for(const v of fn)v.updateGuards.forEach(k=>{X.push(st(k,H,Q))});return X.push(p),se(X)}).then(()=>{X=[];for(const v of En)if(v.beforeEnter)if(Ae(v.beforeEnter))for(const k of v.beforeEnter)X.push(st(k,H,Q));else X.push(st(v.beforeEnter,H,Q));return X.push(p),se(X)}).then(()=>(H.matched.forEach(v=>v.enterCallbacks={}),X=lr(En,"beforeRouteEnter",H,Q,M),X.push(p),se(X))).then(()=>{X=[];for(const v of s.list())X.push(st(v,H,Q));return X.push(p),se(X)}).catch(v=>He(v,Pn.NAVIGATION_CANCELLED)?v:Promise.reject(v))}function P(H,Q,X){o.list().forEach(an=>M(()=>an(H,Q,X)))}function _(H,Q,X,an,fn){const En=h(H,Q);if(En)return En;const p=Q===Ve,v=Ot?history.state:{};X&&(an||p?i.replace(H.fullPath,Sn({scroll:p&&v&&v.scroll},fn)):i.push(H.fullPath,fn)),l.value=H,yn(H,Q,X,p),cn()}let E;function I(){E||(E=i.listen((H,Q,X)=>{if(!oe.listening)return;const an=C(H),fn=Y(an,oe.currentRoute.value);if(fn){N(Sn(fn,{replace:!0,force:!0}),an).catch(pa);return}u=an;const En=l.value;Ot&&jp(lo(En.fullPath,X.delta),Hi()),D(an,En).catch(p=>He(p,Pn.NAVIGATION_ABORTED|Pn.NAVIGATION_CANCELLED)?p:He(p,Pn.NAVIGATION_GUARD_REDIRECT)?(N(Sn(B(p.to),{force:!0}),an).then(v=>{He(v,Pn.NAVIGATION_ABORTED|Pn.NAVIGATION_DUPLICATED)&&!X.delta&&X.type===Er.pop&&i.go(-1,!1)}).catch(pa),Promise.reject()):(X.delta&&i.go(-X.delta,!1),W(p,an,En))).then(p=>{p=p||_(an,En,!1),p&&(X.delta&&!He(p,Pn.NAVIGATION_CANCELLED)?i.go(-X.delta,!1):X.type===Er.pop&&He(p,Pn.NAVIGATION_ABORTED|Pn.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),P(an,En,p)}).catch(pa)}))}let S=sa(),y=sa(),q;function W(H,Q,X){cn(H);const an=y.list();return an.length?an.forEach(fn=>fn(H,Q,X)):console.error(H),Promise.reject(H)}function pn(){return q&&l.value!==Ve?Promise.resolve():new Promise((H,Q)=>{S.add([H,Q])})}function cn(H){return q||(q=!H,I(),S.list().forEach(([Q,X])=>H?X(H):Q()),S.reset()),H}function yn(H,Q,X,an){const{scrollBehavior:fn}=n;if(!Ot||!fn)return Promise.resolve();const En=!X&&Wp(lo(H.fullPath,0))||(an||!X)&&history.state&&history.state.scroll||null;return mt().then(()=>fn(H,Q,En)).then(p=>p&&Yp(p)).catch(p=>W(p,H,Q))}const An=H=>i.go(H);let nt;const et=new Set,oe={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:w,resolve:C,options:n,push:b,replace:R,go:An,back:()=>An(-1),forward:()=>An(1),beforeEach:r.add,beforeResolve:s.add,afterEach:o.add,onError:y.add,isReady:pn,install(H){H.component("RouterLink",Sf),H.component("RouterView",Ef),H.config.globalProperties.$router=oe,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>Z(l)}),Ot&&!nt&&l.value===Ve&&(nt=!0,b(i.location).catch(an=>{}));const Q={};for(const an in Ve)Object.defineProperty(Q,an,{get:()=>l.value[an],enumerable:!0});H.provide(Ki,oe),H.provide(qr,vl(Q)),H.provide(Tr,l);const X=H.unmount;et.add(H),H.unmount=function(){et.delete(H),et.size<1&&(u=Ve,E&&E(),E=null,l.value=Ve,nt=!1,q=!1),X()}}};function se(H){return H.reduce((Q,X)=>Q.then(()=>M(X)),Promise.resolve())}return oe}function Ha(){return Qn(Ki)}function na(n){return Qn(qr)}var Xr=Symbol(""),Fe=()=>{const n=Qn(Xr);if(!n)throw new Error("useClientData() is called without provider.");return n},Tf=()=>Fe().pageComponent,Lc=()=>Fe().pageFrontmatter,Cf=()=>Fe().pageHead,Mf=()=>Fe().pageLang,Rf=()=>Fe().pageLayout,Lf=()=>Fe().routeLocale,Nc=()=>Fe().routePath,Nf=()=>Fe().routes,Of=()=>Fe().siteData,Vi=Fe,Oc=Lc,Cr=new Set,Ka=n=>{Cr.add(n),Zt(()=>{Cr.delete(n)})},Df=Symbol(""),Mr=On(yp),zt=On(xp),Dc=(n,e)=>{const t=up(n,e);if(zt.value[t])return t;const a=encodeURI(t);if(zt.value[a])return a;const i=Mr.value[t]||Mr.value[a];return i||t},Aa=(n,e)=>{const{pathname:t,hashAndQueries:a}=bc(n),i=Dc(t,e),r=i+a;return zt.value[i]?{...zt.value[i],path:r,notFound:!1}:{...zt.value["/404.html"],path:r,notFound:!0}},Ff=(n,e)=>{const{pathname:t,hashAndQueries:a}=bc(n);return Dc(t,e)+a},Pf=n=>{if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)&&!(n.currentTarget&&n.currentTarget.getAttribute("target")?.match(/\b_blank\b/i)))return n.preventDefault(),!0},zi=vn({name:"RouteLink",props:{to:{type:String,required:!0},active:Boolean,activeClass:{type:String,default:"route-link-active"}},slots:Object,setup(n,{slots:e}){const t=Ha(),a=na(),i=A(()=>n.to.startsWith("#")||n.to.startsWith("?")?n.to:`/${Ff(n.to,a.path).substring(1)}`);return()=>en("a",{class:["route-link",{[n.activeClass]:n.active}],href:i.value,onClick:(r={})=>{Pf(r)&&t.push(n.to).catch()}},e.default())}}),Hf=vn({name:"AutoLink",props:{config:{type:Object,required:!0}},slots:Object,setup(n,{slots:e}){const t=yl(n,"config"),a=na(),i=Of(),r=A(()=>Fa(t.value.link)),s=A(()=>t.value.target||(r.value?"_blank":void 0)),o=A(()=>s.value==="_blank"),l=A(()=>!r.value&&!o.value),u=A(()=>t.value.rel||(o.value?"noopener noreferrer":null)),c=A(()=>t.value.ariaLabel??t.value.text),d=A(()=>{if(t.value.exact)return!1;const f=Object.keys(i.value.locales);return f.length?f.every(g=>g!==t.value.link):t.value.link!=="/"}),m=A(()=>l.value?t.value.activeMatch?(t.value.activeMatch instanceof RegExp?t.value.activeMatch:new RegExp(t.value.activeMatch,"u")).test(a.path):d.value?a.path.startsWith(t.value.link):a.path===t.value.link:!1);return()=>{const{before:f,after:g,default:w}=e,x=w?.(t.value)??[f?.(t.value),t.value.text,g?.(t.value)];return l.value?en(zi,{class:"auto-link",to:t.value.link,active:m.value,"aria-label":c.value},()=>x):en("a",{class:"auto-link external-link",href:t.value.link,"aria-label":c.value,rel:u.value,target:s.value},x)}}}),Zr=vn({name:"ClientOnly",setup(n,e){const t=hn(!1);return Jn(()=>{t.value=!0}),()=>t.value?e.slots.default?.():null}}),Ja=n=>{Cr.forEach(e=>e(n))},Qr=vn({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(n){const e=Tf(),t=A(()=>{if(!n.path)return e.value;const i=Aa(n.path);return Ed(async()=>i.loader().then(({comp:r})=>r))}),a=Lc();return Hn(a,()=>{Ja("updated")},{deep:!0,flush:"post"}),()=>en(t.value,{onVnodeMounted:()=>{Ja("mounted")},onVnodeUpdated:()=>{Ja("updated")},onVnodeBeforeUnmount:()=>{Ja("beforeUnmount")}})}}),Kf="Layout",Vf="en-US",gt=ct({resolveLayouts:n=>n.reduce((e,t)=>({...e,...t.layouts}),{}),resolvePageHead:(n,e,t)=>{const a=_e(e.description)?e.description:t.description,i=[...Array.isArray(e.head)?e.head:[],...t.head,["title",{},n],["meta",{name:"description",content:a}]];return vp(i)},resolvePageHeadTitle:(n,e)=>[n.title,e.title].filter(t=>!!t).join(" | "),resolvePageLang:(n,e)=>n.lang||e.lang||Vf,resolvePageLayout:(n,e)=>{const t=_e(n.frontmatter.layout)?n.frontmatter.layout:Kf;if(!e[t])throw new Error(`[vuepress] Cannot resolve layout: ${t}`);return e[t]},resolveRouteLocale:(n,e)=>dp(n,decodeURI(e)),resolveSiteLocaleData:({base:n,locales:e,...t},a)=>({...t,...e[a],head:[...e[a]?.head??[],...t.head]})}),Qe=(n={})=>n,ns=n=>Pa(n)?n:`/${yc(n)}`,zf=Object.defineProperty,$f=(n,e)=>{for(var t in e)zf(n,t,{get:e[t],enumerable:!0})},Uf={};$f(Uf,{COMPONENT_STATE_TYPE:()=>Gf,INSPECTOR_ID:()=>Yf,INSPECTOR_LABEL:()=>jf,INSPECTOR_NODES:()=>Wf,INSPECTOR_STATE_SECTION_NAME:()=>Jf,PLUGIN_ID:()=>Fc,PLUGIN_LABEL:()=>es});var Fc="org.vuejs.vuepress",es="VuePress",Gf=es,Yf=Fc,jf=es,Bo={id:"INTERNAL",label:"Internal",keys:["layouts","routes","redirects"]},So={id:"SITE",label:"Site",keys:["siteData","siteLocaleData"]},ko={id:"ROUTE",label:"Route",keys:["routePath","routeLocale"]},_o={id:"PAGE",label:"Page",keys:["pageData","pageFrontmatter","pageLang","pageHead","pageHeadTitle","pageLayout","pageComponent"]},Wf={[Bo.id]:Bo,[So.id]:So,[ko.id]:ko,[_o.id]:_o},Jf="State";function ts(n,e){return Ii()?(Iu(n,e),!0):!1}const $t=new WeakMap,Pc=(...n)=>{var e;const t=n[0],a=(e=Ee())===null||e===void 0?void 0:e.proxy,i=a??Ii();if(i==null&&!_l())throw new Error("injectLocal must be called in setup");return i&&$t.has(i)&&t in $t.get(i)?$t.get(i)[t]:Qn(...n)};function qf(n,e){var t;const a=(t=Ee())===null||t===void 0?void 0:t.proxy,i=a??Ii();if(i==null)throw new Error("provideLocal must be called in setup");$t.has(i)||$t.set(i,Object.create(null));const r=$t.get(i);return r[n]=e,lt(n,e)}const as=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Xf=n=>n!=null,Zf=Object.prototype.toString,Qf=n=>Zf.call(n)==="[object Object]",Ct=()=>{};function n1(...n){if(n.length!==1)return yl(...n);const e=n[0];return typeof e=="function"?ut(wl(()=>({get:e,set:Ct}))):hn(e)}function is(n,e){function t(...a){return new Promise((i,r)=>{Promise.resolve(n(()=>e.apply(this,a),{fn:e,thisArg:this,args:a})).then(i).catch(r)})}return t}const Hc=n=>n();function e1(n,e={}){let t,a,i=Ct;const r=l=>{clearTimeout(l),i(),i=Ct};let s;return l=>{const u=Mn(n),c=Mn(e.maxWait);return t&&r(t),u<=0||c!==void 0&&c<=0?(a&&(r(a),a=void 0),Promise.resolve(l())):new Promise((d,m)=>{i=e.rejectOnCancel?m:d,s=l,c&&!a&&(a=setTimeout(()=>{t&&r(t),a=void 0,d(s())},c)),t=setTimeout(()=>{a&&r(a),a=void 0,d(l())},u)})}}function t1(...n){let e=0,t,a=!0,i=Ct,r,s,o,l,u;!Kn(n[0])&&typeof n[0]=="object"?{delay:s,trailing:o=!0,leading:l=!0,rejectOnCancel:u=!1}=n[0]:[s,o=!0,l=!0,u=!1]=n;const c=()=>{t&&(clearTimeout(t),t=void 0,i(),i=Ct)};return m=>{const f=Mn(s),g=Date.now()-e,w=()=>r=m();return c(),f<=0?(e=Date.now(),w()):(g>f?(e=Date.now(),(l||!a)&&w()):o&&(r=new Promise((x,C)=>{i=u?C:x,t=setTimeout(()=>{e=Date.now(),a=!0,x(w()),c()},Math.max(0,f-g))})),!l&&!t&&(t=setTimeout(()=>a=!0,f)),a=!1,r)}}function a1(n=Hc,e={}){const{initialState:t="active"}=e,a=n1(t==="active");function i(){a.value=!1}function r(){a.value=!0}return{isActive:ut(a),pause:i,resume:r,eventFilter:(...o)=>{a.value&&n(...o)}}}function i1(n){let e;function t(){return e||(e=n()),e}return t.reset=async()=>{const a=e;e=void 0,a&&await a},t}function Ao(n){return n.endsWith("rem")?Number.parseFloat(n)*16:Number.parseFloat(n)}function fa(n){return Array.isArray(n)?n:[n]}function r1(n){return Ee()}function Kc(n,e=200,t={}){return is(e1(e,t),n)}function s1(n,e=200,t=!1,a=!0,i=!1){return is(t1(e,t,a,i),n)}function o1(n,e,t={}){const{eventFilter:a=Hc,...i}=t;return Hn(n,is(a,e),i)}function l1(n,e,t={}){const{eventFilter:a,initialState:i="active",...r}=t,{eventFilter:s,pause:o,resume:l,isActive:u}=a1(a,{initialState:i});return{stop:o1(n,e,{...r,eventFilter:s}),pause:o,resume:l,isActive:u}}function $i(n,e=!0,t){r1()?Jn(n,t):e?n():mt(n)}function c1(n,e,t={}){const{immediate:a=!0,immediateCallback:i=!1}=t,r=On(!1);let s;function o(){s&&(clearTimeout(s),s=void 0)}function l(){r.value=!1,o()}function u(...c){i&&n(),o(),r.value=!0,s=setTimeout(()=>{r.value=!1,s=void 0,n(...c)},Mn(e))}return a&&(r.value=!0,as&&u()),ts(l),{isPending:ju(r),start:u,stop:l}}function rs(n=!1,e={}){const{truthyValue:t=!0,falsyValue:a=!1}=e,i=Kn(n),r=On(n);function s(o){if(arguments.length)return r.value=o,r.value;{const l=Mn(t);return r.value=r.value===l?Mn(a):l,r.value}}return i?s:[r,s]}function ss(n,e,t){return Hn(n,e,{...t,immediate:!0})}const be=as?window:void 0,Vc=as?window.navigator:void 0;function Ye(n){var e;const t=Mn(n);return(e=t?.$el)!==null&&e!==void 0?e:t}function re(...n){const e=(a,i,r,s)=>(a.addEventListener(i,r,s),()=>a.removeEventListener(i,r,s)),t=A(()=>{const a=fa(Mn(n[0])).filter(i=>i!=null);return a.every(i=>typeof i!="string")?a:void 0});return ss(()=>{var a,i;return[(a=(i=t.value)===null||i===void 0?void 0:i.map(r=>Ye(r)))!==null&&a!==void 0?a:[be].filter(r=>r!=null),fa(Mn(t.value?n[1]:n[0])),fa(Z(t.value?n[2]:n[1])),Mn(t.value?n[3]:n[2])]},([a,i,r,s],o,l)=>{if(!a?.length||!i?.length||!r?.length)return;const u=Qf(s)?{...s}:s,c=a.flatMap(d=>i.flatMap(m=>r.map(f=>e(d,m,f,u))));l(()=>{c.forEach(d=>d())})},{flush:"post"})}function os(){const n=On(!1),e=Ee();return e&&Jn(()=>{n.value=!0},e),n}function Va(n){const e=os();return A(()=>(e.value,!!n()))}function u1(n,e,t={}){const{window:a=be,...i}=t;let r;const s=Va(()=>a&&"MutationObserver"in a),o=()=>{r&&(r.disconnect(),r=void 0)},l=Hn(A(()=>{const d=fa(Mn(n)).map(Ye).filter(Xf);return new Set(d)}),d=>{o(),s.value&&d.size&&(r=new MutationObserver(e),d.forEach(m=>r.observe(m,i)))},{immediate:!0,flush:"post"}),u=()=>r?.takeRecords(),c=()=>{l(),o()};return ts(c),{isSupported:s,stop:c,takeRecords:u}}const d1=Symbol("vueuse-ssr-width");function m1(){const n=_l()?Pc(d1,null):null;return typeof n=="number"?n:void 0}function ls(n,e={}){const{window:t=be,ssrWidth:a=m1()}=e,i=Va(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function"),r=On(typeof a=="number"),s=On(),o=On(!1),l=u=>{o.value=u.matches};return ud(()=>{if(r.value){r.value=!i.value,o.value=Mn(n).split(",").some(u=>{const c=u.includes("not all"),d=u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),m=u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let f=!!(d||m);return d&&f&&(f=a>=Ao(d[1])),m&&f&&(f=a<=Ao(m[1])),c?!f:f});return}i.value&&(s.value=t.matchMedia(Mn(n)),o.value=s.value.matches)}),re(s,"change",l,{passive:!0}),A(()=>o.value)}function Eo(n,e={}){const{controls:t=!1,navigator:a=Vc}=e,i=Va(()=>a&&"permissions"in a),r=On(),s=typeof n=="string"?{name:n}:n,o=On(),l=()=>{var c,d;o.value=(c=(d=r.value)===null||d===void 0?void 0:d.state)!==null&&c!==void 0?c:"prompt"};re(r,"change",l,{passive:!0});const u=i1(async()=>{if(i.value){if(!r.value)try{r.value=await a.permissions.query(s)}catch{r.value=void 0}finally{l()}if(t)return gn(r.value)}});return u(),t?{state:o,isSupported:i,query:u}:o}function p1(n={}){const{navigator:e=Vc,read:t=!1,source:a,copiedDuring:i=1500,legacy:r=!1}=n,s=Va(()=>e&&"clipboard"in e),o=Eo("clipboard-read"),l=Eo("clipboard-write"),u=A(()=>s.value||r),c=On(""),d=On(!1),m=c1(()=>d.value=!1,i,{immediate:!1});async function f(){let B=!(s.value&&C(o.value));if(!B)try{c.value=await e.clipboard.readText()}catch{B=!0}B&&(c.value=x())}u.value&&t&&re(["copy","cut"],f,{passive:!0});async function g(B=Mn(a)){if(u.value&&B!=null){let h=!(s.value&&C(l.value));if(!h)try{await e.clipboard.writeText(B)}catch{h=!0}h&&w(B),c.value=B,d.value=!0,m.start()}}function w(B){const h=document.createElement("textarea");h.value=B,h.style.position="absolute",h.style.opacity="0",h.setAttribute("readonly",""),document.body.appendChild(h),h.select(),document.execCommand("copy"),h.remove()}function x(){var B,h,b;return(B=(h=document)===null||h===void 0||(b=h.getSelection)===null||b===void 0||(b=b.call(h))===null||b===void 0?void 0:b.toString())!==null&&B!==void 0?B:""}function C(B){return B==="granted"||B==="prompt"}return{isSupported:u,text:ut(c),copied:ut(d),copy:g}}const qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xa="__vueuse_ssr_handlers__",f1=h1();function h1(){return Xa in qa||(qa[Xa]=qa[Xa]||{}),qa[Xa]}function v1(n,e){return f1[n]||e}function g1(n){return ls("(prefers-color-scheme: dark)",n)}function b1(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}const w1={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},Io="vueuse-storage";function cs(n,e,t,a={}){var i;const{flush:r="pre",deep:s=!0,listenToStorageChanges:o=!0,writeDefaults:l=!0,mergeDefaults:u=!1,shallow:c,window:d=be,eventFilter:m,onError:f=I=>{console.error(I)},initOnMounted:g}=a,w=(c?On:hn)(typeof e=="function"?e():e),x=A(()=>Mn(n));if(!t)try{t=v1("getDefaultStorage",()=>be?.localStorage)()}catch(I){f(I)}if(!t)return w;const C=Mn(e),B=b1(C),h=(i=a.serializer)!==null&&i!==void 0?i:w1[B],{pause:b,resume:R}=l1(w,I=>D(I),{flush:r,deep:s,eventFilter:m});Hn(x,()=>_(),{flush:r});let Y=!1;const N=I=>{g&&!Y||_(I)},T=I=>{g&&!Y||E(I)};d&&o&&(t instanceof Storage?re(d,"storage",N,{passive:!0}):re(d,Io,T)),g?$i(()=>{Y=!0,_()}):_();function M(I,S){if(d){const y={key:x.value,oldValue:I,newValue:S,storageArea:t};d.dispatchEvent(t instanceof Storage?new StorageEvent("storage",y):new CustomEvent(Io,{detail:y}))}}function D(I){try{const S=t.getItem(x.value);if(I==null)M(S,null),t.removeItem(x.value);else{const y=h.write(I);S!==y&&(t.setItem(x.value,y),M(S,y))}}catch(S){f(S)}}function P(I){const S=I?I.newValue:t.getItem(x.value);if(S==null)return l&&C!=null&&t.setItem(x.value,h.write(C)),C;if(!I&&u){const y=h.read(S);return typeof u=="function"?u(y,C):B==="object"&&!Array.isArray(y)?{...C,...y}:y}else return typeof S!="string"?S:h.read(S)}function _(I){if(!(I&&I.storageArea!==t)){if(I&&I.key==null){w.value=C;return}if(!(I&&I.key!==x.value)){b();try{const S=h.write(w.value);(I===void 0||I?.newValue!==S)&&(w.value=P(I))}catch(S){f(S)}finally{I?mt(R):R()}}}}function E(I){_(I.detail)}return w}function y1(n,e,t={}){const{window:a=be,...i}=t;let r;const s=Va(()=>a&&"ResizeObserver"in a),o=()=>{r&&(r.disconnect(),r=void 0)},l=Hn(A(()=>{const c=Mn(n);return Array.isArray(c)?c.map(d=>Ye(d)):[Ye(c)]}),c=>{if(o(),s.value&&a){r=new ResizeObserver(e);for(const d of c)d&&r.observe(d,i)}},{immediate:!0,flush:"post"}),u=()=>{o(),l()};return ts(u),{isSupported:s,stop:u}}function x1(n,e={width:0,height:0},t={}){const{window:a=be,box:i="content-box"}=t,r=A(()=>{var d;return(d=Ye(n))===null||d===void 0||(d=d.namespaceURI)===null||d===void 0?void 0:d.includes("svg")}),s=On(e.width),o=On(e.height),{stop:l}=y1(n,([d])=>{const m=i==="border-box"?d.borderBoxSize:i==="content-box"?d.contentBoxSize:d.devicePixelContentBoxSize;if(a&&r.value){const f=Ye(n);if(f){const g=f.getBoundingClientRect();s.value=g.width,o.value=g.height}}else if(m){const f=fa(m);s.value=f.reduce((g,{inlineSize:w})=>g+w,0),o.value=f.reduce((g,{blockSize:w})=>g+w,0)}else s.value=d.contentRect.width,o.value=d.contentRect.height},t);$i(()=>{const d=Ye(n);d&&(s.value="offsetWidth"in d?d.offsetWidth:e.width,o.value="offsetHeight"in d?d.offsetHeight:e.height)});const u=Hn(()=>Ye(n),d=>{s.value=d?e.width:0,o.value=d?e.height:0});function c(){l(),u()}return{width:s,height:o,stop:c}}const To=1;function B1(n,e={}){const{throttle:t=0,idle:a=200,onStop:i=Ct,onScroll:r=Ct,offset:s={left:0,right:0,top:0,bottom:0},observe:o={mutation:!1},eventListenerOptions:l={capture:!1,passive:!0},behavior:u="auto",window:c=be,onError:d=M=>{console.error(M)}}=e,m=typeof o=="boolean"?{mutation:o}:o,f=On(0),g=On(0),w=A({get(){return f.value},set(M){C(M,void 0)}}),x=A({get(){return g.value},set(M){C(void 0,M)}});function C(M,D){var P,_,E,I;if(!c)return;const S=Mn(n);if(!S)return;(P=S instanceof Document?c.document.body:S)===null||P===void 0||P.scrollTo({top:(_=Mn(D))!==null&&_!==void 0?_:x.value,left:(E=Mn(M))!==null&&E!==void 0?E:w.value,behavior:Mn(u)});const y=(S==null||(I=S.document)===null||I===void 0?void 0:I.documentElement)||S?.documentElement||S;w!=null&&(f.value=y.scrollLeft),x!=null&&(g.value=y.scrollTop)}const B=On(!1),h=ct({left:!0,right:!1,top:!0,bottom:!1}),b=ct({left:!1,right:!1,top:!1,bottom:!1}),R=M=>{B.value&&(B.value=!1,b.left=!1,b.right=!1,b.top=!1,b.bottom=!1,i(M))},Y=Kc(R,t+a),N=M=>{var D;if(!c)return;const P=(M==null||(D=M.document)===null||D===void 0?void 0:D.documentElement)||M?.documentElement||Ye(M),{display:_,flexDirection:E,direction:I}=c.getComputedStyle(P),S=I==="rtl"?-1:1,y=P.scrollLeft;b.left=y<f.value,b.right=y>f.value;const q=Math.abs(y*S)<=(s.left||0),W=Math.abs(y*S)+P.clientWidth>=P.scrollWidth-(s.right||0)-To;_==="flex"&&E==="row-reverse"?(h.left=W,h.right=q):(h.left=q,h.right=W),f.value=y;let pn=P.scrollTop;M===c.document&&!pn&&(pn=c.document.body.scrollTop),b.top=pn<g.value,b.bottom=pn>g.value;const cn=Math.abs(pn)<=(s.top||0),yn=Math.abs(pn)+P.clientHeight>=P.scrollHeight-(s.bottom||0)-To;_==="flex"&&E==="column-reverse"?(h.top=yn,h.bottom=cn):(h.top=cn,h.bottom=yn),g.value=pn},T=M=>{var D;c&&(N((D=M.target.documentElement)!==null&&D!==void 0?D:M.target),B.value=!0,Y(M),r(M))};return re(n,"scroll",t?s1(T,t,!0,!1):T,l),$i(()=>{try{const M=Mn(n);if(!M)return;N(M)}catch(M){d(M)}}),m?.mutation&&n!=null&&n!==c&&n!==document&&u1(n,()=>{const M=Mn(n);M&&N(M)},{attributes:!0,childList:!0,subtree:!0}),re(n,"scrollend",R,l),{x:w,y:x,isScrolling:B,arrivedState:h,directions:b,measure(){const M=Mn(n);c&&M&&N(M)}}}function S1(n={}){const{window:e=be,...t}=n;return B1(e,t)}function k1(n={}){const{window:e=be,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:a=Number.POSITIVE_INFINITY,listenOrientation:i=!0,includeScrollbar:r=!0,type:s="inner"}=n,o=On(t),l=On(a),u=()=>{if(e)if(s==="outer")o.value=e.outerWidth,l.value=e.outerHeight;else if(s==="visual"&&e.visualViewport){const{width:d,height:m,scale:f}=e.visualViewport;o.value=Math.round(d*f),l.value=Math.round(m*f)}else r?(o.value=e.innerWidth,l.value=e.innerHeight):(o.value=e.document.documentElement.clientWidth,l.value=e.document.documentElement.clientHeight)};u(),$i(u);const c={passive:!0};return re("resize",u,c),e&&s==="visual"&&e.visualViewport&&re(e.visualViewport,"resize",u,c),i&&Hn(ls("(orientation: portrait)"),()=>u()),{width:o,height:l}}const Co=async(n,e)=>{const{path:t,query:a}=n.currentRoute.value,{scrollBehavior:i}=n.options;n.options.scrollBehavior=void 0,await n.replace({path:t,query:a,hash:e}),n.options.scrollBehavior=i},_1=({headerLinkSelector:n,headerAnchorSelector:e,delay:t,offset:a=5})=>{const i=Ha();re("scroll",Kc(()=>{const s=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(s)<a){Co(i,"");return}const l=window.innerHeight+s,u=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),c=Math.abs(u-l)<a,d=Array.from(document.querySelectorAll(n)),f=Array.from(document.querySelectorAll(e)).filter(g=>d.some(w=>w.hash===g.hash));for(let g=0;g<f.length;g++){const w=f[g],x=f[g+1],C=s>=(w.parentElement?.offsetTop??0)-a,B=!x||s<(x.parentElement?.offsetTop??0)-a;if(!(C&&B))continue;const b=decodeURIComponent(i.currentRoute.value.hash),R=decodeURIComponent(w.hash);if(b===R)return;if(c){for(let Y=g+1;Y<f.length;Y++)if(b===decodeURIComponent(f[Y].hash))return}Co(i,R);return}},t))},A1="a.vp-sidebar-item",E1=".header-anchor",I1=300,T1=5,C1=Qe({setup(){_1({headerLinkSelector:A1,headerAnchorSelector:E1,delay:I1,offset:T1})}}),M1=Object.freeze(Object.defineProperty({__proto__:null,default:C1},Symbol.toStringTag,{value:"Module"})),R1=n=>typeof n<"u",zc=(n,e)=>_e(n)&&n.startsWith(e),{keys:L1}=Object,$c=n=>zc(n,"/")&&n[1]!=="/",Uc=n=>!lp(n)&&!Fa(n),Mo=()=>document.documentElement.getAttribute("data-theme")==="dark",Gc=[...new Array(6)].map((n,e)=>`[vp-content] h${e+1}`).join(","),N1=(n,e=2)=>{if(e===!1)return[];const[t,a]=typeof e=="number"?[e,e]:e==="deep"?[2,6]:e,i=n.filter(s=>s.level>=t&&s.level<=a),r=[];n:for(let s=0;s<i.length;s++){const o=i[s];if(s===0)r.push(o);else{for(let l=s-1;l>=0;l--){const u=i[l];if(u.level<o.level){u.children.push(o);continue n}}r.push(o)}}return r},O1=(n,e=[])=>{let t;if(e.length){const a=n.cloneNode(!0);a.querySelectorAll(e.join(",")).forEach(i=>{i.remove()}),t=a.textContent||""}else t=n.textContent||"";return t.trim()},D1=(n=Gc,e=[])=>Array.from(document.querySelectorAll(n)).filter(t=>t.id&&t.hasChildNodes()).map(t=>({element:t,title:O1(t,e),link:`#${t.id}`,slug:t.id,level:Number(t.tagName[1]),children:[]})),F1=({selector:n=Gc,levels:e=2,ignore:t=[]}={})=>N1(D1(n,t),e),Yc=(n,e)=>{const t=Ee()?.appContext.components;return t?n in t||Zn(n)in t||Ma(Zn(n))in t:!1},P1=vn({name:"FadeInExpandTransition",props:{group:Boolean,appear:Boolean,width:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function},setup(n,{slots:e}){const t=o=>{o.style[n.width?"maxWidth":"maxHeight"]=`${o.offsetHeight}px`,o.offsetWidth},a=o=>{o.style[n.width?"maxWidth":"maxHeight"]="0",o.offsetWidth,n.onLeave?.()},i=o=>{o.style[n.width?"maxWidth":"maxHeight"]="",n.onAfterLeave?.()},r=o=>{if(o.style.transition="none",n.width){const l=o.offsetWidth;o.style.maxWidth="0",o.offsetWidth,o.style.transition="",o.style.maxWidth=`${l}px`}else{const l=o.offsetHeight;o.style.maxHeight="0",o.offsetWidth,o.style.transition="",o.style.maxHeight=`${l}px`}o.offsetWidth},s=o=>{o.style[n.width?"maxWidth":"maxHeight"]="",n.onAfterEnter?.()};return()=>en(n.group?jm:Qt,{name:n.width?"fade-in-width-expand":"fade-in-height-expand",appear:n.appear,onEnter:r,onAfterEnter:s,onBeforeLeave:t,onLeave:a,onAfterLeave:i,...n.group?void 0:{mode:n.mode}},e)}}),jc=Symbol(""),Ro=hn(!1);typeof document<"u"&&(Ro.value=Mo(),new MutationObserver(()=>{Ro.value=Mo()}).observe(document.documentElement,{attributeFilter:["data-theme"],attributes:!0}));const H1=n=>{const e=Lf();return A(()=>{const t=Mn(n);return t[e.value]??t["/"]??Object.values(t)[0]})},us=H1,K1=()=>{const n=Nf();return A(()=>Object.keys(n.value))};var V1={"/":{backToTop:"返回顶部"}};const z1=vn({name:"BackToTop",setup(){const n=Oc(),e=us(V1),t=On(),{height:a}=x1(t),{height:i}=k1(),{y:r}=S1(),s=A(()=>(n.value.backToTop??!0)&&r.value>100),o=A(()=>r.value/(a.value-i.value)*100);return Jn(()=>{t.value=document.body}),()=>en(Qt,{name:"fade-in"},()=>s.value?en("button",{type:"button",class:"vp-back-to-top-button","aria-label":e.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[en("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":o.value},en("svg",en("circle",{cx:"26",cy:"26",r:"24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-dasharray":`${Math.PI*o.value*.48} ${Math.PI*(100-o.value)*.48}`}))),en("div",{class:"back-to-top-icon"})]):null)}}),$1=Qe({rootComponents:[z1]}),U1=Object.freeze(Object.defineProperty({__proto__:null,default:$1},Symbol.toStringTag,{value:"Module"})),G1=/language-(shellscript|shell|bash|sh|zsh)/,Y1=({selector:n,ignoreSelector:e,inlineSelector:t,duration:a=2e3,locales:i,showInMobile:r,transform:s})=>{const o=ls("(max-width: 419px)"),l=A(()=>!o.value||r),u=us(i),c=w=>{if(w.hasAttribute("copy-code"))return;const x=document.createElement("button");x.type="button",x.classList.add("vp-copy-code-button"),x.setAttribute("aria-label",u.value.copy),x.setAttribute("data-copied",u.value.copied),w.parentElement?.insertBefore(x,w),w.setAttribute("copy-code","")},d=()=>{document.body.classList.toggle("no-copy-code",!l.value),l.value&&document.querySelectorAll(n).forEach(c)};ss(l,()=>mt(d),{flush:"post"}),Ka(w=>{w!=="beforeUnmount"&&d()});const{copy:m}=p1({legacy:!0}),f=new WeakMap,g=async(w,x,C)=>{const B=x.cloneNode(!0);s&&s(B);let h=B.textContent||"";if(G1.test(w.className)&&(h=h.replace(/^ *(\$|>) /gm,"")),await m(h),a<=0)return;C.classList.add("copied"),clearTimeout(f.get(C));const b=setTimeout(()=>{C.classList.remove("copied"),C.blur(),f.delete(C)},a);f.set(C,b)};re("click",w=>{const x=w.target;if(l.value&&x.matches('div[class*="language-"] > button.vp-copy-code-button')){const C=x.parentElement,B=x.nextElementSibling;if(!C||!B)return;g(C,B,x)}},{passive:!0})};var j1={"/":{copy:"复制代码",copied:"已复制"}};const W1=Qe({setup:()=>{Y1({selector:'[vp-content] div[class*="language-"] pre',ignoreSelector:"",inlineSelector:"",locales:j1,duration:2e3,showInMobile:!1})}}),J1=Object.freeze(Object.defineProperty({__proto__:null,default:W1},Symbol.toStringTag,{value:"Module"})),q1=Qe({setup(){re("beforeprint",()=>{document.querySelectorAll("details").forEach(n=>{n.open=!0})},{passive:!0})}}),X1=Object.freeze(Object.defineProperty({__proto__:null,default:q1},Symbol.toStringTag,{value:"Module"}));var Lo={provider:"github",pattern:{commit:":repo/commit/:hash",issue:":repo/issues/:issue",tag:":repo/releases/tag/:tag"},repo:"osuxrq/osuxrq.com"};const No=typeof Lo>"u"?{}:Lo,Z1=(n,e)=>!n||Pa(n)?n:e==="github"?`https://github.com/${n}`:e==="gitee"?`https://gitee.com/${n}`:n,Q1=/#(\d+)/g,n0=(n=!0)=>{const{frontmatter:e,lang:t,page:a}=Vi(),{pattern:i={},provider:r}=No,s=Z1(No.repo,r);return A(()=>{if(e.value.changelog===!1||!Mn(n))return[];const o=new Intl.DateTimeFormat(t.value,{dateStyle:"short"});return(a.value.git?.changelog??[]).map(l=>{const u={date:o.format(l.time),...l};return i.issue&&s&&(u.message=u.message.replace(Q1,(c,d)=>`<a href="${i.issue.replace(":issue",d).replace(":repo",s)}" target="_blank" rel="noopener noreferrer">${c}</a>`)),i.commit&&s&&(u.commitUrl=i.commit.replace(":hash",u.hash).replace(":repo",s)),i.tag&&s&&u.tag&&(u.tagUrl=i.tag.replace(":tag",u.tag).replace(":repo",s)),u})})},Wc=(n=!0)=>{const{frontmatter:e,page:t}=Vi();return A(()=>e.value.contributors===!1||!Mn(n)?[]:t.value.git.contributors??[])};var Oo={"/":{contributors:"贡献者",changelog:"更新日志",timeOn:"于",viewChangelog:"查看所有更新日志",latestUpdateAt:"最近更新"}};const e0=typeof Oo>"u"?{}:Oo,ds=()=>us(e0),Jc=(n=!0)=>{const{lang:e,page:t}=Vi(),a=ds();return A(()=>{if(!Mn(n))return null;const i=t.value.git?.updatedTime??t.value.git?.changelog?.[0].time;if(!i)return null;const r=new Date(i),s=new Intl.DateTimeFormat(e.value,{dateStyle:"short",timeStyle:"short"}).format(i);return{date:r,text:s,iso:r.toISOString(),locale:a.value.latestUpdateAt}})},qc=({level:n=2,text:e,anchor:t})=>en(`h${n||2}`,{id:t,tabindex:"-1"},en("a",{href:`#${t}`,class:"header-anchor"},en("span",e))),t0=({name:n,url:e,avatar:t})=>en(e?"a":"span",{href:e,target:"_blank",rel:"noreferrer",class:"vp-contributor"},[t?en("img",{src:t,alt:"",class:"vp-contributor-avatar"}):null,en("span",{class:"vp-contributor-name"},n)]),a0=vn({name:"GitContributors",props:{title:String,headerLevel:{type:Number,default:2}},setup(n){const e=Wc(),t=ds();return()=>e.value.length?[en(qc,{level:n.headerLevel,anchor:"doc-contributors",text:n.title||t.value.contributors}),en("div",{class:"vp-contributors"},e.value.map(a=>en(t0,a)))]:null}}),i0=vn({name:"GitChangelog",props:{title:String,headerLevel:{type:Number,default:2}},setup(n){const e=n0(),t=ds(),a=Jc(),[i,r]=rs(),s=()=>en("div",{class:"vp-changelog-header",onClick:()=>r()},[en("div",{class:"vp-latest-updated"},[en("span",{class:"vp-changelog-icon"}),en("span",{"data-allow-mismatch":""},a.value.text)]),en("div",[en("span",{class:"vp-changelog-menu-icon"}),en("span",t.value.viewChangelog)])]),o=({item:u})=>en("li",{class:"vp-changelog-item-tag"},en("div",[en("a",{class:"vp-changelog-tag"},en("code",u.tag)),en("span",{class:"vp-changelog-date","data-allow-mismatch":""},[t.value.timeOn," ",en("time",{datetime:new Date(u.time).toISOString()},u.date)])])),l=({item:u})=>en("li",{class:"vp-changelog-item-commit"},[en(u.commitUrl?"a":"span",{class:"vp-changelog-hash",href:u.commitUrl,target:"_blank",rel:"noreferrer"},[en("code",u.hash.slice(0,5))]),en("span",{class:"vp-changelog-divider"},"-"),en("span",{class:"vp-changelog-message",innerHTML:u.message}),en("span",{class:"vp-changelog-date","data-allow-mismatch":""},[t.value.timeOn||"on"," ",en("time",{datetime:new Date(u.time).toISOString()},u.date)])]);return()=>e.value.length?[en(qc,{level:n.headerLevel,anchor:"doc-changelog",text:n.title||t.value.changelog}),en("div",{class:["vp-changelog-wrapper",{active:i.value}]},[en(s),en("ul",{class:"vp-changelog-list"},[e.value.map(u=>u.tag?en(o,{item:u,key:u.tag}):en(l,{item:u,key:u.hash}))])])]:null}}),r0={enhance:({app:n})=>{n.component("GitContributors",a0),n.component("GitChangelog",i0)}},s0=Object.freeze(Object.defineProperty({__proto__:null,default:r0},Symbol.toStringTag,{value:"Module"}));/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var wt=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},Za=function(e){return e.tagName==="IMG"},o0=function(e){return NodeList.prototype.isPrototypeOf(e)},si=function(e){return e&&e.nodeType===1},Do=function(e){var t=e.currentSrc||e.src;return t.substr(-4).toLowerCase()===".svg"},Fo=function(e){try{return Array.isArray(e)?e.filter(Za):o0(e)?[].slice.call(e).filter(Za):si(e)?[e].filter(Za):typeof e=="string"?[].slice.call(document.querySelectorAll(e)).filter(Za):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},l0=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},c0=function(e){var t=e.getBoundingClientRect(),a=t.top,i=t.left,r=t.width,s=t.height,o=e.cloneNode(),l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,u=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return o.removeAttribute("id"),o.style.position="absolute",o.style.top=a+l+"px",o.style.left=i+u+"px",o.style.width=r+"px",o.style.height=s+"px",o.style.transform="",o},Lt=function(e,t){var a=wt({bubbles:!1,cancelable:!1,detail:void 0},t);if(typeof window.CustomEvent=="function")return new CustomEvent(e,a);var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,a.bubbles,a.cancelable,a.detail),i},u0=function n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=window.Promise||function(_){function E(){}_(E,E)},i=function(_){var E=_.target;if(E===M){g();return}h.indexOf(E)!==-1&&w({target:E})},r=function(){if(!(R||!T.original)){var _=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(Y-_)>N.scrollOffset&&setTimeout(g,150)}},s=function(_){var E=_.key||_.keyCode;(E==="Escape"||E==="Esc"||E===27)&&g()},o=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},E=_;if(_.background&&(M.style.background=_.background),_.container&&_.container instanceof Object&&(E.container=wt({},N.container,_.container)),_.template){var I=si(_.template)?_.template:document.querySelector(_.template);E.template=I}return N=wt({},N,E),h.forEach(function(S){S.dispatchEvent(Lt("medium-zoom:update",{detail:{zoom:D}}))}),D},l=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return n(wt({},N,_))},u=function(){for(var _=arguments.length,E=Array(_),I=0;I<_;I++)E[I]=arguments[I];var S=E.reduce(function(y,q){return[].concat(y,Fo(q))},[]);return S.filter(function(y){return h.indexOf(y)===-1}).forEach(function(y){h.push(y),y.classList.add("medium-zoom-image")}),b.forEach(function(y){var q=y.type,W=y.listener,pn=y.options;S.forEach(function(cn){cn.addEventListener(q,W,pn)})}),D},c=function(){for(var _=arguments.length,E=Array(_),I=0;I<_;I++)E[I]=arguments[I];T.zoomed&&g();var S=E.length>0?E.reduce(function(y,q){return[].concat(y,Fo(q))},[]):h;return S.forEach(function(y){y.classList.remove("medium-zoom-image"),y.dispatchEvent(Lt("medium-zoom:detach",{detail:{zoom:D}}))}),h=h.filter(function(y){return S.indexOf(y)===-1}),D},d=function(_,E){var I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return h.forEach(function(S){S.addEventListener("medium-zoom:"+_,E,I)}),b.push({type:"medium-zoom:"+_,listener:E,options:I}),D},m=function(_,E){var I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return h.forEach(function(S){S.removeEventListener("medium-zoom:"+_,E,I)}),b=b.filter(function(S){return!(S.type==="medium-zoom:"+_&&S.listener.toString()===E.toString())}),D},f=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},E=_.target,I=function(){var y={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},q=void 0,W=void 0;if(N.container)if(N.container instanceof Object)y=wt({},y,N.container),q=y.width-y.left-y.right-N.margin*2,W=y.height-y.top-y.bottom-N.margin*2;else{var pn=si(N.container)?N.container:document.querySelector(N.container),cn=pn.getBoundingClientRect(),yn=cn.width,An=cn.height,nt=cn.left,et=cn.top;y=wt({},y,{width:yn,height:An,left:nt,top:et})}q=q||y.width-N.margin*2,W=W||y.height-N.margin*2;var oe=T.zoomedHd||T.original,se=Do(oe)?q:oe.naturalWidth||q,H=Do(oe)?W:oe.naturalHeight||W,Q=oe.getBoundingClientRect(),X=Q.top,an=Q.left,fn=Q.width,En=Q.height,p=Math.min(Math.max(fn,se),q)/fn,v=Math.min(Math.max(En,H),W)/En,k=Math.min(p,v),z=(-an+(q-fn)/2+N.margin+y.left)/k,O=(-X+(W-En)/2+N.margin+y.top)/k,V="scale("+k+") translate3d("+z+"px, "+O+"px, 0)";T.zoomed.style.transform=V,T.zoomedHd&&(T.zoomedHd.style.transform=V)};return new a(function(S){if(E&&h.indexOf(E)===-1){S(D);return}var y=function yn(){R=!1,T.zoomed.removeEventListener("transitionend",yn),T.original.dispatchEvent(Lt("medium-zoom:opened",{detail:{zoom:D}})),S(D)};if(T.zoomed){S(D);return}if(E)T.original=E;else if(h.length>0){var q=h;T.original=q[0]}else{S(D);return}if(T.original.dispatchEvent(Lt("medium-zoom:open",{detail:{zoom:D}})),Y=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,R=!0,T.zoomed=c0(T.original),document.body.appendChild(M),N.template){var W=si(N.template)?N.template:document.querySelector(N.template);T.template=document.createElement("div"),T.template.appendChild(W.content.cloneNode(!0)),document.body.appendChild(T.template)}if(T.original.parentElement&&T.original.parentElement.tagName==="PICTURE"&&T.original.currentSrc&&(T.zoomed.src=T.original.currentSrc),document.body.appendChild(T.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),T.original.classList.add("medium-zoom-image--hidden"),T.zoomed.classList.add("medium-zoom-image--opened"),T.zoomed.addEventListener("click",g),T.zoomed.addEventListener("transitionend",y),T.original.getAttribute("data-zoom-src")){T.zoomedHd=T.zoomed.cloneNode(),T.zoomedHd.removeAttribute("srcset"),T.zoomedHd.removeAttribute("sizes"),T.zoomedHd.removeAttribute("loading"),T.zoomedHd.src=T.zoomed.getAttribute("data-zoom-src"),T.zoomedHd.onerror=function(){clearInterval(pn),console.warn("Unable to reach the zoom image target "+T.zoomedHd.src),T.zoomedHd=null,I()};var pn=setInterval(function(){T.zoomedHd.complete&&(clearInterval(pn),T.zoomedHd.classList.add("medium-zoom-image--opened"),T.zoomedHd.addEventListener("click",g),document.body.appendChild(T.zoomedHd),I())},10)}else if(T.original.hasAttribute("srcset")){T.zoomedHd=T.zoomed.cloneNode(),T.zoomedHd.removeAttribute("sizes"),T.zoomedHd.removeAttribute("loading");var cn=T.zoomedHd.addEventListener("load",function(){T.zoomedHd.removeEventListener("load",cn),T.zoomedHd.classList.add("medium-zoom-image--opened"),T.zoomedHd.addEventListener("click",g),document.body.appendChild(T.zoomedHd),I()})}else I()})},g=function(){return new a(function(_){if(R||!T.original){_(D);return}var E=function I(){T.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(T.zoomed),T.zoomedHd&&document.body.removeChild(T.zoomedHd),document.body.removeChild(M),T.zoomed.classList.remove("medium-zoom-image--opened"),T.template&&document.body.removeChild(T.template),R=!1,T.zoomed.removeEventListener("transitionend",I),T.original.dispatchEvent(Lt("medium-zoom:closed",{detail:{zoom:D}})),T.original=null,T.zoomed=null,T.zoomedHd=null,T.template=null,_(D)};R=!0,document.body.classList.remove("medium-zoom--opened"),T.zoomed.style.transform="",T.zoomedHd&&(T.zoomedHd.style.transform=""),T.template&&(T.template.style.transition="opacity 150ms",T.template.style.opacity=0),T.original.dispatchEvent(Lt("medium-zoom:close",{detail:{zoom:D}})),T.zoomed.addEventListener("transitionend",E)})},w=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},E=_.target;return T.original?g():f({target:E})},x=function(){return N},C=function(){return h},B=function(){return T.original},h=[],b=[],R=!1,Y=0,N=t,T={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(e)==="[object Object]"?N=e:(e||typeof e=="string")&&u(e),N=wt({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},N);var M=l0(N.background);document.addEventListener("click",i),document.addEventListener("keyup",s),document.addEventListener("scroll",r),window.addEventListener("resize",g);var D={open:f,close:g,toggle:w,update:o,clone:l,attach:u,detach:c,on:d,off:m,getOptions:x,getImages:C,getZoomedImage:B};return D};function d0(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}var m0=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";d0(m0);const Xc=Symbol("mediumZoom"),p0=()=>{const n=Qn(Xc);if(!n)throw new Error("useMediumZoom() is called without provider.");return n};var f0={};const h0="[vp-content] > img, [vp-content] :not(a) > img",v0=f0,g0=Qe({enhance({app:n}){const e=u0(v0);e.refresh=(t=h0)=>{e.detach(),e.attach(t)},n.provide(Xc,e)},setup(){const n=p0();Ka(e=>{e!=="beforeUnmount"&&n.refresh()})}}),b0=Object.freeze(Object.defineProperty({__proto__:null,default:g0},Symbol.toStringTag,{value:"Module"}));/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const Po=(n,e)=>{n.classList.add(e)},Ho=(n,e)=>{n.classList.remove(e)},w0=n=>{n?.parentNode?.removeChild(n)},cr=(n,e,t)=>n<e?e:n>t?t:n,Ko=n=>(-1+n)*100,y0=(()=>{const n=[],e=()=>{const t=n.shift();t&&t(e)};return t=>{n.push(t),n.length===1&&e()}})(),x0=n=>n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(e,t)=>t.toUpperCase()),Qa=(()=>{const n=["Webkit","O","Moz","ms"],e={},t=r=>{const{style:s}=document.body;if(r in s)return r;const o=r.charAt(0).toUpperCase()+r.slice(1);let l=n.length;for(;l--;){const u=`${n[l]}${o}`;if(u in s)return u}return r},a=r=>{const s=x0(r);return e[s]??=t(s)},i=(r,s,o)=>{r.style[a(s)]=o};return(r,s)=>{for(const o in s){const l=s[o];Object.hasOwn(s,o)&&R1(l)&&i(r,o,l)}}})(),Ke={minimum:.08,easing:"ease",speed:200,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},Fn={percent:null,isRendered:()=>!!document.getElementById("nprogress"),set:n=>{const{speed:e,easing:t}=Ke,a=Fn.isStarted(),i=cr(n,Ke.minimum,1);Fn.percent=i===1?null:i;const r=Fn.render(!a),s=r.querySelector(Ke.barSelector);return r.offsetWidth,y0(o=>{Qa(s,{transform:`translate3d(${Ko(i)}%,0,0)`,transition:`all ${e}ms ${t}`}),i===1?(Qa(r,{transition:"none",opacity:"1"}),r.offsetWidth,setTimeout(()=>{Qa(r,{transition:`all ${e}ms linear`,opacity:"0"}),setTimeout(()=>{Fn.remove(),o()},e)},e)):setTimeout(()=>{o()},e)}),Fn},isStarted:()=>typeof Fn.percent=="number",start:()=>{Fn.percent||Fn.set(0);const n=()=>{setTimeout(()=>{Fn.percent&&(Fn.trickle(),n())},Ke.trickleSpeed)};return n(),Fn},done:n=>!n&&!Fn.percent?Fn:Fn.increase(.3+.5*Math.random()).set(1),increase:n=>{let{percent:e}=Fn;return e?(e=cr(e+(typeof n=="number"?n:(1-e)*cr(Math.random()*e,.1,.95)),0,.994),Fn.set(e)):Fn.start()},trickle:()=>Fn.increase(Math.random()*Ke.trickleRate),render:n=>{if(Fn.isRendered())return document.getElementById("nprogress");Po(document.documentElement,"nprogress-busy");const e=document.createElement("div");e.id="nprogress",e.innerHTML=Ke.template;const t=e.querySelector(Ke.barSelector),a=document.querySelector(Ke.parent),i=n?"-100":Ko(Fn.percent??0);return Qa(t,{transition:"all 0 linear",transform:`translate3d(${i}%,0,0)`}),a&&(a!==document.body&&Po(a,"nprogress-custom-parent"),a.appendChild(e)),e},remove:()=>{Ho(document.documentElement,"nprogress-busy"),Ho(document.querySelector(Ke.parent),"nprogress-custom-parent"),w0(document.getElementById("nprogress"))}},B0=()=>{Jn(()=>{const n=Ha(),e=new Set;e.add(n.currentRoute.value.path),n.beforeEach(t=>{e.has(t.path)||Fn.start()}),n.afterEach(t=>{e.add(t.path),Fn.done()})})},S0=Qe({setup(){B0()}}),k0=Object.freeze(Object.defineProperty({__proto__:null,default:S0},Symbol.toStringTag,{value:"Module"})),_0=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),A0="VUEPRESS_CODE_TAB_STORE",ni=cs(A0,{}),E0=vn({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},tabId:String},slots:Object,setup(n,{slots:e}){let t=n.data.map(()=>Nl());const a=hn(n.active),i=On([]),r=()=>{n.tabId&&(ni.value[n.tabId]=n.data[a.value].id)},s=(c=a.value)=>{a.value=c<i.value.length-1?c+1:0,i.value[a.value].focus()},o=(c=a.value)=>{a.value=c>0?c-1:i.value.length-1,i.value[a.value].focus()},l=(c,d)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),a.value=d):c.key==="ArrowRight"?(c.preventDefault(),s()):c.key==="ArrowLeft"&&(c.preventDefault(),o()),n.tabId&&(ni.value[n.tabId]=n.data[a.value].id)},u=()=>{if(n.tabId){const c=n.data.findIndex(({id:d})=>ni.value[n.tabId]===d);if(c!==-1)return c}return n.active};return Jn(()=>{a.value=u(),Hn(()=>n.tabId&&ni.value[n.tabId],(c,d)=>{if(n.tabId&&c!==d){const m=n.data.findIndex(({id:f})=>f===c);m!==-1&&(a.value=m)}})}),()=>n.data.length?en("div",{class:"vp-code-tabs"},[en("div",{class:"vp-code-tabs-nav",role:"tablist"},n.data.map(({id:c},d)=>{const m=d===a.value;return en("button",{type:"button",ref:f=>{f&&(i.value[d]=f)},class:["vp-code-tab-nav",{active:m}],role:"tab","aria-controls":t[d],"aria-selected":m,onClick:()=>{a.value=d,r()},onKeydown:f=>{l(f,d)}},e[`title${d}`]({value:c,isActive:m}))})),n.data.map(({id:c},d)=>{const m=d===a.value;return en("div",{class:["vp-code-tab",{active:m}],id:t[d],role:"tabpanel","aria-expanded":m},[en("div",{class:"vp-code-tab-title"},e[`title${d}`]({value:c,isActive:m})),e[`tab${d}`]({value:c,isActive:m})])})]):null}}),I0="VUEPRESS_TAB_STORE",ur=cs(I0,{}),T0=vn({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},tabId:String},slots:Object,setup(n,{slots:e}){let t=n.data.map(()=>Nl());const a=hn(n.active),i=On([]),r=()=>{n.tabId&&(ur.value[n.tabId]=n.data[a.value].id)},s=(c=a.value)=>{a.value=c<i.value.length-1?c+1:0,i.value[a.value].focus()},o=(c=a.value)=>{a.value=c>0?c-1:i.value.length-1,i.value[a.value].focus()},l=(c,d)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),a.value=d):c.key==="ArrowRight"?(c.preventDefault(),s()):c.key==="ArrowLeft"&&(c.preventDefault(),o()),r()},u=()=>{if(n.tabId){const c=n.data.findIndex(({id:d})=>ur.value[n.tabId]===d);if(c!==-1)return c}return n.active};return Jn(()=>{a.value=u(),Hn(()=>n.tabId&&ur.value[n.tabId],(c,d)=>{if(n.tabId&&c!==d){const m=n.data.findIndex(({id:f})=>f===c);m!==-1&&(a.value=m)}})}),()=>n.data.length?en("div",{class:"vp-tabs"},[en("div",{class:"vp-tabs-nav",role:"tablist"},n.data.map(({id:c},d)=>{const m=d===a.value;return en("button",{type:"button",ref:f=>{f&&(i.value[d]=f)},class:["vp-tab-nav",{active:m}],role:"tab","aria-controls":t[d],"aria-selected":m,onClick:()=>{a.value=d,r()},onKeydown:f=>{l(f,d)}},e[`title${d}`]({value:c,isActive:m}))})),n.data.map(({id:c},d)=>{const m=d===a.value;return en("div",{class:["vp-tab",{active:m}],id:t[d],role:"tabpanel","aria-expanded":m},[en("div",{class:"vp-tab-title"},e[`title${d}`]({value:c,isActive:m})),e[`tab${d}`]({value:c,isActive:m})])})]):null}}),C0={enhance:({app:n})=>{n.component("CodeTabs",E0),n.component("Tabs",T0)}},M0=Object.freeze(Object.defineProperty({__proto__:null,default:C0},Symbol.toStringTag,{value:"Module"})),R0=JSON.parse(`{"locales":{"/":{"navbar":["/introduction/how-to-join.md",{"text":"介绍","link":"/introduction/","activeMatch":"^/introduction/(?!how-to-join)"},{"text":"常见问题","children":["/faq/game.md","/faq/join.md","/faq/oversr.md"]},{"text":"管理","children":[{"text":"管理组介绍","link":"/people/","activeMatch":"^/people/$"},"/people/owner.md","/people/administrators.md","/people/alumni.md"]},{"text":"活动","children":[{"text":"活动介绍","link":"/events/README.md","activeMatch":"^/events/$"},"/events/matches/","/events/charts/","/events/collections/"]},{"text":"文档","children":[{"text":"谱面推荐","link":"/article/recommend/README.md","activeMatch":"^/article/recommend/$"},{"text":"出群遗言","link":"/article/lastwords/README.md","activeMatch":"^/article/lastwords/$"}]},{"text":"更多","children":[{"text":"机器人","link":"/misc/bots/"},{"text":"吉祥物","link":"/misc/mascots/"},{"text":"新人群的回忆","children":[{"text":"开启回忆","link":"https://meme.osuxrq.com/"},{"text":"添加回忆","link":"/misc/meme/"}]}]},{"text":"Meta","children":["/meta/contribution-guide","/meta/contributors.md","/meta/events.md"]}],"sidebar":{"/introduction/":["/introduction/README.md","/introduction/how-to-join.md","/introduction/series.md","/introduction/history.md"],"/faq/":["/faq/game.md","/faq/join.md","/faq/oversr.md"],"/events/":[{"text":"新人群群赛","children":["/events/matches/34.md","/events/matches/33.md","/events/matches/32.md","/events/matches/31.md","/events/matches/30.md","/events/matches/29.md","/events/matches/28.md","/events/matches/27.md","/events/matches/26.md","/events/matches/25.md","/events/matches/24.md","/events/matches/23.md","/events/matches/22.md","/events/matches/21.md","/events/matches/20.md","/events/matches/19.md","/events/matches/18.md","/events/matches/17.md","/events/matches/16.md","/events/matches/12.md","/events/matches/8.md","/events/matches/7.md","/events/matches/2.md"]},{"text":"进阶群群赛","children":["/events/matches/o2.md","/events/matches/o1.5.md","/events/matches/o1.md","/events/matches/a3.md","/events/matches/a2.md","/events/matches/a1.md"]},{"text":"其他群赛","children":["/events/matches/u.md","/events/matches/y4.md","/events/matches/y3.md","/events/matches/y2.md","/events/matches/y1.md"]},{"text":"月赛","children":["/events/charts/h2312.md","/events/charts/h2311.md","/events/charts/h2310.md","/events/charts/h2309.md","/events/charts/h2308.md","/events/charts/h2307.md","/events/charts/h2306.md","/events/charts/h2305.md","/events/charts/h2304.md","/events/charts/h2303.md"]},{"text":"悬赏","children":["/events/rewards/README.md"]},{"text":"集锦","children":["/events/collections/README.md"]}],"/article/recommend/":[{"text":"谱面推荐","children":["/article/recommend/-Yuki_Noa-.md","/article/recommend/atahana.md","/article/recommend/BenZn.md","/article/recommend/hiiragi_kagami.md","/article/recommend/jack_wang_.md","/article/recommend/Muziyami.md","/article/recommend/sayori_yui.md"]}],"/article/lastwords/":[{"text":"出群遗言","children":["/article/lastwords/users/0.md","/article/lastwords/users/802382.md","/article/lastwords/users/5162173.md","/article/lastwords/users/13017923.md","/article/lastwords/users/13932883.md","/article/lastwords/users/14353421.md","/article/lastwords/users/15846580.md","/article/lastwords/users/16027612.md","/article/lastwords/users/16572973.md","/article/lastwords/users/17610368.md","/article/lastwords/users/21943424.md","/article/lastwords/users/27552230.md","/article/lastwords/users/28446169.md","/article/lastwords/users/28494479.md","/article/lastwords/users/30125315.md","/article/lastwords/users/30320667.md","/article/lastwords/users/31485633.md","/article/lastwords/users/32303406.md","/article/lastwords/users/32452774.md","/article/lastwords/users/32975448.md","/article/lastwords/users/33319591.md","/article/lastwords/users/33463029.md","/article/lastwords/users/33888415.md","/article/lastwords/users/33918873.md","/article/lastwords/users/34230148.md","/article/lastwords/users/34346018.md","/article/lastwords/users/34998676.md","/article/lastwords/users/35938964.md","/article/lastwords/users/36062235.md","/article/lastwords/users/36155893.md","/article/lastwords/users/36409902.md","/article/lastwords/users/36846545.md","/article/lastwords/users/37449856.md","/article/lastwords/users/38021034.md"]}],"/meta/":["/meta/contribution-guide.md","/meta/contributors.md","/meta/events.md"],"/history/":["/history/README.md"],"/people/":["/people/README.md","/people/owner.md","/people/administrators.md","/people/alumni.md"]},"logo":"/images/hero.png","editLink":true,"editLinkText":"在 GitHub 上编辑此页","lastUpdatedText":"上次更新","contributorsText":"贡献者","tip":"提示","warning":"注意","danger":"警告","notFound":["这里什么都没有。","我们怎么到这儿来了？","这是一个四〇四页面。","我们好像进入了错误的链接。"],"backToHome":"返回首页","openInNewWindow":"在新窗口打开","selectLanguageName":"English"}},"repo":"osuxrq/osuxrq.com","lastUpdated":true,"contributors":true,"docsRepo":"osuxrq/osuxrq.com","docsBranch":"main","colorMode":"auto","colorModeSwitch":true,"navbar":[],"logo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebar":"heading","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`),L0=hn(R0),Zc=()=>L0,Qc=Symbol(""),N0=()=>{const n=Qn(Qc);if(!n)throw new Error("useThemeLocaleData() is called without provider.");return n},O0=(n,e)=>{const{locales:t,...a}=n;return{...a,...t?.[e]}},D0=Qe({enhance({app:n}){const e=Zc(),t=n._context.provides[Xr],a=A(()=>O0(e.value,t.routeLocale.value));n.provide(Qc,a),Object.defineProperties(n.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return a.value}}})}}),F0=Object.freeze(Object.defineProperty({__proto__:null,default:D0},Symbol.toStringTag,{value:"Module"})),jn=()=>({...Vi(),theme:Zc(),themeLocale:N0()}),P0=n=>{const e=(t=n.value)=>{const a=window.document.documentElement;a.dataset.theme=t?"dark":"light"};Jn(()=>{ss(n,e)}),Zt(()=>{e()})},ms=()=>{const n=Qn(jc);if(!n)throw new Error("useDarkMode() is called without provider.");return n},H0=()=>{const{themeLocale:n}=jn(),e=g1(),t=cs("vuepress-color-scheme",n.value.colorMode),a=A({get(){return n.value.colorModeSwitch?t.value==="auto"?e.value:t.value==="dark":n.value.colorMode==="dark"},set(i){i===e.value?t.value="auto":t.value=i?"dark":"light"}});lt(jc,a),P0(a)},nu=Symbol("headers"),K0=()=>{const n=Pc(nu);if(!n)throw new Error("useHeaders() is called without provider.");return n},V0=()=>{const{frontmatter:n,themeLocale:e}=jn(),t=hn([]),a=A(()=>n.value.sidebarDepth??e.value.sidebarDepth??2),i=()=>{if(a.value<=0){t.value=[];return}t.value=F1({levels:[2,a.value+1],ignore:[".vp-badge"]})};qf(nu,t),Ka(r=>{r==="beforeUnmount"?t.value=[]:i()})};let dr=null,mr=null;const z0={wait:()=>dr,pending:()=>{dr=new Promise(n=>{mr=n})},resolve:()=>{mr?.(),dr=null,mr=null}},eu=()=>z0,Xt=(n,e)=>{const{notFound:t,meta:a,path:i}=Aa(n,e);return t?{text:i,link:i}:{text:a.title||i,link:i}},Ut=(n="",e="")=>$c(e)||Fa(e)?e:`${gp(n)}${e}`,$0=n=>({text:n.title,link:n.link,children:ps(n.children)}),ps=n=>n?n.map(e=>$0(e)):[],tu=(n,e)=>[{text:n.title,children:ps(e)}],au=(n,e,t,a="")=>{const i=(r,s)=>{const o=_e(r)?Xt(Ut(s,r)):_e(r.link)?{...r,link:Uc(r.link)?Xt(Ut(s,r.link)).link:r.link}:r;if("children"in o)return{...o,children:o.children.map(l=>i(l,Ut(s,o.prefix)))};if(o.link===t){const l=e[0]?.level===1?e[0].children:e;return{...o,children:ps(l)}}return o};return n.map(r=>i(r,a))},U0=(n,e,t,a)=>{const i=L1(n).sort((r,s)=>s.length-r.length);for(const r of i)if(zc(decodeURI(a),r)){const s=n[r];return s?s==="heading"?tu(e,t):au(s,t,a,r):[]}return console.warn(`${decodeURI(a)} is missing sidebar config.`),[]},iu=Symbol("sidebarItems"),fs=()=>{const n=Qn(iu);if(!n)throw new Error("useSidebarItems() is called without provider.");return n},G0=(n,e,t,a,i)=>n===!1?[]:n==="heading"?tu(e,i):Array.isArray(n)?au(n,i,t,a):Wr(n)?U0(n,e,i,t):[],Y0=()=>{const{frontmatter:n,page:e,routeLocale:t,themeLocale:a}=jn(),i=K0(),r=Nc(),s=A(()=>!n.value.home&&(n.value.sidebar??a.value.sidebar??"heading")),o=A(()=>G0(s.value,e.value,r.value,t.value,i.value));lt(iu,o)},j0=vn({__name:"Badge",props:{type:{default:"tip"},text:{default:""},vertical:{default:""}},setup(n){return(e,t)=>(F(),U("span",{class:zn(["vp-badge",n.type]),style:Cn(n.vertical?{verticalAlign:n.vertical}:"")},[_n(e.$slots,"default",{},()=>[ke(tn(n.text),1)])],6))}}),W0=vn({__name:"VPFadeSlideYTransition",emits:["beforeEnter","beforeLeave"],setup(n){return(e,t)=>(F(),Dn(Qt,{name:"fade-in-down",mode:"out-in",onBeforeEnter:t[0]||(t[0]=a=>e.$emit("beforeEnter")),onBeforeLeave:t[1]||(t[1]=a=>e.$emit("beforeLeave"))},{default:xn(()=>[_n(e.$slots,"default")]),_:3}))}}),J0={key:0,class:"vp-features"},q0=vn({__name:"VPHomeFeatures",setup(n){const{frontmatter:e}=jn(),t=A(()=>e.value.features??[]);return(a,i)=>t.value.length?(F(),U("div",J0,[(F(!0),U(bn,null,pe(t.value,r=>(F(),U("div",{key:r.title,class:"vp-feature"},[L("h2",null,tn(r.title),1),L("p",null,tn(r.details),1)]))),128))])):mn("",!0)}}),X0=["innerHTML"],Z0=["textContent"],Q0=vn({__name:"VPHomeFooter",setup(n){const e=Oc(),t=A(()=>e.value.footer),a=A(()=>e.value.footerHtml);return(i,r)=>t.value?(F(),U(bn,{key:0},[a.value?(F(),U("div",{key:0,class:"vp-footer","vp-footer":"",innerHTML:t.value},null,8,X0)):(F(),U("div",{key:1,class:"vp-footer","vp-footer":"",textContent:tn(t.value)},null,8,Z0))],64)):mn("",!0)}}),Je=vn({__name:"VPAutoLink",props:{config:{}},setup(n){return(e,t)=>(F(),Dn(Z(Hf),{config:n.config},Pd({before:xn(()=>[_n(e.$slots,"before",Yi(ri(n.config)))]),after:xn(()=>[_n(e.$slots,"after",Yi(ri(n.config)))]),_:2},[e.$slots.default?{name:"default",fn:xn(()=>[_n(e.$slots,"default",Yi(ri(n.config)))]),key:"0"}:void 0]),1032,["config"]))}}),nh={class:"vp-hero"},eh={key:0,id:"main-title"},th={key:1,class:"vp-hero-description"},ah={key:2,class:"vp-hero-actions"},ih=vn({__name:"VPHomeHero",setup(n){const{frontmatter:e,siteLocale:t}=jn(),a=ms(),i=A(()=>e.value.heroText===null?null:e.value.heroText||t.value.title||"Hello"),r=A(()=>e.value.tagline===null?null:e.value.tagline||t.value.description||"Welcome to your VuePress site"),s=A(()=>a.value&&e.value.heroImageDark!==void 0?e.value.heroImageDark:e.value.heroImage),o=A(()=>e.value.heroAlt||i.value||"hero"),l=A(()=>e.value.heroHeight??280),u=A(()=>Array.isArray(e.value.actions)?e.value.actions.map(({type:d="primary",...m})=>({type:d,...m})):[]),c=()=>{if(!s.value)return null;const d=en("img",{class:"vp-hero-image",src:ns(s.value),alt:o.value,height:l.value});return e.value.heroImageDark===void 0?d:en(Zr,()=>d)};return(d,m)=>(F(),U("header",nh,[sn(c),i.value?(F(),U("h1",eh,tn(i.value),1)):mn("",!0),r.value?(F(),U("p",th,tn(r.value),1)):mn("",!0),u.value.length?(F(),U("p",ah,[(F(!0),U(bn,null,pe(u.value,f=>(F(),Dn(Je,{key:f.text,class:zn(["vp-hero-action-button",[f.type]]),config:f},null,8,["class","config"]))),128))])):mn("",!0)]))}}),rh={class:"vp-home"},sh={"vp-content":""},oh=vn({__name:"VPHome",setup(n){return(e,t)=>(F(),U("main",rh,[sn(ih),sn(q0),L("div",sh,[sn(Z(Qr))]),sn(Q0)]))}}),lh=["aria-hidden"],ch=vn({__name:"VPNavbarBrand",setup(n){const{routeLocale:e,siteLocale:t,themeLocale:a}=jn(),i=ms(),r=A(()=>a.value.home||e.value),s=A(()=>t.value.title),o=A(()=>i.value&&a.value.logoDark!==void 0?a.value.logoDark:a.value.logo),l=A(()=>a.value.logoAlt??s.value),u=A(()=>s.value.toLocaleUpperCase().trim()===l.value.toLocaleUpperCase().trim()),c=()=>{if(!o.value)return null;const d=en("img",{class:"vp-site-logo",src:ns(o.value),alt:l.value});return a.value.logoDark===void 0?d:en(Zr,()=>d)};return(d,m)=>(F(),Dn(Z(zi),{to:r.value},{default:xn(()=>[sn(c),s.value?(F(),U("span",{key:0,class:zn(["vp-site-name",{"vp-hide-mobile":o.value}]),"aria-hidden":u.value},tn(s.value),11,lh)):mn("",!0)]),_:1},8,["to"]))}}),uh=["aria-label"],dh={class:"title"},mh=["aria-label"],ph={class:"title"},fh={class:"vp-navbar-dropdown"},hh={class:"vp-navbar-dropdown-subtitle"},vh={key:1},gh={class:"vp-navbar-dropdown-subitem-wrapper"},bh=vn({__name:"VPNavbarDropdown",props:{config:{}},setup(n){const[e,t]=rs(),a=A(()=>n.config.ariaLabel||n.config.text),i=(s,o)=>o[o.length-1]===s,r=s=>{s.detail===0?t():t(!1)};return Ka(()=>{t(!1)}),(s,o)=>(F(),U("div",{class:zn(["vp-navbar-dropdown-wrapper",{open:Z(e)}])},[L("button",{class:"vp-navbar-dropdown-title",type:"button","aria-label":a.value,onClick:r},[L("span",dh,tn(n.config.text),1),o[1]||(o[1]=L("span",{class:"arrow down"},null,-1))],8,uh),L("button",{class:"vp-navbar-dropdown-title-mobile",type:"button","aria-label":a.value,onClick:o[0]||(o[0]=()=>Z(t)())},[L("span",ph,tn(n.config.text),1),L("span",{class:zn(["arrow",Z(e)?"down":"right"])},null,2)],8,mh),sn(Z(P1),null,{default:xn(()=>[wa(L("ul",fh,[(F(!0),U(bn,null,pe(n.config.children,l=>(F(),U("li",{key:l.text,class:"vp-navbar-dropdown-item"},["children"in l?(F(),U(bn,{key:0},[L("h4",hh,[l.link?(F(),Dn(Je,{key:0,config:l,onFocusout:()=>{i(l,n.config.children)&&l.children.length===0&&(e.value=!1)}},null,8,["config","onFocusout"])):(F(),U("span",vh,tn(l.text),1))]),L("ul",gh,[(F(!0),U(bn,null,pe(l.children,u=>(F(),U("li",{key:u.link,class:"vp-navbar-dropdown-subitem"},[sn(Je,{config:u,onFocusout:()=>{i(u,l.children)&&i(l,n.config.children)&&Z(t)(!1)}},null,8,["config","onFocusout"])]))),128))])],64)):(F(),Dn(Je,{key:1,config:l,onFocusout:()=>{i(l,n.config.children)&&Z(t)(!1)}},null,8,["config","onFocusout"]))]))),128))],512),[[ka,Z(e)]])]),_:1})],2))}}),ru=(n,e="")=>_e(n)?Xt(Ut(e,n)):"children"in n?{...n,children:n.children.map(t=>ru(t,Ut(e,n.prefix)))}:{...n,link:Uc(n.link)?Xt(Ut(e,n.link)).link:n.link},wh=()=>{const{themeLocale:n}=jn();return A(()=>(n.value.navbar||[]).map(e=>ru(e)))},su=n=>!Pa(n)||n.includes("github.com")?"GitHub":n.includes("bitbucket.org")?"Bitbucket":n.includes("gitlab.com")?"GitLab":n.includes("gitee.com")?"Gitee":null,yh=()=>{const{themeLocale:n}=jn(),e=A(()=>n.value.repo),t=A(()=>e.value?su(e.value):null),a=A(()=>e.value&&!Pa(e.value)?`https://github.com/${e.value}`:e.value),i=A(()=>a.value?n.value.repoLabel?n.value.repoLabel:t.value===null?"Source":t.value:null);return A(()=>!a.value||!i.value?[]:[{text:i.value,link:a.value}])},xh=()=>{const n=na(),e=K1(),{routeLocale:t,site:a,siteLocale:i,theme:r,themeLocale:s}=jn(),o=os();return A(()=>{const l=Object.keys(a.value.locales);if(l.length<2)return[];const u=n.path,c=n.fullPath;return[{text:`${s.value.selectLanguageText}`,ariaLabel:`${s.value.selectLanguageAriaLabel??s.value.selectLanguageText}`,children:l.map(m=>{const f=a.value.locales?.[m]??{},g=r.value.locales?.[m]??{},w=`${f.lang}`,x=g.selectLanguageName??w;if(w===i.value.lang)return{text:x,activeMatch:".",link:o.value?c:u};const C=u.replace(t.value,m);return{text:x,link:e.value.some(B=>B===C)?o.value?c.replace(u,C):C:g.home??m}})}]})},Bh="719px",Sh={mobile:Bh};var Ea;(function(n){n.Mobile="mobile"})(Ea||(Ea={}));const kh={[Ea.Mobile]:Number.parseInt(Sh.mobile.replace("px",""),10)},ou=(n,e)=>{const t=kh[n];Number.isInteger(t)&&(re("orientationchange",()=>{e(t)}),re("resize",()=>{e(t)}),Jn(()=>{e(t)}))},_h=["aria-label"],lu=vn({__name:"VPNavbarItems",setup(n){const{themeLocale:e}=jn(),t=wh(),a=xh(),i=yh(),r=hn(!1),s=A(()=>e.value.navbarLabel??"site navigation"),o=A(()=>[...t.value,...a.value,...i.value]);return ou(Ea.Mobile,l=>{r.value=window.innerWidth<l}),(l,u)=>o.value.length?(F(),U("nav",{key:0,class:"vp-navbar-items","aria-label":s.value},[(F(!0),U(bn,null,pe(o.value,c=>(F(),U("div",{key:c.text,class:"vp-navbar-item"},["children"in c?(F(),Dn(bh,{key:0,class:zn({mobile:r.value}),config:c},null,8,["class","config"])):(F(),Dn(Je,{key:1,config:c},null,8,["config"]))]))),128))],8,_h)):mn("",!0)}}),xe=(n,e)=>{const t=n.__vccOpts||n;for(const[a,i]of e)t[a]=i;return t},Ah={},Eh={class:"dark-icon",viewBox:"0 0 32 32"};function Ih(n,e){return F(),U("svg",Eh,[...e[0]||(e[0]=[L("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)])])}const Th=xe(Ah,[["render",Ih]]),Ch={},Mh={class:"light-icon",viewBox:"0 0 32 32"};function Rh(n,e){return F(),U("svg",Mh,[...e[0]||(e[0]=[cm('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)])])}const Lh=xe(Ch,[["render",Rh]]),Nh=["title"],Oh=vn({__name:"VPToggleColorModeButton",setup(n){const{themeLocale:e}=jn(),t=ms(),a=()=>{t.value=!t.value};return(i,r)=>(F(),U("button",{type:"button",class:"vp-toggle-color-mode-button",title:Z(e).toggleColorMode,onClick:a},[wa(sn(Lh,null,null,512),[[ka,!Z(t)]]),wa(sn(Th,null,null,512),[[ka,Z(t)]])],8,Nh))}}),Dh=["title"],Fh=vn({__name:"VPToggleSidebarButton",emits:["toggle"],setup(n){const{themeLocale:e}=jn();return(t,a)=>(F(),U("div",{class:"vp-toggle-sidebar-button",title:Z(e).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:a[0]||(a[0]=i=>t.$emit("toggle"))},[...a[1]||(a[1]=[L("div",{class:"icon","aria-hidden":"true"},[L("span"),L("span"),L("span")],-1)])],8,Dh))}}),Ph={ref:"navbar-brand"},Hh=vn({__name:"VPNavbar",emits:["toggleSidebar"],setup(n){const e=Yc("SearchBox")?Oa("SearchBox"):()=>null,{themeLocale:t}=jn(),a=Is("navbar"),i=Is("navbar-brand"),r=hn(0),s=A(()=>r.value?{maxWidth:`${r.value}px`}:{}),o=(l,u)=>{const c=l?.ownerDocument.defaultView?.getComputedStyle(l,null)[u],d=Number.parseInt(c,10);return Number.isNaN(d)?0:d};return ou(Ea.Mobile,l=>{const u=o(a.value,"paddingLeft")+o(a.value,"paddingRight");window.innerWidth<l?r.value=0:r.value=a.value.offsetWidth-u-(i.value?.offsetWidth??0)}),(l,u)=>(F(),U("header",{ref_key:"navbar",ref:a,class:"vp-navbar","vp-navbar":""},[sn(Fh,{onToggle:u[0]||(u[0]=c=>l.$emit("toggleSidebar"))}),L("span",Ph,[sn(ch)],512),L("div",{class:"vp-navbar-items-wrapper",style:Cn(s.value)},[_n(l.$slots,"before"),sn(lu,{class:"vp-hide-mobile"}),_n(l.$slots,"after"),Z(t).colorModeSwitch?(F(),Dn(Oh,{key:0})):mn("",!0),sn(Z(e))],4)],512))}}),Kh={},Vh={class:"edit-icon",viewBox:"0 0 1024 1024"};function zh(n,e){return F(),U("svg",Vh,[...e[0]||(e[0]=[L("g",{fill:"currentColor"},[L("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),L("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})],-1)])])}const $h=xe(Kh,[["render",zh]]),Uh={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Gh=({docsRepo:n,editLinkPattern:e})=>{if(e)return e;const t=su(n);return t!==null?Uh[t]:null},Yh=({docsRepo:n,docsBranch:e,docsDir:t,filePathRelative:a,editLinkPattern:i})=>{if(!a)return null;const r=Gh({docsRepo:n,editLinkPattern:i});return r?r.replace(/:repo/,Pa(n)?n:`https://github.com/${n}`).replace(/:branch/,e).replace(/:path/,yc(`${wc(t)}/${a}`)):null},jh=()=>{const{frontmatter:n,page:e,themeLocale:t}=jn();return A(()=>{if(!(n.value.editLink??t.value.editLink??!0))return null;const{repo:i,docsRepo:r=i,docsBranch:s="main",docsDir:o="",editLinkText:l}=t.value;if(!r)return null;const u=Yh({docsRepo:r,docsBranch:s,docsDir:o,filePathRelative:e.value.filePathRelative,editLinkPattern:n.value.editLinkPattern??t.value.editLinkPattern});return u?{text:l??"Edit this page",link:u}:null})},Wh={class:"vp-page-meta"},Jh={key:0,class:"vp-meta-item edit-link"},qh={class:"vp-meta-item git-info"},Xh={key:0,class:"vp-meta-item last-updated"},Zh={class:"meta-item-label"},Qh=["datetime"],nv={key:1,class:"vp-meta-item contributors"},ev={class:"meta-item-label"},tv={class:"meta-item-info"},av=["title"],iv=vn({__name:"VPPageMeta",setup(n){const{frontmatter:e,themeLocale:t}=jn(),a=Wc(()=>e.value.contributors??t.value.contributors??!0),i=jh(),r=Jc(()=>e.value.lastUpdated??t.value.lastUpdated??!0);return(s,o)=>(F(),U("footer",Wh,[Z(i)?(F(),U("div",Jh,[sn(Je,{class:"label",config:Z(i)},{before:xn(()=>[sn($h)]),_:1},8,["config"])])):mn("",!0),L("div",qh,[Z(r)?(F(),U("div",Xh,[L("span",Zh,tn(Z(t).lastUpdatedText??Z(r).locale)+": ",1),L("time",{class:"meta-item-info",datetime:Z(r).iso,"data-allow-mismatch":""},tn(Z(r).text),9,Qh)])):mn("",!0),Z(a).length?(F(),U("div",nv,[L("span",ev,tn(Z(t).contributorsText)+": ",1),L("span",tv,[(F(!0),U(bn,null,pe(Z(a),(l,u)=>(F(),U(bn,{key:u},[L("span",{class:"contributor",title:`email: ${l.email}`},tn(l.name),9,av),u!==Z(a).length-1?(F(),U(bn,{key:0},[ke(", ")],64)):mn("",!0)],64))),128))])])):mn("",!0)])]))}}),rv=()=>{const n=Ha(),e=na();return t=>{t&&($c(t)?e.fullPath!==t&&n.push(t):Fa(t)?window.open(t):n.push(encodeURI(t)))}},Vo=(n,e)=>n===!1?!1:_e(n)?Xt(n,e):Wr(n)?{...n,link:Xt(n.link,e).link}:null,Rr=(n,e,t)=>{const a=n.findIndex(r=>r.link===e);if(a!==-1){const r=n[a+t];return r?r.link?r:"prefix"in r&&!Aa(r.prefix).notFound?{...r,link:r.prefix}:null:null}for(const r of n)if("children"in r){const s=Rr(r.children,e,t);if(s)return s}const i=n.findIndex(r=>"prefix"in r&&r.prefix===e);if(i!==-1){const r=n[i+t];return r?r.link?r:"prefix"in r&&!Aa(r.prefix).notFound?{...r,link:r.prefix}:null:null}return null},sv=()=>{const{frontmatter:n,themeLocale:e}=jn(),t=fs(),a=Nc(),i=A(()=>{const s=Vo(n.value.prev,a.value);return s===!1?null:s??(e.value.prev===!1?null:Rr(t.value,a.value,-1))}),r=A(()=>{const s=Vo(n.value.next,a.value);return s===!1?null:s??(e.value.next===!1?null:Rr(t.value,a.value,1))});return{prevLink:i,nextLink:r}},ov=["aria-label"],lv={class:"hint"},cv={class:"link"},uv={class:"external-link"},dv={class:"hint"},mv={class:"link"},pv={class:"external-link"},fv=vn({__name:"VPPageNav",setup(n){const{themeLocale:e}=jn(),t=rv(),{prevLink:a,nextLink:i}=sv(),r=A(()=>e.value.pageNavbarLabel??"page navigation");return re("keydown",s=>{s.altKey&&(s.key==="ArrowRight"?i.value&&(t(i.value.link),s.preventDefault()):s.key==="ArrowLeft"&&a.value&&(t(a.value.link),s.preventDefault()))}),(s,o)=>Z(a)||Z(i)?(F(),U("nav",{key:0,class:"vp-page-nav","aria-label":r.value},[Z(a)?(F(),Dn(Je,{key:0,class:"prev",config:Z(a)},{default:xn(()=>[L("div",lv,[o[0]||(o[0]=L("span",{class:"arrow left"},null,-1)),ke(" "+tn(Z(e).prev??"Prev"),1)]),L("div",cv,[L("span",uv,tn(Z(a).text),1)])]),_:1},8,["config"])):mn("",!0),Z(i)?(F(),Dn(Je,{key:1,class:"next",config:Z(i)},{default:xn(()=>[L("div",dv,[ke(tn(Z(e).next??"Next")+" ",1),o[1]||(o[1]=L("span",{class:"arrow right"},null,-1))]),L("div",mv,[L("span",pv,tn(Z(i).text),1)])]),_:1},8,["config"])):mn("",!0)],8,ov)):mn("",!0)}}),hv={class:"vp-page"},vv={"vp-content":""},gv=vn({__name:"VPPage",setup(n){return(e,t)=>(F(),U("main",hv,[_n(e.$slots,"top"),L("div",vv,[_n(e.$slots,"content-top"),sn(Z(Qr),{id:"content"}),_n(e.$slots,"content-bottom")]),sn(iv),sn(fv),_n(e.$slots,"bottom")]))}}),bv=vn({__name:"VPDropdownTransition",setup(n){const e=a=>{a.style.height=`${a.scrollHeight}px`},t=a=>{a.style.height=""};return(a,i)=>(F(),Dn(Qt,{name:"vp-dropdown",onEnter:e,onAfterEnter:t,onBeforeLeave:e},{default:xn(()=>[_n(a.$slots,"default")]),_:3}))}}),zo=n=>decodeURI(n).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),wv=(n,e)=>{if(e.hash===n)return!0;const t=zo(e.path),a=zo(n);return t===a},cu=(n,e)=>n.link&&wv(n.link,e)?!0:"children"in n?n.children.some(t=>cu(t,e)):!1,yv={class:"vp-sidebar-children"},xv=vn({__name:"VPSidebarItem",props:{item:{},depth:{default:0}},setup(n){const e=na(),t=Ha(),a=A(()=>n.item.collapsible),i=A(()=>cu(n.item,e)),r=A(()=>({"vp-sidebar-item":!0,"vp-sidebar-heading":n.depth===0,active:i.value,collapsible:a.value})),s=A(()=>a.value?i.value:!0),[o,l]=rs(s.value),u=d=>{a.value&&(d.preventDefault(),l())},c=t.afterEach(()=>{mt(()=>{o.value=s.value})});return Di(()=>{c()}),(d,m)=>{const f=Oa("VPSidebarItem",!0);return F(),U("li",null,[n.item.link?(F(),Dn(Je,{key:0,class:zn(r.value),config:n.item},{after:xn(()=>[a.value?(F(),U("span",{key:0,class:zn(["arrow",Z(o)?"down":"right"])},null,2)):mn("",!0)]),_:1},8,["class","config"])):(F(),U("p",{key:1,tabindex:"0",class:zn(r.value),onClick:u,onKeydown:ep(u,["enter"])},[ke(tn(n.item.text)+" ",1),a.value?(F(),U("span",{key:0,class:zn(["arrow",Z(o)?"down":"right"])},null,2)):mn("",!0)],34)),"children"in n.item&&n.item.children.length?(F(),Dn(bv,{key:2},{default:xn(()=>[wa(L("ul",yv,[(F(!0),U(bn,null,pe(n.item.children,g=>(F(),Dn(f,{key:`${n.depth}${g.text}${g.link}`,item:g,depth:n.depth+1},null,8,["item","depth"]))),128))],512),[[ka,Z(o)]])]),_:1})):mn("",!0)])}}}),Bv={key:0,class:"vp-sidebar-items"},Sv=vn({__name:"VPSidebarItems",setup(n){const e=na(),t=fs();return Jn(()=>{Hn(()=>e.hash,a=>{const i=document.querySelector(".vp-sidebar");if(!i)return;const r=document.querySelector(`.vp-sidebar .vp-sidebar-item.auto-link[href="${e.path}${a}"]`);if(!r)return;const{top:s,height:o}=i.getBoundingClientRect(),{top:l,height:u}=r.getBoundingClientRect();l<s?r.scrollIntoView(!0):l+u>s+o&&r.scrollIntoView(!1)})}),(a,i)=>Z(t).length?(F(),U("ul",Bv,[(F(!0),U(bn,null,pe(Z(t),r=>(F(),Dn(xv,{key:`${r.text}${r.link}`,item:r},null,8,["item"]))),128))])):mn("",!0)}}),kv={class:"vp-sidebar","vp-sidebar":""},_v=vn({__name:"VPSidebar",setup(n){return(e,t)=>(F(),U("aside",kv,[sn(lu),_n(e.$slots,"top"),sn(Sv),_n(e.$slots,"bottom")]))}}),Av=vn({__name:"Layout",setup(n){const{frontmatter:e,page:t,themeLocale:a}=jn(),i=A(()=>e.value.navbar??a.value.navbar??!0),r=fs(),s=hn(!1),o=x=>{s.value=typeof x=="boolean"?x:!s.value},l={x:0,y:0},u=x=>{l.x=x.changedTouches[0].clientX,l.y=x.changedTouches[0].clientY},c=x=>{const C=x.changedTouches[0].clientX-l.x,B=x.changedTouches[0].clientY-l.y;Math.abs(C)>Math.abs(B)&&Math.abs(C)>40&&(C>0&&l.x<=80?o(!0):o(!1))},d=A(()=>e.value.externalLinkIcon??a.value.externalLinkIcon??!0),m=A(()=>[{"no-navbar":!i.value,"no-sidebar":!r.value.length,"sidebar-open":s.value,"external-link-icon":d.value},e.value.pageClass]);Ka(()=>{o(!1)});const f=eu(),g=f.resolve,w=f.pending;return(x,C)=>(F(),U("div",{class:zn(["vp-theme-container",m.value]),"vp-container":"",onTouchstart:u,onTouchend:c},[_n(x.$slots,"navbar",{},()=>[i.value?(F(),Dn(Hh,{key:0,onToggleSidebar:o},{before:xn(()=>[_n(x.$slots,"navbar-before")]),after:xn(()=>[_n(x.$slots,"navbar-after")]),_:3})):mn("",!0)]),L("div",{class:"vp-sidebar-mask",onClick:C[0]||(C[0]=B=>o(!1))}),_n(x.$slots,"sidebar",{},()=>[sn(_v,null,{top:xn(()=>[_n(x.$slots,"sidebar-top")]),bottom:xn(()=>[_n(x.$slots,"sidebar-bottom")]),_:3})]),_n(x.$slots,"page",{},()=>[sn(W0,{onBeforeEnter:Z(g),onBeforeLeave:Z(w)},{default:xn(()=>[Z(e).home?(F(),Dn(oh,{key:0})):(F(),Dn(gv,{key:Z(t).path},{top:xn(()=>[_n(x.$slots,"page-top")]),"content-top":xn(()=>[_n(x.$slots,"page-content-top")]),"content-bottom":xn(()=>[_n(x.$slots,"page-content-bottom")]),bottom:xn(()=>[_n(x.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"])])],34))}}),Ev={class:"vp-theme-container","vp-container":""},Iv={class:"page"},Tv={"vp-content":""},Cv=vn({__name:"NotFound",setup(n){const{routeLocale:e,theme:t,themeLocale:a}=jn(),i=os(),r=A(()=>i.value?e.value:"/"),s=A(()=>{if(i.value)return a.value;const{locales:d,...m}=t.value;return{...m,...d?.["/"]}}),o=A(()=>s.value.home??r.value),l=A(()=>s.value.backToHome??"Back to home"),u=A(()=>s.value.notFound??["Not Found"]),c=A(()=>i.value?u.value[Math.floor(Math.random()*u.value.length)]:u.value[0]);return(d,m)=>(F(),U("div",Ev,[L("main",Iv,[L("div",Tv,[m[0]||(m[0]=L("h1",null,"404",-1)),L("blockquote",null,tn(c.value),1),sn(Z(zi),{to:o.value},{default:xn(()=>[ke(tn(l.value),1)]),_:1},8,["to"])])])]))}}),Mv=xe(Cv,[["__scopeId","data-v-91f12681"]]),Rv=Qe({enhance({app:n,router:e}){Yc("Badge")||n.component("Badge",j0);const t=e.options.scrollBehavior;e.options.scrollBehavior=async(...a)=>(await eu().wait(),t(...a))},setup(){H0(),V0(),Y0()},layouts:{Layout:Av,NotFound:Mv}}),Lv=Object.freeze(Object.defineProperty({__proto__:null,default:Rv},Symbol.toStringTag,{value:"Module"})),Nv=()=>{if(typeof document>"u")return;const n=(i,r)=>{if(i.naturalWidth>0&&r>0){const s=i.naturalWidth/r;i.setAttribute("width",s.toString())}},e=()=>{document.querySelectorAll("main img").forEach(r=>{try{const s=decodeURIComponent(new URL(r.src).pathname),o=/-((?=\d|\.\d)\d*\.?\d*)x(?:-[0-9a-f]{7,})?\.[0-9a-z]+$/i.exec(s);if(!o)return;const l=parseFloat(o[1]);r.complete?n(r,l):r.onload=()=>{n(r,l)}}catch(s){console.error("Image scaling error:",s)}})};e();const t=new MutationObserver(i=>{i.forEach(r=>{r.type==="childList"&&e()})}),a=document.querySelector("main");a&&t.observe(a,{childList:!0,subtree:!0})},Ia={__name:"LazyImage",props:{src:{type:String,required:!0},tag:{type:String,default:"span"},rootMargin:{type:String,default:"100px 0px"}},setup(n){const e=n,t=hn(null),a=hn(!1);let i=null;return Jn(()=>{i=new IntersectionObserver(([r])=>{r.isIntersecting&&(a.value=!0,t?.value&&i.unobserve(t.value))},{rootMargin:e.rootMargin,threshold:.01}),t.value&&i.observe(t.value)}),Zt(()=>{i&&i.disconnect()}),(r,s)=>(F(),Dn(Fd(n.tag),{ref_key:"targetRef",ref:t,style:Cn(a.value&&n.src?{backgroundImage:n.src}:{})},{default:xn(()=>[_n(r.$slots,"default")]),_:3},8,["style"]))}},Ov=()=>{if(typeof window>"u")return .4;const n=localStorage.getItem("global_audio_volume");return n!==null?parseFloat(n):.4},Te=ct({src:"",title:"",isPlaying:!1,volume:Ov(),playbackRate:1}),hs=()=>({state:ut(Te),playAudio:(a,i="未知音频",r=1)=>{if(Te.src===a){Te.isPlaying=!Te.isPlaying;return}Te.src=a,Te.title=i,Te.isPlaying=!0,Te.playbackRate=r},pauseAudio:()=>{Te.isPlaying=!1},setVolume:a=>{if(typeof a!="number"||isNaN(a))return;const i=Math.max(0,Math.min(1,a));Te.volume=i,typeof window<"u"&&localStorage.setItem("global_audio_volume",i.toString())}}),Dv=1,Fv=90,pr="#AAAAAA",Pv="#000",ha=n=>{const e=parseFloat(n);if(Number.isNaN(e))return pr;const t=Math.round(e*10);return t<Dv?pr:t>Fv?Pv:Kv[t]??pr},fr=2.2,ei=[[.1,66,144,251],[1.25,79,192,255],[2,79,255,213],[2.5,124,255,79],[3.3,246,240,92],[4.2,255,104,104],[4.9,255,78,111],[5.8,198,69,184],[6.7,101,99,222],[7.7,24,21,142],[9,0,0,0]],Hv=n=>{if(n<.1)return"#AAAAAA";if(n>=9)return"#000000";let e=ei.findIndex(m=>n<m[0]);e===-1&&(e=ei.length-1);const[t,a,i,r]=ei[e-1],[s,o,l,u]=ei[e],c=(n-t)/(s-t),d=(m,f)=>{const g=Math.pow((1-c)*Math.pow(m,fr)+c*Math.pow(f,fr),1/fr);return Math.round(g).toString(16).padStart(2,"0")};return`#${d(a,o)}${d(i,l)}${d(r,u)}`},Kv=(()=>{const n=new Array(101);for(let e=0;e<=100;e++)n[e]=Hv(e/10);return n})(),Gt={NF:{name:"No Fail",bg:"#0068B7",color:"#FFFFFF"},EZ:{name:"Easy",bg:"#22AC38",color:"#FFFFFF"},TD:{name:"Touch Device",bg:"#7ECEF4",color:"#000000"},HD:{name:"Hidden",bg:"#F8B551",color:"#FFFFFF"},HR:{name:"Hard Rock",bg:"#D32F2F",color:"#FFFFFF"},SD:{name:"Sudden Death",bg:"#FF9800",color:"#FFFFFF"},DT:{name:"Double Time",bg:"#00A0E9",color:"#FFFFFF"},RX:{name:"Relax",bg:"#BFC31F",color:"#FFFFFF"},HT:{name:"Half Time",bg:"#BDBDBD",color:"#000000"},NC:{name:"Nightcore",bg:"#9922EE",color:"#FFFFFF"},FL:{name:"Flashlight",bg:"#000000",color:"#FFFFFF"},AT:{name:"Autoplay",bg:"#00B7EE",color:"#FFFFFF"},SO:{name:"Spun Out",bg:"#B28850",color:"#FFFFFF"},AP:{name:"Auto Pilot",bg:"#B3D465",color:"#FFFFFF"},PF:{name:"Perfect",bg:"#FFF100",color:"#000000"},DC:{name:"Daycore",bg:"#DADADA",color:"#000000"},BL:{name:"Blinds",bg:"#EB6100",color:"#FFFFFF"},ST:{name:"Strict Tracking",bg:"#D32F2F",color:"#FFFFFF"},TP:{name:"Target Practice",bg:"#920783",color:"#FFFFFF"},DA:{name:"Difficulty Adjust",bg:"#601986",color:"#FFFFFF"},CL:{name:"Classic",bg:"#920783",color:"#FFFFFF"},RD:{name:"Random",bg:"#009944",color:"#FFFFFF"},MR:{name:"Mirror",bg:"#007130",color:"#FFFFFF"},CN:{name:"Cinema",bg:"#00B7EE",color:"#FFFFFF"},V2:{name:"Score V2",bg:"#000000",color:"#FFFFFF"},SV2:{name:"Score V2",bg:"#000000",color:"#FFFFFF"},SW:{name:"Swap",bg:"#7B0046",color:"#FFFFFF"},FI:{name:"Fade In",bg:"#F8B551",color:"#000000"},CO:{name:"Cover",bg:"#F8B551",color:"#000000"},DS:{name:"Dual Stages",bg:"#9E005E",color:"#FFFFFF"},IN:{name:"Invert",bg:"#5F5BA8",color:"#FFFFFF"},HO:{name:"Hold Off",bg:"#8781BE",color:"#FFFFFF"},"1K":{name:"1 Key",bg:"#616161",color:"#FFFFFF"},"2K":{name:"2 Keys",bg:"#616161",color:"#FFFFFF"},"3K":{name:"3 Keys",bg:"#616161",color:"#FFFFFF"},"4K":{name:"4 Keys",bg:"#616161",color:"#FFFFFF"},"5K":{name:"5 Keys",bg:"#616161",color:"#FFFFFF"},"6K":{name:"6 Keys",bg:"#616161",color:"#FFFFFF"},"7K":{name:"7 Keys",bg:"#616161",color:"#FFFFFF"},"8K":{name:"8 Keys",bg:"#616161",color:"#FFFFFF"},"9K":{name:"9 Keys",bg:"#616161",color:"#FFFFFF"},"10K":{name:"10 Keys",bg:"#616161",color:"#FFFFFF"},NM:{name:"No Mod",bg:"#22AC38",color:"#FFFFFF",desc:"不允许玩家选择模组"},RC:{name:"Rice",bg:"#22AC38",color:"#FFFFFF",desc:"含有大量普通音符的图"},LN:{name:"Lone Note",bg:"#F8B551",color:"#FFFFFF",desc:"含有大量长按音符的图"},FE:{name:"Free Mod",bg:"#B57BFF",color:"#FFFFFF",alias:"FM",desc:"允许玩家任意选择模组"},FR:{name:"Free Mod",bg:"#B57BFF",color:"#FFFFFF",alias:"FM",desc:"允许玩家任意选择模组"},FM:{name:"Force Mod",bg:"#9922EE",color:"#FFFFFF",desc:"玩家必须选择模组"},HB:{name:"Hybrid",bg:"#00A0E9",color:"#FFFFFF",desc:"各种音符交错繁杂的图"},SV:{name:"Speed Variation",bg:"#9922EE",color:"#FFFFFF",desc:"含有下落速度突变的图"},TB:{name:"Tiebreaker",bg:"#000000",color:"#FFFFFF",desc:"决胜图"},AC:{name:"Accuracy",bg:"#FF9800",color:"#000000",desc:"按准确率高低排名赋分"},ACC:{name:"Accuracy",bg:"#FF9800",color:"#000000",desc:"按准确率高低排名赋分"},EX:{name:"Extra",bg:"#FF9800",color:"#000000",desc:"额外图"},SP:{name:"Special",bg:"#9E040D",color:"#FFFFFF",desc:"特殊图"},JB:{name:"Jiba",bg:"#9E040D",color:"#FFFFFF",desc:"特别难打或卡手的图"},SV1:{name:"ScoreV1",bg:"#000000",color:"#FFFFFF",desc:"需要采用第一版计分规则"},V1:{name:"ScoreV1",bg:"#000000",color:"#FFFFFF",desc:"需要采用第一版计分规则"},EP:{name:"Easy Plus",bg:"#22AC38",color:"#FFFFFF",desc:"新手追加"},NP:{name:"Normal Plus",bg:"#22AC38",color:"#FFFFFF",desc:"新手追加"},NS:{name:"Normal Short",bg:"#BDBDBD",color:"#000000",desc:"常规短图"},NL:{name:"Normal Long",bg:"#616161",color:"#000000",desc:"常规长图"},HS:{name:"Hard Short",bg:"#D32F2F",color:"#FFFFFF",desc:"困难短图"},HL:{name:"Hard Long",bg:"#9E040D",color:"#FFFFFF",desc:"困难长图"},HP:{name:"Hard Plus",bg:"#9922EE",color:"#FFFFFF",desc:"高手追加"},RU:{name:"Rush",bg:"#FF9800",color:"#000000",desc:"冲刺图，一般很简单，让玩家多次游玩来冲刺最高分"},DEFAULT:{name:"Unknown",bg:"#555555",color:"#FFFFFF",desc:"未知模组"}},Vv=new Set(Object.keys(Gt).filter(n=>n!=="DEFAULT")),Yt=n=>{if(!n)return Gt.DEFAULT;const e=n.toString().toUpperCase().trim();return Gt[e]||{name:e,...Gt.DEFAULT}};function uu(n){if(!n)return[];if(Array.isArray(n))return n.map(e=>e.toString().toUpperCase().trim()).filter(Boolean);if(typeof n=="string"){const e=n.toString().replace(/[+\[\]]/g,"").trim();return e?e.length<=3&&Vv.has(e.toUpperCase())?[e.toUpperCase()]:e.includes(",")?e.split(",").map(a=>a.trim().toUpperCase()).filter(Boolean):(e.match(/.{1,2}/g)||[]).map(a=>a.toUpperCase()):[]}return[]}const du=n=>{const e=n.map(t=>t.toUpperCase());return e.includes("DT")||e.includes("NC")?1.5:e.includes("HT")||e.includes("DC")?.75:1},zv=["href","title"],$v={class:"card-canvas"},Uv={class:"download-group"},Gv={key:0,class:"mods-box",title:"启用模组"},Yv=["title"],jv=["title"],Wv=["fill"],Jv={key:1,viewBox:"0 0 24 24",fill:"currentColor",class:"play-icon"},qv={class:"text-content"},Xv={class:"part-a"},Zv={key:0,class:"alias-badge"},Qv={class:"text-content-2"},n2={key:0,class:"part-b"},e2={class:"text-content-3"},t2={key:0,class:"rect-star"},a2=["title"],i2={key:1,class:"part-c"},r2={class:"text-content-4"},s2={key:0,class:"part-d"},o2={class:"modal-content"},l2=["src"],c2={key:0,class:"loading-spinner"},u2={__name:"Beatmap",props:{bid:[String,Number],sid:[String,Number],preview:{type:String,default:""},star:{type:[String,Number],default:0},max:{type:[String,Number],default:""},mode:{type:String,default:"o"},difficulties:{type:[Array,String],default:()=>[]},disabled:{type:[Boolean,String],default:!1},color:{type:String,default:null},alias:{type:String,default:null},other:{type:[String,Number],default:null},mods:{type:[Array,String],default:()=>[]}},setup(n){const e=hn(!1);Jn(()=>{e.value=!0});const t=n,a=A(()=>uu(t.mods)),i=A(()=>{const E=t.disabled;return E==="false"||E===0||E===null||E===void 0||E===!1?!1:!!E}),r=A(()=>{const E=`https://assets.ppy.sh/beatmaps/${t.sid}/covers/list.jpg`,I=`https://a.sayobot.cn/beatmaps/${t.sid}/covers/cover.webp`;return`url(${E}), url(${I})`}),s=A(()=>{const E=`https://assets.ppy.sh/beatmaps/${t.sid}/covers/cover.jpg`,I=`https://a.sayobot.cn/beatmaps/${t.sid}/covers/cover.webp`;return`url(${E}), url(${I})`}),o=A(()=>t.bid!=null?`https://osu.ppy.sh/b/${t.bid}`:t.sid!=null?`https://osu.ppy.sh/s/${t.sid}`:"https://osu.ppy.sh/beatmapsets"),l=A(()=>{const E=t.preview||"",I=/^(.*?)\s+-\s+(.*)\s+\(([^()]*)\)(?:\s+\[(.*)])?\s*$/,S=E.match(I);let y;switch(t?.mode?.toString()?.substring(0,1)){case"o":y="osu!standard";break;case"t":y="osu!taiko";break;case"c":case"f":y="osu!catch";break;case"m":y="osu!mania";break;default:y="osu!standard";break}return S?{artist:S[1]?.trim(),title:S[2]?.trim(),creator:S[3]?.trim(),difficulty:S[4]?.trim(),bid:t.bid?.toString()??"0",mode:y}:{artist:E.toString(),title:"",creator:"",difficulty:"",bid:t.bid?.toString()??"0",mode:y}}),u=A(()=>ha(t.star)),c=A(()=>t.color!=null&&t.color.toString().startsWith("#")?t.color:ha(t.star)),d=hn(!1),m=()=>{const E=t.sid?.toString()??"0";if(E==="0"){alert("配置的谱面集编号无效，无法下载。");return}const I=encodeURI(`https://dl.sayobot.cn/beatmaps/download/novideo/${E}?server=auto`);window.open(I,"_blank")},f=()=>{const E=t.sid?.toString()??"0";if(E==="0"){alert("配置的谱面集编号无效，无法下载。");return}const I=encodeURI(`https://dl.sayobot.cn/beatmaps/download/full/${E}?server=auto`);window.open(I,"_blank")},g=A(()=>{const E=parseFloat(t.star?.toString());return isNaN(E)?"0":(Math.floor(E*10)/10).toString()}),w=A(()=>{const E=parseFloat(t.star);return!isNaN(E)&&E>=.1&&E<4?{color:"#1c1719",textShadow:"0 1px 2px rgba(0, 0, 0, 0.2)"}:{color:"#ffffff",textShadow:"0 1px 2px rgba(0, 0, 0, 0.5)"}}),x=hn(""),C=hn([]),B=hn(0),h=E=>{E.preventDefault(),E.stopPropagation();const I=t.sid?.toString()??"0";C.value=[`https://assets.ppy.sh/beatmaps/${I}/covers/fullsize.jpg`,`https://a.sayobot.cn/beatmaps/${I}/covers/cover.webp`,s.value],B.value=0,x.value=C.value[0],d.value=!0},b=()=>{B.value<C.value.length-1?(B.value++,console.warn(`图片加载失败，正在尝试备选源 ${B.value}: ${C.value[B.value]}`),x.value=C.value[B.value]):console.error("所有图片源均加载失败")},R=A(()=>{if(Array.isArray(t.difficulties))return t.difficulties;if(typeof t.difficulties=="string")try{const E=JSON.parse(t.difficulties);return Array.isArray(E)?E:[]}catch{return t.difficulties.toString().replace(/[\[\]]/g,"").split(",").map(I=>parseFloat(I.trim())).filter(I=>!isNaN(I))}return[]}),Y=A(()=>R.value.map(E=>ha(E))),{state:N,playAudio:T}=hs(),M=A(()=>{const E=t.sid?.toString()??"0";return E!=="0"?`https://b.ppy.sh/preview/${E}.mp3`:""}),D=A(()=>N.src===M.value&&N.isPlaying),P=A(()=>du(a.value)),_=()=>{if(!M.value)return;const E=t.alias?` (${t.alias||""})`:"",I=l.value.title?`${l.value.artist||""} - ${l.value.title}${E}`:`Beatmap ${t.sid}`;T(M.value,I,P.value)};return(E,I)=>{const S=Oa("ClientOnly");return F(),U(bn,null,[L("a",{href:o.value,target:"_blank",class:zn(["data-card-container",{"is-disabled":i.value}]),title:i.value?"谱面被删除或被版权，不建议访问网页":"访问谱面网页",onClick:I[1]||(I[1]=y=>i.value&&y.preventDefault())},[L("span",$v,[L("span",Uv,[a.value.length?(F(),U("span",Gv,[(F(!0),U(bn,null,pe(a.value,(y,q)=>(F(),U("span",{key:y,class:"mod-badge",style:Cn({backgroundColor:Z(Yt)(y).bg,color:Z(Yt)(y).color,zIndex:q+1,right:`${(a.value.length-1-q)*55}%`}),title:`${Z(Yt)(y).name} (${y})`},tn(y),13,Yv))),128))])):mn("",!0),L("span",{class:"download-icon official",onClick:Vt(m,["stop","prevent"]),title:"使用 Sayobot 下载谱面（不包含视频）"},[...I[4]||(I[4]=[L("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[L("path",{d:"M7 17.5a4 4 0 01-.88-7.903A5 5 0 1115.9 7.5L16 7.5a5 5 0 011 9.9M15 14.5l-3 3m0 0l-3-3m3 3V11.5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])]),L("span",{class:"download-icon sayo",onClick:Vt(f,["stop","prevent"]),title:"使用 Sayobot 下载谱面"},[...I[5]||(I[5]=[L("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[L("path",{d:"M12 15V3m0 12l-4-4m4 4l4-4M4 17v1a2 2 0 002 2h12a2 2 0 002-2v-1",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])])]),L("span",{class:"color-rect",style:Cn({backgroundColor:c.value})},null,4),t.star?(F(),U("span",{key:0,class:"star-badge",style:Cn([{backgroundColor:u.value},w.value])},tn(g.value),5)):mn("",!0),t.bid||t.sid?(F(),U("span",{key:1,class:"id-badge",style:Cn([{backgroundColor:u.value},w.value])},tn(t.bid||`s${t.sid}`),5)):mn("",!0),sn(Ia,{src:s.value,class:"background-rect"},null,8,["src"]),sn(Ia,{class:zn([{"is-disabled":i.value},"preview-rect"]),src:r.value,title:"查看完整背景",onClick:h},{default:xn(()=>[L("span",{class:"preview-play-btn",onClick:I[0]||(I[0]=Vt(y=>t.sid&&!i.value&&_(),["stop","prevent"])),title:t.sid?i.value?"谱面已被禁用，无法试听":D.value?"暂停试听":`试听 ${l.value.title||t.sid}`:"谱面不可用"},[D.value?(F(),U("svg",{key:0,viewBox:"0 0 24 24",fill:u.value,class:"pause-icon"},[...I[6]||(I[6]=[L("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"},null,-1)])],8,Wv)):(F(),U("svg",Jv,[...I[7]||(I[7]=[L("path",{d:"M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"},null,-1)])]))],8,jv)]),_:1},8,["class","src"]),L("span",qv,[L("span",Xv,tn(l.value.title),1),t.alias?(F(),U("span",Zv,tn(t.alias),1)):mn("",!0)]),L("span",Qv,[l.value.artist&&l.value.creator?(F(),U("span",n2,tn(l.value.artist+" // "+l.value.creator),1)):mn("",!0)]),L("span",e2,[t.difficulties&&t.difficulties.length>0?(F(),U("span",t2,[(F(!0),U(bn,null,pe(R.value,(y,q)=>(F(),U("span",{key:y,class:"star-rect-item",style:Cn({backgroundColor:Y.value[q]}),title:`星数: ${y}`},null,12,a2))),128))])):mn("",!0),l.value.difficulty?(F(),U("span",i2,tn(`[${l.value.difficulty}]`+(t.other!=null&&t.other!==""?` (${t.other})`:"")),1)):mn("",!0)]),L("span",r2,[l.value.mode?(F(),U("span",s2,tn(l.value.mode),1)):mn("",!0)])])],10,zv),sn(S,null,{default:xn(()=>[(F(),Dn(Il,{to:"body"},[sn(Qt,{name:"fade"},{default:xn(()=>[e.value&&d.value?(F(),U("div",{key:0,class:"image-modal-overlay",onClick:I[3]||(I[3]=y=>d.value=!1)},[L("div",o2,[L("img",{src:x.value,alt:"Preview",class:"full-image",onError:b},null,40,l2),L("div",{class:"close-btn",onClick:I[2]||(I[2]=y=>d.value=!1)},"×"),x.value?mn("",!0):(F(),U("div",c2,"Loading..."))])])):mn("",!0)]),_:1})]))]),_:1})],64)}}},d2=xe(u2,[["__scopeId","data-v-6a807135"]]),m2=["href"],p2={class:"card-canvas"},f2={class:"download-group"},h2={key:0,class:"mods-box",title:"启用模组"},v2=["title"],g2={class:"symbol-wrapper"},b2={class:"baseline-container"},w2={class:"text-large"},y2={class:"text-small"},x2=["title"],B2=["fill"],S2={key:1,viewBox:"0 0 24 24",fill:"currentColor",class:"play-icon"},k2={class:"part-a"},_2={key:0,class:"alias-badge"},A2={key:0,class:"part-b"},E2={class:"text-content-3"},I2={key:0,class:"part-c"},T2={class:"modal-content"},C2=["src"],M2={key:0,class:"loading-spinner"},R2={__name:"Score",props:{bid:[String,Number],sid:[String,Number],preview:{type:String,default:""},star:{type:[String,Number],default:0},mode:{type:String,default:"o"},accuracy:{type:[String,Number],default:0},combo:{type:[Number,String],default:0},max:{type:[Number,String],default:0},rank:{type:String,default:"F"},performance:{type:[Number,String],default:0},mods:{type:[Array,String],default:()=>[]},disabled:{type:[Boolean,String],default:!1},color:{type:[String],default:null},alias:{type:[String],default:null}},setup(n){const e=hn(!1);Jn(()=>{e.value=!0});const t=n,a=A(()=>{const S=t.disabled;return S==="false"||S===0||S===null||S===void 0||S===!1?!1:!!S}),i=A(()=>uu(t.mods)),r=A(()=>{const S=`https://assets.ppy.sh/beatmaps/${t.sid}/covers/list.jpg`,y=`https://a.sayobot.cn/beatmaps/${t.sid}/covers/cover.webp`;return`url(${S}), url(${y})`}),s=A(()=>{const S=`https://assets.ppy.sh/beatmaps/${t.sid}/covers/cover.jpg`,y=`https://a.sayobot.cn/beatmaps/${t.sid}/covers/cover.webp`;return`url(${S}), url(${y})`}),o=A(()=>t.bid!=null?`https://osu.ppy.sh/b/${t.bid}`:t.sid!=null?`https://osu.ppy.sh/s/${t.sid}`:"https://osu.ppy.sh/beatmapsets"),l=A(()=>{const S=t.preview||"",y=/^(.*?)\s+-\s+(.*)\s+\(([^()]*)\)\s+\[(.*)]\s*$/,q=S.match(y);let W;switch(t?.mode?.toString()?.substring(0,1)){case"o":W="osu!standard";break;case"t":W="osu!taiko";break;case"c":case"f":W="osu!catch";break;case"m":W="osu!mania";break;default:W="osu!standard";break}let pn=parseFloat(t.accuracy),cn;isNaN(pn)?cn="0":pn<=1?cn=Number((pn*100).toFixed(2)).toString():pn<=100||pn<=1e4?cn=Number(pn.toFixed(2)).toString():cn="";let yn;return t.combo&&t.max?yn=` - ${cn}% ${t.combo}x/${t.max}x`:yn="",q?{artist:q[1]?.trim(),title:q[2]?.trim(),creator:q[3]?.trim(),difficulty:q[4]?.trim(),statistics:yn,bid:t.bid?.toString()??"0",mode:W}:{artist:S.toString(),title:"",creator:"",difficulty:"",statistics:"",bid:t.bid?.toString()??"0",mode:W}}),u=A(()=>ha(t.star)),c=A(()=>t.color!=null&&t.color.toString().startsWith("#")?t.color:ha(t.star)),d=A(()=>{const S=Number.parseFloat(t.performance);return t.performance!=null&&Number.isFinite(S)?"PP":""}),m=hn(!1),f=()=>{const S=t.sid?.toString()??"0";if(S==="0"){alert("配置的谱面集编号无效，无法下载。");return}const y=encodeURI(`https://dl.sayobot.cn/beatmaps/download/novideo/${S}?server=auto`);window.open(y,"_blank")},g=()=>{const S=t.sid?.toString()??"0";if(S==="0"){alert("配置的谱面集编号无效，无法下载。");return}const y=encodeURI(`https://dl.sayobot.cn/beatmaps/download/full/${S}?server=auto`);window.open(y,"_blank")},w=A(()=>{const S=parseFloat(t.star?.toString());return isNaN(S)?"0":(Math.floor(S*10)/10).toString()}),x=A(()=>{const S=parseFloat(t.star);return!isNaN(S)&&S>=.1&&S<4?{color:"#1c1719",textShadow:"0 1px 2px rgba(0, 0, 0, 0.2)"}:{color:"#ffffff",textShadow:"0 1px 2px rgba(0, 0, 0, 0.5)"}}),C=A(()=>{let S="/images/rank/";switch(t.rank?.toUpperCase()){case"PF":case"XH":case"SSH":case"EX":case"X+":S+="XH";break;case"X":case"SS":S+="X";break;case"SH":case"SP":case"S+":S+="SH";break;case"S":S+="S";break;case"A":S+="A";break;case"B":S+="B";break;case"C":S+="C";break;case"D":S+="D";break;case"F":S+="F";break;default:return""}return S+".svg"}),B=A(()=>{let S;switch(t.rank?.toUpperCase()){case"PF":case"XH":case"SSH":case"EX":case"X+":S=["#ccc","#fafafa"];break;case"X":case"SS":S=["#FFC86B","#FFFF00"];break;case"SH":S=["#999","#ccc"];break;case"SP":case"S+":S=["#FF4E6F","#FAD126"];break;case"S":S=["#EC6841","#FF9800"];break;case"A":S=["#31B16C","#12B4B1"];break;case"B":S=["#7776FF","#4FACFE"];break;case"C":S=["#9922EE","#F772D1"];break;case"D":S=["#D32F2F","#FD5392"];break;case"F":S=["#666","#999"];break;default:S=["#2A2226","#2A2226"]}return S}),h=hn(""),b=hn([]),R=hn(0),Y=S=>{S.preventDefault(),S.stopPropagation();const y=t.sid?.toString()??"0";b.value=[`https://assets.ppy.sh/beatmaps/${y}/covers/fullsize.jpg`,`https://a.sayobot.cn/beatmaps/${y}/covers/cover.webp`,s.value],R.value=0,h.value=b.value[0],m.value=!0},N=()=>{R.value<b.value.length-1?(R.value++,console.warn(`图片加载失败，正在尝试备选源 ${R.value}: ${b.value[R.value]}`),h.value=b.value[R.value]):console.error("所有图片源均加载失败")},T=A(()=>i.value.length===0?"30%":"40%"),{state:M,playAudio:D}=hs(),P=A(()=>{const S=t.sid?.toString()??"0";return S!=="0"?`https://b.ppy.sh/preview/${S}.mp3`:""}),_=A(()=>M.src===P.value&&M.isPlaying),E=A(()=>du(i.value)),I=()=>{if(!P.value)return;const S=t.alias?` (${t.alias||""})`:"",y=l.value.title?`${l.value.artist||""} - ${l.value.title}${S}`:`Beatmap ${t.sid}`;D(P.value,y,E.value)};return(S,y)=>{const q=Oa("ClientOnly");return F(),U(bn,null,[L("a",{href:o.value,target:"_blank",class:"data-card-container",title:"访问谱面网页"},[L("span",p2,[L("span",f2,[i.value.length?(F(),U("span",h2,[(F(!0),U(bn,null,pe(i.value,(W,pn)=>(F(),U("span",{key:W,class:"mod-badge",style:Cn({backgroundColor:Z(Yt)(W).bg,color:Z(Yt)(W).color,zIndex:pn+1,right:`${(i.value.length-1-pn)*55}%`}),title:`${Z(Yt)(W).name} (${W})`},tn(W),13,v2))),128))])):mn("",!0),L("span",{class:"download-icon official",onClick:Vt(f,["stop","prevent"]),title:"使用 Sayobot 下载谱面（不包含视频）"},[...y[3]||(y[3]=[L("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[L("path",{d:"M7 17.5a4 4 0 01-.88-7.903A5 5 0 1115.9 7.5L16 7.5a5 5 0 011 9.9M15 14.5l-3 3m0 0l-3-3m3 3V11.5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])]),L("span",{class:"download-icon sayo",onClick:Vt(g,["stop","prevent"]),title:"使用 Sayobot 下载谱面"},[...y[4]||(y[4]=[L("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[L("path",{d:"M12 15V3m0 12l-4-4m4 4l4-4M4 17v1a2 2 0 002 2h12a2 2 0 002-2v-1",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])])]),L("span",{class:"color-rect",style:Cn({backgroundColor:c.value})},null,4),L("span",{class:"extra-rect",style:Cn({"--color-1":B.value[0],"--color-2":B.value[1]})},[C.value?(F(),U("span",{key:0,class:"decoration-rect",style:Cn({maskImage:`url(${C.value})`,WebkitMaskImage:`url(${C.value})`})},null,4)):mn("",!0),L("span",g2,[L("span",b2,[L("span",w2,tn(t.performance??0),1),L("span",y2,tn(d.value),1)])])],4),y[7]||(y[7]=L("span",{class:"base-rect",style:{backgroundColor:"#2A2226"}},null,-1)),t.star?(F(),U("span",{key:0,class:"star-badge",style:Cn([{backgroundColor:u.value},x.value])},tn(w.value),5)):mn("",!0),t.bid||t.sid?(F(),U("span",{key:1,class:"id-badge",style:Cn([{backgroundColor:u.value},x.value])},tn(t.bid||`s${t.sid}`),5)):mn("",!0),sn(Ia,{src:s.value,class:"background-rect"},null,8,["src"]),sn(Ia,{class:zn([{"is-disabled":t.disabled},"preview-rect"]),src:r.value,title:"查看完整背景",onClick:Y},{default:xn(()=>[L("span",{class:"preview-play-btn",onClick:y[0]||(y[0]=Vt(W=>t.sid&&!a.value&&I(),["stop","prevent"])),title:t.sid?a.value?"谱面已被禁用，无法试听":_.value?"暂停试听":`试听 ${l.value.title||t.sid}`:"谱面不可用"},[_.value?(F(),U("svg",{key:0,viewBox:"0 0 24 24",fill:u.value,class:"pause-icon"},[...y[5]||(y[5]=[L("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"},null,-1)])],8,B2)):(F(),U("svg",S2,[...y[6]||(y[6]=[L("path",{d:"M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"},null,-1)])]))],8,x2)]),_:1},8,["class","src"]),L("span",{class:"text-content",style:Cn({right:T.value})},[L("span",k2,tn(l.value.title),1),t.alias?(F(),U("span",_2,tn(t.alias),1)):mn("",!0)],4),L("span",{class:"text-content-2",style:Cn({right:T.value})},[l.value.artist&&l.value.creator?(F(),U("span",A2,tn(l.value.artist+" // "+l.value.creator),1)):mn("",!0)],4),L("span",E2,[l.value.difficulty?(F(),U("span",I2,"["+tn(l.value.difficulty)+"]"+tn(l.value.statistics),1)):mn("",!0)])])],8,m2),sn(q,null,{default:xn(()=>[(F(),Dn(Il,{to:"body"},[sn(Qt,{name:"fade"},{default:xn(()=>[e.value&&m.value?(F(),U("div",{key:0,class:"image-modal-overlay",onClick:y[2]||(y[2]=W=>m.value=!1)},[L("div",T2,[L("img",{src:h.value,alt:"Preview",class:"full-image",onError:N},null,40,C2),L("div",{class:"close-btn",onClick:y[1]||(y[1]=W=>m.value=!1)},"×"),h.value?mn("",!0):(F(),U("div",M2,"Loading..."))])])):mn("",!0)]),_:1})]))]),_:1})],64)}}},L2=xe(R2,[["__scopeId","data-v-98460abc"]]),N2={class:"user-card-container"},O2=["href"],D2=["src"],F2=["src"],P2={class:"text-global"},H2={class:"text-country"},K2={class:"text-name"},V2={class:"text-stats"},z2={class:"pp-container"},$2={class:"text-perf"},U2={__name:"Player",props:{id:[String,Number],name:[String],country:[String,Number],global:[String,Number],from:[String],accuracy:[String,Number],level:[String,Number],progress:[String,Number],performance:[String,Number]},setup(n){const e=n,t=A(()=>{let i=parseFloat(e.accuracy),r;return isNaN(i)?r="0":i<=1?r=Number((i*100).toFixed(2)).toString():i<=100||i<=1e4?r=Number(i.toFixed(2)).toString():r="0",r}),a=A(()=>{let i;/^[A-Za-z]{2}$/.test(e.from)?i=e.from?.toUpperCase():i="XX",i==="TW"&&(i="CN");const r=127462,s=r+i.charCodeAt(0)-65,o=r+i.charCodeAt(1)-65;return`https://osu.ppy.sh/assets/images/flags/${s.toString(16).toLowerCase()}-${o.toString(16).toLowerCase()}.svg`});return(i,r)=>(F(),U("div",N2,[L("a",{href:`https://osu.ppy.sh/u/${e.id}`,target:"_blank",class:"user-card"},[r[1]||(r[1]=L("span",{class:"card-bg-animated"},null,-1)),r[2]||(r[2]=L("span",{class:"card-overlay"},null,-1)),L("img",{src:`https://a.ppy.sh/${e.id}`,class:"user-avatar",alt:"avatar"},null,8,D2),L("img",{src:`${a.value}`,class:"user-flag",alt:"country flag"},null,8,F2),L("span",P2,"#"+tn(e.global??0),1),L("span",H2,tn(e.from??"??")+"#"+tn(e.country??0),1),L("span",K2,tn(e.name??"Unknown"),1),L("span",V2,tn(t.value)+"% Lv."+tn(e.level??0)+"("+tn(e.progress??0)+"%) ",1),L("span",z2,[L("span",$2,tn(e.performance),1),r[0]||(r[0]=L("span",{class:"text-pp"},"PP",-1))])],8,O2)]))}},G2=xe(U2,[["__scopeId","data-v-1bd0c102"]]),Y2="/images/banner-overlay.png",j2=["src"],W2={class:"badge__content"},$o=1920,J2=320,q2={__name:"Pool",props:{mod:{type:String,default:"HD"},overlay:{type:String,default:Y2},radius:{type:Number,default:40},scale:{type:Number,default:1},colorAlpha:{type:Number,default:.8},other:{type:String,default:""}},setup(n){const e=hn(!1),t=hn(0),a=hn(0);function i(D){const P=D.currentTarget.getBoundingClientRect();t.value=(D.clientX-P.left)/c.value,a.value=(D.clientY-P.top)/c.value}function r(){e.value=!0}function s(){e.value=!1}const o=n;function l(D,P=1){let _=String(D).replace("#","").trim();_.length===3&&(_=_.split("").map(q=>q+q).join(""));const E=parseInt(_,16),I=E>>16&255,S=E>>8&255,y=E&255;return`rgba(${I}, ${S}, ${y}, ${P})`}const u=hn(null),c=hn(1);let d=null;Jn(()=>{c.value=u.value.clientWidth/$o,d=new ResizeObserver(([D])=>{c.value=D.contentRect.width/$o}),d.observe(u.value)}),Di(()=>d?.disconnect());const m=A(()=>c.value*o.scale),f=A(()=>String(o.mod||"").trim().toUpperCase()),g=A(()=>{const D=f.value;return/V\d+$/i.test(D)?D:D.replace(/[0-9]+$/g,"").trim()}),w=A(()=>{const D=f.value;if(/V\d+$/i.test(D))return"";const P=D.match(/(\d+)$/);return P?P[1]:""}),x=A(()=>Gt[g.value]??Gt.DEFAULT),C=A(()=>l(x.value.bg,o.colorAlpha)),B=A(()=>x.value.desc??""),h=A(()=>x.value.name??g.value+w.value),b=A(()=>x.value.alias??g.value+w.value),R=A(()=>{const D=x.value.color??"#fff";return l(D,o.colorAlpha)}),Y=A(()=>({height:`${J2*m.value}px`})),N=A(()=>({backgroundColor:C.value,borderRadius:`${o.radius}px`,transform:`scale(${m.value})`}));function T(D){let P=String(D).replace("#","").trim();P.length===3&&(P=P.split("").map(y=>y+y).join(""));const _=parseInt(P,16);if(isNaN(_))return .5;const E=_>>16&255,I=_>>8&255,S=_&255;return(.2126*E+.7152*I+.0722*S)/255}const M=A(()=>{const D=x.value.bg||"#000000",P=T(D);return P<.1?"screen":(P>.8,"overlay")});return(D,P)=>(F(),U("div",{ref_key:"outerRef",ref:u,class:"badge-outer",style:Cn(Y.value),onMousemove:i,onMouseenter:r,onMouseleave:s},[L("div",{class:"badge",style:Cn(N.value)},[L("img",{class:"badge__overlay",src:n.overlay,style:Cn({mixBlendMode:M.value}),alt:"","aria-hidden":"true",draggable:"false"},null,12,j2),B.value&&e.value?(F(),U("div",{key:0,class:"badge__tip",style:Cn({left:t.value+"px",top:a.value+"px"}),role:"tooltip"},tn(B.value),5)):mn("",!0),L("div",{class:"badge__corner badge__corner--tl",style:Cn({color:R.value})},[_n(D.$slots,"top-left",{mod:g.value,conf:x.value},()=>[ke(tn(b.value),1)],!0)],4),L("div",{class:"badge__corner badge__corner--bl",style:Cn({color:R.value})},[_n(D.$slots,"bottom-left",{mod:g.value,conf:x.value},()=>[ke(tn(h.value),1)],!0)],4),n.other?(F(),U("div",{key:1,class:"badge__corner badge__corner--br",style:Cn({color:R.value})},[_n(D.$slots,"bottom-right",{mod:g.value,conf:x.value},()=>[ke(tn(n.other),1)],!0)],4)):mn("",!0),L("div",W2,[_n(D.$slots,"default",{},void 0,!0)])],4)],36))}},X2=xe(q2,[["__scopeId","data-v-60f92df5"]]),Z2=["title"],Q2={key:0,viewBox:"0 0 24 24",fill:"currentColor"},n4={key:1},e4={class:"player-content"},t4={class:"audio-header"},a4=["title"],i4={key:0,class:"title","aria-hidden":"true"},r4={class:"audio-controls"},s4=["src","volume"],o4={__name:"GlobalAudioPlayer",setup(n){const e=hn(!1),t=hn(!1),a=hn(null),i=hn(null),{state:r,setVolume:s,pauseAudio:o}=hs(),l=hn(null),u=async()=>{t.value=!1,await mt(),a.value&&i.value&&(t.value=i.value.scrollWidth>a.value.clientWidth)};Hn(()=>r.title,()=>{u()}),Hn(e,g=>{g||u()});const c=()=>{l.value&&(l.value.playbackRate=r.playbackRate||1)},d=()=>{l.value&&(l.value.volume=r.volume)},m=()=>{l.value&&Math.abs(l.value.volume-r.volume)>.01&&s(l.value.volume)},f=()=>{o()};return Jn(()=>{d(),c(),u(),Hn(()=>r.volume,g=>{l.value&&(l.value.volume=g)}),Hn(()=>r.isPlaying,g=>{l.value&&(g?(d(),c(),l.value.play().catch(()=>{})):l.value.pause())}),Hn(()=>r.playbackRate,g=>{l.value&&(l.value.playbackRate=g||1)}),Hn(()=>r.src,async()=>{e.value=!1,await mt(),l.value&&(l.value.volume=r.volume,r.isPlaying&&(l.value.currentTime=0,l.value.playbackRate=r.playbackRate||1,l.value.play().catch(()=>{})))})}),(g,w)=>Z(r).src&&Z(r).src.trim()!==""?(F(),U("div",{key:0,class:zn(["global-audio-player",{"is-collapsed":e.value}])},[L("button",{class:"toggle-btn",onClick:w[0]||(w[0]=x=>e.value=!e.value),title:e.value?"展开播放器":"收起播放器"},[e.value?(F(),U("svg",Q2,[...w[1]||(w[1]=[L("path",{d:"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"},null,-1)])])):(F(),U("span",n4,"✕"))],8,Z2),wa(L("div",e4,[L("div",t4,[L("div",{ref_key:"wrapperRef",ref:a,class:"title-wrapper"},[L("div",{class:zn(["title-track",{"is-scrolling":t.value}])},[L("span",{ref_key:"titleRef",ref:i,class:"title",title:Z(r).title},tn(Z(r).title||"正在播放音频"),9,a4),t.value?(F(),U("span",i4,tn(Z(r).title||"正在播放音频"),1)):mn("",!0)],2)],512)]),L("div",r4,[L("audio",{ref_key:"audioRef",ref:l,src:Z(r).src,volume:Z(r).volume,controls:"",autoplay:"",onVolumechange:m,onEnded:f},null,40,s4)])],512),[[ka,!e.value]])],2)):mn("",!0)}},Uo=xe(o4,[["__scopeId","data-v-8dd1bb52"]]),l4={class:"timeline"},c4={class:"timeline-content"},u4={class:"timeline-date"},d4={class:"timeline-title"},m4={key:0,class:"timeline-desc"},p4={__name:"Timeline",props:{items:{type:Array,required:!0,default:()=>[]},order:{type:String,default:"desc"}},setup(n){const e=n,t=A(()=>[...e.items].sort((a,i)=>{const r=new Date(a.date).getTime(),s=new Date(i.date).getTime();return e.order==="desc"?s-r:r-s}));return(a,i)=>(F(),U("div",l4,[(F(!0),U(bn,null,pe(t.value,(r,s)=>(F(),U("div",{key:s,class:"timeline-item"},[i[0]||(i[0]=L("div",{class:"timeline-point"},null,-1)),L("div",c4,[L("span",u4,tn(r.date),1),L("div",d4,tn(r.title),1),r.description?(F(),U("p",m4,tn(r.description),1)):mn("",!0)])]))),128))]))}},f4=xe(p4,[["__scopeId","data-v-b7aae10c"]]),Go=["#588c7e","#b2a367","#c98f65","#bc5151","#5c8bd6","#7f6ab7","#a368ad","#aa6880","#6fad9b","#f2e394","#f2ae72","#f98f8a","#7daef4","#a691f2","#c894d3","#d895b0","#53c4a1","#eace5c","#ea8c47","#fc4f4f","#3d94ea","#7760ea","#af52c6","#e25696","#677c66","#9b8732","#8c5129","#8c3030","#1f5d91","#4335a5","#812a96","#992861"];function oi(n){let e=0;if(typeof n=="number")e=Math.abs(n);else if(typeof n=="string"){for(let a=0;a<n.length;a++)e=n.charCodeAt(a)+((e<<5)-e);e=Math.abs(e)}else e=0;const t=e%Go.length;return Go[t]??"#e3f2fd"}const h4={class:"avatar-container"},v4=["src","alt"],g4={class:"content-container"},b4={class:"card-name"},w4={class:"card-title"},y4={__name:"EasyCard",props:{id:{type:[String,Number],required:!0},name:{type:String,required:!0},title:{type:String,required:!0},color:{type:String,default:null},link:{type:String,default:null}},setup(n){const e=n,t=A(()=>`https://a.ppy.sh/${e.id}`),a=A(()=>e.link?e.link?.startsWith("http")?e.link:typeof e.id=="number"?`https://osu.ppy.sh/u/${e.id}`:e.link:"#"),i=A(()=>e.color?e.color:typeof e.id=="number"||typeof e.id=="string"?oi(e.id.toString()):typeof e.name=="string"?oi(e.name.toString()):typeof e.title=="string"?oi(e.title.toString()):"#666666"),r=A(()=>{let s=i.value.replace("#","");s.length===3&&(s=s.split("").map(d=>d+d).join(""));const o=parseInt(s,16),l=o>>16&255,u=o>>8&255,c=o&255;return`linear-gradient(rgba(${l}, ${u}, ${c}, 0.2), rgba(${l}, ${u}, ${c}, 0.2)), var(--vp-c-bg)`});return(s,o)=>{const l=Oa("router-link");return F(),Dn(l,{to:a.value,class:"custom-card",style:Cn({background:r.value})},{default:xn(()=>[L("div",h4,[L("img",{src:t.value,alt:n.title,class:"avatar-img"},null,8,v4)]),L("div",g4,[L("div",b4,tn(n.name),1),L("div",w4,tn(n.title),1)])]),_:1},8,["to","style"])}}},mu=xe(y4,[["__scopeId","data-v-9322baa2"]]),x4=`
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
`,B4=Object.freeze(Object.defineProperty({__proto__:null,default:x4},Symbol.toStringTag,{value:"Module"})),S4=`# BenZn 的跳图推荐\\#刷pp！

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
alias="那就是像微光一样的东西"
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

没东西。`,k4=Object.freeze(Object.defineProperty({__proto__:null,default:S4},Symbol.toStringTag,{value:"Module"})),_4=`# 新人必备图包 by Muz 1.5

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
/>

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
sid=1135268
preview="Ling Yuan yousa - Gou Zhi Qi Shi (Madoka2574)"
star=2.68
difficulties=[1.36,2.00,2.68]
alias="勾指起誓"
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
/>`,A4=Object.freeze(Object.defineProperty({__proto__:null,default:_4},Symbol.toStringTag,{value:"Module"})),E4=`---
title: 谱面推荐
lang: zh-CN
---

# 谱面推荐

<EasyWallet />

TODO：正在施工

- [Atahana 精选 DJ 图包](atahana.md)
- [Sayori's Stage v1.1 （1000pp+综合向）](sayori_yui.md)
- [菜鸡杰克的初中阶切指练习推荐](jack_wang_.md)
- [Kagami 的连打推荐 ver3.0](hiiragi_kagami.md)
- [1687の听歌向旮旯谱推荐](-Yuki_Noa-.md)
`,I4=Object.freeze(Object.defineProperty({__proto__:null,default:E4},Symbol.toStringTag,{value:"Module"})),T4=`# Atahana 精选 DJ 图包

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
/>`,C4=Object.freeze(Object.defineProperty({__proto__:null,default:T4},Symbol.toStringTag,{value:"Module"})),M4=`# Kagami 的连打推荐 ver3.0

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
  alias="不可理喻"
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
`,R4=Object.freeze(Object.defineProperty({__proto__:null,default:M4},Symbol.toStringTag,{value:"Module"})),L4=`# 菜鸡杰克的初中阶切指练习推荐（进阶已补完）

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
  alias="不可言喻"
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

2018.3.10`,N4=Object.freeze(Object.defineProperty({__proto__:null,default:L4},Symbol.toStringTag,{value:"Module"})),O4=`# Sayori's Stage v1.1 （1000pp+综合向）

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
/>`,D4=Object.freeze(Object.defineProperty({__proto__:null,default:O4},Symbol.toStringTag,{value:"Module"})),F4={class:"card-grid"},P4="article/recommend",H4={__name:"EasyWallet",setup(n){const e=Object.assign({"../../article/recommend/-Yuki_Noa-.md":B4,"../../article/recommend/BenZn.md":k4,"../../article/recommend/Muziyami.md":A4,"../../article/recommend/README.md":I4,"../../article/recommend/atahana.md":C4,"../../article/recommend/hiiragi_kagami.md":R4,"../../article/recommend/jack_wang_.md":N4,"../../article/recommend/sayori_yui.md":D4}),t=r=>{let s="";if(typeof r=="string")s=r;else if(r&&typeof r.default=="string")s=r.default;else if(r)try{s=String(r.default||"")}catch{s=""}if(!s)return{fm:{},bodyHeading:"",extractedId:"",extractedName:""};const o={};let l="",u="",c="";try{const d=s.split(/\r?\n/);let m=!1,f=!1;const g=Math.min(d.length,50),w=d.slice(0,g).join(`
`);for(let B=0;B<g;B++){const h=d[B];if(!h)continue;const b=h.trim();if(b==="---")if(f){if(m){m=!1;continue}}else{f=!0,m=!0;continue}if(m){const R=h.indexOf(":");if(R!==-1){const Y=h.slice(0,R).trim().toLowerCase();let N=h.slice(R+1).trim();N=N.replace(/^['"](.*)['"]$/,"$1"),o[Y]=N}}else!l&&b.startsWith("#")&&(l=b.replace(/^#+\s*/,"").replace(/\\/g,""))}const x=w.match(/<Player\b[^>]*\bid=["']?(\d+)["']?/i),C=w.match(/<Player\b[^>]*\bname=["']([^"']+)["']/i);x&&(u=x[1]),C&&(c=C[1])}catch{}return{fm:o,bodyHeading:l,extractedId:u,extractedName:c}},a=[],i=Object.entries(e||{});for(let r=0;r<i.length;r++){const s=i[r],o=s[0],l=s[1];if(o.toLowerCase().endsWith("readme.md"))continue;const u=o.split("/"),d=(u[u.length-1]||"").replace(".md","").trim(),{fm:m,bodyHeading:f,extractedId:g,extractedName:w}=t(l),x=m.name||w||d,C=m.title||f||"暂无标题...",B=m.id||g||d,h=m.color||oi(B),R=`/${P4.trim().replace(/^\/+|\/+$/g,"")}/${d}.html`;a.push({id:B,name:x,title:C,color:h,link:R})}return(r,s)=>(F(),U("div",F4,[(F(),U(bn,null,pe(a,o=>sn(mu,{key:o.id,id:o.id,name:o.name,title:o.title,color:o.color,link:o.link},null,8,["id","name","title","color","link"])),64))]))}},K4=xe(H4,[["__scopeId","data-v-1f297caa"]]),V4=Qe({setup(){},rootComponents:[Uo],enhance({app:n,router:e,siteData:t}){e.beforeEach(a=>{}),e.afterEach(a=>{setTimeout(()=>{Nv()},500)}),n.component("Beatmap",d2),n.component("Score",L2),n.component("Player",G2),n.component("Pool",X2),n.component("LazyImage",Ia),n.component("GlobalAudioPlayer",Uo),n.component("Timeline",f4),n.component("EasyCard",mu),n.component("EasyWallet",K4)}}),z4=Object.freeze(Object.defineProperty({__proto__:null,default:V4},Symbol.toStringTag,{value:"Module"})),ti=[M1,U1,J1,X1,s0,b0,k0,_0,M0,F0,Lv,z4].map(n=>n.default).filter(Boolean),$4=JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[["link",{"rel":"icon","href":"/images/hero.png"}],["link",{"href":"/fonts/Torus-SemiBold.woff2","rel":"stylesheet"}],["link",{"href":"/fonts/Torus-SemiBold.woff","rel":"stylesheet"}],["link",{"href":"/fonts/Torus-Bold.woff2","rel":"stylesheet"}],["link",{"href":"/fonts/Torus-Bold.woff","rel":"stylesheet"}],["meta",{"name":"referrer","content":"no-referrer"}]],"locales":{"/":{"lang":"zh-CN","title":"osu! 新人群","description":"一个为新人而生的群聊团体。"}}}');var Dt=On($4),U4=sf,G4=()=>{const n=If({history:U4(wc("/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(e,t,a)=>a||(e.hash?{el:e.hash}:{top:0})});return n.beforeResolve(async(e,t)=>{if(e.path!==t.path||t===Ve){const a=Aa(e.fullPath);if(a.path!==e.fullPath)return a.path;const i=await a.loader();e.meta={...a.meta,_pageChunk:i}}else e.path===t.path&&(e.meta=t.meta)}),n},Y4=n=>{n.component("ClientOnly",Zr),n.component("Content",Qr),n.component("RouteLink",zi)},j4=(n,e,t)=>{const a=A(()=>e.currentRoute.value.path),i=wl((x,C)=>({get(){return x(),e.currentRoute.value.meta._pageChunk},set(B){e.currentRoute.value.meta._pageChunk=B,C()}})),r=A(()=>gt.resolveLayouts(t)),s=A(()=>gt.resolveRouteLocale(Dt.value.locales,a.value)),o=A(()=>gt.resolveSiteLocaleData(Dt.value,s.value)),l=A(()=>i.value.comp),u=A(()=>i.value.data),c=A(()=>u.value.frontmatter),d=A(()=>gt.resolvePageHeadTitle(u.value,o.value)),m=A(()=>gt.resolvePageHead(d.value,c.value,o.value)),f=A(()=>gt.resolvePageLang(u.value,o.value)),g=A(()=>gt.resolvePageLayout(u.value,r.value)),w={layouts:r,pageData:u,pageComponent:l,pageFrontmatter:c,pageHead:m,pageHeadTitle:d,pageLang:f,pageLayout:g,redirects:Mr,routeLocale:s,routePath:a,routes:zt,siteData:Dt,siteLocaleData:o,frontmatter:c,head:m,headTitle:d,lang:f,page:u,site:Dt,siteLocale:o};return n.provide(Xr,w),Object.defineProperties(n.config.globalProperties,{$pageFrontmatter:{get:()=>c.value},$pageHead:{get:()=>m.value},$pageHeadTitle:{get:()=>d.value},$pageLang:{get:()=>f.value},$pageData:{get:()=>u.value},$routeLocale:{get:()=>s.value},$withBase:{get:()=>ns},$frontmatter:{get:()=>c.value},$head:{get:()=>m.value},$headTitle:{get:()=>d.value},$lang:{get:()=>f.value},$page:{get:()=>u.value},$site:{get:()=>Dt.value},$siteLocale:{get:()=>o.value}}),w},W4=([n,e,t=""])=>{const a=Object.entries(e).map(([o,l])=>_e(l)?`[${o}=${JSON.stringify(l)}]`:l?`[${o}]`:"").join(""),i=`head > ${n}${a}`;return Array.from(document.querySelectorAll(i)).find(o=>o.innerText===t)??null},J4=([n,e,t])=>{if(!_e(n))return null;const a=document.createElement(n);return Wr(e)&&Object.entries(e).forEach(([i,r])=>{_e(r)?a.setAttribute(i,r):r&&a.setAttribute(i,"")}),_e(t)&&a.appendChild(document.createTextNode(t)),a},q4=()=>{const n=Cf(),e=Mf();let t=[];const a=()=>{n.value.forEach(s=>{const o=W4(s);o&&t.push(o)})},i=()=>{const s=[];return n.value.forEach(o=>{const l=J4(o);l&&s.push(l)}),s},r=()=>{document.documentElement.lang=e.value;const s=i();t.forEach((o,l)=>{const u=s.findIndex(c=>o.isEqualNode(c));u===-1?(o.remove(),delete t[l]):s.splice(u,1)}),s.forEach(o=>document.head.appendChild(o)),t=[...t.filter(o=>!!o),...s]};lt(Df,r),Jn(()=>{a(),Hn(n,r,{immediate:!1})})},X4=ip,Z4=async()=>{const n=X4({name:"Vuepress",setup(){q4();for(const i of ti)i.setup?.();const t=ti.flatMap(({rootComponents:i=[]})=>i.map(r=>en(r))),a=Rf();return()=>[en(a.value),t]}}),e=G4();Y4(n),j4(n,e,ti);for(const t of ti)await t.enhance?.({app:n,router:e,siteData:Dt});return n.use(e),{app:n,router:e}};Z4().then(({app:n,router:e})=>{e.isReady().then(()=>{n.mount("#app")})});export{bn as F,Qt as T,xe as _,L as a,sn as b,U as c,Z4 as createVueApp,ke as d,cm as e,vn as f,pe as g,_n as h,Jn as i,Cn as j,hn as k,zn as n,F as o,Oa as r,tn as t,xn as w};
