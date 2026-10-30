var Pg=Object.defineProperty;var Dg=(i,e,t)=>e in i?Pg(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var W=(i,e,t)=>Dg(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Lg(i,e,t,n,s=1){const r=t*n,a=new Float32Array(r),o=new Uint8Array(r),l=[],c=[],u=(f,v)=>{l.push(f),c.push(v);let _=l.length-1;for(;_>0;){const m=_-1>>1;if(l[m]<=l[_])break;[l[m],l[_]]=[l[_],l[m]],[c[m],c[_]]=[c[_],c[m]],_=m}},d=()=>{const f=l[0],v=c[0],_=l.pop(),m=c.pop();if(l.length){l[0]=_,c[0]=m;let p=0;for(;;){const x=2*p+1,y=x+1;let w=p;if(x<l.length&&l[x]<l[w]&&(w=x),y<l.length&&l[y]<l[w]&&(w=y),w===p)break;[l[w],l[p]]=[l[p],l[w]],[c[w],c[p]]=[c[p],c[w]],p=w}}return[f,v]};for(let f=0;f<r;f++){const v=f%t,_=f/t|0;(e[f]||v===0||_===0||v===t-1||_===n-1)&&(o[f]=1,a[f]=e[f]?-1e9:i[f],u(a[f],f))}for(;l.length;){const[f,v]=d(),_=v%t,m=v/t|0,p=[v-1,v+1,v-t,v+t];for(let x=0;x<4;x++){if(x===0&&_===0||x===1&&_===t-1||x===2&&m===0||x===3&&m===n-1)continue;const y=p[x];o[y]||(o[y]=1,a[y]=Math.max(f,i[y]),u(a[y],y))}}const h=new Uint8Array(r);for(let f=0;f<r;f++)!e[f]&&a[f]-i[f]>s&&(h[f]=1);return h}function Ig(i,e,t,n,s){const r=n*s,a=new Uint8Array(r).fill(99);for(let l=0;l<s;l++)for(let c=0;c<n;c++){const u=l*n+c;if(e[u]){a[u]=0;continue}let d=99;for(let h=-3;h<=3;h++)for(let f=-3;f<=3;f++){const v=c+f,_=l+h;if(!(v<0||_<0||v>=n||_>=s)&&e[_*n+v]===1){const m=Math.max(Math.abs(f),Math.abs(h));m<d&&(d=m)}}a[u]=d}const o=new Uint8Array(r);for(let l=0;l<s;l++)for(let c=0;c<n;c++){const u=l*n+c;if(e[u]||a[u]>2)continue;let d=!1;for(let h=-3;h<=3&&!d;h++)for(let f=-3;f<=3;f++){const v=c+f,_=l+h;if(v<0||_<0||v>=n||_>=s)continue;const m=_*n+v;if(!e[m]&&t[m]>0&&a[m]>a[u]&&i[m]>i[u]+.3){d=!0;break}}d&&(o[u]=1)}return o}function Ug(i,e,t,n,s,r=3,a=.5){const o=new Float32Array(n*s);for(let l=0;l<s;l++)for(let c=0;c<n;c++){const u=l*n+c,d=t[u];if(d<=0||e[u])continue;let h=u,f=i[u];for(let v=-r;v<=r;v++)for(let _=-r;_<=r;_++){const m=c+_,p=l+v;if(m<0||p<0||m>=n||p>=s)continue;const x=p*n+m;if(e[x])continue;const y=i[x];y>f&&y<=i[u]+8&&(f=y,h=x)}f-i[u]>=a?o[h]=Math.max(o[h],d):o[u]=Math.max(o[u],d)}return o}const co="./".replace(/\/$/,"");async function Js(i){const e=await fetch(i,{cache:"no-cache"});if(!e.ok)throw new Error(`${i}: ${e.status}`);return e.json()}async function ps(i,e){const t=await fetch(i);if(!t.ok)throw new Error(`${i}: ${t.status}`);const n=await t.arrayBuffer();if(n.byteLength!==e*4)throw new Error(`${i}: unexpected size ${n.byteLength}`);return new Float32Array(n)}async function Fg(i,e){const t=await fetch(i);if(!t.ok)throw new Error(`${i}: ${t.status}`);const n=await t.arrayBuffer();if(n.byteLength!==e)throw new Error(`${i}: unexpected size ${n.byteLength}`);return new Uint8Array(n)}function Ld(i){return new Promise(e=>{const t=new Image;t.crossOrigin="anonymous",t.onload=()=>e(t),t.onerror=()=>e(null),t.src=i})}function ms(i,e,t){const n=new i.constructor(i.length);for(let s=0;s<t;s++)n.set(i.subarray(s*e,(s+1)*e),(t-1-s)*e);return n}async function Ng(){return Js(`${co}/scenes/index.json`)}async function kg(){return Js(`${co}/events/index.json`)}async function Og(i){return Js(`${co}/events/${i}.json`)}async function zg(i){try{const e=await Js(`${co}/scenes/${i}/scenarios.json`);return Array.isArray(e.scenarios)?e.scenarios:[]}catch{return[]}}async function Bg(i,e){const t=`${co}/scenes/${i}`;e?.(.05,"meta");const n=await Js(`${t}/meta.json`),s=n.cols,r=n.rows;e?.(.15,"dem");const[a,o,l,c,u,d,h,f,v]=await Promise.all([ps(`${t}/dem.bin`,s*r),Fg(`${t}/mask.bin`,s*r),ps(`${t}/bldh.bin`,s*r).catch(()=>new Float32Array(s*r)),ps(`${t}/expo.bin`,s*r).catch(()=>new Float32Array(s*r)),Js(`${t}/buildings.json`).catch(()=>({buildings:[]})),ps(`${t}/chan.bin`,s*r*3).catch(()=>ps(`${t}/chan.bin`,s*r).then(S=>{const b=new Float32Array(s*r*3);for(let H=0;H<s*r;H++)b[H*3]=S[H],b[H*3+2]=.05;return b})).catch(()=>new Float32Array(s*r*3)),ps(`${t}/ug.bin`,s*r).catch(()=>new Float32Array(s*r)),ps(`${t}/sg_cell.bin`,s*r*8).catch(()=>null),ps(`${t}/sg_face.bin`,s*r*8).catch(()=>null)]),_=await Js(`${t}/measures.json`).catch(()=>null);e?.(.55,"textures");const[m,p]=await Promise.all([Ld(`${t}/imagery.jpg`),Ld(`${t}/basemap.jpg`)]);e?.(.95,"done");const x=ms(a,s,r),y=ms(o,s,r),w=Lg(x,y,s,r,2),I=ms(l,s,r),C=Ug(x,y,ms(c,s,r),s,r),P=Ig(x,y,C,s,r),U=f?ms(f,s*8,r):null,ie=new Uint8Array(s*r);if(U)for(let S=0;S<s*r;S++)U[S*8+7]-U[S*8]>3&&(ie[S]=1);return{meta:n,dem:x,mask:y,bldh:I,expo:C,basin:w,rim:P,chan:ms(d,s*3,r),ug:ms(h,s,r),sgCell:U,sgFace:v?ms(v,s*8,r):null,steep:ie,buildings:u.buildings,imagery:m,basemap:p,savedMeasures:_}}const Vr={slr:0,rainScale:1,tideScale:1},Hg=i=>i?{slr:i.slr??0,rainScale:i.rain_scale??1,tideScale:i.tide_scale??1}:Vr,Id={zh:"现状",en:"Today",measures:"records"},Vg=[{id:"measures",generic:!0,zh:"无措施 vs 含措施",en:"No measures vs with measures",desc_zh:"左侧只有实际工程和有记录的临时措施；右侧再加上你在「措施」里画的情景措施。",desc_en:"Left: built records and documented temporary measures only; right: plus the what-if measures you drew under Measures.",A:{zh:"无措施",en:"No measures",measures:"records"},B:{zh:"含措施",en:"With measures",measures:"all"}},{id:"slr-0.5",generic:!0,kinds:["typhoon","fictional"],zh:"现状 vs 海平面上升 +0.5 m",en:"Today vs sea-level rise +0.5 m",desc_zh:"情景假设，不是预报：边界潮位整体加 0.5 m。天文台（IPCC AR6）鲗鱼涌预估，SSP2-4.5 下相对 1995–2014 年：2050 年 +0.20 m（0.13–0.28），2060 年 +0.26 m（0.17–0.37）；+0.5 m 是本世纪后期的量级，或高排放情景下更早出现。",desc_en:"A what-if, not a forecast: +0.5 m on the boundary level. HKO (IPCC AR6) for Quarry Bay, SSP2-4.5, relative to 1995–2014: +0.20 m by 2050 (0.13–0.28), +0.26 m by 2060 (0.17–0.37); +0.5 m is a late-century magnitude, or earlier under high emissions.",A:Id,B:{zh:"海平面 +0.5 m",en:"Sea level +0.5 m",measures:"records",slr:.5}},{id:"rain-1.2",generic:!0,kinds:["rainstorm"],zh:"现状 vs 雨强 ×1.2",en:"Today vs rainfall ×1.2",desc_zh:"情景假设，不是预报：逐时雨强 ×1.2。按 Clausius–Clapeyron 关系，极端小时雨强每升温 1 °C 约增 7%，升温 3 °C 约 +20%。",desc_en:"A what-if, not a forecast: hourly rain ×1.2. Clausius–Clapeyron scaling gives about +7 % per °C for extreme hourly rain, so +3 °C ≈ +20 %.",A:Id,B:{zh:"雨强 ×1.2",en:"Rain ×1.2",measures:"records",rain_scale:1.2}}];function Gg(i,e){const t=(i??[]).filter(s=>!s.events?.length||s.events.includes(e.id)).map(s=>({...s,generic:!1})),n=Vg.filter(s=>!s.kinds||s.kinds.includes(e.kind));return[...t,...n]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Su="169",Ci={ROTATE:0,DOLLY:1,PAN:2},As={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wg=0,Ud=1,$g=2,lm=1,Xg=2,ts=3,Ls=0,Xn=1,ri=2,Ps=0,Qs=1,fh=2,Fd=3,Nd=4,qg=5,Ys=100,jg=101,Yg=102,Kg=103,Zg=104,Jg=200,Qg=201,ev=202,tv=203,ph=204,mh=205,nv=206,iv=207,sv=208,rv=209,av=210,ov=211,lv=212,cv=213,hv=214,gh=0,vh=1,_h=2,na=3,xh=4,yh=5,Mh=6,Sh=7,cm=0,uv=1,dv=2,Ds=0,fv=1,pv=2,mv=3,gv=4,vv=5,_v=6,xv=7,hm=300,ia=301,sa=302,wh=303,bh=304,Vl=306,Th=1e3,Wn=1001,Eh=1002,kt=1003,yv=1004,So=1005,mi=1006,Mc=1007,Cs=1008,os=1009,um=1010,dm=1011,to=1012,wu=1013,ir=1014,Un=1015,ho=1016,bu=1017,Tu=1018,ra=1020,fm=35902,pm=1021,mm=1022,An=1023,gm=1024,vm=1025,Kr=1026,aa=1027,Eu=1028,Au=1029,_m=1030,Cu=1031,Ru=1033,cl=33776,hl=33777,ul=33778,dl=33779,Ah=35840,Ch=35841,Rh=35842,Ph=35843,Dh=36196,Lh=37492,Ih=37496,Uh=37808,Fh=37809,Nh=37810,kh=37811,Oh=37812,zh=37813,Bh=37814,Hh=37815,Vh=37816,Gh=37817,Wh=37818,$h=37819,Xh=37820,qh=37821,fl=36492,jh=36494,Yh=36495,xm=36283,Kh=36284,Zh=36285,Jh=36286,Mv=3200,Sv=3201,wv=0,bv=1,Es="",di="srgb",Us="srgb-linear",Pu="display-p3",Gl="display-p3-linear",yl="linear",Vt="srgb",Ml="rec709",Sl="p3",Tr=7680,kd=519,Tv=512,Ev=513,Av=514,ym=515,Cv=516,Rv=517,Pv=518,Dv=519,Od=35044,Zn="300 es",ns=2e3,wl=2001;class cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zd=1234567;const Zr=Math.PI/180,no=180/Math.PI;function hr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function yn(i,e,t){return Math.max(e,Math.min(t,i))}function Du(i,e){return(i%e+e)%e}function Lv(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Iv(i,e,t){return i!==e?(t-i)/(e-i):0}function Wa(i,e,t){return(1-t)*i+t*e}function Uv(i,e,t,n){return Wa(i,e,1-Math.exp(-t*n))}function Fv(i,e=1){return e-Math.abs(Du(i,e*2)-e)}function Nv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function kv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ov(i,e){return i+Math.floor(Math.random()*(e-i+1))}function zv(i,e){return i+Math.random()*(e-i)}function Bv(i){return i*(.5-Math.random())}function Hv(i){i!==void 0&&(zd=i);let e=zd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vv(i){return i*Zr}function Gv(i){return i*no}function Wv(i){return(i&i-1)===0&&i!==0}function $v(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qv(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Gn={DEG2RAD:Zr,RAD2DEG:no,generateUUID:hr,clamp:yn,euclideanModulo:Du,mapLinear:Lv,inverseLerp:Iv,lerp:Wa,damp:Uv,pingpong:Fv,smoothstep:Nv,smootherstep:kv,randInt:Ov,randFloat:zv,randFloatSpread:Bv,seededRandom:Hv,degToRad:Vv,radToDeg:Gv,isPowerOfTwo:Wv,ceilPowerOfTwo:$v,floorPowerOfTwo:Xv,setQuaternionFromProperEuler:qv,normalize:Hn,denormalize:Gr};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,n,s,r,a,o,l,c){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],v=n[8],_=s[0],m=s[3],p=s[6],x=s[1],y=s[4],w=s[7],I=s[2],C=s[5],P=s[8];return r[0]=a*_+o*x+l*I,r[3]=a*m+o*y+l*C,r[6]=a*p+o*w+l*P,r[1]=c*_+u*x+d*I,r[4]=c*m+u*y+d*C,r[7]=c*p+u*w+d*P,r[2]=h*_+f*x+v*I,r[5]=h*m+f*y+v*C,r[8]=h*p+f*w+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,v=t*d+n*h+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Sc.makeScale(e,t)),this}rotate(e){return this.premultiply(Sc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sc=new ht;function Mm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jv(){const i=bl("canvas");return i.style.display="block",i}const Bd={};function pl(i){i in Bd||(Bd[i]=!0,console.warn(i))}function Yv(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Kv(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zv(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Hd=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vd=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Aa={[Us]:{transfer:yl,primaries:Ml,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[di]:{transfer:Vt,primaries:Ml,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Gl]:{transfer:yl,primaries:Sl,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Vd),fromReference:i=>i.applyMatrix3(Hd)},[Pu]:{transfer:Vt,primaries:Sl,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Vd),fromReference:i=>i.applyMatrix3(Hd).convertLinearToSRGB()}},Jv=new Set([Us,Gl]),At={enabled:!0,_workingColorSpace:Us,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Jv.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Aa[e].toReference,s=Aa[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Aa[i].primaries},getTransfer:function(i){return i===Es?yl:Aa[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Aa[e].luminanceCoefficients)}};function Jr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Er;class Qv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Er===void 0&&(Er=bl("canvas")),Er.width=e.width,Er.height=e.height;const n=Er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jr(t[n]/255)*255):t[n]=Jr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e_=0;class Sm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bc(s[a].image)):r.push(bc(s[a]))}else r=bc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function bc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t_=0;class Fn extends cr{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,n=Wn,s=Wn,r=mi,a=Cs,o=An,l=os,c=Fn.DEFAULT_ANISOTROPY,u=Es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=hr(),this.name="",this.source=new Sm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Th:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Eh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Th:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Eh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=hm;Fn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,t=0,n=0,s=1){en.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],v=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,w=(f+1)/2,I=(p+1)/2,C=(u+h)/4,P=(d+_)/4,U=(v+m)/4;return y>w&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=C/n,r=P/n):w>I?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=C/s,r=U/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=P/r,s=U/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-v)*(m-v)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(d-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n_ extends cr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Fn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends n_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wm extends Fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class i_ extends Fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const h=r[a+0],f=r[a+1],v=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=v,e[t+3]=_;return}if(d!==_||l!==h||c!==f||u!==v){let m=1-o;const p=l*h+c*f+u*v+d*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const I=Math.sqrt(y),C=Math.atan2(I,p*x);m=Math.sin(m*C)/I,o=Math.sin(o*C)/I}const w=o*x;if(l=l*m+h*w,c=c*m+f*w,u=u*m+v*w,d=d*m+_*w,m===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=I,c*=I,u*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],v=r[a+3];return e[t]=o*v+u*d+l*f-c*h,e[t+1]=l*v+u*h+c*d-o*f,e[t+2]=c*v+u*f+o*h-l*d,e[t+3]=u*v-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*v,this._y=c*f*d-h*u*v,this._z=c*u*v+h*f*d,this._w=c*u*d-h*f*v;break;case"YXZ":this._x=h*u*d+c*f*v,this._y=c*f*d-h*u*v,this._z=c*u*v-h*f*d,this._w=c*u*d+h*f*v;break;case"ZXY":this._x=h*u*d-c*f*v,this._y=c*f*d+h*u*v,this._z=c*u*v+h*f*d,this._w=c*u*d-h*f*v;break;case"ZYX":this._x=h*u*d-c*f*v,this._y=c*f*d+h*u*v,this._z=c*u*v-h*f*d,this._w=c*u*d+h*f*v;break;case"YZX":this._x=h*u*d+c*f*v,this._y=c*f*d+h*u*v,this._z=c*u*v-h*f*d,this._w=c*u*d-h*f*v;break;case"XZY":this._x=h*u*d-c*f*v,this._y=c*f*d-h*u*v,this._z=c*u*v+h*f*d,this._w=c*u*d+h*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tc.copy(this).projectOnVector(e),this.sub(Tc)}reflect(e){return this.sub(Tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tc=new O,Gd=new sr;class Bi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mi):Mi.fromBufferAttribute(r,a),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wo.copy(n.boundingBox)),wo.applyMatrix4(e.matrixWorld),this.union(wo)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ca),bo.subVectors(this.max,Ca),Ar.subVectors(e.a,Ca),Cr.subVectors(e.b,Ca),Rr.subVectors(e.c,Ca),gs.subVectors(Cr,Ar),vs.subVectors(Rr,Cr),Bs.subVectors(Ar,Rr);let t=[0,-gs.z,gs.y,0,-vs.z,vs.y,0,-Bs.z,Bs.y,gs.z,0,-gs.x,vs.z,0,-vs.x,Bs.z,0,-Bs.x,-gs.y,gs.x,0,-vs.y,vs.x,0,-Bs.y,Bs.x,0];return!Ec(t,Ar,Cr,Rr,bo)||(t=[1,0,0,0,1,0,0,0,1],!Ec(t,Ar,Cr,Rr,bo))?!1:(To.crossVectors(gs,vs),t=[To.x,To.y,To.z],Ec(t,Ar,Cr,Rr,bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qi=[new O,new O,new O,new O,new O,new O,new O,new O],Mi=new O,wo=new Bi,Ar=new O,Cr=new O,Rr=new O,gs=new O,vs=new O,Bs=new O,Ca=new O,bo=new O,To=new O,Hs=new O;function Ec(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hs.fromArray(i,r);const o=s.x*Math.abs(Hs.x)+s.y*Math.abs(Hs.y)+s.z*Math.abs(Hs.z),l=e.dot(Hs),c=t.dot(Hs),u=n.dot(Hs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const s_=new Bi,Ra=new O,Ac=new O;class Hi{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):s_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);const t=Ra.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ra,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(Ac)),this.expandByPoint(Ra.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ji=new O,Cc=new O,Eo=new O,_s=new O,Rc=new O,Ao=new O,Pc=new O;class uo{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Cc.copy(e).add(t).multiplyScalar(.5),Eo.copy(t).sub(e).normalize(),_s.copy(this.origin).sub(Cc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Eo),o=_s.dot(this.direction),l=-_s.dot(Eo),c=_s.lengthSq(),u=Math.abs(1-a*a);let d,h,f,v;if(u>0)if(d=a*l-o,h=a*o-l,v=r*u,d>=0)if(h>=-v)if(h<=v){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Cc).addScaledVector(Eo,h),f}intersectSphere(e,t){ji.subVectors(e.center,this.origin);const n=ji.dot(this.direction),s=ji.dot(ji)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,n,s,r){Rc.subVectors(t,e),Ao.subVectors(n,e),Pc.crossVectors(Rc,Ao);let a=this.direction.dot(Pc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_s.subVectors(this.origin,e);const l=o*this.direction.dot(Ao.crossVectors(_s,Ao));if(l<0)return null;const c=o*this.direction.dot(Rc.cross(_s));if(c<0||l+c>a)return null;const u=-o*_s.dot(Pc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,n,s,r,a,o,l,c,u,d,h,f,v,_,m){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,h,f,v,_,m)}set(e,t,n,s,r,a,o,l,c,u,d,h,f,v,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=v,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Pr.setFromMatrixColumn(e,0).length(),r=1/Pr.setFromMatrixColumn(e,1).length(),a=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,f=a*d,v=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+v*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=v+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,v=c*u,_=c*d;t[0]=h+_*o,t[4]=v*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-v,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,v=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,v=o*u,_=o*d;t[0]=l*u,t[4]=v*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=v*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+v,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-v,t[2]=v*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r_,e,a_)}lookAt(e,t,n){const s=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),xs.crossVectors(n,ni),xs.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),xs.crossVectors(n,ni)),xs.normalize(),Co.crossVectors(ni,xs),s[0]=xs.x,s[4]=Co.x,s[8]=ni.x,s[1]=xs.y,s[5]=Co.y,s[9]=ni.y,s[2]=xs.z,s[6]=Co.z,s[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],v=n[2],_=n[6],m=n[10],p=n[14],x=n[3],y=n[7],w=n[11],I=n[15],C=s[0],P=s[4],U=s[8],ie=s[12],S=s[1],b=s[5],H=s[9],z=s[13],j=s[2],Z=s[6],Y=s[10],F=s[14],ne=s[3],pe=s[7],le=s[11],oe=s[15];return r[0]=a*C+o*S+l*j+c*ne,r[4]=a*P+o*b+l*Z+c*pe,r[8]=a*U+o*H+l*Y+c*le,r[12]=a*ie+o*z+l*F+c*oe,r[1]=u*C+d*S+h*j+f*ne,r[5]=u*P+d*b+h*Z+f*pe,r[9]=u*U+d*H+h*Y+f*le,r[13]=u*ie+d*z+h*F+f*oe,r[2]=v*C+_*S+m*j+p*ne,r[6]=v*P+_*b+m*Z+p*pe,r[10]=v*U+_*H+m*Y+p*le,r[14]=v*ie+_*z+m*F+p*oe,r[3]=x*C+y*S+w*j+I*ne,r[7]=x*P+y*b+w*Z+I*pe,r[11]=x*U+y*H+w*Y+I*le,r[15]=x*ie+y*z+w*F+I*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],v=e[3],_=e[7],m=e[11],p=e[15];return v*(+r*l*d-s*c*d-r*o*h+n*c*h+s*o*f-n*l*f)+_*(+t*l*f-t*c*h+r*a*h-s*a*f+s*c*u-r*l*u)+m*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*u-n*c*u)+p*(-s*o*u-t*l*d+t*o*h+s*a*d-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],v=e[12],_=e[13],m=e[14],p=e[15],x=d*m*c-_*h*c+_*l*f-o*m*f-d*l*p+o*h*p,y=v*h*c-u*m*c-v*l*f+a*m*f+u*l*p-a*h*p,w=u*_*c-v*d*c+v*o*f-a*_*f-u*o*p+a*d*p,I=v*d*l-u*_*l-v*o*h+a*_*h+u*o*m-a*d*m,C=t*x+n*y+s*w+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=x*P,e[1]=(_*h*r-d*m*r-_*s*f+n*m*f+d*s*p-n*h*p)*P,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*P,e[3]=(d*l*r-o*h*r-d*s*c+n*h*c+o*s*f-n*l*f)*P,e[4]=y*P,e[5]=(u*m*r-v*h*r+v*s*f-t*m*f-u*s*p+t*h*p)*P,e[6]=(v*l*r-a*m*r-v*s*c+t*m*c+a*s*p-t*l*p)*P,e[7]=(a*h*r-u*l*r+u*s*c-t*h*c-a*s*f+t*l*f)*P,e[8]=w*P,e[9]=(v*d*r-u*_*r-v*n*f+t*_*f+u*n*p-t*d*p)*P,e[10]=(a*_*r-v*o*r+v*n*c-t*_*c-a*n*p+t*o*p)*P,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*f-t*o*f)*P,e[12]=I*P,e[13]=(u*_*s-v*d*s+v*n*h-t*_*h-u*n*m+t*d*m)*P,e[14]=(v*o*s-a*_*s-v*n*l+t*_*l+a*n*m-t*o*m)*P,e[15]=(a*d*s-u*o*s+u*n*l-t*d*l-a*n*h+t*o*h)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,v=r*d,_=a*u,m=a*d,p=o*d,x=l*c,y=l*u,w=l*d,I=n.x,C=n.y,P=n.z;return s[0]=(1-(_+p))*I,s[1]=(f+w)*I,s[2]=(v-y)*I,s[3]=0,s[4]=(f-w)*C,s[5]=(1-(h+p))*C,s[6]=(m+x)*C,s[7]=0,s[8]=(v+y)*P,s[9]=(m-x)*P,s[10]=(1-(h+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Pr.set(s[0],s[1],s[2]).length();const a=Pr.set(s[4],s[5],s[6]).length(),o=Pr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Si.copy(this);const c=1/r,u=1/a,d=1/o;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=u,Si.elements[5]*=u,Si.elements[6]*=u,Si.elements[8]*=d,Si.elements[9]*=d,Si.elements[10]*=d,t.setFromRotationMatrix(Si),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ns){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),h=(n+s)/(n-s);let f,v;if(o===ns)f=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===wl)f=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ns){const l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(a-r),h=(t+e)*c,f=(n+s)*u;let v,_;if(o===ns)v=(a+r)*d,_=-2*d;else if(o===wl)v=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pr=new O,Si=new It,r_=new O(0,0,0),a_=new O(1,1,1),xs=new O,Co=new O,ni=new O,Wd=new It,$d=new sr;class ls{constructor(e=0,t=0,n=0,s=ls.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(yn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(yn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $d.setFromEuler(this),this.setFromQuaternion($d,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ls.DEFAULT_ORDER="XYZ";class Lu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o_=0;const Xd=new O,Dr=new sr,Yi=new It,Ro=new O,Pa=new O,l_=new O,c_=new sr,qd=new O(1,0,0),jd=new O(0,1,0),Yd=new O(0,0,1),Kd={type:"added"},h_={type:"removed"},Lr={type:"childadded",child:null},Dc={type:"childremoved",child:null};class qn extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new O,t=new ls,n=new sr,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new ht}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(qd,e)}rotateY(e){return this.rotateOnAxis(jd,e)}rotateZ(e){return this.rotateOnAxis(Yd,e)}translateOnAxis(e,t){return Xd.copy(e).applyQuaternion(this.quaternion),this.position.add(Xd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qd,e)}translateY(e){return this.translateOnAxis(jd,e)}translateZ(e){return this.translateOnAxis(Yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ro.copy(e):Ro.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Pa,Ro,this.up):Yi.lookAt(Ro,Pa,this.up),this.quaternion.setFromRotationMatrix(Yi),s&&(Yi.extractRotation(s.matrixWorld),Dr.setFromRotationMatrix(Yi),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kd),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h_),Dc.child=e,this.dispatchEvent(Dc),Dc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kd),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,e,l_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,c_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}qn.DEFAULT_UP=new O(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new O,Ki=new O,Lc=new O,Zi=new O,Ir=new O,Ur=new O,Zd=new O,Ic=new O,Uc=new O,Fc=new O,Nc=new en,kc=new en,Oc=new en;class gi{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),wi.subVectors(e,t),s.cross(wi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){wi.subVectors(s,t),Ki.subVectors(n,t),Lc.subVectors(e,t);const a=wi.dot(wi),o=wi.dot(Ki),l=wi.dot(Lc),c=Ki.dot(Ki),u=Ki.dot(Lc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,v=(a*u-o*l)*h;return r.set(1-f-v,v,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zi.x),l.addScaledVector(a,Zi.y),l.addScaledVector(o,Zi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Nc.setScalar(0),kc.setScalar(0),Oc.setScalar(0),Nc.fromBufferAttribute(e,t),kc.fromBufferAttribute(e,n),Oc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Nc,r.x),a.addScaledVector(kc,r.y),a.addScaledVector(Oc,r.z),a}static isFrontFacing(e,t,n,s){return wi.subVectors(n,t),Ki.subVectors(e,t),wi.cross(Ki).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),wi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return gi.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ir.subVectors(s,n),Ur.subVectors(r,n),Ic.subVectors(e,n);const l=Ir.dot(Ic),c=Ur.dot(Ic);if(l<=0&&c<=0)return t.copy(n);Uc.subVectors(e,s);const u=Ir.dot(Uc),d=Ur.dot(Uc);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ir,a);Fc.subVectors(e,r);const f=Ir.dot(Fc),v=Ur.dot(Fc);if(v>=0&&f<=v)return t.copy(r);const _=f*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Ur,o);const m=u*v-f*d;if(m<=0&&d-u>=0&&f-v>=0)return Zd.subVectors(r,s),o=(d-u)/(d-u+(f-v)),t.copy(s).addScaledVector(Zd,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(Ir,a).addScaledVector(Ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},Po={h:0,s:0,l:0};function zc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=At.workingColorSpace){if(e=Du(e,1),t=yn(t,0,1),n=yn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=zc(a,r,e+1/3),this.g=zc(a,r,e),this.b=zc(a,r,e-1/3)}return At.toWorkingColorSpace(this,s),this}setStyle(e,t=di){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=di){const n=bm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=wc(e.r),this.g=wc(e.g),this.b=wc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return At.fromWorkingColorSpace(In.copy(this),e),Math.round(yn(In.r*255,0,255))*65536+Math.round(yn(In.g*255,0,255))*256+Math.round(yn(In.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(In.copy(this),t);const n=In.r,s=In.g,r=In.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=di){At.fromWorkingColorSpace(In.copy(this),e);const t=In.r,n=In.g,s=In.b;return e!==di?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(Po);const n=Wa(ys.h,Po.h,t),s=Wa(ys.s,Po.s,t),r=Wa(ys.l,Po.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new at;at.NAMES=bm;let u_=0;class da extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=Qs,this.side=Ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(n.blending=this.blending),this.side!==Ls&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ph&&(n.blendSrc=this.blendSrc),this.blendDst!==mh&&(n.blendDst=this.blendDst),this.blendEquation!==Ys&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==na&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ti extends da{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ls,this.combine=cm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new O,Do=new we;class Cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Od,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Do.fromBufferAttribute(this,t),Do.applyMatrix3(e),this.setXY(t,Do.x,Do.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),n=Hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),n=Hn(n,this.array),s=Hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),n=Hn(n,this.array),s=Hn(s,this.array),r=Hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Od&&(e.usage=this.usage),e}}class Tm extends Cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Em extends Cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ct extends Cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let d_=0;const hi=new It,Bc=new qn,Fr=new O,ii=new Bi,Da=new Bi,xn=new O;class Zt extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mm(e)?Em:Tm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,n){return hi.makeTranslation(e,t,n),this.applyMatrix4(hi),this}scale(e,t,n){return hi.makeScale(e,t,n),this.applyMatrix4(hi),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Da.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(ii.min,Da.min),ii.expandByPoint(xn),xn.addVectors(ii.max,Da.max),ii.expandByPoint(xn)):(ii.expandByPoint(Da.min),ii.expandByPoint(Da.max))}ii.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)xn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(xn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)xn.fromBufferAttribute(o,c),l&&(Fr.fromBufferAttribute(e,c),xn.add(Fr)),s=Math.max(s,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new O,l[U]=new O;const c=new O,u=new O,d=new O,h=new we,f=new we,v=new we,_=new O,m=new O;function p(U,ie,S){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,ie),d.fromBufferAttribute(n,S),h.fromBufferAttribute(r,U),f.fromBufferAttribute(r,ie),v.fromBufferAttribute(r,S),u.sub(c),d.sub(c),f.sub(h),v.sub(h);const b=1/(f.x*v.y-v.x*f.y);isFinite(b)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-f.y).multiplyScalar(b),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(b),o[U].add(_),o[ie].add(_),o[S].add(_),l[U].add(m),l[ie].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let U=0,ie=x.length;U<ie;++U){const S=x[U],b=S.start,H=S.count;for(let z=b,j=b+H;z<j;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new O,w=new O,I=new O,C=new O;function P(U){I.fromBufferAttribute(s,U),C.copy(I);const ie=o[U];y.copy(ie),y.sub(I.multiplyScalar(I.dot(ie))).normalize(),w.crossVectors(C,ie);const b=w.dot(l[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,b)}for(let U=0,ie=x.length;U<ie;++U){const S=x[U],b=S.start,H=S.count;for(let z=b,j=b+H;z<j;z+=3)P(e.getX(z+0)),P(e.getX(z+1)),P(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let h=0,f=e.count;h<f;h+=3){const v=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,v=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)h[v++]=c[f++]}return new Cn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jd=new It,Vs=new uo,Lo=new Hi,Qd=new O,Io=new O,Uo=new O,Fo=new O,Hc=new O,No=new O,ef=new O,ko=new O;class yt extends qn{constructor(e=new Zt,t=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){No.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Hc.fromBufferAttribute(d,e),a?No.addScaledVector(Hc,u):No.addScaledVector(Hc.sub(t),u))}t.add(No)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(r),Vs.copy(e.ray).recast(e.near),!(Lo.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(Lo,Qd)===null||Vs.origin.distanceToSquared(Qd)>(e.far-e.near)**2))&&(Jd.copy(r).invert(),Vs.copy(e.ray).applyMatrix4(Jd),!(n.boundingBox!==null&&Vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vs)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let w=x,I=y;w<I;w+=3){const C=o.getX(w),P=o.getX(w+1),U=o.getX(w+2);s=Oo(this,p,e,n,c,u,d,C,P,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=v,p=_;m<p;m+=3){const x=o.getX(m),y=o.getX(m+1),w=o.getX(m+2);s=Oo(this,a,e,n,c,u,d,x,y,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=x,I=y;w<I;w+=3){const C=w,P=w+1,U=w+2;s=Oo(this,p,e,n,c,u,d,C,P,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=v,p=_;m<p;m+=3){const x=m,y=m+1,w=m+2;s=Oo(this,a,e,n,c,u,d,x,y,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function f_(i,e,t,n,s,r,a,o){let l;if(e.side===Xn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ls,o),l===null)return null;ko.copy(o),ko.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ko);return c<t.near||c>t.far?null:{distance:c,point:ko.clone(),object:i}}function Oo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Io),i.getVertexPosition(l,Uo),i.getVertexPosition(c,Fo);const u=f_(i,e,t,n,Io,Uo,Fo,ef);if(u){const d=new O;gi.getBarycoord(ef,Io,Uo,Fo,d),s&&(u.uv=gi.getInterpolatedAttribute(s,o,l,c,d,new we)),r&&(u.uv1=gi.getInterpolatedAttribute(r,o,l,c,d,new we)),a&&(u.normal=gi.getInterpolatedAttribute(a,o,l,c,d,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new O,materialIndex:0};gi.getNormal(Io,Uo,Fo,h.normal),u.face=h,u.barycoord=d}return u}class Ai extends Zt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(d,2));function v(_,m,p,x,y,w,I,C,P,U,ie){const S=w/P,b=I/U,H=w/2,z=I/2,j=C/2,Z=P+1,Y=U+1;let F=0,ne=0;const pe=new O;for(let le=0;le<Y;le++){const oe=le*b-z;for(let me=0;me<Z;me++){const he=me*S-H;pe[_]=he*x,pe[m]=oe*y,pe[p]=j,c.push(pe.x,pe.y,pe.z),pe[_]=0,pe[m]=0,pe[p]=C>0?1:-1,u.push(pe.x,pe.y,pe.z),d.push(me/P),d.push(1-le/U),F+=1}}for(let le=0;le<U;le++)for(let oe=0;oe<P;oe++){const me=h+oe+Z*le,he=h+oe+Z*(le+1),se=h+(oe+1)+Z*(le+1),fe=h+(oe+1)+Z*le;l.push(me,he,fe),l.push(he,se,fe),ne+=6}o.addGroup(f,ne,ie),f+=ne,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oa(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Vn(i){const e={};for(let t=0;t<i.length;t++){const n=oa(i[t]);for(const s in n)e[s]=n[s]}return e}function p_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Am(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const m_={clone:oa,merge:Vn};var g_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends da{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g_,this.fragmentShader=v_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oa(e.uniforms),this.uniformsGroups=p_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cm extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=ns}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ms=new O,tf=new we,nf=new we;class pi extends Cm{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=no*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return no*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z)}getViewSize(e,t){return this.getViewBounds(e,tf,nf),t.subVectors(nf,tf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nr=-90,kr=1;class __ extends qn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pi(Nr,kr,e,t);s.layers=this.layers,this.add(s);const r=new pi(Nr,kr,e,t);r.layers=this.layers,this.add(r);const a=new pi(Nr,kr,e,t);a.layers=this.layers,this.add(a);const o=new pi(Nr,kr,e,t);o.layers=this.layers,this.add(o);const l=new pi(Nr,kr,e,t);l.layers=this.layers,this.add(l);const c=new pi(Nr,kr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ns)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wl)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Rm extends Fn{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ia,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class x_ extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Rm(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ai(5,5,5),r=new cs({name:"CubemapFromEquirect",uniforms:oa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xn,blending:Ps});r.uniforms.tEquirect.value=t;const a=new yt(s,r),o=t.minFilter;return t.minFilter===Cs&&(t.minFilter=mi),new __(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Vc=new O,y_=new O,M_=new ht;class Ss{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Vc.subVectors(n,t).cross(y_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||M_.getNormalMatrix(e),s=this.coplanarPoint(Vc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gs=new Hi,zo=new O;class Pm{constructor(e=new Ss,t=new Ss,n=new Ss,s=new Ss,r=new Ss,a=new Ss){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ns){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],f=s[8],v=s[9],_=s[10],m=s[11],p=s[12],x=s[13],y=s[14],w=s[15];if(n[0].setComponents(l-r,h-c,m-f,w-p).normalize(),n[1].setComponents(l+r,h+c,m+f,w+p).normalize(),n[2].setComponents(l+a,h+u,m+v,w+x).normalize(),n[3].setComponents(l-a,h-u,m-v,w-x).normalize(),n[4].setComponents(l-o,h-d,m-_,w-y).normalize(),t===ns)n[5].setComponents(l+o,h+d,m+_,w+y).normalize();else if(t===wl)n[5].setComponents(o,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(e){return Gs.center.set(0,0,0),Gs.radius=.7071067811865476,Gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(zo.x=s.normal.x>0?e.max.x:e.min.x,zo.y=s.normal.y>0?e.max.y:e.min.y,zo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dm(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function S_(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,v)=>f.start-v.start);let h=0;for(let f=1;f<d.length;f++){const v=d[h],_=d[f];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,v=d.length;f<v;f++){const _=d[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class ur extends Zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],v=[],_=[],m=[];for(let p=0;p<u;p++){const x=p*h-a;for(let y=0;y<c;y++){const w=y*d-r;v.push(w,-x,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const y=x+c*p,w=x+c*(p+1),I=x+1+c*(p+1),C=x+1+c*p;f.push(y,w,C),f.push(w,I,C)}this.setIndex(f),this.setAttribute("position",new Ct(v,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.width,e.height,e.widthSegments,e.heightSegments)}}var w_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b_=`#ifdef USE_ALPHAHASH
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
#endif`,T_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R_=`#ifdef USE_AOMAP
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
#endif`,P_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D_=`#ifdef USE_BATCHING
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
#endif`,L_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N_=`#ifdef USE_IRIDESCENCE
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
#endif`,k_=`#ifdef USE_BUMPMAP
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
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,X_=`#define PI 3.141592653589793
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
} // validated`,q_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,j_=`vec3 transformedNormal = objectNormal;
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
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q_="gl_FragColor = linearToOutputTexel( gl_FragColor );",ex=`
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
}`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hx=`#ifdef USE_GRADIENTMAP
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
}`,ux=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,px=`uniform bool receiveShadow;
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
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
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
#endif`,Mx=`struct PhysicalMaterial {
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
}`,Sx=`
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
#endif`,wx=`#if defined( RE_IndirectDiffuse )
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
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ex=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lx=`#if defined( USE_POINTS_UV )
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
#endif`,Ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`#ifdef USE_MORPHTARGETS
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
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$x=`#ifdef USE_NORMALMAP
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
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oy=`float getShadowMask() {
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
}`,ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cy=`#ifdef USE_SKINNING
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
#endif`,hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uy=`#ifdef USE_SKINNING
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
#endif`,dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,my=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gy=`#ifdef USE_TRANSMISSION
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
#endif`,vy=`#ifdef USE_TRANSMISSION
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
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,My=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wy=`uniform sampler2D t2D;
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
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`#include <common>
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
}`,Ry=`#if DEPTH_PACKING == 3200
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
}`,Py=`#define DISTANCE
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
}`,Dy=`#define DISTANCE
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`uniform float scale;
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Ny=`#include <common>
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
}`,ky=`uniform vec3 diffuse;
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
}`,Oy=`#define LAMBERT
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
}`,zy=`#define LAMBERT
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
}`,By=`#define MATCAP
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
}`,Hy=`#define MATCAP
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
}`,Vy=`#define NORMAL
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
}`,Gy=`#define NORMAL
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
}`,Wy=`#define PHONG
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
}`,$y=`#define PHONG
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
}`,Xy=`#define STANDARD
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
}`,qy=`#define STANDARD
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
}`,jy=`#define TOON
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
}`,Yy=`#define TOON
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
}`,Ky=`uniform float size;
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
}`,Zy=`uniform vec3 diffuse;
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
}`,Jy=`#include <common>
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
}`,Qy=`uniform vec3 color;
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
}`,eM=`uniform float rotation;
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
}`,tM=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:w_,alphahash_pars_fragment:b_,alphamap_fragment:T_,alphamap_pars_fragment:E_,alphatest_fragment:A_,alphatest_pars_fragment:C_,aomap_fragment:R_,aomap_pars_fragment:P_,batching_pars_vertex:D_,batching_vertex:L_,begin_vertex:I_,beginnormal_vertex:U_,bsdfs:F_,iridescence_fragment:N_,bumpmap_pars_fragment:k_,clipping_planes_fragment:O_,clipping_planes_pars_fragment:z_,clipping_planes_pars_vertex:B_,clipping_planes_vertex:H_,color_fragment:V_,color_pars_fragment:G_,color_pars_vertex:W_,color_vertex:$_,common:X_,cube_uv_reflection_fragment:q_,defaultnormal_vertex:j_,displacementmap_pars_vertex:Y_,displacementmap_vertex:K_,emissivemap_fragment:Z_,emissivemap_pars_fragment:J_,colorspace_fragment:Q_,colorspace_pars_fragment:ex,envmap_fragment:tx,envmap_common_pars_fragment:nx,envmap_pars_fragment:ix,envmap_pars_vertex:sx,envmap_physical_pars_fragment:mx,envmap_vertex:rx,fog_vertex:ax,fog_pars_vertex:ox,fog_fragment:lx,fog_pars_fragment:cx,gradientmap_pars_fragment:hx,lightmap_pars_fragment:ux,lights_lambert_fragment:dx,lights_lambert_pars_fragment:fx,lights_pars_begin:px,lights_toon_fragment:gx,lights_toon_pars_fragment:vx,lights_phong_fragment:_x,lights_phong_pars_fragment:xx,lights_physical_fragment:yx,lights_physical_pars_fragment:Mx,lights_fragment_begin:Sx,lights_fragment_maps:wx,lights_fragment_end:bx,logdepthbuf_fragment:Tx,logdepthbuf_pars_fragment:Ex,logdepthbuf_pars_vertex:Ax,logdepthbuf_vertex:Cx,map_fragment:Rx,map_pars_fragment:Px,map_particle_fragment:Dx,map_particle_pars_fragment:Lx,metalnessmap_fragment:Ix,metalnessmap_pars_fragment:Ux,morphinstance_vertex:Fx,morphcolor_vertex:Nx,morphnormal_vertex:kx,morphtarget_pars_vertex:Ox,morphtarget_vertex:zx,normal_fragment_begin:Bx,normal_fragment_maps:Hx,normal_pars_fragment:Vx,normal_pars_vertex:Gx,normal_vertex:Wx,normalmap_pars_fragment:$x,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:qx,clearcoat_pars_fragment:jx,iridescence_pars_fragment:Yx,opaque_fragment:Kx,packing:Zx,premultiplied_alpha_fragment:Jx,project_vertex:Qx,dithering_fragment:ey,dithering_pars_fragment:ty,roughnessmap_fragment:ny,roughnessmap_pars_fragment:iy,shadowmap_pars_fragment:sy,shadowmap_pars_vertex:ry,shadowmap_vertex:ay,shadowmask_pars_fragment:oy,skinbase_vertex:ly,skinning_pars_vertex:cy,skinning_vertex:hy,skinnormal_vertex:uy,specularmap_fragment:dy,specularmap_pars_fragment:fy,tonemapping_fragment:py,tonemapping_pars_fragment:my,transmission_fragment:gy,transmission_pars_fragment:vy,uv_pars_fragment:_y,uv_pars_vertex:xy,uv_vertex:yy,worldpos_vertex:My,background_vert:Sy,background_frag:wy,backgroundCube_vert:by,backgroundCube_frag:Ty,cube_vert:Ey,cube_frag:Ay,depth_vert:Cy,depth_frag:Ry,distanceRGBA_vert:Py,distanceRGBA_frag:Dy,equirect_vert:Ly,equirect_frag:Iy,linedashed_vert:Uy,linedashed_frag:Fy,meshbasic_vert:Ny,meshbasic_frag:ky,meshlambert_vert:Oy,meshlambert_frag:zy,meshmatcap_vert:By,meshmatcap_frag:Hy,meshnormal_vert:Vy,meshnormal_frag:Gy,meshphong_vert:Wy,meshphong_frag:$y,meshphysical_vert:Xy,meshphysical_frag:qy,meshtoon_vert:jy,meshtoon_frag:Yy,points_vert:Ky,points_frag:Zy,shadow_vert:Jy,shadow_frag:Qy,sprite_vert:eM,sprite_frag:tM},Ce={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Oi={basic:{uniforms:Vn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Vn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new at(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Vn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Vn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Vn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new at(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Vn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Vn([Ce.points,Ce.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Vn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Vn([Ce.common,Ce.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Vn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Vn([Ce.sprite,Ce.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Vn([Ce.common,Ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Vn([Ce.lights,Ce.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Oi.physical={uniforms:Vn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Bo={r:0,b:0,g:0},Ws=new ls,nM=new It;function iM(i,e,t,n,s,r,a){const o=new at(0);let l=r===!0?0:1,c,u,d=null,h=0,f=null;function v(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1;const w=v(x);w===null?p(o,l):w&&w.isColor&&(p(w,1),y=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,y){const w=v(y);w&&(w.isCubeTexture||w.mapping===Vl)?(u===void 0&&(u=new yt(new Ai(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:oa(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ws.copy(y.backgroundRotation),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nM.makeRotationFromEuler(Ws)),u.material.toneMapped=At.getTransfer(w.colorSpace)!==Vt,(d!==w||h!==w.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=w,h=w.version,f=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new yt(new ur(2,2),new cs({name:"BackgroundMaterial",uniforms:oa(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Ls,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=At.getTransfer(w.colorSpace)!==Vt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,h=w.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(Bo,Am(i)),n.buffers.color.setClear(Bo.r,Bo.g,Bo.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:m}}function sM(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(S,b,H,z,j){let Z=!1;const Y=d(z,H,b);r!==Y&&(r=Y,c(r.object)),Z=f(S,z,H,j),Z&&v(S,z,H,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,w(S,b,H,z),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function d(S,b,H){const z=H.wireframe===!0;let j=n[S.id];j===void 0&&(j={},n[S.id]=j);let Z=j[b.id];Z===void 0&&(Z={},j[b.id]=Z);let Y=Z[z];return Y===void 0&&(Y=h(l()),Z[z]=Y),Y}function h(S){const b=[],H=[],z=[];for(let j=0;j<t;j++)b[j]=0,H[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:H,attributeDivisors:z,object:S,attributes:{},index:null}}function f(S,b,H,z){const j=r.attributes,Z=b.attributes;let Y=0;const F=H.getAttributes();for(const ne in F)if(F[ne].location>=0){const le=j[ne];let oe=Z[ne];if(oe===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),le===void 0||le.attribute!==oe||oe&&le.data!==oe.data)return!0;Y++}return r.attributesNum!==Y||r.index!==z}function v(S,b,H,z){const j={},Z=b.attributes;let Y=0;const F=H.getAttributes();for(const ne in F)if(F[ne].location>=0){let le=Z[ne];le===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&(le=S.instanceColor));const oe={};oe.attribute=le,le&&le.data&&(oe.data=le.data),j[ne]=oe,Y++}r.attributes=j,r.attributesNum=Y,r.index=z}function _(){const S=r.newAttributes;for(let b=0,H=S.length;b<H;b++)S[b]=0}function m(S){p(S,0)}function p(S,b){const H=r.newAttributes,z=r.enabledAttributes,j=r.attributeDivisors;H[S]=1,z[S]===0&&(i.enableVertexAttribArray(S),z[S]=1),j[S]!==b&&(i.vertexAttribDivisor(S,b),j[S]=b)}function x(){const S=r.newAttributes,b=r.enabledAttributes;for(let H=0,z=b.length;H<z;H++)b[H]!==S[H]&&(i.disableVertexAttribArray(H),b[H]=0)}function y(S,b,H,z,j,Z,Y){Y===!0?i.vertexAttribIPointer(S,b,H,j,Z):i.vertexAttribPointer(S,b,H,z,j,Z)}function w(S,b,H,z){_();const j=z.attributes,Z=H.getAttributes(),Y=b.defaultAttributeValues;for(const F in Z){const ne=Z[F];if(ne.location>=0){let pe=j[F];if(pe===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor)),pe!==void 0){const le=pe.normalized,oe=pe.itemSize,me=e.get(pe);if(me===void 0)continue;const he=me.buffer,se=me.type,fe=me.bytesPerElement,xe=se===i.INT||se===i.UNSIGNED_INT||pe.gpuType===wu;if(pe.isInterleavedBufferAttribute){const ge=pe.data,Xe=ge.stride,Fe=pe.offset;if(ge.isInstancedInterleavedBuffer){for(let He=0;He<ne.locationSize;He++)p(ne.location+He,ge.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let He=0;He<ne.locationSize;He++)m(ne.location+He);i.bindBuffer(i.ARRAY_BUFFER,he);for(let He=0;He<ne.locationSize;He++)y(ne.location+He,oe/ne.locationSize,se,le,Xe*fe,(Fe+oe/ne.locationSize*He)*fe,xe)}else{if(pe.isInstancedBufferAttribute){for(let ge=0;ge<ne.locationSize;ge++)p(ne.location+ge,pe.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ge=0;ge<ne.locationSize;ge++)m(ne.location+ge);i.bindBuffer(i.ARRAY_BUFFER,he);for(let ge=0;ge<ne.locationSize;ge++)y(ne.location+ge,oe/ne.locationSize,se,le,oe*fe,oe/ne.locationSize*ge*fe,xe)}}else if(Y!==void 0){const le=Y[F];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(ne.location,le);break;case 3:i.vertexAttrib3fv(ne.location,le);break;case 4:i.vertexAttrib4fv(ne.location,le);break;default:i.vertexAttrib1fv(ne.location,le)}}}}x()}function I(){U();for(const S in n){const b=n[S];for(const H in b){const z=b[H];for(const j in z)u(z[j].object),delete z[j];delete b[H]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const b=n[S.id];for(const H in b){const z=b[H];for(const j in z)u(z[j].object),delete z[j];delete b[H]}delete n[S.id]}function P(S){for(const b in n){const H=n[b];if(H[S.id]===void 0)continue;const z=H[S.id];for(const j in z)u(z[j].object),delete z[j];delete H[S.id]}}function U(){ie(),a=!0,r!==s&&(r=s,c(r.object))}function ie(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:ie,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function rM(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let v=0;v<d;v++)f+=u[v];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)a(c[v],u[v],h[v]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_];for(let _=0;_<h.length;_++)t.update(v,n,h[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function aM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==An&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const U=P===ho&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==os&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Un&&!U)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const P=e.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:w,vertexTextures:I,maxSamples:C}}function oM(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Ss,o=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const v=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,y=x*4;let w=p.clippingState||null;l.value=w,w=u(v,h,y,f);for(let I=0;I!==y;++I)w[I]=t[I];p.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,v){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const p=f+_*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,w=f;y!==_;++y,w+=4)a.copy(d[y]).applyMatrix4(x,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function lM(i){let e=new WeakMap;function t(a,o){return o===wh?a.mapping=ia:o===bh&&(a.mapping=sa),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===wh||o===bh)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new x_(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Wl extends Cm{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xr=4,sf=[.125,.215,.35,.446,.526,.582],Ks=20,Gc=new Wl,rf=new at;let Wc=null,$c=0,Xc=0,qc=!1;const Xs=(1+Math.sqrt(5))/2,Or=1/Xs,af=[new O(-Xs,Or,0),new O(Xs,Or,0),new O(-Or,0,Xs),new O(Or,0,Xs),new O(0,Xs,-Or),new O(0,Xs,Or),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class of{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Wc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc,$c,Xc),this._renderer.xr.enabled=qc,e.scissorTest=!1,Ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ia||e.mapping===sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:ho,format:An,colorSpace:Us,depthBuffer:!1},s=lf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cM(r)),this._blurMaterial=hM(r,e,t)}return s}_compileMaterial(e){const t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,Gc)}_sceneToCubeUV(e,t,n,s){const o=new pi(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(rf),u.toneMapping=Ds,u.autoClear=!1;const f=new Ti({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),v=new yt(new Ai,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(rf),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;Ho(s,x*y,p>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ia||e.mapping===sa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cf());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new yt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ho(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Gc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=af[(s-r-1)%af.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new yt(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ks-1),_=r/v,m=isFinite(r)?1+Math.floor(u*_):Ks;m>Ks&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ks}`);const p=[];let x=0;for(let P=0;P<Ks;++P){const U=P/_,ie=Math.exp(-U*U/2);p.push(ie),P===0?x+=ie:P<m&&(x+=2*ie)}for(let P=0;P<p.length;P++)p[P]=p[P]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=v,h.mipInt.value=y-n;const w=this._sizeLods[s],I=3*w*(s>y-Xr?s-y+Xr:0),C=4*(this._cubeSize-w);Ho(t,I,C,3*w,2*w),l.setRenderTarget(t),l.render(d,Gc)}}function cM(i){const e=[],t=[],n=[];let s=i;const r=i-Xr+1+sf.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Xr?l=sf[a-i+Xr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,v=6,_=3,m=2,p=1,x=new Float32Array(_*v*f),y=new Float32Array(m*v*f),w=new Float32Array(p*v*f);for(let C=0;C<f;C++){const P=C%3*2/3-1,U=C>2?0:-1,ie=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];x.set(ie,_*v*C),y.set(h,m*v*C);const S=[C,C,C,C,C,C];w.set(S,p*v*C)}const I=new Zt;I.setAttribute("position",new Cn(x,_)),I.setAttribute("uv",new Cn(y,m)),I.setAttribute("faceIndex",new Cn(w,p)),e.push(I),s>Xr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lf(i,e,t){const n=new Pi(i,e,t);return n.texture.mapping=Vl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ho(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function hM(i,e,t){const n=new Float32Array(Ks),s=new O(0,1,0);return new cs({name:"SphericalGaussianBlur",defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function cf(){return new cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function hf(){return new cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function Iu(){return`

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
	`}function uM(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===wh||l===bh,u=l===ia||l===sa;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new of(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new of(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function dM(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&pl("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function fM(i,e,t,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const _=h.morphAttributes[v];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const v in f){const _=f[v];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,v=d.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,w=x.length;y<w;y+=3){const I=x[y+0],C=x[y+1],P=x[y+2];h.push(I,C,C,P,P,I)}}else if(v!==void 0){const x=v.array;_=v.version;for(let y=0,w=x.length/3-1;y<w;y+=3){const I=y+0,C=y+1,P=y+2;h.push(I,C,C,P,P,I)}}else return;const m=new(Mm(h)?Em:Tm)(h,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function pM(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*a),t.update(f,n,1)}function c(h,f,v){v!==0&&(i.drawElementsInstanced(n,f,r,h*a,v),t.update(f,n,v))}function u(h,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,v);let m=0;for(let p=0;p<v;p++)m+=f[p];t.update(m,n,1)}function d(h,f,v,_){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,_,0,v);let p=0;for(let x=0;x<v;x++)p+=f[x];for(let x=0;x<_.length;x++)t.update(p,n,_[x])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function mM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function gM(i,e,t){const n=new WeakMap,s=new en;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let S=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let w=0;v===!0&&(w=1),_===!0&&(w=2),m===!0&&(w=3);let I=o.attributes.position.count*w,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*C*4*d),U=new wm(P,I,C,d);U.type=Un,U.needsUpdate=!0;const ie=w*4;for(let b=0;b<d;b++){const H=p[b],z=x[b],j=y[b],Z=I*C*4*b;for(let Y=0;Y<H.count;Y++){const F=Y*ie;v===!0&&(s.fromBufferAttribute(H,Y),P[Z+F+0]=s.x,P[Z+F+1]=s.y,P[Z+F+2]=s.z,P[Z+F+3]=0),_===!0&&(s.fromBufferAttribute(z,Y),P[Z+F+4]=s.x,P[Z+F+5]=s.y,P[Z+F+6]=s.z,P[Z+F+7]=0),m===!0&&(s.fromBufferAttribute(j,Y),P[Z+F+8]=s.x,P[Z+F+9]=s.y,P[Z+F+10]=s.z,P[Z+F+11]=j.itemSize===4?s.w:1)}}h={count:d,texture:U,size:new we(I,C)},n.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const _=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function vM(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Lm extends Fn{constructor(e,t,n,s,r,a,o,l,c,u=Kr){if(u!==Kr&&u!==aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Kr&&(n=ir),n===void 0&&u===aa&&(n=ra),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Im=new Fn,uf=new Lm(1,1),Um=new wm,Fm=new i_,Nm=new Rm,df=[],ff=[],pf=new Float32Array(16),mf=new Float32Array(9),gf=new Float32Array(4);function fa(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=df[s];if(r===void 0&&(r=new Float32Array(s),df[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function dn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function fn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $l(i,e){let t=ff[e];t===void 0&&(t=new Int32Array(e),ff[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _M(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2fv(this.addr,e),fn(t,e)}}function yM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;i.uniform3fv(this.addr,e),fn(t,e)}}function MM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4fv(this.addr,e),fn(t,e)}}function SM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;gf.set(n),i.uniformMatrix2fv(this.addr,!1,gf),fn(t,n)}}function wM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;mf.set(n),i.uniformMatrix3fv(this.addr,!1,mf),fn(t,n)}}function bM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;pf.set(n),i.uniformMatrix4fv(this.addr,!1,pf),fn(t,n)}}function TM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function EM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2iv(this.addr,e),fn(t,e)}}function AM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3iv(this.addr,e),fn(t,e)}}function CM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4iv(this.addr,e),fn(t,e)}}function RM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function PM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2uiv(this.addr,e),fn(t,e)}}function DM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3uiv(this.addr,e),fn(t,e)}}function LM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4uiv(this.addr,e),fn(t,e)}}function IM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uf.compareFunction=ym,r=uf):r=Im,t.setTexture2D(e||r,s)}function UM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Fm,s)}function FM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Nm,s)}function NM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Um,s)}function kM(i){switch(i){case 5126:return _M;case 35664:return xM;case 35665:return yM;case 35666:return MM;case 35674:return SM;case 35675:return wM;case 35676:return bM;case 5124:case 35670:return TM;case 35667:case 35671:return EM;case 35668:case 35672:return AM;case 35669:case 35673:return CM;case 5125:return RM;case 36294:return PM;case 36295:return DM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return UM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return NM}}function OM(i,e){i.uniform1fv(this.addr,e)}function zM(i,e){const t=fa(e,this.size,2);i.uniform2fv(this.addr,t)}function BM(i,e){const t=fa(e,this.size,3);i.uniform3fv(this.addr,t)}function HM(i,e){const t=fa(e,this.size,4);i.uniform4fv(this.addr,t)}function VM(i,e){const t=fa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function GM(i,e){const t=fa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function WM(i,e){const t=fa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $M(i,e){i.uniform1iv(this.addr,e)}function XM(i,e){i.uniform2iv(this.addr,e)}function qM(i,e){i.uniform3iv(this.addr,e)}function jM(i,e){i.uniform4iv(this.addr,e)}function YM(i,e){i.uniform1uiv(this.addr,e)}function KM(i,e){i.uniform2uiv(this.addr,e)}function ZM(i,e){i.uniform3uiv(this.addr,e)}function JM(i,e){i.uniform4uiv(this.addr,e)}function QM(i,e,t){const n=this.cache,s=e.length,r=$l(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Im,r[a])}function eS(i,e,t){const n=this.cache,s=e.length,r=$l(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Fm,r[a])}function tS(i,e,t){const n=this.cache,s=e.length,r=$l(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Nm,r[a])}function nS(i,e,t){const n=this.cache,s=e.length,r=$l(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Um,r[a])}function iS(i){switch(i){case 5126:return OM;case 35664:return zM;case 35665:return BM;case 35666:return HM;case 35674:return VM;case 35675:return GM;case 35676:return WM;case 5124:case 35670:return $M;case 35667:case 35671:return XM;case 35668:case 35672:return qM;case 35669:case 35673:return jM;case 5125:return YM;case 36294:return KM;case 36295:return ZM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return QM;case 35679:case 36299:case 36307:return eS;case 35680:case 36300:case 36308:case 36293:return tS;case 36289:case 36303:case 36311:case 36292:return nS}}class sS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kM(t.type)}}class rS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iS(t.type)}}class aS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const jc=/(\w+)(\])?(\[|\.)?/g;function vf(i,e){i.seq.push(e),i.map[e.id]=e}function oS(i,e,t){const n=i.name,s=n.length;for(jc.lastIndex=0;;){const r=jc.exec(n),a=jc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vf(t,c===void 0?new sS(o,i,e):new rS(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new aS(o),vf(t,d)),t=d}}}class ml{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);oS(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function _f(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const lS=37297;let cS=0;function hS(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function uS(i){const e=At.getPrimaries(At.workingColorSpace),t=At.getPrimaries(i);let n;switch(e===t?n="":e===Sl&&t===Ml?n="LinearDisplayP3ToLinearSRGB":e===Ml&&t===Sl&&(n="LinearSRGBToLinearDisplayP3"),i){case Us:case Gl:return[n,"LinearTransferOETF"];case di:case Pu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function xf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+hS(i.getShaderSource(e),a)}else return s}function dS(i,e){const t=uS(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function fS(i,e){let t;switch(e){case fv:t="Linear";break;case pv:t="Reinhard";break;case mv:t="Cineon";break;case gv:t="ACESFilmic";break;case _v:t="AgX";break;case xv:t="Neutral";break;case vv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vo=new O;function pS(){At.getLuminanceCoefficients(Vo);const i=Vo.x.toFixed(4),e=Vo.y.toFixed(4),t=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function gS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ba(i){return i!==""}function yf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _S=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(i){return i.replace(_S,yS)}const xS=new Map;function yS(i,e){let t=ct[e];if(t===void 0){const n=xS.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qh(t)}const MS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sf(i){return i.replace(MS,SS)}function SS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function wS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ts&&(e="SHADOWMAP_TYPE_VSM"),e}function bS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ia:case sa:e="ENVMAP_TYPE_CUBE";break;case Vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case sa:e="ENVMAP_MODE_REFRACTION";break}return e}function ES(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cm:e="ENVMAP_BLENDING_MULTIPLY";break;case uv:e="ENVMAP_BLENDING_MIX";break;case dv:e="ENVMAP_BLENDING_ADD";break}return e}function AS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function CS(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=wS(t),c=bS(t),u=TS(t),d=ES(t),h=AS(t),f=mS(t),v=gS(r),_=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ba).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ba).join(`
`),p.length>0&&(p+=`
`)):(m=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),p=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ds?"#define TONE_MAPPING":"",t.toneMapping!==Ds?ct.tonemapping_pars_fragment:"",t.toneMapping!==Ds?fS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,dS("linearToOutputTexel",t.outputColorSpace),pS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ba).join(`
`)),a=Qh(a),a=yf(a,t),a=Mf(a,t),o=Qh(o),o=yf(o,t),o=Mf(o,t),a=Sf(a),o=Sf(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Zn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+a,w=x+p+o,I=_f(s,s.VERTEX_SHADER,y),C=_f(s,s.FRAGMENT_SHADER,w);s.attachShader(_,I),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(b){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(I).trim(),j=s.getShaderInfoLog(C).trim();let Z=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,C);else{const F=xf(s,I,"vertex"),ne=xf(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+H+`
`+F+`
`+ne)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||j==="")&&(Y=!1);Y&&(b.diagnostics={runnable:Z,programLog:H,vertexShader:{log:z,prefix:m},fragmentShader:{log:j,prefix:p}})}s.deleteShader(I),s.deleteShader(C),U=new ml(s,_),ie=vS(s,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let ie;this.getAttributes=function(){return ie===void 0&&P(this),ie};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,lS)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=C,this}let RS=0;class PS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new DS(e),t.set(e,n)),n}}class DS{constructor(e){this.id=RS++,this.code=e,this.usedTimes=0}}function LS(i,e,t,n,s,r,a){const o=new Lu,l=new PS,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.reverseDepthBuffer,f=s.vertexTextures;let v=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,b,H,z,j){const Z=z.fog,Y=j.geometry,F=S.isMeshStandardMaterial?z.environment:null,ne=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),pe=ne&&ne.mapping===Vl?ne.image.height:null,le=_[S.type];S.precision!==null&&(v=s.getMaxPrecision(S.precision),v!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",v,"instead."));const oe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,me=oe!==void 0?oe.length:0;let he=0;Y.morphAttributes.position!==void 0&&(he=1),Y.morphAttributes.normal!==void 0&&(he=2),Y.morphAttributes.color!==void 0&&(he=3);let se,fe,xe,ge;if(le){const Dn=Oi[le];se=Dn.vertexShader,fe=Dn.fragmentShader}else se=S.vertexShader,fe=S.fragmentShader,l.update(S),xe=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const Xe=i.getRenderTarget(),Fe=j.isInstancedMesh===!0,He=j.isBatchedMesh===!0,rt=!!S.map,nt=!!S.matcap,N=!!ne,qt=!!S.aoMap,ot=!!S.lightMap,ut=!!S.bumpMap,Ke=!!S.normalMap,Tt=!!S.displacementMap,Ye=!!S.emissiveMap,D=!!S.metalnessMap,E=!!S.roughnessMap,ee=S.anisotropy>0,ce=S.clearcoat>0,re=S.dispersion>0,q=S.iridescence>0,be=S.sheen>0,ye=S.transmission>0,De=ee&&!!S.anisotropyMap,lt=ce&&!!S.clearcoatMap,_e=ce&&!!S.clearcoatNormalMap,Le=ce&&!!S.clearcoatRoughnessMap,Ve=q&&!!S.iridescenceMap,We=q&&!!S.iridescenceThicknessMap,Ee=be&&!!S.sheenColorMap,et=be&&!!S.sheenRoughnessMap,tt=!!S.specularMap,St=!!S.specularColorMap,G=!!S.specularIntensityMap,Ae=ye&&!!S.transmissionMap,ae=ye&&!!S.thicknessMap,ue=!!S.gradientMap,Re=!!S.alphaMap,Ie=S.alphaTest>0,mt=!!S.alphaHash,jt=!!S.extensions;let Pn=Ds;S.toneMapped&&(Xe===null||Xe.isXRRenderTarget===!0)&&(Pn=i.toneMapping);const vt={shaderID:le,shaderType:S.type,shaderName:S.name,vertexShader:se,fragmentShader:fe,defines:S.defines,customVertexShaderID:xe,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:v,batching:He,batchingColor:He&&j._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&j.instanceColor!==null,instancingMorph:Fe&&j.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Xe===null?i.outputColorSpace:Xe.isXRRenderTarget===!0?Xe.texture.colorSpace:Us,alphaToCoverage:!!S.alphaToCoverage,map:rt,matcap:nt,envMap:N,envMapMode:N&&ne.mapping,envMapCubeUVHeight:pe,aoMap:qt,lightMap:ot,bumpMap:ut,normalMap:Ke,displacementMap:f&&Tt,emissiveMap:Ye,normalMapObjectSpace:Ke&&S.normalMapType===bv,normalMapTangentSpace:Ke&&S.normalMapType===wv,metalnessMap:D,roughnessMap:E,anisotropy:ee,anisotropyMap:De,clearcoat:ce,clearcoatMap:lt,clearcoatNormalMap:_e,clearcoatRoughnessMap:Le,dispersion:re,iridescence:q,iridescenceMap:Ve,iridescenceThicknessMap:We,sheen:be,sheenColorMap:Ee,sheenRoughnessMap:et,specularMap:tt,specularColorMap:St,specularIntensityMap:G,transmission:ye,transmissionMap:Ae,thicknessMap:ae,gradientMap:ue,opaque:S.transparent===!1&&S.blending===Qs&&S.alphaToCoverage===!1,alphaMap:Re,alphaTest:Ie,alphaHash:mt,combine:S.combine,mapUv:rt&&m(S.map.channel),aoMapUv:qt&&m(S.aoMap.channel),lightMapUv:ot&&m(S.lightMap.channel),bumpMapUv:ut&&m(S.bumpMap.channel),normalMapUv:Ke&&m(S.normalMap.channel),displacementMapUv:Tt&&m(S.displacementMap.channel),emissiveMapUv:Ye&&m(S.emissiveMap.channel),metalnessMapUv:D&&m(S.metalnessMap.channel),roughnessMapUv:E&&m(S.roughnessMap.channel),anisotropyMapUv:De&&m(S.anisotropyMap.channel),clearcoatMapUv:lt&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:_e&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:We&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:et&&m(S.sheenRoughnessMap.channel),specularMapUv:tt&&m(S.specularMap.channel),specularColorMapUv:St&&m(S.specularColorMap.channel),specularIntensityMapUv:G&&m(S.specularIntensityMap.channel),transmissionMapUv:Ae&&m(S.transmissionMap.channel),thicknessMapUv:ae&&m(S.thicknessMap.channel),alphaMapUv:Re&&m(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ke||ee),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Y.attributes.uv&&(rt||Re),fog:!!Z,useFog:S.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:j.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:he,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pn,decodeVideoTexture:rt&&S.map.isVideoTexture===!0&&At.getTransfer(S.map.colorSpace)===Vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ri,flipSided:S.side===Xn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:jt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&S.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function x(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const H in S.defines)b.push(H),b.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(y(b,S),w(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function w(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),S.push(o.mask)}function I(S){const b=_[S.type];let H;if(b){const z=Oi[b];H=m_.clone(z.uniforms)}else H=S.uniforms;return H}function C(S,b){let H;for(let z=0,j=u.length;z<j;z++){const Z=u[z];if(Z.cacheKey===b){H=Z,++H.usedTimes;break}}return H===void 0&&(H=new CS(i,b,S,r),u.push(H)),H}function P(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function U(S){l.remove(S)}function ie(){l.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:I,acquireProgram:C,releaseProgram:P,releaseShaderCache:U,programs:u,dispose:ie}}function IS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function US(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tf(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,h,f,v,_,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:v,renderOrder:d.renderOrder,z:_,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,h,f,v,_,m){const p=a(d,h,f,v,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,h,f,v,_,m){const p=a(d,h,f,v,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||US),n.length>1&&n.sort(h||bf),s.length>1&&s.sort(h||bf)}function u(){for(let d=e,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function FS(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Tf,i.set(n,[a])):s>=r.length?(a=new Tf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function NS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new at};break;case"SpotLight":t={position:new O,direction:new O,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function kS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let OS=0;function zS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function BS(i){const e=new NS,t=kS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new It,a=new It;function o(c){let u=0,d=0,h=0;for(let ie=0;ie<9;ie++)n.probe[ie].set(0,0,0);let f=0,v=0,_=0,m=0,p=0,x=0,y=0,w=0,I=0,C=0,P=0;c.sort(zS);for(let ie=0,S=c.length;ie<S;ie++){const b=c[ie],H=b.color,z=b.intensity,j=b.distance,Z=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=H.r*z,d+=H.g*z,h+=H.b*z;else if(b.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(b.sh.coefficients[Y],z);P++}else if(b.isDirectionalLight){const Y=e.get(b);if(Y.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const F=b.shadow,ne=t.get(b);ne.shadowIntensity=F.intensity,ne.shadowBias=F.bias,ne.shadowNormalBias=F.normalBias,ne.shadowRadius=F.radius,ne.shadowMapSize=F.mapSize,n.directionalShadow[f]=ne,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=b.shadow.matrix,x++}n.directional[f]=Y,f++}else if(b.isSpotLight){const Y=e.get(b);Y.position.setFromMatrixPosition(b.matrixWorld),Y.color.copy(H).multiplyScalar(z),Y.distance=j,Y.coneCos=Math.cos(b.angle),Y.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),Y.decay=b.decay,n.spot[_]=Y;const F=b.shadow;if(b.map&&(n.spotLightMap[I]=b.map,I++,F.updateMatrices(b),b.castShadow&&C++),n.spotLightMatrix[_]=F.matrix,b.castShadow){const ne=t.get(b);ne.shadowIntensity=F.intensity,ne.shadowBias=F.bias,ne.shadowNormalBias=F.normalBias,ne.shadowRadius=F.radius,ne.shadowMapSize=F.mapSize,n.spotShadow[_]=ne,n.spotShadowMap[_]=Z,w++}_++}else if(b.isRectAreaLight){const Y=e.get(b);Y.color.copy(H).multiplyScalar(z),Y.halfWidth.set(b.width*.5,0,0),Y.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=Y,m++}else if(b.isPointLight){const Y=e.get(b);if(Y.color.copy(b.color).multiplyScalar(b.intensity),Y.distance=b.distance,Y.decay=b.decay,b.castShadow){const F=b.shadow,ne=t.get(b);ne.shadowIntensity=F.intensity,ne.shadowBias=F.bias,ne.shadowNormalBias=F.normalBias,ne.shadowRadius=F.radius,ne.shadowMapSize=F.mapSize,ne.shadowCameraNear=F.camera.near,ne.shadowCameraFar=F.camera.far,n.pointShadow[v]=ne,n.pointShadowMap[v]=Z,n.pointShadowMatrix[v]=b.shadow.matrix,y++}n.point[v]=Y,v++}else if(b.isHemisphereLight){const Y=e.get(b);Y.skyColor.copy(b.color).multiplyScalar(z),Y.groundColor.copy(b.groundColor).multiplyScalar(z),n.hemi[p]=Y,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const U=n.hash;(U.directionalLength!==f||U.pointLength!==v||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==x||U.numPointShadows!==y||U.numSpotShadows!==w||U.numSpotMaps!==I||U.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=w+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,U.directionalLength=f,U.pointLength=v,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=x,U.numPointShadows=y,U.numSpotShadows=w,U.numSpotMaps=I,U.numLightProbes=P,n.version=OS++)}function l(c,u){let d=0,h=0,f=0,v=0,_=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(y.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const w=n.rectArea[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const w=n.point[h];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const w=n.hemi[_];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Ef(i){const e=new BS(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function HS(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ef(i),e.set(s,[o])):r>=a.length?(o=new Ef(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class VS extends da{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GS extends da{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$S=`uniform sampler2D shadow_pass;
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
}`;function XS(i,e,t){let n=new Pm;const s=new we,r=new we,a=new en,o=new VS({depthPacking:Sv}),l=new GS,c={},u=t.maxTextureSize,d={[Ls]:Xn,[Xn]:Ls,[ri]:ri},h=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:WS,fragmentShader:$S}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const v=new Zt;v.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new yt(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lm;let p=this.type;this.render=function(C,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const ie=i.getRenderTarget(),S=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Ps),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=p!==ts&&this.type===ts,j=p===ts&&this.type!==ts;for(let Z=0,Y=C.length;Z<Y;Z++){const F=C[Z],ne=F.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;s.copy(ne.mapSize);const pe=ne.getFrameExtents();if(s.multiply(pe),r.copy(ne.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pe.x),s.x=r.x*pe.x,ne.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pe.y),s.y=r.y*pe.y,ne.mapSize.y=r.y)),ne.map===null||z===!0||j===!0){const oe=this.type!==ts?{minFilter:kt,magFilter:kt}:{};ne.map!==null&&ne.map.dispose(),ne.map=new Pi(s.x,s.y,oe),ne.map.texture.name=F.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();const le=ne.getViewportCount();for(let oe=0;oe<le;oe++){const me=ne.getViewport(oe);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),H.viewport(a),ne.updateMatrices(F,oe),n=ne.getFrustum(),w(P,U,ne.camera,F,this.type)}ne.isPointLightShadow!==!0&&this.type===ts&&x(ne,U),ne.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(ie,S,b)};function x(C,P){const U=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Pi(s.x,s.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,U,h,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,U,f,_,null)}function y(C,P,U,ie){let S=null;const b=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)S=b;else if(S=U.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const H=S.uuid,z=P.uuid;let j=c[H];j===void 0&&(j={},c[H]=j);let Z=j[z];Z===void 0&&(Z=S.clone(),j[z]=Z,P.addEventListener("dispose",I)),S=Z}if(S.visible=P.visible,S.wireframe=P.wireframe,ie===ts?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:d[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=i.properties.get(S);H.light=U}return S}function w(C,P,U,ie,S){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ts)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const z=e.update(C),j=C.material;if(Array.isArray(j)){const Z=z.groups;for(let Y=0,F=Z.length;Y<F;Y++){const ne=Z[Y],pe=j[ne.materialIndex];if(pe&&pe.visible){const le=y(C,pe,ie,S);C.onBeforeShadow(i,C,P,U,z,le,ne),i.renderBufferDirect(U,null,z,le,C,ne),C.onAfterShadow(i,C,P,U,z,le,ne)}}}else if(j.visible){const Z=y(C,j,ie,S);C.onBeforeShadow(i,C,P,U,z,Z,null),i.renderBufferDirect(U,null,z,Z,C,null),C.onAfterShadow(i,C,P,U,z,Z,null)}}const H=C.children;for(let z=0,j=H.length;z<j;z++)w(H[z],P,U,ie,S)}function I(C){C.target.removeEventListener("dispose",I);for(const U in c){const ie=c[U],S=C.target.uuid;S in ie&&(ie[S].dispose(),delete ie[S])}}}const qS={[gh]:vh,[_h]:Mh,[xh]:Sh,[na]:yh,[vh]:gh,[Mh]:_h,[Sh]:xh,[yh]:na};function jS(i){function e(){let G=!1;const Ae=new en;let ae=null;const ue=new en(0,0,0,0);return{setMask:function(Re){ae!==Re&&!G&&(i.colorMask(Re,Re,Re,Re),ae=Re)},setLocked:function(Re){G=Re},setClear:function(Re,Ie,mt,jt,Pn){Pn===!0&&(Re*=jt,Ie*=jt,mt*=jt),Ae.set(Re,Ie,mt,jt),ue.equals(Ae)===!1&&(i.clearColor(Re,Ie,mt,jt),ue.copy(Ae))},reset:function(){G=!1,ae=null,ue.set(-1,0,0,0)}}}function t(){let G=!1,Ae=!1,ae=null,ue=null,Re=null;return{setReversed:function(Ie){Ae=Ie},setTest:function(Ie){Ie?xe(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(Ie){ae!==Ie&&!G&&(i.depthMask(Ie),ae=Ie)},setFunc:function(Ie){if(Ae&&(Ie=qS[Ie]),ue!==Ie){switch(Ie){case gh:i.depthFunc(i.NEVER);break;case vh:i.depthFunc(i.ALWAYS);break;case _h:i.depthFunc(i.LESS);break;case na:i.depthFunc(i.LEQUAL);break;case xh:i.depthFunc(i.EQUAL);break;case yh:i.depthFunc(i.GEQUAL);break;case Mh:i.depthFunc(i.GREATER);break;case Sh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=Ie}},setLocked:function(Ie){G=Ie},setClear:function(Ie){Re!==Ie&&(i.clearDepth(Ie),Re=Ie)},reset:function(){G=!1,ae=null,ue=null,Re=null}}}function n(){let G=!1,Ae=null,ae=null,ue=null,Re=null,Ie=null,mt=null,jt=null,Pn=null;return{setTest:function(vt){G||(vt?xe(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(vt){Ae!==vt&&!G&&(i.stencilMask(vt),Ae=vt)},setFunc:function(vt,Dn,Sn){(ae!==vt||ue!==Dn||Re!==Sn)&&(i.stencilFunc(vt,Dn,Sn),ae=vt,ue=Dn,Re=Sn)},setOp:function(vt,Dn,Sn){(Ie!==vt||mt!==Dn||jt!==Sn)&&(i.stencilOp(vt,Dn,Sn),Ie=vt,mt=Dn,jt=Sn)},setLocked:function(vt){G=vt},setClear:function(vt){Pn!==vt&&(i.clearStencil(vt),Pn=vt)},reset:function(){G=!1,Ae=null,ae=null,ue=null,Re=null,Ie=null,mt=null,jt=null,Pn=null}}}const s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],f=null,v=!1,_=null,m=null,p=null,x=null,y=null,w=null,I=null,C=new at(0,0,0),P=0,U=!1,ie=null,S=null,b=null,H=null,z=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,Y=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(F)[1]),Z=Y>=1):F.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),Z=Y>=2);let ne=null,pe={};const le=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),me=new en().fromArray(le),he=new en().fromArray(oe);function se(G,Ae,ae,ue){const Re=new Uint8Array(4),Ie=i.createTexture();i.bindTexture(G,Ie),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let mt=0;mt<ae;mt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(Ae+mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return Ie}const fe={};fe[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),xe(i.DEPTH_TEST),r.setFunc(na),ot(!1),ut(Ud),xe(i.CULL_FACE),N(Ps);function xe(G){c[G]!==!0&&(i.enable(G),c[G]=!0)}function ge(G){c[G]!==!1&&(i.disable(G),c[G]=!1)}function Xe(G,Ae){return u[G]!==Ae?(i.bindFramebuffer(G,Ae),u[G]=Ae,G===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ae),G===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Fe(G,Ae){let ae=h,ue=!1;if(G){ae=d.get(Ae),ae===void 0&&(ae=[],d.set(Ae,ae));const Re=G.textures;if(ae.length!==Re.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Ie=0,mt=Re.length;Ie<mt;Ie++)ae[Ie]=i.COLOR_ATTACHMENT0+Ie;ae.length=Re.length,ue=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,ue=!0);ue&&i.drawBuffers(ae)}function He(G){return f!==G?(i.useProgram(G),f=G,!0):!1}const rt={[Ys]:i.FUNC_ADD,[jg]:i.FUNC_SUBTRACT,[Yg]:i.FUNC_REVERSE_SUBTRACT};rt[Kg]=i.MIN,rt[Zg]=i.MAX;const nt={[Jg]:i.ZERO,[Qg]:i.ONE,[ev]:i.SRC_COLOR,[ph]:i.SRC_ALPHA,[av]:i.SRC_ALPHA_SATURATE,[sv]:i.DST_COLOR,[nv]:i.DST_ALPHA,[tv]:i.ONE_MINUS_SRC_COLOR,[mh]:i.ONE_MINUS_SRC_ALPHA,[rv]:i.ONE_MINUS_DST_COLOR,[iv]:i.ONE_MINUS_DST_ALPHA,[ov]:i.CONSTANT_COLOR,[lv]:i.ONE_MINUS_CONSTANT_COLOR,[cv]:i.CONSTANT_ALPHA,[hv]:i.ONE_MINUS_CONSTANT_ALPHA};function N(G,Ae,ae,ue,Re,Ie,mt,jt,Pn,vt){if(G===Ps){v===!0&&(ge(i.BLEND),v=!1);return}if(v===!1&&(xe(i.BLEND),v=!0),G!==qg){if(G!==_||vt!==U){if((m!==Ys||y!==Ys)&&(i.blendEquation(i.FUNC_ADD),m=Ys,y=Ys),vt)switch(G){case Qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fh:i.blendFunc(i.ONE,i.ONE);break;case Fd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}p=null,x=null,w=null,I=null,C.set(0,0,0),P=0,_=G,U=vt}return}Re=Re||Ae,Ie=Ie||ae,mt=mt||ue,(Ae!==m||Re!==y)&&(i.blendEquationSeparate(rt[Ae],rt[Re]),m=Ae,y=Re),(ae!==p||ue!==x||Ie!==w||mt!==I)&&(i.blendFuncSeparate(nt[ae],nt[ue],nt[Ie],nt[mt]),p=ae,x=ue,w=Ie,I=mt),(jt.equals(C)===!1||Pn!==P)&&(i.blendColor(jt.r,jt.g,jt.b,Pn),C.copy(jt),P=Pn),_=G,U=!1}function qt(G,Ae){G.side===ri?ge(i.CULL_FACE):xe(i.CULL_FACE);let ae=G.side===Xn;Ae&&(ae=!ae),ot(ae),G.blending===Qs&&G.transparent===!1?N(Ps):N(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),s.setMask(G.colorWrite);const ue=G.stencilWrite;a.setTest(ue),ue&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Tt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(G){ie!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),ie=G)}function ut(G){G!==Wg?(xe(i.CULL_FACE),G!==S&&(G===Ud?i.cullFace(i.BACK):G===$g?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),S=G}function Ke(G){G!==b&&(Z&&i.lineWidth(G),b=G)}function Tt(G,Ae,ae){G?(xe(i.POLYGON_OFFSET_FILL),(H!==Ae||z!==ae)&&(i.polygonOffset(Ae,ae),H=Ae,z=ae)):ge(i.POLYGON_OFFSET_FILL)}function Ye(G){G?xe(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function D(G){G===void 0&&(G=i.TEXTURE0+j-1),ne!==G&&(i.activeTexture(G),ne=G)}function E(G,Ae,ae){ae===void 0&&(ne===null?ae=i.TEXTURE0+j-1:ae=ne);let ue=pe[ae];ue===void 0&&(ue={type:void 0,texture:void 0},pe[ae]=ue),(ue.type!==G||ue.texture!==Ae)&&(ne!==ae&&(i.activeTexture(ae),ne=ae),i.bindTexture(G,Ae||fe[G]),ue.type=G,ue.texture=Ae)}function ee(){const G=pe[ne];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ce(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(G){me.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),me.copy(G))}function Ee(G){he.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),he.copy(G))}function et(G,Ae){let ae=l.get(Ae);ae===void 0&&(ae=new WeakMap,l.set(Ae,ae));let ue=ae.get(G);ue===void 0&&(ue=i.getUniformBlockIndex(Ae,G.name),ae.set(G,ue))}function tt(G,Ae){const ue=l.get(Ae).get(G);o.get(Ae)!==ue&&(i.uniformBlockBinding(Ae,ue,G.__bindingPointIndex),o.set(Ae,ue))}function St(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},ne=null,pe={},u={},d=new WeakMap,h=[],f=null,v=!1,_=null,m=null,p=null,x=null,y=null,w=null,I=null,C=new at(0,0,0),P=0,U=!1,ie=null,S=null,b=null,H=null,z=null,me.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:xe,disable:ge,bindFramebuffer:Xe,drawBuffers:Fe,useProgram:He,setBlending:N,setMaterial:qt,setFlipSided:ot,setCullFace:ut,setLineWidth:Ke,setPolygonOffset:Tt,setScissorTest:Ye,activeTexture:D,bindTexture:E,unbindTexture:ee,compressedTexImage2D:ce,compressedTexImage3D:re,texImage2D:Le,texImage3D:Ve,updateUBOMapping:et,uniformBlockBinding:tt,texStorage2D:lt,texStorage3D:_e,texSubImage2D:q,texSubImage3D:be,compressedTexSubImage2D:ye,compressedTexSubImage3D:De,scissor:We,viewport:Ee,reset:St}}function Af(i,e,t,n){const s=YS(n);switch(t){case pm:return i*e;case gm:return i*e;case vm:return i*e*2;case Eu:return i*e/s.components*s.byteLength;case Au:return i*e/s.components*s.byteLength;case _m:return i*e*2/s.components*s.byteLength;case Cu:return i*e*2/s.components*s.byteLength;case mm:return i*e*3/s.components*s.byteLength;case An:return i*e*4/s.components*s.byteLength;case Ru:return i*e*4/s.components*s.byteLength;case cl:case hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ul:case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ch:case Ph:return Math.max(i,16)*Math.max(e,8)/4;case Ah:case Rh:return Math.max(i,8)*Math.max(e,8)/2;case Dh:case Lh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ih:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case kh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $h:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case qh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fl:case jh:case Yh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xm:case Kh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zh:case Jh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function YS(i){switch(i){case os:case um:return{byteLength:1,components:1};case to:case dm:case ho:return{byteLength:2,components:1};case bu:case Tu:return{byteLength:2,components:4};case ir:case wu:case Un:return{byteLength:4,components:1};case fm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function KS(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,E){return f?new OffscreenCanvas(D,E):bl("canvas")}function _(D,E,ee){let ce=1;const re=Ye(D);if((re.width>ee||re.height>ee)&&(ce=ee/Math.max(re.width,re.height)),ce<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const q=Math.floor(ce*re.width),be=Math.floor(ce*re.height);d===void 0&&(d=v(q,be));const ye=E?v(q,be):d;return ye.width=q,ye.height=be,ye.getContext("2d").drawImage(D,0,0,q,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+q+"x"+be+")."),ye}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==kt&&D.minFilter!==mi}function p(D){i.generateMipmap(D)}function x(D,E,ee,ce,re=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let q=E;if(E===i.RED&&(ee===i.FLOAT&&(q=i.R32F),ee===i.HALF_FLOAT&&(q=i.R16F),ee===i.UNSIGNED_BYTE&&(q=i.R8)),E===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(q=i.R8UI),ee===i.UNSIGNED_SHORT&&(q=i.R16UI),ee===i.UNSIGNED_INT&&(q=i.R32UI),ee===i.BYTE&&(q=i.R8I),ee===i.SHORT&&(q=i.R16I),ee===i.INT&&(q=i.R32I)),E===i.RG&&(ee===i.FLOAT&&(q=i.RG32F),ee===i.HALF_FLOAT&&(q=i.RG16F),ee===i.UNSIGNED_BYTE&&(q=i.RG8)),E===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(q=i.RG8UI),ee===i.UNSIGNED_SHORT&&(q=i.RG16UI),ee===i.UNSIGNED_INT&&(q=i.RG32UI),ee===i.BYTE&&(q=i.RG8I),ee===i.SHORT&&(q=i.RG16I),ee===i.INT&&(q=i.RG32I)),E===i.RGB_INTEGER&&(ee===i.UNSIGNED_BYTE&&(q=i.RGB8UI),ee===i.UNSIGNED_SHORT&&(q=i.RGB16UI),ee===i.UNSIGNED_INT&&(q=i.RGB32UI),ee===i.BYTE&&(q=i.RGB8I),ee===i.SHORT&&(q=i.RGB16I),ee===i.INT&&(q=i.RGB32I)),E===i.RGBA_INTEGER&&(ee===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),ee===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),ee===i.UNSIGNED_INT&&(q=i.RGBA32UI),ee===i.BYTE&&(q=i.RGBA8I),ee===i.SHORT&&(q=i.RGBA16I),ee===i.INT&&(q=i.RGBA32I)),E===i.RGB&&ee===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),E===i.RGBA){const be=re?yl:At.getTransfer(ce);ee===i.FLOAT&&(q=i.RGBA32F),ee===i.HALF_FLOAT&&(q=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(q=be===Vt?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(D,E){let ee;return D?E===null||E===ir||E===ra?ee=i.DEPTH24_STENCIL8:E===Un?ee=i.DEPTH32F_STENCIL8:E===to&&(ee=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ir||E===ra?ee=i.DEPTH_COMPONENT24:E===Un?ee=i.DEPTH_COMPONENT32F:E===to&&(ee=i.DEPTH_COMPONENT16),ee}function w(D,E){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==kt&&D.minFilter!==mi?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function I(D){const E=D.target;E.removeEventListener("dispose",I),P(E),E.isVideoTexture&&u.delete(E)}function C(D){const E=D.target;E.removeEventListener("dispose",C),ie(E)}function P(D){const E=n.get(D);if(E.__webglInit===void 0)return;const ee=D.source,ce=h.get(ee);if(ce){const re=ce[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&U(D),Object.keys(ce).length===0&&h.delete(ee)}n.remove(D)}function U(D){const E=n.get(D);i.deleteTexture(E.__webglTexture);const ee=D.source,ce=h.get(ee);delete ce[E.__cacheKey],a.memory.textures--}function ie(D){const E=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(E.__webglFramebuffer[ce]))for(let re=0;re<E.__webglFramebuffer[ce].length;re++)i.deleteFramebuffer(E.__webglFramebuffer[ce][re]);else i.deleteFramebuffer(E.__webglFramebuffer[ce]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ce])}else{if(Array.isArray(E.__webglFramebuffer))for(let ce=0;ce<E.__webglFramebuffer.length;ce++)i.deleteFramebuffer(E.__webglFramebuffer[ce]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ce=0;ce<E.__webglColorRenderbuffer.length;ce++)E.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ce]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ee=D.textures;for(let ce=0,re=ee.length;ce<re;ce++){const q=n.get(ee[ce]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(ee[ce])}n.remove(D)}let S=0;function b(){S=0}function H(){const D=S;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),S+=1,D}function z(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function j(D,E){const ee=n.get(D);if(D.isVideoTexture&&Ke(D),D.isRenderTargetTexture===!1&&D.version>0&&ee.__version!==D.version){const ce=D.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(ee,D,E);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+E)}function Z(D,E){const ee=n.get(D);if(D.version>0&&ee.__version!==D.version){he(ee,D,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+E)}function Y(D,E){const ee=n.get(D);if(D.version>0&&ee.__version!==D.version){he(ee,D,E);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+E)}function F(D,E){const ee=n.get(D);if(D.version>0&&ee.__version!==D.version){se(ee,D,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+E)}const ne={[Th]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Eh]:i.MIRRORED_REPEAT},pe={[kt]:i.NEAREST,[yv]:i.NEAREST_MIPMAP_NEAREST,[So]:i.NEAREST_MIPMAP_LINEAR,[mi]:i.LINEAR,[Mc]:i.LINEAR_MIPMAP_NEAREST,[Cs]:i.LINEAR_MIPMAP_LINEAR},le={[Tv]:i.NEVER,[Dv]:i.ALWAYS,[Ev]:i.LESS,[ym]:i.LEQUAL,[Av]:i.EQUAL,[Pv]:i.GEQUAL,[Cv]:i.GREATER,[Rv]:i.NOTEQUAL};function oe(D,E){if(E.type===Un&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===mi||E.magFilter===Mc||E.magFilter===So||E.magFilter===Cs||E.minFilter===mi||E.minFilter===Mc||E.minFilter===So||E.minFilter===Cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,ne[E.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,ne[E.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,ne[E.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,pe[E.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,pe[E.minFilter]),E.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,le[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===kt||E.minFilter!==So&&E.minFilter!==Cs||E.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function me(D,E){let ee=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",I));const ce=E.source;let re=h.get(ce);re===void 0&&(re={},h.set(ce,re));const q=z(E);if(q!==D.__cacheKey){re[q]===void 0&&(re[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ee=!0),re[q].usedTimes++;const be=re[D.__cacheKey];be!==void 0&&(re[D.__cacheKey].usedTimes--,be.usedTimes===0&&U(E)),D.__cacheKey=q,D.__webglTexture=re[q].texture}return ee}function he(D,E,ee){let ce=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ce=i.TEXTURE_3D);const re=me(D,E),q=E.source;t.bindTexture(ce,D.__webglTexture,i.TEXTURE0+ee);const be=n.get(q);if(q.version!==be.__version||re===!0){t.activeTexture(i.TEXTURE0+ee);const ye=At.getPrimaries(At.workingColorSpace),De=E.colorSpace===Es?null:At.getPrimaries(E.colorSpace),lt=E.colorSpace===Es||ye===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let _e=_(E.image,!1,s.maxTextureSize);_e=Tt(E,_e);const Le=r.convert(E.format,E.colorSpace),Ve=r.convert(E.type);let We=x(E.internalFormat,Le,Ve,E.colorSpace,E.isVideoTexture);oe(ce,E);let Ee;const et=E.mipmaps,tt=E.isVideoTexture!==!0,St=be.__version===void 0||re===!0,G=q.dataReady,Ae=w(E,_e);if(E.isDepthTexture)We=y(E.format===aa,E.type),St&&(tt?t.texStorage2D(i.TEXTURE_2D,1,We,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,We,_e.width,_e.height,0,Le,Ve,null));else if(E.isDataTexture)if(et.length>0){tt&&St&&t.texStorage2D(i.TEXTURE_2D,Ae,We,et[0].width,et[0].height);for(let ae=0,ue=et.length;ae<ue;ae++)Ee=et[ae],tt?G&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ee.width,Ee.height,Le,Ve,Ee.data):t.texImage2D(i.TEXTURE_2D,ae,We,Ee.width,Ee.height,0,Le,Ve,Ee.data);E.generateMipmaps=!1}else tt?(St&&t.texStorage2D(i.TEXTURE_2D,Ae,We,_e.width,_e.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,Le,Ve,_e.data)):t.texImage2D(i.TEXTURE_2D,0,We,_e.width,_e.height,0,Le,Ve,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){tt&&St&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,We,et[0].width,et[0].height,_e.depth);for(let ae=0,ue=et.length;ae<ue;ae++)if(Ee=et[ae],E.format!==An)if(Le!==null)if(tt){if(G)if(E.layerUpdates.size>0){const Re=Af(Ee.width,Ee.height,E.format,E.type);for(const Ie of E.layerUpdates){const mt=Ee.data.subarray(Ie*Re/Ee.data.BYTES_PER_ELEMENT,(Ie+1)*Re/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Ie,Ee.width,Ee.height,1,Le,mt,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Ee.width,Ee.height,_e.depth,Le,Ee.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,We,Ee.width,Ee.height,_e.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Ee.width,Ee.height,_e.depth,Le,Ve,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,We,Ee.width,Ee.height,_e.depth,0,Le,Ve,Ee.data)}else{tt&&St&&t.texStorage2D(i.TEXTURE_2D,Ae,We,et[0].width,et[0].height);for(let ae=0,ue=et.length;ae<ue;ae++)Ee=et[ae],E.format!==An?Le!==null?tt?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Ee.width,Ee.height,Le,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,We,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?G&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ee.width,Ee.height,Le,Ve,Ee.data):t.texImage2D(i.TEXTURE_2D,ae,We,Ee.width,Ee.height,0,Le,Ve,Ee.data)}else if(E.isDataArrayTexture)if(tt){if(St&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,We,_e.width,_e.height,_e.depth),G)if(E.layerUpdates.size>0){const ae=Af(_e.width,_e.height,E.format,E.type);for(const ue of E.layerUpdates){const Re=_e.data.subarray(ue*ae/_e.data.BYTES_PER_ELEMENT,(ue+1)*ae/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,_e.width,_e.height,1,Le,Ve,Re)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Le,Ve,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,_e.width,_e.height,_e.depth,0,Le,Ve,_e.data);else if(E.isData3DTexture)tt?(St&&t.texStorage3D(i.TEXTURE_3D,Ae,We,_e.width,_e.height,_e.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Le,Ve,_e.data)):t.texImage3D(i.TEXTURE_3D,0,We,_e.width,_e.height,_e.depth,0,Le,Ve,_e.data);else if(E.isFramebufferTexture){if(St)if(tt)t.texStorage2D(i.TEXTURE_2D,Ae,We,_e.width,_e.height);else{let ae=_e.width,ue=_e.height;for(let Re=0;Re<Ae;Re++)t.texImage2D(i.TEXTURE_2D,Re,We,ae,ue,0,Le,Ve,null),ae>>=1,ue>>=1}}else if(et.length>0){if(tt&&St){const ae=Ye(et[0]);t.texStorage2D(i.TEXTURE_2D,Ae,We,ae.width,ae.height)}for(let ae=0,ue=et.length;ae<ue;ae++)Ee=et[ae],tt?G&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Le,Ve,Ee):t.texImage2D(i.TEXTURE_2D,ae,We,Le,Ve,Ee);E.generateMipmaps=!1}else if(tt){if(St){const ae=Ye(_e);t.texStorage2D(i.TEXTURE_2D,Ae,We,ae.width,ae.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,Ve,_e)}else t.texImage2D(i.TEXTURE_2D,0,We,Le,Ve,_e);m(E)&&p(ce),be.__version=q.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function se(D,E,ee){if(E.image.length!==6)return;const ce=me(D,E),re=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+ee);const q=n.get(re);if(re.version!==q.__version||ce===!0){t.activeTexture(i.TEXTURE0+ee);const be=At.getPrimaries(At.workingColorSpace),ye=E.colorSpace===Es?null:At.getPrimaries(E.colorSpace),De=E.colorSpace===Es||be===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const lt=E.isCompressedTexture||E.image[0].isCompressedTexture,_e=E.image[0]&&E.image[0].isDataTexture,Le=[];for(let ue=0;ue<6;ue++)!lt&&!_e?Le[ue]=_(E.image[ue],!0,s.maxCubemapSize):Le[ue]=_e?E.image[ue].image:E.image[ue],Le[ue]=Tt(E,Le[ue]);const Ve=Le[0],We=r.convert(E.format,E.colorSpace),Ee=r.convert(E.type),et=x(E.internalFormat,We,Ee,E.colorSpace),tt=E.isVideoTexture!==!0,St=q.__version===void 0||ce===!0,G=re.dataReady;let Ae=w(E,Ve);oe(i.TEXTURE_CUBE_MAP,E);let ae;if(lt){tt&&St&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,et,Ve.width,Ve.height);for(let ue=0;ue<6;ue++){ae=Le[ue].mipmaps;for(let Re=0;Re<ae.length;Re++){const Ie=ae[Re];E.format!==An?We!==null?tt?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,0,0,Ie.width,Ie.height,We,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,et,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,0,0,Ie.width,Ie.height,We,Ee,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,et,Ie.width,Ie.height,0,We,Ee,Ie.data)}}}else{if(ae=E.mipmaps,tt&&St){ae.length>0&&Ae++;const ue=Ye(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,et,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(_e){tt?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Le[ue].width,Le[ue].height,We,Ee,Le[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,et,Le[ue].width,Le[ue].height,0,We,Ee,Le[ue].data);for(let Re=0;Re<ae.length;Re++){const mt=ae[Re].image[ue].image;tt?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,0,0,mt.width,mt.height,We,Ee,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,et,mt.width,mt.height,0,We,Ee,mt.data)}}else{tt?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,We,Ee,Le[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,et,We,Ee,Le[ue]);for(let Re=0;Re<ae.length;Re++){const Ie=ae[Re];tt?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,0,0,We,Ee,Ie.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,et,We,Ee,Ie.image[ue])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),q.__version=re.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function fe(D,E,ee,ce,re,q){const be=r.convert(ee.format,ee.colorSpace),ye=r.convert(ee.type),De=x(ee.internalFormat,be,ye,ee.colorSpace);if(!n.get(E).__hasExternalTextures){const _e=Math.max(1,E.width>>q),Le=Math.max(1,E.height>>q);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,q,De,_e,Le,E.depth,0,be,ye,null):t.texImage2D(re,q,De,_e,Le,0,be,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),ut(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,re,n.get(ee).__webglTexture,0,ot(E)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,re,n.get(ee).__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(D,E,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,D),E.depthBuffer){const ce=E.depthTexture,re=ce&&ce.isDepthTexture?ce.type:null,q=y(E.stencilBuffer,re),be=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=ot(E);ut(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,q,E.width,E.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,q,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,q,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,D)}else{const ce=E.textures;for(let re=0;re<ce.length;re++){const q=ce[re],be=r.convert(q.format,q.colorSpace),ye=r.convert(q.type),De=x(q.internalFormat,be,ye,q.colorSpace),lt=ot(E);ee&&ut(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,De,E.width,E.height):ut(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,De,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,De,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);const ce=n.get(E.depthTexture).__webglTexture,re=ot(E);if(E.depthTexture.format===Kr)ut(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(E.depthTexture.format===aa)ut(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Xe(D){const E=n.get(D),ee=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const ce=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ce){const re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ce.removeEventListener("dispose",re)};ce.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=ce}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");ge(E.__webglFramebuffer,D)}else if(ee){E.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ce]),E.__webglDepthbuffer[ce]===void 0)E.__webglDepthbuffer[ce]=i.createRenderbuffer(),xe(E.__webglDepthbuffer[ce],D,!1);else{const re=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[ce];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),xe(E.__webglDepthbuffer,D,!1);else{const ce=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(D,E,ee){const ce=n.get(D);E!==void 0&&fe(ce.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&Xe(D)}function He(D){const E=D.texture,ee=n.get(D),ce=n.get(E);D.addEventListener("dispose",C);const re=D.textures,q=D.isWebGLCubeRenderTarget===!0,be=re.length>1;if(be||(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=E.version,a.memory.textures++),q){ee.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer[ye]=[];for(let De=0;De<E.mipmaps.length;De++)ee.__webglFramebuffer[ye][De]=i.createFramebuffer()}else ee.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ye=0;ye<E.mipmaps.length;ye++)ee.__webglFramebuffer[ye]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(be)for(let ye=0,De=re.length;ye<De;ye++){const lt=n.get(re[ye]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&ut(D)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ye=0;ye<re.length;ye++){const De=re[ye];ee.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[ye]);const lt=r.convert(De.format,De.colorSpace),_e=r.convert(De.type),Le=x(De.internalFormat,lt,_e,De.colorSpace,D.isXRRenderTarget===!0),Ve=ot(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Le,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,ee.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(ee.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),oe(i.TEXTURE_CUBE_MAP,E);for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0)for(let De=0;De<E.mipmaps.length;De++)fe(ee.__webglFramebuffer[ye][De],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De);else fe(ee.__webglFramebuffer[ye],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ye=0,De=re.length;ye<De;ye++){const lt=re[ye],_e=n.get(lt);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),oe(i.TEXTURE_2D,lt),fe(ee.__webglFramebuffer,D,lt,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),m(lt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ye=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,ce.__webglTexture),oe(ye,E),E.mipmaps&&E.mipmaps.length>0)for(let De=0;De<E.mipmaps.length;De++)fe(ee.__webglFramebuffer[De],D,E,i.COLOR_ATTACHMENT0,ye,De);else fe(ee.__webglFramebuffer,D,E,i.COLOR_ATTACHMENT0,ye,0);m(E)&&p(ye),t.unbindTexture()}D.depthBuffer&&Xe(D)}function rt(D){const E=D.textures;for(let ee=0,ce=E.length;ee<ce;ee++){const re=E[ee];if(m(re)){const q=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,be=n.get(re).__webglTexture;t.bindTexture(q,be),p(q),t.unbindTexture()}}}const nt=[],N=[];function qt(D){if(D.samples>0){if(ut(D)===!1){const E=D.textures,ee=D.width,ce=D.height;let re=i.COLOR_BUFFER_BIT;const q=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(D),ye=E.length>1;if(ye)for(let De=0;De<E.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let De=0;De<E.length;De++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[De]);const lt=n.get(E[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,ee,ce,0,0,ee,ce,re,i.NEAREST),l===!0&&(nt.length=0,N.length=0,nt.push(i.COLOR_ATTACHMENT0+De),D.depthBuffer&&D.resolveDepthBuffer===!1&&(nt.push(q),N.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let De=0;De<E.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,be.__webglColorRenderbuffer[De]);const lt=n.get(E[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,lt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const E=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ot(D){return Math.min(s.maxSamples,D.samples)}function ut(D){const E=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ke(D){const E=a.render.frame;u.get(D)!==E&&(u.set(D,E),D.update())}function Tt(D,E){const ee=D.colorSpace,ce=D.format,re=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ee!==Us&&ee!==Es&&(At.getTransfer(ee)===Vt?(ce!==An||re!==os)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),E}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=b,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=Y,this.setTextureCube=F,this.rebindTextures=Fe,this.setupRenderTarget=He,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ut}function ZS(i,e){function t(n,s=Es){let r;const a=At.getTransfer(s);if(n===os)return i.UNSIGNED_BYTE;if(n===bu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===um)return i.BYTE;if(n===dm)return i.SHORT;if(n===to)return i.UNSIGNED_SHORT;if(n===wu)return i.INT;if(n===ir)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===ho)return i.HALF_FLOAT;if(n===pm)return i.ALPHA;if(n===mm)return i.RGB;if(n===An)return i.RGBA;if(n===gm)return i.LUMINANCE;if(n===vm)return i.LUMINANCE_ALPHA;if(n===Kr)return i.DEPTH_COMPONENT;if(n===aa)return i.DEPTH_STENCIL;if(n===Eu)return i.RED;if(n===Au)return i.RED_INTEGER;if(n===_m)return i.RG;if(n===Cu)return i.RG_INTEGER;if(n===Ru)return i.RGBA_INTEGER;if(n===cl||n===hl||n===ul||n===dl)if(a===Vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ul)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ah||n===Ch||n===Rh||n===Ph)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ah)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ch)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ph)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dh||n===Lh||n===Ih)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dh||n===Lh)return a===Vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ih)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uh||n===Fh||n===Nh||n===kh||n===Oh||n===zh||n===Bh||n===Hh||n===Vh||n===Gh||n===Wh||n===$h||n===Xh||n===qh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$h)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qh)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fl||n===jh||n===Yh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===fl)return a===Vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xm||n===Kh||n===Zh||n===Jh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===fl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ra?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class JS extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class is extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QS={type:"move"};class Yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,v=.005;c.inputState.pinching&&h>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(QS)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new is;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ew=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tw=`
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

}`;class nw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Fn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new cs({vertexShader:ew,fragmentShader:tw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new ur(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iw extends cr{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,v=null;const _=new nw,m=t.getContextAttributes();let p=null,x=null;const y=[],w=[],I=new we;let C=null;const P=new pi;P.layers.enable(1),P.viewport=new en;const U=new pi;U.layers.enable(2),U.viewport=new en;const ie=[P,U],S=new JS;S.layers.enable(1),S.layers.enable(2);let b=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let fe=y[se];return fe===void 0&&(fe=new Yc,y[se]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(se){let fe=y[se];return fe===void 0&&(fe=new Yc,y[se]=fe),fe.getGripSpace()},this.getHand=function(se){let fe=y[se];return fe===void 0&&(fe=new Yc,y[se]=fe),fe.getHandSpace()};function z(se){const fe=w.indexOf(se.inputSource);if(fe===-1)return;const xe=y[fe];xe!==void 0&&(xe.update(se.inputSource,se.frame,c||a),xe.dispatchEvent({type:se.type,data:se.inputSource}))}function j(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",Z);for(let se=0;se<y.length;se++){const fe=w[se];fe!==null&&(w[se]=null,y[se].disconnect(fe))}b=null,H=null,_.reset(),e.setRenderTarget(p),f=null,h=null,d=null,s=null,x=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",j),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Pi(f.framebufferWidth,f.framebufferHeight,{format:An,type:os,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,xe=null,ge=null;m.depth&&(ge=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?aa:Kr,xe=m.stencil?ra:ir);const Xe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(Xe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Pi(h.textureWidth,h.textureHeight,{format:An,type:os,depthTexture:new Lm(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),he.setContext(s),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(se){for(let fe=0;fe<se.removed.length;fe++){const xe=se.removed[fe],ge=w.indexOf(xe);ge>=0&&(w[ge]=null,y[ge].disconnect(xe))}for(let fe=0;fe<se.added.length;fe++){const xe=se.added[fe];let ge=w.indexOf(xe);if(ge===-1){for(let Fe=0;Fe<y.length;Fe++)if(Fe>=w.length){w.push(xe),ge=Fe;break}else if(w[Fe]===null){w[Fe]=xe,ge=Fe;break}if(ge===-1)break}const Xe=y[ge];Xe&&Xe.connect(xe)}}const Y=new O,F=new O;function ne(se,fe,xe){Y.setFromMatrixPosition(fe.matrixWorld),F.setFromMatrixPosition(xe.matrixWorld);const ge=Y.distanceTo(F),Xe=fe.projectionMatrix.elements,Fe=xe.projectionMatrix.elements,He=Xe[14]/(Xe[10]-1),rt=Xe[14]/(Xe[10]+1),nt=(Xe[9]+1)/Xe[5],N=(Xe[9]-1)/Xe[5],qt=(Xe[8]-1)/Xe[0],ot=(Fe[8]+1)/Fe[0],ut=He*qt,Ke=He*ot,Tt=ge/(-qt+ot),Ye=Tt*-qt;if(fe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Ye),se.translateZ(Tt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Xe[10]===-1)se.projectionMatrix.copy(fe.projectionMatrix),se.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const D=He+Tt,E=rt+Tt,ee=ut-Ye,ce=Ke+(ge-Ye),re=nt*rt/E*D,q=N*rt/E*D;se.projectionMatrix.makePerspective(ee,ce,re,q,D,E),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function pe(se,fe){fe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(fe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let fe=se.near,xe=se.far;_.texture!==null&&(_.depthNear>0&&(fe=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),S.near=U.near=P.near=fe,S.far=U.far=P.far=xe,(b!==S.near||H!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,H=S.far);const ge=se.parent,Xe=S.cameras;pe(S,ge);for(let Fe=0;Fe<Xe.length;Fe++)pe(Xe[Fe],ge);Xe.length===2?ne(S,P,U):S.projectionMatrix.copy(P.projectionMatrix),le(se,S,ge)};function le(se,fe,xe){xe===null?se.matrix.copy(fe.matrixWorld):(se.matrix.copy(xe.matrixWorld),se.matrix.invert(),se.matrix.multiply(fe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(fe.projectionMatrix),se.projectionMatrixInverse.copy(fe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=no*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(se){l=se,h!==null&&(h.fixedFoveation=se),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=se)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let oe=null;function me(se,fe){if(u=fe.getViewerPose(c||a),v=fe,u!==null){const xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ge=!1;xe.length!==S.cameras.length&&(S.cameras.length=0,ge=!0);for(let Fe=0;Fe<xe.length;Fe++){const He=xe[Fe];let rt=null;if(f!==null)rt=f.getViewport(He);else{const N=d.getViewSubImage(h,He);rt=N.viewport,Fe===0&&(e.setRenderTargetTextures(x,N.colorTexture,h.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(x))}let nt=ie[Fe];nt===void 0&&(nt=new pi,nt.layers.enable(Fe),nt.viewport=new en,ie[Fe]=nt),nt.matrix.fromArray(He.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(He.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(rt.x,rt.y,rt.width,rt.height),Fe===0&&(S.matrix.copy(nt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ge===!0&&S.cameras.push(nt)}const Xe=s.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")){const Fe=d.getDepthInformation(xe[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(e,Fe,s.renderState)}}for(let xe=0;xe<y.length;xe++){const ge=w[xe],Xe=y[xe];ge!==null&&Xe!==void 0&&Xe.update(ge,fe,c||a)}oe&&oe(se,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),v=null}const he=new Dm;he.setAnimationLoop(me),this.setAnimationLoop=function(se){oe=se},this.dispose=function(){}}}const $s=new ls,sw=new It;function rw(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Am(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,w=x.envMapRotation;y&&(m.envMap.value=y,$s.copy(w),$s.x*=-1,$s.y*=-1,$s.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),m.envMapRotation.value.setFromMatrix4(sw.makeRotationFromEuler($s)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function aw(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const w=y.program;n.uniformBlockBinding(x,w)}function c(x,y){let w=s[x.id];w===void 0&&(v(x),w=u(x),s[x.id]=w,x.addEventListener("dispose",m));const I=y.program;n.updateUBOMapping(x,I);const C=e.render.frame;r[x.id]!==C&&(h(x),r[x.id]=C)}function u(x){const y=d();x.__bindingPointIndex=y;const w=i.createBuffer(),I=x.__size,C=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,I,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,w),w}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const y=s[x.id],w=x.uniforms,I=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,P=w.length;C<P;C++){const U=Array.isArray(w[C])?w[C]:[w[C]];for(let ie=0,S=U.length;ie<S;ie++){const b=U[ie];if(f(b,C,ie,I)===!0){const H=b.__offset,z=Array.isArray(b.value)?b.value:[b.value];let j=0;for(let Z=0;Z<z.length;Z++){const Y=z[Z],F=_(Y);typeof Y=="number"||typeof Y=="boolean"?(b.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,H+j,b.__data)):Y.isMatrix3?(b.__data[0]=Y.elements[0],b.__data[1]=Y.elements[1],b.__data[2]=Y.elements[2],b.__data[3]=0,b.__data[4]=Y.elements[3],b.__data[5]=Y.elements[4],b.__data[6]=Y.elements[5],b.__data[7]=0,b.__data[8]=Y.elements[6],b.__data[9]=Y.elements[7],b.__data[10]=Y.elements[8],b.__data[11]=0):(Y.toArray(b.__data,j),j+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,y,w,I){const C=x.value,P=y+"_"+w;if(I[P]===void 0)return typeof C=="number"||typeof C=="boolean"?I[P]=C:I[P]=C.clone(),!0;{const U=I[P];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return I[P]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function v(x){const y=x.uniforms;let w=0;const I=16;for(let P=0,U=y.length;P<U;P++){const ie=Array.isArray(y[P])?y[P]:[y[P]];for(let S=0,b=ie.length;S<b;S++){const H=ie[S],z=Array.isArray(H.value)?H.value:[H.value];for(let j=0,Z=z.length;j<Z;j++){const Y=z[j],F=_(Y),ne=w%I,pe=ne%F.boundary,le=ne+pe;w+=pe,le!==0&&I-le<F.storage&&(w+=I-le),H.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=F.storage}}}const C=w%I;return C>0&&(w+=I-C),x.__size=w,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class ow{constructor(e={}){const{canvas:t=jv(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const f=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=di,this.toneMapping=Ds,this.toneMappingExposure=1;const y=this;let w=!1,I=0,C=0,P=null,U=-1,ie=null;const S=new en,b=new en;let H=null;const z=new at(0);let j=0,Z=t.width,Y=t.height,F=1,ne=null,pe=null;const le=new en(0,0,Z,Y),oe=new en(0,0,Z,Y);let me=!1;const he=new Pm;let se=!1,fe=!1;const xe=new It,ge=new It,Xe=new O,Fe=new en,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function nt(){return P===null?F:1}let N=n;function qt(A,$){return t.getContext(A,$)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Su}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),N===null){const $="webgl2";if(N=qt($,A),N===null)throw qt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ot,ut,Ke,Tt,Ye,D,E,ee,ce,re,q,be,ye,De,lt,_e,Le,Ve,We,Ee,et,tt,St,G;function Ae(){ot=new dM(N),ot.init(),tt=new ZS(N,ot),ut=new aM(N,ot,e,tt),Ke=new jS(N),ut.reverseDepthBuffer&&Ke.buffers.depth.setReversed(!0),Tt=new mM(N),Ye=new IS,D=new KS(N,ot,Ke,Ye,ut,tt,Tt),E=new lM(y),ee=new uM(y),ce=new S_(N),St=new sM(N,ce),re=new fM(N,ce,Tt,St),q=new vM(N,re,ce,Tt),We=new gM(N,ut,D),_e=new oM(Ye),be=new LS(y,E,ee,ot,ut,St,_e),ye=new rw(y,Ye),De=new FS,lt=new HS(ot),Ve=new iM(y,E,ee,Ke,q,h,l),Le=new XS(y,q,ut),G=new aw(N,Tt,ut,Ke),Ee=new rM(N,ot,Tt),et=new pM(N,ot,Tt),Tt.programs=be.programs,y.capabilities=ut,y.extensions=ot,y.properties=Ye,y.renderLists=De,y.shadowMap=Le,y.state=Ke,y.info=Tt}Ae();const ae=new iw(y,N);this.xr=ae,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(Z,Y,!1))},this.getSize=function(A){return A.set(Z,Y)},this.setSize=function(A,$,K=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,Y=$,t.width=Math.floor(A*F),t.height=Math.floor($*F),K===!0&&(t.style.width=A+"px",t.style.height=$+"px"),this.setViewport(0,0,A,$)},this.getDrawingBufferSize=function(A){return A.set(Z*F,Y*F).floor()},this.setDrawingBufferSize=function(A,$,K){Z=A,Y=$,F=K,t.width=Math.floor(A*K),t.height=Math.floor($*K),this.setViewport(0,0,A,$)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,$,K,J){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,$,K,J),Ke.viewport(S.copy(le).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(oe)},this.setScissor=function(A,$,K,J){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,$,K,J),Ke.scissor(b.copy(oe).multiplyScalar(F).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(A){Ke.setScissorTest(me=A)},this.setOpaqueSort=function(A){ne=A},this.setTransparentSort=function(A){pe=A},this.getClearColor=function(A){return A.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(A=!0,$=!0,K=!0){let J=0;if(A){let V=!1;if(P!==null){const Me=P.texture.format;V=Me===Ru||Me===Cu||Me===Au}if(V){const Me=P.texture.type,Te=Me===os||Me===ir||Me===to||Me===ra||Me===bu||Me===Tu,Ne=Ve.getClearColor(),Be=Ve.getClearAlpha(),Ze=Ne.r,Je=Ne.g,ze=Ne.b;Te?(f[0]=Ze,f[1]=Je,f[2]=ze,f[3]=Be,N.clearBufferuiv(N.COLOR,0,f)):(v[0]=Ze,v[1]=Je,v[2]=ze,v[3]=Be,N.clearBufferiv(N.COLOR,0,v))}else J|=N.COLOR_BUFFER_BIT}$&&(J|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),K&&(J|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),De.dispose(),lt.dispose(),Ye.dispose(),E.dispose(),ee.dispose(),q.dispose(),St.dispose(),G.dispose(),be.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ln),ae.removeEventListener("sessionend",Jn),jn.stop()};function ue(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=Tt.autoReset,$=Le.enabled,K=Le.autoUpdate,J=Le.needsUpdate,V=Le.type;Ae(),Tt.autoReset=A,Le.enabled=$,Le.autoUpdate=K,Le.needsUpdate=J,Le.type=V}function Ie(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function mt(A){const $=A.target;$.removeEventListener("dispose",mt),jt($)}function jt(A){Pn(A),Ye.remove(A)}function Pn(A){const $=Ye.get(A).programs;$!==void 0&&($.forEach(function(K){be.releaseProgram(K)}),A.isShaderMaterial&&be.releaseShaderCache(A))}this.renderBufferDirect=function(A,$,K,J,V,Me){$===null&&($=He);const Te=V.isMesh&&V.matrixWorld.determinant()<0,Ne=Wi(A,$,K,J,V);Ke.setMaterial(J,Te);let Be=K.index,Ze=1;if(J.wireframe===!0){if(Be=re.getWireframeAttribute(K),Be===void 0)return;Ze=2}const Je=K.drawRange,ze=K.attributes.position;let _t=Je.start*Ze,Rt=(Je.start+Je.count)*Ze;Me!==null&&(_t=Math.max(_t,Me.start*Ze),Rt=Math.min(Rt,(Me.start+Me.count)*Ze)),Be!==null?(_t=Math.max(_t,0),Rt=Math.min(Rt,Be.count)):ze!=null&&(_t=Math.max(_t,0),Rt=Math.min(Rt,ze.count));const Nt=Rt-_t;if(Nt<0||Nt===1/0)return;St.setup(V,J,Ne,K,Be);let wn,gt=Ee;if(Be!==null&&(wn=ce.get(Be),gt=et,gt.setIndex(wn)),V.isMesh)J.wireframe===!0?(Ke.setLineWidth(J.wireframeLinewidth*nt()),gt.setMode(N.LINES)):gt.setMode(N.TRIANGLES);else if(V.isLine){let Ge=J.linewidth;Ge===void 0&&(Ge=1),Ke.setLineWidth(Ge*nt()),V.isLineSegments?gt.setMode(N.LINES):V.isLineLoop?gt.setMode(N.LINE_LOOP):gt.setMode(N.LINE_STRIP)}else V.isPoints?gt.setMode(N.POINTS):V.isSprite&&gt.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)gt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))gt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ge=V._multiDrawStarts,Jt=V._multiDrawCounts,it=V._multiDrawCount,Yn=Be?ce.get(Be).bytesPerElement:1,$i=Ye.get(J).currentProgram.getUniforms();for(let bn=0;bn<it;bn++)$i.setValue(N,"_gl_DrawID",bn),gt.render(Ge[bn]/Yn,Jt[bn])}else if(V.isInstancedMesh)gt.renderInstances(_t,Nt,V.count);else if(K.isInstancedBufferGeometry){const Ge=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Jt=Math.min(K.instanceCount,Ge);gt.renderInstances(_t,Nt,Jt)}else gt.render(_t,Nt)};function vt(A,$,K){A.transparent===!0&&A.side===ri&&A.forceSinglePass===!1?(A.side=Xn,A.needsUpdate=!0,Fs(A,$,K),A.side=Ls,A.needsUpdate=!0,Fs(A,$,K),A.side=ri):Fs(A,$,K)}this.compile=function(A,$,K=null){K===null&&(K=A),m=lt.get(K),m.init($),x.push(m),K.traverseVisible(function(V){V.isLight&&V.layers.test($.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==K&&A.traverseVisible(function(V){V.isLight&&V.layers.test($.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const J=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Me=V.material;if(Me)if(Array.isArray(Me))for(let Te=0;Te<Me.length;Te++){const Ne=Me[Te];vt(Ne,K,V),J.add(Ne)}else vt(Me,K,V),J.add(Me)}),x.pop(),m=null,J},this.compileAsync=function(A,$,K=null){const J=this.compile(A,$,K);return new Promise(V=>{function Me(){if(J.forEach(function(Te){Ye.get(Te).currentProgram.isReady()&&J.delete(Te)}),J.size===0){V(A);return}setTimeout(Me,10)}ot.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Dn=null;function Sn(A){Dn&&Dn(A)}function ln(){jn.stop()}function Jn(){jn.start()}const jn=new Dm;jn.setAnimationLoop(Sn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(A){Dn=A,ae.setAnimationLoop(A),A===null?jn.stop():jn.start()},ae.addEventListener("sessionstart",ln),ae.addEventListener("sessionend",Jn),this.render=function(A,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera($),$=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,$,P),m=lt.get(A,x.length),m.init($),x.push(m),ge.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),he.setFromProjectionMatrix(ge),fe=this.localClippingEnabled,se=_e.init(this.clippingPlanes,fe),_=De.get(A,p.length),_.init(),p.push(_),ae.enabled===!0&&ae.isPresenting===!0){const Me=y.xr.getDepthSensingMesh();Me!==null&&Di(Me,$,-1/0,y.sortObjects)}Di(A,$,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(ne,pe),rt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,rt&&Ve.addToRenderList(_,A),this.info.render.frame++,se===!0&&_e.beginShadows();const K=m.state.shadowsArray;Le.render(K,A,$),se===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=_.opaque,V=_.transmissive;if(m.setupLights(),$.isArrayCamera){const Me=$.cameras;if(V.length>0)for(let Te=0,Ne=Me.length;Te<Ne;Te++){const Be=Me[Te];Gi(J,V,A,Be)}rt&&Ve.render(A);for(let Te=0,Ne=Me.length;Te<Ne;Te++){const Be=Me[Te];Nn(_,A,Be,Be.viewport)}}else V.length>0&&Gi(J,V,A,$),rt&&Ve.render(A),Nn(_,A,$);P!==null&&(D.updateMultisampleRenderTarget(P),D.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(y,A,$),St.resetDefaultState(),U=-1,ie=null,x.pop(),x.length>0?(m=x[x.length-1],se===!0&&_e.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Di(A,$,K,J){if(A.visible===!1)return;if(A.layers.test($.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update($);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||he.intersectsSprite(A)){J&&Fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ge);const Te=q.update(A),Ne=A.material;Ne.visible&&_.push(A,Te,Ne,K,Fe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||he.intersectsObject(A))){const Te=q.update(A),Ne=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Fe.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Fe.copy(Te.boundingSphere.center)),Fe.applyMatrix4(A.matrixWorld).applyMatrix4(ge)),Array.isArray(Ne)){const Be=Te.groups;for(let Ze=0,Je=Be.length;Ze<Je;Ze++){const ze=Be[Ze],_t=Ne[ze.materialIndex];_t&&_t.visible&&_.push(A,Te,_t,K,Fe.z,ze)}}else Ne.visible&&_.push(A,Te,Ne,K,Fe.z,null)}}const Me=A.children;for(let Te=0,Ne=Me.length;Te<Ne;Te++)Di(Me[Te],$,K,J)}function Nn(A,$,K,J){const V=A.opaque,Me=A.transmissive,Te=A.transparent;m.setupLightsView(K),se===!0&&_e.setGlobalState(y.clippingPlanes,K),J&&Ke.viewport(S.copy(J)),V.length>0&&_i(V,$,K),Me.length>0&&_i(Me,$,K),Te.length>0&&_i(Te,$,K),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Gi(A,$,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new Pi(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?ho:os,minFilter:Cs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Me=m.state.transmissionRenderTarget[J.id],Te=J.viewport||S;Me.setSize(Te.z,Te.w);const Ne=y.getRenderTarget();y.setRenderTarget(Me),y.getClearColor(z),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),rt&&Ve.render(K);const Be=y.toneMapping;y.toneMapping=Ds;const Ze=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),se===!0&&_e.setGlobalState(y.clippingPlanes,J),_i(A,K,J),D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ze=0,_t=$.length;ze<_t;ze++){const Rt=$[ze],Nt=Rt.object,wn=Rt.geometry,gt=Rt.material,Ge=Rt.group;if(gt.side===ri&&Nt.layers.test(J.layers)){const Jt=gt.side;gt.side=Xn,gt.needsUpdate=!0,xa(Nt,K,J,wn,gt,Ge),gt.side=Jt,gt.needsUpdate=!0,Je=!0}}Je===!0&&(D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me))}y.setRenderTarget(Ne),y.setClearColor(z,j),Ze!==void 0&&(J.viewport=Ze),y.toneMapping=Be}function _i(A,$,K){const J=$.isScene===!0?$.overrideMaterial:null;for(let V=0,Me=A.length;V<Me;V++){const Te=A[V],Ne=Te.object,Be=Te.geometry,Ze=J===null?Te.material:J,Je=Te.group;Ne.layers.test(K.layers)&&xa(Ne,$,K,Be,Ze,Je)}}function xa(A,$,K,J,V,Me){A.onBeforeRender(y,$,K,J,V,Me),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(y,$,K,J,A,Me),V.transparent===!0&&V.side===ri&&V.forceSinglePass===!1?(V.side=Xn,V.needsUpdate=!0,y.renderBufferDirect(K,$,J,V,A,Me),V.side=Ls,V.needsUpdate=!0,y.renderBufferDirect(K,$,J,V,A,Me),V.side=ri):y.renderBufferDirect(K,$,J,V,A,Me),A.onAfterRender(y,$,K,J,V,Me)}function Fs(A,$,K){$.isScene!==!0&&($=He);const J=Ye.get(A),V=m.state.lights,Me=m.state.shadowsArray,Te=V.state.version,Ne=be.getParameters(A,V.state,Me,$,K),Be=be.getProgramCacheKey(Ne);let Ze=J.programs;J.environment=A.isMeshStandardMaterial?$.environment:null,J.fog=$.fog,J.envMap=(A.isMeshStandardMaterial?ee:E).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?$.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",mt),Ze=new Map,J.programs=Ze);let Je=Ze.get(Be);if(Je!==void 0){if(J.currentProgram===Je&&J.lightsStateVersion===Te)return go(A,Ne),Je}else Ne.uniforms=be.getUniforms(A),A.onBeforeCompile(Ne,y),Je=be.acquireProgram(Ne,Be),Ze.set(Be,Je),J.uniforms=Ne.uniforms;const ze=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=_e.uniform),go(A,Ne),J.needsLights=Ns(A),J.lightsStateVersion=Te,J.needsLights&&(ze.ambientLightColor.value=V.state.ambient,ze.lightProbe.value=V.state.probe,ze.directionalLights.value=V.state.directional,ze.directionalLightShadows.value=V.state.directionalShadow,ze.spotLights.value=V.state.spot,ze.spotLightShadows.value=V.state.spotShadow,ze.rectAreaLights.value=V.state.rectArea,ze.ltc_1.value=V.state.rectAreaLTC1,ze.ltc_2.value=V.state.rectAreaLTC2,ze.pointLights.value=V.state.point,ze.pointLightShadows.value=V.state.pointShadow,ze.hemisphereLights.value=V.state.hemi,ze.directionalShadowMap.value=V.state.directionalShadowMap,ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ze.spotShadowMap.value=V.state.spotShadowMap,ze.spotLightMatrix.value=V.state.spotLightMatrix,ze.spotLightMap.value=V.state.spotLightMap,ze.pointShadowMap.value=V.state.pointShadowMap,ze.pointShadowMatrix.value=V.state.pointShadowMatrix),J.currentProgram=Je,J.uniformsList=null,Je}function mo(A){if(A.uniformsList===null){const $=A.currentProgram.getUniforms();A.uniformsList=ml.seqWithValue($.seq,A.uniforms)}return A.uniformsList}function go(A,$){const K=Ye.get(A);K.outputColorSpace=$.outputColorSpace,K.batching=$.batching,K.batchingColor=$.batchingColor,K.instancing=$.instancing,K.instancingColor=$.instancingColor,K.instancingMorph=$.instancingMorph,K.skinning=$.skinning,K.morphTargets=$.morphTargets,K.morphNormals=$.morphNormals,K.morphColors=$.morphColors,K.morphTargetsCount=$.morphTargetsCount,K.numClippingPlanes=$.numClippingPlanes,K.numIntersection=$.numClipIntersection,K.vertexAlphas=$.vertexAlphas,K.vertexTangents=$.vertexTangents,K.toneMapping=$.toneMapping}function Wi(A,$,K,J,V){$.isScene!==!0&&($=He),D.resetTextureUnits();const Me=$.fog,Te=J.isMeshStandardMaterial?$.environment:null,Ne=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Us,Be=(J.isMeshStandardMaterial?ee:E).get(J.envMap||Te),Ze=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Je=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ze=!!K.morphAttributes.position,_t=!!K.morphAttributes.normal,Rt=!!K.morphAttributes.color;let Nt=Ds;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Nt=y.toneMapping);const wn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,gt=wn!==void 0?wn.length:0,Ge=Ye.get(J),Jt=m.state.lights;if(se===!0&&(fe===!0||A!==ie)){const kn=A===ie&&J.id===U;_e.setState(J,A,kn)}let it=!1;J.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Jt.state.version||Ge.outputColorSpace!==Ne||V.isBatchedMesh&&Ge.batching===!1||!V.isBatchedMesh&&Ge.batching===!0||V.isBatchedMesh&&Ge.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ge.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ge.instancing===!1||!V.isInstancedMesh&&Ge.instancing===!0||V.isSkinnedMesh&&Ge.skinning===!1||!V.isSkinnedMesh&&Ge.skinning===!0||V.isInstancedMesh&&Ge.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ge.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ge.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ge.instancingMorph===!1&&V.morphTexture!==null||Ge.envMap!==Be||J.fog===!0&&Ge.fog!==Me||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==_e.numPlanes||Ge.numIntersection!==_e.numIntersection)||Ge.vertexAlphas!==Ze||Ge.vertexTangents!==Je||Ge.morphTargets!==ze||Ge.morphNormals!==_t||Ge.morphColors!==Rt||Ge.toneMapping!==Nt||Ge.morphTargetsCount!==gt)&&(it=!0):(it=!0,Ge.__version=J.version);let Yn=Ge.currentProgram;it===!0&&(Yn=Fs(J,$,V));let $i=!1,bn=!1,pr=!1;const $t=Yn.getUniforms(),Li=Ge.uniforms;if(Ke.useProgram(Yn.program)&&($i=!0,bn=!0,pr=!0),J.id!==U&&(U=J.id,bn=!0),$i||ie!==A){ut.reverseDepthBuffer?(xe.copy(A.projectionMatrix),Kv(xe),Zv(xe),$t.setValue(N,"projectionMatrix",xe)):$t.setValue(N,"projectionMatrix",A.projectionMatrix),$t.setValue(N,"viewMatrix",A.matrixWorldInverse);const kn=$t.map.cameraPosition;kn!==void 0&&kn.setValue(N,Xe.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&$t.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&$t.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),ie!==A&&(ie=A,bn=!0,pr=!0)}if(V.isSkinnedMesh){$t.setOptional(N,V,"bindMatrix"),$t.setOptional(N,V,"bindMatrixInverse");const kn=V.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),$t.setValue(N,"boneTexture",kn.boneTexture,D))}V.isBatchedMesh&&($t.setOptional(N,V,"batchingTexture"),$t.setValue(N,"batchingTexture",V._matricesTexture,D),$t.setOptional(N,V,"batchingIdTexture"),$t.setValue(N,"batchingIdTexture",V._indirectTexture,D),$t.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&$t.setValue(N,"batchingColorTexture",V._colorsTexture,D));const ya=K.morphAttributes;if((ya.position!==void 0||ya.normal!==void 0||ya.color!==void 0)&&We.update(V,K,Yn),(bn||Ge.receiveShadow!==V.receiveShadow)&&(Ge.receiveShadow=V.receiveShadow,$t.setValue(N,"receiveShadow",V.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Li.envMap.value=Be,Li.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&$.environment!==null&&(Li.envMapIntensity.value=$.environmentIntensity),bn&&($t.setValue(N,"toneMappingExposure",y.toneMappingExposure),Ge.needsLights&&oc(Li,pr),Me&&J.fog===!0&&ye.refreshFogUniforms(Li,Me),ye.refreshMaterialUniforms(Li,J,F,Y,m.state.transmissionRenderTarget[A.id]),ml.upload(N,mo(Ge),Li,D)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ml.upload(N,mo(Ge),Li,D),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&$t.setValue(N,"center",V.center),$t.setValue(N,"modelViewMatrix",V.modelViewMatrix),$t.setValue(N,"normalMatrix",V.normalMatrix),$t.setValue(N,"modelMatrix",V.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const kn=J.uniformsGroups;for(let mr=0,lc=kn.length;mr<lc;mr++){const Ma=kn[mr];G.update(Ma,Yn),G.bind(Ma,Yn)}}return Yn}function oc(A,$){A.ambientLightColor.needsUpdate=$,A.lightProbe.needsUpdate=$,A.directionalLights.needsUpdate=$,A.directionalLightShadows.needsUpdate=$,A.pointLights.needsUpdate=$,A.pointLightShadows.needsUpdate=$,A.spotLights.needsUpdate=$,A.spotLightShadows.needsUpdate=$,A.rectAreaLights.needsUpdate=$,A.hemisphereLights.needsUpdate=$}function Ns(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,$,K){Ye.get(A.texture).__webglTexture=$,Ye.get(A.depthTexture).__webglTexture=K;const J=Ye.get(A);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,$){const K=Ye.get(A);K.__webglFramebuffer=$,K.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(A,$=0,K=0){P=A,I=$,C=K;let J=!0,V=null,Me=!1,Te=!1;if(A){const Be=Ye.get(A);if(Be.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(N.FRAMEBUFFER,null),J=!1;else if(Be.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(Be.__hasExternalTextures)D.rebindTextures(A,Ye.get(A.texture).__webglTexture,Ye.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ze=A.depthTexture;if(Be.__boundDepthTexture!==ze){if(ze!==null&&Ye.has(ze)&&(A.width!==ze.image.width||A.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const Ze=A.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Te=!0);const Je=Ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[$])?V=Je[$][K]:V=Je[$],Me=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?V=Ye.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?V=Je[K]:V=Je,S.copy(A.viewport),b.copy(A.scissor),H=A.scissorTest}else S.copy(le).multiplyScalar(F).floor(),b.copy(oe).multiplyScalar(F).floor(),H=me;if(Ke.bindFramebuffer(N.FRAMEBUFFER,V)&&J&&Ke.drawBuffers(A,V),Ke.viewport(S),Ke.scissor(b),Ke.setScissorTest(H),Me){const Be=Ye.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be.__webglTexture,K)}else if(Te){const Be=Ye.get(A.texture),Ze=$||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.__webglTexture,K||0,Ze)}U=-1},this.readRenderTargetPixels=function(A,$,K,J,V,Me,Te){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne){Ke.bindFramebuffer(N.FRAMEBUFFER,Ne);try{const Be=A.texture,Ze=Be.format,Je=Be.type;if(!ut.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=A.width-J&&K>=0&&K<=A.height-V&&N.readPixels($,K,J,V,tt.convert(Ze),tt.convert(Je),Me)}finally{const Be=P!==null?Ye.get(P).__webglFramebuffer:null;Ke.bindFramebuffer(N.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,$,K,J,V,Me,Te){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne){const Be=A.texture,Ze=Be.format,Je=Be.type;if(!ut.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=A.width-J&&K>=0&&K<=A.height-V){Ke.bindFramebuffer(N.FRAMEBUFFER,Ne);const ze=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ze),N.bufferData(N.PIXEL_PACK_BUFFER,Me.byteLength,N.STREAM_READ),N.readPixels($,K,J,V,tt.convert(Ze),tt.convert(Je),0);const _t=P!==null?Ye.get(P).__webglFramebuffer:null;Ke.bindFramebuffer(N.FRAMEBUFFER,_t);const Rt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Yv(N,Rt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ze),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Me),N.deleteBuffer(ze),N.deleteSync(Rt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,$=null,K=0){A.isTexture!==!0&&(pl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1]);const J=Math.pow(2,-K),V=Math.floor(A.image.width*J),Me=Math.floor(A.image.height*J),Te=$!==null?$.x:0,Ne=$!==null?$.y:0;D.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,Te,Ne,V,Me),Ke.unbindTexture()},this.copyTextureToTexture=function(A,$,K=null,J=null,V=0){A.isTexture!==!0&&(pl("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,A=arguments[1],$=arguments[2],V=arguments[3]||0,K=null);let Me,Te,Ne,Be,Ze,Je;K!==null?(Me=K.max.x-K.min.x,Te=K.max.y-K.min.y,Ne=K.min.x,Be=K.min.y):(Me=A.image.width,Te=A.image.height,Ne=0,Be=0),J!==null?(Ze=J.x,Je=J.y):(Ze=0,Je=0);const ze=tt.convert($.format),_t=tt.convert($.type);D.setTexture2D($,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,$.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,$.unpackAlignment);const Rt=N.getParameter(N.UNPACK_ROW_LENGTH),Nt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),wn=N.getParameter(N.UNPACK_SKIP_PIXELS),gt=N.getParameter(N.UNPACK_SKIP_ROWS),Ge=N.getParameter(N.UNPACK_SKIP_IMAGES),Jt=A.isCompressedTexture?A.mipmaps[V]:A.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Jt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Jt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ne),N.pixelStorei(N.UNPACK_SKIP_ROWS,Be),A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,V,Ze,Je,Me,Te,ze,_t,Jt.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,V,Ze,Je,Jt.width,Jt.height,ze,Jt.data):N.texSubImage2D(N.TEXTURE_2D,V,Ze,Je,Me,Te,ze,_t,Jt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Rt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Nt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,wn),N.pixelStorei(N.UNPACK_SKIP_ROWS,gt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ge),V===0&&$.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ke.unbindTexture()},this.copyTextureToTexture3D=function(A,$,K=null,J=null,V=0){A.isTexture!==!0&&(pl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,J=arguments[1]||null,A=arguments[2],$=arguments[3],V=arguments[4]||0);let Me,Te,Ne,Be,Ze,Je,ze,_t,Rt;const Nt=A.isCompressedTexture?A.mipmaps[V]:A.image;K!==null?(Me=K.max.x-K.min.x,Te=K.max.y-K.min.y,Ne=K.max.z-K.min.z,Be=K.min.x,Ze=K.min.y,Je=K.min.z):(Me=Nt.width,Te=Nt.height,Ne=Nt.depth,Be=0,Ze=0,Je=0),J!==null?(ze=J.x,_t=J.y,Rt=J.z):(ze=0,_t=0,Rt=0);const wn=tt.convert($.format),gt=tt.convert($.type);let Ge;if($.isData3DTexture)D.setTexture3D($,0),Ge=N.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)D.setTexture2DArray($,0),Ge=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,$.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,$.unpackAlignment);const Jt=N.getParameter(N.UNPACK_ROW_LENGTH),it=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Yn=N.getParameter(N.UNPACK_SKIP_PIXELS),$i=N.getParameter(N.UNPACK_SKIP_ROWS),bn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Nt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Nt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Be),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ze),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Je),A.isDataTexture||A.isData3DTexture?N.texSubImage3D(Ge,V,ze,_t,Rt,Me,Te,Ne,wn,gt,Nt.data):$.isCompressedArrayTexture?N.compressedTexSubImage3D(Ge,V,ze,_t,Rt,Me,Te,Ne,wn,Nt.data):N.texSubImage3D(Ge,V,ze,_t,Rt,Me,Te,Ne,wn,gt,Nt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Jt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,it),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Yn),N.pixelStorei(N.UNPACK_SKIP_ROWS,$i),N.pixelStorei(N.UNPACK_SKIP_IMAGES,bn),V===0&&$.generateMipmaps&&N.generateMipmap(Ge),Ke.unbindTexture()},this.initRenderTarget=function(A){Ye.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),Ke.unbindTexture()},this.resetState=function(){I=0,C=0,P=null,Ke.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ns}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Pu?"display-p3":"srgb",t.unpackColorSpace=At.workingColorSpace===Gl?"display-p3":"srgb"}}class Xl extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ls,this.environmentIntensity=1,this.environmentRotation=new ls,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Uu extends Fn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=kt,u=kt,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eu extends Cn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zr=new It,Cf=new It,Go=[],Rf=new Bi,lw=new It,La=new yt,Ia=new Hi;class cw extends yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new eu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),Rf.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(Rf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),Ia.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(Ia)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(La.geometry=this.geometry,La.material=this.material,La.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(n),e.ray.intersectsSphere(Ia)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zr),Cf.multiplyMatrices(n,zr),La.matrixWorld=Cf,La.raycast(e,Go);for(let a=0,o=Go.length;a<o;a++){const l=Go[a];l.instanceId=r,l.object=this,t.push(l)}Go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new eu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Uu(new Float32Array(s*this.count),s,this.count,Eu,Un));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class tu extends da{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tl=new O,El=new O,Pf=new It,Ua=new uo,Wo=new Hi,Kc=new O,Df=new O;class km extends qn{constructor(e=new Zt,t=new tu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Tl.fromBufferAttribute(t,s-1),El.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Tl.distanceTo(El);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,e.ray.intersectsSphere(Wo)===!1)return;Pf.copy(s).invert(),Ua.copy(e.ray).applyMatrix4(Pf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let _=f,m=v-1;_<m;_+=c){const p=u.getX(_),x=u.getX(_+1),y=$o(this,e,Ua,l,p,x);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(v-1),m=u.getX(f),p=$o(this,e,Ua,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let _=f,m=v-1;_<m;_+=c){const p=$o(this,e,Ua,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=$o(this,e,Ua,l,v-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $o(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(Tl.fromBufferAttribute(a,s),El.fromBufferAttribute(a,r),t.distanceSqToSegment(Tl,El,Kc,Df)>n)return;Kc.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Kc);if(!(l<e.near||l>e.far))return{distance:l,point:Df.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Lf=new O,If=new O;class Uf extends km{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Lf.fromBufferAttribute(t,s),If.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Lf.distanceTo(If);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hw extends da{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ff=new It,nu=new uo,Xo=new Hi,qo=new O;class uw extends qn{constructor(e=new Zt,t=new hw){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(s),Xo.radius+=r,e.ray.intersectsSphere(Xo)===!1)return;Ff.copy(s).invert(),nu.copy(e.ray).applyMatrix4(Ff);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let v=h,_=f;v<_;v++){const m=c.getX(v);qo.fromBufferAttribute(d,m),Nf(qo,m,l,s,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let v=h,_=f;v<_;v++)qo.fromBufferAttribute(d,v),Nf(qo,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Nf(i,e,t,n,s,r,a){const o=nu.distanceSqToPoint(i);if(o<t){const l=new O;nu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Vi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new we:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new O,s=[],r=[],a=[],o=new O,l=new It;for(let f=0;f<=e;f++){const v=f/e;s[f]=this.getTangentAt(v,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(yn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,v))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(yn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],f*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Fu extends Vi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new we){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class dw extends Fu{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Nu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const jo=new O,Zc=new Nu,Jc=new Nu,Qc=new Nu;class fw extends Vi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(jo.subVectors(s[0],s[1]).add(s[0]),c=jo);const d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(jo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=jo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),v<1e-4&&(v=_),m<1e-4&&(m=_),Zc.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,v,_,m),Jc.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,v,_,m),Qc.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,v,_,m)}else this.curveType==="catmullrom"&&(Zc.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Jc.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Qc.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Zc.calc(l),Jc.calc(l),Qc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function kf(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function pw(i,e){const t=1-i;return t*t*e}function mw(i,e){return 2*(1-i)*i*e}function gw(i,e){return i*i*e}function $a(i,e,t,n){return pw(i,e)+mw(i,t)+gw(i,n)}function vw(i,e){const t=1-i;return t*t*t*e}function _w(i,e){const t=1-i;return 3*t*t*i*e}function xw(i,e){return 3*(1-i)*i*i*e}function yw(i,e){return i*i*i*e}function Xa(i,e,t,n,s){return vw(i,e)+_w(i,t)+xw(i,n)+yw(i,s)}class Om extends Vi{constructor(e=new we,t=new we,n=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new we){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xa(e,s.x,r.x,a.x,o.x),Xa(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mw extends Vi{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xa(e,s.x,r.x,a.x,o.x),Xa(e,s.y,r.y,a.y,o.y),Xa(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zm extends Vi{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sw extends Vi{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bm extends Vi{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set($a(e,s.x,r.x,a.x),$a(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ww extends Vi{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set($a(e,s.x,r.x,a.x),$a(e,s.y,r.y,a.y),$a(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hm extends Vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(kf(o,l.x,c.x,u.x,d.x),kf(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new we().fromArray(s))}return this}}var Of=Object.freeze({__proto__:null,ArcCurve:dw,CatmullRomCurve3:fw,CubicBezierCurve:Om,CubicBezierCurve3:Mw,EllipseCurve:Fu,LineCurve:zm,LineCurve3:Sw,QuadraticBezierCurve:Bm,QuadraticBezierCurve3:ww,SplineCurve:Hm});class bw extends Vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Of[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Of[s.type]().fromJSON(s))}return this}}class zf extends bw{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new zm(this.currentPoint.clone(),new we(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Bm(this.currentPoint.clone(),new we(e,t),new we(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Om(this.currentPoint.clone(),new we(e,t),new we(n,s),new we(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Hm(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new Fu(e,t,n,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ku extends Zt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new O,u=new we;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(o,3)),this.setAttribute("uv",new Ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ku(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Al extends Zt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let v=0;const _=[],m=n/2;let p=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Ct(d,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(f,2));function x(){const w=new O,I=new O;let C=0;const P=(t-e)/n;for(let U=0;U<=r;U++){const ie=[],S=U/r,b=S*(t-e)+e;for(let H=0;H<=s;H++){const z=H/s,j=z*l+o,Z=Math.sin(j),Y=Math.cos(j);I.x=b*Z,I.y=-S*n+m,I.z=b*Y,d.push(I.x,I.y,I.z),w.set(Z,P,Y).normalize(),h.push(w.x,w.y,w.z),f.push(z,1-S),ie.push(v++)}_.push(ie)}for(let U=0;U<s;U++)for(let ie=0;ie<r;ie++){const S=_[ie][U],b=_[ie+1][U],H=_[ie+1][U+1],z=_[ie][U+1];e>0&&(u.push(S,b,z),C+=3),t>0&&(u.push(b,H,z),C+=3)}c.addGroup(p,C,0),p+=C}function y(w){const I=v,C=new we,P=new O;let U=0;const ie=w===!0?e:t,S=w===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,m*S,0),h.push(0,S,0),f.push(.5,.5),v++;const b=v;for(let H=0;H<=s;H++){const j=H/s*l+o,Z=Math.cos(j),Y=Math.sin(j);P.x=ie*Y,P.y=m*S,P.z=ie*Z,d.push(P.x,P.y,P.z),h.push(0,S,0),C.x=Z*.5+.5,C.y=Y*.5*S+.5,f.push(C.x,C.y),v++}for(let H=0;H<s;H++){const z=I+H,j=b+H;w===!0?u.push(j,j+1,z):u.push(j+1,j,z),U+=3}c.addGroup(p,U,w===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Yo=new O,Ko=new O,eh=new O,Zo=new gi;class Tw extends Zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Zr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let v=0;v<l;v+=3){a?(c[0]=a.getX(v),c[1]=a.getX(v+1),c[2]=a.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:_,b:m,c:p}=Zo;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Zo.getNormal(eh),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let x=0;x<3;x++){const y=(x+1)%3,w=d[x],I=d[y],C=Zo[u[x]],P=Zo[u[y]],U=`${w}_${I}`,ie=`${I}_${w}`;ie in h&&h[ie]?(eh.dot(h[ie].normal)<=r&&(f.push(C.x,C.y,C.z),f.push(P.x,P.y,P.z)),h[ie]=null):U in h||(h[U]={index0:c[x],index1:c[y],normal:eh.clone()})}}for(const v in h)if(h[v]){const{index0:_,index1:m}=h[v];Yo.fromBufferAttribute(o,_),Ko.fromBufferAttribute(o,m),f.push(Yo.x,Yo.y,Yo.z),f.push(Ko.x,Ko.y,Ko.z)}this.setAttribute("position",new Ct(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Vm extends zf{constructor(e){super(e),this.uuid=hr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new zf().fromJSON(s))}return this}}const Ew={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Gm(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,d,h,f;if(n&&(r=Dw(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let v=t;v<s;v+=t)d=i[v],h=i[v+1],d<o&&(o=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return io(r,a,t,o,l,f,0),a}};function Gm(i,e,t,n,s){let r,a;if(s===Vw(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Bf(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Bf(r,i[r],i[r+1],a);return a&&ql(a,a.next)&&(ro(a),a=a.next),a}function rr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ql(t,t.next)||Xt(t.prev,t,t.next)===0)){if(ro(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function io(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Nw(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Cw(i,n,s,r):Aw(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ro(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Rw(rr(i),e,t),io(i,e,t,n,s,r,2)):a===2&&Pw(i,e,t,n,s,r):io(rr(i),e,t,n,s,r,1);break}}}function Aw(i){const e=i.prev,t=i,n=i.next;if(Xt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,h=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let v=n.next;for(;v!==e;){if(v.x>=u&&v.x<=h&&v.y>=d&&v.y<=f&&qr(s,o,r,l,a,c,v.x,v.y)&&Xt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Cw(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Xt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=o<l?o<c?o:c:l<c?l:c,v=u<d?u<h?u:h:d<h?d:h,_=o>l?o>c?o:c:l>c?l:c,m=u>d?u>h?u:h:d>h?d:h,p=iu(f,v,e,t,n),x=iu(_,m,e,t,n);let y=i.prevZ,w=i.nextZ;for(;y&&y.z>=p&&w&&w.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=v&&y.y<=m&&y!==s&&y!==a&&qr(o,u,l,d,c,h,y.x,y.y)&&Xt(y.prev,y,y.next)>=0||(y=y.prevZ,w.x>=f&&w.x<=_&&w.y>=v&&w.y<=m&&w!==s&&w!==a&&qr(o,u,l,d,c,h,w.x,w.y)&&Xt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=v&&y.y<=m&&y!==s&&y!==a&&qr(o,u,l,d,c,h,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;w&&w.z<=x;){if(w.x>=f&&w.x<=_&&w.y>=v&&w.y<=m&&w!==s&&w!==a&&qr(o,u,l,d,c,h,w.x,w.y)&&Xt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Rw(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!ql(s,r)&&Wm(s,n,n.next,r)&&so(s,r)&&so(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ro(n),ro(n.next),n=i=r),n=n.next}while(n!==i);return rr(n)}function Pw(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&zw(a,o)){let l=$m(a,o);a=rr(a,a.next),l=rr(l,l.next),io(a,e,t,n,s,r,0),io(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Dw(i,e,t,n){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Gm(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Ow(c));for(s.sort(Lw),r=0;r<s.length;r++)t=Iw(s[r],t);return t}function Lw(i,e){return i.x-e.x}function Iw(i,e){const t=Uw(i,e);if(!t)return e;const n=$m(t,i);return rr(n,n.next),rr(t,t.next)}function Uw(i,e){let t=e,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const h=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=r&&h>n&&(n=h,s=t.x<t.next.x?t:t.next,h===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&qr(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),so(t,i)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&Fw(s,t)))&&(s=t,u=d)),t=t.next;while(t!==o);return s}function Fw(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function Nw(i,e,t,n){let s=i;do s.z===0&&(s.z=iu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kw(s)}function kw(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function iu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ow(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function qr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function zw(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Bw(i,e)&&(so(i,e)&&so(e,i)&&Hw(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||ql(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ql(i,e){return i.x===e.x&&i.y===e.y}function Wm(i,e,t,n){const s=Qo(Xt(i,e,t)),r=Qo(Xt(i,e,n)),a=Qo(Xt(t,n,i)),o=Qo(Xt(t,n,e));return!!(s!==r&&a!==o||s===0&&Jo(i,t,e)||r===0&&Jo(i,n,e)||a===0&&Jo(t,i,n)||o===0&&Jo(t,e,n))}function Jo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Qo(i){return i>0?1:i<0?-1:0}function Bw(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Wm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function so(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function Hw(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function $m(i,e){const t=new su(i.i,i.x,i.y),n=new su(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Bf(i,e,t,n){const s=new su(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ro(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function su(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Vw(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Qr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Qr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Hf(e),Vf(n,e);let a=e.length;t.forEach(Hf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Vf(n,t[l]);const o=Ew.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Hf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Vf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Cl extends Zt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/s,f=new O,v=new we;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),v.x=(f.x/t+1)/2,v.y=(f.y/t+1)/2,u.push(v.x,v.y)}d+=h}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,y=x,w=x+n+1,I=x+n+2,C=x+1;o.push(y,w,C),o.push(w,I,C)}}this.setIndex(o),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ou extends Zt{constructor(e=new Vm([new we(0,.5),new we(-.5,-.5),new we(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ct(s,3)),this.setAttribute("normal",new Ct(r,3)),this.setAttribute("uv",new Ct(a,2));function c(u){const d=s.length/3,h=u.extractPoints(t);let f=h.shape;const v=h.holes;Qr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=v.length;m<p;m++){const x=v[m];Qr.isClockWise(x)===!0&&(v[m]=x.reverse())}const _=Qr.triangulateShape(f,v);for(let m=0,p=v.length;m<p;m++){const x=v[m];f=f.concat(x)}for(let m=0,p=f.length;m<p;m++){const x=f[m];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,p=_.length;m<p;m++){const x=_[m],y=x[0]+d,w=x[1]+d,I=x[2]+d;n.push(y,w,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Gw(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new Ou(n,e.curveSegments)}}function Gw(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class jr extends Zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new O,h=new O,f=[],v=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let w=0;p===0&&a===0?w=.5/t:p===n&&l===Math.PI&&(w=-.5/t);for(let I=0;I<=t;I++){const C=I/t;d.x=-e*Math.cos(s+C*r)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(s+C*r)*Math.sin(a+y*o),v.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(C+w,1-y),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const y=u[p][x+1],w=u[p][x],I=u[p+1][x],C=u[p+1][x+1];(p!==0||a>0)&&f.push(y,w,C),(p!==n-1||l<Math.PI)&&f.push(w,I,C)}this.setIndex(f),this.setAttribute("position",new Ct(v,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vi extends cs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ww extends Zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Gf=new It;class Wf{constructor(e,t,n=0,s=1/0){this.ray=new uo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Lu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gf),this}intersectObject(e,t=!0,n=[]){return ru(e,this,n,t),n.sort($f),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ru(e[s],this,n,t);return n.sort($f),n}}function $f(i,e){return i.distance-e.distance}function ru(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ru(r[a],e,t,!0)}}class Xf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(yn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $w extends cr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Su}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Su);const th=`
precision highp float;
in vec3 position;
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,zu=`
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
`,Xw=zu+`
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
`,qw=zu+`
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
`,jw=zu+`
void main() {
  ivec2 ij = ivec2(gl_FragCoord.xy);
  vec4 t = texelFetch(uTerrain, ij, 0);
  float z = zOf(ij);
  float h = t.a > 0.75 ? (uSubgrid > 0.5 ? volOf(ij, uTide) : max(0.0, uTide - z)) : 0.0;
  o0 = vec4(h, 0.0, 0.0, 0.0);
  o1 = vec4(0.0, 0.0, 0.0, 0.0);
}
`,Yw=`
precision highp float; precision highp int; precision highp sampler2D;
uniform sampler2D uState0; uniform sampler2D uState1;
layout(location = 0) out vec4 o0; layout(location = 1) out vec4 o1;
void main() { ivec2 ij = ivec2(gl_FragCoord.xy); o0 = texelFetch(uState0, ij, 0); o1 = texelFetch(uState1, ij, 0); }
`,Kw=`
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
`;class el{constructor(e,t,n,s,r,a,o,l,c,u){W(this,"W");W(this,"H");W(this,"dx");W(this,"renderer");W(this,"rtA");W(this,"rtB");W(this,"scene",new Xl);W(this,"camera",new Wl(-1,1,1,-1,0,1));W(this,"quad");W(this,"fluxMat");W(this,"depthMat");W(this,"initMat");W(this,"copyMat");W(this,"maxMat");W(this,"redRTs",[]);W(this,"redBuf",new Float32Array(64));W(this,"terrainTex");W(this,"modTex");W(this,"chanTex");W(this,"terrainData");W(this,"modData");W(this,"chanData");W(this,"sgTex",null);W(this,"subgridAvailable");W(this,"auxBuf");W(this,"time",0);W(this,"dt",.5);W(this,"steps",0);W(this,"readBuf");W(this,"cellBuf",new Float32Array(4));W(this,"cellAux",new Float32Array(4));this.renderer=e,this.W=t.W,this.H=t.H,this.dx=t.dx;const d=this.W*this.H;this.terrainData=new Float32Array(d*4);for(let v=0;v<d;v++)this.terrainData[v*4]=n[v],this.terrainData[v*4+1]=s[v],this.terrainData[v*4+2]=a?a[v]:0,this.terrainData[v*4+3]=r[v]?1:o&&o[v]?.5:0;this.terrainTex=this.makeDataTex(this.terrainData),this.modData=new Float32Array(d*4);for(let v=0;v<d;v++)this.modData[v*4+3]=1;if(this.modTex=this.makeDataTex(this.modData),this.chanData=new Float32Array(d*4),l)for(let v=0;v<d;v++)r[v]||(this.chanData[v*4]=l[v*3],this.chanData[v*4+1]=l[v*3+1],this.chanData[v*4+2]=l[v*3+2]);if(c)for(let v=0;v<d;v++)r[v]||(this.chanData[v*4+3]=c[v]);if(this.chanTex=this.makeDataTex(this.chanData),this.subgridAvailable=!!u,u){const v=new Float32Array(d*4),_=new Float32Array(d*4),m=new Float32Array(d*4),p=new Float32Array(d*4);for(let x=0;x<d;x++)for(let y=0;y<4;y++)v[x*4+y]=u.cell[x*8+y],_[x*4+y]=u.cell[x*8+4+y],m[x*4+y]=u.face[x*8+y],p[x*4+y]=u.face[x*8+4+y];this.sgTex=[v,_,m,p].map(x=>this.makeDataTex(x))}this.rtA=this.makeRT(),this.rtB=this.makeRT();const h=()=>({uState0:{value:null},uState1:{value:null},uTerrain:{value:this.terrainTex},uMod:{value:this.modTex},uChan:{value:this.chanTex},uSize:{value:new we(this.W,this.H)},uDt:{value:this.dt},uDx:{value:this.dx},uG:{value:9.81},uTide:{value:0},uRain:{value:0},uDrain:{value:0},uTheta:{value:.8},uHmin:{value:.002},uManning:{value:.035},uBuildings:{value:1},uTankRate:{value:.01},uBldBlock:{value:1},uManningBld:{value:.6},uHs:{value:0},uHillCap:{value:120/36e5},uRecover:{value:6},uTideLock:{value:1.5},uSgC0:{value:this.sgTex?this.sgTex[0]:this.chanTex},uSgC1:{value:this.sgTex?this.sgTex[1]:this.chanTex},uSgFE:{value:this.sgTex?this.sgTex[2]:this.chanTex},uSgFN:{value:this.sgTex?this.sgTex[3]:this.chanTex},uSubgrid:{value:this.sgTex?1:0},uSill:{value:.1},uWeirB:{value:4}}),f=v=>new vi({vertexShader:th,fragmentShader:v,uniforms:h(),glslVersion:Zn,depthTest:!1,depthWrite:!1});this.fluxMat=f(Xw),this.depthMat=f(qw),this.initMat=f(jw),this.copyMat=new vi({vertexShader:th,fragmentShader:Yw,glslVersion:Zn,depthTest:!1,depthWrite:!1,uniforms:{uState0:{value:null},uState1:{value:null}}}),this.maxMat=new vi({vertexShader:th,fragmentShader:Kw,glslVersion:Zn,depthTest:!1,depthWrite:!1,uniforms:{uSrc:{value:null},uTerrain:{value:this.terrainTex},uSrcSize:{value:new we(this.W,this.H)},uFirst:{value:1}}});for(const v of[this.fluxMat,this.depthMat])v.uniforms.uSize.value=new we(this.W,this.H);this.quad=new yt(new ur(2,2),this.fluxMat),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.readBuf=new Float32Array(d*4),this.auxBuf=new Float32Array(d*4)}get subgridOn(){return this.depthMat.uniforms.uSubgrid.value>.5}makeDataTex(e){const t=new Uu(e,this.W,this.H,An,Un);return t.minFilter=kt,t.magFilter=kt,t.generateMipmaps=!1,t.wrapS=Wn,t.wrapT=Wn,t.needsUpdate=!0,t}makeRT(){const e=new Pi(this.W,this.H,{count:2,type:Un,format:An,minFilter:kt,magFilter:kt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});for(const t of e.textures)t.wrapS=Wn,t.wrapT=Wn;return e}get stateTex(){return this.rtA.textures[0]}get auxTex(){return this.rtA.textures[1]}setParams(e){for(const t of[this.fluxMat,this.depthMat,this.initMat])e.subgrid!==void 0&&(t.uniforms.uSubgrid.value=e.subgrid&&this.subgridAvailable?1:0),e.manning!==void 0&&(t.uniforms.uManning.value=e.manning),e.buildings!==void 0&&(t.uniforms.uBuildings.value=e.buildings?1:0),e.drain!==void 0&&(t.uniforms.uDrain.value=e.drain),e.theta!==void 0&&(t.uniforms.uTheta.value=e.theta),e.bldBlock!==void 0&&(t.uniforms.uBldBlock.value=e.bldBlock),e.manningBld!==void 0&&(t.uniforms.uManningBld.value=e.manningBld),e.hillCap!==void 0&&(t.uniforms.uHillCap.value=e.hillCap),e.recover!==void 0&&(t.uniforms.uRecover.value=e.recover),e.tideLock!==void 0&&(t.uniforms.uTideLock.value=e.tideLock)}setDt(e){this.dt=e;for(const t of[this.fluxMat,this.depthMat])t.uniforms.uDt.value=e}updateMod(){this.modTex.needsUpdate=!0}updateTerrain(){this.terrainTex.needsUpdate=!0}reset(e){this.time=0,this.steps=0,this.initMat.uniforms.uTide.value=e,this.quad.material=this.initMat;const t=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.rtA),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(t)}step(e,t,n,s=0){const r=this.renderer.getRenderTarget(),a=this.renderer.autoClear;this.renderer.autoClear=!1;for(let o=0;o<e;o++)this.fluxMat.uniforms.uState0.value=this.rtA.textures[0],this.fluxMat.uniforms.uState1.value=this.rtA.textures[1],this.fluxMat.uniforms.uTide.value=t,this.fluxMat.uniforms.uRain.value=n,this.quad.material=this.fluxMat,this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.depthMat.uniforms.uState0.value=this.rtB.textures[0],this.depthMat.uniforms.uState1.value=this.rtB.textures[1],this.depthMat.uniforms.uTide.value=t,this.depthMat.uniforms.uRain.value=n,this.depthMat.uniforms.uHs.value=s,this.quad.material=this.depthMat,this.renderer.setRenderTarget(this.rtA),this.renderer.render(this.scene,this.camera),this.time+=this.dt,this.steps++;this.renderer.autoClear=a,this.renderer.setRenderTarget(r)}static snapshotBytes(e,t){return e*t*32}blit(e,t){this.blitTex(e.textures[0],e.textures[1],t)}blitTex(e,t,n){this.copyMat.uniforms.uState0.value=e,this.copyMat.uniforms.uState1.value=t,this.quad.material=this.copyMat;const s=this.renderer.getRenderTarget(),r=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.setRenderTarget(n),this.renderer.render(this.scene,this.camera),this.renderer.autoClear=r,this.renderer.setRenderTarget(s)}snapshot(e){const t=e??{rt:this.makeRT(),time:0,steps:0,dt:this.dt};return this.blit(this.rtA,t.rt),t.time=this.time,t.steps=this.steps,t.dt=this.dt,t}restore(e){this.blit(e.rt,this.rtA),this.time=e.time,this.steps=e.steps,this.setDt(e.dt)}readSnapshot(e){const t=this.W*this.H*4,n=new Float32Array(t),s=new Float32Array(t),r=this.renderer.getContext(),a=this.renderer.properties.get(e.rt).__webglFramebuffer,o=this.renderer.getRenderTarget();return this.renderer.state.bindFramebuffer(r.FRAMEBUFFER,a),r.readBuffer(r.COLOR_ATTACHMENT0),r.readPixels(0,0,this.W,this.H,r.RGBA,r.FLOAT,n),r.readBuffer(r.COLOR_ATTACHMENT1),r.readPixels(0,0,this.W,this.H,r.RGBA,r.FLOAT,s),r.readBuffer(r.COLOR_ATTACHMENT0),this.renderer.setRenderTarget(o),{state:n,aux:s}}snapshotFromData(e,t,n,s,r){const a=this.makeDataTex(e),o=this.makeDataTex(t),l=r??{rt:this.makeRT(),time:n,steps:0,dt:s};return this.blitTex(a,o,l.rt),a.dispose(),o.dispose(),l.time=n,l.steps=Math.round(n/s),l.dt=s,l}maxDepth(){let e=this.W,t=this.H,n=this.rtA.textures[1],s=1,r=0;const a=this.renderer.getRenderTarget(),o=this.renderer.autoClear;for(this.renderer.autoClear=!1,this.quad.material=this.maxMat;e>4||t>4;){const c=Math.ceil(e/4),u=Math.ceil(t/4);this.redRTs[r]||(this.redRTs[r]=new Pi(c,u,{type:Un,format:An,minFilter:kt,magFilter:kt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}));const d=this.maxMat.uniforms;d.uSrc.value=n,d.uFirst.value=s,d.uSrcSize.value.set(e,t),this.renderer.setRenderTarget(this.redRTs[r]),this.renderer.render(this.scene,this.camera),n=this.redRTs[r].texture,e=c,t=u,s=0,r++}let l=0;if(r>0){this.renderer.readRenderTargetPixels(this.redRTs[r-1],0,0,e,t,this.redBuf);for(let c=0;c<e*t;c++)l=Math.max(l,this.redBuf[c*4])}return this.renderer.autoClear=o,this.renderer.setRenderTarget(a),l}readCell(e,t){e=Math.min(this.W-1,Math.max(0,e)),t=Math.min(this.H-1,Math.max(0,t)),this.renderer.readRenderTargetPixels(this.rtA,e,t,1,1,this.cellBuf);const n=this.renderer.getContext(),s=this.renderer.properties.get(this.rtA).__webglFramebuffer,r=this.renderer.getRenderTarget();return this.renderer.state.bindFramebuffer(n.FRAMEBUFFER,s),n.readBuffer(n.COLOR_ATTACHMENT1),n.readPixels(e,t,1,1,n.RGBA,n.FLOAT,this.cellAux),n.readBuffer(n.COLOR_ATTACHMENT0),this.renderer.setRenderTarget(r),{state:this.cellBuf,aux:this.cellAux}}readState(){return this.renderer.readRenderTargetPixels(this.rtA,0,0,this.W,this.H,this.readBuf),this.readBuf}readAux(){const e=this.renderer.getContext(),t=this.renderer.properties.get(this.rtA).__webglFramebuffer,n=this.renderer.getRenderTarget();return this.renderer.state.bindFramebuffer(e.FRAMEBUFFER,t),e.readBuffer(e.COLOR_ATTACHMENT1),e.readPixels(0,0,this.W,this.H,e.RGBA,e.FLOAT,this.auxBuf),e.readBuffer(e.COLOR_ATTACHMENT0),this.renderer.setRenderTarget(n),this.auxBuf}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.terrainTex.dispose(),this.modTex.dispose(),this.chanTex.dispose(),this.sgTex?.forEach(e=>e.dispose()),this.fluxMat.dispose(),this.depthMat.dispose(),this.initMat.dispose(),this.copyMat.dispose(),this.maxMat.dispose(),this.quad.geometry.dispose();for(const e of this.redRTs)e.dispose()}}const Zw="hkfl-runs",Jw=1,Qw=6e8,qf=typeof CompressionStream<"u"&&typeof DecompressionStream<"u";async function tl(i,e=!1){const t=new Blob([i]).stream().pipeThrough(e?new DecompressionStream("gzip"):new CompressionStream("gzip"));return new Response(t).arrayBuffer()}function Ji(i){return new Promise((e,t)=>{i.onsuccess=()=>e(i.result),i.onerror=()=>t(i.error)})}function nl(i){return new Promise((e,t)=>{i.oncomplete=()=>e(),i.onerror=()=>t(i.error),i.onabort=()=>t(i.error)})}function eb(i){const e=JSON.stringify(i);let t=5381,n=52711;for(let s=0;s<e.length;s++){const r=e.charCodeAt(s);t=(t*33^r)>>>0,n=(n*31^r)>>>0}return`${t.toString(16).padStart(8,"0")}${n.toString(16).padStart(8,"0")}`}class Rl{constructor(e){this.db=e}static async open(){if(typeof indexedDB>"u")return null;try{const e=indexedDB.open(Zw,Jw);return e.onupgradeneeded=()=>{const t=e.result;t.createObjectStore("frames",{keyPath:"key"}).createIndex("run","run",{unique:!1}),t.createObjectStore("runs",{keyPath:"run"})},new Rl(await Ji(e))}catch{return null}}async list(e){const t=this.db.transaction(["frames","runs"],"readwrite"),n=await Ji(t.objectStore("frames").index("run").getAllKeys(IDBKeyRange.only(e))),s=await Ji(t.objectStore("runs").get(e));return s&&(s.at=Date.now(),t.objectStore("runs").put(s)),await nl(t),n.map(r=>Number(String(r).split("|")[1])).filter(r=>Number.isFinite(r)).sort((r,a)=>r-a)}async get(e,t){const n=this.db.transaction("frames","readonly"),s=await Ji(n.objectStore("frames").get(`${e}|${t}`));if(!s)return null;const[r,a]=s.gz?await Promise.all([tl(s.state,!0),tl(s.aux,!0)]):[s.state,s.aux];return{t:s.t,dt:s.dt,maxDepthSeen:s.maxDepthSeen,state:r,aux:a}}async put(e,t){const[n,s]=qf?await Promise.all([tl(t.state),tl(t.aux)]):[t.state,t.aux],r={key:`${e}|${t.t}`,run:e,t:t.t,dt:t.dt,maxDepthSeen:t.maxDepthSeen,gz:qf,state:n,aux:s,bytes:n.byteLength+s.byteLength},a=this.db.transaction(["frames","runs"],"readwrite"),o=await Ji(a.objectStore("frames").get(r.key));a.objectStore("frames").put(r);const l=await Ji(a.objectStore("runs").get(e))??{run:e,at:0,bytes:0,frames:0};l.at=Date.now(),l.bytes+=r.bytes-(o?.bytes??0),l.frames+=o?0:1,a.objectStore("runs").put(l),await nl(a),await this.evict(e)}async evict(e){const t=this.db.transaction("runs","readonly"),n=await Ji(t.objectStore("runs").getAll());let s=n.reduce((r,a)=>r+a.bytes,0);for(const r of n.sort((a,o)=>a.at-o.at)){if(s<=Qw)break;r.run!==e&&(await this.remove(r.run),s-=r.bytes)}}async remove(e){const t=this.db.transaction(["frames","runs"],"readwrite"),n=await Ji(t.objectStore("frames").index("run").getAllKeys(IDBKeyRange.only(e)));for(const s of n)t.objectStore("frames").delete(s);t.objectStore("runs").delete(e),await nl(t)}async clear(){const e=this.db.transaction(["frames","runs"],"readwrite");e.objectStore("frames").clear(),e.objectStore("runs").clear(),await nl(e)}async stats(){const e=this.db.transaction("runs","readonly"),t=await Ji(e.objectStore("runs").getAll());return{bytes:t.reduce((n,s)=>n+s.bytes,0),runs:t.length}}}const jf={type:"change"},Bu={type:"start"},Xm={type:"end"},il=new uo,Yf=new Ss,tb=Math.cos(70*Gn.DEG2RAD),cn=new O,Kn=2*Math.PI,Lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nh=1e-6;class nb extends $w{constructor(e,t=null){super(e,t),this.state=Lt.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ci.ROTATE,MIDDLE:Ci.DOLLY,RIGHT:Ci.PAN},this.touches={ONE:As.ROTATE,TWO:As.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new sr,this._lastTargetPosition=new O,this._quat=new sr().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xf,this._sphericalDelta=new Xf,this._scale=1,this._panOffset=new O,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new O,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sb.bind(this),this._onPointerDown=ib.bind(this),this._onPointerUp=rb.bind(this),this._onContextMenu=db.bind(this),this._onMouseWheel=lb.bind(this),this._onKeyDown=cb.bind(this),this._onTouchStart=hb.bind(this),this._onTouchMove=ub.bind(this),this._onMouseDown=ab.bind(this),this._onMouseMove=ob.bind(this),this._interceptControlDown=fb.bind(this),this._interceptControlUp=pb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jf),this.update(),this.state=Lt.NONE}update(e=null){const t=this.object.position;cn.copy(t).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===Lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Kn:n>Math.PI&&(n-=Kn),s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),t.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=cn.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(il.origin.copy(this.object.position),il.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(il.direction))<tb?this.object.lookAt(this.target):(Yf.setFromNormalAndCoplanarPoint(this.object.up,this.target),il.intersectPlane(Yf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>nh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nh||this._lastTargetPosition.distanceToSquared(this.target)>nh?(this.dispatchEvent(jf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kn/60*this.autoRotateSpeed*e:Kn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){cn.setFromMatrixColumn(t,0),cn.multiplyScalar(-e),this._panOffset.add(cn)}_panUp(e,t){this.screenSpacePanning===!0?cn.setFromMatrixColumn(t,1):(cn.setFromMatrixColumn(t,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(e),this._panOffset.add(cn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;cn.copy(s).sub(this.target);let r=cn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new we,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ib(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function sb(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function rb(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xm),this.state=Lt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ab(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ci.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Lt.DOLLY;break;case Ci.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Lt.ROTATE}break;case Ci.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Lt.PAN}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(Bu)}function ob(i){switch(this.state){case Lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function lb(i){this.enabled===!1||this.enableZoom===!1||this.state!==Lt.NONE||(i.preventDefault(),this.dispatchEvent(Bu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Xm))}function cb(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function hb(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case As.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Lt.TOUCH_ROTATE;break;case As.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Lt.TOUCH_PAN;break;default:this.state=Lt.NONE}break;case 2:switch(this.touches.TWO){case As.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Lt.TOUCH_DOLLY_PAN;break;case As.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Lt.TOUCH_DOLLY_ROTATE;break;default:this.state=Lt.NONE}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(Bu)}function ub(i){switch(this._trackPointer(i),this.state){case Lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Lt.NONE}}function db(i){this.enabled!==!1&&i.preventDefault()}function fb(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function pb(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mb(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}class Qi{constructor(e,t){W(this,"camera");W(this,"controls");W(this,"tween",null);W(this,"tour",null);W(this,"touring",!1);W(this,"onTourEnd");this.camera=e,this.controls=new nb(e,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI*.49,this.controls.minDistance=25,this.controls.maxDistance=6e4,this.controls.screenSpacePanning=!1,this.controls.mouseButtons={LEFT:Ci.PAN,MIDDLE:Ci.DOLLY,RIGHT:Ci.ROTATE},this.controls.touches={ONE:As.PAN,TWO:As.DOLLY_ROTATE};const n=s=>{this.controls.mouseButtons.LEFT=s.shiftKey||s.ctrlKey?Ci.ROTATE:Ci.PAN};window.addEventListener("keydown",n),window.addEventListener("keyup",n),this.controls.zoomSpeed=1.2,t.addEventListener("pointerdown",()=>{this.touring&&this.stopTour(),this.tween=null}),t.addEventListener("wheel",()=>{this.touring&&this.stopTour(),this.tween=null},{passive:!0})}state(){return{pos:this.camera.position.clone(),target:this.controls.target.clone()}}flyTo(e,t=2.5,n){this.tween={from:this.state(),to:e,t0:performance.now(),dur:t*1e3,onDone:n}}jumpTo(e){this.camera.position.copy(e.pos),this.controls.target.copy(e.target),this.controls.update()}static viewOf(e,t,n=150,s=35){const r=Gn.degToRad(n),a=Gn.degToRad(s);return{pos:new O(e.x+t*Math.cos(a)*Math.sin(r),e.y+t*Math.sin(a),e.z+t*Math.cos(a)*Math.cos(r)),target:e.clone()}}startTour(e){e.length&&(this.touring=!0,this.tour={stops:e,i:0,phase:"fly",t0:performance.now()},this.flyTo(e[0],3.5,()=>{this.tour&&(this.tour.phase="orbit",this.tour.t0=performance.now())}))}stopTour(){this.touring=!1,this.tour=null,this.controls.autoRotate=!1,this.onTourEnd?.()}update(e){const t=performance.now();if(this.tween){const n=Math.min(1,(t-this.tween.t0)/this.tween.dur),s=mb(n);if(this.camera.position.lerpVectors(this.tween.from.pos,this.tween.to.pos,s),this.controls.target.lerpVectors(this.tween.from.target,this.tween.to.target,s),n>=1){const r=this.tween.onDone;this.tween=null,r?.()}}if(this.tour&&this.touring&&this.tour.phase==="orbit"){const n=(t-this.tour.t0)/1e3,s=new O().subVectors(this.camera.position,this.controls.target);if(s.applyAxisAngle(new O(0,1,0),e*.12),this.camera.position.copy(this.controls.target).add(s),n>7){this.tour.i=(this.tour.i+1)%this.tour.stops.length,this.tour.phase="fly",this.tour.t0=t;const r=this.tour.stops[this.tour.i];this.flyTo(r,3.5,()=>{this.tour&&(this.tour.phase="orbit",this.tour.t0=performance.now())})}}this.controls.update()}}const gb=`
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
`,vb=`
precision highp float;
in vec3 position; out vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,_b=`
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
`,xb=`
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
`;class Kf{constructor(e,t,n,s,r,a,o,l,c=128){W(this,"N");W(this,"renderer");W(this,"rtA");W(this,"rtB");W(this,"scene",new Xl);W(this,"camera",new Wl(-1,1,1,-1,0,1));W(this,"quad");W(this,"updateMat");W(this,"pointMat");W(this,"group",new is);W(this,"spawnTex");W(this,"spawnData");W(this,"spawnCap");W(this,"time",0);W(this,"speedScale",30);this.renderer=e,this.N=c;const u=()=>{const x=new Pi(c,c,{count:2,type:Un,format:An,minFilter:kt,magFilter:kt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});for(const y of x.textures)y.wrapS=Wn,y.wrapT=Wn;return x};this.rtA=u(),this.rtB=u();const d=1024,h=64;this.spawnCap=d*h,this.spawnData=new Float32Array(this.spawnCap*4),this.spawnTex=new Uu(this.spawnData,d,h,An,Un),this.spawnTex.minFilter=kt,this.spawnTex.magFilter=kt,this.spawnTex.needsUpdate=!0,this.updateMat=new vi({vertexShader:vb,fragmentShader:gb,glslVersion:Zn,depthTest:!1,depthWrite:!1,uniforms:{uPart:{value:null},uTail:{value:null},uState:{value:r},uTerrain:{value:a},uSpawn:{value:this.spawnTex},uSpawnCount:{value:0},uSpawnSize:{value:new we(d,h)},uSize:{value:new we(t,n)},uDx:{value:s},uDt:{value:.016},uTime:{value:0},uSpeedScale:{value:this.speedScale},uLife:{value:7}}}),this.quad=new yt(new ur(2,2),this.updateMat),this.quad.frustumCulled=!1,this.scene.add(this.quad);const f=c*c,v=new Float32Array(f);for(let x=0;x<f;x++)v[x]=x;const _=new Zt;_.setAttribute("pid",new Cn(v,1));const m=new Bi(new O(-1e6,-1e6,-1e6),new O(1e6,1e6,1e6));_.boundingBox=m,_.boundingSphere=m.getBoundingSphere(new Hi),this.pointMat=new vi({vertexShader:_b,fragmentShader:xb,glslVersion:Zn,transparent:!0,depthWrite:!1,blending:Qs,uniforms:{uPart:{value:this.rtA.textures[0]},uTail:{value:this.rtA.textures[1]},uState:{value:r},uTerrain:{value:a},uMod:{value:o},uN:{value:new we(c,c)},uSize:{value:new we(t,n)},uDx:{value:s},uBuildings:l.uBuildings,uBldBlock:l.uBldBlock,uLife:{value:7},uNight:l.uNight,uDpr:{value:e.getPixelRatio()},uViewport:{value:new we(1,1)}}});const p=new uw(_,this.pointMat);p.frustumCulled=!1,p.renderOrder=16,this.group.add(p),this.group.renderOrder=16,this.reset()}setState(e){this.updateMat.uniforms.uState.value=e,this.pointMat.uniforms.uState.value=e}setSpawn(e,t){const n=Math.min(t,this.spawnCap);if(t>this.spawnCap){const s=t/this.spawnCap;for(let r=0;r<this.spawnCap;r++){const a=Math.floor(r*s);this.spawnData[r*4]=e[a*2],this.spawnData[r*4+1]=e[a*2+1]}}else for(let s=0;s<n;s++)this.spawnData[s*4]=e[s*2],this.spawnData[s*4+1]=e[s*2+1];this.spawnTex.needsUpdate=!0,this.updateMat.uniforms.uSpawnCount.value=n}reset(){const e=this.renderer.getRenderTarget(),t=this.renderer.getClearColor(new at),n=this.renderer.getClearAlpha();for(const s of[this.rtA,this.rtB])this.renderer.setRenderTarget(s),this.renderer.setClearColor(new at(-1,-1,0),1),this.renderer.clear();this.renderer.setRenderTarget(e),this.renderer.setClearColor(t,n),this.updateMat.uniforms.uSpawnCount.value=0}update(e,t){this.time+=e,this.speedScale=Gn.clamp(t*.05,15,220);const n=this.updateMat.uniforms;n.uPart.value=this.rtA.textures[0],n.uTail.value=this.rtA.textures[1],n.uDt.value=Math.min(e,.05),n.uTime.value=this.time,n.uSpeedScale.value=this.speedScale;const s=this.renderer.getRenderTarget(),r=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.renderer.autoClear=r,this.renderer.setRenderTarget(s),[this.rtA,this.rtB]=[this.rtB,this.rtA];const a=this.pointMat.uniforms;a.uPart.value=this.rtA.textures[0],a.uTail.value=this.rtA.textures[1];const o=this.renderer.getDrawingBufferSize(new we);a.uViewport.value.copy(o),a.uDpr.value=this.renderer.getPixelRatio()}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.spawnTex.dispose(),this.updateMat.dispose(),this.pointMat.dispose(),this.quad.geometry.dispose();for(const e of this.group.children)e.geometry.dispose();this.group.clear()}}const yb=`
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
`,Mb=`
precision highp float;
in float vSpd; in float vA; out vec4 fragColor;
void main() {
  if (vA < 0.5) discard;
  vec3 col = mix(vec3(0.75, 0.95, 1.0), vec3(1.0, 0.86, 0.45), smoothstep(0.2, 1.8, vSpd));
  fragColor = vec4(col, 0.9);
}
`;class Zf{constructor(e,t,n,s,r,a,o){W(this,"mesh");W(this,"mat");const l=Math.max(2,Math.round(35/n)),c=new Zt,u=.07,d=.22,h=.38,f=new Float32Array([0,0,-u,1-h,0,-u,1-h,0,u,0,0,u,1-h,0,-d,1,0,0,1-h,0,d]);c.setAttribute("position",new Cn(f,3)),c.setIndex([0,1,2,0,2,3,4,5,6,0,2,1,0,3,2,4,6,5]);const v=new Ww;v.index=c.index,v.attributes.position=c.attributes.position;const _=[];for(let p=Math.floor(l/2);p<t;p+=l)for(let x=Math.floor(l/2);x<e;x+=l)_.push(x,p);v.setAttribute("cell",new eu(new Float32Array(_),2)),v.instanceCount=_.length/2;const m=new Bi(new O(-1e6,-1e6,-1e6),new O(1e6,1e6,1e6));v.boundingBox=m,v.boundingSphere=m.getBoundingSphere(new Hi),this.mat=new vi({vertexShader:yb,fragmentShader:Mb,glslVersion:Zn,transparent:!0,depthWrite:!1,side:ri,uniforms:{uState:{value:s},uTerrain:{value:r},uMod:{value:a},uSize:{value:new we(e,t)},uDx:{value:n},uBuildings:o.uBuildings,uBldBlock:o.uBldBlock,uScale:{value:l*.8}}}),this.mesh=new yt(v,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=14}setState(e){this.mat.uniforms.uState.value=e}dispose(){this.mesh.geometry.dispose(),this.mat.dispose()}}const Sb=`
precision highp float; precision highp int; precision highp sampler2D;
uniform sampler2D uPrev; uniform sampler2D uState; uniform sampler2D uAux; uniform sampler2D uTerrain;
uniform float uAdvance; uniform float uSubgrid; uniform float uReset; uniform float uTau; uniform ivec2 uSize;
out vec4 o;
float depthAt(ivec2 c, vec4 t) { return (uSubgrid > 0.5 && t.a < 0.75) ? texelFetch(uAux, c, 0).a : texelFetch(uState, c, 0).r; }
void main() {
  ivec2 ij = ivec2(gl_FragCoord.xy);
  vec4 t = texelFetch(uTerrain, ij, 0);
  float h = depthAt(ij, t);
  if (t.a > 0.75) h = 0.0;
  // far-view depth: 5x5 weighted mean over the open land cells around (buildings, sea and basins excluded, and zero on
  // them) so that from afar the flood reads as smooth patches instead of one speck per cell
  float hs = 0.0;
  if (t.g <= 0.0 && t.a < 0.25) {
    float sum = 0.0, cnt = 0.0;
    for (int dj = -2; dj <= 2; dj++) for (int di = -2; di <= 2; di++) {
      ivec2 c = clamp(ij + ivec2(di, dj), ivec2(0), uSize - ivec2(1));
      vec4 tc = texelFetch(uTerrain, c, 0); if (tc.a > 0.25 || tc.g > 0.0) continue;
      float wgt = (abs(di) + abs(dj) <= 2) ? 1.0 : 0.5;
      sum += depthAt(c, tc) * wgt; cnt += wgt;
    }
    hs = cnt > 0.0 ? sum / cnt : 0.0;
  }
  vec4 p = texelFetch(uPrev, ij, 0);
  if (uReset > 0.5) { o = vec4(h, 0.0, hs, 0.0); return; }
  float k = 1.0 - exp(-uAdvance / uTau);
  float avg = p.r + (h - p.r) * k;
  float rate = (h - avg) / uTau * 3600.0;
  o = vec4(avg, rate, hs, 0.0);
}
`,wb=`
precision highp float;
in vec3 position;
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`;class Jf{constructor(e,t,n,s,r,a){W(this,"renderer");W(this,"rtA");W(this,"rtB");W(this,"scene",new Xl);W(this,"camera",new Wl(-1,1,1,-1,0,1));W(this,"quad");W(this,"mat");W(this,"stateTex");this.renderer=e,this.stateTex=s;const o=()=>{const l=new Pi(t,n,{type:Un,format:An,minFilter:kt,magFilter:kt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});return l.texture.wrapS=Wn,l.texture.wrapT=Wn,l};this.rtA=o(),this.rtB=o(),this.mat=new vi({vertexShader:wb,fragmentShader:Sb,glslVersion:Zn,depthTest:!1,depthWrite:!1,uniforms:{uPrev:{value:null},uState:{value:s},uAux:{value:r},uTerrain:{value:a},uAdvance:{value:0},uSubgrid:{value:0},uReset:{value:1},uTau:{value:900},uSize:{value:new we(t,n)}}}),this.quad=new yt(new ur(2,2),this.mat),this.quad.frustumCulled=!1,this.scene.add(this.quad)}get texture(){return this.rtA.texture}setState(e,t){this.stateTex=e,this.mat.uniforms.uState.value=e,this.mat.uniforms.uAux.value=t}update(e,t,n=!1){if(e<=0&&!n)return;const s=this.mat.uniforms;s.uPrev.value=this.rtA.texture,s.uAdvance.value=e,s.uSubgrid.value=t?1:0,s.uReset.value=n?1:0;const r=this.renderer.getRenderTarget(),a=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.renderer.autoClear=a,this.renderer.setRenderTarget(r),[this.rtA,this.rtB]=[this.rtB,this.rtA]}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.mat.dispose(),this.quad.geometry.dispose()}}const Hu=`
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
`,Vu=`
vec3 applyFog(vec3 col, vec3 world) {
  float dist = length(world - uCam);
  float f = 1.0 - exp(-uFogDensity * dist);
  return mix(col, uFogColor, clamp(f, 0.0, 1.0));
}
`,qm=`
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
`,bb=`
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
`,Tb=`
precision highp float; precision highp int; precision highp sampler2D;
in vec2 vUv; in vec3 vWorld; in vec3 vNormal; in float vSea;
uniform sampler2D uMap; uniform sampler2D uState; uniform sampler2D uTerrain; uniform float uHasMap;
uniform ivec2 uSize; uniform float uDx; uniform float uShadow;
uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uFogColor; uniform float uFogDensity;
uniform float uStorm; uniform float uFlash; uniform float uNight; uniform float uShowMax;
out vec4 fragColor;
${Hu}
${Vu}
${qm}
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
`,Eb=`
precision highp float; precision highp int; precision highp sampler2D;
in vec2 cell;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
uniform sampler2D uTerrain; uniform sampler2D uMod; uniform sampler2D uState; uniform sampler2D uAux; uniform sampler2D uTrend;
uniform ivec2 uSize; uniform float uDx; uniform float uBuildings; uniform float uBldBlock; uniform float uSubgrid; uniform float uWaterMode; uniform float uViewH;
out vec2 vUv; out vec3 vWorld; out float vDepth; out float vVel; out float vSea; out float vRise; out float vLod;
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
  float y = h > 0.015 ? eta : z + 0.02;
  if (t.a > 0.5) y = eta; // sea: always at the forced level
  vDepth = t.a > 0.5 ? max(h, 3.0) : h;
  vVel = a.g;
  vUv = (cell + 0.5) / vec2(uSize);
  vec3 p = vec3((cell.x + 0.5) * uDx, y, -(cell.y + 0.5) * uDx);
  vWorld = p;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,Ab=`
precision highp float; precision highp int; precision highp sampler2D;
in vec2 vUv; in vec3 vWorld; in float vDepth; in float vVel; in float vSea; in float vRise; in float vLod;
uniform float uTime; uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uFogColor; uniform float uFogDensity;
uniform float uStorm; uniform float uFlash; uniform float uNight; uniform float uRainI; uniform vec3 uSkyColor;
uniform sampler2D uTerrain; uniform sampler2D uTrend; uniform ivec2 uSize; uniform float uDx; uniform float uShadow; uniform float uWaterMode;
out vec4 fragColor;
${Hu}
${Vu}
${qm}
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
  if (vDepth < vis0) discard;
  bool sea = vSea > 0.75; bool lake = vSea > 0.25 && !sea;
  float dist = length(uCam - vWorld);
  float near = 1.0 - smoothstep(250.0, 900.0, dist);                 // street-scale detail fades with distance
  float fine = 1.0 - vLod;                                           // per-cell details only when a cell is several pixels wide
  // tendency of the depth in sim time (m per hour, TrendField): rising > 0, receding < 0, standing water ~ 0
  float rate = texture(uTrend, vUv).g;
  float rising = smoothstep(0.02, 0.10, rate), receding = smoothstep(-0.02, -0.10, rate);
  if (uWaterMode > 0.5) { rising = 0.0; receding = 0.0; }
  // flood water: the depth colour, translucent over the ground where it is shallow, opaque where it is deep
  float alpha = smoothstep(vis0, vis1, vDepth) * mix(0.66, 0.94, smoothstep(0.03, 0.6, vDepth));
  alpha = mix(alpha, min(0.95, alpha + 0.12), vLod);
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
    lines *= (1.0 - smoothstep(0.03, 0.08, fw)) * fine;                 // gone where one pixel spans several centimetres
    col = mix(col, vec3(0.85, 0.95, 1.0), lines * 0.45);
    // tendency: rising water is lit and fresh, with soft bands travelling outwards (deep -> shallow);
    // receding water goes dull and a little muddy (water that has been standing)
    float band = smoothstep(0.55, 0.95, sin(uTime * 2.2 + vDepth * 16.0 + n1 * 1.5)) * (0.5 + 0.5 * vnoise(vWorld.xz * 0.05 + uTime * 0.1));
    col = mix(col, vec3(0.62, 0.90, 1.0), rising * (0.16 + 0.2 * band * fine));
    col = mix(col, col * vec3(0.76, 0.70, 0.58), receding * 0.7);
    // crisp outline at the wet / dry boundary, readable on any ground texture; a pulsing light band where it advances
    float edge = smoothstep(0.055, 0.02, vDepth) * fine;
    col = mix(col, vec3(0.03, 0.09, 0.26), edge * 0.85); alpha = mix(alpha, 0.96, edge);
    float front = smoothstep(0.03, 0.06, vDepth) * smoothstep(0.2, 0.08, vDepth) * fine;
    col = mix(col, vec3(0.78, 0.97, 1.0), rising * front * (0.4 + 0.35 * sin(uTime * 4.5)));
    if (uShadow > 0.5) col *= 1.0 - sunShadow(vUv, vWorld.y) * 0.22 * (1.0 - uNight * 0.5);
  }
  // rain rings near the camera (the old random sparkle read as noise from afar)
  float rip = (1.0 - uWaterMode) * clamp(uRainI, 0.0, 1.0) * near * fine * rainRings(vWorld.xz, uTime * 0.6);
  col += rip * 0.35;
  col *= mix(1.0, 0.86, uStorm);
  col *= mix(1.0, sea ? 0.55 : 0.82, uNight);
  col += uFlash * 0.6;
  col = applyFog(col, vWorld);
  fragColor = vec4(col, alpha);
}
`,Cb=`
precision highp float; precision highp int; precision highp sampler2D;
in vec3 position; in vec3 normal; in vec3 color; in vec2 bUv; in float lit;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
out vec3 vN; out vec3 vWorld; out vec3 vColor; out vec2 vUv; out float vLit;
void main() {
  vN = normal; vWorld = position; vColor = color; vUv = bUv; vLit = lit;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Rb=`
precision highp float; precision highp int; precision highp sampler2D;
in vec3 vN; in vec3 vWorld; in vec3 vColor; in vec2 vUv; in float vLit;
uniform sampler2D uTerrain; uniform sampler2D uState; uniform sampler2D uMod; uniform ivec2 uSize;
uniform float uTime; uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uFogColor; uniform float uFogDensity;
uniform float uStorm; uniform float uFlash; uniform float uNight; uniform float uBuildings; uniform vec3 uSkyColor; uniform float uWaterMode;
out vec4 fragColor;
${Hu}
${Vu}
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
    float farB = smoothstep(700.0, 2200.0, length(uCam - vWorld));   // from afar a plain massing reads cleaner
    base = mix(base, glassCol, glass * 0.16 * (1.0 - farB));
    base *= 1.0 - slab * 0.12 * (1.0 - farB);
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
`,Pb=`
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
`,Db=`
precision highp float;
in float vA; uniform float uNight;
out vec4 fragColor;
void main() { fragColor = vec4(0.72, 0.8, 0.92, vA * mix(1.0, 0.6, uNight)); }
`,Lb=`
precision highp float;
in vec3 position;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
out vec3 vDir;
void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,Ib=`
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
`,Ub=[11069183,5090802,2061275,1197480,1711987,5377894],Fb=[0,.1,.3,.5,1,2];class Nb{constructor(e,t){W(this,"renderer");W(this,"scene",new Xl);W(this,"camera");W(this,"director");W(this,"assets",null);W(this,"W",0);W(this,"H",0);W(this,"dx",10);W(this,"grid",null);W(this,"terrain",null);W(this,"water",null);W(this,"buildings",null);W(this,"rain");W(this,"sky");W(this,"root",new is);W(this,"exag",1);W(this,"waterMode","now");W(this,"measureGroup",new is);W(this,"ugGroup",new is);W(this,"ugItems",new Map);W(this,"ugLast",[]);W(this,"draftLine",null);W(this,"markerGroup",new is);W(this,"pinGeo",{pin:new Al(.45,.45,1,6),head:new jr(2.6,12,10),ring:new Cl(3,4.2,24),small:new jr(1.6,10,8)});W(this,"pinWhite",new Ti({color:16777215}));W(this,"labelsDiv");W(this,"labelEls",new Map);W(this,"imageryTex",null);W(this,"basemapTex",null);W(this,"flowA",null);W(this,"flowB",null);W(this,"arrowsA",null);W(this,"arrowsB",null);W(this,"trendA",null);W(this,"trendB",null);W(this,"pendingAdvance",0);W(this,"trendReset",!0);W(this,"terrainTexRef",null);W(this,"modTexRef",null);W(this,"flowMode","particles");W(this,"split",null);W(this,"time",0);W(this,"flashT",0);W(this,"U",{uTime:{value:0},uSun:{value:new O(.4,.75,.35).normalize()},uCam:{value:new O},uFogColor:{value:new at(10466504)},uFogDensity:{value:12e-5},uStorm:{value:0},uFlash:{value:0},uNight:{value:0},uRainI:{value:0},uSubgrid:{value:0},uSkyColor:{value:new at(9418464)},uShowMax:{value:0},uBuildings:{value:1},uBldBlock:{value:1},uWaterMode:{value:0},uExag:{value:1},uShadow:{value:1},uViewH:{value:900}});W(this,"tmpV2",new we);W(this,"terrainMat",null);W(this,"waterMat",null);W(this,"buildingMat",null);W(this,"rainMat");W(this,"skyMat");W(this,"texMode","imagery");W(this,"labelInset",{l:0,r:0,t:0,b:0});this.labelsDiv=t,this.renderer=new ow({canvas:e,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.outputColorSpace=di,this.renderer.autoClear=!0,this.camera=new pi(50,1,2,12e4),this.director=new Qi(this.camera,e),this.root.add(this.measureGroup),this.root.add(this.markerGroup),this.root.add(this.ugGroup),this.scene.add(this.root),this.skyMat=new vi({vertexShader:Lb,fragmentShader:Ib,glslVersion:Zn,side:Xn,depthWrite:!1,uniforms:{uSun:this.U.uSun,uStorm:this.U.uStorm,uFlash:this.U.uFlash,uNight:this.U.uNight,uTime:this.U.uTime}}),this.sky=new yt(new jr(8e4,48,24),this.skyMat),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.scene.add(this.sky);const n=36e3,s=new Float32Array(n*2*4),r=new Float32Array(n*2);for(let o=0;o<n;o++){const l=(Math.random()-.5)*900,c=Math.random()*320,u=(Math.random()-.5)*900,d=Math.random();for(let h=0;h<2;h++){const f=(o*2+h)*4;s[f]=l,s[f+1]=c,s[f+2]=u,s[f+3]=d,r[o*2+h]=h}}const a=new Zt;a.setAttribute("a",new Cn(s,4)),a.setAttribute("end",new Cn(r,1)),this.rainMat=new vi({vertexShader:Pb,fragmentShader:Db,glslVersion:Zn,transparent:!0,depthWrite:!1,blending:fh,uniforms:{uTime:this.U.uTime,uCenter:{value:new O},uIntensity:this.U.uRainI,uWind:{value:.35},uNight:this.U.uNight}}),this.rain=new Uf(a,this.rainMat),this.rain.frustumCulled=!1,this.rain.renderOrder=20,this.scene.add(this.rain),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}loadScene(e,t,n,s,r){this.clearScene(),this.assets=e,this.W=e.meta.cols,this.H=e.meta.rows,this.dx=e.meta.res;const a=this.W,o=this.H,l=new Float32Array(a*o*2);for(let _=0;_<o;_++)for(let m=0;m<a;m++){const p=(_*a+m)*2;l[p]=m,l[p+1]=_}const c=new Uint32Array((a-1)*(o-1)*6);let u=0;for(let _=0;_<o-1;_++)for(let m=0;m<a-1;m++){const p=_*a+m,x=p+1,y=p+a,w=y+1;c[u++]=p,c[u++]=x,c[u++]=y,c[u++]=x,c[u++]=w,c[u++]=y}this.grid=new Zt,this.grid.setAttribute("cell",new Cn(l,2)),this.grid.setIndex(new Cn(c,1));const d=new Bi(new O(0,-50,-o*this.dx),new O(a*this.dx,1200,0));this.grid.boundingBox=d,this.grid.boundingSphere=d.getBoundingSphere(new Hi),this.imageryTex=e.imagery?this.imgTex(e.imagery):null,this.basemapTex=e.basemap?this.imgTex(e.basemap):null;const h=this.texMode==="imagery"?this.imageryTex??this.basemapTex:this.basemapTex??this.imageryTex,f={value:new we(a,o)};this.terrainMat=new vi({vertexShader:bb,fragmentShader:Tb,glslVersion:Zn,uniforms:{...this.U,uTerrain:{value:t},uState:{value:s},uSize:f,uDx:{value:this.dx},uMap:{value:h},uHasMap:{value:h?1:0}}}),this.terrain=new yt(this.grid,this.terrainMat),this.terrain.frustumCulled=!1,this.terrain.renderOrder=0,this.root.add(this.terrain),this.trendA=new Jf(this.renderer,a,o,s,r,t),this.trendReset=!0,this.waterMat=new vi({vertexShader:Eb,fragmentShader:Ab,glslVersion:Zn,transparent:!0,depthWrite:!1,side:ri,uniforms:{...this.U,uTerrain:{value:t},uMod:{value:n},uState:{value:s},uAux:{value:r},uTrend:{value:this.trendA.texture},uSize:f,uDx:{value:this.dx}}}),this.water=new yt(this.grid,this.waterMat),this.water.frustumCulled=!1,this.water.renderOrder=10,this.root.add(this.water),this.buildBuildings(e,t,s,n,f),this.terrainTexRef=t,this.modTexRef=n,this.flowA=new Kf(this.renderer,a,o,this.dx,s,t,n,this.U),this.arrowsA=new Zf(a,o,this.dx,s,t,n,this.U),this.root.add(this.flowA.group),this.root.add(this.arrowsA.mesh),this.applyFlowMode();const v=this.defaultView();this.director.jumpTo(Qi.viewOf(v.target,v.pos.distanceTo(v.target)*2.4,35,62)),this.director.flyTo(v,4)}imgTex(e){const t=new Fn(e);return t.colorSpace=di,t.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),t.minFilter=Cs,t.magFilter=mi,t.generateMipmaps=!0,t.needsUpdate=!0,t}buildBuildings(e,t,n,s,r){const a=e.buildings;if(!a.length)return;const o=e.dem,l=this.W,c=this.H,u=this.dx,d=this.H*u,h=(I,C)=>{const P=Math.min(l-1,Math.max(0,Math.floor(I/u))),U=Math.min(c-1,Math.max(0,Math.floor(C/u)));return o[U*l+P]},f=[],v=[],_=[],m=[],p=[],x=[],y=new at;for(const I of a){const C=I.r;if(C.length<3)continue;let P=1/0,U=-1/0;for(const[oe,me]of C){const he=h(oe,me);he<P&&(P=he),he>U&&(U=he)}if(!isFinite(P)||P<-1)continue;const ie=P-.5,S=P+Math.min(Math.max(I.h,3),420)+Math.min(U-P,8),b=I.h>70,H=b?.58+(Math.random()-.5)*.05:.09+(Math.random()-.5)*.06,z=b?.04+Math.random()*.04:.03+Math.random()*.04,j=(b?.8:.86)+(Math.random()-.5)*.06;y.setHSL(H,z,j);const Z=Math.random();let Y=0;for(let oe=0;oe<C.length;oe++){const me=C[oe],he=C[(oe+1)%C.length];Y+=me[0]*he[1]-he[0]*me[1]}const F=Y<0?[...C].reverse():C;for(let oe=0;oe<F.length;oe++){const me=F[oe],he=F[(oe+1)%F.length],se=he[0]-me[0],fe=he[1]-me[1],xe=Math.hypot(se,fe);if(xe<.2)continue;const ge=fe/xe,Xe=-se/xe,Fe=f.length/3,He=[[me[0],ie,me[1]],[he[0],ie,he[1]],[he[0],S,he[1]],[me[0],S,me[1]]];for(const[rt,nt,N]of He)f.push(rt,nt,-N),v.push(ge,0,-Xe),_.push(y.r*.92,y.g*.92,y.b*.92),m.push((rt+.5)/(l*u),(N+.5)/d),p.push(Z);x.push(Fe,Fe+1,Fe+2,Fe,Fe+2,Fe+3)}const ne=F.map(([oe,me])=>new we(oe,me));let pe=[];try{pe=Qr.triangulateShape(ne,[])}catch{pe=[]}const le=f.length/3;for(const[oe,me]of F)f.push(oe,S,-me),v.push(0,1,0),_.push(y.r,y.g,y.b),m.push((oe+.5)/(l*u),(me+.5)/d),p.push(0);for(const oe of pe)x.push(le+oe[0],le+oe[1],le+oe[2])}const w=new Zt;w.setAttribute("position",new Ct(f,3)),w.setAttribute("normal",new Ct(v,3)),w.setAttribute("color",new Ct(_,3)),w.setAttribute("bUv",new Ct(m,2)),w.setAttribute("lit",new Ct(p,1)),w.setIndex(x),this.buildingMat=new vi({vertexShader:Cb,fragmentShader:Rb,glslVersion:Zn,uniforms:{...this.U,uTerrain:{value:t},uState:{value:n},uMod:{value:s},uSize:r}}),this.buildings=new yt(w,this.buildingMat),this.buildings.frustumCulled=!1,this.buildings.renderOrder=1,this.root.add(this.buildings)}setStateTextures(e,t){this.terrainMat&&(this.terrainMat.uniforms.uState.value=e),this.waterMat&&(this.waterMat.uniforms.uState.value=e,this.waterMat.uniforms.uAux.value=t,this.bindTrend()),this.buildingMat&&(this.buildingMat.uniforms.uState.value=e)}bindTrend(){if(!this.waterMat)return;const e=this.waterMat.uniforms.uState.value,t=this.trendB&&this.trendB.stateTex===e?this.trendB:this.trendA;this.waterMat.uniforms.uTrend.value=t?t.texture:null}advanceSim(e){this.pendingAdvance+=e}setSubgrid(e){this.U.uSubgrid.value=e?1:0,this.trendReset=!0}setBaselineTextures(e,t=null){this.flowB&&(this.root.remove(this.flowB.group),this.flowB.dispose(),this.flowB=null),this.arrowsB&&(this.root.remove(this.arrowsB.mesh),this.arrowsB.dispose(),this.arrowsB=null),this.trendB&&(this.trendB.dispose(),this.trendB=null),e&&this.terrainTexRef&&this.modTexRef&&(this.flowB=new Kf(this.renderer,this.W,this.H,this.dx,e,this.terrainTexRef,this.modTexRef,this.U),this.arrowsB=new Zf(this.W,this.H,this.dx,e,this.terrainTexRef,this.modTexRef,this.U),this.root.add(this.flowB.group),this.root.add(this.arrowsB.mesh),t&&(this.trendB=new Jf(this.renderer,this.W,this.H,e,t,this.terrainTexRef),this.trendReset=!0)),this.applyFlowMode(),this.bindTrend()}setFlowMode(e){this.flowMode=e,this.applyFlowMode()}get effFlow(){return this.waterMode==="max"?"none":this.flowMode}applyFlowMode(){const e=this.effFlow==="particles",t=this.effFlow==="arrows";this.flowA&&(this.flowA.group.visible=e),this.arrowsA&&(this.arrowsA.mesh.visible=t),this.flowB&&(this.flowB.group.visible=!1),this.arrowsB&&(this.arrowsB.mesh.visible=!1)}setFlowSpawn(e,t,n){(e==="A"?this.flowA:this.flowB)?.setSpawn(t,n)}resetFlow(){this.flowA?.reset(),this.flowB?.reset(),this.trendReset=!0,this.pendingAdvance=0}setTextureMode(e){if(this.texMode=e,!this.terrainMat)return;const t=e==="imagery"?this.imageryTex??this.basemapTex:this.basemapTex??this.imageryTex;this.terrainMat.uniforms.uMap.value=t,this.terrainMat.uniforms.uHasMap.value=t?1:0}setBuildingsBlock(e){this.U.uBuildings.value=e?1:0}setShowMax(e){this.U.uShowMax.value=e?1:0}setShadows(e){this.U.uShadow.value=e?1:0}setWaterMode(e){this.waterMode=e,this.U.uWaterMode.value=e==="max"?1:0,this.applyFlowMode()}setExaggeration(e){const t=this.director.controls.target,n=e/this.exag;this.exag=e,this.root.scale.y=e,this.U.uExag.value=e,this.setBasements(this.ugLast);const s=t.y*(n-1);t.y+=s,this.camera.position.y+=s,this.director.controls.update()}cameraPreset(e,t){const n=this.director.controls.target,s=t?t.x:n.x,r=t?t.y:-n.z,a=new O(s,this.groundAt(s,r)*this.exag+2,-r),o=Math.max(this.W,this.H)*this.dx,l=new O().subVectors(this.camera.position,n),c=Gn.radToDeg(Math.atan2(l.x,l.z));if(e==="bird"){const u=new O(this.W*this.dx/2,0,-(this.H*this.dx)/2);u.y=this.groundAt(u.x,-u.z)*this.exag,this.director.flyTo(Qi.viewOf(u,o*.95,.01,84),2.2)}else e==="street"?this.director.flyTo(this.clearView(a.setY(a.y+3),240,c),2.4):this.director.flyTo(Qi.viewOf(a,900,c,32),2.2)}clearView(e,t,n){const s=this.assets;if(!s)return Qi.viewOf(e,t,n,10);const r=(a,o)=>{const l=Math.min(this.W-1,Math.max(0,Math.floor(a/this.dx))),u=Math.min(this.H-1,Math.max(0,Math.floor(o/this.dx)))*this.W+l;return(s.dem[u]+s.bldh[u])*this.exag};for(const a of[9,14,20,28])for(let o=0;o<12;o++){const l=n+(o%2?1:-1)*Math.ceil(o/2)*30,c=Qi.viewOf(e,t,l,a);let u=!0;for(let d=1;d<=24&&u;d++){const h=new O().lerpVectors(e,c.pos,d/24);r(h.x,-h.z)>h.y-2&&(u=!1)}if(u)return c}return Qi.viewOf(e,t,n,35)}clearScene(){for(const e of[this.terrain,this.water,this.buildings])e&&(this.root.remove(e),e.material.dispose());this.buildings&&this.buildings.geometry.dispose(),this.grid?.dispose(),this.grid=null,this.terrain=this.water=this.buildings=null,this.imageryTex?.dispose(),this.basemapTex?.dispose(),this.imageryTex=this.basemapTex=null,this.setBaselineTextures(null),this.flowA&&(this.root.remove(this.flowA.group),this.flowA.dispose(),this.flowA=null),this.arrowsA&&(this.root.remove(this.arrowsA.mesh),this.arrowsA.dispose(),this.arrowsA=null),this.trendA&&(this.trendA.dispose(),this.trendA=null),this.split=null,this.clearMeasures(),this.setLabels([]),this.clearBasements()}setWeather(e,t,n){const s=Gn.clamp(1-Gn.smoothstep(Math.sin((n-6)/12*Math.PI),-.15,.15),0,1);this.U.uNight.value=s*.22,this.U.uStorm.value=Gn.clamp(t,0,1),this.U.uRainI.value=Gn.clamp(e/60,0,1.6);const r=Math.max(Math.sin((n-6)/12*Math.PI),.08),a=(n-12)/12*Math.PI*.9;this.U.uSun.value.set(Math.sin(a)*Math.cos(r*1.3),Math.max(r,.15),Math.cos(a)*Math.cos(r*1.3)).normalize();const o=new at(11123917),l=new at(8161171),c=new at(2897218),u=o.clone().lerp(l,this.U.uStorm.value).lerp(c,s*.8);this.U.uFogColor.value.copy(u),this.U.uSkyColor.value.copy(new at(9418464).lerp(new at(3818578),this.U.uStorm.value).lerp(new at(1581104),s*.8));const d=Math.min(1,5e3/Math.max(1,this.W*this.dx));this.U.uFogDensity.value=(4e-5+3e-5*this.U.uStorm.value+2e-5*this.U.uRainI.value)*d,this.renderer.setClearColor(u)}lightning(){this.flashT=.18}setBasements(e){this.ugLast=e;const t=this.exag;for(const n of e){let s=this.ugItems.get(n.id);if(!s){const l=this.groundAt(n.x,n.y),c=Gn.clamp(Math.sqrt(n.area),18,160),u=new yt(new Ai(c,n.cap,c),new Ti({color:727610,transparent:!0,opacity:.22,depthTest:!1,depthWrite:!1}));u.position.set(n.x,l-n.cap/2,-n.y),u.renderOrder=11,this.ugGroup.add(u);const d=new Uf(new Tw(u.geometry),new tu({color:8087752,transparent:!0,opacity:.9,depthTest:!1}));d.position.copy(u.position),d.renderOrder=13,this.ugGroup.add(d);const h=new yt(new Ai(c*.96,1,c*.96),new Ti({color:2061275,transparent:!0,opacity:.5,depthTest:!1,depthWrite:!1}));h.renderOrder=12,this.ugGroup.add(h);const f=new yt(new Ai(2.6,1,2.6),new Ti({color:16777215,transparent:!0,opacity:.92})),v=new yt(new Ai(3.4,1,3.4),new Ti({color:2061275}));this.ugGroup.add(f),this.ugGroup.add(v),s={fill:h,post:v,postBg:f,cap:n.cap,z:l},this.ugItems.set(n.id,s)}const r=Math.min(n.depth,s.cap);s.fill.visible=r>.02,s.fill.scale.y=Math.max(r,.01),s.fill.position.set(n.x,s.z-s.cap+r/2,-n.y),s.fill.material.color.set(au(r));const a=24/t,o=r/s.cap;s.postBg.scale.y=a,s.postBg.position.set(n.x,s.z+a/2,-n.y),s.post.visible=o>.01,s.post.scale.y=Math.max(.01,a*o),s.post.position.set(n.x,s.z+a*o/2,-n.y),s.post.material.color.set(au(r))}}clearBasements(){for(const e of this.ugGroup.children){const t=e;t.geometry?.dispose(),t.material?.dispose()}this.ugGroup.clear(),this.ugItems.clear(),this.ugLast=[]}setLabels(e){const t=new Set(e.map(a=>a.id));for(const[a,o]of this.labelEls)t.has(a)||(o.el.remove(),this.labelEls.delete(a));for(const a of e){let o=this.labelEls.get(a.id);if(!o){const l=document.createElement("div");this.labelsDiv.appendChild(l),o={el:l,item:a},this.labelEls.set(a.id,o)}o.item=a,o.el.className=`marker-label ${a.cls}`,a.color!==void 0&&o.el.style.setProperty("--dot",`#${a.color.toString(16).padStart(6,"0")}`),o.el.innerHTML=`${a.text}${a.sub?`<span class="depth">${a.sub}</span>`:""}`}const n=this.exag,s=this.pinGeo,r=this.pinWhite;for(const a of this.markerGroup.children){const o=a.material;o!==r&&o.dispose()}this.markerGroup.clear();for(const a of e){const o=this.groundAt(a.x,a.y),l=a.cls.includes("landmark"),c=a.cls.includes("upin"),u=a.cls.includes("measure"),d=a.color??(a.cls.includes("gauge")?2842585:a.cls.includes("none")?7042433:a.cls.includes("severe")?13648175:a.cls.includes("moderate")||a.cls.includes("val")?14060058:u?a.cls.includes("temporary")?1746837:6256276:l?5134180:7042433),h=l?14:u?20:c?34:26,f=new yt(s.pin,r);f.scale.set(1,h/n,1),f.position.set(a.x,o+h/2/n,-a.y),this.markerGroup.add(f);const v=new yt(l||u?s.small:s.head,new Ti({color:d}));if(v.scale.y=1/n,v.position.set(a.x,o+(h+1)/n,-a.y),this.markerGroup.add(v),l||u)continue;const _=new yt(s.ring,new Ti({color:d,transparent:!0,opacity:c?.9:.6,side:ri}));_.rotation.x=-Math.PI/2,_.position.set(a.x,o+.5/n,-a.y),c&&_.scale.setScalar(1.6),this.markerGroup.add(_)}}updateLabels(){const e=new O,t=window.innerWidth,n=window.innerHeight,s=o=>o.includes("upin")?-1:o.includes("val")?0:o.includes("gauge")?1:o.includes("severe")?2:o.includes("landmark")?4:o.includes("measure")?3.5:o.includes(" ug")?1.5:3,r=[];for(const{el:o,item:l}of this.labelEls.values()){e.set(l.x,this.groundAt(l.x,l.y)*this.exag+(l.cls.includes("landmark")?18:l.cls.includes("measure")?24:l.cls.includes("upin")?38:30),-l.y);const c=e.distanceTo(this.camera.position);e.project(this.camera);const u=(e.x+1)/2*t,d=(1-e.y)/2*n;if(!(e.z<1&&c<9e3&&Math.abs(e.x)<1.05&&Math.abs(e.y)<1.05&&u>this.labelInset.l+24&&u<t-this.labelInset.r-24&&d>this.labelInset.t+30&&d<n-Math.max(20,this.labelInset.b))){o.style.display="none";continue}r.push({el:o,sx:u,sy:d,dist:c,p:s(o.className),wpx:o.offsetWidth||120})}r.sort((o,l)=>o.p-l.p||o.dist-l.dist);const a=[];for(const o of r){const l={x0:o.sx-o.wpx/2-4,x1:o.sx+o.wpx/2+4,y0:o.sy-26,y1:o.sy+2};if(l.x0<this.labelInset.l+8||l.x1>t-this.labelInset.r-8){o.el.style.display="none";continue}if(a.some(u=>l.x0<u.x1&&l.x1>u.x0&&l.y0<u.y1&&l.y1>u.y0)){o.el.style.display="none";continue}a.push(l),o.el.style.display="flex",o.el.style.left=`${o.sx}px`,o.el.style.top=`${o.sy}px`,o.el.style.opacity=`${Gn.clamp(1.3-o.dist/9e3,.4,1)}`}}groundAt(e,t){if(!this.assets)return 0;const n=Gn.clamp(Math.floor(e/this.dx),0,this.W-1),s=Gn.clamp(Math.floor(t/this.dx),0,this.H-1),r=this.assets.dem[s*this.W+n];return r<-1?.5:r}surfaceAt(e,t,n){const s=this.assets,r=Gn.clamp(Math.floor(e/this.dx),0,this.W-1),o=Gn.clamp(Math.floor(t/this.dx),0,this.H-1)*this.W+r;return s.mask[o]?-2.5:s.dem[o]+(n?s.bldh[o]:0)}raycastGround(e,t,n=!0){if(!this.assets)return null;const s=new we(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),r=new Wf;r.setFromCamera(s,this.camera);const a=r.ray.origin,o=r.ray.direction,l=4e4;let c=Math.max(this.dx*.5,2),u=0,d=!0;for(let h=0;h<l;h+=c){const f=a.x+o.x*h,v=a.y+o.y*h,_=a.z+o.z*h,m=f,p=-_,x=m>=0&&p>=0&&m<=this.W*this.dx&&p<=this.H*this.dx,y=x?this.surfaceAt(m,p,n)*this.exag:-1e9,w=v>y;if(!w&&d&&x){let I=u,C=h;for(let S=0;S<12;S++){const b=(I+C)/2,H=a.x+o.x*b,z=a.y+o.y*b,j=a.z+o.z*b;z>this.surfaceAt(H,-j,n)*this.exag?I=b:C=b}const P=(I+C)/2,U=a.x+o.x*P,ie=a.z+o.z*P;return{x:U,y:-ie,z:this.groundAt(U,-ie)}}d=w,u=h,h>2e3&&(c=Math.max(c,this.dx))}return null}clearMeasures(){this.measureGroup.clear(),this.setDraft([],"wall")}setMeasures(e){this.measureGroup.clear();const t=n=>n.role??"whatif";for(const{m:n,eff:s,selected:r}of e){const a=n.kind==="wall"?t(n)==="whatif"?16167531:t(n)==="record"?8162984:3003583:n.kind==="sandbag"?10910015:n.kind==="pump"?5032432:n.kind==="tank"?7066778:9471465,o=r?15884300:s<0?15680580:a,l=s===0,c=(d=1)=>new Ti({color:o,transparent:l||d<1,opacity:l?Math.min(.28,d):d,side:ri,depthWrite:!l}),u=d=>{d.userData.id=n.id,this.measureGroup.add(d)};if(n.kind==="wall"||n.kind==="sandbag"){const d=n.height??1;if(n.cells?.length&&n.pts.length<2){const h=new Ai(this.dx,d,this.dx),f=new cw(h,c(),n.cells.length),v=new It;n.cells.forEach((_,m)=>{const p=_%this.W,x=Math.floor(_/this.W),y=(p+.5)*this.dx,w=(x+.5)*this.dx,I=this.groundAt(y,w);v.makeTranslation(y,I+(s<0?-d/2:d/2),-w),f.setMatrixAt(m,v)}),f.instanceMatrix.needsUpdate=!0,u(f);continue}for(let h=1;h<n.pts.length;h++){const f=n.pts[h-1],v=n.pts[h],_=Math.hypot(v.x-f.x,v.y-f.y);if(_<.5)continue;const m=new Ai(_+1.5,d,n.kind==="wall"?1.2:2.2),p=new yt(m,c()),x=(f.x+v.x)/2,y=(f.y+v.y)/2,w=Math.max(this.groundAt(f.x,f.y),this.groundAt(v.x,v.y));p.position.set(x,w+(s<0?-d/2:d/2),-y),p.rotation.y=Math.atan2(-(v.y-f.y),v.x-f.x),u(p)}if(r)for(const h of n.pts){const f=new yt(new jr(1.6,10,8),new Ti({color:15884300}));f.position.set(h.x,this.groundAt(h.x,h.y)+d+1.2,-h.y),u(f)}}else if(n.kind==="pump"){const d=n.pts[0];if(!d)continue;const h=this.groundAt(d.x,d.y),f=new yt(new Al(4,5,7,12),c());f.position.set(d.x,h+3.5,-d.y),u(f);const v=new yt(new Cl((n.radius??30)-2,n.radius??30,32),c(.5));v.rotation.x=-Math.PI/2,v.position.set(d.x,h+.6,-d.y),u(v)}else if(n.kind==="tank"||n.kind==="drain"){if(n.pts.length>=3){const d=new Vm(n.pts.map(_=>new we(_.x,-_.y))),h=new Ou(d);h.rotateX(Math.PI/2);const f=this.groundAt(n.pts[0].x,n.pts[0].y),v=new yt(h,c(.35));v.position.y=f+.8,u(v)}else if(n.pts[0]){const d=n.pts[0],h=this.groundAt(d.x,d.y),f=new yt(new ku(n.radius??60,40),c(.35));f.rotation.x=-Math.PI/2,f.position.set(d.x,h+.8,-d.y),u(f)}}}}pickMeasure(e,t){const n=new we(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),s=new Wf;s.setFromCamera(n,this.camera);const r=s.intersectObjects(this.measureGroup.children,!0);for(const a of r){let o=a.object;for(;o&&o.userData.id===void 0;)o=o.parent;if(o)return o.userData.id}return null}setDraft(e,t){if(this.draftLine&&(this.root.remove(this.draftLine),this.draftLine.geometry.dispose(),this.draftLine=null),e.length<1)return;const n=e.map(r=>new O(r.x,this.groundAt(r.x,r.y)+1.5,-r.y));e.length===1&&n.push(n[0].clone().add(new O(0,10,0)));const s=new Zt().setFromPoints(n);this.draftLine=new km(s,new tu({color:t==="wall"?16167531:16777215})),this.draftLine.renderOrder=30,this.root.add(this.draftLine)}defaultView(){const e=this.W*this.dx/2,t=this.H*this.dx/2,n=new O(e,this.groundAt(e,t)*this.exag+5,-t);return Qi.viewOf(n,Math.max(this.W,this.H)*this.dx*.95,20,42)}viewAt(e,t,n=900){const s=new O(e,this.groundAt(e,t)*this.exag+5,-t);return Qi.viewOf(s,n,-20+Math.random()*50,30)}render(e){this.time+=e,this.U.uTime.value=this.time,this.flashT>0?(this.flashT-=e,this.U.uFlash.value=Math.max(0,this.flashT/.18)*(.6+.4*Math.random())):this.U.uFlash.value=0,this.director.update(e),this.U.uCam.value.copy(this.camera.position),this.U.uViewH.value=this.renderer.getDrawingBufferSize(this.tmpV2).y,this.rainMat.uniforms.uCenter.value.copy(this.director.controls.target),this.rain.visible=this.U.uRainI.value>.01,this.sky.position.copy(this.camera.position);const t=this.camera.position.distanceTo(this.director.controls.target);this.effFlow==="particles"&&(this.flowA?.update(e,t),this.split&&this.flowB?.update(e,t));const n=this.pendingAdvance;this.pendingAdvance=0;const s=this.U.uSubgrid.value>.5;if(this.trendA?.update(n,s,this.trendReset),this.trendB?.update(n,s,this.trendReset),this.trendReset=!1,this.bindTrend(),this.split&&this.split.frac>.002&&this.split.frac<.998){const r=this.renderer.getDrawingBufferSize(new we),a=Math.round(this.split.frac*r.x),o=this.effFlow==="particles",l=this.effFlow==="arrows";this.renderer.setScissorTest(!0),this.setStateTextures(this.split.left.state,this.split.left.aux),this.flowA&&(this.flowA.group.visible=!1),this.arrowsA&&(this.arrowsA.mesh.visible=!1),this.flowB&&(this.flowB.group.visible=o),this.arrowsB&&(this.arrowsB.mesh.visible=l),this.renderer.setScissor(0,0,a,r.y),this.renderer.render(this.scene,this.camera),this.setStateTextures(this.split.right.state,this.split.right.aux),this.flowB&&(this.flowB.group.visible=!1),this.arrowsB&&(this.arrowsB.mesh.visible=!1),this.flowA&&(this.flowA.group.visible=o),this.arrowsA&&(this.arrowsA.mesh.visible=l),this.renderer.setScissor(a,0,r.x-a,r.y),this.renderer.render(this.scene,this.camera),this.renderer.setScissorTest(!1)}else this.renderer.render(this.scene,this.camera);this.updateLabels()}}function au(i){const e=Fb,t=Ub.map(n=>new at(n));if(i<=0)return`#${t[0].getHexString()}`;for(let n=1;n<e.length;n++)if(i<=e[n]){const s=(i-e[n-1])/(e[n]-e[n-1]);return`#${t[n-1].clone().lerp(t[n],s).getHexString()}`}return`#${t[t.length-1].getHexString()}`}class kb{constructor(e,t,n){W(this,"measures",[]);W(this,"nextId",1);W(this,"baseDrain",null);W(this,"sea",null);W(this,"rPos");W(this,"rNeg");this.W=e,this.H=t,this.dx=n,this.rPos=new Float32Array(e*t),this.rNeg=new Float32Array(e*t)}add(e){const t={...e,id:this.nextId++};return this.ensureKey(t),this.measures.push(t),t}get(e){return this.measures.find(t=>t.id===e)}update(e,t){const n=this.get(e);n&&(Object.assign(n,t),n.locked&&(n.locked=!1),this.ensureKey(n))}ensureKey(e){(e.role??"whatif")!=="whatif"&&!e.key&&(e.key=`${e.kind}_${Date.now().toString(36)}${e.id.toString(36)}`)}remove(e){this.measures=this.measures.filter(t=>t.id!==e)}clearWhatIf(){this.measures=this.measures.filter(e=>(e.role??"whatif")!=="whatif"||e.scenario_only)}replaceAll(e){this.measures=[],this.nextId=1;for(const t of e)this.add(t)}existsAt(e,t){const n=Qf(e.built),s=Qf(e.removed);return(n===null||t.eventStart>=n)&&(s===null||t.eventStart<s)}effect(e,t){if(e.info||t.bare)return 0;const n=e.role??"whatif";if(n==="whatif")return e.key&&t.keys?.includes(e.key)||t.whatIf&&!e.scenario_only?1:0;if(e.key&&t.exclude?.includes(e.key))return 0;if(n==="record"){const s=this.existsAt(e,t);return e.in_dtm?s?0:e.kind==="wall"||e.kind==="sandbag"?-1:0:s?1:0}return e.events?.length&&!e.events.includes(t.eventId)||e.from_h!==void 0&&e.from_h!==null&&t.simH<e.from_h||e.to_h!==void 0&&e.to_h!==null&&t.simH>=e.to_h?0:1}signature(e){return this.measures.map(t=>`${t.id}:${this.effect(t,e)}`).join("|")}cost(e){const t=this.length(e);switch(e.kind){case"wall":return t*(e.height??1)*45e3;case"sandbag":return t*800;case"pump":return 25e5+(e.rate??1)*12e5;case"tank":return(e.capacity??1e4)*9e3;case"drain":return this.area(e)*1500}}length(e){if(e.cells?.length&&e.pts.length<2)return e.cells.length*this.dx;let t=0;for(let n=1;n<e.pts.length;n++)t+=Math.hypot(e.pts[n].x-e.pts[n-1].x,e.pts[n].y-e.pts[n-1].y);return t}area(e){if(e.cells?.length&&e.pts.length<3)return e.cells.length*this.dx*this.dx;if(e.pts.length<3)return Math.PI*(e.radius??50)**2;let t=0;const n=e.pts;for(let s=0;s<n.length;s++){const r=n[(s+1)%n.length];t+=n[s].x*r.y-r.x*n[s].y}return Math.abs(t)/2}rasterize(e,t){const n=this.W*this.H;this.rPos.fill(0),this.rNeg.fill(0);for(let s=0;s<n;s++)e[s*4]=0,e[s*4+1]=0,e[s*4+2]=0,e[s*4+3]=this.baseDrain?this.baseDrain[s]:1;for(const s of this.measures){const r=this.effect(s,t);if(!r)continue;const a=this.cellsOf(s);if(a.length){if(s.kind==="wall"||s.kind==="sandbag"){const o=(s.height??1)*r;for(const l of a)this.sea&&this.sea[l]||(o>0?this.rPos[l]=Math.max(this.rPos[l],o):this.rNeg[l]=Math.min(this.rNeg[l],o))}else if(s.kind==="pump"){const o=(s.rate??1)/(a.length*this.dx*this.dx);for(const l of a)e[l*4+1]+=o}else if(s.kind==="tank"){const o=(s.capacity??2e4)/(a.length*this.dx*this.dx);for(const l of a)e[l*4+2]+=o}else if(s.kind==="drain")for(const o of a)e[o*4+3]*=s.factor??2}}for(let s=0;s<n;s++)e[s*4]=this.rPos[s]>0?this.rPos[s]:this.rNeg[s]}cellsOf(e){return e.cells?.length?e.cells.filter(t=>t>=0&&t<this.W*this.H):e.pts.length?e.kind==="wall"||e.kind==="sandbag"?this.lineCells(e.pts):e.kind==="pump"?this.discCells(e.pts[0],e.radius??25):e.pts.length>=3?this.polygonCells(e.pts):this.discCells(e.pts[0],e.radius??50):[]}cellOf(e){return{i:Math.floor(e.x/this.dx),j:Math.floor(e.y/this.dx)}}inside(e,t){return e>=0&&t>=0&&e<this.W&&t<this.H}lineCells(e){const t=[],n=new Set,s=(r,a)=>{if(this.inside(r,a)){const o=a*this.W+r;n.has(o)||(n.add(o),t.push(o))}};if(e.length===1){const r=this.cellOf(e[0]);return s(r.i,r.j),t}for(let r=1;r<e.length;r++){const a=this.cellOf(e[r-1]),o=this.cellOf(e[r]);let{i:l,j:c}=a;const{i:u,j:d}=o,h=Math.abs(u-l),f=-Math.abs(d-c),v=l<u?1:-1,_=c<d?1:-1;let m=h+f;for(;s(l,c),!(l===u&&c===d);){const p=2*m;p>=f&&(m+=f,l+=v,s(l,c)),p<=h&&(m+=h,c+=_,s(l,c))}}return t}discCells(e,t){const n=[],s=Math.max(1,Math.ceil(t/this.dx)),r=this.cellOf(e);for(let a=r.j-s;a<=r.j+s;a++)for(let o=r.i-s;o<=r.i+s;o++)this.inside(o,a)&&Math.hypot((o+.5)*this.dx-e.x,(a+.5)*this.dx-e.y)<=t&&n.push(a*this.W+o);if(!n.length){const a=r.j*this.W+r.i;this.inside(r.i,r.j)&&n.push(a)}return n}polygonCells(e){const t=[],n=e.map(c=>c.x),s=e.map(c=>c.y),r=Math.max(0,Math.floor(Math.min(...n)/this.dx)),a=Math.min(this.W-1,Math.floor(Math.max(...n)/this.dx)),o=Math.max(0,Math.floor(Math.min(...s)/this.dx)),l=Math.min(this.H-1,Math.floor(Math.max(...s)/this.dx));for(let c=o;c<=l;c++)for(let u=r;u<=a;u++)Ob((u+.5)*this.dx,(c+.5)*this.dx,e)&&t.push(c*this.W+u);return t}toSaved(e,t){const n=this.measures.filter(s=>!s.locked).map(s=>{const{id:r,locked:a,...o}=s;return o});return{version:1,scene:e,origin:t,saved:new Date().toISOString(),measures:n}}loadSaved(e,t){const n=(e.origin?.e0??t.e0)-t.e0,s=(e.origin?.n0??t.n0)-t.n0;for(const r of e.measures??[]){const a={...r,pts:(r.pts??[]).map(o=>({x:o.x+n,y:o.y+s}))};if(a.key){const o=this.measures.find(l=>l.key===a.key);o&&(this.measures=this.measures.filter(l=>l!==o))}this.add(a)}}}function Qf(i){if(!i)return null;const e=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(i.trim());return e?new Date(`${e[1]}-${e[2]}-${e[3]??"01"}T00:00:00+08:00`).getTime():null}function Ob(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){const a=t[s].x,o=t[s].y,l=t[r].x,c=t[r].y;o>e!=c>e&&i<(l-a)*(e-o)/(c-o)+a&&(n=!n)}return n}var jl,Pt,jm,Ym,ws,ep,Km,Zm,ih,gl,qa,Jm,Gu,ou,lu,Pl={},Dl=[],zb=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Yl=Array.isArray;function ss(i,e){for(var t in e)i[t]=e[t];return i}function Wu(i){i&&i.parentNode&&i.parentNode.removeChild(i)}function Qm(i,e,t){var n,s,r,a={};for(r in e)r=="key"?n=e[r]:r=="ref"?s=e[r]:a[r]=e[r];if(arguments.length>2&&(a.children=arguments.length>3?jl.call(arguments,2):t),typeof i=="function"&&i.defaultProps!=null)for(r in i.defaultProps)a[r]===void 0&&(a[r]=i.defaultProps[r]);return vl(i,a,n,s,null)}function vl(i,e,t,n,s){var r={type:i,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++jm,__i:-1,__u:0};return s==null&&Pt.vnode!=null&&Pt.vnode(r),r}function dt(i){return i.children}function ja(i,e){this.props=i,this.context=e}function ar(i,e){if(e==null)return i.__?ar(i.__,i.__i+1):null;for(var t;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null)return t.__e;return typeof i.type=="function"?ar(i):null}function Bb(i){if(i.__P&&i.__d){var e=i.__v,t=e.__e,n=[],s=[],r=ss({},e);r.__v=e.__v+1,Pt.vnode&&Pt.vnode(r),$u(i.__P,r,e,i.__n,i.__P.namespaceURI,32&e.__u?[t]:null,n,t??ar(e),!!(32&e.__u),s),r.__v=e.__v,r.__.__k[r.__i]=r,s0(n,r,s),e.__e=e.__=null,r.__e!=t&&e0(r)}}function e0(i){if((i=i.__)!=null&&i.__c!=null)return i.__e=i.__c.base=null,i.__k.some(function(e){if(e!=null&&e.__e!=null)return i.__e=i.__c.base=e.__e}),e0(i)}function tp(i){(!i.__d&&(i.__d=!0)&&ws.push(i)&&!Ll.__r++||ep!=Pt.debounceRendering)&&((ep=Pt.debounceRendering)||Km)(Ll)}function Ll(){try{for(var i,e=1;ws.length;)ws.length>e&&ws.sort(Zm),i=ws.shift(),e=ws.length,Bb(i)}finally{ws.length=Ll.__r=0}}function t0(i,e,t,n,s,r,a,o,l,c,u){var d,h,f,v,_,m,p=n&&n.__k||Dl,x=e.length;for(l=Hb(t,e,p,l,x),d=0;d<x;d++)(f=t.__k[d])!=null&&(h=f.__i!=-1&&p[f.__i]||Pl,f.__i=d,m=$u(i,f,h,s,r,a,o,l,c,u),v=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&Xu(h.ref,null,f),u.push(f.ref,f.__c||v,f)),_==null&&v!=null&&(_=v),4&f.__u?(l=n0(f,l,i),h.__e&&(h.__e=null)):typeof f.type=="function"&&m!==void 0?l=m:v&&(l=v.nextSibling),f.__u&=-7);return t.__e=_,l}function Hb(i,e,t,n,s){var r,a,o,l,c,u=t.length,d=u,h=0;for(i.__k=new Array(s),r=0;r<s;r++)(a=e[r])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=i.__k[r]=vl(null,a,null,null,null):Yl(a)?a=i.__k[r]=vl(dt,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=i.__k[r]=vl(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):i.__k[r]=a,l=r+h,a.__=i,a.__b=i.__b+1,o=null,(c=a.__i=Vb(a,t,l,d))!=-1&&(d--,(o=t[c])&&(o.__u|=2)),o==null||o.__v==null?(c==-1&&(s>u?h--:s<u&&h++),typeof a.type!="function"&&(a.__u|=4)):c!=l&&(c==l-1?h--:c==l+1?h++:(c>l?h--:h++,a.__u|=4))):i.__k[r]=null;if(d)for(r=0;r<u;r++)(o=t[r])!=null&&!(2&o.__u)&&(o.__e==n&&(n=ar(o)),a0(o,o));return n}function n0(i,e,t){var n,s;if(typeof i.type=="function"){for(n=i.__k,s=0;n&&s<n.length;s++)n[s]&&(n[s].__=i,e=n0(n[s],e,t));return e}i.__e!=e&&(e&&i.type&&!e.parentNode&&(e=ar(i)),e=t.insertBefore(i.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Vb(i,e,t,n){var s,r,a,o=i.key,l=i.type,c=e[t],u=c!=null&&(2&c.__u)==0;if(c===null&&o==null||u&&o==c.key&&l==c.type)return t;if(n>(u?1:0)){for(s=t-1,r=t+1;s>=0||r<e.length;)if((c=e[a=s>=0?s--:r++])!=null&&!(2&c.__u)&&o==c.key&&l==c.type)return a}return-1}function np(i,e,t){e[0]=="-"?i.setProperty(e,t??""):i[e]=t==null?"":typeof t!="number"||zb.test(e)?t:t+"px"}function sl(i,e,t,n,s){var r,a;e:if(e=="style")if(typeof t=="string")i.style.cssText=t;else{if(typeof n=="string"&&(i.style.cssText=n=""),n)for(e in n)t&&e in t||np(i.style,e,"");if(t)for(e in t)n&&t[e]==n[e]||np(i.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(Jm,"$1")),a=e.toLowerCase(),e=a in i||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),i.l||(i.l={}),i.l[e+r]=t,t?n?t[qa]=n[qa]:(t[qa]=Gu,i.addEventListener(e,r?lu:ou,r)):i.removeEventListener(e,r?lu:ou,r);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in i)try{i[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?i.removeAttribute(e):i.setAttribute(e,e=="popover"&&t==1?"":t))}}function ip(i){return function(e){if(this.l){var t=this.l[e.type+i];if(e[gl]==null)e[gl]=Gu++;else if(e[gl]<t[qa])return;return t(Pt.event?Pt.event(e):e)}}}function $u(i,e,t,n,s,r,a,o,l,c){var u,d,h,f,v,_,m,p,x,y,w,I,C,P,U,ie,S=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),r=[o=e.__e=t.__e]),(u=Pt.__b)&&u(e);e:if(typeof S=="function"){d=a.length;try{if(x=e.props,y=S.prototype&&S.prototype.render,w=(u=S.contextType)&&n[u.__c],I=u?w?w.props.value:u.__:n,t.__c?p=(h=e.__c=t.__c).__=h.__E:(y?e.__c=h=new S(x,I):(e.__c=h=new ja(x,I),h.constructor=S,h.render=Wb),w&&w.sub(h),h.state||(h.state={}),h.__n=n,f=h.__d=!0,h.__h=[],h._sb=[]),y&&h.__s==null&&(h.__s=h.state),y&&S.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=ss({},h.__s)),ss(h.__s,S.getDerivedStateFromProps(x,h.__s))),v=h.props,_=h.state,h.__v=e,f)y&&S.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),y&&h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(y&&S.getDerivedStateFromProps==null&&x!==v&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(x,I),e.__v==t.__v||!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(x,h.__s,I)===!1){e.__v!=t.__v&&(h.props=x,h.state=h.__s,h.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(b){b&&(b.__=e)}),Dl.push.apply(h.__h,h._sb),h._sb=[],h.__h.length&&a.push(h),o=ar(t);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(x,h.__s,I),y&&h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(v,_,m)})}if(h.context=I,h.props=x,h.__P=i,h.__e=!1,C=Pt.__r,P=0,y)h.state=h.__s,h.__d=!1,C&&C(e),u=h.render(h.props,h.state,h.context),Dl.push.apply(h.__h,h._sb),h._sb=[];else do h.__d=!1,C&&C(e),u=h.render(h.props,h.state,h.context),h.state=h.__s;while(h.__d&&++P<25);h.state=h.__s,h.getChildContext!=null&&(n=ss(ss({},n),h.getChildContext())),y&&!f&&h.getSnapshotBeforeUpdate!=null&&(m=h.getSnapshotBeforeUpdate(v,_)),U=u!=null&&u.type===dt&&u.key==null?r0(u.props.children):u,o=t0(i,Yl(U)?U:[U],e,t,n,s,r,a,o,l,c),h.base=e.__e,e.__u&=-161,h.__h.length&&a.push(h),p&&(h.__E=h.__=null)}catch(b){if(a.length=d,e.__v=null,l||r!=null){if(b.then){for(e.__u|=l?160:128;o&&o.nodeType==8&&o.nextSibling;)o=o.nextSibling;r!=null&&(r[r.indexOf(o)]=null),e.__e=o}else if(r!=null)for(ie=r.length;ie--;)Wu(r[ie])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),b.then||i0(e),Pt.__e(b,e,t)}}else r==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):o=e.__e=Gb(t.__e,e,t,n,s,r,a,l,c);return(u=Pt.diffed)&&u(e),128&e.__u?void 0:o}function i0(i){i&&(i.__c&&(i.__c.__e=!0),i.__k&&i.__k.some(i0))}function s0(i,e,t){for(var n=0;n<t.length;n++)Xu(t[n],t[++n],t[++n]);Pt.__c&&Pt.__c(e,i),i.some(function(s){try{i=s.__h,s.__h=[],i.some(function(r){r.call(s)})}catch(r){Pt.__e(r,s.__v)}})}function r0(i){return typeof i!="object"||i==null||i.__b>0?i:Yl(i)?i.map(r0):i.constructor!==void 0?null:ss({},i)}function Gb(i,e,t,n,s,r,a,o,l){var c,u,d,h,f,v,_,m=t.props||Pl,p=e.props,x=e.type;if(x=="svg"?s="http://www.w3.org/2000/svg":x=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),r!=null){for(c=0;c<r.length;c++)if((f=r[c])&&"setAttribute"in f==!!x&&(x?f.localName==x:f.nodeType==3)){i=f,r[c]=null;break}}if(i==null){if(x==null)return document.createTextNode(p);i=document.createElementNS(s,x,p.is&&p),o&&(Pt.__m&&Pt.__m(e,r),o=!1),r=null}if(x==null)m===p||o&&i.data==p||(i.data=p);else{if(r=x=="textarea"&&p.defaultValue!=null?null:r&&jl.call(i.childNodes),!o&&r!=null)for(m={},c=0;c<i.attributes.length;c++)m[(f=i.attributes[c]).name]=f.value;for(c in m)f=m[c],c=="dangerouslySetInnerHTML"?d=f:c=="children"||c in p||c=="value"&&"defaultValue"in p||c=="checked"&&"defaultChecked"in p||sl(i,c,null,f,s);for(c in p)f=p[c],c=="children"?h=f:c=="dangerouslySetInnerHTML"?u=f:c=="value"?v=f:c=="checked"?_=f:o&&typeof f!="function"||m[c]===f||sl(i,c,f,m[c],s);if(u)o||d&&(u.__html==d.__html||u.__html==i.innerHTML)||(i.innerHTML=u.__html),e.__k=[];else if(d&&(i.innerHTML=""),t0(e.type=="template"?i.content:i,Yl(h)?h:[h],e,t,n,x=="foreignObject"?"http://www.w3.org/1999/xhtml":s,r,a,r?r[0]:t.__k&&ar(t,0),o,l),r!=null)for(c=r.length;c--;)Wu(r[c]);o&&x!="textarea"||(c="value",x=="progress"&&v==null?i.removeAttribute("value"):v!=null&&(v!==i[c]||x=="progress"&&!v||x=="option"&&v!=m[c])&&sl(i,c,v,m[c],s),c="checked",_!=null&&_!=i[c]&&sl(i,c,_,m[c],s))}return i}function Xu(i,e,t){try{if(typeof i=="function"){var n=typeof i.__u=="function";n&&i.__u(),n&&e==null||(i.__u=i(e))}else i.current=e}catch(s){Pt.__e(s,t)}}function a0(i,e,t){var n,s;if(Pt.unmount&&Pt.unmount(i),(n=i.ref)&&(n.current&&n.current!=i.__e||Xu(n,null,e)),(n=i.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(r){Pt.__e(r,e)}n.base=n.__P=n.__n=null}if(n=i.__k)for(s=0;s<n.length;s++)n[s]&&a0(n[s],e,t||typeof i.type!="function");t||Wu(i.__e),i.__c=i.__=i.__e=void 0}function Wb(i,e,t){return this.constructor(i,t)}function $b(i,e,t){var n,s,r,a;e==document&&(e=document.documentElement),Pt.__&&Pt.__(i,e),s=(n=!1)?null:e.__k,r=[],a=[],$u(e,i=e.__k=Qm(dt,null,[i]),s||Pl,Pl,e.namespaceURI,s?null:e.firstChild?jl.call(e.childNodes):null,r,s?s.__e:e.firstChild,n,a),s0(r,i,a),i.props.children=null}jl=Dl.slice,Pt={__e:function(i,e,t,n){for(var s,r,a;e=e.__;)if((s=e.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(i)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(i,n||{}),a=s.__d),a)return s.__E=s}catch(o){i=o}throw i}},jm=0,Ym=function(i){return i!=null&&i.constructor===void 0},ja.prototype.setState=function(i,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=ss({},this.state),typeof i=="function"&&(i=i(ss({},t),this.props)),i&&ss(t,i),i!=null&&this.__v&&(e&&this._sb.push(e),tp(this))},ja.prototype.forceUpdate=function(i){this.__v&&(this.__e=!0,i&&this.__h.push(i),tp(this))},ja.prototype.render=dt,ws=[],Km=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Zm=function(i,e){return i.__v.__b-e.__v.__b},Ll.__r=0,ih=Math.random().toString(8),gl="__d"+ih,qa="__a"+ih,Jm=/(PointerCapture)$|Capture$/i,Gu=0,ou=ip(!1),lu=ip(!0);const Xb={subtitle:{zh:"香港洪涝实验室 · 交互式洪水数字孪生",en:"Hong Kong interactive flood digital twin"},scenario:{zh:"情景",en:"Scenario"},comparison:{zh:"真实数据 vs 模拟",en:"Observed vs simulated"},params:{zh:"参数",en:"Parameters"},surgeScale:{zh:"风暴潮增水倍率",en:"Surge multiplier"},waveSetup:{zh:"波浪增水（平均水位抬升）",en:"Wave set-up"},waveHs:{zh:"岸边有效波高 Hs（越浪）",en:"Nearshore wave height Hs (overtopping)"},slr:{zh:"海平面上升",en:"Sea-level rise"},rainScale:{zh:"雨量倍率",en:"Rainfall multiplier"},drain:{zh:"排水能力",en:"Drainage capacity"},buildingsBlock:{zh:"建筑物阻水（视为实体）",en:"Buildings block flow"},subgrid:{zh:"子网格地形（1 m LiDAR 格内分布）",en:"Sub-grid terrain (1 m LiDAR within cells)"},defences:{zh:"沿岸防御（按事件日期生效）",en:"Coastal defences (by event date)"},def_built:{zh:"事件时已建成",en:"in place at the event"},def_notyet:{zh:"事件时未建成",en:"not yet built at the event"},measures:{zh:"措施与防御",en:"Measures & defences"},role_whatif:{zh:"情景措施",en:"What-if"},role_record:{zh:"实际工程",en:"Built record"},role_temporary:{zh:"临时措施",en:"Temporary"},newRole:{zh:"新画的措施记为",en:"Draw new measures as"},snapShore:{zh:"顶点吸附到岸线格（画海堤用）",en:"Snap vertices to the shoreline (for sea walls)"},snapOn:{zh:"（顶点吸附岸线：开）",en:"(snapping to the shoreline)"},clearNote:{zh:"只清除情景措施；实际工程与临时措施是数据，逐条删除",en:"Removes what-if measures only; records and temporary measures are data, delete them one by one"},noMeasures:{zh:"还没有措施。画一条墙、放一台泵，或从 JSON 导入；点列表里的一项可编辑属性。",en:"No measures yet. Draw a wall, place a pump or import JSON; click an item to edit its attributes."},def_removed:{zh:"事件时尚未建成（已从地形中撤掉）",en:"not yet built at the event (removed from the terrain)"},def_raised:{zh:"已抬高地形",en:"added to the terrain"},tmp_on:{zh:"此刻生效",en:"active now"},tmp_off:{zh:"此刻未生效",en:"inactive now"},fromPipeline:{zh:"来自管线（defences.py），几何不可重画；改属性后会存入 measures.json",en:"From the pipeline (defences.py); geometry fixed, edited attributes go to measures.json"},delete:{zh:"删除",en:"Delete"},f_name:{zh:"名称",en:"Name"},f_name_ph:{zh:"例：鲤鱼门石筑海堤",en:"e.g. Lei Yue Mun rock seawall"},f_role:{zh:"类型",en:"Role"},f_built:{zh:"建成年月",en:"Completed"},f_removed:{zh:"拆除年月（可空）",en:"Removed (optional)"},f_in_dtm:{zh:"2020 年 LiDAR 地形里已有此结构（更早的事件会把它撤掉）",en:"Already in the 2020 LiDAR terrain (removed for earlier events)"},f_events:{zh:"适用事件：",en:"Applies to: "},f_window:{zh:"生效时间窗（距事件开始的小时）",en:"Active window (hours from event start)"},f_src:{zh:"来源",en:"Source"},f_src_ph:{zh:"文件 / 新闻 / 现场照片",en:"paper / news / photo"},f_note:{zh:"备注",en:"Note"},f_key:{zh:"key",en:"key"},geomCells:{zh:"格索引几何",en:"cell-index geometry"},save:{zh:"保存到场景",en:"Save to scene"},download:{zh:"下载 JSON",en:"Download JSON"},revert:{zh:"放弃改动",en:"Revert"},exportNote:{zh:"导出 JSON",en:"Export JSON"},importNote:{zh:"导入 JSON（同 key 覆盖）",en:"Import JSON (same key replaces)"},wall:{zh:"防洪墙 / 挡水板",en:"Flood wall / barrier"},sandbag:{zh:"沙包堤",en:"Sandbag line"},pump:{zh:"排水泵",en:"Pump"},tank:{zh:"地下蓄洪池",en:"Storage tank"},drainUp:{zh:"雨水渠扩容",en:"Drain upgrade"},clear:{zh:"清除全部",en:"Clear all"},finish:{zh:"完成绘制",en:"Finish"},cancel:{zh:"取消",en:"Cancel"},wallHeight:{zh:"墙高",en:"Height"},pumpRate:{zh:"抽排流量",en:"Pump rate"},tankCap:{zh:"容量",en:"Capacity"},drainFactor:{zh:"排水系数（0 = 进水口堵塞）",en:"Drain factor (0 = intake blocked)"},drainBlocked:{zh:"排水口堵塞",en:"Drain intake blocked"},hintDraw:{zh:"在地图上单击放置节点，双击或点“完成绘制”结束。",en:"Click on the map to place vertices; double-click or press Finish to end."},hintPoint:{zh:"在地图上单击放置。",en:"Click on the map to place."},metrics:{zh:"影响指标",en:"Impact metrics"},maxDepth:{zh:"最大水深",en:"Max depth"},floodedArea:{zh:"淹没面积 (>15 cm)",en:"Flooded area (>15 cm)"},severeArea:{zh:"严重淹没 (>50 cm)",en:"Severe (>50 cm)"},bldAffected:{zh:"受影响建筑",en:"Buildings affected"},volume:{zh:"陆上水量",en:"Water on land"},baseline:{zh:"无措施基线",en:"Baseline (no measures)"},withMeasures:{zh:"含措施",en:"With measures"},tideChart:{zh:"潮位：实测 vs 天文潮 vs 模型边界",en:"Sea level: observed vs astronomical vs model boundary"},rainChart:{zh:"雨量过程线 (mm/h)",en:"Rainfall hyetograph (mm/h)"},validation:{zh:"实际水浸记录 vs 模拟最大水深",en:"Reported flooding vs simulated max depth"},place:{zh:"地点",en:"Location"},observed:{zh:"实测/报道",en:"Reported"},simulated:{zh:"模拟",en:"Simulated"},score:{zh:"命中率",en:"Hit rate"},noVal:{zh:"该场景在此事件中没有可核对的水浸记录。",en:"No validation records for this scene/event."},play:{zh:"播放",en:"Play"},pause:{zh:"暂停",en:"Pause"},depth:{zh:"水深",en:"Depth"},sources:{zh:"数据来源",en:"Sources"},modelNote:{zh:"模型：GPU 二维浅水方程（局部惯性格式，LISFLOOD-FP 同类），网格",en:"Model: GPU 2-D shallow water (local-inertial, LISFLOOD-FP class), grid"},fictional:{zh:"虚构情景",en:"Fictional"},typhoon:{zh:"台风风暴潮",en:"Typhoon surge"},rainstorm:{zh:"暴雨",en:"Rainstorm"},peakObs:{zh:"实测峰值",en:"Observed peak"},peakModel:{zh:"模型边界峰值",en:"Model boundary peak"},tourRunning:{zh:"飞览中… 拖动鼠标可退出",en:"Touring… drag to exit"},loading:{zh:"正在加载场景数据…",en:"Loading scene data…"},ffwd:{zh:"快进计算中",en:"Fast-forwarding"},realtime:{zh:"倍速",en:"×"},costNote:{zh:"粗略造价",en:"Rough cost"},gaugeNow:{zh:"当前边界潮位",en:"Boundary sea level"},rainNow:{zh:"当前雨强",en:"Rain rate"},flowParticles:{zh:"流向：粒子",en:"Flow: particles"},flowArrows:{zh:"流向：箭头",en:"Flow: arrows"},flowNone:{zh:"流向：关",en:"Flow: off"},peak:{zh:"跳到峰值",en:"Jump to peak"},hotspots:{zh:"最严重水浸点（模拟最大水深，街道格）",en:"Worst flooded spots (simulated max depth, streets)"},flyTo:{zh:"飞到",en:"Fly"},swipeLeft:{zh:"◀ 无措施 · 基线",en:"◀ Baseline (no measures)"},swipeRight:{zh:"含措施 ▶",en:"With measures ▶"},noHot:{zh:"尚无 ≥ 0.3 m 的街道积水",en:"No street flooding ≥ 0.3 m yet"},facilities:{zh:"重点设施影响（60 m 内街道最大水深）",en:"Key facilities (max street depth within 60 m)"},facility:{zh:"设施",en:"Facility"},unaffected:{zh:"未受影响",en:"unaffected"},showFac:{zh:"标出受影响的重点设施（医院、港铁站、学校、安老院、停车场…）",en:"Mark affected key facilities (hospitals, MTR, schools, elderly homes, car parks…)"},ft_hospital:{zh:"医院",en:"Hospital"},ft_mtr:{zh:"港铁站",en:"MTR station"},ft_ferry:{zh:"码头",en:"Ferry pier"},ft_bus:{zh:"巴士总站",en:"Bus terminus"},ft_carpark:{zh:"停车场",en:"Car park"},ft_power:{zh:"变电站",en:"Substation"},ft_school:{zh:"学校",en:"School"},ft_elderly:{zh:"安老院",en:"Elderly home"},ft_mall:{zh:"商场",en:"Shopping mall"},ft_fire:{zh:"消防局",en:"Fire station"},ft_police:{zh:"警署",en:"Police station"},ft_community:{zh:"社区中心",en:"Community centre"},ft_water:{zh:"水务设施",en:"Water works"},ft_underground:{zh:"地下空间（估计）",en:"Underground space (estimate)"},swipeHint:{zh:"A/B 分屏：拖动中间的把手，左边是无措施基线，右边是含措施",en:"Swipe view: drag the handle; baseline on the left, measures on the right"},sceneLbl:{zh:"场景",en:"Scene"},eventLbl:{zh:"事件",en:"Event"},places:{zh:"地点",en:"Places"},layers:{zh:"图层",en:"Layers"},grpCoast:{zh:"海岸边界",en:"Coastal boundary"},grpRain:{zh:"降雨与排水",en:"Rain & drainage"},grpModel:{zh:"模型设置",en:"Model"},showMax:{zh:"在地面上显示最大淹没范围",en:"Show max-depth footprint on terrain"},forcing:{zh:"外部驱动",en:"Forcing"},more:{zh:"展开",en:"More"},less:{zh:"收起",en:"Less"},hit:{zh:"命中",en:"Hit"},miss:{zh:"偏差",en:"Miss"},hitRule:{zh:"±0.35 m 或 ±50% 视为命中；取地点 60 m 内街道格的最大水深。报道位置是近似的，结果仅供参考。",en:"Hit if within ±0.35 m or ±50%; max depth over street cells within 60 m. Reported locations are approximate; indicative only."},c_sea:{zh:"潮位",en:"Sea"},c_rain:{zh:"雨强",en:"Rain"},perSec:{zh:"每秒模拟",en:"Sim per second"},running:{zh:"运行中",en:"Running"},paused:{zh:"已暂停",en:"Paused"},lg_val:{zh:"水浸记录",en:"Reported flooding"},lg_gauge:{zh:"潮位站",en:"Tide gauge"},lg_fac:{zh:"受影响设施",en:"Affected facility"},vsBase:{zh:"差值 = 含措施 − 基线；绿色为改善",en:"Delta = with measures − baseline; green is better"},splitNote:{zh:"分屏：左 A = 无措施基线，右 B = 含措施（拖动画面中央把手）",en:"Split view: left A = baseline, right B = with measures (drag the handle)"},ofFlooded:{zh:"占淹没面积",en:"of flooded area"},bldRule:{zh:"周边最大水深 > 0.15 m",en:"max depth nearby > 0.15 m"},scrubHint:{zh:"点击或拖动跳转；← → 键逐步",en:"Click or drag to seek; arrow keys step"},noMetrics:{zh:"模拟开始后显示",en:"Shown once the run starts"},waterNow:{zh:"当前水深",en:"Depth now"},waterMax:{zh:"最大水深",en:"Max depth"},legendNow:{zh:"水深 · 当前",en:"Water depth · now"},legendMax:{zh:"最大水深 · 整个事件",en:"Max depth · whole event"},waterMaxHint:{zh:"显示到目前为止每格达到过的最大水深（跑完整个事件即为全事件最大）",en:"Highest depth each cell has reached so far (the whole-event maximum once the run is complete)"},lg_rise:{zh:"上涨中（亮、脉动）",en:"Rising (lit, pulsing)"},lg_recede:{zh:"退水中（暗、浑）",en:"Receding (dull, muddy)"},lg_contour:{zh:"等深线 0.1–2 m",en:"Depth contours 0.1–2 m"},lg_trace:{zh:"退水痕迹",en:"Dried after flooding"},lg_edge:{zh:"湿区边界",en:"Wet / dry edge"},lg_ug:{zh:"地库透视（填充 = 灌入深度）",en:"Basement X-ray (fill = depth inside)"},camBird:{zh:"鸟瞰（全场景）",en:"Bird's-eye (whole scene)"},camStreet:{zh:"街景视角（最严重水浸点）",en:"Street view (worst spot)"},camFollow:{zh:"跟随最严重水浸点",en:"Follow the worst spot"},exag:{zh:"竖向夸张（地形、建筑、水体）",en:"Vertical exaggeration (terrain, buildings, water)"},landmarks:{zh:"地标（地点、港铁站、医院、商场、码头）",en:"Landmarks (places, MTR, hospitals, malls, piers)"},shadows:{zh:"日照阴影（建筑与地形）",en:"Sun shadows (buildings and terrain)"},trendUp:{zh:"水量上涨",en:"Rising"},trendDown:{zh:"水量消退",en:"Receding"},trendFlat:{zh:"水量平稳",en:"Steady"},trendTip:{zh:"陆上水量的变化速率（街道与空地格）",en:"Rate of change of water on land (street and open cells)"},pins:{zh:"钉点时间序列",en:"Pinned points"},pin:{zh:"钉点",en:"Pin"},pinHint:{zh:"在地图上点一下放置钉点（Esc 取消）；放下后会从头重跑以补齐整条曲线",en:"Click the map to drop a pin (Esc cancels); the run restarts from the beginning to fill its whole curve"},pinEmpty:{zh:"在地图上任意位置放一个钉点，看它在整个事件里的水深变化，并与潮位、雨量对照。",en:"Drop a pin anywhere on the map to follow its water depth through the event, against sea level and rainfall."},pinAdd:{zh:"放置钉点",en:"Drop a pin"},exportCsv:{zh:"导出 CSV",en:"Export CSV"},pinNow:{zh:"当前",en:"now"},pinMax:{zh:"最大",en:"max"},pinDepth:{zh:"水深 (m)",en:"Depth (m)"},pinRerun:{zh:"放针后从头重跑补齐曲线；参数或措施改变时曲线随之重算",en:"Dropping a pin re-runs from the start to fill the curve; changing parameters or measures recomputes it"},under:{zh:"偏低",en:"Under"},over:{zh:"偏高",en:"Over"},unrep:{zh:"数据层无法表达",en:"Not in data"},valHead:{zh:"报道深度不是实测：B = 有物理参照 ±0.3 m，C = 按「水浸 / 严重水浸」等级填数 ±50%，D = 推估。模拟值取地点 60 m 内街道格的最大水深；地库点取地库水深（流入体积 ÷ 楼面面积）。点一行看依据与模型备注。",en:"Reported depths are not measurements: B = physical reference ±0.3 m, C = filled from a severity class ±50%, D = inferred. Simulated = max depth over street cells within 60 m; basement points use the basement depth (inflow volume ÷ floor area). Click a row for the basis and model notes."},basis:{zh:"依据",en:"Basis"},modelNotes:{zh:"模型备注",en:"Model note"},source:{zh:"出处",en:"Source"},sampling:{zh:"取样",en:"Sampling"},ugDepth:{zh:"地库水深（流入体积 ÷ 楼面面积）",en:"Basement depth (inflow volume ÷ floor area)"},streetDepth:{zh:"60 m 内街道格最大水深",en:"max street depth within 60 m"},snapped:{zh:"取样点已吸附到 {d} m 外的最低街道格",en:"sample point snapped {d} m to the lowest street cell"},bermNote:{zh:"报道位置是 {z} mPD 的河畔阶地，地形数据里没有这一层",en:"reported at a {z} mPD riverside berm that the terrain data does not contain"},gradeB:{zh:"B：有物理参照",en:"B: physical reference"},gradeC:{zh:"C：等级描述",en:"C: severity class"},gradeD:{zh:"D：推估",en:"D: inferred"},estimated:{zh:"推估",en:"est."}};let Kl="zh";function qb(i){Kl=i}function or(){return Kl}function k(i){const e=Xb[i];return e?e[Kl]:i}function Q(i,e){return Kl==="zh"?i:e}var ao,Qt,sh,sp,Il=0,o0=[],rn=Pt,rp=rn.__b,ap=rn.__r,op=rn.diffed,lp=rn.__c,cp=rn.unmount,hp=rn.__;function qu(i,e){rn.__h&&rn.__h(Qt,i,Il||e),Il=0;var t=Qt.__H||(Qt.__H={__:[],__h:[]});return i>=t.__.length&&t.__.push({}),t.__[i]}function fo(i){return Il=1,jb(c0,i)}function jb(i,e,t){var n=qu(ao++,2);if(n.t=i,!n.__c&&(n.__=[c0(void 0,e),function(o){var l=n.__N?n.__N[0]:n.__[0],c=n.t(l,o);l!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=Qt,!Qt.__f)){var s=function(o,l,c){if(!n.__c.__H)return!0;var u=!1,d=n.__c.props!==o;if(n.__c.__H.__.some(function(f){if(f.__N){u=!0;var v=f.__[0];f.__=f.__N,f.__N=void 0,v!==f.__[0]&&(d=!0)}}),r){var h=r.call(this,o,l,c);return u?h||d:h}return!u||d};Qt.__f=!0;var r=Qt.shouldComponentUpdate,a=Qt.componentWillUpdate;Qt.componentWillUpdate=function(o,l,c){if(this.__e){var u=r;r=void 0,s(o,l,c),r=u}a&&a.call(this,o,l,c)},Qt.shouldComponentUpdate=s}return n.__N||n.__}function er(i,e){var t=qu(ao++,3);!rn.__s&&l0(t.__H,e)&&(t.__=i,t.u=e,Qt.__H.__h.push(t))}function zi(i){return Il=5,ju(function(){return{current:i}},[])}function ju(i,e){var t=qu(ao++,7);return l0(t.__H,e)&&(t.__=i(),t.__H=e,t.__h=i),t.__}function Yb(){for(var i;i=o0.shift();){var e=i.__H;if(i.__P&&e)try{e.__h.some(_l),e.__h.some(cu),e.__h=[]}catch(t){e.__h=[],rn.__e(t,i.__v)}}}rn.__b=function(i){Qt=null,rp&&rp(i)},rn.__=function(i,e){i&&e.__k&&e.__k.__m&&(i.__m=e.__k.__m),hp&&hp(i,e)},rn.__r=function(i){ap&&ap(i),ao=0;var e=(Qt=i.__c).__H;e&&(sh===Qt?(e.__h=[],Qt.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(_l),e.__h.some(cu),e.__h=[],ao=0)),sh=Qt},rn.diffed=function(i){op&&op(i);var e=i.__c;e&&e.__H&&(e.__H.__h.length&&(o0.push(e)!==1&&sp===rn.requestAnimationFrame||((sp=rn.requestAnimationFrame)||Kb)(Yb)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),sh=Qt=null},rn.__c=function(i,e){e.some(function(t){try{t.__h.some(_l),t.__h=t.__h.filter(function(n){return!n.__||cu(n)})}catch(n){e.some(function(s){s.__h&&(s.__h=[])}),e=[],rn.__e(n,t.__v)}}),lp&&lp(i,e)},rn.unmount=function(i){cp&&cp(i);var e,t=i.__c;t&&t.__H&&(t.__H.__.some(function(n){try{_l(n)}catch(s){e=s}}),t.__H=void 0,e&&rn.__e(e,t.__v))};var up=typeof requestAnimationFrame=="function";function Kb(i){var e,t=function(){clearTimeout(n),up&&cancelAnimationFrame(e),setTimeout(i)},n=setTimeout(t,35);up&&(e=requestAnimationFrame(t))}function _l(i){var e=Qt,t=i.__c;typeof t=="function"&&(i.__c=void 0,t()),Qt=e}function cu(i){var e=Qt;i.__c=i.__(),Qt=e}function l0(i,e){return!i||i.length!==e.length||e.some(function(t,n){return t!==i[n]})}function c0(i,e){return typeof e=="function"?e(i):e}var Zb=Symbol.for("preact-signals");function Yu(){if(tr>1)tr--;else{var i,e=!1;for(function(){var s=Fl;for(Fl=void 0;s!==void 0;){var r=s.S;if(r.v===s.v)for(var a=r.t;a!==void 0;a=a.x)a.i===s.i&&(a.i=r.i);s=s.o}}();Ka!==void 0;){var t=Ka;for(Ka=void 0,Ul++;t!==void 0;){var n=t.u;if(t.u=void 0,t.f&=-3,!(8&t.f)&&u0(t))try{t.c()}catch(s){e||(i=s,e=!0)}t=n}}if(Ul=0,tr--,e)throw i}}var Ya,Wt=void 0;function Zl(i){var e=Wt,t=Ya;Wt=void 0,Ya=void 0;try{return i()}finally{Wt=e,Ya=t}}var Ka=void 0,tr=0,Ul=0,dp=0,Fl=void 0,Nl=0;function h0(i){if(Wt!==void 0){var e=i.n;if(e===void 0||e.t!==Wt)return e={i:0,S:i,p:Wt.s,n:void 0,t:Wt,e:void 0,x:void 0,r:e},Wt.s!==void 0&&(Wt.s.n=e),Wt.s=e,i.n=e,32&Wt.f&&i.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=Wt.s,e.n=void 0,Wt.s.n=e,Wt.s=e),e}}function Rn(i,e){this.v=i,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=e?.watched,this.Z=e?.unwatched,this.name=e?.name}Rn.prototype.brand=Zb;Rn.prototype.h=function(){return!0};Rn.prototype.S=function(i){var e=this,t=this.t;t!==i&&i.e===void 0&&(i.x=t,this.t=i,t!==void 0?t.e=i:Zl(function(){var n;(n=e.W)==null||n.call(e)}))};Rn.prototype.U=function(i){var e=this;if(this.t!==void 0){var t=i.e,n=i.x;t!==void 0&&(t.x=n,i.e=void 0),n!==void 0&&(n.e=t,i.x=void 0),i===this.t&&(this.t=n,n===void 0&&Zl(function(){var s;(s=e.Z)==null||s.call(e)}))}};Rn.prototype.subscribe=function(i){var e=this;return Zu(function(){var t=e.value;Zl(function(){return i(t)})},{name:"sub"})};Rn.prototype.valueOf=function(){return this.value};Rn.prototype.toString=function(){return this.value+""};Rn.prototype.toJSON=function(){return this.value};Rn.prototype.peek=function(){var i=this;return Zl(function(){return i.value})};Object.defineProperty(Rn.prototype,"value",{get:function(){var i=h0(this);return i!==void 0&&(i.i=this.i),this.v},set:function(i){if(i!==this.v){if(Ul>100)throw new Error("Cycle detected");(function(t){tr!==0&&Ul===0&&t.l!==dp&&(t.l=dp,Fl={S:t,v:t.v,i:t.i,o:Fl})})(this),this.v=i,this.i++,Nl++,tr++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Yu()}}}});function je(i,e){return new Rn(i,e)}function u0(i){for(var e=i.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function d0(i){for(var e=i.s;e!==void 0;e=e.n){var t=e.S.n;if(t!==void 0&&(e.r=t),e.S.n=e,e.i=-1,e.n===void 0){i.s=e;break}}}function f0(i){for(var e=i.s,t=void 0;e!==void 0;){var n=e.p;e.i===-1?(e.S.U(e),n!==void 0&&(n.n=e.n),e.n!==void 0&&(e.n.p=n)):t=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=n}i.s=t}function dr(i,e){Rn.call(this,void 0,e),this.x=i,this.s=void 0,this.g=Nl-1,this.f=4}dr.prototype=new Rn;dr.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Nl))return!0;if(this.g=Nl,this.f|=1,this.i>0&&!u0(this))return this.f&=-2,!0;var i=Wt;try{d0(this),Wt=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return Wt=i,f0(this),this.f&=-2,!0};dr.prototype.S=function(i){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}Rn.prototype.S.call(this,i)};dr.prototype.U=function(i){if(this.t!==void 0&&(Rn.prototype.U.call(this,i),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};dr.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;i!==void 0;i=i.x)i.t.N()}};Object.defineProperty(dr.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=h0(this);if(this.h(),i!==void 0&&(i.i=this.i),16&this.f)throw this.v;return this.v}});function Jb(i,e){return new dr(i,e)}function p0(i){var e=i.j;if(i.j=void 0,typeof e=="function"){tr++;var t=Wt;Wt=void 0;try{e()}catch(n){throw i.f&=-2,i.f|=8,Ku(i),n}finally{Wt=t,Yu()}}}function Ku(i){for(var e=i.s;e!==void 0;e=e.n)e.S.U(e);i.x=void 0,i.s=void 0,p0(i)}function Qb(i){if(Wt!==this)throw new Error("Out-of-order effect");f0(this),Wt=i,this.f&=-2;try{8&this.f&&Ku(this)}finally{Yu()}}function pa(i,e){this.x=i,this.j=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=e?.name,Ya&&Ya.push(this)}pa.prototype.c=function(){var i=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.j=e)}finally{i()}};pa.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,p0(this),d0(this),tr++;var i=Wt;return Wt=this,Qb.bind(this,i)};pa.prototype.N=function(){2&this.f||(this.f|=2,this.u=Ka,Ka=this)};pa.prototype.d=function(){this.f|=8,1&this.f||Ku(this)};pa.prototype.dispose=function(){this.d()};function Zu(i,e){var t=new pa(i,e);try{t.c()}catch(s){throw t.d(),s}var n=t.d.bind(t);return n[Symbol.dispose]=n,n}var rl;function ma(i,e){Pt[i]=e.bind(null,Pt[i]||function(){})}function kl(i){if(rl){var e=rl;rl=void 0,e()}rl=i&&i.S()}function m0(i){var e=this,t=i.data,n=t1(t);n.value=t;var s=ju(function(){for(var r=e.__v;r=r.__;)if(r.__c){r.__c.__$f|=4;break}return e.__$u.c=function(){var a,o=e.__$u.S(),l=s.value;o(),Ym(l)||((a=e.base)==null?void 0:a.nodeType)!==3?(e.__$f|=1,e.setState({})):e.base.data=l},Jb(function(){var a=n.value.value;return a===0?0:a===!0?"":a||""})},[]);return s.value}m0.displayName="_st";Object.defineProperties(Rn.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:m0},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});ma("__b",function(i,e){if(typeof e.type=="string"){var t,n=e.props;for(var s in n)if(s!=="children"){var r=n[s];r instanceof Rn&&(t||(e.__np=t={}),t[s]=r,n[s]=r.peek())}}i(e)});ma("__r",function(i,e){i(e),kl();var t,n=e.__c;n&&(n.__$f&=-2,(t=n.__$u)===void 0&&(n.__$u=t=function(s){var r;return Zu(function(){r=this}),r.c=function(){n.__$f|=1,n.setState({})},r}())),kl(t)});ma("__e",function(i,e,t,n){kl(),i(e,t,n)});ma("diffed",function(i,e){kl();var t;if(typeof e.type=="string"&&(t=e.__e)){var n=e.__np,s=e.props;if(n){var r=t.U;if(r)for(var a in r){var o=r[a];o!==void 0&&!(a in n)&&(o.d(),r[a]=void 0)}else t.U=r={};for(var l in n){var c=r[l],u=n[l];c===void 0?(c=e1(t,l,u,s),r[l]=c):c.o(u,s)}}}i(e)});function e1(i,e,t,n){var s=e in i&&i.ownerSVGElement===void 0,r=je(t);return{o:function(a,o){r.value=a,n=o},d:Zu(function(){var a=r.value.value;n[e]!==a&&(n[e]=a,s?i[e]=a:a?i.setAttribute(e,a):i.removeAttribute(e))})}}ma("unmount",function(i,e){if(typeof e.type=="string"){var t=e.__e;if(t){var n=t.U;if(n){t.U=void 0;for(var s in n){var r=n[s];r&&r.d()}}}}else{var a=e.__c;if(a){var o=a.__$u;o&&(a.__$u=void 0,o.d())}}i(e)});ma("__h",function(i,e,t,n){(n<3||n===9)&&(e.__$f|=2),i(e,t,n)});ja.prototype.shouldComponentUpdate=function(i,e){if(this.__R)return!0;var t=this.__$u,n=t&&t.s!==void 0;for(var s in e)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var r in i)if(r!=="__source"&&i[r]!==this.props[r])return!0;for(var a in this.props)if(!(a in i))return!0;return!1};function t1(i){return ju(function(){return je(i)},[])}const fp=(i,e)=>{try{const t=localStorage.getItem(i);return t?JSON.parse(t):e}catch{return e}},Jl=(i,e)=>{try{localStorage.setItem(i,JSON.stringify(e))}catch{}},X={lang:je("zh"),scenes:je([]),sceneId:je(""),events:je([]),eventId:je(""),scene:je(null),event:je(null),params:je(null),leftTab:je(fp("hkfl.ui.left",window.innerWidth>=1440?"scenario":null)),rightTab:je(fp("hkfl.ui.right","overview")),panelsOff:je(!1),playing:je(!1),speed:je(900),time:je({label:"--",frac:0}),cond:je(null),status:je(null),loading:je({frac:.02,text:""}),timeline:je(null),compare:je(!1),scenarios:je([]),scenarioId:je(""),abOpen:je(!1),flowMode:je("particles"),active:je({}),waterMode:je("now"),exag:je(1),texMode:je("imagery"),showMax:je(!1),showFac:je(!0),showLandmarks:je(!0),showMeasureLabels:je(!0),shadows:je(!0),probeOn:je(!0),metrics:je(null),baseMetrics:je(null),trend:je(null),hotspots:je([]),validation:je({points:[],m:null}),facilities:je({m:null,base:null}),charts:je(null),chartCursor:je(0),pins:je({list:[],t:[],sel:null,f:null}),probe:je(null),measures:je([]),selMeasure:je(null),dirty:je(!1),devSave:je(!1),draft:je({n:0,len:0}),tool:je(null),newRole:je("whatif"),snap:je(!0),measureParams:je({wall:{height:1.5,rate:0,capacity:0,factor:1,radius:0},sandbag:{height:.6,rate:0,capacity:0,factor:1,radius:0},pump:{height:0,rate:2,capacity:0,factor:1,radius:30},tank:{height:0,rate:0,capacity:3e4,factor:1,radius:80},drain:{height:0,rate:0,capacity:0,factor:2,radius:150}})},n1=[60,300,900,1800,3600];var i1=0;function g(i,e,t,n,s,r){e||(e={});var a,o,l=e;if("ref"in l)for(o in l={},e)o=="ref"?a=e[o]:l[o]=e[o];var c={type:i,props:l,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--i1,__i:-1,__u:0,__source:s,__self:r};if(typeof i=="function"&&(a=i.defaultProps))for(o in a)l[o]===void 0&&(l[o]=a[o]);return Pt.vnode&&Pt.vnode(c),c}let Oe;function s1(i){Oe=i}const hu={play:'<path d="M7 4.5v15l12-7.5z" fill="currentColor" stroke="none"/>',pause:'<rect x="6" y="4.5" width="4" height="15" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="4.5" width="4" height="15" rx="1" fill="currentColor" stroke="none"/>',reset:'<path d="M3 12a9 9 0 1 0 2.6-6.4"/><path d="M3 4v5h5"/>',compare:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16"/>',orbit:'<path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 4v5h-5"/>',tour:'<path d="M4 7h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/><path d="m17 10 5-2v8l-5-2"/>',map:'<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',panels:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 4v16"/>',flow:'<path d="M3 8h9a3 3 0 1 0-3-3"/><path d="M3 12h13a3 3 0 1 1-3 3"/><path d="M3 16h6"/>',arrows:'<path d="M3 12h16"/><path d="m14 6 6 6-6 6"/>',peak:'<path d="m3 20 6-11 4 6 2-3 6 8z"/><path d="M13 4v3M10.5 5.5l1.5 1.5M15.5 5.5 14 7"/>',flyto:'<path d="m3 11 18-8-8 18-2-8z"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="m5 12 4 4L19 7"/>',wall:'<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 10h18M3 14h18M9 5v5M15 10v4M9 14v5"/>',sandbag:'<path d="M4 18h16"/><path d="M6 18a3 3 0 0 1 6 0M12 18a3 3 0 0 1 6 0M9 13a3 3 0 0 1 6 0"/>',pump:'<circle cx="12" cy="12" r="8"/><path d="M12 4v8l5.5 3"/>',tank:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',drain:'<path d="M7 3v6a5 5 0 0 0 10 0V3"/><path d="M12 14v7M8 21h8"/>',layers:'<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',wave:'<path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0 2 1.5 2 1.5"/><path d="M2 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',save:'<path d="M5 3h11l3 3v15H5z"/><path d="M8 3v6h8V3M8 21v-7h8v7"/>',download:'<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 19h16"/>',upload:'<path d="M12 15V3"/><path d="m7 8 5-5 5 5"/><path d="M4 19h16"/>',undo:'<path d="M4 10h11a5 5 0 0 1 0 10h-3"/><path d="m8 6-4 4 4 4"/>',lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',magnet:'<path d="M6 3v8a6 6 0 0 0 12 0V3"/><path d="M6 3h4v8H6M14 3h4v8h-4"/>',chev:'<path d="m6 9 6 6 6-6"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',flag:'<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',shield:'<path d="M12 21s7-3 7-9V5l-7-2-7 2v7c0 6 7 9 7 9z"/><path d="m9 12 2 2 4-4"/>',bird:'<path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"/><path d="m12 8 4 4-4 4-4-4z"/>',street:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',target:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',pin:'<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',up:'<path d="M12 19V5"/><path d="m6 11 6-6 6 6"/>',down:'<path d="M12 5v14"/><path d="m6 13 6 6 6-6"/>',inbox:'<path d="M3 13h5l1.5 3h5L16 13h5"/><path d="M5.5 5h13L21 13v6H3v-6z"/>',edit:'<path d="M4 20h4l10-10-4-4L4 16z"/><path d="m13 7 4 4"/>',hospital:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M12 8v6M9 11h6"/>',mtr:'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M9 21l1.5-3M15 21l-1.5-3"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/>',ferry:'<path d="M3 17c2 2 4 2 6 0s4 2 6 0 4 2 6 0"/><path d="M5 14 4 9h16l-1 5"/><path d="M9 9V5h6v4"/>',bus:'<rect x="4" y="4" width="16" height="13" rx="2"/><path d="M4 11h16M8 20v-3M16 20v-3"/><circle cx="8" cy="14" r="1"/><circle cx="16" cy="14" r="1"/>',carpark:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 16V8h3.5a2.5 2.5 0 0 1 0 5H9"/>',power:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',school:'<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 9v6"/>',elderly:'<circle cx="12" cy="7" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/>',mall:'<path d="M6 7h12l1 14H5z"/><path d="M9 7a3 3 0 0 1 6 0"/>',fire:'<path d="M12 22c4 0 7-3 7-7 0-3-2-5-3-7-1 2-2 3-3 3 0-3-1-6-4-8 0 4-4 6-4 12a7 7 0 0 0 7 7z"/>',police:'<path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10z"/>',community:'<path d="M3 21h18M5 21V10M19 21V10M9 21v-6h6v6M2 10l10-6 10 6z"/>',water:'<path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z"/>'},pp=hu;function g0(i,e=16,t=""){const n=hu[i]??hu.info;return`<svg class="ic ${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${n}</svg>`}const mp=[.1,.3,.5,1,2],r1=[.05,.2,.4,.75,1.5,2.6],Ju=()=>or()==="zh"?["浅","踝","膝","腰","胸","一层"]:["shallow","ankle","knee","waist","chest","floor"],v0=i=>{let e=0;for(;e<mp.length&&i>=mp[e];)e++;return e},po=au,Ol=i=>{const e=/^(.*?)\s*[（(]([^（）()]*)[）)]\s*$/.exec(i);return e&&e[1]?[e[1],e[2]]:[i,""]},a1=i=>{const e=i.search(/[：:]/);return e>0?[i.slice(0,e),i.slice(e+1).trim()]:[i,""]},_0=i=>/black/i.test(i)?"black":/red|no\. ?(9|10)\b|signal no\. ?(9|10)|hurricane/i.test(i)?"red":/amber|no\. ?[678]\b|signal no\. ?[678]/i.test(i)?"amber":"",Za=i=>`#${i.toString(16).padStart(6,"0")}`,ea=Object.fromEntries(["hospital","mtr","ferry","bus","carpark","power","school","elderly","mall","fire","police","community","water"].map(i=>[i,g0(i,14)]));ea.underground=g0("carpark",14);function qe({name:i,size:e=16,cls:t=""}){return g("svg",{class:`ic ${t}`,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:pp[i]??pp.info}})}function tn({title:i,hint:e,n:t,children:n,id:s}){return g("section",{class:"blk",id:s,children:[g("div",{class:"blk-h",children:[g("span",{class:"micro",children:i}),g("span",{class:"hint",children:e??""}),t!==void 0&&g("span",{class:"n",children:t})]}),n]})}function x0({text:i}){const[e,t]=Ol(i);return g(dt,{children:[e,t&&g("small",{children:t})]})}function bs({id:i,label:e,checked:t,onChange:n}){return g("label",{class:"sw",for:i,children:[g("span",{children:g(x0,{text:e})}),g("input",{type:"checkbox",class:"switch",id:i,checked:t,onChange:s=>n(s.currentTarget.checked)})]})}function y0({id:i,label:e,value:t,min:n,max:s,step:r,fmt:a,onInput:o,onCommit:l,changed:c}){const u=(t-n)/(s-n)*100;return g("div",{class:"fr",children:[g("div",{class:"fr-top",children:[g("label",{for:i,children:g(x0,{text:e})}),g("span",{class:`val ${c?"changed":""}`,id:i.replace("sl_","sv_"),children:a(t)})]}),g("input",{type:"range",class:"range",id:i,min:n,max:s,step:r,value:t,style:{"--p":`${u}%`},onInput:d=>o(+d.currentTarget.value),onChange:d=>l?.(+d.currentTarget.value)})]})}function Yr({items:i,value:e,onPick:t,cls:n="",id:s}){return g("div",{class:`seg ${n}`,id:s,role:"group",children:i.map(([r,a])=>g("button",{class:r===e?"on":"","aria-pressed":r===e,"data-v":String(r),onClick:()=>t(r),children:a},String(r)))})}function M0({html:i,cls:e=""}){return g("span",{class:e,style:{display:"contents"},dangerouslySetInnerHTML:{__html:i}})}let Fa=null;const uu=()=>(Fa||(Fa=document.createElement("div"),Fa.className="tip",document.body.appendChild(Fa)),Fa);function S0(){const[i,e]=fo(!1),t=zi(null);return er(()=>{if(!i)return;const n=r=>{t.current&&!t.current.contains(r.target)&&e(!1)},s=r=>{r.key==="Escape"&&e(!1)};return document.addEventListener("pointerdown",n),document.addEventListener("keydown",s),()=>{document.removeEventListener("pointerdown",n),document.removeEventListener("keydown",s)}},[i]),{open:i,setOpen:e,ref:t}}const o1=i=>i?`${i.start.replace("T"," ")} → ${i.end.slice(5).replace("T"," ")}`:"";function l1(){const{open:i,setOpen:e,ref:t}=S0(),n=X.scenes.value,s=n.find(r=>r.id===X.sceneId.value);return g("div",{class:"pk-wrap",ref:t,children:[g("button",{class:`picker ${i?"open":""}`,id:"scenePicker","aria-haspopup":"listbox","aria-expanded":i,onClick:()=>e(!i),children:[g("span",{class:"pk-txt",children:[g("span",{class:"pk-lab",children:k("sceneLbl")}),g("span",{class:"pk-val",children:s?Q(s.name_zh,s.name_en):"—"})]}),g(qe,{name:"chev",size:14,cls:"chev"})]}),i&&g("div",{class:"popover",role:"listbox",style:{width:"440px"},children:n.map(r=>g("button",{class:`opt ${r.id===X.sceneId.value?"on":""}`,role:"option","aria-selected":r.id===X.sceneId.value,onClick:()=>{e(!1),r.id!==X.sceneId.value&&Oe.onSceneChange(r.id)},children:[g("span",{class:"thumb",style:{backgroundImage:`url(scenes/${r.id}/preview.jpg)`}}),g("span",{children:[g("div",{class:"o-t",children:Q(r.name_zh,r.name_en)}),g("div",{class:"o-d",children:Q(r.blurb_zh,r.blurb_en)}),g("div",{class:"o-m",children:[r.cols,"×",r.rows," · ",r.res," m ",Q("网格","grid")]})]})]},r.id))})]})}function c1(){const{open:i,setOpen:e,ref:t}=S0(),n=X.events.value,s=n.find(r=>r.id===X.eventId.value);return g("div",{class:"pk-wrap",ref:t,children:[g("button",{class:`picker ${i?"open":""}`,id:"eventPicker","aria-haspopup":"listbox","aria-expanded":i,onClick:()=>e(!i),children:[g("span",{class:"pk-txt",children:[g("span",{class:"pk-lab",children:[k("eventLbl"),s&&g("span",{class:`kind ${s.kind}`,children:k(s.kind)})]}),g("span",{class:"pk-val",children:s?Q(s.name_zh,s.name_en):"—"})]}),g(qe,{name:"chev",size:14,cls:"chev"})]}),i&&g("div",{class:"popover",role:"listbox",style:{width:"400px"},children:n.map(r=>g("button",{class:`opt ${r.id===X.eventId.value?"on":""}`,role:"option","aria-selected":r.id===X.eventId.value,onClick:()=>{e(!1),r.id!==X.eventId.value&&Oe.onEventChange(r.id)},children:[g("span",{class:`k-dot ${r.kind}`,children:g(qe,{name:r.kind==="rainstorm"?"water":r.kind==="fictional"?"flag":"wave",size:17})}),g("span",{children:[g("div",{class:"o-t",children:Q(r.name_zh,r.name_en)}),g("div",{class:"o-m",children:[k(r.kind)," · ",o1(r.window)]})]})]},r.id))})]})}function h1(){const i=X.abOpen.value,e=zi(null),t=u=>{X.abOpen.value=u};er(()=>{if(!i)return;const u=h=>{e.current&&!e.current.contains(h.target)&&!h.target.closest?.("[data-ab-open]")&&t(!1)},d=h=>{h.key==="Escape"&&t(!1)};return document.addEventListener("pointerdown",u),document.addEventListener("keydown",d),()=>{document.removeEventListener("pointerdown",u),document.removeEventListener("keydown",d)}},[i]);const n=X.compare.value,s=X.scenarios.value,r=X.scenarioId.value,a=s.filter(u=>!u.generic),o=s.filter(u=>u.generic),l=()=>{n?t(!i):(Oe.onCompare(),t(!0))},c=u=>g("button",{class:`opt ab ${u.id===r?"on":""}`,role:"option","aria-selected":u.id===r,"data-scn":u.id,onClick:()=>{t(!1),(u.id!==r||!n)&&Oe.onScenario(u.id)},children:[g("span",{children:[g("div",{class:"o-t",children:Q(u.zh,u.en)}),g("div",{class:"o-d",children:Q(u.desc_zh,u.desc_en)}),g("div",{class:"ab-sides",children:[g("span",{class:"ab-k",children:"A"}),g("span",{children:Q(u.A.zh,u.A.en)}),g("span",{class:"ab-k b",children:"B"}),g("span",{children:Q(u.B.zh,u.B.en)})]})]}),u.id===r&&n?g(qe,{name:"check",size:15,cls:"o-check"}):g("span",{})]},u.id);return g("div",{class:"pk-wrap",ref:e,children:[g("button",{id:"btnCompare",class:`btn lbl-hide ${n?"on":""}`,"aria-haspopup":"listbox","aria-expanded":i,"data-tip":i?void 0:Q("情景对比：左右分屏比较两个情景（拖动把手）","Scenario compare: two scenarios side by side (drag the handle)"),"data-tip-pos":"bottom",onClick:l,children:[g(qe,{name:"compare"}),g("span",{children:Q("A/B 对比","A/B compare")}),g(qe,{name:"chev",size:13,cls:"chev"})]}),i&&g("div",{class:"popover ab-pop",role:"listbox","aria-label":Q("情景对比","Scenario compare"),children:[g("div",{class:"ab-pop-h",children:[g("span",{class:"micro",children:Q("情景对比 · 左 A / 右 B","Scenario compare · left A / right B")}),g("span",{class:"grow"}),n&&g("button",{class:"btn sm ghost",id:"btnCompareOff",onClick:()=>{t(!1),Oe.onCompare()},children:[g(qe,{name:"x",size:13}),Q("关闭对比","Exit compare")]})]}),a.length>0&&g("div",{class:"ab-grp",children:Q("本场景 · 有记录的情景","This scene · documented")}),a.map(c),g("div",{class:"ab-grp",children:Q("通用","Generic")}),o.map(c),g("p",{class:"caveat ab-foot",children:[g(qe,{name:"info",size:12}),g("span",{children:Q("两边从头同时重算；气候情景是假设，不是预报。","Both sides re-run from the start; climate pairs are what-ifs, not forecasts.")})]})]})]})}function u1(){const i=X.active.value,e=X.flowMode.value,t=e==="particles"?"flowParticles":e==="arrows"?"flowArrows":"flowNone";return g("header",{class:"topbar float",children:[g("div",{class:"brand",children:[g("span",{class:"mark",children:g("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","aria-hidden":"true",children:[g("path",{d:"M3 10c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"}),g("path",{d:"M3 16c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"})]})}),g("div",{children:[g("div",{class:"nm",children:"HK Flood Lab"}),g("div",{class:"sub",children:Q("香港洪涝实验室 · 数字孪生","Flood digital twin · HK")})]})]}),g("span",{class:"vsep"}),g(l1,{}),g("span",{class:"crumb-sep",children:"/"}),g(c1,{}),g("span",{class:"grow"}),g("div",{class:"tb-group",children:[g(Yr,{id:"waterSeg",cls:"dark",items:[["now",k("waterNow")],["max",k("waterMax")]],value:X.waterMode.value,onPick:n=>Oe.onWaterMode(n)}),g("button",{id:"btnPeak",class:"btn lbl-hide","data-tip":Q("跳到峰值时刻并飞到最严重水浸点","Jump to the peak and fly to the worst spot"),"data-tip-pos":"bottom",onClick:()=>Oe.onPeak(),children:[g(qe,{name:"peak"}),g("span",{children:k("peak")})]})]}),g("span",{class:"vsep"}),g("div",{class:"tb-group",children:[g("button",{id:"btnPin",class:`btn lbl-hide ${i.btnPin?"on":""}`,"data-tip":k("pinHint"),"data-tip-pos":"bottom",onClick:()=>Oe.onPinMode(),children:[g(qe,{name:"pin"}),g("span",{children:k("pin")})]}),g("button",{id:"btnFlow",class:`btn lbl-hide ${e!=="none"?"on":""}`,"data-tip":`${k(t)} · ${Q("点击切换","click to cycle")}`,"data-tip-pos":"bottom",onClick:()=>Oe.onFlowMode(),children:[g(qe,{name:e==="arrows"?"arrows":"flow"}),g("span",{children:k(t)})]}),g(h1,{})]}),g("span",{class:"vsep"}),g("div",{class:"tb-group",children:[g("button",{id:"btnPanels",class:`btn icon ${X.panelsOff.value,""}`,"data-tip":Q("显示/隐藏面板","Toggle panels"),"data-tip-pos":"bottom",onClick:()=>Oe.onPanels(),children:g(qe,{name:"panels"})}),g("button",{id:"btnLang",class:"btn","data-tip":or()==="zh"?"English":"中文","data-tip-pos":"bottom",onClick:()=>Oe.onLang(),children:or()==="zh"?"EN":"中文"})]})]})}const w0={wall:"wall",sandbag:"sandbag",pump:"pump",tank:"tank",drain:"drain"},d1=i=>i.name?or()==="en"&&i.name_en?i.name_en:i.name:i.kind==="wall"||i.kind==="sandbag"?`${k(i.kind)} ${i.height} m`:i.kind==="pump"?`${k("pump")} ${i.rate} m³/s`:i.kind==="tank"?`${k("tank")} ${i.capacity} m³`:(i.factor??2)<1?`${k("drainBlocked")} ×${i.factor}`:`${k("drainUp")} ×${i.factor}`;function f1(){const i=X.tool.value,e=X.measures.value,t=X.selMeasure.value,n=[["wall",k("wall")],["sandbag",k("sandbag")],["pump",k("pump")],["tank",k("tank")],["drain",k("drainUp")]],s=[["whatif",k("role_whatif")],["record",k("role_record")],["temporary",k("role_temporary")]],r=e.filter(a=>(a.m.role??"whatif")==="whatif"&&!(a.m.scenario_only&&!a.eff)).reduce((a,o)=>a+o.cost,0);return g(dt,{children:[g("div",{class:"p-head",children:[g("div",{class:"grow",children:[g("div",{class:"p-t",children:k("measures")}),g("div",{class:"p-s",children:Q("画在地图上；情景措施不进入 A/B 基线","Draw on the map; what-if measures are left out of the A/B baseline")})]}),g("button",{class:"btn sm icon ghost",onClick:()=>{X.leftTab.value=null},children:g(qe,{name:"x",size:14})})]}),g("div",{class:"p-body",children:[g(tn,{title:Q("绘制","Draw"),children:[g("div",{class:"tools",children:n.map(([a,o])=>g("button",{"data-tool":a,class:`tool ${i===a?"on":""}`,"aria-pressed":i===a,title:o,onClick:()=>Oe.onMeasureTool(i===a?null:a),children:[g(qe,{name:w0[a],size:18}),g("span",{children:o.split(" / ")[0]})]},a))}),g("div",{class:"row",children:[g("label",{for:"selRole",children:k("newRole")}),g("select",{id:"selRole",class:"select",style:{width:"auto",flex:1},value:X.newRole.value,onChange:a=>{X.newRole.value=a.currentTarget.value},children:s.map(([a,o])=>g("option",{value:a,children:o},a))})]}),i&&g(p1,{kind:i}),i&&g(m1,{kind:i}),!i&&g("div",{class:"row",style:{justifyContent:"flex-end"},children:[g("button",{id:"btnSnap",class:`btn sm ${X.snap.value?"on":""}`,title:k("snapShore"),onClick:()=>{X.snap.value=!X.snap.value,Oe.onSnapToggle(X.snap.value)},children:[g(qe,{name:"magnet",size:13}),Q("吸附岸线","Snap")]}),g("button",{id:"btnClearM",class:"btn sm",title:k("clearNote"),onClick:()=>Oe.onClearMeasures(),children:k("clear")})]})]}),g(tn,{title:Q("措施列表","Measures"),n:e.length,children:[e.length?g("div",{class:"mlist",id:"measureList",children:e.map(a=>g(v1,{it:a,sel:a.m.id===t},a.m.id))}):g("div",{class:"empty",children:[g(qe,{name:"inbox",size:16}),g("span",{children:k("noMeasures")})]}),r>0&&g("div",{class:"total",children:[g("span",{children:k("costNote")}),g("b",{children:["HK$",(r/1e6).toFixed(1),"M"]})]})]}),g(tn,{title:Q("文件","File"),children:g(x1,{})})]})]})}function p1({kind:i}){const e=X.measureParams.value[i],t=(s,r)=>{X.measureParams.value={...X.measureParams.value,[i]:{...e,[s]:r}},Oe.onMeasureParam(i,s,r)},n=(s,r,a,o,l,c)=>g(y0,{id:`mp_${s}`,label:r,value:e[s],min:a,max:o,step:l,fmt:u=>`${u} ${c}`,onInput:u=>t(s,u)});return g("div",{style:{marginTop:"6px"},children:[(i==="wall"||i==="sandbag")&&n("height",k("wallHeight"),.3,4,.1,"m"),i==="pump"&&g(dt,{children:[n("rate",k("pumpRate"),.2,10,.2,"m³/s"),n("radius",Q("集水半径","Catch radius"),10,100,5,"m")]}),i==="tank"&&g(dt,{children:[n("capacity",k("tankCap"),2e3,15e4,1e3,"m³"),n("radius",Q("半径（单点放置时）","Radius (point mode)"),30,300,10,"m")]}),i==="drain"&&g(dt,{children:[n("factor",k("drainFactor"),0,6,.5,"×"),n("radius",Q("半径（单点放置时）","Radius (point mode)"),50,500,10,"m")]})]})}function m1({kind:i}){const e=X.draft.value,t=i==="pump"?k("hintPoint"):k("hintDraw")+(i==="tank"||i==="drain"?Q(" 单击一次即为圆形区域。"," A single click places a circular area."):""),n=e.n?` ${Q(`已放 ${e.n} 个点`,`${e.n} vertices`)}${e.len?` · ${e.len.toFixed(0)} m`:""}`:"",s=X.snap.value&&(i==="wall"||i==="sandbag")?` ${k("snapOn")}`:"";return g(dt,{children:[g("div",{class:"draw-hint",id:"measureHint",children:[g(qe,{name:"info",size:13}),g("span",{children:t+n+s})]}),g("div",{class:"drawbar",children:[g("button",{id:"btnFinish",class:"btn sm primary",onClick:()=>Oe.onFinishDraft(),children:[g(qe,{name:"check",size:13}),k("finish")]}),g("button",{id:"btnUndoV",class:"btn sm icon",title:`${Q("撤销上一个点","Undo last vertex")} (Backspace)`,onClick:()=>Oe.onUndoVertex(),children:g(qe,{name:"undo",size:13})}),g("button",{id:"btnCancelDraft",class:"btn sm",onClick:()=>Oe.onCancelDraft(),children:k("cancel")}),g("span",{class:"grow"}),g("button",{id:"btnSnap",class:"btn sm icon",style:{background:X.snap.value?"var(--sig)":void 0},title:k("snapShore"),onClick:()=>{X.snap.value=!X.snap.value,Oe.onSnapToggle(X.snap.value)},children:g(qe,{name:"magnet",size:13})})]})]})}function g1(i){const e=i.m.role??"whatif";if(e==="whatif")return i.m.scenario_only&&!i.eff?g("span",{class:"mst",children:Q("仅 A/B 情景","A/B pair only")}):g("span",{class:"mst cost",children:["HK$",(i.cost/1e6).toFixed(1),"M"]});if(e==="record")return i.exists?g("span",{class:"mst on",children:[k("def_built"),i.m.in_dtm?"":` · ${k("def_raised")}`]}):g("span",{class:"mst",children:i.m.in_dtm?k("def_removed"):k("def_notyet")});const t=i.m.from_h!==void 0||i.m.to_h!==void 0?` ${i.m.from_h??""}h→${i.m.to_h??""}h`:"";return g("span",{class:`mst ${i.eff>0?"on":""}`,children:[i.eff>0?k("tmp_on"):k("tmp_off"),t]})}function v1({it:i,sel:e}){const t=i.m,n=t.role??"whatif",s=i.eff===0&&!(n==="record"&&i.exists),r=()=>Oe.onSelectMeasure(e?null:t.id);return g(dt,{children:[g("div",{class:`mrow ${e?"sel":""} ${s?"ghost":""}`,"data-sel":t.id,tabIndex:0,role:"button","aria-expanded":e,onClick:r,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&a.target===a.currentTarget&&(a.preventDefault(),a.stopPropagation(),r())},children:[g("span",{class:`m-ic ${t.kind}`,children:g(qe,{name:w0[t.kind],size:15})}),g("span",{class:"m-main",children:[g("span",{class:"m-name",children:[g("span",{children:d1(t)}),t.locked&&g("span",{title:k("fromPipeline"),children:g(qe,{name:"lock",size:11})})]}),g("span",{class:"m-sub",children:[g("span",{class:`rchip ${n}`,children:k("role_"+n)}),g1(i)]})]}),g("button",{class:"btn sm icon ghost m-del","data-rm":t.id,"aria-label":k("delete"),title:k("delete"),onClick:a=>{a.stopPropagation(),Oe.onRemoveMeasure(t.id)},children:g(qe,{name:"x",size:13})})]}),e&&g(_1,{m:t},JSON.stringify(t))]})}function _1({m:i}){const e=i.role??"whatif",t=o=>Oe.onUpdateMeasure(i.id,o),n=o=>l=>{const c=l.currentTarget.value.trim();t({[o]:c===""?void 0:c})},s=o=>l=>{const c=l.currentTarget.value.trim();t({[o]:c===""?void 0:+c})},r=(o,l,c,u,d)=>g("label",{children:[l,g("span",{class:"inl",children:[g("input",{class:"input",type:"number","data-f":o,step:c,min:d,defaultValue:String(i[o]??""),onChange:s(o)})," ",u]})]}),a=(o,l,c="")=>g("label",{children:[l,g("input",{class:"input",type:"text","data-f":o,defaultValue:String(i[o]??""),placeholder:c,onChange:n(o)})]});return g("div",{class:"mform","data-form":i.id,onClick:o=>o.stopPropagation(),children:[a("name",k("f_name"),k("f_name_ph")),(i.kind==="wall"||i.kind==="sandbag")&&r("height",k("wallHeight"),.1,"m",0),i.kind==="pump"&&g(dt,{children:[r("rate",k("pumpRate"),.1,"m³/s",0),!i.cells?.length&&r("radius",Q("集水半径","Catch radius"),5,"m",5)]}),i.kind==="tank"&&g(dt,{children:[r("capacity",k("tankCap"),500,"m³",0),!(i.pts.length>=3||i.cells?.length)&&r("radius",Q("半径","Radius"),10,"m",10)]}),i.kind==="drain"&&g(dt,{children:[r("factor",k("drainFactor"),.5,"×",0),!(i.pts.length>=3||i.cells?.length)&&r("radius",Q("半径","Radius"),10,"m",10)]}),g("label",{children:[k("f_role"),g("select",{class:"select","data-f":"role",value:e,onChange:o=>{const l=o.currentTarget.value,c={role:l};l!=="whatif"&&!i.key&&(c.key=`${i.kind}_${Date.now().toString(36)}`),t(c)},children:["whatif","record","temporary"].map(o=>g("option",{value:o,children:k("role_"+o)},o))})]}),e==="record"&&g(dt,{children:[g("label",{children:[k("f_built"),g("input",{class:"input",type:"month","data-f":"built",defaultValue:i.built??"",onChange:n("built")})]}),g("label",{children:[k("f_removed"),g("input",{class:"input",type:"month","data-f":"removed",defaultValue:i.removed??"",onChange:n("removed")})]}),g("label",{class:"chk",children:[g("input",{type:"checkbox","data-f":"in_dtm",checked:!!i.in_dtm,onChange:o=>t({in_dtm:o.currentTarget.checked})})," ",k("f_in_dtm")]})]}),e==="temporary"&&g(dt,{children:[g("div",{class:"evs",children:[k("f_events"),X.events.value.map(o=>g("label",{class:"chk",children:[g("input",{type:"checkbox","data-ev":o.id,checked:!i.events?.length||i.events.includes(o.id),onChange:l=>{const c=l.currentTarget.closest(".mform"),u=Array.from(c.querySelectorAll("[data-ev]")),d=u.filter(h=>h.checked).map(h=>h.dataset.ev);t({events:d.length===u.length?[]:d})}})," ",Q(o.name_zh,o.name_en)]},o.id))]}),g("label",{children:[k("f_window"),g("span",{class:"inl",children:[g("input",{class:"input",type:"number","data-f":"from_h",step:.5,defaultValue:i.from_h!==void 0?String(i.from_h):"",placeholder:"−∞",onChange:s("from_h")})," → ",g("input",{class:"input",type:"number","data-f":"to_h",step:.5,defaultValue:i.to_h!==void 0?String(i.to_h):"",placeholder:"+∞",onChange:s("to_h")})," h"]})]})]}),a("src",k("f_src"),k("f_src_ph")),g("label",{children:[k("f_note"),g("textarea",{class:"input","data-f":"note",rows:2,defaultValue:i.note??"",onChange:n("note")})]}),g("div",{class:"foot",children:[g("button",{class:"btn sm","data-fly":i.id,onClick:()=>{const o=i.pts[0];o&&Oe.onFlyTo(o.x,o.y)},children:[g(qe,{name:"flyto",size:12}),k("flyTo")]}),g("span",{class:"mono",children:[i.cells?.length?k("geomCells"):i.pts.length>1?Q(`${i.pts.length} 个顶点`,`${i.pts.length} vertices`):""," · ",k("f_key")," ",i.key??"—"]})]})]})}function x1(){const i=zi(null),e=X.dirty.value,t=X.devSave.value,n=X.scene.value;return g(dt,{children:[g("div",{class:"files",id:"measureFiles",children:[g("button",{id:"btnSaveM",class:`btn sm ${e?"primary":""}`,onClick:()=>Oe.onSaveMeasures(),children:[g(qe,{name:"save",size:13}),k(t?"save":"download")]}),g("button",{id:"btnExportM",class:"btn sm icon","aria-label":k("exportNote"),title:k("exportNote"),onClick:()=>Oe.onExportMeasures(),children:g(qe,{name:"download",size:13})}),g("button",{id:"btnImportM",class:"btn sm icon","aria-label":k("importNote"),title:k("importNote"),onClick:()=>i.current?.click(),children:g(qe,{name:"upload",size:13})}),g("span",{class:"grow"}),g("button",{id:"btnRevertM",class:"btn sm ghost",disabled:!e,onClick:()=>Oe.onRevertMeasures(),children:k("revert")}),g("input",{ref:i,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:s=>{const r=s.currentTarget,a=r.files?.[0];a&&Oe.onImportMeasures(a),r.value=""}})]}),g("p",{class:"caveat",children:[t?Q(`保存到 web/public/scenes/${n?.id}/measures.json（开发服务器写文件，提交即生效）`,`Saves web/public/scenes/${n?.id}/measures.json (the dev server writes the file; commit it)`):Q("生产版只能下载 JSON，放到 web/public/scenes/<场景>/measures.json","Production build downloads the JSON; put it at web/public/scenes/<scene>/measures.json"),e?Q("。有未保存的改动（已暂存在浏览器里）",". Unsaved edits (kept in this browser)"):""]})]})}const y1=[["scenario","book","scenario"],["params","sliders","params"],["layers","layers","layers"],["measures","wall","measures"]],M1=i=>{X.leftTab.value=X.leftTab.value===i?null:i,Jl("hkfl.ui.left",X.leftTab.value)};function S1(){const i=X.leftTab.value,e=X.measures.value.length,t=n=>n==="scenario"?k("scenario"):n==="params"?Q("参数","Params"):n==="layers"?k("layers"):Q("措施","Measures");return g("div",{class:"dock",id:"left",children:[g("nav",{class:"rail float","aria-label":Q("工作区","Workspaces"),children:y1.map(([n,s])=>g("button",{"data-ltab":n,class:i===n?"on":"","aria-pressed":i===n,"data-tip":i===n?Q("收起","Collapse"):t(n),"data-tip-pos":"right",onClick:()=>M1(n),children:[g(qe,{name:s==="book"?"info":s,size:18}),g("span",{children:t(n)}),n==="measures"&&e>0&&g("span",{class:"badge",children:e})]},n))}),i&&g("div",{class:"lpanel float",children:[i==="scenario"&&g(w1,{}),i==="params"&&g(b1,{}),i==="layers"&&g(T1,{}),i==="measures"&&g(f1,{})]})]})}function oo({title:i,sub:e}){return g("div",{class:"p-head",children:[g("div",{class:"grow",children:[g("div",{class:"p-t",children:i}),e&&g("div",{class:"p-s",children:e})]}),g("button",{class:"btn sm icon ghost","data-tip":Q("收起","Collapse"),"data-tip-pos":"left",onClick:()=>{X.leftTab.value=null,Jl("hkfl.ui.left",null)},children:g(qe,{name:"x",size:14})})]})}function w1(){const i=X.event.value,e=X.scene.value,[t,n]=fo(!1);if(!i||!e)return g(oo,{title:k("scenario")});const s=Q(i.narrative_zh,i.narrative_en);return g(dt,{children:[g(oo,{title:k("scenario"),sub:Q(e.name_zh,e.name_en)}),g("div",{class:"p-body",children:[g("section",{class:"blk",children:[g("div",{class:"ev-meta",children:[g("span",{class:`kind ${i.kind}`,children:k(i.kind)}),g("span",{class:"ev-when",children:[i.window.start.replace("T"," ")," → ",i.window.end.slice(5).replace("T"," ")," HKT"]})]}),g("h2",{class:"ev-title",children:Q(i.name_zh,i.name_en)}),g("p",{class:`ev-narr ${t?"":"clamp"}`,children:s}),s.length>90&&g("button",{class:"linkish",onClick:()=>n(!t),children:k(t?"less":"more")})]}),g(tn,{title:Q("事件数据","Event record"),children:g("dl",{class:"facts",children:i.facts.map(([r,a],o)=>g(dt,{children:[g("dt",{children:r}),g("dd",{children:a})]},o))})}),g(tn,{title:k("places"),n:e.pois.length,hint:Q("点击飞到","click to fly"),children:[g("p",{class:"ev-narr",style:{marginBottom:"10px"},children:Q(e.blurb_zh,e.blurb_en)}),g("div",{class:"chips",children:e.pois.map((r,a)=>g("button",{class:"chip","data-poi":a,onClick:()=>Oe.onFlyTo(r.x,r.y),children:[g(qe,{name:"flyto",size:12}),r.name]},a))})]}),g(tn,{title:Q("模型与数据","Model & data"),children:g("div",{class:"credits",children:[k("modelNote")," ",e.cols,"×",e.rows," @ ",e.res," m · DEM: ",e.dem_stats?.source??"—",g("br",{}),e.textures?.attribution??"",g("br",{}),Q("建筑：Overture Maps / OpenStreetMap 贡献者","Buildings: Overture Maps / OpenStreetMap contributors")]})})]})]})}const gp={surgeScale:1,slr:0,rainScale:1,drainMmPerHour:40};function b1(){const i=X.params.value;if(!i)return g(oo,{title:k("params")});const e=(s,r)=>{X.params.value={...X.params.value,[s]:r}},t=()=>Oe.onParamChange({...X.params.value}),n=(s,r,a,o,l,c)=>g(y0,{id:`sl_${s}`,label:r,value:i[s],min:a,max:o,step:l,fmt:c,onInput:u=>e(s,u),onCommit:t,changed:gp[s]!==void 0&&Math.abs(i[s]-gp[s])>1e-6});return g(dt,{children:[g(oo,{title:k("params"),sub:Q("拖动后松开即从头重算","Release a slider to re-run from the start")}),g("div",{class:"p-body",children:[g(tn,{title:k("grpCoast"),children:[n("surgeScale",k("surgeScale"),0,2,.05,s=>`×${s.toFixed(2)}`),n("waveSetup",k("waveSetup"),0,1.5,.05,s=>`+${s.toFixed(2)} m`),n("waveHs",k("waveHs"),0,5,.1,s=>`${s.toFixed(1)} m`),n("slr",k("slr"),0,1.5,.05,s=>`+${s.toFixed(2)} m`)]}),g(tn,{title:k("grpRain"),children:[n("rainScale",k("rainScale"),0,2.5,.05,s=>`×${s.toFixed(2)}`),n("drainMmPerHour",k("drain"),0,120,5,s=>`${s.toFixed(0)} mm/h`)]}),g(tn,{title:k("grpModel"),children:[g(bs,{id:"chkBld",label:k("buildingsBlock"),checked:i.buildingsBlock,onChange:s=>{X.params.value={...i,buildingsBlock:s},Oe.onParamChange({...X.params.value})}}),g(bs,{id:"chkSg",label:k("subgrid"),checked:i.subgrid,onChange:s=>{X.params.value={...i,subgrid:s},Oe.onParamChange({...X.params.value})}})]}),g(tn,{title:Q("本机缓存","Browser cache"),children:[g("p",{class:"caveat",children:[g(qe,{name:"info",size:12}),g("span",{children:Q("每次运行的关键帧（约每小时一帧）会压缩后存进浏览器（IndexedDB，最多约 600 MB，最久未用的先清）。同一场景、事件、参数和措施再打开时直接恢复，时间轴随处可跳；改参数或措施就是另一次运行。","Keyframes of each run (about one per hour) are compressed into the browser (IndexedDB, up to about 600 MB, least recently used evicted first). The same scene, event, parameters and measures reopen from the cache and the timeline jumps anywhere; a changed parameter or measure is a new run.")})]}),g("button",{class:"btn sm",onClick:()=>Oe.onClearCache(),children:[g(qe,{name:"x",size:13}),Q("清空本机缓存","Clear the browser cache")]})]})]})]})}function T1(){const i=X.scene.value,e=X.flowMode.value,t=X.exag.value,n=r=>{for(let a=0;a<3&&X.flowMode.value!==r;a++)Oe.onFlowMode()},s=r=>{for(let a=0;a<4&&X.exag.value!==r;a++)Oe.onExag()};return g(dt,{children:[g(oo,{title:k("layers"),sub:Q("水体、流向、标注与三维显示","Water, flow, labels and 3D")}),g("div",{class:"p-body",children:[g(tn,{title:Q("水体","Water"),children:[g(Yr,{cls:"full",items:[["now",k("waterNow")],["max",k("waterMax")]],value:X.waterMode.value,onPick:r=>Oe.onWaterMode(r)}),g("p",{class:"caveat",style:{marginTop:"8px"},children:[g(qe,{name:"info",size:12}),g("span",{children:k("waterMaxHint")})]}),g(bs,{id:"chkMax",label:k("showMax"),checked:X.showMax.value,onChange:r=>{X.showMax.value=r,Oe.onShowMax(r)}}),g(bs,{id:"chkProbe",label:Q("悬停读数（光标处水深）","Hover read-out (depth under the cursor)"),checked:X.probeOn.value,onChange:r=>{X.probeOn.value=r,Oe.onProbe(r)}})]}),g(tn,{title:Q("流向","Flow"),children:g(Yr,{cls:"full",items:[["particles",Q("粒子","Particles")],["arrows",Q("箭头","Arrows")],["none",Q("关","Off")]],value:e,onPick:n})}),g(tn,{title:Q("标注","Labels"),children:[i?.facilities?.length?g(bs,{id:"chkFac",label:k("showFac"),checked:X.showFac.value,onChange:r=>{X.showFac.value=r,Oe.onShowFacilities(r)}}):null,g(bs,{id:"chkLm",label:k("landmarks"),checked:X.showLandmarks.value,onChange:r=>{X.showLandmarks.value=r,Oe.onShowLandmarks(r)}}),g(bs,{id:"chkMl",label:Q("防洪措施记录（海堤、挡水板、泵站、堵塞）","Recorded measures (seawalls, barriers, pumps, blockages)"),checked:X.showMeasureLabels.value,onChange:r=>{X.showMeasureLabels.value=r,Oe.onShowMeasureLabels(r)}})]}),g(tn,{title:Q("三维","3D"),children:[g("div",{class:"row",children:[g("label",{children:Q("竖向夸张","Vertical exaggeration")}),g(Yr,{items:[[1,"×1"],[1.5,"×1.5"],[2,"×2"],[3,"×3"]],value:t,onPick:s})]}),g("div",{class:"row",children:[g("label",{children:Q("底图","Basemap")}),g(Yr,{items:[["imagery",Q("卫星影像","Imagery")],["basemap",Q("地图","Map")]],value:X.texMode.value,onPick:r=>{r!==X.texMode.value&&Oe.onTexToggle()}})]}),g(bs,{id:"chkSh",label:k("shadows"),checked:X.shadows.value,onChange:r=>{X.shadows.value=r,Oe.onShadows(r)}})]})]})]})}const E1=!0,pn="u-",A1="uplot",C1=pn+"hz",R1=pn+"vt",P1=pn+"title",D1=pn+"wrap",L1=pn+"under",I1=pn+"over",U1=pn+"axis",Zs=pn+"off",F1=pn+"select",N1=pn+"cursor-x",k1=pn+"cursor-y",O1=pn+"cursor-pt",z1=pn+"legend",B1=pn+"live",H1=pn+"inline",V1=pn+"series",G1=pn+"marker",vp=pn+"label",W1=pn+"value",Ha="width",Va="height",Na="top",_p="bottom",Br="left",rh="right",Qu="#000",xp=Qu+"0",ah="mousemove",yp="mousedown",oh="mouseup",Mp="mouseenter",Sp="mouseleave",wp="dblclick",$1="resize",X1="scroll",bp="change",zl="dppxchange",ed="--",ga=typeof window<"u",du=ga?document:null,ta=ga?window:null,q1=ga?navigator:null;let bt,al;function fu(){let i=devicePixelRatio;bt!=i&&(bt=i,al&&mu(bp,al,fu),al=matchMedia(`(min-resolution: ${bt-.001}dppx) and (max-resolution: ${bt+.001}dppx)`),nr(bp,al,fu),ta.dispatchEvent(new CustomEvent(zl)))}function si(i,e){if(e!=null){let t=i.classList;!t.contains(e)&&t.add(e)}}function pu(i,e){let t=i.classList;t.contains(e)&&t.remove(e)}function Ht(i,e,t){i.style[e]=t+"px"}function bi(i,e,t,n){let s=du.createElement(i);return e!=null&&si(s,e),t?.insertBefore(s,n),s}function ui(i,e){return bi("div",i,e)}const Tp=new WeakMap;function ki(i,e,t,n,s){let r="translate("+e+"px,"+t+"px)",a=Tp.get(i);r!=a&&(i.style.transform=r,Tp.set(i,r),e<0||t<0||e>n||t>s?si(i,Zs):pu(i,Zs))}const Ep=new WeakMap;function Ap(i,e,t){let n=e+t,s=Ep.get(i);n!=s&&(Ep.set(i,n),i.style.background=e,i.style.borderColor=t)}const Cp=new WeakMap;function Rp(i,e,t,n){let s=e+""+t,r=Cp.get(i);s!=r&&(Cp.set(i,s),i.style.height=t+"px",i.style.width=e+"px",i.style.marginLeft=n?-e/2+"px":0,i.style.marginTop=n?-t/2+"px":0)}const td={passive:!0},j1={...td,capture:!0};function nr(i,e,t,n){e.addEventListener(i,t,n?j1:td)}function mu(i,e,t,n){e.removeEventListener(i,t,td)}ga&&fu();function Ei(i,e,t,n){let s;t=t||0,n=n||e.length-1;let r=n<=2147483647;for(;n-t>1;)s=r?t+n>>1:ai((t+n)/2),e[s]<i?t=s:n=s;return i-e[t]<=e[n]-i?t:n}function b0(i){return(t,n,s)=>{let r=-1,a=-1;for(let o=n;o<=s;o++)if(i(t[o])){r=o;break}for(let o=s;o>=n;o--)if(i(t[o])){a=o;break}return[r,a]}}const T0=i=>i!=null,E0=i=>i!=null&&i>0,Ql=b0(T0),Y1=b0(E0);function K1(i,e,t,n=0,s=!1){let r=s?Y1:Ql,a=s?E0:T0;[e,t]=r(i,e,t);let o=i[e],l=i[e];if(e>-1)if(n==1)o=i[e],l=i[t];else if(n==-1)o=i[t],l=i[e];else for(let c=e;c<=t;c++){let u=i[c];a(u)&&(u<o?o=u:u>l&&(l=u))}return[o??Ut,l??-Ut]}function ec(i,e,t,n){let s=Lp(i),r=Lp(e);i==e&&(s==-1?(i*=t,e/=t):(i/=t,e*=t));let a=t==10?rs:A0,o=s==1?ai:fi,l=r==1?fi:ai,c=o(a(un(i))),u=l(a(un(e))),d=la(t,c),h=la(t,u);return t==10&&(c<0&&(d=Ft(d,-c)),u<0&&(h=Ft(h,-u))),n||t==2?(i=d*s,e=h*r):(i=D0(i,d),e=tc(e,h)),[i,e]}function nd(i,e,t,n){let s=ec(i,e,t,n);return i==0&&(s[0]=0),e==0&&(s[1]=0),s}const id=.1,Pp={mode:3,pad:id},Ja={pad:0,soft:null,mode:0},Z1={min:Ja,max:Ja};function Bl(i,e,t,n){return nc(t)?Dp(i,e,t):(Ja.pad=t,Ja.soft=n?0:null,Ja.mode=n?3:0,Dp(i,e,Z1))}function Mt(i,e){return i??e}function J1(i,e,t){for(e=Mt(e,0),t=Mt(t,i.length-1);e<=t;){if(i[e]!=null)return!0;e++}return!1}function Dp(i,e,t){let n=t.min,s=t.max,r=Mt(n.pad,0),a=Mt(s.pad,0),o=Mt(n.hard,-Ut),l=Mt(s.hard,Ut),c=Mt(n.soft,Ut),u=Mt(s.soft,-Ut),d=Mt(n.mode,0),h=Mt(s.mode,0),f=e-i,v=rs(f),_=$n(un(i),un(e)),m=rs(_),p=un(m-v);(f<1e-24||p>10)&&(f=0,(i==0||e==0)&&(f=1e-24,d==2&&c!=Ut&&(r=0),h==2&&u!=-Ut&&(a=0)));let x=f||_||1e3,y=rs(x),w=la(10,ai(y)),I=x*(f==0?i==0?.1:1:r),C=Ft(D0(i-I,w/10),24),P=i>=c&&(d==1||d==3&&C<=c||d==2&&C>=c)?c:Ut,U=$n(o,C<P&&i>=P?P:Ri(P,C)),ie=x*(f==0?e==0?.1:1:a),S=Ft(tc(e+ie,w/10),24),b=e<=u&&(h==1||h==3&&S>=u||h==2&&S<=u)?u:-Ut,H=Ri(l,S>b&&e<=b?b:$n(b,S));return U==H&&U==0&&(H=100),[U,H]}const Q1=new Intl.NumberFormat(ga?q1.language:"en-US"),sd=i=>Q1.format(i),oi=Math,xl=oi.PI,un=oi.abs,ai=oi.floor,hn=oi.round,fi=oi.ceil,Ri=oi.min,$n=oi.max,la=oi.pow,Lp=oi.sign,rs=oi.log10,A0=oi.log2,eT=(i,e=1)=>oi.sinh(i)*e,lh=(i,e=1)=>oi.asinh(i/e),Ut=1/0;function Ip(i){return(rs((i^i>>31)-(i>>31))|0)+1}function gu(i,e,t){return Ri($n(i,e),t)}function C0(i){return typeof i=="function"}function pt(i){return C0(i)?i:()=>i}const tT=()=>{},R0=i=>i,P0=(i,e)=>e,nT=i=>null,Up=i=>!0,Fp=(i,e)=>i==e,iT=/\.\d*?(?=9{6,}|0{6,})/gm,lr=i=>{if(I0(i)||Is.has(i))return i;const e=`${i}`,t=e.match(iT);if(t==null)return i;let n=t[0].length-1;if(e.indexOf("e-")!=-1){let[s,r]=e.split("e");return+`${lr(s)}e${r}`}return Ft(i,n)};function qs(i,e){return lr(Ft(lr(i/e))*e)}function tc(i,e){return lr(fi(lr(i/e))*e)}function D0(i,e){return lr(ai(lr(i/e))*e)}function Ft(i,e=0){if(I0(i))return i;let t=10**e,n=i*t*(1+Number.EPSILON);return hn(n)/t}const Is=new Map;function L0(i){return((""+i).split(".")[1]||"").length}function lo(i,e,t,n){let s=[],r=n.map(L0);for(let a=e;a<t;a++){let o=un(a),l=Ft(la(i,a),o);for(let c=0;c<n.length;c++){let u=i==10?+`${n[c]}e${a}`:n[c]*l,d=(a>=0?0:o)+(a>=r[c]?0:r[c]),h=i==10?u:Ft(u,d);s.push(h),Is.set(h,d)}}return s}const Qa={},rd=[],ca=[null,null],Ts=Array.isArray,I0=Number.isInteger,sT=i=>i===void 0;function Np(i){return typeof i=="string"}function nc(i){let e=!1;if(i!=null){let t=i.constructor;e=t==null||t==Object}return e}function rT(i){return i!=null&&typeof i=="object"}const aT=Object.getPrototypeOf(Uint8Array),U0="__proto__";function ha(i,e=nc){let t;if(Ts(i)){let n=i.find(s=>s!=null);if(Ts(n)||e(n)){t=Array(i.length);for(let s=0;s<i.length;s++)t[s]=ha(i[s],e)}else t=i.slice()}else if(i instanceof aT)t=i.slice();else if(e(i)){t={};for(let n in i)n!=U0&&(t[n]=ha(i[n],e))}else t=i;return t}function an(i){let e=arguments;for(let t=1;t<e.length;t++){let n=e[t];for(let s in n)s!=U0&&(nc(i[s])?an(i[s],ha(n[s])):i[s]=ha(n[s]))}return i}const oT=0,lT=1,cT=2;function hT(i,e,t){for(let n=0,s,r=-1;n<e.length;n++){let a=e[n];if(a>r){for(s=a-1;s>=0&&i[s]==null;)i[s--]=null;for(s=a+1;s<t&&i[s]==null;)i[r=s++]=null}}}function uT(i,e){if(pT(i)){let a=i[0].slice();for(let o=1;o<i.length;o++)a.push(...i[o].slice(1));return mT(a[0])||(a=fT(a)),a}let t=new Set;for(let a=0;a<i.length;a++){let l=i[a][0],c=l.length;for(let u=0;u<c;u++)t.add(l[u])}let n=[Array.from(t).sort((a,o)=>a-o)],s=n[0].length,r=new Map;for(let a=0;a<s;a++)r.set(n[0][a],a);for(let a=0;a<i.length;a++){let o=i[a],l=o[0];for(let c=1;c<o.length;c++){let u=o[c],d=Array(s).fill(void 0),h=e?e[a][c]:lT,f=[];for(let v=0;v<u.length;v++){let _=u[v],m=r.get(l[v]);_===null?h!=oT&&(d[m]=_,h==cT&&f.push(m)):d[m]=_}hT(d,f,s),n.push(d)}}return n}const dT=typeof queueMicrotask>"u"?i=>Promise.resolve().then(i):queueMicrotask;function fT(i){let e=i[0],t=e.length,n=Array(t);for(let r=0;r<n.length;r++)n[r]=r;n.sort((r,a)=>e[r]-e[a]);let s=[];for(let r=0;r<i.length;r++){let a=i[r],o=Array(t);for(let l=0;l<t;l++)o[l]=a[n[l]];s.push(o)}return s}function pT(i){let e=i[0][0],t=e.length;for(let n=1;n<i.length;n++){let s=i[n][0];if(s.length!=t)return!1;if(s!=e){for(let r=0;r<t;r++)if(s[r]!=e[r])return!1}}return!0}function mT(i,e=100){const t=i.length;if(t<=1)return!0;let n=0,s=t-1;for(;n<=s&&i[n]==null;)n++;for(;s>=n&&i[s]==null;)s--;if(s<=n)return!0;const r=$n(1,ai((s-n+1)/e));for(let a=i[n],o=n+r;o<=s;o+=r){const l=i[o];if(l!=null){if(l<=a)return!1;a=l}}return!0}const F0=["January","February","March","April","May","June","July","August","September","October","November","December"],N0=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function k0(i){return i.slice(0,3)}const gT=N0.map(k0),vT=F0.map(k0),_T={MMMM:F0,MMM:vT,WWWW:N0,WWW:gT};function ka(i){return(i<10?"0":"")+i}function xT(i){return(i<10?"00":i<100?"0":"")+i}const yT={YYYY:i=>i.getFullYear(),YY:i=>(i.getFullYear()+"").slice(2),MMMM:(i,e)=>e.MMMM[i.getMonth()],MMM:(i,e)=>e.MMM[i.getMonth()],MM:i=>ka(i.getMonth()+1),M:i=>i.getMonth()+1,DD:i=>ka(i.getDate()),D:i=>i.getDate(),WWWW:(i,e)=>e.WWWW[i.getDay()],WWW:(i,e)=>e.WWW[i.getDay()],HH:i=>ka(i.getHours()),H:i=>i.getHours(),h:i=>{let e=i.getHours();return e==0?12:e>12?e-12:e},AA:i=>i.getHours()>=12?"PM":"AM",aa:i=>i.getHours()>=12?"pm":"am",a:i=>i.getHours()>=12?"p":"a",mm:i=>ka(i.getMinutes()),m:i=>i.getMinutes(),ss:i=>ka(i.getSeconds()),s:i=>i.getSeconds(),fff:i=>xT(i.getMilliseconds())};function ad(i,e){e=e||_T;let t=[],n=/\{([a-z]+)\}|[^{]+/gi,s;for(;s=n.exec(i);)t.push(s[0][0]=="{"?yT[s[1]]:s[0]);return r=>{let a="";for(let o=0;o<t.length;o++)a+=typeof t[o]=="string"?t[o]:t[o](r,e);return a}}const MT=new Intl.DateTimeFormat().resolvedOptions().timeZone;function ST(i,e){let t;return e=="UTC"||e=="Etc/UTC"?t=new Date(+i+i.getTimezoneOffset()*6e4):e==MT?t=i:(t=new Date(i.toLocaleString("en-US",{timeZone:e})),t.setMilliseconds(i.getMilliseconds())),t}const O0=i=>i%1==0,Hl=[1,2,2.5,5],wT=lo(10,-32,0,Hl),z0=lo(10,0,32,Hl),bT=z0.filter(O0),js=wT.concat(z0),od=`
`,B0="{YYYY}",kp=od+B0,H0="{M}/{D}",Ga=od+H0,ol=Ga+"/{YY}",V0="{aa}",TT="{h}:{mm}",Wr=TT+V0,Op=od+Wr,zp=":{ss}",Et=null;function G0(i){let e=i*1e3,t=e*60,n=t*60,s=n*24,r=s*30,a=s*365,l=(i==1?lo(10,0,3,Hl).filter(O0):lo(10,-3,0,Hl)).concat([e,e*5,e*10,e*15,e*30,t,t*5,t*10,t*15,t*30,n,n*2,n*3,n*4,n*6,n*8,n*12,s,s*2,s*3,s*4,s*5,s*6,s*7,s*8,s*9,s*10,s*15,r,r*2,r*3,r*4,r*6,a,a*2,a*5,a*10,a*25,a*50,a*100]);const c=[[a,B0,Et,Et,Et,Et,Et,Et,1],[s*28,"{MMM}",kp,Et,Et,Et,Et,Et,1],[s,H0,kp,Et,Et,Et,Et,Et,1],[n,"{h}"+V0,ol,Et,Ga,Et,Et,Et,1],[t,Wr,ol,Et,Ga,Et,Et,Et,1],[e,zp,ol+" "+Wr,Et,Ga+" "+Wr,Et,Op,Et,1],[i,zp+".{fff}",ol+" "+Wr,Et,Ga+" "+Wr,Et,Op,Et,1]];function u(d){return(h,f,v,_,m,p)=>{let x=[],y=m>=a,w=m>=r&&m<a,I=d(v),C=Ft(I*i,3),P=ch(I.getFullYear(),y?0:I.getMonth(),w||y?1:I.getDate()),U=Ft(P*i,3);if(w||y){let ie=w?m/r:0,S=y?m/a:0,b=C==U?C:Ft(ch(P.getFullYear()+S,P.getMonth()+ie,1)*i,3),H=new Date(hn(b/i)),z=H.getFullYear(),j=H.getMonth();for(let Z=0;b<=_;Z++){let Y=ch(z+S*Z,j+ie*Z,1),F=Y-d(Ft(Y*i,3));b=Ft((+Y+F)*i,3),b<=_&&x.push(b)}}else{let ie=m>=s?s:m,S=ai(v)-ai(C),b=U+S+tc(C-U,ie);x.push(b);let H=d(b),z=H.getHours()+H.getMinutes()/t+H.getSeconds()/n,j=m/n,Z=h.axes[f]._space,Y=p/Z;for(;b=Ft(b+m,i==1?0:3),!(b>_);)if(j>1){let F=ai(Ft(z+j,6))%24,le=d(b).getHours()-F;le>1&&(le=-1),b-=le*n,z=(z+j)%24;let oe=x[x.length-1];Ft((b-oe)/m,3)*Y>=.7&&x.push(b)}else x.push(b)}return x}}return[l,c,u]}const[ET,AT,CT]=G0(1),[RT,PT,DT]=G0(.001);lo(2,-53,53,[1]);function Bp(i,e){return i.map(t=>t.map((n,s)=>s==0||s==8||n==null?n:e(s==1||t[8]==0?n:t[1]+n)))}function Hp(i,e){return(t,n,s,r,a)=>{let o=e.find(v=>a>=v[0])||e[e.length-1],l,c,u,d,h,f;return n.map(v=>{let _=i(v),m=_.getFullYear(),p=_.getMonth(),x=_.getDate(),y=_.getHours(),w=_.getMinutes(),I=_.getSeconds(),C=m!=l&&o[2]||p!=c&&o[3]||x!=u&&o[4]||y!=d&&o[5]||w!=h&&o[6]||I!=f&&o[7]||o[1];return l=m,c=p,u=x,d=y,h=w,f=I,C(_)})}}function LT(i,e){let t=ad(e);return(n,s,r,a,o)=>s.map(l=>t(i(l)))}function ch(i,e,t){return new Date(i,e,t)}function Vp(i,e){return e(i)}const IT="{YYYY}-{MM}-{DD} {h}:{mm}{aa}";function Gp(i,e){return(t,n,s,r)=>r==null?ed:e(i(n))}function UT(i,e){let t=i.series[e];return t.width?t.stroke(i,e):t.points.width?t.points.stroke(i,e):null}function FT(i,e){return i.series[e].fill(i,e)}const NT={show:!0,live:!0,isolate:!1,mount:tT,markers:{show:!0,width:2,stroke:UT,fill:FT,dash:"solid"},idx:null,idxs:null,values:[]};function kT(i,e){let t=i.cursor.points,n=ui(),s=t.size(i,e);Ht(n,Ha,s),Ht(n,Va,s);let r=s/-2;Ht(n,"marginLeft",r),Ht(n,"marginTop",r);let a=t.width(i,e,s);return a&&Ht(n,"borderWidth",a),n}function OT(i,e){let t=i.series[e].points;return t._fill||t._stroke}function zT(i,e){let t=i.series[e].points;return t._stroke||t._fill}function BT(i,e){return i.series[e].points.size}const hh=[0,0];function HT(i,e,t){return hh[0]=e,hh[1]=t,hh}function ll(i,e,t,n=!0){return s=>{s.button==0&&(!n||s.target==e)&&t(s)}}function uh(i,e,t,n=!0){return s=>{(!n||s.target==e)&&t(s)}}const VT={show:!0,x:!0,y:!0,lock:!1,move:HT,points:{one:!1,show:kT,size:BT,width:0,stroke:zT,fill:OT},bind:{mousedown:ll,mouseup:ll,click:ll,dblclick:ll,mousemove:uh,mouseleave:uh,mouseenter:uh},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,click:(i,e)=>{e.stopPropagation(),e.stopImmediatePropagation()},_x:!1,_y:!1},focus:{dist:(i,e,t,n,s)=>n-s,prox:-1,bias:0},hover:{skip:[void 0],prox:null,bias:0},left:-10,top:-10,idx:null,dataIdx:null,idxs:null,event:null},W0={show:!0,stroke:"rgba(0,0,0,0.07)",width:2},ld=an({},W0,{filter:P0}),$0=an({},ld,{size:10}),X0=an({},W0,{show:!1}),cd='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',q0="bold "+cd,j0=1.5,Wp={show:!0,scale:"x",stroke:Qu,space:50,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:q0,side:2,grid:ld,ticks:$0,border:X0,font:cd,lineGap:j0,rotate:0},GT="Value",WT="Time",$p={show:!0,scale:"x",auto:!1,sorted:1,min:Ut,max:-Ut,idxs:[]};function $T(i,e,t,n,s){return e.map(r=>r==null?"":sd(r))}function XT(i,e,t,n,s,r,a){let o=[],l=Is.get(s)||0;t=a?t:Ft(tc(t,s),l);for(let c=t;c<=n;c=Ft(c+s,l))o.push(Object.is(c,-0)?0:c);return o}function vu(i,e,t,n,s,r,a){const o=[],l=i.scales[i.axes[e].scale].log,c=l==10?rs:A0,u=ai(c(t));s=la(l,u),l==10&&(s=js[Ei(s,js)]);let d=t,h=s*l;l==10&&(h=js[Ei(h,js)]);do o.push(d),d=d+s,l==10&&!Is.has(d)&&(d=Ft(d,Is.get(s))),d>=h&&(s=d,h=s*l,l==10&&(h=js[Ei(h,js)]));while(d<=n);return o}function qT(i,e,t,n,s,r,a){let l=i.scales[i.axes[e].scale].asinh,c=n>l?vu(i,e,$n(l,t),n,s):[l],u=n>=0&&t<=0?[0]:[];return(t<-l?vu(i,e,$n(l,-n),-t,s):[l]).reverse().map(h=>-h).concat(u,c)}const Y0=/./,jT=/[12357]/,YT=/[125]/,Xp=/1/,_u=(i,e,t,n)=>i.map((s,r)=>e==4&&s==0||r%n==0&&t.test(s.toExponential()[s<0?1:0])?s:null);function KT(i,e,t,n,s){let r=i.axes[t],a=r.scale,o=i.scales[a],l=i.valToPos,c=r._space,u=l(10,a),d=l(9,a)-u>=c?Y0:l(7,a)-u>=c?jT:l(5,a)-u>=c?YT:Xp;if(d==Xp){let h=un(l(1,a)-u);if(h<c)return _u(e.slice().reverse(),o.distr,d,fi(c/h)).reverse()}return _u(e,o.distr,d,1)}function ZT(i,e,t,n,s){let r=i.axes[t],a=r.scale,o=r._space,l=i.valToPos,c=un(l(1,a)-l(2,a));return c<o?_u(e.slice().reverse(),3,Y0,fi(o/c)).reverse():e}function JT(i,e,t,n){return n==null?ed:e==null?"":sd(e)}const qp={show:!0,scale:"y",stroke:Qu,space:30,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:q0,side:3,grid:ld,ticks:$0,border:X0,font:cd,lineGap:j0,rotate:0};function QT(i,e){let t=3+(i||1)*2;return Ft(t*e,3)}function eE(i,e){let{scale:t,idxs:n}=i.series[0],s=i._data[0],r=i.valToPos(s[n[0]],t,!0),a=i.valToPos(s[n[1]],t,!0),o=un(a-r),l=i.series[e],c=o/(l.points.space*bt);return n[1]-n[0]<=c}const jp={scale:null,auto:!0,sorted:0,min:Ut,max:-Ut},K0=(i,e,t,n,s)=>s,Yp={show:!0,auto:!0,sorted:0,gaps:K0,alpha:1,facets:[an({},jp,{scale:"x"}),an({},jp,{scale:"y"})]},Kp={scale:"y",auto:!0,sorted:0,show:!0,spanGaps:!1,gaps:K0,alpha:1,points:{show:eE,filter:null},values:null,min:Ut,max:-Ut,idxs:[],path:null,clip:null};function tE(i,e,t,n,s){return t/10}const Z0={time:E1,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},nE=an({},Z0,{time:!1,ori:1}),Zp={};function J0(i,e){let t=Zp[i];return t||(t={key:i,plots:[],sub(n){t.plots.push(n)},unsub(n){t.plots=t.plots.filter(s=>s!=n)},pub(n,s,r,a,o,l,c){for(let u=0;u<t.plots.length;u++)t.plots[u]!=s&&t.plots[u].pub(n,s,r,a,o,l,c)}},i!=null&&(Zp[i]=t)),t}const ua=1,xu=2;function fr(i,e,t){const n=i.mode,s=i.series[e],r=n==2?i._data[e]:i._data,a=i.scales,o=i.bbox;let l=r[0],c=n==2?r[1]:r[e],u=n==2?a[s.facets[0].scale]:a[i.series[0].scale],d=n==2?a[s.facets[1].scale]:a[s.scale],h=o.left,f=o.top,v=o.width,_=o.height,m=i.valToPosH,p=i.valToPosV;return u.ori==0?t(s,l,c,u,d,m,p,h,f,v,_,sc,va,ac,eg,ng):t(s,l,c,u,d,p,m,f,h,_,v,rc,_a,dd,tg,ig)}function hd(i,e){let t=0,n=0,s=Mt(i.bands,rd);for(let r=0;r<s.length;r++){let a=s[r];a.series[0]==e?t=a.dir:a.series[1]==e&&(a.dir==1?n|=1:n|=2)}return[t,n==1?-1:n==2?1:n==3?2:0]}function iE(i,e,t,n,s){let r=i.mode,a=i.series[e],o=r==2?a.facets[1].scale:a.scale,l=i.scales[o];return s==-1?l.min:s==1?l.max:l.distr==3?l.dir==1?l.min:l.max:0}function as(i,e,t,n,s,r){return fr(i,e,(a,o,l,c,u,d,h,f,v,_,m)=>{let p=a.pxRound;const x=c.dir*(c.ori==0?1:-1),y=c.ori==0?va:_a;let w,I;x==1?(w=t,I=n):(w=n,I=t);let C=p(d(o[w],c,_,f)),P=p(h(l[w],u,m,v)),U=p(d(o[I],c,_,f)),ie=p(h(r==1?u.max:u.min,u,m,v)),S=new Path2D(s);return y(S,U,ie),y(S,C,ie),y(S,C,P),S})}function ic(i,e,t,n,s,r){let a=null;if(i.length>0){a=new Path2D;const o=e==0?ac:dd;let l=t;for(let d=0;d<i.length;d++){let h=i[d];if(h[1]>h[0]){let f=h[0]-l;f>0&&o(a,l,n,f,n+r),l=h[1]}}let c=t+s-l,u=10;c>0&&o(a,l,n-u/2,c,n+r+u)}return a}function sE(i,e,t){let n=i[i.length-1];n&&n[0]==e?n[1]=t:i.push([e,t])}function ud(i,e,t,n,s,r,a){let o=[],l=i.length;for(let c=s==1?t:n;c>=t&&c<=n;c+=s)if(e[c]===null){let d=c,h=c;if(s==1)for(;++c<=n&&e[c]===null;)h=c;else for(;--c>=t&&e[c]===null;)h=c;let f=r(i[d]),v=h==d?f:r(i[h]),_=d-s;f=a<=0&&_>=0&&_<l?r(i[_]):f;let p=h+s;v=a>=0&&p>=0&&p<l?r(i[p]):v,v>=f&&o.push([f,v])}return o}function Jp(i){return i==0?R0:i==1?hn:e=>qs(e,i)}function Q0(i){let e=i==0?sc:rc,t=i==0?(s,r,a,o,l,c)=>{s.arcTo(r,a,o,l,c)}:(s,r,a,o,l,c)=>{s.arcTo(a,r,l,o,c)},n=i==0?(s,r,a,o,l)=>{s.rect(r,a,o,l)}:(s,r,a,o,l)=>{s.rect(a,r,l,o)};return(s,r,a,o,l,c=0,u=0)=>{c==0&&u==0?n(s,r,a,o,l):(c=Ri(c,o/2,l/2),u=Ri(u,o/2,l/2),e(s,r+c,a),t(s,r+o,a,r+o,a+l,c),t(s,r+o,a+l,r,a+l,u),t(s,r,a+l,r,a,u),t(s,r,a,r+o,a,c),s.closePath())}}const sc=(i,e,t)=>{i.moveTo(e,t)},rc=(i,e,t)=>{i.moveTo(t,e)},va=(i,e,t)=>{i.lineTo(e,t)},_a=(i,e,t)=>{i.lineTo(t,e)},ac=Q0(0),dd=Q0(1),eg=(i,e,t,n,s,r)=>{i.arc(e,t,n,s,r)},tg=(i,e,t,n,s,r)=>{i.arc(t,e,n,s,r)},ng=(i,e,t,n,s,r,a)=>{i.bezierCurveTo(e,t,n,s,r,a)},ig=(i,e,t,n,s,r,a)=>{i.bezierCurveTo(t,e,s,n,a,r)};function sg(i){return(e,t,n,s,r)=>fr(e,t,(a,o,l,c,u,d,h,f,v,_,m)=>{let{pxRound:p,points:x}=a,y,w;c.ori==0?(y=sc,w=eg):(y=rc,w=tg);const I=Ft(x.width*bt,3);let C=(x.size-x.width)/2*bt,P=Ft(C*2,3),U=new Path2D,ie=new Path2D,{left:S,top:b,width:H,height:z}=e.bbox;ac(ie,S-P,b-P,H+P*2,z+P*2);const j=Z=>{if(l[Z]!=null){let Y=p(d(o[Z],c,_,f)),F=p(h(l[Z],u,m,v));y(U,Y+C,F),w(U,Y,F,C,0,xl*2)}};if(r)r.forEach(j);else for(let Z=n;Z<=s;Z++)j(Z);return{stroke:I>0?U:null,fill:U,clip:ie,flags:ua|xu}})}function rg(i){return(e,t,n,s,r,a)=>{n!=s&&(r!=n&&a!=n&&i(e,t,n),r!=s&&a!=s&&i(e,t,s),i(e,t,a))}}const rE=rg(va),aE=rg(_a);function ag(i){const e=Mt(i?.alignGaps,0);return(t,n,s,r)=>fr(t,n,(a,o,l,c,u,d,h,f,v,_,m)=>{[s,r]=Ql(l,s,r);let p=a.pxRound,x=z=>p(d(z,c,_,f)),y=z=>p(h(z,u,m,v)),w,I;c.ori==0?(w=va,I=rE):(w=_a,I=aE);const C=c.dir*(c.ori==0?1:-1),P={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:ua},U=P.stroke;let ie=!1;if(r-s>=_*4){let z=he=>t.posToVal(he,c.key,!0),j=null,Z=null,Y,F,ne,pe=x(o[C==1?s:r]),le=x(o[s]),oe=x(o[r]),me=z(C==1?le+1:oe-1);for(let he=C==1?s:r;he>=s&&he<=r;he+=C){let se=o[he],xe=(C==1?se<me:se>me)?pe:x(se),ge=l[he];xe==pe?ge!=null?(F=ge,j==null?(w(U,xe,y(F)),Y=j=Z=F):F<j?j=F:F>Z&&(Z=F)):ge===null&&(ie=!0):(j!=null&&I(U,pe,y(j),y(Z),y(Y),y(F)),ge!=null?(F=ge,w(U,xe,y(F)),j=Z=Y=F):(j=Z=null,ge===null&&(ie=!0)),pe=xe,me=z(pe+C))}j!=null&&j!=Z&&ne!=pe&&I(U,pe,y(j),y(Z),y(Y),y(F))}else for(let z=C==1?s:r;z>=s&&z<=r;z+=C){let j=l[z];j===null?ie=!0:j!=null&&w(U,x(o[z]),y(j))}let[b,H]=hd(t,n);if(a.fill!=null||b!=0){let z=P.fill=new Path2D(U),j=a.fillTo(t,n,a.min,a.max,b),Z=y(j),Y=x(o[s]),F=x(o[r]);C==-1&&([F,Y]=[Y,F]),w(z,F,Z),w(z,Y,Z)}if(!a.spanGaps){let z=[];ie&&z.push(...ud(o,l,s,r,C,x,e)),P.gaps=z=a.gaps(t,n,s,r,z),P.clip=ic(z,c.ori,f,v,_,m)}return H!=0&&(P.band=H==2?[as(t,n,s,r,U,-1),as(t,n,s,r,U,1)]:as(t,n,s,r,U,H)),P})}function oE(i){const e=Mt(i.align,1),t=Mt(i.ascDesc,!1),n=Mt(i.alignGaps,0),s=Mt(i.extend,!1);return(r,a,o,l)=>fr(r,a,(c,u,d,h,f,v,_,m,p,x,y)=>{[o,l]=Ql(d,o,l);let w=c.pxRound,{left:I,width:C}=r.bbox,P=le=>w(v(le,h,x,m)),U=le=>w(_(le,f,y,p)),ie=h.ori==0?va:_a;const S={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:ua},b=S.stroke,H=h.dir*(h.ori==0?1:-1);let z=U(d[H==1?o:l]),j=P(u[H==1?o:l]),Z=j,Y=j;s&&e==-1&&(Y=I,ie(b,Y,z)),ie(b,j,z);for(let le=H==1?o:l;le>=o&&le<=l;le+=H){let oe=d[le];if(oe==null)continue;let me=P(u[le]),he=U(oe);e==1?ie(b,me,z):ie(b,Z,he),ie(b,me,he),z=he,Z=me}let F=Z;s&&e==1&&(F=I+C,ie(b,F,z));let[ne,pe]=hd(r,a);if(c.fill!=null||ne!=0){let le=S.fill=new Path2D(b),oe=c.fillTo(r,a,c.min,c.max,ne),me=U(oe);ie(le,F,me),ie(le,Y,me)}if(!c.spanGaps){let le=[];le.push(...ud(u,d,o,l,H,P,n));let oe=c.width*bt/2,me=t||e==1?oe:-oe,he=t||e==-1?-oe:oe;le.forEach(se=>{se[0]+=me,se[1]+=he}),S.gaps=le=c.gaps(r,a,o,l,le),S.clip=ic(le,h.ori,m,p,x,y)}return pe!=0&&(S.band=pe==2?[as(r,a,o,l,b,-1),as(r,a,o,l,b,1)]:as(r,a,o,l,b,pe)),S})}function Qp(i,e,t,n,s,r,a=Ut){if(i.length>1){let o=null;for(let l=0,c=1/0;l<i.length;l++)if(e[l]!==void 0){if(o!=null){let u=un(i[l]-i[o]);u<c&&(c=u,a=un(t(i[l],n,s,r)-t(i[o],n,s,r)))}o=l}}return a}function lE(i){i=i||Qa;const e=Mt(i.size,[.6,Ut,1]),t=i.align||0,n=i.gap||0;let s=i.radius;s=s==null?[0,0]:typeof s=="number"?[s,0]:s;const r=pt(s),a=1-e[0],o=Mt(e[1],Ut),l=Mt(e[2],1),c=Mt(i.disp,Qa),u=Mt(i.each,f=>{}),{fill:d,stroke:h}=c;return(f,v,_,m)=>fr(f,v,(p,x,y,w,I,C,P,U,ie,S,b)=>{let H=p.pxRound,z=t,j=n*bt,Z=o*bt,Y=l*bt,F,ne;w.ori==0?[F,ne]=r(f,v):[ne,F]=r(f,v);const pe=w.dir*(w.ori==0?1:-1);let le=w.ori==0?ac:dd,oe=w.ori==0?u:(q,be,ye,De,lt,_e,Le)=>{u(q,be,ye,lt,De,Le,_e)},me=Mt(f.bands,rd).find(q=>q.series[0]==v),he=me!=null?me.dir:0,se=p.fillTo(f,v,p.min,p.max,he),fe=H(P(se,I,b,ie)),xe,ge,Xe,Fe=S,He=H(p.width*bt),rt=!1,nt=null,N=null,qt=null,ot=null;d!=null&&(He==0||h!=null)&&(rt=!0,nt=d.values(f,v,_,m),N=new Map,new Set(nt).forEach(q=>{q!=null&&N.set(q,new Path2D)}),He>0&&(qt=h.values(f,v,_,m),ot=new Map,new Set(qt).forEach(q=>{q!=null&&ot.set(q,new Path2D)})));let{x0:ut,size:Ke}=c;if(ut!=null&&Ke!=null){z=1,x=ut.values(f,v,_,m),ut.unit==2&&(x=x.map(ye=>f.posToVal(U+ye*S,w.key,!0)));let q=Ke.values(f,v,_,m);Ke.unit==2?ge=q[0]*S:ge=C(q[0],w,S,U)-C(0,w,S,U),Fe=Qp(x,y,C,w,S,U,Fe),Xe=Fe-ge+j}else Fe=Qp(x,y,C,w,S,U,Fe),Xe=Fe*a+j,ge=Fe-Xe;Xe<1&&(Xe=0),He>=ge/2&&(He=0),Xe<5&&(H=R0);let Tt=Xe>0,Ye=Fe-Xe-(Tt?He:0);ge=H(gu(Ye,Y,Z)),xe=(z==0?ge/2:z==pe?0:ge)-z*pe*((z==0?j/2:0)+(Tt?He/2:0));const D={stroke:null,fill:null,clip:null,band:null,gaps:null,flags:0},E=rt?null:new Path2D;let ee=null;if(me!=null)ee=f.data[me.series[1]];else{let{y0:q,y1:be}=c;q!=null&&be!=null&&(y=be.values(f,v,_,m),ee=q.values(f,v,_,m))}let ce=F*ge,re=ne*ge;for(let q=pe==1?_:m;q>=_&&q<=m;q+=pe){let be=y[q];if(be==null)continue;if(ee!=null){let Ee=ee[q]??0;if(be-Ee==0)continue;fe=P(Ee,I,b,ie)}let ye=w.distr!=2||c!=null?x[q]:q,De=C(ye,w,S,U),lt=P(Mt(be,se),I,b,ie),_e=H(De-xe),Le=H($n(lt,fe)),Ve=H(Ri(lt,fe)),We=Le-Ve;if(be!=null){let Ee=be<0?re:ce,et=be<0?ce:re;rt?(He>0&&qt[q]!=null&&le(ot.get(qt[q]),_e,Ve+ai(He/2),ge,$n(0,We-He),Ee,et),nt[q]!=null&&le(N.get(nt[q]),_e,Ve+ai(He/2),ge,$n(0,We-He),Ee,et)):le(E,_e,Ve+ai(He/2),ge,$n(0,We-He),Ee,et),oe(f,v,q,_e-He/2,Ve,ge+He,We)}}return He>0?D.stroke=rt?ot:E:rt||(D._fill=p.width==0?p._fill:p._stroke??p._fill,D.width=0),D.fill=rt?N:E,D})}function cE(i,e){const t=Mt(e?.alignGaps,0);return(n,s,r,a)=>fr(n,s,(o,l,c,u,d,h,f,v,_,m,p)=>{[r,a]=Ql(c,r,a);let x=o.pxRound,y=F=>x(h(F,u,m,v)),w=F=>x(f(F,d,p,_)),I,C,P;u.ori==0?(I=sc,P=va,C=ng):(I=rc,P=_a,C=ig);const U=u.dir*(u.ori==0?1:-1);let ie=y(l[U==1?r:a]),S=ie,b=[],H=[];for(let F=U==1?r:a;F>=r&&F<=a;F+=U)if(c[F]!=null){let pe=l[F],le=y(pe);b.push(S=le),H.push(w(c[F]))}const z={stroke:i(b,H,I,P,C,x),fill:null,clip:null,band:null,gaps:null,flags:ua},j=z.stroke;let[Z,Y]=hd(n,s);if(o.fill!=null||Z!=0){let F=z.fill=new Path2D(j),ne=o.fillTo(n,s,o.min,o.max,Z),pe=w(ne);P(F,S,pe),P(F,ie,pe)}if(!o.spanGaps){let F=[];F.push(...ud(l,c,r,a,U,y,t)),z.gaps=F=o.gaps(n,s,r,a,F),z.clip=ic(F,u.ori,v,_,m,p)}return Y!=0&&(z.band=Y==2?[as(n,s,r,a,j,-1),as(n,s,r,a,j,1)]:as(n,s,r,a,j,Y)),z})}function hE(i){return cE(uE,i)}function uE(i,e,t,n,s,r){const a=i.length;if(a<2)return null;const o=new Path2D;if(t(o,i[0],e[0]),a==2)n(o,i[1],e[1]);else{let l=Array(a),c=Array(a-1),u=Array(a-1),d=Array(a-1);for(let h=0;h<a-1;h++)u[h]=e[h+1]-e[h],d[h]=i[h+1]-i[h],c[h]=u[h]/d[h];l[0]=c[0];for(let h=1;h<a-1;h++)c[h]===0||c[h-1]===0||c[h-1]>0!=c[h]>0?l[h]=0:(l[h]=3*(d[h-1]+d[h])/((2*d[h]+d[h-1])/c[h-1]+(d[h]+2*d[h-1])/c[h]),isFinite(l[h])||(l[h]=0));l[a-1]=c[a-2];for(let h=0;h<a-1;h++)s(o,i[h]+d[h]/3,e[h]+l[h]*d[h]/3,i[h+1]-d[h]/3,e[h+1]-l[h+1]*d[h]/3,i[h+1],e[h+1])}return o}const yu=new Set;function em(){for(let i of yu)i.syncRect(!0)}ga&&(nr($1,ta,em),nr(X1,ta,em,!0),nr(zl,ta,()=>{Mn.pxRatio=bt}));const dE=ag(),fE=sg();function tm(i,e,t,n){return(n?[i[0],i[1]].concat(i.slice(2)):[i[0]].concat(i.slice(1))).map((r,a)=>Mu(r,a,e,t))}function pE(i,e){return i.map((t,n)=>n==0?{}:an({},e,t))}function Mu(i,e,t,n){return an({},e==0?t:n,i)}function og(i,e,t){return e==null?ca:[e,t]}const mE=og;function gE(i,e,t){return e==null?ca:Bl(e,t,id,!0)}function lg(i,e,t,n){return e==null?ca:ec(e,t,i.scales[n].log,!1)}const vE=lg;function cg(i,e,t,n){return e==null?ca:nd(e,t,i.scales[n].log,!1)}const _E=cg;function xE(i,e,t,n,s){let r=$n(Ip(i),Ip(e)),a=e-i,o=Ei(s/n*a,t);do{let l=t[o],c=n*l/a;if(c>=s&&r+(l<5?Is.get(l):0)<=17)return[l,c]}while(++o<t.length);return[0,0]}function nm(i){let e,t;return i=i.replace(/(\d+)px/,(n,s)=>(e=hn((t=+s)*bt))+"px"),[i,e,t]}function yE(i){i.show&&[i.font,i.labelFont].forEach(e=>{let t=Ft(e[2]*bt,1);e[0]=e[0].replace(/[0-9.]+px/,t+"px"),e[1]=t})}function Mn(i,e,t){const n={mode:Mt(i.mode,1)},s=n.mode;function r(M,T,R,L){let B=T.valToPct(M);return L+R*(T.dir==-1?1-B:B)}function a(M,T,R,L){let B=T.valToPct(M);return L+R*(T.dir==-1?B:1-B)}function o(M,T,R,L){return T.ori==0?r(M,T,R,L):a(M,T,R,L)}n.valToPosH=r,n.valToPosV=a;let l=!1;n.status=0;const c=n.root=ui(A1);if(i.id!=null&&(c.id=i.id),si(c,i.class),i.title){let M=ui(P1,c);M.textContent=i.title}const u=bi("canvas"),d=n.ctx=u.getContext("2d"),h=ui(D1,c);nr("click",h,M=>{M.target===v&&(Ot!=yr||Gt!=Mr)&&Tn.click(n,M)},!0);const f=n.under=ui(L1,h);h.appendChild(u);const v=n.over=ui(I1,h);i=ha(i);const _=+Mt(i.pxAlign,1),m=Jp(_);(i.plugins||[]).forEach(M=>{M.opts&&(i=M.opts(n,i)||i)});const p=i.ms||.001,x=n.series=s==1?tm(i.series||[],$p,Kp,!1):pE(i.series||[null],Yp),y=n.axes=tm(i.axes||[],Wp,qp,!0),w=n.scales={},I=n.bands=i.bands||[];I.forEach(M=>{M.fill=pt(M.fill||null),M.dir=Mt(M.dir,-1)});const C=s==2?x[1].facets[0].scale:x[0].scale,P={axes:mg,series:ya},U=(i.drawOrder||["axes","series"]).map(M=>P[M]);function ie(M){const T=M.distr==3?R=>rs(R>0?R:M.clamp(n,R,M.min,M.max,M.key)):M.distr==4?R=>lh(R,M.asinh):M.distr==100?R=>M.fwd(R):R=>R;return R=>{let L=T(R),{_min:B,_max:te}=M,de=te-B;return(L-B)/de}}function S(M){let T=w[M];if(T==null){let R=(i.scales||Qa)[M]||Qa;if(R.from!=null){S(R.from);let L=an({},w[R.from],R,{key:M});L.valToPct=ie(L),w[M]=L}else{T=w[M]=an({},M==C?Z0:nE,R),T.key=M;let L=T.time,B=T.range,te=Ts(B);if((M!=C||s==2&&!L)&&(te&&(B[0]==null||B[1]==null)&&(B={min:B[0]==null?Pp:{mode:1,hard:B[0],soft:B[0]},max:B[1]==null?Pp:{mode:1,hard:B[1],soft:B[1]}},te=!1),!te&&nc(B))){let de=B;B=(ve,Se,Pe)=>Se==null?ca:Bl(Se,Pe,de)}T.range=pt(B||(L?mE:M==C?T.distr==3?vE:T.distr==4?_E:og:T.distr==3?lg:T.distr==4?cg:gE)),T.auto=pt(te?!1:T.auto),T.clamp=pt(T.clamp||tE),T._min=T._max=null,T.valToPct=ie(T)}}}S("x"),S("y"),s==1&&x.forEach(M=>{S(M.scale)}),y.forEach(M=>{S(M.scale)});for(let M in i.scales)S(M);const b=w[C],H=b.distr;let z,j;b.ori==0?(si(c,C1),z=r,j=a):(si(c,R1),z=a,j=r);const Z={};for(let M in w){let T=w[M];(T.min!=null||T.max!=null)&&(Z[M]={min:T.min,max:T.max},T.min=T.max=null)}const Y=i.tzDate||(M=>new Date(hn(M/p))),F=i.fmtDate||ad,ne=p==1?CT(Y):DT(Y),pe=Hp(Y,Bp(p==1?AT:PT,F)),le=Gp(Y,Vp(IT,F)),oe=[],me=n.legend=an({},NT,i.legend),he=n.cursor=an({},VT,{drag:{y:s==2}},i.cursor),se=me.show,fe=he.show,xe=me.markers;me.idxs=oe,xe.width=pt(xe.width),xe.dash=pt(xe.dash),xe.stroke=pt(xe.stroke),xe.fill=pt(xe.fill);let ge,Xe,Fe,He=[],rt=[],nt,N=!1,qt={};if(me.live){const M=x[1]?x[1].values:null;N=M!=null,nt=N?M(n,1,0):{_:0};for(let T in nt)qt[T]=ed}if(se)if(ge=bi("table",z1,c),Fe=bi("tbody",null,ge),me.mount(n,ge),N){Xe=bi("thead",null,ge,Fe);let M=bi("tr",null,Xe);bi("th",null,M);for(var ot in nt)bi("th",vp,M).textContent=ot}else si(ge,H1),me.live&&si(ge,B1);const ut={show:!0},Ke={show:!1};function Tt(M,T){if(T==0&&(N||!me.live||s==2))return ca;let R=[],L=bi("tr",V1,Fe,Fe.childNodes[T]);si(L,M.class),M.show||si(L,Zs);let B=bi("th",null,L);if(xe.show){let ve=ui(G1,B);if(T>0){let Se=xe.width(n,T);Se&&(ve.style.border=Se+"px "+xe.dash(n,T)+" "+xe.stroke(n,T)),ve.style.background=xe.fill(n,T)}}let te=ui(vp,B);M.label instanceof HTMLElement?te.appendChild(M.label):te.textContent=M.label,T>0&&(xe.show||(te.style.color=M.width>0?xe.stroke(n,T):xe.fill(n,T)),D("click",B,ve=>{if(he._lock)return;Sn(ve);let Se=x.indexOf(M);if((ve.ctrlKey||ve.metaKey)!=me.isolate){let Pe=x.some((Ue,ke)=>ke>0&&ke!=Se&&Ue.show);x.forEach((Ue,ke)=>{ke>0&&Ii(ke,Pe?ke==Se?ut:Ke:ut,!0,nn.setSeries)})}else Ii(Se,{show:!M.show},!0,nn.setSeries)},!1),jn&&D(Mp,B,ve=>{he._lock||(Sn(ve),Ii(x.indexOf(M),wr,!0,nn.setSeries))},!1));for(var de in nt){let ve=bi("td",W1,L);ve.textContent="--",R.push(ve)}return[L,R]}const Ye=new Map;function D(M,T,R,L=!0){const B=Ye.get(T)||{},te=he.bind[M](n,T,R,L);te&&(nr(M,T,B[M]=te),Ye.set(T,B))}function E(M,T,R){const L=Ye.get(T)||{};for(let B in L)(M==null||B==M)&&(mu(B,T,L[B]),delete L[B]);M==null&&Ye.delete(T)}let ee=0,ce=0,re=0,q=0,be=0,ye=0,De=be,lt=ye,_e=re,Le=q,Ve=0,We=0,Ee=0,et=0;n.bbox={};let tt=!1,St=!1,G=!1,Ae=!1,ae=!1,ue=!1;function Re(M,T,R){(R||M!=n.width||T!=n.height)&&Ie(M,T),gr(!1),G=!0,St=!0,vr()}function Ie(M,T){n.width=ee=re=M,n.height=ce=q=T,be=ye=0,vt(),Dn();let R=n.bbox;Ve=R.left=qs(be*bt,.5),We=R.top=qs(ye*bt,.5),Ee=R.width=qs(re*bt,.5),et=R.height=qs(q*bt,.5)}const mt=3;function jt(){let M=!1,T=0;for(;!M;){T++;let R=fg(T),L=pg(T);M=T==mt||R&&L,M||(Ie(n.width,n.height),St=!0)}}function Pn({width:M,height:T}){Re(M,T)}n.setSize=Pn;function vt(){let M=!1,T=!1,R=!1,L=!1;y.forEach((B,te)=>{if(B.show&&B._show){let{side:de,_size:ve}=B,Se=de%2,Pe=B.label!=null?B.labelSize:0,Ue=ve+Pe;Ue>0&&(Se?(re-=Ue,de==3?(be+=Ue,L=!0):R=!0):(q-=Ue,de==0?(ye+=Ue,M=!0):T=!0))}}),Wi[0]=M,Wi[1]=R,Wi[2]=T,Wi[3]=L,re-=$[1]+$[3],be+=$[3],q-=$[2]+$[0],ye+=$[0]}function Dn(){let M=be+re,T=ye+q,R=be,L=ye;function B(te,de){switch(te){case 1:return M+=de,M-de;case 2:return T+=de,T-de;case 3:return R-=de,R+de;case 0:return L-=de,L+de}}y.forEach((te,de)=>{if(te.show&&te._show){let ve=te.side;te._pos=B(ve,te._size),te.label!=null&&(te._lpos=B(ve,te.labelSize))}})}if(he.dataIdx==null){let M=he.hover,T=M.skip=new Set(M.skip??[]);T.add(void 0);let R=M.prox=pt(M.prox),L=M.bias??(M.bias=0);he.dataIdx=(B,te,de,ve)=>{if(te==0)return de;let Se=de,Pe=R(B,te,de,ve)??Ut,Ue=Pe>=0&&Pe<Ut,ke=b.ori==0?re:q,st=he.left,wt=e[0],xt=e[te];if(T.has(xt[de])){Se=null;let ft=null,Qe=null,$e;if(L==0||L==-1)for($e=de;ft==null&&$e-- >0;)T.has(xt[$e])||(ft=$e);if(L==0||L==1)for($e=de;Qe==null&&$e++<xt.length;)T.has(xt[$e])||(Qe=$e);if(ft!=null||Qe!=null)if(Ue){let Bt=ft==null?-1/0:z(wt[ft],b,ke,0),Yt=Qe==null?1/0:z(wt[Qe],b,ke,0),_n=st-Bt,Dt=Yt-st;_n<=Dt?_n<=Pe&&(Se=ft):Dt<=Pe&&(Se=Qe)}else Se=Qe==null?ft:ft==null?Qe:de-ft<=Qe-de?ft:Qe}else Ue&&un(st-z(wt[de],b,ke,0))>Pe&&(Se=null);return Se}}const Sn=M=>{he.event=M};he.idxs=oe,he._lock=!1;let ln=he.points;ln.show=pt(ln.show),ln.size=pt(ln.size),ln.stroke=pt(ln.stroke),ln.width=pt(ln.width),ln.fill=pt(ln.fill);const Jn=n.focus=an({},i.focus||{alpha:.3},he.focus),jn=Jn.prox>=0,Di=jn&&ln.one;let Nn=[],Gi=[],_i=[];function xa(M,T){let R=ln.show(n,T);if(R instanceof HTMLElement)return si(R,O1),si(R,M.class),ki(R,-10,-10,re,q),v.insertBefore(R,Nn[T]),R}function Fs(M,T){if(s==1||T>0){let R=s==1&&w[M.scale].time,L=M.value;M.value=R?Np(L)?Gp(Y,Vp(L,F)):L||le:L||JT,M.label=M.label||(R?WT:GT)}if(Di||T>0){M.width=M.width==null?1:M.width,M.paths=M.paths||dE||nT,M.fillTo=pt(M.fillTo||iE),M.pxAlign=+Mt(M.pxAlign,_),M.pxRound=Jp(M.pxAlign),M.stroke=pt(M.stroke||null),M.fill=pt(M.fill||null),M._stroke=M._fill=M._paths=M._focus=null;let R=QT($n(1,M.width),1),L=M.points=an({},{size:R,width:$n(1,R*.2),stroke:M.stroke,space:R*2,paths:fE,_stroke:null,_fill:null},M.points);L.show=pt(L.show),L.filter=pt(L.filter),L.fill=pt(L.fill),L.stroke=pt(L.stroke),L.paths=pt(L.paths),L.pxAlign=M.pxAlign}if(se){let R=Tt(M,T);He.splice(T,0,R[0]),rt.splice(T,0,R[1]),me.values.push(null)}if(fe){oe.splice(T,0,null);let R=null;Di?T==0&&(R=xa(M,T)):T>0&&(R=xa(M,T)),Nn.splice(T,0,R),Gi.splice(T,0,0),_i.splice(T,0,0)}vn("addSeries",T)}function mo(M,T){T=T??x.length,M=s==1?Mu(M,T,$p,Kp):Mu(M,T,{},Yp),x.splice(T,0,M),Fs(x[T],T)}n.addSeries=mo;function go(M){if(x.splice(M,1),se){me.values.splice(M,1),rt.splice(M,1);let T=He.splice(M,1)[0];E(null,T.firstChild),T.remove()}fe&&(oe.splice(M,1),Nn.splice(M,1)[0].remove(),Gi.splice(M,1),_i.splice(M,1)),vn("delSeries",M)}n.delSeries=go;const Wi=[!1,!1,!1,!1];function oc(M,T){if(M._show=M.show,M.show){let R=M.side%2,L=w[M.scale];L==null&&(M.scale=R?x[1].scale:C,L=w[M.scale]);let B=L.time;M.size=pt(M.size),M.space=pt(M.space),M.rotate=pt(M.rotate),Ts(M.incrs)&&M.incrs.forEach(de=>{!Is.has(de)&&Is.set(de,L0(de))}),M.incrs=pt(M.incrs||(L.distr==2?bT:B?p==1?ET:RT:js)),M.splits=pt(M.splits||(B&&L.distr==1?ne:L.distr==3?vu:L.distr==4?qT:XT)),M.stroke=pt(M.stroke),M.grid.stroke=pt(M.grid.stroke),M.ticks.stroke=pt(M.ticks.stroke),M.border.stroke=pt(M.border.stroke);let te=M.values;M.values=Ts(te)&&!Ts(te[0])?pt(te):B?Ts(te)?Hp(Y,Bp(te,F)):Np(te)?LT(Y,te):te||pe:te||$T,M.filter=pt(M.filter||(L.distr>=3&&L.log==10?KT:L.distr==3&&L.log==2?ZT:P0)),M.font=nm(M.font),M.labelFont=nm(M.labelFont),M._size=M.size(n,null,T,0),M._space=M._rotate=M._incrs=M._found=M._splits=M._values=null,M._size>0&&(Wi[T]=!0,M._el=ui(U1,h))}}function Ns(M,T,R,L){let[B,te,de,ve]=R,Se=T%2,Pe=0;return Se==0&&(ve||te)&&(Pe=T==0&&!B||T==2&&!de?hn(Wp.size/3):0),Se==1&&(B||de)&&(Pe=T==1&&!te||T==3&&!ve?hn(qp.size/2):0),Pe}const A=n.padding=(i.padding||[Ns,Ns,Ns,Ns]).map(M=>pt(Mt(M,Ns))),$=n._padding=A.map((M,T)=>M(n,T,Wi,0));let K,J=null,V=null;const Me=s==1?x[0].idxs:null;let Te=null,Ne=!1;function Be(M,T){if(e=M??[],n.data=n._data=e,s==2){K=0;for(let R=1;R<x.length;R++)K+=e[R][0].length}else{e.length==0&&(n.data=n._data=e=[[]]),Te=e[0],K=Te.length;let R=e;if(H==2){R=e.slice();let L=R[0]=Array(K);for(let B=0;B<K;B++)L[B]=B}n._data=e=R}if(gr(!0),vn("setData"),H==2&&(G=!0),T!==!1){let R=b;R.auto(n,Ne)?Ze():us(C,R.min,R.max),Ae=Ae||he.left>=0,ue=!0,vr()}}n.setData=Be;function Ze(){Ne=!0;let M,T;s==1&&(K>0?(J=Me[0]=0,V=Me[1]=K-1,M=e[0][J],T=e[0][V],H==2?(M=J,T=V):M==T&&(H==3?[M,T]=ec(M,M,b.log,!1):H==4?[M,T]=nd(M,M,b.log,!1):b.time?T=M+hn(86400/p):[M,T]=Bl(M,T,id,!0))):(J=Me[0]=M=null,V=Me[1]=T=null)),us(C,M,T)}let Je,ze,_t,Rt,Nt,wn,gt,Ge,Jt,it;function Yn(M,T,R,L,B,te){M??(M=xp),R??(R=rd),L??(L="butt"),B??(B=xp),te??(te="round"),M!=Je&&(d.strokeStyle=Je=M),B!=ze&&(d.fillStyle=ze=B),T!=_t&&(d.lineWidth=_t=T),te!=Nt&&(d.lineJoin=Nt=te),L!=wn&&(d.lineCap=wn=L),R!=Rt&&d.setLineDash(Rt=R)}function $i(M,T,R,L){T!=ze&&(d.fillStyle=ze=T),M!=gt&&(d.font=gt=M),R!=Ge&&(d.textAlign=Ge=R),L!=Jt&&(d.textBaseline=Jt=L)}function bn(M,T,R,L,B=0){if(L.length>0&&M.auto(n,Ne)&&(T==null||T.min==null)){let te=Mt(J,0),de=Mt(V,L.length-1),ve=R.min==null?K1(L,te,de,B,M.distr==3):[R.min,R.max];M.min=Ri(M.min,R.min=ve[0]),M.max=$n(M.max,R.max=ve[1])}}const pr={min:null,max:null};function $t(){for(let L in w){let B=w[L];Z[L]==null&&(B.min==null||Z[C]!=null&&B.auto(n,Ne))&&(Z[L]=pr)}for(let L in w){let B=w[L];Z[L]==null&&B.from!=null&&Z[B.from]!=null&&(Z[L]=pr)}Z[C]!=null&&gr(!0);let M={};for(let L in Z){let B=Z[L];if(B!=null){let te=M[L]=ha(w[L],rT);if(B.min!=null)an(te,B);else if(L!=C||s==2)if(K==0&&te.from==null){let de=te.range(n,null,null,L);te.min=de[0],te.max=de[1]}else te.min=Ut,te.max=-Ut}}if(K>0){x.forEach((L,B)=>{if(s==1){let te=L.scale,de=Z[te];if(de==null)return;let ve=M[te];if(B==0){let Se=ve.range(n,ve.min,ve.max,te);ve.min=Se[0],ve.max=Se[1],J=Ei(ve.min,e[0]),V=Ei(ve.max,e[0]),V-J>1&&(e[0][J]<ve.min&&J++,e[0][V]>ve.max&&V--),L.min=Te[J],L.max=Te[V]}else L.show&&L.auto&&bn(ve,de,L,e[B],L.sorted);L.idxs[0]=J,L.idxs[1]=V}else if(B>0&&L.show&&L.auto){let[te,de]=L.facets,ve=te.scale,Se=de.scale,[Pe,Ue]=e[B],ke=M[ve],st=M[Se];ke!=null&&bn(ke,Z[ve],te,Pe,te.sorted),st!=null&&bn(st,Z[Se],de,Ue,de.sorted),L.min=de.min,L.max=de.max}});for(let L in M){let B=M[L],te=Z[L];if(B.from==null&&(te==null||te.min==null)){let de=B.range(n,B.min==Ut?null:B.min,B.max==-Ut?null:B.max,L);B.min=de[0],B.max=de[1]}}}for(let L in M){let B=M[L];if(B.from!=null){let te=M[B.from];if(te.min==null)B.min=B.max=null;else{let de=B.range(n,te.min,te.max,L);B.min=de[0],B.max=de[1]}}}let T={},R=!1;for(let L in M){let B=M[L],te=w[L];if(te.min!=B.min||te.max!=B.max){te.min=B.min,te.max=B.max;let de=te.distr;te._min=de==3?rs(te.min):de==4?lh(te.min,te.asinh):de==100?te.fwd(te.min):te.min,te._max=de==3?rs(te.max):de==4?lh(te.max,te.asinh):de==100?te.fwd(te.max):te.max,T[L]=R=!0}}if(R){x.forEach((L,B)=>{s==2?B>0&&T.y&&(L._paths=null):T[L.scale]&&(L._paths=null)});for(let L in T)G=!0,vn("setScale",L);fe&&he.left>=0&&(Ae=ue=!0)}for(let L in Z)Z[L]=null}function Li(M){let T=gu(J-1,0,K-1),R=gu(V+1,0,K-1);for(;M[T]==null&&T>0;)T--;for(;M[R]==null&&R<K-1;)R++;return[T,R]}function ya(){if(K>0){let M=x.some(T=>T._focus)&&it!=Jn.alpha;M&&(d.globalAlpha=it=Jn.alpha),x.forEach((T,R)=>{if(R>0&&T.show&&(kn(R,!1),kn(R,!0),T._paths==null)){let L=it;it!=T.alpha&&(d.globalAlpha=it=T.alpha);let B=s==2?[0,e[R][0].length-1]:Li(e[R]);T._paths=T.paths(n,R,B[0],B[1]),it!=L&&(d.globalAlpha=it=L)}}),x.forEach((T,R)=>{if(R>0&&T.show){let L=it;it!=T.alpha&&(d.globalAlpha=it=T.alpha),T._paths!=null&&mr(R,!1);{let B=T._paths!=null?T._paths.gaps:null,te=T.points.show(n,R,J,V,B),de=T.points.filter(n,R,te,B);(te||de)&&(T.points._paths=T.points.paths(n,R,J,V,de),mr(R,!0))}it!=L&&(d.globalAlpha=it=L),vn("drawSeries",R)}}),M&&(d.globalAlpha=it=1)}}function kn(M,T){let R=T?x[M].points:x[M];R._stroke=R.stroke(n,M),R._fill=R.fill(n,M)}function mr(M,T){let R=T?x[M].points:x[M],{stroke:L,fill:B,clip:te,flags:de,_stroke:ve=R._stroke,_fill:Se=R._fill,_width:Pe=R.width}=R._paths;Pe=Ft(Pe*bt,3);let Ue=null,ke=Pe%2/2;T&&Se==null&&(Se=Pe>0?"#fff":ve);let st=R.pxAlign==1&&ke>0;if(st&&d.translate(ke,ke),!T){let wt=Ve-Pe/2,xt=We-Pe/2,ft=Ee+Pe,Qe=et+Pe;Ue=new Path2D,Ue.rect(wt,xt,ft,Qe)}T?cc(ve,Pe,R.dash,R.cap,Se,L,B,de,te):lc(M,ve,Pe,R.dash,R.cap,Se,L,B,de,Ue,te),st&&d.translate(-ke,-ke)}function lc(M,T,R,L,B,te,de,ve,Se,Pe,Ue){let ke=!1;Se!=0&&I.forEach((st,wt)=>{if(st.series[0]==M){let xt=x[st.series[1]],ft=e[st.series[1]],Qe=(xt._paths||Qa).band;Ts(Qe)&&(Qe=st.dir==1?Qe[0]:Qe[1]);let $e,Bt=null;xt.show&&Qe&&J1(ft,J,V)?(Bt=st.fill(n,wt)||te,$e=xt._paths.clip):Qe=null,cc(T,R,L,B,Bt,de,ve,Se,Pe,Ue,$e,Qe),ke=!0}}),ke||cc(T,R,L,B,te,de,ve,Se,Pe,Ue)}const Ma=ua|xu;function cc(M,T,R,L,B,te,de,ve,Se,Pe,Ue,ke){Yn(M,T,R,L,B),(Se||Pe||ke)&&(d.save(),Se&&d.clip(Se),Pe&&d.clip(Pe)),ke?(ve&Ma)==Ma?(d.clip(ke),Ue&&d.clip(Ue),_o(B,de),vo(M,te,T)):ve&xu?(_o(B,de),d.clip(ke),vo(M,te,T)):ve&ua&&(d.save(),d.clip(ke),Ue&&d.clip(Ue),_o(B,de),d.restore(),vo(M,te,T)):(_o(B,de),vo(M,te,T)),(Se||Pe||ke)&&d.restore()}function vo(M,T,R){R>0&&(T instanceof Map?T.forEach((L,B)=>{d.strokeStyle=Je=B,d.stroke(L)}):T!=null&&M&&d.stroke(T))}function _o(M,T){T instanceof Map?T.forEach((R,L)=>{d.fillStyle=ze=L,d.fill(R)}):T!=null&&M&&d.fill(T)}function dg(M,T,R,L){let B=y[M],te;if(L<=0)te=[0,0];else{let de=B._space=B.space(n,M,T,R,L),ve=B._incrs=B.incrs(n,M,T,R,L,de);te=xE(T,R,ve,L,de)}return B._found=te}function hc(M,T,R,L,B,te,de,ve,Se,Pe){let Ue=de%2/2;_==1&&d.translate(Ue,Ue),Yn(ve,de,Se,Pe,ve),d.beginPath();let ke,st,wt,xt,ft=B+(L==0||L==3?-te:te);R==0?(st=B,xt=ft):(ke=B,wt=ft);for(let Qe=0;Qe<M.length;Qe++)T[Qe]!=null&&(R==0?ke=wt=M[Qe]:st=xt=M[Qe],d.moveTo(ke,st),d.lineTo(wt,xt));d.stroke(),_==1&&d.translate(-Ue,-Ue)}function fg(M){let T=!0;return y.forEach((R,L)=>{if(!R.show)return;let B=w[R.scale];if(B.min==null){R._show&&(T=!1,R._show=!1,gr(!1));return}else R._show||(T=!1,R._show=!0,gr(!1));let te=R.side,de=te%2,{min:ve,max:Se}=B,[Pe,Ue]=dg(L,ve,Se,de==0?re:q);if(Ue==0)return;let ke=B.distr==2,st=R._splits=R.splits(n,L,ve,Se,Pe,Ue,ke),wt=B.distr==2?st.map($e=>Te[$e]):st,xt=B.distr==2?Te[st[1]]-Te[st[0]]:Pe,ft=R._values=R.values(n,R.filter(n,wt,L,Ue,xt),L,Ue,xt);R._rotate=te==2?R.rotate(n,ft,L,Ue):0;let Qe=R._size;R._size=fi(R.size(n,ft,L,M)),Qe!=null&&R._size!=Qe&&(T=!1)}),T}function pg(M){let T=!0;return A.forEach((R,L)=>{let B=R(n,L,Wi,M);B!=$[L]&&(T=!1),$[L]=B}),T}function mg(){for(let M=0;M<y.length;M++){let T=y[M];if(!T.show||!T._show)continue;let R=T.side,L=R%2,B,te,de=T.stroke(n,M),ve=R==0||R==3?-1:1,[Se,Pe]=T._found;if(T.label!=null){let zn=T.labelGap*ve,ti=hn((T._lpos+zn)*bt);$i(T.labelFont[0],de,"center",R==2?Na:_p),d.save(),L==1?(B=te=0,d.translate(ti,hn(We+et/2)),d.rotate((R==3?-xl:xl)/2)):(B=hn(Ve+Ee/2),te=ti);let zs=C0(T.label)?T.label(n,M,Se,Pe):T.label;d.fillText(zs,B,te),d.restore()}if(Pe==0)continue;let Ue=w[T.scale],ke=L==0?Ee:et,st=L==0?Ve:We,wt=T._splits,xt=Ue.distr==2?wt.map(zn=>Te[zn]):wt,ft=Ue.distr==2?Te[wt[1]]-Te[wt[0]]:Se,Qe=T.ticks,$e=T.border,Bt=Qe.show?Qe.size:0,Yt=hn(Bt*bt),_n=hn((T.alignTo==2?T._size-Bt-T.gap:T.gap)*bt),Dt=T._rotate*-xl/180,Kt=m(T._pos*bt),Qn=(Yt+_n)*ve,On=Kt+Qn;te=L==0?On:0,B=L==1?On:0;let li=T.font[0],xi=T.align==1?Br:T.align==2?rh:Dt>0?Br:Dt<0?rh:L==0?"center":R==3?rh:Br,Fi=Dt||L==1?"middle":R==2?Na:_p;$i(li,de,xi,Fi);let ei=T.font[1]*T.lineGap,ci=wt.map(zn=>m(o(zn,Ue,ke,st))),yi=T._values;for(let zn=0;zn<yi.length;zn++){let ti=yi[zn];if(ti!=null){L==0?B=ci[zn]:te=ci[zn],ti=""+ti;let zs=ti.indexOf(`
`)==-1?[ti]:ti.split(/\n/gm);for(let Bn=0;Bn<zs.length;Bn++){let Dd=zs[Bn];Dt?(d.save(),d.translate(B,te+Bn*ei),d.rotate(Dt),d.fillText(Dd,0,0),d.restore()):d.fillText(Dd,B,te+Bn*ei)}}}Qe.show&&hc(ci,Qe.filter(n,xt,M,Pe,ft),L,R,Kt,Yt,Ft(Qe.width*bt,3),Qe.stroke(n,M),Qe.dash,Qe.cap);let Ni=T.grid;Ni.show&&hc(ci,Ni.filter(n,xt,M,Pe,ft),L,L==0?2:1,L==0?We:Ve,L==0?et:Ee,Ft(Ni.width*bt,3),Ni.stroke(n,M),Ni.dash,Ni.cap),$e.show&&hc([Kt],[1],L==0?1:0,L==0?1:2,L==1?We:Ve,L==1?et:Ee,Ft($e.width*bt,3),$e.stroke(n,M),$e.dash,$e.cap)}vn("drawAxes")}function gr(M){x.forEach((T,R)=>{R>0&&(T._paths=null,M&&(s==1?(T.min=null,T.max=null):T.facets.forEach(L=>{L.min=null,L.max=null})))})}let xo=!1,uc=!1,Sa=[];function gg(){uc=!1;for(let M=0;M<Sa.length;M++)vn(...Sa[M]);Sa.length=0}function vr(){xo||(dT(fd),xo=!0)}function vg(M,T=!1){xo=!0,uc=T,M(n),fd(),T&&Sa.length>0&&queueMicrotask(gg)}n.batch=vg;function fd(){if(tt&&($t(),tt=!1),G&&(jt(),G=!1),St){if(Ht(f,Br,be),Ht(f,Na,ye),Ht(f,Ha,re),Ht(f,Va,q),Ht(v,Br,be),Ht(v,Na,ye),Ht(v,Ha,re),Ht(v,Va,q),Ht(h,Ha,ee),Ht(h,Va,ce),u.width=hn(ee*bt),u.height=hn(ce*bt),y.forEach(({_el:M,_show:T,_size:R,_pos:L,side:B})=>{if(M!=null)if(T){let te=B===3||B===0?R:0,de=B%2==1;Ht(M,de?"left":"top",L-te),Ht(M,de?"width":"height",R),Ht(M,de?"top":"left",de?ye:be),Ht(M,de?"height":"width",de?q:re),pu(M,Zs)}else si(M,Zs)}),Je=ze=_t=Nt=wn=gt=Ge=Jt=Rt=null,it=1,Ta(!0),be!=De||ye!=lt||re!=_e||q!=Le){gr(!1);let M=re/_e,T=q/Le;if(fe&&!Ae&&he.left>=0){he.left*=M,he.top*=T,_r&&ki(_r,hn(he.left),0,re,q),xr&&ki(xr,0,hn(he.top),re,q);for(let R=0;R<Nn.length;R++){let L=Nn[R];L!=null&&(Gi[R]*=M,_i[R]*=T,ki(L,fi(Gi[R]),fi(_i[R]),re,q))}}if(zt.show&&!ae&&zt.left>=0&&zt.width>0){zt.left*=M,zt.width*=M,zt.top*=T,zt.height*=T;for(let R in vc)Ht(Sr,R,zt[R])}De=be,lt=ye,_e=re,Le=q}vn("setSize"),St=!1}ee>0&&ce>0&&(d.clearRect(0,0,u.width,u.height),vn("drawClear"),U.forEach(M=>M()),vn("draw")),zt.show&&ae&&(yo(zt),ae=!1),fe&&Ae&&(Os(null,!0,!1),Ae=!1),me.show&&me.live&&ue&&(mc(),ue=!1),l||(l=!0,n.status=1,vn("ready")),Ne=!1,xo=!1}n.redraw=(M,T)=>{G=T||!1,M!==!1?us(C,b.min,b.max):vr()};function dc(M,T){let R=w[M];if(R.from==null){if(K==0){let L=R.range(n,T.min,T.max,M);T.min=L[0],T.max=L[1]}if(T.min>T.max){let L=T.min;T.min=T.max,T.max=L}if(K>1&&T.min!=null&&T.max!=null&&T.max-T.min<1e-16)return;M==C&&R.distr==2&&K>0&&(T.min=Ei(T.min,e[0]),T.max=Ei(T.max,e[0]),T.min==T.max&&T.max++),Z[M]=T,tt=!0,vr()}}n.setScale=dc;let fc,pc,_r,xr,pd,md,yr,Mr,gd,vd,Ot,Gt,hs=!1;const Tn=he.drag;let mn=Tn.x,gn=Tn.y;fe&&(he.x&&(fc=ui(N1,v)),he.y&&(pc=ui(k1,v)),b.ori==0?(_r=fc,xr=pc):(_r=pc,xr=fc),Ot=he.left,Gt=he.top);const zt=n.select=an({show:!0,over:!0,left:0,width:0,top:0,height:0},i.select),Sr=zt.show?ui(F1,zt.over?v:f):null;function yo(M,T){if(zt.show){for(let R in M)zt[R]=M[R],R in vc&&Ht(Sr,R,M[R]);T!==!1&&vn("setSelect")}}n.setSelect=yo;function _g(M){if(x[M].show)se&&pu(He[M],Zs);else if(se&&si(He[M],Zs),fe){let R=Di?Nn[0]:Nn[M];R!=null&&ki(R,-10,-10,re,q)}}function us(M,T,R){dc(M,{min:T,max:R})}function Ii(M,T,R,L){T.focus!=null&&wg(M),T.show!=null&&x.forEach((B,te)=>{te>0&&(M==te||M==null)&&(B.show=T.show,_g(te),s==2?(us(B.facets[0].scale,null,null),us(B.facets[1].scale,null,null)):us(B.scale,null,null),vr())}),R!==!1&&vn("setSeries",M,T),L&&Ea("setSeries",n,M,T)}n.setSeries=Ii;function xg(M,T){an(I[M],T)}function yg(M,T){M.fill=pt(M.fill||null),M.dir=Mt(M.dir,-1),T=T??I.length,I.splice(T,0,M)}function Mg(M){M==null?I.length=0:I.splice(M,1)}n.addBand=yg,n.setBand=xg,n.delBand=Mg;function Sg(M,T){x[M].alpha=T,fe&&Nn[M]!=null&&(Nn[M].style.opacity=T),se&&He[M]&&(He[M].style.opacity=T)}let Xi,ds,ks;const wr={focus:!0};function wg(M){if(M!=ks){let T=M==null,R=Jn.alpha!=1;x.forEach((L,B)=>{if(s==1||B>0){let te=T||B==0||B==M;L._focus=T?null:te,R&&Sg(B,te?1:Jn.alpha)}}),ks=M,R&&vr()}}se&&jn&&D(Sp,ge,M=>{he._lock||(Sn(M),ks!=null&&Ii(null,wr,!0,nn.setSeries))});function Ui(M,T,R){let L=w[T];R&&(M=M/bt-(L.ori==1?ye:be));let B=re;L.ori==1&&(B=q,M=B-M),L.dir==-1&&(M=B-M);let te=L._min,de=L._max,ve=M/B,Se=te+(de-te)*ve,Pe=L.distr;return Pe==3?la(10,Se):Pe==4?eT(Se,L.asinh):Pe==100?L.bwd(Se):Se}function bg(M,T){let R=Ui(M,C,T);return Ei(R,e[0],J,V)}n.valToIdx=M=>Ei(M,e[0]),n.posToIdx=bg,n.posToVal=Ui,n.valToPos=(M,T,R)=>w[T].ori==0?r(M,w[T],R?Ee:re,R?Ve:0):a(M,w[T],R?et:q,R?We:0),n.setCursor=(M,T,R)=>{Ot=M.left,Gt=M.top,Os(null,T,R)};function _d(M,T){Ht(Sr,Br,zt.left=M),Ht(Sr,Ha,zt.width=T)}function xd(M,T){Ht(Sr,Na,zt.top=M),Ht(Sr,Va,zt.height=T)}let wa=b.ori==0?_d:xd,ba=b.ori==1?_d:xd;function Tg(){if(se&&me.live)for(let M=s==2?1:0;M<x.length;M++){if(M==0&&N)continue;let T=me.values[M],R=0;for(let L in T)rt[M][R++].firstChild.nodeValue=T[L]}}function mc(M,T){if(M!=null&&(M.idxs?M.idxs.forEach((R,L)=>{oe[L]=R}):sT(M.idx)||oe.fill(M.idx),me.idx=oe[0]),se&&me.live){for(let R=0;R<x.length;R++)(R>0||s==1&&!N)&&Eg(R,oe[R]);Tg()}ue=!1,T!==!1&&vn("setLegend")}n.setLegend=mc;function Eg(M,T){let R=x[M],L=M==0&&H==2?Te:e[M],B;N?B=R.values(n,M,T)??qt:(B=R.value(n,T==null?null:L[T],M,T),B=B==null?qt:{_:B}),me.values[M]=B}function Os(M,T,R){gd=Ot,vd=Gt,[Ot,Gt]=he.move(n,Ot,Gt),he.left=Ot,he.top=Gt,fe&&(_r&&ki(_r,hn(Ot),0,re,q),xr&&ki(xr,0,hn(Gt),re,q));let L,B=J>V;Xi=Ut,ds=null;let te=b.ori==0?re:q,de=b.ori==1?re:q;if(Ot<0||K==0||B){L=he.idx=null;for(let ve=0;ve<x.length;ve++){let Se=Nn[ve];Se!=null&&ki(Se,-10,-10,re,q)}jn&&Ii(null,wr,!0,M==null&&nn.setSeries),me.live&&(oe.fill(L),ue=!0)}else{let ve,Se,Pe;s==1&&(ve=b.ori==0?Ot:Gt,Se=Ui(ve,C),L=he.idx=Ei(Se,e[0],J,V),Pe=z(e[0][L],b,te,0));let Ue=-10,ke=-10,st=0,wt=0,xt=!0,ft="",Qe="";for(let $e=s==2?1:0;$e<x.length;$e++){let Bt=x[$e],Yt=oe[$e],_n=Yt==null?null:s==1?e[$e][Yt]:e[$e][1][Yt],Dt=he.dataIdx(n,$e,L,Se),Kt=Dt==null?null:s==1?e[$e][Dt]:e[$e][1][Dt];if(ue=ue||Kt!=_n||Dt!=Yt,oe[$e]=Dt,$e>0&&Bt.show){let Qn=Dt==null?-10:Dt==L?Pe:z(s==1?e[0][Dt]:e[$e][0][Dt],b,te,0),On=Kt==null?-10:j(Kt,s==1?w[Bt.scale]:w[Bt.facets[1].scale],de,0);if(jn&&Kt!=null){let li=b.ori==1?Ot:Gt,xi=un(Jn.dist(n,$e,Dt,On,li));if(xi<Xi){let Fi=Jn.bias;if(Fi!=0){let ei=Ui(li,Bt.scale),ci=Kt>=0?1:-1,yi=ei>=0?1:-1;yi==ci&&(yi==1?Fi==1?Kt>=ei:Kt<=ei:Fi==1?Kt<=ei:Kt>=ei)&&(Xi=xi,ds=$e)}else Xi=xi,ds=$e}}if(ue||Di){let li,xi;b.ori==0?(li=Qn,xi=On):(li=On,xi=Qn);let Fi,ei,ci,yi,Ni,zn,ti=!0,zs=ln.bbox;if(zs!=null){ti=!1;let Bn=zs(n,$e);ci=Bn.left,yi=Bn.top,Fi=Bn.width,ei=Bn.height}else ci=li,yi=xi,Fi=ei=ln.size(n,$e);if(zn=ln.fill(n,$e),Ni=ln.stroke(n,$e),Di)$e==ds&&Xi<=Jn.prox&&(Ue=ci,ke=yi,st=Fi,wt=ei,xt=ti,ft=zn,Qe=Ni);else{let Bn=Nn[$e];Bn!=null&&(Gi[$e]=ci,_i[$e]=yi,Rp(Bn,Fi,ei,ti),Ap(Bn,zn,Ni),ki(Bn,fi(ci),fi(yi),re,q))}}}}if(Di){let $e=Jn.prox,Bt=ks==null?Xi<=$e:Xi>$e||ds!=ks;if(ue||Bt){let Yt=Nn[0];Yt!=null&&(Gi[0]=Ue,_i[0]=ke,Rp(Yt,st,wt,xt),Ap(Yt,ft,Qe),ki(Yt,fi(Ue),fi(ke),re,q))}}}if(zt.show&&hs)if(M!=null){let[ve,Se]=nn.scales,[Pe,Ue]=nn.match,[ke,st]=M.cursor.sync.scales,wt=M.cursor.drag;if(mn=wt._x,gn=wt._y,mn||gn){let{left:xt,top:ft,width:Qe,height:$e}=M.select,Bt=M.scales[ke].ori,Yt=M.posToVal,_n,Dt,Kt,Qn,On,li=ve!=null&&Pe(ve,ke),xi=Se!=null&&Ue(Se,st);li&&mn?(Bt==0?(_n=xt,Dt=Qe):(_n=ft,Dt=$e),Kt=w[ve],Qn=z(Yt(_n,ke),Kt,te,0),On=z(Yt(_n+Dt,ke),Kt,te,0),wa(Ri(Qn,On),un(On-Qn))):wa(0,te),xi&&gn?(Bt==1?(_n=xt,Dt=Qe):(_n=ft,Dt=$e),Kt=w[Se],Qn=j(Yt(_n,st),Kt,de,0),On=j(Yt(_n+Dt,st),Kt,de,0),ba(Ri(Qn,On),un(On-Qn))):ba(0,de)}else _c()}else{let ve=un(gd-pd),Se=un(vd-md);if(b.ori==1){let st=ve;ve=Se,Se=st}mn=Tn.x&&ve>=Tn.dist,gn=Tn.y&&Se>=Tn.dist;let Pe=Tn.uni;Pe!=null?mn&&gn&&(mn=ve>=Pe,gn=Se>=Pe,!mn&&!gn&&(Se>ve?gn=!0:mn=!0)):Tn.x&&Tn.y&&(mn||gn)&&(mn=gn=!0);let Ue,ke;mn&&(b.ori==0?(Ue=yr,ke=Ot):(Ue=Mr,ke=Gt),wa(Ri(Ue,ke),un(ke-Ue)),gn||ba(0,de)),gn&&(b.ori==1?(Ue=yr,ke=Ot):(Ue=Mr,ke=Gt),ba(Ri(Ue,ke),un(ke-Ue)),mn||wa(0,te)),!mn&&!gn&&(wa(0,0),ba(0,0))}if(Tn._x=mn,Tn._y=gn,M==null){if(R){if(Pd!=null){let[ve,Se]=nn.scales;nn.values[0]=ve!=null?Ui(b.ori==0?Ot:Gt,ve):null,nn.values[1]=Se!=null?Ui(b.ori==1?Ot:Gt,Se):null}Ea(ah,n,Ot,Gt,re,q,L)}if(jn){let ve=R&&nn.setSeries,Se=Jn.prox;ks==null?Xi<=Se&&Ii(ds,wr,!0,ve):Xi>Se?Ii(null,wr,!0,ve):ds!=ks&&Ii(ds,wr,!0,ve)}}ue&&(me.idx=L,mc()),T!==!1&&vn("setCursor")}let fs=null;Object.defineProperty(n,"rect",{get(){return fs==null&&Ta(!1),fs}});function Ta(M=!1){M?fs=null:(fs=v.getBoundingClientRect(),vn("syncRect",fs))}function yd(M,T,R,L,B,te,de){he._lock||hs&&M!=null&&M.movementX==0&&M.movementY==0||(gc(M,T,R,L,B,te,de,!1,M!=null),M!=null?Os(null,!0,!0):Os(T,!0,!1))}function gc(M,T,R,L,B,te,de,ve,Se){if(fs==null&&Ta(!1),Sn(M),M!=null)R=M.clientX-fs.left,L=M.clientY-fs.top;else{if(R<0||L<0){Ot=-10,Gt=-10;return}let[Pe,Ue]=nn.scales,ke=T.cursor.sync,[st,wt]=ke.values,[xt,ft]=ke.scales,[Qe,$e]=nn.match,Bt=T.axes[0].side%2==1,Yt=b.ori==0?re:q,_n=b.ori==1?re:q,Dt=Bt?te:B,Kt=Bt?B:te,Qn=Bt?L:R,On=Bt?R:L;if(xt!=null?R=Qe(Pe,xt)?o(st,w[Pe],Yt,0):-10:R=Yt*(Qn/Dt),ft!=null?L=$e(Ue,ft)?o(wt,w[Ue],_n,0):-10:L=_n*(On/Kt),b.ori==1){let li=R;R=L,L=li}}Se&&(T==null||T.cursor.event.type==ah)&&((R<=1||R>=re-1)&&(R=qs(R,re)),(L<=1||L>=q-1)&&(L=qs(L,q))),ve?(pd=R,md=L,[yr,Mr]=he.move(n,R,L)):(Ot=R,Gt=L)}const vc={width:0,height:0,left:0,top:0};function _c(){yo(vc,!1)}let Md,Sd,wd,bd;function Td(M,T,R,L,B,te,de){hs=!0,mn=gn=Tn._x=Tn._y=!1,gc(M,T,R,L,B,te,de,!0,!1),M!=null&&(D(oh,du,Ed,!1),Ea(yp,n,yr,Mr,re,q,null));let{left:ve,top:Se,width:Pe,height:Ue}=zt;Md=ve,Sd=Se,wd=Pe,bd=Ue}function Ed(M,T,R,L,B,te,de){hs=Tn._x=Tn._y=!1,gc(M,T,R,L,B,te,de,!1,!0);let{left:ve,top:Se,width:Pe,height:Ue}=zt,ke=Pe>0||Ue>0,st=Md!=ve||Sd!=Se||wd!=Pe||bd!=Ue;if(ke&&st&&yo(zt),Tn.setScale&&ke&&st){let wt=ve,xt=Pe,ft=Se,Qe=Ue;if(b.ori==1&&(wt=Se,xt=Ue,ft=ve,Qe=Pe),mn&&us(C,Ui(wt,C),Ui(wt+xt,C)),gn)for(let $e in w){let Bt=w[$e];$e!=C&&Bt.from==null&&Bt.min!=Ut&&us($e,Ui(ft+Qe,$e),Ui(ft,$e))}_c()}else he.lock&&(he._lock=!he._lock,Os(T,!0,M!=null));M!=null&&(E(oh,du),Ea(oh,n,Ot,Gt,re,q,null))}function Ag(M,T,R,L,B,te,de){if(he._lock)return;Sn(M);let ve=hs;if(hs){let Se=!0,Pe=!0,Ue=10,ke,st;b.ori==0?(ke=mn,st=gn):(ke=gn,st=mn),ke&&st&&(Se=Ot<=Ue||Ot>=re-Ue,Pe=Gt<=Ue||Gt>=q-Ue),ke&&Se&&(Ot=Ot<yr?0:re),st&&Pe&&(Gt=Gt<Mr?0:q),Os(null,!0,!0),hs=!1}Ot=-10,Gt=-10,oe.fill(null),Os(null,!0,!0),ve&&(hs=ve)}function Ad(M,T,R,L,B,te,de){he._lock||(Sn(M),Ze(),_c(),M!=null&&Ea(wp,n,Ot,Gt,re,q,null))}function Cd(){y.forEach(yE),Re(n.width,n.height,!0)}nr(zl,ta,Cd);const br={};br.mousedown=Td,br.mousemove=yd,br.mouseup=Ed,br.dblclick=Ad,br.setSeries=(M,T,R,L)=>{let B=nn.match[2];R=B(n,T,R),R!=-1&&Ii(R,L,!0,!1)},fe&&(D(yp,v,Td),D(ah,v,yd),D(Mp,v,M=>{Sn(M),Ta(!1)}),D(Sp,v,Ag),D(wp,v,Ad),yu.add(n),n.syncRect=Ta);const Mo=n.hooks=i.hooks||{};function vn(M,T,R){uc?Sa.push([M,T,R]):M in Mo&&Mo[M].forEach(L=>{L.call(null,n,T,R)})}(i.plugins||[]).forEach(M=>{for(let T in M.hooks)Mo[T]=(Mo[T]||[]).concat(M.hooks[T])});const Rd=(M,T,R)=>R,nn=an({key:null,setSeries:!1,filters:{pub:Up,sub:Up},scales:[C,x[1]?x[1].scale:null],match:[Fp,Fp,Rd],values:[null,null]},he.sync);nn.match.length==2&&nn.match.push(Rd),he.sync=nn;const Pd=nn.key,xc=J0(Pd);function Ea(M,T,R,L,B,te,de){nn.filters.pub(M,T,R,L,B,te,de)&&xc.pub(M,T,R,L,B,te,de)}xc.sub(n);function Cg(M,T,R,L,B,te,de){nn.filters.sub(M,T,R,L,B,te,de)&&br[M](null,T,R,L,B,te,de)}n.pub=Cg;function Rg(){xc.unsub(n),yu.delete(n),Ye.clear(),mu(zl,ta,Cd),c.remove(),ge?.remove(),vn("destroy")}n.destroy=Rg;function yc(){vn("init",i,e),Be(e||i.data,!1),Z[C]?dc(C,Z[C]):Ze(),ae=zt.show&&(zt.width>0||zt.height>0),Ae=ue=!0,Re(i.width,i.height)}return x.forEach(Fs),y.forEach(oc),t?t instanceof HTMLElement?(t.appendChild(c),yc()):t(n,yc):yc(),n}Mn.assign=an;Mn.fmtNum=sd;Mn.rangeNum=Bl;Mn.rangeLog=ec;Mn.rangeAsinh=nd;Mn.orient=fr;Mn.pxRatio=bt;Mn.join=uT;Mn.fmtDate=ad,Mn.tzDate=ST;Mn.sync=J0;{Mn.addGap=sE,Mn.clipGaps=ic;let i=Mn.paths={points:sg};i.linear=ag,i.stepped=oE,i.bars=lE,i.spline=hE}const on={obs:"#2457d6",model:"#d9541a",astro:"#16857a",rain:"#6b9de8",muted:"#6a707a",faint:"#959aa3",grid:"rgba(20,23,28,0.07)",now:"#f2600c",peak:"#a8690a"},ME='10px "IBM Plex Mono", ui-monospace, monospace',eo=(i={})=>({stroke:on.faint,font:ME,grid:{stroke:on.grid,width:1},ticks:{show:!1},gap:4,...i}),dh=uu;function hg({opts:i,data:e,height:t,now:n,keyStr:s,rows:r}){const a=zi(null),o=zi(null),l=zi(n),c=zi(r);return c.current=r,er(()=>{const u=a.current,d=i(),h={hooks:{draw:[m=>{const p=m.valToPos(l.current,"x",!0);if(!isFinite(p)||p<m.bbox.left||p>m.bbox.left+m.bbox.width)return;const x=m.ctx;x.save(),x.strokeStyle=on.now,x.lineWidth=1.5*devicePixelRatio,x.beginPath(),x.moveTo(p,m.bbox.top),x.lineTo(p,m.bbox.top+m.bbox.height),x.stroke(),x.fillStyle=on.now,x.beginPath(),x.arc(p,m.bbox.top,3*devicePixelRatio,0,Math.PI*2),x.fill(),x.restore()}]}},f={hooks:{setCursor:[m=>{const p=m.cursor.idx,x=dh();if(p==null||m.cursor.left===void 0||m.cursor.left<0){x.style.display="none";return}const y=m.over.getBoundingClientRect();x.innerHTML=c.current(m,p).join("<br>"),x.style.display="block";const w=x.offsetWidth,I=y.left+m.cursor.left;x.style.left=`${I+14+w>innerWidth?I-w-14:I+14}px`,x.style.top=`${y.top+(m.cursor.top??0)+14}px`}]}},v=new Mn({...d,width:u.clientWidth||300,height:t,plugins:[h,f]},e,u);o.current=v,v.over.addEventListener("mouseleave",()=>{dh().style.display="none"});const _=new ResizeObserver(()=>{u.clientWidth&&v.setSize({width:u.clientWidth,height:t})});return _.observe(u),()=>{_.disconnect(),v.destroy(),o.current=null,dh().style.display="none"}},[s,t]),er(()=>{o.current?.setData(e,!0)},[e]),er(()=>{l.current=n,o.current?.redraw(!1)},[n]),g("div",{class:"uchart",ref:a})}const im=i=>Math.abs(i)>=100?i.toFixed(0):Math.abs(i)>=10?i.toFixed(1):i.toFixed(2);function sm({d:i,now:e,height:t}){const s=[i.series[0]?.x??[],...i.series.map(l=>l.y.map(c=>c===null||!isFinite(c)?null:c))],r=`${i.kind}|${i.series.map(l=>l.name+l.color).join(",")}|${i.xMin}|${i.xMax}|${(i.markers??[]).map(l=>l.x).join(",")}`;return g(hg,{opts:()=>({padding:[10,4,0,0],cursor:{y:!1,points:{size:6}},legend:{show:!1},scales:{x:{time:!1,range:[i.xMin,i.xMax]},y:i.kind==="bar"?{range:(l,c,u)=>[0,Math.max(10,u*1.1)]}:{}},axes:[eo({values:(l,c)=>c.map(u=>i.xTick(u)),space:56,incrs:[3,6,12,24]}),eo({size:36,values:(l,c)=>c.map(u=>im(u))})],series:[{},...i.series.map(l=>i.kind==="bar"?{stroke:l.color,fill:l.color+"b0",width:0,paths:Mn.paths.bars({size:[.75,40],align:0}),points:{show:!1}}:{stroke:l.color,width:l.dashed?1.25:1.75,dash:l.dashed?[4,3]:void 0,points:{show:!1}})],hooks:{draw:[l=>{for(const c of i.markers??[]){const u=l.valToPos(c.x,"x",!0),d=l.valToPos(c.y,"y",!0),h=l.ctx;h.save(),h.fillStyle=c.color,h.strokeStyle="#fff",h.lineWidth=2*devicePixelRatio,h.beginPath(),h.arc(u,d,4*devicePixelRatio,0,Math.PI*2),h.fill(),h.stroke(),h.restore()}}]}}),data:s,height:t,now:e,keyStr:r,rows:(l,c)=>[`<b>${i.xTick(l.data[0][c])}</b>`,...i.series.map((u,d)=>{const h=l.data[d+1][c];return h==null?"":`<i style="background:${u.color}"></i>${u.name}: ${im(h)} ${i.unit}`}).filter(Boolean)]})}function SE({pins:i,t:e,sel:t,f:n,height:s,labels:r}){const a=.08333333333333333,o=Math.round(n.hours/a)+1,l=Array.from({length:o},(_,m)=>m*a),c=(_,m,p,x=!1)=>{if(!_.length||p<_[0]-1e-9||p>_[_.length-1]+1e-9)return x&&_.length&&p>=_[0]?m[m.length-1]:null;let y=0,w=_.length-1;for(;w-y>1;){const C=y+w>>1;_[C]<=p?y=C:w=C}if(w===y)return m[y];const I=(p-_[y])/(_[w]-_[y]||1);return m[y]+(m[w]-m[y])*I},u=(_,m,p)=>{let x=0;for(let y=0;y<_.length&&_[y]<=p;y++)x=m[y];return x},d=[l,...i.map(_=>l.map(m=>c(e,_.depth,m))),l.map(_=>c(n.tide.x,n.tide.y,_)),l.map(_=>u(n.rain.x,n.rain.y,_))],h=`${i.map(_=>`${_.id}:${_.name}:${_.color}`).join("|")}|${t}|${n.hours}`,f=()=>({padding:[10,2,0,0],cursor:{y:!1,points:{size:6}},legend:{show:!1},scales:{x:{time:!1,range:[0,n.hours]},m:{range:(_,m,p)=>[0,Math.max(.3,(p??0)*1.15)]},mpd:{},mm:{range:(_,m,p)=>[0,Math.max(10,(p??0)*2.4)]}},axes:[eo({values:(_,m)=>m.map(p=>n.xTick(p)),space:56,incrs:[3,6,12,24]}),eo({scale:"m",size:34,values:(_,m)=>m.map(p=>p.toFixed(p>=1?1:2))}),eo({scale:"mpd",side:1,size:34,grid:{show:!1},stroke:on.model,values:(_,m)=>m.map(p=>p.toFixed(1))})],series:[{},...i.map(_=>({scale:"m",stroke:Za(_.color),width:_.id===t||t===null?2:1.25,fill:_.id===t?Za(_.color)+"22":void 0,points:{show:!1}})),{scale:"mpd",stroke:on.model+"aa",width:1.25,dash:[4,3],points:{show:!1}},{scale:"mm",stroke:on.rain,fill:on.rain+"40",width:0,paths:Mn.paths.bars({size:[1,20],align:1}),points:{show:!1}}]}),v=(_,m)=>{const p=[`<b>${n.xTick(_.data[0][m])}</b>`];i.forEach((w,I)=>{const C=_.data[I+1][m];C!=null&&p.push(`<i style="background:${Za(w.color)}"></i>${w.name}: ${C.toFixed(2)} m`)});const x=_.data[i.length+1][m],y=_.data[i.length+2][m];return x!=null&&p.push(`<i style="background:${on.model}"></i>${r.sea}: ${x.toFixed(2)} mPD`),y!=null&&p.push(`<i style="background:${on.rain}"></i>${r.rain}: ${y.toFixed(0)} mm/h`),p};return g(hg,{opts:f,data:d,height:s,now:n.cursor,keyStr:h,rows:v})}function wE(){const i=X.rightTab.value,e=X.validation.value.points.length,t=X.pins.value.list.length,n=r=>{X.rightTab.value=r,Jl("hkfl.ui.right",r)},s=[["overview",Q("概览","Overview"),null],["validation",Q("验证","Validation"),e],["pins",Q("钉点","Pins"),t],["forcing",k("forcing"),null]];return g("aside",{class:"inspector float",id:"right","aria-label":k("comparison"),children:[g("div",{class:"tabs",role:"tablist",children:[s.map(([r,a,o])=>g("button",{role:"tab","aria-selected":i===r,class:i===r?"on":"","data-tab":r,onClick:()=>n(r),children:[a,o?g("span",{class:"n",children:o}):null]},r)),g("span",{class:`live ${X.playing.value?"on":""}`,children:X.playing.value?k("running"):k("paused")})]}),g("div",{class:"p-body",children:[i==="overview"&&g(bE,{}),i==="validation"&&g(DE,{}),i==="pins"&&g(LE,{}),i==="forcing"&&g(IE,{})]})]})}function $r({a:i,b:e,unit:t,digits:n}){const s=i-e,r=Math.abs(s)<Math.pow(10,-n)/2?"":s>0?"bad":"good";return g("span",{class:`delta ${r}`,title:"B − A",children:[r&&g(qe,{name:s>0?"up":"down",size:11}),s>=0?"+":"−",Math.abs(s).toFixed(n),t?` ${t}`:""]})}function Oa({k:i,v:e,unit:t,foot:n}){return g("div",{class:"stat",children:[g("div",{class:"k",title:i,children:i}),g("div",{class:"v",children:[e,t&&g("span",{class:"u",children:t})]}),g("div",{class:"f",children:n})]})}function bE(){const i=X.metrics.value,e=X.compare.value?X.baseMetrics.value:null,t=X.scene.value,[n,s]=Ol(k("hotspots")),[r,a]=Ol(k("facilities"));return g(dt,{children:[g(tn,{title:k("metrics"),hint:X.waterMode.value==="max"?"":Q("至此为止的最大值","maxima so far"),children:[g("div",{id:"metrics",children:X.compare.value?g(EE,{a:e,b:i}):g(AE,{m:i,base:null})}),X.compare.value&&g("div",{class:"cmp-note",children:[g(qe,{name:"compare",size:13}),g("span",{children:Q(`分屏：左 A = ${Rs("A")}，右 B = ${Rs("B")}（拖动画面中央把手）`,`Split view: left A = ${Rs("A")}, right B = ${Rs("B")} (drag the handle)`)})]})]}),t?.facilities?.some(o=>o.ug)?g(tn,{title:Q("地下空间","Underground spaces"),hint:Q("灌入体积 ÷ 楼面面积","inflow volume ÷ floor area"),children:g("div",{id:"ugTable",children:g(TE,{})})}):null,g(tn,{title:n,hint:s,children:g("div",{id:"hotspots",children:g(CE,{})})}),t?.facilities?.length?g(tn,{title:r,hint:a,children:g("div",{id:"facTable",children:g(RE,{})})}):null]})}function TE(){const{m:i,base:e}=X.facilities.value,t=X.compare.value?e:null,n=(X.scene.value?.facilities??[]).filter(o=>o.ug);if(!n.length)return null;const s=n.map(o=>({f:o,d:i?.facDepths?.[o.id]??0,b:t?.facDepths?.[o.id]})).sort((o,l)=>l.d-o.d),r=(o,l)=>o>=l-.05?[Q("灌满","full"),"bad"]:o>=1?[Q("地下一层淹没","basement level flooded"),"bad"]:o>=.3?[Q("车辆受损","cars damaged"),"warn"]:o>=.05?[Q("进水","water entering"),"ok"]:[Q("干","dry"),""],a=s.filter(o=>o.d>=.3).length;return g(dt,{children:[s.map(o=>{const l=o.f.ug.cap,[c,u]=r(o.d,l),d=Math.min(1,o.d/l);return g("div",{class:"ug",children:[g("div",{class:"ug-top",children:[g("span",{class:"ug-name",children:[g(M0,{html:ea[o.f.type]??""})," ",o.f.name]}),g("span",{class:`pill num ${u}`,children:[o.d.toFixed(2)," / ",l.toFixed(1)," m"]})]}),g("div",{class:"ug-bar",children:g("i",{style:{width:`${(d*100).toFixed(1)}%`,background:po(o.d)}})}),g("div",{class:"ug-sub",children:[c,t?` · A ${(o.b??0).toFixed(2)} m`:"",o.f.ug.area?` · ${Q("楼面","floor")} ${(o.f.ug.area/1e4).toFixed(2)} ha`:""]})]},o.f.id)}),g("p",{class:"caveat",children:[g(qe,{name:"info",size:12}),g("span",{children:[a,"/",n.length," ",Q("地库受浸（≥ 0.3 m）。地图上地库以透视方块显示：深色为地库体积，填充为灌入深度，地面上的柱是灌满比例","basements flooded (≥ 0.3 m). On the map each basement is an X-ray box: dark = its volume, filled = depth of water, the post above ground = filled fraction")]})]})]})}const ug=()=>X.compare.value?X.scenarios.value.find(i=>i.id===X.scenarioId.value)??null:null,Rs=i=>{const e=ug();return e?Q(e[i].zh,e[i].en):k(i==="A"?"baseline":"withMeasures")};function EE({a:i,b:e}){const t=ug(),n=[[k("maxDepth"),s=>s.maxDepth,"m",2],[k("floodedArea"),s=>s.floodedAreaKm2,"km²",3],[k("severeArea"),s=>s.floodedAreaSevereKm2,"km²",3],[k("bldAffected"),s=>s.buildingsAffected,"",0],[k("volume"),s=>s.volumeMm3,"Mm³",3]];return g(dt,{children:[t&&g("div",{class:"ab-card",children:[g("div",{class:"ab-card-t",children:[g("span",{class:"grow",children:Q(t.zh,t.en)}),g("button",{class:"btn sm ghost","data-ab-open":!0,onClick:()=>{X.abOpen.value=!X.abOpen.value},children:Q("更换","Change")})]}),g("div",{class:"ab-card-d",children:Q(t.desc_zh,t.desc_en)})]}),g("table",{class:"tbl ab-tbl",id:"abTable",children:[g("thead",{children:g("tr",{children:[g("th",{}),g("th",{class:"r",children:[g("span",{class:"ab-k",children:"A"}),g("div",{class:"ab-th",children:Rs("A")})]}),g("th",{class:"r",children:[g("span",{class:"ab-k b",children:"B"}),g("div",{class:"ab-th",children:Rs("B")})]}),g("th",{class:"r",children:"B − A"})]})}),g("tbody",{children:n.map(([s,r,a,o])=>g("tr",{children:[g("td",{children:[s,a&&g("span",{class:"u",children:[" ",a]})]}),g("td",{class:"n",children:i?r(i).toFixed(o):"—"}),g("td",{class:"n",children:e?r(e).toFixed(o):"—"}),g("td",{class:"n",children:i&&e?g($r,{a:r(e),b:r(i),unit:"",digits:o}):"—"})]},s))})]}),g("p",{class:"caveat",children:[g(qe,{name:"info",size:12}),g("span",{children:Q("两边用同一网格、同一参数，只差情景设定；红色 = B 更糟，绿色 = B 更好。","Same grid and parameters on both sides, only the scenario differs; red = B worse, green = B better.")})]})]})}function AE({m:i,base:e}){if(!i)return g("div",{class:"stats",children:[k("maxDepth"),k("floodedArea"),k("severeArea"),k("bldAffected")].map(s=>g(Oa,{k:s,v:"—",unit:"",foot:k("noMetrics")},s))});const t=v0(i.maxDepth),n=i.floodedAreaKm2>0?i.floodedAreaSevereKm2/i.floodedAreaKm2*100:0;return g(dt,{children:[g("div",{class:"stats",children:[g(Oa,{k:k("maxDepth"),v:i.maxDepth.toFixed(2),unit:"m",foot:e?g($r,{a:i.maxDepth,b:e.maxDepth,unit:"m",digits:2}):g(dt,{children:[g("span",{class:"swatch",style:{background:po(i.maxDepth)}}),Ju()[t]]})}),g(Oa,{k:k("floodedArea"),v:i.floodedAreaKm2.toFixed(3),unit:"km²",foot:e?g($r,{a:i.floodedAreaKm2,b:e.floodedAreaKm2,unit:"km²",digits:3}):`${(i.floodedAreaKm2*100).toFixed(1)} ha`}),g(Oa,{k:k("severeArea"),v:i.floodedAreaSevereKm2.toFixed(3),unit:"km²",foot:e?g($r,{a:i.floodedAreaSevereKm2,b:e.floodedAreaSevereKm2,unit:"km²",digits:3}):`${n.toFixed(0)}% ${k("ofFlooded")}`}),g(Oa,{k:k("bldAffected"),v:String(i.buildingsAffected),unit:"",foot:e?g($r,{a:i.buildingsAffected,b:e.buildingsAffected,unit:"",digits:0}):k("bldRule")})]}),g("div",{class:"readouts",children:[g("div",{children:[k("volume"),g("b",{children:[i.volumeMm3.toFixed(3)," Mm³"]}),e&&g($r,{a:i.volumeMm3,b:e.volumeMm3,unit:"Mm³",digits:3})]}),g("div",{children:[k("gaugeNow"),g("b",{children:Object.entries(i.gaugeLevels).map(([s,r])=>`${s} ${r.toFixed(2)} mPD`).join(" · ")||"—"})]})]})]})}function CE(){const i=X.hotspots.value;return i.length?g(dt,{children:i.map((e,t)=>g("div",{class:"hot","data-hot":t,role:"button",tabIndex:0,onClick:()=>Oe.onHotspot(e.x,e.y),onKeyDown:n=>{n.key==="Enter"&&Oe.onHotspot(e.x,e.y)},title:k("flyTo"),children:[g("span",{class:"rank",children:String(t+1).padStart(2,"0")}),g("div",{class:"h-main",children:[g("div",{class:"h-top",children:[g("span",{class:"h-name",children:e.name??""}),e.area?g("span",{class:"h-area",children:[(e.area/1e4).toFixed(1)," ha"]}):null,g("span",{class:"h-d",children:[e.depth.toFixed(2)," m"]})]}),g("div",{class:"h-bar",children:g("i",{style:{width:`${Math.min(100,e.depth/3*100).toFixed(1)}%`,background:po(e.depth)}})})]}),g(qe,{name:"flyto",size:13,cls:"h-fly"})]},t))}):g("div",{class:"empty",children:[g(qe,{name:"inbox",size:16}),g("span",{children:k("noHot")})]})}function RE(){const{m:i,base:e}=X.facilities.value,t=X.compare.value?e:null,n=X.scene.value?.facilities;if(!n||!i?.facDepths)return g("div",{class:"empty",children:[g(qe,{name:"inbox",size:16}),g("span",{children:k("noMetrics")})]});const r=n.map(o=>({f:o,d:i.facDepths[o.id]??0,b:t?.facDepths?.[o.id]})).sort((o,l)=>Math.max(l.d,l.b??0)-Math.max(o.d,o.b??0)).filter(o=>Math.max(o.d,o.b??0)>=.15),a=o=>g("span",{class:`pill num ${o>=.5?"bad":o>=.15?"warn":"ok"}`,children:o.toFixed(2)});return r.length?g(dt,{children:[g("table",{class:"tbl",children:[g("thead",{children:g("tr",{children:[g("th",{children:k("facility")}),t&&g("th",{class:"r",children:"A"}),g("th",{class:"r",children:[t?"B":k("maxDepth")," (m)"]})]})}),g("tbody",{children:r.slice(0,14).map(o=>g("tr",{children:[g("td",{children:g("div",{class:"fname",children:[g(M0,{html:ea[o.f.type]??""}),g("div",{children:[o.f.name,g("div",{class:"sub",children:k("ft_"+o.f.type)})]})]})}),t&&g("td",{class:"n",children:a(o.b??0)}),g("td",{class:"n",children:a(o.d)})]},o.f.id))})]}),g("p",{class:"caveat",children:[g(qe,{name:"info",size:12}),g("span",{children:[r.length,"/",n.length," ",Q("受影响（≥ 0.15 m）","affected (≥ 0.15 m)"),r.length>14?Q("，仅列前 14",", top 14 shown"):"",t?` · A = ${Rs("A")}, B = ${Rs("B")}`:""]})]})]}):g("div",{class:"empty",children:[g(qe,{name:"check",size:16}),g("span",{children:["0/",n.length," ",Q("受影响（≥ 0.15 m）","affected (≥ 0.15 m)")]})]})}function PE(i,e){if(e===void 0)return"";const t=i.cls==="none"?0:i.depth,n=Math.max(.35,.5*t);return i.unrep||i.berm!==void 0&&e<.05?"unrep":i.cls==="none"?e<.2?"hit":"over":i.lower?e>=t-n?"hit":"under":Math.abs(e-t)<=n?"hit":e<t?"under":"over"}function DE(){const{points:i,m:e}=X.validation.value,[t,n]=fo(new Set);if(!i.length)return g("section",{class:"blk",children:g("div",{class:"empty",children:[g(qe,{name:"inbox",size:16}),g("span",{children:k("noVal")})]})});const s=X.scene.value?.facilities??[],r=i.map(c=>PE(c,e?.valDepths[c.id])),a={hit:0,under:0,over:0,unrep:0};let o=0;r.forEach(c=>{c&&(o++,a[c]++)});const l=c=>{const u=new Set(t);u.has(c)?u.delete(c):u.add(c),n(u)};return g("section",{class:"blk",id:"valTable",children:[g("div",{class:"blk-h",children:g("span",{class:"micro",children:k("validation")})}),g("div",{class:"score",children:[g("div",{class:"big",children:[o?a.hit:"—",g("small",{children:["/ ",o||i.length]})]}),g("div",{class:"side",children:[g("div",{class:"cnt",children:[g("span",{children:[k("hit")," ",g("b",{children:a.hit})]}),g("span",{children:[k("under")," ",g("b",{children:a.under})]}),g("span",{children:[k("over")," ",g("b",{children:a.over})]}),a.unrep>0&&g("span",{children:[k("unrep")," ",g("b",{children:a.unrep})]})]}),g("div",{class:"ticks",children:r.map((c,u)=>g("i",{class:c},u))})]})]}),g("div",{class:"val-head",children:k("valHead")}),g("table",{class:"tbl",children:[g("thead",{children:g("tr",{children:[g("th",{children:k("place")}),g("th",{class:"r",children:[k("observed")," (m)"]}),g("th",{class:"r",children:[k("simulated")," (m)"]}),g("th",{})]})}),g("tbody",{children:i.map((c,u)=>{const d=e?.valDepths[c.id],h=c.cls==="none"?0:c.depth,f=r[u],v=c.grade,_=t.has(c.id),m=c.cls==="none"?"":v==="B"?"±0.3":v==="C"?"±50%":v==="D"?k("estimated"):"",p=c.ug?s.find(w=>w.id===c.ug):void 0,x=[c.ug?k("ugDepth")+(p?.ug?` · ${Q("楼面","floor")} ${Math.round(p.ug.area).toLocaleString()} m²`:""):k("streetDepth"),c.snapped_m?k("snapped").replace("{d}",c.snapped_m.toFixed(0)):"",c.berm!==void 0?k("bermNote").replace("{z}",c.berm.toFixed(1)):""].filter(Boolean).join(Q("；","; ")),y=c.note_zh?Q(c.note_zh,c.note_en??c.note_zh):"";return[g("tr",{class:`vrow ${_?"open":""}`,"data-vrow":c.id,onClick:()=>l(c.id),title:c.src,children:[g("td",{children:g("div",{class:"fname",children:[v&&g("span",{class:`grade ${v}`,title:k("grade"+v),children:v}),g("span",{children:[Q(c.zh,c.en),c.ug?g("span",{class:"tag",children:Q("地库","basement")}):c.berm!==void 0?g("span",{class:"tag",children:Q("阶地","berm")}):null]})]})}),g("td",{class:"n",children:[c.cls==="none"?Q("无水浸","none"):`${c.lower?"≥":""}${c.depth.toFixed(1)}`,m&&g("div",{class:"unc",children:m})]}),g("td",{class:"n",children:[d===void 0?"—":d.toFixed(2),d!==void 0&&f!=="unrep"&&!(c.lower&&d>=h)&&g("div",{class:"unc",children:["Δ ",d-h>=0?"+":"−",Math.abs(d-h).toFixed(2)]})]}),g("td",{class:"r",children:f?g("span",{class:`pill ${f==="hit"?"ok":f}`,children:k(f)}):g("span",{class:"pill mute",children:"—"})})]},c.id),_&&g("tr",{class:"vdet",children:g("td",{colSpan:4,children:g("dl",{class:"vdet-b",children:[v&&g(dt,{children:[g("dt",{children:Q("可信度","Reliability")}),g("dd",{children:[k("grade"+v),m?` (${m})`:""]})]}),c.basis&&g(dt,{children:[g("dt",{children:k("basis")}),g("dd",{children:c.basis})]}),g("dt",{children:k("sampling")}),g("dd",{children:x}),y&&g(dt,{children:[g("dt",{children:k("modelNotes")}),g("dd",{children:y})]}),g("dt",{children:k("source")}),g("dd",{children:c.src})]})})},c.id+"_d")]})})]}),g("p",{class:"caveat",children:[g(qe,{name:"info",size:12}),g("span",{children:k("hitRule")})]})]})}function LE(){const{list:i,t:e,sel:t,f:n}=X.pins.value;return i.length?g("section",{class:"blk",id:"pinBox",children:[g("div",{class:"blk-h",children:[g("span",{class:"micro",children:k("pins")}),g("span",{class:"hint"}),g("span",{class:"n",children:i.length})]}),i.map(s=>{const r=s.depth.length?s.depth[s.depth.length-1]:null,a=s.depth.length?Math.max(...s.depth):null;return g("div",{class:`pin-row ${s.id===t?"sel":""}`,"data-pin":s.id,onClick:o=>{o.target.tagName!=="INPUT"&&Oe.onSelectPin(t===s.id?null:s.id)},children:[g("span",{class:"dot",style:{background:Za(s.color)}}),g("input",{defaultValue:s.name,"aria-label":k("f_name"),onKeyDown:o=>{o.stopPropagation(),o.key==="Enter"&&o.currentTarget.blur()},onChange:o=>{const l=o.currentTarget.value.trim();Oe.onRenamePin(s.id,l||s.name)}}),g("span",{class:"pv",children:r===null?"—":g(dt,{children:[g("b",{children:[r.toFixed(2)," m"]}),g("br",{}),k("pinMax")," ",a.toFixed(2)]})}),g("span",{style:{display:"flex"},children:[g("button",{class:"btn sm icon ghost",title:k("flyTo"),onClick:o=>{o.stopPropagation(),Oe.onFlyPin(s.id)},children:g(qe,{name:"flyto",size:13})}),g("button",{class:"btn sm icon ghost",title:k("delete"),onClick:o=>{o.stopPropagation(),Oe.onRemovePin(s.id)},children:g(qe,{name:"x",size:13})})]})]},s.id)}),n&&g(dt,{children:[g("div",{class:"chart-key",style:{marginTop:"12px"},children:[i.map(s=>g("span",{children:[g("i",{style:{background:Za(s.color)}}),s.name]},s.id)),g("span",{children:[g("i",{class:"dash",style:{color:"var(--c-model)"}}),Q("边界潮位 (mPD)","Sea level (mPD)")]}),g("span",{children:[g("i",{class:"bar",style:{background:"var(--c-rain)",opacity:.5}}),Q("雨强","Rain")]})]}),g(SE,{pins:i,t:e,sel:t,f:n,height:200,labels:{sea:Q("边界潮位","Sea level"),rain:Q("雨强","Rain")}})]}),g("div",{class:"row",style:{marginTop:"10px"},children:[g("button",{class:"btn sm",onClick:()=>Oe.onPinMode(),children:[g(qe,{name:"pin",size:13}),k("pinAdd")]}),g("span",{class:"grow"}),g("button",{class:"btn sm",onClick:()=>Oe.onExportPins(),children:[g(qe,{name:"download",size:13}),k("exportCsv")]})]}),g("p",{class:"caveat",children:[g(qe,{name:"info",size:12}),g("span",{children:k("pinRerun")})]})]}):g("section",{class:"blk",children:g("div",{class:"empty",children:[g(qe,{name:"pin",size:16}),g("span",{children:[k("pinEmpty"),g("br",{}),g("button",{class:"btn sm",style:{marginTop:"10px"},onClick:()=>Oe.onPinMode(),children:[g(qe,{name:"pin",size:13}),k("pinAdd")]})]})]})})}function IE(){const i=X.charts.value,e=X.chartCursor.value,t=X.event.value,[n,s]=a1(k("tideChart")),[r,a]=Ol(k("rainChart")),o=l=>g("div",{class:"chart-key",children:[l.series.map(c=>g("span",{children:[g("i",{class:l.kind==="bar"?"bar":c.dashed?"dash":"",style:c.dashed?{color:c.color}:{background:c.color}}),c.name]},c.name)),(l.markers??[]).map(c=>g("span",{children:[g("i",{class:"dot",style:{background:c.color}}),c.label]},c.label))]});return g(dt,{children:[g(tn,{title:n,hint:s,children:i?g(dt,{children:[o(i.tide),g(sm,{d:i.tide,now:e,height:170})]}):null}),g(tn,{title:r,hint:a,children:i?g(dt,{children:[o(i.rain),g(sm,{d:i.rain,now:e,height:120})]}):null}),t&&g(tn,{title:k("sources"),n:t.sources.length,children:g("ol",{class:"sources",children:t.sources.map((l,c)=>g("li",{children:l},c))})})]})}function UE(){const i=X.active.value,e=(t,n,s,r,a)=>g("button",{id:t,class:`btn icon ${r?"on":""}`,"aria-label":s,"aria-pressed":r,"data-tip":s,"data-tip-pos":"left",onClick:a,children:g(qe,{name:n,size:16})});return g("div",{class:"mapctl",children:[g("div",{class:"ctl-stack float",role:"toolbar","aria-label":Q("相机","Camera"),children:[e("btnBird","bird",k("camBird"),!1,()=>Oe.onCamera("bird")),e("btnStreet","street",k("camStreet"),!1,()=>Oe.onCamera("street")),e("btnFollow","target",k("camFollow"),!!i.btnFollow,()=>Oe.onCamera("follow")),g("hr",{}),e("btnOrbit","orbit",Q("自动环绕","Orbit"),!!i.btnOrbit,()=>Oe.onOrbit()),e("btnTour","tour",Q("电影式飞览","Cinematic tour"),!!i.btnTour,()=>Oe.onTour())]}),g("div",{class:"ctl-stack float",children:[g("button",{id:"btnExag",class:`btn icon txt ${X.exag.value!==1?"on":""}`,"data-tip":k("exag"),"data-tip-pos":"left",onClick:()=>Oe.onExag(),children:["×",X.exag.value]}),e("btnTex","map",X.texMode.value==="imagery"?Q("切换到地图底图","Switch to map basemap"):Q("切换到卫星影像","Switch to imagery"),!1,()=>Oe.onTexToggle())]})]})}function FE(){const[i,e]=fo(()=>{try{return localStorage.getItem("hkfl.ui.lgkeys")!=="0"}catch{return!0}}),t=X.waterMode.value==="max",n=Ju();return g("div",{class:"legend float",id:"legend",children:[g("div",{class:"lg-h",children:[g("span",{class:"lg-t",id:"legendTitle",children:k(t?"legendMax":"legendNow")}),g("span",{class:"lg-u",children:"m"}),g("span",{class:"grow"}),g("button",{class:"toggle","aria-label":Q("图例说明","Legend keys"),"aria-expanded":i,onClick:()=>{e(!i),Jl("hkfl.ui.lgkeys",i?"0":"1")},children:g(qe,{name:"chev",size:14,cls:i?"":"rot"})})]}),g("div",{class:"steps",id:"legendSteps",children:r1.map(s=>g("i",{style:{background:po(s)}},s))}),g("div",{class:"breaks",children:["0.1","0.3","0.5","1","2"].map((s,r)=>g("span",{style:{left:`${(r+1)/6*100}%`},children:s},s))}),g("div",{class:"classes",id:"legendCls",children:n.map(s=>g("span",{children:s},s))}),i&&g("div",{class:"lg-keys",id:"legendKeys",children:[g("span",{children:[g("i",{class:"rise"}),k("lg_rise")]}),g("span",{children:[g("i",{class:"recede"}),k("lg_recede")]}),g("span",{children:[g("i",{class:"contour"}),k("lg_contour")]}),g("span",{children:[g("i",{class:"edge"}),k("lg_edge")]}),g("span",{children:[g("i",{class:"trace"}),k("lg_trace")]}),g("span",{children:[g("i",{class:"ug"}),k("lg_ug")]}),g("span",{children:[g("i",{class:"pt",style:{background:"var(--warn-dot)"}}),k("lg_val")]}),g("span",{children:[g("i",{class:"pt",style:{background:"var(--blue)"}}),k("lg_gauge")]}),g("span",{children:[g("i",{class:"pt",style:{background:"var(--bad)"}}),k("lg_fac")]})]})]})}const NE={60:["1分","1m"],300:["5分","5m"],900:["15分","15m"],1800:["30分","30m"],3600:["1时","1h"]},En={rainY:30,rainH:22,seaY:56,seaH:30};function rm(i,e){const t=Math.min(devicePixelRatio,2),n=i.clientWidth||600,s=i.clientHeight||90;(i.width!==n*t||i.height!==s*t)&&(i.width=n*t,i.height=s*t);const r=i.getContext("2d");r.setTransform(t,0,0,t,0,0),r.clearRect(0,0,n,s);const a=h=>h/e.hours*n,o=Math.min(En.seaH,s-En.seaY-2);r.fillStyle="rgba(20,23,28,0.035)",r.fillRect(0,En.rainY,n,En.rainH),r.fillRect(0,En.seaY,n,o);const l=e.hours>30?6:3;r.font='10px "IBM Plex Mono", ui-monospace, monospace',r.textAlign="center";for(let h=0;h<=e.hours+1e-6;h+=l){const f=Math.round(a(h))+.5;r.fillStyle="rgba(20,23,28,0.08)",r.fillRect(f-.5,En.rainY,1,En.seaY+o-En.rainY),h>0&&h<e.hours-.01&&(r.fillStyle=on.faint,r.fillText(e.tick(h),f,10))}const c=Math.max(10,...e.rain.y),u=Math.max(1,n/Math.max(1,e.hours)-1.5);r.fillStyle=on.rain;for(let h=0;h<e.rain.x.length;h++){const f=e.rain.y[h]/c*(En.rainH-3);f>.3&&r.fillRect(a(e.rain.x[h])+.75,En.rainY+En.rainH-f,u,f)}if(e.tide.y.length){const h=Math.min(...e.tide.y),f=Math.max(...e.tide.y),v=_=>En.seaY+o-3-(_-h)/Math.max(.05,f-h)*(o-8);r.beginPath(),e.tide.x.forEach((_,m)=>{const p=a(_),x=v(e.tide.y[m]);m===0?r.moveTo(p,x):r.lineTo(p,x)}),r.strokeStyle=on.model,r.lineWidth=1.5,r.lineJoin="round",r.stroke(),r.lineTo(a(e.tide.x[e.tide.x.length-1]),En.seaY+o),r.lineTo(a(e.tide.x[0]),En.seaY+o),r.closePath(),r.fillStyle="rgba(217,84,26,0.08)",r.fill(),r.font='9.5px "IBM Plex Mono", ui-monospace, monospace',r.textAlign="right",r.fillStyle=on.model,r.fillText(`${f.toFixed(1)}`,n-4,En.seaY+10)}r.font='9.5px "IBM Plex Sans", "Noto Sans SC", sans-serif',r.textAlign="left";const d=(h,f)=>{const v=r.measureText(h).width;r.fillStyle="rgba(251,251,252,0.85)",r.fillRect(3,f+2,v+8,13),r.fillStyle=on.muted,r.fillText(h,7,f+12)};d(Q("雨强 mm/h","Rain mm/h"),En.rainY),d(Q("潮位 mPD","Sea level mPD"),En.seaY)}function kE(){const i=X.timeline.value,{label:e,frac:t}=X.time.value,n=X.playing.value,s=zi(null),r=zi(null),[a,o]=fo(null),l=zi(!1);er(()=>{i&&s.current&&rm(s.current,i)},[i]),er(()=>{const p=r.current;if(!p)return;const x=new ResizeObserver(()=>{const y=X.timeline.value;y&&s.current&&rm(s.current,y)});return x.observe(p),()=>x.disconnect()},[]);const c=p=>{const x=r.current.getBoundingClientRect();return Math.min(1,Math.max(0,(p.clientX-x.left)/x.width))},u=(p,x)=>{const y=uu();y.innerHTML=p,y.style.display="block";const w=r.current.getBoundingClientRect(),I=y.offsetWidth;y.style.left=`${Math.min(innerWidth-I-8,Math.max(8,x-I/2))}px`,y.style.top=`${w.top-y.offsetHeight-10}px`},d=()=>{uu().style.display="none"},[h,f]=e.includes(",")?[e.split(",")[0],e.split(",")[1].replace("HKT","").trim()]:["",e],v=X.cond.value,_=X.trend.value,m=v?.signal?Q(v.signal[0],v.signal[1]):"";return g("div",{class:"timeline float",id:"bottom",children:[g("div",{class:"tl-ctl",children:[g("div",{class:"tl-top",children:[g("button",{id:"btnPlay",class:`play ${n?"on":""}`,"aria-label":`${k("play")} / ${k("pause")}`,"data-tip":`${k("play")} / ${k("pause")} · Space`,"data-tip-pos":"right",onClick:()=>Oe.onPlayToggle(),children:g(qe,{name:n?"pause":"play",size:17})}),g("div",{class:"clock",id:"timeLabel",children:[g("span",{class:"d",children:h?`${h} · HKT`:"HKT"}),g("span",{class:"t",children:f})]}),g("span",{class:"grow"}),g("button",{id:"btnReset",class:"btn sm icon ghost","aria-label":Q("重置","Reset"),"data-tip":Q("从头重算","Restart the run"),onClick:()=>Oe.onReset(),children:g(qe,{name:"reset",size:14})})]}),g(Yr,{id:"speedBtns",cls:"full",items:n1.map(p=>[p,NE[p][X.lang.value==="zh"?0:1]]),value:X.speed.value,onPick:p=>Oe.onSpeed(p)})]}),g("div",{class:"lanes",children:g("div",{id:"scrub",ref:r,tabIndex:0,role:"slider","aria-label":Q("时间轴","Timeline"),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(t*100),"aria-valuetext":e,onPointerDown:p=>{p.target.closest(".tmark")||(l.current=!0,p.currentTarget.setPointerCapture(p.pointerId))},onPointerMove:p=>{const x=p.target.closest(".tmark");if(x&&!l.current&&i){const w=i.marks[+x.dataset.mark];o(null),u(`<b>${Q(w.zh,w.en)}</b><br>${i.fmt(w.h)}`,p.clientX);return}const y=c(p);o(y),i&&u(`<b>${i.fmt(y*i.hours)}</b>`,p.clientX)},onPointerUp:p=>{l.current&&(l.current=!1,Oe.onSeek(c(p)))},onPointerCancel:()=>{l.current=!1,o(null),d()},onPointerLeave:()=>{l.current||(o(null),d())},onKeyDown:p=>{if(!i)return;const x=.5/Math.max(1,i.hours),y=p.key==="ArrowRight"?t+x:p.key==="ArrowLeft"?t-x:p.key==="Home"?0:p.key==="End"?1:null;y!==null&&(p.preventDefault(),p.stopPropagation(),Oe.onSeek(Math.min(1,Math.max(0,y))))},children:[g("canvas",{id:"scrubCanvas",ref:s}),g("div",{class:"played",style:{width:`${(t*100).toFixed(3)}%`}}),i&&i.marks.filter(p=>p.h>=0&&p.h<=i.hours).map((p,x)=>g("span",{class:`tmark ${p.kind} ${p.tone??""}`,"data-mark":i.marks.indexOf(p),style:{left:`${(p.h/i.hours*100).toFixed(3)}%`},onClick:()=>Oe.onSeek(Math.min(1,Math.max(0,p.h/i.hours)))},x)),g("div",{class:"ghost",style:{display:a===null?"none":"block",left:`${((a??0)*100).toFixed(3)}%`}}),g("div",{class:"playhead",id:"playhead",style:{left:`${(t*100).toFixed(3)}%`}})]})}),g("div",{class:"tl-now",id:"stepInfo",children:[g("div",{class:"row2",children:[g("span",{class:"micro",style:{color:"var(--text-2)"},children:Q("此刻","Now")}),g("span",{class:"grow"}),_&&g("span",{class:`trend ${_.dir}`,title:k("trendTip"),children:[_.dir!=="flat"&&g(qe,{name:_.dir==="up"?"up":"down",size:11}),k(_.dir==="up"?"trendUp":_.dir==="down"?"trendDown":"trendFlat"),_.dir!=="flat"&&g("b",{children:[_.rate>0?"+":"−",Math.abs(_.rate*1e3).toFixed(0),"k m³/h"]})]})]}),v?g(dt,{children:[g("div",{class:"kv",children:[g("div",{children:[k("c_sea"),g("b",{children:[v.tide.toFixed(2),g("u",{children:"mPD"})]})]}),g("div",{children:[k("c_rain"),g("b",{children:[v.rain.toFixed(0),g("u",{children:"mm/h"})]})]}),g("div",{children:["Hs",g("b",{children:[v.hs.toFixed(1),g("u",{children:"m"})]})]})]}),g("div",{class:"row2",children:m?g("span",{class:`sig ${_0(v.signal[1])}`,title:m,children:m}):g("span",{class:"storm",children:Q("无警告信号","No warning signal")})}),g("div",{class:"storm",title:Q("求解器时间步 · 每帧步数","solver time step · steps per frame"),children:[v.storm?`${v.storm} · `:"","dt ",v.dt.toFixed(2)," s · ",v.n,"/f"]})]}):g("div",{class:"storm",children:k("noMetrics")})]})]})}function OE(){const i=X.status.value;return i?g("div",{class:"toast",id:"status",role:"status",children:i}):null}function zE(){const i=X.probe.value;if(!i||!X.probeOn.value)return null;const e=!i.sea&&i.depth>=.01;return g("div",{class:"probe",style:{left:`${i.sx}px`,top:`${i.sy}px`},children:i.sea?g("span",{class:"pc",children:Q("海域（潮位边界）","Sea (tidal boundary)")}):g(dt,{children:[g("span",{class:"pd",children:[e&&g("span",{class:"swatch",style:{background:po(i.depth)}}),e?`${i.depth.toFixed(2)} m`:Q("干","dry"),e&&g("span",{class:"pc",style:{fontSize:"10px"},children:Ju()[v0(i.depth)]})]}),g("span",{class:"pc",children:[Q("最大","max")," ",i.hmax.toFixed(2)," m · ",Q("地面","ground")," ",i.ground.toFixed(1)," mPD"]})]})})}function BE(){const i=X.loading.value;return g("div",{id:"loading",style:{display:i?"flex":"none"},children:[g("div",{class:"ld-brand",children:[g("span",{class:"ld-mark",children:g("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","aria-hidden":"true",children:[g("path",{d:"M3 10c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"}),g("path",{d:"M3 16c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"})]})}),g("div",{children:[g("div",{class:"ld-nm",children:"HK Flood Lab"}),g("div",{class:"ld-sub",children:Q("香港洪涝实验室 · 交互式洪水数字孪生","Hong Kong interactive flood digital twin")})]})]}),g("div",{class:"ld-bar",children:g("i",{id:"loadingBar",style:{width:`${Math.round((i?.frac??0)*100)}%`}})}),g("div",{class:"ld-msg",id:"loadingText",children:i?.text||k("loading")})]})}function HE(){const i=X.lang.value,e=`shell ${X.leftTab.value?"":"left-closed"} ${X.panelsOff.value?"panels-off":""}`;return g("div",{class:e,children:[g(u1,{}),g(S1,{}),g(wE,{}),g(UE,{}),g(FE,{}),g(kE,{}),g(OE,{}),g(zE,{}),g(BE,{})]},i)}class VE{constructor(e){s1(e),$b(Qm(HE,{}),document.getElementById("ui-root")),this.labelSwipe()}labelSwipe(){const e=X.scenarios.value.find(t=>t.id===X.scenarioId.value);document.getElementById("swipeL").textContent=e?Q(e.A.zh,e.A.en):k("swipeLeft").replace(/[◀▶]/g,"").trim(),document.getElementById("swipeR").textContent=e?Q(e.B.zh,e.B.en):k("swipeRight").replace(/[◀▶]/g,"").trim()}get newRole(){return X.newRole.value}get showFac(){return X.showFac.value}getMeasureParams(e){return X.measureParams.value[e]}relabel(){X.lang.value=or(),this.labelSwipe()}setScenes(e,t){X.scenes.value=e,X.sceneId.value=t}setEvents(e,t){X.events.value=e,X.eventId.value=t}setScene(e){X.scene.value=e,X.sceneId.value=e.id}setEvent(e){X.event.value=e,X.eventId.value=e.id}setParams(e){X.params.value={...e}}setMeasures(e,t){X.measures.value=e,X.selMeasure.value=t}setMeasuresDirty(e,t){X.dirty.value=e,X.devSave.value=t}setDraftInfo(e,t){X.draft.value={n:e,len:t}}setTool(e){X.tool.value=e,e&&(X.leftTab.value="measures")}setCompare(e){X.compare.value=e}setScenarios(e,t){X.scenarios.value=e,X.scenarioId.value=t,this.labelSwipe()}setFlowMode(e){X.flowMode.value=e}setActive(e,t){X.active.value={...X.active.value,[e]:t}}setPlaying(e){X.playing.value=e}setSpeed(e){X.speed.value=e}setTime(e,t){X.time.value={label:e,frac:t}}setConditions(e){X.cond.value=e}setStepInfo(e){}setStatus(e){X.status.value=e}setLoading(e,t=""){X.loading.value=e===null?null:{frac:e,text:t}}togglePanels(){X.panelsOff.value=!X.panelsOff.value}setTimeline(e){X.timeline.value=e}setWaterMode(e){X.waterMode.value=e}setExag(e){X.exag.value=e}setTexMode(e){X.texMode.value=e}setCharts(e,t){X.charts.value={tide:e,rain:t}}setChartCursor(e){X.chartCursor.value=e}setProbe(e){X.probe.value=e}setMetrics(e,t){const n=X.metrics.value;if(!e)X.trend.value=null;else if(n&&e.t>n.t){const s=(e.volumeMm3-n.volumeMm3)/((e.t-n.t)/3600),r=Math.abs(s)/Math.max(.001,e.volumeMm3);X.trend.value={dir:e.volumeMm3<5e-4||r<.02?"flat":s>0?"up":"down",rate:s}}X.metrics.value=e,X.baseMetrics.value=t}setHotspots(e){X.hotspots.value=e}setValidation(e,t){X.validation.value={points:e,m:t}}setFacilities(e,t){X.facilities.value={m:e,base:t}}setPins(e,t,n,s){X.pins.value={list:e.map(r=>({...r,depth:r.depth.slice()})),t:t.slice(),sel:n,f:s}}}const Hr=900,GE="v0.9.2",am={"hk-island-east":"mangkhut-2018","tseung-kwan-o":"mangkhut-2018","sha-tin":"wanda-1962","tai-po":"mangkhut-2018","wong-tai-sin":"rainstorm-2023","victoria-harbour":"dubhe-1000","tai-o":"hato-2017","hk-overview":"dubhe-1000"},om=[12723548,1023370,7358696,11566347,6067213,4804695];function es(i){return new Date(i.length===16?`${i}:00+08:00`:`${i}+08:00`)}class WE{constructor(){W(this,"world");W(this,"ui");W(this,"solver",null);W(this,"baseline",null);W(this,"assets",null);W(this,"event",null);W(this,"sceneList",[]);W(this,"eventList",[]);W(this,"sceneId","hk-island-east");W(this,"eventId","mangkhut-2018");W(this,"params",{surgeScale:1,waveSetup:.2,waveHs:2,slr:0,rainScale:1,drainMmPerHour:40,hillCapMmPerHour:40,recoverGain:6,tideLockM:1.5,buildingsBlock:!0,manning:.035,subgrid:!0});W(this,"measures",null);W(this,"forcing",null);W(this,"playing",!1);W(this,"speed",900);W(this,"simT",0);W(this,"windowSec",86400);W(this,"compare",!1);W(this,"showBaseline",!1);W(this,"scenarioId","measures");W(this,"sceneScenarios",[]);W(this,"scenarioList",[]);W(this,"scenarioPick",{});W(this,"flowMode","particles");W(this,"splitFrac",.5);W(this,"showFacilities",!0);W(this,"flyAfterSeek",!1);W(this,"hinted",!1);W(this,"probeOn",!0);W(this,"probeT",0);W(this,"waterMode","now");W(this,"showLandmarks",!0);W(this,"showMeasureLabels",!0);W(this,"follow",!1);W(this,"followAt",null);W(this,"pins",[]);W(this,"pinT",[]);W(this,"pinMode",!1);W(this,"selPin",null);W(this,"pinSeq",1);W(this,"lastPinSample",-1e9);W(this,"spawnA",new Float32Array(0));W(this,"spawnB",new Float32Array(0));W(this,"metrics",null);W(this,"baseMetrics",null);W(this,"tool",null);W(this,"draft",[]);W(this,"selectedMeasure",null);W(this,"snapShore",!0);W(this,"modSigA","");W(this,"modSigB","");W(this,"lastFrame",performance.now());W(this,"lastMetrics",0);W(this,"lastLightning",0);W(this,"seekTarget",null);W(this,"dtBase",.5);W(this,"maxDepthSeen",0);W(this,"snaps",[]);W(this,"snapPool",[]);W(this,"snapEvery",0);W(this,"nextSnapT",0);W(this,"cache",null);W(this,"cacheKey",null);W(this,"cachedTimes",new Set);W(this,"cacheToken",0);W(this,"loadingToken",0);W(this,"flashTimer",0);const e=document.getElementById("view");this.world=new Nb(e,document.getElementById("labels")),this.ui=new VE({onSceneChange:t=>{this.sceneId=t,this.eventId=am[t]??this.eventId,this.ui.setEvents(this.eventList,this.eventId),this.load()},onEventChange:t=>{this.eventId=t,this.load(!1)},onParamChange:t=>{this.params=t,this.applyParams(),this.restart()},onMeasureTool:t=>this.setTool(t),onFinishDraft:()=>this.finishDraft(),onCancelDraft:()=>{this.draft=[],this.world.setDraft([],"wall"),this.setTool(null)},onUndoVertex:()=>this.undoVertex(),onSnapToggle:t=>{this.snapShore=t},onRemoveMeasure:t=>{this.measures?.remove(t),this.selectedMeasure===t&&(this.selectedMeasure=null),this.measuresChanged()},onClearMeasures:()=>{this.measures?.clearWhatIf(),this.selectedMeasure=null,this.measuresChanged()},onMeasureParam:()=>{},onSelectMeasure:t=>this.selectMeasure(t),onUpdateMeasure:(t,n)=>{this.measures?.update(t,n),this.measuresChanged()},onSaveMeasures:()=>this.saveMeasures(),onExportMeasures:()=>this.exportMeasures(),onImportMeasures:t=>this.importMeasures(t),onRevertMeasures:()=>this.revertMeasures(),onPlayToggle:()=>this.setPlaying(!this.playing),onReset:()=>this.restart(),onSpeed:t=>{this.speed=t,this.ui.setSpeed(t)},onSeek:t=>this.seek(t*this.windowSec),onCompare:()=>this.toggleCompare(),onScenario:t=>this.setScenario(t),onOrbit:()=>{const t=this.world.director.controls;t.autoRotate=!t.autoRotate,t.autoRotateSpeed=.6,this.ui.setActive("btnOrbit",t.autoRotate)},onTour:()=>this.tour(),onTexToggle:()=>{this.world.setTextureMode(this.world.texMode==="imagery"?"basemap":"imagery"),this.ui.setTexMode(this.world.texMode)},onPanels:()=>{this.ui.togglePanels(),this.syncLabelInset()},onLang:()=>{qb(or()==="zh"?"en":"zh"),document.documentElement.lang=or()==="zh"?"zh-CN":"en",this.ui.relabel(),this.ui.setScenes(this.sceneList,this.sceneId),this.ui.setEvents(this.eventList,this.eventId),this.refreshCharts(),this.refreshLabels()},onFlyTo:(t,n)=>this.world.director.flyTo(this.world.viewAt(t,n,700),2.2),onShowMax:t=>this.world.setShowMax(t),onShowBaseline:t=>{this.showBaseline=t,this.bindView()},onFlowMode:()=>this.cycleFlow(),onPeak:()=>this.jumpToPeak(),onHotspot:(t,n)=>this.world.director.flyTo(this.world.viewAt(t,n,450),2),onShowFacilities:t=>{this.showFacilities=t,this.refreshLabels()},onWaterMode:t=>{this.waterMode=t,this.world.setWaterMode(t),this.ui.setWaterMode(t)},onExag:()=>{const t=[1,1.5,2,3],n=t[(t.indexOf(this.world.exag)+1)%t.length];this.world.setExaggeration(n),this.ui.setExag(n),this.refreshLabels()},onCamera:t=>this.cameraPreset(t),onShowLandmarks:t=>{this.showLandmarks=t,this.refreshLabels()},onShowMeasureLabels:t=>{this.showMeasureLabels=t,this.refreshLabels()},onClearCache:()=>{this.clearRunCache()},onShadows:t=>this.world.setShadows(t),onProbe:t=>{this.probeOn=t,t||this.ui.setProbe(null)},onPinMode:()=>this.setPinMode(!this.pinMode),onRemovePin:t=>{this.pins=this.pins.filter(n=>n.id!==t),this.selPin===t&&(this.selPin=null),this.pinsChanged()},onRenamePin:(t,n)=>{const s=this.pins.find(r=>r.id===t);s&&(s.name=n,this.pinsChanged())},onSelectPin:t=>{this.selPin=t,this.pinsChanged()},onFlyPin:t=>{const n=this.pins.find(s=>s.id===t);n&&this.world.director.flyTo(this.world.viewAt(n.x,n.y,420),2)},onExportPins:()=>this.exportPins()}),this.ui.setSpeed(this.speed),this.ui.setParams(this.params),this.ui.setFlowMode(this.flowMode),this.bindPointer(e),this.bindSwipe(),window.addEventListener("resize",()=>this.syncLabelInset()),this.world.director.onTourEnd=()=>{this.ui.setActive("btnTour",!1),this.ui.setStatus(null)},this.init(),requestAnimationFrame(()=>this.frame())}async init(){try{[this.sceneList,this.eventList]=await Promise.all([Ng(),kg()])}catch(t){this.ui.setLoading(1,`数据索引加载失败 / failed to load index: ${t}`);return}const e=new URLSearchParams(location.search);e.get("scene")&&this.sceneList.some(t=>t.id===e.get("scene"))&&(this.sceneId=e.get("scene")),this.sceneList.some(t=>t.id===this.sceneId)||(this.sceneId=this.sceneList[0].id),this.eventId=e.get("event")??am[this.sceneId]??this.eventList[0].id,this.eventList.some(t=>t.id===this.eventId)||(this.eventId=this.eventList[0].id),this.ui.setScenes(this.sceneList,this.sceneId),this.ui.setEvents(this.eventList,this.eventId),await this.load()}async load(e=!0){const t=++this.loadingToken;this.playing=!1,this.ui.setPlaying(!1),this.ui.setLoading(.02,k("loading"));try{const n=Og(this.eventId);if(e||!this.assets){if([this.assets,this.sceneScenarios]=await Promise.all([Bg(this.sceneId,(a,o)=>this.ui.setLoading(a*.8,`${k("loading")} ${o}`)),zg(this.sceneId)]),t!==this.loadingToken)return;this.buildSolvers()}if(this.event=await n,t!==this.loadingToken)return;history.replaceState(null,"",`?scene=${this.sceneId}&event=${this.eventId}`),this.params.waveSetup=this.event.kind==="typhoon"?.2:this.event.kind==="fictional"?.3:0;const s=this.event.tide.QUB;let r=0;if(s)for(let a=0;a<s.surge.length;a++){const o=s.surge[a];o!==null&&o>r&&(r=o)}this.params.waveHs=this.event.kind==="typhoon"?+(2*Math.min(1.5,Math.max(.3,r/2.35))).toFixed(2):this.event.kind==="fictional"?3:0,this.ui.setParams(this.params),this.buildForcing(),this.ui.setScene(this.assets.meta),this.ui.setEvent(this.event),this.hinted||(this.hinted=!0,setTimeout(()=>this.flash(Q("拖动平移 · 右键或 Shift + 拖动旋转 · 滚轮缩放","Drag to pan · right button or Shift + drag to orbit · wheel to zoom")),1500)),this.syncScenarios(),this.applyMeasures(),this.applyParams(),this.restart(),this.refreshCharts(),this.refreshLabels(),this.ui.setLoading(null),this.setPlaying(!0)}catch(n){console.error(n),this.ui.setLoading(1,`加载失败 / load failed: ${n}`)}}buildSolvers(){const e=this.assets,t=e.meta;this.solver?.dispose(),this.baseline?.dispose(),this.baseline=null,this.disposeSnapshots(),this.solver=new el(this.world.renderer,{W:t.cols,H:t.rows,dx:t.res},e.dem,e.bldh,e.mask,e.expo,e.basin,e.chan,e.ug,e.sgCell&&e.sgFace?{cell:e.sgCell,face:e.sgFace}:null),this.measures=new kb(t.cols,t.rows,t.res),this.measures.sea=e.mask,this.selectedMeasure=null,this.loadMeasures(),this.applyMeasures(),this.world.loadScene(e,this.solver.terrainTex,this.solver.modTex,this.solver.stateTex,this.solver.auxTex),this.spawnA=new Float32Array(t.cols*t.rows*4),this.spawnB=new Float32Array(t.cols*t.rows*4),this.compare&&this.makeBaseline(),this.syncSplit()}loadMeasures(){const e=this.assets,t=this.measures;t.replaceAll([]);for(const o of e.meta.defences??[])t.add({kind:"wall",pts:[{x:o.x,y:o.y}],cells:o.cells,height:o.height_m,key:o.id,name:o.zh,name_en:o.en,role:"record",built:o.built,in_dtm:o.in_dtm,src:o.src,locked:!0});const n=e.savedMeasures;let s=null;try{const o=localStorage.getItem(this.measuresKey());o&&(s=JSON.parse(o))}catch{s=null}const r=s&&(!n||(s.saved??"")>(n.saved??"")),a=r?s:n;a&&t.loadSaved(a,e.meta.origin),this.ui.setMeasuresDirty(!!r,!1)}measuresKey(){return`hkfl.measures.${this.sceneId}`}ctx(e,t=this.simT/3600,n){const s={eventId:this.eventId,eventStart:this.event?es(this.event.window.start).getTime():0,simH:t,whatIf:e};if(n){const r=n.measures;s.whatIf=r==="all",s.bare=r==="none",Array.isArray(r)&&(s.keys=r),n.exclude?.length&&(s.exclude=n.exclude)}return s}sideCtx(e,t){const n=this.activeScenario();return n?this.ctx(!1,t,n[e]):this.ctx(e==="B",t)}activeScenario(){return this.compare?this.scenarioList.find(e=>e.id===this.scenarioId)??null:null}sideModOf(e){const t=this.activeScenario();return t?Hg(t[e]):Vr}syncScenarios(){this.scenarioList=Gg(this.sceneScenarios,this.event);const e=this.measures?.measures.some(s=>(s.role??"whatif")==="whatif"&&!s.scenario_only),t=this.scenarioList.find(s=>!s.generic),n=this.scenarioPick[`${this.sceneId}/${this.eventId}`]??(t&&!e?t.id:"measures");this.scenarioId=this.scenarioList.some(s=>s.id===n)?n:"measures",this.ui.setScenarios(this.scenarioList,this.scenarioId)}setScenario(e){if(this.scenarioList.some(t=>t.id===e)){if(this.scenarioId=e,this.scenarioPick[`${this.sceneId}/${this.eventId}`]=e,this.ui.setScenarios(this.scenarioList,e),!this.compare){this.toggleCompare();return}this.applyMeasures(),this.buildForcing(),this.refreshCharts(),this.syncSplit(),this.restart(),this.setPlaying(!0)}}applyMeasures(){const e=this.measures;if(e){if(this.solver){const t=this.sideCtx("B");e.rasterize(this.solver.modData,t),this.solver.updateMod(),this.modSigA=e.signature(t)}if(this.baseline){const t=this.sideCtx("A");e.rasterize(this.baseline.modData,t),this.baseline.updateMod(),this.modSigB=e.signature(t)}this.refreshMeasureViews()}}refreshMeasureViews(){const e=this.measures;if(!e)return;const t=this.sideCtx("B"),n=e.measures.map(s=>({m:s,eff:e.effect(s,t),cost:e.cost(s),exists:e.existsAt(s,t)}));this.world.setMeasures(n.map(s=>({m:s.m,eff:s.eff,selected:s.m.id===this.selectedMeasure}))),this.ui.setMeasures(n,this.selectedMeasure)}tickMeasures(){const e=this.measures;if(!e||!this.solver)return;const t=this.sideCtx("B"),n=e.signature(t);if(n!==this.modSigA&&(e.rasterize(this.solver.modData,t),this.solver.updateMod(),this.modSigA=n,this.refreshMeasureViews()),this.baseline){const s=this.sideCtx("A"),r=e.signature(s);r!==this.modSigB&&(e.rasterize(this.baseline.modData,s),this.baseline.updateMod(),this.modSigB=r)}}makeBaseline(){const e=this.assets,t=e.meta;if(this.baseline?.dispose(),this.baseline=new el(this.world.renderer,{W:t.cols,H:t.rows,dx:t.res},e.dem,e.bldh,e.mask,e.expo,e.basin,e.chan,e.ug,e.sgCell&&e.sgFace?{cell:e.sgCell,face:e.sgFace}:null),this.measures){const n=this.sideCtx("A");this.measures.rasterize(this.baseline.modData,n),this.baseline.updateMod(),this.modSigB=this.measures.signature(n)}}buildForcing(){const e=this.event,t=this.assets.meta,n=es(e.window.start),s=es(e.window.end);this.windowSec=(s.getTime()-n.getTime())/1e3;const r=e.tide[t.gauge]??e.tide.QUB,a=[],o=[],l=[],c=[],u=(t.tide_lag_min||0)*60;for(let x=0;x<r.t.length;x++){const y=(es(r.t[x]).getTime()-n.getTime())/1e3+u;if(y<-7200||y>this.windowSec+7200)continue;const w=r.astro[x],I=r.surge[x];w!==null&&(a.push(y),l.push(w),c.push(r.obs[x]),o.push(w+(I??0)*t.tide_scale))}const d=[],h=[];for(let x=0;x<e.rain.t.length;x++)d.push((es(e.rain.t[x]).getTime()-n.getTime())/1e3),h.push(e.rain.mm[x]);let f=.3;for(let x=0;x<a.length;x++)f=Math.max(f,o[x]-l[x]);this.forcing={tideT:a,tideL:o,astro:l,obs:c,rainT:d,rainMm:h,hours:this.windowSec/3600,start:n,surgePeak:f};const v=t.dem_stats?.zmin??0,_=Math.max(...o)+this.params.waveSetup+this.params.slr+Math.max(this.sideModOf("A").slr,this.sideModOf("B").slr),m=Math.max(2.5,_-v+1),p=.45*t.res/Math.sqrt(9.81*m);this.dtBase=p,this.maxDepthSeen=0,this.solver?.setDt(p),this.baseline?.setDt(p),this.drawTimeline()}drawTimeline(){const e=this.forcing,t=this.event;if(!e||!t||!this.assets)return;const n=[];for(const[a,o,l]of t.signals??[])n.push({h:(es(a).getTime()-e.start.getTime())/36e5,zh:o,en:l,kind:"sig",tone:_0(l)});const s=this.assets.meta.rain_mult[this.eventId]??1;let r=-1;for(let a=0;a<e.rainMm.length;a++)(r<0||e.rainMm[a]>e.rainMm[r])&&(r=a);if(r>=0&&e.rainMm[r]*s>=10){const a=(e.rainMm[r]*s).toFixed(0);n.push({h:e.rainT[r]/3600+.5,zh:`雨强峰值 ${a} mm/h`,en:`Rain peak ${a} mm/h`,kind:"peak-rain"})}if(t.kind!=="rainstorm"&&e.tideL.length){let a=0;for(let l=1;l<e.tideL.length;l++)e.tideL[l]>e.tideL[a]&&(a=l);const o=e.tideL[a].toFixed(2);n.push({h:e.tideT[a]/3600,zh:`潮位峰值 ${o} mPD`,en:`Sea-level peak ${o} mPD`,kind:"peak-tide"})}this.ui.setTimeline({hours:e.hours,fmt:a=>this.timeLabel(a*3600),tick:a=>this.tick(a),marks:n,tide:{x:e.tideT.map(a=>a/3600),y:e.tideL},rain:{x:e.rainT.map(a=>a/3600),y:e.rainMm}})}stormParts(e){const t=this.event,n=this.forcing;if(!t||!n)return{sig:null,dist:""};const s=n.start.getTime()+e*1e3;let r=null;for(const[l,c,u]of t.signals??[])es(l).getTime()<=s&&(r=[c,u]);let a="";const o=t.track;if(o.length>=2){const l=o.map(c=>es(c[0]).getTime());if(s>=l[0]&&s<=l[l.length-1]){let c=0;for(;c<l.length-2&&l[c+1]<s;)c++;const u=(s-l[c])/(l[c+1]-l[c]),d=o[c][1]+(o[c+1][1]-o[c][1])*u,h=o[c][2]+(o[c+1][2]-o[c][2])*u,f=6371,v=(h-22.302)*Math.PI/180,_=(d-114.174)*Math.PI/180,m=Math.sin(v/2)**2+Math.cos(h*Math.PI/180)*Math.cos(22.302*Math.PI/180)*Math.sin(_/2)**2,p=2*f*Math.asin(Math.sqrt(m)),x=(Math.atan2(d-114.174,h-22.302)*180/Math.PI+360)%360,y=Q("北,东北,东,东南,南,西南,西,西北","N,NE,E,SE,S,SW,W,NW").split(",");a=`${Q("风暴中心","storm centre")} ${p.toFixed(0)} km ${y[Math.round(x/45)%8]}`}}return{sig:r,dist:a}}tick(e){return new Date(this.forcing.start.getTime()+e*36e5).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"Asia/Hong_Kong"})}timeLabel(e){return new Date(this.forcing.start.getTime()+e*1e3).toLocaleString("en-GB",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",timeZone:"Asia/Hong_Kong"})+" HKT"}tideAt(e,t=Vr){const n=this.forcing,s=za(n.tideT,n.tideL,e,n.astro),r=za(n.tideT,n.astro,e,n.astro),a=s-r;return r+a*this.params.surgeScale*t.tideScale+this.params.waveSetup+this.params.slr+t.slr}rainAt(e,t=Vr){const n=this.forcing;let s=0;for(let a=0;a<n.rainT.length;a++)if(e>=n.rainT[a]&&e<n.rainT[a]+3600){s=n.rainMm[a];break}const r=this.assets.meta.rain_mult[this.eventId]??1;return s*r*this.params.rainScale*t.rainScale/36e5}rainMmAt(e){return this.rainAt(e)*36e5}hsAt(e,t=Vr){const n=this.forcing,r=(za(n.tideT,n.tideL,e,n.astro)-za(n.tideT,n.astro,e,n.astro))*this.params.surgeScale*t.tideScale/n.surgePeak;return r<.2?0:this.params.waveHs*Math.min(1,r)}applyParams(){const e=this.params.drainMmPerHour/36e5;for(const t of[this.solver,this.baseline])t?.setParams({manning:this.params.manning,buildings:this.params.buildingsBlock,drain:e,bldBlock:1,manningBld:.6,hillCap:this.params.hillCapMmPerHour/36e5,recover:this.params.recoverGain,tideLock:this.params.tideLockM,subgrid:this.params.subgrid});this.world.setBuildingsBlock(this.params.buildingsBlock),this.world.setSubgrid(this.params.subgrid&&!!this.solver?.subgridAvailable),this.forcing&&this.buildForcing()}restart(){if(!(!this.solver||!this.forcing)){this.solver.reset(this.tideAt(0,this.sideModOf("B"))),this.baseline?.reset(this.tideAt(0,this.sideModOf("A"))),this.simT=0,this.metrics=null,this.baseMetrics=null,this.lastMetrics=0,this.maxDepthSeen=0,this.solver.setDt(this.dtBase),this.baseline?.setDt(this.dtBase),this.ui.setMetrics(null,null),this.ui.setTime(this.timeLabel(0),0),this.pinT=[];for(const e of this.pins)e.depth=[],e.level=[];this.lastPinSample=-1e9,this.pinsChanged(!1),this.world.resetFlow(),this.world.setBasements(this.basementItems(null)),this.clearSnapshots(),this.planSnapshots(),this.takeSnapshot(),this.loadCachedRun()}}runKey(){if(!this.assets||!this.solver||this.compare)return null;const e=this.assets.meta,t=this.measures?this.measures.measures.map(n=>({k:n.kind,r:n.role??"whatif",p:n.pts,c:n.cells?.length,h:n.height,q:n.rate,v:n.capacity,f:n.factor,d:n.radius,b:n.built,x:n.removed,i:n.in_dtm,e:n.events,s:n.from_h,t:n.to_h,n:n.info,o:n.scenario_only})):[];return eb({v:GE,scene:this.sceneId,stamp:e.dem_stats??null,cols:e.cols,rows:e.rows,event:this.eventId,params:this.params,sg:this.solver.subgridOn,ms:t})}async loadCachedRun(){this.cacheKey=this.runKey(),this.cachedTimes=new Set;const e=++this.cacheToken;if(!this.cacheKey||(this.cache||(this.cache=await Rl.open()),!this.cache||e!==this.cacheToken))return;const t=this.cacheKey;let n=[];try{n=await this.cache.list(t)}catch{return}if(e!==this.cacheToken)return;for(const a of n)this.cachedTimes.add(a);const s=Math.max(2,Math.floor(32e7/el.snapshotBytes(this.assets.meta.cols,this.assets.meta.rows)));let r=0;for(const a of n){if(e!==this.cacheToken||!this.solver)return;if(this.snaps.some(c=>Math.abs(c.t-a)<1))continue;if(this.snaps.length>=s)break;let o=null;try{o=await this.cache.get(t,a)}catch{o=null}if(!o||e!==this.cacheToken||!this.solver)continue;const l=this.solver.snapshotFromData(new Float32Array(o.state),new Float32Array(o.aux),o.t,o.dt,this.snapPool.pop());this.snaps.push({t:o.t,a:l,b:null,maxDepthSeen:o.maxDepthSeen}),r++}r&&this.flash(Q(`已从本机缓存恢复 ${r} 个关键帧，时间轴可直接跳转`,`${r} keyframes restored from the browser cache: the timeline jumps without recomputing`))}persistSnapshot(e){const t=this.cacheKey,n=this.cache;if(!t||!n||!this.solver||this.cachedTimes.has(e.t))return;this.cachedTimes.add(e.t);const s=this.solver.readSnapshot(e.a);n.put(t,{t:e.t,dt:e.a.dt,maxDepthSeen:e.maxDepthSeen,state:s.state.buffer,aux:s.aux.buffer}).catch(()=>{})}async clearRunCache(){this.cache||(this.cache=await Rl.open()),await this.cache?.clear(),this.cachedTimes=new Set,this.flash(Q("本机缓存已清空","Browser cache cleared"))}basementItems(e){const t=this.assets?.meta;return t?(t.facilities??[]).filter(n=>n.ug).map(n=>({id:n.id,x:n.x,y:n.y,area:n.ug.area,cap:n.ug.cap,depth:e?.facDepths?.[n.id]??0})):[]}planSnapshots(){const e=this.assets;if(!e){this.snapEvery=0;return}const t=el.snapshotBytes(e.meta.cols,e.meta.rows)*(this.baseline?2:1),n=Math.max(2,Math.floor(32e7/t));this.snapEvery=Math.max(1800,Math.ceil(this.windowSec/n/Hr)*Hr),this.nextSnapT=this.snapEvery}checkpoint(){const e=this.solver;this.maxDepthSeen=Math.max(this.maxDepthSeen,e.maxDepth(),this.baseline?this.baseline.maxDepth():0);const t=.45*this.assets.meta.res/Math.sqrt(9.81*Math.max(1,this.maxDepthSeen*1.4+.5));if(t<e.dt&&(e.setDt(t),this.baseline?.setDt(t)),this.snapEvery>0&&this.simT>=this.nextSnapT-1&&this.simT<this.windowSec)for(this.takeSnapshot();this.nextSnapT<=this.simT+1;)this.nextSnapT+=this.snapEvery}clearSnapshots(){for(const e of this.snaps)this.snapPool.push(e.a),e.b&&this.snapPool.push(e.b);this.snaps=[]}disposeSnapshots(){this.clearSnapshots();for(const e of this.snapPool)e.rt.dispose();this.snapPool=[]}takeSnapshot(){const e=this.solver;if(this.snaps.some(r=>Math.abs(r.t-this.simT)<this.snapEvery*.5))return;const t=e.snapshot(this.snapPool.pop()),n=this.baseline?this.baseline.snapshot(this.snapPool.pop()):null,s={t:this.simT,a:t,b:n,maxDepthSeen:this.maxDepthSeen};this.snaps.push(s),this.simT>1&&!this.baseline&&this.persistSnapshot(s)}keyframeBefore(e){let t=null;for(const n of this.snaps)n.t<=e&&(!this.baseline||n.b)&&(!t||n.t>t.t)&&(t=n);return t}restoreSnapshot(e){this.solver.restore(e.a),this.baseline&&e.b&&this.baseline.restore(e.b),this.simT=e.t,this.metrics=null,this.baseMetrics=null,this.lastMetrics=0,this.maxDepthSeen=e.maxDepthSeen;let t=0;for(;t<this.pinT.length&&this.pinT[t]<=e.t+1;)t++;this.pinT.length=t;for(const n of this.pins)n.depth.length=Math.min(n.depth.length,t),n.level.length=Math.min(n.level.length,t);this.lastPinSample=t?this.pinT[t-1]:-1e9,this.pinsChanged(!1),this.world.resetFlow(),this.nextSnapT=Math.max(this.snapEvery,(Math.floor(e.t/this.snapEvery)+1)*this.snapEvery),this.ui.setTime(this.timeLabel(this.simT),this.simT/this.windowSec)}setPlaying(e){this.playing=e,this.ui.setPlaying(e)}seek(e){if(e=Math.max(0,Math.min(this.windowSec,e)),e<this.simT){const t=this.keyframeBefore(e);t?this.restoreSnapshot(t):this.restart()}else if(!this.pins.length){const t=this.keyframeBefore(e);t&&t.t>this.simT&&this.restoreSnapshot(t)}if(!this.pins.length){const t=this.snaps.filter(n=>n.t>=e&&n.t-e<120&&(!this.baseline||n.b)).sort((n,s)=>n.t-s.t)[0];t&&t.t!==this.simT&&(this.restoreSnapshot(t),e=t.t)}this.seekTarget=e}setTool(e){this.tool=e,this.draft=[],this.world.setDraft([],"wall"),this.ui.setTool(e),this.ui.setDraftInfo(0,0),document.body.style.cursor=e?"crosshair":"default"}bindPointer(e){let t=null;e.addEventListener("pointerdown",n=>{t={x:n.clientX,y:n.clientY,t:performance.now()},this.follow&&(this.follow=!1,this.ui.setActive("btnFollow",!1))}),e.addEventListener("pointerup",n=>{if(!t)return;const s=Math.hypot(n.clientX-t.x,n.clientY-t.y),r=performance.now()-t.t;if(t=null,s>5||r>600)return;if(this.pinMode){const l=this.world.raycastGround(n.clientX,n.clientY);l&&this.addPin(l.x,l.y);return}if(!this.tool){const l=this.world.pickMeasure(n.clientX,n.clientY);this.selectMeasure(l);return}const a=this.world.raycastGround(n.clientX,n.clientY);if(!a)return;let o={x:a.x,y:a.y};if(this.snapShore&&(this.tool==="wall"||this.tool==="sandbag")&&(o=this.snapToShore(o)),this.tool==="pump"){this.commitMeasure([o]);return}this.draft.push(o),this.world.setDraft(this.draft,this.tool),this.ui.setDraftInfo(this.draft.length,this.draftLength())}),e.addEventListener("dblclick",()=>{this.tool&&this.draft.length&&this.finishDraft()}),e.addEventListener("pointermove",n=>{if(!this.probeOn||n.buttons||!this.solver||!this.assets)return;const s=performance.now();if(s-this.probeT<90)return;this.probeT=s;const r=this.world.labelInset;if(n.clientX<r.l||n.clientX>innerWidth-r.r||n.clientY<r.t||n.clientY>innerHeight-r.b){this.ui.setProbe(null);return}const a=this.world.raycastGround(n.clientX,n.clientY);if(!a){this.ui.setProbe(null);return}const o=this.assets,l=o.meta.res,c=o.meta.cols,u=Math.floor(a.x/l),d=Math.floor(a.y/l);if(u<0||d<0||u>=c||d>=o.meta.rows){this.ui.setProbe(null);return}const h=d*c+u,f=this.solver.readCell(u,d),v=Math.max(0,this.solver.subgridOn?f.aux[3]:f.state[0]);this.ui.setProbe({sx:n.clientX,sy:n.clientY,depth:v,hmax:f.state[3],ground:o.dem[h],sea:!!o.mask[h]})}),e.addEventListener("pointerleave",()=>this.ui.setProbe(null)),window.addEventListener("keydown",n=>{const s=n.target.tagName;if(!(s==="INPUT"||s==="TEXTAREA"||s==="SELECT")){if(n.key==="Escape"&&(this.pinMode?this.setPinMode(!1):this.tool?this.setTool(null):this.selectMeasure(null)),n.key==="Enter"&&this.tool&&this.finishDraft(),n.key==="Backspace"&&this.tool&&(n.preventDefault(),this.undoVertex()),n.key==="Delete"&&this.selectedMeasure!==null&&!this.tool){const r=this.selectedMeasure;this.measures?.remove(r),this.selectedMeasure=null,this.measuresChanged()}n.key===" "&&s!=="BUTTON"&&(n.preventDefault(),this.setPlaying(!this.playing))}})}draftLength(){let e=0;for(let t=1;t<this.draft.length;t++)e+=Math.hypot(this.draft[t].x-this.draft[t-1].x,this.draft[t].y-this.draft[t-1].y);return e}undoVertex(){!this.tool||!this.draft.length||(this.draft.pop(),this.world.setDraft(this.draft,this.tool),this.ui.setDraftInfo(this.draft.length,this.draftLength()))}snapToShore(e){const t=this.assets;if(!t)return e;const n=t.meta.cols,s=t.meta.rows,r=t.meta.res,a=Math.floor(e.x/r),o=Math.floor(e.y/r);let l=e,c=1/0;if(a<0||o<0||a>=n||o>=s||!t.mask[o*n+a])return e;for(let u=o-3;u<=o+3;u++)for(let d=a-3;d<=a+3;d++){if(d<0||u<0||d>=n||u>=s)continue;const h=u*n+d;if(t.mask[h]||!(d>0&&t.mask[h-1]||d<n-1&&t.mask[h+1]||u>0&&t.mask[h-n]||u<s-1&&t.mask[h+n]))continue;const v=(d+.5)*r,_=(u+.5)*r,m=Math.hypot(v-e.x,_-e.y);m<c&&(c=m,l={x:v,y:_})}return l}finishDraft(){if(this.tool){if(this.draft.length===0){this.setTool(null);return}(this.tool==="wall"||this.tool==="sandbag")&&this.draft.length<2||this.commitMeasure(this.draft)}}commitMeasure(e){if(!this.measures||!this.tool)return;const t=this.ui.getMeasureParams(this.tool),n=this.ui.newRole,s=this.measures.add({kind:this.tool,pts:e,height:t.height,rate:t.rate,capacity:t.capacity,factor:t.factor,radius:t.radius,role:n,key:n==="whatif"?void 0:`${this.tool}_${Date.now().toString(36)}`});this.draft=[],this.world.setDraft([],"wall"),this.tool==="pump"||this.setTool(null),this.selectedMeasure=n==="whatif"&&this.tool==="pump"?null:s.id,this.measuresChanged()}selectMeasure(e){this.selectedMeasure=e,this.refreshMeasureViews()}measuresChanged(){if(!this.measures||!this.solver)return;this.applyMeasures();try{localStorage.setItem(this.measuresKey(),JSON.stringify(this.measures.toSaved(this.sceneId,this.assets.meta.origin)))}catch{}this.ui.setMeasuresDirty(!0,!1);const e=this.playing||this.simT>0;this.restart(),e&&this.setPlaying(!0)}async saveMeasures(){if(!this.measures||!this.assets)return;const e=this.measures.toSaved(this.sceneId,this.assets.meta.origin),t=JSON.stringify(e,null,1);this.download(`${this.sceneId}.measures.json`,t),this.flash(Q("已下载 measures.json，放到 web/public/scenes/<场景>/ 即可生效","Downloaded measures.json; put it in web/public/scenes/<scene>/"))}exportMeasures(){!this.measures||!this.assets||this.download(`${this.sceneId}.measures.json`,JSON.stringify(this.measures.toSaved(this.sceneId,this.assets.meta.origin),null,1))}async importMeasures(e){if(!(!this.measures||!this.assets))try{const t=JSON.parse(await e.text());if(!Array.isArray(t.measures))throw new Error("no measures[]");this.measures.loadSaved(t,this.assets.meta.origin),this.measuresChanged(),this.flash(Q(`已导入 ${t.measures.length} 项`,`Imported ${t.measures.length} measures`))}catch(t){this.flash(Q(`导入失败：${t}`,`Import failed: ${t}`))}}revertMeasures(){try{localStorage.removeItem(this.measuresKey())}catch{}this.selectedMeasure=null,this.loadMeasures(),this.applyMeasures(),this.restart(),this.setPlaying(!0)}download(e,t,n="application/json"){const s=document.createElement("a");s.href=URL.createObjectURL(new Blob([t],{type:n})),s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(s.href),2e3)}flash(e){this.ui.setStatus(e),clearTimeout(this.flashTimer),this.flashTimer=window.setTimeout(()=>this.ui.setStatus(null),3500)}toggleCompare(){this.compare=!this.compare,this.ui.setCompare(this.compare),this.compare?(this.makeBaseline(),this.baseline.setDt(this.solver.dt)):(this.baseline?.dispose(),this.baseline=null,this.showBaseline=!1),this.applyMeasures(),this.applyParams(),this.refreshCharts(),this.syncSplit(),this.bindView(),this.restart(),this.setPlaying(!0)}syncSplit(){const e=document.getElementById("swipe");if(this.compare&&this.baseline&&this.solver){this.world.setBaselineTextures(this.baseline.stateTex,this.baseline.auxTex),this.world.split={frac:this.splitFrac,left:{state:this.baseline.stateTex,aux:this.baseline.auxTex},right:{state:this.solver.stateTex,aux:this.solver.auxTex}},e.style.display="block",e.style.left=`${this.splitFrac*100}%`;const t=this.activeScenario();this.ui.setStatus(t?Q(`A/B 分屏：拖动中间的把手，左 A = ${t.A.zh}，右 B = ${t.B.zh}`,`Swipe view: drag the handle; left A = ${t.A.en}, right B = ${t.B.en}`):k("swipeHint")),setTimeout(()=>this.ui.setStatus(null),5e3)}else this.world.setBaselineTextures(null),this.world.split=null,e.style.display="none"}bindSwipe(){const e=document.querySelector("#swipe .handle"),t=document.getElementById("swipe");let n=!1;e.addEventListener("pointerdown",r=>{n=!0,e.setPointerCapture(r.pointerId),r.preventDefault()}),e.addEventListener("pointermove",r=>{n&&(this.splitFrac=Math.min(.95,Math.max(.05,r.clientX/window.innerWidth)),t.style.left=`${this.splitFrac*100}%`,this.world.split&&(this.world.split.frac=this.splitFrac))});const s=()=>{n=!1};e.addEventListener("pointerup",s),e.addEventListener("pointercancel",s)}cycleFlow(){this.flowMode=this.flowMode==="particles"?"arrows":this.flowMode==="arrows"?"none":"particles",this.world.setFlowMode(this.flowMode),this.ui.setFlowMode(this.flowMode)}peakSec(){const e=this.forcing;if(this.event.kind==="rainstorm"){let r=0,a=-1;for(let o=0;o<e.rainT.length;o++)e.rainMm[o]>a&&(a=e.rainMm[o],r=e.rainT[o]);return Math.min(this.windowSec,r+5400)}let n=0,s=-1/0;for(let r=0;r<e.tideT.length;r++)e.tideL[r]>s&&(s=e.tideL[r],n=e.tideT[r]);return Math.min(this.windowSec,n+1200)}jumpToPeak(){this.forcing&&(this.flyAfterSeek=!0,this.seek(this.peakSec()),this.setPlaying(!0))}hotspotLabels(e){const t=this.assets.meta.pois;return e.map(n=>{let s="",r=1/0;for(const a of t){const o=Math.hypot(a.x-n.x,a.y-n.y);o<r&&(r=o,s=a.name)}return{...n,name:s?`${s.split(" ")[0]}${r>250?` ${(r/1e3).toFixed(1)} km`:""}`:""}})}bindView(){const e=this.showBaseline&&this.baseline?this.baseline:this.solver;e&&this.world.setStateTextures(e.stateTex,e.auxTex)}tour(){const e=this.world.director;if(e.touring){e.stopTour();return}const n=this.assets.meta.pois.map(s=>this.world.viewAt(s.x,s.y,650));n.length||n.push(this.world.defaultView()),e.startTour(n),this.ui.setActive("btnTour",!0),this.ui.setStatus(k("tourRunning"))}refreshCharts(){const e=this.forcing,t=this.event;if(!e||!t)return;const n=this.assets.meta,s=n.gauge,r=e.tideT.map(f=>f/3600),a=e.tideT.map(f=>this.tideAt(f)),o=[],l=t.peaks_model[s],c=t.observed_peaks[s];if(c!==void 0&&l){const f=(es(l.t).getTime()-e.start.getTime())/36e5+(n.tide_lag_min||0)/60;o.push({x:f,y:c,label:`${k("peakObs")} ${(c+.146).toFixed(2)} mCD`,color:on.peak})}const u={kind:"line",xMin:0,xMax:e.hours,unit:"mPD",yLabel:"mPD",cursor:this.simT/3600,xTick:f=>this.tick(f),markers:o,series:[{name:Q(`实测 ${s}`,`Observed ${s}`),color:on.obs,x:r,y:e.obs},{name:Q("天文潮","Astronomical"),color:on.astro,x:r,y:e.astro,dashed:!0},{name:Q("模型边界","Model boundary"),color:on.model,x:r,y:a}]},d=(n.rain_mult[this.eventId]??1)*this.params.rainScale,h={kind:"bar",xMin:0,xMax:e.hours,unit:"mm/h",yLabel:"mm/h",cursor:this.simT/3600,xTick:f=>this.tick(f),series:[{name:Q(`模型雨强（${t.rain.station} ×${d.toFixed(2)}）`,`Model rain (${t.rain.station} ×${d.toFixed(2)})`),color:on.rain,x:e.rainT.map(f=>f/3600+.5),y:e.rainMm.map(f=>f*d)}]};this.ui.setCharts(u,h),this.ui.setValidation(n.validation[this.eventId]??[],this.metrics)}refreshLabels(){this.assets&&this.world.setLabels(this.labelItems(this.metrics))}labelItems(e){const t=this.assets.meta,n=(t.validation[this.eventId]??[]).map(r=>({id:`v_${r.id}`,x:r.x,y:r.y,text:Q(r.zh,r.en),cls:`val ${r.cls}`,sub:e?`${Q("实际","obs")}${r.lower?"≥":"≈"}${r.cls==="none"?"0":r.depth.toFixed(1)} m / ${Q("模拟","sim")} ${(e.valDepths[r.id]??0).toFixed(2)} m`:r.cls==="none"?Q("实际无水浸","no flooding"):`${Q("实际","obs")}${r.lower?"≥":"≈"}${r.depth.toFixed(1)} m`}));for(const r of t.gauges)n.push({id:`g_${r.code}`,x:r.x,y:r.y,text:r.name,cls:"gauge",sub:e?`${(e.gaugeLevels[r.code]??0).toFixed(2)} mPD`:""});const s=new Set;if(e&&this.showFacilities){for(const a of t.facilities??[])if(a.ug){const o=e.facDepths?.[a.id]??0;s.add(a.id),n.push({id:`f_${a.id}`,x:a.x,y:a.y,text:`${ea[a.type]??""} ${a.name}`,cls:`facility ug ${o>=1?"severe":o>=.3?"moderate":"dry"}`,sub:`${Q("地库","basement")} ${o.toFixed(2)} / ${a.ug.cap.toFixed(1)} m${o>=a.ug.cap-.05?Q("，灌满",", full"):o>=1?Q("，地下一层淹没",", level flooded"):""}`})}const r=(t.facilities??[]).map(a=>({f:a,d:Math.max(e.facDepths?.[a.id]??0,this.baseMetrics?.facDepths?.[a.id]??0)})).filter(a=>a.d>=.3&&!a.f.ug).sort((a,o)=>o.d-a.d).slice(0,10);for(const{f:a,d:o}of r)s.add(a.id),n.push({id:`f_${a.id}`,x:a.x,y:a.y,text:`${ea[a.type]??""} ${a.name}`,cls:`facility ${o>=.5?"severe":"moderate"}`,sub:`${(e.facDepths?.[a.id]??0).toFixed(2)} m`})}if(this.showLandmarks){for(const[a,o]of t.pois.entries())n.push({id:`p_${a}`,x:o.x,y:o.y,text:o.name,cls:"landmark place"});const r=["mtr","hospital","mall","ferry"];for(const a of t.facilities??[])r.includes(a.type)&&!s.has(a.id)&&n.push({id:`l_${a.id}`,x:a.x,y:a.y,text:`${ea[a.type]??""} ${a.name}`,cls:"landmark"})}if(this.showMeasureLabels&&this.measures){const r=this.ctx(!0);for(const a of this.measures.measures){const o=a.role??"whatif";if(o==="whatif")continue;let l=0,c=0;if(a.pts.length){for(const f of a.pts)l+=f.x,c+=f.y;l/=a.pts.length,c/=a.pts.length}else if(a.cells?.length){const f=a.cells[Math.floor(a.cells.length/2)],v=t.cols,_=t.res;l=(f%v+.5)*_,c=(Math.floor(f/v)+.5)*_}else continue;const u=this.measures.effect(a,r),d=o==="record"?a.built?a.built>="2026"?`${Q("计划","planned")} ${a.built.slice(0,4)}`:a.built:"":a.from_h!==void 0&&a.from_h!==null?`${this.tick(a.from_h)} ${Q("起","on")}`:"",h=a.info?Q("仅标注","noted"):u>0?Q("生效","active"):u<0?Q("当时未建","not yet built"):o==="temporary"?Q("未启用","inactive"):Q("未建","not built");n.push({id:`m_${a.id}`,x:l,y:c,text:Q(a.name??a.key??"",a.name_en??a.name??a.key??""),cls:`measure ${o} ${a.info?"info":u===0?"off":u<0?"removed":"on"}`,sub:`${o==="record"?Q("记录","record"):Q("临时","temporary")}${d?" · "+d:""} · ${h}`})}}for(const r of this.pins){const a=r.depth.length?r.depth[r.depth.length-1]:null;n.push({id:`u_${r.id}`,x:r.x,y:r.y,text:r.name,cls:"upin",color:r.color,sub:a===null?"":`${a.toFixed(2)} m`})}return n}setPinMode(e){this.pinMode=e,e&&this.tool&&this.setTool(null),this.ui.setActive("btnPin",e),document.body.style.cursor=e?"crosshair":"default",this.ui.setStatus(e?k("pinHint"):null)}addPin(e,t){const n=this.pinSeq++;this.pins.push({id:n,name:`${Q("钉点","Pin")} ${n}`,x:e,y:t,color:om[(n-1)%om.length],depth:[],level:[]}),this.selPin=n,this.setPinMode(!1);const s=this.simT,r=this.playing||s>0;this.restart(),s>0&&this.seek(s),r&&this.setPlaying(!0),this.refreshLabels()}samplePins(e){const t=this.assets,n=t.meta.res,s=t.meta.cols;this.pinT.push(this.simT);for(const r of this.pins){const a=Math.floor(r.x/n),o=Math.floor(r.y/n),l=e.readCell(a,o),c=Math.max(0,e.subgridOn?l.aux[3]:l.state[0]);r.depth.push(c),r.level.push((t.dem[o*s+a]??0)+c)}this.lastPinSample=this.simT}pinsChanged(e=!0){const t=this.forcing;this.ui.setPins(this.pins,this.pinT.map(n=>n/3600),this.selPin,t?{hours:t.hours,tide:{x:t.tideT.map(n=>n/3600),y:t.tideT.map(n=>this.tideAt(n))},rain:{x:t.rainT.map(n=>n/3600),y:t.rainT.map(n=>this.rainMmAt(n))},cursor:this.simT/3600,xTick:n=>this.tick(n)}:null),e&&this.assets&&this.refreshLabels()}exportPins(){if(!this.pins.length||!this.forcing)return;const e=["time_hkt","hours","boundary_sea_level_mPD","rain_mm_per_h",...this.pins.flatMap(r=>[`${r.name} depth_m`,`${r.name} water_level_mPD`])],t=this.pinT.map((r,a)=>[this.timeLabel(r).replace(" HKT",""),(r/3600).toFixed(3),this.tideAt(r).toFixed(3),this.rainMmAt(r).toFixed(1),...this.pins.flatMap(o=>[o.depth[a]?.toFixed(3)??"",o.level[a]?.toFixed(3)??""])]),s=[`# HK Flood Lab pins · scene ${this.sceneId} · event ${this.eventId} · ${this.pins.map(r=>`${r.name} (x ${r.x.toFixed(0)} m, y ${r.y.toFixed(0)} m)`).join("; ")}`,e.map(r=>`"${r.replace(/"/g,'""')}"`).join(","),...t.map(r=>r.join(","))].join(`
`);this.download(`${this.sceneId}_${this.eventId}_pins.csv`,"\uFEFF"+s,"text/csv")}syncLabelInset(){const e=r=>{const a=document.getElementById(r);return a.offsetParent&&getComputedStyle(a).display!=="none"?a.getBoundingClientRect():null},t=e("left"),n=e("right"),s=e("bottom");this.world.labelInset={l:t?t.right:0,r:n?window.innerWidth-n.left:0,t:document.querySelector(".topbar")?.getBoundingClientRect().bottom??60,b:s?window.innerHeight-s.top:0}}cameraPreset(e){if(e==="follow"){this.follow=!this.follow,this.ui.setActive("btnFollow",this.follow),this.followAt=null,this.follow&&this.followHotspot();return}this.follow&&(this.follow=!1,this.ui.setActive("btnFollow",!1));const t=this.metrics?.hotspots?.[0];this.world.cameraPreset(e,e==="street"&&t?{x:t.x,y:t.y}:void 0)}followHotspot(){const e=this.metrics?.hotspots?.[0];e&&(this.followAt&&Math.hypot(this.followAt.x-e.x,this.followAt.y-e.y)<150||(this.followAt={x:e.x,y:e.y},this.world.director.flyTo(this.world.viewAt(e.x,e.y,520),2.2)))}computeMetrics(e,t="A"){const n=this.assets,s=n.meta,r=s.cols,a=s.rows,o=s.res,l=e.readState(),c=e.readAux(),u=e.subgridOn,d=n.mask,h=n.bldh;let f=0,v=0,_=0,m=0,p=0;const x=t==="A"?this.spawnA:this.spawnB;let y=0;const w=Math.max(1,Math.round(150/o)),I=Math.ceil(r/w),C=new Float32Array(I*Math.ceil(a/w)),P=new Int32Array(C.length).fill(-1),U=new Float32Array(C.length),ie=new Int32Array(C.length),S=Math.ceil(300/o);for(let F=0;F<r*a;F++){if(d[F])continue;const ne=u?c[F*4+3]:l[F*4];ne>p&&(p=ne);const pe=F%r,le=F/r|0;if(pe<S||le<S||pe>=r-S||le>=a-S)continue;const oe=c[F*4+1];if(ne>.06&&oe>.12&&h[F]===0&&y*2+3<x.length&&(x[y*2]=(pe+.5)*o,x[y*2+1]=(le+.5)*o,y++,oe>.6&&(x[y*2]=(pe+.5)*o,x[y*2+1]=(le+.5)*o,y++)),h[F]>0||n.dem[F]<2||n.basin[F]||n.rim[F]||n.steep[F])continue;const me=ne;me>f&&(f=me),me>.15&&v++,me>.5&&_++,m+=me;const he=l[F*4+3],se=(le/w|0)*I+(pe/w|0);he>C[se]&&(C[se]=he,P[se]=F),he>=.3&&(U[se]+=Math.min(he,1.5),ie[se]++)}this.world.setFlowSpawn(t,x,y);const b=[];for(let F=0;F<C.length;F++)ie[F]>=3&&b.push(F);b.sort((F,ne)=>U[ne]-U[F]);const H=[];for(const F of b){const ne=P[F],pe=(ne%r+.5)*o,le=((ne/r|0)+.5)*o;if(H.every(oe=>Math.hypot(oe.x-pe,oe.y-le)>=350)&&H.push({x:pe,y:le,depth:C[F],area:ie[F]*o*o}),H.length>=6)break}let z=0;for(const F of n.buildings){const ne=Math.min(r-1,Math.max(0,Math.floor(F.c[0]/o))),pe=Math.min(a-1,Math.max(0,Math.floor(F.c[1]/o)));let le=0;for(let oe=-1;oe<=1;oe++)for(let me=-1;me<=1;me++){const he=ne+me,se=pe+oe;if(he<0||se<0||he>=r||se>=a)continue;const fe=se*r+he;d[fe]||n.steep[fe]||(le=Math.max(le,l[fe*4+3]))}le>.15&&z++}const j={};for(const F of s.facilities??[])if(F.ug){let ne=0;for(const pe of F.ug.cells)ne+=c[pe*4];j[F.id]=ne*o*o/F.ug.area}else j[F.id]=this.maxDepthNear(l,F.x,F.y,60);const Z={};for(const F of s.validation[this.eventId]??[])Z[F.id]=F.ug?j[F.ug]??0:F.berm!==void 0?Math.max(0,this.peakTideSoFar(e.time,this.sideModOf(e===this.baseline?"A":"B"))-F.berm):this.maxDepthNear(l,F.x,F.y,60);const Y={};for(const F of s.gauges){const ne=Math.floor(F.x/o),pe=Math.floor(F.y/o);let le=-1,oe=1e9;for(let me=-3;me<=3;me++)for(let he=-3;he<=3;he++){const se=ne+he,fe=pe+me;if(se<0||fe<0||se>=r||fe>=a)continue;const xe=fe*r+se;if(!d[xe])continue;const ge=he*he+me*me;ge<oe&&(oe=ge,le=xe)}le>=0&&(Y[F.code]=l[le*4]-6)}return{t:e.time,maxDepth:f,maxDepthAll:p,floodedAreaKm2:v*o*o/1e6,floodedAreaSevereKm2:_*o*o/1e6,buildingsAffected:z,volumeMm3:m*o*o/1e6,valDepths:Z,gaugeLevels:Y,hotspots:H,facDepths:j}}peakTideSoFar(e,t=Vr){const n=this.forcing;let s=-99;for(let r=0;r<n.tideT.length;r++){const a=n.tideT[r];a<0||a>e||(s=Math.max(s,this.tideAt(a,t)))}return Math.max(s,this.tideAt(Math.max(0,e),t))}maxDepthNear(e,t,n,s){const r=this.assets,a=r.meta.cols,o=r.meta.rows,l=r.meta.res,c=Math.floor(t/l),u=Math.floor(n/l),d=Math.ceil(s/l);let h=0;for(let f=u-d;f<=u+d;f++)for(let v=c-d;v<=c+d;v++){if(v<0||f<0||v>=a||f>=o)continue;const _=f*a+v;r.mask[_]||r.bldh[_]>0||r.dem[_]<2.4||r.basin[_]||r.rim[_]||r.steep[_]||Math.hypot((v+.5)*l-t,(f+.5)*l-n)>s||e[_*4+3]>h&&(h=e[_*4+3])}return h}frame(){requestAnimationFrame(()=>this.frame());const e=performance.now(),t=Math.min(.1,(e-this.lastFrame)/1e3);this.lastFrame=e;const n=this.solver;if(n&&this.forcing){let s=0,r=260;if(this.seekTarget!==null)if(s=Math.min(this.seekTarget-this.simT,r*n.dt*2),r=520,s<=0){if(this.seekTarget=null,this.ui.setStatus(null),this.flyAfterSeek){this.flyAfterSeek=!1,this.metrics=this.computeMetrics(n,"A");const d=this.metrics.hotspots??[];d.length&&this.world.director.flyTo(this.world.viewAt(d[0].x,d[0].y,520),2.5)}}else this.ui.setStatus(`${k("ffwd")} ${this.timeLabel(this.simT)}`);else this.playing&&(s=this.speed*t);if(this.tickMeasures(),s>0&&this.simT<this.windowSec){let d=Math.min(r,Math.max(1,Math.round(s/n.dt)));const h=(Math.floor(this.simT/Hr+1e-6)+1)*Hr;d=Math.max(1,Math.min(d,Math.ceil((h-this.simT)/n.dt-1e-6)));const f=this.simT+d*n.dt/2,v=this.sideModOf("B"),_=this.tideAt(f,v),m=this.rainAt(f,v),p=this.hsAt(f,v);if(n.step(d,_,m,p),this.baseline){const w=this.sideModOf("A");this.baseline.step(d,this.tideAt(f,w),this.rainAt(f,w),this.hsAt(f,w))}const x=this.simT;this.simT+=d*n.dt,this.world.advanceSim(d*n.dt),Math.floor(this.simT/Hr+1e-6)>Math.floor(x/Hr+1e-6)&&this.simT<this.windowSec&&this.checkpoint(),this.simT>=this.windowSec&&(this.simT=this.windowSec,this.setPlaying(!1),this.seekTarget=null,this.ui.setStatus(null)),this.ui.setTime(this.timeLabel(this.simT),this.simT/this.windowSec);const y=this.stormParts(this.simT);this.ui.setConditions({signal:y.sig,storm:y.dist,tide:_,rain:m*36e5,hs:p,dt:n.dt,n:d}),this.pins.length&&this.simT-this.lastPinSample>=300&&this.samplePins(n)}e-this.lastMetrics>700&&this.simT>0&&(this.lastMetrics=e,this.metrics=this.computeMetrics(n,"A"),this.baseline&&(this.baseMetrics=this.computeMetrics(this.baseline,"B")),this.ui.setMetrics(this.metrics,this.compare?this.baseMetrics:null),this.ui.setHotspots(this.hotspotLabels(this.metrics.hotspots??[])),this.ui.setValidation(this.assets.meta.validation[this.eventId]??[],this.metrics),this.ui.setChartCursor(this.simT/3600),this.syncLabelInset(),this.world.setLabels(this.labelItems(this.metrics)),this.ui.setFacilities(this.metrics,this.compare?this.baseMetrics:null),this.world.setBasements(this.basementItems(this.metrics)),this.pins.length&&this.pinsChanged(!1),this.follow&&this.followHotspot());const a=this.rainMmAt(this.simT),o=this.forcing,l=this.tideAt(this.simT)-za(o.tideT,o.astro,this.simT,o.astro),c=Math.min(1,Math.max(l/2.2,a/70,.1)),u=(o.start.getTime()/36e5+8+this.simT/3600)%24;this.world.setWeather(a,c,u),a>35&&e-this.lastLightning>2500&&Math.random()<.02&&(this.world.lightning(),this.lastLightning=e)}this.world.render(t)}}function za(i,e,t,n){if(!i.length)return 0;if(t<=i[0])return e[0];if(t>=i[i.length-1])return e[e.length-1];let s=0,r=i.length-1;for(;r-s>1;){const o=s+r>>1;i[o]<=t?s=o:r=o}const a=(t-i[s])/(i[r]-i[s]);return e[s]+(e[r]-e[s])*a}window.addEventListener("DOMContentLoaded",()=>{window.app=new WE});
