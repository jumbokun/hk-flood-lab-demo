var Ig=Object.defineProperty;var Ug=(i,e,t)=>e in i?Ig(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var I=(i,e,t)=>Ug(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Ng(i,e,t,n,s=1){const r=t*n,a=new Float32Array(r),o=new Uint8Array(r),l=[],c=[],u=(f,g)=>{l.push(f),c.push(g);let _=l.length-1;for(;_>0;){const m=_-1>>1;if(l[m]<=l[_])break;[l[m],l[_]]=[l[_],l[m]],[c[m],c[_]]=[c[_],c[m]],_=m}},d=()=>{const f=l[0],g=c[0],_=l.pop(),m=c.pop();if(l.length){l[0]=_,c[0]=m;let p=0;for(;;){const x=2*p+1,y=x+1;let w=p;if(x<l.length&&l[x]<l[w]&&(w=x),y<l.length&&l[y]<l[w]&&(w=y),w===p)break;[l[w],l[p]]=[l[p],l[w]],[c[w],c[p]]=[c[p],c[w]],p=w}}return[f,g]};for(let f=0;f<r;f++){const g=f%t,_=f/t|0;(e[f]||g===0||_===0||g===t-1||_===n-1)&&(o[f]=1,a[f]=e[f]?-1e9:i[f],u(a[f],f))}for(;l.length;){const[f,g]=d(),_=g%t,m=g/t|0,p=[g-1,g+1,g-t,g+t];for(let x=0;x<4;x++){if(x===0&&_===0||x===1&&_===t-1||x===2&&m===0||x===3&&m===n-1)continue;const y=p[x];o[y]||(o[y]=1,a[y]=Math.max(f,i[y]),u(a[y],y))}}const h=new Uint8Array(r);for(let f=0;f<r;f++)!e[f]&&a[f]-i[f]>s&&(h[f]=1);return h}function kg(i,e,t,n,s){const r=n*s,a=new Uint8Array(r).fill(99);for(let l=0;l<s;l++)for(let c=0;c<n;c++){const u=l*n+c;if(e[u]){a[u]=0;continue}let d=99;for(let h=-3;h<=3;h++)for(let f=-3;f<=3;f++){const g=c+f,_=l+h;if(!(g<0||_<0||g>=n||_>=s)&&e[_*n+g]===1){const m=Math.max(Math.abs(f),Math.abs(h));m<d&&(d=m)}}a[u]=d}const o=new Uint8Array(r);for(let l=0;l<s;l++)for(let c=0;c<n;c++){const u=l*n+c;if(e[u]||a[u]>2)continue;let d=!1;for(let h=-3;h<=3&&!d;h++)for(let f=-3;f<=3;f++){const g=c+f,_=l+h;if(g<0||_<0||g>=n||_>=s)continue;const m=_*n+g;if(!e[m]&&t[m]>0&&a[m]>a[u]&&i[m]>i[u]+.3){d=!0;break}}d&&(o[u]=1)}return o}function Og(i,e,t,n,s,r=3,a=.5){const o=new Float32Array(n*s);for(let l=0;l<s;l++)for(let c=0;c<n;c++){const u=l*n+c,d=t[u];if(d<=0||e[u])continue;let h=u,f=i[u];for(let g=-r;g<=r;g++)for(let _=-r;_<=r;_++){const m=c+_,p=l+g;if(m<0||p<0||m>=n||p>=s)continue;const x=p*n+m;if(e[x])continue;const y=i[x];y>f&&y<=i[u]+8&&(f=y,h=x)}f-i[u]>=a?o[h]=Math.max(o[h],d):o[u]=Math.max(o[u],d)}return o}const mo="./".replace(/\/$/,"");async function As(i){const e=await fetch(i,{cache:"no-cache"});if(!e.ok)throw new Error(`${i}: ${e.status}`);return e.json()}async function ms(i,e){const t=await fetch(i);if(!t.ok)throw new Error(`${i}: ${t.status}`);const n=await t.arrayBuffer();if(n.byteLength!==e*4)throw new Error(`${i}: unexpected size ${n.byteLength}`);return new Float32Array(n)}async function zg(i,e){const t=await fetch(i);if(!t.ok)throw new Error(`${i}: ${t.status}`);const n=await t.arrayBuffer();if(n.byteLength!==e)throw new Error(`${i}: unexpected size ${n.byteLength}`);return new Uint8Array(n)}function Ud(i){return new Promise(e=>{const t=new Image;t.crossOrigin="anonymous",t.onload=()=>e(t),t.onerror=()=>e(null),t.src=i})}function gs(i,e,t){const n=new i.constructor(i.length);for(let s=0;s<t;s++)n.set(i.subarray(s*e,(s+1)*e),(t-1-s)*e);return n}async function Bg(){return As(`${mo}/scenes/index.json`)}async function Hg(){return As(`${mo}/events/index.json`)}async function Vg(i){return As(`${mo}/events/${i}.json`)}async function Gg(i){try{const e=await As(`${mo}/scenes/${i}/scenarios.json`);return Array.isArray(e.scenarios)?e.scenarios:[]}catch{return[]}}async function Wg(i,e){const t=`${mo}/scenes/${i}`;e?.(.05,"meta");const n=await As(`${t}/meta.json`),s=n.cols,r=n.rows;e?.(.15,"dem");const[a,o,l,c,u,d,h,f,g]=await Promise.all([ms(`${t}/dem.bin`,s*r),zg(`${t}/mask.bin`,s*r),ms(`${t}/bldh.bin`,s*r).catch(()=>new Float32Array(s*r)),ms(`${t}/expo.bin`,s*r).catch(()=>new Float32Array(s*r)),As(`${t}/buildings.json`).catch(()=>({buildings:[]})),ms(`${t}/chan.bin`,s*r*3).catch(()=>ms(`${t}/chan.bin`,s*r).then(b=>{const W=new Float32Array(s*r*3);for(let B=0;B<s*r;B++)W[B*3]=b[B],W[B*3+2]=.05;return W})).catch(()=>new Float32Array(s*r*3)),ms(`${t}/ug.bin`,s*r).catch(()=>new Float32Array(s*r)),ms(`${t}/sg_cell.bin`,s*r*8).catch(()=>null),ms(`${t}/sg_face.bin`,s*r*8).catch(()=>null)]),_=await As(`${t}/measures.json`).catch(()=>null),m=await As(`${t}/fine.json`).catch(()=>null);e?.(.55,"textures");const[p,x]=await Promise.all([Ud(`${t}/imagery.jpg`),Ud(`${t}/basemap.jpg`)]);e?.(.95,"done");const y=gs(a,s,r),w=gs(o,s,r),F=Ng(y,w,s,r,2),C=gs(l,s,r),R=Og(y,w,gs(c,s,r),s,r),U=kg(y,w,R,s,r),ne=f?gs(f,s*8,r):null,S=new Uint8Array(s*r);if(ne)for(let b=0;b<s*r;b++)ne[b*8+7]-ne[b*8]>3&&(S[b]=1);return{meta:n,dem:y,mask:w,bldh:C,expo:R,basin:F,rim:U,chan:gs(d,s*3,r),ug:gs(h,s,r),sgCell:ne,sgFace:g?gs(g,s*8,r):null,steep:S,buildings:u.buildings,imagery:p,basemap:x,savedMeasures:_,fine:m,dir:t}}const $r={slr:0,rainScale:1,tideScale:1},$g=i=>i?{slr:i.slr??0,rainScale:i.rain_scale??1,tideScale:i.tide_scale??1}:$r,Nd={zh:"现状",en:"Today",measures:"records"},Xg=[{id:"measures",generic:!0,zh:"无措施 vs 含措施",en:"No measures vs with measures",desc_zh:"左侧只有实际工程和有记录的临时措施；右侧再加上你在「措施」里画的情景措施。",desc_en:"Left: built records and documented temporary measures only; right: plus the what-if measures you drew under Measures.",A:{zh:"无措施",en:"No measures",measures:"records"},B:{zh:"含措施",en:"With measures",measures:"all"}},{id:"slr-0.5",generic:!0,kinds:["typhoon","fictional"],zh:"现状 vs 海平面上升 +0.5 m",en:"Today vs sea-level rise +0.5 m",desc_zh:"情景假设，不是预报：边界潮位整体加 0.5 m。天文台（IPCC AR6）鲗鱼涌预估，SSP2-4.5 下相对 1995–2014 年：2050 年 +0.20 m（0.13–0.28），2060 年 +0.26 m（0.17–0.37）；+0.5 m 是本世纪后期的量级，或高排放情景下更早出现。",desc_en:"A what-if, not a forecast: +0.5 m on the boundary level. HKO (IPCC AR6) for Quarry Bay, SSP2-4.5, relative to 1995–2014: +0.20 m by 2050 (0.13–0.28), +0.26 m by 2060 (0.17–0.37); +0.5 m is a late-century magnitude, or earlier under high emissions.",A:Nd,B:{zh:"海平面 +0.5 m",en:"Sea level +0.5 m",measures:"records",slr:.5}},{id:"rain-1.2",generic:!0,kinds:["rainstorm"],zh:"现状 vs 雨强 ×1.2",en:"Today vs rainfall ×1.2",desc_zh:"情景假设，不是预报：逐时雨强 ×1.2。按 Clausius–Clapeyron 关系，极端小时雨强每升温 1 °C 约增 7%，升温 3 °C 约 +20%。",desc_en:"A what-if, not a forecast: hourly rain ×1.2. Clausius–Clapeyron scaling gives about +7 % per °C for extreme hourly rain, so +3 °C ≈ +20 %.",A:Nd,B:{zh:"雨强 ×1.2",en:"Rain ×1.2",measures:"records",rain_scale:1.2}}];function qg(i,e){const t=(i??[]).filter(s=>!s.events?.length||s.events.includes(e.id)).map(s=>({...s,generic:!1})),n=Xg.filter(s=>!s.kinds||s.kinds.includes(e.kind));return[...t,...n]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Au="169",Di={ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jg=0,kd=1,Yg=2,dm=1,Kg=2,is=3,Fs=0,qn=1,ai=2,Ds=0,er=1,_h=2,Od=3,zd=4,Zg=5,Ks=100,Jg=101,Qg=102,ev=103,tv=104,nv=200,iv=201,sv=202,rv=203,xh=204,yh=205,av=206,ov=207,lv=208,cv=209,hv=210,uv=211,dv=212,fv=213,pv=214,Mh=0,Sh=1,wh=2,ra=3,bh=4,Th=5,Eh=6,Ah=7,fm=0,mv=1,gv=2,Ls=0,vv=1,_v=2,xv=3,yv=4,Mv=5,Sv=6,wv=7,pm=300,aa=301,oa=302,Ch=303,Rh=304,Xl=306,Ph=1e3,$n=1001,Dh=1002,ht=1003,bv=1004,Ao=1005,_i=1006,Ec=1007,Rs=1008,Fi=1009,mm=1010,gm=1011,ao=1012,Cu=1013,rr=1014,nn=1015,go=1016,Ru=1017,Pu=1018,la=1020,vm=35902,_m=1021,xm=1022,$t=1023,ym=1024,Mm=1025,Qr=1026,ca=1027,Du=1028,Lu=1029,Sm=1030,Fu=1031,Iu=1033,pl=33776,ml=33777,gl=33778,vl=33779,Lh=35840,Fh=35841,Ih=35842,Uh=35843,Nh=36196,kh=37492,Oh=37496,zh=37808,Bh=37809,Hh=37810,Vh=37811,Gh=37812,Wh=37813,$h=37814,Xh=37815,qh=37816,jh=37817,Yh=37818,Kh=37819,Zh=37820,Jh=37821,_l=36492,Qh=36494,eu=36495,wm=36283,tu=36284,nu=36285,iu=36286,Tv=3200,Ev=3201,Av=0,Cv=1,Es="",mi="srgb",Us="srgb-linear",Uu="display-p3",ql="display-p3-linear",Tl="linear",Vt="srgb",El="rec709",Al="p3",Ar=7680,Bd=519,Rv=512,Pv=513,Dv=514,bm=515,Lv=516,Fv=517,Iv=518,Uv=519,Hd=35044,Wn="300 es",ss=2e3,Cl=2001;class ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vd=1234567;const ea=Math.PI/180,oo=180/Math.PI;function dr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function wn(i,e,t){return Math.max(e,Math.min(t,i))}function Nu(i,e){return(i%e+e)%e}function Nv(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function kv(i,e,t){return i!==e?(t-i)/(e-i):0}function qa(i,e,t){return(1-t)*i+t*e}function Ov(i,e,t,n){return qa(i,e,1-Math.exp(-t*n))}function zv(i,e=1){return e-Math.abs(Nu(i,e*2)-e)}function Bv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Hv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Vv(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Gv(i,e){return i+Math.random()*(e-i)}function Wv(i){return i*(.5-Math.random())}function $v(i){i!==void 0&&(Vd=i);let e=Vd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xv(i){return i*ea}function qv(i){return i*oo}function jv(i){return(i&i-1)===0&&i!==0}function Yv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zv(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Jt={DEG2RAD:ea,RAD2DEG:oo,generateUUID:dr,clamp:wn,euclideanModulo:Nu,mapLinear:Nv,inverseLerp:kv,lerp:qa,damp:Ov,pingpong:zv,smoothstep:Bv,smootherstep:Hv,randInt:Vv,randFloat:Gv,randFloatSpread:Wv,seededRandom:$v,degToRad:Xv,radToDeg:qv,isPowerOfTwo:jv,ceilPowerOfTwo:Yv,floorPowerOfTwo:Kv,setQuaternionFromProperEuler:Zv,normalize:Vn,denormalize:Xr};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,n,s,r,a,o,l,c){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],x=s[1],y=s[4],w=s[7],F=s[2],C=s[5],R=s[8];return r[0]=a*_+o*x+l*F,r[3]=a*m+o*y+l*C,r[6]=a*p+o*w+l*R,r[1]=c*_+u*x+d*F,r[4]=c*m+u*y+d*C,r[7]=c*p+u*w+d*R,r[2]=h*_+f*x+g*F,r[5]=h*m+f*y+g*C,r[8]=h*p+f*w+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=t*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ac.makeScale(e,t)),this}rotate(e){return this.premultiply(Ac.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ac.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ac=new ut;function Tm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Rl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jv(){const i=Rl("canvas");return i.style.display="block",i}const Gd={};function xl(i){i in Gd||(Gd[i]=!0,console.warn(i))}function Qv(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function e_(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function t_(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wd=new ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$d=new ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pa={[Us]:{transfer:Tl,primaries:El,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[mi]:{transfer:Vt,primaries:El,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ql]:{transfer:Tl,primaries:Al,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3($d),fromReference:i=>i.applyMatrix3(Wd)},[Uu]:{transfer:Vt,primaries:Al,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3($d),fromReference:i=>i.applyMatrix3(Wd).convertLinearToSRGB()}},n_=new Set([Us,ql]),Ct={enabled:!0,_workingColorSpace:Us,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!n_.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Pa[e].toReference,s=Pa[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Pa[i].primaries},getTransfer:function(i){return i===Es?Tl:Pa[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Pa[e].luminanceCoefficients)}};function ta(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Cr;class i_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cr===void 0&&(Cr=Rl("canvas")),Cr.width=e.width,Cr.height=e.height;const n=Cr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ta(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ta(t[n]/255)*255):t[n]=ta(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let s_=0;class Em{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=dr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Rc(s[a].image)):r.push(Rc(s[a]))}else r=Rc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Rc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?i_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let r_=0;class Nn extends ur{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,n=$n,s=$n,r=_i,a=Rs,o=$t,l=Fi,c=Nn.DEFAULT_ANISOTROPY,u=Es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=dr(),this.name="",this.source=new Em(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ph:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case Dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ph:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case Dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=pm;Nn.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,t=0,n=0,s=1){Qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,w=(f+1)/2,F=(p+1)/2,C=(u+h)/4,R=(d+_)/4,U=(g+m)/4;return y>w&&y>F?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=C/n,r=R/n):w>F?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=C/s,r=U/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=R/r,s=U/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class a_ extends ur{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Em(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends a_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Am extends Nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ht,this.minFilter=ht,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class o_ extends Nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ht,this.minFilter=ht,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ar{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const h=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==f||u!==g){let m=1-o;const p=l*h+c*f+u*g+d*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const F=Math.sqrt(y),C=Math.atan2(F,p*x);m=Math.sin(m*C)/F,o=Math.sin(o*C)/F}const w=o*x;if(l=l*m+h*w,c=c*m+f*w,u=u*m+g*w,d=d*m+_*w,m===1-o){const F=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=F,c*=F,u*=F,d*=F}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pc.copy(this).projectOnVector(e),this.sub(Pc)}reflect(e){return this.sub(Pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pc=new z,Xd=new ar;class Wi{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wi):wi.fromBufferAttribute(r,a),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),Ro.subVectors(this.max,Da),Rr.subVectors(e.a,Da),Pr.subVectors(e.b,Da),Dr.subVectors(e.c,Da),vs.subVectors(Pr,Rr),_s.subVectors(Dr,Pr),Hs.subVectors(Rr,Dr);let t=[0,-vs.z,vs.y,0,-_s.z,_s.y,0,-Hs.z,Hs.y,vs.z,0,-vs.x,_s.z,0,-_s.x,Hs.z,0,-Hs.x,-vs.y,vs.x,0,-_s.y,_s.x,0,-Hs.y,Hs.x,0];return!Dc(t,Rr,Pr,Dr,Ro)||(t=[1,0,0,0,1,0,0,0,1],!Dc(t,Rr,Pr,Dr,Ro))?!1:(Po.crossVectors(vs,_s),t=[Po.x,Po.y,Po.z],Dc(t,Rr,Pr,Dr,Ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zi=[new z,new z,new z,new z,new z,new z,new z,new z],wi=new z,Co=new Wi,Rr=new z,Pr=new z,Dr=new z,vs=new z,_s=new z,Hs=new z,Da=new z,Ro=new z,Po=new z,Vs=new z;function Dc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vs.fromArray(i,r);const o=s.x*Math.abs(Vs.x)+s.y*Math.abs(Vs.y)+s.z*Math.abs(Vs.z),l=e.dot(Vs),c=t.dot(Vs),u=n.dot(Vs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const l_=new Wi,La=new z,Lc=new z;class $i{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):l_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;La.subVectors(e,this.center);const t=La.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(La,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(La.copy(e.center).add(Lc)),this.expandByPoint(La.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new z,Fc=new z,Do=new z,xs=new z,Ic=new z,Lo=new z,Uc=new z;class vo{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fc.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),xs.copy(this.origin).sub(Fc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Do),o=xs.dot(this.direction),l=-xs.dot(Do),c=xs.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fc).addScaledVector(Do,h),f}intersectSphere(e,t){Ji.subVectors(e.center,this.origin);const n=Ji.dot(this.direction),s=Ji.dot(Ji)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,n,s,r){Ic.subVectors(t,e),Lo.subVectors(n,e),Uc.crossVectors(Ic,Lo);let a=this.direction.dot(Uc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xs.subVectors(this.origin,e);const l=o*this.direction.dot(Lo.crossVectors(xs,Lo));if(l<0)return null;const c=o*this.direction.dot(Ic.cross(xs));if(c<0||l+c>a)return null;const u=-o*xs.dot(Uc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,n,s,r,a,o,l,c,u,d,h,f,g,_,m){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,h,f,g,_,m)}set(e,t,n,s,r,a,o,l,c,u,d,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Lr.setFromMatrixColumn(e,0).length(),r=1/Lr.setFromMatrixColumn(e,1).length(),a=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c_,e,h_)}lookAt(e,t,n){const s=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),ys.crossVectors(n,ii),ys.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),ys.crossVectors(n,ii)),ys.normalize(),Fo.crossVectors(ii,ys),s[0]=ys.x,s[4]=Fo.x,s[8]=ii.x,s[1]=ys.y,s[5]=Fo.y,s[9]=ii.y,s[2]=ys.z,s[6]=Fo.z,s[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],y=n[7],w=n[11],F=n[15],C=s[0],R=s[4],U=s[8],ne=s[12],S=s[1],b=s[5],W=s[9],B=s[13],Y=s[2],J=s[6],K=s[10],k=s[14],ie=s[3],pe=s[7],le=s[11],oe=s[15];return r[0]=a*C+o*S+l*Y+c*ie,r[4]=a*R+o*b+l*J+c*pe,r[8]=a*U+o*W+l*K+c*le,r[12]=a*ne+o*B+l*k+c*oe,r[1]=u*C+d*S+h*Y+f*ie,r[5]=u*R+d*b+h*J+f*pe,r[9]=u*U+d*W+h*K+f*le,r[13]=u*ne+d*B+h*k+f*oe,r[2]=g*C+_*S+m*Y+p*ie,r[6]=g*R+_*b+m*J+p*pe,r[10]=g*U+_*W+m*K+p*le,r[14]=g*ne+_*B+m*k+p*oe,r[3]=x*C+y*S+w*Y+F*ie,r[7]=x*R+y*b+w*J+F*pe,r[11]=x*U+y*W+w*K+F*le,r[15]=x*ne+y*B+w*k+F*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*o*h+n*c*h+s*o*f-n*l*f)+_*(+t*l*f-t*c*h+r*a*h-s*a*f+s*c*u-r*l*u)+m*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*u-n*c*u)+p*(-s*o*u-t*l*d+t*o*h+s*a*d-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=d*m*c-_*h*c+_*l*f-o*m*f-d*l*p+o*h*p,y=g*h*c-u*m*c-g*l*f+a*m*f+u*l*p-a*h*p,w=u*_*c-g*d*c+g*o*f-a*_*f-u*o*p+a*d*p,F=g*d*l-u*_*l-g*o*h+a*_*h+u*o*m-a*d*m,C=t*x+n*y+s*w+r*F;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=x*R,e[1]=(_*h*r-d*m*r-_*s*f+n*m*f+d*s*p-n*h*p)*R,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*R,e[3]=(d*l*r-o*h*r-d*s*c+n*h*c+o*s*f-n*l*f)*R,e[4]=y*R,e[5]=(u*m*r-g*h*r+g*s*f-t*m*f-u*s*p+t*h*p)*R,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*R,e[7]=(a*h*r-u*l*r+u*s*c-t*h*c-a*s*f+t*l*f)*R,e[8]=w*R,e[9]=(g*d*r-u*_*r-g*n*f+t*_*f+u*n*p-t*d*p)*R,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*R,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*f-t*o*f)*R,e[12]=F*R,e[13]=(u*_*s-g*d*s+g*n*h-t*_*h-u*n*m+t*d*m)*R,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*m-t*o*m)*R,e[15]=(a*d*s-u*o*s+u*n*l-t*d*l-a*n*h+t*o*h)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,_=a*u,m=a*d,p=o*d,x=l*c,y=l*u,w=l*d,F=n.x,C=n.y,R=n.z;return s[0]=(1-(_+p))*F,s[1]=(f+w)*F,s[2]=(g-y)*F,s[3]=0,s[4]=(f-w)*C,s[5]=(1-(h+p))*C,s[6]=(m+x)*C,s[7]=0,s[8]=(g+y)*R,s[9]=(m-x)*R,s[10]=(1-(h+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Lr.set(s[0],s[1],s[2]).length();const a=Lr.set(s[4],s[5],s[6]).length(),o=Lr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],bi.copy(this);const c=1/r,u=1/a,d=1/o;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=u,bi.elements[5]*=u,bi.elements[6]*=u,bi.elements[8]*=d,bi.elements[9]*=d,bi.elements[10]*=d,t.setFromRotationMatrix(bi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ss){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),h=(n+s)/(n-s);let f,g;if(o===ss)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Cl)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ss){const l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(a-r),h=(t+e)*c,f=(n+s)*u;let g,_;if(o===ss)g=(a+r)*d,_=-2*d;else if(o===Cl)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Lr=new z,bi=new It,c_=new z(0,0,0),h_=new z(1,1,1),ys=new z,Fo=new z,ii=new z,qd=new It,jd=new ar;class cs{constructor(e=0,t=0,n=0,s=cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(wn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(wn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jd.setFromEuler(this),this.setFromQuaternion(jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cs.DEFAULT_ORDER="XYZ";class ku{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let u_=0;const Yd=new z,Fr=new ar,Qi=new It,Io=new z,Fa=new z,d_=new z,f_=new ar,Kd=new z(1,0,0),Zd=new z(0,1,0),Jd=new z(0,0,1),Qd={type:"added"},p_={type:"removed"},Ir={type:"childadded",child:null},Nc={type:"childremoved",child:null};class jn extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new z,t=new cs,n=new ar,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new ut}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ku,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(Kd,e)}rotateY(e){return this.rotateOnAxis(Zd,e)}rotateZ(e){return this.rotateOnAxis(Jd,e)}translateOnAxis(e,t){return Yd.copy(e).applyQuaternion(this.quaternion),this.position.add(Yd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kd,e)}translateY(e){return this.translateOnAxis(Zd,e)}translateZ(e){return this.translateOnAxis(Jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Io.copy(e):Io.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Fa,Io,this.up):Qi.lookAt(Io,Fa,this.up),this.quaternion.setFromRotationMatrix(Qi),s&&(Qi.extractRotation(s.matrixWorld),Fr.setFromRotationMatrix(Qi),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qd),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(p_),Nc.child=e,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qd),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,d_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,f_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}jn.DEFAULT_UP=new z(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new z,es=new z,kc=new z,ts=new z,Ur=new z,Nr=new z,ef=new z,Oc=new z,zc=new z,Bc=new z,Hc=new Qt,Vc=new Qt,Gc=new Qt;class xi{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ti.subVectors(e,t),s.cross(Ti);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ti.subVectors(s,t),es.subVectors(n,t),kc.subVectors(e,t);const a=Ti.dot(Ti),o=Ti.dot(es),l=Ti.dot(kc),c=es.dot(es),u=es.dot(kc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ts)===null?!1:ts.x>=0&&ts.y>=0&&ts.x+ts.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ts.x),l.addScaledVector(a,ts.y),l.addScaledVector(o,ts.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Hc.setScalar(0),Vc.setScalar(0),Gc.setScalar(0),Hc.fromBufferAttribute(e,t),Vc.fromBufferAttribute(e,n),Gc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Hc,r.x),a.addScaledVector(Vc,r.y),a.addScaledVector(Gc,r.z),a}static isFrontFacing(e,t,n,s){return Ti.subVectors(n,t),es.subVectors(e,t),Ti.cross(es).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),es.subVectors(this.a,this.b),Ti.cross(es).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return xi.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ur.subVectors(s,n),Nr.subVectors(r,n),Oc.subVectors(e,n);const l=Ur.dot(Oc),c=Nr.dot(Oc);if(l<=0&&c<=0)return t.copy(n);zc.subVectors(e,s);const u=Ur.dot(zc),d=Nr.dot(zc);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ur,a);Bc.subVectors(e,r);const f=Ur.dot(Bc),g=Nr.dot(Bc);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Nr,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return ef.subVectors(r,s),o=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(ef,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(Ur,a).addScaledVector(Nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function Wc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ct.workingColorSpace){if(e=Nu(e,1),t=wn(t,0,1),n=wn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wc(a,r,e+1/3),this.g=Wc(a,r,e),this.b=Wc(a,r,e-1/3)}return Ct.toWorkingColorSpace(this,s),this}setStyle(e,t=mi){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const n=Cm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}copyLinearToSRGB(e){return this.r=Cc(e.r),this.g=Cc(e.g),this.b=Cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Ct.fromWorkingColorSpace(Un.copy(this),e),Math.round(wn(Un.r*255,0,255))*65536+Math.round(wn(Un.g*255,0,255))*256+Math.round(wn(Un.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(Un.copy(this),t);const n=Un.r,s=Un.g,r=Un.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=mi){Ct.fromWorkingColorSpace(Un.copy(this),e);const t=Un.r,n=Un.g,s=Un.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ms),this.setHSL(Ms.h+e,Ms.s+t,Ms.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ms),e.getHSL(Uo);const n=qa(Ms.h,Uo.h,t),s=qa(Ms.s,Uo.s,t),r=qa(Ms.l,Uo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new rt;rt.NAMES=Cm;let m_=0;class ma extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=er,this.side=Fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=yh,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(n.blending=this.blending),this.side!==Fs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xh&&(n.blendSrc=this.blendSrc),this.blendDst!==yh&&(n.blendDst=this.blendDst),this.blendEquation!==Ks&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ra&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ci extends ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=fm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new z,No=new we;class Pn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hd,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)No.fromBufferAttribute(this,t),No.applyMatrix3(e),this.setXY(t,No.x,No.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),n=Vn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),n=Vn(n,this.array),s=Vn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),n=Vn(n,this.array),s=Vn(s,this.array),r=Vn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hd&&(e.usage=this.usage),e}}class Rm extends Pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pm extends Pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends Pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let g_=0;const di=new It,$c=new jn,kr=new z,si=new Wi,Ia=new Wi,Sn=new z;class en extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tm(e)?Pm:Rm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,n){return di.makeTranslation(e,t,n),this.applyMatrix4(di),this}scale(e,t,n){return di.makeScale(e,t,n),this.applyMatrix4(di),this}lookAt(e){return $c.lookAt(e),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];si.setFromBufferAttribute(r),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ia.setFromBufferAttribute(o),this.morphTargetsRelative?(Sn.addVectors(si.min,Ia.min),si.expandByPoint(Sn),Sn.addVectors(si.max,Ia.max),si.expandByPoint(Sn)):(si.expandByPoint(Ia.min),si.expandByPoint(Ia.max))}si.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Sn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Sn.fromBufferAttribute(o,c),l&&(kr.fromBufferAttribute(e,c),Sn.add(kr)),s=Math.max(s,n.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new z,l[U]=new z;const c=new z,u=new z,d=new z,h=new we,f=new we,g=new we,_=new z,m=new z;function p(U,ne,S){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,ne),d.fromBufferAttribute(n,S),h.fromBufferAttribute(r,U),f.fromBufferAttribute(r,ne),g.fromBufferAttribute(r,S),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const b=1/(f.x*g.y-g.x*f.y);isFinite(b)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(b),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(b),o[U].add(_),o[ne].add(_),o[S].add(_),l[U].add(m),l[ne].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let U=0,ne=x.length;U<ne;++U){const S=x[U],b=S.start,W=S.count;for(let B=b,Y=b+W;B<Y;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new z,w=new z,F=new z,C=new z;function R(U){F.fromBufferAttribute(s,U),C.copy(F);const ne=o[U];y.copy(ne),y.sub(F.multiplyScalar(F.dot(ne))).normalize(),w.crossVectors(C,ne);const b=w.dot(l[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,b)}for(let U=0,ne=x.length;U<ne;++U){const S=x[U],b=S.start,W=S.count;for(let B=b,Y=b+W;B<Y;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,d=new z;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new Pn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tf=new It,Gs=new vo,ko=new $i,nf=new z,Oo=new z,zo=new z,Bo=new z,Xc=new z,Ho=new z,sf=new z,Vo=new z;class _t extends jn{constructor(e=new en,t=new Ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Xc.fromBufferAttribute(d,e),a?Ho.addScaledVector(Xc,u):Ho.addScaledVector(Xc.sub(t),u))}t.add(Ho)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(r),Gs.copy(e.ray).recast(e.near),!(ko.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(ko,nf)===null||Gs.origin.distanceToSquared(nf)>(e.far-e.near)**2))&&(tf.copy(r).invert(),Gs.copy(e.ray).applyMatrix4(tf),!(n.boundingBox!==null&&Gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gs)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let w=x,F=y;w<F;w+=3){const C=o.getX(w),R=o.getX(w+1),U=o.getX(w+2);s=Go(this,p,e,n,c,u,d,C,R,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=o.getX(m),y=o.getX(m+1),w=o.getX(m+2);s=Go(this,a,e,n,c,u,d,x,y,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=x,F=y;w<F;w+=3){const C=w,R=w+1,U=w+2;s=Go(this,p,e,n,c,u,d,C,R,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,y=m+1,w=m+2;s=Go(this,a,e,n,c,u,d,x,y,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function v_(i,e,t,n,s,r,a,o){let l;if(e.side===qn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Fs,o),l===null)return null;Vo.copy(o),Vo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Vo);return c<t.near||c>t.far?null:{distance:c,point:Vo.clone(),object:i}}function Go(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Oo),i.getVertexPosition(l,zo),i.getVertexPosition(c,Bo);const u=v_(i,e,t,n,Oo,zo,Bo,sf);if(u){const d=new z;xi.getBarycoord(sf,Oo,zo,Bo,d),s&&(u.uv=xi.getInterpolatedAttribute(s,o,l,c,d,new we)),r&&(u.uv1=xi.getInterpolatedAttribute(r,o,l,c,d,new we)),a&&(u.normal=xi.getInterpolatedAttribute(a,o,l,c,d,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new z,materialIndex:0};xi.getNormal(Oo,zo,Bo,h.normal),u.face=h,u.barycoord=d}return u}class Pi extends en{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(u,3)),this.setAttribute("uv",new Rt(d,2));function g(_,m,p,x,y,w,F,C,R,U,ne){const S=w/R,b=F/U,W=w/2,B=F/2,Y=C/2,J=R+1,K=U+1;let k=0,ie=0;const pe=new z;for(let le=0;le<K;le++){const oe=le*b-B;for(let me=0;me<J;me++){const he=me*S-W;pe[_]=he*x,pe[m]=oe*y,pe[p]=Y,c.push(pe.x,pe.y,pe.z),pe[_]=0,pe[m]=0,pe[p]=C>0?1:-1,u.push(pe.x,pe.y,pe.z),d.push(me/R),d.push(1-le/U),k+=1}}for(let le=0;le<U;le++)for(let oe=0;oe<R;oe++){const me=h+oe+J*le,he=h+oe+J*(le+1),se=h+(oe+1)+J*(le+1),fe=h+(oe+1)+J*le;l.push(me,he,fe),l.push(he,se,fe),ie+=6}o.addGroup(f,ie,ne),f+=ie,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ha(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Gn(i){const e={};for(let t=0;t<i.length;t++){const n=ha(i[t]);for(const s in n)e[s]=n[s]}return e}function __(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dm(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const x_={clone:ha,merge:Gn};var y_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hs extends ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y_,this.fragmentShader=M_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=__(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Lm extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=ss}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ss=new z,rf=new we,af=new we;class vi extends Lm{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z)}getViewSize(e,t){return this.getViewBounds(e,rf,af),t.subVectors(af,rf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ea*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Or=-90,zr=1;class S_ extends jn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vi(Or,zr,e,t);s.layers=this.layers,this.add(s);const r=new vi(Or,zr,e,t);r.layers=this.layers,this.add(r);const a=new vi(Or,zr,e,t);a.layers=this.layers,this.add(a);const o=new vi(Or,zr,e,t);o.layers=this.layers,this.add(o);const l=new vi(Or,zr,e,t);l.layers=this.layers,this.add(l);const c=new vi(Or,zr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ss)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cl)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Fm extends Nn{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:aa,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class w_ extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Fm(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_i}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pi(5,5,5),r=new hs({name:"CubemapFromEquirect",uniforms:ha(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qn,blending:Ds});r.uniforms.tEquirect.value=t;const a=new _t(s,r),o=t.minFilter;return t.minFilter===Rs&&(t.minFilter=_i),new S_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const qc=new z,b_=new z,T_=new ut;class ws{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=qc.subVectors(n,t).cross(b_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||T_.getNormalMatrix(e),s=this.coplanarPoint(qc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ws=new $i,Wo=new z;class Im{constructor(e=new ws,t=new ws,n=new ws,s=new ws,r=new ws,a=new ws){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ss){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],x=s[13],y=s[14],w=s[15];if(n[0].setComponents(l-r,h-c,m-f,w-p).normalize(),n[1].setComponents(l+r,h+c,m+f,w+p).normalize(),n[2].setComponents(l+a,h+u,m+g,w+x).normalize(),n[3].setComponents(l-a,h-u,m-g,w-x).normalize(),n[4].setComponents(l-o,h-d,m-_,w-y).normalize(),t===ss)n[5].setComponents(l+o,h+d,m+_,w+y).normalize();else if(t===Cl)n[5].setComponents(o,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(e){return Ws.center.set(0,0,0),Ws.radius=.7071067811865476,Ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Wo.x=s.normal.x>0?e.max.x:e.min.x,Wo.y=s.normal.y>0?e.max.y:e.min.y,Wo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Um(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function E_(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class fr extends en{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const x=p*h-a;for(let y=0;y<c;y++){const w=y*d-r;g.push(w,-x,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const y=x+c*p,w=x+c*(p+1),F=x+1+c*(p+1),C=x+1+c*p;f.push(y,w,C),f.push(w,F,C)}this.setIndex(f),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.widthSegments,e.heightSegments)}}var A_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C_=`#ifdef USE_ALPHAHASH
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
#endif`,R_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F_=`#ifdef USE_AOMAP
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
#endif`,I_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U_=`#ifdef USE_BATCHING
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
#endif`,N_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B_=`#ifdef USE_IRIDESCENCE
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
#endif`,H_=`#ifdef USE_BUMPMAP
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
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,K_=`#define PI 3.141592653589793
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
} // validated`,Z_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J_=`vec3 transformedNormal = objectNormal;
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
#endif`,Q_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ix="gl_FragColor = linearToOutputTexel( gl_FragColor );",sx=`
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
}`,rx=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,px=`#ifdef USE_GRADIENTMAP
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
}`,mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_x=`uniform bool receiveShadow;
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
#endif`,xx=`#ifdef USE_ENVMAP
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
#endif`,yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bx=`PhysicalMaterial material;
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
#endif`,Tx=`struct PhysicalMaterial {
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
}`,Ex=`
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
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Px=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ux=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nx=`#if defined( USE_POINTS_UV )
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
#endif`,kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`#ifdef USE_MORPHTARGETS
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
#endif`,Gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$x=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yx=`#ifdef USE_NORMALMAP
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
#endif`,Kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ty=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ay=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uy=`float getShadowMask() {
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
}`,dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fy=`#ifdef USE_SKINNING
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
#endif`,py=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,my=`#ifdef USE_SKINNING
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
#endif`,gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yy=`#ifdef USE_TRANSMISSION
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
#endif`,My=`#ifdef USE_TRANSMISSION
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
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ty=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ey=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ay=`uniform sampler2D t2D;
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
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ry=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`#include <common>
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
}`,Fy=`#if DEPTH_PACKING == 3200
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
}`,Iy=`#define DISTANCE
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
}`,Uy=`#define DISTANCE
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
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oy=`uniform float scale;
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
}`,zy=`uniform vec3 diffuse;
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
}`,By=`#include <common>
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
}`,Hy=`uniform vec3 diffuse;
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
}`,Vy=`#define LAMBERT
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
}`,Gy=`#define LAMBERT
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
}`,Wy=`#define MATCAP
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
}`,$y=`#define MATCAP
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
}`,Xy=`#define NORMAL
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
}`,qy=`#define NORMAL
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
}`,jy=`#define PHONG
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
}`,Yy=`#define PHONG
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
}`,Ky=`#define STANDARD
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
}`,Zy=`#define STANDARD
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
}`,Jy=`#define TOON
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
}`,Qy=`#define TOON
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
}`,eM=`uniform float size;
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
}`,tM=`uniform vec3 diffuse;
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
}`,nM=`#include <common>
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
}`,iM=`uniform vec3 color;
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
}`,sM=`uniform float rotation;
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
}`,rM=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:A_,alphahash_pars_fragment:C_,alphamap_fragment:R_,alphamap_pars_fragment:P_,alphatest_fragment:D_,alphatest_pars_fragment:L_,aomap_fragment:F_,aomap_pars_fragment:I_,batching_pars_vertex:U_,batching_vertex:N_,begin_vertex:k_,beginnormal_vertex:O_,bsdfs:z_,iridescence_fragment:B_,bumpmap_pars_fragment:H_,clipping_planes_fragment:V_,clipping_planes_pars_fragment:G_,clipping_planes_pars_vertex:W_,clipping_planes_vertex:$_,color_fragment:X_,color_pars_fragment:q_,color_pars_vertex:j_,color_vertex:Y_,common:K_,cube_uv_reflection_fragment:Z_,defaultnormal_vertex:J_,displacementmap_pars_vertex:Q_,displacementmap_vertex:ex,emissivemap_fragment:tx,emissivemap_pars_fragment:nx,colorspace_fragment:ix,colorspace_pars_fragment:sx,envmap_fragment:rx,envmap_common_pars_fragment:ax,envmap_pars_fragment:ox,envmap_pars_vertex:lx,envmap_physical_pars_fragment:xx,envmap_vertex:cx,fog_vertex:hx,fog_pars_vertex:ux,fog_fragment:dx,fog_pars_fragment:fx,gradientmap_pars_fragment:px,lightmap_pars_fragment:mx,lights_lambert_fragment:gx,lights_lambert_pars_fragment:vx,lights_pars_begin:_x,lights_toon_fragment:yx,lights_toon_pars_fragment:Mx,lights_phong_fragment:Sx,lights_phong_pars_fragment:wx,lights_physical_fragment:bx,lights_physical_pars_fragment:Tx,lights_fragment_begin:Ex,lights_fragment_maps:Ax,lights_fragment_end:Cx,logdepthbuf_fragment:Rx,logdepthbuf_pars_fragment:Px,logdepthbuf_pars_vertex:Dx,logdepthbuf_vertex:Lx,map_fragment:Fx,map_pars_fragment:Ix,map_particle_fragment:Ux,map_particle_pars_fragment:Nx,metalnessmap_fragment:kx,metalnessmap_pars_fragment:Ox,morphinstance_vertex:zx,morphcolor_vertex:Bx,morphnormal_vertex:Hx,morphtarget_pars_vertex:Vx,morphtarget_vertex:Gx,normal_fragment_begin:Wx,normal_fragment_maps:$x,normal_pars_fragment:Xx,normal_pars_vertex:qx,normal_vertex:jx,normalmap_pars_fragment:Yx,clearcoat_normal_fragment_begin:Kx,clearcoat_normal_fragment_maps:Zx,clearcoat_pars_fragment:Jx,iridescence_pars_fragment:Qx,opaque_fragment:ey,packing:ty,premultiplied_alpha_fragment:ny,project_vertex:iy,dithering_fragment:sy,dithering_pars_fragment:ry,roughnessmap_fragment:ay,roughnessmap_pars_fragment:oy,shadowmap_pars_fragment:ly,shadowmap_pars_vertex:cy,shadowmap_vertex:hy,shadowmask_pars_fragment:uy,skinbase_vertex:dy,skinning_pars_vertex:fy,skinning_vertex:py,skinnormal_vertex:my,specularmap_fragment:gy,specularmap_pars_fragment:vy,tonemapping_fragment:_y,tonemapping_pars_fragment:xy,transmission_fragment:yy,transmission_pars_fragment:My,uv_pars_fragment:Sy,uv_pars_vertex:wy,uv_vertex:by,worldpos_vertex:Ty,background_vert:Ey,background_frag:Ay,backgroundCube_vert:Cy,backgroundCube_frag:Ry,cube_vert:Py,cube_frag:Dy,depth_vert:Ly,depth_frag:Fy,distanceRGBA_vert:Iy,distanceRGBA_frag:Uy,equirect_vert:Ny,equirect_frag:ky,linedashed_vert:Oy,linedashed_frag:zy,meshbasic_vert:By,meshbasic_frag:Hy,meshlambert_vert:Vy,meshlambert_frag:Gy,meshmatcap_vert:Wy,meshmatcap_frag:$y,meshnormal_vert:Xy,meshnormal_frag:qy,meshphong_vert:jy,meshphong_frag:Yy,meshphysical_vert:Ky,meshphysical_frag:Zy,meshtoon_vert:Jy,meshtoon_frag:Qy,points_vert:eM,points_frag:tM,shadow_vert:nM,shadow_frag:iM,sprite_vert:sM,sprite_frag:rM},Ce={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Vi={basic:{uniforms:Gn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Gn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Gn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Gn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Gn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Gn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Gn([Ce.points,Ce.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Gn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Gn([Ce.common,Ce.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Gn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Gn([Ce.sprite,Ce.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Gn([Ce.common,Ce.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Gn([Ce.lights,Ce.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Vi.physical={uniforms:Gn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const $o={r:0,b:0,g:0},$s=new cs,aM=new It;function oM(i,e,t,n,s,r,a){const o=new rt(0);let l=r===!0?0:1,c,u,d=null,h=0,f=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1;const w=g(x);w===null?p(o,l):w&&w.isColor&&(p(w,1),y=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,y){const w=g(y);w&&(w.isCubeTexture||w.mapping===Xl)?(u===void 0&&(u=new _t(new Pi(1,1,1),new hs({name:"BackgroundCubeMaterial",uniforms:ha(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),$s.copy(y.backgroundRotation),$s.x*=-1,$s.y*=-1,$s.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(aM.makeRotationFromEuler($s)),u.material.toneMapped=Ct.getTransfer(w.colorSpace)!==Vt,(d!==w||h!==w.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=w,h=w.version,f=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new _t(new fr(2,2),new hs({name:"BackgroundMaterial",uniforms:ha(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Fs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(w.colorSpace)!==Vt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,h=w.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB($o,Dm(i)),n.buffers.color.setClear($o.r,$o.g,$o.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:m}}function lM(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(S,b,W,B,Y){let J=!1;const K=d(B,W,b);r!==K&&(r=K,c(r.object)),J=f(S,B,W,Y),J&&g(S,B,W,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,w(S,b,W,B),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function d(S,b,W){const B=W.wireframe===!0;let Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let J=Y[b.id];J===void 0&&(J={},Y[b.id]=J);let K=J[B];return K===void 0&&(K=h(l()),J[B]=K),K}function h(S){const b=[],W=[],B=[];for(let Y=0;Y<t;Y++)b[Y]=0,W[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:W,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,b,W,B){const Y=r.attributes,J=b.attributes;let K=0;const k=W.getAttributes();for(const ie in k)if(k[ie].location>=0){const le=Y[ie];let oe=J[ie];if(oe===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),le===void 0||le.attribute!==oe||oe&&le.data!==oe.data)return!0;K++}return r.attributesNum!==K||r.index!==B}function g(S,b,W,B){const Y={},J=b.attributes;let K=0;const k=W.getAttributes();for(const ie in k)if(k[ie].location>=0){let le=J[ie];le===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(le=S.instanceColor));const oe={};oe.attribute=le,le&&le.data&&(oe.data=le.data),Y[ie]=oe,K++}r.attributes=Y,r.attributesNum=K,r.index=B}function _(){const S=r.newAttributes;for(let b=0,W=S.length;b<W;b++)S[b]=0}function m(S){p(S,0)}function p(S,b){const W=r.newAttributes,B=r.enabledAttributes,Y=r.attributeDivisors;W[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),Y[S]!==b&&(i.vertexAttribDivisor(S,b),Y[S]=b)}function x(){const S=r.newAttributes,b=r.enabledAttributes;for(let W=0,B=b.length;W<B;W++)b[W]!==S[W]&&(i.disableVertexAttribArray(W),b[W]=0)}function y(S,b,W,B,Y,J,K){K===!0?i.vertexAttribIPointer(S,b,W,Y,J):i.vertexAttribPointer(S,b,W,B,Y,J)}function w(S,b,W,B){_();const Y=B.attributes,J=W.getAttributes(),K=b.defaultAttributeValues;for(const k in J){const ie=J[k];if(ie.location>=0){let pe=Y[k];if(pe===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor)),pe!==void 0){const le=pe.normalized,oe=pe.itemSize,me=e.get(pe);if(me===void 0)continue;const he=me.buffer,se=me.type,fe=me.bytesPerElement,xe=se===i.INT||se===i.UNSIGNED_INT||pe.gpuType===Cu;if(pe.isInterleavedBufferAttribute){const ge=pe.data,je=ge.stride,Ne=pe.offset;if(ge.isInstancedInterleavedBuffer){for(let He=0;He<ie.locationSize;He++)p(ie.location+He,ge.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let He=0;He<ie.locationSize;He++)m(ie.location+He);i.bindBuffer(i.ARRAY_BUFFER,he);for(let He=0;He<ie.locationSize;He++)y(ie.location+He,oe/ie.locationSize,se,le,je*fe,(Ne+oe/ie.locationSize*He)*fe,xe)}else{if(pe.isInstancedBufferAttribute){for(let ge=0;ge<ie.locationSize;ge++)p(ie.location+ge,pe.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ge=0;ge<ie.locationSize;ge++)m(ie.location+ge);i.bindBuffer(i.ARRAY_BUFFER,he);for(let ge=0;ge<ie.locationSize;ge++)y(ie.location+ge,oe/ie.locationSize,se,le,oe*fe,oe/ie.locationSize*ge*fe,xe)}}else if(K!==void 0){const le=K[k];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(ie.location,le);break;case 3:i.vertexAttrib3fv(ie.location,le);break;case 4:i.vertexAttrib4fv(ie.location,le);break;default:i.vertexAttrib1fv(ie.location,le)}}}}x()}function F(){U();for(const S in n){const b=n[S];for(const W in b){const B=b[W];for(const Y in B)u(B[Y].object),delete B[Y];delete b[W]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const b=n[S.id];for(const W in b){const B=b[W];for(const Y in B)u(B[Y].object),delete B[Y];delete b[W]}delete n[S.id]}function R(S){for(const b in n){const W=n[b];if(W[S.id]===void 0)continue;const B=W[S.id];for(const Y in B)u(B[Y].object),delete B[Y];delete W[S.id]}}function U(){ne(),a=!0,r!==s&&(r=s,c(r.object))}function ne(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:ne,dispose:F,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function cM(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];for(let _=0;_<h.length;_++)t.update(g,n,h[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function hM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==$t&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const U=R===go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Fi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==nn&&!U)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:w,vertexTextures:F,maxSamples:C}}function uM(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new ws,o=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,y=x*4;let w=p.clippingState||null;l.value=w,w=u(g,h,y,f);for(let F=0;F!==y;++F)w[F]=t[F];p.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,w=f;y!==_;++y,w+=4)a.copy(d[y]).applyMatrix4(x,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function dM(i){let e=new WeakMap;function t(a,o){return o===Ch?a.mapping=aa:o===Rh&&(a.mapping=oa),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ch||o===Rh)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new w_(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class jl extends Lm{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yr=4,of=[.125,.215,.35,.446,.526,.582],Zs=20,jc=new jl,lf=new rt;let Yc=null,Kc=0,Zc=0,Jc=!1;const qs=(1+Math.sqrt(5))/2,Br=1/qs,cf=[new z(-qs,Br,0),new z(qs,Br,0),new z(-Br,0,qs),new z(Br,0,qs),new z(0,qs,-Br),new z(0,qs,Br),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class hf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Yc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yc,Kc,Zc),this._renderer.xr.enabled=Jc,e.scissorTest=!1,Xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===aa||e.mapping===oa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:go,format:$t,colorSpace:Us,depthBuffer:!1},s=uf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fM(r)),this._blurMaterial=pM(r,e,t)}return s}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,jc)}_sceneToCubeUV(e,t,n,s){const o=new vi(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(lf),u.toneMapping=Ls,u.autoClear=!1;const f=new Ci({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),g=new _t(new Pi,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(lf),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;Xo(s,x*y,p>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===aa||e.mapping===oa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=df());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Xo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,jc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=cf[(s-r-1)%cf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new _t(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Zs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Zs;m>Zs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zs}`);const p=[];let x=0;for(let R=0;R<Zs;++R){const U=R/_,ne=Math.exp(-U*U/2);p.push(ne),R===0?x+=ne:R<m&&(x+=2*ne)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const w=this._sizeLods[s],F=3*w*(s>y-Yr?s-y+Yr:0),C=4*(this._cubeSize-w);Xo(t,F,C,3*w,2*w),l.setRenderTarget(t),l.render(d,jc)}}function fM(i){const e=[],t=[],n=[];let s=i;const r=i-Yr+1+of.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Yr?l=of[a-i+Yr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),y=new Float32Array(m*g*f),w=new Float32Array(p*g*f);for(let C=0;C<f;C++){const R=C%3*2/3-1,U=C>2?0:-1,ne=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];x.set(ne,_*g*C),y.set(h,m*g*C);const S=[C,C,C,C,C,C];w.set(S,p*g*C)}const F=new en;F.setAttribute("position",new Pn(x,_)),F.setAttribute("uv",new Pn(y,m)),F.setAttribute("faceIndex",new Pn(w,p)),e.push(F),s>Yr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uf(i,e,t){const n=new Jn(i,e,t);return n.texture.mapping=Xl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function pM(i,e,t){const n=new Float32Array(Zs),s=new z(0,1,0);return new hs({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ou(),fragmentShader:`

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
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function df(){return new hs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ou(),fragmentShader:`

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
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function ff(){return new hs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function Ou(){return`

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
	`}function mM(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ch||l===Rh,u=l===aa||l===oa;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new hf(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new hf(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function gM(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&xl("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function vM(i,e,t,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,w=x.length;y<w;y+=3){const F=x[y+0],C=x[y+1],R=x[y+2];h.push(F,C,C,R,R,F)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,w=x.length/3-1;y<w;y+=3){const F=y+0,C=y+1,R=y+2;h.push(F,C,C,R,R,F)}}else return;const m=new(Tm(h)?Pm:Rm)(h,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function _M(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*a),t.update(f,n,1)}function c(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,h*a,g),t.update(f,n,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(h,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x];for(let x=0;x<_.length;x++)t.update(p,n,_[x])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function xM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function yM(i,e,t){const n=new WeakMap,s=new Qt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let S=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),_===!0&&(w=2),m===!0&&(w=3);let F=o.attributes.position.count*w,C=1;F>e.maxTextureSize&&(C=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const R=new Float32Array(F*C*4*d),U=new Am(R,F,C,d);U.type=nn,U.needsUpdate=!0;const ne=w*4;for(let b=0;b<d;b++){const W=p[b],B=x[b],Y=y[b],J=F*C*4*b;for(let K=0;K<W.count;K++){const k=K*ne;g===!0&&(s.fromBufferAttribute(W,K),R[J+k+0]=s.x,R[J+k+1]=s.y,R[J+k+2]=s.z,R[J+k+3]=0),_===!0&&(s.fromBufferAttribute(B,K),R[J+k+4]=s.x,R[J+k+5]=s.y,R[J+k+6]=s.z,R[J+k+7]=0),m===!0&&(s.fromBufferAttribute(Y,K),R[J+k+8]=s.x,R[J+k+9]=s.y,R[J+k+10]=s.z,R[J+k+11]=Y.itemSize===4?s.w:1)}}h={count:d,texture:U,size:new we(F,C)},n.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function MM(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Nm extends Nn{constructor(e,t,n,s,r,a,o,l,c,u=Qr){if(u!==Qr&&u!==ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Qr&&(n=rr),n===void 0&&u===ca&&(n=la),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ht,this.minFilter=l!==void 0?l:ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const km=new Nn,pf=new Nm(1,1),Om=new Am,zm=new o_,Bm=new Fm,mf=[],gf=[],vf=new Float32Array(16),_f=new Float32Array(9),xf=new Float32Array(4);function ga(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=mf[s];if(r===void 0&&(r=new Float32Array(s),mf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function mn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Yl(i,e){let t=gf[e];t===void 0&&(t=new Int32Array(e),gf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function SM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function bM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function TM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function EM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;xf.set(n),i.uniformMatrix2fv(this.addr,!1,xf),gn(t,n)}}function AM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;_f.set(n),i.uniformMatrix3fv(this.addr,!1,_f),gn(t,n)}}function CM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;vf.set(n),i.uniformMatrix4fv(this.addr,!1,vf),gn(t,n)}}function RM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function PM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function DM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function LM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function FM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function IM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function UM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function NM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function kM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pf.compareFunction=bm,r=pf):r=km,t.setTexture2D(e||r,s)}function OM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zm,s)}function zM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Bm,s)}function BM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Om,s)}function HM(i){switch(i){case 5126:return SM;case 35664:return wM;case 35665:return bM;case 35666:return TM;case 35674:return EM;case 35675:return AM;case 35676:return CM;case 5124:case 35670:return RM;case 35667:case 35671:return PM;case 35668:case 35672:return DM;case 35669:case 35673:return LM;case 5125:return FM;case 36294:return IM;case 36295:return UM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return BM}}function VM(i,e){i.uniform1fv(this.addr,e)}function GM(i,e){const t=ga(e,this.size,2);i.uniform2fv(this.addr,t)}function WM(i,e){const t=ga(e,this.size,3);i.uniform3fv(this.addr,t)}function $M(i,e){const t=ga(e,this.size,4);i.uniform4fv(this.addr,t)}function XM(i,e){const t=ga(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qM(i,e){const t=ga(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jM(i,e){const t=ga(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function YM(i,e){i.uniform1iv(this.addr,e)}function KM(i,e){i.uniform2iv(this.addr,e)}function ZM(i,e){i.uniform3iv(this.addr,e)}function JM(i,e){i.uniform4iv(this.addr,e)}function QM(i,e){i.uniform1uiv(this.addr,e)}function eS(i,e){i.uniform2uiv(this.addr,e)}function tS(i,e){i.uniform3uiv(this.addr,e)}function nS(i,e){i.uniform4uiv(this.addr,e)}function iS(i,e,t){const n=this.cache,s=e.length,r=Yl(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||km,r[a])}function sS(i,e,t){const n=this.cache,s=e.length,r=Yl(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||zm,r[a])}function rS(i,e,t){const n=this.cache,s=e.length,r=Yl(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Bm,r[a])}function aS(i,e,t){const n=this.cache,s=e.length,r=Yl(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Om,r[a])}function oS(i){switch(i){case 5126:return VM;case 35664:return GM;case 35665:return WM;case 35666:return $M;case 35674:return XM;case 35675:return qM;case 35676:return jM;case 5124:case 35670:return YM;case 35667:case 35671:return KM;case 35668:case 35672:return ZM;case 35669:case 35673:return JM;case 5125:return QM;case 36294:return eS;case 36295:return tS;case 36296:return nS;case 35678:case 36198:case 36298:case 36306:case 35682:return iS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return rS;case 36289:case 36303:case 36311:case 36292:return aS}}class lS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=HM(t.type)}}class cS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oS(t.type)}}class hS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Qc=/(\w+)(\])?(\[|\.)?/g;function yf(i,e){i.seq.push(e),i.map[e.id]=e}function uS(i,e,t){const n=i.name,s=n.length;for(Qc.lastIndex=0;;){const r=Qc.exec(n),a=Qc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){yf(t,c===void 0?new lS(o,i,e):new cS(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new hS(o),yf(t,d)),t=d}}}class yl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);uS(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Mf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const dS=37297;let fS=0;function pS(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function mS(i){const e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(i);let n;switch(e===t?n="":e===Al&&t===El?n="LinearDisplayP3ToLinearSRGB":e===El&&t===Al&&(n="LinearSRGBToLinearDisplayP3"),i){case Us:case ql:return[n,"LinearTransferOETF"];case mi:case Uu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Sf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+pS(i.getShaderSource(e),a)}else return s}function gS(i,e){const t=mS(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function vS(i,e){let t;switch(e){case vv:t="Linear";break;case _v:t="Reinhard";break;case xv:t="Cineon";break;case yv:t="ACESFilmic";break;case Sv:t="AgX";break;case wv:t="Neutral";break;case Mv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qo=new z;function _S(){Ct.getLuminanceCoefficients(qo);const i=qo.x.toFixed(4),e=qo.y.toFixed(4),t=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function yS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function MS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ga(i){return i!==""}function wf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SS=/^[ \t]*#include +<([\w\d./]+)>/gm;function su(i){return i.replace(SS,bS)}const wS=new Map;function bS(i,e){let t=ct[e];if(t===void 0){const n=wS.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return su(t)}const TS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tf(i){return i.replace(TS,ES)}function ES(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ef(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===is&&(e="SHADOWMAP_TYPE_VSM"),e}function CS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case aa:case oa:e="ENVMAP_TYPE_CUBE";break;case Xl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case oa:e="ENVMAP_MODE_REFRACTION";break}return e}function PS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fm:e="ENVMAP_BLENDING_MULTIPLY";break;case mv:e="ENVMAP_BLENDING_MIX";break;case gv:e="ENVMAP_BLENDING_ADD";break}return e}function DS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function LS(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=AS(t),c=CS(t),u=RS(t),d=PS(t),h=DS(t),f=xS(t),g=yS(r),_=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ga).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ga).join(`
`),p.length>0&&(p+=`
`)):(m=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),p=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ls?"#define TONE_MAPPING":"",t.toneMapping!==Ls?ct.tonemapping_pars_fragment:"",t.toneMapping!==Ls?vS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,gS("linearToOutputTexel",t.outputColorSpace),_S(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ga).join(`
`)),a=su(a),a=wf(a,t),a=bf(a,t),o=su(o),o=wf(o,t),o=bf(o,t),a=Tf(a),o=Tf(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Wn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+a,w=x+p+o,F=Mf(s,s.VERTEX_SHADER,y),C=Mf(s,s.FRAGMENT_SHADER,w);s.attachShader(_,F),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(b){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(F).trim(),Y=s.getShaderInfoLog(C).trim();let J=!0,K=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,F,C);else{const k=Sf(s,F,"vertex"),ie=Sf(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+W+`
`+k+`
`+ie)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(B===""||Y==="")&&(K=!1);K&&(b.diagnostics={runnable:J,programLog:W,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(F),s.deleteShader(C),U=new yl(s,_),ne=MS(s,_)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let ne;this.getAttributes=function(){return ne===void 0&&R(this),ne};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,dS)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=C,this}let FS=0;class IS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new US(e),t.set(e,n)),n}}class US{constructor(e){this.id=FS++,this.code=e,this.usedTimes=0}}function NS(i,e,t,n,s,r,a){const o=new ku,l=new IS,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,b,W,B,Y){const J=B.fog,K=Y.geometry,k=S.isMeshStandardMaterial?B.environment:null,ie=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),pe=ie&&ie.mapping===Xl?ie.image.height:null,le=_[S.type];S.precision!==null&&(g=s.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const oe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,me=oe!==void 0?oe.length:0;let he=0;K.morphAttributes.position!==void 0&&(he=1),K.morphAttributes.normal!==void 0&&(he=2),K.morphAttributes.color!==void 0&&(he=3);let se,fe,xe,ge;if(le){const Fn=Vi[le];se=Fn.vertexShader,fe=Fn.fragmentShader}else se=S.vertexShader,fe=S.fragmentShader,l.update(S),xe=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const je=i.getRenderTarget(),Ne=Y.isInstancedMesh===!0,He=Y.isBatchedMesh===!0,at=!!S.map,nt=!!S.matcap,O=!!ie,jt=!!S.aoMap,ot=!!S.lightMap,ft=!!S.bumpMap,Ke=!!S.normalMap,Et=!!S.displacementMap,Ye=!!S.emissiveMap,D=!!S.metalnessMap,E=!!S.roughnessMap,ee=S.anisotropy>0,ce=S.clearcoat>0,re=S.dispersion>0,q=S.iridescence>0,be=S.sheen>0,ye=S.transmission>0,De=ee&&!!S.anisotropyMap,lt=ce&&!!S.clearcoatMap,_e=ce&&!!S.clearcoatNormalMap,Le=ce&&!!S.clearcoatRoughnessMap,Ve=q&&!!S.iridescenceMap,We=q&&!!S.iridescenceThicknessMap,Ee=be&&!!S.sheenColorMap,et=be&&!!S.sheenRoughnessMap,tt=!!S.specularMap,wt=!!S.specularColorMap,$=!!S.specularIntensityMap,Ae=ye&&!!S.transmissionMap,ae=ye&&!!S.thicknessMap,ue=!!S.gradientMap,Re=!!S.alphaMap,Fe=S.alphaTest>0,gt=!!S.alphaHash,Yt=!!S.extensions;let Ln=Ls;S.toneMapped&&(je===null||je.isXRRenderTarget===!0)&&(Ln=i.toneMapping);const xt={shaderID:le,shaderType:S.type,shaderName:S.name,vertexShader:se,fragmentShader:fe,defines:S.defines,customVertexShaderID:xe,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:He,batchingColor:He&&Y._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&Y.instanceColor!==null,instancingMorph:Ne&&Y.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:je===null?i.outputColorSpace:je.isXRRenderTarget===!0?je.texture.colorSpace:Us,alphaToCoverage:!!S.alphaToCoverage,map:at,matcap:nt,envMap:O,envMapMode:O&&ie.mapping,envMapCubeUVHeight:pe,aoMap:jt,lightMap:ot,bumpMap:ft,normalMap:Ke,displacementMap:f&&Et,emissiveMap:Ye,normalMapObjectSpace:Ke&&S.normalMapType===Cv,normalMapTangentSpace:Ke&&S.normalMapType===Av,metalnessMap:D,roughnessMap:E,anisotropy:ee,anisotropyMap:De,clearcoat:ce,clearcoatMap:lt,clearcoatNormalMap:_e,clearcoatRoughnessMap:Le,dispersion:re,iridescence:q,iridescenceMap:Ve,iridescenceThicknessMap:We,sheen:be,sheenColorMap:Ee,sheenRoughnessMap:et,specularMap:tt,specularColorMap:wt,specularIntensityMap:$,transmission:ye,transmissionMap:Ae,thicknessMap:ae,gradientMap:ue,opaque:S.transparent===!1&&S.blending===er&&S.alphaToCoverage===!1,alphaMap:Re,alphaTest:Fe,alphaHash:gt,combine:S.combine,mapUv:at&&m(S.map.channel),aoMapUv:jt&&m(S.aoMap.channel),lightMapUv:ot&&m(S.lightMap.channel),bumpMapUv:ft&&m(S.bumpMap.channel),normalMapUv:Ke&&m(S.normalMap.channel),displacementMapUv:Et&&m(S.displacementMap.channel),emissiveMapUv:Ye&&m(S.emissiveMap.channel),metalnessMapUv:D&&m(S.metalnessMap.channel),roughnessMapUv:E&&m(S.roughnessMap.channel),anisotropyMapUv:De&&m(S.anisotropyMap.channel),clearcoatMapUv:lt&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:_e&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:We&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:et&&m(S.sheenRoughnessMap.channel),specularMapUv:tt&&m(S.specularMap.channel),specularColorMapUv:wt&&m(S.specularColorMap.channel),specularIntensityMapUv:$&&m(S.specularIntensityMap.channel),transmissionMapUv:Ae&&m(S.transmissionMap.channel),thicknessMapUv:ae&&m(S.thicknessMap.channel),alphaMapUv:Re&&m(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ke||ee),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!K.attributes.uv&&(at||Re),fog:!!J,useFog:S.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:he,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ln,decodeVideoTexture:at&&S.map.isVideoTexture===!0&&Ct.getTransfer(S.map.colorSpace)===Vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ai,flipSided:S.side===qn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Yt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&S.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function x(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const W in S.defines)b.push(W),b.push(S.defines[W]);return S.isRawShaderMaterial===!1&&(y(b,S),w(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function w(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),S.push(o.mask)}function F(S){const b=_[S.type];let W;if(b){const B=Vi[b];W=x_.clone(B.uniforms)}else W=S.uniforms;return W}function C(S,b){let W;for(let B=0,Y=u.length;B<Y;B++){const J=u[B];if(J.cacheKey===b){W=J,++W.usedTimes;break}}return W===void 0&&(W=new LS(i,b,S,r),u.push(W)),W}function R(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function U(S){l.remove(S)}function ne(){l.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:F,acquireProgram:C,releaseProgram:R,releaseShaderCache:U,programs:u,dispose:ne}}function kS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function OS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Af(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cf(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,h,f,g,_,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,h,f,g,_,m){const p=a(d,h,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,h,f,g,_,m){const p=a(d,h,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||OS),n.length>1&&n.sort(h||Af),s.length>1&&s.sort(h||Af)}function u(){for(let d=e,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function zS(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Cf,i.set(n,[a])):s>=r.length?(a=new Cf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function BS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new rt};break;case"SpotLight":t={position:new z,direction:new z,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function HS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let VS=0;function GS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function WS(i){const e=new BS,t=HS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const s=new z,r=new It,a=new It;function o(c){let u=0,d=0,h=0;for(let ne=0;ne<9;ne++)n.probe[ne].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,y=0,w=0,F=0,C=0,R=0;c.sort(GS);for(let ne=0,S=c.length;ne<S;ne++){const b=c[ne],W=b.color,B=b.intensity,Y=b.distance,J=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=W.r*B,d+=W.g*B,h+=W.b*B;else if(b.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(b.sh.coefficients[K],B);R++}else if(b.isDirectionalLight){const K=e.get(b);if(K.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const k=b.shadow,ie=t.get(b);ie.shadowIntensity=k.intensity,ie.shadowBias=k.bias,ie.shadowNormalBias=k.normalBias,ie.shadowRadius=k.radius,ie.shadowMapSize=k.mapSize,n.directionalShadow[f]=ie,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=b.shadow.matrix,x++}n.directional[f]=K,f++}else if(b.isSpotLight){const K=e.get(b);K.position.setFromMatrixPosition(b.matrixWorld),K.color.copy(W).multiplyScalar(B),K.distance=Y,K.coneCos=Math.cos(b.angle),K.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),K.decay=b.decay,n.spot[_]=K;const k=b.shadow;if(b.map&&(n.spotLightMap[F]=b.map,F++,k.updateMatrices(b),b.castShadow&&C++),n.spotLightMatrix[_]=k.matrix,b.castShadow){const ie=t.get(b);ie.shadowIntensity=k.intensity,ie.shadowBias=k.bias,ie.shadowNormalBias=k.normalBias,ie.shadowRadius=k.radius,ie.shadowMapSize=k.mapSize,n.spotShadow[_]=ie,n.spotShadowMap[_]=J,w++}_++}else if(b.isRectAreaLight){const K=e.get(b);K.color.copy(W).multiplyScalar(B),K.halfWidth.set(b.width*.5,0,0),K.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=K,m++}else if(b.isPointLight){const K=e.get(b);if(K.color.copy(b.color).multiplyScalar(b.intensity),K.distance=b.distance,K.decay=b.decay,b.castShadow){const k=b.shadow,ie=t.get(b);ie.shadowIntensity=k.intensity,ie.shadowBias=k.bias,ie.shadowNormalBias=k.normalBias,ie.shadowRadius=k.radius,ie.shadowMapSize=k.mapSize,ie.shadowCameraNear=k.camera.near,ie.shadowCameraFar=k.camera.far,n.pointShadow[g]=ie,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=b.shadow.matrix,y++}n.point[g]=K,g++}else if(b.isHemisphereLight){const K=e.get(b);K.skyColor.copy(b.color).multiplyScalar(B),K.groundColor.copy(b.groundColor).multiplyScalar(B),n.hemi[p]=K,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==x||U.numPointShadows!==y||U.numSpotShadows!==w||U.numSpotMaps!==F||U.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=w+F-C,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,U.directionalLength=f,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=x,U.numPointShadows=y,U.numSpotShadows=w,U.numSpotMaps=F,U.numLightProbes=R,n.version=VS++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(y.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const w=n.point[h];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const w=n.hemi[_];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Rf(i){const e=new WS(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function $S(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Rf(i),e.set(s,[o])):r>=a.length?(o=new Rf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class XS extends ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qS extends ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YS=`uniform sampler2D shadow_pass;
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
}`;function KS(i,e,t){let n=new Im;const s=new we,r=new we,a=new Qt,o=new XS({depthPacking:Ev}),l=new qS,c={},u=t.maxTextureSize,d={[Fs]:qn,[qn]:Fs,[ai]:ai},h=new hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:jS,fragmentShader:YS}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new en;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _t(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dm;let p=this.type;this.render=function(C,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const ne=i.getRenderTarget(),S=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Ds),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const B=p!==is&&this.type===is,Y=p===is&&this.type!==is;for(let J=0,K=C.length;J<K;J++){const k=C[J],ie=k.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;s.copy(ie.mapSize);const pe=ie.getFrameExtents();if(s.multiply(pe),r.copy(ie.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pe.x),s.x=r.x*pe.x,ie.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pe.y),s.y=r.y*pe.y,ie.mapSize.y=r.y)),ie.map===null||B===!0||Y===!0){const oe=this.type!==is?{minFilter:ht,magFilter:ht}:{};ie.map!==null&&ie.map.dispose(),ie.map=new Jn(s.x,s.y,oe),ie.map.texture.name=k.name+".shadowMap",ie.camera.updateProjectionMatrix()}i.setRenderTarget(ie.map),i.clear();const le=ie.getViewportCount();for(let oe=0;oe<le;oe++){const me=ie.getViewport(oe);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),W.viewport(a),ie.updateMatrices(k,oe),n=ie.getFrustum(),w(R,U,ie.camera,k,this.type)}ie.isPointLightShadow!==!0&&this.type===is&&x(ie,U),ie.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(ne,S,b)};function x(C,R){const U=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Jn(s.x,s.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,U,h,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,U,f,_,null)}function y(C,R,U,ne){let S=null;const b=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)S=b;else if(S=U.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=S.uuid,B=R.uuid;let Y=c[W];Y===void 0&&(Y={},c[W]=Y);let J=Y[B];J===void 0&&(J=S.clone(),Y[B]=J,R.addEventListener("dispose",F)),S=J}if(S.visible=R.visible,S.wireframe=R.wireframe,ne===is?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:d[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=i.properties.get(S);W.light=U}return S}function w(C,R,U,ne,S){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===is)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const B=e.update(C),Y=C.material;if(Array.isArray(Y)){const J=B.groups;for(let K=0,k=J.length;K<k;K++){const ie=J[K],pe=Y[ie.materialIndex];if(pe&&pe.visible){const le=y(C,pe,ne,S);C.onBeforeShadow(i,C,R,U,B,le,ie),i.renderBufferDirect(U,null,B,le,C,ie),C.onAfterShadow(i,C,R,U,B,le,ie)}}}else if(Y.visible){const J=y(C,Y,ne,S);C.onBeforeShadow(i,C,R,U,B,J,null),i.renderBufferDirect(U,null,B,J,C,null),C.onAfterShadow(i,C,R,U,B,J,null)}}const W=C.children;for(let B=0,Y=W.length;B<Y;B++)w(W[B],R,U,ne,S)}function F(C){C.target.removeEventListener("dispose",F);for(const U in c){const ne=c[U],S=C.target.uuid;S in ne&&(ne[S].dispose(),delete ne[S])}}}const ZS={[Mh]:Sh,[wh]:Eh,[bh]:Ah,[ra]:Th,[Sh]:Mh,[Eh]:wh,[Ah]:bh,[Th]:ra};function JS(i){function e(){let $=!1;const Ae=new Qt;let ae=null;const ue=new Qt(0,0,0,0);return{setMask:function(Re){ae!==Re&&!$&&(i.colorMask(Re,Re,Re,Re),ae=Re)},setLocked:function(Re){$=Re},setClear:function(Re,Fe,gt,Yt,Ln){Ln===!0&&(Re*=Yt,Fe*=Yt,gt*=Yt),Ae.set(Re,Fe,gt,Yt),ue.equals(Ae)===!1&&(i.clearColor(Re,Fe,gt,Yt),ue.copy(Ae))},reset:function(){$=!1,ae=null,ue.set(-1,0,0,0)}}}function t(){let $=!1,Ae=!1,ae=null,ue=null,Re=null;return{setReversed:function(Fe){Ae=Fe},setTest:function(Fe){Fe?xe(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(Fe){ae!==Fe&&!$&&(i.depthMask(Fe),ae=Fe)},setFunc:function(Fe){if(Ae&&(Fe=ZS[Fe]),ue!==Fe){switch(Fe){case Mh:i.depthFunc(i.NEVER);break;case Sh:i.depthFunc(i.ALWAYS);break;case wh:i.depthFunc(i.LESS);break;case ra:i.depthFunc(i.LEQUAL);break;case bh:i.depthFunc(i.EQUAL);break;case Th:i.depthFunc(i.GEQUAL);break;case Eh:i.depthFunc(i.GREATER);break;case Ah:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=Fe}},setLocked:function(Fe){$=Fe},setClear:function(Fe){Re!==Fe&&(i.clearDepth(Fe),Re=Fe)},reset:function(){$=!1,ae=null,ue=null,Re=null}}}function n(){let $=!1,Ae=null,ae=null,ue=null,Re=null,Fe=null,gt=null,Yt=null,Ln=null;return{setTest:function(xt){$||(xt?xe(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(xt){Ae!==xt&&!$&&(i.stencilMask(xt),Ae=xt)},setFunc:function(xt,Fn,Tn){(ae!==xt||ue!==Fn||Re!==Tn)&&(i.stencilFunc(xt,Fn,Tn),ae=xt,ue=Fn,Re=Tn)},setOp:function(xt,Fn,Tn){(Fe!==xt||gt!==Fn||Yt!==Tn)&&(i.stencilOp(xt,Fn,Tn),Fe=xt,gt=Fn,Yt=Tn)},setLocked:function(xt){$=xt},setClear:function(xt){Ln!==xt&&(i.clearStencil(xt),Ln=xt)},reset:function(){$=!1,Ae=null,ae=null,ue=null,Re=null,Fe=null,gt=null,Yt=null,Ln=null}}}const s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],f=null,g=!1,_=null,m=null,p=null,x=null,y=null,w=null,F=null,C=new rt(0,0,0),R=0,U=!1,ne=null,S=null,b=null,W=null,B=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,K=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),J=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),J=K>=2);let ie=null,pe={};const le=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),me=new Qt().fromArray(le),he=new Qt().fromArray(oe);function se($,Ae,ae,ue){const Re=new Uint8Array(4),Fe=i.createTexture();i.bindTexture($,Fe),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<ae;gt++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(Ae+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return Fe}const fe={};fe[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),xe(i.DEPTH_TEST),r.setFunc(ra),ot(!1),ft(kd),xe(i.CULL_FACE),O(Ds);function xe($){c[$]!==!0&&(i.enable($),c[$]=!0)}function ge($){c[$]!==!1&&(i.disable($),c[$]=!1)}function je($,Ae){return u[$]!==Ae?(i.bindFramebuffer($,Ae),u[$]=Ae,$===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ae),$===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ne($,Ae){let ae=h,ue=!1;if($){ae=d.get(Ae),ae===void 0&&(ae=[],d.set(Ae,ae));const Re=$.textures;if(ae.length!==Re.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,gt=Re.length;Fe<gt;Fe++)ae[Fe]=i.COLOR_ATTACHMENT0+Fe;ae.length=Re.length,ue=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,ue=!0);ue&&i.drawBuffers(ae)}function He($){return f!==$?(i.useProgram($),f=$,!0):!1}const at={[Ks]:i.FUNC_ADD,[Jg]:i.FUNC_SUBTRACT,[Qg]:i.FUNC_REVERSE_SUBTRACT};at[ev]=i.MIN,at[tv]=i.MAX;const nt={[nv]:i.ZERO,[iv]:i.ONE,[sv]:i.SRC_COLOR,[xh]:i.SRC_ALPHA,[hv]:i.SRC_ALPHA_SATURATE,[lv]:i.DST_COLOR,[av]:i.DST_ALPHA,[rv]:i.ONE_MINUS_SRC_COLOR,[yh]:i.ONE_MINUS_SRC_ALPHA,[cv]:i.ONE_MINUS_DST_COLOR,[ov]:i.ONE_MINUS_DST_ALPHA,[uv]:i.CONSTANT_COLOR,[dv]:i.ONE_MINUS_CONSTANT_COLOR,[fv]:i.CONSTANT_ALPHA,[pv]:i.ONE_MINUS_CONSTANT_ALPHA};function O($,Ae,ae,ue,Re,Fe,gt,Yt,Ln,xt){if($===Ds){g===!0&&(ge(i.BLEND),g=!1);return}if(g===!1&&(xe(i.BLEND),g=!0),$!==Zg){if($!==_||xt!==U){if((m!==Ks||y!==Ks)&&(i.blendEquation(i.FUNC_ADD),m=Ks,y=Ks),xt)switch($){case er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _h:i.blendFunc(i.ONE,i.ONE);break;case Od:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _h:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Od:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}p=null,x=null,w=null,F=null,C.set(0,0,0),R=0,_=$,U=xt}return}Re=Re||Ae,Fe=Fe||ae,gt=gt||ue,(Ae!==m||Re!==y)&&(i.blendEquationSeparate(at[Ae],at[Re]),m=Ae,y=Re),(ae!==p||ue!==x||Fe!==w||gt!==F)&&(i.blendFuncSeparate(nt[ae],nt[ue],nt[Fe],nt[gt]),p=ae,x=ue,w=Fe,F=gt),(Yt.equals(C)===!1||Ln!==R)&&(i.blendColor(Yt.r,Yt.g,Yt.b,Ln),C.copy(Yt),R=Ln),_=$,U=!1}function jt($,Ae){$.side===ai?ge(i.CULL_FACE):xe(i.CULL_FACE);let ae=$.side===qn;Ae&&(ae=!ae),ot(ae),$.blending===er&&$.transparent===!1?O(Ds):O($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),r.setFunc($.depthFunc),r.setTest($.depthTest),r.setMask($.depthWrite),s.setMask($.colorWrite);const ue=$.stencilWrite;a.setTest(ue),ue&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Et($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot($){ne!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),ne=$)}function ft($){$!==jg?(xe(i.CULL_FACE),$!==S&&($===kd?i.cullFace(i.BACK):$===Yg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),S=$}function Ke($){$!==b&&(J&&i.lineWidth($),b=$)}function Et($,Ae,ae){$?(xe(i.POLYGON_OFFSET_FILL),(W!==Ae||B!==ae)&&(i.polygonOffset(Ae,ae),W=Ae,B=ae)):ge(i.POLYGON_OFFSET_FILL)}function Ye($){$?xe(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function D($){$===void 0&&($=i.TEXTURE0+Y-1),ie!==$&&(i.activeTexture($),ie=$)}function E($,Ae,ae){ae===void 0&&(ie===null?ae=i.TEXTURE0+Y-1:ae=ie);let ue=pe[ae];ue===void 0&&(ue={type:void 0,texture:void 0},pe[ae]=ue),(ue.type!==$||ue.texture!==Ae)&&(ie!==ae&&(i.activeTexture(ae),ie=ae),i.bindTexture($,Ae||fe[$]),ue.type=$,ue.texture=Ae)}function ee(){const $=pe[ie];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function ce(){try{i.compressedTexImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function De(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function lt(){try{i.texStorage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function _e(){try{i.texStorage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Le(){try{i.texImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ve(){try{i.texImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function We($){me.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),me.copy($))}function Ee($){he.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),he.copy($))}function et($,Ae){let ae=l.get(Ae);ae===void 0&&(ae=new WeakMap,l.set(Ae,ae));let ue=ae.get($);ue===void 0&&(ue=i.getUniformBlockIndex(Ae,$.name),ae.set($,ue))}function tt($,Ae){const ue=l.get(Ae).get($);o.get(Ae)!==ue&&(i.uniformBlockBinding(Ae,ue,$.__bindingPointIndex),o.set(Ae,ue))}function wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},ie=null,pe={},u={},d=new WeakMap,h=[],f=null,g=!1,_=null,m=null,p=null,x=null,y=null,w=null,F=null,C=new rt(0,0,0),R=0,U=!1,ne=null,S=null,b=null,W=null,B=null,me.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:xe,disable:ge,bindFramebuffer:je,drawBuffers:Ne,useProgram:He,setBlending:O,setMaterial:jt,setFlipSided:ot,setCullFace:ft,setLineWidth:Ke,setPolygonOffset:Et,setScissorTest:Ye,activeTexture:D,bindTexture:E,unbindTexture:ee,compressedTexImage2D:ce,compressedTexImage3D:re,texImage2D:Le,texImage3D:Ve,updateUBOMapping:et,uniformBlockBinding:tt,texStorage2D:lt,texStorage3D:_e,texSubImage2D:q,texSubImage3D:be,compressedTexSubImage2D:ye,compressedTexSubImage3D:De,scissor:We,viewport:Ee,reset:wt}}function Pf(i,e,t,n){const s=QS(n);switch(t){case _m:return i*e;case ym:return i*e;case Mm:return i*e*2;case Du:return i*e/s.components*s.byteLength;case Lu:return i*e/s.components*s.byteLength;case Sm:return i*e*2/s.components*s.byteLength;case Fu:return i*e*2/s.components*s.byteLength;case xm:return i*e*3/s.components*s.byteLength;case $t:return i*e*4/s.components*s.byteLength;case Iu:return i*e*4/s.components*s.byteLength;case pl:case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gl:case vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fh:case Uh:return Math.max(i,16)*Math.max(e,8)/4;case Lh:case Ih:return Math.max(i,8)*Math.max(e,8)/2;case Nh:case kh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $h:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _l:case Qh:case eu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wm:case tu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case nu:case iu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function QS(i){switch(i){case Fi:case mm:return{byteLength:1,components:1};case ao:case gm:case go:return{byteLength:2,components:1};case Ru:case Pu:return{byteLength:2,components:4};case rr:case Cu:case nn:return{byteLength:4,components:1};case vm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ew(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,E){return f?new OffscreenCanvas(D,E):Rl("canvas")}function _(D,E,ee){let ce=1;const re=Ye(D);if((re.width>ee||re.height>ee)&&(ce=ee/Math.max(re.width,re.height)),ce<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const q=Math.floor(ce*re.width),be=Math.floor(ce*re.height);d===void 0&&(d=g(q,be));const ye=E?g(q,be):d;return ye.width=q,ye.height=be,ye.getContext("2d").drawImage(D,0,0,q,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+q+"x"+be+")."),ye}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==ht&&D.minFilter!==_i}function p(D){i.generateMipmap(D)}function x(D,E,ee,ce,re=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let q=E;if(E===i.RED&&(ee===i.FLOAT&&(q=i.R32F),ee===i.HALF_FLOAT&&(q=i.R16F),ee===i.UNSIGNED_BYTE&&(q=i.R8)),E===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(q=i.R8UI),ee===i.UNSIGNED_SHORT&&(q=i.R16UI),ee===i.UNSIGNED_INT&&(q=i.R32UI),ee===i.BYTE&&(q=i.R8I),ee===i.SHORT&&(q=i.R16I),ee===i.INT&&(q=i.R32I)),E===i.RG&&(ee===i.FLOAT&&(q=i.RG32F),ee===i.HALF_FLOAT&&(q=i.RG16F),ee===i.UNSIGNED_BYTE&&(q=i.RG8)),E===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(q=i.RG8UI),ee===i.UNSIGNED_SHORT&&(q=i.RG16UI),ee===i.UNSIGNED_INT&&(q=i.RG32UI),ee===i.BYTE&&(q=i.RG8I),ee===i.SHORT&&(q=i.RG16I),ee===i.INT&&(q=i.RG32I)),E===i.RGB_INTEGER&&(ee===i.UNSIGNED_BYTE&&(q=i.RGB8UI),ee===i.UNSIGNED_SHORT&&(q=i.RGB16UI),ee===i.UNSIGNED_INT&&(q=i.RGB32UI),ee===i.BYTE&&(q=i.RGB8I),ee===i.SHORT&&(q=i.RGB16I),ee===i.INT&&(q=i.RGB32I)),E===i.RGBA_INTEGER&&(ee===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),ee===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),ee===i.UNSIGNED_INT&&(q=i.RGBA32UI),ee===i.BYTE&&(q=i.RGBA8I),ee===i.SHORT&&(q=i.RGBA16I),ee===i.INT&&(q=i.RGBA32I)),E===i.RGB&&ee===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),E===i.RGBA){const be=re?Tl:Ct.getTransfer(ce);ee===i.FLOAT&&(q=i.RGBA32F),ee===i.HALF_FLOAT&&(q=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(q=be===Vt?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(D,E){let ee;return D?E===null||E===rr||E===la?ee=i.DEPTH24_STENCIL8:E===nn?ee=i.DEPTH32F_STENCIL8:E===ao&&(ee=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===rr||E===la?ee=i.DEPTH_COMPONENT24:E===nn?ee=i.DEPTH_COMPONENT32F:E===ao&&(ee=i.DEPTH_COMPONENT16),ee}function w(D,E){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==ht&&D.minFilter!==_i?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function F(D){const E=D.target;E.removeEventListener("dispose",F),R(E),E.isVideoTexture&&u.delete(E)}function C(D){const E=D.target;E.removeEventListener("dispose",C),ne(E)}function R(D){const E=n.get(D);if(E.__webglInit===void 0)return;const ee=D.source,ce=h.get(ee);if(ce){const re=ce[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&U(D),Object.keys(ce).length===0&&h.delete(ee)}n.remove(D)}function U(D){const E=n.get(D);i.deleteTexture(E.__webglTexture);const ee=D.source,ce=h.get(ee);delete ce[E.__cacheKey],a.memory.textures--}function ne(D){const E=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(E.__webglFramebuffer[ce]))for(let re=0;re<E.__webglFramebuffer[ce].length;re++)i.deleteFramebuffer(E.__webglFramebuffer[ce][re]);else i.deleteFramebuffer(E.__webglFramebuffer[ce]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ce])}else{if(Array.isArray(E.__webglFramebuffer))for(let ce=0;ce<E.__webglFramebuffer.length;ce++)i.deleteFramebuffer(E.__webglFramebuffer[ce]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ce=0;ce<E.__webglColorRenderbuffer.length;ce++)E.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ce]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ee=D.textures;for(let ce=0,re=ee.length;ce<re;ce++){const q=n.get(ee[ce]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(ee[ce])}n.remove(D)}let S=0;function b(){S=0}function W(){const D=S;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),S+=1,D}function B(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function Y(D,E){const ee=n.get(D);if(D.isVideoTexture&&Ke(D),D.isRenderTargetTexture===!1&&D.version>0&&ee.__version!==D.version){const ce=D.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(ee,D,E);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+E)}function J(D,E){const ee=n.get(D);if(D.version>0&&ee.__version!==D.version){he(ee,D,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+E)}function K(D,E){const ee=n.get(D);if(D.version>0&&ee.__version!==D.version){he(ee,D,E);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+E)}function k(D,E){const ee=n.get(D);if(D.version>0&&ee.__version!==D.version){se(ee,D,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+E)}const ie={[Ph]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[Dh]:i.MIRRORED_REPEAT},pe={[ht]:i.NEAREST,[bv]:i.NEAREST_MIPMAP_NEAREST,[Ao]:i.NEAREST_MIPMAP_LINEAR,[_i]:i.LINEAR,[Ec]:i.LINEAR_MIPMAP_NEAREST,[Rs]:i.LINEAR_MIPMAP_LINEAR},le={[Rv]:i.NEVER,[Uv]:i.ALWAYS,[Pv]:i.LESS,[bm]:i.LEQUAL,[Dv]:i.EQUAL,[Iv]:i.GEQUAL,[Lv]:i.GREATER,[Fv]:i.NOTEQUAL};function oe(D,E){if(E.type===nn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===_i||E.magFilter===Ec||E.magFilter===Ao||E.magFilter===Rs||E.minFilter===_i||E.minFilter===Ec||E.minFilter===Ao||E.minFilter===Rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,ie[E.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,ie[E.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,ie[E.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,pe[E.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,pe[E.minFilter]),E.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,le[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ht||E.minFilter!==Ao&&E.minFilter!==Rs||E.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function me(D,E){let ee=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",F));const ce=E.source;let re=h.get(ce);re===void 0&&(re={},h.set(ce,re));const q=B(E);if(q!==D.__cacheKey){re[q]===void 0&&(re[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ee=!0),re[q].usedTimes++;const be=re[D.__cacheKey];be!==void 0&&(re[D.__cacheKey].usedTimes--,be.usedTimes===0&&U(E)),D.__cacheKey=q,D.__webglTexture=re[q].texture}return ee}function he(D,E,ee){let ce=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ce=i.TEXTURE_3D);const re=me(D,E),q=E.source;t.bindTexture(ce,D.__webglTexture,i.TEXTURE0+ee);const be=n.get(q);if(q.version!==be.__version||re===!0){t.activeTexture(i.TEXTURE0+ee);const ye=Ct.getPrimaries(Ct.workingColorSpace),De=E.colorSpace===Es?null:Ct.getPrimaries(E.colorSpace),lt=E.colorSpace===Es||ye===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let _e=_(E.image,!1,s.maxTextureSize);_e=Et(E,_e);const Le=r.convert(E.format,E.colorSpace),Ve=r.convert(E.type);let We=x(E.internalFormat,Le,Ve,E.colorSpace,E.isVideoTexture);oe(ce,E);let Ee;const et=E.mipmaps,tt=E.isVideoTexture!==!0,wt=be.__version===void 0||re===!0,$=q.dataReady,Ae=w(E,_e);if(E.isDepthTexture)We=y(E.format===ca,E.type),wt&&(tt?t.texStorage2D(i.TEXTURE_2D,1,We,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,We,_e.width,_e.height,0,Le,Ve,null));else if(E.isDataTexture)if(et.length>0){tt&&wt&&t.texStorage2D(i.TEXTURE_2D,Ae,We,et[0].width,et[0].height);for(let ae=0,ue=et.length;ae<ue;ae++)Ee=et[ae],tt?$&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ee.width,Ee.height,Le,Ve,Ee.data):t.texImage2D(i.TEXTURE_2D,ae,We,Ee.width,Ee.height,0,Le,Ve,Ee.data);E.generateMipmaps=!1}else tt?(wt&&t.texStorage2D(i.TEXTURE_2D,Ae,We,_e.width,_e.height),$&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,Le,Ve,_e.data)):t.texImage2D(i.TEXTURE_2D,0,We,_e.width,_e.height,0,Le,Ve,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){tt&&wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,We,et[0].width,et[0].height,_e.depth);for(let ae=0,ue=et.length;ae<ue;ae++)if(Ee=et[ae],E.format!==$t)if(Le!==null)if(tt){if($)if(E.layerUpdates.size>0){const Re=Pf(Ee.width,Ee.height,E.format,E.type);for(const Fe of E.layerUpdates){const gt=Ee.data.subarray(Fe*Re/Ee.data.BYTES_PER_ELEMENT,(Fe+1)*Re/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Fe,Ee.width,Ee.height,1,Le,gt,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Ee.width,Ee.height,_e.depth,Le,Ee.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,We,Ee.width,Ee.height,_e.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?$&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Ee.width,Ee.height,_e.depth,Le,Ve,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,We,Ee.width,Ee.height,_e.depth,0,Le,Ve,Ee.data)}else{tt&&wt&&t.texStorage2D(i.TEXTURE_2D,Ae,We,et[0].width,et[0].height);for(let ae=0,ue=et.length;ae<ue;ae++)Ee=et[ae],E.format!==$t?Le!==null?tt?$&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Ee.width,Ee.height,Le,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,We,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?$&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ee.width,Ee.height,Le,Ve,Ee.data):t.texImage2D(i.TEXTURE_2D,ae,We,Ee.width,Ee.height,0,Le,Ve,Ee.data)}else if(E.isDataArrayTexture)if(tt){if(wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,We,_e.width,_e.height,_e.depth),$)if(E.layerUpdates.size>0){const ae=Pf(_e.width,_e.height,E.format,E.type);for(const ue of E.layerUpdates){const Re=_e.data.subarray(ue*ae/_e.data.BYTES_PER_ELEMENT,(ue+1)*ae/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,_e.width,_e.height,1,Le,Ve,Re)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Le,Ve,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,_e.width,_e.height,_e.depth,0,Le,Ve,_e.data);else if(E.isData3DTexture)tt?(wt&&t.texStorage3D(i.TEXTURE_3D,Ae,We,_e.width,_e.height,_e.depth),$&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Le,Ve,_e.data)):t.texImage3D(i.TEXTURE_3D,0,We,_e.width,_e.height,_e.depth,0,Le,Ve,_e.data);else if(E.isFramebufferTexture){if(wt)if(tt)t.texStorage2D(i.TEXTURE_2D,Ae,We,_e.width,_e.height);else{let ae=_e.width,ue=_e.height;for(let Re=0;Re<Ae;Re++)t.texImage2D(i.TEXTURE_2D,Re,We,ae,ue,0,Le,Ve,null),ae>>=1,ue>>=1}}else if(et.length>0){if(tt&&wt){const ae=Ye(et[0]);t.texStorage2D(i.TEXTURE_2D,Ae,We,ae.width,ae.height)}for(let ae=0,ue=et.length;ae<ue;ae++)Ee=et[ae],tt?$&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Le,Ve,Ee):t.texImage2D(i.TEXTURE_2D,ae,We,Le,Ve,Ee);E.generateMipmaps=!1}else if(tt){if(wt){const ae=Ye(_e);t.texStorage2D(i.TEXTURE_2D,Ae,We,ae.width,ae.height)}$&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,Ve,_e)}else t.texImage2D(i.TEXTURE_2D,0,We,Le,Ve,_e);m(E)&&p(ce),be.__version=q.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function se(D,E,ee){if(E.image.length!==6)return;const ce=me(D,E),re=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+ee);const q=n.get(re);if(re.version!==q.__version||ce===!0){t.activeTexture(i.TEXTURE0+ee);const be=Ct.getPrimaries(Ct.workingColorSpace),ye=E.colorSpace===Es?null:Ct.getPrimaries(E.colorSpace),De=E.colorSpace===Es||be===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const lt=E.isCompressedTexture||E.image[0].isCompressedTexture,_e=E.image[0]&&E.image[0].isDataTexture,Le=[];for(let ue=0;ue<6;ue++)!lt&&!_e?Le[ue]=_(E.image[ue],!0,s.maxCubemapSize):Le[ue]=_e?E.image[ue].image:E.image[ue],Le[ue]=Et(E,Le[ue]);const Ve=Le[0],We=r.convert(E.format,E.colorSpace),Ee=r.convert(E.type),et=x(E.internalFormat,We,Ee,E.colorSpace),tt=E.isVideoTexture!==!0,wt=q.__version===void 0||ce===!0,$=re.dataReady;let Ae=w(E,Ve);oe(i.TEXTURE_CUBE_MAP,E);let ae;if(lt){tt&&wt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,et,Ve.width,Ve.height);for(let ue=0;ue<6;ue++){ae=Le[ue].mipmaps;for(let Re=0;Re<ae.length;Re++){const Fe=ae[Re];E.format!==$t?We!==null?tt?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,0,0,Fe.width,Fe.height,We,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,et,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,0,0,Fe.width,Fe.height,We,Ee,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,et,Fe.width,Fe.height,0,We,Ee,Fe.data)}}}else{if(ae=E.mipmaps,tt&&wt){ae.length>0&&Ae++;const ue=Ye(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,et,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(_e){tt?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Le[ue].width,Le[ue].height,We,Ee,Le[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,et,Le[ue].width,Le[ue].height,0,We,Ee,Le[ue].data);for(let Re=0;Re<ae.length;Re++){const gt=ae[Re].image[ue].image;tt?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,0,0,gt.width,gt.height,We,Ee,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,et,gt.width,gt.height,0,We,Ee,gt.data)}}else{tt?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,We,Ee,Le[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,et,We,Ee,Le[ue]);for(let Re=0;Re<ae.length;Re++){const Fe=ae[Re];tt?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,0,0,We,Ee,Fe.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,et,We,Ee,Fe.image[ue])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),q.__version=re.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function fe(D,E,ee,ce,re,q){const be=r.convert(ee.format,ee.colorSpace),ye=r.convert(ee.type),De=x(ee.internalFormat,be,ye,ee.colorSpace);if(!n.get(E).__hasExternalTextures){const _e=Math.max(1,E.width>>q),Le=Math.max(1,E.height>>q);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,q,De,_e,Le,E.depth,0,be,ye,null):t.texImage2D(re,q,De,_e,Le,0,be,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),ft(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,re,n.get(ee).__webglTexture,0,ot(E)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,re,n.get(ee).__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(D,E,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,D),E.depthBuffer){const ce=E.depthTexture,re=ce&&ce.isDepthTexture?ce.type:null,q=y(E.stencilBuffer,re),be=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=ot(E);ft(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,q,E.width,E.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,q,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,q,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,D)}else{const ce=E.textures;for(let re=0;re<ce.length;re++){const q=ce[re],be=r.convert(q.format,q.colorSpace),ye=r.convert(q.type),De=x(q.internalFormat,be,ye,q.colorSpace),lt=ot(E);ee&&ft(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,De,E.width,E.height):ft(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,De,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,De,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const ce=n.get(E.depthTexture).__webglTexture,re=ot(E);if(E.depthTexture.format===Qr)ft(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(E.depthTexture.format===ca)ft(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function je(D){const E=n.get(D),ee=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const ce=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ce){const re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ce.removeEventListener("dispose",re)};ce.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=ce}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");ge(E.__webglFramebuffer,D)}else if(ee){E.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ce]),E.__webglDepthbuffer[ce]===void 0)E.__webglDepthbuffer[ce]=i.createRenderbuffer(),xe(E.__webglDepthbuffer[ce],D,!1);else{const re=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[ce];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),xe(E.__webglDepthbuffer,D,!1);else{const ce=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(D,E,ee){const ce=n.get(D);E!==void 0&&fe(ce.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&je(D)}function He(D){const E=D.texture,ee=n.get(D),ce=n.get(E);D.addEventListener("dispose",C);const re=D.textures,q=D.isWebGLCubeRenderTarget===!0,be=re.length>1;if(be||(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=E.version,a.memory.textures++),q){ee.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer[ye]=[];for(let De=0;De<E.mipmaps.length;De++)ee.__webglFramebuffer[ye][De]=i.createFramebuffer()}else ee.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ye=0;ye<E.mipmaps.length;ye++)ee.__webglFramebuffer[ye]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(be)for(let ye=0,De=re.length;ye<De;ye++){const lt=n.get(re[ye]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&ft(D)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ye=0;ye<re.length;ye++){const De=re[ye];ee.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[ye]);const lt=r.convert(De.format,De.colorSpace),_e=r.convert(De.type),Le=x(De.internalFormat,lt,_e,De.colorSpace,D.isXRRenderTarget===!0),Ve=ot(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Le,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,ee.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(ee.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),oe(i.TEXTURE_CUBE_MAP,E);for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0)for(let De=0;De<E.mipmaps.length;De++)fe(ee.__webglFramebuffer[ye][De],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De);else fe(ee.__webglFramebuffer[ye],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ye=0,De=re.length;ye<De;ye++){const lt=re[ye],_e=n.get(lt);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),oe(i.TEXTURE_2D,lt),fe(ee.__webglFramebuffer,D,lt,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),m(lt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ye=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,ce.__webglTexture),oe(ye,E),E.mipmaps&&E.mipmaps.length>0)for(let De=0;De<E.mipmaps.length;De++)fe(ee.__webglFramebuffer[De],D,E,i.COLOR_ATTACHMENT0,ye,De);else fe(ee.__webglFramebuffer,D,E,i.COLOR_ATTACHMENT0,ye,0);m(E)&&p(ye),t.unbindTexture()}D.depthBuffer&&je(D)}function at(D){const E=D.textures;for(let ee=0,ce=E.length;ee<ce;ee++){const re=E[ee];if(m(re)){const q=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,be=n.get(re).__webglTexture;t.bindTexture(q,be),p(q),t.unbindTexture()}}}const nt=[],O=[];function jt(D){if(D.samples>0){if(ft(D)===!1){const E=D.textures,ee=D.width,ce=D.height;let re=i.COLOR_BUFFER_BIT;const q=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(D),ye=E.length>1;if(ye)for(let De=0;De<E.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let De=0;De<E.length;De++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[De]);const lt=n.get(E[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,ee,ce,0,0,ee,ce,re,i.NEAREST),l===!0&&(nt.length=0,O.length=0,nt.push(i.COLOR_ATTACHMENT0+De),D.depthBuffer&&D.resolveDepthBuffer===!1&&(nt.push(q),O.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let De=0;De<E.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,be.__webglColorRenderbuffer[De]);const lt=n.get(E[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,lt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const E=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ot(D){return Math.min(s.maxSamples,D.samples)}function ft(D){const E=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ke(D){const E=a.render.frame;u.get(D)!==E&&(u.set(D,E),D.update())}function Et(D,E){const ee=D.colorSpace,ce=D.format,re=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ee!==Us&&ee!==Es&&(Ct.getTransfer(ee)===Vt?(ce!==$t||re!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),E}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=b,this.setTexture2D=Y,this.setTexture2DArray=J,this.setTexture3D=K,this.setTextureCube=k,this.rebindTextures=Ne,this.setupRenderTarget=He,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ft}function tw(i,e){function t(n,s=Es){let r;const a=Ct.getTransfer(s);if(n===Fi)return i.UNSIGNED_BYTE;if(n===Ru)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mm)return i.BYTE;if(n===gm)return i.SHORT;if(n===ao)return i.UNSIGNED_SHORT;if(n===Cu)return i.INT;if(n===rr)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===go)return i.HALF_FLOAT;if(n===_m)return i.ALPHA;if(n===xm)return i.RGB;if(n===$t)return i.RGBA;if(n===ym)return i.LUMINANCE;if(n===Mm)return i.LUMINANCE_ALPHA;if(n===Qr)return i.DEPTH_COMPONENT;if(n===ca)return i.DEPTH_STENCIL;if(n===Du)return i.RED;if(n===Lu)return i.RED_INTEGER;if(n===Sm)return i.RG;if(n===Fu)return i.RG_INTEGER;if(n===Iu)return i.RGBA_INTEGER;if(n===pl||n===ml||n===gl||n===vl)if(a===Vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ml)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lh||n===Fh||n===Ih||n===Uh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ih)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nh||n===kh||n===Oh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nh||n===kh)return a===Vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zh||n===Bh||n===Hh||n===Vh||n===Gh||n===Wh||n===$h||n===Xh||n===qh||n===jh||n===Yh||n===Kh||n===Zh||n===Jh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$h)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_l||n===Qh||n===eu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_l)return a===Vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wm||n===tu||n===nu||n===iu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_l)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===iu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===la?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class nw extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rs extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iw={type:"move"};class eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iw)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const sw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rw=`
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

}`;class aw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Nn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hs({vertexShader:sw,fragmentShader:rw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new fr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ow extends ur{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=new aw,m=t.getContextAttributes();let p=null,x=null;const y=[],w=[],F=new we;let C=null;const R=new vi;R.layers.enable(1),R.viewport=new Qt;const U=new vi;U.layers.enable(2),U.viewport=new Qt;const ne=[R,U],S=new nw;S.layers.enable(1),S.layers.enable(2);let b=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let fe=y[se];return fe===void 0&&(fe=new eh,y[se]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(se){let fe=y[se];return fe===void 0&&(fe=new eh,y[se]=fe),fe.getGripSpace()},this.getHand=function(se){let fe=y[se];return fe===void 0&&(fe=new eh,y[se]=fe),fe.getHandSpace()};function B(se){const fe=w.indexOf(se.inputSource);if(fe===-1)return;const xe=y[fe];xe!==void 0&&(xe.update(se.inputSource,se.frame,c||a),xe.dispatchEvent({type:se.type,data:se.inputSource}))}function Y(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",J);for(let se=0;se<y.length;se++){const fe=w[se];fe!==null&&(w[se]=null,y[se].disconnect(fe))}b=null,W=null,_.reset(),e.setRenderTarget(p),f=null,h=null,d=null,s=null,x=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(F),s.renderState.layers===void 0){const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Jn(f.framebufferWidth,f.framebufferHeight,{format:$t,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,xe=null,ge=null;m.depth&&(ge=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?ca:Qr,xe=m.stencil?la:rr);const je={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(je),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Jn(h.textureWidth,h.textureHeight,{format:$t,type:Fi,depthTexture:new Nm(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),he.setContext(s),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(se){for(let fe=0;fe<se.removed.length;fe++){const xe=se.removed[fe],ge=w.indexOf(xe);ge>=0&&(w[ge]=null,y[ge].disconnect(xe))}for(let fe=0;fe<se.added.length;fe++){const xe=se.added[fe];let ge=w.indexOf(xe);if(ge===-1){for(let Ne=0;Ne<y.length;Ne++)if(Ne>=w.length){w.push(xe),ge=Ne;break}else if(w[Ne]===null){w[Ne]=xe,ge=Ne;break}if(ge===-1)break}const je=y[ge];je&&je.connect(xe)}}const K=new z,k=new z;function ie(se,fe,xe){K.setFromMatrixPosition(fe.matrixWorld),k.setFromMatrixPosition(xe.matrixWorld);const ge=K.distanceTo(k),je=fe.projectionMatrix.elements,Ne=xe.projectionMatrix.elements,He=je[14]/(je[10]-1),at=je[14]/(je[10]+1),nt=(je[9]+1)/je[5],O=(je[9]-1)/je[5],jt=(je[8]-1)/je[0],ot=(Ne[8]+1)/Ne[0],ft=He*jt,Ke=He*ot,Et=ge/(-jt+ot),Ye=Et*-jt;if(fe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Ye),se.translateZ(Et),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),je[10]===-1)se.projectionMatrix.copy(fe.projectionMatrix),se.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const D=He+Et,E=at+Et,ee=ft-Ye,ce=Ke+(ge-Ye),re=nt*at/E*D,q=O*at/E*D;se.projectionMatrix.makePerspective(ee,ce,re,q,D,E),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function pe(se,fe){fe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(fe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let fe=se.near,xe=se.far;_.texture!==null&&(_.depthNear>0&&(fe=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),S.near=U.near=R.near=fe,S.far=U.far=R.far=xe,(b!==S.near||W!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,W=S.far);const ge=se.parent,je=S.cameras;pe(S,ge);for(let Ne=0;Ne<je.length;Ne++)pe(je[Ne],ge);je.length===2?ie(S,R,U):S.projectionMatrix.copy(R.projectionMatrix),le(se,S,ge)};function le(se,fe,xe){xe===null?se.matrix.copy(fe.matrixWorld):(se.matrix.copy(xe.matrixWorld),se.matrix.invert(),se.matrix.multiply(fe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(fe.projectionMatrix),se.projectionMatrixInverse.copy(fe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=oo*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(se){l=se,h!==null&&(h.fixedFoveation=se),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=se)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let oe=null;function me(se,fe){if(u=fe.getViewerPose(c||a),g=fe,u!==null){const xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ge=!1;xe.length!==S.cameras.length&&(S.cameras.length=0,ge=!0);for(let Ne=0;Ne<xe.length;Ne++){const He=xe[Ne];let at=null;if(f!==null)at=f.getViewport(He);else{const O=d.getViewSubImage(h,He);at=O.viewport,Ne===0&&(e.setRenderTargetTextures(x,O.colorTexture,h.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(x))}let nt=ne[Ne];nt===void 0&&(nt=new vi,nt.layers.enable(Ne),nt.viewport=new Qt,ne[Ne]=nt),nt.matrix.fromArray(He.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(He.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(at.x,at.y,at.width,at.height),Ne===0&&(S.matrix.copy(nt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ge===!0&&S.cameras.push(nt)}const je=s.enabledFeatures;if(je&&je.includes("depth-sensing")){const Ne=d.getDepthInformation(xe[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(e,Ne,s.renderState)}}for(let xe=0;xe<y.length;xe++){const ge=w[xe],je=y[xe];ge!==null&&je!==void 0&&je.update(ge,fe,c||a)}oe&&oe(se,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),g=null}const he=new Um;he.setAnimationLoop(me),this.setAnimationLoop=function(se){oe=se},this.dispose=function(){}}}const Xs=new cs,lw=new It;function cw(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Dm(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,w=x.envMapRotation;y&&(m.envMap.value=y,Xs.copy(w),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),m.envMapRotation.value.setFromMatrix4(lw.makeRotationFromEuler(Xs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hw(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const w=y.program;n.uniformBlockBinding(x,w)}function c(x,y){let w=s[x.id];w===void 0&&(g(x),w=u(x),s[x.id]=w,x.addEventListener("dispose",m));const F=y.program;n.updateUBOMapping(x,F);const C=e.render.frame;r[x.id]!==C&&(h(x),r[x.id]=C)}function u(x){const y=d();x.__bindingPointIndex=y;const w=i.createBuffer(),F=x.__size,C=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,F,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,w),w}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const y=s[x.id],w=x.uniforms,F=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,R=w.length;C<R;C++){const U=Array.isArray(w[C])?w[C]:[w[C]];for(let ne=0,S=U.length;ne<S;ne++){const b=U[ne];if(f(b,C,ne,F)===!0){const W=b.__offset,B=Array.isArray(b.value)?b.value:[b.value];let Y=0;for(let J=0;J<B.length;J++){const K=B[J],k=_(K);typeof K=="number"||typeof K=="boolean"?(b.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,W+Y,b.__data)):K.isMatrix3?(b.__data[0]=K.elements[0],b.__data[1]=K.elements[1],b.__data[2]=K.elements[2],b.__data[3]=0,b.__data[4]=K.elements[3],b.__data[5]=K.elements[4],b.__data[6]=K.elements[5],b.__data[7]=0,b.__data[8]=K.elements[6],b.__data[9]=K.elements[7],b.__data[10]=K.elements[8],b.__data[11]=0):(K.toArray(b.__data,Y),Y+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,y,w,F){const C=x.value,R=y+"_"+w;if(F[R]===void 0)return typeof C=="number"||typeof C=="boolean"?F[R]=C:F[R]=C.clone(),!0;{const U=F[R];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return F[R]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(x){const y=x.uniforms;let w=0;const F=16;for(let R=0,U=y.length;R<U;R++){const ne=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,b=ne.length;S<b;S++){const W=ne[S],B=Array.isArray(W.value)?W.value:[W.value];for(let Y=0,J=B.length;Y<J;Y++){const K=B[Y],k=_(K),ie=w%F,pe=ie%k.boundary,le=ie+pe;w+=pe,le!==0&&F-le<k.storage&&(w+=F-le),W.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=k.storage}}}const C=w%F;return C>0&&(w+=F-C),x.__size=w,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class uw{constructor(e={}){const{canvas:t=Jv(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this.toneMapping=Ls,this.toneMappingExposure=1;const y=this;let w=!1,F=0,C=0,R=null,U=-1,ne=null;const S=new Qt,b=new Qt;let W=null;const B=new rt(0);let Y=0,J=t.width,K=t.height,k=1,ie=null,pe=null;const le=new Qt(0,0,J,K),oe=new Qt(0,0,J,K);let me=!1;const he=new Im;let se=!1,fe=!1;const xe=new It,ge=new It,je=new z,Ne=new Qt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function nt(){return R===null?k:1}let O=n;function jt(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Au}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),O===null){const X="webgl2";if(O=jt(X,A),O===null)throw jt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ot,ft,Ke,Et,Ye,D,E,ee,ce,re,q,be,ye,De,lt,_e,Le,Ve,We,Ee,et,tt,wt,$;function Ae(){ot=new gM(O),ot.init(),tt=new tw(O,ot),ft=new hM(O,ot,e,tt),Ke=new JS(O),ft.reverseDepthBuffer&&Ke.buffers.depth.setReversed(!0),Et=new xM(O),Ye=new kS,D=new ew(O,ot,Ke,Ye,ft,tt,Et),E=new dM(y),ee=new mM(y),ce=new E_(O),wt=new lM(O,ce),re=new vM(O,ce,Et,wt),q=new MM(O,re,ce,Et),We=new yM(O,ft,D),_e=new uM(Ye),be=new NS(y,E,ee,ot,ft,wt,_e),ye=new cw(y,Ye),De=new zS,lt=new $S(ot),Ve=new oM(y,E,ee,Ke,q,h,l),Le=new KS(y,q,ft),$=new hw(O,Et,ft,Ke),Ee=new cM(O,ot,Et),et=new _M(O,ot,Et),Et.programs=be.programs,y.capabilities=ft,y.extensions=ot,y.properties=Ye,y.renderLists=De,y.shadowMap=Le,y.state=Ke,y.info=Et}Ae();const ae=new ow(y,O);this.xr=ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(J,K,!1))},this.getSize=function(A){return A.set(J,K)},this.setSize=function(A,X,Z=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=A,K=X,t.width=Math.floor(A*k),t.height=Math.floor(X*k),Z===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(J*k,K*k).floor()},this.setDrawingBufferSize=function(A,X,Z){J=A,K=X,k=Z,t.width=Math.floor(A*Z),t.height=Math.floor(X*Z),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,X,Z,Q){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,X,Z,Q),Ke.viewport(S.copy(le).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(oe)},this.setScissor=function(A,X,Z,Q){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,X,Z,Q),Ke.scissor(b.copy(oe).multiplyScalar(k).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(A){Ke.setScissorTest(me=A)},this.setOpaqueSort=function(A){ie=A},this.setTransparentSort=function(A){pe=A},this.getClearColor=function(A){return A.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(A=!0,X=!0,Z=!0){let Q=0;if(A){let G=!1;if(R!==null){const Me=R.texture.format;G=Me===Iu||Me===Fu||Me===Lu}if(G){const Me=R.texture.type,Te=Me===Fi||Me===rr||Me===ao||Me===la||Me===Ru||Me===Pu,ke=Ve.getClearColor(),Be=Ve.getClearAlpha(),Ze=ke.r,Je=ke.g,ze=ke.b;Te?(f[0]=Ze,f[1]=Je,f[2]=ze,f[3]=Be,O.clearBufferuiv(O.COLOR,0,f)):(g[0]=Ze,g[1]=Je,g[2]=ze,g[3]=Be,O.clearBufferiv(O.COLOR,0,g))}else Q|=O.COLOR_BUFFER_BIT}X&&(Q|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Z&&(Q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),De.dispose(),lt.dispose(),Ye.dispose(),E.dispose(),ee.dispose(),q.dispose(),wt.dispose(),$.dispose(),be.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",un),ae.removeEventListener("sessionend",Qn),Yn.stop()};function ue(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=Et.autoReset,X=Le.enabled,Z=Le.autoUpdate,Q=Le.needsUpdate,G=Le.type;Ae(),Et.autoReset=A,Le.enabled=X,Le.autoUpdate=Z,Le.needsUpdate=Q,Le.type=G}function Fe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gt(A){const X=A.target;X.removeEventListener("dispose",gt),Yt(X)}function Yt(A){Ln(A),Ye.remove(A)}function Ln(A){const X=Ye.get(A).programs;X!==void 0&&(X.forEach(function(Z){be.releaseProgram(Z)}),A.isShaderMaterial&&be.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,Z,Q,G,Me){X===null&&(X=He);const Te=G.isMesh&&G.matrixWorld.determinant()<0,ke=ji(A,X,Z,Q,G);Ke.setMaterial(Q,Te);let Be=Z.index,Ze=1;if(Q.wireframe===!0){if(Be=re.getWireframeAttribute(Z),Be===void 0)return;Ze=2}const Je=Z.drawRange,ze=Z.attributes.position;let yt=Je.start*Ze,Pt=(Je.start+Je.count)*Ze;Me!==null&&(yt=Math.max(yt,Me.start*Ze),Pt=Math.min(Pt,(Me.start+Me.count)*Ze)),Be!==null?(yt=Math.max(yt,0),Pt=Math.min(Pt,Be.count)):ze!=null&&(yt=Math.max(yt,0),Pt=Math.min(Pt,ze.count));const kt=Pt-yt;if(kt<0||kt===1/0)return;wt.setup(G,Q,ke,Z,Be);let En,vt=Ee;if(Be!==null&&(En=ce.get(Be),vt=et,vt.setIndex(En)),G.isMesh)Q.wireframe===!0?(Ke.setLineWidth(Q.wireframeLinewidth*nt()),vt.setMode(O.LINES)):vt.setMode(O.TRIANGLES);else if(G.isLine){let Ge=Q.linewidth;Ge===void 0&&(Ge=1),Ke.setLineWidth(Ge*nt()),G.isLineSegments?vt.setMode(O.LINES):G.isLineLoop?vt.setMode(O.LINE_LOOP):vt.setMode(O.LINE_STRIP)}else G.isPoints?vt.setMode(O.POINTS):G.isSprite&&vt.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)vt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))vt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ge=G._multiDrawStarts,tn=G._multiDrawCounts,it=G._multiDrawCount,Kn=Be?ce.get(Be).bytesPerElement:1,Yi=Ye.get(Q).currentProgram.getUniforms();for(let An=0;An<it;An++)Yi.setValue(O,"_gl_DrawID",An),vt.render(Ge[An]/Kn,tn[An])}else if(G.isInstancedMesh)vt.renderInstances(yt,kt,G.count);else if(Z.isInstancedBufferGeometry){const Ge=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,tn=Math.min(Z.instanceCount,Ge);vt.renderInstances(yt,kt,tn)}else vt.render(yt,kt)};function xt(A,X,Z){A.transparent===!0&&A.side===ai&&A.forceSinglePass===!1?(A.side=qn,A.needsUpdate=!0,Ns(A,X,Z),A.side=Fs,A.needsUpdate=!0,Ns(A,X,Z),A.side=ai):Ns(A,X,Z)}this.compile=function(A,X,Z=null){Z===null&&(Z=A),m=lt.get(Z),m.init(X),x.push(m),Z.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),A!==Z&&A.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const Q=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Me=G.material;if(Me)if(Array.isArray(Me))for(let Te=0;Te<Me.length;Te++){const ke=Me[Te];xt(ke,Z,G),Q.add(ke)}else xt(Me,Z,G),Q.add(Me)}),x.pop(),m=null,Q},this.compileAsync=function(A,X,Z=null){const Q=this.compile(A,X,Z);return new Promise(G=>{function Me(){if(Q.forEach(function(Te){Ye.get(Te).currentProgram.isReady()&&Q.delete(Te)}),Q.size===0){G(A);return}setTimeout(Me,10)}ot.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Fn=null;function Tn(A){Fn&&Fn(A)}function un(){Yn.stop()}function Qn(){Yn.start()}const Yn=new Um;Yn.setAnimationLoop(Tn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(A){Fn=A,ae.setAnimationLoop(A),A===null?Yn.stop():Yn.start()},ae.addEventListener("sessionstart",un),ae.addEventListener("sessionend",Qn),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(X),X=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,X,R),m=lt.get(A,x.length),m.init(X),x.push(m),ge.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),he.setFromProjectionMatrix(ge),fe=this.localClippingEnabled,se=_e.init(this.clippingPlanes,fe),_=De.get(A,p.length),_.init(),p.push(_),ae.enabled===!0&&ae.isPresenting===!0){const Me=y.xr.getDepthSensingMesh();Me!==null&&Ii(Me,X,-1/0,y.sortObjects)}Ii(A,X,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(ie,pe),at=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,at&&Ve.addToRenderList(_,A),this.info.render.frame++,se===!0&&_e.beginShadows();const Z=m.state.shadowsArray;Le.render(Z,A,X),se===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=_.opaque,G=_.transmissive;if(m.setupLights(),X.isArrayCamera){const Me=X.cameras;if(G.length>0)for(let Te=0,ke=Me.length;Te<ke;Te++){const Be=Me[Te];qi(Q,G,A,Be)}at&&Ve.render(A);for(let Te=0,ke=Me.length;Te<ke;Te++){const Be=Me[Te];kn(_,A,Be,Be.viewport)}}else G.length>0&&qi(Q,G,A,X),at&&Ve.render(A),kn(_,A,X);R!==null&&(D.updateMultisampleRenderTarget(R),D.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(y,A,X),wt.resetDefaultState(),U=-1,ne=null,x.pop(),x.length>0?(m=x[x.length-1],se===!0&&_e.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ii(A,X,Z,Q){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||he.intersectsSprite(A)){Q&&Ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ge);const Te=q.update(A),ke=A.material;ke.visible&&_.push(A,Te,ke,Z,Ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||he.intersectsObject(A))){const Te=q.update(A),ke=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ne.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ne.copy(Te.boundingSphere.center)),Ne.applyMatrix4(A.matrixWorld).applyMatrix4(ge)),Array.isArray(ke)){const Be=Te.groups;for(let Ze=0,Je=Be.length;Ze<Je;Ze++){const ze=Be[Ze],yt=ke[ze.materialIndex];yt&&yt.visible&&_.push(A,Te,yt,Z,Ne.z,ze)}}else ke.visible&&_.push(A,Te,ke,Z,Ne.z,null)}}const Me=A.children;for(let Te=0,ke=Me.length;Te<ke;Te++)Ii(Me[Te],X,Z,Q)}function kn(A,X,Z,Q){const G=A.opaque,Me=A.transmissive,Te=A.transparent;m.setupLightsView(Z),se===!0&&_e.setGlobalState(y.clippingPlanes,Z),Q&&Ke.viewport(S.copy(Q)),G.length>0&&yi(G,X,Z),Me.length>0&&yi(Me,X,Z),Te.length>0&&yi(Te,X,Z),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function qi(A,X,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new Jn(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?go:Fi,minFilter:Rs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Me=m.state.transmissionRenderTarget[Q.id],Te=Q.viewport||S;Me.setSize(Te.z,Te.w);const ke=y.getRenderTarget();y.setRenderTarget(Me),y.getClearColor(B),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),at&&Ve.render(Z);const Be=y.toneMapping;y.toneMapping=Ls;const Ze=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),se===!0&&_e.setGlobalState(y.clippingPlanes,Q),yi(A,Z,Q),D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ze=0,yt=X.length;ze<yt;ze++){const Pt=X[ze],kt=Pt.object,En=Pt.geometry,vt=Pt.material,Ge=Pt.group;if(vt.side===ai&&kt.layers.test(Q.layers)){const tn=vt.side;vt.side=qn,vt.needsUpdate=!0,Sa(kt,Z,Q,En,vt,Ge),vt.side=tn,vt.needsUpdate=!0,Je=!0}}Je===!0&&(D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me))}y.setRenderTarget(ke),y.setClearColor(B,Y),Ze!==void 0&&(Q.viewport=Ze),y.toneMapping=Be}function yi(A,X,Z){const Q=X.isScene===!0?X.overrideMaterial:null;for(let G=0,Me=A.length;G<Me;G++){const Te=A[G],ke=Te.object,Be=Te.geometry,Ze=Q===null?Te.material:Q,Je=Te.group;ke.layers.test(Z.layers)&&Sa(ke,X,Z,Be,Ze,Je)}}function Sa(A,X,Z,Q,G,Me){A.onBeforeRender(y,X,Z,Q,G,Me),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(y,X,Z,Q,A,Me),G.transparent===!0&&G.side===ai&&G.forceSinglePass===!1?(G.side=qn,G.needsUpdate=!0,y.renderBufferDirect(Z,X,Q,G,A,Me),G.side=Fs,G.needsUpdate=!0,y.renderBufferDirect(Z,X,Q,G,A,Me),G.side=ai):y.renderBufferDirect(Z,X,Q,G,A,Me),A.onAfterRender(y,X,Z,Q,G,Me)}function Ns(A,X,Z){X.isScene!==!0&&(X=He);const Q=Ye.get(A),G=m.state.lights,Me=m.state.shadowsArray,Te=G.state.version,ke=be.getParameters(A,G.state,Me,X,Z),Be=be.getProgramCacheKey(ke);let Ze=Q.programs;Q.environment=A.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(A.isMeshStandardMaterial?ee:E).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",gt),Ze=new Map,Q.programs=Ze);let Je=Ze.get(Be);if(Je!==void 0){if(Q.currentProgram===Je&&Q.lightsStateVersion===Te)return Mo(A,ke),Je}else ke.uniforms=be.getUniforms(A),A.onBeforeCompile(ke,y),Je=be.acquireProgram(ke,Be),Ze.set(Be,Je),Q.uniforms=ke.uniforms;const ze=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=_e.uniform),Mo(A,ke),Q.needsLights=ks(A),Q.lightsStateVersion=Te,Q.needsLights&&(ze.ambientLightColor.value=G.state.ambient,ze.lightProbe.value=G.state.probe,ze.directionalLights.value=G.state.directional,ze.directionalLightShadows.value=G.state.directionalShadow,ze.spotLights.value=G.state.spot,ze.spotLightShadows.value=G.state.spotShadow,ze.rectAreaLights.value=G.state.rectArea,ze.ltc_1.value=G.state.rectAreaLTC1,ze.ltc_2.value=G.state.rectAreaLTC2,ze.pointLights.value=G.state.point,ze.pointLightShadows.value=G.state.pointShadow,ze.hemisphereLights.value=G.state.hemi,ze.directionalShadowMap.value=G.state.directionalShadowMap,ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ze.spotShadowMap.value=G.state.spotShadowMap,ze.spotLightMatrix.value=G.state.spotLightMatrix,ze.spotLightMap.value=G.state.spotLightMap,ze.pointShadowMap.value=G.state.pointShadowMap,ze.pointShadowMatrix.value=G.state.pointShadowMatrix),Q.currentProgram=Je,Q.uniformsList=null,Je}function yo(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=yl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Mo(A,X){const Z=Ye.get(A);Z.outputColorSpace=X.outputColorSpace,Z.batching=X.batching,Z.batchingColor=X.batchingColor,Z.instancing=X.instancing,Z.instancingColor=X.instancingColor,Z.instancingMorph=X.instancingMorph,Z.skinning=X.skinning,Z.morphTargets=X.morphTargets,Z.morphNormals=X.morphNormals,Z.morphColors=X.morphColors,Z.morphTargetsCount=X.morphTargetsCount,Z.numClippingPlanes=X.numClippingPlanes,Z.numIntersection=X.numClipIntersection,Z.vertexAlphas=X.vertexAlphas,Z.vertexTangents=X.vertexTangents,Z.toneMapping=X.toneMapping}function ji(A,X,Z,Q,G){X.isScene!==!0&&(X=He),D.resetTextureUnits();const Me=X.fog,Te=Q.isMeshStandardMaterial?X.environment:null,ke=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Us,Be=(Q.isMeshStandardMaterial?ee:E).get(Q.envMap||Te),Ze=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Je=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ze=!!Z.morphAttributes.position,yt=!!Z.morphAttributes.normal,Pt=!!Z.morphAttributes.color;let kt=Ls;Q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(kt=y.toneMapping);const En=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,vt=En!==void 0?En.length:0,Ge=Ye.get(Q),tn=m.state.lights;if(se===!0&&(fe===!0||A!==ne)){const On=A===ne&&Q.id===U;_e.setState(Q,A,On)}let it=!1;Q.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==tn.state.version||Ge.outputColorSpace!==ke||G.isBatchedMesh&&Ge.batching===!1||!G.isBatchedMesh&&Ge.batching===!0||G.isBatchedMesh&&Ge.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ge.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ge.instancing===!1||!G.isInstancedMesh&&Ge.instancing===!0||G.isSkinnedMesh&&Ge.skinning===!1||!G.isSkinnedMesh&&Ge.skinning===!0||G.isInstancedMesh&&Ge.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ge.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ge.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ge.instancingMorph===!1&&G.morphTexture!==null||Ge.envMap!==Be||Q.fog===!0&&Ge.fog!==Me||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==_e.numPlanes||Ge.numIntersection!==_e.numIntersection)||Ge.vertexAlphas!==Ze||Ge.vertexTangents!==Je||Ge.morphTargets!==ze||Ge.morphNormals!==yt||Ge.morphColors!==Pt||Ge.toneMapping!==kt||Ge.morphTargetsCount!==vt)&&(it=!0):(it=!0,Ge.__version=Q.version);let Kn=Ge.currentProgram;it===!0&&(Kn=Ns(Q,X,G));let Yi=!1,An=!1,gr=!1;const Xt=Kn.getUniforms(),Ui=Ge.uniforms;if(Ke.useProgram(Kn.program)&&(Yi=!0,An=!0,gr=!0),Q.id!==U&&(U=Q.id,An=!0),Yi||ne!==A){ft.reverseDepthBuffer?(xe.copy(A.projectionMatrix),e_(xe),t_(xe),Xt.setValue(O,"projectionMatrix",xe)):Xt.setValue(O,"projectionMatrix",A.projectionMatrix),Xt.setValue(O,"viewMatrix",A.matrixWorldInverse);const On=Xt.map.cameraPosition;On!==void 0&&On.setValue(O,je.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&Xt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Xt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),ne!==A&&(ne=A,An=!0,gr=!0)}if(G.isSkinnedMesh){Xt.setOptional(O,G,"bindMatrix"),Xt.setOptional(O,G,"bindMatrixInverse");const On=G.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),Xt.setValue(O,"boneTexture",On.boneTexture,D))}G.isBatchedMesh&&(Xt.setOptional(O,G,"batchingTexture"),Xt.setValue(O,"batchingTexture",G._matricesTexture,D),Xt.setOptional(O,G,"batchingIdTexture"),Xt.setValue(O,"batchingIdTexture",G._indirectTexture,D),Xt.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&Xt.setValue(O,"batchingColorTexture",G._colorsTexture,D));const wa=Z.morphAttributes;if((wa.position!==void 0||wa.normal!==void 0||wa.color!==void 0)&&We.update(G,Z,Kn),(An||Ge.receiveShadow!==G.receiveShadow)&&(Ge.receiveShadow=G.receiveShadow,Xt.setValue(O,"receiveShadow",G.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ui.envMap.value=Be,Ui.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(Ui.envMapIntensity.value=X.environmentIntensity),An&&(Xt.setValue(O,"toneMappingExposure",y.toneMappingExposure),Ge.needsLights&&dc(Ui,gr),Me&&Q.fog===!0&&ye.refreshFogUniforms(Ui,Me),ye.refreshMaterialUniforms(Ui,Q,k,K,m.state.transmissionRenderTarget[A.id]),yl.upload(O,yo(Ge),Ui,D)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(yl.upload(O,yo(Ge),Ui,D),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Xt.setValue(O,"center",G.center),Xt.setValue(O,"modelViewMatrix",G.modelViewMatrix),Xt.setValue(O,"normalMatrix",G.normalMatrix),Xt.setValue(O,"modelMatrix",G.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const On=Q.uniformsGroups;for(let vr=0,fc=On.length;vr<fc;vr++){const ba=On[vr];$.update(ba,Kn),$.bind(ba,Kn)}}return Kn}function dc(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function ks(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,X,Z){Ye.get(A.texture).__webglTexture=X,Ye.get(A.depthTexture).__webglTexture=Z;const Q=Ye.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=Z===void 0,Q.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const Z=Ye.get(A);Z.__webglFramebuffer=X,Z.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,Z=0){R=A,F=X,C=Z;let Q=!0,G=null,Me=!1,Te=!1;if(A){const Be=Ye.get(A);if(Be.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(O.FRAMEBUFFER,null),Q=!1;else if(Be.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(Be.__hasExternalTextures)D.rebindTextures(A,Ye.get(A.texture).__webglTexture,Ye.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ze=A.depthTexture;if(Be.__boundDepthTexture!==ze){if(ze!==null&&Ye.has(ze)&&(A.width!==ze.image.width||A.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const Ze=A.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Te=!0);const Je=Ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?G=Je[X][Z]:G=Je[X],Me=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?G=Ye.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?G=Je[Z]:G=Je,S.copy(A.viewport),b.copy(A.scissor),W=A.scissorTest}else S.copy(le).multiplyScalar(k).floor(),b.copy(oe).multiplyScalar(k).floor(),W=me;if(Ke.bindFramebuffer(O.FRAMEBUFFER,G)&&Q&&Ke.drawBuffers(A,G),Ke.viewport(S),Ke.scissor(b),Ke.setScissorTest(W),Me){const Be=Ye.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,Z)}else if(Te){const Be=Ye.get(A.texture),Ze=X||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Be.__webglTexture,Z||0,Ze)}U=-1},this.readRenderTargetPixels=function(A,X,Z,Q,G,Me,Te){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(ke=ke[Te]),ke){Ke.bindFramebuffer(O.FRAMEBUFFER,ke);try{const Be=A.texture,Ze=Be.format,Je=Be.type;if(!ft.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-Q&&Z>=0&&Z<=A.height-G&&O.readPixels(X,Z,Q,G,tt.convert(Ze),tt.convert(Je),Me)}finally{const Be=R!==null?Ye.get(R).__webglFramebuffer:null;Ke.bindFramebuffer(O.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,X,Z,Q,G,Me,Te){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(ke=ke[Te]),ke){const Be=A.texture,Ze=Be.format,Je=Be.type;if(!ft.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-Q&&Z>=0&&Z<=A.height-G){Ke.bindFramebuffer(O.FRAMEBUFFER,ke);const ze=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ze),O.bufferData(O.PIXEL_PACK_BUFFER,Me.byteLength,O.STREAM_READ),O.readPixels(X,Z,Q,G,tt.convert(Ze),tt.convert(Je),0);const yt=R!==null?Ye.get(R).__webglFramebuffer:null;Ke.bindFramebuffer(O.FRAMEBUFFER,yt);const Pt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Qv(O,Pt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ze),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Me),O.deleteBuffer(ze),O.deleteSync(Pt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,Z=0){A.isTexture!==!0&&(xl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const Q=Math.pow(2,-Z),G=Math.floor(A.image.width*Q),Me=Math.floor(A.image.height*Q),Te=X!==null?X.x:0,ke=X!==null?X.y:0;D.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,Te,ke,G,Me),Ke.unbindTexture()},this.copyTextureToTexture=function(A,X,Z=null,Q=null,G=0){A.isTexture!==!0&&(xl("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],X=arguments[2],G=arguments[3]||0,Z=null);let Me,Te,ke,Be,Ze,Je;Z!==null?(Me=Z.max.x-Z.min.x,Te=Z.max.y-Z.min.y,ke=Z.min.x,Be=Z.min.y):(Me=A.image.width,Te=A.image.height,ke=0,Be=0),Q!==null?(Ze=Q.x,Je=Q.y):(Ze=0,Je=0);const ze=tt.convert(X.format),yt=tt.convert(X.type);D.setTexture2D(X,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const Pt=O.getParameter(O.UNPACK_ROW_LENGTH),kt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),En=O.getParameter(O.UNPACK_SKIP_PIXELS),vt=O.getParameter(O.UNPACK_SKIP_ROWS),Ge=O.getParameter(O.UNPACK_SKIP_IMAGES),tn=A.isCompressedTexture?A.mipmaps[G]:A.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,tn.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tn.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ke),O.pixelStorei(O.UNPACK_SKIP_ROWS,Be),A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,Ze,Je,Me,Te,ze,yt,tn.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,Ze,Je,tn.width,tn.height,ze,tn.data):O.texSubImage2D(O.TEXTURE_2D,G,Ze,Je,Me,Te,ze,yt,tn),O.pixelStorei(O.UNPACK_ROW_LENGTH,Pt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,kt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,En),O.pixelStorei(O.UNPACK_SKIP_ROWS,vt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ge),G===0&&X.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ke.unbindTexture()},this.copyTextureToTexture3D=function(A,X,Z=null,Q=null,G=0){A.isTexture!==!0&&(xl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],X=arguments[3],G=arguments[4]||0);let Me,Te,ke,Be,Ze,Je,ze,yt,Pt;const kt=A.isCompressedTexture?A.mipmaps[G]:A.image;Z!==null?(Me=Z.max.x-Z.min.x,Te=Z.max.y-Z.min.y,ke=Z.max.z-Z.min.z,Be=Z.min.x,Ze=Z.min.y,Je=Z.min.z):(Me=kt.width,Te=kt.height,ke=kt.depth,Be=0,Ze=0,Je=0),Q!==null?(ze=Q.x,yt=Q.y,Pt=Q.z):(ze=0,yt=0,Pt=0);const En=tt.convert(X.format),vt=tt.convert(X.type);let Ge;if(X.isData3DTexture)D.setTexture3D(X,0),Ge=O.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)D.setTexture2DArray(X,0),Ge=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const tn=O.getParameter(O.UNPACK_ROW_LENGTH),it=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Kn=O.getParameter(O.UNPACK_SKIP_PIXELS),Yi=O.getParameter(O.UNPACK_SKIP_ROWS),An=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,kt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,kt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Be),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ze),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Je),A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Ge,G,ze,yt,Pt,Me,Te,ke,En,vt,kt.data):X.isCompressedArrayTexture?O.compressedTexSubImage3D(Ge,G,ze,yt,Pt,Me,Te,ke,En,kt.data):O.texSubImage3D(Ge,G,ze,yt,Pt,Me,Te,ke,En,vt,kt),O.pixelStorei(O.UNPACK_ROW_LENGTH,tn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,it),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Kn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Yi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,An),G===0&&X.generateMipmaps&&O.generateMipmap(Ge),Ke.unbindTexture()},this.initRenderTarget=function(A){Ye.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),Ke.unbindTexture()},this.resetState=function(){F=0,C=0,R=null,Ke.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ss}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Uu?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===ql?"display-p3":"srgb"}}class Kl extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cs,this.environmentIntensity=1,this.environmentRotation=new cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class tr extends Nn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=ht,u=ht,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ru extends Pn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hr=new It,Df=new It,jo=[],Lf=new Wi,dw=new It,Ua=new _t,Na=new $i;class fw extends _t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ru(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hr),Lf.copy(e.boundingBox).applyMatrix4(Hr),this.boundingBox.union(Lf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hr),Na.copy(e.boundingSphere).applyMatrix4(Hr),this.boundingSphere.union(Na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ua.geometry=this.geometry,Ua.material=this.material,Ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(n),e.ray.intersectsSphere(Na)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hr),Df.multiplyMatrices(n,Hr),Ua.matrixWorld=Df,Ua.raycast(e,jo);for(let a=0,o=jo.length;a<o;a++){const l=jo[a];l.instanceId=r,l.object=this,t.push(l)}jo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ru(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new tr(new Float32Array(s*this.count),s,this.count,Du,nn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class au extends ma{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pl=new z,Dl=new z,Ff=new It,ka=new vo,Yo=new $i,th=new z,If=new z;class Hm extends jn{constructor(e=new en,t=new au){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Pl.fromBufferAttribute(t,s-1),Dl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Pl.distanceTo(Dl);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(s),Yo.radius+=r,e.ray.intersectsSphere(Yo)===!1)return;Ff.copy(s).invert(),ka.copy(e.ray).applyMatrix4(Ff);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),x=u.getX(_+1),y=Ko(this,e,ka,l,p,x);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Ko(this,e,ka,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=Ko(this,e,ka,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Ko(this,e,ka,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ko(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(Pl.fromBufferAttribute(a,s),Dl.fromBufferAttribute(a,r),t.distanceSqToSegment(Pl,Dl,th,If)>n)return;th.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(th);if(!(l<e.near||l>e.far))return{distance:l,point:If.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Uf=new z,Nf=new z;class kf extends Hm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Uf.fromBufferAttribute(t,s),Nf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Uf.distanceTo(Nf);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pw extends ma{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Of=new It,ou=new vo,Zo=new $i,Jo=new z;class mw extends jn{constructor(e=new en,t=new pw){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,e.ray.intersectsSphere(Zo)===!1)return;Of.copy(s).invert(),ou.copy(e.ray).applyMatrix4(Of);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,_=f;g<_;g++){const m=c.getX(g);Jo.fromBufferAttribute(d,m),zf(Jo,m,l,s,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,_=f;g<_;g++)Jo.fromBufferAttribute(d,g),zf(Jo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function zf(i,e,t,n,s,r,a){const o=ou.distanceSqToPoint(i);if(o<t){const l=new z;ou.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Xi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new we:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new z,s=[],r=[],a=[],o=new z,l=new It;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new z)}r[0]=new z,a[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(wn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(wn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zu extends Xi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new we){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class gw extends zu{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Bu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Qo=new z,nh=new Bu,ih=new Bu,sh=new Bu;class vw extends Xi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Qo.subVectors(s[0],s[1]).add(s[0]),c=Qo);const d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Qo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Qo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),nh.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,_,m),ih.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,_,m),sh.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(nh.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),ih.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),sh.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(nh.calc(l),ih.calc(l),sh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bf(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function _w(i,e){const t=1-i;return t*t*e}function xw(i,e){return 2*(1-i)*i*e}function yw(i,e){return i*i*e}function ja(i,e,t,n){return _w(i,e)+xw(i,t)+yw(i,n)}function Mw(i,e){const t=1-i;return t*t*t*e}function Sw(i,e){const t=1-i;return 3*t*t*i*e}function ww(i,e){return 3*(1-i)*i*i*e}function bw(i,e){return i*i*i*e}function Ya(i,e,t,n,s){return Mw(i,e)+Sw(i,t)+ww(i,n)+bw(i,s)}class Vm extends Xi{constructor(e=new we,t=new we,n=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new we){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ya(e,s.x,r.x,a.x,o.x),Ya(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Tw extends Xi{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ya(e,s.x,r.x,a.x,o.x),Ya(e,s.y,r.y,a.y,o.y),Ya(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gm extends Xi{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ew extends Xi{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wm extends Xi{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ja(e,s.x,r.x,a.x),ja(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Aw extends Xi{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ja(e,s.x,r.x,a.x),ja(e,s.y,r.y,a.y),ja(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $m extends Xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Bf(o,l.x,c.x,u.x,d.x),Bf(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new we().fromArray(s))}return this}}var Hf=Object.freeze({__proto__:null,ArcCurve:gw,CatmullRomCurve3:vw,CubicBezierCurve:Vm,CubicBezierCurve3:Tw,EllipseCurve:zu,LineCurve:Gm,LineCurve3:Ew,QuadraticBezierCurve:Wm,QuadraticBezierCurve3:Aw,SplineCurve:$m});class Cw extends Xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hf[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Hf[s.type]().fromJSON(s))}return this}}class Vf extends Cw{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Gm(this.currentPoint.clone(),new we(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Wm(this.currentPoint.clone(),new we(e,t),new we(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Vm(this.currentPoint.clone(),new we(e,t),new we(n,s),new we(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new $m(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new zu(e,t,n,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Hu extends en{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new z,u=new we;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(o,3)),this.setAttribute("uv",new Rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ka extends en{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Rt(d,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(f,2));function x(){const w=new z,F=new z;let C=0;const R=(t-e)/n;for(let U=0;U<=r;U++){const ne=[],S=U/r,b=S*(t-e)+e;for(let W=0;W<=s;W++){const B=W/s,Y=B*l+o,J=Math.sin(Y),K=Math.cos(Y);F.x=b*J,F.y=-S*n+m,F.z=b*K,d.push(F.x,F.y,F.z),w.set(J,R,K).normalize(),h.push(w.x,w.y,w.z),f.push(B,1-S),ne.push(g++)}_.push(ne)}for(let U=0;U<s;U++)for(let ne=0;ne<r;ne++){const S=_[ne][U],b=_[ne+1][U],W=_[ne+1][U+1],B=_[ne][U+1];e>0&&(u.push(S,b,B),C+=3),t>0&&(u.push(b,W,B),C+=3)}c.addGroup(p,C,0),p+=C}function y(w){const F=g,C=new we,R=new z;let U=0;const ne=w===!0?e:t,S=w===!0?1:-1;for(let W=1;W<=s;W++)d.push(0,m*S,0),h.push(0,S,0),f.push(.5,.5),g++;const b=g;for(let W=0;W<=s;W++){const Y=W/s*l+o,J=Math.cos(Y),K=Math.sin(Y);R.x=ne*K,R.y=m*S,R.z=ne*J,d.push(R.x,R.y,R.z),h.push(0,S,0),C.x=J*.5+.5,C.y=K*.5*S+.5,f.push(C.x,C.y),g++}for(let W=0;W<s;W++){const B=F+W,Y=b+W;w===!0?u.push(Y,Y+1,B):u.push(Y+1,Y,B),U+=3}c.addGroup(p,U,w===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const el=new z,tl=new z,rh=new z,nl=new xi;class Rw extends en{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(ea*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=nl;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),nl.getNormal(rh),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let x=0;x<3;x++){const y=(x+1)%3,w=d[x],F=d[y],C=nl[u[x]],R=nl[u[y]],U=`${w}_${F}`,ne=`${F}_${w}`;ne in h&&h[ne]?(rh.dot(h[ne].normal)<=r&&(f.push(C.x,C.y,C.z),f.push(R.x,R.y,R.z)),h[ne]=null):U in h||(h[U]={index0:c[x],index1:c[y],normal:rh.clone()})}}for(const g in h)if(h[g]){const{index0:_,index1:m}=h[g];el.fromBufferAttribute(o,_),tl.fromBufferAttribute(o,m),f.push(el.x,el.y,el.z),f.push(tl.x,tl.y,tl.z)}this.setAttribute("position",new Rt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Xm extends Vf{constructor(e){super(e),this.uuid=dr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Vf().fromJSON(s))}return this}}const Pw={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=qm(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,d,h,f;if(n&&(r=Uw(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)d=i[g],h=i[g+1],d<o&&(o=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return lo(r,a,t,o,l,f,0),a}};function qm(i,e,t,n,s){let r,a;if(s===Xw(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Gf(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Gf(r,i[r],i[r+1],a);return a&&Zl(a,a.next)&&(ho(a),a=a.next),a}function or(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Zl(t,t.next)||qt(t.prev,t,t.next)===0)){if(ho(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function lo(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Bw(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Lw(i,n,s,r):Dw(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ho(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Fw(or(i),e,t),lo(i,e,t,n,s,r,2)):a===2&&Iw(i,e,t,n,s,r):lo(or(i),e,t,n,s,r,1);break}}}function Dw(i){const e=i.prev,t=i,n=i.next;if(qt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,h=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Kr(s,o,r,l,a,c,g.x,g.y)&&qt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lw(i,e,t,n){const s=i.prev,r=i,a=i.next;if(qt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=o<l?o<c?o:c:l<c?l:c,g=u<d?u<h?u:h:d<h?d:h,_=o>l?o>c?o:c:l>c?l:c,m=u>d?u>h?u:h:d>h?d:h,p=lu(f,g,e,t,n),x=lu(_,m,e,t,n);let y=i.prevZ,w=i.nextZ;for(;y&&y.z>=p&&w&&w.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Kr(o,u,l,d,c,h,y.x,y.y)&&qt(y.prev,y,y.next)>=0||(y=y.prevZ,w.x>=f&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&Kr(o,u,l,d,c,h,w.x,w.y)&&qt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Kr(o,u,l,d,c,h,y.x,y.y)&&qt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;w&&w.z<=x;){if(w.x>=f&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&Kr(o,u,l,d,c,h,w.x,w.y)&&qt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Fw(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Zl(s,r)&&jm(s,n,n.next,r)&&co(s,r)&&co(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ho(n),ho(n.next),n=i=r),n=n.next}while(n!==i);return or(n)}function Iw(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Gw(a,o)){let l=Ym(a,o);a=or(a,a.next),l=or(l,l.next),lo(a,e,t,n,s,r,0),lo(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Uw(i,e,t,n){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=qm(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Vw(c));for(s.sort(Nw),r=0;r<s.length;r++)t=kw(s[r],t);return t}function Nw(i,e){return i.x-e.x}function kw(i,e){const t=Ow(i,e);if(!t)return e;const n=Ym(t,i);return or(n,n.next),or(t,t.next)}function Ow(i,e){let t=e,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const h=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=r&&h>n&&(n=h,s=t.x<t.next.x?t:t.next,h===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Kr(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),co(t,i)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&zw(s,t)))&&(s=t,u=d)),t=t.next;while(t!==o);return s}function zw(i,e){return qt(i.prev,i,e.prev)<0&&qt(e.next,i,i.next)<0}function Bw(i,e,t,n){let s=i;do s.z===0&&(s.z=lu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hw(s)}function Hw(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function lu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Vw(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Kr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Gw(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ww(i,e)&&(co(i,e)&&co(e,i)&&$w(i,e)&&(qt(i.prev,i,e.prev)||qt(i,e.prev,e))||Zl(i,e)&&qt(i.prev,i,i.next)>0&&qt(e.prev,e,e.next)>0)}function qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Zl(i,e){return i.x===e.x&&i.y===e.y}function jm(i,e,t,n){const s=sl(qt(i,e,t)),r=sl(qt(i,e,n)),a=sl(qt(t,n,i)),o=sl(qt(t,n,e));return!!(s!==r&&a!==o||s===0&&il(i,t,e)||r===0&&il(i,n,e)||a===0&&il(t,i,n)||o===0&&il(t,e,n))}function il(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function sl(i){return i>0?1:i<0?-1:0}function Ww(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&jm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function co(i,e){return qt(i.prev,i,i.next)<0?qt(i,e,i.next)>=0&&qt(i,i.prev,e)>=0:qt(i,e,i.prev)<0||qt(i,i.next,e)<0}function $w(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ym(i,e){const t=new cu(i.i,i.x,i.y),n=new cu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Gf(i,e,t,n){const s=new cu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function cu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Xw(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class na{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return na.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Wf(e),$f(n,e);let a=e.length;t.forEach(Wf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,$f(n,t[l]);const o=Pw.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Wf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function $f(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Za extends en{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/s,f=new z,g=new we;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,y=x,w=x+n+1,F=x+n+2,C=x+1;o.push(y,w,C),o.push(w,F,C)}}this.setIndex(o),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vu extends en{constructor(e=new Xm([new we(0,.5),new we(-.5,-.5),new we(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(r,3)),this.setAttribute("uv",new Rt(a,2));function c(u){const d=s.length/3,h=u.extractPoints(t);let f=h.shape;const g=h.holes;na.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const x=g[m];na.isClockWise(x)===!0&&(g[m]=x.reverse())}const _=na.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const x=g[m];f=f.concat(x)}for(let m=0,p=f.length;m<p;m++){const x=f[m];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,p=_.length;m<p;m++){const x=_[m],y=x[0]+d,w=x[1]+d,F=x[2]+d;n.push(y,w,F),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return qw(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new Vu(n,e.curveSegments)}}function qw(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Zr extends en{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new z,h=new z,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let w=0;p===0&&a===0?w=.5/t:p===n&&l===Math.PI&&(w=-.5/t);for(let F=0;F<=t;F++){const C=F/t;d.x=-e*Math.cos(s+C*r)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(s+C*r)*Math.sin(a+y*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(C+w,1-y),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const y=u[p][x+1],w=u[p][x],F=u[p+1][x],C=u[p+1][x+1];(p!==0||a>0)&&f.push(y,w,C),(p!==n-1||l<Math.PI)&&f.push(w,F,C)}this.setIndex(f),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oi extends hs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jw extends en{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Xf=new It;class qf{constructor(e,t,n=0,s=1/0){this.ray=new vo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ku,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xf),this}intersectObject(e,t=!0,n=[]){return hu(e,this,n,t),n.sort(jf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)hu(e[s],this,n,t);return n.sort(jf),n}}function jf(i,e){return i.distance-e.distance}function hu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)hu(r[a],e,t,!0)}}class Yf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Yw extends ur{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Au}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Au);const rl=`
precision highp float;
in vec3 position;
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Jl=`
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
uniform sampler2D uFaceMod; // face crests (drawn walls): r = east face, g = north face, absolute m; -1e4 = none
uniform sampler2D uConnMap;  // connectors touching the cell: r = id1, g = sign1, b = id2, a = sign2 (id < 0 = none)
uniform sampler2D uConnState; // N x 1: r = discharge of connector (m3/s, + = a -> b), g = pump on, b = cumulative m3
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
`,Kw=Jl+`
float faceFlux(float h0, float h1, float z0, float z1, float zc, float qPrev, float qN1, float qN2, float nf) {
  float eta0 = z0 + h0, eta1 = z1 + h1;
  float hf = max(eta0, eta1) - max(max(z0, z1), zc);   // zc: crest of a wall drawn on this face (none = -1e4)
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
      float crE = texelFetch(uFaceMod, ij, 0).r;
      qx = sg ? faceFluxSg(h, se.r, eta0, etaOf(ie, se.r), max(texelFetch(uSgFE, ij, 0) + vec4(faceShift(modR(ij), modR(ie))), vec4(crE)), s.g, qw, qee, nf)
              : faceFlux(h, se.r, z, zOf(ie), crE, s.g, qw, qee, nf);
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
      float crN = texelFetch(uFaceMod, ij, 0).g;
      qy = sg ? faceFluxSg(h, sn.r, eta0, etaOf(in_, sn.r), max(texelFetch(uSgFN, ij, 0) + vec4(faceShift(modR(ij), modR(in_))), vec4(crN)), s.b, qs, qnn, nf)
              : faceFlux(h, sn.r, z, zOf(in_), crN, s.b, qs, qnn, nf);
    }
  }
  o0 = vec4(h, qx, qy, s.a);
  o1 = texelFetch(uState1, ij, 0);
}
`,Zw=Jl+`
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
    // wave overtopping at the crest cells (the loader moves each shoreline cell's exposure to the seawall crest /
    // promenade edge, data/shore.ts).  EurOtop 2018 eq. 7.5 - plain vertical wall with foreshore influence, non-impulsive
    // waves, mean-value approach:  q = 0.05 sqrt(g Hm0^3) exp(-2.78 Rc / Hm0),  Rc = crest freeboard above the still-water
    // level.  Hm0 at the toe = the event's nearshore Hs scaled by the fetch exposure: fetch-limited growth gives
    // Hs ~ sqrt(F) (SMB), so Hm0 = Hs sqrt(exposure).  At and below the crest (Rc <= 0) the wave term keeps its Rc = 0
    // value and the overflow itself is the ordinary face flux (EurOtop negative-freeboard guidance).  No structure-type
    // factor (rubble slopes, gamma_f ~ 0.5, overtop less than a smooth wall) and no artificial cap: the law's own maximum
    // at Rc = 0 (0.44 m3/s/m for Hs = 2 m) is the limit.  v1.2 and earlier: 0.2 sqrt(g Hs^3) exp(-2.6 Rc/Hs) x exposure
    // capped at 0.15 m3/s/m - a step function (every crest under ~1.2 m of freeboard sat on the cap).
    if (tt.b > 0.0 && uHs > 0.05) {
      float hm0 = uHs * sqrt(tt.b);
      float rc = max(0.0, z - uTide);
      float q = 0.05 * sqrt(uG * hm0 * hm0 * hm0) * exp(-2.78 * rc / hm0);
      h += q * uDt / uDx;
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
    // entrance head (HydroSnap-HK): the water LEVEL above the entrance crest, crest = the cell's typical ground (coarse
    // mean) + sill.  The earlier head h / wet_fraction made a ramp hollow inside the cell look like a deep pool and let a
    // basement take everything that flowed into that hollow (LOHAS Park 0.63 -> 3.0 m with reach-based faces).
    float head = uSubgrid > 0.5 ? (h > 0.0 ? max(0.0, etaOf(ij, h) - (tt.r + m.r) - uSill) : 0.0) : max(0.0, h - uSill);
    float ddt = head + uSill;
    float avail = uSubgrid > 0.5 ? (head > 0.0 ? h : 0.0) : max(0.0, h - uSill);
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
    // connectors (HydroSnap-HK, sim/connectors.ts): pumps, culverts and pipes move water through sub-grid links;
    // the discharge was computed from the state at the start of the step, + leaves the a side, arrives at the b side
    vec4 cm = texelFetch(uConnMap, ij, 0);
    if (cm.r >= 0.0) h -= texelFetch(uConnState, ivec2(int(cm.r), 0), 0).r * cm.g * uDt / (uDx * uDx);
    if (cm.b >= 0.0) h -= texelFetch(uConnState, ivec2(int(cm.b), 0), 0).r * cm.a * uDt / (uDx * uDx);
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
`,Jw=Jl+`
void main() {
  ivec2 ij = ivec2(gl_FragCoord.xy);
  vec4 t = texelFetch(uTerrain, ij, 0);
  float z = zOf(ij);
  float h = t.a > 0.75 ? (uSubgrid > 0.5 ? volOf(ij, uTide) : max(0.0, uTide - z)) : 0.0;
  o0 = vec4(h, 0.0, 0.0, 0.0);
  o1 = vec4(0.0, 0.0, 0.0, 0.0);
}
`,Qw={pump:1,culvert:2,pipe:3};function eb(i,e,t){const n=Math.max(1,i.length),s=new Float32Array(n*4),r=new Float32Array(n*4),a=new Float32Array(e*t*4).fill(-1),o=(l,c,u)=>{if(l<0||l>=e*t)return;const d=l*4;a[d]<0?(a[d]=c,a[d+1]=u):a[d+2]<0&&(a[d+2]=c,a[d+3]=u)};return i.forEach((l,c)=>{s[c*4]=l.a,s[c*4+1]=l.b,s[c*4+2]=Qw[l.kind],l.kind==="pump"?(s[c*4+3]=l.q??1,r[c*4]=l.on??.05,r[c*4+1]=l.off??.01):(s[c*4+3]=l.d??1,r[c*4]=l.n??.013,r[c*4+1]=l.L??20,r[c*4+2]=l.zin??0,r[c*4+3]=l.zout??0),o(l.a,c,1),l.b>=0&&o(l.b,c,-1)}),{c0:s,c1:r,map:a,n}}const tb=Jl+`
uniform sampler2D uC0; uniform sampler2D uC1; uniform sampler2D uCS;
// outputs o0 / o1 come from COMMON (the connector target has one attachment: o0)
void main() {
  o1 = vec4(0.0);
  int id = int(gl_FragCoord.x);
  vec4 c0 = texelFetch(uC0, ivec2(id, 0), 0), c1 = texelFetch(uC1, ivec2(id, 0), 0), cs = texelFetch(uCS, ivec2(id, 0), 0);
  int a = int(c0.r), b = int(c0.g), kind = int(c0.b);
  if (kind == 0 || a < 0) { o0 = vec4(0.0); return; }
  ivec2 ia = ivec2(a % uSize.x, a / uSize.x);
  vec4 sa = texelFetch(uState0, ia, 0); float ha = sa.r; float za = zOf(ia);
  float etaA = uSubgrid > 0.5 ? etaOf(ia, ha) : za + ha;
  bool hasB = b >= 0; float hb = 0.0, zb = 0.0, etaB = -1.0e9;
  if (hasB) { ivec2 ib = ivec2(b % uSize.x, b / uSize.x); vec4 sb = texelFetch(uState0, ib, 0); hb = sb.r; zb = zOf(ib); etaB = uSubgrid > 0.5 ? etaOf(ib, hb) : zb + hb; }
  float cellA = uDx * uDx / uDt;                       // m3/s that would move one metre of depth out of a cell this step
  float Q = 0.0, on = cs.g;
  if (kind == 1) {
    // pump: switched on above the on-depth, off below the off-depth (sump hysteresis); one way, never more than a
    // quarter of the sump cell's water per step
    if (on < 0.5 && ha > c1.r) on = 1.0;
    if (on > 0.5 && ha < c1.g) on = 0.0;
    Q = on > 0.5 ? min(c0.a, 0.25 * ha * cellA) : 0.0;
  } else {
    float D = max(c0.a, 0.1), n = max(c1.r, 0.005), L = max(c1.g, 1.0), zin = c1.b, zout = c1.a;
    float A = 0.7853982 * D * D, R = 0.25 * D;
    bool fwd = etaA >= etaB;
    if (fwd || hasB) {
      float etaU = fwd ? etaA : etaB, etaD = fwd ? etaB : etaA, zU = fwd ? zin : zout, zD = fwd ? zout : zin;
      float Hw = etaU - zU;                              // headwater above the upstream invert
      if (Hw > 0.0) {
        // inlet control: a weir over the barrel width below 1.2 D of head, an orifice above (HDS-5 simplified)
        float Qi = Hw < 1.2 * D ? 1.5 * D * pow(Hw, 1.5) : 0.6 * A * sqrt(19.62 * max(Hw - 0.5 * D, 0.01));
        // outlet control: energy from the headwater to the tailwater (never below the barrel centre) against the
        // entrance loss and the Manning friction of the barrel
        float tw = max(etaD, zD + 0.5 * D);
        float dH = max(etaU - tw, 0.0);
        float Qo = A * sqrt(19.62 * dH / (1.5 + 19.62 * n * n * L / pow(R, 1.3333333)));
        Q = min(Qi, Qo);
        if (kind == 3) { float S = max((zin - zout) / L, 1.0e-4); Q = min(Q, A * pow(R, 0.6666667) * sqrt(S) / n); }   // pipe: full-flow capacity
        Q = min(Q, 0.25 * (fwd ? ha : hb) * cellA);
        if (!fwd) Q = -Q;
      }
    }
  }
  Q = mix(cs.r, Q, 0.5);                                 // smooth the exchange step to step
  o0 = vec4(Q, on, cs.b + abs(Q) * uDt, 0.0);           // b: cumulative volume moved (m3)
}
`,nb=`
precision highp float; precision highp int; precision highp sampler2D;
uniform sampler2D uSrc;
layout(location = 0) out vec4 o;
void main() { o = texelFetch(uSrc, ivec2(gl_FragCoord.xy), 0); }
`,ib=`
precision highp float; precision highp int; precision highp sampler2D;
uniform sampler2D uState0; uniform sampler2D uState1;
layout(location = 0) out vec4 o0; layout(location = 1) out vec4 o1;
void main() { ivec2 ij = ivec2(gl_FragCoord.xy); o0 = texelFetch(uState0, ij, 0); o1 = texelFetch(uState1, ij, 0); }
`,sb=`
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
`,$l=class $l{constructor(e,t,n,s,r,a,o,l,c,u){I(this,"W");I(this,"H");I(this,"dx");I(this,"renderer");I(this,"rtA");I(this,"rtB");I(this,"scene",new Kl);I(this,"camera",new jl(-1,1,1,-1,0,1));I(this,"quad");I(this,"fluxMat");I(this,"depthMat");I(this,"initMat");I(this,"copyMat");I(this,"maxMat");I(this,"connMat");I(this,"copy1Mat");I(this,"connTex0",null);I(this,"connTex1",null);I(this,"connMapTex");I(this,"connRTA",null);I(this,"connRTB",null);I(this,"connN",0);I(this,"connBuf",new Float32Array(4));I(this,"redRTs",[]);I(this,"redBuf",new Float32Array(64));I(this,"terrainTex");I(this,"modTex");I(this,"chanTex");I(this,"terrainData");I(this,"modData");I(this,"chanData");I(this,"faceModTex");I(this,"faceModData");I(this,"sgTex",null);I(this,"subgridAvailable");I(this,"auxBuf");I(this,"time",0);I(this,"dt",.5);I(this,"steps",0);I(this,"readBuf");I(this,"cellBuf",new Float32Array(4));I(this,"cellAux",new Float32Array(4));this.renderer=e,this.W=t.W,this.H=t.H,this.dx=t.dx;const d=this.W*this.H;this.terrainData=new Float32Array(d*4);for(let g=0;g<d;g++)this.terrainData[g*4]=n[g],this.terrainData[g*4+1]=s[g],this.terrainData[g*4+2]=a?a[g]:0,this.terrainData[g*4+3]=r[g]?1:o&&o[g]?.5:0;this.terrainTex=this.makeDataTex(this.terrainData),this.modData=new Float32Array(d*4);for(let g=0;g<d;g++)this.modData[g*4+3]=1;if(this.modTex=this.makeDataTex(this.modData),this.faceModData=new Float32Array(d*4).fill($l.FACE_NONE),this.faceModTex=this.makeDataTex(this.faceModData),this.chanData=new Float32Array(d*4),l)for(let g=0;g<d;g++)r[g]||(this.chanData[g*4]=l[g*3],this.chanData[g*4+1]=l[g*3+1],this.chanData[g*4+2]=l[g*3+2]);if(c)for(let g=0;g<d;g++)r[g]||(this.chanData[g*4+3]=c[g]);if(this.chanTex=this.makeDataTex(this.chanData),this.subgridAvailable=!!u,u){const g=new Float32Array(d*4),_=new Float32Array(d*4),m=new Float32Array(d*4),p=new Float32Array(d*4);for(let x=0;x<d;x++)for(let y=0;y<4;y++)g[x*4+y]=u.cell[x*8+y],_[x*4+y]=u.cell[x*8+4+y],m[x*4+y]=u.face[x*8+y],p[x*4+y]=u.face[x*8+4+y];this.sgTex=[g,_,m,p].map(x=>this.makeDataTex(x))}this.rtA=this.makeRT(),this.rtB=this.makeRT();const h=()=>({uState0:{value:null},uState1:{value:null},uTerrain:{value:this.terrainTex},uMod:{value:this.modTex},uChan:{value:this.chanTex},uSize:{value:new we(this.W,this.H)},uDt:{value:this.dt},uDx:{value:this.dx},uG:{value:9.81},uTide:{value:0},uRain:{value:0},uDrain:{value:0},uTheta:{value:.8},uHmin:{value:.002},uManning:{value:.035},uBuildings:{value:1},uTankRate:{value:.01},uBldBlock:{value:1},uManningBld:{value:.6},uHs:{value:0},uHillCap:{value:120/36e5},uRecover:{value:6},uTideLock:{value:1.5},uSgC0:{value:this.sgTex?this.sgTex[0]:this.chanTex},uSgC1:{value:this.sgTex?this.sgTex[1]:this.chanTex},uSgFE:{value:this.sgTex?this.sgTex[2]:this.chanTex},uSgFN:{value:this.sgTex?this.sgTex[3]:this.chanTex},uSubgrid:{value:this.sgTex?1:0},uSill:{value:.1},uWeirB:{value:4},uFaceMod:{value:this.faceModTex},uConnMap:{value:null},uConnState:{value:null},uC0:{value:null},uC1:{value:null},uCS:{value:null}}),f=g=>new oi({vertexShader:rl,fragmentShader:g,uniforms:h(),glslVersion:Wn,depthTest:!1,depthWrite:!1});this.fluxMat=f(Kw),this.depthMat=f(Zw),this.initMat=f(Jw),this.copyMat=new oi({vertexShader:rl,fragmentShader:ib,glslVersion:Wn,depthTest:!1,depthWrite:!1,uniforms:{uState0:{value:null},uState1:{value:null}}}),this.copy1Mat=new oi({vertexShader:rl,fragmentShader:nb,glslVersion:Wn,depthTest:!1,depthWrite:!1,uniforms:{uSrc:{value:null}}}),this.connMat=f(tb),this.connMapTex=this.makeDataTex(new Float32Array(d*4).fill(-1));for(const g of[this.fluxMat,this.depthMat,this.initMat,this.connMat])g.uniforms.uConnMap.value=this.connMapTex;this.setConnectors([]),this.maxMat=new oi({vertexShader:rl,fragmentShader:sb,glslVersion:Wn,depthTest:!1,depthWrite:!1,uniforms:{uSrc:{value:null},uTerrain:{value:this.terrainTex},uSrcSize:{value:new we(this.W,this.H)},uFirst:{value:1}}});for(const g of[this.fluxMat,this.depthMat])g.uniforms.uSize.value=new we(this.W,this.H);this.quad=new _t(new fr(2,2),this.fluxMat),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.readBuf=new Float32Array(d*4),this.auxBuf=new Float32Array(d*4)}get subgridOn(){return this.depthMat.uniforms.uSubgrid.value>.5}makeDataTex(e){const t=new tr(e,this.W,this.H,$t,nn);return t.minFilter=ht,t.magFilter=ht,t.generateMipmaps=!1,t.wrapS=$n,t.wrapT=$n,t.needsUpdate=!0,t}makeRT(){const e=new Jn(this.W,this.H,{count:2,type:nn,format:$t,minFilter:ht,magFilter:ht,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});for(const t of e.textures)t.wrapS=$n,t.wrapT=$n;return e}get stateTex(){return this.rtA.textures[0]}get auxTex(){return this.rtA.textures[1]}setParams(e){for(const t of[this.fluxMat,this.depthMat,this.initMat])e.subgrid!==void 0&&(t.uniforms.uSubgrid.value=e.subgrid&&this.subgridAvailable?1:0),e.manning!==void 0&&(t.uniforms.uManning.value=e.manning),e.buildings!==void 0&&(t.uniforms.uBuildings.value=e.buildings?1:0),e.drain!==void 0&&(t.uniforms.uDrain.value=e.drain),e.theta!==void 0&&(t.uniforms.uTheta.value=e.theta),e.bldBlock!==void 0&&(t.uniforms.uBldBlock.value=e.bldBlock),e.manningBld!==void 0&&(t.uniforms.uManningBld.value=e.manningBld),e.hillCap!==void 0&&(t.uniforms.uHillCap.value=e.hillCap),e.recover!==void 0&&(t.uniforms.uRecover.value=e.recover),e.tideLock!==void 0&&(t.uniforms.uTideLock.value=e.tideLock)}setDt(e){this.dt=e;for(const t of[this.fluxMat,this.depthMat])t.uniforms.uDt.value=e}updateMod(){this.modTex.needsUpdate=!0,this.faceModTex.needsUpdate=!0}updateTerrain(){this.terrainTex.needsUpdate=!0}reset(e){this.time=0,this.steps=0,this.initMat.uniforms.uTide.value=e,this.quad.material=this.initMat;const t=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.rtA),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(t),this.clearConnState()}step(e,t,n,s=0){const r=this.renderer.getRenderTarget(),a=this.renderer.autoClear;this.renderer.autoClear=!1;for(let o=0;o<e;o++){if(this.connN>0&&this.connRTA&&this.connRTB){const l=this.connMat.uniforms;l.uState0.value=this.rtA.textures[0],l.uState1.value=this.rtA.textures[1],l.uCS.value=this.connRTA.texture,l.uTide.value=t,this.quad.material=this.connMat,this.renderer.setRenderTarget(this.connRTB),this.renderer.render(this.scene,this.camera),[this.connRTA,this.connRTB]=[this.connRTB,this.connRTA],this.depthMat.uniforms.uConnState.value=this.connRTA.texture}this.fluxMat.uniforms.uState0.value=this.rtA.textures[0],this.fluxMat.uniforms.uState1.value=this.rtA.textures[1],this.fluxMat.uniforms.uTide.value=t,this.fluxMat.uniforms.uRain.value=n,this.quad.material=this.fluxMat,this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.depthMat.uniforms.uState0.value=this.rtB.textures[0],this.depthMat.uniforms.uState1.value=this.rtB.textures[1],this.depthMat.uniforms.uTide.value=t,this.depthMat.uniforms.uRain.value=n,this.depthMat.uniforms.uHs.value=s,this.quad.material=this.depthMat,this.renderer.setRenderTarget(this.rtA),this.renderer.render(this.scene,this.camera),this.time+=this.dt,this.steps++}this.renderer.autoClear=a,this.renderer.setRenderTarget(r)}setConnectors(e){const{c0:t,c1:n,map:s,n:r}=eb(e,this.W,this.H);this.connN=e.length,this.connTex0?.dispose(),this.connTex1?.dispose();const a=l=>{const c=new tr(l,r,1,$t,nn);return c.minFilter=ht,c.magFilter=ht,c.needsUpdate=!0,c};if(this.connTex0=a(t),this.connTex1=a(n),this.connMapTex.image.data.set(s),this.connMapTex.needsUpdate=!0,!this.connRTA||this.connRTA.width!==r){this.connRTA?.dispose(),this.connRTB?.dispose();const l=()=>new Jn(r,1,{type:nn,format:$t,minFilter:ht,magFilter:ht,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});this.connRTA=l(),this.connRTB=l()}this.clearConnState();const o=this.connMat.uniforms;o.uC0.value=this.connTex0,o.uC1.value=this.connTex1,this.depthMat.uniforms.uConnState.value=this.connRTA.texture}clearConnState(){if(!this.connRTA||!this.connRTB)return;const e=this.renderer.getRenderTarget(),t=this.renderer.getClearColor(new rt),n=this.renderer.getClearAlpha();this.renderer.setClearColor(new rt(0,0,0),0);for(const s of[this.connRTA,this.connRTB])this.renderer.setRenderTarget(s),this.renderer.clear();this.renderer.setClearColor(t,n),this.renderer.setRenderTarget(e)}blit1(e,t){this.copy1Mat.uniforms.uSrc.value=e,this.quad.material=this.copy1Mat;const n=this.renderer.getRenderTarget(),s=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.camera),this.renderer.autoClear=s,this.renderer.setRenderTarget(n)}readConnectors(){return!this.connRTA||this.connN===0?new Float32Array(0):(this.connBuf.length<this.connN*4&&(this.connBuf=new Float32Array(this.connN*4)),this.renderer.readRenderTargetPixels(this.connRTA,0,0,this.connN,1,this.connBuf),this.connBuf.subarray(0,this.connN*4))}static snapshotBytes(e,t){return e*t*32}blit(e,t){this.blitTex(e.textures[0],e.textures[1],t)}blitTex(e,t,n){this.copyMat.uniforms.uState0.value=e,this.copyMat.uniforms.uState1.value=t,this.quad.material=this.copyMat;const s=this.renderer.getRenderTarget(),r=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.setRenderTarget(n),this.renderer.render(this.scene,this.camera),this.renderer.autoClear=r,this.renderer.setRenderTarget(s)}snapshot(e){const t=e??{rt:this.makeRT(),time:0,steps:0,dt:this.dt,conn:null};return this.blit(this.rtA,t.rt),t.time=this.time,t.steps=this.steps,t.dt=this.dt,this.saveConn(t),t}saveConn(e){if(this.connN===0||!this.connRTA){e.conn=null;return}(!e.conn||e.conn.width!==this.connRTA.width)&&(e.conn?.dispose(),e.conn=new Jn(this.connRTA.width,1,{type:nn,format:$t,minFilter:ht,magFilter:ht,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1})),this.blit1(this.connRTA.texture,e.conn)}restore(e){this.blit(e.rt,this.rtA),this.time=e.time,this.steps=e.steps,this.setDt(e.dt),this.connRTA&&(e.conn&&e.conn.width===this.connRTA.width?this.blit1(e.conn.texture,this.connRTA):this.clearConnState())}readSnapshot(e){let t=null;e.conn&&(t=new Float32Array(e.conn.width*4),this.renderer.readRenderTargetPixels(e.conn,0,0,e.conn.width,1,t));const n=this.W*this.H*4,s=new Float32Array(n),r=new Float32Array(n),a=this.renderer.getContext(),o=this.renderer.properties.get(e.rt).__webglFramebuffer,l=this.renderer.getRenderTarget();return this.renderer.state.bindFramebuffer(a.FRAMEBUFFER,o),a.readBuffer(a.COLOR_ATTACHMENT0),a.readPixels(0,0,this.W,this.H,a.RGBA,a.FLOAT,s),a.readBuffer(a.COLOR_ATTACHMENT1),a.readPixels(0,0,this.W,this.H,a.RGBA,a.FLOAT,r),a.readBuffer(a.COLOR_ATTACHMENT0),this.renderer.setRenderTarget(l),{state:s,aux:r,conn:t}}snapshotFromData(e,t,n,s,r,a){const o=this.makeDataTex(e),l=this.makeDataTex(t),c=r??{rt:this.makeRT(),time:n,steps:0,dt:s,conn:null};if(this.blitTex(o,l,c.rt),o.dispose(),l.dispose(),c.time=n,c.steps=Math.round(n/s),c.dt=s,a&&a.length>=4&&this.connRTA&&a.length===this.connRTA.width*4){const u=new tr(a,a.length/4,1,$t,nn);u.minFilter=ht,u.magFilter=ht,u.needsUpdate=!0,(!c.conn||c.conn.width!==a.length/4)&&(c.conn?.dispose(),c.conn=new Jn(a.length/4,1,{type:nn,format:$t,minFilter:ht,magFilter:ht,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1})),this.blit1(u,c.conn),u.dispose()}else c.conn?.dispose(),c.conn=null;return c}maxDepth(){let e=this.W,t=this.H,n=this.rtA.textures[1],s=1,r=0;const a=this.renderer.getRenderTarget(),o=this.renderer.autoClear;for(this.renderer.autoClear=!1,this.quad.material=this.maxMat;e>4||t>4;){const c=Math.ceil(e/4),u=Math.ceil(t/4);this.redRTs[r]||(this.redRTs[r]=new Jn(c,u,{type:nn,format:$t,minFilter:ht,magFilter:ht,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}));const d=this.maxMat.uniforms;d.uSrc.value=n,d.uFirst.value=s,d.uSrcSize.value.set(e,t),this.renderer.setRenderTarget(this.redRTs[r]),this.renderer.render(this.scene,this.camera),n=this.redRTs[r].texture,e=c,t=u,s=0,r++}let l=0;if(r>0){this.renderer.readRenderTargetPixels(this.redRTs[r-1],0,0,e,t,this.redBuf);for(let c=0;c<e*t;c++)l=Math.max(l,this.redBuf[c*4])}return this.renderer.autoClear=o,this.renderer.setRenderTarget(a),l}readCell(e,t){e=Math.min(this.W-1,Math.max(0,e)),t=Math.min(this.H-1,Math.max(0,t)),this.renderer.readRenderTargetPixels(this.rtA,e,t,1,1,this.cellBuf);const n=this.renderer.getContext(),s=this.renderer.properties.get(this.rtA).__webglFramebuffer,r=this.renderer.getRenderTarget();return this.renderer.state.bindFramebuffer(n.FRAMEBUFFER,s),n.readBuffer(n.COLOR_ATTACHMENT1),n.readPixels(e,t,1,1,n.RGBA,n.FLOAT,this.cellAux),n.readBuffer(n.COLOR_ATTACHMENT0),this.renderer.setRenderTarget(r),{state:this.cellBuf,aux:this.cellAux}}readState(){return this.renderer.readRenderTargetPixels(this.rtA,0,0,this.W,this.H,this.readBuf),this.readBuf}readAux(){const e=this.renderer.getContext(),t=this.renderer.properties.get(this.rtA).__webglFramebuffer,n=this.renderer.getRenderTarget();return this.renderer.state.bindFramebuffer(e.FRAMEBUFFER,t),e.readBuffer(e.COLOR_ATTACHMENT1),e.readPixels(0,0,this.W,this.H,e.RGBA,e.FLOAT,this.auxBuf),e.readBuffer(e.COLOR_ATTACHMENT0),this.renderer.setRenderTarget(n),this.auxBuf}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.terrainTex.dispose(),this.modTex.dispose(),this.faceModTex.dispose(),this.chanTex.dispose(),this.sgTex?.forEach(e=>e.dispose()),this.fluxMat.dispose(),this.depthMat.dispose(),this.initMat.dispose(),this.copyMat.dispose(),this.maxMat.dispose(),this.connMat.dispose(),this.copy1Mat.dispose(),this.quad.geometry.dispose(),this.connTex0?.dispose(),this.connTex1?.dispose(),this.connMapTex.dispose(),this.connRTA?.dispose(),this.connRTB?.dispose();for(const e of this.redRTs)e.dispose()}};I($l,"FACE_NONE",-1e4);let Jr=$l;const rb="hkfl-runs",ab=1,ob=6e8,ah=typeof CompressionStream<"u"&&typeof DecompressionStream<"u";async function Vr(i,e=!1){const t=new Blob([i]).stream().pipeThrough(e?new DecompressionStream("gzip"):new CompressionStream("gzip"));return new Response(t).arrayBuffer()}function ns(i){return new Promise((e,t)=>{i.onsuccess=()=>e(i.result),i.onerror=()=>t(i.error)})}function al(i){return new Promise((e,t)=>{i.oncomplete=()=>e(),i.onerror=()=>t(i.error),i.onabort=()=>t(i.error)})}function lb(i){const e=JSON.stringify(i);let t=5381,n=52711;for(let s=0;s<e.length;s++){const r=e.charCodeAt(s);t=(t*33^r)>>>0,n=(n*31^r)>>>0}return`${t.toString(16).padStart(8,"0")}${n.toString(16).padStart(8,"0")}`}class Ll{constructor(e){this.db=e}static async open(){if(typeof indexedDB>"u")return null;try{const e=indexedDB.open(rb,ab);return e.onupgradeneeded=()=>{const t=e.result;t.createObjectStore("frames",{keyPath:"key"}).createIndex("run","run",{unique:!1}),t.createObjectStore("runs",{keyPath:"run"})},new Ll(await ns(e))}catch{return null}}async list(e){const t=this.db.transaction(["frames","runs"],"readwrite"),n=await ns(t.objectStore("frames").index("run").getAllKeys(IDBKeyRange.only(e))),s=await ns(t.objectStore("runs").get(e));return s&&(s.at=Date.now(),t.objectStore("runs").put(s)),await al(t),n.map(r=>Number(String(r).split("|")[1])).filter(r=>Number.isFinite(r)).sort((r,a)=>r-a)}async get(e,t){const n=this.db.transaction("frames","readonly"),s=await ns(n.objectStore("frames").get(`${e}|${t}`));if(!s)return null;const[r,a]=s.gz?await Promise.all([Vr(s.state,!0),Vr(s.aux,!0)]):[s.state,s.aux],o=s.conn?s.gz?await Vr(s.conn,!0):s.conn:void 0;return{t:s.t,dt:s.dt,maxDepthSeen:s.maxDepthSeen,state:r,aux:a,conn:o}}async put(e,t){const[n,s]=ah?await Promise.all([Vr(t.state),Vr(t.aux)]):[t.state,t.aux],r=t.conn?ah?await Vr(t.conn):t.conn:void 0,a={key:`${e}|${t.t}`,run:e,t:t.t,dt:t.dt,maxDepthSeen:t.maxDepthSeen,gz:ah,state:n,aux:s,conn:r,bytes:n.byteLength+s.byteLength+(r?.byteLength??0)},o=this.db.transaction(["frames","runs"],"readwrite"),l=await ns(o.objectStore("frames").get(a.key));o.objectStore("frames").put(a);const c=await ns(o.objectStore("runs").get(e))??{run:e,at:0,bytes:0,frames:0};c.at=Date.now(),c.bytes+=a.bytes-(l?.bytes??0),c.frames+=l?0:1,o.objectStore("runs").put(c),await al(o),await this.evict(e)}async evict(e){const t=this.db.transaction("runs","readonly"),n=await ns(t.objectStore("runs").getAll());let s=n.reduce((r,a)=>r+a.bytes,0);for(const r of n.sort((a,o)=>a.at-o.at)){if(s<=ob)break;r.run!==e&&(await this.remove(r.run),s-=r.bytes)}}async remove(e){const t=this.db.transaction(["frames","runs"],"readwrite"),n=await ns(t.objectStore("frames").index("run").getAllKeys(IDBKeyRange.only(e)));for(const s of n)t.objectStore("frames").delete(s);t.objectStore("runs").delete(e),await al(t)}async clear(){const e=this.db.transaction(["frames","runs"],"readwrite");e.objectStore("frames").clear(),e.objectStore("runs").clear(),await al(e)}async stats(){const e=this.db.transaction("runs","readonly"),t=await ns(e.objectStore("runs").getAll());return{bytes:t.reduce((n,s)=>n+s.bytes,0),runs:t.length}}}const Kf={type:"change"},Gu={type:"start"},Km={type:"end"},ol=new vo,Zf=new ws,cb=Math.cos(70*Jt.DEG2RAD),dn=new z,Zn=2*Math.PI,Ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},oh=1e-6;class hb extends Yw{constructor(e,t=null){super(e,t),this.state=Ft.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Di.ROTATE,MIDDLE:Di.DOLLY,RIGHT:Di.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new ar,this._lastTargetPosition=new z,this._quat=new ar().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yf,this._sphericalDelta=new Yf,this._scale=1,this._panOffset=new z,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new z,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=db.bind(this),this._onPointerDown=ub.bind(this),this._onPointerUp=fb.bind(this),this._onContextMenu=yb.bind(this),this._onMouseWheel=gb.bind(this),this._onKeyDown=vb.bind(this),this._onTouchStart=_b.bind(this),this._onTouchMove=xb.bind(this),this._onMouseDown=pb.bind(this),this._onMouseMove=mb.bind(this),this._interceptControlDown=Mb.bind(this),this._interceptControlUp=Sb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kf),this.update(),this.state=Ft.NONE}update(e=null){const t=this.object.position;dn.copy(t).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===Ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Zn:n>Math.PI&&(n-=Zn),s<-Math.PI?s+=Zn:s>Math.PI&&(s-=Zn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),t.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=dn.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ol.origin.copy(this.object.position),ol.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ol.direction))<cb?this.object.lookAt(this.target):(Zf.setFromNormalAndCoplanarPoint(this.object.up,this.target),ol.intersectPlane(Zf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>oh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>oh||this._lastTargetPosition.distanceToSquared(this.target)>oh?(this.dispatchEvent(Kf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zn/60*this.autoRotateSpeed*e:Zn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){dn.setFromMatrixColumn(t,0),dn.multiplyScalar(-e),this._panOffset.add(dn)}_panUp(e,t){this.screenSpacePanning===!0?dn.setFromMatrixColumn(t,1):(dn.setFromMatrixColumn(t,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(e),this._panOffset.add(dn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;dn.copy(s).sub(this.target);let r=dn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Zn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Zn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Zn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Zn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new we,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ub(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function db(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function fb(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Km),this.state=Ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function pb(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ft.DOLLY;break;case Di.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ft.ROTATE}break;case Di.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ft.PAN}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(Gu)}function mb(i){switch(this.state){case Ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function gb(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ft.NONE||(i.preventDefault(),this.dispatchEvent(Gu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Km))}function vb(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function _b(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Cs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ft.TOUCH_ROTATE;break;case Cs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ft.TOUCH_PAN;break;default:this.state=Ft.NONE}break;case 2:switch(this.touches.TWO){case Cs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ft.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ft.TOUCH_DOLLY_ROTATE;break;default:this.state=Ft.NONE}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(Gu)}function xb(i){switch(this._trackPointer(i),this.state){case Ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ft.NONE}}function yb(i){this.enabled!==!1&&i.preventDefault()}function Mb(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sb(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wb(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}class Ei{constructor(e,t){I(this,"camera");I(this,"controls");I(this,"tween",null);I(this,"tour",null);I(this,"touring",!1);I(this,"onTourEnd");this.camera=e,this.controls=new hb(e,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI*.49,this.controls.minDistance=25,this.controls.maxDistance=6e4,this.controls.screenSpacePanning=!1,this.controls.mouseButtons={LEFT:Di.PAN,MIDDLE:Di.DOLLY,RIGHT:Di.ROTATE},this.controls.touches={ONE:Cs.PAN,TWO:Cs.DOLLY_ROTATE};const n=s=>{this.controls.mouseButtons.LEFT=s.shiftKey||s.ctrlKey?Di.ROTATE:Di.PAN};window.addEventListener("keydown",n),window.addEventListener("keyup",n),this.controls.zoomSpeed=1.2,t.addEventListener("pointerdown",()=>{this.touring&&this.stopTour(),this.tween=null}),t.addEventListener("wheel",()=>{this.touring&&this.stopTour(),this.tween=null},{passive:!0})}state(){return{pos:this.camera.position.clone(),target:this.controls.target.clone()}}flyTo(e,t=2.5,n){this.tween={from:this.state(),to:e,t0:performance.now(),dur:t*1e3,onDone:n}}jumpTo(e){this.camera.position.copy(e.pos),this.controls.target.copy(e.target),this.controls.update()}static viewOf(e,t,n=150,s=35){const r=Jt.degToRad(n),a=Jt.degToRad(s);return{pos:new z(e.x+t*Math.cos(a)*Math.sin(r),e.y+t*Math.sin(a),e.z+t*Math.cos(a)*Math.cos(r)),target:e.clone()}}startTour(e){e.length&&(this.touring=!0,this.tour={stops:e,i:0,phase:"fly",t0:performance.now()},this.flyTo(e[0],3.5,()=>{this.tour&&(this.tour.phase="orbit",this.tour.t0=performance.now())}))}stopTour(){this.touring=!1,this.tour=null,this.controls.autoRotate=!1,this.onTourEnd?.()}update(e){const t=performance.now();if(this.tween){const n=Math.min(1,(t-this.tween.t0)/this.tween.dur),s=wb(n);if(this.camera.position.lerpVectors(this.tween.from.pos,this.tween.to.pos,s),this.controls.target.lerpVectors(this.tween.from.target,this.tween.to.target,s),n>=1){const r=this.tween.onDone;this.tween=null,r?.()}}if(this.tour&&this.touring&&this.tour.phase==="orbit"){const n=(t-this.tour.t0)/1e3,s=new z().subVectors(this.camera.position,this.controls.target);if(s.applyAxisAngle(new z(0,1,0),e*.12),this.camera.position.copy(this.controls.target).add(s),n>7){this.tour.i=(this.tour.i+1)%this.tour.stops.length,this.tour.phase="fly",this.tour.t0=t;const r=this.tour.stops[this.tour.i];this.flyTo(r,3.5,()=>{this.tour&&(this.tour.phase="orbit",this.tour.t0=performance.now())})}}this.controls.update()}}const bb=`
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
`,Tb=`
precision highp float;
in vec3 position; out vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Eb=`
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
`,Ab=`
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
`;class Jf{constructor(e,t,n,s,r,a,o,l,c=128){I(this,"N");I(this,"renderer");I(this,"rtA");I(this,"rtB");I(this,"scene",new Kl);I(this,"camera",new jl(-1,1,1,-1,0,1));I(this,"quad");I(this,"updateMat");I(this,"pointMat");I(this,"group",new rs);I(this,"spawnTex");I(this,"spawnData");I(this,"spawnCap");I(this,"time",0);I(this,"speedScale",30);this.renderer=e,this.N=c;const u=()=>{const x=new Jn(c,c,{count:2,type:nn,format:$t,minFilter:ht,magFilter:ht,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});for(const y of x.textures)y.wrapS=$n,y.wrapT=$n;return x};this.rtA=u(),this.rtB=u();const d=1024,h=64;this.spawnCap=d*h,this.spawnData=new Float32Array(this.spawnCap*4),this.spawnTex=new tr(this.spawnData,d,h,$t,nn),this.spawnTex.minFilter=ht,this.spawnTex.magFilter=ht,this.spawnTex.needsUpdate=!0,this.updateMat=new oi({vertexShader:Tb,fragmentShader:bb,glslVersion:Wn,depthTest:!1,depthWrite:!1,uniforms:{uPart:{value:null},uTail:{value:null},uState:{value:r},uTerrain:{value:a},uSpawn:{value:this.spawnTex},uSpawnCount:{value:0},uSpawnSize:{value:new we(d,h)},uSize:{value:new we(t,n)},uDx:{value:s},uDt:{value:.016},uTime:{value:0},uSpeedScale:{value:this.speedScale},uLife:{value:7}}}),this.quad=new _t(new fr(2,2),this.updateMat),this.quad.frustumCulled=!1,this.scene.add(this.quad);const f=c*c,g=new Float32Array(f);for(let x=0;x<f;x++)g[x]=x;const _=new en;_.setAttribute("pid",new Pn(g,1));const m=new Wi(new z(-1e6,-1e6,-1e6),new z(1e6,1e6,1e6));_.boundingBox=m,_.boundingSphere=m.getBoundingSphere(new $i),this.pointMat=new oi({vertexShader:Eb,fragmentShader:Ab,glslVersion:Wn,transparent:!0,depthWrite:!1,blending:er,uniforms:{uPart:{value:this.rtA.textures[0]},uTail:{value:this.rtA.textures[1]},uState:{value:r},uTerrain:{value:a},uMod:{value:o},uN:{value:new we(c,c)},uSize:{value:new we(t,n)},uDx:{value:s},uBuildings:l.uBuildings,uBldBlock:l.uBldBlock,uLife:{value:7},uNight:l.uNight,uDpr:{value:e.getPixelRatio()},uViewport:{value:new we(1,1)}}});const p=new mw(_,this.pointMat);p.frustumCulled=!1,p.renderOrder=16,this.group.add(p),this.group.renderOrder=16,this.reset()}setState(e){this.updateMat.uniforms.uState.value=e,this.pointMat.uniforms.uState.value=e}setSpawn(e,t){const n=Math.min(t,this.spawnCap);if(t>this.spawnCap){const s=t/this.spawnCap;for(let r=0;r<this.spawnCap;r++){const a=Math.floor(r*s);this.spawnData[r*4]=e[a*2],this.spawnData[r*4+1]=e[a*2+1]}}else for(let s=0;s<n;s++)this.spawnData[s*4]=e[s*2],this.spawnData[s*4+1]=e[s*2+1];this.spawnTex.needsUpdate=!0,this.updateMat.uniforms.uSpawnCount.value=n}reset(){const e=this.renderer.getRenderTarget(),t=this.renderer.getClearColor(new rt),n=this.renderer.getClearAlpha();for(const s of[this.rtA,this.rtB])this.renderer.setRenderTarget(s),this.renderer.setClearColor(new rt(-1,-1,0),1),this.renderer.clear();this.renderer.setRenderTarget(e),this.renderer.setClearColor(t,n),this.updateMat.uniforms.uSpawnCount.value=0}update(e,t){this.time+=e,this.speedScale=Jt.clamp(t*.05,15,220);const n=this.updateMat.uniforms;n.uPart.value=this.rtA.textures[0],n.uTail.value=this.rtA.textures[1],n.uDt.value=Math.min(e,.05),n.uTime.value=this.time,n.uSpeedScale.value=this.speedScale;const s=this.renderer.getRenderTarget(),r=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.renderer.autoClear=r,this.renderer.setRenderTarget(s),[this.rtA,this.rtB]=[this.rtB,this.rtA];const a=this.pointMat.uniforms;a.uPart.value=this.rtA.textures[0],a.uTail.value=this.rtA.textures[1];const o=this.renderer.getDrawingBufferSize(new we);a.uViewport.value.copy(o),a.uDpr.value=this.renderer.getPixelRatio()}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.spawnTex.dispose(),this.updateMat.dispose(),this.pointMat.dispose(),this.quad.geometry.dispose();for(const e of this.group.children)e.geometry.dispose();this.group.clear()}}const Cb=`
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
`,Rb=`
precision highp float;
in float vSpd; in float vA; out vec4 fragColor;
void main() {
  if (vA < 0.5) discard;
  vec3 col = mix(vec3(0.75, 0.95, 1.0), vec3(1.0, 0.86, 0.45), smoothstep(0.2, 1.8, vSpd));
  fragColor = vec4(col, 0.9);
}
`;class Qf{constructor(e,t,n,s,r,a,o){I(this,"mesh");I(this,"mat");const l=Math.max(2,Math.round(35/n)),c=new en,u=.07,d=.22,h=.38,f=new Float32Array([0,0,-u,1-h,0,-u,1-h,0,u,0,0,u,1-h,0,-d,1,0,0,1-h,0,d]);c.setAttribute("position",new Pn(f,3)),c.setIndex([0,1,2,0,2,3,4,5,6,0,2,1,0,3,2,4,6,5]);const g=new jw;g.index=c.index,g.attributes.position=c.attributes.position;const _=[];for(let p=Math.floor(l/2);p<t;p+=l)for(let x=Math.floor(l/2);x<e;x+=l)_.push(x,p);g.setAttribute("cell",new ru(new Float32Array(_),2)),g.instanceCount=_.length/2;const m=new Wi(new z(-1e6,-1e6,-1e6),new z(1e6,1e6,1e6));g.boundingBox=m,g.boundingSphere=m.getBoundingSphere(new $i),this.mat=new oi({vertexShader:Cb,fragmentShader:Rb,glslVersion:Wn,transparent:!0,depthWrite:!1,side:ai,uniforms:{uState:{value:s},uTerrain:{value:r},uMod:{value:a},uSize:{value:new we(e,t)},uDx:{value:n},uBuildings:o.uBuildings,uBldBlock:o.uBldBlock,uScale:{value:l*.8}}}),this.mesh=new _t(g,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=14}setState(e){this.mat.uniforms.uState.value=e}dispose(){this.mesh.geometry.dispose(),this.mat.dispose()}}const Pb=`
precision highp float; precision highp int; precision highp sampler2D;
uniform sampler2D uPrev; uniform sampler2D uState; uniform sampler2D uAux; uniform sampler2D uTerrain; uniform sampler2D uMod; uniform sampler2D uFaceMod;
// a cell with a wall crest on any of its four faces (its own east / north, the west neighbour's east, the south neighbour's north)
bool walled(ivec2 c) {
  if (texelFetch(uFaceMod, c, 0).r > -1.0e3 || texelFetch(uFaceMod, c, 0).g > -1.0e3) return true;
  if (c.x > 0 && texelFetch(uFaceMod, c - ivec2(1, 0), 0).r > -1.0e3) return true;
  if (c.y > 0 && texelFetch(uFaceMod, c - ivec2(0, 1), 0).g > -1.0e3) return true;
  return false;
}
uniform float uAdvance; uniform float uSubgrid; uniform float uReset; uniform float uTau; uniform ivec2 uSize;
uniform sampler2D uSgC0; uniform sampler2D uSgC1; uniform float uHasSg;
out vec4 o;
// water level of a sub-grid cell from its volume-depth (same as the solver's etaOf, shaders.ts)
float etaOf(ivec2 c, float h) {
  vec4 a = texelFetch(uSgC0, c, 0), b = texelFetch(uSgC1, c, 0);
  float mr = texelFetch(uMod, c, 0).r;
  float z[9]; z[0] = a.r; z[1] = a.g; z[2] = a.b; z[3] = a.a; z[4] = b.r; z[5] = b.g; z[6] = b.b; z[7] = b.a; z[8] = 1.0e9;
  if (h <= 0.0) return z[0] + mr;
  float S = 0.0; float V = 8.0 * h;
  for (int k = 0; k < 8; k++) { S += z[k]; float eta = (V + S) / float(k + 1); if (eta <= z[k + 1]) return eta + mr; }
  return (V + S) / 8.0 + mr;
}
float depthAt(ivec2 c, vec4 t) { return (uSubgrid > 0.5 && t.a < 0.75) ? texelFetch(uAux, c, 0).a : texelFetch(uState, c, 0).r; }
void main() {
  ivec2 ij = ivec2(gl_FragCoord.xy);
  vec4 t = texelFetch(uTerrain, ij, 0);
  float h = depthAt(ij, t);
  if (t.a > 0.75) h = 0.0;
  // far-view depth: 5x5 weighted mean over the open land cells around (buildings, sea and basins excluded, and zero on
  // them) so that from afar the flood reads as smooth patches instead of one speck per cell
  float hs = 0.0;
  if (t.g <= 0.0 && t.a < 0.25 && texelFetch(uMod, ij, 0).r < 0.3) {
    float sum = 0.0, cnt = 0.0;
    for (int dj = -2; dj <= 2; dj++) for (int di = -2; di <= 2; di++) {
      ivec2 c = clamp(ij + ivec2(di, dj), ivec2(0), uSize - ivec2(1));
      vec4 tc = texelFetch(uTerrain, c, 0); if (tc.a > 0.25 || tc.g > 0.0) continue;
      // a wall (raised cell) is left out and nothing is averaged across it: the smoothed water stops at a wall too
      ivec2 mid = clamp(ij + ivec2(di / 2, dj / 2), ivec2(0), uSize - ivec2(1));
      if (texelFetch(uMod, c, 0).r >= 0.3 || texelFetch(uMod, mid, 0).r >= 0.3 || walled(c) || walled(mid)) continue;
      float wgt = (abs(di) + abs(dj) <= 2) ? 1.0 : 0.5;
      sum += depthAt(c, tc) * wgt; cnt += wgt;
    }
    hs = cnt > 0.0 ? sum / cnt : 0.0;
  }
  // the water level of the cell (absolute m): sub-grid cells from their storage table, others ground + depth
  float hv = texelFetch(uState, ij, 0).r;
  float eta = (uSubgrid > 0.5 && uHasSg > 0.5) ? etaOf(ij, hv) : t.r + texelFetch(uMod, ij, 0).r + hv;
  vec4 p = texelFetch(uPrev, ij, 0);
  if (uReset > 0.5) { o = vec4(h, 0.0, hs, eta); return; }
  float k = 1.0 - exp(-uAdvance / uTau);
  float avg = p.r + (h - p.r) * k;
  float rate = (h - avg) / uTau * 3600.0;
  o = vec4(avg, rate, hs, eta);
}
`,Db=`
precision highp float;
in vec3 position;
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`;class ep{constructor(e,t,n,s,r,a,o,l,c=null){I(this,"renderer");I(this,"rtA");I(this,"rtB");I(this,"scene",new Kl);I(this,"camera",new jl(-1,1,1,-1,0,1));I(this,"quad");I(this,"mat");I(this,"stateTex");this.renderer=e,this.stateTex=s;const u=()=>{const d=new Jn(t,n,{type:nn,format:$t,minFilter:ht,magFilter:ht,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});return d.texture.wrapS=$n,d.texture.wrapT=$n,d};this.rtA=u(),this.rtB=u(),this.mat=new oi({vertexShader:Db,fragmentShader:Pb,glslVersion:Wn,depthTest:!1,depthWrite:!1,uniforms:{uPrev:{value:null},uState:{value:s},uAux:{value:r},uTerrain:{value:a},uMod:{value:o},uFaceMod:{value:l},uSgC0:{value:c?c.c0:o},uSgC1:{value:c?c.c1:o},uHasSg:{value:c?1:0},uAdvance:{value:0},uSubgrid:{value:0},uReset:{value:1},uTau:{value:900},uSize:{value:new we(t,n)}}}),this.quad=new _t(new fr(2,2),this.mat),this.quad.frustumCulled=!1,this.scene.add(this.quad)}get texture(){return this.rtA.texture}setState(e,t){this.stateTex=e,this.mat.uniforms.uState.value=e,this.mat.uniforms.uAux.value=t}update(e,t,n=!1){if(e<=0&&!n)return;const s=this.mat.uniforms;s.uPrev.value=this.rtA.texture,s.uAdvance.value=e,s.uSubgrid.value=t?1:0,s.uReset.value=n?1:0;const r=this.renderer.getRenderTarget(),a=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.renderer.autoClear=a,this.renderer.setRenderTarget(r),[this.rtA,this.rtB]=[this.rtB,this.rtA]}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.mat.dispose(),this.quad.geometry.dispose()}}const ll=4096,tp=8,np=64;class Lb{constructor(e,t,n){I(this,"atlas");I(this,"index");I(this,"info");I(this,"slots",new Array(np).fill(null));I(this,"where",new Map);I(this,"pending",new Set);I(this,"tick",0);I(this,"lastKey","");I(this,"indexData");this.renderer=e,this.baseUrl=t,this.info=n,this.atlas=new tr(new Uint8Array(ll*ll*4),ll,ll,$t,Fi),this.atlas.minFilter=ht,this.atlas.magFilter=ht,this.atlas.generateMipmaps=!1,this.atlas.flipY=!1,this.atlas.needsUpdate=!0,this.indexData=new Uint8Array(n.nx*n.ny*4).fill(255),this.index=new tr(this.indexData,n.nx,n.ny,$t,Fi),this.index.minFilter=ht,this.index.magFilter=ht,this.index.generateMipmaps=!1,this.index.flipY=!1,this.index.needsUpdate=!0}update(e,t,n){this.tick++;const{tile:s,res:r,nx:a,ny:o,rows:l}=this.info,c=s*r,u=e/r,d=l-t/r,h=Math.floor(u/s),f=Math.floor(d/s),g=Math.max(1,Math.ceil(n/c)),_=`${h},${f},${g}`;if(_===this.lastKey)return;this.lastKey=_;const m=[];for(let p=f-g;p<=f+g;p++)for(let x=h-g;x<=h+g;x++){if(x<0||p<0||x>=a||p>=o)continue;const y=Math.hypot((x+.5)*c-e,l*r-(p+.5)*c-t);y>n+c||m.push({k:`${x}_${p}`,tx:x,ty:p,d:y})}m.sort((p,x)=>p.d-x.d);for(const p of m.slice(0,np)){const x=this.where.get(p.k);if(x){x.used=this.tick;continue}this.pending.has(p.k)||(this.pending.add(p.k),this.load(p.k,p.tx,p.ty))}}async load(e,t,n){try{const s=await fetch(`${this.baseUrl}/fine/${e}.png`);if(!s.ok)throw new Error(String(s.status));const r=await createImageBitmap(await s.blob(),{imageOrientation:"none",premultiplyAlpha:"none"}),a=this.freeSlot();if(a<0){r.close();return}this.put(a,e,t,n,r),r.close()}catch{}finally{this.pending.delete(e)}}freeSlot(){let e=this.slots.indexOf(null);if(e>=0)return e;let t=-1,n=1/0;for(const[o,l]of this.where)if(l.used<n&&(n=l.used,t=l.slot,n===0))break;if(t<0)return-1;const s=this.slots[t];this.where.delete(s),this.slots[t]=null;const[r,a]=s.split("_").map(Number);return this.setIndex(r,a,255),t}put(e,t,n,s,r){const a=this.renderer.getContext();this.renderer.properties.get(this.atlas).__webglTexture||this.renderer.initTexture(this.atlas);const l=this.renderer.properties.get(this.atlas).__webglTexture;if(!l)return;const c=e%tp*this.info.tile,u=Math.floor(e/tp)*this.info.tile;this.renderer.state.bindTexture(a.TEXTURE_2D,l),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.texSubImage2D(a.TEXTURE_2D,0,c,u,a.RGBA,a.UNSIGNED_BYTE,r),this.slots[e]=t,this.where.set(t,{slot:e,used:this.tick}),this.setIndex(n,s,e)}setIndex(e,t,n){const s=(t*this.info.nx+e)*4;this.indexData[s]=n,this.indexData[s+1]=0,this.indexData[s+2]=0,this.indexData[s+3]=255,this.index.needsUpdate=!0}get loaded(){return this.where.size}dispose(){this.atlas.dispose(),this.index.dispose(),this.where.clear(),this.slots.fill(null)}}const Wu=`
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
`,$u=`
vec3 applyFog(vec3 col, vec3 world) {
  float dist = length(world - uCam);
  float f = 1.0 - exp(-uFogDensity * dist);
  return mix(col, uFogColor, clamp(f, 0.0, 1.0));
}
`,Zm=`
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
`,Fb=`
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
`,Ib=`
precision highp float; precision highp int; precision highp sampler2D;
in vec2 vUv; in vec3 vWorld; in vec3 vNormal; in float vSea;
uniform sampler2D uMap; uniform sampler2D uState; uniform sampler2D uTerrain; uniform float uHasMap;
uniform ivec2 uSize; uniform float uDx; uniform float uShadow;
uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uFogColor; uniform float uFogDensity;
uniform float uStorm; uniform float uFlash; uniform float uNight; uniform float uShowMax;
out vec4 fragColor;
${Wu}
${$u}
${Zm}
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
`,Ub=`
precision highp float; precision highp int; precision highp sampler2D;
in vec2 cell;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
uniform sampler2D uTerrain; uniform sampler2D uMod; uniform sampler2D uState; uniform sampler2D uAux; uniform sampler2D uTrend;
uniform ivec2 uSize; uniform float uDx; uniform float uBuildings; uniform float uBldBlock; uniform float uSubgrid; uniform float uWaterMode; uniform float uViewH;
out vec2 vUv; out vec3 vWorld; out float vDepth; out float vVel; out float vSea; out float vRise; out float vLod; out float vEta;
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
  // level of detail: how many screen pixels one cell covers.  Seen from afar a 10 m cell is a 1-3 px speck and a city of
  // wet streets turns into snow; so the surface then takes the 5x5-smoothed depth (TrendField.b) and the fragment
  // shader drops the per-cell outline / contour / front details (vLod = 1 far, 0 near)
  vec4 clip0 = projectionMatrix * modelViewMatrix * vec4((cell.x + 0.5) * uDx, z, -(cell.y + 0.5) * uDx, 1.0);
  float cellPx = uDx * projectionMatrix[1][1] * 0.5 * uViewH / max(clip0.w, 1.0);
  vLod = (uWaterMode > 0.5 || t.a > 0.25) ? 0.0 : smoothstep(7.0, 2.5, cellPx);
  h = mix(h, texelFetch(uTrend, ij, 0).b, vLod);
  // water still at its maximum = the flood is rising / at its peak here (receding water sits below its hmax)
  vRise = (uWaterMode < 0.5 && t.a < 0.25 && s.a > 0.05 && s.r >= s.a * 0.97) ? 1.0 : 0.0;
  float eta = z + h;
  // the true water level for the 1 m reconstruction: sub-grid cells carry it in the tendency field (.a)
  vEta = (uSubgrid > 0.5 && t.a < 0.75 && uWaterMode < 0.5) ? texelFetch(uTrend, ij, 0).a : eta;
  float y = h > 0.015 ? eta : z + 0.02;
  if (t.a > 0.5) y = eta; // sea: always at the forced level
  vDepth = t.a > 0.5 ? max(h, 3.0) : h;
  vVel = a.g;
  vUv = (cell + 0.5) / vec2(uSize);
  vec3 p = vec3((cell.x + 0.5) * uDx, y, -(cell.y + 0.5) * uDx);
  vWorld = p;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,Nb=`
precision highp float; precision highp int; precision highp sampler2D;
in vec2 vUv; in vec3 vWorld; in float vDepth; in float vVel; in float vSea; in float vRise; in float vLod; in float vEta;
uniform float uTime; uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uFogColor; uniform float uFogDensity;
uniform float uStorm; uniform float uFlash; uniform float uNight; uniform float uRainI; uniform vec3 uSkyColor;
uniform sampler2D uTerrain; uniform sampler2D uTrend; uniform ivec2 uSize; uniform float uDx; uniform float uShadow; uniform float uWaterMode; uniform float uFx;
// 1 m reconstruction (HydroSnap-HK phase 4, render/FineTiles.ts): atlas of 512 px tiles (R,G = elevation cm, B = reach lift)
uniform float uFineOn; uniform sampler2D uFineAtlas; uniform sampler2D uFineIndex; uniform vec4 uFineInfo; uniform float uFineRows; uniform float uFineZOff; uniform float uFineLift;
uniform sampler2D uState;
// water level at a point: bilinear between the four nearest cell centres, WET cells only (a dry neighbour's "level" is its
// lowest pixel and would drag the surface down across half a cell; DW6 does the same nan-aware smoothing before its downscale)
float etaWet(vec2 world, float fallback) {
  vec2 g = vec2(world.x / uDx - 0.5, world.y / uDx - 0.5); ivec2 c0 = ivec2(floor(g)); vec2 fr = g - vec2(c0);
  float num = 0.0, den = 0.0;
  for (int j = 0; j < 2; j++) for (int i = 0; i < 2; i++) {
    ivec2 c = clamp(c0 + ivec2(i, j), ivec2(0), uSize - ivec2(1));
    float w = (i == 0 ? 1.0 - fr.x : fr.x) * (j == 0 ? 1.0 - fr.y : fr.y);
    if (texelFetch(uState, c, 0).r > 0.015) { num += w * texelFetch(uTrend, c, 0).a; den += w; }
  }
  return den > 0.0 ? num / den : fallback;
}
out vec4 fragColor;
${Wu}
${$u}
${Zm}
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
  // far views: thin sheets (wet streets under heavy rain) are not shown, only water that would still be there after
  // smoothing; near views: everything from 1.5 cm
  float vis0 = mix(0.015, 0.10, vLod), vis1 = mix(0.05, 0.22, vLod);
  // max-depth map: from ankle depth (0.1 m) up - under a rainstorm every street has carried a film of water at some point
  if (uWaterMode > 0.5) { vis0 = 0.10; vis1 = 0.16; }
  if (vDepth < vis0) discard;
  bool sea = vSea > 0.75; bool lake = vSea > 0.25 && !sea;
  float dist = length(uCam - vWorld);
  float near = 1.0 - smoothstep(250.0, 900.0, dist);                 // street-scale detail fades with distance
  float fine = 1.0 - vLod;                                           // per-cell details only when a cell is several pixels wide
  // 1 m reconstruction near the camera: the interpolated water level against the 1 m ground, and only where that pixel
  // is reachable from its cell's lowest point (reach lift); the coarse surface is cut at kerbs, walls and steps
  float dFine = -1.0;
  if (uFineOn > 0.5 && uWaterMode < 0.5 && !sea && !lake && vLod < 0.6) {
    vec2 f = vec2(vWorld.x / uFineInfo.w, uFineRows - (-vWorld.z) / uFineInfo.w);
    ivec2 t = ivec2(floor(f / uFineInfo.x));
    if (t.x >= 0 && t.y >= 0 && t.x < int(uFineInfo.y) && t.y < int(uFineInfo.z)) {
      float slot = texelFetch(uFineIndex, t, 0).r * 255.0;
      if (slot < 254.5) {
        vec2 inTile = clamp(f - vec2(t) * uFineInfo.x, 0.0, uFineInfo.x - 1.0);
        ivec2 ap = ivec2(vec2(mod(slot, 8.0), floor(slot / 8.0)) * uFineInfo.x + inTile);
        vec4 px = texelFetch(uFineAtlas, ap, 0);
        float z1 = (px.r * 65280.0 + px.g * 255.0) * 0.01 + uFineZOff;
        float lift = px.b * 255.0 * uFineLift;
        float etaF = etaWet(vec2(vWorld.x, -vWorld.z), vEta);
        float d1 = etaF - z1;
        if (d1 < 0.015 || etaF < z1 + lift - 0.01) discard;
        dFine = d1;
      }
    }
  }
  float depthV = dFine >= 0.0 ? dFine : vDepth;
  // tendency of the depth in sim time (m per hour, TrendField): rising > 0, receding < 0, standing water ~ 0
  float rate = texture(uTrend, vUv).g;
  float rising = smoothstep(0.02, 0.10, rate), receding = smoothstep(-0.02, -0.10, rate);
  if (uWaterMode > 0.5) { rising = 0.0; receding = 0.0; }
  // flood water: the depth colour, translucent over the ground where it is shallow, opaque where it is deep
  float alpha = smoothstep(vis0, vis1, depthV) * mix(0.66, 0.94, smoothstep(0.03, 0.6, depthV));
  alpha = mix(alpha, min(0.95, alpha + 0.12), vLod);
  vec3 col = depthColor(depthV);
  if (sea) { col = vec3(0.10, 0.34, 0.52); alpha = 0.62; }
  if (lake) { col = vec3(0.13, 0.30, 0.40); alpha = 0.72; }
  // surface: a calm mirror on ponded water, choppier with wind (storm) and with the flow speed
  // clean look (uFx = 0): a flat, still surface coloured by depth - no wind ripples, glints, foam or pulses
  float amp = (0.12 + 0.35 * uStorm + 0.35 * smoothstep(0.15, 1.0, vVel)) * uFx;
  vec2 p = vWorld.xz * 0.12;
  float n1 = vnoise(p + vec2(uTime * 0.22, uTime * 0.15));
  float n2 = vnoise(p * 2.1 - vec2(uTime * 0.27, -uTime * 0.19));
  float wave = (sin(vWorld.x * 0.35 + uTime * 1.8) + cos(vWorld.z * 0.31 - uTime * 1.5)) * 0.02 * (0.3 + uStorm) * uFx;
  vec3 n = normalize(vec3((n1 - 0.5) * amp + wave, 1.0, (n2 - 0.5) * amp - wave));
  vec3 V = normalize(uCam - vWorld);
  float fres = pow(1.0 - max(dot(n, V), 0.0), 3.0);
  col = mix(col, mix(uSkyColor, vec3(1.0), 0.1), fres * (sea ? 0.55 : 0.2));
  vec3 R = reflect(-uSun, n);
  float spec = pow(max(dot(R, V), 0.0), 110.0) * (1.0 - uStorm * 0.5) * (1.0 - uNight * 0.8) * uFx;
  col += spec * (sea ? 0.9 : 0.35);
  // white water where the flow is fast
  float foam = uWaterMode > 0.5 ? 0.0 : smoothstep(0.9, 2.6, vVel) * vnoise(vWorld.xz * 0.6 + uTime * 0.6) * uFx;
  col = mix(col, vec3(0.93, 0.96, 1.0), clamp(foam, 0.0, 0.7));
  if (!sea && !lake) {
    // depth contours at the impact classes (0.1 / 0.3 / 0.5 / 1 / 2 m): rings that march outwards while the water rises
    float fw = fwidth(vDepth);
    float lines = 0.0;
    float lv[5] = float[5](0.1, 0.3, 0.5, 1.0, 2.0);
    for (int i = 0; i < 5; i++) { float w = max(fw * 1.2, 0.004); lines = max(lines, 1.0 - smoothstep(w * 0.5, w * 1.5, abs(vDepth - lv[i]))); }
    lines *= (1.0 - smoothstep(0.03, 0.08, fw)) * fine;                 // gone where one pixel spans several centimetres
    col = mix(col, vec3(0.85, 0.95, 1.0), lines * 0.45);
    // tendency: rising water is lit and fresh, with soft bands travelling outwards (deep -> shallow);
    // receding water goes dull and a little muddy (water that has been standing)
    float band = smoothstep(0.55, 0.95, sin(uTime * 2.2 + vDepth * 16.0 + n1 * 1.5)) * (0.5 + 0.5 * vnoise(vWorld.xz * 0.05 + uTime * 0.1));
    col = mix(col, vec3(0.62, 0.90, 1.0), rising * (0.16 + 0.2 * band * fine * uFx));
    col = mix(col, col * vec3(0.76, 0.70, 0.58), receding * 0.7);
    // crisp outline at the wet / dry boundary, readable on any ground texture; a pulsing light band where it advances
    float edge = smoothstep(0.055, 0.02, vDepth) * fine;
    col = mix(col, vec3(0.03, 0.09, 0.26), edge * 0.85); alpha = mix(alpha, 0.96, edge);
    float front = smoothstep(0.03, 0.06, vDepth) * smoothstep(0.2, 0.08, vDepth) * fine;
    col = mix(col, vec3(0.78, 0.97, 1.0), rising * front * (0.4 + 0.35 * sin(uTime * 4.5) * uFx));
    if (uShadow > 0.5) col *= 1.0 - sunShadow(vUv, vWorld.y) * 0.22 * (1.0 - uNight * 0.5);
  }
  // rain rings near the camera (the old random sparkle read as noise from afar)
  float rip = (1.0 - uWaterMode) * clamp(uRainI, 0.0, 1.0) * near * fine * rainRings(vWorld.xz, uTime * 0.6) * uFx;
  col += rip * 0.35;
  col *= mix(1.0, 0.86, uStorm);
  col *= mix(1.0, sea ? 0.55 : 0.82, uNight);
  col += uFlash * 0.6;
  col = applyFog(col, vWorld);
  fragColor = vec4(col, alpha);
}
`,kb=`
precision highp float; precision highp int; precision highp sampler2D;
in vec3 position; in vec3 normal; in vec3 color; in vec2 bUv; in float lit;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
out vec3 vN; out vec3 vWorld; out vec3 vColor; out vec2 vUv; out float vLit;
void main() {
  vN = normal; vWorld = position; vColor = color; vUv = bUv; vLit = lit;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Ob=`
precision highp float; precision highp int; precision highp sampler2D;
in vec3 vN; in vec3 vWorld; in vec3 vColor; in vec2 vUv; in float vLit;
uniform sampler2D uTerrain; uniform sampler2D uState; uniform sampler2D uMod; uniform ivec2 uSize;
uniform float uTime; uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uFogColor; uniform float uFogDensity;
uniform float uStorm; uniform float uFlash; uniform float uNight; uniform float uBuildings; uniform vec3 uSkyColor; uniform float uWaterMode; uniform float uFx;
out vec4 fragColor;
${Wu}
${$u}
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
    float farB = uFx > 0.5 ? smoothstep(700.0, 2200.0, length(uCam - vWorld)) : 1.0;   // plain massing unless cinematic, and from afar
    base = mix(base, glassCol, glass * 0.16 * (1.0 - farB));
    base *= 1.0 - slab * 0.12 * (1.0 - farB);
    base *= mix(0.58, 1.0, smoothstep(0.0, 16.0, hAbove));   // ambient occlusion towards the street
  }
  vec3 col = base * light;
  // night windows (lit rooms)
  if (uNight > 0.05 && !roof && uFx > 0.5) {
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
`,zb=`
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
`,Bb=`
precision highp float;
in float vA; uniform float uNight;
out vec4 fragColor;
void main() { fragColor = vec4(0.72, 0.8, 0.92, vA * mix(1.0, 0.6, uNight)); }
`,Hb=`
precision highp float;
in vec3 position;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
out vec3 vDir;
void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,Vb=`
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
`,Gb=[11069183,5090802,2061275,1197480,1711987,5377894],Wb=[0,.1,.3,.5,1,2];class $b{constructor(e,t){I(this,"renderer");I(this,"scene",new Kl);I(this,"camera");I(this,"director");I(this,"assets",null);I(this,"W",0);I(this,"H",0);I(this,"dx",10);I(this,"grid",null);I(this,"terrain",null);I(this,"water",null);I(this,"buildings",null);I(this,"rain");I(this,"sky");I(this,"root",new rs);I(this,"exag",1);I(this,"waterMode","now");I(this,"measureGroup",new rs);I(this,"ugGroup",new rs);I(this,"ugItems",new Map);I(this,"ugLast",[]);I(this,"draftLine",null);I(this,"markerGroup",new rs);I(this,"pinGeo",{pin:new Ka(.45,.45,1,6),head:new Zr(2.6,12,10),ring:new Za(3,4.2,24),small:new Zr(1.6,10,8)});I(this,"pinWhite",new Ci({color:16777215}));I(this,"labelsDiv");I(this,"labelEls",new Map);I(this,"imageryTex",null);I(this,"basemapTex",null);I(this,"flowA",null);I(this,"flowB",null);I(this,"arrowsA",null);I(this,"arrowsB",null);I(this,"trendA",null);I(this,"trendB",null);I(this,"sgRef",null);I(this,"fine",null);I(this,"fineOn",!0);I(this,"pendingAdvance",0);I(this,"trendReset",!0);I(this,"terrainTexRef",null);I(this,"modTexRef",null);I(this,"faceModTexRef",null);I(this,"flowMode","particles");I(this,"split",null);I(this,"time",0);I(this,"flashT",0);I(this,"fx",!1);I(this,"view2d",!1);I(this,"shadowUser",!0);I(this,"nearSet",2);I(this,"U",{uTime:{value:0},uSun:{value:new z(.4,.75,.35).normalize()},uCam:{value:new z},uFogColor:{value:new rt(10466504)},uFogDensity:{value:12e-5},uStorm:{value:0},uFlash:{value:0},uNight:{value:0},uRainI:{value:0},uSubgrid:{value:0},uSkyColor:{value:new rt(9418464)},uShowMax:{value:0},uBuildings:{value:1},uBldBlock:{value:1},uWaterMode:{value:0},uExag:{value:1},uShadow:{value:1},uViewH:{value:900},uFx:{value:0},uFineOn:{value:0},uFineInfo:{value:new Qt(512,1,1,1)},uFineRows:{value:1},uFineZOff:{value:-50},uFineLift:{value:.05}});I(this,"tmpV2",new we);I(this,"terrainMat",null);I(this,"waterMat",null);I(this,"buildingMat",null);I(this,"rainMat");I(this,"skyMat");I(this,"texMode","imagery");I(this,"labelInset",{l:0,r:0,t:0,b:0});this.labelsDiv=t,this.renderer=new uw({canvas:e,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.outputColorSpace=mi,this.renderer.autoClear=!0,this.camera=new vi(50,1,2,12e4),this.director=new Ei(this.camera,e),this.root.add(this.measureGroup),this.root.add(this.markerGroup),this.root.add(this.ugGroup),this.scene.add(this.root),this.skyMat=new oi({vertexShader:Hb,fragmentShader:Vb,glslVersion:Wn,side:qn,depthWrite:!1,uniforms:{uSun:this.U.uSun,uStorm:this.U.uStorm,uFlash:this.U.uFlash,uNight:this.U.uNight,uTime:this.U.uTime}}),this.sky=new _t(new Zr(8e4,48,24),this.skyMat),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.scene.add(this.sky);const n=36e3,s=new Float32Array(n*2*4),r=new Float32Array(n*2);for(let o=0;o<n;o++){const l=(Math.random()-.5)*900,c=Math.random()*320,u=(Math.random()-.5)*900,d=Math.random();for(let h=0;h<2;h++){const f=(o*2+h)*4;s[f]=l,s[f+1]=c,s[f+2]=u,s[f+3]=d,r[o*2+h]=h}}const a=new en;a.setAttribute("a",new Pn(s,4)),a.setAttribute("end",new Pn(r,1)),this.rainMat=new oi({vertexShader:zb,fragmentShader:Bb,glslVersion:Wn,transparent:!0,depthWrite:!1,blending:_h,uniforms:{uTime:this.U.uTime,uCenter:{value:new z},uIntensity:this.U.uRainI,uWind:{value:.35},uNight:this.U.uNight}}),this.rain=new kf(a,this.rainMat),this.rain.frustumCulled=!1,this.rain.renderOrder=20,this.scene.add(this.rain),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}loadScene(e,t,n,s,r,a,o=null){this.clearScene(),this.assets=e,this.W=e.meta.cols,this.H=e.meta.rows,this.dx=e.meta.res;const l=this.W,c=this.H,u=new Float32Array(l*c*2);for(let p=0;p<c;p++)for(let x=0;x<l;x++){const y=(p*l+x)*2;u[y]=x,u[y+1]=p}const d=new Uint32Array((l-1)*(c-1)*6);let h=0;for(let p=0;p<c-1;p++)for(let x=0;x<l-1;x++){const y=p*l+x,w=y+1,F=y+l,C=F+1;d[h++]=y,d[h++]=w,d[h++]=F,d[h++]=w,d[h++]=C,d[h++]=F}this.grid=new en,this.grid.setAttribute("cell",new Pn(u,2)),this.grid.setIndex(new Pn(d,1));const f=new Wi(new z(0,-50,-c*this.dx),new z(l*this.dx,1200,0));this.grid.boundingBox=f,this.grid.boundingSphere=f.getBoundingSphere(new $i),this.imageryTex=e.imagery?this.imgTex(e.imagery):null,this.basemapTex=e.basemap?this.imgTex(e.basemap):null;const g=this.texMode==="imagery"?this.imageryTex??this.basemapTex:this.basemapTex??this.imageryTex,_={value:new we(l,c)};if(this.terrainMat=new oi({vertexShader:Fb,fragmentShader:Ib,glslVersion:Wn,uniforms:{...this.U,uTerrain:{value:t},uState:{value:s},uSize:_,uDx:{value:this.dx},uMap:{value:g},uHasMap:{value:g?1:0}}}),this.terrain=new _t(this.grid,this.terrainMat),this.terrain.frustumCulled=!1,this.terrain.renderOrder=0,this.root.add(this.terrain),this.faceModTexRef=a,this.sgRef=o,this.trendA=new ep(this.renderer,l,c,s,r,t,n,a,o),this.trendReset=!0,e.fine){this.fine=new Lb(this.renderer,e.dir,e.fine);const p=e.fine;this.U.uFineInfo.value.set(p.tile,p.nx,p.ny,p.res),this.U.uFineRows.value=p.rows,this.U.uFineZOff.value=p.z_off,this.U.uFineLift.value=p.lift_step}this.U.uFineOn.value=this.fine&&this.fineOn?1:0,this.waterMat=new oi({vertexShader:Ub,fragmentShader:Nb,glslVersion:Wn,transparent:!0,depthWrite:!1,side:ai,uniforms:{...this.U,uTerrain:{value:t},uMod:{value:n},uState:{value:s},uAux:{value:r},uTrend:{value:this.trendA.texture},uSize:_,uDx:{value:this.dx},uFineAtlas:{value:this.fine?this.fine.atlas:t},uFineIndex:{value:this.fine?this.fine.index:t}}}),this.water=new _t(this.grid,this.waterMat),this.water.frustumCulled=!1,this.water.renderOrder=10,this.root.add(this.water),this.buildBuildings(e,t,s,n,_),this.terrainTexRef=t,this.modTexRef=n,this.flowA=new Jf(this.renderer,l,c,this.dx,s,t,n,this.U),this.arrowsA=new Qf(l,c,this.dx,s,t,n,this.U),this.root.add(this.flowA.group),this.root.add(this.arrowsA.mesh),this.applyFlowMode();const m=this.defaultView();this.view2d?(this.director.jumpTo(this.topOf(m.target,m.pos.distanceTo(m.target)*1.25)),this.director.flyTo(m,1.6)):(this.director.jumpTo(Ei.viewOf(m.target,m.pos.distanceTo(m.target)*2.4,35,62)),this.director.flyTo(m,4))}imgTex(e){const t=new Nn(e);return t.colorSpace=mi,t.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),t.minFilter=Rs,t.magFilter=_i,t.generateMipmaps=!0,t.needsUpdate=!0,t}buildBuildings(e,t,n,s,r){const a=e.buildings;if(!a.length)return;const o=e.dem,l=this.W,c=this.H,u=this.dx,d=this.H*u,h=(F,C)=>{const R=Math.min(l-1,Math.max(0,Math.floor(F/u))),U=Math.min(c-1,Math.max(0,Math.floor(C/u)));return o[U*l+R]},f=[],g=[],_=[],m=[],p=[],x=[],y=new rt;for(const F of a){const C=F.r;if(C.length<3)continue;let R=1/0,U=-1/0;for(const[oe,me]of C){const he=h(oe,me);he<R&&(R=he),he>U&&(U=he)}if(!isFinite(R)||R<-1)continue;const ne=R-.5,S=R+Math.min(Math.max(F.h,3),420)+Math.min(U-R,8),b=F.h>70,W=b?.58+(Math.random()-.5)*.05:.09+(Math.random()-.5)*.06,B=b?.04+Math.random()*.04:.03+Math.random()*.04,Y=(b?.8:.86)+(Math.random()-.5)*.06;y.setHSL(W,B,Y);const J=Math.random();let K=0;for(let oe=0;oe<C.length;oe++){const me=C[oe],he=C[(oe+1)%C.length];K+=me[0]*he[1]-he[0]*me[1]}const k=K<0?[...C].reverse():C;for(let oe=0;oe<k.length;oe++){const me=k[oe],he=k[(oe+1)%k.length],se=he[0]-me[0],fe=he[1]-me[1],xe=Math.hypot(se,fe);if(xe<.2)continue;const ge=fe/xe,je=-se/xe,Ne=f.length/3,He=[[me[0],ne,me[1]],[he[0],ne,he[1]],[he[0],S,he[1]],[me[0],S,me[1]]];for(const[at,nt,O]of He)f.push(at,nt,-O),g.push(ge,0,-je),_.push(y.r*.92,y.g*.92,y.b*.92),m.push((at+.5)/(l*u),(O+.5)/d),p.push(J);x.push(Ne,Ne+1,Ne+2,Ne,Ne+2,Ne+3)}const ie=k.map(([oe,me])=>new we(oe,me));let pe=[];try{pe=na.triangulateShape(ie,[])}catch{pe=[]}const le=f.length/3;for(const[oe,me]of k)f.push(oe,S,-me),g.push(0,1,0),_.push(y.r,y.g,y.b),m.push((oe+.5)/(l*u),(me+.5)/d),p.push(0);for(const oe of pe)x.push(le+oe[0],le+oe[1],le+oe[2])}const w=new en;w.setAttribute("position",new Rt(f,3)),w.setAttribute("normal",new Rt(g,3)),w.setAttribute("color",new Rt(_,3)),w.setAttribute("bUv",new Rt(m,2)),w.setAttribute("lit",new Rt(p,1)),w.setIndex(x),this.buildingMat=new oi({vertexShader:kb,fragmentShader:Ob,glslVersion:Wn,uniforms:{...this.U,uTerrain:{value:t},uState:{value:n},uMod:{value:s},uSize:r}}),this.buildings=new _t(w,this.buildingMat),this.buildings.frustumCulled=!1,this.buildings.renderOrder=1,this.buildings.visible=!this.view2d,this.root.add(this.buildings)}setStateTextures(e,t){this.terrainMat&&(this.terrainMat.uniforms.uState.value=e),this.waterMat&&(this.waterMat.uniforms.uState.value=e,this.waterMat.uniforms.uAux.value=t,this.bindTrend()),this.buildingMat&&(this.buildingMat.uniforms.uState.value=e)}bindTrend(){if(!this.waterMat)return;const e=this.waterMat.uniforms.uState.value,t=this.trendB&&this.trendB.stateTex===e?this.trendB:this.trendA;this.waterMat.uniforms.uTrend.value=t?t.texture:null}advanceSim(e){this.pendingAdvance+=e}setSubgrid(e){this.U.uSubgrid.value=e?1:0,this.trendReset=!0}setBaselineTextures(e,t=null,n=null){this.flowB&&(this.root.remove(this.flowB.group),this.flowB.dispose(),this.flowB=null),this.arrowsB&&(this.root.remove(this.arrowsB.mesh),this.arrowsB.dispose(),this.arrowsB=null),this.trendB&&(this.trendB.dispose(),this.trendB=null),e&&this.terrainTexRef&&this.modTexRef&&(this.flowB=new Jf(this.renderer,this.W,this.H,this.dx,e,this.terrainTexRef,this.modTexRef,this.U),this.arrowsB=new Qf(this.W,this.H,this.dx,e,this.terrainTexRef,this.modTexRef,this.U),this.root.add(this.flowB.group),this.root.add(this.arrowsB.mesh),t&&(this.trendB=new ep(this.renderer,this.W,this.H,e,t,this.terrainTexRef,this.modTexRef,n??this.faceModTexRef??this.modTexRef,this.sgRef),this.trendReset=!0)),this.applyFlowMode(),this.bindTrend()}setFlowMode(e){this.flowMode=e,this.applyFlowMode()}get effFlow(){return this.waterMode==="max"?"none":this.flowMode}applyFlowMode(){const e=this.effFlow==="particles",t=this.effFlow==="arrows";this.flowA&&(this.flowA.group.visible=e),this.arrowsA&&(this.arrowsA.mesh.visible=t),this.flowB&&(this.flowB.group.visible=!1),this.arrowsB&&(this.arrowsB.mesh.visible=!1)}setFlowSpawn(e,t,n){(e==="A"?this.flowA:this.flowB)?.setSpawn(t,n)}resetFlow(){this.flowA?.reset(),this.flowB?.reset(),this.trendReset=!0,this.pendingAdvance=0}measuresChanged(){this.trendReset=!0}setTextureMode(e){if(this.texMode=e,!this.terrainMat)return;const t=e==="imagery"?this.imageryTex??this.basemapTex:this.basemapTex??this.imageryTex;this.terrainMat.uniforms.uMap.value=t,this.terrainMat.uniforms.uHasMap.value=t?1:0}setBuildingsBlock(e){this.U.uBuildings.value=e?1:0}setShowMax(e){this.U.uShowMax.value=e?1:0}setShadows(e){this.shadowUser=e,this.U.uShadow.value=e&&!this.view2d?1:0}setFx(e){this.fx=e,this.U.uFx.value=e&&!this.view2d?1:0,e||(this.flashT=0)}setView2D(e,t=!0){const n=this.director.controls,s=this.view2d;if(this.view2d=e,this.U.uFx.value=this.fx&&!e?1:0,this.U.uShadow.value=this.shadowUser&&!e?1:0,this.buildings&&(this.buildings.visible=!e),e&&(this.flashT=0),s===e)return;const r=n.target.clone(),a=this.camera.position.distanceTo(r),o=Math.tan(Jt.degToRad(25))/Math.tan(Jt.degToRad(15));this.camera.fov=e?30:50,this.camera.updateProjectionMatrix();const l=new z().subVectors(this.camera.position,r).multiplyScalar(e?o:1/o);if(this.camera.position.copy(r).add(l),n.enableRotate=!e,n.minDistance=e?120:25,!this.assets){n.maxPolarAngle=e?.004:Math.PI*.49;return}if(e){const c=this.topOf(r,a*o),u=()=>{this.view2d&&(n.maxPolarAngle=.004)};t?this.director.flyTo(c,1.4,u):(this.director.jumpTo(c),u())}else{n.maxPolarAngle=Math.PI*.49;const c=Ei.viewOf(r,a/o,20,42);t?this.director.flyTo(c,1.6):this.director.jumpTo(c)}}topOf(e,t){return Ei.viewOf(e,t,0,89.85)}setFine(e){this.fineOn=e,this.U.uFineOn.value=this.fine&&e?1:0}get fineLoaded(){return this.fine?this.fine.loaded:0}setWaterMode(e){this.waterMode=e,this.U.uWaterMode.value=e==="max"?1:0,this.applyFlowMode()}setExaggeration(e){const t=this.director.controls.target,n=e/this.exag;this.exag=e,this.root.scale.y=e,this.U.uExag.value=e,this.setBasements(this.ugLast);const s=t.y*(n-1);t.y+=s,this.camera.position.y+=s,this.director.controls.update()}cameraPreset(e,t){const n=this.director.controls.target,s=t?t.x:n.x,r=t?t.y:-n.z,a=new z(s,this.groundAt(s,r)*this.exag+2,-r),o=Math.max(this.W,this.H)*this.dx,l=new z().subVectors(this.camera.position,n),c=Jt.radToDeg(Math.atan2(l.x,l.z));if(this.view2d){this.director.flyTo(e==="bird"?this.defaultView():this.topOf(a,1400),1.8);return}if(e==="bird"){const u=new z(this.W*this.dx/2,0,-(this.H*this.dx)/2);u.y=this.groundAt(u.x,-u.z)*this.exag,this.director.flyTo(Ei.viewOf(u,o*.95,.01,84),2.2)}else e==="street"?this.director.flyTo(this.clearView(a.setY(a.y+3),240,c),2.4):this.director.flyTo(Ei.viewOf(a,900,c,32),2.2)}clearView(e,t,n){const s=this.assets;if(!s)return Ei.viewOf(e,t,n,10);const r=(a,o)=>{const l=Math.min(this.W-1,Math.max(0,Math.floor(a/this.dx))),u=Math.min(this.H-1,Math.max(0,Math.floor(o/this.dx)))*this.W+l;return(s.dem[u]+s.bldh[u])*this.exag};for(const a of[9,14,20,28])for(let o=0;o<12;o++){const l=n+(o%2?1:-1)*Math.ceil(o/2)*30,c=Ei.viewOf(e,t,l,a);let u=!0;for(let d=1;d<=24&&u;d++){const h=new z().lerpVectors(e,c.pos,d/24);r(h.x,-h.z)>h.y-2&&(u=!1)}if(u)return c}return Ei.viewOf(e,t,n,35)}clearScene(){for(const e of[this.terrain,this.water,this.buildings])e&&(this.root.remove(e),e.material.dispose());this.buildings&&this.buildings.geometry.dispose(),this.grid?.dispose(),this.grid=null,this.terrain=this.water=this.buildings=null,this.imageryTex?.dispose(),this.basemapTex?.dispose(),this.imageryTex=this.basemapTex=null,this.setBaselineTextures(null),this.flowA&&(this.root.remove(this.flowA.group),this.flowA.dispose(),this.flowA=null),this.arrowsA&&(this.root.remove(this.arrowsA.mesh),this.arrowsA.dispose(),this.arrowsA=null),this.trendA&&(this.trendA.dispose(),this.trendA=null),this.fine&&(this.fine.dispose(),this.fine=null),this.split=null,this.clearMeasures(),this.setLabels([]),this.clearBasements()}setWeather(e,t,n){const s=this.fx&&!this.view2d,r=s?Jt.clamp(1-Jt.smoothstep(Math.sin((n-6)/12*Math.PI),-.15,.15),0,1):0;s||(t*=.3,e=0,n=11),this.U.uNight.value=r*.22,this.U.uStorm.value=Jt.clamp(t,0,1),this.U.uRainI.value=Jt.clamp(e/60,0,1.6);const a=Math.max(Math.sin((n-6)/12*Math.PI),.08),o=(n-12)/12*Math.PI*.9;this.U.uSun.value.set(Math.sin(o)*Math.cos(a*1.3),Math.max(a,.15),Math.cos(o)*Math.cos(a*1.3)).normalize();const l=new rt(11123917),c=new rt(8161171),u=new rt(2897218),d=l.clone().lerp(c,this.U.uStorm.value).lerp(u,r*.8);this.U.uFogColor.value.copy(d),this.U.uSkyColor.value.copy(new rt(9418464).lerp(new rt(3818578),this.U.uStorm.value).lerp(new rt(1581104),r*.8));const h=Math.min(1,5e3/Math.max(1,this.W*this.dx));this.U.uFogDensity.value=(4e-5+3e-5*this.U.uStorm.value+2e-5*this.U.uRainI.value)*h,this.renderer.setClearColor(d)}lightning(){this.fx&&!this.view2d&&(this.flashT=.18)}setBasements(e){this.ugLast=e;const t=this.exag;for(const n of e){let s=this.ugItems.get(n.id);if(!s){const l=this.groundAt(n.x,n.y),c=Jt.clamp(Math.sqrt(n.area),18,160),u=new _t(new Pi(c,n.cap,c),new Ci({color:727610,transparent:!0,opacity:.22,depthTest:!1,depthWrite:!1}));u.position.set(n.x,l-n.cap/2,-n.y),u.renderOrder=11,this.ugGroup.add(u);const d=new kf(new Rw(u.geometry),new au({color:8087752,transparent:!0,opacity:.9,depthTest:!1}));d.position.copy(u.position),d.renderOrder=13,this.ugGroup.add(d);const h=new _t(new Pi(c*.96,1,c*.96),new Ci({color:2061275,transparent:!0,opacity:.5,depthTest:!1,depthWrite:!1}));h.renderOrder=12,this.ugGroup.add(h);const f=new _t(new Pi(2.6,1,2.6),new Ci({color:16777215,transparent:!0,opacity:.92})),g=new _t(new Pi(3.4,1,3.4),new Ci({color:2061275}));this.ugGroup.add(f),this.ugGroup.add(g),s={fill:h,post:g,postBg:f,cap:n.cap,z:l},this.ugItems.set(n.id,s)}const r=Math.min(n.depth,s.cap);s.fill.visible=r>.02,s.fill.scale.y=Math.max(r,.01),s.fill.position.set(n.x,s.z-s.cap+r/2,-n.y),s.fill.material.color.set(uu(r));const a=24/t,o=r/s.cap;s.postBg.scale.y=a,s.postBg.position.set(n.x,s.z+a/2,-n.y),s.post.visible=o>.01,s.post.scale.y=Math.max(.01,a*o),s.post.position.set(n.x,s.z+a*o/2,-n.y),s.post.material.color.set(uu(r))}}clearBasements(){for(const e of this.ugGroup.children){const t=e;t.geometry?.dispose(),t.material?.dispose()}this.ugGroup.clear(),this.ugItems.clear(),this.ugLast=[]}setLabels(e){const t=new Set(e.map(a=>a.id));for(const[a,o]of this.labelEls)t.has(a)||(o.el.remove(),this.labelEls.delete(a));for(const a of e){let o=this.labelEls.get(a.id);if(!o){const c=document.createElement("div");this.labelsDiv.appendChild(c),o={el:c,item:a,w:0},this.labelEls.set(a.id,o)}const l=`${a.text}${a.sub?`<span class="depth">${a.sub}</span>`:""}`;o.el.innerHTML!==l&&(o.w=0),o.item=a,o.el.className=`marker-label ${a.cls}`,a.color!==void 0&&o.el.style.setProperty("--dot",`#${a.color.toString(16).padStart(6,"0")}`),o.el.innerHTML=`${a.text}${a.sub?`<span class="depth">${a.sub}</span>`:""}`}const n=this.exag,s=this.pinGeo,r=this.pinWhite;for(const a of this.markerGroup.children){const o=a.material;o!==r&&o.dispose()}this.markerGroup.clear();for(const a of e){const o=this.groundAt(a.x,a.y),l=a.cls.includes("landmark"),c=a.cls.includes("upin"),u=a.cls.includes("measure"),d=a.color??(a.cls.includes("gauge")?2842585:a.cls.includes("none")?7042433:a.cls.includes("severe")?13648175:a.cls.includes("moderate")||a.cls.includes("val")?14060058:u?a.cls.includes("temporary")?1746837:6256276:l?5134180:7042433),h=l?14:u?20:c?34:26,f=new _t(s.pin,r);f.scale.set(1,h/n,1),f.position.set(a.x,o+h/2/n,-a.y),this.markerGroup.add(f);const g=new _t(l||u?s.small:s.head,new Ci({color:d}));if(g.scale.y=1/n,g.position.set(a.x,o+(h+1)/n,-a.y),this.markerGroup.add(g),l||u)continue;const _=new _t(s.ring,new Ci({color:d,transparent:!0,opacity:c?.9:.6,side:ai}));_.rotation.x=-Math.PI/2,_.position.set(a.x,o+.5/n,-a.y),c&&_.scale.setScalar(1.6),this.markerGroup.add(_)}}updateLabels(){const e=new z,t=window.innerWidth,n=window.innerHeight,s=o=>o.includes("upin")?-1:o.includes("val")?0:o.includes("gauge")?1:o.includes("severe")?2:o.includes("landmark")?4:o.includes("measure")?3.5:o.includes(" ug")?1.5:3,r=[];for(const o of this.labelEls.values()){const{el:l,item:c}=o;e.set(c.x,this.groundAt(c.x,c.y)*this.exag+(c.cls.includes("landmark")?18:c.cls.includes("measure")?24:c.cls.includes("upin")?38:30),-c.y);const u=e.distanceTo(this.camera.position);e.project(this.camera);const d=(e.x+1)/2*t,h=(1-e.y)/2*n;if(!(e.z<1&&u<9e3&&Math.abs(e.x)<1.05&&Math.abs(e.y)<1.05&&d>this.labelInset.l+24&&d<t-this.labelInset.r-24&&h>this.labelInset.t+30&&h<n-Math.max(20,this.labelInset.b))){l.style.display="none";continue}!o.w&&l.style.display!=="none"&&(o.w=l.offsetWidth),r.push({el:l,sx:d,sy:h,dist:u,p:s(l.className),wpx:o.w||120})}r.sort((o,l)=>o.p-l.p||o.dist-l.dist);const a=[];for(const o of r){const l={x0:o.sx-o.wpx/2-4,x1:o.sx+o.wpx/2+4,y0:o.sy-26,y1:o.sy+2};if(l.x0<this.labelInset.l+8||l.x1>t-this.labelInset.r-8){o.el.style.display="none";continue}if(a.some(u=>l.x0<u.x1&&l.x1>u.x0&&l.y0<u.y1&&l.y1>u.y0)){o.el.style.display="none";continue}a.push(l),o.el.style.display="flex",o.el.style.left=`${o.sx}px`,o.el.style.top=`${o.sy}px`,o.el.style.opacity=`${Jt.clamp(1.3-o.dist/9e3,.4,1)}`}}groundAt(e,t){if(!this.assets)return 0;const n=Jt.clamp(Math.floor(e/this.dx),0,this.W-1),s=Jt.clamp(Math.floor(t/this.dx),0,this.H-1),r=this.assets.dem[s*this.W+n];return r<-1?.5:r}surfaceAt(e,t,n){const s=this.assets,r=Jt.clamp(Math.floor(e/this.dx),0,this.W-1),o=Jt.clamp(Math.floor(t/this.dx),0,this.H-1)*this.W+r;return s.mask[o]?-2.5:s.dem[o]+(n?s.bldh[o]:0)}raycastGround(e,t,n=!0){if(!this.assets)return null;const s=new we(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),r=new qf;r.setFromCamera(s,this.camera);const a=r.ray.origin,o=r.ray.direction,l=4e4;let c=Math.max(this.dx*.5,2),u=0,d=!0;for(let h=0;h<l;h+=c){const f=a.x+o.x*h,g=a.y+o.y*h,_=a.z+o.z*h,m=f,p=-_,x=m>=0&&p>=0&&m<=this.W*this.dx&&p<=this.H*this.dx,y=x?this.surfaceAt(m,p,n)*this.exag:-1e9,w=g>y;if(!w&&d&&x){let F=u,C=h;for(let S=0;S<12;S++){const b=(F+C)/2,W=a.x+o.x*b,B=a.y+o.y*b,Y=a.z+o.z*b;B>this.surfaceAt(W,-Y,n)*this.exag?F=b:C=b}const R=(F+C)/2,U=a.x+o.x*R,ne=a.z+o.z*R;return{x:U,y:-ne,z:this.groundAt(U,-ne)}}d=w,u=h,h>2e3&&(c=Math.max(c,this.dx))}return null}clearMeasures(){this.measureGroup.clear(),this.setDraft([],"wall")}setMeasures(e){this.measureGroup.clear();const t=n=>n.role??"whatif";for(const{m:n,eff:s,selected:r}of e){const a=n.kind==="wall"?t(n)==="whatif"?16167531:t(n)==="record"?8162984:3003583:n.kind==="sandbag"?10910015:n.kind==="pump"?5032432:n.kind==="tank"?7066778:n.kind==="culvert"?9085112:n.kind==="pipe"?8359066:9471465,o=r?15884300:s<0?15680580:a,l=s===0,c=(d=1)=>new Ci({color:o,transparent:l||d<1,opacity:l?Math.min(.28,d):d,side:ai,depthWrite:!l}),u=d=>{d.userData.id=n.id,this.measureGroup.add(d)};if(n.kind==="wall"||n.kind==="sandbag"){const d=n.height??1;if(n.cells?.length&&n.pts.length<2){const h=new Pi(this.dx,d,this.dx),f=new fw(h,c(),n.cells.length),g=new It;n.cells.forEach((_,m)=>{const p=_%this.W,x=Math.floor(_/this.W),y=(p+.5)*this.dx,w=(x+.5)*this.dx,F=this.groundAt(y,w);g.makeTranslation(y,F+(s<0?-d/2:d/2),-w),f.setMatrixAt(m,g)}),f.instanceMatrix.needsUpdate=!0,u(f);continue}for(let h=1;h<n.pts.length;h++){const f=n.pts[h-1],g=n.pts[h],_=Math.hypot(g.x-f.x,g.y-f.y);if(_<.5)continue;const m=new Pi(_+1.5,d,n.kind==="wall"?2.4:3),p=new _t(m,c()),x=(f.x+g.x)/2,y=(f.y+g.y)/2,w=Math.max(this.groundAt(f.x,f.y),this.groundAt(g.x,g.y));p.position.set(x,w+(s<0?-d/2:d/2),-y),p.rotation.y=Math.atan2(-(g.y-f.y),g.x-f.x),u(p)}if(r)for(const h of n.pts){const f=new _t(new Zr(1.6,10,8),new Ci({color:15884300}));f.position.set(h.x,this.groundAt(h.x,h.y)+d+1.2,-h.y),u(f)}}else if(n.kind==="culvert"||n.kind==="pipe"){if(n.pts.length<2)continue;const d=n.pts[0],h=n.pts[n.pts.length-1],f=Math.hypot(h.x-d.x,h.y-d.y);if(f<.5)continue;const g=Math.max(.3,n.diameter??1),_=new Ka(g/2+.4,g/2+.4,f,10);_.rotateZ(Math.PI/2);const m=new _t(_,c(.9)),p=(this.groundAt(d.x,d.y)+this.groundAt(h.x,h.y))/2;m.position.set((d.x+h.x)/2,p+g/2+.4,-(d.y+h.y)/2),m.rotation.y=Math.atan2(-(h.y-d.y),h.x-d.x),u(m);for(const x of[d,h]){const y=new _t(new Za(g+.5,g+1.8,20),c(.6));y.rotation.x=-Math.PI/2,y.position.set(x.x,this.groundAt(x.x,x.y)+.6,-x.y),u(y)}}else if(n.kind==="pump"){const d=n.pts[0];if(!d)continue;const h=this.groundAt(d.x,d.y),f=new _t(new Ka(4,5,7,12),c());f.position.set(d.x,h+3.5,-d.y),u(f);const g=new _t(new Za((n.radius??30)-2,n.radius??30,32),c(.5));g.rotation.x=-Math.PI/2,g.position.set(d.x,h+.6,-d.y),u(g)}else if(n.kind==="tank"||n.kind==="drain"){if(n.pts.length>=3){const d=new Xm(n.pts.map(_=>new we(_.x,-_.y))),h=new Vu(d);h.rotateX(Math.PI/2);const f=this.groundAt(n.pts[0].x,n.pts[0].y),g=new _t(h,c(.35));g.position.y=f+.8,u(g)}else if(n.pts[0]){const d=n.pts[0],h=this.groundAt(d.x,d.y),f=new _t(new Hu(n.radius??60,40),c(.35));f.rotation.x=-Math.PI/2,f.position.set(d.x,h+.8,-d.y),u(f)}}}}pickMeasure(e,t){const n=new we(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),s=new qf;s.setFromCamera(n,this.camera);const r=s.intersectObjects(this.measureGroup.children,!0);for(const a of r){let o=a.object;for(;o&&o.userData.id===void 0;)o=o.parent;if(o)return o.userData.id}return null}setDraft(e,t){if(this.draftLine&&(this.root.remove(this.draftLine),this.draftLine.geometry.dispose(),this.draftLine=null),e.length<1)return;const n=e.map(r=>new z(r.x,this.groundAt(r.x,r.y)+1.5,-r.y));e.length===1&&n.push(n[0].clone().add(new z(0,10,0)));const s=new en().setFromPoints(n);this.draftLine=new Hm(s,new au({color:t==="wall"?16167531:16777215})),this.draftLine.renderOrder=30,this.root.add(this.draftLine)}defaultView(){const e=this.W*this.dx/2,t=this.H*this.dx/2,n=new z(e,this.groundAt(e,t)*this.exag+5,-t);if(this.view2d){const s=Math.max(this.H*this.dx,this.W*this.dx/Math.max(.5,this.camera.aspect))/(2*Math.tan(Jt.degToRad(15)));return this.topOf(n,s*.82)}return Ei.viewOf(n,Math.max(this.W,this.H)*this.dx*.95,20,42)}viewAt(e,t,n=900){const s=new z(e,this.groundAt(e,t)*this.exag+5,-t);return this.view2d?this.topOf(s,n*1.5):Ei.viewOf(s,n,-20+Math.random()*50,30)}updateNear(){let e=0;if(this.assets){const n=this.assets,s=this.camera.position.x,r=-this.camera.position.z,a=Math.floor(s/this.dx),o=Math.floor(r/this.dx),l=Math.max(1,Math.ceil(50/this.dx));for(let c=o-l;c<=o+l;c++)for(let u=a-l;u<=a+l;u++){const d=Jt.clamp(u,0,this.W-1),f=Jt.clamp(c,0,this.H-1)*this.W+d;e=Math.max(e,(n.dem[f]+(this.view2d?0:n.bldh[f]))*this.exag)}}const t=Jt.clamp((this.camera.position.y-e)*.2,2,4e3);Math.abs(t-this.nearSet)>this.nearSet*.08&&(this.nearSet=t,this.camera.near=t,this.camera.updateProjectionMatrix())}render(e){this.time+=e,this.U.uTime.value=this.time,this.flashT>0?(this.flashT-=e,this.U.uFlash.value=Math.max(0,this.flashT/.18)*(.25+.15*Math.random())):this.U.uFlash.value=0,this.director.update(e),this.updateNear(),this.U.uCam.value.copy(this.camera.position),this.U.uViewH.value=this.renderer.getDrawingBufferSize(this.tmpV2).y,this.rainMat.uniforms.uCenter.value.copy(this.director.controls.target),this.rain.visible=this.U.uRainI.value>.01,this.sky.position.copy(this.camera.position);const t=this.camera.position.distanceTo(this.director.controls.target);this.effFlow==="particles"&&(this.flowA?.update(e,t),this.split&&this.flowB?.update(e,t));const n=this.pendingAdvance;this.pendingAdvance=0;const s=this.U.uSubgrid.value>.5;if(this.trendA?.update(n,s,this.trendReset),this.trendB?.update(n,s,this.trendReset),this.trendReset=!1,this.bindTrend(),this.fine&&this.fineOn){const r=this.director.controls.target;this.fine.update(r.x,-r.z,Jt.clamp(t*1.2,600,1500))}if(this.split&&this.split.frac>.002&&this.split.frac<.998){const r=this.renderer.getDrawingBufferSize(new we),a=Math.round(this.split.frac*r.x),o=this.effFlow==="particles",l=this.effFlow==="arrows";this.renderer.setScissorTest(!0),this.setStateTextures(this.split.left.state,this.split.left.aux),this.flowA&&(this.flowA.group.visible=!1),this.arrowsA&&(this.arrowsA.mesh.visible=!1),this.flowB&&(this.flowB.group.visible=o),this.arrowsB&&(this.arrowsB.mesh.visible=l),this.renderer.setScissor(0,0,a,r.y),this.renderer.render(this.scene,this.camera),this.setStateTextures(this.split.right.state,this.split.right.aux),this.flowB&&(this.flowB.group.visible=!1),this.arrowsB&&(this.arrowsB.mesh.visible=!1),this.flowA&&(this.flowA.group.visible=o),this.arrowsA&&(this.arrowsA.mesh.visible=l),this.renderer.setScissor(a,0,r.x-a,r.y),this.renderer.render(this.scene,this.camera),this.renderer.setScissorTest(!1)}else this.renderer.render(this.scene,this.camera);this.updateLabels()}}function uu(i){const e=Wb,t=Gb.map(n=>new rt(n));if(i<=0)return`#${t[0].getHexString()}`;for(let n=1;n<e.length;n++)if(i<=e[n]){const s=(i-e[n-1])/(e[n]-e[n-1]);return`#${t[n-1].clone().lerp(t[n],s).getHexString()}`}return`#${t[t.length-1].getHexString()}`}const Xb=-1e4;class qb{constructor(e,t,n){I(this,"measures",[]);I(this,"dem",null);I(this,"bld",null);I(this,"nextId",1);I(this,"baseDrain",null);I(this,"sea",null);I(this,"rPos");I(this,"rNeg");this.W=e,this.H=t,this.dx=n,this.rPos=new Float32Array(e*t),this.rNeg=new Float32Array(e*t)}add(e){const t={...e,id:this.nextId++};return this.ensureKey(t),this.measures.push(t),t}get(e){return this.measures.find(t=>t.id===e)}update(e,t){const n=this.get(e);n&&(Object.assign(n,t),n.locked&&(n.locked=!1),this.ensureKey(n))}ensureKey(e){(e.role??"whatif")!=="whatif"&&!e.key&&(e.key=`${e.kind}_${Date.now().toString(36)}${e.id.toString(36)}`)}remove(e){this.measures=this.measures.filter(t=>t.id!==e)}clearWhatIf(){this.measures=this.measures.filter(e=>(e.role??"whatif")!=="whatif"||e.scenario_only)}replaceAll(e){this.measures=[],this.nextId=1;for(const t of e)this.add(t)}existsAt(e,t){const n=ip(e.built),s=ip(e.removed);return(n===null||t.eventStart>=n)&&(s===null||t.eventStart<s)}effect(e,t){if(e.info||t.bare)return 0;const n=e.role??"whatif";if(n==="whatif")return e.key&&t.keys?.includes(e.key)||t.whatIf&&!e.scenario_only?1:0;if(e.key&&t.exclude?.includes(e.key))return 0;if(n==="record"){const s=this.existsAt(e,t);return e.in_dtm?s?0:e.kind==="wall"||e.kind==="sandbag"?-1:0:s?1:0}return e.events?.length&&!e.events.includes(t.eventId)||e.from_h!==void 0&&e.from_h!==null&&t.simH<e.from_h||e.to_h!==void 0&&e.to_h!==null&&t.simH>=e.to_h?0:1}signature(e){return this.measures.map(t=>`${t.id}:${this.effect(t,e)}`).join("|")}cost(e){const t=this.length(e);switch(e.kind){case"wall":return t*(e.height??1)*45e3;case"sandbag":return t*800;case"pump":return 25e5+(e.rate??1)*12e5;case"tank":return(e.capacity??1e4)*9e3;case"drain":return this.area(e)*1500;case"culvert":return t*(e.diameter??1)*6e4;case"pipe":return t*(e.diameter??1)*25e3}}length(e){if(e.cells?.length&&e.pts.length<2)return e.cells.length*this.dx;let t=0;for(let n=1;n<e.pts.length;n++)t+=Math.hypot(e.pts[n].x-e.pts[n-1].x,e.pts[n].y-e.pts[n-1].y);return t}area(e){if(e.cells?.length&&e.pts.length<3)return e.cells.length*this.dx*this.dx;if(e.pts.length<3)return Math.PI*(e.radius??50)**2;let t=0;const n=e.pts;for(let s=0;s<n.length;s++){const r=n[(s+1)%n.length];t+=n[s].x*r.y-r.x*n[s].y}return Math.abs(t)/2}rasterize(e,t,n){const s=this.W*this.H;this.rPos.fill(0),this.rNeg.fill(0);for(let r=0;r<s;r++)e[r*4]=0,e[r*4+1]=0,e[r*4+2]=0,e[r*4+3]=this.baseDrain?this.baseDrain[r]:1;n&&n.fill(Xb);for(const r of this.measures){const a=this.effect(r,t);if(!a||r.kind==="pump"||r.kind==="culvert"||r.kind==="pipe")continue;if((r.kind==="wall"||r.kind==="sandbag")&&n&&a>0&&!r.cells?.length&&r.pts.length>=2){this.lineFaces(r.pts,r.height??1,n);continue}const o=this.cellsOf(r);if(o.length){if(r.kind==="wall"||r.kind==="sandbag"){const l=(r.height??1)*a;for(const c of o)this.sea&&this.sea[c]||(l>0?this.rPos[c]=Math.max(this.rPos[c],l):this.rNeg[c]=Math.min(this.rNeg[c],l))}else if(r.kind==="tank"){const l=(r.capacity??2e4)/(o.length*this.dx*this.dx);for(const c of o)e[c*4+2]+=l}else if(r.kind==="drain")for(const l of o)e[l*4+3]*=r.factor??2}}for(let r=0;r<s;r++)e[r*4]=this.rPos[r]>0?this.rPos[r]:this.rNeg[r]}connectors(e){const t=[];for(const n of this.measures)if(!(this.effect(n,e)<=0)){if(n.kind==="pump"&&n.pts[0]){let r=-1,a=1/0;for(const o of this.discCells(n.pts[0],n.radius??25)){if(this.sea&&this.sea[o]||this.bld&&this.bld[o]>0)continue;const l=this.dem?this.dem[o]:0;l<a&&(a=l,r=o)}r>=0&&t.push({id:n.id,kind:"pump",a:r,b:-1,q:n.rate??1,on:n.on_m??.05,off:n.off_m??.01})}else if((n.kind==="culvert"||n.kind==="pipe")&&n.pts.length>=2){const r=this.cellOf(n.pts[0]),a=this.cellOf(n.pts[n.pts.length-1]);if(!this.inside(r.i,r.j)||!this.inside(a.i,a.j))continue;const o=r.j*this.W+r.i,l=a.j*this.W+a.i;if(o===l)continue;const c=n.diameter??1,u=n.invert??-c,d=this.dem?this.dem[o]:0,h=this.dem?this.dem[l]:0;t.push({id:n.id,kind:n.kind,a:o,b:l,d:c,n:n.manning??.013,L:Math.max(this.dx,this.length(n)),zin:d+u,zout:h+u})}}return t}cellsOf(e){return e.cells?.length?e.cells.filter(t=>t>=0&&t<this.W*this.H):e.pts.length?e.kind==="wall"||e.kind==="sandbag"?this.lineCells(e.pts):e.kind==="pump"?this.discCells(e.pts[0],e.radius??25):e.pts.length>=3?this.polygonCells(e.pts):this.discCells(e.pts[0],e.radius??50):[]}cellOf(e){return{i:Math.floor(e.x/this.dx),j:Math.floor(e.y/this.dx)}}lineFaces(e,t,n){const s=this.dem,r=this.dx,a=this.W,o=(h,f)=>{if(!this.inside(h,f)||!this.inside(h+1,f))return;const g=f*a+h,_=s?Math.max(s[g],s[g+1]):0;n[g*4]=Math.max(n[g*4],_+t)},l=(h,f)=>{if(!this.inside(h,f)||!this.inside(h,f+1))return;const g=f*a+h,_=s?Math.max(s[g],s[g+a]):0;n[g*4+1]=Math.max(n[g*4+1],_+t)},c=(h,f,g)=>o(Math.min(h,f),g),u=(h,f,g)=>l(h,Math.min(f,g)),d=1;for(let h=1;h<e.length;h++){const f=e[h-1],g=e[h],_=Math.hypot(g.x-f.x,g.y-f.y),m=Math.max(1,Math.ceil(_/(r/4)));let p=Math.floor(f.x/r),x=Math.floor(f.y/r);for(let y=0;y<=m;y++){const w=f.x+(g.x-f.x)*y/m,F=f.y+(g.y-f.y)*y/m,C=Math.floor(w/r),R=Math.floor(F/r);C!==p&&R!==x?(c(p,C,x),u(C,x,R),u(p,x,R),c(p,C,R)):C!==p?c(p,C,x):R!==x&&u(p,x,R);const U=w-C*r,ne=F-R*r;U<d?o(C-1,R):U>r-d&&o(C,R),ne<d?l(C,R-1):ne>r-d&&l(C,R),p=C,x=R}}}inside(e,t){return e>=0&&t>=0&&e<this.W&&t<this.H}lineCells(e){const t=[],n=new Set,s=(r,a)=>{if(this.inside(r,a)){const o=a*this.W+r;n.has(o)||(n.add(o),t.push(o))}};if(e.length===1){const r=this.cellOf(e[0]);return s(r.i,r.j),t}for(let r=1;r<e.length;r++){const a=this.cellOf(e[r-1]),o=this.cellOf(e[r]);let{i:l,j:c}=a;const{i:u,j:d}=o,h=Math.abs(u-l),f=-Math.abs(d-c),g=l<u?1:-1,_=c<d?1:-1;let m=h+f;for(;s(l,c),!(l===u&&c===d);){const p=2*m;p>=f&&(m+=f,l+=g,s(l,c)),p<=h&&(m+=h,c+=_,s(l,c))}}return t}discCells(e,t){const n=[],s=Math.max(1,Math.ceil(t/this.dx)),r=this.cellOf(e);for(let a=r.j-s;a<=r.j+s;a++)for(let o=r.i-s;o<=r.i+s;o++)this.inside(o,a)&&Math.hypot((o+.5)*this.dx-e.x,(a+.5)*this.dx-e.y)<=t&&n.push(a*this.W+o);if(!n.length){const a=r.j*this.W+r.i;this.inside(r.i,r.j)&&n.push(a)}return n}polygonCells(e){const t=[],n=e.map(c=>c.x),s=e.map(c=>c.y),r=Math.max(0,Math.floor(Math.min(...n)/this.dx)),a=Math.min(this.W-1,Math.floor(Math.max(...n)/this.dx)),o=Math.max(0,Math.floor(Math.min(...s)/this.dx)),l=Math.min(this.H-1,Math.floor(Math.max(...s)/this.dx));for(let c=o;c<=l;c++)for(let u=r;u<=a;u++)jb((u+.5)*this.dx,(c+.5)*this.dx,e)&&t.push(c*this.W+u);return t}toSaved(e,t){const n=this.measures.filter(s=>!s.locked).map(s=>{const{id:r,locked:a,...o}=s;return o});return{version:1,scene:e,origin:t,saved:new Date().toISOString(),measures:n}}loadSaved(e,t){const n=(e.origin?.e0??t.e0)-t.e0,s=(e.origin?.n0??t.n0)-t.n0;for(const r of e.measures??[]){const a={...r,pts:(r.pts??[]).map(o=>({x:o.x+n,y:o.y+s}))};if(a.key){const o=this.measures.find(l=>l.key===a.key);o&&(this.measures=this.measures.filter(l=>l!==o))}this.add(a)}}}function ip(i){if(!i)return null;const e=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(i.trim());return e?new Date(`${e[1]}-${e[2]}-${e[3]??"01"}T00:00:00+08:00`).getTime():null}function jb(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){const a=t[s].x,o=t[s].y,l=t[r].x,c=t[r].y;o>e!=c>e&&i<(l-a)*(e-o)/(c-o)+a&&(n=!n)}return n}var Ql,Dt,Jm,Qm,bs,sp,e0,t0,lh,Ml,Ja,n0,Xu,du,fu,Fl={},Il=[],Yb=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ec=Array.isArray;function as(i,e){for(var t in e)i[t]=e[t];return i}function qu(i){i&&i.parentNode&&i.parentNode.removeChild(i)}function i0(i,e,t){var n,s,r,a={};for(r in e)r=="key"?n=e[r]:r=="ref"?s=e[r]:a[r]=e[r];if(arguments.length>2&&(a.children=arguments.length>3?Ql.call(arguments,2):t),typeof i=="function"&&i.defaultProps!=null)for(r in i.defaultProps)a[r]===void 0&&(a[r]=i.defaultProps[r]);return Sl(i,a,n,s,null)}function Sl(i,e,t,n,s){var r={type:i,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Jm,__i:-1,__u:0};return s==null&&Dt.vnode!=null&&Dt.vnode(r),r}function dt(i){return i.children}function Qa(i,e){this.props=i,this.context=e}function lr(i,e){if(e==null)return i.__?lr(i.__,i.__i+1):null;for(var t;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null)return t.__e;return typeof i.type=="function"?lr(i):null}function Kb(i){if(i.__P&&i.__d){var e=i.__v,t=e.__e,n=[],s=[],r=as({},e);r.__v=e.__v+1,Dt.vnode&&Dt.vnode(r),ju(i.__P,r,e,i.__n,i.__P.namespaceURI,32&e.__u?[t]:null,n,t??lr(e),!!(32&e.__u),s),r.__v=e.__v,r.__.__k[r.__i]=r,l0(n,r,s),e.__e=e.__=null,r.__e!=t&&s0(r)}}function s0(i){if((i=i.__)!=null&&i.__c!=null)return i.__e=i.__c.base=null,i.__k.some(function(e){if(e!=null&&e.__e!=null)return i.__e=i.__c.base=e.__e}),s0(i)}function rp(i){(!i.__d&&(i.__d=!0)&&bs.push(i)&&!Ul.__r++||sp!=Dt.debounceRendering)&&((sp=Dt.debounceRendering)||e0)(Ul)}function Ul(){try{for(var i,e=1;bs.length;)bs.length>e&&bs.sort(t0),i=bs.shift(),e=bs.length,Kb(i)}finally{bs.length=Ul.__r=0}}function r0(i,e,t,n,s,r,a,o,l,c,u){var d,h,f,g,_,m,p=n&&n.__k||Il,x=e.length;for(l=Zb(t,e,p,l,x),d=0;d<x;d++)(f=t.__k[d])!=null&&(h=f.__i!=-1&&p[f.__i]||Fl,f.__i=d,m=ju(i,f,h,s,r,a,o,l,c,u),g=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&Yu(h.ref,null,f),u.push(f.ref,f.__c||g,f)),_==null&&g!=null&&(_=g),4&f.__u?(l=a0(f,l,i),h.__e&&(h.__e=null)):typeof f.type=="function"&&m!==void 0?l=m:g&&(l=g.nextSibling),f.__u&=-7);return t.__e=_,l}function Zb(i,e,t,n,s){var r,a,o,l,c,u=t.length,d=u,h=0;for(i.__k=new Array(s),r=0;r<s;r++)(a=e[r])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=i.__k[r]=Sl(null,a,null,null,null):ec(a)?a=i.__k[r]=Sl(dt,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=i.__k[r]=Sl(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):i.__k[r]=a,l=r+h,a.__=i,a.__b=i.__b+1,o=null,(c=a.__i=Jb(a,t,l,d))!=-1&&(d--,(o=t[c])&&(o.__u|=2)),o==null||o.__v==null?(c==-1&&(s>u?h--:s<u&&h++),typeof a.type!="function"&&(a.__u|=4)):c!=l&&(c==l-1?h--:c==l+1?h++:(c>l?h--:h++,a.__u|=4))):i.__k[r]=null;if(d)for(r=0;r<u;r++)(o=t[r])!=null&&!(2&o.__u)&&(o.__e==n&&(n=lr(o)),h0(o,o));return n}function a0(i,e,t){var n,s;if(typeof i.type=="function"){for(n=i.__k,s=0;n&&s<n.length;s++)n[s]&&(n[s].__=i,e=a0(n[s],e,t));return e}i.__e!=e&&(e&&i.type&&!e.parentNode&&(e=lr(i)),e=t.insertBefore(i.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Jb(i,e,t,n){var s,r,a,o=i.key,l=i.type,c=e[t],u=c!=null&&(2&c.__u)==0;if(c===null&&o==null||u&&o==c.key&&l==c.type)return t;if(n>(u?1:0)){for(s=t-1,r=t+1;s>=0||r<e.length;)if((c=e[a=s>=0?s--:r++])!=null&&!(2&c.__u)&&o==c.key&&l==c.type)return a}return-1}function ap(i,e,t){e[0]=="-"?i.setProperty(e,t??""):i[e]=t==null?"":typeof t!="number"||Yb.test(e)?t:t+"px"}function cl(i,e,t,n,s){var r,a;e:if(e=="style")if(typeof t=="string")i.style.cssText=t;else{if(typeof n=="string"&&(i.style.cssText=n=""),n)for(e in n)t&&e in t||ap(i.style,e,"");if(t)for(e in t)n&&t[e]==n[e]||ap(i.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(n0,"$1")),a=e.toLowerCase(),e=a in i||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),i.l||(i.l={}),i.l[e+r]=t,t?n?t[Ja]=n[Ja]:(t[Ja]=Xu,i.addEventListener(e,r?fu:du,r)):i.removeEventListener(e,r?fu:du,r);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in i)try{i[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?i.removeAttribute(e):i.setAttribute(e,e=="popover"&&t==1?"":t))}}function op(i){return function(e){if(this.l){var t=this.l[e.type+i];if(e[Ml]==null)e[Ml]=Xu++;else if(e[Ml]<t[Ja])return;return t(Dt.event?Dt.event(e):e)}}}function ju(i,e,t,n,s,r,a,o,l,c){var u,d,h,f,g,_,m,p,x,y,w,F,C,R,U,ne,S=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),r=[o=e.__e=t.__e]),(u=Dt.__b)&&u(e);e:if(typeof S=="function"){d=a.length;try{if(x=e.props,y=S.prototype&&S.prototype.render,w=(u=S.contextType)&&n[u.__c],F=u?w?w.props.value:u.__:n,t.__c?p=(h=e.__c=t.__c).__=h.__E:(y?e.__c=h=new S(x,F):(e.__c=h=new Qa(x,F),h.constructor=S,h.render=e1),w&&w.sub(h),h.state||(h.state={}),h.__n=n,f=h.__d=!0,h.__h=[],h._sb=[]),y&&h.__s==null&&(h.__s=h.state),y&&S.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=as({},h.__s)),as(h.__s,S.getDerivedStateFromProps(x,h.__s))),g=h.props,_=h.state,h.__v=e,f)y&&S.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),y&&h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(y&&S.getDerivedStateFromProps==null&&x!==g&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(x,F),e.__v==t.__v||!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(x,h.__s,F)===!1){e.__v!=t.__v&&(h.props=x,h.state=h.__s,h.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(b){b&&(b.__=e)}),Il.push.apply(h.__h,h._sb),h._sb=[],h.__h.length&&a.push(h),o=lr(t);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(x,h.__s,F),y&&h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(g,_,m)})}if(h.context=F,h.props=x,h.__P=i,h.__e=!1,C=Dt.__r,R=0,y)h.state=h.__s,h.__d=!1,C&&C(e),u=h.render(h.props,h.state,h.context),Il.push.apply(h.__h,h._sb),h._sb=[];else do h.__d=!1,C&&C(e),u=h.render(h.props,h.state,h.context),h.state=h.__s;while(h.__d&&++R<25);h.state=h.__s,h.getChildContext!=null&&(n=as(as({},n),h.getChildContext())),y&&!f&&h.getSnapshotBeforeUpdate!=null&&(m=h.getSnapshotBeforeUpdate(g,_)),U=u!=null&&u.type===dt&&u.key==null?c0(u.props.children):u,o=r0(i,ec(U)?U:[U],e,t,n,s,r,a,o,l,c),h.base=e.__e,e.__u&=-161,h.__h.length&&a.push(h),p&&(h.__E=h.__=null)}catch(b){if(a.length=d,e.__v=null,l||r!=null){if(b.then){for(e.__u|=l?160:128;o&&o.nodeType==8&&o.nextSibling;)o=o.nextSibling;r!=null&&(r[r.indexOf(o)]=null),e.__e=o}else if(r!=null)for(ne=r.length;ne--;)qu(r[ne])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),b.then||o0(e),Dt.__e(b,e,t)}}else r==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):o=e.__e=Qb(t.__e,e,t,n,s,r,a,l,c);return(u=Dt.diffed)&&u(e),128&e.__u?void 0:o}function o0(i){i&&(i.__c&&(i.__c.__e=!0),i.__k&&i.__k.some(o0))}function l0(i,e,t){for(var n=0;n<t.length;n++)Yu(t[n],t[++n],t[++n]);Dt.__c&&Dt.__c(e,i),i.some(function(s){try{i=s.__h,s.__h=[],i.some(function(r){r.call(s)})}catch(r){Dt.__e(r,s.__v)}})}function c0(i){return typeof i!="object"||i==null||i.__b>0?i:ec(i)?i.map(c0):i.constructor!==void 0?null:as({},i)}function Qb(i,e,t,n,s,r,a,o,l){var c,u,d,h,f,g,_,m=t.props||Fl,p=e.props,x=e.type;if(x=="svg"?s="http://www.w3.org/2000/svg":x=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),r!=null){for(c=0;c<r.length;c++)if((f=r[c])&&"setAttribute"in f==!!x&&(x?f.localName==x:f.nodeType==3)){i=f,r[c]=null;break}}if(i==null){if(x==null)return document.createTextNode(p);i=document.createElementNS(s,x,p.is&&p),o&&(Dt.__m&&Dt.__m(e,r),o=!1),r=null}if(x==null)m===p||o&&i.data==p||(i.data=p);else{if(r=x=="textarea"&&p.defaultValue!=null?null:r&&Ql.call(i.childNodes),!o&&r!=null)for(m={},c=0;c<i.attributes.length;c++)m[(f=i.attributes[c]).name]=f.value;for(c in m)f=m[c],c=="dangerouslySetInnerHTML"?d=f:c=="children"||c in p||c=="value"&&"defaultValue"in p||c=="checked"&&"defaultChecked"in p||cl(i,c,null,f,s);for(c in p)f=p[c],c=="children"?h=f:c=="dangerouslySetInnerHTML"?u=f:c=="value"?g=f:c=="checked"?_=f:o&&typeof f!="function"||m[c]===f||cl(i,c,f,m[c],s);if(u)o||d&&(u.__html==d.__html||u.__html==i.innerHTML)||(i.innerHTML=u.__html),e.__k=[];else if(d&&(i.innerHTML=""),r0(e.type=="template"?i.content:i,ec(h)?h:[h],e,t,n,x=="foreignObject"?"http://www.w3.org/1999/xhtml":s,r,a,r?r[0]:t.__k&&lr(t,0),o,l),r!=null)for(c=r.length;c--;)qu(r[c]);o&&x!="textarea"||(c="value",x=="progress"&&g==null?i.removeAttribute("value"):g!=null&&(g!==i[c]||x=="progress"&&!g||x=="option"&&g!=m[c])&&cl(i,c,g,m[c],s),c="checked",_!=null&&_!=i[c]&&cl(i,c,_,m[c],s))}return i}function Yu(i,e,t){try{if(typeof i=="function"){var n=typeof i.__u=="function";n&&i.__u(),n&&e==null||(i.__u=i(e))}else i.current=e}catch(s){Dt.__e(s,t)}}function h0(i,e,t){var n,s;if(Dt.unmount&&Dt.unmount(i),(n=i.ref)&&(n.current&&n.current!=i.__e||Yu(n,null,e)),(n=i.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(r){Dt.__e(r,e)}n.base=n.__P=n.__n=null}if(n=i.__k)for(s=0;s<n.length;s++)n[s]&&h0(n[s],e,t||typeof i.type!="function");t||qu(i.__e),i.__c=i.__=i.__e=void 0}function e1(i,e,t){return this.constructor(i,t)}function t1(i,e,t){var n,s,r,a;e==document&&(e=document.documentElement),Dt.__&&Dt.__(i,e),s=(n=!1)?null:e.__k,r=[],a=[],ju(e,i=e.__k=i0(dt,null,[i]),s||Fl,Fl,e.namespaceURI,s?null:e.firstChild?Ql.call(e.childNodes):null,r,s?s.__e:e.firstChild,n,a),l0(r,i,a),i.props.children=null}Ql=Il.slice,Dt={__e:function(i,e,t,n){for(var s,r,a;e=e.__;)if((s=e.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(i)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(i,n||{}),a=s.__d),a)return s.__E=s}catch(o){i=o}throw i}},Jm=0,Qm=function(i){return i!=null&&i.constructor===void 0},Qa.prototype.setState=function(i,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=as({},this.state),typeof i=="function"&&(i=i(as({},t),this.props)),i&&as(t,i),i!=null&&this.__v&&(e&&this._sb.push(e),rp(this))},Qa.prototype.forceUpdate=function(i){this.__v&&(this.__e=!0,i&&this.__h.push(i),rp(this))},Qa.prototype.render=dt,bs=[],e0=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,t0=function(i,e){return i.__v.__b-e.__v.__b},Ul.__r=0,lh=Math.random().toString(8),Ml="__d"+lh,Ja="__a"+lh,n0=/(PointerCapture)$|Capture$/i,Xu=0,du=op(!1),fu=op(!0);const n1={subtitle:{zh:"香港洪涝实验室 · 交互式洪水数字孪生",en:"Hong Kong interactive flood digital twin"},scenario:{zh:"情景",en:"Scenario"},comparison:{zh:"真实数据 vs 模拟",en:"Observed vs simulated"},params:{zh:"参数",en:"Parameters"},surgeScale:{zh:"风暴潮增水倍率",en:"Surge multiplier"},waveSetup:{zh:"波浪增水（平均水位抬升）",en:"Wave set-up"},waveHs:{zh:"岸边有效波高 Hs（越浪）",en:"Nearshore wave height Hs (overtopping)"},slr:{zh:"海平面上升",en:"Sea-level rise"},rainScale:{zh:"雨量倍率",en:"Rainfall multiplier"},drain:{zh:"排水能力",en:"Drainage capacity"},buildingsBlock:{zh:"建筑物阻水（视为实体）",en:"Buildings block flow"},subgrid:{zh:"子网格地形（1 m LiDAR 格内分布）",en:"Sub-grid terrain (1 m LiDAR within cells)"},defences:{zh:"沿岸防御（按事件日期生效）",en:"Coastal defences (by event date)"},def_built:{zh:"事件时已建成",en:"in place at the event"},def_notyet:{zh:"事件时未建成",en:"not yet built at the event"},measures:{zh:"措施与防御",en:"Measures & defences"},role_whatif:{zh:"情景措施",en:"What-if"},role_record:{zh:"实际工程",en:"Built record"},role_temporary:{zh:"临时措施",en:"Temporary"},newRole:{zh:"新画的措施记为",en:"Draw new measures as"},snapShore:{zh:"顶点吸附到岸线格（画海堤用）",en:"Snap vertices to the shoreline (for sea walls)"},snapOn:{zh:"（顶点吸附岸线：开）",en:"(snapping to the shoreline)"},clearNote:{zh:"只清除情景措施；实际工程与临时措施是数据，逐条删除",en:"Removes what-if measures only; records and temporary measures are data, delete them one by one"},noMeasures:{zh:"还没有措施。画一条墙、放一台泵，或从 JSON 导入；点列表里的一项可编辑属性。",en:"No measures yet. Draw a wall, place a pump or import JSON; click an item to edit its attributes."},def_removed:{zh:"事件时尚未建成（已从地形中撤掉）",en:"not yet built at the event (removed from the terrain)"},def_raised:{zh:"已抬高地形",en:"added to the terrain"},tmp_on:{zh:"此刻生效",en:"active now"},tmp_off:{zh:"此刻未生效",en:"inactive now"},fromPipeline:{zh:"来自管线（defences.py），几何不可重画；改属性后会存入 measures.json",en:"From the pipeline (defences.py); geometry fixed, edited attributes go to measures.json"},delete:{zh:"删除",en:"Delete"},f_name:{zh:"名称",en:"Name"},f_name_ph:{zh:"例：鲤鱼门石筑海堤",en:"e.g. Lei Yue Mun rock seawall"},f_role:{zh:"类型",en:"Role"},f_built:{zh:"建成年月",en:"Completed"},f_removed:{zh:"拆除年月（可空）",en:"Removed (optional)"},f_in_dtm:{zh:"2020 年 LiDAR 地形里已有此结构（更早的事件会把它撤掉）",en:"Already in the 2020 LiDAR terrain (removed for earlier events)"},f_events:{zh:"适用事件：",en:"Applies to: "},f_window:{zh:"生效时间窗（距事件开始的小时）",en:"Active window (hours from event start)"},f_src:{zh:"来源",en:"Source"},f_src_ph:{zh:"文件 / 新闻 / 现场照片",en:"paper / news / photo"},f_note:{zh:"备注",en:"Note"},f_key:{zh:"key",en:"key"},geomCells:{zh:"格索引几何",en:"cell-index geometry"},save:{zh:"保存到场景",en:"Save to scene"},download:{zh:"下载 JSON",en:"Download JSON"},revert:{zh:"放弃改动",en:"Revert"},exportNote:{zh:"导出 JSON",en:"Export JSON"},importNote:{zh:"导入 JSON（同 key 覆盖）",en:"Import JSON (same key replaces)"},wall:{zh:"防洪墙 / 挡水板",en:"Flood wall / barrier"},sandbag:{zh:"沙包堤",en:"Sandbag line"},pump:{zh:"排水泵",en:"Pump"},culvert:{zh:"涵洞 / 过路管",en:"Culvert"},pipe:{zh:"雨水管段",en:"Sewer link"},diameter:{zh:"管径",en:"Diameter"},hintTwo:{zh:"在地图上点两次：进口、出口。",en:"Click twice on the map: inlet, then outlet."},tank:{zh:"地下蓄洪池",en:"Storage tank"},drainUp:{zh:"雨水渠扩容",en:"Drain upgrade"},clear:{zh:"清除全部",en:"Clear all"},finish:{zh:"完成绘制",en:"Finish"},cancel:{zh:"取消",en:"Cancel"},wallHeight:{zh:"墙高",en:"Height"},pumpRate:{zh:"抽排流量",en:"Pump rate"},tankCap:{zh:"容量",en:"Capacity"},drainFactor:{zh:"排水系数（0 = 进水口堵塞）",en:"Drain factor (0 = intake blocked)"},drainBlocked:{zh:"排水口堵塞",en:"Drain intake blocked"},hintDraw:{zh:"在地图上单击放置节点，双击或点“完成绘制”结束。",en:"Click on the map to place vertices; double-click or press Finish to end."},hintPoint:{zh:"在地图上单击放置。",en:"Click on the map to place."},metrics:{zh:"影响指标",en:"Impact metrics"},maxDepth:{zh:"最大水深",en:"Max depth"},floodedArea:{zh:"淹没面积 (>15 cm)",en:"Flooded area (>15 cm)"},severeArea:{zh:"严重淹没 (>50 cm)",en:"Severe (>50 cm)"},bldAffected:{zh:"受影响建筑",en:"Buildings affected"},volume:{zh:"陆上水量",en:"Water on land"},baseline:{zh:"无措施基线",en:"Baseline (no measures)"},withMeasures:{zh:"含措施",en:"With measures"},tideChart:{zh:"潮位：实测 vs 天文潮 vs 模型边界",en:"Sea level: observed vs astronomical vs model boundary"},rainChart:{zh:"雨量过程线 (mm/h)",en:"Rainfall hyetograph (mm/h)"},validation:{zh:"实际水浸记录 vs 模拟最大水深",en:"Reported flooding vs simulated max depth"},place:{zh:"地点",en:"Location"},observed:{zh:"实测/报道",en:"Reported"},simulated:{zh:"模拟",en:"Simulated"},score:{zh:"命中率",en:"Hit rate"},noVal:{zh:"该场景在此事件中没有可核对的水浸记录。",en:"No validation records for this scene/event."},play:{zh:"播放",en:"Play"},pause:{zh:"暂停",en:"Pause"},depth:{zh:"水深",en:"Depth"},sources:{zh:"数据来源",en:"Sources"},modelNote:{zh:"模型：GPU 二维浅水方程（局部惯性格式，LISFLOOD-FP 同类），网格",en:"Model: GPU 2-D shallow water (local-inertial, LISFLOOD-FP class), grid"},fictional:{zh:"虚构情景",en:"Fictional"},typhoon:{zh:"台风风暴潮",en:"Typhoon surge"},rainstorm:{zh:"暴雨",en:"Rainstorm"},peakObs:{zh:"实测峰值",en:"Observed peak"},peakModel:{zh:"模型边界峰值",en:"Model boundary peak"},tourRunning:{zh:"飞览中… 拖动鼠标可退出",en:"Touring… drag to exit"},loading:{zh:"正在加载场景数据…",en:"Loading scene data…"},ffwd:{zh:"快进计算中",en:"Fast-forwarding"},realtime:{zh:"倍速",en:"×"},costNote:{zh:"粗略造价",en:"Rough cost"},gaugeNow:{zh:"当前边界潮位",en:"Boundary sea level"},rainNow:{zh:"当前雨强",en:"Rain rate"},flowParticles:{zh:"流向：粒子",en:"Flow: particles"},flowArrows:{zh:"流向：箭头",en:"Flow: arrows"},flowNone:{zh:"流向：关",en:"Flow: off"},peak:{zh:"跳到峰值",en:"Jump to peak"},hotspots:{zh:"最严重水浸点（模拟最大水深，街道格）",en:"Worst flooded spots (simulated max depth, streets)"},flyTo:{zh:"飞到",en:"Fly"},swipeLeft:{zh:"◀ 无措施 · 基线",en:"◀ Baseline (no measures)"},swipeRight:{zh:"含措施 ▶",en:"With measures ▶"},noHot:{zh:"尚无 ≥ 0.3 m 的街道积水",en:"No street flooding ≥ 0.3 m yet"},facilities:{zh:"重点设施影响（60 m 内街道最大水深）",en:"Key facilities (max street depth within 60 m)"},facility:{zh:"设施",en:"Facility"},unaffected:{zh:"未受影响",en:"unaffected"},showFac:{zh:"标出受影响的重点设施（医院、港铁站、学校、安老院、停车场…）",en:"Mark affected key facilities (hospitals, MTR, schools, elderly homes, car parks…)"},ft_hospital:{zh:"医院",en:"Hospital"},ft_mtr:{zh:"港铁站",en:"MTR station"},ft_ferry:{zh:"码头",en:"Ferry pier"},ft_bus:{zh:"巴士总站",en:"Bus terminus"},ft_carpark:{zh:"停车场",en:"Car park"},ft_power:{zh:"变电站",en:"Substation"},ft_school:{zh:"学校",en:"School"},ft_elderly:{zh:"安老院",en:"Elderly home"},ft_mall:{zh:"商场",en:"Shopping mall"},ft_fire:{zh:"消防局",en:"Fire station"},ft_police:{zh:"警署",en:"Police station"},ft_community:{zh:"社区中心",en:"Community centre"},ft_water:{zh:"水务设施",en:"Water works"},ft_underground:{zh:"地下空间（估计）",en:"Underground space (estimate)"},swipeHint:{zh:"A/B 分屏：拖动中间的把手，左边是无措施基线，右边是含措施",en:"Swipe view: drag the handle; baseline on the left, measures on the right"},sceneLbl:{zh:"场景",en:"Scene"},eventLbl:{zh:"事件",en:"Event"},places:{zh:"地点",en:"Places"},layers:{zh:"图层",en:"Layers"},grpCoast:{zh:"海岸边界",en:"Coastal boundary"},grpRain:{zh:"降雨与排水",en:"Rain & drainage"},grpModel:{zh:"模型设置",en:"Model"},showMax:{zh:"在地面上显示最大淹没范围",en:"Show max-depth footprint on terrain"},forcing:{zh:"外部驱动",en:"Forcing"},more:{zh:"展开",en:"More"},less:{zh:"收起",en:"Less"},hit:{zh:"命中",en:"Hit"},miss:{zh:"偏差",en:"Miss"},hitRule:{zh:"±0.35 m 或 ±50% 视为命中；取地点 60 m 内街道格的最大水深。报道位置是近似的，结果仅供参考。",en:"Hit if within ±0.35 m or ±50%; max depth over street cells within 60 m. Reported locations are approximate; indicative only."},c_sea:{zh:"潮位",en:"Sea"},c_rain:{zh:"雨强",en:"Rain"},perSec:{zh:"每秒模拟",en:"Sim per second"},running:{zh:"运行中",en:"Running"},paused:{zh:"已暂停",en:"Paused"},lg_val:{zh:"水浸记录",en:"Reported flooding"},lg_gauge:{zh:"潮位站",en:"Tide gauge"},lg_fac:{zh:"受影响设施",en:"Affected facility"},vsBase:{zh:"差值 = 含措施 − 基线；绿色为改善",en:"Delta = with measures − baseline; green is better"},splitNote:{zh:"分屏：左 A = 无措施基线，右 B = 含措施（拖动画面中央把手）",en:"Split view: left A = baseline, right B = with measures (drag the handle)"},ofFlooded:{zh:"占淹没面积",en:"of flooded area"},bldRule:{zh:"周边最大水深 > 0.15 m",en:"max depth nearby > 0.15 m"},scrubHint:{zh:"点击或拖动跳转；← → 键逐步",en:"Click or drag to seek; arrow keys step"},noMetrics:{zh:"模拟开始后显示",en:"Shown once the run starts"},waterNow:{zh:"当前水深",en:"Depth now"},waterMax:{zh:"最大水深",en:"Max depth"},legendNow:{zh:"水深 · 当前",en:"Water depth · now"},legendMax:{zh:"最大水深 · 整个事件 · ≥ 0.1",en:"Max depth · whole event · ≥ 0.1"},waterMaxHint:{zh:"显示到目前为止每格达到过的最大水深（跑完整个事件即为全事件最大），0.1 m 以下不画",en:"Highest depth each cell has reached so far (the whole-event maximum once the run is complete); below 0.1 m is not drawn"},lg_rise:{zh:"上涨中（亮、脉动）",en:"Rising (lit, pulsing)"},lg_recede:{zh:"退水中（暗、浑）",en:"Receding (dull, muddy)"},lg_contour:{zh:"等深线 0.1–2 m",en:"Depth contours 0.1–2 m"},lg_trace:{zh:"退水痕迹",en:"Dried after flooding"},lg_edge:{zh:"湿区边界",en:"Wet / dry edge"},lg_ug:{zh:"地库透视（填充 = 灌入深度）",en:"Basement X-ray (fill = depth inside)"},camBird:{zh:"鸟瞰（全场景）",en:"Bird's-eye (whole scene)"},camStreet:{zh:"街景视角（最严重水浸点）",en:"Street view (worst spot)"},camFollow:{zh:"跟随最严重水浸点",en:"Follow the worst spot"},exag:{zh:"竖向夸张（地形、建筑、水体）",en:"Vertical exaggeration (terrain, buildings, water)"},landmarks:{zh:"地标（地点、港铁站、医院、商场、码头）",en:"Landmarks (places, MTR, hospitals, malls, piers)"},shadows:{zh:"日照阴影（建筑与地形）",en:"Sun shadows (buildings and terrain)"},trendUp:{zh:"水量上涨",en:"Rising"},trendDown:{zh:"水量消退",en:"Receding"},trendFlat:{zh:"水量平稳",en:"Steady"},trendTip:{zh:"陆上水量的变化速率（街道与空地格）",en:"Rate of change of water on land (street and open cells)"},pins:{zh:"钉点时间序列",en:"Pinned points"},pin:{zh:"钉点",en:"Pin"},pinHint:{zh:"在地图上点一下放置钉点（Esc 取消）；放下后会从头重跑以补齐整条曲线",en:"Click the map to drop a pin (Esc cancels); the run restarts from the beginning to fill its whole curve"},pinEmpty:{zh:"在地图上任意位置放一个钉点，看它在整个事件里的水深变化，并与潮位、雨量对照。",en:"Drop a pin anywhere on the map to follow its water depth through the event, against sea level and rainfall."},pinAdd:{zh:"放置钉点",en:"Drop a pin"},exportCsv:{zh:"导出 CSV",en:"Export CSV"},pinNow:{zh:"当前",en:"now"},pinMax:{zh:"最大",en:"max"},pinDepth:{zh:"水深 (m)",en:"Depth (m)"},pinRerun:{zh:"放针后从头重跑补齐曲线；参数或措施改变时曲线随之重算",en:"Dropping a pin re-runs from the start to fill the curve; changing parameters or measures recomputes it"},under:{zh:"偏低",en:"Under"},over:{zh:"偏高",en:"Over"},unrep:{zh:"数据层无法表达",en:"Not in data"},valHead:{zh:"报道深度不是实测：B = 有物理参照 ±0.3 m，C = 按「水浸 / 严重水浸」等级填数 ±50%，D = 推估。模拟值取地点 60 m 内街道格的最大水深；地库点取地库水深（流入体积 ÷ 楼面面积）。点一行看依据与模型备注。",en:"Reported depths are not measurements: B = physical reference ±0.3 m, C = filled from a severity class ±50%, D = inferred. Simulated = max depth over street cells within 60 m; basement points use the basement depth (inflow volume ÷ floor area). Click a row for the basis and model notes."},basis:{zh:"依据",en:"Basis"},modelNotes:{zh:"模型备注",en:"Model note"},source:{zh:"出处",en:"Source"},sampling:{zh:"取样",en:"Sampling"},ugDepth:{zh:"地库水深（流入体积 ÷ 楼面面积）",en:"Basement depth (inflow volume ÷ floor area)"},streetDepth:{zh:"60 m 内街道格最大水深",en:"max street depth within 60 m"},snapped:{zh:"取样点已吸附到 {d} m 外的最低街道格",en:"sample point snapped {d} m to the lowest street cell"},bermNote:{zh:"报道位置是 {z} mPD 的河畔阶地，地形数据里没有这一层",en:"reported at a {z} mPD riverside berm that the terrain data does not contain"},gradeB:{zh:"B：有物理参照",en:"B: physical reference"},gradeC:{zh:"C：等级描述",en:"C: severity class"},gradeD:{zh:"D：推估",en:"D: inferred"},estimated:{zh:"推估",en:"est."}};let tc="zh";function i1(i){tc=i}function cr(){return tc}function N(i){const e=n1[i];return e?e[tc]:i}function j(i,e){return tc==="zh"?i:e}var uo,sn,ch,lp,Nl=0,u0=[],ln=Dt,cp=ln.__b,hp=ln.__r,up=ln.diffed,dp=ln.__c,fp=ln.unmount,pp=ln.__;function Ku(i,e){ln.__h&&ln.__h(sn,i,Nl||e),Nl=0;var t=sn.__H||(sn.__H={__:[],__h:[]});return i>=t.__.length&&t.__.push({}),t.__[i]}function _o(i){return Nl=1,s1(f0,i)}function s1(i,e,t){var n=Ku(uo++,2);if(n.t=i,!n.__c&&(n.__=[f0(void 0,e),function(o){var l=n.__N?n.__N[0]:n.__[0],c=n.t(l,o);l!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=sn,!sn.__f)){var s=function(o,l,c){if(!n.__c.__H)return!0;var u=!1,d=n.__c.props!==o;if(n.__c.__H.__.some(function(f){if(f.__N){u=!0;var g=f.__[0];f.__=f.__N,f.__N=void 0,g!==f.__[0]&&(d=!0)}}),r){var h=r.call(this,o,l,c);return u?h||d:h}return!u||d};sn.__f=!0;var r=sn.shouldComponentUpdate,a=sn.componentWillUpdate;sn.componentWillUpdate=function(o,l,c){if(this.__e){var u=r;r=void 0,s(o,l,c),r=u}a&&a.call(this,o,l,c)},sn.shouldComponentUpdate=s}return n.__N||n.__}function nr(i,e){var t=Ku(uo++,3);!ln.__s&&d0(t.__H,e)&&(t.__=i,t.u=e,sn.__H.__h.push(t))}function Gi(i){return Nl=5,Zu(function(){return{current:i}},[])}function Zu(i,e){var t=Ku(uo++,7);return d0(t.__H,e)&&(t.__=i(),t.__H=e,t.__h=i),t.__}function r1(){for(var i;i=u0.shift();){var e=i.__H;if(i.__P&&e)try{e.__h.some(wl),e.__h.some(pu),e.__h=[]}catch(t){e.__h=[],ln.__e(t,i.__v)}}}ln.__b=function(i){sn=null,cp&&cp(i)},ln.__=function(i,e){i&&e.__k&&e.__k.__m&&(i.__m=e.__k.__m),pp&&pp(i,e)},ln.__r=function(i){hp&&hp(i),uo=0;var e=(sn=i.__c).__H;e&&(ch===sn?(e.__h=[],sn.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(wl),e.__h.some(pu),e.__h=[],uo=0)),ch=sn},ln.diffed=function(i){up&&up(i);var e=i.__c;e&&e.__H&&(e.__H.__h.length&&(u0.push(e)!==1&&lp===ln.requestAnimationFrame||((lp=ln.requestAnimationFrame)||a1)(r1)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),ch=sn=null},ln.__c=function(i,e){e.some(function(t){try{t.__h.some(wl),t.__h=t.__h.filter(function(n){return!n.__||pu(n)})}catch(n){e.some(function(s){s.__h&&(s.__h=[])}),e=[],ln.__e(n,t.__v)}}),dp&&dp(i,e)},ln.unmount=function(i){fp&&fp(i);var e,t=i.__c;t&&t.__H&&(t.__H.__.some(function(n){try{wl(n)}catch(s){e=s}}),t.__H=void 0,e&&ln.__e(e,t.__v))};var mp=typeof requestAnimationFrame=="function";function a1(i){var e,t=function(){clearTimeout(n),mp&&cancelAnimationFrame(e),setTimeout(i)},n=setTimeout(t,35);mp&&(e=requestAnimationFrame(t))}function wl(i){var e=sn,t=i.__c;typeof t=="function"&&(i.__c=void 0,t()),sn=e}function pu(i){var e=sn;i.__c=i.__(),sn=e}function d0(i,e){return!i||i.length!==e.length||e.some(function(t,n){return t!==i[n]})}function f0(i,e){return typeof e=="function"?e(i):e}var o1=Symbol.for("preact-signals");function Ju(){if(ir>1)ir--;else{var i,e=!1;for(function(){var s=Ol;for(Ol=void 0;s!==void 0;){var r=s.S;if(r.v===s.v)for(var a=r.t;a!==void 0;a=a.x)a.i===s.i&&(a.i=r.i);s=s.o}}();to!==void 0;){var t=to;for(to=void 0,kl++;t!==void 0;){var n=t.u;if(t.u=void 0,t.f&=-3,!(8&t.f)&&m0(t))try{t.c()}catch(s){e||(i=s,e=!0)}t=n}}if(kl=0,ir--,e)throw i}}var eo,Wt=void 0;function nc(i){var e=Wt,t=eo;Wt=void 0,eo=void 0;try{return i()}finally{Wt=e,eo=t}}var to=void 0,ir=0,kl=0,gp=0,Ol=void 0,zl=0;function p0(i){if(Wt!==void 0){var e=i.n;if(e===void 0||e.t!==Wt)return e={i:0,S:i,p:Wt.s,n:void 0,t:Wt,e:void 0,x:void 0,r:e},Wt.s!==void 0&&(Wt.s.n=e),Wt.s=e,i.n=e,32&Wt.f&&i.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=Wt.s,e.n=void 0,Wt.s.n=e,Wt.s=e),e}}function Dn(i,e){this.v=i,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=e?.watched,this.Z=e?.unwatched,this.name=e?.name}Dn.prototype.brand=o1;Dn.prototype.h=function(){return!0};Dn.prototype.S=function(i){var e=this,t=this.t;t!==i&&i.e===void 0&&(i.x=t,this.t=i,t!==void 0?t.e=i:nc(function(){var n;(n=e.W)==null||n.call(e)}))};Dn.prototype.U=function(i){var e=this;if(this.t!==void 0){var t=i.e,n=i.x;t!==void 0&&(t.x=n,i.e=void 0),n!==void 0&&(n.e=t,i.x=void 0),i===this.t&&(this.t=n,n===void 0&&nc(function(){var s;(s=e.Z)==null||s.call(e)}))}};Dn.prototype.subscribe=function(i){var e=this;return ed(function(){var t=e.value;nc(function(){return i(t)})},{name:"sub"})};Dn.prototype.valueOf=function(){return this.value};Dn.prototype.toString=function(){return this.value+""};Dn.prototype.toJSON=function(){return this.value};Dn.prototype.peek=function(){var i=this;return nc(function(){return i.value})};Object.defineProperty(Dn.prototype,"value",{get:function(){var i=p0(this);return i!==void 0&&(i.i=this.i),this.v},set:function(i){if(i!==this.v){if(kl>100)throw new Error("Cycle detected");(function(t){ir!==0&&kl===0&&t.l!==gp&&(t.l=gp,Ol={S:t,v:t.v,i:t.i,o:Ol})})(this),this.v=i,this.i++,zl++,ir++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Ju()}}}});function $e(i,e){return new Dn(i,e)}function m0(i){for(var e=i.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function g0(i){for(var e=i.s;e!==void 0;e=e.n){var t=e.S.n;if(t!==void 0&&(e.r=t),e.S.n=e,e.i=-1,e.n===void 0){i.s=e;break}}}function v0(i){for(var e=i.s,t=void 0;e!==void 0;){var n=e.p;e.i===-1?(e.S.U(e),n!==void 0&&(n.n=e.n),e.n!==void 0&&(e.n.p=n)):t=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=n}i.s=t}function pr(i,e){Dn.call(this,void 0,e),this.x=i,this.s=void 0,this.g=zl-1,this.f=4}pr.prototype=new Dn;pr.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===zl))return!0;if(this.g=zl,this.f|=1,this.i>0&&!m0(this))return this.f&=-2,!0;var i=Wt;try{g0(this),Wt=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return Wt=i,v0(this),this.f&=-2,!0};pr.prototype.S=function(i){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}Dn.prototype.S.call(this,i)};pr.prototype.U=function(i){if(this.t!==void 0&&(Dn.prototype.U.call(this,i),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};pr.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;i!==void 0;i=i.x)i.t.N()}};Object.defineProperty(pr.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=p0(this);if(this.h(),i!==void 0&&(i.i=this.i),16&this.f)throw this.v;return this.v}});function l1(i,e){return new pr(i,e)}function _0(i){var e=i.j;if(i.j=void 0,typeof e=="function"){ir++;var t=Wt;Wt=void 0;try{e()}catch(n){throw i.f&=-2,i.f|=8,Qu(i),n}finally{Wt=t,Ju()}}}function Qu(i){for(var e=i.s;e!==void 0;e=e.n)e.S.U(e);i.x=void 0,i.s=void 0,_0(i)}function c1(i){if(Wt!==this)throw new Error("Out-of-order effect");v0(this),Wt=i,this.f&=-2;try{8&this.f&&Qu(this)}finally{Ju()}}function va(i,e){this.x=i,this.j=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=e?.name,eo&&eo.push(this)}va.prototype.c=function(){var i=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.j=e)}finally{i()}};va.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,_0(this),g0(this),ir++;var i=Wt;return Wt=this,c1.bind(this,i)};va.prototype.N=function(){2&this.f||(this.f|=2,this.u=to,to=this)};va.prototype.d=function(){this.f|=8,1&this.f||Qu(this)};va.prototype.dispose=function(){this.d()};function ed(i,e){var t=new va(i,e);try{t.c()}catch(s){throw t.d(),s}var n=t.d.bind(t);return n[Symbol.dispose]=n,n}var hl;function _a(i,e){Dt[i]=e.bind(null,Dt[i]||function(){})}function Bl(i){if(hl){var e=hl;hl=void 0,e()}hl=i&&i.S()}function x0(i){var e=this,t=i.data,n=u1(t);n.value=t;var s=Zu(function(){for(var r=e.__v;r=r.__;)if(r.__c){r.__c.__$f|=4;break}return e.__$u.c=function(){var a,o=e.__$u.S(),l=s.value;o(),Qm(l)||((a=e.base)==null?void 0:a.nodeType)!==3?(e.__$f|=1,e.setState({})):e.base.data=l},l1(function(){var a=n.value.value;return a===0?0:a===!0?"":a||""})},[]);return s.value}x0.displayName="_st";Object.defineProperties(Dn.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:x0},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});_a("__b",function(i,e){if(typeof e.type=="string"){var t,n=e.props;for(var s in n)if(s!=="children"){var r=n[s];r instanceof Dn&&(t||(e.__np=t={}),t[s]=r,n[s]=r.peek())}}i(e)});_a("__r",function(i,e){i(e),Bl();var t,n=e.__c;n&&(n.__$f&=-2,(t=n.__$u)===void 0&&(n.__$u=t=function(s){var r;return ed(function(){r=this}),r.c=function(){n.__$f|=1,n.setState({})},r}())),Bl(t)});_a("__e",function(i,e,t,n){Bl(),i(e,t,n)});_a("diffed",function(i,e){Bl();var t;if(typeof e.type=="string"&&(t=e.__e)){var n=e.__np,s=e.props;if(n){var r=t.U;if(r)for(var a in r){var o=r[a];o!==void 0&&!(a in n)&&(o.d(),r[a]=void 0)}else t.U=r={};for(var l in n){var c=r[l],u=n[l];c===void 0?(c=h1(t,l,u,s),r[l]=c):c.o(u,s)}}}i(e)});function h1(i,e,t,n){var s=e in i&&i.ownerSVGElement===void 0,r=$e(t);return{o:function(a,o){r.value=a,n=o},d:ed(function(){var a=r.value.value;n[e]!==a&&(n[e]=a,s?i[e]=a:a?i.setAttribute(e,a):i.removeAttribute(e))})}}_a("unmount",function(i,e){if(typeof e.type=="string"){var t=e.__e;if(t){var n=t.U;if(n){t.U=void 0;for(var s in n){var r=n[s];r&&r.d()}}}}else{var a=e.__c;if(a){var o=a.__$u;o&&(a.__$u=void 0,o.d())}}i(e)});_a("__h",function(i,e,t,n){(n<3||n===9)&&(e.__$f|=2),i(e,t,n)});Qa.prototype.shouldComponentUpdate=function(i,e){if(this.__R)return!0;var t=this.__$u,n=t&&t.s!==void 0;for(var s in e)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var r in i)if(r!=="__source"&&i[r]!==this.props[r])return!0;for(var a in this.props)if(!(a in i))return!0;return!1};function u1(i){return Zu(function(){return $e(i)},[])}const d1=["overview","validation","pins","forcing"],ic=(i,e)=>{try{localStorage.setItem(i,JSON.stringify(e))}catch{}},V={lang:$e("zh"),scenes:$e([]),sceneId:$e(""),events:$e([]),eventId:$e(""),scene:$e(null),event:$e(null),params:$e(null),leftTab:$e(null),rightTab:$e(null),panelsOff:$e(!1),playing:$e(!1),speed:$e(900),time:$e({label:"--",frac:0}),cond:$e(null),status:$e(null),loading:$e({frac:.02,text:""}),timeline:$e(null),compare:$e(!1),scenarios:$e([]),scenarioId:$e(""),abOpen:$e(!1),flowMode:$e("particles"),active:$e({}),waterMode:$e("now"),exag:$e(1),texMode:$e("imagery"),view2d:$e(!0),fx:$e(!1),baked:$e(!1),showMax:$e(!1),showFac:$e(!0),showLandmarks:$e(!0),showMeasureLabels:$e(!0),fine:$e(!0),shadows:$e(!0),probeOn:$e(!0),metrics:$e(null),baseMetrics:$e(null),trend:$e(null),hotspots:$e([]),validation:$e({points:[],m:null}),facilities:$e({m:null,base:null}),charts:$e(null),chartCursor:$e(0),pins:$e({list:[],t:[],sel:null,f:null}),probe:$e(null),measures:$e([]),selMeasure:$e(null),dirty:$e(!1),devSave:$e(!1),draft:$e({n:0,len:0}),tool:$e(null),newRole:$e("whatif"),snap:$e(!0),measureParams:$e({wall:{height:1.5,rate:0,capacity:0,factor:1,radius:0,diameter:0},sandbag:{height:.6,rate:0,capacity:0,factor:1,radius:0,diameter:0},pump:{height:0,rate:2,capacity:0,factor:1,radius:30,diameter:0},tank:{height:0,rate:0,capacity:3e4,factor:1,radius:80,diameter:0},drain:{height:0,rate:0,capacity:0,factor:2,radius:150,diameter:0},culvert:{height:0,rate:0,capacity:0,factor:1,radius:0,diameter:1.2},pipe:{height:0,rate:0,capacity:0,factor:1,radius:0,diameter:.9}})},f1=[60,300,900,1800,3600];var p1=0;function v(i,e,t,n,s,r){e||(e={});var a,o,l=e;if("ref"in l)for(o in l={},e)o=="ref"?a=e[o]:l[o]=e[o];var c={type:i,props:l,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--p1,__i:-1,__u:0,__source:s,__self:r};if(typeof i=="function"&&(a=i.defaultProps))for(o in a)l[o]===void 0&&(l[o]=a[o]);return Dt.vnode&&Dt.vnode(c),c}let Ue;function m1(i){Ue=i}const mu={play:'<path d="M7 4.5v15l12-7.5z" fill="currentColor" stroke="none"/>',pause:'<rect x="6" y="4.5" width="4" height="15" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="4.5" width="4" height="15" rx="1" fill="currentColor" stroke="none"/>',reset:'<path d="M3 12a9 9 0 1 0 2.6-6.4"/><path d="M3 4v5h5"/>',compare:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16"/>',orbit:'<path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 4v5h-5"/>',tour:'<path d="M4 7h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/><path d="m17 10 5-2v8l-5-2"/>',map:'<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',panels:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 4v16"/>',flow:'<path d="M3 8h9a3 3 0 1 0-3-3"/><path d="M3 12h13a3 3 0 1 1-3 3"/><path d="M3 16h6"/>',arrows:'<path d="M3 12h16"/><path d="m14 6 6 6-6 6"/>',peak:'<path d="m3 20 6-11 4 6 2-3 6 8z"/><path d="M13 4v3M10.5 5.5l1.5 1.5M15.5 5.5 14 7"/>',flyto:'<path d="m3 11 18-8-8 18-2-8z"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="m5 12 4 4L19 7"/>',wall:'<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 10h18M3 14h18M9 5v5M15 10v4M9 14v5"/>',sandbag:'<path d="M4 18h16"/><path d="M6 18a3 3 0 0 1 6 0M12 18a3 3 0 0 1 6 0M9 13a3 3 0 0 1 6 0"/>',pump:'<circle cx="12" cy="12" r="8"/><path d="M12 4v8l5.5 3"/>',tank:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',drain:'<path d="M7 3v6a5 5 0 0 0 10 0V3"/><path d="M12 14v7M8 21h8"/>',culvert:'<path d="M3 12h18"/><path d="M6 8a4 4 0 0 0 0 8M18 8a4 4 0 0 1 0 8"/>',pipe:'<path d="M4 7h9a4 4 0 0 1 4 4v9"/><path d="M4 11h9"/>',layers:'<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',wave:'<path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0 2 1.5 2 1.5"/><path d="M2 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',save:'<path d="M5 3h11l3 3v15H5z"/><path d="M8 3v6h8V3M8 21v-7h8v7"/>',download:'<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 19h16"/>',upload:'<path d="M12 15V3"/><path d="m7 8 5-5 5 5"/><path d="M4 19h16"/>',undo:'<path d="M4 10h11a5 5 0 0 1 0 10h-3"/><path d="m8 6-4 4 4 4"/>',lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',magnet:'<path d="M6 3v8a6 6 0 0 0 12 0V3"/><path d="M6 3h4v8H6M14 3h4v8h-4"/>',chev:'<path d="m6 9 6 6 6-6"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',flag:'<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',shield:'<path d="M12 21s7-3 7-9V5l-7-2-7 2v7c0 6 7 9 7 9z"/><path d="m9 12 2 2 4-4"/>',bird:'<path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"/><path d="m12 8 4 4-4 4-4-4z"/>',street:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',target:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',pin:'<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',up:'<path d="M12 19V5"/><path d="m6 11 6-6 6 6"/>',down:'<path d="M12 5v14"/><path d="m6 13 6 6 6-6"/>',inbox:'<path d="M3 13h5l1.5 3h5L16 13h5"/><path d="M5.5 5h13L21 13v6H3v-6z"/>',edit:'<path d="M4 20h4l10-10-4-4L4 16z"/><path d="m13 7 4 4"/>',hospital:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M12 8v6M9 11h6"/>',mtr:'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M9 21l1.5-3M15 21l-1.5-3"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/>',ferry:'<path d="M3 17c2 2 4 2 6 0s4 2 6 0 4 2 6 0"/><path d="M5 14 4 9h16l-1 5"/><path d="M9 9V5h6v4"/>',bus:'<rect x="4" y="4" width="16" height="13" rx="2"/><path d="M4 11h16M8 20v-3M16 20v-3"/><circle cx="8" cy="14" r="1"/><circle cx="16" cy="14" r="1"/>',carpark:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 16V8h3.5a2.5 2.5 0 0 1 0 5H9"/>',power:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',school:'<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 9v6"/>',elderly:'<circle cx="12" cy="7" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/>',mall:'<path d="M6 7h12l1 14H5z"/><path d="M9 7a3 3 0 0 1 6 0"/>',fire:'<path d="M12 22c4 0 7-3 7-7 0-3-2-5-3-7-1 2-2 3-3 3 0-3-1-6-4-8 0 4-4 6-4 12a7 7 0 0 0 7 7z"/>',police:'<path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10z"/>',community:'<path d="M3 21h18M5 21V10M19 21V10M9 21v-6h6v6M2 10l10-6 10 6z"/>',water:'<path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z"/>'},vp=mu;function y0(i,e=16,t=""){const n=mu[i]??mu.info;return`<svg class="ic ${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${n}</svg>`}const _p=[.1,.3,.5,1,2],g1=[.05,.2,.4,.75,1.5,2.6],td=()=>cr()==="zh"?["浅","踝","膝","腰","胸","一层"]:["shallow","ankle","knee","waist","chest","floor"],M0=i=>{let e=0;for(;e<_p.length&&i>=_p[e];)e++;return e},xo=uu,Hl=i=>{const e=/^(.*?)\s*[（(]([^（）()]*)[）)]\s*$/.exec(i);return e&&e[1]?[e[1],e[2]]:[i,""]},v1=i=>{const e=i.search(/[：:]/);return e>0?[i.slice(0,e),i.slice(e+1).trim()]:[i,""]},S0=i=>/black/i.test(i)?"black":/red|no\. ?(9|10)\b|signal no\. ?(9|10)|hurricane/i.test(i)?"red":/amber|no\. ?[678]\b|signal no\. ?[678]/i.test(i)?"amber":"",no=i=>`#${i.toString(16).padStart(6,"0")}`,ia=Object.fromEntries(["hospital","mtr","ferry","bus","carpark","power","school","elderly","mall","fire","police","community","water"].map(i=>[i,y0(i,14)]));ia.underground=y0("carpark",14);function Xe({name:i,size:e=16,cls:t=""}){return v("svg",{class:`ic ${t}`,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:vp[i]??vp.info}})}function rn({title:i,hint:e,n:t,children:n,id:s}){return v("section",{class:"blk",id:s,children:[v("div",{class:"blk-h",children:[v("span",{class:"micro",children:i}),v("span",{class:"hint",children:e??""}),t!==void 0&&v("span",{class:"n",children:t})]}),n]})}function w0({text:i}){const[e,t]=Hl(i);return v(dt,{children:[e,t&&v("small",{children:t})]})}function Hi({id:i,label:e,checked:t,onChange:n}){return v("label",{class:"sw",for:i,children:[v("span",{children:v(w0,{text:e})}),v("input",{type:"checkbox",class:"switch",id:i,checked:t,onChange:s=>n(s.currentTarget.checked)})]})}function b0({id:i,label:e,value:t,min:n,max:s,step:r,fmt:a,onInput:o,onCommit:l,changed:c}){const u=(t-n)/(s-n)*100;return v("div",{class:"fr",children:[v("div",{class:"fr-top",children:[v("label",{for:i,children:v(w0,{text:e})}),v("span",{class:`val ${c?"changed":""}`,id:i.replace("sl_","sv_"),children:a(t)})]}),v("input",{type:"range",class:"range",id:i,min:n,max:s,step:r,value:t,style:{"--p":`${u}%`},onInput:d=>o(+d.currentTarget.value),onChange:d=>l?.(+d.currentTarget.value)})]})}function Qs({items:i,value:e,onPick:t,cls:n="",id:s}){return v("div",{class:`seg ${n}`,id:s,role:"group",children:i.map(([r,a])=>v("button",{class:r===e?"on":"","aria-pressed":r===e,"data-v":String(r),onClick:()=>t(r),children:a},String(r)))})}function T0({html:i,cls:e=""}){return v("span",{class:e,style:{display:"contents"},dangerouslySetInnerHTML:{__html:i}})}let Oa=null;const gu=()=>(Oa||(Oa=document.createElement("div"),Oa.className="tip",document.body.appendChild(Oa)),Oa);function E0(){const[i,e]=_o(!1),t=Gi(null);return nr(()=>{if(!i)return;const n=r=>{t.current&&!t.current.contains(r.target)&&e(!1)},s=r=>{r.key==="Escape"&&e(!1)};return document.addEventListener("pointerdown",n),document.addEventListener("keydown",s),()=>{document.removeEventListener("pointerdown",n),document.removeEventListener("keydown",s)}},[i]),{open:i,setOpen:e,ref:t}}const _1=i=>i?`${i.start.replace("T"," ")} → ${i.end.slice(5).replace("T"," ")}`:"";function x1(){const{open:i,setOpen:e,ref:t}=E0(),n=V.scenes.value,s=n.find(a=>a.id===V.sceneId.value),r=n.filter(a=>!a.hidden||a.id===V.sceneId.value);return v("div",{class:"pk-wrap",ref:t,children:[v("button",{class:`picker ${i?"open":""}`,id:"scenePicker","aria-haspopup":"listbox","aria-expanded":i,onClick:()=>e(!i),children:[v("span",{class:"pk-txt",children:[v("span",{class:"pk-lab",children:N("sceneLbl")}),v("span",{class:"pk-val",children:s?j(s.name_zh,s.name_en):"—"})]}),v(Xe,{name:"chev",size:14,cls:"chev"})]}),i&&v("div",{class:"popover",role:"listbox",style:{width:"440px"},children:r.map(a=>v("button",{class:`opt ${a.id===V.sceneId.value?"on":""}`,role:"option","aria-selected":a.id===V.sceneId.value,onClick:()=>{e(!1),a.id!==V.sceneId.value&&Ue.onSceneChange(a.id)},children:[v("span",{class:"thumb",style:{backgroundImage:`url(scenes/${a.id}/preview.jpg)`}}),v("span",{children:[v("div",{class:"o-t",children:j(a.name_zh,a.name_en)}),v("div",{class:"o-d",children:j(a.blurb_zh,a.blurb_en)}),v("div",{class:"o-m",children:[a.cols,"×",a.rows," · ",a.res," m ",j("网格","grid")]})]})]},a.id))})]})}function y1(){const{open:i,setOpen:e,ref:t}=E0(),n=V.events.value,s=n.find(r=>r.id===V.eventId.value);return v("div",{class:"pk-wrap",ref:t,children:[v("button",{class:`picker ${i?"open":""}`,id:"eventPicker","aria-haspopup":"listbox","aria-expanded":i,onClick:()=>e(!i),children:[v("span",{class:"pk-txt",children:[v("span",{class:"pk-lab",children:[N("eventLbl"),s&&v("span",{class:`kind ${s.kind}`,children:N(s.kind)})]}),v("span",{class:"pk-val",children:s?j(s.name_zh,s.name_en):"—"})]}),v(Xe,{name:"chev",size:14,cls:"chev"})]}),i&&v("div",{class:"popover",role:"listbox",style:{width:"400px"},children:n.map(r=>v("button",{class:`opt ${r.id===V.eventId.value?"on":""}`,role:"option","aria-selected":r.id===V.eventId.value,onClick:()=>{e(!1),r.id!==V.eventId.value&&Ue.onEventChange(r.id)},children:[v("span",{class:`k-dot ${r.kind}`,children:v(Xe,{name:r.kind==="rainstorm"?"water":r.kind==="fictional"?"flag":"wave",size:17})}),v("span",{children:[v("div",{class:"o-t",children:j(r.name_zh,r.name_en)}),v("div",{class:"o-m",children:[N(r.kind)," · ",_1(r.window)]})]})]},r.id))})]})}function M1(){const i=V.abOpen.value,e=Gi(null),t=u=>{V.abOpen.value=u};nr(()=>{if(!i)return;const u=h=>{e.current&&!e.current.contains(h.target)&&!h.target.closest?.("[data-ab-open]")&&t(!1)},d=h=>{h.key==="Escape"&&t(!1)};return document.addEventListener("pointerdown",u),document.addEventListener("keydown",d),()=>{document.removeEventListener("pointerdown",u),document.removeEventListener("keydown",d)}},[i]);const n=V.compare.value,s=V.scenarios.value,r=V.scenarioId.value,a=s.filter(u=>!u.generic),o=s.filter(u=>u.generic),l=()=>{n?t(!i):(Ue.onCompare(),t(!0))},c=u=>v("button",{class:`opt ab ${u.id===r?"on":""}`,role:"option","aria-selected":u.id===r,"data-scn":u.id,onClick:()=>{t(!1),(u.id!==r||!n)&&Ue.onScenario(u.id)},children:[v("span",{children:[v("div",{class:"o-t",children:j(u.zh,u.en)}),v("div",{class:"o-d",children:j(u.desc_zh,u.desc_en)}),v("div",{class:"ab-sides",children:[v("span",{class:"ab-k",children:"A"}),v("span",{children:j(u.A.zh,u.A.en)}),v("span",{class:"ab-k b",children:"B"}),v("span",{children:j(u.B.zh,u.B.en)})]})]}),u.id===r&&n?v(Xe,{name:"check",size:15,cls:"o-check"}):v("span",{})]},u.id);return v("div",{class:"pk-wrap",ref:e,children:[v("button",{id:"btnCompare",class:`btn lbl-hide ${n?"on":""}`,"aria-haspopup":"listbox","aria-expanded":i,"data-tip":i?void 0:j("情景对比：左右分屏比较两个情景（拖动把手）","Scenario compare: two scenarios side by side (drag the handle)"),"data-tip-pos":"bottom",onClick:l,children:[v(Xe,{name:"compare"}),v("span",{children:j("A/B 对比","A/B compare")}),v(Xe,{name:"chev",size:13,cls:"chev"})]}),i&&v("div",{class:"popover ab-pop",role:"listbox","aria-label":j("情景对比","Scenario compare"),children:[v("div",{class:"ab-pop-h",children:[v("span",{class:"micro",children:j("情景对比 · 左 A / 右 B","Scenario compare · left A / right B")}),v("span",{class:"grow"}),n&&v("button",{class:"btn sm ghost",id:"btnCompareOff",onClick:()=>{t(!1),Ue.onCompare()},children:[v(Xe,{name:"x",size:13}),j("关闭对比","Exit compare")]})]}),a.length>0&&v("div",{class:"ab-grp",children:j("本场景 · 有记录的情景","This scene · documented")}),a.map(c),v("div",{class:"ab-grp",children:j("通用","Generic")}),o.map(c),v("p",{class:"caveat ab-foot",children:[v(Xe,{name:"info",size:12}),v("span",{children:j("两边从头同时重算；气候情景是假设，不是预报。","Both sides re-run from the start; climate pairs are what-ifs, not forecasts.")})]})]})]})}function S1(){const i=V.active.value,e=V.flowMode.value,t=e==="particles"?"flowParticles":e==="arrows"?"flowArrows":"flowNone";return v("header",{class:"topbar float",children:[v("div",{class:"brand",children:[v("span",{class:"mark",children:v("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","aria-hidden":"true",children:[v("path",{d:"M3 10c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"}),v("path",{d:"M3 16c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"})]})}),v("div",{children:[v("div",{class:"nm",children:"HK Flood Lab"}),v("div",{class:"sub",children:j("香港洪涝实验室 · 数字孪生","Flood digital twin · HK")})]})]}),v("span",{class:"vsep"}),v(x1,{}),v("span",{class:"crumb-sep",children:"/"}),v(y1,{}),v("span",{class:"grow"}),v("div",{class:"tb-group",children:v(Qs,{id:"viewSeg",cls:"dark",items:[["2d","2D"],["3d","3D"]],value:V.view2d.value?"2d":"3d",onPick:n=>Ue.onView2D(n==="2d")})}),v("span",{class:"vsep"}),v("div",{class:"tb-group",children:[v(Qs,{id:"waterSeg",cls:"dark",items:[["now",N("waterNow")],["max",N("waterMax")]],value:V.waterMode.value,onPick:n=>Ue.onWaterMode(n)}),v("button",{id:"btnPeak",class:"btn lbl-hide","data-tip":j("跳到峰值时刻并飞到最严重水浸点","Jump to the peak and fly to the worst spot"),"data-tip-pos":"bottom",onClick:()=>Ue.onPeak(),children:[v(Xe,{name:"peak"}),v("span",{children:N("peak")})]})]}),v("span",{class:"vsep"}),v("div",{class:"tb-group",children:[v("button",{id:"btnPin",class:`btn lbl-hide ${i.btnPin?"on":""}`,"data-tip":N("pinHint"),"data-tip-pos":"bottom",onClick:()=>Ue.onPinMode(),children:[v(Xe,{name:"pin"}),v("span",{children:N("pin")})]}),v("button",{id:"btnFlow",class:`btn lbl-hide ${e!=="none"?"on":""}`,"data-tip":`${N(t)} · ${j("点击切换","click to cycle")}`,"data-tip-pos":"bottom",onClick:()=>Ue.onFlowMode(),children:[v(Xe,{name:e==="arrows"?"arrows":"flow"}),v("span",{children:N(t)})]}),v(M1,{})]}),v("span",{class:"vsep"}),v("div",{class:"tb-group",children:[v("button",{id:"btnPanels",class:`btn icon ${V.panelsOff.value,""}`,"data-tip":j("显示/隐藏面板","Toggle panels"),"data-tip-pos":"bottom",onClick:()=>Ue.onPanels(),children:v(Xe,{name:"panels"})}),v("button",{id:"btnLang",class:"btn","data-tip":cr()==="zh"?"English":"中文","data-tip-pos":"bottom",onClick:()=>Ue.onLang(),children:cr()==="zh"?"EN":"中文"})]})]})}const A0={wall:"wall",sandbag:"sandbag",pump:"pump",tank:"tank",drain:"drain",culvert:"culvert",pipe:"pipe"},w1=i=>i.name?cr()==="en"&&i.name_en?i.name_en:i.name:i.kind==="wall"||i.kind==="sandbag"?`${N(i.kind)} ${i.height} m`:i.kind==="pump"?`${N("pump")} ${i.rate} m³/s`:i.kind==="tank"?`${N("tank")} ${i.capacity} m³`:i.kind==="culvert"||i.kind==="pipe"?`${N(i.kind)} ⌀${i.diameter??1} m`:(i.factor??2)<1?`${N("drainBlocked")} ×${i.factor}`:`${N("drainUp")} ×${i.factor}`;function b1(){const i=V.tool.value,e=V.measures.value,t=V.selMeasure.value,n=[["wall",N("wall")],["sandbag",N("sandbag")],["pump",N("pump")],["tank",N("tank")],["drain",N("drainUp")],["culvert",N("culvert")],["pipe",N("pipe")]],s=[["whatif",N("role_whatif")],["record",N("role_record")],["temporary",N("role_temporary")]],r=e.filter(a=>(a.m.role??"whatif")==="whatif"&&!(a.m.scenario_only&&!a.eff)).reduce((a,o)=>a+o.cost,0);return v(dt,{children:[v("div",{class:"p-head",children:[v("div",{class:"grow",children:[v("div",{class:"p-t",children:N("measures")}),v("div",{class:"p-s",children:j("画在地图上；情景措施不进入 A/B 基线","Draw on the map; what-if measures are left out of the A/B baseline")})]}),v("button",{class:"btn sm icon ghost",onClick:()=>{V.leftTab.value=null},children:v(Xe,{name:"x",size:14})})]}),v("div",{class:"p-body",children:[v(rn,{title:j("绘制","Draw"),children:[v("div",{class:"tools",children:n.map(([a,o])=>v("button",{"data-tool":a,class:`tool ${i===a?"on":""}`,"aria-pressed":i===a,title:o,onClick:()=>Ue.onMeasureTool(i===a?null:a),children:[v(Xe,{name:A0[a],size:18}),v("span",{children:o.split(" / ")[0]})]},a))}),v("div",{class:"row",children:[v("label",{for:"selRole",children:N("newRole")}),v("select",{id:"selRole",class:"select",style:{width:"auto",flex:1},value:V.newRole.value,onChange:a=>{V.newRole.value=a.currentTarget.value},children:s.map(([a,o])=>v("option",{value:a,children:o},a))})]}),i&&v(T1,{kind:i}),i&&v(E1,{kind:i}),!i&&v("div",{class:"row",style:{justifyContent:"flex-end"},children:[v("button",{id:"btnSnap",class:`btn sm ${V.snap.value?"on":""}`,title:N("snapShore"),onClick:()=>{V.snap.value=!V.snap.value,Ue.onSnapToggle(V.snap.value)},children:[v(Xe,{name:"magnet",size:13}),j("吸附岸线","Snap")]}),v("button",{id:"btnClearM",class:"btn sm",title:N("clearNote"),onClick:()=>Ue.onClearMeasures(),children:N("clear")})]})]}),v(rn,{title:j("措施列表","Measures"),n:e.length,children:[e.length?v("div",{class:"mlist",id:"measureList",children:e.map(a=>v(C1,{it:a,sel:a.m.id===t},a.m.id))}):v("div",{class:"empty",children:[v(Xe,{name:"inbox",size:16}),v("span",{children:N("noMeasures")})]}),r>0&&v("div",{class:"total",children:[v("span",{children:N("costNote")}),v("b",{children:["HK$",(r/1e6).toFixed(1),"M"]})]})]}),v(rn,{title:j("文件","File"),children:v(P1,{})})]})]})}function T1({kind:i}){const e=V.measureParams.value[i],t=(s,r)=>{V.measureParams.value={...V.measureParams.value,[i]:{...e,[s]:r}},Ue.onMeasureParam(i,s,r)},n=(s,r,a,o,l,c)=>v(b0,{id:`mp_${s}`,label:r,value:e[s],min:a,max:o,step:l,fmt:u=>`${u} ${c}`,onInput:u=>t(s,u)});return v("div",{style:{marginTop:"6px"},children:[(i==="wall"||i==="sandbag")&&n("height",N("wallHeight"),.3,4,.1,"m"),i==="pump"&&v(dt,{children:[n("rate",N("pumpRate"),.2,10,.2,"m³/s"),n("radius",j("集水半径","Catch radius"),10,100,5,"m")]}),i==="tank"&&v(dt,{children:[n("capacity",N("tankCap"),2e3,15e4,1e3,"m³"),n("radius",j("半径（单点放置时）","Radius (point mode)"),30,300,10,"m")]}),i==="drain"&&v(dt,{children:[n("factor",N("drainFactor"),0,6,.5,"×"),n("radius",j("半径（单点放置时）","Radius (point mode)"),50,500,10,"m")]}),(i==="culvert"||i==="pipe")&&n("diameter",N("diameter"),.3,3,.1,"m")]})}function E1({kind:i}){const e=V.draft.value,t=i==="pump"?N("hintPoint"):i==="culvert"||i==="pipe"?N("hintTwo"):N("hintDraw")+(i==="tank"||i==="drain"?j(" 单击一次即为圆形区域。"," A single click places a circular area."):""),n=e.n?` ${j(`已放 ${e.n} 个点`,`${e.n} vertices`)}${e.len?` · ${e.len.toFixed(0)} m`:""}`:"",s=V.snap.value&&(i==="wall"||i==="sandbag")?` ${N("snapOn")}`:"";return v(dt,{children:[v("div",{class:"draw-hint",id:"measureHint",children:[v(Xe,{name:"info",size:13}),v("span",{children:t+n+s})]}),v("div",{class:"drawbar",children:[v("button",{id:"btnFinish",class:"btn sm primary",onClick:()=>Ue.onFinishDraft(),children:[v(Xe,{name:"check",size:13}),N("finish")]}),v("button",{id:"btnUndoV",class:"btn sm icon",title:`${j("撤销上一个点","Undo last vertex")} (Backspace)`,onClick:()=>Ue.onUndoVertex(),children:v(Xe,{name:"undo",size:13})}),v("button",{id:"btnCancelDraft",class:"btn sm",onClick:()=>Ue.onCancelDraft(),children:N("cancel")}),v("span",{class:"grow"}),v("button",{id:"btnSnap",class:"btn sm icon",style:{background:V.snap.value?"var(--sig)":void 0},title:N("snapShore"),onClick:()=>{V.snap.value=!V.snap.value,Ue.onSnapToggle(V.snap.value)},children:v(Xe,{name:"magnet",size:13})})]})]})}function A1(i){const e=i.m.role??"whatif";if(e==="whatif")return i.m.scenario_only&&!i.eff?v("span",{class:"mst",children:j("仅 A/B 情景","A/B pair only")}):v("span",{class:"mst cost",children:["HK$",(i.cost/1e6).toFixed(1),"M"]});if(e==="record")return i.exists?v("span",{class:"mst on",children:[N("def_built"),i.m.in_dtm?"":` · ${N("def_raised")}`]}):v("span",{class:"mst",children:i.m.in_dtm?N("def_removed"):N("def_notyet")});const t=i.m.from_h!==void 0||i.m.to_h!==void 0?` ${i.m.from_h??""}h→${i.m.to_h??""}h`:"";return v("span",{class:`mst ${i.eff>0?"on":""}`,children:[i.eff>0?N("tmp_on"):N("tmp_off"),t]})}function C1({it:i,sel:e}){const t=i.m,n=t.role??"whatif",s=i.eff===0&&!(n==="record"&&i.exists),r=()=>Ue.onSelectMeasure(e?null:t.id);return v(dt,{children:[v("div",{class:`mrow ${e?"sel":""} ${s?"ghost":""}`,"data-sel":t.id,tabIndex:0,role:"button","aria-expanded":e,onClick:r,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&a.target===a.currentTarget&&(a.preventDefault(),a.stopPropagation(),r())},children:[v("span",{class:`m-ic ${t.kind}`,children:v(Xe,{name:A0[t.kind],size:15})}),v("span",{class:"m-main",children:[v("span",{class:"m-name",children:[v("span",{children:w1(t)}),t.locked&&v("span",{title:N("fromPipeline"),children:v(Xe,{name:"lock",size:11})})]}),v("span",{class:"m-sub",children:[v("span",{class:`rchip ${n}`,children:N("role_"+n)}),A1(i)]})]}),v("button",{class:"btn sm icon ghost m-del","data-rm":t.id,"aria-label":N("delete"),title:N("delete"),onClick:a=>{a.stopPropagation(),Ue.onRemoveMeasure(t.id)},children:v(Xe,{name:"x",size:13})})]}),e&&v(R1,{m:t},JSON.stringify(t))]})}function R1({m:i}){const e=i.role??"whatif",t=o=>Ue.onUpdateMeasure(i.id,o),n=o=>l=>{const c=l.currentTarget.value.trim();t({[o]:c===""?void 0:c})},s=o=>l=>{const c=l.currentTarget.value.trim();t({[o]:c===""?void 0:+c})},r=(o,l,c,u,d)=>v("label",{children:[l,v("span",{class:"inl",children:[v("input",{class:"input",type:"number","data-f":o,step:c,min:d,defaultValue:String(i[o]??""),onChange:s(o)})," ",u]})]}),a=(o,l,c="")=>v("label",{children:[l,v("input",{class:"input",type:"text","data-f":o,defaultValue:String(i[o]??""),placeholder:c,onChange:n(o)})]});return v("div",{class:"mform","data-form":i.id,onClick:o=>o.stopPropagation(),children:[a("name",N("f_name"),N("f_name_ph")),(i.kind==="wall"||i.kind==="sandbag")&&r("height",N("wallHeight"),.1,"m",0),i.kind==="pump"&&v(dt,{children:[r("rate",N("pumpRate"),.1,"m³/s",0),!i.cells?.length&&r("radius",j("集水半径","Catch radius"),5,"m",5)]}),i.kind==="tank"&&v(dt,{children:[r("capacity",N("tankCap"),500,"m³",0),!(i.pts.length>=3||i.cells?.length)&&r("radius",j("半径","Radius"),10,"m",10)]}),i.kind==="drain"&&v(dt,{children:[r("factor",N("drainFactor"),.5,"×",0),!(i.pts.length>=3||i.cells?.length)&&r("radius",j("半径","Radius"),10,"m",10)]}),(i.kind==="culvert"||i.kind==="pipe")&&v(dt,{children:[r("diameter",N("diameter"),.1,"m",.3),r("manning",j("曼宁 n","Manning n"),.001,"",.005),r("invert",j("管底相对地面（负为地下）","Invert vs ground (negative = below)"),.1,"m")]}),i.kind==="pump"&&v(dt,{children:[r("on_m",j("启泵水深","Switch-on depth"),.01,"m",0),r("off_m",j("停泵水深","Switch-off depth"),.01,"m",0)]}),v("label",{children:[N("f_role"),v("select",{class:"select","data-f":"role",value:e,onChange:o=>{const l=o.currentTarget.value,c={role:l};l!=="whatif"&&!i.key&&(c.key=`${i.kind}_${Date.now().toString(36)}`),t(c)},children:["whatif","record","temporary"].map(o=>v("option",{value:o,children:N("role_"+o)},o))})]}),e==="record"&&v(dt,{children:[v("label",{children:[N("f_built"),v("input",{class:"input",type:"month","data-f":"built",defaultValue:i.built??"",onChange:n("built")})]}),v("label",{children:[N("f_removed"),v("input",{class:"input",type:"month","data-f":"removed",defaultValue:i.removed??"",onChange:n("removed")})]}),v("label",{class:"chk",children:[v("input",{type:"checkbox","data-f":"in_dtm",checked:!!i.in_dtm,onChange:o=>t({in_dtm:o.currentTarget.checked})})," ",N("f_in_dtm")]})]}),e==="temporary"&&v(dt,{children:[v("div",{class:"evs",children:[N("f_events"),V.events.value.map(o=>v("label",{class:"chk",children:[v("input",{type:"checkbox","data-ev":o.id,checked:!i.events?.length||i.events.includes(o.id),onChange:l=>{const c=l.currentTarget.closest(".mform"),u=Array.from(c.querySelectorAll("[data-ev]")),d=u.filter(h=>h.checked).map(h=>h.dataset.ev);t({events:d.length===u.length?[]:d})}})," ",j(o.name_zh,o.name_en)]},o.id))]}),v("label",{children:[N("f_window"),v("span",{class:"inl",children:[v("input",{class:"input",type:"number","data-f":"from_h",step:.5,defaultValue:i.from_h!==void 0?String(i.from_h):"",placeholder:"−∞",onChange:s("from_h")})," → ",v("input",{class:"input",type:"number","data-f":"to_h",step:.5,defaultValue:i.to_h!==void 0?String(i.to_h):"",placeholder:"+∞",onChange:s("to_h")})," h"]})]})]}),a("src",N("f_src"),N("f_src_ph")),v("label",{children:[N("f_note"),v("textarea",{class:"input","data-f":"note",rows:2,defaultValue:i.note??"",onChange:n("note")})]}),v("div",{class:"foot",children:[v("button",{class:"btn sm","data-fly":i.id,onClick:()=>{const o=i.pts[0];o&&Ue.onFlyTo(o.x,o.y)},children:[v(Xe,{name:"flyto",size:12}),N("flyTo")]}),v("span",{class:"mono",children:[i.cells?.length?N("geomCells"):i.pts.length>1?j(`${i.pts.length} 个顶点`,`${i.pts.length} vertices`):""," · ",N("f_key")," ",i.key??"—"]})]})]})}function P1(){const i=Gi(null),e=V.dirty.value,t=V.devSave.value,n=V.scene.value;return v(dt,{children:[v("div",{class:"files",id:"measureFiles",children:[v("button",{id:"btnSaveM",class:`btn sm ${e?"primary":""}`,onClick:()=>Ue.onSaveMeasures(),children:[v(Xe,{name:"save",size:13}),N(t?"save":"download")]}),v("button",{id:"btnExportM",class:"btn sm icon","aria-label":N("exportNote"),title:N("exportNote"),onClick:()=>Ue.onExportMeasures(),children:v(Xe,{name:"download",size:13})}),v("button",{id:"btnImportM",class:"btn sm icon","aria-label":N("importNote"),title:N("importNote"),onClick:()=>i.current?.click(),children:v(Xe,{name:"upload",size:13})}),v("span",{class:"grow"}),v("button",{id:"btnRevertM",class:"btn sm ghost",disabled:!e,onClick:()=>Ue.onRevertMeasures(),children:N("revert")}),v("input",{ref:i,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:s=>{const r=s.currentTarget,a=r.files?.[0];a&&Ue.onImportMeasures(a),r.value=""}})]}),v("p",{class:"caveat",children:[t?j(`保存到 web/public/scenes/${n?.id}/measures.json（开发服务器写文件，提交即生效）`,`Saves web/public/scenes/${n?.id}/measures.json (the dev server writes the file; commit it)`):j("生产版只能下载 JSON，放到 web/public/scenes/<场景>/measures.json","Production build downloads the JSON; put it at web/public/scenes/<scene>/measures.json"),e?j("。有未保存的改动（已暂存在浏览器里）",". Unsaved edits (kept in this browser)"):""]})]})}const D1=[["scenario","book","scenario"],["params","sliders","params"],["layers","layers","layers"],["measures","wall","measures"]],L1=i=>{V.leftTab.value=V.leftTab.value===i?null:i,ic("hkfl.ui.left",V.leftTab.value)};function F1(){const i=V.leftTab.value,e=V.measures.value.length,t=n=>n==="scenario"?N("scenario"):n==="params"?j("参数","Params"):n==="layers"?N("layers"):j("措施","Measures");return v("div",{class:"dock",id:"left",children:[v("nav",{class:"rail float","aria-label":j("工作区","Workspaces"),children:D1.map(([n,s])=>v("button",{"data-ltab":n,class:i===n?"on":"","aria-pressed":i===n,"data-tip":i===n?j("收起","Collapse"):t(n),"data-tip-pos":"right",onClick:()=>L1(n),children:[v(Xe,{name:s==="book"?"info":s,size:18}),v("span",{children:t(n)}),n==="measures"&&e>0&&v("span",{class:"badge",children:e})]},n))}),i&&v("div",{class:"lpanel float",children:[i==="scenario"&&v(I1,{}),i==="params"&&v(U1,{}),i==="layers"&&v(N1,{}),i==="measures"&&v(b1,{})]})]})}function fo({title:i,sub:e}){return v("div",{class:"p-head",children:[v("div",{class:"grow",children:[v("div",{class:"p-t",children:i}),e&&v("div",{class:"p-s",children:e})]}),v("button",{class:"btn sm icon ghost","data-tip":j("收起","Collapse"),"data-tip-pos":"left",onClick:()=>{V.leftTab.value=null,ic("hkfl.ui.left",null)},children:v(Xe,{name:"x",size:14})})]})}function I1(){const i=V.event.value,e=V.scene.value,[t,n]=_o(!1);if(!i||!e)return v(fo,{title:N("scenario")});const s=j(i.narrative_zh,i.narrative_en);return v(dt,{children:[v(fo,{title:N("scenario"),sub:j(e.name_zh,e.name_en)}),v("div",{class:"p-body",children:[v("section",{class:"blk",children:[v("div",{class:"ev-meta",children:[v("span",{class:`kind ${i.kind}`,children:N(i.kind)}),v("span",{class:"ev-when",children:[i.window.start.replace("T"," ")," → ",i.window.end.slice(5).replace("T"," ")," HKT"]})]}),v("h2",{class:"ev-title",children:j(i.name_zh,i.name_en)}),v("p",{class:`ev-narr ${t?"":"clamp"}`,children:s}),s.length>90&&v("button",{class:"linkish",onClick:()=>n(!t),children:N(t?"less":"more")})]}),v(rn,{title:j("事件数据","Event record"),children:v("dl",{class:"facts",children:i.facts.map(([r,a],o)=>v(dt,{children:[v("dt",{children:r}),v("dd",{children:a})]},o))})}),v(rn,{title:N("places"),n:e.pois.length,hint:j("点击飞到","click to fly"),children:[v("p",{class:"ev-narr",style:{marginBottom:"10px"},children:j(e.blurb_zh,e.blurb_en)}),v("div",{class:"chips",children:e.pois.map((r,a)=>v("button",{class:"chip","data-poi":a,onClick:()=>Ue.onFlyTo(r.x,r.y),children:[v(Xe,{name:"flyto",size:12}),r.name]},a))})]}),v(rn,{title:j("模型与数据","Model & data"),children:v("div",{class:"credits",children:[N("modelNote")," ",e.cols,"×",e.rows," @ ",e.res," m · DEM: ",e.dem_stats?.source??"—",v("br",{}),e.textures?.attribution??"",v("br",{}),j("建筑：Overture Maps / OpenStreetMap 贡献者","Buildings: Overture Maps / OpenStreetMap contributors")]})})]})]})}const xp={surgeScale:1,slr:0,rainScale:1,drainMmPerHour:40};function U1(){const i=V.params.value;if(!i)return v(fo,{title:N("params")});const e=(s,r)=>{V.params.value={...V.params.value,[s]:r}},t=()=>Ue.onParamChange({...V.params.value}),n=(s,r,a,o,l,c)=>v(b0,{id:`sl_${s}`,label:r,value:i[s],min:a,max:o,step:l,fmt:c,onInput:u=>e(s,u),onCommit:t,changed:xp[s]!==void 0&&Math.abs(i[s]-xp[s])>1e-6});return v(dt,{children:[v(fo,{title:N("params"),sub:j("拖动后松开即从头重算","Release a slider to re-run from the start")}),v("div",{class:"p-body",children:[v(rn,{title:N("grpCoast"),children:[n("surgeScale",N("surgeScale"),0,2,.05,s=>`×${s.toFixed(2)}`),n("waveSetup",N("waveSetup"),0,1.5,.05,s=>`+${s.toFixed(2)} m`),n("waveHs",N("waveHs"),0,5,.1,s=>`${s.toFixed(1)} m`),n("slr",N("slr"),0,1.5,.05,s=>`+${s.toFixed(2)} m`)]}),v(rn,{title:N("grpRain"),children:[n("rainScale",N("rainScale"),0,2.5,.05,s=>`×${s.toFixed(2)}`),n("drainMmPerHour",N("drain"),0,120,5,s=>`${s.toFixed(0)} mm/h`)]}),v(rn,{title:N("grpModel"),children:[v(Hi,{id:"chkBld",label:N("buildingsBlock"),checked:i.buildingsBlock,onChange:s=>{V.params.value={...i,buildingsBlock:s},Ue.onParamChange({...V.params.value})}}),v(Hi,{id:"chkSg",label:N("subgrid"),checked:i.subgrid,onChange:s=>{V.params.value={...i,subgrid:s},Ue.onParamChange({...V.params.value})}})]}),v(rn,{title:j("本机缓存","Browser cache"),children:[v("p",{class:"caveat",children:[v(Xe,{name:"info",size:12}),v("span",{children:j("每次运行的关键帧（约每小时一帧）会压缩后存进浏览器（IndexedDB，最多约 600 MB，最久未用的先清）。同一场景、事件、参数和措施再打开时直接恢复，时间轴随处可跳；改参数或措施就是另一次运行。","Keyframes of each run (about one per hour) are compressed into the browser (IndexedDB, up to about 600 MB, least recently used evicted first). The same scene, event, parameters and measures reopen from the cache and the timeline jumps anywhere; a changed parameter or measure is a new run.")})]}),v("button",{class:"btn sm",onClick:()=>Ue.onClearCache(),children:[v(Xe,{name:"x",size:13}),j("清空本机缓存","Clear the browser cache")]})]})]})]})}function N1(){const i=V.scene.value,e=V.flowMode.value,t=V.exag.value,n=r=>{for(let a=0;a<3&&V.flowMode.value!==r;a++)Ue.onFlowMode()},s=r=>{for(let a=0;a<4&&V.exag.value!==r;a++)Ue.onExag()};return v(dt,{children:[v(fo,{title:N("layers"),sub:j("水体、流向、标注与三维显示","Water, flow, labels and 3D")}),v("div",{class:"p-body",children:[v(rn,{title:j("水体","Water"),children:[v(Qs,{cls:"full",items:[["now",N("waterNow")],["max",N("waterMax")]],value:V.waterMode.value,onPick:r=>Ue.onWaterMode(r)}),v("p",{class:"caveat",style:{marginTop:"8px"},children:[v(Xe,{name:"info",size:12}),v("span",{children:N("waterMaxHint")})]}),v(Hi,{id:"chkMax",label:N("showMax"),checked:V.showMax.value,onChange:r=>{V.showMax.value=r,Ue.onShowMax(r)}}),v(Hi,{id:"chkProbe",label:j("悬停读数（光标处水深）","Hover read-out (depth under the cursor)"),checked:V.probeOn.value,onChange:r=>{V.probeOn.value=r,Ue.onProbe(r)}}),v(Hi,{id:"chkFine",label:j("1 m 细节（近景按 1 m 地形与连通性切边）","1 m detail (near view cut by 1 m terrain and reachability)"),checked:V.fine.value,onChange:r=>{V.fine.value=r,Ue.onFine(r)}})]}),v(rn,{title:j("流向","Flow"),children:v(Qs,{cls:"full",items:[["particles",j("粒子","Particles")],["arrows",j("箭头","Arrows")],["none",j("关","Off")]],value:e,onPick:n})}),v(rn,{title:j("标注","Labels"),children:[i?.facilities?.length?v(Hi,{id:"chkFac",label:N("showFac"),checked:V.showFac.value,onChange:r=>{V.showFac.value=r,Ue.onShowFacilities(r)}}):null,v(Hi,{id:"chkLm",label:N("landmarks"),checked:V.showLandmarks.value,onChange:r=>{V.showLandmarks.value=r,Ue.onShowLandmarks(r)}}),v(Hi,{id:"chkMl",label:j("防洪措施记录（海堤、挡水板、泵站、堵塞）","Recorded measures (seawalls, barriers, pumps, blockages)"),checked:V.showMeasureLabels.value,onChange:r=>{V.showMeasureLabels.value=r,Ue.onShowMeasureLabels(r)}})]}),v(rn,{title:j("三维","3D"),children:[v("div",{class:"row",children:[v("label",{children:j("竖向夸张","Vertical exaggeration")}),v(Qs,{items:[[1,"×1"],[1.5,"×1.5"],[2,"×2"],[3,"×3"]],value:t,onPick:s})]}),v("div",{class:"row",children:[v("label",{children:j("底图","Basemap")}),v(Qs,{items:[["imagery",j("卫星影像","Imagery")],["basemap",j("地图","Map")]],value:V.texMode.value,onPick:r=>{r!==V.texMode.value&&Ue.onTexToggle()}})]}),v(Hi,{id:"chkSh",label:N("shadows"),checked:V.shadows.value,onChange:r=>{V.shadows.value=r,Ue.onShadows(r)}}),v(Hi,{id:"chkFx",label:j("电影效果（天气、夜景、水面波光、楼面细节、闪电；仅 3D）","Cinematic effects (weather, night, glints, facade detail, lightning; 3D only)"),checked:V.fx.value,onChange:r=>Ue.onFx(r)})]})]})]})}const k1=!0,vn="u-",O1="uplot",z1=vn+"hz",B1=vn+"vt",H1=vn+"title",V1=vn+"wrap",G1=vn+"under",W1=vn+"over",$1=vn+"axis",Js=vn+"off",X1=vn+"select",q1=vn+"cursor-x",j1=vn+"cursor-y",Y1=vn+"cursor-pt",K1=vn+"legend",Z1=vn+"live",J1=vn+"inline",Q1=vn+"series",eT=vn+"marker",yp=vn+"label",tT=vn+"value",Wa="width",$a="height",za="top",Mp="bottom",Gr="left",hh="right",nd="#000",Sp=nd+"0",uh="mousemove",wp="mousedown",dh="mouseup",bp="mouseenter",Tp="mouseleave",Ep="dblclick",nT="resize",iT="scroll",Ap="change",Vl="dppxchange",id="--",xa=typeof window<"u",vu=xa?document:null,sa=xa?window:null,sT=xa?navigator:null;let Tt,ul;function _u(){let i=devicePixelRatio;Tt!=i&&(Tt=i,ul&&yu(Ap,ul,_u),ul=matchMedia(`(min-resolution: ${Tt-.001}dppx) and (max-resolution: ${Tt+.001}dppx)`),sr(Ap,ul,_u),sa.dispatchEvent(new CustomEvent(Vl)))}function ri(i,e){if(e!=null){let t=i.classList;!t.contains(e)&&t.add(e)}}function xu(i,e){let t=i.classList;t.contains(e)&&t.remove(e)}function Ht(i,e,t){i.style[e]=t+"px"}function Ai(i,e,t,n){let s=vu.createElement(i);return e!=null&&ri(s,e),t?.insertBefore(s,n),s}function pi(i,e){return Ai("div",i,e)}const Cp=new WeakMap;function Bi(i,e,t,n,s){let r="translate("+e+"px,"+t+"px)",a=Cp.get(i);r!=a&&(i.style.transform=r,Cp.set(i,r),e<0||t<0||e>n||t>s?ri(i,Js):xu(i,Js))}const Rp=new WeakMap;function Pp(i,e,t){let n=e+t,s=Rp.get(i);n!=s&&(Rp.set(i,n),i.style.background=e,i.style.borderColor=t)}const Dp=new WeakMap;function Lp(i,e,t,n){let s=e+""+t,r=Dp.get(i);s!=r&&(Dp.set(i,s),i.style.height=t+"px",i.style.width=e+"px",i.style.marginLeft=n?-e/2+"px":0,i.style.marginTop=n?-t/2+"px":0)}const sd={passive:!0},rT={...sd,capture:!0};function sr(i,e,t,n){e.addEventListener(i,t,n?rT:sd)}function yu(i,e,t,n){e.removeEventListener(i,t,sd)}xa&&_u();function Ri(i,e,t,n){let s;t=t||0,n=n||e.length-1;let r=n<=2147483647;for(;n-t>1;)s=r?t+n>>1:li((t+n)/2),e[s]<i?t=s:n=s;return i-e[t]<=e[n]-i?t:n}function C0(i){return(t,n,s)=>{let r=-1,a=-1;for(let o=n;o<=s;o++)if(i(t[o])){r=o;break}for(let o=s;o>=n;o--)if(i(t[o])){a=o;break}return[r,a]}}const R0=i=>i!=null,P0=i=>i!=null&&i>0,sc=C0(R0),aT=C0(P0);function oT(i,e,t,n=0,s=!1){let r=s?aT:sc,a=s?P0:R0;[e,t]=r(i,e,t);let o=i[e],l=i[e];if(e>-1)if(n==1)o=i[e],l=i[t];else if(n==-1)o=i[t],l=i[e];else for(let c=e;c<=t;c++){let u=i[c];a(u)&&(u<o?o=u:u>l&&(l=u))}return[o??Ut,l??-Ut]}function rc(i,e,t,n){let s=Up(i),r=Up(e);i==e&&(s==-1?(i*=t,e/=t):(i/=t,e*=t));let a=t==10?os:D0,o=s==1?li:gi,l=r==1?gi:li,c=o(a(pn(i))),u=l(a(pn(e))),d=ua(t,c),h=ua(t,u);return t==10&&(c<0&&(d=Nt(d,-c)),u<0&&(h=Nt(h,-u))),n||t==2?(i=d*s,e=h*r):(i=U0(i,d),e=ac(e,h)),[i,e]}function rd(i,e,t,n){let s=rc(i,e,t,n);return i==0&&(s[0]=0),e==0&&(s[1]=0),s}const ad=.1,Fp={mode:3,pad:ad},io={pad:0,soft:null,mode:0},lT={min:io,max:io};function Gl(i,e,t,n){return oc(t)?Ip(i,e,t):(io.pad=t,io.soft=n?0:null,io.mode=n?3:0,Ip(i,e,lT))}function St(i,e){return i??e}function cT(i,e,t){for(e=St(e,0),t=St(t,i.length-1);e<=t;){if(i[e]!=null)return!0;e++}return!1}function Ip(i,e,t){let n=t.min,s=t.max,r=St(n.pad,0),a=St(s.pad,0),o=St(n.hard,-Ut),l=St(s.hard,Ut),c=St(n.soft,Ut),u=St(s.soft,-Ut),d=St(n.mode,0),h=St(s.mode,0),f=e-i,g=os(f),_=Xn(pn(i),pn(e)),m=os(_),p=pn(m-g);(f<1e-24||p>10)&&(f=0,(i==0||e==0)&&(f=1e-24,d==2&&c!=Ut&&(r=0),h==2&&u!=-Ut&&(a=0)));let x=f||_||1e3,y=os(x),w=ua(10,li(y)),F=x*(f==0?i==0?.1:1:r),C=Nt(U0(i-F,w/10),24),R=i>=c&&(d==1||d==3&&C<=c||d==2&&C>=c)?c:Ut,U=Xn(o,C<R&&i>=R?R:Li(R,C)),ne=x*(f==0?e==0?.1:1:a),S=Nt(ac(e+ne,w/10),24),b=e<=u&&(h==1||h==3&&S>=u||h==2&&S<=u)?u:-Ut,W=Li(l,S>b&&e<=b?b:Xn(b,S));return U==W&&U==0&&(W=100),[U,W]}const hT=new Intl.NumberFormat(xa?sT.language:"en-US"),od=i=>hT.format(i),ci=Math,bl=ci.PI,pn=ci.abs,li=ci.floor,fn=ci.round,gi=ci.ceil,Li=ci.min,Xn=ci.max,ua=ci.pow,Up=ci.sign,os=ci.log10,D0=ci.log2,uT=(i,e=1)=>ci.sinh(i)*e,fh=(i,e=1)=>ci.asinh(i/e),Ut=1/0;function Np(i){return(os((i^i>>31)-(i>>31))|0)+1}function Mu(i,e,t){return Li(Xn(i,e),t)}function L0(i){return typeof i=="function"}function mt(i){return L0(i)?i:()=>i}const dT=()=>{},F0=i=>i,I0=(i,e)=>e,fT=i=>null,kp=i=>!0,Op=(i,e)=>i==e,pT=/\.\d*?(?=9{6,}|0{6,})/gm,hr=i=>{if(k0(i)||Is.has(i))return i;const e=`${i}`,t=e.match(pT);if(t==null)return i;let n=t[0].length-1;if(e.indexOf("e-")!=-1){let[s,r]=e.split("e");return+`${hr(s)}e${r}`}return Nt(i,n)};function js(i,e){return hr(Nt(hr(i/e))*e)}function ac(i,e){return hr(gi(hr(i/e))*e)}function U0(i,e){return hr(li(hr(i/e))*e)}function Nt(i,e=0){if(k0(i))return i;let t=10**e,n=i*t*(1+Number.EPSILON);return fn(n)/t}const Is=new Map;function N0(i){return((""+i).split(".")[1]||"").length}function po(i,e,t,n){let s=[],r=n.map(N0);for(let a=e;a<t;a++){let o=pn(a),l=Nt(ua(i,a),o);for(let c=0;c<n.length;c++){let u=i==10?+`${n[c]}e${a}`:n[c]*l,d=(a>=0?0:o)+(a>=r[c]?0:r[c]),h=i==10?u:Nt(u,d);s.push(h),Is.set(h,d)}}return s}const so={},ld=[],da=[null,null],Ts=Array.isArray,k0=Number.isInteger,mT=i=>i===void 0;function zp(i){return typeof i=="string"}function oc(i){let e=!1;if(i!=null){let t=i.constructor;e=t==null||t==Object}return e}function gT(i){return i!=null&&typeof i=="object"}const vT=Object.getPrototypeOf(Uint8Array),O0="__proto__";function fa(i,e=oc){let t;if(Ts(i)){let n=i.find(s=>s!=null);if(Ts(n)||e(n)){t=Array(i.length);for(let s=0;s<i.length;s++)t[s]=fa(i[s],e)}else t=i.slice()}else if(i instanceof vT)t=i.slice();else if(e(i)){t={};for(let n in i)n!=O0&&(t[n]=fa(i[n],e))}else t=i;return t}function cn(i){let e=arguments;for(let t=1;t<e.length;t++){let n=e[t];for(let s in n)s!=O0&&(oc(i[s])?cn(i[s],fa(n[s])):i[s]=fa(n[s]))}return i}const _T=0,xT=1,yT=2;function MT(i,e,t){for(let n=0,s,r=-1;n<e.length;n++){let a=e[n];if(a>r){for(s=a-1;s>=0&&i[s]==null;)i[s--]=null;for(s=a+1;s<t&&i[s]==null;)i[r=s++]=null}}}function ST(i,e){if(TT(i)){let a=i[0].slice();for(let o=1;o<i.length;o++)a.push(...i[o].slice(1));return ET(a[0])||(a=bT(a)),a}let t=new Set;for(let a=0;a<i.length;a++){let l=i[a][0],c=l.length;for(let u=0;u<c;u++)t.add(l[u])}let n=[Array.from(t).sort((a,o)=>a-o)],s=n[0].length,r=new Map;for(let a=0;a<s;a++)r.set(n[0][a],a);for(let a=0;a<i.length;a++){let o=i[a],l=o[0];for(let c=1;c<o.length;c++){let u=o[c],d=Array(s).fill(void 0),h=e?e[a][c]:xT,f=[];for(let g=0;g<u.length;g++){let _=u[g],m=r.get(l[g]);_===null?h!=_T&&(d[m]=_,h==yT&&f.push(m)):d[m]=_}MT(d,f,s),n.push(d)}}return n}const wT=typeof queueMicrotask>"u"?i=>Promise.resolve().then(i):queueMicrotask;function bT(i){let e=i[0],t=e.length,n=Array(t);for(let r=0;r<n.length;r++)n[r]=r;n.sort((r,a)=>e[r]-e[a]);let s=[];for(let r=0;r<i.length;r++){let a=i[r],o=Array(t);for(let l=0;l<t;l++)o[l]=a[n[l]];s.push(o)}return s}function TT(i){let e=i[0][0],t=e.length;for(let n=1;n<i.length;n++){let s=i[n][0];if(s.length!=t)return!1;if(s!=e){for(let r=0;r<t;r++)if(s[r]!=e[r])return!1}}return!0}function ET(i,e=100){const t=i.length;if(t<=1)return!0;let n=0,s=t-1;for(;n<=s&&i[n]==null;)n++;for(;s>=n&&i[s]==null;)s--;if(s<=n)return!0;const r=Xn(1,li((s-n+1)/e));for(let a=i[n],o=n+r;o<=s;o+=r){const l=i[o];if(l!=null){if(l<=a)return!1;a=l}}return!0}const z0=["January","February","March","April","May","June","July","August","September","October","November","December"],B0=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function H0(i){return i.slice(0,3)}const AT=B0.map(H0),CT=z0.map(H0),RT={MMMM:z0,MMM:CT,WWWW:B0,WWW:AT};function Ba(i){return(i<10?"0":"")+i}function PT(i){return(i<10?"00":i<100?"0":"")+i}const DT={YYYY:i=>i.getFullYear(),YY:i=>(i.getFullYear()+"").slice(2),MMMM:(i,e)=>e.MMMM[i.getMonth()],MMM:(i,e)=>e.MMM[i.getMonth()],MM:i=>Ba(i.getMonth()+1),M:i=>i.getMonth()+1,DD:i=>Ba(i.getDate()),D:i=>i.getDate(),WWWW:(i,e)=>e.WWWW[i.getDay()],WWW:(i,e)=>e.WWW[i.getDay()],HH:i=>Ba(i.getHours()),H:i=>i.getHours(),h:i=>{let e=i.getHours();return e==0?12:e>12?e-12:e},AA:i=>i.getHours()>=12?"PM":"AM",aa:i=>i.getHours()>=12?"pm":"am",a:i=>i.getHours()>=12?"p":"a",mm:i=>Ba(i.getMinutes()),m:i=>i.getMinutes(),ss:i=>Ba(i.getSeconds()),s:i=>i.getSeconds(),fff:i=>PT(i.getMilliseconds())};function cd(i,e){e=e||RT;let t=[],n=/\{([a-z]+)\}|[^{]+/gi,s;for(;s=n.exec(i);)t.push(s[0][0]=="{"?DT[s[1]]:s[0]);return r=>{let a="";for(let o=0;o<t.length;o++)a+=typeof t[o]=="string"?t[o]:t[o](r,e);return a}}const LT=new Intl.DateTimeFormat().resolvedOptions().timeZone;function FT(i,e){let t;return e=="UTC"||e=="Etc/UTC"?t=new Date(+i+i.getTimezoneOffset()*6e4):e==LT?t=i:(t=new Date(i.toLocaleString("en-US",{timeZone:e})),t.setMilliseconds(i.getMilliseconds())),t}const V0=i=>i%1==0,Wl=[1,2,2.5,5],IT=po(10,-32,0,Wl),G0=po(10,0,32,Wl),UT=G0.filter(V0),Ys=IT.concat(G0),hd=`
`,W0="{YYYY}",Bp=hd+W0,$0="{M}/{D}",Xa=hd+$0,dl=Xa+"/{YY}",X0="{aa}",NT="{h}:{mm}",qr=NT+X0,Hp=hd+qr,Vp=":{ss}",At=null;function q0(i){let e=i*1e3,t=e*60,n=t*60,s=n*24,r=s*30,a=s*365,l=(i==1?po(10,0,3,Wl).filter(V0):po(10,-3,0,Wl)).concat([e,e*5,e*10,e*15,e*30,t,t*5,t*10,t*15,t*30,n,n*2,n*3,n*4,n*6,n*8,n*12,s,s*2,s*3,s*4,s*5,s*6,s*7,s*8,s*9,s*10,s*15,r,r*2,r*3,r*4,r*6,a,a*2,a*5,a*10,a*25,a*50,a*100]);const c=[[a,W0,At,At,At,At,At,At,1],[s*28,"{MMM}",Bp,At,At,At,At,At,1],[s,$0,Bp,At,At,At,At,At,1],[n,"{h}"+X0,dl,At,Xa,At,At,At,1],[t,qr,dl,At,Xa,At,At,At,1],[e,Vp,dl+" "+qr,At,Xa+" "+qr,At,Hp,At,1],[i,Vp+".{fff}",dl+" "+qr,At,Xa+" "+qr,At,Hp,At,1]];function u(d){return(h,f,g,_,m,p)=>{let x=[],y=m>=a,w=m>=r&&m<a,F=d(g),C=Nt(F*i,3),R=ph(F.getFullYear(),y?0:F.getMonth(),w||y?1:F.getDate()),U=Nt(R*i,3);if(w||y){let ne=w?m/r:0,S=y?m/a:0,b=C==U?C:Nt(ph(R.getFullYear()+S,R.getMonth()+ne,1)*i,3),W=new Date(fn(b/i)),B=W.getFullYear(),Y=W.getMonth();for(let J=0;b<=_;J++){let K=ph(B+S*J,Y+ne*J,1),k=K-d(Nt(K*i,3));b=Nt((+K+k)*i,3),b<=_&&x.push(b)}}else{let ne=m>=s?s:m,S=li(g)-li(C),b=U+S+ac(C-U,ne);x.push(b);let W=d(b),B=W.getHours()+W.getMinutes()/t+W.getSeconds()/n,Y=m/n,J=h.axes[f]._space,K=p/J;for(;b=Nt(b+m,i==1?0:3),!(b>_);)if(Y>1){let k=li(Nt(B+Y,6))%24,le=d(b).getHours()-k;le>1&&(le=-1),b-=le*n,B=(B+Y)%24;let oe=x[x.length-1];Nt((b-oe)/m,3)*K>=.7&&x.push(b)}else x.push(b)}return x}}return[l,c,u]}const[kT,OT,zT]=q0(1),[BT,HT,VT]=q0(.001);po(2,-53,53,[1]);function Gp(i,e){return i.map(t=>t.map((n,s)=>s==0||s==8||n==null?n:e(s==1||t[8]==0?n:t[1]+n)))}function Wp(i,e){return(t,n,s,r,a)=>{let o=e.find(g=>a>=g[0])||e[e.length-1],l,c,u,d,h,f;return n.map(g=>{let _=i(g),m=_.getFullYear(),p=_.getMonth(),x=_.getDate(),y=_.getHours(),w=_.getMinutes(),F=_.getSeconds(),C=m!=l&&o[2]||p!=c&&o[3]||x!=u&&o[4]||y!=d&&o[5]||w!=h&&o[6]||F!=f&&o[7]||o[1];return l=m,c=p,u=x,d=y,h=w,f=F,C(_)})}}function GT(i,e){let t=cd(e);return(n,s,r,a,o)=>s.map(l=>t(i(l)))}function ph(i,e,t){return new Date(i,e,t)}function $p(i,e){return e(i)}const WT="{YYYY}-{MM}-{DD} {h}:{mm}{aa}";function Xp(i,e){return(t,n,s,r)=>r==null?id:e(i(n))}function $T(i,e){let t=i.series[e];return t.width?t.stroke(i,e):t.points.width?t.points.stroke(i,e):null}function XT(i,e){return i.series[e].fill(i,e)}const qT={show:!0,live:!0,isolate:!1,mount:dT,markers:{show:!0,width:2,stroke:$T,fill:XT,dash:"solid"},idx:null,idxs:null,values:[]};function jT(i,e){let t=i.cursor.points,n=pi(),s=t.size(i,e);Ht(n,Wa,s),Ht(n,$a,s);let r=s/-2;Ht(n,"marginLeft",r),Ht(n,"marginTop",r);let a=t.width(i,e,s);return a&&Ht(n,"borderWidth",a),n}function YT(i,e){let t=i.series[e].points;return t._fill||t._stroke}function KT(i,e){let t=i.series[e].points;return t._stroke||t._fill}function ZT(i,e){return i.series[e].points.size}const mh=[0,0];function JT(i,e,t){return mh[0]=e,mh[1]=t,mh}function fl(i,e,t,n=!0){return s=>{s.button==0&&(!n||s.target==e)&&t(s)}}function gh(i,e,t,n=!0){return s=>{(!n||s.target==e)&&t(s)}}const QT={show:!0,x:!0,y:!0,lock:!1,move:JT,points:{one:!1,show:jT,size:ZT,width:0,stroke:KT,fill:YT},bind:{mousedown:fl,mouseup:fl,click:fl,dblclick:fl,mousemove:gh,mouseleave:gh,mouseenter:gh},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,click:(i,e)=>{e.stopPropagation(),e.stopImmediatePropagation()},_x:!1,_y:!1},focus:{dist:(i,e,t,n,s)=>n-s,prox:-1,bias:0},hover:{skip:[void 0],prox:null,bias:0},left:-10,top:-10,idx:null,dataIdx:null,idxs:null,event:null},j0={show:!0,stroke:"rgba(0,0,0,0.07)",width:2},ud=cn({},j0,{filter:I0}),Y0=cn({},ud,{size:10}),K0=cn({},j0,{show:!1}),dd='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',Z0="bold "+dd,J0=1.5,qp={show:!0,scale:"x",stroke:nd,space:50,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:Z0,side:2,grid:ud,ticks:Y0,border:K0,font:dd,lineGap:J0,rotate:0},eE="Value",tE="Time",jp={show:!0,scale:"x",auto:!1,sorted:1,min:Ut,max:-Ut,idxs:[]};function nE(i,e,t,n,s){return e.map(r=>r==null?"":od(r))}function iE(i,e,t,n,s,r,a){let o=[],l=Is.get(s)||0;t=a?t:Nt(ac(t,s),l);for(let c=t;c<=n;c=Nt(c+s,l))o.push(Object.is(c,-0)?0:c);return o}function Su(i,e,t,n,s,r,a){const o=[],l=i.scales[i.axes[e].scale].log,c=l==10?os:D0,u=li(c(t));s=ua(l,u),l==10&&(s=Ys[Ri(s,Ys)]);let d=t,h=s*l;l==10&&(h=Ys[Ri(h,Ys)]);do o.push(d),d=d+s,l==10&&!Is.has(d)&&(d=Nt(d,Is.get(s))),d>=h&&(s=d,h=s*l,l==10&&(h=Ys[Ri(h,Ys)]));while(d<=n);return o}function sE(i,e,t,n,s,r,a){let l=i.scales[i.axes[e].scale].asinh,c=n>l?Su(i,e,Xn(l,t),n,s):[l],u=n>=0&&t<=0?[0]:[];return(t<-l?Su(i,e,Xn(l,-n),-t,s):[l]).reverse().map(h=>-h).concat(u,c)}const Q0=/./,rE=/[12357]/,aE=/[125]/,Yp=/1/,wu=(i,e,t,n)=>i.map((s,r)=>e==4&&s==0||r%n==0&&t.test(s.toExponential()[s<0?1:0])?s:null);function oE(i,e,t,n,s){let r=i.axes[t],a=r.scale,o=i.scales[a],l=i.valToPos,c=r._space,u=l(10,a),d=l(9,a)-u>=c?Q0:l(7,a)-u>=c?rE:l(5,a)-u>=c?aE:Yp;if(d==Yp){let h=pn(l(1,a)-u);if(h<c)return wu(e.slice().reverse(),o.distr,d,gi(c/h)).reverse()}return wu(e,o.distr,d,1)}function lE(i,e,t,n,s){let r=i.axes[t],a=r.scale,o=r._space,l=i.valToPos,c=pn(l(1,a)-l(2,a));return c<o?wu(e.slice().reverse(),3,Q0,gi(o/c)).reverse():e}function cE(i,e,t,n){return n==null?id:e==null?"":od(e)}const Kp={show:!0,scale:"y",stroke:nd,space:30,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:Z0,side:3,grid:ud,ticks:Y0,border:K0,font:dd,lineGap:J0,rotate:0};function hE(i,e){let t=3+(i||1)*2;return Nt(t*e,3)}function uE(i,e){let{scale:t,idxs:n}=i.series[0],s=i._data[0],r=i.valToPos(s[n[0]],t,!0),a=i.valToPos(s[n[1]],t,!0),o=pn(a-r),l=i.series[e],c=o/(l.points.space*Tt);return n[1]-n[0]<=c}const Zp={scale:null,auto:!0,sorted:0,min:Ut,max:-Ut},eg=(i,e,t,n,s)=>s,Jp={show:!0,auto:!0,sorted:0,gaps:eg,alpha:1,facets:[cn({},Zp,{scale:"x"}),cn({},Zp,{scale:"y"})]},Qp={scale:"y",auto:!0,sorted:0,show:!0,spanGaps:!1,gaps:eg,alpha:1,points:{show:uE,filter:null},values:null,min:Ut,max:-Ut,idxs:[],path:null,clip:null};function dE(i,e,t,n,s){return t/10}const tg={time:k1,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},fE=cn({},tg,{time:!1,ori:1}),em={};function ng(i,e){let t=em[i];return t||(t={key:i,plots:[],sub(n){t.plots.push(n)},unsub(n){t.plots=t.plots.filter(s=>s!=n)},pub(n,s,r,a,o,l,c){for(let u=0;u<t.plots.length;u++)t.plots[u]!=s&&t.plots[u].pub(n,s,r,a,o,l,c)}},i!=null&&(em[i]=t)),t}const pa=1,bu=2;function mr(i,e,t){const n=i.mode,s=i.series[e],r=n==2?i._data[e]:i._data,a=i.scales,o=i.bbox;let l=r[0],c=n==2?r[1]:r[e],u=n==2?a[s.facets[0].scale]:a[i.series[0].scale],d=n==2?a[s.facets[1].scale]:a[s.scale],h=o.left,f=o.top,g=o.width,_=o.height,m=i.valToPosH,p=i.valToPosV;return u.ori==0?t(s,l,c,u,d,m,p,h,f,g,_,cc,ya,uc,sg,ag):t(s,l,c,u,d,p,m,f,h,_,g,hc,Ma,md,rg,og)}function fd(i,e){let t=0,n=0,s=St(i.bands,ld);for(let r=0;r<s.length;r++){let a=s[r];a.series[0]==e?t=a.dir:a.series[1]==e&&(a.dir==1?n|=1:n|=2)}return[t,n==1?-1:n==2?1:n==3?2:0]}function pE(i,e,t,n,s){let r=i.mode,a=i.series[e],o=r==2?a.facets[1].scale:a.scale,l=i.scales[o];return s==-1?l.min:s==1?l.max:l.distr==3?l.dir==1?l.min:l.max:0}function ls(i,e,t,n,s,r){return mr(i,e,(a,o,l,c,u,d,h,f,g,_,m)=>{let p=a.pxRound;const x=c.dir*(c.ori==0?1:-1),y=c.ori==0?ya:Ma;let w,F;x==1?(w=t,F=n):(w=n,F=t);let C=p(d(o[w],c,_,f)),R=p(h(l[w],u,m,g)),U=p(d(o[F],c,_,f)),ne=p(h(r==1?u.max:u.min,u,m,g)),S=new Path2D(s);return y(S,U,ne),y(S,C,ne),y(S,C,R),S})}function lc(i,e,t,n,s,r){let a=null;if(i.length>0){a=new Path2D;const o=e==0?uc:md;let l=t;for(let d=0;d<i.length;d++){let h=i[d];if(h[1]>h[0]){let f=h[0]-l;f>0&&o(a,l,n,f,n+r),l=h[1]}}let c=t+s-l,u=10;c>0&&o(a,l,n-u/2,c,n+r+u)}return a}function mE(i,e,t){let n=i[i.length-1];n&&n[0]==e?n[1]=t:i.push([e,t])}function pd(i,e,t,n,s,r,a){let o=[],l=i.length;for(let c=s==1?t:n;c>=t&&c<=n;c+=s)if(e[c]===null){let d=c,h=c;if(s==1)for(;++c<=n&&e[c]===null;)h=c;else for(;--c>=t&&e[c]===null;)h=c;let f=r(i[d]),g=h==d?f:r(i[h]),_=d-s;f=a<=0&&_>=0&&_<l?r(i[_]):f;let p=h+s;g=a>=0&&p>=0&&p<l?r(i[p]):g,g>=f&&o.push([f,g])}return o}function tm(i){return i==0?F0:i==1?fn:e=>js(e,i)}function ig(i){let e=i==0?cc:hc,t=i==0?(s,r,a,o,l,c)=>{s.arcTo(r,a,o,l,c)}:(s,r,a,o,l,c)=>{s.arcTo(a,r,l,o,c)},n=i==0?(s,r,a,o,l)=>{s.rect(r,a,o,l)}:(s,r,a,o,l)=>{s.rect(a,r,l,o)};return(s,r,a,o,l,c=0,u=0)=>{c==0&&u==0?n(s,r,a,o,l):(c=Li(c,o/2,l/2),u=Li(u,o/2,l/2),e(s,r+c,a),t(s,r+o,a,r+o,a+l,c),t(s,r+o,a+l,r,a+l,u),t(s,r,a+l,r,a,u),t(s,r,a,r+o,a,c),s.closePath())}}const cc=(i,e,t)=>{i.moveTo(e,t)},hc=(i,e,t)=>{i.moveTo(t,e)},ya=(i,e,t)=>{i.lineTo(e,t)},Ma=(i,e,t)=>{i.lineTo(t,e)},uc=ig(0),md=ig(1),sg=(i,e,t,n,s,r)=>{i.arc(e,t,n,s,r)},rg=(i,e,t,n,s,r)=>{i.arc(t,e,n,s,r)},ag=(i,e,t,n,s,r,a)=>{i.bezierCurveTo(e,t,n,s,r,a)},og=(i,e,t,n,s,r,a)=>{i.bezierCurveTo(t,e,s,n,a,r)};function lg(i){return(e,t,n,s,r)=>mr(e,t,(a,o,l,c,u,d,h,f,g,_,m)=>{let{pxRound:p,points:x}=a,y,w;c.ori==0?(y=cc,w=sg):(y=hc,w=rg);const F=Nt(x.width*Tt,3);let C=(x.size-x.width)/2*Tt,R=Nt(C*2,3),U=new Path2D,ne=new Path2D,{left:S,top:b,width:W,height:B}=e.bbox;uc(ne,S-R,b-R,W+R*2,B+R*2);const Y=J=>{if(l[J]!=null){let K=p(d(o[J],c,_,f)),k=p(h(l[J],u,m,g));y(U,K+C,k),w(U,K,k,C,0,bl*2)}};if(r)r.forEach(Y);else for(let J=n;J<=s;J++)Y(J);return{stroke:F>0?U:null,fill:U,clip:ne,flags:pa|bu}})}function cg(i){return(e,t,n,s,r,a)=>{n!=s&&(r!=n&&a!=n&&i(e,t,n),r!=s&&a!=s&&i(e,t,s),i(e,t,a))}}const gE=cg(ya),vE=cg(Ma);function hg(i){const e=St(i?.alignGaps,0);return(t,n,s,r)=>mr(t,n,(a,o,l,c,u,d,h,f,g,_,m)=>{[s,r]=sc(l,s,r);let p=a.pxRound,x=B=>p(d(B,c,_,f)),y=B=>p(h(B,u,m,g)),w,F;c.ori==0?(w=ya,F=gE):(w=Ma,F=vE);const C=c.dir*(c.ori==0?1:-1),R={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:pa},U=R.stroke;let ne=!1;if(r-s>=_*4){let B=he=>t.posToVal(he,c.key,!0),Y=null,J=null,K,k,ie,pe=x(o[C==1?s:r]),le=x(o[s]),oe=x(o[r]),me=B(C==1?le+1:oe-1);for(let he=C==1?s:r;he>=s&&he<=r;he+=C){let se=o[he],xe=(C==1?se<me:se>me)?pe:x(se),ge=l[he];xe==pe?ge!=null?(k=ge,Y==null?(w(U,xe,y(k)),K=Y=J=k):k<Y?Y=k:k>J&&(J=k)):ge===null&&(ne=!0):(Y!=null&&F(U,pe,y(Y),y(J),y(K),y(k)),ge!=null?(k=ge,w(U,xe,y(k)),Y=J=K=k):(Y=J=null,ge===null&&(ne=!0)),pe=xe,me=B(pe+C))}Y!=null&&Y!=J&&ie!=pe&&F(U,pe,y(Y),y(J),y(K),y(k))}else for(let B=C==1?s:r;B>=s&&B<=r;B+=C){let Y=l[B];Y===null?ne=!0:Y!=null&&w(U,x(o[B]),y(Y))}let[b,W]=fd(t,n);if(a.fill!=null||b!=0){let B=R.fill=new Path2D(U),Y=a.fillTo(t,n,a.min,a.max,b),J=y(Y),K=x(o[s]),k=x(o[r]);C==-1&&([k,K]=[K,k]),w(B,k,J),w(B,K,J)}if(!a.spanGaps){let B=[];ne&&B.push(...pd(o,l,s,r,C,x,e)),R.gaps=B=a.gaps(t,n,s,r,B),R.clip=lc(B,c.ori,f,g,_,m)}return W!=0&&(R.band=W==2?[ls(t,n,s,r,U,-1),ls(t,n,s,r,U,1)]:ls(t,n,s,r,U,W)),R})}function _E(i){const e=St(i.align,1),t=St(i.ascDesc,!1),n=St(i.alignGaps,0),s=St(i.extend,!1);return(r,a,o,l)=>mr(r,a,(c,u,d,h,f,g,_,m,p,x,y)=>{[o,l]=sc(d,o,l);let w=c.pxRound,{left:F,width:C}=r.bbox,R=le=>w(g(le,h,x,m)),U=le=>w(_(le,f,y,p)),ne=h.ori==0?ya:Ma;const S={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:pa},b=S.stroke,W=h.dir*(h.ori==0?1:-1);let B=U(d[W==1?o:l]),Y=R(u[W==1?o:l]),J=Y,K=Y;s&&e==-1&&(K=F,ne(b,K,B)),ne(b,Y,B);for(let le=W==1?o:l;le>=o&&le<=l;le+=W){let oe=d[le];if(oe==null)continue;let me=R(u[le]),he=U(oe);e==1?ne(b,me,B):ne(b,J,he),ne(b,me,he),B=he,J=me}let k=J;s&&e==1&&(k=F+C,ne(b,k,B));let[ie,pe]=fd(r,a);if(c.fill!=null||ie!=0){let le=S.fill=new Path2D(b),oe=c.fillTo(r,a,c.min,c.max,ie),me=U(oe);ne(le,k,me),ne(le,K,me)}if(!c.spanGaps){let le=[];le.push(...pd(u,d,o,l,W,R,n));let oe=c.width*Tt/2,me=t||e==1?oe:-oe,he=t||e==-1?-oe:oe;le.forEach(se=>{se[0]+=me,se[1]+=he}),S.gaps=le=c.gaps(r,a,o,l,le),S.clip=lc(le,h.ori,m,p,x,y)}return pe!=0&&(S.band=pe==2?[ls(r,a,o,l,b,-1),ls(r,a,o,l,b,1)]:ls(r,a,o,l,b,pe)),S})}function nm(i,e,t,n,s,r,a=Ut){if(i.length>1){let o=null;for(let l=0,c=1/0;l<i.length;l++)if(e[l]!==void 0){if(o!=null){let u=pn(i[l]-i[o]);u<c&&(c=u,a=pn(t(i[l],n,s,r)-t(i[o],n,s,r)))}o=l}}return a}function xE(i){i=i||so;const e=St(i.size,[.6,Ut,1]),t=i.align||0,n=i.gap||0;let s=i.radius;s=s==null?[0,0]:typeof s=="number"?[s,0]:s;const r=mt(s),a=1-e[0],o=St(e[1],Ut),l=St(e[2],1),c=St(i.disp,so),u=St(i.each,f=>{}),{fill:d,stroke:h}=c;return(f,g,_,m)=>mr(f,g,(p,x,y,w,F,C,R,U,ne,S,b)=>{let W=p.pxRound,B=t,Y=n*Tt,J=o*Tt,K=l*Tt,k,ie;w.ori==0?[k,ie]=r(f,g):[ie,k]=r(f,g);const pe=w.dir*(w.ori==0?1:-1);let le=w.ori==0?uc:md,oe=w.ori==0?u:(q,be,ye,De,lt,_e,Le)=>{u(q,be,ye,lt,De,Le,_e)},me=St(f.bands,ld).find(q=>q.series[0]==g),he=me!=null?me.dir:0,se=p.fillTo(f,g,p.min,p.max,he),fe=W(R(se,F,b,ne)),xe,ge,je,Ne=S,He=W(p.width*Tt),at=!1,nt=null,O=null,jt=null,ot=null;d!=null&&(He==0||h!=null)&&(at=!0,nt=d.values(f,g,_,m),O=new Map,new Set(nt).forEach(q=>{q!=null&&O.set(q,new Path2D)}),He>0&&(jt=h.values(f,g,_,m),ot=new Map,new Set(jt).forEach(q=>{q!=null&&ot.set(q,new Path2D)})));let{x0:ft,size:Ke}=c;if(ft!=null&&Ke!=null){B=1,x=ft.values(f,g,_,m),ft.unit==2&&(x=x.map(ye=>f.posToVal(U+ye*S,w.key,!0)));let q=Ke.values(f,g,_,m);Ke.unit==2?ge=q[0]*S:ge=C(q[0],w,S,U)-C(0,w,S,U),Ne=nm(x,y,C,w,S,U,Ne),je=Ne-ge+Y}else Ne=nm(x,y,C,w,S,U,Ne),je=Ne*a+Y,ge=Ne-je;je<1&&(je=0),He>=ge/2&&(He=0),je<5&&(W=F0);let Et=je>0,Ye=Ne-je-(Et?He:0);ge=W(Mu(Ye,K,J)),xe=(B==0?ge/2:B==pe?0:ge)-B*pe*((B==0?Y/2:0)+(Et?He/2:0));const D={stroke:null,fill:null,clip:null,band:null,gaps:null,flags:0},E=at?null:new Path2D;let ee=null;if(me!=null)ee=f.data[me.series[1]];else{let{y0:q,y1:be}=c;q!=null&&be!=null&&(y=be.values(f,g,_,m),ee=q.values(f,g,_,m))}let ce=k*ge,re=ie*ge;for(let q=pe==1?_:m;q>=_&&q<=m;q+=pe){let be=y[q];if(be==null)continue;if(ee!=null){let Ee=ee[q]??0;if(be-Ee==0)continue;fe=R(Ee,F,b,ne)}let ye=w.distr!=2||c!=null?x[q]:q,De=C(ye,w,S,U),lt=R(St(be,se),F,b,ne),_e=W(De-xe),Le=W(Xn(lt,fe)),Ve=W(Li(lt,fe)),We=Le-Ve;if(be!=null){let Ee=be<0?re:ce,et=be<0?ce:re;at?(He>0&&jt[q]!=null&&le(ot.get(jt[q]),_e,Ve+li(He/2),ge,Xn(0,We-He),Ee,et),nt[q]!=null&&le(O.get(nt[q]),_e,Ve+li(He/2),ge,Xn(0,We-He),Ee,et)):le(E,_e,Ve+li(He/2),ge,Xn(0,We-He),Ee,et),oe(f,g,q,_e-He/2,Ve,ge+He,We)}}return He>0?D.stroke=at?ot:E:at||(D._fill=p.width==0?p._fill:p._stroke??p._fill,D.width=0),D.fill=at?O:E,D})}function yE(i,e){const t=St(e?.alignGaps,0);return(n,s,r,a)=>mr(n,s,(o,l,c,u,d,h,f,g,_,m,p)=>{[r,a]=sc(c,r,a);let x=o.pxRound,y=k=>x(h(k,u,m,g)),w=k=>x(f(k,d,p,_)),F,C,R;u.ori==0?(F=cc,R=ya,C=ag):(F=hc,R=Ma,C=og);const U=u.dir*(u.ori==0?1:-1);let ne=y(l[U==1?r:a]),S=ne,b=[],W=[];for(let k=U==1?r:a;k>=r&&k<=a;k+=U)if(c[k]!=null){let pe=l[k],le=y(pe);b.push(S=le),W.push(w(c[k]))}const B={stroke:i(b,W,F,R,C,x),fill:null,clip:null,band:null,gaps:null,flags:pa},Y=B.stroke;let[J,K]=fd(n,s);if(o.fill!=null||J!=0){let k=B.fill=new Path2D(Y),ie=o.fillTo(n,s,o.min,o.max,J),pe=w(ie);R(k,S,pe),R(k,ne,pe)}if(!o.spanGaps){let k=[];k.push(...pd(l,c,r,a,U,y,t)),B.gaps=k=o.gaps(n,s,r,a,k),B.clip=lc(k,u.ori,g,_,m,p)}return K!=0&&(B.band=K==2?[ls(n,s,r,a,Y,-1),ls(n,s,r,a,Y,1)]:ls(n,s,r,a,Y,K)),B})}function ME(i){return yE(SE,i)}function SE(i,e,t,n,s,r){const a=i.length;if(a<2)return null;const o=new Path2D;if(t(o,i[0],e[0]),a==2)n(o,i[1],e[1]);else{let l=Array(a),c=Array(a-1),u=Array(a-1),d=Array(a-1);for(let h=0;h<a-1;h++)u[h]=e[h+1]-e[h],d[h]=i[h+1]-i[h],c[h]=u[h]/d[h];l[0]=c[0];for(let h=1;h<a-1;h++)c[h]===0||c[h-1]===0||c[h-1]>0!=c[h]>0?l[h]=0:(l[h]=3*(d[h-1]+d[h])/((2*d[h]+d[h-1])/c[h-1]+(d[h]+2*d[h-1])/c[h]),isFinite(l[h])||(l[h]=0));l[a-1]=c[a-2];for(let h=0;h<a-1;h++)s(o,i[h]+d[h]/3,e[h]+l[h]*d[h]/3,i[h+1]-d[h]/3,e[h+1]-l[h+1]*d[h]/3,i[h+1],e[h+1])}return o}const Tu=new Set;function im(){for(let i of Tu)i.syncRect(!0)}xa&&(sr(nT,sa,im),sr(iT,sa,im,!0),sr(Vl,sa,()=>{bn.pxRatio=Tt}));const wE=hg(),bE=lg();function sm(i,e,t,n){return(n?[i[0],i[1]].concat(i.slice(2)):[i[0]].concat(i.slice(1))).map((r,a)=>Eu(r,a,e,t))}function TE(i,e){return i.map((t,n)=>n==0?{}:cn({},e,t))}function Eu(i,e,t,n){return cn({},e==0?t:n,i)}function ug(i,e,t){return e==null?da:[e,t]}const EE=ug;function AE(i,e,t){return e==null?da:Gl(e,t,ad,!0)}function dg(i,e,t,n){return e==null?da:rc(e,t,i.scales[n].log,!1)}const CE=dg;function fg(i,e,t,n){return e==null?da:rd(e,t,i.scales[n].log,!1)}const RE=fg;function PE(i,e,t,n,s){let r=Xn(Np(i),Np(e)),a=e-i,o=Ri(s/n*a,t);do{let l=t[o],c=n*l/a;if(c>=s&&r+(l<5?Is.get(l):0)<=17)return[l,c]}while(++o<t.length);return[0,0]}function rm(i){let e,t;return i=i.replace(/(\d+)px/,(n,s)=>(e=fn((t=+s)*Tt))+"px"),[i,e,t]}function DE(i){i.show&&[i.font,i.labelFont].forEach(e=>{let t=Nt(e[2]*Tt,1);e[0]=e[0].replace(/[0-9.]+px/,t+"px"),e[1]=t})}function bn(i,e,t){const n={mode:St(i.mode,1)},s=n.mode;function r(M,T,P,L){let H=T.valToPct(M);return L+P*(T.dir==-1?1-H:H)}function a(M,T,P,L){let H=T.valToPct(M);return L+P*(T.dir==-1?H:1-H)}function o(M,T,P,L){return T.ori==0?r(M,T,P,L):a(M,T,P,L)}n.valToPosH=r,n.valToPosV=a;let l=!1;n.status=0;const c=n.root=pi(O1);if(i.id!=null&&(c.id=i.id),ri(c,i.class),i.title){let M=pi(H1,c);M.textContent=i.title}const u=Ai("canvas"),d=n.ctx=u.getContext("2d"),h=pi(V1,c);sr("click",h,M=>{M.target===g&&(Ot!=Sr||Gt!=wr)&&Cn.click(n,M)},!0);const f=n.under=pi(G1,h);h.appendChild(u);const g=n.over=pi(W1,h);i=fa(i);const _=+St(i.pxAlign,1),m=tm(_);(i.plugins||[]).forEach(M=>{M.opts&&(i=M.opts(n,i)||i)});const p=i.ms||.001,x=n.series=s==1?sm(i.series||[],jp,Qp,!1):TE(i.series||[null],Jp),y=n.axes=sm(i.axes||[],qp,Kp,!0),w=n.scales={},F=n.bands=i.bands||[];F.forEach(M=>{M.fill=mt(M.fill||null),M.dir=St(M.dir,-1)});const C=s==2?x[1].facets[0].scale:x[0].scale,R={axes:xg,series:wa},U=(i.drawOrder||["axes","series"]).map(M=>R[M]);function ne(M){const T=M.distr==3?P=>os(P>0?P:M.clamp(n,P,M.min,M.max,M.key)):M.distr==4?P=>fh(P,M.asinh):M.distr==100?P=>M.fwd(P):P=>P;return P=>{let L=T(P),{_min:H,_max:te}=M,de=te-H;return(L-H)/de}}function S(M){let T=w[M];if(T==null){let P=(i.scales||so)[M]||so;if(P.from!=null){S(P.from);let L=cn({},w[P.from],P,{key:M});L.valToPct=ne(L),w[M]=L}else{T=w[M]=cn({},M==C?tg:fE,P),T.key=M;let L=T.time,H=T.range,te=Ts(H);if((M!=C||s==2&&!L)&&(te&&(H[0]==null||H[1]==null)&&(H={min:H[0]==null?Fp:{mode:1,hard:H[0],soft:H[0]},max:H[1]==null?Fp:{mode:1,hard:H[1],soft:H[1]}},te=!1),!te&&oc(H))){let de=H;H=(ve,Se,Pe)=>Se==null?da:Gl(Se,Pe,de)}T.range=mt(H||(L?EE:M==C?T.distr==3?CE:T.distr==4?RE:ug:T.distr==3?dg:T.distr==4?fg:AE)),T.auto=mt(te?!1:T.auto),T.clamp=mt(T.clamp||dE),T._min=T._max=null,T.valToPct=ne(T)}}}S("x"),S("y"),s==1&&x.forEach(M=>{S(M.scale)}),y.forEach(M=>{S(M.scale)});for(let M in i.scales)S(M);const b=w[C],W=b.distr;let B,Y;b.ori==0?(ri(c,z1),B=r,Y=a):(ri(c,B1),B=a,Y=r);const J={};for(let M in w){let T=w[M];(T.min!=null||T.max!=null)&&(J[M]={min:T.min,max:T.max},T.min=T.max=null)}const K=i.tzDate||(M=>new Date(fn(M/p))),k=i.fmtDate||cd,ie=p==1?zT(K):VT(K),pe=Wp(K,Gp(p==1?OT:HT,k)),le=Xp(K,$p(WT,k)),oe=[],me=n.legend=cn({},qT,i.legend),he=n.cursor=cn({},QT,{drag:{y:s==2}},i.cursor),se=me.show,fe=he.show,xe=me.markers;me.idxs=oe,xe.width=mt(xe.width),xe.dash=mt(xe.dash),xe.stroke=mt(xe.stroke),xe.fill=mt(xe.fill);let ge,je,Ne,He=[],at=[],nt,O=!1,jt={};if(me.live){const M=x[1]?x[1].values:null;O=M!=null,nt=O?M(n,1,0):{_:0};for(let T in nt)jt[T]=id}if(se)if(ge=Ai("table",K1,c),Ne=Ai("tbody",null,ge),me.mount(n,ge),O){je=Ai("thead",null,ge,Ne);let M=Ai("tr",null,je);Ai("th",null,M);for(var ot in nt)Ai("th",yp,M).textContent=ot}else ri(ge,J1),me.live&&ri(ge,Z1);const ft={show:!0},Ke={show:!1};function Et(M,T){if(T==0&&(O||!me.live||s==2))return da;let P=[],L=Ai("tr",Q1,Ne,Ne.childNodes[T]);ri(L,M.class),M.show||ri(L,Js);let H=Ai("th",null,L);if(xe.show){let ve=pi(eT,H);if(T>0){let Se=xe.width(n,T);Se&&(ve.style.border=Se+"px "+xe.dash(n,T)+" "+xe.stroke(n,T)),ve.style.background=xe.fill(n,T)}}let te=pi(yp,H);M.label instanceof HTMLElement?te.appendChild(M.label):te.textContent=M.label,T>0&&(xe.show||(te.style.color=M.width>0?xe.stroke(n,T):xe.fill(n,T)),D("click",H,ve=>{if(he._lock)return;Tn(ve);let Se=x.indexOf(M);if((ve.ctrlKey||ve.metaKey)!=me.isolate){let Pe=x.some((Ie,Oe)=>Oe>0&&Oe!=Se&&Ie.show);x.forEach((Ie,Oe)=>{Oe>0&&Ni(Oe,Pe?Oe==Se?ft:Ke:ft,!0,an.setSeries)})}else Ni(Se,{show:!M.show},!0,an.setSeries)},!1),Yn&&D(bp,H,ve=>{he._lock||(Tn(ve),Ni(x.indexOf(M),Tr,!0,an.setSeries))},!1));for(var de in nt){let ve=Ai("td",tT,L);ve.textContent="--",P.push(ve)}return[L,P]}const Ye=new Map;function D(M,T,P,L=!0){const H=Ye.get(T)||{},te=he.bind[M](n,T,P,L);te&&(sr(M,T,H[M]=te),Ye.set(T,H))}function E(M,T,P){const L=Ye.get(T)||{};for(let H in L)(M==null||H==M)&&(yu(H,T,L[H]),delete L[H]);M==null&&Ye.delete(T)}let ee=0,ce=0,re=0,q=0,be=0,ye=0,De=be,lt=ye,_e=re,Le=q,Ve=0,We=0,Ee=0,et=0;n.bbox={};let tt=!1,wt=!1,$=!1,Ae=!1,ae=!1,ue=!1;function Re(M,T,P){(P||M!=n.width||T!=n.height)&&Fe(M,T),_r(!1),$=!0,wt=!0,xr()}function Fe(M,T){n.width=ee=re=M,n.height=ce=q=T,be=ye=0,xt(),Fn();let P=n.bbox;Ve=P.left=js(be*Tt,.5),We=P.top=js(ye*Tt,.5),Ee=P.width=js(re*Tt,.5),et=P.height=js(q*Tt,.5)}const gt=3;function Yt(){let M=!1,T=0;for(;!M;){T++;let P=vg(T),L=_g(T);M=T==gt||P&&L,M||(Fe(n.width,n.height),wt=!0)}}function Ln({width:M,height:T}){Re(M,T)}n.setSize=Ln;function xt(){let M=!1,T=!1,P=!1,L=!1;y.forEach((H,te)=>{if(H.show&&H._show){let{side:de,_size:ve}=H,Se=de%2,Pe=H.label!=null?H.labelSize:0,Ie=ve+Pe;Ie>0&&(Se?(re-=Ie,de==3?(be+=Ie,L=!0):P=!0):(q-=Ie,de==0?(ye+=Ie,M=!0):T=!0))}}),ji[0]=M,ji[1]=P,ji[2]=T,ji[3]=L,re-=X[1]+X[3],be+=X[3],q-=X[2]+X[0],ye+=X[0]}function Fn(){let M=be+re,T=ye+q,P=be,L=ye;function H(te,de){switch(te){case 1:return M+=de,M-de;case 2:return T+=de,T-de;case 3:return P-=de,P+de;case 0:return L-=de,L+de}}y.forEach((te,de)=>{if(te.show&&te._show){let ve=te.side;te._pos=H(ve,te._size),te.label!=null&&(te._lpos=H(ve,te.labelSize))}})}if(he.dataIdx==null){let M=he.hover,T=M.skip=new Set(M.skip??[]);T.add(void 0);let P=M.prox=mt(M.prox),L=M.bias??(M.bias=0);he.dataIdx=(H,te,de,ve)=>{if(te==0)return de;let Se=de,Pe=P(H,te,de,ve)??Ut,Ie=Pe>=0&&Pe<Ut,Oe=b.ori==0?re:q,st=he.left,bt=e[0],Mt=e[te];if(T.has(Mt[de])){Se=null;let pt=null,Qe=null,qe;if(L==0||L==-1)for(qe=de;pt==null&&qe-- >0;)T.has(Mt[qe])||(pt=qe);if(L==0||L==1)for(qe=de;Qe==null&&qe++<Mt.length;)T.has(Mt[qe])||(Qe=qe);if(pt!=null||Qe!=null)if(Ie){let Bt=pt==null?-1/0:B(bt[pt],b,Oe,0),Kt=Qe==null?1/0:B(bt[Qe],b,Oe,0),Mn=st-Bt,Lt=Kt-st;Mn<=Lt?Mn<=Pe&&(Se=pt):Lt<=Pe&&(Se=Qe)}else Se=Qe==null?pt:pt==null?Qe:de-pt<=Qe-de?pt:Qe}else Ie&&pn(st-B(bt[de],b,Oe,0))>Pe&&(Se=null);return Se}}const Tn=M=>{he.event=M};he.idxs=oe,he._lock=!1;let un=he.points;un.show=mt(un.show),un.size=mt(un.size),un.stroke=mt(un.stroke),un.width=mt(un.width),un.fill=mt(un.fill);const Qn=n.focus=cn({},i.focus||{alpha:.3},he.focus),Yn=Qn.prox>=0,Ii=Yn&&un.one;let kn=[],qi=[],yi=[];function Sa(M,T){let P=un.show(n,T);if(P instanceof HTMLElement)return ri(P,Y1),ri(P,M.class),Bi(P,-10,-10,re,q),g.insertBefore(P,kn[T]),P}function Ns(M,T){if(s==1||T>0){let P=s==1&&w[M.scale].time,L=M.value;M.value=P?zp(L)?Xp(K,$p(L,k)):L||le:L||cE,M.label=M.label||(P?tE:eE)}if(Ii||T>0){M.width=M.width==null?1:M.width,M.paths=M.paths||wE||fT,M.fillTo=mt(M.fillTo||pE),M.pxAlign=+St(M.pxAlign,_),M.pxRound=tm(M.pxAlign),M.stroke=mt(M.stroke||null),M.fill=mt(M.fill||null),M._stroke=M._fill=M._paths=M._focus=null;let P=hE(Xn(1,M.width),1),L=M.points=cn({},{size:P,width:Xn(1,P*.2),stroke:M.stroke,space:P*2,paths:bE,_stroke:null,_fill:null},M.points);L.show=mt(L.show),L.filter=mt(L.filter),L.fill=mt(L.fill),L.stroke=mt(L.stroke),L.paths=mt(L.paths),L.pxAlign=M.pxAlign}if(se){let P=Et(M,T);He.splice(T,0,P[0]),at.splice(T,0,P[1]),me.values.push(null)}if(fe){oe.splice(T,0,null);let P=null;Ii?T==0&&(P=Sa(M,T)):T>0&&(P=Sa(M,T)),kn.splice(T,0,P),qi.splice(T,0,0),yi.splice(T,0,0)}yn("addSeries",T)}function yo(M,T){T=T??x.length,M=s==1?Eu(M,T,jp,Qp):Eu(M,T,{},Jp),x.splice(T,0,M),Ns(x[T],T)}n.addSeries=yo;function Mo(M){if(x.splice(M,1),se){me.values.splice(M,1),at.splice(M,1);let T=He.splice(M,1)[0];E(null,T.firstChild),T.remove()}fe&&(oe.splice(M,1),kn.splice(M,1)[0].remove(),qi.splice(M,1),yi.splice(M,1)),yn("delSeries",M)}n.delSeries=Mo;const ji=[!1,!1,!1,!1];function dc(M,T){if(M._show=M.show,M.show){let P=M.side%2,L=w[M.scale];L==null&&(M.scale=P?x[1].scale:C,L=w[M.scale]);let H=L.time;M.size=mt(M.size),M.space=mt(M.space),M.rotate=mt(M.rotate),Ts(M.incrs)&&M.incrs.forEach(de=>{!Is.has(de)&&Is.set(de,N0(de))}),M.incrs=mt(M.incrs||(L.distr==2?UT:H?p==1?kT:BT:Ys)),M.splits=mt(M.splits||(H&&L.distr==1?ie:L.distr==3?Su:L.distr==4?sE:iE)),M.stroke=mt(M.stroke),M.grid.stroke=mt(M.grid.stroke),M.ticks.stroke=mt(M.ticks.stroke),M.border.stroke=mt(M.border.stroke);let te=M.values;M.values=Ts(te)&&!Ts(te[0])?mt(te):H?Ts(te)?Wp(K,Gp(te,k)):zp(te)?GT(K,te):te||pe:te||nE,M.filter=mt(M.filter||(L.distr>=3&&L.log==10?oE:L.distr==3&&L.log==2?lE:I0)),M.font=rm(M.font),M.labelFont=rm(M.labelFont),M._size=M.size(n,null,T,0),M._space=M._rotate=M._incrs=M._found=M._splits=M._values=null,M._size>0&&(ji[T]=!0,M._el=pi($1,h))}}function ks(M,T,P,L){let[H,te,de,ve]=P,Se=T%2,Pe=0;return Se==0&&(ve||te)&&(Pe=T==0&&!H||T==2&&!de?fn(qp.size/3):0),Se==1&&(H||de)&&(Pe=T==1&&!te||T==3&&!ve?fn(Kp.size/2):0),Pe}const A=n.padding=(i.padding||[ks,ks,ks,ks]).map(M=>mt(St(M,ks))),X=n._padding=A.map((M,T)=>M(n,T,ji,0));let Z,Q=null,G=null;const Me=s==1?x[0].idxs:null;let Te=null,ke=!1;function Be(M,T){if(e=M??[],n.data=n._data=e,s==2){Z=0;for(let P=1;P<x.length;P++)Z+=e[P][0].length}else{e.length==0&&(n.data=n._data=e=[[]]),Te=e[0],Z=Te.length;let P=e;if(W==2){P=e.slice();let L=P[0]=Array(Z);for(let H=0;H<Z;H++)L[H]=H}n._data=e=P}if(_r(!0),yn("setData"),W==2&&($=!0),T!==!1){let P=b;P.auto(n,ke)?Ze():ds(C,P.min,P.max),Ae=Ae||he.left>=0,ue=!0,xr()}}n.setData=Be;function Ze(){ke=!0;let M,T;s==1&&(Z>0?(Q=Me[0]=0,G=Me[1]=Z-1,M=e[0][Q],T=e[0][G],W==2?(M=Q,T=G):M==T&&(W==3?[M,T]=rc(M,M,b.log,!1):W==4?[M,T]=rd(M,M,b.log,!1):b.time?T=M+fn(86400/p):[M,T]=Gl(M,T,ad,!0))):(Q=Me[0]=M=null,G=Me[1]=T=null)),ds(C,M,T)}let Je,ze,yt,Pt,kt,En,vt,Ge,tn,it;function Kn(M,T,P,L,H,te){M??(M=Sp),P??(P=ld),L??(L="butt"),H??(H=Sp),te??(te="round"),M!=Je&&(d.strokeStyle=Je=M),H!=ze&&(d.fillStyle=ze=H),T!=yt&&(d.lineWidth=yt=T),te!=kt&&(d.lineJoin=kt=te),L!=En&&(d.lineCap=En=L),P!=Pt&&d.setLineDash(Pt=P)}function Yi(M,T,P,L){T!=ze&&(d.fillStyle=ze=T),M!=vt&&(d.font=vt=M),P!=Ge&&(d.textAlign=Ge=P),L!=tn&&(d.textBaseline=tn=L)}function An(M,T,P,L,H=0){if(L.length>0&&M.auto(n,ke)&&(T==null||T.min==null)){let te=St(Q,0),de=St(G,L.length-1),ve=P.min==null?oT(L,te,de,H,M.distr==3):[P.min,P.max];M.min=Li(M.min,P.min=ve[0]),M.max=Xn(M.max,P.max=ve[1])}}const gr={min:null,max:null};function Xt(){for(let L in w){let H=w[L];J[L]==null&&(H.min==null||J[C]!=null&&H.auto(n,ke))&&(J[L]=gr)}for(let L in w){let H=w[L];J[L]==null&&H.from!=null&&J[H.from]!=null&&(J[L]=gr)}J[C]!=null&&_r(!0);let M={};for(let L in J){let H=J[L];if(H!=null){let te=M[L]=fa(w[L],gT);if(H.min!=null)cn(te,H);else if(L!=C||s==2)if(Z==0&&te.from==null){let de=te.range(n,null,null,L);te.min=de[0],te.max=de[1]}else te.min=Ut,te.max=-Ut}}if(Z>0){x.forEach((L,H)=>{if(s==1){let te=L.scale,de=J[te];if(de==null)return;let ve=M[te];if(H==0){let Se=ve.range(n,ve.min,ve.max,te);ve.min=Se[0],ve.max=Se[1],Q=Ri(ve.min,e[0]),G=Ri(ve.max,e[0]),G-Q>1&&(e[0][Q]<ve.min&&Q++,e[0][G]>ve.max&&G--),L.min=Te[Q],L.max=Te[G]}else L.show&&L.auto&&An(ve,de,L,e[H],L.sorted);L.idxs[0]=Q,L.idxs[1]=G}else if(H>0&&L.show&&L.auto){let[te,de]=L.facets,ve=te.scale,Se=de.scale,[Pe,Ie]=e[H],Oe=M[ve],st=M[Se];Oe!=null&&An(Oe,J[ve],te,Pe,te.sorted),st!=null&&An(st,J[Se],de,Ie,de.sorted),L.min=de.min,L.max=de.max}});for(let L in M){let H=M[L],te=J[L];if(H.from==null&&(te==null||te.min==null)){let de=H.range(n,H.min==Ut?null:H.min,H.max==-Ut?null:H.max,L);H.min=de[0],H.max=de[1]}}}for(let L in M){let H=M[L];if(H.from!=null){let te=M[H.from];if(te.min==null)H.min=H.max=null;else{let de=H.range(n,te.min,te.max,L);H.min=de[0],H.max=de[1]}}}let T={},P=!1;for(let L in M){let H=M[L],te=w[L];if(te.min!=H.min||te.max!=H.max){te.min=H.min,te.max=H.max;let de=te.distr;te._min=de==3?os(te.min):de==4?fh(te.min,te.asinh):de==100?te.fwd(te.min):te.min,te._max=de==3?os(te.max):de==4?fh(te.max,te.asinh):de==100?te.fwd(te.max):te.max,T[L]=P=!0}}if(P){x.forEach((L,H)=>{s==2?H>0&&T.y&&(L._paths=null):T[L.scale]&&(L._paths=null)});for(let L in T)$=!0,yn("setScale",L);fe&&he.left>=0&&(Ae=ue=!0)}for(let L in J)J[L]=null}function Ui(M){let T=Mu(Q-1,0,Z-1),P=Mu(G+1,0,Z-1);for(;M[T]==null&&T>0;)T--;for(;M[P]==null&&P<Z-1;)P++;return[T,P]}function wa(){if(Z>0){let M=x.some(T=>T._focus)&&it!=Qn.alpha;M&&(d.globalAlpha=it=Qn.alpha),x.forEach((T,P)=>{if(P>0&&T.show&&(On(P,!1),On(P,!0),T._paths==null)){let L=it;it!=T.alpha&&(d.globalAlpha=it=T.alpha);let H=s==2?[0,e[P][0].length-1]:Ui(e[P]);T._paths=T.paths(n,P,H[0],H[1]),it!=L&&(d.globalAlpha=it=L)}}),x.forEach((T,P)=>{if(P>0&&T.show){let L=it;it!=T.alpha&&(d.globalAlpha=it=T.alpha),T._paths!=null&&vr(P,!1);{let H=T._paths!=null?T._paths.gaps:null,te=T.points.show(n,P,Q,G,H),de=T.points.filter(n,P,te,H);(te||de)&&(T.points._paths=T.points.paths(n,P,Q,G,de),vr(P,!0))}it!=L&&(d.globalAlpha=it=L),yn("drawSeries",P)}}),M&&(d.globalAlpha=it=1)}}function On(M,T){let P=T?x[M].points:x[M];P._stroke=P.stroke(n,M),P._fill=P.fill(n,M)}function vr(M,T){let P=T?x[M].points:x[M],{stroke:L,fill:H,clip:te,flags:de,_stroke:ve=P._stroke,_fill:Se=P._fill,_width:Pe=P.width}=P._paths;Pe=Nt(Pe*Tt,3);let Ie=null,Oe=Pe%2/2;T&&Se==null&&(Se=Pe>0?"#fff":ve);let st=P.pxAlign==1&&Oe>0;if(st&&d.translate(Oe,Oe),!T){let bt=Ve-Pe/2,Mt=We-Pe/2,pt=Ee+Pe,Qe=et+Pe;Ie=new Path2D,Ie.rect(bt,Mt,pt,Qe)}T?pc(ve,Pe,P.dash,P.cap,Se,L,H,de,te):fc(M,ve,Pe,P.dash,P.cap,Se,L,H,de,Ie,te),st&&d.translate(-Oe,-Oe)}function fc(M,T,P,L,H,te,de,ve,Se,Pe,Ie){let Oe=!1;Se!=0&&F.forEach((st,bt)=>{if(st.series[0]==M){let Mt=x[st.series[1]],pt=e[st.series[1]],Qe=(Mt._paths||so).band;Ts(Qe)&&(Qe=st.dir==1?Qe[0]:Qe[1]);let qe,Bt=null;Mt.show&&Qe&&cT(pt,Q,G)?(Bt=st.fill(n,bt)||te,qe=Mt._paths.clip):Qe=null,pc(T,P,L,H,Bt,de,ve,Se,Pe,Ie,qe,Qe),Oe=!0}}),Oe||pc(T,P,L,H,te,de,ve,Se,Pe,Ie)}const ba=pa|bu;function pc(M,T,P,L,H,te,de,ve,Se,Pe,Ie,Oe){Kn(M,T,P,L,H),(Se||Pe||Oe)&&(d.save(),Se&&d.clip(Se),Pe&&d.clip(Pe)),Oe?(ve&ba)==ba?(d.clip(Oe),Ie&&d.clip(Ie),wo(H,de),So(M,te,T)):ve&bu?(wo(H,de),d.clip(Oe),So(M,te,T)):ve&pa&&(d.save(),d.clip(Oe),Ie&&d.clip(Ie),wo(H,de),d.restore(),So(M,te,T)):(wo(H,de),So(M,te,T)),(Se||Pe||Oe)&&d.restore()}function So(M,T,P){P>0&&(T instanceof Map?T.forEach((L,H)=>{d.strokeStyle=Je=H,d.stroke(L)}):T!=null&&M&&d.stroke(T))}function wo(M,T){T instanceof Map?T.forEach((P,L)=>{d.fillStyle=ze=L,d.fill(P)}):T!=null&&M&&d.fill(T)}function gg(M,T,P,L){let H=y[M],te;if(L<=0)te=[0,0];else{let de=H._space=H.space(n,M,T,P,L),ve=H._incrs=H.incrs(n,M,T,P,L,de);te=PE(T,P,ve,L,de)}return H._found=te}function mc(M,T,P,L,H,te,de,ve,Se,Pe){let Ie=de%2/2;_==1&&d.translate(Ie,Ie),Kn(ve,de,Se,Pe,ve),d.beginPath();let Oe,st,bt,Mt,pt=H+(L==0||L==3?-te:te);P==0?(st=H,Mt=pt):(Oe=H,bt=pt);for(let Qe=0;Qe<M.length;Qe++)T[Qe]!=null&&(P==0?Oe=bt=M[Qe]:st=Mt=M[Qe],d.moveTo(Oe,st),d.lineTo(bt,Mt));d.stroke(),_==1&&d.translate(-Ie,-Ie)}function vg(M){let T=!0;return y.forEach((P,L)=>{if(!P.show)return;let H=w[P.scale];if(H.min==null){P._show&&(T=!1,P._show=!1,_r(!1));return}else P._show||(T=!1,P._show=!0,_r(!1));let te=P.side,de=te%2,{min:ve,max:Se}=H,[Pe,Ie]=gg(L,ve,Se,de==0?re:q);if(Ie==0)return;let Oe=H.distr==2,st=P._splits=P.splits(n,L,ve,Se,Pe,Ie,Oe),bt=H.distr==2?st.map(qe=>Te[qe]):st,Mt=H.distr==2?Te[st[1]]-Te[st[0]]:Pe,pt=P._values=P.values(n,P.filter(n,bt,L,Ie,Mt),L,Ie,Mt);P._rotate=te==2?P.rotate(n,pt,L,Ie):0;let Qe=P._size;P._size=gi(P.size(n,pt,L,M)),Qe!=null&&P._size!=Qe&&(T=!1)}),T}function _g(M){let T=!0;return A.forEach((P,L)=>{let H=P(n,L,ji,M);H!=X[L]&&(T=!1),X[L]=H}),T}function xg(){for(let M=0;M<y.length;M++){let T=y[M];if(!T.show||!T._show)continue;let P=T.side,L=P%2,H,te,de=T.stroke(n,M),ve=P==0||P==3?-1:1,[Se,Pe]=T._found;if(T.label!=null){let Bn=T.labelGap*ve,ni=fn((T._lpos+Bn)*Tt);Yi(T.labelFont[0],de,"center",P==2?za:Mp),d.save(),L==1?(H=te=0,d.translate(ni,fn(We+et/2)),d.rotate((P==3?-bl:bl)/2)):(H=fn(Ve+Ee/2),te=ni);let Bs=L0(T.label)?T.label(n,M,Se,Pe):T.label;d.fillText(Bs,H,te),d.restore()}if(Pe==0)continue;let Ie=w[T.scale],Oe=L==0?Ee:et,st=L==0?Ve:We,bt=T._splits,Mt=Ie.distr==2?bt.map(Bn=>Te[Bn]):bt,pt=Ie.distr==2?Te[bt[1]]-Te[bt[0]]:Se,Qe=T.ticks,qe=T.border,Bt=Qe.show?Qe.size:0,Kt=fn(Bt*Tt),Mn=fn((T.alignTo==2?T._size-Bt-T.gap:T.gap)*Tt),Lt=T._rotate*-bl/180,Zt=m(T._pos*Tt),ei=(Kt+Mn)*ve,zn=Zt+ei;te=L==0?zn:0,H=L==1?zn:0;let hi=T.font[0],Mi=T.align==1?Gr:T.align==2?hh:Lt>0?Gr:Lt<0?hh:L==0?"center":P==3?hh:Gr,Oi=Lt||L==1?"middle":P==2?za:Mp;Yi(hi,de,Mi,Oi);let ti=T.font[1]*T.lineGap,ui=bt.map(Bn=>m(o(Bn,Ie,Oe,st))),Si=T._values;for(let Bn=0;Bn<Si.length;Bn++){let ni=Si[Bn];if(ni!=null){L==0?H=ui[Bn]:te=ui[Bn],ni=""+ni;let Bs=ni.indexOf(`
`)==-1?[ni]:ni.split(/\n/gm);for(let Hn=0;Hn<Bs.length;Hn++){let Id=Bs[Hn];Lt?(d.save(),d.translate(H,te+Hn*ti),d.rotate(Lt),d.fillText(Id,0,0),d.restore()):d.fillText(Id,H,te+Hn*ti)}}}Qe.show&&mc(ui,Qe.filter(n,Mt,M,Pe,pt),L,P,Zt,Kt,Nt(Qe.width*Tt,3),Qe.stroke(n,M),Qe.dash,Qe.cap);let zi=T.grid;zi.show&&mc(ui,zi.filter(n,Mt,M,Pe,pt),L,L==0?2:1,L==0?We:Ve,L==0?et:Ee,Nt(zi.width*Tt,3),zi.stroke(n,M),zi.dash,zi.cap),qe.show&&mc([Zt],[1],L==0?1:0,L==0?1:2,L==1?We:Ve,L==1?et:Ee,Nt(qe.width*Tt,3),qe.stroke(n,M),qe.dash,qe.cap)}yn("drawAxes")}function _r(M){x.forEach((T,P)=>{P>0&&(T._paths=null,M&&(s==1?(T.min=null,T.max=null):T.facets.forEach(L=>{L.min=null,L.max=null})))})}let bo=!1,gc=!1,Ta=[];function yg(){gc=!1;for(let M=0;M<Ta.length;M++)yn(...Ta[M]);Ta.length=0}function xr(){bo||(wT(gd),bo=!0)}function Mg(M,T=!1){bo=!0,gc=T,M(n),gd(),T&&Ta.length>0&&queueMicrotask(yg)}n.batch=Mg;function gd(){if(tt&&(Xt(),tt=!1),$&&(Yt(),$=!1),wt){if(Ht(f,Gr,be),Ht(f,za,ye),Ht(f,Wa,re),Ht(f,$a,q),Ht(g,Gr,be),Ht(g,za,ye),Ht(g,Wa,re),Ht(g,$a,q),Ht(h,Wa,ee),Ht(h,$a,ce),u.width=fn(ee*Tt),u.height=fn(ce*Tt),y.forEach(({_el:M,_show:T,_size:P,_pos:L,side:H})=>{if(M!=null)if(T){let te=H===3||H===0?P:0,de=H%2==1;Ht(M,de?"left":"top",L-te),Ht(M,de?"width":"height",P),Ht(M,de?"top":"left",de?ye:be),Ht(M,de?"height":"width",de?q:re),xu(M,Js)}else ri(M,Js)}),Je=ze=yt=kt=En=vt=Ge=tn=Pt=null,it=1,Ca(!0),be!=De||ye!=lt||re!=_e||q!=Le){_r(!1);let M=re/_e,T=q/Le;if(fe&&!Ae&&he.left>=0){he.left*=M,he.top*=T,yr&&Bi(yr,fn(he.left),0,re,q),Mr&&Bi(Mr,0,fn(he.top),re,q);for(let P=0;P<kn.length;P++){let L=kn[P];L!=null&&(qi[P]*=M,yi[P]*=T,Bi(L,gi(qi[P]),gi(yi[P]),re,q))}}if(zt.show&&!ae&&zt.left>=0&&zt.width>0){zt.left*=M,zt.width*=M,zt.top*=T,zt.height*=T;for(let P in Sc)Ht(br,P,zt[P])}De=be,lt=ye,_e=re,Le=q}yn("setSize"),wt=!1}ee>0&&ce>0&&(d.clearRect(0,0,u.width,u.height),yn("drawClear"),U.forEach(M=>M()),yn("draw")),zt.show&&ae&&(To(zt),ae=!1),fe&&Ae&&(zs(null,!0,!1),Ae=!1),me.show&&me.live&&ue&&(yc(),ue=!1),l||(l=!0,n.status=1,yn("ready")),ke=!1,bo=!1}n.redraw=(M,T)=>{$=T||!1,M!==!1?ds(C,b.min,b.max):xr()};function vc(M,T){let P=w[M];if(P.from==null){if(Z==0){let L=P.range(n,T.min,T.max,M);T.min=L[0],T.max=L[1]}if(T.min>T.max){let L=T.min;T.min=T.max,T.max=L}if(Z>1&&T.min!=null&&T.max!=null&&T.max-T.min<1e-16)return;M==C&&P.distr==2&&Z>0&&(T.min=Ri(T.min,e[0]),T.max=Ri(T.max,e[0]),T.min==T.max&&T.max++),J[M]=T,tt=!0,xr()}}n.setScale=vc;let _c,xc,yr,Mr,vd,_d,Sr,wr,xd,yd,Ot,Gt,us=!1;const Cn=he.drag;let _n=Cn.x,xn=Cn.y;fe&&(he.x&&(_c=pi(q1,g)),he.y&&(xc=pi(j1,g)),b.ori==0?(yr=_c,Mr=xc):(yr=xc,Mr=_c),Ot=he.left,Gt=he.top);const zt=n.select=cn({show:!0,over:!0,left:0,width:0,top:0,height:0},i.select),br=zt.show?pi(X1,zt.over?g:f):null;function To(M,T){if(zt.show){for(let P in M)zt[P]=M[P],P in Sc&&Ht(br,P,M[P]);T!==!1&&yn("setSelect")}}n.setSelect=To;function Sg(M){if(x[M].show)se&&xu(He[M],Js);else if(se&&ri(He[M],Js),fe){let P=Ii?kn[0]:kn[M];P!=null&&Bi(P,-10,-10,re,q)}}function ds(M,T,P){vc(M,{min:T,max:P})}function Ni(M,T,P,L){T.focus!=null&&Ag(M),T.show!=null&&x.forEach((H,te)=>{te>0&&(M==te||M==null)&&(H.show=T.show,Sg(te),s==2?(ds(H.facets[0].scale,null,null),ds(H.facets[1].scale,null,null)):ds(H.scale,null,null),xr())}),P!==!1&&yn("setSeries",M,T),L&&Ra("setSeries",n,M,T)}n.setSeries=Ni;function wg(M,T){cn(F[M],T)}function bg(M,T){M.fill=mt(M.fill||null),M.dir=St(M.dir,-1),T=T??F.length,F.splice(T,0,M)}function Tg(M){M==null?F.length=0:F.splice(M,1)}n.addBand=bg,n.setBand=wg,n.delBand=Tg;function Eg(M,T){x[M].alpha=T,fe&&kn[M]!=null&&(kn[M].style.opacity=T),se&&He[M]&&(He[M].style.opacity=T)}let Ki,fs,Os;const Tr={focus:!0};function Ag(M){if(M!=Os){let T=M==null,P=Qn.alpha!=1;x.forEach((L,H)=>{if(s==1||H>0){let te=T||H==0||H==M;L._focus=T?null:te,P&&Eg(H,te?1:Qn.alpha)}}),Os=M,P&&xr()}}se&&Yn&&D(Tp,ge,M=>{he._lock||(Tn(M),Os!=null&&Ni(null,Tr,!0,an.setSeries))});function ki(M,T,P){let L=w[T];P&&(M=M/Tt-(L.ori==1?ye:be));let H=re;L.ori==1&&(H=q,M=H-M),L.dir==-1&&(M=H-M);let te=L._min,de=L._max,ve=M/H,Se=te+(de-te)*ve,Pe=L.distr;return Pe==3?ua(10,Se):Pe==4?uT(Se,L.asinh):Pe==100?L.bwd(Se):Se}function Cg(M,T){let P=ki(M,C,T);return Ri(P,e[0],Q,G)}n.valToIdx=M=>Ri(M,e[0]),n.posToIdx=Cg,n.posToVal=ki,n.valToPos=(M,T,P)=>w[T].ori==0?r(M,w[T],P?Ee:re,P?Ve:0):a(M,w[T],P?et:q,P?We:0),n.setCursor=(M,T,P)=>{Ot=M.left,Gt=M.top,zs(null,T,P)};function Md(M,T){Ht(br,Gr,zt.left=M),Ht(br,Wa,zt.width=T)}function Sd(M,T){Ht(br,za,zt.top=M),Ht(br,$a,zt.height=T)}let Ea=b.ori==0?Md:Sd,Aa=b.ori==1?Md:Sd;function Rg(){if(se&&me.live)for(let M=s==2?1:0;M<x.length;M++){if(M==0&&O)continue;let T=me.values[M],P=0;for(let L in T)at[M][P++].firstChild.nodeValue=T[L]}}function yc(M,T){if(M!=null&&(M.idxs?M.idxs.forEach((P,L)=>{oe[L]=P}):mT(M.idx)||oe.fill(M.idx),me.idx=oe[0]),se&&me.live){for(let P=0;P<x.length;P++)(P>0||s==1&&!O)&&Pg(P,oe[P]);Rg()}ue=!1,T!==!1&&yn("setLegend")}n.setLegend=yc;function Pg(M,T){let P=x[M],L=M==0&&W==2?Te:e[M],H;O?H=P.values(n,M,T)??jt:(H=P.value(n,T==null?null:L[T],M,T),H=H==null?jt:{_:H}),me.values[M]=H}function zs(M,T,P){xd=Ot,yd=Gt,[Ot,Gt]=he.move(n,Ot,Gt),he.left=Ot,he.top=Gt,fe&&(yr&&Bi(yr,fn(Ot),0,re,q),Mr&&Bi(Mr,0,fn(Gt),re,q));let L,H=Q>G;Ki=Ut,fs=null;let te=b.ori==0?re:q,de=b.ori==1?re:q;if(Ot<0||Z==0||H){L=he.idx=null;for(let ve=0;ve<x.length;ve++){let Se=kn[ve];Se!=null&&Bi(Se,-10,-10,re,q)}Yn&&Ni(null,Tr,!0,M==null&&an.setSeries),me.live&&(oe.fill(L),ue=!0)}else{let ve,Se,Pe;s==1&&(ve=b.ori==0?Ot:Gt,Se=ki(ve,C),L=he.idx=Ri(Se,e[0],Q,G),Pe=B(e[0][L],b,te,0));let Ie=-10,Oe=-10,st=0,bt=0,Mt=!0,pt="",Qe="";for(let qe=s==2?1:0;qe<x.length;qe++){let Bt=x[qe],Kt=oe[qe],Mn=Kt==null?null:s==1?e[qe][Kt]:e[qe][1][Kt],Lt=he.dataIdx(n,qe,L,Se),Zt=Lt==null?null:s==1?e[qe][Lt]:e[qe][1][Lt];if(ue=ue||Zt!=Mn||Lt!=Kt,oe[qe]=Lt,qe>0&&Bt.show){let ei=Lt==null?-10:Lt==L?Pe:B(s==1?e[0][Lt]:e[qe][0][Lt],b,te,0),zn=Zt==null?-10:Y(Zt,s==1?w[Bt.scale]:w[Bt.facets[1].scale],de,0);if(Yn&&Zt!=null){let hi=b.ori==1?Ot:Gt,Mi=pn(Qn.dist(n,qe,Lt,zn,hi));if(Mi<Ki){let Oi=Qn.bias;if(Oi!=0){let ti=ki(hi,Bt.scale),ui=Zt>=0?1:-1,Si=ti>=0?1:-1;Si==ui&&(Si==1?Oi==1?Zt>=ti:Zt<=ti:Oi==1?Zt<=ti:Zt>=ti)&&(Ki=Mi,fs=qe)}else Ki=Mi,fs=qe}}if(ue||Ii){let hi,Mi;b.ori==0?(hi=ei,Mi=zn):(hi=zn,Mi=ei);let Oi,ti,ui,Si,zi,Bn,ni=!0,Bs=un.bbox;if(Bs!=null){ni=!1;let Hn=Bs(n,qe);ui=Hn.left,Si=Hn.top,Oi=Hn.width,ti=Hn.height}else ui=hi,Si=Mi,Oi=ti=un.size(n,qe);if(Bn=un.fill(n,qe),zi=un.stroke(n,qe),Ii)qe==fs&&Ki<=Qn.prox&&(Ie=ui,Oe=Si,st=Oi,bt=ti,Mt=ni,pt=Bn,Qe=zi);else{let Hn=kn[qe];Hn!=null&&(qi[qe]=ui,yi[qe]=Si,Lp(Hn,Oi,ti,ni),Pp(Hn,Bn,zi),Bi(Hn,gi(ui),gi(Si),re,q))}}}}if(Ii){let qe=Qn.prox,Bt=Os==null?Ki<=qe:Ki>qe||fs!=Os;if(ue||Bt){let Kt=kn[0];Kt!=null&&(qi[0]=Ie,yi[0]=Oe,Lp(Kt,st,bt,Mt),Pp(Kt,pt,Qe),Bi(Kt,gi(Ie),gi(Oe),re,q))}}}if(zt.show&&us)if(M!=null){let[ve,Se]=an.scales,[Pe,Ie]=an.match,[Oe,st]=M.cursor.sync.scales,bt=M.cursor.drag;if(_n=bt._x,xn=bt._y,_n||xn){let{left:Mt,top:pt,width:Qe,height:qe}=M.select,Bt=M.scales[Oe].ori,Kt=M.posToVal,Mn,Lt,Zt,ei,zn,hi=ve!=null&&Pe(ve,Oe),Mi=Se!=null&&Ie(Se,st);hi&&_n?(Bt==0?(Mn=Mt,Lt=Qe):(Mn=pt,Lt=qe),Zt=w[ve],ei=B(Kt(Mn,Oe),Zt,te,0),zn=B(Kt(Mn+Lt,Oe),Zt,te,0),Ea(Li(ei,zn),pn(zn-ei))):Ea(0,te),Mi&&xn?(Bt==1?(Mn=Mt,Lt=Qe):(Mn=pt,Lt=qe),Zt=w[Se],ei=Y(Kt(Mn,st),Zt,de,0),zn=Y(Kt(Mn+Lt,st),Zt,de,0),Aa(Li(ei,zn),pn(zn-ei))):Aa(0,de)}else wc()}else{let ve=pn(xd-vd),Se=pn(yd-_d);if(b.ori==1){let st=ve;ve=Se,Se=st}_n=Cn.x&&ve>=Cn.dist,xn=Cn.y&&Se>=Cn.dist;let Pe=Cn.uni;Pe!=null?_n&&xn&&(_n=ve>=Pe,xn=Se>=Pe,!_n&&!xn&&(Se>ve?xn=!0:_n=!0)):Cn.x&&Cn.y&&(_n||xn)&&(_n=xn=!0);let Ie,Oe;_n&&(b.ori==0?(Ie=Sr,Oe=Ot):(Ie=wr,Oe=Gt),Ea(Li(Ie,Oe),pn(Oe-Ie)),xn||Aa(0,de)),xn&&(b.ori==1?(Ie=Sr,Oe=Ot):(Ie=wr,Oe=Gt),Aa(Li(Ie,Oe),pn(Oe-Ie)),_n||Ea(0,te)),!_n&&!xn&&(Ea(0,0),Aa(0,0))}if(Cn._x=_n,Cn._y=xn,M==null){if(P){if(Fd!=null){let[ve,Se]=an.scales;an.values[0]=ve!=null?ki(b.ori==0?Ot:Gt,ve):null,an.values[1]=Se!=null?ki(b.ori==1?Ot:Gt,Se):null}Ra(uh,n,Ot,Gt,re,q,L)}if(Yn){let ve=P&&an.setSeries,Se=Qn.prox;Os==null?Ki<=Se&&Ni(fs,Tr,!0,ve):Ki>Se?Ni(null,Tr,!0,ve):fs!=Os&&Ni(fs,Tr,!0,ve)}}ue&&(me.idx=L,yc()),T!==!1&&yn("setCursor")}let ps=null;Object.defineProperty(n,"rect",{get(){return ps==null&&Ca(!1),ps}});function Ca(M=!1){M?ps=null:(ps=g.getBoundingClientRect(),yn("syncRect",ps))}function wd(M,T,P,L,H,te,de){he._lock||us&&M!=null&&M.movementX==0&&M.movementY==0||(Mc(M,T,P,L,H,te,de,!1,M!=null),M!=null?zs(null,!0,!0):zs(T,!0,!1))}function Mc(M,T,P,L,H,te,de,ve,Se){if(ps==null&&Ca(!1),Tn(M),M!=null)P=M.clientX-ps.left,L=M.clientY-ps.top;else{if(P<0||L<0){Ot=-10,Gt=-10;return}let[Pe,Ie]=an.scales,Oe=T.cursor.sync,[st,bt]=Oe.values,[Mt,pt]=Oe.scales,[Qe,qe]=an.match,Bt=T.axes[0].side%2==1,Kt=b.ori==0?re:q,Mn=b.ori==1?re:q,Lt=Bt?te:H,Zt=Bt?H:te,ei=Bt?L:P,zn=Bt?P:L;if(Mt!=null?P=Qe(Pe,Mt)?o(st,w[Pe],Kt,0):-10:P=Kt*(ei/Lt),pt!=null?L=qe(Ie,pt)?o(bt,w[Ie],Mn,0):-10:L=Mn*(zn/Zt),b.ori==1){let hi=P;P=L,L=hi}}Se&&(T==null||T.cursor.event.type==uh)&&((P<=1||P>=re-1)&&(P=js(P,re)),(L<=1||L>=q-1)&&(L=js(L,q))),ve?(vd=P,_d=L,[Sr,wr]=he.move(n,P,L)):(Ot=P,Gt=L)}const Sc={width:0,height:0,left:0,top:0};function wc(){To(Sc,!1)}let bd,Td,Ed,Ad;function Cd(M,T,P,L,H,te,de){us=!0,_n=xn=Cn._x=Cn._y=!1,Mc(M,T,P,L,H,te,de,!0,!1),M!=null&&(D(dh,vu,Rd,!1),Ra(wp,n,Sr,wr,re,q,null));let{left:ve,top:Se,width:Pe,height:Ie}=zt;bd=ve,Td=Se,Ed=Pe,Ad=Ie}function Rd(M,T,P,L,H,te,de){us=Cn._x=Cn._y=!1,Mc(M,T,P,L,H,te,de,!1,!0);let{left:ve,top:Se,width:Pe,height:Ie}=zt,Oe=Pe>0||Ie>0,st=bd!=ve||Td!=Se||Ed!=Pe||Ad!=Ie;if(Oe&&st&&To(zt),Cn.setScale&&Oe&&st){let bt=ve,Mt=Pe,pt=Se,Qe=Ie;if(b.ori==1&&(bt=Se,Mt=Ie,pt=ve,Qe=Pe),_n&&ds(C,ki(bt,C),ki(bt+Mt,C)),xn)for(let qe in w){let Bt=w[qe];qe!=C&&Bt.from==null&&Bt.min!=Ut&&ds(qe,ki(pt+Qe,qe),ki(pt,qe))}wc()}else he.lock&&(he._lock=!he._lock,zs(T,!0,M!=null));M!=null&&(E(dh,vu),Ra(dh,n,Ot,Gt,re,q,null))}function Dg(M,T,P,L,H,te,de){if(he._lock)return;Tn(M);let ve=us;if(us){let Se=!0,Pe=!0,Ie=10,Oe,st;b.ori==0?(Oe=_n,st=xn):(Oe=xn,st=_n),Oe&&st&&(Se=Ot<=Ie||Ot>=re-Ie,Pe=Gt<=Ie||Gt>=q-Ie),Oe&&Se&&(Ot=Ot<Sr?0:re),st&&Pe&&(Gt=Gt<wr?0:q),zs(null,!0,!0),us=!1}Ot=-10,Gt=-10,oe.fill(null),zs(null,!0,!0),ve&&(us=ve)}function Pd(M,T,P,L,H,te,de){he._lock||(Tn(M),Ze(),wc(),M!=null&&Ra(Ep,n,Ot,Gt,re,q,null))}function Dd(){y.forEach(DE),Re(n.width,n.height,!0)}sr(Vl,sa,Dd);const Er={};Er.mousedown=Cd,Er.mousemove=wd,Er.mouseup=Rd,Er.dblclick=Pd,Er.setSeries=(M,T,P,L)=>{let H=an.match[2];P=H(n,T,P),P!=-1&&Ni(P,L,!0,!1)},fe&&(D(wp,g,Cd),D(uh,g,wd),D(bp,g,M=>{Tn(M),Ca(!1)}),D(Tp,g,Dg),D(Ep,g,Pd),Tu.add(n),n.syncRect=Ca);const Eo=n.hooks=i.hooks||{};function yn(M,T,P){gc?Ta.push([M,T,P]):M in Eo&&Eo[M].forEach(L=>{L.call(null,n,T,P)})}(i.plugins||[]).forEach(M=>{for(let T in M.hooks)Eo[T]=(Eo[T]||[]).concat(M.hooks[T])});const Ld=(M,T,P)=>P,an=cn({key:null,setSeries:!1,filters:{pub:kp,sub:kp},scales:[C,x[1]?x[1].scale:null],match:[Op,Op,Ld],values:[null,null]},he.sync);an.match.length==2&&an.match.push(Ld),he.sync=an;const Fd=an.key,bc=ng(Fd);function Ra(M,T,P,L,H,te,de){an.filters.pub(M,T,P,L,H,te,de)&&bc.pub(M,T,P,L,H,te,de)}bc.sub(n);function Lg(M,T,P,L,H,te,de){an.filters.sub(M,T,P,L,H,te,de)&&Er[M](null,T,P,L,H,te,de)}n.pub=Lg;function Fg(){bc.unsub(n),Tu.delete(n),Ye.clear(),yu(Vl,sa,Dd),c.remove(),ge?.remove(),yn("destroy")}n.destroy=Fg;function Tc(){yn("init",i,e),Be(e||i.data,!1),J[C]?vc(C,J[C]):Ze(),ae=zt.show&&(zt.width>0||zt.height>0),Ae=ue=!0,Re(i.width,i.height)}return x.forEach(Ns),y.forEach(dc),t?t instanceof HTMLElement?(t.appendChild(c),Tc()):t(n,Tc):Tc(),n}bn.assign=cn;bn.fmtNum=od;bn.rangeNum=Gl;bn.rangeLog=rc;bn.rangeAsinh=rd;bn.orient=mr;bn.pxRatio=Tt;bn.join=ST;bn.fmtDate=cd,bn.tzDate=FT;bn.sync=ng;{bn.addGap=mE,bn.clipGaps=lc;let i=bn.paths={points:lg};i.linear=hg,i.stepped=_E,i.bars=xE,i.spline=ME}const hn={obs:"#2457d6",model:"#d9541a",astro:"#16857a",rain:"#6b9de8",muted:"#6a707a",faint:"#959aa3",grid:"rgba(20,23,28,0.07)",now:"#f2600c",peak:"#a8690a"},LE='10px "IBM Plex Mono", ui-monospace, monospace',ro=(i={})=>({stroke:hn.faint,font:LE,grid:{stroke:hn.grid,width:1},ticks:{show:!1},gap:4,...i}),vh=gu;function pg({opts:i,data:e,height:t,now:n,keyStr:s,rows:r}){const a=Gi(null),o=Gi(null),l=Gi(n),c=Gi(r);return c.current=r,nr(()=>{const u=a.current,d=i(),h={hooks:{draw:[m=>{const p=m.valToPos(l.current,"x",!0);if(!isFinite(p)||p<m.bbox.left||p>m.bbox.left+m.bbox.width)return;const x=m.ctx;x.save(),x.strokeStyle=hn.now,x.lineWidth=1.5*devicePixelRatio,x.beginPath(),x.moveTo(p,m.bbox.top),x.lineTo(p,m.bbox.top+m.bbox.height),x.stroke(),x.fillStyle=hn.now,x.beginPath(),x.arc(p,m.bbox.top,3*devicePixelRatio,0,Math.PI*2),x.fill(),x.restore()}]}},f={hooks:{setCursor:[m=>{const p=m.cursor.idx,x=vh();if(p==null||m.cursor.left===void 0||m.cursor.left<0){x.style.display="none";return}const y=m.over.getBoundingClientRect();x.innerHTML=c.current(m,p).join("<br>"),x.style.display="block";const w=x.offsetWidth,F=y.left+m.cursor.left;x.style.left=`${F+14+w>innerWidth?F-w-14:F+14}px`,x.style.top=`${y.top+(m.cursor.top??0)+14}px`}]}},g=new bn({...d,width:u.clientWidth||300,height:t,plugins:[h,f]},e,u);o.current=g,g.over.addEventListener("mouseleave",()=>{vh().style.display="none"});const _=new ResizeObserver(()=>{u.clientWidth&&g.setSize({width:u.clientWidth,height:t})});return _.observe(u),()=>{_.disconnect(),g.destroy(),o.current=null,vh().style.display="none"}},[s,t]),nr(()=>{o.current?.setData(e,!0)},[e]),nr(()=>{l.current=n,o.current?.redraw(!1)},[n]),v("div",{class:"uchart",ref:a})}const am=i=>Math.abs(i)>=100?i.toFixed(0):Math.abs(i)>=10?i.toFixed(1):i.toFixed(2);function om({d:i,now:e,height:t}){const s=[i.series[0]?.x??[],...i.series.map(l=>l.y.map(c=>c===null||!isFinite(c)?null:c))],r=`${i.kind}|${i.series.map(l=>l.name+l.color).join(",")}|${i.xMin}|${i.xMax}|${(i.markers??[]).map(l=>l.x).join(",")}`;return v(pg,{opts:()=>({padding:[10,4,0,0],cursor:{y:!1,points:{size:6}},legend:{show:!1},scales:{x:{time:!1,range:[i.xMin,i.xMax]},y:i.kind==="bar"?{range:(l,c,u)=>[0,Math.max(10,u*1.1)]}:{}},axes:[ro({values:(l,c)=>c.map(u=>i.xTick(u)),space:56,incrs:[3,6,12,24]}),ro({size:36,values:(l,c)=>c.map(u=>am(u))})],series:[{},...i.series.map(l=>i.kind==="bar"?{stroke:l.color,fill:l.color+"b0",width:0,paths:bn.paths.bars({size:[.75,40],align:0}),points:{show:!1}}:{stroke:l.color,width:l.dashed?1.25:1.75,dash:l.dashed?[4,3]:void 0,points:{show:!1}})],hooks:{draw:[l=>{for(const c of i.markers??[]){const u=l.valToPos(c.x,"x",!0),d=l.valToPos(c.y,"y",!0),h=l.ctx;h.save(),h.fillStyle=c.color,h.strokeStyle="#fff",h.lineWidth=2*devicePixelRatio,h.beginPath(),h.arc(u,d,4*devicePixelRatio,0,Math.PI*2),h.fill(),h.stroke(),h.restore()}}]}}),data:s,height:t,now:e,keyStr:r,rows:(l,c)=>[`<b>${i.xTick(l.data[0][c])}</b>`,...i.series.map((u,d)=>{const h=l.data[d+1][c];return h==null?"":`<i style="background:${u.color}"></i>${u.name}: ${am(h)} ${i.unit}`}).filter(Boolean)]})}function FE({pins:i,t:e,sel:t,f:n,height:s,labels:r}){const a=.08333333333333333,o=Math.round(n.hours/a)+1,l=Array.from({length:o},(_,m)=>m*a),c=(_,m,p,x=!1)=>{if(!_.length||p<_[0]-1e-9||p>_[_.length-1]+1e-9)return x&&_.length&&p>=_[0]?m[m.length-1]:null;let y=0,w=_.length-1;for(;w-y>1;){const C=y+w>>1;_[C]<=p?y=C:w=C}if(w===y)return m[y];const F=(p-_[y])/(_[w]-_[y]||1);return m[y]+(m[w]-m[y])*F},u=(_,m,p)=>{let x=0;for(let y=0;y<_.length&&_[y]<=p;y++)x=m[y];return x},d=[l,...i.map(_=>l.map(m=>c(e,_.depth,m))),l.map(_=>c(n.tide.x,n.tide.y,_)),l.map(_=>u(n.rain.x,n.rain.y,_))],h=`${i.map(_=>`${_.id}:${_.name}:${_.color}`).join("|")}|${t}|${n.hours}`,f=()=>({padding:[10,2,0,0],cursor:{y:!1,points:{size:6}},legend:{show:!1},scales:{x:{time:!1,range:[0,n.hours]},m:{range:(_,m,p)=>[0,Math.max(.3,(p??0)*1.15)]},mpd:{},mm:{range:(_,m,p)=>[0,Math.max(10,(p??0)*2.4)]}},axes:[ro({values:(_,m)=>m.map(p=>n.xTick(p)),space:56,incrs:[3,6,12,24]}),ro({scale:"m",size:34,values:(_,m)=>m.map(p=>p.toFixed(p>=1?1:2))}),ro({scale:"mpd",side:1,size:34,grid:{show:!1},stroke:hn.model,values:(_,m)=>m.map(p=>p.toFixed(1))})],series:[{},...i.map(_=>({scale:"m",stroke:no(_.color),width:_.id===t||t===null?2:1.25,fill:_.id===t?no(_.color)+"22":void 0,points:{show:!1}})),{scale:"mpd",stroke:hn.model+"aa",width:1.25,dash:[4,3],points:{show:!1}},{scale:"mm",stroke:hn.rain,fill:hn.rain+"40",width:0,paths:bn.paths.bars({size:[1,20],align:1}),points:{show:!1}}]}),g=(_,m)=>{const p=[`<b>${n.xTick(_.data[0][m])}</b>`];i.forEach((w,F)=>{const C=_.data[F+1][m];C!=null&&p.push(`<i style="background:${no(w.color)}"></i>${w.name}: ${C.toFixed(2)} m`)});const x=_.data[i.length+1][m],y=_.data[i.length+2][m];return x!=null&&p.push(`<i style="background:${hn.model}"></i>${r.sea}: ${x.toFixed(2)} mPD`),y!=null&&p.push(`<i style="background:${hn.rain}"></i>${r.rain}: ${y.toFixed(0)} mm/h`),p};return v(pg,{opts:f,data:d,height:s,now:n.cursor,keyStr:h,rows:g})}function IE(){const i=V.rightTab.value,e=V.validation.value.points.length,t=V.pins.value.list.length,n=a=>{V.rightTab.value=a,ic("hkfl.ui.right",a)},s=[["overview",j("概览","Overview"),null],["validation",j("验证","Validation"),e],["pins",j("钉点","Pins"),t],["forcing",N("forcing"),null]],r={overview:"peak",validation:"check",pins:"pin",forcing:"wave"};return i?v("aside",{class:"inspector float",id:"right","aria-label":N("comparison"),children:[v("div",{class:"tabs",role:"tablist",children:[s.map(([a,o,l])=>v("button",{role:"tab","aria-selected":i===a,class:i===a?"on":"","data-tab":a,onClick:()=>n(a),children:[o,l?v("span",{class:"n",children:l}):null]},a)),v("span",{class:`live ${V.playing.value?"on":""}`,children:V.playing.value?N("running"):N("paused")}),v("button",{class:"btn sm icon ghost close","data-tip":j("收起","Collapse"),"data-tip-pos":"left",onClick:()=>{V.rightTab.value=null},children:v(Xe,{name:"x",size:14})})]}),v("div",{class:"p-body",children:[i==="overview"&&v(UE,{}),i==="validation"&&v(VE,{}),i==="pins"&&v(GE,{}),i==="forcing"&&v(WE,{})]})]}):v("nav",{class:"rail right float",id:"right-rail","aria-label":N("comparison"),children:d1.map(a=>{const[,o,l]=s.find(c=>c[0]===a);return v("button",{"data-rtab":a,"data-tip":o,"data-tip-pos":"left",onClick:()=>n(a),children:[v(Xe,{name:r[a],size:18}),v("span",{children:o}),l?v("span",{class:"badge",children:l}):null]},a)})})}function jr({a:i,b:e,unit:t,digits:n}){const s=i-e,r=Math.abs(s)<Math.pow(10,-n)/2?"":s>0?"bad":"good";return v("span",{class:`delta ${r}`,title:"B − A",children:[r&&v(Xe,{name:s>0?"up":"down",size:11}),s>=0?"+":"−",Math.abs(s).toFixed(n),t?` ${t}`:""]})}function Ha({k:i,v:e,unit:t,foot:n}){return v("div",{class:"stat",children:[v("div",{class:"k",title:i,children:i}),v("div",{class:"v",children:[e,t&&v("span",{class:"u",children:t})]}),v("div",{class:"f",children:n})]})}function UE(){const i=V.metrics.value,e=V.compare.value?V.baseMetrics.value:null,t=V.scene.value,[n,s]=Hl(N("hotspots")),[r,a]=Hl(N("facilities"));return v(dt,{children:[v(rn,{title:N("metrics"),hint:V.waterMode.value==="max"?"":j("至此为止的最大值","maxima so far"),children:[v("div",{id:"metrics",children:V.compare.value?v(kE,{a:e,b:i}):v(OE,{m:i,base:null})}),V.compare.value&&v("div",{class:"cmp-note",children:[v(Xe,{name:"compare",size:13}),v("span",{children:j(`分屏：左 A = ${Ps("A")}，右 B = ${Ps("B")}（拖动画面中央把手）`,`Split view: left A = ${Ps("A")}, right B = ${Ps("B")} (drag the handle)`)})]})]}),t?.facilities?.some(o=>o.ug)?v(rn,{title:j("地下空间","Underground spaces"),hint:j("灌入体积 ÷ 楼面面积","inflow volume ÷ floor area"),children:v("div",{id:"ugTable",children:v(NE,{})})}):null,v(rn,{title:n,hint:s,children:v("div",{id:"hotspots",children:v(zE,{})})}),t?.facilities?.length?v(rn,{title:r,hint:a,children:v("div",{id:"facTable",children:v(BE,{})})}):null]})}function NE(){const{m:i,base:e}=V.facilities.value,t=V.compare.value?e:null,n=(V.scene.value?.facilities??[]).filter(o=>o.ug);if(!n.length)return null;const s=n.map(o=>({f:o,d:i?.facDepths?.[o.id]??0,b:t?.facDepths?.[o.id]})).sort((o,l)=>l.d-o.d),r=(o,l)=>o>=l-.05?[j("灌满","full"),"bad"]:o>=1?[j("地下一层淹没","basement level flooded"),"bad"]:o>=.3?[j("车辆受损","cars damaged"),"warn"]:o>=.05?[j("进水","water entering"),"ok"]:[j("干","dry"),""],a=s.filter(o=>o.d>=.3).length;return v(dt,{children:[s.map(o=>{const l=o.f.ug.cap,[c,u]=r(o.d,l),d=Math.min(1,o.d/l);return v("div",{class:"ug",children:[v("div",{class:"ug-top",children:[v("span",{class:"ug-name",children:[v(T0,{html:ia[o.f.type]??""})," ",o.f.name]}),v("span",{class:`pill num ${u}`,children:[o.d.toFixed(2)," / ",l.toFixed(1)," m"]})]}),v("div",{class:"ug-bar",children:v("i",{style:{width:`${(d*100).toFixed(1)}%`,background:xo(o.d)}})}),v("div",{class:"ug-sub",children:[c,t?` · A ${(o.b??0).toFixed(2)} m`:"",o.f.ug.area?` · ${j("楼面","floor")} ${(o.f.ug.area/1e4).toFixed(2)} ha`:""]})]},o.f.id)}),v("p",{class:"caveat",children:[v(Xe,{name:"info",size:12}),v("span",{children:[a,"/",n.length," ",j("地库受浸（≥ 0.3 m）。地图上地库以透视方块显示：深色为地库体积，填充为灌入深度，地面上的柱是灌满比例","basements flooded (≥ 0.3 m). On the map each basement is an X-ray box: dark = its volume, filled = depth of water, the post above ground = filled fraction")]})]})]})}const mg=()=>V.compare.value?V.scenarios.value.find(i=>i.id===V.scenarioId.value)??null:null,Ps=i=>{const e=mg();return e?j(e[i].zh,e[i].en):N(i==="A"?"baseline":"withMeasures")};function kE({a:i,b:e}){const t=mg(),n=[[N("maxDepth"),s=>s.maxDepth,"m",2],[N("floodedArea"),s=>s.floodedAreaKm2,"km²",3],[N("severeArea"),s=>s.floodedAreaSevereKm2,"km²",3],[N("bldAffected"),s=>s.buildingsAffected,"",0],[N("volume"),s=>s.volumeMm3,"Mm³",3]];return v(dt,{children:[t&&v("div",{class:"ab-card",children:[v("div",{class:"ab-card-t",children:[v("span",{class:"grow",children:j(t.zh,t.en)}),v("button",{class:"btn sm ghost","data-ab-open":!0,onClick:()=>{V.abOpen.value=!V.abOpen.value},children:j("更换","Change")})]}),v("div",{class:"ab-card-d",children:j(t.desc_zh,t.desc_en)})]}),v("table",{class:"tbl ab-tbl",id:"abTable",children:[v("thead",{children:v("tr",{children:[v("th",{}),v("th",{class:"r",children:[v("span",{class:"ab-k",children:"A"}),v("div",{class:"ab-th",children:Ps("A")})]}),v("th",{class:"r",children:[v("span",{class:"ab-k b",children:"B"}),v("div",{class:"ab-th",children:Ps("B")})]}),v("th",{class:"r",children:"B − A"})]})}),v("tbody",{children:n.map(([s,r,a,o])=>v("tr",{children:[v("td",{children:[s,a&&v("span",{class:"u",children:[" ",a]})]}),v("td",{class:"n",children:i?r(i).toFixed(o):"—"}),v("td",{class:"n",children:e?r(e).toFixed(o):"—"}),v("td",{class:"n",children:i&&e?v(jr,{a:r(e),b:r(i),unit:"",digits:o}):"—"})]},s))})]}),v("p",{class:"caveat",children:[v(Xe,{name:"info",size:12}),v("span",{children:j("两边用同一网格、同一参数，只差情景设定；红色 = B 更糟，绿色 = B 更好。","Same grid and parameters on both sides, only the scenario differs; red = B worse, green = B better.")})]})]})}function OE({m:i,base:e}){if(!i)return v("div",{class:"stats",children:[N("maxDepth"),N("floodedArea"),N("severeArea"),N("bldAffected")].map(s=>v(Ha,{k:s,v:"—",unit:"",foot:N("noMetrics")},s))});const t=M0(i.maxDepth),n=i.floodedAreaKm2>0?i.floodedAreaSevereKm2/i.floodedAreaKm2*100:0;return v(dt,{children:[v("div",{class:"stats",children:[v(Ha,{k:N("maxDepth"),v:i.maxDepth.toFixed(2),unit:"m",foot:e?v(jr,{a:i.maxDepth,b:e.maxDepth,unit:"m",digits:2}):v(dt,{children:[v("span",{class:"swatch",style:{background:xo(i.maxDepth)}}),td()[t]]})}),v(Ha,{k:N("floodedArea"),v:i.floodedAreaKm2.toFixed(3),unit:"km²",foot:e?v(jr,{a:i.floodedAreaKm2,b:e.floodedAreaKm2,unit:"km²",digits:3}):`${(i.floodedAreaKm2*100).toFixed(1)} ha`}),v(Ha,{k:N("severeArea"),v:i.floodedAreaSevereKm2.toFixed(3),unit:"km²",foot:e?v(jr,{a:i.floodedAreaSevereKm2,b:e.floodedAreaSevereKm2,unit:"km²",digits:3}):`${n.toFixed(0)}% ${N("ofFlooded")}`}),v(Ha,{k:N("bldAffected"),v:String(i.buildingsAffected),unit:"",foot:e?v(jr,{a:i.buildingsAffected,b:e.buildingsAffected,unit:"",digits:0}):N("bldRule")})]}),v("div",{class:"readouts",children:[v("div",{children:[N("volume"),v("b",{children:[i.volumeMm3.toFixed(3)," Mm³"]}),e&&v(jr,{a:i.volumeMm3,b:e.volumeMm3,unit:"Mm³",digits:3})]}),v("div",{children:[N("gaugeNow"),v("b",{children:Object.entries(i.gaugeLevels).map(([s,r])=>`${s} ${r.toFixed(2)} mPD`).join(" · ")||"—"})]})]})]})}function zE(){const i=V.hotspots.value;return i.length?v(dt,{children:i.map((e,t)=>v("div",{class:"hot","data-hot":t,role:"button",tabIndex:0,onClick:()=>Ue.onHotspot(e.x,e.y),onKeyDown:n=>{n.key==="Enter"&&Ue.onHotspot(e.x,e.y)},title:N("flyTo"),children:[v("span",{class:"rank",children:String(t+1).padStart(2,"0")}),v("div",{class:"h-main",children:[v("div",{class:"h-top",children:[v("span",{class:"h-name",children:e.name??""}),e.area?v("span",{class:"h-area",children:[(e.area/1e4).toFixed(1)," ha"]}):null,v("span",{class:"h-d",children:[e.depth.toFixed(2)," m"]})]}),v("div",{class:"h-bar",children:v("i",{style:{width:`${Math.min(100,e.depth/3*100).toFixed(1)}%`,background:xo(e.depth)}})})]}),v(Xe,{name:"flyto",size:13,cls:"h-fly"})]},t))}):v("div",{class:"empty",children:[v(Xe,{name:"inbox",size:16}),v("span",{children:N("noHot")})]})}function BE(){const{m:i,base:e}=V.facilities.value,t=V.compare.value?e:null,n=V.scene.value?.facilities;if(!n||!i?.facDepths)return v("div",{class:"empty",children:[v(Xe,{name:"inbox",size:16}),v("span",{children:N("noMetrics")})]});const r=n.map(o=>({f:o,d:i.facDepths[o.id]??0,b:t?.facDepths?.[o.id]})).sort((o,l)=>Math.max(l.d,l.b??0)-Math.max(o.d,o.b??0)).filter(o=>Math.max(o.d,o.b??0)>=.15),a=o=>v("span",{class:`pill num ${o>=.5?"bad":o>=.15?"warn":"ok"}`,children:o.toFixed(2)});return r.length?v(dt,{children:[v("table",{class:"tbl",children:[v("thead",{children:v("tr",{children:[v("th",{children:N("facility")}),t&&v("th",{class:"r",children:"A"}),v("th",{class:"r",children:[t?"B":N("maxDepth")," (m)"]})]})}),v("tbody",{children:r.slice(0,14).map(o=>v("tr",{children:[v("td",{children:v("div",{class:"fname",children:[v(T0,{html:ia[o.f.type]??""}),v("div",{children:[o.f.name,v("div",{class:"sub",children:N("ft_"+o.f.type)})]})]})}),t&&v("td",{class:"n",children:a(o.b??0)}),v("td",{class:"n",children:a(o.d)})]},o.f.id))})]}),v("p",{class:"caveat",children:[v(Xe,{name:"info",size:12}),v("span",{children:[r.length,"/",n.length," ",j("受影响（≥ 0.15 m）","affected (≥ 0.15 m)"),r.length>14?j("，仅列前 14",", top 14 shown"):"",t?` · A = ${Ps("A")}, B = ${Ps("B")}`:""]})]})]}):v("div",{class:"empty",children:[v(Xe,{name:"check",size:16}),v("span",{children:["0/",n.length," ",j("受影响（≥ 0.15 m）","affected (≥ 0.15 m)")]})]})}function HE(i,e){if(e===void 0)return"";const t=i.cls==="none"?0:i.depth,n=Math.max(.35,.5*t);return i.unrep||i.berm!==void 0&&e<.05?"unrep":i.cls==="none"?e<.2?"hit":"over":i.lower?e>=t-n?"hit":"under":Math.abs(e-t)<=n?"hit":e<t?"under":"over"}function VE(){const{points:i,m:e}=V.validation.value,[t,n]=_o(new Set);if(!i.length)return v("section",{class:"blk",children:v("div",{class:"empty",children:[v(Xe,{name:"inbox",size:16}),v("span",{children:N("noVal")})]})});const s=V.scene.value?.facilities??[],r=i.map(c=>HE(c,e?.valDepths[c.id])),a={hit:0,under:0,over:0,unrep:0};let o=0;r.forEach(c=>{c&&(o++,a[c]++)});const l=c=>{const u=new Set(t);u.has(c)?u.delete(c):u.add(c),n(u)};return v("section",{class:"blk",id:"valTable",children:[v("div",{class:"blk-h",children:v("span",{class:"micro",children:N("validation")})}),v("div",{class:"score",children:[v("div",{class:"big",children:[o?a.hit:"—",v("small",{children:["/ ",o||i.length]})]}),v("div",{class:"side",children:[v("div",{class:"cnt",children:[v("span",{children:[N("hit")," ",v("b",{children:a.hit})]}),v("span",{children:[N("under")," ",v("b",{children:a.under})]}),v("span",{children:[N("over")," ",v("b",{children:a.over})]}),a.unrep>0&&v("span",{children:[N("unrep")," ",v("b",{children:a.unrep})]})]}),v("div",{class:"ticks",children:r.map((c,u)=>v("i",{class:c},u))})]})]}),v("div",{class:"val-head",children:N("valHead")}),v("table",{class:"tbl",children:[v("thead",{children:v("tr",{children:[v("th",{children:N("place")}),v("th",{class:"r",children:[N("observed")," (m)"]}),v("th",{class:"r",children:[N("simulated")," (m)"]}),v("th",{})]})}),v("tbody",{children:i.map((c,u)=>{const d=e?.valDepths[c.id],h=c.cls==="none"?0:c.depth,f=r[u],g=c.grade,_=t.has(c.id),m=c.cls==="none"?"":g==="B"?"±0.3":g==="C"?"±50%":g==="D"?N("estimated"):"",p=c.ug?s.find(w=>w.id===c.ug):void 0,x=[c.ug?N("ugDepth")+(p?.ug?` · ${j("楼面","floor")} ${Math.round(p.ug.area).toLocaleString()} m²`:""):N("streetDepth"),c.snapped_m?N("snapped").replace("{d}",c.snapped_m.toFixed(0)):"",c.berm!==void 0?N("bermNote").replace("{z}",c.berm.toFixed(1)):""].filter(Boolean).join(j("；","; ")),y=c.note_zh?j(c.note_zh,c.note_en??c.note_zh):"";return[v("tr",{class:`vrow ${_?"open":""}`,"data-vrow":c.id,onClick:()=>l(c.id),title:c.src,children:[v("td",{children:v("div",{class:"fname",children:[g&&v("span",{class:`grade ${g}`,title:N("grade"+g),children:g}),v("span",{children:[j(c.zh,c.en),c.ug?v("span",{class:"tag",children:j("地库","basement")}):c.berm!==void 0?v("span",{class:"tag",children:j("阶地","berm")}):null]})]})}),v("td",{class:"n",children:[c.cls==="none"?j("无水浸","none"):`${c.lower?"≥":""}${c.depth.toFixed(1)}`,m&&v("div",{class:"unc",children:m})]}),v("td",{class:"n",children:[d===void 0?"—":d.toFixed(2),d!==void 0&&f!=="unrep"&&!(c.lower&&d>=h)&&v("div",{class:"unc",children:["Δ ",d-h>=0?"+":"−",Math.abs(d-h).toFixed(2)]})]}),v("td",{class:"r",children:f?v("span",{class:`pill ${f==="hit"?"ok":f}`,children:N(f)}):v("span",{class:"pill mute",children:"—"})})]},c.id),_&&v("tr",{class:"vdet",children:v("td",{colSpan:4,children:v("dl",{class:"vdet-b",children:[g&&v(dt,{children:[v("dt",{children:j("可信度","Reliability")}),v("dd",{children:[N("grade"+g),m?` (${m})`:""]})]}),c.basis&&v(dt,{children:[v("dt",{children:N("basis")}),v("dd",{children:c.basis})]}),v("dt",{children:N("sampling")}),v("dd",{children:x}),y&&v(dt,{children:[v("dt",{children:N("modelNotes")}),v("dd",{children:y})]}),v("dt",{children:N("source")}),v("dd",{children:c.src})]})})},c.id+"_d")]})})]}),v("p",{class:"caveat",children:[v(Xe,{name:"info",size:12}),v("span",{children:N("hitRule")})]})]})}function GE(){const{list:i,t:e,sel:t,f:n}=V.pins.value;return i.length?v("section",{class:"blk",id:"pinBox",children:[v("div",{class:"blk-h",children:[v("span",{class:"micro",children:N("pins")}),v("span",{class:"hint"}),v("span",{class:"n",children:i.length})]}),i.map(s=>{const r=s.depth.length?s.depth[s.depth.length-1]:null,a=s.depth.length?Math.max(...s.depth):null;return v("div",{class:`pin-row ${s.id===t?"sel":""}`,"data-pin":s.id,onClick:o=>{o.target.tagName!=="INPUT"&&Ue.onSelectPin(t===s.id?null:s.id)},children:[v("span",{class:"dot",style:{background:no(s.color)}}),v("input",{defaultValue:s.name,"aria-label":N("f_name"),onKeyDown:o=>{o.stopPropagation(),o.key==="Enter"&&o.currentTarget.blur()},onChange:o=>{const l=o.currentTarget.value.trim();Ue.onRenamePin(s.id,l||s.name)}}),v("span",{class:"pv",children:r===null?"—":v(dt,{children:[v("b",{children:[r.toFixed(2)," m"]}),v("br",{}),N("pinMax")," ",a.toFixed(2)]})}),v("span",{style:{display:"flex"},children:[v("button",{class:"btn sm icon ghost",title:N("flyTo"),onClick:o=>{o.stopPropagation(),Ue.onFlyPin(s.id)},children:v(Xe,{name:"flyto",size:13})}),v("button",{class:"btn sm icon ghost",title:N("delete"),onClick:o=>{o.stopPropagation(),Ue.onRemovePin(s.id)},children:v(Xe,{name:"x",size:13})})]})]},s.id)}),n&&v(dt,{children:[v("div",{class:"chart-key",style:{marginTop:"12px"},children:[i.map(s=>v("span",{children:[v("i",{style:{background:no(s.color)}}),s.name]},s.id)),v("span",{children:[v("i",{class:"dash",style:{color:"var(--c-model)"}}),j("边界潮位 (mPD)","Sea level (mPD)")]}),v("span",{children:[v("i",{class:"bar",style:{background:"var(--c-rain)",opacity:.5}}),j("雨强","Rain")]})]}),v(FE,{pins:i,t:e,sel:t,f:n,height:200,labels:{sea:j("边界潮位","Sea level"),rain:j("雨强","Rain")}})]}),v("div",{class:"row",style:{marginTop:"10px"},children:[v("button",{class:"btn sm",onClick:()=>Ue.onPinMode(),children:[v(Xe,{name:"pin",size:13}),N("pinAdd")]}),v("span",{class:"grow"}),v("button",{class:"btn sm",onClick:()=>Ue.onExportPins(),children:[v(Xe,{name:"download",size:13}),N("exportCsv")]})]}),v("p",{class:"caveat",children:[v(Xe,{name:"info",size:12}),v("span",{children:N("pinRerun")})]})]}):v("section",{class:"blk",children:v("div",{class:"empty",children:[v(Xe,{name:"pin",size:16}),v("span",{children:[N("pinEmpty"),v("br",{}),v("button",{class:"btn sm",style:{marginTop:"10px"},onClick:()=>Ue.onPinMode(),children:[v(Xe,{name:"pin",size:13}),N("pinAdd")]})]})]})})}function WE(){const i=V.charts.value,e=V.chartCursor.value,t=V.event.value,[n,s]=v1(N("tideChart")),[r,a]=Hl(N("rainChart")),o=l=>v("div",{class:"chart-key",children:[l.series.map(c=>v("span",{children:[v("i",{class:l.kind==="bar"?"bar":c.dashed?"dash":"",style:c.dashed?{color:c.color}:{background:c.color}}),c.name]},c.name)),(l.markers??[]).map(c=>v("span",{children:[v("i",{class:"dot",style:{background:c.color}}),c.label]},c.label))]});return v(dt,{children:[v(rn,{title:n,hint:s,children:i?v(dt,{children:[o(i.tide),v(om,{d:i.tide,now:e,height:170})]}):null}),v(rn,{title:r,hint:a,children:i?v(dt,{children:[o(i.rain),v(om,{d:i.rain,now:e,height:120})]}):null}),t&&v(rn,{title:N("sources"),n:t.sources.length,children:v("ol",{class:"sources",children:t.sources.map((l,c)=>v("li",{children:l},c))})})]})}function $E(){const i=V.active.value,e=(t,n,s,r,a)=>v("button",{id:t,class:`btn icon ${r?"on":""}`,"aria-label":s,"aria-pressed":r,"data-tip":s,"data-tip-pos":"left",onClick:a,children:v(Xe,{name:n,size:16})});return v("div",{class:"mapctl",children:[v("div",{class:"ctl-stack float",role:"toolbar","aria-label":j("相机","Camera"),children:[e("btnBird","bird",N("camBird"),!1,()=>Ue.onCamera("bird")),e("btnStreet","street",N("camStreet"),!1,()=>Ue.onCamera("street")),e("btnFollow","target",N("camFollow"),!!i.btnFollow,()=>Ue.onCamera("follow")),v("hr",{}),e("btnOrbit","orbit",j("自动环绕","Orbit"),!!i.btnOrbit,()=>Ue.onOrbit()),e("btnTour","tour",j("电影式飞览","Cinematic tour"),!!i.btnTour,()=>Ue.onTour())]}),v("div",{class:"ctl-stack float",children:[v("button",{id:"btnExag",class:`btn icon txt ${V.exag.value!==1?"on":""}`,"data-tip":N("exag"),"data-tip-pos":"left",onClick:()=>Ue.onExag(),children:["×",V.exag.value]}),e("btnTex","map",V.texMode.value==="imagery"?j("切换到地图底图","Switch to map basemap"):j("切换到卫星影像","Switch to imagery"),!1,()=>Ue.onTexToggle())]})]})}function XE(){const[i,e]=_o(()=>{try{return localStorage.getItem("hkfl.ui.lgkeys")==="1"}catch{return!1}}),t=V.waterMode.value==="max",n=td();return v("div",{class:"legend float",id:"legend",children:[v("div",{class:"lg-h",children:[v("span",{class:"lg-t",id:"legendTitle",children:N(t?"legendMax":"legendNow")}),v("span",{class:"lg-u",children:"m"}),v("span",{class:"grow"}),v("button",{class:"toggle","aria-label":j("图例说明","Legend keys"),"aria-expanded":i,onClick:()=>{e(!i),ic("hkfl.ui.lgkeys",i?"0":"1")},children:v(Xe,{name:"chev",size:14,cls:i?"":"rot"})})]}),v("div",{class:"steps",id:"legendSteps",children:g1.map(s=>v("i",{style:{background:xo(s)}},s))}),v("div",{class:"breaks",children:["0.1","0.3","0.5","1","2"].map((s,r)=>v("span",{style:{left:`${(r+1)/6*100}%`},children:s},s))}),v("div",{class:"classes",id:"legendCls",children:n.map(s=>v("span",{children:s},s))}),i&&v("div",{class:"lg-keys",id:"legendKeys",children:[v("span",{children:[v("i",{class:"rise"}),N("lg_rise")]}),v("span",{children:[v("i",{class:"recede"}),N("lg_recede")]}),v("span",{children:[v("i",{class:"contour"}),N("lg_contour")]}),v("span",{children:[v("i",{class:"edge"}),N("lg_edge")]}),v("span",{children:[v("i",{class:"trace"}),N("lg_trace")]}),v("span",{children:[v("i",{class:"ug"}),N("lg_ug")]}),v("span",{children:[v("i",{class:"pt",style:{background:"var(--warn-dot)"}}),N("lg_val")]}),v("span",{children:[v("i",{class:"pt",style:{background:"var(--blue)"}}),N("lg_gauge")]}),v("span",{children:[v("i",{class:"pt",style:{background:"var(--bad)"}}),N("lg_fac")]})]})]})}const qE={60:["1分","1m"],300:["5分","5m"],900:["15分","15m"],1800:["30分","30m"],3600:["1时","1h"]},Rn={rainY:30,rainH:22,seaY:56,seaH:30};function lm(i,e){const t=Math.min(devicePixelRatio,2),n=i.clientWidth||600,s=i.clientHeight||90;(i.width!==n*t||i.height!==s*t)&&(i.width=n*t,i.height=s*t);const r=i.getContext("2d");r.setTransform(t,0,0,t,0,0),r.clearRect(0,0,n,s);const a=h=>h/e.hours*n,o=Math.min(Rn.seaH,s-Rn.seaY-2);r.fillStyle="rgba(20,23,28,0.035)",r.fillRect(0,Rn.rainY,n,Rn.rainH),r.fillRect(0,Rn.seaY,n,o);const l=e.hours>30?6:3;r.font='10px "IBM Plex Mono", ui-monospace, monospace',r.textAlign="center";for(let h=0;h<=e.hours+1e-6;h+=l){const f=Math.round(a(h))+.5;r.fillStyle="rgba(20,23,28,0.08)",r.fillRect(f-.5,Rn.rainY,1,Rn.seaY+o-Rn.rainY),h>0&&h<e.hours-.01&&(r.fillStyle=hn.faint,r.fillText(e.tick(h),f,10))}const c=Math.max(10,...e.rain.y),u=Math.max(1,n/Math.max(1,e.hours)-1.5);r.fillStyle=hn.rain;for(let h=0;h<e.rain.x.length;h++){const f=e.rain.y[h]/c*(Rn.rainH-3);f>.3&&r.fillRect(a(e.rain.x[h])+.75,Rn.rainY+Rn.rainH-f,u,f)}if(e.tide.y.length){const h=Math.min(...e.tide.y),f=Math.max(...e.tide.y),g=_=>Rn.seaY+o-3-(_-h)/Math.max(.05,f-h)*(o-8);r.beginPath(),e.tide.x.forEach((_,m)=>{const p=a(_),x=g(e.tide.y[m]);m===0?r.moveTo(p,x):r.lineTo(p,x)}),r.strokeStyle=hn.model,r.lineWidth=1.5,r.lineJoin="round",r.stroke(),r.lineTo(a(e.tide.x[e.tide.x.length-1]),Rn.seaY+o),r.lineTo(a(e.tide.x[0]),Rn.seaY+o),r.closePath(),r.fillStyle="rgba(217,84,26,0.08)",r.fill(),r.font='9.5px "IBM Plex Mono", ui-monospace, monospace',r.textAlign="right",r.fillStyle=hn.model,r.fillText(`${f.toFixed(1)}`,n-4,Rn.seaY+10)}r.font='9.5px "IBM Plex Sans", "Noto Sans SC", sans-serif',r.textAlign="left";const d=(h,f)=>{const g=r.measureText(h).width;r.fillStyle="rgba(251,251,252,0.85)",r.fillRect(3,f+2,g+8,13),r.fillStyle=hn.muted,r.fillText(h,7,f+12)};d(j("雨强 mm/h","Rain mm/h"),Rn.rainY),d(j("潮位 mPD","Sea level mPD"),Rn.seaY)}function jE(){const i=V.timeline.value,{label:e,frac:t}=V.time.value,n=V.playing.value,s=Gi(null),r=Gi(null),[a,o]=_o(null),l=Gi(!1);nr(()=>{i&&s.current&&lm(s.current,i)},[i]),nr(()=>{const p=r.current;if(!p)return;const x=new ResizeObserver(()=>{const y=V.timeline.value;y&&s.current&&lm(s.current,y)});return x.observe(p),()=>x.disconnect()},[]);const c=p=>{const x=r.current.getBoundingClientRect();return Math.min(1,Math.max(0,(p.clientX-x.left)/x.width))},u=(p,x)=>{const y=gu();y.innerHTML=p,y.style.display="block";const w=r.current.getBoundingClientRect(),F=y.offsetWidth;y.style.left=`${Math.min(innerWidth-F-8,Math.max(8,x-F/2))}px`,y.style.top=`${w.top-y.offsetHeight-10}px`},d=()=>{gu().style.display="none"},[h,f]=e.includes(",")?[e.split(",")[0],e.split(",")[1].replace("HKT","").trim()]:["",e],g=V.cond.value,_=V.trend.value,m=g?.signal?j(g.signal[0],g.signal[1]):"";return v("div",{class:"timeline float",id:"bottom",children:[v("div",{class:"tl-ctl",children:[v("div",{class:"tl-top",children:[v("button",{id:"btnPlay",class:`play ${n?"on":""}`,"aria-label":`${N("play")} / ${N("pause")}`,"data-tip":`${N("play")} / ${N("pause")} · Space`,"data-tip-pos":"right",onClick:()=>Ue.onPlayToggle(),children:v(Xe,{name:n?"pause":"play",size:17})}),v("div",{class:"clock",id:"timeLabel",children:[v("span",{class:"d",children:h?`${h} · HKT`:"HKT"}),v("span",{class:"t",children:f})]}),V.baked.value?v("span",{class:"baked-chip","data-tip":j("打开时显示的是预先算好的整场结果（事件结束时刻、最大水深）。按 ▶ 从头实时计算，或拖动时间轴","Opened on the precomputed run (end of the event, maximum depth). Press play to compute live from the start, or drag the timeline"),"data-tip-pos":"top",children:j("预计算结果","Precomputed")}):null,v("span",{class:"grow"}),v("button",{id:"btnReset",class:"btn sm icon ghost","aria-label":j("重置","Reset"),"data-tip":j("从头重算","Restart the run"),onClick:()=>Ue.onReset(),children:v(Xe,{name:"reset",size:14})})]}),v(Qs,{id:"speedBtns",cls:"full",items:f1.map(p=>[p,qE[p][V.lang.value==="zh"?0:1]]),value:V.speed.value,onPick:p=>Ue.onSpeed(p)})]}),v("div",{class:"lanes",children:v("div",{id:"scrub",ref:r,tabIndex:0,role:"slider","aria-label":j("时间轴","Timeline"),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(t*100),"aria-valuetext":e,onPointerDown:p=>{p.target.closest(".tmark")||(l.current=!0,p.currentTarget.setPointerCapture(p.pointerId))},onPointerMove:p=>{const x=p.target.closest(".tmark");if(x&&!l.current&&i){const w=i.marks[+x.dataset.mark];o(null),u(`<b>${j(w.zh,w.en)}</b><br>${i.fmt(w.h)}`,p.clientX);return}const y=c(p);o(y),i&&u(`<b>${i.fmt(y*i.hours)}</b>`,p.clientX)},onPointerUp:p=>{l.current&&(l.current=!1,Ue.onSeek(c(p)))},onPointerCancel:()=>{l.current=!1,o(null),d()},onPointerLeave:()=>{l.current||(o(null),d())},onKeyDown:p=>{if(!i)return;const x=.5/Math.max(1,i.hours),y=p.key==="ArrowRight"?t+x:p.key==="ArrowLeft"?t-x:p.key==="Home"?0:p.key==="End"?1:null;y!==null&&(p.preventDefault(),p.stopPropagation(),Ue.onSeek(Math.min(1,Math.max(0,y))))},children:[v("canvas",{id:"scrubCanvas",ref:s}),v("div",{class:"played",style:{width:`${(t*100).toFixed(3)}%`}}),i&&i.marks.filter(p=>p.h>=0&&p.h<=i.hours).map((p,x)=>v("span",{class:`tmark ${p.kind} ${p.tone??""}`,"data-mark":i.marks.indexOf(p),style:{left:`${(p.h/i.hours*100).toFixed(3)}%`},onClick:()=>Ue.onSeek(Math.min(1,Math.max(0,p.h/i.hours)))},x)),v("div",{class:"ghost",style:{display:a===null?"none":"block",left:`${((a??0)*100).toFixed(3)}%`}}),v("div",{class:"playhead",id:"playhead",style:{left:`${(t*100).toFixed(3)}%`}})]})}),v("div",{class:"tl-now",id:"stepInfo",children:[v("div",{class:"row2",children:[v("span",{class:"micro",style:{color:"var(--text-2)"},children:j("此刻","Now")}),v("span",{class:"grow"}),_&&v("span",{class:`trend ${_.dir}`,title:N("trendTip"),children:[_.dir!=="flat"&&v(Xe,{name:_.dir==="up"?"up":"down",size:11}),N(_.dir==="up"?"trendUp":_.dir==="down"?"trendDown":"trendFlat"),_.dir!=="flat"&&v("b",{children:[_.rate>0?"+":"−",Math.abs(_.rate*1e3).toFixed(0),"k m³/h"]})]})]}),g?v(dt,{children:[v("div",{class:"kv",children:[v("div",{children:[N("c_sea"),v("b",{children:[g.tide.toFixed(2),v("u",{children:"mPD"})]})]}),v("div",{children:[N("c_rain"),v("b",{children:[g.rain.toFixed(0),v("u",{children:"mm/h"})]})]}),v("div",{children:["Hs",v("b",{children:[g.hs.toFixed(1),v("u",{children:"m"})]})]})]}),v("div",{class:"row2",children:m?v("span",{class:`sig ${S0(g.signal[1])}`,title:m,children:m}):v("span",{class:"storm",children:j("无警告信号","No warning signal")})}),v("div",{class:"storm",title:j("求解器时间步 · 每帧步数","solver time step · steps per frame"),children:[g.storm?`${g.storm} · `:"","dt ",g.dt.toFixed(2)," s · ",g.n,"/f"]})]}):v("div",{class:"storm",children:N("noMetrics")})]})]})}function YE(){const i=V.status.value;return i?v("div",{class:"toast",id:"status",role:"status",children:i}):null}function KE(){const i=V.probe.value;if(!i||!V.probeOn.value)return null;const e=!i.sea&&i.depth>=.01;return v("div",{class:"probe",style:{left:`${i.sx}px`,top:`${i.sy}px`},children:i.sea?v("span",{class:"pc",children:j("海域（潮位边界）","Sea (tidal boundary)")}):v(dt,{children:[v("span",{class:"pd",children:[e&&v("span",{class:"swatch",style:{background:xo(i.depth)}}),e?`${i.depth.toFixed(2)} m`:j("干","dry"),e&&v("span",{class:"pc",style:{fontSize:"10px"},children:td()[M0(i.depth)]})]}),v("span",{class:"pc",children:[j("最大","max")," ",i.hmax.toFixed(2)," m · ",j("地面","ground")," ",i.ground.toFixed(1)," mPD"]})]})})}function ZE(){const i=V.loading.value;return v("div",{id:"loading",style:{display:i?"flex":"none"},children:[v("div",{class:"ld-brand",children:[v("span",{class:"ld-mark",children:v("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","aria-hidden":"true",children:[v("path",{d:"M3 10c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"}),v("path",{d:"M3 16c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"})]})}),v("div",{children:[v("div",{class:"ld-nm",children:"HK Flood Lab"}),v("div",{class:"ld-sub",children:j("香港洪涝实验室 · 交互式洪水数字孪生","Hong Kong interactive flood digital twin")})]})]}),v("div",{class:"ld-bar",children:v("i",{id:"loadingBar",style:{width:`${Math.round((i?.frac??0)*100)}%`}})}),v("div",{class:"ld-msg",id:"loadingText",children:i?.text||N("loading")})]})}function JE(){const i=V.lang.value,e=`shell ${V.leftTab.value?"":"left-closed"} ${V.rightTab.value?"":"right-closed"} ${V.panelsOff.value?"panels-off":""}`;return v("div",{class:e,children:[v(S1,{}),v(F1,{}),v(IE,{}),v($E,{}),v(XE,{}),v(jE,{}),v(YE,{}),v(KE,{}),v(ZE,{})]},i)}class QE{constructor(e){m1(e),t1(i0(JE,{}),document.getElementById("ui-root")),this.labelSwipe()}labelSwipe(){const e=V.scenarios.value.find(t=>t.id===V.scenarioId.value);document.getElementById("swipeL").textContent=e?j(e.A.zh,e.A.en):N("swipeLeft").replace(/[◀▶]/g,"").trim(),document.getElementById("swipeR").textContent=e?j(e.B.zh,e.B.en):N("swipeRight").replace(/[◀▶]/g,"").trim()}get newRole(){return V.newRole.value}get showFac(){return V.showFac.value}getMeasureParams(e){return V.measureParams.value[e]}relabel(){V.lang.value=cr(),this.labelSwipe()}setScenes(e,t){V.scenes.value=e,V.sceneId.value=t}setEvents(e,t){V.events.value=e,V.eventId.value=t}setScene(e){V.scene.value=e,V.sceneId.value=e.id}setEvent(e){V.event.value=e,V.eventId.value=e.id}setParams(e){V.params.value={...e}}setMeasures(e,t){V.measures.value=e,V.selMeasure.value=t}setMeasuresDirty(e,t){V.dirty.value=e,V.devSave.value=t}setDraftInfo(e,t){V.draft.value={n:e,len:t}}setTool(e){V.tool.value=e,e&&(V.leftTab.value="measures")}setCompare(e){V.compare.value=e}setScenarios(e,t){V.scenarios.value=e,V.scenarioId.value=t,this.labelSwipe()}setFlowMode(e){V.flowMode.value=e}setActive(e,t){V.active.value={...V.active.value,[e]:t}}setPlaying(e){V.playing.value=e}setSpeed(e){V.speed.value=e}setTime(e,t){V.time.value={label:e,frac:t}}setConditions(e){V.cond.value=e}setStepInfo(e){}setStatus(e){V.status.value=e}setLoading(e,t=""){V.loading.value=e===null?null:{frac:e,text:t}}togglePanels(){V.panelsOff.value=!V.panelsOff.value}setTimeline(e){V.timeline.value=e}setWaterMode(e){V.waterMode.value=e}setView2D(e){V.view2d.value=e}setFx(e){V.fx.value=e}setBaked(e){V.baked.value=e}setExag(e){V.exag.value=e}setTexMode(e){V.texMode.value=e}setCharts(e,t){V.charts.value={tide:e,rain:t}}setChartCursor(e){V.chartCursor.value=e}setProbe(e){V.probe.value=e}setMetrics(e,t){const n=V.metrics.value;if(!e)V.trend.value=null;else if(n&&e.t>n.t){const s=(e.volumeMm3-n.volumeMm3)/((e.t-n.t)/3600),r=Math.abs(s)/Math.max(.001,e.volumeMm3);V.trend.value={dir:e.volumeMm3<5e-4||r<.02?"flat":s>0?"up":"down",rate:s}}V.metrics.value=e,V.baseMetrics.value=t}setHotspots(e){V.hotspots.value=e}setValidation(e,t){V.validation.value={points:e,m:t}}setFacilities(e,t){V.facilities.value={m:e,base:t}}setPins(e,t,n,s){V.pins.value={list:e.map(r=>({...r,depth:r.depth.slice()})),t:t.slice(),sel:n,f:s}}}const Wr=900,eA="v1.4",cm="./".replace(/\/$/,""),hm={"hk-island-east":"mangkhut-2018","tseung-kwan-o":"mangkhut-2018","sha-tin":"wanda-1962","tai-po":"mangkhut-2018","wong-tai-sin":"rainstorm-2023","victoria-harbour":"dubhe-1000","tai-o":"hato-2017","hk-overview":"dubhe-1000"},um=[12723548,1023370,7358696,11566347,6067213,4804695];function fi(i){return new Date(i.length===16?`${i}:00+08:00`:`${i}+08:00`)}class tA{constructor(){I(this,"world");I(this,"ui");I(this,"solver",null);I(this,"baseline",null);I(this,"assets",null);I(this,"event",null);I(this,"sceneList",[]);I(this,"eventList",[]);I(this,"sceneId","wong-tai-sin");I(this,"eventId","rainstorm-2023");I(this,"params",{surgeScale:1,waveSetup:.2,waveHs:3,slr:0,rainScale:1,drainMmPerHour:40,hillCapMmPerHour:40,recoverGain:6,tideLockM:1.5,buildingsBlock:!0,manning:.035,subgrid:!0});I(this,"measures",null);I(this,"forcing",null);I(this,"playing",!1);I(this,"speed",900);I(this,"simT",0);I(this,"windowSec",86400);I(this,"compare",!1);I(this,"showBaseline",!1);I(this,"scenarioId","measures");I(this,"sceneScenarios",[]);I(this,"scenarioList",[]);I(this,"scenarioPick",{});I(this,"flowMode","particles");I(this,"splitFrac",.5);I(this,"showFacilities",!0);I(this,"flyAfterSeek",!1);I(this,"hinted",!1);I(this,"probeOn",!0);I(this,"probeT",0);I(this,"waterMode","now");I(this,"showLandmarks",!0);I(this,"showMeasureLabels",!0);I(this,"follow",!1);I(this,"followAt",null);I(this,"pins",[]);I(this,"pinT",[]);I(this,"pinMode",!1);I(this,"selPin",null);I(this,"pinSeq",1);I(this,"lastPinSample",-1e9);I(this,"spawnA",new Float32Array(0));I(this,"spawnB",new Float32Array(0));I(this,"metrics",null);I(this,"baseMetrics",null);I(this,"tool",null);I(this,"draft",[]);I(this,"selectedMeasure",null);I(this,"snapShore",!0);I(this,"modSigA","");I(this,"modSigB","");I(this,"lastFrame",performance.now());I(this,"lastMetrics",0);I(this,"lastLightning",0);I(this,"metricsT",-1);I(this,"seekTarget",null);I(this,"dtBase",.5);I(this,"maxDepthSeen",0);I(this,"snaps",[]);I(this,"snapPool",[]);I(this,"snapEvery",0);I(this,"nextSnapT",0);I(this,"cache",null);I(this,"cacheKey",null);I(this,"cachedTimes",new Set);I(this,"cacheToken",0);I(this,"loadingToken",0);I(this,"bakedMan",new Map);I(this,"resultPending",!1);I(this,"noBake",new URLSearchParams(location.search).has("bake"));I(this,"view2d",!0);I(this,"flashTimer",0);const e=document.getElementById("view");this.world=new $b(e,document.getElementById("labels")),this.world.setView2D(this.view2d,!1),this.ui=new QE({onSceneChange:t=>{this.sceneId=t,this.eventId=hm[t]??this.eventId,this.ui.setEvents(this.eventList,this.eventId),this.load()},onEventChange:t=>{this.eventId=t,this.load(!1)},onParamChange:t=>{this.params=t,this.applyParams(),this.restart()},onMeasureTool:t=>this.setTool(t),onFinishDraft:()=>this.finishDraft(),onCancelDraft:()=>{this.draft=[],this.world.setDraft([],"wall"),this.setTool(null)},onUndoVertex:()=>this.undoVertex(),onSnapToggle:t=>{this.snapShore=t},onRemoveMeasure:t=>{this.measures?.remove(t),this.selectedMeasure===t&&(this.selectedMeasure=null),this.measuresChanged()},onClearMeasures:()=>{this.measures?.clearWhatIf(),this.selectedMeasure=null,this.measuresChanged()},onMeasureParam:()=>{},onSelectMeasure:t=>this.selectMeasure(t),onUpdateMeasure:(t,n)=>{this.measures?.update(t,n),this.measuresChanged()},onSaveMeasures:()=>this.saveMeasures(),onExportMeasures:()=>this.exportMeasures(),onImportMeasures:t=>this.importMeasures(t),onRevertMeasures:()=>this.revertMeasures(),onPlayToggle:()=>{!this.playing&&this.simT>=this.windowSec-1&&(this.restart(),this.setWater("now")),this.setPlaying(!this.playing)},onReset:()=>this.restart(),onView2D:t=>this.setView2D(t),onFx:t=>{this.world.setFx(t),this.ui.setFx(t)},onSpeed:t=>{this.speed=t,this.ui.setSpeed(t)},onSeek:t=>this.seek(t*this.windowSec),onCompare:()=>this.toggleCompare(),onScenario:t=>this.setScenario(t),onOrbit:()=>{this.view2d&&this.setView2D(!1);const t=this.world.director.controls;t.autoRotate=!t.autoRotate,t.autoRotateSpeed=.6,this.ui.setActive("btnOrbit",t.autoRotate)},onTour:()=>{this.view2d&&this.setView2D(!1),this.tour()},onTexToggle:()=>{this.world.setTextureMode(this.world.texMode==="imagery"?"basemap":"imagery"),this.ui.setTexMode(this.world.texMode)},onPanels:()=>{this.ui.togglePanels(),this.syncLabelInset()},onLang:()=>{i1(cr()==="zh"?"en":"zh"),document.documentElement.lang=cr()==="zh"?"zh-CN":"en",this.ui.relabel(),this.ui.setScenes(this.sceneList,this.sceneId),this.ui.setEvents(this.eventList,this.eventId),this.refreshCharts(),this.refreshLabels()},onFlyTo:(t,n)=>this.world.director.flyTo(this.world.viewAt(t,n,700),2.2),onShowMax:t=>this.world.setShowMax(t),onShowBaseline:t=>{this.showBaseline=t,this.bindView()},onFlowMode:()=>this.cycleFlow(),onPeak:()=>this.jumpToPeak(),onHotspot:(t,n)=>this.world.director.flyTo(this.world.viewAt(t,n,450),2),onShowFacilities:t=>{this.showFacilities=t,this.refreshLabels()},onWaterMode:t=>this.setWater(t),onExag:()=>{const t=[1,1.5,2,3],n=t[(t.indexOf(this.world.exag)+1)%t.length];this.world.setExaggeration(n),this.ui.setExag(n),this.refreshLabels()},onCamera:t=>this.cameraPreset(t),onShowLandmarks:t=>{this.showLandmarks=t,this.refreshLabels()},onShowMeasureLabels:t=>{this.showMeasureLabels=t,this.refreshLabels()},onFine:t=>this.world.setFine(t),onClearCache:()=>{this.clearRunCache()},onShadows:t=>this.world.setShadows(t),onProbe:t=>{this.probeOn=t,t||this.ui.setProbe(null)},onPinMode:()=>this.setPinMode(!this.pinMode),onRemovePin:t=>{this.pins=this.pins.filter(n=>n.id!==t),this.selPin===t&&(this.selPin=null),this.pinsChanged()},onRenamePin:(t,n)=>{const s=this.pins.find(r=>r.id===t);s&&(s.name=n,this.pinsChanged())},onSelectPin:t=>{this.selPin=t,this.pinsChanged()},onFlyPin:t=>{const n=this.pins.find(s=>s.id===t);n&&this.world.director.flyTo(this.world.viewAt(n.x,n.y,420),2)},onExportPins:()=>this.exportPins()}),this.ui.setSpeed(this.speed),this.ui.setParams(this.params),this.ui.setFlowMode(this.flowMode),this.bindPointer(e),this.bindSwipe(),window.addEventListener("resize",()=>this.syncLabelInset()),this.world.director.onTourEnd=()=>{this.ui.setActive("btnTour",!1),this.ui.setStatus(null)},this.init(),requestAnimationFrame(()=>this.frame())}async init(){try{[this.sceneList,this.eventList]=await Promise.all([Bg(),Hg()])}catch(t){this.ui.setLoading(1,`数据索引加载失败 / failed to load index: ${t}`);return}const e=new URLSearchParams(location.search);e.get("scene")&&this.sceneList.some(t=>t.id===e.get("scene"))&&(this.sceneId=e.get("scene")),this.sceneList.some(t=>t.id===this.sceneId)||(this.sceneId=(this.sceneList.find(t=>!t.hidden)??this.sceneList[0]).id),this.eventId=e.get("event")??hm[this.sceneId]??this.eventList[0].id,this.eventList.some(t=>t.id===this.eventId)||(this.eventId=this.eventList[0].id),this.ui.setScenes(this.sceneList,this.sceneId),this.ui.setEvents(this.eventList,this.eventId),await this.load()}async load(e=!0){const t=++this.loadingToken;this.playing=!1,this.ui.setPlaying(!1),this.ui.setLoading(.02,N("loading"));try{const n=Vg(this.eventId);if(e||!this.assets){if([this.assets,this.sceneScenarios]=await Promise.all([Wg(this.sceneId,(o,l)=>this.ui.setLoading(o*.8,`${N("loading")} ${l}`)),Gg(this.sceneId)]),t!==this.loadingToken)return;this.buildSolvers()}if(this.event=await n,t!==this.loadingToken)return;history.replaceState(null,"",`?scene=${this.sceneId}&event=${this.eventId}`),this.params.waveSetup=this.event.kind==="typhoon"?.2:this.event.kind==="fictional"?.3:0;const s=this.event.tide.QUB;let r=0;if(s)for(let o=0;o<s.surge.length;o++){const l=s.surge[o];l!==null&&l>r&&(r=l)}this.params.waveHs=this.event.kind==="typhoon"?+(3*Math.min(1.5,Math.max(.3,r/2.35))).toFixed(2):this.event.kind==="fictional"?4:0,this.ui.setParams(this.params),this.buildForcing(),this.ui.setScene(this.assets.meta),this.ui.setEvent(this.event),this.hinted||(this.hinted=!0,setTimeout(()=>this.flash(this.view2d?j("拖动平移 · 滚轮缩放 · 顶栏切到 3D 可旋转查看楼宇","Drag to pan · wheel to zoom · switch to 3D in the top bar to orbit"):j("拖动平移 · 右键或 Shift + 拖动旋转 · 滚轮缩放","Drag to pan · right button or Shift + drag to orbit · wheel to zoom")),1500)),this.syncScenarios(),this.applyMeasures(),this.applyParams(),this.resultPending=!this.noBake,this.restart(),this.refreshCharts(),this.refreshLabels(),this.ui.setLoading(null);const a=this.noBake?null:await this.bakedManifest();if(t!==this.loadingToken)return;a&&a.key===this.cacheKey?this.resultPending&&this.ui.setStatus(j("载入预计算结果…","Loading the precomputed result…")):(this.resultPending=!1,this.setPlaying(!0))}catch(n){console.error(n),this.ui.setLoading(1,`加载失败 / load failed: ${n}`)}}buildSolvers(){const e=this.assets,t=e.meta;this.solver?.dispose(),this.baseline?.dispose(),this.baseline=null,this.disposeSnapshots(),this.solver=new Jr(this.world.renderer,{W:t.cols,H:t.rows,dx:t.res},e.dem,e.bldh,e.mask,e.expo,e.basin,e.chan,e.ug,e.sgCell&&e.sgFace?{cell:e.sgCell,face:e.sgFace}:null),this.measures=new qb(t.cols,t.rows,t.res),this.measures.sea=e.mask,this.measures.dem=e.dem,this.measures.bld=e.bldh,this.selectedMeasure=null,this.loadMeasures(),this.applyMeasures(),this.world.loadScene(e,this.solver.terrainTex,this.solver.modTex,this.solver.stateTex,this.solver.auxTex,this.solver.faceModTex,this.solver.sgTex?{c0:this.solver.sgTex[0],c1:this.solver.sgTex[1]}:null),this.spawnA=new Float32Array(t.cols*t.rows*4),this.spawnB=new Float32Array(t.cols*t.rows*4),this.compare&&this.makeBaseline(),this.syncSplit()}loadMeasures(){const e=this.assets,t=this.measures;t.replaceAll([]);for(const o of e.meta.defences??[])t.add({kind:"wall",pts:[{x:o.x,y:o.y}],cells:o.cells,height:o.height_m,key:o.id,name:o.zh,name_en:o.en,role:"record",built:o.built,in_dtm:o.in_dtm,src:o.src,locked:!0});const n=e.savedMeasures;let s=null;try{const o=localStorage.getItem(this.measuresKey());o&&(s=JSON.parse(o))}catch{s=null}const r=s&&(!n||(s.saved??"")>(n.saved??"")),a=r?s:n;a&&t.loadSaved(a,e.meta.origin),this.ui.setMeasuresDirty(!!r,!1)}measuresKey(){return`hkfl.measures.${this.sceneId}`}ctx(e,t=this.simT/3600,n){const s={eventId:this.eventId,eventStart:this.event?fi(this.event.window.start).getTime():0,simH:t,whatIf:e};if(n){const r=n.measures;s.whatIf=r==="all",s.bare=r==="none",Array.isArray(r)&&(s.keys=r),n.exclude?.length&&(s.exclude=n.exclude)}return s}sideCtx(e,t){const n=this.activeScenario();return n?this.ctx(!1,t,n[e]):this.ctx(e==="B",t)}activeScenario(){return this.compare?this.scenarioList.find(e=>e.id===this.scenarioId)??null:null}sideModOf(e){const t=this.activeScenario();return t?$g(t[e]):$r}syncScenarios(){this.scenarioList=qg(this.sceneScenarios,this.event);const e=this.measures?.measures.some(s=>(s.role??"whatif")==="whatif"&&!s.scenario_only),t=this.scenarioList.find(s=>!s.generic),n=this.scenarioPick[`${this.sceneId}/${this.eventId}`]??(t&&!e?t.id:"measures");this.scenarioId=this.scenarioList.some(s=>s.id===n)?n:"measures",this.ui.setScenarios(this.scenarioList,this.scenarioId)}setScenario(e){if(this.scenarioList.some(t=>t.id===e)){if(this.scenarioId=e,this.scenarioPick[`${this.sceneId}/${this.eventId}`]=e,this.ui.setScenarios(this.scenarioList,e),!this.compare){this.toggleCompare();return}this.applyMeasures(),this.buildForcing(),this.refreshCharts(),this.syncSplit(),this.restart(),this.setPlaying(!0)}}resolveMeasureTimes(){const e=this.measures,t=this.event;if(!e||!t)return;const n=fi(t.window.start).getTime();for(const s of e.measures)s.from&&(s.from_h=+((fi(s.from).getTime()-n)/36e5).toFixed(2)),s.to&&(s.to_h=+((fi(s.to).getTime()-n)/36e5).toFixed(2))}applyMeasures(){const e=this.measures;if(e){if(this.resolveMeasureTimes(),this.solver){const t=this.sideCtx("B");e.rasterize(this.solver.modData,t,this.solver.faceModData),this.solver.updateMod(),this.solver.setConnectors(e.connectors(t)),this.modSigA=e.signature(t)}if(this.baseline){const t=this.sideCtx("A");e.rasterize(this.baseline.modData,t,this.baseline.faceModData),this.baseline.updateMod(),this.baseline.setConnectors(e.connectors(t)),this.modSigB=e.signature(t)}this.refreshMeasureViews()}}refreshMeasureViews(){this.world.measuresChanged();const e=this.measures;if(!e)return;const t=this.sideCtx("B"),n=e.measures.map(s=>({m:s,eff:e.effect(s,t),cost:e.cost(s),exists:e.existsAt(s,t)}));this.world.setMeasures(n.map(s=>({m:s.m,eff:s.eff,selected:s.m.id===this.selectedMeasure}))),this.ui.setMeasures(n,this.selectedMeasure)}tickMeasures(){const e=this.measures;if(!e||!this.solver)return;const t=this.sideCtx("B"),n=e.signature(t);if(n!==this.modSigA&&(e.rasterize(this.solver.modData,t,this.solver.faceModData),this.solver.updateMod(),this.solver.setConnectors(e.connectors(t)),this.modSigA=n,this.refreshMeasureViews()),this.baseline){const s=this.sideCtx("A"),r=e.signature(s);r!==this.modSigB&&(e.rasterize(this.baseline.modData,s,this.baseline.faceModData),this.baseline.updateMod(),this.baseline.setConnectors(e.connectors(s)),this.modSigB=r)}}makeBaseline(){const e=this.assets,t=e.meta;if(this.baseline?.dispose(),this.baseline=new Jr(this.world.renderer,{W:t.cols,H:t.rows,dx:t.res},e.dem,e.bldh,e.mask,e.expo,e.basin,e.chan,e.ug,e.sgCell&&e.sgFace?{cell:e.sgCell,face:e.sgFace}:null),this.measures){const n=this.sideCtx("A");this.measures.rasterize(this.baseline.modData,n,this.baseline.faceModData),this.baseline.updateMod(),this.baseline.setConnectors(this.measures.connectors(n)),this.modSigB=this.measures.signature(n)}}buildForcing(){const e=this.event,t=this.assets.meta;this.resolveMeasureTimes();const n=fi(e.window.start),s=fi(e.window.end);this.windowSec=(s.getTime()-n.getTime())/1e3;const r=e.tide[t.gauge]??e.tide.QUB,a=[],o=[],l=[],c=[],u=(t.tide_lag_min||0)*60;for(let x=0;x<r.t.length;x++){const y=(fi(r.t[x]).getTime()-n.getTime())/1e3+u;if(y<-7200||y>this.windowSec+7200)continue;const w=r.astro[x],F=r.surge[x];w!==null&&(a.push(y),l.push(w),c.push(r.obs[x]),o.push(w+(F??0)*t.tide_scale))}const d=[],h=[];for(let x=0;x<e.rain.t.length;x++)d.push((fi(e.rain.t[x]).getTime()-n.getTime())/1e3),h.push(e.rain.mm[x]);let f=.3;for(let x=0;x<a.length;x++)f=Math.max(f,o[x]-l[x]);this.forcing={tideT:a,tideL:o,astro:l,obs:c,rainT:d,rainMm:h,hours:this.windowSec/3600,start:n,surgePeak:f};const g=t.dem_stats?.zmin??0,_=Math.max(...o)+this.params.waveSetup+this.params.slr+Math.max(this.sideModOf("A").slr,this.sideModOf("B").slr),m=Math.max(2.5,_-g+1),p=.45*t.res/Math.sqrt(9.81*m);this.dtBase=p,this.maxDepthSeen=0,this.solver?.setDt(p),this.baseline?.setDt(p),this.drawTimeline()}drawTimeline(){const e=this.forcing,t=this.event;if(!e||!t||!this.assets)return;const n=[];for(const[a,o,l]of t.signals??[])n.push({h:(fi(a).getTime()-e.start.getTime())/36e5,zh:o,en:l,kind:"sig",tone:S0(l)});const s=this.assets.meta.rain_mult[this.eventId]??1;let r=-1;for(let a=0;a<e.rainMm.length;a++)(r<0||e.rainMm[a]>e.rainMm[r])&&(r=a);if(r>=0&&e.rainMm[r]*s>=10){const a=(e.rainMm[r]*s).toFixed(0);n.push({h:e.rainT[r]/3600+.5,zh:`雨强峰值 ${a} mm/h`,en:`Rain peak ${a} mm/h`,kind:"peak-rain"})}if(t.kind!=="rainstorm"&&e.tideL.length){let a=0;for(let l=1;l<e.tideL.length;l++)e.tideL[l]>e.tideL[a]&&(a=l);const o=e.tideL[a].toFixed(2);n.push({h:e.tideT[a]/3600,zh:`潮位峰值 ${o} mPD`,en:`Sea-level peak ${o} mPD`,kind:"peak-tide"})}this.ui.setTimeline({hours:e.hours,fmt:a=>this.timeLabel(a*3600),tick:a=>this.tick(a),marks:n,tide:{x:e.tideT.map(a=>a/3600),y:e.tideL},rain:{x:e.rainT.map(a=>a/3600),y:e.rainMm}})}stormParts(e){const t=this.event,n=this.forcing;if(!t||!n)return{sig:null,dist:""};const s=n.start.getTime()+e*1e3;let r=null;for(const[l,c,u]of t.signals??[])fi(l).getTime()<=s&&(r=[c,u]);let a="";const o=t.track;if(o.length>=2){const l=o.map(c=>fi(c[0]).getTime());if(s>=l[0]&&s<=l[l.length-1]){let c=0;for(;c<l.length-2&&l[c+1]<s;)c++;const u=(s-l[c])/(l[c+1]-l[c]),d=o[c][1]+(o[c+1][1]-o[c][1])*u,h=o[c][2]+(o[c+1][2]-o[c][2])*u,f=6371,g=(h-22.302)*Math.PI/180,_=(d-114.174)*Math.PI/180,m=Math.sin(g/2)**2+Math.cos(h*Math.PI/180)*Math.cos(22.302*Math.PI/180)*Math.sin(_/2)**2,p=2*f*Math.asin(Math.sqrt(m)),x=(Math.atan2(d-114.174,h-22.302)*180/Math.PI+360)%360,y=j("北,东北,东,东南,南,西南,西,西北","N,NE,E,SE,S,SW,W,NW").split(",");a=`${j("风暴中心","storm centre")} ${p.toFixed(0)} km ${y[Math.round(x/45)%8]}`}}return{sig:r,dist:a}}tick(e){return new Date(this.forcing.start.getTime()+e*36e5).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"Asia/Hong_Kong"})}timeLabel(e){return new Date(this.forcing.start.getTime()+e*1e3).toLocaleString("en-GB",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",timeZone:"Asia/Hong_Kong"})+" HKT"}tideAt(e,t=$r){const n=this.forcing,s=Va(n.tideT,n.tideL,e,n.astro),r=Va(n.tideT,n.astro,e,n.astro),a=s-r;return r+a*this.params.surgeScale*t.tideScale+this.params.waveSetup+this.params.slr+t.slr}rainAt(e,t=$r){const n=this.forcing;let s=0;for(let a=0;a<n.rainT.length;a++)if(e>=n.rainT[a]&&e<n.rainT[a]+3600){s=n.rainMm[a];break}const r=this.assets.meta.rain_mult[this.eventId]??1;return s*r*this.params.rainScale*t.rainScale/36e5}rainMmAt(e){return this.rainAt(e)*36e5}hsAt(e,t=$r){const n=this.forcing,r=(Va(n.tideT,n.tideL,e,n.astro)-Va(n.tideT,n.astro,e,n.astro))*this.params.surgeScale*t.tideScale/n.surgePeak;return r<.2?0:this.params.waveHs*Math.min(1,r)}applyParams(){const e=this.params.drainMmPerHour/36e5;for(const t of[this.solver,this.baseline])t?.setParams({manning:this.params.manning,buildings:this.params.buildingsBlock,drain:e,bldBlock:1,manningBld:.6,hillCap:this.params.hillCapMmPerHour/36e5,recover:this.params.recoverGain,tideLock:this.params.tideLockM,subgrid:this.params.subgrid});this.world.setBuildingsBlock(this.params.buildingsBlock),this.world.setSubgrid(this.params.subgrid&&!!this.solver?.subgridAvailable),this.forcing&&this.buildForcing()}restart(){if(!(!this.solver||!this.forcing)){this.ui.setBaked(!1),this.solver.reset(this.tideAt(0,this.sideModOf("B"))),this.baseline?.reset(this.tideAt(0,this.sideModOf("A"))),this.simT=0,this.metrics=null,this.baseMetrics=null,this.lastMetrics=0,this.maxDepthSeen=0,this.solver.setDt(this.dtBase),this.baseline?.setDt(this.dtBase),this.ui.setMetrics(null,null),this.ui.setTime(this.timeLabel(0),0),this.pinT=[];for(const e of this.pins)e.depth=[],e.level=[];this.lastPinSample=-1e9,this.pinsChanged(!1),this.world.resetFlow(),this.world.setBasements(this.basementItems(null)),this.clearSnapshots(),this.planSnapshots(),this.takeSnapshot(),this.loadCachedRun()}}runKey(){if(!this.assets||!this.solver||this.compare)return null;const e=this.assets.meta,t=this.measures?this.measures.measures.map(n=>({k:n.kind,r:n.role??"whatif",p:n.pts,c:n.cells?.length,h:n.height,q:n.rate,v:n.capacity,f:n.factor,d:n.radius,b:n.built,x:n.removed,i:n.in_dtm,e:n.events,s:n.from_h,t:n.to_h,n:n.info,o:n.scenario_only})):[];return lb({v:eA,scene:this.sceneId,stamp:e.dem_stats??null,cols:e.cols,rows:e.rows,event:this.eventId,params:this.params,sg:this.solver.subgridOn,ms:t})}async loadCachedRun(){this.cacheKey=this.runKey(),this.cachedTimes=new Set;const e=++this.cacheToken;if(!this.cacheKey||this.noBake||(this.cache||(this.cache=await Ll.open()),!this.cache||e!==this.cacheToken))return;const t=this.cacheKey;let n=[];if(await this.loadBaked(t,e)==="stale")return;try{n=await this.cache.list(t)}catch{return}if(e!==this.cacheToken)return;for(const a of n)this.cachedTimes.add(a);const s=Math.max(2,Math.floor(32e7/Jr.snapshotBytes(this.assets.meta.cols,this.assets.meta.rows)));let r=0;for(const a of n){if(e!==this.cacheToken||!this.solver)return;if(this.snaps.some(c=>Math.abs(c.t-a)<1))continue;if(this.snaps.length>=s)break;let o=null;try{o=await this.cache.get(t,a)}catch{o=null}if(!o||e!==this.cacheToken||!this.solver)continue;const l=this.solver.snapshotFromData(new Float32Array(o.state),new Float32Array(o.aux),o.t,o.dt,this.snapPool.pop(),o.conn?new Float32Array(o.conn):null);this.snaps.push({t:o.t,a:l,b:null,maxDepthSeen:o.maxDepthSeen}),r++}r&&this.flash(j(`已从本机缓存恢复 ${r} 个关键帧，时间轴可直接跳转`,`${r} keyframes restored from the browser cache: the timeline jumps without recomputing`))}bakedManifest(){const e=`${this.sceneId}/${this.eventId}`;let t=this.bakedMan.get(e);return t||(t=fetch(`${cm}/scenes/${this.sceneId}/baked/${this.eventId}/manifest.json`).then(n=>n.ok?n.json():null).catch(()=>null),this.bakedMan.set(e,t)),t}async loadBaked(e,t){const n=await this.bakedManifest();if(t!==this.cacheToken||!this.solver)return"stale";if(n&&n.key===e){const s=`${cm}/scenes/${n.scene}/baked/${n.event}`;for(const r of[...n.frames].sort((a,o)=>o.t-a.t)){if(this.snaps.some(h=>Math.abs(h.t-r.t)<1))continue;let a=null;try{const h=await fetch(`${s}/${r.file}`);if(!h.ok)throw new Error(String(h.status));a=await new Response((h.body??new Blob([await h.arrayBuffer()]).stream()).pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}catch{a=null}if(t!==this.cacheToken||!this.solver)return"stale";if(!a||a.byteLength!==(r.n_state+r.n_aux+r.n_conn)*4)continue;const o=new Float32Array(a),l=r.n_state,c=l+r.n_aux,u=this.solver.snapshotFromData(o.slice(0,l),o.slice(l,c),r.t,r.dt,this.snapPool.pop(),r.n_conn?o.slice(c):null),d={t:r.t,a:u,b:null,maxDepthSeen:r.maxDepthSeen};this.snaps.push(d),this.cachedTimes.add(r.t),this.resultPending&&r.t>=this.windowSec-1&&this.simT===0&&!this.playing&&this.seekTarget===null&&this.showResult(d)}}return this.resultPending&&(this.resultPending=!1,this.ui.setStatus(null),!this.playing&&this.simT===0&&this.setPlaying(!0)),"ok"}showResult(e){this.resultPending=!1,this.ui.setStatus(null),this.restoreSnapshot(e),this.setWater("max"),this.ui.setBaked(!0)}setWater(e){this.waterMode=e,this.world.setWaterMode(e),this.ui.setWaterMode(e)}setView2D(e){if(this.view2d=e,this.world.setView2D(e),this.ui.setView2D(e),e){const t=this.world.director.controls;t.autoRotate=!1,this.ui.setActive("btnOrbit",!1),this.world.director.touring&&this.world.director.stopTour()}}persistSnapshot(e){const t=this.cacheKey,n=this.cache;if(!t||!n||!this.solver||this.cachedTimes.has(e.t))return;this.cachedTimes.add(e.t);const s=this.solver.readSnapshot(e.a);n.put(t,{t:e.t,dt:e.a.dt,maxDepthSeen:e.maxDepthSeen,state:s.state.buffer,aux:s.aux.buffer,conn:s.conn?s.conn.buffer:void 0}).catch(()=>{})}async clearRunCache(){this.cache||(this.cache=await Ll.open()),await this.cache?.clear(),this.cachedTimes=new Set,this.flash(j("本机缓存已清空","Browser cache cleared"))}basementItems(e){const t=this.assets?.meta;return t?(t.facilities??[]).filter(n=>n.ug).map(n=>({id:n.id,x:n.x,y:n.y,area:n.ug.area,cap:n.ug.cap,depth:e?.facDepths?.[n.id]??0})):[]}planSnapshots(){const e=this.assets;if(!e){this.snapEvery=0;return}const t=Jr.snapshotBytes(e.meta.cols,e.meta.rows)*(this.baseline?2:1),n=Math.max(2,Math.floor(32e7/t));this.snapEvery=Math.max(1800,Math.ceil(this.windowSec/n/Wr)*Wr),this.nextSnapT=this.snapEvery}checkpoint(){const e=this.solver;this.maxDepthSeen=Math.max(this.maxDepthSeen,e.maxDepth(),this.baseline?this.baseline.maxDepth():0);const t=.45*this.assets.meta.res/Math.sqrt(9.81*Math.max(1,this.maxDepthSeen*1.4+.5));if(t<e.dt&&(e.setDt(t),this.baseline?.setDt(t)),this.snapEvery>0&&this.simT>=this.nextSnapT-1&&this.simT<this.windowSec)for(this.takeSnapshot();this.nextSnapT<=this.simT+1;)this.nextSnapT+=this.snapEvery}clearSnapshots(){for(const e of this.snaps)this.snapPool.push(e.a),e.b&&this.snapPool.push(e.b);this.snaps=[]}disposeSnapshots(){this.clearSnapshots();for(const e of this.snapPool)e.rt.dispose();this.snapPool=[]}takeSnapshot(){const e=this.solver;if(this.snaps.some(r=>Math.abs(r.t-this.simT)<this.snapEvery*.5))return;const t=e.snapshot(this.snapPool.pop()),n=this.baseline?this.baseline.snapshot(this.snapPool.pop()):null,s={t:this.simT,a:t,b:n,maxDepthSeen:this.maxDepthSeen};this.snaps.push(s),this.simT>1&&!this.baseline&&this.persistSnapshot(s)}keyframeBefore(e){let t=null;for(const n of this.snaps)n.t<=e&&(!this.baseline||n.b)&&(!t||n.t>t.t)&&(t=n);return t}showConditions(e){if(!this.forcing||!this.solver)return;const t=this.sideModOf("B"),n=this.stormParts(e);this.ui.setConditions({signal:n.sig,storm:n.dist,tide:this.tideAt(e,t),rain:this.rainAt(e,t)*36e5,hs:this.hsAt(e,t),dt:this.solver.dt,n:0})}restoreSnapshot(e){this.solver.restore(e.a),this.baseline&&e.b&&this.baseline.restore(e.b),this.simT=e.t,this.metrics=null,this.baseMetrics=null,this.lastMetrics=0,this.maxDepthSeen=e.maxDepthSeen;let t=0;for(;t<this.pinT.length&&this.pinT[t]<=e.t+1;)t++;this.pinT.length=t;for(const n of this.pins)n.depth.length=Math.min(n.depth.length,t),n.level.length=Math.min(n.level.length,t);this.lastPinSample=t?this.pinT[t-1]:-1e9,this.pinsChanged(!1),this.world.resetFlow(),this.nextSnapT=Math.max(this.snapEvery,(Math.floor(e.t/this.snapEvery)+1)*this.snapEvery),this.ui.setTime(this.timeLabel(this.simT),this.simT/this.windowSec),this.showConditions(this.simT)}setPlaying(e){this.playing=e,this.ui.setPlaying(e)}seek(e){if(e=Math.max(0,Math.min(this.windowSec,e)),e<this.simT){const t=this.keyframeBefore(e);t?this.restoreSnapshot(t):this.restart()}else if(!this.pins.length){const t=this.keyframeBefore(e);t&&t.t>this.simT&&this.restoreSnapshot(t)}if(!this.pins.length){const t=this.snaps.filter(n=>n.t>=e&&n.t-e<120&&(!this.baseline||n.b)).sort((n,s)=>n.t-s.t)[0];t&&t.t!==this.simT&&(this.restoreSnapshot(t),e=t.t)}this.seekTarget=e}setTool(e){this.tool=e,this.draft=[],this.world.setDraft([],"wall"),this.ui.setTool(e),this.ui.setDraftInfo(0,0),document.body.style.cursor=e?"crosshair":"default"}bindPointer(e){let t=null;e.addEventListener("pointerdown",n=>{t={x:n.clientX,y:n.clientY,t:performance.now()},this.follow&&(this.follow=!1,this.ui.setActive("btnFollow",!1))}),e.addEventListener("pointerup",n=>{if(!t)return;const s=Math.hypot(n.clientX-t.x,n.clientY-t.y),r=performance.now()-t.t;if(t=null,s>5||r>600)return;if(this.pinMode){const l=this.world.raycastGround(n.clientX,n.clientY);l&&this.addPin(l.x,l.y);return}if(!this.tool){const l=this.world.pickMeasure(n.clientX,n.clientY);this.selectMeasure(l);return}const a=this.world.raycastGround(n.clientX,n.clientY);if(!a)return;let o={x:a.x,y:a.y};if(this.snapShore&&(this.tool==="wall"||this.tool==="sandbag")&&(o=this.snapToShore(o)),this.tool==="pump"){this.commitMeasure([o]);return}this.draft.push(o),this.world.setDraft(this.draft,this.tool),this.ui.setDraftInfo(this.draft.length,this.draftLength()),(this.tool==="culvert"||this.tool==="pipe")&&this.draft.length>=2&&this.finishDraft()}),e.addEventListener("dblclick",()=>{this.tool&&this.draft.length&&this.finishDraft()}),e.addEventListener("pointermove",n=>{if(!this.probeOn||n.buttons||!this.solver||!this.assets)return;const s=performance.now();if(s-this.probeT<90)return;this.probeT=s;const r=this.world.labelInset;if(n.clientX<r.l||n.clientX>innerWidth-r.r||n.clientY<r.t||n.clientY>innerHeight-r.b){this.ui.setProbe(null);return}const a=this.world.raycastGround(n.clientX,n.clientY);if(!a){this.ui.setProbe(null);return}const o=this.assets,l=o.meta.res,c=o.meta.cols,u=Math.floor(a.x/l),d=Math.floor(a.y/l);if(u<0||d<0||u>=c||d>=o.meta.rows){this.ui.setProbe(null);return}const h=d*c+u,f=this.solver.readCell(u,d),g=Math.max(0,this.solver.subgridOn?f.aux[3]:f.state[0]);this.ui.setProbe({sx:n.clientX,sy:n.clientY,depth:g,hmax:f.state[3],ground:o.dem[h],sea:!!o.mask[h]})}),e.addEventListener("pointerleave",()=>this.ui.setProbe(null)),window.addEventListener("keydown",n=>{const s=n.target.tagName;if(!(s==="INPUT"||s==="TEXTAREA"||s==="SELECT")){if(n.key==="Escape"&&(this.pinMode?this.setPinMode(!1):this.tool?this.setTool(null):this.selectMeasure(null)),n.key==="Enter"&&this.tool&&this.finishDraft(),n.key==="Backspace"&&this.tool&&(n.preventDefault(),this.undoVertex()),n.key==="Delete"&&this.selectedMeasure!==null&&!this.tool){const r=this.selectedMeasure;this.measures?.remove(r),this.selectedMeasure=null,this.measuresChanged()}n.key===" "&&s!=="BUTTON"&&(n.preventDefault(),this.setPlaying(!this.playing))}})}draftLength(){let e=0;for(let t=1;t<this.draft.length;t++)e+=Math.hypot(this.draft[t].x-this.draft[t-1].x,this.draft[t].y-this.draft[t-1].y);return e}undoVertex(){!this.tool||!this.draft.length||(this.draft.pop(),this.world.setDraft(this.draft,this.tool),this.ui.setDraftInfo(this.draft.length,this.draftLength()))}snapToShore(e){const t=this.assets;if(!t)return e;const n=t.meta.cols,s=t.meta.rows,r=t.meta.res,a=Math.floor(e.x/r),o=Math.floor(e.y/r);let l=e,c=1/0;if(a<0||o<0||a>=n||o>=s||!t.mask[o*n+a])return e;for(let u=o-3;u<=o+3;u++)for(let d=a-3;d<=a+3;d++){if(d<0||u<0||d>=n||u>=s)continue;const h=u*n+d;if(t.mask[h]||!(d>0&&t.mask[h-1]||d<n-1&&t.mask[h+1]||u>0&&t.mask[h-n]||u<s-1&&t.mask[h+n]))continue;const g=(d+.5)*r,_=(u+.5)*r,m=Math.hypot(g-e.x,_-e.y);m<c&&(c=m,l={x:g,y:_})}return l}finishDraft(){if(this.tool){if(this.draft.length===0){this.setTool(null);return}(this.tool==="wall"||this.tool==="sandbag"||this.tool==="culvert"||this.tool==="pipe")&&this.draft.length<2||this.commitMeasure(this.draft)}}commitMeasure(e){if(!this.measures||!this.tool)return;const t=this.ui.getMeasureParams(this.tool),n=this.ui.newRole,s=this.measures.add({kind:this.tool,pts:e,height:t.height,rate:t.rate,capacity:t.capacity,factor:t.factor,radius:t.radius,diameter:t.diameter||void 0,role:n,key:n==="whatif"?void 0:`${this.tool}_${Date.now().toString(36)}`});this.draft=[],this.world.setDraft([],"wall"),this.tool==="pump"||this.setTool(null),this.selectedMeasure=n==="whatif"&&this.tool==="pump"?null:s.id,this.measuresChanged()}selectMeasure(e){this.selectedMeasure=e,this.refreshMeasureViews()}measuresChanged(){if(!this.measures||!this.solver)return;const e=this.activeScenario();if(e&&!["A","B"].some(n=>e[n].measures==="all"||Array.isArray(e[n].measures))&&this.measures.measures.some(n=>(n.role??"whatif")==="whatif"&&!n.scenario_only)){this.flash(j("已切换到「无措施 vs 含措施」，右侧 B 含你画的措施",'Switched to "no measures vs with measures": side B includes what you drew')),this.setScenario("measures");return}this.applyMeasures();try{localStorage.setItem(this.measuresKey(),JSON.stringify(this.measures.toSaved(this.sceneId,this.assets.meta.origin)))}catch{}this.ui.setMeasuresDirty(!0,!1);const t=this.playing||this.simT>0;this.restart(),t&&this.setPlaying(!0)}async saveMeasures(){if(!this.measures||!this.assets)return;const e=this.measures.toSaved(this.sceneId,this.assets.meta.origin),t=JSON.stringify(e,null,1);this.download(`${this.sceneId}.measures.json`,t),this.flash(j("已下载 measures.json，放到 web/public/scenes/<场景>/ 即可生效","Downloaded measures.json; put it in web/public/scenes/<scene>/"))}exportMeasures(){!this.measures||!this.assets||this.download(`${this.sceneId}.measures.json`,JSON.stringify(this.measures.toSaved(this.sceneId,this.assets.meta.origin),null,1))}async importMeasures(e){if(!(!this.measures||!this.assets))try{const t=JSON.parse(await e.text());if(!Array.isArray(t.measures))throw new Error("no measures[]");this.measures.loadSaved(t,this.assets.meta.origin),this.measuresChanged(),this.flash(j(`已导入 ${t.measures.length} 项`,`Imported ${t.measures.length} measures`))}catch(t){this.flash(j(`导入失败：${t}`,`Import failed: ${t}`))}}revertMeasures(){try{localStorage.removeItem(this.measuresKey())}catch{}this.selectedMeasure=null,this.loadMeasures(),this.applyMeasures(),this.restart(),this.setPlaying(!0)}download(e,t,n="application/json"){const s=document.createElement("a");s.href=URL.createObjectURL(new Blob([t],{type:n})),s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(s.href),2e3)}flash(e){this.ui.setStatus(e),clearTimeout(this.flashTimer),this.flashTimer=window.setTimeout(()=>this.ui.setStatus(null),3500)}toggleCompare(){this.compare=!this.compare,this.ui.setCompare(this.compare),this.compare?(this.makeBaseline(),this.baseline.setDt(this.solver.dt)):(this.baseline?.dispose(),this.baseline=null,this.showBaseline=!1),this.applyMeasures(),this.applyParams(),this.refreshCharts(),this.syncSplit(),this.bindView(),this.restart(),this.setPlaying(!0)}syncSplit(){const e=document.getElementById("swipe");if(this.compare&&this.baseline&&this.solver){this.world.setBaselineTextures(this.baseline.stateTex,this.baseline.auxTex,this.baseline.faceModTex),this.world.split={frac:this.splitFrac,left:{state:this.baseline.stateTex,aux:this.baseline.auxTex},right:{state:this.solver.stateTex,aux:this.solver.auxTex}},e.style.display="block",e.style.left=`${this.splitFrac*100}%`;const t=this.activeScenario();this.ui.setStatus(t?j(`A/B 分屏：拖动中间的把手，左 A = ${t.A.zh}，右 B = ${t.B.zh}`,`Swipe view: drag the handle; left A = ${t.A.en}, right B = ${t.B.en}`):N("swipeHint")),setTimeout(()=>this.ui.setStatus(null),5e3)}else this.world.setBaselineTextures(null),this.world.split=null,e.style.display="none"}bindSwipe(){const e=document.querySelector("#swipe .handle"),t=document.getElementById("swipe");let n=!1;e.addEventListener("pointerdown",r=>{n=!0,e.setPointerCapture(r.pointerId),r.preventDefault()}),e.addEventListener("pointermove",r=>{n&&(this.splitFrac=Math.min(.95,Math.max(.05,r.clientX/window.innerWidth)),t.style.left=`${this.splitFrac*100}%`,this.world.split&&(this.world.split.frac=this.splitFrac))});const s=()=>{n=!1};e.addEventListener("pointerup",s),e.addEventListener("pointercancel",s)}cycleFlow(){this.flowMode=this.flowMode==="particles"?"arrows":this.flowMode==="arrows"?"none":"particles",this.world.setFlowMode(this.flowMode),this.ui.setFlowMode(this.flowMode)}peakSec(){const e=this.forcing;if(this.event.kind==="rainstorm"){let r=0,a=-1;for(let o=0;o<e.rainT.length;o++)e.rainMm[o]>a&&(a=e.rainMm[o],r=e.rainT[o]);return Math.min(this.windowSec,r+5400)}let n=0,s=-1/0;for(let r=0;r<e.tideT.length;r++)e.tideL[r]>s&&(s=e.tideL[r],n=e.tideT[r]);return Math.min(this.windowSec,n+1200)}jumpToPeak(){this.forcing&&(this.flyAfterSeek=!0,this.seek(this.peakSec()),this.setPlaying(!0))}hotspotLabels(e){const t=this.assets.meta.pois;return e.map(n=>{let s="",r=1/0;for(const a of t){const o=Math.hypot(a.x-n.x,a.y-n.y);o<r&&(r=o,s=a.name)}return{...n,name:s?`${s.split(" ")[0]}${r>250?` ${(r/1e3).toFixed(1)} km`:""}`:""}})}bindView(){const e=this.showBaseline&&this.baseline?this.baseline:this.solver;e&&this.world.setStateTextures(e.stateTex,e.auxTex)}tour(){const e=this.world.director;if(e.touring){e.stopTour();return}const n=this.assets.meta.pois.map(s=>this.world.viewAt(s.x,s.y,650));n.length||n.push(this.world.defaultView()),e.startTour(n),this.ui.setActive("btnTour",!0),this.ui.setStatus(N("tourRunning"))}refreshCharts(){const e=this.forcing,t=this.event;if(!e||!t)return;const n=this.assets.meta,s=n.gauge,r=e.tideT.map(f=>f/3600),a=e.tideT.map(f=>this.tideAt(f)),o=[],l=t.peaks_model[s],c=t.observed_peaks[s];if(c!==void 0&&l){const f=(fi(l.t).getTime()-e.start.getTime())/36e5+(n.tide_lag_min||0)/60;o.push({x:f,y:c,label:`${N("peakObs")} ${(c+.146).toFixed(2)} mCD`,color:hn.peak})}const u={kind:"line",xMin:0,xMax:e.hours,unit:"mPD",yLabel:"mPD",cursor:this.simT/3600,xTick:f=>this.tick(f),markers:o,series:[{name:j(`实测 ${s}`,`Observed ${s}`),color:hn.obs,x:r,y:e.obs},{name:j("天文潮","Astronomical"),color:hn.astro,x:r,y:e.astro,dashed:!0},{name:j("模型边界","Model boundary"),color:hn.model,x:r,y:a}]},d=(n.rain_mult[this.eventId]??1)*this.params.rainScale,h={kind:"bar",xMin:0,xMax:e.hours,unit:"mm/h",yLabel:"mm/h",cursor:this.simT/3600,xTick:f=>this.tick(f),series:[{name:j(`模型雨强（${t.rain.station} ×${d.toFixed(2)}）`,`Model rain (${t.rain.station} ×${d.toFixed(2)})`),color:hn.rain,x:e.rainT.map(f=>f/3600+.5),y:e.rainMm.map(f=>f*d)}]};this.ui.setCharts(u,h),this.ui.setValidation(n.validation[this.eventId]??[],this.metrics)}refreshLabels(){this.assets&&this.world.setLabels(this.labelItems(this.metrics))}labelItems(e){const t=this.assets.meta,n=(t.validation[this.eventId]??[]).map(r=>({id:`v_${r.id}`,x:r.x,y:r.y,text:j(r.zh,r.en),cls:`val ${r.cls}`,sub:e?`${j("实际","obs")}${r.lower?"≥":"≈"}${r.cls==="none"?"0":r.depth.toFixed(1)} m / ${j("模拟","sim")} ${(e.valDepths[r.id]??0).toFixed(2)} m`:r.cls==="none"?j("实际无水浸","no flooding"):`${j("实际","obs")}${r.lower?"≥":"≈"}${r.depth.toFixed(1)} m`}));for(const r of t.gauges)n.push({id:`g_${r.code}`,x:r.x,y:r.y,text:r.name,cls:"gauge",sub:e?`${(e.gaugeLevels[r.code]??0).toFixed(2)} mPD`:""});const s=new Set;if(e&&this.showFacilities){for(const a of t.facilities??[])if(a.ug){const o=e.facDepths?.[a.id]??0;s.add(a.id),n.push({id:`f_${a.id}`,x:a.x,y:a.y,text:`${ia[a.type]??""} ${a.name}`,cls:`facility ug ${o>=1?"severe":o>=.3?"moderate":"dry"}`,sub:`${j("地库","basement")} ${o.toFixed(2)} / ${a.ug.cap.toFixed(1)} m${o>=a.ug.cap-.05?j("，灌满",", full"):o>=1?j("，地下一层淹没",", level flooded"):""}`})}const r=(t.facilities??[]).map(a=>({f:a,d:Math.max(e.facDepths?.[a.id]??0,this.baseMetrics?.facDepths?.[a.id]??0)})).filter(a=>a.d>=.3&&!a.f.ug).sort((a,o)=>o.d-a.d).slice(0,10);for(const{f:a,d:o}of r)s.add(a.id),n.push({id:`f_${a.id}`,x:a.x,y:a.y,text:`${ia[a.type]??""} ${a.name}`,cls:`facility ${o>=.5?"severe":"moderate"}`,sub:`${(e.facDepths?.[a.id]??0).toFixed(2)} m`})}if(this.showLandmarks){for(const[a,o]of t.pois.entries())n.push({id:`p_${a}`,x:o.x,y:o.y,text:o.name,cls:"landmark place"});const r=["mtr","hospital","mall","ferry"];for(const a of t.facilities??[])r.includes(a.type)&&!s.has(a.id)&&n.push({id:`l_${a.id}`,x:a.x,y:a.y,text:`${ia[a.type]??""} ${a.name}`,cls:"landmark"})}if(this.showMeasureLabels&&this.measures){const r=this.ctx(!0);for(const a of this.measures.measures){const o=a.role??"whatif";if(o==="whatif")continue;let l=0,c=0;if(a.pts.length){for(const f of a.pts)l+=f.x,c+=f.y;l/=a.pts.length,c/=a.pts.length}else if(a.cells?.length){const f=a.cells[Math.floor(a.cells.length/2)],g=t.cols,_=t.res;l=(f%g+.5)*_,c=(Math.floor(f/g)+.5)*_}else continue;const u=this.measures.effect(a,r),d=o==="record"?a.built?a.built>="2026"?`${j("计划","planned")} ${a.built.slice(0,4)}`:a.built:"":a.from_h!==void 0&&a.from_h!==null?`${this.tick(a.from_h)} ${j("起","on")}`:"",h=a.info?j("仅标注","noted"):u>0?j("生效","active"):u<0?j("当时未建","not yet built"):o==="temporary"?j("未启用","inactive"):j("未建","not built");n.push({id:`m_${a.id}`,x:l,y:c,text:j(a.name??a.key??"",a.name_en??a.name??a.key??""),cls:`measure ${o} ${a.info?"info":u===0?"off":u<0?"removed":"on"}`,sub:`${o==="record"?j("记录","record"):j("临时","temporary")}${d?" · "+d:""} · ${h}`})}}for(const r of this.pins){const a=r.depth.length?r.depth[r.depth.length-1]:null;n.push({id:`u_${r.id}`,x:r.x,y:r.y,text:r.name,cls:"upin",color:r.color,sub:a===null?"":`${a.toFixed(2)} m`})}return n}setPinMode(e){this.pinMode=e,e&&this.tool&&this.setTool(null),this.ui.setActive("btnPin",e),document.body.style.cursor=e?"crosshair":"default",this.ui.setStatus(e?N("pinHint"):null)}addPin(e,t){const n=this.pinSeq++;this.pins.push({id:n,name:`${j("钉点","Pin")} ${n}`,x:e,y:t,color:um[(n-1)%um.length],depth:[],level:[]}),this.selPin=n,this.setPinMode(!1);const s=this.simT,r=this.playing||s>0;this.restart(),s>0&&this.seek(s),r&&this.setPlaying(!0),this.refreshLabels()}samplePins(e){const t=this.assets,n=t.meta.res,s=t.meta.cols;this.pinT.push(this.simT);for(const r of this.pins){const a=Math.floor(r.x/n),o=Math.floor(r.y/n),l=e.readCell(a,o),c=Math.max(0,e.subgridOn?l.aux[3]:l.state[0]);r.depth.push(c),r.level.push((t.dem[o*s+a]??0)+c)}this.lastPinSample=this.simT}pinsChanged(e=!0){const t=this.forcing;this.ui.setPins(this.pins,this.pinT.map(n=>n/3600),this.selPin,t?{hours:t.hours,tide:{x:t.tideT.map(n=>n/3600),y:t.tideT.map(n=>this.tideAt(n))},rain:{x:t.rainT.map(n=>n/3600),y:t.rainT.map(n=>this.rainMmAt(n))},cursor:this.simT/3600,xTick:n=>this.tick(n)}:null),e&&this.assets&&this.refreshLabels()}exportPins(){if(!this.pins.length||!this.forcing)return;const e=["time_hkt","hours","boundary_sea_level_mPD","rain_mm_per_h",...this.pins.flatMap(r=>[`${r.name} depth_m`,`${r.name} water_level_mPD`])],t=this.pinT.map((r,a)=>[this.timeLabel(r).replace(" HKT",""),(r/3600).toFixed(3),this.tideAt(r).toFixed(3),this.rainMmAt(r).toFixed(1),...this.pins.flatMap(o=>[o.depth[a]?.toFixed(3)??"",o.level[a]?.toFixed(3)??""])]),s=[`# HK Flood Lab pins · scene ${this.sceneId} · event ${this.eventId} · ${this.pins.map(r=>`${r.name} (x ${r.x.toFixed(0)} m, y ${r.y.toFixed(0)} m)`).join("; ")}`,e.map(r=>`"${r.replace(/"/g,'""')}"`).join(","),...t.map(r=>r.join(","))].join(`
`);this.download(`${this.sceneId}_${this.eventId}_pins.csv`,"\uFEFF"+s,"text/csv")}syncLabelInset(){const e=r=>{const a=document.getElementById(r);return a&&a.offsetParent&&getComputedStyle(a).display!=="none"?a.getBoundingClientRect():null},t=e("left"),n=e("right"),s=e("bottom");this.world.labelInset={l:t?t.right:0,r:n?window.innerWidth-n.left:0,t:document.querySelector(".topbar")?.getBoundingClientRect().bottom??60,b:s?window.innerHeight-s.top:0}}cameraPreset(e){if(e==="follow"){this.follow=!this.follow,this.ui.setActive("btnFollow",this.follow),this.followAt=null,this.follow&&this.followHotspot();return}this.follow&&(this.follow=!1,this.ui.setActive("btnFollow",!1)),e==="street"&&this.view2d&&this.setView2D(!1);const t=this.metrics?.hotspots?.[0];this.world.cameraPreset(e,e==="street"&&t?{x:t.x,y:t.y}:void 0)}followHotspot(){const e=this.metrics?.hotspots?.[0];e&&(this.followAt&&Math.hypot(this.followAt.x-e.x,this.followAt.y-e.y)<150||(this.followAt={x:e.x,y:e.y},this.world.director.flyTo(this.world.viewAt(e.x,e.y,520),2.2)))}computeMetrics(e,t="A"){const n=this.assets,s=n.meta,r=s.cols,a=s.rows,o=s.res,l=e.readState(),c=e.readAux(),u=e.subgridOn,d=n.mask,h=n.bldh;let f=0,g=0,_=0,m=0,p=0;const x=t==="A"?this.spawnA:this.spawnB;let y=0;const w=Math.max(1,Math.round(150/o)),F=Math.ceil(r/w),C=new Float32Array(F*Math.ceil(a/w)),R=new Int32Array(C.length).fill(-1),U=new Float32Array(C.length),ne=new Int32Array(C.length),S=Math.ceil(300/o);for(let k=0;k<r*a;k++){if(d[k])continue;const ie=u?c[k*4+3]:l[k*4];ie>p&&(p=ie);const pe=k%r,le=k/r|0;if(pe<S||le<S||pe>=r-S||le>=a-S)continue;const oe=c[k*4+1];if(ie>.06&&oe>.12&&h[k]===0&&y*2+3<x.length&&(x[y*2]=(pe+.5)*o,x[y*2+1]=(le+.5)*o,y++,oe>.6&&(x[y*2]=(pe+.5)*o,x[y*2+1]=(le+.5)*o,y++)),h[k]>0||n.dem[k]<2||n.basin[k]||n.rim[k]||n.steep[k])continue;const me=ie;me>f&&(f=me),me>.15&&g++,me>.5&&_++,m+=me;const he=l[k*4+3],se=(le/w|0)*F+(pe/w|0);he>C[se]&&(C[se]=he,R[se]=k),he>=.3&&(U[se]+=Math.min(he,1.5),ne[se]++)}this.world.setFlowSpawn(t,x,y);const b=[];for(let k=0;k<C.length;k++)ne[k]>=3&&b.push(k);b.sort((k,ie)=>U[ie]-U[k]);const W=[];for(const k of b){const ie=R[k],pe=(ie%r+.5)*o,le=((ie/r|0)+.5)*o;if(W.every(oe=>Math.hypot(oe.x-pe,oe.y-le)>=350)&&W.push({x:pe,y:le,depth:C[k],area:ne[k]*o*o}),W.length>=6)break}let B=0;for(const k of n.buildings){const ie=Math.min(r-1,Math.max(0,Math.floor(k.c[0]/o))),pe=Math.min(a-1,Math.max(0,Math.floor(k.c[1]/o)));let le=0;for(let oe=-1;oe<=1;oe++)for(let me=-1;me<=1;me++){const he=ie+me,se=pe+oe;if(he<0||se<0||he>=r||se>=a)continue;const fe=se*r+he;d[fe]||n.steep[fe]||(le=Math.max(le,l[fe*4+3]))}le>.15&&B++}const Y={};for(const k of s.facilities??[])if(k.ug){let ie=0;for(const pe of k.ug.cells)ie+=c[pe*4];Y[k.id]=ie*o*o/k.ug.area}else Y[k.id]=this.maxDepthNear(l,k.x,k.y,60);const J={};for(const k of s.validation[this.eventId]??[])J[k.id]=k.ug?Y[k.ug]??0:k.berm!==void 0?Math.max(0,this.peakTideSoFar(e.time,this.sideModOf(e===this.baseline?"A":"B"))-k.berm):this.maxDepthNear(l,k.x,k.y,60);const K={};for(const k of s.gauges){const ie=Math.floor(k.x/o),pe=Math.floor(k.y/o);let le=-1,oe=1e9;for(let me=-3;me<=3;me++)for(let he=-3;he<=3;he++){const se=ie+he,fe=pe+me;if(se<0||fe<0||se>=r||fe>=a)continue;const xe=fe*r+se;if(!d[xe])continue;const ge=he*he+me*me;ge<oe&&(oe=ge,le=xe)}le>=0&&(K[k.code]=l[le*4]-6)}return{t:e.time,maxDepth:f,maxDepthAll:p,floodedAreaKm2:g*o*o/1e6,floodedAreaSevereKm2:_*o*o/1e6,buildingsAffected:B,volumeMm3:m*o*o/1e6,valDepths:J,gaugeLevels:K,hotspots:W,facDepths:Y}}peakTideSoFar(e,t=$r){const n=this.forcing;let s=-99;for(let r=0;r<n.tideT.length;r++){const a=n.tideT[r];a<0||a>e||(s=Math.max(s,this.tideAt(a,t)))}return Math.max(s,this.tideAt(Math.max(0,e),t))}maxDepthNear(e,t,n,s){const r=this.assets,a=r.meta.cols,o=r.meta.rows,l=r.meta.res,c=Math.floor(t/l),u=Math.floor(n/l),d=Math.ceil(s/l);let h=0;for(let f=u-d;f<=u+d;f++)for(let g=c-d;g<=c+d;g++){if(g<0||f<0||g>=a||f>=o)continue;const _=f*a+g;r.mask[_]||r.bldh[_]>0||r.dem[_]<2.4||r.basin[_]||r.rim[_]||r.steep[_]||Math.hypot((g+.5)*l-t,(f+.5)*l-n)>s||e[_*4+3]>h&&(h=e[_*4+3])}return h}frame(){requestAnimationFrame(()=>this.frame());const e=performance.now(),t=Math.min(.1,(e-this.lastFrame)/1e3);this.lastFrame=e;const n=this.solver;if(n&&this.forcing){let s=0,r=260;if(this.seekTarget!==null)if(s=Math.min(this.seekTarget-this.simT,r*n.dt*2),r=520,s<=0){if(this.seekTarget=null,this.ui.setStatus(null),this.flyAfterSeek){this.flyAfterSeek=!1,this.metrics=this.computeMetrics(n,"A");const d=this.metrics.hotspots??[];d.length&&this.world.director.flyTo(this.world.viewAt(d[0].x,d[0].y,520),2.5)}}else this.ui.setStatus(`${N("ffwd")} ${this.timeLabel(this.simT)}`);else this.playing&&(s=this.speed*t);if(this.tickMeasures(),s>0&&this.simT<this.windowSec){let d=Math.min(r,Math.max(1,Math.round(s/n.dt)));const h=(Math.floor(this.simT/Wr+1e-6)+1)*Wr;d=Math.max(1,Math.min(d,Math.ceil((h-this.simT)/n.dt-1e-6)));const f=this.simT+d*n.dt/2,g=this.sideModOf("B"),_=this.tideAt(f,g),m=this.rainAt(f,g),p=this.hsAt(f,g);if(n.step(d,_,m,p),this.baseline){const w=this.sideModOf("A");this.baseline.step(d,this.tideAt(f,w),this.rainAt(f,w),this.hsAt(f,w))}const x=this.simT;this.simT+=d*n.dt,this.world.advanceSim(d*n.dt),Math.floor(this.simT/Wr+1e-6)>Math.floor(x/Wr+1e-6)&&this.simT<this.windowSec&&this.checkpoint(),this.simT>=this.windowSec&&(this.simT=this.windowSec,this.setPlaying(!1),this.seekTarget=null,this.ui.setStatus(null)),this.ui.setTime(this.timeLabel(this.simT),this.simT/this.windowSec);const y=this.stormParts(this.simT);this.ui.setConditions({signal:y.sig,storm:y.dist,tide:_,rain:m*36e5,hs:p,dt:n.dt,n:d}),this.pins.length&&this.simT-this.lastPinSample>=300&&this.samplePins(n)}e-this.lastMetrics>700&&this.simT>0&&(this.metrics===null||this.simT!==this.metricsT)&&(this.lastMetrics=e,this.metricsT=this.simT,this.metrics=this.computeMetrics(n,"A"),this.baseline&&(this.baseMetrics=this.computeMetrics(this.baseline,"B")),this.ui.setMetrics(this.metrics,this.compare?this.baseMetrics:null),this.ui.setHotspots(this.hotspotLabels(this.metrics.hotspots??[])),this.ui.setValidation(this.assets.meta.validation[this.eventId]??[],this.metrics),this.ui.setChartCursor(this.simT/3600),this.syncLabelInset(),this.world.setLabels(this.labelItems(this.metrics)),this.ui.setFacilities(this.metrics,this.compare?this.baseMetrics:null),this.world.setBasements(this.basementItems(this.metrics)),this.pins.length&&this.pinsChanged(!1),this.follow&&this.followHotspot());const a=this.rainMmAt(this.simT),o=this.forcing,l=this.tideAt(this.simT)-Va(o.tideT,o.astro,this.simT,o.astro),c=Math.min(1,Math.max(l/2.2,a/70,.1)),u=(o.start.getTime()/36e5+8+this.simT/3600)%24;this.world.setWeather(a,c,u),this.playing&&this.simT<this.windowSec&&!nA&&a>35&&e-this.lastLightning>4e3&&Math.random()<.02&&(this.world.lightning(),this.lastLightning=e)}this.world.render(t)}}const nA=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function Va(i,e,t,n){if(!i.length)return 0;if(t<=i[0])return e[0];if(t>=i[i.length-1])return e[e.length-1];let s=0,r=i.length-1;for(;r-s>1;){const o=s+r>>1;i[o]<=t?s=o:r=o}const a=(t-i[s])/(i[r]-i[s]);return e[s]+(e[r]-e[s])*a}window.addEventListener("DOMContentLoaded",()=>{window.app=new tA});
