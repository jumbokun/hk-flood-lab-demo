var _g=Object.defineProperty;var xg=(n,e,t)=>e in n?_g(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var X=(n,e,t)=>xg(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Mg(n,e,t,i,s=1){const r=t*i,a=new Float32Array(r),o=new Uint8Array(r),l=[],c=[],h=(f,g)=>{l.push(f),c.push(g);let _=l.length-1;for(;_>0;){const m=_-1>>1;if(l[m]<=l[_])break;[l[m],l[_]]=[l[_],l[m]],[c[m],c[_]]=[c[_],c[m]],_=m}},d=()=>{const f=l[0],g=c[0],_=l.pop(),m=c.pop();if(l.length){l[0]=_,c[0]=m;let p=0;for(;;){const x=2*p+1,M=x+1;let w=p;if(x<l.length&&l[x]<l[w]&&(w=x),M<l.length&&l[M]<l[w]&&(w=M),w===p)break;[l[w],l[p]]=[l[p],l[w]],[c[w],c[p]]=[c[p],c[w]],p=w}}return[f,g]};for(let f=0;f<r;f++){const g=f%t,_=f/t|0;(e[f]||g===0||_===0||g===t-1||_===i-1)&&(o[f]=1,a[f]=e[f]?-1e9:n[f],h(a[f],f))}for(;l.length;){const[f,g]=d(),_=g%t,m=g/t|0,p=[g-1,g+1,g-t,g+t];for(let x=0;x<4;x++){if(x===0&&_===0||x===1&&_===t-1||x===2&&m===0||x===3&&m===i-1)continue;const M=p[x];o[M]||(o[M]=1,a[M]=Math.max(f,n[M]),h(a[M],M))}}const u=new Uint8Array(r);for(let f=0;f<r;f++)!e[f]&&a[f]-n[f]>s&&(u[f]=1);return u}function yg(n,e,t,i,s){const r=i*s,a=new Uint8Array(r).fill(99);for(let l=0;l<s;l++)for(let c=0;c<i;c++){const h=l*i+c;if(e[h]){a[h]=0;continue}let d=99;for(let u=-3;u<=3;u++)for(let f=-3;f<=3;f++){const g=c+f,_=l+u;if(!(g<0||_<0||g>=i||_>=s)&&e[_*i+g]===1){const m=Math.max(Math.abs(f),Math.abs(u));m<d&&(d=m)}}a[h]=d}const o=new Uint8Array(r);for(let l=0;l<s;l++)for(let c=0;c<i;c++){const h=l*i+c;if(e[h]||a[h]>2)continue;let d=!1;for(let u=-3;u<=3&&!d;u++)for(let f=-3;f<=3;f++){const g=c+f,_=l+u;if(g<0||_<0||g>=i||_>=s)continue;const m=_*i+g;if(!e[m]&&t[m]>0&&a[m]>a[h]&&n[m]>n[h]+.3){d=!0;break}}d&&(o[h]=1)}return o}function Sg(n,e,t,i,s,r=3,a=.5){const o=new Float32Array(i*s);for(let l=0;l<s;l++)for(let c=0;c<i;c++){const h=l*i+c,d=t[h];if(d<=0||e[h])continue;let u=h,f=n[h];for(let g=-r;g<=r;g++)for(let _=-r;_<=r;_++){const m=c+_,p=l+g;if(m<0||p<0||m>=i||p>=s)continue;const x=p*i+m;if(e[x])continue;const M=n[x];M>f&&M<=n[h]+8&&(f=M,u=x)}f-n[h]>=a?o[u]=Math.max(o[u],d):o[h]=Math.max(o[h],d)}return o}const oo="./".replace(/\/$/,"");async function Ys(n){const e=await fetch(n,{cache:"no-cache"});if(!e.ok)throw new Error(`${n}: ${e.status}`);return e.json()}async function cs(n,e){const t=await fetch(n);if(!t.ok)throw new Error(`${n}: ${t.status}`);const i=await t.arrayBuffer();if(i.byteLength!==e*4)throw new Error(`${n}: unexpected size ${i.byteLength}`);return new Float32Array(i)}async function wg(n,e){const t=await fetch(n);if(!t.ok)throw new Error(`${n}: ${t.status}`);const i=await t.arrayBuffer();if(i.byteLength!==e)throw new Error(`${n}: unexpected size ${i.byteLength}`);return new Uint8Array(i)}function Sd(n){return new Promise(e=>{const t=new Image;t.crossOrigin="anonymous",t.onload=()=>e(t),t.onerror=()=>e(null),t.src=n})}function hs(n,e,t){const i=new n.constructor(n.length);for(let s=0;s<t;s++)i.set(n.subarray(s*e,(s+1)*e),(t-1-s)*e);return i}async function bg(){return Ys(`${oo}/scenes/index.json`)}async function Tg(){return Ys(`${oo}/events/index.json`)}async function Eg(n){return Ys(`${oo}/events/${n}.json`)}async function Ag(n){try{const e=await Ys(`${oo}/scenes/${n}/scenarios.json`);return Array.isArray(e.scenarios)?e.scenarios:[]}catch{return[]}}async function Cg(n,e){const t=`${oo}/scenes/${n}`;e?.(.05,"meta");const i=await Ys(`${t}/meta.json`),s=i.cols,r=i.rows;e?.(.15,"dem");const[a,o,l,c,h,d,u,f,g]=await Promise.all([cs(`${t}/dem.bin`,s*r),wg(`${t}/mask.bin`,s*r),cs(`${t}/bldh.bin`,s*r).catch(()=>new Float32Array(s*r)),cs(`${t}/expo.bin`,s*r).catch(()=>new Float32Array(s*r)),Ys(`${t}/buildings.json`).catch(()=>({buildings:[]})),cs(`${t}/chan.bin`,s*r*3).catch(()=>cs(`${t}/chan.bin`,s*r).then(S=>{const b=new Float32Array(s*r*3);for(let H=0;H<s*r;H++)b[H*3]=S[H],b[H*3+2]=.05;return b})).catch(()=>new Float32Array(s*r*3)),cs(`${t}/ug.bin`,s*r).catch(()=>new Float32Array(s*r)),cs(`${t}/sg_cell.bin`,s*r*8).catch(()=>null),cs(`${t}/sg_face.bin`,s*r*8).catch(()=>null)]),_=await Ys(`${t}/measures.json`).catch(()=>null);e?.(.55,"textures");const[m,p]=await Promise.all([Sd(`${t}/imagery.jpg`),Sd(`${t}/basemap.jpg`)]);e?.(.95,"done");const x=hs(a,s,r),M=hs(o,s,r),w=Mg(x,M,s,r,2),I=hs(l,s,r),C=Sg(x,M,hs(c,s,r),s,r),P=yg(x,M,C,s,r),U=f?hs(f,s*8,r):null,ie=new Uint8Array(s*r);if(U)for(let S=0;S<s*r;S++)U[S*8+7]-U[S*8]>3&&(ie[S]=1);return{meta:i,dem:x,mask:M,bldh:I,expo:C,basin:w,rim:P,chan:hs(d,s*3,r),ug:hs(u,s,r),sgCell:U,sgFace:g?hs(g,s*8,r):null,steep:ie,buildings:h.buildings,imagery:m,basemap:p,savedMeasures:_}}const zr={slr:0,rainScale:1,tideScale:1},Rg=n=>n?{slr:n.slr??0,rainScale:n.rain_scale??1,tideScale:n.tide_scale??1}:zr,wd={zh:"现状",en:"Today",measures:"records"},Pg=[{id:"measures",generic:!0,zh:"无措施 vs 含措施",en:"No measures vs with measures",desc_zh:"左侧只有实际工程和有记录的临时措施；右侧再加上你在「措施」里画的情景措施。",desc_en:"Left: built records and documented temporary measures only; right: plus the what-if measures you drew under Measures.",A:{zh:"无措施",en:"No measures",measures:"records"},B:{zh:"含措施",en:"With measures",measures:"all"}},{id:"slr-0.5",generic:!0,kinds:["typhoon","fictional"],zh:"现状 vs 海平面上升 +0.5 m",en:"Today vs sea-level rise +0.5 m",desc_zh:"情景假设，不是预报：边界潮位整体加 0.5 m。天文台（IPCC AR6）鲗鱼涌预估，SSP2-4.5 下相对 1995–2014 年：2050 年 +0.20 m（0.13–0.28），2060 年 +0.26 m（0.17–0.37）；+0.5 m 是本世纪后期的量级，或高排放情景下更早出现。",desc_en:"A what-if, not a forecast: +0.5 m on the boundary level. HKO (IPCC AR6) for Quarry Bay, SSP2-4.5, relative to 1995–2014: +0.20 m by 2050 (0.13–0.28), +0.26 m by 2060 (0.17–0.37); +0.5 m is a late-century magnitude, or earlier under high emissions.",A:wd,B:{zh:"海平面 +0.5 m",en:"Sea level +0.5 m",measures:"records",slr:.5}},{id:"rain-1.2",generic:!0,kinds:["rainstorm"],zh:"现状 vs 雨强 ×1.2",en:"Today vs rainfall ×1.2",desc_zh:"情景假设，不是预报：逐时雨强 ×1.2。按 Clausius–Clapeyron 关系，极端小时雨强每升温 1 °C 约增 7%，升温 3 °C 约 +20%。",desc_en:"A what-if, not a forecast: hourly rain ×1.2. Clausius–Clapeyron scaling gives about +7 % per °C for extreme hourly rain, so +3 °C ≈ +20 %.",A:wd,B:{zh:"雨强 ×1.2",en:"Rain ×1.2",measures:"records",rain_scale:1.2}}];function Dg(n,e){const t=(n??[]).filter(s=>!s.events?.length||s.events.includes(e.id)).map(s=>({...s,generic:!1})),i=Pg.filter(s=>!s.kinds||s.kinds.includes(e.kind));return[...t,...i]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const du="169",Yr={ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lg=0,bd=1,Ig=2,Kp=1,Ug=2,Zi=3,As=0,$n=1,si=2,Ts=0,js=1,rh=2,Td=3,Ed=4,Fg=5,Ws=100,Ng=101,kg=102,Og=103,zg=104,Bg=200,Hg=201,Vg=202,Gg=203,ah=204,oh=205,Wg=206,$g=207,Xg=208,qg=209,Yg=210,jg=211,Kg=212,Zg=213,Jg=214,lh=0,ch=1,hh=2,Qr=3,uh=4,dh=5,fh=6,ph=7,Zp=0,Qg=1,ev=2,Es=0,tv=1,nv=2,iv=3,sv=4,rv=5,av=6,ov=7,Jp=300,ea=301,ta=302,mh=303,gh=304,Il=306,vh=1e3,Gn=1001,_h=1002,kt=1003,lv=1004,xo=1005,mi=1006,fc=1007,Ss=1008,ns=1009,Qp=1010,em=1011,Qa=1012,fu=1013,Qs=1014,Un=1015,lo=1016,pu=1017,mu=1018,na=1020,tm=35902,nm=1021,im=1022,An=1023,sm=1024,rm=1025,jr=1026,ia=1027,gu=1028,vu=1029,am=1030,_u=1031,xu=1033,el=33776,tl=33777,nl=33778,il=33779,xh=35840,Mh=35841,yh=35842,Sh=35843,wh=36196,bh=37492,Th=37496,Eh=37808,Ah=37809,Ch=37810,Rh=37811,Ph=37812,Dh=37813,Lh=37814,Ih=37815,Uh=37816,Fh=37817,Nh=37818,kh=37819,Oh=37820,zh=37821,sl=36492,Bh=36494,Hh=36495,om=36283,Vh=36284,Gh=36285,Wh=36286,cv=3200,hv=3201,uv=0,dv=1,ys="",di="srgb",Rs="srgb-linear",Mu="display-p3",Ul="display-p3-linear",ul="linear",Vt="srgb",dl="rec709",fl="p3",Sr=7680,Ad=519,fv=512,pv=513,mv=514,lm=515,gv=516,vv=517,_v=518,xv=519,Cd=35044,Kn="300 es",Ji=2e3,pl=2001;class ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rd=1234567;const Ha=Math.PI/180,eo=180/Math.PI;function or(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]).toLowerCase()}function Mn(n,e,t){return Math.max(e,Math.min(t,n))}function yu(n,e){return(n%e+e)%e}function Mv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function yv(n,e,t){return n!==e?(t-n)/(e-n):0}function Va(n,e,t){return(1-t)*n+t*e}function Sv(n,e,t,i){return Va(n,e,1-Math.exp(-t*i))}function wv(n,e=1){return e-Math.abs(yu(n,e*2)-e)}function bv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Tv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ev(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Av(n,e){return n+Math.random()*(e-n)}function Cv(n){return n*(.5-Math.random())}function Rv(n){n!==void 0&&(Rd=n);let e=Rd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pv(n){return n*Ha}function Dv(n){return n*eo}function Lv(n){return(n&n-1)===0&&n!==0}function Iv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Uv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fv(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),d=r((e-i)/2),u=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Br(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ui={DEG2RAD:Ha,RAD2DEG:eo,generateUUID:or,clamp:Mn,euclideanModulo:yu,mapLinear:Mv,inverseLerp:yv,lerp:Va,damp:Sv,pingpong:wv,smoothstep:bv,smootherstep:Tv,randInt:Ev,randFloat:Av,randFloatSpread:Cv,seededRandom:Rv,degToRad:Pv,radToDeg:Dv,isPowerOfTwo:Lv,ceilPowerOfTwo:Iv,floorPowerOfTwo:Uv,setQuaternionFromProperEuler:Fv,normalize:Hn,denormalize:Br};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,i,s,r,a,o,l,c){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],x=s[1],M=s[4],w=s[7],I=s[2],C=s[5],P=s[8];return r[0]=a*_+o*x+l*I,r[3]=a*m+o*M+l*C,r[6]=a*p+o*w+l*P,r[1]=c*_+h*x+d*I,r[4]=c*m+h*M+d*C,r[7]=c*p+h*w+d*P,r[2]=u*_+f*x+g*I,r[5]=u*m+f*M+g*C,r[8]=u*p+f*w+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*c-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(pc.makeScale(e,t)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,t){return this.premultiply(pc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new ht;function cm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ml(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Nv(){const n=ml("canvas");return n.style.display="block",n}const Pd={};function rl(n){n in Pd||(Pd[n]=!0,console.warn(n))}function kv(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Ov(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Dd=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ld=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ba={[Rs]:{transfer:ul,primaries:dl,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[di]:{transfer:Vt,primaries:dl,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ul]:{transfer:ul,primaries:fl,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Ld),fromReference:n=>n.applyMatrix3(Dd)},[Mu]:{transfer:Vt,primaries:fl,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ld),fromReference:n=>n.applyMatrix3(Dd).convertLinearToSRGB()}},Bv=new Set([Rs,Ul]),Et={enabled:!0,_workingColorSpace:Rs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Bv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ba[e].toReference,s=ba[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ba[n].primaries},getTransfer:function(n){return n===ys?ul:ba[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(ba[e].luminanceCoefficients)}};function Kr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let wr;class Hv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wr===void 0&&(wr=ml("canvas")),wr.width=e.width,wr.height=e.height;const i=wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=wr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ml("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kr(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Kr(t[i]/255)*255):t[i]=Kr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vv=0;class hm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gc(s[a].image)):r.push(gc(s[a]))}else r=gc(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function gc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gv=0;class Fn extends ar{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,i=Gn,s=Gn,r=mi,a=Ss,o=An,l=ns,c=Fn.DEFAULT_ANISOTROPY,h=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=or(),this.name="",this.source=new hm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vh:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case _h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vh:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case _h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Jp;Fn.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,t=0,i=0,s=1){Qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,w=(f+1)/2,I=(p+1)/2,C=(h+u)/4,P=(d+_)/4,U=(g+m)/4;return M>w&&M>I?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=C/i,r=P/i):w>I?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=C/s,r=U/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=P/r,s=U/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wv extends ar{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Fn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Wv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class um extends Fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $v extends Fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class er{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==f||h!==g){let m=1-o;const p=l*u+c*f+h*g+d*_,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const I=Math.sqrt(M),C=Math.atan2(I,p*x);m=Math.sin(m*C)/I,o=Math.sin(o*C)/I}const w=o*x;if(l=l*m+u*w,c=c*m+f*w,h=h*m+g*w,d=d*m+_*w,m===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Id.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Id.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vc=new O,Id=new er;class ki{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mi):Mi.fromBufferAttribute(r,a),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mo.copy(i.boundingBox)),Mo.applyMatrix4(e.matrixWorld),this.union(Mo)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),yo.subVectors(this.max,Ta),br.subVectors(e.a,Ta),Tr.subVectors(e.b,Ta),Er.subVectors(e.c,Ta),us.subVectors(Tr,br),ds.subVectors(Er,Tr),Fs.subVectors(br,Er);let t=[0,-us.z,us.y,0,-ds.z,ds.y,0,-Fs.z,Fs.y,us.z,0,-us.x,ds.z,0,-ds.x,Fs.z,0,-Fs.x,-us.y,us.x,0,-ds.y,ds.x,0,-Fs.y,Fs.x,0];return!_c(t,br,Tr,Er,yo)||(t=[1,0,0,0,1,0,0,0,1],!_c(t,br,Tr,Er,yo))?!1:(So.crossVectors(us,ds),t=[So.x,So.y,So.z],_c(t,br,Tr,Er,yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wi=[new O,new O,new O,new O,new O,new O,new O,new O],Mi=new O,Mo=new ki,br=new O,Tr=new O,Er=new O,us=new O,ds=new O,Fs=new O,Ta=new O,yo=new O,So=new O,Ns=new O;function _c(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ns.fromArray(n,r);const o=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),l=e.dot(Ns),c=t.dot(Ns),h=i.dot(Ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Xv=new ki,Ea=new O,xc=new O;class Oi{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);const t=Ea.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ea,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(xc)),this.expandByPoint(Ea.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new O,Mc=new O,wo=new O,fs=new O,yc=new O,bo=new O,Sc=new O;class co{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Mc.copy(e).add(t).multiplyScalar(.5),wo.copy(t).sub(e).normalize(),fs.copy(this.origin).sub(Mc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(wo),o=fs.dot(this.direction),l=-fs.dot(wo),c=fs.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Mc).addScaledVector(wo,u),f}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const i=$i.dot(this.direction),s=$i.dot($i)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,i,s,r){yc.subVectors(t,e),bo.subVectors(i,e),Sc.crossVectors(yc,bo);let a=this.direction.dot(Sc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fs.subVectors(this.origin,e);const l=o*this.direction.dot(bo.crossVectors(fs,bo));if(l<0)return null;const c=o*this.direction.dot(yc.cross(fs));if(c<0||l+c>a)return null;const h=-o*fs.dot(Sc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,i,s,r,a,o,l,c,h,d,u,f,g,_,m){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,_,m)}set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ar.setFromMatrixColumn(e,0).length(),r=1/Ar.setFromMatrixColumn(e,1).length(),a=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qv,e,Yv)}lookAt(e,t,i){const s=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),ps.crossVectors(i,ti),ps.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),ps.crossVectors(i,ti)),ps.normalize(),To.crossVectors(ti,ps),s[0]=ps.x,s[4]=To.x,s[8]=ti.x,s[1]=ps.y,s[5]=To.y,s[9]=ti.y,s[2]=ps.z,s[6]=To.z,s[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],x=i[3],M=i[7],w=i[11],I=i[15],C=s[0],P=s[4],U=s[8],ie=s[12],S=s[1],b=s[5],H=s[9],z=s[13],Y=s[2],Z=s[6],j=s[10],F=s[14],te=s[3],pe=s[7],le=s[11],oe=s[15];return r[0]=a*C+o*S+l*Y+c*te,r[4]=a*P+o*b+l*Z+c*pe,r[8]=a*U+o*H+l*j+c*le,r[12]=a*ie+o*z+l*F+c*oe,r[1]=h*C+d*S+u*Y+f*te,r[5]=h*P+d*b+u*Z+f*pe,r[9]=h*U+d*H+u*j+f*le,r[13]=h*ie+d*z+u*F+f*oe,r[2]=g*C+_*S+m*Y+p*te,r[6]=g*P+_*b+m*Z+p*pe,r[10]=g*U+_*H+m*j+p*le,r[14]=g*ie+_*z+m*F+p*oe,r[3]=x*C+M*S+w*Y+I*te,r[7]=x*P+M*b+w*Z+I*pe,r[11]=x*U+M*H+w*j+I*le,r[15]=x*ie+M*z+w*F+I*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*o*u+i*c*u+s*o*f-i*l*f)+_*(+t*l*f-t*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+m*(+t*c*d-t*o*f-r*a*d+i*a*f+r*o*h-i*c*h)+p*(-s*o*h-t*l*d+t*o*u+s*a*d-i*a*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=d*m*c-_*u*c+_*l*f-o*m*f-d*l*p+o*u*p,M=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,w=h*_*c-g*d*c+g*o*f-a*_*f-h*o*p+a*d*p,I=g*d*l-h*_*l-g*o*u+a*_*u+h*o*m-a*d*m,C=t*x+i*M+s*w+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=x*P,e[1]=(_*u*r-d*m*r-_*s*f+i*m*f+d*s*p-i*u*p)*P,e[2]=(o*m*r-_*l*r+_*s*c-i*m*c-o*s*p+i*l*p)*P,e[3]=(d*l*r-o*u*r-d*s*c+i*u*c+o*s*f-i*l*f)*P,e[4]=M*P,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*P,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*P,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*f+t*l*f)*P,e[8]=w*P,e[9]=(g*d*r-h*_*r-g*i*f+t*_*f+h*i*p-t*d*p)*P,e[10]=(a*_*r-g*o*r+g*i*c-t*_*c-a*i*p+t*o*p)*P,e[11]=(h*o*r-a*d*r-h*i*c+t*d*c+a*i*f-t*o*f)*P,e[12]=I*P,e[13]=(h*_*s-g*d*s+g*i*u-t*_*u-h*i*m+t*d*m)*P,e[14]=(g*o*s-a*_*s-g*i*l+t*_*l+a*i*m-t*o*m)*P,e[15]=(a*d*s-h*o*s+h*i*l-t*d*l-a*i*u+t*o*u)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,_=a*h,m=a*d,p=o*d,x=l*c,M=l*h,w=l*d,I=i.x,C=i.y,P=i.z;return s[0]=(1-(_+p))*I,s[1]=(f+w)*I,s[2]=(g-M)*I,s[3]=0,s[4]=(f-w)*C,s[5]=(1-(u+p))*C,s[6]=(m+x)*C,s[7]=0,s[8]=(g+M)*P,s[9]=(m-x)*P,s[10]=(1-(u+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ar.set(s[0],s[1],s[2]).length();const a=Ar.set(s[4],s[5],s[6]).length(),o=Ar.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yi.copy(this);const c=1/r,h=1/a,d=1/o;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=d,yi.elements[9]*=d,yi.elements[10]*=d,t.setFromRotationMatrix(yi),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Ji){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s);let f,g;if(o===Ji)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===pl)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ji){const l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(a-r),u=(t+e)*c,f=(i+s)*h;let g,_;if(o===Ji)g=(a+r)*d,_=-2*d;else if(o===pl)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ar=new O,yi=new It,qv=new O(0,0,0),Yv=new O(1,1,1),ps=new O,To=new O,ti=new O,Ud=new It,Fd=new er;class is{constructor(e=0,t=0,i=0,s=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ud,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fd.setFromEuler(this),this.setFromQuaternion(Fd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class Su{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jv=0;const Nd=new O,Cr=new er,Xi=new It,Eo=new O,Aa=new O,Kv=new O,Zv=new er,kd=new O(1,0,0),Od=new O(0,1,0),zd=new O(0,0,1),Bd={type:"added"},Jv={type:"removed"},Rr={type:"childadded",child:null},wc={type:"childremoved",child:null};class Xn extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new O,t=new is,i=new er,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new ht}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(kd,e)}rotateY(e){return this.rotateOnAxis(Od,e)}rotateZ(e){return this.rotateOnAxis(zd,e)}translateOnAxis(e,t){return Nd.copy(e).applyQuaternion(this.quaternion),this.position.add(Nd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kd,e)}translateY(e){return this.translateOnAxis(Od,e)}translateZ(e){return this.translateOnAxis(zd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Eo.copy(e):Eo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Aa,Eo,this.up):Xi.lookAt(Eo,Aa,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),Cr.setFromRotationMatrix(Xi),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bd),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jv),wc.child=e,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bd),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,Kv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,Zv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Xn.DEFAULT_UP=new O(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new O,qi=new O,bc=new O,Yi=new O,Pr=new O,Dr=new O,Hd=new O,Tc=new O,Ec=new O,Ac=new O,Cc=new Qt,Rc=new Qt,Pc=new Qt;class Ti{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Si.subVectors(e,t),s.cross(Si);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Si.subVectors(s,t),qi.subVectors(i,t),bc.subVectors(e,t);const a=Si.dot(Si),o=Si.dot(qi),l=Si.dot(bc),c=qi.dot(qi),h=qi.dot(bc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yi.x),l.addScaledVector(a,Yi.y),l.addScaledVector(o,Yi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Cc.setScalar(0),Rc.setScalar(0),Pc.setScalar(0),Cc.fromBufferAttribute(e,t),Rc.fromBufferAttribute(e,i),Pc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Cc,r.x),a.addScaledVector(Rc,r.y),a.addScaledVector(Pc,r.z),a}static isFrontFacing(e,t,i,s){return Si.subVectors(i,t),qi.subVectors(e,t),Si.cross(qi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),Si.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Ti.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Pr.subVectors(s,i),Dr.subVectors(r,i),Tc.subVectors(e,i);const l=Pr.dot(Tc),c=Dr.dot(Tc);if(l<=0&&c<=0)return t.copy(i);Ec.subVectors(e,s);const h=Pr.dot(Ec),d=Dr.dot(Ec);if(h>=0&&d<=h)return t.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Pr,a);Ac.subVectors(e,r);const f=Pr.dot(Ac),g=Dr.dot(Ac);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Dr,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Hd.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Hd,o);const p=1/(m+_+u);return a=_*p,o=u*p,t.copy(i).addScaledVector(Pr,a).addScaledVector(Dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function Dc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class at{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Et.workingColorSpace){if(e=yu(e,1),t=Mn(t,0,1),i=Mn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Dc(a,r,e+1/3),this.g=Dc(a,r,e),this.b=Dc(a,r,e-1/3)}return Et.toWorkingColorSpace(this,s),this}setStyle(e,t=di){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=di){const i=dm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}copyLinearToSRGB(e){return this.r=mc(e.r),this.g=mc(e.g),this.b=mc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Et.fromWorkingColorSpace(In.copy(this),e),Math.round(Mn(In.r*255,0,255))*65536+Math.round(Mn(In.g*255,0,255))*256+Math.round(Mn(In.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(In.copy(this),t);const i=In.r,s=In.g,r=In.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=di){Et.fromWorkingColorSpace(In.copy(this),e);const t=In.r,i=In.g,s=In.b;return e!==di?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+t,ms.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ms),e.getHSL(Ao);const i=Va(ms.h,Ao.h,t),s=Va(ms.s,Ao.s,t),r=Va(ms.l,Ao.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new at;at.NAMES=dm;let Qv=0;class ca extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=or(),this.name="",this.type="Material",this.blending=js,this.side=As,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=oh,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(i.blending=this.blending),this.side!==As&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ah&&(i.blendSrc=this.blendSrc),this.blendDst!==oh&&(i.blendDst=this.blendDst),this.blendEquation!==Ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ad&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $s extends ca{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=Zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new O,Co=new we;class Cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cd,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Co.fromBufferAttribute(this,t),Co.applyMatrix3(e),this.setXY(t,Co.x,Co.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Br(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Br(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Br(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Br(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array),s=Hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array),s=Hn(s,this.array),r=Hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cd&&(e.usage=this.usage),e}}class fm extends Cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class pm extends Cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ct extends Cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let e_=0;const ci=new It,Lc=new Xn,Lr=new O,ni=new ki,Ca=new ki,xn=new O;class en extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cm(e)?pm:fm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ht().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,i){return ci.makeTranslation(e,t,i),this.applyMatrix4(ci),this}scale(e,t,i){return ci.makeScale(e,t,i),this.applyMatrix4(ci),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ca.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(ni.min,Ca.min),ni.expandByPoint(xn),xn.addVectors(ni.max,Ca.max),ni.expandByPoint(xn)):(ni.expandByPoint(Ca.min),ni.expandByPoint(Ca.max))}ni.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)xn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(xn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xn.fromBufferAttribute(o,c),l&&(Lr.fromBufferAttribute(e,c),xn.add(Lr)),s=Math.max(s,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new O,l[U]=new O;const c=new O,h=new O,d=new O,u=new we,f=new we,g=new we,_=new O,m=new O;function p(U,ie,S){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,ie),d.fromBufferAttribute(i,S),u.fromBufferAttribute(r,U),f.fromBufferAttribute(r,ie),g.fromBufferAttribute(r,S),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const b=1/(f.x*g.y-g.x*f.y);isFinite(b)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(b),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(b),o[U].add(_),o[ie].add(_),o[S].add(_),l[U].add(m),l[ie].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let U=0,ie=x.length;U<ie;++U){const S=x[U],b=S.start,H=S.count;for(let z=b,Y=b+H;z<Y;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const M=new O,w=new O,I=new O,C=new O;function P(U){I.fromBufferAttribute(s,U),C.copy(I);const ie=o[U];M.copy(ie),M.sub(I.multiplyScalar(I.dot(ie))).normalize(),w.crossVectors(C,ie);const b=w.dot(l[U])<0?-1:1;a.setXYZW(U,M.x,M.y,M.z,b)}for(let U=0,ie=x.length;U<ie;++U){const S=x[U],b=S.start,H=S.count;for(let z=b,Y=b+H;z<Y;z+=3)P(e.getX(z+0)),P(e.getX(z+1)),P(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Cn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vd=new It,ks=new co,Ro=new Oi,Gd=new O,Po=new O,Do=new O,Lo=new O,Ic=new O,Io=new O,Wd=new O,Uo=new O;class Dt extends Xn{constructor(e=new en,t=new $s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Ic.fromBufferAttribute(d,e),a?Io.addScaledVector(Ic,h):Io.addScaledVector(Ic.sub(t),h))}t.add(Io)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(r),ks.copy(e.ray).recast(e.near),!(Ro.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Ro,Gd)===null||ks.origin.distanceToSquared(Gd)>(e.far-e.near)**2))&&(Vd.copy(r).invert(),ks.copy(e.ray).applyMatrix4(Vd),!(i.boundingBox!==null&&ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let w=x,I=M;w<I;w+=3){const C=o.getX(w),P=o.getX(w+1),U=o.getX(w+2);s=Fo(this,p,e,i,c,h,d,C,P,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=o.getX(m),M=o.getX(m+1),w=o.getX(m+2);s=Fo(this,a,e,i,c,h,d,x,M,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=x,I=M;w<I;w+=3){const C=w,P=w+1,U=w+2;s=Fo(this,p,e,i,c,h,d,C,P,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,M=m+1,w=m+2;s=Fo(this,a,e,i,c,h,d,x,M,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function t_(n,e,t,i,s,r,a,o){let l;if(e.side===$n?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===As,o),l===null)return null;Uo.copy(o),Uo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Uo);return c<t.near||c>t.far?null:{distance:c,point:Uo.clone(),object:n}}function Fo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Po),n.getVertexPosition(l,Do),n.getVertexPosition(c,Lo);const h=t_(n,e,t,i,Po,Do,Lo,Wd);if(h){const d=new O;Ti.getBarycoord(Wd,Po,Do,Lo,d),s&&(h.uv=Ti.getInterpolatedAttribute(s,o,l,c,d,new we)),r&&(h.uv1=Ti.getInterpolatedAttribute(r,o,l,c,d,new we)),a&&(h.normal=Ti.getInterpolatedAttribute(a,o,l,c,d,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new O,materialIndex:0};Ti.getNormal(Po,Do,Lo,u.normal),h.face=u,h.barycoord=d}return h}class tr extends en{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(d,2));function g(_,m,p,x,M,w,I,C,P,U,ie){const S=w/P,b=I/U,H=w/2,z=I/2,Y=C/2,Z=P+1,j=U+1;let F=0,te=0;const pe=new O;for(let le=0;le<j;le++){const oe=le*b-z;for(let me=0;me<Z;me++){const he=me*S-H;pe[_]=he*x,pe[m]=oe*M,pe[p]=Y,c.push(pe.x,pe.y,pe.z),pe[_]=0,pe[m]=0,pe[p]=C>0?1:-1,h.push(pe.x,pe.y,pe.z),d.push(me/P),d.push(1-le/U),F+=1}}for(let le=0;le<U;le++)for(let oe=0;oe<P;oe++){const me=u+oe+Z*le,he=u+oe+Z*(le+1),ne=u+(oe+1)+Z*(le+1),fe=u+(oe+1)+Z*le;l.push(me,he,fe),l.push(he,ne,fe),te+=6}o.addGroup(f,te,ie),f+=te,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const i=sa(n[t]);for(const s in i)e[s]=i[s]}return e}function n_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const i_={clone:sa,merge:Vn};var s_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ss extends ca{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s_,this.fragmentShader=r_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=n_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class gm extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gs=new O,$d=new we,Xd=new we;class pi extends gm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,t){return this.getViewBounds(e,$d,Xd),t.subVectors(Xd,$d)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ha*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ir=-90,Ur=1;class a_ extends Xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pi(Ir,Ur,e,t);s.layers=this.layers,this.add(s);const r=new pi(Ir,Ur,e,t);r.layers=this.layers,this.add(r);const a=new pi(Ir,Ur,e,t);a.layers=this.layers,this.add(a);const o=new pi(Ir,Ur,e,t);o.layers=this.layers,this.add(o);const l=new pi(Ir,Ur,e,t);l.layers=this.layers,this.add(l);const c=new pi(Ir,Ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ji)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class vm extends Fn{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ea,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class o_ extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new vm(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tr(5,5,5),r=new ss({name:"CubemapFromEquirect",uniforms:sa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$n,blending:Ts});r.uniforms.tEquirect.value=t;const a=new Dt(s,r),o=t.minFilter;return t.minFilter===Ss&&(t.minFilter=mi),new a_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Uc=new O,l_=new O,c_=new ht;class vs{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Uc.subVectors(i,t).cross(l_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Uc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||c_.getNormalMatrix(e),s=this.coplanarPoint(Uc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new Oi,No=new O;class _m{constructor(e=new vs,t=new vs,i=new vs,s=new vs,r=new vs,a=new vs){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ji){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],x=s[13],M=s[14],w=s[15];if(i[0].setComponents(l-r,u-c,m-f,w-p).normalize(),i[1].setComponents(l+r,u+c,m+f,w+p).normalize(),i[2].setComponents(l+a,u+h,m+g,w+x).normalize(),i[3].setComponents(l-a,u-h,m-g,w-x).normalize(),i[4].setComponents(l-o,u-d,m-_,w-M).normalize(),t===Ji)i[5].setComponents(l+o,u+d,m+_,w+M).normalize();else if(t===pl)i[5].setComponents(o,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){return Os.center.set(0,0,0),Os.radius=.7071067811865476,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(No.x=s.normal.x>0?e.max.x:e.min.x,No.y=s.normal.y>0?e.max.y:e.min.y,No.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xm(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function h_(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class lr extends en{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*u-a;for(let M=0;M<c;M++){const w=M*d-r;g.push(w,-x,0),_.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const M=x+c*p,w=x+c*(p+1),I=x+1+c*(p+1),C=x+1+c*p;f.push(M,w,C),f.push(w,I,C)}this.setIndex(f),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.width,e.height,e.widthSegments,e.heightSegments)}}var u_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d_=`#ifdef USE_ALPHAHASH
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
#endif`,f_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v_=`#ifdef USE_AOMAP
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
#endif`,__=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x_=`#ifdef USE_BATCHING
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
#endif`,M_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b_=`#ifdef USE_IRIDESCENCE
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
#endif`,T_=`#ifdef USE_BUMPMAP
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
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,U_=`#define PI 3.141592653589793
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
} // validated`,F_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N_=`vec3 transformedNormal = objectNormal;
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
#endif`,k_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H_="gl_FragColor = linearToOutputTexel( gl_FragColor );",V_=`
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
}`,G_=`#ifdef USE_ENVMAP
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
#endif`,W_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$_=`#ifdef USE_ENVMAP
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
#endif`,X_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J_=`#ifdef USE_GRADIENTMAP
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
}`,Q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nx=`uniform bool receiveShadow;
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
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,sx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lx=`PhysicalMaterial material;
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
#endif`,cx=`struct PhysicalMaterial {
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
}`,hx=`
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
#endif`,ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,dx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,px=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mx=`#if defined( USE_POINTS_UV )
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
#endif`,yx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ex=`#ifdef USE_MORPHTARGETS
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
#endif`,Ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ix=`#ifdef USE_NORMALMAP
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
#endif`,Ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ox=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jx=`float getShadowMask() {
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
}`,Kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zx=`#ifdef USE_SKINNING
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
#endif`,Jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,eM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sM=`#ifdef USE_TRANSMISSION
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
#endif`,rM=`#ifdef USE_TRANSMISSION
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
#endif`,aM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uM=`uniform sampler2D t2D;
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
}`,dM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gM=`#include <common>
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
}`,vM=`#if DEPTH_PACKING == 3200
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
}`,_M=`#define DISTANCE
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
}`,xM=`#define DISTANCE
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
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SM=`uniform float scale;
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
}`,wM=`uniform vec3 diffuse;
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
}`,bM=`#include <common>
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
}`,TM=`uniform vec3 diffuse;
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
}`,EM=`#define LAMBERT
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
}`,AM=`#define LAMBERT
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
}`,CM=`#define MATCAP
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
}`,RM=`#define MATCAP
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
}`,PM=`#define NORMAL
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
}`,DM=`#define NORMAL
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
}`,LM=`#define PHONG
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
}`,IM=`#define PHONG
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
}`,UM=`#define STANDARD
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
}`,FM=`#define STANDARD
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
}`,NM=`#define TOON
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
}`,kM=`#define TOON
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
}`,OM=`uniform float size;
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
}`,zM=`uniform vec3 diffuse;
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
}`,BM=`#include <common>
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
}`,HM=`uniform vec3 color;
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
}`,VM=`uniform float rotation;
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
}`,GM=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:u_,alphahash_pars_fragment:d_,alphamap_fragment:f_,alphamap_pars_fragment:p_,alphatest_fragment:m_,alphatest_pars_fragment:g_,aomap_fragment:v_,aomap_pars_fragment:__,batching_pars_vertex:x_,batching_vertex:M_,begin_vertex:y_,beginnormal_vertex:S_,bsdfs:w_,iridescence_fragment:b_,bumpmap_pars_fragment:T_,clipping_planes_fragment:E_,clipping_planes_pars_fragment:A_,clipping_planes_pars_vertex:C_,clipping_planes_vertex:R_,color_fragment:P_,color_pars_fragment:D_,color_pars_vertex:L_,color_vertex:I_,common:U_,cube_uv_reflection_fragment:F_,defaultnormal_vertex:N_,displacementmap_pars_vertex:k_,displacementmap_vertex:O_,emissivemap_fragment:z_,emissivemap_pars_fragment:B_,colorspace_fragment:H_,colorspace_pars_fragment:V_,envmap_fragment:G_,envmap_common_pars_fragment:W_,envmap_pars_fragment:$_,envmap_pars_vertex:X_,envmap_physical_pars_fragment:ix,envmap_vertex:q_,fog_vertex:Y_,fog_pars_vertex:j_,fog_fragment:K_,fog_pars_fragment:Z_,gradientmap_pars_fragment:J_,lightmap_pars_fragment:Q_,lights_lambert_fragment:ex,lights_lambert_pars_fragment:tx,lights_pars_begin:nx,lights_toon_fragment:sx,lights_toon_pars_fragment:rx,lights_phong_fragment:ax,lights_phong_pars_fragment:ox,lights_physical_fragment:lx,lights_physical_pars_fragment:cx,lights_fragment_begin:hx,lights_fragment_maps:ux,lights_fragment_end:dx,logdepthbuf_fragment:fx,logdepthbuf_pars_fragment:px,logdepthbuf_pars_vertex:mx,logdepthbuf_vertex:gx,map_fragment:vx,map_pars_fragment:_x,map_particle_fragment:xx,map_particle_pars_fragment:Mx,metalnessmap_fragment:yx,metalnessmap_pars_fragment:Sx,morphinstance_vertex:wx,morphcolor_vertex:bx,morphnormal_vertex:Tx,morphtarget_pars_vertex:Ex,morphtarget_vertex:Ax,normal_fragment_begin:Cx,normal_fragment_maps:Rx,normal_pars_fragment:Px,normal_pars_vertex:Dx,normal_vertex:Lx,normalmap_pars_fragment:Ix,clearcoat_normal_fragment_begin:Ux,clearcoat_normal_fragment_maps:Fx,clearcoat_pars_fragment:Nx,iridescence_pars_fragment:kx,opaque_fragment:Ox,packing:zx,premultiplied_alpha_fragment:Bx,project_vertex:Hx,dithering_fragment:Vx,dithering_pars_fragment:Gx,roughnessmap_fragment:Wx,roughnessmap_pars_fragment:$x,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:qx,shadowmap_vertex:Yx,shadowmask_pars_fragment:jx,skinbase_vertex:Kx,skinning_pars_vertex:Zx,skinning_vertex:Jx,skinnormal_vertex:Qx,specularmap_fragment:eM,specularmap_pars_fragment:tM,tonemapping_fragment:nM,tonemapping_pars_fragment:iM,transmission_fragment:sM,transmission_pars_fragment:rM,uv_pars_fragment:aM,uv_pars_vertex:oM,uv_vertex:lM,worldpos_vertex:cM,background_vert:hM,background_frag:uM,backgroundCube_vert:dM,backgroundCube_frag:fM,cube_vert:pM,cube_frag:mM,depth_vert:gM,depth_frag:vM,distanceRGBA_vert:_M,distanceRGBA_frag:xM,equirect_vert:MM,equirect_frag:yM,linedashed_vert:SM,linedashed_frag:wM,meshbasic_vert:bM,meshbasic_frag:TM,meshlambert_vert:EM,meshlambert_frag:AM,meshmatcap_vert:CM,meshmatcap_frag:RM,meshnormal_vert:PM,meshnormal_frag:DM,meshphong_vert:LM,meshphong_frag:IM,meshphysical_vert:UM,meshphysical_frag:FM,meshtoon_vert:NM,meshtoon_frag:kM,points_vert:OM,points_frag:zM,shadow_vert:BM,shadow_frag:HM,sprite_vert:VM,sprite_frag:GM},Ce={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Fi={basic:{uniforms:Vn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Vn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new at(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Vn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Vn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Vn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new at(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Vn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Vn([Ce.points,Ce.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Vn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Vn([Ce.common,Ce.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Vn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Vn([Ce.sprite,Ce.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Vn([Ce.common,Ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Vn([Ce.lights,Ce.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Fi.physical={uniforms:Vn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const ko={r:0,b:0,g:0},zs=new is,WM=new It;function $M(n,e,t,i,s,r,a){const o=new at(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:e).get(M)),M}function _(x){let M=!1;const w=g(x);w===null?p(o,l):w&&w.isColor&&(p(w,1),M=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,M){const w=g(M);w&&(w.isCubeTexture||w.mapping===Il)?(h===void 0&&(h=new Dt(new tr(1,1,1),new ss({name:"BackgroundCubeMaterial",uniforms:sa(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),zs.copy(M.backgroundRotation),zs.x*=-1,zs.y*=-1,zs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(WM.makeRotationFromEuler(zs)),h.material.toneMapped=Et.getTransfer(w.colorSpace)!==Vt,(d!==w||u!==w.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=w,u=w.version,f=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Dt(new lr(2,2),new ss({name:"BackgroundMaterial",uniforms:sa(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:As,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Et.getTransfer(w.colorSpace)!==Vt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||u!==w.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=w,u=w.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,M){x.getRGB(ko,mm(n)),i.buffers.color.setClear(ko.r,ko.g,ko.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:m}}function XM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(S,b,H,z,Y){let Z=!1;const j=d(z,H,b);r!==j&&(r=j,c(r.object)),Z=f(S,z,H,Y),Z&&g(S,z,H,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,w(S,b,H,z),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function d(S,b,H){const z=H.wireframe===!0;let Y=i[S.id];Y===void 0&&(Y={},i[S.id]=Y);let Z=Y[b.id];Z===void 0&&(Z={},Y[b.id]=Z);let j=Z[z];return j===void 0&&(j=u(l()),Z[z]=j),j}function u(S){const b=[],H=[],z=[];for(let Y=0;Y<t;Y++)b[Y]=0,H[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:H,attributeDivisors:z,object:S,attributes:{},index:null}}function f(S,b,H,z){const Y=r.attributes,Z=b.attributes;let j=0;const F=H.getAttributes();for(const te in F)if(F[te].location>=0){const le=Y[te];let oe=Z[te];if(oe===void 0&&(te==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),te==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),le===void 0||le.attribute!==oe||oe&&le.data!==oe.data)return!0;j++}return r.attributesNum!==j||r.index!==z}function g(S,b,H,z){const Y={},Z=b.attributes;let j=0;const F=H.getAttributes();for(const te in F)if(F[te].location>=0){let le=Z[te];le===void 0&&(te==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),te==="instanceColor"&&S.instanceColor&&(le=S.instanceColor));const oe={};oe.attribute=le,le&&le.data&&(oe.data=le.data),Y[te]=oe,j++}r.attributes=Y,r.attributesNum=j,r.index=z}function _(){const S=r.newAttributes;for(let b=0,H=S.length;b<H;b++)S[b]=0}function m(S){p(S,0)}function p(S,b){const H=r.newAttributes,z=r.enabledAttributes,Y=r.attributeDivisors;H[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),Y[S]!==b&&(n.vertexAttribDivisor(S,b),Y[S]=b)}function x(){const S=r.newAttributes,b=r.enabledAttributes;for(let H=0,z=b.length;H<z;H++)b[H]!==S[H]&&(n.disableVertexAttribArray(H),b[H]=0)}function M(S,b,H,z,Y,Z,j){j===!0?n.vertexAttribIPointer(S,b,H,Y,Z):n.vertexAttribPointer(S,b,H,z,Y,Z)}function w(S,b,H,z){_();const Y=z.attributes,Z=H.getAttributes(),j=b.defaultAttributeValues;for(const F in Z){const te=Z[F];if(te.location>=0){let pe=Y[F];if(pe===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor)),pe!==void 0){const le=pe.normalized,oe=pe.itemSize,me=e.get(pe);if(me===void 0)continue;const he=me.buffer,ne=me.type,fe=me.bytesPerElement,xe=ne===n.INT||ne===n.UNSIGNED_INT||pe.gpuType===fu;if(pe.isInterleavedBufferAttribute){const ge=pe.data,Xe=ge.stride,Fe=pe.offset;if(ge.isInstancedInterleavedBuffer){for(let He=0;He<te.locationSize;He++)p(te.location+He,ge.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let He=0;He<te.locationSize;He++)m(te.location+He);n.bindBuffer(n.ARRAY_BUFFER,he);for(let He=0;He<te.locationSize;He++)M(te.location+He,oe/te.locationSize,ne,le,Xe*fe,(Fe+oe/te.locationSize*He)*fe,xe)}else{if(pe.isInstancedBufferAttribute){for(let ge=0;ge<te.locationSize;ge++)p(te.location+ge,pe.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ge=0;ge<te.locationSize;ge++)m(te.location+ge);n.bindBuffer(n.ARRAY_BUFFER,he);for(let ge=0;ge<te.locationSize;ge++)M(te.location+ge,oe/te.locationSize,ne,le,oe*fe,oe/te.locationSize*ge*fe,xe)}}else if(j!==void 0){const le=j[F];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(te.location,le);break;case 3:n.vertexAttrib3fv(te.location,le);break;case 4:n.vertexAttrib4fv(te.location,le);break;default:n.vertexAttrib1fv(te.location,le)}}}}x()}function I(){U();for(const S in i){const b=i[S];for(const H in b){const z=b[H];for(const Y in z)h(z[Y].object),delete z[Y];delete b[H]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const b=i[S.id];for(const H in b){const z=b[H];for(const Y in z)h(z[Y].object),delete z[Y];delete b[H]}delete i[S.id]}function P(S){for(const b in i){const H=i[b];if(H[S.id]===void 0)continue;const z=H[S.id];for(const Y in z)h(z[Y].object),delete z[Y];delete H[S.id]}}function U(){ie(),a=!0,r!==s&&(r=s,c(r.object))}function ie(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:ie,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function qM(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function l(c,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];for(let _=0;_<u.length;_++)t.update(g,i,u[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function YM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==An&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const U=P===lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ns&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Un&&!U)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){const P=e.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:I,maxSamples:C}}function jM(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new vs,o=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:i,M=x*4;let w=p.clippingState||null;l.value=w,w=h(g,u,M,f);for(let I=0;I!==M;++I)w[I]=t[I];p.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,w=f;M!==_;++M,w+=4)a.copy(d[M]).applyMatrix4(x,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function KM(n){let e=new WeakMap;function t(a,o){return o===mh?a.mapping=ea:o===gh&&(a.mapping=ta),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===mh||o===gh)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new o_(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Fl extends gm{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wr=4,qd=[.125,.215,.35,.446,.526,.582],Xs=20,Fc=new Fl,Yd=new at;let Nc=null,kc=0,Oc=0,zc=!1;const Hs=(1+Math.sqrt(5))/2,Fr=1/Hs,jd=[new O(-Hs,Fr,0),new O(Hs,Fr,0),new O(-Fr,0,Hs),new O(Fr,0,Hs),new O(0,Hs,-Fr),new O(0,Hs,Fr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Kd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Nc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nc,kc,Oc),this._renderer.xr.enabled=zc,e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ea||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:lo,format:An,colorSpace:Rs,depthBuffer:!1},s=Zd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zd(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZM(r)),this._blurMaterial=JM(r,e,t)}return s}_compileMaterial(e){const t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,Fc)}_sceneToCubeUV(e,t,i,s){const o=new pi(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Yd),h.toneMapping=Es,h.autoClear=!1;const f=new $s({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),g=new Dt(new tr,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Yd),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;Oo(s,x*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ea||e.mapping===ta;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Oo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Fc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=jd[(s-r-1)%jd.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Dt(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xs-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Xs;m>Xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xs}`);const p=[];let x=0;for(let P=0;P<Xs;++P){const U=P/_,ie=Math.exp(-U*U/2);p.push(ie),P===0?x+=ie:P<m&&(x+=2*ie)}for(let P=0;P<p.length;P++)p[P]=p[P]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-i;const w=this._sizeLods[s],I=3*w*(s>M-Wr?s-M+Wr:0),C=4*(this._cubeSize-w);Oo(t,I,C,3*w,2*w),l.setRenderTarget(t),l.render(d,Fc)}}function ZM(n){const e=[],t=[],i=[];let s=n;const r=n-Wr+1+qd.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Wr?l=qd[a-n+Wr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),M=new Float32Array(m*g*f),w=new Float32Array(p*g*f);for(let C=0;C<f;C++){const P=C%3*2/3-1,U=C>2?0:-1,ie=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];x.set(ie,_*g*C),M.set(u,m*g*C);const S=[C,C,C,C,C,C];w.set(S,p*g*C)}const I=new en;I.setAttribute("position",new Cn(x,_)),I.setAttribute("uv",new Cn(M,m)),I.setAttribute("faceIndex",new Cn(w,p)),e.push(I),s>Wr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Zd(n,e,t){const i=new Ai(n,e,t);return i.texture.mapping=Il,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function JM(n,e,t){const i=new Float32Array(Xs),s=new O(0,1,0);return new ss({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function Jd(){return new ss({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function Qd(){return new ss({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function wu(){return`

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
	`}function QM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===mh||l===gh,h=l===ea||l===ta;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Kd(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Kd(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function ey(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&rl("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ty(n,e,t,i){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],n.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let M=0,w=x.length;M<w;M+=3){const I=x[M+0],C=x[M+1],P=x[M+2];u.push(I,C,C,P,P,I)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,w=x.length/3-1;M<w;M+=3){const I=M+0,C=M+1,P=M+2;u.push(I,C,C,P,P,I)}}else return;const m=new(cm(u)?pm:fm)(u,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function ny(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*a),t.update(f,i,1)}function c(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*a,g),t.update(f,i,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(u,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x];for(let x=0;x<_.length;x++)t.update(p,i,_[x])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function iy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function sy(n,e,t){const i=new WeakMap,s=new Qt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let S=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var f=S;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),_===!0&&(w=2),m===!0&&(w=3);let I=o.attributes.position.count*w,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*C*4*d),U=new um(P,I,C,d);U.type=Un,U.needsUpdate=!0;const ie=w*4;for(let b=0;b<d;b++){const H=p[b],z=x[b],Y=M[b],Z=I*C*4*b;for(let j=0;j<H.count;j++){const F=j*ie;g===!0&&(s.fromBufferAttribute(H,j),P[Z+F+0]=s.x,P[Z+F+1]=s.y,P[Z+F+2]=s.z,P[Z+F+3]=0),_===!0&&(s.fromBufferAttribute(z,j),P[Z+F+4]=s.x,P[Z+F+5]=s.y,P[Z+F+6]=s.z,P[Z+F+7]=0),m===!0&&(s.fromBufferAttribute(Y,j),P[Z+F+8]=s.x,P[Z+F+9]=s.y,P[Z+F+10]=s.z,P[Z+F+11]=Y.itemSize===4?s.w:1)}}u={count:d,texture:U,size:new we(I,C)},i.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function ry(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Mm extends Fn{constructor(e,t,i,s,r,a,o,l,c,h=jr){if(h!==jr&&h!==ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===jr&&(i=Qs),i===void 0&&h===ia&&(i=na),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ym=new Fn,ef=new Mm(1,1),Sm=new um,wm=new $v,bm=new vm,tf=[],nf=[],sf=new Float32Array(16),rf=new Float32Array(9),af=new Float32Array(4);function ha(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=tf[s];if(r===void 0&&(r=new Float32Array(s),tf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function fn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nl(n,e){let t=nf[e];t===void 0&&(t=new Int32Array(e),nf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ay(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),fn(t,e)}}function ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),fn(t,e)}}function cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),fn(t,e)}}function hy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;af.set(i),n.uniformMatrix2fv(this.addr,!1,af),fn(t,i)}}function uy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;rf.set(i),n.uniformMatrix3fv(this.addr,!1,rf),fn(t,i)}}function dy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;sf.set(i),n.uniformMatrix4fv(this.addr,!1,sf),fn(t,i)}}function fy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),fn(t,e)}}function my(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),fn(t,e)}}function gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),fn(t,e)}}function vy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),fn(t,e)}}function xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),fn(t,e)}}function My(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),fn(t,e)}}function yy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ef.compareFunction=lm,r=ef):r=ym,t.setTexture2D(e||r,s)}function Sy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||wm,s)}function wy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||bm,s)}function by(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Sm,s)}function Ty(n){switch(n){case 5126:return ay;case 35664:return oy;case 35665:return ly;case 35666:return cy;case 35674:return hy;case 35675:return uy;case 35676:return dy;case 5124:case 35670:return fy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return vy;case 36294:return _y;case 36295:return xy;case 36296:return My;case 35678:case 36198:case 36298:case 36306:case 35682:return yy;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return wy;case 36289:case 36303:case 36311:case 36292:return by}}function Ey(n,e){n.uniform1fv(this.addr,e)}function Ay(n,e){const t=ha(e,this.size,2);n.uniform2fv(this.addr,t)}function Cy(n,e){const t=ha(e,this.size,3);n.uniform3fv(this.addr,t)}function Ry(n,e){const t=ha(e,this.size,4);n.uniform4fv(this.addr,t)}function Py(n,e){const t=ha(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Dy(n,e){const t=ha(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ly(n,e){const t=ha(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Iy(n,e){n.uniform1iv(this.addr,e)}function Uy(n,e){n.uniform2iv(this.addr,e)}function Fy(n,e){n.uniform3iv(this.addr,e)}function Ny(n,e){n.uniform4iv(this.addr,e)}function ky(n,e){n.uniform1uiv(this.addr,e)}function Oy(n,e){n.uniform2uiv(this.addr,e)}function zy(n,e){n.uniform3uiv(this.addr,e)}function By(n,e){n.uniform4uiv(this.addr,e)}function Hy(n,e,t){const i=this.cache,s=e.length,r=Nl(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||ym,r[a])}function Vy(n,e,t){const i=this.cache,s=e.length,r=Nl(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wm,r[a])}function Gy(n,e,t){const i=this.cache,s=e.length,r=Nl(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||bm,r[a])}function Wy(n,e,t){const i=this.cache,s=e.length,r=Nl(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Sm,r[a])}function $y(n){switch(n){case 5126:return Ey;case 35664:return Ay;case 35665:return Cy;case 35666:return Ry;case 35674:return Py;case 35675:return Dy;case 35676:return Ly;case 5124:case 35670:return Iy;case 35667:case 35671:return Uy;case 35668:case 35672:return Fy;case 35669:case 35673:return Ny;case 5125:return ky;case 36294:return Oy;case 36295:return zy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Gy;case 36289:case 36303:case 36311:case 36292:return Wy}}class Xy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ty(t.type)}}class qy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$y(t.type)}}class Yy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Bc=/(\w+)(\])?(\[|\.)?/g;function of(n,e){n.seq.push(e),n.map[e.id]=e}function jy(n,e,t){const i=n.name,s=i.length;for(Bc.lastIndex=0;;){const r=Bc.exec(i),a=Bc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){of(t,c===void 0?new Xy(o,n,e):new qy(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Yy(o),of(t,d)),t=d}}}class al{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);jy(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function lf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Ky=37297;let Zy=0;function Jy(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Qy(n){const e=Et.getPrimaries(Et.workingColorSpace),t=Et.getPrimaries(n);let i;switch(e===t?i="":e===fl&&t===dl?i="LinearDisplayP3ToLinearSRGB":e===dl&&t===fl&&(i="LinearSRGBToLinearDisplayP3"),n){case Rs:case Ul:return[i,"LinearTransferOETF"];case di:case Mu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function cf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Jy(n.getShaderSource(e),a)}else return s}function eS(n,e){const t=Qy(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function tS(n,e){let t;switch(e){case tv:t="Linear";break;case nv:t="Reinhard";break;case iv:t="Cineon";break;case sv:t="ACESFilmic";break;case av:t="AgX";break;case ov:t="Neutral";break;case rv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zo=new O;function nS(){Et.getLuminanceCoefficients(zo);const n=zo.x.toFixed(4),e=zo.y.toFixed(4),t=zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function sS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ka(n){return n!==""}function hf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aS=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(n){return n.replace(aS,lS)}const oS=new Map;function lS(n,e){let t=ct[e];if(t===void 0){const i=oS.get(e);if(i!==void 0)t=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $h(t)}const cS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(n){return n.replace(cS,hS)}function hS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ff(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function uS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ug?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function dS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ea:case ta:e="ENVMAP_TYPE_CUBE";break;case Il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ta:e="ENVMAP_MODE_REFRACTION";break}return e}function pS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zp:e="ENVMAP_BLENDING_MULTIPLY";break;case Qg:e="ENVMAP_BLENDING_MIX";break;case ev:e="ENVMAP_BLENDING_ADD";break}return e}function mS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function gS(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=uS(t),c=dS(t),h=fS(t),d=pS(t),u=mS(t),f=iS(t),g=sS(r),_=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ka).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ka).join(`
`),p.length>0&&(p+=`
`)):(m=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),p=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Es?"#define TONE_MAPPING":"",t.toneMapping!==Es?ct.tonemapping_pars_fragment:"",t.toneMapping!==Es?tS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,eS("linearToOutputTexel",t.outputColorSpace),nS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ka).join(`
`)),a=$h(a),a=hf(a,t),a=uf(a,t),o=$h(o),o=hf(o,t),o=uf(o,t),a=df(a),o=df(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Kn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+a,w=x+p+o,I=lf(s,s.VERTEX_SHADER,M),C=lf(s,s.FRAGMENT_SHADER,w);s.attachShader(_,I),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(b){if(n.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(I).trim(),Y=s.getShaderInfoLog(C).trim();let Z=!0,j=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,I,C);else{const F=cf(s,I,"vertex"),te=cf(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+H+`
`+F+`
`+te)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||Y==="")&&(j=!1);j&&(b.diagnostics={runnable:Z,programLog:H,vertexShader:{log:z,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(I),s.deleteShader(C),U=new al(s,_),ie=rS(s,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let ie;this.getAttributes=function(){return ie===void 0&&P(this),ie};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,Ky)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=C,this}let vS=0;class _S{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xS(e),t.set(e,i)),i}}class xS{constructor(e){this.id=vS++,this.code=e,this.usedTimes=0}}function MS(n,e,t,i,s,r,a){const o=new Su,l=new _S,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,b,H,z,Y){const Z=z.fog,j=Y.geometry,F=S.isMeshStandardMaterial?z.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),pe=te&&te.mapping===Il?te.image.height:null,le=_[S.type];S.precision!==null&&(g=s.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const oe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,me=oe!==void 0?oe.length:0;let he=0;j.morphAttributes.position!==void 0&&(he=1),j.morphAttributes.normal!==void 0&&(he=2),j.morphAttributes.color!==void 0&&(he=3);let ne,fe,xe,ge;if(le){const Dn=Fi[le];ne=Dn.vertexShader,fe=Dn.fragmentShader}else ne=S.vertexShader,fe=S.fragmentShader,l.update(S),xe=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const Xe=n.getRenderTarget(),Fe=Y.isInstancedMesh===!0,He=Y.isBatchedMesh===!0,rt=!!S.map,nt=!!S.matcap,N=!!te,qt=!!S.aoMap,ot=!!S.lightMap,ut=!!S.bumpMap,Ke=!!S.normalMap,bt=!!S.displacementMap,je=!!S.emissiveMap,D=!!S.metalnessMap,E=!!S.roughnessMap,Q=S.anisotropy>0,ce=S.clearcoat>0,re=S.dispersion>0,$=S.iridescence>0,be=S.sheen>0,Me=S.transmission>0,De=Q&&!!S.anisotropyMap,lt=ce&&!!S.clearcoatMap,_e=ce&&!!S.clearcoatNormalMap,Le=ce&&!!S.clearcoatRoughnessMap,Ve=$&&!!S.iridescenceMap,We=$&&!!S.iridescenceThicknessMap,Ee=be&&!!S.sheenColorMap,et=be&&!!S.sheenRoughnessMap,tt=!!S.specularMap,yt=!!S.specularColorMap,G=!!S.specularIntensityMap,Ae=Me&&!!S.transmissionMap,ae=Me&&!!S.thicknessMap,ue=!!S.gradientMap,Re=!!S.alphaMap,Ie=S.alphaTest>0,mt=!!S.alphaHash,Yt=!!S.extensions;let Pn=Es;S.toneMapped&&(Xe===null||Xe.isXRRenderTarget===!0)&&(Pn=n.toneMapping);const vt={shaderID:le,shaderType:S.type,shaderName:S.name,vertexShader:ne,fragmentShader:fe,defines:S.defines,customVertexShaderID:xe,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:He,batchingColor:He&&Y._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&Y.instanceColor!==null,instancingMorph:Fe&&Y.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Xe===null?n.outputColorSpace:Xe.isXRRenderTarget===!0?Xe.texture.colorSpace:Rs,alphaToCoverage:!!S.alphaToCoverage,map:rt,matcap:nt,envMap:N,envMapMode:N&&te.mapping,envMapCubeUVHeight:pe,aoMap:qt,lightMap:ot,bumpMap:ut,normalMap:Ke,displacementMap:f&&bt,emissiveMap:je,normalMapObjectSpace:Ke&&S.normalMapType===dv,normalMapTangentSpace:Ke&&S.normalMapType===uv,metalnessMap:D,roughnessMap:E,anisotropy:Q,anisotropyMap:De,clearcoat:ce,clearcoatMap:lt,clearcoatNormalMap:_e,clearcoatRoughnessMap:Le,dispersion:re,iridescence:$,iridescenceMap:Ve,iridescenceThicknessMap:We,sheen:be,sheenColorMap:Ee,sheenRoughnessMap:et,specularMap:tt,specularColorMap:yt,specularIntensityMap:G,transmission:Me,transmissionMap:Ae,thicknessMap:ae,gradientMap:ue,opaque:S.transparent===!1&&S.blending===js&&S.alphaToCoverage===!1,alphaMap:Re,alphaTest:Ie,alphaHash:mt,combine:S.combine,mapUv:rt&&m(S.map.channel),aoMapUv:qt&&m(S.aoMap.channel),lightMapUv:ot&&m(S.lightMap.channel),bumpMapUv:ut&&m(S.bumpMap.channel),normalMapUv:Ke&&m(S.normalMap.channel),displacementMapUv:bt&&m(S.displacementMap.channel),emissiveMapUv:je&&m(S.emissiveMap.channel),metalnessMapUv:D&&m(S.metalnessMap.channel),roughnessMapUv:E&&m(S.roughnessMap.channel),anisotropyMapUv:De&&m(S.anisotropyMap.channel),clearcoatMapUv:lt&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:_e&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:We&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:et&&m(S.sheenRoughnessMap.channel),specularMapUv:tt&&m(S.specularMap.channel),specularColorMapUv:yt&&m(S.specularColorMap.channel),specularIntensityMapUv:G&&m(S.specularIntensityMap.channel),transmissionMapUv:Ae&&m(S.transmissionMap.channel),thicknessMapUv:ae&&m(S.thicknessMap.channel),alphaMapUv:Re&&m(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ke||Q),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!j.attributes.uv&&(rt||Re),fog:!!Z,useFog:S.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:Y.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:he,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pn,decodeVideoTexture:rt&&S.map.isVideoTexture===!0&&Et.getTransfer(S.map.colorSpace)===Vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===si,flipSided:S.side===$n,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Yt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&S.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function x(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const H in S.defines)b.push(H),b.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(M(b,S),w(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function M(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function w(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),S.push(o.mask)}function I(S){const b=_[S.type];let H;if(b){const z=Fi[b];H=i_.clone(z.uniforms)}else H=S.uniforms;return H}function C(S,b){let H;for(let z=0,Y=h.length;z<Y;z++){const Z=h[z];if(Z.cacheKey===b){H=Z,++H.usedTimes;break}}return H===void 0&&(H=new gS(n,b,S,r),h.push(H)),H}function P(S){if(--S.usedTimes===0){const b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function U(S){l.remove(S)}function ie(){l.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:I,acquireProgram:C,releaseProgram:P,releaseShaderCache:U,programs:h,dispose:ie}}function yS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function SS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,u,f,g,_,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||SS),i.length>1&&i.sort(u||pf),s.length>1&&s.sort(u||pf)}function h(){for(let d=e,u=n.length;d<u;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function wS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new mf,n.set(i,[a])):s>=r.length?(a=new mf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function bS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new at};break;case"SpotLight":t={position:new O,direction:new O,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function TS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ES=0;function AS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function CS(n){const e=new bS,t=TS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new It,a=new It;function o(c){let h=0,d=0,u=0;for(let ie=0;ie<9;ie++)i.probe[ie].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,M=0,w=0,I=0,C=0,P=0;c.sort(AS);for(let ie=0,S=c.length;ie<S;ie++){const b=c[ie],H=b.color,z=b.intensity,Y=b.distance,Z=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=H.r*z,d+=H.g*z,u+=H.b*z;else if(b.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(b.sh.coefficients[j],z);P++}else if(b.isDirectionalLight){const j=e.get(b);if(j.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const F=b.shadow,te=t.get(b);te.shadowIntensity=F.intensity,te.shadowBias=F.bias,te.shadowNormalBias=F.normalBias,te.shadowRadius=F.radius,te.shadowMapSize=F.mapSize,i.directionalShadow[f]=te,i.directionalShadowMap[f]=Z,i.directionalShadowMatrix[f]=b.shadow.matrix,x++}i.directional[f]=j,f++}else if(b.isSpotLight){const j=e.get(b);j.position.setFromMatrixPosition(b.matrixWorld),j.color.copy(H).multiplyScalar(z),j.distance=Y,j.coneCos=Math.cos(b.angle),j.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),j.decay=b.decay,i.spot[_]=j;const F=b.shadow;if(b.map&&(i.spotLightMap[I]=b.map,I++,F.updateMatrices(b),b.castShadow&&C++),i.spotLightMatrix[_]=F.matrix,b.castShadow){const te=t.get(b);te.shadowIntensity=F.intensity,te.shadowBias=F.bias,te.shadowNormalBias=F.normalBias,te.shadowRadius=F.radius,te.shadowMapSize=F.mapSize,i.spotShadow[_]=te,i.spotShadowMap[_]=Z,w++}_++}else if(b.isRectAreaLight){const j=e.get(b);j.color.copy(H).multiplyScalar(z),j.halfWidth.set(b.width*.5,0,0),j.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=j,m++}else if(b.isPointLight){const j=e.get(b);if(j.color.copy(b.color).multiplyScalar(b.intensity),j.distance=b.distance,j.decay=b.decay,b.castShadow){const F=b.shadow,te=t.get(b);te.shadowIntensity=F.intensity,te.shadowBias=F.bias,te.shadowNormalBias=F.normalBias,te.shadowRadius=F.radius,te.shadowMapSize=F.mapSize,te.shadowCameraNear=F.camera.near,te.shadowCameraFar=F.camera.far,i.pointShadow[g]=te,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=b.shadow.matrix,M++}i.point[g]=j,g++}else if(b.isHemisphereLight){const j=e.get(b);j.skyColor.copy(b.color).multiplyScalar(z),j.groundColor.copy(b.groundColor).multiplyScalar(z),i.hemi[p]=j,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const U=i.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==x||U.numPointShadows!==M||U.numSpotShadows!==w||U.numSpotMaps!==I||U.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,U.directionalLength=f,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=x,U.numPointShadows=M,U.numSpotShadows=w,U.numSpotMaps=I,U.numLightProbes=P,i.version=ES++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const M=c[p];if(M.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(M.isSpotLight){const w=i.spot[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const w=i.point[u];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const w=i.hemi[_];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function gf(n){const e=new CS(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function RS(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new gf(n),e.set(s,[o])):r>=a.length?(o=new gf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class PS extends ca{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DS extends ca{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const LS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IS=`uniform sampler2D shadow_pass;
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
}`;function US(n,e,t){let i=new _m;const s=new we,r=new we,a=new Qt,o=new PS({depthPacking:hv}),l=new DS,c={},h=t.maxTextureSize,d={[As]:$n,[$n]:As,[si]:si},u=new ss({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:LS,fragmentShader:IS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new en;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Dt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kp;let p=this.type;this.render=function(C,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const ie=n.getRenderTarget(),S=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Ts),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=p!==Zi&&this.type===Zi,Y=p===Zi&&this.type!==Zi;for(let Z=0,j=C.length;Z<j;Z++){const F=C[Z],te=F.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;s.copy(te.mapSize);const pe=te.getFrameExtents();if(s.multiply(pe),r.copy(te.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pe.x),s.x=r.x*pe.x,te.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pe.y),s.y=r.y*pe.y,te.mapSize.y=r.y)),te.map===null||z===!0||Y===!0){const oe=this.type!==Zi?{minFilter:kt,magFilter:kt}:{};te.map!==null&&te.map.dispose(),te.map=new Ai(s.x,s.y,oe),te.map.texture.name=F.name+".shadowMap",te.camera.updateProjectionMatrix()}n.setRenderTarget(te.map),n.clear();const le=te.getViewportCount();for(let oe=0;oe<le;oe++){const me=te.getViewport(oe);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),H.viewport(a),te.updateMatrices(F,oe),i=te.getFrustum(),w(P,U,te.camera,F,this.type)}te.isPointLightShadow!==!0&&this.type===Zi&&x(te,U),te.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(ie,S,b)};function x(C,P){const U=e.update(_);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ai(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,U,u,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,U,f,_,null)}function M(C,P,U,ie){let S=null;const b=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)S=b;else if(S=U.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const H=S.uuid,z=P.uuid;let Y=c[H];Y===void 0&&(Y={},c[H]=Y);let Z=Y[z];Z===void 0&&(Z=S.clone(),Y[z]=Z,P.addEventListener("dispose",I)),S=Z}if(S.visible=P.visible,S.wireframe=P.wireframe,ie===Zi?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:d[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=n.properties.get(S);H.light=U}return S}function w(C,P,U,ie,S){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Zi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const z=e.update(C),Y=C.material;if(Array.isArray(Y)){const Z=z.groups;for(let j=0,F=Z.length;j<F;j++){const te=Z[j],pe=Y[te.materialIndex];if(pe&&pe.visible){const le=M(C,pe,ie,S);C.onBeforeShadow(n,C,P,U,z,le,te),n.renderBufferDirect(U,null,z,le,C,te),C.onAfterShadow(n,C,P,U,z,le,te)}}}else if(Y.visible){const Z=M(C,Y,ie,S);C.onBeforeShadow(n,C,P,U,z,Z,null),n.renderBufferDirect(U,null,z,Z,C,null),C.onAfterShadow(n,C,P,U,z,Z,null)}}const H=C.children;for(let z=0,Y=H.length;z<Y;z++)w(H[z],P,U,ie,S)}function I(C){C.target.removeEventListener("dispose",I);for(const U in c){const ie=c[U],S=C.target.uuid;S in ie&&(ie[S].dispose(),delete ie[S])}}}const FS={[lh]:ch,[hh]:fh,[uh]:ph,[Qr]:dh,[ch]:lh,[fh]:hh,[ph]:uh,[dh]:Qr};function NS(n){function e(){let G=!1;const Ae=new Qt;let ae=null;const ue=new Qt(0,0,0,0);return{setMask:function(Re){ae!==Re&&!G&&(n.colorMask(Re,Re,Re,Re),ae=Re)},setLocked:function(Re){G=Re},setClear:function(Re,Ie,mt,Yt,Pn){Pn===!0&&(Re*=Yt,Ie*=Yt,mt*=Yt),Ae.set(Re,Ie,mt,Yt),ue.equals(Ae)===!1&&(n.clearColor(Re,Ie,mt,Yt),ue.copy(Ae))},reset:function(){G=!1,ae=null,ue.set(-1,0,0,0)}}}function t(){let G=!1,Ae=!1,ae=null,ue=null,Re=null;return{setReversed:function(Ie){Ae=Ie},setTest:function(Ie){Ie?xe(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(Ie){ae!==Ie&&!G&&(n.depthMask(Ie),ae=Ie)},setFunc:function(Ie){if(Ae&&(Ie=FS[Ie]),ue!==Ie){switch(Ie){case lh:n.depthFunc(n.NEVER);break;case ch:n.depthFunc(n.ALWAYS);break;case hh:n.depthFunc(n.LESS);break;case Qr:n.depthFunc(n.LEQUAL);break;case uh:n.depthFunc(n.EQUAL);break;case dh:n.depthFunc(n.GEQUAL);break;case fh:n.depthFunc(n.GREATER);break;case ph:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Ie}},setLocked:function(Ie){G=Ie},setClear:function(Ie){Re!==Ie&&(n.clearDepth(Ie),Re=Ie)},reset:function(){G=!1,ae=null,ue=null,Re=null}}}function i(){let G=!1,Ae=null,ae=null,ue=null,Re=null,Ie=null,mt=null,Yt=null,Pn=null;return{setTest:function(vt){G||(vt?xe(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(vt){Ae!==vt&&!G&&(n.stencilMask(vt),Ae=vt)},setFunc:function(vt,Dn,Sn){(ae!==vt||ue!==Dn||Re!==Sn)&&(n.stencilFunc(vt,Dn,Sn),ae=vt,ue=Dn,Re=Sn)},setOp:function(vt,Dn,Sn){(Ie!==vt||mt!==Dn||Yt!==Sn)&&(n.stencilOp(vt,Dn,Sn),Ie=vt,mt=Dn,Yt=Sn)},setLocked:function(vt){G=vt},setClear:function(vt){Pn!==vt&&(n.clearStencil(vt),Pn=vt)},reset:function(){G=!1,Ae=null,ae=null,ue=null,Re=null,Ie=null,mt=null,Yt=null,Pn=null}}}const s=new e,r=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],f=null,g=!1,_=null,m=null,p=null,x=null,M=null,w=null,I=null,C=new at(0,0,0),P=0,U=!1,ie=null,S=null,b=null,H=null,z=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,j=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(F)[1]),Z=j>=1):F.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),Z=j>=2);let te=null,pe={};const le=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),me=new Qt().fromArray(le),he=new Qt().fromArray(oe);function ne(G,Ae,ae,ue){const Re=new Uint8Array(4),Ie=n.createTexture();n.bindTexture(G,Ie),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let mt=0;mt<ae;mt++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(Ae+mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return Ie}const fe={};fe[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),xe(n.DEPTH_TEST),r.setFunc(Qr),ot(!1),ut(bd),xe(n.CULL_FACE),N(Ts);function xe(G){c[G]!==!0&&(n.enable(G),c[G]=!0)}function ge(G){c[G]!==!1&&(n.disable(G),c[G]=!1)}function Xe(G,Ae){return h[G]!==Ae?(n.bindFramebuffer(G,Ae),h[G]=Ae,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ae),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Fe(G,Ae){let ae=u,ue=!1;if(G){ae=d.get(Ae),ae===void 0&&(ae=[],d.set(Ae,ae));const Re=G.textures;if(ae.length!==Re.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let Ie=0,mt=Re.length;Ie<mt;Ie++)ae[Ie]=n.COLOR_ATTACHMENT0+Ie;ae.length=Re.length,ue=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,ue=!0);ue&&n.drawBuffers(ae)}function He(G){return f!==G?(n.useProgram(G),f=G,!0):!1}const rt={[Ws]:n.FUNC_ADD,[Ng]:n.FUNC_SUBTRACT,[kg]:n.FUNC_REVERSE_SUBTRACT};rt[Og]=n.MIN,rt[zg]=n.MAX;const nt={[Bg]:n.ZERO,[Hg]:n.ONE,[Vg]:n.SRC_COLOR,[ah]:n.SRC_ALPHA,[Yg]:n.SRC_ALPHA_SATURATE,[Xg]:n.DST_COLOR,[Wg]:n.DST_ALPHA,[Gg]:n.ONE_MINUS_SRC_COLOR,[oh]:n.ONE_MINUS_SRC_ALPHA,[qg]:n.ONE_MINUS_DST_COLOR,[$g]:n.ONE_MINUS_DST_ALPHA,[jg]:n.CONSTANT_COLOR,[Kg]:n.ONE_MINUS_CONSTANT_COLOR,[Zg]:n.CONSTANT_ALPHA,[Jg]:n.ONE_MINUS_CONSTANT_ALPHA};function N(G,Ae,ae,ue,Re,Ie,mt,Yt,Pn,vt){if(G===Ts){g===!0&&(ge(n.BLEND),g=!1);return}if(g===!1&&(xe(n.BLEND),g=!0),G!==Fg){if(G!==_||vt!==U){if((m!==Ws||M!==Ws)&&(n.blendEquation(n.FUNC_ADD),m=Ws,M=Ws),vt)switch(G){case js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rh:n.blendFunc(n.ONE,n.ONE);break;case Td:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ed:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Td:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ed:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}p=null,x=null,w=null,I=null,C.set(0,0,0),P=0,_=G,U=vt}return}Re=Re||Ae,Ie=Ie||ae,mt=mt||ue,(Ae!==m||Re!==M)&&(n.blendEquationSeparate(rt[Ae],rt[Re]),m=Ae,M=Re),(ae!==p||ue!==x||Ie!==w||mt!==I)&&(n.blendFuncSeparate(nt[ae],nt[ue],nt[Ie],nt[mt]),p=ae,x=ue,w=Ie,I=mt),(Yt.equals(C)===!1||Pn!==P)&&(n.blendColor(Yt.r,Yt.g,Yt.b,Pn),C.copy(Yt),P=Pn),_=G,U=!1}function qt(G,Ae){G.side===si?ge(n.CULL_FACE):xe(n.CULL_FACE);let ae=G.side===$n;Ae&&(ae=!ae),ot(ae),G.blending===js&&G.transparent===!1?N(Ts):N(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),s.setMask(G.colorWrite);const ue=G.stencilWrite;a.setTest(ue),ue&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),bt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function ot(G){ie!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),ie=G)}function ut(G){G!==Lg?(xe(n.CULL_FACE),G!==S&&(G===bd?n.cullFace(n.BACK):G===Ig?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),S=G}function Ke(G){G!==b&&(Z&&n.lineWidth(G),b=G)}function bt(G,Ae,ae){G?(xe(n.POLYGON_OFFSET_FILL),(H!==Ae||z!==ae)&&(n.polygonOffset(Ae,ae),H=Ae,z=ae)):ge(n.POLYGON_OFFSET_FILL)}function je(G){G?xe(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function D(G){G===void 0&&(G=n.TEXTURE0+Y-1),te!==G&&(n.activeTexture(G),te=G)}function E(G,Ae,ae){ae===void 0&&(te===null?ae=n.TEXTURE0+Y-1:ae=te);let ue=pe[ae];ue===void 0&&(ue={type:void 0,texture:void 0},pe[ae]=ue),(ue.type!==G||ue.texture!==Ae)&&(te!==ae&&(n.activeTexture(ae),te=ae),n.bindTexture(G,Ae||fe[G]),ue.type=G,ue.texture=Ae)}function Q(){const G=pe[te];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ce(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(G){me.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),me.copy(G))}function Ee(G){he.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),he.copy(G))}function et(G,Ae){let ae=l.get(Ae);ae===void 0&&(ae=new WeakMap,l.set(Ae,ae));let ue=ae.get(G);ue===void 0&&(ue=n.getUniformBlockIndex(Ae,G.name),ae.set(G,ue))}function tt(G,Ae){const ue=l.get(Ae).get(G);o.get(Ae)!==ue&&(n.uniformBlockBinding(Ae,ue,G.__bindingPointIndex),o.set(Ae,ue))}function yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},te=null,pe={},h={},d=new WeakMap,u=[],f=null,g=!1,_=null,m=null,p=null,x=null,M=null,w=null,I=null,C=new at(0,0,0),P=0,U=!1,ie=null,S=null,b=null,H=null,z=null,me.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:xe,disable:ge,bindFramebuffer:Xe,drawBuffers:Fe,useProgram:He,setBlending:N,setMaterial:qt,setFlipSided:ot,setCullFace:ut,setLineWidth:Ke,setPolygonOffset:bt,setScissorTest:je,activeTexture:D,bindTexture:E,unbindTexture:Q,compressedTexImage2D:ce,compressedTexImage3D:re,texImage2D:Le,texImage3D:Ve,updateUBOMapping:et,uniformBlockBinding:tt,texStorage2D:lt,texStorage3D:_e,texSubImage2D:$,texSubImage3D:be,compressedTexSubImage2D:Me,compressedTexSubImage3D:De,scissor:We,viewport:Ee,reset:yt}}function vf(n,e,t,i){const s=kS(i);switch(t){case nm:return n*e;case sm:return n*e;case rm:return n*e*2;case gu:return n*e/s.components*s.byteLength;case vu:return n*e/s.components*s.byteLength;case am:return n*e*2/s.components*s.byteLength;case _u:return n*e*2/s.components*s.byteLength;case im:return n*e*3/s.components*s.byteLength;case An:return n*e*4/s.components*s.byteLength;case xu:return n*e*4/s.components*s.byteLength;case el:case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nl:case il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mh:case Sh:return Math.max(n,16)*Math.max(e,8)/4;case xh:case yh:return Math.max(n,8)*Math.max(e,8)/2;case wh:case bh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Th:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case kh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case sl:case Bh:case Hh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case om:case Vh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Gh:case Wh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kS(n){switch(n){case ns:case Qp:return{byteLength:1,components:1};case Qa:case em:case lo:return{byteLength:2,components:1};case pu:case mu:return{byteLength:2,components:4};case Qs:case fu:case Un:return{byteLength:4,components:1};case tm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function OS(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,E){return f?new OffscreenCanvas(D,E):ml("canvas")}function _(D,E,Q){let ce=1;const re=je(D);if((re.width>Q||re.height>Q)&&(ce=Q/Math.max(re.width,re.height)),ce<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const $=Math.floor(ce*re.width),be=Math.floor(ce*re.height);d===void 0&&(d=g($,be));const Me=E?g($,be):d;return Me.width=$,Me.height=be,Me.getContext("2d").drawImage(D,0,0,$,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+$+"x"+be+")."),Me}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==kt&&D.minFilter!==mi}function p(D){n.generateMipmap(D)}function x(D,E,Q,ce,re=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let $=E;if(E===n.RED&&(Q===n.FLOAT&&($=n.R32F),Q===n.HALF_FLOAT&&($=n.R16F),Q===n.UNSIGNED_BYTE&&($=n.R8)),E===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&($=n.R8UI),Q===n.UNSIGNED_SHORT&&($=n.R16UI),Q===n.UNSIGNED_INT&&($=n.R32UI),Q===n.BYTE&&($=n.R8I),Q===n.SHORT&&($=n.R16I),Q===n.INT&&($=n.R32I)),E===n.RG&&(Q===n.FLOAT&&($=n.RG32F),Q===n.HALF_FLOAT&&($=n.RG16F),Q===n.UNSIGNED_BYTE&&($=n.RG8)),E===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&($=n.RG8UI),Q===n.UNSIGNED_SHORT&&($=n.RG16UI),Q===n.UNSIGNED_INT&&($=n.RG32UI),Q===n.BYTE&&($=n.RG8I),Q===n.SHORT&&($=n.RG16I),Q===n.INT&&($=n.RG32I)),E===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&($=n.RGB8UI),Q===n.UNSIGNED_SHORT&&($=n.RGB16UI),Q===n.UNSIGNED_INT&&($=n.RGB32UI),Q===n.BYTE&&($=n.RGB8I),Q===n.SHORT&&($=n.RGB16I),Q===n.INT&&($=n.RGB32I)),E===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&($=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&($=n.RGBA16UI),Q===n.UNSIGNED_INT&&($=n.RGBA32UI),Q===n.BYTE&&($=n.RGBA8I),Q===n.SHORT&&($=n.RGBA16I),Q===n.INT&&($=n.RGBA32I)),E===n.RGB&&Q===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),E===n.RGBA){const be=re?ul:Et.getTransfer(ce);Q===n.FLOAT&&($=n.RGBA32F),Q===n.HALF_FLOAT&&($=n.RGBA16F),Q===n.UNSIGNED_BYTE&&($=be===Vt?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(D,E){let Q;return D?E===null||E===Qs||E===na?Q=n.DEPTH24_STENCIL8:E===Un?Q=n.DEPTH32F_STENCIL8:E===Qa&&(Q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Qs||E===na?Q=n.DEPTH_COMPONENT24:E===Un?Q=n.DEPTH_COMPONENT32F:E===Qa&&(Q=n.DEPTH_COMPONENT16),Q}function w(D,E){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==kt&&D.minFilter!==mi?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function I(D){const E=D.target;E.removeEventListener("dispose",I),P(E),E.isVideoTexture&&h.delete(E)}function C(D){const E=D.target;E.removeEventListener("dispose",C),ie(E)}function P(D){const E=i.get(D);if(E.__webglInit===void 0)return;const Q=D.source,ce=u.get(Q);if(ce){const re=ce[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&U(D),Object.keys(ce).length===0&&u.delete(Q)}i.remove(D)}function U(D){const E=i.get(D);n.deleteTexture(E.__webglTexture);const Q=D.source,ce=u.get(Q);delete ce[E.__cacheKey],a.memory.textures--}function ie(D){const E=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(E.__webglFramebuffer[ce]))for(let re=0;re<E.__webglFramebuffer[ce].length;re++)n.deleteFramebuffer(E.__webglFramebuffer[ce][re]);else n.deleteFramebuffer(E.__webglFramebuffer[ce]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ce])}else{if(Array.isArray(E.__webglFramebuffer))for(let ce=0;ce<E.__webglFramebuffer.length;ce++)n.deleteFramebuffer(E.__webglFramebuffer[ce]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ce=0;ce<E.__webglColorRenderbuffer.length;ce++)E.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ce]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=D.textures;for(let ce=0,re=Q.length;ce<re;ce++){const $=i.get(Q[ce]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(Q[ce])}i.remove(D)}let S=0;function b(){S=0}function H(){const D=S;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),S+=1,D}function z(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function Y(D,E){const Q=i.get(D);if(D.isVideoTexture&&Ke(D),D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){const ce=D.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(Q,D,E);return}}t.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+E)}function Z(D,E){const Q=i.get(D);if(D.version>0&&Q.__version!==D.version){he(Q,D,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+E)}function j(D,E){const Q=i.get(D);if(D.version>0&&Q.__version!==D.version){he(Q,D,E);return}t.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+E)}function F(D,E){const Q=i.get(D);if(D.version>0&&Q.__version!==D.version){ne(Q,D,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+E)}const te={[vh]:n.REPEAT,[Gn]:n.CLAMP_TO_EDGE,[_h]:n.MIRRORED_REPEAT},pe={[kt]:n.NEAREST,[lv]:n.NEAREST_MIPMAP_NEAREST,[xo]:n.NEAREST_MIPMAP_LINEAR,[mi]:n.LINEAR,[fc]:n.LINEAR_MIPMAP_NEAREST,[Ss]:n.LINEAR_MIPMAP_LINEAR},le={[fv]:n.NEVER,[xv]:n.ALWAYS,[pv]:n.LESS,[lm]:n.LEQUAL,[mv]:n.EQUAL,[_v]:n.GEQUAL,[gv]:n.GREATER,[vv]:n.NOTEQUAL};function oe(D,E){if(E.type===Un&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===mi||E.magFilter===fc||E.magFilter===xo||E.magFilter===Ss||E.minFilter===mi||E.minFilter===fc||E.minFilter===xo||E.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,te[E.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,te[E.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,te[E.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,pe[E.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,pe[E.minFilter]),E.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,le[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===kt||E.minFilter!==xo&&E.minFilter!==Ss||E.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function me(D,E){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",I));const ce=E.source;let re=u.get(ce);re===void 0&&(re={},u.set(ce,re));const $=z(E);if($!==D.__cacheKey){re[$]===void 0&&(re[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),re[$].usedTimes++;const be=re[D.__cacheKey];be!==void 0&&(re[D.__cacheKey].usedTimes--,be.usedTimes===0&&U(E)),D.__cacheKey=$,D.__webglTexture=re[$].texture}return Q}function he(D,E,Q){let ce=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ce=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ce=n.TEXTURE_3D);const re=me(D,E),$=E.source;t.bindTexture(ce,D.__webglTexture,n.TEXTURE0+Q);const be=i.get($);if($.version!==be.__version||re===!0){t.activeTexture(n.TEXTURE0+Q);const Me=Et.getPrimaries(Et.workingColorSpace),De=E.colorSpace===ys?null:Et.getPrimaries(E.colorSpace),lt=E.colorSpace===ys||Me===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let _e=_(E.image,!1,s.maxTextureSize);_e=bt(E,_e);const Le=r.convert(E.format,E.colorSpace),Ve=r.convert(E.type);let We=x(E.internalFormat,Le,Ve,E.colorSpace,E.isVideoTexture);oe(ce,E);let Ee;const et=E.mipmaps,tt=E.isVideoTexture!==!0,yt=be.__version===void 0||re===!0,G=$.dataReady,Ae=w(E,_e);if(E.isDepthTexture)We=M(E.format===ia,E.type),yt&&(tt?t.texStorage2D(n.TEXTURE_2D,1,We,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,We,_e.width,_e.height,0,Le,Ve,null));else if(E.isDataTexture)if(et.length>0){tt&&yt&&t.texStorage2D(n.TEXTURE_2D,Ae,We,et[0].width,et[0].height);for(let ae=0,ue=et.length;ae<ue;ae++)Ee=et[ae],tt?G&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Ee.width,Ee.height,Le,Ve,Ee.data):t.texImage2D(n.TEXTURE_2D,ae,We,Ee.width,Ee.height,0,Le,Ve,Ee.data);E.generateMipmaps=!1}else tt?(yt&&t.texStorage2D(n.TEXTURE_2D,Ae,We,_e.width,_e.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e.width,_e.height,Le,Ve,_e.data)):t.texImage2D(n.TEXTURE_2D,0,We,_e.width,_e.height,0,Le,Ve,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){tt&&yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,We,et[0].width,et[0].height,_e.depth);for(let ae=0,ue=et.length;ae<ue;ae++)if(Ee=et[ae],E.format!==An)if(Le!==null)if(tt){if(G)if(E.layerUpdates.size>0){const Re=vf(Ee.width,Ee.height,E.format,E.type);for(const Ie of E.layerUpdates){const mt=Ee.data.subarray(Ie*Re/Ee.data.BYTES_PER_ELEMENT,(Ie+1)*Re/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Ie,Ee.width,Ee.height,1,Le,mt,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Ee.width,Ee.height,_e.depth,Le,Ee.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,We,Ee.width,Ee.height,_e.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Ee.width,Ee.height,_e.depth,Le,Ve,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,We,Ee.width,Ee.height,_e.depth,0,Le,Ve,Ee.data)}else{tt&&yt&&t.texStorage2D(n.TEXTURE_2D,Ae,We,et[0].width,et[0].height);for(let ae=0,ue=et.length;ae<ue;ae++)Ee=et[ae],E.format!==An?Le!==null?tt?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Ee.width,Ee.height,Le,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,We,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?G&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Ee.width,Ee.height,Le,Ve,Ee.data):t.texImage2D(n.TEXTURE_2D,ae,We,Ee.width,Ee.height,0,Le,Ve,Ee.data)}else if(E.isDataArrayTexture)if(tt){if(yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,We,_e.width,_e.height,_e.depth),G)if(E.layerUpdates.size>0){const ae=vf(_e.width,_e.height,E.format,E.type);for(const ue of E.layerUpdates){const Re=_e.data.subarray(ue*ae/_e.data.BYTES_PER_ELEMENT,(ue+1)*ae/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,_e.width,_e.height,1,Le,Ve,Re)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Le,Ve,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,_e.width,_e.height,_e.depth,0,Le,Ve,_e.data);else if(E.isData3DTexture)tt?(yt&&t.texStorage3D(n.TEXTURE_3D,Ae,We,_e.width,_e.height,_e.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Le,Ve,_e.data)):t.texImage3D(n.TEXTURE_3D,0,We,_e.width,_e.height,_e.depth,0,Le,Ve,_e.data);else if(E.isFramebufferTexture){if(yt)if(tt)t.texStorage2D(n.TEXTURE_2D,Ae,We,_e.width,_e.height);else{let ae=_e.width,ue=_e.height;for(let Re=0;Re<Ae;Re++)t.texImage2D(n.TEXTURE_2D,Re,We,ae,ue,0,Le,Ve,null),ae>>=1,ue>>=1}}else if(et.length>0){if(tt&&yt){const ae=je(et[0]);t.texStorage2D(n.TEXTURE_2D,Ae,We,ae.width,ae.height)}for(let ae=0,ue=et.length;ae<ue;ae++)Ee=et[ae],tt?G&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Le,Ve,Ee):t.texImage2D(n.TEXTURE_2D,ae,We,Le,Ve,Ee);E.generateMipmaps=!1}else if(tt){if(yt){const ae=je(_e);t.texStorage2D(n.TEXTURE_2D,Ae,We,ae.width,ae.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,Ve,_e)}else t.texImage2D(n.TEXTURE_2D,0,We,Le,Ve,_e);m(E)&&p(ce),be.__version=$.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function ne(D,E,Q){if(E.image.length!==6)return;const ce=me(D,E),re=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+Q);const $=i.get(re);if(re.version!==$.__version||ce===!0){t.activeTexture(n.TEXTURE0+Q);const be=Et.getPrimaries(Et.workingColorSpace),Me=E.colorSpace===ys?null:Et.getPrimaries(E.colorSpace),De=E.colorSpace===ys||be===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const lt=E.isCompressedTexture||E.image[0].isCompressedTexture,_e=E.image[0]&&E.image[0].isDataTexture,Le=[];for(let ue=0;ue<6;ue++)!lt&&!_e?Le[ue]=_(E.image[ue],!0,s.maxCubemapSize):Le[ue]=_e?E.image[ue].image:E.image[ue],Le[ue]=bt(E,Le[ue]);const Ve=Le[0],We=r.convert(E.format,E.colorSpace),Ee=r.convert(E.type),et=x(E.internalFormat,We,Ee,E.colorSpace),tt=E.isVideoTexture!==!0,yt=$.__version===void 0||ce===!0,G=re.dataReady;let Ae=w(E,Ve);oe(n.TEXTURE_CUBE_MAP,E);let ae;if(lt){tt&&yt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,et,Ve.width,Ve.height);for(let ue=0;ue<6;ue++){ae=Le[ue].mipmaps;for(let Re=0;Re<ae.length;Re++){const Ie=ae[Re];E.format!==An?We!==null?tt?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,0,0,Ie.width,Ie.height,We,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,et,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,0,0,Ie.width,Ie.height,We,Ee,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,et,Ie.width,Ie.height,0,We,Ee,Ie.data)}}}else{if(ae=E.mipmaps,tt&&yt){ae.length>0&&Ae++;const ue=je(Le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,et,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(_e){tt?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Le[ue].width,Le[ue].height,We,Ee,Le[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,et,Le[ue].width,Le[ue].height,0,We,Ee,Le[ue].data);for(let Re=0;Re<ae.length;Re++){const mt=ae[Re].image[ue].image;tt?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,0,0,mt.width,mt.height,We,Ee,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,et,mt.width,mt.height,0,We,Ee,mt.data)}}else{tt?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,We,Ee,Le[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,et,We,Ee,Le[ue]);for(let Re=0;Re<ae.length;Re++){const Ie=ae[Re];tt?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,0,0,We,Ee,Ie.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,et,We,Ee,Ie.image[ue])}}}m(E)&&p(n.TEXTURE_CUBE_MAP),$.__version=re.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function fe(D,E,Q,ce,re,$){const be=r.convert(Q.format,Q.colorSpace),Me=r.convert(Q.type),De=x(Q.internalFormat,be,Me,Q.colorSpace);if(!i.get(E).__hasExternalTextures){const _e=Math.max(1,E.width>>$),Le=Math.max(1,E.height>>$);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,$,De,_e,Le,E.depth,0,be,Me,null):t.texImage2D(re,$,De,_e,Le,0,be,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),ut(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,re,i.get(Q).__webglTexture,0,ot(E)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ce,re,i.get(Q).__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(D,E,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,D),E.depthBuffer){const ce=E.depthTexture,re=ce&&ce.isDepthTexture?ce.type:null,$=M(E.stencilBuffer,re),be=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=ot(E);ut(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,$,E.width,E.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,$,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,$,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,D)}else{const ce=E.textures;for(let re=0;re<ce.length;re++){const $=ce[re],be=r.convert($.format,$.colorSpace),Me=r.convert($.type),De=x($.internalFormat,be,Me,$.colorSpace),lt=ot(E);Q&&ut(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,De,E.width,E.height):ut(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,De,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,De,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const ce=i.get(E.depthTexture).__webglTexture,re=ot(E);if(E.depthTexture.format===jr)ut(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(E.depthTexture.format===ia)ut(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Xe(D){const E=i.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const ce=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ce){const re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ce.removeEventListener("dispose",re)};ce.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=ce}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");ge(E.__webglFramebuffer,D)}else if(Q){E.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ce]),E.__webglDepthbuffer[ce]===void 0)E.__webglDepthbuffer[ce]=n.createRenderbuffer(),xe(E.__webglDepthbuffer[ce],D,!1);else{const re=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[ce];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),xe(E.__webglDepthbuffer,D,!1);else{const ce=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,re)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(D,E,Q){const ce=i.get(D);E!==void 0&&fe(ce.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&Xe(D)}function He(D){const E=D.texture,Q=i.get(D),ce=i.get(E);D.addEventListener("dispose",C);const re=D.textures,$=D.isWebGLCubeRenderTarget===!0,be=re.length>1;if(be||(ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture()),ce.__version=E.version,a.memory.textures++),$){Q.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[Me]=[];for(let De=0;De<E.mipmaps.length;De++)Q.__webglFramebuffer[Me][De]=n.createFramebuffer()}else Q.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Me=0;Me<E.mipmaps.length;Me++)Q.__webglFramebuffer[Me]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(be)for(let Me=0,De=re.length;Me<De;Me++){const lt=i.get(re[Me]);lt.__webglTexture===void 0&&(lt.__webglTexture=n.createTexture(),a.memory.textures++)}if(D.samples>0&&ut(D)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Me=0;Me<re.length;Me++){const De=re[Me];Q.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[Me]);const lt=r.convert(De.format,De.colorSpace),_e=r.convert(De.type),Le=x(De.internalFormat,lt,_e,De.colorSpace,D.isXRRenderTarget===!0),Ve=ot(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Le,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Q.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(Q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),oe(n.TEXTURE_CUBE_MAP,E);for(let Me=0;Me<6;Me++)if(E.mipmaps&&E.mipmaps.length>0)for(let De=0;De<E.mipmaps.length;De++)fe(Q.__webglFramebuffer[Me][De],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De);else fe(Q.__webglFramebuffer[Me],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);m(E)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let Me=0,De=re.length;Me<De;Me++){const lt=re[Me],_e=i.get(lt);t.bindTexture(n.TEXTURE_2D,_e.__webglTexture),oe(n.TEXTURE_2D,lt),fe(Q.__webglFramebuffer,D,lt,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,0),m(lt)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Me=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,ce.__webglTexture),oe(Me,E),E.mipmaps&&E.mipmaps.length>0)for(let De=0;De<E.mipmaps.length;De++)fe(Q.__webglFramebuffer[De],D,E,n.COLOR_ATTACHMENT0,Me,De);else fe(Q.__webglFramebuffer,D,E,n.COLOR_ATTACHMENT0,Me,0);m(E)&&p(Me),t.unbindTexture()}D.depthBuffer&&Xe(D)}function rt(D){const E=D.textures;for(let Q=0,ce=E.length;Q<ce;Q++){const re=E[Q];if(m(re)){const $=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,be=i.get(re).__webglTexture;t.bindTexture($,be),p($),t.unbindTexture()}}}const nt=[],N=[];function qt(D){if(D.samples>0){if(ut(D)===!1){const E=D.textures,Q=D.width,ce=D.height;let re=n.COLOR_BUFFER_BIT;const $=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(D),Me=E.length>1;if(Me)for(let De=0;De<E.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let De=0;De<E.length;De++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),Me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[De]);const lt=i.get(E[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,lt,0)}n.blitFramebuffer(0,0,Q,ce,0,0,Q,ce,re,n.NEAREST),l===!0&&(nt.length=0,N.length=0,nt.push(n.COLOR_ATTACHMENT0+De),D.depthBuffer&&D.resolveDepthBuffer===!1&&(nt.push($),N.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let De=0;De<E.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,be.__webglColorRenderbuffer[De]);const lt=i.get(E[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,lt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const E=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function ot(D){return Math.min(s.maxSamples,D.samples)}function ut(D){const E=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ke(D){const E=a.render.frame;h.get(D)!==E&&(h.set(D,E),D.update())}function bt(D,E){const Q=D.colorSpace,ce=D.format,re=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==Rs&&Q!==ys&&(Et.getTransfer(Q)===Vt?(ce!==An||re!==ns)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),E}function je(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=b,this.setTexture2D=Y,this.setTexture2DArray=Z,this.setTexture3D=j,this.setTextureCube=F,this.rebindTextures=Fe,this.setupRenderTarget=He,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ut}function zS(n,e){function t(i,s=ys){let r;const a=Et.getTransfer(s);if(i===ns)return n.UNSIGNED_BYTE;if(i===pu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===mu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qp)return n.BYTE;if(i===em)return n.SHORT;if(i===Qa)return n.UNSIGNED_SHORT;if(i===fu)return n.INT;if(i===Qs)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===lo)return n.HALF_FLOAT;if(i===nm)return n.ALPHA;if(i===im)return n.RGB;if(i===An)return n.RGBA;if(i===sm)return n.LUMINANCE;if(i===rm)return n.LUMINANCE_ALPHA;if(i===jr)return n.DEPTH_COMPONENT;if(i===ia)return n.DEPTH_STENCIL;if(i===gu)return n.RED;if(i===vu)return n.RED_INTEGER;if(i===am)return n.RG;if(i===_u)return n.RG_INTEGER;if(i===xu)return n.RGBA_INTEGER;if(i===el||i===tl||i===nl||i===il)if(a===Vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===el)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===el)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===il)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xh||i===Mh||i===yh||i===Sh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===xh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wh||i===bh||i===Th)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===wh||i===bh)return a===Vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Th)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Eh||i===Ah||i===Ch||i===Rh||i===Ph||i===Dh||i===Lh||i===Ih||i===Uh||i===Fh||i===Nh||i===kh||i===Oh||i===zh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Eh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ah)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ch)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ph)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ih)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sl||i===Bh||i===Hh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===sl)return a===Vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===om||i===Vh||i===Gh||i===Wh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===sl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Vh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===na?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class BS extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ws extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HS={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(HS)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ws;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const VS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GS=`
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

}`;class WS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Fn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ss({vertexShader:VS,fragmentShader:GS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new lr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $S extends ar{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const _=new WS,m=t.getContextAttributes();let p=null,x=null;const M=[],w=[],I=new we;let C=null;const P=new pi;P.layers.enable(1),P.viewport=new Qt;const U=new pi;U.layers.enable(2),U.viewport=new Qt;const ie=[P,U],S=new BS;S.layers.enable(1),S.layers.enable(2);let b=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=M[ne];return fe===void 0&&(fe=new Hc,M[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=M[ne];return fe===void 0&&(fe=new Hc,M[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=M[ne];return fe===void 0&&(fe=new Hc,M[ne]=fe),fe.getHandSpace()};function z(ne){const fe=w.indexOf(ne.inputSource);if(fe===-1)return;const xe=M[fe];xe!==void 0&&(xe.update(ne.inputSource,ne.frame,c||a),xe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Y(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",Z);for(let ne=0;ne<M.length;ne++){const fe=w[ne];fe!==null&&(w[ne]=null,M[ne].disconnect(fe))}b=null,H=null,_.reset(),e.setRenderTarget(p),f=null,u=null,d=null,s=null,x=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ai(f.framebufferWidth,f.framebufferHeight,{format:An,type:ns,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,xe=null,ge=null;m.depth&&(ge=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?ia:jr,xe=m.stencil?na:Qs);const Xe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(Xe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Ai(u.textureWidth,u.textureHeight,{format:An,type:ns,depthTexture:new Mm(u.textureWidth,u.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),he.setContext(s),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(ne){for(let fe=0;fe<ne.removed.length;fe++){const xe=ne.removed[fe],ge=w.indexOf(xe);ge>=0&&(w[ge]=null,M[ge].disconnect(xe))}for(let fe=0;fe<ne.added.length;fe++){const xe=ne.added[fe];let ge=w.indexOf(xe);if(ge===-1){for(let Fe=0;Fe<M.length;Fe++)if(Fe>=w.length){w.push(xe),ge=Fe;break}else if(w[Fe]===null){w[Fe]=xe,ge=Fe;break}if(ge===-1)break}const Xe=M[ge];Xe&&Xe.connect(xe)}}const j=new O,F=new O;function te(ne,fe,xe){j.setFromMatrixPosition(fe.matrixWorld),F.setFromMatrixPosition(xe.matrixWorld);const ge=j.distanceTo(F),Xe=fe.projectionMatrix.elements,Fe=xe.projectionMatrix.elements,He=Xe[14]/(Xe[10]-1),rt=Xe[14]/(Xe[10]+1),nt=(Xe[9]+1)/Xe[5],N=(Xe[9]-1)/Xe[5],qt=(Xe[8]-1)/Xe[0],ot=(Fe[8]+1)/Fe[0],ut=He*qt,Ke=He*ot,bt=ge/(-qt+ot),je=bt*-qt;if(fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(je),ne.translateZ(bt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Xe[10]===-1)ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const D=He+bt,E=rt+bt,Q=ut-je,ce=Ke+(ge-je),re=nt*rt/E*D,$=N*rt/E*D;ne.projectionMatrix.makePerspective(Q,ce,re,$,D,E),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function pe(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let fe=ne.near,xe=ne.far;_.texture!==null&&(_.depthNear>0&&(fe=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),S.near=U.near=P.near=fe,S.far=U.far=P.far=xe,(b!==S.near||H!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,H=S.far);const ge=ne.parent,Xe=S.cameras;pe(S,ge);for(let Fe=0;Fe<Xe.length;Fe++)pe(Xe[Fe],ge);Xe.length===2?te(S,P,U):S.projectionMatrix.copy(P.projectionMatrix),le(ne,S,ge)};function le(ne,fe,xe){xe===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(xe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=eo*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(ne){l=ne,u!==null&&(u.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let oe=null;function me(ne,fe){if(h=fe.getViewerPose(c||a),g=fe,h!==null){const xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ge=!1;xe.length!==S.cameras.length&&(S.cameras.length=0,ge=!0);for(let Fe=0;Fe<xe.length;Fe++){const He=xe[Fe];let rt=null;if(f!==null)rt=f.getViewport(He);else{const N=d.getViewSubImage(u,He);rt=N.viewport,Fe===0&&(e.setRenderTargetTextures(x,N.colorTexture,u.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(x))}let nt=ie[Fe];nt===void 0&&(nt=new pi,nt.layers.enable(Fe),nt.viewport=new Qt,ie[Fe]=nt),nt.matrix.fromArray(He.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(He.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(rt.x,rt.y,rt.width,rt.height),Fe===0&&(S.matrix.copy(nt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ge===!0&&S.cameras.push(nt)}const Xe=s.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")){const Fe=d.getDepthInformation(xe[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(e,Fe,s.renderState)}}for(let xe=0;xe<M.length;xe++){const ge=w[xe],Xe=M[xe];ge!==null&&Xe!==void 0&&Xe.update(ge,fe,c||a)}oe&&oe(ne,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}const he=new xm;he.setAnimationLoop(me),this.setAnimationLoop=function(ne){oe=ne},this.dispose=function(){}}}const Bs=new is,XS=new It;function qS(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,mm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,M,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$n&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$n&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),M=x.envMap,w=x.envMapRotation;M&&(m.envMap.value=M,Bs.copy(w),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),m.envMapRotation.value.setFromMatrix4(XS.makeRotationFromEuler(Bs)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$n&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function YS(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const w=M.program;i.uniformBlockBinding(x,w)}function c(x,M){let w=s[x.id];w===void 0&&(g(x),w=h(x),s[x.id]=w,x.addEventListener("dispose",m));const I=M.program;i.updateUBOMapping(x,I);const C=e.render.frame;r[x.id]!==C&&(u(x),r[x.id]=C)}function h(x){const M=d();x.__bindingPointIndex=M;const w=n.createBuffer(),I=x.__size,C=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,w),w}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const M=s[x.id],w=x.uniforms,I=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,P=w.length;C<P;C++){const U=Array.isArray(w[C])?w[C]:[w[C]];for(let ie=0,S=U.length;ie<S;ie++){const b=U[ie];if(f(b,C,ie,I)===!0){const H=b.__offset,z=Array.isArray(b.value)?b.value:[b.value];let Y=0;for(let Z=0;Z<z.length;Z++){const j=z[Z],F=_(j);typeof j=="number"||typeof j=="boolean"?(b.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,H+Y,b.__data)):j.isMatrix3?(b.__data[0]=j.elements[0],b.__data[1]=j.elements[1],b.__data[2]=j.elements[2],b.__data[3]=0,b.__data[4]=j.elements[3],b.__data[5]=j.elements[4],b.__data[6]=j.elements[5],b.__data[7]=0,b.__data[8]=j.elements[6],b.__data[9]=j.elements[7],b.__data[10]=j.elements[8],b.__data[11]=0):(j.toArray(b.__data,Y),Y+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,M,w,I){const C=x.value,P=M+"_"+w;if(I[P]===void 0)return typeof C=="number"||typeof C=="boolean"?I[P]=C:I[P]=C.clone(),!0;{const U=I[P];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return I[P]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(x){const M=x.uniforms;let w=0;const I=16;for(let P=0,U=M.length;P<U;P++){const ie=Array.isArray(M[P])?M[P]:[M[P]];for(let S=0,b=ie.length;S<b;S++){const H=ie[S],z=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,Z=z.length;Y<Z;Y++){const j=z[Y],F=_(j),te=w%I,pe=te%F.boundary,le=te+pe;w+=pe,le!==0&&I-le<F.storage&&(w+=I-le),H.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=F.storage}}}const C=w%I;return C>0&&(w+=I-C),x.__size=w,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class jS{constructor(e={}){const{canvas:t=Nv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=di,this.toneMapping=Es,this.toneMappingExposure=1;const M=this;let w=!1,I=0,C=0,P=null,U=-1,ie=null;const S=new Qt,b=new Qt;let H=null;const z=new at(0);let Y=0,Z=t.width,j=t.height,F=1,te=null,pe=null;const le=new Qt(0,0,Z,j),oe=new Qt(0,0,Z,j);let me=!1;const he=new _m;let ne=!1,fe=!1;const xe=new It,ge=new It,Xe=new O,Fe=new Qt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function nt(){return P===null?F:1}let N=i;function qt(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${du}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),N===null){const W="webgl2";if(N=qt(W,A),N===null)throw qt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ot,ut,Ke,bt,je,D,E,Q,ce,re,$,be,Me,De,lt,_e,Le,Ve,We,Ee,et,tt,yt,G;function Ae(){ot=new ey(N),ot.init(),tt=new zS(N,ot),ut=new YM(N,ot,e,tt),Ke=new NS(N),ut.reverseDepthBuffer&&Ke.buffers.depth.setReversed(!0),bt=new iy(N),je=new yS,D=new OS(N,ot,Ke,je,ut,tt,bt),E=new KM(M),Q=new QM(M),ce=new h_(N),yt=new XM(N,ce),re=new ty(N,ce,bt,yt),$=new ry(N,re,ce,bt),We=new sy(N,ut,D),_e=new jM(je),be=new MS(M,E,Q,ot,ut,yt,_e),Me=new qS(M,je),De=new wS,lt=new RS(ot),Ve=new $M(M,E,Q,Ke,$,u,l),Le=new US(M,$,ut),G=new YS(N,bt,ut,Ke),Ee=new qM(N,ot,bt),et=new ny(N,ot,bt),bt.programs=be.programs,M.capabilities=ut,M.extensions=ot,M.properties=je,M.renderLists=De,M.shadowMap=Le,M.state=Ke,M.info=bt}Ae();const ae=new $S(M,N);this.xr=ae,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(Z,j,!1))},this.getSize=function(A){return A.set(Z,j)},this.setSize=function(A,W,K=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,j=W,t.width=Math.floor(A*F),t.height=Math.floor(W*F),K===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(Z*F,j*F).floor()},this.setDrawingBufferSize=function(A,W,K){Z=A,j=W,F=K,t.width=Math.floor(A*K),t.height=Math.floor(W*K),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,W,K,J){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,W,K,J),Ke.viewport(S.copy(le).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(oe)},this.setScissor=function(A,W,K,J){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,W,K,J),Ke.scissor(b.copy(oe).multiplyScalar(F).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(A){Ke.setScissorTest(me=A)},this.setOpaqueSort=function(A){te=A},this.setTransparentSort=function(A){pe=A},this.getClearColor=function(A){return A.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(A=!0,W=!0,K=!0){let J=0;if(A){let V=!1;if(P!==null){const ye=P.texture.format;V=ye===xu||ye===_u||ye===vu}if(V){const ye=P.texture.type,Te=ye===ns||ye===Qs||ye===Qa||ye===na||ye===pu||ye===mu,Ne=Ve.getClearColor(),Be=Ve.getClearAlpha(),Ze=Ne.r,Je=Ne.g,ze=Ne.b;Te?(f[0]=Ze,f[1]=Je,f[2]=ze,f[3]=Be,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=Ze,g[1]=Je,g[2]=ze,g[3]=Be,N.clearBufferiv(N.COLOR,0,g))}else J|=N.COLOR_BUFFER_BIT}W&&(J|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),K&&(J|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),De.dispose(),lt.dispose(),je.dispose(),E.dispose(),Q.dispose(),$.dispose(),yt.dispose(),G.dispose(),be.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",on),ae.removeEventListener("sessionend",Zn),qn.stop()};function ue(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=bt.autoReset,W=Le.enabled,K=Le.autoUpdate,J=Le.needsUpdate,V=Le.type;Ae(),bt.autoReset=A,Le.enabled=W,Le.autoUpdate=K,Le.needsUpdate=J,Le.type=V}function Ie(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function mt(A){const W=A.target;W.removeEventListener("dispose",mt),Yt(W)}function Yt(A){Pn(A),je.remove(A)}function Pn(A){const W=je.get(A).programs;W!==void 0&&(W.forEach(function(K){be.releaseProgram(K)}),A.isShaderMaterial&&be.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,K,J,V,ye){W===null&&(W=He);const Te=V.isMesh&&V.matrixWorld.determinant()<0,Ne=Hi(A,W,K,J,V);Ke.setMaterial(J,Te);let Be=K.index,Ze=1;if(J.wireframe===!0){if(Be=re.getWireframeAttribute(K),Be===void 0)return;Ze=2}const Je=K.drawRange,ze=K.attributes.position;let _t=Je.start*Ze,At=(Je.start+Je.count)*Ze;ye!==null&&(_t=Math.max(_t,ye.start*Ze),At=Math.min(At,(ye.start+ye.count)*Ze)),Be!==null?(_t=Math.max(_t,0),At=Math.min(At,Be.count)):ze!=null&&(_t=Math.max(_t,0),At=Math.min(At,ze.count));const Nt=At-_t;if(Nt<0||Nt===1/0)return;yt.setup(V,J,Ne,K,Be);let wn,gt=Ee;if(Be!==null&&(wn=ce.get(Be),gt=et,gt.setIndex(wn)),V.isMesh)J.wireframe===!0?(Ke.setLineWidth(J.wireframeLinewidth*nt()),gt.setMode(N.LINES)):gt.setMode(N.TRIANGLES);else if(V.isLine){let Ge=J.linewidth;Ge===void 0&&(Ge=1),Ke.setLineWidth(Ge*nt()),V.isLineSegments?gt.setMode(N.LINES):V.isLineLoop?gt.setMode(N.LINE_LOOP):gt.setMode(N.LINE_STRIP)}else V.isPoints?gt.setMode(N.POINTS):V.isSprite&&gt.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)gt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))gt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ge=V._multiDrawStarts,Zt=V._multiDrawCounts,it=V._multiDrawCount,Yn=Be?ce.get(Be).bytesPerElement:1,Vi=je.get(J).currentProgram.getUniforms();for(let bn=0;bn<it;bn++)Vi.setValue(N,"_gl_DrawID",bn),gt.render(Ge[bn]/Yn,Zt[bn])}else if(V.isInstancedMesh)gt.renderInstances(_t,Nt,V.count);else if(K.isInstancedBufferGeometry){const Ge=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Zt=Math.min(K.instanceCount,Ge);gt.renderInstances(_t,Nt,Zt)}else gt.render(_t,Nt)};function vt(A,W,K){A.transparent===!0&&A.side===si&&A.forceSinglePass===!1?(A.side=$n,A.needsUpdate=!0,Ps(A,W,K),A.side=As,A.needsUpdate=!0,Ps(A,W,K),A.side=si):Ps(A,W,K)}this.compile=function(A,W,K=null){K===null&&(K=A),m=lt.get(K),m.init(W),x.push(m),K.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==K&&A.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const J=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ye=V.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){const Ne=ye[Te];vt(Ne,K,V),J.add(Ne)}else vt(ye,K,V),J.add(ye)}),x.pop(),m=null,J},this.compileAsync=function(A,W,K=null){const J=this.compile(A,W,K);return new Promise(V=>{function ye(){if(J.forEach(function(Te){je.get(Te).currentProgram.isReady()&&J.delete(Te)}),J.size===0){V(A);return}setTimeout(ye,10)}ot.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Dn=null;function Sn(A){Dn&&Dn(A)}function on(){qn.stop()}function Zn(){qn.start()}const qn=new xm;qn.setAnimationLoop(Sn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(A){Dn=A,ae.setAnimationLoop(A),A===null?qn.stop():qn.start()},ae.addEventListener("sessionstart",on),ae.addEventListener("sessionend",Zn),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(W),W=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,W,P),m=lt.get(A,x.length),m.init(W),x.push(m),ge.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),he.setFromProjectionMatrix(ge),fe=this.localClippingEnabled,ne=_e.init(this.clippingPlanes,fe),_=De.get(A,p.length),_.init(),p.push(_),ae.enabled===!0&&ae.isPresenting===!0){const ye=M.xr.getDepthSensingMesh();ye!==null&&Ci(ye,W,-1/0,M.sortObjects)}Ci(A,W,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(te,pe),rt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,rt&&Ve.addToRenderList(_,A),this.info.render.frame++,ne===!0&&_e.beginShadows();const K=m.state.shadowsArray;Le.render(K,A,W),ne===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=_.opaque,V=_.transmissive;if(m.setupLights(),W.isArrayCamera){const ye=W.cameras;if(V.length>0)for(let Te=0,Ne=ye.length;Te<Ne;Te++){const Be=ye[Te];Bi(J,V,A,Be)}rt&&Ve.render(A);for(let Te=0,Ne=ye.length;Te<Ne;Te++){const Be=ye[Te];Nn(_,A,Be,Be.viewport)}}else V.length>0&&Bi(J,V,A,W),rt&&Ve.render(A),Nn(_,A,W);P!==null&&(D.updateMultisampleRenderTarget(P),D.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(M,A,W),yt.resetDefaultState(),U=-1,ie=null,x.pop(),x.length>0?(m=x[x.length-1],ne===!0&&_e.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ci(A,W,K,J){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||he.intersectsSprite(A)){J&&Fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ge);const Te=$.update(A),Ne=A.material;Ne.visible&&_.push(A,Te,Ne,K,Fe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||he.intersectsObject(A))){const Te=$.update(A),Ne=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Fe.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Fe.copy(Te.boundingSphere.center)),Fe.applyMatrix4(A.matrixWorld).applyMatrix4(ge)),Array.isArray(Ne)){const Be=Te.groups;for(let Ze=0,Je=Be.length;Ze<Je;Ze++){const ze=Be[Ze],_t=Ne[ze.materialIndex];_t&&_t.visible&&_.push(A,Te,_t,K,Fe.z,ze)}}else Ne.visible&&_.push(A,Te,Ne,K,Fe.z,null)}}const ye=A.children;for(let Te=0,Ne=ye.length;Te<Ne;Te++)Ci(ye[Te],W,K,J)}function Nn(A,W,K,J){const V=A.opaque,ye=A.transmissive,Te=A.transparent;m.setupLightsView(K),ne===!0&&_e.setGlobalState(M.clippingPlanes,K),J&&Ke.viewport(S.copy(J)),V.length>0&&vi(V,W,K),ye.length>0&&vi(ye,W,K),Te.length>0&&vi(Te,W,K),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Bi(A,W,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new Ai(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?lo:ns,minFilter:Ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const ye=m.state.transmissionRenderTarget[J.id],Te=J.viewport||S;ye.setSize(Te.z,Te.w);const Ne=M.getRenderTarget();M.setRenderTarget(ye),M.getClearColor(z),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),rt&&Ve.render(K);const Be=M.toneMapping;M.toneMapping=Es;const Ze=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),ne===!0&&_e.setGlobalState(M.clippingPlanes,J),vi(A,K,J),D.updateMultisampleRenderTarget(ye),D.updateRenderTargetMipmap(ye),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ze=0,_t=W.length;ze<_t;ze++){const At=W[ze],Nt=At.object,wn=At.geometry,gt=At.material,Ge=At.group;if(gt.side===si&&Nt.layers.test(J.layers)){const Zt=gt.side;gt.side=$n,gt.needsUpdate=!0,ga(Nt,K,J,wn,gt,Ge),gt.side=Zt,gt.needsUpdate=!0,Je=!0}}Je===!0&&(D.updateMultisampleRenderTarget(ye),D.updateRenderTargetMipmap(ye))}M.setRenderTarget(Ne),M.setClearColor(z,Y),Ze!==void 0&&(J.viewport=Ze),M.toneMapping=Be}function vi(A,W,K){const J=W.isScene===!0?W.overrideMaterial:null;for(let V=0,ye=A.length;V<ye;V++){const Te=A[V],Ne=Te.object,Be=Te.geometry,Ze=J===null?Te.material:J,Je=Te.group;Ne.layers.test(K.layers)&&ga(Ne,W,K,Be,Ze,Je)}}function ga(A,W,K,J,V,ye){A.onBeforeRender(M,W,K,J,V,ye),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(M,W,K,J,A,ye),V.transparent===!0&&V.side===si&&V.forceSinglePass===!1?(V.side=$n,V.needsUpdate=!0,M.renderBufferDirect(K,W,J,V,A,ye),V.side=As,V.needsUpdate=!0,M.renderBufferDirect(K,W,J,V,A,ye),V.side=si):M.renderBufferDirect(K,W,J,V,A,ye),A.onAfterRender(M,W,K,J,V,ye)}function Ps(A,W,K){W.isScene!==!0&&(W=He);const J=je.get(A),V=m.state.lights,ye=m.state.shadowsArray,Te=V.state.version,Ne=be.getParameters(A,V.state,ye,W,K),Be=be.getProgramCacheKey(Ne);let Ze=J.programs;J.environment=A.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(A.isMeshStandardMaterial?Q:E).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",mt),Ze=new Map,J.programs=Ze);let Je=Ze.get(Be);if(Je!==void 0){if(J.currentProgram===Je&&J.lightsStateVersion===Te)return fo(A,Ne),Je}else Ne.uniforms=be.getUniforms(A),A.onBeforeCompile(Ne,M),Je=be.acquireProgram(Ne,Be),Ze.set(Be,Je),J.uniforms=Ne.uniforms;const ze=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=_e.uniform),fo(A,Ne),J.needsLights=Ds(A),J.lightsStateVersion=Te,J.needsLights&&(ze.ambientLightColor.value=V.state.ambient,ze.lightProbe.value=V.state.probe,ze.directionalLights.value=V.state.directional,ze.directionalLightShadows.value=V.state.directionalShadow,ze.spotLights.value=V.state.spot,ze.spotLightShadows.value=V.state.spotShadow,ze.rectAreaLights.value=V.state.rectArea,ze.ltc_1.value=V.state.rectAreaLTC1,ze.ltc_2.value=V.state.rectAreaLTC2,ze.pointLights.value=V.state.point,ze.pointLightShadows.value=V.state.pointShadow,ze.hemisphereLights.value=V.state.hemi,ze.directionalShadowMap.value=V.state.directionalShadowMap,ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ze.spotShadowMap.value=V.state.spotShadowMap,ze.spotLightMatrix.value=V.state.spotLightMatrix,ze.spotLightMap.value=V.state.spotLightMap,ze.pointShadowMap.value=V.state.pointShadowMap,ze.pointShadowMatrix.value=V.state.pointShadowMatrix),J.currentProgram=Je,J.uniformsList=null,Je}function uo(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=al.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function fo(A,W){const K=je.get(A);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function Hi(A,W,K,J,V){W.isScene!==!0&&(W=He),D.resetTextureUnits();const ye=W.fog,Te=J.isMeshStandardMaterial?W.environment:null,Ne=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Rs,Be=(J.isMeshStandardMaterial?Q:E).get(J.envMap||Te),Ze=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Je=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ze=!!K.morphAttributes.position,_t=!!K.morphAttributes.normal,At=!!K.morphAttributes.color;let Nt=Es;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Nt=M.toneMapping);const wn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,gt=wn!==void 0?wn.length:0,Ge=je.get(J),Zt=m.state.lights;if(ne===!0&&(fe===!0||A!==ie)){const kn=A===ie&&J.id===U;_e.setState(J,A,kn)}let it=!1;J.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Zt.state.version||Ge.outputColorSpace!==Ne||V.isBatchedMesh&&Ge.batching===!1||!V.isBatchedMesh&&Ge.batching===!0||V.isBatchedMesh&&Ge.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ge.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ge.instancing===!1||!V.isInstancedMesh&&Ge.instancing===!0||V.isSkinnedMesh&&Ge.skinning===!1||!V.isSkinnedMesh&&Ge.skinning===!0||V.isInstancedMesh&&Ge.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ge.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ge.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ge.instancingMorph===!1&&V.morphTexture!==null||Ge.envMap!==Be||J.fog===!0&&Ge.fog!==ye||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==_e.numPlanes||Ge.numIntersection!==_e.numIntersection)||Ge.vertexAlphas!==Ze||Ge.vertexTangents!==Je||Ge.morphTargets!==ze||Ge.morphNormals!==_t||Ge.morphColors!==At||Ge.toneMapping!==Nt||Ge.morphTargetsCount!==gt)&&(it=!0):(it=!0,Ge.__version=J.version);let Yn=Ge.currentProgram;it===!0&&(Yn=Ps(J,W,V));let Vi=!1,bn=!1,ur=!1;const $t=Yn.getUniforms(),Ri=Ge.uniforms;if(Ke.useProgram(Yn.program)&&(Vi=!0,bn=!0,ur=!0),J.id!==U&&(U=J.id,bn=!0),Vi||ie!==A){ut.reverseDepthBuffer?(xe.copy(A.projectionMatrix),Ov(xe),zv(xe),$t.setValue(N,"projectionMatrix",xe)):$t.setValue(N,"projectionMatrix",A.projectionMatrix),$t.setValue(N,"viewMatrix",A.matrixWorldInverse);const kn=$t.map.cameraPosition;kn!==void 0&&kn.setValue(N,Xe.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&$t.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&$t.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),ie!==A&&(ie=A,bn=!0,ur=!0)}if(V.isSkinnedMesh){$t.setOptional(N,V,"bindMatrix"),$t.setOptional(N,V,"bindMatrixInverse");const kn=V.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),$t.setValue(N,"boneTexture",kn.boneTexture,D))}V.isBatchedMesh&&($t.setOptional(N,V,"batchingTexture"),$t.setValue(N,"batchingTexture",V._matricesTexture,D),$t.setOptional(N,V,"batchingIdTexture"),$t.setValue(N,"batchingIdTexture",V._indirectTexture,D),$t.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&$t.setValue(N,"batchingColorTexture",V._colorsTexture,D));const va=K.morphAttributes;if((va.position!==void 0||va.normal!==void 0||va.color!==void 0)&&We.update(V,K,Yn),(bn||Ge.receiveShadow!==V.receiveShadow)&&(Ge.receiveShadow=V.receiveShadow,$t.setValue(N,"receiveShadow",V.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ri.envMap.value=Be,Ri.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(Ri.envMapIntensity.value=W.environmentIntensity),bn&&($t.setValue(N,"toneMappingExposure",M.toneMappingExposure),Ge.needsLights&&Ql(Ri,ur),ye&&J.fog===!0&&Me.refreshFogUniforms(Ri,ye),Me.refreshMaterialUniforms(Ri,J,F,j,m.state.transmissionRenderTarget[A.id]),al.upload(N,uo(Ge),Ri,D)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(al.upload(N,uo(Ge),Ri,D),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&$t.setValue(N,"center",V.center),$t.setValue(N,"modelViewMatrix",V.modelViewMatrix),$t.setValue(N,"normalMatrix",V.normalMatrix),$t.setValue(N,"modelMatrix",V.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const kn=J.uniformsGroups;for(let dr=0,ec=kn.length;dr<ec;dr++){const _a=kn[dr];G.update(_a,Yn),G.bind(_a,Yn)}}return Yn}function Ql(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Ds(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,W,K){je.get(A.texture).__webglTexture=W,je.get(A.depthTexture).__webglTexture=K;const J=je.get(A);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const K=je.get(A);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,K=0){P=A,I=W,C=K;let J=!0,V=null,ye=!1,Te=!1;if(A){const Be=je.get(A);if(Be.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(N.FRAMEBUFFER,null),J=!1;else if(Be.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(Be.__hasExternalTextures)D.rebindTextures(A,je.get(A.texture).__webglTexture,je.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ze=A.depthTexture;if(Be.__boundDepthTexture!==ze){if(ze!==null&&je.has(ze)&&(A.width!==ze.image.width||A.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const Ze=A.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Te=!0);const Je=je.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[W])?V=Je[W][K]:V=Je[W],ye=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?V=je.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?V=Je[K]:V=Je,S.copy(A.viewport),b.copy(A.scissor),H=A.scissorTest}else S.copy(le).multiplyScalar(F).floor(),b.copy(oe).multiplyScalar(F).floor(),H=me;if(Ke.bindFramebuffer(N.FRAMEBUFFER,V)&&J&&Ke.drawBuffers(A,V),Ke.viewport(S),Ke.scissor(b),Ke.setScissorTest(H),ye){const Be=je.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,K)}else if(Te){const Be=je.get(A.texture),Ze=W||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.__webglTexture,K||0,Ze)}U=-1},this.readRenderTargetPixels=function(A,W,K,J,V,ye,Te){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne){Ke.bindFramebuffer(N.FRAMEBUFFER,Ne);try{const Be=A.texture,Ze=Be.format,Je=Be.type;if(!ut.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-J&&K>=0&&K<=A.height-V&&N.readPixels(W,K,J,V,tt.convert(Ze),tt.convert(Je),ye)}finally{const Be=P!==null?je.get(P).__webglFramebuffer:null;Ke.bindFramebuffer(N.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,W,K,J,V,ye,Te){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne){const Be=A.texture,Ze=Be.format,Je=Be.type;if(!ut.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-J&&K>=0&&K<=A.height-V){Ke.bindFramebuffer(N.FRAMEBUFFER,Ne);const ze=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ze),N.bufferData(N.PIXEL_PACK_BUFFER,ye.byteLength,N.STREAM_READ),N.readPixels(W,K,J,V,tt.convert(Ze),tt.convert(Je),0);const _t=P!==null?je.get(P).__webglFramebuffer:null;Ke.bindFramebuffer(N.FRAMEBUFFER,_t);const At=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await kv(N,At,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ze),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ye),N.deleteBuffer(ze),N.deleteSync(At),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,K=0){A.isTexture!==!0&&(rl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const J=Math.pow(2,-K),V=Math.floor(A.image.width*J),ye=Math.floor(A.image.height*J),Te=W!==null?W.x:0,Ne=W!==null?W.y:0;D.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,Te,Ne,V,ye),Ke.unbindTexture()},this.copyTextureToTexture=function(A,W,K=null,J=null,V=0){A.isTexture!==!0&&(rl("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,A=arguments[1],W=arguments[2],V=arguments[3]||0,K=null);let ye,Te,Ne,Be,Ze,Je;K!==null?(ye=K.max.x-K.min.x,Te=K.max.y-K.min.y,Ne=K.min.x,Be=K.min.y):(ye=A.image.width,Te=A.image.height,Ne=0,Be=0),J!==null?(Ze=J.x,Je=J.y):(Ze=0,Je=0);const ze=tt.convert(W.format),_t=tt.convert(W.type);D.setTexture2D(W,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);const At=N.getParameter(N.UNPACK_ROW_LENGTH),Nt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),wn=N.getParameter(N.UNPACK_SKIP_PIXELS),gt=N.getParameter(N.UNPACK_SKIP_ROWS),Ge=N.getParameter(N.UNPACK_SKIP_IMAGES),Zt=A.isCompressedTexture?A.mipmaps[V]:A.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Zt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Zt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ne),N.pixelStorei(N.UNPACK_SKIP_ROWS,Be),A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,V,Ze,Je,ye,Te,ze,_t,Zt.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,V,Ze,Je,Zt.width,Zt.height,ze,Zt.data):N.texSubImage2D(N.TEXTURE_2D,V,Ze,Je,ye,Te,ze,_t,Zt),N.pixelStorei(N.UNPACK_ROW_LENGTH,At),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Nt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,wn),N.pixelStorei(N.UNPACK_SKIP_ROWS,gt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ge),V===0&&W.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ke.unbindTexture()},this.copyTextureToTexture3D=function(A,W,K=null,J=null,V=0){A.isTexture!==!0&&(rl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,J=arguments[1]||null,A=arguments[2],W=arguments[3],V=arguments[4]||0);let ye,Te,Ne,Be,Ze,Je,ze,_t,At;const Nt=A.isCompressedTexture?A.mipmaps[V]:A.image;K!==null?(ye=K.max.x-K.min.x,Te=K.max.y-K.min.y,Ne=K.max.z-K.min.z,Be=K.min.x,Ze=K.min.y,Je=K.min.z):(ye=Nt.width,Te=Nt.height,Ne=Nt.depth,Be=0,Ze=0,Je=0),J!==null?(ze=J.x,_t=J.y,At=J.z):(ze=0,_t=0,At=0);const wn=tt.convert(W.format),gt=tt.convert(W.type);let Ge;if(W.isData3DTexture)D.setTexture3D(W,0),Ge=N.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)D.setTexture2DArray(W,0),Ge=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);const Zt=N.getParameter(N.UNPACK_ROW_LENGTH),it=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Yn=N.getParameter(N.UNPACK_SKIP_PIXELS),Vi=N.getParameter(N.UNPACK_SKIP_ROWS),bn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Nt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Nt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Be),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ze),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Je),A.isDataTexture||A.isData3DTexture?N.texSubImage3D(Ge,V,ze,_t,At,ye,Te,Ne,wn,gt,Nt.data):W.isCompressedArrayTexture?N.compressedTexSubImage3D(Ge,V,ze,_t,At,ye,Te,Ne,wn,Nt.data):N.texSubImage3D(Ge,V,ze,_t,At,ye,Te,Ne,wn,gt,Nt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Zt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,it),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Yn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Vi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,bn),V===0&&W.generateMipmaps&&N.generateMipmap(Ge),Ke.unbindTexture()},this.initRenderTarget=function(A){je.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),Ke.unbindTexture()},this.resetState=function(){I=0,C=0,P=null,Ke.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Mu?"display-p3":"srgb",t.unpackColorSpace=Et.workingColorSpace===Ul?"display-p3":"srgb"}}class kl extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bu extends Fn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=kt,h=kt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xh extends Cn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Nr=new It,_f=new It,Bo=[],xf=new ki,KS=new It,Ra=new Dt,Pa=new Oi;class ZS extends Dt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,KS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Nr),xf.copy(e.boundingBox).applyMatrix4(Nr),this.boundingBox.union(xf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Nr),Pa.copy(e.boundingSphere).applyMatrix4(Nr),this.boundingSphere.union(Pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ra.geometry=this.geometry,Ra.material=this.material,Ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(i),e.ray.intersectsSphere(Pa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Nr),_f.multiplyMatrices(i,Nr),Ra.matrixWorld=_f,Ra.raycast(e,Bo);for(let a=0,o=Bo.length;a<o;a++){const l=Bo[a];l.instanceId=r,l.object=this,t.push(l)}Bo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new bu(new Float32Array(s*this.count),s,this.count,gu,Un));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Tm extends ca{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gl=new O,vl=new O,Mf=new It,Da=new co,Ho=new Oi,Vc=new O,yf=new O;class Em extends Xn{constructor(e=new en,t=new Tm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)gl.fromBufferAttribute(t,s-1),vl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=gl.distanceTo(vl);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;Mf.copy(s).invert(),Da.copy(e.ray).applyMatrix4(Mf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),x=h.getX(_+1),M=Vo(this,e,Da,l,p,x);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Vo(this,e,Da,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=Vo(this,e,Da,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Vo(this,e,Da,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Vo(n,e,t,i,s,r){const a=n.geometry.attributes.position;if(gl.fromBufferAttribute(a,s),vl.fromBufferAttribute(a,r),t.distanceSqToSegment(gl,vl,Vc,yf)>i)return;Vc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Vc);if(!(l<e.near||l>e.far))return{distance:l,point:yf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Sf=new O,wf=new O;class JS extends Em{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Sf.fromBufferAttribute(t,s),wf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Sf.distanceTo(wf);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class QS extends ca{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bf=new It,qh=new co,Go=new Oi,Wo=new O;class ew extends Xn{constructor(e=new en,t=new QS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(s),Go.radius+=r,e.ray.intersectsSphere(Go)===!1)return;bf.copy(s).invert(),qh.copy(e.ray).applyMatrix4(bf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,_=f;g<_;g++){const m=c.getX(g);Wo.fromBufferAttribute(d,m),Tf(Wo,m,l,s,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,_=f;g<_;g++)Wo.fromBufferAttribute(d,g),Tf(Wo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Tf(n,e,t,i,s,r,a){const o=qh.distanceSqToPoint(n);if(o<t){const l=new O;qh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class zi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new we:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new O,s=[],r=[],a=[],o=new O,l=new It;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Mn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Mn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Tu extends zi{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new we){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class tw extends Tu{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Eu(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const $o=new O,Gc=new Eu,Wc=new Eu,$c=new Eu;class nw extends zi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new O){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:($o.subVectors(s[0],s[1]).add(s[0]),c=$o);const d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:($o.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$o),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Gc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,m),Wc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,m),$c.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Gc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Wc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),$c.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Gc.calc(l),Wc.calc(l),$c.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ef(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function iw(n,e){const t=1-n;return t*t*e}function sw(n,e){return 2*(1-n)*n*e}function rw(n,e){return n*n*e}function Ga(n,e,t,i){return iw(n,e)+sw(n,t)+rw(n,i)}function aw(n,e){const t=1-n;return t*t*t*e}function ow(n,e){const t=1-n;return 3*t*t*n*e}function lw(n,e){return 3*(1-n)*n*n*e}function cw(n,e){return n*n*n*e}function Wa(n,e,t,i,s){return aw(n,e)+ow(n,t)+lw(n,i)+cw(n,s)}class Am extends zi{constructor(e=new we,t=new we,i=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new we){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Wa(e,s.x,r.x,a.x,o.x),Wa(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hw extends zi{constructor(e=new O,t=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Wa(e,s.x,r.x,a.x,o.x),Wa(e,s.y,r.y,a.y,o.y),Wa(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cm extends zi{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uw extends zi{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rm extends zi{constructor(e=new we,t=new we,i=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new we){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ga(e,s.x,r.x,a.x),Ga(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dw extends zi{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ga(e,s.x,r.x,a.x),Ga(e,s.y,r.y,a.y),Ga(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pm extends zi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Ef(o,l.x,c.x,h.x,d.x),Ef(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new we().fromArray(s))}return this}}var Af=Object.freeze({__proto__:null,ArcCurve:tw,CatmullRomCurve3:nw,CubicBezierCurve:Am,CubicBezierCurve3:hw,EllipseCurve:Tu,LineCurve:Cm,LineCurve3:uw,QuadraticBezierCurve:Rm,QuadraticBezierCurve3:dw,SplineCurve:Pm});class fw extends zi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Af[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Af[s.type]().fromJSON(s))}return this}}class Cf extends fw{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Cm(this.currentPoint.clone(),new we(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Rm(this.currentPoint.clone(),new we(e,t),new we(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new Am(this.currentPoint.clone(),new we(e,t),new we(i,s),new we(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Pm(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){const c=new Tu(e,t,i,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Au extends en{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new O,h=new we;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(o,3)),this.setAttribute("uv",new Ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Au(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class _l extends en{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=i/2;let p=0;x(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ct(d,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(f,2));function x(){const w=new O,I=new O;let C=0;const P=(t-e)/i;for(let U=0;U<=r;U++){const ie=[],S=U/r,b=S*(t-e)+e;for(let H=0;H<=s;H++){const z=H/s,Y=z*l+o,Z=Math.sin(Y),j=Math.cos(Y);I.x=b*Z,I.y=-S*i+m,I.z=b*j,d.push(I.x,I.y,I.z),w.set(Z,P,j).normalize(),u.push(w.x,w.y,w.z),f.push(z,1-S),ie.push(g++)}_.push(ie)}for(let U=0;U<s;U++)for(let ie=0;ie<r;ie++){const S=_[ie][U],b=_[ie+1][U],H=_[ie+1][U+1],z=_[ie][U+1];e>0&&(h.push(S,b,z),C+=3),t>0&&(h.push(b,H,z),C+=3)}c.addGroup(p,C,0),p+=C}function M(w){const I=g,C=new we,P=new O;let U=0;const ie=w===!0?e:t,S=w===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,m*S,0),u.push(0,S,0),f.push(.5,.5),g++;const b=g;for(let H=0;H<=s;H++){const Y=H/s*l+o,Z=Math.cos(Y),j=Math.sin(Y);P.x=ie*j,P.y=m*S,P.z=ie*Z,d.push(P.x,P.y,P.z),u.push(0,S,0),C.x=Z*.5+.5,C.y=j*.5*S+.5,f.push(C.x,C.y),g++}for(let H=0;H<s;H++){const z=I+H,Y=b+H;w===!0?h.push(Y,Y+1,z):h.push(Y+1,Y,z),U+=3}c.addGroup(p,U,w===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dm extends Cf{constructor(e){super(e),this.uuid=or(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Cf().fromJSON(s))}return this}}const pw={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Lm(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,f;if(i&&(r=xw(n,e,r,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)d=n[g],u=n[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return to(r,a,t,o,l,f,0),a}};function Lm(n,e,t,i,s){let r,a;if(s===Pw(n,e,t,i)>0)for(r=e;r<t;r+=i)a=Rf(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=Rf(r,n[r],n[r+1],a);return a&&Ol(a,a.next)&&(io(a),a=a.next),a}function nr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ol(t,t.next)||Xt(t.prev,t,t.next)===0)){if(io(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function to(n,e,t,i,s,r,a){if(!n)return;!a&&r&&bw(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?gw(n,i,s,r):mw(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),io(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=vw(nr(n),e,t),to(n,e,t,i,s,r,2)):a===2&&_w(n,e,t,i,s,r):to(nr(n),e,t,i,s,r,1);break}}}function mw(n){const e=n.prev,t=n,i=n.next;if(Xt(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&$r(s,o,r,l,a,c,g.x,g.y)&&Xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gw(n,e,t,i){const s=n.prev,r=n,a=n.next;if(Xt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,_=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,p=Yh(f,g,e,t,i),x=Yh(_,m,e,t,i);let M=n.prevZ,w=n.nextZ;for(;M&&M.z>=p&&w&&w.z<=x;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&$r(o,h,l,d,c,u,M.x,M.y)&&Xt(M.prev,M,M.next)>=0||(M=M.prevZ,w.x>=f&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&$r(o,h,l,d,c,u,w.x,w.y)&&Xt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&$r(o,h,l,d,c,u,M.x,M.y)&&Xt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;w&&w.z<=x;){if(w.x>=f&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&$r(o,h,l,d,c,u,w.x,w.y)&&Xt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function vw(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!Ol(s,r)&&Im(s,i,i.next,r)&&no(s,r)&&no(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),io(i),io(i.next),i=n=r),i=i.next}while(i!==n);return nr(i)}function _w(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Aw(a,o)){let l=Um(a,o);a=nr(a,a.next),l=nr(l,l.next),to(a,e,t,i,s,r,0),to(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function xw(n,e,t,i){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Lm(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Ew(c));for(s.sort(Mw),r=0;r<s.length;r++)t=yw(s[r],t);return t}function Mw(n,e){return n.x-e.x}function yw(n,e){const t=Sw(n,e);if(!t)return e;const i=Um(t,n);return nr(i,i.next),nr(t,t.next)}function Sw(n,e){let t=e,i=-1/0,s;const r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>i&&(i=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&$r(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),no(t,n)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&ww(s,t)))&&(s=t,h=d)),t=t.next;while(t!==o);return s}function ww(n,e){return Xt(n.prev,n,e.prev)<0&&Xt(e.next,n,n.next)<0}function bw(n,e,t,i){let s=n;do s.z===0&&(s.z=Yh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Tw(s)}function Tw(n){let e,t,i,s,r,a,o,l,c=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(a>1);return n}function Yh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Ew(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function $r(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Aw(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Cw(n,e)&&(no(n,e)&&no(e,n)&&Rw(n,e)&&(Xt(n.prev,n,e.prev)||Xt(n,e.prev,e))||Ol(n,e)&&Xt(n.prev,n,n.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ol(n,e){return n.x===e.x&&n.y===e.y}function Im(n,e,t,i){const s=qo(Xt(n,e,t)),r=qo(Xt(n,e,i)),a=qo(Xt(t,i,n)),o=qo(Xt(t,i,e));return!!(s!==r&&a!==o||s===0&&Xo(n,t,e)||r===0&&Xo(n,i,e)||a===0&&Xo(t,n,i)||o===0&&Xo(t,e,i))}function Xo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function qo(n){return n>0?1:n<0?-1:0}function Cw(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Im(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function no(n,e){return Xt(n.prev,n,n.next)<0?Xt(n,e,n.next)>=0&&Xt(n,n.prev,e)>=0:Xt(n,e,n.prev)<0||Xt(n,n.next,e)<0}function Rw(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Um(n,e){const t=new jh(n.i,n.x,n.y),i=new jh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Rf(n,e,t,i){const s=new jh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function io(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function jh(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Pw(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Zr{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Zr.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Pf(e),Df(i,e);let a=e.length;t.forEach(Pf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Df(i,t[l]);const o=pw.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Pf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Df(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class xl extends en{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/s,f=new O,g=new we;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const x=p+m,M=x,w=x+i+1,I=x+i+2,C=x+1;o.push(M,w,C),o.push(w,I,C)}}this.setIndex(o),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Cu extends en{constructor(e=new Dm([new we(0,.5),new we(-.5,-.5),new we(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ct(s,3)),this.setAttribute("normal",new Ct(r,3)),this.setAttribute("uv",new Ct(a,2));function c(h){const d=s.length/3,u=h.extractPoints(t);let f=u.shape;const g=u.holes;Zr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const x=g[m];Zr.isClockWise(x)===!0&&(g[m]=x.reverse())}const _=Zr.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const x=g[m];f=f.concat(x)}for(let m=0,p=f.length;m<p;m++){const x=f[m];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,p=_.length;m<p;m++){const x=_[m],M=x[0]+d,w=x[1]+d,I=x[2]+d;i.push(M,w,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Dw(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];i.push(a)}return new Cu(i,e.curveSegments)}}function Dw(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Xr extends en{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new O,u=new O,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const x=[],M=p/i;let w=0;p===0&&a===0?w=.5/t:p===i&&l===Math.PI&&(w=-.5/t);for(let I=0;I<=t;I++){const C=I/t;d.x=-e*Math.cos(s+C*r)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(s+C*r)*Math.sin(a+M*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(C+w,1-M),x.push(c++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const M=h[p][x+1],w=h[p][x],I=h[p+1][x],C=h[p+1][x+1];(p!==0||a>0)&&f.push(M,w,C),(p!==i-1||l<Math.PI)&&f.push(w,I,C)}this.setIndex(f),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gi extends ss{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lw extends en{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Lf=new It;class If{constructor(e,t,i=0,s=1/0){this.ray=new co(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Su,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lf),this}intersectObject(e,t=!0,i=[]){return Kh(e,this,i,t),i.sort(Uf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Kh(e[s],this,i,t);return i.sort(Uf),i}}function Uf(n,e){return n.distance-e.distance}function Kh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Kh(r[a],e,t,!0)}}class Ff{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Mn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Iw extends ar{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:du}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=du);const Xc=`
precision highp float;
in vec3 position;
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Ru=`
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
`,Uw=Ru+`
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
`,Fw=Ru+`
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
`,Nw=Ru+`
void main() {
  ivec2 ij = ivec2(gl_FragCoord.xy);
  vec4 t = texelFetch(uTerrain, ij, 0);
  float z = zOf(ij);
  float h = t.a > 0.75 ? (uSubgrid > 0.5 ? volOf(ij, uTide) : max(0.0, uTide - z)) : 0.0;
  o0 = vec4(h, 0.0, 0.0, 0.0);
  o1 = vec4(0.0, 0.0, 0.0, 0.0);
}
`,kw=`
precision highp float; precision highp int; precision highp sampler2D;
uniform sampler2D uState0; uniform sampler2D uState1;
layout(location = 0) out vec4 o0; layout(location = 1) out vec4 o1;
void main() { ivec2 ij = ivec2(gl_FragCoord.xy); o0 = texelFetch(uState0, ij, 0); o1 = texelFetch(uState1, ij, 0); }
`,Ow=`
precision highp float; precision highp int; precision highp sampler2D;
uniform sampler2D uSrc; uniform sampler2D uTerrain; uniform ivec2 uSrcSize; uniform int uFirst;
layout(location = 0) out vec4 o;
void main() {
  ivec2 ij = ivec2(gl_FragCoord.xy) * 4; float m = 0.0;
  for (int dj = 0; dj < 4; dj++) for (int di = 0; di < 4; di++) {
    ivec2 c = ij + ivec2(di, dj); if (c.x >= uSrcSize.x || c.y >= uSrcSize.y) continue;
    float v = uFirst == 1 ? (texelFetch(uTerrain, c, 0).a < 0.75 ? texelFetch(uSrc, c, 0).a : 0.0) : texelFetch(uSrc, c, 0).r;
    m = max(m, v);
  }
  o = vec4(m, 0.0, 0.0, 1.0);
}
`;class qc{constructor(e,t,i,s,r,a,o,l,c,h){X(this,"W");X(this,"H");X(this,"dx");X(this,"renderer");X(this,"rtA");X(this,"rtB");X(this,"scene",new kl);X(this,"camera",new Fl(-1,1,1,-1,0,1));X(this,"quad");X(this,"fluxMat");X(this,"depthMat");X(this,"initMat");X(this,"copyMat");X(this,"maxMat");X(this,"redRTs",[]);X(this,"redBuf",new Float32Array(64));X(this,"terrainTex");X(this,"modTex");X(this,"chanTex");X(this,"terrainData");X(this,"modData");X(this,"chanData");X(this,"sgTex",null);X(this,"subgridAvailable");X(this,"auxBuf");X(this,"time",0);X(this,"dt",.5);X(this,"steps",0);X(this,"readBuf");X(this,"cellBuf",new Float32Array(4));X(this,"cellAux",new Float32Array(4));this.renderer=e,this.W=t.W,this.H=t.H,this.dx=t.dx;const d=this.W*this.H;this.terrainData=new Float32Array(d*4);for(let g=0;g<d;g++)this.terrainData[g*4]=i[g],this.terrainData[g*4+1]=s[g],this.terrainData[g*4+2]=a?a[g]:0,this.terrainData[g*4+3]=r[g]?1:o&&o[g]?.5:0;this.terrainTex=this.makeDataTex(this.terrainData),this.modData=new Float32Array(d*4);for(let g=0;g<d;g++)this.modData[g*4+3]=1;if(this.modTex=this.makeDataTex(this.modData),this.chanData=new Float32Array(d*4),l)for(let g=0;g<d;g++)r[g]||(this.chanData[g*4]=l[g*3],this.chanData[g*4+1]=l[g*3+1],this.chanData[g*4+2]=l[g*3+2]);if(c)for(let g=0;g<d;g++)r[g]||(this.chanData[g*4+3]=c[g]);if(this.chanTex=this.makeDataTex(this.chanData),this.subgridAvailable=!!h,h){const g=new Float32Array(d*4),_=new Float32Array(d*4),m=new Float32Array(d*4),p=new Float32Array(d*4);for(let x=0;x<d;x++)for(let M=0;M<4;M++)g[x*4+M]=h.cell[x*8+M],_[x*4+M]=h.cell[x*8+4+M],m[x*4+M]=h.face[x*8+M],p[x*4+M]=h.face[x*8+4+M];this.sgTex=[g,_,m,p].map(x=>this.makeDataTex(x))}this.rtA=this.makeRT(),this.rtB=this.makeRT();const u=()=>({uState0:{value:null},uState1:{value:null},uTerrain:{value:this.terrainTex},uMod:{value:this.modTex},uChan:{value:this.chanTex},uSize:{value:new we(this.W,this.H)},uDt:{value:this.dt},uDx:{value:this.dx},uG:{value:9.81},uTide:{value:0},uRain:{value:0},uDrain:{value:0},uTheta:{value:.8},uHmin:{value:.002},uManning:{value:.035},uBuildings:{value:1},uTankRate:{value:.01},uBldBlock:{value:1},uManningBld:{value:.6},uHs:{value:0},uHillCap:{value:120/36e5},uRecover:{value:6},uTideLock:{value:1.5},uSgC0:{value:this.sgTex?this.sgTex[0]:this.chanTex},uSgC1:{value:this.sgTex?this.sgTex[1]:this.chanTex},uSgFE:{value:this.sgTex?this.sgTex[2]:this.chanTex},uSgFN:{value:this.sgTex?this.sgTex[3]:this.chanTex},uSubgrid:{value:this.sgTex?1:0},uSill:{value:.1},uWeirB:{value:4}}),f=g=>new gi({vertexShader:Xc,fragmentShader:g,uniforms:u(),glslVersion:Kn,depthTest:!1,depthWrite:!1});this.fluxMat=f(Uw),this.depthMat=f(Fw),this.initMat=f(Nw),this.copyMat=new gi({vertexShader:Xc,fragmentShader:kw,glslVersion:Kn,depthTest:!1,depthWrite:!1,uniforms:{uState0:{value:null},uState1:{value:null}}}),this.maxMat=new gi({vertexShader:Xc,fragmentShader:Ow,glslVersion:Kn,depthTest:!1,depthWrite:!1,uniforms:{uSrc:{value:null},uTerrain:{value:this.terrainTex},uSrcSize:{value:new we(this.W,this.H)},uFirst:{value:1}}});for(const g of[this.fluxMat,this.depthMat])g.uniforms.uSize.value=new we(this.W,this.H);this.quad=new Dt(new lr(2,2),this.fluxMat),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.readBuf=new Float32Array(d*4),this.auxBuf=new Float32Array(d*4)}get subgridOn(){return this.depthMat.uniforms.uSubgrid.value>.5}makeDataTex(e){const t=new bu(e,this.W,this.H,An,Un);return t.minFilter=kt,t.magFilter=kt,t.generateMipmaps=!1,t.wrapS=Gn,t.wrapT=Gn,t.needsUpdate=!0,t}makeRT(){const e=new Ai(this.W,this.H,{count:2,type:Un,format:An,minFilter:kt,magFilter:kt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});for(const t of e.textures)t.wrapS=Gn,t.wrapT=Gn;return e}get stateTex(){return this.rtA.textures[0]}get auxTex(){return this.rtA.textures[1]}setParams(e){for(const t of[this.fluxMat,this.depthMat,this.initMat])e.subgrid!==void 0&&(t.uniforms.uSubgrid.value=e.subgrid&&this.subgridAvailable?1:0),e.manning!==void 0&&(t.uniforms.uManning.value=e.manning),e.buildings!==void 0&&(t.uniforms.uBuildings.value=e.buildings?1:0),e.drain!==void 0&&(t.uniforms.uDrain.value=e.drain),e.theta!==void 0&&(t.uniforms.uTheta.value=e.theta),e.bldBlock!==void 0&&(t.uniforms.uBldBlock.value=e.bldBlock),e.manningBld!==void 0&&(t.uniforms.uManningBld.value=e.manningBld),e.hillCap!==void 0&&(t.uniforms.uHillCap.value=e.hillCap),e.recover!==void 0&&(t.uniforms.uRecover.value=e.recover),e.tideLock!==void 0&&(t.uniforms.uTideLock.value=e.tideLock)}setDt(e){this.dt=e;for(const t of[this.fluxMat,this.depthMat])t.uniforms.uDt.value=e}updateMod(){this.modTex.needsUpdate=!0}updateTerrain(){this.terrainTex.needsUpdate=!0}reset(e){this.time=0,this.steps=0,this.initMat.uniforms.uTide.value=e,this.quad.material=this.initMat;const t=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.rtA),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(t)}step(e,t,i,s=0){const r=this.renderer.getRenderTarget(),a=this.renderer.autoClear;this.renderer.autoClear=!1;for(let o=0;o<e;o++)this.fluxMat.uniforms.uState0.value=this.rtA.textures[0],this.fluxMat.uniforms.uState1.value=this.rtA.textures[1],this.fluxMat.uniforms.uTide.value=t,this.fluxMat.uniforms.uRain.value=i,this.quad.material=this.fluxMat,this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.depthMat.uniforms.uState0.value=this.rtB.textures[0],this.depthMat.uniforms.uState1.value=this.rtB.textures[1],this.depthMat.uniforms.uTide.value=t,this.depthMat.uniforms.uRain.value=i,this.depthMat.uniforms.uHs.value=s,this.quad.material=this.depthMat,this.renderer.setRenderTarget(this.rtA),this.renderer.render(this.scene,this.camera),this.time+=this.dt,this.steps++;this.renderer.autoClear=a,this.renderer.setRenderTarget(r)}static snapshotBytes(e,t){return e*t*32}blit(e,t){this.copyMat.uniforms.uState0.value=e.textures[0],this.copyMat.uniforms.uState1.value=e.textures[1],this.quad.material=this.copyMat;const i=this.renderer.getRenderTarget(),s=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.camera),this.renderer.autoClear=s,this.renderer.setRenderTarget(i)}snapshot(e){const t=e??{rt:this.makeRT(),time:0,steps:0,dt:this.dt};return this.blit(this.rtA,t.rt),t.time=this.time,t.steps=this.steps,t.dt=this.dt,t}restore(e){this.blit(e.rt,this.rtA),this.time=e.time,this.steps=e.steps,this.setDt(e.dt)}maxDepth(){let e=this.W,t=this.H,i=this.rtA.textures[1],s=1,r=0;const a=this.renderer.getRenderTarget(),o=this.renderer.autoClear;for(this.renderer.autoClear=!1,this.quad.material=this.maxMat;e>4||t>4;){const c=Math.ceil(e/4),h=Math.ceil(t/4);this.redRTs[r]||(this.redRTs[r]=new Ai(c,h,{type:Un,format:An,minFilter:kt,magFilter:kt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}));const d=this.maxMat.uniforms;d.uSrc.value=i,d.uFirst.value=s,d.uSrcSize.value.set(e,t),this.renderer.setRenderTarget(this.redRTs[r]),this.renderer.render(this.scene,this.camera),i=this.redRTs[r].texture,e=c,t=h,s=0,r++}let l=0;if(r>0){this.renderer.readRenderTargetPixels(this.redRTs[r-1],0,0,e,t,this.redBuf);for(let c=0;c<e*t;c++)l=Math.max(l,this.redBuf[c*4])}return this.renderer.autoClear=o,this.renderer.setRenderTarget(a),l}readCell(e,t){e=Math.min(this.W-1,Math.max(0,e)),t=Math.min(this.H-1,Math.max(0,t)),this.renderer.readRenderTargetPixels(this.rtA,e,t,1,1,this.cellBuf);const i=this.renderer.getContext(),s=this.renderer.properties.get(this.rtA).__webglFramebuffer,r=this.renderer.getRenderTarget();return this.renderer.state.bindFramebuffer(i.FRAMEBUFFER,s),i.readBuffer(i.COLOR_ATTACHMENT1),i.readPixels(e,t,1,1,i.RGBA,i.FLOAT,this.cellAux),i.readBuffer(i.COLOR_ATTACHMENT0),this.renderer.setRenderTarget(r),{state:this.cellBuf,aux:this.cellAux}}readState(){return this.renderer.readRenderTargetPixels(this.rtA,0,0,this.W,this.H,this.readBuf),this.readBuf}readAux(){const e=this.renderer.getContext(),t=this.renderer.properties.get(this.rtA).__webglFramebuffer,i=this.renderer.getRenderTarget();return this.renderer.state.bindFramebuffer(e.FRAMEBUFFER,t),e.readBuffer(e.COLOR_ATTACHMENT1),e.readPixels(0,0,this.W,this.H,e.RGBA,e.FLOAT,this.auxBuf),e.readBuffer(e.COLOR_ATTACHMENT0),this.renderer.setRenderTarget(i),this.auxBuf}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.terrainTex.dispose(),this.modTex.dispose(),this.chanTex.dispose(),this.sgTex?.forEach(e=>e.dispose()),this.fluxMat.dispose(),this.depthMat.dispose(),this.initMat.dispose(),this.copyMat.dispose(),this.maxMat.dispose(),this.quad.geometry.dispose();for(const e of this.redRTs)e.dispose()}}const Nf={type:"change"},Pu={type:"start"},Fm={type:"end"},Yo=new co,kf=new vs,zw=Math.cos(70*ui.DEG2RAD),ln=new O,jn=2*Math.PI,Lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yc=1e-6;class Bw extends Iw{constructor(e,t=null){super(e,t),this.state=Lt.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yr.ROTATE,MIDDLE:Yr.DOLLY,RIGHT:Yr.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new er,this._lastTargetPosition=new O,this._quat=new er().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ff,this._sphericalDelta=new Ff,this._scale=1,this._panOffset=new O,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new O,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Vw.bind(this),this._onPointerDown=Hw.bind(this),this._onPointerUp=Gw.bind(this),this._onContextMenu=Kw.bind(this),this._onMouseWheel=Xw.bind(this),this._onKeyDown=qw.bind(this),this._onTouchStart=Yw.bind(this),this._onTouchMove=jw.bind(this),this._onMouseDown=Ww.bind(this),this._onMouseMove=$w.bind(this),this._interceptControlDown=Zw.bind(this),this._interceptControlUp=Jw.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nf),this.update(),this.state=Lt.NONE}update(e=null){const t=this.object.position;ln.copy(t).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===Lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=jn:i>Math.PI&&(i-=jn),s<-Math.PI?s+=jn:s>Math.PI&&(s-=jn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),t.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ln.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Yo.origin.copy(this.object.position),Yo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yo.direction))<zw?this.object.lookAt(this.target):(kf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yo.intersectPlane(kf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Yc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yc||this._lastTargetPosition.distanceToSquared(this.target)>Yc?(this.dispatchEvent(Nf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?jn/60*this.autoRotateSpeed*e:jn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ln.setFromMatrixColumn(t,0),ln.multiplyScalar(-e),this._panOffset.add(ln)}_panUp(e,t){this.screenSpacePanning===!0?ln.setFromMatrixColumn(t,1):(ln.setFromMatrixColumn(t,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(e),this._panOffset.add(ln)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ln.copy(s).sub(this.target);let r=ln.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new we,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Hw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Vw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Gw(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fm),this.state=Lt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ww(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Yr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Lt.DOLLY;break;case Yr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Lt.ROTATE}break;case Yr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Lt.PAN}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(Pu)}function $w(n){switch(this.state){case Lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Xw(n){this.enabled===!1||this.enableZoom===!1||this.state!==Lt.NONE||(n.preventDefault(),this.dispatchEvent(Pu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Fm))}function qw(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Yw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Lt.TOUCH_ROTATE;break;case Gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Lt.TOUCH_PAN;break;default:this.state=Lt.NONE}break;case 2:switch(this.touches.TWO){case Gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Lt.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Lt.TOUCH_DOLLY_ROTATE;break;default:this.state=Lt.NONE}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(Pu)}function jw(n){switch(this._trackPointer(n),this.state){case Lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Lt.NONE}}function Kw(n){this.enabled!==!1&&n.preventDefault()}function Zw(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Jw(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qw(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}class ji{constructor(e,t){X(this,"camera");X(this,"controls");X(this,"tween",null);X(this,"tour",null);X(this,"touring",!1);X(this,"onTourEnd");this.camera=e,this.controls=new Bw(e,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI*.49,this.controls.minDistance=25,this.controls.maxDistance=6e4,this.controls.screenSpacePanning=!1,this.controls.zoomSpeed=1.2,t.addEventListener("pointerdown",()=>{this.touring&&this.stopTour(),this.tween=null}),t.addEventListener("wheel",()=>{this.touring&&this.stopTour(),this.tween=null},{passive:!0})}state(){return{pos:this.camera.position.clone(),target:this.controls.target.clone()}}flyTo(e,t=2.5,i){this.tween={from:this.state(),to:e,t0:performance.now(),dur:t*1e3,onDone:i}}jumpTo(e){this.camera.position.copy(e.pos),this.controls.target.copy(e.target),this.controls.update()}static viewOf(e,t,i=150,s=35){const r=ui.degToRad(i),a=ui.degToRad(s);return{pos:new O(e.x+t*Math.cos(a)*Math.sin(r),e.y+t*Math.sin(a),e.z+t*Math.cos(a)*Math.cos(r)),target:e.clone()}}startTour(e){e.length&&(this.touring=!0,this.tour={stops:e,i:0,phase:"fly",t0:performance.now()},this.flyTo(e[0],3.5,()=>{this.tour&&(this.tour.phase="orbit",this.tour.t0=performance.now())}))}stopTour(){this.touring=!1,this.tour=null,this.controls.autoRotate=!1,this.onTourEnd?.()}update(e){const t=performance.now();if(this.tween){const i=Math.min(1,(t-this.tween.t0)/this.tween.dur),s=Qw(i);if(this.camera.position.lerpVectors(this.tween.from.pos,this.tween.to.pos,s),this.controls.target.lerpVectors(this.tween.from.target,this.tween.to.target,s),i>=1){const r=this.tween.onDone;this.tween=null,r?.()}}if(this.tour&&this.touring&&this.tour.phase==="orbit"){const i=(t-this.tour.t0)/1e3,s=new O().subVectors(this.camera.position,this.controls.target);if(s.applyAxisAngle(new O(0,1,0),e*.12),this.camera.position.copy(this.controls.target).add(s),i>7){this.tour.i=(this.tour.i+1)%this.tour.stops.length,this.tour.phase="fly",this.tour.t0=t;const r=this.tour.stops[this.tour.i];this.flyTo(r,3.5,()=>{this.tour&&(this.tour.phase="orbit",this.tour.t0=performance.now())})}}this.controls.update()}}const eb=`
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
    if (vh.z < 0.04 || spd < 0.08 || texelFetch(uTerrain, c, 0).a > 0.75) dead = true;   // standing water carries no streaks
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
`,tb=`
precision highp float;
in vec3 position; out vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,nb=`
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
  // streaks are a street-scale cue: they shrink with distance and fade out beyond ~2.5 km so that a wide view stays clean
  float w = max(ch.w, 1.0);
  vA *= 1.0 - smoothstep(1800.0, 3200.0, w);
  vA *= smoothstep(0.08, 0.3, p.a);
  vSpd = p.a;
  gl_Position = ch;
  float px = clamp(8000.0 / w, 5.0, 26.0);
  gl_PointSize = clamp(px + L * 1.2, px, 38.0) * uDpr;
}
`,ib=`
precision highp float;
in float vA; in float vSpd; in vec2 vDir; in float vLen; uniform float uNight;
out vec4 fragColor;
void main() {
  if (vA <= 0.001) discard;
  vec2 q = gl_PointCoord - 0.5; q.y = -q.y;
  float along = dot(q, vDir);                       // head at +0.5, tail at -0.5
  float across = dot(q, vec2(-vDir.y, vDir.x));
  float w = 0.06;
  float shape = smoothstep(-0.5, -0.28, along) * (1.0 - smoothstep(0.30, 0.46, along)) * mix(0.25, 1.0, along + 0.5);   // tail fades out
  float core = (1.0 - smoothstep(w * 0.4, w, abs(across))) * shape;
  float rim = (1.0 - smoothstep(w * 1.3, w * 2.1, abs(across))) * shape;
  // bright head dot with its own rim
  float hd = length(q - vDir * 0.34);
  core = max(core, (1.0 - smoothstep(0.07, 0.13, hd)) * 0.9); rim = max(rim, 1.0 - smoothstep(0.12, 0.19, hd));
  if (rim < 0.02) discard;
  vec3 slow = vec3(0.86, 0.97, 1.0), fast = vec3(1.0, 0.95, 0.70);
  vec3 colCore = mix(slow, fast, smoothstep(0.25, 1.8, vSpd));
  // a dark rim under the light core keeps the streak readable on any water colour
  vec3 col = mix(vec3(0.02, 0.07, 0.18), colCore, core);
  float a = max(core, rim * 0.55);
  fragColor = vec4(col, a * vA * mix(0.95, 1.0, uNight));
}
`;class Of{constructor(e,t,i,s,r,a,o,l,c=128){X(this,"N");X(this,"renderer");X(this,"rtA");X(this,"rtB");X(this,"scene",new kl);X(this,"camera",new Fl(-1,1,1,-1,0,1));X(this,"quad");X(this,"updateMat");X(this,"pointMat");X(this,"group",new ws);X(this,"spawnTex");X(this,"spawnData");X(this,"spawnCap");X(this,"time",0);X(this,"speedScale",30);this.renderer=e,this.N=c;const h=()=>{const x=new Ai(c,c,{count:2,type:Un,format:An,minFilter:kt,magFilter:kt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});for(const M of x.textures)M.wrapS=Gn,M.wrapT=Gn;return x};this.rtA=h(),this.rtB=h();const d=1024,u=64;this.spawnCap=d*u,this.spawnData=new Float32Array(this.spawnCap*4),this.spawnTex=new bu(this.spawnData,d,u,An,Un),this.spawnTex.minFilter=kt,this.spawnTex.magFilter=kt,this.spawnTex.needsUpdate=!0,this.updateMat=new gi({vertexShader:tb,fragmentShader:eb,glslVersion:Kn,depthTest:!1,depthWrite:!1,uniforms:{uPart:{value:null},uTail:{value:null},uState:{value:r},uTerrain:{value:a},uSpawn:{value:this.spawnTex},uSpawnCount:{value:0},uSpawnSize:{value:new we(d,u)},uSize:{value:new we(t,i)},uDx:{value:s},uDt:{value:.016},uTime:{value:0},uSpeedScale:{value:this.speedScale},uLife:{value:7}}}),this.quad=new Dt(new lr(2,2),this.updateMat),this.quad.frustumCulled=!1,this.scene.add(this.quad);const f=c*c,g=new Float32Array(f);for(let x=0;x<f;x++)g[x]=x;const _=new en;_.setAttribute("pid",new Cn(g,1));const m=new ki(new O(-1e6,-1e6,-1e6),new O(1e6,1e6,1e6));_.boundingBox=m,_.boundingSphere=m.getBoundingSphere(new Oi),this.pointMat=new gi({vertexShader:nb,fragmentShader:ib,glslVersion:Kn,transparent:!0,depthWrite:!1,blending:js,uniforms:{uPart:{value:this.rtA.textures[0]},uTail:{value:this.rtA.textures[1]},uState:{value:r},uTerrain:{value:a},uMod:{value:o},uN:{value:new we(c,c)},uSize:{value:new we(t,i)},uDx:{value:s},uBuildings:l.uBuildings,uBldBlock:l.uBldBlock,uLife:{value:7},uNight:l.uNight,uDpr:{value:e.getPixelRatio()},uViewport:{value:new we(1,1)}}});const p=new ew(_,this.pointMat);p.frustumCulled=!1,p.renderOrder=16,this.group.add(p),this.group.renderOrder=16,this.reset()}setState(e){this.updateMat.uniforms.uState.value=e,this.pointMat.uniforms.uState.value=e}setSpawn(e,t){const i=Math.min(t,this.spawnCap);if(t>this.spawnCap){const s=t/this.spawnCap;for(let r=0;r<this.spawnCap;r++){const a=Math.floor(r*s);this.spawnData[r*4]=e[a*2],this.spawnData[r*4+1]=e[a*2+1]}}else for(let s=0;s<i;s++)this.spawnData[s*4]=e[s*2],this.spawnData[s*4+1]=e[s*2+1];this.spawnTex.needsUpdate=!0,this.updateMat.uniforms.uSpawnCount.value=i}reset(){const e=this.renderer.getRenderTarget(),t=this.renderer.getClearColor(new at),i=this.renderer.getClearAlpha();for(const s of[this.rtA,this.rtB])this.renderer.setRenderTarget(s),this.renderer.setClearColor(new at(-1,-1,0),1),this.renderer.clear();this.renderer.setRenderTarget(e),this.renderer.setClearColor(t,i),this.updateMat.uniforms.uSpawnCount.value=0}update(e,t){this.time+=e,this.speedScale=ui.clamp(t*.05,15,220);const i=this.updateMat.uniforms;i.uPart.value=this.rtA.textures[0],i.uTail.value=this.rtA.textures[1],i.uDt.value=Math.min(e,.05),i.uTime.value=this.time,i.uSpeedScale.value=this.speedScale;const s=this.renderer.getRenderTarget(),r=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.renderer.autoClear=r,this.renderer.setRenderTarget(s),[this.rtA,this.rtB]=[this.rtB,this.rtA];const a=this.pointMat.uniforms;a.uPart.value=this.rtA.textures[0],a.uTail.value=this.rtA.textures[1];const o=this.renderer.getDrawingBufferSize(new we);a.uViewport.value.copy(o),a.uDpr.value=this.renderer.getPixelRatio()}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.spawnTex.dispose(),this.updateMat.dispose(),this.pointMat.dispose(),this.quad.geometry.dispose();for(const e of this.group.children)e.geometry.dispose();this.group.clear()}}const sb=`
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
`,rb=`
precision highp float;
in float vSpd; in float vA; out vec4 fragColor;
void main() {
  if (vA < 0.5) discard;
  vec3 col = mix(vec3(0.75, 0.95, 1.0), vec3(1.0, 0.86, 0.45), smoothstep(0.2, 1.8, vSpd));
  fragColor = vec4(col, 0.9);
}
`;class zf{constructor(e,t,i,s,r,a,o){X(this,"mesh");X(this,"mat");const l=Math.max(2,Math.round(35/i)),c=new en,h=.07,d=.22,u=.38,f=new Float32Array([0,0,-h,1-u,0,-h,1-u,0,h,0,0,h,1-u,0,-d,1,0,0,1-u,0,d]);c.setAttribute("position",new Cn(f,3)),c.setIndex([0,1,2,0,2,3,4,5,6,0,2,1,0,3,2,4,6,5]);const g=new Lw;g.index=c.index,g.attributes.position=c.attributes.position;const _=[];for(let p=Math.floor(l/2);p<t;p+=l)for(let x=Math.floor(l/2);x<e;x+=l)_.push(x,p);g.setAttribute("cell",new Xh(new Float32Array(_),2)),g.instanceCount=_.length/2;const m=new ki(new O(-1e6,-1e6,-1e6),new O(1e6,1e6,1e6));g.boundingBox=m,g.boundingSphere=m.getBoundingSphere(new Oi),this.mat=new gi({vertexShader:sb,fragmentShader:rb,glslVersion:Kn,transparent:!0,depthWrite:!1,side:si,uniforms:{uState:{value:s},uTerrain:{value:r},uMod:{value:a},uSize:{value:new we(e,t)},uDx:{value:i},uBuildings:o.uBuildings,uBldBlock:o.uBldBlock,uScale:{value:l*.8}}}),this.mesh=new Dt(g,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=14}setState(e){this.mat.uniforms.uState.value=e}dispose(){this.mesh.geometry.dispose(),this.mat.dispose()}}const ab=`
precision highp float; precision highp int; precision highp sampler2D;
uniform sampler2D uPrev; uniform sampler2D uState; uniform sampler2D uAux; uniform sampler2D uTerrain;
uniform float uAdvance; uniform float uSubgrid; uniform float uReset; uniform float uTau;
out vec4 o;
void main() {
  ivec2 ij = ivec2(gl_FragCoord.xy);
  vec4 t = texelFetch(uTerrain, ij, 0);
  float h = (uSubgrid > 0.5 && t.a < 0.75) ? texelFetch(uAux, ij, 0).a : texelFetch(uState, ij, 0).r;
  if (t.a > 0.75) h = 0.0;
  vec4 p = texelFetch(uPrev, ij, 0);
  if (uReset > 0.5) { o = vec4(h, 0.0, 0.0, 0.0); return; }
  float k = 1.0 - exp(-uAdvance / uTau);
  float avg = p.r + (h - p.r) * k;
  float rate = (h - avg) / uTau * 3600.0;
  o = vec4(avg, rate, 0.0, 0.0);
}
`,ob=`
precision highp float;
in vec3 position;
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`;class Bf{constructor(e,t,i,s,r,a){X(this,"renderer");X(this,"rtA");X(this,"rtB");X(this,"scene",new kl);X(this,"camera",new Fl(-1,1,1,-1,0,1));X(this,"quad");X(this,"mat");X(this,"stateTex");this.renderer=e,this.stateTex=s;const o=()=>{const l=new Ai(t,i,{type:Un,format:An,minFilter:kt,magFilter:kt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});return l.texture.wrapS=Gn,l.texture.wrapT=Gn,l};this.rtA=o(),this.rtB=o(),this.mat=new gi({vertexShader:ob,fragmentShader:ab,glslVersion:Kn,depthTest:!1,depthWrite:!1,uniforms:{uPrev:{value:null},uState:{value:s},uAux:{value:r},uTerrain:{value:a},uAdvance:{value:0},uSubgrid:{value:0},uReset:{value:1},uTau:{value:900}}}),this.quad=new Dt(new lr(2,2),this.mat),this.quad.frustumCulled=!1,this.scene.add(this.quad)}get texture(){return this.rtA.texture}setState(e,t){this.stateTex=e,this.mat.uniforms.uState.value=e,this.mat.uniforms.uAux.value=t}update(e,t,i=!1){if(e<=0&&!i)return;const s=this.mat.uniforms;s.uPrev.value=this.rtA.texture,s.uAdvance.value=e,s.uSubgrid.value=t?1:0,s.uReset.value=i?1:0;const r=this.renderer.getRenderTarget(),a=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.renderer.autoClear=a,this.renderer.setRenderTarget(r),[this.rtA,this.rtB]=[this.rtB,this.rtA]}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.mat.dispose(),this.quad.geometry.dispose()}}const Du=`
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
`,Lu=`
vec3 applyFog(vec3 col, vec3 world) {
  float dist = length(world - uCam);
  float f = 1.0 - exp(-uFogDensity * dist);
  return mix(col, uFogColor, clamp(f, 0.0, 1.0));
}
`,Nm=`
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
`,lb=`
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
`,cb=`
precision highp float; precision highp int; precision highp sampler2D;
in vec2 vUv; in vec3 vWorld; in vec3 vNormal; in float vSea;
uniform sampler2D uMap; uniform sampler2D uState; uniform sampler2D uTerrain; uniform float uHasMap;
uniform ivec2 uSize; uniform float uDx; uniform float uShadow;
uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uFogColor; uniform float uFogDensity;
uniform float uStorm; uniform float uFlash; uniform float uNight; uniform float uShowMax;
out vec4 fragColor;
${Du}
${Lu}
${Nm}
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
`,hb=`
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
`,ub=`
precision highp float; precision highp int; precision highp sampler2D;
in vec2 vUv; in vec3 vWorld; in float vDepth; in float vVel; in float vSea; in float vRise;
uniform float uTime; uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uFogColor; uniform float uFogDensity;
uniform float uStorm; uniform float uFlash; uniform float uNight; uniform float uRainI; uniform vec3 uSkyColor;
uniform sampler2D uTerrain; uniform sampler2D uTrend; uniform ivec2 uSize; uniform float uDx; uniform float uShadow; uniform float uWaterMode;
out vec4 fragColor;
${Du}
${Lu}
${Nm}
// rain on the surface: one expanding, fading ring per 3 m tile, each drop on its own clock (two layers)
float rainRings(vec2 p, float t) {
  vec2 cell = floor(p / 3.0); vec2 f = fract(p / 3.0) - 0.5;
  float r = 0.0;
  for (int k = 0; k < 2; k++) {
    float ph = hash21(cell + float(k) * 7.3);
    float u = fract(t * (0.9 + 0.5 * ph) + ph);
    vec2 c = vec2(hash21(cell * 1.7 + float(k) + 2.1), hash21(cell * 2.3 + float(k) + 5.7)) * 0.6 - 0.3;
    float d = length(f - c) - u * 0.45;
    r += (1.0 - smoothstep(0.0, 0.04, abs(d))) * (1.0 - u) * (1.0 - u);
  }
  return r;
}
void main() {
  if (vDepth < 0.015) discard;
  bool sea = vSea > 0.75; bool lake = vSea > 0.25 && !sea;
  float dist = length(uCam - vWorld);
  float near = 1.0 - smoothstep(250.0, 900.0, dist);                 // street-scale detail fades with distance
  // tendency of the depth in sim time (m per hour, TrendField): rising > 0, receding < 0, standing water ~ 0
  float rate = texture(uTrend, vUv).g;
  float rising = smoothstep(0.02, 0.10, rate), receding = smoothstep(-0.02, -0.10, rate);
  if (uWaterMode > 0.5) { rising = 0.0; receding = 0.0; }
  // flood water: the depth colour, translucent over the ground where it is shallow, opaque where it is deep
  float alpha = smoothstep(0.015, 0.05, vDepth) * mix(0.66, 0.94, smoothstep(0.03, 0.6, vDepth));
  vec3 col = depthColor(vDepth);
  if (sea) { col = vec3(0.10, 0.34, 0.52); alpha = 0.62; }
  if (lake) { col = vec3(0.13, 0.30, 0.40); alpha = 0.72; }
  // surface: a calm mirror on ponded water, choppier with wind (storm) and with the flow speed
  float amp = 0.12 + 0.35 * uStorm + 0.35 * smoothstep(0.15, 1.0, vVel);
  vec2 p = vWorld.xz * 0.12;
  float n1 = vnoise(p + vec2(uTime * 0.22, uTime * 0.15));
  float n2 = vnoise(p * 2.1 - vec2(uTime * 0.27, -uTime * 0.19));
  float wave = (sin(vWorld.x * 0.35 + uTime * 1.8) + cos(vWorld.z * 0.31 - uTime * 1.5)) * 0.02 * (0.3 + uStorm);
  vec3 n = normalize(vec3((n1 - 0.5) * amp + wave, 1.0, (n2 - 0.5) * amp - wave));
  vec3 V = normalize(uCam - vWorld);
  float fres = pow(1.0 - max(dot(n, V), 0.0), 3.0);
  col = mix(col, mix(uSkyColor, vec3(1.0), 0.1), fres * (sea ? 0.55 : 0.2));
  vec3 R = reflect(-uSun, n);
  float spec = pow(max(dot(R, V), 0.0), 110.0) * (1.0 - uStorm * 0.5) * (1.0 - uNight * 0.8);
  col += spec * (sea ? 0.9 : 0.35);
  // white water where the flow is fast
  float foam = uWaterMode > 0.5 ? 0.0 : smoothstep(0.9, 2.6, vVel) * vnoise(vWorld.xz * 0.6 + uTime * 0.6);
  col = mix(col, vec3(0.93, 0.96, 1.0), clamp(foam, 0.0, 0.7));
  if (!sea && !lake) {
    // depth contours at the impact classes (0.1 / 0.3 / 0.5 / 1 / 2 m): rings that march outwards while the water rises
    float fw = fwidth(vDepth);
    float lines = 0.0;
    float lv[5] = float[5](0.1, 0.3, 0.5, 1.0, 2.0);
    for (int i = 0; i < 5; i++) { float w = max(fw * 1.2, 0.004); lines = max(lines, 1.0 - smoothstep(w * 0.5, w * 1.5, abs(vDepth - lv[i]))); }
    lines *= 1.0 - smoothstep(0.03, 0.08, fw);                          // gone where one pixel spans several centimetres
    col = mix(col, vec3(0.85, 0.95, 1.0), lines * 0.45);
    // tendency: rising water is lit and fresh, with soft bands travelling outwards (deep -> shallow);
    // receding water goes dull and a little muddy (water that has been standing)
    float band = smoothstep(0.55, 0.95, sin(uTime * 2.2 + vDepth * 16.0 + n1 * 1.5)) * (0.5 + 0.5 * vnoise(vWorld.xz * 0.05 + uTime * 0.1));
    col = mix(col, vec3(0.62, 0.90, 1.0), rising * (0.16 + 0.2 * band));
    col = mix(col, col * vec3(0.76, 0.70, 0.58), receding * 0.7);
    // crisp outline at the wet / dry boundary, readable on any ground texture; a pulsing light band where it advances
    float edge = smoothstep(0.055, 0.02, vDepth);
    col = mix(col, vec3(0.03, 0.09, 0.26), edge * 0.85); alpha = mix(alpha, 0.96, edge);
    float front = smoothstep(0.03, 0.06, vDepth) * smoothstep(0.2, 0.08, vDepth);
    col = mix(col, vec3(0.78, 0.97, 1.0), rising * front * (0.4 + 0.35 * sin(uTime * 4.5)));
    if (uShadow > 0.5) col *= 1.0 - sunShadow(vUv, vWorld.y) * 0.22 * (1.0 - uNight * 0.5);
  }
  // rain rings near the camera (the old random sparkle read as noise from afar)
  float rip = (1.0 - uWaterMode) * clamp(uRainI, 0.0, 1.0) * near * rainRings(vWorld.xz, uTime * 0.6);
  col += rip * 0.35;
  col *= mix(1.0, 0.86, uStorm);
  col *= mix(1.0, sea ? 0.55 : 0.82, uNight);
  col += uFlash * 0.6;
  col = applyFog(col, vWorld);
  fragColor = vec4(col, alpha);
}
`,db=`
precision highp float; precision highp int; precision highp sampler2D;
in vec3 position; in vec3 normal; in vec3 color; in vec2 bUv; in float lit;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
out vec3 vN; out vec3 vWorld; out vec3 vColor; out vec2 vUv; out float vLit;
void main() {
  vN = normal; vWorld = position; vColor = color; vUv = bUv; vLit = lit;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,fb=`
precision highp float; precision highp int; precision highp sampler2D;
in vec3 vN; in vec3 vWorld; in vec3 vColor; in vec2 vUv; in float vLit;
uniform sampler2D uTerrain; uniform sampler2D uState; uniform sampler2D uMod; uniform ivec2 uSize;
uniform float uTime; uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uFogColor; uniform float uFogDensity;
uniform float uStorm; uniform float uFlash; uniform float uNight; uniform float uBuildings; uniform vec3 uSkyColor; uniform float uWaterMode;
out vec4 fragColor;
${Du}
${Lu}
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
`,pb=`
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
`,mb=`
precision highp float;
in float vA; uniform float uNight;
out vec4 fragColor;
void main() { fragColor = vec4(0.72, 0.8, 0.92, vA * mix(1.0, 0.6, uNight)); }
`,gb=`
precision highp float;
in vec3 position;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
out vec3 vDir;
void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,vb=`
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
`,_b=[11069183,5090802,2061275,1197480,1711987,5377894],xb=[0,.1,.3,.5,1,2];class Mb{constructor(e,t){X(this,"renderer");X(this,"scene",new kl);X(this,"camera");X(this,"director");X(this,"assets",null);X(this,"W",0);X(this,"H",0);X(this,"dx",10);X(this,"grid",null);X(this,"terrain",null);X(this,"water",null);X(this,"buildings",null);X(this,"rain");X(this,"sky");X(this,"root",new ws);X(this,"exag",1);X(this,"waterMode","now");X(this,"measureGroup",new ws);X(this,"draftLine",null);X(this,"markerGroup",new ws);X(this,"pinGeo",{pin:new _l(.45,.45,1,6),head:new Xr(2.6,12,10),ring:new xl(3,4.2,24),small:new Xr(1.6,10,8)});X(this,"pinWhite",new $s({color:16777215}));X(this,"labelsDiv");X(this,"labelEls",new Map);X(this,"imageryTex",null);X(this,"basemapTex",null);X(this,"flowA",null);X(this,"flowB",null);X(this,"arrowsA",null);X(this,"arrowsB",null);X(this,"trendA",null);X(this,"trendB",null);X(this,"pendingAdvance",0);X(this,"trendReset",!0);X(this,"terrainTexRef",null);X(this,"modTexRef",null);X(this,"flowMode","particles");X(this,"split",null);X(this,"time",0);X(this,"flashT",0);X(this,"U",{uTime:{value:0},uSun:{value:new O(.4,.75,.35).normalize()},uCam:{value:new O},uFogColor:{value:new at(10466504)},uFogDensity:{value:12e-5},uStorm:{value:0},uFlash:{value:0},uNight:{value:0},uRainI:{value:0},uSubgrid:{value:0},uSkyColor:{value:new at(9418464)},uShowMax:{value:0},uBuildings:{value:1},uBldBlock:{value:1},uWaterMode:{value:0},uExag:{value:1},uShadow:{value:1}});X(this,"terrainMat",null);X(this,"waterMat",null);X(this,"buildingMat",null);X(this,"rainMat");X(this,"skyMat");X(this,"texMode","imagery");X(this,"labelInset",{l:0,r:0,t:0,b:0});this.labelsDiv=t,this.renderer=new jS({canvas:e,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.outputColorSpace=di,this.renderer.autoClear=!0,this.camera=new pi(50,1,2,12e4),this.director=new ji(this.camera,e),this.root.add(this.measureGroup),this.root.add(this.markerGroup),this.scene.add(this.root),this.skyMat=new gi({vertexShader:gb,fragmentShader:vb,glslVersion:Kn,side:$n,depthWrite:!1,uniforms:{uSun:this.U.uSun,uStorm:this.U.uStorm,uFlash:this.U.uFlash,uNight:this.U.uNight,uTime:this.U.uTime}}),this.sky=new Dt(new Xr(8e4,48,24),this.skyMat),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.scene.add(this.sky);const i=36e3,s=new Float32Array(i*2*4),r=new Float32Array(i*2);for(let o=0;o<i;o++){const l=(Math.random()-.5)*900,c=Math.random()*320,h=(Math.random()-.5)*900,d=Math.random();for(let u=0;u<2;u++){const f=(o*2+u)*4;s[f]=l,s[f+1]=c,s[f+2]=h,s[f+3]=d,r[o*2+u]=u}}const a=new en;a.setAttribute("a",new Cn(s,4)),a.setAttribute("end",new Cn(r,1)),this.rainMat=new gi({vertexShader:pb,fragmentShader:mb,glslVersion:Kn,transparent:!0,depthWrite:!1,blending:rh,uniforms:{uTime:this.U.uTime,uCenter:{value:new O},uIntensity:this.U.uRainI,uWind:{value:.35},uNight:this.U.uNight}}),this.rain=new JS(a,this.rainMat),this.rain.frustumCulled=!1,this.rain.renderOrder=20,this.scene.add(this.rain),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}loadScene(e,t,i,s,r){this.clearScene(),this.assets=e,this.W=e.meta.cols,this.H=e.meta.rows,this.dx=e.meta.res;const a=this.W,o=this.H,l=new Float32Array(a*o*2);for(let _=0;_<o;_++)for(let m=0;m<a;m++){const p=(_*a+m)*2;l[p]=m,l[p+1]=_}const c=new Uint32Array((a-1)*(o-1)*6);let h=0;for(let _=0;_<o-1;_++)for(let m=0;m<a-1;m++){const p=_*a+m,x=p+1,M=p+a,w=M+1;c[h++]=p,c[h++]=x,c[h++]=M,c[h++]=x,c[h++]=w,c[h++]=M}this.grid=new en,this.grid.setAttribute("cell",new Cn(l,2)),this.grid.setIndex(new Cn(c,1));const d=new ki(new O(0,-50,-o*this.dx),new O(a*this.dx,1200,0));this.grid.boundingBox=d,this.grid.boundingSphere=d.getBoundingSphere(new Oi),this.imageryTex=e.imagery?this.imgTex(e.imagery):null,this.basemapTex=e.basemap?this.imgTex(e.basemap):null;const u=this.texMode==="imagery"?this.imageryTex??this.basemapTex:this.basemapTex??this.imageryTex,f={value:new we(a,o)};this.terrainMat=new gi({vertexShader:lb,fragmentShader:cb,glslVersion:Kn,uniforms:{...this.U,uTerrain:{value:t},uState:{value:s},uSize:f,uDx:{value:this.dx},uMap:{value:u},uHasMap:{value:u?1:0}}}),this.terrain=new Dt(this.grid,this.terrainMat),this.terrain.frustumCulled=!1,this.terrain.renderOrder=0,this.root.add(this.terrain),this.trendA=new Bf(this.renderer,a,o,s,r,t),this.trendReset=!0,this.waterMat=new gi({vertexShader:hb,fragmentShader:ub,glslVersion:Kn,transparent:!0,depthWrite:!1,side:si,uniforms:{...this.U,uTerrain:{value:t},uMod:{value:i},uState:{value:s},uAux:{value:r},uTrend:{value:this.trendA.texture},uSize:f,uDx:{value:this.dx}}}),this.water=new Dt(this.grid,this.waterMat),this.water.frustumCulled=!1,this.water.renderOrder=10,this.root.add(this.water),this.buildBuildings(e,t,s,i,f),this.terrainTexRef=t,this.modTexRef=i,this.flowA=new Of(this.renderer,a,o,this.dx,s,t,i,this.U),this.arrowsA=new zf(a,o,this.dx,s,t,i,this.U),this.root.add(this.flowA.group),this.root.add(this.arrowsA.mesh),this.applyFlowMode();const g=this.defaultView();this.director.jumpTo(ji.viewOf(g.target,g.pos.distanceTo(g.target)*2.4,35,62)),this.director.flyTo(g,4)}imgTex(e){const t=new Fn(e);return t.colorSpace=di,t.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),t.minFilter=Ss,t.magFilter=mi,t.generateMipmaps=!0,t.needsUpdate=!0,t}buildBuildings(e,t,i,s,r){const a=e.buildings;if(!a.length)return;const o=e.dem,l=this.W,c=this.H,h=this.dx,d=this.H*h,u=(I,C)=>{const P=Math.min(l-1,Math.max(0,Math.floor(I/h))),U=Math.min(c-1,Math.max(0,Math.floor(C/h)));return o[U*l+P]},f=[],g=[],_=[],m=[],p=[],x=[],M=new at;for(const I of a){const C=I.r;if(C.length<3)continue;let P=1/0,U=-1/0;for(const[oe,me]of C){const he=u(oe,me);he<P&&(P=he),he>U&&(U=he)}if(!isFinite(P)||P<-1)continue;const ie=P-.5,S=P+Math.min(Math.max(I.h,3),420)+Math.min(U-P,8),b=I.h>70,H=b?.58+(Math.random()-.5)*.05:.09+(Math.random()-.5)*.06,z=b?.04+Math.random()*.04:.03+Math.random()*.04,Y=(b?.8:.86)+(Math.random()-.5)*.06;M.setHSL(H,z,Y);const Z=Math.random();let j=0;for(let oe=0;oe<C.length;oe++){const me=C[oe],he=C[(oe+1)%C.length];j+=me[0]*he[1]-he[0]*me[1]}const F=j<0?[...C].reverse():C;for(let oe=0;oe<F.length;oe++){const me=F[oe],he=F[(oe+1)%F.length],ne=he[0]-me[0],fe=he[1]-me[1],xe=Math.hypot(ne,fe);if(xe<.2)continue;const ge=fe/xe,Xe=-ne/xe,Fe=f.length/3,He=[[me[0],ie,me[1]],[he[0],ie,he[1]],[he[0],S,he[1]],[me[0],S,me[1]]];for(const[rt,nt,N]of He)f.push(rt,nt,-N),g.push(ge,0,-Xe),_.push(M.r*.92,M.g*.92,M.b*.92),m.push((rt+.5)/(l*h),(N+.5)/d),p.push(Z);x.push(Fe,Fe+1,Fe+2,Fe,Fe+2,Fe+3)}const te=F.map(([oe,me])=>new we(oe,me));let pe=[];try{pe=Zr.triangulateShape(te,[])}catch{pe=[]}const le=f.length/3;for(const[oe,me]of F)f.push(oe,S,-me),g.push(0,1,0),_.push(M.r,M.g,M.b),m.push((oe+.5)/(l*h),(me+.5)/d),p.push(0);for(const oe of pe)x.push(le+oe[0],le+oe[1],le+oe[2])}const w=new en;w.setAttribute("position",new Ct(f,3)),w.setAttribute("normal",new Ct(g,3)),w.setAttribute("color",new Ct(_,3)),w.setAttribute("bUv",new Ct(m,2)),w.setAttribute("lit",new Ct(p,1)),w.setIndex(x),this.buildingMat=new gi({vertexShader:db,fragmentShader:fb,glslVersion:Kn,uniforms:{...this.U,uTerrain:{value:t},uState:{value:i},uMod:{value:s},uSize:r}}),this.buildings=new Dt(w,this.buildingMat),this.buildings.frustumCulled=!1,this.buildings.renderOrder=1,this.root.add(this.buildings)}setStateTextures(e,t){this.terrainMat&&(this.terrainMat.uniforms.uState.value=e),this.waterMat&&(this.waterMat.uniforms.uState.value=e,this.waterMat.uniforms.uAux.value=t,this.bindTrend()),this.buildingMat&&(this.buildingMat.uniforms.uState.value=e)}bindTrend(){if(!this.waterMat)return;const e=this.waterMat.uniforms.uState.value,t=this.trendB&&this.trendB.stateTex===e?this.trendB:this.trendA;this.waterMat.uniforms.uTrend.value=t?t.texture:null}advanceSim(e){this.pendingAdvance+=e}setSubgrid(e){this.U.uSubgrid.value=e?1:0}setBaselineTextures(e,t=null){this.flowB&&(this.root.remove(this.flowB.group),this.flowB.dispose(),this.flowB=null),this.arrowsB&&(this.root.remove(this.arrowsB.mesh),this.arrowsB.dispose(),this.arrowsB=null),this.trendB&&(this.trendB.dispose(),this.trendB=null),e&&this.terrainTexRef&&this.modTexRef&&(this.flowB=new Of(this.renderer,this.W,this.H,this.dx,e,this.terrainTexRef,this.modTexRef,this.U),this.arrowsB=new zf(this.W,this.H,this.dx,e,this.terrainTexRef,this.modTexRef,this.U),this.root.add(this.flowB.group),this.root.add(this.arrowsB.mesh),t&&(this.trendB=new Bf(this.renderer,this.W,this.H,e,t,this.terrainTexRef),this.trendReset=!0)),this.applyFlowMode(),this.bindTrend()}setFlowMode(e){this.flowMode=e,this.applyFlowMode()}get effFlow(){return this.waterMode==="max"?"none":this.flowMode}applyFlowMode(){const e=this.effFlow==="particles",t=this.effFlow==="arrows";this.flowA&&(this.flowA.group.visible=e),this.arrowsA&&(this.arrowsA.mesh.visible=t),this.flowB&&(this.flowB.group.visible=!1),this.arrowsB&&(this.arrowsB.mesh.visible=!1)}setFlowSpawn(e,t,i){(e==="A"?this.flowA:this.flowB)?.setSpawn(t,i)}resetFlow(){this.flowA?.reset(),this.flowB?.reset(),this.trendReset=!0,this.pendingAdvance=0}setTextureMode(e){if(this.texMode=e,!this.terrainMat)return;const t=e==="imagery"?this.imageryTex??this.basemapTex:this.basemapTex??this.imageryTex;this.terrainMat.uniforms.uMap.value=t,this.terrainMat.uniforms.uHasMap.value=t?1:0}setBuildingsBlock(e){this.U.uBuildings.value=e?1:0}setShowMax(e){this.U.uShowMax.value=e?1:0}setShadows(e){this.U.uShadow.value=e?1:0}setWaterMode(e){this.waterMode=e,this.U.uWaterMode.value=e==="max"?1:0,this.applyFlowMode()}setExaggeration(e){const t=this.director.controls.target,i=e/this.exag;this.exag=e,this.root.scale.y=e,this.U.uExag.value=e;const s=t.y*(i-1);t.y+=s,this.camera.position.y+=s,this.director.controls.update()}cameraPreset(e,t){const i=this.director.controls.target,s=t?t.x:i.x,r=t?t.y:-i.z,a=new O(s,this.groundAt(s,r)*this.exag+2,-r),o=Math.max(this.W,this.H)*this.dx,l=new O().subVectors(this.camera.position,i),c=ui.radToDeg(Math.atan2(l.x,l.z));if(e==="bird"){const h=new O(this.W*this.dx/2,0,-(this.H*this.dx)/2);h.y=this.groundAt(h.x,-h.z)*this.exag,this.director.flyTo(ji.viewOf(h,o*.95,.01,84),2.2)}else e==="street"?this.director.flyTo(this.clearView(a.setY(a.y+3),240,c),2.4):this.director.flyTo(ji.viewOf(a,900,c,32),2.2)}clearView(e,t,i){const s=this.assets;if(!s)return ji.viewOf(e,t,i,10);const r=(a,o)=>{const l=Math.min(this.W-1,Math.max(0,Math.floor(a/this.dx))),h=Math.min(this.H-1,Math.max(0,Math.floor(o/this.dx)))*this.W+l;return(s.dem[h]+s.bldh[h])*this.exag};for(const a of[9,14,20,28])for(let o=0;o<12;o++){const l=i+(o%2?1:-1)*Math.ceil(o/2)*30,c=ji.viewOf(e,t,l,a);let h=!0;for(let d=1;d<=24&&h;d++){const u=new O().lerpVectors(e,c.pos,d/24);r(u.x,-u.z)>u.y-2&&(h=!1)}if(h)return c}return ji.viewOf(e,t,i,35)}clearScene(){for(const e of[this.terrain,this.water,this.buildings])e&&(this.root.remove(e),e.material.dispose());this.buildings&&this.buildings.geometry.dispose(),this.grid?.dispose(),this.grid=null,this.terrain=this.water=this.buildings=null,this.imageryTex?.dispose(),this.basemapTex?.dispose(),this.imageryTex=this.basemapTex=null,this.setBaselineTextures(null),this.flowA&&(this.root.remove(this.flowA.group),this.flowA.dispose(),this.flowA=null),this.arrowsA&&(this.root.remove(this.arrowsA.mesh),this.arrowsA.dispose(),this.arrowsA=null),this.trendA&&(this.trendA.dispose(),this.trendA=null),this.split=null,this.clearMeasures(),this.setLabels([])}setWeather(e,t,i){const s=ui.clamp(1-ui.smoothstep(Math.sin((i-6)/12*Math.PI),-.15,.15),0,1);this.U.uNight.value=s*.22,this.U.uStorm.value=ui.clamp(t,0,1),this.U.uRainI.value=ui.clamp(e/60,0,1.6);const r=Math.max(Math.sin((i-6)/12*Math.PI),.08),a=(i-12)/12*Math.PI*.9;this.U.uSun.value.set(Math.sin(a)*Math.cos(r*1.3),Math.max(r,.15),Math.cos(a)*Math.cos(r*1.3)).normalize();const o=new at(11123917),l=new at(8161171),c=new at(2897218),h=o.clone().lerp(l,this.U.uStorm.value).lerp(c,s*.8);this.U.uFogColor.value.copy(h),this.U.uSkyColor.value.copy(new at(9418464).lerp(new at(3818578),this.U.uStorm.value).lerp(new at(1581104),s*.8));const d=Math.min(1,5e3/Math.max(1,this.W*this.dx));this.U.uFogDensity.value=(4e-5+3e-5*this.U.uStorm.value+2e-5*this.U.uRainI.value)*d,this.renderer.setClearColor(h)}lightning(){this.flashT=.18}setLabels(e){const t=new Set(e.map(a=>a.id));for(const[a,o]of this.labelEls)t.has(a)||(o.el.remove(),this.labelEls.delete(a));for(const a of e){let o=this.labelEls.get(a.id);if(!o){const l=document.createElement("div");this.labelsDiv.appendChild(l),o={el:l,item:a},this.labelEls.set(a.id,o)}o.item=a,o.el.className=`marker-label ${a.cls}`,a.color!==void 0&&o.el.style.setProperty("--dot",`#${a.color.toString(16).padStart(6,"0")}`),o.el.innerHTML=`${a.text}${a.sub?`<span class="depth">${a.sub}</span>`:""}`}const i=this.exag,s=this.pinGeo,r=this.pinWhite;for(const a of this.markerGroup.children){const o=a.material;o!==r&&o.dispose()}this.markerGroup.clear();for(const a of e){const o=this.groundAt(a.x,a.y),l=a.cls.includes("landmark"),c=a.cls.includes("upin"),h=a.cls.includes("measure"),d=a.color??(a.cls.includes("gauge")?2842585:a.cls.includes("none")?7042433:a.cls.includes("severe")?13648175:a.cls.includes("moderate")||a.cls.includes("val")?14060058:h?a.cls.includes("temporary")?1746837:6256276:l?5134180:7042433),u=l?14:h?20:c?34:26,f=new Dt(s.pin,r);f.scale.set(1,u/i,1),f.position.set(a.x,o+u/2/i,-a.y),this.markerGroup.add(f);const g=new Dt(l||h?s.small:s.head,new $s({color:d}));if(g.scale.y=1/i,g.position.set(a.x,o+(u+1)/i,-a.y),this.markerGroup.add(g),l||h)continue;const _=new Dt(s.ring,new $s({color:d,transparent:!0,opacity:c?.9:.6,side:si}));_.rotation.x=-Math.PI/2,_.position.set(a.x,o+.5/i,-a.y),c&&_.scale.setScalar(1.6),this.markerGroup.add(_)}}updateLabels(){const e=new O,t=window.innerWidth,i=window.innerHeight,s=o=>o.includes("upin")?-1:o.includes("val")?0:o.includes("gauge")?1:o.includes("severe")?2:o.includes("landmark")?4:o.includes("measure")?3.5:3,r=[];for(const{el:o,item:l}of this.labelEls.values()){e.set(l.x,this.groundAt(l.x,l.y)*this.exag+(l.cls.includes("landmark")?18:l.cls.includes("measure")?24:l.cls.includes("upin")?38:30),-l.y);const c=e.distanceTo(this.camera.position);e.project(this.camera);const h=(e.x+1)/2*t,d=(1-e.y)/2*i;if(!(e.z<1&&c<9e3&&Math.abs(e.x)<1.05&&Math.abs(e.y)<1.05&&h>this.labelInset.l+24&&h<t-this.labelInset.r-24&&d>this.labelInset.t+30&&d<i-Math.max(20,this.labelInset.b))){o.style.display="none";continue}r.push({el:o,sx:h,sy:d,dist:c,p:s(o.className),wpx:o.offsetWidth||120})}r.sort((o,l)=>o.p-l.p||o.dist-l.dist);const a=[];for(const o of r){const l={x0:o.sx-o.wpx/2-4,x1:o.sx+o.wpx/2+4,y0:o.sy-26,y1:o.sy+2};if(l.x0<this.labelInset.l+8||l.x1>t-this.labelInset.r-8){o.el.style.display="none";continue}if(a.some(h=>l.x0<h.x1&&l.x1>h.x0&&l.y0<h.y1&&l.y1>h.y0)){o.el.style.display="none";continue}a.push(l),o.el.style.display="flex",o.el.style.left=`${o.sx}px`,o.el.style.top=`${o.sy}px`,o.el.style.opacity=`${ui.clamp(1.3-o.dist/9e3,.4,1)}`}}groundAt(e,t){if(!this.assets)return 0;const i=ui.clamp(Math.floor(e/this.dx),0,this.W-1),s=ui.clamp(Math.floor(t/this.dx),0,this.H-1),r=this.assets.dem[s*this.W+i];return r<-1?.5:r}raycastGround(e,t){if(!this.assets)return null;const i=new we(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),s=new If;s.setFromCamera(i,this.camera);const r=s.ray.origin,a=s.ray.direction,o=4e4;let l=Math.max(this.dx*.5,2),c=0,h=!0;for(let d=0;d<o;d+=l){const u=r.x+a.x*d,f=r.y+a.y*d,g=r.z+a.z*d,_=u,m=-g,p=_>=0&&m>=0&&_<=this.W*this.dx&&m<=this.H*this.dx,x=p?this.groundAt(_,m)*this.exag:-1e9,M=f>x;if(!M&&h&&p){let w=c,I=d;for(let ie=0;ie<12;ie++){const S=(w+I)/2,b=r.x+a.x*S,H=r.y+a.y*S,z=r.z+a.z*S;H>this.groundAt(b,-z)*this.exag?w=S:I=S}const C=(w+I)/2,P=r.x+a.x*C,U=r.z+a.z*C;return{x:P,y:-U,z:this.groundAt(P,-U)}}h=M,c=d,d>2e3&&(l=Math.max(l,this.dx))}return null}clearMeasures(){this.measureGroup.clear(),this.setDraft([],"wall")}setMeasures(e){this.measureGroup.clear();const t=i=>i.role??"whatif";for(const{m:i,eff:s,selected:r}of e){const a=i.kind==="wall"?t(i)==="whatif"?16167531:t(i)==="record"?8162984:3003583:i.kind==="sandbag"?10910015:i.kind==="pump"?5032432:i.kind==="tank"?7066778:9471465,o=r?15884300:s<0?15680580:a,l=s===0,c=(d=1)=>new $s({color:o,transparent:l||d<1,opacity:l?Math.min(.28,d):d,side:si,depthWrite:!l}),h=d=>{d.userData.id=i.id,this.measureGroup.add(d)};if(i.kind==="wall"||i.kind==="sandbag"){const d=i.height??1;if(i.cells?.length&&i.pts.length<2){const u=new tr(this.dx,d,this.dx),f=new ZS(u,c(),i.cells.length),g=new It;i.cells.forEach((_,m)=>{const p=_%this.W,x=Math.floor(_/this.W),M=(p+.5)*this.dx,w=(x+.5)*this.dx,I=this.groundAt(M,w);g.makeTranslation(M,I+(s<0?-d/2:d/2),-w),f.setMatrixAt(m,g)}),f.instanceMatrix.needsUpdate=!0,h(f);continue}for(let u=1;u<i.pts.length;u++){const f=i.pts[u-1],g=i.pts[u],_=Math.hypot(g.x-f.x,g.y-f.y);if(_<.5)continue;const m=new tr(_+1.5,d,i.kind==="wall"?1.2:2.2),p=new Dt(m,c()),x=(f.x+g.x)/2,M=(f.y+g.y)/2,w=Math.max(this.groundAt(f.x,f.y),this.groundAt(g.x,g.y));p.position.set(x,w+(s<0?-d/2:d/2),-M),p.rotation.y=Math.atan2(-(g.y-f.y),g.x-f.x),h(p)}if(r)for(const u of i.pts){const f=new Dt(new Xr(1.6,10,8),new $s({color:15884300}));f.position.set(u.x,this.groundAt(u.x,u.y)+d+1.2,-u.y),h(f)}}else if(i.kind==="pump"){const d=i.pts[0];if(!d)continue;const u=this.groundAt(d.x,d.y),f=new Dt(new _l(4,5,7,12),c());f.position.set(d.x,u+3.5,-d.y),h(f);const g=new Dt(new xl((i.radius??30)-2,i.radius??30,32),c(.5));g.rotation.x=-Math.PI/2,g.position.set(d.x,u+.6,-d.y),h(g)}else if(i.kind==="tank"||i.kind==="drain"){if(i.pts.length>=3){const d=new Dm(i.pts.map(_=>new we(_.x,-_.y))),u=new Cu(d);u.rotateX(Math.PI/2);const f=this.groundAt(i.pts[0].x,i.pts[0].y),g=new Dt(u,c(.35));g.position.y=f+.8,h(g)}else if(i.pts[0]){const d=i.pts[0],u=this.groundAt(d.x,d.y),f=new Dt(new Au(i.radius??60,40),c(.35));f.rotation.x=-Math.PI/2,f.position.set(d.x,u+.8,-d.y),h(f)}}}}pickMeasure(e,t){const i=new we(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),s=new If;s.setFromCamera(i,this.camera);const r=s.intersectObjects(this.measureGroup.children,!0);for(const a of r){let o=a.object;for(;o&&o.userData.id===void 0;)o=o.parent;if(o)return o.userData.id}return null}setDraft(e,t){if(this.draftLine&&(this.root.remove(this.draftLine),this.draftLine.geometry.dispose(),this.draftLine=null),e.length<1)return;const i=e.map(r=>new O(r.x,this.groundAt(r.x,r.y)+1.5,-r.y));e.length===1&&i.push(i[0].clone().add(new O(0,10,0)));const s=new en().setFromPoints(i);this.draftLine=new Em(s,new Tm({color:t==="wall"?16167531:16777215})),this.draftLine.renderOrder=30,this.root.add(this.draftLine)}defaultView(){const e=this.W*this.dx/2,t=this.H*this.dx/2,i=new O(e,this.groundAt(e,t)*this.exag+5,-t);return ji.viewOf(i,Math.max(this.W,this.H)*this.dx*.95,20,42)}viewAt(e,t,i=900){const s=new O(e,this.groundAt(e,t)*this.exag+5,-t);return ji.viewOf(s,i,-20+Math.random()*50,30)}render(e){this.time+=e,this.U.uTime.value=this.time,this.flashT>0?(this.flashT-=e,this.U.uFlash.value=Math.max(0,this.flashT/.18)*(.6+.4*Math.random())):this.U.uFlash.value=0,this.director.update(e),this.U.uCam.value.copy(this.camera.position),this.rainMat.uniforms.uCenter.value.copy(this.director.controls.target),this.rain.visible=this.U.uRainI.value>.01,this.sky.position.copy(this.camera.position);const t=this.camera.position.distanceTo(this.director.controls.target);this.effFlow==="particles"&&(this.flowA?.update(e,t),this.split&&this.flowB?.update(e,t));const i=this.pendingAdvance;this.pendingAdvance=0;const s=this.U.uSubgrid.value>.5;if(this.trendA?.update(i,s,this.trendReset),this.trendB?.update(i,s,this.trendReset),this.trendReset=!1,this.bindTrend(),this.split&&this.split.frac>.002&&this.split.frac<.998){const r=this.renderer.getDrawingBufferSize(new we),a=Math.round(this.split.frac*r.x),o=this.effFlow==="particles",l=this.effFlow==="arrows";this.renderer.setScissorTest(!0),this.setStateTextures(this.split.left.state,this.split.left.aux),this.flowA&&(this.flowA.group.visible=!1),this.arrowsA&&(this.arrowsA.mesh.visible=!1),this.flowB&&(this.flowB.group.visible=o),this.arrowsB&&(this.arrowsB.mesh.visible=l),this.renderer.setScissor(0,0,a,r.y),this.renderer.render(this.scene,this.camera),this.setStateTextures(this.split.right.state,this.split.right.aux),this.flowB&&(this.flowB.group.visible=!1),this.arrowsB&&(this.arrowsB.mesh.visible=!1),this.flowA&&(this.flowA.group.visible=o),this.arrowsA&&(this.arrowsA.mesh.visible=l),this.renderer.setScissor(a,0,r.x-a,r.y),this.renderer.render(this.scene,this.camera),this.renderer.setScissorTest(!1)}else this.renderer.render(this.scene,this.camera);this.updateLabels()}}function yb(n){const e=xb,t=_b.map(i=>new at(i));if(n<=0)return`#${t[0].getHexString()}`;for(let i=1;i<e.length;i++)if(n<=e[i]){const s=(n-e[i-1])/(e[i]-e[i-1]);return`#${t[i-1].clone().lerp(t[i],s).getHexString()}`}return`#${t[t.length-1].getHexString()}`}class Sb{constructor(e,t,i){X(this,"measures",[]);X(this,"nextId",1);X(this,"baseDrain",null);X(this,"sea",null);X(this,"rPos");X(this,"rNeg");this.W=e,this.H=t,this.dx=i,this.rPos=new Float32Array(e*t),this.rNeg=new Float32Array(e*t)}add(e){const t={...e,id:this.nextId++};return this.ensureKey(t),this.measures.push(t),t}get(e){return this.measures.find(t=>t.id===e)}update(e,t){const i=this.get(e);i&&(Object.assign(i,t),i.locked&&(i.locked=!1),this.ensureKey(i))}ensureKey(e){(e.role??"whatif")!=="whatif"&&!e.key&&(e.key=`${e.kind}_${Date.now().toString(36)}${e.id.toString(36)}`)}remove(e){this.measures=this.measures.filter(t=>t.id!==e)}clearWhatIf(){this.measures=this.measures.filter(e=>(e.role??"whatif")!=="whatif"||e.scenario_only)}replaceAll(e){this.measures=[],this.nextId=1;for(const t of e)this.add(t)}existsAt(e,t){const i=Hf(e.built),s=Hf(e.removed);return(i===null||t.eventStart>=i)&&(s===null||t.eventStart<s)}effect(e,t){if(e.info||t.bare)return 0;const i=e.role??"whatif";if(i==="whatif")return e.key&&t.keys?.includes(e.key)||t.whatIf&&!e.scenario_only?1:0;if(e.key&&t.exclude?.includes(e.key))return 0;if(i==="record"){const s=this.existsAt(e,t);return e.in_dtm?s?0:e.kind==="wall"||e.kind==="sandbag"?-1:0:s?1:0}return e.events?.length&&!e.events.includes(t.eventId)||e.from_h!==void 0&&e.from_h!==null&&t.simH<e.from_h||e.to_h!==void 0&&e.to_h!==null&&t.simH>=e.to_h?0:1}signature(e){return this.measures.map(t=>`${t.id}:${this.effect(t,e)}`).join("|")}cost(e){const t=this.length(e);switch(e.kind){case"wall":return t*(e.height??1)*45e3;case"sandbag":return t*800;case"pump":return 25e5+(e.rate??1)*12e5;case"tank":return(e.capacity??1e4)*9e3;case"drain":return this.area(e)*1500}}length(e){if(e.cells?.length&&e.pts.length<2)return e.cells.length*this.dx;let t=0;for(let i=1;i<e.pts.length;i++)t+=Math.hypot(e.pts[i].x-e.pts[i-1].x,e.pts[i].y-e.pts[i-1].y);return t}area(e){if(e.cells?.length&&e.pts.length<3)return e.cells.length*this.dx*this.dx;if(e.pts.length<3)return Math.PI*(e.radius??50)**2;let t=0;const i=e.pts;for(let s=0;s<i.length;s++){const r=i[(s+1)%i.length];t+=i[s].x*r.y-r.x*i[s].y}return Math.abs(t)/2}rasterize(e,t){const i=this.W*this.H;this.rPos.fill(0),this.rNeg.fill(0);for(let s=0;s<i;s++)e[s*4]=0,e[s*4+1]=0,e[s*4+2]=0,e[s*4+3]=this.baseDrain?this.baseDrain[s]:1;for(const s of this.measures){const r=this.effect(s,t);if(!r)continue;const a=this.cellsOf(s);if(a.length){if(s.kind==="wall"||s.kind==="sandbag"){const o=(s.height??1)*r;for(const l of a)this.sea&&this.sea[l]||(o>0?this.rPos[l]=Math.max(this.rPos[l],o):this.rNeg[l]=Math.min(this.rNeg[l],o))}else if(s.kind==="pump"){const o=(s.rate??1)/(a.length*this.dx*this.dx);for(const l of a)e[l*4+1]+=o}else if(s.kind==="tank"){const o=(s.capacity??2e4)/(a.length*this.dx*this.dx);for(const l of a)e[l*4+2]+=o}else if(s.kind==="drain")for(const o of a)e[o*4+3]*=s.factor??2}}for(let s=0;s<i;s++)e[s*4]=this.rPos[s]>0?this.rPos[s]:this.rNeg[s]}cellsOf(e){return e.cells?.length?e.cells.filter(t=>t>=0&&t<this.W*this.H):e.pts.length?e.kind==="wall"||e.kind==="sandbag"?this.lineCells(e.pts):e.kind==="pump"?this.discCells(e.pts[0],e.radius??25):e.pts.length>=3?this.polygonCells(e.pts):this.discCells(e.pts[0],e.radius??50):[]}cellOf(e){return{i:Math.floor(e.x/this.dx),j:Math.floor(e.y/this.dx)}}inside(e,t){return e>=0&&t>=0&&e<this.W&&t<this.H}lineCells(e){const t=[],i=new Set,s=(r,a)=>{if(this.inside(r,a)){const o=a*this.W+r;i.has(o)||(i.add(o),t.push(o))}};if(e.length===1){const r=this.cellOf(e[0]);return s(r.i,r.j),t}for(let r=1;r<e.length;r++){const a=this.cellOf(e[r-1]),o=this.cellOf(e[r]);let{i:l,j:c}=a;const{i:h,j:d}=o,u=Math.abs(h-l),f=-Math.abs(d-c),g=l<h?1:-1,_=c<d?1:-1;let m=u+f;for(;s(l,c),!(l===h&&c===d);){const p=2*m;p>=f&&(m+=f,l+=g,s(l,c)),p<=u&&(m+=u,c+=_,s(l,c))}}return t}discCells(e,t){const i=[],s=Math.max(1,Math.ceil(t/this.dx)),r=this.cellOf(e);for(let a=r.j-s;a<=r.j+s;a++)for(let o=r.i-s;o<=r.i+s;o++)this.inside(o,a)&&Math.hypot((o+.5)*this.dx-e.x,(a+.5)*this.dx-e.y)<=t&&i.push(a*this.W+o);if(!i.length){const a=r.j*this.W+r.i;this.inside(r.i,r.j)&&i.push(a)}return i}polygonCells(e){const t=[],i=e.map(c=>c.x),s=e.map(c=>c.y),r=Math.max(0,Math.floor(Math.min(...i)/this.dx)),a=Math.min(this.W-1,Math.floor(Math.max(...i)/this.dx)),o=Math.max(0,Math.floor(Math.min(...s)/this.dx)),l=Math.min(this.H-1,Math.floor(Math.max(...s)/this.dx));for(let c=o;c<=l;c++)for(let h=r;h<=a;h++)wb((h+.5)*this.dx,(c+.5)*this.dx,e)&&t.push(c*this.W+h);return t}toSaved(e,t){const i=this.measures.filter(s=>!s.locked).map(s=>{const{id:r,locked:a,...o}=s;return o});return{version:1,scene:e,origin:t,saved:new Date().toISOString(),measures:i}}loadSaved(e,t){const i=(e.origin?.e0??t.e0)-t.e0,s=(e.origin?.n0??t.n0)-t.n0;for(const r of e.measures??[]){const a={...r,pts:(r.pts??[]).map(o=>({x:o.x+i,y:o.y+s}))};if(a.key){const o=this.measures.find(l=>l.key===a.key);o&&(this.measures=this.measures.filter(l=>l!==o))}this.add(a)}}}function Hf(n){if(!n)return null;const e=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(n.trim());return e?new Date(`${e[1]}-${e[2]}-${e[3]??"01"}T00:00:00+08:00`).getTime():null}function wb(n,e,t){let i=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){const a=t[s].x,o=t[s].y,l=t[r].x,c=t[r].y;o>e!=c>e&&n<(l-a)*(e-o)/(c-o)+a&&(i=!i)}return i}var zl,Rt,km,Om,_s,Vf,zm,Bm,jc,ol,$a,Hm,Iu,Zh,Jh,Ml={},yl=[],bb=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Bl=Array.isArray;function Qi(n,e){for(var t in e)n[t]=e[t];return n}function Uu(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function Vm(n,e,t){var i,s,r,a={};for(r in e)r=="key"?i=e[r]:r=="ref"?s=e[r]:a[r]=e[r];if(arguments.length>2&&(a.children=arguments.length>3?zl.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(r in n.defaultProps)a[r]===void 0&&(a[r]=n.defaultProps[r]);return ll(n,a,i,s,null)}function ll(n,e,t,i,s){var r={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++km,__i:-1,__u:0};return s==null&&Rt.vnode!=null&&Rt.vnode(r),r}function ft(n){return n.children}function Xa(n,e){this.props=n,this.context=e}function ir(n,e){if(e==null)return n.__?ir(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?ir(n):null}function Tb(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,i=[],s=[],r=Qi({},e);r.__v=e.__v+1,Rt.vnode&&Rt.vnode(r),Fu(n.__P,r,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,i,t??ir(e),!!(32&e.__u),s),r.__v=e.__v,r.__.__k[r.__i]=r,qm(i,r,s),e.__e=e.__=null,r.__e!=t&&Gm(r)}}function Gm(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),Gm(n)}function Gf(n){(!n.__d&&(n.__d=!0)&&_s.push(n)&&!Sl.__r++||Vf!=Rt.debounceRendering)&&((Vf=Rt.debounceRendering)||zm)(Sl)}function Sl(){try{for(var n,e=1;_s.length;)_s.length>e&&_s.sort(Bm),n=_s.shift(),e=_s.length,Tb(n)}finally{_s.length=Sl.__r=0}}function Wm(n,e,t,i,s,r,a,o,l,c,h){var d,u,f,g,_,m,p=i&&i.__k||yl,x=e.length;for(l=Eb(t,e,p,l,x),d=0;d<x;d++)(f=t.__k[d])!=null&&(u=f.__i!=-1&&p[f.__i]||Ml,f.__i=d,m=Fu(n,f,u,s,r,a,o,l,c,h),g=f.__e,f.ref&&u.ref!=f.ref&&(u.ref&&Nu(u.ref,null,f),h.push(f.ref,f.__c||g,f)),_==null&&g!=null&&(_=g),4&f.__u?(l=$m(f,l,n),u.__e&&(u.__e=null)):typeof f.type=="function"&&m!==void 0?l=m:g&&(l=g.nextSibling),f.__u&=-7);return t.__e=_,l}function Eb(n,e,t,i,s){var r,a,o,l,c,h=t.length,d=h,u=0;for(n.__k=new Array(s),r=0;r<s;r++)(a=e[r])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=n.__k[r]=ll(null,a,null,null,null):Bl(a)?a=n.__k[r]=ll(ft,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=n.__k[r]=ll(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):n.__k[r]=a,l=r+u,a.__=n,a.__b=n.__b+1,o=null,(c=a.__i=Ab(a,t,l,d))!=-1&&(d--,(o=t[c])&&(o.__u|=2)),o==null||o.__v==null?(c==-1&&(s>h?u--:s<h&&u++),typeof a.type!="function"&&(a.__u|=4)):c!=l&&(c==l-1?u--:c==l+1?u++:(c>l?u--:u++,a.__u|=4))):n.__k[r]=null;if(d)for(r=0;r<h;r++)(o=t[r])!=null&&!(2&o.__u)&&(o.__e==i&&(i=ir(o)),jm(o,o));return i}function $m(n,e,t){var i,s;if(typeof n.type=="function"){for(i=n.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=n,e=$m(i[s],e,t));return e}n.__e!=e&&(e&&n.type&&!e.parentNode&&(e=ir(n)),e=t.insertBefore(n.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Ab(n,e,t,i){var s,r,a,o=n.key,l=n.type,c=e[t],h=c!=null&&(2&c.__u)==0;if(c===null&&o==null||h&&o==c.key&&l==c.type)return t;if(i>(h?1:0)){for(s=t-1,r=t+1;s>=0||r<e.length;)if((c=e[a=s>=0?s--:r++])!=null&&!(2&c.__u)&&o==c.key&&l==c.type)return a}return-1}function Wf(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||bb.test(e)?t:t+"px"}function jo(n,e,t,i,s){var r,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(e in i)t&&e in t||Wf(n.style,e,"");if(t)for(e in t)i&&t[e]==i[e]||Wf(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(Hm,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+r]=t,t?i?t[$a]=i[$a]:(t[$a]=Iu,n.addEventListener(e,r?Jh:Zh,r)):n.removeEventListener(e,r?Jh:Zh,r);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function $f(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[ol]==null)e[ol]=Iu++;else if(e[ol]<t[$a])return;return t(Rt.event?Rt.event(e):e)}}}function Fu(n,e,t,i,s,r,a,o,l,c){var h,d,u,f,g,_,m,p,x,M,w,I,C,P,U,ie,S=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),r=[o=e.__e=t.__e]),(h=Rt.__b)&&h(e);e:if(typeof S=="function"){d=a.length;try{if(x=e.props,M=S.prototype&&S.prototype.render,w=(h=S.contextType)&&i[h.__c],I=h?w?w.props.value:h.__:i,t.__c?p=(u=e.__c=t.__c).__=u.__E:(M?e.__c=u=new S(x,I):(e.__c=u=new Xa(x,I),u.constructor=S,u.render=Rb),w&&w.sub(u),u.state||(u.state={}),u.__n=i,f=u.__d=!0,u.__h=[],u._sb=[]),M&&u.__s==null&&(u.__s=u.state),M&&S.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Qi({},u.__s)),Qi(u.__s,S.getDerivedStateFromProps(x,u.__s))),g=u.props,_=u.state,u.__v=e,f)M&&S.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),M&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(M&&S.getDerivedStateFromProps==null&&x!==g&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(x,I),e.__v==t.__v||!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(x,u.__s,I)===!1){e.__v!=t.__v&&(u.props=x,u.state=u.__s,u.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(b){b&&(b.__=e)}),yl.push.apply(u.__h,u._sb),u._sb=[],u.__h.length&&a.push(u),o=ir(t);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(x,u.__s,I),M&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(g,_,m)})}if(u.context=I,u.props=x,u.__P=n,u.__e=!1,C=Rt.__r,P=0,M)u.state=u.__s,u.__d=!1,C&&C(e),h=u.render(u.props,u.state,u.context),yl.push.apply(u.__h,u._sb),u._sb=[];else do u.__d=!1,C&&C(e),h=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++P<25);u.state=u.__s,u.getChildContext!=null&&(i=Qi(Qi({},i),u.getChildContext())),M&&!f&&u.getSnapshotBeforeUpdate!=null&&(m=u.getSnapshotBeforeUpdate(g,_)),U=h!=null&&h.type===ft&&h.key==null?Ym(h.props.children):h,o=Wm(n,Bl(U)?U:[U],e,t,i,s,r,a,o,l,c),u.base=e.__e,e.__u&=-161,u.__h.length&&a.push(u),p&&(u.__E=u.__=null)}catch(b){if(a.length=d,e.__v=null,l||r!=null){if(b.then){for(e.__u|=l?160:128;o&&o.nodeType==8&&o.nextSibling;)o=o.nextSibling;r!=null&&(r[r.indexOf(o)]=null),e.__e=o}else if(r!=null)for(ie=r.length;ie--;)Uu(r[ie])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),b.then||Xm(e),Rt.__e(b,e,t)}}else r==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):o=e.__e=Cb(t.__e,e,t,i,s,r,a,l,c);return(h=Rt.diffed)&&h(e),128&e.__u?void 0:o}function Xm(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(Xm))}function qm(n,e,t){for(var i=0;i<t.length;i++)Nu(t[i],t[++i],t[++i]);Rt.__c&&Rt.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(r){r.call(s)})}catch(r){Rt.__e(r,s.__v)}})}function Ym(n){return typeof n!="object"||n==null||n.__b>0?n:Bl(n)?n.map(Ym):n.constructor!==void 0?null:Qi({},n)}function Cb(n,e,t,i,s,r,a,o,l){var c,h,d,u,f,g,_,m=t.props||Ml,p=e.props,x=e.type;if(x=="svg"?s="http://www.w3.org/2000/svg":x=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),r!=null){for(c=0;c<r.length;c++)if((f=r[c])&&"setAttribute"in f==!!x&&(x?f.localName==x:f.nodeType==3)){n=f,r[c]=null;break}}if(n==null){if(x==null)return document.createTextNode(p);n=document.createElementNS(s,x,p.is&&p),o&&(Rt.__m&&Rt.__m(e,r),o=!1),r=null}if(x==null)m===p||o&&n.data==p||(n.data=p);else{if(r=x=="textarea"&&p.defaultValue!=null?null:r&&zl.call(n.childNodes),!o&&r!=null)for(m={},c=0;c<n.attributes.length;c++)m[(f=n.attributes[c]).name]=f.value;for(c in m)f=m[c],c=="dangerouslySetInnerHTML"?d=f:c=="children"||c in p||c=="value"&&"defaultValue"in p||c=="checked"&&"defaultChecked"in p||jo(n,c,null,f,s);for(c in p)f=p[c],c=="children"?u=f:c=="dangerouslySetInnerHTML"?h=f:c=="value"?g=f:c=="checked"?_=f:o&&typeof f!="function"||m[c]===f||jo(n,c,f,m[c],s);if(h)o||d&&(h.__html==d.__html||h.__html==n.innerHTML)||(n.innerHTML=h.__html),e.__k=[];else if(d&&(n.innerHTML=""),Wm(e.type=="template"?n.content:n,Bl(u)?u:[u],e,t,i,x=="foreignObject"?"http://www.w3.org/1999/xhtml":s,r,a,r?r[0]:t.__k&&ir(t,0),o,l),r!=null)for(c=r.length;c--;)Uu(r[c]);o&&x!="textarea"||(c="value",x=="progress"&&g==null?n.removeAttribute("value"):g!=null&&(g!==n[c]||x=="progress"&&!g||x=="option"&&g!=m[c])&&jo(n,c,g,m[c],s),c="checked",_!=null&&_!=n[c]&&jo(n,c,_,m[c],s))}return n}function Nu(n,e,t){try{if(typeof n=="function"){var i=typeof n.__u=="function";i&&n.__u(),i&&e==null||(n.__u=n(e))}else n.current=e}catch(s){Rt.__e(s,t)}}function jm(n,e,t){var i,s;if(Rt.unmount&&Rt.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||Nu(i,null,e)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){Rt.__e(r,e)}i.base=i.__P=i.__n=null}if(i=n.__k)for(s=0;s<i.length;s++)i[s]&&jm(i[s],e,t||typeof n.type!="function");t||Uu(n.__e),n.__c=n.__=n.__e=void 0}function Rb(n,e,t){return this.constructor(n,t)}function Pb(n,e,t){var i,s,r,a;e==document&&(e=document.documentElement),Rt.__&&Rt.__(n,e),s=(i=!1)?null:e.__k,r=[],a=[],Fu(e,n=e.__k=Vm(ft,null,[n]),s||Ml,Ml,e.namespaceURI,s?null:e.firstChild?zl.call(e.childNodes):null,r,s?s.__e:e.firstChild,i,a),qm(r,n,a),n.props.children=null}zl=yl.slice,Rt={__e:function(n,e,t,i){for(var s,r,a;e=e.__;)if((s=e.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(n)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,i||{}),a=s.__d),a)return s.__E=s}catch(o){n=o}throw n}},km=0,Om=function(n){return n!=null&&n.constructor===void 0},Xa.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Qi({},this.state),typeof n=="function"&&(n=n(Qi({},t),this.props)),n&&Qi(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Gf(this))},Xa.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Gf(this))},Xa.prototype.render=ft,_s=[],zm=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Bm=function(n,e){return n.__v.__b-e.__v.__b},Sl.__r=0,jc=Math.random().toString(8),ol="__d"+jc,$a="__a"+jc,Hm=/(PointerCapture)$|Capture$/i,Iu=0,Zh=$f(!1),Jh=$f(!0);const Db={subtitle:{zh:"香港洪涝实验室 · 交互式洪水数字孪生",en:"Hong Kong interactive flood digital twin"},scenario:{zh:"情景",en:"Scenario"},comparison:{zh:"真实数据 vs 模拟",en:"Observed vs simulated"},params:{zh:"参数",en:"Parameters"},surgeScale:{zh:"风暴潮增水倍率",en:"Surge multiplier"},waveSetup:{zh:"波浪增水（平均水位抬升）",en:"Wave set-up"},waveHs:{zh:"岸边有效波高 Hs（越浪）",en:"Nearshore wave height Hs (overtopping)"},slr:{zh:"海平面上升",en:"Sea-level rise"},rainScale:{zh:"雨量倍率",en:"Rainfall multiplier"},drain:{zh:"排水能力",en:"Drainage capacity"},buildingsBlock:{zh:"建筑物阻水（视为实体）",en:"Buildings block flow"},subgrid:{zh:"子网格地形（1 m LiDAR 格内分布）",en:"Sub-grid terrain (1 m LiDAR within cells)"},defences:{zh:"沿岸防御（按事件日期生效）",en:"Coastal defences (by event date)"},def_built:{zh:"事件时已建成",en:"in place at the event"},def_notyet:{zh:"事件时未建成",en:"not yet built at the event"},measures:{zh:"措施与防御",en:"Measures & defences"},role_whatif:{zh:"情景措施",en:"What-if"},role_record:{zh:"实际工程",en:"Built record"},role_temporary:{zh:"临时措施",en:"Temporary"},newRole:{zh:"新画的措施记为",en:"Draw new measures as"},snapShore:{zh:"顶点吸附到岸线格（画海堤用）",en:"Snap vertices to the shoreline (for sea walls)"},snapOn:{zh:"（顶点吸附岸线：开）",en:"(snapping to the shoreline)"},clearNote:{zh:"只清除情景措施；实际工程与临时措施是数据，逐条删除",en:"Removes what-if measures only; records and temporary measures are data, delete them one by one"},noMeasures:{zh:"还没有措施。画一条墙、放一台泵，或从 JSON 导入；点列表里的一项可编辑属性。",en:"No measures yet. Draw a wall, place a pump or import JSON; click an item to edit its attributes."},def_removed:{zh:"事件时尚未建成（已从地形中撤掉）",en:"not yet built at the event (removed from the terrain)"},def_raised:{zh:"已抬高地形",en:"added to the terrain"},tmp_on:{zh:"此刻生效",en:"active now"},tmp_off:{zh:"此刻未生效",en:"inactive now"},fromPipeline:{zh:"来自管线（defences.py），几何不可重画；改属性后会存入 measures.json",en:"From the pipeline (defences.py); geometry fixed, edited attributes go to measures.json"},delete:{zh:"删除",en:"Delete"},f_name:{zh:"名称",en:"Name"},f_name_ph:{zh:"例：鲤鱼门石筑海堤",en:"e.g. Lei Yue Mun rock seawall"},f_role:{zh:"类型",en:"Role"},f_built:{zh:"建成年月",en:"Completed"},f_removed:{zh:"拆除年月（可空）",en:"Removed (optional)"},f_in_dtm:{zh:"2020 年 LiDAR 地形里已有此结构（更早的事件会把它撤掉）",en:"Already in the 2020 LiDAR terrain (removed for earlier events)"},f_events:{zh:"适用事件：",en:"Applies to: "},f_window:{zh:"生效时间窗（距事件开始的小时）",en:"Active window (hours from event start)"},f_src:{zh:"来源",en:"Source"},f_src_ph:{zh:"文件 / 新闻 / 现场照片",en:"paper / news / photo"},f_note:{zh:"备注",en:"Note"},f_key:{zh:"key",en:"key"},geomCells:{zh:"格索引几何",en:"cell-index geometry"},save:{zh:"保存到场景",en:"Save to scene"},download:{zh:"下载 JSON",en:"Download JSON"},revert:{zh:"放弃改动",en:"Revert"},exportNote:{zh:"导出 JSON",en:"Export JSON"},importNote:{zh:"导入 JSON（同 key 覆盖）",en:"Import JSON (same key replaces)"},wall:{zh:"防洪墙 / 挡水板",en:"Flood wall / barrier"},sandbag:{zh:"沙包堤",en:"Sandbag line"},pump:{zh:"排水泵",en:"Pump"},tank:{zh:"地下蓄洪池",en:"Storage tank"},drainUp:{zh:"雨水渠扩容",en:"Drain upgrade"},clear:{zh:"清除全部",en:"Clear all"},finish:{zh:"完成绘制",en:"Finish"},cancel:{zh:"取消",en:"Cancel"},wallHeight:{zh:"墙高",en:"Height"},pumpRate:{zh:"抽排流量",en:"Pump rate"},tankCap:{zh:"容量",en:"Capacity"},drainFactor:{zh:"排水系数（0 = 进水口堵塞）",en:"Drain factor (0 = intake blocked)"},drainBlocked:{zh:"排水口堵塞",en:"Drain intake blocked"},hintDraw:{zh:"在地图上单击放置节点，双击或点“完成绘制”结束。",en:"Click on the map to place vertices; double-click or press Finish to end."},hintPoint:{zh:"在地图上单击放置。",en:"Click on the map to place."},metrics:{zh:"影响指标",en:"Impact metrics"},maxDepth:{zh:"最大水深",en:"Max depth"},floodedArea:{zh:"淹没面积 (>15 cm)",en:"Flooded area (>15 cm)"},severeArea:{zh:"严重淹没 (>50 cm)",en:"Severe (>50 cm)"},bldAffected:{zh:"受影响建筑",en:"Buildings affected"},volume:{zh:"陆上水量",en:"Water on land"},baseline:{zh:"无措施基线",en:"Baseline (no measures)"},withMeasures:{zh:"含措施",en:"With measures"},tideChart:{zh:"潮位：实测 vs 天文潮 vs 模型边界",en:"Sea level: observed vs astronomical vs model boundary"},rainChart:{zh:"雨量过程线 (mm/h)",en:"Rainfall hyetograph (mm/h)"},validation:{zh:"实际水浸记录 vs 模拟最大水深",en:"Reported flooding vs simulated max depth"},place:{zh:"地点",en:"Location"},observed:{zh:"实测/报道",en:"Reported"},simulated:{zh:"模拟",en:"Simulated"},score:{zh:"命中率",en:"Hit rate"},noVal:{zh:"该场景在此事件中没有可核对的水浸记录。",en:"No validation records for this scene/event."},play:{zh:"播放",en:"Play"},pause:{zh:"暂停",en:"Pause"},depth:{zh:"水深",en:"Depth"},sources:{zh:"数据来源",en:"Sources"},modelNote:{zh:"模型：GPU 二维浅水方程（局部惯性格式，LISFLOOD-FP 同类），网格",en:"Model: GPU 2-D shallow water (local-inertial, LISFLOOD-FP class), grid"},fictional:{zh:"虚构情景",en:"Fictional"},typhoon:{zh:"台风风暴潮",en:"Typhoon surge"},rainstorm:{zh:"暴雨",en:"Rainstorm"},peakObs:{zh:"实测峰值",en:"Observed peak"},peakModel:{zh:"模型边界峰值",en:"Model boundary peak"},tourRunning:{zh:"飞览中… 拖动鼠标可退出",en:"Touring… drag to exit"},loading:{zh:"正在加载场景数据…",en:"Loading scene data…"},ffwd:{zh:"快进计算中",en:"Fast-forwarding"},realtime:{zh:"倍速",en:"×"},costNote:{zh:"粗略造价",en:"Rough cost"},gaugeNow:{zh:"当前边界潮位",en:"Boundary sea level"},rainNow:{zh:"当前雨强",en:"Rain rate"},flowParticles:{zh:"流向：粒子",en:"Flow: particles"},flowArrows:{zh:"流向：箭头",en:"Flow: arrows"},flowNone:{zh:"流向：关",en:"Flow: off"},peak:{zh:"跳到峰值",en:"Jump to peak"},hotspots:{zh:"最严重水浸点（模拟最大水深，街道格）",en:"Worst flooded spots (simulated max depth, streets)"},flyTo:{zh:"飞到",en:"Fly"},swipeLeft:{zh:"◀ 无措施 · 基线",en:"◀ Baseline (no measures)"},swipeRight:{zh:"含措施 ▶",en:"With measures ▶"},noHot:{zh:"尚无 ≥ 0.3 m 的街道积水",en:"No street flooding ≥ 0.3 m yet"},facilities:{zh:"重点设施影响（60 m 内街道最大水深）",en:"Key facilities (max street depth within 60 m)"},facility:{zh:"设施",en:"Facility"},unaffected:{zh:"未受影响",en:"unaffected"},showFac:{zh:"标出受影响的重点设施（医院、港铁站、学校、安老院、停车场…）",en:"Mark affected key facilities (hospitals, MTR, schools, elderly homes, car parks…)"},ft_hospital:{zh:"医院",en:"Hospital"},ft_mtr:{zh:"港铁站",en:"MTR station"},ft_ferry:{zh:"码头",en:"Ferry pier"},ft_bus:{zh:"巴士总站",en:"Bus terminus"},ft_carpark:{zh:"停车场",en:"Car park"},ft_power:{zh:"变电站",en:"Substation"},ft_school:{zh:"学校",en:"School"},ft_elderly:{zh:"安老院",en:"Elderly home"},ft_mall:{zh:"商场",en:"Shopping mall"},ft_fire:{zh:"消防局",en:"Fire station"},ft_police:{zh:"警署",en:"Police station"},ft_community:{zh:"社区中心",en:"Community centre"},ft_water:{zh:"水务设施",en:"Water works"},ft_underground:{zh:"地下空间（估计）",en:"Underground space (estimate)"},swipeHint:{zh:"A/B 分屏：拖动中间的把手，左边是无措施基线，右边是含措施",en:"Swipe view: drag the handle; baseline on the left, measures on the right"},sceneLbl:{zh:"场景",en:"Scene"},eventLbl:{zh:"事件",en:"Event"},places:{zh:"地点",en:"Places"},layers:{zh:"图层",en:"Layers"},grpCoast:{zh:"海岸边界",en:"Coastal boundary"},grpRain:{zh:"降雨与排水",en:"Rain & drainage"},grpModel:{zh:"模型设置",en:"Model"},showMax:{zh:"在地面上显示最大淹没范围",en:"Show max-depth footprint on terrain"},forcing:{zh:"外部驱动",en:"Forcing"},more:{zh:"展开",en:"More"},less:{zh:"收起",en:"Less"},hit:{zh:"命中",en:"Hit"},miss:{zh:"偏差",en:"Miss"},hitRule:{zh:"±0.35 m 或 ±50% 视为命中；取地点 60 m 内街道格的最大水深。报道位置是近似的，结果仅供参考。",en:"Hit if within ±0.35 m or ±50%; max depth over street cells within 60 m. Reported locations are approximate; indicative only."},c_sea:{zh:"潮位",en:"Sea"},c_rain:{zh:"雨强",en:"Rain"},perSec:{zh:"每秒模拟",en:"Sim per second"},running:{zh:"运行中",en:"Running"},paused:{zh:"已暂停",en:"Paused"},lg_val:{zh:"水浸记录",en:"Reported flooding"},lg_gauge:{zh:"潮位站",en:"Tide gauge"},lg_fac:{zh:"受影响设施",en:"Affected facility"},vsBase:{zh:"差值 = 含措施 − 基线；绿色为改善",en:"Delta = with measures − baseline; green is better"},splitNote:{zh:"分屏：左 A = 无措施基线，右 B = 含措施（拖动画面中央把手）",en:"Split view: left A = baseline, right B = with measures (drag the handle)"},ofFlooded:{zh:"占淹没面积",en:"of flooded area"},bldRule:{zh:"周边最大水深 > 0.15 m",en:"max depth nearby > 0.15 m"},scrubHint:{zh:"点击或拖动跳转；← → 键逐步",en:"Click or drag to seek; arrow keys step"},noMetrics:{zh:"模拟开始后显示",en:"Shown once the run starts"},waterNow:{zh:"当前水深",en:"Depth now"},waterMax:{zh:"最大水深",en:"Max depth"},legendNow:{zh:"水深 · 当前",en:"Water depth · now"},legendMax:{zh:"最大水深 · 整个事件",en:"Max depth · whole event"},waterMaxHint:{zh:"显示到目前为止每格达到过的最大水深（跑完整个事件即为全事件最大）",en:"Highest depth each cell has reached so far (the whole-event maximum once the run is complete)"},lg_rise:{zh:"上涨中（亮、脉动）",en:"Rising (lit, pulsing)"},lg_recede:{zh:"退水中（暗、浑）",en:"Receding (dull, muddy)"},lg_contour:{zh:"等深线 0.1–2 m",en:"Depth contours 0.1–2 m"},lg_trace:{zh:"退水痕迹",en:"Dried after flooding"},lg_edge:{zh:"湿区边界",en:"Wet / dry edge"},camBird:{zh:"鸟瞰（全场景）",en:"Bird's-eye (whole scene)"},camStreet:{zh:"街景视角（最严重水浸点）",en:"Street view (worst spot)"},camFollow:{zh:"跟随最严重水浸点",en:"Follow the worst spot"},exag:{zh:"竖向夸张（地形、建筑、水体）",en:"Vertical exaggeration (terrain, buildings, water)"},landmarks:{zh:"地标（地点、港铁站、医院、商场、码头）",en:"Landmarks (places, MTR, hospitals, malls, piers)"},shadows:{zh:"日照阴影（建筑与地形）",en:"Sun shadows (buildings and terrain)"},trendUp:{zh:"水量上涨",en:"Rising"},trendDown:{zh:"水量消退",en:"Receding"},trendFlat:{zh:"水量平稳",en:"Steady"},trendTip:{zh:"陆上水量的变化速率（街道与空地格）",en:"Rate of change of water on land (street and open cells)"},pins:{zh:"钉点时间序列",en:"Pinned points"},pin:{zh:"钉点",en:"Pin"},pinHint:{zh:"在地图上点一下放置钉点（Esc 取消）；放下后会从头重跑以补齐整条曲线",en:"Click the map to drop a pin (Esc cancels); the run restarts from the beginning to fill its whole curve"},pinEmpty:{zh:"在地图上任意位置放一个钉点，看它在整个事件里的水深变化，并与潮位、雨量对照。",en:"Drop a pin anywhere on the map to follow its water depth through the event, against sea level and rainfall."},pinAdd:{zh:"放置钉点",en:"Drop a pin"},exportCsv:{zh:"导出 CSV",en:"Export CSV"},pinNow:{zh:"当前",en:"now"},pinMax:{zh:"最大",en:"max"},pinDepth:{zh:"水深 (m)",en:"Depth (m)"},pinRerun:{zh:"放针后从头重跑补齐曲线；参数或措施改变时曲线随之重算",en:"Dropping a pin re-runs from the start to fill the curve; changing parameters or measures recomputes it"},under:{zh:"偏低",en:"Under"},over:{zh:"偏高",en:"Over"},unrep:{zh:"数据层无法表达",en:"Not in data"},valHead:{zh:"报道深度不是实测：B = 有物理参照 ±0.3 m，C = 按「水浸 / 严重水浸」等级填数 ±50%，D = 推估。模拟值取地点 60 m 内街道格的最大水深；地库点取地库水深（流入体积 ÷ 楼面面积）。点一行看依据与模型备注。",en:"Reported depths are not measurements: B = physical reference ±0.3 m, C = filled from a severity class ±50%, D = inferred. Simulated = max depth over street cells within 60 m; basement points use the basement depth (inflow volume ÷ floor area). Click a row for the basis and model notes."},basis:{zh:"依据",en:"Basis"},modelNotes:{zh:"模型备注",en:"Model note"},source:{zh:"出处",en:"Source"},sampling:{zh:"取样",en:"Sampling"},ugDepth:{zh:"地库水深（流入体积 ÷ 楼面面积）",en:"Basement depth (inflow volume ÷ floor area)"},streetDepth:{zh:"60 m 内街道格最大水深",en:"max street depth within 60 m"},snapped:{zh:"取样点已吸附到 {d} m 外的最低街道格",en:"sample point snapped {d} m to the lowest street cell"},bermNote:{zh:"报道位置是 {z} mPD 的河畔阶地，地形数据里没有这一层",en:"reported at a {z} mPD riverside berm that the terrain data does not contain"},gradeB:{zh:"B：有物理参照",en:"B: physical reference"},gradeC:{zh:"C：等级描述",en:"C: severity class"},gradeD:{zh:"D：推估",en:"D: inferred"},estimated:{zh:"推估",en:"est."}};let Hl="zh";function Lb(n){Hl=n}function sr(){return Hl}function k(n){const e=Db[n];return e?e[Hl]:n}function se(n,e){return Hl==="zh"?n:e}var so,Jt,Kc,Xf,wl=0,Km=[],sn=Rt,qf=sn.__b,Yf=sn.__r,jf=sn.diffed,Kf=sn.__c,Zf=sn.unmount,Jf=sn.__;function ku(n,e){sn.__h&&sn.__h(Jt,n,wl||e),wl=0;var t=Jt.__H||(Jt.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function ho(n){return wl=1,Ib(Jm,n)}function Ib(n,e,t){var i=ku(so++,2);if(i.t=n,!i.__c&&(i.__=[Jm(void 0,e),function(o){var l=i.__N?i.__N[0]:i.__[0],c=i.t(l,o);l!==c&&(i.__N=[c,i.__[1]],i.__c.setState({}))}],i.__c=Jt,!Jt.__f)){var s=function(o,l,c){if(!i.__c.__H)return!0;var h=!1,d=i.__c.props!==o;if(i.__c.__H.__.some(function(f){if(f.__N){h=!0;var g=f.__[0];f.__=f.__N,f.__N=void 0,g!==f.__[0]&&(d=!0)}}),r){var u=r.call(this,o,l,c);return h?u||d:u}return!h||d};Jt.__f=!0;var r=Jt.shouldComponentUpdate,a=Jt.componentWillUpdate;Jt.componentWillUpdate=function(o,l,c){if(this.__e){var h=r;r=void 0,s(o,l,c),r=h}a&&a.call(this,o,l,c)},Jt.shouldComponentUpdate=s}return i.__N||i.__}function Ks(n,e){var t=ku(so++,3);!sn.__s&&Zm(t.__H,e)&&(t.__=n,t.u=e,Jt.__H.__h.push(t))}function Ni(n){return wl=5,Ou(function(){return{current:n}},[])}function Ou(n,e){var t=ku(so++,7);return Zm(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function Ub(){for(var n;n=Km.shift();){var e=n.__H;if(n.__P&&e)try{e.__h.some(cl),e.__h.some(Qh),e.__h=[]}catch(t){e.__h=[],sn.__e(t,n.__v)}}}sn.__b=function(n){Jt=null,qf&&qf(n)},sn.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Jf&&Jf(n,e)},sn.__r=function(n){Yf&&Yf(n),so=0;var e=(Jt=n.__c).__H;e&&(Kc===Jt?(e.__h=[],Jt.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(cl),e.__h.some(Qh),e.__h=[],so=0)),Kc=Jt},sn.diffed=function(n){jf&&jf(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Km.push(e)!==1&&Xf===sn.requestAnimationFrame||((Xf=sn.requestAnimationFrame)||Fb)(Ub)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),Kc=Jt=null},sn.__c=function(n,e){e.some(function(t){try{t.__h.some(cl),t.__h=t.__h.filter(function(i){return!i.__||Qh(i)})}catch(i){e.some(function(s){s.__h&&(s.__h=[])}),e=[],sn.__e(i,t.__v)}}),Kf&&Kf(n,e)},sn.unmount=function(n){Zf&&Zf(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.some(function(i){try{cl(i)}catch(s){e=s}}),t.__H=void 0,e&&sn.__e(e,t.__v))};var Qf=typeof requestAnimationFrame=="function";function Fb(n){var e,t=function(){clearTimeout(i),Qf&&cancelAnimationFrame(e),setTimeout(n)},i=setTimeout(t,35);Qf&&(e=requestAnimationFrame(t))}function cl(n){var e=Jt,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),Jt=e}function Qh(n){var e=Jt;n.__c=n.__(),Jt=e}function Zm(n,e){return!n||n.length!==e.length||e.some(function(t,i){return t!==n[i]})}function Jm(n,e){return typeof e=="function"?e(n):e}var Nb=Symbol.for("preact-signals");function zu(){if(Zs>1)Zs--;else{var n,e=!1;for(function(){var s=Tl;for(Tl=void 0;s!==void 0;){var r=s.S;if(r.v===s.v)for(var a=r.t;a!==void 0;a=a.x)a.i===s.i&&(a.i=r.i);s=s.o}}();Ya!==void 0;){var t=Ya;for(Ya=void 0,bl++;t!==void 0;){var i=t.u;if(t.u=void 0,t.f&=-3,!(8&t.f)&&e0(t))try{t.c()}catch(s){e||(n=s,e=!0)}t=i}}if(bl=0,Zs--,e)throw n}}var qa,Wt=void 0;function Vl(n){var e=Wt,t=qa;Wt=void 0,qa=void 0;try{return n()}finally{Wt=e,qa=t}}var Ya=void 0,Zs=0,bl=0,ep=0,Tl=void 0,El=0;function Qm(n){if(Wt!==void 0){var e=n.n;if(e===void 0||e.t!==Wt)return e={i:0,S:n,p:Wt.s,n:void 0,t:Wt,e:void 0,x:void 0,r:e},Wt.s!==void 0&&(Wt.s.n=e),Wt.s=e,n.n=e,32&Wt.f&&n.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=Wt.s,e.n=void 0,Wt.s.n=e,Wt.s=e),e}}function Rn(n,e){this.v=n,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=e?.watched,this.Z=e?.unwatched,this.name=e?.name}Rn.prototype.brand=Nb;Rn.prototype.h=function(){return!0};Rn.prototype.S=function(n){var e=this,t=this.t;t!==n&&n.e===void 0&&(n.x=t,this.t=n,t!==void 0?t.e=n:Vl(function(){var i;(i=e.W)==null||i.call(e)}))};Rn.prototype.U=function(n){var e=this;if(this.t!==void 0){var t=n.e,i=n.x;t!==void 0&&(t.x=i,n.e=void 0),i!==void 0&&(i.e=t,n.x=void 0),n===this.t&&(this.t=i,i===void 0&&Vl(function(){var s;(s=e.Z)==null||s.call(e)}))}};Rn.prototype.subscribe=function(n){var e=this;return Hu(function(){var t=e.value;Vl(function(){return n(t)})},{name:"sub"})};Rn.prototype.valueOf=function(){return this.value};Rn.prototype.toString=function(){return this.value+""};Rn.prototype.toJSON=function(){return this.value};Rn.prototype.peek=function(){var n=this;return Vl(function(){return n.value})};Object.defineProperty(Rn.prototype,"value",{get:function(){var n=Qm(this);return n!==void 0&&(n.i=this.i),this.v},set:function(n){if(n!==this.v){if(bl>100)throw new Error("Cycle detected");(function(t){Zs!==0&&bl===0&&t.l!==ep&&(t.l=ep,Tl={S:t,v:t.v,i:t.i,o:Tl})})(this),this.v=n,this.i++,El++,Zs++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{zu()}}}});function qe(n,e){return new Rn(n,e)}function e0(n){for(var e=n.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function t0(n){for(var e=n.s;e!==void 0;e=e.n){var t=e.S.n;if(t!==void 0&&(e.r=t),e.S.n=e,e.i=-1,e.n===void 0){n.s=e;break}}}function n0(n){for(var e=n.s,t=void 0;e!==void 0;){var i=e.p;e.i===-1?(e.S.U(e),i!==void 0&&(i.n=e.n),e.n!==void 0&&(e.n.p=i)):t=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=i}n.s=t}function cr(n,e){Rn.call(this,void 0,e),this.x=n,this.s=void 0,this.g=El-1,this.f=4}cr.prototype=new Rn;cr.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===El))return!0;if(this.g=El,this.f|=1,this.i>0&&!e0(this))return this.f&=-2,!0;var n=Wt;try{t0(this),Wt=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return Wt=n,n0(this),this.f&=-2,!0};cr.prototype.S=function(n){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}Rn.prototype.S.call(this,n)};cr.prototype.U=function(n){if(this.t!==void 0&&(Rn.prototype.U.call(this,n),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};cr.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var n=this.t;n!==void 0;n=n.x)n.t.N()}};Object.defineProperty(cr.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var n=Qm(this);if(this.h(),n!==void 0&&(n.i=this.i),16&this.f)throw this.v;return this.v}});function kb(n,e){return new cr(n,e)}function i0(n){var e=n.j;if(n.j=void 0,typeof e=="function"){Zs++;var t=Wt;Wt=void 0;try{e()}catch(i){throw n.f&=-2,n.f|=8,Bu(n),i}finally{Wt=t,zu()}}}function Bu(n){for(var e=n.s;e!==void 0;e=e.n)e.S.U(e);n.x=void 0,n.s=void 0,i0(n)}function Ob(n){if(Wt!==this)throw new Error("Out-of-order effect");n0(this),Wt=n,this.f&=-2;try{8&this.f&&Bu(this)}finally{zu()}}function ua(n,e){this.x=n,this.j=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=e?.name,qa&&qa.push(this)}ua.prototype.c=function(){var n=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.j=e)}finally{n()}};ua.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,i0(this),t0(this),Zs++;var n=Wt;return Wt=this,Ob.bind(this,n)};ua.prototype.N=function(){2&this.f||(this.f|=2,this.u=Ya,Ya=this)};ua.prototype.d=function(){this.f|=8,1&this.f||Bu(this)};ua.prototype.dispose=function(){this.d()};function Hu(n,e){var t=new ua(n,e);try{t.c()}catch(s){throw t.d(),s}var i=t.d.bind(t);return i[Symbol.dispose]=i,i}var Ko;function da(n,e){Rt[n]=e.bind(null,Rt[n]||function(){})}function Al(n){if(Ko){var e=Ko;Ko=void 0,e()}Ko=n&&n.S()}function s0(n){var e=this,t=n.data,i=Bb(t);i.value=t;var s=Ou(function(){for(var r=e.__v;r=r.__;)if(r.__c){r.__c.__$f|=4;break}return e.__$u.c=function(){var a,o=e.__$u.S(),l=s.value;o(),Om(l)||((a=e.base)==null?void 0:a.nodeType)!==3?(e.__$f|=1,e.setState({})):e.base.data=l},kb(function(){var a=i.value.value;return a===0?0:a===!0?"":a||""})},[]);return s.value}s0.displayName="_st";Object.defineProperties(Rn.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:s0},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});da("__b",function(n,e){if(typeof e.type=="string"){var t,i=e.props;for(var s in i)if(s!=="children"){var r=i[s];r instanceof Rn&&(t||(e.__np=t={}),t[s]=r,i[s]=r.peek())}}n(e)});da("__r",function(n,e){n(e),Al();var t,i=e.__c;i&&(i.__$f&=-2,(t=i.__$u)===void 0&&(i.__$u=t=function(s){var r;return Hu(function(){r=this}),r.c=function(){i.__$f|=1,i.setState({})},r}())),Al(t)});da("__e",function(n,e,t,i){Al(),n(e,t,i)});da("diffed",function(n,e){Al();var t;if(typeof e.type=="string"&&(t=e.__e)){var i=e.__np,s=e.props;if(i){var r=t.U;if(r)for(var a in r){var o=r[a];o!==void 0&&!(a in i)&&(o.d(),r[a]=void 0)}else t.U=r={};for(var l in i){var c=r[l],h=i[l];c===void 0?(c=zb(t,l,h,s),r[l]=c):c.o(h,s)}}}n(e)});function zb(n,e,t,i){var s=e in n&&n.ownerSVGElement===void 0,r=qe(t);return{o:function(a,o){r.value=a,i=o},d:Hu(function(){var a=r.value.value;i[e]!==a&&(i[e]=a,s?n[e]=a:a?n.setAttribute(e,a):n.removeAttribute(e))})}}da("unmount",function(n,e){if(typeof e.type=="string"){var t=e.__e;if(t){var i=t.U;if(i){t.U=void 0;for(var s in i){var r=i[s];r&&r.d()}}}}else{var a=e.__c;if(a){var o=a.__$u;o&&(a.__$u=void 0,o.d())}}n(e)});da("__h",function(n,e,t,i){(i<3||i===9)&&(e.__$f|=2),n(e,t,i)});Xa.prototype.shouldComponentUpdate=function(n,e){if(this.__R)return!0;var t=this.__$u,i=t&&t.s!==void 0;for(var s in e)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(i||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(i||4&this.__$f)||3&this.__$f)return!0;for(var r in n)if(r!=="__source"&&n[r]!==this.props[r])return!0;for(var a in this.props)if(!(a in n))return!0;return!1};function Bb(n){return Ou(function(){return qe(n)},[])}const tp=(n,e)=>{try{const t=localStorage.getItem(n);return t?JSON.parse(t):e}catch{return e}},Gl=(n,e)=>{try{localStorage.setItem(n,JSON.stringify(e))}catch{}},q={lang:qe("zh"),scenes:qe([]),sceneId:qe(""),events:qe([]),eventId:qe(""),scene:qe(null),event:qe(null),params:qe(null),leftTab:qe(tp("hkfl.ui.left",window.innerWidth>=1440?"scenario":null)),rightTab:qe(tp("hkfl.ui.right","overview")),panelsOff:qe(!1),playing:qe(!1),speed:qe(900),time:qe({label:"--",frac:0}),cond:qe(null),status:qe(null),loading:qe({frac:.02,text:""}),timeline:qe(null),compare:qe(!1),scenarios:qe([]),scenarioId:qe(""),abOpen:qe(!1),flowMode:qe("particles"),active:qe({}),waterMode:qe("now"),exag:qe(1),texMode:qe("imagery"),showMax:qe(!1),showFac:qe(!0),showLandmarks:qe(!0),showMeasureLabels:qe(!0),shadows:qe(!0),probeOn:qe(!0),metrics:qe(null),baseMetrics:qe(null),trend:qe(null),hotspots:qe([]),validation:qe({points:[],m:null}),facilities:qe({m:null,base:null}),charts:qe(null),chartCursor:qe(0),pins:qe({list:[],t:[],sel:null,f:null}),probe:qe(null),measures:qe([]),selMeasure:qe(null),dirty:qe(!1),devSave:qe(!1),draft:qe({n:0,len:0}),tool:qe(null),newRole:qe("whatif"),snap:qe(!0),measureParams:qe({wall:{height:1.5,rate:0,capacity:0,factor:1,radius:0},sandbag:{height:.6,rate:0,capacity:0,factor:1,radius:0},pump:{height:0,rate:2,capacity:0,factor:1,radius:30},tank:{height:0,rate:0,capacity:3e4,factor:1,radius:80},drain:{height:0,rate:0,capacity:0,factor:2,radius:150}})},Hb=[60,300,900,1800,3600];var Vb=0;function v(n,e,t,i,s,r){e||(e={});var a,o,l=e;if("ref"in l)for(o in l={},e)o=="ref"?a=e[o]:l[o]=e[o];var c={type:n,props:l,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Vb,__i:-1,__u:0,__source:s,__self:r};if(typeof n=="function"&&(a=n.defaultProps))for(o in a)l[o]===void 0&&(l[o]=a[o]);return Rt.vnode&&Rt.vnode(c),c}let Oe;function Gb(n){Oe=n}const eu={play:'<path d="M7 4.5v15l12-7.5z" fill="currentColor" stroke="none"/>',pause:'<rect x="6" y="4.5" width="4" height="15" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="4.5" width="4" height="15" rx="1" fill="currentColor" stroke="none"/>',reset:'<path d="M3 12a9 9 0 1 0 2.6-6.4"/><path d="M3 4v5h5"/>',compare:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16"/>',orbit:'<path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 4v5h-5"/>',tour:'<path d="M4 7h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/><path d="m17 10 5-2v8l-5-2"/>',map:'<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',panels:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 4v16"/>',flow:'<path d="M3 8h9a3 3 0 1 0-3-3"/><path d="M3 12h13a3 3 0 1 1-3 3"/><path d="M3 16h6"/>',arrows:'<path d="M3 12h16"/><path d="m14 6 6 6-6 6"/>',peak:'<path d="m3 20 6-11 4 6 2-3 6 8z"/><path d="M13 4v3M10.5 5.5l1.5 1.5M15.5 5.5 14 7"/>',flyto:'<path d="m3 11 18-8-8 18-2-8z"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="m5 12 4 4L19 7"/>',wall:'<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 10h18M3 14h18M9 5v5M15 10v4M9 14v5"/>',sandbag:'<path d="M4 18h16"/><path d="M6 18a3 3 0 0 1 6 0M12 18a3 3 0 0 1 6 0M9 13a3 3 0 0 1 6 0"/>',pump:'<circle cx="12" cy="12" r="8"/><path d="M12 4v8l5.5 3"/>',tank:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',drain:'<path d="M7 3v6a5 5 0 0 0 10 0V3"/><path d="M12 14v7M8 21h8"/>',layers:'<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',wave:'<path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0 2 1.5 2 1.5"/><path d="M2 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',save:'<path d="M5 3h11l3 3v15H5z"/><path d="M8 3v6h8V3M8 21v-7h8v7"/>',download:'<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 19h16"/>',upload:'<path d="M12 15V3"/><path d="m7 8 5-5 5 5"/><path d="M4 19h16"/>',undo:'<path d="M4 10h11a5 5 0 0 1 0 10h-3"/><path d="m8 6-4 4 4 4"/>',lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',magnet:'<path d="M6 3v8a6 6 0 0 0 12 0V3"/><path d="M6 3h4v8H6M14 3h4v8h-4"/>',chev:'<path d="m6 9 6 6 6-6"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',flag:'<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',shield:'<path d="M12 21s7-3 7-9V5l-7-2-7 2v7c0 6 7 9 7 9z"/><path d="m9 12 2 2 4-4"/>',bird:'<path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"/><path d="m12 8 4 4-4 4-4-4z"/>',street:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',target:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',pin:'<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',up:'<path d="M12 19V5"/><path d="m6 11 6-6 6 6"/>',down:'<path d="M12 5v14"/><path d="m6 13 6 6 6-6"/>',inbox:'<path d="M3 13h5l1.5 3h5L16 13h5"/><path d="M5.5 5h13L21 13v6H3v-6z"/>',edit:'<path d="M4 20h4l10-10-4-4L4 16z"/><path d="m13 7 4 4"/>',hospital:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M12 8v6M9 11h6"/>',mtr:'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M9 21l1.5-3M15 21l-1.5-3"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/>',ferry:'<path d="M3 17c2 2 4 2 6 0s4 2 6 0 4 2 6 0"/><path d="M5 14 4 9h16l-1 5"/><path d="M9 9V5h6v4"/>',bus:'<rect x="4" y="4" width="16" height="13" rx="2"/><path d="M4 11h16M8 20v-3M16 20v-3"/><circle cx="8" cy="14" r="1"/><circle cx="16" cy="14" r="1"/>',carpark:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 16V8h3.5a2.5 2.5 0 0 1 0 5H9"/>',power:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',school:'<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 9v6"/>',elderly:'<circle cx="12" cy="7" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/>',mall:'<path d="M6 7h12l1 14H5z"/><path d="M9 7a3 3 0 0 1 6 0"/>',fire:'<path d="M12 22c4 0 7-3 7-7 0-3-2-5-3-7-1 2-2 3-3 3 0-3-1-6-4-8 0 4-4 6-4 12a7 7 0 0 0 7 7z"/>',police:'<path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10z"/>',community:'<path d="M3 21h18M5 21V10M19 21V10M9 21v-6h6v6M2 10l10-6 10 6z"/>',water:'<path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z"/>'},np=eu;function r0(n,e=16,t=""){const i=eu[n]??eu.info;return`<svg class="ic ${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>`}const ip=[.1,.3,.5,1,2],Wb=[.05,.2,.4,.75,1.5,2.6],Vu=()=>sr()==="zh"?["浅","踝","膝","腰","胸","一层"]:["shallow","ankle","knee","waist","chest","floor"],a0=n=>{let e=0;for(;e<ip.length&&n>=ip[e];)e++;return e},Wl=yb,Cl=n=>{const e=/^(.*?)\s*[（(]([^（）()]*)[）)]\s*$/.exec(n);return e&&e[1]?[e[1],e[2]]:[n,""]},$b=n=>{const e=n.search(/[：:]/);return e>0?[n.slice(0,e),n.slice(e+1).trim()]:[n,""]},o0=n=>/black/i.test(n)?"black":/red|no\. ?(9|10)\b|signal no\. ?(9|10)|hurricane/i.test(n)?"red":/amber|no\. ?[678]\b|signal no\. ?[678]/i.test(n)?"amber":"",ja=n=>`#${n.toString(16).padStart(6,"0")}`,Rl=Object.fromEntries(["hospital","mtr","ferry","bus","carpark","power","school","elderly","mall","fire","police","community","water"].map(n=>[n,r0(n,14)]));Rl.underground=r0("carpark",14);function Ye({name:n,size:e=16,cls:t=""}){return v("svg",{class:`ic ${t}`,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:np[n]??np.info}})}function un({title:n,hint:e,n:t,children:i,id:s}){return v("section",{class:"blk",id:s,children:[v("div",{class:"blk-h",children:[v("span",{class:"micro",children:n}),v("span",{class:"hint",children:e??""}),t!==void 0&&v("span",{class:"n",children:t})]}),i]})}function l0({text:n}){const[e,t]=Cl(n);return v(ft,{children:[e,t&&v("small",{children:t})]})}function xs({id:n,label:e,checked:t,onChange:i}){return v("label",{class:"sw",for:n,children:[v("span",{children:v(l0,{text:e})}),v("input",{type:"checkbox",class:"switch",id:n,checked:t,onChange:s=>i(s.currentTarget.checked)})]})}function c0({id:n,label:e,value:t,min:i,max:s,step:r,fmt:a,onInput:o,onCommit:l,changed:c}){const h=(t-i)/(s-i)*100;return v("div",{class:"fr",children:[v("div",{class:"fr-top",children:[v("label",{for:n,children:v(l0,{text:e})}),v("span",{class:`val ${c?"changed":""}`,id:n.replace("sl_","sv_"),children:a(t)})]}),v("input",{type:"range",class:"range",id:n,min:i,max:s,step:r,value:t,style:{"--p":`${h}%`},onInput:d=>o(+d.currentTarget.value),onChange:d=>l?.(+d.currentTarget.value)})]})}function qr({items:n,value:e,onPick:t,cls:i="",id:s}){return v("div",{class:`seg ${i}`,id:s,role:"group",children:n.map(([r,a])=>v("button",{class:r===e?"on":"","aria-pressed":r===e,"data-v":String(r),onClick:()=>t(r),children:a},String(r)))})}function Xb({html:n,cls:e=""}){return v("span",{class:e,style:{display:"contents"},dangerouslySetInnerHTML:{__html:n}})}let La=null;const tu=()=>(La||(La=document.createElement("div"),La.className="tip",document.body.appendChild(La)),La);function h0(){const[n,e]=ho(!1),t=Ni(null);return Ks(()=>{if(!n)return;const i=r=>{t.current&&!t.current.contains(r.target)&&e(!1)},s=r=>{r.key==="Escape"&&e(!1)};return document.addEventListener("pointerdown",i),document.addEventListener("keydown",s),()=>{document.removeEventListener("pointerdown",i),document.removeEventListener("keydown",s)}},[n]),{open:n,setOpen:e,ref:t}}const qb=n=>n?`${n.start.replace("T"," ")} → ${n.end.slice(5).replace("T"," ")}`:"";function Yb(){const{open:n,setOpen:e,ref:t}=h0(),i=q.scenes.value,s=i.find(r=>r.id===q.sceneId.value);return v("div",{class:"pk-wrap",ref:t,children:[v("button",{class:`picker ${n?"open":""}`,id:"scenePicker","aria-haspopup":"listbox","aria-expanded":n,onClick:()=>e(!n),children:[v("span",{class:"pk-txt",children:[v("span",{class:"pk-lab",children:k("sceneLbl")}),v("span",{class:"pk-val",children:s?se(s.name_zh,s.name_en):"—"})]}),v(Ye,{name:"chev",size:14,cls:"chev"})]}),n&&v("div",{class:"popover",role:"listbox",style:{width:"440px"},children:i.map(r=>v("button",{class:`opt ${r.id===q.sceneId.value?"on":""}`,role:"option","aria-selected":r.id===q.sceneId.value,onClick:()=>{e(!1),r.id!==q.sceneId.value&&Oe.onSceneChange(r.id)},children:[v("span",{class:"thumb",style:{backgroundImage:`url(scenes/${r.id}/preview.jpg)`}}),v("span",{children:[v("div",{class:"o-t",children:se(r.name_zh,r.name_en)}),v("div",{class:"o-d",children:se(r.blurb_zh,r.blurb_en)}),v("div",{class:"o-m",children:[r.cols,"×",r.rows," · ",r.res," m ",se("网格","grid")]})]})]},r.id))})]})}function jb(){const{open:n,setOpen:e,ref:t}=h0(),i=q.events.value,s=i.find(r=>r.id===q.eventId.value);return v("div",{class:"pk-wrap",ref:t,children:[v("button",{class:`picker ${n?"open":""}`,id:"eventPicker","aria-haspopup":"listbox","aria-expanded":n,onClick:()=>e(!n),children:[v("span",{class:"pk-txt",children:[v("span",{class:"pk-lab",children:[k("eventLbl"),s&&v("span",{class:`kind ${s.kind}`,children:k(s.kind)})]}),v("span",{class:"pk-val",children:s?se(s.name_zh,s.name_en):"—"})]}),v(Ye,{name:"chev",size:14,cls:"chev"})]}),n&&v("div",{class:"popover",role:"listbox",style:{width:"400px"},children:i.map(r=>v("button",{class:`opt ${r.id===q.eventId.value?"on":""}`,role:"option","aria-selected":r.id===q.eventId.value,onClick:()=>{e(!1),r.id!==q.eventId.value&&Oe.onEventChange(r.id)},children:[v("span",{class:`k-dot ${r.kind}`,children:v(Ye,{name:r.kind==="rainstorm"?"water":r.kind==="fictional"?"flag":"wave",size:17})}),v("span",{children:[v("div",{class:"o-t",children:se(r.name_zh,r.name_en)}),v("div",{class:"o-m",children:[k(r.kind)," · ",qb(r.window)]})]})]},r.id))})]})}function Kb(){const n=q.abOpen.value,e=Ni(null),t=h=>{q.abOpen.value=h};Ks(()=>{if(!n)return;const h=u=>{e.current&&!e.current.contains(u.target)&&!u.target.closest?.("[data-ab-open]")&&t(!1)},d=u=>{u.key==="Escape"&&t(!1)};return document.addEventListener("pointerdown",h),document.addEventListener("keydown",d),()=>{document.removeEventListener("pointerdown",h),document.removeEventListener("keydown",d)}},[n]);const i=q.compare.value,s=q.scenarios.value,r=q.scenarioId.value,a=s.filter(h=>!h.generic),o=s.filter(h=>h.generic),l=()=>{i?t(!n):(Oe.onCompare(),t(!0))},c=h=>v("button",{class:`opt ab ${h.id===r?"on":""}`,role:"option","aria-selected":h.id===r,"data-scn":h.id,onClick:()=>{t(!1),(h.id!==r||!i)&&Oe.onScenario(h.id)},children:[v("span",{children:[v("div",{class:"o-t",children:se(h.zh,h.en)}),v("div",{class:"o-d",children:se(h.desc_zh,h.desc_en)}),v("div",{class:"ab-sides",children:[v("span",{class:"ab-k",children:"A"}),v("span",{children:se(h.A.zh,h.A.en)}),v("span",{class:"ab-k b",children:"B"}),v("span",{children:se(h.B.zh,h.B.en)})]})]}),h.id===r&&i?v(Ye,{name:"check",size:15,cls:"o-check"}):v("span",{})]},h.id);return v("div",{class:"pk-wrap",ref:e,children:[v("button",{id:"btnCompare",class:`btn lbl-hide ${i?"on":""}`,"aria-haspopup":"listbox","aria-expanded":n,"data-tip":n?void 0:se("情景对比：左右分屏比较两个情景（拖动把手）","Scenario compare: two scenarios side by side (drag the handle)"),"data-tip-pos":"bottom",onClick:l,children:[v(Ye,{name:"compare"}),v("span",{children:se("A/B 对比","A/B compare")}),v(Ye,{name:"chev",size:13,cls:"chev"})]}),n&&v("div",{class:"popover ab-pop",role:"listbox","aria-label":se("情景对比","Scenario compare"),children:[v("div",{class:"ab-pop-h",children:[v("span",{class:"micro",children:se("情景对比 · 左 A / 右 B","Scenario compare · left A / right B")}),v("span",{class:"grow"}),i&&v("button",{class:"btn sm ghost",id:"btnCompareOff",onClick:()=>{t(!1),Oe.onCompare()},children:[v(Ye,{name:"x",size:13}),se("关闭对比","Exit compare")]})]}),a.length>0&&v("div",{class:"ab-grp",children:se("本场景 · 有记录的情景","This scene · documented")}),a.map(c),v("div",{class:"ab-grp",children:se("通用","Generic")}),o.map(c),v("p",{class:"caveat ab-foot",children:[v(Ye,{name:"info",size:12}),v("span",{children:se("两边从头同时重算；气候情景是假设，不是预报。","Both sides re-run from the start; climate pairs are what-ifs, not forecasts.")})]})]})]})}function Zb(){const n=q.active.value,e=q.flowMode.value,t=e==="particles"?"flowParticles":e==="arrows"?"flowArrows":"flowNone";return v("header",{class:"topbar float",children:[v("div",{class:"brand",children:[v("span",{class:"mark",children:v("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","aria-hidden":"true",children:[v("path",{d:"M3 10c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"}),v("path",{d:"M3 16c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"})]})}),v("div",{children:[v("div",{class:"nm",children:"HK Flood Lab"}),v("div",{class:"sub",children:se("香港洪涝实验室 · 数字孪生","Flood digital twin · HK")})]})]}),v("span",{class:"vsep"}),v(Yb,{}),v("span",{class:"crumb-sep",children:"/"}),v(jb,{}),v("span",{class:"grow"}),v("div",{class:"tb-group",children:[v(qr,{id:"waterSeg",cls:"dark",items:[["now",k("waterNow")],["max",k("waterMax")]],value:q.waterMode.value,onPick:i=>Oe.onWaterMode(i)}),v("button",{id:"btnPeak",class:"btn lbl-hide","data-tip":se("跳到峰值时刻并飞到最严重水浸点","Jump to the peak and fly to the worst spot"),"data-tip-pos":"bottom",onClick:()=>Oe.onPeak(),children:[v(Ye,{name:"peak"}),v("span",{children:k("peak")})]})]}),v("span",{class:"vsep"}),v("div",{class:"tb-group",children:[v("button",{id:"btnPin",class:`btn lbl-hide ${n.btnPin?"on":""}`,"data-tip":k("pinHint"),"data-tip-pos":"bottom",onClick:()=>Oe.onPinMode(),children:[v(Ye,{name:"pin"}),v("span",{children:k("pin")})]}),v("button",{id:"btnFlow",class:`btn lbl-hide ${e!=="none"?"on":""}`,"data-tip":`${k(t)} · ${se("点击切换","click to cycle")}`,"data-tip-pos":"bottom",onClick:()=>Oe.onFlowMode(),children:[v(Ye,{name:e==="arrows"?"arrows":"flow"}),v("span",{children:k(t)})]}),v(Kb,{})]}),v("span",{class:"vsep"}),v("div",{class:"tb-group",children:[v("button",{id:"btnPanels",class:`btn icon ${q.panelsOff.value,""}`,"data-tip":se("显示/隐藏面板","Toggle panels"),"data-tip-pos":"bottom",onClick:()=>Oe.onPanels(),children:v(Ye,{name:"panels"})}),v("button",{id:"btnLang",class:"btn","data-tip":sr()==="zh"?"English":"中文","data-tip-pos":"bottom",onClick:()=>Oe.onLang(),children:sr()==="zh"?"EN":"中文"})]})]})}const u0={wall:"wall",sandbag:"sandbag",pump:"pump",tank:"tank",drain:"drain"},Jb=n=>n.name?sr()==="en"&&n.name_en?n.name_en:n.name:n.kind==="wall"||n.kind==="sandbag"?`${k(n.kind)} ${n.height} m`:n.kind==="pump"?`${k("pump")} ${n.rate} m³/s`:n.kind==="tank"?`${k("tank")} ${n.capacity} m³`:(n.factor??2)<1?`${k("drainBlocked")} ×${n.factor}`:`${k("drainUp")} ×${n.factor}`;function Qb(){const n=q.tool.value,e=q.measures.value,t=q.selMeasure.value,i=[["wall",k("wall")],["sandbag",k("sandbag")],["pump",k("pump")],["tank",k("tank")],["drain",k("drainUp")]],s=[["whatif",k("role_whatif")],["record",k("role_record")],["temporary",k("role_temporary")]],r=e.filter(a=>(a.m.role??"whatif")==="whatif"&&!(a.m.scenario_only&&!a.eff)).reduce((a,o)=>a+o.cost,0);return v(ft,{children:[v("div",{class:"p-head",children:[v("div",{class:"grow",children:[v("div",{class:"p-t",children:k("measures")}),v("div",{class:"p-s",children:se("画在地图上；情景措施不进入 A/B 基线","Draw on the map; what-if measures are left out of the A/B baseline")})]}),v("button",{class:"btn sm icon ghost",onClick:()=>{q.leftTab.value=null},children:v(Ye,{name:"x",size:14})})]}),v("div",{class:"p-body",children:[v(un,{title:se("绘制","Draw"),children:[v("div",{class:"tools",children:i.map(([a,o])=>v("button",{"data-tool":a,class:`tool ${n===a?"on":""}`,"aria-pressed":n===a,title:o,onClick:()=>Oe.onMeasureTool(n===a?null:a),children:[v(Ye,{name:u0[a],size:18}),v("span",{children:o.split(" / ")[0]})]},a))}),v("div",{class:"row",children:[v("label",{for:"selRole",children:k("newRole")}),v("select",{id:"selRole",class:"select",style:{width:"auto",flex:1},value:q.newRole.value,onChange:a=>{q.newRole.value=a.currentTarget.value},children:s.map(([a,o])=>v("option",{value:a,children:o},a))})]}),n&&v(e1,{kind:n}),n&&v(t1,{kind:n}),!n&&v("div",{class:"row",style:{justifyContent:"flex-end"},children:[v("button",{id:"btnSnap",class:`btn sm ${q.snap.value?"on":""}`,title:k("snapShore"),onClick:()=>{q.snap.value=!q.snap.value,Oe.onSnapToggle(q.snap.value)},children:[v(Ye,{name:"magnet",size:13}),se("吸附岸线","Snap")]}),v("button",{id:"btnClearM",class:"btn sm",title:k("clearNote"),onClick:()=>Oe.onClearMeasures(),children:k("clear")})]})]}),v(un,{title:se("措施列表","Measures"),n:e.length,children:[e.length?v("div",{class:"mlist",id:"measureList",children:e.map(a=>v(i1,{it:a,sel:a.m.id===t},a.m.id))}):v("div",{class:"empty",children:[v(Ye,{name:"inbox",size:16}),v("span",{children:k("noMeasures")})]}),r>0&&v("div",{class:"total",children:[v("span",{children:k("costNote")}),v("b",{children:["HK$",(r/1e6).toFixed(1),"M"]})]})]}),v(un,{title:se("文件","File"),children:v(r1,{})})]})]})}function e1({kind:n}){const e=q.measureParams.value[n],t=(s,r)=>{q.measureParams.value={...q.measureParams.value,[n]:{...e,[s]:r}},Oe.onMeasureParam(n,s,r)},i=(s,r,a,o,l,c)=>v(c0,{id:`mp_${s}`,label:r,value:e[s],min:a,max:o,step:l,fmt:h=>`${h} ${c}`,onInput:h=>t(s,h)});return v("div",{style:{marginTop:"6px"},children:[(n==="wall"||n==="sandbag")&&i("height",k("wallHeight"),.3,4,.1,"m"),n==="pump"&&v(ft,{children:[i("rate",k("pumpRate"),.2,10,.2,"m³/s"),i("radius",se("集水半径","Catch radius"),10,100,5,"m")]}),n==="tank"&&v(ft,{children:[i("capacity",k("tankCap"),2e3,15e4,1e3,"m³"),i("radius",se("半径（单点放置时）","Radius (point mode)"),30,300,10,"m")]}),n==="drain"&&v(ft,{children:[i("factor",k("drainFactor"),0,6,.5,"×"),i("radius",se("半径（单点放置时）","Radius (point mode)"),50,500,10,"m")]})]})}function t1({kind:n}){const e=q.draft.value,t=n==="pump"?k("hintPoint"):k("hintDraw")+(n==="tank"||n==="drain"?se(" 单击一次即为圆形区域。"," A single click places a circular area."):""),i=e.n?` ${se(`已放 ${e.n} 个点`,`${e.n} vertices`)}${e.len?` · ${e.len.toFixed(0)} m`:""}`:"",s=q.snap.value&&(n==="wall"||n==="sandbag")?` ${k("snapOn")}`:"";return v(ft,{children:[v("div",{class:"draw-hint",id:"measureHint",children:[v(Ye,{name:"info",size:13}),v("span",{children:t+i+s})]}),v("div",{class:"drawbar",children:[v("button",{id:"btnFinish",class:"btn sm primary",onClick:()=>Oe.onFinishDraft(),children:[v(Ye,{name:"check",size:13}),k("finish")]}),v("button",{id:"btnUndoV",class:"btn sm icon",title:`${se("撤销上一个点","Undo last vertex")} (Backspace)`,onClick:()=>Oe.onUndoVertex(),children:v(Ye,{name:"undo",size:13})}),v("button",{id:"btnCancelDraft",class:"btn sm",onClick:()=>Oe.onCancelDraft(),children:k("cancel")}),v("span",{class:"grow"}),v("button",{id:"btnSnap",class:"btn sm icon",style:{background:q.snap.value?"var(--sig)":void 0},title:k("snapShore"),onClick:()=>{q.snap.value=!q.snap.value,Oe.onSnapToggle(q.snap.value)},children:v(Ye,{name:"magnet",size:13})})]})]})}function n1(n){const e=n.m.role??"whatif";if(e==="whatif")return n.m.scenario_only&&!n.eff?v("span",{class:"mst",children:se("仅 A/B 情景","A/B pair only")}):v("span",{class:"mst cost",children:["HK$",(n.cost/1e6).toFixed(1),"M"]});if(e==="record")return n.exists?v("span",{class:"mst on",children:[k("def_built"),n.m.in_dtm?"":` · ${k("def_raised")}`]}):v("span",{class:"mst",children:n.m.in_dtm?k("def_removed"):k("def_notyet")});const t=n.m.from_h!==void 0||n.m.to_h!==void 0?` ${n.m.from_h??""}h→${n.m.to_h??""}h`:"";return v("span",{class:`mst ${n.eff>0?"on":""}`,children:[n.eff>0?k("tmp_on"):k("tmp_off"),t]})}function i1({it:n,sel:e}){const t=n.m,i=t.role??"whatif",s=n.eff===0&&!(i==="record"&&n.exists),r=()=>Oe.onSelectMeasure(e?null:t.id);return v(ft,{children:[v("div",{class:`mrow ${e?"sel":""} ${s?"ghost":""}`,"data-sel":t.id,tabIndex:0,role:"button","aria-expanded":e,onClick:r,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&a.target===a.currentTarget&&(a.preventDefault(),a.stopPropagation(),r())},children:[v("span",{class:`m-ic ${t.kind}`,children:v(Ye,{name:u0[t.kind],size:15})}),v("span",{class:"m-main",children:[v("span",{class:"m-name",children:[v("span",{children:Jb(t)}),t.locked&&v("span",{title:k("fromPipeline"),children:v(Ye,{name:"lock",size:11})})]}),v("span",{class:"m-sub",children:[v("span",{class:`rchip ${i}`,children:k("role_"+i)}),n1(n)]})]}),v("button",{class:"btn sm icon ghost m-del","data-rm":t.id,"aria-label":k("delete"),title:k("delete"),onClick:a=>{a.stopPropagation(),Oe.onRemoveMeasure(t.id)},children:v(Ye,{name:"x",size:13})})]}),e&&v(s1,{m:t},JSON.stringify(t))]})}function s1({m:n}){const e=n.role??"whatif",t=o=>Oe.onUpdateMeasure(n.id,o),i=o=>l=>{const c=l.currentTarget.value.trim();t({[o]:c===""?void 0:c})},s=o=>l=>{const c=l.currentTarget.value.trim();t({[o]:c===""?void 0:+c})},r=(o,l,c,h,d)=>v("label",{children:[l,v("span",{class:"inl",children:[v("input",{class:"input",type:"number","data-f":o,step:c,min:d,defaultValue:String(n[o]??""),onChange:s(o)})," ",h]})]}),a=(o,l,c="")=>v("label",{children:[l,v("input",{class:"input",type:"text","data-f":o,defaultValue:String(n[o]??""),placeholder:c,onChange:i(o)})]});return v("div",{class:"mform","data-form":n.id,onClick:o=>o.stopPropagation(),children:[a("name",k("f_name"),k("f_name_ph")),(n.kind==="wall"||n.kind==="sandbag")&&r("height",k("wallHeight"),.1,"m",0),n.kind==="pump"&&v(ft,{children:[r("rate",k("pumpRate"),.1,"m³/s",0),!n.cells?.length&&r("radius",se("集水半径","Catch radius"),5,"m",5)]}),n.kind==="tank"&&v(ft,{children:[r("capacity",k("tankCap"),500,"m³",0),!(n.pts.length>=3||n.cells?.length)&&r("radius",se("半径","Radius"),10,"m",10)]}),n.kind==="drain"&&v(ft,{children:[r("factor",k("drainFactor"),.5,"×",0),!(n.pts.length>=3||n.cells?.length)&&r("radius",se("半径","Radius"),10,"m",10)]}),v("label",{children:[k("f_role"),v("select",{class:"select","data-f":"role",value:e,onChange:o=>{const l=o.currentTarget.value,c={role:l};l!=="whatif"&&!n.key&&(c.key=`${n.kind}_${Date.now().toString(36)}`),t(c)},children:["whatif","record","temporary"].map(o=>v("option",{value:o,children:k("role_"+o)},o))})]}),e==="record"&&v(ft,{children:[v("label",{children:[k("f_built"),v("input",{class:"input",type:"month","data-f":"built",defaultValue:n.built??"",onChange:i("built")})]}),v("label",{children:[k("f_removed"),v("input",{class:"input",type:"month","data-f":"removed",defaultValue:n.removed??"",onChange:i("removed")})]}),v("label",{class:"chk",children:[v("input",{type:"checkbox","data-f":"in_dtm",checked:!!n.in_dtm,onChange:o=>t({in_dtm:o.currentTarget.checked})})," ",k("f_in_dtm")]})]}),e==="temporary"&&v(ft,{children:[v("div",{class:"evs",children:[k("f_events"),q.events.value.map(o=>v("label",{class:"chk",children:[v("input",{type:"checkbox","data-ev":o.id,checked:!n.events?.length||n.events.includes(o.id),onChange:l=>{const c=l.currentTarget.closest(".mform"),h=Array.from(c.querySelectorAll("[data-ev]")),d=h.filter(u=>u.checked).map(u=>u.dataset.ev);t({events:d.length===h.length?[]:d})}})," ",se(o.name_zh,o.name_en)]},o.id))]}),v("label",{children:[k("f_window"),v("span",{class:"inl",children:[v("input",{class:"input",type:"number","data-f":"from_h",step:.5,defaultValue:n.from_h!==void 0?String(n.from_h):"",placeholder:"−∞",onChange:s("from_h")})," → ",v("input",{class:"input",type:"number","data-f":"to_h",step:.5,defaultValue:n.to_h!==void 0?String(n.to_h):"",placeholder:"+∞",onChange:s("to_h")})," h"]})]})]}),a("src",k("f_src"),k("f_src_ph")),v("label",{children:[k("f_note"),v("textarea",{class:"input","data-f":"note",rows:2,defaultValue:n.note??"",onChange:i("note")})]}),v("div",{class:"foot",children:[v("button",{class:"btn sm","data-fly":n.id,onClick:()=>{const o=n.pts[0];o&&Oe.onFlyTo(o.x,o.y)},children:[v(Ye,{name:"flyto",size:12}),k("flyTo")]}),v("span",{class:"mono",children:[n.cells?.length?k("geomCells"):n.pts.length>1?se(`${n.pts.length} 个顶点`,`${n.pts.length} vertices`):""," · ",k("f_key")," ",n.key??"—"]})]})]})}function r1(){const n=Ni(null),e=q.dirty.value,t=q.devSave.value,i=q.scene.value;return v(ft,{children:[v("div",{class:"files",id:"measureFiles",children:[v("button",{id:"btnSaveM",class:`btn sm ${e?"primary":""}`,onClick:()=>Oe.onSaveMeasures(),children:[v(Ye,{name:"save",size:13}),k(t?"save":"download")]}),v("button",{id:"btnExportM",class:"btn sm icon","aria-label":k("exportNote"),title:k("exportNote"),onClick:()=>Oe.onExportMeasures(),children:v(Ye,{name:"download",size:13})}),v("button",{id:"btnImportM",class:"btn sm icon","aria-label":k("importNote"),title:k("importNote"),onClick:()=>n.current?.click(),children:v(Ye,{name:"upload",size:13})}),v("span",{class:"grow"}),v("button",{id:"btnRevertM",class:"btn sm ghost",disabled:!e,onClick:()=>Oe.onRevertMeasures(),children:k("revert")}),v("input",{ref:n,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:s=>{const r=s.currentTarget,a=r.files?.[0];a&&Oe.onImportMeasures(a),r.value=""}})]}),v("p",{class:"caveat",children:[t?se(`保存到 web/public/scenes/${i?.id}/measures.json（开发服务器写文件，提交即生效）`,`Saves web/public/scenes/${i?.id}/measures.json (the dev server writes the file; commit it)`):se("生产版只能下载 JSON，放到 web/public/scenes/<场景>/measures.json","Production build downloads the JSON; put it at web/public/scenes/<scene>/measures.json"),e?se("。有未保存的改动（已暂存在浏览器里）",". Unsaved edits (kept in this browser)"):""]})]})}const a1=[["scenario","book","scenario"],["params","sliders","params"],["layers","layers","layers"],["measures","wall","measures"]],o1=n=>{q.leftTab.value=q.leftTab.value===n?null:n,Gl("hkfl.ui.left",q.leftTab.value)};function l1(){const n=q.leftTab.value,e=q.measures.value.length,t=i=>i==="scenario"?k("scenario"):i==="params"?se("参数","Params"):i==="layers"?k("layers"):se("措施","Measures");return v("div",{class:"dock",id:"left",children:[v("nav",{class:"rail float","aria-label":se("工作区","Workspaces"),children:a1.map(([i,s])=>v("button",{"data-ltab":i,class:n===i?"on":"","aria-pressed":n===i,"data-tip":n===i?se("收起","Collapse"):t(i),"data-tip-pos":"right",onClick:()=>o1(i),children:[v(Ye,{name:s==="book"?"info":s,size:18}),v("span",{children:t(i)}),i==="measures"&&e>0&&v("span",{class:"badge",children:e})]},i))}),n&&v("div",{class:"lpanel float",children:[n==="scenario"&&v(c1,{}),n==="params"&&v(h1,{}),n==="layers"&&v(u1,{}),n==="measures"&&v(Qb,{})]})]})}function ro({title:n,sub:e}){return v("div",{class:"p-head",children:[v("div",{class:"grow",children:[v("div",{class:"p-t",children:n}),e&&v("div",{class:"p-s",children:e})]}),v("button",{class:"btn sm icon ghost","data-tip":se("收起","Collapse"),"data-tip-pos":"left",onClick:()=>{q.leftTab.value=null,Gl("hkfl.ui.left",null)},children:v(Ye,{name:"x",size:14})})]})}function c1(){const n=q.event.value,e=q.scene.value,[t,i]=ho(!1);if(!n||!e)return v(ro,{title:k("scenario")});const s=se(n.narrative_zh,n.narrative_en);return v(ft,{children:[v(ro,{title:k("scenario"),sub:se(e.name_zh,e.name_en)}),v("div",{class:"p-body",children:[v("section",{class:"blk",children:[v("div",{class:"ev-meta",children:[v("span",{class:`kind ${n.kind}`,children:k(n.kind)}),v("span",{class:"ev-when",children:[n.window.start.replace("T"," ")," → ",n.window.end.slice(5).replace("T"," ")," HKT"]})]}),v("h2",{class:"ev-title",children:se(n.name_zh,n.name_en)}),v("p",{class:`ev-narr ${t?"":"clamp"}`,children:s}),s.length>90&&v("button",{class:"linkish",onClick:()=>i(!t),children:k(t?"less":"more")})]}),v(un,{title:se("事件数据","Event record"),children:v("dl",{class:"facts",children:n.facts.map(([r,a],o)=>v(ft,{children:[v("dt",{children:r}),v("dd",{children:a})]},o))})}),v(un,{title:k("places"),n:e.pois.length,hint:se("点击飞到","click to fly"),children:[v("p",{class:"ev-narr",style:{marginBottom:"10px"},children:se(e.blurb_zh,e.blurb_en)}),v("div",{class:"chips",children:e.pois.map((r,a)=>v("button",{class:"chip","data-poi":a,onClick:()=>Oe.onFlyTo(r.x,r.y),children:[v(Ye,{name:"flyto",size:12}),r.name]},a))})]}),v(un,{title:se("模型与数据","Model & data"),children:v("div",{class:"credits",children:[k("modelNote")," ",e.cols,"×",e.rows," @ ",e.res," m · DEM: ",e.dem_stats?.source??"—",v("br",{}),e.textures?.attribution??"",v("br",{}),se("建筑：Overture Maps / OpenStreetMap 贡献者","Buildings: Overture Maps / OpenStreetMap contributors")]})})]})]})}const sp={surgeScale:1,slr:0,rainScale:1,drainMmPerHour:40};function h1(){const n=q.params.value;if(!n)return v(ro,{title:k("params")});const e=(s,r)=>{q.params.value={...q.params.value,[s]:r}},t=()=>Oe.onParamChange({...q.params.value}),i=(s,r,a,o,l,c)=>v(c0,{id:`sl_${s}`,label:r,value:n[s],min:a,max:o,step:l,fmt:c,onInput:h=>e(s,h),onCommit:t,changed:sp[s]!==void 0&&Math.abs(n[s]-sp[s])>1e-6});return v(ft,{children:[v(ro,{title:k("params"),sub:se("拖动后松开即从头重算","Release a slider to re-run from the start")}),v("div",{class:"p-body",children:[v(un,{title:k("grpCoast"),children:[i("surgeScale",k("surgeScale"),0,2,.05,s=>`×${s.toFixed(2)}`),i("waveSetup",k("waveSetup"),0,1.5,.05,s=>`+${s.toFixed(2)} m`),i("waveHs",k("waveHs"),0,5,.1,s=>`${s.toFixed(1)} m`),i("slr",k("slr"),0,1.5,.05,s=>`+${s.toFixed(2)} m`)]}),v(un,{title:k("grpRain"),children:[i("rainScale",k("rainScale"),0,2.5,.05,s=>`×${s.toFixed(2)}`),i("drainMmPerHour",k("drain"),0,120,5,s=>`${s.toFixed(0)} mm/h`)]}),v(un,{title:k("grpModel"),children:[v(xs,{id:"chkBld",label:k("buildingsBlock"),checked:n.buildingsBlock,onChange:s=>{q.params.value={...n,buildingsBlock:s},Oe.onParamChange({...q.params.value})}}),v(xs,{id:"chkSg",label:k("subgrid"),checked:n.subgrid,onChange:s=>{q.params.value={...n,subgrid:s},Oe.onParamChange({...q.params.value})}})]})]})]})}function u1(){const n=q.scene.value,e=q.flowMode.value,t=q.exag.value,i=r=>{for(let a=0;a<3&&q.flowMode.value!==r;a++)Oe.onFlowMode()},s=r=>{for(let a=0;a<4&&q.exag.value!==r;a++)Oe.onExag()};return v(ft,{children:[v(ro,{title:k("layers"),sub:se("水体、流向、标注与三维显示","Water, flow, labels and 3D")}),v("div",{class:"p-body",children:[v(un,{title:se("水体","Water"),children:[v(qr,{cls:"full",items:[["now",k("waterNow")],["max",k("waterMax")]],value:q.waterMode.value,onPick:r=>Oe.onWaterMode(r)}),v("p",{class:"caveat",style:{marginTop:"8px"},children:[v(Ye,{name:"info",size:12}),v("span",{children:k("waterMaxHint")})]}),v(xs,{id:"chkMax",label:k("showMax"),checked:q.showMax.value,onChange:r=>{q.showMax.value=r,Oe.onShowMax(r)}}),v(xs,{id:"chkProbe",label:se("悬停读数（光标处水深）","Hover read-out (depth under the cursor)"),checked:q.probeOn.value,onChange:r=>{q.probeOn.value=r,Oe.onProbe(r)}})]}),v(un,{title:se("流向","Flow"),children:v(qr,{cls:"full",items:[["particles",se("粒子","Particles")],["arrows",se("箭头","Arrows")],["none",se("关","Off")]],value:e,onPick:i})}),v(un,{title:se("标注","Labels"),children:[n?.facilities?.length?v(xs,{id:"chkFac",label:k("showFac"),checked:q.showFac.value,onChange:r=>{q.showFac.value=r,Oe.onShowFacilities(r)}}):null,v(xs,{id:"chkLm",label:k("landmarks"),checked:q.showLandmarks.value,onChange:r=>{q.showLandmarks.value=r,Oe.onShowLandmarks(r)}}),v(xs,{id:"chkMl",label:se("防洪措施记录（海堤、挡水板、泵站、堵塞）","Recorded measures (seawalls, barriers, pumps, blockages)"),checked:q.showMeasureLabels.value,onChange:r=>{q.showMeasureLabels.value=r,Oe.onShowMeasureLabels(r)}})]}),v(un,{title:se("三维","3D"),children:[v("div",{class:"row",children:[v("label",{children:se("竖向夸张","Vertical exaggeration")}),v(qr,{items:[[1,"×1"],[1.5,"×1.5"],[2,"×2"],[3,"×3"]],value:t,onPick:s})]}),v("div",{class:"row",children:[v("label",{children:se("底图","Basemap")}),v(qr,{items:[["imagery",se("卫星影像","Imagery")],["basemap",se("地图","Map")]],value:q.texMode.value,onPick:r=>{r!==q.texMode.value&&Oe.onTexToggle()}})]}),v(xs,{id:"chkSh",label:k("shadows"),checked:q.shadows.value,onChange:r=>{q.shadows.value=r,Oe.onShadows(r)}})]})]})]})}const d1=!0,pn="u-",f1="uplot",p1=pn+"hz",m1=pn+"vt",g1=pn+"title",v1=pn+"wrap",_1=pn+"under",x1=pn+"over",M1=pn+"axis",qs=pn+"off",y1=pn+"select",S1=pn+"cursor-x",w1=pn+"cursor-y",b1=pn+"cursor-pt",T1=pn+"legend",E1=pn+"live",A1=pn+"inline",C1=pn+"series",R1=pn+"marker",rp=pn+"label",P1=pn+"value",Oa="width",za="height",Ia="top",ap="bottom",kr="left",Zc="right",Gu="#000",op=Gu+"0",Jc="mousemove",lp="mousedown",Qc="mouseup",cp="mouseenter",hp="mouseleave",up="dblclick",D1="resize",L1="scroll",dp="change",Pl="dppxchange",Wu="--",fa=typeof window<"u",nu=fa?document:null,Jr=fa?window:null,I1=fa?navigator:null;let wt,Zo;function iu(){let n=devicePixelRatio;wt!=n&&(wt=n,Zo&&ru(dp,Zo,iu),Zo=matchMedia(`(min-resolution: ${wt-.001}dppx) and (max-resolution: ${wt+.001}dppx)`),Js(dp,Zo,iu),Jr.dispatchEvent(new CustomEvent(Pl)))}function ii(n,e){if(e!=null){let t=n.classList;!t.contains(e)&&t.add(e)}}function su(n,e){let t=n.classList;t.contains(e)&&t.remove(e)}function Ht(n,e,t){n.style[e]=t+"px"}function wi(n,e,t,i){let s=nu.createElement(n);return e!=null&&ii(s,e),t?.insertBefore(s,i),s}function hi(n,e){return wi("div",n,e)}const fp=new WeakMap;function Ui(n,e,t,i,s){let r="translate("+e+"px,"+t+"px)",a=fp.get(n);r!=a&&(n.style.transform=r,fp.set(n,r),e<0||t<0||e>i||t>s?ii(n,qs):su(n,qs))}const pp=new WeakMap;function mp(n,e,t){let i=e+t,s=pp.get(n);i!=s&&(pp.set(n,i),n.style.background=e,n.style.borderColor=t)}const gp=new WeakMap;function vp(n,e,t,i){let s=e+""+t,r=gp.get(n);s!=r&&(gp.set(n,s),n.style.height=t+"px",n.style.width=e+"px",n.style.marginLeft=i?-e/2+"px":0,n.style.marginTop=i?-t/2+"px":0)}const $u={passive:!0},U1={...$u,capture:!0};function Js(n,e,t,i){e.addEventListener(n,t,i?U1:$u)}function ru(n,e,t,i){e.removeEventListener(n,t,$u)}fa&&iu();function bi(n,e,t,i){let s;t=t||0,i=i||e.length-1;let r=i<=2147483647;for(;i-t>1;)s=r?t+i>>1:ri((t+i)/2),e[s]<n?t=s:i=s;return n-e[t]<=e[i]-n?t:i}function d0(n){return(t,i,s)=>{let r=-1,a=-1;for(let o=i;o<=s;o++)if(n(t[o])){r=o;break}for(let o=s;o>=i;o--)if(n(t[o])){a=o;break}return[r,a]}}const f0=n=>n!=null,p0=n=>n!=null&&n>0,$l=d0(f0),F1=d0(p0);function N1(n,e,t,i=0,s=!1){let r=s?F1:$l,a=s?p0:f0;[e,t]=r(n,e,t);let o=n[e],l=n[e];if(e>-1)if(i==1)o=n[e],l=n[t];else if(i==-1)o=n[t],l=n[e];else for(let c=e;c<=t;c++){let h=n[c];a(h)&&(h<o?o=h:h>l&&(l=h))}return[o??Ut,l??-Ut]}function Xl(n,e,t,i){let s=Mp(n),r=Mp(e);n==e&&(s==-1?(n*=t,e/=t):(n/=t,e*=t));let a=t==10?es:m0,o=s==1?ri:fi,l=r==1?fi:ri,c=o(a(hn(n))),h=l(a(hn(e))),d=ra(t,c),u=ra(t,h);return t==10&&(c<0&&(d=Ft(d,-c)),h<0&&(u=Ft(u,-h))),i||t==2?(n=d*s,e=u*r):(n=x0(n,d),e=ql(e,u)),[n,e]}function Xu(n,e,t,i){let s=Xl(n,e,t,i);return n==0&&(s[0]=0),e==0&&(s[1]=0),s}const qu=.1,_p={mode:3,pad:qu},Ka={pad:0,soft:null,mode:0},k1={min:Ka,max:Ka};function Dl(n,e,t,i){return Yl(t)?xp(n,e,t):(Ka.pad=t,Ka.soft=i?0:null,Ka.mode=i?3:0,xp(n,e,k1))}function Mt(n,e){return n??e}function O1(n,e,t){for(e=Mt(e,0),t=Mt(t,n.length-1);e<=t;){if(n[e]!=null)return!0;e++}return!1}function xp(n,e,t){let i=t.min,s=t.max,r=Mt(i.pad,0),a=Mt(s.pad,0),o=Mt(i.hard,-Ut),l=Mt(s.hard,Ut),c=Mt(i.soft,Ut),h=Mt(s.soft,-Ut),d=Mt(i.mode,0),u=Mt(s.mode,0),f=e-n,g=es(f),_=Wn(hn(n),hn(e)),m=es(_),p=hn(m-g);(f<1e-24||p>10)&&(f=0,(n==0||e==0)&&(f=1e-24,d==2&&c!=Ut&&(r=0),u==2&&h!=-Ut&&(a=0)));let x=f||_||1e3,M=es(x),w=ra(10,ri(M)),I=x*(f==0?n==0?.1:1:r),C=Ft(x0(n-I,w/10),24),P=n>=c&&(d==1||d==3&&C<=c||d==2&&C>=c)?c:Ut,U=Wn(o,C<P&&n>=P?P:Ei(P,C)),ie=x*(f==0?e==0?.1:1:a),S=Ft(ql(e+ie,w/10),24),b=e<=h&&(u==1||u==3&&S>=h||u==2&&S<=h)?h:-Ut,H=Ei(l,S>b&&e<=b?b:Wn(b,S));return U==H&&U==0&&(H=100),[U,H]}const z1=new Intl.NumberFormat(fa?I1.language:"en-US"),Yu=n=>z1.format(n),ai=Math,hl=ai.PI,hn=ai.abs,ri=ai.floor,cn=ai.round,fi=ai.ceil,Ei=ai.min,Wn=ai.max,ra=ai.pow,Mp=ai.sign,es=ai.log10,m0=ai.log2,B1=(n,e=1)=>ai.sinh(n)*e,eh=(n,e=1)=>ai.asinh(n/e),Ut=1/0;function yp(n){return(es((n^n>>31)-(n>>31))|0)+1}function au(n,e,t){return Ei(Wn(n,e),t)}function g0(n){return typeof n=="function"}function pt(n){return g0(n)?n:()=>n}const H1=()=>{},v0=n=>n,_0=(n,e)=>e,V1=n=>null,Sp=n=>!0,wp=(n,e)=>n==e,G1=/\.\d*?(?=9{6,}|0{6,})/gm,rr=n=>{if(y0(n)||Cs.has(n))return n;const e=`${n}`,t=e.match(G1);if(t==null)return n;let i=t[0].length-1;if(e.indexOf("e-")!=-1){let[s,r]=e.split("e");return+`${rr(s)}e${r}`}return Ft(n,i)};function Vs(n,e){return rr(Ft(rr(n/e))*e)}function ql(n,e){return rr(fi(rr(n/e))*e)}function x0(n,e){return rr(ri(rr(n/e))*e)}function Ft(n,e=0){if(y0(n))return n;let t=10**e,i=n*t*(1+Number.EPSILON);return cn(i)/t}const Cs=new Map;function M0(n){return((""+n).split(".")[1]||"").length}function ao(n,e,t,i){let s=[],r=i.map(M0);for(let a=e;a<t;a++){let o=hn(a),l=Ft(ra(n,a),o);for(let c=0;c<i.length;c++){let h=n==10?+`${i[c]}e${a}`:i[c]*l,d=(a>=0?0:o)+(a>=r[c]?0:r[c]),u=n==10?h:Ft(h,d);s.push(u),Cs.set(u,d)}}return s}const Za={},ju=[],aa=[null,null],Ms=Array.isArray,y0=Number.isInteger,W1=n=>n===void 0;function bp(n){return typeof n=="string"}function Yl(n){let e=!1;if(n!=null){let t=n.constructor;e=t==null||t==Object}return e}function $1(n){return n!=null&&typeof n=="object"}const X1=Object.getPrototypeOf(Uint8Array),S0="__proto__";function oa(n,e=Yl){let t;if(Ms(n)){let i=n.find(s=>s!=null);if(Ms(i)||e(i)){t=Array(n.length);for(let s=0;s<n.length;s++)t[s]=oa(n[s],e)}else t=n.slice()}else if(n instanceof X1)t=n.slice();else if(e(n)){t={};for(let i in n)i!=S0&&(t[i]=oa(n[i],e))}else t=n;return t}function rn(n){let e=arguments;for(let t=1;t<e.length;t++){let i=e[t];for(let s in i)s!=S0&&(Yl(n[s])?rn(n[s],oa(i[s])):n[s]=oa(i[s]))}return n}const q1=0,Y1=1,j1=2;function K1(n,e,t){for(let i=0,s,r=-1;i<e.length;i++){let a=e[i];if(a>r){for(s=a-1;s>=0&&n[s]==null;)n[s--]=null;for(s=a+1;s<t&&n[s]==null;)n[r=s++]=null}}}function Z1(n,e){if(eT(n)){let a=n[0].slice();for(let o=1;o<n.length;o++)a.push(...n[o].slice(1));return tT(a[0])||(a=Q1(a)),a}let t=new Set;for(let a=0;a<n.length;a++){let l=n[a][0],c=l.length;for(let h=0;h<c;h++)t.add(l[h])}let i=[Array.from(t).sort((a,o)=>a-o)],s=i[0].length,r=new Map;for(let a=0;a<s;a++)r.set(i[0][a],a);for(let a=0;a<n.length;a++){let o=n[a],l=o[0];for(let c=1;c<o.length;c++){let h=o[c],d=Array(s).fill(void 0),u=e?e[a][c]:Y1,f=[];for(let g=0;g<h.length;g++){let _=h[g],m=r.get(l[g]);_===null?u!=q1&&(d[m]=_,u==j1&&f.push(m)):d[m]=_}K1(d,f,s),i.push(d)}}return i}const J1=typeof queueMicrotask>"u"?n=>Promise.resolve().then(n):queueMicrotask;function Q1(n){let e=n[0],t=e.length,i=Array(t);for(let r=0;r<i.length;r++)i[r]=r;i.sort((r,a)=>e[r]-e[a]);let s=[];for(let r=0;r<n.length;r++){let a=n[r],o=Array(t);for(let l=0;l<t;l++)o[l]=a[i[l]];s.push(o)}return s}function eT(n){let e=n[0][0],t=e.length;for(let i=1;i<n.length;i++){let s=n[i][0];if(s.length!=t)return!1;if(s!=e){for(let r=0;r<t;r++)if(s[r]!=e[r])return!1}}return!0}function tT(n,e=100){const t=n.length;if(t<=1)return!0;let i=0,s=t-1;for(;i<=s&&n[i]==null;)i++;for(;s>=i&&n[s]==null;)s--;if(s<=i)return!0;const r=Wn(1,ri((s-i+1)/e));for(let a=n[i],o=i+r;o<=s;o+=r){const l=n[o];if(l!=null){if(l<=a)return!1;a=l}}return!0}const w0=["January","February","March","April","May","June","July","August","September","October","November","December"],b0=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function T0(n){return n.slice(0,3)}const nT=b0.map(T0),iT=w0.map(T0),sT={MMMM:w0,MMM:iT,WWWW:b0,WWW:nT};function Ua(n){return(n<10?"0":"")+n}function rT(n){return(n<10?"00":n<100?"0":"")+n}const aT={YYYY:n=>n.getFullYear(),YY:n=>(n.getFullYear()+"").slice(2),MMMM:(n,e)=>e.MMMM[n.getMonth()],MMM:(n,e)=>e.MMM[n.getMonth()],MM:n=>Ua(n.getMonth()+1),M:n=>n.getMonth()+1,DD:n=>Ua(n.getDate()),D:n=>n.getDate(),WWWW:(n,e)=>e.WWWW[n.getDay()],WWW:(n,e)=>e.WWW[n.getDay()],HH:n=>Ua(n.getHours()),H:n=>n.getHours(),h:n=>{let e=n.getHours();return e==0?12:e>12?e-12:e},AA:n=>n.getHours()>=12?"PM":"AM",aa:n=>n.getHours()>=12?"pm":"am",a:n=>n.getHours()>=12?"p":"a",mm:n=>Ua(n.getMinutes()),m:n=>n.getMinutes(),ss:n=>Ua(n.getSeconds()),s:n=>n.getSeconds(),fff:n=>rT(n.getMilliseconds())};function Ku(n,e){e=e||sT;let t=[],i=/\{([a-z]+)\}|[^{]+/gi,s;for(;s=i.exec(n);)t.push(s[0][0]=="{"?aT[s[1]]:s[0]);return r=>{let a="";for(let o=0;o<t.length;o++)a+=typeof t[o]=="string"?t[o]:t[o](r,e);return a}}const oT=new Intl.DateTimeFormat().resolvedOptions().timeZone;function lT(n,e){let t;return e=="UTC"||e=="Etc/UTC"?t=new Date(+n+n.getTimezoneOffset()*6e4):e==oT?t=n:(t=new Date(n.toLocaleString("en-US",{timeZone:e})),t.setMilliseconds(n.getMilliseconds())),t}const E0=n=>n%1==0,Ll=[1,2,2.5,5],cT=ao(10,-32,0,Ll),A0=ao(10,0,32,Ll),hT=A0.filter(E0),Gs=cT.concat(A0),Zu=`
`,C0="{YYYY}",Tp=Zu+C0,R0="{M}/{D}",Ba=Zu+R0,Jo=Ba+"/{YY}",P0="{aa}",uT="{h}:{mm}",Hr=uT+P0,Ep=Zu+Hr,Ap=":{ss}",Tt=null;function D0(n){let e=n*1e3,t=e*60,i=t*60,s=i*24,r=s*30,a=s*365,l=(n==1?ao(10,0,3,Ll).filter(E0):ao(10,-3,0,Ll)).concat([e,e*5,e*10,e*15,e*30,t,t*5,t*10,t*15,t*30,i,i*2,i*3,i*4,i*6,i*8,i*12,s,s*2,s*3,s*4,s*5,s*6,s*7,s*8,s*9,s*10,s*15,r,r*2,r*3,r*4,r*6,a,a*2,a*5,a*10,a*25,a*50,a*100]);const c=[[a,C0,Tt,Tt,Tt,Tt,Tt,Tt,1],[s*28,"{MMM}",Tp,Tt,Tt,Tt,Tt,Tt,1],[s,R0,Tp,Tt,Tt,Tt,Tt,Tt,1],[i,"{h}"+P0,Jo,Tt,Ba,Tt,Tt,Tt,1],[t,Hr,Jo,Tt,Ba,Tt,Tt,Tt,1],[e,Ap,Jo+" "+Hr,Tt,Ba+" "+Hr,Tt,Ep,Tt,1],[n,Ap+".{fff}",Jo+" "+Hr,Tt,Ba+" "+Hr,Tt,Ep,Tt,1]];function h(d){return(u,f,g,_,m,p)=>{let x=[],M=m>=a,w=m>=r&&m<a,I=d(g),C=Ft(I*n,3),P=th(I.getFullYear(),M?0:I.getMonth(),w||M?1:I.getDate()),U=Ft(P*n,3);if(w||M){let ie=w?m/r:0,S=M?m/a:0,b=C==U?C:Ft(th(P.getFullYear()+S,P.getMonth()+ie,1)*n,3),H=new Date(cn(b/n)),z=H.getFullYear(),Y=H.getMonth();for(let Z=0;b<=_;Z++){let j=th(z+S*Z,Y+ie*Z,1),F=j-d(Ft(j*n,3));b=Ft((+j+F)*n,3),b<=_&&x.push(b)}}else{let ie=m>=s?s:m,S=ri(g)-ri(C),b=U+S+ql(C-U,ie);x.push(b);let H=d(b),z=H.getHours()+H.getMinutes()/t+H.getSeconds()/i,Y=m/i,Z=u.axes[f]._space,j=p/Z;for(;b=Ft(b+m,n==1?0:3),!(b>_);)if(Y>1){let F=ri(Ft(z+Y,6))%24,le=d(b).getHours()-F;le>1&&(le=-1),b-=le*i,z=(z+Y)%24;let oe=x[x.length-1];Ft((b-oe)/m,3)*j>=.7&&x.push(b)}else x.push(b)}return x}}return[l,c,h]}const[dT,fT,pT]=D0(1),[mT,gT,vT]=D0(.001);ao(2,-53,53,[1]);function Cp(n,e){return n.map(t=>t.map((i,s)=>s==0||s==8||i==null?i:e(s==1||t[8]==0?i:t[1]+i)))}function Rp(n,e){return(t,i,s,r,a)=>{let o=e.find(g=>a>=g[0])||e[e.length-1],l,c,h,d,u,f;return i.map(g=>{let _=n(g),m=_.getFullYear(),p=_.getMonth(),x=_.getDate(),M=_.getHours(),w=_.getMinutes(),I=_.getSeconds(),C=m!=l&&o[2]||p!=c&&o[3]||x!=h&&o[4]||M!=d&&o[5]||w!=u&&o[6]||I!=f&&o[7]||o[1];return l=m,c=p,h=x,d=M,u=w,f=I,C(_)})}}function _T(n,e){let t=Ku(e);return(i,s,r,a,o)=>s.map(l=>t(n(l)))}function th(n,e,t){return new Date(n,e,t)}function Pp(n,e){return e(n)}const xT="{YYYY}-{MM}-{DD} {h}:{mm}{aa}";function Dp(n,e){return(t,i,s,r)=>r==null?Wu:e(n(i))}function MT(n,e){let t=n.series[e];return t.width?t.stroke(n,e):t.points.width?t.points.stroke(n,e):null}function yT(n,e){return n.series[e].fill(n,e)}const ST={show:!0,live:!0,isolate:!1,mount:H1,markers:{show:!0,width:2,stroke:MT,fill:yT,dash:"solid"},idx:null,idxs:null,values:[]};function wT(n,e){let t=n.cursor.points,i=hi(),s=t.size(n,e);Ht(i,Oa,s),Ht(i,za,s);let r=s/-2;Ht(i,"marginLeft",r),Ht(i,"marginTop",r);let a=t.width(n,e,s);return a&&Ht(i,"borderWidth",a),i}function bT(n,e){let t=n.series[e].points;return t._fill||t._stroke}function TT(n,e){let t=n.series[e].points;return t._stroke||t._fill}function ET(n,e){return n.series[e].points.size}const nh=[0,0];function AT(n,e,t){return nh[0]=e,nh[1]=t,nh}function Qo(n,e,t,i=!0){return s=>{s.button==0&&(!i||s.target==e)&&t(s)}}function ih(n,e,t,i=!0){return s=>{(!i||s.target==e)&&t(s)}}const CT={show:!0,x:!0,y:!0,lock:!1,move:AT,points:{one:!1,show:wT,size:ET,width:0,stroke:TT,fill:bT},bind:{mousedown:Qo,mouseup:Qo,click:Qo,dblclick:Qo,mousemove:ih,mouseleave:ih,mouseenter:ih},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,click:(n,e)=>{e.stopPropagation(),e.stopImmediatePropagation()},_x:!1,_y:!1},focus:{dist:(n,e,t,i,s)=>i-s,prox:-1,bias:0},hover:{skip:[void 0],prox:null,bias:0},left:-10,top:-10,idx:null,dataIdx:null,idxs:null,event:null},L0={show:!0,stroke:"rgba(0,0,0,0.07)",width:2},Ju=rn({},L0,{filter:_0}),I0=rn({},Ju,{size:10}),U0=rn({},L0,{show:!1}),Qu='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',F0="bold "+Qu,N0=1.5,Lp={show:!0,scale:"x",stroke:Gu,space:50,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:F0,side:2,grid:Ju,ticks:I0,border:U0,font:Qu,lineGap:N0,rotate:0},RT="Value",PT="Time",Ip={show:!0,scale:"x",auto:!1,sorted:1,min:Ut,max:-Ut,idxs:[]};function DT(n,e,t,i,s){return e.map(r=>r==null?"":Yu(r))}function LT(n,e,t,i,s,r,a){let o=[],l=Cs.get(s)||0;t=a?t:Ft(ql(t,s),l);for(let c=t;c<=i;c=Ft(c+s,l))o.push(Object.is(c,-0)?0:c);return o}function ou(n,e,t,i,s,r,a){const o=[],l=n.scales[n.axes[e].scale].log,c=l==10?es:m0,h=ri(c(t));s=ra(l,h),l==10&&(s=Gs[bi(s,Gs)]);let d=t,u=s*l;l==10&&(u=Gs[bi(u,Gs)]);do o.push(d),d=d+s,l==10&&!Cs.has(d)&&(d=Ft(d,Cs.get(s))),d>=u&&(s=d,u=s*l,l==10&&(u=Gs[bi(u,Gs)]));while(d<=i);return o}function IT(n,e,t,i,s,r,a){let l=n.scales[n.axes[e].scale].asinh,c=i>l?ou(n,e,Wn(l,t),i,s):[l],h=i>=0&&t<=0?[0]:[];return(t<-l?ou(n,e,Wn(l,-i),-t,s):[l]).reverse().map(u=>-u).concat(h,c)}const k0=/./,UT=/[12357]/,FT=/[125]/,Up=/1/,lu=(n,e,t,i)=>n.map((s,r)=>e==4&&s==0||r%i==0&&t.test(s.toExponential()[s<0?1:0])?s:null);function NT(n,e,t,i,s){let r=n.axes[t],a=r.scale,o=n.scales[a],l=n.valToPos,c=r._space,h=l(10,a),d=l(9,a)-h>=c?k0:l(7,a)-h>=c?UT:l(5,a)-h>=c?FT:Up;if(d==Up){let u=hn(l(1,a)-h);if(u<c)return lu(e.slice().reverse(),o.distr,d,fi(c/u)).reverse()}return lu(e,o.distr,d,1)}function kT(n,e,t,i,s){let r=n.axes[t],a=r.scale,o=r._space,l=n.valToPos,c=hn(l(1,a)-l(2,a));return c<o?lu(e.slice().reverse(),3,k0,fi(o/c)).reverse():e}function OT(n,e,t,i){return i==null?Wu:e==null?"":Yu(e)}const Fp={show:!0,scale:"y",stroke:Gu,space:30,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:F0,side:3,grid:Ju,ticks:I0,border:U0,font:Qu,lineGap:N0,rotate:0};function zT(n,e){let t=3+(n||1)*2;return Ft(t*e,3)}function BT(n,e){let{scale:t,idxs:i}=n.series[0],s=n._data[0],r=n.valToPos(s[i[0]],t,!0),a=n.valToPos(s[i[1]],t,!0),o=hn(a-r),l=n.series[e],c=o/(l.points.space*wt);return i[1]-i[0]<=c}const Np={scale:null,auto:!0,sorted:0,min:Ut,max:-Ut},O0=(n,e,t,i,s)=>s,kp={show:!0,auto:!0,sorted:0,gaps:O0,alpha:1,facets:[rn({},Np,{scale:"x"}),rn({},Np,{scale:"y"})]},Op={scale:"y",auto:!0,sorted:0,show:!0,spanGaps:!1,gaps:O0,alpha:1,points:{show:BT,filter:null},values:null,min:Ut,max:-Ut,idxs:[],path:null,clip:null};function HT(n,e,t,i,s){return t/10}const z0={time:d1,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},VT=rn({},z0,{time:!1,ori:1}),zp={};function B0(n,e){let t=zp[n];return t||(t={key:n,plots:[],sub(i){t.plots.push(i)},unsub(i){t.plots=t.plots.filter(s=>s!=i)},pub(i,s,r,a,o,l,c){for(let h=0;h<t.plots.length;h++)t.plots[h]!=s&&t.plots[h].pub(i,s,r,a,o,l,c)}},n!=null&&(zp[n]=t)),t}const la=1,cu=2;function hr(n,e,t){const i=n.mode,s=n.series[e],r=i==2?n._data[e]:n._data,a=n.scales,o=n.bbox;let l=r[0],c=i==2?r[1]:r[e],h=i==2?a[s.facets[0].scale]:a[n.series[0].scale],d=i==2?a[s.facets[1].scale]:a[s.scale],u=o.left,f=o.top,g=o.width,_=o.height,m=n.valToPosH,p=n.valToPosV;return h.ori==0?t(s,l,c,h,d,m,p,u,f,g,_,Kl,pa,Jl,V0,W0):t(s,l,c,h,d,p,m,f,u,_,g,Zl,ma,nd,G0,$0)}function ed(n,e){let t=0,i=0,s=Mt(n.bands,ju);for(let r=0;r<s.length;r++){let a=s[r];a.series[0]==e?t=a.dir:a.series[1]==e&&(a.dir==1?i|=1:i|=2)}return[t,i==1?-1:i==2?1:i==3?2:0]}function GT(n,e,t,i,s){let r=n.mode,a=n.series[e],o=r==2?a.facets[1].scale:a.scale,l=n.scales[o];return s==-1?l.min:s==1?l.max:l.distr==3?l.dir==1?l.min:l.max:0}function ts(n,e,t,i,s,r){return hr(n,e,(a,o,l,c,h,d,u,f,g,_,m)=>{let p=a.pxRound;const x=c.dir*(c.ori==0?1:-1),M=c.ori==0?pa:ma;let w,I;x==1?(w=t,I=i):(w=i,I=t);let C=p(d(o[w],c,_,f)),P=p(u(l[w],h,m,g)),U=p(d(o[I],c,_,f)),ie=p(u(r==1?h.max:h.min,h,m,g)),S=new Path2D(s);return M(S,U,ie),M(S,C,ie),M(S,C,P),S})}function jl(n,e,t,i,s,r){let a=null;if(n.length>0){a=new Path2D;const o=e==0?Jl:nd;let l=t;for(let d=0;d<n.length;d++){let u=n[d];if(u[1]>u[0]){let f=u[0]-l;f>0&&o(a,l,i,f,i+r),l=u[1]}}let c=t+s-l,h=10;c>0&&o(a,l,i-h/2,c,i+r+h)}return a}function WT(n,e,t){let i=n[n.length-1];i&&i[0]==e?i[1]=t:n.push([e,t])}function td(n,e,t,i,s,r,a){let o=[],l=n.length;for(let c=s==1?t:i;c>=t&&c<=i;c+=s)if(e[c]===null){let d=c,u=c;if(s==1)for(;++c<=i&&e[c]===null;)u=c;else for(;--c>=t&&e[c]===null;)u=c;let f=r(n[d]),g=u==d?f:r(n[u]),_=d-s;f=a<=0&&_>=0&&_<l?r(n[_]):f;let p=u+s;g=a>=0&&p>=0&&p<l?r(n[p]):g,g>=f&&o.push([f,g])}return o}function Bp(n){return n==0?v0:n==1?cn:e=>Vs(e,n)}function H0(n){let e=n==0?Kl:Zl,t=n==0?(s,r,a,o,l,c)=>{s.arcTo(r,a,o,l,c)}:(s,r,a,o,l,c)=>{s.arcTo(a,r,l,o,c)},i=n==0?(s,r,a,o,l)=>{s.rect(r,a,o,l)}:(s,r,a,o,l)=>{s.rect(a,r,l,o)};return(s,r,a,o,l,c=0,h=0)=>{c==0&&h==0?i(s,r,a,o,l):(c=Ei(c,o/2,l/2),h=Ei(h,o/2,l/2),e(s,r+c,a),t(s,r+o,a,r+o,a+l,c),t(s,r+o,a+l,r,a+l,h),t(s,r,a+l,r,a,h),t(s,r,a,r+o,a,c),s.closePath())}}const Kl=(n,e,t)=>{n.moveTo(e,t)},Zl=(n,e,t)=>{n.moveTo(t,e)},pa=(n,e,t)=>{n.lineTo(e,t)},ma=(n,e,t)=>{n.lineTo(t,e)},Jl=H0(0),nd=H0(1),V0=(n,e,t,i,s,r)=>{n.arc(e,t,i,s,r)},G0=(n,e,t,i,s,r)=>{n.arc(t,e,i,s,r)},W0=(n,e,t,i,s,r,a)=>{n.bezierCurveTo(e,t,i,s,r,a)},$0=(n,e,t,i,s,r,a)=>{n.bezierCurveTo(t,e,s,i,a,r)};function X0(n){return(e,t,i,s,r)=>hr(e,t,(a,o,l,c,h,d,u,f,g,_,m)=>{let{pxRound:p,points:x}=a,M,w;c.ori==0?(M=Kl,w=V0):(M=Zl,w=G0);const I=Ft(x.width*wt,3);let C=(x.size-x.width)/2*wt,P=Ft(C*2,3),U=new Path2D,ie=new Path2D,{left:S,top:b,width:H,height:z}=e.bbox;Jl(ie,S-P,b-P,H+P*2,z+P*2);const Y=Z=>{if(l[Z]!=null){let j=p(d(o[Z],c,_,f)),F=p(u(l[Z],h,m,g));M(U,j+C,F),w(U,j,F,C,0,hl*2)}};if(r)r.forEach(Y);else for(let Z=i;Z<=s;Z++)Y(Z);return{stroke:I>0?U:null,fill:U,clip:ie,flags:la|cu}})}function q0(n){return(e,t,i,s,r,a)=>{i!=s&&(r!=i&&a!=i&&n(e,t,i),r!=s&&a!=s&&n(e,t,s),n(e,t,a))}}const $T=q0(pa),XT=q0(ma);function Y0(n){const e=Mt(n?.alignGaps,0);return(t,i,s,r)=>hr(t,i,(a,o,l,c,h,d,u,f,g,_,m)=>{[s,r]=$l(l,s,r);let p=a.pxRound,x=z=>p(d(z,c,_,f)),M=z=>p(u(z,h,m,g)),w,I;c.ori==0?(w=pa,I=$T):(w=ma,I=XT);const C=c.dir*(c.ori==0?1:-1),P={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:la},U=P.stroke;let ie=!1;if(r-s>=_*4){let z=he=>t.posToVal(he,c.key,!0),Y=null,Z=null,j,F,te,pe=x(o[C==1?s:r]),le=x(o[s]),oe=x(o[r]),me=z(C==1?le+1:oe-1);for(let he=C==1?s:r;he>=s&&he<=r;he+=C){let ne=o[he],xe=(C==1?ne<me:ne>me)?pe:x(ne),ge=l[he];xe==pe?ge!=null?(F=ge,Y==null?(w(U,xe,M(F)),j=Y=Z=F):F<Y?Y=F:F>Z&&(Z=F)):ge===null&&(ie=!0):(Y!=null&&I(U,pe,M(Y),M(Z),M(j),M(F)),ge!=null?(F=ge,w(U,xe,M(F)),Y=Z=j=F):(Y=Z=null,ge===null&&(ie=!0)),pe=xe,me=z(pe+C))}Y!=null&&Y!=Z&&te!=pe&&I(U,pe,M(Y),M(Z),M(j),M(F))}else for(let z=C==1?s:r;z>=s&&z<=r;z+=C){let Y=l[z];Y===null?ie=!0:Y!=null&&w(U,x(o[z]),M(Y))}let[b,H]=ed(t,i);if(a.fill!=null||b!=0){let z=P.fill=new Path2D(U),Y=a.fillTo(t,i,a.min,a.max,b),Z=M(Y),j=x(o[s]),F=x(o[r]);C==-1&&([F,j]=[j,F]),w(z,F,Z),w(z,j,Z)}if(!a.spanGaps){let z=[];ie&&z.push(...td(o,l,s,r,C,x,e)),P.gaps=z=a.gaps(t,i,s,r,z),P.clip=jl(z,c.ori,f,g,_,m)}return H!=0&&(P.band=H==2?[ts(t,i,s,r,U,-1),ts(t,i,s,r,U,1)]:ts(t,i,s,r,U,H)),P})}function qT(n){const e=Mt(n.align,1),t=Mt(n.ascDesc,!1),i=Mt(n.alignGaps,0),s=Mt(n.extend,!1);return(r,a,o,l)=>hr(r,a,(c,h,d,u,f,g,_,m,p,x,M)=>{[o,l]=$l(d,o,l);let w=c.pxRound,{left:I,width:C}=r.bbox,P=le=>w(g(le,u,x,m)),U=le=>w(_(le,f,M,p)),ie=u.ori==0?pa:ma;const S={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:la},b=S.stroke,H=u.dir*(u.ori==0?1:-1);let z=U(d[H==1?o:l]),Y=P(h[H==1?o:l]),Z=Y,j=Y;s&&e==-1&&(j=I,ie(b,j,z)),ie(b,Y,z);for(let le=H==1?o:l;le>=o&&le<=l;le+=H){let oe=d[le];if(oe==null)continue;let me=P(h[le]),he=U(oe);e==1?ie(b,me,z):ie(b,Z,he),ie(b,me,he),z=he,Z=me}let F=Z;s&&e==1&&(F=I+C,ie(b,F,z));let[te,pe]=ed(r,a);if(c.fill!=null||te!=0){let le=S.fill=new Path2D(b),oe=c.fillTo(r,a,c.min,c.max,te),me=U(oe);ie(le,F,me),ie(le,j,me)}if(!c.spanGaps){let le=[];le.push(...td(h,d,o,l,H,P,i));let oe=c.width*wt/2,me=t||e==1?oe:-oe,he=t||e==-1?-oe:oe;le.forEach(ne=>{ne[0]+=me,ne[1]+=he}),S.gaps=le=c.gaps(r,a,o,l,le),S.clip=jl(le,u.ori,m,p,x,M)}return pe!=0&&(S.band=pe==2?[ts(r,a,o,l,b,-1),ts(r,a,o,l,b,1)]:ts(r,a,o,l,b,pe)),S})}function Hp(n,e,t,i,s,r,a=Ut){if(n.length>1){let o=null;for(let l=0,c=1/0;l<n.length;l++)if(e[l]!==void 0){if(o!=null){let h=hn(n[l]-n[o]);h<c&&(c=h,a=hn(t(n[l],i,s,r)-t(n[o],i,s,r)))}o=l}}return a}function YT(n){n=n||Za;const e=Mt(n.size,[.6,Ut,1]),t=n.align||0,i=n.gap||0;let s=n.radius;s=s==null?[0,0]:typeof s=="number"?[s,0]:s;const r=pt(s),a=1-e[0],o=Mt(e[1],Ut),l=Mt(e[2],1),c=Mt(n.disp,Za),h=Mt(n.each,f=>{}),{fill:d,stroke:u}=c;return(f,g,_,m)=>hr(f,g,(p,x,M,w,I,C,P,U,ie,S,b)=>{let H=p.pxRound,z=t,Y=i*wt,Z=o*wt,j=l*wt,F,te;w.ori==0?[F,te]=r(f,g):[te,F]=r(f,g);const pe=w.dir*(w.ori==0?1:-1);let le=w.ori==0?Jl:nd,oe=w.ori==0?h:($,be,Me,De,lt,_e,Le)=>{h($,be,Me,lt,De,Le,_e)},me=Mt(f.bands,ju).find($=>$.series[0]==g),he=me!=null?me.dir:0,ne=p.fillTo(f,g,p.min,p.max,he),fe=H(P(ne,I,b,ie)),xe,ge,Xe,Fe=S,He=H(p.width*wt),rt=!1,nt=null,N=null,qt=null,ot=null;d!=null&&(He==0||u!=null)&&(rt=!0,nt=d.values(f,g,_,m),N=new Map,new Set(nt).forEach($=>{$!=null&&N.set($,new Path2D)}),He>0&&(qt=u.values(f,g,_,m),ot=new Map,new Set(qt).forEach($=>{$!=null&&ot.set($,new Path2D)})));let{x0:ut,size:Ke}=c;if(ut!=null&&Ke!=null){z=1,x=ut.values(f,g,_,m),ut.unit==2&&(x=x.map(Me=>f.posToVal(U+Me*S,w.key,!0)));let $=Ke.values(f,g,_,m);Ke.unit==2?ge=$[0]*S:ge=C($[0],w,S,U)-C(0,w,S,U),Fe=Hp(x,M,C,w,S,U,Fe),Xe=Fe-ge+Y}else Fe=Hp(x,M,C,w,S,U,Fe),Xe=Fe*a+Y,ge=Fe-Xe;Xe<1&&(Xe=0),He>=ge/2&&(He=0),Xe<5&&(H=v0);let bt=Xe>0,je=Fe-Xe-(bt?He:0);ge=H(au(je,j,Z)),xe=(z==0?ge/2:z==pe?0:ge)-z*pe*((z==0?Y/2:0)+(bt?He/2:0));const D={stroke:null,fill:null,clip:null,band:null,gaps:null,flags:0},E=rt?null:new Path2D;let Q=null;if(me!=null)Q=f.data[me.series[1]];else{let{y0:$,y1:be}=c;$!=null&&be!=null&&(M=be.values(f,g,_,m),Q=$.values(f,g,_,m))}let ce=F*ge,re=te*ge;for(let $=pe==1?_:m;$>=_&&$<=m;$+=pe){let be=M[$];if(be==null)continue;if(Q!=null){let Ee=Q[$]??0;if(be-Ee==0)continue;fe=P(Ee,I,b,ie)}let Me=w.distr!=2||c!=null?x[$]:$,De=C(Me,w,S,U),lt=P(Mt(be,ne),I,b,ie),_e=H(De-xe),Le=H(Wn(lt,fe)),Ve=H(Ei(lt,fe)),We=Le-Ve;if(be!=null){let Ee=be<0?re:ce,et=be<0?ce:re;rt?(He>0&&qt[$]!=null&&le(ot.get(qt[$]),_e,Ve+ri(He/2),ge,Wn(0,We-He),Ee,et),nt[$]!=null&&le(N.get(nt[$]),_e,Ve+ri(He/2),ge,Wn(0,We-He),Ee,et)):le(E,_e,Ve+ri(He/2),ge,Wn(0,We-He),Ee,et),oe(f,g,$,_e-He/2,Ve,ge+He,We)}}return He>0?D.stroke=rt?ot:E:rt||(D._fill=p.width==0?p._fill:p._stroke??p._fill,D.width=0),D.fill=rt?N:E,D})}function jT(n,e){const t=Mt(e?.alignGaps,0);return(i,s,r,a)=>hr(i,s,(o,l,c,h,d,u,f,g,_,m,p)=>{[r,a]=$l(c,r,a);let x=o.pxRound,M=F=>x(u(F,h,m,g)),w=F=>x(f(F,d,p,_)),I,C,P;h.ori==0?(I=Kl,P=pa,C=W0):(I=Zl,P=ma,C=$0);const U=h.dir*(h.ori==0?1:-1);let ie=M(l[U==1?r:a]),S=ie,b=[],H=[];for(let F=U==1?r:a;F>=r&&F<=a;F+=U)if(c[F]!=null){let pe=l[F],le=M(pe);b.push(S=le),H.push(w(c[F]))}const z={stroke:n(b,H,I,P,C,x),fill:null,clip:null,band:null,gaps:null,flags:la},Y=z.stroke;let[Z,j]=ed(i,s);if(o.fill!=null||Z!=0){let F=z.fill=new Path2D(Y),te=o.fillTo(i,s,o.min,o.max,Z),pe=w(te);P(F,S,pe),P(F,ie,pe)}if(!o.spanGaps){let F=[];F.push(...td(l,c,r,a,U,M,t)),z.gaps=F=o.gaps(i,s,r,a,F),z.clip=jl(F,h.ori,g,_,m,p)}return j!=0&&(z.band=j==2?[ts(i,s,r,a,Y,-1),ts(i,s,r,a,Y,1)]:ts(i,s,r,a,Y,j)),z})}function KT(n){return jT(ZT,n)}function ZT(n,e,t,i,s,r){const a=n.length;if(a<2)return null;const o=new Path2D;if(t(o,n[0],e[0]),a==2)i(o,n[1],e[1]);else{let l=Array(a),c=Array(a-1),h=Array(a-1),d=Array(a-1);for(let u=0;u<a-1;u++)h[u]=e[u+1]-e[u],d[u]=n[u+1]-n[u],c[u]=h[u]/d[u];l[0]=c[0];for(let u=1;u<a-1;u++)c[u]===0||c[u-1]===0||c[u-1]>0!=c[u]>0?l[u]=0:(l[u]=3*(d[u-1]+d[u])/((2*d[u]+d[u-1])/c[u-1]+(d[u]+2*d[u-1])/c[u]),isFinite(l[u])||(l[u]=0));l[a-1]=c[a-2];for(let u=0;u<a-1;u++)s(o,n[u]+d[u]/3,e[u]+l[u]*d[u]/3,n[u+1]-d[u]/3,e[u+1]-l[u+1]*d[u]/3,n[u+1],e[u+1])}return o}const hu=new Set;function Vp(){for(let n of hu)n.syncRect(!0)}fa&&(Js(D1,Jr,Vp),Js(L1,Jr,Vp,!0),Js(Pl,Jr,()=>{yn.pxRatio=wt}));const JT=Y0(),QT=X0();function Gp(n,e,t,i){return(i?[n[0],n[1]].concat(n.slice(2)):[n[0]].concat(n.slice(1))).map((r,a)=>uu(r,a,e,t))}function eE(n,e){return n.map((t,i)=>i==0?{}:rn({},e,t))}function uu(n,e,t,i){return rn({},e==0?t:i,n)}function j0(n,e,t){return e==null?aa:[e,t]}const tE=j0;function nE(n,e,t){return e==null?aa:Dl(e,t,qu,!0)}function K0(n,e,t,i){return e==null?aa:Xl(e,t,n.scales[i].log,!1)}const iE=K0;function Z0(n,e,t,i){return e==null?aa:Xu(e,t,n.scales[i].log,!1)}const sE=Z0;function rE(n,e,t,i,s){let r=Wn(yp(n),yp(e)),a=e-n,o=bi(s/i*a,t);do{let l=t[o],c=i*l/a;if(c>=s&&r+(l<5?Cs.get(l):0)<=17)return[l,c]}while(++o<t.length);return[0,0]}function Wp(n){let e,t;return n=n.replace(/(\d+)px/,(i,s)=>(e=cn((t=+s)*wt))+"px"),[n,e,t]}function aE(n){n.show&&[n.font,n.labelFont].forEach(e=>{let t=Ft(e[2]*wt,1);e[0]=e[0].replace(/[0-9.]+px/,t+"px"),e[1]=t})}function yn(n,e,t){const i={mode:Mt(n.mode,1)},s=i.mode;function r(y,T,R,L){let B=T.valToPct(y);return L+R*(T.dir==-1?1-B:B)}function a(y,T,R,L){let B=T.valToPct(y);return L+R*(T.dir==-1?B:1-B)}function o(y,T,R,L){return T.ori==0?r(y,T,R,L):a(y,T,R,L)}i.valToPosH=r,i.valToPosV=a;let l=!1;i.status=0;const c=i.root=hi(f1);if(n.id!=null&&(c.id=n.id),ii(c,n.class),n.title){let y=hi(g1,c);y.textContent=n.title}const h=wi("canvas"),d=i.ctx=h.getContext("2d"),u=hi(v1,c);Js("click",u,y=>{y.target===g&&(Ot!=vr||Gt!=_r)&&Tn.click(i,y)},!0);const f=i.under=hi(_1,u);u.appendChild(h);const g=i.over=hi(x1,u);n=oa(n);const _=+Mt(n.pxAlign,1),m=Bp(_);(n.plugins||[]).forEach(y=>{y.opts&&(n=y.opts(i,n)||n)});const p=n.ms||.001,x=i.series=s==1?Gp(n.series||[],Ip,Op,!1):eE(n.series||[null],kp),M=i.axes=Gp(n.axes||[],Lp,Fp,!0),w=i.scales={},I=i.bands=n.bands||[];I.forEach(y=>{y.fill=pt(y.fill||null),y.dir=Mt(y.dir,-1)});const C=s==2?x[1].facets[0].scale:x[0].scale,P={axes:ig,series:va},U=(n.drawOrder||["axes","series"]).map(y=>P[y]);function ie(y){const T=y.distr==3?R=>es(R>0?R:y.clamp(i,R,y.min,y.max,y.key)):y.distr==4?R=>eh(R,y.asinh):y.distr==100?R=>y.fwd(R):R=>R;return R=>{let L=T(R),{_min:B,_max:ee}=y,de=ee-B;return(L-B)/de}}function S(y){let T=w[y];if(T==null){let R=(n.scales||Za)[y]||Za;if(R.from!=null){S(R.from);let L=rn({},w[R.from],R,{key:y});L.valToPct=ie(L),w[y]=L}else{T=w[y]=rn({},y==C?z0:VT,R),T.key=y;let L=T.time,B=T.range,ee=Ms(B);if((y!=C||s==2&&!L)&&(ee&&(B[0]==null||B[1]==null)&&(B={min:B[0]==null?_p:{mode:1,hard:B[0],soft:B[0]},max:B[1]==null?_p:{mode:1,hard:B[1],soft:B[1]}},ee=!1),!ee&&Yl(B))){let de=B;B=(ve,Se,Pe)=>Se==null?aa:Dl(Se,Pe,de)}T.range=pt(B||(L?tE:y==C?T.distr==3?iE:T.distr==4?sE:j0:T.distr==3?K0:T.distr==4?Z0:nE)),T.auto=pt(ee?!1:T.auto),T.clamp=pt(T.clamp||HT),T._min=T._max=null,T.valToPct=ie(T)}}}S("x"),S("y"),s==1&&x.forEach(y=>{S(y.scale)}),M.forEach(y=>{S(y.scale)});for(let y in n.scales)S(y);const b=w[C],H=b.distr;let z,Y;b.ori==0?(ii(c,p1),z=r,Y=a):(ii(c,m1),z=a,Y=r);const Z={};for(let y in w){let T=w[y];(T.min!=null||T.max!=null)&&(Z[y]={min:T.min,max:T.max},T.min=T.max=null)}const j=n.tzDate||(y=>new Date(cn(y/p))),F=n.fmtDate||Ku,te=p==1?pT(j):vT(j),pe=Rp(j,Cp(p==1?fT:gT,F)),le=Dp(j,Pp(xT,F)),oe=[],me=i.legend=rn({},ST,n.legend),he=i.cursor=rn({},CT,{drag:{y:s==2}},n.cursor),ne=me.show,fe=he.show,xe=me.markers;me.idxs=oe,xe.width=pt(xe.width),xe.dash=pt(xe.dash),xe.stroke=pt(xe.stroke),xe.fill=pt(xe.fill);let ge,Xe,Fe,He=[],rt=[],nt,N=!1,qt={};if(me.live){const y=x[1]?x[1].values:null;N=y!=null,nt=N?y(i,1,0):{_:0};for(let T in nt)qt[T]=Wu}if(ne)if(ge=wi("table",T1,c),Fe=wi("tbody",null,ge),me.mount(i,ge),N){Xe=wi("thead",null,ge,Fe);let y=wi("tr",null,Xe);wi("th",null,y);for(var ot in nt)wi("th",rp,y).textContent=ot}else ii(ge,A1),me.live&&ii(ge,E1);const ut={show:!0},Ke={show:!1};function bt(y,T){if(T==0&&(N||!me.live||s==2))return aa;let R=[],L=wi("tr",C1,Fe,Fe.childNodes[T]);ii(L,y.class),y.show||ii(L,qs);let B=wi("th",null,L);if(xe.show){let ve=hi(R1,B);if(T>0){let Se=xe.width(i,T);Se&&(ve.style.border=Se+"px "+xe.dash(i,T)+" "+xe.stroke(i,T)),ve.style.background=xe.fill(i,T)}}let ee=hi(rp,B);y.label instanceof HTMLElement?ee.appendChild(y.label):ee.textContent=y.label,T>0&&(xe.show||(ee.style.color=y.width>0?xe.stroke(i,T):xe.fill(i,T)),D("click",B,ve=>{if(he._lock)return;Sn(ve);let Se=x.indexOf(y);if((ve.ctrlKey||ve.metaKey)!=me.isolate){let Pe=x.some((Ue,ke)=>ke>0&&ke!=Se&&Ue.show);x.forEach((Ue,ke)=>{ke>0&&Pi(ke,Pe?ke==Se?ut:Ke:ut,!0,tn.setSeries)})}else Pi(Se,{show:!y.show},!0,tn.setSeries)},!1),qn&&D(cp,B,ve=>{he._lock||(Sn(ve),Pi(x.indexOf(y),Mr,!0,tn.setSeries))},!1));for(var de in nt){let ve=wi("td",P1,L);ve.textContent="--",R.push(ve)}return[L,R]}const je=new Map;function D(y,T,R,L=!0){const B=je.get(T)||{},ee=he.bind[y](i,T,R,L);ee&&(Js(y,T,B[y]=ee),je.set(T,B))}function E(y,T,R){const L=je.get(T)||{};for(let B in L)(y==null||B==y)&&(ru(B,T,L[B]),delete L[B]);y==null&&je.delete(T)}let Q=0,ce=0,re=0,$=0,be=0,Me=0,De=be,lt=Me,_e=re,Le=$,Ve=0,We=0,Ee=0,et=0;i.bbox={};let tt=!1,yt=!1,G=!1,Ae=!1,ae=!1,ue=!1;function Re(y,T,R){(R||y!=i.width||T!=i.height)&&Ie(y,T),fr(!1),G=!0,yt=!0,pr()}function Ie(y,T){i.width=Q=re=y,i.height=ce=$=T,be=Me=0,vt(),Dn();let R=i.bbox;Ve=R.left=Vs(be*wt,.5),We=R.top=Vs(Me*wt,.5),Ee=R.width=Vs(re*wt,.5),et=R.height=Vs($*wt,.5)}const mt=3;function Yt(){let y=!1,T=0;for(;!y;){T++;let R=tg(T),L=ng(T);y=T==mt||R&&L,y||(Ie(i.width,i.height),yt=!0)}}function Pn({width:y,height:T}){Re(y,T)}i.setSize=Pn;function vt(){let y=!1,T=!1,R=!1,L=!1;M.forEach((B,ee)=>{if(B.show&&B._show){let{side:de,_size:ve}=B,Se=de%2,Pe=B.label!=null?B.labelSize:0,Ue=ve+Pe;Ue>0&&(Se?(re-=Ue,de==3?(be+=Ue,L=!0):R=!0):($-=Ue,de==0?(Me+=Ue,y=!0):T=!0))}}),Hi[0]=y,Hi[1]=R,Hi[2]=T,Hi[3]=L,re-=W[1]+W[3],be+=W[3],$-=W[2]+W[0],Me+=W[0]}function Dn(){let y=be+re,T=Me+$,R=be,L=Me;function B(ee,de){switch(ee){case 1:return y+=de,y-de;case 2:return T+=de,T-de;case 3:return R-=de,R+de;case 0:return L-=de,L+de}}M.forEach((ee,de)=>{if(ee.show&&ee._show){let ve=ee.side;ee._pos=B(ve,ee._size),ee.label!=null&&(ee._lpos=B(ve,ee.labelSize))}})}if(he.dataIdx==null){let y=he.hover,T=y.skip=new Set(y.skip??[]);T.add(void 0);let R=y.prox=pt(y.prox),L=y.bias??(y.bias=0);he.dataIdx=(B,ee,de,ve)=>{if(ee==0)return de;let Se=de,Pe=R(B,ee,de,ve)??Ut,Ue=Pe>=0&&Pe<Ut,ke=b.ori==0?re:$,st=he.left,St=e[0],xt=e[ee];if(T.has(xt[de])){Se=null;let dt=null,Qe=null,$e;if(L==0||L==-1)for($e=de;dt==null&&$e-- >0;)T.has(xt[$e])||(dt=$e);if(L==0||L==1)for($e=de;Qe==null&&$e++<xt.length;)T.has(xt[$e])||(Qe=$e);if(dt!=null||Qe!=null)if(Ue){let Bt=dt==null?-1/0:z(St[dt],b,ke,0),jt=Qe==null?1/0:z(St[Qe],b,ke,0),_n=st-Bt,Pt=jt-st;_n<=Pt?_n<=Pe&&(Se=dt):Pt<=Pe&&(Se=Qe)}else Se=Qe==null?dt:dt==null?Qe:de-dt<=Qe-de?dt:Qe}else Ue&&hn(st-z(St[de],b,ke,0))>Pe&&(Se=null);return Se}}const Sn=y=>{he.event=y};he.idxs=oe,he._lock=!1;let on=he.points;on.show=pt(on.show),on.size=pt(on.size),on.stroke=pt(on.stroke),on.width=pt(on.width),on.fill=pt(on.fill);const Zn=i.focus=rn({},n.focus||{alpha:.3},he.focus),qn=Zn.prox>=0,Ci=qn&&on.one;let Nn=[],Bi=[],vi=[];function ga(y,T){let R=on.show(i,T);if(R instanceof HTMLElement)return ii(R,b1),ii(R,y.class),Ui(R,-10,-10,re,$),g.insertBefore(R,Nn[T]),R}function Ps(y,T){if(s==1||T>0){let R=s==1&&w[y.scale].time,L=y.value;y.value=R?bp(L)?Dp(j,Pp(L,F)):L||le:L||OT,y.label=y.label||(R?PT:RT)}if(Ci||T>0){y.width=y.width==null?1:y.width,y.paths=y.paths||JT||V1,y.fillTo=pt(y.fillTo||GT),y.pxAlign=+Mt(y.pxAlign,_),y.pxRound=Bp(y.pxAlign),y.stroke=pt(y.stroke||null),y.fill=pt(y.fill||null),y._stroke=y._fill=y._paths=y._focus=null;let R=zT(Wn(1,y.width),1),L=y.points=rn({},{size:R,width:Wn(1,R*.2),stroke:y.stroke,space:R*2,paths:QT,_stroke:null,_fill:null},y.points);L.show=pt(L.show),L.filter=pt(L.filter),L.fill=pt(L.fill),L.stroke=pt(L.stroke),L.paths=pt(L.paths),L.pxAlign=y.pxAlign}if(ne){let R=bt(y,T);He.splice(T,0,R[0]),rt.splice(T,0,R[1]),me.values.push(null)}if(fe){oe.splice(T,0,null);let R=null;Ci?T==0&&(R=ga(y,T)):T>0&&(R=ga(y,T)),Nn.splice(T,0,R),Bi.splice(T,0,0),vi.splice(T,0,0)}vn("addSeries",T)}function uo(y,T){T=T??x.length,y=s==1?uu(y,T,Ip,Op):uu(y,T,{},kp),x.splice(T,0,y),Ps(x[T],T)}i.addSeries=uo;function fo(y){if(x.splice(y,1),ne){me.values.splice(y,1),rt.splice(y,1);let T=He.splice(y,1)[0];E(null,T.firstChild),T.remove()}fe&&(oe.splice(y,1),Nn.splice(y,1)[0].remove(),Bi.splice(y,1),vi.splice(y,1)),vn("delSeries",y)}i.delSeries=fo;const Hi=[!1,!1,!1,!1];function Ql(y,T){if(y._show=y.show,y.show){let R=y.side%2,L=w[y.scale];L==null&&(y.scale=R?x[1].scale:C,L=w[y.scale]);let B=L.time;y.size=pt(y.size),y.space=pt(y.space),y.rotate=pt(y.rotate),Ms(y.incrs)&&y.incrs.forEach(de=>{!Cs.has(de)&&Cs.set(de,M0(de))}),y.incrs=pt(y.incrs||(L.distr==2?hT:B?p==1?dT:mT:Gs)),y.splits=pt(y.splits||(B&&L.distr==1?te:L.distr==3?ou:L.distr==4?IT:LT)),y.stroke=pt(y.stroke),y.grid.stroke=pt(y.grid.stroke),y.ticks.stroke=pt(y.ticks.stroke),y.border.stroke=pt(y.border.stroke);let ee=y.values;y.values=Ms(ee)&&!Ms(ee[0])?pt(ee):B?Ms(ee)?Rp(j,Cp(ee,F)):bp(ee)?_T(j,ee):ee||pe:ee||DT,y.filter=pt(y.filter||(L.distr>=3&&L.log==10?NT:L.distr==3&&L.log==2?kT:_0)),y.font=Wp(y.font),y.labelFont=Wp(y.labelFont),y._size=y.size(i,null,T,0),y._space=y._rotate=y._incrs=y._found=y._splits=y._values=null,y._size>0&&(Hi[T]=!0,y._el=hi(M1,u))}}function Ds(y,T,R,L){let[B,ee,de,ve]=R,Se=T%2,Pe=0;return Se==0&&(ve||ee)&&(Pe=T==0&&!B||T==2&&!de?cn(Lp.size/3):0),Se==1&&(B||de)&&(Pe=T==1&&!ee||T==3&&!ve?cn(Fp.size/2):0),Pe}const A=i.padding=(n.padding||[Ds,Ds,Ds,Ds]).map(y=>pt(Mt(y,Ds))),W=i._padding=A.map((y,T)=>y(i,T,Hi,0));let K,J=null,V=null;const ye=s==1?x[0].idxs:null;let Te=null,Ne=!1;function Be(y,T){if(e=y??[],i.data=i._data=e,s==2){K=0;for(let R=1;R<x.length;R++)K+=e[R][0].length}else{e.length==0&&(i.data=i._data=e=[[]]),Te=e[0],K=Te.length;let R=e;if(H==2){R=e.slice();let L=R[0]=Array(K);for(let B=0;B<K;B++)L[B]=B}i._data=e=R}if(fr(!0),vn("setData"),H==2&&(G=!0),T!==!1){let R=b;R.auto(i,Ne)?Ze():as(C,R.min,R.max),Ae=Ae||he.left>=0,ue=!0,pr()}}i.setData=Be;function Ze(){Ne=!0;let y,T;s==1&&(K>0?(J=ye[0]=0,V=ye[1]=K-1,y=e[0][J],T=e[0][V],H==2?(y=J,T=V):y==T&&(H==3?[y,T]=Xl(y,y,b.log,!1):H==4?[y,T]=Xu(y,y,b.log,!1):b.time?T=y+cn(86400/p):[y,T]=Dl(y,T,qu,!0))):(J=ye[0]=y=null,V=ye[1]=T=null)),as(C,y,T)}let Je,ze,_t,At,Nt,wn,gt,Ge,Zt,it;function Yn(y,T,R,L,B,ee){y??(y=op),R??(R=ju),L??(L="butt"),B??(B=op),ee??(ee="round"),y!=Je&&(d.strokeStyle=Je=y),B!=ze&&(d.fillStyle=ze=B),T!=_t&&(d.lineWidth=_t=T),ee!=Nt&&(d.lineJoin=Nt=ee),L!=wn&&(d.lineCap=wn=L),R!=At&&d.setLineDash(At=R)}function Vi(y,T,R,L){T!=ze&&(d.fillStyle=ze=T),y!=gt&&(d.font=gt=y),R!=Ge&&(d.textAlign=Ge=R),L!=Zt&&(d.textBaseline=Zt=L)}function bn(y,T,R,L,B=0){if(L.length>0&&y.auto(i,Ne)&&(T==null||T.min==null)){let ee=Mt(J,0),de=Mt(V,L.length-1),ve=R.min==null?N1(L,ee,de,B,y.distr==3):[R.min,R.max];y.min=Ei(y.min,R.min=ve[0]),y.max=Wn(y.max,R.max=ve[1])}}const ur={min:null,max:null};function $t(){for(let L in w){let B=w[L];Z[L]==null&&(B.min==null||Z[C]!=null&&B.auto(i,Ne))&&(Z[L]=ur)}for(let L in w){let B=w[L];Z[L]==null&&B.from!=null&&Z[B.from]!=null&&(Z[L]=ur)}Z[C]!=null&&fr(!0);let y={};for(let L in Z){let B=Z[L];if(B!=null){let ee=y[L]=oa(w[L],$1);if(B.min!=null)rn(ee,B);else if(L!=C||s==2)if(K==0&&ee.from==null){let de=ee.range(i,null,null,L);ee.min=de[0],ee.max=de[1]}else ee.min=Ut,ee.max=-Ut}}if(K>0){x.forEach((L,B)=>{if(s==1){let ee=L.scale,de=Z[ee];if(de==null)return;let ve=y[ee];if(B==0){let Se=ve.range(i,ve.min,ve.max,ee);ve.min=Se[0],ve.max=Se[1],J=bi(ve.min,e[0]),V=bi(ve.max,e[0]),V-J>1&&(e[0][J]<ve.min&&J++,e[0][V]>ve.max&&V--),L.min=Te[J],L.max=Te[V]}else L.show&&L.auto&&bn(ve,de,L,e[B],L.sorted);L.idxs[0]=J,L.idxs[1]=V}else if(B>0&&L.show&&L.auto){let[ee,de]=L.facets,ve=ee.scale,Se=de.scale,[Pe,Ue]=e[B],ke=y[ve],st=y[Se];ke!=null&&bn(ke,Z[ve],ee,Pe,ee.sorted),st!=null&&bn(st,Z[Se],de,Ue,de.sorted),L.min=de.min,L.max=de.max}});for(let L in y){let B=y[L],ee=Z[L];if(B.from==null&&(ee==null||ee.min==null)){let de=B.range(i,B.min==Ut?null:B.min,B.max==-Ut?null:B.max,L);B.min=de[0],B.max=de[1]}}}for(let L in y){let B=y[L];if(B.from!=null){let ee=y[B.from];if(ee.min==null)B.min=B.max=null;else{let de=B.range(i,ee.min,ee.max,L);B.min=de[0],B.max=de[1]}}}let T={},R=!1;for(let L in y){let B=y[L],ee=w[L];if(ee.min!=B.min||ee.max!=B.max){ee.min=B.min,ee.max=B.max;let de=ee.distr;ee._min=de==3?es(ee.min):de==4?eh(ee.min,ee.asinh):de==100?ee.fwd(ee.min):ee.min,ee._max=de==3?es(ee.max):de==4?eh(ee.max,ee.asinh):de==100?ee.fwd(ee.max):ee.max,T[L]=R=!0}}if(R){x.forEach((L,B)=>{s==2?B>0&&T.y&&(L._paths=null):T[L.scale]&&(L._paths=null)});for(let L in T)G=!0,vn("setScale",L);fe&&he.left>=0&&(Ae=ue=!0)}for(let L in Z)Z[L]=null}function Ri(y){let T=au(J-1,0,K-1),R=au(V+1,0,K-1);for(;y[T]==null&&T>0;)T--;for(;y[R]==null&&R<K-1;)R++;return[T,R]}function va(){if(K>0){let y=x.some(T=>T._focus)&&it!=Zn.alpha;y&&(d.globalAlpha=it=Zn.alpha),x.forEach((T,R)=>{if(R>0&&T.show&&(kn(R,!1),kn(R,!0),T._paths==null)){let L=it;it!=T.alpha&&(d.globalAlpha=it=T.alpha);let B=s==2?[0,e[R][0].length-1]:Ri(e[R]);T._paths=T.paths(i,R,B[0],B[1]),it!=L&&(d.globalAlpha=it=L)}}),x.forEach((T,R)=>{if(R>0&&T.show){let L=it;it!=T.alpha&&(d.globalAlpha=it=T.alpha),T._paths!=null&&dr(R,!1);{let B=T._paths!=null?T._paths.gaps:null,ee=T.points.show(i,R,J,V,B),de=T.points.filter(i,R,ee,B);(ee||de)&&(T.points._paths=T.points.paths(i,R,J,V,de),dr(R,!0))}it!=L&&(d.globalAlpha=it=L),vn("drawSeries",R)}}),y&&(d.globalAlpha=it=1)}}function kn(y,T){let R=T?x[y].points:x[y];R._stroke=R.stroke(i,y),R._fill=R.fill(i,y)}function dr(y,T){let R=T?x[y].points:x[y],{stroke:L,fill:B,clip:ee,flags:de,_stroke:ve=R._stroke,_fill:Se=R._fill,_width:Pe=R.width}=R._paths;Pe=Ft(Pe*wt,3);let Ue=null,ke=Pe%2/2;T&&Se==null&&(Se=Pe>0?"#fff":ve);let st=R.pxAlign==1&&ke>0;if(st&&d.translate(ke,ke),!T){let St=Ve-Pe/2,xt=We-Pe/2,dt=Ee+Pe,Qe=et+Pe;Ue=new Path2D,Ue.rect(St,xt,dt,Qe)}T?tc(ve,Pe,R.dash,R.cap,Se,L,B,de,ee):ec(y,ve,Pe,R.dash,R.cap,Se,L,B,de,Ue,ee),st&&d.translate(-ke,-ke)}function ec(y,T,R,L,B,ee,de,ve,Se,Pe,Ue){let ke=!1;Se!=0&&I.forEach((st,St)=>{if(st.series[0]==y){let xt=x[st.series[1]],dt=e[st.series[1]],Qe=(xt._paths||Za).band;Ms(Qe)&&(Qe=st.dir==1?Qe[0]:Qe[1]);let $e,Bt=null;xt.show&&Qe&&O1(dt,J,V)?(Bt=st.fill(i,St)||ee,$e=xt._paths.clip):Qe=null,tc(T,R,L,B,Bt,de,ve,Se,Pe,Ue,$e,Qe),ke=!0}}),ke||tc(T,R,L,B,ee,de,ve,Se,Pe,Ue)}const _a=la|cu;function tc(y,T,R,L,B,ee,de,ve,Se,Pe,Ue,ke){Yn(y,T,R,L,B),(Se||Pe||ke)&&(d.save(),Se&&d.clip(Se),Pe&&d.clip(Pe)),ke?(ve&_a)==_a?(d.clip(ke),Ue&&d.clip(Ue),mo(B,de),po(y,ee,T)):ve&cu?(mo(B,de),d.clip(ke),po(y,ee,T)):ve&la&&(d.save(),d.clip(ke),Ue&&d.clip(Ue),mo(B,de),d.restore(),po(y,ee,T)):(mo(B,de),po(y,ee,T)),(Se||Pe||ke)&&d.restore()}function po(y,T,R){R>0&&(T instanceof Map?T.forEach((L,B)=>{d.strokeStyle=Je=B,d.stroke(L)}):T!=null&&y&&d.stroke(T))}function mo(y,T){T instanceof Map?T.forEach((R,L)=>{d.fillStyle=ze=L,d.fill(R)}):T!=null&&y&&d.fill(T)}function eg(y,T,R,L){let B=M[y],ee;if(L<=0)ee=[0,0];else{let de=B._space=B.space(i,y,T,R,L),ve=B._incrs=B.incrs(i,y,T,R,L,de);ee=rE(T,R,ve,L,de)}return B._found=ee}function nc(y,T,R,L,B,ee,de,ve,Se,Pe){let Ue=de%2/2;_==1&&d.translate(Ue,Ue),Yn(ve,de,Se,Pe,ve),d.beginPath();let ke,st,St,xt,dt=B+(L==0||L==3?-ee:ee);R==0?(st=B,xt=dt):(ke=B,St=dt);for(let Qe=0;Qe<y.length;Qe++)T[Qe]!=null&&(R==0?ke=St=y[Qe]:st=xt=y[Qe],d.moveTo(ke,st),d.lineTo(St,xt));d.stroke(),_==1&&d.translate(-Ue,-Ue)}function tg(y){let T=!0;return M.forEach((R,L)=>{if(!R.show)return;let B=w[R.scale];if(B.min==null){R._show&&(T=!1,R._show=!1,fr(!1));return}else R._show||(T=!1,R._show=!0,fr(!1));let ee=R.side,de=ee%2,{min:ve,max:Se}=B,[Pe,Ue]=eg(L,ve,Se,de==0?re:$);if(Ue==0)return;let ke=B.distr==2,st=R._splits=R.splits(i,L,ve,Se,Pe,Ue,ke),St=B.distr==2?st.map($e=>Te[$e]):st,xt=B.distr==2?Te[st[1]]-Te[st[0]]:Pe,dt=R._values=R.values(i,R.filter(i,St,L,Ue,xt),L,Ue,xt);R._rotate=ee==2?R.rotate(i,dt,L,Ue):0;let Qe=R._size;R._size=fi(R.size(i,dt,L,y)),Qe!=null&&R._size!=Qe&&(T=!1)}),T}function ng(y){let T=!0;return A.forEach((R,L)=>{let B=R(i,L,Hi,y);B!=W[L]&&(T=!1),W[L]=B}),T}function ig(){for(let y=0;y<M.length;y++){let T=M[y];if(!T.show||!T._show)continue;let R=T.side,L=R%2,B,ee,de=T.stroke(i,y),ve=R==0||R==3?-1:1,[Se,Pe]=T._found;if(T.label!=null){let zn=T.labelGap*ve,ei=cn((T._lpos+zn)*wt);Vi(T.labelFont[0],de,"center",R==2?Ia:ap),d.save(),L==1?(B=ee=0,d.translate(ei,cn(We+et/2)),d.rotate((R==3?-hl:hl)/2)):(B=cn(Ve+Ee/2),ee=ei);let Us=g0(T.label)?T.label(i,y,Se,Pe):T.label;d.fillText(Us,B,ee),d.restore()}if(Pe==0)continue;let Ue=w[T.scale],ke=L==0?Ee:et,st=L==0?Ve:We,St=T._splits,xt=Ue.distr==2?St.map(zn=>Te[zn]):St,dt=Ue.distr==2?Te[St[1]]-Te[St[0]]:Se,Qe=T.ticks,$e=T.border,Bt=Qe.show?Qe.size:0,jt=cn(Bt*wt),_n=cn((T.alignTo==2?T._size-Bt-T.gap:T.gap)*wt),Pt=T._rotate*-hl/180,Kt=m(T._pos*wt),Jn=(jt+_n)*ve,On=Kt+Jn;ee=L==0?On:0,B=L==1?On:0;let oi=T.font[0],_i=T.align==1?kr:T.align==2?Zc:Pt>0?kr:Pt<0?Zc:L==0?"center":R==3?Zc:kr,Li=Pt||L==1?"middle":R==2?Ia:ap;Vi(oi,de,_i,Li);let Qn=T.font[1]*T.lineGap,li=St.map(zn=>m(o(zn,Ue,ke,st))),xi=T._values;for(let zn=0;zn<xi.length;zn++){let ei=xi[zn];if(ei!=null){L==0?B=li[zn]:ee=li[zn],ei=""+ei;let Us=ei.indexOf(`
`)==-1?[ei]:ei.split(/\n/gm);for(let Bn=0;Bn<Us.length;Bn++){let yd=Us[Bn];Pt?(d.save(),d.translate(B,ee+Bn*Qn),d.rotate(Pt),d.fillText(yd,0,0),d.restore()):d.fillText(yd,B,ee+Bn*Qn)}}}Qe.show&&nc(li,Qe.filter(i,xt,y,Pe,dt),L,R,Kt,jt,Ft(Qe.width*wt,3),Qe.stroke(i,y),Qe.dash,Qe.cap);let Ii=T.grid;Ii.show&&nc(li,Ii.filter(i,xt,y,Pe,dt),L,L==0?2:1,L==0?We:Ve,L==0?et:Ee,Ft(Ii.width*wt,3),Ii.stroke(i,y),Ii.dash,Ii.cap),$e.show&&nc([Kt],[1],L==0?1:0,L==0?1:2,L==1?We:Ve,L==1?et:Ee,Ft($e.width*wt,3),$e.stroke(i,y),$e.dash,$e.cap)}vn("drawAxes")}function fr(y){x.forEach((T,R)=>{R>0&&(T._paths=null,y&&(s==1?(T.min=null,T.max=null):T.facets.forEach(L=>{L.min=null,L.max=null})))})}let go=!1,ic=!1,xa=[];function sg(){ic=!1;for(let y=0;y<xa.length;y++)vn(...xa[y]);xa.length=0}function pr(){go||(J1(id),go=!0)}function rg(y,T=!1){go=!0,ic=T,y(i),id(),T&&xa.length>0&&queueMicrotask(sg)}i.batch=rg;function id(){if(tt&&($t(),tt=!1),G&&(Yt(),G=!1),yt){if(Ht(f,kr,be),Ht(f,Ia,Me),Ht(f,Oa,re),Ht(f,za,$),Ht(g,kr,be),Ht(g,Ia,Me),Ht(g,Oa,re),Ht(g,za,$),Ht(u,Oa,Q),Ht(u,za,ce),h.width=cn(Q*wt),h.height=cn(ce*wt),M.forEach(({_el:y,_show:T,_size:R,_pos:L,side:B})=>{if(y!=null)if(T){let ee=B===3||B===0?R:0,de=B%2==1;Ht(y,de?"left":"top",L-ee),Ht(y,de?"width":"height",R),Ht(y,de?"top":"left",de?Me:be),Ht(y,de?"height":"width",de?$:re),su(y,qs)}else ii(y,qs)}),Je=ze=_t=Nt=wn=gt=Ge=Zt=At=null,it=1,Sa(!0),be!=De||Me!=lt||re!=_e||$!=Le){fr(!1);let y=re/_e,T=$/Le;if(fe&&!Ae&&he.left>=0){he.left*=y,he.top*=T,mr&&Ui(mr,cn(he.left),0,re,$),gr&&Ui(gr,0,cn(he.top),re,$);for(let R=0;R<Nn.length;R++){let L=Nn[R];L!=null&&(Bi[R]*=y,vi[R]*=T,Ui(L,fi(Bi[R]),fi(vi[R]),re,$))}}if(zt.show&&!ae&&zt.left>=0&&zt.width>0){zt.left*=y,zt.width*=y,zt.top*=T,zt.height*=T;for(let R in cc)Ht(xr,R,zt[R])}De=be,lt=Me,_e=re,Le=$}vn("setSize"),yt=!1}Q>0&&ce>0&&(d.clearRect(0,0,h.width,h.height),vn("drawClear"),U.forEach(y=>y()),vn("draw")),zt.show&&ae&&(vo(zt),ae=!1),fe&&Ae&&(Is(null,!0,!1),Ae=!1),me.show&&me.live&&ue&&(oc(),ue=!1),l||(l=!0,i.status=1,vn("ready")),Ne=!1,go=!1}i.redraw=(y,T)=>{G=T||!1,y!==!1?as(C,b.min,b.max):pr()};function sc(y,T){let R=w[y];if(R.from==null){if(K==0){let L=R.range(i,T.min,T.max,y);T.min=L[0],T.max=L[1]}if(T.min>T.max){let L=T.min;T.min=T.max,T.max=L}if(K>1&&T.min!=null&&T.max!=null&&T.max-T.min<1e-16)return;y==C&&R.distr==2&&K>0&&(T.min=bi(T.min,e[0]),T.max=bi(T.max,e[0]),T.min==T.max&&T.max++),Z[y]=T,tt=!0,pr()}}i.setScale=sc;let rc,ac,mr,gr,sd,rd,vr,_r,ad,od,Ot,Gt,rs=!1;const Tn=he.drag;let mn=Tn.x,gn=Tn.y;fe&&(he.x&&(rc=hi(S1,g)),he.y&&(ac=hi(w1,g)),b.ori==0?(mr=rc,gr=ac):(mr=ac,gr=rc),Ot=he.left,Gt=he.top);const zt=i.select=rn({show:!0,over:!0,left:0,width:0,top:0,height:0},n.select),xr=zt.show?hi(y1,zt.over?g:f):null;function vo(y,T){if(zt.show){for(let R in y)zt[R]=y[R],R in cc&&Ht(xr,R,y[R]);T!==!1&&vn("setSelect")}}i.setSelect=vo;function ag(y){if(x[y].show)ne&&su(He[y],qs);else if(ne&&ii(He[y],qs),fe){let R=Ci?Nn[0]:Nn[y];R!=null&&Ui(R,-10,-10,re,$)}}function as(y,T,R){sc(y,{min:T,max:R})}function Pi(y,T,R,L){T.focus!=null&&ug(y),T.show!=null&&x.forEach((B,ee)=>{ee>0&&(y==ee||y==null)&&(B.show=T.show,ag(ee),s==2?(as(B.facets[0].scale,null,null),as(B.facets[1].scale,null,null)):as(B.scale,null,null),pr())}),R!==!1&&vn("setSeries",y,T),L&&wa("setSeries",i,y,T)}i.setSeries=Pi;function og(y,T){rn(I[y],T)}function lg(y,T){y.fill=pt(y.fill||null),y.dir=Mt(y.dir,-1),T=T??I.length,I.splice(T,0,y)}function cg(y){y==null?I.length=0:I.splice(y,1)}i.addBand=lg,i.setBand=og,i.delBand=cg;function hg(y,T){x[y].alpha=T,fe&&Nn[y]!=null&&(Nn[y].style.opacity=T),ne&&He[y]&&(He[y].style.opacity=T)}let Gi,os,Ls;const Mr={focus:!0};function ug(y){if(y!=Ls){let T=y==null,R=Zn.alpha!=1;x.forEach((L,B)=>{if(s==1||B>0){let ee=T||B==0||B==y;L._focus=T?null:ee,R&&hg(B,ee?1:Zn.alpha)}}),Ls=y,R&&pr()}}ne&&qn&&D(hp,ge,y=>{he._lock||(Sn(y),Ls!=null&&Pi(null,Mr,!0,tn.setSeries))});function Di(y,T,R){let L=w[T];R&&(y=y/wt-(L.ori==1?Me:be));let B=re;L.ori==1&&(B=$,y=B-y),L.dir==-1&&(y=B-y);let ee=L._min,de=L._max,ve=y/B,Se=ee+(de-ee)*ve,Pe=L.distr;return Pe==3?ra(10,Se):Pe==4?B1(Se,L.asinh):Pe==100?L.bwd(Se):Se}function dg(y,T){let R=Di(y,C,T);return bi(R,e[0],J,V)}i.valToIdx=y=>bi(y,e[0]),i.posToIdx=dg,i.posToVal=Di,i.valToPos=(y,T,R)=>w[T].ori==0?r(y,w[T],R?Ee:re,R?Ve:0):a(y,w[T],R?et:$,R?We:0),i.setCursor=(y,T,R)=>{Ot=y.left,Gt=y.top,Is(null,T,R)};function ld(y,T){Ht(xr,kr,zt.left=y),Ht(xr,Oa,zt.width=T)}function cd(y,T){Ht(xr,Ia,zt.top=y),Ht(xr,za,zt.height=T)}let Ma=b.ori==0?ld:cd,ya=b.ori==1?ld:cd;function fg(){if(ne&&me.live)for(let y=s==2?1:0;y<x.length;y++){if(y==0&&N)continue;let T=me.values[y],R=0;for(let L in T)rt[y][R++].firstChild.nodeValue=T[L]}}function oc(y,T){if(y!=null&&(y.idxs?y.idxs.forEach((R,L)=>{oe[L]=R}):W1(y.idx)||oe.fill(y.idx),me.idx=oe[0]),ne&&me.live){for(let R=0;R<x.length;R++)(R>0||s==1&&!N)&&pg(R,oe[R]);fg()}ue=!1,T!==!1&&vn("setLegend")}i.setLegend=oc;function pg(y,T){let R=x[y],L=y==0&&H==2?Te:e[y],B;N?B=R.values(i,y,T)??qt:(B=R.value(i,T==null?null:L[T],y,T),B=B==null?qt:{_:B}),me.values[y]=B}function Is(y,T,R){ad=Ot,od=Gt,[Ot,Gt]=he.move(i,Ot,Gt),he.left=Ot,he.top=Gt,fe&&(mr&&Ui(mr,cn(Ot),0,re,$),gr&&Ui(gr,0,cn(Gt),re,$));let L,B=J>V;Gi=Ut,os=null;let ee=b.ori==0?re:$,de=b.ori==1?re:$;if(Ot<0||K==0||B){L=he.idx=null;for(let ve=0;ve<x.length;ve++){let Se=Nn[ve];Se!=null&&Ui(Se,-10,-10,re,$)}qn&&Pi(null,Mr,!0,y==null&&tn.setSeries),me.live&&(oe.fill(L),ue=!0)}else{let ve,Se,Pe;s==1&&(ve=b.ori==0?Ot:Gt,Se=Di(ve,C),L=he.idx=bi(Se,e[0],J,V),Pe=z(e[0][L],b,ee,0));let Ue=-10,ke=-10,st=0,St=0,xt=!0,dt="",Qe="";for(let $e=s==2?1:0;$e<x.length;$e++){let Bt=x[$e],jt=oe[$e],_n=jt==null?null:s==1?e[$e][jt]:e[$e][1][jt],Pt=he.dataIdx(i,$e,L,Se),Kt=Pt==null?null:s==1?e[$e][Pt]:e[$e][1][Pt];if(ue=ue||Kt!=_n||Pt!=jt,oe[$e]=Pt,$e>0&&Bt.show){let Jn=Pt==null?-10:Pt==L?Pe:z(s==1?e[0][Pt]:e[$e][0][Pt],b,ee,0),On=Kt==null?-10:Y(Kt,s==1?w[Bt.scale]:w[Bt.facets[1].scale],de,0);if(qn&&Kt!=null){let oi=b.ori==1?Ot:Gt,_i=hn(Zn.dist(i,$e,Pt,On,oi));if(_i<Gi){let Li=Zn.bias;if(Li!=0){let Qn=Di(oi,Bt.scale),li=Kt>=0?1:-1,xi=Qn>=0?1:-1;xi==li&&(xi==1?Li==1?Kt>=Qn:Kt<=Qn:Li==1?Kt<=Qn:Kt>=Qn)&&(Gi=_i,os=$e)}else Gi=_i,os=$e}}if(ue||Ci){let oi,_i;b.ori==0?(oi=Jn,_i=On):(oi=On,_i=Jn);let Li,Qn,li,xi,Ii,zn,ei=!0,Us=on.bbox;if(Us!=null){ei=!1;let Bn=Us(i,$e);li=Bn.left,xi=Bn.top,Li=Bn.width,Qn=Bn.height}else li=oi,xi=_i,Li=Qn=on.size(i,$e);if(zn=on.fill(i,$e),Ii=on.stroke(i,$e),Ci)$e==os&&Gi<=Zn.prox&&(Ue=li,ke=xi,st=Li,St=Qn,xt=ei,dt=zn,Qe=Ii);else{let Bn=Nn[$e];Bn!=null&&(Bi[$e]=li,vi[$e]=xi,vp(Bn,Li,Qn,ei),mp(Bn,zn,Ii),Ui(Bn,fi(li),fi(xi),re,$))}}}}if(Ci){let $e=Zn.prox,Bt=Ls==null?Gi<=$e:Gi>$e||os!=Ls;if(ue||Bt){let jt=Nn[0];jt!=null&&(Bi[0]=Ue,vi[0]=ke,vp(jt,st,St,xt),mp(jt,dt,Qe),Ui(jt,fi(Ue),fi(ke),re,$))}}}if(zt.show&&rs)if(y!=null){let[ve,Se]=tn.scales,[Pe,Ue]=tn.match,[ke,st]=y.cursor.sync.scales,St=y.cursor.drag;if(mn=St._x,gn=St._y,mn||gn){let{left:xt,top:dt,width:Qe,height:$e}=y.select,Bt=y.scales[ke].ori,jt=y.posToVal,_n,Pt,Kt,Jn,On,oi=ve!=null&&Pe(ve,ke),_i=Se!=null&&Ue(Se,st);oi&&mn?(Bt==0?(_n=xt,Pt=Qe):(_n=dt,Pt=$e),Kt=w[ve],Jn=z(jt(_n,ke),Kt,ee,0),On=z(jt(_n+Pt,ke),Kt,ee,0),Ma(Ei(Jn,On),hn(On-Jn))):Ma(0,ee),_i&&gn?(Bt==1?(_n=xt,Pt=Qe):(_n=dt,Pt=$e),Kt=w[Se],Jn=Y(jt(_n,st),Kt,de,0),On=Y(jt(_n+Pt,st),Kt,de,0),ya(Ei(Jn,On),hn(On-Jn))):ya(0,de)}else hc()}else{let ve=hn(ad-sd),Se=hn(od-rd);if(b.ori==1){let st=ve;ve=Se,Se=st}mn=Tn.x&&ve>=Tn.dist,gn=Tn.y&&Se>=Tn.dist;let Pe=Tn.uni;Pe!=null?mn&&gn&&(mn=ve>=Pe,gn=Se>=Pe,!mn&&!gn&&(Se>ve?gn=!0:mn=!0)):Tn.x&&Tn.y&&(mn||gn)&&(mn=gn=!0);let Ue,ke;mn&&(b.ori==0?(Ue=vr,ke=Ot):(Ue=_r,ke=Gt),Ma(Ei(Ue,ke),hn(ke-Ue)),gn||ya(0,de)),gn&&(b.ori==1?(Ue=vr,ke=Ot):(Ue=_r,ke=Gt),ya(Ei(Ue,ke),hn(ke-Ue)),mn||Ma(0,ee)),!mn&&!gn&&(Ma(0,0),ya(0,0))}if(Tn._x=mn,Tn._y=gn,y==null){if(R){if(Md!=null){let[ve,Se]=tn.scales;tn.values[0]=ve!=null?Di(b.ori==0?Ot:Gt,ve):null,tn.values[1]=Se!=null?Di(b.ori==1?Ot:Gt,Se):null}wa(Jc,i,Ot,Gt,re,$,L)}if(qn){let ve=R&&tn.setSeries,Se=Zn.prox;Ls==null?Gi<=Se&&Pi(os,Mr,!0,ve):Gi>Se?Pi(null,Mr,!0,ve):os!=Ls&&Pi(os,Mr,!0,ve)}}ue&&(me.idx=L,oc()),T!==!1&&vn("setCursor")}let ls=null;Object.defineProperty(i,"rect",{get(){return ls==null&&Sa(!1),ls}});function Sa(y=!1){y?ls=null:(ls=g.getBoundingClientRect(),vn("syncRect",ls))}function hd(y,T,R,L,B,ee,de){he._lock||rs&&y!=null&&y.movementX==0&&y.movementY==0||(lc(y,T,R,L,B,ee,de,!1,y!=null),y!=null?Is(null,!0,!0):Is(T,!0,!1))}function lc(y,T,R,L,B,ee,de,ve,Se){if(ls==null&&Sa(!1),Sn(y),y!=null)R=y.clientX-ls.left,L=y.clientY-ls.top;else{if(R<0||L<0){Ot=-10,Gt=-10;return}let[Pe,Ue]=tn.scales,ke=T.cursor.sync,[st,St]=ke.values,[xt,dt]=ke.scales,[Qe,$e]=tn.match,Bt=T.axes[0].side%2==1,jt=b.ori==0?re:$,_n=b.ori==1?re:$,Pt=Bt?ee:B,Kt=Bt?B:ee,Jn=Bt?L:R,On=Bt?R:L;if(xt!=null?R=Qe(Pe,xt)?o(st,w[Pe],jt,0):-10:R=jt*(Jn/Pt),dt!=null?L=$e(Ue,dt)?o(St,w[Ue],_n,0):-10:L=_n*(On/Kt),b.ori==1){let oi=R;R=L,L=oi}}Se&&(T==null||T.cursor.event.type==Jc)&&((R<=1||R>=re-1)&&(R=Vs(R,re)),(L<=1||L>=$-1)&&(L=Vs(L,$))),ve?(sd=R,rd=L,[vr,_r]=he.move(i,R,L)):(Ot=R,Gt=L)}const cc={width:0,height:0,left:0,top:0};function hc(){vo(cc,!1)}let ud,dd,fd,pd;function md(y,T,R,L,B,ee,de){rs=!0,mn=gn=Tn._x=Tn._y=!1,lc(y,T,R,L,B,ee,de,!0,!1),y!=null&&(D(Qc,nu,gd,!1),wa(lp,i,vr,_r,re,$,null));let{left:ve,top:Se,width:Pe,height:Ue}=zt;ud=ve,dd=Se,fd=Pe,pd=Ue}function gd(y,T,R,L,B,ee,de){rs=Tn._x=Tn._y=!1,lc(y,T,R,L,B,ee,de,!1,!0);let{left:ve,top:Se,width:Pe,height:Ue}=zt,ke=Pe>0||Ue>0,st=ud!=ve||dd!=Se||fd!=Pe||pd!=Ue;if(ke&&st&&vo(zt),Tn.setScale&&ke&&st){let St=ve,xt=Pe,dt=Se,Qe=Ue;if(b.ori==1&&(St=Se,xt=Ue,dt=ve,Qe=Pe),mn&&as(C,Di(St,C),Di(St+xt,C)),gn)for(let $e in w){let Bt=w[$e];$e!=C&&Bt.from==null&&Bt.min!=Ut&&as($e,Di(dt+Qe,$e),Di(dt,$e))}hc()}else he.lock&&(he._lock=!he._lock,Is(T,!0,y!=null));y!=null&&(E(Qc,nu),wa(Qc,i,Ot,Gt,re,$,null))}function mg(y,T,R,L,B,ee,de){if(he._lock)return;Sn(y);let ve=rs;if(rs){let Se=!0,Pe=!0,Ue=10,ke,st;b.ori==0?(ke=mn,st=gn):(ke=gn,st=mn),ke&&st&&(Se=Ot<=Ue||Ot>=re-Ue,Pe=Gt<=Ue||Gt>=$-Ue),ke&&Se&&(Ot=Ot<vr?0:re),st&&Pe&&(Gt=Gt<_r?0:$),Is(null,!0,!0),rs=!1}Ot=-10,Gt=-10,oe.fill(null),Is(null,!0,!0),ve&&(rs=ve)}function vd(y,T,R,L,B,ee,de){he._lock||(Sn(y),Ze(),hc(),y!=null&&wa(up,i,Ot,Gt,re,$,null))}function _d(){M.forEach(aE),Re(i.width,i.height,!0)}Js(Pl,Jr,_d);const yr={};yr.mousedown=md,yr.mousemove=hd,yr.mouseup=gd,yr.dblclick=vd,yr.setSeries=(y,T,R,L)=>{let B=tn.match[2];R=B(i,T,R),R!=-1&&Pi(R,L,!0,!1)},fe&&(D(lp,g,md),D(Jc,g,hd),D(cp,g,y=>{Sn(y),Sa(!1)}),D(hp,g,mg),D(up,g,vd),hu.add(i),i.syncRect=Sa);const _o=i.hooks=n.hooks||{};function vn(y,T,R){ic?xa.push([y,T,R]):y in _o&&_o[y].forEach(L=>{L.call(null,i,T,R)})}(n.plugins||[]).forEach(y=>{for(let T in y.hooks)_o[T]=(_o[T]||[]).concat(y.hooks[T])});const xd=(y,T,R)=>R,tn=rn({key:null,setSeries:!1,filters:{pub:Sp,sub:Sp},scales:[C,x[1]?x[1].scale:null],match:[wp,wp,xd],values:[null,null]},he.sync);tn.match.length==2&&tn.match.push(xd),he.sync=tn;const Md=tn.key,uc=B0(Md);function wa(y,T,R,L,B,ee,de){tn.filters.pub(y,T,R,L,B,ee,de)&&uc.pub(y,T,R,L,B,ee,de)}uc.sub(i);function gg(y,T,R,L,B,ee,de){tn.filters.sub(y,T,R,L,B,ee,de)&&yr[y](null,T,R,L,B,ee,de)}i.pub=gg;function vg(){uc.unsub(i),hu.delete(i),je.clear(),ru(Pl,Jr,_d),c.remove(),ge?.remove(),vn("destroy")}i.destroy=vg;function dc(){vn("init",n,e),Be(e||n.data,!1),Z[C]?sc(C,Z[C]):Ze(),ae=zt.show&&(zt.width>0||zt.height>0),Ae=ue=!0,Re(n.width,n.height)}return x.forEach(Ps),M.forEach(Ql),t?t instanceof HTMLElement?(t.appendChild(c),dc()):t(i,dc):dc(),i}yn.assign=rn;yn.fmtNum=Yu;yn.rangeNum=Dl;yn.rangeLog=Xl;yn.rangeAsinh=Xu;yn.orient=hr;yn.pxRatio=wt;yn.join=Z1;yn.fmtDate=Ku,yn.tzDate=lT;yn.sync=B0;{yn.addGap=WT,yn.clipGaps=jl;let n=yn.paths={points:X0};n.linear=Y0,n.stepped=qT,n.bars=YT,n.spline=KT}const an={obs:"#2457d6",model:"#d9541a",astro:"#16857a",rain:"#6b9de8",muted:"#6a707a",faint:"#959aa3",grid:"rgba(20,23,28,0.07)",now:"#f2600c",peak:"#a8690a"},oE='10px "IBM Plex Mono", ui-monospace, monospace',Ja=(n={})=>({stroke:an.faint,font:oE,grid:{stroke:an.grid,width:1},ticks:{show:!1},gap:4,...n}),sh=tu;function J0({opts:n,data:e,height:t,now:i,keyStr:s,rows:r}){const a=Ni(null),o=Ni(null),l=Ni(i),c=Ni(r);return c.current=r,Ks(()=>{const h=a.current,d=n(),u={hooks:{draw:[m=>{const p=m.valToPos(l.current,"x",!0);if(!isFinite(p)||p<m.bbox.left||p>m.bbox.left+m.bbox.width)return;const x=m.ctx;x.save(),x.strokeStyle=an.now,x.lineWidth=1.5*devicePixelRatio,x.beginPath(),x.moveTo(p,m.bbox.top),x.lineTo(p,m.bbox.top+m.bbox.height),x.stroke(),x.fillStyle=an.now,x.beginPath(),x.arc(p,m.bbox.top,3*devicePixelRatio,0,Math.PI*2),x.fill(),x.restore()}]}},f={hooks:{setCursor:[m=>{const p=m.cursor.idx,x=sh();if(p==null||m.cursor.left===void 0||m.cursor.left<0){x.style.display="none";return}const M=m.over.getBoundingClientRect();x.innerHTML=c.current(m,p).join("<br>"),x.style.display="block";const w=x.offsetWidth,I=M.left+m.cursor.left;x.style.left=`${I+14+w>innerWidth?I-w-14:I+14}px`,x.style.top=`${M.top+(m.cursor.top??0)+14}px`}]}},g=new yn({...d,width:h.clientWidth||300,height:t,plugins:[u,f]},e,h);o.current=g,g.over.addEventListener("mouseleave",()=>{sh().style.display="none"});const _=new ResizeObserver(()=>{h.clientWidth&&g.setSize({width:h.clientWidth,height:t})});return _.observe(h),()=>{_.disconnect(),g.destroy(),o.current=null,sh().style.display="none"}},[s,t]),Ks(()=>{o.current?.setData(e,!0)},[e]),Ks(()=>{l.current=i,o.current?.redraw(!1)},[i]),v("div",{class:"uchart",ref:a})}const $p=n=>Math.abs(n)>=100?n.toFixed(0):Math.abs(n)>=10?n.toFixed(1):n.toFixed(2);function Xp({d:n,now:e,height:t}){const s=[n.series[0]?.x??[],...n.series.map(l=>l.y.map(c=>c===null||!isFinite(c)?null:c))],r=`${n.kind}|${n.series.map(l=>l.name+l.color).join(",")}|${n.xMin}|${n.xMax}|${(n.markers??[]).map(l=>l.x).join(",")}`;return v(J0,{opts:()=>({padding:[10,4,0,0],cursor:{y:!1,points:{size:6}},legend:{show:!1},scales:{x:{time:!1,range:[n.xMin,n.xMax]},y:n.kind==="bar"?{range:(l,c,h)=>[0,Math.max(10,h*1.1)]}:{}},axes:[Ja({values:(l,c)=>c.map(h=>n.xTick(h)),space:56,incrs:[3,6,12,24]}),Ja({size:36,values:(l,c)=>c.map(h=>$p(h))})],series:[{},...n.series.map(l=>n.kind==="bar"?{stroke:l.color,fill:l.color+"b0",width:0,paths:yn.paths.bars({size:[.75,40],align:0}),points:{show:!1}}:{stroke:l.color,width:l.dashed?1.25:1.75,dash:l.dashed?[4,3]:void 0,points:{show:!1}})],hooks:{draw:[l=>{for(const c of n.markers??[]){const h=l.valToPos(c.x,"x",!0),d=l.valToPos(c.y,"y",!0),u=l.ctx;u.save(),u.fillStyle=c.color,u.strokeStyle="#fff",u.lineWidth=2*devicePixelRatio,u.beginPath(),u.arc(h,d,4*devicePixelRatio,0,Math.PI*2),u.fill(),u.stroke(),u.restore()}}]}}),data:s,height:t,now:e,keyStr:r,rows:(l,c)=>[`<b>${n.xTick(l.data[0][c])}</b>`,...n.series.map((h,d)=>{const u=l.data[d+1][c];return u==null?"":`<i style="background:${h.color}"></i>${h.name}: ${$p(u)} ${n.unit}`}).filter(Boolean)]})}function lE({pins:n,t:e,sel:t,f:i,height:s,labels:r}){const a=.08333333333333333,o=Math.round(i.hours/a)+1,l=Array.from({length:o},(_,m)=>m*a),c=(_,m,p,x=!1)=>{if(!_.length||p<_[0]-1e-9||p>_[_.length-1]+1e-9)return x&&_.length&&p>=_[0]?m[m.length-1]:null;let M=0,w=_.length-1;for(;w-M>1;){const C=M+w>>1;_[C]<=p?M=C:w=C}if(w===M)return m[M];const I=(p-_[M])/(_[w]-_[M]||1);return m[M]+(m[w]-m[M])*I},h=(_,m,p)=>{let x=0;for(let M=0;M<_.length&&_[M]<=p;M++)x=m[M];return x},d=[l,...n.map(_=>l.map(m=>c(e,_.depth,m))),l.map(_=>c(i.tide.x,i.tide.y,_)),l.map(_=>h(i.rain.x,i.rain.y,_))],u=`${n.map(_=>`${_.id}:${_.name}:${_.color}`).join("|")}|${t}|${i.hours}`,f=()=>({padding:[10,2,0,0],cursor:{y:!1,points:{size:6}},legend:{show:!1},scales:{x:{time:!1,range:[0,i.hours]},m:{range:(_,m,p)=>[0,Math.max(.3,(p??0)*1.15)]},mpd:{},mm:{range:(_,m,p)=>[0,Math.max(10,(p??0)*2.4)]}},axes:[Ja({values:(_,m)=>m.map(p=>i.xTick(p)),space:56,incrs:[3,6,12,24]}),Ja({scale:"m",size:34,values:(_,m)=>m.map(p=>p.toFixed(p>=1?1:2))}),Ja({scale:"mpd",side:1,size:34,grid:{show:!1},stroke:an.model,values:(_,m)=>m.map(p=>p.toFixed(1))})],series:[{},...n.map(_=>({scale:"m",stroke:ja(_.color),width:_.id===t||t===null?2:1.25,fill:_.id===t?ja(_.color)+"22":void 0,points:{show:!1}})),{scale:"mpd",stroke:an.model+"aa",width:1.25,dash:[4,3],points:{show:!1}},{scale:"mm",stroke:an.rain,fill:an.rain+"40",width:0,paths:yn.paths.bars({size:[1,20],align:1}),points:{show:!1}}]}),g=(_,m)=>{const p=[`<b>${i.xTick(_.data[0][m])}</b>`];n.forEach((w,I)=>{const C=_.data[I+1][m];C!=null&&p.push(`<i style="background:${ja(w.color)}"></i>${w.name}: ${C.toFixed(2)} m`)});const x=_.data[n.length+1][m],M=_.data[n.length+2][m];return x!=null&&p.push(`<i style="background:${an.model}"></i>${r.sea}: ${x.toFixed(2)} mPD`),M!=null&&p.push(`<i style="background:${an.rain}"></i>${r.rain}: ${M.toFixed(0)} mm/h`),p};return v(J0,{opts:f,data:d,height:s,now:i.cursor,keyStr:u,rows:g})}function cE(){const n=q.rightTab.value,e=q.validation.value.points.length,t=q.pins.value.list.length,i=r=>{q.rightTab.value=r,Gl("hkfl.ui.right",r)},s=[["overview",se("概览","Overview"),null],["validation",se("验证","Validation"),e],["pins",se("钉点","Pins"),t],["forcing",k("forcing"),null]];return v("aside",{class:"inspector float",id:"right","aria-label":k("comparison"),children:[v("div",{class:"tabs",role:"tablist",children:[s.map(([r,a,o])=>v("button",{role:"tab","aria-selected":n===r,class:n===r?"on":"","data-tab":r,onClick:()=>i(r),children:[a,o?v("span",{class:"n",children:o}):null]},r)),v("span",{class:`live ${q.playing.value?"on":""}`,children:q.playing.value?k("running"):k("paused")})]}),v("div",{class:"p-body",children:[n==="overview"&&v(hE,{}),n==="validation"&&v(gE,{}),n==="pins"&&v(vE,{}),n==="forcing"&&v(_E,{})]})]})}function Vr({a:n,b:e,unit:t,digits:i}){const s=n-e,r=Math.abs(s)<Math.pow(10,-i)/2?"":s>0?"bad":"good";return v("span",{class:`delta ${r}`,title:"B − A",children:[r&&v(Ye,{name:s>0?"up":"down",size:11}),s>=0?"+":"−",Math.abs(s).toFixed(i),t?` ${t}`:""]})}function Fa({k:n,v:e,unit:t,foot:i}){return v("div",{class:"stat",children:[v("div",{class:"k",title:n,children:n}),v("div",{class:"v",children:[e,t&&v("span",{class:"u",children:t})]}),v("div",{class:"f",children:i})]})}function hE(){const n=q.metrics.value,e=q.compare.value?q.baseMetrics.value:null,t=q.scene.value,[i,s]=Cl(k("hotspots")),[r,a]=Cl(k("facilities"));return v(ft,{children:[v(un,{title:k("metrics"),hint:q.waterMode.value==="max"?"":se("至此为止的最大值","maxima so far"),children:[v("div",{id:"metrics",children:q.compare.value?v(uE,{a:e,b:n}):v(dE,{m:n,base:null})}),q.compare.value&&v("div",{class:"cmp-note",children:[v(Ye,{name:"compare",size:13}),v("span",{children:se(`分屏：左 A = ${bs("A")}，右 B = ${bs("B")}（拖动画面中央把手）`,`Split view: left A = ${bs("A")}, right B = ${bs("B")} (drag the handle)`)})]})]}),v(un,{title:i,hint:s,children:v("div",{id:"hotspots",children:v(fE,{})})}),t?.facilities?.length?v(un,{title:r,hint:a,children:v("div",{id:"facTable",children:v(pE,{})})}):null]})}const Q0=()=>q.compare.value?q.scenarios.value.find(n=>n.id===q.scenarioId.value)??null:null,bs=n=>{const e=Q0();return e?se(e[n].zh,e[n].en):k(n==="A"?"baseline":"withMeasures")};function uE({a:n,b:e}){const t=Q0(),i=[[k("maxDepth"),s=>s.maxDepth,"m",2],[k("floodedArea"),s=>s.floodedAreaKm2,"km²",3],[k("severeArea"),s=>s.floodedAreaSevereKm2,"km²",3],[k("bldAffected"),s=>s.buildingsAffected,"",0],[k("volume"),s=>s.volumeMm3,"Mm³",3]];return v(ft,{children:[t&&v("div",{class:"ab-card",children:[v("div",{class:"ab-card-t",children:[v("span",{class:"grow",children:se(t.zh,t.en)}),v("button",{class:"btn sm ghost","data-ab-open":!0,onClick:()=>{q.abOpen.value=!q.abOpen.value},children:se("更换","Change")})]}),v("div",{class:"ab-card-d",children:se(t.desc_zh,t.desc_en)})]}),v("table",{class:"tbl ab-tbl",id:"abTable",children:[v("thead",{children:v("tr",{children:[v("th",{}),v("th",{class:"r",children:[v("span",{class:"ab-k",children:"A"}),v("div",{class:"ab-th",children:bs("A")})]}),v("th",{class:"r",children:[v("span",{class:"ab-k b",children:"B"}),v("div",{class:"ab-th",children:bs("B")})]}),v("th",{class:"r",children:"B − A"})]})}),v("tbody",{children:i.map(([s,r,a,o])=>v("tr",{children:[v("td",{children:[s,a&&v("span",{class:"u",children:[" ",a]})]}),v("td",{class:"n",children:n?r(n).toFixed(o):"—"}),v("td",{class:"n",children:e?r(e).toFixed(o):"—"}),v("td",{class:"n",children:n&&e?v(Vr,{a:r(e),b:r(n),unit:"",digits:o}):"—"})]},s))})]}),v("p",{class:"caveat",children:[v(Ye,{name:"info",size:12}),v("span",{children:se("两边用同一网格、同一参数，只差情景设定；红色 = B 更糟，绿色 = B 更好。","Same grid and parameters on both sides, only the scenario differs; red = B worse, green = B better.")})]})]})}function dE({m:n,base:e}){if(!n)return v("div",{class:"stats",children:[k("maxDepth"),k("floodedArea"),k("severeArea"),k("bldAffected")].map(s=>v(Fa,{k:s,v:"—",unit:"",foot:k("noMetrics")},s))});const t=a0(n.maxDepth),i=n.floodedAreaKm2>0?n.floodedAreaSevereKm2/n.floodedAreaKm2*100:0;return v(ft,{children:[v("div",{class:"stats",children:[v(Fa,{k:k("maxDepth"),v:n.maxDepth.toFixed(2),unit:"m",foot:e?v(Vr,{a:n.maxDepth,b:e.maxDepth,unit:"m",digits:2}):v(ft,{children:[v("span",{class:"swatch",style:{background:Wl(n.maxDepth)}}),Vu()[t]]})}),v(Fa,{k:k("floodedArea"),v:n.floodedAreaKm2.toFixed(3),unit:"km²",foot:e?v(Vr,{a:n.floodedAreaKm2,b:e.floodedAreaKm2,unit:"km²",digits:3}):`${(n.floodedAreaKm2*100).toFixed(1)} ha`}),v(Fa,{k:k("severeArea"),v:n.floodedAreaSevereKm2.toFixed(3),unit:"km²",foot:e?v(Vr,{a:n.floodedAreaSevereKm2,b:e.floodedAreaSevereKm2,unit:"km²",digits:3}):`${i.toFixed(0)}% ${k("ofFlooded")}`}),v(Fa,{k:k("bldAffected"),v:String(n.buildingsAffected),unit:"",foot:e?v(Vr,{a:n.buildingsAffected,b:e.buildingsAffected,unit:"",digits:0}):k("bldRule")})]}),v("div",{class:"readouts",children:[v("div",{children:[k("volume"),v("b",{children:[n.volumeMm3.toFixed(3)," Mm³"]}),e&&v(Vr,{a:n.volumeMm3,b:e.volumeMm3,unit:"Mm³",digits:3})]}),v("div",{children:[k("gaugeNow"),v("b",{children:Object.entries(n.gaugeLevels).map(([s,r])=>`${s} ${r.toFixed(2)} mPD`).join(" · ")||"—"})]})]})]})}function fE(){const n=q.hotspots.value;return n.length?v(ft,{children:n.map((e,t)=>v("div",{class:"hot","data-hot":t,role:"button",tabIndex:0,onClick:()=>Oe.onHotspot(e.x,e.y),onKeyDown:i=>{i.key==="Enter"&&Oe.onHotspot(e.x,e.y)},title:k("flyTo"),children:[v("span",{class:"rank",children:String(t+1).padStart(2,"0")}),v("div",{class:"h-main",children:[v("div",{class:"h-top",children:[v("span",{class:"h-name",children:e.name??""}),e.area?v("span",{class:"h-area",children:[(e.area/1e4).toFixed(1)," ha"]}):null,v("span",{class:"h-d",children:[e.depth.toFixed(2)," m"]})]}),v("div",{class:"h-bar",children:v("i",{style:{width:`${Math.min(100,e.depth/3*100).toFixed(1)}%`,background:Wl(e.depth)}})})]}),v(Ye,{name:"flyto",size:13,cls:"h-fly"})]},t))}):v("div",{class:"empty",children:[v(Ye,{name:"inbox",size:16}),v("span",{children:k("noHot")})]})}function pE(){const{m:n,base:e}=q.facilities.value,t=q.compare.value?e:null,i=q.scene.value?.facilities;if(!i||!n?.facDepths)return v("div",{class:"empty",children:[v(Ye,{name:"inbox",size:16}),v("span",{children:k("noMetrics")})]});const r=i.map(o=>({f:o,d:n.facDepths[o.id]??0,b:t?.facDepths?.[o.id]})).sort((o,l)=>Math.max(l.d,l.b??0)-Math.max(o.d,o.b??0)).filter(o=>Math.max(o.d,o.b??0)>=.15),a=o=>v("span",{class:`pill num ${o>=.5?"bad":o>=.15?"warn":"ok"}`,children:o.toFixed(2)});return r.length?v(ft,{children:[v("table",{class:"tbl",children:[v("thead",{children:v("tr",{children:[v("th",{children:k("facility")}),t&&v("th",{class:"r",children:"A"}),v("th",{class:"r",children:[t?"B":k("maxDepth")," (m)"]})]})}),v("tbody",{children:r.slice(0,14).map(o=>v("tr",{children:[v("td",{children:v("div",{class:"fname",children:[v(Xb,{html:Rl[o.f.type]??""}),v("div",{children:[o.f.name,v("div",{class:"sub",children:k("ft_"+o.f.type)})]})]})}),t&&v("td",{class:"n",children:a(o.b??0)}),v("td",{class:"n",children:a(o.d)})]},o.f.id))})]}),v("p",{class:"caveat",children:[v(Ye,{name:"info",size:12}),v("span",{children:[r.length,"/",i.length," ",se("受影响（≥ 0.15 m）","affected (≥ 0.15 m)"),r.length>14?se("，仅列前 14",", top 14 shown"):"",t?` · A = ${bs("A")}, B = ${bs("B")}`:""]})]})]}):v("div",{class:"empty",children:[v(Ye,{name:"check",size:16}),v("span",{children:["0/",i.length," ",se("受影响（≥ 0.15 m）","affected (≥ 0.15 m)")]})]})}function mE(n,e){if(e===void 0)return"";const t=n.cls==="none"?0:n.depth,i=Math.max(.35,.5*t);return n.unrep||n.berm!==void 0&&e<.05?"unrep":n.cls==="none"?e<.2?"hit":"over":n.lower?e>=t-i?"hit":"under":Math.abs(e-t)<=i?"hit":e<t?"under":"over"}function gE(){const{points:n,m:e}=q.validation.value,[t,i]=ho(new Set);if(!n.length)return v("section",{class:"blk",children:v("div",{class:"empty",children:[v(Ye,{name:"inbox",size:16}),v("span",{children:k("noVal")})]})});const s=q.scene.value?.facilities??[],r=n.map(c=>mE(c,e?.valDepths[c.id])),a={hit:0,under:0,over:0,unrep:0};let o=0;r.forEach(c=>{c&&(o++,a[c]++)});const l=c=>{const h=new Set(t);h.has(c)?h.delete(c):h.add(c),i(h)};return v("section",{class:"blk",id:"valTable",children:[v("div",{class:"blk-h",children:v("span",{class:"micro",children:k("validation")})}),v("div",{class:"score",children:[v("div",{class:"big",children:[o?a.hit:"—",v("small",{children:["/ ",o||n.length]})]}),v("div",{class:"side",children:[v("div",{class:"cnt",children:[v("span",{children:[k("hit")," ",v("b",{children:a.hit})]}),v("span",{children:[k("under")," ",v("b",{children:a.under})]}),v("span",{children:[k("over")," ",v("b",{children:a.over})]}),a.unrep>0&&v("span",{children:[k("unrep")," ",v("b",{children:a.unrep})]})]}),v("div",{class:"ticks",children:r.map((c,h)=>v("i",{class:c},h))})]})]}),v("div",{class:"val-head",children:k("valHead")}),v("table",{class:"tbl",children:[v("thead",{children:v("tr",{children:[v("th",{children:k("place")}),v("th",{class:"r",children:[k("observed")," (m)"]}),v("th",{class:"r",children:[k("simulated")," (m)"]}),v("th",{})]})}),v("tbody",{children:n.map((c,h)=>{const d=e?.valDepths[c.id],u=c.cls==="none"?0:c.depth,f=r[h],g=c.grade,_=t.has(c.id),m=c.cls==="none"?"":g==="B"?"±0.3":g==="C"?"±50%":g==="D"?k("estimated"):"",p=c.ug?s.find(w=>w.id===c.ug):void 0,x=[c.ug?k("ugDepth")+(p?.ug?` · ${se("楼面","floor")} ${Math.round(p.ug.area).toLocaleString()} m²`:""):k("streetDepth"),c.snapped_m?k("snapped").replace("{d}",c.snapped_m.toFixed(0)):"",c.berm!==void 0?k("bermNote").replace("{z}",c.berm.toFixed(1)):""].filter(Boolean).join(se("；","; ")),M=c.note_zh?se(c.note_zh,c.note_en??c.note_zh):"";return[v("tr",{class:`vrow ${_?"open":""}`,"data-vrow":c.id,onClick:()=>l(c.id),title:c.src,children:[v("td",{children:v("div",{class:"fname",children:[g&&v("span",{class:`grade ${g}`,title:k("grade"+g),children:g}),v("span",{children:[se(c.zh,c.en),c.ug?v("span",{class:"tag",children:se("地库","basement")}):c.berm!==void 0?v("span",{class:"tag",children:se("阶地","berm")}):null]})]})}),v("td",{class:"n",children:[c.cls==="none"?se("无水浸","none"):`${c.lower?"≥":""}${c.depth.toFixed(1)}`,m&&v("div",{class:"unc",children:m})]}),v("td",{class:"n",children:[d===void 0?"—":d.toFixed(2),d!==void 0&&f!=="unrep"&&!(c.lower&&d>=u)&&v("div",{class:"unc",children:["Δ ",d-u>=0?"+":"−",Math.abs(d-u).toFixed(2)]})]}),v("td",{class:"r",children:f?v("span",{class:`pill ${f==="hit"?"ok":f}`,children:k(f)}):v("span",{class:"pill mute",children:"—"})})]},c.id),_&&v("tr",{class:"vdet",children:v("td",{colSpan:4,children:v("dl",{class:"vdet-b",children:[g&&v(ft,{children:[v("dt",{children:se("可信度","Reliability")}),v("dd",{children:[k("grade"+g),m?` (${m})`:""]})]}),c.basis&&v(ft,{children:[v("dt",{children:k("basis")}),v("dd",{children:c.basis})]}),v("dt",{children:k("sampling")}),v("dd",{children:x}),M&&v(ft,{children:[v("dt",{children:k("modelNotes")}),v("dd",{children:M})]}),v("dt",{children:k("source")}),v("dd",{children:c.src})]})})},c.id+"_d")]})})]}),v("p",{class:"caveat",children:[v(Ye,{name:"info",size:12}),v("span",{children:k("hitRule")})]})]})}function vE(){const{list:n,t:e,sel:t,f:i}=q.pins.value;return n.length?v("section",{class:"blk",id:"pinBox",children:[v("div",{class:"blk-h",children:[v("span",{class:"micro",children:k("pins")}),v("span",{class:"hint"}),v("span",{class:"n",children:n.length})]}),n.map(s=>{const r=s.depth.length?s.depth[s.depth.length-1]:null,a=s.depth.length?Math.max(...s.depth):null;return v("div",{class:`pin-row ${s.id===t?"sel":""}`,"data-pin":s.id,onClick:o=>{o.target.tagName!=="INPUT"&&Oe.onSelectPin(t===s.id?null:s.id)},children:[v("span",{class:"dot",style:{background:ja(s.color)}}),v("input",{defaultValue:s.name,"aria-label":k("f_name"),onKeyDown:o=>{o.stopPropagation(),o.key==="Enter"&&o.currentTarget.blur()},onChange:o=>{const l=o.currentTarget.value.trim();Oe.onRenamePin(s.id,l||s.name)}}),v("span",{class:"pv",children:r===null?"—":v(ft,{children:[v("b",{children:[r.toFixed(2)," m"]}),v("br",{}),k("pinMax")," ",a.toFixed(2)]})}),v("span",{style:{display:"flex"},children:[v("button",{class:"btn sm icon ghost",title:k("flyTo"),onClick:o=>{o.stopPropagation(),Oe.onFlyPin(s.id)},children:v(Ye,{name:"flyto",size:13})}),v("button",{class:"btn sm icon ghost",title:k("delete"),onClick:o=>{o.stopPropagation(),Oe.onRemovePin(s.id)},children:v(Ye,{name:"x",size:13})})]})]},s.id)}),i&&v(ft,{children:[v("div",{class:"chart-key",style:{marginTop:"12px"},children:[n.map(s=>v("span",{children:[v("i",{style:{background:ja(s.color)}}),s.name]},s.id)),v("span",{children:[v("i",{class:"dash",style:{color:"var(--c-model)"}}),se("边界潮位 (mPD)","Sea level (mPD)")]}),v("span",{children:[v("i",{class:"bar",style:{background:"var(--c-rain)",opacity:.5}}),se("雨强","Rain")]})]}),v(lE,{pins:n,t:e,sel:t,f:i,height:200,labels:{sea:se("边界潮位","Sea level"),rain:se("雨强","Rain")}})]}),v("div",{class:"row",style:{marginTop:"10px"},children:[v("button",{class:"btn sm",onClick:()=>Oe.onPinMode(),children:[v(Ye,{name:"pin",size:13}),k("pinAdd")]}),v("span",{class:"grow"}),v("button",{class:"btn sm",onClick:()=>Oe.onExportPins(),children:[v(Ye,{name:"download",size:13}),k("exportCsv")]})]}),v("p",{class:"caveat",children:[v(Ye,{name:"info",size:12}),v("span",{children:k("pinRerun")})]})]}):v("section",{class:"blk",children:v("div",{class:"empty",children:[v(Ye,{name:"pin",size:16}),v("span",{children:[k("pinEmpty"),v("br",{}),v("button",{class:"btn sm",style:{marginTop:"10px"},onClick:()=>Oe.onPinMode(),children:[v(Ye,{name:"pin",size:13}),k("pinAdd")]})]})]})})}function _E(){const n=q.charts.value,e=q.chartCursor.value,t=q.event.value,[i,s]=$b(k("tideChart")),[r,a]=Cl(k("rainChart")),o=l=>v("div",{class:"chart-key",children:[l.series.map(c=>v("span",{children:[v("i",{class:l.kind==="bar"?"bar":c.dashed?"dash":"",style:c.dashed?{color:c.color}:{background:c.color}}),c.name]},c.name)),(l.markers??[]).map(c=>v("span",{children:[v("i",{class:"dot",style:{background:c.color}}),c.label]},c.label))]});return v(ft,{children:[v(un,{title:i,hint:s,children:n?v(ft,{children:[o(n.tide),v(Xp,{d:n.tide,now:e,height:170})]}):null}),v(un,{title:r,hint:a,children:n?v(ft,{children:[o(n.rain),v(Xp,{d:n.rain,now:e,height:120})]}):null}),t&&v(un,{title:k("sources"),n:t.sources.length,children:v("ol",{class:"sources",children:t.sources.map((l,c)=>v("li",{children:l},c))})})]})}function xE(){const n=q.active.value,e=(t,i,s,r,a)=>v("button",{id:t,class:`btn icon ${r?"on":""}`,"aria-label":s,"aria-pressed":r,"data-tip":s,"data-tip-pos":"left",onClick:a,children:v(Ye,{name:i,size:16})});return v("div",{class:"mapctl",children:[v("div",{class:"ctl-stack float",role:"toolbar","aria-label":se("相机","Camera"),children:[e("btnBird","bird",k("camBird"),!1,()=>Oe.onCamera("bird")),e("btnStreet","street",k("camStreet"),!1,()=>Oe.onCamera("street")),e("btnFollow","target",k("camFollow"),!!n.btnFollow,()=>Oe.onCamera("follow")),v("hr",{}),e("btnOrbit","orbit",se("自动环绕","Orbit"),!!n.btnOrbit,()=>Oe.onOrbit()),e("btnTour","tour",se("电影式飞览","Cinematic tour"),!!n.btnTour,()=>Oe.onTour())]}),v("div",{class:"ctl-stack float",children:[v("button",{id:"btnExag",class:`btn icon txt ${q.exag.value!==1?"on":""}`,"data-tip":k("exag"),"data-tip-pos":"left",onClick:()=>Oe.onExag(),children:["×",q.exag.value]}),e("btnTex","map",q.texMode.value==="imagery"?se("切换到地图底图","Switch to map basemap"):se("切换到卫星影像","Switch to imagery"),!1,()=>Oe.onTexToggle())]})]})}function ME(){const[n,e]=ho(()=>{try{return localStorage.getItem("hkfl.ui.lgkeys")!=="0"}catch{return!0}}),t=q.waterMode.value==="max",i=Vu();return v("div",{class:"legend float",id:"legend",children:[v("div",{class:"lg-h",children:[v("span",{class:"lg-t",id:"legendTitle",children:k(t?"legendMax":"legendNow")}),v("span",{class:"lg-u",children:"m"}),v("span",{class:"grow"}),v("button",{class:"toggle","aria-label":se("图例说明","Legend keys"),"aria-expanded":n,onClick:()=>{e(!n),Gl("hkfl.ui.lgkeys",n?"0":"1")},children:v(Ye,{name:"chev",size:14,cls:n?"":"rot"})})]}),v("div",{class:"steps",id:"legendSteps",children:Wb.map(s=>v("i",{style:{background:Wl(s)}},s))}),v("div",{class:"breaks",children:["0.1","0.3","0.5","1","2"].map((s,r)=>v("span",{style:{left:`${(r+1)/6*100}%`},children:s},s))}),v("div",{class:"classes",id:"legendCls",children:i.map(s=>v("span",{children:s},s))}),n&&v("div",{class:"lg-keys",id:"legendKeys",children:[v("span",{children:[v("i",{class:"rise"}),k("lg_rise")]}),v("span",{children:[v("i",{class:"recede"}),k("lg_recede")]}),v("span",{children:[v("i",{class:"contour"}),k("lg_contour")]}),v("span",{children:[v("i",{class:"edge"}),k("lg_edge")]}),v("span",{children:[v("i",{class:"trace"}),k("lg_trace")]}),v("span",{children:[v("i",{class:"pt",style:{background:"var(--warn-dot)"}}),k("lg_val")]}),v("span",{children:[v("i",{class:"pt",style:{background:"var(--blue)"}}),k("lg_gauge")]}),v("span",{children:[v("i",{class:"pt",style:{background:"var(--bad)"}}),k("lg_fac")]})]})]})}const yE={60:["1分","1m"],300:["5分","5m"],900:["15分","15m"],1800:["30分","30m"],3600:["1时","1h"]},En={rainY:30,rainH:22,seaY:56,seaH:30};function qp(n,e){const t=Math.min(devicePixelRatio,2),i=n.clientWidth||600,s=n.clientHeight||90;(n.width!==i*t||n.height!==s*t)&&(n.width=i*t,n.height=s*t);const r=n.getContext("2d");r.setTransform(t,0,0,t,0,0),r.clearRect(0,0,i,s);const a=u=>u/e.hours*i,o=Math.min(En.seaH,s-En.seaY-2);r.fillStyle="rgba(20,23,28,0.035)",r.fillRect(0,En.rainY,i,En.rainH),r.fillRect(0,En.seaY,i,o);const l=e.hours>30?6:3;r.font='10px "IBM Plex Mono", ui-monospace, monospace',r.textAlign="center";for(let u=0;u<=e.hours+1e-6;u+=l){const f=Math.round(a(u))+.5;r.fillStyle="rgba(20,23,28,0.08)",r.fillRect(f-.5,En.rainY,1,En.seaY+o-En.rainY),u>0&&u<e.hours-.01&&(r.fillStyle=an.faint,r.fillText(e.tick(u),f,10))}const c=Math.max(10,...e.rain.y),h=Math.max(1,i/Math.max(1,e.hours)-1.5);r.fillStyle=an.rain;for(let u=0;u<e.rain.x.length;u++){const f=e.rain.y[u]/c*(En.rainH-3);f>.3&&r.fillRect(a(e.rain.x[u])+.75,En.rainY+En.rainH-f,h,f)}if(e.tide.y.length){const u=Math.min(...e.tide.y),f=Math.max(...e.tide.y),g=_=>En.seaY+o-3-(_-u)/Math.max(.05,f-u)*(o-8);r.beginPath(),e.tide.x.forEach((_,m)=>{const p=a(_),x=g(e.tide.y[m]);m===0?r.moveTo(p,x):r.lineTo(p,x)}),r.strokeStyle=an.model,r.lineWidth=1.5,r.lineJoin="round",r.stroke(),r.lineTo(a(e.tide.x[e.tide.x.length-1]),En.seaY+o),r.lineTo(a(e.tide.x[0]),En.seaY+o),r.closePath(),r.fillStyle="rgba(217,84,26,0.08)",r.fill(),r.font='9.5px "IBM Plex Mono", ui-monospace, monospace',r.textAlign="right",r.fillStyle=an.model,r.fillText(`${f.toFixed(1)}`,i-4,En.seaY+10)}r.font='9.5px "IBM Plex Sans", "Noto Sans SC", sans-serif',r.textAlign="left";const d=(u,f)=>{const g=r.measureText(u).width;r.fillStyle="rgba(251,251,252,0.85)",r.fillRect(3,f+2,g+8,13),r.fillStyle=an.muted,r.fillText(u,7,f+12)};d(se("雨强 mm/h","Rain mm/h"),En.rainY),d(se("潮位 mPD","Sea level mPD"),En.seaY)}function SE(){const n=q.timeline.value,{label:e,frac:t}=q.time.value,i=q.playing.value,s=Ni(null),r=Ni(null),[a,o]=ho(null),l=Ni(!1);Ks(()=>{n&&s.current&&qp(s.current,n)},[n]),Ks(()=>{const p=r.current;if(!p)return;const x=new ResizeObserver(()=>{const M=q.timeline.value;M&&s.current&&qp(s.current,M)});return x.observe(p),()=>x.disconnect()},[]);const c=p=>{const x=r.current.getBoundingClientRect();return Math.min(1,Math.max(0,(p.clientX-x.left)/x.width))},h=(p,x)=>{const M=tu();M.innerHTML=p,M.style.display="block";const w=r.current.getBoundingClientRect(),I=M.offsetWidth;M.style.left=`${Math.min(innerWidth-I-8,Math.max(8,x-I/2))}px`,M.style.top=`${w.top-M.offsetHeight-10}px`},d=()=>{tu().style.display="none"},[u,f]=e.includes(",")?[e.split(",")[0],e.split(",")[1].replace("HKT","").trim()]:["",e],g=q.cond.value,_=q.trend.value,m=g?.signal?se(g.signal[0],g.signal[1]):"";return v("div",{class:"timeline float",id:"bottom",children:[v("div",{class:"tl-ctl",children:[v("div",{class:"tl-top",children:[v("button",{id:"btnPlay",class:`play ${i?"on":""}`,"aria-label":`${k("play")} / ${k("pause")}`,"data-tip":`${k("play")} / ${k("pause")} · Space`,"data-tip-pos":"right",onClick:()=>Oe.onPlayToggle(),children:v(Ye,{name:i?"pause":"play",size:17})}),v("div",{class:"clock",id:"timeLabel",children:[v("span",{class:"d",children:u?`${u} · HKT`:"HKT"}),v("span",{class:"t",children:f})]}),v("span",{class:"grow"}),v("button",{id:"btnReset",class:"btn sm icon ghost","aria-label":se("重置","Reset"),"data-tip":se("从头重算","Restart the run"),onClick:()=>Oe.onReset(),children:v(Ye,{name:"reset",size:14})})]}),v(qr,{id:"speedBtns",cls:"full",items:Hb.map(p=>[p,yE[p][q.lang.value==="zh"?0:1]]),value:q.speed.value,onPick:p=>Oe.onSpeed(p)})]}),v("div",{class:"lanes",children:v("div",{id:"scrub",ref:r,tabIndex:0,role:"slider","aria-label":se("时间轴","Timeline"),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(t*100),"aria-valuetext":e,onPointerDown:p=>{p.target.closest(".tmark")||(l.current=!0,p.currentTarget.setPointerCapture(p.pointerId))},onPointerMove:p=>{const x=p.target.closest(".tmark");if(x&&!l.current&&n){const w=n.marks[+x.dataset.mark];o(null),h(`<b>${se(w.zh,w.en)}</b><br>${n.fmt(w.h)}`,p.clientX);return}const M=c(p);o(M),n&&h(`<b>${n.fmt(M*n.hours)}</b>`,p.clientX)},onPointerUp:p=>{l.current&&(l.current=!1,Oe.onSeek(c(p)))},onPointerCancel:()=>{l.current=!1,o(null),d()},onPointerLeave:()=>{l.current||(o(null),d())},onKeyDown:p=>{if(!n)return;const x=.5/Math.max(1,n.hours),M=p.key==="ArrowRight"?t+x:p.key==="ArrowLeft"?t-x:p.key==="Home"?0:p.key==="End"?1:null;M!==null&&(p.preventDefault(),p.stopPropagation(),Oe.onSeek(Math.min(1,Math.max(0,M))))},children:[v("canvas",{id:"scrubCanvas",ref:s}),v("div",{class:"played",style:{width:`${(t*100).toFixed(3)}%`}}),n&&n.marks.filter(p=>p.h>=0&&p.h<=n.hours).map((p,x)=>v("span",{class:`tmark ${p.kind} ${p.tone??""}`,"data-mark":n.marks.indexOf(p),style:{left:`${(p.h/n.hours*100).toFixed(3)}%`},onClick:()=>Oe.onSeek(Math.min(1,Math.max(0,p.h/n.hours)))},x)),v("div",{class:"ghost",style:{display:a===null?"none":"block",left:`${((a??0)*100).toFixed(3)}%`}}),v("div",{class:"playhead",id:"playhead",style:{left:`${(t*100).toFixed(3)}%`}})]})}),v("div",{class:"tl-now",id:"stepInfo",children:[v("div",{class:"row2",children:[v("span",{class:"micro",style:{color:"var(--text-2)"},children:se("此刻","Now")}),v("span",{class:"grow"}),_&&v("span",{class:`trend ${_.dir}`,title:k("trendTip"),children:[_.dir!=="flat"&&v(Ye,{name:_.dir==="up"?"up":"down",size:11}),k(_.dir==="up"?"trendUp":_.dir==="down"?"trendDown":"trendFlat"),_.dir!=="flat"&&v("b",{children:[_.rate>0?"+":"−",Math.abs(_.rate*1e3).toFixed(0),"k m³/h"]})]})]}),g?v(ft,{children:[v("div",{class:"kv",children:[v("div",{children:[k("c_sea"),v("b",{children:[g.tide.toFixed(2),v("u",{children:"mPD"})]})]}),v("div",{children:[k("c_rain"),v("b",{children:[g.rain.toFixed(0),v("u",{children:"mm/h"})]})]}),v("div",{children:["Hs",v("b",{children:[g.hs.toFixed(1),v("u",{children:"m"})]})]})]}),v("div",{class:"row2",children:m?v("span",{class:`sig ${o0(g.signal[1])}`,title:m,children:m}):v("span",{class:"storm",children:se("无警告信号","No warning signal")})}),v("div",{class:"storm",title:se("求解器时间步 · 每帧步数","solver time step · steps per frame"),children:[g.storm?`${g.storm} · `:"","dt ",g.dt.toFixed(2)," s · ",g.n,"/f"]})]}):v("div",{class:"storm",children:k("noMetrics")})]})]})}function wE(){const n=q.status.value;return n?v("div",{class:"toast",id:"status",role:"status",children:n}):null}function bE(){const n=q.probe.value;if(!n||!q.probeOn.value)return null;const e=!n.sea&&n.depth>=.01;return v("div",{class:"probe",style:{left:`${n.sx}px`,top:`${n.sy}px`},children:n.sea?v("span",{class:"pc",children:se("海域（潮位边界）","Sea (tidal boundary)")}):v(ft,{children:[v("span",{class:"pd",children:[e&&v("span",{class:"swatch",style:{background:Wl(n.depth)}}),e?`${n.depth.toFixed(2)} m`:se("干","dry"),e&&v("span",{class:"pc",style:{fontSize:"10px"},children:Vu()[a0(n.depth)]})]}),v("span",{class:"pc",children:[se("最大","max")," ",n.hmax.toFixed(2)," m · ",se("地面","ground")," ",n.ground.toFixed(1)," mPD"]})]})})}function TE(){const n=q.loading.value;return v("div",{id:"loading",style:{display:n?"flex":"none"},children:[v("div",{class:"ld-brand",children:[v("span",{class:"ld-mark",children:v("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","aria-hidden":"true",children:[v("path",{d:"M3 10c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"}),v("path",{d:"M3 16c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"})]})}),v("div",{children:[v("div",{class:"ld-nm",children:"HK Flood Lab"}),v("div",{class:"ld-sub",children:se("香港洪涝实验室 · 交互式洪水数字孪生","Hong Kong interactive flood digital twin")})]})]}),v("div",{class:"ld-bar",children:v("i",{id:"loadingBar",style:{width:`${Math.round((n?.frac??0)*100)}%`}})}),v("div",{class:"ld-msg",id:"loadingText",children:n?.text||k("loading")})]})}function EE(){const n=q.lang.value,e=`shell ${q.leftTab.value?"":"left-closed"} ${q.panelsOff.value?"panels-off":""}`;return v("div",{class:e,children:[v(Zb,{}),v(l1,{}),v(cE,{}),v(xE,{}),v(ME,{}),v(SE,{}),v(wE,{}),v(bE,{}),v(TE,{})]},n)}class AE{constructor(e){Gb(e),Pb(Vm(EE,{}),document.getElementById("ui-root")),this.labelSwipe()}labelSwipe(){const e=q.scenarios.value.find(t=>t.id===q.scenarioId.value);document.getElementById("swipeL").textContent=e?se(e.A.zh,e.A.en):k("swipeLeft").replace(/[◀▶]/g,"").trim(),document.getElementById("swipeR").textContent=e?se(e.B.zh,e.B.en):k("swipeRight").replace(/[◀▶]/g,"").trim()}get newRole(){return q.newRole.value}get showFac(){return q.showFac.value}getMeasureParams(e){return q.measureParams.value[e]}relabel(){q.lang.value=sr(),this.labelSwipe()}setScenes(e,t){q.scenes.value=e,q.sceneId.value=t}setEvents(e,t){q.events.value=e,q.eventId.value=t}setScene(e){q.scene.value=e,q.sceneId.value=e.id}setEvent(e){q.event.value=e,q.eventId.value=e.id}setParams(e){q.params.value={...e}}setMeasures(e,t){q.measures.value=e,q.selMeasure.value=t}setMeasuresDirty(e,t){q.dirty.value=e,q.devSave.value=t}setDraftInfo(e,t){q.draft.value={n:e,len:t}}setTool(e){q.tool.value=e,e&&(q.leftTab.value="measures")}setCompare(e){q.compare.value=e}setScenarios(e,t){q.scenarios.value=e,q.scenarioId.value=t,this.labelSwipe()}setFlowMode(e){q.flowMode.value=e}setActive(e,t){q.active.value={...q.active.value,[e]:t}}setPlaying(e){q.playing.value=e}setSpeed(e){q.speed.value=e}setTime(e,t){q.time.value={label:e,frac:t}}setConditions(e){q.cond.value=e}setStepInfo(e){}setStatus(e){q.status.value=e}setLoading(e,t=""){q.loading.value=e===null?null:{frac:e,text:t}}togglePanels(){q.panelsOff.value=!q.panelsOff.value}setTimeline(e){q.timeline.value=e}setWaterMode(e){q.waterMode.value=e}setExag(e){q.exag.value=e}setTexMode(e){q.texMode.value=e}setCharts(e,t){q.charts.value={tide:e,rain:t}}setChartCursor(e){q.chartCursor.value=e}setProbe(e){q.probe.value=e}setMetrics(e,t){const i=q.metrics.value;if(!e)q.trend.value=null;else if(i&&e.t>i.t){const s=(e.volumeMm3-i.volumeMm3)/((e.t-i.t)/3600),r=Math.abs(s)/Math.max(.001,e.volumeMm3);q.trend.value={dir:e.volumeMm3<5e-4||r<.02?"flat":s>0?"up":"down",rate:s}}q.metrics.value=e,q.baseMetrics.value=t}setHotspots(e){q.hotspots.value=e}setValidation(e,t){q.validation.value={points:e,m:t}}setFacilities(e,t){q.facilities.value={m:e,base:t}}setPins(e,t,i,s){q.pins.value={list:e.map(r=>({...r,depth:r.depth.slice()})),t:t.slice(),sel:i,f:s}}}const Or=900,Yp={"hk-island-east":"mangkhut-2018","tseung-kwan-o":"mangkhut-2018","sha-tin":"wanda-1962","tai-po":"mangkhut-2018","wong-tai-sin":"rainstorm-2023","victoria-harbour":"dubhe-1000","tai-o":"hato-2017","hk-overview":"dubhe-1000"},jp=[12723548,1023370,7358696,11566347,6067213,4804695];function Ki(n){return new Date(n.length===16?`${n}:00+08:00`:`${n}+08:00`)}class CE{constructor(){X(this,"world");X(this,"ui");X(this,"solver",null);X(this,"baseline",null);X(this,"assets",null);X(this,"event",null);X(this,"sceneList",[]);X(this,"eventList",[]);X(this,"sceneId","hk-island-east");X(this,"eventId","mangkhut-2018");X(this,"params",{surgeScale:1,waveSetup:.2,waveHs:2,slr:0,rainScale:1,drainMmPerHour:40,hillCapMmPerHour:40,recoverGain:6,tideLockM:1.5,buildingsBlock:!0,manning:.035,subgrid:!0});X(this,"measures",null);X(this,"forcing",null);X(this,"playing",!1);X(this,"speed",900);X(this,"simT",0);X(this,"windowSec",86400);X(this,"compare",!1);X(this,"showBaseline",!1);X(this,"scenarioId","measures");X(this,"sceneScenarios",[]);X(this,"scenarioList",[]);X(this,"scenarioPick",{});X(this,"flowMode","particles");X(this,"splitFrac",.5);X(this,"showFacilities",!0);X(this,"flyAfterSeek",!1);X(this,"probeOn",!0);X(this,"probeT",0);X(this,"waterMode","now");X(this,"showLandmarks",!0);X(this,"showMeasureLabels",!0);X(this,"follow",!1);X(this,"followAt",null);X(this,"pins",[]);X(this,"pinT",[]);X(this,"pinMode",!1);X(this,"selPin",null);X(this,"pinSeq",1);X(this,"lastPinSample",-1e9);X(this,"spawnA",new Float32Array(0));X(this,"spawnB",new Float32Array(0));X(this,"metrics",null);X(this,"baseMetrics",null);X(this,"tool",null);X(this,"draft",[]);X(this,"selectedMeasure",null);X(this,"snapShore",!0);X(this,"modSigA","");X(this,"modSigB","");X(this,"lastFrame",performance.now());X(this,"lastMetrics",0);X(this,"lastLightning",0);X(this,"seekTarget",null);X(this,"dtBase",.5);X(this,"maxDepthSeen",0);X(this,"snaps",[]);X(this,"snapPool",[]);X(this,"snapEvery",0);X(this,"nextSnapT",0);X(this,"loadingToken",0);X(this,"flashTimer",0);const e=document.getElementById("view");this.world=new Mb(e,document.getElementById("labels")),this.ui=new AE({onSceneChange:t=>{this.sceneId=t,this.eventId=Yp[t]??this.eventId,this.ui.setEvents(this.eventList,this.eventId),this.load()},onEventChange:t=>{this.eventId=t,this.load(!1)},onParamChange:t=>{this.params=t,this.applyParams(),this.restart()},onMeasureTool:t=>this.setTool(t),onFinishDraft:()=>this.finishDraft(),onCancelDraft:()=>{this.draft=[],this.world.setDraft([],"wall"),this.setTool(null)},onUndoVertex:()=>this.undoVertex(),onSnapToggle:t=>{this.snapShore=t},onRemoveMeasure:t=>{this.measures?.remove(t),this.selectedMeasure===t&&(this.selectedMeasure=null),this.measuresChanged()},onClearMeasures:()=>{this.measures?.clearWhatIf(),this.selectedMeasure=null,this.measuresChanged()},onMeasureParam:()=>{},onSelectMeasure:t=>this.selectMeasure(t),onUpdateMeasure:(t,i)=>{this.measures?.update(t,i),this.measuresChanged()},onSaveMeasures:()=>this.saveMeasures(),onExportMeasures:()=>this.exportMeasures(),onImportMeasures:t=>this.importMeasures(t),onRevertMeasures:()=>this.revertMeasures(),onPlayToggle:()=>this.setPlaying(!this.playing),onReset:()=>this.restart(),onSpeed:t=>{this.speed=t,this.ui.setSpeed(t)},onSeek:t=>this.seek(t*this.windowSec),onCompare:()=>this.toggleCompare(),onScenario:t=>this.setScenario(t),onOrbit:()=>{const t=this.world.director.controls;t.autoRotate=!t.autoRotate,t.autoRotateSpeed=.6,this.ui.setActive("btnOrbit",t.autoRotate)},onTour:()=>this.tour(),onTexToggle:()=>{this.world.setTextureMode(this.world.texMode==="imagery"?"basemap":"imagery"),this.ui.setTexMode(this.world.texMode)},onPanels:()=>{this.ui.togglePanels(),this.syncLabelInset()},onLang:()=>{Lb(sr()==="zh"?"en":"zh"),document.documentElement.lang=sr()==="zh"?"zh-CN":"en",this.ui.relabel(),this.ui.setScenes(this.sceneList,this.sceneId),this.ui.setEvents(this.eventList,this.eventId),this.refreshCharts(),this.refreshLabels()},onFlyTo:(t,i)=>this.world.director.flyTo(this.world.viewAt(t,i,700),2.2),onShowMax:t=>this.world.setShowMax(t),onShowBaseline:t=>{this.showBaseline=t,this.bindView()},onFlowMode:()=>this.cycleFlow(),onPeak:()=>this.jumpToPeak(),onHotspot:(t,i)=>this.world.director.flyTo(this.world.viewAt(t,i,450),2),onShowFacilities:t=>{this.showFacilities=t,this.refreshLabels()},onWaterMode:t=>{this.waterMode=t,this.world.setWaterMode(t),this.ui.setWaterMode(t)},onExag:()=>{const t=[1,1.5,2,3],i=t[(t.indexOf(this.world.exag)+1)%t.length];this.world.setExaggeration(i),this.ui.setExag(i),this.refreshLabels()},onCamera:t=>this.cameraPreset(t),onShowLandmarks:t=>{this.showLandmarks=t,this.refreshLabels()},onShowMeasureLabels:t=>{this.showMeasureLabels=t,this.refreshLabels()},onShadows:t=>this.world.setShadows(t),onProbe:t=>{this.probeOn=t,t||this.ui.setProbe(null)},onPinMode:()=>this.setPinMode(!this.pinMode),onRemovePin:t=>{this.pins=this.pins.filter(i=>i.id!==t),this.selPin===t&&(this.selPin=null),this.pinsChanged()},onRenamePin:(t,i)=>{const s=this.pins.find(r=>r.id===t);s&&(s.name=i,this.pinsChanged())},onSelectPin:t=>{this.selPin=t,this.pinsChanged()},onFlyPin:t=>{const i=this.pins.find(s=>s.id===t);i&&this.world.director.flyTo(this.world.viewAt(i.x,i.y,420),2)},onExportPins:()=>this.exportPins()}),this.ui.setSpeed(this.speed),this.ui.setParams(this.params),this.ui.setFlowMode(this.flowMode),this.bindPointer(e),this.bindSwipe(),window.addEventListener("resize",()=>this.syncLabelInset()),this.world.director.onTourEnd=()=>{this.ui.setActive("btnTour",!1),this.ui.setStatus(null)},this.init(),requestAnimationFrame(()=>this.frame())}async init(){try{[this.sceneList,this.eventList]=await Promise.all([bg(),Tg()])}catch(t){this.ui.setLoading(1,`数据索引加载失败 / failed to load index: ${t}`);return}const e=new URLSearchParams(location.search);e.get("scene")&&this.sceneList.some(t=>t.id===e.get("scene"))&&(this.sceneId=e.get("scene")),this.sceneList.some(t=>t.id===this.sceneId)||(this.sceneId=this.sceneList[0].id),this.eventId=e.get("event")??Yp[this.sceneId]??this.eventList[0].id,this.eventList.some(t=>t.id===this.eventId)||(this.eventId=this.eventList[0].id),this.ui.setScenes(this.sceneList,this.sceneId),this.ui.setEvents(this.eventList,this.eventId),await this.load()}async load(e=!0){const t=++this.loadingToken;this.playing=!1,this.ui.setPlaying(!1),this.ui.setLoading(.02,k("loading"));try{const i=Eg(this.eventId);if(e||!this.assets){if([this.assets,this.sceneScenarios]=await Promise.all([Cg(this.sceneId,(a,o)=>this.ui.setLoading(a*.8,`${k("loading")} ${o}`)),Ag(this.sceneId)]),t!==this.loadingToken)return;this.buildSolvers()}if(this.event=await i,t!==this.loadingToken)return;history.replaceState(null,"",`?scene=${this.sceneId}&event=${this.eventId}`),this.params.waveSetup=this.event.kind==="typhoon"?.2:this.event.kind==="fictional"?.3:0;const s=this.event.tide.QUB;let r=0;if(s)for(let a=0;a<s.surge.length;a++){const o=s.surge[a];o!==null&&o>r&&(r=o)}this.params.waveHs=this.event.kind==="typhoon"?+(2*Math.min(1.5,Math.max(.3,r/2.35))).toFixed(2):this.event.kind==="fictional"?3:0,this.ui.setParams(this.params),this.buildForcing(),this.ui.setScene(this.assets.meta),this.ui.setEvent(this.event),this.syncScenarios(),this.applyMeasures(),this.applyParams(),this.restart(),this.refreshCharts(),this.refreshLabels(),this.ui.setLoading(null),this.setPlaying(!0)}catch(i){console.error(i),this.ui.setLoading(1,`加载失败 / load failed: ${i}`)}}buildSolvers(){const e=this.assets,t=e.meta;this.solver?.dispose(),this.baseline?.dispose(),this.baseline=null,this.disposeSnapshots(),this.solver=new qc(this.world.renderer,{W:t.cols,H:t.rows,dx:t.res},e.dem,e.bldh,e.mask,e.expo,e.basin,e.chan,e.ug,e.sgCell&&e.sgFace?{cell:e.sgCell,face:e.sgFace}:null),this.measures=new Sb(t.cols,t.rows,t.res),this.measures.sea=e.mask,this.selectedMeasure=null,this.loadMeasures(),this.applyMeasures(),this.world.loadScene(e,this.solver.terrainTex,this.solver.modTex,this.solver.stateTex,this.solver.auxTex),this.spawnA=new Float32Array(t.cols*t.rows*4),this.spawnB=new Float32Array(t.cols*t.rows*4),this.compare&&this.makeBaseline(),this.syncSplit()}loadMeasures(){const e=this.assets,t=this.measures;t.replaceAll([]);for(const o of e.meta.defences??[])t.add({kind:"wall",pts:[{x:o.x,y:o.y}],cells:o.cells,height:o.height_m,key:o.id,name:o.zh,name_en:o.en,role:"record",built:o.built,in_dtm:o.in_dtm,src:o.src,locked:!0});const i=e.savedMeasures;let s=null;try{const o=localStorage.getItem(this.measuresKey());o&&(s=JSON.parse(o))}catch{s=null}const r=s&&(!i||(s.saved??"")>(i.saved??"")),a=r?s:i;a&&t.loadSaved(a,e.meta.origin),this.ui.setMeasuresDirty(!!r,!1)}measuresKey(){return`hkfl.measures.${this.sceneId}`}ctx(e,t=this.simT/3600,i){const s={eventId:this.eventId,eventStart:this.event?Ki(this.event.window.start).getTime():0,simH:t,whatIf:e};if(i){const r=i.measures;s.whatIf=r==="all",s.bare=r==="none",Array.isArray(r)&&(s.keys=r),i.exclude?.length&&(s.exclude=i.exclude)}return s}sideCtx(e,t){const i=this.activeScenario();return i?this.ctx(!1,t,i[e]):this.ctx(e==="B",t)}activeScenario(){return this.compare?this.scenarioList.find(e=>e.id===this.scenarioId)??null:null}sideModOf(e){const t=this.activeScenario();return t?Rg(t[e]):zr}syncScenarios(){this.scenarioList=Dg(this.sceneScenarios,this.event);const e=this.measures?.measures.some(s=>(s.role??"whatif")==="whatif"&&!s.scenario_only),t=this.scenarioList.find(s=>!s.generic),i=this.scenarioPick[`${this.sceneId}/${this.eventId}`]??(t&&!e?t.id:"measures");this.scenarioId=this.scenarioList.some(s=>s.id===i)?i:"measures",this.ui.setScenarios(this.scenarioList,this.scenarioId)}setScenario(e){if(this.scenarioList.some(t=>t.id===e)){if(this.scenarioId=e,this.scenarioPick[`${this.sceneId}/${this.eventId}`]=e,this.ui.setScenarios(this.scenarioList,e),!this.compare){this.toggleCompare();return}this.applyMeasures(),this.buildForcing(),this.refreshCharts(),this.syncSplit(),this.restart(),this.setPlaying(!0)}}applyMeasures(){const e=this.measures;if(e){if(this.solver){const t=this.sideCtx("B");e.rasterize(this.solver.modData,t),this.solver.updateMod(),this.modSigA=e.signature(t)}if(this.baseline){const t=this.sideCtx("A");e.rasterize(this.baseline.modData,t),this.baseline.updateMod(),this.modSigB=e.signature(t)}this.refreshMeasureViews()}}refreshMeasureViews(){const e=this.measures;if(!e)return;const t=this.sideCtx("B"),i=e.measures.map(s=>({m:s,eff:e.effect(s,t),cost:e.cost(s),exists:e.existsAt(s,t)}));this.world.setMeasures(i.map(s=>({m:s.m,eff:s.eff,selected:s.m.id===this.selectedMeasure}))),this.ui.setMeasures(i,this.selectedMeasure)}tickMeasures(){const e=this.measures;if(!e||!this.solver)return;const t=this.sideCtx("B"),i=e.signature(t);if(i!==this.modSigA&&(e.rasterize(this.solver.modData,t),this.solver.updateMod(),this.modSigA=i,this.refreshMeasureViews()),this.baseline){const s=this.sideCtx("A"),r=e.signature(s);r!==this.modSigB&&(e.rasterize(this.baseline.modData,s),this.baseline.updateMod(),this.modSigB=r)}}makeBaseline(){const e=this.assets,t=e.meta;if(this.baseline?.dispose(),this.baseline=new qc(this.world.renderer,{W:t.cols,H:t.rows,dx:t.res},e.dem,e.bldh,e.mask,e.expo,e.basin,e.chan,e.ug,e.sgCell&&e.sgFace?{cell:e.sgCell,face:e.sgFace}:null),this.measures){const i=this.sideCtx("A");this.measures.rasterize(this.baseline.modData,i),this.baseline.updateMod(),this.modSigB=this.measures.signature(i)}}buildForcing(){const e=this.event,t=this.assets.meta,i=Ki(e.window.start),s=Ki(e.window.end);this.windowSec=(s.getTime()-i.getTime())/1e3;const r=e.tide[t.gauge]??e.tide.QUB,a=[],o=[],l=[],c=[],h=(t.tide_lag_min||0)*60;for(let x=0;x<r.t.length;x++){const M=(Ki(r.t[x]).getTime()-i.getTime())/1e3+h;if(M<-7200||M>this.windowSec+7200)continue;const w=r.astro[x],I=r.surge[x];w!==null&&(a.push(M),l.push(w),c.push(r.obs[x]),o.push(w+(I??0)*t.tide_scale))}const d=[],u=[];for(let x=0;x<e.rain.t.length;x++)d.push((Ki(e.rain.t[x]).getTime()-i.getTime())/1e3),u.push(e.rain.mm[x]);let f=.3;for(let x=0;x<a.length;x++)f=Math.max(f,o[x]-l[x]);this.forcing={tideT:a,tideL:o,astro:l,obs:c,rainT:d,rainMm:u,hours:this.windowSec/3600,start:i,surgePeak:f};const g=t.dem_stats?.zmin??0,_=Math.max(...o)+this.params.waveSetup+this.params.slr+Math.max(this.sideModOf("A").slr,this.sideModOf("B").slr),m=Math.max(2.5,_-g+1),p=.45*t.res/Math.sqrt(9.81*m);this.dtBase=p,this.maxDepthSeen=0,this.solver?.setDt(p),this.baseline?.setDt(p),this.drawTimeline()}drawTimeline(){const e=this.forcing,t=this.event;if(!e||!t||!this.assets)return;const i=[];for(const[a,o,l]of t.signals??[])i.push({h:(Ki(a).getTime()-e.start.getTime())/36e5,zh:o,en:l,kind:"sig",tone:o0(l)});const s=this.assets.meta.rain_mult[this.eventId]??1;let r=-1;for(let a=0;a<e.rainMm.length;a++)(r<0||e.rainMm[a]>e.rainMm[r])&&(r=a);if(r>=0&&e.rainMm[r]*s>=10){const a=(e.rainMm[r]*s).toFixed(0);i.push({h:e.rainT[r]/3600+.5,zh:`雨强峰值 ${a} mm/h`,en:`Rain peak ${a} mm/h`,kind:"peak-rain"})}if(t.kind!=="rainstorm"&&e.tideL.length){let a=0;for(let l=1;l<e.tideL.length;l++)e.tideL[l]>e.tideL[a]&&(a=l);const o=e.tideL[a].toFixed(2);i.push({h:e.tideT[a]/3600,zh:`潮位峰值 ${o} mPD`,en:`Sea-level peak ${o} mPD`,kind:"peak-tide"})}this.ui.setTimeline({hours:e.hours,fmt:a=>this.timeLabel(a*3600),tick:a=>this.tick(a),marks:i,tide:{x:e.tideT.map(a=>a/3600),y:e.tideL},rain:{x:e.rainT.map(a=>a/3600),y:e.rainMm}})}stormParts(e){const t=this.event,i=this.forcing;if(!t||!i)return{sig:null,dist:""};const s=i.start.getTime()+e*1e3;let r=null;for(const[l,c,h]of t.signals??[])Ki(l).getTime()<=s&&(r=[c,h]);let a="";const o=t.track;if(o.length>=2){const l=o.map(c=>Ki(c[0]).getTime());if(s>=l[0]&&s<=l[l.length-1]){let c=0;for(;c<l.length-2&&l[c+1]<s;)c++;const h=(s-l[c])/(l[c+1]-l[c]),d=o[c][1]+(o[c+1][1]-o[c][1])*h,u=o[c][2]+(o[c+1][2]-o[c][2])*h,f=6371,g=(u-22.302)*Math.PI/180,_=(d-114.174)*Math.PI/180,m=Math.sin(g/2)**2+Math.cos(u*Math.PI/180)*Math.cos(22.302*Math.PI/180)*Math.sin(_/2)**2,p=2*f*Math.asin(Math.sqrt(m)),x=(Math.atan2(d-114.174,u-22.302)*180/Math.PI+360)%360,M=se("北,东北,东,东南,南,西南,西,西北","N,NE,E,SE,S,SW,W,NW").split(",");a=`${se("风暴中心","storm centre")} ${p.toFixed(0)} km ${M[Math.round(x/45)%8]}`}}return{sig:r,dist:a}}tick(e){return new Date(this.forcing.start.getTime()+e*36e5).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"Asia/Hong_Kong"})}timeLabel(e){return new Date(this.forcing.start.getTime()+e*1e3).toLocaleString("en-GB",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",timeZone:"Asia/Hong_Kong"})+" HKT"}tideAt(e,t=zr){const i=this.forcing,s=Na(i.tideT,i.tideL,e,i.astro),r=Na(i.tideT,i.astro,e,i.astro),a=s-r;return r+a*this.params.surgeScale*t.tideScale+this.params.waveSetup+this.params.slr+t.slr}rainAt(e,t=zr){const i=this.forcing;let s=0;for(let a=0;a<i.rainT.length;a++)if(e>=i.rainT[a]&&e<i.rainT[a]+3600){s=i.rainMm[a];break}const r=this.assets.meta.rain_mult[this.eventId]??1;return s*r*this.params.rainScale*t.rainScale/36e5}rainMmAt(e){return this.rainAt(e)*36e5}hsAt(e,t=zr){const i=this.forcing,r=(Na(i.tideT,i.tideL,e,i.astro)-Na(i.tideT,i.astro,e,i.astro))*this.params.surgeScale*t.tideScale/i.surgePeak;return r<.2?0:this.params.waveHs*Math.min(1,r)}applyParams(){const e=this.params.drainMmPerHour/36e5;for(const t of[this.solver,this.baseline])t?.setParams({manning:this.params.manning,buildings:this.params.buildingsBlock,drain:e,bldBlock:1,manningBld:.6,hillCap:this.params.hillCapMmPerHour/36e5,recover:this.params.recoverGain,tideLock:this.params.tideLockM,subgrid:this.params.subgrid});this.world.setBuildingsBlock(this.params.buildingsBlock),this.world.setSubgrid(this.params.subgrid&&!!this.solver?.subgridAvailable),this.forcing&&this.buildForcing()}restart(){if(!(!this.solver||!this.forcing)){this.solver.reset(this.tideAt(0,this.sideModOf("B"))),this.baseline?.reset(this.tideAt(0,this.sideModOf("A"))),this.simT=0,this.metrics=null,this.baseMetrics=null,this.lastMetrics=0,this.maxDepthSeen=0,this.solver.setDt(this.dtBase),this.baseline?.setDt(this.dtBase),this.ui.setMetrics(null,null),this.ui.setTime(this.timeLabel(0),0),this.pinT=[];for(const e of this.pins)e.depth=[],e.level=[];this.lastPinSample=-1e9,this.pinsChanged(!1),this.world.resetFlow(),this.clearSnapshots(),this.planSnapshots(),this.takeSnapshot()}}planSnapshots(){const e=this.assets;if(!e){this.snapEvery=0;return}const t=qc.snapshotBytes(e.meta.cols,e.meta.rows)*(this.baseline?2:1),i=Math.max(2,Math.floor(32e7/t));this.snapEvery=Math.max(1800,Math.ceil(this.windowSec/i/Or)*Or),this.nextSnapT=this.snapEvery}checkpoint(){const e=this.solver;this.maxDepthSeen=Math.max(this.maxDepthSeen,e.maxDepth(),this.baseline?this.baseline.maxDepth():0);const t=.45*this.assets.meta.res/Math.sqrt(9.81*Math.max(1,this.maxDepthSeen*1.4+.5));if(t<e.dt&&(e.setDt(t),this.baseline?.setDt(t)),this.snapEvery>0&&this.simT>=this.nextSnapT-1&&this.simT<this.windowSec)for(this.takeSnapshot();this.nextSnapT<=this.simT+1;)this.nextSnapT+=this.snapEvery}clearSnapshots(){for(const e of this.snaps)this.snapPool.push(e.a),e.b&&this.snapPool.push(e.b);this.snaps=[]}disposeSnapshots(){this.clearSnapshots();for(const e of this.snapPool)e.rt.dispose();this.snapPool=[]}takeSnapshot(){const e=this.solver;if(this.snaps.some(s=>Math.abs(s.t-this.simT)<this.snapEvery*.5))return;const t=e.snapshot(this.snapPool.pop()),i=this.baseline?this.baseline.snapshot(this.snapPool.pop()):null;this.snaps.push({t:this.simT,a:t,b:i,maxDepthSeen:this.maxDepthSeen})}keyframeBefore(e){let t=null;for(const i of this.snaps)i.t<=e&&(!this.baseline||i.b)&&(!t||i.t>t.t)&&(t=i);return t}restoreSnapshot(e){this.solver.restore(e.a),this.baseline&&e.b&&this.baseline.restore(e.b),this.simT=e.t,this.metrics=null,this.baseMetrics=null,this.lastMetrics=0,this.maxDepthSeen=e.maxDepthSeen;let t=0;for(;t<this.pinT.length&&this.pinT[t]<=e.t+1;)t++;this.pinT.length=t;for(const i of this.pins)i.depth.length=Math.min(i.depth.length,t),i.level.length=Math.min(i.level.length,t);this.lastPinSample=t?this.pinT[t-1]:-1e9,this.pinsChanged(!1),this.world.resetFlow(),this.nextSnapT=Math.max(this.snapEvery,(Math.floor(e.t/this.snapEvery)+1)*this.snapEvery),this.ui.setTime(this.timeLabel(this.simT),this.simT/this.windowSec)}setPlaying(e){this.playing=e,this.ui.setPlaying(e)}seek(e){if(e=Math.max(0,Math.min(this.windowSec,e)),e<this.simT){const t=this.keyframeBefore(e);t?this.restoreSnapshot(t):this.restart()}else if(!this.pins.length){const t=this.keyframeBefore(e);t&&t.t>this.simT&&this.restoreSnapshot(t)}this.seekTarget=e}setTool(e){this.tool=e,this.draft=[],this.world.setDraft([],"wall"),this.ui.setTool(e),this.ui.setDraftInfo(0,0),document.body.style.cursor=e?"crosshair":"default"}bindPointer(e){let t=null;e.addEventListener("pointerdown",i=>{t={x:i.clientX,y:i.clientY,t:performance.now()},this.follow&&(this.follow=!1,this.ui.setActive("btnFollow",!1))}),e.addEventListener("pointerup",i=>{if(!t)return;const s=Math.hypot(i.clientX-t.x,i.clientY-t.y),r=performance.now()-t.t;if(t=null,s>5||r>600)return;if(this.pinMode){const l=this.world.raycastGround(i.clientX,i.clientY);l&&this.addPin(l.x,l.y);return}if(!this.tool){const l=this.world.pickMeasure(i.clientX,i.clientY);this.selectMeasure(l);return}const a=this.world.raycastGround(i.clientX,i.clientY);if(!a)return;let o={x:a.x,y:a.y};if(this.snapShore&&(this.tool==="wall"||this.tool==="sandbag")&&(o=this.snapToShore(o)),this.tool==="pump"){this.commitMeasure([o]);return}this.draft.push(o),this.world.setDraft(this.draft,this.tool),this.ui.setDraftInfo(this.draft.length,this.draftLength())}),e.addEventListener("dblclick",()=>{this.tool&&this.draft.length&&this.finishDraft()}),e.addEventListener("pointermove",i=>{if(!this.probeOn||i.buttons||!this.solver||!this.assets)return;const s=performance.now();if(s-this.probeT<90)return;this.probeT=s;const r=this.world.labelInset;if(i.clientX<r.l||i.clientX>innerWidth-r.r||i.clientY<r.t||i.clientY>innerHeight-r.b){this.ui.setProbe(null);return}const a=this.world.raycastGround(i.clientX,i.clientY);if(!a){this.ui.setProbe(null);return}const o=this.assets,l=o.meta.res,c=o.meta.cols,h=Math.floor(a.x/l),d=Math.floor(a.y/l);if(h<0||d<0||h>=c||d>=o.meta.rows){this.ui.setProbe(null);return}const u=d*c+h,f=this.solver.readCell(h,d),g=Math.max(0,this.solver.subgridOn?f.aux[3]:f.state[0]);this.ui.setProbe({sx:i.clientX,sy:i.clientY,depth:g,hmax:f.state[3],ground:o.dem[u],sea:!!o.mask[u]})}),e.addEventListener("pointerleave",()=>this.ui.setProbe(null)),window.addEventListener("keydown",i=>{const s=i.target.tagName;if(!(s==="INPUT"||s==="TEXTAREA"||s==="SELECT")){if(i.key==="Escape"&&(this.pinMode?this.setPinMode(!1):this.tool?this.setTool(null):this.selectMeasure(null)),i.key==="Enter"&&this.tool&&this.finishDraft(),i.key==="Backspace"&&this.tool&&(i.preventDefault(),this.undoVertex()),i.key==="Delete"&&this.selectedMeasure!==null&&!this.tool){const r=this.selectedMeasure;this.measures?.remove(r),this.selectedMeasure=null,this.measuresChanged()}i.key===" "&&s!=="BUTTON"&&(i.preventDefault(),this.setPlaying(!this.playing))}})}draftLength(){let e=0;for(let t=1;t<this.draft.length;t++)e+=Math.hypot(this.draft[t].x-this.draft[t-1].x,this.draft[t].y-this.draft[t-1].y);return e}undoVertex(){!this.tool||!this.draft.length||(this.draft.pop(),this.world.setDraft(this.draft,this.tool),this.ui.setDraftInfo(this.draft.length,this.draftLength()))}snapToShore(e){const t=this.assets;if(!t)return e;const i=t.meta.cols,s=t.meta.rows,r=t.meta.res,a=Math.floor(e.x/r),o=Math.floor(e.y/r);let l=e,c=1/0;for(let h=o-3;h<=o+3;h++)for(let d=a-3;d<=a+3;d++){if(d<0||h<0||d>=i||h>=s)continue;const u=h*i+d;if(t.mask[u]||!(d>0&&t.mask[u-1]||d<i-1&&t.mask[u+1]||h>0&&t.mask[u-i]||h<s-1&&t.mask[u+i]))continue;const g=(d+.5)*r,_=(h+.5)*r,m=Math.hypot(g-e.x,_-e.y);m<c&&(c=m,l={x:g,y:_})}return l}finishDraft(){if(this.tool){if(this.draft.length===0){this.setTool(null);return}(this.tool==="wall"||this.tool==="sandbag")&&this.draft.length<2||this.commitMeasure(this.draft)}}commitMeasure(e){if(!this.measures||!this.tool)return;const t=this.ui.getMeasureParams(this.tool),i=this.ui.newRole,s=this.measures.add({kind:this.tool,pts:e,height:t.height,rate:t.rate,capacity:t.capacity,factor:t.factor,radius:t.radius,role:i,key:i==="whatif"?void 0:`${this.tool}_${Date.now().toString(36)}`});this.draft=[],this.world.setDraft([],"wall"),this.tool==="pump"||this.setTool(null),this.selectedMeasure=i==="whatif"&&this.tool==="pump"?null:s.id,this.measuresChanged()}selectMeasure(e){this.selectedMeasure=e,this.refreshMeasureViews()}measuresChanged(){if(!this.measures||!this.solver)return;this.applyMeasures();try{localStorage.setItem(this.measuresKey(),JSON.stringify(this.measures.toSaved(this.sceneId,this.assets.meta.origin)))}catch{}this.ui.setMeasuresDirty(!0,!1);const e=this.playing||this.simT>0;this.restart(),e&&this.setPlaying(!0)}async saveMeasures(){if(!this.measures||!this.assets)return;const e=this.measures.toSaved(this.sceneId,this.assets.meta.origin),t=JSON.stringify(e,null,1);this.download(`${this.sceneId}.measures.json`,t),this.flash(se("已下载 measures.json，放到 web/public/scenes/<场景>/ 即可生效","Downloaded measures.json; put it in web/public/scenes/<scene>/"))}exportMeasures(){!this.measures||!this.assets||this.download(`${this.sceneId}.measures.json`,JSON.stringify(this.measures.toSaved(this.sceneId,this.assets.meta.origin),null,1))}async importMeasures(e){if(!(!this.measures||!this.assets))try{const t=JSON.parse(await e.text());if(!Array.isArray(t.measures))throw new Error("no measures[]");this.measures.loadSaved(t,this.assets.meta.origin),this.measuresChanged(),this.flash(se(`已导入 ${t.measures.length} 项`,`Imported ${t.measures.length} measures`))}catch(t){this.flash(se(`导入失败：${t}`,`Import failed: ${t}`))}}revertMeasures(){try{localStorage.removeItem(this.measuresKey())}catch{}this.selectedMeasure=null,this.loadMeasures(),this.applyMeasures(),this.restart(),this.setPlaying(!0)}download(e,t,i="application/json"){const s=document.createElement("a");s.href=URL.createObjectURL(new Blob([t],{type:i})),s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(s.href),2e3)}flash(e){this.ui.setStatus(e),clearTimeout(this.flashTimer),this.flashTimer=window.setTimeout(()=>this.ui.setStatus(null),3500)}toggleCompare(){this.compare=!this.compare,this.ui.setCompare(this.compare),this.compare?(this.makeBaseline(),this.baseline.setDt(this.solver.dt)):(this.baseline?.dispose(),this.baseline=null,this.showBaseline=!1),this.applyMeasures(),this.applyParams(),this.refreshCharts(),this.syncSplit(),this.bindView(),this.restart(),this.setPlaying(!0)}syncSplit(){const e=document.getElementById("swipe");if(this.compare&&this.baseline&&this.solver){this.world.setBaselineTextures(this.baseline.stateTex,this.baseline.auxTex),this.world.split={frac:this.splitFrac,left:{state:this.baseline.stateTex,aux:this.baseline.auxTex},right:{state:this.solver.stateTex,aux:this.solver.auxTex}},e.style.display="block",e.style.left=`${this.splitFrac*100}%`;const t=this.activeScenario();this.ui.setStatus(t?se(`A/B 分屏：拖动中间的把手，左 A = ${t.A.zh}，右 B = ${t.B.zh}`,`Swipe view: drag the handle; left A = ${t.A.en}, right B = ${t.B.en}`):k("swipeHint")),setTimeout(()=>this.ui.setStatus(null),5e3)}else this.world.setBaselineTextures(null),this.world.split=null,e.style.display="none"}bindSwipe(){const e=document.querySelector("#swipe .handle"),t=document.getElementById("swipe");let i=!1;e.addEventListener("pointerdown",r=>{i=!0,e.setPointerCapture(r.pointerId),r.preventDefault()}),e.addEventListener("pointermove",r=>{i&&(this.splitFrac=Math.min(.95,Math.max(.05,r.clientX/window.innerWidth)),t.style.left=`${this.splitFrac*100}%`,this.world.split&&(this.world.split.frac=this.splitFrac))});const s=()=>{i=!1};e.addEventListener("pointerup",s),e.addEventListener("pointercancel",s)}cycleFlow(){this.flowMode=this.flowMode==="particles"?"arrows":this.flowMode==="arrows"?"none":"particles",this.world.setFlowMode(this.flowMode),this.ui.setFlowMode(this.flowMode)}peakSec(){const e=this.forcing;if(this.event.kind==="rainstorm"){let r=0,a=-1;for(let o=0;o<e.rainT.length;o++)e.rainMm[o]>a&&(a=e.rainMm[o],r=e.rainT[o]);return Math.min(this.windowSec,r+5400)}let i=0,s=-1/0;for(let r=0;r<e.tideT.length;r++)e.tideL[r]>s&&(s=e.tideL[r],i=e.tideT[r]);return Math.min(this.windowSec,i+1200)}jumpToPeak(){this.forcing&&(this.flyAfterSeek=!0,this.seek(this.peakSec()),this.setPlaying(!0))}hotspotLabels(e){const t=this.assets.meta.pois;return e.map(i=>{let s="",r=1/0;for(const a of t){const o=Math.hypot(a.x-i.x,a.y-i.y);o<r&&(r=o,s=a.name)}return{...i,name:s?`${s.split(" ")[0]}${r>250?` ${(r/1e3).toFixed(1)} km`:""}`:""}})}bindView(){const e=this.showBaseline&&this.baseline?this.baseline:this.solver;e&&this.world.setStateTextures(e.stateTex,e.auxTex)}tour(){const e=this.world.director;if(e.touring){e.stopTour();return}const i=this.assets.meta.pois.map(s=>this.world.viewAt(s.x,s.y,650));i.length||i.push(this.world.defaultView()),e.startTour(i),this.ui.setActive("btnTour",!0),this.ui.setStatus(k("tourRunning"))}refreshCharts(){const e=this.forcing,t=this.event;if(!e||!t)return;const i=this.assets.meta,s=i.gauge,r=e.tideT.map(f=>f/3600),a=e.tideT.map(f=>this.tideAt(f)),o=[],l=t.peaks_model[s],c=t.observed_peaks[s];if(c!==void 0&&l){const f=(Ki(l.t).getTime()-e.start.getTime())/36e5+(i.tide_lag_min||0)/60;o.push({x:f,y:c,label:`${k("peakObs")} ${(c+.146).toFixed(2)} mCD`,color:an.peak})}const h={kind:"line",xMin:0,xMax:e.hours,unit:"mPD",yLabel:"mPD",cursor:this.simT/3600,xTick:f=>this.tick(f),markers:o,series:[{name:se(`实测 ${s}`,`Observed ${s}`),color:an.obs,x:r,y:e.obs},{name:se("天文潮","Astronomical"),color:an.astro,x:r,y:e.astro,dashed:!0},{name:se("模型边界","Model boundary"),color:an.model,x:r,y:a}]},d=(i.rain_mult[this.eventId]??1)*this.params.rainScale,u={kind:"bar",xMin:0,xMax:e.hours,unit:"mm/h",yLabel:"mm/h",cursor:this.simT/3600,xTick:f=>this.tick(f),series:[{name:se(`模型雨强（${t.rain.station} ×${d.toFixed(2)}）`,`Model rain (${t.rain.station} ×${d.toFixed(2)})`),color:an.rain,x:e.rainT.map(f=>f/3600+.5),y:e.rainMm.map(f=>f*d)}]};this.ui.setCharts(h,u),this.ui.setValidation(i.validation[this.eventId]??[],this.metrics)}refreshLabels(){this.assets&&this.world.setLabels(this.labelItems(this.metrics))}labelItems(e){const t=this.assets.meta,i=(t.validation[this.eventId]??[]).map(r=>({id:`v_${r.id}`,x:r.x,y:r.y,text:se(r.zh,r.en),cls:`val ${r.cls}`,sub:e?`${se("实际","obs")}${r.lower?"≥":"≈"}${r.cls==="none"?"0":r.depth.toFixed(1)} m / ${se("模拟","sim")} ${(e.valDepths[r.id]??0).toFixed(2)} m`:r.cls==="none"?se("实际无水浸","no flooding"):`${se("实际","obs")}${r.lower?"≥":"≈"}${r.depth.toFixed(1)} m`}));for(const r of t.gauges)i.push({id:`g_${r.code}`,x:r.x,y:r.y,text:r.name,cls:"gauge",sub:e?`${(e.gaugeLevels[r.code]??0).toFixed(2)} mPD`:""});const s=new Set;if(e&&this.showFacilities){const r=(t.facilities??[]).map(a=>({f:a,d:Math.max(e.facDepths?.[a.id]??0,this.baseMetrics?.facDepths?.[a.id]??0)})).filter(a=>a.d>=.3).sort((a,o)=>o.d-a.d).slice(0,10);for(const{f:a,d:o}of r)s.add(a.id),i.push({id:`f_${a.id}`,x:a.x,y:a.y,text:`${Rl[a.type]??""} ${a.name}`,cls:`facility ${o>=.5?"severe":"moderate"}`,sub:`${(e.facDepths?.[a.id]??0).toFixed(2)} m`})}if(this.showLandmarks){for(const[a,o]of t.pois.entries())i.push({id:`p_${a}`,x:o.x,y:o.y,text:o.name,cls:"landmark place"});const r=["mtr","hospital","mall","ferry"];for(const a of t.facilities??[])r.includes(a.type)&&!s.has(a.id)&&i.push({id:`l_${a.id}`,x:a.x,y:a.y,text:`${Rl[a.type]??""} ${a.name}`,cls:"landmark"})}if(this.showMeasureLabels&&this.measures){const r=this.ctx(!0);for(const a of this.measures.measures){const o=a.role??"whatif";if(o==="whatif")continue;let l=0,c=0;if(a.pts.length){for(const f of a.pts)l+=f.x,c+=f.y;l/=a.pts.length,c/=a.pts.length}else if(a.cells?.length){const f=a.cells[Math.floor(a.cells.length/2)],g=t.cols,_=t.res;l=(f%g+.5)*_,c=(Math.floor(f/g)+.5)*_}else continue;const h=this.measures.effect(a,r),d=o==="record"?a.built?a.built>="2026"?`${se("计划","planned")} ${a.built.slice(0,4)}`:a.built:"":a.from_h!==void 0&&a.from_h!==null?`${this.tick(a.from_h)} ${se("起","on")}`:"",u=a.info?se("仅标注","noted"):h>0?se("生效","active"):h<0?se("当时未建","not yet built"):o==="temporary"?se("未启用","inactive"):se("未建","not built");i.push({id:`m_${a.id}`,x:l,y:c,text:se(a.name??a.key??"",a.name_en??a.name??a.key??""),cls:`measure ${o} ${a.info?"info":h===0?"off":h<0?"removed":"on"}`,sub:`${o==="record"?se("记录","record"):se("临时","temporary")}${d?" · "+d:""} · ${u}`})}}for(const r of this.pins){const a=r.depth.length?r.depth[r.depth.length-1]:null;i.push({id:`u_${r.id}`,x:r.x,y:r.y,text:r.name,cls:"upin",color:r.color,sub:a===null?"":`${a.toFixed(2)} m`})}return i}setPinMode(e){this.pinMode=e,e&&this.tool&&this.setTool(null),this.ui.setActive("btnPin",e),document.body.style.cursor=e?"crosshair":"default",this.ui.setStatus(e?k("pinHint"):null)}addPin(e,t){const i=this.pinSeq++;this.pins.push({id:i,name:`${se("钉点","Pin")} ${i}`,x:e,y:t,color:jp[(i-1)%jp.length],depth:[],level:[]}),this.selPin=i,this.setPinMode(!1);const s=this.simT,r=this.playing||s>0;this.restart(),s>0&&this.seek(s),r&&this.setPlaying(!0),this.refreshLabels()}samplePins(e){const t=this.assets,i=t.meta.res,s=t.meta.cols;this.pinT.push(this.simT);for(const r of this.pins){const a=Math.floor(r.x/i),o=Math.floor(r.y/i),l=e.readCell(a,o),c=Math.max(0,e.subgridOn?l.aux[3]:l.state[0]);r.depth.push(c),r.level.push((t.dem[o*s+a]??0)+c)}this.lastPinSample=this.simT}pinsChanged(e=!0){const t=this.forcing;this.ui.setPins(this.pins,this.pinT.map(i=>i/3600),this.selPin,t?{hours:t.hours,tide:{x:t.tideT.map(i=>i/3600),y:t.tideT.map(i=>this.tideAt(i))},rain:{x:t.rainT.map(i=>i/3600),y:t.rainT.map(i=>this.rainMmAt(i))},cursor:this.simT/3600,xTick:i=>this.tick(i)}:null),e&&this.assets&&this.refreshLabels()}exportPins(){if(!this.pins.length||!this.forcing)return;const e=["time_hkt","hours","boundary_sea_level_mPD","rain_mm_per_h",...this.pins.flatMap(r=>[`${r.name} depth_m`,`${r.name} water_level_mPD`])],t=this.pinT.map((r,a)=>[this.timeLabel(r).replace(" HKT",""),(r/3600).toFixed(3),this.tideAt(r).toFixed(3),this.rainMmAt(r).toFixed(1),...this.pins.flatMap(o=>[o.depth[a]?.toFixed(3)??"",o.level[a]?.toFixed(3)??""])]),s=[`# HK Flood Lab pins · scene ${this.sceneId} · event ${this.eventId} · ${this.pins.map(r=>`${r.name} (x ${r.x.toFixed(0)} m, y ${r.y.toFixed(0)} m)`).join("; ")}`,e.map(r=>`"${r.replace(/"/g,'""')}"`).join(","),...t.map(r=>r.join(","))].join(`
`);this.download(`${this.sceneId}_${this.eventId}_pins.csv`,"\uFEFF"+s,"text/csv")}syncLabelInset(){const e=r=>{const a=document.getElementById(r);return a.offsetParent&&getComputedStyle(a).display!=="none"?a.getBoundingClientRect():null},t=e("left"),i=e("right"),s=e("bottom");this.world.labelInset={l:t?t.right:0,r:i?window.innerWidth-i.left:0,t:document.querySelector(".topbar")?.getBoundingClientRect().bottom??60,b:s?window.innerHeight-s.top:0}}cameraPreset(e){if(e==="follow"){this.follow=!this.follow,this.ui.setActive("btnFollow",this.follow),this.followAt=null,this.follow&&this.followHotspot();return}this.follow&&(this.follow=!1,this.ui.setActive("btnFollow",!1));const t=this.metrics?.hotspots?.[0];this.world.cameraPreset(e,e==="street"&&t?{x:t.x,y:t.y}:void 0)}followHotspot(){const e=this.metrics?.hotspots?.[0];e&&(this.followAt&&Math.hypot(this.followAt.x-e.x,this.followAt.y-e.y)<150||(this.followAt={x:e.x,y:e.y},this.world.director.flyTo(this.world.viewAt(e.x,e.y,520),2.2)))}computeMetrics(e,t="A"){const i=this.assets,s=i.meta,r=s.cols,a=s.rows,o=s.res,l=e.readState(),c=e.readAux(),h=e.subgridOn,d=i.mask,u=i.bldh;let f=0,g=0,_=0,m=0,p=0;const x=t==="A"?this.spawnA:this.spawnB;let M=0;const w=Math.max(1,Math.round(150/o)),I=Math.ceil(r/w),C=new Float32Array(I*Math.ceil(a/w)),P=new Int32Array(C.length).fill(-1),U=new Float32Array(C.length),ie=new Int32Array(C.length),S=Math.ceil(300/o);for(let F=0;F<r*a;F++){if(d[F])continue;const te=h?c[F*4+3]:l[F*4];te>p&&(p=te);const pe=F%r,le=F/r|0;if(pe<S||le<S||pe>=r-S||le>=a-S)continue;const oe=c[F*4+1];if(te>.06&&oe>.12&&u[F]===0&&M*2+3<x.length&&(x[M*2]=(pe+.5)*o,x[M*2+1]=(le+.5)*o,M++,oe>.6&&(x[M*2]=(pe+.5)*o,x[M*2+1]=(le+.5)*o,M++)),u[F]>0||i.dem[F]<2||i.basin[F]||i.rim[F]||i.steep[F])continue;const me=te;me>f&&(f=me),me>.15&&g++,me>.5&&_++,m+=me;const he=l[F*4+3],ne=(le/w|0)*I+(pe/w|0);he>C[ne]&&(C[ne]=he,P[ne]=F),he>=.3&&(U[ne]+=Math.min(he,1.5),ie[ne]++)}this.world.setFlowSpawn(t,x,M);const b=[];for(let F=0;F<C.length;F++)ie[F]>=3&&b.push(F);b.sort((F,te)=>U[te]-U[F]);const H=[];for(const F of b){const te=P[F],pe=(te%r+.5)*o,le=((te/r|0)+.5)*o;if(H.every(oe=>Math.hypot(oe.x-pe,oe.y-le)>=350)&&H.push({x:pe,y:le,depth:C[F],area:ie[F]*o*o}),H.length>=6)break}let z=0;for(const F of i.buildings){const te=Math.min(r-1,Math.max(0,Math.floor(F.c[0]/o))),pe=Math.min(a-1,Math.max(0,Math.floor(F.c[1]/o)));let le=0;for(let oe=-1;oe<=1;oe++)for(let me=-1;me<=1;me++){const he=te+me,ne=pe+oe;if(he<0||ne<0||he>=r||ne>=a)continue;const fe=ne*r+he;d[fe]||i.steep[fe]||(le=Math.max(le,l[fe*4+3]))}le>.15&&z++}const Y={};for(const F of s.facilities??[])if(F.ug){let te=0;for(const pe of F.ug.cells)te+=c[pe*4];Y[F.id]=te*o*o/F.ug.area}else Y[F.id]=this.maxDepthNear(l,F.x,F.y,60);const Z={};for(const F of s.validation[this.eventId]??[])Z[F.id]=F.ug?Y[F.ug]??0:F.berm!==void 0?Math.max(0,this.peakTideSoFar(e.time,this.sideModOf(e===this.baseline?"A":"B"))-F.berm):this.maxDepthNear(l,F.x,F.y,60);const j={};for(const F of s.gauges){const te=Math.floor(F.x/o),pe=Math.floor(F.y/o);let le=-1,oe=1e9;for(let me=-3;me<=3;me++)for(let he=-3;he<=3;he++){const ne=te+he,fe=pe+me;if(ne<0||fe<0||ne>=r||fe>=a)continue;const xe=fe*r+ne;if(!d[xe])continue;const ge=he*he+me*me;ge<oe&&(oe=ge,le=xe)}le>=0&&(j[F.code]=l[le*4]-6)}return{t:e.time,maxDepth:f,maxDepthAll:p,floodedAreaKm2:g*o*o/1e6,floodedAreaSevereKm2:_*o*o/1e6,buildingsAffected:z,volumeMm3:m*o*o/1e6,valDepths:Z,gaugeLevels:j,hotspots:H,facDepths:Y}}peakTideSoFar(e,t=zr){const i=this.forcing;let s=-99;for(let r=0;r<i.tideT.length;r++){const a=i.tideT[r];a<0||a>e||(s=Math.max(s,this.tideAt(a,t)))}return Math.max(s,this.tideAt(Math.max(0,e),t))}maxDepthNear(e,t,i,s){const r=this.assets,a=r.meta.cols,o=r.meta.rows,l=r.meta.res,c=Math.floor(t/l),h=Math.floor(i/l),d=Math.ceil(s/l);let u=0;for(let f=h-d;f<=h+d;f++)for(let g=c-d;g<=c+d;g++){if(g<0||f<0||g>=a||f>=o)continue;const _=f*a+g;r.mask[_]||r.bldh[_]>0||r.dem[_]<2.4||r.basin[_]||r.rim[_]||r.steep[_]||Math.hypot((g+.5)*l-t,(f+.5)*l-i)>s||e[_*4+3]>u&&(u=e[_*4+3])}return u}frame(){requestAnimationFrame(()=>this.frame());const e=performance.now(),t=Math.min(.1,(e-this.lastFrame)/1e3);this.lastFrame=e;const i=this.solver;if(i&&this.forcing){let s=0,r=260;if(this.seekTarget!==null)if(s=Math.min(this.seekTarget-this.simT,r*i.dt*2),r=520,s<=0){if(this.seekTarget=null,this.ui.setStatus(null),this.flyAfterSeek){this.flyAfterSeek=!1,this.metrics=this.computeMetrics(i,"A");const d=this.metrics.hotspots??[];d.length&&this.world.director.flyTo(this.world.viewAt(d[0].x,d[0].y,520),2.5)}}else this.ui.setStatus(`${k("ffwd")} ${this.timeLabel(this.simT)}`);else this.playing&&(s=this.speed*t);if(this.tickMeasures(),s>0&&this.simT<this.windowSec){let d=Math.min(r,Math.max(1,Math.round(s/i.dt)));const u=(Math.floor(this.simT/Or+1e-6)+1)*Or;d=Math.max(1,Math.min(d,Math.ceil((u-this.simT)/i.dt-1e-6)));const f=this.simT+d*i.dt/2,g=this.sideModOf("B"),_=this.tideAt(f,g),m=this.rainAt(f,g),p=this.hsAt(f,g);if(i.step(d,_,m,p),this.baseline){const w=this.sideModOf("A");this.baseline.step(d,this.tideAt(f,w),this.rainAt(f,w),this.hsAt(f,w))}const x=this.simT;this.simT+=d*i.dt,this.world.advanceSim(d*i.dt),Math.floor(this.simT/Or+1e-6)>Math.floor(x/Or+1e-6)&&this.simT<this.windowSec&&this.checkpoint(),this.simT>=this.windowSec&&(this.simT=this.windowSec,this.setPlaying(!1),this.seekTarget=null,this.ui.setStatus(null)),this.ui.setTime(this.timeLabel(this.simT),this.simT/this.windowSec);const M=this.stormParts(this.simT);this.ui.setConditions({signal:M.sig,storm:M.dist,tide:_,rain:m*36e5,hs:p,dt:i.dt,n:d}),this.pins.length&&this.simT-this.lastPinSample>=300&&this.samplePins(i)}e-this.lastMetrics>700&&this.simT>0&&(this.lastMetrics=e,this.metrics=this.computeMetrics(i,"A"),this.baseline&&(this.baseMetrics=this.computeMetrics(this.baseline,"B")),this.ui.setMetrics(this.metrics,this.compare?this.baseMetrics:null),this.ui.setHotspots(this.hotspotLabels(this.metrics.hotspots??[])),this.ui.setValidation(this.assets.meta.validation[this.eventId]??[],this.metrics),this.ui.setChartCursor(this.simT/3600),this.syncLabelInset(),this.world.setLabels(this.labelItems(this.metrics)),this.ui.setFacilities(this.metrics,this.compare?this.baseMetrics:null),this.pins.length&&this.pinsChanged(!1),this.follow&&this.followHotspot());const a=this.rainMmAt(this.simT),o=this.forcing,l=this.tideAt(this.simT)-Na(o.tideT,o.astro,this.simT,o.astro),c=Math.min(1,Math.max(l/2.2,a/70,.1)),h=(o.start.getTime()/36e5+8+this.simT/3600)%24;this.world.setWeather(a,c,h),a>35&&e-this.lastLightning>2500&&Math.random()<.02&&(this.world.lightning(),this.lastLightning=e)}this.world.render(t)}}function Na(n,e,t,i){if(!n.length)return 0;if(t<=n[0])return e[0];if(t>=n[n.length-1])return e[e.length-1];let s=0,r=n.length-1;for(;r-s>1;){const o=s+r>>1;n[o]<=t?s=o:r=o}const a=(t-n[s])/(n[r]-n[s]);return e[s]+(e[r]-e[s])*a}window.addEventListener("DOMContentLoaded",()=>{window.app=new CE});
