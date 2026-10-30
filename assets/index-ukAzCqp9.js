var Ac=Object.defineProperty;var Cc=(i,t,e)=>t in i?Ac(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var N=(i,t,e)=>Cc(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function Rc(i,t,e,n,s=1){const r=e*n,a=new Float32Array(r),o=new Uint8Array(r),l=[],c=[],h=(d,g)=>{l.push(d),c.push(g);let v=l.length-1;for(;v>0;){const p=v-1>>1;if(l[p]<=l[v])break;[l[p],l[v]]=[l[v],l[p]],[c[p],c[v]]=[c[v],c[p]],v=p}},u=()=>{const d=l[0],g=c[0],v=l.pop(),p=c.pop();if(l.length){l[0]=v,c[0]=p;let m=0;for(;;){const S=2*m+1,x=S+1;let M=m;if(S<l.length&&l[S]<l[M]&&(M=S),x<l.length&&l[x]<l[M]&&(M=x),M===m)break;[l[M],l[m]]=[l[m],l[M]],[c[M],c[m]]=[c[m],c[M]],m=M}}return[d,g]};for(let d=0;d<r;d++){const g=d%e,v=d/e|0;(t[d]||g===0||v===0||g===e-1||v===n-1)&&(o[d]=1,a[d]=t[d]?-1e9:i[d],h(a[d],d))}for(;l.length;){const[d,g]=u(),v=g%e,p=g/e|0,m=[g-1,g+1,g-e,g+e];for(let S=0;S<4;S++){if(S===0&&v===0||S===1&&v===e-1||S===2&&p===0||S===3&&p===n-1)continue;const x=m[S];o[x]||(o[x]=1,a[x]=Math.max(d,i[x]),h(a[x],x))}}const f=new Uint8Array(r);for(let d=0;d<r;d++)!t[d]&&a[d]-i[d]>s&&(f[d]=1);return f}function Pc(i,t,e,n,s){const r=n*s,a=new Uint8Array(r).fill(99);for(let l=0;l<s;l++)for(let c=0;c<n;c++){const h=l*n+c;if(t[h]){a[h]=0;continue}let u=99;for(let f=-3;f<=3;f++)for(let d=-3;d<=3;d++){const g=c+d,v=l+f;if(!(g<0||v<0||g>=n||v>=s)&&t[v*n+g]===1){const p=Math.max(Math.abs(d),Math.abs(f));p<u&&(u=p)}}a[h]=u}const o=new Uint8Array(r);for(let l=0;l<s;l++)for(let c=0;c<n;c++){const h=l*n+c;if(t[h]||a[h]>2)continue;let u=!1;for(let f=-3;f<=3&&!u;f++)for(let d=-3;d<=3;d++){const g=c+d,v=l+f;if(g<0||v<0||g>=n||v>=s)continue;const p=v*n+g;if(!t[p]&&e[p]>0&&a[p]>a[h]&&i[p]>i[h]+.3){u=!0;break}}u&&(o[h]=1)}return o}function Lc(i,t,e,n,s,r=3,a=.5){const o=new Float32Array(n*s);for(let l=0;l<s;l++)for(let c=0;c<n;c++){const h=l*n+c,u=e[h];if(u<=0||t[h])continue;let f=h,d=i[h];for(let g=-r;g<=r;g++)for(let v=-r;v<=r;v++){const p=c+v,m=l+g;if(p<0||m<0||p>=n||m>=s)continue;const S=m*n+p;if(t[S])continue;const x=i[S];x>d&&x<=i[h]+8&&(d=x,f=S)}d-i[h]>=a?o[f]=Math.max(o[f],u):o[h]=Math.max(o[h],u)}return o}const tr="./".replace(/\/$/,"");async function Mi(i){const t=await fetch(i,{cache:"no-cache"});if(!t.ok)throw new Error(`${i}: ${t.status}`);return t.json()}async function xn(i,t){const e=await fetch(i);if(!e.ok)throw new Error(`${i}: ${e.status}`);const n=await e.arrayBuffer();if(n.byteLength!==t*4)throw new Error(`${i}: unexpected size ${n.byteLength}`);return new Float32Array(n)}async function Dc(i,t){const e=await fetch(i);if(!e.ok)throw new Error(`${i}: ${e.status}`);const n=await e.arrayBuffer();if(n.byteLength!==t)throw new Error(`${i}: unexpected size ${n.byteLength}`);return new Uint8Array(n)}function po(i){return new Promise(t=>{const e=new Image;e.crossOrigin="anonymous",e.onload=()=>t(e),e.onerror=()=>t(null),e.src=i})}function Mn(i,t,e){const n=new i.constructor(i.length);for(let s=0;s<e;s++)n.set(i.subarray(s*t,(s+1)*t),(e-1-s)*t);return n}async function Ic(){return Mi(`${tr}/scenes/index.json`)}async function Uc(){return Mi(`${tr}/events/index.json`)}async function Nc(i){return Mi(`${tr}/events/${i}.json`)}async function Fc(i,t){const e=`${tr}/scenes/${i}`;t?.(.05,"meta");const n=await Mi(`${e}/meta.json`),s=n.cols,r=n.rows;t?.(.15,"dem");const[a,o,l,c,h,u,f,d,g]=await Promise.all([xn(`${e}/dem.bin`,s*r),Dc(`${e}/mask.bin`,s*r),xn(`${e}/bldh.bin`,s*r).catch(()=>new Float32Array(s*r)),xn(`${e}/expo.bin`,s*r).catch(()=>new Float32Array(s*r)),Mi(`${e}/buildings.json`).catch(()=>({buildings:[]})),xn(`${e}/chan.bin`,s*r*3).catch(()=>xn(`${e}/chan.bin`,s*r).then(_=>{const w=new Float32Array(s*r*3);for(let O=0;O<s*r;O++)w[O*3]=_[O],w[O*3+2]=.05;return w})).catch(()=>new Float32Array(s*r*3)),xn(`${e}/ug.bin`,s*r).catch(()=>new Float32Array(s*r)),xn(`${e}/sg_cell.bin`,s*r*8).catch(()=>null),xn(`${e}/sg_face.bin`,s*r*8).catch(()=>null)]),v=await Mi(`${e}/measures.json`).catch(()=>null);t?.(.55,"textures");const[p,m]=await Promise.all([po(`${e}/imagery.jpg`),po(`${e}/basemap.jpg`)]);t?.(.95,"done");const S=Mn(a,s,r),x=Mn(o,s,r),M=Rc(S,x,s,r,2),R=Mn(l,s,r),A=Lc(S,x,Mn(c,s,r),s,r),T=Pc(S,x,A,s,r),D=d?Mn(d,s*8,r):null,q=new Uint8Array(s*r);if(D)for(let _=0;_<s*r;_++)D[_*8+7]-D[_*8]>3&&(q[_]=1);return{meta:n,dem:S,mask:x,bldh:R,expo:A,basin:M,rim:T,chan:Mn(u,s*3,r),ug:Mn(f,s,r),sgCell:D,sgFace:g?Mn(g,s*8,r):null,steep:q,buildings:h.buildings,imagery:p,basemap:m,savedMeasures:v}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Na="169",Si={ROTATE:0,DOLLY:1,PAN:2},gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Oc=0,mo=1,Bc=2,Ol=1,zc=2,un=3,In=0,Ce=1,ke=2,Ln=0,yi=1,Ws=2,go=3,vo=4,kc=5,Gn=100,Hc=101,Vc=102,Gc=103,Wc=104,$c=200,Xc=201,qc=202,Yc=203,Wr=204,$r=205,jc=206,Kc=207,Zc=208,Jc=209,Qc=210,th=211,eh=212,nh=213,ih=214,Xr=0,qr=1,Yr=2,Ti=3,jr=4,Kr=5,Zr=6,Jr=7,Bl=0,sh=1,rh=2,Dn=0,ah=1,oh=2,lh=3,ch=4,hh=5,uh=6,dh=7,zl=300,Ai=301,Ci=302,Qr=303,ta=304,er=306,ea=1e3,He=1001,na=1002,ce=1003,fh=1004,as=1005,Xe=1006,hr=1007,Pn=1008,pn=1009,kl=1010,Hl=1011,Zi=1012,Fa=1013,qn=1014,Ie=1015,ns=1016,Oa=1017,Ba=1018,Ri=1020,Vl=35902,Gl=1021,Wl=1022,Ae=1023,$l=1024,Xl=1025,bi=1026,Pi=1027,za=1028,ka=1029,ql=1030,Ha=1031,Va=1033,Os=33776,Bs=33777,zs=33778,ks=33779,ia=35840,sa=35841,ra=35842,aa=35843,oa=36196,la=37492,ca=37496,ha=37808,ua=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,va=37815,_a=37816,xa=37817,Ma=37818,Sa=37819,ya=37820,ba=37821,Hs=36492,wa=36494,Ea=36495,Yl=36283,Ta=36284,Aa=36285,Ca=36286,ph=3200,mh=3201,gh=0,vh=1,Rn="",We="srgb",Un="srgb-linear",Ga="display-p3",nr="display-p3-linear",$s="linear",ae="srgb",Xs="rec709",qs="p3",ti=7680,_o=519,_h=512,xh=513,Mh=514,jl=515,Sh=516,yh=517,bh=518,wh=519,xo=35044,Je="300 es",fn=2e3,Ys=2001;class Zn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mo=1234567;const Xi=Math.PI/180,Ji=180/Math.PI;function Jn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function Wa(i,t){return(i%t+t)%t}function Eh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Th(i,t,e){return i!==t?(e-i)/(t-i):0}function qi(i,t,e){return(1-e)*i+e*t}function Ah(i,t,e,n){return qi(i,t,1-Math.exp(-e*n))}function Ch(i,t=1){return t-Math.abs(Wa(i,t*2)-t)}function Rh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ph(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Lh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Dh(i,t){return i+Math.random()*(t-i)}function Ih(i){return i*(.5-Math.random())}function Uh(i){i!==void 0&&(Mo=i);let t=Mo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nh(i){return i*Xi}function Fh(i){return i*Ji}function Oh(i){return(i&i-1)===0&&i!==0}function Bh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ze={DEG2RAD:Xi,RAD2DEG:Ji,generateUUID:Jn,clamp:xe,euclideanModulo:Wa,mapLinear:Eh,inverseLerp:Th,lerp:qi,damp:Ah,pingpong:Ch,smoothstep:Rh,smootherstep:Ph,randInt:Lh,randFloat:Dh,randFloatSpread:Ih,seededRandom:Uh,degToRad:Nh,radToDeg:Fh,isPowerOfTwo:Oh,ceilPowerOfTwo:Bh,floorPowerOfTwo:zh,setQuaternionFromProperEuler:kh,normalize:Ee,denormalize:mi};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,s,r,a,o,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=s[0],p=s[3],m=s[6],S=s[1],x=s[4],M=s[7],R=s[2],A=s[5],T=s[8];return r[0]=a*v+o*S+l*R,r[3]=a*p+o*x+l*A,r[6]=a*m+o*M+l*T,r[1]=c*v+h*S+u*R,r[4]=c*p+h*x+u*A,r[7]=c*m+h*M+u*T,r[2]=f*v+d*S+g*R,r[5]=f*p+d*x+g*A,r[8]=f*m+d*M+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ur.makeScale(t,e)),this}rotate(t){return this.premultiply(ur.makeRotation(-t)),this}translate(t,e){return this.premultiply(ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ur=new Bt;function Kl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hh(){const i=js("canvas");return i.style.display="block",i}const So={};function Vs(i){i in So||(So[i]=!0,console.warn(i))}function Vh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Gh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const yo=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bo=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ni={[Un]:{transfer:$s,primaries:Xs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[We]:{transfer:ae,primaries:Xs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[nr]:{transfer:$s,primaries:qs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(bo),fromReference:i=>i.applyMatrix3(yo)},[Ga]:{transfer:ae,primaries:qs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(bo),fromReference:i=>i.applyMatrix3(yo).convertLinearToSRGB()}},$h=new Set([Un,nr]),Kt={enabled:!0,_workingColorSpace:Un,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!$h.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ni[t].toReference,s=Ni[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ni[i].primaries},getTransfer:function(i){return i===Rn?$s:Ni[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ni[t].luminanceCoefficients)}};function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ei;class Xh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ei===void 0&&(ei=js("canvas")),ei.width=t.width,ei.height=t.height;const n=ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=js("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=wi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qh=0;class Zl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Jn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(fr(s[a].image)):r.push(fr(s[a]))}else r=fr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function fr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yh=0;class we extends Zn{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=He,s=He,r=Xe,a=Pn,o=Ae,l=pn,c=we.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Jn(),this.name="",this.source=new Zl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ea:t.x=t.x-Math.floor(t.x);break;case He:t.x=t.x<0?0:1;break;case na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ea:t.y=t.y-Math.floor(t.y);break;case He:t.y=t.y<0?0:1;break;case na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=zl;we.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(d+1)/2,R=(m+1)/2,A=(h+f)/4,T=(u+v)/4,D=(g+p)/4;return x>M&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=T/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=D/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=T/r,s=D/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-v)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jh extends Zn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new we(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Zl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends jh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jl extends we{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ce,this.minFilter=ce,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kh extends we{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ce,this.minFilter=ce,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let p=1-o;const m=l*f+c*d+h*g+u*v,S=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,m*S);p=Math.sin(p*A)/R,o=Math.sin(o*A)/R}const M=o*S;if(l=l*p+f*M,c=c*p+d*M,h=h*p+g*M,u=u*p+v*M,p===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pr.copy(this).projectOnVector(t),this.sub(pr)}reflect(t){return this.sub(pr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pr=new C,wo=new Yn;class en{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ye):Ye.fromBufferAttribute(r,a),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),os.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(t.matrixWorld),this.union(os)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fi),ls.subVectors(this.max,Fi),ni.subVectors(t.a,Fi),ii.subVectors(t.b,Fi),si.subVectors(t.c,Fi),Sn.subVectors(ii,ni),yn.subVectors(si,ii),Fn.subVectors(ni,si);let e=[0,-Sn.z,Sn.y,0,-yn.z,yn.y,0,-Fn.z,Fn.y,Sn.z,0,-Sn.x,yn.z,0,-yn.x,Fn.z,0,-Fn.x,-Sn.y,Sn.x,0,-yn.y,yn.x,0,-Fn.y,Fn.x,0];return!mr(e,ni,ii,si,ls)||(e=[1,0,0,0,1,0,0,0,1],!mr(e,ni,ii,si,ls))?!1:(cs.crossVectors(Sn,yn),e=[cs.x,cs.y,cs.z],mr(e,ni,ii,si,ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const an=[new C,new C,new C,new C,new C,new C,new C,new C],Ye=new C,os=new en,ni=new C,ii=new C,si=new C,Sn=new C,yn=new C,Fn=new C,Fi=new C,ls=new C,cs=new C,On=new C;function mr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){On.fromArray(i,r);const o=s.x*Math.abs(On.x)+s.y*Math.abs(On.y)+s.z*Math.abs(On.z),l=t.dot(On),c=e.dot(On),h=n.dot(On);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Zh=new en,Oi=new C,gr=new C;class nn{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oi.subVectors(t,this.center);const e=Oi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Oi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oi.copy(t.center).add(gr)),this.expandByPoint(Oi.copy(t.center).sub(gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new C,vr=new C,hs=new C,bn=new C,_r=new C,us=new C,xr=new C;class is{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vr.copy(t).add(e).multiplyScalar(.5),hs.copy(e).sub(t).normalize(),bn.copy(this.origin).sub(vr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(hs),o=bn.dot(this.direction),l=-bn.dot(hs),c=bn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vr).addScaledVector(hs,f),d}intersectSphere(t,e){on.subVectors(t.center,this.origin);const n=on.dot(this.direction),s=on.dot(on)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,n,s,r){_r.subVectors(e,t),us.subVectors(n,t),xr.crossVectors(_r,us);let a=this.direction.dot(xr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bn.subVectors(this.origin,t);const l=o*this.direction.dot(us.crossVectors(bn,us));if(l<0)return null;const c=o*this.direction.dot(_r.cross(bn));if(c<0||l+c>a)return null;const h=-o*bn.dot(xr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,g,v,p){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,v,p)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ri.setFromMatrixColumn(t,0).length(),r=1/ri.setFromMatrixColumn(t,1).length(),a=1/ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f+v*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f-v*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jh,t,Qh)}lookAt(t,e,n){const s=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),wn.crossVectors(n,Oe),wn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),wn.crossVectors(n,Oe)),wn.normalize(),ds.crossVectors(Oe,wn),s[0]=wn.x,s[4]=ds.x,s[8]=Oe.x,s[1]=wn.y,s[5]=ds.y,s[9]=Oe.y,s[2]=wn.z,s[6]=ds.z,s[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],p=n[10],m=n[14],S=n[3],x=n[7],M=n[11],R=n[15],A=s[0],T=s[4],D=s[8],q=s[12],_=s[1],w=s[5],O=s[9],k=s[13],$=s[2],Z=s[6],G=s[10],F=s[14],V=s[3],at=s[7],it=s[11],tt=s[15];return r[0]=a*A+o*_+l*$+c*V,r[4]=a*T+o*w+l*Z+c*at,r[8]=a*D+o*O+l*G+c*it,r[12]=a*q+o*k+l*F+c*tt,r[1]=h*A+u*_+f*$+d*V,r[5]=h*T+u*w+f*Z+d*at,r[9]=h*D+u*O+f*G+d*it,r[13]=h*q+u*k+f*F+d*tt,r[2]=g*A+v*_+p*$+m*V,r[6]=g*T+v*w+p*Z+m*at,r[10]=g*D+v*O+p*G+m*it,r[14]=g*q+v*k+p*F+m*tt,r[3]=S*A+x*_+M*$+R*V,r[7]=S*T+x*w+M*Z+R*at,r[11]=S*D+x*O+M*G+R*it,r[15]=S*q+x*k+M*F+R*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+v*(+e*l*d-e*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+p*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+m*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],v=t[13],p=t[14],m=t[15],S=u*p*c-v*f*c+v*l*d-o*p*d-u*l*m+o*f*m,x=g*f*c-h*p*c-g*l*d+a*p*d+h*l*m-a*f*m,M=h*v*c-g*u*c+g*o*d-a*v*d-h*o*m+a*u*m,R=g*u*l-h*v*l-g*o*f+a*v*f+h*o*p-a*u*p,A=e*S+n*x+s*M+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=S*T,t[1]=(v*f*r-u*p*r-v*s*d+n*p*d+u*s*m-n*f*m)*T,t[2]=(o*p*r-v*l*r+v*s*c-n*p*c-o*s*m+n*l*m)*T,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*T,t[4]=x*T,t[5]=(h*p*r-g*f*r+g*s*d-e*p*d-h*s*m+e*f*m)*T,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*m-e*l*m)*T,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*d+e*l*d)*T,t[8]=M*T,t[9]=(g*u*r-h*v*r-g*n*d+e*v*d+h*n*m-e*u*m)*T,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*m+e*o*m)*T,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*T,t[12]=R*T,t[13]=(h*v*s-g*u*s+g*n*f-e*v*f-h*n*p+e*u*p)*T,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*p-e*o*p)*T,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,v=a*h,p=a*u,m=o*u,S=l*c,x=l*h,M=l*u,R=n.x,A=n.y,T=n.z;return s[0]=(1-(v+m))*R,s[1]=(d+M)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(d-M)*A,s[5]=(1-(f+m))*A,s[6]=(p+S)*A,s[7]=0,s[8]=(g+x)*T,s[9]=(p-S)*T,s[10]=(1-(f+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ri.set(s[0],s[1],s[2]).length();const a=ri.set(s[4],s[5],s[6]).length(),o=ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],je.copy(this);const c=1/r,h=1/a,u=1/o;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=u,je.elements[9]*=u,je.elements[10]*=u,e.setFromRotationMatrix(je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=fn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(o===fn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ys)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=fn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,d=(n+s)*h;let g,v;if(o===fn)g=(a+r)*u,v=-2*u;else if(o===Ys)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ri=new C,je=new te,Jh=new C(0,0,0),Qh=new C(1,1,1),wn=new C,ds=new C,Oe=new C,Eo=new te,To=new Yn;class gn{constructor(t=0,e=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return To.setFromEuler(this),this.setFromQuaternion(To,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class $a{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tu=0;const Ao=new C,ai=new Yn,ln=new te,fs=new C,Bi=new C,eu=new C,nu=new Yn,Co=new C(1,0,0),Ro=new C(0,1,0),Po=new C(0,0,1),Lo={type:"added"},iu={type:"removed"},oi={type:"childadded",child:null},Mr={type:"childremoved",child:null};class Re extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new C,e=new gn,n=new Yn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Bt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.multiply(ai),this}rotateOnWorldAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.premultiply(ai),this}rotateX(t){return this.rotateOnAxis(Co,t)}rotateY(t){return this.rotateOnAxis(Ro,t)}rotateZ(t){return this.rotateOnAxis(Po,t)}translateOnAxis(t,e){return Ao.copy(t).applyQuaternion(this.quaternion),this.position.add(Ao.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Co,t)}translateY(t){return this.translateOnAxis(Ro,t)}translateZ(t){return this.translateOnAxis(Po,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fs.copy(t):fs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Bi,fs,this.up):ln.lookAt(fs,Bi,this.up),this.quaternion.setFromRotationMatrix(ln),s&&(ln.extractRotation(s.matrixWorld),ai.setFromRotationMatrix(ln),this.quaternion.premultiply(ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lo),oi.child=t,this.dispatchEvent(oi),oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(iu),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lo),oi.child=t,this.dispatchEvent(oi),oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,t,eu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,nu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Re.DEFAULT_UP=new C(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new C,cn=new C,Sr=new C,hn=new C,li=new C,ci=new C,Do=new C,yr=new C,br=new C,wr=new C,Er=new ue,Tr=new ue,Ar=new ue;class Qe{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ke.subVectors(s,e),cn.subVectors(n,e),Sr.subVectors(t,e);const a=Ke.dot(Ke),o=Ke.dot(cn),l=Ke.dot(Sr),c=cn.dot(cn),h=cn.dot(Sr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hn.x),l.addScaledVector(a,hn.y),l.addScaledVector(o,hn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Er.setScalar(0),Tr.setScalar(0),Ar.setScalar(0),Er.fromBufferAttribute(t,e),Tr.fromBufferAttribute(t,n),Ar.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Er,r.x),a.addScaledVector(Tr,r.y),a.addScaledVector(Ar,r.z),a}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),cn.subVectors(t,e),Ke.cross(cn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Ke.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;li.subVectors(s,n),ci.subVectors(r,n),yr.subVectors(t,n);const l=li.dot(yr),c=ci.dot(yr);if(l<=0&&c<=0)return e.copy(n);br.subVectors(t,s);const h=li.dot(br),u=ci.dot(br);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(li,a);wr.subVectors(t,r);const d=li.dot(wr),g=ci.dot(wr);if(g>=0&&d<=g)return e.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ci,o);const p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Do.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Do,o);const m=1/(p+v+f);return a=v*m,o=f*m,e.copy(n).addScaledVector(li,a).addScaledVector(ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Cr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=Wa(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Cr(a,r,t+1/3),this.g=Cr(a,r,t),this.b=Cr(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=Ql[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=dr(t.r),this.g=dr(t.g),this.b=dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return Kt.fromWorkingColorSpace(be.copy(this),t),Math.round(xe(be.r*255,0,255))*65536+Math.round(xe(be.g*255,0,255))*256+Math.round(xe(be.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,s=be.g,r=be.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=We){Kt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,s=be.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(ps);const n=qi(En.h,ps.h,e),s=qi(En.s,ps.s,e),r=qi(En.l,ps.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Ft;Ft.NAMES=Ql;let su=0;class Di extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=yi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wr,this.blendDst=$r,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wr&&(n.blendSrc=this.blendSrc),this.blendDst!==$r&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_o&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wn extends Di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new C,ms=new rt;class Se{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xo,this.updateRanges=[],this.gpuType=Ie,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ms.fromBufferAttribute(this,e),ms.applyMatrix3(t),this.setXY(e,ms.x,ms.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xo&&(t.usage=this.usage),t}}class tc extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ec extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ru=0;const Ge=new te,Rr=new Re,hi=new C,Be=new en,zi=new en,_e=new C;class de extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kl(t)?ec:tc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,n){return Ge.makeTranslation(t,e,n),this.applyMatrix4(Ge),this}scale(t,e,n){return Ge.makeScale(t,e,n),this.applyMatrix4(Ge),this}lookAt(t){return Rr.lookAt(t),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];zi.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Be.min,zi.min),Be.expandByPoint(_e),_e.addVectors(Be.max,zi.max),Be.expandByPoint(_e)):(Be.expandByPoint(zi.min),Be.expandByPoint(zi.max))}Be.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_e.fromBufferAttribute(o,c),l&&(hi.fromBufferAttribute(t,c),_e.add(hi)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new C,l[D]=new C;const c=new C,h=new C,u=new C,f=new rt,d=new rt,g=new rt,v=new C,p=new C;function m(D,q,_){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,q),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,D),d.fromBufferAttribute(r,q),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(w),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(w),o[D].add(v),o[q].add(v),o[_].add(v),l[D].add(p),l[q].add(p),l[_].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,q=S.length;D<q;++D){const _=S[D],w=_.start,O=_.count;for(let k=w,$=w+O;k<$;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const x=new C,M=new C,R=new C,A=new C;function T(D){R.fromBufferAttribute(s,D),A.copy(R);const q=o[D];x.copy(q),x.sub(R.multiplyScalar(R.dot(q))).normalize(),M.crossVectors(A,q);const w=M.dot(l[D])<0?-1:1;a.setXYZW(D,x.x,x.y,x.z,w)}for(let D=0,q=S.length;D<q;++D){const _=S[D],w=_.start,O=_.count;for(let k=w,$=w+O;k<$;k+=3)T(t.getX(k+0)),T(t.getX(k+1)),T(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new Se(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new de,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Io=new te,Bn=new is,gs=new nn,Uo=new C,vs=new C,_s=new C,xs=new C,Pr=new C,Ms=new C,No=new C,Ss=new C;class ee extends Re{constructor(t=new de,e=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ms.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Pr.fromBufferAttribute(u,t),a?Ms.addScaledVector(Pr,h):Ms.addScaledVector(Pr.sub(e),h))}e.add(Ms)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!(gs.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(gs,Uo)===null||Bn.origin.distanceToSquared(Uo)>(t.far-t.near)**2))&&(Io.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(Io),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=a[p.materialIndex],S=Math.max(p.start,d.start),x=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,R=x;M<R;M+=3){const A=o.getX(M),T=o.getX(M+1),D=o.getX(M+2);s=ys(this,m,t,n,c,h,u,A,T,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const S=o.getX(p),x=o.getX(p+1),M=o.getX(p+2);s=ys(this,a,t,n,c,h,u,S,x,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=a[p.materialIndex],S=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,R=x;M<R;M+=3){const A=M,T=M+1,D=M+2;s=ys(this,m,t,n,c,h,u,A,T,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const S=p,x=p+1,M=p+2;s=ys(this,a,t,n,c,h,u,S,x,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function au(i,t,e,n,s,r,a,o){let l;if(t.side===Ce?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===In,o),l===null)return null;Ss.copy(o),Ss.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ss);return c<e.near||c>e.far?null:{distance:c,point:Ss.clone(),object:i}}function ys(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,vs),i.getVertexPosition(l,_s),i.getVertexPosition(c,xs);const h=au(i,t,e,n,vs,_s,xs,No);if(h){const u=new C;Qe.getBarycoord(No,vs,_s,xs,u),s&&(h.uv=Qe.getInterpolatedAttribute(s,o,l,c,u,new rt)),r&&(h.uv1=Qe.getInterpolatedAttribute(r,o,l,c,u,new rt)),a&&(h.normal=Qe.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new C,materialIndex:0};Qe.getNormal(vs,_s,xs,f.normal),h.face=f,h.barycoord=u}return h}class jn extends de{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function g(v,p,m,S,x,M,R,A,T,D,q){const _=M/T,w=R/D,O=M/2,k=R/2,$=A/2,Z=T+1,G=D+1;let F=0,V=0;const at=new C;for(let it=0;it<G;it++){const tt=it*w-k;for(let gt=0;gt<Z;gt++){const Mt=gt*_-O;at[v]=Mt*S,at[p]=tt*x,at[m]=$,c.push(at.x,at.y,at.z),at[v]=0,at[p]=0,at[m]=A>0?1:-1,h.push(at.x,at.y,at.z),u.push(gt/T),u.push(1-it/D),F+=1}}for(let it=0;it<D;it++)for(let tt=0;tt<T;tt++){const gt=f+tt+Z*it,Mt=f+tt+Z*(it+1),X=f+(tt+1)+Z*(it+1),Q=f+(tt+1)+Z*it;l.push(gt,Mt,Q),l.push(Mt,X,Q),V+=6}o.addGroup(d,V,q),d+=V,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Li(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Te(i){const t={};for(let e=0;e<i.length;e++){const n=Li(i[e]);for(const s in n)t[s]=n[s]}return t}function ou(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const lu={clone:Li,merge:Te};var cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends Di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cu,this.fragmentShader=hu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=ou(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ic extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new C,Fo=new rt,Oo=new rt;class $e extends ic{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z)}getViewSize(t,e){return this.getViewBounds(t,Fo,Oo),e.subVectors(Oo,Fo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ui=-90,di=1;class uu extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $e(ui,di,t,e);s.layers=this.layers,this.add(s);const r=new $e(ui,di,t,e);r.layers=this.layers,this.add(r);const a=new $e(ui,di,t,e);a.layers=this.layers,this.add(a);const o=new $e(ui,di,t,e);o.layers=this.layers,this.add(o);const l=new $e(ui,di,t,e);l.layers=this.layers,this.add(l);const c=new $e(ui,di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class sc extends we{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ai,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class du extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new sc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new jn(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:Ln});r.uniforms.tEquirect.value=e;const a=new ee(s,r),o=e.minFilter;return e.minFilter===Pn&&(e.minFilter=Xe),new uu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Lr=new C,fu=new C,pu=new Bt;class Cn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Lr.subVectors(n,e).cross(fu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Lr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pu.getNormalMatrix(t),s=this.coplanarPoint(Lr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new nn,bs=new C;class rc{constructor(t=new Cn,e=new Cn,n=new Cn,s=new Cn,r=new Cn,a=new Cn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],v=s[10],p=s[11],m=s[12],S=s[13],x=s[14],M=s[15];if(n[0].setComponents(l-r,f-c,p-d,M-m).normalize(),n[1].setComponents(l+r,f+c,p+d,M+m).normalize(),n[2].setComponents(l+a,f+h,p+g,M+S).normalize(),n[3].setComponents(l-a,f-h,p-g,M-S).normalize(),n[4].setComponents(l-o,f-u,p-v,M-x).normalize(),e===fn)n[5].setComponents(l+o,f+u,p+v,M+x).normalize();else if(e===Ys)n[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(bs.x=s.normal.x>0?t.max.x:t.min.x,bs.y=s.normal.y>0?t.max.y:t.min.y,bs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ac(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function mu(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Ii extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const S=m*f-a;for(let x=0;x<c;x++){const M=x*u-r;g.push(M,-S,0),v.push(0,0,1),p.push(x/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const x=S+c*m,M=S+c*(m+1),R=S+1+c*(m+1),A=S+1+c*m;d.push(x,M,A),d.push(M,R,A)}this.setIndex(d),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.width,t.height,t.widthSegments,t.heightSegments)}}var gu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vu=`#ifdef USE_ALPHAHASH
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
#endif`,_u=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yu=`#ifdef USE_AOMAP
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
#endif`,bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wu=`#ifdef USE_BATCHING
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
#endif`,Eu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Au=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ru=`#ifdef USE_IRIDESCENCE
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
#endif`,Pu=`#ifdef USE_BUMPMAP
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
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zu=`#define PI 3.141592653589793
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
} // validated`,ku=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hu=`vec3 transformedNormal = objectNormal;
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
#endif`,Vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xu="gl_FragColor = linearToOutputTexel( gl_FragColor );",qu=`
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
}`,Yu=`#ifdef USE_ENVMAP
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
#endif`,ju=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ku=`#ifdef USE_ENVMAP
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
#endif`,Zu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
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
#endif`,Qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,id=`#ifdef USE_GRADIENTMAP
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
}`,sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,od=`uniform bool receiveShadow;
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
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fd=`PhysicalMaterial material;
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
#endif`,pd=`struct PhysicalMaterial {
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
}`,md=`
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
#endif`,gd=`#if defined( RE_IndirectDiffuse )
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
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_d=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ed=`#if defined( USE_POINTS_UV )
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
#endif`,Td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`#ifdef USE_MORPHTARGETS
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
#endif`,Dd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Id=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bd=`#ifdef USE_NORMALMAP
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
#endif`,zd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tf=`float getShadowMask() {
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
}`,ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nf=`#ifdef USE_SKINNING
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
#endif`,sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rf=`#ifdef USE_SKINNING
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
#endif`,af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hf=`#ifdef USE_TRANSMISSION
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
#endif`,uf=`#ifdef USE_TRANSMISSION
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
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vf=`uniform sampler2D t2D;
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`#include <common>
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
}`,bf=`#if DEPTH_PACKING == 3200
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
}`,wf=`#define DISTANCE
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
}`,Ef=`#define DISTANCE
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`uniform float scale;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Pf=`#include <common>
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
}`,Lf=`uniform vec3 diffuse;
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
}`,Df=`#define LAMBERT
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
}`,If=`#define LAMBERT
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
}`,Uf=`#define MATCAP
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
}`,Nf=`#define MATCAP
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
}`,Ff=`#define NORMAL
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
}`,Of=`#define NORMAL
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
}`,Bf=`#define PHONG
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
}`,zf=`#define PHONG
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
}`,kf=`#define STANDARD
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
}`,Hf=`#define STANDARD
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
}`,Vf=`#define TOON
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
}`,Gf=`#define TOON
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
}`,Wf=`uniform float size;
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
}`,$f=`uniform vec3 diffuse;
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
}`,Xf=`#include <common>
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
}`,qf=`uniform vec3 color;
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
}`,Yf=`uniform float rotation;
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
}`,jf=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:gu,alphahash_pars_fragment:vu,alphamap_fragment:_u,alphamap_pars_fragment:xu,alphatest_fragment:Mu,alphatest_pars_fragment:Su,aomap_fragment:yu,aomap_pars_fragment:bu,batching_pars_vertex:wu,batching_vertex:Eu,begin_vertex:Tu,beginnormal_vertex:Au,bsdfs:Cu,iridescence_fragment:Ru,bumpmap_pars_fragment:Pu,clipping_planes_fragment:Lu,clipping_planes_pars_fragment:Du,clipping_planes_pars_vertex:Iu,clipping_planes_vertex:Uu,color_fragment:Nu,color_pars_fragment:Fu,color_pars_vertex:Ou,color_vertex:Bu,common:zu,cube_uv_reflection_fragment:ku,defaultnormal_vertex:Hu,displacementmap_pars_vertex:Vu,displacementmap_vertex:Gu,emissivemap_fragment:Wu,emissivemap_pars_fragment:$u,colorspace_fragment:Xu,colorspace_pars_fragment:qu,envmap_fragment:Yu,envmap_common_pars_fragment:ju,envmap_pars_fragment:Ku,envmap_pars_vertex:Zu,envmap_physical_pars_fragment:ld,envmap_vertex:Ju,fog_vertex:Qu,fog_pars_vertex:td,fog_fragment:ed,fog_pars_fragment:nd,gradientmap_pars_fragment:id,lightmap_pars_fragment:sd,lights_lambert_fragment:rd,lights_lambert_pars_fragment:ad,lights_pars_begin:od,lights_toon_fragment:cd,lights_toon_pars_fragment:hd,lights_phong_fragment:ud,lights_phong_pars_fragment:dd,lights_physical_fragment:fd,lights_physical_pars_fragment:pd,lights_fragment_begin:md,lights_fragment_maps:gd,lights_fragment_end:vd,logdepthbuf_fragment:_d,logdepthbuf_pars_fragment:xd,logdepthbuf_pars_vertex:Md,logdepthbuf_vertex:Sd,map_fragment:yd,map_pars_fragment:bd,map_particle_fragment:wd,map_particle_pars_fragment:Ed,metalnessmap_fragment:Td,metalnessmap_pars_fragment:Ad,morphinstance_vertex:Cd,morphcolor_vertex:Rd,morphnormal_vertex:Pd,morphtarget_pars_vertex:Ld,morphtarget_vertex:Dd,normal_fragment_begin:Id,normal_fragment_maps:Ud,normal_pars_fragment:Nd,normal_pars_vertex:Fd,normal_vertex:Od,normalmap_pars_fragment:Bd,clearcoat_normal_fragment_begin:zd,clearcoat_normal_fragment_maps:kd,clearcoat_pars_fragment:Hd,iridescence_pars_fragment:Vd,opaque_fragment:Gd,packing:Wd,premultiplied_alpha_fragment:$d,project_vertex:Xd,dithering_fragment:qd,dithering_pars_fragment:Yd,roughnessmap_fragment:jd,roughnessmap_pars_fragment:Kd,shadowmap_pars_fragment:Zd,shadowmap_pars_vertex:Jd,shadowmap_vertex:Qd,shadowmask_pars_fragment:tf,skinbase_vertex:ef,skinning_pars_vertex:nf,skinning_vertex:sf,skinnormal_vertex:rf,specularmap_fragment:af,specularmap_pars_fragment:of,tonemapping_fragment:lf,tonemapping_pars_fragment:cf,transmission_fragment:hf,transmission_pars_fragment:uf,uv_pars_fragment:df,uv_pars_vertex:ff,uv_vertex:pf,worldpos_vertex:mf,background_vert:gf,background_frag:vf,backgroundCube_vert:_f,backgroundCube_frag:xf,cube_vert:Mf,cube_frag:Sf,depth_vert:yf,depth_frag:bf,distanceRGBA_vert:wf,distanceRGBA_frag:Ef,equirect_vert:Tf,equirect_frag:Af,linedashed_vert:Cf,linedashed_frag:Rf,meshbasic_vert:Pf,meshbasic_frag:Lf,meshlambert_vert:Df,meshlambert_frag:If,meshmatcap_vert:Uf,meshmatcap_frag:Nf,meshnormal_vert:Ff,meshnormal_frag:Of,meshphong_vert:Bf,meshphong_frag:zf,meshphysical_vert:kf,meshphysical_frag:Hf,meshtoon_vert:Vf,meshtoon_frag:Gf,points_vert:Wf,points_frag:$f,shadow_vert:Xf,shadow_frag:qf,sprite_vert:Yf,sprite_frag:jf},ot={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},tn={basic:{uniforms:Te([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Te([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Te([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Te([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Te([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Te([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Te([ot.points,ot.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Te([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Te([ot.common,ot.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Te([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Te([ot.sprite,ot.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Te([ot.common,ot.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Te([ot.lights,ot.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};tn.physical={uniforms:Te([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const ws={r:0,b:0,g:0},kn=new gn,Kf=new te;function Zf(i,t,e,n,s,r,a){const o=new Ft(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function v(S){let x=!1;const M=g(S);M===null?m(o,l):M&&M.isColor&&(m(M,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,x){const M=g(x);M&&(M.isCubeTexture||M.mapping===er)?(h===void 0&&(h=new ee(new jn(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Li(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),kn.copy(x.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kf.makeRotationFromEuler(kn)),h.material.toneMapped=Kt.getTransfer(M.colorSpace)!==ae,(u!==M||f!==M.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,d=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ee(new Ii(2,2),new vn({name:"BackgroundMaterial",uniforms:Li(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(M.colorSpace)!==ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,x){S.getRGB(ws,nc(i)),n.buffers.color.setClear(ws.r,ws.g,ws.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(o,l)},render:v,addToRenderList:p}}function Jf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(_,w,O,k,$){let Z=!1;const G=u(k,O,w);r!==G&&(r=G,c(r.object)),Z=d(_,k,O,$),Z&&g(_,k,O,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(_,w,O,k),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,w,O){const k=O.wireframe===!0;let $=n[_.id];$===void 0&&($={},n[_.id]=$);let Z=$[w.id];Z===void 0&&(Z={},$[w.id]=Z);let G=Z[k];return G===void 0&&(G=f(l()),Z[k]=G),G}function f(_){const w=[],O=[],k=[];for(let $=0;$<e;$++)w[$]=0,O[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:k,object:_,attributes:{},index:null}}function d(_,w,O,k){const $=r.attributes,Z=w.attributes;let G=0;const F=O.getAttributes();for(const V in F)if(F[V].location>=0){const it=$[V];let tt=Z[V];if(tt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(tt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(tt=_.instanceColor)),it===void 0||it.attribute!==tt||tt&&it.data!==tt.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function g(_,w,O,k){const $={},Z=w.attributes;let G=0;const F=O.getAttributes();for(const V in F)if(F[V].location>=0){let it=Z[V];it===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(it=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(it=_.instanceColor));const tt={};tt.attribute=it,it&&it.data&&(tt.data=it.data),$[V]=tt,G++}r.attributes=$,r.attributesNum=G,r.index=k}function v(){const _=r.newAttributes;for(let w=0,O=_.length;w<O;w++)_[w]=0}function p(_){m(_,0)}function m(_,w){const O=r.newAttributes,k=r.enabledAttributes,$=r.attributeDivisors;O[_]=1,k[_]===0&&(i.enableVertexAttribArray(_),k[_]=1),$[_]!==w&&(i.vertexAttribDivisor(_,w),$[_]=w)}function S(){const _=r.newAttributes,w=r.enabledAttributes;for(let O=0,k=w.length;O<k;O++)w[O]!==_[O]&&(i.disableVertexAttribArray(O),w[O]=0)}function x(_,w,O,k,$,Z,G){G===!0?i.vertexAttribIPointer(_,w,O,$,Z):i.vertexAttribPointer(_,w,O,k,$,Z)}function M(_,w,O,k){v();const $=k.attributes,Z=O.getAttributes(),G=w.defaultAttributeValues;for(const F in Z){const V=Z[F];if(V.location>=0){let at=$[F];if(at===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(at=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(at=_.instanceColor)),at!==void 0){const it=at.normalized,tt=at.itemSize,gt=t.get(at);if(gt===void 0)continue;const Mt=gt.buffer,X=gt.type,Q=gt.bytesPerElement,dt=X===i.INT||X===i.UNSIGNED_INT||at.gpuType===Fa;if(at.isInterleavedBufferAttribute){const ct=at.data,It=ct.stride,Et=at.offset;if(ct.isInstancedInterleavedBuffer){for(let zt=0;zt<V.locationSize;zt++)m(V.location+zt,ct.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let zt=0;zt<V.locationSize;zt++)p(V.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let zt=0;zt<V.locationSize;zt++)x(V.location+zt,tt/V.locationSize,X,it,It*Q,(Et+tt/V.locationSize*zt)*Q,dt)}else{if(at.isInstancedBufferAttribute){for(let ct=0;ct<V.locationSize;ct++)m(V.location+ct,at.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ct=0;ct<V.locationSize;ct++)p(V.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let ct=0;ct<V.locationSize;ct++)x(V.location+ct,tt/V.locationSize,X,it,tt*Q,tt/V.locationSize*ct*Q,dt)}}else if(G!==void 0){const it=G[F];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(V.location,it);break;case 3:i.vertexAttrib3fv(V.location,it);break;case 4:i.vertexAttrib4fv(V.location,it);break;default:i.vertexAttrib1fv(V.location,it)}}}}S()}function R(){D();for(const _ in n){const w=n[_];for(const O in w){const k=w[O];for(const $ in k)h(k[$].object),delete k[$];delete w[O]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;const w=n[_.id];for(const O in w){const k=w[O];for(const $ in k)h(k[$].object),delete k[$];delete w[O]}delete n[_.id]}function T(_){for(const w in n){const O=n[w];if(O[_.id]===void 0)continue;const k=O[_.id];for(const $ in k)h(k[$].object),delete k[$];delete O[_.id]}}function D(){q(),a=!0,r!==s&&(r=s,c(r.object))}function q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:q,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:S}}function Qf(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<f.length;v++)e.update(g,n,f[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Ae&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const D=T===ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==pn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ie&&!D)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:R,maxSamples:A}}function ep(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Cn,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const S=r?0:n,x=S*4;let M=m.clippingState||null;l.value=M,M=h(g,f,x,d);for(let R=0;R!==x;++R)M[R]=e[R];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=d+v*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,M=d;x!==v;++x,M+=4)a.copy(u[x]).applyMatrix4(S,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function np(i){let t=new WeakMap;function e(a,o){return o===Qr?a.mapping=Ai:o===ta&&(a.mapping=Ci),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qr||o===ta)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new du(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Xa extends ic{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vi=4,Bo=[.125,.215,.35,.446,.526,.582],$n=20,Dr=new Xa,zo=new Ft;let Ir=null,Ur=0,Nr=0,Fr=!1;const Vn=(1+Math.sqrt(5))/2,fi=1/Vn,ko=[new C(-Vn,fi,0),new C(Vn,fi,0),new C(-fi,0,Vn),new C(fi,0,Vn),new C(0,Vn,-fi),new C(0,Vn,fi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Ho{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ir,Ur,Nr),this._renderer.xr.enabled=Fr,t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ai||t.mapping===Ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:ns,format:Ae,colorSpace:Un,depthBuffer:!1},s=Vo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ip(r)),this._blurMaterial=sp(r,t,e)}return s}_compileMaterial(t){const e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,Dr)}_sceneToCubeUV(t,e,n,s){const o=new $e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(zo),h.toneMapping=Dn,h.autoClear=!1;const d=new Wn({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new ee(new jn,d);let v=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,v=!0):(d.color.copy(zo),v=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):S===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;Es(s,S*x,m>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ai||t.mapping===Ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Go());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ee(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Es(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Dr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ko[(s-r-1)%ko.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ee(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*$n-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):$n;p>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${$n}`);const m=[];let S=0;for(let T=0;T<$n;++T){const D=T/v,q=Math.exp(-D*D/2);m.push(q),T===0?S+=q:T<p&&(S+=2*q)}for(let T=0;T<m.length;T++)m[T]=m[T]/S;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const M=this._sizeLods[s],R=3*M*(s>x-vi?s-x+vi:0),A=4*(this._cubeSize-M);Es(e,R,A,3*M,2*M),l.setRenderTarget(e),l.render(u,Dr)}}function ip(i){const t=[],e=[],n=[];let s=i;const r=i-vi+1+Bo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-vi?l=Bo[a-i+vi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,p=2,m=1,S=new Float32Array(v*g*d),x=new Float32Array(p*g*d),M=new Float32Array(m*g*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,D=A>2?0:-1,q=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];S.set(q,v*g*A),x.set(f,p*g*A);const _=[A,A,A,A,A,A];M.set(_,m*g*A)}const R=new de;R.setAttribute("position",new Se(S,v)),R.setAttribute("uv",new Se(x,p)),R.setAttribute("faceIndex",new Se(M,m)),t.push(R),s>vi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vo(i,t,e){const n=new mn(i,t,e);return n.texture.mapping=er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function sp(i,t,e){const n=new Float32Array($n),s=new C(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qa(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Go(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qa(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Wo(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function qa(){return`

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
	`}function rp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Qr||l===ta,h=l===Ai||l===Ci;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ho(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Ho(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ap(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Vs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function op(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const S=d.array;v=d.version;for(let x=0,M=S.length;x<M;x+=3){const R=S[x+0],A=S[x+1],T=S[x+2];f.push(R,A,A,T,T,R)}}else if(g!==void 0){const S=g.array;v=g.version;for(let x=0,M=S.length/3-1;x<M;x+=3){const R=x+0,A=x+1,T=x+2;f.push(R,A,A,T,T,R)}}else return;const p=new(Kl(f)?ec:tc)(f,1);p.version=v;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function lp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function u(f,d,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let m=0;for(let S=0;S<g;S++)m+=d[S];for(let S=0;S<v.length;S++)e.update(m,n,v[S])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function hp(i,t,e){const n=new WeakMap,s=new ue;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let _=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var d=_;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),p===!0&&(M=3);let R=o.attributes.position.count*M,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const T=new Float32Array(R*A*4*u),D=new Jl(T,R,A,u);D.type=Ie,D.needsUpdate=!0;const q=M*4;for(let w=0;w<u;w++){const O=m[w],k=S[w],$=x[w],Z=R*A*4*w;for(let G=0;G<O.count;G++){const F=G*q;g===!0&&(s.fromBufferAttribute(O,G),T[Z+F+0]=s.x,T[Z+F+1]=s.y,T[Z+F+2]=s.z,T[Z+F+3]=0),v===!0&&(s.fromBufferAttribute(k,G),T[Z+F+4]=s.x,T[Z+F+5]=s.y,T[Z+F+6]=s.z,T[Z+F+7]=0),p===!0&&(s.fromBufferAttribute($,G),T[Z+F+8]=s.x,T[Z+F+9]=s.y,T[Z+F+10]=s.z,T[Z+F+11]=$.itemSize===4?s.w:1)}}f={count:u,texture:D,size:new rt(R,A)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function up(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class oc extends we{constructor(t,e,n,s,r,a,o,l,c,h=bi){if(h!==bi&&h!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bi&&(n=qn),n===void 0&&h===Pi&&(n=Ri),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ce,this.minFilter=l!==void 0?l:ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const lc=new we,$o=new oc(1,1),cc=new Jl,hc=new Kh,uc=new sc,Xo=[],qo=[],Yo=new Float32Array(16),jo=new Float32Array(9),Ko=new Float32Array(4);function Ui(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Xo[s];if(r===void 0&&(r=new Float32Array(s),Xo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ir(i,t){let e=qo[t];e===void 0&&(e=new Int32Array(t),qo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function gp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;Ko.set(n),i.uniformMatrix2fv(this.addr,!1,Ko),ve(e,n)}}function vp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;jo.set(n),i.uniformMatrix3fv(this.addr,!1,jo),ve(e,n)}}function _p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;Yo.set(n),i.uniformMatrix4fv(this.addr,!1,Yo),ve(e,n)}}function xp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function bp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function Tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function Ap(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($o.compareFunction=jl,r=$o):r=lc,e.setTexture2D(t||r,s)}function Cp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hc,s)}function Rp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||uc,s)}function Pp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||cc,s)}function Lp(i){switch(i){case 5126:return dp;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return vp;case 35676:return _p;case 5124:case 35670:return xp;case 35667:case 35671:return Mp;case 35668:case 35672:return Sp;case 35669:case 35673:return yp;case 5125:return bp;case 36294:return wp;case 36295:return Ep;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Pp}}function Dp(i,t){i.uniform1fv(this.addr,t)}function Ip(i,t){const e=Ui(t,this.size,2);i.uniform2fv(this.addr,e)}function Up(i,t){const e=Ui(t,this.size,3);i.uniform3fv(this.addr,e)}function Np(i,t){const e=Ui(t,this.size,4);i.uniform4fv(this.addr,e)}function Fp(i,t){const e=Ui(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Op(i,t){const e=Ui(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bp(i,t){const e=Ui(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function zp(i,t){i.uniform1iv(this.addr,t)}function kp(i,t){i.uniform2iv(this.addr,t)}function Hp(i,t){i.uniform3iv(this.addr,t)}function Vp(i,t){i.uniform4iv(this.addr,t)}function Gp(i,t){i.uniform1uiv(this.addr,t)}function Wp(i,t){i.uniform2uiv(this.addr,t)}function $p(i,t){i.uniform3uiv(this.addr,t)}function Xp(i,t){i.uniform4uiv(this.addr,t)}function qp(i,t,e){const n=this.cache,s=t.length,r=ir(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||lc,r[a])}function Yp(i,t,e){const n=this.cache,s=t.length,r=ir(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hc,r[a])}function jp(i,t,e){const n=this.cache,s=t.length,r=ir(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||uc,r[a])}function Kp(i,t,e){const n=this.cache,s=t.length,r=ir(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||cc,r[a])}function Zp(i){switch(i){case 5126:return Dp;case 35664:return Ip;case 35665:return Up;case 35666:return Np;case 35674:return Fp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return kp;case 35668:case 35672:return Hp;case 35669:case 35673:return Vp;case 5125:return Gp;case 36294:return Wp;case 36295:return $p;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Kp}}class Jp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lp(e.type)}}class Qp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zp(e.type)}}class tm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Or=/(\w+)(\])?(\[|\.)?/g;function Zo(i,t){i.seq.push(t),i.map[t.id]=t}function em(i,t,e){const n=i.name,s=n.length;for(Or.lastIndex=0;;){const r=Or.exec(n),a=Or.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Zo(e,c===void 0?new Jp(o,i,t):new Qp(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new tm(o),Zo(e,u)),e=u}}}class Gs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);em(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Jo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const nm=37297;let im=0;function sm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function rm(i){const t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(i);let n;switch(t===e?n="":t===qs&&e===Xs?n="LinearDisplayP3ToLinearSRGB":t===Xs&&e===qs&&(n="LinearSRGBToLinearDisplayP3"),i){case Un:case nr:return[n,"LinearTransferOETF"];case We:case Ga:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Qo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+sm(i.getShaderSource(t),a)}else return s}function am(i,t){const e=rm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function om(i,t){let e;switch(t){case ah:e="Linear";break;case oh:e="Reinhard";break;case lh:e="Cineon";break;case ch:e="ACESFilmic";break;case uh:e="AgX";break;case dh:e="Neutral";break;case hh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ts=new C;function lm(){Kt.getLuminanceCoefficients(Ts);const i=Ts.x.toFixed(4),t=Ts.y.toFixed(4),e=Ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($i).join(`
`)}function hm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function um(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function $i(i){return i!==""}function tl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function el(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ra(i){return i.replace(dm,pm)}const fm=new Map;function pm(i,t){let e=Ot[t];if(e===void 0){const n=fm.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ra(e)}const mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(i){return i.replace(mm,gm)}function gm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function il(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ol?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===zc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function _m(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ai:case Ci:t="ENVMAP_TYPE_CUBE";break;case er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ci:t="ENVMAP_MODE_REFRACTION";break}return t}function Mm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bl:t="ENVMAP_BLENDING_MULTIPLY";break;case sh:t="ENVMAP_BLENDING_MIX";break;case rh:t="ENVMAP_BLENDING_ADD";break}return t}function Sm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ym(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=vm(e),c=_m(e),h=xm(e),u=Mm(e),f=Sm(e),d=cm(e),g=hm(r),v=s.createProgram();let p,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($i).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($i).join(`
`),m.length>0&&(m+=`
`)):(p=[il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($i).join(`
`),m=[il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Dn?om("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,am("linearToOutputTexel",e.outputColorSpace),lm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($i).join(`
`)),a=Ra(a),a=tl(a,e),a=el(a,e),o=Ra(o),o=tl(o,e),o=el(o,e),a=nl(a),o=nl(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Je?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Je?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=S+p+a,M=S+m+o,R=Jo(s,s.VERTEX_SHADER,x),A=Jo(s,s.FRAGMENT_SHADER,M);s.attachShader(v,R),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(w){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(R).trim(),$=s.getShaderInfoLog(A).trim();let Z=!0,G=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,A);else{const F=Qo(s,R,"vertex"),V=Qo(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+F+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||$==="")&&(G=!1);G&&(w.diagnostics={runnable:Z,programLog:O,vertexShader:{log:k,prefix:p},fragmentShader:{log:$,prefix:m}})}s.deleteShader(R),s.deleteShader(A),D=new Gs(s,v),q=um(s,v)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let q;this.getAttributes=function(){return q===void 0&&T(this),q};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,nm)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=im++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}let bm=0;class wm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Em(t),e.set(t,n)),n}}class Em{constructor(t){this.id=bm++,this.code=t,this.usedTimes=0}}function Tm(i,t,e,n,s,r,a){const o=new $a,l=new wm,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,w,O,k,$){const Z=k.fog,G=$.geometry,F=_.isMeshStandardMaterial?k.environment:null,V=(_.isMeshStandardMaterial?e:t).get(_.envMap||F),at=V&&V.mapping===er?V.image.height:null,it=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const tt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,gt=tt!==void 0?tt.length:0;let Mt=0;G.morphAttributes.position!==void 0&&(Mt=1),G.morphAttributes.normal!==void 0&&(Mt=2),G.morphAttributes.color!==void 0&&(Mt=3);let X,Q,dt,ct;if(it){const Le=tn[it];X=Le.vertexShader,Q=Le.fragmentShader}else X=_.vertexShader,Q=_.fragmentShader,l.update(_),dt=l.getVertexShaderID(_),ct=l.getFragmentShaderID(_);const It=i.getRenderTarget(),Et=$.isInstancedMesh===!0,zt=$.isBatchedMesh===!0,Xt=!!_.map,kt=!!_.matcap,P=!!V,Ue=!!_.aoMap,Ht=!!_.lightMap,Wt=!!_.bumpMap,Pt=!!_.normalMap,se=!!_.displacementMap,Ut=!!_.emissiveMap,E=!!_.metalnessMap,y=!!_.roughnessMap,B=_.anisotropy>0,K=_.clearcoat>0,et=_.dispersion>0,Y=_.iridescence>0,yt=_.sheen>0,lt=_.transmission>0,mt=B&&!!_.anisotropyMap,$t=K&&!!_.clearcoatMap,nt=K&&!!_.clearcoatNormalMap,vt=K&&!!_.clearcoatRoughnessMap,Lt=Y&&!!_.iridescenceMap,Dt=Y&&!!_.iridescenceThicknessMap,_t=yt&&!!_.sheenColorMap,Vt=yt&&!!_.sheenRoughnessMap,Nt=!!_.specularMap,ne=!!_.specularColorMap,L=!!_.specularIntensityMap,ft=lt&&!!_.transmissionMap,W=lt&&!!_.thicknessMap,J=!!_.gradientMap,ht=!!_.alphaMap,pt=_.alphaTest>0,Gt=!!_.alphaHash,fe=!!_.extensions;let Pe=Dn;_.toneMapped&&(It===null||It.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const qt={shaderID:it,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:Q,defines:_.defines,customVertexShaderID:dt,customFragmentShaderID:ct,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:zt,batchingColor:zt&&$._colorsTexture!==null,instancing:Et,instancingColor:Et&&$.instanceColor!==null,instancingMorph:Et&&$.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:It===null?i.outputColorSpace:It.isXRRenderTarget===!0?It.texture.colorSpace:Un,alphaToCoverage:!!_.alphaToCoverage,map:Xt,matcap:kt,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:at,aoMap:Ue,lightMap:Ht,bumpMap:Wt,normalMap:Pt,displacementMap:d&&se,emissiveMap:Ut,normalMapObjectSpace:Pt&&_.normalMapType===vh,normalMapTangentSpace:Pt&&_.normalMapType===gh,metalnessMap:E,roughnessMap:y,anisotropy:B,anisotropyMap:mt,clearcoat:K,clearcoatMap:$t,clearcoatNormalMap:nt,clearcoatRoughnessMap:vt,dispersion:et,iridescence:Y,iridescenceMap:Lt,iridescenceThicknessMap:Dt,sheen:yt,sheenColorMap:_t,sheenRoughnessMap:Vt,specularMap:Nt,specularColorMap:ne,specularIntensityMap:L,transmission:lt,transmissionMap:ft,thicknessMap:W,gradientMap:J,opaque:_.transparent===!1&&_.blending===yi&&_.alphaToCoverage===!1,alphaMap:ht,alphaTest:pt,alphaHash:Gt,combine:_.combine,mapUv:Xt&&p(_.map.channel),aoMapUv:Ue&&p(_.aoMap.channel),lightMapUv:Ht&&p(_.lightMap.channel),bumpMapUv:Wt&&p(_.bumpMap.channel),normalMapUv:Pt&&p(_.normalMap.channel),displacementMapUv:se&&p(_.displacementMap.channel),emissiveMapUv:Ut&&p(_.emissiveMap.channel),metalnessMapUv:E&&p(_.metalnessMap.channel),roughnessMapUv:y&&p(_.roughnessMap.channel),anisotropyMapUv:mt&&p(_.anisotropyMap.channel),clearcoatMapUv:$t&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:nt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&p(_.sheenRoughnessMap.channel),specularMapUv:Nt&&p(_.specularMap.channel),specularColorMapUv:ne&&p(_.specularColorMap.channel),specularIntensityMapUv:L&&p(_.specularIntensityMap.channel),transmissionMapUv:ft&&p(_.transmissionMap.channel),thicknessMapUv:W&&p(_.thicknessMap.channel),alphaMapUv:ht&&p(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Pt||B),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!G.attributes.uv&&(Xt||ht),fog:!!Z,useFog:_.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Mt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Xt&&_.map.isVideoTexture===!0&&Kt.getTransfer(_.map.colorSpace)===ae,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ke,flipSided:_.side===Ce,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:fe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&_.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function S(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const O in _.defines)w.push(O),w.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(x(w,_),M(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function x(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function M(_,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),_.push(o.mask)}function R(_){const w=v[_.type];let O;if(w){const k=tn[w];O=lu.clone(k.uniforms)}else O=_.uniforms;return O}function A(_,w){let O;for(let k=0,$=h.length;k<$;k++){const Z=h[k];if(Z.cacheKey===w){O=Z,++O.usedTimes;break}}return O===void 0&&(O=new ym(i,w,_,r),h.push(O)),O}function T(_){if(--_.usedTimes===0){const w=h.indexOf(_);h[w]=h[h.length-1],h.pop(),_.destroy()}}function D(_){l.remove(_)}function q(){l.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:R,acquireProgram:A,releaseProgram:T,releaseShaderCache:D,programs:h,dispose:q}}function Am(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Cm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function sl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,g,v,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=p),t++,m}function o(u,f,d,g,v,p){const m=a(u,f,d,g,v,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(u,f,d,g,v,p){const m=a(u,f,d,g,v,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||Cm),n.length>1&&n.sort(f||sl),s.length>1&&s.sort(f||sl)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Rm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new rl,i.set(n,[a])):s>=r.length?(a=new rl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Pm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ft};break;case"SpotLight":e={position:new C,direction:new C,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Lm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Dm=0;function Im(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Um(i){const t=new Pm,e=Lm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new te,a=new te;function o(c){let h=0,u=0,f=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let d=0,g=0,v=0,p=0,m=0,S=0,x=0,M=0,R=0,A=0,T=0;c.sort(Im);for(let q=0,_=c.length;q<_;q++){const w=c[q],O=w.color,k=w.intensity,$=w.distance,Z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=O.r*k,u+=O.g*k,f+=O.b*k;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],k);T++}else if(w.isDirectionalLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const F=w.shadow,V=e.get(w);V.shadowIntensity=F.intensity,V.shadowBias=F.bias,V.shadowNormalBias=F.normalBias,V.shadowRadius=F.radius,V.shadowMapSize=F.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=w.shadow.matrix,S++}n.directional[d]=G,d++}else if(w.isSpotLight){const G=t.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(O).multiplyScalar(k),G.distance=$,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[v]=G;const F=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,F.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[v]=F.matrix,w.castShadow){const V=e.get(w);V.shadowIntensity=F.intensity,V.shadowBias=F.bias,V.shadowNormalBias=F.normalBias,V.shadowRadius=F.radius,V.shadowMapSize=F.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=Z,M++}v++}else if(w.isRectAreaLight){const G=t.get(w);G.color.copy(O).multiplyScalar(k),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=G,p++}else if(w.isPointLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){const F=w.shadow,V=e.get(w);V.shadowIntensity=F.intensity,V.shadowBias=F.bias,V.shadowNormalBias=F.normalBias,V.shadowRadius=F.radius,V.shadowMapSize=F.mapSize,V.shadowCameraNear=F.camera.near,V.shadowCameraFar=F.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=w.shadow.matrix,x++}n.point[g]=G,g++}else if(w.isHemisphereLight){const G=t.get(w);G.skyColor.copy(w.color).multiplyScalar(k),G.groundColor.copy(w.groundColor).multiplyScalar(k),n.hemi[m]=G,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==p||D.hemiLength!==m||D.numDirectionalShadows!==S||D.numPointShadows!==x||D.numSpotShadows!==M||D.numSpotMaps!==R||D.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,D.directionalLength=d,D.pointLength=g,D.spotLength=v,D.rectAreaLength=p,D.hemiLength=m,D.numDirectionalShadows=S,D.numPointShadows=x,D.numSpotShadows=M,D.numSpotMaps=R,D.numLightProbes=T,n.version=Dm++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const p=h.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const x=c[m];if(x.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(x.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function al(i){const t=new Um(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Nm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new al(i),t.set(s,[o])):r>=a.length?(o=new al(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Fm extends Di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Om extends Di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zm=`uniform sampler2D shadow_pass;
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
}`;function km(i,t,e){let n=new rc;const s=new rt,r=new rt,a=new ue,o=new Fm({depthPacking:mh}),l=new Om,c={},h=e.maxTextureSize,u={[In]:Ce,[Ce]:In,[ke]:ke},f=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Bm,fragmentShader:zm}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new de;g.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ee(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let m=this.type;this.render=function(A,T,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const q=i.getRenderTarget(),_=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Ln),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=m!==un&&this.type===un,$=m===un&&this.type!==un;for(let Z=0,G=A.length;Z<G;Z++){const F=A[Z],V=F.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const at=V.getFrameExtents();if(s.multiply(at),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,V.mapSize.y=r.y)),V.map===null||k===!0||$===!0){const tt=this.type!==un?{minFilter:ce,magFilter:ce}:{};V.map!==null&&V.map.dispose(),V.map=new mn(s.x,s.y,tt),V.map.texture.name=F.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const it=V.getViewportCount();for(let tt=0;tt<it;tt++){const gt=V.getViewport(tt);a.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),O.viewport(a),V.updateMatrices(F,tt),n=V.getFrustum(),M(T,D,V.camera,F,this.type)}V.isPointLightShadow!==!0&&this.type===un&&S(V,D),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(q,_,w)};function S(A,T){const D=t.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new mn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,D,f,v,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,D,d,v,null)}function x(A,T,D,q){let _=null;const w=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)_=w;else if(_=D.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=_.uuid,k=T.uuid;let $=c[O];$===void 0&&($={},c[O]=$);let Z=$[k];Z===void 0&&(Z=_.clone(),$[k]=Z,T.addEventListener("dispose",R)),_=Z}if(_.visible=T.visible,_.wireframe=T.wireframe,q===un?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:u[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const O=i.properties.get(_);O.light=D}return _}function M(A,T,D,q,_){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===un)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const k=t.update(A),$=A.material;if(Array.isArray($)){const Z=k.groups;for(let G=0,F=Z.length;G<F;G++){const V=Z[G],at=$[V.materialIndex];if(at&&at.visible){const it=x(A,at,q,_);A.onBeforeShadow(i,A,T,D,k,it,V),i.renderBufferDirect(D,null,k,it,A,V),A.onAfterShadow(i,A,T,D,k,it,V)}}}else if($.visible){const Z=x(A,$,q,_);A.onBeforeShadow(i,A,T,D,k,Z,null),i.renderBufferDirect(D,null,k,Z,A,null),A.onAfterShadow(i,A,T,D,k,Z,null)}}const O=A.children;for(let k=0,$=O.length;k<$;k++)M(O[k],T,D,q,_)}function R(A){A.target.removeEventListener("dispose",R);for(const D in c){const q=c[D],_=A.target.uuid;_ in q&&(q[_].dispose(),delete q[_])}}}const Hm={[Xr]:qr,[Yr]:Zr,[jr]:Jr,[Ti]:Kr,[qr]:Xr,[Zr]:Yr,[Jr]:jr,[Kr]:Ti};function Vm(i){function t(){let L=!1;const ft=new ue;let W=null;const J=new ue(0,0,0,0);return{setMask:function(ht){W!==ht&&!L&&(i.colorMask(ht,ht,ht,ht),W=ht)},setLocked:function(ht){L=ht},setClear:function(ht,pt,Gt,fe,Pe){Pe===!0&&(ht*=fe,pt*=fe,Gt*=fe),ft.set(ht,pt,Gt,fe),J.equals(ft)===!1&&(i.clearColor(ht,pt,Gt,fe),J.copy(ft))},reset:function(){L=!1,W=null,J.set(-1,0,0,0)}}}function e(){let L=!1,ft=!1,W=null,J=null,ht=null;return{setReversed:function(pt){ft=pt},setTest:function(pt){pt?dt(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(pt){W!==pt&&!L&&(i.depthMask(pt),W=pt)},setFunc:function(pt){if(ft&&(pt=Hm[pt]),J!==pt){switch(pt){case Xr:i.depthFunc(i.NEVER);break;case qr:i.depthFunc(i.ALWAYS);break;case Yr:i.depthFunc(i.LESS);break;case Ti:i.depthFunc(i.LEQUAL);break;case jr:i.depthFunc(i.EQUAL);break;case Kr:i.depthFunc(i.GEQUAL);break;case Zr:i.depthFunc(i.GREATER);break;case Jr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=pt}},setLocked:function(pt){L=pt},setClear:function(pt){ht!==pt&&(i.clearDepth(pt),ht=pt)},reset:function(){L=!1,W=null,J=null,ht=null}}}function n(){let L=!1,ft=null,W=null,J=null,ht=null,pt=null,Gt=null,fe=null,Pe=null;return{setTest:function(qt){L||(qt?dt(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(qt){ft!==qt&&!L&&(i.stencilMask(qt),ft=qt)},setFunc:function(qt,Le,rn){(W!==qt||J!==Le||ht!==rn)&&(i.stencilFunc(qt,Le,rn),W=qt,J=Le,ht=rn)},setOp:function(qt,Le,rn){(pt!==qt||Gt!==Le||fe!==rn)&&(i.stencilOp(qt,Le,rn),pt=qt,Gt=Le,fe=rn)},setLocked:function(qt){L=qt},setClear:function(qt){Pe!==qt&&(i.clearStencil(qt),Pe=qt)},reset:function(){L=!1,ft=null,W=null,J=null,ht=null,pt=null,Gt=null,fe=null,Pe=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,g=!1,v=null,p=null,m=null,S=null,x=null,M=null,R=null,A=new Ft(0,0,0),T=0,D=!1,q=null,_=null,w=null,O=null,k=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,G=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(F)[1]),Z=G>=1):F.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),Z=G>=2);let V=null,at={};const it=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),gt=new ue().fromArray(it),Mt=new ue().fromArray(tt);function X(L,ft,W,J){const ht=new Uint8Array(4),pt=i.createTexture();i.bindTexture(L,pt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<W;Gt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(ft+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return pt}const Q={};Q[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),dt(i.DEPTH_TEST),r.setFunc(Ti),Ht(!1),Wt(mo),dt(i.CULL_FACE),P(Ln);function dt(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function ct(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function It(L,ft){return h[L]!==ft?(i.bindFramebuffer(L,ft),h[L]=ft,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ft),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Et(L,ft){let W=f,J=!1;if(L){W=u.get(ft),W===void 0&&(W=[],u.set(ft,W));const ht=L.textures;if(W.length!==ht.length||W[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Gt=ht.length;pt<Gt;pt++)W[pt]=i.COLOR_ATTACHMENT0+pt;W.length=ht.length,J=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,J=!0);J&&i.drawBuffers(W)}function zt(L){return d!==L?(i.useProgram(L),d=L,!0):!1}const Xt={[Gn]:i.FUNC_ADD,[Hc]:i.FUNC_SUBTRACT,[Vc]:i.FUNC_REVERSE_SUBTRACT};Xt[Gc]=i.MIN,Xt[Wc]=i.MAX;const kt={[$c]:i.ZERO,[Xc]:i.ONE,[qc]:i.SRC_COLOR,[Wr]:i.SRC_ALPHA,[Qc]:i.SRC_ALPHA_SATURATE,[Zc]:i.DST_COLOR,[jc]:i.DST_ALPHA,[Yc]:i.ONE_MINUS_SRC_COLOR,[$r]:i.ONE_MINUS_SRC_ALPHA,[Jc]:i.ONE_MINUS_DST_COLOR,[Kc]:i.ONE_MINUS_DST_ALPHA,[th]:i.CONSTANT_COLOR,[eh]:i.ONE_MINUS_CONSTANT_COLOR,[nh]:i.CONSTANT_ALPHA,[ih]:i.ONE_MINUS_CONSTANT_ALPHA};function P(L,ft,W,J,ht,pt,Gt,fe,Pe,qt){if(L===Ln){g===!0&&(ct(i.BLEND),g=!1);return}if(g===!1&&(dt(i.BLEND),g=!0),L!==kc){if(L!==v||qt!==D){if((p!==Gn||x!==Gn)&&(i.blendEquation(i.FUNC_ADD),p=Gn,x=Gn),qt)switch(L){case yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ws:i.blendFunc(i.ONE,i.ONE);break;case go:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ws:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case go:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,S=null,M=null,R=null,A.set(0,0,0),T=0,v=L,D=qt}return}ht=ht||ft,pt=pt||W,Gt=Gt||J,(ft!==p||ht!==x)&&(i.blendEquationSeparate(Xt[ft],Xt[ht]),p=ft,x=ht),(W!==m||J!==S||pt!==M||Gt!==R)&&(i.blendFuncSeparate(kt[W],kt[J],kt[pt],kt[Gt]),m=W,S=J,M=pt,R=Gt),(fe.equals(A)===!1||Pe!==T)&&(i.blendColor(fe.r,fe.g,fe.b,Pe),A.copy(fe),T=Pe),v=L,D=!1}function Ue(L,ft){L.side===ke?ct(i.CULL_FACE):dt(i.CULL_FACE);let W=L.side===Ce;ft&&(W=!W),Ht(W),L.blending===yi&&L.transparent===!1?P(Ln):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const J=L.stencilWrite;a.setTest(J),J&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),se(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(L){q!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),q=L)}function Wt(L){L!==Oc?(dt(i.CULL_FACE),L!==_&&(L===mo?i.cullFace(i.BACK):L===Bc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),_=L}function Pt(L){L!==w&&(Z&&i.lineWidth(L),w=L)}function se(L,ft,W){L?(dt(i.POLYGON_OFFSET_FILL),(O!==ft||k!==W)&&(i.polygonOffset(ft,W),O=ft,k=W)):ct(i.POLYGON_OFFSET_FILL)}function Ut(L){L?dt(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function E(L){L===void 0&&(L=i.TEXTURE0+$-1),V!==L&&(i.activeTexture(L),V=L)}function y(L,ft,W){W===void 0&&(V===null?W=i.TEXTURE0+$-1:W=V);let J=at[W];J===void 0&&(J={type:void 0,texture:void 0},at[W]=J),(J.type!==L||J.texture!==ft)&&(V!==W&&(i.activeTexture(W),V=W),i.bindTexture(L,ft||Q[L]),J.type=L,J.texture=ft)}function B(){const L=at[V];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(L){gt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),gt.copy(L))}function _t(L){Mt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Mt.copy(L))}function Vt(L,ft){let W=l.get(ft);W===void 0&&(W=new WeakMap,l.set(ft,W));let J=W.get(L);J===void 0&&(J=i.getUniformBlockIndex(ft,L.name),W.set(L,J))}function Nt(L,ft){const J=l.get(ft).get(L);o.get(ft)!==J&&(i.uniformBlockBinding(ft,J,L.__bindingPointIndex),o.set(ft,J))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},V=null,at={},h={},u=new WeakMap,f=[],d=null,g=!1,v=null,p=null,m=null,S=null,x=null,M=null,R=null,A=new Ft(0,0,0),T=0,D=!1,q=null,_=null,w=null,O=null,k=null,gt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:dt,disable:ct,bindFramebuffer:It,drawBuffers:Et,useProgram:zt,setBlending:P,setMaterial:Ue,setFlipSided:Ht,setCullFace:Wt,setLineWidth:Pt,setPolygonOffset:se,setScissorTest:Ut,activeTexture:E,bindTexture:y,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:vt,texImage3D:Lt,updateUBOMapping:Vt,uniformBlockBinding:Nt,texStorage2D:$t,texStorage3D:nt,texSubImage2D:Y,texSubImage3D:yt,compressedTexSubImage2D:lt,compressedTexSubImage3D:mt,scissor:Dt,viewport:_t,reset:ne}}function ol(i,t,e,n){const s=Gm(n);switch(e){case Gl:return i*t;case $l:return i*t;case Xl:return i*t*2;case za:return i*t/s.components*s.byteLength;case ka:return i*t/s.components*s.byteLength;case ql:return i*t*2/s.components*s.byteLength;case Ha:return i*t*2/s.components*s.byteLength;case Wl:return i*t*3/s.components*s.byteLength;case Ae:return i*t*4/s.components*s.byteLength;case Va:return i*t*4/s.components*s.byteLength;case Os:case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zs:case ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:case aa:return Math.max(i,16)*Math.max(t,8)/4;case ia:case ra:return Math.max(i,8)*Math.max(t,8)/2;case oa:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ya:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Hs:case wa:case Ea:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Yl:case Ta:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Aa:case Ca:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gm(i){switch(i){case pn:case kl:return{byteLength:1,components:1};case Zi:case Hl:case ns:return{byteLength:2,components:1};case Oa:case Ba:return{byteLength:2,components:4};case qn:case Fa:case Ie:return{byteLength:4,components:1};case Vl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Wm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return d?new OffscreenCanvas(E,y):js("canvas")}function v(E,y,B){let K=1;const et=Ut(E);if((et.width>B||et.height>B)&&(K=B/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor(K*et.width),yt=Math.floor(K*et.height);u===void 0&&(u=g(Y,yt));const lt=y?g(Y,yt):u;return lt.width=Y,lt.height=yt,lt.getContext("2d").drawImage(E,0,0,Y,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Y+"x"+yt+")."),lt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),E;return E}function p(E){return E.generateMipmaps&&E.minFilter!==ce&&E.minFilter!==Xe}function m(E){i.generateMipmap(E)}function S(E,y,B,K,et=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=y;if(y===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),y===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),y===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),y===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),y===i.RGBA){const yt=et?$s:Kt.getTransfer(K);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=yt===ae?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(E,y){let B;return E?y===null||y===qn||y===Ri?B=i.DEPTH24_STENCIL8:y===Ie?B=i.DEPTH32F_STENCIL8:y===Zi&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===qn||y===Ri?B=i.DEPTH_COMPONENT24:y===Ie?B=i.DEPTH_COMPONENT32F:y===Zi&&(B=i.DEPTH_COMPONENT16),B}function M(E,y){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==ce&&E.minFilter!==Xe?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function R(E){const y=E.target;y.removeEventListener("dispose",R),T(y),y.isVideoTexture&&h.delete(y)}function A(E){const y=E.target;y.removeEventListener("dispose",A),q(y)}function T(E){const y=n.get(E);if(y.__webglInit===void 0)return;const B=E.source,K=f.get(B);if(K){const et=K[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&D(E),Object.keys(K).length===0&&f.delete(B)}n.remove(E)}function D(E){const y=n.get(E);i.deleteTexture(y.__webglTexture);const B=E.source,K=f.get(B);delete K[y.__cacheKey],a.memory.textures--}function q(E){const y=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let et=0;et<y.__webglFramebuffer[K].length;et++)i.deleteFramebuffer(y.__webglFramebuffer[K][et]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=E.textures;for(let K=0,et=B.length;K<et;K++){const Y=n.get(B[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(B[K])}n.remove(E)}let _=0;function w(){_=0}function O(){const E=_;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),_+=1,E}function k(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function $(E,y){const B=n.get(E);if(E.isVideoTexture&&Pt(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(B,E,y);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+y)}function Z(E,y){const B=n.get(E);if(E.version>0&&B.__version!==E.version){Mt(B,E,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+y)}function G(E,y){const B=n.get(E);if(E.version>0&&B.__version!==E.version){Mt(B,E,y);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+y)}function F(E,y){const B=n.get(E);if(E.version>0&&B.__version!==E.version){X(B,E,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+y)}const V={[ea]:i.REPEAT,[He]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},at={[ce]:i.NEAREST,[fh]:i.NEAREST_MIPMAP_NEAREST,[as]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[hr]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},it={[_h]:i.NEVER,[wh]:i.ALWAYS,[xh]:i.LESS,[jl]:i.LEQUAL,[Mh]:i.EQUAL,[bh]:i.GEQUAL,[Sh]:i.GREATER,[yh]:i.NOTEQUAL};function tt(E,y){if(y.type===Ie&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Xe||y.magFilter===hr||y.magFilter===as||y.magFilter===Pn||y.minFilter===Xe||y.minFilter===hr||y.minFilter===as||y.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,V[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,V[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,V[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,at[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,at[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,it[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ce||y.minFilter!==as&&y.minFilter!==Pn||y.type===Ie&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function gt(E,y){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",R));const K=y.source;let et=f.get(K);et===void 0&&(et={},f.set(K,et));const Y=k(y);if(Y!==E.__cacheKey){et[Y]===void 0&&(et[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),et[Y].usedTimes++;const yt=et[E.__cacheKey];yt!==void 0&&(et[E.__cacheKey].usedTimes--,yt.usedTimes===0&&D(y)),E.__cacheKey=Y,E.__webglTexture=et[Y].texture}return B}function Mt(E,y,B){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);const et=gt(E,y),Y=y.source;e.bindTexture(K,E.__webglTexture,i.TEXTURE0+B);const yt=n.get(Y);if(Y.version!==yt.__version||et===!0){e.activeTexture(i.TEXTURE0+B);const lt=Kt.getPrimaries(Kt.workingColorSpace),mt=y.colorSpace===Rn?null:Kt.getPrimaries(y.colorSpace),$t=y.colorSpace===Rn||lt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let nt=v(y.image,!1,s.maxTextureSize);nt=se(y,nt);const vt=r.convert(y.format,y.colorSpace),Lt=r.convert(y.type);let Dt=S(y.internalFormat,vt,Lt,y.colorSpace,y.isVideoTexture);tt(K,y);let _t;const Vt=y.mipmaps,Nt=y.isVideoTexture!==!0,ne=yt.__version===void 0||et===!0,L=Y.dataReady,ft=M(y,nt);if(y.isDepthTexture)Dt=x(y.format===Pi,y.type),ne&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Dt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Dt,nt.width,nt.height,0,vt,Lt,null));else if(y.isDataTexture)if(Vt.length>0){Nt&&ne&&e.texStorage2D(i.TEXTURE_2D,ft,Dt,Vt[0].width,Vt[0].height);for(let W=0,J=Vt.length;W<J;W++)_t=Vt[W],Nt?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,_t.width,_t.height,vt,Lt,_t.data):e.texImage2D(i.TEXTURE_2D,W,Dt,_t.width,_t.height,0,vt,Lt,_t.data);y.generateMipmaps=!1}else Nt?(ne&&e.texStorage2D(i.TEXTURE_2D,ft,Dt,nt.width,nt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,vt,Lt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,nt.width,nt.height,0,vt,Lt,nt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Nt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Dt,Vt[0].width,Vt[0].height,nt.depth);for(let W=0,J=Vt.length;W<J;W++)if(_t=Vt[W],y.format!==Ae)if(vt!==null)if(Nt){if(L)if(y.layerUpdates.size>0){const ht=ol(_t.width,_t.height,y.format,y.type);for(const pt of y.layerUpdates){const Gt=_t.data.subarray(pt*ht/_t.data.BYTES_PER_ELEMENT,(pt+1)*ht/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,pt,_t.width,_t.height,1,vt,Gt,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,_t.width,_t.height,nt.depth,vt,_t.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Dt,_t.width,_t.height,nt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,_t.width,_t.height,nt.depth,vt,Lt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Dt,_t.width,_t.height,nt.depth,0,vt,Lt,_t.data)}else{Nt&&ne&&e.texStorage2D(i.TEXTURE_2D,ft,Dt,Vt[0].width,Vt[0].height);for(let W=0,J=Vt.length;W<J;W++)_t=Vt[W],y.format!==Ae?vt!==null?Nt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,_t.width,_t.height,vt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Dt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,_t.width,_t.height,vt,Lt,_t.data):e.texImage2D(i.TEXTURE_2D,W,Dt,_t.width,_t.height,0,vt,Lt,_t.data)}else if(y.isDataArrayTexture)if(Nt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Dt,nt.width,nt.height,nt.depth),L)if(y.layerUpdates.size>0){const W=ol(nt.width,nt.height,y.format,y.type);for(const J of y.layerUpdates){const ht=nt.data.subarray(J*W/nt.data.BYTES_PER_ELEMENT,(J+1)*W/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,vt,Lt,ht)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,vt,Lt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,nt.width,nt.height,nt.depth,0,vt,Lt,nt.data);else if(y.isData3DTexture)Nt?(ne&&e.texStorage3D(i.TEXTURE_3D,ft,Dt,nt.width,nt.height,nt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,vt,Lt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,nt.width,nt.height,nt.depth,0,vt,Lt,nt.data);else if(y.isFramebufferTexture){if(ne)if(Nt)e.texStorage2D(i.TEXTURE_2D,ft,Dt,nt.width,nt.height);else{let W=nt.width,J=nt.height;for(let ht=0;ht<ft;ht++)e.texImage2D(i.TEXTURE_2D,ht,Dt,W,J,0,vt,Lt,null),W>>=1,J>>=1}}else if(Vt.length>0){if(Nt&&ne){const W=Ut(Vt[0]);e.texStorage2D(i.TEXTURE_2D,ft,Dt,W.width,W.height)}for(let W=0,J=Vt.length;W<J;W++)_t=Vt[W],Nt?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,vt,Lt,_t):e.texImage2D(i.TEXTURE_2D,W,Dt,vt,Lt,_t);y.generateMipmaps=!1}else if(Nt){if(ne){const W=Ut(nt);e.texStorage2D(i.TEXTURE_2D,ft,Dt,W.width,W.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Lt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Dt,vt,Lt,nt);p(y)&&m(K),yt.__version=Y.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function X(E,y,B){if(y.image.length!==6)return;const K=gt(E,y),et=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);const Y=n.get(et);if(et.version!==Y.__version||K===!0){e.activeTexture(i.TEXTURE0+B);const yt=Kt.getPrimaries(Kt.workingColorSpace),lt=y.colorSpace===Rn?null:Kt.getPrimaries(y.colorSpace),mt=y.colorSpace===Rn||yt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const $t=y.isCompressedTexture||y.image[0].isCompressedTexture,nt=y.image[0]&&y.image[0].isDataTexture,vt=[];for(let J=0;J<6;J++)!$t&&!nt?vt[J]=v(y.image[J],!0,s.maxCubemapSize):vt[J]=nt?y.image[J].image:y.image[J],vt[J]=se(y,vt[J]);const Lt=vt[0],Dt=r.convert(y.format,y.colorSpace),_t=r.convert(y.type),Vt=S(y.internalFormat,Dt,_t,y.colorSpace),Nt=y.isVideoTexture!==!0,ne=Y.__version===void 0||K===!0,L=et.dataReady;let ft=M(y,Lt);tt(i.TEXTURE_CUBE_MAP,y);let W;if($t){Nt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Vt,Lt.width,Lt.height);for(let J=0;J<6;J++){W=vt[J].mipmaps;for(let ht=0;ht<W.length;ht++){const pt=W[ht];y.format!==Ae?Dt!==null?Nt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,0,0,pt.width,pt.height,Dt,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,Vt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,0,0,pt.width,pt.height,Dt,_t,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,Vt,pt.width,pt.height,0,Dt,_t,pt.data)}}}else{if(W=y.mipmaps,Nt&&ne){W.length>0&&ft++;const J=Ut(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Vt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,vt[J].width,vt[J].height,Dt,_t,vt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Vt,vt[J].width,vt[J].height,0,Dt,_t,vt[J].data);for(let ht=0;ht<W.length;ht++){const Gt=W[ht].image[J].image;Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,0,0,Gt.width,Gt.height,Dt,_t,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,Vt,Gt.width,Gt.height,0,Dt,_t,Gt.data)}}else{Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Dt,_t,vt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Vt,Dt,_t,vt[J]);for(let ht=0;ht<W.length;ht++){const pt=W[ht];Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,0,0,Dt,_t,pt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,Vt,Dt,_t,pt.image[J])}}}p(y)&&m(i.TEXTURE_CUBE_MAP),Y.__version=et.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Q(E,y,B,K,et,Y){const yt=r.convert(B.format,B.colorSpace),lt=r.convert(B.type),mt=S(B.internalFormat,yt,lt,B.colorSpace);if(!n.get(y).__hasExternalTextures){const nt=Math.max(1,y.width>>Y),vt=Math.max(1,y.height>>Y);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Y,mt,nt,vt,y.depth,0,yt,lt,null):e.texImage2D(et,Y,mt,nt,vt,0,yt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Wt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,n.get(B).__webglTexture,0,Ht(y)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,n.get(B).__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(E,y,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){const K=y.depthTexture,et=K&&K.isDepthTexture?K.type:null,Y=x(y.stencilBuffer,et),yt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=Ht(y);Wt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,Y,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,Y,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Y,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,E)}else{const K=y.textures;for(let et=0;et<K.length;et++){const Y=K[et],yt=r.convert(Y.format,Y.colorSpace),lt=r.convert(Y.type),mt=S(Y.internalFormat,yt,lt,Y.colorSpace),$t=Ht(y);B&&Wt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,mt,y.width,y.height):Wt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,mt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,mt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);const K=n.get(y.depthTexture).__webglTexture,et=Ht(y);if(y.depthTexture.format===bi)Wt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(y.depthTexture.format===Pi)Wt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function It(E){const y=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const K=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=K}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ct(y.__webglFramebuffer,E)}else if(B){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=i.createRenderbuffer(),dt(y.__webglDepthbuffer[K],E,!1);else{const et=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),dt(y.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(E,y,B){const K=n.get(E);y!==void 0&&Q(K.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&It(E)}function zt(E){const y=E.texture,B=n.get(E),K=n.get(y);E.addEventListener("dispose",A);const et=E.textures,Y=E.isWebGLCubeRenderTarget===!0,yt=et.length>1;if(yt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,a.memory.textures++),Y){B.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[lt]=[];for(let mt=0;mt<y.mipmaps.length;mt++)B.__webglFramebuffer[lt][mt]=i.createFramebuffer()}else B.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let lt=0;lt<y.mipmaps.length;lt++)B.__webglFramebuffer[lt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(yt)for(let lt=0,mt=et.length;lt<mt;lt++){const $t=n.get(et[lt]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Wt(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let lt=0;lt<et.length;lt++){const mt=et[lt];B.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[lt]);const $t=r.convert(mt.format,mt.colorSpace),nt=r.convert(mt.type),vt=S(mt.internalFormat,$t,nt,mt.colorSpace,E.isXRRenderTarget===!0),Lt=Ht(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,vt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,B.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),tt(i.TEXTURE_CUBE_MAP,y);for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)Q(B.__webglFramebuffer[lt][mt],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,mt);else Q(B.__webglFramebuffer[lt],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(y)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let lt=0,mt=et.length;lt<mt;lt++){const $t=et[lt],nt=n.get($t);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),tt(i.TEXTURE_2D,$t),Q(B.__webglFramebuffer,E,$t,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),p($t)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(lt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,K.__webglTexture),tt(lt,y),y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)Q(B.__webglFramebuffer[mt],E,y,i.COLOR_ATTACHMENT0,lt,mt);else Q(B.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,lt,0);p(y)&&m(lt),e.unbindTexture()}E.depthBuffer&&It(E)}function Xt(E){const y=E.textures;for(let B=0,K=y.length;B<K;B++){const et=y[B];if(p(et)){const Y=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,yt=n.get(et).__webglTexture;e.bindTexture(Y,yt),m(Y),e.unbindTexture()}}}const kt=[],P=[];function Ue(E){if(E.samples>0){if(Wt(E)===!1){const y=E.textures,B=E.width,K=E.height;let et=i.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(E),lt=y.length>1;if(lt)for(let mt=0;mt<y.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let mt=0;mt<y.length;mt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[mt]);const $t=n.get(y[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,et,i.NEAREST),l===!0&&(kt.length=0,P.length=0,kt.push(i.COLOR_ATTACHMENT0+mt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(kt.push(Y),P.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let mt=0;mt<y.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[mt]);const $t=n.get(y[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ht(E){return Math.min(s.maxSamples,E.samples)}function Wt(E){const y=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Pt(E){const y=a.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function se(E,y){const B=E.colorSpace,K=E.format,et=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Un&&B!==Rn&&(Kt.getTransfer(B)===ae?(K!==Ae||et!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function Ut(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=w,this.setTexture2D=$,this.setTexture2DArray=Z,this.setTexture3D=G,this.setTextureCube=F,this.rebindTextures=Et,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Wt}function $m(i,t){function e(n,s=Rn){let r;const a=Kt.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===Oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ba)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kl)return i.BYTE;if(n===Hl)return i.SHORT;if(n===Zi)return i.UNSIGNED_SHORT;if(n===Fa)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===Ie)return i.FLOAT;if(n===ns)return i.HALF_FLOAT;if(n===Gl)return i.ALPHA;if(n===Wl)return i.RGB;if(n===Ae)return i.RGBA;if(n===$l)return i.LUMINANCE;if(n===Xl)return i.LUMINANCE_ALPHA;if(n===bi)return i.DEPTH_COMPONENT;if(n===Pi)return i.DEPTH_STENCIL;if(n===za)return i.RED;if(n===ka)return i.RED_INTEGER;if(n===ql)return i.RG;if(n===Ha)return i.RG_INTEGER;if(n===Va)return i.RGBA_INTEGER;if(n===Os||n===Bs||n===zs||n===ks)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Os)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Os)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===sa||n===ra||n===aa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oa||n===la||n===ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oa||n===la)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ca)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===va||n===_a||n===xa||n===Ma||n===Sa||n===ya||n===ba)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ha)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===va)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ma)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ya)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ba)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hs||n===wa||n===Ea)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Hs)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yl||n===Ta||n===Aa||n===Ca)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Xm extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xn extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qm={type:"move"};class Br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ym=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jm=`
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

}`;class Km{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new we,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vn({vertexShader:Ym,fragmentShader:jm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new Ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zm extends Zn{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=new Km,p=e.getContextAttributes();let m=null,S=null;const x=[],M=[],R=new rt;let A=null;const T=new $e;T.layers.enable(1),T.viewport=new ue;const D=new $e;D.layers.enable(2),D.viewport=new ue;const q=[T,D],_=new Xm;_.layers.enable(1),_.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=x[X];return Q===void 0&&(Q=new Br,x[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=x[X];return Q===void 0&&(Q=new Br,x[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=x[X];return Q===void 0&&(Q=new Br,x[X]=Q),Q.getHandSpace()};function k(X){const Q=M.indexOf(X.inputSource);if(Q===-1)return;const dt=x[Q];dt!==void 0&&(dt.update(X.inputSource,X.frame,c||a),dt.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",Z);for(let X=0;X<x.length;X++){const Q=M[X];Q!==null&&(M[X]=null,x[X].disconnect(Q))}w=null,O=null,v.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,S=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",$),s.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new mn(d.framebufferWidth,d.framebufferHeight,{format:Ae,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,dt=null,ct=null;p.depth&&(ct=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?Pi:bi,dt=p.stencil?Ri:qn);const It={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(It),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new mn(f.textureWidth,f.textureHeight,{format:Ae,type:pn,depthTexture:new oc(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(X){for(let Q=0;Q<X.removed.length;Q++){const dt=X.removed[Q],ct=M.indexOf(dt);ct>=0&&(M[ct]=null,x[ct].disconnect(dt))}for(let Q=0;Q<X.added.length;Q++){const dt=X.added[Q];let ct=M.indexOf(dt);if(ct===-1){for(let Et=0;Et<x.length;Et++)if(Et>=M.length){M.push(dt),ct=Et;break}else if(M[Et]===null){M[Et]=dt,ct=Et;break}if(ct===-1)break}const It=x[ct];It&&It.connect(dt)}}const G=new C,F=new C;function V(X,Q,dt){G.setFromMatrixPosition(Q.matrixWorld),F.setFromMatrixPosition(dt.matrixWorld);const ct=G.distanceTo(F),It=Q.projectionMatrix.elements,Et=dt.projectionMatrix.elements,zt=It[14]/(It[10]-1),Xt=It[14]/(It[10]+1),kt=(It[9]+1)/It[5],P=(It[9]-1)/It[5],Ue=(It[8]-1)/It[0],Ht=(Et[8]+1)/Et[0],Wt=zt*Ue,Pt=zt*Ht,se=ct/(-Ue+Ht),Ut=se*-Ue;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ut),X.translateZ(se),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),It[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const E=zt+se,y=Xt+se,B=Wt-Ut,K=Pt+(ct-Ut),et=kt*Xt/y*E,Y=P*Xt/y*E;X.projectionMatrix.makePerspective(B,K,et,Y,E,y),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function at(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Q=X.near,dt=X.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(dt=v.depthFar)),_.near=D.near=T.near=Q,_.far=D.far=T.far=dt,(w!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,O=_.far);const ct=X.parent,It=_.cameras;at(_,ct);for(let Et=0;Et<It.length;Et++)at(It[Et],ct);It.length===2?V(_,T,D):_.projectionMatrix.copy(T.projectionMatrix),it(X,_,ct)};function it(X,Q,dt){dt===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(dt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ji*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let tt=null;function gt(X,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const dt=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let ct=!1;dt.length!==_.cameras.length&&(_.cameras.length=0,ct=!0);for(let Et=0;Et<dt.length;Et++){const zt=dt[Et];let Xt=null;if(d!==null)Xt=d.getViewport(zt);else{const P=u.getViewSubImage(f,zt);Xt=P.viewport,Et===0&&(t.setRenderTargetTextures(S,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(S))}let kt=q[Et];kt===void 0&&(kt=new $e,kt.layers.enable(Et),kt.viewport=new ue,q[Et]=kt),kt.matrix.fromArray(zt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(zt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Et===0&&(_.matrix.copy(kt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ct===!0&&_.cameras.push(kt)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const Et=u.getDepthInformation(dt[0]);Et&&Et.isValid&&Et.texture&&v.init(t,Et,s.renderState)}}for(let dt=0;dt<x.length;dt++){const ct=M[dt],It=x[dt];ct!==null&&It!==void 0&&It.update(ct,Q,c||a)}tt&&tt(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Mt=new ac;Mt.setAnimationLoop(gt),this.setAnimationLoop=function(X){tt=X},this.dispose=function(){}}}const Hn=new gn,Jm=new te;function Qm(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,nc(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ce&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ce&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=t.get(m),x=S.envMap,M=S.envMapRotation;x&&(p.envMap.value=x,Hn.copy(M),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),p.envMapRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(Hn)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ce&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const M=x.program;n.uniformBlockBinding(S,M)}function c(S,x){let M=s[S.id];M===void 0&&(g(S),M=h(S),s[S.id]=M,S.addEventListener("dispose",p));const R=x.program;n.updateUBOMapping(S,R);const A=t.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function h(S){const x=u();S.__bindingPointIndex=x;const M=i.createBuffer(),R=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=s[S.id],M=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,T=M.length;A<T;A++){const D=Array.isArray(M[A])?M[A]:[M[A]];for(let q=0,_=D.length;q<_;q++){const w=D[q];if(d(w,A,q,R)===!0){const O=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let $=0;for(let Z=0;Z<k.length;Z++){const G=k[Z],F=v(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+$,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,$),$+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,x,M,R){const A=S.value,T=x+"_"+M;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const D=R[T];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return R[T]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(S){const x=S.uniforms;let M=0;const R=16;for(let T=0,D=x.length;T<D;T++){const q=Array.isArray(x[T])?x[T]:[x[T]];for(let _=0,w=q.length;_<w;_++){const O=q[_],k=Array.isArray(O.value)?O.value:[O.value];for(let $=0,Z=k.length;$<Z;$++){const G=k[$],F=v(G),V=M%R,at=V%F.boundary,it=V+at;M+=at,it!==0&&R-it<F.storage&&(M+=R-it),O.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=F.storage}}}const A=M%R;return A>0&&(M+=R-A),S.__size=M,S.__cache={},this}function v(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){const x=S.target;x.removeEventListener("dispose",p);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class eg{constructor(t={}){const{canvas:e=Hh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=Dn,this.toneMappingExposure=1;const x=this;let M=!1,R=0,A=0,T=null,D=-1,q=null;const _=new ue,w=new ue;let O=null;const k=new Ft(0);let $=0,Z=e.width,G=e.height,F=1,V=null,at=null;const it=new ue(0,0,Z,G),tt=new ue(0,0,Z,G);let gt=!1;const Mt=new rc;let X=!1,Q=!1;const dt=new te,ct=new te,It=new C,Et=new ue,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function kt(){return T===null?F:1}let P=n;function Ue(b,I){return e.getContext(b,I)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Na}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",pt,!1),P===null){const I="webgl2";if(P=Ue(I,b),P===null)throw Ue(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ht,Wt,Pt,se,Ut,E,y,B,K,et,Y,yt,lt,mt,$t,nt,vt,Lt,Dt,_t,Vt,Nt,ne,L;function ft(){Ht=new ap(P),Ht.init(),Nt=new $m(P,Ht),Wt=new tp(P,Ht,t,Nt),Pt=new Vm(P),Wt.reverseDepthBuffer&&Pt.buffers.depth.setReversed(!0),se=new cp(P),Ut=new Am,E=new Wm(P,Ht,Pt,Ut,Wt,Nt,se),y=new np(x),B=new rp(x),K=new mu(P),ne=new Jf(P,K),et=new op(P,K,se,ne),Y=new up(P,et,K,se),Dt=new hp(P,Wt,E),nt=new ep(Ut),yt=new Tm(x,y,B,Ht,Wt,ne,nt),lt=new Qm(x,Ut),mt=new Rm,$t=new Nm(Ht),Lt=new Zf(x,y,B,Pt,Y,f,l),vt=new km(x,Y,Wt),L=new tg(P,se,Wt,Pt),_t=new Qf(P,Ht,se),Vt=new lp(P,Ht,se),se.programs=yt.programs,x.capabilities=Wt,x.extensions=Ht,x.properties=Ut,x.renderLists=mt,x.shadowMap=vt,x.state=Pt,x.info=se}ft();const W=new Zm(x,P);this.xr=W,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=Ht.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ht.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(b){b!==void 0&&(F=b,this.setSize(Z,G,!1))},this.getSize=function(b){return b.set(Z,G)},this.setSize=function(b,I,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,G=I,e.width=Math.floor(b*F),e.height=Math.floor(I*F),z===!0&&(e.style.width=b+"px",e.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(Z*F,G*F).floor()},this.setDrawingBufferSize=function(b,I,z){Z=b,G=I,F=z,e.width=Math.floor(b*z),e.height=Math.floor(I*z),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(it)},this.setViewport=function(b,I,z,H){b.isVector4?it.set(b.x,b.y,b.z,b.w):it.set(b,I,z,H),Pt.viewport(_.copy(it).multiplyScalar(F).round())},this.getScissor=function(b){return b.copy(tt)},this.setScissor=function(b,I,z,H){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,I,z,H),Pt.scissor(w.copy(tt).multiplyScalar(F).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(b){Pt.setScissorTest(gt=b)},this.setOpaqueSort=function(b){V=b},this.setTransparentSort=function(b){at=b},this.getClearColor=function(b){return b.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(b=!0,I=!0,z=!0){let H=0;if(b){let U=!1;if(T!==null){const st=T.texture.format;U=st===Va||st===Ha||st===ka}if(U){const st=T.texture.type,ut=st===pn||st===qn||st===Zi||st===Ri||st===Oa||st===Ba,xt=Lt.getClearColor(),St=Lt.getClearAlpha(),At=xt.r,Ct=xt.g,bt=xt.b;ut?(d[0]=At,d[1]=Ct,d[2]=bt,d[3]=St,P.clearBufferuiv(P.COLOR,0,d)):(g[0]=At,g[1]=Ct,g[2]=bt,g[3]=St,P.clearBufferiv(P.COLOR,0,g))}else H|=P.COLOR_BUFFER_BIT}I&&(H|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),mt.dispose(),$t.dispose(),Ut.dispose(),y.dispose(),B.dispose(),Y.dispose(),ne.dispose(),L.dispose(),yt.dispose(),W.dispose(),W.removeEventListener("sessionstart",ro),W.removeEventListener("sessionend",ao),Nn.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=se.autoReset,I=vt.enabled,z=vt.autoUpdate,H=vt.needsUpdate,U=vt.type;ft(),se.autoReset=b,vt.enabled=I,vt.autoUpdate=z,vt.needsUpdate=H,vt.type=U}function pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Gt(b){const I=b.target;I.removeEventListener("dispose",Gt),fe(I)}function fe(b){Pe(b),Ut.remove(b)}function Pe(b){const I=Ut.get(b).programs;I!==void 0&&(I.forEach(function(z){yt.releaseProgram(z)}),b.isShaderMaterial&&yt.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,z,H,U,st){I===null&&(I=zt);const ut=U.isMesh&&U.matrixWorld.determinant()<0,xt=bc(b,I,z,H,U);Pt.setMaterial(H,ut);let St=z.index,At=1;if(H.wireframe===!0){if(St=et.getWireframeAttribute(z),St===void 0)return;At=2}const Ct=z.drawRange,bt=z.attributes.position;let Zt=Ct.start*At,re=(Ct.start+Ct.count)*At;st!==null&&(Zt=Math.max(Zt,st.start*At),re=Math.min(re,(st.start+st.count)*At)),St!==null?(Zt=Math.max(Zt,0),re=Math.min(re,St.count)):bt!=null&&(Zt=Math.max(Zt,0),re=Math.min(re,bt.count));const le=re-Zt;if(le<0||le===1/0)return;ne.setup(U,H,xt,z,St);let Ne,Yt=_t;if(St!==null&&(Ne=K.get(St),Yt=Vt,Yt.setIndex(Ne)),U.isMesh)H.wireframe===!0?(Pt.setLineWidth(H.wireframeLinewidth*kt()),Yt.setMode(P.LINES)):Yt.setMode(P.TRIANGLES);else if(U.isLine){let wt=H.linewidth;wt===void 0&&(wt=1),Pt.setLineWidth(wt*kt()),U.isLineSegments?Yt.setMode(P.LINES):U.isLineLoop?Yt.setMode(P.LINE_LOOP):Yt.setMode(P.LINE_STRIP)}else U.isPoints?Yt.setMode(P.POINTS):U.isSprite&&Yt.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Yt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Yt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const wt=U._multiDrawStarts,Me=U._multiDrawCounts,jt=U._multiDrawCount,qe=St?K.get(St).bytesPerElement:1,Qn=Ut.get(H).currentProgram.getUniforms();for(let Fe=0;Fe<jt;Fe++)Qn.setValue(P,"_gl_DrawID",Fe),Yt.render(wt[Fe]/qe,Me[Fe])}else if(U.isInstancedMesh)Yt.renderInstances(Zt,le,U.count);else if(z.isInstancedBufferGeometry){const wt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Me=Math.min(z.instanceCount,wt);Yt.renderInstances(Zt,le,Me)}else Yt.render(Zt,le)};function qt(b,I,z){b.transparent===!0&&b.side===ke&&b.forceSinglePass===!1?(b.side=Ce,b.needsUpdate=!0,rs(b,I,z),b.side=In,b.needsUpdate=!0,rs(b,I,z),b.side=ke):rs(b,I,z)}this.compile=function(b,I,z=null){z===null&&(z=b),p=$t.get(z),p.init(I),S.push(p),z.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),b!==z&&b.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const H=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const st=U.material;if(st)if(Array.isArray(st))for(let ut=0;ut<st.length;ut++){const xt=st[ut];qt(xt,z,U),H.add(xt)}else qt(st,z,U),H.add(st)}),S.pop(),p=null,H},this.compileAsync=function(b,I,z=null){const H=this.compile(b,I,z);return new Promise(U=>{function st(){if(H.forEach(function(ut){Ut.get(ut).currentProgram.isReady()&&H.delete(ut)}),H.size===0){U(b);return}setTimeout(st,10)}Ht.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Le=null;function rn(b){Le&&Le(b)}function ro(){Nn.stop()}function ao(){Nn.start()}const Nn=new ac;Nn.setAnimationLoop(rn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(b){Le=b,W.setAnimationLoop(b),b===null?Nn.stop():Nn.start()},W.addEventListener("sessionstart",ro),W.addEventListener("sessionend",ao),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(I),I=W.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,I,T),p=$t.get(b,S.length),p.init(I),S.push(p),ct.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Mt.setFromProjectionMatrix(ct),Q=this.localClippingEnabled,X=nt.init(this.clippingPlanes,Q),v=mt.get(b,m.length),v.init(),m.push(v),W.enabled===!0&&W.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&ar(st,I,-1/0,x.sortObjects)}ar(b,I,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(V,at),Xt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Xt&&Lt.addToRenderList(v,b),this.info.render.frame++,X===!0&&nt.beginShadows();const z=p.state.shadowsArray;vt.render(z,b,I),X===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=v.opaque,U=v.transmissive;if(p.setupLights(),I.isArrayCamera){const st=I.cameras;if(U.length>0)for(let ut=0,xt=st.length;ut<xt;ut++){const St=st[ut];lo(H,U,b,St)}Xt&&Lt.render(b);for(let ut=0,xt=st.length;ut<xt;ut++){const St=st[ut];oo(v,b,St,St.viewport)}}else U.length>0&&lo(H,U,b,I),Xt&&Lt.render(b),oo(v,b,I);T!==null&&(E.updateMultisampleRenderTarget(T),E.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(x,b,I),ne.resetDefaultState(),D=-1,q=null,S.pop(),S.length>0?(p=S[S.length-1],X===!0&&nt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function ar(b,I,z,H){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Mt.intersectsSprite(b)){H&&Et.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ct);const ut=Y.update(b),xt=b.material;xt.visible&&v.push(b,ut,xt,z,Et.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Mt.intersectsObject(b))){const ut=Y.update(b),xt=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Et.copy(b.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Et.copy(ut.boundingSphere.center)),Et.applyMatrix4(b.matrixWorld).applyMatrix4(ct)),Array.isArray(xt)){const St=ut.groups;for(let At=0,Ct=St.length;At<Ct;At++){const bt=St[At],Zt=xt[bt.materialIndex];Zt&&Zt.visible&&v.push(b,ut,Zt,z,Et.z,bt)}}else xt.visible&&v.push(b,ut,xt,z,Et.z,null)}}const st=b.children;for(let ut=0,xt=st.length;ut<xt;ut++)ar(st[ut],I,z,H)}function oo(b,I,z,H){const U=b.opaque,st=b.transmissive,ut=b.transparent;p.setupLightsView(z),X===!0&&nt.setGlobalState(x.clippingPlanes,z),H&&Pt.viewport(_.copy(H)),U.length>0&&ss(U,I,z),st.length>0&&ss(st,I,z),ut.length>0&&ss(ut,I,z),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function lo(b,I,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new mn(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?ns:pn,minFilter:Pn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const st=p.state.transmissionRenderTarget[H.id],ut=H.viewport||_;st.setSize(ut.z,ut.w);const xt=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(k),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),Xt&&Lt.render(z);const St=x.toneMapping;x.toneMapping=Dn;const At=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),X===!0&&nt.setGlobalState(x.clippingPlanes,H),ss(b,z,H),E.updateMultisampleRenderTarget(st),E.updateRenderTargetMipmap(st),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let bt=0,Zt=I.length;bt<Zt;bt++){const re=I[bt],le=re.object,Ne=re.geometry,Yt=re.material,wt=re.group;if(Yt.side===ke&&le.layers.test(H.layers)){const Me=Yt.side;Yt.side=Ce,Yt.needsUpdate=!0,co(le,z,H,Ne,Yt,wt),Yt.side=Me,Yt.needsUpdate=!0,Ct=!0}}Ct===!0&&(E.updateMultisampleRenderTarget(st),E.updateRenderTargetMipmap(st))}x.setRenderTarget(xt),x.setClearColor(k,$),At!==void 0&&(H.viewport=At),x.toneMapping=St}function ss(b,I,z){const H=I.isScene===!0?I.overrideMaterial:null;for(let U=0,st=b.length;U<st;U++){const ut=b[U],xt=ut.object,St=ut.geometry,At=H===null?ut.material:H,Ct=ut.group;xt.layers.test(z.layers)&&co(xt,I,z,St,At,Ct)}}function co(b,I,z,H,U,st){b.onBeforeRender(x,I,z,H,U,st),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(x,I,z,H,b,st),U.transparent===!0&&U.side===ke&&U.forceSinglePass===!1?(U.side=Ce,U.needsUpdate=!0,x.renderBufferDirect(z,I,H,U,b,st),U.side=In,U.needsUpdate=!0,x.renderBufferDirect(z,I,H,U,b,st),U.side=ke):x.renderBufferDirect(z,I,H,U,b,st),b.onAfterRender(x,I,z,H,U,st)}function rs(b,I,z){I.isScene!==!0&&(I=zt);const H=Ut.get(b),U=p.state.lights,st=p.state.shadowsArray,ut=U.state.version,xt=yt.getParameters(b,U.state,st,I,z),St=yt.getProgramCacheKey(xt);let At=H.programs;H.environment=b.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(b.isMeshStandardMaterial?B:y).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,At===void 0&&(b.addEventListener("dispose",Gt),At=new Map,H.programs=At);let Ct=At.get(St);if(Ct!==void 0){if(H.currentProgram===Ct&&H.lightsStateVersion===ut)return uo(b,xt),Ct}else xt.uniforms=yt.getUniforms(b),b.onBeforeCompile(xt,x),Ct=yt.acquireProgram(xt,St),At.set(St,Ct),H.uniforms=xt.uniforms;const bt=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(bt.clippingPlanes=nt.uniform),uo(b,xt),H.needsLights=Ec(b),H.lightsStateVersion=ut,H.needsLights&&(bt.ambientLightColor.value=U.state.ambient,bt.lightProbe.value=U.state.probe,bt.directionalLights.value=U.state.directional,bt.directionalLightShadows.value=U.state.directionalShadow,bt.spotLights.value=U.state.spot,bt.spotLightShadows.value=U.state.spotShadow,bt.rectAreaLights.value=U.state.rectArea,bt.ltc_1.value=U.state.rectAreaLTC1,bt.ltc_2.value=U.state.rectAreaLTC2,bt.pointLights.value=U.state.point,bt.pointLightShadows.value=U.state.pointShadow,bt.hemisphereLights.value=U.state.hemi,bt.directionalShadowMap.value=U.state.directionalShadowMap,bt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,bt.spotShadowMap.value=U.state.spotShadowMap,bt.spotLightMatrix.value=U.state.spotLightMatrix,bt.spotLightMap.value=U.state.spotLightMap,bt.pointShadowMap.value=U.state.pointShadowMap,bt.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ct,H.uniformsList=null,Ct}function ho(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=Gs.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function uo(b,I){const z=Ut.get(b);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function bc(b,I,z,H,U){I.isScene!==!0&&(I=zt),E.resetTextureUnits();const st=I.fog,ut=H.isMeshStandardMaterial?I.environment:null,xt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Un,St=(H.isMeshStandardMaterial?B:y).get(H.envMap||ut),At=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ct=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),bt=!!z.morphAttributes.position,Zt=!!z.morphAttributes.normal,re=!!z.morphAttributes.color;let le=Dn;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(le=x.toneMapping);const Ne=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Yt=Ne!==void 0?Ne.length:0,wt=Ut.get(H),Me=p.state.lights;if(X===!0&&(Q===!0||b!==q)){const Ve=b===q&&H.id===D;nt.setState(H,b,Ve)}let jt=!1;H.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Me.state.version||wt.outputColorSpace!==xt||U.isBatchedMesh&&wt.batching===!1||!U.isBatchedMesh&&wt.batching===!0||U.isBatchedMesh&&wt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&wt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&wt.instancing===!1||!U.isInstancedMesh&&wt.instancing===!0||U.isSkinnedMesh&&wt.skinning===!1||!U.isSkinnedMesh&&wt.skinning===!0||U.isInstancedMesh&&wt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&wt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&wt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&wt.instancingMorph===!1&&U.morphTexture!==null||wt.envMap!==St||H.fog===!0&&wt.fog!==st||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==nt.numPlanes||wt.numIntersection!==nt.numIntersection)||wt.vertexAlphas!==At||wt.vertexTangents!==Ct||wt.morphTargets!==bt||wt.morphNormals!==Zt||wt.morphColors!==re||wt.toneMapping!==le||wt.morphTargetsCount!==Yt)&&(jt=!0):(jt=!0,wt.__version=H.version);let qe=wt.currentProgram;jt===!0&&(qe=rs(H,I,U));let Qn=!1,Fe=!1,or=!1;const he=qe.getUniforms(),_n=wt.uniforms;if(Pt.useProgram(qe.program)&&(Qn=!0,Fe=!0,or=!0),H.id!==D&&(D=H.id,Fe=!0),Qn||q!==b){Wt.reverseDepthBuffer?(dt.copy(b.projectionMatrix),Gh(dt),Wh(dt),he.setValue(P,"projectionMatrix",dt)):he.setValue(P,"projectionMatrix",b.projectionMatrix),he.setValue(P,"viewMatrix",b.matrixWorldInverse);const Ve=he.map.cameraPosition;Ve!==void 0&&Ve.setValue(P,It.setFromMatrixPosition(b.matrixWorld)),Wt.logarithmicDepthBuffer&&he.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&he.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),q!==b&&(q=b,Fe=!0,or=!0)}if(U.isSkinnedMesh){he.setOptional(P,U,"bindMatrix"),he.setOptional(P,U,"bindMatrixInverse");const Ve=U.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),he.setValue(P,"boneTexture",Ve.boneTexture,E))}U.isBatchedMesh&&(he.setOptional(P,U,"batchingTexture"),he.setValue(P,"batchingTexture",U._matricesTexture,E),he.setOptional(P,U,"batchingIdTexture"),he.setValue(P,"batchingIdTexture",U._indirectTexture,E),he.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&he.setValue(P,"batchingColorTexture",U._colorsTexture,E));const lr=z.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0)&&Dt.update(U,z,qe),(Fe||wt.receiveShadow!==U.receiveShadow)&&(wt.receiveShadow=U.receiveShadow,he.setValue(P,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(_n.envMap.value=St,_n.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(_n.envMapIntensity.value=I.environmentIntensity),Fe&&(he.setValue(P,"toneMappingExposure",x.toneMappingExposure),wt.needsLights&&wc(_n,or),st&&H.fog===!0&&lt.refreshFogUniforms(_n,st),lt.refreshMaterialUniforms(_n,H,F,G,p.state.transmissionRenderTarget[b.id]),Gs.upload(P,ho(wt),_n,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Gs.upload(P,ho(wt),_n,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&he.setValue(P,"center",U.center),he.setValue(P,"modelViewMatrix",U.modelViewMatrix),he.setValue(P,"normalMatrix",U.normalMatrix),he.setValue(P,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ve=H.uniformsGroups;for(let cr=0,Tc=Ve.length;cr<Tc;cr++){const fo=Ve[cr];L.update(fo,qe),L.bind(fo,qe)}}return qe}function wc(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function Ec(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,I,z){Ut.get(b.texture).__webglTexture=I,Ut.get(b.depthTexture).__webglTexture=z;const H=Ut.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,I){const z=Ut.get(b);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,z=0){T=b,R=I,A=z;let H=!0,U=null,st=!1,ut=!1;if(b){const St=Ut.get(b);if(St.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(St.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(St.__hasExternalTextures)E.rebindTextures(b,Ut.get(b.texture).__webglTexture,Ut.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const bt=b.depthTexture;if(St.__boundDepthTexture!==bt){if(bt!==null&&Ut.has(bt)&&(b.width!==bt.image.width||b.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const At=b.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ut=!0);const Ct=Ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ct[I])?U=Ct[I][z]:U=Ct[I],st=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?U=Ut.get(b).__webglMultisampledFramebuffer:Array.isArray(Ct)?U=Ct[z]:U=Ct,_.copy(b.viewport),w.copy(b.scissor),O=b.scissorTest}else _.copy(it).multiplyScalar(F).floor(),w.copy(tt).multiplyScalar(F).floor(),O=gt;if(Pt.bindFramebuffer(P.FRAMEBUFFER,U)&&H&&Pt.drawBuffers(b,U),Pt.viewport(_),Pt.scissor(w),Pt.setScissorTest(O),st){const St=Ut.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,St.__webglTexture,z)}else if(ut){const St=Ut.get(b.texture),At=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,St.__webglTexture,z||0,At)}D=-1},this.readRenderTargetPixels=function(b,I,z,H,U,st,ut){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){Pt.bindFramebuffer(P.FRAMEBUFFER,xt);try{const St=b.texture,At=St.format,Ct=St.type;if(!Wt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-H&&z>=0&&z<=b.height-U&&P.readPixels(I,z,H,U,Nt.convert(At),Nt.convert(Ct),st)}finally{const St=T!==null?Ut.get(T).__webglFramebuffer:null;Pt.bindFramebuffer(P.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(b,I,z,H,U,st,ut){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){const St=b.texture,At=St.format,Ct=St.type;if(!Wt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=b.width-H&&z>=0&&z<=b.height-U){Pt.bindFramebuffer(P.FRAMEBUFFER,xt);const bt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,bt),P.bufferData(P.PIXEL_PACK_BUFFER,st.byteLength,P.STREAM_READ),P.readPixels(I,z,H,U,Nt.convert(At),Nt.convert(Ct),0);const Zt=T!==null?Ut.get(T).__webglFramebuffer:null;Pt.bindFramebuffer(P.FRAMEBUFFER,Zt);const re=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Vh(P,re,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,bt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,st),P.deleteBuffer(bt),P.deleteSync(re),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,I=null,z=0){b.isTexture!==!0&&(Vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,b=arguments[1]);const H=Math.pow(2,-z),U=Math.floor(b.image.width*H),st=Math.floor(b.image.height*H),ut=I!==null?I.x:0,xt=I!==null?I.y:0;E.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,ut,xt,U,st),Pt.unbindTexture()},this.copyTextureToTexture=function(b,I,z=null,H=null,U=0){b.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],I=arguments[2],U=arguments[3]||0,z=null);let st,ut,xt,St,At,Ct;z!==null?(st=z.max.x-z.min.x,ut=z.max.y-z.min.y,xt=z.min.x,St=z.min.y):(st=b.image.width,ut=b.image.height,xt=0,St=0),H!==null?(At=H.x,Ct=H.y):(At=0,Ct=0);const bt=Nt.convert(I.format),Zt=Nt.convert(I.type);E.setTexture2D(I,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const re=P.getParameter(P.UNPACK_ROW_LENGTH),le=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ne=P.getParameter(P.UNPACK_SKIP_PIXELS),Yt=P.getParameter(P.UNPACK_SKIP_ROWS),wt=P.getParameter(P.UNPACK_SKIP_IMAGES),Me=b.isCompressedTexture?b.mipmaps[U]:b.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Me.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Me.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xt),P.pixelStorei(P.UNPACK_SKIP_ROWS,St),b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,At,Ct,st,ut,bt,Zt,Me.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,At,Ct,Me.width,Me.height,bt,Me.data):P.texSubImage2D(P.TEXTURE_2D,U,At,Ct,st,ut,bt,Zt,Me),P.pixelStorei(P.UNPACK_ROW_LENGTH,re),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,le),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ne),P.pixelStorei(P.UNPACK_SKIP_ROWS,Yt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,wt),U===0&&I.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Pt.unbindTexture()},this.copyTextureToTexture3D=function(b,I,z=null,H=null,U=0){b.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,b=arguments[2],I=arguments[3],U=arguments[4]||0);let st,ut,xt,St,At,Ct,bt,Zt,re;const le=b.isCompressedTexture?b.mipmaps[U]:b.image;z!==null?(st=z.max.x-z.min.x,ut=z.max.y-z.min.y,xt=z.max.z-z.min.z,St=z.min.x,At=z.min.y,Ct=z.min.z):(st=le.width,ut=le.height,xt=le.depth,St=0,At=0,Ct=0),H!==null?(bt=H.x,Zt=H.y,re=H.z):(bt=0,Zt=0,re=0);const Ne=Nt.convert(I.format),Yt=Nt.convert(I.type);let wt;if(I.isData3DTexture)E.setTexture3D(I,0),wt=P.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)E.setTexture2DArray(I,0),wt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const Me=P.getParameter(P.UNPACK_ROW_LENGTH),jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),qe=P.getParameter(P.UNPACK_SKIP_PIXELS),Qn=P.getParameter(P.UNPACK_SKIP_ROWS),Fe=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,le.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,le.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,St),P.pixelStorei(P.UNPACK_SKIP_ROWS,At),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ct),b.isDataTexture||b.isData3DTexture?P.texSubImage3D(wt,U,bt,Zt,re,st,ut,xt,Ne,Yt,le.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(wt,U,bt,Zt,re,st,ut,xt,Ne,le.data):P.texSubImage3D(wt,U,bt,Zt,re,st,ut,xt,Ne,Yt,le),P.pixelStorei(P.UNPACK_ROW_LENGTH,Me),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fe),U===0&&I.generateMipmaps&&P.generateMipmap(wt),Pt.unbindTexture()},this.initRenderTarget=function(b){Ut.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),Pt.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,Pt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ga?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===nr?"display-p3":"srgb"}}class Ya extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ja extends we{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ce,h=ce,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pa extends Se{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const pi=new te,ll=new te,As=[],cl=new en,ng=new te,ki=new ee,Hi=new nn;class ig extends ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ng)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new en),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pi),cl.copy(t.boundingBox).applyMatrix4(pi),this.boundingBox.union(cl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new nn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pi),Hi.copy(t.boundingSphere).applyMatrix4(pi),this.boundingSphere.union(Hi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ki.geometry=this.geometry,ki.material=this.material,ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hi.copy(this.boundingSphere),Hi.applyMatrix4(n),t.ray.intersectsSphere(Hi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pi),ll.multiplyMatrices(n,pi),ki.matrixWorld=ll,ki.raycast(t,As);for(let a=0,o=As.length;a<o;a++){const l=As[a];l.instanceId=r,l.object=this,e.push(l)}As.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Pa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ja(new Float32Array(s*this.count),s,this.count,za,Ie));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class dc extends Di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ks=new C,Zs=new C,hl=new te,Vi=new is,Cs=new nn,zr=new C,ul=new C;class fc extends Re{constructor(t=new de,e=new dc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ks.fromBufferAttribute(e,s-1),Zs.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ks.distanceTo(Zs);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(s),Cs.radius+=r,t.ray.intersectsSphere(Cs)===!1)return;hl.copy(s).invert(),Vi.copy(t.ray).applyMatrix4(hl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,p=g-1;v<p;v+=c){const m=h.getX(v),S=h.getX(v+1),x=Rs(this,t,Vi,l,m,S);x&&e.push(x)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(d),m=Rs(this,t,Vi,l,v,p);m&&e.push(m)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=d,p=g-1;v<p;v+=c){const m=Rs(this,t,Vi,l,v,v+1);m&&e.push(m)}if(this.isLineLoop){const v=Rs(this,t,Vi,l,g-1,d);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rs(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Ks.fromBufferAttribute(a,s),Zs.fromBufferAttribute(a,r),e.distanceSqToSegment(Ks,Zs,zr,ul)>n)return;zr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(zr);if(!(l<t.near||l>t.far))return{distance:l,point:ul.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const dl=new C,fl=new C;class sg extends fc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)dl.fromBufferAttribute(e,s),fl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+dl.distanceTo(fl);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rg extends Di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const pl=new te,La=new is,Ps=new nn,Ls=new C;class ag extends Re{constructor(t=new de,e=new rg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(s),Ps.radius+=r,t.ray.intersectsSphere(Ps)===!1)return;pl.copy(s).invert(),La.copy(t.ray).applyMatrix4(pl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,v=d;g<v;g++){const p=c.getX(g);Ls.fromBufferAttribute(u,p),ml(Ls,p,l,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,v=d;g<v;g++)Ls.fromBufferAttribute(u,g),ml(Ls,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ml(i,t,e,n,s,r,a){const o=La.distanceSqToPoint(i);if(o<e){const l=new C;La.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new rt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,s=[],r=[],a=[],o=new C,l=new te;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(xe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(xe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ka extends sn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new rt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class og extends Ka{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Za(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Ds=new C,kr=new Za,Hr=new Za,Vr=new Za;class lg extends sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ds.subVectors(s[0],s[1]).add(s[0]),c=Ds);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ds.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ds),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),kr.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,p),Hr.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,p),Vr.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(kr.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Hr.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Vr.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(kr.calc(l),Hr.calc(l),Vr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function gl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function cg(i,t){const e=1-i;return e*e*t}function hg(i,t){return 2*(1-i)*i*t}function ug(i,t){return i*i*t}function Yi(i,t,e,n){return cg(i,t)+hg(i,e)+ug(i,n)}function dg(i,t){const e=1-i;return e*e*e*t}function fg(i,t){const e=1-i;return 3*e*e*i*t}function pg(i,t){return 3*(1-i)*i*i*t}function mg(i,t){return i*i*i*t}function ji(i,t,e,n,s){return dg(i,t)+fg(i,e)+pg(i,n)+mg(i,s)}class pc extends sn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ji(t,s.x,r.x,a.x,o.x),ji(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gg extends sn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ji(t,s.x,r.x,a.x,o.x),ji(t,s.y,r.y,a.y,o.y),ji(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mc extends sn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vg extends sn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gc extends sn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Yi(t,s.x,r.x,a.x),Yi(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _g extends sn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Yi(t,s.x,r.x,a.x),Yi(t,s.y,r.y,a.y),Yi(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vc extends sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(gl(o,l.x,c.x,h.x,u.x),gl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new rt().fromArray(s))}return this}}var vl=Object.freeze({__proto__:null,ArcCurve:og,CatmullRomCurve3:lg,CubicBezierCurve:pc,CubicBezierCurve3:gg,EllipseCurve:Ka,LineCurve:mc,LineCurve3:vg,QuadraticBezierCurve:gc,QuadraticBezierCurve3:_g,SplineCurve:vc});class xg extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new vl[s.type]().fromJSON(s))}return this}}class _l extends xg{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new mc(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new gc(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new pc(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new vc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Ka(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ja extends de{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new C,h=new rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(o,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Js extends de{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],p=n/2;let m=0;S(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(d,2));function S(){const M=new C,R=new C;let A=0;const T=(e-t)/n;for(let D=0;D<=r;D++){const q=[],_=D/r,w=_*(e-t)+t;for(let O=0;O<=s;O++){const k=O/s,$=k*l+o,Z=Math.sin($),G=Math.cos($);R.x=w*Z,R.y=-_*n+p,R.z=w*G,u.push(R.x,R.y,R.z),M.set(Z,T,G).normalize(),f.push(M.x,M.y,M.z),d.push(k,1-_),q.push(g++)}v.push(q)}for(let D=0;D<s;D++)for(let q=0;q<r;q++){const _=v[q][D],w=v[q+1][D],O=v[q+1][D+1],k=v[q][D+1];t>0&&(h.push(_,w,k),A+=3),e>0&&(h.push(w,O,k),A+=3)}c.addGroup(m,A,0),m+=A}function x(M){const R=g,A=new rt,T=new C;let D=0;const q=M===!0?t:e,_=M===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,p*_,0),f.push(0,_,0),d.push(.5,.5),g++;const w=g;for(let O=0;O<=s;O++){const $=O/s*l+o,Z=Math.cos($),G=Math.sin($);T.x=q*G,T.y=p*_,T.z=q*Z,u.push(T.x,T.y,T.z),f.push(0,_,0),A.x=Z*.5+.5,A.y=G*.5*_+.5,d.push(A.x,A.y),g++}for(let O=0;O<s;O++){const k=R+O,$=w+O;M===!0?h.push($,$+1,k):h.push($+1,$,k),D+=3}c.addGroup(m,D,M===!0?1:2),m+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Js(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _c extends _l{constructor(t){super(t),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new _l().fromJSON(s))}return this}}const Mg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=xc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(n&&(r=Eg(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Qi(r,a,e,o,l,d,0),a}};function xc(i,t,e,n,s){let r,a;if(s===Fg(i,t,e,n)>0)for(r=t;r<e;r+=n)a=xl(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=xl(r,i[r],i[r+1],a);return a&&sr(a,a.next)&&(es(a),a=a.next),a}function Kn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(sr(e,e.next)||oe(e.prev,e,e.next)===0)){if(es(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qi(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Pg(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?yg(i,n,s,r):Sg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),es(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=bg(Kn(i),t,e),Qi(i,t,e,n,s,r,2)):a===2&&wg(i,t,e,n,s,r):Qi(Kn(i),t,e,n,s,r,1);break}}}function Sg(i){const t=i.prev,e=i,n=i.next;if(oe(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&_i(s,o,r,l,a,c,g.x,g.y)&&oe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function yg(i,t,e,n){const s=i.prev,r=i,a=i.next;if(oe(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,v=o>l?o>c?o:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,m=Da(d,g,t,e,n),S=Da(v,p,t,e,n);let x=i.prevZ,M=i.nextZ;for(;x&&x.z>=m&&M&&M.z<=S;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&_i(o,h,l,u,c,f,x.x,x.y)&&oe(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=d&&M.x<=v&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&_i(o,h,l,u,c,f,M.x,M.y)&&oe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&_i(o,h,l,u,c,f,x.x,x.y)&&oe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=S;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&_i(o,h,l,u,c,f,M.x,M.y)&&oe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function bg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!sr(s,r)&&Mc(s,n,n.next,r)&&ts(s,r)&&ts(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),es(n),es(n.next),n=i=r),n=n.next}while(n!==i);return Kn(n)}function wg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ig(a,o)){let l=Sc(a,o);a=Kn(a,a.next),l=Kn(l,l.next),Qi(a,t,e,n,s,r,0),Qi(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Eg(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=xc(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Dg(c));for(s.sort(Tg),r=0;r<s.length;r++)e=Ag(s[r],e);return e}function Tg(i,t){return i.x-t.x}function Ag(i,t){const e=Cg(i,t);if(!e)return t;const n=Sc(e,i);return Kn(n,n.next),Kn(e,e.next)}function Cg(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&_i(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),ts(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Rg(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Rg(i,t){return oe(i.prev,i,t.prev)<0&&oe(t.next,i,i.next)<0}function Pg(i,t,e,n){let s=i;do s.z===0&&(s.z=Da(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Lg(s)}function Lg(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Da(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Dg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function _i(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ig(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ug(i,t)&&(ts(i,t)&&ts(t,i)&&Ng(i,t)&&(oe(i.prev,i,t.prev)||oe(i,t.prev,t))||sr(i,t)&&oe(i.prev,i,i.next)>0&&oe(t.prev,t,t.next)>0)}function oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function sr(i,t){return i.x===t.x&&i.y===t.y}function Mc(i,t,e,n){const s=Us(oe(i,t,e)),r=Us(oe(i,t,n)),a=Us(oe(e,n,i)),o=Us(oe(e,n,t));return!!(s!==r&&a!==o||s===0&&Is(i,e,t)||r===0&&Is(i,n,t)||a===0&&Is(e,i,n)||o===0&&Is(e,t,n))}function Is(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Us(i){return i>0?1:i<0?-1:0}function Ug(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Mc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ts(i,t){return oe(i.prev,i,i.next)<0?oe(i,t,i.next)>=0&&oe(i,i.prev,t)>=0:oe(i,t,i.prev)<0||oe(i,i.next,t)<0}function Ng(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Sc(i,t){const e=new Ia(i.i,i.x,i.y),n=new Ia(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function xl(i,t,e,n){const s=new Ia(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function es(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ia(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Fg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Ei{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ei.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Ml(t),Sl(n,t);let a=t.length;e.forEach(Ml);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Sl(n,e[l]);const o=Mg.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Ml(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Qs extends de{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new C,g=new rt;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){const m=r+p/n*a;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){const p=v*(n+1);for(let m=0;m<n;m++){const S=m+p,x=S,M=S+n+1,R=S+n+2,A=S+1;o.push(x,M,A),o.push(M,R,A)}}this.setIndex(o),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Qa extends de{constructor(t=new _c([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(r,3)),this.setAttribute("uv",new Jt(a,2));function c(h){const u=s.length/3,f=h.extractPoints(e);let d=f.shape;const g=f.holes;Ei.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const S=g[p];Ei.isClockWise(S)===!0&&(g[p]=S.reverse())}const v=Ei.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const S=g[p];d=d.concat(S)}for(let p=0,m=d.length;p<m;p++){const S=d[p];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let p=0,m=v.length;p<m;p++){const S=v[p],x=S[0]+u,M=S[1]+u,R=S[2]+u;n.push(x,M,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Og(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Qa(n,t.curveSegments)}}function Og(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ki extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new C,f=new C,d=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const S=[],x=m/n;let M=0;m===0&&a===0?M=.5/e:m===n&&l===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){const A=R/e;u.x=-t*Math.cos(s+A*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+A*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),p.push(A+M,1-x),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){const x=h[m][S+1],M=h[m][S],R=h[m+1][S],A=h[m+1][S+1];(m!==0||a>0)&&d.push(x,M,A),(m!==n-1||l<Math.PI)&&d.push(M,R,A)}this.setIndex(d),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ki(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dn extends vn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bg extends de{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}const yl=new te;class bl{constructor(t,e,n=0,s=1/0){this.ray=new is(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new $a,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yl),this}intersectObject(t,e=!0,n=[]){return Ua(t,this,n,e),n.sort(wl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ua(t[s],this,n,e);return n.sort(wl),n}}function wl(i,t){return i.distance-t.distance}function Ua(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Ua(r[a],t,e,!0)}}class El{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zg extends Zn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Na);const kg=`
precision highp float;
in vec3 position;
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,to=`
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
`,Hg=to+`
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
`,Vg=to+`
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
    float sink = (capBase + uHillCap * hill + spare) * lock + chan + m.g;
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
`,Gg=to+`
void main() {
  ivec2 ij = ivec2(gl_FragCoord.xy);
  vec4 t = texelFetch(uTerrain, ij, 0);
  float z = zOf(ij);
  float h = t.a > 0.75 ? (uSubgrid > 0.5 ? volOf(ij, uTide) : max(0.0, uTide - z)) : 0.0;
  o0 = vec4(h, 0.0, 0.0, 0.0);
  o1 = vec4(0.0, 0.0, 0.0, 0.0);
}
`;class Tl{constructor(t,e,n,s,r,a,o,l,c,h){N(this,"W");N(this,"H");N(this,"dx");N(this,"renderer");N(this,"rtA");N(this,"rtB");N(this,"scene",new Ya);N(this,"camera",new Xa(-1,1,1,-1,0,1));N(this,"quad");N(this,"fluxMat");N(this,"depthMat");N(this,"initMat");N(this,"terrainTex");N(this,"modTex");N(this,"chanTex");N(this,"terrainData");N(this,"modData");N(this,"chanData");N(this,"sgTex",null);N(this,"subgridAvailable");N(this,"auxBuf");N(this,"time",0);N(this,"dt",.5);N(this,"steps",0);N(this,"readBuf");this.renderer=t,this.W=e.W,this.H=e.H,this.dx=e.dx;const u=this.W*this.H;this.terrainData=new Float32Array(u*4);for(let g=0;g<u;g++)this.terrainData[g*4]=n[g],this.terrainData[g*4+1]=s[g],this.terrainData[g*4+2]=a?a[g]:0,this.terrainData[g*4+3]=r[g]?1:o&&o[g]?.5:0;this.terrainTex=this.makeDataTex(this.terrainData),this.modData=new Float32Array(u*4);for(let g=0;g<u;g++)this.modData[g*4+3]=1;if(this.modTex=this.makeDataTex(this.modData),this.chanData=new Float32Array(u*4),l)for(let g=0;g<u;g++)r[g]||(this.chanData[g*4]=l[g*3],this.chanData[g*4+1]=l[g*3+1],this.chanData[g*4+2]=l[g*3+2]);if(c)for(let g=0;g<u;g++)r[g]||(this.chanData[g*4+3]=c[g]);if(this.chanTex=this.makeDataTex(this.chanData),this.subgridAvailable=!!h,h){const g=new Float32Array(u*4),v=new Float32Array(u*4),p=new Float32Array(u*4),m=new Float32Array(u*4);for(let S=0;S<u;S++)for(let x=0;x<4;x++)g[S*4+x]=h.cell[S*8+x],v[S*4+x]=h.cell[S*8+4+x],p[S*4+x]=h.face[S*8+x],m[S*4+x]=h.face[S*8+4+x];this.sgTex=[g,v,p,m].map(S=>this.makeDataTex(S))}this.rtA=this.makeRT(),this.rtB=this.makeRT();const f=()=>({uState0:{value:null},uState1:{value:null},uTerrain:{value:this.terrainTex},uMod:{value:this.modTex},uChan:{value:this.chanTex},uSize:{value:new rt(this.W,this.H)},uDt:{value:this.dt},uDx:{value:this.dx},uG:{value:9.81},uTide:{value:0},uRain:{value:0},uDrain:{value:0},uTheta:{value:.8},uHmin:{value:.002},uManning:{value:.035},uBuildings:{value:1},uTankRate:{value:.01},uBldBlock:{value:1},uManningBld:{value:.6},uHs:{value:0},uHillCap:{value:120/36e5},uRecover:{value:6},uTideLock:{value:1.5},uSgC0:{value:this.sgTex?this.sgTex[0]:this.chanTex},uSgC1:{value:this.sgTex?this.sgTex[1]:this.chanTex},uSgFE:{value:this.sgTex?this.sgTex[2]:this.chanTex},uSgFN:{value:this.sgTex?this.sgTex[3]:this.chanTex},uSubgrid:{value:this.sgTex?1:0},uSill:{value:.1},uWeirB:{value:4}}),d=g=>new dn({vertexShader:kg,fragmentShader:g,uniforms:f(),glslVersion:Je,depthTest:!1,depthWrite:!1});this.fluxMat=d(Hg),this.depthMat=d(Vg),this.initMat=d(Gg);for(const g of[this.fluxMat,this.depthMat])g.uniforms.uSize.value=new rt(this.W,this.H);this.quad=new ee(new Ii(2,2),this.fluxMat),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.readBuf=new Float32Array(u*4),this.auxBuf=new Float32Array(u*4)}get subgridOn(){return this.depthMat.uniforms.uSubgrid.value>.5}makeDataTex(t){const e=new ja(t,this.W,this.H,Ae,Ie);return e.minFilter=ce,e.magFilter=ce,e.generateMipmaps=!1,e.wrapS=He,e.wrapT=He,e.needsUpdate=!0,e}makeRT(){const t=new mn(this.W,this.H,{count:2,type:Ie,format:Ae,minFilter:ce,magFilter:ce,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});for(const e of t.textures)e.wrapS=He,e.wrapT=He;return t}get stateTex(){return this.rtA.textures[0]}get auxTex(){return this.rtA.textures[1]}setParams(t){for(const e of[this.fluxMat,this.depthMat,this.initMat])t.subgrid!==void 0&&(e.uniforms.uSubgrid.value=t.subgrid&&this.subgridAvailable?1:0),t.manning!==void 0&&(e.uniforms.uManning.value=t.manning),t.buildings!==void 0&&(e.uniforms.uBuildings.value=t.buildings?1:0),t.drain!==void 0&&(e.uniforms.uDrain.value=t.drain),t.theta!==void 0&&(e.uniforms.uTheta.value=t.theta),t.bldBlock!==void 0&&(e.uniforms.uBldBlock.value=t.bldBlock),t.manningBld!==void 0&&(e.uniforms.uManningBld.value=t.manningBld),t.hillCap!==void 0&&(e.uniforms.uHillCap.value=t.hillCap),t.recover!==void 0&&(e.uniforms.uRecover.value=t.recover),t.tideLock!==void 0&&(e.uniforms.uTideLock.value=t.tideLock)}setDt(t){this.dt=t;for(const e of[this.fluxMat,this.depthMat])e.uniforms.uDt.value=t}updateMod(){this.modTex.needsUpdate=!0}updateTerrain(){this.terrainTex.needsUpdate=!0}reset(t){this.time=0,this.steps=0,this.initMat.uniforms.uTide.value=t,this.quad.material=this.initMat;const e=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.rtA),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(e)}step(t,e,n,s=0){const r=this.renderer.getRenderTarget(),a=this.renderer.autoClear;this.renderer.autoClear=!1;for(let o=0;o<t;o++)this.fluxMat.uniforms.uState0.value=this.rtA.textures[0],this.fluxMat.uniforms.uState1.value=this.rtA.textures[1],this.fluxMat.uniforms.uTide.value=e,this.fluxMat.uniforms.uRain.value=n,this.quad.material=this.fluxMat,this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.depthMat.uniforms.uState0.value=this.rtB.textures[0],this.depthMat.uniforms.uState1.value=this.rtB.textures[1],this.depthMat.uniforms.uTide.value=e,this.depthMat.uniforms.uRain.value=n,this.depthMat.uniforms.uHs.value=s,this.quad.material=this.depthMat,this.renderer.setRenderTarget(this.rtA),this.renderer.render(this.scene,this.camera),this.time+=this.dt,this.steps++;this.renderer.autoClear=a,this.renderer.setRenderTarget(r)}readState(){return this.renderer.readRenderTargetPixels(this.rtA,0,0,this.W,this.H,this.readBuf),this.readBuf}readAux(){const t=this.renderer.getContext(),e=this.renderer.properties.get(this.rtA).__webglFramebuffer,n=this.renderer.getRenderTarget();return this.renderer.state.bindFramebuffer(t.FRAMEBUFFER,e),t.readBuffer(t.COLOR_ATTACHMENT1),t.readPixels(0,0,this.W,this.H,t.RGBA,t.FLOAT,this.auxBuf),t.readBuffer(t.COLOR_ATTACHMENT0),this.renderer.setRenderTarget(n),this.auxBuf}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.terrainTex.dispose(),this.modTex.dispose(),this.chanTex.dispose(),this.sgTex?.forEach(t=>t.dispose()),this.fluxMat.dispose(),this.depthMat.dispose(),this.initMat.dispose(),this.quad.geometry.dispose()}}const Al={type:"change"},eo={type:"start"},yc={type:"end"},Ns=new is,Cl=new Cn,Wg=Math.cos(70*Ze.DEG2RAD),me=new C,De=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gr=1e-6;class $g extends zg{constructor(t,e=null){super(t,e),this.state=Qt.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:gi.ROTATE,TWO:gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Yn,this._lastTargetPosition=new C,this._quat=new Yn().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new El,this._sphericalDelta=new El,this._scale=1,this._panOffset=new C,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new C,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qg.bind(this),this._onPointerDown=Xg.bind(this),this._onPointerUp=Yg.bind(this),this._onContextMenu=e0.bind(this),this._onMouseWheel=Zg.bind(this),this._onKeyDown=Jg.bind(this),this._onTouchStart=Qg.bind(this),this._onTouchMove=t0.bind(this),this._onMouseDown=jg.bind(this),this._onMouseMove=Kg.bind(this),this._interceptControlDown=n0.bind(this),this._interceptControlUp=i0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Al),this.update(),this.state=Qt.NONE}update(t=null){const e=this.object.position;me.copy(e).sub(this.target),me.applyQuaternion(this._quat),this._spherical.setFromVector3(me),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=De:n>Math.PI&&(n-=De),s<-Math.PI?s+=De:s>Math.PI&&(s-=De),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(me.setFromSpherical(this._spherical),me.applyQuaternion(this._quatInverse),e.copy(this.target).add(me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=me.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ns.origin.copy(this.object.position),Ns.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ns.direction))<Wg?this.object.lookAt(this.target):(Cl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ns.intersectPlane(Cl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Gr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gr||this._lastTargetPosition.distanceToSquared(this.target)>Gr?(this.dispatchEvent(Al),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?De/60*this.autoRotateSpeed*t:De/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){me.setFromMatrixColumn(e,0),me.multiplyScalar(-t),this._panOffset.add(me)}_panUp(t,e){this.screenSpacePanning===!0?me.setFromMatrixColumn(e,1):(me.setFromMatrixColumn(e,0),me.crossVectors(this.object.up,me)),me.multiplyScalar(t),this._panOffset.add(me)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;me.copy(s).sub(this.target);let r=me.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(De*this._rotateDelta.x/e.clientHeight),this._rotateUp(De*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(De*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-De*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(De*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-De*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(De*this._rotateDelta.x/e.clientHeight),this._rotateUp(De*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new rt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Xg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function qg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Yg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yc),this.state=Qt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function jg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Si.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qt.DOLLY;break;case Si.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}break;case Si.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(eo)}function Kg(i){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Zg(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(i.preventDefault(),this.dispatchEvent(eo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(yc))}function Jg(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Qg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Qt.TOUCH_ROTATE;break;case gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qt.TOUCH_DOLLY_PAN;break;case gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(eo)}function t0(i){switch(this._trackPointer(i),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qt.NONE}}function e0(i){this.enabled!==!1&&i.preventDefault()}function n0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function i0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function s0(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}class Fs{constructor(t,e){N(this,"camera");N(this,"controls");N(this,"tween",null);N(this,"tour",null);N(this,"touring",!1);N(this,"onTourEnd");this.camera=t,this.controls=new $g(t,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI*.49,this.controls.minDistance=25,this.controls.maxDistance=6e4,this.controls.screenSpacePanning=!1,this.controls.zoomSpeed=1.2,e.addEventListener("pointerdown",()=>{this.touring&&this.stopTour(),this.tween=null}),e.addEventListener("wheel",()=>{this.touring&&this.stopTour(),this.tween=null},{passive:!0})}state(){return{pos:this.camera.position.clone(),target:this.controls.target.clone()}}flyTo(t,e=2.5,n){this.tween={from:this.state(),to:t,t0:performance.now(),dur:e*1e3,onDone:n}}jumpTo(t){this.camera.position.copy(t.pos),this.controls.target.copy(t.target),this.controls.update()}static viewOf(t,e,n=150,s=35){const r=Ze.degToRad(n),a=Ze.degToRad(s);return{pos:new C(t.x+e*Math.cos(a)*Math.sin(r),t.y+e*Math.sin(a),t.z+e*Math.cos(a)*Math.cos(r)),target:t.clone()}}startTour(t){t.length&&(this.touring=!0,this.tour={stops:t,i:0,phase:"fly",t0:performance.now()},this.flyTo(t[0],3.5,()=>{this.tour&&(this.tour.phase="orbit",this.tour.t0=performance.now())}))}stopTour(){this.touring=!1,this.tour=null,this.controls.autoRotate=!1,this.onTourEnd?.()}update(t){const e=performance.now();if(this.tween){const n=Math.min(1,(e-this.tween.t0)/this.tween.dur),s=s0(n);if(this.camera.position.lerpVectors(this.tween.from.pos,this.tween.to.pos,s),this.controls.target.lerpVectors(this.tween.from.target,this.tween.to.target,s),n>=1){const r=this.tween.onDone;this.tween=null,r?.()}}if(this.tour&&this.touring&&this.tour.phase==="orbit"){const n=(e-this.tour.t0)/1e3,s=new C().subVectors(this.camera.position,this.controls.target);if(s.applyAxisAngle(new C(0,1,0),t*.12),this.camera.position.copy(this.controls.target).add(s),n>7){this.tour.i=(this.tour.i+1)%this.tour.stops.length,this.tour.phase="fly",this.tour.t0=e;const r=this.tour.stops[this.tour.i];this.flyTo(r,3.5,()=>{this.tour&&(this.tour.phase="orbit",this.tour.t0=performance.now())})}}this.controls.update()}}const r0=`
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
`,a0=`
precision highp float;
in vec3 position; out vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,o0=`
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
`,l0=`
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
`;class Rl{constructor(t,e,n,s,r,a,o,l,c=160){N(this,"N");N(this,"renderer");N(this,"rtA");N(this,"rtB");N(this,"scene",new Ya);N(this,"camera",new Xa(-1,1,1,-1,0,1));N(this,"quad");N(this,"updateMat");N(this,"pointMat");N(this,"group",new Xn);N(this,"spawnTex");N(this,"spawnData");N(this,"spawnCap");N(this,"time",0);N(this,"speedScale",30);this.renderer=t,this.N=c;const h=()=>{const S=new mn(c,c,{count:2,type:Ie,format:Ae,minFilter:ce,magFilter:ce,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});for(const x of S.textures)x.wrapS=He,x.wrapT=He;return S};this.rtA=h(),this.rtB=h();const u=1024,f=64;this.spawnCap=u*f,this.spawnData=new Float32Array(this.spawnCap*4),this.spawnTex=new ja(this.spawnData,u,f,Ae,Ie),this.spawnTex.minFilter=ce,this.spawnTex.magFilter=ce,this.spawnTex.needsUpdate=!0,this.updateMat=new dn({vertexShader:a0,fragmentShader:r0,glslVersion:Je,depthTest:!1,depthWrite:!1,uniforms:{uPart:{value:null},uTail:{value:null},uState:{value:r},uTerrain:{value:a},uSpawn:{value:this.spawnTex},uSpawnCount:{value:0},uSpawnSize:{value:new rt(u,f)},uSize:{value:new rt(e,n)},uDx:{value:s},uDt:{value:.016},uTime:{value:0},uSpeedScale:{value:this.speedScale},uLife:{value:7}}}),this.quad=new ee(new Ii(2,2),this.updateMat),this.quad.frustumCulled=!1,this.scene.add(this.quad);const d=c*c,g=new Float32Array(d);for(let S=0;S<d;S++)g[S]=S;const v=new de;v.setAttribute("pid",new Se(g,1));const p=new en(new C(-1e6,-1e6,-1e6),new C(1e6,1e6,1e6));v.boundingBox=p,v.boundingSphere=p.getBoundingSphere(new nn),this.pointMat=new dn({vertexShader:o0,fragmentShader:l0,glslVersion:Je,transparent:!0,depthWrite:!1,blending:Ws,uniforms:{uPart:{value:this.rtA.textures[0]},uTail:{value:this.rtA.textures[1]},uState:{value:r},uTerrain:{value:a},uMod:{value:o},uN:{value:new rt(c,c)},uSize:{value:new rt(e,n)},uDx:{value:s},uBuildings:l.uBuildings,uBldBlock:l.uBldBlock,uLife:{value:7},uNight:l.uNight,uDpr:{value:t.getPixelRatio()},uViewport:{value:new rt(1,1)}}});const m=new ag(v,this.pointMat);m.frustumCulled=!1,m.renderOrder=16,this.group.add(m),this.group.renderOrder=16,this.reset()}setState(t){this.updateMat.uniforms.uState.value=t,this.pointMat.uniforms.uState.value=t}setSpawn(t,e){const n=Math.min(e,this.spawnCap);if(e>this.spawnCap){const s=e/this.spawnCap;for(let r=0;r<this.spawnCap;r++){const a=Math.floor(r*s);this.spawnData[r*4]=t[a*2],this.spawnData[r*4+1]=t[a*2+1]}}else for(let s=0;s<n;s++)this.spawnData[s*4]=t[s*2],this.spawnData[s*4+1]=t[s*2+1];this.spawnTex.needsUpdate=!0,this.updateMat.uniforms.uSpawnCount.value=n}reset(){const t=this.renderer.getRenderTarget(),e=this.renderer.getClearColor(new Ft),n=this.renderer.getClearAlpha();for(const s of[this.rtA,this.rtB])this.renderer.setRenderTarget(s),this.renderer.setClearColor(new Ft(-1,-1,0),1),this.renderer.clear();this.renderer.setRenderTarget(t),this.renderer.setClearColor(e,n),this.updateMat.uniforms.uSpawnCount.value=0}update(t,e){this.time+=t,this.speedScale=Ze.clamp(e*.05,15,220);const n=this.updateMat.uniforms;n.uPart.value=this.rtA.textures[0],n.uTail.value=this.rtA.textures[1],n.uDt.value=Math.min(t,.05),n.uTime.value=this.time,n.uSpeedScale.value=this.speedScale;const s=this.renderer.getRenderTarget(),r=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.renderer.autoClear=r,this.renderer.setRenderTarget(s),[this.rtA,this.rtB]=[this.rtB,this.rtA];const a=this.pointMat.uniforms;a.uPart.value=this.rtA.textures[0],a.uTail.value=this.rtA.textures[1];const o=this.renderer.getDrawingBufferSize(new rt);a.uViewport.value.copy(o),a.uDpr.value=this.renderer.getPixelRatio()}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.spawnTex.dispose(),this.updateMat.dispose(),this.pointMat.dispose(),this.quad.geometry.dispose();for(const t of this.group.children)t.geometry.dispose();this.group.clear()}}const c0=`
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
`,h0=`
precision highp float;
in float vSpd; in float vA; out vec4 fragColor;
void main() {
  if (vA < 0.5) discard;
  vec3 col = mix(vec3(0.75, 0.95, 1.0), vec3(1.0, 0.86, 0.45), smoothstep(0.2, 1.8, vSpd));
  fragColor = vec4(col, 0.9);
}
`;class Pl{constructor(t,e,n,s,r,a,o){N(this,"mesh");N(this,"mat");const l=Math.max(2,Math.round(35/n)),c=new de,h=.07,u=.22,f=.38,d=new Float32Array([0,0,-h,1-f,0,-h,1-f,0,h,0,0,h,1-f,0,-u,1,0,0,1-f,0,u]);c.setAttribute("position",new Se(d,3)),c.setIndex([0,1,2,0,2,3,4,5,6,0,2,1,0,3,2,4,6,5]);const g=new Bg;g.index=c.index,g.attributes.position=c.attributes.position;const v=[];for(let m=Math.floor(l/2);m<e;m+=l)for(let S=Math.floor(l/2);S<t;S+=l)v.push(S,m);g.setAttribute("cell",new Pa(new Float32Array(v),2)),g.instanceCount=v.length/2;const p=new en(new C(-1e6,-1e6,-1e6),new C(1e6,1e6,1e6));g.boundingBox=p,g.boundingSphere=p.getBoundingSphere(new nn),this.mat=new dn({vertexShader:c0,fragmentShader:h0,glslVersion:Je,transparent:!0,depthWrite:!1,side:ke,uniforms:{uState:{value:s},uTerrain:{value:r},uMod:{value:a},uSize:{value:new rt(t,e)},uDx:{value:n},uBuildings:o.uBuildings,uBldBlock:o.uBldBlock,uScale:{value:l*.8}}}),this.mesh=new ee(g,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=14}setState(t){this.mat.uniforms.uState.value=t}dispose(){this.mesh.geometry.dispose(),this.mat.dispose()}}const no=`
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
`,io=`
vec3 applyFog(vec3 col, vec3 world) {
  float dist = length(world - uCam);
  float f = 1.0 - exp(-uFogDensity * dist);
  return mix(col, uFogColor, clamp(f, 0.0, 1.0));
}
`,u0=`
precision highp float; precision highp int; precision highp sampler2D;
in vec2 cell;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
uniform sampler2D uTerrain; uniform ivec2 uSize; uniform float uDx;
out vec2 vUv; out vec3 vWorld; out vec3 vNormal; out float vSea;
void main() {
  ivec2 ij = ivec2(cell);
  ivec2 mx = uSize - ivec2(1);
  vec4 t = texelFetch(uTerrain, ij, 0);
  float zl = texelFetch(uTerrain, clamp(ij - ivec2(1, 0), ivec2(0), mx), 0).r;
  float zr = texelFetch(uTerrain, clamp(ij + ivec2(1, 0), ivec2(0), mx), 0).r;
  float zd = texelFetch(uTerrain, clamp(ij - ivec2(0, 1), ivec2(0), mx), 0).r;
  float zu = texelFetch(uTerrain, clamp(ij + ivec2(0, 1), ivec2(0), mx), 0).r;
  vNormal = normalize(vec3(-(zr - zl) / (2.0 * uDx), 1.0, (zu - zd) / (2.0 * uDx)));
  vUv = (cell + 0.5) / vec2(uSize);
  vSea = t.a;
  float z = t.a > 0.5 ? -2.5 : t.r;
  vec3 p = vec3((cell.x + 0.5) * uDx, z, -(cell.y + 0.5) * uDx);
  vWorld = p;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,d0=`
precision highp float; precision highp int; precision highp sampler2D;
in vec2 vUv; in vec3 vWorld; in vec3 vNormal; in float vSea;
uniform sampler2D uMap; uniform sampler2D uState; uniform float uHasMap;
uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uFogColor; uniform float uFogDensity;
uniform float uStorm; uniform float uFlash; uniform float uNight; uniform float uShowMax;
out vec4 fragColor;
${no}
${io}
void main() {
  // satellite imagery of Hong Kong is dark: lift it slightly so streets stay readable under the flood layer
  vec3 base = uHasMap > 0.5 ? pow(texture(uMap, vUv).rgb, vec3(0.88)) * 1.08 : vec3(0.36, 0.42, 0.33);
  vec3 n = normalize(vNormal);
  float diff = max(dot(n, uSun), 0.0);
  float light = 0.78 + 0.6 * diff;
  light *= mix(1.0, 0.88, uStorm);
  light *= mix(1.0, 0.7, uNight);
  vec3 col = base * light;
  col = mix(col, col * vec3(0.8, 0.88, 1.1), uNight * 0.6);
  col += uFlash * 0.7;
  if (vSea > 0.75) col = mix(col, vec3(0.04, 0.10, 0.18), 0.8);
  if (uShowMax > 0.5 && vSea < 0.25) { float hm = texture(uState, vUv).a; if (hm > 0.05) col = mix(col, depthColor(hm), 0.7); }
  col = applyFog(col, vWorld);
  fragColor = vec4(col, 1.0);
}
`,f0=`
precision highp float; precision highp int; precision highp sampler2D;
in vec2 cell;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
uniform sampler2D uTerrain; uniform sampler2D uMod; uniform sampler2D uState; uniform sampler2D uAux;
uniform ivec2 uSize; uniform float uDx; uniform float uBuildings; uniform float uBldBlock; uniform float uSubgrid;
out vec2 vUv; out vec3 vWorld; out float vDepth; out float vVel; out float vSea;
void main() {
  ivec2 ij = ivec2(cell);
  vec4 t = texelFetch(uTerrain, ij, 0);
  vec4 m = texelFetch(uMod, ij, 0);
  vSea = t.a;
  vec4 s = texelFetch(uState, ij, 0);
  vec4 a = texelFetch(uAux, ij, 0);
  float z = t.r + uBuildings * min(t.g, uBldBlock) + m.r;
  float h = (uSubgrid > 0.5 && t.a < 0.75) ? a.a : s.r;   // sub-grid: mean depth over the wet part of the cell
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
`,p0=`
precision highp float; precision highp int; precision highp sampler2D;
in vec2 vUv; in vec3 vWorld; in float vDepth; in float vVel; in float vSea;
uniform float uTime; uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uFogColor; uniform float uFogDensity;
uniform float uStorm; uniform float uFlash; uniform float uNight; uniform float uRainI; uniform vec3 uSkyColor;
out vec4 fragColor;
${no}
${io}
void main() {
  if (vDepth < 0.015) discard;
  bool sea = vSea > 0.75; bool lake = vSea > 0.25 && !sea;
  // flood water is a data layer: opaque enough to read the depth colour over any ground texture
  float alpha = smoothstep(0.015, 0.07, vDepth) * clamp(0.74 + vDepth * 0.12, 0.74, 0.94);
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
  // white water where the flow is fast; a bright rim marks the edge of the flooded area
  float foam = smoothstep(0.9, 2.6, vVel) * vnoise(vWorld.xz * 0.6 + uTime * 0.6);
  float rim = sea || lake ? 0.0 : smoothstep(0.10, 0.02, vDepth) * 0.55;
  col = mix(col, vec3(0.93, 0.96, 1.0), clamp(foam + rim, 0.0, 0.7));
  float rip = uRainI * step(0.975, hash21(floor(vWorld.xz * 1.2) + floor(uTime * 10.0)));
  col += rip * 0.45;
  col *= mix(1.0, 0.86, uStorm);
  col *= mix(1.0, sea ? 0.55 : 0.82, uNight);
  col += uFlash * 0.6;
  col = applyFog(col, vWorld);
  fragColor = vec4(col, alpha);
}
`,m0=`
precision highp float; precision highp int; precision highp sampler2D;
in vec3 position; in vec3 normal; in vec3 color; in vec2 bUv; in float lit;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
out vec3 vN; out vec3 vWorld; out vec3 vColor; out vec2 vUv; out float vLit;
void main() {
  vN = normal; vWorld = position; vColor = color; vUv = bUv; vLit = lit;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,g0=`
precision highp float; precision highp int; precision highp sampler2D;
in vec3 vN; in vec3 vWorld; in vec3 vColor; in vec2 vUv; in float vLit;
uniform sampler2D uTerrain; uniform sampler2D uState; uniform sampler2D uMod; uniform ivec2 uSize;
uniform float uTime; uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uFogColor; uniform float uFogDensity;
uniform float uStorm; uniform float uFlash; uniform float uNight; uniform float uBuildings; uniform vec3 uSkyColor;
out vec4 fragColor;
${no}
${io}
void main() {
  vec3 n = normalize(vN);
  bool roof = n.y > 0.5;
  float diff = max(dot(n, uSun), 0.0);
  float sky = n.y * 0.5 + 0.5;
  float light = 0.52 + 0.55 * diff + 0.2 * sky;
  light *= mix(1.0, 0.9, uStorm);
  light *= mix(1.0, 0.72, uNight);
  float ground = texture(uTerrain, clamp(vUv, 0.0, 1.0)).r;
  float hAbove = vWorld.y - ground;
  vec3 base = vColor;
  if (roof) {
    base *= vec3(0.78, 0.79, 0.82);
  } else {
    // facade: 3.1 m floor bands with window columns (glass slightly bluish), lighter plinth shaded by contact occlusion
    float fy = fract(vWorld.y * 0.32);
    float fx = fract(dot(vWorld.xz, vec2(abs(n.z), abs(n.x))) * 0.36);
    float glass = step(0.40, fy) * step(0.2, fx) * step(fx, 0.8);
    vec3 glassCol = mix(uSkyColor, vec3(0.22, 0.30, 0.40), 0.55);
    base = mix(base, glassCol, glass * 0.5);
    base *= mix(0.7, 1.0, smoothstep(0.0, 6.0, hAbove));
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
  float eta = t.r + m.r + s.r;
  if (s.r > 0.05 && vWorld.y < eta) col = mix(col, depthColor(min(s.r, 3.0)) * 0.9, 0.6);
  else if (s.a > 0.05 && vWorld.y < t.r + m.r + s.a) col = mix(col, vec3(0.35, 0.3, 0.25), 0.35); // high-water mark
  col += uFlash * 0.6;
  col = applyFog(col, vWorld);
  fragColor = vec4(col, 1.0);
}
`,v0=`
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
`,_0=`
precision highp float;
in float vA; uniform float uNight;
out vec4 fragColor;
void main() { fragColor = vec4(0.72, 0.8, 0.92, vA * mix(1.0, 0.6, uNight)); }
`,x0=`
precision highp float;
in vec3 position;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
out vec3 vDir;
void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,M0=`
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
`;class S0{constructor(t,e){N(this,"renderer");N(this,"scene",new Ya);N(this,"camera");N(this,"director");N(this,"assets",null);N(this,"W",0);N(this,"H",0);N(this,"dx",10);N(this,"grid",null);N(this,"terrain",null);N(this,"water",null);N(this,"buildings",null);N(this,"rain");N(this,"sky");N(this,"measureGroup",new Xn);N(this,"draftLine",null);N(this,"markerGroup",new Xn);N(this,"labelsDiv");N(this,"labelEls",new Map);N(this,"imageryTex",null);N(this,"basemapTex",null);N(this,"flowA",null);N(this,"flowB",null);N(this,"arrowsA",null);N(this,"arrowsB",null);N(this,"terrainTexRef",null);N(this,"modTexRef",null);N(this,"flowMode","particles");N(this,"split",null);N(this,"time",0);N(this,"flashT",0);N(this,"U",{uTime:{value:0},uSun:{value:new C(.4,.75,.35).normalize()},uCam:{value:new C},uFogColor:{value:new Ft(10466504)},uFogDensity:{value:12e-5},uStorm:{value:0},uFlash:{value:0},uNight:{value:0},uRainI:{value:0},uSubgrid:{value:0},uSkyColor:{value:new Ft(9418464)},uShowMax:{value:0},uBuildings:{value:1},uBldBlock:{value:1}});N(this,"terrainMat",null);N(this,"waterMat",null);N(this,"buildingMat",null);N(this,"rainMat");N(this,"skyMat");N(this,"texMode","imagery");this.labelsDiv=e,this.renderer=new eg({canvas:t,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.outputColorSpace=We,this.renderer.autoClear=!0,this.camera=new $e(50,1,2,12e4),this.director=new Fs(this.camera,t),this.scene.add(this.measureGroup),this.scene.add(this.markerGroup),this.skyMat=new dn({vertexShader:x0,fragmentShader:M0,glslVersion:Je,side:Ce,depthWrite:!1,uniforms:{uSun:this.U.uSun,uStorm:this.U.uStorm,uFlash:this.U.uFlash,uNight:this.U.uNight,uTime:this.U.uTime}}),this.sky=new ee(new Ki(8e4,48,24),this.skyMat),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.scene.add(this.sky);const n=36e3,s=new Float32Array(n*2*4),r=new Float32Array(n*2);for(let o=0;o<n;o++){const l=(Math.random()-.5)*900,c=Math.random()*320,h=(Math.random()-.5)*900,u=Math.random();for(let f=0;f<2;f++){const d=(o*2+f)*4;s[d]=l,s[d+1]=c,s[d+2]=h,s[d+3]=u,r[o*2+f]=f}}const a=new de;a.setAttribute("a",new Se(s,4)),a.setAttribute("end",new Se(r,1)),this.rainMat=new dn({vertexShader:v0,fragmentShader:_0,glslVersion:Je,transparent:!0,depthWrite:!1,blending:Ws,uniforms:{uTime:this.U.uTime,uCenter:{value:new C},uIntensity:this.U.uRainI,uWind:{value:.35},uNight:this.U.uNight}}),this.rain=new sg(a,this.rainMat),this.rain.frustumCulled=!1,this.rain.renderOrder=20,this.scene.add(this.rain),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}loadScene(t,e,n,s,r){this.clearScene(),this.assets=t,this.W=t.meta.cols,this.H=t.meta.rows,this.dx=t.meta.res;const a=this.W,o=this.H,l=new Float32Array(a*o*2);for(let v=0;v<o;v++)for(let p=0;p<a;p++){const m=(v*a+p)*2;l[m]=p,l[m+1]=v}const c=new Uint32Array((a-1)*(o-1)*6);let h=0;for(let v=0;v<o-1;v++)for(let p=0;p<a-1;p++){const m=v*a+p,S=m+1,x=m+a,M=x+1;c[h++]=m,c[h++]=S,c[h++]=x,c[h++]=S,c[h++]=M,c[h++]=x}this.grid=new de,this.grid.setAttribute("cell",new Se(l,2)),this.grid.setIndex(new Se(c,1));const u=new en(new C(0,-50,-o*this.dx),new C(a*this.dx,1200,0));this.grid.boundingBox=u,this.grid.boundingSphere=u.getBoundingSphere(new nn),this.imageryTex=t.imagery?this.imgTex(t.imagery):null,this.basemapTex=t.basemap?this.imgTex(t.basemap):null;const f=this.texMode==="imagery"?this.imageryTex??this.basemapTex:this.basemapTex??this.imageryTex,d={value:new rt(a,o)};this.terrainMat=new dn({vertexShader:u0,fragmentShader:d0,glslVersion:Je,uniforms:{...this.U,uTerrain:{value:e},uState:{value:s},uSize:d,uDx:{value:this.dx},uMap:{value:f},uHasMap:{value:f?1:0}}}),this.terrain=new ee(this.grid,this.terrainMat),this.terrain.frustumCulled=!1,this.terrain.renderOrder=0,this.scene.add(this.terrain),this.waterMat=new dn({vertexShader:f0,fragmentShader:p0,glslVersion:Je,transparent:!0,depthWrite:!1,side:ke,uniforms:{...this.U,uTerrain:{value:e},uMod:{value:n},uState:{value:s},uAux:{value:r},uSize:d,uDx:{value:this.dx}}}),this.water=new ee(this.grid,this.waterMat),this.water.frustumCulled=!1,this.water.renderOrder=10,this.scene.add(this.water),this.buildBuildings(t,e,s,n,d),this.terrainTexRef=e,this.modTexRef=n,this.flowA=new Rl(this.renderer,a,o,this.dx,s,e,n,this.U),this.arrowsA=new Pl(a,o,this.dx,s,e,n,this.U),this.scene.add(this.flowA.group),this.scene.add(this.arrowsA.mesh),this.applyFlowMode();const g=this.defaultView();this.director.jumpTo(Fs.viewOf(g.target,g.pos.distanceTo(g.target)*2.4,35,62)),this.director.flyTo(g,4)}imgTex(t){const e=new we(t);return e.colorSpace=We,e.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),e.minFilter=Pn,e.magFilter=Xe,e.generateMipmaps=!0,e.needsUpdate=!0,e}buildBuildings(t,e,n,s,r){const a=t.buildings;if(!a.length)return;const o=t.dem,l=this.W,c=this.H,h=this.dx,u=this.H*h,f=(R,A)=>{const T=Math.min(l-1,Math.max(0,Math.floor(R/h))),D=Math.min(c-1,Math.max(0,Math.floor(A/h)));return o[D*l+T]},d=[],g=[],v=[],p=[],m=[],S=[],x=new Ft;for(const R of a){const A=R.r;if(A.length<3)continue;let T=1/0,D=-1/0;for(const[tt,gt]of A){const Mt=f(tt,gt);Mt<T&&(T=Mt),Mt>D&&(D=Mt)}if(!isFinite(T)||T<-1)continue;const q=T-.5,_=T+Math.min(Math.max(R.h,3),420)+Math.min(D-T,8),w=R.h>70,O=w?.58+(Math.random()-.5)*.05:.09+(Math.random()-.5)*.06,k=w?.1+Math.random()*.08:.06+Math.random()*.08,$=(w?.6:.68)+(Math.random()-.5)*.1;x.setHSL(O,k,$);const Z=Math.random();let G=0;for(let tt=0;tt<A.length;tt++){const gt=A[tt],Mt=A[(tt+1)%A.length];G+=gt[0]*Mt[1]-Mt[0]*gt[1]}const F=G<0?[...A].reverse():A;for(let tt=0;tt<F.length;tt++){const gt=F[tt],Mt=F[(tt+1)%F.length],X=Mt[0]-gt[0],Q=Mt[1]-gt[1],dt=Math.hypot(X,Q);if(dt<.2)continue;const ct=Q/dt,It=-X/dt,Et=d.length/3,zt=[[gt[0],q,gt[1]],[Mt[0],q,Mt[1]],[Mt[0],_,Mt[1]],[gt[0],_,gt[1]]];for(const[Xt,kt,P]of zt)d.push(Xt,kt,-P),g.push(ct,0,-It),v.push(x.r*.92,x.g*.92,x.b*.92),p.push((Xt+.5)/(l*h),(P+.5)/u),m.push(Z);S.push(Et,Et+1,Et+2,Et,Et+2,Et+3)}const V=F.map(([tt,gt])=>new rt(tt,gt));let at=[];try{at=Ei.triangulateShape(V,[])}catch{at=[]}const it=d.length/3;for(const[tt,gt]of F)d.push(tt,_,-gt),g.push(0,1,0),v.push(x.r,x.g,x.b),p.push((tt+.5)/(l*h),(gt+.5)/u),m.push(0);for(const tt of at)S.push(it+tt[0],it+tt[1],it+tt[2])}const M=new de;M.setAttribute("position",new Jt(d,3)),M.setAttribute("normal",new Jt(g,3)),M.setAttribute("color",new Jt(v,3)),M.setAttribute("bUv",new Jt(p,2)),M.setAttribute("lit",new Jt(m,1)),M.setIndex(S),this.buildingMat=new dn({vertexShader:m0,fragmentShader:g0,glslVersion:Je,uniforms:{...this.U,uTerrain:{value:e},uState:{value:n},uMod:{value:s},uSize:r}}),this.buildings=new ee(M,this.buildingMat),this.buildings.frustumCulled=!1,this.buildings.renderOrder=1,this.scene.add(this.buildings)}setStateTextures(t,e){this.terrainMat&&(this.terrainMat.uniforms.uState.value=t),this.waterMat&&(this.waterMat.uniforms.uState.value=t,this.waterMat.uniforms.uAux.value=e),this.buildingMat&&(this.buildingMat.uniforms.uState.value=t)}setSubgrid(t){this.U.uSubgrid.value=t?1:0}setBaselineTextures(t){this.flowB&&(this.scene.remove(this.flowB.group),this.flowB.dispose(),this.flowB=null),this.arrowsB&&(this.scene.remove(this.arrowsB.mesh),this.arrowsB.dispose(),this.arrowsB=null),t&&this.terrainTexRef&&this.modTexRef&&(this.flowB=new Rl(this.renderer,this.W,this.H,this.dx,t,this.terrainTexRef,this.modTexRef,this.U),this.arrowsB=new Pl(this.W,this.H,this.dx,t,this.terrainTexRef,this.modTexRef,this.U),this.scene.add(this.flowB.group),this.scene.add(this.arrowsB.mesh)),this.applyFlowMode()}setFlowMode(t){this.flowMode=t,this.applyFlowMode()}applyFlowMode(){const t=this.flowMode==="particles",e=this.flowMode==="arrows";this.flowA&&(this.flowA.group.visible=t),this.arrowsA&&(this.arrowsA.mesh.visible=e),this.flowB&&(this.flowB.group.visible=!1),this.arrowsB&&(this.arrowsB.mesh.visible=!1)}setFlowSpawn(t,e,n){(t==="A"?this.flowA:this.flowB)?.setSpawn(e,n)}resetFlow(){this.flowA?.reset(),this.flowB?.reset()}setTextureMode(t){if(this.texMode=t,!this.terrainMat)return;const e=t==="imagery"?this.imageryTex??this.basemapTex:this.basemapTex??this.imageryTex;this.terrainMat.uniforms.uMap.value=e,this.terrainMat.uniforms.uHasMap.value=e?1:0}setBuildingsBlock(t){this.U.uBuildings.value=t?1:0}setShowMax(t){this.U.uShowMax.value=t?1:0}clearScene(){for(const t of[this.terrain,this.water,this.buildings])t&&(this.scene.remove(t),t.material.dispose());this.buildings&&this.buildings.geometry.dispose(),this.grid?.dispose(),this.grid=null,this.terrain=this.water=this.buildings=null,this.imageryTex?.dispose(),this.basemapTex?.dispose(),this.imageryTex=this.basemapTex=null,this.setBaselineTextures(null),this.flowA&&(this.scene.remove(this.flowA.group),this.flowA.dispose(),this.flowA=null),this.arrowsA&&(this.scene.remove(this.arrowsA.mesh),this.arrowsA.dispose(),this.arrowsA=null),this.split=null,this.clearMeasures(),this.setLabels([])}setWeather(t,e,n){const s=Ze.clamp(1-Ze.smoothstep(Math.sin((n-6)/12*Math.PI),-.15,.15),0,1);this.U.uNight.value=s*.22,this.U.uStorm.value=Ze.clamp(e,0,1),this.U.uRainI.value=Ze.clamp(t/60,0,1.6);const r=Math.max(Math.sin((n-6)/12*Math.PI),.08),a=(n-12)/12*Math.PI*.9;this.U.uSun.value.set(Math.sin(a)*Math.cos(r*1.3),Math.max(r,.15),Math.cos(a)*Math.cos(r*1.3)).normalize();const o=new Ft(10466504),l=new Ft(6056052),c=new Ft(2568253),h=o.clone().lerp(l,this.U.uStorm.value).lerp(c,s*.8);this.U.uFogColor.value.copy(h),this.U.uSkyColor.value.copy(new Ft(9418464).lerp(new Ft(3818578),this.U.uStorm.value).lerp(new Ft(1581104),s*.8));const u=Math.min(1,5e3/Math.max(1,this.W*this.dx));this.U.uFogDensity.value=(4e-5+6e-5*this.U.uStorm.value+3e-5*this.U.uRainI.value)*u,this.renderer.setClearColor(h)}lightning(){this.flashT=.18}setLabels(t){const e=new Set(t.map(n=>n.id));for(const[n,s]of this.labelEls)e.has(n)||(s.el.remove(),this.labelEls.delete(n));for(const n of t){let s=this.labelEls.get(n.id);if(!s){const r=document.createElement("div");this.labelsDiv.appendChild(r),s={el:r,item:n},this.labelEls.set(n.id,s)}s.item=n,s.el.className=`marker-label ${n.cls}`,s.el.innerHTML=`${n.text}${n.sub?`<span class="depth">${n.sub}</span>`:""}`}this.markerGroup.clear();for(const n of t){const s=this.groundAt(n.x,n.y),r=n.cls.includes("gauge")?2450411:n.cls.includes("severe")?14427686:n.cls.includes("moderate")?14251782:6583435,a=new ee(new Js(.45,.45,26,6),new Wn({color:16777215}));a.position.set(n.x,s+13,-n.y),this.markerGroup.add(a);const o=new ee(new Ki(2.6,12,10),new Wn({color:r}));o.position.set(n.x,s+27,-n.y),this.markerGroup.add(o);const l=new ee(new Qs(3,4.2,24),new Wn({color:r,transparent:!0,opacity:.6,side:ke}));l.rotation.x=-Math.PI/2,l.position.set(n.x,s+.5,-n.y),this.markerGroup.add(l)}}updateLabels(){const t=new C,e=window.innerWidth,n=window.innerHeight,s=o=>o.includes("val")?0:o.includes("gauge")?1:o.includes("severe")?2:3,r=[];for(const{el:o,item:l}of this.labelEls.values()){t.set(l.x,this.groundAt(l.x,l.y)+30,-l.y);const c=t.distanceTo(this.camera.position);t.project(this.camera);const h=(t.x+1)/2*e,u=(1-t.y)/2*n;if(!(t.z<1&&c<9e3&&Math.abs(t.x)<1.05&&Math.abs(t.y)<1.05&&u>96&&u<n-110)){o.style.display="none";continue}r.push({el:o,sx:h,sy:u,dist:c,p:s(o.className),wpx:o.offsetWidth||120})}r.sort((o,l)=>o.p-l.p||o.dist-l.dist);const a=[];for(const o of r){const l={x0:o.sx-o.wpx/2-4,x1:o.sx+o.wpx/2+4,y0:o.sy-26,y1:o.sy+2};if(a.some(h=>l.x0<h.x1&&l.x1>h.x0&&l.y0<h.y1&&l.y1>h.y0)){o.el.style.display="none";continue}a.push(l),o.el.style.display="flex",o.el.style.left=`${o.sx}px`,o.el.style.top=`${o.sy}px`,o.el.style.opacity=`${Ze.clamp(1.3-o.dist/9e3,.4,1)}`}}groundAt(t,e){if(!this.assets)return 0;const n=Ze.clamp(Math.floor(t/this.dx),0,this.W-1),s=Ze.clamp(Math.floor(e/this.dx),0,this.H-1),r=this.assets.dem[s*this.W+n];return r<-1?.5:r}raycastGround(t,e){if(!this.assets)return null;const n=new rt(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1),s=new bl;s.setFromCamera(n,this.camera);const r=s.ray.origin,a=s.ray.direction,o=4e4;let l=Math.max(this.dx*.5,2),c=0,h=!0;for(let u=0;u<o;u+=l){const f=r.x+a.x*u,d=r.y+a.y*u,g=r.z+a.z*u,v=f,p=-g,m=v>=0&&p>=0&&v<=this.W*this.dx&&p<=this.H*this.dx,S=m?this.groundAt(v,p):-1e9,x=d>S;if(!x&&h&&m){let M=c,R=u;for(let q=0;q<12;q++){const _=(M+R)/2,w=r.x+a.x*_,O=r.y+a.y*_,k=r.z+a.z*_;O>this.groundAt(w,-k)?M=_:R=_}const A=(M+R)/2,T=r.x+a.x*A,D=r.z+a.z*A;return{x:T,y:-D,z:this.groundAt(T,-D)}}h=x,c=u,u>2e3&&(l=Math.max(l,this.dx))}return null}clearMeasures(){this.measureGroup.clear(),this.setDraft([],"wall")}setMeasures(t){this.measureGroup.clear();const e=n=>n.role??"whatif";for(const{m:n,eff:s,selected:r}of t){const a=n.kind==="wall"?e(n)==="whatif"?16167531:e(n)==="record"?8162984:3003583:n.kind==="sandbag"?10910015:n.kind==="pump"?5032432:n.kind==="tank"?7066778:9471465,o=r?16436245:s<0?15680580:a,l=s===0,c=(u=1)=>new Wn({color:o,transparent:l||u<1,opacity:l?Math.min(.28,u):u,side:ke,depthWrite:!l}),h=u=>{u.userData.id=n.id,this.measureGroup.add(u)};if(n.kind==="wall"||n.kind==="sandbag"){const u=n.height??1;if(n.cells?.length&&n.pts.length<2){const f=new jn(this.dx,u,this.dx),d=new ig(f,c(),n.cells.length),g=new te;n.cells.forEach((v,p)=>{const m=v%this.W,S=Math.floor(v/this.W),x=(m+.5)*this.dx,M=(S+.5)*this.dx,R=this.groundAt(x,M);g.makeTranslation(x,R+(s<0?-u/2:u/2),-M),d.setMatrixAt(p,g)}),d.instanceMatrix.needsUpdate=!0,h(d);continue}for(let f=1;f<n.pts.length;f++){const d=n.pts[f-1],g=n.pts[f],v=Math.hypot(g.x-d.x,g.y-d.y);if(v<.5)continue;const p=new jn(v+1.5,u,n.kind==="wall"?1.2:2.2),m=new ee(p,c()),S=(d.x+g.x)/2,x=(d.y+g.y)/2,M=Math.max(this.groundAt(d.x,d.y),this.groundAt(g.x,g.y));m.position.set(S,M+(s<0?-u/2:u/2),-x),m.rotation.y=Math.atan2(-(g.y-d.y),g.x-d.x),h(m)}if(r)for(const f of n.pts){const d=new ee(new Ki(1.6,10,8),new Wn({color:16436245}));d.position.set(f.x,this.groundAt(f.x,f.y)+u+1.2,-f.y),h(d)}}else if(n.kind==="pump"){const u=n.pts[0];if(!u)continue;const f=this.groundAt(u.x,u.y),d=new ee(new Js(4,5,7,12),c());d.position.set(u.x,f+3.5,-u.y),h(d);const g=new ee(new Qs((n.radius??30)-2,n.radius??30,32),c(.5));g.rotation.x=-Math.PI/2,g.position.set(u.x,f+.6,-u.y),h(g)}else if(n.kind==="tank"||n.kind==="drain"){if(n.pts.length>=3){const u=new _c(n.pts.map(v=>new rt(v.x,-v.y))),f=new Qa(u);f.rotateX(Math.PI/2);const d=this.groundAt(n.pts[0].x,n.pts[0].y),g=new ee(f,c(.35));g.position.y=d+.8,h(g)}else if(n.pts[0]){const u=n.pts[0],f=this.groundAt(u.x,u.y),d=new ee(new Ja(n.radius??60,40),c(.35));d.rotation.x=-Math.PI/2,d.position.set(u.x,f+.8,-u.y),h(d)}}}}pickMeasure(t,e){const n=new rt(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1),s=new bl;s.setFromCamera(n,this.camera);const r=s.intersectObjects(this.measureGroup.children,!0);for(const a of r){let o=a.object;for(;o&&o.userData.id===void 0;)o=o.parent;if(o)return o.userData.id}return null}setDraft(t,e){if(this.draftLine&&(this.scene.remove(this.draftLine),this.draftLine.geometry.dispose(),this.draftLine=null),t.length<1)return;const n=t.map(r=>new C(r.x,this.groundAt(r.x,r.y)+1.5,-r.y));t.length===1&&n.push(n[0].clone().add(new C(0,10,0)));const s=new de().setFromPoints(n);this.draftLine=new fc(s,new dc({color:e==="wall"?16167531:16777215})),this.draftLine.renderOrder=30,this.scene.add(this.draftLine)}defaultView(){const t=this.W*this.dx/2,e=this.H*this.dx/2,n=new C(t,this.groundAt(t,e)+5,-e);return Fs.viewOf(n,Math.max(this.W,this.H)*this.dx*.95,20,42)}viewAt(t,e,n=900){const s=new C(t,this.groundAt(t,e)+5,-e);return Fs.viewOf(s,n,-20+Math.random()*50,30)}render(t){this.time+=t,this.U.uTime.value=this.time,this.flashT>0?(this.flashT-=t,this.U.uFlash.value=Math.max(0,this.flashT/.18)*(.6+.4*Math.random())):this.U.uFlash.value=0,this.director.update(t),this.U.uCam.value.copy(this.camera.position),this.rainMat.uniforms.uCenter.value.copy(this.director.controls.target),this.rain.visible=this.U.uRainI.value>.01,this.sky.position.copy(this.camera.position);const e=this.camera.position.distanceTo(this.director.controls.target);if(this.flowMode==="particles"&&(this.flowA?.update(t,e),this.split&&this.flowB?.update(t,e)),this.split&&this.split.frac>.002&&this.split.frac<.998){const n=this.renderer.getDrawingBufferSize(new rt),s=Math.round(this.split.frac*n.x),r=this.flowMode==="particles",a=this.flowMode==="arrows";this.renderer.setScissorTest(!0),this.setStateTextures(this.split.left.state,this.split.left.aux),this.flowA&&(this.flowA.group.visible=!1),this.arrowsA&&(this.arrowsA.mesh.visible=!1),this.flowB&&(this.flowB.group.visible=r),this.arrowsB&&(this.arrowsB.mesh.visible=a),this.renderer.setScissor(0,0,s,n.y),this.renderer.render(this.scene,this.camera),this.setStateTextures(this.split.right.state,this.split.right.aux),this.flowB&&(this.flowB.group.visible=!1),this.arrowsB&&(this.arrowsB.mesh.visible=!1),this.flowA&&(this.flowA.group.visible=r),this.arrowsA&&(this.arrowsA.mesh.visible=a),this.renderer.setScissor(s,0,n.x-s,n.y),this.renderer.render(this.scene,this.camera),this.renderer.setScissorTest(!1)}else this.renderer.render(this.scene,this.camera);this.updateLabels()}}class y0{constructor(t,e,n){N(this,"measures",[]);N(this,"nextId",1);N(this,"baseDrain",null);N(this,"sea",null);N(this,"rPos");N(this,"rNeg");this.W=t,this.H=e,this.dx=n,this.rPos=new Float32Array(t*e),this.rNeg=new Float32Array(t*e)}add(t){const e={...t,id:this.nextId++};return this.ensureKey(e),this.measures.push(e),e}get(t){return this.measures.find(e=>e.id===t)}update(t,e){const n=this.get(t);n&&(Object.assign(n,e),n.locked&&(n.locked=!1),this.ensureKey(n))}ensureKey(t){(t.role??"whatif")!=="whatif"&&!t.key&&(t.key=`${t.kind}_${Date.now().toString(36)}${t.id.toString(36)}`)}remove(t){this.measures=this.measures.filter(e=>e.id!==t)}clearWhatIf(){this.measures=this.measures.filter(t=>(t.role??"whatif")!=="whatif")}replaceAll(t){this.measures=[],this.nextId=1;for(const e of t)this.add(e)}existsAt(t,e){const n=Ll(t.built),s=Ll(t.removed);return(n===null||e.eventStart>=n)&&(s===null||e.eventStart<s)}effect(t,e){const n=t.role??"whatif";if(n==="whatif")return e.whatIf?1:0;if(n==="record"){const s=this.existsAt(t,e);return t.in_dtm?s?0:t.kind==="wall"||t.kind==="sandbag"?-1:0:s?1:0}return t.events?.length&&!t.events.includes(e.eventId)||t.from_h!==void 0&&t.from_h!==null&&e.simH<t.from_h||t.to_h!==void 0&&t.to_h!==null&&e.simH>=t.to_h?0:1}signature(t){return this.measures.map(e=>`${e.id}:${this.effect(e,t)}`).join("|")}cost(t){const e=this.length(t);switch(t.kind){case"wall":return e*(t.height??1)*45e3;case"sandbag":return e*800;case"pump":return 25e5+(t.rate??1)*12e5;case"tank":return(t.capacity??1e4)*9e3;case"drain":return this.area(t)*1500}}length(t){if(t.cells?.length&&t.pts.length<2)return t.cells.length*this.dx;let e=0;for(let n=1;n<t.pts.length;n++)e+=Math.hypot(t.pts[n].x-t.pts[n-1].x,t.pts[n].y-t.pts[n-1].y);return e}area(t){if(t.cells?.length&&t.pts.length<3)return t.cells.length*this.dx*this.dx;if(t.pts.length<3)return Math.PI*(t.radius??50)**2;let e=0;const n=t.pts;for(let s=0;s<n.length;s++){const r=n[(s+1)%n.length];e+=n[s].x*r.y-r.x*n[s].y}return Math.abs(e)/2}rasterize(t,e){const n=this.W*this.H;this.rPos.fill(0),this.rNeg.fill(0);for(let s=0;s<n;s++)t[s*4]=0,t[s*4+1]=0,t[s*4+2]=0,t[s*4+3]=this.baseDrain?this.baseDrain[s]:1;for(const s of this.measures){const r=this.effect(s,e);if(!r)continue;const a=this.cellsOf(s);if(a.length){if(s.kind==="wall"||s.kind==="sandbag"){const o=(s.height??1)*r;for(const l of a)this.sea&&this.sea[l]||(o>0?this.rPos[l]=Math.max(this.rPos[l],o):this.rNeg[l]=Math.min(this.rNeg[l],o))}else if(s.kind==="pump"){const o=(s.rate??1)/(a.length*this.dx*this.dx);for(const l of a)t[l*4+1]+=o}else if(s.kind==="tank"){const o=(s.capacity??2e4)/(a.length*this.dx*this.dx);for(const l of a)t[l*4+2]+=o}else if(s.kind==="drain")for(const o of a)t[o*4+3]*=s.factor??2}}for(let s=0;s<n;s++)t[s*4]=this.rPos[s]>0?this.rPos[s]:this.rNeg[s]}cellsOf(t){return t.cells?.length?t.cells.filter(e=>e>=0&&e<this.W*this.H):t.pts.length?t.kind==="wall"||t.kind==="sandbag"?this.lineCells(t.pts):t.kind==="pump"?this.discCells(t.pts[0],t.radius??25):t.pts.length>=3?this.polygonCells(t.pts):this.discCells(t.pts[0],t.radius??50):[]}cellOf(t){return{i:Math.floor(t.x/this.dx),j:Math.floor(t.y/this.dx)}}inside(t,e){return t>=0&&e>=0&&t<this.W&&e<this.H}lineCells(t){const e=[],n=new Set,s=(r,a)=>{if(this.inside(r,a)){const o=a*this.W+r;n.has(o)||(n.add(o),e.push(o))}};if(t.length===1){const r=this.cellOf(t[0]);return s(r.i,r.j),e}for(let r=1;r<t.length;r++){const a=this.cellOf(t[r-1]),o=this.cellOf(t[r]);let{i:l,j:c}=a;const{i:h,j:u}=o,f=Math.abs(h-l),d=-Math.abs(u-c),g=l<h?1:-1,v=c<u?1:-1;let p=f+d;for(;s(l,c),!(l===h&&c===u);){const m=2*p;m>=d&&(p+=d,l+=g,s(l,c)),m<=f&&(p+=f,c+=v,s(l,c))}}return e}discCells(t,e){const n=[],s=Math.max(1,Math.ceil(e/this.dx)),r=this.cellOf(t);for(let a=r.j-s;a<=r.j+s;a++)for(let o=r.i-s;o<=r.i+s;o++)this.inside(o,a)&&Math.hypot((o+.5)*this.dx-t.x,(a+.5)*this.dx-t.y)<=e&&n.push(a*this.W+o);if(!n.length){const a=r.j*this.W+r.i;this.inside(r.i,r.j)&&n.push(a)}return n}polygonCells(t){const e=[],n=t.map(c=>c.x),s=t.map(c=>c.y),r=Math.max(0,Math.floor(Math.min(...n)/this.dx)),a=Math.min(this.W-1,Math.floor(Math.max(...n)/this.dx)),o=Math.max(0,Math.floor(Math.min(...s)/this.dx)),l=Math.min(this.H-1,Math.floor(Math.max(...s)/this.dx));for(let c=o;c<=l;c++)for(let h=r;h<=a;h++)b0((h+.5)*this.dx,(c+.5)*this.dx,t)&&e.push(c*this.W+h);return e}toSaved(t,e){const n=this.measures.filter(s=>!s.locked).map(s=>{const{id:r,locked:a,...o}=s;return o});return{version:1,scene:t,origin:e,saved:new Date().toISOString(),measures:n}}loadSaved(t,e){const n=(t.origin?.e0??e.e0)-e.e0,s=(t.origin?.n0??e.n0)-e.n0;for(const r of t.measures??[]){const a={...r,pts:(r.pts??[]).map(o=>({x:o.x+n,y:o.y+s}))};if(a.key){const o=this.measures.find(l=>l.key===a.key);o&&(this.measures=this.measures.filter(l=>l!==o))}this.add(a)}}}function Ll(i){if(!i)return null;const t=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(i.trim());return t?new Date(`${t[1]}-${t[2]}-${t[3]??"01"}T00:00:00+08:00`).getTime():null}function b0(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){const a=e[s].x,o=e[s].y,l=e[r].x,c=e[r].y;o>t!=c>t&&i<(l-a)*(t-o)/(c-o)+a&&(n=!n)}return n}const w0={subtitle:{zh:"香港洪涝实验室 · 交互式洪水数字孪生",en:"Hong Kong interactive flood digital twin"},scenario:{zh:"情景",en:"Scenario"},comparison:{zh:"真实数据 vs 模拟",en:"Observed vs simulated"},params:{zh:"参数",en:"Parameters"},surgeScale:{zh:"风暴潮增水倍率",en:"Surge multiplier"},waveSetup:{zh:"波浪增水（平均水位抬升）",en:"Wave set-up"},waveHs:{zh:"岸边有效波高 Hs（越浪）",en:"Nearshore wave height Hs (overtopping)"},slr:{zh:"海平面上升",en:"Sea-level rise"},rainScale:{zh:"雨量倍率",en:"Rainfall multiplier"},drain:{zh:"排水能力",en:"Drainage capacity"},buildingsBlock:{zh:"建筑物阻水（视为实体）",en:"Buildings block flow"},subgrid:{zh:"子网格地形（1 m LiDAR 格内分布）",en:"Sub-grid terrain (1 m LiDAR within cells)"},defences:{zh:"沿岸防御（按事件日期生效）",en:"Coastal defences (by event date)"},def_built:{zh:"事件时已建成",en:"in place at the event"},def_notyet:{zh:"事件时未建成",en:"not yet built at the event"},measures:{zh:"措施与防御",en:"Measures & defences"},role_whatif:{zh:"情景措施",en:"What-if"},role_record:{zh:"实际工程",en:"Built record"},role_temporary:{zh:"临时措施",en:"Temporary"},newRole:{zh:"新画的措施记为",en:"Draw new measures as"},snapShore:{zh:"顶点吸附到岸线格（画海堤用）",en:"Snap vertices to the shoreline (for sea walls)"},snapOn:{zh:"（顶点吸附岸线：开）",en:"(snapping to the shoreline)"},clearNote:{zh:"只清除情景措施；实际工程与临时措施是数据，逐条删除",en:"Removes what-if measures only; records and temporary measures are data, delete them one by one"},noMeasures:{zh:"还没有措施。画一条墙、放一台泵，或从 JSON 导入；点列表里的一项可编辑属性。",en:"No measures yet. Draw a wall, place a pump or import JSON; click an item to edit its attributes."},def_removed:{zh:"事件时尚未建成（已从地形中撤掉）",en:"not yet built at the event (removed from the terrain)"},def_raised:{zh:"已抬高地形",en:"added to the terrain"},tmp_on:{zh:"此刻生效",en:"active now"},tmp_off:{zh:"此刻未生效",en:"inactive now"},fromPipeline:{zh:"来自管线（defences.py），几何不可重画；改属性后会存入 measures.json",en:"From the pipeline (defences.py); geometry fixed, edited attributes go to measures.json"},delete:{zh:"删除",en:"Delete"},f_name:{zh:"名称",en:"Name"},f_name_ph:{zh:"例：鲤鱼门石筑海堤",en:"e.g. Lei Yue Mun rock seawall"},f_role:{zh:"类型",en:"Role"},f_built:{zh:"建成年月",en:"Completed"},f_removed:{zh:"拆除年月（可空）",en:"Removed (optional)"},f_in_dtm:{zh:"2020 年 LiDAR 地形里已有此结构（更早的事件会把它撤掉）",en:"Already in the 2020 LiDAR terrain (removed for earlier events)"},f_events:{zh:"适用事件：",en:"Applies to: "},f_window:{zh:"生效时间窗（距事件开始的小时）",en:"Active window (hours from event start)"},f_src:{zh:"来源",en:"Source"},f_src_ph:{zh:"文件 / 新闻 / 现场照片",en:"paper / news / photo"},f_note:{zh:"备注",en:"Note"},f_key:{zh:"key",en:"key"},geomCells:{zh:"格索引几何",en:"cell-index geometry"},save:{zh:"保存到场景",en:"Save to scene"},download:{zh:"下载 JSON",en:"Download JSON"},revert:{zh:"放弃改动",en:"Revert"},exportNote:{zh:"导出 JSON",en:"Export JSON"},importNote:{zh:"导入 JSON（同 key 覆盖）",en:"Import JSON (same key replaces)"},wall:{zh:"防洪墙 / 挡水板",en:"Flood wall / barrier"},sandbag:{zh:"沙包堤",en:"Sandbag line"},pump:{zh:"排水泵",en:"Pump"},tank:{zh:"地下蓄洪池",en:"Storage tank"},drainUp:{zh:"雨水渠扩容",en:"Drain upgrade"},clear:{zh:"清除全部",en:"Clear all"},finish:{zh:"完成绘制",en:"Finish"},cancel:{zh:"取消",en:"Cancel"},wallHeight:{zh:"墙高",en:"Height"},pumpRate:{zh:"抽排流量",en:"Pump rate"},tankCap:{zh:"容量",en:"Capacity"},drainFactor:{zh:"排水系数（0 = 进水口堵塞）",en:"Drain factor (0 = intake blocked)"},drainBlocked:{zh:"排水口堵塞",en:"Drain intake blocked"},hintDraw:{zh:"在地图上单击放置节点，双击或点“完成绘制”结束。",en:"Click on the map to place vertices; double-click or press Finish to end."},hintPoint:{zh:"在地图上单击放置。",en:"Click on the map to place."},metrics:{zh:"影响指标",en:"Impact metrics"},maxDepth:{zh:"最大水深",en:"Max depth"},floodedArea:{zh:"淹没面积 (>15 cm)",en:"Flooded area (>15 cm)"},severeArea:{zh:"严重淹没 (>50 cm)",en:"Severe (>50 cm)"},bldAffected:{zh:"受影响建筑",en:"Buildings affected"},volume:{zh:"陆上水量",en:"Water on land"},baseline:{zh:"无措施基线",en:"Baseline (no measures)"},withMeasures:{zh:"含措施",en:"With measures"},tideChart:{zh:"潮位：实测 vs 天文潮 vs 模型边界",en:"Sea level: observed vs astronomical vs model boundary"},rainChart:{zh:"雨量过程线 (mm/h)",en:"Rainfall hyetograph (mm/h)"},validation:{zh:"实际水浸记录 vs 模拟最大水深",en:"Reported flooding vs simulated max depth"},place:{zh:"地点",en:"Location"},observed:{zh:"实测/报道",en:"Reported"},simulated:{zh:"模拟",en:"Simulated"},score:{zh:"命中率",en:"Hit rate"},noVal:{zh:"该场景在此事件中没有可核对的水浸记录。",en:"No validation records for this scene/event."},play:{zh:"播放",en:"Play"},pause:{zh:"暂停",en:"Pause"},depth:{zh:"水深",en:"Depth"},sources:{zh:"数据来源",en:"Sources"},modelNote:{zh:"模型：GPU 二维浅水方程（局部惯性格式，LISFLOOD-FP 同类），网格",en:"Model: GPU 2-D shallow water (local-inertial, LISFLOOD-FP class), grid"},fictional:{zh:"虚构情景",en:"Fictional"},typhoon:{zh:"台风风暴潮",en:"Typhoon surge"},rainstorm:{zh:"暴雨",en:"Rainstorm"},peakObs:{zh:"实测峰值",en:"Observed peak"},peakModel:{zh:"模型边界峰值",en:"Model boundary peak"},tourRunning:{zh:"飞览中… 拖动鼠标可退出",en:"Touring… drag to exit"},loading:{zh:"正在加载场景数据…",en:"Loading scene data…"},ffwd:{zh:"快进计算中",en:"Fast-forwarding"},realtime:{zh:"倍速",en:"×"},costNote:{zh:"粗略造价",en:"Rough cost"},gaugeNow:{zh:"当前边界潮位",en:"Boundary sea level"},rainNow:{zh:"当前雨强",en:"Rain rate"},flowParticles:{zh:"流向：粒子",en:"Flow: particles"},flowArrows:{zh:"流向：箭头",en:"Flow: arrows"},flowNone:{zh:"流向：关",en:"Flow: off"},peak:{zh:"跳到峰值",en:"Jump to peak"},hotspots:{zh:"最严重水浸点（模拟最大水深，街道格）",en:"Worst flooded spots (simulated max depth, streets)"},flyTo:{zh:"飞到",en:"Fly"},swipeLeft:{zh:"◀ 无措施 · 基线",en:"◀ Baseline (no measures)"},swipeRight:{zh:"含措施 ▶",en:"With measures ▶"},noHot:{zh:"尚无 ≥ 0.3 m 的街道积水",en:"No street flooding ≥ 0.3 m yet"},facilities:{zh:"重点设施影响（60 m 内街道最大水深）",en:"Key facilities (max street depth within 60 m)"},facility:{zh:"设施",en:"Facility"},unaffected:{zh:"未受影响",en:"unaffected"},showFac:{zh:"标出受影响的重点设施（医院、港铁站、学校、安老院、停车场…）",en:"Mark affected key facilities (hospitals, MTR, schools, elderly homes, car parks…)"},ft_hospital:{zh:"医院",en:"Hospital"},ft_mtr:{zh:"港铁站",en:"MTR station"},ft_ferry:{zh:"码头",en:"Ferry pier"},ft_bus:{zh:"巴士总站",en:"Bus terminus"},ft_carpark:{zh:"停车场",en:"Car park"},ft_power:{zh:"变电站",en:"Substation"},ft_school:{zh:"学校",en:"School"},ft_elderly:{zh:"安老院",en:"Elderly home"},ft_mall:{zh:"商场",en:"Shopping mall"},ft_fire:{zh:"消防局",en:"Fire station"},ft_police:{zh:"警署",en:"Police station"},ft_community:{zh:"社区中心",en:"Community centre"},ft_water:{zh:"水务设施",en:"Water works"},ft_underground:{zh:"地下空间（估计）",en:"Underground space (estimate)"},swipeHint:{zh:"A/B 分屏：拖动中间的把手，左边是无措施基线，右边是含措施",en:"Swipe view: drag the handle; baseline on the left, measures on the right"}};let rr="zh";function E0(i){rr=i}function xi(){return rr}function j(i){const t=w0[i];return t?t[rr]:i}function Tt(i,t){return rr==="zh"?i:t}const ze={obs:"#3987e5",model:"#d95926",astro:"#199e70",rain:"#5598e7",text:"#e6eef7",muted:"#8fa3b8",grid:"rgba(255,255,255,0.09)",cursor:"#f6b26b",peak:"#c98500"};class Dl{constructor(t){N(this,"ctx");N(this,"data",null);N(this,"hoverX",null);N(this,"tip");this.canvas=t,this.ctx=t.getContext("2d"),this.tip=document.createElement("div"),this.tip.style.cssText="position:fixed;pointer-events:none;background:rgba(10,16,24,0.95);border:1px solid rgba(120,160,200,0.3);border-radius:6px;padding:5px 8px;font-size:11px;color:#e6eef7;display:none;z-index:60;white-space:nowrap",document.body.appendChild(this.tip),t.addEventListener("mousemove",e=>{const n=t.getBoundingClientRect();this.hoverX=(e.clientX-n.left)/n.width,this.tip.style.left=`${e.clientX+12}px`,this.tip.style.top=`${e.clientY+12}px`,this.render()}),t.addEventListener("mouseleave",()=>{this.hoverX=null,this.tip.style.display="none",this.render()})}setData(t){this.data=t,this.render()}setCursor(t){this.data&&(this.data.cursor=t,this.render())}render(){const t=this.data;if(!t)return;const e=Math.min(window.devicePixelRatio,2),n=this.canvas.clientWidth||300,s=this.canvas.clientHeight||150;(this.canvas.width!==n*e||this.canvas.height!==s*e)&&(this.canvas.width=n*e,this.canvas.height=s*e);const r=this.ctx;r.setTransform(e,0,0,e,0,0),r.clearRect(0,0,n,s);const a=36,o=8,l=10,c=20,h=n-a-o,u=s-l-c;let f=1/0,d=-1/0;for(const M of t.series)for(const R of M.y)R!==null&&isFinite(R)&&(f=Math.min(f,R),d=Math.max(d,R));for(const M of t.markers??[])f=Math.min(f,M.y),d=Math.max(d,M.y);isFinite(f)||(f=0,d=1),t.kind==="bar"&&(f=0);const g=(d-f)*.12||.5;f-=t.kind==="bar"?0:g,d+=g;const v=M=>a+(M-t.xMin)/(t.xMax-t.xMin)*h,p=M=>l+(1-(M-f)/(d-f))*u;r.font='10px Inter, "Segoe UI", system-ui, sans-serif',r.fillStyle=ze.muted,r.strokeStyle=ze.grid,r.lineWidth=1;const m=A0(f,d,4);for(const M of m){const R=p(M);r.beginPath(),r.moveTo(a,R),r.lineTo(n-o,R),r.stroke(),r.textAlign="right",r.fillText(Il(M),a-4,R+3)}const S=t.xMax-t.xMin,x=S>30?12:S>14?6:3;for(let M=Math.ceil(t.xMin/x)*x;M<=t.xMax;M+=x){const R=v(M);r.beginPath(),r.moveTo(R,l),r.lineTo(R,l+u),r.stroke(),r.textAlign="center",r.fillText(t.xTick(M),R,s-6)}r.textAlign="left",r.fillStyle=ze.muted,r.fillText(t.unit,a+2,l+9);for(const M of t.series)if(t.kind==="bar"){r.fillStyle=M.color;const R=Math.max(2,h/Math.max(1,M.x.length)-2);for(let A=0;A<M.x.length;A++){const T=M.y[A];if(T===null)continue;const D=v(M.x[A]),q=p(T);C0(r,D-R/2,q,R,p(0)-q,3),r.fill()}}else{r.strokeStyle=M.color,r.lineWidth=2,r.setLineDash(M.dashed?[5,4]:[]),r.beginPath();let R=!1;for(let A=0;A<M.x.length;A++){const T=M.y[A];if(T===null||!isFinite(T)){R=!1;continue}const D=v(M.x[A]),q=p(T);R?r.lineTo(D,q):(r.moveTo(D,q),R=!0)}r.stroke(),r.setLineDash([])}for(const M of t.markers??[]){const R=v(M.x),A=p(M.y);r.fillStyle=M.color,r.beginPath(),r.arc(R,A,4,0,Math.PI*2),r.fill(),r.strokeStyle="rgba(13,20,30,0.9)",r.lineWidth=2,r.stroke(),r.fillStyle=ze.text,r.textAlign=R>n*.7?"right":"left",r.fillText(M.label,R+(R>n*.7?-7:7),A-6)}if(t.cursor!==void 0&&t.cursor>=t.xMin&&t.cursor<=t.xMax){const M=v(t.cursor);r.strokeStyle=ze.cursor,r.lineWidth=1.5,r.beginPath(),r.moveTo(M,l),r.lineTo(M,l+u),r.stroke()}if(t.kind==="line"&&t.series.length>1){let M=l+4;for(const R of t.series)r.fillStyle=R.color,r.fillRect(n-o-90,M,10,3),r.fillStyle=ze.text,r.textAlign="left",r.fillText(R.name,n-o-76,M+4),M+=13}if(this.hoverX!==null){const M=t.xMin+Math.min(1,Math.max(0,(this.hoverX*n-a)/h))*S,R=v(M);r.strokeStyle="rgba(255,255,255,0.35)",r.lineWidth=1,r.beginPath(),r.moveTo(R,l),r.lineTo(R,l+u),r.stroke();const A=[`<b>${t.xTick(M)}</b>`];for(const T of t.series){const D=T0(T,M);D!==null&&A.push(`<span style="color:${T.color}">■</span> ${T.name}: ${Il(D)} ${t.unit}`)}this.tip.innerHTML=A.join("<br>"),this.tip.style.display="block"}}}function T0(i,t){if(!i.x.length)return null;let e=0,n=1/0;for(let s=0;s<i.x.length;s++){const r=Math.abs(i.x[s]-t);r<n&&(n=r,e=s)}return i.y[e]}function Il(i){return Math.abs(i)>=100?i.toFixed(0):Math.abs(i)>=10?i.toFixed(1):i.toFixed(2)}function A0(i,t,e){const s=(t-i)/e,r=Math.pow(10,Math.floor(Math.log10(s))),a=s/r,o=(a<1.5?1:a<3?2:a<7?5:10)*r,l=[];for(let c=Math.ceil(i/o)*o;c<=t;c+=o)l.push(+c.toFixed(6));return l}function C0(i,t,e,n,s,r){if(s<=0){i.beginPath();return}r=Math.min(r,n/2,s),i.beginPath(),i.moveTo(t,e+s),i.lineTo(t,e+r),i.quadraticCurveTo(t,e,t+r,e),i.lineTo(t+n-r,e),i.quadraticCurveTo(t+n,e,t+n,e+r),i.lineTo(t+n,e+s),i.closePath()}function R0(i,t,e,n,s){const r=Math.min(window.devicePixelRatio,2),a=i.clientWidth||600,o=i.clientHeight||40;(i.width!==a*r||i.height!==o*r)&&(i.width=a*r,i.height=o*r);const l=i.getContext("2d");l.setTransform(r,0,0,r,0,0),l.clearRect(0,0,a,o),l.fillStyle="rgba(255,255,255,0.04)",l.fillRect(0,0,a,o);const c=d=>d/n*a,h=Math.max(10,...e.y);l.fillStyle="rgba(85,152,231,0.55)";const u=Math.max(1,a/Math.max(1,e.x.length)-1);for(let d=0;d<e.x.length;d++){const g=e.y[d]/h*(o*.55);l.fillRect(c(e.x[d]),0,u,g)}if(t.y.length){const d=Math.min(...t.y),g=Math.max(...t.y),v=p=>o-3-(p-d)/Math.max(.01,g-d)*(o-8);l.strokeStyle=ze.obs,l.lineWidth=1.5,l.beginPath();for(let p=0;p<t.x.length;p++){const m=c(t.x[p]),S=v(t.y[p]);p===0?l.moveTo(m,S):l.lineTo(m,S)}l.stroke()}l.fillStyle=ze.muted,l.font="9px Inter, system-ui, sans-serif",l.textAlign="center";const f=n>30?6:3;for(let d=0;d<=n;d+=f)l.fillRect(c(d),o-3,1,3),l.fillText(s(d),c(d),o-5)}const Ul={play:'<path d="M7 4.5v15l12-7.5z" fill="currentColor" stroke="none"/>',pause:'<rect x="6" y="4.5" width="4" height="15" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="4.5" width="4" height="15" rx="1" fill="currentColor" stroke="none"/>',reset:'<path d="M3 12a9 9 0 1 0 2.6-6.4"/><path d="M3 4v5h5"/>',compare:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16"/>',orbit:'<path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 4v5h-5"/>',tour:'<path d="M4 7h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/><path d="m17 10 5-2v8l-5-2"/>',map:'<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',panels:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 4v16"/>',flow:'<path d="M3 8h9a3 3 0 1 0-3-3"/><path d="M3 12h13a3 3 0 1 1-3 3"/><path d="M3 16h6"/>',arrows:'<path d="M3 12h16"/><path d="m14 6 6 6-6 6"/>',peak:'<path d="m3 20 6-11 4 6 2-3 6 8z"/><path d="M13 4v3M10.5 5.5l1.5 1.5M15.5 5.5 14 7"/>',flyto:'<path d="m3 11 18-8-8 18-2-8z"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="m5 12 4 4L19 7"/>',wall:'<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 10h18M3 14h18M9 5v5M15 10v4M9 14v5"/>',sandbag:'<path d="M4 18h16"/><path d="M6 18a3 3 0 0 1 6 0M12 18a3 3 0 0 1 6 0M9 13a3 3 0 0 1 6 0"/>',pump:'<circle cx="12" cy="12" r="8"/><path d="M12 4v8l5.5 3"/>',tank:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',drain:'<path d="M7 3v6a5 5 0 0 0 10 0V3"/><path d="M12 14v7M8 21h8"/>',layers:'<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',wave:'<path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0 2 1.5 2 1.5"/><path d="M2 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',save:'<path d="M5 3h11l3 3v15H5z"/><path d="M8 3v6h8V3M8 21v-7h8v7"/>',download:'<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 19h16"/>',upload:'<path d="M12 15V3"/><path d="m7 8 5-5 5 5"/><path d="M4 19h16"/>',undo:'<path d="M4 10h11a5 5 0 0 1 0 10h-3"/><path d="m8 6-4 4 4 4"/>',lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',magnet:'<path d="M6 3v8a6 6 0 0 0 12 0V3"/><path d="M6 3h4v8H6M14 3h4v8h-4"/>',edit:'<path d="M4 20h4l10-10-4-4L4 16z"/><path d="m13 7 4 4"/>',hospital:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M12 8v6M9 11h6"/>',mtr:'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M9 21l1.5-3M15 21l-1.5-3"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/>',ferry:'<path d="M3 17c2 2 4 2 6 0s4 2 6 0 4 2 6 0"/><path d="M5 14 4 9h16l-1 5"/><path d="M9 9V5h6v4"/>',bus:'<rect x="4" y="4" width="16" height="13" rx="2"/><path d="M4 11h16M8 20v-3M16 20v-3"/><circle cx="8" cy="14" r="1"/><circle cx="16" cy="14" r="1"/>',carpark:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 16V8h3.5a2.5 2.5 0 0 1 0 5H9"/>',power:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',school:'<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 9v6"/>',elderly:'<circle cx="12" cy="7" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/>',mall:'<path d="M6 7h12l1 14H5z"/><path d="M9 7a3 3 0 0 1 6 0"/>',fire:'<path d="M12 22c4 0 7-3 7-7 0-3-2-5-3-7-1 2-2 3-3 3 0-3-1-6-4-8 0 4-4 6-4 12a7 7 0 0 0 7 7z"/>',police:'<path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10z"/>',community:'<path d="M3 21h18M5 21V10M19 21V10M9 21v-6h6v6M2 10l10-6 10 6z"/>',water:'<path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z"/>'};function ie(i,t=16,e=""){const n=Ul[i]??Ul.info;return`<svg class="ic ${e}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${n}</svg>`}const P0=[60,300,900,1800,3600],L0={60:["1分/秒","1 min/s"],300:["5分/秒","5 min/s"],900:["15分/秒","15 min/s"],1800:["30分/秒","30 min/s"],3600:["1时/秒","1 h/s"]},Rt=i=>document.getElementById(i),Gi=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"),so=Object.fromEntries(["hospital","mtr","ferry","bus","carpark","power","school","elderly","mall","fire","police","community","water"].map(i=>[i,ie(i,14)]));so.underground=ie("carpark",14);const Nl={wall:"wall",sandbag:"sandbag",pump:"pump",tank:"tank",drain:"drain"};class D0{constructor(t){N(this,"left",Rt("left"));N(this,"right",Rt("right"));N(this,"tideChart");N(this,"rainChart");N(this,"tool",null);N(this,"measureParams",{wall:{height:1.5,rate:0,capacity:0,factor:1,radius:0},sandbag:{height:.6,rate:0,capacity:0,factor:1,radius:0},pump:{height:0,rate:2,capacity:0,factor:1,radius:30},tank:{height:0,rate:0,capacity:3e4,factor:1,radius:80},drain:{height:0,rate:0,capacity:0,factor:2,radius:150}});N(this,"scene",null);N(this,"event",null);N(this,"params",null);N(this,"events",[]);N(this,"measures",[]);N(this,"selected",null);N(this,"dirty",!1);N(this,"devSave",!1);N(this,"snap",!0);N(this,"draftN",0);N(this,"draftLen",0);N(this,"newRole","whatif");N(this,"compare",!1);N(this,"flowMode","particles");N(this,"showFac",!0);this.h=t,Rt("sceneSel").addEventListener("change",r=>t.onSceneChange(r.target.value)),Rt("eventSel").addEventListener("change",r=>t.onEventChange(r.target.value)),Rt("btnPlay").addEventListener("click",()=>t.onPlayToggle()),Rt("btnReset").addEventListener("click",()=>t.onReset()),Rt("btnCompare").addEventListener("click",()=>t.onCompare()),Rt("btnOrbit").addEventListener("click",()=>t.onOrbit()),Rt("btnTour").addEventListener("click",()=>t.onTour()),Rt("btnTex").addEventListener("click",()=>t.onTexToggle()),Rt("btnPanels").addEventListener("click",()=>t.onPanels()),Rt("btnLang").addEventListener("click",()=>t.onLang()),Rt("btnPeak").addEventListener("click",()=>t.onPeak()),Rt("btnFlow").addEventListener("click",()=>t.onFlowMode());const e=Rt("speedBtns");for(const r of P0){const a=document.createElement("button");a.dataset.speed=String(r),a.addEventListener("click",()=>t.onSpeed(r)),e.appendChild(a)}const n=Rt("scrub"),s=r=>{const a=n.getBoundingClientRect();t.onSeek(Math.min(1,Math.max(0,(r.clientX-a.left)/a.width)))};n.addEventListener("click",s),Rt("btnReset").innerHTML=ie("reset"),Rt("btnOrbit").innerHTML=ie("orbit"),Rt("btnTour").innerHTML=ie("tour"),Rt("btnTex").innerHTML=ie("map"),Rt("btnPanels").innerHTML=ie("panels"),this.setPlaying(!1),this.relabel()}relabel(){document.querySelectorAll("[data-i18n]").forEach(t=>{t.textContent=j(t.dataset.i18n)}),Rt("btnLang").textContent=xi()==="zh"?"EN":"中文",Rt("btnCompare").innerHTML=`${ie("compare")}<span>${Tt("A/B 对比","A/B compare")}</span>`,Rt("btnOrbit").title=Tt("自动环绕","Orbit"),Rt("btnTour").title=Tt("电影式飞览","Cinematic tour"),Rt("btnTex").title=Tt("影像 / 地图","Imagery / map"),Rt("btnPanels").title=Tt("显示/隐藏面板","Toggle panels"),document.querySelectorAll("#speedBtns button").forEach(t=>{const e=+t.dataset.speed;t.textContent=L0[e][xi()==="zh"?0:1]}),Rt("btnPeak").innerHTML=`${ie("peak")}<span>${j("peak")}</span>`,Rt("swipeL").textContent=j("swipeLeft"),Rt("swipeR").textContent=j("swipeRight"),this.relabelFlow(),Rt("legendCls").innerHTML=(xi()==="zh"?["","踝","膝","腰","胸","一层"]:["","ankle","knee","waist","chest","floor"]).map(t=>`<span>${t}</span>`).join(""),this.renderLeft(),this.renderRight()}setScenes(t,e){const n=Rt("sceneSel");n.innerHTML="";for(const s of t){const r=document.createElement("option");r.value=s.id,r.textContent=Tt(s.name_zh,s.name_en),n.appendChild(r)}n.value=e}setEvents(t,e){this.events=t;const n=Rt("eventSel");n.innerHTML="";for(const s of t){const r=document.createElement("option");r.value=s.id,r.textContent=Tt(s.name_zh,s.name_en),n.appendChild(r)}n.value=e}setScene(t){this.scene=t,this.renderLeft(),this.renderRight()}setEvent(t){this.event=t,this.renderLeft(),this.renderRight()}setParams(t){this.params=t,this.renderLeft()}setMeasures(t,e){this.measures=t,this.selected=e,this.renderMeasureList()}setMeasuresDirty(t,e){this.dirty=t,this.devSave=e,this.renderMeasureFiles()}setDraftInfo(t,e){this.draftN=t,this.draftLen=e,this.renderHint()}setTool(t){this.tool=t,this.renderMeasureTools()}setCompare(t){this.compare=t,Rt("btnCompare").classList.toggle("active",t),this.renderRight()}setFlowMode(t){this.flowMode=t,this.relabelFlow()}relabelFlow(){const t=this.flowMode==="particles"?"flowParticles":this.flowMode==="arrows"?"flowArrows":"flowNone";Rt("btnFlow").innerHTML=`${ie(this.flowMode==="arrows"?"arrows":"flow")}<span>${j(t)}</span>`,Rt("btnFlow").classList.toggle("active",this.flowMode!=="none")}setActive(t,e){Rt(t).classList.toggle("active",e)}setPlaying(t){Rt("btnPlay").innerHTML=ie(t?"pause":"play",18)}setSpeed(t){document.querySelectorAll("#speedBtns button").forEach(e=>e.classList.toggle("active",+e.dataset.speed===t))}setTime(t,e){Rt("timeLabel").textContent=t,Rt("playhead").style.left=`${(e*100).toFixed(3)}%`}setStepInfo(t){Rt("stepInfo").textContent=t}setStatus(t){const e=Rt("status");t?(e.style.display="block",e.textContent=t):e.style.display="none"}setLoading(t,e=""){const n=Rt("loading");if(t===null){n.style.display="none";return}n.style.display="flex",Rt("loadingBar").style.width=`${Math.round(t*100)}%`,Rt("loadingText").textContent=e}togglePanels(){for(const t of["left","right"])Rt(t).classList.toggle("collapsed")}renderLeft(){const t=this.scene,e=this.event,n=this.params;if(!t||!e||!n)return;const s=e.facts.map(([l,c])=>`<div>${l}</div><div>${c}</div>`).join(""),r=e.kind,a=j(e.kind),o=t.pois.map((l,c)=>`<button class="chip" data-poi="${c}">${ie("flyto",12)}${l.name}</button>`).join("");this.left.innerHTML=`
      <h2>${j("scenario")}</h2>
      <h3><span class="tag ${r}">${a}</span>${Tt(e.name_zh,e.name_en)}</h3>
      <p>${Tt(e.narrative_zh,e.narrative_en)}</p>
      <div class="facts">${s}</div>
      <div class="note">${Tt(t.blurb_zh,t.blurb_en)}</div>
      <div class="chips">${o}</div>
      <h2>${j("params")}</h2>
      ${this.slider("surgeScale",j("surgeScale"),n.surgeScale,0,2,.05,l=>`×${l.toFixed(2)}`)}
      ${this.slider("waveSetup",j("waveSetup"),n.waveSetup,0,1.5,.05,l=>`+${l.toFixed(2)} m`)}
      ${this.slider("waveHs",j("waveHs"),n.waveHs,0,5,.1,l=>`${l.toFixed(1)} m`)}
      ${this.slider("slr",j("slr"),n.slr,0,1.5,.05,l=>`+${l.toFixed(2)} m`)}
      ${this.slider("rainScale",j("rainScale"),n.rainScale,0,2.5,.05,l=>`×${l.toFixed(2)}`)}
      ${this.slider("drainMmPerHour",j("drain"),n.drainMmPerHour,0,120,5,l=>`${l.toFixed(0)} mm/h`)}
      <label class="toggle"><input type="checkbox" id="chkBld" ${n.buildingsBlock?"checked":""}/> ${j("buildingsBlock")}</label>
      <label class="toggle"><input type="checkbox" id="chkSg" ${n.subgrid?"checked":""}/> ${j("subgrid")}</label>
      <label class="toggle"><input type="checkbox" id="chkMax"/> ${Tt("在地面上显示最大淹没范围","Show max-depth footprint on terrain")}</label>
      ${t.facilities?.length?`<label class="toggle"><input type="checkbox" id="chkFac" ${this.showFac?"checked":""}/> ${j("showFac")}</label>`:""}
      <h2>${j("measures")}</h2>
      <div id="measureTools"></div>
      <div id="measureParams"></div>
      <div id="measureHint" class="hint" style="display:none"></div>
      <div id="measureList" class="measure-list"></div>
      <div id="measureFiles"></div>
      <div class="credits">${j("modelNote")} ${t.cols}×${t.rows} @ ${t.res} m · DEM: ${t.dem_stats?.source??"—"}<br>${t.textures?.attribution??""}<br>${Tt("建筑：Overture Maps / OpenStreetMap 贡献者","Buildings: Overture Maps / OpenStreetMap contributors")}</div>`;for(const l of["surgeScale","waveSetup","waveHs","slr","rainScale","drainMmPerHour"]){const c=this.left.querySelector(`#sl_${l}`),h=this.left.querySelector(`#sv_${l}`);c.addEventListener("input",()=>{n[l]=+c.value,h.textContent=c.dataset.fmt==="x"?`×${(+c.value).toFixed(2)}`:c.dataset.fmt==="m"?`+${(+c.value).toFixed(2)} m`:c.dataset.fmt==="hs"?`${(+c.value).toFixed(1)} m`:`${(+c.value).toFixed(0)} mm/h`}),c.addEventListener("change",()=>this.h.onParamChange(n))}this.left.querySelector("#chkBld").addEventListener("change",l=>{n.buildingsBlock=l.target.checked,this.h.onParamChange(n)}),this.left.querySelector("#chkSg").addEventListener("change",l=>{n.subgrid=l.target.checked,this.h.onParamChange(n)}),this.left.querySelector("#chkMax").addEventListener("change",l=>this.h.onShowMax(l.target.checked)),this.left.querySelector("#chkFac")?.addEventListener("change",l=>{this.showFac=l.target.checked,this.h.onShowFacilities(this.showFac)}),this.left.querySelectorAll("[data-poi]").forEach(l=>l.addEventListener("click",()=>{const c=t.pois[+l.dataset.poi];this.h.onFlyTo(c.x,c.y)})),this.renderMeasureTools(),this.renderMeasureList(),this.renderMeasureFiles()}slider(t,e,n,s,r,a,o){return`<div class="row"><label>${e}</label><input type="range" id="sl_${t}" data-fmt="${t==="drainMmPerHour"?"mm":t==="waveHs"?"hs":t==="waveSetup"||t==="slr"?"m":"x"}" min="${s}" max="${r}" step="${a}" value="${n}"/><span class="val" id="sv_${t}">${o(n)}</span></div>`}renderMeasureTools(){const t=this.left.querySelector("#measureTools");if(!t)return;const e=[["wall",j("wall")],["sandbag",j("sandbag")],["pump",j("pump")],["tank",j("tank")],["drain",j("drainUp")]],n=[["whatif",j("role_whatif")],["record",j("role_record")],["temporary",j("role_temporary")]];t.innerHTML=`<div class="tools">${e.map(([l,c])=>`<button data-tool="${l}" class="${this.tool===l?"active":""}">${ie(Nl[l],16)}<span>${c}</span></button>`).join("")}</div>
      <div class="row"><label>${j("newRole")}</label><select id="selRole" class="select sm">${n.map(([l,c])=>`<option value="${l}" ${this.newRole===l?"selected":""}>${c}</option>`).join("")}</select></div>
      <div class="actions"><button id="btnFinish" class="btn sm primary" ${this.tool?"":"disabled"}>${ie("check",13)}${j("finish")}</button><button id="btnUndoV" class="btn sm" title="Backspace" ${this.tool?"":"disabled"}>${ie("undo",13)}</button><button id="btnCancelDraft" class="btn sm" ${this.tool?"":"disabled"}>${j("cancel")}</button><button id="btnSnap" class="btn sm ${this.snap?"active":""}" title="${j("snapShore")}">${ie("magnet",13)}</button><button id="btnClearM" class="btn sm" title="${j("clearNote")}">${j("clear")}</button></div>`,t.querySelectorAll("[data-tool]").forEach(l=>l.addEventListener("click",()=>{const c=l.dataset.tool;this.h.onMeasureTool(this.tool===c?null:c)})),t.querySelector("#selRole").addEventListener("change",l=>{this.newRole=l.target.value}),t.querySelector("#btnFinish").addEventListener("click",()=>this.h.onFinishDraft()),t.querySelector("#btnUndoV").addEventListener("click",()=>this.h.onUndoVertex()),t.querySelector("#btnCancelDraft").addEventListener("click",()=>this.h.onCancelDraft()),t.querySelector("#btnSnap").addEventListener("click",()=>{this.snap=!this.snap,t.querySelector("#btnSnap").classList.toggle("active",this.snap),this.h.onSnapToggle(this.snap)}),t.querySelector("#btnClearM").addEventListener("click",()=>this.h.onClearMeasures());const s=this.left.querySelector("#measureParams");if(!this.tool){s.innerHTML="",this.renderHint();return}const r=this.measureParams[this.tool],a=(l,c,h,u,f,d,g)=>`<div class="row"><label>${c}</label><input type="range" data-mp="${l}" min="${u}" max="${f}" step="${d}" value="${h}"/><span class="val">${h} ${g}</span></div>`;let o="";(this.tool==="wall"||this.tool==="sandbag")&&(o=a("height",j("wallHeight"),r.height,.3,4,.1,"m")),this.tool==="pump"&&(o=a("rate",j("pumpRate"),r.rate,.2,10,.2,"m³/s")+a("radius",Tt("集水半径","Catch radius"),r.radius,10,100,5,"m")),this.tool==="tank"&&(o=a("capacity",j("tankCap"),r.capacity,2e3,15e4,1e3,"m³")+a("radius",Tt("半径(单点放置时)","Radius (point mode)"),r.radius,30,300,10,"m")),this.tool==="drain"&&(o=a("factor",j("drainFactor"),r.factor,0,6,.5,"×")+a("radius",Tt("半径(单点放置时)","Radius (point mode)"),r.radius,50,500,10,"m")),s.innerHTML=o,s.querySelectorAll("[data-mp]").forEach(l=>l.addEventListener("input",()=>{const c=l.dataset.mp;r[c]=+l.value,l.nextElementSibling.textContent=`${l.value} ${l.nextElementSibling.textContent.split(" ").slice(1).join(" ")}`,this.h.onMeasureParam(this.tool,c,+l.value)})),this.renderHint()}renderHint(){const t=this.left.querySelector("#measureHint");if(!t)return;if(!this.tool){t.style.display="none";return}t.style.display="block";const e=this.tool==="pump"?j("hintPoint"):j("hintDraw")+(this.tool==="tank"||this.tool==="drain"?Tt(" 单击一次即为圆形区域。"," A single click places a circular area."):""),n=this.draftN?` ${Tt(`已放 ${this.draftN} 个点`,`${this.draftN} vertices`)}${this.draftLen?` · ${this.draftLen.toFixed(0)} m`:""}`:"",s=this.snap&&(this.tool==="wall"||this.tool==="sandbag")?` ${j("snapOn")}`:"";t.textContent=e+n+s}getMeasureParams(t){return this.measureParams[t]}renderMeasureList(){const t=this.left.querySelector("#measureList");if(!t)return;if(!this.measures.length){t.innerHTML=`<div class="note">${j("noMeasures")}</div>`;return}const e=this.measures.filter(r=>(r.m.role??"whatif")==="whatif").reduce((r,a)=>r+a.cost,0),n=r=>r.name?xi()==="en"&&r.name_en?r.name_en:r.name:r.kind==="wall"||r.kind==="sandbag"?`${j(r.kind)} ${r.height} m`:r.kind==="pump"?`${j("pump")} ${r.rate} m³/s`:r.kind==="tank"?`${j("tank")} ${r.capacity} m³`:(r.factor??2)<1?`${j("drainBlocked")} ×${r.factor}`:`${j("drainUp")} ×${r.factor}`,s=r=>{const a=r.m.role??"whatif";if(a==="whatif")return`<span class="mst cost">HK$${(r.cost/1e6).toFixed(1)}M</span>`;if(a==="record")return r.exists?`<span class="mst on">${j("def_built")}${r.m.in_dtm?"":` · ${j("def_raised")}`}</span>`:`<span class="mst off">${r.m.in_dtm?j("def_removed"):j("def_notyet")}</span>`;const o=r.m.from_h!==void 0||r.m.to_h!==void 0?` ${r.m.from_h??""}h→${r.m.to_h??""}h`:"";return`<span class="mst ${r.eff>0?"on":"off"}">${r.eff>0?j("tmp_on"):j("tmp_off")}${o}</span>`};t.innerHTML=this.measures.map(r=>{const a=r.m,o=a.id===this.selected;return`<div class="mrow ${o?"sel":""} ${r.eff===0&&!((a.role??"whatif")==="record"&&r.exists)?"ghost":""}" data-sel="${a.id}"><span class="mlab">${ie(Nl[a.kind],13)}<span class="rchip ${a.role??"whatif"}">${j("role_"+(a.role??"whatif"))}</span>${n(a)}${a.locked?` <span title="${j("fromPipeline")}">${ie("lock",11)}</span>`:""}</span><span>${s(r)} <button class="btn sm" data-rm="${a.id}" title="${j("delete")}">${ie("x",12)}</button></span></div>${o?this.measureForm(a):""}`}).join("")+(e?`<div class="mrow total"><span>${j("costNote")}</span><span>HK$${(e/1e6).toFixed(1)}M</span></div>`:""),t.querySelectorAll("[data-rm]").forEach(r=>r.addEventListener("click",a=>{a.stopPropagation(),this.h.onRemoveMeasure(+r.dataset.rm)})),t.querySelectorAll("[data-sel]").forEach(r=>r.addEventListener("click",()=>{const a=+r.dataset.sel;this.h.onSelectMeasure(this.selected===a?null:a)})),this.bindMeasureForm(t)}measureForm(t){const e=t.role??"whatif",n=(a,o,l,c,h)=>`<label>${o}<span><input type="number" data-f="${a}" step="${l}" ${h!==void 0?`min="${h}"`:""} value="${t[a]??""}"/> ${c}</span></label>`,s=(a,o,l="")=>`<label>${o}<input type="text" data-f="${a}" value="${Gi(String(t[a]??""))}" placeholder="${l}"/></label>`;let r=`<div class="mform" data-form="${t.id}">`;return r+=s("name",j("f_name"),j("f_name_ph")),(t.kind==="wall"||t.kind==="sandbag")&&(r+=n("height",j("wallHeight"),.1,"m",0)),t.kind==="pump"&&(r+=n("rate",j("pumpRate"),.1,"m³/s",0)+(t.cells?.length?"":n("radius",Tt("集水半径","Catch radius"),5,"m",5))),t.kind==="tank"&&(r+=n("capacity",j("tankCap"),500,"m³",0)+(t.pts.length>=3||t.cells?.length?"":n("radius",Tt("半径","Radius"),10,"m",10))),t.kind==="drain"&&(r+=n("factor",j("drainFactor"),.5,"×",0)+(t.pts.length>=3||t.cells?.length?"":n("radius",Tt("半径","Radius"),10,"m",10))),r+=`<label>${j("f_role")}<select data-f="role">${["whatif","record","temporary"].map(a=>`<option value="${a}" ${e===a?"selected":""}>${j("role_"+a)}</option>`).join("")}</select></label>`,e==="record"&&(r+=`<label>${j("f_built")}<input type="month" data-f="built" value="${Gi(t.built??"")}"/></label>`,r+=`<label>${j("f_removed")}<input type="month" data-f="removed" value="${Gi(t.removed??"")}"/></label>`,r+=`<label class="chk"><input type="checkbox" data-f="in_dtm" ${t.in_dtm?"checked":""}/> ${j("f_in_dtm")}</label>`),e==="temporary"&&(r+=`<div class="evs">${j("f_events")}${this.events.map(a=>`<label class="chk"><input type="checkbox" data-ev="${a.id}" ${!t.events?.length||t.events.includes(a.id)?"checked":""}/> ${Tt(a.name_zh,a.name_en)}</label>`).join("")}</div>`,r+=`<label>${j("f_window")}<span><input type="number" data-f="from_h" step="0.5" value="${t.from_h??""}" placeholder="−∞"/> → <input type="number" data-f="to_h" step="0.5" value="${t.to_h??""}" placeholder="+∞"/> h</span></label>`),r+=s("src",j("f_src"),j("f_src_ph")),r+=`<label>${j("f_note")}<textarea data-f="note" rows="2">${Gi(t.note??"")}</textarea></label>`,r+=`<div class="actions"><button class="btn sm" data-fly="${t.id}">${ie("flyto",12)}${j("flyTo")}</button><span class="note">${t.cells?.length?j("geomCells"):t.pts.length>1?Tt(`${t.pts.length} 个顶点`,`${t.pts.length} vertices`):""} · ${j("f_key")} ${Gi(t.key??"—")}</span></div></div>`,r}bindMeasureForm(t){const e=t.querySelector("[data-form]");if(!e)return;const n=+e.dataset.form;e.addEventListener("click",a=>a.stopPropagation());const s=this.measures.find(a=>a.m.id===n)?.m;if(!s)return;const r=a=>this.h.onUpdateMeasure(n,a);e.querySelectorAll("[data-f]").forEach(a=>{const o=a.dataset.f;a.addEventListener("change",()=>{if(a instanceof HTMLInputElement&&a.type==="checkbox")return r({[o]:a.checked});if(a instanceof HTMLInputElement&&a.type==="number"){const c=a.value.trim();return r({[o]:c===""?void 0:+c})}const l=a.value.trim();if(o==="role"){const c={role:l};return l!=="whatif"&&!s.key&&(c.key=`${s.kind}_${Date.now().toString(36)}`),r(c)}return r({[o]:l===""?void 0:l})})}),e.querySelectorAll("[data-ev]").forEach(a=>a.addEventListener("change",()=>{const o=Array.from(e.querySelectorAll("[data-ev]")),l=o.filter(c=>c.checked).map(c=>c.dataset.ev);r({events:l.length===o.length?[]:l})})),e.querySelector("[data-fly]")?.addEventListener("click",()=>{const a=s.pts[0];a&&this.h.onFlyTo(a.x,a.y)})}renderMeasureFiles(){const t=this.left.querySelector("#measureFiles");if(!t||!this.scene)return;t.innerHTML=`<div class="actions files"><button id="btnSaveM" class="btn sm ${this.dirty?"primary":""}">${ie("save",13)}${this.devSave?j("save"):j("download")}</button><button id="btnExportM" class="btn sm" title="${j("exportNote")}">${ie("download",13)}</button><button id="btnImportM" class="btn sm" title="${j("importNote")}">${ie("upload",13)}</button><button id="btnRevertM" class="btn sm" ${this.dirty?"":"disabled"}>${j("revert")}</button><input type="file" id="fileM" accept="application/json,.json" style="display:none"/></div>
      <div class="note">${this.devSave?Tt(`保存到 web/public/scenes/${this.scene.id}/measures.json（开发服务器写文件，提交即生效）`,`Saves web/public/scenes/${this.scene.id}/measures.json (the dev server writes the file; commit it)`):Tt("生产版只能下载 JSON，放到 web/public/scenes/<场景>/measures.json","Production build downloads the JSON; put it at web/public/scenes/<scene>/measures.json")}${this.dirty?Tt("。有未保存的改动（已暂存在浏览器里）",". Unsaved edits (kept in this browser)"):""}</div>`,t.querySelector("#btnSaveM").addEventListener("click",()=>this.h.onSaveMeasures()),t.querySelector("#btnExportM").addEventListener("click",()=>this.h.onExportMeasures());const e=t.querySelector("#fileM");t.querySelector("#btnImportM").addEventListener("click",()=>e.click()),e.addEventListener("change",()=>{const n=e.files?.[0];n&&this.h.onImportMeasures(n),e.value=""}),t.querySelector("#btnRevertM").addEventListener("click",()=>this.h.onRevertMeasures())}renderRight(){const t=this.event,e=this.scene;if(!t||!e)return;const n=this.compare;this.right.innerHTML=`
      <h2>${j("comparison")}</h2>
      <div id="metrics" class="metrics"></div>
      ${n?`<div class="note" style="margin:4px 0 2px">${Tt("分屏：左 = 无措施基线，右 = 含措施（拖动画面中央把手）；差值 = 含措施 − 基线","Split view: left = baseline, right = with measures (drag the handle); deltas = measures − baseline")}</div>`:""}
      <h2>${j("hotspots")}</h2>
      <div id="hotspots"></div>
      ${e.facilities?.length?`<h2>${j("facilities")}</h2><div id="facTable"></div>`:""}
      <h2>${j("tideChart")}</h2>
      <canvas class="chart" id="tideChart"></canvas>
      <h2>${j("rainChart")}</h2>
      <canvas class="chart" id="rainChart" style="height:110px"></canvas>
      <h2>${j("validation")}</h2>
      <div id="valTable"></div>
      <h2>${j("sources")}</h2>
      <ul class="note" style="padding-left:16px;margin:4px 0">${t.sources.map(s=>`<li>${s}</li>`).join("")}</ul>`,this.tideChart=new Dl(this.right.querySelector("#tideChart")),this.rainChart=new Dl(this.right.querySelector("#rainChart")),this.right.querySelector("#chkBase")?.addEventListener("change",s=>this.h.onShowBaseline(s.target.checked))}setFacilities(t,e){const n=this.right.querySelector("#facTable"),s=this.scene?.facilities;if(!n||!s)return;if(!t?.facDepths){n.innerHTML="";return}const a=s.map(c=>({f:c,d:t.facDepths[c.id]??0,b:e?.facDepths?.[c.id]})).sort((c,h)=>Math.max(h.d,h.b??0)-Math.max(c.d,c.b??0)).filter(c=>Math.max(c.d,c.b??0)>=.15),o=c=>c>=.5?"sev":c>=.15?"mod":"ok",l=a.slice(0,14).map(c=>`<tr><td>${so[c.f.type]??""} ${c.f.name}<div class="sub">${j("ft_"+c.f.type)}</div></td>${e?`<td class="num ${o(c.b??0)}">${(c.b??0).toFixed(2)}</td>`:""}<td class="num ${o(c.d)}">${c.d.toFixed(2)}</td></tr>`).join("");n.innerHTML=`<table class="val"><thead><tr><th>${j("facility")}</th>${e?`<th>${j("baseline")}</th>`:""}<th>${j(e?"withMeasures":"maxDepth")} (m)</th></tr></thead><tbody>${l}</tbody></table>
      <div class="note" style="margin-top:4px">${a.length}/${s.length} ${Tt("受影响（≥ 0.15 m）","affected (≥ 0.15 m)")}${a.length>14?Tt("，仅列前 14",", top 14 shown"):""}</div>`}setHotspots(t){const e=this.right.querySelector("#hotspots");if(e){if(!t.length){e.innerHTML=`<div class="note">${j("noHot")}</div>`;return}e.innerHTML=t.map((n,s)=>`<div class="hot"><span><span class="rank">${s+1}</span>${n.name??""} <b>${n.depth.toFixed(2)} m</b>${n.area?` <span class="sub" style="color:var(--muted)">· ${(n.area/1e4).toFixed(1)} ha</span>`:""}</span><button class="btn sm" data-hot="${s}">${ie("flyto",12)}${j("flyTo")}</button></div>`).join(""),e.querySelectorAll("[data-hot]").forEach(n=>n.addEventListener("click",()=>{const s=t[+n.dataset.hot];this.h.onHotspot(s.x,s.y)}))}}setMetrics(t,e){const n=this.right.querySelector("#metrics");if(!n)return;if(!t){n.innerHTML="";return}const s=(a,o,l,c,h)=>`<div class="metric"><div class="k">${a}</div><div class="v">${o}<small>${l}</small></div>${c?`<div class="d ${h?"bad":""}">${c}</div>`:""}</div>`,r=(a,o,l,c=2)=>e?`${a-o>=0?"+":""}${(a-o).toFixed(c)} ${l} ${Tt("vs 基线","vs baseline")}`:void 0;n.innerHTML=s(j("maxDepth"),t.maxDepth.toFixed(2),"m",e?r(t.maxDepth,e.maxDepth,"m"):void 0,e?t.maxDepth>e.maxDepth:!1)+s(j("floodedArea"),t.floodedAreaKm2.toFixed(3),"km²",e?r(t.floodedAreaKm2,e.floodedAreaKm2,"km²",3):void 0,e?t.floodedAreaKm2>e.floodedAreaKm2:!1)+s(j("severeArea"),t.floodedAreaSevereKm2.toFixed(3),"km²",e?r(t.floodedAreaSevereKm2,e.floodedAreaSevereKm2,"km²",3):void 0,e?t.floodedAreaSevereKm2>e.floodedAreaSevereKm2:!1)+s(j("bldAffected"),`${t.buildingsAffected}`,"",e?r(t.buildingsAffected,e.buildingsAffected,"",0):void 0,e?t.buildingsAffected>e.buildingsAffected:!1)+`<div class="metric wide"><span><span class="k">${j("volume")}</span> <b style="font-variant-numeric:tabular-nums">${t.volumeMm3.toFixed(3)} Mm³</b>${e?` <span class="d ${t.volumeMm3>e.volumeMm3?"bad":""}" style="display:inline">${r(t.volumeMm3,e.volumeMm3,"Mm³",3)}</span>`:""}</span><span><span class="k">${j("gaugeNow")}</span> <b style="font-variant-numeric:tabular-nums">${Object.entries(t.gaugeLevels).map(([a,o])=>`${a} ${o.toFixed(2)} mPD`).join(" · ")||"—"}</b></span></div>`}setValidation(t,e){const n=this.right.querySelector("#valTable");if(!n)return;if(!t.length){n.innerHTML=`<div class="note">${j("noVal")}</div>`;return}let s=0,r=0;const a=t.map(o=>{const l=e?.valDepths[o.id],c=l===void 0?"—":l.toFixed(2);let h=null;l!==void 0&&(r++,h=o.cls==="none"?l<.2:Math.abs(l-o.depth)<=Math.max(.35,.5*o.depth),h&&s++);const u=o.cls==="none"?Tt("无水浸","none"):`≈${o.depth.toFixed(1)} m`,f=o.note_zh?`<div class="sub">${Tt(o.note_zh,o.note_en??o.note_zh)}</div>`:"";return`<tr title="${o.src}"><td>${Tt(o.zh,o.en)}${f}</td><td class="num">${u}</td><td class="num">${c}</td><td class="${h===null?"":h?"hit":"miss"}">${h===null?"":ie(h?"check":"x",13)}</td></tr>`}).join("");n.innerHTML=`<table class="val"><thead><tr><th>${j("place")}</th><th>${j("observed")}</th><th>${j("simulated")} (max)</th><th></th></tr></thead><tbody>${a}</tbody></table>
      <div class="score">${j("score")}: <b>${r?`${s}/${r}`:"—"}</b> <span class="note">${Tt("（±0.35 m 或 ±50% 视为命中；取地点 60 m 内街道格的最大水深）","(hit if within ±0.35 m or ±50%; max depth over street cells within 60 m)")}</span></div>`}}const Fl={"hk-island-east":"mangkhut-2018","tseung-kwan-o":"mangkhut-2018","sha-tin":"wanda-1962","tai-po":"mangkhut-2018","wong-tai-sin":"rainstorm-2023","victoria-harbour":"dubhe-1000","tai-o":"hato-2017","hk-overview":"dubhe-1000"};function An(i){return new Date(i.length===16?`${i}:00+08:00`:`${i}+08:00`)}class I0{constructor(){N(this,"world");N(this,"ui");N(this,"solver",null);N(this,"baseline",null);N(this,"assets",null);N(this,"event",null);N(this,"sceneList",[]);N(this,"eventList",[]);N(this,"sceneId","hk-island-east");N(this,"eventId","mangkhut-2018");N(this,"params",{surgeScale:1,waveSetup:.2,waveHs:2,slr:0,rainScale:1,drainMmPerHour:40,hillCapMmPerHour:40,recoverGain:6,tideLockM:1.5,buildingsBlock:!0,manning:.035,subgrid:!0});N(this,"measures",null);N(this,"forcing",null);N(this,"playing",!1);N(this,"speed",900);N(this,"simT",0);N(this,"windowSec",86400);N(this,"compare",!1);N(this,"showBaseline",!1);N(this,"flowMode","particles");N(this,"splitFrac",.5);N(this,"showFacilities",!0);N(this,"flyAfterSeek",!1);N(this,"spawnA",new Float32Array(0));N(this,"spawnB",new Float32Array(0));N(this,"metrics",null);N(this,"baseMetrics",null);N(this,"tool",null);N(this,"draft",[]);N(this,"selectedMeasure",null);N(this,"snapShore",!0);N(this,"modSigA","");N(this,"modSigB","");N(this,"lastFrame",performance.now());N(this,"lastMetrics",0);N(this,"lastLightning",0);N(this,"seekTarget",null);N(this,"dtBase",.5);N(this,"maxDepthSeen",0);N(this,"loadingToken",0);N(this,"flashTimer",0);const t=document.getElementById("view");this.world=new S0(t,document.getElementById("labels")),this.ui=new D0({onSceneChange:e=>{this.sceneId=e,this.eventId=Fl[e]??this.eventId,this.ui.setEvents(this.eventList,this.eventId),this.load()},onEventChange:e=>{this.eventId=e,this.load(!1)},onParamChange:e=>{this.params=e,this.applyParams(),this.restart()},onMeasureTool:e=>this.setTool(e),onFinishDraft:()=>this.finishDraft(),onCancelDraft:()=>{this.draft=[],this.world.setDraft([],"wall"),this.setTool(null)},onUndoVertex:()=>this.undoVertex(),onSnapToggle:e=>{this.snapShore=e},onRemoveMeasure:e=>{this.measures?.remove(e),this.selectedMeasure===e&&(this.selectedMeasure=null),this.measuresChanged()},onClearMeasures:()=>{this.measures?.clearWhatIf(),this.selectedMeasure=null,this.measuresChanged()},onMeasureParam:()=>{},onSelectMeasure:e=>this.selectMeasure(e),onUpdateMeasure:(e,n)=>{this.measures?.update(e,n),this.measuresChanged()},onSaveMeasures:()=>this.saveMeasures(),onExportMeasures:()=>this.exportMeasures(),onImportMeasures:e=>this.importMeasures(e),onRevertMeasures:()=>this.revertMeasures(),onPlayToggle:()=>this.setPlaying(!this.playing),onReset:()=>this.restart(),onSpeed:e=>{this.speed=e,this.ui.setSpeed(e)},onSeek:e=>this.seek(e*this.windowSec),onCompare:()=>this.toggleCompare(),onOrbit:()=>{const e=this.world.director.controls;e.autoRotate=!e.autoRotate,e.autoRotateSpeed=.6,this.ui.setActive("btnOrbit",e.autoRotate)},onTour:()=>this.tour(),onTexToggle:()=>{this.world.setTextureMode(this.world.texMode==="imagery"?"basemap":"imagery")},onPanels:()=>this.ui.togglePanels(),onLang:()=>{E0(xi()==="zh"?"en":"zh"),document.documentElement.lang=xi()==="zh"?"zh-CN":"en",this.ui.relabel(),this.ui.setScenes(this.sceneList,this.sceneId),this.ui.setEvents(this.eventList,this.eventId),this.refreshCharts(),this.refreshLabels()},onFlyTo:(e,n)=>this.world.director.flyTo(this.world.viewAt(e,n,700),2.2),onShowMax:e=>this.world.setShowMax(e),onShowBaseline:e=>{this.showBaseline=e,this.bindView()},onFlowMode:()=>this.cycleFlow(),onPeak:()=>this.jumpToPeak(),onHotspot:(e,n)=>this.world.director.flyTo(this.world.viewAt(e,n,450),2),onShowFacilities:e=>{this.showFacilities=e,this.refreshLabels()}}),this.ui.setSpeed(this.speed),this.ui.setParams(this.params),this.ui.setFlowMode(this.flowMode),this.bindPointer(t),this.bindSwipe(),this.world.director.onTourEnd=()=>{this.ui.setActive("btnTour",!1),this.ui.setStatus(null)},this.init(),requestAnimationFrame(()=>this.frame())}async init(){try{[this.sceneList,this.eventList]=await Promise.all([Ic(),Uc()])}catch(e){this.ui.setLoading(1,`数据索引加载失败 / failed to load index: ${e}`);return}const t=new URLSearchParams(location.search);t.get("scene")&&this.sceneList.some(e=>e.id===t.get("scene"))&&(this.sceneId=t.get("scene")),this.sceneList.some(e=>e.id===this.sceneId)||(this.sceneId=this.sceneList[0].id),this.eventId=t.get("event")??Fl[this.sceneId]??this.eventList[0].id,this.eventList.some(e=>e.id===this.eventId)||(this.eventId=this.eventList[0].id),this.ui.setScenes(this.sceneList,this.sceneId),this.ui.setEvents(this.eventList,this.eventId),await this.load()}async load(t=!0){const e=++this.loadingToken;this.playing=!1,this.ui.setPlaying(!1),this.ui.setLoading(.02,j("loading"));try{const n=Nc(this.eventId);if(t||!this.assets){if(this.assets=await Fc(this.sceneId,(s,r)=>this.ui.setLoading(s*.8,`${j("loading")} ${r}`)),e!==this.loadingToken)return;this.buildSolvers()}if(this.event=await n,e!==this.loadingToken)return;history.replaceState(null,"",`?scene=${this.sceneId}&event=${this.eventId}`),this.params.waveSetup=this.event.kind==="typhoon"?.2:this.event.kind==="fictional"?.3:0,this.params.waveHs=this.event.kind==="typhoon"?2:this.event.kind==="fictional"?3:0,this.ui.setParams(this.params),this.buildForcing(),this.ui.setScene(this.assets.meta),this.ui.setEvent(this.event),this.applyMeasures(),this.applyParams(),this.restart(),this.refreshCharts(),this.refreshLabels(),this.ui.setLoading(null),this.setPlaying(!0)}catch(n){console.error(n),this.ui.setLoading(1,`加载失败 / load failed: ${n}`)}}buildSolvers(){const t=this.assets,e=t.meta;this.solver?.dispose(),this.baseline?.dispose(),this.baseline=null,this.solver=new Tl(this.world.renderer,{W:e.cols,H:e.rows,dx:e.res},t.dem,t.bldh,t.mask,t.expo,t.basin,t.chan,t.ug,t.sgCell&&t.sgFace?{cell:t.sgCell,face:t.sgFace}:null),this.measures=new y0(e.cols,e.rows,e.res),this.measures.sea=t.mask,this.selectedMeasure=null,this.loadMeasures(),this.applyMeasures(),this.world.loadScene(t,this.solver.terrainTex,this.solver.modTex,this.solver.stateTex,this.solver.auxTex),this.spawnA=new Float32Array(e.cols*e.rows*2),this.spawnB=new Float32Array(e.cols*e.rows*2),this.compare&&this.makeBaseline(),this.syncSplit()}loadMeasures(){const t=this.assets,e=this.measures;e.replaceAll([]);for(const o of t.meta.defences??[])e.add({kind:"wall",pts:[{x:o.x,y:o.y}],cells:o.cells,height:o.height_m,key:o.id,name:o.zh,name_en:o.en,role:"record",built:o.built,in_dtm:o.in_dtm,src:o.src,locked:!0});const n=t.savedMeasures;let s=null;try{const o=localStorage.getItem(this.measuresKey());o&&(s=JSON.parse(o))}catch{s=null}const r=s&&(!n||(s.saved??"")>(n.saved??"")),a=r?s:n;a&&e.loadSaved(a,t.meta.origin),this.ui.setMeasuresDirty(!!r,!1)}measuresKey(){return`hkfl.measures.${this.sceneId}`}ctx(t,e=this.simT/3600){return{eventId:this.eventId,eventStart:this.event?An(this.event.window.start).getTime():0,simH:e,whatIf:t}}applyMeasures(){const t=this.measures;if(t){if(this.solver){const e=this.ctx(!0);t.rasterize(this.solver.modData,e),this.solver.updateMod(),this.modSigA=t.signature(e)}if(this.baseline){const e=this.ctx(!1);t.rasterize(this.baseline.modData,e),this.baseline.updateMod(),this.modSigB=t.signature(e)}this.refreshMeasureViews()}}refreshMeasureViews(){const t=this.measures;if(!t)return;const e=this.ctx(!0),n=t.measures.map(s=>({m:s,eff:t.effect(s,e),cost:t.cost(s),exists:t.existsAt(s,e)}));this.world.setMeasures(n.map(s=>({m:s.m,eff:s.eff,selected:s.m.id===this.selectedMeasure}))),this.ui.setMeasures(n,this.selectedMeasure)}tickMeasures(){const t=this.measures;if(!t||!this.solver)return;const e=this.ctx(!0),n=t.signature(e);if(n!==this.modSigA&&(t.rasterize(this.solver.modData,e),this.solver.updateMod(),this.modSigA=n,this.refreshMeasureViews()),this.baseline){const s=this.ctx(!1),r=t.signature(s);r!==this.modSigB&&(t.rasterize(this.baseline.modData,s),this.baseline.updateMod(),this.modSigB=r)}}makeBaseline(){const t=this.assets,e=t.meta;if(this.baseline?.dispose(),this.baseline=new Tl(this.world.renderer,{W:e.cols,H:e.rows,dx:e.res},t.dem,t.bldh,t.mask,t.expo,t.basin,t.chan,t.ug,t.sgCell&&t.sgFace?{cell:t.sgCell,face:t.sgFace}:null),this.measures){const n=this.ctx(!1);this.measures.rasterize(this.baseline.modData,n),this.baseline.updateMod(),this.modSigB=this.measures.signature(n)}}buildForcing(){const t=this.event,e=this.assets.meta,n=An(t.window.start),s=An(t.window.end);this.windowSec=(s.getTime()-n.getTime())/1e3;const r=t.tide[e.gauge]??t.tide.QUB,a=[],o=[],l=[],c=[],h=(e.tide_lag_min||0)*60;for(let S=0;S<r.t.length;S++){const x=(An(r.t[S]).getTime()-n.getTime())/1e3+h;if(x<-7200||x>this.windowSec+7200)continue;const M=r.astro[S],R=r.surge[S];M!==null&&(a.push(x),l.push(M),c.push(r.obs[S]),o.push(M+(R??0)*e.tide_scale))}const u=[],f=[];for(let S=0;S<t.rain.t.length;S++)u.push((An(t.rain.t[S]).getTime()-n.getTime())/1e3),f.push(t.rain.mm[S]);let d=.3;for(let S=0;S<a.length;S++)d=Math.max(d,o[S]-l[S]);this.forcing={tideT:a,tideL:o,astro:l,obs:c,rainT:u,rainMm:f,hours:this.windowSec/3600,start:n,surgePeak:d};const g=e.dem_stats?.zmin??0,v=Math.max(...o)+this.params.waveSetup+this.params.slr,p=Math.max(2.5,v-g+1),m=.45*e.res/Math.sqrt(9.81*p);this.dtBase=m,this.maxDepthSeen=0,this.solver?.setDt(m),this.baseline?.setDt(m),R0(document.getElementById("scrubCanvas"),{x:a.map(S=>S/3600),y:o},{x:u.map(S=>S/3600),y:f},this.forcing.hours,S=>this.tick(S))}stormStatus(t){const e=this.event,n=this.forcing;if(!e||!n)return"";const s=n.start.getTime()+t*1e3;let r="";for(const[l,c,h]of e.signals??[])An(l).getTime()<=s&&(r=Tt(c,h));let a="";const o=e.track;if(o.length>=2){const l=o.map(c=>An(c[0]).getTime());if(s>=l[0]&&s<=l[l.length-1]){let c=0;for(;c<l.length-2&&l[c+1]<s;)c++;const h=(s-l[c])/(l[c+1]-l[c]),u=o[c][1]+(o[c+1][1]-o[c][1])*h,f=o[c][2]+(o[c+1][2]-o[c][2])*h,d=6371,g=(f-22.302)*Math.PI/180,v=(u-114.174)*Math.PI/180,p=Math.sin(g/2)**2+Math.cos(f*Math.PI/180)*Math.cos(22.302*Math.PI/180)*Math.sin(v/2)**2,m=2*d*Math.asin(Math.sqrt(p)),S=(Math.atan2(u-114.174,f-22.302)*180/Math.PI+360)%360,x=Tt("北,东北,东,东南,南,西南,西,西北","N,NE,E,SE,S,SW,W,NW").split(",");a=`${Tt("风暴中心","storm centre")} ${m.toFixed(0)} km ${x[Math.round(S/45)%8]} · `}}return`${r?r+" · ":""}${a}`}tick(t){return new Date(this.forcing.start.getTime()+t*36e5).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"Asia/Hong_Kong"})}timeLabel(t){return new Date(this.forcing.start.getTime()+t*1e3).toLocaleString("en-GB",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",timeZone:"Asia/Hong_Kong"})+" HKT"}tideAt(t){const e=this.forcing,n=Wi(e.tideT,e.tideL,t,e.astro),s=Wi(e.tideT,e.astro,t,e.astro),r=n-s;return s+r*this.params.surgeScale+this.params.waveSetup+this.params.slr}rainAt(t){const e=this.forcing;let n=0;for(let r=0;r<e.rainT.length;r++)if(t>=e.rainT[r]&&t<e.rainT[r]+3600){n=e.rainMm[r];break}const s=this.assets.meta.rain_mult[this.eventId]??1;return n*s*this.params.rainScale/36e5}rainMmAt(t){return this.rainAt(t)*36e5}hsAt(t){const e=this.forcing,s=(Wi(e.tideT,e.tideL,t,e.astro)-Wi(e.tideT,e.astro,t,e.astro))*this.params.surgeScale/e.surgePeak;return s<.2?0:this.params.waveHs*Math.min(1,s)}applyParams(){const t=this.params.drainMmPerHour/36e5;for(const e of[this.solver,this.baseline])e?.setParams({manning:this.params.manning,buildings:this.params.buildingsBlock,drain:t,bldBlock:1,manningBld:.6,hillCap:this.params.hillCapMmPerHour/36e5,recover:this.params.recoverGain,tideLock:this.params.tideLockM,subgrid:this.params.subgrid});this.world.setBuildingsBlock(this.params.buildingsBlock),this.world.setSubgrid(this.params.subgrid&&!!this.solver?.subgridAvailable),this.forcing&&this.buildForcing()}restart(){if(!this.solver||!this.forcing)return;const t=this.tideAt(0);this.solver.reset(t),this.baseline?.reset(t),this.simT=0,this.metrics=null,this.baseMetrics=null,this.lastMetrics=0,this.maxDepthSeen=0,this.solver.setDt(this.dtBase),this.baseline?.setDt(this.dtBase),this.ui.setMetrics(null,null),this.ui.setTime(this.timeLabel(0),0),this.world.resetFlow()}setPlaying(t){this.playing=t,this.ui.setPlaying(t)}seek(t){t=Math.max(0,Math.min(this.windowSec,t)),t<this.simT&&this.restart(),this.seekTarget=t}setTool(t){this.tool=t,this.draft=[],this.world.setDraft([],"wall"),this.ui.setTool(t),this.ui.setDraftInfo(0,0),document.body.style.cursor=t?"crosshair":"default"}bindPointer(t){let e=null;t.addEventListener("pointerdown",n=>{e={x:n.clientX,y:n.clientY,t:performance.now()}}),t.addEventListener("pointerup",n=>{if(!e)return;const s=Math.hypot(n.clientX-e.x,n.clientY-e.y),r=performance.now()-e.t;if(e=null,s>5||r>600)return;if(!this.tool){const l=this.world.pickMeasure(n.clientX,n.clientY);this.selectMeasure(l);return}const a=this.world.raycastGround(n.clientX,n.clientY);if(!a)return;let o={x:a.x,y:a.y};if(this.snapShore&&(this.tool==="wall"||this.tool==="sandbag")&&(o=this.snapToShore(o)),this.tool==="pump"){this.commitMeasure([o]);return}this.draft.push(o),this.world.setDraft(this.draft,this.tool),this.ui.setDraftInfo(this.draft.length,this.draftLength())}),t.addEventListener("dblclick",()=>{this.tool&&this.draft.length&&this.finishDraft()}),window.addEventListener("keydown",n=>{const s=n.target.tagName;if(!(s==="INPUT"||s==="TEXTAREA"||s==="SELECT")){if(n.key==="Escape"&&(this.tool?this.setTool(null):this.selectMeasure(null)),n.key==="Enter"&&this.tool&&this.finishDraft(),n.key==="Backspace"&&this.tool&&(n.preventDefault(),this.undoVertex()),n.key==="Delete"&&this.selectedMeasure!==null&&!this.tool){const r=this.selectedMeasure;this.measures?.remove(r),this.selectedMeasure=null,this.measuresChanged()}n.key===" "&&(n.preventDefault(),this.setPlaying(!this.playing))}})}draftLength(){let t=0;for(let e=1;e<this.draft.length;e++)t+=Math.hypot(this.draft[e].x-this.draft[e-1].x,this.draft[e].y-this.draft[e-1].y);return t}undoVertex(){!this.tool||!this.draft.length||(this.draft.pop(),this.world.setDraft(this.draft,this.tool),this.ui.setDraftInfo(this.draft.length,this.draftLength()))}snapToShore(t){const e=this.assets;if(!e)return t;const n=e.meta.cols,s=e.meta.rows,r=e.meta.res,a=Math.floor(t.x/r),o=Math.floor(t.y/r);let l=t,c=1/0;for(let h=o-3;h<=o+3;h++)for(let u=a-3;u<=a+3;u++){if(u<0||h<0||u>=n||h>=s)continue;const f=h*n+u;if(e.mask[f]||!(u>0&&e.mask[f-1]||u<n-1&&e.mask[f+1]||h>0&&e.mask[f-n]||h<s-1&&e.mask[f+n]))continue;const g=(u+.5)*r,v=(h+.5)*r,p=Math.hypot(g-t.x,v-t.y);p<c&&(c=p,l={x:g,y:v})}return l}finishDraft(){if(this.tool){if(this.draft.length===0){this.setTool(null);return}(this.tool==="wall"||this.tool==="sandbag")&&this.draft.length<2||this.commitMeasure(this.draft)}}commitMeasure(t){if(!this.measures||!this.tool)return;const e=this.ui.getMeasureParams(this.tool),n=this.ui.newRole,s=this.measures.add({kind:this.tool,pts:t,height:e.height,rate:e.rate,capacity:e.capacity,factor:e.factor,radius:e.radius,role:n,key:n==="whatif"?void 0:`${this.tool}_${Date.now().toString(36)}`});this.draft=[],this.world.setDraft([],"wall"),this.tool==="pump"||this.setTool(null),this.selectedMeasure=n==="whatif"&&this.tool==="pump"?null:s.id,this.measuresChanged()}selectMeasure(t){this.selectedMeasure=t,this.refreshMeasureViews()}measuresChanged(){if(!this.measures||!this.solver)return;this.applyMeasures();try{localStorage.setItem(this.measuresKey(),JSON.stringify(this.measures.toSaved(this.sceneId,this.assets.meta.origin)))}catch{}this.ui.setMeasuresDirty(!0,!1);const t=this.playing||this.simT>0;this.restart(),t&&this.setPlaying(!0)}async saveMeasures(){if(!this.measures||!this.assets)return;const t=this.measures.toSaved(this.sceneId,this.assets.meta.origin),e=JSON.stringify(t,null,1);this.download(`${this.sceneId}.measures.json`,e),this.flash(Tt("已下载 measures.json，放到 web/public/scenes/<场景>/ 即可生效","Downloaded measures.json; put it in web/public/scenes/<scene>/"))}exportMeasures(){!this.measures||!this.assets||this.download(`${this.sceneId}.measures.json`,JSON.stringify(this.measures.toSaved(this.sceneId,this.assets.meta.origin),null,1))}async importMeasures(t){if(!(!this.measures||!this.assets))try{const e=JSON.parse(await t.text());if(!Array.isArray(e.measures))throw new Error("no measures[]");this.measures.loadSaved(e,this.assets.meta.origin),this.measuresChanged(),this.flash(Tt(`已导入 ${e.measures.length} 项`,`Imported ${e.measures.length} measures`))}catch(e){this.flash(Tt(`导入失败：${e}`,`Import failed: ${e}`))}}revertMeasures(){try{localStorage.removeItem(this.measuresKey())}catch{}this.selectedMeasure=null,this.loadMeasures(),this.applyMeasures(),this.restart(),this.setPlaying(!0)}download(t,e){const n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:"application/json"})),n.download=t,n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),2e3)}flash(t){this.ui.setStatus(t),clearTimeout(this.flashTimer),this.flashTimer=window.setTimeout(()=>this.ui.setStatus(null),3500)}toggleCompare(){this.compare=!this.compare,this.ui.setCompare(this.compare),this.refreshCharts(),this.compare?(this.makeBaseline(),this.baseline.setDt(this.solver.dt),this.applyParams()):(this.baseline?.dispose(),this.baseline=null,this.showBaseline=!1),this.syncSplit(),this.bindView(),this.restart(),this.setPlaying(!0)}syncSplit(){const t=document.getElementById("swipe");this.compare&&this.baseline&&this.solver?(this.world.setBaselineTextures(this.baseline.stateTex),this.world.split={frac:this.splitFrac,left:{state:this.baseline.stateTex,aux:this.baseline.auxTex},right:{state:this.solver.stateTex,aux:this.solver.auxTex}},t.style.display="block",t.style.left=`${this.splitFrac*100}%`,this.ui.setStatus(j("swipeHint")),setTimeout(()=>this.ui.setStatus(null),5e3)):(this.world.setBaselineTextures(null),this.world.split=null,t.style.display="none")}bindSwipe(){const t=document.querySelector("#swipe .handle"),e=document.getElementById("swipe");let n=!1;t.addEventListener("pointerdown",r=>{n=!0,t.setPointerCapture(r.pointerId),r.preventDefault()}),t.addEventListener("pointermove",r=>{n&&(this.splitFrac=Math.min(.95,Math.max(.05,r.clientX/window.innerWidth)),e.style.left=`${this.splitFrac*100}%`,this.world.split&&(this.world.split.frac=this.splitFrac))});const s=()=>{n=!1};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s)}cycleFlow(){this.flowMode=this.flowMode==="particles"?"arrows":this.flowMode==="arrows"?"none":"particles",this.world.setFlowMode(this.flowMode),this.ui.setFlowMode(this.flowMode)}peakSec(){const t=this.forcing;if(this.event.kind==="rainstorm"){let r=0,a=-1;for(let o=0;o<t.rainT.length;o++)t.rainMm[o]>a&&(a=t.rainMm[o],r=t.rainT[o]);return Math.min(this.windowSec,r+5400)}let n=0,s=-1/0;for(let r=0;r<t.tideT.length;r++)t.tideL[r]>s&&(s=t.tideL[r],n=t.tideT[r]);return Math.min(this.windowSec,n+1200)}jumpToPeak(){this.forcing&&(this.flyAfterSeek=!0,this.seek(this.peakSec()),this.setPlaying(!0))}hotspotLabels(t){const e=this.assets.meta.pois;return t.map(n=>{let s="",r=1/0;for(const a of e){const o=Math.hypot(a.x-n.x,a.y-n.y);o<r&&(r=o,s=a.name)}return{...n,name:s?`${s.split(" ")[0]}${r>250?` ${(r/1e3).toFixed(1)} km`:""}`:""}})}bindView(){const t=this.showBaseline&&this.baseline?this.baseline:this.solver;t&&this.world.setStateTextures(t.stateTex,t.auxTex)}tour(){const t=this.world.director;if(t.touring){t.stopTour();return}const n=this.assets.meta.pois.map(s=>this.world.viewAt(s.x,s.y,650));n.length||n.push(this.world.defaultView()),t.startTour(n),this.ui.setActive("btnTour",!0),this.ui.setStatus(j("tourRunning"))}refreshCharts(){const t=this.forcing,e=this.event;if(!t||!e||!this.ui.tideChart)return;const n=this.assets.meta,s=n.gauge,r=t.tideT.map(u=>u/3600),a=t.tideT.map(u=>this.tideAt(u)),o=[],l=e.peaks_model[s],c=e.observed_peaks[s];if(c!==void 0&&l){const u=(An(l.t).getTime()-t.start.getTime())/36e5+(n.tide_lag_min||0)/60;o.push({x:u,y:c,label:`${j("peakObs")} ${(c+.146).toFixed(2)} mCD`,color:ze.peak})}this.ui.tideChart.setData({kind:"line",xMin:0,xMax:t.hours,unit:"mPD",yLabel:"mPD",cursor:this.simT/3600,xTick:u=>this.tick(u),markers:o,series:[{name:Tt(`实测 ${s}`,`Observed ${s}`),color:ze.obs,x:r,y:t.obs},{name:Tt("天文潮","Astronomical"),color:ze.astro,x:r,y:t.astro,dashed:!0},{name:Tt("模型边界","Model boundary"),color:ze.model,x:r,y:a}]});const h=(n.rain_mult[this.eventId]??1)*this.params.rainScale;this.ui.rainChart.setData({kind:"bar",xMin:0,xMax:t.hours,unit:"mm/h",yLabel:"mm/h",cursor:this.simT/3600,xTick:u=>this.tick(u),series:[{name:Tt(`模型雨强（${e.rain.station} ×${h.toFixed(2)}）`,`Model rain (${e.rain.station} ×${h.toFixed(2)})`),color:ze.rain,x:t.rainT.map(u=>u/3600+.5),y:t.rainMm.map(u=>u*h)}]}),this.ui.setValidation(n.validation[this.eventId]??[],this.metrics)}refreshLabels(){const t=this.assets.meta,n=(t.validation[this.eventId]??[]).map(s=>({id:`v_${s.id}`,x:s.x,y:s.y,text:Tt(s.zh,s.en),cls:`val ${s.cls}`,sub:s.cls==="none"?Tt("实际无水浸","no flooding"):`${Tt("实际≈","obs≈")}${s.depth.toFixed(1)} m`}));for(const s of t.gauges)n.push({id:`g_${s.code}`,x:s.x,y:s.y,text:s.name,cls:"gauge",sub:""});this.world.setLabels(n)}computeMetrics(t,e="A"){const n=this.assets,s=n.meta,r=s.cols,a=s.rows,o=s.res,l=t.readState(),c=t.readAux(),h=t.subgridOn,u=n.mask,f=n.bldh;let d=0,g=0,v=0,p=0,m=0;const S=e==="A"?this.spawnA:this.spawnB;let x=0;const M=Math.max(1,Math.round(150/o)),R=Math.ceil(r/M),A=new Float32Array(R*Math.ceil(a/M)),T=new Int32Array(A.length).fill(-1),D=new Float32Array(A.length),q=new Int32Array(A.length),_=Math.ceil(300/o);for(let F=0;F<r*a;F++){if(u[F])continue;const V=h?c[F*4+3]:l[F*4];V>m&&(m=V);const at=F%r,it=F/r|0;if(at<_||it<_||at>=r-_||it>=a-_||f[F]>0||n.dem[F]<2||n.basin[F]||n.rim[F]||n.steep[F])continue;const tt=V;tt>d&&(d=tt),tt>.15&&g++,tt>.5&&v++,p+=tt,tt>.06&&x*2+1<S.length&&(S[x*2]=(at+.5)*o,S[x*2+1]=(it+.5)*o,x++);const gt=l[F*4+3],Mt=(it/M|0)*R+(at/M|0);gt>A[Mt]&&(A[Mt]=gt,T[Mt]=F),gt>=.3&&(D[Mt]+=Math.min(gt,1.5),q[Mt]++)}this.world.setFlowSpawn(e,S,x);const w=[];for(let F=0;F<A.length;F++)q[F]>=3&&w.push(F);w.sort((F,V)=>D[V]-D[F]);const O=[];for(const F of w){const V=T[F],at=(V%r+.5)*o,it=((V/r|0)+.5)*o;if(O.every(tt=>Math.hypot(tt.x-at,tt.y-it)>=350)&&O.push({x:at,y:it,depth:A[F],area:q[F]*o*o}),O.length>=6)break}let k=0;for(const F of n.buildings){const V=Math.min(r-1,Math.max(0,Math.floor(F.c[0]/o))),at=Math.min(a-1,Math.max(0,Math.floor(F.c[1]/o)));let it=0;for(let tt=-1;tt<=1;tt++)for(let gt=-1;gt<=1;gt++){const Mt=V+gt,X=at+tt;if(Mt<0||X<0||Mt>=r||X>=a)continue;const Q=X*r+Mt;u[Q]||n.steep[Q]||(it=Math.max(it,l[Q*4+3]))}it>.15&&k++}const $={};for(const F of s.facilities??[])if(F.ug){let V=0;for(const at of F.ug.cells)V+=c[at*4];$[F.id]=V*o*o/F.ug.area}else $[F.id]=this.maxDepthNear(l,F.x,F.y,60);const Z={};for(const F of s.validation[this.eventId]??[])Z[F.id]=F.ug?$[F.ug]??0:F.berm!==void 0?Math.max(0,this.peakTideSoFar(t.time)-F.berm):this.maxDepthNear(l,F.x,F.y,60);const G={};for(const F of s.gauges){const V=Math.floor(F.x/o),at=Math.floor(F.y/o);let it=-1,tt=1e9;for(let gt=-3;gt<=3;gt++)for(let Mt=-3;Mt<=3;Mt++){const X=V+Mt,Q=at+gt;if(X<0||Q<0||X>=r||Q>=a)continue;const dt=Q*r+X;if(!u[dt])continue;const ct=Mt*Mt+gt*gt;ct<tt&&(tt=ct,it=dt)}it>=0&&(G[F.code]=l[it*4]-6)}return{t:t.time,maxDepth:d,maxDepthAll:m,floodedAreaKm2:g*o*o/1e6,floodedAreaSevereKm2:v*o*o/1e6,buildingsAffected:k,volumeMm3:p*o*o/1e6,valDepths:Z,gaugeLevels:G,hotspots:O,facDepths:$}}peakTideSoFar(t){const e=this.forcing;let n=-99;for(let s=0;s<e.tideT.length;s++){const r=e.tideT[s];r<0||r>t||(n=Math.max(n,this.tideAt(r)))}return Math.max(n,this.tideAt(Math.max(0,t)))}maxDepthNear(t,e,n,s){const r=this.assets,a=r.meta.cols,o=r.meta.rows,l=r.meta.res,c=Math.floor(e/l),h=Math.floor(n/l),u=Math.ceil(s/l);let f=0;for(let d=h-u;d<=h+u;d++)for(let g=c-u;g<=c+u;g++){if(g<0||d<0||g>=a||d>=o)continue;const v=d*a+g;r.mask[v]||r.bldh[v]>0||r.dem[v]<2.4||r.basin[v]||r.rim[v]||r.steep[v]||Math.hypot((g+.5)*l-e,(d+.5)*l-n)>s||t[v*4+3]>f&&(f=t[v*4+3])}return f}frame(){requestAnimationFrame(()=>this.frame());const t=performance.now(),e=Math.min(.1,(t-this.lastFrame)/1e3);this.lastFrame=t;const n=this.solver;if(n&&this.forcing){let s=0,r=220;if(this.seekTarget!==null)if(s=Math.min(this.seekTarget-this.simT,r*n.dt*2),r=440,s<=0){if(this.seekTarget=null,this.ui.setStatus(null),this.flyAfterSeek){this.flyAfterSeek=!1,this.metrics=this.computeMetrics(n,"A");const u=this.metrics.hotspots??[];u.length&&this.world.director.flyTo(this.world.viewAt(u[0].x,u[0].y,520),2.5)}}else this.ui.setStatus(`${j("ffwd")} ${this.timeLabel(this.simT)}`);else this.playing&&(s=this.speed*e);if(this.tickMeasures(),s>0&&this.simT<this.windowSec){let u=Math.min(r,Math.max(1,Math.round(s/n.dt)));const f=this.simT+u*n.dt/2,d=this.tideAt(f),g=this.rainAt(f),v=this.hsAt(f);n.step(u,d,g,v),this.baseline&&this.baseline.step(u,d,g,v),this.simT+=u*n.dt,this.simT>=this.windowSec&&(this.simT=this.windowSec,this.setPlaying(!1),this.seekTarget=null,this.ui.setStatus(null)),this.ui.setTime(this.timeLabel(this.simT),this.simT/this.windowSec),this.ui.setStepInfo(`${this.stormStatus(this.simT)}${Tt("边界潮位","sea level")} ${d.toFixed(2)} mPD · ${Tt("雨强","rain")} ${this.rainMmAt(f).toFixed(0)} mm/h · Hs ${this.hsAt(f).toFixed(1)} m · dt ${n.dt.toFixed(2)} s · ${u}/frame`)}if(t-this.lastMetrics>700&&this.simT>0){this.lastMetrics=t,this.metrics=this.computeMetrics(n,"A"),this.baseline&&(this.baseMetrics=this.computeMetrics(this.baseline,"B")),this.maxDepthSeen=Math.max(this.maxDepthSeen,this.metrics.maxDepthAll,this.baseMetrics?.maxDepthAll??0);const u=.45*this.assets.meta.res/Math.sqrt(9.81*Math.max(1,this.maxDepthSeen*1.4+.5));u<n.dt&&(n.setDt(u),this.baseline?.setDt(u)),this.ui.setMetrics(this.metrics,this.compare?this.baseMetrics:null),this.ui.setHotspots(this.hotspotLabels(this.metrics.hotspots??[])),this.ui.setValidation(this.assets.meta.validation[this.eventId]??[],this.metrics),this.ui.tideChart?.setCursor(this.simT/3600),this.ui.rainChart?.setCursor(this.simT/3600);const f=this.assets.meta,d=this.metrics,g=(f.validation[this.eventId]??[]).map(v=>({id:`v_${v.id}`,x:v.x,y:v.y,text:Tt(v.zh,v.en),cls:`val ${v.cls}`,sub:`${Tt("实际≈","obs≈")}${v.cls==="none"?"0":v.depth.toFixed(1)} m / ${Tt("模拟","sim")} ${(d.valDepths[v.id]??0).toFixed(2)} m`}));for(const v of f.gauges)g.push({id:`g_${v.code}`,x:v.x,y:v.y,text:v.name,cls:"gauge",sub:`${(d.gaugeLevels[v.code]??0).toFixed(2)} mPD`});if(this.showFacilities){const v=(f.facilities??[]).map(p=>({f:p,d:Math.max(d.facDepths?.[p.id]??0,this.baseMetrics?.facDepths?.[p.id]??0)})).filter(p=>p.d>=.3).sort((p,m)=>m.d-p.d).slice(0,10);for(const{f:p,d:m}of v)g.push({id:`f_${p.id}`,x:p.x,y:p.y,text:`${so[p.type]??""} ${p.name}`,cls:`facility ${m>=.5?"severe":"moderate"}`,sub:`${(d.facDepths?.[p.id]??0).toFixed(2)} m`})}this.world.setLabels(g),this.ui.setFacilities(this.metrics,this.compare?this.baseMetrics:null)}const a=this.rainMmAt(this.simT),o=this.forcing,l=this.tideAt(this.simT)-Wi(o.tideT,o.astro,this.simT,o.astro),c=Math.min(1,Math.max(l/2.2,a/70,.1)),h=(o.start.getTime()/36e5+8+this.simT/3600)%24;this.world.setWeather(a,c,h),a>35&&t-this.lastLightning>2500&&Math.random()<.02&&(this.world.lightning(),this.lastLightning=t)}this.world.render(e)}}function Wi(i,t,e,n){if(!i.length)return 0;if(e<=i[0])return t[0];if(e>=i[i.length-1])return t[t.length-1];let s=0,r=i.length-1;for(;r-s>1;){const o=s+r>>1;i[o]<=e?s=o:r=o}const a=(e-i[s])/(i[r]-i[s]);return t[s]+(t[r]-t[s])*a}window.addEventListener("DOMContentLoaded",()=>{window.app=new I0});
