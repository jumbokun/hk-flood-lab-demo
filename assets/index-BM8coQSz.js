var u0=Object.defineProperty;var d0=(n,e,t)=>e in n?u0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var te=(n,e,t)=>d0(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function f0(n,e,t,i,s=1){const r=t*i,a=new Float32Array(r),o=new Uint8Array(r),l=[],c=[],u=(f,g)=>{l.push(f),c.push(g);let _=l.length-1;for(;_>0;){const m=_-1>>1;if(l[m]<=l[_])break;[l[m],l[_]]=[l[_],l[m]],[c[m],c[_]]=[c[_],c[m]],_=m}},d=()=>{const f=l[0],g=c[0],_=l.pop(),m=c.pop();if(l.length){l[0]=_,c[0]=m;let p=0;for(;;){const x=2*p+1,M=x+1;let w=p;if(x<l.length&&l[x]<l[w]&&(w=x),M<l.length&&l[M]<l[w]&&(w=M),w===p)break;[l[w],l[p]]=[l[p],l[w]],[c[w],c[p]]=[c[p],c[w]],p=w}}return[f,g]};for(let f=0;f<r;f++){const g=f%t,_=f/t|0;(e[f]||g===0||_===0||g===t-1||_===i-1)&&(o[f]=1,a[f]=e[f]?-1e9:n[f],u(a[f],f))}for(;l.length;){const[f,g]=d(),_=g%t,m=g/t|0,p=[g-1,g+1,g-t,g+t];for(let x=0;x<4;x++){if(x===0&&_===0||x===1&&_===t-1||x===2&&m===0||x===3&&m===i-1)continue;const M=p[x];o[M]||(o[M]=1,a[M]=Math.max(f,n[M]),u(a[M],M))}}const h=new Uint8Array(r);for(let f=0;f<r;f++)!e[f]&&a[f]-n[f]>s&&(h[f]=1);return h}function p0(n,e,t,i,s){const r=i*s,a=new Uint8Array(r).fill(99);for(let l=0;l<s;l++)for(let c=0;c<i;c++){const u=l*i+c;if(e[u]){a[u]=0;continue}let d=99;for(let h=-3;h<=3;h++)for(let f=-3;f<=3;f++){const g=c+f,_=l+h;if(!(g<0||_<0||g>=i||_>=s)&&e[_*i+g]===1){const m=Math.max(Math.abs(f),Math.abs(h));m<d&&(d=m)}}a[u]=d}const o=new Uint8Array(r);for(let l=0;l<s;l++)for(let c=0;c<i;c++){const u=l*i+c;if(e[u]||a[u]>2)continue;let d=!1;for(let h=-3;h<=3&&!d;h++)for(let f=-3;f<=3;f++){const g=c+f,_=l+h;if(g<0||_<0||g>=i||_>=s)continue;const m=_*i+g;if(!e[m]&&t[m]>0&&a[m]>a[u]&&n[m]>n[u]+.3){d=!0;break}}d&&(o[u]=1)}return o}function m0(n,e,t,i,s,r=3,a=.5){const o=new Float32Array(i*s);for(let l=0;l<s;l++)for(let c=0;c<i;c++){const u=l*i+c,d=t[u];if(d<=0||e[u])continue;let h=u,f=n[u];for(let g=-r;g<=r;g++)for(let _=-r;_<=r;_++){const m=c+_,p=l+g;if(m<0||p<0||m>=i||p>=s)continue;const x=p*i+m;if(e[x])continue;const M=n[x];M>f&&M<=n[u]+8&&(f=M,h=x)}f-n[u]>=a?o[h]=Math.max(o[h],d):o[u]=Math.max(o[u],d)}return o}const Pl="./".replace(/\/$/,"");async function Br(n){const e=await fetch(n,{cache:"no-cache"});if(!e.ok)throw new Error(`${n}: ${e.status}`);return e.json()}async function cs(n,e){const t=await fetch(n);if(!t.ok)throw new Error(`${n}: ${t.status}`);const i=await t.arrayBuffer();if(i.byteLength!==e*4)throw new Error(`${n}: unexpected size ${i.byteLength}`);return new Float32Array(i)}async function g0(n,e){const t=await fetch(n);if(!t.ok)throw new Error(`${n}: ${t.status}`);const i=await t.arrayBuffer();if(i.byteLength!==e)throw new Error(`${n}: unexpected size ${i.byteLength}`);return new Uint8Array(i)}function vd(n){return new Promise(e=>{const t=new Image;t.crossOrigin="anonymous",t.onload=()=>e(t),t.onerror=()=>e(null),t.src=n})}function hs(n,e,t){const i=new n.constructor(n.length);for(let s=0;s<t;s++)i.set(n.subarray(s*e,(s+1)*e),(t-1-s)*e);return i}async function v0(){return Br(`${Pl}/scenes/index.json`)}async function _0(){return Br(`${Pl}/events/index.json`)}async function x0(n){return Br(`${Pl}/events/${n}.json`)}async function M0(n,e){const t=`${Pl}/scenes/${n}`;e?.(.05,"meta");const i=await Br(`${t}/meta.json`),s=i.cols,r=i.rows;e?.(.15,"dem");const[a,o,l,c,u,d,h,f,g]=await Promise.all([cs(`${t}/dem.bin`,s*r),g0(`${t}/mask.bin`,s*r),cs(`${t}/bldh.bin`,s*r).catch(()=>new Float32Array(s*r)),cs(`${t}/expo.bin`,s*r).catch(()=>new Float32Array(s*r)),Br(`${t}/buildings.json`).catch(()=>({buildings:[]})),cs(`${t}/chan.bin`,s*r*3).catch(()=>cs(`${t}/chan.bin`,s*r).then(S=>{const b=new Float32Array(s*r*3);for(let H=0;H<s*r;H++)b[H*3]=S[H],b[H*3+2]=.05;return b})).catch(()=>new Float32Array(s*r*3)),cs(`${t}/ug.bin`,s*r).catch(()=>new Float32Array(s*r)),cs(`${t}/sg_cell.bin`,s*r*8).catch(()=>null),cs(`${t}/sg_face.bin`,s*r*8).catch(()=>null)]),_=await Br(`${t}/measures.json`).catch(()=>null);e?.(.55,"textures");const[m,p]=await Promise.all([vd(`${t}/imagery.jpg`),vd(`${t}/basemap.jpg`)]);e?.(.95,"done");const x=hs(a,s,r),M=hs(o,s,r),w=f0(x,M,s,r,2),I=hs(l,s,r),C=m0(x,M,hs(c,s,r),s,r),P=p0(x,M,C,s,r),U=f?hs(f,s*8,r):null,ne=new Uint8Array(s*r);if(U)for(let S=0;S<s*r;S++)U[S*8+7]-U[S*8]>3&&(ne[S]=1);return{meta:i,dem:x,mask:M,bldh:I,expo:C,basin:w,rim:P,chan:hs(d,s*3,r),ug:hs(h,s,r),sgCell:U,sgFace:g?hs(g,s*8,r):null,steep:ne,buildings:u.buildings,imagery:m,basemap:p,savedMeasures:_}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ru="169",Hr={ROTATE:0,DOLLY:1,PAN:2},Nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},y0=0,_d=1,S0=2,Wp=1,w0=2,Yi=3,Ts=0,Gn=1,ni=2,ws=0,Vr=1,ol=2,xd=3,Md=4,b0=5,Vs=100,T0=101,E0=102,A0=103,C0=104,R0=200,P0=201,D0=202,L0=203,Qc=204,eh=205,I0=206,U0=207,N0=208,F0=209,O0=210,k0=211,z0=212,B0=213,H0=214,th=0,nh=1,ih=2,Yr=3,sh=4,rh=5,ah=6,oh=7,$p=0,V0=1,G0=2,bs=0,W0=1,$0=2,X0=3,q0=4,Y0=5,j0=6,K0=7,Xp=300,jr=301,Kr=302,lh=303,ch=304,Dl=306,hh=1e3,ii=1001,uh=1002,Kt=1003,Z0=1004,mo=1005,pi=1006,cc=1007,ys=1008,ts=1009,qp=1010,Yp=1011,Ka=1012,au=1013,js=1014,Yn=1015,so=1016,ou=1017,lu=1018,Zr=1020,jp=35902,Kp=1021,Zp=1022,Hn=1023,Jp=1024,Qp=1025,Gr=1026,Jr=1027,cu=1028,hu=1029,em=1030,uu=1031,du=1033,Ko=33776,Zo=33777,Jo=33778,Qo=33779,dh=35840,fh=35841,ph=35842,mh=35843,gh=36196,vh=37492,_h=37496,xh=37808,Mh=37809,yh=37810,Sh=37811,wh=37812,bh=37813,Th=37814,Eh=37815,Ah=37816,Ch=37817,Rh=37818,Ph=37819,Dh=37820,Lh=37821,el=36492,Ih=36494,Uh=36495,tm=36283,Nh=36284,Fh=36285,Oh=36286,J0=3200,Q0=3201,ev=0,tv=1,Ms="",ui="srgb",As="srgb-linear",fu="display-p3",Ll="display-p3-linear",ll="linear",Ht="srgb",cl="rec709",hl="p3",vr=7680,yd=519,nv=512,iv=513,sv=514,nm=515,rv=516,av=517,ov=518,lv=519,Sd=35044,wi="300 es",Ki=2e3,ul=2001;class nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wd=1234567;const ka=Math.PI/180,Za=180/Math.PI;function ir(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]).toLowerCase()}function Mn(n,e,t){return Math.max(e,Math.min(t,n))}function pu(n,e){return(n%e+e)%e}function cv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function hv(n,e,t){return n!==e?(t-n)/(e-n):0}function za(n,e,t){return(1-t)*n+t*e}function uv(n,e,t,i){return za(n,e,1-Math.exp(-t*i))}function dv(n,e=1){return e-Math.abs(pu(n,e*2)-e)}function fv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function pv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function mv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function gv(n,e){return n+Math.random()*(e-n)}function vv(n){return n*(.5-Math.random())}function _v(n){n!==void 0&&(wd=n);let e=wd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xv(n){return n*ka}function Mv(n){return n*Za}function yv(n){return(n&n-1)===0&&n!==0}function Sv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function bv(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),d=r((e-i)/2),h=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ir(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const hi={DEG2RAD:ka,RAD2DEG:Za,generateUUID:ir,clamp:Mn,euclideanModulo:pu,mapLinear:cv,inverseLerp:hv,lerp:za,damp:uv,pingpong:dv,smoothstep:fv,smootherstep:pv,randInt:mv,randFloat:gv,randFloatSpread:vv,seededRandom:_v,degToRad:xv,radToDeg:Mv,isPowerOfTwo:yv,ceilPowerOfTwo:Sv,floorPowerOfTwo:wv,setQuaternionFromProperEuler:bv,normalize:zn,denormalize:Ir};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,i,s,r,a,o,l,c){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],x=s[1],M=s[4],w=s[7],I=s[2],C=s[5],P=s[8];return r[0]=a*_+o*x+l*I,r[3]=a*m+o*M+l*C,r[6]=a*p+o*w+l*P,r[1]=c*_+u*x+d*I,r[4]=c*m+u*M+d*C,r[7]=c*p+u*w+d*P,r[2]=h*_+f*x+g*I,r[5]=h*m+f*M+g*C,r[8]=h*p+f*w+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=t*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*c-u*i)*_,e[2]=(o*i-s*a)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(hc.makeScale(e,t)),this}rotate(e){return this.premultiply(hc.makeRotation(-e)),this}translate(e,t){return this.premultiply(hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hc=new ht;function im(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function dl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tv(){const n=dl("canvas");return n.style.display="block",n}const bd={};function tl(n){n in bd||(bd[n]=!0,console.warn(n))}function Ev(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Av(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Td=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ed=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ma={[As]:{transfer:ll,primaries:cl,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ui]:{transfer:Ht,primaries:cl,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ll]:{transfer:ll,primaries:hl,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Ed),fromReference:n=>n.applyMatrix3(Td)},[fu]:{transfer:Ht,primaries:hl,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ed),fromReference:n=>n.applyMatrix3(Td).convertLinearToSRGB()}},Rv=new Set([As,Ll]),Et={enabled:!0,_workingColorSpace:As,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Rv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ma[e].toReference,s=Ma[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ma[n].primaries},getTransfer:function(n){return n===Ms?ll:Ma[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Ma[e].luminanceCoefficients)}};function Wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function uc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _r;class Pv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_r===void 0&&(_r=dl("canvas")),_r.width=e.width,_r.height=e.height;const i=_r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_r}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wr(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wr(t[i]/255)*255):t[i]=Wr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dv=0;class sm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=ir(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(dc(s[a].image)):r.push(dc(s[a]))}else r=dc(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function dc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lv=0;class In extends nr{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,i=ii,s=ii,r=pi,a=ys,o=Hn,l=ts,c=In.DEFAULT_ANISOTROPY,u=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=ir(),this.name="",this.source=new sm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hh:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hh:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Xp;In.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,t=0,i=0,s=1){Qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,w=(f+1)/2,I=(p+1)/2,C=(u+h)/4,P=(d+_)/4,U=(g+m)/4;return M>w&&M>I?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=C/i,r=P/i):w>I?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=C/s,r=U/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=P/r,s=U/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Iv extends nr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new In(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends Iv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class rm extends In{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uv extends In{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ks{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const h=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==f||u!==g){let m=1-o;const p=l*h+c*f+u*g+d*_,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const I=Math.sqrt(M),C=Math.atan2(I,p*x);m=Math.sin(m*C)/I,o=Math.sin(o*C)/I}const w=o*x;if(l=l*m+h*w,c=c*m+f*w,u=u*m+g*w,d=d*m+_*w,m===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=I,c*=I,u*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ad.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fc.copy(this).projectOnVector(e),this.sub(fc)}reflect(e){return this.sub(fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fc=new O,Ad=new Ks;class Ui{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_i):_i.fromBufferAttribute(r,a),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),go.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),go.copy(i.boundingBox)),go.applyMatrix4(e.matrixWorld),this.union(go)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),vo.subVectors(this.max,ya),xr.subVectors(e.a,ya),Mr.subVectors(e.b,ya),yr.subVectors(e.c,ya),us.subVectors(Mr,xr),ds.subVectors(yr,Mr),Is.subVectors(xr,yr);let t=[0,-us.z,us.y,0,-ds.z,ds.y,0,-Is.z,Is.y,us.z,0,-us.x,ds.z,0,-ds.x,Is.z,0,-Is.x,-us.y,us.x,0,-ds.y,ds.x,0,-Is.y,Is.x,0];return!pc(t,xr,Mr,yr,vo)||(t=[1,0,0,0,1,0,0,0,1],!pc(t,xr,Mr,yr,vo))?!1:(_o.crossVectors(us,ds),t=[_o.x,_o.y,_o.z],pc(t,xr,Mr,yr,vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hi=[new O,new O,new O,new O,new O,new O,new O,new O],_i=new O,go=new Ui,xr=new O,Mr=new O,yr=new O,us=new O,ds=new O,Is=new O,ya=new O,vo=new O,_o=new O,Us=new O;function pc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Us.fromArray(n,r);const o=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),l=e.dot(Us),c=t.dot(Us),u=i.dot(Us);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Nv=new Ui,Sa=new O,mc=new O;class Ni{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Nv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const t=Sa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Sa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(mc)),this.expandByPoint(Sa.copy(e.center).sub(mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vi=new O,gc=new O,xo=new O,fs=new O,vc=new O,Mo=new O,_c=new O;class ro{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){gc.copy(e).add(t).multiplyScalar(.5),xo.copy(t).sub(e).normalize(),fs.copy(this.origin).sub(gc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(xo),o=fs.dot(this.direction),l=-fs.dot(xo),c=fs.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(gc).addScaledVector(xo,h),f}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);const i=Vi.dot(this.direction),s=Vi.dot(Vi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,i,s,r){vc.subVectors(t,e),Mo.subVectors(i,e),_c.crossVectors(vc,Mo);let a=this.direction.dot(_c),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fs.subVectors(this.origin,e);const l=o*this.direction.dot(Mo.crossVectors(fs,Mo));if(l<0)return null;const c=o*this.direction.dot(vc.cross(fs));if(c<0||l+c>a)return null;const u=-o*fs.dot(_c);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,i,s,r,a,o,l,c,u,d,h,f,g,_,m){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,d,h,f,g,_,m)}set(e,t,i,s,r,a,o,l,c,u,d,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Sr.setFromMatrixColumn(e,0).length(),r=1/Sr.setFromMatrixColumn(e,1).length(),a=1/Sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fv,e,Ov)}lookAt(e,t,i){const s=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),ps.crossVectors(i,Qn),ps.lengthSq()===0&&(Math.abs(i.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),ps.crossVectors(i,Qn)),ps.normalize(),yo.crossVectors(Qn,ps),s[0]=ps.x,s[4]=yo.x,s[8]=Qn.x,s[1]=ps.y,s[5]=yo.y,s[9]=Qn.y,s[2]=ps.z,s[6]=yo.z,s[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],x=i[3],M=i[7],w=i[11],I=i[15],C=s[0],P=s[4],U=s[8],ne=s[12],S=s[1],b=s[5],H=s[9],z=s[13],X=s[2],j=s[6],q=s[10],F=s[14],ee=s[3],pe=s[7],ce=s[11],ae=s[15];return r[0]=a*C+o*S+l*X+c*ee,r[4]=a*P+o*b+l*j+c*pe,r[8]=a*U+o*H+l*q+c*ce,r[12]=a*ne+o*z+l*F+c*ae,r[1]=u*C+d*S+h*X+f*ee,r[5]=u*P+d*b+h*j+f*pe,r[9]=u*U+d*H+h*q+f*ce,r[13]=u*ne+d*z+h*F+f*ae,r[2]=g*C+_*S+m*X+p*ee,r[6]=g*P+_*b+m*j+p*pe,r[10]=g*U+_*H+m*q+p*ce,r[14]=g*ne+_*z+m*F+p*ae,r[3]=x*C+M*S+w*X+I*ee,r[7]=x*P+M*b+w*j+I*pe,r[11]=x*U+M*H+w*q+I*ce,r[15]=x*ne+M*z+w*F+I*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*o*h+i*c*h+s*o*f-i*l*f)+_*(+t*l*f-t*c*h+r*a*h-s*a*f+s*c*u-r*l*u)+m*(+t*c*d-t*o*f-r*a*d+i*a*f+r*o*u-i*c*u)+p*(-s*o*u-t*l*d+t*o*h+s*a*d-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=d*m*c-_*h*c+_*l*f-o*m*f-d*l*p+o*h*p,M=g*h*c-u*m*c-g*l*f+a*m*f+u*l*p-a*h*p,w=u*_*c-g*d*c+g*o*f-a*_*f-u*o*p+a*d*p,I=g*d*l-u*_*l-g*o*h+a*_*h+u*o*m-a*d*m,C=t*x+i*M+s*w+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=x*P,e[1]=(_*h*r-d*m*r-_*s*f+i*m*f+d*s*p-i*h*p)*P,e[2]=(o*m*r-_*l*r+_*s*c-i*m*c-o*s*p+i*l*p)*P,e[3]=(d*l*r-o*h*r-d*s*c+i*h*c+o*s*f-i*l*f)*P,e[4]=M*P,e[5]=(u*m*r-g*h*r+g*s*f-t*m*f-u*s*p+t*h*p)*P,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*P,e[7]=(a*h*r-u*l*r+u*s*c-t*h*c-a*s*f+t*l*f)*P,e[8]=w*P,e[9]=(g*d*r-u*_*r-g*i*f+t*_*f+u*i*p-t*d*p)*P,e[10]=(a*_*r-g*o*r+g*i*c-t*_*c-a*i*p+t*o*p)*P,e[11]=(u*o*r-a*d*r-u*i*c+t*d*c+a*i*f-t*o*f)*P,e[12]=I*P,e[13]=(u*_*s-g*d*s+g*i*h-t*_*h-u*i*m+t*d*m)*P,e[14]=(g*o*s-a*_*s-g*i*l+t*_*l+a*i*m-t*o*m)*P,e[15]=(a*d*s-u*o*s+u*i*l-t*d*l-a*i*h+t*o*h)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,_=a*u,m=a*d,p=o*d,x=l*c,M=l*u,w=l*d,I=i.x,C=i.y,P=i.z;return s[0]=(1-(_+p))*I,s[1]=(f+w)*I,s[2]=(g-M)*I,s[3]=0,s[4]=(f-w)*C,s[5]=(1-(h+p))*C,s[6]=(m+x)*C,s[7]=0,s[8]=(g+M)*P,s[9]=(m-x)*P,s[10]=(1-(h+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Sr.set(s[0],s[1],s[2]).length();const a=Sr.set(s[4],s[5],s[6]).length(),o=Sr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],xi.copy(this);const c=1/r,u=1/a,d=1/o;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=u,xi.elements[5]*=u,xi.elements[6]*=u,xi.elements[8]*=d,xi.elements[9]*=d,xi.elements[10]*=d,t.setFromRotationMatrix(xi),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Ki){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s);let f,g;if(o===Ki)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ul)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ki){const l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(a-r),h=(t+e)*c,f=(i+s)*u;let g,_;if(o===Ki)g=(a+r)*d,_=-2*d;else if(o===ul)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Sr=new O,xi=new Lt,Fv=new O(0,0,0),Ov=new O(1,1,1),ps=new O,yo=new O,Qn=new O,Cd=new Lt,Rd=new Ks;class is{constructor(e=0,t=0,i=0,s=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rd.setFromEuler(this),this.setFromQuaternion(Rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class mu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kv=0;const Pd=new O,wr=new Ks,Gi=new Lt,So=new O,wa=new O,zv=new O,Bv=new Ks,Dd=new O(1,0,0),Ld=new O(0,1,0),Id=new O(0,0,1),Ud={type:"added"},Hv={type:"removed"},br={type:"childadded",child:null},xc={type:"childremoved",child:null};class Wn extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new O,t=new is,i=new Ks,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new ht}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Dd,e)}rotateY(e){return this.rotateOnAxis(Ld,e)}rotateZ(e){return this.rotateOnAxis(Id,e)}translateOnAxis(e,t){return Pd.copy(e).applyQuaternion(this.quaternion),this.position.add(Pd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dd,e)}translateY(e){return this.translateOnAxis(Ld,e)}translateZ(e){return this.translateOnAxis(Id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?So.copy(e):So.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(wa,So,this.up):Gi.lookAt(So,wa,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),wr.setFromRotationMatrix(Gi),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ud),br.child=e,this.dispatchEvent(br),br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hv),xc.child=e,this.dispatchEvent(xc),xc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ud),br.child=e,this.dispatchEvent(br),br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,zv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,Bv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Wn.DEFAULT_UP=new O(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new O,Wi=new O,Mc=new O,$i=new O,Tr=new O,Er=new O,Nd=new O,yc=new O,Sc=new O,wc=new O,bc=new Qt,Tc=new Qt,Ec=new Qt;class bi{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Mi.subVectors(e,t),s.cross(Mi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Mi.subVectors(s,t),Wi.subVectors(i,t),Mc.subVectors(e,t);const a=Mi.dot(Mi),o=Mi.dot(Wi),l=Mi.dot(Mc),c=Wi.dot(Wi),u=Wi.dot(Mc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$i.x),l.addScaledVector(a,$i.y),l.addScaledVector(o,$i.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return bc.setScalar(0),Tc.setScalar(0),Ec.setScalar(0),bc.fromBufferAttribute(e,t),Tc.fromBufferAttribute(e,i),Ec.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(bc,r.x),a.addScaledVector(Tc,r.y),a.addScaledVector(Ec,r.z),a}static isFrontFacing(e,t,i,s){return Mi.subVectors(i,t),Wi.subVectors(e,t),Mi.cross(Wi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),Mi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return bi.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Tr.subVectors(s,i),Er.subVectors(r,i),yc.subVectors(e,i);const l=Tr.dot(yc),c=Er.dot(yc);if(l<=0&&c<=0)return t.copy(i);Sc.subVectors(e,s);const u=Tr.dot(Sc),d=Er.dot(Sc);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Tr,a);wc.subVectors(e,r);const f=Tr.dot(wc),g=Er.dot(wc);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Er,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Nd.subVectors(r,s),o=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(Nd,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(i).addScaledVector(Tr,a).addScaledVector(Er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const am={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},wo={h:0,s:0,l:0};function Ac(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class at{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Et.workingColorSpace){if(e=pu(e,1),t=Mn(t,0,1),i=Mn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ac(a,r,e+1/3),this.g=Ac(a,r,e),this.b=Ac(a,r,e-1/3)}return Et.toWorkingColorSpace(this,s),this}setStyle(e,t=ui){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const i=am[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}copyLinearToSRGB(e){return this.r=uc(e.r),this.g=uc(e.g),this.b=uc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Et.fromWorkingColorSpace(Ln.copy(this),e),Math.round(Mn(Ln.r*255,0,255))*65536+Math.round(Mn(Ln.g*255,0,255))*256+Math.round(Mn(Ln.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,r=Ln.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=ui){Et.fromWorkingColorSpace(Ln.copy(this),e);const t=Ln.r,i=Ln.g,s=Ln.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+t,ms.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ms),e.getHSL(wo);const i=za(ms.h,wo.h,t),s=za(ms.s,wo.s,t),r=za(ms.l,wo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new at;at.NAMES=am;let Vv=0;class sa extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=Vr,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=eh,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==Ts&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qc&&(i.blendSrc=this.blendSrc),this.blendDst!==eh&&(i.blendDst=this.blendDst),this.blendEquation!==Vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gs extends sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=$p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new O,bo=new be;class An{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sd,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bo.fromBufferAttribute(this,t),bo.applyMatrix3(e),this.setXY(t,bo.x,bo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ir(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),i=zn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),i=zn(i,this.array),s=zn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),i=zn(i,this.array),s=zn(s,this.array),r=zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sd&&(e.usage=this.usage),e}}class om extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class lm extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ct extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Gv=0;const li=new Lt,Cc=new Wn,Ar=new O,ei=new Ui,ba=new Ui,xn=new O;class en extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(im(e)?lm:om)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ht().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,i){return li.makeTranslation(e,t,i),this.applyMatrix4(li),this}scale(e,t,i){return li.makeScale(e,t,i),this.applyMatrix4(li),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ba.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(ei.min,ba.min),ei.expandByPoint(xn),xn.addVectors(ei.max,ba.max),ei.expandByPoint(xn)):(ei.expandByPoint(ba.min),ei.expandByPoint(ba.max))}ei.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)xn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(xn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)xn.fromBufferAttribute(o,c),l&&(Ar.fromBufferAttribute(e,c),xn.add(Ar)),s=Math.max(s,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new O,l[U]=new O;const c=new O,u=new O,d=new O,h=new be,f=new be,g=new be,_=new O,m=new O;function p(U,ne,S){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,ne),d.fromBufferAttribute(i,S),h.fromBufferAttribute(r,U),f.fromBufferAttribute(r,ne),g.fromBufferAttribute(r,S),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const b=1/(f.x*g.y-g.x*f.y);isFinite(b)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(b),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(b),o[U].add(_),o[ne].add(_),o[S].add(_),l[U].add(m),l[ne].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let U=0,ne=x.length;U<ne;++U){const S=x[U],b=S.start,H=S.count;for(let z=b,X=b+H;z<X;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const M=new O,w=new O,I=new O,C=new O;function P(U){I.fromBufferAttribute(s,U),C.copy(I);const ne=o[U];M.copy(ne),M.sub(I.multiplyScalar(I.dot(ne))).normalize(),w.crossVectors(C,ne);const b=w.dot(l[U])<0?-1:1;a.setXYZW(U,M.x,M.y,M.z,b)}for(let U=0,ne=x.length;U<ne;++U){const S=x[U],b=S.start,H=S.count;for(let z=b,X=b+H;z<X;z+=3)P(e.getX(z+0)),P(e.getX(z+1)),P(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new An(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fd=new Lt,Ns=new ro,To=new Ni,Od=new O,Eo=new O,Ao=new O,Co=new O,Rc=new O,Ro=new O,kd=new O,Po=new O;class It extends Wn{constructor(e=new en,t=new Gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Rc.fromBufferAttribute(d,e),a?Ro.addScaledVector(Rc,u):Ro.addScaledVector(Rc.sub(t),u))}t.add(Ro)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(r),Ns.copy(e.ray).recast(e.near),!(To.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(To,Od)===null||Ns.origin.distanceToSquared(Od)>(e.far-e.near)**2))&&(Fd.copy(r).invert(),Ns.copy(e.ray).applyMatrix4(Fd),!(i.boundingBox!==null&&Ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let w=x,I=M;w<I;w+=3){const C=o.getX(w),P=o.getX(w+1),U=o.getX(w+2);s=Do(this,p,e,i,c,u,d,C,P,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=o.getX(m),M=o.getX(m+1),w=o.getX(m+2);s=Do(this,a,e,i,c,u,d,x,M,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=x,I=M;w<I;w+=3){const C=w,P=w+1,U=w+2;s=Do(this,p,e,i,c,u,d,C,P,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,M=m+1,w=m+2;s=Do(this,a,e,i,c,u,d,x,M,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Wv(n,e,t,i,s,r,a,o){let l;if(e.side===Gn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ts,o),l===null)return null;Po.copy(o),Po.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Po);return c<t.near||c>t.far?null:{distance:c,point:Po.clone(),object:n}}function Do(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Eo),n.getVertexPosition(l,Ao),n.getVertexPosition(c,Co);const u=Wv(n,e,t,i,Eo,Ao,Co,kd);if(u){const d=new O;bi.getBarycoord(kd,Eo,Ao,Co,d),s&&(u.uv=bi.getInterpolatedAttribute(s,o,l,c,d,new be)),r&&(u.uv1=bi.getInterpolatedAttribute(r,o,l,c,d,new be)),a&&(u.normal=bi.getInterpolatedAttribute(a,o,l,c,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new O,materialIndex:0};bi.getNormal(Eo,Ao,Co,h.normal),u.face=h,u.barycoord=d}return u}class Zs extends en{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(d,2));function g(_,m,p,x,M,w,I,C,P,U,ne){const S=w/P,b=I/U,H=w/2,z=I/2,X=C/2,j=P+1,q=U+1;let F=0,ee=0;const pe=new O;for(let ce=0;ce<q;ce++){const ae=ce*b-z;for(let me=0;me<j;me++){const oe=me*S-H;pe[_]=oe*x,pe[m]=ae*M,pe[p]=X,c.push(pe.x,pe.y,pe.z),pe[_]=0,pe[m]=0,pe[p]=C>0?1:-1,u.push(pe.x,pe.y,pe.z),d.push(me/P),d.push(1-ce/U),F+=1}}for(let ce=0;ce<U;ce++)for(let ae=0;ae<P;ae++){const me=h+ae+j*ce,oe=h+ae+j*(ce+1),ie=h+(ae+1)+j*(ce+1),de=h+(ae+1)+j*ce;l.push(me,oe,de),l.push(oe,ie,de),ee+=6}o.addGroup(f,ee,ne),f+=ee,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Bn(n){const e={};for(let t=0;t<n.length;t++){const i=Qr(n[t]);for(const s in i)e[s]=i[s]}return e}function $v(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Xv={clone:Qr,merge:Bn};var qv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ss extends sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qv,this.fragmentShader=Yv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.uniformsGroups=$v(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hm extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gs=new O,zd=new be,Bd=new be;class fi extends hm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Za*2*Math.atan(Math.tan(ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,t){return this.getViewBounds(e,zd,Bd),t.subVectors(Bd,zd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ka*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cr=-90,Rr=1;class jv extends Wn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fi(Cr,Rr,e,t);s.layers=this.layers,this.add(s);const r=new fi(Cr,Rr,e,t);r.layers=this.layers,this.add(r);const a=new fi(Cr,Rr,e,t);a.layers=this.layers,this.add(a);const o=new fi(Cr,Rr,e,t);o.layers=this.layers,this.add(o);const l=new fi(Cr,Rr,e,t);l.layers=this.layers,this.add(l);const c=new fi(Cr,Rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class um extends In{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:jr,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kv extends ns{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new um(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Zs(5,5,5),r=new ss({name:"CubemapFromEquirect",uniforms:Qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gn,blending:ws});r.uniforms.tEquirect.value=t;const a=new It(s,r),o=t.minFilter;return t.minFilter===ys&&(t.minFilter=pi),new jv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Pc=new O,Zv=new O,Jv=new ht;class vs{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Pc.subVectors(i,t).cross(Zv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Pc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Jv.getNormalMatrix(e),s=this.coplanarPoint(Pc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new Ni,Lo=new O;class dm{constructor(e=new vs,t=new vs,i=new vs,s=new vs,r=new vs,a=new vs){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ki){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],x=s[13],M=s[14],w=s[15];if(i[0].setComponents(l-r,h-c,m-f,w-p).normalize(),i[1].setComponents(l+r,h+c,m+f,w+p).normalize(),i[2].setComponents(l+a,h+u,m+g,w+x).normalize(),i[3].setComponents(l-a,h-u,m-g,w-x).normalize(),i[4].setComponents(l-o,h-d,m-_,w-M).normalize(),t===Ki)i[5].setComponents(l+o,h+d,m+_,w+M).normalize();else if(t===ul)i[5].setComponents(o,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){return Fs.center.set(0,0,0),Fs.radius=.7071067811865476,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Lo.x=s.normal.x>0?e.max.x:e.min.x,Lo.y=s.normal.y>0?e.max.y:e.min.y,Lo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fm(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Qv(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class ra extends en{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const x=p*h-a;for(let M=0;M<c;M++){const w=M*d-r;g.push(w,-x,0),_.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const M=x+c*p,w=x+c*(p+1),I=x+1+c*(p+1),C=x+1+c*p;f.push(M,w,C),f.push(w,I,C)}this.setIndex(f),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var e_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,n_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,o_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,c_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,h_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,f_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,p_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,w_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,b_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,T_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,E_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P_="gl_FragColor = linearToOutputTexel( gl_FragColor );",D_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,I_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,N_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,V_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,X_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,q_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,J_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Q_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ex=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ix=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ax=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ox=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_x=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ox=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_M=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,MM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,DM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:e_,alphahash_pars_fragment:t_,alphamap_fragment:n_,alphamap_pars_fragment:i_,alphatest_fragment:s_,alphatest_pars_fragment:r_,aomap_fragment:a_,aomap_pars_fragment:o_,batching_pars_vertex:l_,batching_vertex:c_,begin_vertex:h_,beginnormal_vertex:u_,bsdfs:d_,iridescence_fragment:f_,bumpmap_pars_fragment:p_,clipping_planes_fragment:m_,clipping_planes_pars_fragment:g_,clipping_planes_pars_vertex:v_,clipping_planes_vertex:__,color_fragment:x_,color_pars_fragment:M_,color_pars_vertex:y_,color_vertex:S_,common:w_,cube_uv_reflection_fragment:b_,defaultnormal_vertex:T_,displacementmap_pars_vertex:E_,displacementmap_vertex:A_,emissivemap_fragment:C_,emissivemap_pars_fragment:R_,colorspace_fragment:P_,colorspace_pars_fragment:D_,envmap_fragment:L_,envmap_common_pars_fragment:I_,envmap_pars_fragment:U_,envmap_pars_vertex:N_,envmap_physical_pars_fragment:X_,envmap_vertex:F_,fog_vertex:O_,fog_pars_vertex:k_,fog_fragment:z_,fog_pars_fragment:B_,gradientmap_pars_fragment:H_,lightmap_pars_fragment:V_,lights_lambert_fragment:G_,lights_lambert_pars_fragment:W_,lights_pars_begin:$_,lights_toon_fragment:q_,lights_toon_pars_fragment:Y_,lights_phong_fragment:j_,lights_phong_pars_fragment:K_,lights_physical_fragment:Z_,lights_physical_pars_fragment:J_,lights_fragment_begin:Q_,lights_fragment_maps:ex,lights_fragment_end:tx,logdepthbuf_fragment:nx,logdepthbuf_pars_fragment:ix,logdepthbuf_pars_vertex:sx,logdepthbuf_vertex:rx,map_fragment:ax,map_pars_fragment:ox,map_particle_fragment:lx,map_particle_pars_fragment:cx,metalnessmap_fragment:hx,metalnessmap_pars_fragment:ux,morphinstance_vertex:dx,morphcolor_vertex:fx,morphnormal_vertex:px,morphtarget_pars_vertex:mx,morphtarget_vertex:gx,normal_fragment_begin:vx,normal_fragment_maps:_x,normal_pars_fragment:xx,normal_pars_vertex:Mx,normal_vertex:yx,normalmap_pars_fragment:Sx,clearcoat_normal_fragment_begin:wx,clearcoat_normal_fragment_maps:bx,clearcoat_pars_fragment:Tx,iridescence_pars_fragment:Ex,opaque_fragment:Ax,packing:Cx,premultiplied_alpha_fragment:Rx,project_vertex:Px,dithering_fragment:Dx,dithering_pars_fragment:Lx,roughnessmap_fragment:Ix,roughnessmap_pars_fragment:Ux,shadowmap_pars_fragment:Nx,shadowmap_pars_vertex:Fx,shadowmap_vertex:Ox,shadowmask_pars_fragment:kx,skinbase_vertex:zx,skinning_pars_vertex:Bx,skinning_vertex:Hx,skinnormal_vertex:Vx,specularmap_fragment:Gx,specularmap_pars_fragment:Wx,tonemapping_fragment:$x,tonemapping_pars_fragment:Xx,transmission_fragment:qx,transmission_pars_fragment:Yx,uv_pars_fragment:jx,uv_pars_vertex:Kx,uv_vertex:Zx,worldpos_vertex:Jx,background_vert:Qx,background_frag:eM,backgroundCube_vert:tM,backgroundCube_frag:nM,cube_vert:iM,cube_frag:sM,depth_vert:rM,depth_frag:aM,distanceRGBA_vert:oM,distanceRGBA_frag:lM,equirect_vert:cM,equirect_frag:hM,linedashed_vert:uM,linedashed_frag:dM,meshbasic_vert:fM,meshbasic_frag:pM,meshlambert_vert:mM,meshlambert_frag:gM,meshmatcap_vert:vM,meshmatcap_frag:_M,meshnormal_vert:xM,meshnormal_frag:MM,meshphong_vert:yM,meshphong_frag:SM,meshphysical_vert:wM,meshphysical_frag:bM,meshtoon_vert:TM,meshtoon_frag:EM,points_vert:AM,points_frag:CM,shadow_vert:RM,shadow_frag:PM,sprite_vert:DM,sprite_frag:LM},Ce={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ii={basic:{uniforms:Bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new at(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Bn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Bn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new at(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Bn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Bn([Ce.points,Ce.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Bn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Bn([Ce.common,Ce.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Bn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Bn([Ce.sprite,Ce.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Bn([Ce.common,Ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Bn([Ce.lights,Ce.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Ii.physical={uniforms:Bn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Io={r:0,b:0,g:0},Os=new is,IM=new Lt;function UM(n,e,t,i,s,r,a){const o=new at(0);let l=r===!0?0:1,c,u,d=null,h=0,f=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:e).get(M)),M}function _(x){let M=!1;const w=g(x);w===null?p(o,l):w&&w.isColor&&(p(w,1),M=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,M){const w=g(M);w&&(w.isCubeTexture||w.mapping===Dl)?(u===void 0&&(u=new It(new Zs(1,1,1),new ss({name:"BackgroundCubeMaterial",uniforms:Qr(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Os.copy(M.backgroundRotation),Os.x*=-1,Os.y*=-1,Os.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(IM.makeRotationFromEuler(Os)),u.material.toneMapped=Et.getTransfer(w.colorSpace)!==Ht,(d!==w||h!==w.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=w,h=w.version,f=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new It(new ra(2,2),new ss({name:"BackgroundMaterial",uniforms:Qr(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Et.getTransfer(w.colorSpace)!==Ht,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=w,h=w.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,M){x.getRGB(Io,cm(n)),i.buffers.color.setClear(Io.r,Io.g,Io.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:m}}function NM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(S,b,H,z,X){let j=!1;const q=d(z,H,b);r!==q&&(r=q,c(r.object)),j=f(S,z,H,X),j&&g(S,z,H,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,w(S,b,H,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,b,H){const z=H.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let j=X[b.id];j===void 0&&(j={},X[b.id]=j);let q=j[z];return q===void 0&&(q=h(l()),j[z]=q),q}function h(S){const b=[],H=[],z=[];for(let X=0;X<t;X++)b[X]=0,H[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:H,attributeDivisors:z,object:S,attributes:{},index:null}}function f(S,b,H,z){const X=r.attributes,j=b.attributes;let q=0;const F=H.getAttributes();for(const ee in F)if(F[ee].location>=0){const ce=X[ee];let ae=j[ee];if(ae===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),ce===void 0||ce.attribute!==ae||ae&&ce.data!==ae.data)return!0;q++}return r.attributesNum!==q||r.index!==z}function g(S,b,H,z){const X={},j=b.attributes;let q=0;const F=H.getAttributes();for(const ee in F)if(F[ee].location>=0){let ce=j[ee];ce===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor));const ae={};ae.attribute=ce,ce&&ce.data&&(ae.data=ce.data),X[ee]=ae,q++}r.attributes=X,r.attributesNum=q,r.index=z}function _(){const S=r.newAttributes;for(let b=0,H=S.length;b<H;b++)S[b]=0}function m(S){p(S,0)}function p(S,b){const H=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;H[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),X[S]!==b&&(n.vertexAttribDivisor(S,b),X[S]=b)}function x(){const S=r.newAttributes,b=r.enabledAttributes;for(let H=0,z=b.length;H<z;H++)b[H]!==S[H]&&(n.disableVertexAttribArray(H),b[H]=0)}function M(S,b,H,z,X,j,q){q===!0?n.vertexAttribIPointer(S,b,H,X,j):n.vertexAttribPointer(S,b,H,z,X,j)}function w(S,b,H,z){_();const X=z.attributes,j=H.getAttributes(),q=b.defaultAttributeValues;for(const F in j){const ee=j[F];if(ee.location>=0){let pe=X[F];if(pe===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor)),pe!==void 0){const ce=pe.normalized,ae=pe.itemSize,me=e.get(pe);if(me===void 0)continue;const oe=me.buffer,ie=me.type,de=me.bytesPerElement,xe=ie===n.INT||ie===n.UNSIGNED_INT||pe.gpuType===au;if(pe.isInterleavedBufferAttribute){const ge=pe.data,Xe=ge.stride,Ne=pe.offset;if(ge.isInstancedInterleavedBuffer){for(let He=0;He<ee.locationSize;He++)p(ee.location+He,ge.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let He=0;He<ee.locationSize;He++)m(ee.location+He);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let He=0;He<ee.locationSize;He++)M(ee.location+He,ae/ee.locationSize,ie,ce,Xe*de,(Ne+ae/ee.locationSize*He)*de,xe)}else{if(pe.isInstancedBufferAttribute){for(let ge=0;ge<ee.locationSize;ge++)p(ee.location+ge,pe.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ge=0;ge<ee.locationSize;ge++)m(ee.location+ge);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let ge=0;ge<ee.locationSize;ge++)M(ee.location+ge,ae/ee.locationSize,ie,ce,ae*de,ae/ee.locationSize*ge*de,xe)}}else if(q!==void 0){const ce=q[F];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(ee.location,ce);break;case 3:n.vertexAttrib3fv(ee.location,ce);break;case 4:n.vertexAttrib4fv(ee.location,ce);break;default:n.vertexAttrib1fv(ee.location,ce)}}}}x()}function I(){U();for(const S in i){const b=i[S];for(const H in b){const z=b[H];for(const X in z)u(z[X].object),delete z[X];delete b[H]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const b=i[S.id];for(const H in b){const z=b[H];for(const X in z)u(z[X].object),delete z[X];delete b[H]}delete i[S.id]}function P(S){for(const b in i){const H=i[b];if(H[S.id]===void 0)continue;const z=H[S.id];for(const X in z)u(z[X].object),delete z[X];delete H[S.id]}}function U(){ne(),a=!0,r!==s&&(r=s,c(r.object))}function ne(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:ne,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function FM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];for(let _=0;_<h.length;_++)t.update(g,i,h[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function OM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Hn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const U=P===so&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ts&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Yn&&!U)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const P=e.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:I,maxSamples:C}}function kM(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new vs,o=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:i,M=x*4;let w=p.clippingState||null;l.value=w,w=u(g,h,M,f);for(let I=0;I!==M;++I)w[I]=t[I];p.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,w=f;M!==_;++M,w+=4)a.copy(d[M]).applyMatrix4(x,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function zM(n){let e=new WeakMap;function t(a,o){return o===lh?a.mapping=jr:o===ch&&(a.mapping=Kr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===lh||o===ch)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Kv(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class gu extends hm{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fr=4,Hd=[.125,.215,.35,.446,.526,.582],Ws=20,Dc=new gu,Vd=new at;let Lc=null,Ic=0,Uc=0,Nc=!1;const zs=(1+Math.sqrt(5))/2,Pr=1/zs,Gd=[new O(-zs,Pr,0),new O(zs,Pr,0),new O(-Pr,0,zs),new O(Pr,0,zs),new O(0,zs,-Pr),new O(0,zs,Pr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Wd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Lc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lc,Ic,Uc),this._renderer.xr.enabled=Nc,e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jr||e.mapping===Kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:so,format:Hn,colorSpace:As,depthBuffer:!1},s=$d(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$d(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BM(r)),this._blurMaterial=HM(r,e,t)}return s}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,Dc)}_sceneToCubeUV(e,t,i,s){const o=new fi(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Vd),u.toneMapping=bs,u.autoClear=!1;const f=new Gs({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),g=new It(new Zs,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Vd),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;Uo(s,x*M,p>2?M:0,M,M),u.setRenderTarget(s),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===jr||e.mapping===Kr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Uo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Dc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gd[(s-r-1)%Gd.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new It(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ws-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ws;m>Ws&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ws}`);const p=[];let x=0;for(let P=0;P<Ws;++P){const U=P/_,ne=Math.exp(-U*U/2);p.push(ne),P===0?x+=ne:P<m&&(x+=2*ne)}for(let P=0;P<p.length;P++)p[P]=p[P]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const w=this._sizeLods[s],I=3*w*(s>M-Fr?s-M+Fr:0),C=4*(this._cubeSize-w);Uo(t,I,C,3*w,2*w),l.setRenderTarget(t),l.render(d,Dc)}}function BM(n){const e=[],t=[],i=[];let s=n;const r=n-Fr+1+Hd.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Fr?l=Hd[a-n+Fr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),M=new Float32Array(m*g*f),w=new Float32Array(p*g*f);for(let C=0;C<f;C++){const P=C%3*2/3-1,U=C>2?0:-1,ne=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];x.set(ne,_*g*C),M.set(h,m*g*C);const S=[C,C,C,C,C,C];w.set(S,p*g*C)}const I=new en;I.setAttribute("position",new An(x,_)),I.setAttribute("uv",new An(M,m)),I.setAttribute("faceIndex",new An(w,p)),e.push(I),s>Fr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $d(n,e,t){const i=new ns(n,e,t);return i.texture.mapping=Dl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function HM(n,e,t){const i=new Float32Array(Ws),s=new O(0,1,0);return new ss({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ws,depthTest:!1,depthWrite:!1})}function Xd(){return new ss({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ws,depthTest:!1,depthWrite:!1})}function qd(){return new ss({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ws,depthTest:!1,depthWrite:!1})}function vu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function VM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===lh||l===ch,u=l===jr||l===Kr;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Wd(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Wd(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function GM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&tl("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function WM(n,e,t,i){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let M=0,w=x.length;M<w;M+=3){const I=x[M+0],C=x[M+1],P=x[M+2];h.push(I,C,C,P,P,I)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,w=x.length/3-1;M<w;M+=3){const I=M+0,C=M+1,P=M+2;h.push(I,C,C,P,P,I)}}else return;const m=new(im(h)?lm:om)(h,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function $M(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*a),t.update(f,i,1)}function c(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,h*a,g),t.update(f,i,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(h,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,h,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x];for(let x=0;x<_.length;x++)t.update(p,i,_[x])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function XM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function qM(n,e,t){const i=new WeakMap,s=new Qt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let S=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var f=S;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),_===!0&&(w=2),m===!0&&(w=3);let I=o.attributes.position.count*w,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*C*4*d),U=new rm(P,I,C,d);U.type=Yn,U.needsUpdate=!0;const ne=w*4;for(let b=0;b<d;b++){const H=p[b],z=x[b],X=M[b],j=I*C*4*b;for(let q=0;q<H.count;q++){const F=q*ne;g===!0&&(s.fromBufferAttribute(H,q),P[j+F+0]=s.x,P[j+F+1]=s.y,P[j+F+2]=s.z,P[j+F+3]=0),_===!0&&(s.fromBufferAttribute(z,q),P[j+F+4]=s.x,P[j+F+5]=s.y,P[j+F+6]=s.z,P[j+F+7]=0),m===!0&&(s.fromBufferAttribute(X,q),P[j+F+8]=s.x,P[j+F+9]=s.y,P[j+F+10]=s.z,P[j+F+11]=X.itemSize===4?s.w:1)}}h={count:d,texture:U,size:new be(I,C)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function YM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class pm extends In{constructor(e,t,i,s,r,a,o,l,c,u=Gr){if(u!==Gr&&u!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Gr&&(i=js),i===void 0&&u===Jr&&(i=Zr),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const mm=new In,Yd=new pm(1,1),gm=new rm,vm=new Uv,_m=new um,jd=[],Kd=[],Zd=new Float32Array(16),Jd=new Float32Array(9),Qd=new Float32Array(4);function aa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=jd[s];if(r===void 0&&(r=new Float32Array(s),jd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function fn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Il(n,e){let t=Kd[e];t===void 0&&(t=new Int32Array(e),Kd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function KM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),fn(t,e)}}function ZM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),fn(t,e)}}function JM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),fn(t,e)}}function QM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;Qd.set(i),n.uniformMatrix2fv(this.addr,!1,Qd),fn(t,i)}}function ey(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;Jd.set(i),n.uniformMatrix3fv(this.addr,!1,Jd),fn(t,i)}}function ty(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;Zd.set(i),n.uniformMatrix4fv(this.addr,!1,Zd),fn(t,i)}}function ny(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),fn(t,e)}}function sy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),fn(t,e)}}function ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),fn(t,e)}}function ay(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),fn(t,e)}}function ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),fn(t,e)}}function cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),fn(t,e)}}function hy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Yd.compareFunction=nm,r=Yd):r=mm,t.setTexture2D(e||r,s)}function uy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||vm,s)}function dy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||_m,s)}function fy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||gm,s)}function py(n){switch(n){case 5126:return jM;case 35664:return KM;case 35665:return ZM;case 35666:return JM;case 35674:return QM;case 35675:return ey;case 35676:return ty;case 5124:case 35670:return ny;case 35667:case 35671:return iy;case 35668:case 35672:return sy;case 35669:case 35673:return ry;case 5125:return ay;case 36294:return oy;case 36295:return ly;case 36296:return cy;case 35678:case 36198:case 36298:case 36306:case 35682:return hy;case 35679:case 36299:case 36307:return uy;case 35680:case 36300:case 36308:case 36293:return dy;case 36289:case 36303:case 36311:case 36292:return fy}}function my(n,e){n.uniform1fv(this.addr,e)}function gy(n,e){const t=aa(e,this.size,2);n.uniform2fv(this.addr,t)}function vy(n,e){const t=aa(e,this.size,3);n.uniform3fv(this.addr,t)}function _y(n,e){const t=aa(e,this.size,4);n.uniform4fv(this.addr,t)}function xy(n,e){const t=aa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function My(n,e){const t=aa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yy(n,e){const t=aa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Sy(n,e){n.uniform1iv(this.addr,e)}function wy(n,e){n.uniform2iv(this.addr,e)}function by(n,e){n.uniform3iv(this.addr,e)}function Ty(n,e){n.uniform4iv(this.addr,e)}function Ey(n,e){n.uniform1uiv(this.addr,e)}function Ay(n,e){n.uniform2uiv(this.addr,e)}function Cy(n,e){n.uniform3uiv(this.addr,e)}function Ry(n,e){n.uniform4uiv(this.addr,e)}function Py(n,e,t){const i=this.cache,s=e.length,r=Il(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||mm,r[a])}function Dy(n,e,t){const i=this.cache,s=e.length,r=Il(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||vm,r[a])}function Ly(n,e,t){const i=this.cache,s=e.length,r=Il(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||_m,r[a])}function Iy(n,e,t){const i=this.cache,s=e.length,r=Il(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gm,r[a])}function Uy(n){switch(n){case 5126:return my;case 35664:return gy;case 35665:return vy;case 35666:return _y;case 35674:return xy;case 35675:return My;case 35676:return yy;case 5124:case 35670:return Sy;case 35667:case 35671:return wy;case 35668:case 35672:return by;case 35669:case 35673:return Ty;case 5125:return Ey;case 36294:return Ay;case 36295:return Cy;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return Iy}}class Ny{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=py(t.type)}}class Fy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Uy(t.type)}}class Oy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Fc=/(\w+)(\])?(\[|\.)?/g;function ef(n,e){n.seq.push(e),n.map[e.id]=e}function ky(n,e,t){const i=n.name,s=i.length;for(Fc.lastIndex=0;;){const r=Fc.exec(i),a=Fc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ef(t,c===void 0?new Ny(o,n,e):new Fy(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Oy(o),ef(t,d)),t=d}}}class nl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ky(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function tf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const zy=37297;let By=0;function Hy(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Vy(n){const e=Et.getPrimaries(Et.workingColorSpace),t=Et.getPrimaries(n);let i;switch(e===t?i="":e===hl&&t===cl?i="LinearDisplayP3ToLinearSRGB":e===cl&&t===hl&&(i="LinearSRGBToLinearDisplayP3"),n){case As:case Ll:return[i,"LinearTransferOETF"];case ui:case fu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function nf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Hy(n.getShaderSource(e),a)}else return s}function Gy(n,e){const t=Vy(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Wy(n,e){let t;switch(e){case W0:t="Linear";break;case $0:t="Reinhard";break;case X0:t="Cineon";break;case q0:t="ACESFilmic";break;case j0:t="AgX";break;case K0:t="Neutral";break;case Y0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const No=new O;function $y(){Et.getLuminanceCoefficients(No);const n=No.x.toFixed(4),e=No.y.toFixed(4),t=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function qy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Yy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ua(n){return n!==""}function sf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jy=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(n){return n.replace(jy,Zy)}const Ky=new Map;function Zy(n,e){let t=ct[e];if(t===void 0){const i=Ky.get(e);if(i!==void 0)t=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kh(t)}const Jy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function af(n){return n.replace(Jy,Qy)}function Qy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function of(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===w0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function tS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case jr:case Kr:e="ENVMAP_TYPE_CUBE";break;case Dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Kr:e="ENVMAP_MODE_REFRACTION";break}return e}function iS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $p:e="ENVMAP_BLENDING_MULTIPLY";break;case V0:e="ENVMAP_BLENDING_MIX";break;case G0:e="ENVMAP_BLENDING_ADD";break}return e}function sS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function rS(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=eS(t),c=tS(t),u=nS(t),d=iS(t),h=sS(t),f=Xy(t),g=qy(r),_=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ua).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ua).join(`
`),p.length>0&&(p+=`
`)):(m=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),p=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bs?"#define TONE_MAPPING":"",t.toneMapping!==bs?ct.tonemapping_pars_fragment:"",t.toneMapping!==bs?Wy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Gy("linearToOutputTexel",t.outputColorSpace),$y(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ua).join(`
`)),a=kh(a),a=sf(a,t),a=rf(a,t),o=kh(o),o=sf(o,t),o=rf(o,t),a=af(a),o=af(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===wi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+a,w=x+p+o,I=tf(s,s.VERTEX_SHADER,M),C=tf(s,s.FRAGMENT_SHADER,w);s.attachShader(_,I),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(b){if(n.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(I).trim(),X=s.getShaderInfoLog(C).trim();let j=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,I,C);else{const F=nf(s,I,"vertex"),ee=nf(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+H+`
`+F+`
`+ee)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||X==="")&&(q=!1);q&&(b.diagnostics={runnable:j,programLog:H,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(I),s.deleteShader(C),U=new nl(s,_),ne=Yy(s,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let ne;this.getAttributes=function(){return ne===void 0&&P(this),ne};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,zy)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=By++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=C,this}let aS=0;class oS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new lS(e),t.set(e,i)),i}}class lS{constructor(e){this.id=aS++,this.code=e,this.usedTimes=0}}function cS(n,e,t,i,s,r,a){const o=new mu,l=new oS,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,b,H,z,X){const j=z.fog,q=X.geometry,F=S.isMeshStandardMaterial?z.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),pe=ee&&ee.mapping===Dl?ee.image.height:null,ce=_[S.type];S.precision!==null&&(g=s.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,me=ae!==void 0?ae.length:0;let oe=0;q.morphAttributes.position!==void 0&&(oe=1),q.morphAttributes.normal!==void 0&&(oe=2),q.morphAttributes.color!==void 0&&(oe=3);let ie,de,xe,ge;if(ce){const Pn=Ii[ce];ie=Pn.vertexShader,de=Pn.fragmentShader}else ie=S.vertexShader,de=S.fragmentShader,l.update(S),xe=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const Xe=n.getRenderTarget(),Ne=X.isInstancedMesh===!0,He=X.isBatchedMesh===!0,rt=!!S.map,nt=!!S.matcap,N=!!ee,Xt=!!S.aoMap,ot=!!S.lightMap,ut=!!S.bumpMap,Ye=!!S.normalMap,bt=!!S.displacementMap,qe=!!S.emissiveMap,D=!!S.metalnessMap,E=!!S.roughnessMap,J=S.anisotropy>0,le=S.clearcoat>0,se=S.dispersion>0,$=S.iridescence>0,we=S.sheen>0,Me=S.transmission>0,De=J&&!!S.anisotropyMap,lt=le&&!!S.clearcoatMap,_e=le&&!!S.clearcoatNormalMap,Le=le&&!!S.clearcoatRoughnessMap,Ve=$&&!!S.iridescenceMap,We=$&&!!S.iridescenceThicknessMap,Ee=we&&!!S.sheenColorMap,et=we&&!!S.sheenRoughnessMap,tt=!!S.specularMap,yt=!!S.specularColorMap,G=!!S.specularIntensityMap,Ae=Me&&!!S.transmissionMap,re=Me&&!!S.thicknessMap,he=!!S.gradientMap,Re=!!S.alphaMap,Ie=S.alphaTest>0,mt=!!S.alphaHash,qt=!!S.extensions;let Rn=bs;S.toneMapped&&(Xe===null||Xe.isXRRenderTarget===!0)&&(Rn=n.toneMapping);const vt={shaderID:ce,shaderType:S.type,shaderName:S.name,vertexShader:ie,fragmentShader:de,defines:S.defines,customVertexShaderID:xe,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:He,batchingColor:He&&X._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&X.instanceColor!==null,instancingMorph:Ne&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Xe===null?n.outputColorSpace:Xe.isXRRenderTarget===!0?Xe.texture.colorSpace:As,alphaToCoverage:!!S.alphaToCoverage,map:rt,matcap:nt,envMap:N,envMapMode:N&&ee.mapping,envMapCubeUVHeight:pe,aoMap:Xt,lightMap:ot,bumpMap:ut,normalMap:Ye,displacementMap:f&&bt,emissiveMap:qe,normalMapObjectSpace:Ye&&S.normalMapType===tv,normalMapTangentSpace:Ye&&S.normalMapType===ev,metalnessMap:D,roughnessMap:E,anisotropy:J,anisotropyMap:De,clearcoat:le,clearcoatMap:lt,clearcoatNormalMap:_e,clearcoatRoughnessMap:Le,dispersion:se,iridescence:$,iridescenceMap:Ve,iridescenceThicknessMap:We,sheen:we,sheenColorMap:Ee,sheenRoughnessMap:et,specularMap:tt,specularColorMap:yt,specularIntensityMap:G,transmission:Me,transmissionMap:Ae,thicknessMap:re,gradientMap:he,opaque:S.transparent===!1&&S.blending===Vr&&S.alphaToCoverage===!1,alphaMap:Re,alphaTest:Ie,alphaHash:mt,combine:S.combine,mapUv:rt&&m(S.map.channel),aoMapUv:Xt&&m(S.aoMap.channel),lightMapUv:ot&&m(S.lightMap.channel),bumpMapUv:ut&&m(S.bumpMap.channel),normalMapUv:Ye&&m(S.normalMap.channel),displacementMapUv:bt&&m(S.displacementMap.channel),emissiveMapUv:qe&&m(S.emissiveMap.channel),metalnessMapUv:D&&m(S.metalnessMap.channel),roughnessMapUv:E&&m(S.roughnessMap.channel),anisotropyMapUv:De&&m(S.anisotropyMap.channel),clearcoatMapUv:lt&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:_e&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:We&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:et&&m(S.sheenRoughnessMap.channel),specularMapUv:tt&&m(S.specularMap.channel),specularColorMapUv:yt&&m(S.specularColorMap.channel),specularIntensityMapUv:G&&m(S.specularIntensityMap.channel),transmissionMapUv:Ae&&m(S.transmissionMap.channel),thicknessMapUv:re&&m(S.thicknessMap.channel),alphaMapUv:Re&&m(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ye||J),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!q.attributes.uv&&(rt||Re),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:X.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:oe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Rn,decodeVideoTexture:rt&&S.map.isVideoTexture===!0&&Et.getTransfer(S.map.colorSpace)===Ht,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ni,flipSided:S.side===Gn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&S.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function x(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const H in S.defines)b.push(H),b.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(M(b,S),w(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function M(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function w(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),S.push(o.mask)}function I(S){const b=_[S.type];let H;if(b){const z=Ii[b];H=Xv.clone(z.uniforms)}else H=S.uniforms;return H}function C(S,b){let H;for(let z=0,X=u.length;z<X;z++){const j=u[z];if(j.cacheKey===b){H=j,++H.usedTimes;break}}return H===void 0&&(H=new rS(n,b,S,r),u.push(H)),H}function P(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function U(S){l.remove(S)}function ne(){l.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:I,acquireProgram:C,releaseProgram:P,releaseShaderCache:U,programs:u,dispose:ne}}function hS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function uS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function lf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,h,f,g,_,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,h,f,g,_,m){const p=a(d,h,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,h,f,g,_,m){const p=a(d,h,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||uS),i.length>1&&i.sort(h||lf),s.length>1&&s.sort(h||lf)}function u(){for(let d=e,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function dS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new cf,n.set(i,[a])):s>=r.length?(a=new cf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function fS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new at};break;case"SpotLight":t={position:new O,direction:new O,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function pS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mS=0;function gS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vS(n){const e=new fS,t=pS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new Lt,a=new Lt;function o(c){let u=0,d=0,h=0;for(let ne=0;ne<9;ne++)i.probe[ne].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,M=0,w=0,I=0,C=0,P=0;c.sort(gS);for(let ne=0,S=c.length;ne<S;ne++){const b=c[ne],H=b.color,z=b.intensity,X=b.distance,j=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=H.r*z,d+=H.g*z,h+=H.b*z;else if(b.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(b.sh.coefficients[q],z);P++}else if(b.isDirectionalLight){const q=e.get(b);if(q.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const F=b.shadow,ee=t.get(b);ee.shadowIntensity=F.intensity,ee.shadowBias=F.bias,ee.shadowNormalBias=F.normalBias,ee.shadowRadius=F.radius,ee.shadowMapSize=F.mapSize,i.directionalShadow[f]=ee,i.directionalShadowMap[f]=j,i.directionalShadowMatrix[f]=b.shadow.matrix,x++}i.directional[f]=q,f++}else if(b.isSpotLight){const q=e.get(b);q.position.setFromMatrixPosition(b.matrixWorld),q.color.copy(H).multiplyScalar(z),q.distance=X,q.coneCos=Math.cos(b.angle),q.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),q.decay=b.decay,i.spot[_]=q;const F=b.shadow;if(b.map&&(i.spotLightMap[I]=b.map,I++,F.updateMatrices(b),b.castShadow&&C++),i.spotLightMatrix[_]=F.matrix,b.castShadow){const ee=t.get(b);ee.shadowIntensity=F.intensity,ee.shadowBias=F.bias,ee.shadowNormalBias=F.normalBias,ee.shadowRadius=F.radius,ee.shadowMapSize=F.mapSize,i.spotShadow[_]=ee,i.spotShadowMap[_]=j,w++}_++}else if(b.isRectAreaLight){const q=e.get(b);q.color.copy(H).multiplyScalar(z),q.halfWidth.set(b.width*.5,0,0),q.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=q,m++}else if(b.isPointLight){const q=e.get(b);if(q.color.copy(b.color).multiplyScalar(b.intensity),q.distance=b.distance,q.decay=b.decay,b.castShadow){const F=b.shadow,ee=t.get(b);ee.shadowIntensity=F.intensity,ee.shadowBias=F.bias,ee.shadowNormalBias=F.normalBias,ee.shadowRadius=F.radius,ee.shadowMapSize=F.mapSize,ee.shadowCameraNear=F.camera.near,ee.shadowCameraFar=F.camera.far,i.pointShadow[g]=ee,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=b.shadow.matrix,M++}i.point[g]=q,g++}else if(b.isHemisphereLight){const q=e.get(b);q.skyColor.copy(b.color).multiplyScalar(z),q.groundColor.copy(b.groundColor).multiplyScalar(z),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const U=i.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==x||U.numPointShadows!==M||U.numSpotShadows!==w||U.numSpotMaps!==I||U.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,U.directionalLength=f,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=x,U.numPointShadows=M,U.numSpotShadows=w,U.numSpotMaps=I,U.numLightProbes=P,i.version=mS++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const M=c[p];if(M.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(M.isSpotLight){const w=i.spot[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const w=i.point[h];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const w=i.hemi[_];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function hf(n){const e=new vS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function _S(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new hf(n),e.set(s,[o])):r>=a.length?(o=new hf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class xS extends sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MS extends sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wS(n,e,t){let i=new dm;const s=new be,r=new be,a=new Qt,o=new xS({depthPacking:Q0}),l=new MS,c={},u=t.maxTextureSize,d={[Ts]:Gn,[Gn]:Ts,[ni]:ni},h=new ss({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:yS,fragmentShader:SS}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new en;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new It(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wp;let p=this.type;this.render=function(C,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const ne=n.getRenderTarget(),S=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),H=n.state;H.setBlending(ws),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=p!==Yi&&this.type===Yi,X=p===Yi&&this.type!==Yi;for(let j=0,q=C.length;j<q;j++){const F=C[j],ee=F.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;s.copy(ee.mapSize);const pe=ee.getFrameExtents();if(s.multiply(pe),r.copy(ee.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pe.x),s.x=r.x*pe.x,ee.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pe.y),s.y=r.y*pe.y,ee.mapSize.y=r.y)),ee.map===null||z===!0||X===!0){const ae=this.type!==Yi?{minFilter:Kt,magFilter:Kt}:{};ee.map!==null&&ee.map.dispose(),ee.map=new ns(s.x,s.y,ae),ee.map.texture.name=F.name+".shadowMap",ee.camera.updateProjectionMatrix()}n.setRenderTarget(ee.map),n.clear();const ce=ee.getViewportCount();for(let ae=0;ae<ce;ae++){const me=ee.getViewport(ae);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),H.viewport(a),ee.updateMatrices(F,ae),i=ee.getFrustum(),w(P,U,ee.camera,F,this.type)}ee.isPointLightShadow!==!0&&this.type===Yi&&x(ee,U),ee.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(ne,S,b)};function x(C,P){const U=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ns(s.x,s.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,U,h,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,U,f,_,null)}function M(C,P,U,ne){let S=null;const b=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)S=b;else if(S=U.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const H=S.uuid,z=P.uuid;let X=c[H];X===void 0&&(X={},c[H]=X);let j=X[z];j===void 0&&(j=S.clone(),X[z]=j,P.addEventListener("dispose",I)),S=j}if(S.visible=P.visible,S.wireframe=P.wireframe,ne===Yi?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:d[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=n.properties.get(S);H.light=U}return S}function w(C,P,U,ne,S){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Yi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const z=e.update(C),X=C.material;if(Array.isArray(X)){const j=z.groups;for(let q=0,F=j.length;q<F;q++){const ee=j[q],pe=X[ee.materialIndex];if(pe&&pe.visible){const ce=M(C,pe,ne,S);C.onBeforeShadow(n,C,P,U,z,ce,ee),n.renderBufferDirect(U,null,z,ce,C,ee),C.onAfterShadow(n,C,P,U,z,ce,ee)}}}else if(X.visible){const j=M(C,X,ne,S);C.onBeforeShadow(n,C,P,U,z,j,null),n.renderBufferDirect(U,null,z,j,C,null),C.onAfterShadow(n,C,P,U,z,j,null)}}const H=C.children;for(let z=0,X=H.length;z<X;z++)w(H[z],P,U,ne,S)}function I(C){C.target.removeEventListener("dispose",I);for(const U in c){const ne=c[U],S=C.target.uuid;S in ne&&(ne[S].dispose(),delete ne[S])}}}const bS={[th]:nh,[ih]:ah,[sh]:oh,[Yr]:rh,[nh]:th,[ah]:ih,[oh]:sh,[rh]:Yr};function TS(n){function e(){let G=!1;const Ae=new Qt;let re=null;const he=new Qt(0,0,0,0);return{setMask:function(Re){re!==Re&&!G&&(n.colorMask(Re,Re,Re,Re),re=Re)},setLocked:function(Re){G=Re},setClear:function(Re,Ie,mt,qt,Rn){Rn===!0&&(Re*=qt,Ie*=qt,mt*=qt),Ae.set(Re,Ie,mt,qt),he.equals(Ae)===!1&&(n.clearColor(Re,Ie,mt,qt),he.copy(Ae))},reset:function(){G=!1,re=null,he.set(-1,0,0,0)}}}function t(){let G=!1,Ae=!1,re=null,he=null,Re=null;return{setReversed:function(Ie){Ae=Ie},setTest:function(Ie){Ie?xe(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(Ie){re!==Ie&&!G&&(n.depthMask(Ie),re=Ie)},setFunc:function(Ie){if(Ae&&(Ie=bS[Ie]),he!==Ie){switch(Ie){case th:n.depthFunc(n.NEVER);break;case nh:n.depthFunc(n.ALWAYS);break;case ih:n.depthFunc(n.LESS);break;case Yr:n.depthFunc(n.LEQUAL);break;case sh:n.depthFunc(n.EQUAL);break;case rh:n.depthFunc(n.GEQUAL);break;case ah:n.depthFunc(n.GREATER);break;case oh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=Ie}},setLocked:function(Ie){G=Ie},setClear:function(Ie){Re!==Ie&&(n.clearDepth(Ie),Re=Ie)},reset:function(){G=!1,re=null,he=null,Re=null}}}function i(){let G=!1,Ae=null,re=null,he=null,Re=null,Ie=null,mt=null,qt=null,Rn=null;return{setTest:function(vt){G||(vt?xe(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(vt){Ae!==vt&&!G&&(n.stencilMask(vt),Ae=vt)},setFunc:function(vt,Pn,Sn){(re!==vt||he!==Pn||Re!==Sn)&&(n.stencilFunc(vt,Pn,Sn),re=vt,he=Pn,Re=Sn)},setOp:function(vt,Pn,Sn){(Ie!==vt||mt!==Pn||qt!==Sn)&&(n.stencilOp(vt,Pn,Sn),Ie=vt,mt=Pn,qt=Sn)},setLocked:function(vt){G=vt},setClear:function(vt){Rn!==vt&&(n.clearStencil(vt),Rn=vt)},reset:function(){G=!1,Ae=null,re=null,he=null,Re=null,Ie=null,mt=null,qt=null,Rn=null}}}const s=new e,r=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],f=null,g=!1,_=null,m=null,p=null,x=null,M=null,w=null,I=null,C=new at(0,0,0),P=0,U=!1,ne=null,S=null,b=null,H=null,z=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,q=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(F)[1]),j=q>=1):F.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),j=q>=2);let ee=null,pe={};const ce=n.getParameter(n.SCISSOR_BOX),ae=n.getParameter(n.VIEWPORT),me=new Qt().fromArray(ce),oe=new Qt().fromArray(ae);function ie(G,Ae,re,he){const Re=new Uint8Array(4),Ie=n.createTexture();n.bindTexture(G,Ie),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let mt=0;mt<re;mt++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(Ae+mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return Ie}const de={};de[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),xe(n.DEPTH_TEST),r.setFunc(Yr),ot(!1),ut(_d),xe(n.CULL_FACE),N(ws);function xe(G){c[G]!==!0&&(n.enable(G),c[G]=!0)}function ge(G){c[G]!==!1&&(n.disable(G),c[G]=!1)}function Xe(G,Ae){return u[G]!==Ae?(n.bindFramebuffer(G,Ae),u[G]=Ae,G===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Ae),G===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ne(G,Ae){let re=h,he=!1;if(G){re=d.get(Ae),re===void 0&&(re=[],d.set(Ae,re));const Re=G.textures;if(re.length!==Re.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Ie=0,mt=Re.length;Ie<mt;Ie++)re[Ie]=n.COLOR_ATTACHMENT0+Ie;re.length=Re.length,he=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,he=!0);he&&n.drawBuffers(re)}function He(G){return f!==G?(n.useProgram(G),f=G,!0):!1}const rt={[Vs]:n.FUNC_ADD,[T0]:n.FUNC_SUBTRACT,[E0]:n.FUNC_REVERSE_SUBTRACT};rt[A0]=n.MIN,rt[C0]=n.MAX;const nt={[R0]:n.ZERO,[P0]:n.ONE,[D0]:n.SRC_COLOR,[Qc]:n.SRC_ALPHA,[O0]:n.SRC_ALPHA_SATURATE,[N0]:n.DST_COLOR,[I0]:n.DST_ALPHA,[L0]:n.ONE_MINUS_SRC_COLOR,[eh]:n.ONE_MINUS_SRC_ALPHA,[F0]:n.ONE_MINUS_DST_COLOR,[U0]:n.ONE_MINUS_DST_ALPHA,[k0]:n.CONSTANT_COLOR,[z0]:n.ONE_MINUS_CONSTANT_COLOR,[B0]:n.CONSTANT_ALPHA,[H0]:n.ONE_MINUS_CONSTANT_ALPHA};function N(G,Ae,re,he,Re,Ie,mt,qt,Rn,vt){if(G===ws){g===!0&&(ge(n.BLEND),g=!1);return}if(g===!1&&(xe(n.BLEND),g=!0),G!==b0){if(G!==_||vt!==U){if((m!==Vs||M!==Vs)&&(n.blendEquation(n.FUNC_ADD),m=Vs,M=Vs),vt)switch(G){case Vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ol:n.blendFunc(n.ONE,n.ONE);break;case xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Md:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ol:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Md:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}p=null,x=null,w=null,I=null,C.set(0,0,0),P=0,_=G,U=vt}return}Re=Re||Ae,Ie=Ie||re,mt=mt||he,(Ae!==m||Re!==M)&&(n.blendEquationSeparate(rt[Ae],rt[Re]),m=Ae,M=Re),(re!==p||he!==x||Ie!==w||mt!==I)&&(n.blendFuncSeparate(nt[re],nt[he],nt[Ie],nt[mt]),p=re,x=he,w=Ie,I=mt),(qt.equals(C)===!1||Rn!==P)&&(n.blendColor(qt.r,qt.g,qt.b,Rn),C.copy(qt),P=Rn),_=G,U=!1}function Xt(G,Ae){G.side===ni?ge(n.CULL_FACE):xe(n.CULL_FACE);let re=G.side===Gn;Ae&&(re=!re),ot(re),G.blending===Vr&&G.transparent===!1?N(ws):N(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),s.setMask(G.colorWrite);const he=G.stencilWrite;a.setTest(he),he&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),bt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function ot(G){ne!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),ne=G)}function ut(G){G!==y0?(xe(n.CULL_FACE),G!==S&&(G===_d?n.cullFace(n.BACK):G===S0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),S=G}function Ye(G){G!==b&&(j&&n.lineWidth(G),b=G)}function bt(G,Ae,re){G?(xe(n.POLYGON_OFFSET_FILL),(H!==Ae||z!==re)&&(n.polygonOffset(Ae,re),H=Ae,z=re)):ge(n.POLYGON_OFFSET_FILL)}function qe(G){G?xe(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function D(G){G===void 0&&(G=n.TEXTURE0+X-1),ee!==G&&(n.activeTexture(G),ee=G)}function E(G,Ae,re){re===void 0&&(ee===null?re=n.TEXTURE0+X-1:re=ee);let he=pe[re];he===void 0&&(he={type:void 0,texture:void 0},pe[re]=he),(he.type!==G||he.texture!==Ae)&&(ee!==re&&(n.activeTexture(re),ee=re),n.bindTexture(G,Ae||de[G]),he.type=G,he.texture=Ae)}function J(){const G=pe[ee];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function le(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(G){me.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),me.copy(G))}function Ee(G){oe.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),oe.copy(G))}function et(G,Ae){let re=l.get(Ae);re===void 0&&(re=new WeakMap,l.set(Ae,re));let he=re.get(G);he===void 0&&(he=n.getUniformBlockIndex(Ae,G.name),re.set(G,he))}function tt(G,Ae){const he=l.get(Ae).get(G);o.get(Ae)!==he&&(n.uniformBlockBinding(Ae,he,G.__bindingPointIndex),o.set(Ae,he))}function yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},ee=null,pe={},u={},d=new WeakMap,h=[],f=null,g=!1,_=null,m=null,p=null,x=null,M=null,w=null,I=null,C=new at(0,0,0),P=0,U=!1,ne=null,S=null,b=null,H=null,z=null,me.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:xe,disable:ge,bindFramebuffer:Xe,drawBuffers:Ne,useProgram:He,setBlending:N,setMaterial:Xt,setFlipSided:ot,setCullFace:ut,setLineWidth:Ye,setPolygonOffset:bt,setScissorTest:qe,activeTexture:D,bindTexture:E,unbindTexture:J,compressedTexImage2D:le,compressedTexImage3D:se,texImage2D:Le,texImage3D:Ve,updateUBOMapping:et,uniformBlockBinding:tt,texStorage2D:lt,texStorage3D:_e,texSubImage2D:$,texSubImage3D:we,compressedTexSubImage2D:Me,compressedTexSubImage3D:De,scissor:We,viewport:Ee,reset:yt}}function uf(n,e,t,i){const s=ES(i);switch(t){case Kp:return n*e;case Jp:return n*e;case Qp:return n*e*2;case cu:return n*e/s.components*s.byteLength;case hu:return n*e/s.components*s.byteLength;case em:return n*e*2/s.components*s.byteLength;case uu:return n*e*2/s.components*s.byteLength;case Zp:return n*e*3/s.components*s.byteLength;case Hn:return n*e*4/s.components*s.byteLength;case du:return n*e*4/s.components*s.byteLength;case Ko:case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jo:case Qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fh:case mh:return Math.max(n,16)*Math.max(e,8)/4;case dh:case ph:return Math.max(n,8)*Math.max(e,8)/2;case gh:case vh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _h:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case yh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case wh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case bh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Th:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case el:case Ih:case Uh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tm:case Nh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fh:case Oh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ES(n){switch(n){case ts:case qp:return{byteLength:1,components:1};case Ka:case Yp:case so:return{byteLength:2,components:1};case ou:case lu:return{byteLength:2,components:4};case js:case au:case Yn:return{byteLength:4,components:1};case jp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function AS(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,E){return f?new OffscreenCanvas(D,E):dl("canvas")}function _(D,E,J){let le=1;const se=qe(D);if((se.width>J||se.height>J)&&(le=J/Math.max(se.width,se.height)),le<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const $=Math.floor(le*se.width),we=Math.floor(le*se.height);d===void 0&&(d=g($,we));const Me=E?g($,we):d;return Me.width=$,Me.height=we,Me.getContext("2d").drawImage(D,0,0,$,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+$+"x"+we+")."),Me}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==Kt&&D.minFilter!==pi}function p(D){n.generateMipmap(D)}function x(D,E,J,le,se=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let $=E;if(E===n.RED&&(J===n.FLOAT&&($=n.R32F),J===n.HALF_FLOAT&&($=n.R16F),J===n.UNSIGNED_BYTE&&($=n.R8)),E===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&($=n.R8UI),J===n.UNSIGNED_SHORT&&($=n.R16UI),J===n.UNSIGNED_INT&&($=n.R32UI),J===n.BYTE&&($=n.R8I),J===n.SHORT&&($=n.R16I),J===n.INT&&($=n.R32I)),E===n.RG&&(J===n.FLOAT&&($=n.RG32F),J===n.HALF_FLOAT&&($=n.RG16F),J===n.UNSIGNED_BYTE&&($=n.RG8)),E===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&($=n.RG8UI),J===n.UNSIGNED_SHORT&&($=n.RG16UI),J===n.UNSIGNED_INT&&($=n.RG32UI),J===n.BYTE&&($=n.RG8I),J===n.SHORT&&($=n.RG16I),J===n.INT&&($=n.RG32I)),E===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&($=n.RGB8UI),J===n.UNSIGNED_SHORT&&($=n.RGB16UI),J===n.UNSIGNED_INT&&($=n.RGB32UI),J===n.BYTE&&($=n.RGB8I),J===n.SHORT&&($=n.RGB16I),J===n.INT&&($=n.RGB32I)),E===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&($=n.RGBA8UI),J===n.UNSIGNED_SHORT&&($=n.RGBA16UI),J===n.UNSIGNED_INT&&($=n.RGBA32UI),J===n.BYTE&&($=n.RGBA8I),J===n.SHORT&&($=n.RGBA16I),J===n.INT&&($=n.RGBA32I)),E===n.RGB&&J===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),E===n.RGBA){const we=se?ll:Et.getTransfer(le);J===n.FLOAT&&($=n.RGBA32F),J===n.HALF_FLOAT&&($=n.RGBA16F),J===n.UNSIGNED_BYTE&&($=we===Ht?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(D,E){let J;return D?E===null||E===js||E===Zr?J=n.DEPTH24_STENCIL8:E===Yn?J=n.DEPTH32F_STENCIL8:E===Ka&&(J=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===js||E===Zr?J=n.DEPTH_COMPONENT24:E===Yn?J=n.DEPTH_COMPONENT32F:E===Ka&&(J=n.DEPTH_COMPONENT16),J}function w(D,E){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Kt&&D.minFilter!==pi?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function I(D){const E=D.target;E.removeEventListener("dispose",I),P(E),E.isVideoTexture&&u.delete(E)}function C(D){const E=D.target;E.removeEventListener("dispose",C),ne(E)}function P(D){const E=i.get(D);if(E.__webglInit===void 0)return;const J=D.source,le=h.get(J);if(le){const se=le[E.__cacheKey];se.usedTimes--,se.usedTimes===0&&U(D),Object.keys(le).length===0&&h.delete(J)}i.remove(D)}function U(D){const E=i.get(D);n.deleteTexture(E.__webglTexture);const J=D.source,le=h.get(J);delete le[E.__cacheKey],a.memory.textures--}function ne(D){const E=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(E.__webglFramebuffer[le]))for(let se=0;se<E.__webglFramebuffer[le].length;se++)n.deleteFramebuffer(E.__webglFramebuffer[le][se]);else n.deleteFramebuffer(E.__webglFramebuffer[le]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[le])}else{if(Array.isArray(E.__webglFramebuffer))for(let le=0;le<E.__webglFramebuffer.length;le++)n.deleteFramebuffer(E.__webglFramebuffer[le]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let le=0;le<E.__webglColorRenderbuffer.length;le++)E.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[le]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=D.textures;for(let le=0,se=J.length;le<se;le++){const $=i.get(J[le]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(J[le])}i.remove(D)}let S=0;function b(){S=0}function H(){const D=S;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),S+=1,D}function z(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function X(D,E){const J=i.get(D);if(D.isVideoTexture&&Ye(D),D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){const le=D.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(J,D,E);return}}t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+E)}function j(D,E){const J=i.get(D);if(D.version>0&&J.__version!==D.version){oe(J,D,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+E)}function q(D,E){const J=i.get(D);if(D.version>0&&J.__version!==D.version){oe(J,D,E);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+E)}function F(D,E){const J=i.get(D);if(D.version>0&&J.__version!==D.version){ie(J,D,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+E)}const ee={[hh]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[uh]:n.MIRRORED_REPEAT},pe={[Kt]:n.NEAREST,[Z0]:n.NEAREST_MIPMAP_NEAREST,[mo]:n.NEAREST_MIPMAP_LINEAR,[pi]:n.LINEAR,[cc]:n.LINEAR_MIPMAP_NEAREST,[ys]:n.LINEAR_MIPMAP_LINEAR},ce={[nv]:n.NEVER,[lv]:n.ALWAYS,[iv]:n.LESS,[nm]:n.LEQUAL,[sv]:n.EQUAL,[ov]:n.GEQUAL,[rv]:n.GREATER,[av]:n.NOTEQUAL};function ae(D,E){if(E.type===Yn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===pi||E.magFilter===cc||E.magFilter===mo||E.magFilter===ys||E.minFilter===pi||E.minFilter===cc||E.minFilter===mo||E.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,ee[E.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,ee[E.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,ee[E.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,pe[E.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,pe[E.minFilter]),E.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Kt||E.minFilter!==mo&&E.minFilter!==ys||E.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function me(D,E){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",I));const le=E.source;let se=h.get(le);se===void 0&&(se={},h.set(le,se));const $=z(E);if($!==D.__cacheKey){se[$]===void 0&&(se[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,J=!0),se[$].usedTimes++;const we=se[D.__cacheKey];we!==void 0&&(se[D.__cacheKey].usedTimes--,we.usedTimes===0&&U(E)),D.__cacheKey=$,D.__webglTexture=se[$].texture}return J}function oe(D,E,J){let le=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=n.TEXTURE_3D);const se=me(D,E),$=E.source;t.bindTexture(le,D.__webglTexture,n.TEXTURE0+J);const we=i.get($);if($.version!==we.__version||se===!0){t.activeTexture(n.TEXTURE0+J);const Me=Et.getPrimaries(Et.workingColorSpace),De=E.colorSpace===Ms?null:Et.getPrimaries(E.colorSpace),lt=E.colorSpace===Ms||Me===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let _e=_(E.image,!1,s.maxTextureSize);_e=bt(E,_e);const Le=r.convert(E.format,E.colorSpace),Ve=r.convert(E.type);let We=x(E.internalFormat,Le,Ve,E.colorSpace,E.isVideoTexture);ae(le,E);let Ee;const et=E.mipmaps,tt=E.isVideoTexture!==!0,yt=we.__version===void 0||se===!0,G=$.dataReady,Ae=w(E,_e);if(E.isDepthTexture)We=M(E.format===Jr,E.type),yt&&(tt?t.texStorage2D(n.TEXTURE_2D,1,We,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,We,_e.width,_e.height,0,Le,Ve,null));else if(E.isDataTexture)if(et.length>0){tt&&yt&&t.texStorage2D(n.TEXTURE_2D,Ae,We,et[0].width,et[0].height);for(let re=0,he=et.length;re<he;re++)Ee=et[re],tt?G&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Ee.width,Ee.height,Le,Ve,Ee.data):t.texImage2D(n.TEXTURE_2D,re,We,Ee.width,Ee.height,0,Le,Ve,Ee.data);E.generateMipmaps=!1}else tt?(yt&&t.texStorage2D(n.TEXTURE_2D,Ae,We,_e.width,_e.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e.width,_e.height,Le,Ve,_e.data)):t.texImage2D(n.TEXTURE_2D,0,We,_e.width,_e.height,0,Le,Ve,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){tt&&yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,We,et[0].width,et[0].height,_e.depth);for(let re=0,he=et.length;re<he;re++)if(Ee=et[re],E.format!==Hn)if(Le!==null)if(tt){if(G)if(E.layerUpdates.size>0){const Re=uf(Ee.width,Ee.height,E.format,E.type);for(const Ie of E.layerUpdates){const mt=Ee.data.subarray(Ie*Re/Ee.data.BYTES_PER_ELEMENT,(Ie+1)*Re/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Ie,Ee.width,Ee.height,1,Le,mt,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Ee.width,Ee.height,_e.depth,Le,Ee.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,We,Ee.width,Ee.height,_e.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Ee.width,Ee.height,_e.depth,Le,Ve,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,We,Ee.width,Ee.height,_e.depth,0,Le,Ve,Ee.data)}else{tt&&yt&&t.texStorage2D(n.TEXTURE_2D,Ae,We,et[0].width,et[0].height);for(let re=0,he=et.length;re<he;re++)Ee=et[re],E.format!==Hn?Le!==null?tt?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,Ee.width,Ee.height,Le,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,re,We,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?G&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Ee.width,Ee.height,Le,Ve,Ee.data):t.texImage2D(n.TEXTURE_2D,re,We,Ee.width,Ee.height,0,Le,Ve,Ee.data)}else if(E.isDataArrayTexture)if(tt){if(yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,We,_e.width,_e.height,_e.depth),G)if(E.layerUpdates.size>0){const re=uf(_e.width,_e.height,E.format,E.type);for(const he of E.layerUpdates){const Re=_e.data.subarray(he*re/_e.data.BYTES_PER_ELEMENT,(he+1)*re/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,_e.width,_e.height,1,Le,Ve,Re)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Le,Ve,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,_e.width,_e.height,_e.depth,0,Le,Ve,_e.data);else if(E.isData3DTexture)tt?(yt&&t.texStorage3D(n.TEXTURE_3D,Ae,We,_e.width,_e.height,_e.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Le,Ve,_e.data)):t.texImage3D(n.TEXTURE_3D,0,We,_e.width,_e.height,_e.depth,0,Le,Ve,_e.data);else if(E.isFramebufferTexture){if(yt)if(tt)t.texStorage2D(n.TEXTURE_2D,Ae,We,_e.width,_e.height);else{let re=_e.width,he=_e.height;for(let Re=0;Re<Ae;Re++)t.texImage2D(n.TEXTURE_2D,Re,We,re,he,0,Le,Ve,null),re>>=1,he>>=1}}else if(et.length>0){if(tt&&yt){const re=qe(et[0]);t.texStorage2D(n.TEXTURE_2D,Ae,We,re.width,re.height)}for(let re=0,he=et.length;re<he;re++)Ee=et[re],tt?G&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Le,Ve,Ee):t.texImage2D(n.TEXTURE_2D,re,We,Le,Ve,Ee);E.generateMipmaps=!1}else if(tt){if(yt){const re=qe(_e);t.texStorage2D(n.TEXTURE_2D,Ae,We,re.width,re.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,Ve,_e)}else t.texImage2D(n.TEXTURE_2D,0,We,Le,Ve,_e);m(E)&&p(le),we.__version=$.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function ie(D,E,J){if(E.image.length!==6)return;const le=me(D,E),se=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+J);const $=i.get(se);if(se.version!==$.__version||le===!0){t.activeTexture(n.TEXTURE0+J);const we=Et.getPrimaries(Et.workingColorSpace),Me=E.colorSpace===Ms?null:Et.getPrimaries(E.colorSpace),De=E.colorSpace===Ms||we===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const lt=E.isCompressedTexture||E.image[0].isCompressedTexture,_e=E.image[0]&&E.image[0].isDataTexture,Le=[];for(let he=0;he<6;he++)!lt&&!_e?Le[he]=_(E.image[he],!0,s.maxCubemapSize):Le[he]=_e?E.image[he].image:E.image[he],Le[he]=bt(E,Le[he]);const Ve=Le[0],We=r.convert(E.format,E.colorSpace),Ee=r.convert(E.type),et=x(E.internalFormat,We,Ee,E.colorSpace),tt=E.isVideoTexture!==!0,yt=$.__version===void 0||le===!0,G=se.dataReady;let Ae=w(E,Ve);ae(n.TEXTURE_CUBE_MAP,E);let re;if(lt){tt&&yt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,et,Ve.width,Ve.height);for(let he=0;he<6;he++){re=Le[he].mipmaps;for(let Re=0;Re<re.length;Re++){const Ie=re[Re];E.format!==Hn?We!==null?tt?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,0,0,Ie.width,Ie.height,We,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,et,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,0,0,Ie.width,Ie.height,We,Ee,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,et,Ie.width,Ie.height,0,We,Ee,Ie.data)}}}else{if(re=E.mipmaps,tt&&yt){re.length>0&&Ae++;const he=qe(Le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,et,he.width,he.height)}for(let he=0;he<6;he++)if(_e){tt?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Le[he].width,Le[he].height,We,Ee,Le[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,et,Le[he].width,Le[he].height,0,We,Ee,Le[he].data);for(let Re=0;Re<re.length;Re++){const mt=re[Re].image[he].image;tt?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,0,0,mt.width,mt.height,We,Ee,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,et,mt.width,mt.height,0,We,Ee,mt.data)}}else{tt?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,We,Ee,Le[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,et,We,Ee,Le[he]);for(let Re=0;Re<re.length;Re++){const Ie=re[Re];tt?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,0,0,We,Ee,Ie.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,et,We,Ee,Ie.image[he])}}}m(E)&&p(n.TEXTURE_CUBE_MAP),$.__version=se.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function de(D,E,J,le,se,$){const we=r.convert(J.format,J.colorSpace),Me=r.convert(J.type),De=x(J.internalFormat,we,Me,J.colorSpace);if(!i.get(E).__hasExternalTextures){const _e=Math.max(1,E.width>>$),Le=Math.max(1,E.height>>$);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,$,De,_e,Le,E.depth,0,we,Me,null):t.texImage2D(se,$,De,_e,Le,0,we,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),ut(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,se,i.get(J).__webglTexture,0,ot(E)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,se,i.get(J).__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(D,E,J){if(n.bindRenderbuffer(n.RENDERBUFFER,D),E.depthBuffer){const le=E.depthTexture,se=le&&le.isDepthTexture?le.type:null,$=M(E.stencilBuffer,se),we=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=ot(E);ut(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,$,E.width,E.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,$,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,$,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,D)}else{const le=E.textures;for(let se=0;se<le.length;se++){const $=le[se],we=r.convert($.format,$.colorSpace),Me=r.convert($.type),De=x($.internalFormat,we,Me,$.colorSpace),lt=ot(E);J&&ut(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,De,E.width,E.height):ut(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,De,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,De,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const le=i.get(E.depthTexture).__webglTexture,se=ot(E);if(E.depthTexture.format===Gr)ut(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(E.depthTexture.format===Jr)ut(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Xe(D){const E=i.get(D),J=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const le=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),le){const se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,le.removeEventListener("dispose",se)};le.addEventListener("dispose",se),E.__depthDisposeCallback=se}E.__boundDepthTexture=le}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");ge(E.__webglFramebuffer,D)}else if(J){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]===void 0)E.__webglDepthbuffer[le]=n.createRenderbuffer(),xe(E.__webglDepthbuffer[le],D,!1);else{const se=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[le];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),xe(E.__webglDepthbuffer,D,!1);else{const le=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,se)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(D,E,J){const le=i.get(D);E!==void 0&&de(le.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&Xe(D)}function He(D){const E=D.texture,J=i.get(D),le=i.get(E);D.addEventListener("dispose",C);const se=D.textures,$=D.isWebGLCubeRenderTarget===!0,we=se.length>1;if(we||(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=E.version,a.memory.textures++),$){J.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[Me]=[];for(let De=0;De<E.mipmaps.length;De++)J.__webglFramebuffer[Me][De]=n.createFramebuffer()}else J.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let Me=0;Me<E.mipmaps.length;Me++)J.__webglFramebuffer[Me]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(we)for(let Me=0,De=se.length;Me<De;Me++){const lt=i.get(se[Me]);lt.__webglTexture===void 0&&(lt.__webglTexture=n.createTexture(),a.memory.textures++)}if(D.samples>0&&ut(D)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Me=0;Me<se.length;Me++){const De=se[Me];J.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[Me]);const lt=r.convert(De.format,De.colorSpace),_e=r.convert(De.type),Le=x(De.internalFormat,lt,_e,De.colorSpace,D.isXRRenderTarget===!0),Ve=ot(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Le,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,J.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(J.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),ae(n.TEXTURE_CUBE_MAP,E);for(let Me=0;Me<6;Me++)if(E.mipmaps&&E.mipmaps.length>0)for(let De=0;De<E.mipmaps.length;De++)de(J.__webglFramebuffer[Me][De],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De);else de(J.__webglFramebuffer[Me],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);m(E)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let Me=0,De=se.length;Me<De;Me++){const lt=se[Me],_e=i.get(lt);t.bindTexture(n.TEXTURE_2D,_e.__webglTexture),ae(n.TEXTURE_2D,lt),de(J.__webglFramebuffer,D,lt,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,0),m(lt)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Me=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,le.__webglTexture),ae(Me,E),E.mipmaps&&E.mipmaps.length>0)for(let De=0;De<E.mipmaps.length;De++)de(J.__webglFramebuffer[De],D,E,n.COLOR_ATTACHMENT0,Me,De);else de(J.__webglFramebuffer,D,E,n.COLOR_ATTACHMENT0,Me,0);m(E)&&p(Me),t.unbindTexture()}D.depthBuffer&&Xe(D)}function rt(D){const E=D.textures;for(let J=0,le=E.length;J<le;J++){const se=E[J];if(m(se)){const $=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,we=i.get(se).__webglTexture;t.bindTexture($,we),p($),t.unbindTexture()}}}const nt=[],N=[];function Xt(D){if(D.samples>0){if(ut(D)===!1){const E=D.textures,J=D.width,le=D.height;let se=n.COLOR_BUFFER_BIT;const $=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(D),Me=E.length>1;if(Me)for(let De=0;De<E.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let De=0;De<E.length;De++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),Me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[De]);const lt=i.get(E[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,lt,0)}n.blitFramebuffer(0,0,J,le,0,0,J,le,se,n.NEAREST),l===!0&&(nt.length=0,N.length=0,nt.push(n.COLOR_ATTACHMENT0+De),D.depthBuffer&&D.resolveDepthBuffer===!1&&(nt.push($),N.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let De=0;De<E.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,we.__webglColorRenderbuffer[De]);const lt=i.get(E[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,lt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const E=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function ot(D){return Math.min(s.maxSamples,D.samples)}function ut(D){const E=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(D){const E=a.render.frame;u.get(D)!==E&&(u.set(D,E),D.update())}function bt(D,E){const J=D.colorSpace,le=D.format,se=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==As&&J!==Ms&&(Et.getTransfer(J)===Ht?(le!==Hn||se!==ts)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),E}function qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=b,this.setTexture2D=X,this.setTexture2DArray=j,this.setTexture3D=q,this.setTextureCube=F,this.rebindTextures=Ne,this.setupRenderTarget=He,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ut}function CS(n,e){function t(i,s=Ms){let r;const a=Et.getTransfer(s);if(i===ts)return n.UNSIGNED_BYTE;if(i===ou)return n.UNSIGNED_SHORT_4_4_4_4;if(i===lu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qp)return n.BYTE;if(i===Yp)return n.SHORT;if(i===Ka)return n.UNSIGNED_SHORT;if(i===au)return n.INT;if(i===js)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===so)return n.HALF_FLOAT;if(i===Kp)return n.ALPHA;if(i===Zp)return n.RGB;if(i===Hn)return n.RGBA;if(i===Jp)return n.LUMINANCE;if(i===Qp)return n.LUMINANCE_ALPHA;if(i===Gr)return n.DEPTH_COMPONENT;if(i===Jr)return n.DEPTH_STENCIL;if(i===cu)return n.RED;if(i===hu)return n.RED_INTEGER;if(i===em)return n.RG;if(i===uu)return n.RG_INTEGER;if(i===du)return n.RGBA_INTEGER;if(i===Ko||i===Zo||i===Jo||i===Qo)if(a===Ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dh||i===fh||i===ph||i===mh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===dh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ph)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gh||i===vh||i===_h)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gh||i===vh)return a===Ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_h)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xh||i===Mh||i===yh||i===Sh||i===wh||i===bh||i===Th||i===Eh||i===Ah||i===Ch||i===Rh||i===Ph||i===Dh||i===Lh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xh)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mh)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yh)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sh)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wh)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bh)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Th)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Eh)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ah)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ch)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rh)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ph)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dh)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lh)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===el||i===Ih||i===Uh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===el)return a===Ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ih)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tm||i===Nh||i===Fh||i===Oh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===el)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class RS extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ss extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PS={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(PS)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ss;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const DS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class IS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new In,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ss({vertexShader:DS,fragmentShader:LS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new ra(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class US extends nr{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=new IS,m=t.getContextAttributes();let p=null,x=null;const M=[],w=[],I=new be;let C=null;const P=new fi;P.layers.enable(1),P.viewport=new Qt;const U=new fi;U.layers.enable(2),U.viewport=new Qt;const ne=[P,U],S=new RS;S.layers.enable(1),S.layers.enable(2);let b=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let de=M[ie];return de===void 0&&(de=new Oc,M[ie]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ie){let de=M[ie];return de===void 0&&(de=new Oc,M[ie]=de),de.getGripSpace()},this.getHand=function(ie){let de=M[ie];return de===void 0&&(de=new Oc,M[ie]=de),de.getHandSpace()};function z(ie){const de=w.indexOf(ie.inputSource);if(de===-1)return;const xe=M[de];xe!==void 0&&(xe.update(ie.inputSource,ie.frame,c||a),xe.dispatchEvent({type:ie.type,data:ie.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",j);for(let ie=0;ie<M.length;ie++){const de=w[ie];de!==null&&(w[ie]=null,M[ie].disconnect(de))}b=null,H=null,_.reset(),e.setRenderTarget(p),f=null,h=null,d=null,s=null,x=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ns(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:ts,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,xe=null,ge=null;m.depth&&(ge=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?Jr:Gr,xe=m.stencil?Zr:js);const Xe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(Xe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new ns(h.textureWidth,h.textureHeight,{format:Hn,type:ts,depthTexture:new pm(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(ie){for(let de=0;de<ie.removed.length;de++){const xe=ie.removed[de],ge=w.indexOf(xe);ge>=0&&(w[ge]=null,M[ge].disconnect(xe))}for(let de=0;de<ie.added.length;de++){const xe=ie.added[de];let ge=w.indexOf(xe);if(ge===-1){for(let Ne=0;Ne<M.length;Ne++)if(Ne>=w.length){w.push(xe),ge=Ne;break}else if(w[Ne]===null){w[Ne]=xe,ge=Ne;break}if(ge===-1)break}const Xe=M[ge];Xe&&Xe.connect(xe)}}const q=new O,F=new O;function ee(ie,de,xe){q.setFromMatrixPosition(de.matrixWorld),F.setFromMatrixPosition(xe.matrixWorld);const ge=q.distanceTo(F),Xe=de.projectionMatrix.elements,Ne=xe.projectionMatrix.elements,He=Xe[14]/(Xe[10]-1),rt=Xe[14]/(Xe[10]+1),nt=(Xe[9]+1)/Xe[5],N=(Xe[9]-1)/Xe[5],Xt=(Xe[8]-1)/Xe[0],ot=(Ne[8]+1)/Ne[0],ut=He*Xt,Ye=He*ot,bt=ge/(-Xt+ot),qe=bt*-Xt;if(de.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(qe),ie.translateZ(bt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Xe[10]===-1)ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const D=He+bt,E=rt+bt,J=ut-qe,le=Ye+(ge-qe),se=nt*rt/E*D,$=N*rt/E*D;ie.projectionMatrix.makePerspective(J,le,se,$,D,E),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function pe(ie,de){de===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(de.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let de=ie.near,xe=ie.far;_.texture!==null&&(_.depthNear>0&&(de=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),S.near=U.near=P.near=de,S.far=U.far=P.far=xe,(b!==S.near||H!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,H=S.far);const ge=ie.parent,Xe=S.cameras;pe(S,ge);for(let Ne=0;Ne<Xe.length;Ne++)pe(Xe[Ne],ge);Xe.length===2?ee(S,P,U):S.projectionMatrix.copy(P.projectionMatrix),ce(ie,S,ge)};function ce(ie,de,xe){xe===null?ie.matrix.copy(de.matrixWorld):(ie.matrix.copy(xe.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(de.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Za*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ae=null;function me(ie,de){if(u=de.getViewerPose(c||a),g=de,u!==null){const xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ge=!1;xe.length!==S.cameras.length&&(S.cameras.length=0,ge=!0);for(let Ne=0;Ne<xe.length;Ne++){const He=xe[Ne];let rt=null;if(f!==null)rt=f.getViewport(He);else{const N=d.getViewSubImage(h,He);rt=N.viewport,Ne===0&&(e.setRenderTargetTextures(x,N.colorTexture,h.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(x))}let nt=ne[Ne];nt===void 0&&(nt=new fi,nt.layers.enable(Ne),nt.viewport=new Qt,ne[Ne]=nt),nt.matrix.fromArray(He.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(He.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(rt.x,rt.y,rt.width,rt.height),Ne===0&&(S.matrix.copy(nt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ge===!0&&S.cameras.push(nt)}const Xe=s.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")){const Ne=d.getDepthInformation(xe[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(e,Ne,s.renderState)}}for(let xe=0;xe<M.length;xe++){const ge=w[xe],Xe=M[xe];ge!==null&&Xe!==void 0&&Xe.update(ge,de,c||a)}ae&&ae(ie,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const oe=new fm;oe.setAnimationLoop(me),this.setAnimationLoop=function(ie){ae=ie},this.dispose=function(){}}}const ks=new is,NS=new Lt;function FS(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,cm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,M,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),M=x.envMap,w=x.envMapRotation;M&&(m.envMap.value=M,ks.copy(w),ks.x*=-1,ks.y*=-1,ks.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),m.envMapRotation.value.setFromMatrix4(NS.makeRotationFromEuler(ks)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function OS(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const w=M.program;i.uniformBlockBinding(x,w)}function c(x,M){let w=s[x.id];w===void 0&&(g(x),w=u(x),s[x.id]=w,x.addEventListener("dispose",m));const I=M.program;i.updateUBOMapping(x,I);const C=e.render.frame;r[x.id]!==C&&(h(x),r[x.id]=C)}function u(x){const M=d();x.__bindingPointIndex=M;const w=n.createBuffer(),I=x.__size,C=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,w),w}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const M=s[x.id],w=x.uniforms,I=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,P=w.length;C<P;C++){const U=Array.isArray(w[C])?w[C]:[w[C]];for(let ne=0,S=U.length;ne<S;ne++){const b=U[ne];if(f(b,C,ne,I)===!0){const H=b.__offset,z=Array.isArray(b.value)?b.value:[b.value];let X=0;for(let j=0;j<z.length;j++){const q=z[j],F=_(q);typeof q=="number"||typeof q=="boolean"?(b.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,H+X,b.__data)):q.isMatrix3?(b.__data[0]=q.elements[0],b.__data[1]=q.elements[1],b.__data[2]=q.elements[2],b.__data[3]=0,b.__data[4]=q.elements[3],b.__data[5]=q.elements[4],b.__data[6]=q.elements[5],b.__data[7]=0,b.__data[8]=q.elements[6],b.__data[9]=q.elements[7],b.__data[10]=q.elements[8],b.__data[11]=0):(q.toArray(b.__data,X),X+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,M,w,I){const C=x.value,P=M+"_"+w;if(I[P]===void 0)return typeof C=="number"||typeof C=="boolean"?I[P]=C:I[P]=C.clone(),!0;{const U=I[P];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return I[P]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(x){const M=x.uniforms;let w=0;const I=16;for(let P=0,U=M.length;P<U;P++){const ne=Array.isArray(M[P])?M[P]:[M[P]];for(let S=0,b=ne.length;S<b;S++){const H=ne[S],z=Array.isArray(H.value)?H.value:[H.value];for(let X=0,j=z.length;X<j;X++){const q=z[X],F=_(q),ee=w%I,pe=ee%F.boundary,ce=ee+pe;w+=pe,ce!==0&&I-ce<F.storage&&(w+=I-ce),H.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=F.storage}}}const C=w%I;return C>0&&(w+=I-C),x.__size=w,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class kS{constructor(e={}){const{canvas:t=Tv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=bs,this.toneMappingExposure=1;const M=this;let w=!1,I=0,C=0,P=null,U=-1,ne=null;const S=new Qt,b=new Qt;let H=null;const z=new at(0);let X=0,j=t.width,q=t.height,F=1,ee=null,pe=null;const ce=new Qt(0,0,j,q),ae=new Qt(0,0,j,q);let me=!1;const oe=new dm;let ie=!1,de=!1;const xe=new Lt,ge=new Lt,Xe=new O,Ne=new Qt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function nt(){return P===null?F:1}let N=i;function Xt(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ru}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),N===null){const W="webgl2";if(N=Xt(W,A),N===null)throw Xt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ot,ut,Ye,bt,qe,D,E,J,le,se,$,we,Me,De,lt,_e,Le,Ve,We,Ee,et,tt,yt,G;function Ae(){ot=new GM(N),ot.init(),tt=new CS(N,ot),ut=new OM(N,ot,e,tt),Ye=new TS(N),ut.reverseDepthBuffer&&Ye.buffers.depth.setReversed(!0),bt=new XM(N),qe=new hS,D=new AS(N,ot,Ye,qe,ut,tt,bt),E=new zM(M),J=new VM(M),le=new Qv(N),yt=new NM(N,le),se=new WM(N,le,bt,yt),$=new YM(N,se,le,bt),We=new qM(N,ut,D),_e=new kM(qe),we=new cS(M,E,J,ot,ut,yt,_e),Me=new FS(M,qe),De=new dS,lt=new _S(ot),Ve=new UM(M,E,J,Ye,$,h,l),Le=new wS(M,$,ut),G=new OS(N,bt,ut,Ye),Ee=new FM(N,ot,bt),et=new $M(N,ot,bt),bt.programs=we.programs,M.capabilities=ut,M.extensions=ot,M.properties=qe,M.renderLists=De,M.shadowMap=Le,M.state=Ye,M.info=bt}Ae();const re=new US(M,N);this.xr=re,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(j,q,!1))},this.getSize=function(A){return A.set(j,q)},this.setSize=function(A,W,Y=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,q=W,t.width=Math.floor(A*F),t.height=Math.floor(W*F),Y===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(j*F,q*F).floor()},this.setDrawingBufferSize=function(A,W,Y){j=A,q=W,F=Y,t.width=Math.floor(A*Y),t.height=Math.floor(W*Y),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(ce)},this.setViewport=function(A,W,Y,K){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,W,Y,K),Ye.viewport(S.copy(ce).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(ae)},this.setScissor=function(A,W,Y,K){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,W,Y,K),Ye.scissor(b.copy(ae).multiplyScalar(F).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(A){Ye.setScissorTest(me=A)},this.setOpaqueSort=function(A){ee=A},this.setTransparentSort=function(A){pe=A},this.getClearColor=function(A){return A.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(A=!0,W=!0,Y=!0){let K=0;if(A){let V=!1;if(P!==null){const ye=P.texture.format;V=ye===du||ye===uu||ye===hu}if(V){const ye=P.texture.type,Te=ye===ts||ye===js||ye===Ka||ye===Zr||ye===ou||ye===lu,Fe=Ve.getClearColor(),ze=Ve.getClearAlpha(),je=Fe.r,Ke=Fe.g,ke=Fe.b;Te?(f[0]=je,f[1]=Ke,f[2]=ke,f[3]=ze,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=je,g[1]=Ke,g[2]=ke,g[3]=ze,N.clearBufferiv(N.COLOR,0,g))}else K|=N.COLOR_BUFFER_BIT}W&&(K|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Y&&(K|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),De.dispose(),lt.dispose(),qe.dispose(),E.dispose(),J.dispose(),$.dispose(),yt.dispose(),G.dispose(),we.dispose(),re.dispose(),re.removeEventListener("sessionstart",on),re.removeEventListener("sessionend",jn),$n.stop()};function he(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=bt.autoReset,W=Le.enabled,Y=Le.autoUpdate,K=Le.needsUpdate,V=Le.type;Ae(),bt.autoReset=A,Le.enabled=W,Le.autoUpdate=Y,Le.needsUpdate=K,Le.type=V}function Ie(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function mt(A){const W=A.target;W.removeEventListener("dispose",mt),qt(W)}function qt(A){Rn(A),qe.remove(A)}function Rn(A){const W=qe.get(A).programs;W!==void 0&&(W.forEach(function(Y){we.releaseProgram(Y)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,Y,K,V,ye){W===null&&(W=He);const Te=V.isMesh&&V.matrixWorld.determinant()<0,Fe=ki(A,W,Y,K,V);Ye.setMaterial(K,Te);let ze=Y.index,je=1;if(K.wireframe===!0){if(ze=se.getWireframeAttribute(Y),ze===void 0)return;je=2}const Ke=Y.drawRange,ke=Y.attributes.position;let _t=Ke.start*je,At=(Ke.start+Ke.count)*je;ye!==null&&(_t=Math.max(_t,ye.start*je),At=Math.min(At,(ye.start+ye.count)*je)),ze!==null?(_t=Math.max(_t,0),At=Math.min(At,ze.count)):ke!=null&&(_t=Math.max(_t,0),At=Math.min(At,ke.count));const Ft=At-_t;if(Ft<0||Ft===1/0)return;yt.setup(V,K,Fe,Y,ze);let wn,gt=Ee;if(ze!==null&&(wn=le.get(ze),gt=et,gt.setIndex(wn)),V.isMesh)K.wireframe===!0?(Ye.setLineWidth(K.wireframeLinewidth*nt()),gt.setMode(N.LINES)):gt.setMode(N.TRIANGLES);else if(V.isLine){let Ge=K.linewidth;Ge===void 0&&(Ge=1),Ye.setLineWidth(Ge*nt()),V.isLineSegments?gt.setMode(N.LINES):V.isLineLoop?gt.setMode(N.LINE_LOOP):gt.setMode(N.LINE_STRIP)}else V.isPoints?gt.setMode(N.POINTS):V.isSprite&&gt.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)gt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))gt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ge=V._multiDrawStarts,Zt=V._multiDrawCounts,it=V._multiDrawCount,Xn=ze?le.get(ze).bytesPerElement:1,zi=qe.get(K).currentProgram.getUniforms();for(let bn=0;bn<it;bn++)zi.setValue(N,"_gl_DrawID",bn),gt.render(Ge[bn]/Xn,Zt[bn])}else if(V.isInstancedMesh)gt.renderInstances(_t,Ft,V.count);else if(Y.isInstancedBufferGeometry){const Ge=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Zt=Math.min(Y.instanceCount,Ge);gt.renderInstances(_t,Ft,Zt)}else gt.render(_t,Ft)};function vt(A,W,Y){A.transparent===!0&&A.side===ni&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,Cs(A,W,Y),A.side=Ts,A.needsUpdate=!0,Cs(A,W,Y),A.side=ni):Cs(A,W,Y)}this.compile=function(A,W,Y=null){Y===null&&(Y=A),m=lt.get(Y),m.init(W),x.push(m),Y.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==Y&&A.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const K=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ye=V.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){const Fe=ye[Te];vt(Fe,Y,V),K.add(Fe)}else vt(ye,Y,V),K.add(ye)}),x.pop(),m=null,K},this.compileAsync=function(A,W,Y=null){const K=this.compile(A,W,Y);return new Promise(V=>{function ye(){if(K.forEach(function(Te){qe.get(Te).currentProgram.isReady()&&K.delete(Te)}),K.size===0){V(A);return}setTimeout(ye,10)}ot.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Pn=null;function Sn(A){Pn&&Pn(A)}function on(){$n.stop()}function jn(){$n.start()}const $n=new fm;$n.setAnimationLoop(Sn),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(A){Pn=A,re.setAnimationLoop(A),A===null?$n.stop():$n.start()},re.addEventListener("sessionstart",on),re.addEventListener("sessionend",jn),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(W),W=re.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,W,P),m=lt.get(A,x.length),m.init(W),x.push(m),ge.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),oe.setFromProjectionMatrix(ge),de=this.localClippingEnabled,ie=_e.init(this.clippingPlanes,de),_=De.get(A,p.length),_.init(),p.push(_),re.enabled===!0&&re.isPresenting===!0){const ye=M.xr.getDepthSensingMesh();ye!==null&&Ei(ye,W,-1/0,M.sortObjects)}Ei(A,W,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(ee,pe),rt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,rt&&Ve.addToRenderList(_,A),this.info.render.frame++,ie===!0&&_e.beginShadows();const Y=m.state.shadowsArray;Le.render(Y,A,W),ie===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=_.opaque,V=_.transmissive;if(m.setupLights(),W.isArrayCamera){const ye=W.cameras;if(V.length>0)for(let Te=0,Fe=ye.length;Te<Fe;Te++){const ze=ye[Te];Oi(K,V,A,ze)}rt&&Ve.render(A);for(let Te=0,Fe=ye.length;Te<Fe;Te++){const ze=ye[Te];Un(_,A,ze,ze.viewport)}}else V.length>0&&Oi(K,V,A,W),rt&&Ve.render(A),Un(_,A,W);P!==null&&(D.updateMultisampleRenderTarget(P),D.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(M,A,W),yt.resetDefaultState(),U=-1,ne=null,x.pop(),x.length>0?(m=x[x.length-1],ie===!0&&_e.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ei(A,W,Y,K){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||oe.intersectsSprite(A)){K&&Ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ge);const Te=$.update(A),Fe=A.material;Fe.visible&&_.push(A,Te,Fe,Y,Ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||oe.intersectsObject(A))){const Te=$.update(A),Fe=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ne.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ne.copy(Te.boundingSphere.center)),Ne.applyMatrix4(A.matrixWorld).applyMatrix4(ge)),Array.isArray(Fe)){const ze=Te.groups;for(let je=0,Ke=ze.length;je<Ke;je++){const ke=ze[je],_t=Fe[ke.materialIndex];_t&&_t.visible&&_.push(A,Te,_t,Y,Ne.z,ke)}}else Fe.visible&&_.push(A,Te,Fe,Y,Ne.z,null)}}const ye=A.children;for(let Te=0,Fe=ye.length;Te<Fe;Te++)Ei(ye[Te],W,Y,K)}function Un(A,W,Y,K){const V=A.opaque,ye=A.transmissive,Te=A.transparent;m.setupLightsView(Y),ie===!0&&_e.setGlobalState(M.clippingPlanes,Y),K&&Ye.viewport(S.copy(K)),V.length>0&&mi(V,W,Y),ye.length>0&&mi(ye,W,Y),Te.length>0&&mi(Te,W,Y),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Oi(A,W,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new ns(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?so:ts,minFilter:ys,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const ye=m.state.transmissionRenderTarget[K.id],Te=K.viewport||S;ye.setSize(Te.z,Te.w);const Fe=M.getRenderTarget();M.setRenderTarget(ye),M.getClearColor(z),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),rt&&Ve.render(Y);const ze=M.toneMapping;M.toneMapping=bs;const je=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),ie===!0&&_e.setGlobalState(M.clippingPlanes,K),mi(A,Y,K),D.updateMultisampleRenderTarget(ye),D.updateRenderTargetMipmap(ye),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let ke=0,_t=W.length;ke<_t;ke++){const At=W[ke],Ft=At.object,wn=At.geometry,gt=At.material,Ge=At.group;if(gt.side===ni&&Ft.layers.test(K.layers)){const Zt=gt.side;gt.side=Gn,gt.needsUpdate=!0,da(Ft,Y,K,wn,gt,Ge),gt.side=Zt,gt.needsUpdate=!0,Ke=!0}}Ke===!0&&(D.updateMultisampleRenderTarget(ye),D.updateRenderTargetMipmap(ye))}M.setRenderTarget(Fe),M.setClearColor(z,X),je!==void 0&&(K.viewport=je),M.toneMapping=ze}function mi(A,W,Y){const K=W.isScene===!0?W.overrideMaterial:null;for(let V=0,ye=A.length;V<ye;V++){const Te=A[V],Fe=Te.object,ze=Te.geometry,je=K===null?Te.material:K,Ke=Te.group;Fe.layers.test(Y.layers)&&da(Fe,W,Y,ze,je,Ke)}}function da(A,W,Y,K,V,ye){A.onBeforeRender(M,W,Y,K,V,ye),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(M,W,Y,K,A,ye),V.transparent===!0&&V.side===ni&&V.forceSinglePass===!1?(V.side=Gn,V.needsUpdate=!0,M.renderBufferDirect(Y,W,K,V,A,ye),V.side=Ts,V.needsUpdate=!0,M.renderBufferDirect(Y,W,K,V,A,ye),V.side=ni):M.renderBufferDirect(Y,W,K,V,A,ye),A.onAfterRender(M,W,Y,K,V,ye)}function Cs(A,W,Y){W.isScene!==!0&&(W=He);const K=qe.get(A),V=m.state.lights,ye=m.state.shadowsArray,Te=V.state.version,Fe=we.getParameters(A,V.state,ye,W,Y),ze=we.getProgramCacheKey(Fe);let je=K.programs;K.environment=A.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(A.isMeshStandardMaterial?J:E).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,je===void 0&&(A.addEventListener("dispose",mt),je=new Map,K.programs=je);let Ke=je.get(ze);if(Ke!==void 0){if(K.currentProgram===Ke&&K.lightsStateVersion===Te)return lo(A,Fe),Ke}else Fe.uniforms=we.getUniforms(A),A.onBeforeCompile(Fe,M),Ke=we.acquireProgram(Fe,ze),je.set(ze,Ke),K.uniforms=Fe.uniforms;const ke=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=_e.uniform),lo(A,Fe),K.needsLights=Rs(A),K.lightsStateVersion=Te,K.needsLights&&(ke.ambientLightColor.value=V.state.ambient,ke.lightProbe.value=V.state.probe,ke.directionalLights.value=V.state.directional,ke.directionalLightShadows.value=V.state.directionalShadow,ke.spotLights.value=V.state.spot,ke.spotLightShadows.value=V.state.spotShadow,ke.rectAreaLights.value=V.state.rectArea,ke.ltc_1.value=V.state.rectAreaLTC1,ke.ltc_2.value=V.state.rectAreaLTC2,ke.pointLights.value=V.state.point,ke.pointLightShadows.value=V.state.pointShadow,ke.hemisphereLights.value=V.state.hemi,ke.directionalShadowMap.value=V.state.directionalShadowMap,ke.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ke.spotShadowMap.value=V.state.spotShadowMap,ke.spotLightMatrix.value=V.state.spotLightMatrix,ke.spotLightMap.value=V.state.spotLightMap,ke.pointShadowMap.value=V.state.pointShadowMap,ke.pointShadowMatrix.value=V.state.pointShadowMatrix),K.currentProgram=Ke,K.uniformsList=null,Ke}function oo(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=nl.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function lo(A,W){const Y=qe.get(A);Y.outputColorSpace=W.outputColorSpace,Y.batching=W.batching,Y.batchingColor=W.batchingColor,Y.instancing=W.instancing,Y.instancingColor=W.instancingColor,Y.instancingMorph=W.instancingMorph,Y.skinning=W.skinning,Y.morphTargets=W.morphTargets,Y.morphNormals=W.morphNormals,Y.morphColors=W.morphColors,Y.morphTargetsCount=W.morphTargetsCount,Y.numClippingPlanes=W.numClippingPlanes,Y.numIntersection=W.numClipIntersection,Y.vertexAlphas=W.vertexAlphas,Y.vertexTangents=W.vertexTangents,Y.toneMapping=W.toneMapping}function ki(A,W,Y,K,V){W.isScene!==!0&&(W=He),D.resetTextureUnits();const ye=W.fog,Te=K.isMeshStandardMaterial?W.environment:null,Fe=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:As,ze=(K.isMeshStandardMaterial?J:E).get(K.envMap||Te),je=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ke=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ke=!!Y.morphAttributes.position,_t=!!Y.morphAttributes.normal,At=!!Y.morphAttributes.color;let Ft=bs;K.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ft=M.toneMapping);const wn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,gt=wn!==void 0?wn.length:0,Ge=qe.get(K),Zt=m.state.lights;if(ie===!0&&(de===!0||A!==ne)){const Nn=A===ne&&K.id===U;_e.setState(K,A,Nn)}let it=!1;K.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Zt.state.version||Ge.outputColorSpace!==Fe||V.isBatchedMesh&&Ge.batching===!1||!V.isBatchedMesh&&Ge.batching===!0||V.isBatchedMesh&&Ge.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ge.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ge.instancing===!1||!V.isInstancedMesh&&Ge.instancing===!0||V.isSkinnedMesh&&Ge.skinning===!1||!V.isSkinnedMesh&&Ge.skinning===!0||V.isInstancedMesh&&Ge.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ge.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ge.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ge.instancingMorph===!1&&V.morphTexture!==null||Ge.envMap!==ze||K.fog===!0&&Ge.fog!==ye||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==_e.numPlanes||Ge.numIntersection!==_e.numIntersection)||Ge.vertexAlphas!==je||Ge.vertexTangents!==Ke||Ge.morphTargets!==ke||Ge.morphNormals!==_t||Ge.morphColors!==At||Ge.toneMapping!==Ft||Ge.morphTargetsCount!==gt)&&(it=!0):(it=!0,Ge.__version=K.version);let Xn=Ge.currentProgram;it===!0&&(Xn=Cs(K,W,V));let zi=!1,bn=!1,ar=!1;const Wt=Xn.getUniforms(),Ai=Ge.uniforms;if(Ye.useProgram(Xn.program)&&(zi=!0,bn=!0,ar=!0),K.id!==U&&(U=K.id,bn=!0),zi||ne!==A){ut.reverseDepthBuffer?(xe.copy(A.projectionMatrix),Av(xe),Cv(xe),Wt.setValue(N,"projectionMatrix",xe)):Wt.setValue(N,"projectionMatrix",A.projectionMatrix),Wt.setValue(N,"viewMatrix",A.matrixWorldInverse);const Nn=Wt.map.cameraPosition;Nn!==void 0&&Nn.setValue(N,Xe.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&Wt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Wt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),ne!==A&&(ne=A,bn=!0,ar=!0)}if(V.isSkinnedMesh){Wt.setOptional(N,V,"bindMatrix"),Wt.setOptional(N,V,"bindMatrixInverse");const Nn=V.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Wt.setValue(N,"boneTexture",Nn.boneTexture,D))}V.isBatchedMesh&&(Wt.setOptional(N,V,"batchingTexture"),Wt.setValue(N,"batchingTexture",V._matricesTexture,D),Wt.setOptional(N,V,"batchingIdTexture"),Wt.setValue(N,"batchingIdTexture",V._indirectTexture,D),Wt.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&Wt.setValue(N,"batchingColorTexture",V._colorsTexture,D));const fa=Y.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0)&&We.update(V,Y,Xn),(bn||Ge.receiveShadow!==V.receiveShadow)&&(Ge.receiveShadow=V.receiveShadow,Wt.setValue(N,"receiveShadow",V.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Ai.envMap.value=ze,Ai.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(Ai.envMapIntensity.value=W.environmentIntensity),bn&&(Wt.setValue(N,"toneMappingExposure",M.toneMappingExposure),Ge.needsLights&&jl(Ai,ar),ye&&K.fog===!0&&Me.refreshFogUniforms(Ai,ye),Me.refreshMaterialUniforms(Ai,K,F,q,m.state.transmissionRenderTarget[A.id]),nl.upload(N,oo(Ge),Ai,D)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(nl.upload(N,oo(Ge),Ai,D),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Wt.setValue(N,"center",V.center),Wt.setValue(N,"modelViewMatrix",V.modelViewMatrix),Wt.setValue(N,"normalMatrix",V.normalMatrix),Wt.setValue(N,"modelMatrix",V.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Nn=K.uniformsGroups;for(let or=0,Kl=Nn.length;or<Kl;or++){const pa=Nn[or];G.update(pa,Xn),G.bind(pa,Xn)}}return Xn}function jl(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Rs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,W,Y){qe.get(A.texture).__webglTexture=W,qe.get(A.depthTexture).__webglTexture=Y;const K=qe.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const Y=qe.get(A);Y.__webglFramebuffer=W,Y.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,Y=0){P=A,I=W,C=Y;let K=!0,V=null,ye=!1,Te=!1;if(A){const ze=qe.get(A);if(ze.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(N.FRAMEBUFFER,null),K=!1;else if(ze.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(ze.__hasExternalTextures)D.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ke=A.depthTexture;if(ze.__boundDepthTexture!==ke){if(ke!==null&&qe.has(ke)&&(A.width!==ke.image.width||A.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Te=!0);const Ke=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[W])?V=Ke[W][Y]:V=Ke[W],ye=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?V=qe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?V=Ke[Y]:V=Ke,S.copy(A.viewport),b.copy(A.scissor),H=A.scissorTest}else S.copy(ce).multiplyScalar(F).floor(),b.copy(ae).multiplyScalar(F).floor(),H=me;if(Ye.bindFramebuffer(N.FRAMEBUFFER,V)&&K&&Ye.drawBuffers(A,V),Ye.viewport(S),Ye.scissor(b),Ye.setScissorTest(H),ye){const ze=qe.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,Y)}else if(Te){const ze=qe.get(A.texture),je=W||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ze.__webglTexture,Y||0,je)}U=-1},this.readRenderTargetPixels=function(A,W,Y,K,V,ye,Te){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Fe=Fe[Te]),Fe){Ye.bindFramebuffer(N.FRAMEBUFFER,Fe);try{const ze=A.texture,je=ze.format,Ke=ze.type;if(!ut.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-K&&Y>=0&&Y<=A.height-V&&N.readPixels(W,Y,K,V,tt.convert(je),tt.convert(Ke),ye)}finally{const ze=P!==null?qe.get(P).__webglFramebuffer:null;Ye.bindFramebuffer(N.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,W,Y,K,V,ye,Te){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Fe=Fe[Te]),Fe){const ze=A.texture,je=ze.format,Ke=ze.type;if(!ut.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-K&&Y>=0&&Y<=A.height-V){Ye.bindFramebuffer(N.FRAMEBUFFER,Fe);const ke=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ke),N.bufferData(N.PIXEL_PACK_BUFFER,ye.byteLength,N.STREAM_READ),N.readPixels(W,Y,K,V,tt.convert(je),tt.convert(Ke),0);const _t=P!==null?qe.get(P).__webglFramebuffer:null;Ye.bindFramebuffer(N.FRAMEBUFFER,_t);const At=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ev(N,At,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ke),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ye),N.deleteBuffer(ke),N.deleteSync(At),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,Y=0){A.isTexture!==!0&&(tl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const K=Math.pow(2,-Y),V=Math.floor(A.image.width*K),ye=Math.floor(A.image.height*K),Te=W!==null?W.x:0,Fe=W!==null?W.y:0;D.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,Te,Fe,V,ye),Ye.unbindTexture()},this.copyTextureToTexture=function(A,W,Y=null,K=null,V=0){A.isTexture!==!0&&(tl("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1],W=arguments[2],V=arguments[3]||0,Y=null);let ye,Te,Fe,ze,je,Ke;Y!==null?(ye=Y.max.x-Y.min.x,Te=Y.max.y-Y.min.y,Fe=Y.min.x,ze=Y.min.y):(ye=A.image.width,Te=A.image.height,Fe=0,ze=0),K!==null?(je=K.x,Ke=K.y):(je=0,Ke=0);const ke=tt.convert(W.format),_t=tt.convert(W.type);D.setTexture2D(W,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);const At=N.getParameter(N.UNPACK_ROW_LENGTH),Ft=N.getParameter(N.UNPACK_IMAGE_HEIGHT),wn=N.getParameter(N.UNPACK_SKIP_PIXELS),gt=N.getParameter(N.UNPACK_SKIP_ROWS),Ge=N.getParameter(N.UNPACK_SKIP_IMAGES),Zt=A.isCompressedTexture?A.mipmaps[V]:A.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Zt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Zt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Fe),N.pixelStorei(N.UNPACK_SKIP_ROWS,ze),A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,V,je,Ke,ye,Te,ke,_t,Zt.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,V,je,Ke,Zt.width,Zt.height,ke,Zt.data):N.texSubImage2D(N.TEXTURE_2D,V,je,Ke,ye,Te,ke,_t,Zt),N.pixelStorei(N.UNPACK_ROW_LENGTH,At),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ft),N.pixelStorei(N.UNPACK_SKIP_PIXELS,wn),N.pixelStorei(N.UNPACK_SKIP_ROWS,gt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ge),V===0&&W.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ye.unbindTexture()},this.copyTextureToTexture3D=function(A,W,Y=null,K=null,V=0){A.isTexture!==!0&&(tl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,K=arguments[1]||null,A=arguments[2],W=arguments[3],V=arguments[4]||0);let ye,Te,Fe,ze,je,Ke,ke,_t,At;const Ft=A.isCompressedTexture?A.mipmaps[V]:A.image;Y!==null?(ye=Y.max.x-Y.min.x,Te=Y.max.y-Y.min.y,Fe=Y.max.z-Y.min.z,ze=Y.min.x,je=Y.min.y,Ke=Y.min.z):(ye=Ft.width,Te=Ft.height,Fe=Ft.depth,ze=0,je=0,Ke=0),K!==null?(ke=K.x,_t=K.y,At=K.z):(ke=0,_t=0,At=0);const wn=tt.convert(W.format),gt=tt.convert(W.type);let Ge;if(W.isData3DTexture)D.setTexture3D(W,0),Ge=N.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)D.setTexture2DArray(W,0),Ge=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);const Zt=N.getParameter(N.UNPACK_ROW_LENGTH),it=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Xn=N.getParameter(N.UNPACK_SKIP_PIXELS),zi=N.getParameter(N.UNPACK_SKIP_ROWS),bn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ze),N.pixelStorei(N.UNPACK_SKIP_ROWS,je),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ke),A.isDataTexture||A.isData3DTexture?N.texSubImage3D(Ge,V,ke,_t,At,ye,Te,Fe,wn,gt,Ft.data):W.isCompressedArrayTexture?N.compressedTexSubImage3D(Ge,V,ke,_t,At,ye,Te,Fe,wn,Ft.data):N.texSubImage3D(Ge,V,ke,_t,At,ye,Te,Fe,wn,gt,Ft),N.pixelStorei(N.UNPACK_ROW_LENGTH,Zt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,it),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Xn),N.pixelStorei(N.UNPACK_SKIP_ROWS,zi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,bn),V===0&&W.generateMipmaps&&N.generateMipmap(Ge),Ye.unbindTexture()},this.initRenderTarget=function(A){qe.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){I=0,C=0,P=null,Ye.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===fu?"display-p3":"srgb",t.unpackColorSpace=Et.workingColorSpace===Ll?"display-p3":"srgb"}}class _u extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xu extends In{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Kt,u=Kt,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zh extends An{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Dr=new Lt,df=new Lt,Fo=[],ff=new Ui,zS=new Lt,Ta=new It,Ea=new Ni;class BS extends It{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,zS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Dr),ff.copy(e.boundingBox).applyMatrix4(Dr),this.boundingBox.union(ff)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Dr),Ea.copy(e.boundingSphere).applyMatrix4(Dr),this.boundingSphere.union(Ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ta.geometry=this.geometry,Ta.material=this.material,Ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ea.copy(this.boundingSphere),Ea.applyMatrix4(i),e.ray.intersectsSphere(Ea)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Dr),df.multiplyMatrices(i,Dr),Ta.matrixWorld=df,Ta.raycast(e,Fo);for(let a=0,o=Fo.length;a<o;a++){const l=Fo[a];l.instanceId=r,l.object=this,t.push(l)}Fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new xu(new Float32Array(s*this.count),s,this.count,cu,Yn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class xm extends sa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fl=new O,pl=new O,pf=new Lt,Aa=new ro,Oo=new Ni,kc=new O,mf=new O;class Mm extends Wn{constructor(e=new en,t=new xm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)fl.fromBufferAttribute(t,s-1),pl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=fl.distanceTo(pl);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(s),Oo.radius+=r,e.ray.intersectsSphere(Oo)===!1)return;pf.copy(s).invert(),Aa.copy(e.ray).applyMatrix4(pf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),x=u.getX(_+1),M=ko(this,e,Aa,l,p,x);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=ko(this,e,Aa,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=ko(this,e,Aa,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=ko(this,e,Aa,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ko(n,e,t,i,s,r){const a=n.geometry.attributes.position;if(fl.fromBufferAttribute(a,s),pl.fromBufferAttribute(a,r),t.distanceSqToSegment(fl,pl,kc,mf)>i)return;kc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(kc);if(!(l<e.near||l>e.far))return{distance:l,point:mf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const gf=new O,vf=new O;class HS extends Mm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)gf.fromBufferAttribute(t,s),vf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+gf.distanceTo(vf);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class VS extends sa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _f=new Lt,Bh=new ro,zo=new Ni,Bo=new O;class GS extends Wn{constructor(e=new en,t=new VS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(s),zo.radius+=r,e.ray.intersectsSphere(zo)===!1)return;_f.copy(s).invert(),Bh.copy(e.ray).applyMatrix4(_f);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,_=f;g<_;g++){const m=c.getX(g);Bo.fromBufferAttribute(d,m),xf(Bo,m,l,s,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,_=f;g<_;g++)Bo.fromBufferAttribute(d,g),xf(Bo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function xf(n,e,t,i,s,r,a){const o=Bh.distanceSqToPoint(n);if(o<t){const l=new O;Bh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Fi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],h=i[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new be:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new O,s=[],r=[],a=[],o=new O,l=new Lt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Mn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Mn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Mu extends Fi{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new be){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class WS extends Mu{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function yu(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const Ho=new O,zc=new yu,Bc=new yu,Hc=new yu;class $S extends Fi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new O){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Ho.subVectors(s[0],s[1]).add(s[0]),c=Ho);const d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Ho.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ho),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),zc.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,_,m),Bc.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,_,m),Hc.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(zc.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Bc.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Hc.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(zc.calc(l),Bc.calc(l),Hc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Mf(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function XS(n,e){const t=1-n;return t*t*e}function qS(n,e){return 2*(1-n)*n*e}function YS(n,e){return n*n*e}function Ba(n,e,t,i){return XS(n,e)+qS(n,t)+YS(n,i)}function jS(n,e){const t=1-n;return t*t*t*e}function KS(n,e){const t=1-n;return 3*t*t*n*e}function ZS(n,e){return 3*(1-n)*n*n*e}function JS(n,e){return n*n*n*e}function Ha(n,e,t,i,s){return jS(n,e)+KS(n,t)+ZS(n,i)+JS(n,s)}class ym extends Fi{constructor(e=new be,t=new be,i=new be,s=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new be){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ha(e,s.x,r.x,a.x,o.x),Ha(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class QS extends Fi{constructor(e=new O,t=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ha(e,s.x,r.x,a.x,o.x),Ha(e,s.y,r.y,a.y,o.y),Ha(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Sm extends Fi{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ew extends Fi{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wm extends Fi{constructor(e=new be,t=new be,i=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new be){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ba(e,s.x,r.x,a.x),Ba(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tw extends Fi{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ba(e,s.x,r.x,a.x),Ba(e,s.y,r.y,a.y),Ba(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bm extends Fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Mf(o,l.x,c.x,u.x,d.x),Mf(o,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new be().fromArray(s))}return this}}var yf=Object.freeze({__proto__:null,ArcCurve:WS,CatmullRomCurve3:$S,CubicBezierCurve:ym,CubicBezierCurve3:QS,EllipseCurve:Mu,LineCurve:Sm,LineCurve3:ew,QuadraticBezierCurve:wm,QuadraticBezierCurve3:tw,SplineCurve:bm});class nw extends Fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yf[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new yf[s.type]().fromJSON(s))}return this}}class Sf extends nw{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Sm(this.currentPoint.clone(),new be(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new wm(this.currentPoint.clone(),new be(e,t),new be(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new ym(this.currentPoint.clone(),new be(e,t),new be(i,s),new be(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new bm(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){const c=new Mu(e,t,i,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Su extends en{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new O,u=new be;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(o,3)),this.setAttribute("uv",new Ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Su(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ml extends en{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const _=[],m=i/2;let p=0;x(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Ct(d,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(f,2));function x(){const w=new O,I=new O;let C=0;const P=(t-e)/i;for(let U=0;U<=r;U++){const ne=[],S=U/r,b=S*(t-e)+e;for(let H=0;H<=s;H++){const z=H/s,X=z*l+o,j=Math.sin(X),q=Math.cos(X);I.x=b*j,I.y=-S*i+m,I.z=b*q,d.push(I.x,I.y,I.z),w.set(j,P,q).normalize(),h.push(w.x,w.y,w.z),f.push(z,1-S),ne.push(g++)}_.push(ne)}for(let U=0;U<s;U++)for(let ne=0;ne<r;ne++){const S=_[ne][U],b=_[ne+1][U],H=_[ne+1][U+1],z=_[ne][U+1];e>0&&(u.push(S,b,z),C+=3),t>0&&(u.push(b,H,z),C+=3)}c.addGroup(p,C,0),p+=C}function M(w){const I=g,C=new be,P=new O;let U=0;const ne=w===!0?e:t,S=w===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,m*S,0),h.push(0,S,0),f.push(.5,.5),g++;const b=g;for(let H=0;H<=s;H++){const X=H/s*l+o,j=Math.cos(X),q=Math.sin(X);P.x=ne*q,P.y=m*S,P.z=ne*j,d.push(P.x,P.y,P.z),h.push(0,S,0),C.x=j*.5+.5,C.y=q*.5*S+.5,f.push(C.x,C.y),g++}for(let H=0;H<s;H++){const z=I+H,X=b+H;w===!0?u.push(X,X+1,z):u.push(X+1,X,z),U+=3}c.addGroup(p,U,w===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tm extends Sf{constructor(e){super(e),this.uuid=ir(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Sf().fromJSON(s))}return this}}const iw={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Em(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,d,h,f;if(i&&(r=lw(n,e,r,t)),n.length>80*t){o=c=n[0],l=u=n[1];for(let g=t;g<s;g+=t)d=n[g],h=n[g+1],d<o&&(o=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return Ja(r,a,t,o,l,f,0),a}};function Em(n,e,t,i,s){let r,a;if(s===xw(n,e,t,i)>0)for(r=e;r<t;r+=i)a=wf(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=wf(r,n[r],n[r+1],a);return a&&Ul(a,a.next)&&(eo(a),a=a.next),a}function Js(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ul(t,t.next)||$t(t.prev,t,t.next)===0)){if(eo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ja(n,e,t,i,s,r,a){if(!n)return;!a&&r&&fw(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?rw(n,i,s,r):sw(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),eo(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=aw(Js(n),e,t),Ja(n,e,t,i,s,r,2)):a===2&&ow(n,e,t,i,s,r):Ja(Js(n),e,t,i,s,r,1);break}}}function sw(n){const e=n.prev,t=n,i=n.next;if($t(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,h=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Or(s,o,r,l,a,c,g.x,g.y)&&$t(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function rw(n,e,t,i){const s=n.prev,r=n,a=n.next;if($t(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=o<l?o<c?o:c:l<c?l:c,g=u<d?u<h?u:h:d<h?d:h,_=o>l?o>c?o:c:l>c?l:c,m=u>d?u>h?u:h:d>h?d:h,p=Hh(f,g,e,t,i),x=Hh(_,m,e,t,i);let M=n.prevZ,w=n.nextZ;for(;M&&M.z>=p&&w&&w.z<=x;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Or(o,u,l,d,c,h,M.x,M.y)&&$t(M.prev,M,M.next)>=0||(M=M.prevZ,w.x>=f&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&Or(o,u,l,d,c,h,w.x,w.y)&&$t(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Or(o,u,l,d,c,h,M.x,M.y)&&$t(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;w&&w.z<=x;){if(w.x>=f&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&Or(o,u,l,d,c,h,w.x,w.y)&&$t(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function aw(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!Ul(s,r)&&Am(s,i,i.next,r)&&Qa(s,r)&&Qa(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),eo(i),eo(i.next),i=n=r),i=i.next}while(i!==n);return Js(i)}function ow(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&gw(a,o)){let l=Cm(a,o);a=Js(a,a.next),l=Js(l,l.next),Ja(a,e,t,i,s,r,0),Ja(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function lw(n,e,t,i){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Em(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(mw(c));for(s.sort(cw),r=0;r<s.length;r++)t=hw(s[r],t);return t}function cw(n,e){return n.x-e.x}function hw(n,e){const t=uw(n,e);if(!t)return e;const i=Cm(t,n);return Js(i,i.next),Js(t,t.next)}function uw(n,e){let t=e,i=-1/0,s;const r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const h=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=r&&h>i&&(i=h,s=t.x<t.next.x?t:t.next,h===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Or(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),Qa(t,n)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&dw(s,t)))&&(s=t,u=d)),t=t.next;while(t!==o);return s}function dw(n,e){return $t(n.prev,n,e.prev)<0&&$t(e.next,n,n.next)<0}function fw(n,e,t,i){let s=n;do s.z===0&&(s.z=Hh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,pw(s)}function pw(n){let e,t,i,s,r,a,o,l,c=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(a>1);return n}function Hh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function mw(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Or(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function gw(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!vw(n,e)&&(Qa(n,e)&&Qa(e,n)&&_w(n,e)&&($t(n.prev,n,e.prev)||$t(n,e.prev,e))||Ul(n,e)&&$t(n.prev,n,n.next)>0&&$t(e.prev,e,e.next)>0)}function $t(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ul(n,e){return n.x===e.x&&n.y===e.y}function Am(n,e,t,i){const s=Go($t(n,e,t)),r=Go($t(n,e,i)),a=Go($t(t,i,n)),o=Go($t(t,i,e));return!!(s!==r&&a!==o||s===0&&Vo(n,t,e)||r===0&&Vo(n,i,e)||a===0&&Vo(t,n,i)||o===0&&Vo(t,e,i))}function Vo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Go(n){return n>0?1:n<0?-1:0}function vw(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Am(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Qa(n,e){return $t(n.prev,n,n.next)<0?$t(n,e,n.next)>=0&&$t(n,n.prev,e)>=0:$t(n,e,n.prev)<0||$t(n,n.next,e)<0}function _w(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Cm(n,e){const t=new Vh(n.i,n.x,n.y),i=new Vh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function wf(n,e,t,i){const s=new Vh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function eo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Vh(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xw(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class $r{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return $r.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];bf(e),Tf(i,e);let a=e.length;t.forEach(bf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Tf(i,t[l]);const o=iw.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function bf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Tf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class gl extends en{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/s,f=new O,g=new be;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const x=p+m,M=x,w=x+i+1,I=x+i+2,C=x+1;o.push(M,w,C),o.push(w,I,C)}}this.setIndex(o),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wu extends en{constructor(e=new Tm([new be(0,.5),new be(-.5,-.5),new be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ct(s,3)),this.setAttribute("normal",new Ct(r,3)),this.setAttribute("uv",new Ct(a,2));function c(u){const d=s.length/3,h=u.extractPoints(t);let f=h.shape;const g=h.holes;$r.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const x=g[m];$r.isClockWise(x)===!0&&(g[m]=x.reverse())}const _=$r.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const x=g[m];f=f.concat(x)}for(let m=0,p=f.length;m<p;m++){const x=f[m];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,p=_.length;m<p;m++){const x=_[m],M=x[0]+d,w=x[1]+d,I=x[2]+d;i.push(M,w,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Mw(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];i.push(a)}return new wu(i,e.curveSegments)}}function Mw(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class kr extends en{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new O,h=new O,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const x=[],M=p/i;let w=0;p===0&&a===0?w=.5/t:p===i&&l===Math.PI&&(w=-.5/t);for(let I=0;I<=t;I++){const C=I/t;d.x=-e*Math.cos(s+C*r)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(s+C*r)*Math.sin(a+M*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(C+w,1-M),x.push(c++)}u.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const M=u[p][x+1],w=u[p][x],I=u[p+1][x],C=u[p+1][x+1];(p!==0||a>0)&&f.push(M,w,C),(p!==i-1||l<Math.PI)&&f.push(w,I,C)}this.setIndex(f),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ji extends ss{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yw extends en{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Ef=new Lt;class Af{constructor(e,t,i=0,s=1/0){this.ray=new ro(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new mu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ef.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ef),this}intersectObject(e,t=!0,i=[]){return Gh(e,this,i,t),i.sort(Cf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Gh(e[s],this,i,t);return i.sort(Cf),i}}function Cf(n,e){return n.distance-e.distance}function Gh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Gh(r[a],e,t,!0)}}class Rf{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Mn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Sw extends nr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ru}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ru);const ww=`
precision highp float;
in vec3 position;
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,bu=`
precision highp float;
precision highp int;
precision highp sampler2D;
uniform sampler2D uState0;
uniform sampler2D uState1;
uniform sampler2D uTerrain;
uniform sampler2D uMod;
uniform sampler2D uChan;
uniform ivec2 uSize;
uniform float uDt;
uniform float uDx;
uniform float uG;
uniform float uTide;       // sea boundary water level (mPD)
uniform float uRain;       // rain rate (m/s) already multiplied by scene factor
uniform float uDrain;      // base drainage capacity (m/s)
uniform float uTheta;      // flux averaging weight (0.7-1.0)
uniform float uHmin;       // minimum flow depth (m)
uniform float uManning;    // Manning n
uniform float uBuildings;  // 1 = buildings block flow
uniform float uBldBlock;   // threshold height added on building cells (m)
uniform float uManningBld; // Manning n inside building footprints
uniform float uHs;         // significant wave height at the coast (m)
uniform float uTankRate;   // max intake per tank cell (m/s)
uniform float uWeirB;      // basement entrance opening width per entrance cell (m): weir-law intake (see tank intake below)
uniform float uHillCap;    // extra interception capacity on the slopes (m/s): catchwaters + natural stream channels
uniform float uRecover;    // spare drainage-network capacity (capacity - rain) made available to ponded water, as a gain
uniform float uTideLock;   // metres of ground above the sea level over which drowned outfalls recover their capacity
uniform sampler2D uSgC0;   // sub-grid: ascending elevation quantiles 0..3 of the 1 m terrain inside the cell
uniform sampler2D uSgC1;   // quantiles 4..7
uniform sampler2D uSgFE;   // east-face profile quantiles 0..3 (higher of the two pixel columns along the shared edge)
uniform sampler2D uSgFN;   // north-face profile quantiles 0..3
uniform float uSubgrid;    // 1 = sub-grid mode: h is the volume per cell area, eta from the stage-volume curve, faces from their profiles
uniform float uSill;       // tanks / basements take water only above this street depth (entrance hump, step, flood board), m
in vec2 vUv;
layout(location = 0) out vec4 o0;
layout(location = 1) out vec4 o1;

ivec2 clampIdx(ivec2 c) { return clamp(c, ivec2(0), uSize - ivec2(1)); }
float zOf(ivec2 c) {
  vec4 t = texelFetch(uTerrain, c, 0);
  vec4 m = texelFetch(uMod, c, 0);
  return t.r + uBuildings * min(t.g, uBldBlock) + m.r;
}
float nOf(ivec2 c) { return (uBuildings > 0.5 && texelFetch(uTerrain, c, 0).g > 0.0) ? uManningBld : uManning; }
float seaOf(ivec2 c) { return texelFetch(uTerrain, c, 0).a; }
// barrier / terrain change from the measures layer (walls, removed defences); shifts the whole cell in sub-grid mode
float modR(ivec2 c) { return texelFetch(uMod, c, 0).r; }
// shift of a face between two cells: a wall on either side raises the face; a lowered cell lowers it
float faceShift(float m0, float m1) { return (m0 > 0.0 || m1 > 0.0) ? max(m0, m1) : min(m0, m1); }
// ---- sub-grid terrain (pipeline/hkflood/subgrid.py) -------------------------------------------------
// water level of a cell from its volume-depth h: V(eta) = 1/8 sum max(0, eta - z_k) inverted bracket by bracket
// (the cell quantiles are shifted by modR so that measures also act in sub-grid mode)
float etaOf(ivec2 c, float h) {
  vec4 a = texelFetch(uSgC0, c, 0), b = texelFetch(uSgC1, c, 0);
  float mr = modR(c);
  float z[9]; z[0] = a.r; z[1] = a.g; z[2] = a.b; z[3] = a.a; z[4] = b.r; z[5] = b.g; z[6] = b.b; z[7] = b.a; z[8] = 1.0e9;
  if (h <= 0.0) return z[0] + mr;
  float S = 0.0; float V = 8.0 * h;
  for (int k = 0; k < 8; k++) {
    S += z[k];
    float eta = (V + S) / float(k + 1);
    if (eta <= z[k + 1]) return eta + mr;
  }
  return (V + S) / 8.0 + mr;
}
// wet fraction of a cell at level eta
float wetOf(ivec2 c, float eta) {
  vec4 a = texelFetch(uSgC0, c, 0), b = texelFetch(uSgC1, c, 0);
  eta -= modR(c);
  float n = (eta > a.r ? 1.0 : 0.0) + (eta > a.g ? 1.0 : 0.0) + (eta > a.b ? 1.0 : 0.0) + (eta > a.a ? 1.0 : 0.0)
          + (eta > b.r ? 1.0 : 0.0) + (eta > b.g ? 1.0 : 0.0) + (eta > b.b ? 1.0 : 0.0) + (eta > b.a ? 1.0 : 0.0);
  return n / 8.0;
}
// stored volume per cell area at level eta
float volOf(ivec2 c, float eta) {
  vec4 a = texelFetch(uSgC0, c, 0), b = texelFetch(uSgC1, c, 0);
  return 0.125 * (max(0.0, eta - a.r) + max(0.0, eta - a.g) + max(0.0, eta - a.b) + max(0.0, eta - a.a)
                + max(0.0, eta - b.r) + max(0.0, eta - b.g) + max(0.0, eta - b.b) + max(0.0, eta - b.a));
}
`,bw=bu+`
float faceFlux(float h0, float h1, float z0, float z1, float qPrev, float qN1, float qN2, float nf) {
  float eta0 = z0 + h0, eta1 = z1 + h1;
  float hf = max(eta0, eta1) - max(z0, z1);
  if (hf <= uHmin) return 0.0;
  float S = (eta1 - eta0) / uDx;
  float qp = uTheta * qPrev + 0.5 * (1.0 - uTheta) * (qN1 + qN2);
  float denom = 1.0 + uG * uDt * nf * nf * abs(qp) / pow(hf, 7.0 / 3.0);
  float q = (qp - uG * hf * uDt * S) / denom;
  // volume limiter: at most a quarter of the upstream cell's water per step
  float lim = 0.25 * uDx / uDt;
  if (q > 0.0) q = min(q, h0 * lim); else q = max(q, -h1 * lim);
  // Froude limiter
  float qmax = hf * sqrt(uG * hf);
  return clamp(q, -qmax, qmax);
}
// sub-grid face: wetted area per unit width A and wet width fraction w from the face profile quantiles at the
// higher of the two water levels; hydraulic depth A / w; same local-inertial update with A in place of hf
float faceFluxSg(float h0, float h1, float eta0, float eta1, vec4 f, float qPrev, float qN1, float qN2, float nf) {
  float em = max(eta0, eta1);
  float a0 = max(0.0, em - f.r), a1 = max(0.0, em - f.g), a2 = max(0.0, em - f.b), a3 = max(0.0, em - f.a);
  float A = 0.25 * (a0 + a1 + a2 + a3);
  if (A <= uHmin) return 0.0;
  float w = 0.25 * ((a0 > 0.0 ? 1.0 : 0.0) + (a1 > 0.0 ? 1.0 : 0.0) + (a2 > 0.0 ? 1.0 : 0.0) + (a3 > 0.0 ? 1.0 : 0.0));
  float d = A / w;
  float S = (eta1 - eta0) / uDx;
  float qp = uTheta * qPrev + 0.5 * (1.0 - uTheta) * (qN1 + qN2);
  float denom = 1.0 + uG * uDt * nf * nf * abs(qp) / (w * pow(d, 7.0 / 3.0));
  float q = (qp - uG * A * uDt * S) / denom;
  float lim = 0.25 * uDx / uDt;
  if (q > 0.0) q = min(q, h0 * lim); else q = max(q, -h1 * lim);
  float qmax = A * sqrt(uG * d);
  return clamp(q, -qmax, qmax);
}
void main() {
  ivec2 ij = ivec2(gl_FragCoord.xy);
  vec4 s = texelFetch(uState0, ij, 0);
  float h = s.r;
  float z = zOf(ij);
  float sea = seaOf(ij);
  bool sg = uSubgrid > 0.5;
  float eta0 = sg ? etaOf(ij, h) : 0.0;
  float qx = 0.0, qy = 0.0;
  if (ij.x < uSize.x - 1) {
    ivec2 ie = ij + ivec2(1, 0);
    float seaE = seaOf(ie);
    if (!(sea > 0.75 && seaE > 0.75)) {
      vec4 se = texelFetch(uState0, ie, 0);
      float qw = texelFetch(uState0, clampIdx(ij - ivec2(1, 0)), 0).g;
      float qee = se.g;
      float nf = max(nOf(ij), nOf(ie));
      qx = sg ? faceFluxSg(h, se.r, eta0, etaOf(ie, se.r), texelFetch(uSgFE, ij, 0) + vec4(faceShift(modR(ij), modR(ie))), s.g, qw, qee, nf)
              : faceFlux(h, se.r, z, zOf(ie), s.g, qw, qee, nf);
    }
  }
  if (ij.y < uSize.y - 1) {
    ivec2 in_ = ij + ivec2(0, 1);
    float seaN = seaOf(in_);
    if (!(sea > 0.75 && seaN > 0.75)) {
      vec4 sn = texelFetch(uState0, in_, 0);
      float qs = texelFetch(uState0, clampIdx(ij - ivec2(0, 1)), 0).b;
      float qnn = sn.b;
      float nf = max(nOf(ij), nOf(in_));
      qy = sg ? faceFluxSg(h, sn.r, eta0, etaOf(in_, sn.r), texelFetch(uSgFN, ij, 0) + vec4(faceShift(modR(ij), modR(in_))), s.b, qs, qnn, nf)
              : faceFlux(h, sn.r, z, zOf(in_), s.b, qs, qnn, nf);
    }
  }
  o0 = vec4(h, qx, qy, s.a);
  o1 = texelFetch(uState1, ij, 0);
}
`,Tw=bu+`
void main() {
  ivec2 ij = ivec2(gl_FragCoord.xy);
  vec4 s = texelFetch(uState0, ij, 0);
  vec4 s1 = texelFetch(uState1, ij, 0);
  vec4 m = texelFetch(uMod, ij, 0);
  float qxw = ij.x > 0 ? texelFetch(uState0, ij - ivec2(1, 0), 0).g : 0.0;
  float qys = ij.y > 0 ? texelFetch(uState0, ij - ivec2(0, 1), 0).b : 0.0;
  float h = s.r + uDt / uDx * (qxw - s.g + qys - s.b);
  float sea = seaOf(ij);
  float z = zOf(ij);
  float tankUsed = s1.r;
  if (sea < 0.75) {   // land (sea flag 1 = forced boundary; 0.5 = natural basin, treated as land)
    // roofs drain straight into the storm-water network: no rain on blocked building cells
    vec4 tt = texelFetch(uTerrain, ij, 0);
    float roof = (uBuildings > 0.5 && tt.g > 0.0) ? 0.0 : 1.0;
    h += uRain * uDt * roof;
    // wave overtopping at exposed shoreline cells (EurOtop-type mean discharge for a vertical wall):
    // q = 0.2 * sqrt(g Hs^3) * exp(-2.6 Rc/Hs), Rc = crest freeboard above the still-water level
    if (tt.b > 0.0 && uHs > 0.05) {
      float rc = z - uTide;
      if (rc > 0.0) {
        float q = 0.2 * sqrt(uG * uHs * uHs * uHs) * exp(-2.6 * rc / uHs) * tt.b;
        h += min(q, 0.15) * uDt / uDx;
      }
    }
    // drainage network + pumps
    //  - capBase: local storm-drain capacity (user slider x measures)
    //  - hill:    catchwaters / natural streams intercept upland runoff before it reaches the streets
    //  - spare:   when the local rain is below the network capacity, the unused capacity drains ponded water
    //            (the trunk sewers under a flooded street serve a much larger catchment than the pond itself)
    //  - lock:    outfalls below the sea level cannot discharge (tide-locked drains during a storm surge)
    float capBase = uDrain * max(m.a, 0.0);
    float hill = clamp((tt.r - 30.0) / 50.0, 0.0, 1.0);
    float spare = uRecover * max(0.0, capBase - uRain);
    float lock = clamp((tt.r - uTide) / max(uTideLock, 0.01), 0.0, 1.0);
    //  - chan:    drain lines (DSD trunks, nullahs, streams) take ponded water up to their SPARE conveyance: r minus
    //            the runoff of their own catchment at the current rain rate (uRain * g; dual-drainage approximation),
    //            limited by the inlet cap b (gullies for buried conduits, the whole bank for open channels);
    //            they back up when the sea is high: intake tide-locked over twice the height
    vec3 cn = texelFetch(uChan, ij, 0).rgb;
    float spareC = max(0.0, cn.r - uRain * cn.g);
    //            the user drain factor (uMod.a) scales this intake too: an upgraded line takes more, a blocked
    //            intake (factor 0: debris over the culvert mouth, Wong Tai Sin 2023) takes nothing
    float chan = (cn.b > 0.0 ? min(spareC, cn.b) : spareC) * clamp((tt.r - uTide) / max(2.0 * uTideLock, 0.01), 0.0, 1.0) * max(m.a, 0.0);
    //  - the user drain factor (uMod.a) scales the hillside interception too: a blocked stream intake (factor 0 over the
    //    stream's catchment, Wong Tai Sin 2023) means the water the slope channels collected comes down the surface instead
    float sink = (capBase + uHillCap * hill * max(m.a, 0.0) + spare) * lock + chan + m.g;
    h -= min(h, sink * uDt);
    // storage tank intake
    float cap = m.b + texelFetch(uChan, ij, 0).a - tankUsed;   // user tanks + hand-digitised basements (ug.bin, underground.py)
    // entrance sill: tested on the actual water depth (sub-grid: mean depth over the wet part); the amount is volume
    float ddt = (uSubgrid > 0.5 && h > 0.0) ? h / max(wetOf(ij, etaOf(ij, h)), 0.125) : h;
    float avail = uSubgrid > 0.5 ? (ddt > uSill ? h : 0.0) : max(0.0, h - uSill);
    if (cap > 0.0 && avail > 0.0) {
      // basements (ug.bin): the entrance is a stair / ramp / escalator opening uWeirB metres wide per entrance cell and the
      // inflow follows a broad-crested weir, Q = 1.77 b (d - sill)^1.5 m3/s (underground-inundation practice: Toda et al.),
      // 0.9 m of head gives 6 m3/s; the fixed rate stays as the floor at low head (several small openings, ramps): with a
      // pure weir a 0.3 m street takes 0.6 m3/s and the shallow-ponded car parks (Wan Tsui 2023) fill less than observed.
      // User storage tanks keep their fixed inlet rate.
      float ugc = texelFetch(uChan, ij, 0).a;
      float rate = ugc > 0.0 ? max(uTankRate, 1.77 * uWeirB * pow(max(ddt - uSill, 0.0), 1.5) / (uDx * uDx)) : uTankRate;
      float tk = min(avail, min(cap, rate * uDt));
      h -= tk; tankUsed += tk;
    }
    h = max(h, 0.0);
    // natural basins (reservoirs, pits) store at most 2 m: keeps the CFL time step sane and the lake look
    if (sea > 0.25) h = min(h, 2.0);
  } else {
    h = uSubgrid > 0.5 ? volOf(ij, uTide) : max(0.0, uTide - z);   // forced sea level (sub-grid: its stored volume)
  }
  // open (free-outflow) boundary: water reaching the edge of the model domain leaves it
  if (sea < 0.75 && (ij.x == 0 || ij.y == 0 || ij.x == uSize.x - 1 || ij.y == uSize.y - 1)) h = 0.0;
  // displayed / validated depth: in sub-grid mode the mean depth over the wet part of the cell (h is the volume per cell area)
  float dd = h;
  if (uSubgrid > 0.5 && sea < 0.75 && h > 0.0) { float eta = etaOf(ij, h); dd = h / max(wetOf(ij, eta), 0.125); }
  float hmax = max(s.a, sea > 0.75 ? 0.0 : dd);
  // velocity magnitude estimate for the renderer (foam / arrows)
  float hv = max(h, 0.05);
  float vel = length(vec2(0.5 * (qxw + s.g), 0.5 * (qys + s.b))) / hv;
  float wet = s1.b + (dd > 0.15 && sea < 0.75 ? uDt : 0.0);
  o0 = vec4(h, s.g, s.b, hmax);
  o1 = vec4(tankUsed, vel, wet, dd);
}
`,Ew=bu+`
void main() {
  ivec2 ij = ivec2(gl_FragCoord.xy);
  vec4 t = texelFetch(uTerrain, ij, 0);
  float z = zOf(ij);
  float h = t.a > 0.75 ? (uSubgrid > 0.5 ? volOf(ij, uTide) : max(0.0, uTide - z)) : 0.0;
  o0 = vec4(h, 0.0, 0.0, 0.0);
  o1 = vec4(0.0, 0.0, 0.0, 0.0);
}
`;class Pf{constructor(e,t,i,s,r,a,o,l,c,u){te(this,"W");te(this,"H");te(this,"dx");te(this,"renderer");te(this,"rtA");te(this,"rtB");te(this,"scene",new _u);te(this,"camera",new gu(-1,1,1,-1,0,1));te(this,"quad");te(this,"fluxMat");te(this,"depthMat");te(this,"initMat");te(this,"terrainTex");te(this,"modTex");te(this,"chanTex");te(this,"terrainData");te(this,"modData");te(this,"chanData");te(this,"sgTex",null);te(this,"subgridAvailable");te(this,"auxBuf");te(this,"time",0);te(this,"dt",.5);te(this,"steps",0);te(this,"readBuf");te(this,"cellBuf",new Float32Array(4));te(this,"cellAux",new Float32Array(4));this.renderer=e,this.W=t.W,this.H=t.H,this.dx=t.dx;const d=this.W*this.H;this.terrainData=new Float32Array(d*4);for(let g=0;g<d;g++)this.terrainData[g*4]=i[g],this.terrainData[g*4+1]=s[g],this.terrainData[g*4+2]=a?a[g]:0,this.terrainData[g*4+3]=r[g]?1:o&&o[g]?.5:0;this.terrainTex=this.makeDataTex(this.terrainData),this.modData=new Float32Array(d*4);for(let g=0;g<d;g++)this.modData[g*4+3]=1;if(this.modTex=this.makeDataTex(this.modData),this.chanData=new Float32Array(d*4),l)for(let g=0;g<d;g++)r[g]||(this.chanData[g*4]=l[g*3],this.chanData[g*4+1]=l[g*3+1],this.chanData[g*4+2]=l[g*3+2]);if(c)for(let g=0;g<d;g++)r[g]||(this.chanData[g*4+3]=c[g]);if(this.chanTex=this.makeDataTex(this.chanData),this.subgridAvailable=!!u,u){const g=new Float32Array(d*4),_=new Float32Array(d*4),m=new Float32Array(d*4),p=new Float32Array(d*4);for(let x=0;x<d;x++)for(let M=0;M<4;M++)g[x*4+M]=u.cell[x*8+M],_[x*4+M]=u.cell[x*8+4+M],m[x*4+M]=u.face[x*8+M],p[x*4+M]=u.face[x*8+4+M];this.sgTex=[g,_,m,p].map(x=>this.makeDataTex(x))}this.rtA=this.makeRT(),this.rtB=this.makeRT();const h=()=>({uState0:{value:null},uState1:{value:null},uTerrain:{value:this.terrainTex},uMod:{value:this.modTex},uChan:{value:this.chanTex},uSize:{value:new be(this.W,this.H)},uDt:{value:this.dt},uDx:{value:this.dx},uG:{value:9.81},uTide:{value:0},uRain:{value:0},uDrain:{value:0},uTheta:{value:.8},uHmin:{value:.002},uManning:{value:.035},uBuildings:{value:1},uTankRate:{value:.01},uBldBlock:{value:1},uManningBld:{value:.6},uHs:{value:0},uHillCap:{value:120/36e5},uRecover:{value:6},uTideLock:{value:1.5},uSgC0:{value:this.sgTex?this.sgTex[0]:this.chanTex},uSgC1:{value:this.sgTex?this.sgTex[1]:this.chanTex},uSgFE:{value:this.sgTex?this.sgTex[2]:this.chanTex},uSgFN:{value:this.sgTex?this.sgTex[3]:this.chanTex},uSubgrid:{value:this.sgTex?1:0},uSill:{value:.1},uWeirB:{value:4}}),f=g=>new ji({vertexShader:ww,fragmentShader:g,uniforms:h(),glslVersion:wi,depthTest:!1,depthWrite:!1});this.fluxMat=f(bw),this.depthMat=f(Tw),this.initMat=f(Ew);for(const g of[this.fluxMat,this.depthMat])g.uniforms.uSize.value=new be(this.W,this.H);this.quad=new It(new ra(2,2),this.fluxMat),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.readBuf=new Float32Array(d*4),this.auxBuf=new Float32Array(d*4)}get subgridOn(){return this.depthMat.uniforms.uSubgrid.value>.5}makeDataTex(e){const t=new xu(e,this.W,this.H,Hn,Yn);return t.minFilter=Kt,t.magFilter=Kt,t.generateMipmaps=!1,t.wrapS=ii,t.wrapT=ii,t.needsUpdate=!0,t}makeRT(){const e=new ns(this.W,this.H,{count:2,type:Yn,format:Hn,minFilter:Kt,magFilter:Kt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});for(const t of e.textures)t.wrapS=ii,t.wrapT=ii;return e}get stateTex(){return this.rtA.textures[0]}get auxTex(){return this.rtA.textures[1]}setParams(e){for(const t of[this.fluxMat,this.depthMat,this.initMat])e.subgrid!==void 0&&(t.uniforms.uSubgrid.value=e.subgrid&&this.subgridAvailable?1:0),e.manning!==void 0&&(t.uniforms.uManning.value=e.manning),e.buildings!==void 0&&(t.uniforms.uBuildings.value=e.buildings?1:0),e.drain!==void 0&&(t.uniforms.uDrain.value=e.drain),e.theta!==void 0&&(t.uniforms.uTheta.value=e.theta),e.bldBlock!==void 0&&(t.uniforms.uBldBlock.value=e.bldBlock),e.manningBld!==void 0&&(t.uniforms.uManningBld.value=e.manningBld),e.hillCap!==void 0&&(t.uniforms.uHillCap.value=e.hillCap),e.recover!==void 0&&(t.uniforms.uRecover.value=e.recover),e.tideLock!==void 0&&(t.uniforms.uTideLock.value=e.tideLock)}setDt(e){this.dt=e;for(const t of[this.fluxMat,this.depthMat])t.uniforms.uDt.value=e}updateMod(){this.modTex.needsUpdate=!0}updateTerrain(){this.terrainTex.needsUpdate=!0}reset(e){this.time=0,this.steps=0,this.initMat.uniforms.uTide.value=e,this.quad.material=this.initMat;const t=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.rtA),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(t)}step(e,t,i,s=0){const r=this.renderer.getRenderTarget(),a=this.renderer.autoClear;this.renderer.autoClear=!1;for(let o=0;o<e;o++)this.fluxMat.uniforms.uState0.value=this.rtA.textures[0],this.fluxMat.uniforms.uState1.value=this.rtA.textures[1],this.fluxMat.uniforms.uTide.value=t,this.fluxMat.uniforms.uRain.value=i,this.quad.material=this.fluxMat,this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.depthMat.uniforms.uState0.value=this.rtB.textures[0],this.depthMat.uniforms.uState1.value=this.rtB.textures[1],this.depthMat.uniforms.uTide.value=t,this.depthMat.uniforms.uRain.value=i,this.depthMat.uniforms.uHs.value=s,this.quad.material=this.depthMat,this.renderer.setRenderTarget(this.rtA),this.renderer.render(this.scene,this.camera),this.time+=this.dt,this.steps++;this.renderer.autoClear=a,this.renderer.setRenderTarget(r)}readCell(e,t){e=Math.min(this.W-1,Math.max(0,e)),t=Math.min(this.H-1,Math.max(0,t)),this.renderer.readRenderTargetPixels(this.rtA,e,t,1,1,this.cellBuf);const i=this.renderer.getContext(),s=this.renderer.properties.get(this.rtA).__webglFramebuffer,r=this.renderer.getRenderTarget();return this.renderer.state.bindFramebuffer(i.FRAMEBUFFER,s),i.readBuffer(i.COLOR_ATTACHMENT1),i.readPixels(e,t,1,1,i.RGBA,i.FLOAT,this.cellAux),i.readBuffer(i.COLOR_ATTACHMENT0),this.renderer.setRenderTarget(r),{state:this.cellBuf,aux:this.cellAux}}readState(){return this.renderer.readRenderTargetPixels(this.rtA,0,0,this.W,this.H,this.readBuf),this.readBuf}readAux(){const e=this.renderer.getContext(),t=this.renderer.properties.get(this.rtA).__webglFramebuffer,i=this.renderer.getRenderTarget();return this.renderer.state.bindFramebuffer(e.FRAMEBUFFER,t),e.readBuffer(e.COLOR_ATTACHMENT1),e.readPixels(0,0,this.W,this.H,e.RGBA,e.FLOAT,this.auxBuf),e.readBuffer(e.COLOR_ATTACHMENT0),this.renderer.setRenderTarget(i),this.auxBuf}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.terrainTex.dispose(),this.modTex.dispose(),this.chanTex.dispose(),this.sgTex?.forEach(e=>e.dispose()),this.fluxMat.dispose(),this.depthMat.dispose(),this.initMat.dispose(),this.quad.geometry.dispose()}}const Df={type:"change"},Tu={type:"start"},Rm={type:"end"},Wo=new ro,Lf=new vs,Aw=Math.cos(70*hi.DEG2RAD),ln=new O,qn=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vc=1e-6;class Cw extends Sw{constructor(e,t=null){super(e,t),this.state=Dt.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hr.ROTATE,MIDDLE:Hr.DOLLY,RIGHT:Hr.PAN},this.touches={ONE:Nr.ROTATE,TWO:Nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Ks,this._lastTargetPosition=new O,this._quat=new Ks().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rf,this._sphericalDelta=new Rf,this._scale=1,this._panOffset=new O,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new O,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Pw.bind(this),this._onPointerDown=Rw.bind(this),this._onPointerUp=Dw.bind(this),this._onContextMenu=kw.bind(this),this._onMouseWheel=Uw.bind(this),this._onKeyDown=Nw.bind(this),this._onTouchStart=Fw.bind(this),this._onTouchMove=Ow.bind(this),this._onMouseDown=Lw.bind(this),this._onMouseMove=Iw.bind(this),this._interceptControlDown=zw.bind(this),this._interceptControlUp=Bw.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Df),this.update(),this.state=Dt.NONE}update(e=null){const t=this.object.position;ln.copy(t).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=qn:i>Math.PI&&(i-=qn),s<-Math.PI?s+=qn:s>Math.PI&&(s-=qn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),t.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ln.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Wo.origin.copy(this.object.position),Wo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wo.direction))<Aw?this.object.lookAt(this.target):(Lf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wo.intersectPlane(Lf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Vc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vc||this._lastTargetPosition.distanceToSquared(this.target)>Vc?(this.dispatchEvent(Df),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qn/60*this.autoRotateSpeed*e:qn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ln.setFromMatrixColumn(t,0),ln.multiplyScalar(-e),this._panOffset.add(ln)}_panUp(e,t){this.screenSpacePanning===!0?ln.setFromMatrixColumn(t,1):(ln.setFromMatrixColumn(t,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(e),this._panOffset.add(ln)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ln.copy(s).sub(this.target);let r=ln.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(qn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-qn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(qn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-qn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Rw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Pw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Dw(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rm),this.state=Dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Lw(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Hr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Dt.DOLLY;break;case Hr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Dt.ROTATE}break;case Hr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Tu)}function Iw(n){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Uw(n){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(n.preventDefault(),this.dispatchEvent(Tu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Rm))}function Nw(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Fw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Nr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Dt.TOUCH_ROTATE;break;case Nr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case Nr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Dt.TOUCH_DOLLY_PAN;break;case Nr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Tu)}function Ow(n){switch(this._trackPointer(n),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Dt.NONE}}function kw(n){this.enabled!==!1&&n.preventDefault()}function zw(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Bw(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Hw(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}class Xi{constructor(e,t){te(this,"camera");te(this,"controls");te(this,"tween",null);te(this,"tour",null);te(this,"touring",!1);te(this,"onTourEnd");this.camera=e,this.controls=new Cw(e,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI*.49,this.controls.minDistance=25,this.controls.maxDistance=6e4,this.controls.screenSpacePanning=!1,this.controls.zoomSpeed=1.2,t.addEventListener("pointerdown",()=>{this.touring&&this.stopTour(),this.tween=null}),t.addEventListener("wheel",()=>{this.touring&&this.stopTour(),this.tween=null},{passive:!0})}state(){return{pos:this.camera.position.clone(),target:this.controls.target.clone()}}flyTo(e,t=2.5,i){this.tween={from:this.state(),to:e,t0:performance.now(),dur:t*1e3,onDone:i}}jumpTo(e){this.camera.position.copy(e.pos),this.controls.target.copy(e.target),this.controls.update()}static viewOf(e,t,i=150,s=35){const r=hi.degToRad(i),a=hi.degToRad(s);return{pos:new O(e.x+t*Math.cos(a)*Math.sin(r),e.y+t*Math.sin(a),e.z+t*Math.cos(a)*Math.cos(r)),target:e.clone()}}startTour(e){e.length&&(this.touring=!0,this.tour={stops:e,i:0,phase:"fly",t0:performance.now()},this.flyTo(e[0],3.5,()=>{this.tour&&(this.tour.phase="orbit",this.tour.t0=performance.now())}))}stopTour(){this.touring=!1,this.tour=null,this.controls.autoRotate=!1,this.onTourEnd?.()}update(e){const t=performance.now();if(this.tween){const i=Math.min(1,(t-this.tween.t0)/this.tween.dur),s=Hw(i);if(this.camera.position.lerpVectors(this.tween.from.pos,this.tween.to.pos,s),this.controls.target.lerpVectors(this.tween.from.target,this.tween.to.target,s),i>=1){const r=this.tween.onDone;this.tween=null,r?.()}}if(this.tour&&this.touring&&this.tour.phase==="orbit"){const i=(t-this.tour.t0)/1e3,s=new O().subVectors(this.camera.position,this.controls.target);if(s.applyAxisAngle(new O(0,1,0),e*.12),this.camera.position.copy(this.controls.target).add(s),i>7){this.tour.i=(this.tour.i+1)%this.tour.stops.length,this.tour.phase="fly",this.tour.t0=t;const r=this.tour.stops[this.tour.i];this.flyTo(r,3.5,()=>{this.tour&&(this.tour.phase="orbit",this.tour.t0=performance.now())})}}this.controls.update()}}const Vw=`
precision highp float; precision highp int; precision highp sampler2D;
uniform sampler2D uPart; uniform sampler2D uTail;
uniform sampler2D uState; uniform sampler2D uTerrain;
uniform sampler2D uSpawn; uniform int uSpawnCount; uniform ivec2 uSpawnSize;
uniform ivec2 uSize; uniform float uDx; uniform float uDt; uniform float uTime; uniform float uSpeedScale; uniform float uLife;
in vec2 vUv;
layout(location = 0) out vec4 oP;
layout(location = 1) out vec4 oT;
float hash21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
vec3 velAt(vec2 pos) {
  ivec2 c = clamp(ivec2(floor(pos / uDx)), ivec2(0), uSize - ivec2(1));
  vec4 s = texelFetch(uState, c, 0);
  float qxw = c.x > 0 ? texelFetch(uState, c - ivec2(1, 0), 0).g : 0.0;
  float qys = c.y > 0 ? texelFetch(uState, c - ivec2(0, 1), 0).b : 0.0;
  float hv = max(s.r, 0.05);
  return vec3(0.5 * (qxw + s.g) / hv, 0.5 * (qys + s.b) / hv, s.r);
}
void main() {
  ivec2 ij = ivec2(gl_FragCoord.xy);
  vec4 p = texelFetch(uPart, ij, 0); vec4 t = texelFetch(uTail, ij, 0);
  vec2 pos = p.rg; float age = p.b + uDt;
  vec2 lim = vec2(uSize) * uDx;
  bool dead = p.r < 0.0 || age > uLife || pos.x <= 0.0 || pos.y <= 0.0 || pos.x >= lim.x || pos.y >= lim.y;
  vec3 vh = vec3(0.0); float spd = 0.0;
  if (!dead) {
    vh = velAt(pos); spd = length(vh.xy);
    ivec2 c = clamp(ivec2(floor(pos / uDx)), ivec2(0), uSize - ivec2(1));
    if (vh.z < 0.04 || spd < 0.03 || texelFetch(uTerrain, c, 0).a > 0.75) dead = true;
  }
  if (dead) {
    if (uSpawnCount <= 0) { oP = vec4(-1.0, -1.0, 0.0, 0.0); oT = oP; return; }
    vec2 seed = vec2(ij) + vec2(uTime * 0.37, uTime * 0.11);
    int k = min(uSpawnCount - 1, int(hash21(seed) * float(uSpawnCount)));
    ivec2 sc = ivec2(k % uSpawnSize.x, k / uSpawnSize.x);
    vec2 cell = texelFetch(uSpawn, sc, 0).rg;
    vec2 jit = vec2(hash21(seed * 1.7 + 3.1), hash21(seed * 2.3 + 7.7)) - 0.5;
    pos = cell + jit * uDx * 0.9;
    float a0 = hash21(seed * 3.1 + 1.3) * uLife * 0.5;
    oP = vec4(pos, a0, 0.0); oT = vec4(pos, 0.0, 0.0); return;
  }
  vec2 dir = vh.xy / max(spd, 1e-4);
  pos += dir * spd * uSpeedScale * uDt;
  vec2 tail = t.rg + (pos - t.rg) * min(1.0, uDt * 2.2);
  oP = vec4(pos, age, spd); oT = vec4(tail, 0.0, 0.0);
}
`,Gw=`
precision highp float;
in vec3 position; out vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Ww=`
precision highp float; precision highp int; precision highp sampler2D;
in float pid;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
uniform sampler2D uPart; uniform sampler2D uTail; uniform sampler2D uState; uniform sampler2D uTerrain; uniform sampler2D uMod;
uniform ivec2 uN; uniform ivec2 uSize; uniform float uDx; uniform float uBuildings; uniform float uBldBlock; uniform float uLife; uniform float uDpr; uniform vec2 uViewport;
out float vA; out float vSpd; out vec2 vDir; out float vLen;
float surfY(vec2 pos) {
  ivec2 c = clamp(ivec2(floor(pos / uDx)), ivec2(0), uSize - ivec2(1));
  vec4 tr = texelFetch(uTerrain, c, 0); vec4 m = texelFetch(uMod, c, 0); vec4 s = texelFetch(uState, c, 0);
  return tr.r + uBuildings * min(tr.g, uBldBlock) + m.r + s.r + 0.4;
}
void main() {
  int i = int(pid); ivec2 ij = ivec2(i % uN.x, i / uN.x);
  vec4 p = texelFetch(uPart, ij, 0); vec4 t = texelFetch(uTail, ij, 0);
  if (p.r < 0.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); vA = 0.0; vSpd = 0.0; vDir = vec2(1.0, 0.0); vLen = 0.0; gl_PointSize = 0.0; return; }
  vec4 ch = projectionMatrix * modelViewMatrix * vec4(p.r, surfY(p.rg), -p.g, 1.0);
  vec4 ct = projectionMatrix * modelViewMatrix * vec4(t.r, surfY(t.rg), -t.g, 1.0);
  vec2 d = (ch.xy / max(ch.w, 1e-3) - ct.xy / max(ct.w, 1e-3)) * uViewport * 0.5;   // on-screen displacement in px
  float L = length(d);
  vDir = L > 0.3 ? d / L : vec2(1.0, 0.0);
  vLen = L;
  float age = p.b;
  vA = smoothstep(0.0, 0.5, age) * (1.0 - smoothstep(uLife - 1.0, uLife, age));
  vSpd = p.a;
  gl_Position = ch;
  gl_PointSize = clamp(12.0 + L * 2.0, 12.0, 48.0) * uDpr;
}
`,$w=`
precision highp float;
in float vA; in float vSpd; in vec2 vDir; in float vLen; uniform float uNight;
out vec4 fragColor;
void main() {
  if (vA <= 0.001) discard;
  vec2 q = gl_PointCoord - 0.5; q.y = -q.y;
  float along = dot(q, vDir);                       // head at +0.5, tail at -0.5
  float across = dot(q, vec2(-vDir.y, vDir.x));
  float w = 0.07;
  float a = (1.0 - smoothstep(w * 0.45, w, abs(across)));
  a *= smoothstep(-0.5, -0.28, along) * (1.0 - smoothstep(0.30, 0.46, along));
  a *= mix(0.25, 1.0, along + 0.5);                 // tail fades out
  // bright head dot
  a = max(a, (1.0 - smoothstep(0.08, 0.16, length(q - vDir * 0.34))) * 0.9);
  if (a < 0.02) discard;
  vec3 slow = vec3(0.72, 0.94, 1.0), fast = vec3(1.0, 0.95, 0.72);
  vec3 col = mix(slow, fast, smoothstep(0.25, 1.8, vSpd));
  fragColor = vec4(col, a * vA * mix(0.9, 1.0, uNight));
}
`;class If{constructor(e,t,i,s,r,a,o,l,c=160){te(this,"N");te(this,"renderer");te(this,"rtA");te(this,"rtB");te(this,"scene",new _u);te(this,"camera",new gu(-1,1,1,-1,0,1));te(this,"quad");te(this,"updateMat");te(this,"pointMat");te(this,"group",new Ss);te(this,"spawnTex");te(this,"spawnData");te(this,"spawnCap");te(this,"time",0);te(this,"speedScale",30);this.renderer=e,this.N=c;const u=()=>{const x=new ns(c,c,{count:2,type:Yn,format:Hn,minFilter:Kt,magFilter:Kt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});for(const M of x.textures)M.wrapS=ii,M.wrapT=ii;return x};this.rtA=u(),this.rtB=u();const d=1024,h=64;this.spawnCap=d*h,this.spawnData=new Float32Array(this.spawnCap*4),this.spawnTex=new xu(this.spawnData,d,h,Hn,Yn),this.spawnTex.minFilter=Kt,this.spawnTex.magFilter=Kt,this.spawnTex.needsUpdate=!0,this.updateMat=new ji({vertexShader:Gw,fragmentShader:Vw,glslVersion:wi,depthTest:!1,depthWrite:!1,uniforms:{uPart:{value:null},uTail:{value:null},uState:{value:r},uTerrain:{value:a},uSpawn:{value:this.spawnTex},uSpawnCount:{value:0},uSpawnSize:{value:new be(d,h)},uSize:{value:new be(t,i)},uDx:{value:s},uDt:{value:.016},uTime:{value:0},uSpeedScale:{value:this.speedScale},uLife:{value:7}}}),this.quad=new It(new ra(2,2),this.updateMat),this.quad.frustumCulled=!1,this.scene.add(this.quad);const f=c*c,g=new Float32Array(f);for(let x=0;x<f;x++)g[x]=x;const _=new en;_.setAttribute("pid",new An(g,1));const m=new Ui(new O(-1e6,-1e6,-1e6),new O(1e6,1e6,1e6));_.boundingBox=m,_.boundingSphere=m.getBoundingSphere(new Ni),this.pointMat=new ji({vertexShader:Ww,fragmentShader:$w,glslVersion:wi,transparent:!0,depthWrite:!1,blending:ol,uniforms:{uPart:{value:this.rtA.textures[0]},uTail:{value:this.rtA.textures[1]},uState:{value:r},uTerrain:{value:a},uMod:{value:o},uN:{value:new be(c,c)},uSize:{value:new be(t,i)},uDx:{value:s},uBuildings:l.uBuildings,uBldBlock:l.uBldBlock,uLife:{value:7},uNight:l.uNight,uDpr:{value:e.getPixelRatio()},uViewport:{value:new be(1,1)}}});const p=new GS(_,this.pointMat);p.frustumCulled=!1,p.renderOrder=16,this.group.add(p),this.group.renderOrder=16,this.reset()}setState(e){this.updateMat.uniforms.uState.value=e,this.pointMat.uniforms.uState.value=e}setSpawn(e,t){const i=Math.min(t,this.spawnCap);if(t>this.spawnCap){const s=t/this.spawnCap;for(let r=0;r<this.spawnCap;r++){const a=Math.floor(r*s);this.spawnData[r*4]=e[a*2],this.spawnData[r*4+1]=e[a*2+1]}}else for(let s=0;s<i;s++)this.spawnData[s*4]=e[s*2],this.spawnData[s*4+1]=e[s*2+1];this.spawnTex.needsUpdate=!0,this.updateMat.uniforms.uSpawnCount.value=i}reset(){const e=this.renderer.getRenderTarget(),t=this.renderer.getClearColor(new at),i=this.renderer.getClearAlpha();for(const s of[this.rtA,this.rtB])this.renderer.setRenderTarget(s),this.renderer.setClearColor(new at(-1,-1,0),1),this.renderer.clear();this.renderer.setRenderTarget(e),this.renderer.setClearColor(t,i),this.updateMat.uniforms.uSpawnCount.value=0}update(e,t){this.time+=e,this.speedScale=hi.clamp(t*.05,15,220);const i=this.updateMat.uniforms;i.uPart.value=this.rtA.textures[0],i.uTail.value=this.rtA.textures[1],i.uDt.value=Math.min(e,.05),i.uTime.value=this.time,i.uSpeedScale.value=this.speedScale;const s=this.renderer.getRenderTarget(),r=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.renderer.autoClear=r,this.renderer.setRenderTarget(s),[this.rtA,this.rtB]=[this.rtB,this.rtA];const a=this.pointMat.uniforms;a.uPart.value=this.rtA.textures[0],a.uTail.value=this.rtA.textures[1];const o=this.renderer.getDrawingBufferSize(new be);a.uViewport.value.copy(o),a.uDpr.value=this.renderer.getPixelRatio()}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.spawnTex.dispose(),this.updateMat.dispose(),this.pointMat.dispose(),this.quad.geometry.dispose();for(const e of this.group.children)e.geometry.dispose();this.group.clear()}}const Xw=`
precision highp float; precision highp int; precision highp sampler2D;
in vec3 position; in vec2 cell;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
uniform sampler2D uState; uniform sampler2D uTerrain; uniform sampler2D uMod;
uniform ivec2 uSize; uniform float uDx; uniform float uBuildings; uniform float uBldBlock; uniform float uScale;
out float vSpd; out float vA;
void main() {
  ivec2 c = ivec2(cell);
  vec4 s = texelFetch(uState, c, 0);
  float qxw = c.x > 0 ? texelFetch(uState, c - ivec2(1, 0), 0).g : 0.0;
  float qys = c.y > 0 ? texelFetch(uState, c - ivec2(0, 1), 0).b : 0.0;
  float hv = max(s.r, 0.05);
  vec2 v = vec2(0.5 * (qxw + s.g), 0.5 * (qys + s.b)) / hv;
  float spd = length(v);
  vec4 tr = texelFetch(uTerrain, c, 0); vec4 m = texelFetch(uMod, c, 0);
  bool show = s.r > 0.08 && spd > 0.05 && tr.a < 0.75;
  vSpd = spd; vA = show ? 1.0 : 0.0;
  float ang = atan(v.y, v.x);
  float len = uScale * uDx * clamp(0.45 + spd * 0.5, 0.45, 1.6);
  // arrow is modelled along +x in [0,1]; rotate in the ground plane (scene y -> world -z)
  vec2 p = vec2(position.x, position.z) * len;
  vec2 r = vec2(p.x * cos(ang) - p.y * sin(ang), p.x * sin(ang) + p.y * cos(ang));
  float z = tr.r + uBuildings * min(tr.g, uBldBlock) + m.r + s.r + 0.45;
  vec3 w = vec3((cell.x + 0.5) * uDx + r.x, z, -((cell.y + 0.5) * uDx + r.y));
  if (!show) w = vec3(0.0, -1e5, 0.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(w, 1.0);
}
`,qw=`
precision highp float;
in float vSpd; in float vA; out vec4 fragColor;
void main() {
  if (vA < 0.5) discard;
  vec3 col = mix(vec3(0.75, 0.95, 1.0), vec3(1.0, 0.86, 0.45), smoothstep(0.2, 1.8, vSpd));
  fragColor = vec4(col, 0.9);
}
`;class Uf{constructor(e,t,i,s,r,a,o){te(this,"mesh");te(this,"mat");const l=Math.max(2,Math.round(35/i)),c=new en,u=.07,d=.22,h=.38,f=new Float32Array([0,0,-u,1-h,0,-u,1-h,0,u,0,0,u,1-h,0,-d,1,0,0,1-h,0,d]);c.setAttribute("position",new An(f,3)),c.setIndex([0,1,2,0,2,3,4,5,6,0,2,1,0,3,2,4,6,5]);const g=new yw;g.index=c.index,g.attributes.position=c.attributes.position;const _=[];for(let p=Math.floor(l/2);p<t;p+=l)for(let x=Math.floor(l/2);x<e;x+=l)_.push(x,p);g.setAttribute("cell",new zh(new Float32Array(_),2)),g.instanceCount=_.length/2;const m=new Ui(new O(-1e6,-1e6,-1e6),new O(1e6,1e6,1e6));g.boundingBox=m,g.boundingSphere=m.getBoundingSphere(new Ni),this.mat=new ji({vertexShader:Xw,fragmentShader:qw,glslVersion:wi,transparent:!0,depthWrite:!1,side:ni,uniforms:{uState:{value:s},uTerrain:{value:r},uMod:{value:a},uSize:{value:new be(e,t)},uDx:{value:i},uBuildings:o.uBuildings,uBldBlock:o.uBldBlock,uScale:{value:l*.8}}}),this.mesh=new It(g,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=14}setState(e){this.mat.uniforms.uState.value=e}dispose(){this.mesh.geometry.dispose(),this.mat.dispose()}}const Eu=`
// depth -> colour by impact class: 0.1 m ankle, 0.3 m knee (cars stall), 0.5 m waist, 1.0 m chest (life-threatening), 2.0 m ground floor lost
vec3 depthColor(float d) {
  vec3 c0 = vec3(0.66, 0.90, 1.00), c1 = vec3(0.30, 0.68, 0.95), c2 = vec3(0.12, 0.45, 0.86), c3 = vec3(0.07, 0.27, 0.66), c4 = vec3(0.10, 0.12, 0.45), c5 = vec3(0.32, 0.06, 0.40);
  if (d < 0.1) return mix(c0, c1, d / 0.1);
  if (d < 0.3) return mix(c1, c2, (d - 0.1) / 0.2);
  if (d < 0.5) return mix(c2, c3, (d - 0.3) / 0.2);
  if (d < 1.0) return mix(c3, c4, (d - 0.5) / 0.5);
  return mix(c4, c5, clamp((d - 1.0) / 1.0, 0.0, 1.0));
}
float hash21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i), b = hash21(i + vec2(1, 0)), c = hash21(i + vec2(0, 1)), d = hash21(i + vec2(1, 1));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
`,Au=`
vec3 applyFog(vec3 col, vec3 world) {
  float dist = length(world - uCam);
  float f = 1.0 - exp(-uFogDensity * dist);
  return mix(col, uFogColor, clamp(f, 0.0, 1.0));
}
`,Pm=`
float sunShadow(vec2 uv, float z0) {
  vec2 dir = vec2(uSun.x, -uSun.z); float hl = length(dir); if (hl < 1e-3) return 0.0; dir /= hl;
  float tanA = uSun.y / hl;
  vec2 texel = 1.0 / vec2(uSize);
  float sh = 0.0; float d = 0.0;
  for (int k = 0; k < 16; k++) {
    d += 0.9 + float(k) * 0.35;                       // cells, growing step (~ 60 cells in total)
    vec4 t = texture(uTerrain, uv + dir * d * texel);
    float top = t.r + t.g;
    float rayH = z0 + d * uDx * tanA + 0.5;
    sh = max(sh, smoothstep(0.0, 3.0, top - rayH));
  }
  return sh;
}
`,Yw=`
precision highp float; precision highp int; precision highp sampler2D;
in vec2 cell;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
uniform sampler2D uTerrain; uniform ivec2 uSize; uniform float uDx; uniform float uExag;
out vec2 vUv; out vec3 vWorld; out vec3 vNormal; out float vSea;
void main() {
  ivec2 ij = ivec2(cell);
  ivec2 mx = uSize - ivec2(1);
  vec4 t = texelFetch(uTerrain, ij, 0);
  float zl = texelFetch(uTerrain, clamp(ij - ivec2(1, 0), ivec2(0), mx), 0).r;
  float zr = texelFetch(uTerrain, clamp(ij + ivec2(1, 0), ivec2(0), mx), 0).r;
  float zd = texelFetch(uTerrain, clamp(ij - ivec2(0, 1), ivec2(0), mx), 0).r;
  float zu = texelFetch(uTerrain, clamp(ij + ivec2(0, 1), ivec2(0), mx), 0).r;
  // hillshade normal follows the vertical exaggeration of the terrain group
  vNormal = normalize(vec3(-(zr - zl) * uExag / (2.0 * uDx), 1.0, (zu - zd) * uExag / (2.0 * uDx)));
  vUv = (cell + 0.5) / vec2(uSize);
  vSea = t.a;
  float z = t.a > 0.5 ? -2.5 : t.r;
  vec3 p = vec3((cell.x + 0.5) * uDx, z, -(cell.y + 0.5) * uDx);
  vWorld = p;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,jw=`
precision highp float; precision highp int; precision highp sampler2D;
in vec2 vUv; in vec3 vWorld; in vec3 vNormal; in float vSea;
uniform sampler2D uMap; uniform sampler2D uState; uniform sampler2D uTerrain; uniform float uHasMap;
uniform ivec2 uSize; uniform float uDx; uniform float uShadow;
uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uFogColor; uniform float uFogDensity;
uniform float uStorm; uniform float uFlash; uniform float uNight; uniform float uShowMax;
out vec4 fragColor;
${Eu}
${Au}
${Pm}
void main() {
  // satellite imagery of Hong Kong is dark: lift it, and mute its colour a little so the flood layer reads first
  vec3 base = uHasMap > 0.5 ? pow(texture(uMap, vUv).rgb, vec3(0.82)) * 1.16 : vec3(0.36, 0.42, 0.33);
  float lum = dot(base, vec3(0.299, 0.587, 0.114));
  base = mix(vec3(lum), base, 0.72);
  vec3 n = normalize(vNormal);
  float diff = max(dot(n, uSun), 0.0);
  // stronger hillshade (sky term + sun term) for relief
  float light = 0.6 + 0.26 * (n.y * 0.5 + 0.5) + 0.58 * diff;
  light *= mix(1.0, 0.88, uStorm);
  light *= mix(1.0, 0.7, uNight);
  if (vSea < 0.75 && uShadow > 0.5) {
    float sh = sunShadow(vUv, vWorld.y);
    light *= 1.0 - sh * mix(0.42, 0.26, uStorm) * (1.0 - uNight * 0.5);
    // contact occlusion at building footprints
    vec2 tx = 1.0 / vec2(uSize);
    float occ = step(0.5, texture(uTerrain, vUv + vec2(tx.x, 0.0)).g) + step(0.5, texture(uTerrain, vUv - vec2(tx.x, 0.0)).g)
              + step(0.5, texture(uTerrain, vUv + vec2(0.0, tx.y)).g) + step(0.5, texture(uTerrain, vUv - vec2(0.0, tx.y)).g);
    light *= 1.0 - occ * 0.05;
  }
  vec3 col = base * light;
  col = mix(col, col * vec3(0.8, 0.88, 1.1), uNight * 0.6);
  col += uFlash * 0.7;
  if (vSea > 0.75) col = mix(col, vec3(0.04, 0.10, 0.18), 0.8);
  vec4 st = texture(uState, vUv);
  // wet trace: ground that has been flooded in this event and has dried again (receding water leaves it dark)
  if (vSea < 0.25 && st.a > 0.05 && st.r < 0.03) col = mix(col, col * vec3(0.62, 0.6, 0.56), smoothstep(0.05, 0.3, st.a) * 0.85);
  if (uShowMax > 0.5 && vSea < 0.25) { float hm = st.a; if (hm > 0.05) col = mix(col, depthColor(hm), 0.7); }
  col = applyFog(col, vWorld);
  fragColor = vec4(col, 1.0);
}
`,Kw=`
precision highp float; precision highp int; precision highp sampler2D;
in vec2 cell;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
uniform sampler2D uTerrain; uniform sampler2D uMod; uniform sampler2D uState; uniform sampler2D uAux;
uniform ivec2 uSize; uniform float uDx; uniform float uBuildings; uniform float uBldBlock; uniform float uSubgrid; uniform float uWaterMode;
out vec2 vUv; out vec3 vWorld; out float vDepth; out float vVel; out float vSea; out float vRise;
void main() {
  ivec2 ij = ivec2(cell);
  vec4 t = texelFetch(uTerrain, ij, 0);
  vec4 m = texelFetch(uMod, ij, 0);
  vSea = t.a;
  vec4 s = texelFetch(uState, ij, 0);
  vec4 a = texelFetch(uAux, ij, 0);
  float z = t.r + uBuildings * min(t.g, uBldBlock) + m.r;
  float h = (uSubgrid > 0.5 && t.a < 0.75) ? a.a : s.r;   // sub-grid: mean depth over the wet part of the cell
  // max-depth layer: the highest depth reached so far in this run (hmax, state.a) on land
  if (uWaterMode > 0.5 && t.a < 0.25) h = s.a;
  // water still at its maximum = the flood is rising / at its peak here (receding water sits below its hmax)
  vRise = (uWaterMode < 0.5 && t.a < 0.25 && s.a > 0.05 && s.r >= s.a * 0.97) ? 1.0 : 0.0;
  float eta = z + h;
  float y = h > 0.015 ? eta : z + 0.02;
  if (t.a > 0.5) y = eta; // sea: always at the forced level
  vDepth = t.a > 0.5 ? max(h, 3.0) : h;
  vVel = a.g;
  vUv = (cell + 0.5) / vec2(uSize);
  vec3 p = vec3((cell.x + 0.5) * uDx, y, -(cell.y + 0.5) * uDx);
  vWorld = p;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,Zw=`
precision highp float; precision highp int; precision highp sampler2D;
in vec2 vUv; in vec3 vWorld; in float vDepth; in float vVel; in float vSea; in float vRise;
uniform float uTime; uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uFogColor; uniform float uFogDensity;
uniform float uStorm; uniform float uFlash; uniform float uNight; uniform float uRainI; uniform vec3 uSkyColor;
uniform sampler2D uTerrain; uniform ivec2 uSize; uniform float uDx; uniform float uShadow; uniform float uWaterMode;
out vec4 fragColor;
${Eu}
${Au}
${Pm}
void main() {
  if (vDepth < 0.015) discard;
  bool sea = vSea > 0.75; bool lake = vSea > 0.25 && !sea;
  // flood water is a data layer: opaque enough to read the depth colour over any ground texture
  float alpha = smoothstep(0.015, 0.05, vDepth) * clamp(0.82 + vDepth * 0.1, 0.82, 0.96);
  vec3 col = depthColor(vDepth);
  if (sea) { col = vec3(0.10, 0.34, 0.52); alpha = 0.62; }
  if (lake) { col = vec3(0.13, 0.30, 0.40); alpha = 0.72; }
  vec2 p = vWorld.xz * 0.12;
  float n1 = vnoise(p + vec2(uTime * 0.22, uTime * 0.15));
  float n2 = vnoise(p * 2.1 - vec2(uTime * 0.27, -uTime * 0.19));
  float wave = sin(vWorld.x * 0.35 + uTime * 1.8) * 0.025 + cos(vWorld.z * 0.31 - uTime * 1.5) * 0.025;
  vec3 n = normalize(vec3((n1 - 0.5) * 0.45 + wave, 1.0, (n2 - 0.5) * 0.45 - wave));
  vec3 V = normalize(uCam - vWorld);
  float fres = pow(1.0 - max(dot(n, V), 0.0), 3.0);
  col = mix(col, mix(uSkyColor, vec3(1.0), 0.1), fres * (sea ? 0.55 : 0.16));
  vec3 R = reflect(-uSun, n);
  float spec = pow(max(dot(R, V), 0.0), 110.0) * (1.0 - uStorm * 0.5) * (1.0 - uNight * 0.8);
  col += spec * (sea ? 0.9 : 0.35);
  // white water where the flow is fast
  float foam = uWaterMode > 0.5 ? 0.0 : smoothstep(0.9, 2.6, vVel) * vnoise(vWorld.xz * 0.6 + uTime * 0.6);
  col = mix(col, vec3(0.93, 0.96, 1.0), clamp(foam, 0.0, 0.7));
  if (!sea && !lake) {
    // crisp dark outline at the wet / dry boundary, readable on any ground texture
    float edge = smoothstep(0.055, 0.02, vDepth);
    col = mix(col, vec3(0.03, 0.09, 0.26), edge * 0.85); alpha = mix(alpha, 0.96, edge);
    // advancing front: where the water is still at its maximum, a pulsing light band just inside the edge
    float band = smoothstep(0.03, 0.06, vDepth) * smoothstep(0.2, 0.08, vDepth);
    col = mix(col, vec3(0.78, 0.97, 1.0), vRise * band * (0.45 + 0.35 * sin(uTime * 4.5)));
    if (uShadow > 0.5) col *= 1.0 - sunShadow(vUv, vWorld.y) * 0.22 * (1.0 - uNight * 0.5);
  }
  float rip = (1.0 - uWaterMode) * uRainI * step(0.975, hash21(floor(vWorld.xz * 1.2) + floor(uTime * 10.0)));
  col += rip * 0.45;
  col *= mix(1.0, 0.86, uStorm);
  col *= mix(1.0, sea ? 0.55 : 0.82, uNight);
  col += uFlash * 0.6;
  col = applyFog(col, vWorld);
  fragColor = vec4(col, alpha);
}
`,Jw=`
precision highp float; precision highp int; precision highp sampler2D;
in vec3 position; in vec3 normal; in vec3 color; in vec2 bUv; in float lit;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
out vec3 vN; out vec3 vWorld; out vec3 vColor; out vec2 vUv; out float vLit;
void main() {
  vN = normal; vWorld = position; vColor = color; vUv = bUv; vLit = lit;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Qw=`
precision highp float; precision highp int; precision highp sampler2D;
in vec3 vN; in vec3 vWorld; in vec3 vColor; in vec2 vUv; in float vLit;
uniform sampler2D uTerrain; uniform sampler2D uState; uniform sampler2D uMod; uniform ivec2 uSize;
uniform float uTime; uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uFogColor; uniform float uFogDensity;
uniform float uStorm; uniform float uFlash; uniform float uNight; uniform float uBuildings; uniform vec3 uSkyColor; uniform float uWaterMode;
out vec4 fragColor;
${Eu}
${Au}
void main() {
  vec3 n = normalize(vN);
  bool roof = n.y > 0.5;
  float diff = max(dot(n, uSun), 0.0);
  float sky = n.y * 0.5 + 0.5;
  // stronger key/fill contrast between sun-facing and shaded facades for a clearer massing read
  float light = 0.5 + 0.68 * diff + 0.2 * sky;
  light *= mix(1.0, 0.95, uStorm);
  light *= mix(1.0, 0.72, uNight);
  float ground = texture(uTerrain, clamp(vUv, 0.0, 1.0)).r;
  float hAbove = vWorld.y - ground;
  vec3 base = vColor;
  if (roof) {
    base *= vec3(0.78, 0.79, 0.82);
  } else {
    // facade: 3.1 m floor bands with window columns (glass slightly bluish), lighter plinth shaded by contact occlusion
    // clean massing: thin floor-slab lines every 3.1 m and faint glazing, so volume reads before texture
    float fy = fract(vWorld.y / 3.1);
    float slab = 1.0 - smoothstep(0.0, 0.07, fy) * smoothstep(1.0, 0.93, fy);
    float fx = fract(dot(vWorld.xz, vec2(abs(n.z), abs(n.x))) * 0.36);
    float glass = step(0.35, fy) * step(fy, 0.86) * step(0.18, fx) * step(fx, 0.82);
    vec3 glassCol = mix(uSkyColor, vec3(0.30, 0.37, 0.46), 0.6);
    base = mix(base, glassCol, glass * 0.16);
    base *= 1.0 - slab * 0.12;
    base *= mix(0.58, 1.0, smoothstep(0.0, 16.0, hAbove));   // ambient occlusion towards the street
  }
  vec3 col = base * light;
  // night windows (lit rooms)
  if (uNight > 0.05 && !roof) {
    float win = step(0.40, fract(vWorld.y * 0.32)) * step(0.45, hash21(floor(vWorld.xz * 0.45) + floor(vWorld.y * 0.32) * 7.0 + vLit * 13.0));
    col += uNight * win * vec3(0.95, 0.80, 0.50) * 0.5;
  }
  // wet / submerged tint from the adjacent street cell
  vec2 off = vec2(n.x, -n.z) * 1.3 / vec2(uSize);
  vec2 uv2 = clamp(vUv + off, 0.0, 1.0);
  vec4 s = texture(uState, uv2);
  vec4 t = texture(uTerrain, uv2);
  vec4 m = texture(uMod, uv2);
  float hw = uWaterMode > 0.5 ? s.a : s.r;
  float eta = t.r + m.r + hw;
  if (hw > 0.05 && vWorld.y < eta) col = mix(col, depthColor(min(hw, 3.0)) * 0.9, 0.6);
  else if (s.a > 0.05 && vWorld.y < t.r + m.r + s.a) col = mix(col, vec3(0.35, 0.3, 0.25), 0.35); // high-water mark
  col += uFlash * 0.6;
  col = applyFog(col, vWorld);
  fragColor = vec4(col, 1.0);
}
`,eb=`
precision highp float;
in vec4 a; in float end;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
uniform float uTime; uniform float uIntensity; uniform float uWind; uniform vec3 uCenter;
out float vA;
void main() {
  float speed = 110.0 * (0.8 + 0.4 * a.w);
  float y = mod(a.y - uTime * speed, 320.0);
  float len = 2.5 + 4.0 * uIntensity;
  vec3 p = vec3(uCenter.x + a.x + uWind * y * 0.45, uCenter.y - 20.0 + y + end * len, uCenter.z + a.z);
  float act = step(a.w, uIntensity);
  vA = act * 0.2;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,tb=`
precision highp float;
in float vA; uniform float uNight;
out vec4 fragColor;
void main() { fragColor = vec4(0.72, 0.8, 0.92, vA * mix(1.0, 0.6, uNight)); }
`,nb=`
precision highp float;
in vec3 position;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
out vec3 vDir;
void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,ib=`
precision highp float;
in vec3 vDir;
uniform vec3 uSun; uniform float uStorm; uniform float uFlash; uniform float uNight; uniform float uTime;
out vec4 fragColor;
void main() {
  vec3 d = normalize(vDir);
  float h = clamp(d.y, -0.1, 1.0);
  vec3 zenith = mix(vec3(0.30, 0.52, 0.85), vec3(0.17, 0.20, 0.26), uStorm);
  vec3 horizon = mix(vec3(0.76, 0.84, 0.92), vec3(0.42, 0.47, 0.53), uStorm);
  zenith = mix(zenith, vec3(0.02, 0.03, 0.07), uNight);
  horizon = mix(horizon, vec3(0.07, 0.09, 0.14), uNight);
  vec3 col = mix(horizon, zenith, pow(max(h, 0.0), 0.55));
  float sun = pow(max(dot(d, uSun), 0.0), 240.0) * (1.0 - uStorm) * (1.0 - uNight);
  col += vec3(1.0, 0.92, 0.75) * sun * 0.9;
  float cl = sin(d.x * 7.0 + uTime * 0.05) * cos(d.z * 6.0 - uTime * 0.04) * 0.5 + 0.5;
  col = mix(col, col * 0.72, uStorm * cl * step(0.03, h));
  col += uFlash * vec3(0.8, 0.85, 1.0);
  fragColor = vec4(col, 1.0);
}
`,sb=[11069183,5090802,2061275,1197480,1711987,5377894],rb=[0,.1,.3,.5,1,2];class ab{constructor(e,t){te(this,"renderer");te(this,"scene",new _u);te(this,"camera");te(this,"director");te(this,"assets",null);te(this,"W",0);te(this,"H",0);te(this,"dx",10);te(this,"grid",null);te(this,"terrain",null);te(this,"water",null);te(this,"buildings",null);te(this,"rain");te(this,"sky");te(this,"root",new Ss);te(this,"exag",1);te(this,"waterMode","now");te(this,"measureGroup",new Ss);te(this,"draftLine",null);te(this,"markerGroup",new Ss);te(this,"pinGeo",{pin:new ml(.45,.45,1,6),head:new kr(2.6,12,10),ring:new gl(3,4.2,24),small:new kr(1.6,10,8)});te(this,"pinWhite",new Gs({color:16777215}));te(this,"labelsDiv");te(this,"labelEls",new Map);te(this,"imageryTex",null);te(this,"basemapTex",null);te(this,"flowA",null);te(this,"flowB",null);te(this,"arrowsA",null);te(this,"arrowsB",null);te(this,"terrainTexRef",null);te(this,"modTexRef",null);te(this,"flowMode","particles");te(this,"split",null);te(this,"time",0);te(this,"flashT",0);te(this,"U",{uTime:{value:0},uSun:{value:new O(.4,.75,.35).normalize()},uCam:{value:new O},uFogColor:{value:new at(10466504)},uFogDensity:{value:12e-5},uStorm:{value:0},uFlash:{value:0},uNight:{value:0},uRainI:{value:0},uSubgrid:{value:0},uSkyColor:{value:new at(9418464)},uShowMax:{value:0},uBuildings:{value:1},uBldBlock:{value:1},uWaterMode:{value:0},uExag:{value:1},uShadow:{value:1}});te(this,"terrainMat",null);te(this,"waterMat",null);te(this,"buildingMat",null);te(this,"rainMat");te(this,"skyMat");te(this,"texMode","imagery");te(this,"labelInset",{l:0,r:0,t:0,b:0});this.labelsDiv=t,this.renderer=new kS({canvas:e,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.outputColorSpace=ui,this.renderer.autoClear=!0,this.camera=new fi(50,1,2,12e4),this.director=new Xi(this.camera,e),this.root.add(this.measureGroup),this.root.add(this.markerGroup),this.scene.add(this.root),this.skyMat=new ji({vertexShader:nb,fragmentShader:ib,glslVersion:wi,side:Gn,depthWrite:!1,uniforms:{uSun:this.U.uSun,uStorm:this.U.uStorm,uFlash:this.U.uFlash,uNight:this.U.uNight,uTime:this.U.uTime}}),this.sky=new It(new kr(8e4,48,24),this.skyMat),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.scene.add(this.sky);const i=36e3,s=new Float32Array(i*2*4),r=new Float32Array(i*2);for(let o=0;o<i;o++){const l=(Math.random()-.5)*900,c=Math.random()*320,u=(Math.random()-.5)*900,d=Math.random();for(let h=0;h<2;h++){const f=(o*2+h)*4;s[f]=l,s[f+1]=c,s[f+2]=u,s[f+3]=d,r[o*2+h]=h}}const a=new en;a.setAttribute("a",new An(s,4)),a.setAttribute("end",new An(r,1)),this.rainMat=new ji({vertexShader:eb,fragmentShader:tb,glslVersion:wi,transparent:!0,depthWrite:!1,blending:ol,uniforms:{uTime:this.U.uTime,uCenter:{value:new O},uIntensity:this.U.uRainI,uWind:{value:.35},uNight:this.U.uNight}}),this.rain=new HS(a,this.rainMat),this.rain.frustumCulled=!1,this.rain.renderOrder=20,this.scene.add(this.rain),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}loadScene(e,t,i,s,r){this.clearScene(),this.assets=e,this.W=e.meta.cols,this.H=e.meta.rows,this.dx=e.meta.res;const a=this.W,o=this.H,l=new Float32Array(a*o*2);for(let _=0;_<o;_++)for(let m=0;m<a;m++){const p=(_*a+m)*2;l[p]=m,l[p+1]=_}const c=new Uint32Array((a-1)*(o-1)*6);let u=0;for(let _=0;_<o-1;_++)for(let m=0;m<a-1;m++){const p=_*a+m,x=p+1,M=p+a,w=M+1;c[u++]=p,c[u++]=x,c[u++]=M,c[u++]=x,c[u++]=w,c[u++]=M}this.grid=new en,this.grid.setAttribute("cell",new An(l,2)),this.grid.setIndex(new An(c,1));const d=new Ui(new O(0,-50,-o*this.dx),new O(a*this.dx,1200,0));this.grid.boundingBox=d,this.grid.boundingSphere=d.getBoundingSphere(new Ni),this.imageryTex=e.imagery?this.imgTex(e.imagery):null,this.basemapTex=e.basemap?this.imgTex(e.basemap):null;const h=this.texMode==="imagery"?this.imageryTex??this.basemapTex:this.basemapTex??this.imageryTex,f={value:new be(a,o)};this.terrainMat=new ji({vertexShader:Yw,fragmentShader:jw,glslVersion:wi,uniforms:{...this.U,uTerrain:{value:t},uState:{value:s},uSize:f,uDx:{value:this.dx},uMap:{value:h},uHasMap:{value:h?1:0}}}),this.terrain=new It(this.grid,this.terrainMat),this.terrain.frustumCulled=!1,this.terrain.renderOrder=0,this.root.add(this.terrain),this.waterMat=new ji({vertexShader:Kw,fragmentShader:Zw,glslVersion:wi,transparent:!0,depthWrite:!1,side:ni,uniforms:{...this.U,uTerrain:{value:t},uMod:{value:i},uState:{value:s},uAux:{value:r},uSize:f,uDx:{value:this.dx}}}),this.water=new It(this.grid,this.waterMat),this.water.frustumCulled=!1,this.water.renderOrder=10,this.root.add(this.water),this.buildBuildings(e,t,s,i,f),this.terrainTexRef=t,this.modTexRef=i,this.flowA=new If(this.renderer,a,o,this.dx,s,t,i,this.U),this.arrowsA=new Uf(a,o,this.dx,s,t,i,this.U),this.root.add(this.flowA.group),this.root.add(this.arrowsA.mesh),this.applyFlowMode();const g=this.defaultView();this.director.jumpTo(Xi.viewOf(g.target,g.pos.distanceTo(g.target)*2.4,35,62)),this.director.flyTo(g,4)}imgTex(e){const t=new In(e);return t.colorSpace=ui,t.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),t.minFilter=ys,t.magFilter=pi,t.generateMipmaps=!0,t.needsUpdate=!0,t}buildBuildings(e,t,i,s,r){const a=e.buildings;if(!a.length)return;const o=e.dem,l=this.W,c=this.H,u=this.dx,d=this.H*u,h=(I,C)=>{const P=Math.min(l-1,Math.max(0,Math.floor(I/u))),U=Math.min(c-1,Math.max(0,Math.floor(C/u)));return o[U*l+P]},f=[],g=[],_=[],m=[],p=[],x=[],M=new at;for(const I of a){const C=I.r;if(C.length<3)continue;let P=1/0,U=-1/0;for(const[ae,me]of C){const oe=h(ae,me);oe<P&&(P=oe),oe>U&&(U=oe)}if(!isFinite(P)||P<-1)continue;const ne=P-.5,S=P+Math.min(Math.max(I.h,3),420)+Math.min(U-P,8),b=I.h>70,H=b?.58+(Math.random()-.5)*.05:.09+(Math.random()-.5)*.06,z=b?.04+Math.random()*.04:.03+Math.random()*.04,X=(b?.8:.86)+(Math.random()-.5)*.06;M.setHSL(H,z,X);const j=Math.random();let q=0;for(let ae=0;ae<C.length;ae++){const me=C[ae],oe=C[(ae+1)%C.length];q+=me[0]*oe[1]-oe[0]*me[1]}const F=q<0?[...C].reverse():C;for(let ae=0;ae<F.length;ae++){const me=F[ae],oe=F[(ae+1)%F.length],ie=oe[0]-me[0],de=oe[1]-me[1],xe=Math.hypot(ie,de);if(xe<.2)continue;const ge=de/xe,Xe=-ie/xe,Ne=f.length/3,He=[[me[0],ne,me[1]],[oe[0],ne,oe[1]],[oe[0],S,oe[1]],[me[0],S,me[1]]];for(const[rt,nt,N]of He)f.push(rt,nt,-N),g.push(ge,0,-Xe),_.push(M.r*.92,M.g*.92,M.b*.92),m.push((rt+.5)/(l*u),(N+.5)/d),p.push(j);x.push(Ne,Ne+1,Ne+2,Ne,Ne+2,Ne+3)}const ee=F.map(([ae,me])=>new be(ae,me));let pe=[];try{pe=$r.triangulateShape(ee,[])}catch{pe=[]}const ce=f.length/3;for(const[ae,me]of F)f.push(ae,S,-me),g.push(0,1,0),_.push(M.r,M.g,M.b),m.push((ae+.5)/(l*u),(me+.5)/d),p.push(0);for(const ae of pe)x.push(ce+ae[0],ce+ae[1],ce+ae[2])}const w=new en;w.setAttribute("position",new Ct(f,3)),w.setAttribute("normal",new Ct(g,3)),w.setAttribute("color",new Ct(_,3)),w.setAttribute("bUv",new Ct(m,2)),w.setAttribute("lit",new Ct(p,1)),w.setIndex(x),this.buildingMat=new ji({vertexShader:Jw,fragmentShader:Qw,glslVersion:wi,uniforms:{...this.U,uTerrain:{value:t},uState:{value:i},uMod:{value:s},uSize:r}}),this.buildings=new It(w,this.buildingMat),this.buildings.frustumCulled=!1,this.buildings.renderOrder=1,this.root.add(this.buildings)}setStateTextures(e,t){this.terrainMat&&(this.terrainMat.uniforms.uState.value=e),this.waterMat&&(this.waterMat.uniforms.uState.value=e,this.waterMat.uniforms.uAux.value=t),this.buildingMat&&(this.buildingMat.uniforms.uState.value=e)}setSubgrid(e){this.U.uSubgrid.value=e?1:0}setBaselineTextures(e){this.flowB&&(this.root.remove(this.flowB.group),this.flowB.dispose(),this.flowB=null),this.arrowsB&&(this.root.remove(this.arrowsB.mesh),this.arrowsB.dispose(),this.arrowsB=null),e&&this.terrainTexRef&&this.modTexRef&&(this.flowB=new If(this.renderer,this.W,this.H,this.dx,e,this.terrainTexRef,this.modTexRef,this.U),this.arrowsB=new Uf(this.W,this.H,this.dx,e,this.terrainTexRef,this.modTexRef,this.U),this.root.add(this.flowB.group),this.root.add(this.arrowsB.mesh)),this.applyFlowMode()}setFlowMode(e){this.flowMode=e,this.applyFlowMode()}get effFlow(){return this.waterMode==="max"?"none":this.flowMode}applyFlowMode(){const e=this.effFlow==="particles",t=this.effFlow==="arrows";this.flowA&&(this.flowA.group.visible=e),this.arrowsA&&(this.arrowsA.mesh.visible=t),this.flowB&&(this.flowB.group.visible=!1),this.arrowsB&&(this.arrowsB.mesh.visible=!1)}setFlowSpawn(e,t,i){(e==="A"?this.flowA:this.flowB)?.setSpawn(t,i)}resetFlow(){this.flowA?.reset(),this.flowB?.reset()}setTextureMode(e){if(this.texMode=e,!this.terrainMat)return;const t=e==="imagery"?this.imageryTex??this.basemapTex:this.basemapTex??this.imageryTex;this.terrainMat.uniforms.uMap.value=t,this.terrainMat.uniforms.uHasMap.value=t?1:0}setBuildingsBlock(e){this.U.uBuildings.value=e?1:0}setShowMax(e){this.U.uShowMax.value=e?1:0}setShadows(e){this.U.uShadow.value=e?1:0}setWaterMode(e){this.waterMode=e,this.U.uWaterMode.value=e==="max"?1:0,this.applyFlowMode()}setExaggeration(e){const t=this.director.controls.target,i=e/this.exag;this.exag=e,this.root.scale.y=e,this.U.uExag.value=e;const s=t.y*(i-1);t.y+=s,this.camera.position.y+=s,this.director.controls.update()}cameraPreset(e,t){const i=this.director.controls.target,s=t?t.x:i.x,r=t?t.y:-i.z,a=new O(s,this.groundAt(s,r)*this.exag+2,-r),o=Math.max(this.W,this.H)*this.dx,l=new O().subVectors(this.camera.position,i),c=hi.radToDeg(Math.atan2(l.x,l.z));if(e==="bird"){const u=new O(this.W*this.dx/2,0,-(this.H*this.dx)/2);u.y=this.groundAt(u.x,-u.z)*this.exag,this.director.flyTo(Xi.viewOf(u,o*.95,.01,84),2.2)}else e==="street"?this.director.flyTo(this.clearView(a.setY(a.y+3),240,c),2.4):this.director.flyTo(Xi.viewOf(a,900,c,32),2.2)}clearView(e,t,i){const s=this.assets;if(!s)return Xi.viewOf(e,t,i,10);const r=(a,o)=>{const l=Math.min(this.W-1,Math.max(0,Math.floor(a/this.dx))),u=Math.min(this.H-1,Math.max(0,Math.floor(o/this.dx)))*this.W+l;return(s.dem[u]+s.bldh[u])*this.exag};for(const a of[9,14,20,28])for(let o=0;o<12;o++){const l=i+(o%2?1:-1)*Math.ceil(o/2)*30,c=Xi.viewOf(e,t,l,a);let u=!0;for(let d=1;d<=24&&u;d++){const h=new O().lerpVectors(e,c.pos,d/24);r(h.x,-h.z)>h.y-2&&(u=!1)}if(u)return c}return Xi.viewOf(e,t,i,35)}clearScene(){for(const e of[this.terrain,this.water,this.buildings])e&&(this.root.remove(e),e.material.dispose());this.buildings&&this.buildings.geometry.dispose(),this.grid?.dispose(),this.grid=null,this.terrain=this.water=this.buildings=null,this.imageryTex?.dispose(),this.basemapTex?.dispose(),this.imageryTex=this.basemapTex=null,this.setBaselineTextures(null),this.flowA&&(this.root.remove(this.flowA.group),this.flowA.dispose(),this.flowA=null),this.arrowsA&&(this.root.remove(this.arrowsA.mesh),this.arrowsA.dispose(),this.arrowsA=null),this.split=null,this.clearMeasures(),this.setLabels([])}setWeather(e,t,i){const s=hi.clamp(1-hi.smoothstep(Math.sin((i-6)/12*Math.PI),-.15,.15),0,1);this.U.uNight.value=s*.22,this.U.uStorm.value=hi.clamp(t,0,1),this.U.uRainI.value=hi.clamp(e/60,0,1.6);const r=Math.max(Math.sin((i-6)/12*Math.PI),.08),a=(i-12)/12*Math.PI*.9;this.U.uSun.value.set(Math.sin(a)*Math.cos(r*1.3),Math.max(r,.15),Math.cos(a)*Math.cos(r*1.3)).normalize();const o=new at(11123917),l=new at(8161171),c=new at(2897218),u=o.clone().lerp(l,this.U.uStorm.value).lerp(c,s*.8);this.U.uFogColor.value.copy(u),this.U.uSkyColor.value.copy(new at(9418464).lerp(new at(3818578),this.U.uStorm.value).lerp(new at(1581104),s*.8));const d=Math.min(1,5e3/Math.max(1,this.W*this.dx));this.U.uFogDensity.value=(4e-5+3e-5*this.U.uStorm.value+2e-5*this.U.uRainI.value)*d,this.renderer.setClearColor(u)}lightning(){this.flashT=.18}setLabels(e){const t=new Set(e.map(a=>a.id));for(const[a,o]of this.labelEls)t.has(a)||(o.el.remove(),this.labelEls.delete(a));for(const a of e){let o=this.labelEls.get(a.id);if(!o){const l=document.createElement("div");this.labelsDiv.appendChild(l),o={el:l,item:a},this.labelEls.set(a.id,o)}o.item=a,o.el.className=`marker-label ${a.cls}`,a.color!==void 0&&o.el.style.setProperty("--dot",`#${a.color.toString(16).padStart(6,"0")}`),o.el.innerHTML=`${a.text}${a.sub?`<span class="depth">${a.sub}</span>`:""}`}const i=this.exag,s=this.pinGeo,r=this.pinWhite;for(const a of this.markerGroup.children){const o=a.material;o!==r&&o.dispose()}this.markerGroup.clear();for(const a of e){const o=this.groundAt(a.x,a.y),l=a.cls.includes("landmark"),c=a.cls.includes("upin"),u=a.color??(a.cls.includes("gauge")?2842585:a.cls.includes("none")?7042433:a.cls.includes("severe")?13648175:a.cls.includes("moderate")||a.cls.includes("val")?14060058:l?5134180:7042433),d=l?14:c?34:26,h=new It(s.pin,r);h.scale.set(1,d/i,1),h.position.set(a.x,o+d/2/i,-a.y),this.markerGroup.add(h);const f=new It(l?s.small:s.head,new Gs({color:u}));if(f.scale.y=1/i,f.position.set(a.x,o+(d+1)/i,-a.y),this.markerGroup.add(f),l)continue;const g=new It(s.ring,new Gs({color:u,transparent:!0,opacity:c?.9:.6,side:ni}));g.rotation.x=-Math.PI/2,g.position.set(a.x,o+.5/i,-a.y),c&&g.scale.setScalar(1.6),this.markerGroup.add(g)}}updateLabels(){const e=new O,t=window.innerWidth,i=window.innerHeight,s=o=>o.includes("upin")?-1:o.includes("val")?0:o.includes("gauge")?1:o.includes("severe")?2:o.includes("landmark")?4:3,r=[];for(const{el:o,item:l}of this.labelEls.values()){e.set(l.x,this.groundAt(l.x,l.y)*this.exag+(l.cls.includes("landmark")?18:l.cls.includes("upin")?38:30),-l.y);const c=e.distanceTo(this.camera.position);e.project(this.camera);const u=(e.x+1)/2*t,d=(1-e.y)/2*i;if(!(e.z<1&&c<9e3&&Math.abs(e.x)<1.05&&Math.abs(e.y)<1.05&&u>this.labelInset.l+24&&u<t-this.labelInset.r-24&&d>this.labelInset.t+30&&d<i-Math.max(20,this.labelInset.b))){o.style.display="none";continue}r.push({el:o,sx:u,sy:d,dist:c,p:s(o.className),wpx:o.offsetWidth||120})}r.sort((o,l)=>o.p-l.p||o.dist-l.dist);const a=[];for(const o of r){const l={x0:o.sx-o.wpx/2-4,x1:o.sx+o.wpx/2+4,y0:o.sy-26,y1:o.sy+2};if(l.x0<this.labelInset.l+8||l.x1>t-this.labelInset.r-8){o.el.style.display="none";continue}if(a.some(u=>l.x0<u.x1&&l.x1>u.x0&&l.y0<u.y1&&l.y1>u.y0)){o.el.style.display="none";continue}a.push(l),o.el.style.display="flex",o.el.style.left=`${o.sx}px`,o.el.style.top=`${o.sy}px`,o.el.style.opacity=`${hi.clamp(1.3-o.dist/9e3,.4,1)}`}}groundAt(e,t){if(!this.assets)return 0;const i=hi.clamp(Math.floor(e/this.dx),0,this.W-1),s=hi.clamp(Math.floor(t/this.dx),0,this.H-1),r=this.assets.dem[s*this.W+i];return r<-1?.5:r}raycastGround(e,t){if(!this.assets)return null;const i=new be(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),s=new Af;s.setFromCamera(i,this.camera);const r=s.ray.origin,a=s.ray.direction,o=4e4;let l=Math.max(this.dx*.5,2),c=0,u=!0;for(let d=0;d<o;d+=l){const h=r.x+a.x*d,f=r.y+a.y*d,g=r.z+a.z*d,_=h,m=-g,p=_>=0&&m>=0&&_<=this.W*this.dx&&m<=this.H*this.dx,x=p?this.groundAt(_,m)*this.exag:-1e9,M=f>x;if(!M&&u&&p){let w=c,I=d;for(let ne=0;ne<12;ne++){const S=(w+I)/2,b=r.x+a.x*S,H=r.y+a.y*S,z=r.z+a.z*S;H>this.groundAt(b,-z)*this.exag?w=S:I=S}const C=(w+I)/2,P=r.x+a.x*C,U=r.z+a.z*C;return{x:P,y:-U,z:this.groundAt(P,-U)}}u=M,c=d,d>2e3&&(l=Math.max(l,this.dx))}return null}clearMeasures(){this.measureGroup.clear(),this.setDraft([],"wall")}setMeasures(e){this.measureGroup.clear();const t=i=>i.role??"whatif";for(const{m:i,eff:s,selected:r}of e){const a=i.kind==="wall"?t(i)==="whatif"?16167531:t(i)==="record"?8162984:3003583:i.kind==="sandbag"?10910015:i.kind==="pump"?5032432:i.kind==="tank"?7066778:9471465,o=r?15884300:s<0?15680580:a,l=s===0,c=(d=1)=>new Gs({color:o,transparent:l||d<1,opacity:l?Math.min(.28,d):d,side:ni,depthWrite:!l}),u=d=>{d.userData.id=i.id,this.measureGroup.add(d)};if(i.kind==="wall"||i.kind==="sandbag"){const d=i.height??1;if(i.cells?.length&&i.pts.length<2){const h=new Zs(this.dx,d,this.dx),f=new BS(h,c(),i.cells.length),g=new Lt;i.cells.forEach((_,m)=>{const p=_%this.W,x=Math.floor(_/this.W),M=(p+.5)*this.dx,w=(x+.5)*this.dx,I=this.groundAt(M,w);g.makeTranslation(M,I+(s<0?-d/2:d/2),-w),f.setMatrixAt(m,g)}),f.instanceMatrix.needsUpdate=!0,u(f);continue}for(let h=1;h<i.pts.length;h++){const f=i.pts[h-1],g=i.pts[h],_=Math.hypot(g.x-f.x,g.y-f.y);if(_<.5)continue;const m=new Zs(_+1.5,d,i.kind==="wall"?1.2:2.2),p=new It(m,c()),x=(f.x+g.x)/2,M=(f.y+g.y)/2,w=Math.max(this.groundAt(f.x,f.y),this.groundAt(g.x,g.y));p.position.set(x,w+(s<0?-d/2:d/2),-M),p.rotation.y=Math.atan2(-(g.y-f.y),g.x-f.x),u(p)}if(r)for(const h of i.pts){const f=new It(new kr(1.6,10,8),new Gs({color:15884300}));f.position.set(h.x,this.groundAt(h.x,h.y)+d+1.2,-h.y),u(f)}}else if(i.kind==="pump"){const d=i.pts[0];if(!d)continue;const h=this.groundAt(d.x,d.y),f=new It(new ml(4,5,7,12),c());f.position.set(d.x,h+3.5,-d.y),u(f);const g=new It(new gl((i.radius??30)-2,i.radius??30,32),c(.5));g.rotation.x=-Math.PI/2,g.position.set(d.x,h+.6,-d.y),u(g)}else if(i.kind==="tank"||i.kind==="drain"){if(i.pts.length>=3){const d=new Tm(i.pts.map(_=>new be(_.x,-_.y))),h=new wu(d);h.rotateX(Math.PI/2);const f=this.groundAt(i.pts[0].x,i.pts[0].y),g=new It(h,c(.35));g.position.y=f+.8,u(g)}else if(i.pts[0]){const d=i.pts[0],h=this.groundAt(d.x,d.y),f=new It(new Su(i.radius??60,40),c(.35));f.rotation.x=-Math.PI/2,f.position.set(d.x,h+.8,-d.y),u(f)}}}}pickMeasure(e,t){const i=new be(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),s=new Af;s.setFromCamera(i,this.camera);const r=s.intersectObjects(this.measureGroup.children,!0);for(const a of r){let o=a.object;for(;o&&o.userData.id===void 0;)o=o.parent;if(o)return o.userData.id}return null}setDraft(e,t){if(this.draftLine&&(this.root.remove(this.draftLine),this.draftLine.geometry.dispose(),this.draftLine=null),e.length<1)return;const i=e.map(r=>new O(r.x,this.groundAt(r.x,r.y)+1.5,-r.y));e.length===1&&i.push(i[0].clone().add(new O(0,10,0)));const s=new en().setFromPoints(i);this.draftLine=new Mm(s,new xm({color:t==="wall"?16167531:16777215})),this.draftLine.renderOrder=30,this.root.add(this.draftLine)}defaultView(){const e=this.W*this.dx/2,t=this.H*this.dx/2,i=new O(e,this.groundAt(e,t)*this.exag+5,-t);return Xi.viewOf(i,Math.max(this.W,this.H)*this.dx*.95,20,42)}viewAt(e,t,i=900){const s=new O(e,this.groundAt(e,t)*this.exag+5,-t);return Xi.viewOf(s,i,-20+Math.random()*50,30)}render(e){this.time+=e,this.U.uTime.value=this.time,this.flashT>0?(this.flashT-=e,this.U.uFlash.value=Math.max(0,this.flashT/.18)*(.6+.4*Math.random())):this.U.uFlash.value=0,this.director.update(e),this.U.uCam.value.copy(this.camera.position),this.rainMat.uniforms.uCenter.value.copy(this.director.controls.target),this.rain.visible=this.U.uRainI.value>.01,this.sky.position.copy(this.camera.position);const t=this.camera.position.distanceTo(this.director.controls.target);if(this.effFlow==="particles"&&(this.flowA?.update(e,t),this.split&&this.flowB?.update(e,t)),this.split&&this.split.frac>.002&&this.split.frac<.998){const i=this.renderer.getDrawingBufferSize(new be),s=Math.round(this.split.frac*i.x),r=this.effFlow==="particles",a=this.effFlow==="arrows";this.renderer.setScissorTest(!0),this.setStateTextures(this.split.left.state,this.split.left.aux),this.flowA&&(this.flowA.group.visible=!1),this.arrowsA&&(this.arrowsA.mesh.visible=!1),this.flowB&&(this.flowB.group.visible=r),this.arrowsB&&(this.arrowsB.mesh.visible=a),this.renderer.setScissor(0,0,s,i.y),this.renderer.render(this.scene,this.camera),this.setStateTextures(this.split.right.state,this.split.right.aux),this.flowB&&(this.flowB.group.visible=!1),this.arrowsB&&(this.arrowsB.mesh.visible=!1),this.flowA&&(this.flowA.group.visible=r),this.arrowsA&&(this.arrowsA.mesh.visible=a),this.renderer.setScissor(s,0,i.x-s,i.y),this.renderer.render(this.scene,this.camera),this.renderer.setScissorTest(!1)}else this.renderer.render(this.scene,this.camera);this.updateLabels()}}function ob(n){const e=rb,t=sb.map(i=>new at(i));if(n<=0)return`#${t[0].getHexString()}`;for(let i=1;i<e.length;i++)if(n<=e[i]){const s=(n-e[i-1])/(e[i]-e[i-1]);return`#${t[i-1].clone().lerp(t[i],s).getHexString()}`}return`#${t[t.length-1].getHexString()}`}class lb{constructor(e,t,i){te(this,"measures",[]);te(this,"nextId",1);te(this,"baseDrain",null);te(this,"sea",null);te(this,"rPos");te(this,"rNeg");this.W=e,this.H=t,this.dx=i,this.rPos=new Float32Array(e*t),this.rNeg=new Float32Array(e*t)}add(e){const t={...e,id:this.nextId++};return this.ensureKey(t),this.measures.push(t),t}get(e){return this.measures.find(t=>t.id===e)}update(e,t){const i=this.get(e);i&&(Object.assign(i,t),i.locked&&(i.locked=!1),this.ensureKey(i))}ensureKey(e){(e.role??"whatif")!=="whatif"&&!e.key&&(e.key=`${e.kind}_${Date.now().toString(36)}${e.id.toString(36)}`)}remove(e){this.measures=this.measures.filter(t=>t.id!==e)}clearWhatIf(){this.measures=this.measures.filter(e=>(e.role??"whatif")!=="whatif")}replaceAll(e){this.measures=[],this.nextId=1;for(const t of e)this.add(t)}existsAt(e,t){const i=Nf(e.built),s=Nf(e.removed);return(i===null||t.eventStart>=i)&&(s===null||t.eventStart<s)}effect(e,t){const i=e.role??"whatif";if(i==="whatif")return t.whatIf?1:0;if(i==="record"){const s=this.existsAt(e,t);return e.in_dtm?s?0:e.kind==="wall"||e.kind==="sandbag"?-1:0:s?1:0}return e.events?.length&&!e.events.includes(t.eventId)||e.from_h!==void 0&&e.from_h!==null&&t.simH<e.from_h||e.to_h!==void 0&&e.to_h!==null&&t.simH>=e.to_h?0:1}signature(e){return this.measures.map(t=>`${t.id}:${this.effect(t,e)}`).join("|")}cost(e){const t=this.length(e);switch(e.kind){case"wall":return t*(e.height??1)*45e3;case"sandbag":return t*800;case"pump":return 25e5+(e.rate??1)*12e5;case"tank":return(e.capacity??1e4)*9e3;case"drain":return this.area(e)*1500}}length(e){if(e.cells?.length&&e.pts.length<2)return e.cells.length*this.dx;let t=0;for(let i=1;i<e.pts.length;i++)t+=Math.hypot(e.pts[i].x-e.pts[i-1].x,e.pts[i].y-e.pts[i-1].y);return t}area(e){if(e.cells?.length&&e.pts.length<3)return e.cells.length*this.dx*this.dx;if(e.pts.length<3)return Math.PI*(e.radius??50)**2;let t=0;const i=e.pts;for(let s=0;s<i.length;s++){const r=i[(s+1)%i.length];t+=i[s].x*r.y-r.x*i[s].y}return Math.abs(t)/2}rasterize(e,t){const i=this.W*this.H;this.rPos.fill(0),this.rNeg.fill(0);for(let s=0;s<i;s++)e[s*4]=0,e[s*4+1]=0,e[s*4+2]=0,e[s*4+3]=this.baseDrain?this.baseDrain[s]:1;for(const s of this.measures){const r=this.effect(s,t);if(!r)continue;const a=this.cellsOf(s);if(a.length){if(s.kind==="wall"||s.kind==="sandbag"){const o=(s.height??1)*r;for(const l of a)this.sea&&this.sea[l]||(o>0?this.rPos[l]=Math.max(this.rPos[l],o):this.rNeg[l]=Math.min(this.rNeg[l],o))}else if(s.kind==="pump"){const o=(s.rate??1)/(a.length*this.dx*this.dx);for(const l of a)e[l*4+1]+=o}else if(s.kind==="tank"){const o=(s.capacity??2e4)/(a.length*this.dx*this.dx);for(const l of a)e[l*4+2]+=o}else if(s.kind==="drain")for(const o of a)e[o*4+3]*=s.factor??2}}for(let s=0;s<i;s++)e[s*4]=this.rPos[s]>0?this.rPos[s]:this.rNeg[s]}cellsOf(e){return e.cells?.length?e.cells.filter(t=>t>=0&&t<this.W*this.H):e.pts.length?e.kind==="wall"||e.kind==="sandbag"?this.lineCells(e.pts):e.kind==="pump"?this.discCells(e.pts[0],e.radius??25):e.pts.length>=3?this.polygonCells(e.pts):this.discCells(e.pts[0],e.radius??50):[]}cellOf(e){return{i:Math.floor(e.x/this.dx),j:Math.floor(e.y/this.dx)}}inside(e,t){return e>=0&&t>=0&&e<this.W&&t<this.H}lineCells(e){const t=[],i=new Set,s=(r,a)=>{if(this.inside(r,a)){const o=a*this.W+r;i.has(o)||(i.add(o),t.push(o))}};if(e.length===1){const r=this.cellOf(e[0]);return s(r.i,r.j),t}for(let r=1;r<e.length;r++){const a=this.cellOf(e[r-1]),o=this.cellOf(e[r]);let{i:l,j:c}=a;const{i:u,j:d}=o,h=Math.abs(u-l),f=-Math.abs(d-c),g=l<u?1:-1,_=c<d?1:-1;let m=h+f;for(;s(l,c),!(l===u&&c===d);){const p=2*m;p>=f&&(m+=f,l+=g,s(l,c)),p<=h&&(m+=h,c+=_,s(l,c))}}return t}discCells(e,t){const i=[],s=Math.max(1,Math.ceil(t/this.dx)),r=this.cellOf(e);for(let a=r.j-s;a<=r.j+s;a++)for(let o=r.i-s;o<=r.i+s;o++)this.inside(o,a)&&Math.hypot((o+.5)*this.dx-e.x,(a+.5)*this.dx-e.y)<=t&&i.push(a*this.W+o);if(!i.length){const a=r.j*this.W+r.i;this.inside(r.i,r.j)&&i.push(a)}return i}polygonCells(e){const t=[],i=e.map(c=>c.x),s=e.map(c=>c.y),r=Math.max(0,Math.floor(Math.min(...i)/this.dx)),a=Math.min(this.W-1,Math.floor(Math.max(...i)/this.dx)),o=Math.max(0,Math.floor(Math.min(...s)/this.dx)),l=Math.min(this.H-1,Math.floor(Math.max(...s)/this.dx));for(let c=o;c<=l;c++)for(let u=r;u<=a;u++)cb((u+.5)*this.dx,(c+.5)*this.dx,e)&&t.push(c*this.W+u);return t}toSaved(e,t){const i=this.measures.filter(s=>!s.locked).map(s=>{const{id:r,locked:a,...o}=s;return o});return{version:1,scene:e,origin:t,saved:new Date().toISOString(),measures:i}}loadSaved(e,t){const i=(e.origin?.e0??t.e0)-t.e0,s=(e.origin?.n0??t.n0)-t.n0;for(const r of e.measures??[]){const a={...r,pts:(r.pts??[]).map(o=>({x:o.x+i,y:o.y+s}))};if(a.key){const o=this.measures.find(l=>l.key===a.key);o&&(this.measures=this.measures.filter(l=>l!==o))}this.add(a)}}}function Nf(n){if(!n)return null;const e=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(n.trim());return e?new Date(`${e[1]}-${e[2]}-${e[3]??"01"}T00:00:00+08:00`).getTime():null}function cb(n,e,t){let i=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){const a=t[s].x,o=t[s].y,l=t[r].x,c=t[r].y;o>e!=c>e&&n<(l-a)*(e-o)/(c-o)+a&&(i=!i)}return i}var Nl,Rt,Dm,Lm,_s,Ff,Im,Um,Gc,il,Va,Nm,Cu,Wh,$h,vl={},_l=[],hb=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Fl=Array.isArray;function Zi(n,e){for(var t in e)n[t]=e[t];return n}function Ru(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function Fm(n,e,t){var i,s,r,a={};for(r in e)r=="key"?i=e[r]:r=="ref"?s=e[r]:a[r]=e[r];if(arguments.length>2&&(a.children=arguments.length>3?Nl.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(r in n.defaultProps)a[r]===void 0&&(a[r]=n.defaultProps[r]);return sl(n,a,i,s,null)}function sl(n,e,t,i,s){var r={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Dm,__i:-1,__u:0};return s==null&&Rt.vnode!=null&&Rt.vnode(r),r}function pt(n){return n.children}function Ga(n,e){this.props=n,this.context=e}function Qs(n,e){if(e==null)return n.__?Qs(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?Qs(n):null}function ub(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,i=[],s=[],r=Zi({},e);r.__v=e.__v+1,Rt.vnode&&Rt.vnode(r),Pu(n.__P,r,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,i,t??Qs(e),!!(32&e.__u),s),r.__v=e.__v,r.__.__k[r.__i]=r,Hm(i,r,s),e.__e=e.__=null,r.__e!=t&&Om(r)}}function Om(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),Om(n)}function Of(n){(!n.__d&&(n.__d=!0)&&_s.push(n)&&!xl.__r++||Ff!=Rt.debounceRendering)&&((Ff=Rt.debounceRendering)||Im)(xl)}function xl(){try{for(var n,e=1;_s.length;)_s.length>e&&_s.sort(Um),n=_s.shift(),e=_s.length,ub(n)}finally{_s.length=xl.__r=0}}function km(n,e,t,i,s,r,a,o,l,c,u){var d,h,f,g,_,m,p=i&&i.__k||_l,x=e.length;for(l=db(t,e,p,l,x),d=0;d<x;d++)(f=t.__k[d])!=null&&(h=f.__i!=-1&&p[f.__i]||vl,f.__i=d,m=Pu(n,f,h,s,r,a,o,l,c,u),g=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&Du(h.ref,null,f),u.push(f.ref,f.__c||g,f)),_==null&&g!=null&&(_=g),4&f.__u?(l=zm(f,l,n),h.__e&&(h.__e=null)):typeof f.type=="function"&&m!==void 0?l=m:g&&(l=g.nextSibling),f.__u&=-7);return t.__e=_,l}function db(n,e,t,i,s){var r,a,o,l,c,u=t.length,d=u,h=0;for(n.__k=new Array(s),r=0;r<s;r++)(a=e[r])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=n.__k[r]=sl(null,a,null,null,null):Fl(a)?a=n.__k[r]=sl(pt,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=n.__k[r]=sl(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):n.__k[r]=a,l=r+h,a.__=n,a.__b=n.__b+1,o=null,(c=a.__i=fb(a,t,l,d))!=-1&&(d--,(o=t[c])&&(o.__u|=2)),o==null||o.__v==null?(c==-1&&(s>u?h--:s<u&&h++),typeof a.type!="function"&&(a.__u|=4)):c!=l&&(c==l-1?h--:c==l+1?h++:(c>l?h--:h++,a.__u|=4))):n.__k[r]=null;if(d)for(r=0;r<u;r++)(o=t[r])!=null&&!(2&o.__u)&&(o.__e==i&&(i=Qs(o)),Gm(o,o));return i}function zm(n,e,t){var i,s;if(typeof n.type=="function"){for(i=n.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=n,e=zm(i[s],e,t));return e}n.__e!=e&&(e&&n.type&&!e.parentNode&&(e=Qs(n)),e=t.insertBefore(n.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function fb(n,e,t,i){var s,r,a,o=n.key,l=n.type,c=e[t],u=c!=null&&(2&c.__u)==0;if(c===null&&o==null||u&&o==c.key&&l==c.type)return t;if(i>(u?1:0)){for(s=t-1,r=t+1;s>=0||r<e.length;)if((c=e[a=s>=0?s--:r++])!=null&&!(2&c.__u)&&o==c.key&&l==c.type)return a}return-1}function kf(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||hb.test(e)?t:t+"px"}function $o(n,e,t,i,s){var r,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(e in i)t&&e in t||kf(n.style,e,"");if(t)for(e in t)i&&t[e]==i[e]||kf(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(Nm,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+r]=t,t?i?t[Va]=i[Va]:(t[Va]=Cu,n.addEventListener(e,r?$h:Wh,r)):n.removeEventListener(e,r?$h:Wh,r);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function zf(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[il]==null)e[il]=Cu++;else if(e[il]<t[Va])return;return t(Rt.event?Rt.event(e):e)}}}function Pu(n,e,t,i,s,r,a,o,l,c){var u,d,h,f,g,_,m,p,x,M,w,I,C,P,U,ne,S=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),r=[o=e.__e=t.__e]),(u=Rt.__b)&&u(e);e:if(typeof S=="function"){d=a.length;try{if(x=e.props,M=S.prototype&&S.prototype.render,w=(u=S.contextType)&&i[u.__c],I=u?w?w.props.value:u.__:i,t.__c?p=(h=e.__c=t.__c).__=h.__E:(M?e.__c=h=new S(x,I):(e.__c=h=new Ga(x,I),h.constructor=S,h.render=mb),w&&w.sub(h),h.state||(h.state={}),h.__n=i,f=h.__d=!0,h.__h=[],h._sb=[]),M&&h.__s==null&&(h.__s=h.state),M&&S.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=Zi({},h.__s)),Zi(h.__s,S.getDerivedStateFromProps(x,h.__s))),g=h.props,_=h.state,h.__v=e,f)M&&S.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),M&&h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(M&&S.getDerivedStateFromProps==null&&x!==g&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(x,I),e.__v==t.__v||!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(x,h.__s,I)===!1){e.__v!=t.__v&&(h.props=x,h.state=h.__s,h.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(b){b&&(b.__=e)}),_l.push.apply(h.__h,h._sb),h._sb=[],h.__h.length&&a.push(h),o=Qs(t);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(x,h.__s,I),M&&h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(g,_,m)})}if(h.context=I,h.props=x,h.__P=n,h.__e=!1,C=Rt.__r,P=0,M)h.state=h.__s,h.__d=!1,C&&C(e),u=h.render(h.props,h.state,h.context),_l.push.apply(h.__h,h._sb),h._sb=[];else do h.__d=!1,C&&C(e),u=h.render(h.props,h.state,h.context),h.state=h.__s;while(h.__d&&++P<25);h.state=h.__s,h.getChildContext!=null&&(i=Zi(Zi({},i),h.getChildContext())),M&&!f&&h.getSnapshotBeforeUpdate!=null&&(m=h.getSnapshotBeforeUpdate(g,_)),U=u!=null&&u.type===pt&&u.key==null?Vm(u.props.children):u,o=km(n,Fl(U)?U:[U],e,t,i,s,r,a,o,l,c),h.base=e.__e,e.__u&=-161,h.__h.length&&a.push(h),p&&(h.__E=h.__=null)}catch(b){if(a.length=d,e.__v=null,l||r!=null){if(b.then){for(e.__u|=l?160:128;o&&o.nodeType==8&&o.nextSibling;)o=o.nextSibling;r!=null&&(r[r.indexOf(o)]=null),e.__e=o}else if(r!=null)for(ne=r.length;ne--;)Ru(r[ne])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),b.then||Bm(e),Rt.__e(b,e,t)}}else r==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):o=e.__e=pb(t.__e,e,t,i,s,r,a,l,c);return(u=Rt.diffed)&&u(e),128&e.__u?void 0:o}function Bm(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(Bm))}function Hm(n,e,t){for(var i=0;i<t.length;i++)Du(t[i],t[++i],t[++i]);Rt.__c&&Rt.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(r){r.call(s)})}catch(r){Rt.__e(r,s.__v)}})}function Vm(n){return typeof n!="object"||n==null||n.__b>0?n:Fl(n)?n.map(Vm):n.constructor!==void 0?null:Zi({},n)}function pb(n,e,t,i,s,r,a,o,l){var c,u,d,h,f,g,_,m=t.props||vl,p=e.props,x=e.type;if(x=="svg"?s="http://www.w3.org/2000/svg":x=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),r!=null){for(c=0;c<r.length;c++)if((f=r[c])&&"setAttribute"in f==!!x&&(x?f.localName==x:f.nodeType==3)){n=f,r[c]=null;break}}if(n==null){if(x==null)return document.createTextNode(p);n=document.createElementNS(s,x,p.is&&p),o&&(Rt.__m&&Rt.__m(e,r),o=!1),r=null}if(x==null)m===p||o&&n.data==p||(n.data=p);else{if(r=x=="textarea"&&p.defaultValue!=null?null:r&&Nl.call(n.childNodes),!o&&r!=null)for(m={},c=0;c<n.attributes.length;c++)m[(f=n.attributes[c]).name]=f.value;for(c in m)f=m[c],c=="dangerouslySetInnerHTML"?d=f:c=="children"||c in p||c=="value"&&"defaultValue"in p||c=="checked"&&"defaultChecked"in p||$o(n,c,null,f,s);for(c in p)f=p[c],c=="children"?h=f:c=="dangerouslySetInnerHTML"?u=f:c=="value"?g=f:c=="checked"?_=f:o&&typeof f!="function"||m[c]===f||$o(n,c,f,m[c],s);if(u)o||d&&(u.__html==d.__html||u.__html==n.innerHTML)||(n.innerHTML=u.__html),e.__k=[];else if(d&&(n.innerHTML=""),km(e.type=="template"?n.content:n,Fl(h)?h:[h],e,t,i,x=="foreignObject"?"http://www.w3.org/1999/xhtml":s,r,a,r?r[0]:t.__k&&Qs(t,0),o,l),r!=null)for(c=r.length;c--;)Ru(r[c]);o&&x!="textarea"||(c="value",x=="progress"&&g==null?n.removeAttribute("value"):g!=null&&(g!==n[c]||x=="progress"&&!g||x=="option"&&g!=m[c])&&$o(n,c,g,m[c],s),c="checked",_!=null&&_!=n[c]&&$o(n,c,_,m[c],s))}return n}function Du(n,e,t){try{if(typeof n=="function"){var i=typeof n.__u=="function";i&&n.__u(),i&&e==null||(n.__u=n(e))}else n.current=e}catch(s){Rt.__e(s,t)}}function Gm(n,e,t){var i,s;if(Rt.unmount&&Rt.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||Du(i,null,e)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){Rt.__e(r,e)}i.base=i.__P=i.__n=null}if(i=n.__k)for(s=0;s<i.length;s++)i[s]&&Gm(i[s],e,t||typeof n.type!="function");t||Ru(n.__e),n.__c=n.__=n.__e=void 0}function mb(n,e,t){return this.constructor(n,t)}function gb(n,e,t){var i,s,r,a;e==document&&(e=document.documentElement),Rt.__&&Rt.__(n,e),s=(i=!1)?null:e.__k,r=[],a=[],Pu(e,n=e.__k=Fm(pt,null,[n]),s||vl,vl,e.namespaceURI,s?null:e.firstChild?Nl.call(e.childNodes):null,r,s?s.__e:e.firstChild,i,a),Hm(r,n,a),n.props.children=null}Nl=_l.slice,Rt={__e:function(n,e,t,i){for(var s,r,a;e=e.__;)if((s=e.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(n)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,i||{}),a=s.__d),a)return s.__E=s}catch(o){n=o}throw n}},Dm=0,Lm=function(n){return n!=null&&n.constructor===void 0},Ga.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Zi({},this.state),typeof n=="function"&&(n=n(Zi({},t),this.props)),n&&Zi(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Of(this))},Ga.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Of(this))},Ga.prototype.render=pt,_s=[],Im=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Um=function(n,e){return n.__v.__b-e.__v.__b},xl.__r=0,Gc=Math.random().toString(8),il="__d"+Gc,Va="__a"+Gc,Nm=/(PointerCapture)$|Capture$/i,Cu=0,Wh=zf(!1),$h=zf(!0);const vb={subtitle:{zh:"香港洪涝实验室 · 交互式洪水数字孪生",en:"Hong Kong interactive flood digital twin"},scenario:{zh:"情景",en:"Scenario"},comparison:{zh:"真实数据 vs 模拟",en:"Observed vs simulated"},params:{zh:"参数",en:"Parameters"},surgeScale:{zh:"风暴潮增水倍率",en:"Surge multiplier"},waveSetup:{zh:"波浪增水（平均水位抬升）",en:"Wave set-up"},waveHs:{zh:"岸边有效波高 Hs（越浪）",en:"Nearshore wave height Hs (overtopping)"},slr:{zh:"海平面上升",en:"Sea-level rise"},rainScale:{zh:"雨量倍率",en:"Rainfall multiplier"},drain:{zh:"排水能力",en:"Drainage capacity"},buildingsBlock:{zh:"建筑物阻水（视为实体）",en:"Buildings block flow"},subgrid:{zh:"子网格地形（1 m LiDAR 格内分布）",en:"Sub-grid terrain (1 m LiDAR within cells)"},defences:{zh:"沿岸防御（按事件日期生效）",en:"Coastal defences (by event date)"},def_built:{zh:"事件时已建成",en:"in place at the event"},def_notyet:{zh:"事件时未建成",en:"not yet built at the event"},measures:{zh:"措施与防御",en:"Measures & defences"},role_whatif:{zh:"情景措施",en:"What-if"},role_record:{zh:"实际工程",en:"Built record"},role_temporary:{zh:"临时措施",en:"Temporary"},newRole:{zh:"新画的措施记为",en:"Draw new measures as"},snapShore:{zh:"顶点吸附到岸线格（画海堤用）",en:"Snap vertices to the shoreline (for sea walls)"},snapOn:{zh:"（顶点吸附岸线：开）",en:"(snapping to the shoreline)"},clearNote:{zh:"只清除情景措施；实际工程与临时措施是数据，逐条删除",en:"Removes what-if measures only; records and temporary measures are data, delete them one by one"},noMeasures:{zh:"还没有措施。画一条墙、放一台泵，或从 JSON 导入；点列表里的一项可编辑属性。",en:"No measures yet. Draw a wall, place a pump or import JSON; click an item to edit its attributes."},def_removed:{zh:"事件时尚未建成（已从地形中撤掉）",en:"not yet built at the event (removed from the terrain)"},def_raised:{zh:"已抬高地形",en:"added to the terrain"},tmp_on:{zh:"此刻生效",en:"active now"},tmp_off:{zh:"此刻未生效",en:"inactive now"},fromPipeline:{zh:"来自管线（defences.py），几何不可重画；改属性后会存入 measures.json",en:"From the pipeline (defences.py); geometry fixed, edited attributes go to measures.json"},delete:{zh:"删除",en:"Delete"},f_name:{zh:"名称",en:"Name"},f_name_ph:{zh:"例：鲤鱼门石筑海堤",en:"e.g. Lei Yue Mun rock seawall"},f_role:{zh:"类型",en:"Role"},f_built:{zh:"建成年月",en:"Completed"},f_removed:{zh:"拆除年月（可空）",en:"Removed (optional)"},f_in_dtm:{zh:"2020 年 LiDAR 地形里已有此结构（更早的事件会把它撤掉）",en:"Already in the 2020 LiDAR terrain (removed for earlier events)"},f_events:{zh:"适用事件：",en:"Applies to: "},f_window:{zh:"生效时间窗（距事件开始的小时）",en:"Active window (hours from event start)"},f_src:{zh:"来源",en:"Source"},f_src_ph:{zh:"文件 / 新闻 / 现场照片",en:"paper / news / photo"},f_note:{zh:"备注",en:"Note"},f_key:{zh:"key",en:"key"},geomCells:{zh:"格索引几何",en:"cell-index geometry"},save:{zh:"保存到场景",en:"Save to scene"},download:{zh:"下载 JSON",en:"Download JSON"},revert:{zh:"放弃改动",en:"Revert"},exportNote:{zh:"导出 JSON",en:"Export JSON"},importNote:{zh:"导入 JSON（同 key 覆盖）",en:"Import JSON (same key replaces)"},wall:{zh:"防洪墙 / 挡水板",en:"Flood wall / barrier"},sandbag:{zh:"沙包堤",en:"Sandbag line"},pump:{zh:"排水泵",en:"Pump"},tank:{zh:"地下蓄洪池",en:"Storage tank"},drainUp:{zh:"雨水渠扩容",en:"Drain upgrade"},clear:{zh:"清除全部",en:"Clear all"},finish:{zh:"完成绘制",en:"Finish"},cancel:{zh:"取消",en:"Cancel"},wallHeight:{zh:"墙高",en:"Height"},pumpRate:{zh:"抽排流量",en:"Pump rate"},tankCap:{zh:"容量",en:"Capacity"},drainFactor:{zh:"排水系数（0 = 进水口堵塞）",en:"Drain factor (0 = intake blocked)"},drainBlocked:{zh:"排水口堵塞",en:"Drain intake blocked"},hintDraw:{zh:"在地图上单击放置节点，双击或点“完成绘制”结束。",en:"Click on the map to place vertices; double-click or press Finish to end."},hintPoint:{zh:"在地图上单击放置。",en:"Click on the map to place."},metrics:{zh:"影响指标",en:"Impact metrics"},maxDepth:{zh:"最大水深",en:"Max depth"},floodedArea:{zh:"淹没面积 (>15 cm)",en:"Flooded area (>15 cm)"},severeArea:{zh:"严重淹没 (>50 cm)",en:"Severe (>50 cm)"},bldAffected:{zh:"受影响建筑",en:"Buildings affected"},volume:{zh:"陆上水量",en:"Water on land"},baseline:{zh:"无措施基线",en:"Baseline (no measures)"},withMeasures:{zh:"含措施",en:"With measures"},tideChart:{zh:"潮位：实测 vs 天文潮 vs 模型边界",en:"Sea level: observed vs astronomical vs model boundary"},rainChart:{zh:"雨量过程线 (mm/h)",en:"Rainfall hyetograph (mm/h)"},validation:{zh:"实际水浸记录 vs 模拟最大水深",en:"Reported flooding vs simulated max depth"},place:{zh:"地点",en:"Location"},observed:{zh:"实测/报道",en:"Reported"},simulated:{zh:"模拟",en:"Simulated"},score:{zh:"命中率",en:"Hit rate"},noVal:{zh:"该场景在此事件中没有可核对的水浸记录。",en:"No validation records for this scene/event."},play:{zh:"播放",en:"Play"},pause:{zh:"暂停",en:"Pause"},depth:{zh:"水深",en:"Depth"},sources:{zh:"数据来源",en:"Sources"},modelNote:{zh:"模型：GPU 二维浅水方程（局部惯性格式，LISFLOOD-FP 同类），网格",en:"Model: GPU 2-D shallow water (local-inertial, LISFLOOD-FP class), grid"},fictional:{zh:"虚构情景",en:"Fictional"},typhoon:{zh:"台风风暴潮",en:"Typhoon surge"},rainstorm:{zh:"暴雨",en:"Rainstorm"},peakObs:{zh:"实测峰值",en:"Observed peak"},peakModel:{zh:"模型边界峰值",en:"Model boundary peak"},tourRunning:{zh:"飞览中… 拖动鼠标可退出",en:"Touring… drag to exit"},loading:{zh:"正在加载场景数据…",en:"Loading scene data…"},ffwd:{zh:"快进计算中",en:"Fast-forwarding"},realtime:{zh:"倍速",en:"×"},costNote:{zh:"粗略造价",en:"Rough cost"},gaugeNow:{zh:"当前边界潮位",en:"Boundary sea level"},rainNow:{zh:"当前雨强",en:"Rain rate"},flowParticles:{zh:"流向：粒子",en:"Flow: particles"},flowArrows:{zh:"流向：箭头",en:"Flow: arrows"},flowNone:{zh:"流向：关",en:"Flow: off"},peak:{zh:"跳到峰值",en:"Jump to peak"},hotspots:{zh:"最严重水浸点（模拟最大水深，街道格）",en:"Worst flooded spots (simulated max depth, streets)"},flyTo:{zh:"飞到",en:"Fly"},swipeLeft:{zh:"◀ 无措施 · 基线",en:"◀ Baseline (no measures)"},swipeRight:{zh:"含措施 ▶",en:"With measures ▶"},noHot:{zh:"尚无 ≥ 0.3 m 的街道积水",en:"No street flooding ≥ 0.3 m yet"},facilities:{zh:"重点设施影响（60 m 内街道最大水深）",en:"Key facilities (max street depth within 60 m)"},facility:{zh:"设施",en:"Facility"},unaffected:{zh:"未受影响",en:"unaffected"},showFac:{zh:"标出受影响的重点设施（医院、港铁站、学校、安老院、停车场…）",en:"Mark affected key facilities (hospitals, MTR, schools, elderly homes, car parks…)"},ft_hospital:{zh:"医院",en:"Hospital"},ft_mtr:{zh:"港铁站",en:"MTR station"},ft_ferry:{zh:"码头",en:"Ferry pier"},ft_bus:{zh:"巴士总站",en:"Bus terminus"},ft_carpark:{zh:"停车场",en:"Car park"},ft_power:{zh:"变电站",en:"Substation"},ft_school:{zh:"学校",en:"School"},ft_elderly:{zh:"安老院",en:"Elderly home"},ft_mall:{zh:"商场",en:"Shopping mall"},ft_fire:{zh:"消防局",en:"Fire station"},ft_police:{zh:"警署",en:"Police station"},ft_community:{zh:"社区中心",en:"Community centre"},ft_water:{zh:"水务设施",en:"Water works"},ft_underground:{zh:"地下空间（估计）",en:"Underground space (estimate)"},swipeHint:{zh:"A/B 分屏：拖动中间的把手，左边是无措施基线，右边是含措施",en:"Swipe view: drag the handle; baseline on the left, measures on the right"},sceneLbl:{zh:"场景",en:"Scene"},eventLbl:{zh:"事件",en:"Event"},places:{zh:"地点",en:"Places"},layers:{zh:"图层",en:"Layers"},grpCoast:{zh:"海岸边界",en:"Coastal boundary"},grpRain:{zh:"降雨与排水",en:"Rain & drainage"},grpModel:{zh:"模型设置",en:"Model"},showMax:{zh:"在地面上显示最大淹没范围",en:"Show max-depth footprint on terrain"},forcing:{zh:"外部驱动",en:"Forcing"},more:{zh:"展开",en:"More"},less:{zh:"收起",en:"Less"},hit:{zh:"命中",en:"Hit"},miss:{zh:"偏差",en:"Miss"},hitRule:{zh:"±0.35 m 或 ±50% 视为命中；取地点 60 m 内街道格的最大水深。报道位置是近似的，结果仅供参考。",en:"Hit if within ±0.35 m or ±50%; max depth over street cells within 60 m. Reported locations are approximate; indicative only."},c_sea:{zh:"潮位",en:"Sea"},c_rain:{zh:"雨强",en:"Rain"},perSec:{zh:"每秒模拟",en:"Sim per second"},running:{zh:"运行中",en:"Running"},paused:{zh:"已暂停",en:"Paused"},lg_val:{zh:"水浸记录",en:"Reported flooding"},lg_gauge:{zh:"潮位站",en:"Tide gauge"},lg_fac:{zh:"受影响设施",en:"Affected facility"},vsBase:{zh:"差值 = 含措施 − 基线；绿色为改善",en:"Delta = with measures − baseline; green is better"},splitNote:{zh:"分屏：左 A = 无措施基线，右 B = 含措施（拖动画面中央把手）",en:"Split view: left A = baseline, right B = with measures (drag the handle)"},ofFlooded:{zh:"占淹没面积",en:"of flooded area"},bldRule:{zh:"周边最大水深 > 0.15 m",en:"max depth nearby > 0.15 m"},scrubHint:{zh:"点击或拖动跳转；← → 键逐步",en:"Click or drag to seek; arrow keys step"},noMetrics:{zh:"模拟开始后显示",en:"Shown once the run starts"},waterNow:{zh:"当前水深",en:"Depth now"},waterMax:{zh:"最大水深",en:"Max depth"},legendNow:{zh:"水深 · 当前",en:"Water depth · now"},legendMax:{zh:"最大水深 · 整个事件",en:"Max depth · whole event"},waterMaxHint:{zh:"显示到目前为止每格达到过的最大水深（跑完整个事件即为全事件最大）",en:"Highest depth each cell has reached so far (the whole-event maximum once the run is complete)"},lg_rise:{zh:"上涨前缘",en:"Rising edge"},lg_trace:{zh:"退水痕迹",en:"Dried after flooding"},lg_edge:{zh:"湿区边界",en:"Wet / dry edge"},camBird:{zh:"鸟瞰（全场景）",en:"Bird's-eye (whole scene)"},camStreet:{zh:"街景视角（最严重水浸点）",en:"Street view (worst spot)"},camFollow:{zh:"跟随最严重水浸点",en:"Follow the worst spot"},exag:{zh:"竖向夸张（地形、建筑、水体）",en:"Vertical exaggeration (terrain, buildings, water)"},landmarks:{zh:"地标（地点、港铁站、医院、商场、码头）",en:"Landmarks (places, MTR, hospitals, malls, piers)"},shadows:{zh:"日照阴影（建筑与地形）",en:"Sun shadows (buildings and terrain)"},trendUp:{zh:"水量上涨",en:"Rising"},trendDown:{zh:"水量消退",en:"Receding"},trendFlat:{zh:"水量平稳",en:"Steady"},trendTip:{zh:"陆上水量的变化速率（街道与空地格）",en:"Rate of change of water on land (street and open cells)"},pins:{zh:"钉点时间序列",en:"Pinned points"},pin:{zh:"钉点",en:"Pin"},pinHint:{zh:"在地图上点一下放置钉点（Esc 取消）；放下后会从头重跑以补齐整条曲线",en:"Click the map to drop a pin (Esc cancels); the run restarts from the beginning to fill its whole curve"},pinEmpty:{zh:"在地图上任意位置放一个钉点，看它在整个事件里的水深变化，并与潮位、雨量对照。",en:"Drop a pin anywhere on the map to follow its water depth through the event, against sea level and rainfall."},pinAdd:{zh:"放置钉点",en:"Drop a pin"},exportCsv:{zh:"导出 CSV",en:"Export CSV"},pinNow:{zh:"当前",en:"now"},pinMax:{zh:"最大",en:"max"},pinDepth:{zh:"水深 (m)",en:"Depth (m)"},pinRerun:{zh:"放针后从头重跑补齐曲线；参数或措施改变时曲线随之重算",en:"Dropping a pin re-runs from the start to fill the curve; changing parameters or measures recomputes it"},under:{zh:"偏低",en:"Under"},over:{zh:"偏高",en:"Over"},unrep:{zh:"数据层无法表达",en:"Not in data"},valHead:{zh:"报道深度不是实测：B = 有物理参照 ±0.3 m，C = 按「水浸 / 严重水浸」等级填数 ±50%，D = 推估。模拟值取地点 60 m 内街道格的最大水深；地库点取地库水深（流入体积 ÷ 楼面面积）。点一行看依据与模型备注。",en:"Reported depths are not measurements: B = physical reference ±0.3 m, C = filled from a severity class ±50%, D = inferred. Simulated = max depth over street cells within 60 m; basement points use the basement depth (inflow volume ÷ floor area). Click a row for the basis and model notes."},basis:{zh:"依据",en:"Basis"},modelNotes:{zh:"模型备注",en:"Model note"},source:{zh:"出处",en:"Source"},sampling:{zh:"取样",en:"Sampling"},ugDepth:{zh:"地库水深（流入体积 ÷ 楼面面积）",en:"Basement depth (inflow volume ÷ floor area)"},streetDepth:{zh:"60 m 内街道格最大水深",en:"max street depth within 60 m"},snapped:{zh:"取样点已吸附到 {d} m 外的最低街道格",en:"sample point snapped {d} m to the lowest street cell"},bermNote:{zh:"报道位置是 {z} mPD 的河畔阶地，地形数据里没有这一层",en:"reported at a {z} mPD riverside berm that the terrain data does not contain"},gradeB:{zh:"B：有物理参照",en:"B: physical reference"},gradeC:{zh:"C：等级描述",en:"C: severity class"},gradeD:{zh:"D：推估",en:"D: inferred"},estimated:{zh:"推估",en:"est."}};let Ol="zh";function _b(n){Ol=n}function er(){return Ol}function k(n){const e=vb[n];return e?e[Ol]:n}function fe(n,e){return Ol==="zh"?n:e}var to,Jt,Wc,Bf,Ml=0,Wm=[],sn=Rt,Hf=sn.__b,Vf=sn.__r,Gf=sn.diffed,Wf=sn.__c,$f=sn.unmount,Xf=sn.__;function Lu(n,e){sn.__h&&sn.__h(Jt,n,Ml||e),Ml=0;var t=Jt.__H||(Jt.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function ao(n){return Ml=1,xb(Xm,n)}function xb(n,e,t){var i=Lu(to++,2);if(i.t=n,!i.__c&&(i.__=[Xm(void 0,e),function(o){var l=i.__N?i.__N[0]:i.__[0],c=i.t(l,o);l!==c&&(i.__N=[c,i.__[1]],i.__c.setState({}))}],i.__c=Jt,!Jt.__f)){var s=function(o,l,c){if(!i.__c.__H)return!0;var u=!1,d=i.__c.props!==o;if(i.__c.__H.__.some(function(f){if(f.__N){u=!0;var g=f.__[0];f.__=f.__N,f.__N=void 0,g!==f.__[0]&&(d=!0)}}),r){var h=r.call(this,o,l,c);return u?h||d:h}return!u||d};Jt.__f=!0;var r=Jt.shouldComponentUpdate,a=Jt.componentWillUpdate;Jt.componentWillUpdate=function(o,l,c){if(this.__e){var u=r;r=void 0,s(o,l,c),r=u}a&&a.call(this,o,l,c)},Jt.shouldComponentUpdate=s}return i.__N||i.__}function Xr(n,e){var t=Lu(to++,3);!sn.__s&&$m(t.__H,e)&&(t.__=n,t.u=e,Jt.__H.__h.push(t))}function Ji(n){return Ml=5,Iu(function(){return{current:n}},[])}function Iu(n,e){var t=Lu(to++,7);return $m(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function Mb(){for(var n;n=Wm.shift();){var e=n.__H;if(n.__P&&e)try{e.__h.some(rl),e.__h.some(Xh),e.__h=[]}catch(t){e.__h=[],sn.__e(t,n.__v)}}}sn.__b=function(n){Jt=null,Hf&&Hf(n)},sn.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Xf&&Xf(n,e)},sn.__r=function(n){Vf&&Vf(n),to=0;var e=(Jt=n.__c).__H;e&&(Wc===Jt?(e.__h=[],Jt.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(rl),e.__h.some(Xh),e.__h=[],to=0)),Wc=Jt},sn.diffed=function(n){Gf&&Gf(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Wm.push(e)!==1&&Bf===sn.requestAnimationFrame||((Bf=sn.requestAnimationFrame)||yb)(Mb)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),Wc=Jt=null},sn.__c=function(n,e){e.some(function(t){try{t.__h.some(rl),t.__h=t.__h.filter(function(i){return!i.__||Xh(i)})}catch(i){e.some(function(s){s.__h&&(s.__h=[])}),e=[],sn.__e(i,t.__v)}}),Wf&&Wf(n,e)},sn.unmount=function(n){$f&&$f(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.some(function(i){try{rl(i)}catch(s){e=s}}),t.__H=void 0,e&&sn.__e(e,t.__v))};var qf=typeof requestAnimationFrame=="function";function yb(n){var e,t=function(){clearTimeout(i),qf&&cancelAnimationFrame(e),setTimeout(n)},i=setTimeout(t,35);qf&&(e=requestAnimationFrame(t))}function rl(n){var e=Jt,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),Jt=e}function Xh(n){var e=Jt;n.__c=n.__(),Jt=e}function $m(n,e){return!n||n.length!==e.length||e.some(function(t,i){return t!==n[i]})}function Xm(n,e){return typeof e=="function"?e(n):e}var Sb=Symbol.for("preact-signals");function Uu(){if(qs>1)qs--;else{var n,e=!1;for(function(){var s=Sl;for(Sl=void 0;s!==void 0;){var r=s.S;if(r.v===s.v)for(var a=r.t;a!==void 0;a=a.x)a.i===s.i&&(a.i=r.i);s=s.o}}();$a!==void 0;){var t=$a;for($a=void 0,yl++;t!==void 0;){var i=t.u;if(t.u=void 0,t.f&=-3,!(8&t.f)&&Ym(t))try{t.c()}catch(s){e||(n=s,e=!0)}t=i}}if(yl=0,qs--,e)throw n}}var Wa,Gt=void 0;function kl(n){var e=Gt,t=Wa;Gt=void 0,Wa=void 0;try{return n()}finally{Gt=e,Wa=t}}var $a=void 0,qs=0,yl=0,Yf=0,Sl=void 0,wl=0;function qm(n){if(Gt!==void 0){var e=n.n;if(e===void 0||e.t!==Gt)return e={i:0,S:n,p:Gt.s,n:void 0,t:Gt,e:void 0,x:void 0,r:e},Gt.s!==void 0&&(Gt.s.n=e),Gt.s=e,n.n=e,32&Gt.f&&n.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=Gt.s,e.n=void 0,Gt.s.n=e,Gt.s=e),e}}function Cn(n,e){this.v=n,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=e?.watched,this.Z=e?.unwatched,this.name=e?.name}Cn.prototype.brand=Sb;Cn.prototype.h=function(){return!0};Cn.prototype.S=function(n){var e=this,t=this.t;t!==n&&n.e===void 0&&(n.x=t,this.t=n,t!==void 0?t.e=n:kl(function(){var i;(i=e.W)==null||i.call(e)}))};Cn.prototype.U=function(n){var e=this;if(this.t!==void 0){var t=n.e,i=n.x;t!==void 0&&(t.x=i,n.e=void 0),i!==void 0&&(i.e=t,n.x=void 0),n===this.t&&(this.t=i,i===void 0&&kl(function(){var s;(s=e.Z)==null||s.call(e)}))}};Cn.prototype.subscribe=function(n){var e=this;return Fu(function(){var t=e.value;kl(function(){return n(t)})},{name:"sub"})};Cn.prototype.valueOf=function(){return this.value};Cn.prototype.toString=function(){return this.value+""};Cn.prototype.toJSON=function(){return this.value};Cn.prototype.peek=function(){var n=this;return kl(function(){return n.value})};Object.defineProperty(Cn.prototype,"value",{get:function(){var n=qm(this);return n!==void 0&&(n.i=this.i),this.v},set:function(n){if(n!==this.v){if(yl>100)throw new Error("Cycle detected");(function(t){qs!==0&&yl===0&&t.l!==Yf&&(t.l=Yf,Sl={S:t,v:t.v,i:t.i,o:Sl})})(this),this.v=n,this.i++,wl++,qs++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Uu()}}}});function Ze(n,e){return new Cn(n,e)}function Ym(n){for(var e=n.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function jm(n){for(var e=n.s;e!==void 0;e=e.n){var t=e.S.n;if(t!==void 0&&(e.r=t),e.S.n=e,e.i=-1,e.n===void 0){n.s=e;break}}}function Km(n){for(var e=n.s,t=void 0;e!==void 0;){var i=e.p;e.i===-1?(e.S.U(e),i!==void 0&&(i.n=e.n),e.n!==void 0&&(e.n.p=i)):t=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=i}n.s=t}function sr(n,e){Cn.call(this,void 0,e),this.x=n,this.s=void 0,this.g=wl-1,this.f=4}sr.prototype=new Cn;sr.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===wl))return!0;if(this.g=wl,this.f|=1,this.i>0&&!Ym(this))return this.f&=-2,!0;var n=Gt;try{jm(this),Gt=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return Gt=n,Km(this),this.f&=-2,!0};sr.prototype.S=function(n){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}Cn.prototype.S.call(this,n)};sr.prototype.U=function(n){if(this.t!==void 0&&(Cn.prototype.U.call(this,n),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};sr.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var n=this.t;n!==void 0;n=n.x)n.t.N()}};Object.defineProperty(sr.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var n=qm(this);if(this.h(),n!==void 0&&(n.i=this.i),16&this.f)throw this.v;return this.v}});function wb(n,e){return new sr(n,e)}function Zm(n){var e=n.j;if(n.j=void 0,typeof e=="function"){qs++;var t=Gt;Gt=void 0;try{e()}catch(i){throw n.f&=-2,n.f|=8,Nu(n),i}finally{Gt=t,Uu()}}}function Nu(n){for(var e=n.s;e!==void 0;e=e.n)e.S.U(e);n.x=void 0,n.s=void 0,Zm(n)}function bb(n){if(Gt!==this)throw new Error("Out-of-order effect");Km(this),Gt=n,this.f&=-2;try{8&this.f&&Nu(this)}finally{Uu()}}function oa(n,e){this.x=n,this.j=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=e?.name,Wa&&Wa.push(this)}oa.prototype.c=function(){var n=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.j=e)}finally{n()}};oa.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Zm(this),jm(this),qs++;var n=Gt;return Gt=this,bb.bind(this,n)};oa.prototype.N=function(){2&this.f||(this.f|=2,this.u=$a,$a=this)};oa.prototype.d=function(){this.f|=8,1&this.f||Nu(this)};oa.prototype.dispose=function(){this.d()};function Fu(n,e){var t=new oa(n,e);try{t.c()}catch(s){throw t.d(),s}var i=t.d.bind(t);return i[Symbol.dispose]=i,i}var Xo;function la(n,e){Rt[n]=e.bind(null,Rt[n]||function(){})}function bl(n){if(Xo){var e=Xo;Xo=void 0,e()}Xo=n&&n.S()}function Jm(n){var e=this,t=n.data,i=Eb(t);i.value=t;var s=Iu(function(){for(var r=e.__v;r=r.__;)if(r.__c){r.__c.__$f|=4;break}return e.__$u.c=function(){var a,o=e.__$u.S(),l=s.value;o(),Lm(l)||((a=e.base)==null?void 0:a.nodeType)!==3?(e.__$f|=1,e.setState({})):e.base.data=l},wb(function(){var a=i.value.value;return a===0?0:a===!0?"":a||""})},[]);return s.value}Jm.displayName="_st";Object.defineProperties(Cn.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Jm},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});la("__b",function(n,e){if(typeof e.type=="string"){var t,i=e.props;for(var s in i)if(s!=="children"){var r=i[s];r instanceof Cn&&(t||(e.__np=t={}),t[s]=r,i[s]=r.peek())}}n(e)});la("__r",function(n,e){n(e),bl();var t,i=e.__c;i&&(i.__$f&=-2,(t=i.__$u)===void 0&&(i.__$u=t=function(s){var r;return Fu(function(){r=this}),r.c=function(){i.__$f|=1,i.setState({})},r}())),bl(t)});la("__e",function(n,e,t,i){bl(),n(e,t,i)});la("diffed",function(n,e){bl();var t;if(typeof e.type=="string"&&(t=e.__e)){var i=e.__np,s=e.props;if(i){var r=t.U;if(r)for(var a in r){var o=r[a];o!==void 0&&!(a in i)&&(o.d(),r[a]=void 0)}else t.U=r={};for(var l in i){var c=r[l],u=i[l];c===void 0?(c=Tb(t,l,u,s),r[l]=c):c.o(u,s)}}}n(e)});function Tb(n,e,t,i){var s=e in n&&n.ownerSVGElement===void 0,r=Ze(t);return{o:function(a,o){r.value=a,i=o},d:Fu(function(){var a=r.value.value;i[e]!==a&&(i[e]=a,s?n[e]=a:a?n.setAttribute(e,a):n.removeAttribute(e))})}}la("unmount",function(n,e){if(typeof e.type=="string"){var t=e.__e;if(t){var i=t.U;if(i){t.U=void 0;for(var s in i){var r=i[s];r&&r.d()}}}}else{var a=e.__c;if(a){var o=a.__$u;o&&(a.__$u=void 0,o.d())}}n(e)});la("__h",function(n,e,t,i){(i<3||i===9)&&(e.__$f|=2),n(e,t,i)});Ga.prototype.shouldComponentUpdate=function(n,e){if(this.__R)return!0;var t=this.__$u,i=t&&t.s!==void 0;for(var s in e)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(i||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(i||4&this.__$f)||3&this.__$f)return!0;for(var r in n)if(r!=="__source"&&n[r]!==this.props[r])return!0;for(var a in this.props)if(!(a in n))return!0;return!1};function Eb(n){return Iu(function(){return Ze(n)},[])}const jf=(n,e)=>{try{const t=localStorage.getItem(n);return t?JSON.parse(t):e}catch{return e}},zl=(n,e)=>{try{localStorage.setItem(n,JSON.stringify(e))}catch{}},Z={lang:Ze("zh"),scenes:Ze([]),sceneId:Ze(""),events:Ze([]),eventId:Ze(""),scene:Ze(null),event:Ze(null),params:Ze(null),leftTab:Ze(jf("hkfl.ui.left",window.innerWidth>=1440?"scenario":null)),rightTab:Ze(jf("hkfl.ui.right","overview")),panelsOff:Ze(!1),playing:Ze(!1),speed:Ze(900),time:Ze({label:"--",frac:0}),cond:Ze(null),status:Ze(null),loading:Ze({frac:.02,text:""}),timeline:Ze(null),compare:Ze(!1),flowMode:Ze("particles"),active:Ze({}),waterMode:Ze("now"),exag:Ze(1),texMode:Ze("imagery"),showMax:Ze(!1),showFac:Ze(!0),showLandmarks:Ze(!0),shadows:Ze(!0),probeOn:Ze(!0),metrics:Ze(null),baseMetrics:Ze(null),trend:Ze(null),hotspots:Ze([]),validation:Ze({points:[],m:null}),facilities:Ze({m:null,base:null}),charts:Ze(null),chartCursor:Ze(0),pins:Ze({list:[],t:[],sel:null,f:null}),probe:Ze(null),measures:Ze([]),selMeasure:Ze(null),dirty:Ze(!1),devSave:Ze(!1),draft:Ze({n:0,len:0}),tool:Ze(null),newRole:Ze("whatif"),snap:Ze(!0),measureParams:Ze({wall:{height:1.5,rate:0,capacity:0,factor:1,radius:0},sandbag:{height:.6,rate:0,capacity:0,factor:1,radius:0},pump:{height:0,rate:2,capacity:0,factor:1,radius:30},tank:{height:0,rate:0,capacity:3e4,factor:1,radius:80},drain:{height:0,rate:0,capacity:0,factor:2,radius:150}})},Ab=[60,300,900,1800,3600];var Cb=0;function v(n,e,t,i,s,r){e||(e={});var a,o,l=e;if("ref"in l)for(o in l={},e)o=="ref"?a=e[o]:l[o]=e[o];var c={type:n,props:l,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Cb,__i:-1,__u:0,__source:s,__self:r};if(typeof n=="function"&&(a=n.defaultProps))for(o in a)l[o]===void 0&&(l[o]=a[o]);return Rt.vnode&&Rt.vnode(c),c}let Be;function Rb(n){Be=n}const qh={play:'<path d="M7 4.5v15l12-7.5z" fill="currentColor" stroke="none"/>',pause:'<rect x="6" y="4.5" width="4" height="15" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="4.5" width="4" height="15" rx="1" fill="currentColor" stroke="none"/>',reset:'<path d="M3 12a9 9 0 1 0 2.6-6.4"/><path d="M3 4v5h5"/>',compare:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16"/>',orbit:'<path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 4v5h-5"/>',tour:'<path d="M4 7h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/><path d="m17 10 5-2v8l-5-2"/>',map:'<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',panels:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 4v16"/>',flow:'<path d="M3 8h9a3 3 0 1 0-3-3"/><path d="M3 12h13a3 3 0 1 1-3 3"/><path d="M3 16h6"/>',arrows:'<path d="M3 12h16"/><path d="m14 6 6 6-6 6"/>',peak:'<path d="m3 20 6-11 4 6 2-3 6 8z"/><path d="M13 4v3M10.5 5.5l1.5 1.5M15.5 5.5 14 7"/>',flyto:'<path d="m3 11 18-8-8 18-2-8z"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="m5 12 4 4L19 7"/>',wall:'<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 10h18M3 14h18M9 5v5M15 10v4M9 14v5"/>',sandbag:'<path d="M4 18h16"/><path d="M6 18a3 3 0 0 1 6 0M12 18a3 3 0 0 1 6 0M9 13a3 3 0 0 1 6 0"/>',pump:'<circle cx="12" cy="12" r="8"/><path d="M12 4v8l5.5 3"/>',tank:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',drain:'<path d="M7 3v6a5 5 0 0 0 10 0V3"/><path d="M12 14v7M8 21h8"/>',layers:'<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',wave:'<path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0 2 1.5 2 1.5"/><path d="M2 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',save:'<path d="M5 3h11l3 3v15H5z"/><path d="M8 3v6h8V3M8 21v-7h8v7"/>',download:'<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 19h16"/>',upload:'<path d="M12 15V3"/><path d="m7 8 5-5 5 5"/><path d="M4 19h16"/>',undo:'<path d="M4 10h11a5 5 0 0 1 0 10h-3"/><path d="m8 6-4 4 4 4"/>',lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',magnet:'<path d="M6 3v8a6 6 0 0 0 12 0V3"/><path d="M6 3h4v8H6M14 3h4v8h-4"/>',chev:'<path d="m6 9 6 6 6-6"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',flag:'<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',shield:'<path d="M12 21s7-3 7-9V5l-7-2-7 2v7c0 6 7 9 7 9z"/><path d="m9 12 2 2 4-4"/>',bird:'<path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"/><path d="m12 8 4 4-4 4-4-4z"/>',street:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',target:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',pin:'<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',up:'<path d="M12 19V5"/><path d="m6 11 6-6 6 6"/>',down:'<path d="M12 5v14"/><path d="m6 13 6 6 6-6"/>',inbox:'<path d="M3 13h5l1.5 3h5L16 13h5"/><path d="M5.5 5h13L21 13v6H3v-6z"/>',edit:'<path d="M4 20h4l10-10-4-4L4 16z"/><path d="m13 7 4 4"/>',hospital:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M12 8v6M9 11h6"/>',mtr:'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M9 21l1.5-3M15 21l-1.5-3"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/>',ferry:'<path d="M3 17c2 2 4 2 6 0s4 2 6 0 4 2 6 0"/><path d="M5 14 4 9h16l-1 5"/><path d="M9 9V5h6v4"/>',bus:'<rect x="4" y="4" width="16" height="13" rx="2"/><path d="M4 11h16M8 20v-3M16 20v-3"/><circle cx="8" cy="14" r="1"/><circle cx="16" cy="14" r="1"/>',carpark:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 16V8h3.5a2.5 2.5 0 0 1 0 5H9"/>',power:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',school:'<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 9v6"/>',elderly:'<circle cx="12" cy="7" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/>',mall:'<path d="M6 7h12l1 14H5z"/><path d="M9 7a3 3 0 0 1 6 0"/>',fire:'<path d="M12 22c4 0 7-3 7-7 0-3-2-5-3-7-1 2-2 3-3 3 0-3-1-6-4-8 0 4-4 6-4 12a7 7 0 0 0 7 7z"/>',police:'<path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10z"/>',community:'<path d="M3 21h18M5 21V10M19 21V10M9 21v-6h6v6M2 10l10-6 10 6z"/>',water:'<path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z"/>'},Kf=qh;function Qm(n,e=16,t=""){const i=qh[n]??qh.info;return`<svg class="ic ${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>`}const Zf=[.1,.3,.5,1,2],Pb=[.05,.2,.4,.75,1.5,2.6],Ou=()=>er()==="zh"?["浅","踝","膝","腰","胸","一层"]:["shallow","ankle","knee","waist","chest","floor"],eg=n=>{let e=0;for(;e<Zf.length&&n>=Zf[e];)e++;return e},Bl=ob,Tl=n=>{const e=/^(.*?)\s*[（(]([^（）()]*)[）)]\s*$/.exec(n);return e&&e[1]?[e[1],e[2]]:[n,""]},Db=n=>{const e=n.search(/[：:]/);return e>0?[n.slice(0,e),n.slice(e+1).trim()]:[n,""]},tg=n=>/black/i.test(n)?"black":/red|no\. ?(9|10)\b|signal no\. ?(9|10)|hurricane/i.test(n)?"red":/amber|no\. ?[678]\b|signal no\. ?[678]/i.test(n)?"amber":"",Xa=n=>`#${n.toString(16).padStart(6,"0")}`,El=Object.fromEntries(["hospital","mtr","ferry","bus","carpark","power","school","elderly","mall","fire","police","community","water"].map(n=>[n,Qm(n,14)]));El.underground=Qm("carpark",14);function Qe({name:n,size:e=16,cls:t=""}){return v("svg",{class:`ic ${t}`,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:Kf[n]??Kf.info}})}function un({title:n,hint:e,n:t,children:i,id:s}){return v("section",{class:"blk",id:s,children:[v("div",{class:"blk-h",children:[v("span",{class:"micro",children:n}),v("span",{class:"hint",children:e??""}),t!==void 0&&v("span",{class:"n",children:t})]}),i]})}function ng({text:n}){const[e,t]=Tl(n);return v(pt,{children:[e,t&&v("small",{children:t})]})}function $s({id:n,label:e,checked:t,onChange:i}){return v("label",{class:"sw",for:n,children:[v("span",{children:v(ng,{text:e})}),v("input",{type:"checkbox",class:"switch",id:n,checked:t,onChange:s=>i(s.currentTarget.checked)})]})}function ig({id:n,label:e,value:t,min:i,max:s,step:r,fmt:a,onInput:o,onCommit:l,changed:c}){const u=(t-i)/(s-i)*100;return v("div",{class:"fr",children:[v("div",{class:"fr-top",children:[v("label",{for:n,children:v(ng,{text:e})}),v("span",{class:`val ${c?"changed":""}`,id:n.replace("sl_","sv_"),children:a(t)})]}),v("input",{type:"range",class:"range",id:n,min:i,max:s,step:r,value:t,style:{"--p":`${u}%`},onInput:d=>o(+d.currentTarget.value),onChange:d=>l?.(+d.currentTarget.value)})]})}function zr({items:n,value:e,onPick:t,cls:i="",id:s}){return v("div",{class:`seg ${i}`,id:s,role:"group",children:n.map(([r,a])=>v("button",{class:r===e?"on":"","aria-pressed":r===e,"data-v":String(r),onClick:()=>t(r),children:a},String(r)))})}function Lb({html:n,cls:e=""}){return v("span",{class:e,style:{display:"contents"},dangerouslySetInnerHTML:{__html:n}})}let Ca=null;const Yh=()=>(Ca||(Ca=document.createElement("div"),Ca.className="tip",document.body.appendChild(Ca)),Ca);function sg(){const[n,e]=ao(!1),t=Ji(null);return Xr(()=>{if(!n)return;const i=r=>{t.current&&!t.current.contains(r.target)&&e(!1)},s=r=>{r.key==="Escape"&&e(!1)};return document.addEventListener("pointerdown",i),document.addEventListener("keydown",s),()=>{document.removeEventListener("pointerdown",i),document.removeEventListener("keydown",s)}},[n]),{open:n,setOpen:e,ref:t}}const Ib=n=>n?`${n.start.replace("T"," ")} → ${n.end.slice(5).replace("T"," ")}`:"";function Ub(){const{open:n,setOpen:e,ref:t}=sg(),i=Z.scenes.value,s=i.find(r=>r.id===Z.sceneId.value);return v("div",{class:"pk-wrap",ref:t,children:[v("button",{class:`picker ${n?"open":""}`,id:"scenePicker","aria-haspopup":"listbox","aria-expanded":n,onClick:()=>e(!n),children:[v("span",{class:"pk-txt",children:[v("span",{class:"pk-lab",children:k("sceneLbl")}),v("span",{class:"pk-val",children:s?fe(s.name_zh,s.name_en):"—"})]}),v(Qe,{name:"chev",size:14,cls:"chev"})]}),n&&v("div",{class:"popover",role:"listbox",style:{width:"440px"},children:i.map(r=>v("button",{class:`opt ${r.id===Z.sceneId.value?"on":""}`,role:"option","aria-selected":r.id===Z.sceneId.value,onClick:()=>{e(!1),r.id!==Z.sceneId.value&&Be.onSceneChange(r.id)},children:[v("span",{class:"thumb",style:{backgroundImage:`url(scenes/${r.id}/preview.jpg)`}}),v("span",{children:[v("div",{class:"o-t",children:fe(r.name_zh,r.name_en)}),v("div",{class:"o-d",children:fe(r.blurb_zh,r.blurb_en)}),v("div",{class:"o-m",children:[r.cols,"×",r.rows," · ",r.res," m ",fe("网格","grid")]})]})]},r.id))})]})}function Nb(){const{open:n,setOpen:e,ref:t}=sg(),i=Z.events.value,s=i.find(r=>r.id===Z.eventId.value);return v("div",{class:"pk-wrap",ref:t,children:[v("button",{class:`picker ${n?"open":""}`,id:"eventPicker","aria-haspopup":"listbox","aria-expanded":n,onClick:()=>e(!n),children:[v("span",{class:"pk-txt",children:[v("span",{class:"pk-lab",children:[k("eventLbl"),s&&v("span",{class:`kind ${s.kind}`,children:k(s.kind)})]}),v("span",{class:"pk-val",children:s?fe(s.name_zh,s.name_en):"—"})]}),v(Qe,{name:"chev",size:14,cls:"chev"})]}),n&&v("div",{class:"popover",role:"listbox",style:{width:"400px"},children:i.map(r=>v("button",{class:`opt ${r.id===Z.eventId.value?"on":""}`,role:"option","aria-selected":r.id===Z.eventId.value,onClick:()=>{e(!1),r.id!==Z.eventId.value&&Be.onEventChange(r.id)},children:[v("span",{class:`k-dot ${r.kind}`,children:v(Qe,{name:r.kind==="rainstorm"?"water":r.kind==="fictional"?"flag":"wave",size:17})}),v("span",{children:[v("div",{class:"o-t",children:fe(r.name_zh,r.name_en)}),v("div",{class:"o-m",children:[k(r.kind)," · ",Ib(r.window)]})]})]},r.id))})]})}function Fb(){const n=Z.active.value,e=Z.flowMode.value,t=e==="particles"?"flowParticles":e==="arrows"?"flowArrows":"flowNone";return v("header",{class:"topbar float",children:[v("div",{class:"brand",children:[v("span",{class:"mark",children:v("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","aria-hidden":"true",children:[v("path",{d:"M3 10c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"}),v("path",{d:"M3 16c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"})]})}),v("div",{children:[v("div",{class:"nm",children:"HK Flood Lab"}),v("div",{class:"sub",children:fe("香港洪涝实验室 · 数字孪生","Flood digital twin · HK")})]})]}),v("span",{class:"vsep"}),v(Ub,{}),v("span",{class:"crumb-sep",children:"/"}),v(Nb,{}),v("span",{class:"grow"}),v("div",{class:"tb-group",children:[v(zr,{id:"waterSeg",cls:"dark",items:[["now",k("waterNow")],["max",k("waterMax")]],value:Z.waterMode.value,onPick:i=>Be.onWaterMode(i)}),v("button",{id:"btnPeak",class:"btn lbl-hide","data-tip":fe("跳到峰值时刻并飞到最严重水浸点","Jump to the peak and fly to the worst spot"),"data-tip-pos":"bottom",onClick:()=>Be.onPeak(),children:[v(Qe,{name:"peak"}),v("span",{children:k("peak")})]})]}),v("span",{class:"vsep"}),v("div",{class:"tb-group",children:[v("button",{id:"btnPin",class:`btn lbl-hide ${n.btnPin?"on":""}`,"data-tip":k("pinHint"),"data-tip-pos":"bottom",onClick:()=>Be.onPinMode(),children:[v(Qe,{name:"pin"}),v("span",{children:k("pin")})]}),v("button",{id:"btnFlow",class:`btn lbl-hide ${e!=="none"?"on":""}`,"data-tip":`${k(t)} · ${fe("点击切换","click to cycle")}`,"data-tip-pos":"bottom",onClick:()=>Be.onFlowMode(),children:[v(Qe,{name:e==="arrows"?"arrows":"flow"}),v("span",{children:k(t)})]}),v("button",{id:"btnCompare",class:`btn lbl-hide ${Z.compare.value?"on":""}`,"data-tip":fe("与无措施基线分屏对比（拖动把手）","Split view against the no-measures baseline"),"data-tip-pos":"bottom",onClick:()=>Be.onCompare(),children:[v(Qe,{name:"compare"}),v("span",{children:fe("A/B 对比","A/B compare")})]})]}),v("span",{class:"vsep"}),v("div",{class:"tb-group",children:[v("button",{id:"btnPanels",class:`btn icon ${Z.panelsOff.value,""}`,"data-tip":fe("显示/隐藏面板","Toggle panels"),"data-tip-pos":"bottom",onClick:()=>Be.onPanels(),children:v(Qe,{name:"panels"})}),v("button",{id:"btnLang",class:"btn","data-tip":er()==="zh"?"English":"中文","data-tip-pos":"bottom",onClick:()=>Be.onLang(),children:er()==="zh"?"EN":"中文"})]})]})}const rg={wall:"wall",sandbag:"sandbag",pump:"pump",tank:"tank",drain:"drain"},Ob=n=>n.name?er()==="en"&&n.name_en?n.name_en:n.name:n.kind==="wall"||n.kind==="sandbag"?`${k(n.kind)} ${n.height} m`:n.kind==="pump"?`${k("pump")} ${n.rate} m³/s`:n.kind==="tank"?`${k("tank")} ${n.capacity} m³`:(n.factor??2)<1?`${k("drainBlocked")} ×${n.factor}`:`${k("drainUp")} ×${n.factor}`;function kb(){const n=Z.tool.value,e=Z.measures.value,t=Z.selMeasure.value,i=[["wall",k("wall")],["sandbag",k("sandbag")],["pump",k("pump")],["tank",k("tank")],["drain",k("drainUp")]],s=[["whatif",k("role_whatif")],["record",k("role_record")],["temporary",k("role_temporary")]],r=e.filter(a=>(a.m.role??"whatif")==="whatif").reduce((a,o)=>a+o.cost,0);return v(pt,{children:[v("div",{class:"p-head",children:[v("div",{class:"grow",children:[v("div",{class:"p-t",children:k("measures")}),v("div",{class:"p-s",children:fe("画在地图上；情景措施不进入 A/B 基线","Draw on the map; what-if measures are left out of the A/B baseline")})]}),v("button",{class:"btn sm icon ghost",onClick:()=>{Z.leftTab.value=null},children:v(Qe,{name:"x",size:14})})]}),v("div",{class:"p-body",children:[v(un,{title:fe("绘制","Draw"),children:[v("div",{class:"tools",children:i.map(([a,o])=>v("button",{"data-tool":a,class:`tool ${n===a?"on":""}`,"aria-pressed":n===a,title:o,onClick:()=>Be.onMeasureTool(n===a?null:a),children:[v(Qe,{name:rg[a],size:18}),v("span",{children:o.split(" / ")[0]})]},a))}),v("div",{class:"row",children:[v("label",{for:"selRole",children:k("newRole")}),v("select",{id:"selRole",class:"select",style:{width:"auto",flex:1},value:Z.newRole.value,onChange:a=>{Z.newRole.value=a.currentTarget.value},children:s.map(([a,o])=>v("option",{value:a,children:o},a))})]}),n&&v(zb,{kind:n}),n&&v(Bb,{kind:n}),!n&&v("div",{class:"row",style:{justifyContent:"flex-end"},children:[v("button",{id:"btnSnap",class:`btn sm ${Z.snap.value?"on":""}`,title:k("snapShore"),onClick:()=>{Z.snap.value=!Z.snap.value,Be.onSnapToggle(Z.snap.value)},children:[v(Qe,{name:"magnet",size:13}),fe("吸附岸线","Snap")]}),v("button",{id:"btnClearM",class:"btn sm",title:k("clearNote"),onClick:()=>Be.onClearMeasures(),children:k("clear")})]})]}),v(un,{title:fe("措施列表","Measures"),n:e.length,children:[e.length?v("div",{class:"mlist",id:"measureList",children:e.map(a=>v(Vb,{it:a,sel:a.m.id===t},a.m.id))}):v("div",{class:"empty",children:[v(Qe,{name:"inbox",size:16}),v("span",{children:k("noMeasures")})]}),r>0&&v("div",{class:"total",children:[v("span",{children:k("costNote")}),v("b",{children:["HK$",(r/1e6).toFixed(1),"M"]})]})]}),v(un,{title:fe("文件","File"),children:v(Wb,{})})]})]})}function zb({kind:n}){const e=Z.measureParams.value[n],t=(s,r)=>{Z.measureParams.value={...Z.measureParams.value,[n]:{...e,[s]:r}},Be.onMeasureParam(n,s,r)},i=(s,r,a,o,l,c)=>v(ig,{id:`mp_${s}`,label:r,value:e[s],min:a,max:o,step:l,fmt:u=>`${u} ${c}`,onInput:u=>t(s,u)});return v("div",{style:{marginTop:"6px"},children:[(n==="wall"||n==="sandbag")&&i("height",k("wallHeight"),.3,4,.1,"m"),n==="pump"&&v(pt,{children:[i("rate",k("pumpRate"),.2,10,.2,"m³/s"),i("radius",fe("集水半径","Catch radius"),10,100,5,"m")]}),n==="tank"&&v(pt,{children:[i("capacity",k("tankCap"),2e3,15e4,1e3,"m³"),i("radius",fe("半径（单点放置时）","Radius (point mode)"),30,300,10,"m")]}),n==="drain"&&v(pt,{children:[i("factor",k("drainFactor"),0,6,.5,"×"),i("radius",fe("半径（单点放置时）","Radius (point mode)"),50,500,10,"m")]})]})}function Bb({kind:n}){const e=Z.draft.value,t=n==="pump"?k("hintPoint"):k("hintDraw")+(n==="tank"||n==="drain"?fe(" 单击一次即为圆形区域。"," A single click places a circular area."):""),i=e.n?` ${fe(`已放 ${e.n} 个点`,`${e.n} vertices`)}${e.len?` · ${e.len.toFixed(0)} m`:""}`:"",s=Z.snap.value&&(n==="wall"||n==="sandbag")?` ${k("snapOn")}`:"";return v(pt,{children:[v("div",{class:"draw-hint",id:"measureHint",children:[v(Qe,{name:"info",size:13}),v("span",{children:t+i+s})]}),v("div",{class:"drawbar",children:[v("button",{id:"btnFinish",class:"btn sm primary",onClick:()=>Be.onFinishDraft(),children:[v(Qe,{name:"check",size:13}),k("finish")]}),v("button",{id:"btnUndoV",class:"btn sm icon",title:`${fe("撤销上一个点","Undo last vertex")} (Backspace)`,onClick:()=>Be.onUndoVertex(),children:v(Qe,{name:"undo",size:13})}),v("button",{id:"btnCancelDraft",class:"btn sm",onClick:()=>Be.onCancelDraft(),children:k("cancel")}),v("span",{class:"grow"}),v("button",{id:"btnSnap",class:"btn sm icon",style:{background:Z.snap.value?"var(--sig)":void 0},title:k("snapShore"),onClick:()=>{Z.snap.value=!Z.snap.value,Be.onSnapToggle(Z.snap.value)},children:v(Qe,{name:"magnet",size:13})})]})]})}function Hb(n){const e=n.m.role??"whatif";if(e==="whatif")return v("span",{class:"mst cost",children:["HK$",(n.cost/1e6).toFixed(1),"M"]});if(e==="record")return n.exists?v("span",{class:"mst on",children:[k("def_built"),n.m.in_dtm?"":` · ${k("def_raised")}`]}):v("span",{class:"mst",children:n.m.in_dtm?k("def_removed"):k("def_notyet")});const t=n.m.from_h!==void 0||n.m.to_h!==void 0?` ${n.m.from_h??""}h→${n.m.to_h??""}h`:"";return v("span",{class:`mst ${n.eff>0?"on":""}`,children:[n.eff>0?k("tmp_on"):k("tmp_off"),t]})}function Vb({it:n,sel:e}){const t=n.m,i=t.role??"whatif",s=n.eff===0&&!(i==="record"&&n.exists),r=()=>Be.onSelectMeasure(e?null:t.id);return v(pt,{children:[v("div",{class:`mrow ${e?"sel":""} ${s?"ghost":""}`,"data-sel":t.id,tabIndex:0,role:"button","aria-expanded":e,onClick:r,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&a.target===a.currentTarget&&(a.preventDefault(),a.stopPropagation(),r())},children:[v("span",{class:`m-ic ${t.kind}`,children:v(Qe,{name:rg[t.kind],size:15})}),v("span",{class:"m-main",children:[v("span",{class:"m-name",children:[v("span",{children:Ob(t)}),t.locked&&v("span",{title:k("fromPipeline"),children:v(Qe,{name:"lock",size:11})})]}),v("span",{class:"m-sub",children:[v("span",{class:`rchip ${i}`,children:k("role_"+i)}),Hb(n)]})]}),v("button",{class:"btn sm icon ghost m-del","data-rm":t.id,"aria-label":k("delete"),title:k("delete"),onClick:a=>{a.stopPropagation(),Be.onRemoveMeasure(t.id)},children:v(Qe,{name:"x",size:13})})]}),e&&v(Gb,{m:t},JSON.stringify(t))]})}function Gb({m:n}){const e=n.role??"whatif",t=o=>Be.onUpdateMeasure(n.id,o),i=o=>l=>{const c=l.currentTarget.value.trim();t({[o]:c===""?void 0:c})},s=o=>l=>{const c=l.currentTarget.value.trim();t({[o]:c===""?void 0:+c})},r=(o,l,c,u,d)=>v("label",{children:[l,v("span",{class:"inl",children:[v("input",{class:"input",type:"number","data-f":o,step:c,min:d,defaultValue:String(n[o]??""),onChange:s(o)})," ",u]})]}),a=(o,l,c="")=>v("label",{children:[l,v("input",{class:"input",type:"text","data-f":o,defaultValue:String(n[o]??""),placeholder:c,onChange:i(o)})]});return v("div",{class:"mform","data-form":n.id,onClick:o=>o.stopPropagation(),children:[a("name",k("f_name"),k("f_name_ph")),(n.kind==="wall"||n.kind==="sandbag")&&r("height",k("wallHeight"),.1,"m",0),n.kind==="pump"&&v(pt,{children:[r("rate",k("pumpRate"),.1,"m³/s",0),!n.cells?.length&&r("radius",fe("集水半径","Catch radius"),5,"m",5)]}),n.kind==="tank"&&v(pt,{children:[r("capacity",k("tankCap"),500,"m³",0),!(n.pts.length>=3||n.cells?.length)&&r("radius",fe("半径","Radius"),10,"m",10)]}),n.kind==="drain"&&v(pt,{children:[r("factor",k("drainFactor"),.5,"×",0),!(n.pts.length>=3||n.cells?.length)&&r("radius",fe("半径","Radius"),10,"m",10)]}),v("label",{children:[k("f_role"),v("select",{class:"select","data-f":"role",value:e,onChange:o=>{const l=o.currentTarget.value,c={role:l};l!=="whatif"&&!n.key&&(c.key=`${n.kind}_${Date.now().toString(36)}`),t(c)},children:["whatif","record","temporary"].map(o=>v("option",{value:o,children:k("role_"+o)},o))})]}),e==="record"&&v(pt,{children:[v("label",{children:[k("f_built"),v("input",{class:"input",type:"month","data-f":"built",defaultValue:n.built??"",onChange:i("built")})]}),v("label",{children:[k("f_removed"),v("input",{class:"input",type:"month","data-f":"removed",defaultValue:n.removed??"",onChange:i("removed")})]}),v("label",{class:"chk",children:[v("input",{type:"checkbox","data-f":"in_dtm",checked:!!n.in_dtm,onChange:o=>t({in_dtm:o.currentTarget.checked})})," ",k("f_in_dtm")]})]}),e==="temporary"&&v(pt,{children:[v("div",{class:"evs",children:[k("f_events"),Z.events.value.map(o=>v("label",{class:"chk",children:[v("input",{type:"checkbox","data-ev":o.id,checked:!n.events?.length||n.events.includes(o.id),onChange:l=>{const c=l.currentTarget.closest(".mform"),u=Array.from(c.querySelectorAll("[data-ev]")),d=u.filter(h=>h.checked).map(h=>h.dataset.ev);t({events:d.length===u.length?[]:d})}})," ",fe(o.name_zh,o.name_en)]},o.id))]}),v("label",{children:[k("f_window"),v("span",{class:"inl",children:[v("input",{class:"input",type:"number","data-f":"from_h",step:.5,defaultValue:n.from_h!==void 0?String(n.from_h):"",placeholder:"−∞",onChange:s("from_h")})," → ",v("input",{class:"input",type:"number","data-f":"to_h",step:.5,defaultValue:n.to_h!==void 0?String(n.to_h):"",placeholder:"+∞",onChange:s("to_h")})," h"]})]})]}),a("src",k("f_src"),k("f_src_ph")),v("label",{children:[k("f_note"),v("textarea",{class:"input","data-f":"note",rows:2,defaultValue:n.note??"",onChange:i("note")})]}),v("div",{class:"foot",children:[v("button",{class:"btn sm","data-fly":n.id,onClick:()=>{const o=n.pts[0];o&&Be.onFlyTo(o.x,o.y)},children:[v(Qe,{name:"flyto",size:12}),k("flyTo")]}),v("span",{class:"mono",children:[n.cells?.length?k("geomCells"):n.pts.length>1?fe(`${n.pts.length} 个顶点`,`${n.pts.length} vertices`):""," · ",k("f_key")," ",n.key??"—"]})]})]})}function Wb(){const n=Ji(null),e=Z.dirty.value,t=Z.devSave.value,i=Z.scene.value;return v(pt,{children:[v("div",{class:"files",id:"measureFiles",children:[v("button",{id:"btnSaveM",class:`btn sm ${e?"primary":""}`,onClick:()=>Be.onSaveMeasures(),children:[v(Qe,{name:"save",size:13}),k(t?"save":"download")]}),v("button",{id:"btnExportM",class:"btn sm icon","aria-label":k("exportNote"),title:k("exportNote"),onClick:()=>Be.onExportMeasures(),children:v(Qe,{name:"download",size:13})}),v("button",{id:"btnImportM",class:"btn sm icon","aria-label":k("importNote"),title:k("importNote"),onClick:()=>n.current?.click(),children:v(Qe,{name:"upload",size:13})}),v("span",{class:"grow"}),v("button",{id:"btnRevertM",class:"btn sm ghost",disabled:!e,onClick:()=>Be.onRevertMeasures(),children:k("revert")}),v("input",{ref:n,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:s=>{const r=s.currentTarget,a=r.files?.[0];a&&Be.onImportMeasures(a),r.value=""}})]}),v("p",{class:"caveat",children:[t?fe(`保存到 web/public/scenes/${i?.id}/measures.json（开发服务器写文件，提交即生效）`,`Saves web/public/scenes/${i?.id}/measures.json (the dev server writes the file; commit it)`):fe("生产版只能下载 JSON，放到 web/public/scenes/<场景>/measures.json","Production build downloads the JSON; put it at web/public/scenes/<scene>/measures.json"),e?fe("。有未保存的改动（已暂存在浏览器里）",". Unsaved edits (kept in this browser)"):""]})]})}const $b=[["scenario","book","scenario"],["params","sliders","params"],["layers","layers","layers"],["measures","wall","measures"]],Xb=n=>{Z.leftTab.value=Z.leftTab.value===n?null:n,zl("hkfl.ui.left",Z.leftTab.value)};function qb(){const n=Z.leftTab.value,e=Z.measures.value.length,t=i=>i==="scenario"?k("scenario"):i==="params"?fe("参数","Params"):i==="layers"?k("layers"):fe("措施","Measures");return v("div",{class:"dock",id:"left",children:[v("nav",{class:"rail float","aria-label":fe("工作区","Workspaces"),children:$b.map(([i,s])=>v("button",{"data-ltab":i,class:n===i?"on":"","aria-pressed":n===i,"data-tip":n===i?fe("收起","Collapse"):t(i),"data-tip-pos":"right",onClick:()=>Xb(i),children:[v(Qe,{name:s==="book"?"info":s,size:18}),v("span",{children:t(i)}),i==="measures"&&e>0&&v("span",{class:"badge",children:e})]},i))}),n&&v("div",{class:"lpanel float",children:[n==="scenario"&&v(Yb,{}),n==="params"&&v(jb,{}),n==="layers"&&v(Kb,{}),n==="measures"&&v(kb,{})]})]})}function no({title:n,sub:e}){return v("div",{class:"p-head",children:[v("div",{class:"grow",children:[v("div",{class:"p-t",children:n}),e&&v("div",{class:"p-s",children:e})]}),v("button",{class:"btn sm icon ghost","data-tip":fe("收起","Collapse"),"data-tip-pos":"left",onClick:()=>{Z.leftTab.value=null,zl("hkfl.ui.left",null)},children:v(Qe,{name:"x",size:14})})]})}function Yb(){const n=Z.event.value,e=Z.scene.value,[t,i]=ao(!1);if(!n||!e)return v(no,{title:k("scenario")});const s=fe(n.narrative_zh,n.narrative_en);return v(pt,{children:[v(no,{title:k("scenario"),sub:fe(e.name_zh,e.name_en)}),v("div",{class:"p-body",children:[v("section",{class:"blk",children:[v("div",{class:"ev-meta",children:[v("span",{class:`kind ${n.kind}`,children:k(n.kind)}),v("span",{class:"ev-when",children:[n.window.start.replace("T"," ")," → ",n.window.end.slice(5).replace("T"," ")," HKT"]})]}),v("h2",{class:"ev-title",children:fe(n.name_zh,n.name_en)}),v("p",{class:`ev-narr ${t?"":"clamp"}`,children:s}),s.length>90&&v("button",{class:"linkish",onClick:()=>i(!t),children:k(t?"less":"more")})]}),v(un,{title:fe("事件数据","Event record"),children:v("dl",{class:"facts",children:n.facts.map(([r,a],o)=>v(pt,{children:[v("dt",{children:r}),v("dd",{children:a})]},o))})}),v(un,{title:k("places"),n:e.pois.length,hint:fe("点击飞到","click to fly"),children:[v("p",{class:"ev-narr",style:{marginBottom:"10px"},children:fe(e.blurb_zh,e.blurb_en)}),v("div",{class:"chips",children:e.pois.map((r,a)=>v("button",{class:"chip","data-poi":a,onClick:()=>Be.onFlyTo(r.x,r.y),children:[v(Qe,{name:"flyto",size:12}),r.name]},a))})]}),v(un,{title:fe("模型与数据","Model & data"),children:v("div",{class:"credits",children:[k("modelNote")," ",e.cols,"×",e.rows," @ ",e.res," m · DEM: ",e.dem_stats?.source??"—",v("br",{}),e.textures?.attribution??"",v("br",{}),fe("建筑：Overture Maps / OpenStreetMap 贡献者","Buildings: Overture Maps / OpenStreetMap contributors")]})})]})]})}const Jf={surgeScale:1,slr:0,rainScale:1,drainMmPerHour:40};function jb(){const n=Z.params.value;if(!n)return v(no,{title:k("params")});const e=(s,r)=>{Z.params.value={...Z.params.value,[s]:r}},t=()=>Be.onParamChange({...Z.params.value}),i=(s,r,a,o,l,c)=>v(ig,{id:`sl_${s}`,label:r,value:n[s],min:a,max:o,step:l,fmt:c,onInput:u=>e(s,u),onCommit:t,changed:Jf[s]!==void 0&&Math.abs(n[s]-Jf[s])>1e-6});return v(pt,{children:[v(no,{title:k("params"),sub:fe("拖动后松开即从头重算","Release a slider to re-run from the start")}),v("div",{class:"p-body",children:[v(un,{title:k("grpCoast"),children:[i("surgeScale",k("surgeScale"),0,2,.05,s=>`×${s.toFixed(2)}`),i("waveSetup",k("waveSetup"),0,1.5,.05,s=>`+${s.toFixed(2)} m`),i("waveHs",k("waveHs"),0,5,.1,s=>`${s.toFixed(1)} m`),i("slr",k("slr"),0,1.5,.05,s=>`+${s.toFixed(2)} m`)]}),v(un,{title:k("grpRain"),children:[i("rainScale",k("rainScale"),0,2.5,.05,s=>`×${s.toFixed(2)}`),i("drainMmPerHour",k("drain"),0,120,5,s=>`${s.toFixed(0)} mm/h`)]}),v(un,{title:k("grpModel"),children:[v($s,{id:"chkBld",label:k("buildingsBlock"),checked:n.buildingsBlock,onChange:s=>{Z.params.value={...n,buildingsBlock:s},Be.onParamChange({...Z.params.value})}}),v($s,{id:"chkSg",label:k("subgrid"),checked:n.subgrid,onChange:s=>{Z.params.value={...n,subgrid:s},Be.onParamChange({...Z.params.value})}})]})]})]})}function Kb(){const n=Z.scene.value,e=Z.flowMode.value,t=Z.exag.value,i=r=>{for(let a=0;a<3&&Z.flowMode.value!==r;a++)Be.onFlowMode()},s=r=>{for(let a=0;a<4&&Z.exag.value!==r;a++)Be.onExag()};return v(pt,{children:[v(no,{title:k("layers"),sub:fe("水体、流向、标注与三维显示","Water, flow, labels and 3D")}),v("div",{class:"p-body",children:[v(un,{title:fe("水体","Water"),children:[v(zr,{cls:"full",items:[["now",k("waterNow")],["max",k("waterMax")]],value:Z.waterMode.value,onPick:r=>Be.onWaterMode(r)}),v("p",{class:"caveat",style:{marginTop:"8px"},children:[v(Qe,{name:"info",size:12}),v("span",{children:k("waterMaxHint")})]}),v($s,{id:"chkMax",label:k("showMax"),checked:Z.showMax.value,onChange:r=>{Z.showMax.value=r,Be.onShowMax(r)}}),v($s,{id:"chkProbe",label:fe("悬停读数（光标处水深）","Hover read-out (depth under the cursor)"),checked:Z.probeOn.value,onChange:r=>{Z.probeOn.value=r,Be.onProbe(r)}})]}),v(un,{title:fe("流向","Flow"),children:v(zr,{cls:"full",items:[["particles",fe("粒子","Particles")],["arrows",fe("箭头","Arrows")],["none",fe("关","Off")]],value:e,onPick:i})}),v(un,{title:fe("标注","Labels"),children:[n?.facilities?.length?v($s,{id:"chkFac",label:k("showFac"),checked:Z.showFac.value,onChange:r=>{Z.showFac.value=r,Be.onShowFacilities(r)}}):null,v($s,{id:"chkLm",label:k("landmarks"),checked:Z.showLandmarks.value,onChange:r=>{Z.showLandmarks.value=r,Be.onShowLandmarks(r)}})]}),v(un,{title:fe("三维","3D"),children:[v("div",{class:"row",children:[v("label",{children:fe("竖向夸张","Vertical exaggeration")}),v(zr,{items:[[1,"×1"],[1.5,"×1.5"],[2,"×2"],[3,"×3"]],value:t,onPick:s})]}),v("div",{class:"row",children:[v("label",{children:fe("底图","Basemap")}),v(zr,{items:[["imagery",fe("卫星影像","Imagery")],["basemap",fe("地图","Map")]],value:Z.texMode.value,onPick:r=>{r!==Z.texMode.value&&Be.onTexToggle()}})]}),v($s,{id:"chkSh",label:k("shadows"),checked:Z.shadows.value,onChange:r=>{Z.shadows.value=r,Be.onShadows(r)}})]})]})]})}const Zb=!0,pn="u-",Jb="uplot",Qb=pn+"hz",e1=pn+"vt",t1=pn+"title",n1=pn+"wrap",i1=pn+"under",s1=pn+"over",r1=pn+"axis",Xs=pn+"off",a1=pn+"select",o1=pn+"cursor-x",l1=pn+"cursor-y",c1=pn+"cursor-pt",h1=pn+"legend",u1=pn+"live",d1=pn+"inline",f1=pn+"series",p1=pn+"marker",Qf=pn+"label",m1=pn+"value",Na="width",Fa="height",Ra="top",ep="bottom",Lr="left",$c="right",ku="#000",tp=ku+"0",Xc="mousemove",np="mousedown",qc="mouseup",ip="mouseenter",sp="mouseleave",rp="dblclick",g1="resize",v1="scroll",ap="change",Al="dppxchange",zu="--",ca=typeof window<"u",jh=ca?document:null,qr=ca?window:null,_1=ca?navigator:null;let wt,qo;function Kh(){let n=devicePixelRatio;wt!=n&&(wt=n,qo&&Jh(ap,qo,Kh),qo=matchMedia(`(min-resolution: ${wt-.001}dppx) and (max-resolution: ${wt+.001}dppx)`),Ys(ap,qo,Kh),qr.dispatchEvent(new CustomEvent(Al)))}function ti(n,e){if(e!=null){let t=n.classList;!t.contains(e)&&t.add(e)}}function Zh(n,e){let t=n.classList;t.contains(e)&&t.remove(e)}function Bt(n,e,t){n.style[e]=t+"px"}function yi(n,e,t,i){let s=jh.createElement(n);return e!=null&&ti(s,e),t?.insertBefore(s,i),s}function ci(n,e){return yi("div",n,e)}const op=new WeakMap;function Li(n,e,t,i,s){let r="translate("+e+"px,"+t+"px)",a=op.get(n);r!=a&&(n.style.transform=r,op.set(n,r),e<0||t<0||e>i||t>s?ti(n,Xs):Zh(n,Xs))}const lp=new WeakMap;function cp(n,e,t){let i=e+t,s=lp.get(n);i!=s&&(lp.set(n,i),n.style.background=e,n.style.borderColor=t)}const hp=new WeakMap;function up(n,e,t,i){let s=e+""+t,r=hp.get(n);s!=r&&(hp.set(n,s),n.style.height=t+"px",n.style.width=e+"px",n.style.marginLeft=i?-e/2+"px":0,n.style.marginTop=i?-t/2+"px":0)}const Bu={passive:!0},x1={...Bu,capture:!0};function Ys(n,e,t,i){e.addEventListener(n,t,i?x1:Bu)}function Jh(n,e,t,i){e.removeEventListener(n,t,Bu)}ca&&Kh();function Si(n,e,t,i){let s;t=t||0,i=i||e.length-1;let r=i<=2147483647;for(;i-t>1;)s=r?t+i>>1:si((t+i)/2),e[s]<n?t=s:i=s;return n-e[t]<=e[i]-n?t:i}function ag(n){return(t,i,s)=>{let r=-1,a=-1;for(let o=i;o<=s;o++)if(n(t[o])){r=o;break}for(let o=s;o>=i;o--)if(n(t[o])){a=o;break}return[r,a]}}const og=n=>n!=null,lg=n=>n!=null&&n>0,Hl=ag(og),M1=ag(lg);function y1(n,e,t,i=0,s=!1){let r=s?M1:Hl,a=s?lg:og;[e,t]=r(n,e,t);let o=n[e],l=n[e];if(e>-1)if(i==1)o=n[e],l=n[t];else if(i==-1)o=n[t],l=n[e];else for(let c=e;c<=t;c++){let u=n[c];a(u)&&(u<o?o=u:u>l&&(l=u))}return[o??Ut,l??-Ut]}function Vl(n,e,t,i){let s=pp(n),r=pp(e);n==e&&(s==-1?(n*=t,e/=t):(n/=t,e*=t));let a=t==10?Qi:cg,o=s==1?si:di,l=r==1?di:si,c=o(a(hn(n))),u=l(a(hn(e))),d=ea(t,c),h=ea(t,u);return t==10&&(c<0&&(d=Nt(d,-c)),u<0&&(h=Nt(h,-u))),i||t==2?(n=d*s,e=h*r):(n=fg(n,d),e=Gl(e,h)),[n,e]}function Hu(n,e,t,i){let s=Vl(n,e,t,i);return n==0&&(s[0]=0),e==0&&(s[1]=0),s}const Vu=.1,dp={mode:3,pad:Vu},qa={pad:0,soft:null,mode:0},S1={min:qa,max:qa};function Cl(n,e,t,i){return Wl(t)?fp(n,e,t):(qa.pad=t,qa.soft=i?0:null,qa.mode=i?3:0,fp(n,e,S1))}function Mt(n,e){return n??e}function w1(n,e,t){for(e=Mt(e,0),t=Mt(t,n.length-1);e<=t;){if(n[e]!=null)return!0;e++}return!1}function fp(n,e,t){let i=t.min,s=t.max,r=Mt(i.pad,0),a=Mt(s.pad,0),o=Mt(i.hard,-Ut),l=Mt(s.hard,Ut),c=Mt(i.soft,Ut),u=Mt(s.soft,-Ut),d=Mt(i.mode,0),h=Mt(s.mode,0),f=e-n,g=Qi(f),_=Vn(hn(n),hn(e)),m=Qi(_),p=hn(m-g);(f<1e-24||p>10)&&(f=0,(n==0||e==0)&&(f=1e-24,d==2&&c!=Ut&&(r=0),h==2&&u!=-Ut&&(a=0)));let x=f||_||1e3,M=Qi(x),w=ea(10,si(M)),I=x*(f==0?n==0?.1:1:r),C=Nt(fg(n-I,w/10),24),P=n>=c&&(d==1||d==3&&C<=c||d==2&&C>=c)?c:Ut,U=Vn(o,C<P&&n>=P?P:Ti(P,C)),ne=x*(f==0?e==0?.1:1:a),S=Nt(Gl(e+ne,w/10),24),b=e<=u&&(h==1||h==3&&S>=u||h==2&&S<=u)?u:-Ut,H=Ti(l,S>b&&e<=b?b:Vn(b,S));return U==H&&U==0&&(H=100),[U,H]}const b1=new Intl.NumberFormat(ca?_1.language:"en-US"),Gu=n=>b1.format(n),ri=Math,al=ri.PI,hn=ri.abs,si=ri.floor,cn=ri.round,di=ri.ceil,Ti=ri.min,Vn=ri.max,ea=ri.pow,pp=ri.sign,Qi=ri.log10,cg=ri.log2,T1=(n,e=1)=>ri.sinh(n)*e,Yc=(n,e=1)=>ri.asinh(n/e),Ut=1/0;function mp(n){return(Qi((n^n>>31)-(n>>31))|0)+1}function Qh(n,e,t){return Ti(Vn(n,e),t)}function hg(n){return typeof n=="function"}function ft(n){return hg(n)?n:()=>n}const E1=()=>{},ug=n=>n,dg=(n,e)=>e,A1=n=>null,gp=n=>!0,vp=(n,e)=>n==e,C1=/\.\d*?(?=9{6,}|0{6,})/gm,tr=n=>{if(mg(n)||Es.has(n))return n;const e=`${n}`,t=e.match(C1);if(t==null)return n;let i=t[0].length-1;if(e.indexOf("e-")!=-1){let[s,r]=e.split("e");return+`${tr(s)}e${r}`}return Nt(n,i)};function Bs(n,e){return tr(Nt(tr(n/e))*e)}function Gl(n,e){return tr(di(tr(n/e))*e)}function fg(n,e){return tr(si(tr(n/e))*e)}function Nt(n,e=0){if(mg(n))return n;let t=10**e,i=n*t*(1+Number.EPSILON);return cn(i)/t}const Es=new Map;function pg(n){return((""+n).split(".")[1]||"").length}function io(n,e,t,i){let s=[],r=i.map(pg);for(let a=e;a<t;a++){let o=hn(a),l=Nt(ea(n,a),o);for(let c=0;c<i.length;c++){let u=n==10?+`${i[c]}e${a}`:i[c]*l,d=(a>=0?0:o)+(a>=r[c]?0:r[c]),h=n==10?u:Nt(u,d);s.push(h),Es.set(h,d)}}return s}const Ya={},Wu=[],ta=[null,null],xs=Array.isArray,mg=Number.isInteger,R1=n=>n===void 0;function _p(n){return typeof n=="string"}function Wl(n){let e=!1;if(n!=null){let t=n.constructor;e=t==null||t==Object}return e}function P1(n){return n!=null&&typeof n=="object"}const D1=Object.getPrototypeOf(Uint8Array),gg="__proto__";function na(n,e=Wl){let t;if(xs(n)){let i=n.find(s=>s!=null);if(xs(i)||e(i)){t=Array(n.length);for(let s=0;s<n.length;s++)t[s]=na(n[s],e)}else t=n.slice()}else if(n instanceof D1)t=n.slice();else if(e(n)){t={};for(let i in n)i!=gg&&(t[i]=na(n[i],e))}else t=n;return t}function rn(n){let e=arguments;for(let t=1;t<e.length;t++){let i=e[t];for(let s in i)s!=gg&&(Wl(n[s])?rn(n[s],na(i[s])):n[s]=na(i[s]))}return n}const L1=0,I1=1,U1=2;function N1(n,e,t){for(let i=0,s,r=-1;i<e.length;i++){let a=e[i];if(a>r){for(s=a-1;s>=0&&n[s]==null;)n[s--]=null;for(s=a+1;s<t&&n[s]==null;)n[r=s++]=null}}}function F1(n,e){if(z1(n)){let a=n[0].slice();for(let o=1;o<n.length;o++)a.push(...n[o].slice(1));return B1(a[0])||(a=k1(a)),a}let t=new Set;for(let a=0;a<n.length;a++){let l=n[a][0],c=l.length;for(let u=0;u<c;u++)t.add(l[u])}let i=[Array.from(t).sort((a,o)=>a-o)],s=i[0].length,r=new Map;for(let a=0;a<s;a++)r.set(i[0][a],a);for(let a=0;a<n.length;a++){let o=n[a],l=o[0];for(let c=1;c<o.length;c++){let u=o[c],d=Array(s).fill(void 0),h=e?e[a][c]:I1,f=[];for(let g=0;g<u.length;g++){let _=u[g],m=r.get(l[g]);_===null?h!=L1&&(d[m]=_,h==U1&&f.push(m)):d[m]=_}N1(d,f,s),i.push(d)}}return i}const O1=typeof queueMicrotask>"u"?n=>Promise.resolve().then(n):queueMicrotask;function k1(n){let e=n[0],t=e.length,i=Array(t);for(let r=0;r<i.length;r++)i[r]=r;i.sort((r,a)=>e[r]-e[a]);let s=[];for(let r=0;r<n.length;r++){let a=n[r],o=Array(t);for(let l=0;l<t;l++)o[l]=a[i[l]];s.push(o)}return s}function z1(n){let e=n[0][0],t=e.length;for(let i=1;i<n.length;i++){let s=n[i][0];if(s.length!=t)return!1;if(s!=e){for(let r=0;r<t;r++)if(s[r]!=e[r])return!1}}return!0}function B1(n,e=100){const t=n.length;if(t<=1)return!0;let i=0,s=t-1;for(;i<=s&&n[i]==null;)i++;for(;s>=i&&n[s]==null;)s--;if(s<=i)return!0;const r=Vn(1,si((s-i+1)/e));for(let a=n[i],o=i+r;o<=s;o+=r){const l=n[o];if(l!=null){if(l<=a)return!1;a=l}}return!0}const vg=["January","February","March","April","May","June","July","August","September","October","November","December"],_g=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function xg(n){return n.slice(0,3)}const H1=_g.map(xg),V1=vg.map(xg),G1={MMMM:vg,MMM:V1,WWWW:_g,WWW:H1};function Pa(n){return(n<10?"0":"")+n}function W1(n){return(n<10?"00":n<100?"0":"")+n}const $1={YYYY:n=>n.getFullYear(),YY:n=>(n.getFullYear()+"").slice(2),MMMM:(n,e)=>e.MMMM[n.getMonth()],MMM:(n,e)=>e.MMM[n.getMonth()],MM:n=>Pa(n.getMonth()+1),M:n=>n.getMonth()+1,DD:n=>Pa(n.getDate()),D:n=>n.getDate(),WWWW:(n,e)=>e.WWWW[n.getDay()],WWW:(n,e)=>e.WWW[n.getDay()],HH:n=>Pa(n.getHours()),H:n=>n.getHours(),h:n=>{let e=n.getHours();return e==0?12:e>12?e-12:e},AA:n=>n.getHours()>=12?"PM":"AM",aa:n=>n.getHours()>=12?"pm":"am",a:n=>n.getHours()>=12?"p":"a",mm:n=>Pa(n.getMinutes()),m:n=>n.getMinutes(),ss:n=>Pa(n.getSeconds()),s:n=>n.getSeconds(),fff:n=>W1(n.getMilliseconds())};function $u(n,e){e=e||G1;let t=[],i=/\{([a-z]+)\}|[^{]+/gi,s;for(;s=i.exec(n);)t.push(s[0][0]=="{"?$1[s[1]]:s[0]);return r=>{let a="";for(let o=0;o<t.length;o++)a+=typeof t[o]=="string"?t[o]:t[o](r,e);return a}}const X1=new Intl.DateTimeFormat().resolvedOptions().timeZone;function q1(n,e){let t;return e=="UTC"||e=="Etc/UTC"?t=new Date(+n+n.getTimezoneOffset()*6e4):e==X1?t=n:(t=new Date(n.toLocaleString("en-US",{timeZone:e})),t.setMilliseconds(n.getMilliseconds())),t}const Mg=n=>n%1==0,Rl=[1,2,2.5,5],Y1=io(10,-32,0,Rl),yg=io(10,0,32,Rl),j1=yg.filter(Mg),Hs=Y1.concat(yg),Xu=`
`,Sg="{YYYY}",xp=Xu+Sg,wg="{M}/{D}",Oa=Xu+wg,Yo=Oa+"/{YY}",bg="{aa}",K1="{h}:{mm}",Ur=K1+bg,Mp=Xu+Ur,yp=":{ss}",Tt=null;function Tg(n){let e=n*1e3,t=e*60,i=t*60,s=i*24,r=s*30,a=s*365,l=(n==1?io(10,0,3,Rl).filter(Mg):io(10,-3,0,Rl)).concat([e,e*5,e*10,e*15,e*30,t,t*5,t*10,t*15,t*30,i,i*2,i*3,i*4,i*6,i*8,i*12,s,s*2,s*3,s*4,s*5,s*6,s*7,s*8,s*9,s*10,s*15,r,r*2,r*3,r*4,r*6,a,a*2,a*5,a*10,a*25,a*50,a*100]);const c=[[a,Sg,Tt,Tt,Tt,Tt,Tt,Tt,1],[s*28,"{MMM}",xp,Tt,Tt,Tt,Tt,Tt,1],[s,wg,xp,Tt,Tt,Tt,Tt,Tt,1],[i,"{h}"+bg,Yo,Tt,Oa,Tt,Tt,Tt,1],[t,Ur,Yo,Tt,Oa,Tt,Tt,Tt,1],[e,yp,Yo+" "+Ur,Tt,Oa+" "+Ur,Tt,Mp,Tt,1],[n,yp+".{fff}",Yo+" "+Ur,Tt,Oa+" "+Ur,Tt,Mp,Tt,1]];function u(d){return(h,f,g,_,m,p)=>{let x=[],M=m>=a,w=m>=r&&m<a,I=d(g),C=Nt(I*n,3),P=jc(I.getFullYear(),M?0:I.getMonth(),w||M?1:I.getDate()),U=Nt(P*n,3);if(w||M){let ne=w?m/r:0,S=M?m/a:0,b=C==U?C:Nt(jc(P.getFullYear()+S,P.getMonth()+ne,1)*n,3),H=new Date(cn(b/n)),z=H.getFullYear(),X=H.getMonth();for(let j=0;b<=_;j++){let q=jc(z+S*j,X+ne*j,1),F=q-d(Nt(q*n,3));b=Nt((+q+F)*n,3),b<=_&&x.push(b)}}else{let ne=m>=s?s:m,S=si(g)-si(C),b=U+S+Gl(C-U,ne);x.push(b);let H=d(b),z=H.getHours()+H.getMinutes()/t+H.getSeconds()/i,X=m/i,j=h.axes[f]._space,q=p/j;for(;b=Nt(b+m,n==1?0:3),!(b>_);)if(X>1){let F=si(Nt(z+X,6))%24,ce=d(b).getHours()-F;ce>1&&(ce=-1),b-=ce*i,z=(z+X)%24;let ae=x[x.length-1];Nt((b-ae)/m,3)*q>=.7&&x.push(b)}else x.push(b)}return x}}return[l,c,u]}const[Z1,J1,Q1]=Tg(1),[eT,tT,nT]=Tg(.001);io(2,-53,53,[1]);function Sp(n,e){return n.map(t=>t.map((i,s)=>s==0||s==8||i==null?i:e(s==1||t[8]==0?i:t[1]+i)))}function wp(n,e){return(t,i,s,r,a)=>{let o=e.find(g=>a>=g[0])||e[e.length-1],l,c,u,d,h,f;return i.map(g=>{let _=n(g),m=_.getFullYear(),p=_.getMonth(),x=_.getDate(),M=_.getHours(),w=_.getMinutes(),I=_.getSeconds(),C=m!=l&&o[2]||p!=c&&o[3]||x!=u&&o[4]||M!=d&&o[5]||w!=h&&o[6]||I!=f&&o[7]||o[1];return l=m,c=p,u=x,d=M,h=w,f=I,C(_)})}}function iT(n,e){let t=$u(e);return(i,s,r,a,o)=>s.map(l=>t(n(l)))}function jc(n,e,t){return new Date(n,e,t)}function bp(n,e){return e(n)}const sT="{YYYY}-{MM}-{DD} {h}:{mm}{aa}";function Tp(n,e){return(t,i,s,r)=>r==null?zu:e(n(i))}function rT(n,e){let t=n.series[e];return t.width?t.stroke(n,e):t.points.width?t.points.stroke(n,e):null}function aT(n,e){return n.series[e].fill(n,e)}const oT={show:!0,live:!0,isolate:!1,mount:E1,markers:{show:!0,width:2,stroke:rT,fill:aT,dash:"solid"},idx:null,idxs:null,values:[]};function lT(n,e){let t=n.cursor.points,i=ci(),s=t.size(n,e);Bt(i,Na,s),Bt(i,Fa,s);let r=s/-2;Bt(i,"marginLeft",r),Bt(i,"marginTop",r);let a=t.width(n,e,s);return a&&Bt(i,"borderWidth",a),i}function cT(n,e){let t=n.series[e].points;return t._fill||t._stroke}function hT(n,e){let t=n.series[e].points;return t._stroke||t._fill}function uT(n,e){return n.series[e].points.size}const Kc=[0,0];function dT(n,e,t){return Kc[0]=e,Kc[1]=t,Kc}function jo(n,e,t,i=!0){return s=>{s.button==0&&(!i||s.target==e)&&t(s)}}function Zc(n,e,t,i=!0){return s=>{(!i||s.target==e)&&t(s)}}const fT={show:!0,x:!0,y:!0,lock:!1,move:dT,points:{one:!1,show:lT,size:uT,width:0,stroke:hT,fill:cT},bind:{mousedown:jo,mouseup:jo,click:jo,dblclick:jo,mousemove:Zc,mouseleave:Zc,mouseenter:Zc},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,click:(n,e)=>{e.stopPropagation(),e.stopImmediatePropagation()},_x:!1,_y:!1},focus:{dist:(n,e,t,i,s)=>i-s,prox:-1,bias:0},hover:{skip:[void 0],prox:null,bias:0},left:-10,top:-10,idx:null,dataIdx:null,idxs:null,event:null},Eg={show:!0,stroke:"rgba(0,0,0,0.07)",width:2},qu=rn({},Eg,{filter:dg}),Ag=rn({},qu,{size:10}),Cg=rn({},Eg,{show:!1}),Yu='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',Rg="bold "+Yu,Pg=1.5,Ep={show:!0,scale:"x",stroke:ku,space:50,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:Rg,side:2,grid:qu,ticks:Ag,border:Cg,font:Yu,lineGap:Pg,rotate:0},pT="Value",mT="Time",Ap={show:!0,scale:"x",auto:!1,sorted:1,min:Ut,max:-Ut,idxs:[]};function gT(n,e,t,i,s){return e.map(r=>r==null?"":Gu(r))}function vT(n,e,t,i,s,r,a){let o=[],l=Es.get(s)||0;t=a?t:Nt(Gl(t,s),l);for(let c=t;c<=i;c=Nt(c+s,l))o.push(Object.is(c,-0)?0:c);return o}function eu(n,e,t,i,s,r,a){const o=[],l=n.scales[n.axes[e].scale].log,c=l==10?Qi:cg,u=si(c(t));s=ea(l,u),l==10&&(s=Hs[Si(s,Hs)]);let d=t,h=s*l;l==10&&(h=Hs[Si(h,Hs)]);do o.push(d),d=d+s,l==10&&!Es.has(d)&&(d=Nt(d,Es.get(s))),d>=h&&(s=d,h=s*l,l==10&&(h=Hs[Si(h,Hs)]));while(d<=i);return o}function _T(n,e,t,i,s,r,a){let l=n.scales[n.axes[e].scale].asinh,c=i>l?eu(n,e,Vn(l,t),i,s):[l],u=i>=0&&t<=0?[0]:[];return(t<-l?eu(n,e,Vn(l,-i),-t,s):[l]).reverse().map(h=>-h).concat(u,c)}const Dg=/./,xT=/[12357]/,MT=/[125]/,Cp=/1/,tu=(n,e,t,i)=>n.map((s,r)=>e==4&&s==0||r%i==0&&t.test(s.toExponential()[s<0?1:0])?s:null);function yT(n,e,t,i,s){let r=n.axes[t],a=r.scale,o=n.scales[a],l=n.valToPos,c=r._space,u=l(10,a),d=l(9,a)-u>=c?Dg:l(7,a)-u>=c?xT:l(5,a)-u>=c?MT:Cp;if(d==Cp){let h=hn(l(1,a)-u);if(h<c)return tu(e.slice().reverse(),o.distr,d,di(c/h)).reverse()}return tu(e,o.distr,d,1)}function ST(n,e,t,i,s){let r=n.axes[t],a=r.scale,o=r._space,l=n.valToPos,c=hn(l(1,a)-l(2,a));return c<o?tu(e.slice().reverse(),3,Dg,di(o/c)).reverse():e}function wT(n,e,t,i){return i==null?zu:e==null?"":Gu(e)}const Rp={show:!0,scale:"y",stroke:ku,space:30,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:Rg,side:3,grid:qu,ticks:Ag,border:Cg,font:Yu,lineGap:Pg,rotate:0};function bT(n,e){let t=3+(n||1)*2;return Nt(t*e,3)}function TT(n,e){let{scale:t,idxs:i}=n.series[0],s=n._data[0],r=n.valToPos(s[i[0]],t,!0),a=n.valToPos(s[i[1]],t,!0),o=hn(a-r),l=n.series[e],c=o/(l.points.space*wt);return i[1]-i[0]<=c}const Pp={scale:null,auto:!0,sorted:0,min:Ut,max:-Ut},Lg=(n,e,t,i,s)=>s,Dp={show:!0,auto:!0,sorted:0,gaps:Lg,alpha:1,facets:[rn({},Pp,{scale:"x"}),rn({},Pp,{scale:"y"})]},Lp={scale:"y",auto:!0,sorted:0,show:!0,spanGaps:!1,gaps:Lg,alpha:1,points:{show:TT,filter:null},values:null,min:Ut,max:-Ut,idxs:[],path:null,clip:null};function ET(n,e,t,i,s){return t/10}const Ig={time:Zb,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},AT=rn({},Ig,{time:!1,ori:1}),Ip={};function Ug(n,e){let t=Ip[n];return t||(t={key:n,plots:[],sub(i){t.plots.push(i)},unsub(i){t.plots=t.plots.filter(s=>s!=i)},pub(i,s,r,a,o,l,c){for(let u=0;u<t.plots.length;u++)t.plots[u]!=s&&t.plots[u].pub(i,s,r,a,o,l,c)}},n!=null&&(Ip[n]=t)),t}const ia=1,nu=2;function rr(n,e,t){const i=n.mode,s=n.series[e],r=i==2?n._data[e]:n._data,a=n.scales,o=n.bbox;let l=r[0],c=i==2?r[1]:r[e],u=i==2?a[s.facets[0].scale]:a[n.series[0].scale],d=i==2?a[s.facets[1].scale]:a[s.scale],h=o.left,f=o.top,g=o.width,_=o.height,m=n.valToPosH,p=n.valToPosV;return u.ori==0?t(s,l,c,u,d,m,p,h,f,g,_,Xl,ha,Yl,Fg,kg):t(s,l,c,u,d,p,m,f,h,_,g,ql,ua,Zu,Og,zg)}function ju(n,e){let t=0,i=0,s=Mt(n.bands,Wu);for(let r=0;r<s.length;r++){let a=s[r];a.series[0]==e?t=a.dir:a.series[1]==e&&(a.dir==1?i|=1:i|=2)}return[t,i==1?-1:i==2?1:i==3?2:0]}function CT(n,e,t,i,s){let r=n.mode,a=n.series[e],o=r==2?a.facets[1].scale:a.scale,l=n.scales[o];return s==-1?l.min:s==1?l.max:l.distr==3?l.dir==1?l.min:l.max:0}function es(n,e,t,i,s,r){return rr(n,e,(a,o,l,c,u,d,h,f,g,_,m)=>{let p=a.pxRound;const x=c.dir*(c.ori==0?1:-1),M=c.ori==0?ha:ua;let w,I;x==1?(w=t,I=i):(w=i,I=t);let C=p(d(o[w],c,_,f)),P=p(h(l[w],u,m,g)),U=p(d(o[I],c,_,f)),ne=p(h(r==1?u.max:u.min,u,m,g)),S=new Path2D(s);return M(S,U,ne),M(S,C,ne),M(S,C,P),S})}function $l(n,e,t,i,s,r){let a=null;if(n.length>0){a=new Path2D;const o=e==0?Yl:Zu;let l=t;for(let d=0;d<n.length;d++){let h=n[d];if(h[1]>h[0]){let f=h[0]-l;f>0&&o(a,l,i,f,i+r),l=h[1]}}let c=t+s-l,u=10;c>0&&o(a,l,i-u/2,c,i+r+u)}return a}function RT(n,e,t){let i=n[n.length-1];i&&i[0]==e?i[1]=t:n.push([e,t])}function Ku(n,e,t,i,s,r,a){let o=[],l=n.length;for(let c=s==1?t:i;c>=t&&c<=i;c+=s)if(e[c]===null){let d=c,h=c;if(s==1)for(;++c<=i&&e[c]===null;)h=c;else for(;--c>=t&&e[c]===null;)h=c;let f=r(n[d]),g=h==d?f:r(n[h]),_=d-s;f=a<=0&&_>=0&&_<l?r(n[_]):f;let p=h+s;g=a>=0&&p>=0&&p<l?r(n[p]):g,g>=f&&o.push([f,g])}return o}function Up(n){return n==0?ug:n==1?cn:e=>Bs(e,n)}function Ng(n){let e=n==0?Xl:ql,t=n==0?(s,r,a,o,l,c)=>{s.arcTo(r,a,o,l,c)}:(s,r,a,o,l,c)=>{s.arcTo(a,r,l,o,c)},i=n==0?(s,r,a,o,l)=>{s.rect(r,a,o,l)}:(s,r,a,o,l)=>{s.rect(a,r,l,o)};return(s,r,a,o,l,c=0,u=0)=>{c==0&&u==0?i(s,r,a,o,l):(c=Ti(c,o/2,l/2),u=Ti(u,o/2,l/2),e(s,r+c,a),t(s,r+o,a,r+o,a+l,c),t(s,r+o,a+l,r,a+l,u),t(s,r,a+l,r,a,u),t(s,r,a,r+o,a,c),s.closePath())}}const Xl=(n,e,t)=>{n.moveTo(e,t)},ql=(n,e,t)=>{n.moveTo(t,e)},ha=(n,e,t)=>{n.lineTo(e,t)},ua=(n,e,t)=>{n.lineTo(t,e)},Yl=Ng(0),Zu=Ng(1),Fg=(n,e,t,i,s,r)=>{n.arc(e,t,i,s,r)},Og=(n,e,t,i,s,r)=>{n.arc(t,e,i,s,r)},kg=(n,e,t,i,s,r,a)=>{n.bezierCurveTo(e,t,i,s,r,a)},zg=(n,e,t,i,s,r,a)=>{n.bezierCurveTo(t,e,s,i,a,r)};function Bg(n){return(e,t,i,s,r)=>rr(e,t,(a,o,l,c,u,d,h,f,g,_,m)=>{let{pxRound:p,points:x}=a,M,w;c.ori==0?(M=Xl,w=Fg):(M=ql,w=Og);const I=Nt(x.width*wt,3);let C=(x.size-x.width)/2*wt,P=Nt(C*2,3),U=new Path2D,ne=new Path2D,{left:S,top:b,width:H,height:z}=e.bbox;Yl(ne,S-P,b-P,H+P*2,z+P*2);const X=j=>{if(l[j]!=null){let q=p(d(o[j],c,_,f)),F=p(h(l[j],u,m,g));M(U,q+C,F),w(U,q,F,C,0,al*2)}};if(r)r.forEach(X);else for(let j=i;j<=s;j++)X(j);return{stroke:I>0?U:null,fill:U,clip:ne,flags:ia|nu}})}function Hg(n){return(e,t,i,s,r,a)=>{i!=s&&(r!=i&&a!=i&&n(e,t,i),r!=s&&a!=s&&n(e,t,s),n(e,t,a))}}const PT=Hg(ha),DT=Hg(ua);function Vg(n){const e=Mt(n?.alignGaps,0);return(t,i,s,r)=>rr(t,i,(a,o,l,c,u,d,h,f,g,_,m)=>{[s,r]=Hl(l,s,r);let p=a.pxRound,x=z=>p(d(z,c,_,f)),M=z=>p(h(z,u,m,g)),w,I;c.ori==0?(w=ha,I=PT):(w=ua,I=DT);const C=c.dir*(c.ori==0?1:-1),P={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:ia},U=P.stroke;let ne=!1;if(r-s>=_*4){let z=oe=>t.posToVal(oe,c.key,!0),X=null,j=null,q,F,ee,pe=x(o[C==1?s:r]),ce=x(o[s]),ae=x(o[r]),me=z(C==1?ce+1:ae-1);for(let oe=C==1?s:r;oe>=s&&oe<=r;oe+=C){let ie=o[oe],xe=(C==1?ie<me:ie>me)?pe:x(ie),ge=l[oe];xe==pe?ge!=null?(F=ge,X==null?(w(U,xe,M(F)),q=X=j=F):F<X?X=F:F>j&&(j=F)):ge===null&&(ne=!0):(X!=null&&I(U,pe,M(X),M(j),M(q),M(F)),ge!=null?(F=ge,w(U,xe,M(F)),X=j=q=F):(X=j=null,ge===null&&(ne=!0)),pe=xe,me=z(pe+C))}X!=null&&X!=j&&ee!=pe&&I(U,pe,M(X),M(j),M(q),M(F))}else for(let z=C==1?s:r;z>=s&&z<=r;z+=C){let X=l[z];X===null?ne=!0:X!=null&&w(U,x(o[z]),M(X))}let[b,H]=ju(t,i);if(a.fill!=null||b!=0){let z=P.fill=new Path2D(U),X=a.fillTo(t,i,a.min,a.max,b),j=M(X),q=x(o[s]),F=x(o[r]);C==-1&&([F,q]=[q,F]),w(z,F,j),w(z,q,j)}if(!a.spanGaps){let z=[];ne&&z.push(...Ku(o,l,s,r,C,x,e)),P.gaps=z=a.gaps(t,i,s,r,z),P.clip=$l(z,c.ori,f,g,_,m)}return H!=0&&(P.band=H==2?[es(t,i,s,r,U,-1),es(t,i,s,r,U,1)]:es(t,i,s,r,U,H)),P})}function LT(n){const e=Mt(n.align,1),t=Mt(n.ascDesc,!1),i=Mt(n.alignGaps,0),s=Mt(n.extend,!1);return(r,a,o,l)=>rr(r,a,(c,u,d,h,f,g,_,m,p,x,M)=>{[o,l]=Hl(d,o,l);let w=c.pxRound,{left:I,width:C}=r.bbox,P=ce=>w(g(ce,h,x,m)),U=ce=>w(_(ce,f,M,p)),ne=h.ori==0?ha:ua;const S={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:ia},b=S.stroke,H=h.dir*(h.ori==0?1:-1);let z=U(d[H==1?o:l]),X=P(u[H==1?o:l]),j=X,q=X;s&&e==-1&&(q=I,ne(b,q,z)),ne(b,X,z);for(let ce=H==1?o:l;ce>=o&&ce<=l;ce+=H){let ae=d[ce];if(ae==null)continue;let me=P(u[ce]),oe=U(ae);e==1?ne(b,me,z):ne(b,j,oe),ne(b,me,oe),z=oe,j=me}let F=j;s&&e==1&&(F=I+C,ne(b,F,z));let[ee,pe]=ju(r,a);if(c.fill!=null||ee!=0){let ce=S.fill=new Path2D(b),ae=c.fillTo(r,a,c.min,c.max,ee),me=U(ae);ne(ce,F,me),ne(ce,q,me)}if(!c.spanGaps){let ce=[];ce.push(...Ku(u,d,o,l,H,P,i));let ae=c.width*wt/2,me=t||e==1?ae:-ae,oe=t||e==-1?-ae:ae;ce.forEach(ie=>{ie[0]+=me,ie[1]+=oe}),S.gaps=ce=c.gaps(r,a,o,l,ce),S.clip=$l(ce,h.ori,m,p,x,M)}return pe!=0&&(S.band=pe==2?[es(r,a,o,l,b,-1),es(r,a,o,l,b,1)]:es(r,a,o,l,b,pe)),S})}function Np(n,e,t,i,s,r,a=Ut){if(n.length>1){let o=null;for(let l=0,c=1/0;l<n.length;l++)if(e[l]!==void 0){if(o!=null){let u=hn(n[l]-n[o]);u<c&&(c=u,a=hn(t(n[l],i,s,r)-t(n[o],i,s,r)))}o=l}}return a}function IT(n){n=n||Ya;const e=Mt(n.size,[.6,Ut,1]),t=n.align||0,i=n.gap||0;let s=n.radius;s=s==null?[0,0]:typeof s=="number"?[s,0]:s;const r=ft(s),a=1-e[0],o=Mt(e[1],Ut),l=Mt(e[2],1),c=Mt(n.disp,Ya),u=Mt(n.each,f=>{}),{fill:d,stroke:h}=c;return(f,g,_,m)=>rr(f,g,(p,x,M,w,I,C,P,U,ne,S,b)=>{let H=p.pxRound,z=t,X=i*wt,j=o*wt,q=l*wt,F,ee;w.ori==0?[F,ee]=r(f,g):[ee,F]=r(f,g);const pe=w.dir*(w.ori==0?1:-1);let ce=w.ori==0?Yl:Zu,ae=w.ori==0?u:($,we,Me,De,lt,_e,Le)=>{u($,we,Me,lt,De,Le,_e)},me=Mt(f.bands,Wu).find($=>$.series[0]==g),oe=me!=null?me.dir:0,ie=p.fillTo(f,g,p.min,p.max,oe),de=H(P(ie,I,b,ne)),xe,ge,Xe,Ne=S,He=H(p.width*wt),rt=!1,nt=null,N=null,Xt=null,ot=null;d!=null&&(He==0||h!=null)&&(rt=!0,nt=d.values(f,g,_,m),N=new Map,new Set(nt).forEach($=>{$!=null&&N.set($,new Path2D)}),He>0&&(Xt=h.values(f,g,_,m),ot=new Map,new Set(Xt).forEach($=>{$!=null&&ot.set($,new Path2D)})));let{x0:ut,size:Ye}=c;if(ut!=null&&Ye!=null){z=1,x=ut.values(f,g,_,m),ut.unit==2&&(x=x.map(Me=>f.posToVal(U+Me*S,w.key,!0)));let $=Ye.values(f,g,_,m);Ye.unit==2?ge=$[0]*S:ge=C($[0],w,S,U)-C(0,w,S,U),Ne=Np(x,M,C,w,S,U,Ne),Xe=Ne-ge+X}else Ne=Np(x,M,C,w,S,U,Ne),Xe=Ne*a+X,ge=Ne-Xe;Xe<1&&(Xe=0),He>=ge/2&&(He=0),Xe<5&&(H=ug);let bt=Xe>0,qe=Ne-Xe-(bt?He:0);ge=H(Qh(qe,q,j)),xe=(z==0?ge/2:z==pe?0:ge)-z*pe*((z==0?X/2:0)+(bt?He/2:0));const D={stroke:null,fill:null,clip:null,band:null,gaps:null,flags:0},E=rt?null:new Path2D;let J=null;if(me!=null)J=f.data[me.series[1]];else{let{y0:$,y1:we}=c;$!=null&&we!=null&&(M=we.values(f,g,_,m),J=$.values(f,g,_,m))}let le=F*ge,se=ee*ge;for(let $=pe==1?_:m;$>=_&&$<=m;$+=pe){let we=M[$];if(we==null)continue;if(J!=null){let Ee=J[$]??0;if(we-Ee==0)continue;de=P(Ee,I,b,ne)}let Me=w.distr!=2||c!=null?x[$]:$,De=C(Me,w,S,U),lt=P(Mt(we,ie),I,b,ne),_e=H(De-xe),Le=H(Vn(lt,de)),Ve=H(Ti(lt,de)),We=Le-Ve;if(we!=null){let Ee=we<0?se:le,et=we<0?le:se;rt?(He>0&&Xt[$]!=null&&ce(ot.get(Xt[$]),_e,Ve+si(He/2),ge,Vn(0,We-He),Ee,et),nt[$]!=null&&ce(N.get(nt[$]),_e,Ve+si(He/2),ge,Vn(0,We-He),Ee,et)):ce(E,_e,Ve+si(He/2),ge,Vn(0,We-He),Ee,et),ae(f,g,$,_e-He/2,Ve,ge+He,We)}}return He>0?D.stroke=rt?ot:E:rt||(D._fill=p.width==0?p._fill:p._stroke??p._fill,D.width=0),D.fill=rt?N:E,D})}function UT(n,e){const t=Mt(e?.alignGaps,0);return(i,s,r,a)=>rr(i,s,(o,l,c,u,d,h,f,g,_,m,p)=>{[r,a]=Hl(c,r,a);let x=o.pxRound,M=F=>x(h(F,u,m,g)),w=F=>x(f(F,d,p,_)),I,C,P;u.ori==0?(I=Xl,P=ha,C=kg):(I=ql,P=ua,C=zg);const U=u.dir*(u.ori==0?1:-1);let ne=M(l[U==1?r:a]),S=ne,b=[],H=[];for(let F=U==1?r:a;F>=r&&F<=a;F+=U)if(c[F]!=null){let pe=l[F],ce=M(pe);b.push(S=ce),H.push(w(c[F]))}const z={stroke:n(b,H,I,P,C,x),fill:null,clip:null,band:null,gaps:null,flags:ia},X=z.stroke;let[j,q]=ju(i,s);if(o.fill!=null||j!=0){let F=z.fill=new Path2D(X),ee=o.fillTo(i,s,o.min,o.max,j),pe=w(ee);P(F,S,pe),P(F,ne,pe)}if(!o.spanGaps){let F=[];F.push(...Ku(l,c,r,a,U,M,t)),z.gaps=F=o.gaps(i,s,r,a,F),z.clip=$l(F,u.ori,g,_,m,p)}return q!=0&&(z.band=q==2?[es(i,s,r,a,X,-1),es(i,s,r,a,X,1)]:es(i,s,r,a,X,q)),z})}function NT(n){return UT(FT,n)}function FT(n,e,t,i,s,r){const a=n.length;if(a<2)return null;const o=new Path2D;if(t(o,n[0],e[0]),a==2)i(o,n[1],e[1]);else{let l=Array(a),c=Array(a-1),u=Array(a-1),d=Array(a-1);for(let h=0;h<a-1;h++)u[h]=e[h+1]-e[h],d[h]=n[h+1]-n[h],c[h]=u[h]/d[h];l[0]=c[0];for(let h=1;h<a-1;h++)c[h]===0||c[h-1]===0||c[h-1]>0!=c[h]>0?l[h]=0:(l[h]=3*(d[h-1]+d[h])/((2*d[h]+d[h-1])/c[h-1]+(d[h]+2*d[h-1])/c[h]),isFinite(l[h])||(l[h]=0));l[a-1]=c[a-2];for(let h=0;h<a-1;h++)s(o,n[h]+d[h]/3,e[h]+l[h]*d[h]/3,n[h+1]-d[h]/3,e[h+1]-l[h+1]*d[h]/3,n[h+1],e[h+1])}return o}const iu=new Set;function Fp(){for(let n of iu)n.syncRect(!0)}ca&&(Ys(g1,qr,Fp),Ys(v1,qr,Fp,!0),Ys(Al,qr,()=>{yn.pxRatio=wt}));const OT=Vg(),kT=Bg();function Op(n,e,t,i){return(i?[n[0],n[1]].concat(n.slice(2)):[n[0]].concat(n.slice(1))).map((r,a)=>su(r,a,e,t))}function zT(n,e){return n.map((t,i)=>i==0?{}:rn({},e,t))}function su(n,e,t,i){return rn({},e==0?t:i,n)}function Gg(n,e,t){return e==null?ta:[e,t]}const BT=Gg;function HT(n,e,t){return e==null?ta:Cl(e,t,Vu,!0)}function Wg(n,e,t,i){return e==null?ta:Vl(e,t,n.scales[i].log,!1)}const VT=Wg;function $g(n,e,t,i){return e==null?ta:Hu(e,t,n.scales[i].log,!1)}const GT=$g;function WT(n,e,t,i,s){let r=Vn(mp(n),mp(e)),a=e-n,o=Si(s/i*a,t);do{let l=t[o],c=i*l/a;if(c>=s&&r+(l<5?Es.get(l):0)<=17)return[l,c]}while(++o<t.length);return[0,0]}function kp(n){let e,t;return n=n.replace(/(\d+)px/,(i,s)=>(e=cn((t=+s)*wt))+"px"),[n,e,t]}function $T(n){n.show&&[n.font,n.labelFont].forEach(e=>{let t=Nt(e[2]*wt,1);e[0]=e[0].replace(/[0-9.]+px/,t+"px"),e[1]=t})}function yn(n,e,t){const i={mode:Mt(n.mode,1)},s=i.mode;function r(y,T,R,L){let B=T.valToPct(y);return L+R*(T.dir==-1?1-B:B)}function a(y,T,R,L){let B=T.valToPct(y);return L+R*(T.dir==-1?B:1-B)}function o(y,T,R,L){return T.ori==0?r(y,T,R,L):a(y,T,R,L)}i.valToPosH=r,i.valToPosV=a;let l=!1;i.status=0;const c=i.root=ci(Jb);if(n.id!=null&&(c.id=n.id),ti(c,n.class),n.title){let y=ci(t1,c);y.textContent=n.title}const u=yi("canvas"),d=i.ctx=u.getContext("2d"),h=ci(n1,c);Ys("click",h,y=>{y.target===g&&(Ot!=dr||Vt!=fr)&&Tn.click(i,y)},!0);const f=i.under=ci(i1,h);h.appendChild(u);const g=i.over=ci(s1,h);n=na(n);const _=+Mt(n.pxAlign,1),m=Up(_);(n.plugins||[]).forEach(y=>{y.opts&&(n=y.opts(i,n)||n)});const p=n.ms||.001,x=i.series=s==1?Op(n.series||[],Ap,Lp,!1):zT(n.series||[null],Dp),M=i.axes=Op(n.axes||[],Ep,Rp,!0),w=i.scales={},I=i.bands=n.bands||[];I.forEach(y=>{y.fill=ft(y.fill||null),y.dir=Mt(y.dir,-1)});const C=s==2?x[1].facets[0].scale:x[0].scale,P={axes:Kg,series:fa},U=(n.drawOrder||["axes","series"]).map(y=>P[y]);function ne(y){const T=y.distr==3?R=>Qi(R>0?R:y.clamp(i,R,y.min,y.max,y.key)):y.distr==4?R=>Yc(R,y.asinh):y.distr==100?R=>y.fwd(R):R=>R;return R=>{let L=T(R),{_min:B,_max:Q}=y,ue=Q-B;return(L-B)/ue}}function S(y){let T=w[y];if(T==null){let R=(n.scales||Ya)[y]||Ya;if(R.from!=null){S(R.from);let L=rn({},w[R.from],R,{key:y});L.valToPct=ne(L),w[y]=L}else{T=w[y]=rn({},y==C?Ig:AT,R),T.key=y;let L=T.time,B=T.range,Q=xs(B);if((y!=C||s==2&&!L)&&(Q&&(B[0]==null||B[1]==null)&&(B={min:B[0]==null?dp:{mode:1,hard:B[0],soft:B[0]},max:B[1]==null?dp:{mode:1,hard:B[1],soft:B[1]}},Q=!1),!Q&&Wl(B))){let ue=B;B=(ve,Se,Pe)=>Se==null?ta:Cl(Se,Pe,ue)}T.range=ft(B||(L?BT:y==C?T.distr==3?VT:T.distr==4?GT:Gg:T.distr==3?Wg:T.distr==4?$g:HT)),T.auto=ft(Q?!1:T.auto),T.clamp=ft(T.clamp||ET),T._min=T._max=null,T.valToPct=ne(T)}}}S("x"),S("y"),s==1&&x.forEach(y=>{S(y.scale)}),M.forEach(y=>{S(y.scale)});for(let y in n.scales)S(y);const b=w[C],H=b.distr;let z,X;b.ori==0?(ti(c,Qb),z=r,X=a):(ti(c,e1),z=a,X=r);const j={};for(let y in w){let T=w[y];(T.min!=null||T.max!=null)&&(j[y]={min:T.min,max:T.max},T.min=T.max=null)}const q=n.tzDate||(y=>new Date(cn(y/p))),F=n.fmtDate||$u,ee=p==1?Q1(q):nT(q),pe=wp(q,Sp(p==1?J1:tT,F)),ce=Tp(q,bp(sT,F)),ae=[],me=i.legend=rn({},oT,n.legend),oe=i.cursor=rn({},fT,{drag:{y:s==2}},n.cursor),ie=me.show,de=oe.show,xe=me.markers;me.idxs=ae,xe.width=ft(xe.width),xe.dash=ft(xe.dash),xe.stroke=ft(xe.stroke),xe.fill=ft(xe.fill);let ge,Xe,Ne,He=[],rt=[],nt,N=!1,Xt={};if(me.live){const y=x[1]?x[1].values:null;N=y!=null,nt=N?y(i,1,0):{_:0};for(let T in nt)Xt[T]=zu}if(ie)if(ge=yi("table",h1,c),Ne=yi("tbody",null,ge),me.mount(i,ge),N){Xe=yi("thead",null,ge,Ne);let y=yi("tr",null,Xe);yi("th",null,y);for(var ot in nt)yi("th",Qf,y).textContent=ot}else ti(ge,d1),me.live&&ti(ge,u1);const ut={show:!0},Ye={show:!1};function bt(y,T){if(T==0&&(N||!me.live||s==2))return ta;let R=[],L=yi("tr",f1,Ne,Ne.childNodes[T]);ti(L,y.class),y.show||ti(L,Xs);let B=yi("th",null,L);if(xe.show){let ve=ci(p1,B);if(T>0){let Se=xe.width(i,T);Se&&(ve.style.border=Se+"px "+xe.dash(i,T)+" "+xe.stroke(i,T)),ve.style.background=xe.fill(i,T)}}let Q=ci(Qf,B);y.label instanceof HTMLElement?Q.appendChild(y.label):Q.textContent=y.label,T>0&&(xe.show||(Q.style.color=y.width>0?xe.stroke(i,T):xe.fill(i,T)),D("click",B,ve=>{if(oe._lock)return;Sn(ve);let Se=x.indexOf(y);if((ve.ctrlKey||ve.metaKey)!=me.isolate){let Pe=x.some((Ue,Oe)=>Oe>0&&Oe!=Se&&Ue.show);x.forEach((Ue,Oe)=>{Oe>0&&Ci(Oe,Pe?Oe==Se?ut:Ye:ut,!0,tn.setSeries)})}else Ci(Se,{show:!y.show},!0,tn.setSeries)},!1),$n&&D(ip,B,ve=>{oe._lock||(Sn(ve),Ci(x.indexOf(y),mr,!0,tn.setSeries))},!1));for(var ue in nt){let ve=yi("td",m1,L);ve.textContent="--",R.push(ve)}return[L,R]}const qe=new Map;function D(y,T,R,L=!0){const B=qe.get(T)||{},Q=oe.bind[y](i,T,R,L);Q&&(Ys(y,T,B[y]=Q),qe.set(T,B))}function E(y,T,R){const L=qe.get(T)||{};for(let B in L)(y==null||B==y)&&(Jh(B,T,L[B]),delete L[B]);y==null&&qe.delete(T)}let J=0,le=0,se=0,$=0,we=0,Me=0,De=we,lt=Me,_e=se,Le=$,Ve=0,We=0,Ee=0,et=0;i.bbox={};let tt=!1,yt=!1,G=!1,Ae=!1,re=!1,he=!1;function Re(y,T,R){(R||y!=i.width||T!=i.height)&&Ie(y,T),lr(!1),G=!0,yt=!0,cr()}function Ie(y,T){i.width=J=se=y,i.height=le=$=T,we=Me=0,vt(),Pn();let R=i.bbox;Ve=R.left=Bs(we*wt,.5),We=R.top=Bs(Me*wt,.5),Ee=R.width=Bs(se*wt,.5),et=R.height=Bs($*wt,.5)}const mt=3;function qt(){let y=!1,T=0;for(;!y;){T++;let R=Yg(T),L=jg(T);y=T==mt||R&&L,y||(Ie(i.width,i.height),yt=!0)}}function Rn({width:y,height:T}){Re(y,T)}i.setSize=Rn;function vt(){let y=!1,T=!1,R=!1,L=!1;M.forEach((B,Q)=>{if(B.show&&B._show){let{side:ue,_size:ve}=B,Se=ue%2,Pe=B.label!=null?B.labelSize:0,Ue=ve+Pe;Ue>0&&(Se?(se-=Ue,ue==3?(we+=Ue,L=!0):R=!0):($-=Ue,ue==0?(Me+=Ue,y=!0):T=!0))}}),ki[0]=y,ki[1]=R,ki[2]=T,ki[3]=L,se-=W[1]+W[3],we+=W[3],$-=W[2]+W[0],Me+=W[0]}function Pn(){let y=we+se,T=Me+$,R=we,L=Me;function B(Q,ue){switch(Q){case 1:return y+=ue,y-ue;case 2:return T+=ue,T-ue;case 3:return R-=ue,R+ue;case 0:return L-=ue,L+ue}}M.forEach((Q,ue)=>{if(Q.show&&Q._show){let ve=Q.side;Q._pos=B(ve,Q._size),Q.label!=null&&(Q._lpos=B(ve,Q.labelSize))}})}if(oe.dataIdx==null){let y=oe.hover,T=y.skip=new Set(y.skip??[]);T.add(void 0);let R=y.prox=ft(y.prox),L=y.bias??(y.bias=0);oe.dataIdx=(B,Q,ue,ve)=>{if(Q==0)return ue;let Se=ue,Pe=R(B,Q,ue,ve)??Ut,Ue=Pe>=0&&Pe<Ut,Oe=b.ori==0?se:$,st=oe.left,St=e[0],xt=e[Q];if(T.has(xt[ue])){Se=null;let dt=null,Je=null,$e;if(L==0||L==-1)for($e=ue;dt==null&&$e-- >0;)T.has(xt[$e])||(dt=$e);if(L==0||L==1)for($e=ue;Je==null&&$e++<xt.length;)T.has(xt[$e])||(Je=$e);if(dt!=null||Je!=null)if(Ue){let zt=dt==null?-1/0:z(St[dt],b,Oe,0),Yt=Je==null?1/0:z(St[Je],b,Oe,0),_n=st-zt,Pt=Yt-st;_n<=Pt?_n<=Pe&&(Se=dt):Pt<=Pe&&(Se=Je)}else Se=Je==null?dt:dt==null?Je:ue-dt<=Je-ue?dt:Je}else Ue&&hn(st-z(St[ue],b,Oe,0))>Pe&&(Se=null);return Se}}const Sn=y=>{oe.event=y};oe.idxs=ae,oe._lock=!1;let on=oe.points;on.show=ft(on.show),on.size=ft(on.size),on.stroke=ft(on.stroke),on.width=ft(on.width),on.fill=ft(on.fill);const jn=i.focus=rn({},n.focus||{alpha:.3},oe.focus),$n=jn.prox>=0,Ei=$n&&on.one;let Un=[],Oi=[],mi=[];function da(y,T){let R=on.show(i,T);if(R instanceof HTMLElement)return ti(R,c1),ti(R,y.class),Li(R,-10,-10,se,$),g.insertBefore(R,Un[T]),R}function Cs(y,T){if(s==1||T>0){let R=s==1&&w[y.scale].time,L=y.value;y.value=R?_p(L)?Tp(q,bp(L,F)):L||ce:L||wT,y.label=y.label||(R?mT:pT)}if(Ei||T>0){y.width=y.width==null?1:y.width,y.paths=y.paths||OT||A1,y.fillTo=ft(y.fillTo||CT),y.pxAlign=+Mt(y.pxAlign,_),y.pxRound=Up(y.pxAlign),y.stroke=ft(y.stroke||null),y.fill=ft(y.fill||null),y._stroke=y._fill=y._paths=y._focus=null;let R=bT(Vn(1,y.width),1),L=y.points=rn({},{size:R,width:Vn(1,R*.2),stroke:y.stroke,space:R*2,paths:kT,_stroke:null,_fill:null},y.points);L.show=ft(L.show),L.filter=ft(L.filter),L.fill=ft(L.fill),L.stroke=ft(L.stroke),L.paths=ft(L.paths),L.pxAlign=y.pxAlign}if(ie){let R=bt(y,T);He.splice(T,0,R[0]),rt.splice(T,0,R[1]),me.values.push(null)}if(de){ae.splice(T,0,null);let R=null;Ei?T==0&&(R=da(y,T)):T>0&&(R=da(y,T)),Un.splice(T,0,R),Oi.splice(T,0,0),mi.splice(T,0,0)}vn("addSeries",T)}function oo(y,T){T=T??x.length,y=s==1?su(y,T,Ap,Lp):su(y,T,{},Dp),x.splice(T,0,y),Cs(x[T],T)}i.addSeries=oo;function lo(y){if(x.splice(y,1),ie){me.values.splice(y,1),rt.splice(y,1);let T=He.splice(y,1)[0];E(null,T.firstChild),T.remove()}de&&(ae.splice(y,1),Un.splice(y,1)[0].remove(),Oi.splice(y,1),mi.splice(y,1)),vn("delSeries",y)}i.delSeries=lo;const ki=[!1,!1,!1,!1];function jl(y,T){if(y._show=y.show,y.show){let R=y.side%2,L=w[y.scale];L==null&&(y.scale=R?x[1].scale:C,L=w[y.scale]);let B=L.time;y.size=ft(y.size),y.space=ft(y.space),y.rotate=ft(y.rotate),xs(y.incrs)&&y.incrs.forEach(ue=>{!Es.has(ue)&&Es.set(ue,pg(ue))}),y.incrs=ft(y.incrs||(L.distr==2?j1:B?p==1?Z1:eT:Hs)),y.splits=ft(y.splits||(B&&L.distr==1?ee:L.distr==3?eu:L.distr==4?_T:vT)),y.stroke=ft(y.stroke),y.grid.stroke=ft(y.grid.stroke),y.ticks.stroke=ft(y.ticks.stroke),y.border.stroke=ft(y.border.stroke);let Q=y.values;y.values=xs(Q)&&!xs(Q[0])?ft(Q):B?xs(Q)?wp(q,Sp(Q,F)):_p(Q)?iT(q,Q):Q||pe:Q||gT,y.filter=ft(y.filter||(L.distr>=3&&L.log==10?yT:L.distr==3&&L.log==2?ST:dg)),y.font=kp(y.font),y.labelFont=kp(y.labelFont),y._size=y.size(i,null,T,0),y._space=y._rotate=y._incrs=y._found=y._splits=y._values=null,y._size>0&&(ki[T]=!0,y._el=ci(r1,h))}}function Rs(y,T,R,L){let[B,Q,ue,ve]=R,Se=T%2,Pe=0;return Se==0&&(ve||Q)&&(Pe=T==0&&!B||T==2&&!ue?cn(Ep.size/3):0),Se==1&&(B||ue)&&(Pe=T==1&&!Q||T==3&&!ve?cn(Rp.size/2):0),Pe}const A=i.padding=(n.padding||[Rs,Rs,Rs,Rs]).map(y=>ft(Mt(y,Rs))),W=i._padding=A.map((y,T)=>y(i,T,ki,0));let Y,K=null,V=null;const ye=s==1?x[0].idxs:null;let Te=null,Fe=!1;function ze(y,T){if(e=y??[],i.data=i._data=e,s==2){Y=0;for(let R=1;R<x.length;R++)Y+=e[R][0].length}else{e.length==0&&(i.data=i._data=e=[[]]),Te=e[0],Y=Te.length;let R=e;if(H==2){R=e.slice();let L=R[0]=Array(Y);for(let B=0;B<Y;B++)L[B]=B}i._data=e=R}if(lr(!0),vn("setData"),H==2&&(G=!0),T!==!1){let R=b;R.auto(i,Fe)?je():as(C,R.min,R.max),Ae=Ae||oe.left>=0,he=!0,cr()}}i.setData=ze;function je(){Fe=!0;let y,T;s==1&&(Y>0?(K=ye[0]=0,V=ye[1]=Y-1,y=e[0][K],T=e[0][V],H==2?(y=K,T=V):y==T&&(H==3?[y,T]=Vl(y,y,b.log,!1):H==4?[y,T]=Hu(y,y,b.log,!1):b.time?T=y+cn(86400/p):[y,T]=Cl(y,T,Vu,!0))):(K=ye[0]=y=null,V=ye[1]=T=null)),as(C,y,T)}let Ke,ke,_t,At,Ft,wn,gt,Ge,Zt,it;function Xn(y,T,R,L,B,Q){y??(y=tp),R??(R=Wu),L??(L="butt"),B??(B=tp),Q??(Q="round"),y!=Ke&&(d.strokeStyle=Ke=y),B!=ke&&(d.fillStyle=ke=B),T!=_t&&(d.lineWidth=_t=T),Q!=Ft&&(d.lineJoin=Ft=Q),L!=wn&&(d.lineCap=wn=L),R!=At&&d.setLineDash(At=R)}function zi(y,T,R,L){T!=ke&&(d.fillStyle=ke=T),y!=gt&&(d.font=gt=y),R!=Ge&&(d.textAlign=Ge=R),L!=Zt&&(d.textBaseline=Zt=L)}function bn(y,T,R,L,B=0){if(L.length>0&&y.auto(i,Fe)&&(T==null||T.min==null)){let Q=Mt(K,0),ue=Mt(V,L.length-1),ve=R.min==null?y1(L,Q,ue,B,y.distr==3):[R.min,R.max];y.min=Ti(y.min,R.min=ve[0]),y.max=Vn(y.max,R.max=ve[1])}}const ar={min:null,max:null};function Wt(){for(let L in w){let B=w[L];j[L]==null&&(B.min==null||j[C]!=null&&B.auto(i,Fe))&&(j[L]=ar)}for(let L in w){let B=w[L];j[L]==null&&B.from!=null&&j[B.from]!=null&&(j[L]=ar)}j[C]!=null&&lr(!0);let y={};for(let L in j){let B=j[L];if(B!=null){let Q=y[L]=na(w[L],P1);if(B.min!=null)rn(Q,B);else if(L!=C||s==2)if(Y==0&&Q.from==null){let ue=Q.range(i,null,null,L);Q.min=ue[0],Q.max=ue[1]}else Q.min=Ut,Q.max=-Ut}}if(Y>0){x.forEach((L,B)=>{if(s==1){let Q=L.scale,ue=j[Q];if(ue==null)return;let ve=y[Q];if(B==0){let Se=ve.range(i,ve.min,ve.max,Q);ve.min=Se[0],ve.max=Se[1],K=Si(ve.min,e[0]),V=Si(ve.max,e[0]),V-K>1&&(e[0][K]<ve.min&&K++,e[0][V]>ve.max&&V--),L.min=Te[K],L.max=Te[V]}else L.show&&L.auto&&bn(ve,ue,L,e[B],L.sorted);L.idxs[0]=K,L.idxs[1]=V}else if(B>0&&L.show&&L.auto){let[Q,ue]=L.facets,ve=Q.scale,Se=ue.scale,[Pe,Ue]=e[B],Oe=y[ve],st=y[Se];Oe!=null&&bn(Oe,j[ve],Q,Pe,Q.sorted),st!=null&&bn(st,j[Se],ue,Ue,ue.sorted),L.min=ue.min,L.max=ue.max}});for(let L in y){let B=y[L],Q=j[L];if(B.from==null&&(Q==null||Q.min==null)){let ue=B.range(i,B.min==Ut?null:B.min,B.max==-Ut?null:B.max,L);B.min=ue[0],B.max=ue[1]}}}for(let L in y){let B=y[L];if(B.from!=null){let Q=y[B.from];if(Q.min==null)B.min=B.max=null;else{let ue=B.range(i,Q.min,Q.max,L);B.min=ue[0],B.max=ue[1]}}}let T={},R=!1;for(let L in y){let B=y[L],Q=w[L];if(Q.min!=B.min||Q.max!=B.max){Q.min=B.min,Q.max=B.max;let ue=Q.distr;Q._min=ue==3?Qi(Q.min):ue==4?Yc(Q.min,Q.asinh):ue==100?Q.fwd(Q.min):Q.min,Q._max=ue==3?Qi(Q.max):ue==4?Yc(Q.max,Q.asinh):ue==100?Q.fwd(Q.max):Q.max,T[L]=R=!0}}if(R){x.forEach((L,B)=>{s==2?B>0&&T.y&&(L._paths=null):T[L.scale]&&(L._paths=null)});for(let L in T)G=!0,vn("setScale",L);de&&oe.left>=0&&(Ae=he=!0)}for(let L in j)j[L]=null}function Ai(y){let T=Qh(K-1,0,Y-1),R=Qh(V+1,0,Y-1);for(;y[T]==null&&T>0;)T--;for(;y[R]==null&&R<Y-1;)R++;return[T,R]}function fa(){if(Y>0){let y=x.some(T=>T._focus)&&it!=jn.alpha;y&&(d.globalAlpha=it=jn.alpha),x.forEach((T,R)=>{if(R>0&&T.show&&(Nn(R,!1),Nn(R,!0),T._paths==null)){let L=it;it!=T.alpha&&(d.globalAlpha=it=T.alpha);let B=s==2?[0,e[R][0].length-1]:Ai(e[R]);T._paths=T.paths(i,R,B[0],B[1]),it!=L&&(d.globalAlpha=it=L)}}),x.forEach((T,R)=>{if(R>0&&T.show){let L=it;it!=T.alpha&&(d.globalAlpha=it=T.alpha),T._paths!=null&&or(R,!1);{let B=T._paths!=null?T._paths.gaps:null,Q=T.points.show(i,R,K,V,B),ue=T.points.filter(i,R,Q,B);(Q||ue)&&(T.points._paths=T.points.paths(i,R,K,V,ue),or(R,!0))}it!=L&&(d.globalAlpha=it=L),vn("drawSeries",R)}}),y&&(d.globalAlpha=it=1)}}function Nn(y,T){let R=T?x[y].points:x[y];R._stroke=R.stroke(i,y),R._fill=R.fill(i,y)}function or(y,T){let R=T?x[y].points:x[y],{stroke:L,fill:B,clip:Q,flags:ue,_stroke:ve=R._stroke,_fill:Se=R._fill,_width:Pe=R.width}=R._paths;Pe=Nt(Pe*wt,3);let Ue=null,Oe=Pe%2/2;T&&Se==null&&(Se=Pe>0?"#fff":ve);let st=R.pxAlign==1&&Oe>0;if(st&&d.translate(Oe,Oe),!T){let St=Ve-Pe/2,xt=We-Pe/2,dt=Ee+Pe,Je=et+Pe;Ue=new Path2D,Ue.rect(St,xt,dt,Je)}T?Zl(ve,Pe,R.dash,R.cap,Se,L,B,ue,Q):Kl(y,ve,Pe,R.dash,R.cap,Se,L,B,ue,Ue,Q),st&&d.translate(-Oe,-Oe)}function Kl(y,T,R,L,B,Q,ue,ve,Se,Pe,Ue){let Oe=!1;Se!=0&&I.forEach((st,St)=>{if(st.series[0]==y){let xt=x[st.series[1]],dt=e[st.series[1]],Je=(xt._paths||Ya).band;xs(Je)&&(Je=st.dir==1?Je[0]:Je[1]);let $e,zt=null;xt.show&&Je&&w1(dt,K,V)?(zt=st.fill(i,St)||Q,$e=xt._paths.clip):Je=null,Zl(T,R,L,B,zt,ue,ve,Se,Pe,Ue,$e,Je),Oe=!0}}),Oe||Zl(T,R,L,B,Q,ue,ve,Se,Pe,Ue)}const pa=ia|nu;function Zl(y,T,R,L,B,Q,ue,ve,Se,Pe,Ue,Oe){Xn(y,T,R,L,B),(Se||Pe||Oe)&&(d.save(),Se&&d.clip(Se),Pe&&d.clip(Pe)),Oe?(ve&pa)==pa?(d.clip(Oe),Ue&&d.clip(Ue),ho(B,ue),co(y,Q,T)):ve&nu?(ho(B,ue),d.clip(Oe),co(y,Q,T)):ve&ia&&(d.save(),d.clip(Oe),Ue&&d.clip(Ue),ho(B,ue),d.restore(),co(y,Q,T)):(ho(B,ue),co(y,Q,T)),(Se||Pe||Oe)&&d.restore()}function co(y,T,R){R>0&&(T instanceof Map?T.forEach((L,B)=>{d.strokeStyle=Ke=B,d.stroke(L)}):T!=null&&y&&d.stroke(T))}function ho(y,T){T instanceof Map?T.forEach((R,L)=>{d.fillStyle=ke=L,d.fill(R)}):T!=null&&y&&d.fill(T)}function qg(y,T,R,L){let B=M[y],Q;if(L<=0)Q=[0,0];else{let ue=B._space=B.space(i,y,T,R,L),ve=B._incrs=B.incrs(i,y,T,R,L,ue);Q=WT(T,R,ve,L,ue)}return B._found=Q}function Jl(y,T,R,L,B,Q,ue,ve,Se,Pe){let Ue=ue%2/2;_==1&&d.translate(Ue,Ue),Xn(ve,ue,Se,Pe,ve),d.beginPath();let Oe,st,St,xt,dt=B+(L==0||L==3?-Q:Q);R==0?(st=B,xt=dt):(Oe=B,St=dt);for(let Je=0;Je<y.length;Je++)T[Je]!=null&&(R==0?Oe=St=y[Je]:st=xt=y[Je],d.moveTo(Oe,st),d.lineTo(St,xt));d.stroke(),_==1&&d.translate(-Ue,-Ue)}function Yg(y){let T=!0;return M.forEach((R,L)=>{if(!R.show)return;let B=w[R.scale];if(B.min==null){R._show&&(T=!1,R._show=!1,lr(!1));return}else R._show||(T=!1,R._show=!0,lr(!1));let Q=R.side,ue=Q%2,{min:ve,max:Se}=B,[Pe,Ue]=qg(L,ve,Se,ue==0?se:$);if(Ue==0)return;let Oe=B.distr==2,st=R._splits=R.splits(i,L,ve,Se,Pe,Ue,Oe),St=B.distr==2?st.map($e=>Te[$e]):st,xt=B.distr==2?Te[st[1]]-Te[st[0]]:Pe,dt=R._values=R.values(i,R.filter(i,St,L,Ue,xt),L,Ue,xt);R._rotate=Q==2?R.rotate(i,dt,L,Ue):0;let Je=R._size;R._size=di(R.size(i,dt,L,y)),Je!=null&&R._size!=Je&&(T=!1)}),T}function jg(y){let T=!0;return A.forEach((R,L)=>{let B=R(i,L,ki,y);B!=W[L]&&(T=!1),W[L]=B}),T}function Kg(){for(let y=0;y<M.length;y++){let T=M[y];if(!T.show||!T._show)continue;let R=T.side,L=R%2,B,Q,ue=T.stroke(i,y),ve=R==0||R==3?-1:1,[Se,Pe]=T._found;if(T.label!=null){let On=T.labelGap*ve,Jn=cn((T._lpos+On)*wt);zi(T.labelFont[0],ue,"center",R==2?Ra:ep),d.save(),L==1?(B=Q=0,d.translate(Jn,cn(We+et/2)),d.rotate((R==3?-al:al)/2)):(B=cn(Ve+Ee/2),Q=Jn);let Ls=hg(T.label)?T.label(i,y,Se,Pe):T.label;d.fillText(Ls,B,Q),d.restore()}if(Pe==0)continue;let Ue=w[T.scale],Oe=L==0?Ee:et,st=L==0?Ve:We,St=T._splits,xt=Ue.distr==2?St.map(On=>Te[On]):St,dt=Ue.distr==2?Te[St[1]]-Te[St[0]]:Se,Je=T.ticks,$e=T.border,zt=Je.show?Je.size:0,Yt=cn(zt*wt),_n=cn((T.alignTo==2?T._size-zt-T.gap:T.gap)*wt),Pt=T._rotate*-al/180,jt=m(T._pos*wt),Kn=(Yt+_n)*ve,Fn=jt+Kn;Q=L==0?Fn:0,B=L==1?Fn:0;let ai=T.font[0],gi=T.align==1?Lr:T.align==2?$c:Pt>0?Lr:Pt<0?$c:L==0?"center":R==3?$c:Lr,Pi=Pt||L==1?"middle":R==2?Ra:ep;zi(ai,ue,gi,Pi);let Zn=T.font[1]*T.lineGap,oi=St.map(On=>m(o(On,Ue,Oe,st))),vi=T._values;for(let On=0;On<vi.length;On++){let Jn=vi[On];if(Jn!=null){L==0?B=oi[On]:Q=oi[On],Jn=""+Jn;let Ls=Jn.indexOf(`
`)==-1?[Jn]:Jn.split(/\n/gm);for(let kn=0;kn<Ls.length;kn++){let gd=Ls[kn];Pt?(d.save(),d.translate(B,Q+kn*Zn),d.rotate(Pt),d.fillText(gd,0,0),d.restore()):d.fillText(gd,B,Q+kn*Zn)}}}Je.show&&Jl(oi,Je.filter(i,xt,y,Pe,dt),L,R,jt,Yt,Nt(Je.width*wt,3),Je.stroke(i,y),Je.dash,Je.cap);let Di=T.grid;Di.show&&Jl(oi,Di.filter(i,xt,y,Pe,dt),L,L==0?2:1,L==0?We:Ve,L==0?et:Ee,Nt(Di.width*wt,3),Di.stroke(i,y),Di.dash,Di.cap),$e.show&&Jl([jt],[1],L==0?1:0,L==0?1:2,L==1?We:Ve,L==1?et:Ee,Nt($e.width*wt,3),$e.stroke(i,y),$e.dash,$e.cap)}vn("drawAxes")}function lr(y){x.forEach((T,R)=>{R>0&&(T._paths=null,y&&(s==1?(T.min=null,T.max=null):T.facets.forEach(L=>{L.min=null,L.max=null})))})}let uo=!1,Ql=!1,ma=[];function Zg(){Ql=!1;for(let y=0;y<ma.length;y++)vn(...ma[y]);ma.length=0}function cr(){uo||(O1(Ju),uo=!0)}function Jg(y,T=!1){uo=!0,Ql=T,y(i),Ju(),T&&ma.length>0&&queueMicrotask(Zg)}i.batch=Jg;function Ju(){if(tt&&(Wt(),tt=!1),G&&(qt(),G=!1),yt){if(Bt(f,Lr,we),Bt(f,Ra,Me),Bt(f,Na,se),Bt(f,Fa,$),Bt(g,Lr,we),Bt(g,Ra,Me),Bt(g,Na,se),Bt(g,Fa,$),Bt(h,Na,J),Bt(h,Fa,le),u.width=cn(J*wt),u.height=cn(le*wt),M.forEach(({_el:y,_show:T,_size:R,_pos:L,side:B})=>{if(y!=null)if(T){let Q=B===3||B===0?R:0,ue=B%2==1;Bt(y,ue?"left":"top",L-Q),Bt(y,ue?"width":"height",R),Bt(y,ue?"top":"left",ue?Me:we),Bt(y,ue?"height":"width",ue?$:se),Zh(y,Xs)}else ti(y,Xs)}),Ke=ke=_t=Ft=wn=gt=Ge=Zt=At=null,it=1,_a(!0),we!=De||Me!=lt||se!=_e||$!=Le){lr(!1);let y=se/_e,T=$/Le;if(de&&!Ae&&oe.left>=0){oe.left*=y,oe.top*=T,hr&&Li(hr,cn(oe.left),0,se,$),ur&&Li(ur,0,cn(oe.top),se,$);for(let R=0;R<Un.length;R++){let L=Un[R];L!=null&&(Oi[R]*=y,mi[R]*=T,Li(L,di(Oi[R]),di(mi[R]),se,$))}}if(kt.show&&!re&&kt.left>=0&&kt.width>0){kt.left*=y,kt.width*=y,kt.top*=T,kt.height*=T;for(let R in rc)Bt(pr,R,kt[R])}De=we,lt=Me,_e=se,Le=$}vn("setSize"),yt=!1}J>0&&le>0&&(d.clearRect(0,0,u.width,u.height),vn("drawClear"),U.forEach(y=>y()),vn("draw")),kt.show&&re&&(fo(kt),re=!1),de&&Ae&&(Ds(null,!0,!1),Ae=!1),me.show&&me.live&&he&&(ic(),he=!1),l||(l=!0,i.status=1,vn("ready")),Fe=!1,uo=!1}i.redraw=(y,T)=>{G=T||!1,y!==!1?as(C,b.min,b.max):cr()};function ec(y,T){let R=w[y];if(R.from==null){if(Y==0){let L=R.range(i,T.min,T.max,y);T.min=L[0],T.max=L[1]}if(T.min>T.max){let L=T.min;T.min=T.max,T.max=L}if(Y>1&&T.min!=null&&T.max!=null&&T.max-T.min<1e-16)return;y==C&&R.distr==2&&Y>0&&(T.min=Si(T.min,e[0]),T.max=Si(T.max,e[0]),T.min==T.max&&T.max++),j[y]=T,tt=!0,cr()}}i.setScale=ec;let tc,nc,hr,ur,Qu,ed,dr,fr,td,nd,Ot,Vt,rs=!1;const Tn=oe.drag;let mn=Tn.x,gn=Tn.y;de&&(oe.x&&(tc=ci(o1,g)),oe.y&&(nc=ci(l1,g)),b.ori==0?(hr=tc,ur=nc):(hr=nc,ur=tc),Ot=oe.left,Vt=oe.top);const kt=i.select=rn({show:!0,over:!0,left:0,width:0,top:0,height:0},n.select),pr=kt.show?ci(a1,kt.over?g:f):null;function fo(y,T){if(kt.show){for(let R in y)kt[R]=y[R],R in rc&&Bt(pr,R,y[R]);T!==!1&&vn("setSelect")}}i.setSelect=fo;function Qg(y){if(x[y].show)ie&&Zh(He[y],Xs);else if(ie&&ti(He[y],Xs),de){let R=Ei?Un[0]:Un[y];R!=null&&Li(R,-10,-10,se,$)}}function as(y,T,R){ec(y,{min:T,max:R})}function Ci(y,T,R,L){T.focus!=null&&s0(y),T.show!=null&&x.forEach((B,Q)=>{Q>0&&(y==Q||y==null)&&(B.show=T.show,Qg(Q),s==2?(as(B.facets[0].scale,null,null),as(B.facets[1].scale,null,null)):as(B.scale,null,null),cr())}),R!==!1&&vn("setSeries",y,T),L&&xa("setSeries",i,y,T)}i.setSeries=Ci;function e0(y,T){rn(I[y],T)}function t0(y,T){y.fill=ft(y.fill||null),y.dir=Mt(y.dir,-1),T=T??I.length,I.splice(T,0,y)}function n0(y){y==null?I.length=0:I.splice(y,1)}i.addBand=t0,i.setBand=e0,i.delBand=n0;function i0(y,T){x[y].alpha=T,de&&Un[y]!=null&&(Un[y].style.opacity=T),ie&&He[y]&&(He[y].style.opacity=T)}let Bi,os,Ps;const mr={focus:!0};function s0(y){if(y!=Ps){let T=y==null,R=jn.alpha!=1;x.forEach((L,B)=>{if(s==1||B>0){let Q=T||B==0||B==y;L._focus=T?null:Q,R&&i0(B,Q?1:jn.alpha)}}),Ps=y,R&&cr()}}ie&&$n&&D(sp,ge,y=>{oe._lock||(Sn(y),Ps!=null&&Ci(null,mr,!0,tn.setSeries))});function Ri(y,T,R){let L=w[T];R&&(y=y/wt-(L.ori==1?Me:we));let B=se;L.ori==1&&(B=$,y=B-y),L.dir==-1&&(y=B-y);let Q=L._min,ue=L._max,ve=y/B,Se=Q+(ue-Q)*ve,Pe=L.distr;return Pe==3?ea(10,Se):Pe==4?T1(Se,L.asinh):Pe==100?L.bwd(Se):Se}function r0(y,T){let R=Ri(y,C,T);return Si(R,e[0],K,V)}i.valToIdx=y=>Si(y,e[0]),i.posToIdx=r0,i.posToVal=Ri,i.valToPos=(y,T,R)=>w[T].ori==0?r(y,w[T],R?Ee:se,R?Ve:0):a(y,w[T],R?et:$,R?We:0),i.setCursor=(y,T,R)=>{Ot=y.left,Vt=y.top,Ds(null,T,R)};function id(y,T){Bt(pr,Lr,kt.left=y),Bt(pr,Na,kt.width=T)}function sd(y,T){Bt(pr,Ra,kt.top=y),Bt(pr,Fa,kt.height=T)}let ga=b.ori==0?id:sd,va=b.ori==1?id:sd;function a0(){if(ie&&me.live)for(let y=s==2?1:0;y<x.length;y++){if(y==0&&N)continue;let T=me.values[y],R=0;for(let L in T)rt[y][R++].firstChild.nodeValue=T[L]}}function ic(y,T){if(y!=null&&(y.idxs?y.idxs.forEach((R,L)=>{ae[L]=R}):R1(y.idx)||ae.fill(y.idx),me.idx=ae[0]),ie&&me.live){for(let R=0;R<x.length;R++)(R>0||s==1&&!N)&&o0(R,ae[R]);a0()}he=!1,T!==!1&&vn("setLegend")}i.setLegend=ic;function o0(y,T){let R=x[y],L=y==0&&H==2?Te:e[y],B;N?B=R.values(i,y,T)??Xt:(B=R.value(i,T==null?null:L[T],y,T),B=B==null?Xt:{_:B}),me.values[y]=B}function Ds(y,T,R){td=Ot,nd=Vt,[Ot,Vt]=oe.move(i,Ot,Vt),oe.left=Ot,oe.top=Vt,de&&(hr&&Li(hr,cn(Ot),0,se,$),ur&&Li(ur,0,cn(Vt),se,$));let L,B=K>V;Bi=Ut,os=null;let Q=b.ori==0?se:$,ue=b.ori==1?se:$;if(Ot<0||Y==0||B){L=oe.idx=null;for(let ve=0;ve<x.length;ve++){let Se=Un[ve];Se!=null&&Li(Se,-10,-10,se,$)}$n&&Ci(null,mr,!0,y==null&&tn.setSeries),me.live&&(ae.fill(L),he=!0)}else{let ve,Se,Pe;s==1&&(ve=b.ori==0?Ot:Vt,Se=Ri(ve,C),L=oe.idx=Si(Se,e[0],K,V),Pe=z(e[0][L],b,Q,0));let Ue=-10,Oe=-10,st=0,St=0,xt=!0,dt="",Je="";for(let $e=s==2?1:0;$e<x.length;$e++){let zt=x[$e],Yt=ae[$e],_n=Yt==null?null:s==1?e[$e][Yt]:e[$e][1][Yt],Pt=oe.dataIdx(i,$e,L,Se),jt=Pt==null?null:s==1?e[$e][Pt]:e[$e][1][Pt];if(he=he||jt!=_n||Pt!=Yt,ae[$e]=Pt,$e>0&&zt.show){let Kn=Pt==null?-10:Pt==L?Pe:z(s==1?e[0][Pt]:e[$e][0][Pt],b,Q,0),Fn=jt==null?-10:X(jt,s==1?w[zt.scale]:w[zt.facets[1].scale],ue,0);if($n&&jt!=null){let ai=b.ori==1?Ot:Vt,gi=hn(jn.dist(i,$e,Pt,Fn,ai));if(gi<Bi){let Pi=jn.bias;if(Pi!=0){let Zn=Ri(ai,zt.scale),oi=jt>=0?1:-1,vi=Zn>=0?1:-1;vi==oi&&(vi==1?Pi==1?jt>=Zn:jt<=Zn:Pi==1?jt<=Zn:jt>=Zn)&&(Bi=gi,os=$e)}else Bi=gi,os=$e}}if(he||Ei){let ai,gi;b.ori==0?(ai=Kn,gi=Fn):(ai=Fn,gi=Kn);let Pi,Zn,oi,vi,Di,On,Jn=!0,Ls=on.bbox;if(Ls!=null){Jn=!1;let kn=Ls(i,$e);oi=kn.left,vi=kn.top,Pi=kn.width,Zn=kn.height}else oi=ai,vi=gi,Pi=Zn=on.size(i,$e);if(On=on.fill(i,$e),Di=on.stroke(i,$e),Ei)$e==os&&Bi<=jn.prox&&(Ue=oi,Oe=vi,st=Pi,St=Zn,xt=Jn,dt=On,Je=Di);else{let kn=Un[$e];kn!=null&&(Oi[$e]=oi,mi[$e]=vi,up(kn,Pi,Zn,Jn),cp(kn,On,Di),Li(kn,di(oi),di(vi),se,$))}}}}if(Ei){let $e=jn.prox,zt=Ps==null?Bi<=$e:Bi>$e||os!=Ps;if(he||zt){let Yt=Un[0];Yt!=null&&(Oi[0]=Ue,mi[0]=Oe,up(Yt,st,St,xt),cp(Yt,dt,Je),Li(Yt,di(Ue),di(Oe),se,$))}}}if(kt.show&&rs)if(y!=null){let[ve,Se]=tn.scales,[Pe,Ue]=tn.match,[Oe,st]=y.cursor.sync.scales,St=y.cursor.drag;if(mn=St._x,gn=St._y,mn||gn){let{left:xt,top:dt,width:Je,height:$e}=y.select,zt=y.scales[Oe].ori,Yt=y.posToVal,_n,Pt,jt,Kn,Fn,ai=ve!=null&&Pe(ve,Oe),gi=Se!=null&&Ue(Se,st);ai&&mn?(zt==0?(_n=xt,Pt=Je):(_n=dt,Pt=$e),jt=w[ve],Kn=z(Yt(_n,Oe),jt,Q,0),Fn=z(Yt(_n+Pt,Oe),jt,Q,0),ga(Ti(Kn,Fn),hn(Fn-Kn))):ga(0,Q),gi&&gn?(zt==1?(_n=xt,Pt=Je):(_n=dt,Pt=$e),jt=w[Se],Kn=X(Yt(_n,st),jt,ue,0),Fn=X(Yt(_n+Pt,st),jt,ue,0),va(Ti(Kn,Fn),hn(Fn-Kn))):va(0,ue)}else ac()}else{let ve=hn(td-Qu),Se=hn(nd-ed);if(b.ori==1){let st=ve;ve=Se,Se=st}mn=Tn.x&&ve>=Tn.dist,gn=Tn.y&&Se>=Tn.dist;let Pe=Tn.uni;Pe!=null?mn&&gn&&(mn=ve>=Pe,gn=Se>=Pe,!mn&&!gn&&(Se>ve?gn=!0:mn=!0)):Tn.x&&Tn.y&&(mn||gn)&&(mn=gn=!0);let Ue,Oe;mn&&(b.ori==0?(Ue=dr,Oe=Ot):(Ue=fr,Oe=Vt),ga(Ti(Ue,Oe),hn(Oe-Ue)),gn||va(0,ue)),gn&&(b.ori==1?(Ue=dr,Oe=Ot):(Ue=fr,Oe=Vt),va(Ti(Ue,Oe),hn(Oe-Ue)),mn||ga(0,Q)),!mn&&!gn&&(ga(0,0),va(0,0))}if(Tn._x=mn,Tn._y=gn,y==null){if(R){if(md!=null){let[ve,Se]=tn.scales;tn.values[0]=ve!=null?Ri(b.ori==0?Ot:Vt,ve):null,tn.values[1]=Se!=null?Ri(b.ori==1?Ot:Vt,Se):null}xa(Xc,i,Ot,Vt,se,$,L)}if($n){let ve=R&&tn.setSeries,Se=jn.prox;Ps==null?Bi<=Se&&Ci(os,mr,!0,ve):Bi>Se?Ci(null,mr,!0,ve):os!=Ps&&Ci(os,mr,!0,ve)}}he&&(me.idx=L,ic()),T!==!1&&vn("setCursor")}let ls=null;Object.defineProperty(i,"rect",{get(){return ls==null&&_a(!1),ls}});function _a(y=!1){y?ls=null:(ls=g.getBoundingClientRect(),vn("syncRect",ls))}function rd(y,T,R,L,B,Q,ue){oe._lock||rs&&y!=null&&y.movementX==0&&y.movementY==0||(sc(y,T,R,L,B,Q,ue,!1,y!=null),y!=null?Ds(null,!0,!0):Ds(T,!0,!1))}function sc(y,T,R,L,B,Q,ue,ve,Se){if(ls==null&&_a(!1),Sn(y),y!=null)R=y.clientX-ls.left,L=y.clientY-ls.top;else{if(R<0||L<0){Ot=-10,Vt=-10;return}let[Pe,Ue]=tn.scales,Oe=T.cursor.sync,[st,St]=Oe.values,[xt,dt]=Oe.scales,[Je,$e]=tn.match,zt=T.axes[0].side%2==1,Yt=b.ori==0?se:$,_n=b.ori==1?se:$,Pt=zt?Q:B,jt=zt?B:Q,Kn=zt?L:R,Fn=zt?R:L;if(xt!=null?R=Je(Pe,xt)?o(st,w[Pe],Yt,0):-10:R=Yt*(Kn/Pt),dt!=null?L=$e(Ue,dt)?o(St,w[Ue],_n,0):-10:L=_n*(Fn/jt),b.ori==1){let ai=R;R=L,L=ai}}Se&&(T==null||T.cursor.event.type==Xc)&&((R<=1||R>=se-1)&&(R=Bs(R,se)),(L<=1||L>=$-1)&&(L=Bs(L,$))),ve?(Qu=R,ed=L,[dr,fr]=oe.move(i,R,L)):(Ot=R,Vt=L)}const rc={width:0,height:0,left:0,top:0};function ac(){fo(rc,!1)}let ad,od,ld,cd;function hd(y,T,R,L,B,Q,ue){rs=!0,mn=gn=Tn._x=Tn._y=!1,sc(y,T,R,L,B,Q,ue,!0,!1),y!=null&&(D(qc,jh,ud,!1),xa(np,i,dr,fr,se,$,null));let{left:ve,top:Se,width:Pe,height:Ue}=kt;ad=ve,od=Se,ld=Pe,cd=Ue}function ud(y,T,R,L,B,Q,ue){rs=Tn._x=Tn._y=!1,sc(y,T,R,L,B,Q,ue,!1,!0);let{left:ve,top:Se,width:Pe,height:Ue}=kt,Oe=Pe>0||Ue>0,st=ad!=ve||od!=Se||ld!=Pe||cd!=Ue;if(Oe&&st&&fo(kt),Tn.setScale&&Oe&&st){let St=ve,xt=Pe,dt=Se,Je=Ue;if(b.ori==1&&(St=Se,xt=Ue,dt=ve,Je=Pe),mn&&as(C,Ri(St,C),Ri(St+xt,C)),gn)for(let $e in w){let zt=w[$e];$e!=C&&zt.from==null&&zt.min!=Ut&&as($e,Ri(dt+Je,$e),Ri(dt,$e))}ac()}else oe.lock&&(oe._lock=!oe._lock,Ds(T,!0,y!=null));y!=null&&(E(qc,jh),xa(qc,i,Ot,Vt,se,$,null))}function l0(y,T,R,L,B,Q,ue){if(oe._lock)return;Sn(y);let ve=rs;if(rs){let Se=!0,Pe=!0,Ue=10,Oe,st;b.ori==0?(Oe=mn,st=gn):(Oe=gn,st=mn),Oe&&st&&(Se=Ot<=Ue||Ot>=se-Ue,Pe=Vt<=Ue||Vt>=$-Ue),Oe&&Se&&(Ot=Ot<dr?0:se),st&&Pe&&(Vt=Vt<fr?0:$),Ds(null,!0,!0),rs=!1}Ot=-10,Vt=-10,ae.fill(null),Ds(null,!0,!0),ve&&(rs=ve)}function dd(y,T,R,L,B,Q,ue){oe._lock||(Sn(y),je(),ac(),y!=null&&xa(rp,i,Ot,Vt,se,$,null))}function fd(){M.forEach($T),Re(i.width,i.height,!0)}Ys(Al,qr,fd);const gr={};gr.mousedown=hd,gr.mousemove=rd,gr.mouseup=ud,gr.dblclick=dd,gr.setSeries=(y,T,R,L)=>{let B=tn.match[2];R=B(i,T,R),R!=-1&&Ci(R,L,!0,!1)},de&&(D(np,g,hd),D(Xc,g,rd),D(ip,g,y=>{Sn(y),_a(!1)}),D(sp,g,l0),D(rp,g,dd),iu.add(i),i.syncRect=_a);const po=i.hooks=n.hooks||{};function vn(y,T,R){Ql?ma.push([y,T,R]):y in po&&po[y].forEach(L=>{L.call(null,i,T,R)})}(n.plugins||[]).forEach(y=>{for(let T in y.hooks)po[T]=(po[T]||[]).concat(y.hooks[T])});const pd=(y,T,R)=>R,tn=rn({key:null,setSeries:!1,filters:{pub:gp,sub:gp},scales:[C,x[1]?x[1].scale:null],match:[vp,vp,pd],values:[null,null]},oe.sync);tn.match.length==2&&tn.match.push(pd),oe.sync=tn;const md=tn.key,oc=Ug(md);function xa(y,T,R,L,B,Q,ue){tn.filters.pub(y,T,R,L,B,Q,ue)&&oc.pub(y,T,R,L,B,Q,ue)}oc.sub(i);function c0(y,T,R,L,B,Q,ue){tn.filters.sub(y,T,R,L,B,Q,ue)&&gr[y](null,T,R,L,B,Q,ue)}i.pub=c0;function h0(){oc.unsub(i),iu.delete(i),qe.clear(),Jh(Al,qr,fd),c.remove(),ge?.remove(),vn("destroy")}i.destroy=h0;function lc(){vn("init",n,e),ze(e||n.data,!1),j[C]?ec(C,j[C]):je(),re=kt.show&&(kt.width>0||kt.height>0),Ae=he=!0,Re(n.width,n.height)}return x.forEach(Cs),M.forEach(jl),t?t instanceof HTMLElement?(t.appendChild(c),lc()):t(i,lc):lc(),i}yn.assign=rn;yn.fmtNum=Gu;yn.rangeNum=Cl;yn.rangeLog=Vl;yn.rangeAsinh=Hu;yn.orient=rr;yn.pxRatio=wt;yn.join=F1;yn.fmtDate=$u,yn.tzDate=q1;yn.sync=Ug;{yn.addGap=RT,yn.clipGaps=$l;let n=yn.paths={points:Bg};n.linear=Vg,n.stepped=LT,n.bars=IT,n.spline=NT}const an={obs:"#2457d6",model:"#d9541a",astro:"#16857a",rain:"#6b9de8",muted:"#6a707a",faint:"#959aa3",grid:"rgba(20,23,28,0.07)",now:"#f2600c",peak:"#a8690a"},XT='10px "IBM Plex Mono", ui-monospace, monospace',ja=(n={})=>({stroke:an.faint,font:XT,grid:{stroke:an.grid,width:1},ticks:{show:!1},gap:4,...n}),Jc=Yh;function Xg({opts:n,data:e,height:t,now:i,keyStr:s,rows:r}){const a=Ji(null),o=Ji(null),l=Ji(i),c=Ji(r);return c.current=r,Xr(()=>{const u=a.current,d=n(),h={hooks:{draw:[m=>{const p=m.valToPos(l.current,"x",!0);if(!isFinite(p)||p<m.bbox.left||p>m.bbox.left+m.bbox.width)return;const x=m.ctx;x.save(),x.strokeStyle=an.now,x.lineWidth=1.5*devicePixelRatio,x.beginPath(),x.moveTo(p,m.bbox.top),x.lineTo(p,m.bbox.top+m.bbox.height),x.stroke(),x.fillStyle=an.now,x.beginPath(),x.arc(p,m.bbox.top,3*devicePixelRatio,0,Math.PI*2),x.fill(),x.restore()}]}},f={hooks:{setCursor:[m=>{const p=m.cursor.idx,x=Jc();if(p==null||m.cursor.left===void 0||m.cursor.left<0){x.style.display="none";return}const M=m.over.getBoundingClientRect();x.innerHTML=c.current(m,p).join("<br>"),x.style.display="block";const w=x.offsetWidth,I=M.left+m.cursor.left;x.style.left=`${I+14+w>innerWidth?I-w-14:I+14}px`,x.style.top=`${M.top+(m.cursor.top??0)+14}px`}]}},g=new yn({...d,width:u.clientWidth||300,height:t,plugins:[h,f]},e,u);o.current=g,g.over.addEventListener("mouseleave",()=>{Jc().style.display="none"});const _=new ResizeObserver(()=>{u.clientWidth&&g.setSize({width:u.clientWidth,height:t})});return _.observe(u),()=>{_.disconnect(),g.destroy(),o.current=null,Jc().style.display="none"}},[s,t]),Xr(()=>{o.current?.setData(e,!0)},[e]),Xr(()=>{l.current=i,o.current?.redraw(!1)},[i]),v("div",{class:"uchart",ref:a})}const zp=n=>Math.abs(n)>=100?n.toFixed(0):Math.abs(n)>=10?n.toFixed(1):n.toFixed(2);function Bp({d:n,now:e,height:t}){const s=[n.series[0]?.x??[],...n.series.map(l=>l.y.map(c=>c===null||!isFinite(c)?null:c))],r=`${n.kind}|${n.series.map(l=>l.name+l.color).join(",")}|${n.xMin}|${n.xMax}|${(n.markers??[]).map(l=>l.x).join(",")}`;return v(Xg,{opts:()=>({padding:[10,4,0,0],cursor:{y:!1,points:{size:6}},legend:{show:!1},scales:{x:{time:!1,range:[n.xMin,n.xMax]},y:n.kind==="bar"?{range:(l,c,u)=>[0,Math.max(10,u*1.1)]}:{}},axes:[ja({values:(l,c)=>c.map(u=>n.xTick(u)),space:56,incrs:[3,6,12,24]}),ja({size:36,values:(l,c)=>c.map(u=>zp(u))})],series:[{},...n.series.map(l=>n.kind==="bar"?{stroke:l.color,fill:l.color+"b0",width:0,paths:yn.paths.bars({size:[.75,40],align:0}),points:{show:!1}}:{stroke:l.color,width:l.dashed?1.25:1.75,dash:l.dashed?[4,3]:void 0,points:{show:!1}})],hooks:{draw:[l=>{for(const c of n.markers??[]){const u=l.valToPos(c.x,"x",!0),d=l.valToPos(c.y,"y",!0),h=l.ctx;h.save(),h.fillStyle=c.color,h.strokeStyle="#fff",h.lineWidth=2*devicePixelRatio,h.beginPath(),h.arc(u,d,4*devicePixelRatio,0,Math.PI*2),h.fill(),h.stroke(),h.restore()}}]}}),data:s,height:t,now:e,keyStr:r,rows:(l,c)=>[`<b>${n.xTick(l.data[0][c])}</b>`,...n.series.map((u,d)=>{const h=l.data[d+1][c];return h==null?"":`<i style="background:${u.color}"></i>${u.name}: ${zp(h)} ${n.unit}`}).filter(Boolean)]})}function qT({pins:n,t:e,sel:t,f:i,height:s,labels:r}){const a=.08333333333333333,o=Math.round(i.hours/a)+1,l=Array.from({length:o},(_,m)=>m*a),c=(_,m,p,x=!1)=>{if(!_.length||p<_[0]-1e-9||p>_[_.length-1]+1e-9)return x&&_.length&&p>=_[0]?m[m.length-1]:null;let M=0,w=_.length-1;for(;w-M>1;){const C=M+w>>1;_[C]<=p?M=C:w=C}if(w===M)return m[M];const I=(p-_[M])/(_[w]-_[M]||1);return m[M]+(m[w]-m[M])*I},u=(_,m,p)=>{let x=0;for(let M=0;M<_.length&&_[M]<=p;M++)x=m[M];return x},d=[l,...n.map(_=>l.map(m=>c(e,_.depth,m))),l.map(_=>c(i.tide.x,i.tide.y,_)),l.map(_=>u(i.rain.x,i.rain.y,_))],h=`${n.map(_=>`${_.id}:${_.name}:${_.color}`).join("|")}|${t}|${i.hours}`,f=()=>({padding:[10,2,0,0],cursor:{y:!1,points:{size:6}},legend:{show:!1},scales:{x:{time:!1,range:[0,i.hours]},m:{range:(_,m,p)=>[0,Math.max(.3,(p??0)*1.15)]},mpd:{},mm:{range:(_,m,p)=>[0,Math.max(10,(p??0)*2.4)]}},axes:[ja({values:(_,m)=>m.map(p=>i.xTick(p)),space:56,incrs:[3,6,12,24]}),ja({scale:"m",size:34,values:(_,m)=>m.map(p=>p.toFixed(p>=1?1:2))}),ja({scale:"mpd",side:1,size:34,grid:{show:!1},stroke:an.model,values:(_,m)=>m.map(p=>p.toFixed(1))})],series:[{},...n.map(_=>({scale:"m",stroke:Xa(_.color),width:_.id===t||t===null?2:1.25,fill:_.id===t?Xa(_.color)+"22":void 0,points:{show:!1}})),{scale:"mpd",stroke:an.model+"aa",width:1.25,dash:[4,3],points:{show:!1}},{scale:"mm",stroke:an.rain,fill:an.rain+"40",width:0,paths:yn.paths.bars({size:[1,20],align:1}),points:{show:!1}}]}),g=(_,m)=>{const p=[`<b>${i.xTick(_.data[0][m])}</b>`];n.forEach((w,I)=>{const C=_.data[I+1][m];C!=null&&p.push(`<i style="background:${Xa(w.color)}"></i>${w.name}: ${C.toFixed(2)} m`)});const x=_.data[n.length+1][m],M=_.data[n.length+2][m];return x!=null&&p.push(`<i style="background:${an.model}"></i>${r.sea}: ${x.toFixed(2)} mPD`),M!=null&&p.push(`<i style="background:${an.rain}"></i>${r.rain}: ${M.toFixed(0)} mm/h`),p};return v(Xg,{opts:f,data:d,height:s,now:i.cursor,keyStr:h,rows:g})}function YT(){const n=Z.rightTab.value,e=Z.validation.value.points.length,t=Z.pins.value.list.length,i=r=>{Z.rightTab.value=r,zl("hkfl.ui.right",r)},s=[["overview",fe("概览","Overview"),null],["validation",fe("验证","Validation"),e],["pins",fe("钉点","Pins"),t],["forcing",k("forcing"),null]];return v("aside",{class:"inspector float",id:"right","aria-label":k("comparison"),children:[v("div",{class:"tabs",role:"tablist",children:[s.map(([r,a,o])=>v("button",{role:"tab","aria-selected":n===r,class:n===r?"on":"","data-tab":r,onClick:()=>i(r),children:[a,o?v("span",{class:"n",children:o}):null]},r)),v("span",{class:`live ${Z.playing.value?"on":""}`,children:Z.playing.value?k("running"):k("paused")})]}),v("div",{class:"p-body",children:[n==="overview"&&v(jT,{}),n==="validation"&&v(eE,{}),n==="pins"&&v(tE,{}),n==="forcing"&&v(nE,{})]})]})}function Da({a:n,b:e,unit:t,digits:i}){const s=n-e,r=Math.abs(s)<Math.pow(10,-i)/2?"":s>0?"bad":"good";return v("span",{class:`delta ${r}`,title:fe("含措施 − 基线","with measures − baseline"),children:[r&&v(Qe,{name:s>0?"up":"down",size:11}),s>=0?"+":"−",Math.abs(s).toFixed(i),t?` ${t}`:""]})}function La({k:n,v:e,unit:t,foot:i}){return v("div",{class:"stat",children:[v("div",{class:"k",title:n,children:n}),v("div",{class:"v",children:[e,t&&v("span",{class:"u",children:t})]}),v("div",{class:"f",children:i})]})}function jT(){const n=Z.metrics.value,e=Z.compare.value?Z.baseMetrics.value:null,t=Z.scene.value,[i,s]=Tl(k("hotspots")),[r,a]=Tl(k("facilities"));return v(pt,{children:[v(un,{title:k("metrics"),hint:Z.waterMode.value==="max"?"":fe("至此为止的最大值","maxima so far"),children:[v("div",{id:"metrics",children:v(KT,{m:n,base:e})}),Z.compare.value&&v("div",{class:"cmp-note",children:[v(Qe,{name:"compare",size:13}),v("span",{children:[k("splitNote"),v("br",{}),k("vsBase")]})]})]}),v(un,{title:i,hint:s,children:v("div",{id:"hotspots",children:v(ZT,{})})}),t?.facilities?.length?v(un,{title:r,hint:a,children:v("div",{id:"facTable",children:v(JT,{})})}):null]})}function KT({m:n,base:e}){if(!n)return v("div",{class:"stats",children:[k("maxDepth"),k("floodedArea"),k("severeArea"),k("bldAffected")].map(s=>v(La,{k:s,v:"—",unit:"",foot:k("noMetrics")},s))});const t=eg(n.maxDepth),i=n.floodedAreaKm2>0?n.floodedAreaSevereKm2/n.floodedAreaKm2*100:0;return v(pt,{children:[v("div",{class:"stats",children:[v(La,{k:k("maxDepth"),v:n.maxDepth.toFixed(2),unit:"m",foot:e?v(Da,{a:n.maxDepth,b:e.maxDepth,unit:"m",digits:2}):v(pt,{children:[v("span",{class:"swatch",style:{background:Bl(n.maxDepth)}}),Ou()[t]]})}),v(La,{k:k("floodedArea"),v:n.floodedAreaKm2.toFixed(3),unit:"km²",foot:e?v(Da,{a:n.floodedAreaKm2,b:e.floodedAreaKm2,unit:"km²",digits:3}):`${(n.floodedAreaKm2*100).toFixed(1)} ha`}),v(La,{k:k("severeArea"),v:n.floodedAreaSevereKm2.toFixed(3),unit:"km²",foot:e?v(Da,{a:n.floodedAreaSevereKm2,b:e.floodedAreaSevereKm2,unit:"km²",digits:3}):`${i.toFixed(0)}% ${k("ofFlooded")}`}),v(La,{k:k("bldAffected"),v:String(n.buildingsAffected),unit:"",foot:e?v(Da,{a:n.buildingsAffected,b:e.buildingsAffected,unit:"",digits:0}):k("bldRule")})]}),v("div",{class:"readouts",children:[v("div",{children:[k("volume"),v("b",{children:[n.volumeMm3.toFixed(3)," Mm³"]}),e&&v(Da,{a:n.volumeMm3,b:e.volumeMm3,unit:"Mm³",digits:3})]}),v("div",{children:[k("gaugeNow"),v("b",{children:Object.entries(n.gaugeLevels).map(([s,r])=>`${s} ${r.toFixed(2)} mPD`).join(" · ")||"—"})]})]})]})}function ZT(){const n=Z.hotspots.value;return n.length?v(pt,{children:n.map((e,t)=>v("div",{class:"hot","data-hot":t,role:"button",tabIndex:0,onClick:()=>Be.onHotspot(e.x,e.y),onKeyDown:i=>{i.key==="Enter"&&Be.onHotspot(e.x,e.y)},title:k("flyTo"),children:[v("span",{class:"rank",children:String(t+1).padStart(2,"0")}),v("div",{class:"h-main",children:[v("div",{class:"h-top",children:[v("span",{class:"h-name",children:e.name??""}),e.area?v("span",{class:"h-area",children:[(e.area/1e4).toFixed(1)," ha"]}):null,v("span",{class:"h-d",children:[e.depth.toFixed(2)," m"]})]}),v("div",{class:"h-bar",children:v("i",{style:{width:`${Math.min(100,e.depth/3*100).toFixed(1)}%`,background:Bl(e.depth)}})})]}),v(Qe,{name:"flyto",size:13,cls:"h-fly"})]},t))}):v("div",{class:"empty",children:[v(Qe,{name:"inbox",size:16}),v("span",{children:k("noHot")})]})}function JT(){const{m:n,base:e}=Z.facilities.value,t=Z.compare.value?e:null,i=Z.scene.value?.facilities;if(!i||!n?.facDepths)return v("div",{class:"empty",children:[v(Qe,{name:"inbox",size:16}),v("span",{children:k("noMetrics")})]});const r=i.map(o=>({f:o,d:n.facDepths[o.id]??0,b:t?.facDepths?.[o.id]})).sort((o,l)=>Math.max(l.d,l.b??0)-Math.max(o.d,o.b??0)).filter(o=>Math.max(o.d,o.b??0)>=.15),a=o=>v("span",{class:`pill num ${o>=.5?"bad":o>=.15?"warn":"ok"}`,children:o.toFixed(2)});return r.length?v(pt,{children:[v("table",{class:"tbl",children:[v("thead",{children:v("tr",{children:[v("th",{children:k("facility")}),t&&v("th",{class:"r",children:"A"}),v("th",{class:"r",children:[t?"B":k("maxDepth")," (m)"]})]})}),v("tbody",{children:r.slice(0,14).map(o=>v("tr",{children:[v("td",{children:v("div",{class:"fname",children:[v(Lb,{html:El[o.f.type]??""}),v("div",{children:[o.f.name,v("div",{class:"sub",children:k("ft_"+o.f.type)})]})]})}),t&&v("td",{class:"n",children:a(o.b??0)}),v("td",{class:"n",children:a(o.d)})]},o.f.id))})]}),v("p",{class:"caveat",children:[v(Qe,{name:"info",size:12}),v("span",{children:[r.length,"/",i.length," ",fe("受影响（≥ 0.15 m）","affected (≥ 0.15 m)"),r.length>14?fe("，仅列前 14",", top 14 shown"):"",t?` · A = ${k("baseline")}, B = ${k("withMeasures")}`:""]})]})]}):v("div",{class:"empty",children:[v(Qe,{name:"check",size:16}),v("span",{children:["0/",i.length," ",fe("受影响（≥ 0.15 m）","affected (≥ 0.15 m)")]})]})}function QT(n,e){if(e===void 0)return"";const t=n.cls==="none"?0:n.depth,i=Math.max(.35,.5*t);return n.unrep||n.berm!==void 0&&e<.05?"unrep":n.cls==="none"?e<.2?"hit":"over":n.lower?e>=t-i?"hit":"under":Math.abs(e-t)<=i?"hit":e<t?"under":"over"}function eE(){const{points:n,m:e}=Z.validation.value,[t,i]=ao(new Set);if(!n.length)return v("section",{class:"blk",children:v("div",{class:"empty",children:[v(Qe,{name:"inbox",size:16}),v("span",{children:k("noVal")})]})});const s=Z.scene.value?.facilities??[],r=n.map(c=>QT(c,e?.valDepths[c.id])),a={hit:0,under:0,over:0,unrep:0};let o=0;r.forEach(c=>{c&&(o++,a[c]++)});const l=c=>{const u=new Set(t);u.has(c)?u.delete(c):u.add(c),i(u)};return v("section",{class:"blk",id:"valTable",children:[v("div",{class:"blk-h",children:v("span",{class:"micro",children:k("validation")})}),v("div",{class:"score",children:[v("div",{class:"big",children:[o?a.hit:"—",v("small",{children:["/ ",o||n.length]})]}),v("div",{class:"side",children:[v("div",{class:"cnt",children:[v("span",{children:[k("hit")," ",v("b",{children:a.hit})]}),v("span",{children:[k("under")," ",v("b",{children:a.under})]}),v("span",{children:[k("over")," ",v("b",{children:a.over})]}),a.unrep>0&&v("span",{children:[k("unrep")," ",v("b",{children:a.unrep})]})]}),v("div",{class:"ticks",children:r.map((c,u)=>v("i",{class:c},u))})]})]}),v("div",{class:"val-head",children:k("valHead")}),v("table",{class:"tbl",children:[v("thead",{children:v("tr",{children:[v("th",{children:k("place")}),v("th",{class:"r",children:[k("observed")," (m)"]}),v("th",{class:"r",children:[k("simulated")," (m)"]}),v("th",{})]})}),v("tbody",{children:n.map((c,u)=>{const d=e?.valDepths[c.id],h=c.cls==="none"?0:c.depth,f=r[u],g=c.grade,_=t.has(c.id),m=c.cls==="none"?"":g==="B"?"±0.3":g==="C"?"±50%":g==="D"?k("estimated"):"",p=c.ug?s.find(w=>w.id===c.ug):void 0,x=[c.ug?k("ugDepth")+(p?.ug?` · ${fe("楼面","floor")} ${Math.round(p.ug.area).toLocaleString()} m²`:""):k("streetDepth"),c.snapped_m?k("snapped").replace("{d}",c.snapped_m.toFixed(0)):"",c.berm!==void 0?k("bermNote").replace("{z}",c.berm.toFixed(1)):""].filter(Boolean).join(fe("；","; ")),M=c.note_zh?fe(c.note_zh,c.note_en??c.note_zh):"";return[v("tr",{class:`vrow ${_?"open":""}`,"data-vrow":c.id,onClick:()=>l(c.id),title:c.src,children:[v("td",{children:v("div",{class:"fname",children:[g&&v("span",{class:`grade ${g}`,title:k("grade"+g),children:g}),v("span",{children:[fe(c.zh,c.en),c.ug?v("span",{class:"tag",children:fe("地库","basement")}):c.berm!==void 0?v("span",{class:"tag",children:fe("阶地","berm")}):null]})]})}),v("td",{class:"n",children:[c.cls==="none"?fe("无水浸","none"):`${c.lower?"≥":""}${c.depth.toFixed(1)}`,m&&v("div",{class:"unc",children:m})]}),v("td",{class:"n",children:[d===void 0?"—":d.toFixed(2),d!==void 0&&f!=="unrep"&&!(c.lower&&d>=h)&&v("div",{class:"unc",children:["Δ ",d-h>=0?"+":"−",Math.abs(d-h).toFixed(2)]})]}),v("td",{class:"r",children:f?v("span",{class:`pill ${f==="hit"?"ok":f}`,children:k(f)}):v("span",{class:"pill mute",children:"—"})})]},c.id),_&&v("tr",{class:"vdet",children:v("td",{colSpan:4,children:v("dl",{class:"vdet-b",children:[g&&v(pt,{children:[v("dt",{children:fe("可信度","Reliability")}),v("dd",{children:[k("grade"+g),m?` (${m})`:""]})]}),c.basis&&v(pt,{children:[v("dt",{children:k("basis")}),v("dd",{children:c.basis})]}),v("dt",{children:k("sampling")}),v("dd",{children:x}),M&&v(pt,{children:[v("dt",{children:k("modelNotes")}),v("dd",{children:M})]}),v("dt",{children:k("source")}),v("dd",{children:c.src})]})})},c.id+"_d")]})})]}),v("p",{class:"caveat",children:[v(Qe,{name:"info",size:12}),v("span",{children:k("hitRule")})]})]})}function tE(){const{list:n,t:e,sel:t,f:i}=Z.pins.value;return n.length?v("section",{class:"blk",id:"pinBox",children:[v("div",{class:"blk-h",children:[v("span",{class:"micro",children:k("pins")}),v("span",{class:"hint"}),v("span",{class:"n",children:n.length})]}),n.map(s=>{const r=s.depth.length?s.depth[s.depth.length-1]:null,a=s.depth.length?Math.max(...s.depth):null;return v("div",{class:`pin-row ${s.id===t?"sel":""}`,"data-pin":s.id,onClick:o=>{o.target.tagName!=="INPUT"&&Be.onSelectPin(t===s.id?null:s.id)},children:[v("span",{class:"dot",style:{background:Xa(s.color)}}),v("input",{defaultValue:s.name,"aria-label":k("f_name"),onKeyDown:o=>{o.stopPropagation(),o.key==="Enter"&&o.currentTarget.blur()},onChange:o=>{const l=o.currentTarget.value.trim();Be.onRenamePin(s.id,l||s.name)}}),v("span",{class:"pv",children:r===null?"—":v(pt,{children:[v("b",{children:[r.toFixed(2)," m"]}),v("br",{}),k("pinMax")," ",a.toFixed(2)]})}),v("span",{style:{display:"flex"},children:[v("button",{class:"btn sm icon ghost",title:k("flyTo"),onClick:o=>{o.stopPropagation(),Be.onFlyPin(s.id)},children:v(Qe,{name:"flyto",size:13})}),v("button",{class:"btn sm icon ghost",title:k("delete"),onClick:o=>{o.stopPropagation(),Be.onRemovePin(s.id)},children:v(Qe,{name:"x",size:13})})]})]},s.id)}),i&&v(pt,{children:[v("div",{class:"chart-key",style:{marginTop:"12px"},children:[n.map(s=>v("span",{children:[v("i",{style:{background:Xa(s.color)}}),s.name]},s.id)),v("span",{children:[v("i",{class:"dash",style:{color:"var(--c-model)"}}),fe("边界潮位 (mPD)","Sea level (mPD)")]}),v("span",{children:[v("i",{class:"bar",style:{background:"var(--c-rain)",opacity:.5}}),fe("雨强","Rain")]})]}),v(qT,{pins:n,t:e,sel:t,f:i,height:200,labels:{sea:fe("边界潮位","Sea level"),rain:fe("雨强","Rain")}})]}),v("div",{class:"row",style:{marginTop:"10px"},children:[v("button",{class:"btn sm",onClick:()=>Be.onPinMode(),children:[v(Qe,{name:"pin",size:13}),k("pinAdd")]}),v("span",{class:"grow"}),v("button",{class:"btn sm",onClick:()=>Be.onExportPins(),children:[v(Qe,{name:"download",size:13}),k("exportCsv")]})]}),v("p",{class:"caveat",children:[v(Qe,{name:"info",size:12}),v("span",{children:k("pinRerun")})]})]}):v("section",{class:"blk",children:v("div",{class:"empty",children:[v(Qe,{name:"pin",size:16}),v("span",{children:[k("pinEmpty"),v("br",{}),v("button",{class:"btn sm",style:{marginTop:"10px"},onClick:()=>Be.onPinMode(),children:[v(Qe,{name:"pin",size:13}),k("pinAdd")]})]})]})})}function nE(){const n=Z.charts.value,e=Z.chartCursor.value,t=Z.event.value,[i,s]=Db(k("tideChart")),[r,a]=Tl(k("rainChart")),o=l=>v("div",{class:"chart-key",children:[l.series.map(c=>v("span",{children:[v("i",{class:l.kind==="bar"?"bar":c.dashed?"dash":"",style:c.dashed?{color:c.color}:{background:c.color}}),c.name]},c.name)),(l.markers??[]).map(c=>v("span",{children:[v("i",{class:"dot",style:{background:c.color}}),c.label]},c.label))]});return v(pt,{children:[v(un,{title:i,hint:s,children:n?v(pt,{children:[o(n.tide),v(Bp,{d:n.tide,now:e,height:170})]}):null}),v(un,{title:r,hint:a,children:n?v(pt,{children:[o(n.rain),v(Bp,{d:n.rain,now:e,height:120})]}):null}),t&&v(un,{title:k("sources"),n:t.sources.length,children:v("ol",{class:"sources",children:t.sources.map((l,c)=>v("li",{children:l},c))})})]})}function iE(){const n=Z.active.value,e=(t,i,s,r,a)=>v("button",{id:t,class:`btn icon ${r?"on":""}`,"aria-label":s,"aria-pressed":r,"data-tip":s,"data-tip-pos":"left",onClick:a,children:v(Qe,{name:i,size:16})});return v("div",{class:"mapctl",children:[v("div",{class:"ctl-stack float",role:"toolbar","aria-label":fe("相机","Camera"),children:[e("btnBird","bird",k("camBird"),!1,()=>Be.onCamera("bird")),e("btnStreet","street",k("camStreet"),!1,()=>Be.onCamera("street")),e("btnFollow","target",k("camFollow"),!!n.btnFollow,()=>Be.onCamera("follow")),v("hr",{}),e("btnOrbit","orbit",fe("自动环绕","Orbit"),!!n.btnOrbit,()=>Be.onOrbit()),e("btnTour","tour",fe("电影式飞览","Cinematic tour"),!!n.btnTour,()=>Be.onTour())]}),v("div",{class:"ctl-stack float",children:[v("button",{id:"btnExag",class:`btn icon txt ${Z.exag.value!==1?"on":""}`,"data-tip":k("exag"),"data-tip-pos":"left",onClick:()=>Be.onExag(),children:["×",Z.exag.value]}),e("btnTex","map",Z.texMode.value==="imagery"?fe("切换到地图底图","Switch to map basemap"):fe("切换到卫星影像","Switch to imagery"),!1,()=>Be.onTexToggle())]})]})}function sE(){const[n,e]=ao(()=>{try{return localStorage.getItem("hkfl.ui.lgkeys")!=="0"}catch{return!0}}),t=Z.waterMode.value==="max",i=Ou();return v("div",{class:"legend float",id:"legend",children:[v("div",{class:"lg-h",children:[v("span",{class:"lg-t",id:"legendTitle",children:k(t?"legendMax":"legendNow")}),v("span",{class:"lg-u",children:"m"}),v("span",{class:"grow"}),v("button",{class:"toggle","aria-label":fe("图例说明","Legend keys"),"aria-expanded":n,onClick:()=>{e(!n),zl("hkfl.ui.lgkeys",n?"0":"1")},children:v(Qe,{name:"chev",size:14,cls:n?"":"rot"})})]}),v("div",{class:"steps",id:"legendSteps",children:Pb.map(s=>v("i",{style:{background:Bl(s)}},s))}),v("div",{class:"breaks",children:["0.1","0.3","0.5","1","2"].map((s,r)=>v("span",{style:{left:`${(r+1)/6*100}%`},children:s},s))}),v("div",{class:"classes",id:"legendCls",children:i.map(s=>v("span",{children:s},s))}),n&&v("div",{class:"lg-keys",id:"legendKeys",children:[v("span",{children:[v("i",{class:"edge"}),k("lg_edge")]}),v("span",{children:[v("i",{class:"rise"}),k("lg_rise")]}),v("span",{children:[v("i",{class:"trace"}),k("lg_trace")]}),v("span",{children:[v("i",{class:"pt",style:{background:"var(--warn-dot)"}}),k("lg_val")]}),v("span",{children:[v("i",{class:"pt",style:{background:"var(--blue)"}}),k("lg_gauge")]}),v("span",{children:[v("i",{class:"pt",style:{background:"var(--bad)"}}),k("lg_fac")]})]})]})}const rE={60:["1分","1m"],300:["5分","5m"],900:["15分","15m"],1800:["30分","30m"],3600:["1时","1h"]},En={rainY:30,rainH:22,seaY:56,seaH:30};function Hp(n,e){const t=Math.min(devicePixelRatio,2),i=n.clientWidth||600,s=n.clientHeight||90;(n.width!==i*t||n.height!==s*t)&&(n.width=i*t,n.height=s*t);const r=n.getContext("2d");r.setTransform(t,0,0,t,0,0),r.clearRect(0,0,i,s);const a=h=>h/e.hours*i,o=Math.min(En.seaH,s-En.seaY-2);r.fillStyle="rgba(20,23,28,0.035)",r.fillRect(0,En.rainY,i,En.rainH),r.fillRect(0,En.seaY,i,o);const l=e.hours>30?6:3;r.font='10px "IBM Plex Mono", ui-monospace, monospace',r.textAlign="center";for(let h=0;h<=e.hours+1e-6;h+=l){const f=Math.round(a(h))+.5;r.fillStyle="rgba(20,23,28,0.08)",r.fillRect(f-.5,En.rainY,1,En.seaY+o-En.rainY),h>0&&h<e.hours-.01&&(r.fillStyle=an.faint,r.fillText(e.tick(h),f,10))}const c=Math.max(10,...e.rain.y),u=Math.max(1,i/Math.max(1,e.hours)-1.5);r.fillStyle=an.rain;for(let h=0;h<e.rain.x.length;h++){const f=e.rain.y[h]/c*(En.rainH-3);f>.3&&r.fillRect(a(e.rain.x[h])+.75,En.rainY+En.rainH-f,u,f)}if(e.tide.y.length){const h=Math.min(...e.tide.y),f=Math.max(...e.tide.y),g=_=>En.seaY+o-3-(_-h)/Math.max(.05,f-h)*(o-8);r.beginPath(),e.tide.x.forEach((_,m)=>{const p=a(_),x=g(e.tide.y[m]);m===0?r.moveTo(p,x):r.lineTo(p,x)}),r.strokeStyle=an.model,r.lineWidth=1.5,r.lineJoin="round",r.stroke(),r.lineTo(a(e.tide.x[e.tide.x.length-1]),En.seaY+o),r.lineTo(a(e.tide.x[0]),En.seaY+o),r.closePath(),r.fillStyle="rgba(217,84,26,0.08)",r.fill(),r.font='9.5px "IBM Plex Mono", ui-monospace, monospace',r.textAlign="right",r.fillStyle=an.model,r.fillText(`${f.toFixed(1)}`,i-4,En.seaY+10)}r.font='9.5px "IBM Plex Sans", "Noto Sans SC", sans-serif',r.textAlign="left";const d=(h,f)=>{const g=r.measureText(h).width;r.fillStyle="rgba(251,251,252,0.85)",r.fillRect(3,f+2,g+8,13),r.fillStyle=an.muted,r.fillText(h,7,f+12)};d(fe("雨强 mm/h","Rain mm/h"),En.rainY),d(fe("潮位 mPD","Sea level mPD"),En.seaY)}function aE(){const n=Z.timeline.value,{label:e,frac:t}=Z.time.value,i=Z.playing.value,s=Ji(null),r=Ji(null),[a,o]=ao(null),l=Ji(!1);Xr(()=>{n&&s.current&&Hp(s.current,n)},[n]),Xr(()=>{const p=r.current;if(!p)return;const x=new ResizeObserver(()=>{const M=Z.timeline.value;M&&s.current&&Hp(s.current,M)});return x.observe(p),()=>x.disconnect()},[]);const c=p=>{const x=r.current.getBoundingClientRect();return Math.min(1,Math.max(0,(p.clientX-x.left)/x.width))},u=(p,x)=>{const M=Yh();M.innerHTML=p,M.style.display="block";const w=r.current.getBoundingClientRect(),I=M.offsetWidth;M.style.left=`${Math.min(innerWidth-I-8,Math.max(8,x-I/2))}px`,M.style.top=`${w.top-M.offsetHeight-10}px`},d=()=>{Yh().style.display="none"},[h,f]=e.includes(",")?[e.split(",")[0],e.split(",")[1].replace("HKT","").trim()]:["",e],g=Z.cond.value,_=Z.trend.value,m=g?.signal?fe(g.signal[0],g.signal[1]):"";return v("div",{class:"timeline float",id:"bottom",children:[v("div",{class:"tl-ctl",children:[v("div",{class:"tl-top",children:[v("button",{id:"btnPlay",class:`play ${i?"on":""}`,"aria-label":`${k("play")} / ${k("pause")}`,"data-tip":`${k("play")} / ${k("pause")} · Space`,"data-tip-pos":"right",onClick:()=>Be.onPlayToggle(),children:v(Qe,{name:i?"pause":"play",size:17})}),v("div",{class:"clock",id:"timeLabel",children:[v("span",{class:"d",children:h?`${h} · HKT`:"HKT"}),v("span",{class:"t",children:f})]}),v("span",{class:"grow"}),v("button",{id:"btnReset",class:"btn sm icon ghost","aria-label":fe("重置","Reset"),"data-tip":fe("从头重算","Restart the run"),onClick:()=>Be.onReset(),children:v(Qe,{name:"reset",size:14})})]}),v(zr,{id:"speedBtns",cls:"full",items:Ab.map(p=>[p,rE[p][Z.lang.value==="zh"?0:1]]),value:Z.speed.value,onPick:p=>Be.onSpeed(p)})]}),v("div",{class:"lanes",children:v("div",{id:"scrub",ref:r,tabIndex:0,role:"slider","aria-label":fe("时间轴","Timeline"),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(t*100),"aria-valuetext":e,onPointerDown:p=>{p.target.closest(".tmark")||(l.current=!0,p.currentTarget.setPointerCapture(p.pointerId))},onPointerMove:p=>{const x=p.target.closest(".tmark");if(x&&!l.current&&n){const w=n.marks[+x.dataset.mark];o(null),u(`<b>${fe(w.zh,w.en)}</b><br>${n.fmt(w.h)}`,p.clientX);return}const M=c(p);o(M),n&&u(`<b>${n.fmt(M*n.hours)}</b>`,p.clientX)},onPointerUp:p=>{l.current&&(l.current=!1,Be.onSeek(c(p)))},onPointerCancel:()=>{l.current=!1,o(null),d()},onPointerLeave:()=>{l.current||(o(null),d())},onKeyDown:p=>{if(!n)return;const x=.5/Math.max(1,n.hours),M=p.key==="ArrowRight"?t+x:p.key==="ArrowLeft"?t-x:p.key==="Home"?0:p.key==="End"?1:null;M!==null&&(p.preventDefault(),p.stopPropagation(),Be.onSeek(Math.min(1,Math.max(0,M))))},children:[v("canvas",{id:"scrubCanvas",ref:s}),v("div",{class:"played",style:{width:`${(t*100).toFixed(3)}%`}}),n&&n.marks.filter(p=>p.h>=0&&p.h<=n.hours).map((p,x)=>v("span",{class:`tmark ${p.kind} ${p.tone??""}`,"data-mark":n.marks.indexOf(p),style:{left:`${(p.h/n.hours*100).toFixed(3)}%`},onClick:()=>Be.onSeek(Math.min(1,Math.max(0,p.h/n.hours)))},x)),v("div",{class:"ghost",style:{display:a===null?"none":"block",left:`${((a??0)*100).toFixed(3)}%`}}),v("div",{class:"playhead",id:"playhead",style:{left:`${(t*100).toFixed(3)}%`}})]})}),v("div",{class:"tl-now",id:"stepInfo",children:[v("div",{class:"row2",children:[v("span",{class:"micro",style:{color:"var(--text-2)"},children:fe("此刻","Now")}),v("span",{class:"grow"}),_&&v("span",{class:`trend ${_.dir}`,title:k("trendTip"),children:[_.dir!=="flat"&&v(Qe,{name:_.dir==="up"?"up":"down",size:11}),k(_.dir==="up"?"trendUp":_.dir==="down"?"trendDown":"trendFlat"),_.dir!=="flat"&&v("b",{children:[_.rate>0?"+":"−",Math.abs(_.rate*1e3).toFixed(0),"k m³/h"]})]})]}),g?v(pt,{children:[v("div",{class:"kv",children:[v("div",{children:[k("c_sea"),v("b",{children:[g.tide.toFixed(2),v("u",{children:"mPD"})]})]}),v("div",{children:[k("c_rain"),v("b",{children:[g.rain.toFixed(0),v("u",{children:"mm/h"})]})]}),v("div",{children:["Hs",v("b",{children:[g.hs.toFixed(1),v("u",{children:"m"})]})]})]}),v("div",{class:"row2",children:m?v("span",{class:`sig ${tg(g.signal[1])}`,title:m,children:m}):v("span",{class:"storm",children:fe("无警告信号","No warning signal")})}),v("div",{class:"storm",title:fe("求解器时间步 · 每帧步数","solver time step · steps per frame"),children:[g.storm?`${g.storm} · `:"","dt ",g.dt.toFixed(2)," s · ",g.n,"/f"]})]}):v("div",{class:"storm",children:k("noMetrics")})]})]})}function oE(){const n=Z.status.value;return n?v("div",{class:"toast",id:"status",role:"status",children:n}):null}function lE(){const n=Z.probe.value;if(!n||!Z.probeOn.value)return null;const e=!n.sea&&n.depth>=.01;return v("div",{class:"probe",style:{left:`${n.sx}px`,top:`${n.sy}px`},children:n.sea?v("span",{class:"pc",children:fe("海域（潮位边界）","Sea (tidal boundary)")}):v(pt,{children:[v("span",{class:"pd",children:[e&&v("span",{class:"swatch",style:{background:Bl(n.depth)}}),e?`${n.depth.toFixed(2)} m`:fe("干","dry"),e&&v("span",{class:"pc",style:{fontSize:"10px"},children:Ou()[eg(n.depth)]})]}),v("span",{class:"pc",children:[fe("最大","max")," ",n.hmax.toFixed(2)," m · ",fe("地面","ground")," ",n.ground.toFixed(1)," mPD"]})]})})}function cE(){const n=Z.loading.value;return v("div",{id:"loading",style:{display:n?"flex":"none"},children:[v("div",{class:"ld-brand",children:[v("span",{class:"ld-mark",children:v("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","aria-hidden":"true",children:[v("path",{d:"M3 10c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"}),v("path",{d:"M3 16c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"})]})}),v("div",{children:[v("div",{class:"ld-nm",children:"HK Flood Lab"}),v("div",{class:"ld-sub",children:fe("香港洪涝实验室 · 交互式洪水数字孪生","Hong Kong interactive flood digital twin")})]})]}),v("div",{class:"ld-bar",children:v("i",{id:"loadingBar",style:{width:`${Math.round((n?.frac??0)*100)}%`}})}),v("div",{class:"ld-msg",id:"loadingText",children:n?.text||k("loading")})]})}function hE(){const n=Z.lang.value,e=`shell ${Z.leftTab.value?"":"left-closed"} ${Z.panelsOff.value?"panels-off":""}`;return v("div",{class:e,children:[v(Fb,{}),v(qb,{}),v(YT,{}),v(iE,{}),v(sE,{}),v(aE,{}),v(oE,{}),v(lE,{}),v(cE,{})]},n)}class uE{constructor(e){Rb(e),gb(Fm(hE,{}),document.getElementById("ui-root")),this.labelSwipe()}labelSwipe(){document.getElementById("swipeL").textContent=k("swipeLeft").replace(/[◀▶]/g,"").trim(),document.getElementById("swipeR").textContent=k("swipeRight").replace(/[◀▶]/g,"").trim()}get newRole(){return Z.newRole.value}get showFac(){return Z.showFac.value}getMeasureParams(e){return Z.measureParams.value[e]}relabel(){Z.lang.value=er(),this.labelSwipe()}setScenes(e,t){Z.scenes.value=e,Z.sceneId.value=t}setEvents(e,t){Z.events.value=e,Z.eventId.value=t}setScene(e){Z.scene.value=e,Z.sceneId.value=e.id}setEvent(e){Z.event.value=e,Z.eventId.value=e.id}setParams(e){Z.params.value={...e}}setMeasures(e,t){Z.measures.value=e,Z.selMeasure.value=t}setMeasuresDirty(e,t){Z.dirty.value=e,Z.devSave.value=t}setDraftInfo(e,t){Z.draft.value={n:e,len:t}}setTool(e){Z.tool.value=e,e&&(Z.leftTab.value="measures")}setCompare(e){Z.compare.value=e}setFlowMode(e){Z.flowMode.value=e}setActive(e,t){Z.active.value={...Z.active.value,[e]:t}}setPlaying(e){Z.playing.value=e}setSpeed(e){Z.speed.value=e}setTime(e,t){Z.time.value={label:e,frac:t}}setConditions(e){Z.cond.value=e}setStepInfo(e){}setStatus(e){Z.status.value=e}setLoading(e,t=""){Z.loading.value=e===null?null:{frac:e,text:t}}togglePanels(){Z.panelsOff.value=!Z.panelsOff.value}setTimeline(e){Z.timeline.value=e}setWaterMode(e){Z.waterMode.value=e}setExag(e){Z.exag.value=e}setTexMode(e){Z.texMode.value=e}setCharts(e,t){Z.charts.value={tide:e,rain:t}}setChartCursor(e){Z.chartCursor.value=e}setProbe(e){Z.probe.value=e}setMetrics(e,t){const i=Z.metrics.value;if(!e)Z.trend.value=null;else if(i&&e.t>i.t){const s=(e.volumeMm3-i.volumeMm3)/((e.t-i.t)/3600),r=Math.abs(s)/Math.max(.001,e.volumeMm3);Z.trend.value={dir:e.volumeMm3<5e-4||r<.02?"flat":s>0?"up":"down",rate:s}}Z.metrics.value=e,Z.baseMetrics.value=t}setHotspots(e){Z.hotspots.value=e}setValidation(e,t){Z.validation.value={points:e,m:t}}setFacilities(e,t){Z.facilities.value={m:e,base:t}}setPins(e,t,i,s){Z.pins.value={list:e.map(r=>({...r,depth:r.depth.slice()})),t:t.slice(),sel:i,f:s}}}const Vp={"hk-island-east":"mangkhut-2018","tseung-kwan-o":"mangkhut-2018","sha-tin":"wanda-1962","tai-po":"mangkhut-2018","wong-tai-sin":"rainstorm-2023","victoria-harbour":"dubhe-1000","tai-o":"hato-2017","hk-overview":"dubhe-1000"},Gp=[12723548,1023370,7358696,11566347,6067213,4804695];function qi(n){return new Date(n.length===16?`${n}:00+08:00`:`${n}+08:00`)}class dE{constructor(){te(this,"world");te(this,"ui");te(this,"solver",null);te(this,"baseline",null);te(this,"assets",null);te(this,"event",null);te(this,"sceneList",[]);te(this,"eventList",[]);te(this,"sceneId","hk-island-east");te(this,"eventId","mangkhut-2018");te(this,"params",{surgeScale:1,waveSetup:.2,waveHs:2,slr:0,rainScale:1,drainMmPerHour:40,hillCapMmPerHour:40,recoverGain:6,tideLockM:1.5,buildingsBlock:!0,manning:.035,subgrid:!0});te(this,"measures",null);te(this,"forcing",null);te(this,"playing",!1);te(this,"speed",900);te(this,"simT",0);te(this,"windowSec",86400);te(this,"compare",!1);te(this,"showBaseline",!1);te(this,"flowMode","particles");te(this,"splitFrac",.5);te(this,"showFacilities",!0);te(this,"flyAfterSeek",!1);te(this,"probeOn",!0);te(this,"probeT",0);te(this,"waterMode","now");te(this,"showLandmarks",!0);te(this,"follow",!1);te(this,"followAt",null);te(this,"pins",[]);te(this,"pinT",[]);te(this,"pinMode",!1);te(this,"selPin",null);te(this,"pinSeq",1);te(this,"lastPinSample",-1e9);te(this,"spawnA",new Float32Array(0));te(this,"spawnB",new Float32Array(0));te(this,"metrics",null);te(this,"baseMetrics",null);te(this,"tool",null);te(this,"draft",[]);te(this,"selectedMeasure",null);te(this,"snapShore",!0);te(this,"modSigA","");te(this,"modSigB","");te(this,"lastFrame",performance.now());te(this,"lastMetrics",0);te(this,"lastLightning",0);te(this,"seekTarget",null);te(this,"dtBase",.5);te(this,"maxDepthSeen",0);te(this,"loadingToken",0);te(this,"flashTimer",0);const e=document.getElementById("view");this.world=new ab(e,document.getElementById("labels")),this.ui=new uE({onSceneChange:t=>{this.sceneId=t,this.eventId=Vp[t]??this.eventId,this.ui.setEvents(this.eventList,this.eventId),this.load()},onEventChange:t=>{this.eventId=t,this.load(!1)},onParamChange:t=>{this.params=t,this.applyParams(),this.restart()},onMeasureTool:t=>this.setTool(t),onFinishDraft:()=>this.finishDraft(),onCancelDraft:()=>{this.draft=[],this.world.setDraft([],"wall"),this.setTool(null)},onUndoVertex:()=>this.undoVertex(),onSnapToggle:t=>{this.snapShore=t},onRemoveMeasure:t=>{this.measures?.remove(t),this.selectedMeasure===t&&(this.selectedMeasure=null),this.measuresChanged()},onClearMeasures:()=>{this.measures?.clearWhatIf(),this.selectedMeasure=null,this.measuresChanged()},onMeasureParam:()=>{},onSelectMeasure:t=>this.selectMeasure(t),onUpdateMeasure:(t,i)=>{this.measures?.update(t,i),this.measuresChanged()},onSaveMeasures:()=>this.saveMeasures(),onExportMeasures:()=>this.exportMeasures(),onImportMeasures:t=>this.importMeasures(t),onRevertMeasures:()=>this.revertMeasures(),onPlayToggle:()=>this.setPlaying(!this.playing),onReset:()=>this.restart(),onSpeed:t=>{this.speed=t,this.ui.setSpeed(t)},onSeek:t=>this.seek(t*this.windowSec),onCompare:()=>this.toggleCompare(),onOrbit:()=>{const t=this.world.director.controls;t.autoRotate=!t.autoRotate,t.autoRotateSpeed=.6,this.ui.setActive("btnOrbit",t.autoRotate)},onTour:()=>this.tour(),onTexToggle:()=>{this.world.setTextureMode(this.world.texMode==="imagery"?"basemap":"imagery"),this.ui.setTexMode(this.world.texMode)},onPanels:()=>{this.ui.togglePanels(),this.syncLabelInset()},onLang:()=>{_b(er()==="zh"?"en":"zh"),document.documentElement.lang=er()==="zh"?"zh-CN":"en",this.ui.relabel(),this.ui.setScenes(this.sceneList,this.sceneId),this.ui.setEvents(this.eventList,this.eventId),this.refreshCharts(),this.refreshLabels()},onFlyTo:(t,i)=>this.world.director.flyTo(this.world.viewAt(t,i,700),2.2),onShowMax:t=>this.world.setShowMax(t),onShowBaseline:t=>{this.showBaseline=t,this.bindView()},onFlowMode:()=>this.cycleFlow(),onPeak:()=>this.jumpToPeak(),onHotspot:(t,i)=>this.world.director.flyTo(this.world.viewAt(t,i,450),2),onShowFacilities:t=>{this.showFacilities=t,this.refreshLabels()},onWaterMode:t=>{this.waterMode=t,this.world.setWaterMode(t),this.ui.setWaterMode(t)},onExag:()=>{const t=[1,1.5,2,3],i=t[(t.indexOf(this.world.exag)+1)%t.length];this.world.setExaggeration(i),this.ui.setExag(i),this.refreshLabels()},onCamera:t=>this.cameraPreset(t),onShowLandmarks:t=>{this.showLandmarks=t,this.refreshLabels()},onShadows:t=>this.world.setShadows(t),onProbe:t=>{this.probeOn=t,t||this.ui.setProbe(null)},onPinMode:()=>this.setPinMode(!this.pinMode),onRemovePin:t=>{this.pins=this.pins.filter(i=>i.id!==t),this.selPin===t&&(this.selPin=null),this.pinsChanged()},onRenamePin:(t,i)=>{const s=this.pins.find(r=>r.id===t);s&&(s.name=i,this.pinsChanged())},onSelectPin:t=>{this.selPin=t,this.pinsChanged()},onFlyPin:t=>{const i=this.pins.find(s=>s.id===t);i&&this.world.director.flyTo(this.world.viewAt(i.x,i.y,420),2)},onExportPins:()=>this.exportPins()}),this.ui.setSpeed(this.speed),this.ui.setParams(this.params),this.ui.setFlowMode(this.flowMode),this.bindPointer(e),this.bindSwipe(),window.addEventListener("resize",()=>this.syncLabelInset()),this.world.director.onTourEnd=()=>{this.ui.setActive("btnTour",!1),this.ui.setStatus(null)},this.init(),requestAnimationFrame(()=>this.frame())}async init(){try{[this.sceneList,this.eventList]=await Promise.all([v0(),_0()])}catch(t){this.ui.setLoading(1,`数据索引加载失败 / failed to load index: ${t}`);return}const e=new URLSearchParams(location.search);e.get("scene")&&this.sceneList.some(t=>t.id===e.get("scene"))&&(this.sceneId=e.get("scene")),this.sceneList.some(t=>t.id===this.sceneId)||(this.sceneId=this.sceneList[0].id),this.eventId=e.get("event")??Vp[this.sceneId]??this.eventList[0].id,this.eventList.some(t=>t.id===this.eventId)||(this.eventId=this.eventList[0].id),this.ui.setScenes(this.sceneList,this.sceneId),this.ui.setEvents(this.eventList,this.eventId),await this.load()}async load(e=!0){const t=++this.loadingToken;this.playing=!1,this.ui.setPlaying(!1),this.ui.setLoading(.02,k("loading"));try{const i=x0(this.eventId);if(e||!this.assets){if(this.assets=await M0(this.sceneId,(a,o)=>this.ui.setLoading(a*.8,`${k("loading")} ${o}`)),t!==this.loadingToken)return;this.buildSolvers()}if(this.event=await i,t!==this.loadingToken)return;history.replaceState(null,"",`?scene=${this.sceneId}&event=${this.eventId}`),this.params.waveSetup=this.event.kind==="typhoon"?.2:this.event.kind==="fictional"?.3:0;const s=this.event.tide.QUB;let r=0;if(s)for(let a=0;a<s.surge.length;a++){const o=s.surge[a];o!==null&&o>r&&(r=o)}this.params.waveHs=this.event.kind==="typhoon"?+(2*Math.min(1.5,Math.max(.3,r/2.35))).toFixed(2):this.event.kind==="fictional"?3:0,this.ui.setParams(this.params),this.buildForcing(),this.ui.setScene(this.assets.meta),this.ui.setEvent(this.event),this.applyMeasures(),this.applyParams(),this.restart(),this.refreshCharts(),this.refreshLabels(),this.ui.setLoading(null),this.setPlaying(!0)}catch(i){console.error(i),this.ui.setLoading(1,`加载失败 / load failed: ${i}`)}}buildSolvers(){const e=this.assets,t=e.meta;this.solver?.dispose(),this.baseline?.dispose(),this.baseline=null,this.solver=new Pf(this.world.renderer,{W:t.cols,H:t.rows,dx:t.res},e.dem,e.bldh,e.mask,e.expo,e.basin,e.chan,e.ug,e.sgCell&&e.sgFace?{cell:e.sgCell,face:e.sgFace}:null),this.measures=new lb(t.cols,t.rows,t.res),this.measures.sea=e.mask,this.selectedMeasure=null,this.loadMeasures(),this.applyMeasures(),this.world.loadScene(e,this.solver.terrainTex,this.solver.modTex,this.solver.stateTex,this.solver.auxTex),this.spawnA=new Float32Array(t.cols*t.rows*2),this.spawnB=new Float32Array(t.cols*t.rows*2),this.compare&&this.makeBaseline(),this.syncSplit()}loadMeasures(){const e=this.assets,t=this.measures;t.replaceAll([]);for(const o of e.meta.defences??[])t.add({kind:"wall",pts:[{x:o.x,y:o.y}],cells:o.cells,height:o.height_m,key:o.id,name:o.zh,name_en:o.en,role:"record",built:o.built,in_dtm:o.in_dtm,src:o.src,locked:!0});const i=e.savedMeasures;let s=null;try{const o=localStorage.getItem(this.measuresKey());o&&(s=JSON.parse(o))}catch{s=null}const r=s&&(!i||(s.saved??"")>(i.saved??"")),a=r?s:i;a&&t.loadSaved(a,e.meta.origin),this.ui.setMeasuresDirty(!!r,!1)}measuresKey(){return`hkfl.measures.${this.sceneId}`}ctx(e,t=this.simT/3600){return{eventId:this.eventId,eventStart:this.event?qi(this.event.window.start).getTime():0,simH:t,whatIf:e}}applyMeasures(){const e=this.measures;if(e){if(this.solver){const t=this.ctx(!0);e.rasterize(this.solver.modData,t),this.solver.updateMod(),this.modSigA=e.signature(t)}if(this.baseline){const t=this.ctx(!1);e.rasterize(this.baseline.modData,t),this.baseline.updateMod(),this.modSigB=e.signature(t)}this.refreshMeasureViews()}}refreshMeasureViews(){const e=this.measures;if(!e)return;const t=this.ctx(!0),i=e.measures.map(s=>({m:s,eff:e.effect(s,t),cost:e.cost(s),exists:e.existsAt(s,t)}));this.world.setMeasures(i.map(s=>({m:s.m,eff:s.eff,selected:s.m.id===this.selectedMeasure}))),this.ui.setMeasures(i,this.selectedMeasure)}tickMeasures(){const e=this.measures;if(!e||!this.solver)return;const t=this.ctx(!0),i=e.signature(t);if(i!==this.modSigA&&(e.rasterize(this.solver.modData,t),this.solver.updateMod(),this.modSigA=i,this.refreshMeasureViews()),this.baseline){const s=this.ctx(!1),r=e.signature(s);r!==this.modSigB&&(e.rasterize(this.baseline.modData,s),this.baseline.updateMod(),this.modSigB=r)}}makeBaseline(){const e=this.assets,t=e.meta;if(this.baseline?.dispose(),this.baseline=new Pf(this.world.renderer,{W:t.cols,H:t.rows,dx:t.res},e.dem,e.bldh,e.mask,e.expo,e.basin,e.chan,e.ug,e.sgCell&&e.sgFace?{cell:e.sgCell,face:e.sgFace}:null),this.measures){const i=this.ctx(!1);this.measures.rasterize(this.baseline.modData,i),this.baseline.updateMod(),this.modSigB=this.measures.signature(i)}}buildForcing(){const e=this.event,t=this.assets.meta,i=qi(e.window.start),s=qi(e.window.end);this.windowSec=(s.getTime()-i.getTime())/1e3;const r=e.tide[t.gauge]??e.tide.QUB,a=[],o=[],l=[],c=[],u=(t.tide_lag_min||0)*60;for(let x=0;x<r.t.length;x++){const M=(qi(r.t[x]).getTime()-i.getTime())/1e3+u;if(M<-7200||M>this.windowSec+7200)continue;const w=r.astro[x],I=r.surge[x];w!==null&&(a.push(M),l.push(w),c.push(r.obs[x]),o.push(w+(I??0)*t.tide_scale))}const d=[],h=[];for(let x=0;x<e.rain.t.length;x++)d.push((qi(e.rain.t[x]).getTime()-i.getTime())/1e3),h.push(e.rain.mm[x]);let f=.3;for(let x=0;x<a.length;x++)f=Math.max(f,o[x]-l[x]);this.forcing={tideT:a,tideL:o,astro:l,obs:c,rainT:d,rainMm:h,hours:this.windowSec/3600,start:i,surgePeak:f};const g=t.dem_stats?.zmin??0,_=Math.max(...o)+this.params.waveSetup+this.params.slr,m=Math.max(2.5,_-g+1),p=.45*t.res/Math.sqrt(9.81*m);this.dtBase=p,this.maxDepthSeen=0,this.solver?.setDt(p),this.baseline?.setDt(p),this.drawTimeline()}drawTimeline(){const e=this.forcing,t=this.event;if(!e||!t||!this.assets)return;const i=[];for(const[a,o,l]of t.signals??[])i.push({h:(qi(a).getTime()-e.start.getTime())/36e5,zh:o,en:l,kind:"sig",tone:tg(l)});const s=this.assets.meta.rain_mult[this.eventId]??1;let r=-1;for(let a=0;a<e.rainMm.length;a++)(r<0||e.rainMm[a]>e.rainMm[r])&&(r=a);if(r>=0&&e.rainMm[r]*s>=10){const a=(e.rainMm[r]*s).toFixed(0);i.push({h:e.rainT[r]/3600+.5,zh:`雨强峰值 ${a} mm/h`,en:`Rain peak ${a} mm/h`,kind:"peak-rain"})}if(t.kind!=="rainstorm"&&e.tideL.length){let a=0;for(let l=1;l<e.tideL.length;l++)e.tideL[l]>e.tideL[a]&&(a=l);const o=e.tideL[a].toFixed(2);i.push({h:e.tideT[a]/3600,zh:`潮位峰值 ${o} mPD`,en:`Sea-level peak ${o} mPD`,kind:"peak-tide"})}this.ui.setTimeline({hours:e.hours,fmt:a=>this.timeLabel(a*3600),tick:a=>this.tick(a),marks:i,tide:{x:e.tideT.map(a=>a/3600),y:e.tideL},rain:{x:e.rainT.map(a=>a/3600),y:e.rainMm}})}stormParts(e){const t=this.event,i=this.forcing;if(!t||!i)return{sig:null,dist:""};const s=i.start.getTime()+e*1e3;let r=null;for(const[l,c,u]of t.signals??[])qi(l).getTime()<=s&&(r=[c,u]);let a="";const o=t.track;if(o.length>=2){const l=o.map(c=>qi(c[0]).getTime());if(s>=l[0]&&s<=l[l.length-1]){let c=0;for(;c<l.length-2&&l[c+1]<s;)c++;const u=(s-l[c])/(l[c+1]-l[c]),d=o[c][1]+(o[c+1][1]-o[c][1])*u,h=o[c][2]+(o[c+1][2]-o[c][2])*u,f=6371,g=(h-22.302)*Math.PI/180,_=(d-114.174)*Math.PI/180,m=Math.sin(g/2)**2+Math.cos(h*Math.PI/180)*Math.cos(22.302*Math.PI/180)*Math.sin(_/2)**2,p=2*f*Math.asin(Math.sqrt(m)),x=(Math.atan2(d-114.174,h-22.302)*180/Math.PI+360)%360,M=fe("北,东北,东,东南,南,西南,西,西北","N,NE,E,SE,S,SW,W,NW").split(",");a=`${fe("风暴中心","storm centre")} ${p.toFixed(0)} km ${M[Math.round(x/45)%8]}`}}return{sig:r,dist:a}}tick(e){return new Date(this.forcing.start.getTime()+e*36e5).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"Asia/Hong_Kong"})}timeLabel(e){return new Date(this.forcing.start.getTime()+e*1e3).toLocaleString("en-GB",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",timeZone:"Asia/Hong_Kong"})+" HKT"}tideAt(e){const t=this.forcing,i=Ia(t.tideT,t.tideL,e,t.astro),s=Ia(t.tideT,t.astro,e,t.astro),r=i-s;return s+r*this.params.surgeScale+this.params.waveSetup+this.params.slr}rainAt(e){const t=this.forcing;let i=0;for(let r=0;r<t.rainT.length;r++)if(e>=t.rainT[r]&&e<t.rainT[r]+3600){i=t.rainMm[r];break}const s=this.assets.meta.rain_mult[this.eventId]??1;return i*s*this.params.rainScale/36e5}rainMmAt(e){return this.rainAt(e)*36e5}hsAt(e){const t=this.forcing,s=(Ia(t.tideT,t.tideL,e,t.astro)-Ia(t.tideT,t.astro,e,t.astro))*this.params.surgeScale/t.surgePeak;return s<.2?0:this.params.waveHs*Math.min(1,s)}applyParams(){const e=this.params.drainMmPerHour/36e5;for(const t of[this.solver,this.baseline])t?.setParams({manning:this.params.manning,buildings:this.params.buildingsBlock,drain:e,bldBlock:1,manningBld:.6,hillCap:this.params.hillCapMmPerHour/36e5,recover:this.params.recoverGain,tideLock:this.params.tideLockM,subgrid:this.params.subgrid});this.world.setBuildingsBlock(this.params.buildingsBlock),this.world.setSubgrid(this.params.subgrid&&!!this.solver?.subgridAvailable),this.forcing&&this.buildForcing()}restart(){if(!this.solver||!this.forcing)return;const e=this.tideAt(0);this.solver.reset(e),this.baseline?.reset(e),this.simT=0,this.metrics=null,this.baseMetrics=null,this.lastMetrics=0,this.maxDepthSeen=0,this.solver.setDt(this.dtBase),this.baseline?.setDt(this.dtBase),this.ui.setMetrics(null,null),this.ui.setTime(this.timeLabel(0),0),this.pinT=[];for(const t of this.pins)t.depth=[],t.level=[];this.lastPinSample=-1e9,this.pinsChanged(!1),this.world.resetFlow()}setPlaying(e){this.playing=e,this.ui.setPlaying(e)}seek(e){e=Math.max(0,Math.min(this.windowSec,e)),e<this.simT&&this.restart(),this.seekTarget=e}setTool(e){this.tool=e,this.draft=[],this.world.setDraft([],"wall"),this.ui.setTool(e),this.ui.setDraftInfo(0,0),document.body.style.cursor=e?"crosshair":"default"}bindPointer(e){let t=null;e.addEventListener("pointerdown",i=>{t={x:i.clientX,y:i.clientY,t:performance.now()},this.follow&&(this.follow=!1,this.ui.setActive("btnFollow",!1))}),e.addEventListener("pointerup",i=>{if(!t)return;const s=Math.hypot(i.clientX-t.x,i.clientY-t.y),r=performance.now()-t.t;if(t=null,s>5||r>600)return;if(this.pinMode){const l=this.world.raycastGround(i.clientX,i.clientY);l&&this.addPin(l.x,l.y);return}if(!this.tool){const l=this.world.pickMeasure(i.clientX,i.clientY);this.selectMeasure(l);return}const a=this.world.raycastGround(i.clientX,i.clientY);if(!a)return;let o={x:a.x,y:a.y};if(this.snapShore&&(this.tool==="wall"||this.tool==="sandbag")&&(o=this.snapToShore(o)),this.tool==="pump"){this.commitMeasure([o]);return}this.draft.push(o),this.world.setDraft(this.draft,this.tool),this.ui.setDraftInfo(this.draft.length,this.draftLength())}),e.addEventListener("dblclick",()=>{this.tool&&this.draft.length&&this.finishDraft()}),e.addEventListener("pointermove",i=>{if(!this.probeOn||i.buttons||!this.solver||!this.assets)return;const s=performance.now();if(s-this.probeT<90)return;this.probeT=s;const r=this.world.labelInset;if(i.clientX<r.l||i.clientX>innerWidth-r.r||i.clientY<r.t||i.clientY>innerHeight-r.b){this.ui.setProbe(null);return}const a=this.world.raycastGround(i.clientX,i.clientY);if(!a){this.ui.setProbe(null);return}const o=this.assets,l=o.meta.res,c=o.meta.cols,u=Math.floor(a.x/l),d=Math.floor(a.y/l);if(u<0||d<0||u>=c||d>=o.meta.rows){this.ui.setProbe(null);return}const h=d*c+u,f=this.solver.readCell(u,d),g=Math.max(0,this.solver.subgridOn?f.aux[3]:f.state[0]);this.ui.setProbe({sx:i.clientX,sy:i.clientY,depth:g,hmax:f.state[3],ground:o.dem[h],sea:!!o.mask[h]})}),e.addEventListener("pointerleave",()=>this.ui.setProbe(null)),window.addEventListener("keydown",i=>{const s=i.target.tagName;if(!(s==="INPUT"||s==="TEXTAREA"||s==="SELECT")){if(i.key==="Escape"&&(this.pinMode?this.setPinMode(!1):this.tool?this.setTool(null):this.selectMeasure(null)),i.key==="Enter"&&this.tool&&this.finishDraft(),i.key==="Backspace"&&this.tool&&(i.preventDefault(),this.undoVertex()),i.key==="Delete"&&this.selectedMeasure!==null&&!this.tool){const r=this.selectedMeasure;this.measures?.remove(r),this.selectedMeasure=null,this.measuresChanged()}i.key===" "&&s!=="BUTTON"&&(i.preventDefault(),this.setPlaying(!this.playing))}})}draftLength(){let e=0;for(let t=1;t<this.draft.length;t++)e+=Math.hypot(this.draft[t].x-this.draft[t-1].x,this.draft[t].y-this.draft[t-1].y);return e}undoVertex(){!this.tool||!this.draft.length||(this.draft.pop(),this.world.setDraft(this.draft,this.tool),this.ui.setDraftInfo(this.draft.length,this.draftLength()))}snapToShore(e){const t=this.assets;if(!t)return e;const i=t.meta.cols,s=t.meta.rows,r=t.meta.res,a=Math.floor(e.x/r),o=Math.floor(e.y/r);let l=e,c=1/0;for(let u=o-3;u<=o+3;u++)for(let d=a-3;d<=a+3;d++){if(d<0||u<0||d>=i||u>=s)continue;const h=u*i+d;if(t.mask[h]||!(d>0&&t.mask[h-1]||d<i-1&&t.mask[h+1]||u>0&&t.mask[h-i]||u<s-1&&t.mask[h+i]))continue;const g=(d+.5)*r,_=(u+.5)*r,m=Math.hypot(g-e.x,_-e.y);m<c&&(c=m,l={x:g,y:_})}return l}finishDraft(){if(this.tool){if(this.draft.length===0){this.setTool(null);return}(this.tool==="wall"||this.tool==="sandbag")&&this.draft.length<2||this.commitMeasure(this.draft)}}commitMeasure(e){if(!this.measures||!this.tool)return;const t=this.ui.getMeasureParams(this.tool),i=this.ui.newRole,s=this.measures.add({kind:this.tool,pts:e,height:t.height,rate:t.rate,capacity:t.capacity,factor:t.factor,radius:t.radius,role:i,key:i==="whatif"?void 0:`${this.tool}_${Date.now().toString(36)}`});this.draft=[],this.world.setDraft([],"wall"),this.tool==="pump"||this.setTool(null),this.selectedMeasure=i==="whatif"&&this.tool==="pump"?null:s.id,this.measuresChanged()}selectMeasure(e){this.selectedMeasure=e,this.refreshMeasureViews()}measuresChanged(){if(!this.measures||!this.solver)return;this.applyMeasures();try{localStorage.setItem(this.measuresKey(),JSON.stringify(this.measures.toSaved(this.sceneId,this.assets.meta.origin)))}catch{}this.ui.setMeasuresDirty(!0,!1);const e=this.playing||this.simT>0;this.restart(),e&&this.setPlaying(!0)}async saveMeasures(){if(!this.measures||!this.assets)return;const e=this.measures.toSaved(this.sceneId,this.assets.meta.origin),t=JSON.stringify(e,null,1);this.download(`${this.sceneId}.measures.json`,t),this.flash(fe("已下载 measures.json，放到 web/public/scenes/<场景>/ 即可生效","Downloaded measures.json; put it in web/public/scenes/<scene>/"))}exportMeasures(){!this.measures||!this.assets||this.download(`${this.sceneId}.measures.json`,JSON.stringify(this.measures.toSaved(this.sceneId,this.assets.meta.origin),null,1))}async importMeasures(e){if(!(!this.measures||!this.assets))try{const t=JSON.parse(await e.text());if(!Array.isArray(t.measures))throw new Error("no measures[]");this.measures.loadSaved(t,this.assets.meta.origin),this.measuresChanged(),this.flash(fe(`已导入 ${t.measures.length} 项`,`Imported ${t.measures.length} measures`))}catch(t){this.flash(fe(`导入失败：${t}`,`Import failed: ${t}`))}}revertMeasures(){try{localStorage.removeItem(this.measuresKey())}catch{}this.selectedMeasure=null,this.loadMeasures(),this.applyMeasures(),this.restart(),this.setPlaying(!0)}download(e,t,i="application/json"){const s=document.createElement("a");s.href=URL.createObjectURL(new Blob([t],{type:i})),s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(s.href),2e3)}flash(e){this.ui.setStatus(e),clearTimeout(this.flashTimer),this.flashTimer=window.setTimeout(()=>this.ui.setStatus(null),3500)}toggleCompare(){this.compare=!this.compare,this.ui.setCompare(this.compare),this.refreshCharts(),this.compare?(this.makeBaseline(),this.baseline.setDt(this.solver.dt),this.applyParams()):(this.baseline?.dispose(),this.baseline=null,this.showBaseline=!1),this.syncSplit(),this.bindView(),this.restart(),this.setPlaying(!0)}syncSplit(){const e=document.getElementById("swipe");this.compare&&this.baseline&&this.solver?(this.world.setBaselineTextures(this.baseline.stateTex),this.world.split={frac:this.splitFrac,left:{state:this.baseline.stateTex,aux:this.baseline.auxTex},right:{state:this.solver.stateTex,aux:this.solver.auxTex}},e.style.display="block",e.style.left=`${this.splitFrac*100}%`,this.ui.setStatus(k("swipeHint")),setTimeout(()=>this.ui.setStatus(null),5e3)):(this.world.setBaselineTextures(null),this.world.split=null,e.style.display="none")}bindSwipe(){const e=document.querySelector("#swipe .handle"),t=document.getElementById("swipe");let i=!1;e.addEventListener("pointerdown",r=>{i=!0,e.setPointerCapture(r.pointerId),r.preventDefault()}),e.addEventListener("pointermove",r=>{i&&(this.splitFrac=Math.min(.95,Math.max(.05,r.clientX/window.innerWidth)),t.style.left=`${this.splitFrac*100}%`,this.world.split&&(this.world.split.frac=this.splitFrac))});const s=()=>{i=!1};e.addEventListener("pointerup",s),e.addEventListener("pointercancel",s)}cycleFlow(){this.flowMode=this.flowMode==="particles"?"arrows":this.flowMode==="arrows"?"none":"particles",this.world.setFlowMode(this.flowMode),this.ui.setFlowMode(this.flowMode)}peakSec(){const e=this.forcing;if(this.event.kind==="rainstorm"){let r=0,a=-1;for(let o=0;o<e.rainT.length;o++)e.rainMm[o]>a&&(a=e.rainMm[o],r=e.rainT[o]);return Math.min(this.windowSec,r+5400)}let i=0,s=-1/0;for(let r=0;r<e.tideT.length;r++)e.tideL[r]>s&&(s=e.tideL[r],i=e.tideT[r]);return Math.min(this.windowSec,i+1200)}jumpToPeak(){this.forcing&&(this.flyAfterSeek=!0,this.seek(this.peakSec()),this.setPlaying(!0))}hotspotLabels(e){const t=this.assets.meta.pois;return e.map(i=>{let s="",r=1/0;for(const a of t){const o=Math.hypot(a.x-i.x,a.y-i.y);o<r&&(r=o,s=a.name)}return{...i,name:s?`${s.split(" ")[0]}${r>250?` ${(r/1e3).toFixed(1)} km`:""}`:""}})}bindView(){const e=this.showBaseline&&this.baseline?this.baseline:this.solver;e&&this.world.setStateTextures(e.stateTex,e.auxTex)}tour(){const e=this.world.director;if(e.touring){e.stopTour();return}const i=this.assets.meta.pois.map(s=>this.world.viewAt(s.x,s.y,650));i.length||i.push(this.world.defaultView()),e.startTour(i),this.ui.setActive("btnTour",!0),this.ui.setStatus(k("tourRunning"))}refreshCharts(){const e=this.forcing,t=this.event;if(!e||!t)return;const i=this.assets.meta,s=i.gauge,r=e.tideT.map(f=>f/3600),a=e.tideT.map(f=>this.tideAt(f)),o=[],l=t.peaks_model[s],c=t.observed_peaks[s];if(c!==void 0&&l){const f=(qi(l.t).getTime()-e.start.getTime())/36e5+(i.tide_lag_min||0)/60;o.push({x:f,y:c,label:`${k("peakObs")} ${(c+.146).toFixed(2)} mCD`,color:an.peak})}const u={kind:"line",xMin:0,xMax:e.hours,unit:"mPD",yLabel:"mPD",cursor:this.simT/3600,xTick:f=>this.tick(f),markers:o,series:[{name:fe(`实测 ${s}`,`Observed ${s}`),color:an.obs,x:r,y:e.obs},{name:fe("天文潮","Astronomical"),color:an.astro,x:r,y:e.astro,dashed:!0},{name:fe("模型边界","Model boundary"),color:an.model,x:r,y:a}]},d=(i.rain_mult[this.eventId]??1)*this.params.rainScale,h={kind:"bar",xMin:0,xMax:e.hours,unit:"mm/h",yLabel:"mm/h",cursor:this.simT/3600,xTick:f=>this.tick(f),series:[{name:fe(`模型雨强（${t.rain.station} ×${d.toFixed(2)}）`,`Model rain (${t.rain.station} ×${d.toFixed(2)})`),color:an.rain,x:e.rainT.map(f=>f/3600+.5),y:e.rainMm.map(f=>f*d)}]};this.ui.setCharts(u,h),this.ui.setValidation(i.validation[this.eventId]??[],this.metrics)}refreshLabels(){this.assets&&this.world.setLabels(this.labelItems(this.metrics))}labelItems(e){const t=this.assets.meta,i=(t.validation[this.eventId]??[]).map(r=>({id:`v_${r.id}`,x:r.x,y:r.y,text:fe(r.zh,r.en),cls:`val ${r.cls}`,sub:e?`${fe("实际","obs")}${r.lower?"≥":"≈"}${r.cls==="none"?"0":r.depth.toFixed(1)} m / ${fe("模拟","sim")} ${(e.valDepths[r.id]??0).toFixed(2)} m`:r.cls==="none"?fe("实际无水浸","no flooding"):`${fe("实际","obs")}${r.lower?"≥":"≈"}${r.depth.toFixed(1)} m`}));for(const r of t.gauges)i.push({id:`g_${r.code}`,x:r.x,y:r.y,text:r.name,cls:"gauge",sub:e?`${(e.gaugeLevels[r.code]??0).toFixed(2)} mPD`:""});const s=new Set;if(e&&this.showFacilities){const r=(t.facilities??[]).map(a=>({f:a,d:Math.max(e.facDepths?.[a.id]??0,this.baseMetrics?.facDepths?.[a.id]??0)})).filter(a=>a.d>=.3).sort((a,o)=>o.d-a.d).slice(0,10);for(const{f:a,d:o}of r)s.add(a.id),i.push({id:`f_${a.id}`,x:a.x,y:a.y,text:`${El[a.type]??""} ${a.name}`,cls:`facility ${o>=.5?"severe":"moderate"}`,sub:`${(e.facDepths?.[a.id]??0).toFixed(2)} m`})}if(this.showLandmarks){for(const[a,o]of t.pois.entries())i.push({id:`p_${a}`,x:o.x,y:o.y,text:o.name,cls:"landmark place"});const r=["mtr","hospital","mall","ferry"];for(const a of t.facilities??[])r.includes(a.type)&&!s.has(a.id)&&i.push({id:`l_${a.id}`,x:a.x,y:a.y,text:`${El[a.type]??""} ${a.name}`,cls:"landmark"})}for(const r of this.pins){const a=r.depth.length?r.depth[r.depth.length-1]:null;i.push({id:`u_${r.id}`,x:r.x,y:r.y,text:r.name,cls:"upin",color:r.color,sub:a===null?"":`${a.toFixed(2)} m`})}return i}setPinMode(e){this.pinMode=e,e&&this.tool&&this.setTool(null),this.ui.setActive("btnPin",e),document.body.style.cursor=e?"crosshair":"default",this.ui.setStatus(e?k("pinHint"):null)}addPin(e,t){const i=this.pinSeq++;this.pins.push({id:i,name:`${fe("钉点","Pin")} ${i}`,x:e,y:t,color:Gp[(i-1)%Gp.length],depth:[],level:[]}),this.selPin=i,this.setPinMode(!1);const s=this.simT,r=this.playing||s>0;this.restart(),s>0&&this.seek(s),r&&this.setPlaying(!0),this.refreshLabels()}samplePins(e){const t=this.assets,i=t.meta.res,s=t.meta.cols;this.pinT.push(this.simT);for(const r of this.pins){const a=Math.floor(r.x/i),o=Math.floor(r.y/i),l=e.readCell(a,o),c=Math.max(0,e.subgridOn?l.aux[3]:l.state[0]);r.depth.push(c),r.level.push((t.dem[o*s+a]??0)+c)}this.lastPinSample=this.simT}pinsChanged(e=!0){const t=this.forcing;this.ui.setPins(this.pins,this.pinT.map(i=>i/3600),this.selPin,t?{hours:t.hours,tide:{x:t.tideT.map(i=>i/3600),y:t.tideT.map(i=>this.tideAt(i))},rain:{x:t.rainT.map(i=>i/3600),y:t.rainT.map(i=>this.rainMmAt(i))},cursor:this.simT/3600,xTick:i=>this.tick(i)}:null),e&&this.assets&&this.refreshLabels()}exportPins(){if(!this.pins.length||!this.forcing)return;const e=["time_hkt","hours","boundary_sea_level_mPD","rain_mm_per_h",...this.pins.flatMap(r=>[`${r.name} depth_m`,`${r.name} water_level_mPD`])],t=this.pinT.map((r,a)=>[this.timeLabel(r).replace(" HKT",""),(r/3600).toFixed(3),this.tideAt(r).toFixed(3),this.rainMmAt(r).toFixed(1),...this.pins.flatMap(o=>[o.depth[a]?.toFixed(3)??"",o.level[a]?.toFixed(3)??""])]),s=[`# HK Flood Lab pins · scene ${this.sceneId} · event ${this.eventId} · ${this.pins.map(r=>`${r.name} (x ${r.x.toFixed(0)} m, y ${r.y.toFixed(0)} m)`).join("; ")}`,e.map(r=>`"${r.replace(/"/g,'""')}"`).join(","),...t.map(r=>r.join(","))].join(`
`);this.download(`${this.sceneId}_${this.eventId}_pins.csv`,"\uFEFF"+s,"text/csv")}syncLabelInset(){const e=r=>{const a=document.getElementById(r);return a.offsetParent&&getComputedStyle(a).display!=="none"?a.getBoundingClientRect():null},t=e("left"),i=e("right"),s=e("bottom");this.world.labelInset={l:t?t.right:0,r:i?window.innerWidth-i.left:0,t:document.querySelector(".topbar")?.getBoundingClientRect().bottom??60,b:s?window.innerHeight-s.top:0}}cameraPreset(e){if(e==="follow"){this.follow=!this.follow,this.ui.setActive("btnFollow",this.follow),this.followAt=null,this.follow&&this.followHotspot();return}this.follow&&(this.follow=!1,this.ui.setActive("btnFollow",!1));const t=this.metrics?.hotspots?.[0];this.world.cameraPreset(e,e==="street"&&t?{x:t.x,y:t.y}:void 0)}followHotspot(){const e=this.metrics?.hotspots?.[0];e&&(this.followAt&&Math.hypot(this.followAt.x-e.x,this.followAt.y-e.y)<150||(this.followAt={x:e.x,y:e.y},this.world.director.flyTo(this.world.viewAt(e.x,e.y,520),2.2)))}computeMetrics(e,t="A"){const i=this.assets,s=i.meta,r=s.cols,a=s.rows,o=s.res,l=e.readState(),c=e.readAux(),u=e.subgridOn,d=i.mask,h=i.bldh;let f=0,g=0,_=0,m=0,p=0;const x=t==="A"?this.spawnA:this.spawnB;let M=0;const w=Math.max(1,Math.round(150/o)),I=Math.ceil(r/w),C=new Float32Array(I*Math.ceil(a/w)),P=new Int32Array(C.length).fill(-1),U=new Float32Array(C.length),ne=new Int32Array(C.length),S=Math.ceil(300/o);for(let F=0;F<r*a;F++){if(d[F])continue;const ee=u?c[F*4+3]:l[F*4];ee>p&&(p=ee);const pe=F%r,ce=F/r|0;if(pe<S||ce<S||pe>=r-S||ce>=a-S||h[F]>0||i.dem[F]<2||i.basin[F]||i.rim[F]||i.steep[F])continue;const ae=ee;ae>f&&(f=ae),ae>.15&&g++,ae>.5&&_++,m+=ae,ae>.06&&M*2+1<x.length&&(x[M*2]=(pe+.5)*o,x[M*2+1]=(ce+.5)*o,M++);const me=l[F*4+3],oe=(ce/w|0)*I+(pe/w|0);me>C[oe]&&(C[oe]=me,P[oe]=F),me>=.3&&(U[oe]+=Math.min(me,1.5),ne[oe]++)}this.world.setFlowSpawn(t,x,M);const b=[];for(let F=0;F<C.length;F++)ne[F]>=3&&b.push(F);b.sort((F,ee)=>U[ee]-U[F]);const H=[];for(const F of b){const ee=P[F],pe=(ee%r+.5)*o,ce=((ee/r|0)+.5)*o;if(H.every(ae=>Math.hypot(ae.x-pe,ae.y-ce)>=350)&&H.push({x:pe,y:ce,depth:C[F],area:ne[F]*o*o}),H.length>=6)break}let z=0;for(const F of i.buildings){const ee=Math.min(r-1,Math.max(0,Math.floor(F.c[0]/o))),pe=Math.min(a-1,Math.max(0,Math.floor(F.c[1]/o)));let ce=0;for(let ae=-1;ae<=1;ae++)for(let me=-1;me<=1;me++){const oe=ee+me,ie=pe+ae;if(oe<0||ie<0||oe>=r||ie>=a)continue;const de=ie*r+oe;d[de]||i.steep[de]||(ce=Math.max(ce,l[de*4+3]))}ce>.15&&z++}const X={};for(const F of s.facilities??[])if(F.ug){let ee=0;for(const pe of F.ug.cells)ee+=c[pe*4];X[F.id]=ee*o*o/F.ug.area}else X[F.id]=this.maxDepthNear(l,F.x,F.y,60);const j={};for(const F of s.validation[this.eventId]??[])j[F.id]=F.ug?X[F.ug]??0:F.berm!==void 0?Math.max(0,this.peakTideSoFar(e.time)-F.berm):this.maxDepthNear(l,F.x,F.y,60);const q={};for(const F of s.gauges){const ee=Math.floor(F.x/o),pe=Math.floor(F.y/o);let ce=-1,ae=1e9;for(let me=-3;me<=3;me++)for(let oe=-3;oe<=3;oe++){const ie=ee+oe,de=pe+me;if(ie<0||de<0||ie>=r||de>=a)continue;const xe=de*r+ie;if(!d[xe])continue;const ge=oe*oe+me*me;ge<ae&&(ae=ge,ce=xe)}ce>=0&&(q[F.code]=l[ce*4]-6)}return{t:e.time,maxDepth:f,maxDepthAll:p,floodedAreaKm2:g*o*o/1e6,floodedAreaSevereKm2:_*o*o/1e6,buildingsAffected:z,volumeMm3:m*o*o/1e6,valDepths:j,gaugeLevels:q,hotspots:H,facDepths:X}}peakTideSoFar(e){const t=this.forcing;let i=-99;for(let s=0;s<t.tideT.length;s++){const r=t.tideT[s];r<0||r>e||(i=Math.max(i,this.tideAt(r)))}return Math.max(i,this.tideAt(Math.max(0,e)))}maxDepthNear(e,t,i,s){const r=this.assets,a=r.meta.cols,o=r.meta.rows,l=r.meta.res,c=Math.floor(t/l),u=Math.floor(i/l),d=Math.ceil(s/l);let h=0;for(let f=u-d;f<=u+d;f++)for(let g=c-d;g<=c+d;g++){if(g<0||f<0||g>=a||f>=o)continue;const _=f*a+g;r.mask[_]||r.bldh[_]>0||r.dem[_]<2.4||r.basin[_]||r.rim[_]||r.steep[_]||Math.hypot((g+.5)*l-t,(f+.5)*l-i)>s||e[_*4+3]>h&&(h=e[_*4+3])}return h}frame(){requestAnimationFrame(()=>this.frame());const e=performance.now(),t=Math.min(.1,(e-this.lastFrame)/1e3);this.lastFrame=e;const i=this.solver;if(i&&this.forcing){let s=0,r=220;if(this.seekTarget!==null)if(s=Math.min(this.seekTarget-this.simT,r*i.dt*2),r=440,s<=0){if(this.seekTarget=null,this.ui.setStatus(null),this.flyAfterSeek){this.flyAfterSeek=!1,this.metrics=this.computeMetrics(i,"A");const d=this.metrics.hotspots??[];d.length&&this.world.director.flyTo(this.world.viewAt(d[0].x,d[0].y,520),2.5)}}else this.ui.setStatus(`${k("ffwd")} ${this.timeLabel(this.simT)}`);else this.playing&&(s=this.speed*t);if(this.tickMeasures(),s>0&&this.simT<this.windowSec){let d=Math.min(r,Math.max(1,Math.round(s/i.dt)));const h=this.simT+d*i.dt/2,f=this.tideAt(h),g=this.rainAt(h),_=this.hsAt(h);i.step(d,f,g,_),this.baseline&&this.baseline.step(d,f,g,_),this.simT+=d*i.dt,this.simT>=this.windowSec&&(this.simT=this.windowSec,this.setPlaying(!1),this.seekTarget=null,this.ui.setStatus(null)),this.ui.setTime(this.timeLabel(this.simT),this.simT/this.windowSec);const m=this.stormParts(this.simT);this.ui.setConditions({signal:m.sig,storm:m.dist,tide:f,rain:this.rainMmAt(h),hs:this.hsAt(h),dt:i.dt,n:d}),this.pins.length&&this.simT-this.lastPinSample>=300&&this.samplePins(i)}if(e-this.lastMetrics>700&&this.simT>0){this.lastMetrics=e,this.metrics=this.computeMetrics(i,"A"),this.baseline&&(this.baseMetrics=this.computeMetrics(this.baseline,"B")),this.maxDepthSeen=Math.max(this.maxDepthSeen,this.metrics.maxDepthAll,this.baseMetrics?.maxDepthAll??0);const d=.45*this.assets.meta.res/Math.sqrt(9.81*Math.max(1,this.maxDepthSeen*1.4+.5));d<i.dt&&(i.setDt(d),this.baseline?.setDt(d)),this.ui.setMetrics(this.metrics,this.compare?this.baseMetrics:null),this.ui.setHotspots(this.hotspotLabels(this.metrics.hotspots??[])),this.ui.setValidation(this.assets.meta.validation[this.eventId]??[],this.metrics),this.ui.setChartCursor(this.simT/3600),this.syncLabelInset(),this.world.setLabels(this.labelItems(this.metrics)),this.ui.setFacilities(this.metrics,this.compare?this.baseMetrics:null),this.pins.length&&this.pinsChanged(!1),this.follow&&this.followHotspot()}const a=this.rainMmAt(this.simT),o=this.forcing,l=this.tideAt(this.simT)-Ia(o.tideT,o.astro,this.simT,o.astro),c=Math.min(1,Math.max(l/2.2,a/70,.1)),u=(o.start.getTime()/36e5+8+this.simT/3600)%24;this.world.setWeather(a,c,u),a>35&&e-this.lastLightning>2500&&Math.random()<.02&&(this.world.lightning(),this.lastLightning=e)}this.world.render(t)}}function Ia(n,e,t,i){if(!n.length)return 0;if(t<=n[0])return e[0];if(t>=n[n.length-1])return e[e.length-1];let s=0,r=n.length-1;for(;r-s>1;){const o=s+r>>1;n[o]<=t?s=o:r=o}const a=(t-n[s])/(n[r]-n[s]);return e[s]+(e[r]-e[s])*a}window.addEventListener("DOMContentLoaded",()=>{window.app=new dE});
